"use strict";var precacheConfig=[["/index.html","d88c6d4fd450777d9b40a1dbfbc18b28"],["/static/css/main.ee50f7ac.css","dce5951e7eb7bc2bea386101afc576a9"],["/static/js/main.ac752613.js","e4c57023c355c0b50014402116e929c6"],["/static/media/AmeriGuide.485f00f1.jpg","485f00f1bf4ac252bf13b926c44f63fb"],["/static/media/NFLevate.173617fd.jpg","173617fd9e339fb8ec6ffc5387b8af31"],["/static/media/ajax.1f32cda1.png","1f32cda1bb19f4cfbed97a8a503d302e"],["/static/media/around-the-world.43d662ad.jpg","43d662adacf59af669caffe7253e3669"],["/static/media/avatar.5e1bb725.jpg","5e1bb7254ad839130c500910f9cb9a9b"],["/static/media/bamazon.f9a5e96a.jpg","f9a5e96af1a67655ce759b980c92d92e"],["/static/media/bamazond-cli.8bfa3c08.gif","8bfa3c08cfbb83b29551d4d8d09034f9"],["/static/media/bootstrap.a619312a.png","a619312a5da4c842a992d43f4d2f487a"],["/static/media/clicky-game.80f6ddb0.jpg","80f6ddb018bb2e0a24a6f4ff857ffef1"],["/static/media/computer.983ddf76.jpg","983ddf76ab6d4215952286f5aa4f5b97"],["/static/media/crystal-collector.7a8c3a1e.jpg","7a8c3a1ef2d2093eb49e19f267392256"],["/static/media/eat-da-burger.0100280a.jpg","0100280ad4f9f014a68ec2c049a4a331"],["/static/media/express.f3273710.png","f3273710b4c6ba1f324346a15c1e8968"],["/static/media/firebase.572d321d.png","572d321d389b0e3767fa92609c1dd902"],["/static/media/friend-finder.edd54703.jpg","edd54703e85b2da67b57265df3caa2d0"],["/static/media/git.ff7fb7ec.png","ff7fb7ecacdbc2b877458065baf177fb"],["/static/media/heroku.ba7c2761.png","ba7c276167bd0d048bd883a38270b669"],["/static/media/keyboard_med.0e1222d7.jpg","0e1222d745e2754ed0397589e2cdc453"],["/static/media/liri-node-app.d881a0b7.gif","d881a0b720291c9c2bf30dce5e22709c"],["/static/media/mongo-scraper.6f2cc627.jpg","6f2cc6273583dc89751a53681c42c027"],["/static/media/mvc.f1584847.png","f158484775e4ab8e0b01fb1f9002867a"],["/static/media/mysql.3047cbac.png","3047cbac46d74b2a49f2fe4b1d1eb4b9"],["/static/media/node.994e062d.png","994e062d7f8304f1b0c412cbf8351e59"],["/static/media/phone_face.44a75af6.jpg","44a75af687c6f79c69f39f96d2584d1b"],["/static/media/responsive-design.148d744b.png","148d744b319b705d3602d8997f445d1a"],["/static/media/restful_api.8cd66a17.png","8cd66a1792b5ead358e527bf9bc78db3"],["/static/media/sequelize.8ec1405a.png","8ec1405a01216ce482496823639e8c9d"],["/static/media/splash.c4772f31.jpg","c4772f3102d26a4ef70a3912b4c3635f"],["/static/media/sql.a8b695ca.png","a8b695ca35bdeda089cfc9eaebb7fba8"],["/static/media/train-scheduler.d5c08a8f.jpg","d5c08a8f5a80d86101fbe0b6f2f6693d"],["/static/media/trivia-game.7f8a183b.jpg","7f8a183b12258e291e78bb1fafa20703"],["/static/media/word-guess.fcec03b6.jpg","fcec03b64cd49130be07bb2c5ec9bf99"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});