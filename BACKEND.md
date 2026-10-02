# Bexy Flowers backend

The application runs on a Cloudflare-compatible Worker, with D1 for structured records and R2 for uploaded images. Sites manages the hosting bindings declared in `.openai/hosting.json`. No database credentials belong in the browser.

## Working flows

- Existing `/api/auth`: hashed customer passwords, expiring HTTP-only sessions, and the explicitly requested private preview administrator (`admin` / `admin123`). This remains preview authentication; no email verification or password recovery service is connected.
- Existing `/api/cms`, `/api/uploads`, `/api/media/[key]`: authenticated owner editing and durable media storage.
- `/api/store`: guest-session bags, favourites and custom designs. Its legacy draft action remains for compatibility; current checkout submits requests.
- `POST /api/requests`: an order uses the saved server-side bag, validates availability and configuration, snapshots prices and costs, and stores delivery/contact details. Weddings store the complete consultation enquiry. A client request UUID makes retrying the same submission safe.
- `GET /api/requests`: requests owned by the current bag session or signed-in customer. Private notes, audit history and costs are removed from customer responses. Email equality is never used as authorization.
- `GET /api/requests?admin=1`: protected studio inbox. Admin updates validate financial totals and use optimistic concurrency to prevent silent overwrites. Status changes never invent a payment. Every update retains a history entry.
- `/api/admin`: actual submitted orders and separately stored operating expenses. `?demo=1` preserves the original sample history independently. No seeded sales or expenses enter store-record analytics.
- The customer account shows request status; the admin opens on the order/enquiry inbox. Existing date, occasion, day/night, customer, bestseller and export views use the selected data source.

## Financial and stock semantics

All money is stored in integer USD cents. Receipts/refunds are manually recorded cumulative amounts, not payment processor actions. Product revenue and delivery receipts allocate partial payments/refunds proportionally; product cost uses the same proportion. Charts use order creation dates in Beirut time, not transaction settlement dates. Units represent orders with a positive retained payment. Non-custom arrangements have no invented stem counts. Custom costs default to zero and require expense entry, so profit is an estimate based on known costs.

Stock is checked against the aggregate requested quantity at submission. An enquiry does **not** reserve inventory or guarantee delivery. Rebecca confirms availability and updates catalog stock manually. Delivery fees are provisional until entered by the owner. Event payments are agreed outside this request flow.

## Provider boundaries

No online payment, charge, refund, automatic email, or WhatsApp campaign is sent. Sample campaign simulation is retained; store-record campaigns are disabled until a provider is connected. The AI preview still requires its provider configuration. This update does not introduce or claim these external integrations.

## Development and checks

Use Node 22.13+ and the committed npm lockfile. Run `npm ci`, `npm run dev`, and `npm run build` using the established project environment. Generate schema changes with `npm run db:generate`. The generated Drizzle migrations must be applied in order by the host; never rewrite previously applied migration files. Local development must also apply these migrations to its configured D1 database before using API routes.

Focused checks: `node --test tests/commerce.test.mjs tests/requests-api.test.mjs`. The API suite applies the real migrations to an isolated SQLite database and checks persistence, retry safety, admin authorization, customer isolation, private-field redaction and version conflict handling. It never contacts customers or changes the hosted database.

## Visitor analytics

The admin Visitor analytics tab reads `/api/analytics` with server-side admin authorization. Customer pages send anonymous page openings, scroll milestones and successful add-to-bag actions; visible tabs with recent interaction also send presence signals. The analytics cookie is a random browser identifier, separate from account identity. Analytics tables contain no IP addresses, location, name, email, query strings or referrers. Admin sessions and non-storefront routes are excluded.

A visit starts after 30 minutes of inactivity. Active means a presence signal within 45 seconds; clients stop signals when hidden or after one minute without interaction. Scrolling is a recent-activity estimate and can remain visible for up to 45 seconds. Unique visitors count browser cookies, not verified people. Cart events count successful UI additions, not completed sales or current bag contents. Charts show UTC dates; activity timestamps display Beirut time. Reporting is available for rolling 1, 7, 30 and 90-day periods and refreshes every 15 seconds while the dashboard is visible. Counts begin at deployment, with no invented historical traffic.

Verification: `node --test tests/visitor-analytics.test.mjs` exercises real generated migrations on isolated SQLite, including deduplication, visits/presence, scroll and cart summaries, admin exclusion, protected reporting and input validation.

## Consultation availability and booking

Rebecca publishes dated start/end consultation slots from Admin → Consultation calendar. All authored times are interpreted in Asia/Beirut (with daylight-saving conversion); invalid, ambiguous clock-change, past and overlapping slots are rejected. Sessions last 15 minutes to 4 hours. Open slots can be edited or hidden. Booked slots cannot be changed silently; cancellation updates the appointment status in the customer's saved enquiry. Cancelled slots remain as history and permit new availability at that time.

`GET /api/availability` exposes only future available slot IDs and times. The protected admin view includes booking references and customer names. Mutations require admin authentication, same-origin requests and version checks. On the wedding page, customers may choose an available slot with their enquiry or send an enquiry without a meeting. No fabricated default availability is seeded.

Booking inserts the enquiry and claims the slot in one D1 transaction using conditional statements. Two competing requests cannot book the same slot, and retrying the same request ID is idempotent. Appointment time comes from the slot record, never from customer-supplied dates. Meeting status is separate from overall wedding enquiry status. Automatic email/WhatsApp meeting messages and external calendar sync remain unconnected; Rebecca contacts the customer to agree meeting logistics.

Verification: `node --test tests/consultations.test.mjs` covers authorization, overlapping availability, public data minimization, competing bookings, retries, cancellation and Beirut summer/winter time conversion against the generated SQLite schema.
