// Bradethy PWA Service Worker
const CACHE_VERSION = 2;
const CACHE_NAME = `bradethy-v${CACHE_VERSION}`;

// Cache app shell + important static assets
// NOTE: Keep this list in sync with your site pages/assets.
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/contact.html',
  '/products.html',
  '/cart-quote.html',

  '/privacy-policy.html',
  '/terms-of-service.html',
  '/shipping-policy.html',
  '/return-policy.html',
  '/refund-policy.html',

  '/css/base.css',
  '/css/styles.css',
  '/css/contact.css',

  '/js/app.js',
  '/js/quote-storage.js',
  '/js/quote.js',
  '/js/cart-quote.js',

  '/manifest.json',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/shampoo.svg',
  '/images/back.png',
  '/images/bg.png',

  '/favicon.ico',
  '/offline.html'
];


self.addEventListener('message', (event) => {
  // Allow pages to force an update
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('PWA: Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  // Activate new SW as soon as it's finished installing
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('PWA: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
          return null;
        })
      );
    })
  );
  // Take control of uncontrolled clients immediately
  self.clients.claim();
});

// Helper: try cache first, then network; update cache in background
async function cacheFirstThenUpdate(req) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(req);
  const networkFetch = fetch(req)
    .then((res) => {
      if (res && res.status === 200) cache.put(req, res.clone());
      return res;
    })
    .catch(() => null);

  return cached || networkFetch;
}

// Fetch handler with simple routing by request type
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle GET requests
  if (req.method !== 'GET') return;

  // Navigation requests (HTML) -> try network first, fallback to cache then offline page
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          // Put a copy in cache for offline use
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(async () => {
          const cached = await caches.match(req);
          if (cached) return cached;
          return caches.match('/offline.html');
        })
    );
    return;
  }

  // Static assets (CSS/JS/images/fonts): cache-first with background update
  if (req.destination === 'style' || req.destination === 'script' || req.destination === 'image' || req.destination === 'font') {
    event.respondWith(cacheFirstThenUpdate(req));
    return;
  }

  // Default: try network, fall back to cache
  event.respondWith(
    fetch(req)
      .then((res) => {
        // Cache dynamic responses if OK
        if (res && res.status === 200 && req.url.startsWith(self.location.origin)) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req))
  );
});


