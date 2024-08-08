self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('B.Y-PRO-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/Style.css',
                '/script.js',  // أضف ملف script.js للكاش
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
                // أضف باقي الملفات المهمة
            ]);
        })
    );
});
