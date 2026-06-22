import { useState } from 'react';
import type { StorageCategory, StorageSnapshot } from '../hooks/useStorageUsage';

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
          {categories.map((cat) => (
            <CategoryRow
              key={cat.label}
              category={cat}
              onClear={() => onClearCategory(cat.keys)}
            />
          ))}
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
          <li><span className="font-medium text-slate-700 dark:text-slate-300">Authentication</span> — the current OAuth access token.</li>
          <li><span className="font-medium text-slate-700 dark:text-slate-300">Settings</span> — selected environment, favourites, and recently-used endpoints.</li>
        </ul>
      </div>
    </div>
  );
};
