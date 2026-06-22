import { useState } from 'react';
import type { ApiResponse, ChainedValue } from '../types/api';

interface ResponseViewerProps {
  response: ApiResponse | null;
  error?: string;
  chainedValues?: ChainedValue[];
  onPinValue?: (key: string, value: string) => void;
  onUnpinValue?: (id: string) => void;
  endpointName?: string;
}

function flattenJson(obj: any, prefix = ''): Array<{ key: string; value: string }> {
  if (obj === null || obj === undefined) return [];
  const results: Array<{ key: string; value: string }> = [];
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    if (prefix) results.push({ key: prefix, value: String(obj) });
    return results;
  }
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v !== null && typeof v === 'object' && !Array.isArray(v)) {
      results.push(...flattenJson(v, path));
    } else if (!Array.isArray(v)) {
      results.push({ key: path, value: String(v) });
    }
  }
  return results;
}

export const ResponseViewer = ({
  response,
  error,
  chainedValues = [],
  onPinValue,
  onUnpinValue,
  endpointName = '',
}: ResponseViewerProps) => {
  const [activeTab, setActiveTab] = useState<'body' | 'headers' | 'request' | 'values'>('body');
  const [copied, setCopied] = useState(false);
  const [valueCopied, setValueCopied] = useState<string | null>(null);

  const handleCopy = async () => {
    if (!response) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(response.data, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleCopyValue = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setValueCopied(key);
      setTimeout(() => setValueCopied(null), 1500);
    } catch {}
  };

  if (error) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Response</h3>
        <div className="bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 rounded-lg p-4">
          <p className="text-rose-700 dark:text-rose-400 font-semibold mb-2 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Error
          </p>
          <p className="text-rose-600 dark:text-rose-300/80">{error}</p>
        </div>
      </div>
    );
  }

  if (!response) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Response</h3>
        <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-12 text-center border-dashed transition-colors duration-200">
          <p className="text-slate-500">Execute an API request to see the response here</p>
        </div>
      </div>
    );
  }

  const isSuccess = response.status >= 200 && response.status < 300;
  const isClientError = response.status >= 400 && response.status < 500;
  const isServerError = response.status >= 500;
  const errorMessage =
    typeof response.data === 'object' && response.data !== null
      ? response.data.message || response.data.error || response.data.reason || response.data.errors?.[0]?.message
      : undefined;
  const suggestedAction = response.status === 400
    ? 'Check required fields, formats, and conditional payload rules.'
    : response.status === 401 || response.status === 403
    ? 'Verify the OAuth token, tenant environment, and entity/org headers.'
    : response.status === 404
    ? 'Confirm the path parameter values and that the resource exists in this environment.'
    : isServerError
    ? 'Retry later or capture the request details for escalation.'
    : undefined;
  const statusColorClass = isSuccess
    ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20'
    : response.status >= 400 && response.status < 500
    ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20'
    : 'bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/20';

  const flatValues = isSuccess && typeof response.data === 'object' && response.data !== null
    ? flattenJson(response.data)
    : [];

  const pinnedKeys = new Set(chainedValues.map((v) => v.key));

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Response</h3>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Time:</span> {response.duration}ms
            </span>
            <span className={`px-3 py-1 rounded-md border font-mono text-sm font-medium ${statusColorClass}`}>
              {response.status} {response.statusText}
            </span>
          </div>
        </div>

        <div className="border-b border-slate-200 dark:border-slate-800 mb-4 transition-colors duration-200 flex items-center justify-between">
          <nav className="flex space-x-4">
            {(['body', 'headers', 'request'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors capitalize ${
                  activeTab === tab
                    ? 'border-zuora-500 text-zuora-600 dark:text-zuora-400'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
            {isSuccess && flatValues.length > 0 && (
              <button
                onClick={() => setActiveTab('values')}
                className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors flex items-center gap-1.5 ${
                  activeTab === 'values'
                    ? 'border-zuora-500 text-zuora-600 dark:text-zuora-400'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Chain Values
                {chainedValues.length > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-zuora-500 text-white">
                    {chainedValues.length}
                  </span>
                )}
              </button>
            )}
          </nav>

          {activeTab === 'body' && (
            <button
              onClick={handleCopy}
              className="mb-1 px-3 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-zuora-600 dark:hover:text-zuora-400 flex items-center gap-1 transition-colors"
            >
              {copied ? (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copy Body
                </>
              )}
            </button>
          )}
        </div>

        {!isSuccess && (
          <div className={`mb-4 rounded-lg border p-4 ${
            isClientError
              ? 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20'
              : 'bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/20'
          }`}>
            <div className={`text-sm font-semibold mb-1 ${
              isClientError ? 'text-amber-700 dark:text-amber-300' : 'text-rose-700 dark:text-rose-300'
            }`}>
              Request failed validation or processing
            </div>
            {errorMessage && (
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{String(errorMessage)}</p>
            )}
            {suggestedAction && (
              <p className="text-xs text-slate-600 dark:text-slate-400">{suggestedAction}</p>
            )}
          </div>
        )}

        {activeTab === 'body' && (
          <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto border border-slate-200 dark:border-slate-800 shadow-inner transition-colors duration-200">
            <pre className="text-slate-800 dark:text-emerald-400 text-sm font-mono leading-relaxed">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        )}

        {activeTab === 'headers' && (
          <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border border-slate-200 dark:border-slate-800 transition-colors duration-200 space-y-4">
            <div>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Response Headers</div>
              <div className="space-y-2">
                {Object.entries(response.headers).map(([key, value]) => (
                  <div key={`response-${key}`} className="flex border-b border-slate-200 dark:border-slate-800 pb-2 last:border-0 last:pb-0">
                    <span className="font-semibold text-zuora-700 dark:text-zuora-300 w-1/3 font-mono text-xs">{key}:</span>
                    <span className="text-slate-600 dark:text-slate-400 w-2/3 break-all font-mono text-xs">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Request Headers</div>
              <div className="space-y-2">
                {response.request?.headers
                  ? Object.entries(response.request.headers).map(([key, value]) => (
                      <div key={`request-${key}`} className="flex border-b border-slate-200 dark:border-slate-800 pb-2 last:border-0 last:pb-0">
                        <span className="font-semibold text-zuora-700 dark:text-zuora-300 w-1/3 font-mono text-xs">{key}:</span>
                        <span className="text-slate-600 dark:text-slate-400 w-2/3 break-all font-mono text-xs">{value}</span>
                      </div>
                    ))
                  : <div className="text-xs text-slate-500">No request headers captured.</div>}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'request' && (
          <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border border-slate-200 dark:border-slate-800 transition-colors duration-200 space-y-3">
            <div className="text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">URL:</span>{' '}
              {response.request?.url || 'Unknown'}
            </div>
            <div className="text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Method:</span>{' '}
              {response.request?.method || 'Unknown'}
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Headers</div>
              <div className="space-y-2">
                {response.request?.headers
                  ? Object.entries(response.request.headers).map(([key, value]) => (
                      <div key={key} className="flex border-b border-slate-200 dark:border-slate-800 pb-2 last:border-0 last:pb-0">
                        <span className="font-semibold text-zuora-700 dark:text-zuora-300 w-1/3 font-mono text-xs">{key}:</span>
                        <span className="text-slate-600 dark:text-slate-400 w-2/3 break-all font-mono text-xs">{value}</span>
                      </div>
                    ))
                  : <div className="text-xs text-slate-500">No request headers captured.</div>}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Body</div>
              <pre className="text-slate-800 dark:text-emerald-400 text-xs font-mono leading-relaxed">
                {response.request?.data ? JSON.stringify(response.request.data, null, 2) : '{}'}
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'values' && (
          <div className="space-y-2">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Pin values from this response to inject them into any field in your next request.
            </p>
            <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1">
              {flatValues.map(({ key, value }) => {
                const isPinned = pinnedKeys.has(key);
                const pinnedEntry = chainedValues.find((v) => v.key === key);
                return (
                  <div
                    key={key}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs transition-colors ${
                      isPinned
                        ? 'border-zuora-300 dark:border-zuora-500/50 bg-zuora-50 dark:bg-zuora-500/10'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <span className="font-mono text-zuora-700 dark:text-zuora-300 shrink-0 min-w-0 truncate max-w-[40%]" title={key}>
                      {key}
                    </span>
                    <span className="text-slate-400 dark:text-slate-600">→</span>
                    <span className="font-mono text-slate-700 dark:text-slate-300 flex-1 truncate min-w-0" title={value}>
                      {value.length > 40 ? `${value.slice(0, 40)}…` : value}
                    </span>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleCopyValue(value, key)}
                        className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                        title="Copy value"
                      >
                        {valueCopied === key ? (
                          <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (isPinned && pinnedEntry) {
                            onUnpinValue?.(pinnedEntry.id);
                          } else {
                            onPinValue?.(key, value);
                          }
                        }}
                        title={isPinned ? 'Unpin' : 'Pin to use in next request'}
                        className={`p-1 rounded transition-colors ${
                          isPinned
                            ? 'text-zuora-600 dark:text-zuora-400 hover:text-rose-500 dark:hover:text-rose-400'
                            : 'text-slate-400 hover:text-zuora-600 dark:hover:text-zuora-400'
                        }`}
                      >
                        <svg className="w-3.5 h-3.5" fill={isPinned ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            {chainedValues.length > 0 && (
              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Pinned ({chainedValues.length}) — available in all form fields
                  </span>
                  <button
                    type="button"
                    onClick={() => chainedValues.forEach((v) => onUnpinValue?.(v.id))}
                    className="text-xs text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 transition-colors"
                  >
                    Clear all
                  </button>
                </div>
                <div className="space-y-1">
                  {chainedValues.map((v) => (
                    <div key={v.id} className="flex items-center gap-2 text-xs bg-zuora-50 dark:bg-zuora-500/10 border border-zuora-200 dark:border-zuora-500/30 rounded-lg px-3 py-1.5">
                      <span className="font-mono text-zuora-700 dark:text-zuora-300 truncate flex-1">{v.key}</span>
                      <span className="text-slate-500 dark:text-slate-400 truncate max-w-[120px]" title={v.value}>{v.value}</span>
                      <button
                        type="button"
                        onClick={() => onUnpinValue?.(v.id)}
                        className="text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors shrink-0"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
