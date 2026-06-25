// SERVICE WORKER - YussXy Store (Tanpa offline.html)
var CACHE_NAME = 'yussxy-store-v2';
var urlsToCache = [
  '/Store-Yuss/',
  '/Store-Yuss/index.html',
  '/Store-Yuss/yuss.html',
  '/Store-Yuss/yuss.js',
  '/Store-Yuss/style.css',
  '/Store-Yuss/script.js',
  '/Store-Yuss/carabuy.html',
  '/Store-Yuss/manifest.json',
  '/Store-Yuss/versi.js',
  '/Store-Yuss/testi.js',
  '/Store-Yuss/klmn.js',
  '/Store-Yuss/close.js',
  '/Store-Yuss/music.js',
  '/Store-Yuss/ai/ai.html',
  '/Store-Yuss/ai/ai.css',
  '/Store-Yuss/ai/ai.js',
  '/Store-Yuss/musik/musik.html',
  'https://files.catbox.moe/s6tjs1.jpg',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
  'https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css'
];

// Install Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Fetch - ambil dari cache jika offline, TANPA redirect ke offline.html
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        // Jika tidak ada di cache, coba fetch dari network
        return fetch(event.request).catch(function(error) {
          console.log('Fetch failed:', error);
          // Kembalikan response kosong, biarkan halaman tetap jalan dengan data localStorage
          return new Response(null, { status: 200, statusText: 'OK' });
        });
      })
  );
});

// Activate - hapus cache lama
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
