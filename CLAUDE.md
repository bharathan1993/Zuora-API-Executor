# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (run both in separate terminals)
node proxy-server.js        # CORS proxy on :3001 — required for browser → Zuora requests
npm run dev                 # Vite dev server on :5173

# Build & lint
npm run build               # tsc -b + vite build
npm run lint                # eslint

# Regenerate all endpoint configs from OpenAPI spec
npm run generate-endpoints  # runs scripts/generateEndpoints.ts via tsx
```

There are no tests in this project.

## Architecture

This is a browser-based API client for Zuora. The core data flow is:

```
zuora_openapi.yaml (+ zuora_openapi_otc.yaml)
  └─▶ scripts/generateEndpoints.ts + src/utils/openApiParser.ts
        └─▶ src/config/generated/**/*.ts  (713 ApiEndpoint objects, one file per endpoint)
              └─▶ src/config/zuoraEndpoints.ts  (merges generated + 2 hand-curated endpoints)
                    ├─▶ Sidebar.tsx    (23 path-pattern categories for navigation)
                    └─▶ ApiForm.tsx    (renders FieldDefinition[] as a dynamic form)
                               └─▶ services/apiExecutor.ts  (builds + sends HTTP request)
                                     └─▶ ResponseViewer.tsx
```

### Key concepts

**`ApiEndpoint` (src/types/api.ts)** — the single data model for every API. Contains `pathParams`, `queryParams`, `bodyFields` as `FieldDefinition[]` arrays. Everything the UI renders comes from this object.

**`FieldDefinition`** — typed field descriptor (`string | number | boolean | date | email | array | object | textarea`). Supports nesting via `fields` (nested object) and `itemFields` (array of objects). `FormField.tsx` renders any FieldDefinition recursively.

**Generated endpoints** (`src/config/generated/`) — 713 TypeScript files auto-generated from the Zuora OpenAPI spec. Never hand-edit these; regenerate instead. `src/config/generated/index.ts` re-exports all of them.

**Manual overrides** — `src/config/accountsEndpoint.ts` is a hand-curated Create Account endpoint (not generated) because the generated version was insufficient. `src/config/zuoraEndpoints.ts` also defines 2 metadata endpoints manually and merges everything.

**Sidebar categories** — defined by path-pattern matching in `src/config/zuoraEndpoints.ts`, not by a separate config. The `getCategoryEndpoints(category)` function filters all 715 endpoints by URL prefix/pattern.

**CORS proxy** — `proxy-server.js` (Express) runs on :3001. The browser sends requests to `localhost:3001/proxy/<zuora-base-url>/<path>` with an `X-Target-URL` header. `apiExecutor.ts` builds the proxied URL when `useProxy` is true.

**`openApiParser.ts`** is Node-only (uses `fs`). It is excluded from the browser bundle via `tsconfig.app.json`. It must never be imported from browser code.

## Adding or modifying endpoints

- To add a new auto-generated endpoint: update the OpenAPI YAML and run `npm run generate-endpoints`.
- To hand-curate an endpoint (e.g., override generated output): add it alongside `accountsEndpoint.ts` and merge it in `zuoraEndpoints.ts`.
- To add a new sidebar category: add a path-pattern branch to `getCategoryEndpoints` in `zuoraEndpoints.ts`.

## TypeScript config split

- `tsconfig.app.json` — browser build, excludes `src/utils/openApiParser.ts` and `scripts/`
- `tsconfig.node.json` — Node build for the generator script
