import { useState, useEffect, useRef, useCallback } from 'react';
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

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function escHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightLine(line: string): string {
  let out = '';
  let i = 0;
  while (i < line.length) {
    const ch = line[i];
    if (ch === '"') {
      let j = i + 1;
      while (j < line.length) {
        if (line[j] === '\\') { j += 2; continue; }
        if (line[j] === '"') break;
        j++;
      }
      const content = escHtml(line.slice(i + 1, j));
      j++;
      let k = j;
      while (k < line.length && line[k] === ' ') k++;
      if (line[k] === ':') {
        out += `<span class="text-sky-300">"${content}"</span><span class="text-slate-500">:</span>`;
        i = k + 1;
      } else {
        out += `<span class="text-emerald-400">"${content}"</span>`;
        i = j;
      }
      continue;
    }
    if ((ch === '-' || (ch >= '0' && ch <= '9')) &&
        (i === 0 || /[\s:,[{]/.test(line[i - 1]))) {
      let j = i;
      if (line[j] === '-') j++;
      while (j < line.length && /[\d.eE+\-]/.test(line[j])) j++;
      out += `<span class="text-amber-400">${escHtml(line.slice(i, j))}</span>`;
      i = j;
      continue;
    }
    if (line.slice(i, i + 4) === 'true') { out += '<span class="text-purple-400">true</span>'; i += 4; continue; }
    if (line.slice(i, i + 5) === 'false') { out += '<span class="text-purple-400">false</span>'; i += 5; continue; }
    if (line.slice(i, i + 4) === 'null') { out += '<span class="text-rose-400">null</span>'; i += 4; continue; }
    if ('{}[]'.includes(ch)) { out += `<span class="text-slate-400">${ch}</span>`; i++; continue; }
    if (ch === ',') { out += '<span class="text-slate-600">,</span>'; i++; continue; }
    out += escHtml(ch);
    i++;
  }
  return out;
}

// Wraps search-match segments in a highlight span, on top of syntax colours
function highlightSearchInLine(syntaxHtml: string, query: string): string {
  if (!query) return syntaxHtml;
  // Strip tags to find plain-text positions, then re-inject highlights
  const plain = syntaxHtml.replace(/<[^>]+>/g, '');
  const lowerPlain = plain.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const idx = lowerPlain.indexOf(lowerQuery);
  if (idx === -1) return syntaxHtml;
  // Simplest approach: highlight on the raw HTML string by matching escaped text
  // We operate on the already-escaped+tagged HTML and wrap literal text matches
  const escapedQuery = escHtml(query).toLowerCase();
  const re = new RegExp(escapedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  return syntaxHtml.replace(re, (m) => `<mark class="bg-amber-400/30 text-amber-200 rounded-sm">${m}</mark>`);
}

function SyntaxHighlightedJson({ json, searchQuery }: { json: string; searchQuery: string }) {
  const lines = json.split('\n');
  const lowerQuery = searchQuery.toLowerCase();
  return (
    <code className="block text-sm font-mono leading-6">
      {lines.map((line, i) => {
        const isMatch = lowerQuery && line.toLowerCase().includes(lowerQuery);
        const syntaxHtml = highlightLine(line);
        const finalHtml = isMatch ? highlightSearchInLine(syntaxHtml, searchQuery) : syntaxHtml;
        return (
          <div
            key={i}
            className={`flex hover:bg-white/[0.03] rounded transition-colors ${isMatch && lowerQuery ? 'bg-amber-400/5' : ''}`}
          >
            <span className="select-none w-10 shrink-0 text-right pr-4 text-slate-700 text-xs leading-6 border-r border-slate-800 mr-4">
              {i + 1}
            </span>
            <span className="flex-1 whitespace-pre" dangerouslySetInnerHTML={{ __html: finalHtml }} />
          </div>
        );
      })}
    </code>
  );
}

// ── shared panel content (used in both normal and expanded views) ────────────
function ResponsePanel({
  response,
  activeTab,
  setActiveTab,
  tabs,
  copied,
  valueCopied,
  handleCopy,
  handleCopyValue,
  handleDownloadJson,
  isBinary,
  jsonText,
  searchQuery,
  setSearchQuery,
  searchMatchCount,
  isSuccess,
  isClientError,
  errorMessage,
  suggestedAction,
  flatValues,
  pinnedKeys,
  chainedValues,
  onPinValue,
  onUnpinValue,
  expanded,
  onToggleExpand,
}: {
  response: ApiResponse;
  activeTab: string;
  setActiveTab: (t: any) => void;
  tabs: { id: string; label: string }[];
  copied: boolean;
  valueCopied: string | null;
  handleCopy: (t: string) => void;
  handleCopyValue: (v: string, k: string) => void;
  handleDownloadJson: () => void;
  isBinary: boolean;
  jsonText: string;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  searchMatchCount: number;
  isSuccess: boolean;
  isClientError: boolean;
  errorMessage?: string;
  suggestedAction?: string;
  flatValues: Array<{ key: string; value: string }>;
  pinnedKeys: Set<string>;
  chainedValues: ChainedValue[];
  onPinValue?: (key: string, value: string) => void;
  onUnpinValue?: (id: string) => void;
  expanded: boolean;
  onToggleExpand: () => void;
}) {
  const statusColors = isSuccess
    ? { dot: 'bg-emerald-500', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' }
    : isClientError
    ? { dot: 'bg-amber-500', badge: 'bg-amber-500/20 text-amber-400 border-amber-500/40' }
    : { dot: 'bg-rose-500', badge: 'bg-rose-500/20 text-rose-400 border-rose-500/40' };

  const responseSize = isBinary ? '—' : formatBytes(new TextEncoder().encode(jsonText).length);
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {/* Chrome bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800 shrink-0">
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${statusColors.dot}`} />
          <span className="w-3 h-3 rounded-full bg-slate-700" />
          <span className="w-3 h-3 rounded-full bg-slate-700" />
          <span className="ml-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Response</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-mono">{response.duration}ms · {responseSize}</span>
          <span className={`px-2.5 py-1 rounded-lg border text-xs font-bold font-mono ${statusColors.badge}`}>
            {response.status} {response.statusText}
          </span>
          {/* Expand / Collapse */}
          <button
            onClick={onToggleExpand}
            title={expanded ? 'Collapse' : 'Expand'}
            className="ml-1 p-1.5 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors"
          >
            {expanded ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M15 9h4.5M15 9V4.5M15 9l5.25-5.25M9 15H4.5M9 15v4.5M9 15l-5.25 5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex items-center justify-between px-4 bg-slate-900/50 border-b border-slate-800 shrink-0">
        <nav className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-zuora-400 text-zuora-400'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab.label}
              {tab.id === 'values' && chainedValues.length > 0 && (
                <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-zuora-500 text-white">
                  {chainedValues.length}
                </span>
              )}
            </button>
          ))}
        </nav>
        {activeTab === 'body' && !isBinary && (
          <div className="flex items-center gap-1.5 my-1.5">
            {/* Download JSON */}
            <button
              onClick={handleDownloadJson}
              title="Download as JSON"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700 border border-slate-700"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              JSON
            </button>
            {/* Copy */}
            <button
              onClick={() => handleCopy(jsonText)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {copied ? (
                <><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Copied</>
              ) : (
                <><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>Copy</>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Search bar — only on body tab, non-binary */}
      {activeTab === 'body' && !isBinary && (
        <div className="px-4 py-2 bg-slate-900/30 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search response…"
                className="w-full bg-slate-800/60 border border-slate-700 rounded-lg pl-8 pr-8 py-1.5 text-xs text-slate-300 placeholder-slate-600 focus:outline-none focus:border-zuora-500 focus:bg-slate-800 transition-colors font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {searchQuery && (
              <span className={`text-xs font-mono shrink-0 ${searchMatchCount > 0 ? 'text-amber-400' : 'text-slate-500'}`}>
                {searchMatchCount > 0 ? `${searchMatchCount} match${searchMatchCount !== 1 ? 'es' : ''}` : 'no matches'}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Error hint */}
      {!isSuccess && (
        <div className={`mx-4 mt-4 rounded-xl border p-3 flex gap-3 shrink-0 ${
          isClientError ? 'bg-amber-500/10 border-amber-500/25' : 'bg-rose-500/10 border-rose-500/25'
        }`}>
          <svg className={`w-4 h-4 shrink-0 mt-0.5 ${isClientError ? 'text-amber-400' : 'text-rose-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            {errorMessage && <p className="text-sm text-slate-300 mb-0.5">{String(errorMessage)}</p>}
            {suggestedAction && <p className={`text-xs ${isClientError ? 'text-amber-400/80' : 'text-rose-400/80'}`}>{suggestedAction}</p>}
          </div>
        </div>
      )}

      {/* Body tab */}
      {activeTab === 'body' && (
        isBinary ? (
          <div className="p-10 flex flex-col items-center justify-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center">
              <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-slate-300 font-semibold mb-1">File ready to download</p>
              <p className="text-slate-500 text-sm font-mono">{response.filename}</p>
            </div>
            <a
              href={response.blobUrl}
              download={response.filename}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zuora-600 hover:bg-zuora-500 text-white text-sm font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download {response.filename}
            </a>
          </div>
        ) : (
          <div className="overflow-auto p-4 flex-1 min-h-0">
            <SyntaxHighlightedJson json={jsonText} searchQuery={searchQuery} />
          </div>
        )
      )}

      {/* Headers tab */}
      {activeTab === 'headers' && (
        <div className="p-4 space-y-5 overflow-y-auto flex-1 min-h-0">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-2">Response Headers</p>
            <div className="rounded-xl border border-slate-800 overflow-hidden">
              {Object.entries(response.headers).map(([key, value], i, arr) => (
                <div key={`res-${key}`} className={`flex gap-4 px-3 py-2 text-xs font-mono ${i < arr.length - 1 ? 'border-b border-slate-800' : ''} hover:bg-slate-800/40 transition-colors`}>
                  <span className="text-sky-400 w-2/5 shrink-0 truncate">{key}</span>
                  <span className="text-slate-400 break-all">{value}</span>
                </div>
              ))}
            </div>
          </div>
          {response.request?.headers && (
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-2">Request Headers</p>
              <div className="rounded-xl border border-slate-800 overflow-hidden">
                {Object.entries(response.request.headers).map(([key, value], i, arr) => (
                  <div key={`req-${key}`} className={`flex gap-4 px-3 py-2 text-xs font-mono ${i < arr.length - 1 ? 'border-b border-slate-800' : ''} hover:bg-slate-800/40 transition-colors`}>
                    <span className="text-sky-400 w-2/5 shrink-0 truncate">{key}</span>
                    <span className="text-slate-400 break-all">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Request tab */}
      {activeTab === 'request' && (
        <div className="p-4 space-y-4 overflow-y-auto flex-1 min-h-0">
          <div className="rounded-xl border border-slate-800 overflow-hidden">
            <div className="flex gap-4 px-3 py-2.5 border-b border-slate-800 bg-slate-800/30">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 w-20 shrink-0 font-semibold">Method</span>
              <span className={`text-xs font-bold font-mono ${
                response.request?.method === 'GET' ? 'text-sky-400' :
                response.request?.method === 'POST' ? 'text-emerald-400' :
                response.request?.method === 'PUT' ? 'text-amber-400' :
                response.request?.method === 'DELETE' ? 'text-rose-400' : 'text-slate-300'
              }`}>{response.request?.method}</span>
            </div>
            <div className="flex gap-4 px-3 py-2.5">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 w-20 shrink-0 font-semibold mt-0.5">URL</span>
              <span className="text-xs font-mono text-emerald-400 break-all">{response.request?.url || '—'}</span>
            </div>
          </div>
          {response.request?.data && (
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-2">Request Body</p>
              <div className="rounded-xl border border-slate-800 overflow-x-auto p-3">
                <SyntaxHighlightedJson json={JSON.stringify(response.request.data, null, 2)} searchQuery="" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Chain Values tab */}
      {activeTab === 'values' && (
        <div className="p-4 space-y-3 overflow-y-auto flex-1 min-h-0">
          <p className="text-xs text-slate-500">Pin values to inject them into any field in your next request.</p>
          <div className="space-y-1.5 max-h-72 overflow-y-auto">
            {flatValues.map(({ key, value }) => {
              const isPinned = pinnedKeys.has(key);
              const pinnedEntry = chainedValues.find((v) => v.key === key);
              return (
                <div
                  key={key}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs transition-colors ${
                    isPinned ? 'border-zuora-500/50 bg-zuora-500/10' : 'border-slate-800 bg-slate-800/40 hover:border-slate-700'
                  }`}
                >
                  <span className="font-mono text-sky-400 shrink-0 truncate max-w-[38%]" title={key}>{key}</span>
                  <span className="text-slate-700 shrink-0">→</span>
                  <span className="font-mono text-emerald-400 flex-1 truncate" title={value}>
                    {value.length > 45 ? `${value.slice(0, 45)}…` : value}
                  </span>
                  <div className="flex items-center gap-1 shrink-0">
                    <button type="button" onClick={() => handleCopyValue(value, key)} className="p-1 rounded text-slate-600 hover:text-slate-300 transition-colors" title="Copy">
                      {valueCopied === key
                        ? <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        : <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                      }
                    </button>
                    <button
                      type="button"
                      onClick={() => isPinned && pinnedEntry ? onUnpinValue?.(pinnedEntry.id) : onPinValue?.(key, value)}
                      title={isPinned ? 'Unpin' : 'Pin'}
                      className={`p-1 rounded transition-colors ${isPinned ? 'text-zuora-400 hover:text-rose-400' : 'text-slate-600 hover:text-zuora-400'}`}
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
            <div className="pt-3 border-t border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Pinned ({chainedValues.length})</span>
                <button type="button" onClick={() => chainedValues.forEach((v) => onUnpinValue?.(v.id))} className="text-xs text-rose-400 hover:text-rose-300 transition-colors">Clear all</button>
              </div>
              <div className="space-y-1">
                {chainedValues.map((v) => (
                  <div key={v.id} className="flex items-center gap-2 text-xs bg-zuora-500/10 border border-zuora-500/30 rounded-lg px-3 py-1.5">
                    <span className="font-mono text-zuora-400 truncate flex-1">{v.key}</span>
                    <span className="text-slate-500 truncate max-w-[120px]" title={v.value}>{v.value}</span>
                    <button type="button" onClick={() => onUnpinValue?.(v.id)} className="text-slate-600 hover:text-rose-400 transition-colors shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export const ResponseViewer = ({
  response,
  error,
  chainedValues = [],
  onPinValue,
  onUnpinValue,
}: ResponseViewerProps) => {
  const [activeTab, setActiveTab] = useState<'body' | 'headers' | 'request' | 'values'>('body');
  const [copied, setCopied] = useState(false);
  const [valueCopied, setValueCopied] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (response) { setActiveTab('body'); setSearchQuery(''); }
  }, [response]);

  // Close expanded on Escape
  useEffect(() => {
    if (!expanded) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setExpanded(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [expanded]);

  const handleCopy = useCallback(async (text: string) => {
    try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {}
  }, []);

  const handleCopyValue = useCallback(async (value: string, key: string) => {
    try { await navigator.clipboard.writeText(value); setValueCopied(key); setTimeout(() => setValueCopied(null), 1500); } catch {}
  }, []);

  const CARD = 'bg-[#0f1117] rounded-2xl border border-slate-800 shadow-2xl shadow-black/50 overflow-hidden';

  if (error) {
    return (
      <div className={CARD}>
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/40" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/40" />
          <span className="ml-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Response</span>
        </div>
        <div className="p-6">
          <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4 flex gap-3">
            <svg className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-rose-400 font-semibold text-sm mb-1">Request Error</p>
              <p className="text-rose-300/80 text-sm">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!response) {
    return (
      <div className={CARD}>
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
          <span className="w-3 h-3 rounded-full bg-slate-700" />
          <span className="w-3 h-3 rounded-full bg-slate-700" />
          <span className="w-3 h-3 rounded-full bg-slate-700" />
          <span className="ml-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Response</span>
        </div>
        <div className="p-12 text-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-slate-500 text-sm">Run a request to see the response</p>
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

  const isBinary = !!response.blobUrl;
  const jsonText = isBinary ? '' : JSON.stringify(response.data, null, 2);

  const flatValues = isSuccess && !isBinary && typeof response.data === 'object' && response.data !== null
    ? flattenJson(response.data)
    : [];
  const pinnedKeys = new Set(chainedValues.map((v) => v.key));

  const tabs = [
    { id: 'body' as const, label: 'Body' },
    { id: 'headers' as const, label: 'Headers' },
    { id: 'request' as const, label: 'Request' },
    ...(isSuccess && flatValues.length > 0 ? [{ id: 'values' as const, label: 'Chain Values' }] : []),
  ];

  // Count search matches
  const searchMatchCount = searchQuery
    ? jsonText.split('\n').filter((l) => l.toLowerCase().includes(searchQuery.toLowerCase())).length
    : 0;

  const handleDownloadJson = () => {
    const blob = new Blob([jsonText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'response.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const panelProps = {
    response,
    activeTab,
    setActiveTab,
    tabs,
    copied,
    valueCopied,
    handleCopy,
    handleCopyValue,
    handleDownloadJson,
    isBinary,
    jsonText,
    searchQuery,
    setSearchQuery,
    searchMatchCount,
    isSuccess,
    isClientError,
    errorMessage,
    suggestedAction,
    flatValues,
    pinnedKeys,
    chainedValues,
    onPinValue,
    onUnpinValue,
    expanded,
    onToggleExpand: () => setExpanded((v) => !v),
  };

  return (
    <>
      {/* Normal card */}
      <div className={`${CARD} flex flex-col`}>
        <ResponsePanel {...panelProps} />
      </div>

      {/* Expanded modal */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={(e) => { if (e.target === e.currentTarget) setExpanded(false); }}
        >
          <div className="bg-[#0f1117] rounded-2xl border border-slate-700 shadow-2xl shadow-black w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden">
            <ResponsePanel {...panelProps} expanded={true} onToggleExpand={() => setExpanded(false)} />
          </div>
        </div>
      )}
    </>
  );
};
