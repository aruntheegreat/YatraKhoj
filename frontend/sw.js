/* YatraKhoj offline mode
   Network-first with cache fallback: keeps the app shell and the last
   API data available when the signal runs out on the trail. */

const CACHE = "yatra-khoj-v2";
const CORE = ["./", "index.html", "script.js", "places.js", "style.css"];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE)
            .then((cache) => cache.addAll(CORE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    const request = event.request;

    if (request.method !== "GET") {
        return;
    }

    const url = new URL(request.url);

    if (url.origin !== self.location.origin) {
        return;
    }

    if (url.pathname.startsWith("/api/")) {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const copy = response.clone();
                    caches.open(CACHE).then((cache) => cache.put(request, copy));
                    return response;
                })
                .catch(() =>
                    caches.match(request).then((match) => match || Response.error())
                )
        );
        return;
    }

    event.respondWith(
        fetch(request)
            .then((response) => {
                const copy = response.clone();
                caches.open(CACHE).then((cache) => cache.put(request, copy));
                return response;
            })
            .catch(() =>
                caches.match(request).then((match) =>
                    match || (request.mode === "navigate" ? caches.match("./") : Response.error())
                )
            )
    );
});
