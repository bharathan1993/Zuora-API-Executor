# Zuora API Studio

A browser-based API client for Zuora that converts the official OpenAPI specification into guided forms, live request previews, and executable API calls — no Postman or curl needed.

---

## Features

- **715 endpoints** available at runtime: 713 auto-generated from the Zuora 2026-05-01 OpenAPI spec plus 2 Metadata APIs from the current v1 docs
- **23 sidebar categories** covering every major Zuora domain
- **Full query parameter support** — every GET/LIST endpoint exposes its filters, pagination, and options as form fields
- **Standard Zuora headers** on all endpoints: `Zuora-Track-Id`, `Zuora-Entity-Ids`, `Zuora-Org-Ids`, `Zuora-Version`
- **Schema-driven forms** with nested objects, arrays, enums, dates, and booleans
- **Clean payloads** — only fields you fill in are included in the request body
- **OAuth token helper** + manual bearer token mode
- **CORS proxy** for local/demo use (Express server forwards requests to Zuora)
- **Response viewer** with status, headers, duration, and formatted JSON
- **Code generator** — exports the current request as cURL, JavaScript (fetch), or Python
- **Saved requests** with folders, rename, duplicate, and drag-and-drop organisation
- **Dark/light theme** toggle
- **Environment switcher** across all 10 Zuora regions (US, EU, APAC — sandbox and production)

---

## Quick Start

```bash
# Install dependencies
npm install

# Start the CORS proxy (required for browser → Zuora requests)
node proxy-server.js

# Start the dev server
npm run dev
```

| Service | URL |
|---|---|
| App | http://localhost:5173 |
| CORS Proxy | http://localhost:3001 |

---

## API Coverage

### Sidebar Categories (23)

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
| Revenue | 1 | Zuora Revenue integration endpoints |
| General-Purpose Operations | 21 | Actions, settings, files, imports, custom exchange rates, attachments, metadata, and describe APIs |
| Workflows | 17 | Workflow definitions, triggers, and runs |
| Data Queries | 8 | Aggregate queries and data query jobs |
| Custom Objects | 10 | Custom object definitions and records |
| Fulfillments | 10 | Fulfillment management |
| Attachments | 5 | File attachments for billing objects |
| Notifications | 39 | Email templates, callouts, and event triggers |
| Settings | 7 | Tenant settings and sequence sets |

An additional **218 specialised endpoints** are available in the `other` category (e-invoicing, meters, deployment manager, SCIM, ramps, taxation items, etc.) and are loaded in the runtime even when not shown in the sidebar.

---

## Scripts

```bash
npm run dev              # Start Vite dev server
npm run build            # Type-check + production build
npm run preview          # Preview the production build locally
npm run generate-endpoints  # Regenerate all endpoint configs from spec
```

---

## Keeping Endpoints Up to Date

All endpoint definitions are auto-generated from the Zuora OpenAPI specification. To regenerate from the latest spec:

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

# Regenerate all 700+ endpoint files (descriptions merged from OTC detailed spec)
npm run generate-endpoints
```

> The Zuora **full compact** spec (`zuora-openapi-full-compact.yaml`) covers all APIs but strips field descriptions. The **OTC detailed** spec (`zuora-openapi-for-otc.yaml`) includes full parameter descriptions for Order-to-Cash APIs such as Create Account. The generator merges those descriptions into the compact endpoint configs automatically when `zuora_openapi_otc.yaml` is present.

---

## CORS Proxy

Zuora's REST APIs don't allow arbitrary browser origins. The included proxy (`proxy-server.js`) runs locally on port 3001 and forwards requests server-side.

**For production:** Do not use the local proxy. Call Zuora from your backend only. Keep `client_id`, `client_secret`, and access tokens off the browser.

```bash
# Start proxy separately (keep running alongside npm run dev)
node proxy-server.js
```

---

## Project Structure

```
zuora-api-studio/
├── src/
│   ├── components/          # React UI components
│   │   ├── Sidebar.tsx         # Category navigation + search
│   │   ├── ApiForm.tsx          # Dynamic form from endpoint definition
│   │   ├── FormField.tsx        # Individual field renderer
│   │   ├── FieldSection.tsx     # Collapsible field group
│   │   ├── ResponseViewer.tsx   # Response status, headers, JSON
│   │   ├── CodeGenerator.tsx    # cURL/JS/Python export
│   │   ├── JsonPreview.tsx      # Live request body preview
│   │   ├── SavedRequests.tsx    # Request library with folders
│   │   ├── OAuthAuthentication.tsx  # OAuth token flow
│   │   └── EnvironmentSelector.tsx  # Region/environment picker
│   ├── config/
│   │   ├── zuoraEndpoints.ts    # Runtime endpoint list + category filters
│   │   ├── environments.ts      # 10 Zuora environments (US/EU/APAC)
│   │   ├── accountsEndpoint.ts  # Hand-curated Create Account override
│   │   └── generated/           # Auto-generated endpoint configs (713 files)
│   │       ├── accounts/        # 15 endpoints
│   │       ├── subscriptions/   # 21 endpoints
│   │       ├── orders/          # 25 endpoints
│   │       ├── invoices/        # 42 endpoints
│   │       ├── payments/        # 95 endpoints
│   │       ├── products/        # 50 endpoints
│   │       ├── contacts/        # 11 endpoints
│   │       ├── creditMemos/     # 40 endpoints
│   │       ├── debitMemos/      # 31 endpoints
│   │       ├── billRuns/        # 6 endpoints
│   │       ├── refunds/         # 16 endpoints
│   │       ├── usage/           # 8 endpoints
│   │       ├── accounting/      # 16 endpoints
│   │       ├── journalEntries/  # 10 endpoints
│   │       ├── revenue/         # 1 endpoint
│   │       ├── workflows/       # 17 endpoints
│   │       ├── dataQueries/     # 8 endpoints
│   │       ├── customObjects/   # 10 endpoints
│   │       ├── fulfillments/    # 10 endpoints
│   │       ├── attachments/     # 5 endpoints
│   │       ├── notifications/   # 39 endpoints
│   │       ├── settings/        # 7 endpoints
│   │       └── other/           # 230 specialised endpoints
│   ├── services/
│   │   ├── apiExecutor.ts       # HTTP request builder and sender
│   │   └── oauthService.ts      # OAuth client credentials flow
│   ├── types/
│   │   └── api.ts               # ApiEndpoint, FieldDefinition, Environment types
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── utils/
│   │   └── openApiParser.ts     # Node-only: OpenAPI → ApiEndpoint converter
│   ├── App.tsx
│   └── main.tsx
├── scripts/
│   └── generateEndpoints.ts     # Generator script (run via npm run generate-endpoints)
├── proxy-server.js              # Local CORS proxy (Express)
├── zuora_openapi.yaml           # Zuora OpenAPI spec (source of truth for generation)
├── tsconfig.app.json            # Browser build config (excludes Node-only parser)
├── tsconfig.node.json           # Node build config (for scripts)
└── vite.config.ts
```

---

## Architecture

```
zuora_openapi.yaml
       │
       ▼  (yarn generate-endpoints)
scripts/generateEndpoints.ts
  └── src/utils/openApiParser.ts
           │  resolves $ref schemas
           │  extracts queryParams, pathParams, bodyFields
           │  adds standard Zuora headers
           ▼
src/config/generated/**/*.ts   (713 ApiEndpoint objects)
       │
       ▼
src/config/zuoraEndpoints.ts   (merges generated + manual overrides)
       │
       ├──▶ Sidebar.tsx          (22 path-pattern categories)
       └──▶ ApiForm.tsx          (renders fields from endpoint definition)
                 │
                 ▼
           apiExecutor.ts        (builds HTTP request, handles proxy/direct)
                 │
                 ▼
           ResponseViewer.tsx    (displays result)
```

---

## Data Model

Every API endpoint is a typed `ApiEndpoint` object:

```typescript
interface ApiEndpoint {
  id: string;
  name: string;
  description: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;               // e.g. /v1/accounts/{account-key}
  baseUrl: string;
  environments: Environment[];
  requiresAuth: boolean;
  authType: 'bearer' | 'basic' | 'apiKey';
  headers?: Record<string, string>;    // incl. Zuora-Track-Id etc.
  pathParams?: FieldDefinition[];      // from {param} in path
  queryParams?: FieldDefinition[];     // from OpenAPI parameters[in=query]
  bodyFields?: FieldDefinition[];      // from requestBody schema
  exampleRequest?: any;
  exampleResponse?: any;
}
```

Fields are typed as `string | number | boolean | date | email | array | object | textarea` and rendered automatically by `FormField.tsx`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 + TypeScript |
| Build | Vite 7 |
| Styling | TailwindCSS 3 |
| HTTP Client | Axios |
| CORS Proxy | Express 5 |
| Spec Parsing | js-yaml 4 |
| Code Execution | tsx (for generator script) |

---

## Recent Updates (May 2026)

### API Completeness Fix

The project was updated to match the full set of publicly exposed Zuora APIs (v2026-05-01):

**Parser improvements (`src/utils/openApiParser.ts`)**
- Query parameters are now extracted from the OpenAPI `parameters[]` array for every endpoint — previously all 712 endpoints had zero query parameters
- Path parameters now use richer spec metadata (descriptions, enums, validation) instead of simple regex extraction
- Global `$ref` parameters (`GLOBAL_HEADER_*`) are properly resolved and skipped as query params
- Standard Zuora headers added to every endpoint: `Zuora-Track-Id`, `Zuora-Entity-Ids`, `Zuora-Org-Ids`, `Zuora-Version`

**Generator improvements (`scripts/generateEndpoints.ts`)**
- Expanded from 9 to 23 output folders
- 13 new category buckets: `billRuns`, `refunds`, `usage`, `accounting`, `journalEntries`, `revenue`, `workflows`, `dataQueries`, `customObjects`, `fulfillments`, `attachments`, `notifications`, `settings`
- Custom objects correctly mapped to `/objects/definitions/` and `/objects/records/` paths (new 2026 spec path structure)
- Generator now cleans stale category folders before each run

**Sidebar expansion (`src/config/zuoraEndpoints.ts`)**
- 378 endpoints that were previously generated but completely hidden (dumped into `other/`) are now accessible through 13 new sidebar categories
- Total sidebar categories increased from 9 to 22

**Spec update**
- Replaced the previous 10.7MB spec (no longer present) with the official 2026-05-01 Zuora public spec downloaded from `https://developer.zuora.com/yaml/apis/zuora-openapi-full-compact.yaml`
- Endpoint count: 712 → 713 (net gain of 1 from new spec)

**Build fix**
- `openApiParser.ts` excluded from browser TypeScript compilation (`tsconfig.app.json`) — it uses Node.js `fs` and should never be bundled into the browser app
