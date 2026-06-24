import { useState, useEffect } from 'react';
import { oauthService } from '../services/oauthService';
import type { Environment } from '../types/api';

interface TenantCredential {
  id: string;
  name: string;
  environmentId: string;
  clientId: string;
  clientSecret: string;
}

interface OAuthAuthenticationProps {
  environments: Environment[];
  selectedEnvironmentId: string;
  onEnvironmentChange: (environmentId: string) => void;
  onTokenGenerated: (token: string) => void;
  onTenantSelect?: (tenantId: string) => void;
  onTenantsChange?: (tenants: Array<{ id: string; name: string; environmentId: string }>) => void;
  useCorsProxy?: boolean;
}

type TokenStatus = 'active' | 'expired' | 'none';

function getTenantTokenStatus(tenantId: string): TokenStatus {
  const token = localStorage.getItem(`zuora_token_${tenantId}`);
  if (!token) return 'none';
  const expiry = localStorage.getItem(`zuora_token_expiry_${tenantId}`);
  if (!expiry) return 'active';
  return Date.now() < parseInt(expiry, 10) ? 'active' : 'expired';
}

const TENANTS_KEY = 'zuora_tenants';
const ACTIVE_TENANT_KEY = 'zuora_active_tenant_id';

function loadTenants(): TenantCredential[] {
  try {
    return JSON.parse(localStorage.getItem(TENANTS_KEY) || '[]');
  } catch {
    return [];
  }
}
function saveTenants(tenants: TenantCredential[]) {
  localStorage.setItem(TENANTS_KEY, JSON.stringify(tenants));
}

const EyeIcon = ({ open }: { open: boolean }) => open ? (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>
) : (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

// ── Tenant form (add / edit) ────────────────────────────────────────────────
function TenantForm({
  environments,
  initial,
  onSave,
  onCancel,
}: {
  environments: Environment[];
  initial?: Partial<TenantCredential>;
  onSave: (t: Omit<TenantCredential, 'id'>) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(initial?.name ?? '');
  const [environmentId, setEnvironmentId] = useState(initial?.environmentId ?? environments[0]?.id ?? '');
  const [clientId, setClientId] = useState(initial?.clientId ?? '');
  const [clientSecret, setClientSecret] = useState(initial?.clientSecret ?? '');
  const [showSecret, setShowSecret] = useState(false);

  const valid = name.trim() && environmentId && clientId.trim() && clientSecret.trim();

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
          Tenant Name <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Acme Corp Sandbox"
          className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
          Environment <span className="text-rose-500">*</span>
        </label>
        <select
          value={environmentId}
          onChange={(e) => setEnvironmentId(e.target.value)}
          className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors"
        >
          {environments.map((env) => (
            <option key={env.id} value={env.id}>{env.name}</option>
          ))}
        </select>
        {(() => {
          const env = environments.find((e) => e.id === environmentId);
          return env ? (
            <code className="mt-1.5 block text-[11px] font-mono text-slate-500 dark:text-slate-500 truncate">
              {env.baseUrl}
            </code>
          ) : null;
        })()}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
            Client ID <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            placeholder="OAuth Client ID"
            className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors font-mono"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
            Client Secret <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showSecret ? 'text' : 'password'}
              value={clientSecret}
              onChange={(e) => setClientSecret(e.target.value)}
              placeholder="OAuth Client Secret"
              className="w-full px-3 py-2 pr-10 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors font-mono"
            />
            <button
              type="button"
              onClick={() => setShowSecret((v) => !v)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              <EyeIcon open={showSecret} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-2 pt-1">
        <button
          type="button"
          onClick={() => valid && onSave({ name: name.trim(), environmentId, clientId: clientId.trim(), clientSecret: clientSecret.trim() })}
          disabled={!valid}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
            valid
              ? 'bg-zuora-600 text-white hover:bg-zuora-500 shadow-md shadow-zuora-500/20'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-200 dark:border-slate-700'
          }`}
        >
          {initial?.name ? 'Save Changes' : 'Add Tenant'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

// ── Main component ──────────────────────────────────────────────────────────
export const OAuthAuthentication = ({
  environments,
  selectedEnvironmentId,
  onEnvironmentChange,
  onTokenGenerated,
  onTenantSelect,
  onTenantsChange,
  useCorsProxy = false,
}: OAuthAuthenticationProps) => {
  const [statusTick, setStatusTick] = useState(0);
  const [tenants, setTenants] = useState<TenantCredential[]>(() => loadTenants());
  const [activeTenantId, setActiveTenantId] = useState<string>(() => localStorage.getItem(ACTIVE_TENANT_KEY) ?? '');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingTenant, setEditingTenant] = useState<TenantCredential | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  // Quick-connect (no save) state
  const [quickMode, setQuickMode] = useState(false);
  const [quickEnvId, setQuickEnvId] = useState('');
  const [quickClientId, setQuickClientId] = useState('');
  const [quickClientSecret, setQuickClientSecret] = useState('');
  const [quickShowSecret, setQuickShowSecret] = useState(false);

  // Token state
  const [accessToken, setAccessToken] = useState('');
  const [expiryTimestamp, setExpiryTimestamp] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [useManualToken, setUseManualToken] = useState(false);
  const [manualToken, setManualToken] = useState('');

  const activeTenant = tenants.find((t) => t.id === activeTenantId) ?? null;

  // Sync token panel whenever the active tenant changes (covers page load + tenant switch + clear)
  useEffect(() => {
    if (activeTenantId) {
      const token = localStorage.getItem(`zuora_token_${activeTenantId}`) ?? '';
      const expiry = localStorage.getItem(`zuora_token_expiry_${activeTenantId}`);
      setAccessToken(token);
      setExpiryTimestamp(expiry ? parseInt(expiry, 10) : null);
      setTimeLeft('');
      onTokenGenerated(token);
    } else {
      // No saved tenant — load Quick Connect token if any
      const savedToken = localStorage.getItem('zuora_access_token') ?? '';
      const savedExpiry = localStorage.getItem('zuora_token_expiry');
      setAccessToken(savedToken);
      setExpiryTimestamp(savedExpiry ? parseInt(savedExpiry, 10) : null);
      setTimeLeft('');
      if (savedToken) onTokenGenerated(savedToken);
    }
  }, [activeTenantId]);

  // One-time legacy migration
  useEffect(() => {
    const legacyId = localStorage.getItem('zuora_client_id');
    const legacySec = localStorage.getItem('zuora_client_secret');
    const existing = loadTenants();
    if (legacyId && legacySec && existing.length === 0) {
      const migrated: TenantCredential = {
        id: crypto.randomUUID(),
        name: 'My Tenant',
        environmentId: localStorage.getItem('zuora_environment') ?? environments[0]?.id ?? '',
        clientId: legacyId,
        clientSecret: legacySec,
      };
      saveTenants([migrated]);
      setTenants([migrated]);
      setActiveTenantId(migrated.id);
      localStorage.setItem(ACTIVE_TENANT_KEY, migrated.id);
    }
  }, []);

  // Sync active tenant's environment to parent
  useEffect(() => {
    if (activeTenant) onEnvironmentChange(activeTenant.environmentId);
  }, [activeTenantId]);

  // Init quick-connect env
  useEffect(() => {
    if (environments.length > 0) setQuickEnvId(environments[0].id);
  }, []);

  // Token countdown timer
  useEffect(() => {
    if (!expiryTimestamp) { setTimeLeft(''); return; }
    const tick = () => {
      const diff = expiryTimestamp - Date.now();
      if (diff <= 0) { setTimeLeft('Expired'); return; }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft(h > 0 ? `${h}h ${m}m ${s}s` : `${m}m ${s}s`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [expiryTimestamp]);

  // ── Tenant CRUD ────────────────────────────────────────────────────────────
  const handleAddTenant = (data: Omit<TenantCredential, 'id'>) => {
    const t: TenantCredential = { id: crypto.randomUUID(), ...data };
    const next = [...tenants, t];
    setTenants(next);
    saveTenants(next);
    onTenantsChange?.(next);
    setShowAddForm(false);
    // Clear any Quick Connect token in state — new tenant has no token yet
    setAccessToken('');
    setExpiryTimestamp(null);
    setTimeLeft('');
  };

  const handleEditTenant = (data: Omit<TenantCredential, 'id'>) => {
    if (!editingTenant) return;
    const next = tenants.map((t) => t.id === editingTenant.id ? { ...t, ...data } : t);
    setTenants(next);
    saveTenants(next);
    onTenantsChange?.(next);
    setEditingTenant(null);
  };

  const handleDeleteTenant = (id: string) => {
    const next = tenants.filter((t) => t.id !== id);
    setTenants(next);
    saveTenants(next);
    onTenantsChange?.(next);
    if (activeTenantId === id) {
      setActiveTenantId('');
      localStorage.removeItem(ACTIVE_TENANT_KEY);
    }
    setDeleteConfirm(null);
  };

  const handleSelectTenant = (t: TenantCredential) => {
    setActiveTenantId(t.id); // triggers useEffect that syncs token panel
    localStorage.setItem(ACTIVE_TENANT_KEY, t.id);
    onEnvironmentChange(t.environmentId);
    onTenantSelect?.(t.id);
    setQuickMode(false);
    setError('');
  };

  // ── Token actions ──────────────────────────────────────────────────────────
  const handleGenerateToken = async () => {
    if (!activeTenant) return;
    setIsGenerating(true);
    setError('');
    try {
      const env = environments.find((e) => e.id === activeTenant.environmentId);
      const baseUrl = env?.baseUrl ?? environments[0].baseUrl;
      oauthService.setUseProxy(useCorsProxy);
      const resp = await oauthService.generateToken(activeTenant.clientId, activeTenant.clientSecret, baseUrl);
      const expiry = Date.now() + resp.expires_in * 1000;
      setAccessToken(resp.access_token);
      setExpiryTimestamp(expiry);
      localStorage.setItem('zuora_access_token', resp.access_token);
      localStorage.setItem('zuora_token_expiry', expiry.toString());
      localStorage.setItem(`zuora_token_${activeTenant.id}`, resp.access_token);
      localStorage.setItem(`zuora_token_expiry_${activeTenant.id}`, expiry.toString());
      setStatusTick(v => v + 1);
      onTokenGenerated(resp.access_token);
    } catch (err: any) {
      setError(err.message || 'Failed to generate OAuth token');
      setAccessToken('');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleQuickGenerate = async () => {
    if (!quickClientId.trim() || !quickClientSecret.trim()) return;
    setIsGenerating(true);
    setError('');
    try {
      const env = environments.find((e) => e.id === quickEnvId);
      const baseUrl = env?.baseUrl ?? environments[0].baseUrl;
      oauthService.setUseProxy(useCorsProxy);
      const resp = await oauthService.generateToken(quickClientId.trim(), quickClientSecret.trim(), baseUrl);
      const expiry = Date.now() + resp.expires_in * 1000;
      setAccessToken(resp.access_token);
      setExpiryTimestamp(expiry);
      localStorage.setItem('zuora_access_token', resp.access_token);
      localStorage.setItem('zuora_token_expiry', expiry.toString());
      onTokenGenerated(resp.access_token);
      onEnvironmentChange(quickEnvId);
    } catch (err: any) {
      setError(err.message || 'Failed to generate OAuth token');
      setAccessToken('');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleClearToken = () => {
    setAccessToken(''); setExpiryTimestamp(null); setTimeLeft(''); setManualToken('');
    localStorage.removeItem('zuora_access_token');
    localStorage.removeItem('zuora_token_expiry');
    if (activeTenant) {
      localStorage.removeItem(`zuora_token_${activeTenant.id}`);
      localStorage.removeItem(`zuora_token_expiry_${activeTenant.id}`);
    }
    setStatusTick(v => v + 1);
    onTokenGenerated('');
  };

  const handleManualTokenSubmit = () => {
    if (!manualToken.trim()) { setError('Please enter a valid access token'); return; }
    setAccessToken(manualToken.trim());
    localStorage.setItem('zuora_access_token', manualToken.trim());
    onTokenGenerated(manualToken.trim());
    setError('');
  };

  const isTokenExpired = timeLeft === 'Expired';
  const hasToken = !!accessToken && !isTokenExpired;

  const envLabel = (id: string) => environments.find((e) => e.id === id)?.name ?? id;
  const envUrl = (id: string) => environments.find((e) => e.id === id)?.baseUrl ?? '';

  return (
    <div className="h-full flex flex-col">

      {/* ── Page header ── */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zuora-500/15 text-zuora-500 dark:text-zuora-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11.535 19.336a2 2 0 00-.586 1.414V22h-3v-2.277a6 6 0 017.752-12.016z" />
              </svg>
            </span>
            Authentication
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Manage Zuora Billing credentials and OAuth tokens
          </p>
        </div>
        {!showAddForm && !editingTenant && (
          <button type="button" onClick={() => setShowAddForm(true)} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zuora-600 hover:bg-zuora-500 text-white text-sm font-semibold shadow-md shadow-zuora-500/20 transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            Add Tenant
          </button>
        )}
      </div>

      {/* ── Add / Edit tenant form ── */}
      {(showAddForm || editingTenant) && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 mb-6">
          <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-zuora-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {editingTenant
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              }
            </svg>
            {editingTenant ? `Edit "${editingTenant.name}"` : 'New Tenant'}
          </h3>
          <TenantForm
            environments={environments}
            initial={editingTenant ?? undefined}
            onSave={editingTenant ? handleEditTenant : handleAddTenant}
            onCancel={() => { setShowAddForm(false); setEditingTenant(null); }}
          />
        </div>
      )}

      {/* ── Two-column layout: tenant list | token panel ── */}
      <div className="flex gap-6 flex-1 min-h-0">

        {/* Left column — tenant list */}
        <div className="w-80 xl:w-96 shrink-0 flex flex-col gap-3 overflow-y-auto">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider shrink-0">
            Saved Tenants ({tenants.length})
          </p>

          {tenants.length === 0 && !showAddForm ? (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-10 text-center">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">No tenants yet</p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">Add a tenant to store credentials and generate tokens</p>
              <button
                type="button"
                onClick={() => setShowAddForm(true)}
                className="px-4 py-2 rounded-xl bg-zuora-600 hover:bg-zuora-500 text-white text-sm font-semibold transition-all"
              >
                Add Tenant
              </button>
            </div>
          ) : (
            tenants.map((t) => {
              const isActive = t.id === activeTenantId;
              const tokenStatus: TokenStatus = getTenantTokenStatus(t.id);
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              void statusTick; // consumed so badges re-render after token ops
              return (
                <div
                  key={t.id}
                  onClick={() => handleSelectTenant(t)}
                  className={`group relative rounded-2xl border p-4 cursor-pointer transition-all ${
                    isActive
                      ? 'border-zuora-500/60 bg-zuora-500/5 dark:bg-zuora-500/8 shadow-md shadow-zuora-500/10'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                      isActive ? 'border-zuora-500 bg-zuora-500' : 'border-slate-300 dark:border-slate-600'
                    }`}>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-slate-800 dark:text-white">{t.name}</span>
                        {tokenStatus === 'active' && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Token Active
                          </span>
                        )}
                        {tokenStatus === 'expired' && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-500 dark:text-rose-400 text-[10px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                            Expired
                          </span>
                        )}
                        {tokenStatus === 'none' && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-[10px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                            Inactive
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 truncate">{envLabel(t.environmentId)}</p>
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <code className="text-[11px] font-mono text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                          {t.clientId.slice(0, 8)}••••
                        </code>
                        <code className="text-[11px] font-mono text-slate-400 dark:text-slate-600 truncate max-w-[120px]">
                          {envUrl(t.environmentId).replace('https://', '')}
                        </code>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        onClick={() => { setEditingTenant(t); setShowAddForm(false); }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Edit"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      {deleteConfirm === t.id ? (
                        <div className="flex items-center gap-1">
                          <button type="button" onClick={() => handleDeleteTenant(t.id)} className="px-2 py-1 rounded-lg bg-rose-500/15 text-rose-500 text-[10px] font-semibold hover:bg-rose-500/25 transition-colors">Delete</button>
                          <button type="button" onClick={() => setDeleteConfirm(null)} className="px-2 py-1 rounded-lg text-slate-500 text-[10px] hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Cancel</button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setDeleteConfirm(t.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors"
                          title="Delete"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}

          <p className="text-[11px] text-slate-400 dark:text-slate-600 text-center pt-2">
            Stored locally · never sent to third parties
          </p>
        </div>

        {/* Right column — token panel */}
        <div className="flex-1 min-w-0 space-y-4">
          {/* Quick Connect — visible when no saved tenant active */}
          {(!activeTenant || quickMode) && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                    <svg className="w-4 h-4 text-zuora-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Quick Connect
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Enter credentials directly — no need to save a tenant</p>
                </div>
                {quickMode && activeTenant && (
                  <button
                    type="button"
                    onClick={() => { setQuickMode(false); setError(''); }}
                    className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline transition-colors"
                  >
                    Use saved tenant
                  </button>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">Environment</label>
                <select
                  value={quickEnvId}
                  onChange={(e) => setQuickEnvId(e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors"
                >
                  {environments.map((env) => (
                    <option key={env.id} value={env.id}>{env.name}</option>
                  ))}
                </select>
                {(() => {
                  const env = environments.find((e) => e.id === quickEnvId);
                  return env ? <code className="mt-1 block text-[11px] font-mono text-slate-400 dark:text-slate-500">{env.baseUrl}</code> : null;
                })()}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">Client ID <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    value={quickClientId}
                    onChange={(e) => setQuickClientId(e.target.value)}
                    placeholder="OAuth Client ID"
                    className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">Client Secret <span className="text-rose-500">*</span></label>
                  <div className="relative">
                    <input
                      type={quickShowSecret ? 'text' : 'password'}
                      value={quickClientSecret}
                      onChange={(e) => setQuickClientSecret(e.target.value)}
                      placeholder="OAuth Client Secret"
                      className="w-full px-3 py-2 pr-10 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => setQuickShowSecret((v) => !v)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    >
                      <EyeIcon open={quickShowSecret} />
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleQuickGenerate}
                disabled={isGenerating || !quickClientId.trim() || !quickClientSecret.trim()}
                className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  isGenerating || !quickClientId.trim() || !quickClientSecret.trim()
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-200 dark:border-slate-700'
                    : 'bg-zuora-600 text-white hover:bg-zuora-500 shadow-lg shadow-zuora-500/20'
                }`}
              >
                {isGenerating ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Generating…
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Generate Token
                  </>
                )}
              </button>

              {quickClientId.trim() && quickClientSecret.trim() && (
                <button
                  type="button"
                  onClick={() => { setShowAddForm(true); setQuickMode(false); }}
                  className="w-full py-2 rounded-xl text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-zuora-600 dark:hover:text-zuora-300 border border-dashed border-slate-200 dark:border-slate-700 hover:border-zuora-400 dark:hover:border-zuora-500/50 transition-all flex items-center justify-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                  Save as tenant for later
                </button>
              )}

              {error && (
                <div className="flex gap-2.5 p-3 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 rounded-xl">
                  <svg className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-rose-700 dark:text-rose-300">{error}</p>
                </div>
              )}

              {accessToken && (
                <div className={`rounded-xl border p-4 ${isTokenExpired ? 'bg-rose-50 dark:bg-rose-500/8 border-rose-200 dark:border-rose-500/20' : 'bg-emerald-50 dark:bg-emerald-500/8 border-emerald-200 dark:border-emerald-500/20'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${isTokenExpired ? 'bg-rose-500' : 'bg-emerald-500 animate-pulse'}`} />
                      <span className={`text-sm font-semibold ${isTokenExpired ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-700 dark:text-emerald-400'}`}>
                        {isTokenExpired ? 'Token Expired' : 'Token Active'}
                      </span>
                      {timeLeft && !isTokenExpired && (
                        <span className="text-xs text-emerald-600 dark:text-emerald-500 font-mono">· expires in {timeLeft}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setShowToken((v) => !v)} className={`text-sm underline ${isTokenExpired ? 'text-rose-500' : 'text-emerald-600 dark:text-emerald-400'} hover:opacity-80`}>
                        {showToken ? 'Hide' : 'Show'}
                      </button>
                      <button onClick={handleClearToken} className="text-sm text-slate-400 hover:text-rose-500 underline transition-colors">Clear</button>
                    </div>
                  </div>
                  {showToken && (
                    <code className="block text-[11px] font-mono text-emerald-700 dark:text-emerald-300 bg-white dark:bg-slate-950 border border-emerald-200 dark:border-emerald-500/20 px-3 py-2 rounded-lg break-all leading-relaxed">
                      {accessToken}
                    </code>
                  )}
                  {!isTokenExpired && (
                    <p className="text-xs text-emerald-600 dark:text-emerald-500 mt-2 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      Automatically applied to all API requests
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Saved tenant token panel */}
          {activeTenant && !quickMode && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                    <svg className="w-4 h-4 text-zuora-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Generate Token
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    Using <span className="font-medium text-slate-700 dark:text-slate-300">{activeTenant.name}</span> · {envLabel(activeTenant.environmentId)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => { setQuickMode(true); setActiveTenantId(''); localStorage.removeItem(ACTIVE_TENANT_KEY); setError(''); }}
                    className="text-xs text-slate-400 hover:text-zuora-500 dark:hover:text-zuora-300 underline transition-colors"
                  >
                    Quick connect
                  </button>
                  <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 gap-0.5">
                    {['Auto', 'Manual'].map((mode) => {
                      const isManual = mode === 'Manual';
                      const selected = useManualToken === isManual;
                      return (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setUseManualToken(isManual)}
                          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                            selected
                              ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm'
                              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                          }`}
                        >
                          {mode}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Auto generate */}
              {!useManualToken && (
                <div className="space-y-3">
                  <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-3 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">Client ID</span>
                      <code className="font-mono text-slate-600 dark:text-slate-300">{activeTenant.clientId.slice(0, 10)}••••••••</code>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">Client Secret</span>
                      <code className="font-mono text-slate-600 dark:text-slate-300">••••••••••••</code>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">Token URL</span>
                      <code className="font-mono text-xs text-zuora-600 dark:text-zuora-300 break-all">
                        {envUrl(activeTenant.environmentId)}/oauth/token
                      </code>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleGenerateToken}
                    disabled={isGenerating || (!!accessToken && !isTokenExpired)}
                    className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                      isGenerating || (!!accessToken && !isTokenExpired)
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-200 dark:border-slate-700'
                        : 'bg-zuora-600 text-white hover:bg-zuora-500 shadow-lg shadow-zuora-500/20'
                    }`}
                  >
                    {isGenerating ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Generating…
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Generate OAuth Token
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 dark:text-slate-600 text-center">
                    If auto-generation fails due to CORS, switch to Manual and paste a token from curl or Postman
                  </p>
                </div>
              )}

              {/* Manual token */}
              {useManualToken && (!accessToken || isTokenExpired) && (
                <div className="space-y-3">
                  <textarea
                    value={manualToken}
                    onChange={(e) => setManualToken(e.target.value)}
                    placeholder="Paste your OAuth access token here…"
                    rows={4}
                    className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 font-mono focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors resize-none"
                  />
                  <button
                    type="button"
                    onClick={handleManualTokenSubmit}
                    disabled={!manualToken.trim()}
                    className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      manualToken.trim()
                        ? 'bg-zuora-600 text-white hover:bg-zuora-500 shadow-lg shadow-zuora-500/20'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    Use This Token
                  </button>
                  <div className="rounded-xl bg-slate-950 border border-slate-800 p-3">
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Generate via curl</p>
                    <code className="text-[11px] font-mono text-emerald-400 leading-relaxed whitespace-pre-wrap break-all">
{`curl -X POST "${envUrl(activeTenant.environmentId)}/oauth/token" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "client_id=${activeTenant.clientId}" \\
  -d "client_secret=YOUR_SECRET" \\
  -d "grant_type=client_credentials"`}
                    </code>
                  </div>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="flex gap-2.5 p-3 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 rounded-xl">
                  <svg className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-rose-700 dark:text-rose-300">{error}</p>
                </div>
              )}

              {/* Token display */}
              {accessToken && (
                <div className={`rounded-xl border p-4 ${
                  isTokenExpired
                    ? 'bg-rose-50 dark:bg-rose-500/8 border-rose-200 dark:border-rose-500/20'
                    : 'bg-emerald-50 dark:bg-emerald-500/8 border-emerald-200 dark:border-emerald-500/20'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${isTokenExpired ? 'bg-rose-500' : 'bg-emerald-500 animate-pulse'}`} />
                      <span className={`text-sm font-semibold ${isTokenExpired ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-700 dark:text-emerald-400'}`}>
                        {isTokenExpired ? 'Token Expired' : 'Token Active'}
                      </span>
                      {timeLeft && !isTokenExpired && (
                        <span className="text-xs text-emerald-600 dark:text-emerald-500 font-mono">· expires in {timeLeft}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setShowToken((v) => !v)} className={`text-xs underline ${isTokenExpired ? 'text-rose-500' : 'text-emerald-600 dark:text-emerald-400'} hover:opacity-80`}>
                        {showToken ? 'Hide' : 'Show'}
                      </button>
                      <button onClick={handleClearToken} className="text-xs text-slate-400 hover:text-rose-500 underline transition-colors">
                        Clear
                      </button>
                    </div>
                  </div>
                  {showToken && (
                    <code className="block text-[11px] font-mono text-emerald-700 dark:text-emerald-300 bg-white dark:bg-slate-950 border border-emerald-200 dark:border-emerald-500/20 px-3 py-2 rounded-lg break-all leading-relaxed">
                      {accessToken}
                    </code>
                  )}
                  {!isTokenExpired && (
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-500 mt-2 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Automatically applied to all API requests
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
