const express = require("express");
const path = require("path");
const url = require("url");

const app = express();
const PORT = 3001;

app.use(express.json());

// CORS 미들웨어
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// In-memory allowed targets map. Keys are user-provided names.
const ALLOWED_TARGETS = {
  target: "http://localhost:3002"
};

// Serve the client UI (register page) from the sibling client folder
app.use(express.static(path.join(__dirname, "..", "client")));

// Register a new target dynamically: { name, url }
app.post("/register", (req, res) => {
  try {
    const { name, url: targetUrl } = req.body || {};

    if (!name || !targetUrl) {
      return res.status(400).json({ success: false, error: "Missing name or url" });
    }

    try {
      // basic validation
      new URL(targetUrl);
    } catch (err) {
      return res.status(400).json({ success: false, error: "Invalid URL" });
    }

    ALLOWED_TARGETS[name] = targetUrl;
    return res.json({ success: true, name, url: targetUrl });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Registration failed" });
  }
});

// List registered targets
app.get("/targets", (req, res) => {
  res.json({ success: true, targets: ALLOWED_TARGETS });
});

// URL 우회 프록시: /api/proxy?url=...
app.all("/api/proxy", async (req, res) => {
  try {
    const targetUrl = req.query.url;

    if (!targetUrl) {
      return res.status(400).json({ success: false, error: "Missing url parameter" });
    }

    try {
      new URL(targetUrl);
    } catch (err) {
      return res.status(400).json({ success: false, error: "Invalid URL" });
    }

    // Fetch the target page
    const fetchOptions = {
      method: req.method,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    };

    // Include body for POST/PUT requests
    if (req.method === "POST" || req.method === "PUT") {
      if (Object.keys(req.body).length > 0) {
        fetchOptions.body = JSON.stringify(req.body);
        fetchOptions.headers["Content-Type"] = "application/json";
      }
    }

    const response = await fetch(targetUrl, fetchOptions);
    const contentType = response.headers.get("content-type");

    // Set response headers
    if (contentType) {
      res.set("Content-Type", contentType);
    }
    res.status(response.status);

    // Handle different content types
    if (contentType && contentType.includes("text/html")) {
      // For HTML, modify URLs to go through proxy
      let html = await response.text();
      
      // Replace relative URLs with proxy URLs
      const baseUrl = targetUrl;
      const urlObj = new URL(baseUrl);
      
      // Replace href and src attributes
      html = html.replace(/href=["'](?!(?:http|https|\/|#|javascript|mailto))/g, 
        `href="/api/proxy?url=${encodeURIComponent(urlObj.protocol + '//' + urlObj.host)}/`);
      html = html.replace(/src=["'](?!(?:http|https|\/|#|javascript|data))/g, 
        `src="/api/proxy?url=${encodeURIComponent(urlObj.protocol + '//' + urlObj.host)}/`);

      // Replace absolute URLs from same domain
      const domain = urlObj.origin;
      html = html.replace(new RegExp(`href=["']${domain}`, 'g'), 
        `href="/api/proxy?url=${encodeURIComponent(domain)}`);
      html = html.replace(new RegExp(`src=["']${domain}`, 'g'), 
        `src="/api/proxy?url=${encodeURIComponent(domain)}`);

      res.send(html);
    } else {
      // For other content types, send as-is
      const buffer = await response.arrayBuffer();
      res.send(Buffer.from(buffer));
    }
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ success: false, error: "Proxy request failed: " + error.message });
  }
});

// Proxy passthrough: /proxy/:target/<path...>
app.all(/^\/proxy\/([^\/]+)(.*)$/, async (req, res) => {
  try {
    const targetName = req.params[0];
    const pathParts = req.params[1] || "";
    const targetBase = ALLOWED_TARGETS[targetName];

    if (!targetBase) {
      return res.status(403).json({ success: false, error: "Target is not allowed" });
    }

    const targetUrl = new URL(pathParts, targetBase);

    // Forward the request method, headers (except host) and body
    const fetchOptions = {
      method: req.method,
      headers: { ...req.headers }
    };

    // Remove host header to avoid conflicts
    delete fetchOptions.headers.host;

    if (req.body && Object.keys(req.body).length > 0) {
      fetchOptions.body = JSON.stringify(req.body);
      fetchOptions.headers["content-type"] = "application/json";
    }

    const response = await fetch(targetUrl, fetchOptions);
    const contentType = response.headers.get("content-type");

    if (contentType) res.set("Content-Type", contentType);

    res.status(response.status);
    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Proxy request failed" });
  }
});

app.listen(PORT, () => {
  console.log(`🌐 Proxy server: http://localhost:${PORT}`);
  console.log(`📖 URL 우회 프록시: http://localhost:${PORT}/proxy.html`);
});