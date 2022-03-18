const CACHE = 'cache-only-v1';

// При установке воркера мы должны закешировать часть данных (статику).
self.addEventListener('install', (event) => {
    console.log("Install");
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/meow/meow_waiting_5s.gif',
                '/meow/meow_waiting_10s.gif'
            ]);
        })
    );
});

// При запросе на сервер (событие fetch), используем только данные из кэша.
self.addEventListener('fetch', (event) => {
    console.log("fetch");
    event.respondWith(fromCache(event.request));
});

self.addEventListener('activate', evt => {
    console.log("activate");
});

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
      cache.match(request)
          .then((matching) => matching || Promise.reject('no-match'))
    );
}

