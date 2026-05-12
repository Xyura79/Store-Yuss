const CACHE_NAME = 'yussxy-cache-v1';
const urlsToCache = [
  '/Store-Yuss/',
  '/Store-Yuss/index.html',
  '/Store-Yuss/carabuy.html',
  '/Store-Yuss/style.css',
  '/Store-Yuss/script.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
