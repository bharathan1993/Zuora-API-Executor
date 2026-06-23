# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (run both in separate terminals)
node proxy-server.js        # CORS proxy on :3001 — required for browser → Zuora AND Revenue requests
npm run dev                 # Vite dev server on :5173

# Build & lint
npm run build               # tsc -b + vite build
npm run lint                # eslint

# Regenerate all Billing endpoint configs from OpenAPI spec (Revenue endpoints are hand-curated)
npm run generate-endpoints  # runs scripts/generateEndpoints.ts via tsx
```

There are no tests in this project.

## Architecture

This is a browser-based API client for both **Zuora Billing** and **Zuora Revenue**. The core data flow is:

```
zuora_openapi.yaml (+ zuora_openapi_otc.yaml)
  └─▶ scripts/generateEndpoints.ts + src/utils/openApiParser.ts
        └─▶ src/config/generated/**/*.ts  (713 ApiEndpoint objects, one file per endpoint)
              └─▶ src/config/zuoraEndpoints.ts  (merges generated + 2 hand-curated Billing endpoints)
              └─▶ src/config/revenueEndpoints.ts  (hand-curated Revenue endpoints)
                    ├─▶ Sidebar.tsx    (Billing/Revenue toggle + 23 Billing categories + Revenue section)
                    └─▶ ApiForm.tsx    (renders FieldDefinition[] as a dynamic form)
                               └─▶ services/apiExecutor.ts  (builds + sends HTTP request)
                                     └─▶ ResponseViewer.tsx
```

### Key concepts

**`ApiEndpoint` (src/types/api.ts)** — the single data model for every API. Contains `pathParams`, `queryParams`, `bodyFields` as `FieldDefinition[]` arrays. Everything the UI renders comes from this object. Revenue endpoints are tagged with `product: 'revenue'` and `authType: 'revenue-token'`.

**`FieldDefinition`** — typed field descriptor (`string | number | boolean | date | email | array | object | textarea`). Supports nesting via `fields` (nested object) and `itemFields` (array of objects). `FormField.tsx` renders any FieldDefinition recursively.

**Generated endpoints** (`src/config/generated/`) — 713 TypeScript files auto-generated from the Zuora Billing OpenAPI spec. Never hand-edit these; regenerate instead. `src/config/generated/index.ts` re-exports all of them.

**Manual overrides** — `src/config/accountsEndpoint.ts` is a hand-curated Create Account endpoint (not generated) because the generated version was insufficient. `src/config/zuoraEndpoints.ts` also defines 2 metadata endpoints manually and merges everything.

**Revenue endpoints** — `src/config/revenueEndpoints.ts` contains all Zuora Revenue API endpoints, hand-curated. They are never auto-generated. Add new Revenue endpoints here and merge them in `zuoraEndpoints.ts` (see `allEndpoints`).

**Sidebar categories** — Billing categories defined by path-pattern matching in `src/config/zuoraEndpoints.ts`. Revenue categories defined in `REVENUE_CATEGORIES` inside `revenueEndpoints.ts`. The sidebar has a Billing/Revenue pill toggle that shows/hides the relevant section.

**CORS proxy** — `proxy-server.js` (Express) runs on :3001. The browser sends requests to `localhost:3001/proxy` with an `X-Target-URL` header pointing to the actual Zuora or Revenue host. `apiExecutor.ts` builds the proxied URL when `useProxy` is true. The proxy exposes `revpro-token` and `zuora-request-id` via CORS `exposedHeaders`, and uses `rejectUnauthorized: false` for Revenue sandbox TLS.

**`openApiParser.ts`** is Node-only (uses `fs`). It is excluded from the browser bundle via `tsconfig.app.json`. It must never be imported from browser code.

## Authentication

### Zuora Billing
- Multi-tenant: saved as `TenantCredential[]` in `localStorage['zuora_tenants']`
- Active tenant ID: `localStorage['zuora_active_tenant_id']`
- Token ownership: `localStorage['zuora_token_tenant_id']` tracks which tenant generated the current token — other tenants' Generate buttons are disabled while a non-expired token exists
- OAuth flow in `src/services/oauthService.ts`; UI in `OAuthAuthentication.tsx`

### Zuora Revenue
- Multi-instance: saved as `RevenueInstance[]` in `localStorage['zuora_revenue_instances']`
- Active instance ID: `localStorage['zuora_revenue_active_id']`
- Auth: `POST /api/integration/v1/authenticate` with `Authorization: Basic base64(user:pass)` plus `role` and `clientname` request headers
- Token captured from `revpro-token` response header; stored in `localStorage['zuora_revenue_token']`
- Token ownership: only one instance can hold an active token; others are blocked until it is cleared
- Revenue host resolved in `apiExecutor.ts` via `getRevenueHost()` — reads active instance from `zuora_revenue_instances`/`zuora_revenue_active_id`, falls back to legacy `zuora_revenue_host`
- Date format for Revenue APIs: `dd-MON-yyyy` (e.g. `01-JUN-2026`) — Oracle style, not ISO

## Adding or modifying endpoints

### Billing endpoints (auto-generated)
- Update the OpenAPI YAML and run `npm run generate-endpoints`
- To hand-curate an override: add it alongside `accountsEndpoint.ts` and merge it in `zuoraEndpoints.ts`
- To add a new sidebar category: add a path-pattern branch to `getCategoryEndpoints` in `zuoraEndpoints.ts`

### Revenue endpoints (hand-curated)
- Add the `ApiEndpoint` object to `src/config/revenueEndpoints.ts` with `product: 'revenue'` and `authType: 'revenue-token'`
- Add it to the `tagMap` in `revenueEndpoints.ts` under the appropriate category tag
- It will automatically appear in the Revenue sidebar section

## Storage keys (localStorage)

| Key | Purpose |
|---|---|
| `zuora_access_token` | Active Billing OAuth token |
| `zuora_token_expiry` | Token expiry (ms timestamp) |
| `zuora_token_tenant_id` | Tenant that owns the active Billing token |
| `zuora_tenants` | Saved `TenantCredential[]` |
| `zuora_active_tenant_id` | Selected Billing tenant ID |
| `zuora_revenue_instances` | Saved `RevenueInstance[]` |
| `zuora_revenue_active_id` | Selected Revenue instance ID |
| `zuora_revenue_token` | Active Revenue `revpro-token` |
| `zuora_form_*` | Auto-saved form values per endpoint |
| `zuora_saved_requests` | Saved requests with folders |
| `zuora_environment` | Selected Billing environment ID |
| `zuora_favorite_endpoints` | Starred endpoint IDs |
| `zuora_recent_endpoints` | Recently used endpoint IDs |

All auth-related keys are categorised under "Authentication" in the Storage Manager (`useStorageUsage.ts`) via `AUTH_KEY_EXACT` and `AUTH_KEY_PREFIXES`.

## TypeScript config split

- `tsconfig.app.json` — browser build, excludes `src/utils/openApiParser.ts` and `scripts/`
- `tsconfig.node.json` — Node build for the generator script

Always run `npx tsc -p tsconfig.app.json --noEmit` after edits to confirm no browser build errors.
