import { ApiEndpoint } from '../types/api';

interface SidebarProps {
  currentView: string;
  onSelectView: (view: string) => void;
  endpoints: ApiEndpoint[];
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ currentView, onSelectView, endpoints, isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-20 lg:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } flex flex-col h-full shadow-2xl lg:shadow-none`}
      >
        {/* Logo Area */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-900 flex items-center gap-3">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl shadow-lg shadow-indigo-500/20">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-none">
              Zuora <span className="text-indigo-600 dark:text-indigo-400">Executor</span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-500 font-medium uppercase tracking-wider mt-1">
              Hackathon v1.0
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
          
          {/* Section: Core */}
          <div>
            <h3 className="px-4 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
              Core
            </h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => onSelectView('auth')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    currentView === 'auth'
                      ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 shadow-sm border border-indigo-100 dark:border-indigo-500/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <svg className={`w-5 h-5 transition-colors ${currentView === 'auth' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11.535 19.336a2 2 0 00-.586 1.414V22h-3v-2.277c0-.245.01-.491.028-.738a6 6 0 017.752-12.016z" />
                  </svg>
                  Authentication
                </button>
              </li>
            </ul>
          </div>

          {/* Section: API Endpoints */}
          <div>
            <h3 className="px-4 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
              API Endpoints
            </h3>
            <ul className="space-y-1">
              {endpoints.map((endpoint) => (
                <li key={endpoint.id}>
                  <button
                    onClick={() => onSelectView(endpoint.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      currentView === endpoint.id
                        ? 'bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-800'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    <span className="truncate mr-2">{endpoint.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold border ${
                      endpoint.method === 'POST' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' :
                      endpoint.method === 'GET' ? 'bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-500/20' :
                      endpoint.method === 'PUT' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20' :
                      'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                    }`}>
                      {endpoint.method}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </nav>

        {/* User/Footer Area */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs border border-indigo-200 dark:border-indigo-500/30">
              Dev
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                Local Developer
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 truncate">
                Ready to hack
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
