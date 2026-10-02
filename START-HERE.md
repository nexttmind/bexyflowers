# Bexy Flowers — source code and database

Version 26, exported 15 September 2026. Includes the latest full-screen animated mobile menu.
Source commit: `3acde0c755198b1a05ac5c28b221f7abc2a31543`.

## What's included

- Complete committed frontend/backend source, package lockfile, fonts and website images.
- `database/bexy.sqlite`: ready-to-open SQLite database with exported live records.
- `database/bexy.sql`: equivalent SQL schema and data export for a fresh database.
- `database/schema.sql`: schema only, if you want a clean database without existing records.
- `db/schema.ts`: Drizzle schema; `drizzle/`: all six migrations and metadata.
- `database/EXPORT-MANIFEST.json`: exact exported table counts and limitations.

The export includes 121 live rows across analytics, shop sessions and an older order draft. Other selected tables are empty. The live CMS table is empty, so the default catalogue and website content are loaded from source data modules, including `lib/demo-data.ts`, `lib/catalog.ts`, `lib/studio-flowers.ts` and `lib/atelier.ts`.

Active authentication sessions (`demo_auth`) and the internal IP-limiter signing key (`ai_limit_settings`) are intentionally not copied; their table structures are included. Sign in again on your new installation. The signing key is generated when required. This is a paginated read-only export, not a transactionally consistent backup taken at one instant.

Repository images are included. This does not include a backup of the hosted R2 upload bucket. Any manually uploaded `/api/media/...` files would need to be transferred separately.

## Run locally

Use Node.js 22.13 or newer with npm. Extract this folder first; this is a full-stack application, not an HTML file that can be opened directly.

Open a terminal in this folder:

```sh
npm ci
npx wrangler d1 execute DB --local --config wrangler.local.jsonc --persist-to .wrangler/state --file database/bexy.sql
npx vite --host 127.0.0.1
```

Open the localhost URL printed by Vite. The direct commands above avoid the Linux-specific shell wrappers in the original package scripts. For Windows, run these from PowerShell or use WSL. The initial dependency installation requires internet access.

Import the SQL only once into a **fresh local database**. It contains CREATE TABLE statements and will not merge with an existing database. Do not point it at your existing live database. To start with no exported records, use `database/schema.sql` in place of `database/bexy.sql`.

The Vite configuration and local Wrangler configuration use the same placeholder database ID and `.wrangler/state` storage. The placeholder does not connect to the hosted database. Opening `database/bexy.sqlite` in a SQLite viewer is useful for inspecting records; the application itself uses the D1 binding imported by the command above.

Demo admin: `/admin`, username `admin`, password `admin123`.

## Build and develop

```sh
npx vinext build
npx tsc --noEmit
```

The existing `npm run build` wrapper expects Linux utilities. The top-level README is the original starter reference; this file is the handover guide for Bexy Flowers.

Key folders:

- `app/`: routes, API endpoints, layout and CSS.
- `components/bexy/`: storefront, admin, customization and mobile navigation.
- `lib/`: catalogues, pricing, server services, analytics, bookings and AI quota policy.
- `db/` and `drizzle/`: database definitions and migrations.
- `worker/`: Cloudflare Worker entry point.
- `public/`: fonts and images.
- `tests/`: focused backend tests and local concurrency checks.

## Hosting and remaining integrations

The project uses React/TypeScript, Vinext/Vite, Cloudflare Workers, D1 and R2. It is not a generic static Next.js export. Moving it to another host requires compatible runtime/database bindings or adapting the backend.

`.openai/hosting.json` identifies the existing private Sites project. It is not a login credential. Do not redeploy it blindly to a new project. `wrangler.local.jsonc` is for local database setup only, not a production deployment configuration.

AI generation remains unconnected: add the owner's server-side adapter in `lib/server-ai-preview.ts`. The wrapper enforces three successful or in-flight generations per rolling hour per edge IP, with failure refunds. Verify the trusted edge IP header on the target hosting before enabling it. Local 3D customization remains available without an AI key.

Payment charging, email delivery and automated WhatsApp campaigns are not connected. The supplied admin login is for the demo and must be replaced with production authentication before a public launch. Provider credentials, active login tokens, dependencies and build output are not included.

The previous local tests passed 100 concurrent visitor flows / 2,500 API calls. Those tests do not guarantee hosted capacity or AI-provider throughput.
