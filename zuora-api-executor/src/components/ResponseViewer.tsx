import { useState } from 'react';
import type { ApiResponse } from '../types/api';

interface ResponseViewerProps {
  response: ApiResponse | null;
  error?: string;
}

export const ResponseViewer = ({ response, error }: ResponseViewerProps) => {
  const [activeTab, setActiveTab] = useState<'body' | 'headers'>('body');

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
  const statusColorClass = isSuccess
    ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20'
    : response.status >= 400 && response.status < 500
    ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20'
    : 'bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/20';

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

        <div className="border-b border-slate-200 dark:border-slate-800 mb-4 transition-colors duration-200">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab('body')}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'body'
                  ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              Body
            </button>
            <button
              onClick={() => setActiveTab('headers')}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'headers'
                  ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              Headers
            </button>
          </nav>
        </div>

        {activeTab === 'body' && (
          <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto border border-slate-200 dark:border-slate-800 shadow-inner transition-colors duration-200">
            <pre className="text-slate-800 dark:text-emerald-400 text-sm font-mono leading-relaxed">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        )}

        {activeTab === 'headers' && (
          <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border border-slate-200 dark:border-slate-800 transition-colors duration-200">
            <div className="space-y-2">
              {Object.entries(response.headers).map(([key, value]) => (
                <div key={key} className="flex border-b border-slate-200 dark:border-slate-800 pb-2 last:border-0 last:pb-0">
                  <span className="font-semibold text-indigo-700 dark:text-indigo-300 w-1/3 font-mono text-xs">{key}:</span>
                  <span className="text-slate-600 dark:text-slate-400 w-2/3 break-all font-mono text-xs">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
