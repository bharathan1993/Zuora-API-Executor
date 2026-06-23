// Vercel serverless function — mirrors proxy-server.js for production use
import https from 'https';

const insecureAgent = new https.Agent({ rejectUnauthorized: false });

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Expose-Headers', 'revpro-token, zuora-request-id');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const baseUrl = req.headers['x-target-url'];
    if (!baseUrl) {
      return res.status(400).json({ error: 'Missing X-Target-URL header' });
    }

    // The path after /api/proxy becomes the sub-path appended to the target URL
    const subPath = (req.url || '').replace(/^\/?/, '');
    const normalizedBase = baseUrl.replace(/\/$/, '');
    const targetUrl = subPath ? `${normalizedBase}/${subPath}` : normalizedBase;

    console.log(`[Vercel Proxy] ${req.method} ${targetUrl}`);

    // Forward headers, excluding ones that cause issues
    const skipHeaders = new Set(['host', 'connection', 'x-target-url', 'origin', 'referer']);
    const headers = {};
    for (const [key, value] of Object.entries(req.headers)) {
      if (!skipHeaders.has(key.toLowerCase())) {
        headers[key] = value;
      }
    }

    const fetchOptions = {
      method: req.method,
      headers,
      agent: targetUrl.startsWith('https:') ? insecureAgent : undefined,
    };

    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      // Read raw body from the stream
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
      }
      const rawBody = Buffer.concat(chunks).toString();

      if (rawBody) {
        fetchOptions.body = rawBody;
      }
    }

    const { default: fetch } = await import('node-fetch');
    const response = await fetch(targetUrl, fetchOptions);
    const responseBuffer = await response.buffer();

    // Forward response headers
    for (const [key, value] of response.headers.entries()) {
      const skip = ['transfer-encoding', 'connection', 'content-encoding', 'content-length'];
      if (!skip.includes(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    }

    res.status(response.status).send(responseBuffer);
  } catch (error) {
    console.error('[Vercel Proxy] Error:', error);
    res.status(500).json({ error: 'Proxy error', message: error.message });
  }
}
