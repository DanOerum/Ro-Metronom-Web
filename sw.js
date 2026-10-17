// A changed cache name forces installed iPhone webapps to adopt version 2.0.
const CACHE='ro-metronom-v2-20261017';
const STATIC=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(STATIC)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(names=>Promise.all(names.filter(name=>name!==CACHE && /^rometronom-|^ro-metronom-/.test(name)).map(name=>caches.delete(name)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin) return;
  // Prefer the server for updated app code, but work offline via the local cache.
  event.respondWith(fetch(event.request).then(response=>{
    if(response.ok) {const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy)).catch(()=>{});}
    return response;
  }).catch(()=>caches.match(event.request)));
});
