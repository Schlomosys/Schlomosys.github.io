'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "15cf4f866b180cdcd52f729bb78c03bf",
"assets/assets/images/boxR.png": "f0c519aec33fac0b20fc27c66fb81cd6",
"assets/assets/images/msgBox.png": "69bbdc090e945e97e4d50aa8408332cc",
"assets/assets/images/roboHead.jpg": "9951da132b10dfefffdc3796dead2c6e",
"assets/assets/images/roboMatic.jpg": "5096c734502947662519a7152f5eadaa",
"assets/FontManifest.json": "51006b80882a9816b5c406f6ab78de6d",
"assets/fonts/goldman/Goldman-Bold.ttf": "74f6b4fefa4a726e098dd9eab0432638",
"assets/fonts/indieflower/IndieFlower-Regular.ttf": "0841af952c807bdf56455b1addb4c7df",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/pacifico/Pacifico-Regular.ttf": "9b94499ccea3bd82b24cb210733c4b5e",
"assets/fonts/roboto/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/images/c1.jpg": "f7f635cd48bd3932ee5cf5608c033e41",
"assets/images/c2.jpg": "5fa2641ec0883b0483de39015733843a",
"assets/images/c3.jpg": "db071680b62465498841bd4bc4d7a52d",
"assets/images/c4.jpg": "5eda8faf5249c16a8a910955020e54a8",
"assets/images/c5.jpg": "009df8fb400fa8ca91ee5ff089f3c8bc",
"assets/images/c6.jpg": "1cc33084afbff71fb7c3c04cd70f02fd",
"assets/images/c7.jpg": "3f6722342518776c7081eb62495bda8f",
"assets/images/category1.jpg": "e27ee64bd93322e76a54c70ee55be7c6",
"assets/images/category2.jpg": "61469325282fe275eb38d369dfaff799",
"assets/images/facebook.png": "c4dca203f6a46c8b6bce977be8d2a4a7",
"assets/images/google.png": "8b201685859c6b291fb39019e19896fd",
"assets/images/logos/github.png": "acf172f26b6761ec94a0d4316bdbf6d4",
"assets/images/logos/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/images/logos/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/images/moon.png": "01fb0e5589a4359d11264ca6fc14fb34",
"assets/images/products/blazer1.jpg": "d807d1e60aacfb8f9cc12cbbccf00877",
"assets/images/products/blazer2.jpg": "6ee73244bb564d173ecc3a2504e85ab9",
"assets/images/products/dress1.jpg": "fb8ed8e96353a49392089b59309ad5ea",
"assets/images/products/dress2.jpg": "d0f0c3bd4b9e08797ccc84909d7a714d",
"assets/images/products/hills1.jpg": "d35ac642b26dac408424e94649a0ae49",
"assets/images/products/hills2.jpg": "eb0e37a6f727a20b0d9f2b03c4da5180",
"assets/images/products/jeans1.jpg": "96023b8d0eb85d2b4976efb2745634a0",
"assets/images/products/jeans2.jpg": "4c6569887e42f38420635db216d3f824",
"assets/images/products/shoe1.jpg": "6a82b3827cd113e966846083d2d889e2",
"assets/images/products/shoe2.jpg": "53acbda76ab2bb487d475f00f776e058",
"assets/images/products/skirt1.jpg": "fd8b4bd9ca127c7fd974c55ce67bb407",
"assets/images/products/skirt2.jpg": "b306c05ac67dd8ee82018e52c0a7d990",
"assets/images/products/tshirt1.jpg": "f484cdecd198964fc53539a14b09a3a5",
"assets/images/products/tshirt2.jpg": "6e307944a2a0246e6c01e2d6bb709fc0",
"assets/images/recentImages/blazer1.jpeg": "5127615b230f4ee0fea4db1aec46a42c",
"assets/images/recentImages/dress1.jpeg": "0b23c4bf5a3f6a8e334253ba9ab360a5",
"assets/images/recentImages/hills1.jpeg": "2aefb5b3cea891d5db605ceb49438a63",
"assets/images/recentImages/skt1.jpeg": "288752bfebc0b485507b4dbcbcdca4c7",
"assets/images/sunny.png": "bcb3306a08b8a1c94207d7b0c2113acf",
"assets/NOTICES": "c8e73a33d1af0b20b6070f65e3951477",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d912488be0e4c192913801d8a7459591",
"/": "d912488be0e4c192913801d8a7459591",
"main.dart.js": "52c1b88d9614a0ab1294fbcd479ee082",
"manifest.json": "997b9b687c7a0eabe7e528bc33959007",
"version.json": "bebf0a4d97c77c6854b656725f81c61d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
