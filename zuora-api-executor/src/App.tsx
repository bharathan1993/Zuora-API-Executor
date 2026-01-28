import { useState, useEffect } from 'react';
import { ApiForm } from './components/ApiForm';
import { ResponseViewer } from './components/ResponseViewer';
import { CodeGenerator } from './components/CodeGenerator';
import { OAuthAuthentication } from './components/OAuthAuthentication';
import { Sidebar } from './components/Sidebar';
import { JsonPreview } from './components/JsonPreview';
import { zuoraEndpoints } from './config/zuoraEndpoints';
import { zuoraEnvironments } from './config/environments';
import { apiExecutor } from './services/apiExecutor';
import { useTheme } from './hooks/useTheme';
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
  const [currentView, setCurrentView] = useState<string>('auth');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [liveFormData, setLiveFormData] = useState<Record<string, any>>({});
  const { theme, toggleTheme } = useTheme();
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

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    setIsSidebarOpen(false); // Close sidebar on mobile when navigating
    if (view !== 'auth') {
      const endpoint = zuoraEndpoints.find(e => e.id === view);
      if (endpoint) {
        setSelectedEndpoint(endpoint);
        setResponse(null);
        setError('');
        setCurrentRequest(null);
        setLiveFormData({}); // Reset live preview
      }
    }
  };

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
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors duration-200 overflow-hidden">
      
      <Sidebar 
        currentView={currentView}
        onSelectView={handleViewChange}
        endpoints={zuoraEndpoints}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full relative">
        
        {/* Top Header */}
        <header className="bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-20 backdrop-blur-sm transition-colors duration-200 flex-shrink-0">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors mr-2"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* View Title */}
              <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200 truncate">
                {currentView === 'auth' ? 'Authentication Configuration' : selectedEndpoint.name}
              </h2>

              <div className="flex items-center space-x-3">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth">
          <div className="max-w-6xl mx-auto space-y-8 pb-12">
            
            {/* View Content */}
            {currentView === 'auth' ? (
              <div className="space-y-8 animate-fadeIn">
                {/* Proxy Server Toggle */}
                <div className="bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-500/30 rounded-xl p-4 backdrop-blur-sm relative overflow-hidden group shadow-sm transition-colors duration-200">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-50 dark:opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start relative z-10">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                            CORS Proxy Server
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                            Required to bypass browser restrictions. Run the local proxy server on port 3001.
                          </p>
                        </div>
                        <label className="flex items-center cursor-pointer bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-colors">
                          <input
                            type="checkbox"
                            checked={useProxy}
                            onChange={(e) => setUseProxy(e.target.checked)}
                            className="w-4 h-4 text-indigo-600 bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 rounded focus:ring-indigo-600 focus:ring-offset-white dark:focus:ring-offset-slate-900"
                          />
                          <span className="ml-2 text-sm text-slate-700 dark:text-slate-200 font-medium">
                            Enable Proxy
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <OAuthAuthentication
                  environments={zuoraEnvironments}
                  selectedEnvironmentId={selectedEnvironmentId}
                  onEnvironmentChange={handleEnvironmentChange}
                  onTokenGenerated={handleTokenGenerated}
                  useCorsProxy={useProxy}
                />
              </div>
            ) : (
              <div className="animate-fadeIn space-y-8">
                 {/* Two Column Layout for API */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
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
                      onFormDataChange={setLiveFormData}
                    />
                  </div>

                  {/* Right Column - Response & Code */}
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200">
                      <button
                        type="submit"
                        form={formId}
                        disabled={isLoading}
                        className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-bold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 transition-all transform active:scale-[0.99] ${
                          isLoading ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Executing Request...
                          </span>
                        ) : (
                          'Execute Request'
                        )}
                      </button>
                    </div>
                    
                    <JsonPreview data={liveFormData} />
                    
                    <ResponseViewer response={response} error={error} />
                    <CodeGenerator request={currentRequest} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );}

export default App;
