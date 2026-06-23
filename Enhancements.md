# Enhancements

This file tracks feature enhancements and improvements made to Zuora API Studio beyond the initial release.

---

## 1. CORS Proxy Always-On

**Date:** June 2026

### What changed
The "Enable Proxy" checkbox has been removed from the Authentication screen. The CORS proxy is now always active — no user action required.

### Why
Zuora REST APIs do not include `Access-Control-Allow-Origin` headers, so browsers block direct requests from `localhost`. The proxy is not optional; every request requires it. Making users manually enable it added friction and caused silent failures when forgotten.

### How it works
- `useProxy` is now a constant `true` in `App.tsx` instead of a stateful boolean
- All requests continue to route through the local Express proxy at `localhost:3001`
- Users still need to run `node proxy-server.js` alongside `npm run dev` — this is a hard browser security requirement, not something the app can bypass

---

## 2. Request Chaining

**Date:** June 2026

### What it does
Allows users to extract values from a successful API response and inject them directly into fields of any subsequent request — without copy-pasting.

This solves the most common Zuora workflow pain point: sequential API calls where the output of one request (e.g. `accountId` from Create Account) is needed as input to the next (e.g. Create Subscription).

### User flow
1. Run any API and receive a successful (2xx) response
2. Click the **Chain Values** tab in the Response panel
3. The tab lists every leaf value from the response JSON as `key → value` rows (e.g. `accountId → A00000001`)
4. Click the **bookmark icon** next to any value to pin it
5. Switch to the next endpoint — every string, number, date, and email field now shows a green **"Use chained value"** link next to its label
6. Click the link → a dropdown shows all pinned values (key, value, source endpoint) — click one to inject it into the field instantly
7. Pinned values persist across endpoint switches for the duration of the browser session
8. Unpin values individually or use "Clear all" in the Chain Values tab

### Files changed
| File | Change |
|------|--------|
| `src/types/api.ts` | Added `ChainedValue` interface (`id`, `key`, `value`, `source`, `pinnedAt`) |
| `src/components/ResponseViewer.tsx` | Added "Chain Values" tab with flattened response value list, pin/unpin buttons, and pinned values summary |
| `src/App.tsx` | Added `chainedValues` state, `handlePinValue`, `handleUnpinValue` handlers; wired to ResponseViewer and ApiForm |
| `src/components/ApiForm.tsx` | Accepts and forwards `chainedValues` prop to FormField and FieldSection |
| `src/components/FieldSection.tsx` | Accepts and forwards `chainedValues` prop to FormField |
| `src/components/FormField.tsx` | Added "Use chained value" dropdown on all scalar fields (string, number, date, email, textarea); click a pinned value to inject it |

### Technical notes
- Response JSON is flattened to leaf `key: value` pairs recursively, skipping arrays (to keep the list readable)
- Pinned values are stored in React state only — they do not persist across page refreshes by design (they are session context, not saved data)
- The chain picker dropdown closes on outside click via a `mousedown` listener attached when the picker opens

---

## 3. Per-Endpoint Form State Persistence

**Date:** June 2026

### What it does
Automatically saves the form state (body fields, path params, query params, and custom headers) for each endpoint to `localStorage`. When you switch to a different endpoint and come back, your values are restored exactly as you left them.

### User flow
- Fill in any fields on an endpoint — the form saves automatically after 800ms of inactivity
- Switch to another endpoint, work there, then come back — your previous values are still present
- No manual save action required; saving is fully transparent
- Restored values are applied via the same prefill mechanism used by Saved Requests

### Files changed
| File | Change |
|------|--------|
| `src/App.tsx` | Added `loadFormState` / `saveFormState` helpers; debounced auto-save effect on `liveFormData` / `livePathParams` / `liveQueryParams` / `liveHeaders` changes; `handleViewChange` now saves the outgoing endpoint's state and restores the incoming endpoint's state via `setPrefillRequest` |

### Storage key format
```
zuora_form_<endpointId>   →   { data, pathParams, queryParams, headers }
```

### Edge cases
- If `localStorage.setItem` throws `QuotaExceededError` (storage full), the save fails silently — the form continues to work, it just won't persist until space is freed
- If no saved state exists for an endpoint, the form starts blank

---

## 4. Storage Manager

**Date:** June 2026

### What it does
Gives users visibility into how much browser localStorage is being used and lets them selectively clear data by category — without having to open browser DevTools.

This directly addresses the 5 MB browser-enforced localStorage cap: users can free up space before hitting the limit, and understand exactly what is stored and how much each category consumes.

### Accessing it
- Click **Storage** in the sidebar (under the Core section, below Authentication)
- Or click **Manage storage** in the warning banner (appears when usage ≥ 80%)

### Features

**Usage overview**
- Total bytes used vs. the assumed 5 MB quota, with a percentage
- Colour-coded progress bar: green → amber (≥ 70%) → red (≥ 90%)
- Contextual message when nearing the limit

**Per-category breakdown**
Each category shows entry count, byte size, and a two-step clear button (click to arm, click again to confirm):

| Category | What it contains |
|----------|-----------------|
| Form states | Auto-saved field values per endpoint (`zuora_form_*`) |
| Saved requests | Explicitly saved requests and folders (`zuora_saved_requests`) |
| Authentication | OAuth access token (`zuora_access_token`) |
| Settings | Selected environment, favourites, recently-used endpoints |
| Other | Any other Zuora-prefixed keys |

**Danger zone**
- "Clear all stored data" — two-step confirmation, removes everything across all categories
- Includes a Cancel button after arming

**Warning banner**
- Appears at the top of the main content area when usage ≥ 80%
- Amber at 80–89%, red at 90%+
- Contains a "Manage storage" link that navigates directly to the Storage Manager view
- Dismissable for the current session (reappears on next page load if still full)

**Sidebar badge**
- The Storage sidebar item shows a percentage badge (amber/red) when usage ≥ 80% so users notice without needing to see the banner

### Files changed
| File | Change |
|------|--------|
| `src/hooks/useStorageUsage.ts` | New hook — computes per-category storage usage snapshot; provides `refresh`, `clearCategory`, `clearAll` |
| `src/components/StorageManager.tsx` | New component — full storage management UI |
| `src/App.tsx` | Imports `useStorageUsage`; adds warning banner; adds `storage` view to the view switcher; passes `storagePercentUsed` to Sidebar |
| `src/components/Sidebar.tsx` | Added Storage nav item with optional percentage badge |

### Technical notes
- Storage size is estimated as `(key.length + value.length) × 2` bytes (UTF-16 encoding) per localStorage entry
- The assumed quota is 5 MB — browsers vary (Chrome/Safari ~5 MB, Firefox ~10 MB) but 5 MB is the safe conservative baseline
- `useStorageUsage` does not use `navigator.storage.estimate()` because that API reflects total origin storage (including IndexedDB, Cache API, etc.), not just localStorage
- The `refresh()` call is triggered after each debounced form state save so the usage display stays current
