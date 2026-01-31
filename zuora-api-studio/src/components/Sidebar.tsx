import { useState } from 'react';
import type { ApiEndpoint } from '../types/api';
import { getEndpointsByCategory, getAvailableCategories } from '../config/zuoraEndpoints';

interface SidebarProps {
  currentView: string;
  onSelectView: (view: string) => void;
  endpoints: ApiEndpoint[];
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ currentView, onSelectView, endpoints, isOpen, onClose }: SidebarProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    accounts: true,
  });
  const [searchQuery, setSearchQuery] = useState('');

  const categories = getAvailableCategories();

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const getCategoryEndpoints = (category: string): ApiEndpoint[] => {
    return getEndpointsByCategory(category);
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      accounts: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      ),
      subscriptions: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      ),
      orders: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      ),
      invoices: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      ),
      payments: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      ),
      products: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      ),
      contacts: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
      'credit-memos': (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      ),
      'debit-memos': (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      ),
    };

    return iconMap[category] || <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />;
  };

  const getCategoryLabel = (category: string): string => {
    const labelMap: Record<string, string> = {
      accounts: 'Accounts',
      subscriptions: 'Subscriptions',
      orders: 'Orders',
      invoices: 'Invoices',
      payments: 'Payments',
      products: 'Products',
      contacts: 'Contacts',
      'credit-memos': 'Credit Memos',
      'debit-memos': 'Debit Memos',
    };

    return labelMap[category] || category;
  };

  // Filter endpoints based on search query
  const getFilteredEndpoints = (categoryEndpoints: ApiEndpoint[]): ApiEndpoint[] => {
    if (!searchQuery.trim()) return categoryEndpoints;

    const query = searchQuery.toLowerCase();
    return categoryEndpoints.filter(
      (endpoint) =>
        endpoint.name.toLowerCase().includes(query) ||
        endpoint.path.toLowerCase().includes(query) ||
        endpoint.method.toLowerCase().includes(query)
    );
  };

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
        className={`fixed lg:static inset-y-0 left-0 z-30 w-80 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } flex flex-col h-full shadow-2xl lg:shadow-none`}
      >
        {/* Logo Area */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-900 flex items-center gap-3">
          <div className="bg-gradient-to-br from-zuora-500 to-zuora-600 p-2 rounded-xl shadow-lg shadow-zuora-500/20">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-none">
              Zuora <span className="text-zuora-600 dark:text-zuora-400">API Studio</span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-500 font-medium uppercase tracking-wider mt-1">
              {endpoints.length} APIs Available
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-900">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search APIs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">

          {/* Section: Core */}
          <div>
            <h3 className="px-4 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
              Core
            </h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => onSelectView('auth')}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    currentView === 'auth'
                      ? 'bg-zuora-50 dark:bg-zuora-500/10 text-zuora-700 dark:text-zuora-300 shadow-sm border border-zuora-100 dark:border-zuora-500/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <svg className={`w-5 h-5 transition-colors ${currentView === 'auth' ? 'text-zuora-600 dark:text-zuora-400' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11.535 19.336a2 2 0 00-.586 1.414V22h-3v-2.277c0-.245.01-.491.028-.738a6 6 0 017.752-12.016z" />
                  </svg>
                  Authentication
                </button>
              </li>
            </ul>
          </div>

          {/* Section: API Categories */}
          <div>
            <h3 className="px-4 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
              API Categories
            </h3>
            <div className="space-y-1">
              {categories.map((category) => {
                const categoryEndpoints = getCategoryEndpoints(category);
                const filteredEndpoints = getFilteredEndpoints(categoryEndpoints);
                const isExpanded = expandedCategories[category];

                if (filteredEndpoints.length === 0 && searchQuery) return null;

                return (
                  <div key={category}>
                    <button
                      onClick={() => toggleCategory(category)}
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {getCategoryIcon(category)}
                        </svg>
                        <span>{getCategoryLabel(category)}</span>
                        <span className="text-xs text-slate-400 dark:text-slate-600">
                          {filteredEndpoints.length}
                        </span>
                      </div>
                      <svg
                        className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isExpanded && (
                      <ul className="mt-1 ml-4 space-y-0.5 border-l-2 border-slate-100 dark:border-slate-900 pl-2">
                        {filteredEndpoints.map((endpoint) => (
                          <li key={endpoint.id}>
                            <button
                              onClick={() => {
                                onSelectView(endpoint.id);
                                onClose();
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 group ${
                                currentView === endpoint.id
                                  ? 'bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white'
                                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:text-slate-900 dark:hover:text-slate-200'
                              }`}
                            >
                              <span className="truncate mr-2">{endpoint.name}</span>
                              <span className={`text-[9px] px-1 py-0.5 rounded font-mono font-bold ${
                                endpoint.method === 'POST' ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400' :
                                endpoint.method === 'GET' ? 'bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-400' :
                                endpoint.method === 'PUT' ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400' :
                                endpoint.method === 'DELETE' ? 'bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400' :
                                'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                              }`}>
                                {endpoint.method}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </nav>

        {/* User/Footer Area */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-zuora-100 dark:bg-zuora-900/50 flex items-center justify-center text-zuora-600 dark:text-zuora-400 font-bold text-xs border border-zuora-200 dark:border-zuora-500/30">
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
