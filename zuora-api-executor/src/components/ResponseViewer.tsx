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
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Response</h3>
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800 font-semibold mb-2">Error</p>
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  if (!response) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Response</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-md p-8 text-center">
          <p className="text-gray-500">Execute an API request to see the response here</p>
        </div>
      </div>
    );
  }

  const isSuccess = response.status >= 200 && response.status < 300;
  const statusColorClass = isSuccess
    ? 'bg-green-100 text-green-800 border-green-200'
    : response.status >= 400 && response.status < 500
    ? 'bg-yellow-100 text-yellow-800 border-yellow-200'
    : 'bg-red-100 text-red-800 border-red-200';

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Response</h3>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              <span className="font-medium">Time:</span> {response.duration}ms
            </span>
            <span className={`px-3 py-1 rounded-md border font-semibold ${statusColorClass}`}>
              {response.status} {response.statusText}
            </span>
          </div>
        </div>

        <div className="border-b border-gray-200 mb-4">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab('body')}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'body'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Body
            </button>
            <button
              onClick={() => setActiveTab('headers')}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'headers'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Headers
            </button>
          </nav>
        </div>

        {activeTab === 'body' && (
          <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm font-mono">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        )}

        {activeTab === 'headers' && (
          <div className="bg-gray-50 rounded-md p-4">
            <div className="space-y-2">
              {Object.entries(response.headers).map(([key, value]) => (
                <div key={key} className="flex border-b border-gray-200 pb-2">
                  <span className="font-semibold text-gray-700 w-1/3">{key}:</span>
                  <span className="text-gray-600 w-2/3 break-all">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
