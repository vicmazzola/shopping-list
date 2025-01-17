// sw.js
const CACHE_NAME = 'shopping-list-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/img/favicon.png',
  '/img/bag2.jpg',
  '/js/script.js',
  '/js/addItems.js',
  '/js/checkBoughtList.js',
  '/js/createListItem.js',
  '/js/deleteItem.js',
  '/js/checkEmptyList.js',
  '/js/localStorageHandler.js',
  '/js/generateWeekday.js',
  '/js/editItem.js',
  '/js/checkBoughtList.js',
  '/manifest.json'
];

// Install event - caches the resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching resources');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serves cached content when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // If we have a cached response, return it, otherwise fetch it
        return cachedResponse || fetch(event.request);
      })
  );
});

// Activate event - cleans up old caches if needed
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
