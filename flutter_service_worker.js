'use strict';

// Old browsers still check this URL for updates to Flutter's previous worker.
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.registration.unregister());
});
