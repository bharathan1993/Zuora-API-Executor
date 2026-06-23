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
  useCorsProxy?: boolean;
  initialProductTab?: 'billing' | 'revenue';
}

const TENANTS_KEY = 'zuora_tenants';
const ACTIVE_TENANT_KEY = 'zuora_active_tenant_id';

// ── Revenue instance types + storage ──────────────────────────────────────────
interface RevenueInstance {
  id: string;
  name: string;
  host: string;
  username: string;
  password: string;
  role: string;
  clientname: string;
  token?: string;
}

const REVENUE_INSTANCES_KEY = 'zuora_revenue_instances';
const REVENUE_ACTIVE_KEY = 'zuora_revenue_active_id';

function loadRevenueInstances(): RevenueInstance[] {
  try { return JSON.parse(localStorage.getItem(REVENUE_INSTANCES_KEY) || '[]'); } catch { return []; }
}
function saveRevenueInstances(list: RevenueInstance[]) {
  localStorage.setItem(REVENUE_INSTANCES_KEY, JSON.stringify(list));
}

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
      {/* Name */}
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

      {/* Environment */}
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

      {/* Client ID + Secret */}
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

      {/* Actions */}
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

// ── Revenue instance form (add / edit) ─────────────────────────────────────
function RevenueInstanceForm({
  initial,
  onSave,
  onCancel,
}: {
  initial?: Partial<RevenueInstance>;
  onSave: (r: Omit<RevenueInstance, 'id' | 'token'>) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(initial?.name ?? '');
  const [host, setHost] = useState(initial?.host ?? '');
  const [username, setUsername] = useState(initial?.username ?? '');
  const [password, setPassword] = useState(initial?.password ?? '');
  const [showPw, setShowPw] = useState(false);
  const [role, setRole] = useState(initial?.role ?? 'API_USER');
  const [clientname, setClientname] = useState(initial?.clientname ?? 'Default');
  const valid = name.trim() && host.trim() && username.trim() && password.trim() && role.trim() && clientname.trim();
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-violet-200 dark:border-violet-500/30 p-5 shadow-sm space-y-4">
      <h4 className="text-sm font-semibold text-slate-800 dark:text-white">{initial?.name ? 'Edit Revenue Instance' : 'Add Revenue Instance'}</h4>
      <div>
        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">Instance Name <span className="text-rose-500">*</span></label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Sandbox" className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">Revenue Host <span className="text-rose-500">*</span></label>
        <input type="url" value={host} onChange={e => setHost(e.target.value)} placeholder="https://yourHost" className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 font-mono focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">Username <span className="text-rose-500">*</span></label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="API_USER" className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">Password <span className="text-rose-500">*</span></label>
          <div className="relative">
            <input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-3 py-2 pr-9 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" />
            <button type="button" onClick={() => setShowPw(p => !p)} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><EyeIcon open={showPw} /></button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">Role <span className="text-rose-500">*</span></label>
          <input type="text" value={role} onChange={e => setRole(e.target.value)} placeholder="API_USER" className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">Client Name <span className="text-rose-500">*</span></label>
          <input type="text" value={clientname} onChange={e => setClientname(e.target.value)} placeholder="Default" className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" />
        </div>
      </div>
      <div className="flex gap-2 pt-1">
        <button type="button" onClick={() => valid && onSave({ name: name.trim(), host: host.trim().replace(/\/$/, ''), username: username.trim(), password, role: role.trim(), clientname: clientname.trim() })} disabled={!valid} className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${valid ? 'bg-violet-600 text-white hover:bg-violet-500 shadow-md shadow-violet-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-200 dark:border-slate-700'}`}>
          {initial?.name ? 'Save Changes' : 'Add Instance'}
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors">Cancel</button>
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
  useCorsProxy = false,
  initialProductTab,
}: OAuthAuthenticationProps) => {
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
  // tracks which tenant (id) or 'quick' generated the current active token
  const [tokenTenantId, setTokenTenantId] = useState<string>(() => localStorage.getItem('zuora_token_tenant_id') ?? '');

  const activeTenant = tenants.find((t) => t.id === activeTenantId) ?? null;

  // Load saved token
  useEffect(() => {
    const savedToken = localStorage.getItem('zuora_access_token');
    const savedExpiry = localStorage.getItem('zuora_token_expiry');
    if (savedToken) { setAccessToken(savedToken); onTokenGenerated(savedToken); }
    if (savedExpiry) setExpiryTimestamp(parseInt(savedExpiry, 10));

    // Legacy migration: if old credentials exist and no tenants yet
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

  // Init quick-connect env to first environment
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
    setShowAddForm(false);
  };

  const handleEditTenant = (data: Omit<TenantCredential, 'id'>) => {
    if (!editingTenant) return;
    const next = tenants.map((t) => t.id === editingTenant.id ? { ...t, ...data } : t);
    setTenants(next);
    saveTenants(next);
    setEditingTenant(null);
  };

  const handleDeleteTenant = (id: string) => {
    const next = tenants.filter((t) => t.id !== id);
    setTenants(next);
    saveTenants(next);
    if (activeTenantId === id) {
      setActiveTenantId('');
      localStorage.removeItem(ACTIVE_TENANT_KEY);
    }
    setDeleteConfirm(null);
  };

  const handleSelectTenant = (t: TenantCredential) => {
    setActiveTenantId(t.id);
    localStorage.setItem(ACTIVE_TENANT_KEY, t.id);
    onEnvironmentChange(t.environmentId);
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
      localStorage.setItem('zuora_token_tenant_id', activeTenant.id);
      setTokenTenantId(activeTenant.id);
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
      localStorage.setItem('zuora_token_tenant_id', 'quick');
      setTokenTenantId('quick');
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
    setTokenTenantId('');
    localStorage.removeItem('zuora_access_token');
    localStorage.removeItem('zuora_token_expiry');
    localStorage.removeItem('zuora_token_tenant_id');
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

  // ── Environment label helper ───────────────────────────────────────────────
  const envLabel = (id: string) => environments.find((e) => e.id === id)?.name ?? id;
  const envUrl = (id: string) => environments.find((e) => e.id === id)?.baseUrl ?? '';

  // ── Product tab ───────────────────────────────────────────────────────────
  const [productTab, setProductTab] = useState<'billing' | 'revenue'>(initialProductTab ?? 'billing');

  useEffect(() => {
    if (initialProductTab) setProductTab(initialProductTab);
  }, [initialProductTab]);

  // ── Revenue multi-instance state ──────────────────────────────────────────
  const [revenueInstances, setRevenueInstances] = useState<RevenueInstance[]>(() => {
    const list = loadRevenueInstances();
    // Migrate legacy single-host data
    if (list.length === 0) {
      const host = localStorage.getItem('zuora_revenue_host') ?? '';
      const username = localStorage.getItem('zuora_revenue_username') ?? '';
      if (host || username) {
        const migrated: RevenueInstance = {
          id: crypto.randomUUID(),
          name: 'My Revenue Instance',
          host,
          username,
          password: localStorage.getItem('zuora_revenue_password') ?? '',
          role: localStorage.getItem('zuora_revenue_role') ?? 'API_USER',
          clientname: localStorage.getItem('zuora_revenue_clientname') ?? 'Default',
          token: localStorage.getItem('zuora_revenue_token') ?? undefined,
        };
        saveRevenueInstances([migrated]);
        return [migrated];
      }
    }
    return list;
  });
  const [activeRevenueId, setActiveRevenueId] = useState<string>(() => {
    const saved = localStorage.getItem(REVENUE_ACTIVE_KEY) ?? '';
    return saved;
  });
  const [showRevenueAddForm, setShowRevenueAddForm] = useState(false);
  const [editingRevenue, setEditingRevenue] = useState<RevenueInstance | null>(null);
  const [revenueGeneratingId, setRevenueGeneratingId] = useState<string | null>(null);
  const [revenueErrors, setRevenueErrors] = useState<Record<string, string>>({});
  const [revenueShowToken, setRevenueShowToken] = useState(false);
  const [revenueUseLocalProxy, setRevenueUseLocalProxy] = useState<boolean>(
    () => localStorage.getItem('zuora_revenue_use_local_proxy') === 'true'
  );
  const [selectedRevenueId, setSelectedRevenueId] = useState<string>(() => localStorage.getItem(REVENUE_ACTIVE_KEY) ?? '');

  const activeRevenueInstance = revenueInstances.find(r => r.id === activeRevenueId) ?? null;
  const selectedRevenueInstance = revenueInstances.find(r => r.id === selectedRevenueId) ?? revenueInstances[0] ?? null;

  const activateRevenueInstance = (instance: RevenueInstance) => {
    setActiveRevenueId(instance.id);
    localStorage.setItem(REVENUE_ACTIVE_KEY, instance.id);
    localStorage.setItem('zuora_revenue_host', instance.host);
    localStorage.setItem('zuora_revenue_token', instance.token ?? '');
  };

  const handleRevenueAdd = (data: Omit<RevenueInstance, 'id' | 'token'>) => {
    const newInstance: RevenueInstance = { id: crypto.randomUUID(), ...data };
    const updated = [...revenueInstances, newInstance];
    setRevenueInstances(updated);
    saveRevenueInstances(updated);
    setShowRevenueAddForm(false);
    activateRevenueInstance(newInstance);
  };

  const handleRevenueEdit = (data: Omit<RevenueInstance, 'id' | 'token'>) => {
    if (!editingRevenue) return;
    const updated = revenueInstances.map(r => r.id === editingRevenue.id ? { ...r, ...data } : r);
    setRevenueInstances(updated);
    saveRevenueInstances(updated);
    setEditingRevenue(null);
    if (activeRevenueId === editingRevenue.id) {
      const found = updated.find(r => r.id === editingRevenue.id)!;
      localStorage.setItem('zuora_revenue_host', found.host);
    }
  };

  const handleRevenueDelete = (id: string) => {
    const updated = revenueInstances.filter(r => r.id !== id);
    setRevenueInstances(updated);
    saveRevenueInstances(updated);
    if (activeRevenueId === id) {
      const next = updated[0] ?? null;
      if (next) activateRevenueInstance(next);
      else {
        setActiveRevenueId('');
        localStorage.removeItem(REVENUE_ACTIVE_KEY);
        localStorage.removeItem('zuora_revenue_host');
        localStorage.removeItem('zuora_revenue_token');
      }
    }
  };

  const handleRevenueGetToken = async (instance: RevenueInstance) => {
    setRevenueGeneratingId(instance.id);
    setRevenueErrors(prev => ({ ...prev, [instance.id]: '' }));
    try {
      const basicAuth = btoa(`${instance.username}:${instance.password}`);
      const proxyBase = (window.location.hostname === 'localhost' || revenueUseLocalProxy)
        ? 'http://localhost:3001/proxy'
        : '/api/proxy';
      const resp = await fetch(proxyBase, {
        method: 'POST',
        headers: {
          'X-Target-URL': `${instance.host.replace(/\/$/, '')}/api/integration/v1/authenticate`,
          'Authorization': `Basic ${basicAuth}`,
          'role': instance.role,
          'clientname': instance.clientname,
        },
      });
      const token = resp.headers.get('revpro-token');
      if (token) {
        const updated = revenueInstances.map(r => r.id === instance.id ? { ...r, token } : r);
        setRevenueInstances(updated);
        saveRevenueInstances(updated);
        if (activeRevenueId === instance.id) localStorage.setItem('zuora_revenue_token', token);
      } else {
        try {
          const json = await resp.json();
          if (resp.ok && json?.Message === 'Token Generated') {
            setRevenueErrors(prev => ({ ...prev, [instance.id]: 'Server returned 200 but token header was not forwarded. Restart the proxy and try again.' }));
          } else {
            setRevenueErrors(prev => ({ ...prev, [instance.id]: `Authentication failed (HTTP ${resp.status}): ${json?.Message || 'No token returned.'}` }));
          }
        } catch {
          setRevenueErrors(prev => ({ ...prev, [instance.id]: `Authentication failed (HTTP ${resp.status}).` }));
        }
      }
    } catch (e: any) {
      setRevenueErrors(prev => ({ ...prev, [instance.id]: e.message || 'Request failed. Ensure the proxy server is running.' }));
    } finally {
      setRevenueGeneratingId(null);
    }
  };

  return (
    <div className="h-full flex flex-col">

      {/* ── Page header ── */}
      <div className="flex items-center justify-between mb-4">
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
            Manage credentials for Zuora Billing and Revenue
          </p>
        </div>
        {productTab === 'billing' && !showAddForm && !editingTenant && (
          <button type="button" onClick={() => setShowAddForm(true)} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zuora-600 hover:bg-zuora-500 text-white text-sm font-semibold shadow-md shadow-zuora-500/20 transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            Add Tenant
          </button>
        )}
        {productTab === 'revenue' && !showRevenueAddForm && !editingRevenue && (
          <button type="button" onClick={() => setShowRevenueAddForm(true)} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold shadow-md shadow-violet-500/20 transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            Add Instance
          </button>
        )}
      </div>

      {/* ── Product tab bar ── */}
      <div className="flex items-center gap-1 mb-5 bg-slate-100 dark:bg-slate-800 rounded-xl p-1 self-start">
        {([['billing', 'Zuora Billing'], ['revenue', 'Zuora Revenue']] as const).map(([tab, label]) => (
          <button
            key={tab}
            type="button"
            onClick={() => setProductTab(tab)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              productTab === tab
                ? tab === 'revenue'
                  ? 'bg-white dark:bg-slate-700 text-violet-600 dark:text-violet-400 shadow-sm'
                  : 'bg-white dark:bg-slate-700 text-zuora-600 dark:text-zuora-400 shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {productTab === 'billing' && <>

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
                        {isActive && hasToken && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Active
                          </span>
                        )}
                        {isActive && isTokenExpired && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-500 dark:text-rose-400 text-[10px] font-semibold">
                            Token Expired
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
          {/* Quick Connect toggle — always visible when not using a saved tenant */}
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

              {/* Environment */}
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

              {/* Client ID + Secret */}
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

              {/* Generate button */}
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

              {/* Save shortcut */}
              {quickClientId.trim() && quickClientSecret.trim() && (
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(true);
                    setQuickMode(false);
                  }}
                  className="w-full py-2 rounded-xl text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-zuora-600 dark:hover:text-zuora-300 border border-dashed border-slate-200 dark:border-slate-700 hover:border-zuora-400 dark:hover:border-zuora-500/50 transition-all flex items-center justify-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                  Save as tenant for later
                </button>
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

              {/* Token result */}
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

          {/* Saved tenant token panel — only when one is active and not in quick mode */}
          {activeTenant && !quickMode && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 space-y-5">
              {/* Section header */}
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
                      <code className="font-mono text-xs text-zuora-600 dark:text-zuora-300 truncate max-w-[280px]">
                        {envUrl(activeTenant.environmentId)}/oauth/token
                      </code>
                    </div>
                  </div>
                  {(() => {
                    const blockedByOther = !!accessToken && !isTokenExpired && tokenTenantId !== activeTenant.id && tokenTenantId !== '';
                    const blockingTenant = blockedByOther ? tenants.find(t => t.id === tokenTenantId) : null;
                    return blockedByOther ? (
                      <div className="rounded-xl border border-amber-200 dark:border-amber-500/20 bg-amber-50 dark:bg-amber-500/8 p-3">
                        <p className="text-sm text-amber-700 dark:text-amber-400">
                          Clear the active token{blockingTenant ? <> on <span className="font-semibold">{blockingTenant.name}</span></> : ''} before generating a new one here.
                        </p>
                      </div>
                    ) : null;
                  })()}
                  <button
                    type="button"
                    onClick={handleGenerateToken}
                    disabled={isGenerating || (!!accessToken && !isTokenExpired && tokenTenantId !== activeTenant.id && tokenTenantId !== '')}
                    className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                      isGenerating || (!!accessToken && !isTokenExpired && tokenTenantId !== activeTenant.id && tokenTenantId !== '')
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
              {useManualToken && (
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

      </> /* end productTab === 'billing' */}

      {/* ── Revenue tab ─────────────────────────────────────────────────────── */}
      {productTab === 'revenue' && (
        <div className="flex-1 flex flex-col min-h-0">

          {/* Add / Edit form */}
          {(showRevenueAddForm || editingRevenue) && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm mb-5">
              <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {editingRevenue ? <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />}
                </svg>
                {editingRevenue ? `Edit "${editingRevenue.name}"` : 'New Revenue Instance'}
              </h3>
              <RevenueInstanceForm
                initial={editingRevenue ?? undefined}
                onSave={editingRevenue ? handleRevenueEdit : handleRevenueAdd}
                onCancel={() => { setShowRevenueAddForm(false); setEditingRevenue(null); }}
              />
            </div>
          )}

          {/* Empty state */}
          {!showRevenueAddForm && !editingRevenue && revenueInstances.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-500/15 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" /></svg>
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">No Revenue instances yet</p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-1 mb-4">Add an instance to store credentials and generate tokens</p>
              <button type="button" onClick={() => setShowRevenueAddForm(true)} className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold shadow-md shadow-violet-500/20 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                Add Revenue Instance
              </button>
            </div>
          )}

          {/* Two-column layout */}
          {!showRevenueAddForm && !editingRevenue && revenueInstances.length > 0 && (() => {
            const tokenOwner = revenueInstances.find(r => !!r.token);
            const sel = selectedRevenueInstance;
            const isGenerating = sel ? revenueGeneratingId === sel.id : false;
            const selError = sel ? revenueErrors[sel.id] : '';
            const selIsActive = sel ? sel.id === activeRevenueId : false;
            const selHasToken = !!sel?.token;
            const selBlockedByOther = !!tokenOwner && sel ? tokenOwner.id !== sel.id : false;
            return (
              <div className="flex gap-5 flex-1 min-h-0">

                {/* Left — instance list */}
                <div className="w-72 shrink-0 flex flex-col gap-2 overflow-y-auto">
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider shrink-0 px-1">
                    Saved Instances ({revenueInstances.length})
                  </p>
                  {revenueInstances.map(instance => {
                    const isActive = instance.id === activeRevenueId;
                    const isSelected = instance.id === (sel?.id);
                    return (
                      <div
                        key={instance.id}
                        onClick={() => setSelectedRevenueId(instance.id)}
                        className={`group relative rounded-xl border p-3.5 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-violet-400 dark:border-violet-500/60 bg-violet-500/5 dark:bg-violet-500/8 shadow-sm shadow-violet-500/10'
                            : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <div className={`mt-0.5 w-3.5 h-3.5 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                            isActive ? 'border-violet-500 bg-violet-500' : 'border-slate-300 dark:border-slate-600'
                          }`}>
                            {isActive && <span className="w-1 h-1 rounded-full bg-white" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-sm font-semibold text-slate-800 dark:text-white truncate">{instance.name}</span>
                              {isActive && instance.token && (
                                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold shrink-0">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />Active
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-0.5 truncate">{instance.host.replace('https://', '')}</p>
                            <div className="flex items-center gap-1.5 mt-1.5">
                              <code className="text-[10px] font-mono text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{instance.username}</code>
                              {instance.token && <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">● Token</span>}
                            </div>
                          </div>
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" onClick={e => e.stopPropagation()}>
                            <button type="button" onClick={() => setEditingRevenue(instance)} className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                            </button>
                            <button type="button" onClick={() => handleRevenueDelete(instance.id)} className="p-1 rounded text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <p className="text-[10px] text-center text-slate-400 dark:text-slate-600 mt-1">Stored locally · never sent to third parties</p>
                </div>

                {/* Right — token panel */}
                {sel && (
                  <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 flex flex-col gap-4 overflow-y-auto">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <svg className="w-4 h-4 text-violet-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          <span className="text-base font-semibold text-slate-800 dark:text-white">Generate Token</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Using <span className="font-medium text-slate-700 dark:text-slate-300">{sel.name}</span> · <span className="font-mono text-xs text-violet-600 dark:text-violet-400">{sel.host}</span>
                        </p>
                      </div>
                      {!selIsActive && (
                        <button type="button" onClick={() => activateRevenueInstance(sel)} className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 transition-colors">
                          Set as Active
                        </button>
                      )}
                      {selIsActive && (
                        <span className="shrink-0 text-[10px] font-semibold px-2 py-1 rounded-full bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 uppercase tracking-wide">Active</span>
                      )}
                    </div>

                    {/* Credentials summary */}
                    <div className="grid grid-cols-2 gap-3">
                      {[['Username', sel.username], ['Role', sel.role], ['Client Name', sel.clientname], ['Password', '••••••••']].map(([label, val]) => (
                        <div key={label} className="bg-slate-50 dark:bg-slate-950 rounded-lg px-3 py-2">
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wide block mb-0.5">{label}</span>
                          <span className="text-sm font-mono text-slate-700 dark:text-slate-300">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Token status */}
                    {selHasToken ? (
                      <div className="rounded-xl border border-emerald-200 dark:border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/8 p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Token Active</span>
                          </div>
                          <button onClick={() => setRevenueShowToken(v => !v)} className="text-xs underline text-emerald-600 dark:text-emerald-400 hover:opacity-80">
                            {revenueShowToken ? 'Hide' : 'Show'}
                          </button>
                        </div>
                        {revenueShowToken && (
                          <code className="block mb-3 text-[10px] font-mono text-emerald-700 dark:text-emerald-300 bg-white dark:bg-slate-950 border border-emerald-200 dark:border-emerald-500/20 px-3 py-2 rounded-lg break-all leading-relaxed">
                            {sel.token}
                          </code>
                        )}
                        <p className="text-xs text-emerald-600 dark:text-emerald-500 flex items-center gap-1 mb-3">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          Automatically applied to all Revenue API requests
                        </p>
                        <button type="button" onClick={() => {
                          const updated = revenueInstances.map(r => r.id === sel.id ? { ...r, token: undefined } : r);
                          setRevenueInstances(updated);
                          saveRevenueInstances(updated);
                          if (selIsActive) localStorage.removeItem('zuora_revenue_token');
                          setRevenueShowToken(false);
                        }} className="w-full py-1.5 rounded-lg text-xs font-semibold border border-rose-300 dark:border-rose-500/40 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors">
                          Clear Token
                        </button>
                      </div>
                    ) : selBlockedByOther ? (
                      <div className="rounded-xl border border-amber-200 dark:border-amber-500/20 bg-amber-50 dark:bg-amber-500/8 p-4">
                        <p className="text-sm text-amber-700 dark:text-amber-400">
                          Clear the active token on <span className="font-semibold">{tokenOwner!.name}</span> before generating a token here.
                        </p>
                      </div>
                    ) : null}

                    {selError && (
                      <div className="flex gap-2.5 p-3 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 rounded-xl">
                        <svg className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <p className="text-sm text-rose-700 dark:text-rose-300">{selError}</p>
                      </div>
                    )}

                    {/* Local proxy toggle — shown when not on localhost */}
                    {window.location.hostname !== 'localhost' && (
                      <div className={`rounded-xl border p-3.5 transition-colors ${revenueUseLocalProxy ? 'border-violet-300 dark:border-violet-500/40 bg-violet-50 dark:bg-violet-500/8' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900'}`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Use local proxy for Revenue</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                              Required for Revenue sandbox hosts on Zuora's internal network (VPN). Run <code className="font-mono bg-slate-100 dark:bg-slate-800 px-1 rounded">node proxy-server.js</code> locally.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              const next = !revenueUseLocalProxy;
                              setRevenueUseLocalProxy(next);
                              localStorage.setItem('zuora_revenue_use_local_proxy', String(next));
                            }}
                            className={`relative shrink-0 w-9 h-5 rounded-full transition-colors ${revenueUseLocalProxy ? 'bg-violet-500' : 'bg-slate-300 dark:bg-slate-600'}`}
                          >
                            <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${revenueUseLocalProxy ? 'translate-x-4' : 'translate-x-0'}`} />
                          </button>
                        </div>
                        {revenueUseLocalProxy && (
                          <p className="mt-2 text-[11px] text-violet-600 dark:text-violet-400 font-medium flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            Routing Revenue requests via localhost:3001
                          </p>
                        )}
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => handleRevenueGetToken(sel)}
                      disabled={isGenerating || selBlockedByOther}
                      title={selBlockedByOther ? `Clear the token on "${tokenOwner!.name}" first` : undefined}
                      className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 mt-auto ${
                        isGenerating || selBlockedByOther
                          ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-200 dark:border-slate-700'
                          : 'bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-500/20'
                      }`}
                    >
                      {isGenerating
                        ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Authenticating…</>
                        : <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>{selHasToken ? 'Refresh Token' : 'Generate Token'}</>
                      }
                    </button>
                  </div>
                )}
              </div>
            );
          })()}

        </div>
      )}

    </div>
  );
};
