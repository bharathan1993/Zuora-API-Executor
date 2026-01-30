import { useState, useEffect } from 'react';
import { oauthService } from '../services/oauthService';
import type { Environment } from '../types/api';

interface OAuthAuthenticationProps {
  environments: Environment[];
  selectedEnvironmentId: string;
  onEnvironmentChange: (environmentId: string) => void;
  onTokenGenerated: (token: string) => void;
  useCorsProxy?: boolean;
}

export const OAuthAuthentication = ({
  environments,
  selectedEnvironmentId,
  onEnvironmentChange,
  onTokenGenerated,
  useCorsProxy = false,
}: OAuthAuthenticationProps) => {
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [expiresIn, setExpiresIn] = useState<number | null>(null);
  const [expiryTimestamp, setExpiryTimestamp] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [useManualToken, setUseManualToken] = useState(false);
  const [manualToken, setManualToken] = useState('');

  // Load saved credentials from localStorage
  useEffect(() => {
    const savedClientId = localStorage.getItem('zuora_client_id');
    const savedClientSecret = localStorage.getItem('zuora_client_secret');
    const savedToken = localStorage.getItem('zuora_access_token');
    const savedExpiry = localStorage.getItem('zuora_token_expiry');

    if (savedClientId) setClientId(savedClientId);
    if (savedClientSecret) setClientSecret(savedClientSecret);
    if (savedToken) {
      setAccessToken(savedToken);
      onTokenGenerated(savedToken);
    }
    if (savedExpiry) {
      setExpiryTimestamp(parseInt(savedExpiry, 10));
    }
  }, []);

  // Timer effect
  useEffect(() => {
    if (!expiryTimestamp) {
      setTimeLeft('');
      return;
    }

    const updateTimer = () => {
      const now = Date.now();
      const difference = expiryTimestamp - now;

      if (difference <= 0) {
        setTimeLeft('Expired');
        return;
      }

      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      const hours = Math.floor(difference / 1000 / 3600);

      if (hours > 0) {
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft(`${minutes}m ${seconds}s`);
      }
    };

    updateTimer(); // Initial call
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [expiryTimestamp]);

  const handleGenerateToken = async () => {
    if (!clientId || !clientSecret) {
      setError('Please enter both Client ID and Client Secret');
      return;
    }

    setIsGenerating(true);
    setError('');

    try {
      const selectedEnv = environments.find((env) => env.id === selectedEnvironmentId);
      const baseUrl = selectedEnv?.baseUrl || environments[0].baseUrl;

      // Set proxy mode
      oauthService.setUseProxy(useCorsProxy);

      const tokenResponse = await oauthService.generateToken(clientId, clientSecret, baseUrl);

      setAccessToken(tokenResponse.access_token);
      setExpiresIn(tokenResponse.expires_in);
      
      // Calculate and save expiry timestamp
      const newExpiryTimestamp = Date.now() + (tokenResponse.expires_in * 1000);
      setExpiryTimestamp(newExpiryTimestamp);

      // Save to localStorage
      localStorage.setItem('zuora_client_id', clientId);
      localStorage.setItem('zuora_client_secret', clientSecret);
      localStorage.setItem('zuora_access_token', tokenResponse.access_token);
      localStorage.setItem('zuora_token_expiry', newExpiryTimestamp.toString());

      // Notify parent component
      onTokenGenerated(tokenResponse.access_token);

      setError('');
    } catch (err: any) {
      setError(err.message || 'Failed to generate OAuth token');
      setAccessToken('');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleClearToken = () => {
    setAccessToken('');
    setExpiresIn(null);
    setExpiryTimestamp(null);
    setTimeLeft('');
    setManualToken('');
    localStorage.removeItem('zuora_access_token');
    localStorage.removeItem('zuora_token_expiry');
    onTokenGenerated('');
  };

  const handleManualTokenSubmit = () => {
    if (!manualToken.trim()) {
      setError('Please enter a valid access token');
      return;
    }

    setAccessToken(manualToken.trim());
    localStorage.setItem('zuora_access_token', manualToken.trim());
    onTokenGenerated(manualToken.trim());
    setError('');
  };

  const formatExpiryTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200">
      <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-zuora-500 dark:text-zuora-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11.535 19.336a2 2 0 00-.586 1.414V22h-3v-2.277c0-.245.01-.491.028-.738a6 6 0 017.752-12.016z" />
        </svg>
        OAuth Authentication
      </h2>

      {/* Environment Selector */}
      <div className="mb-4">
        <label htmlFor="oauth-environment" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Environment
        </label>
        <select
          id="oauth-environment"
          value={selectedEnvironmentId}
          onChange={(e) => onEnvironmentChange(e.target.value)}
          className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent text-slate-900 dark:text-white transition-colors duration-200"
        >
          {environments.map((env) => (
            <option key={env.id} value={env.id} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
              {env.name}
            </option>
          ))}
        </select>
        {(() => {
          const selectedEnv = environments.find((env) => env.id === selectedEnvironmentId);
          return selectedEnv ? (
            <div className="mt-2 space-y-2">
              <div>
                <p className="text-xs text-slate-500">Base URL:</p>
                <code className="text-xs bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-300 px-2 py-1 rounded block mt-1 break-all border border-slate-200 dark:border-slate-800 font-mono transition-colors duration-200">
                  {selectedEnv.baseUrl}
                </code>
              </div>
              <div>
                <p className="text-xs text-slate-500">OAuth Endpoint:</p>
                <code className="text-xs bg-zuora-50 dark:bg-zuora-500/5 text-zuora-700 dark:text-zuora-300 px-2 py-1 rounded block mt-1 break-all border border-zuora-200 dark:border-zuora-500/20 font-mono transition-colors duration-200">
                  {selectedEnv.baseUrl}/oauth/token
                </code>
              </div>
            </div>
          ) : null;
        })()}
      </div>

      {/* Toggle between Auto and Manual */}
      <div className="mb-6 flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700 w-fit transition-colors duration-200">
        <button
          type="button"
          onClick={() => setUseManualToken(false)}
          className={`px-4 py-1.5 rounded-md font-medium text-sm transition-all ${
            !useManualToken
              ? 'bg-white dark:bg-zuora-600 text-zuora-600 dark:text-white shadow-sm dark:shadow-md'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Auto Generate
        </button>
        <button
          type="button"
          onClick={() => setUseManualToken(true)}
          className={`px-4 py-1.5 rounded-md font-medium text-sm transition-all ${
            useManualToken
              ? 'bg-white dark:bg-zuora-600 text-zuora-600 dark:text-white shadow-sm dark:shadow-md'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Manual Entry
        </button>
      </div>

      {!useManualToken ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Client ID */}
        <div>
          <label htmlFor="clientId" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Client ID <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="clientId"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            placeholder="Enter OAuth Client ID"
            className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-colors duration-200"
          />
        </div>

        {/* Client Secret */}
        <div>
          <label htmlFor="clientSecret" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Client Secret <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showSecret ? 'text' : 'password'}
              id="clientSecret"
              value={clientSecret}
              onChange={(e) => setClientSecret(e.target.value)}
              placeholder="Enter OAuth Client Secret"
              className="w-full px-3 py-2 pr-10 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-colors duration-200"
            />
            <button
              type="button"
              onClick={() => setShowSecret(!showSecret)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
            >
              {showSecret ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

          {/* Generate Token Button */}
          <button
            onClick={handleGenerateToken}
            disabled={isGenerating || !clientId || !clientSecret}
            className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-all ${
              isGenerating || !clientId || !clientSecret
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-200 dark:border-slate-700'
                : 'bg-zuora-600 text-white hover:bg-zuora-500 shadow-lg shadow-zuora-500/20'
            }`}
          >
            {isGenerating ? 'Generating Token...' : 'Generate OAuth Token'}
          </button>

          {/* CORS Note */}
          <div className="mt-4 p-3 bg-zuora-50 dark:bg-zuora-500/10 border border-zuora-200 dark:border-zuora-500/20 rounded-lg">
            <p className="text-xs text-zuora-700 dark:text-zuora-300">
              <strong>Note:</strong> If auto-generation fails due to CORS restrictions, use "Manual Entry" to paste a token generated via curl or Postman.
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Manual Token Entry */}
          <div className="space-y-4">
            <div>
              <label htmlFor="manualToken" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Access Token <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="manualToken"
                value={manualToken}
                onChange={(e) => setManualToken(e.target.value)}
                placeholder="Paste your OAuth access token here..."
                rows={4}
                className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 font-mono text-sm transition-colors duration-200"
              />
            </div>

            <button
              onClick={handleManualTokenSubmit}
              disabled={!manualToken.trim()}
              className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-all ${
                !manualToken.trim()
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-200 dark:border-slate-700'
                  : 'bg-zuora-600 text-white hover:bg-zuora-500 shadow-lg shadow-zuora-500/20'
              }`}
            >
              Use This Token
            </button>

            {/* curl Example */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors duration-200">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Generate token via curl:</p>
              <code className="text-xs bg-slate-800 dark:bg-black text-emerald-300 dark:text-emerald-400 px-3 py-3 rounded-md block break-all font-mono">
                {(() => {
                  const selectedEnv = environments.find((env) => env.id === selectedEnvironmentId);
                  return `curl -X POST "${selectedEnv?.baseUrl}/oauth/token" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "client_id=YOUR_CLIENT_ID" \\
  -d "client_secret=YOUR_CLIENT_SECRET" \\
  -d "grant_type=client_credentials"`;
                })()}
              </code>
            </div>
          </div>
        </>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 rounded-lg">
          <p className="text-sm text-rose-700 dark:text-rose-300">{error}</p>
        </div>
      )}

      {/* Access Token Display */}
      {accessToken && (
        <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Access Token Generated</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowToken(!showToken)}
                className="text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 underline"
              >
                {showToken ? 'Hide' : 'Show'}
              </button>
              <button
                onClick={handleClearToken}
                className="text-xs text-rose-600 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-300 underline"
              >
                Clear
              </button>
            </div>
          </div>

          {showToken && (
            <div className="mb-2">
              <code className="text-xs bg-white dark:bg-slate-950 text-emerald-600 dark:text-emerald-300 px-2 py-1 rounded block break-all border border-emerald-200 dark:border-emerald-500/20 font-mono transition-colors duration-200">
                {accessToken}
              </code>
            </div>
          )}

          {timeLeft && (
            <p className={`text-xs font-medium mt-1 flex items-center gap-1 ${
              timeLeft === 'Expired' ? 'text-rose-500' : 'text-emerald-700 dark:text-emerald-400'
            }`}>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {timeLeft === 'Expired' ? 'Token Expired' : `Expires in: ${timeLeft}`}
            </p>
          )}

          <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-2 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            This token will be used for all API requests
          </p>
        </div>
      )}

      <p className="text-xs text-slate-500 mt-4 text-center">
        Your credentials are stored locally in the browser and never sent to any third party.
      </p>
    </div>
  );
};
