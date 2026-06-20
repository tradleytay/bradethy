//  Bradethy PWA Service Worker
const CACHE_NAME = 'bradethy-v1';

// Cache app shell + important static assets
// NOTE: Keep this list in sync with your site pages/assets.
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/contact.html',
  '/products.html',
  '/cart-quote.html',
  '/cart-quote.html',

  '/privacy-policy.html',
  '/terms-of-service.html',
  '/shipping-policy.html',
  '/return-policy.html',
  '/refund-policy.html',
  '/TODO.md',

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

  '/favicon.ico'
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
        })
      );
    })
  );
  self.clients.claim();
});

// Network-first for dynamic content (products, cart)
// Offline-first-ish: try cache for navigations, otherwise fall back.
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle GET requests
  if (req.method !== 'GET') return;

  // For document navigations, use cache-first.
  if (req.destination === 'document' || req.headers.get('accept')?.includes('text/html')) {

    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;

        return fetch(req)
          .then((response) => {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, responseClone));
            return response;
          })
          .catch(() => caches.match('/index.html'));
      })
    );
    return;
  }

  // For everything else: network-first with cache fallback.
  event.respondWith(
    fetch(req)
      .then((response) => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, responseClone));
        return response;
      })
      .catch(() => caches.match(req).then((cachedResponse) => cachedResponse))
  );
});


