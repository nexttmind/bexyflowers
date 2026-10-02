# Bexy Flowers

Responsive florist storefront with a Three.js bouquet configurator. React and TypeScript UI, Cloudflare Worker API, D1 database, accessible Radix/shadcn controls. The 3D module loads only when the bouquet studio is visited.

## Current behavior

- Home, collection, accessories, about, customize, Weddings & Events, account and admin routes.
- Collection search, category filtering, name sorting, product details, size and note selection.
- Server-persisted anonymous shopping bag, favorites, and saved bouquet composition using a secure session cookie.
- Delivery form validates Lebanese order details and saves a draft. It does not submit an order to the florist or take payment.
- Interactive procedural 3D flowers, mixed stem counts, rose/tulip colors, foliage, glitter, stem length, wrapping, rotation, and zoom.
- Catalog prices and products are illustrative mock data. Flower photos are actual Bexy work; character accessory photos are third-party examples and the crown photo is generated. Custom bouquets remain on request.

## Connections still required

The owner will provide the AI API contract and credentials. `app/api/bouquet-preview/route.ts` explicitly reports unavailable until the provider-specific server adapter is implemented. No AI model is being called. This is a stylized 3D composition, not a generated photorealistic image or an AI-created 3D model.

Live inventory, verified pricing, checkout/payment provider, order notifications, shipping rules, and customer account integration remain to be connected before this becomes a trading store. Drafts have no payment or confirmed-order status. Do not present stored drafts as sent orders.

## Content sources

- https://bexyflowers.shop/ — supplied by the owner’s developer; original site branding and assets.
- Original public about page asset `/assets/about-image-Y8MhE8h3.jpg` supplies the portrait shown on About.
- Original public footer links verify WhatsApp +961 76 104 882.
- https://www.instagram.com/bexyflowers/ — linked business profile; search indexed posts also reference this number.
- User supplied owner name Rebecca Yameen and Lebanon-only service scope. No opening hours, delivery fees, inventory, reviews, or unverified awards have been invented.

## Development

Use the project scripts for dependency installation, build, and database migration generation. Local dependency prerequisites: Node 22+. This project is prepared for managed Cloudflare Worker deployment; opening the source folder alone does not run the server.

Database migrations are under `drizzle/`. Future applied migrations must remain immutable. Provider keys must stay server-side and be set through the hosting environment, never in frontend source.

## Admin and mock commerce update

The storefront now uses a gold, white, and black palette. Public routes additionally include Weddings & Events, login, signup, and account. `/admin` opens the Business Studio. The requested demo credentials are username `admin`, password `admin123`. These are deliberately public demo credentials, not production authentication.

Mock customer signup/login is functional within this private prototype; passwords are hashed server-side and demo sessions use expiring HttpOnly cookies. Administrative write endpoints check the server session and request origin. No real payment, verification email, WhatsApp campaign, or order notification is sent.

The admin contains overview and detailed sales analytics, orders with names/contact details/payment amounts/statuses, customer lifetime spending and consent-aware bulk-message simulations, product management, expenses, and shop settings. Analytics use 420 deterministic sample orders through September 7, 2026, calculated consistently across hourly/daily/monthly/yearly periods in Asia/Beirut. Costs and sample prices are illustrative. Net profit is revenue less product costs and dated operating expenses; it excludes taxes and owner drawings. Time/occasion filters do not allocate operating expenses.

Edit website opens the actual storefront with edit mode enabled. Inline controls edit text, change/upload images, hide/restore fixed sections, and add/edit/hide products. Content is stored in D1; uploaded JPEG/PNG/WebP images are stored in R2. Press the explicit Save changes button to commit the editing draft. Editor moves and arbitrary new page-layout blocks are intentionally unavailable; the user requested a fixed layout.

Catalog updates preserve historical order prices and costs. The mock prices now supersede the earlier price-on-request catalog, while custom bouquets continue to require a quote. The checkout remains draft-only. Wedding inquiries are explicit temporary browser-tab drafts. Real AI rendering and commerce integrations remain pending owner-supplied APIs.

Verification: production build, TypeScript, isolated SQLite-backed API checks for admin/customer authorization, password hashing, content/catalog saves, new product bag flow, uploads, campaign simulations, refund arithmetic, and period aggregation. No browser QA was requested or performed.

## Mason Garments styling reference — September 2026

Reference: https://www.masongarments.com/ and https://www.masongarments.com/collections/accessories . Read public page CSS and inspected the reference desktop layout. The original uses Instrument Sans 400/700, heading/button tracking .18em, 76px desktop navigation, full-width imagery, horizontal product rails, a draggable color comparison, and restrained grids. Publicly served Instrument Sans WOFF2 files are self-hosted in public/fonts. The Bexy implementation adapts these patterns into white, black and gold, including mobile product rails, compact navigation with expandable collections, and two-column mobile catalog grids. No gender sections or Mason branding copied.

The new homepage includes a full-width flower campaign, arrangements, Weddings & Events campaign, accessories, signature feature, red/blue rose comparison and occasion collections. The color comparison is keyboard/touch adjustable; red and blue links initialize the 3D builder with 15 roses in the selected color. Query changes on the same catalog route update occasion/year/category filters. Products support flower/accessory type, occasions and collection years in the admin editor. Sample 2025/2026 membership is illustrative and does not claim historical catalog evidence. The catalog upgrade preserves existing content, edited products, and hidden items.

Accessory mock images:
- Crown: built-in image generation; prompt saved in ASSET-SOURCES.md. public/images/accessory-crown.webp.
- Spider-Man: public example figurine photo from Panamericana; no claim of actual Bexy stock. public/images/accessory-spiderman.webp.
- Minion: public example figurine photo from FLShop; no claim of actual Bexy stock. public/images/accessory-minion.webp.
- Rose comparison: original bexyflowers.shop/assets/custom/roses/red.png and blue.png.

TypeScript, production build, and isolated SQLite API checks cover catalog upgrades, preserved edits, accessory bag persistence and rose color initialization. Reference inspection is separate from application browser QA; no application browser test was run.

## Expanded customization atelier

The customize page imports the original public Bexy flower catalog: 49 variants in 13 families, with images copied and optimized locally from bexyflowers.shop. Source metadata is retained in lib/studio-flowers.ts. The page uses the site's Instrument Sans, white/black/gold theme and a compact responsive working layout.

Controls include Luxury Box / Signature Wrap; round, square, heart and rectangular boxes; classic, heart, letter, number, cascade and sunburst bouquets; small/medium/large capacities of 10/22/37; ten package colors; single-family or mixed flowers; family/style/season/search filters; per-flower quantity and center/edge/scattered/accent placement; dome/flat/cascading arrangement, density, bloom stage, foliage, stem length, glitter and satin ribbon. Includes all 12 original accessory choices plus the existing two character toppers. All choices persist to the saved design and cart, and checkout continues to save drafts only.

Package base prices, size multipliers, stem prices, glitter and original accessory rates come from the original site's public defaults and are displayed as demo estimates, pending owner confirmation. No availability, free delivery or same-day promises were inferred from the old site. Seasonal tags are guidance only.

Live Three.js preview uses each family/color and responds to presentation/shape/profile/density/bloom controls. Letter/number flower positions are a stylized layout. Accessory details are listed in the summary, not presented as photorealistic rendered objects. PNG download captures the actual 3D preview. The WhatsApp action opens a user-controlled discussion draft and does not send a message. AI image generation/variations remain unavailable pending the user's API connection.

Extended optional atelier data preserves old saved designs. Server validation checks known flower/accessory IDs, capacities, unique selections and shape details. Verified all 49 image files and prices, complete design/cart round-trip including bouquets with zero roses/tulips/peonies, capacity limits and legacy compatibility, TypeScript and production build. No application browser QA requested or performed.

## Capacity and AI allowance — 2026-09-15
- Public catalogue GET uses a 15-second per-isolate cache with single-flight reads. Admin writes invalidate the local cache; other isolates may show the previous catalogue for at most 15 seconds. Pricing/order validation still reads authoritative data.
- Visitor heartbeats are at most once per 15 seconds per visible, recently active browser; pending heartbeats are skipped and analytics requests time out after 8 seconds. Heartbeats no longer run an unnecessary analytics-event count query.
- AI previews: three successful or in-flight requests per rolling hour per edge IP. Atomic D1 admission works across isolates; 429 includes Retry-After and the next expiry. Failed provider calls release the reservation. Provider calls have a 45-second deadline and AbortSignal, which the eventual provider adapter must honor.
- ai_preview_attempts stores HMAC identifiers, never plaintext IPs. The secret is generated privately in ai_limit_settings; this table must never be exposed through CMS/export APIs. Indexed expiry cleanup removes up to 100 expired records per attempt; inactive records can remain until subsequent activity, but never count after one hour.
- Trust only CF-Connecting-IP from the Cloudflare edge. Do not substitute X-Forwarded-For, browser-supplied IPs, or a shared fallback. Missing/invalid headers and Cloudflare's cross-zone Worker placeholder fail closed. Before activating the provider, verify Sites dispatch preserves the original edge IP (including spoofed-header rejection) on the actual deployment. Reference: https://developers.cloudflare.com/fundamentals/reference/http-headers/#cf-connecting-ip
- IP allowances are shared by people using the same public IP; this is not a per-account limit. Changing networks changes the allowance.
- AI provider is still deliberately unavailable. The protected adapter wrapper is implemented and tested with a stub provider; no allowance is charged and no generation is offered until the owner's provider adapter is connected.
- Validation: TypeScript and 11 focused tests passed. A local SQLite-backed simulation ran 100 concurrent visitor flows / 2,500 API requests, preserving 100 isolated carts and 500 cart-add events. A 100-way same-IP burst admitted exactly three; 100 distinct IPs were independent. Rolling expiry, failure refunds, origin validation, database failure and IP normalization were checked. Local timings are not production capacity evidence.
- Remaining capacity validation: run representative staged HTTP/browser load against the actual hosting plan and connected provider, including cold starts, network latency, full-page assets and mobile 3D rendering. Target 100 active visitors, measure errors and p95 latency for browse/cart/checkout and AI, and inspect D1/provider quotas. Do not claim guaranteed production throughput from the local simulation.
