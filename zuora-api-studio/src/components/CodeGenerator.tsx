import { useState } from 'react';
import type { ApiRequest } from '../types/api';
import { apiExecutor } from '../services/apiExecutor';

interface CodeGeneratorProps {
  request: ApiRequest | null;
}

type CodeLanguage = 'curl' | 'javascript' | 'python';

export const CodeGenerator = ({ request }: CodeGeneratorProps) => {
  const [activeLanguage, setActiveLanguage] = useState<CodeLanguage>('curl');
  const [copied, setCopied] = useState(false);

  if (!request) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Code Example</h3>
        <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-12 text-center border-dashed transition-colors duration-200">
          <p className="text-slate-500">Fill out the form to see code examples</p>
        </div>
      </div>
    );
  }

  const getCode = (): string => {
    switch (activeLanguage) {
      case 'curl':
        return apiExecutor.generateCurlCommand(request);
      case 'javascript':
        return apiExecutor.generateJavaScriptCode(request);
      case 'python':
        return apiExecutor.generatePythonCode(request);
      default:
        return '';
    }
  };

  const copyToClipboard = async () => {
    const code = getCode();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Code Example</h3>
        <button
          onClick={copyToClipboard}
          className="px-3 py-1.5 text-xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className="border-b border-slate-200 dark:border-slate-800 mb-4 transition-colors duration-200">
        <nav className="flex space-x-4">
          <button
            onClick={() => setActiveLanguage('curl')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeLanguage === 'curl'
                ? 'border-zuora-500 text-zuora-600 dark:text-zuora-400'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            cURL
          </button>
          <button
            onClick={() => setActiveLanguage('javascript')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeLanguage === 'javascript'
                ? 'border-zuora-500 text-zuora-600 dark:text-zuora-400'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            JavaScript
          </button>
          <button
            onClick={() => setActiveLanguage('python')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeLanguage === 'python'
                ? 'border-zuora-500 text-zuora-600 dark:text-zuora-400'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            Python
          </button>
        </nav>
      </div>

      <div className="bg-slate-800 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto border border-slate-700 dark:border-slate-800 shadow-inner transition-colors duration-200">
        <pre className="text-emerald-400 text-sm font-mono whitespace-pre-wrap leading-relaxed">
          {getCode()}
        </pre>
      </div>
    </div>
  );
};
