import { useState } from 'react';
import type { StorageCategory, StorageSnapshot } from '../hooks/useStorageUsage';

const AUTH_KEY_LABELS: Record<string, string> = {
  zuora_access_token: 'Billing OAuth Token',
  zuora_token_expiry: 'Token Expiry',
  zuora_token_tenant_id: 'Token Tenant ID',
  zuora_tenants: 'Saved Billing Tenants',
  zuora_active_tenant_id: 'Active Billing Tenant',
};

interface StorageManagerProps {
  usage: StorageSnapshot;
  onClearCategory: (keys: string[]) => void;
  onClearAll: () => void;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function CategoryRow({
  category,
  onClear,
}: {
  category: StorageCategory;
  onClear: () => void;
}) {
  const [confirmed, setConfirmed] = useState(false);

  const handleClear = () => {
    if (!confirmed) { setConfirmed(true); return; }
    onClear();
    setConfirmed(false);
  };

  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{category.label}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          {category.keys.length} {category.keys.length === 1 ? 'entry' : 'entries'} · {formatBytes(category.bytes)}
        </p>
      </div>
      {category.keys.length > 0 ? (
        <button
          type="button"
          onClick={handleClear}
          className={`ml-4 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${
            confirmed
              ? 'border-rose-300 dark:border-rose-500/50 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400'
              : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-rose-300 dark:hover:border-rose-500/50 hover:text-rose-600 dark:hover:text-rose-400'
          }`}
        >
          {confirmed ? 'Confirm clear' : 'Clear'}
        </button>
      ) : (
        <span className="ml-4 text-xs text-slate-400 dark:text-slate-600 px-3 py-1.5">Empty</span>
      )}
    </div>
  );
}

function AuthCategoryRow({
  category,
  onClear,
  onClearKey,
}: {
  category: StorageCategory;
  onClear: () => void;
  onClearKey: (key: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleClear = () => {
    if (!confirmed) { setConfirmed(true); return; }
    onClear();
    setConfirmed(false);
    setExpanded(false);
  };

  return (
    <div className="border-b border-slate-100 dark:border-slate-800 last:border-0">
      <div className="flex items-center justify-between py-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{category.label}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {category.keys.length} {category.keys.length === 1 ? 'entry' : 'entries'} · {formatBytes(category.bytes)}
            </p>
            {category.keys.length > 0 && (
              <button
                type="button"
                onClick={() => setExpanded(v => !v)}
                className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 underline transition-colors flex items-center gap-1"
              >
                {expanded ? 'Hide' : 'View entries'}
                <svg className={`w-3 h-3 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
        </div>
        {category.keys.length > 0 ? (
          <button
            type="button"
            onClick={handleClear}
            className={`ml-4 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${
              confirmed
                ? 'border-rose-300 dark:border-rose-500/50 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-rose-300 dark:hover:border-rose-500/50 hover:text-rose-600 dark:hover:text-rose-400'
            }`}
          >
            {confirmed ? 'Confirm clear' : 'Clear all'}
          </button>
        ) : (
          <span className="ml-4 text-xs text-slate-400 dark:text-slate-600 px-3 py-1.5">Empty</span>
        )}
      </div>

      {expanded && category.keys.length > 0 && (
        <div className="mb-3 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
          {category.keys.map((key, i) => {
            const value = localStorage.getItem(key) ?? '';
            const bytes = (key.length + value.length) * 2;
            const label = AUTH_KEY_LABELS[key] ?? key;
            const isLast = i === category.keys.length - 1;
            return (
              <div key={key} className={`flex items-center justify-between px-3 py-2 bg-slate-50 dark:bg-slate-950 ${!isLast ? 'border-b border-slate-100 dark:border-slate-800' : ''}`}>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300">{label}</p>
                  <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">{key} · {formatBytes(bytes)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onClearKey(key)}
                  className="ml-3 shrink-0 text-[10px] font-medium px-2 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-rose-300 dark:hover:border-rose-500/50 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export const StorageManager = ({ usage, onClearCategory, onClearAll }: StorageManagerProps) => {
  const [confirmClearAll, setConfirmClearAll] = useState(false);

  const barColor =
    usage.percentUsed >= 90
      ? 'bg-rose-500'
      : usage.percentUsed >= 70
      ? 'bg-amber-500'
      : 'bg-emerald-500';

  const categories = [
    usage.categories.formStates,
    usage.categories.savedRequests,
    usage.categories.auth,
    usage.categories.settings,
    usage.categories.other,
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Usage overview */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">Browser Storage</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
          Browsers cap localStorage at ~5 MB per origin. This is independent of your machine's disk space.
        </p>

        <div className="flex items-end justify-between mb-2">
          <span className="text-2xl font-bold text-slate-800 dark:text-white">
            {formatBytes(usage.totalBytes)}
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            of {formatBytes(usage.quotaBytes)} used ({usage.percentUsed}%)
          </span>
        </div>

        <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${barColor}`}
            style={{ width: `${Math.max(usage.percentUsed, usage.totalBytes > 0 ? 1 : 0)}%` }}
          />
        </div>

        {usage.percentUsed >= 70 && (
          <p className={`mt-3 text-xs font-medium ${
            usage.percentUsed >= 90 ? 'text-rose-600 dark:text-rose-400' : 'text-amber-600 dark:text-amber-400'
          }`}>
            {usage.percentUsed >= 90
              ? 'Storage is nearly full. Clear unused data to prevent save failures.'
              : 'Storage is getting full. Consider clearing old form states or saved requests.'}
          </p>
        )}
      </div>

      {/* Per-category breakdown */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-1">Breakdown by category</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          Clear individual categories to free up space without losing everything.
        </p>

        <div>
          {categories.map((cat) =>
            cat.label === 'Authentication' ? (
              <AuthCategoryRow
                key={cat.label}
                category={cat}
                onClear={() => onClearCategory(cat.keys)}
                onClearKey={(key) => onClearCategory([key])}
              />
            ) : (
              <CategoryRow
                key={cat.label}
                category={cat}
                onClear={() => onClearCategory(cat.keys)}
              />
            )
          )}
        </div>
      </div>

      {/* Danger zone */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-rose-200 dark:border-rose-500/20 p-6 shadow-sm">
        <h3 className="text-base font-semibold text-rose-700 dark:text-rose-400 mb-1">Danger zone</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          Clears all Zuora API Studio data from this browser — form states, saved requests, auth token, and settings. Cannot be undone.
        </p>
        <button
          type="button"
          onClick={() => {
            if (!confirmClearAll) { setConfirmClearAll(true); return; }
            onClearAll();
            setConfirmClearAll(false);
          }}
          className={`text-sm font-medium px-4 py-2 rounded-lg border transition-colors ${
            confirmClearAll
              ? 'border-rose-400 bg-rose-500 text-white hover:bg-rose-600'
              : 'border-rose-300 dark:border-rose-500/40 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10'
          }`}
        >
          {confirmClearAll ? 'Yes, clear everything' : 'Clear all stored data'}
        </button>
        {confirmClearAll && (
          <button
            type="button"
            onClick={() => setConfirmClearAll(false)}
            className="ml-3 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Tips */}
      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">What each category stores</h4>
        <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
          <li><span className="font-medium text-slate-700 dark:text-slate-300">Form states</span> — field values auto-saved per endpoint so you don't lose work when switching APIs.</li>
          <li><span className="font-medium text-slate-700 dark:text-slate-300">Saved requests</span> — requests you explicitly saved with names and folders.</li>
          <li><span className="font-medium text-slate-700 dark:text-slate-300">Authentication</span> — saved Billing tenants, OAuth tokens, and credentials. Click "View entries" to inspect and remove individual items.</li>
          <li><span className="font-medium text-slate-700 dark:text-slate-300">Settings</span> — selected environment, favourites, and recently-used endpoints.</li>
        </ul>
      </div>
    </div>
  );
};
