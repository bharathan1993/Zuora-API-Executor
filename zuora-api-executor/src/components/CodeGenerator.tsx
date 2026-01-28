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
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Code Example</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-md p-8 text-center">
          <p className="text-gray-500">Fill out the form to see code examples</p>
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
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Code Example</h3>
        <button
          onClick={copyToClipboard}
          className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className="border-b border-gray-200 mb-4">
        <nav className="flex space-x-4">
          <button
            onClick={() => setActiveLanguage('curl')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeLanguage === 'curl'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            cURL
          </button>
          <button
            onClick={() => setActiveLanguage('javascript')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeLanguage === 'javascript'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            JavaScript
          </button>
          <button
            onClick={() => setActiveLanguage('python')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeLanguage === 'python'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Python
          </button>
        </nav>
      </div>

      <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
        <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
          {getCode()}
        </pre>
      </div>
    </div>
  );
};
