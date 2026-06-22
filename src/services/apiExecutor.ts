import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import type { ApiEndpoint, ApiRequest, ApiResponse } from '../types/api';

export class ApiExecutor {
  // Toggle this to use local proxy
  private useProxy = false;
  private proxyUrl = 'http://localhost:3001/proxy';

  setUseProxy(use: boolean) {
    this.useProxy = use;
  }

  async execute(request: ApiRequest): Promise<ApiResponse> {
    const { endpoint, authToken, data, customHeaders, pathParams, queryParams } = request;
    const startTime = Date.now();

    let finalUrl = '';
    let config: AxiosRequestConfig = {};
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
        // Use local proxy server
        finalUrl = `${this.proxyUrl}${path}${queryString}`;
        // Pass the base URL as a custom header
        headers['X-Target-URL'] = endpoint.baseUrl;
      } else {
        // Direct request
        finalUrl = `${endpoint.baseUrl}${path}${queryString}`;
      }

      config = {
        method: endpoint.method,
        url: finalUrl,
        headers,
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

      // Add request body
      if (data && (endpoint.method === 'POST' || endpoint.method === 'PUT' || endpoint.method === 'PATCH')) {
        config.data = data;
      }

      // Make the request
      const response = await axios(config);
      const duration = Date.now() - startTime;
      const actualUrl = `${endpoint.baseUrl}${this.buildResolvedPath(endpoint, pathParams)}${this.buildQueryString(queryParams)}`;

      return {
        status: response.status,
        statusText: response.statusText,
        data: response.data,
        headers: response.headers as Record<string, string>,
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
      const actualUrl = `${endpoint.baseUrl}${this.buildResolvedPath(endpoint, pathParams)}${this.buildQueryString(queryParams)}`;

      if (error.response) {
        // Server responded with error status
        return {
          status: error.response.status,
          statusText: error.response.statusText,
          data: error.response.data,
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
    const path = this.buildResolvedPath(request.endpoint, request.pathParams);
    return `${request.endpoint.baseUrl}${path}${this.buildQueryString(request.queryParams)}`;
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
