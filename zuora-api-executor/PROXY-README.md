# Zuora API Studio - Proxy Server Setup

## Why Do We Need This?

The browser blocks direct API requests to Zuora due to CORS (Cross-Origin Resource Sharing) security policy. This proxy server runs locally on your machine and forwards requests to Zuora, bypassing CORS restrictions.

## Quick Start (3 Steps)

### Step 1: Install Proxy Dependencies

Open a **NEW terminal** in the `zuora-api-executor` folder and run:

```bash
npm install --package-lock-only --prefix . express cors node-fetch
```

OR if that doesn't work:

```bash
npm install express cors node-fetch
```

### Step 2: Start the Proxy Server

In the same terminal, run:

```bash
node proxy-server.js
```

You should see:

```
╔════════════════════════════════════════════════════════════╗
║  🚀 Zuora API Proxy Server Running                        ║
║                                                            ║
║  Port: 3001                                               ║
║  Status: Active ✓                                         ║
║                                                            ║
║  This proxy server bypasses CORS restrictions             ║
║  All requests are forwarded to Zuora APIs                 ║
╚════════════════════════════════════════════════════════════╝
```

**⚠️ Keep this terminal running!** Don't close it.

### Step 3: Enable Proxy in the App

1. In your browser, check the box: **"Use Local Proxy Server (localhost:3001)"**
2. Now you can generate OAuth tokens and execute APIs!

## How It Works

```
Browser (localhost:5173)
    ↓
Proxy Server (localhost:3001)  ← No CORS issues!
    ↓
Zuora API (rest.zuora.com)
```

The proxy server:
- Receives requests from your browser
- Forwards them to Zuora with proper headers
- Sends the response back to your browser
- Bypasses all CORS restrictions

## Troubleshooting

### "Cannot find module 'express'"
Run: `npm install express cors node-fetch`

### "Port 3001 is already in use"
Stop any other process using port 3001, or change the PORT in `proxy-server.js`

### Still getting CORS errors
Make sure:
1. Proxy server is running (check the terminal)
2. Checkbox is checked in the UI
3. Using the correct port (3001)

## For Your Hackathon Demo

**Before presenting:**
1. Start proxy server: `node proxy-server.js`
2. Start web app: `yarn dev`
3. Check the proxy checkbox in the UI
4. Demo your APIs!

**During the demo:**
- Keep both terminals visible (optional)
- Show that the proxy is handling requests
- Explain how it bypasses CORS for local development
