if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const o=e=>a(e,d),c={module:{uri:d},exports:s,require:o};i[d]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),s)))}}define(["./workbox-e93575ef"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"07902b9ef6e2e20908341b543b61562a"},{url:"946.bundle.js",revision:"4534cfa14d56762370d73029e043aaae"},{url:"app~36296c82.bundle.js",revision:"586dc49ca4380af2a51301fbdfd94dd9"},{url:"app~4e5ec22b.bundle.js",revision:"9a99dd0bbcfab05b27dc48be76fc9323"},{url:"app~a51fa3f5.bundle.js",revision:"a4b6fae336e8362fc5d5e9e8f43d72be"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"654a432640530bbbe791d4db9f364021"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"a0d27d02dd53f6bd8721a9a5b897a44d"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"af809557dcf53b3dc2e4d9552bb291d8"},{url:"icons/icon-128x128.png",revision:"4d8729a911589efaa98e45d117d885dc"},{url:"icons/icon-144x144.png",revision:"4498b82b26eebab5f17d4d715500951d"},{url:"icons/icon-152x152.png",revision:"93dd1e3781aae1bc691c059df671485f"},{url:"icons/icon-192x192.png",revision:"af809557dcf53b3dc2e4d9552bb291d8"},{url:"icons/icon-384x384.png",revision:"433a773737d1a7f86d16af979757fc97"},{url:"icons/icon-512x512.png",revision:"c356e8b781def2625fb079b10277d038"},{url:"icons/icon-72x72.png",revision:"7335150481d9b3fc76ae874a47e360e7"},{url:"icons/icon-96x96.png",revision:"714ed2b6140f2a86e13fb4b90a483763"},{url:"images/heros/hero-image_4-large.jpg",revision:"3ecb0a066634d16704a66d53a8a5a321"},{url:"images/heros/hero-image_4-medium.jpg",revision:"ed303bef9049ec72423f9f91d11bcab3"},{url:"images/heros/hero-image_4-small.jpg",revision:"887649eaabc0fd95a400dae8a5b43286"},{url:"images/heros/hero-image_4.jpg",revision:"6b54b716fd78ef9325f8b86d7e5cd33e"},{url:"images/image-null.jpg",revision:"f52be47994a31a118bda48cf750e04db"},{url:"index.html",revision:"722e723ba894ab4e8a4e56e617230087"},{url:"manifest.json",revision:"f49487e8a30ec8e4c1884616f6cd41cc"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/large")),new e.StaleWhileRevalidate({cacheName:"restaurant-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
