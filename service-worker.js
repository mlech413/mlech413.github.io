"use strict";var precacheConfig=[["/index.html","2110ce2a0e180f659a24a2b818312fad"],["/static/css/main.43ed5774.css","7a28e1731f8993960f1c313a229bd0dd"],["/static/js/main.6448d5cf.js","d31dd69bf4f7e4e70570bd8092f1e1ec"],["/static/media/AmeriGuide.485f00f1.jpg","485f00f1bf4ac252bf13b926c44f63fb"],["/static/media/NFLevate.173617fd.jpg","173617fd9e339fb8ec6ffc5387b8af31"],["/static/media/around-the-world.43d662ad.jpg","43d662adacf59af669caffe7253e3669"],["/static/media/avatar.5e1bb725.jpg","5e1bb7254ad839130c500910f9cb9a9b"],["/static/media/bamazon.f9a5e96a.jpg","f9a5e96af1a67655ce759b980c92d92e"],["/static/media/bamazond-cli.8bfa3c08.gif","8bfa3c08cfbb83b29551d4d8d09034f9"],["/static/media/clicky-game.80f6ddb0.jpg","80f6ddb018bb2e0a24a6f4ff857ffef1"],["/static/media/crystal-collector.7a8c3a1e.jpg","7a8c3a1ef2d2093eb49e19f267392256"],["/static/media/eat-da-burger.0100280a.jpg","0100280ad4f9f014a68ec2c049a4a331"],["/static/media/friend-finder.edd54703.jpg","edd54703e85b2da67b57265df3caa2d0"],["/static/media/liri-node-app.d881a0b7.gif","d881a0b720291c9c2bf30dce5e22709c"],["/static/media/mongo-scraper.6f2cc627.jpg","6f2cc6273583dc89751a53681c42c027"],["/static/media/splash.25cc9eca.jpg","25cc9ecac9909d9b3e371452e6cc737d"],["/static/media/train-scheduler.d5c08a8f.jpg","d5c08a8f5a80d86101fbe0b6f2f6693d"],["/static/media/trivia-game.7f8a183b.jpg","7f8a183b12258e291e78bb1fafa20703"],["/static/media/word-guess.fcec03b6.jpg","fcec03b64cd49130be07bb2c5ec9bf99"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});