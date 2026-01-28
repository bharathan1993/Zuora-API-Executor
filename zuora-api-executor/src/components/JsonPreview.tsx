import { useState } from 'react';

interface JsonPreviewProps {
  data: Record<string, any>;
  title?: string;
}

export const JsonPreview = ({ data, title = "Request Body Preview" }: JsonPreviewProps) => {
  const [copied, setCopied] = useState(false);
  const isEmpty = Object.keys(data).length === 0;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (isEmpty) return null;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200 animate-fadeIn">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          {title}
        </h3>
        <button
          onClick={handleCopy}
          className="px-3 py-1.5 text-xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
        >
          {copied ? 'Copied!' : 'Copy JSON'}
        </button>
      </div>

      <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto border border-slate-200 dark:border-slate-800 shadow-inner transition-colors duration-200 max-h-[400px]">
        <pre className="text-slate-800 dark:text-emerald-400 text-sm font-mono whitespace-pre-wrap leading-relaxed">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
};
