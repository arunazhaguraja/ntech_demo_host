'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c085f9acd3be1296f727b0ea4e7dda0d",
".git/config": "5c05cdab0ef9431a5399ca241356dc04",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bceb98d588c163e06072ef0b92e5d70c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1bd1618d18af22f95b0fd83a76683a7",
".git/logs/refs/heads/master": "a1bd1618d18af22f95b0fd83a76683a7",
".git/logs/refs/remotes/origin/master": "2106de23fa07bb2eb8deb77b8baa40d0",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/698ce611c0cb5afb419b36a2e36244298c8b36": "9f2f8ac5b515d7782ae6f42adc8f0b4d",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/13/ad2c4574f03dbf8618230a421267af18d96c92": "e5d4f4a3f8dbd6081b439409f652eccd",
".git/objects/1a/fb4cbd97b849fcfe130771d09786c5e7441118": "b6a5f3ddcf800efe851e13eb7ca3103b",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/928d2318e05abac8948251146e7d18a96c1e05": "c8b25fb7383d0a87df5e5af072b81e13",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/61e431214930b0605d0b80052605ea486ce57f": "bcb7826aaa049260308208e9fb68b199",
".git/objects/3f/3f1a8eb3f2cde6bb15b6f338041f1ab09d2dde": "8e07ed7e581d8708e83a2fd32ebfcb71",
".git/objects/41/b404183c78075e16cd393ab9b68feed39ddaa2": "64892801bcbc55de5d9397c16709e6fc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/5a051d3cac3be9d1ec2eb13b8b20a4051e85af": "4da723f021c2f1a89615c270dc663b17",
".git/objects/4b/6196917283281d13975b46a4a839d4ecbf0f04": "0916b3f8dd097fded17749e27f1f3ff1",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/57/6bb7d80b64391abee94adc48ea11461ee8893f": "53b08a6e46943701e5327f1f9509fa7c",
".git/objects/5f/d6037e056bd09fe5ff94011530b93825bfb5ac": "0159b882d0236c524f2216759f036721",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/2aa9fc8a7d1b6c2046d01d6a38fa844635bf98": "cce9594aacd60d9611fa17302dc7b2ec",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/2dd24a2bff6fe405bada14a722cf909879b77e": "37847456599a6fe374d13ef5ebc9d5be",
".git/objects/7c/1ff4011ea8415e8e939427b4848746b5dd9a4f": "a2e6183019c3cdb63ad8daed9054df73",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4f595bf7889e26a244667ce94c232cccfe7773": "c0a40909c56a99640d4b29050ce34717",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/a0/6b6ebffb0fdd47b0be92f639d9753342c4581b": "b3c60a8aa083d6ebe4b765b1ae18b018",
".git/objects/a2/2fdd28a78c19fd552700afc5d6ad3e4613c1e1": "6d51da61147d03964e956e45f44193a1",
".git/objects/ab/29373da5875bad3d2d764388d4a29993d5272b": "16969cd9462bcfbae9dfb10d95f8fe96",
".git/objects/ad/b571abd5495590a32d985ada886b90bab0571d": "0512111786a2c1ec0ad5ee5e06706e52",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/59d0e6289ff8c77edcd55081468dc680805a69": "6d1e3f78a08d39c0574233cfc8110487",
".git/objects/c9/3038d7d0ff31900cc832df6b7b23d8eefb4739": "cf02fa980da3489c2f63123b82d9a70d",
".git/objects/c9/5cf203be6f9fd3458575b8bbc58aab3fb6bf10": "0089852528f0c10e262f5b9fd9e45799",
".git/objects/cd/f8c952d1f253fe2a49bc711a766728c342b6e4": "143bc848932f1acd04a920f96d0b7bdb",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/b692ebd2cb189f67d3fe4386ce937810517c1b": "a705dcdbfa27d27949aaf3d3e20113b0",
".git/objects/e3/2000f2c4371ef629b0e24d065d398d0ac216b5": "07978a5f9d453fa62213585074a7b06a",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/32a7c6097208a200b45e0391dde9eebd5af14a": "d0a14f19f7e97bafe85364ac59d30c2d",
".git/objects/f2/21165f5582207f045efc4ce0f3b276d94e7677": "f48c6515c604ada0efa0ba6fb7f2f2fa",
".git/objects/f8/abac4dd4a51df8c78f939a9700b3943b0f2c33": "0d0b9eb6557f078501c71bad23f36a7f",
".git/objects/fb/14d3cbc2dd5eb6b43ae6b2da108ae77a8d39c0": "67e5dbf1565bbc4e6f0180e18875542d",
".git/refs/heads/master": "6fb22abb7e78e9e194f4bf05b583eb38",
".git/refs/remotes/origin/master": "6fb22abb7e78e9e194f4bf05b583eb38",
"assets/AssetManifest.bin": "7731babcd0442c2b4e7f4d704cf7eda8",
"assets/AssetManifest.json": "1b87d4d6957bf4f8b0a0ac1da8b84c52",
"assets/assets/1.jpeg": "4fc98bf435a442384a26afddc2659b8d",
"assets/assets/2.jpeg": "17a9e492c5109f38bc88d79713f64b18",
"assets/assets/3.jpeg": "80042422410a13a67b31ad192f126442",
"assets/assets/AU.jpg": "81ce6ed78f71ef427e1305cca701e479",
"assets/assets/cover.jpg": "0d65a29b92954b547661b2e09516d43b",
"assets/assets/dam.mp4": "6b44e0d294529e572f21e59bb3dfe690",
"assets/assets/fabrications/1.jpg": "284f3ca68ee5bd4def1ee9336ee09776",
"assets/assets/fabrications/10.jpg": "960c1bf53d428dd0d472f55106e2c45b",
"assets/assets/fabrications/11.png": "b95361450f0ba431fa4ed7da0beb178e",
"assets/assets/fabrications/13.png": "4a0a0f2df78dc98552a71d099ffb02d3",
"assets/assets/fabrications/14.png": "171b1ffbd45013c3c2b4fa8cb7caf5c2",
"assets/assets/fabrications/15.jpeg": "99222d4b63810102a662f4245be5c0db",
"assets/assets/fabrications/2.png": "fc92cea973406a06d87c2fed3732272b",
"assets/assets/fabrications/3.jpg": "7f1ec362b39ee1d52c53d795ba5125c0",
"assets/assets/fabrications/4.png": "da33de818c38bc031cc652fbd9a0af88",
"assets/assets/fabrications/5.jpg": "53bb9eeafc8bf8384bc73a5a1379572d",
"assets/assets/fabrications/6.jpg": "f9c47a820df8d1f9f1bf34cec5b371d1",
"assets/assets/fabrications/7.png": "4c6d525fdc4f4cd6ee1bc628c7777298",
"assets/assets/fabrications/8.png": "9f4b92ce55bd81a8b23690c48558cda9",
"assets/assets/fabrications/9.png": "1d00d651f82addc60834d333707eeba7",
"assets/assets/loading.gif": "102a9f484be00a51ebcf5157ca108dbe",
"assets/assets/logo.png": "9c66dad9b511b648ce3910a220e16719",
"assets/assets/machining/1.JPG": "7f18b9438fe108f3fad98003edd34da4",
"assets/assets/machining/10.JPEG": "a244b27d61d723a57b91d9247471a8d7",
"assets/assets/machining/11.JPEG": "7a38959d7fce3d7f19721981d9b73e45",
"assets/assets/machining/12.JPEG": "0716ccd1fc1d83ba7b48905b29497994",
"assets/assets/machining/13.JPEG": "89cff963a349af2a30fd35ed6e5c433f",
"assets/assets/machining/14.JPEG": "dd740c926698bfa3efb137fd153b9de8",
"assets/assets/machining/15.JPEG": "b142df33fcb838a44dce57c1aa16c688",
"assets/assets/machining/16.JPEG": "b63e7ca9bdb64686e631814249c4551e",
"assets/assets/machining/17.jpg": "d540867f1fac7439934b0efe06780119",
"assets/assets/machining/18.JPEG": "5ec71dfeb7aaa9599be36f53dd8259df",
"assets/assets/machining/19.JPEG": "8557388ba1436242acaabd592dedb162",
"assets/assets/machining/2.JPEG": "f8db10ffcf540bce8d04a2aea6019634",
"assets/assets/machining/20.JPEG": "4907ff458d19551ba1b694e8dc14ed95",
"assets/assets/machining/21.jpeg": "8ae193708fed14e69a42aa4cedc2b1a6",
"assets/assets/machining/22.jpg": "83de2f96a583ce065e6b27d94e007f2e",
"assets/assets/machining/23.jpg": "fd83cd686d8a55a93d310ae9152c5f60",
"assets/assets/machining/24.JPEG": "b7ec2d4f9173b9447e5450d34fdf6e8c",
"assets/assets/machining/25.JPEG": "3a92152966dd8226e09f0f93478577c5",
"assets/assets/machining/26.JPEG": "29001e4da3356e64ce8cf8dde7f2710f",
"assets/assets/machining/27.JPEG": "c5ba93af3c9cf494ca01c1eabdeacb21",
"assets/assets/machining/28.JPEG": "f7ab0a6b1376f93fcbf4accfe8812e08",
"assets/assets/machining/29.JPEG": "4c75ee4b32d60289dd894d7dbd97c844",
"assets/assets/machining/3.JPEG": "9688d9027ebc0f1bc44e3ecc18e0c541",
"assets/assets/machining/30.JPEG": "689d9c00b1f01d77c4e42b26211078c4",
"assets/assets/machining/31.JPEG": "a338a0c6dffb9d71b45992a91fd0d791",
"assets/assets/machining/32.JPEG": "d17c0cddc87029be7d69601633023171",
"assets/assets/machining/33.JPEG": "f0c1411a8b95853a41bca17170988b42",
"assets/assets/machining/34.JPEG": "5816e845c16be1be22f30dcd46eebeb8",
"assets/assets/machining/35.JPEG": "aabf9b705ca016115d6f9f50ef12f92e",
"assets/assets/machining/36.JPEG": "fdc789eca668f46133120296d3a7f43e",
"assets/assets/machining/37.JPEG": "b494055c926676ef55bf5619a9d139a4",
"assets/assets/machining/38.JPEG": "af1a63970f9d8bb8f181ad0c599efb9c",
"assets/assets/machining/39.JPEG": "fc4792dfb9363502fa3795b52ec72c99",
"assets/assets/machining/4.JPEG": "8ba0701ac8e5564e6d4566a4b574c029",
"assets/assets/machining/40.JPEG": "eb4dcc26c050b8d99477cc1ff9f9c013",
"assets/assets/machining/41.JPEG": "4631fedd4d4eed579feb6f204a31b9c9",
"assets/assets/machining/42.JPEG": "dd9a7d610476754ec68ee3befffc74a7",
"assets/assets/machining/43.JPEG": "0bde605bfd57d0bc863416d4b0e06967",
"assets/assets/machining/5.JPEG": "dffd8c9be208e9c88af3d9567e05ef8a",
"assets/assets/machining/6.JPEG": "e193bf64acb14ba5e8e8ceaa5d0bb47f",
"assets/assets/machining/7.JPEG": "827872721d35a9bd6bccb860bfeffa25",
"assets/assets/machining/8.JPEG": "8081c35b18965e6063b6fcc5c7aae65d",
"assets/assets/machining/9.JPEG": "5e1b735c63abb91cc0d8ec779b83947e",
"assets/assets/projects/Bastakiya-Dubai.jpg": "d0165d97138ac017dd782acd500fb3ae",
"assets/assets/projects/Bur-Dubai-Grand-Mosque.jpg": "3a4382449be2ae867c481ea7876240c6",
"assets/assets/projects/Dubai-Aquarium.jpg": "11813f09b28611e653558c6b269c5068",
"assets/assets/projects/Dubai-Miracle-Garden.jpg": "07a3933571b73ff51943cc93ae59142d",
"assets/assets/projects/Dubai-Opera.jpg": "741a9e098484a281c14e1d8c7ee688cc",
"assets/assets/projects/Go-mall-hopping-in-Dubao.jpg": "fee9092170b98a3a45a032246074316f",
"assets/assets/services/Anchor-Bolt-Manufacturing-1.png": "2b0a9b29d704b0f0ebed4ffd5a1547b5",
"assets/assets/services/Fabrication-1.png": "e703689cb1aa958313ba08ea4d3c3584",
"assets/assets/services/Milling-Cutters.png": "726f2c2f27174d0e103cff1384249b22",
"assets/assets/services/Precision-Machining-1-1.png": "47a34ecd6bb0a714b895ea1e132547a3",
"assets/assets/services/Pressed-Work-1.png": "73caa08fa12a8235a4ef1939be2ebf52",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c24c01e8c0228b1b079d9aff922d7daf",
"assets/NOTICES": "c42e1420506bb008673809e77d54969e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f55383c47f02ec2af169fa34865a55b2",
"/": "f55383c47f02ec2af169fa34865a55b2",
"main.dart.js": "3e543f0a210809583be2a77f4dac4723",
"manifest.json": "e63655777320418c6106498743281151",
"version.json": "ca6023c0d385195f8b821eadd1464979"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
