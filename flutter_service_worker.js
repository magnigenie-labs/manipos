'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f4b315fd583736bca863573d9dd6973f",
"index.html": "24db65813c134db62b63280e882abef2",
"/": "24db65813c134db62b63280e882abef2",
"main.dart.js": "57d87694adbeebf351b1c3164ce822bf",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "df2ee735bceee0c9e7fc5e6e3822f073",
"icons/Icon-192.png": "5bdd263eeb3abf30aa0abb1384ce8685",
"icons/Icon-maskable-192.png": "5bdd263eeb3abf30aa0abb1384ce8685",
"icons/Icon-maskable-512.png": "df2ee735bceee0c9e7fc5e6e3822f073",
"icons/Icon-512.png": "df2ee735bceee0c9e7fc5e6e3822f073",
"manifest.json": "8a96521f5e55cfb929d3f0af7eb01c3e",
".git/config": "1f20e045a7d9982dbbf1ce84ce385425",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/0c/c9e8a4df3b4a186bee216a0027572f49e97d16": "3b1abd22631b0dd5526d98c316f9b6a9",
".git/objects/0c/e039bef438b65bfc66843dab29efd4ca923d04": "8e03e2c405ee524f89f1bd4184712e49",
".git/objects/3e/f428d62fa75461ea68a75a4eb74b06b98e47ef": "417c334e2c67836b4a83a0021181ca43",
".git/objects/3e/7ed1cc31dc7c67411bbf9b28e671c8ad054918": "7489a3ee5878c6827a1f2de0f80400d1",
".git/objects/3e/968f3aad408515529bdc029fc1154ee661b1ef": "cf45b73a3827fbc9020cf7efa43f0c56",
".git/objects/50/1a049d2628c57d02b3fed180d516503a6cd10a": "1eb90b5df8a5cfc2ce8c3c9967e92989",
".git/objects/57/082b2ddbc24d37a404649ac6c3b22398381881": "be87d462db2581af0be94e597e9f5e01",
".git/objects/3b/bad2a8be022a5bfa26e33cd1b5b7824a51bc7f": "b14c072cd4a2b08ffbc12220fd1293a2",
".git/objects/6f/af4fc8835616b591fb9a795c72874637e33805": "d167dba9b5e14446c63acb5f6937482a",
".git/objects/6f/e6ace652056b4ae55f14c28d28d9d072febce2": "12388c65e2730820654276a6bd79bb7b",
".git/objects/6f/27edd4eb48b12ce3e9a7f02d50b2101c643081": "0177991cf75d5bddd34a840fb113c74c",
".git/objects/04/52b30abbd0375db99bd6427eb03384d535c4cd": "3d0125d880739ab7b0959294b7b355bb",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/3c/50584ccf7606ffe84b2512c05b045a6cfa9543": "4e1fb28fc5be163ace33dab417092b59",
".git/objects/3d/e9fadcebd15ee67e24481d91a982dc725e16f2": "4ae9880743b8d9947e1af4d947f3776e",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/58/ce529168f3bd7abcf47fb466f777c7f3fc2777": "acc71b9b60008ecd327bf56507352b93",
".git/objects/67/40eb6b5b3bbceae12936e33b036cea4c9ea39c": "f98fb4ac33f480d2d208fedbe0026fef",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/94/e87e3398e24676d3e85d654fb828f41191d537": "c82f9fc2f52b639cab2546b3dda20db5",
".git/objects/34/667d008ca1d52071812daaab9c51a1dedfa181": "d2880305e409609f8fb6e73c74ccfc0c",
".git/objects/34/dedb9784d6a0c13f3363439cfdc321693f55f4": "55578f5a62a7282e5cd60d3f0ea40926",
".git/objects/34/ac452fa70646e12fe64ed541a40cc0d83acd5b": "3f0a8759a88ba582448b95c19cd1fc30",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/9d/ee5dd26a2651689012143b69a18dab2d84d1b8": "ecda73995c07d5409662169f16f7cd4f",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/a3/3d1c756339b2b31a44ff3354d4f45b0fe89e72": "acca40e9c1a312ad03ff25642e34e538",
".git/objects/b5/e70bb8c38a0e1d233f1503c1afc5315d435256": "5614337a6a1e35785782ab7fda46ec0b",
".git/objects/b5/8068ff78323fef9f51b522d33314a79604a378": "33cdda63a9ecb5ae01ed080911db6c5a",
".git/objects/d9/adef84faed9b0367678adb469f2bd4bacc1717": "b5a0a6b4a626f2820681aaace8ecbcd1",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/d9/60411953b5e7daeccf119d4a409ebf677a4511": "56876cb64d86a259ba61386f35ef5c4e",
".git/objects/ad/66e15d475d378df69b1796ca95a13abb63a6ad": "052c0903b6027df59a57997a940cd652",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/bb/9b7bdcc0f454bea134483b644260a24ce9ac41": "a8084e96eb33a5d5d830a5ca0dff67f4",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/c2c2b16975688aacd4c9ee59b4c508d2fd9134": "09625ced22b34c72676ac77cc8614239",
".git/objects/be/318332a5e315efa11a8d6f694add1f8288bef4": "bf4374a0be8a2c3f08d3048c8a4ab9f0",
".git/objects/b3/f2e4b2d17acbfb3734853b8776257bda9ab251": "a159c504584818a7e802219f4e70df3d",
".git/objects/b4/baae1aaf7b5a876dfe65e6c44c6ffb44229b22": "daa7f3c3fbe3938f2a6ccff6c7387e92",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/bd/699aa9fdcd2fe64505204be2da00fd7791b655": "5d56519d782e6dd91333de1217780193",
".git/objects/d1/dd784fedfdc7a654c03ead252f4accc0b187b9": "f563daaeda2a3e38561318037770df1f",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d6/7e01247c5ec637fd8f6544e0e26f44b50932fd": "5c1d510c6dd25181edb2f70411fc27c2",
".git/objects/bc/79ae2d98e5f114292a748c4ce078cc4dc41bfa": "4c566d491d6be4d7ee1d0f38a3d310ad",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/ae/66027ed0dfee187ac8349052b789686f097c49": "133d93ba22ccbb3ea346cdb830d0dca3",
".git/objects/ae/13a56e0ae83b2a226900513043035bc838ea61": "4cc19fb2e1fa6dfee6c6ab89bae047c9",
".git/objects/e5/89988a503bb1f0e834a8c188160314a7b9104d": "9b67b5f1867eabcdf4f9a7931bfe928b",
".git/objects/f4/ca02bc7e0b8c77397da23aa2ab8567b0eb9198": "cf5827da241e2c1d3cf534f24f0b2d8f",
".git/objects/eb/8afe52ff86d31dc893ff9f6bfb3baf08fec4e8": "49485866ec271dbc1d4fea309fc625be",
".git/objects/c7/53864f09f96a4cc5ce85f09454103eb5529962": "0aa6ecdd63babd718efdd9c549751b9e",
".git/objects/fc/504f25393101c2c39a8e15b95a17651d938d70": "f8de026da93fe599bf4c5fc0c2b22925",
".git/objects/fd/8a61089b75e1e7c116826d611ddeed9a7f4393": "06f13aff289d44f17805fe495115aa48",
".git/objects/f2/6f9f4597d21e18c7b1fa836b08e354b81ccb70": "be2cc3dba6f5e10fb9c1a6752bc1d8d1",
".git/objects/f5/982075aad7da9f650449ab545f472472d6b2d0": "f98f8156ac232e99dd9134068c97286b",
".git/objects/e3/36d6484e647318ae3b2620a6cf4b0554df0316": "d130f626ec261391bd16b8367152465b",
".git/objects/e3/2206aa713e134725afd459915abf3b6d0419be": "33f8401aeb9d518e1357ba693549ffba",
".git/objects/e3/14edd717ce82b289d16a151af5313d2d160b07": "9de3879f206c6a54d0c9e0fd789fa9bd",
".git/objects/ca/fb383c249db988c5eaacde50f0865f807d8b2a": "db7be84b420b87aea6cf73872a12af40",
".git/objects/e4/17503b68c26999f26d46646419123d6c5cf779": "65002a5f4fcf38a343bab6c409d98765",
".git/objects/e4/78d76c505a13809fa4e6d575a1262f1b504201": "7d7bf5d5313b68caa6c84652284368a9",
".git/objects/fe/d77e7e31b3adc8512348f0fd1ab4410dada592": "900f52c97c8decad9346e3f1b143d82c",
".git/objects/fe/1d08a28fedf0bdca264c43dd9708d1947d6e9d": "f8c775e2f856cb2aa8dc60d86c792fa3",
".git/objects/fb/8d7b7568d3d8b74cb8d8e6ccd7b1e87365bac4": "fb158389969b13376dcde9ac4759cf9e",
".git/objects/ed/c07e4e6169bbb7add909bc8a68a8982ab57fad": "c9c376518f42fcdc54f8c0202df04c96",
".git/objects/ed/77745a458f8368f14f4db1040842699d18aa7c": "b6dc26e650f20f243269ed07de72e5f3",
".git/objects/c1/4577a983f6993acd7f7ccdb6bd572b9d6afd9b": "717508bc16791c6abaf9d7635d529184",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/9b6232418da33a1ae0d032ba1bfb4044cae4e7": "c801839b4777d0ab3c239aa395b951e1",
".git/objects/4e/bb419c46394641dfed7c6fde510cd64e6f505f": "96bd9562ccea59e489f44718c85f149b",
".git/objects/20/5b2843a7361d45b2069086123cade0a4f98cad": "af69c572720ca54b2137f038cae5c635",
".git/objects/20/ceab699dbfb79ef12fea4c6aaac5d0c52cc86b": "7cffbbea80e3beeb62c1ff6afe57b16f",
".git/objects/4b/fefe2cba8224dbdb5132025626c26bc2bab104": "4313cb0456dffde5fa15b7a0141806c1",
".git/objects/4b/72cd5108a2d6ab3f9dbfb765736a85c5d5b11e": "59dfd52a1be568cc37c0051a7fe9d332",
".git/objects/11/a589bb4196dea30b28b238e1ccf24ec722fe3c": "44750be862b3e241c4d90ccacf6734e0",
".git/objects/7d/bb6995ce80371517595e064ca0aa5773887bca": "453376d0c36e2180a57575d8fec097b5",
".git/objects/7c/d4b7e7f2c293e970f854a865bcc942ff9ca544": "ea378d53460c667fcafd0957730ed843",
".git/objects/16/31448f6f23d6fb47dc65b8ca649c1c5fa2ba5e": "58e076f5195d8b3539c922fe00395aec",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/89/fd43d084a47b9d7598bb14d52f769a5089768b": "46c6309e3ae250fe428ec42d913c612d",
".git/objects/89/26ddd1b44e33570d37a96406739d6f9eef4c5c": "ba56f78eb8a7bfb4e3b0d1284e593143",
".git/objects/1f/627e2634c08de9e4344e38004f6e7b09d23c25": "5e7667ac9f934c2c205597a90a28612b",
".git/objects/1f/7bcf49a74c910de3dfea863b1cad47443c285a": "4af0bca993c16b467e43e055337a804a",
".git/objects/87/68c4b5c7d0af7bc15b052d3da3ab9f76c8ae30": "5512951ac9ab41fac84c80487d0fc164",
".git/objects/87/36bb78b481ae5f9d67dc50d0096afce54806c4": "5f6b3a12016c3be86b27d20e62116bac",
".git/objects/74/fc975543948fffbff2f805a7dbbb39603def8d": "6ddcc1b1a537541550859b351b6ac19a",
".git/objects/1a/f81202ce1bdd4f95858aff3b15582634be0e75": "c76250d0e021bf97879f45478f6c9659",
".git/objects/1a/9ec0d34d3e98695861958fc0072ecc37a21319": "93092052471caa896bb6610208495d0d",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/28/59afeee99c769732e4c4ae3444d9f463337ae2": "562bc71fc84fa83977fce97461d7cc2a",
".git/objects/17/41e30a7e94a326d1f2f6178fa0d764d10217ff": "4fce0d755f023fb2bb618383fe5be470",
".git/objects/8a/6d8543d7b2acdd2d2eb47ed4c3e5c2e7d16387": "06528e4554ec4a93016b268e97a7ecf1",
".git/objects/8a/ecf2080fbb4c04b1a6fd2c45d19cf5844af6b7": "1b252f1d52e7a6c7d54d62447ddb90cf",
".git/objects/8a/6ac6855dd38e2641483c06febfb7fd3f8d4498": "f532efc72ea0d29800f32c45e3407129",
".git/objects/7e/7d34143787cdc95cbd6b90b6e63506ab8440d1": "00e26bead35c3dafe248f0eef50bdca9",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/26/3707e34bc2cd066cd71bcada6bad42e99860ba": "75e64e261d73acc09422eb00decb3b0a",
".git/objects/4d/c1f30f0cf8ab5cd4506ddd25e3ce49df971e12": "e21cf9f7e60d25a0e074a9ff6c06db07",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4d/409e03e6929ca1a70d1912931de4f36928dda5": "adbd0d234758148a138208d987007944",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/81/239886d6fb79df49c57e0da505dbc9badb00ff": "e70eca8d655e018d489f52b64b803fc7",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/81/beadcb9698b720504347eec93d71279c004b5e": "f9e754ea76cf264f17aed9337b67cd4b",
".git/objects/86/21e94889e208be926e8157cc9dac1a3a8a0507": "206826edb8d43fdc3679fed3159704c4",
".git/objects/86/daf0c4f0ca81154aa348d26c0de302e4d2f9eb": "a1e2c5dd1144212451f558f5a7634e0b",
".git/objects/86/b44338c69c86b211bd99b330d437c8abeac4cd": "4c440108dc82135c30850f08dab50b9f",
".git/objects/44/313ca448a294de7a8e39b816203390edc52377": "ea2eff9e264f5bf8ffa3b6310728c416",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/2a/27e945b44b1f735ffb8df30eb117fb90871ca0": "82d9e2c63406ac2e0184831010331e15",
".git/objects/2a/a3face8458add8b7dc83e1a4ee2446eac012dc": "4366dd8cb62d7605865c799c202a7c69",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/2f/b04bec8551fe45872356520adcc04a5a49f101": "35f8a3075313340ac76f7c2aa1d0b6b0",
".git/objects/43/e802336c0fc2fc8a4bdc0328ad35d092ddcc85": "0b4dfc2c2e2e2a4d8218f8855c55eeaa",
".git/objects/88/d0f1ebf8d845edf0933fbb90375324b73c3a49": "7dd9b2fe00d490fd8ce6dbeb49bd1879",
".git/objects/07/bacd778f744094aee1193fb504a900b4fa9eaa": "cea61c9424d96b512861d0e197d8d79e",
".git/objects/00/27745fc904f00f3a4e8d466cb8291a1da17ae8": "b1dd6153925c8d9cf660eb46037c0f10",
".git/objects/00/136ab68af0128854a906817346c9c1892063d0": "08f25c802346ce79fbf6e33d1668e488",
".git/objects/6e/cb8bfcf34e85ca6d46cab99842faa94cd36b4f": "889cb2cc20083092067dc2fc90aa3d75",
".git/objects/9a/06acd1370666d333f6d40fe4b552d99ea93387": "19d38e755f1f90efd614c4aab3abbd10",
".git/objects/5c/9f97ef03b5e9e9ffa5330eb962180710e13889": "ec3bf590d2ed3834310b3ac8923f7e10",
".git/objects/09/6d232e77fe33db6d6212dff692b3c80303a91f": "33cb7817953bad838db750a44f63ee39",
".git/objects/96/2538e3d5f0bffd5319b02597038a4af0b685cd": "115eca6897a093772fee861dfbcff35e",
".git/objects/5b/46f19856a1267a1094a10935440f8242cf9e7c": "0fe9ab07feeca7e015363cd18b7b7ab0",
".git/objects/37/9785e189fd3574b86d8e8362a83b3d675bcbfb": "3f605390df3ffae70e99d20ed9880f3f",
".git/objects/6d/15e1c5cd0110afffc5425d1b7b9145fae45098": "ad515933a2f26c2c9cd4724550360a32",
".git/objects/6c/8023ddf6a0b0ba3862d7695c6049845b936c6b": "f60d1f098ebfbd5c6642ca8a62a279a6",
".git/objects/99/45a5f5c80caca1070b6a397e135f3a719b6a1c": "53a5c86bd6001be5f6b88b99feb13b1f",
".git/objects/99/59c8dc1e3187293731fb62aa94f9ad2087f409": "8c2ff979a65b53f25baec3f800768a9d",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/55/0ae6ddd002e7d25f716267f10205aa990c4c20": "8269dd8318e359af95c6071c9eb7350d",
".git/objects/90/4b6d807a5bdb1ba1646cefc4a9e16c5907aa92": "3684823ec41525fd17bf78a1ff6e971a",
".git/objects/90/0809a3a15e2e23fe32daf9961d0a100647577f": "f835f2967e18f0bc5bd4274705251f0d",
".git/objects/bf/1621e1239262ce598b909f7a1d5789325d7707": "42a51036a49239ee87a6c57afeff034b",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/bf/d73bfa23852fedf03c5755a494102e0871dad7": "32ee6ed9171c16d6dd461c3ef1eeeebf",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/2635b7bf3306b176ce1228a58000090bf819e7": "5871c205514b2e51382da474877f4fa4",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/ba/70a3def1249ef21771abf14d57b7bfd4596400": "d52e4e64c132ac43ffb67379fe705051",
".git/objects/a0/1ff57079c6cd2b5767b8d0e1a35174d6c4bf77": "b9c6985fdd5997beeeb31aad9e883995",
".git/objects/a0/8e748c3eab5e93e71f902df5fa655ffe4e3741": "499a16078fef4ddeb16d31e0376fab34",
".git/objects/a7/bb3d18d6e97af3c1c76d7443f606c2e828dd51": "18293367727cba7013034a45d938b6fd",
".git/objects/b8/9bdebbba663a15dbe474a7ae7e660715adbe16": "54345203b7b1ccfa5ee11c12d2f3fd86",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/af/799c9ffae26690c274467195d374af87fe9f96": "93260d4ec0648563bc479f24f266524b",
".git/objects/af/ba5900c5eb80b1897a4796e2ae4bb7b7298c02": "e45c01f014ea98e0d932a499103c9689",
".git/objects/db/122aba396645e45dec62eaf5b6968812ab25a1": "56bc93d1b15402efbe0f3ad947d69058",
".git/objects/a8/f0151d78ac7168708e937dee4ca2846b6f820f": "4ea2fdc755c46229fc4de0bfd78e730d",
".git/objects/a8/9710ae1eaa008a7682070311d9dbc57f50843b": "4459a32b083e203c31a3e28913eb9c67",
".git/objects/a6/24742585f35a9f9e0213c36e78fd0148c6e208": "1ea92e7679ce87081de703d6cff29fc3",
".git/objects/b9/16aa7604674087bcdc20d3554fd0b490c1a1b9": "b24970e339f8de4ae952272063c6da84",
".git/objects/a1/33a31f14b3f7714e68d40579a5f9c15defce28": "a6e3722e217a81d1db31318c0f3545d5",
".git/objects/ef/5d57c45d3c10efaab78ef74ea3ba0e37924f58": "5d443c985941cc15f6d51aca6938fcbd",
".git/objects/c4/17b9e3ed8b4f813e99967f9bcc7bc6a3621333": "510632fa078d65039b5937323bea9da9",
".git/objects/e1/3d5aa29493dd10e5bd8a5224f36cad5ab1741c": "ee1e5598fcbee8851bc51e88d07f4c0d",
".git/objects/cd/a35abe31161b09ac7ffee5a119b31ac69e7a7f": "d239b6e9935b8269ae75567ba79ac1df",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e6/c58c9a876ce4671a7345398b28cfc1adb4e0c1": "a721a6c6052a170fee02ec41e19c40ee",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/ff/e06ce48c922c02cbc5e6f69b209ee184932887": "e6f58e60e0d46061d41003ff8baeffb2",
".git/objects/e9/b048fd80c47543e0b1b2e0815c813cd13355ff": "acb6707243db94a1240759ad82754e27",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/e7/24898902c68b0a901795e2ae1722902edeb687": "3901d7eabeda5ed685aaf19069bbb733",
".git/objects/e0/61a26d3756649b23b5b4adad80e73917c4b6bd": "d9cd7986cc24ef03508148a5c460eaf9",
".git/objects/e0/aca0dacfd1e2a2feb78bddc023f924073ec243": "0cbc050f45e721498172f8fb73705e3d",
".git/objects/46/20a42186782af5c54c8ae3d681929144c8c5f3": "31b9e0e88ce6502708680f3116dc678f",
".git/objects/46/ebcf8d1d87057fa2368d82da86d2b5f0c8b55f": "748834e6d7362abd501e14faf196f358",
".git/objects/79/2e76ad2c9b39a3c32a56f6d374195c6ee6cc37": "c3a9b22680cc1669525039bdf086f822",
".git/objects/41/a091ae4e1702e1152e278b3a5f736d9d857c28": "d4b310977c4c078eea59220e35042831",
".git/objects/77/55f6ede661c2f53a4746da314f0aa818a74bee": "0acc2a24e6a8eee0ee15c366f1ca028b",
".git/objects/77/452c461be9efc165c97cb6c9933cfa4b47f94f": "22caf816a9d2c96a70e5c248b63e186a",
".git/objects/70/f887d3c022d9050906232551a8c6483e21f005": "7f46ca3c23402584891255ccadc0ad65",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/84/1d0aea062cd7534680019e9181405177806fa3": "57e6ab16f96b5e07cd4295d39e65ac75",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4a/1d02477a611886178f41d152b3af25f984b517": "f489f2803baa244f04c3f3bfdabf298a",
".git/objects/24/6a861a77e28073ff254655f032b155c3b2158c": "79770b75cba5c9b62bf501c3931e04ca",
".git/objects/8d/ffe9226c07cc72b3b47f5c512635a6708118dd": "230d2fce0e567b8ff32cad522c8936be",
".git/objects/8c/bdae5b181e3eeacbd66fe07ef57789c62f6a6d": "13027701b14a297e45e62ae42fb8e468",
".git/objects/71/08bd2c15c33d3fd6b29796cc8f5367c414c6ff": "612eafe353d4513a93d0b33bac9ca73e",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1c/c6d477ee0e37d43940321762a9dc71043211f1": "67b3ff8219cd1e03ac6bd22a0b4fd9b3",
".git/objects/49/48baf49a366d68b32a8e4c5b58bc57869fdba7": "fbc742c41553db1ed4cd20379e0d63fd",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/2e/2e0e5a556bcb027973f204348c580772180aab": "0daebe90b6943f1b8416b87f6dc4f2b0",
".git/objects/2e/271d8d4d5ecf1e2c13d6897e57263f25e02495": "459ed92bb1e0cb1430b0921eda8aef30",
".git/objects/7f/8ec9bba1a77a1b07ea25384d28f7efaca97c4d": "dab469f7b7ba3988a222ca01b5f93b66",
".git/objects/7a/b1ccd92e44877448b902f8cb48b684751bb7bd": "b5c3383a93bd163fff1d69dcc73ace3f",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/14/c28590265f03a9f360455843dbc9d28255640e": "d0902440303357bca8c453abc7a1ddf9",
".git/objects/14/85d6928a58ba1ca46bc12f674d2bf444491f6b": "e4f4a9f52ccaaac70fc37182637fbd7c",
".git/objects/8e/8186d93b04e3e6aa3bb25c398a00cbe9a9ff3c": "6963fddb6baf687b22bd11775b34bc33",
".git/objects/8e/86c4a8fdfea2a3ee0cf99df6d0bce6582b6cbc": "46afb175620298a016332c05411bb82a",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/22/9a2985c83f1d1a5897d5df2346826f3a1dce2b": "f1b94db87664d86412d7724b9e362d5e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "fd94ba47415c0b429f80e652fe69eefc",
".git/logs/refs/heads/main": "fd94ba47415c0b429f80e652fe69eefc",
".git/logs/refs/remotes/origin/HEAD": "dc11f57b9ec0f2f79b3df0ada0620237",
".git/logs/refs/remotes/origin/main": "8c4b42d2892a9a9f7c5ba9add98b7431",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "630b24d57a865d1e29939275c2b28098",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "630b24d57a865d1e29939275c2b28098",
".git/index": "3234415b8b8d8258766b286185e2dcdf",
".git/packed-refs": "3857ce19d6fc12b8dbbf31f9205d65f7",
".git/COMMIT_EDITMSG": "377ad60d660aa7d316534a8bd57399ee",
"firebase-config.js": "05f22d6d5a0e5bbec1052cdf3c91d758",
"assets/AssetManifest.json": "c50d77abbbf2d1963ac32503e7892dcf",
"assets/NOTICES": "68d12716639fda3e35934aca983d9b6c",
"assets/pubspec.yaml": "a2206373589d5f8a13d372bd94414dbf",
"assets/FontManifest.json": "65b7999f506ccbd03f05fd59b95b86a7",
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
"assets/packages/firebase_messaging_web/assets/firebase_msg.js": "d86eaf3bae0adba51fc23937fcc2eacd",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "60114762957c6a50d2e0cd7d2c5b7b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/esc_pos_utils/resources/capabilities.json": "ae5c3288b81125ab9c54fff02d30387e",
"assets/packages/usb_device_web/assets/webusb.js": "9f25775d2712a26981f326f3321b929e",
"assets/packages/firebase_messaging_windows/assets/proto/mcs.proto": "634b0fa27939a12d08d05d07a09bd351",
"assets/packages/firebase_messaging_windows/assets/proto/android_checkin.proto": "fa7733e9ef5a48e631211a0918d11e1d",
"assets/packages/firebase_messaging_windows/assets/proto/checkin.proto": "abed134d8bae0805122e67599e9a400d",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/win_ble/assets/BLEServer.exe": "d4ef6a9a944a972629a44256c15ee95b",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "9e15bc3aa6f0899c188d4f66ede498bb",
"assets/fonts/Poppins-ExtraLight.ttf": "f99f9d50a569dbcf72e3084ef1a43208",
"assets/fonts/Poppins-Light.ttf": "3352653dedd571bbc490c8be132b38cd",
"assets/fonts/Poppins-Medium.ttf": "a4e11dda40531debd374e4c8b1dcc7f4",
"assets/fonts/Poppins-ExtraBold.ttf": "0e6906b2b7be194f68b8f7b7252c4f6c",
"assets/fonts/Poppins-Regular.ttf": "731a28a413d642522667a2de8681ff35",
"assets/fonts/MaterialIcons-Regular.otf": "8bff712d84ad9b6f564d2b1692a917a1",
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
"assets/assets/svg/barcode-_4_.svg": "633cb834251209c1358259f0cc64d606",
"assets/assets/anim/empty_basket.json": "7ef847cd08b5f2ebe6770b24216f5263",
"assets/assets/anim/no_data_anim.json": "d2dfdf4e70b94e3503e767babc9c6be0",
"assets/assets/anim/sync_anim.json": "593c5bcec7c38bcfa658081d8cd27db4",
"assets/assets/anim/order_placed.json": "68c96e0fd98fdd05e4ac1f0ef416c567",
"assets/assets/anim/location_anim.json": "197e1519ef25095e56c60e8ecb621ff2",
"assets/assets/anim/no_restaurant_anim.json": "84ae6ede1ca72c8f7faef58a99cb5544",
"assets/assets/language/key-getx-translator.json": "b3c2c264b80953302d28bd896112e96c",
"assets/assets/language/Local_model.json": "a8c4285e39ce365a08be2b886fd1d00c",
"assets/assets/language/es_es.json": "582f188820213c9b4cc74b31bac2487b",
"assets/assets/language/el_gr.json": "f4d8f6b95bfa9c957beea238a4857eb3",
"assets/assets/language/it_it.json": "a0cb10d90c9af62d200f3dbcb3ee5541",
"assets/assets/language/he_iw.json": "db92c751547317a36351148ec8cd1015",
"assets/assets/language/en_us.json": "0ffb5fe80e6806816ebe29fd3356f95d",
"assets/assets/language/hi_in.json": "ae648ad515f9baaf20527e38f7f509b2",
"assets/assets/language/fr_gf.json": "342466e5d2ebbdc46133ea6137d8853a",
"assets/assets/language/de_de.json": "059f388583232ed0c4bcd28a975f5f0f",
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
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
