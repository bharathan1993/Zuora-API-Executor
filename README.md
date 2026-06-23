# Zuora API Studio

A browser-based API client for Zuora that converts the official OpenAPI specification into guided forms, live request previews, and executable API calls — no Postman or curl needed.

Supports both **Zuora Billing** (742 endpoints) and **Zuora Revenue** APIs with separate authentication, multi-instance management, and a sidebar toggle to switch between the two product lines.

---

## Features

### Zuora Billing
- **742 endpoints** at runtime: 713 auto-generated from the Zuora 2026-05-01 OpenAPI spec, 2 Metadata APIs, and additional hand-curated overrides
- **23 sidebar categories** covering every major Zuora Billing domain
- **Multi-tenant support** — save multiple Billing tenants (Client ID + Secret + environment), switch between them with one click
- **OAuth token management** — auto-generate or manually paste bearer tokens; tracks which tenant owns the active token and blocks other tenants from generating until it is cleared or expires
- **Full query parameter support** — every GET/LIST endpoint exposes filters, pagination, and options as form fields
- **Standard Zuora headers** on all endpoints: `Zuora-Track-Id`, `Zuora-Entity-Ids`, `Zuora-Org-Ids`, `Zuora-Version`

### Zuora Revenue
- **Revenue API endpoints** — Get report list, Get report data, Get upload mapping, Submit data collection job, Get upload status, Get staging errors, and more
- **Multi-instance support** — save multiple Revenue hosts (name, host URL, username, password, role, clientname), switch between them at any time
- **Basic Auth token flow** — `POST /api/integration/v1/authenticate` using `Authorization: Basic base64(user:pass)` with `role` and `clientname` headers; token returned in `revpro-token` response header
- **Token ownership** — when one Revenue instance has an active token, other instances' Generate buttons are disabled until the token is cleared
- **Oracle-style date format** — Revenue `createddate` parameter uses `dd-MON-yyyy` format (e.g. `01-JUN-2026`)

### Shared
- **Billing / Revenue sidebar toggle** — pill switcher at the top of the sidebar to instantly switch between the two product API sections; syncs with the Authentication page tab
- **Schema-driven forms** with nested objects, arrays, enums, dates, and booleans
- **Clean payloads** — only fields you fill in are included in the request body
- **CORS proxy** for local/demo use (Express server forwards requests to Zuora and Revenue hosts)
- **Response viewer** with status, headers, duration, and formatted JSON
- **Code generator** — exports the current request as cURL, JavaScript (fetch), or Python, using the correct host URL (Billing environment or active Revenue instance)
- **Saved requests** with folders, rename, duplicate, and drag-and-drop organisation
- **Quick Access** — collapsible section in the sidebar showing recently used and starred endpoints
- **Storage Manager** — per-category localStorage usage breakdown with "View entries" for Authentication (inspect and remove individual credential entries)
- **Dark/light theme** toggle
- **Environment switcher** across all 10 Zuora Billing regions (US, EU, APAC — sandbox and production)

---

## Quick Start

```bash
# Install dependencies
npm install

# Start the CORS proxy (required for browser → Zuora and Revenue requests)
node proxy-server.js

# Start the dev server (separate terminal)
npm run dev
```

| Service | URL |
|---|---|
| App | http://localhost:5173 |
| CORS Proxy | http://localhost:3001 |

> **Note:** The proxy must be running for all API calls. It handles CORS, TLS termination for Revenue sandbox hosts, and exposes the `revpro-token` header to the browser.

---

## Authentication

### Zuora Billing

1. Open **Authentication** from the sidebar (Core section)
2. Under **Zuora Billing**, click **Add Tenant** and fill in:
   - Tenant name (label for your own reference)
   - Client ID and Client Secret (from Zuora tenant → Administration → OAuth Clients)
   - Environment / region
3. Select the tenant and click **Generate OAuth Token**
4. The token is stored in `localStorage` and automatically attached to all Billing API requests

Only one tenant can hold an active token at a time. To switch tenants, click **Clear** on the active token first.

### Zuora Revenue

1. Open **Authentication** and switch to the **Zuora Revenue** tab
2. Click **Add Instance** and fill in:
   - Name (label)
   - Host URL (e.g. `https://yourhost.revprooncloud.com`)
   - Username and Password
   - Role and Client Name (used as request headers)
3. Select the instance card and click **Generate Token**
4. The `revpro-token` is stored in `localStorage` and attached to all Revenue API requests

Only one Revenue instance can hold an active token at a time. Click **Clear token** to release it before generating for another instance.

> **VPN required for Revenue sandbox:** Revenue sandbox hosts (e.g. `bppservices-snd01.revprooncloud.com`) are on Zuora's internal network (CGNAT range). You must be on the Zuora VPN to reach them.

---

## Switching Between Billing and Revenue APIs

Use the **Zuora Billing / Revenue toggle** at the top of the sidebar (below the search bar) to switch between the two product API sections. Switching the toggle also automatically switches the **Authentication** page to the matching tab.

---

## API Coverage

### Zuora Billing — Sidebar Categories (23)

| Category | Endpoints | Description |
|---|---|---|
| Accounts | 15 | Create, retrieve, update accounts and billing docs |
| Subscriptions | 21 | Subscription lifecycle management |
| Orders | 25 | Order creation, preview, and amendments |
| Invoices | 42 | Invoice CRUD, email, reverse, write-off |
| Payments | 95 | Payments, payment methods, schedules, profiles |
| Products | 50 | Product catalog, rate plans, charges, tiers |
| Contacts | 11 | Contact management |
| Credit Memos | 40 | Credit memo lifecycle |
| Debit Memos | 31 | Debit memo lifecycle |
| Bill Runs | 6 | Bill run creation, posting, cancellation |
| Refunds | 16 | Refund processing and management |
| Usage | 8 | Usage record import and retrieval |
| Accounting | 16 | Accounting codes and periods |
| Journal Entries | 10 | Summary journal entries and journal runs |
| Workflows | 17 | Workflow definitions, triggers, and runs |
| Data Queries | 8 | Aggregate queries and data query jobs |
| Custom Objects | 10 | Custom object definitions and records |
| Fulfillments | 10 | Fulfillment management |
| Attachments | 5 | File attachments for billing objects |
| Notifications | 39 | Email templates, callouts, and event triggers |
| Settings | 7 | Tenant settings and sequence sets |
| General-Purpose Operations | 21 | Actions, settings, files, imports, custom exchange rates, attachments, metadata, and describe APIs |
| Other | 218+ | e-Invoicing, meters, deployment manager, SCIM, ramps, taxation items, and more |

### Zuora Revenue — Endpoints

| Endpoint | Method | Description |
|---|---|---|
| Get report list | GET | List available Revenue reports; filter by `createddate` (format: `dd-MON-yyyy`) |
| Get report data | GET | Retrieve data for a specific report by report name |
| Get upload mapping | GET | Retrieve the upload field mapping definition |
| Submit data collection job | POST | Submit a data collection job for processing |
| Get upload status | GET | Check the status of a data upload job |
| Get staging errors | GET | Retrieve staging error records |

---

## Scripts

```bash
npm run dev                  # Start Vite dev server
npm run build                # Type-check + production build
npm run preview              # Preview the production build locally
npm run lint                 # Run ESLint
npm run generate-endpoints   # Regenerate all Billing endpoint configs from OpenAPI spec
```

---

## Keeping Billing Endpoints Up to Date

All Billing endpoint definitions are auto-generated from the Zuora OpenAPI specification.

```bash
# Download the latest Zuora public specs
python3 -c "
import urllib.request
urllib.request.urlretrieve(
    'https://developer.zuora.com/yaml/apis/zuora-openapi-full-compact.yaml',
    'zuora_openapi.yaml'
)
urllib.request.urlretrieve(
    'https://developer.zuora.com/yaml/apis/zuora-openapi-for-otc.yaml',
    'zuora_openapi_otc.yaml'
)
print('Downloaded compact + OTC detailed specs')
"

# Regenerate all 700+ endpoint files
npm run generate-endpoints
```

> The Zuora **full compact** spec covers all APIs but strips field descriptions. The **OTC detailed** spec includes full parameter descriptions for Order-to-Cash APIs. The generator merges descriptions from the OTC spec automatically when `zuora_openapi_otc.yaml` is present.

Revenue endpoints are hand-curated in `src/config/revenueEndpoints.ts` and do not need regeneration.

---

## CORS Proxy

Zuora's REST APIs don't allow arbitrary browser origins. The included proxy (`proxy-server.js`) runs locally on port 3001 and forwards requests server-side.

Key proxy features:
- Forwards all request headers and body to the target Zuora / Revenue host
- Exposes `revpro-token` and `zuora-request-id` response headers to the browser (required for Revenue token capture)
- Disables TLS certificate verification for Revenue sandbox hosts (internal CGNAT range)
- Only sets a request body when one is provided (avoids empty-body errors on GET requests)

**For production:** Do not use the local proxy. Call Zuora from your backend only. Keep `client_id`, `client_secret`, and tokens off the browser.

```bash
# Start proxy (keep running alongside npm run dev)
node proxy-server.js
```

---

## Project Structure

```
zuora-api-studio/
├── src/
│   ├── components/
│   │   ├── Sidebar.tsx              # Category navigation, search, Billing/Revenue toggle
│   │   ├── ApiForm.tsx              # Dynamic form rendered from endpoint definition
│   │   ├── FormField.tsx            # Recursive individual field renderer
│   │   ├── FieldSection.tsx         # Collapsible field group
│   │   ├── ResponseViewer.tsx       # Response status, headers, duration, JSON
│   │   ├── CodeGenerator.tsx        # cURL / JS / Python code export
│   │   ├── JsonPreview.tsx          # Live request body preview
│   │   ├── SavedRequests.tsx        # Request library with folders
│   │   ├── NameModal.tsx            # Modal for naming saved requests
│   │   ├── OAuthAuthentication.tsx  # Billing OAuth + Revenue Basic Auth flows, multi-instance
│   │   ├── StorageManager.tsx       # localStorage usage by category with per-key removal
│   │   └── EnvironmentSelector.tsx  # Billing region / environment picker
│   ├── config/
│   │   ├── zuoraEndpoints.ts        # Runtime endpoint list + category filters (Billing)
│   │   ├── revenueEndpoints.ts      # Hand-curated Revenue API endpoints
│   │   ├── environments.ts          # 10 Zuora Billing environments (US/EU/APAC)
│   │   ├── accountsEndpoint.ts      # Hand-curated Create Account override
│   │   └── generated/               # Auto-generated endpoint configs (713 files)
│   │       ├── accounts/
│   │       ├── subscriptions/
│   │       ├── orders/
│   │       ├── invoices/
│   │       ├── payments/
│   │       ├── products/
│   │       ├── contacts/
│   │       ├── creditMemos/
│   │       ├── debitMemos/
│   │       ├── billRuns/
│   │       ├── refunds/
│   │       ├── usage/
│   │       ├── accounting/
│   │       ├── journalEntries/
│   │       ├── workflows/
│   │       ├── dataQueries/
│   │       ├── customObjects/
│   │       ├── fulfillments/
│   │       ├── attachments/
│   │       ├── notifications/
│   │       ├── settings/
│   │       └── other/
│   ├── services/
│   │   ├── apiExecutor.ts           # HTTP request builder, proxy routing, Revenue host resolution
│   │   └── oauthService.ts          # Billing OAuth client credentials flow
│   ├── hooks/
│   │   ├── useTheme.ts              # Dark/light theme toggle
│   │   └── useStorageUsage.ts       # localStorage usage snapshot and category breakdown
│   ├── types/
│   │   └── api.ts                   # ApiEndpoint, FieldDefinition, Environment, ApiRequest types
│   ├── utils/
│   │   └── openApiParser.ts         # Node-only: OpenAPI YAML → ApiEndpoint converter
│   ├── App.tsx                      # Root component, view routing, state management
│   └── main.tsx
├── scripts/
│   └── generateEndpoints.ts         # Generator script (tsx, Node-only)
├── proxy-server.js                  # Local CORS proxy (Express)
├── zuora_openapi.yaml               # Zuora OpenAPI spec (source of truth for generation)
├── zuora_openapi_otc.yaml           # OTC detailed spec (for richer field descriptions)
├── tsconfig.app.json                # Browser build config (excludes Node-only parser)
├── tsconfig.node.json               # Node build config (for generator script)
└── vite.config.ts
```

---

## Architecture

```
zuora_openapi.yaml  +  zuora_openapi_otc.yaml
       │
       ▼  (npm run generate-endpoints)
scripts/generateEndpoints.ts
  └── src/utils/openApiParser.ts
           │  resolves $ref schemas
           │  extracts queryParams, pathParams, bodyFields
           │  merges OTC descriptions into compact spec
           │  adds standard Zuora headers
           ▼
src/config/generated/**/*.ts   (713 ApiEndpoint objects)
       │
       ▼
src/config/zuoraEndpoints.ts   (merges generated + accountsEndpoint + 2 metadata)
src/config/revenueEndpoints.ts (hand-curated Revenue endpoints)
       │
       ├──▶ Sidebar.tsx          (Billing/Revenue toggle + 23 Billing categories + Revenue section)
       └──▶ ApiForm.tsx          (renders FieldDefinition[] as dynamic form)
                 │
                 ▼
           apiExecutor.ts        (builds HTTP request; resolves Revenue host from active instance)
                 │
                 ▼
           proxy-server.js       (forwards to Zuora / Revenue; exposes revpro-token header)
                 │
                 ▼
           ResponseViewer.tsx    (status, headers, JSON, duration)
```

---

## Data Model

### ApiEndpoint

```typescript
interface ApiEndpoint {
  id: string;
  name: string;
  description: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;                    // e.g. /v1/accounts/{account-key}
  baseUrl: string;
  environments: Environment[];
  requiresAuth: boolean;
  authType: 'bearer' | 'basic' | 'apiKey' | 'revenue-token';
  product?: 'billing' | 'revenue'; // Revenue endpoints are tagged 'revenue'
  headers?: Record<string, string>;
  pathParams?: FieldDefinition[];
  queryParams?: FieldDefinition[];
  bodyFields?: FieldDefinition[];
  exampleRequest?: any;
  exampleResponse?: any;
}
```

### FieldDefinition

Fields are typed as `string | number | boolean | date | email | array | object | textarea` and rendered automatically by `FormField.tsx`. Supports nesting via `fields` (nested object) and `itemFields` (array of objects).

---

## localStorage Keys

| Key | Description |
|---|---|
| `zuora_access_token` | Active Billing OAuth bearer token |
| `zuora_token_expiry` | Token expiry timestamp (ms) |
| `zuora_token_tenant_id` | ID of the tenant that generated the active Billing token |
| `zuora_tenants` | JSON array of saved `TenantCredential` objects |
| `zuora_active_tenant_id` | ID of the currently selected Billing tenant |
| `zuora_revenue_instances` | JSON array of saved `RevenueInstance` objects |
| `zuora_revenue_active_id` | ID of the currently selected Revenue instance |
| `zuora_revenue_token` | Active Revenue `revpro-token` value |
| `zuora_form_*` | Auto-saved form field values per endpoint |
| `zuora_saved_requests` | JSON array of saved requests with folders |
| `zuora_environment` | Selected Billing environment ID |
| `zuora_favorite_endpoints` | JSON array of starred endpoint IDs |
| `zuora_recent_endpoints` | JSON array of recently used endpoint IDs |

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 + TypeScript |
| Build | Vite 7 |
| Styling | TailwindCSS 3 |
| HTTP Client | Axios |
| CORS Proxy | Express 5 + node-fetch |
| Spec Parsing | js-yaml 4 |
| Code Execution | tsx (for generator script) |

---

## Recent Updates (June 2026)

### Zuora Revenue Support

- **Multi-instance Revenue management** — save and switch between multiple Revenue hosts, each with independent credentials (username, password, role, clientname)
- **Revenue Basic Auth flow** — `POST /api/integration/v1/authenticate` with `Authorization: Basic` header; token captured from `revpro-token` response header
- **Revenue token ownership** — only one instance can hold an active token; others are blocked until it is cleared
- **Revenue API endpoints** — Get report list, Get report data, Get upload mapping, Submit data collection job, Get upload status, Get staging errors
- **Oracle date format** — Revenue `createddate` field uses `dd-MON-yyyy` (e.g. `01-JUN-2026`) as required by the Revenue API
- **Code generator fix** — cURL / JS / Python examples for Revenue endpoints now use the active Revenue instance host, not the Billing base URL
- **Proxy enhancements** — `revpro-token` exposed via CORS `exposedHeaders`; `rejectUnauthorized: false` for Revenue sandbox TLS; empty-body fix for GET requests

### Authentication UX

- **Multi-tenant Billing** — save multiple tenants; Generate OAuth Token blocked for inactive tenants when another tenant owns an unexpired token
- **Billing / Revenue tab** syncs with the sidebar toggle — switching to Revenue in the sidebar automatically opens the Zuora Revenue auth tab
- **Two-column Auth layout** — instance/tenant list on the left, token panel on the right (matches the pattern for both Billing and Revenue)

### Sidebar

- **Billing / Revenue toggle** — pill switcher at the top of the sidebar below search; instantly hides/shows the relevant API section
- **Quick Access collapse/expand** — the Quick Access section (recents + favorites) can be collapsed to save vertical space

### Storage Manager

- **Correct Authentication categorisation** — all `zuora_revenue_*` prefixed keys and all auth-related exact keys are now correctly counted under the Authentication category
- **View entries** — the Authentication category expands to show each stored key with its friendly name, size, and a per-key Remove button
