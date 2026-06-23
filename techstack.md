# Tech Stack — Zuora API Studio

A full breakdown of every technology used to build, run, and deploy this project.

---

## Frontend

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19.2 | UI component framework |
| [TypeScript](https://www.typescriptlang.org) | 5.9 | Type-safe JavaScript across the entire codebase |
| [Vite](https://vite.dev) | 7.2 | Dev server with HMR, production bundler |
| [TailwindCSS](https://tailwindcss.com) | 3.4 | Utility-first CSS — all styling done inline via class names |
| [PostCSS](https://postcss.org) | 8.4 | CSS processing pipeline (required by Tailwind) |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | 10.4 | Adds vendor prefixes to CSS output automatically |

### React details
- **No router** — the app is a single-page layout with view state managed in `App.tsx` (`currentView` string)
- **No state management library** — all state is local `useState` / `useCallback` hooks; `localStorage` is the persistence layer
- **No UI component library** — all components are hand-built with Tailwind

---

## HTTP & Networking

| Technology | Version | Purpose |
|---|---|---|
| [Axios](https://axios-http.com) | 1.6 | HTTP client used by `apiExecutor.ts` and `oauthService.ts` for all API calls |
| [node-fetch](https://github.com/node-fetch/node-fetch) | 3.3 | Used inside `proxy-server.js` (local dev proxy) to make server-side requests |
| Native `fetch` | Node 18+ built-in | Used inside `api/proxy.js` (Vercel serverless) — no extra dependency needed |

---

## CORS Proxy

Two proxy implementations exist — one for local development, one for production:

### Local development — `proxy-server.js`
| Technology | Version | Purpose |
|---|---|---|
| [Express](https://expressjs.com) | 5.2 | HTTP server framework for the local proxy |
| [cors](https://github.com/expressjs/cors) | 2.8 | CORS middleware; exposes `revpro-token` and `zuora-request-id` headers to the browser |
| [node-fetch](https://github.com/node-fetch/node-fetch) | 3.3 | Forwards proxied requests to Zuora / Revenue hosts |
| Node.js `https` (built-in) | — | Custom `https.Agent` with `rejectUnauthorized: false` for Revenue sandbox TLS |

The proxy runs on `http://localhost:3001`. The browser sends every API call there with an `X-Target-URL` header containing the full target URL. The proxy forwards it server-side, bypassing browser CORS restrictions.

### Production — `api/proxy.js` (Vercel Serverless Function)
| Technology | Purpose |
|---|---|
| Vercel Serverless Functions | Runs `api/proxy.js` as a Node.js 18 Lambda on every request to `/api/proxy` |
| Native `fetch` (Node 18 built-in) | Makes the proxied HTTP request from Vercel's infrastructure |
| `export const config = { api: { bodyParser: false } }` | Disables Vercel's automatic body parsing so the raw request stream can be forwarded as-is |

Same design as the local proxy: `X-Target-URL` header carries the full target URL; the function just fetches it and pipes the response back.

---

## Authentication

| Flow | Implementation |
|---|---|
| **Zuora Billing OAuth** | `src/services/oauthService.ts` — `POST /oauth/token` with `client_credentials` grant via the proxy |
| **Zuora Revenue Basic Auth** | `OAuthAuthentication.tsx` — `POST /api/integration/v1/authenticate` with `Authorization: Basic base64(user:pass)` plus `role` and `clientname` headers; token captured from `revpro-token` response header |

All tokens and credentials are stored in **browser `localStorage`** only. Nothing is sent to any third-party server — the proxy is the only server involved and it only forwards requests.

---

## Data Persistence

| Storage | What is stored |
|---|---|
| `localStorage` | Billing tenants, Revenue instances, OAuth tokens, form field values, saved requests, settings, favorites, recents |

No database. No backend. No accounts. Everything lives in the browser.

---

## Endpoint Generation (Build-time tooling)

| Technology | Version | Purpose |
|---|---|---|
| [js-yaml](https://github.com/nodeca/js-yaml) | 4.1 | Parses the Zuora OpenAPI YAML spec into a JavaScript object |
| [tsx](https://github.com/privatenumber/tsx) | 4.21 | Runs `scripts/generateEndpoints.ts` directly with TypeScript support (no compile step needed) |
| [ts-node](https://typestrength.org/ts-node) | 10.9 | TypeScript execution for Node scripts (backup runner) |
| Node.js `fs` (built-in) | — | Reading YAML spec files and writing generated `.ts` endpoint files |

The generator (`scripts/generateEndpoints.ts`) reads `zuora_openapi.yaml` and `zuora_openapi_otc.yaml`, converts each OpenAPI operation into a typed `ApiEndpoint` object, and writes one `.ts` file per endpoint into `src/config/generated/`. These files are committed and bundled at build time — the browser never touches the YAML spec.

---

## Linting & Type Checking

| Technology | Version | Purpose |
|---|---|---|
| [ESLint](https://eslint.org) | 9.39 | JavaScript/TypeScript linting |
| [typescript-eslint](https://typescript-eslint.io) | 8.46 | TypeScript-aware lint rules |
| [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) | 7.0 | Enforces Rules of Hooks |
| [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh) | 0.4 | Validates components for Vite HMR compatibility |

TypeScript is split into two configs:
- **`tsconfig.app.json`** — browser bundle; excludes `src/utils/openApiParser.ts` and `scripts/` (Node-only code)
- **`tsconfig.node.json`** — Node.js; used for the endpoint generator script

---

## Deployment

| Platform | Configuration |
|---|---|
| [Vercel](https://vercel.com) | Hosts the production app; auto-deploys on `git push` to `main` |
| `vercel.json` | SPA fallback rewrite (`/((?!api/).*)` → `/index.html`) so client-side routing works; `/api/proxy` is handled by the serverless function automatically |
| Vercel Serverless Functions | `api/proxy.js` is automatically detected and deployed as a serverless function |

### Build pipeline on Vercel
1. `npm run build` → `tsc -b` (type-check) + `vite build` → outputs to `dist/`
2. Vercel serves `dist/` as static files
3. `api/proxy.js` is deployed as a serverless function at `/api/proxy`
4. All non-API paths fall back to `index.html` for client-side routing

---

## TypeScript Configuration

```
tsconfig.json          ← root references config
├── tsconfig.app.json  ← browser build (React app)
└── tsconfig.node.json ← Node build (generator script)
```

`openApiParser.ts` is explicitly excluded from the browser build because it uses Node.js `fs`. It is only ever executed at code-generation time, never in the browser.

---

## Summary

| Category | Technology |
|---|---|
| UI | React 19, TypeScript 5.9, TailwindCSS 3 |
| Build | Vite 7, PostCSS, Autoprefixer |
| HTTP | Axios (browser), node-fetch (local proxy), native fetch (Vercel proxy) |
| Local proxy | Express 5, cors, node-fetch |
| Production proxy | Vercel Serverless Function (Node 18, native fetch) |
| Spec parsing | js-yaml 4 |
| Script runner | tsx 4 |
| Linting | ESLint 9, typescript-eslint 8 |
| Persistence | Browser localStorage only |
| Deployment | Vercel |
