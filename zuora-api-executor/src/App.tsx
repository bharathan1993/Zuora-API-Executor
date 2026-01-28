import { useState, useEffect } from 'react';
import { ApiForm } from './components/ApiForm';
import { ResponseViewer } from './components/ResponseViewer';
import { CodeGenerator } from './components/CodeGenerator';
import { OAuthAuthentication } from './components/OAuthAuthentication';
import { zuoraEndpoints } from './config/zuoraEndpoints';
import { zuoraEnvironments } from './config/environments';
import { apiExecutor } from './services/apiExecutor';
import type { ApiEndpoint, ApiResponse, ApiRequest } from './types/api';

function App() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint>(zuoraEndpoints[0]);
  const [selectedEnvironmentId, setSelectedEnvironmentId] = useState<string>(
    zuoraEnvironments[0]?.id || ''
  );
  const [authToken, setAuthToken] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string>('');
  const [currentRequest, setCurrentRequest] = useState<ApiRequest | null>(null);
  const [useProxy, setUseProxy] = useState<boolean>(false);
  const formId = 'zuora-api-form';

  useEffect(() => {
    // Load auth token and environment from localStorage
    const savedToken = localStorage.getItem('zuora_access_token');
    const savedEnvironment = localStorage.getItem('zuora_environment');

    if (savedToken) {
      setAuthToken(savedToken);
    }

    if (savedEnvironment) {
      const envExists = zuoraEnvironments.find(env => env.id === savedEnvironment);
      if (envExists) {
        setSelectedEnvironmentId(savedEnvironment);
      }
    }
  }, []);

  const handleTokenGenerated = (token: string) => {
    setAuthToken(token);
  };

  const handleEnvironmentChange = (environmentId: string) => {
    setSelectedEnvironmentId(environmentId);
    localStorage.setItem('zuora_environment', environmentId);
  };

  const handleSubmit = async (data: any, customHeaders?: Record<string, string>) => {
    if (!authToken) {
      setError('Please generate an OAuth token first');
      return;
    }

    setIsLoading(true);
    setError('');
    setResponse(null);

    // Set proxy mode
    apiExecutor.setUseProxy(useProxy);

    // Get the selected environment's base URL from zuoraEnvironments
    const selectedEnvironment = zuoraEnvironments.find(
      (env) => env.id === selectedEnvironmentId
    );
    const baseUrl = selectedEnvironment?.baseUrl || selectedEndpoint.baseUrl;

    // Create a modified endpoint with the selected environment's base URL
    const endpointWithEnv = {
      ...selectedEndpoint,
      baseUrl,
    };

    const request: ApiRequest = {
      endpoint: endpointWithEnv,
      authToken: authToken,
      data,
      customHeaders,
    };

    setCurrentRequest(request);

    try {
      const result = await apiExecutor.execute(request);
      setResponse(result);
    } catch (err: any) {
      setError(err.message || 'An error occurred while executing the request');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Zuora API Executor</h1>
              <p className="text-gray-600 mt-1">Execute Zuora APIs without leaving the browser</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Built for Zuora Hackathon</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Proxy Server Toggle */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm text-blue-700 font-semibold">
                Proxy Server Required
              </p>
              <p className="text-sm text-blue-700 mt-1">
                To bypass CORS, you need to run the local proxy server. See instructions below.
              </p>
              <div className="mt-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useProxy}
                    onChange={(e) => setUseProxy(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-blue-800 font-medium">
                    Use Local Proxy Server (localhost:3001)
                  </span>
                </label>
                {useProxy && (
                  <p className="text-xs text-green-700 mt-2">
                    ✓ Proxy enabled - Make sure the proxy server is running!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* OAuth Authentication Section */}
        <div className="mb-6">
          <OAuthAuthentication
            environments={zuoraEnvironments}
            selectedEnvironmentId={selectedEnvironmentId}
            onEnvironmentChange={handleEnvironmentChange}
            onTokenGenerated={handleTokenGenerated}
            useCorsProxy={useProxy}
          />
        </div>

        {/* Endpoint Selector */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Select API Endpoint</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {zuoraEndpoints.map((endpoint) => (
              <button
                key={endpoint.id}
                onClick={() => {
                  setSelectedEndpoint(endpoint);
                  setResponse(null);
                  setError('');
                  setCurrentRequest(null);
                }}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedEndpoint.id === endpoint.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">{endpoint.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                    endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {endpoint.method}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{endpoint.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Form */}
          <div className="space-y-6">
            <ApiForm
              endpoint={selectedEndpoint}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              formId={formId}
              showSubmit={false}
              selectedEnvironmentId={selectedEnvironmentId}
              onEnvironmentChange={handleEnvironmentChange}
            />
          </div>

          {/* Right Column - Response */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <button
                type="submit"
                form={formId}
                disabled={isLoading}
                className={`w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Executing...' : 'Execute API'}
              </button>
            </div>
            <ResponseViewer response={response} error={error} />
            <CodeGenerator request={currentRequest} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
