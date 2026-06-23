import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import type { ApiEndpoint, ApiRequest, ApiResponse } from '../types/api';

// Use the Vercel serverless proxy in production, local Express proxy in dev
const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';
const DEFAULT_PROXY_URL = isLocalhost ? 'http://localhost:3001/proxy' : '/api/proxy';

export class ApiExecutor {
  private useProxy = false;
  private proxyUrl = DEFAULT_PROXY_URL;

  setUseProxy(use: boolean) {
    this.useProxy = use;
  }

  private getRevenueHost(): string | null {
    // Try multi-instance active host first
    try {
      const activeId = localStorage.getItem('zuora_revenue_active_id');
      const instances = JSON.parse(localStorage.getItem('zuora_revenue_instances') || '[]');
      if (activeId && Array.isArray(instances)) {
        const active = instances.find((i: { id: string; host: string }) => i.id === activeId);
        if (active?.host) return active.host.replace(/\/$/, '');
      }
    } catch { /* ignore */ }
    // Fall back to legacy single-instance key
    const legacy = localStorage.getItem('zuora_revenue_host');
    return legacy ? legacy.replace(/\/$/, '') : null;
  }

  async execute(request: ApiRequest): Promise<ApiResponse> {
    const { endpoint, authToken, data, customHeaders, pathParams, queryParams } = request;
    const startTime = Date.now();

    let finalUrl = '';
    let config: AxiosRequestConfig = {};
    // Revenue endpoints use a per-user host stored in localStorage
    const isRevenue = endpoint.product === 'revenue';
    const effectiveBaseUrl = isRevenue ? this.getRevenueHost() ?? endpoint.baseUrl : endpoint.baseUrl;
    try {
      // Replace path parameters in the URL
      const path = this.buildResolvedPath(endpoint, pathParams);

      // Build the request URL
      const headers: Record<string, string> = {
        ...endpoint.headers,
        ...(customHeaders || {}),
      };

      const queryString = this.buildQueryString(queryParams);

      if (this.useProxy) {
        finalUrl = this.proxyUrl;
        headers['X-Target-URL'] = `${effectiveBaseUrl}${path}${queryString}`;
      } else {
        finalUrl = `${effectiveBaseUrl}${path}${queryString}`;
      }

      config = {
        method: endpoint.method,
        url: finalUrl,
        headers,
        responseType: 'arraybuffer',
      };

      // Add authentication
      if (endpoint.requiresAuth && authToken) {
        if (endpoint.authType === 'bearer') {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${authToken}`,
          };
        } else if (endpoint.authType === 'apiKey') {
          config.headers = {
            ...config.headers,
            'apiAccessKeyId': authToken.split(':')[0],
            'apiSecretAccessKey': authToken.split(':')[1],
          };
        }
      }

      // Revenue token — auto-inject from localStorage for non-auth Revenue endpoints
      if (isRevenue && endpoint.authType === 'revenue-token') {
        const revenueToken = localStorage.getItem('zuora_revenue_token') || '';
        if (revenueToken) {
          config.headers = { ...config.headers, token: revenueToken };
        }
      }

      // Add request body
      if (data && (endpoint.method === 'POST' || endpoint.method === 'PUT' || endpoint.method === 'PATCH')) {
        config.data = data;
      }

      // Make the request
      const response = await axios(config);
      const duration = Date.now() - startTime;
      const actualUrl = `${effectiveBaseUrl}${this.buildResolvedPath(endpoint, pathParams)}${this.buildQueryString(queryParams)}`;

      const contentType: string = response.headers['content-type'] || '';
      const isJson = contentType.includes('application/json') || contentType.includes('text/');
      const responseHeaders = response.headers as Record<string, string>;

      if (!isJson && response.data instanceof ArrayBuffer && response.data.byteLength > 0) {
        const blob = new Blob([response.data], { type: contentType || 'application/octet-stream' });
        const blobUrl = URL.createObjectURL(blob);
        const disposition: string = responseHeaders['content-disposition'] || '';
        const filenameMatch = disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        const filename = filenameMatch ? filenameMatch[1].replace(/['"]/g, '') : this.guessFilename(contentType, path);
        return {
          status: response.status,
          statusText: response.statusText,
          data: null,
          headers: responseHeaders,
          duration,
          timestamp: Date.now(),
          blobUrl,
          filename,
          request: {
            url: actualUrl,
            method: endpoint.method,
            headers: (config.headers || {}) as Record<string, string>,
            data: config.data,
          },
        };
      }

      // Parse JSON/text from arraybuffer
      const text = new TextDecoder().decode(response.data as ArrayBuffer);
      let parsedData: any;
      try {
        parsedData = JSON.parse(text);
      } catch {
        parsedData = text;
      }

      return {
        status: response.status,
        statusText: response.statusText,
        data: parsedData,
        headers: responseHeaders,
        duration,
        timestamp: Date.now(),
        request: {
          url: actualUrl,
          method: endpoint.method,
          headers: (config.headers || {}) as Record<string, string>,
          data: config.data,
        },
      };
    } catch (error: any) {
      const duration = Date.now() - startTime;
      const actualUrl = `${effectiveBaseUrl}${this.buildResolvedPath(endpoint, pathParams)}${this.buildQueryString(queryParams)}`;

      if (error.response) {
        // Server responded with error status — parse body from arraybuffer
        let errorData: any = error.response.data;
        if (errorData instanceof ArrayBuffer) {
          try {
            errorData = JSON.parse(new TextDecoder().decode(errorData));
          } catch {
            errorData = new TextDecoder().decode(errorData);
          }
        }
        return {
          status: error.response.status,
          statusText: error.response.statusText,
          data: errorData,
          headers: error.response.headers as Record<string, string>,
          duration,
          timestamp: Date.now(),
          request: {
            url: actualUrl,
            method: endpoint.method,
            headers: (config.headers || {}) as Record<string, string>,
            data: config.data,
          },
        };
      } else if (error.request) {
        // Request made but no response
        throw new Error('No response received from server. Check your network connection.');
      } else {
        // Error setting up request
        throw new Error(`Request failed: ${error.message}`);
      }
    }
  }

  private guessFilename(contentType: string, path: string): string {
    const ext = contentType.includes('pdf') ? '.pdf'
      : contentType.includes('zip') ? '.zip'
      : contentType.includes('csv') ? '.csv'
      : contentType.includes('excel') || contentType.includes('spreadsheet') ? '.xlsx'
      : '';
    const base = path.split('/').filter(Boolean).pop() || 'download';
    return ext ? `${base}${ext}` : base;
  }

  private buildResolvedPath(endpoint: ApiEndpoint, pathParams?: Record<string, any>): string {
    let path = endpoint.path;
    if (pathParams) {
      Object.entries(pathParams).forEach(([key, value]) => {
        path = path.replace(`{${key}}`, encodeURIComponent(String(value)));
      });
    }
    return path;
  }

  private buildQueryString(queryParams?: Record<string, any>): string {
    if (!queryParams) return '';

    const searchParams = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value === undefined || value === null || value === '') return;
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item !== undefined && item !== null && item !== '') {
            searchParams.append(key, String(item));
          }
        });
        return;
      }
      searchParams.append(key, String(value));
    });

    const query = searchParams.toString();
    return query ? `?${query}` : '';
  }

  private buildResolvedUrl(request: ApiRequest): string {
    const { endpoint } = request;
    const baseUrl = endpoint.product === 'revenue'
      ? (this.getRevenueHost() ?? endpoint.baseUrl)
      : endpoint.baseUrl;
    const path = this.buildResolvedPath(endpoint, request.pathParams);
    return `${baseUrl}${path}${this.buildQueryString(request.queryParams)}`;
  }

  generateCurlCommand(request: ApiRequest): string {
    const { endpoint, authToken, data, customHeaders } = request;
    let curl = `curl -X ${endpoint.method} "${this.buildResolvedUrl(request)}"`;

    // Add headers
    if (endpoint.headers) {
      Object.entries(endpoint.headers).forEach(([key, value]) => {
        curl += ` \\\n  -H "${key}: ${value}"`;
      });
    }
    if (customHeaders) {
      Object.entries(customHeaders).forEach(([key, value]) => {
        curl += ` \\\n  -H "${key}: ${value}"`;
      });
    }

    // Add authentication
    if (endpoint.requiresAuth && authToken) {
      if (endpoint.authType === 'bearer') {
        curl += ` \\\n  -H "Authorization: Bearer ${authToken}"`;
      } else if (endpoint.authType === 'apiKey') {
        const [keyId, secretKey] = authToken.split(':');
        curl += ` \\\n  -H "apiAccessKeyId: ${keyId}"`;
        curl += ` \\\n  -H "apiSecretAccessKey: ${secretKey}"`;
      }
    }

    // Add request body
    if (data && (endpoint.method === 'POST' || endpoint.method === 'PUT' || endpoint.method === 'PATCH')) {
      curl += ` \\\n  -d '${JSON.stringify(data, null, 2)}'`;
    }

    return curl;
  }

  generateJavaScriptCode(request: ApiRequest): string {
    const { endpoint, authToken, data, customHeaders } = request;
    let code = `const axios = require('axios');\n\n`;
    code += `const response = await axios({\n`;
    code += `  method: '${endpoint.method}',\n`;
    code += `  url: '${this.buildResolvedUrl(request)}',\n`;

    // Add headers
    code += `  headers: {\n`;
    if (endpoint.headers) {
      Object.entries(endpoint.headers).forEach(([key, value]) => {
        code += `    '${key}': '${value}',\n`;
      });
    }
    if (customHeaders) {
      Object.entries(customHeaders).forEach(([key, value]) => {
        code += `    '${key}': '${value}',\n`;
      });
    }
    if (endpoint.requiresAuth && authToken) {
      if (endpoint.authType === 'bearer') {
        code += `    'Authorization': 'Bearer ${authToken}',\n`;
      }
    }
    code += `  },\n`;

    // Add request body
    if (data && (endpoint.method === 'POST' || endpoint.method === 'PUT' || endpoint.method === 'PATCH')) {
      code += `  data: ${JSON.stringify(data, null, 2)}\n`;
    }

    code += `});\n\n`;
    code += `console.log(response.data);`;

    return code;
  }

  generatePythonCode(request: ApiRequest): string {
    const { endpoint, authToken, data, customHeaders } = request;
    let code = `import requests\nimport json\n\n`;
    code += `url = "${this.buildResolvedUrl(request)}"\n\n`;

    // Add headers
    code += `headers = {\n`;
    if (endpoint.headers) {
      Object.entries(endpoint.headers).forEach(([key, value]) => {
        code += `    "${key}": "${value}",\n`;
      });
    }
    if (customHeaders) {
      Object.entries(customHeaders).forEach(([key, value]) => {
        code += `    "${key}": "${value}",\n`;
      });
    }
    if (endpoint.requiresAuth && authToken) {
      if (endpoint.authType === 'bearer') {
        code += `    "Authorization": "Bearer ${authToken}",\n`;
      }
    }
    code += `}\n\n`;

    // Add request body
    if (data && (endpoint.method === 'POST' || endpoint.method === 'PUT' || endpoint.method === 'PATCH')) {
      code += `data = ${JSON.stringify(data, null, 2)}\n\n`;
      code += `response = requests.${endpoint.method.toLowerCase()}(url, headers=headers, json=data)\n\n`;
    } else {
      code += `response = requests.${endpoint.method.toLowerCase()}(url, headers=headers)\n\n`;
    }

    code += `print(response.json())`;

    return code;
  }
}

export const apiExecutor = new ApiExecutor();
