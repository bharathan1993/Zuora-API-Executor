import { useState, useEffect } from 'react';
import { ApiForm } from './components/ApiForm';
import { ResponseViewer } from './components/ResponseViewer';
import { CodeGenerator } from './components/CodeGenerator';
import { OAuthAuthentication } from './components/OAuthAuthentication';
import { Sidebar } from './components/Sidebar';
import { JsonPreview } from './components/JsonPreview';
import { SavedRequests } from './components/SavedRequests';
import { zuoraEndpoints } from './config/zuoraEndpoints';
import { zuoraEnvironments } from './config/environments';
import { apiExecutor } from './services/apiExecutor';
import { useTheme } from './hooks/useTheme';
import type { ApiEndpoint, ApiResponse, ApiRequest, SavedFolder, SavedRequest } from './types/api';

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
  const [liveHeaders, setLiveHeaders] = useState<Record<string, string> | undefined>();
  const [livePathParams, setLivePathParams] = useState<Record<string, any> | undefined>();
  const [savedRequests, setSavedRequests] = useState<SavedRequest[]>([]);
  const [savedFolders, setSavedFolders] = useState<SavedFolder[]>([]);
  const [prefillRequest, setPrefillRequest] = useState<SavedRequest | null>(null);
  const { theme, toggleTheme } = useTheme();
  const formId = 'zuora-api-form';
  const savedRequestsKey = 'zuora_saved_requests';

  const loadSavedRequests = () => {
    try {
      const raw = localStorage.getItem(savedRequestsKey);
      if (!raw) return { requests: [], folders: [] as SavedFolder[] };
      const parsed = JSON.parse(raw) as { requests?: SavedRequest[]; folders?: SavedFolder[] } | SavedRequest[];
      if (Array.isArray(parsed)) {
        return { requests: parsed, folders: [] as SavedFolder[] };
      }
      return {
        requests: parsed.requests || [],
        folders: parsed.folders || [],
      };
    } catch {
      return { requests: [], folders: [] as SavedFolder[] };
    }
  };

  const persistSavedRequests = (requests: SavedRequest[], folders: SavedFolder[]) => {
    localStorage.setItem(savedRequestsKey, JSON.stringify({ requests, folders }));
  };

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

    const loaded = loadSavedRequests();
    setSavedRequests(loaded.requests);
    setSavedFolders(loaded.folders);
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

  const executeRequest = async (
    endpoint: ApiEndpoint,
    data: any,
    customHeaders?: Record<string, string>,
    pathParams?: Record<string, any>
  ) => {
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
    const baseUrl = selectedEnvironment?.baseUrl || endpoint.baseUrl;

    // Create a modified endpoint with the selected environment's base URL
    const endpointWithEnv = {
      ...endpoint,
      baseUrl,
    };

    const request: ApiRequest = {
      endpoint: endpointWithEnv,
      authToken: authToken,
      data,
      customHeaders,
      pathParams,
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

  const handleSubmit = async (data: any, customHeaders?: Record<string, string>, pathParams?: Record<string, any>) => {
    await executeRequest(selectedEndpoint, data, customHeaders, pathParams);
  };

  const handleSaveRequest = () => {
    if (!selectedEndpoint) return;
    const name = window.prompt('Save request as:', selectedEndpoint.name);
    if (!name) return;
    const request: SavedRequest = {
      id: typeof crypto?.randomUUID === 'function'
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name,
      endpointId: selectedEndpoint.id,
      environmentId: selectedEnvironmentId,
      data: liveFormData,
      customHeaders: liveHeaders,
      pathParams: livePathParams,
      createdAt: Date.now(),
    };
    setSavedRequests((prev) => {
      const next = [request, ...prev];
      persistSavedRequests(next, savedFolders);
      return next;
    });
  };

  const handleUseSavedRequest = (request: SavedRequest) => {
    const endpoint = zuoraEndpoints.find((e) => e.id === request.endpointId);
    if (endpoint) {
      setSelectedEndpoint(endpoint);
    }
    if (request.environmentId) {
      setSelectedEnvironmentId(request.environmentId);
      localStorage.setItem('zuora_environment', request.environmentId);
    }
    setPrefillRequest(request);
  };

  const handleRunSavedRequest = (request: SavedRequest) => {
    const endpoint = zuoraEndpoints.find((e) => e.id === request.endpointId);
    if (!endpoint) return;
    if (request.environmentId) {
      setSelectedEnvironmentId(request.environmentId);
      localStorage.setItem('zuora_environment', request.environmentId);
    }
    setSelectedEndpoint(endpoint);
    executeRequest(endpoint, request.data || {}, request.customHeaders, request.pathParams);
  };

  const handleDeleteSavedRequest = (id: string) => {
    setSavedRequests((prev) => {
      const next = prev.filter((request) => request.id !== id);
      persistSavedRequests(next, savedFolders);
      return next;
    });
  };

  const handleRenameSavedRequest = (id: string, name: string) => {
    setSavedRequests((prev) => {
      const next = prev.map((request) => (request.id === id ? { ...request, name } : request));
      persistSavedRequests(next, savedFolders);
      return next;
    });
  };

  const handleDuplicateSavedRequest = (id: string) => {
    setSavedRequests((prev) => {
      const source = prev.find((request) => request.id === id);
      if (!source) return prev;
      const copy: SavedRequest = {
        ...source,
        id: typeof crypto?.randomUUID === 'function'
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        name: `${source.name} (Copy)`,
        createdAt: Date.now(),
      };
      const next = [copy, ...prev];
      persistSavedRequests(next, savedFolders);
      return next;
    });
  };

  const handleCreateFolder = (name: string) => {
    setSavedFolders((prev) => {
      const next = [
        ...prev,
        {
          id: typeof crypto?.randomUUID === 'function'
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
          name,
          createdAt: Date.now(),
        },
      ];
      persistSavedRequests(savedRequests, next);
      return next;
    });
  };

  const handleRenameFolder = (id: string, name: string) => {
    setSavedFolders((prev) => {
      const next = prev.map((folder) => (folder.id === id ? { ...folder, name } : folder));
      persistSavedRequests(savedRequests, next);
      return next;
    });
  };

  const handleDeleteFolder = (id: string) => {
    setSavedFolders((prevFolders) => {
      const nextFolders = prevFolders.filter((folder) => folder.id !== id);
      setSavedRequests((prevRequests) => {
        const nextRequests = prevRequests.map((request) =>
          request.folderId === id ? { ...request, folderId: undefined } : request
        );
        persistSavedRequests(nextRequests, nextFolders);
        return nextRequests;
      });
      return nextFolders;
    });
  };

  const handleMoveSavedRequest = (id: string, destination: { folderId?: string; index?: number }) => {
    setSavedRequests((prev) => {
      const sourceIndex = prev.findIndex((request) => request.id === id);
      if (sourceIndex < 0) return prev;
      const request = prev[sourceIndex];
      const updated = { ...request, folderId: destination.folderId };

      const grouped = new Map<string | undefined, SavedRequest[]>();
      prev.forEach((item) => {
        const key = item.folderId;
        const existing = grouped.get(key) || [];
        existing.push(item);
        grouped.set(key, existing);
      });

      const sourceKey = request.folderId;
      const sourceGroup = (grouped.get(sourceKey) || []).filter((item) => item.id !== id);
      grouped.set(sourceKey, sourceGroup);

      const targetKey = destination.folderId;
      const targetGroup = grouped.get(targetKey) || [];
      const insertIndex = destination.index ?? targetGroup.length;
      const nextTargetGroup = [
        ...targetGroup.slice(0, insertIndex),
        updated,
        ...targetGroup.slice(insertIndex),
      ];
      grouped.set(targetKey, nextTargetGroup);

      const ordered: SavedRequest[] = [];
      savedFolders.forEach((folder) => {
        const items = grouped.get(folder.id);
        if (items && items.length) {
          ordered.push(...items);
        }
      });
      const unsorted = grouped.get(undefined) || [];
      if (unsorted.length) {
        ordered.push(...unsorted);
      }

      persistSavedRequests(ordered, savedFolders);
      return ordered;
    });
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
          <div className="max-w-[1920px] mx-auto space-y-8 pb-12">
            
            {/* View Content */}
            {currentView === 'auth' ? (
              <div className="space-y-8 animate-fadeIn">
                {/* Proxy Server Toggle */}
                <div className="bg-white dark:bg-slate-900 border border-zuora-200 dark:border-zuora-500/30 rounded-xl p-4 backdrop-blur-sm relative overflow-hidden group shadow-sm transition-colors duration-200">
                  <div className="absolute inset-0 bg-gradient-to-r from-zuora-500/5 to-zuora-500/5 opacity-50 dark:opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start relative z-10">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-zuora-500 animate-pulse"></div>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-semibold text-zuora-700 dark:text-zuora-400">
                            CORS Proxy Server
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                            Required to bypass browser restrictions. Run the local proxy server on port 3001.
                          </p>
                        </div>
                        <label className="flex items-center cursor-pointer bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-zuora-400 dark:hover:border-zuora-500/50 transition-colors">
                          <input
                            type="checkbox"
                            checked={useProxy}
                            onChange={(e) => setUseProxy(e.target.checked)}
                            className="w-4 h-4 text-zuora-600 bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 rounded focus:ring-zuora-600 focus:ring-offset-white dark:focus:ring-offset-slate-900"
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
                      onHeadersChange={setLiveHeaders}
                      onPathParamsChange={setLivePathParams}
                      prefillData={prefillRequest?.data}
                      prefillHeaders={prefillRequest?.customHeaders}
                      prefillPathParams={prefillRequest?.pathParams}
                      prefillId={prefillRequest?.id}
                    />
                  </div>

                  {/* Right Column - Response & Code */}
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200">
                      <button
                        type="submit"
                        form={formId}
                        disabled={isLoading}
                        className={`w-full bg-gradient-to-r from-zuora-600 to-zuora-600 text-white py-3 px-6 rounded-lg font-bold shadow-lg shadow-zuora-500/25 hover:shadow-zuora-500/40 hover:from-zuora-500 hover:to-zuora-500 focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 transition-all transform active:scale-[0.99] ${
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
                    
                    <JsonPreview data={liveFormData} onSave={handleSaveRequest} />

                    <SavedRequests
                      requests={savedRequests}
                      folders={savedFolders}
                      onUse={handleUseSavedRequest}
                      onRun={handleRunSavedRequest}
                      onDelete={handleDeleteSavedRequest}
                      onRename={handleRenameSavedRequest}
                      onDuplicate={handleDuplicateSavedRequest}
                      onCreateFolder={handleCreateFolder}
                      onRenameFolder={handleRenameFolder}
                      onDeleteFolder={handleDeleteFolder}
                      onMoveRequest={handleMoveSavedRequest}
                    />
                    
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
