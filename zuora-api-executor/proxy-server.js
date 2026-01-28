import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

// Enable CORS for all origins
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies (for OAuth)
app.use(express.urlencoded({ extended: true }));

// Proxy endpoint
app.use('/proxy', async (req, res) => {
  try {
    // Extract the target URL from the path
    const rawPath = req.url || '';
    const trimmedPath = rawPath.replace(/^\/+/, '');
    const targetPath = trimmedPath === '' || trimmedPath === '/' ? '' : trimmedPath.replace(/^\/+/, '');

    // Get the base URL from the X-Target-URL header
    const baseUrl = req.headers['x-target-url'];

    if (!baseUrl) {
      return res.status(400).json({ error: 'Missing X-Target-URL header' });
    }

    const normalizedBase = baseUrl.replace(/\/$/, '');
    const targetUrl = targetPath ? `${normalizedBase}/${targetPath}` : normalizedBase;

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
    };

    // Add body for POST, PUT, PATCH requests
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      // Check if content-type is form-urlencoded
      if (req.headers['content-type']?.includes('application/x-www-form-urlencoded')) {
        // Convert JSON body to URL-encoded string
        const params = new URLSearchParams(req.body);
        fetchOptions.body = params.toString();
      } else {
        // Send as JSON
        fetchOptions.body = JSON.stringify(req.body);
      }
    }

    // Make the request
    const response = await fetch(targetUrl, fetchOptions);

    // Get response body
    const contentType = response.headers.get('content-type');
    let responseData;

    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    // Forward response headers
    response.headers.forEach((value, key) => {
      // Skip problematic headers
      if (!['transfer-encoding', 'connection', 'content-encoding', 'content-length'].includes(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    });

    // Send response
    res.status(response.status).send(responseData);

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
