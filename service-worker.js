/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "20200526/index.html",
    "revision": "e4526cbc28cec5658478de5cd40e8032"
  },
  {
    "url": "20200529/index.html",
    "revision": "2296b5c9a73a9dfc9f0ec553755383de"
  },
  {
    "url": "20200601/index.html",
    "revision": "1727e1931e2bb37c30b16ce9dc27d1d6"
  },
  {
    "url": "20200604/index.html",
    "revision": "34cbb35f36e322103c92c645750b44b1"
  },
  {
    "url": "20210301/index.html",
    "revision": "6c38cb1c5e8073448f2bcd2a1397633e"
  },
  {
    "url": "20210327/index.html",
    "revision": "2e3a89e7e941b010652e550239a69257"
  },
  {
    "url": "404.html",
    "revision": "d1d5c7880a616f322440215144c5a03f"
  },
  {
    "url": "assets/121501/1.png",
    "revision": "c4bdcde64b3d33cbc8baec7e9d21d6f5"
  },
  {
    "url": "assets/200526/1.png",
    "revision": "126ac5ae3a114e3bec3b897d439cf3c7"
  },
  {
    "url": "assets/200526/2.png",
    "revision": "23dff91a7b5ac26d6580c2974b94bbca"
  },
  {
    "url": "assets/200526/3.png",
    "revision": "71821d824a4c76648b0a9ba01f6725ee"
  },
  {
    "url": "assets/200526/4.png",
    "revision": "a0d9ecf3271c8f8fbd7451fae743b268"
  },
  {
    "url": "assets/200526/5.png",
    "revision": "d01be8e7c3e3822c12af0dc06d443985"
  },
  {
    "url": "assets/css/0.styles.772212fd.css",
    "revision": "882938592519bdb75ac2f8811fdc2eb0"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/interview/01.jpg",
    "revision": "4ba6a5e4af975258cc1f47d55dcd38ca"
  },
  {
    "url": "assets/js/1.c6da5586.js",
    "revision": "589cdc1cde81d4fd91139349413d34ab"
  },
  {
    "url": "assets/js/10.12460042.js",
    "revision": "9691dd7938bb598051d5c40aafcb4321"
  },
  {
    "url": "assets/js/11.3c97b1b5.js",
    "revision": "927f42826e6c3aa8affd016f66a6638e"
  },
  {
    "url": "assets/js/12.8ef27030.js",
    "revision": "2038c565ca5286f840984f37a1719003"
  },
  {
    "url": "assets/js/13.7d959d75.js",
    "revision": "f357c1a45f045c59f80c11a8f3255cf3"
  },
  {
    "url": "assets/js/14.988d4394.js",
    "revision": "011e9940d972b696f746e52918e2bdb9"
  },
  {
    "url": "assets/js/15.c4f0a903.js",
    "revision": "7e154f06b04aeba2d21a46f4dd35c857"
  },
  {
    "url": "assets/js/16.3b841272.js",
    "revision": "15ab644945869d78a6ba59b4e5183a96"
  },
  {
    "url": "assets/js/17.fec8350b.js",
    "revision": "ac870a5ffaa388b2e713b3bad511ba77"
  },
  {
    "url": "assets/js/18.de6c65c3.js",
    "revision": "db46c11c58a4a4689d83a3be7be94e7d"
  },
  {
    "url": "assets/js/19.1d0657ee.js",
    "revision": "b82d1e8def888368540b6c065f88fbfc"
  },
  {
    "url": "assets/js/3.c5d328da.js",
    "revision": "664f73e596f6f07f9e86b1d971e22619"
  },
  {
    "url": "assets/js/4.c878fcfc.js",
    "revision": "6e22356f695069d877e22c9a0c0ece50"
  },
  {
    "url": "assets/js/5.7f631f92.js",
    "revision": "10ea45a7aa668f9a1ffa09f6fbae92f4"
  },
  {
    "url": "assets/js/6.997e51e5.js",
    "revision": "ae7782d0ed83644d7a4e079452aee07e"
  },
  {
    "url": "assets/js/7.954470c5.js",
    "revision": "b238158d44413206de2445701dd13411"
  },
  {
    "url": "assets/js/8.1eef4604.js",
    "revision": "e019a16cf5c062900daa8eaf8b72abbb"
  },
  {
    "url": "assets/js/9.7a292b51.js",
    "revision": "5d0dae29b9d9368849fdadedcf73e83b"
  },
  {
    "url": "assets/js/app.85ad940d.js",
    "revision": "8c9887901f21bae00659207919035e0a"
  },
  {
    "url": "avatar.jpg",
    "revision": "d4dd2d543bfc95ffa6ce44ce1b75f709"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "bg.jpg",
    "revision": "e06f1a51f4c146f1fd7d42ec4b6451ad"
  },
  {
    "url": "cat.jpg",
    "revision": "289fe6e568cfb71ce0e8bcc1458cd61b"
  },
  {
    "url": "categories/About Me/index.html",
    "revision": "ae59fee6e9c74a4d94329ffc6cc93961"
  },
  {
    "url": "categories/Artical/index.html",
    "revision": "60ff3d9b7175e2dbeac2b9397449736e"
  },
  {
    "url": "categories/index.html",
    "revision": "4f24b0c936e6fcfc2deb3838117e61b2"
  },
  {
    "url": "categories/Learning Notes/index.html",
    "revision": "61853fe565f3261e4379998c6dc784da"
  },
  {
    "url": "categories/Projects/index.html",
    "revision": "cf83e7290d232165b6311eee3161d98a"
  },
  {
    "url": "hero.jpg",
    "revision": "c60b4e9b3a0454137d336d7fdf4a3bf7"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "dc8ba44fcff9dd18aa935d23f6a49ed5"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "681992f5b3649ffe525abb02eb3c619d"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "e88f292f8c50879df390a697190537e5"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "97f627f10205ac86868f9727ecb7c477"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "231b6077415af6b017503e5b499cd90b"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "771a697863a0bc92b4cffcbe66d25bc3"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "1c10ea76fcd90a1c83aec949bb9dd254"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "ed7b53a2f4596f15838eb88bd84c6f1c"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "6f5245791edad212c6b0f3ccde5a2309"
  },
  {
    "url": "index.html",
    "revision": "f16623729d9e32e957e403f693250e7a"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "mine.jpg",
    "revision": "5ef1240314ed8707848ed856f43d7b13"
  },
  {
    "url": "tag/About Me/index.html",
    "revision": "781deb1629531b666494dac66fd277cb"
  },
  {
    "url": "tag/Artical/index.html",
    "revision": "0429f37d77bfa9edb5a42a72a8f994e4"
  },
  {
    "url": "tag/index.html",
    "revision": "f2be683b420c50e83a9604ffb3858a1c"
  },
  {
    "url": "tag/Learning Notes/index.html",
    "revision": "14f375194f71a762634533b95e24b5ff"
  },
  {
    "url": "tag/Projects/index.html",
    "revision": "b61a9f6726233fd2e1b576fa9bba047c"
  },
  {
    "url": "timeline/index.html",
    "revision": "8b706683666c2b8fd2a69e3e2cbbd93e"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "7c3fd4ca608155f9198968a9b66a5533"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
