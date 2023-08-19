'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "22a6a3a7c9b53eb2f0ab562e08130cb5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9720a65980282c10aa37c8f64a3699c9",
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
".git/index": "ba34581c93803db91cacc15d592bda26",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "432137e4773b32f28c675a8e3867cd3f",
".git/logs/refs/heads/master": "b562c653e66dd707a6356a51e0d4cdc8",
".git/logs/refs/remotes/origin/HEAD": "34a99e5f299a174de4b0721342392124",
".git/logs/refs/remotes/origin/master": "a6bdefa45d55ceaa3e4696fa79a02c73",
".git/logs/refs/remotes/upstream/HEAD": "02019db2224b5a0de35f8592f28f2046",
".git/logs/refs/remotes/upstream/master": "42edfd565e3c8d6aee638184e030f0ae",
".git/logs/refs/stash": "3f9158d22b25d55968731a3c9a53aa24",
".git/objects/00/aefab8d3a43426c4618c75cbc9f1123c4682cd": "c0d007c94014d7cafaa91dbad6eda73d",
".git/objects/01/17b2cb3555f447fd0e881f64abd627cf856446": "85f054f831a8448985434db0a971bcd3",
".git/objects/01/487ad75f4120d9e388fb5813e48d7db5bdda74": "ead67a711f2a615f1e58a6c94e3055c8",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/698ce611c0cb5afb419b36a2e36244298c8b36": "9f2f8ac5b515d7782ae6f42adc8f0b4d",
".git/objects/04/a78d54e6005919e22d794cba564c067c0c3411": "764928a84e3e57fc3521f024d7027e97",
".git/objects/05/0d1317e32942dde827b8cfd0987f7ff31c8caf": "820f691312a9cf03898330541e7fffa4",
".git/objects/05/e1f570d726620ac9def64d66266d6aaebaed91": "9daadfeff06fda16ba65cb1ee8dece5d",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/a2c2d5ab3411d300539093f608b86e14098f43": "47914a5f79f9c70e06c19c63b83328dc",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/e53a4acbd0f96adccf86a04710394a71b9326c": "ce02fa3febb27c4a44e975a8f141ab13",
".git/objects/11/4c466cda28e4cfdad6445cb72364c9bf23267f": "9f0207b9500517ba652ba0bc741daba5",
".git/objects/13/96b117c145c5eb4b19e65d0e394debbd03f835": "111842467816bf702e4c318dd36946a5",
".git/objects/13/ad2c4574f03dbf8618230a421267af18d96c92": "e5d4f4a3f8dbd6081b439409f652eccd",
".git/objects/15/bb071c5bbe03aed624311c4e521759e66d56c9": "c57dd019c4c3e7c4654503d917fbf24d",
".git/objects/18/ad57586009640462a927a9c2f2418ee338448f": "73f789ef7b87468a4eacfb48a7817196",
".git/objects/1a/b28cc3c3560cff2361736c469f50d284c84625": "2248379f6b9247d1b272c650bc814a0a",
".git/objects/1a/fb4cbd97b849fcfe130771d09786c5e7441118": "b6a5f3ddcf800efe851e13eb7ca3103b",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/928d2318e05abac8948251146e7d18a96c1e05": "c8b25fb7383d0a87df5e5af072b81e13",
".git/objects/1d/b0d88d46bd39a7c758937f38a8cdfbe4bfc676": "a24f828e4e0ac81d48a14325a82eec9c",
".git/objects/1e/1b004135c4f4e5b80ae9712c8ca74c33989ec2": "875327a3a111a7b6345a202adda8389f",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/22/066898c96c5e5d00c712f72ae5b4aafddccff8": "5ef752e31bbbabc7b807f106f480b7c2",
".git/objects/22/bf4601a21ac4dcfcdf0be14b2f17dbdd570683": "d071a1830b583eb64b838a01bfea8fb8",
".git/objects/24/763796df1d4c1f7b9f28341188fa03a378a7ad": "401fb4b06b9bcbbf139941d32b340026",
".git/objects/29/d17ba2a44d6fb5b57ef2cb9065922531f7615f": "97c4c4fb8317ad6a04d6d5b18b1f4eb8",
".git/objects/2a/4c35b1296007dea48ecebccc4759d39066e542": "9f2535b68136e90e2ca837e6bbdd8217",
".git/objects/2a/6709a842eb40f2b9d52345e1d96f116bc6c385": "7e5c3069c76d6784222b4ba8574bbc8b",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/2f/bb4a25389a06c07e855a6271132e8372acb7b5": "31f82428cbdeb9d4c96fd257527f86e3",
".git/objects/30/0867b42874cd61588045163cd5a8bb06686e8b": "b835aa4a3ef8b20b05d1937a89cab7cf",
".git/objects/30/ab14605f1958e97a47bf86e42a991dcc5ad989": "555dfe5941713219348675bea3af7d86",
".git/objects/32/4113980cbeb023e58376b755c14145efb1c6e0": "883c8ee0ad85e1242f9bb010a3d20218",
".git/objects/33/d4216d5b2dbcaedb91a00b1b2ca75ce7c78385": "8e95cf115f0720bbf76f37f902b6807f",
".git/objects/33/e4dfc8edd850a87d83a3d4b84a0709282dba43": "5939060d10dd00a6949b16c13f13711e",
".git/objects/34/2ceb3c2487a872670bd7bdbd7e0581763af9d5": "518992a20a4bc2aba57ab9e2ebd9cc78",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/84501714add938478b8b2a15635b29a7f28238": "ed17dcf8a58d018148d70ae960974207",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/2875ad2b008d8edcab8e61bc42a304c3bd839f": "798455959cf0ccb9ca4042c5eaa8d77c",
".git/objects/39/019d8c36ef05876a07271995502abff60d55dc": "aa4917189ba0c61a1400e931ff560e59",
".git/objects/3a/61e431214930b0605d0b80052605ea486ce57f": "bcb7826aaa049260308208e9fb68b199",
".git/objects/3b/2ead5a92431ca43f4c7ffc2f1aea5411f8acb8": "936b376daf20c5acd09cd34a9492ccaf",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/a3ac4d8ef855c5f6e683993db345e155563168": "38ca916fe6fa1f326631eeb7b30f15d4",
".git/objects/3f/3f1a8eb3f2cde6bb15b6f338041f1ab09d2dde": "8e07ed7e581d8708e83a2fd32ebfcb71",
".git/objects/3f/be4468017e47d7fa8471f20713e7f35a5ac553": "bfd30a6e2a58ac96f80f386cd687da83",
".git/objects/3f/de2aacb8487f2092ac4f149011f949921a69b9": "7c9ac929330705e35baf29e2a58af8da",
".git/objects/41/48c371e7cdb656bf302bdce444d1e655d94201": "1937841a99a2f7c47d4f9f5b2679acc3",
".git/objects/41/b404183c78075e16cd393ab9b68feed39ddaa2": "64892801bcbc55de5d9397c16709e6fc",
".git/objects/42/a23cbd363ebc2e859a4dcc531be26b35cf3557": "ed9e17d2031e6808c910cce137c43d7c",
".git/objects/43/3474747d3c24434b9903530923496c1533a4e3": "989e6135dd72d44a8017d2e177e14ccc",
".git/objects/43/6e2faadaef6fd953a7f8bbbf4218c23b8f8323": "311d155913467887a8fd7f1789a0b521",
".git/objects/43/f432abcdd178d7ab9b98439203dc26407afb36": "e4f1e308b047a101c620bb50f847363b",
".git/objects/44/806ca569b412fa68e9d94747a6739ac7a1dcea": "da9974aa4b40ae5762bb4962c968e51a",
".git/objects/44/9fb312a90f9efd43053f332ee9a64fc19a7ebf": "77b9560dd8c68f2a2df21a042f09832f",
".git/objects/44/d6cde5d6ee1eb1432d44827a940d79cbff16e7": "f7e0fe60807815e95e3e37a411527777",
".git/objects/46/49f9e9b5ff0468b9a8a92de20cc24714534a2e": "ae02a613175916a90fd37c58e21a8b79",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/62b4a3db7a1fc0bbca547a901a7f334d8652d5": "916b8f27fd34ad83860cda0142aa04fc",
".git/objects/46/f5102b751266ba8e885b51138f9917c22d57a3": "7fbe38dfcc3539f35fbaccefbcde861d",
".git/objects/49/63648dae4da21d291c978db47aca0c62be2eb2": "148781e0fd1104d7bbb00da27e18896b",
".git/objects/49/a3a6f4898959699f67e113106123da31edc440": "6895fde1f90181814ddabb307a7b1af2",
".git/objects/4b/5a051d3cac3be9d1ec2eb13b8b20a4051e85af": "4da723f021c2f1a89615c270dc663b17",
".git/objects/4b/6196917283281d13975b46a4a839d4ecbf0f04": "0916b3f8dd097fded17749e27f1f3ff1",
".git/objects/4d/4088a6bfc9942608c2a69c63cfab278f36f83b": "cbecc6c933d43c9e5cdd44cfba097877",
".git/objects/50/5a11745adeb8c6e6471c02beb8ebae7d2dcb3d": "9ee593c3025a5c37fb5008d0ab4a58e9",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/b2a94dd35bfa04a6fb993df473c9d9cdbaa047": "6e4ca24b6641964ba8f61b4d1c16d0f6",
".git/objects/52/ff5855054f57f2b3e93e8651466ea93257a396": "be9368f833594dc7ec9063c3860c1725",
".git/objects/53/72a949be18e02d3640b91a37c738d98df46e1b": "671b8b1bcce23be8da90a94d49bee3a3",
".git/objects/54/f0a6910cdd9d31c42b6cc0e345a0e555762f69": "4c806243aeaaa882f2339696f5731c7b",
".git/objects/54/f8f727ada7ce7d1d45e432c9559750addabc05": "fbea4bb1a6bf02c32335d9de7ce4a29b",
".git/objects/55/ab0f3ec288a1a87241b4fd0e686da88548d886": "33c5413df6855a9a212c293c7cdaf1bf",
".git/objects/57/47784d485267d0f9a4a814db2941c2beb2ff84": "f40ed2c496dab382eb95431008260ddc",
".git/objects/57/6bb7d80b64391abee94adc48ea11461ee8893f": "53b08a6e46943701e5327f1f9509fa7c",
".git/objects/58/b6a55ee6595b150c91897728cdee14f0edb1b3": "e4dd5ac3ea09051f5d78c087b8583ded",
".git/objects/58/eefc6a2135b44e40ab431ddfdfdd39545c5e22": "3efb139d4a5b913a3f0d758c571a9c6c",
".git/objects/5f/9a25ee55ce0bcf9e7acf129df3bbdd212600e6": "9bade611bc61b2b48add4d58706a78a6",
".git/objects/5f/d6037e056bd09fe5ff94011530b93825bfb5ac": "0159b882d0236c524f2216759f036721",
".git/objects/61/1bec5497fdc669d57d31239e8e2f99e59161de": "0a4ee82c05e23e7d768e0350da39ac8b",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/2aa9fc8a7d1b6c2046d01d6a38fa844635bf98": "cce9594aacd60d9611fa17302dc7b2ec",
".git/objects/64/7b0e4a2cb406b39214c2920b0eaf9ff5351cef": "26e6b4d6473e37693edc2af06ab7f788",
".git/objects/66/1c0a5f74da67a847354c63df10dc48281863b4": "ce0623c30479fa399063d270912cfd0d",
".git/objects/66/975b1dd11c002e46b074dce1157556a68e1814": "3df28fe608022edac2a3ccdc5955bbe7",
".git/objects/68/9ebe15cc49f9a8affb129c9bf57839eab3f387": "f534d1f6366ca016d90aa2c328eea907",
".git/objects/68/b6459e18a8bbd9baf19ce6533b5f2445e0ab70": "3e91bb3b35ce916735c525d08b870776",
".git/objects/6a/37949e87f7b2946b5c5a8f7fac7b56d70ad0c8": "7eea2210423b0356301548dbe5d710b2",
".git/objects/6a/5a60ff211eae4de95fe64fdb85a4c77ce925b6": "17b33f3310dfbcada3f2c69f1d3ea9db",
".git/objects/6c/0b053ffaa77e718d90a43790c7ca857d929379": "180dfc7645fe7d9af75b00620c283c30",
".git/objects/6c/2bb86e2dcfacff5ea653c651f3ab49a0632e6c": "396e7688f60dcf177dc334bc72e09859",
".git/objects/6c/f0bd8e9b1f0f70009478cf885053ed25d058da": "1155695ddc4e8cda73c052b1b43d8416",
".git/objects/6d/f21c6daa2440dd8c920b554885db658b8812ba": "6528b3cd7bbaebaeb09dbe88fe2b6d0c",
".git/objects/6f/11543ebafef278e51387ed930b7d053dede8d3": "cc1e0500b1e197340071bd63df1f1c76",
".git/objects/6f/c124cfe4166b7c964169c651d9f826115072c9": "2a722c002385ac87c270c03a08818a38",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/77722bf964ca65bf68ca6688d02faff689046b": "9aebc0fe164889b71c48096099e887df",
".git/objects/72/2dd24a2bff6fe405bada14a722cf909879b77e": "37847456599a6fe374d13ef5ebc9d5be",
".git/objects/73/ba1bb53397446ff1024ee8482fc93118ccba92": "a802fbd86dcbbcd5f9356a08e3de0b30",
".git/objects/74/16a89d92f7df12e967223e211f7cb748c80f45": "758ad8383052ee5963f63d91ed71cf53",
".git/objects/7c/1ff4011ea8415e8e939427b4848746b5dd9a4f": "a2e6183019c3cdb63ad8daed9054df73",
".git/objects/7c/91ed30ba7977caefba19351979c17ee96a1632": "3ba75ea3f42aedee8d93d137b9995d8d",
".git/objects/81/15c7561ddb55a2a7ed36e65930d1fcd6e1b088": "0495732e96d7c3bf6d333656024cbb8f",
".git/objects/83/167759dd7fe6e8d38b03a9d6f585a6ed03953b": "93628ec41aa3db77b9bf4110347b2bd2",
".git/objects/83/e3dc9ac2fe0b635f138abd0362a8d590311267": "f18cb7ec88a86c0815c9b88d395f7ef8",
".git/objects/86/6ad07fa8c0b2ffe975024e9cce5a24f1270172": "0beb31fece16efdd8820445323a2184d",
".git/objects/88/787f9704be074a477a8877574969ed8034c748": "8c9fcf6f1755ac3af436d6f85c8b1a56",
".git/objects/88/96d5894cc1bf1f40064d5fd33d34e6e9ed9f8b": "24eea56aa56d281e185a2b93b98fe470",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4e698ef4038b87ec424e054df54183613cc371": "04f56d1b47324440ab4ea9ac738773f8",
".git/objects/89/4f595bf7889e26a244667ce94c232cccfe7773": "c0a40909c56a99640d4b29050ce34717",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/ecdd1190396c6993baed68ad1f991bc4da3150": "541b3966ebeae1c80109e5658bdcf7cb",
".git/objects/90/d23c307c11505bbf7cb38a13260b3a842e589d": "8528fdb88e8d7775b1b6e49c00ecc6dc",
".git/objects/91/ceb55fe84f5dadf66d022cf8a62261d5287108": "86f50dcb8ad3c242961d9344ff381204",
".git/objects/91/ecdcd29e88f410a9d760834e3d871adf7c300e": "4fc77893a9c61d5e7392e2df37f44d9a",
".git/objects/92/660586e55ef1d3c426d3772a1b3752c9931608": "bbc0a5daec0ffc5f30f89832dd44e868",
".git/objects/97/87acc76fadf7956dddc2e747a9b9b3ef8b876c": "e23dafed1692f3a55f0a7cb0e6304af5",
".git/objects/98/b5795e3901cd94219875bac2bbfdfa8e981f67": "3c46ed3b4b62c93f5e96bd4cf2709c1c",
".git/objects/9a/218fd14c668331b4ffbf1bd975e0e4f2ea2e4c": "1636f41f83b6ee1bf4d9041ae13cea8c",
".git/objects/9b/3616b2e6afc6dcaa764b6582b0b8930279bc3a": "e24b6c0306815560aa979a0f5ffab8f8",
".git/objects/9c/94d669a3cb07e0fd57ea27d9587aec734ce74c": "078dc1f959820902600abfb9cf2814c2",
".git/objects/9e/a24537d2b710c5e15fe8755a85373b0376d803": "0bd73f318bafb0038d15a713c537687e",
".git/objects/a0/6b6ebffb0fdd47b0be92f639d9753342c4581b": "b3c60a8aa083d6ebe4b765b1ae18b018",
".git/objects/a2/0ef81c652add4bc1740688c9ec8f75b35db246": "f77393c1470c8968369a6c63bae0dab2",
".git/objects/a2/2fdd28a78c19fd552700afc5d6ad3e4613c1e1": "6d51da61147d03964e956e45f44193a1",
".git/objects/a4/727380799bf056ea30b6553d699e7c1672b410": "10044d3a415566539da457f860b269ba",
".git/objects/a4/a7f7a1a080a96bd510c6157c2be368b2d9e151": "7fdee8a6cfba69ae943ff1b9386430bd",
".git/objects/a5/240afe3815ff69da81104352a55fd584e7211c": "40792da0f6f4d1928512673a0734f8c1",
".git/objects/a5/596e90f289c93d94006e18070a279cf16e9fdb": "1c08662d78639bf1a9f8d67b04b33d52",
".git/objects/a5/86eaa66394e99f60759fcf0844296df8754b40": "d5d4ccb4790e475541eda280dfb04c8a",
".git/objects/a6/c2e563375553f55f86f2fdfdc1d36751de7997": "d0ac96e1d6e1a610f172c4f4dc1f58da",
".git/objects/a7/18bd89be7fe9716a503b979ee99eb59c2e49cb": "f68c64fcc026a62ecfe8bee60ae9a24a",
".git/objects/aa/3da631ae14e9fc861f625d90149e0961594bad": "a21ed7aaf9147a13faf14742f9580fa9",
".git/objects/ab/29373da5875bad3d2d764388d4a29993d5272b": "16969cd9462bcfbae9dfb10d95f8fe96",
".git/objects/ac/57629d7452b693b537f1dc159ea8d1d340be41": "dc434bff799cd374c0e69a9fe12c0ffb",
".git/objects/ad/464846680209a9d1683cd4327c48a42729d9fd": "5e3a38ac4b292880417fa050cd6d0b82",
".git/objects/ad/aa49a552fdc95abebf121f795f4983bbc6013f": "b3bdb601e5ed54dc13a06488ca02d1db",
".git/objects/ad/b571abd5495590a32d985ada886b90bab0571d": "0512111786a2c1ec0ad5ee5e06706e52",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/c10be5536050f58c1bc50fafb9937f5984c859": "6b040eb4aa51845e0939ec907663f057",
".git/objects/b1/e5e53909977e51d57a3c3c670b0ff5620510c0": "4e4452990077b7a2564c9a1ef57ae81b",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/49b49ac19dbd445b643b304c8feb0be22fc2fe": "ae563ca91c7ff79bc0727b87762b5aeb",
".git/objects/b2/535582d3238e29e96d1bad6e36742b7910b6b7": "0b4384acb5dcb5b13a0ba4fa8078aa74",
".git/objects/b2/c387878256764be90f2003c96310fff8e90622": "238febec2303180a4a8859a649da929b",
".git/objects/b4/bef394e8c717e0b45bebecf1bdf04de159e5b3": "4a90c94662eb5ddac1394617ba705164",
".git/objects/b6/69ff82a66b8cffc9f0406cce9dc3b290ca12fb": "1b55cf6c95fbe3df49ca07f2d9854378",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2f9d91ce7be55a7fda9ae7b08453314c6021d4": "f2816625a45637687cf032c87fedcca0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/59d0e6289ff8c77edcd55081468dc680805a69": "6d1e3f78a08d39c0574233cfc8110487",
".git/objects/bd/018ed47642ffaf5bb5bbe23cf76542c8015c4b": "280122b6d9a315618a7aa68298e82ec3",
".git/objects/bd/f9e390771c53248e807a913d6c899db513aa15": "820f65932ed05e86b548574e466df252",
".git/objects/be/f551a758072e1c292ae16b14f30893c2cd60d0": "9bd09d9bf0731896a5c316beec7499aa",
".git/objects/c6/6d21c1c7cf88f55528ff61d40a6ee1ca2860db": "a84781717eb1aef221e9f54c5ffa7b80",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/3038d7d0ff31900cc832df6b7b23d8eefb4739": "cf02fa980da3489c2f63123b82d9a70d",
".git/objects/c9/5cf203be6f9fd3458575b8bbc58aab3fb6bf10": "0089852528f0c10e262f5b9fd9e45799",
".git/objects/c9/a8f5c9692962170be42bd05cdb77c647379c3c": "b7a11d5af528d0f33f67f53cc0aea0cf",
".git/objects/ca/788f636a00e4f13a2cc45ee5b98a808a9300b4": "45c65261d373d322f1d977177403009f",
".git/objects/ca/8efd714bc1e4bd96bd52b832e05a9fd0398d1c": "00c56a65d3aaeeabd5c30142c72bf59c",
".git/objects/cd/d6d637da56002fc84a2fde3996cfaedc87c929": "f4ebc0fb0a9b36e66ac18efa186eb214",
".git/objects/cd/f8c952d1f253fe2a49bc711a766728c342b6e4": "143bc848932f1acd04a920f96d0b7bdb",
".git/objects/cf/34fe5573fdc7a72bd39dc369aeabd0b435c268": "827f417f9a912fd0af135d08e8c3ea4b",
".git/objects/d3/7e3187d74640bc990abb8b5a3274046f2aece4": "9916f0f1c51ba3a358f57aa80b0b655b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/85509696d1270af811d8e7de0cdc441d2c2b45": "b8760352ed055b014e9a5d6352dc0a02",
".git/objects/d8/b692ebd2cb189f67d3fe4386ce937810517c1b": "a705dcdbfa27d27949aaf3d3e20113b0",
".git/objects/d8/b7728b82396b9c4457354c10fefa865e0fb7d6": "0ac242975d5c2bd5c41cb567b33908ed",
".git/objects/d9/81f32519198ab45895f180144c0bc70de20252": "ed8453f5e4033a964103dbe831962713",
".git/objects/db/dd4e912b3d6a7d6857c617e13a2944dbbc57de": "994f8902e54d9453cf256c2277dff001",
".git/objects/dc/04af7d0532753224a280f2aa447b2b48605cf1": "08228a4f0b9c2c0af0411f6278991902",
".git/objects/e3/2000f2c4371ef629b0e24d065d398d0ac216b5": "07978a5f9d453fa62213585074a7b06a",
".git/objects/e4/89763e9f6ad696fe868b15660b5feb739f5f47": "3962cee91dfc89013623247b6fda9573",
".git/objects/e4/cc16d98ee65879267c8e7bae00845970ea86cb": "66ca3bec1df7b13a012006ea266f3d4f",
".git/objects/e6/f465bde9dc3d82425e8a089f388c59bdfc0f61": "d207d49ddc6ede703e39975ade759dfe",
".git/objects/e7/4b26ae1983d66877d28d3c827feefd0eea9d12": "9c19e8dd9f380a41c775cfcd95252960",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e9/03059d2e6b588c49cd26b12221067833b464df": "14d59babd73d199549ec97d28c0a9a1e",
".git/objects/e9/ee63b458e07bd40b2d63868b9758d79f0c13f5": "1e674b212b09159a60ef36b05bfb331f",
".git/objects/ea/1ed26064d3f59b621450be323c7281cc4d770a": "7597d07c1fe18b13666d48f6f119ff7f",
".git/objects/eb/558f67d3e6b6d65b8aa544183ef97b391f5411": "d0fde8c2050118f81b03278363fa443f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/95a578cb47a2f4958efadcf629c4f9b34d69e8": "c1e6bbfa19d2ca5492bbecfd54cd44ef",
".git/objects/f1/32a7c6097208a200b45e0391dde9eebd5af14a": "d0a14f19f7e97bafe85364ac59d30c2d",
".git/objects/f2/21165f5582207f045efc4ce0f3b276d94e7677": "f48c6515c604ada0efa0ba6fb7f2f2fa",
".git/objects/f2/3abe49f3827b79728edf1de05cce807b2512df": "497a2574c2d375092af67540f60c592d",
".git/objects/f2/acc6faeab93c7a214f54b5349c63243098b33a": "b04a79cd4156da9c8d91bae4cbe08b43",
".git/objects/f3/4c9a13c692eed7c7f06f4c1e076446e845e5a8": "38266cf941079133980f9c0dfe47389f",
".git/objects/f3/8d656b92e0fc3015657862e32879fa8892829b": "9f0fb8cd4999e25ac369843c5678b48e",
".git/objects/f4/21c585df9f1bba93f1bf2ded0630d9bfd0a8bf": "d5665e0bcc590e95b559a2721cd46674",
".git/objects/f4/7d6d8d5b0d6dfdf208968afbbffc90de21ff88": "918c33d0414faa8f52e24393eada8c68",
".git/objects/f4/d16a8f8dd813702445f17026ff7f61e4bed56f": "499276f584bc6f094e079d2493f58780",
".git/objects/f8/abac4dd4a51df8c78f939a9700b3943b0f2c33": "0d0b9eb6557f078501c71bad23f36a7f",
".git/objects/fa/299506b5ef2b5991d5d06e1c8a3ceec93a5f42": "c3ed573f2938030c9711b6887773ce39",
".git/objects/fb/14d3cbc2dd5eb6b43ae6b2da108ae77a8d39c0": "67e5dbf1565bbc4e6f0180e18875542d",
".git/objects/fc/d8d4f07f2afd38b92ae9c31b484c3a345157b4": "5099b0ece4fe2ba04df5223c86e14ef8",
".git/objects/fc/d8f2ab4a7a523087c11e0187b0cfb38dfac41a": "f7335eb6be1da33fe68cdd2560dfb69b",
".git/objects/fd/071f52c6f61f96d82d0ff3a9cf965fe07f8941": "6a10a426e14801de8bdad4d64d92c363",
".git/objects/fe/64704358edc21f5d3863dd1ab01298bbc9aed8": "8363e412c2369c0eebea23625c57b1e4",
".git/ORIG_HEAD": "f14cdd3ae79edc5922cc675180c0f63a",
".git/refs/heads/master": "fc5949a0ca26091a645264cb3319fbc9",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "fc5949a0ca26091a645264cb3319fbc9",
".git/refs/remotes/upstream/HEAD": "bf569b65cefdb3f84a669d0cec2124b4",
".git/refs/remotes/upstream/master": "80dbc8201d07206c57dc0691e4ac08f7",
".git/refs/stash": "3a4f5f8f8c5fa2ea65523e1ee2eba239",
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
"assets/assets/loading.gif": "e4b6323e19e57f6761b1ce47b7d329e0",
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
"favicon.png": "9c66dad9b511b648ce3910a220e16719",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "809a72f4f4a6cfd21c7666b2fe24078f",
"/": "809a72f4f4a6cfd21c7666b2fe24078f",
"main.dart.js": "9be64e51a67bac22502cfdd5c7231fbf",
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
