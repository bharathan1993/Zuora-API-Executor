import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import https from 'https';

// Agent that skips TLS verification for internal/sandbox Revenue hosts
const insecureAgent = new https.Agent({ rejectUnauthorized: false });

const app = express();
const PORT = 3001;

// Enable CORS for all origins, expose Revenue token header, and allow Private Network Access
// (Chrome blocks HTTPS pages from calling localhost unless the server sends this header)
app.use(cors({
  exposedHeaders: ['revpro-token', 'zuora-request-id'],
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Private-Network', 'true');
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    return res.status(200).end();
  }
  next();
});

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies (for OAuth)
app.use(express.urlencoded({ extended: true }));

// Proxy endpoint — X-Target-URL must be the full target URL (including path + query)
app.use('/proxy', async (req, res) => {
  try {
    const targetUrl = req.headers['x-target-url'];

    if (!targetUrl) {
      return res.status(400).json({ error: 'Missing X-Target-URL header' });
    }

    console.log(`[Proxy] ${req.method} ${targetUrl}`);

    // Prepare headers (exclude host and other problematic headers)
    const headers = {};
    Object.keys(req.headers).forEach((key) => {
      // Skip headers that shouldn't be forwarded
      if (!['host', 'connection', 'x-target-url', 'origin', 'referer'].includes(key.toLowerCase())) {
        headers[key] = req.headers[key];
      }
    });

    // Prepare fetch options
    const fetchOptions = {
      method: req.method,
      headers: headers,
      // Skip TLS verification for internal Revenue sandbox hosts
      agent: targetUrl.startsWith('https:') ? insecureAgent : undefined,
    };

    // Add body for POST, PUT, PATCH requests (only if there is actual content)
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      const hasBody = req.body && Object.keys(req.body).length > 0;
      if (req.headers['content-type']?.includes('application/x-www-form-urlencoded')) {
        const params = new URLSearchParams(req.body);
        fetchOptions.body = params.toString();
      } else if (hasBody) {
        fetchOptions.body = JSON.stringify(req.body);
      }
      // If no body, don't set fetchOptions.body — avoid sending stray "{}"
    }

    // Make the request
    const response = await fetch(targetUrl, fetchOptions);

    // Get response body as buffer to preserve binary data (PDFs, ZIPs, etc.)
    const responseBuffer = await response.buffer();

    // Forward response headers
    response.headers.forEach((value, key) => {
      // Skip problematic headers
      if (!['transfer-encoding', 'connection', 'content-encoding', 'content-length'].includes(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    });

    // Send response preserving exact bytes
    res.status(response.status).send(responseBuffer);

    console.log(`[Proxy] Response: ${response.status} ${response.statusText}`);
  } catch (error) {
    console.error('[Proxy] Error:', error);
    res.status(500).json({
      error: 'Proxy error',
      message: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║  🚀 Zuora API Proxy Server Running                        ║
║                                                            ║
║  Port: ${PORT}                                               ║
║  Status: Active ✓                                         ║
║                                                            ║
║  This proxy server bypasses CORS restrictions             ║
║  All requests are forwarded to Zuora APIs                 ║
╚════════════════════════════════════════════════════════════╝
  `);
});
