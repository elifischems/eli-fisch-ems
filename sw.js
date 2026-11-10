var C="efe-shell-v1",FILES=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(FILES)}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!=C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){var r=e.request;if(r.method!="GET")return;var u=new URL(r.url);
 if(u.origin==location.origin){e.respondWith(caches.match(r,{ignoreSearch:true}).then(function(m){var n=fetch(r).then(function(x){if(x&&x.ok){var y=x.clone();caches.open(C).then(function(c){c.put(r,y)})}return x}).catch(function(){return m});return m||n}));return}
 if(u.hostname.indexOf("fonts.g")==0){e.respondWith(caches.open(C).then(function(c){return c.match(r).then(function(m){return m||fetch(r).then(function(x){c.put(r,x.clone());return x}).catch(function(){return m})})}))}});
