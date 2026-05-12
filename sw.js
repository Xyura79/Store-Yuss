// GANTI INI SESUAI DENGAN FOLDER REPO GITHUB KAMU
var CACHE_NAME = 'yussxy-store-v1';
var urlsToCache = [
  '/Store-Yuss/',
  '/Store-Yuss/index.html',
  '/Store-Yuss/style.css',
  '/Store-Yuss/script.js',
  '/Store-Yuss/carabuy.html',
  '/Store-Yuss/manifest.json',
  'https://files.catbox.moe/s6tjs1.jpg',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
  'https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css'
];

// Install Service Worker - cache file penting
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch - ambil dari cache kalau offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
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
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
