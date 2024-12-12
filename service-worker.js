self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
            '/',
            '/index.html',
            '/timeline.html',
            '/weather.html',
            '/mypage.html',
            '/base.css', 
            '/index.css' ,// 必要なCSSファイルもキャッシュに追加
            '/weather.css' ,
            '/timeline.css',
            '/mypage.css',
            '/index.js',
            '/PartNERS-icon-final.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
  });