import { useState, useEffect, useMemo } from 'react';
import { ApiForm } from './components/ApiForm';
import { ResponseViewer } from './components/ResponseViewer';
import { CodeGenerator } from './components/CodeGenerator';
import { OAuthAuthentication } from './components/OAuthAuthentication';
import { Sidebar } from './components/Sidebar';
import { JsonPreview } from './components/JsonPreview';
import { SavedRequests } from './components/SavedRequests';
import { StorageManager } from './components/StorageManager';
import { NameModal } from './components/NameModal';
import { zuoraEndpoints } from './config/zuoraEndpoints';
import { zuoraEnvironments } from './config/environments';
import { apiExecutor } from './services/apiExecutor';
import { useTheme } from './hooks/useTheme';
import { useStorageUsage, STORAGE_KEYS } from './hooks/useStorageUsage';
import type { ApiEndpoint, ApiResponse, ApiRequest, SavedFolder, SavedRequest, ChainedValue } from './types/api';

function App() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint>(zuoraEndpoints[0]);
  const [selectedEnvironmentId, setSelectedEnvironmentId] = useState<string>(
    zuoraEnvironments[0]?.id || ''
  );
  const [authToken, setAuthToken] = useState<string>('');
  const [activeTenantId, setActiveTenantId] = useState<string>(() => localStorage.getItem('zuora_active_tenant_id') ?? '');
  const [tenants, setTenants] = useState<Array<{ id: string; name: string; environmentId: string }>>(() => {
    try { return JSON.parse(localStorage.getItem('zuora_tenants') || '[]'); } catch { return []; }
  });
  const [showTenantDropdown, setShowTenantDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string>('');
  const [currentRequest, setCurrentRequest] = useState<ApiRequest | null>(null);
  const useProxy = true;
  const [currentView, setCurrentView] = useState<string>('auth');
  const [previousView, setPreviousView] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [liveFormData, setLiveFormData] = useState<Record<string, any>>({});
  const [liveHeaders, setLiveHeaders] = useState<Record<string, string> | undefined>();
  const [livePathParams, setLivePathParams] = useState<Record<string, any> | undefined>();
  const [liveQueryParams, setLiveQueryParams] = useState<Record<string, any> | undefined>();
  const [responseHistory, setResponseHistory] = useState<ApiResponse[]>([]);
  const [savedRequests, setSavedRequests] = useState<SavedRequest[]>([]);
  const [savedFolders, setSavedFolders] = useState<SavedFolder[]>([]);
  const [prefillRequest, setPrefillRequest] = useState<SavedRequest | null>(null);
  const [favoriteEndpointIds, setFavoriteEndpointIds] = useState<string[]>([]);
  const [recentEndpointIds, setRecentEndpointIds] = useState<string[]>([]);
  const [isJsonBodyMode, setIsJsonBodyMode] = useState(false);
  const [chainedValues, setChainedValues] = useState<ChainedValue[]>([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showInspectorPanel, setShowInspectorPanel] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const { usage, refresh: refreshStorage, clearCategory, clearAll: clearAllStorage } = useStorageUsage();
  const [storageBannerDismissed, setStorageBannerDismissed] = useState(false);
  const formId = 'zuora-api-form';
  const savedRequestsKey = activeTenantId ? `zuora_saved_requests_${activeTenantId}` : 'zuora_saved_requests';
  const formStatePrefix = activeTenantId ? `${STORAGE_KEYS.formStatePrefix}${activeTenantId}_` : STORAGE_KEYS.formStatePrefix;
  const favoritesKey = 'zuora_favorite_endpoints';
  const recentsKey = 'zuora_recent_endpoints';

  const loadSavedRequestsForKey = (key: string) => {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return { requests: [], folders: [] as SavedFolder[] };
      const parsed = JSON.parse(raw) as { requests?: SavedRequest[]; folders?: SavedFolder[] } | SavedRequest[];
      const defaultEndpointId = zuoraEndpoints[0]?.id ?? 'post-account';
      if (Array.isArray(parsed)) {
        return { requests: parsed, folders: [] as SavedFolder[] };
      }
      const folders = (parsed.folders || []).map((f: SavedFolder & { endpointId?: string }) =>
        f.endpointId != null ? f : { ...f, endpointId: defaultEndpointId }
      );
      return {
        requests: parsed.requests || [],
        folders,
      };
    } catch {
      return { requests: [], folders: [] as SavedFolder[] };
    }
  };

  const persistSavedRequests = (requests: SavedRequest[], folders: SavedFolder[]) => {
    localStorage.setItem(savedRequestsKey, JSON.stringify({ requests, folders }));
  };

  const loadFormState = (endpointId: string) => {
    try {
      const raw = localStorage.getItem(`${formStatePrefix}${endpointId}`);
      if (!raw) return null;
      return JSON.parse(raw) as { data?: Record<string, any>; pathParams?: Record<string, any>; queryParams?: Record<string, any>; headers?: Record<string, string> };
    } catch {
      return null;
    }
  };

  const saveFormState = (endpointId: string) => {
    if (!endpointId || currentView === 'auth' || currentView === 'storage') return;
    try {
      localStorage.setItem(`${formStatePrefix}${endpointId}`, JSON.stringify({
        data: liveFormData,
        pathParams: livePathParams,
        queryParams: liveQueryParams,
        headers: liveHeaders,
      }));
    } catch {
      // QuotaExceededError — fail silently
    }
  };

  const loadStringArray = (key: string) => {
    try {
      const parsed = JSON.parse(localStorage.getItem(key) || '[]');
      return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
    } catch {
      return [];
    }
  };

  useEffect(() => {
    const tenantId = localStorage.getItem('zuora_active_tenant_id') ?? '';
    // Load token: prefer per-tenant token, fall back to global
    const tenantToken = tenantId ? localStorage.getItem(`zuora_token_${tenantId}`) : null;
    const savedToken = tenantToken ?? localStorage.getItem('zuora_access_token');
    const savedEnvironment = localStorage.getItem('zuora_environment');

    if (savedToken) setAuthToken(savedToken);

    if (savedEnvironment) {
      const envExists = zuoraEnvironments.find(env => env.id === savedEnvironment);
      if (envExists) setSelectedEnvironmentId(savedEnvironment);
    }

    const key = tenantId ? `zuora_saved_requests_${tenantId}` : 'zuora_saved_requests';
    const loaded = loadSavedRequestsForKey(key);
    setSavedRequests(loaded.requests);
    setSavedFolders(loaded.folders);
    setFavoriteEndpointIds(loadStringArray(favoritesKey));
    setRecentEndpointIds(loadStringArray(recentsKey));
  }, []);

  // Auto-save form state for the current endpoint (debounced 800ms)
  useEffect(() => {
    if (currentView === 'auth' || currentView === 'storage') return;
    const timer = setTimeout(() => {
      saveFormState(selectedEndpoint.id);
      refreshStorage();
    }, 800);
    return () => clearTimeout(timer);
  }, [liveFormData, livePathParams, liveQueryParams, liveHeaders]);

  const handleViewChange = (view: string) => {
    // Save current endpoint's form state before leaving
    if (currentView !== 'auth' && currentView !== 'storage') {
      saveFormState(selectedEndpoint.id);
    }

    // When leaving auth page, refresh tenants list in case user added/edited
    if (currentView === 'auth' && view !== 'auth') {
      try {
        const freshTenants = JSON.parse(localStorage.getItem('zuora_tenants') || '[]');
        setTenants(freshTenants);
        const newActiveId = localStorage.getItem('zuora_active_tenant_id') ?? '';
        if (newActiveId !== activeTenantId) {
          handleTenantSwitch(newActiveId);
          return;
        }
      } catch { /* ignore */ }
    }

    setPreviousView(currentView);
    setCurrentView(view);
    setIsSidebarOpen(false);

    if (view !== 'auth' && view !== 'storage') {
      const endpoint = zuoraEndpoints.find(e => e.id === view);
      if (endpoint) {
        setSelectedEndpoint(endpoint);
        setResponse(null);
        setError('');
        setCurrentRequest(null);

        // Restore saved form state for this endpoint
        const saved = loadFormState(endpoint.id);
        if (saved && (saved.data || saved.pathParams || saved.queryParams)) {
          setPrefillRequest({
            id: typeof crypto?.randomUUID === 'function'
              ? crypto.randomUUID()
              : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            name: '__form_state__',
            endpointId: endpoint.id,
            data: saved.data,
            queryParams: saved.queryParams,
            customHeaders: saved.headers,
            pathParams: saved.pathParams,
            createdAt: Date.now(),
          });
        } else {
          setPrefillRequest(null);
          setLiveFormData({});
          setLiveQueryParams(undefined);
        }

        setRecentEndpointIds((prev) => {
          const next = [endpoint.id, ...prev.filter((id) => id !== endpoint.id)].slice(0, 10);
          localStorage.setItem(recentsKey, JSON.stringify(next));
          return next;
        });
      }
    }
  };

  const handleToggleFavoriteEndpoint = (endpointId: string) => {
    setFavoriteEndpointIds((prev) => {
      const next = prev.includes(endpointId)
        ? prev.filter((id) => id !== endpointId)
        : [endpointId, ...prev].slice(0, 20);
      localStorage.setItem(favoritesKey, JSON.stringify(next));
      return next;
    });
  };

  const handleTenantSwitch = (tenantId: string) => {
    setShowTenantDropdown(false);
    if (tenantId === activeTenantId) return;

    // Save current form state before switching
    if (currentView !== 'auth' && currentView !== 'storage') {
      saveFormState(selectedEndpoint.id);
    }

    setActiveTenantId(tenantId);
    localStorage.setItem('zuora_active_tenant_id', tenantId);

    // Load this tenant's token
    const tenantToken = tenantId ? (localStorage.getItem(`zuora_token_${tenantId}`) ?? '') : '';
    setAuthToken(tenantToken);

    // Load this tenant's saved requests immediately (can't wait for state update)
    const key = tenantId ? `zuora_saved_requests_${tenantId}` : 'zuora_saved_requests';
    const loaded = loadSavedRequestsForKey(key);
    setSavedRequests(loaded.requests);
    setSavedFolders(loaded.folders);

    // Clear form (start fresh per tenant)
    setPrefillRequest(null);
    setLiveFormData({});
    setLiveQueryParams(undefined);
    setResponse(null);
    setError('');
  };

  const handleTokenGenerated = (token: string) => {
    setAuthToken(token);
    // Also save per-tenant so switching back restores it
    if (activeTenantId && token) {
      localStorage.setItem(`zuora_token_${activeTenantId}`, token);
    }
  };

  const handleEnvironmentChange = (environmentId: string) => {
    setSelectedEnvironmentId(environmentId);
    localStorage.setItem('zuora_environment', environmentId);
  };

  const executeRequest = async (
    endpoint: ApiEndpoint,
    data: any,
    customHeaders?: Record<string, string>,
    pathParams?: Record<string, any>,
    queryParams?: Record<string, any>
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
      queryParams,
    };

    setCurrentRequest(request);

    try {
      const result = await apiExecutor.execute(request);
      setResponse(result);
      setResponseHistory((prev) => [result, ...prev].slice(0, 8));

    } catch (err: any) {
      setError(err.message || 'An error occurred while executing the request');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (data: any, customHeaders?: Record<string, string>, pathParams?: Record<string, any>, queryParams?: Record<string, any>) => {
    await executeRequest(selectedEndpoint, data, customHeaders, pathParams, queryParams);
  };

  const handleSaveRequest = () => {
    if (!selectedEndpoint) return;
    setShowSaveModal(true);
  };

  const handleConfirmSaveRequest = (name: string) => {
    setShowSaveModal(false);
    const request: SavedRequest = {
      id: typeof crypto?.randomUUID === 'function'
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name,
      endpointId: selectedEndpoint.id,
      environmentId: selectedEnvironmentId,
      data: liveFormData,
      queryParams: liveQueryParams,
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

  const handlePreviewEdit = (editedData: Record<string, any>) => {
    if (!selectedEndpoint) return;
    setPrefillRequest({
      id: typeof crypto?.randomUUID === 'function'
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: '__preview_edit__',
      endpointId: selectedEndpoint.id,
      data: editedData,
      createdAt: Date.now(),
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
    executeRequest(endpoint, request.data || {}, request.customHeaders, request.pathParams, request.queryParams);
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
    const endpointId = selectedEndpoint?.id;
    if (!endpointId) return;
    setSavedFolders((prev) => {
      const next = [
        ...prev,
        {
          id: typeof crypto?.randomUUID === 'function'
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
          name,
          endpointId,
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

  const handleJsonModeChange = (isJsonMode: boolean) => {
    setIsJsonBodyMode(isJsonMode);
    setShowInspectorPanel(!isJsonMode);
  };

  const handlePinValue = (key: string, value: string) => {
    setChainedValues((prev) => {
      if (prev.some((v) => v.key === key)) return prev;
      const entry: ChainedValue = {
        id: typeof crypto?.randomUUID === 'function'
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        key,
        value,
        source: selectedEndpoint.name,
        pinnedAt: Date.now(),
      };
      return [entry, ...prev];
    });
  };

  const handleUnpinValue = (id: string) => {
    setChainedValues((prev) => prev.filter((v) => v.id !== id));
  };

  const liveRequest = useMemo<ApiRequest | null>(() => {
    if (currentView === 'auth') return null;
    const selectedEnvironment = zuoraEnvironments.find(
      (env) => env.id === selectedEnvironmentId
    );
    const baseUrl = selectedEnvironment?.baseUrl || selectedEndpoint.baseUrl;

    return {
      endpoint: {
        ...selectedEndpoint,
        baseUrl,
      },
      authToken: authToken || 'YOUR_ACCESS_TOKEN',
      data: liveFormData,
      customHeaders: liveHeaders,
      pathParams: livePathParams,
      queryParams: liveQueryParams,
    };
  }, [currentView, selectedEndpoint, selectedEnvironmentId, authToken, liveFormData, liveHeaders, livePathParams, liveQueryParams]);

  const inspectorPanelVisible = !isJsonBodyMode || showInspectorPanel;

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors duration-200 overflow-hidden">
      
      {showSaveModal && (
        <NameModal
          title="Save request"
          label="Request name"
          initialValue={selectedEndpoint.name}
          confirmLabel="Save"
          onConfirm={handleConfirmSaveRequest}
          onCancel={() => setShowSaveModal(false)}
        />
      )}

      <div className={`hidden lg:flex flex-col transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarCollapsed ? 'w-0 overflow-hidden' : 'w-80'}`}>
        <Sidebar
          currentView={currentView}
          onSelectView={handleViewChange}
          endpoints={zuoraEndpoints}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          favoriteEndpointIds={favoriteEndpointIds}
          recentEndpointIds={recentEndpointIds}
          onToggleFavorite={handleToggleFavoriteEndpoint}
          storagePercentUsed={usage.percentUsed}

        />
      </div>

      {/* Mobile sidebar (overlay) */}
      <div className="lg:hidden">
        <Sidebar
          currentView={currentView}
          onSelectView={handleViewChange}
          endpoints={zuoraEndpoints}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          favoriteEndpointIds={favoriteEndpointIds}
          recentEndpointIds={recentEndpointIds}
          onToggleFavorite={handleToggleFavoriteEndpoint}
          storagePercentUsed={usage.percentUsed}

        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full relative min-w-0">
        
        {/* Top Header */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-20 transition-colors duration-200 flex-shrink-0">
          <div className="px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-3">

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Desktop Sidebar Toggle */}
              <button
                onClick={() => setIsSidebarCollapsed(c => !c)}
                title={isSidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'}
                className="hidden lg:flex items-center justify-center p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
              >
                {isSidebarCollapsed ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7M19 19l-7-7 7-7" />
                  </svg>
                )}
              </button>

              {/* Back button — shown when on utility pages with a prior endpoint to return to */}
              {(currentView === 'auth' || currentView === 'storage') && previousView && previousView !== 'auth' && previousView !== 'storage' && (
                <button
                  onClick={() => handleViewChange(previousView)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back
                </button>
              )}

              {/* Method badge + endpoint title */}
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                {currentView !== 'auth' && currentView !== 'storage' && (
                  <span className={`shrink-0 px-2.5 py-1 rounded-md text-xs font-bold tracking-wide border ${
                    selectedEndpoint.method === 'POST'   ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' :
                    selectedEndpoint.method === 'GET'    ? 'bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-500/20' :
                    selectedEndpoint.method === 'PUT'    ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20' :
                    selectedEndpoint.method === 'DELETE' ? 'bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/20' :
                    selectedEndpoint.method === 'PATCH'  ? 'bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-500/20' :
                    'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                  }`}>
                    {selectedEndpoint.method}
                  </span>
                )}
                <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100 truncate">
                  {currentView === 'auth' ? 'Authentication' : currentView === 'storage' ? 'Storage Manager' : selectedEndpoint.name}
                </h2>
              </div>

              {/* Right actions */}
              <div className="flex items-center gap-2 shrink-0">

                {/* Tenant switcher */}
                {tenants.length > 0 && (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowTenantDropdown(v => !v)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-sm font-semibold transition-all min-w-[180px] max-w-[240px] ${
                        showTenantDropdown
                          ? 'border-zuora-400 dark:border-zuora-500/70 bg-zuora-50 dark:bg-zuora-500/10 text-zuora-700 dark:text-zuora-300 shadow-sm'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-zuora-400 dark:hover:border-zuora-500/60 hover:bg-zuora-50 dark:hover:bg-zuora-500/8 hover:text-zuora-700 dark:hover:text-zuora-300'
                      }`}
                    >
                      <svg className="w-4 h-4 shrink-0 text-zuora-500 dark:text-zuora-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="flex-1 truncate text-left">
                        {tenants.find(t => t.id === activeTenantId)?.name ?? 'Select tenant'}
                      </span>
                      <svg className={`w-4 h-4 shrink-0 transition-transform ${showTenantDropdown ? 'rotate-180' : ''} text-slate-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {showTenantDropdown && (
                      <>
                        {/* Backdrop */}
                        <div className="fixed inset-0 z-30" onClick={() => setShowTenantDropdown(false)} />
                        <div className="absolute right-0 top-full mt-2 z-40 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl dark:shadow-black/50 overflow-hidden">
                          <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                            <svg className="w-4 h-4 text-zuora-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Switch Tenant</p>
                          </div>
                          <div className="py-1.5 max-h-72 overflow-y-auto">
                            {tenants.map(t => {
                              const isActive = t.id === activeTenantId;
                              const token = localStorage.getItem(`zuora_token_${t.id}`);
                              const expiry = localStorage.getItem(`zuora_token_expiry_${t.id}`);
                              const tokenStatus = !token ? 'none' : (!expiry || Date.now() < parseInt(expiry, 10)) ? 'active' : 'expired';
                              return (
                              <button
                                key={t.id}
                                type="button"
                                onClick={() => handleTenantSwitch(t.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                                  isActive
                                    ? 'bg-zuora-50 dark:bg-zuora-500/10'
                                    : 'hover:bg-slate-50 dark:hover:bg-slate-800'
                                }`}
                              >
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold ${
                                  isActive ? 'bg-zuora-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                                }`}>
                                  {t.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className={`text-sm font-semibold truncate ${isActive ? 'text-zuora-700 dark:text-zuora-300' : 'text-slate-800 dark:text-slate-200'}`}>{t.name}</p>
                                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 flex items-center gap-1">
                                    {tokenStatus === 'active' && <><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Token active</>}
                                    {tokenStatus === 'expired' && <><span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" /> Token expired</>}
                                    {tokenStatus === 'none' && <><span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 inline-block" /> No token</>}
                                  </p>
                                </div>
                                {isActive && (
                                  <svg className="w-4 h-4 text-zuora-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </button>
                              );
                            })}
                          </div>
                          <div className="border-t border-slate-100 dark:border-slate-800 p-2">
                            <button
                              type="button"
                              onClick={() => { setShowTenantDropdown(false); handleViewChange('auth'); }}
                              className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-zuora-600 dark:hover:text-zuora-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
                            >
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                              </svg>
                              Manage tenants
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Inspector toggle */}
                {isJsonBodyMode && currentView !== 'auth' && currentView !== 'storage' && (
                  <button
                    type="button"
                    onClick={() => setShowInspectorPanel((v) => !v)}
                    className={`hidden sm:inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                      showInspectorPanel
                        ? 'border-zuora-200 bg-zuora-50 text-zuora-700 dark:border-zuora-500/30 dark:bg-zuora-500/10 dark:text-zuora-300'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                    </svg>
                    {showInspectorPanel ? 'Hide Inspector' : 'Inspector'}
                  </button>
                )}

                {/* Theme toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>

                {/* Run Request — only on API endpoints */}
                {currentView !== 'auth' && currentView !== 'storage' && (
                  <button
                    type="submit"
                    form={formId}
                    disabled={isLoading}
                    className={`group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 focus:ring-emerald-500 ${
                      isLoading
                        ? 'bg-emerald-400 dark:bg-emerald-600 cursor-not-allowed opacity-80'
                        : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-md shadow-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/40 active:scale-[0.97]'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        <span>Running…</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>Run</span>
                        <span className="hidden sm:inline opacity-60 text-xs font-normal">⌘ Enter</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Storage warning banner */}
        {usage.percentUsed >= 80 && !storageBannerDismissed && (
          <div className={`flex items-center gap-3 px-4 sm:px-6 py-2.5 text-sm font-medium ${
            usage.percentUsed >= 90
              ? 'bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-b border-rose-200 dark:border-rose-500/20'
              : 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-b border-amber-200 dark:border-amber-500/20'
          }`}>
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="flex-1">
              Browser storage is {usage.percentUsed}% full. Clear old data to prevent save failures.
            </span>
            <button
              type="button"
              onClick={() => handleViewChange('storage')}
              className="underline underline-offset-2 hover:no-underline transition-all shrink-0"
            >
              Manage storage
            </button>
            <button
              type="button"
              onClick={() => setStorageBannerDismissed(true)}
              className="ml-1 p-0.5 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors shrink-0"
              aria-label="Dismiss"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth">
          <div className="max-w-[1920px] mx-auto space-y-8 pb-12">
            
            {/* View Content */}
            {currentView === 'storage' ? (
              <StorageManager
                usage={usage}
                onClearCategory={(keys) => { clearCategory(keys); refreshStorage(); }}
                onClearAll={() => { clearAllStorage(); refreshStorage(); }}
              />
            ) : currentView === 'auth' ? (
              <div className="animate-fadeIn h-full" style={{ minHeight: 'calc(100vh - 12rem)' }}>
                <OAuthAuthentication
                  environments={zuoraEnvironments}
                  selectedEnvironmentId={selectedEnvironmentId}
                  onEnvironmentChange={handleEnvironmentChange}
                  onTokenGenerated={handleTokenGenerated}
                  onTenantSelect={handleTenantSwitch}
                  onTenantsChange={setTenants}
                  useCorsProxy={useProxy}
                />
              </div>
            ) : (
              <div className="animate-fadeIn space-y-8">
                 {/* Two Column Layout for API */}
                <div className={`grid gap-8 ${inspectorPanelVisible ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1'}`}>
                  {/* Left Column - Form */}
                  <div className="space-y-6 min-w-0">
                    <ApiForm
                      endpoint={selectedEndpoint}
                      onSubmit={handleSubmit}
                      isLoading={isLoading}
                      formId={formId}
                      showSubmit={true}
                      authToken={authToken}
                      useProxy={useProxy}
                      selectedEnvironmentId={selectedEnvironmentId}
                      onEnvironmentChange={handleEnvironmentChange}
                      onFormDataChange={setLiveFormData}
                      onHeadersChange={setLiveHeaders}
                      onPathParamsChange={setLivePathParams}
                      onQueryParamsChange={setLiveQueryParams}
                      onJsonModeChange={handleJsonModeChange}
                      prefillData={prefillRequest?.data}
                      prefillQueryParams={prefillRequest?.queryParams}
                      prefillHeaders={prefillRequest?.customHeaders}
                      prefillPathParams={prefillRequest?.pathParams}
                      prefillId={prefillRequest?.id}
                      chainedValues={chainedValues}
                    />
                  </div>

                  {/* Right Column - Response & Code */}
                  {inspectorPanelVisible && (
                  <div className="space-y-6 xl:sticky xl:top-6 xl:self-start xl:max-h-[calc(100vh-3rem)] xl:overflow-y-auto xl:pr-1 min-w-0">
                    {!isJsonBodyMode && (
                      <JsonPreview data={liveFormData} onSave={handleSaveRequest} onEdit={handlePreviewEdit} />
                    )}

                    <ResponseViewer
                      response={response}
                      error={error}
                      chainedValues={chainedValues}
                      onPinValue={handlePinValue}
                      onUnpinValue={handleUnpinValue}
                      endpointName={selectedEndpoint.name}
                    />

                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200">
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Response History</h3>
                      {responseHistory.length ? (
                        <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                          {responseHistory.map((item, index) => (
                            <button
                              key={`${item.status}-${item.duration}-${index}`}
                              type="button"
                              onClick={() => setResponse(item)}
                              className="w-full text-left rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 p-3 hover:border-zuora-300 dark:hover:border-zuora-500/40 transition-colors"
                            >
                              <div className="flex items-center justify-between gap-3">
                                <span className={`text-xs font-bold font-mono ${
                                  item.status >= 200 && item.status < 300
                                    ? 'text-emerald-600 dark:text-emerald-400'
                                    : item.status >= 400 && item.status < 500
                                    ? 'text-amber-600 dark:text-amber-400'
                                    : 'text-rose-600 dark:text-rose-400'
                                }`}>
                                  {item.status} {item.statusText}
                                </span>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="text-xs text-slate-500">{item.duration}ms</span>
                                  {item.timestamp && (
                                    <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                                      {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="mt-1 text-xs font-mono text-slate-500 dark:text-slate-400 truncate">
                                {item.request?.url}
                              </div>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="text-sm text-slate-500">Run requests to build a lightweight troubleshooting timeline.</div>
                      )}
                    </div>

                    <SavedRequests
                      requests={savedRequests.filter((r) => r.endpointId === selectedEndpoint?.id)}
                      folders={savedFolders.filter((f) => f.endpointId === selectedEndpoint?.id)}
                      endpoints={zuoraEndpoints}
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

                    <CodeGenerator request={liveRequest} />
                  </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );}

export default App;
