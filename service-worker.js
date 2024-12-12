self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/index.js',
          '/timeline.html',
          '/weather.html',
          '/timeline.css',
          'weather.css',
          '/PartNERS-icon-final.png',
          '/app-icon.png',
          '/base.css',
          '/index.css',
          '/mypage.html',
          '/mypage.css'
          // 必要に応じて追加のリソースを追加
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  