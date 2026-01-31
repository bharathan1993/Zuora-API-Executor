import axios from 'axios';

export interface OAuthTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  jti: string;
}

export class OAuthService {
  private useProxy = false;
  private proxyUrl = 'http://localhost:3001/proxy';

  setUseProxy(use: boolean) {
    this.useProxy = use;
  }

  async generateToken(
    clientId: string,
    clientSecret: string,
    baseUrl: string
  ): Promise<OAuthTokenResponse> {
    try {
      let finalUrl: string;
      const headers: Record<string, string> = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      if (this.useProxy) {
        // Use local proxy server
        finalUrl = `${this.proxyUrl}/oauth/token`;
        headers['X-Target-URL'] = baseUrl;
      } else {
        // Direct request
        finalUrl = `${baseUrl}/oauth/token`;
      }

      const response = await axios({
        method: 'POST',
        url: finalUrl,
        headers,
        data: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: 'client_credentials',
        }).toString(),
      });

      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(
          `OAuth token generation failed: ${error.response.data?.error || error.response.statusText}`
        );
      } else if (error.request) {
        // This is likely a CORS error
        throw new Error(
          'CORS Error: Cannot generate token directly from browser. Please use "Manual Entry" mode and paste a token generated via curl or Postman.'
        );
      } else {
        throw new Error(`OAuth request failed: ${error.message}`);
      }
    }
  }
}

export const oauthService = new OAuthService();
