/* =========================================================
   YatraKhoj Backend
   ---------------------------------------------------------
   Vanilla Node.js (no npm deps required to run).
   - Serves the frontend (same-origin, so auth cookies just work)
   - Google OAuth login + demo-login fallback
   - Community safety reports (JSON file persistence)
   - Tourism trends dashboard data
   - Currency / weather / translate proxies with safety
   - Security headers, rate limiting, request logging, limits
========================================================= */

const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const config = require("./config");

const PORT = config.port;
const FRONTEND_DIR = path.join(__dirname, "..", "frontend");
const DATA_DIR = path.join(__dirname, "data");
const REPORTS_FILE = path.join(DATA_DIR, "reports.json");
const TRENDS_FILE = path.join(DATA_DIR, "trends.json");
const FAIRPRICES_FILE = path.join(DATA_DIR, "fairprices.json");
const SESSION_COOKIE = "yk_session";
const STATE_COOKIE = "yk_oauth_state";

// ---------------------------------------------------------
// Session + rate-limit stores
// ---------------------------------------------------------

const sessions = new Map();
const rateBuckets = new Map();

function cleanupSessions() {
    const now = Date.now();
    sessions.forEach(function(session, token) {
        if (session.expiresAt <= now) sessions.delete(token);
    });
}

setInterval(cleanupSessions, 60 * 60 * 1000); // hourly

// ---------------------------------------------------------
// Small helpers
// ---------------------------------------------------------

function sendJSON(res, status, data) {
    const body = JSON.stringify(data);
    res.writeHead(status, {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store"
    });
    res.end(body);
}

function sendError(res, status, message, code) {
    sendJSON(res, status, {
        success: false,
        error: code || "error",
        message: message
    });
}

function readBody(req, limit) {
    return new Promise(function(resolve, reject) {
        let size = 0;
        const chunks = [];
        req.on("data", function(chunk) {
            size += chunk.length;
            if (size > limit) {
                reject(new Error("Body too large"));
                req.destroy();
                return;
            }
            chunks.push(chunk);
        });
        req.on("end", function() {
            try {
                const raw = Buffer.concat(chunks).toString("utf8");
                resolve(raw ? JSON.parse(raw) : {});
            } catch (err) {
                reject(new Error("Invalid JSON"));
            }
        });
        req.on("error", function(err) {
            reject(err);
        });
    });
}

function parseCookies(req) {
    const header = req.headers.cookie || "";
    const out = {};
    header.split(";").forEach(function(pair) {
        const eq = pair.indexOf("=");
        if (eq === -1) return;
        const key = pair.slice(0, eq).trim();
        const value = pair.slice(eq + 1).trim();
        if (key) out[key] = decodeURIComponent(value);
    });
    return out;
}

function cookieString(name, value, options) {
    const parts = [name + "=" + encodeURIComponent(value)];
    if (options.httpOnly) parts.push("HttpOnly");
    if (options.sameSite) parts.push("SameSite=" + options.sameSite);
    if (options.secure) parts.push("Secure");
    if (options.maxAge != null) parts.push("Max-Age=" + options.maxAge);
    parts.push("Path=/");
    return parts.join("; ");
}

function secureCookies() {
    return (
        config.googleClientId.length > 0 &&
        typeof window === "undefined" &&
        process.env.NODE_ENV === "production"
    );
}

function createSession(profile) {
    const token = crypto.randomBytes(32).toString("hex");
    sessions.set(token, {
        profile: profile,
        createdAt: Date.now(),
        expiresAt: Date.now() + config.sessionTtlMs
    });
    return token;
}

function getSession(token) {
    if (!token) return null;
    const session = sessions.get(token);
    if (!session) return null;
    if (session.expiresAt <= Date.now()) {
        sessions.delete(token);
        return null;
    }
    return session;
}

// ---------------------------------------------------------
// Rate limiting (simple in-memory, per IP + route)
// ---------------------------------------------------------

function rateLimit(req, limit, windowMs) {
    const ip =
        req.socket.remoteAddress ||
        req.headers["x-forwarded-for"] ||
        "unknown";
    const key = ip + "|" + req.url.split("?")[0];
    const now = Date.now();
    const bucket = rateBuckets.get(key) || { count: 0, resetAt: now + windowMs };

    if (bucket.resetAt <= now) {
        bucket.count = 0;
        bucket.resetAt = now + windowMs;
    }
    bucket.count += 1;
    rateBuckets.set(key, bucket);

    if (bucket.count > limit) {
        // Trim occasionally
        if (rateBuckets.size > 5000) rateBuckets.clear();
        return false;
    }
    return true;
}

// ---------------------------------------------------------
// Request logging
// ---------------------------------------------------------

function logRequest(req, status) {
    const ip = req.socket.remoteAddress || "-";
    const date = new Date().toISOString();
    console.log(
        "[" + date + "] " +
        ip + " " +
        req.method + " " +
        req.url + " -> " + status
    );
}

// ---------------------------------------------------------
// Security headers
// ---------------------------------------------------------

const securityHeaders = {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "Content-Security-Policy":
        "default-src 'self'; " +
        "img-src 'self' data: " +
        "https://commons.wikimedia.org https://upload.wikimedia.org " +
        "https://images.unsplash.com https://via.placeholder.com " +
        "https://unpkg.com " +
        "https://*.basemaps.cartocdn.com https://*.tile.openstreetmap.org; " +
        "script-src 'self' 'unsafe-inline' https://unpkg.com; " +
        "style-src 'self' 'unsafe-inline' https://unpkg.com https://fonts.googleapis.com; " +
        "font-src 'self' https://fonts.gstatic.com data:; " +
        "connect-src 'self' http://localhost:5000 https://open.er-api.com; " +
        "frame-ancestors 'none'"
};

function applySecurityHeaders(res) {
    Object.keys(securityHeaders).forEach(function(key) {
        res.setHeader(key, securityHeaders[key]);
    });
}

// ---------------------------------------------------------
// Static file serving (frontend, same-origin)
// ---------------------------------------------------------

const MIME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2"
};

function serveStatic(req, res) {
    const urlPath = decodeURIComponent(
        (req.url.split("?")[0] || "/")
    );

    const requested =
        urlPath === "/"
            ? path.join(FRONTEND_DIR, "index.html")
            : path.join(FRONTEND_DIR, urlPath);

    // Path traversal protection: resolved path must stay inside FRONTEND_DIR
    const resolved = path.normalize(requested);
    if (!resolved.startsWith(FRONTEND_DIR)) {
        return sendError(res, 403, "Forbidden", "forbidden");
    }

    fs.readFile(resolved, function(err, data) {
        if (err) {
            if (err.code === "ENOENT") {
                return sendError(res, 404, "Not found", "not_found");
            }
            return sendError(res, 500, "Internal error", "internal");
        }

        const ext = path.extname(resolved).toLowerCase();
        const isHtml = ext === ".html";
        res.writeHead(200, {
            "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
            "Cache-Control": isHtml ? "no-cache" : "public, max-age=3600"
        });
        res.end(data);
    });
}

// ---------------------------------------------------------
// Google OAuth
// ---------------------------------------------------------

function getGoogleAuthUrl(state) {
    const params = new URLSearchParams({
        client_id: config.googleClientId,
        redirect_uri: config.googleRedirectUri,
        response_type: "code",
        scope: "openid email profile",
        state: state,
        prompt: "select_account",
        access_type: "online"
    });
    return "https://accounts.google.com/o/oauth2/v2/auth?" + params.toString();
}

function exchangeGoogleCode(code) {
    return fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            code: code,
            client_id: config.googleClientId,
            client_secret: config.googleClientSecret,
            redirect_uri: config.googleRedirectUri,
            grant_type: "authorization_code"
        }).toString()
    }).then(function(res) {
        return res.json();
    });
}

function fetchGoogleProfile(accessToken) {
    return fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: "Bearer " + accessToken } }
    ).then(function(res) {
        return res.json();
    });
}

async function handleGoogleCallback(req, res, url) {
    if (!config.googleClientId) {
        return sendError(
            res,
            503,
            "Google login not configured. Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in backend/.env",
            "not_configured"
        );
    }

    const cookies = parseCookies(req);
    const returnedState = url.searchParams.get("state");
    const code = url.searchParams.get("code");
    const error = url.searchParams.get("error");

    if (error) {
        return sendError(res, 400, "Google sign-in failed: " + error, "oauth_error");
    }

    if (!code || !returnedState) {
        return sendError(res, 400, "Missing code or state", "bad_request");
    }

    // CSRF protection: state must match the one we set
    if (!cookies[STATE_COOKIE] || returnedState !== cookies[STATE_COOKIE]) {
        return sendError(res, 400, "State mismatch", "csrf");
    }

    const tokenData = await exchangeGoogleCode(code);

    if (tokenData.error || !tokenData.access_token) {
        return sendError(
            res,
            400,
            "Token exchange failed: " + (tokenData.error || "unknown"),
            "oauth_token"
        );
    }

    const profile = await fetchGoogleProfile(tokenData.access_token);

    if (!profile || profile.email_verified !== true) {
        return sendError(res, 400, "Google profile verification failed", "oauth_profile");
    }

    if (profile.aud && config.googleClientId && profile.aud !== config.googleClientId) {
        return sendError(res, 400, "Audience mismatch", "oauth_aud");
    }

    const sessionToken = createSession({
        id: profile.sub,
        name: profile.name || profile.email || "Traveler",
        email: profile.email || "",
        picture: profile.picture || "",
        provider: "google"
    });

    res.writeHead(302, {
        Location: "/",
        "Set-Cookie": cookieString(SESSION_COOKIE, sessionToken, {
            httpOnly: true,
            sameSite: "Lax",
            secure: secureCookies(),
            maxAge: Math.floor(config.sessionTtlMs / 1000)
        }) + ", " + cookieString(STATE_COOKIE, "", {
            httpOnly: true,
            sameSite: "Lax",
            maxAge: 0
        })
    });
    res.end();
}

// ---------------------------------------------------------
// Reports (community safety)
// ---------------------------------------------------------

function loadReports() {
    try {
        const raw = fs.readFileSync(REPORTS_FILE, "utf8");
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed.reports) ? parsed.reports : [];
    } catch (err) {
        return [];
    }
}

function saveReports(reports) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(
        REPORTS_FILE,
        JSON.stringify({ reports: reports }, null, 4),
        "utf8"
    );
}

const REPORT_CATEGORIES = ["scam", "harassment", "theft", "info", "price", "guide", "crowd"];
const REPORT_SEVERITIES = ["low", "medium", "high"];

function validateReport(body) {
    if (!body) return "Missing report data";
    if (!body.place || typeof body.place !== "string") return "Place is required";
    if (REPORT_CATEGORIES.indexOf(body.category) === -1) return "Invalid category";
    if (REPORT_SEVERITIES.indexOf(body.severity) === -1) return "Invalid severity";
    if (body.title && body.title.length > 120) return "Title too long";
    if (body.description && body.description.length > 800) return "Description too long";
    if (
        typeof body.lat !== "number" || isNaN(body.lat) ||
        body.lat < 26 || body.lat > 31
    ) return "Invalid latitude";
    if (
        typeof body.lng !== "number" || isNaN(body.lng) ||
        body.lng < 80 || body.lng > 89
    ) return "Invalid longitude";
    return null;
}

// ---------------------------------------------------------
// Trends
// ---------------------------------------------------------

function loadTrends() {
    try {
        return JSON.parse(fs.readFileSync(TRENDS_FILE, "utf8"));
    } catch (err) {
        return null;
    }
}

// ---------------------------------------------------------
// Fair prices
// ---------------------------------------------------------

function loadFairPrices() {
    try {
        return JSON.parse(fs.readFileSync(FAIRPRICES_FILE, "utf8"));
    } catch (err) {
        return null;
    }
}

// ---------------------------------------------------------
// API proxies (currency / weather / translate)
// ---------------------------------------------------------

async function fetchWithTimeout(url, options, timeoutMs) {
    const controller = new AbortController();
    const timer = setTimeout(function() {
        controller.abort();
    }, timeoutMs || 10000);

    try {
        const response = await fetch(url, Object.assign({}, options, {
            signal: controller.signal
        }));
        clearTimeout(timer);
        return response;
    } catch (err) {
        clearTimeout(timer);
        throw err;
    }
}

// ---------------------------------------------------------
// Router
// ---------------------------------------------------------

const server = http.createServer(async function(req, res) {
    const startedAt = Date.now();
    applySecurityHeaders(res);

    // Friendly CORS for direct file:// dev usage
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }

    try {
        const url = new URL(req.url, "http://localhost:" + PORT);
        const pathname = url.pathname;

        // Health
        if (req.method === "GET" && pathname === "/api/health") {
            sendJSON(res, 200, {
                success: true,
                status: "ok",
                time: new Date().toISOString(),
                uptimeSeconds: Math.floor(process.uptime()),
                auth: config.googleClientId ? "google" : "demo-only",
                sessions: sessions.size
            });
            return logRequest(req, 200);
        }

        // -------------------------------------------------
        // AUTH
        // -------------------------------------------------

        // Start Google OAuth
        if (req.method === "GET" && pathname === "/api/auth/google") {
            if (!config.googleClientId) {
                return sendError(res, 503, "Google login not configured", "not_configured");
            }
            const state = crypto.randomBytes(24).toString("hex");
            const location = getGoogleAuthUrl(state);
            res.writeHead(302, {
                Location: location,
                "Set-Cookie": cookieString(STATE_COOKIE, state, {
                    httpOnly: true,
                    sameSite: "Lax",
                    secure: secureCookies(),
                    maxAge: 600
                })
            });
            res.end();
            return logRequest(req, 302);
        }

        // Google OAuth callback
        if (req.method === "GET" && pathname === "/api/auth/google/callback") {
            if (!rateLimit(req, 30, 60 * 1000)) {
                return sendError(res, 429, "Too many requests", "rate_limited");
            }
            await handleGoogleCallback(req, res, url);
            return logRequest(req, res.statusCode || 200);
        }

        // Demo login (fallback so the demo always works)
        if (req.method === "POST" && pathname === "/api/auth/demo") {
            if (!config.allowDemoLogin) {
                return sendError(res, 403, "Demo login disabled", "forbidden");
            }
            if (!rateLimit(req, 10, 60 * 1000)) {
                return sendError(res, 429, "Too many requests", "rate_limited");
            }
            const sessionToken = createSession({
                id: "demo-" + crypto.randomBytes(6).toString("hex"),
                name: "Demo Traveler",
                email: "demo@yatrakhoj.local",
                picture: "",
                provider: "demo"
            });
            res.writeHead(200, {
                "Content-Type": "application/json; charset=utf-8",
                "Set-Cookie": cookieString(SESSION_COOKIE, sessionToken, {
                    httpOnly: true,
                    sameSite: "Lax",
                    secure: secureCookies(),
                    maxAge: Math.floor(config.sessionTtlMs / 1000)
                })
            });
            res.end(JSON.stringify({ success: true }));
            return logRequest(req, 200);
        }

        // Current user
        if (req.method === "GET" && pathname === "/api/auth/me") {
            const cookies = parseCookies(req);
            const session = getSession(cookies[SESSION_COOKIE]);
            if (!session) {
                return sendError(res, 401, "Not signed in", "unauthorized");
            }
            sendJSON(res, 200, {
                success: true,
                user: session.profile,
                expiresAt: session.expiresAt
            });
            return logRequest(req, 200);
        }

        // Logout
        if (req.method === "POST" && pathname === "/api/auth/logout") {
            const cookies = parseCookies(req);
            sessions.delete(cookies[SESSION_COOKIE]);
            res.writeHead(200, {
                "Content-Type": "application/json; charset=utf-8",
                "Set-Cookie": cookieString(SESSION_COOKIE, "", {
                    httpOnly: true,
                    sameSite: "Lax",
                    secure: secureCookies(),
                    maxAge: 0
                })
            });
            res.end(JSON.stringify({ success: true }));
            return logRequest(req, 200);
        }

        // -------------------------------------------------
        // REPORTS
        // -------------------------------------------------

        if (pathname === "/api/reports") {
            if (req.method === "GET") {
                if (!rateLimit(req, 60, 60 * 1000)) {
                    return sendError(res, 429, "Too many requests", "rate_limited");
                }
                let reports = loadReports();
                const placeFilter = url.searchParams.get("place");
                if (placeFilter) {
                    reports = reports.filter(function(r) {
                        return r.place === placeFilter;
                    });
                }
                sendJSON(res, 200, { success: true, reports: reports });
                return logRequest(req, 200);
            }

            if (req.method === "POST") {
                if (!rateLimit(req, 10, 60 * 1000)) {
                    return sendError(res, 429, "Too many requests", "rate_limited");
                }
                const body = await readBody(req, config.bodyLimitBytes);
                const validationError = validateReport(body);
                if (validationError) {
                    return sendError(res, 400, validationError, "validation");
                }

                const reports = loadReports();
                const report = {
                    id: "r-" + Date.now() + "-" + crypto.randomBytes(4).toString("hex"),
                    place: String(body.place),
                    lat: Number(body.lat),
                    lng: Number(body.lng),
                    category: String(body.category),
                    severity: String(body.severity),
                    title: String(body.title || "").slice(0, 120),
                    description: String(body.description || "").slice(0, 800),
                    time: new Date().toISOString(),
                    source: "user"
                };
                reports.unshift(report);
                saveReports(reports);

                sendJSON(res, 201, { success: true, report: report });
                return logRequest(req, 201);
            }
        }

        // -------------------------------------------------
        // TRENDS
        // -------------------------------------------------

        if (req.method === "GET" && pathname === "/api/trends") {
            const trends = loadTrends();
            if (!trends) {
                return sendError(res, 500, "Trends data unavailable", "internal");
            }
            sendJSON(res, 200, { success: true, trends: trends });
            return logRequest(req, 200);
        }

        // -------------------------------------------------
        // FAIR PRICES
        // -------------------------------------------------

        if (req.method === "GET" && pathname === "/api/fairprices") {
            if (!rateLimit(req, 60, 60 * 1000)) {
                return sendError(res, 429, "Too many requests", "rate_limited");
            }
            const fairprices = loadFairPrices();
            if (!fairprices) {
                return sendError(res, 500, "Fair-prices data unavailable", "internal");
            }
            sendJSON(res, 200, { success: true, fairprices: fairprices });
            return logRequest(req, 200);
        }

        // -------------------------------------------------
        // CURRENCY
        // -------------------------------------------------

        if (req.method === "GET" && pathname === "/api/currency") {
            if (!rateLimit(req, 60, 60 * 1000)) {
                return sendError(res, 429, "Too many requests", "rate_limited");
            }
            const from = (url.searchParams.get("from") || "USD").toUpperCase();
            const to = (url.searchParams.get("to") || "NPR").toUpperCase();
            const amount = Number(url.searchParams.get("amount") || 1);

            if (isNaN(amount) || amount < 0) {
                return sendError(res, 400, "Invalid amount", "validation");
            }

            const response = await fetchWithTimeout(
                "https://open.er-api.com/v6/latest/" + from
            );
            const data = await response.json();

            if (data.result !== "success" || !data.rates || !data.rates[to]) {
                return sendError(res, 400, "Currency not supported", "currency_error");
            }

            sendJSON(res, 200, {
                success: true,
                from: from,
                to: to,
                amount: amount,
                rate: data.rates[to],
                convertedAmount: Number((amount * data.rates[to]).toFixed(2))
            });
            return logRequest(req, 200);
        }

        // -------------------------------------------------
        // WEATHER
        // -------------------------------------------------

        if (req.method === "GET" && pathname === "/api/weather") {
            if (!rateLimit(req, 60, 60 * 1000)) {
                return sendError(res, 429, "Too many requests", "rate_limited");
            }
            const place = url.searchParams.get("place");
            if (!place) {
                return sendError(res, 400, "Please provide a place", "validation");
            }

            const geoResponse = await fetchWithTimeout(
                "https://geocoding-api.open-meteo.com/v1/search?name=" +
                encodeURIComponent(place) +
                "&count=1&language=en&format=json"
            );
            const geoData = await geoResponse.json();

            if (!geoData.results || geoData.results.length === 0) {
                return sendError(res, 404, "Place not found", "not_found");
            }

            const location = geoData.results[0];
            const weatherResponse = await fetchWithTimeout(
                "https://api.open-meteo.com/v1/forecast?latitude=" +
                location.latitude +
                "&longitude=" +
                location.longitude +
                "&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m&timezone=auto"
            );
            const weatherData = await weatherResponse.json();

            sendJSON(res, 200, {
                success: true,
                place: location.name,
                country: location.country,
                latitude: location.latitude,
                longitude: location.longitude,
                temperature: weatherData.current.temperature_2m,
                feelsLike: weatherData.current.apparent_temperature,
                humidity: weatherData.current.relative_humidity_2m,
                precipitation: weatherData.current.precipitation,
                windSpeed: weatherData.current.wind_speed_10m
            });
            return logRequest(req, 200);
        }

        // -------------------------------------------------
        // TRANSLATE
        // -------------------------------------------------

        if (req.method === "POST" && pathname === "/api/translate") {
            if (!rateLimit(req, 30, 60 * 1000)) {
                return sendError(res, 429, "Too many requests", "rate_limited");
            }
            const body = await readBody(req, config.bodyLimitBytes);
            const text = body.text;
            const from = body.from || "en";
            const to = body.to || "ne";

            if (!text || typeof text !== "string") {
                return sendError(res, 400, "Text is required", "validation");
            }

            const response = await fetchWithTimeout(
                "https://api.mymemory.translated.net/get?q=" +
                encodeURIComponent(text) +
                "&langpair=" +
                encodeURIComponent(from + "|" + to)
            );
            const translationData = await response.json();

            sendJSON(res, 200, {
                success: true,
                original: text,
                translated: translationData.responseData.translatedText
            });
            return logRequest(req, 200);
        }

        // -------------------------------------------------
        // Static frontend (any other GET)
        // -------------------------------------------------

        if (req.method === "GET") {
            return serveStatic(req, res);
        }

        return sendError(res, 404, "Route not found", "not_found");
    } catch (err) {
        console.log("Unhandled error:", err);
        const status = err && err.message === "Body too large" ? 413 : 500;
        if (!res.headersSent) {
            sendError(res, status, err.message || "Internal error", "internal");
        } else {
            res.end();
        }
    }

    const elapsed = Date.now() - startedAt;
    if (elapsed > 500) {
        console.log("Slow request (" + elapsed + "ms): " + req.method + " " + req.url);
    }
});

server.listen(PORT, function() {
    console.log("");
    console.log("==============================================");
    console.log("  YatraKhoj  •  Find Hidden. Go Local.");
    console.log("  Serving the full app at:");
    console.log("  http://localhost:" + PORT);
    console.log("  Auth: " + (config.googleClientId ? "Google OAuth" : "demo-login only"));
    console.log("  To enable Google login, set GOOGLE_CLIENT_ID");
    console.log("  and GOOGLE_CLIENT_SECRET in backend/.env");
    console.log("==============================================");
    console.log("");
});
