!function(){"use strict";const e=1607484933870,t="cache"+e,n=["/client/client.3b053bff.js","/client/inject_styles.5607aec6.js","/client/client.fa474e29.js","/client/index.63072fe1.js","/client/markmap.04b287f1.js","/client/footer.b4f7e5fc.js","/client/usage.8953bb5e.js","/client/docs.3471345f.js","/client/full.a38500d7.js","/client/loader.825105c1.js","/client/repl.e96e6b7b.js","/client/buttons.esm.87b24c20.js","/client/codemirror.a5d68b96.js"].concat(["/service-worker-index.html","/donate/alipay.svg","/donate/paypal.svg","/donate/qr_alipay.png","/donate/qr_wechat.png","/donate/wechat.svg","/favicon.png","/logo-192.png","/logo-512.png","/manifest.json","/style.css"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&s.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const n=await fetch(t.request);return e.put(t.request,n.clone()),n}catch(n){const s=await e.match(t.request);if(s)return s;throw n}})))))}))}();
