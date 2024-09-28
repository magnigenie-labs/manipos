'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f7fa8135a4c37730143700e8904d0f8b",
"version.json": "992c5f34d0a0556191c3c419d3679619",
"index.html": "533f8978d3e61be2a0d3efb55b0651b6",
"/": "533f8978d3e61be2a0d3efb55b0651b6",
"main.dart.js": "9124ed33557ee3189e2d1510c0086825",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "df2ee735bceee0c9e7fc5e6e3822f073",
"icons/Icon-192.png": "5bdd263eeb3abf30aa0abb1384ce8685",
"icons/Icon-maskable-192.png": "5bdd263eeb3abf30aa0abb1384ce8685",
"icons/Icon-maskable-512.png": "df2ee735bceee0c9e7fc5e6e3822f073",
"icons/Icon-512.png": "df2ee735bceee0c9e7fc5e6e3822f073",
"manifest.json": "6ceb986ff7f843addabd8962a2f65404",
"firebase-config.js": "05f22d6d5a0e5bbec1052cdf3c91d758",
"assets/AssetManifest.json": "a484758cd714793668ee7b0b873a4bc8",
"assets/NOTICES": "00c17b544d5c54fa82609442330575cb",
"assets/pubspec.yaml": "67a63c38d1ed3972d0dbd109c46ae563",
"assets/FontManifest.json": "65b7999f506ccbd03f05fd59b95b86a7",
"assets/AssetManifest.bin.json": "41a25fd4cab7e74b7e32fbca22e51926",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/firebase_messaging_web/assets/firebase-messaging-sw.js": "acf328a973793a4fb397c920cbb4c62e",
"assets/packages/firebase_messaging_web/assets/firebase_msg.js": "ba4373f5eee9937648c4bd09f6d6a39c",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/firebase_push_receiver/assets/decoder.exe": "0185b08dc769a7d3a67fd5716053b239",
"assets/packages/esc_pos_utils/resources/capabilities.json": "ae5c3288b81125ab9c54fff02d30387e",
"assets/packages/usb_device_web/assets/webusb.js": "9f25775d2712a26981f326f3321b929e",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/win_ble/assets/BLEServer.exe": "d4ef6a9a944a972629a44256c15ee95b",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "738da758021c5a17da050f4b3e2b5927",
"assets/fonts/Poppins-ExtraLight.ttf": "f99f9d50a569dbcf72e3084ef1a43208",
"assets/fonts/Poppins-Light.ttf": "3352653dedd571bbc490c8be132b38cd",
"assets/fonts/Poppins-Medium.ttf": "a4e11dda40531debd374e4c8b1dcc7f4",
"assets/fonts/Poppins-ExtraBold.ttf": "0e6906b2b7be194f68b8f7b7252c4f6c",
"assets/fonts/Poppins-Regular.ttf": "731a28a413d642522667a2de8681ff35",
"assets/fonts/MaterialIcons-Regular.otf": "e3d62748f50759ae40749d4ad4b2ba45",
"assets/fonts/Poppins-Bold.ttf": "7940efc40d8e3b477e16cc41b0287139",
"assets/fonts/Poppins-Black.ttf": "8971d1710cbf4c91bca1b460aec154d7",
"assets/fonts/Poppins-Thin.ttf": "735aa7d8e35b63068b9113ea2545f0c3",
"assets/fonts/Poppins-SemiBold.ttf": "e63b93dfac2600782654e2b87910d681",
"assets/assets/svg/cart-_1_.svg": "1528a457a48bc555b957185cff07c2f2",
"assets/assets/svg/Group_1273.svg": "ff6fc036906eb54e3829575e2f80be53",
"assets/assets/svg/-check-circle_90465.svg": "8171003ba7d4478bb79007a031a7ffe3",
"assets/assets/svg/Group_1272.svg": "71c8558ba0a302ad002b6cc92d7f3d14",
"assets/assets/svg/Group_1271.svg": "638726cce2ee7b6f73fedba332c8ec3c",
"assets/assets/svg/help-_1_.svg": "7170faa21c3b6754b68138c2dc4954d4",
"assets/assets/svg/notification-_1_.svg": "2324c90b41d10ebb06b16a62676e731d",
"assets/assets/svg/edit.svg": "616da2563feb5059e1dc2c8d2d56568a",
"assets/assets/svg/delete.svg": "4b74fcc72b670a3bbc82dc7d2b0f2a0d",
"assets/assets/svg/barcode-_4_.svg": "633cb834251209c1358259f0cc64d606",
"assets/assets/anim/empty_basket.json": "7ef847cd08b5f2ebe6770b24216f5263",
"assets/assets/anim/no_data_anim.json": "d2dfdf4e70b94e3503e767babc9c6be0",
"assets/assets/anim/sync_anim.json": "593c5bcec7c38bcfa658081d8cd27db4",
"assets/assets/anim/order_placed.json": "68c96e0fd98fdd05e4ac1f0ef416c567",
"assets/assets/anim/location_anim.json": "197e1519ef25095e56c60e8ecb621ff2",
"assets/assets/anim/no_restaurant_anim.json": "84ae6ede1ca72c8f7faef58a99cb5544",
"assets/assets/language/key-getx-translator.json": "8737a2500c90738c7182ddb54258e9b5",
"assets/assets/language/Local_model.json": "a8c4285e39ce365a08be2b886fd1d00c",
"assets/assets/language/es_es.json": "460921767dfe31e75648e83e91d03b26",
"assets/assets/language/el_gr.json": "e55f072cf633eab7e48cd38dd90ea6ef",
"assets/assets/language/it_it.json": "3fb473f0cce3a71fabea4f8e706e362d",
"assets/assets/language/he_iw.json": "da5aa45bd7d8b075f04eca1b1ea23a00",
"assets/assets/language/en_us.json": "615744472a02888b447fdb3089962162",
"assets/assets/language/hi_in.json": "822692feb556cd04dcc5de5fa2294e8e",
"assets/assets/language/fr_gf.json": "c45d4be3de2c52a2b733bae52d224f3b",
"assets/assets/language/de_de.json": "16aaf40a4712963348dc85d95c124929",
"assets/assets/image/refund-_1_.png": "d1b2e1b535a4f1d942fe0a71d3ed0179",
"assets/assets/image/user-_1_.png": "a50fdf6db7553cc25acb149c87ea7a1f",
"assets/assets/image/insert-picture-icon-_1_.png": "7555655624f6c2b81f9121958f2676cc",
"assets/assets/image/down_arrow.png": "9493c7adaa07d68db8285ff0e163f97c",
"assets/assets/image/imge_loader.gif": "3f899a790ab677acd5762723b7743334",
"assets/assets/image/Group%25201167.png": "8d003b8a069efd3373364ecf121cc1b9",
"assets/assets/image/category.png": "ed707f623b5b762777ad4a794dc35eca",
"assets/assets/image/splashscreen_back.jpeg": "37c4ef90ea519ff8a95fd68e16549ff1",
"assets/assets/image/dashboard.png": "e96d897d959b22bcc7707fda8b6d1275",
"assets/assets/image/Group34.svg": "ea2d85387c94576f1dc70902211eb8f8",
"assets/assets/image/mobile-payment.png": "97f18cb800a16251895a7bc8ca4674f3",
"assets/assets/image/updating.png": "9403d6232d7dfcf8d23f50eb69b93d3b",
"assets/assets/image/Group%25201163.png": "145e65f62b76810301113605ec853480",
"assets/assets/image/location_(4).png": "332d3e2bf434fdf92f5cc4b55f2da3c8",
"assets/assets/image/edit-text.png": "bd17b48bd48613079a65ef91122d5f5c",
"assets/assets/image/product.png": "66d077751a77c6d8f76fdf6d7bc54ecb",
"assets/assets/image/image_loader_hori.gif": "204e0a7a6093ce7fa6901a1c004bd083",
"assets/assets/image/profile_usr.png": "9cf2af0dfb65590802d3867f4d9df350",
"assets/assets/image/Group_1261.png": "17fb94ba10d11fe553a050d83f4bd15d",
"assets/assets/image/sleep-mode.png": "12e36067bad2df6e7453257f0b7bc44b",
"assets/assets/image/logo_full.png": "da685eeb3d78d08cddc2e6eb95e28ae7",
"assets/assets/image/Union%25201.png": "60f56ddf368f927f9b5081fbb51981a9",
"assets/assets/image/calendar-_1_.png": "9609a436d8f160f1117741d954c521c9",
"assets/assets/image/pos_background.jpeg": "453570f1426ad7916daa3573d29f3f58",
"assets/assets/image/group-_1_.png": "a7dbb42509618e04d72d967ad04d45c0",
"assets/assets/image/Rectangle%25202197%2520-%2520Outline.png": "cd18b13151293a9732a8010b569a9aa8",
"assets/assets/image/cloud-computing.png": "5108ee0fec1c1c58ec0b408df3f89386",
"assets/assets/image/menu_4.svg": "c65f7d40d0868b4726eca4d3030c2b05",
"assets/assets/image/Group%25201077.png": "039e25e24e83091a4dd19c97ca159c39",
"assets/assets/image/bar-chart_1.png": "cfc7976e540b7c5fc94594a0aa601fd1",
"assets/assets/image/location-_1_.png": "8f9ab48a0dadf7bb5174b52cd1a78be3",
"assets/assets/image/order%2520(8).png": "9c617bc06d58525f4a2af7db4ee79b74",
"assets/assets/image/cancel%2520(3).png": "ebdb25c8da3412e3c4fba05f7a196836",
"assets/assets/image/right-arrow-_9_.png": "1490cb9caaf6fd100142b65056e16884",
"assets/assets/image/cart-_1_.png": "82401df60c70d415ac6793df4dadde8f",
"assets/assets/image/add.svg": "e1e50b15b68356a6afccafc5328dbb87",
"assets/assets/image/coin2.svg": "ead6158be7fa90760e12cca3d34604e0",
"assets/assets/image/wall-clock-_1_.png": "d45750cb65215f78ba1456437e1093a2",
"assets/assets/image/product%2520fill.png": "9a832dae7c90ee2b09740dcf96c9adf5",
"assets/assets/image/trash-_2_.svg": "a6d91843beebd5138a5bfa9a30e2b057",
"assets/assets/image/Group%2520251267687779.png": "87625ac49660e0b095681d249d9c34bb",
"assets/assets/image/coin1.svg": "51bfc35abd3b67b4bd5cfb6624b536db",
"assets/assets/image/employee.png": "935d2afcf4dd1b334e38d5f06f720d90",
"assets/assets/image/order_click.png": "f62e41b13fb12bd41bcca95f420c4a48",
"assets/assets/image/cursor%2520(1).png": "f0f79930ba0e5faad7647245f05d61d2",
"assets/assets/image/pause.png": "a22ef73bfd46818fe08f5579ce11d5c0",
"assets/assets/image/Group_1231.png": "f60a4dd9c3ee4545f4a82c0b8a698d8b",
"assets/assets/image/Group_123.png": "520836cbb0904f80b9795f19b2d47d5f",
"assets/assets/image/food_tray.svg": "8739b4dcef23ad51ace329165d23e39a",
"assets/assets/image/app_icon.ico": "cf02e749f703b467b402a4334aa16a20",
"assets/assets/image/shopping-center.png": "0c952339a868b83f2d17052fa9dba08a",
"assets/assets/image/Group%25201080.png": "248b8b7905b2dcbfb5e3e150df3096e8",
"assets/assets/image/profit.png": "bdc74326f17d2c1ff4f9f7d6f271134a",
"assets/assets/image/pos_unclick.png": "670404ef8e409f0c0aa5fed53ba027ed",
"assets/assets/image/exit.png": "4ff43e14613924424af6b9e99609836c",
"assets/assets/image/delete.svg": "cddfa2e417c3042f640f860e68a33d09",
"assets/assets/image/up_arrow.png": "aa7d0bd1e813b7780c515a267a428408",
"assets/assets/image/report%2520fill.png": "49153a2dd84fe2d696b50823c45d0cc8",
"assets/assets/image/report-_1_.png": "51cb2c973690f544c51bd202cfc88910",
"assets/assets/image/list1.svg": "ce9a512ef845204fa4b1b61256278494",
"assets/assets/image/setting%2520fill.png": "a83ccd687b88c73981148925c1656a7d",
"assets/assets/image/Group%25201179.png": "02392c599edd05c2048913c772e7010f",
"assets/assets/image/search%2520(3).png": "a7e6601d161c9f9e8068101c62e2816f",
"assets/assets/image/employee_selected.png": "5df4a1c9843ff74d59a99c7ac680dc0b",
"assets/assets/image/coin.png": "811bb1d5375752f512b48cec486105ef",
"assets/assets/image/reward.png": "895e2291646ba5b042c315526d29d2ce",
"assets/assets/image/back%2520(1).png": "7fabfb0f1c13192d813614922d0720c6",
"assets/assets/image/setting.png": "ea3302a8448e07fd127b0d55b36e8d30",
"assets/assets/image/checked%2520(2).png": "8005aee9d074acc153443f50f597cb37",
"assets/assets/image/user-_2_.png": "20ee99b6203cfd7ef39aadd679db11bf",
"assets/assets/image/icons_launcher.png": "856a494505f3249a5312050006eb58f3",
"assets/assets/image/Ellipse%252024.png": "80b94d83433517cbecc555d3225aa983",
"assets/assets/image/Group%252025093545454.png": "a89934532a1c5d20f346dfa4bbdead1d",
"assets/assets/image/credit-card-_3_.png": "3a8de145190d99e8ae6e77174582693a",
"assets/assets/audio/slow_spring.mp3": "ac6f9d10ef693096a16c6c4efa4b7550",
"assets/assets/exe/BLEServer.exe": "d4ef6a9a944a972629a44256c15ee95b",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
