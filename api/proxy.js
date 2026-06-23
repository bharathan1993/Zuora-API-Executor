// Vercel serverless proxy — X-Target-URL must be the full target URL
// bodyParser disabled so we can forward the raw body as-is
export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Expose-Headers', 'revpro-token, zuora-request-id');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const targetUrl = req.headers['x-target-url'];
  if (!targetUrl) {
    return res.status(400).json({ error: 'Missing X-Target-URL header' });
  }

  try {
    // Read raw body from the stream
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    const rawBody = Buffer.concat(chunks);

    // Forward headers, skipping ones that should not be proxied
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
      body: rawBody.length > 0 ? rawBody : undefined,
    };

    console.log(`[Vercel Proxy] ${req.method} ${targetUrl}`);

    // Native fetch is available in Vercel's Node 18+ runtime
    const response = await fetch(targetUrl, fetchOptions);

    // Forward response headers
    for (const [key, value] of response.headers.entries()) {
      const skip = ['transfer-encoding', 'connection', 'content-encoding', 'content-length'];
      if (!skip.includes(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    res.status(response.status).send(buffer);
  } catch (error) {
    console.error('[Vercel Proxy] Error:', error);
    res.status(500).json({ error: 'Proxy error', message: error.message });
  }
}
