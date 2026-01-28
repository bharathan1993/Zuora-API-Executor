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

    if (savedClientId) setClientId(savedClientId);
    if (savedClientSecret) setClientSecret(savedClientSecret);
    if (savedToken) {
      setAccessToken(savedToken);
      onTokenGenerated(savedToken);
    }
  }, []);

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

      // Save to localStorage
      localStorage.setItem('zuora_client_id', clientId);
      localStorage.setItem('zuora_client_secret', clientSecret);
      localStorage.setItem('zuora_access_token', tokenResponse.access_token);

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
    setManualToken('');
    localStorage.removeItem('zuora_access_token');
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
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">OAuth Authentication</h2>

      {/* Environment Selector */}
      <div className="mb-4">
        <label htmlFor="oauth-environment" className="block text-sm font-medium text-gray-700 mb-2">
          Environment
        </label>
        <select
          id="oauth-environment"
          value={selectedEnvironmentId}
          onChange={(e) => onEnvironmentChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
        >
          {environments.map((env) => (
            <option key={env.id} value={env.id}>
              {env.name}
            </option>
          ))}
        </select>
        {(() => {
          const selectedEnv = environments.find((env) => env.id === selectedEnvironmentId);
          return selectedEnv ? (
            <div className="mt-2">
              <p className="text-xs text-gray-500">Base URL:</p>
              <code className="text-xs bg-gray-100 px-2 py-1 rounded block mt-1 break-all">
                {selectedEnv.baseUrl}
              </code>
              <p className="text-xs text-gray-500 mt-1">OAuth Endpoint:</p>
              <code className="text-xs bg-blue-50 px-2 py-1 rounded block mt-1 break-all border border-blue-200">
                {selectedEnv.baseUrl}/oauth/token
              </code>
            </div>
          ) : null;
        })()}
      </div>

      {/* Toggle between Auto and Manual */}
      <div className="mb-4 flex items-center space-x-4">
        <button
          type="button"
          onClick={() => setUseManualToken(false)}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            !useManualToken
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Auto Generate
        </button>
        <button
          type="button"
          onClick={() => setUseManualToken(true)}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            useManualToken
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
          <label htmlFor="clientId" className="block text-sm font-medium text-gray-700 mb-2">
            Client ID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="clientId"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            placeholder="Enter OAuth Client ID"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Client Secret */}
        <div>
          <label htmlFor="clientSecret" className="block text-sm font-medium text-gray-700 mb-2">
            Client Secret <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showSecret ? 'text' : 'password'}
              id="clientSecret"
              value={clientSecret}
              onChange={(e) => setClientSecret(e.target.value)}
              placeholder="Enter OAuth Client Secret"
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowSecret(!showSecret)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
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
            className={`w-full py-2 px-4 rounded-md font-semibold transition-colors ${
              isGenerating || !clientId || !clientSecret
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isGenerating ? 'Generating Token...' : 'Generate OAuth Token'}
          </button>

          {/* CORS Note */}
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-xs text-blue-800">
              <strong>Note:</strong> If auto-generation fails due to CORS restrictions, use "Manual Entry" to paste a token generated via curl or Postman.
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Manual Token Entry */}
          <div className="space-y-4">
            <div>
              <label htmlFor="manualToken" className="block text-sm font-medium text-gray-700 mb-2">
                Access Token <span className="text-red-500">*</span>
              </label>
              <textarea
                id="manualToken"
                value={manualToken}
                onChange={(e) => setManualToken(e.target.value)}
                placeholder="Paste your OAuth access token here..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
              />
            </div>

            <button
              onClick={handleManualTokenSubmit}
              disabled={!manualToken.trim()}
              className={`w-full py-2 px-4 rounded-md font-semibold transition-colors ${
                !manualToken.trim()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Use This Token
            </button>

            {/* curl Example */}
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
              <p className="text-xs font-semibold text-gray-700 mb-2">Generate token via curl:</p>
              <code className="text-xs bg-gray-900 text-green-400 px-3 py-2 rounded block break-all">
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
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {/* Access Token Display */}
      {accessToken && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-green-800">Access Token Generated</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowToken(!showToken)}
                className="text-xs text-green-700 hover:text-green-900 underline"
              >
                {showToken ? 'Hide' : 'Show'}
              </button>
              <button
                onClick={handleClearToken}
                className="text-xs text-red-600 hover:text-red-800 underline"
              >
                Clear
              </button>
            </div>
          </div>

          {showToken && (
            <div className="mb-2">
              <code className="text-xs bg-white px-2 py-1 rounded block break-all border border-green-300">
                {accessToken}
              </code>
            </div>
          )}

          {expiresIn && (
            <p className="text-xs text-green-700">
              Expires in: {formatExpiryTime(expiresIn)}
            </p>
          )}

          <p className="text-xs text-green-600 mt-2">
            ✓ This token will be used for all API requests
          </p>
        </div>
      )}

      <p className="text-xs text-gray-500 mt-4">
        Your credentials are stored locally in the browser and never sent to any third party.
      </p>
    </div>
  );
};
