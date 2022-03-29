/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/plugin/controller.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/dark-mode.json":
/*!*****************************!*\
  !*** ./data/dark-mode.json ***!
  \*****************************/
/*! exports provided: error, status, meta, i18n, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"error\":false,\"status\":200,\"meta\":{\"styles\":[{\"key\":\"84258cd72dab13611314cc3f63a8082ea687211d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"45:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CBM/AWy/fT9UgYihbH2nPRxl/style_thumbnail_0.png?Expires=1649635200&Signature=hPt9J7ZRza~zip5uDQqZRK7IV4PalEJybZLTL~pzKnFks~k-Hwbb-8x1WKexGjCZWul5efcQaIwVl3ujzm5MX1gC8klkmYbL5FnCQhC81sMthBh07ZDgeMpWfxEEb6d2IMPsxdpuome-Xfjjl6WZkhuYdrzVftuiTrUXknFUKDMDxnypQSwF2c5sEni0RGTmibw0gj2jSI7NkTv1HhdbOH-ufWQZaenZfZyNiUnnBCoEyLHoNBcBlD9TRU4IukzX524SiBJzkZVn4Uxv-DsNtpdWKo1eVEXQ8tvmt0CT34Au-cl~TbSbEgDTnrqNsofj1YnHcNJPWTPiQxC2vVza8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Nav Floating\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.613Z\",\"updated_at\":\"2022-03-18T11:14:11.983Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"+O\"},{\"key\":\"56c418abffcdc98abb3ef987a6b03fc18a60633a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"234:1561\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ze6/G5U/NfzS8KWxTJB1HRws/style_thumbnail_0.png?Expires=1649635200&Signature=GYSTpP2XW4-Vmzhifkr-~3sD~gnQUCTfu~wFTMinKVAXBdBZB90qVwPz231g7cHxjXTKS1l3YrU-7FCPFPHs5oeliiuM7SX5rdeCl~jkyJczwY4DCtoGcF9yeC5ivUwqAyDJEUAVsaPg1J84fJBGv~fDKTltaa1sdpBD1Sax6GKUTtOWMx5p9ufSYz2s-Fbqzp17YEYqOkzCj2eTlL1oKxZoGWYDhEptulMnm7x3RMNrHF73Q2oL~6hf9yv7r~jm3st4ymHt4a~8IOcu86Syz65svt8srsnor5qrjE-UIPfFnPDJHdnLVP6gahbv0vdENee~1RPCeiy4VaorKM8uBQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Nav\",\"description\":\"\",\"created_at\":\"2022-03-14T14:41:39.337Z\",\"updated_at\":\"2022-03-14T14:41:39.337Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~Z\"},{\"key\":\"e6fc8e5dc3df8c899a20780b6204efc818a14d7f\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"234:1555\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kRl/vnW/AhdiDVJLGJvIeibj/style_thumbnail_0.png?Expires=1649635200&Signature=Dc~F5LRkodqwWSx24lM38UZaXf~4-MoxkSh6gO5zqJeY6MonSzpfSZHWFjcLMP-QA4Tmt7vm3G~JOLPN3ul-KWSiSoD9LE3Fgsi7OkR8YP4CMXFpqv~06BaFDk7sE~4UpBaVo7mgE8kk~~uTgP13LrqZ6ojRsNInm2A70iNlNGqT~J4H5LEcz1gURCkIAS3s~vUz9lNv4z0xUhunoXATiZEdunW5SkZLLmvY1sBarwCHrdOBGOcWSe3kc26E4vQN7kwRChcHzmAu~faNalMFpnHUbBrpMeX2xMYT6s6uIcp1iIuN5HL0zgL6VDw4jpDAZlEhXJwAcdYy6Erma6K3jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Nav Selected\",\"description\":\"\",\"created_at\":\"2022-03-14T14:38:06.263Z\",\"updated_at\":\"2022-03-14T14:38:06.263Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"+f\"},{\"key\":\"0468a0dcdaca8460437b47fd3428588740826710\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1560\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ox4/q3F/ARRG022hvYY8aylJ/style_thumbnail_2.png?Expires=1649635200&Signature=JDTg5tltg3cY1VTRqU3g6N~GilxSj03IG-~QUE0OmMPKfs2rwOeho49RLNCKIr9~5LUub8D7FjnnQZI2QJLJ5vM97MNk0ePOi6kMaoTBORW4TfcLFWElWfGrA-apv9B9rkfUl12CUA9hCzvyp3UckVzhUUeThYLJXEs1QTUU2GDFxmC8UISQ9mirIXO56PwSqRPBScQeWDDpTFUWhNuKysvdcDXcQApynLZP~Rrj-4ahRYKyEq1PuVRSwaMnJj9G2pr1KL0Sq-AFT8ARRYdTy4heGtz8U8sKRAVzwoDX~jgbBlOsxLzxEaIrCE29NjNw2Oi5Uxf4DUug~K46h5yrJQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Logo/Logo Main Path\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.328Z\",\"updated_at\":\"2022-03-14T14:29:30.328Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~X\"},{\"key\":\"404073bac29c7d33c3c7f1a16112db256be4c837\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1561\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/UQA/gY3/ObqitSv3km2aSxn3/style_thumbnail_1.png?Expires=1649635200&Signature=SQNkmJUnHpaQHS5RfOTVvoRDJNKGL9OPtA87-6tIimLD7GQJtvWDI0UzujtkhPVXNpOUXM4aY8iS4KmnmnMpeT2NZSUhUBwznU34LMugEoVr9qPn-5YeVENjsA3o1FJ5ig-sANMb~P9wqjmAjzqR0x2bEMq6QgrQl7Pi06U1Y4eGgfS9JJrC0Rpfj2b~NDhk4ZfdkPrQEOtQcX6T~kuJzaFoR-ry7d4l14j0kEAJlqOlkfCOpGPYGfOEkVKyWrNRod9YguyAUIdvNKGZgkK5deJGrfnBBjFNpliUaKfy3rpwZ6T5nGIiQ7rb3w--bM5NRzm618dEgPzRx4EqpwJNHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Logo/Logo Alternate Path\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.322Z\",\"updated_at\":\"2022-03-14T14:29:30.322Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~Y\"},{\"key\":\"aa41ac55a17c23e2237ea2fab28ce0741ccc7ab7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1559\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/O41/wVp/x5x6NYj3lbiwIqdr/style_thumbnail_0.png?Expires=1649635200&Signature=YN~o4M-b7y9ry3rrn3gvruxsnviQaUvclP0TZ1jZmnIMwZtdsZmGWPGdBV2Ta-PUYEBbJqBf6LXxzROuSRu9Rh88~Y0Tl41aURxxTrbkExuaBnfZRggY9NqjLiLnAHOluZp38Kw~wCNWghlDdHcyvgDrBfDVsECb~UFTGScMpZToMfD9e6KLEhLIl-PFvjfKevz5xT5Z0XA0qYxjawGCPWDf822TiKbtgX4E9-ucFDC0AK8dLkRQ1QV1~vK6jrjEdPVzwu8sVChK8Urfy-cI~ITWs8ElXTGbepxFC6KpHIdbTEDHR9DSH7bdyICIhiry1008jHx3H~5myfGfApTlsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Logo/Logo Text Fill\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.312Z\",\"updated_at\":\"2022-03-14T14:29:30.312Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~W\"},{\"key\":\"878cf98b608f73da55710539b4cf12d442b06b0e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"227:1552\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xjf/wIZ/66FFegTdFAaFZBg1/style_thumbnail_0.png?Expires=1649635200&Signature=TalWZoMHyXyWhaAW0YEtyVjzIszr1uWS4vJuV8P4FhoAaG7eeucvc0~QGR6h~KV6wxarnpaLDahnatL4g~b1dx6LrTJFKnpFf0lsgWnn7TKXdLXSaSeFaLPU2HPD4MlCi3~BrHh0LY5vCteIQsJ0NdlmjTniAM1RZ07bDi3XJ1xQ1EYZi0iVujj7-CsVrMgFEERnAIRx84OhvqHsxdvLNN-yZpuZoJ7G~byu8X5e9UOSKspjs-kKucE4eE63j9Ai8wRiExvLSA1Sw3m9NLI02DVyLCZyKALg1KWlUDasd1uhLRW2O3TbSrxBPgt7e02zt9qLdN7yptTbjCHMelrnMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Low Contrast\",\"description\":\"\",\"created_at\":\"2022-03-11T16:07:59.623Z\",\"updated_at\":\"2022-03-11T16:07:59.623Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"WO\"},{\"key\":\"f8f016b4e0b8cd9dd5e1bdb1e0228bf11f77f8d6\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2372\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WoU/tlp/uF0BX2MyMQe21vKw/style_thumbnail_18.png?Expires=1649635200&Signature=CyVnFc9LiEFYKJfwJgyVVgZYiXqE68NgSb8aDamupgC6x5kB~Gqr4sMCp-XLKqOS6-xrX39YSj6IGsSsZWLMdvgBsW614qSy8eNgRTDh72D4PxkebnG7KbOHiixmkKd3CQq8BbMNjaWzFe6fr6qp2WFnspqQX9JM86P-hpKHF94STpQNZFGLye5NMCZJBiQ37gSXo3KSVuDg~p~mvRZWCNn4XWKKiNoRQ4AFLlhSK-xGckTeDqeK5i5CJ3cJc5bv3c5~zFyUxfCk0udybFbOqDwa9NGBBHmbk8v~iB5F-12BrO4J98KpCZG~QN6yBkoCxTyKKTWpCaNnJqikdXf8ew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Floating\",\"description\":\"Feedback indicators bg: toast, callout\",\"created_at\":\"2022-02-25T12:33:22.997Z\",\"updated_at\":\"2022-03-10T15:13:44.581Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"%\"},{\"key\":\"ef58f49300baf80c6613b04e065f393c2d2003d3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:738\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/V8m/FVU/gyze641TtqLbgvHX/style_thumbnail_10.png?Expires=1649635200&Signature=RX-TIRdKNDQmhuX5x6YwSa~GSrbhlGXcyYECexMnQVr8cs9VdcLZZk1oddtREnML~uQlqXSr7uQWZkfTSEh9kAvzI-UK4tiigrXmcXzs12-3FiIzmLgCIrAK3jVAXSPF10QlzvaP6RKvG7f9OAZZXP~-FSHnsj1nMF6-qMlqRy38S9aIbjE58i0f-fzBdugSu9P8p4RdWymizknY6PuKbJZzAa453u4rztGklj-0bgR1aKIoz38sJhb0fJah8TRAQakiz3HgpVVAkgMb8ACT8cbYjCxzquyxC1pR0etqdGlyBb9XyY9VPQIffOrxgoCfpWg6dE6nCFSZ~e0wbxoB0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Regular\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.934Z\",\"updated_at\":\"2022-03-10T15:13:44.576Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"6\"},{\"key\":\"d426bbcc8c94c04f1f91b74507b8aaac59e024d5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1412\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/LZC/7aZ/nLKvhvAPUHkS2zvm/style_thumbnail_4.png?Expires=1649635200&Signature=JaW~sED3YLKdskuemXZdT8RRo3y5sJCQAQhJHH62vuuEJHiCZl3ZlJcoWn~dYAIDNm0efu5xjgGy2t-l6AcraeDLgFQKDLCExvJnGD7w1-S0ozAQHhtOmj-Sg-yXqGrWBMwZG46Uk0nx-GXUU8NwZkcuM-1SGrA3NU-g4MTArLiLENSyxitICz6kx9~uAXfEw2wOoSM5q76pEnhHF9PufJykV6~mJ35NS8vu2co0d9tRUvwORKuSg4T8KoaodEbhS9XrzFn-tVKWaGCiu5hkNFGIn4R5jRxR-DDFplf~ujTEOZyY1OJU075YZwEsgM~O5c90FBD~s5vPTD7hXLcvPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary/Border Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.594Z\",\"updated_at\":\"2022-03-10T15:13:44.559Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"}\"},{\"key\":\"d3765002568fd933b50a860721e45c08f3df3a01\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"20:526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6fK/1C9/DBkGPETAWbtlx2fz/style_thumbnail_14.png?Expires=1649635200&Signature=fykhH20p2pJ8F2Tsiwk7N~SHbGxnvfGLPI~~wwl2Rn1roNOzCpGLYBKtpkZPU~XCCR416Ap4NQpRoTXt~J9O0E4dRMmWMXjGBcegt-ZAXjXdjJyJXoq9NvB60irSsd797gara-zJPBjUo8yQxGsy4kbXlxVZ6tosQnp7J4EgI9-bu0~zVkYcDFjw4oIzBPEWgv~syZ7EcRAMMRbI5TpsAGNd6XYBqohr~cNXDj25V4juGZ8o7pU7o1CaAz9BzaN-aVTADxA-Q9IqAwUnXn2fPqsnq0nJ7vYiR6fW07vyvxu9eIop6dlFbaIrDZ~~FfQ96-eM5ErwXhd8HOyo5vhWPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.966Z\",\"updated_at\":\"2022-03-10T15:13:44.554Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"A\"},{\"key\":\"c1784197b7ed4cbcb6c76fd9f761898fc13275f5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2383\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/p4k/pEC/rL8SgzB7YtXh9fOV/style_thumbnail_13.png?Expires=1649635200&Signature=CpPZs1Osb2guAPSEjk~O6MXcbJk0eu8gnclXEx2~qfHTWTjkb43rGxo3g5UsIMhXue~K7XmsPrF0BiiNtBePSjfi5~CcHCcJnQlutDr3CibLE56BQr3ZC3O7A-wRqOTuCAlDQ0fObQDYloGboFyH52v7tsV19zu7xprLW4onD8-ruSfSKyJTROJcw13GwcMWrXX6Ms4lCftb-~Ter6CSdficDxjI~98bQxNBYKxnYmUWOtzCquVQt~tCgHUctCX5ySi3xqLmhZ3EPoiYmA4UHErHvL~ZaxIyt3FhQlWStjIy6Gz1o7aAAscf8Tcj6Fr18ssdMWqnB-Mmda2vtQ6FWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Muted\",\"description\":\"Muted text and icon color\",\"created_at\":\"2022-02-25T12:33:22.960Z\",\"updated_at\":\"2022-03-10T15:13:44.548Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"1\"},{\"key\":\"b2a48612311e70026985495141ff5f9ed4802ada\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1505\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/H9w/wwd/zOARmdfHzvjzlpjV/style_thumbnail_0.png?Expires=1649635200&Signature=afB6UbbdSaUlkwDFZmXwcLpbY-q~KbZ6BKFmoA7rvjYVctw4gUp749pQKOp5Y1yEfLvtON4IWJHXcNylKG3US7KoQMcg01hczM7SrkdvVxRNa9ADPF0odhu-hnT0s9iwXGtcc3VGOl6vtLfRNew12RiRQj2M7jEPSfP0FKldg83AO3E4mgyhzF6vmFkU8aQgGmgketnn2DmtLIRXwJLrpNYbVK1aotMpqJha0KRFWW1j3KR9jlzKypm1iJetnqgd0bmlSc6adzECXTyN4r6mh7q8mlXfKvrIZbQiBcUoDBkJOhLP92WSv345ufKtfm8nr0fX9RSpRr3ZSdHVtFqfAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Multi Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.532Z\",\"updated_at\":\"2022-03-10T15:13:44.543Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"~=\"},{\"key\":\"aaffe5ed4e0b2083311df366699cc63cdea69974\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1313\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ORB/ioT/GDFfGRd7e1tXQyms/style_thumbnail_6.png?Expires=1649635200&Signature=UDj-YxzWIyhMBTTlF9XqrfPPKyhogzmkrrqE8zJy7CiLEBWRMX715kWBqIlH9QLv-w0JC3eIKes-0Wx0NeqoQI0iWHXPKkSIMj5QX6KwAm7JV2ga5ySpzmVIVEYJ4~ASYclGl8i2zK9UGAmOSKtnOf6J8JCLWEWmtVFecKayOt5z4XSXGfmW60B~5vSl5MmG0pz-rqehlEeoR8Kse-YKOmgShlplsVAyexqx~9PpjMKXCYGHfAmj6EnKVh5GqumKqgTIBQiKKxLq8-B8Vh6J9MgSGiCL1maRP62gQWx2lo1jenkdGThLH038EKloN5WSHo9vflOhzAaTGHMXUYLfVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary/Border Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.548Z\",\"updated_at\":\"2022-03-10T15:13:44.538Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"p\"},{\"key\":\"a04d540bdb338462ff6a60b5afa6eb2eb04a8971\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1487\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/7zm/Dkw/AlXkmzyI7FkDmfPc/style_thumbnail_9.png?Expires=1649635200&Signature=UtMBmx-ATS-cbaDVB5WyEuV~QC1tjVNRMClqVQfqxbcasvDnfOU2Gc92PPnwLiVaXs0K5PKn3J9I9TFqlWhDsUw1j-aRamte7445iZWEEr96734PIAvp06r~ivfo4Ys8tYwcffusvj~DhbfEqTk4H~z8-cqV1f5omeIDd3r2YT5GN9tQ6~k6s1Qfhf3F1GxDyfL82jfr7v2GHThnqBuiCEtGLwuvJ4YUyTqH60cuTjNdjOLGfmmCCoH2FUNaSxyvdqz3eLXsmmcf4zaj3FmuqMgivUaWfdmUI6ZEC5hMg~niF0hjapBEW0vhDHKzyzcfw10DFqHQOhlVhXOeRP3QGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.908Z\",\"updated_at\":\"2022-03-10T15:13:44.533Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"W\"},{\"key\":\"85651d34ab4114cfcfbfd9726f44acccfe77a5b7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2382\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iwQ/m9C/kA8qKx31kRVc6SVB/style_thumbnail_16.png?Expires=1649635200&Signature=M9uHHsLC0UWfu6Xd58idBNpo9X9~nJlApSVFUtue691jCbUdXjbgJ179MYa4-2zgkQK418F9mEWbX~yRT-HlyP62APGHUszcUHTwdQJ2oWn0Gl~V7zYJWRqSmzfj~IeQ-rqcBLncZU0rX87mAJg7QHCAJheUMrYynS5FWYQPkIgFN5b45RYs2rXcvUIDFthzOJe7MftUluskToKnFX6al86hoHh8j6zlqbYJUG-0ku6xUJKdVSjXKvAAguh4j-0J~Nrq-lhbq~8wiUX9Pkfc7GHFtboBRKb1d5wtaR6VC0NaOQR06x2knpGbrvuvQDtqoTsS2Dp6SQk7T-eFzpYRjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary Inverted\",\"description\":\"Inverted Secondary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.977Z\",\"updated_at\":\"2022-03-10T15:13:44.527Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"0\"},{\"key\":\"7490d3069bce67d2ade872cc4f73da11247c8042\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"30:1310\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cBB/egl/diUhiItghBcigkeW/style_thumbnail_12.png?Expires=1649635200&Signature=RB3pLudhMIgAA4gH-0Q1euoUw7ub2ioJJKfaevfELhdOSoPrpz72~EDlktY-Ggfh5XTCpyVSk389KOAYLtURy~2a0UVXFpLIbOP5qz8Znkow1oXErc85bwbI6Xq~tmtByGqhi7xJGQjB7C2PPfA3PFdlQYzKGlgXSU5IGOpRLeY8R5Zr3VgIc1eNVnpWyYBDah63rsccc79V2R3hcnVGUriBXyC4Cc50Ab8EnQOe~FFUD4oYFzjh2Vld-7PxaCKIoGAwwMmk6vFhii6lyZPVnB5hdnlTpCTKzQBJcMMFcPMYu2WBzgjiAgc3i~4P~LVRKXObESrVilDvyhFsUH1kHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary/Background Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.953Z\",\"updated_at\":\"2022-03-10T15:13:44.522Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"m\"},{\"key\":\"63305ca5cb6c2e5607796133fd649e07e0a68d46\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1411\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VJW/qy5/O0s7u5Er8KS1fG7w/style_thumbnail_3.png?Expires=1649635200&Signature=S4vzLunnVKXk5IEANpo-tNip~v5LuWd0FdLhh7SwgWb1AuK03rXb17l5Mn1sD8rXnWCDgacCZEe7LeiH6bd9-pQ3wHC3MLtG6326aqf1zoAz9JV-Fb3IJ36~ey7t~ZhM87zh5QgvgORUV8BHIWNrLq00c7Chsu8nPZUB2pMqcjyRPnilQveRHsqvy-hbZS6qAIMSu~N1njrmmvS1aKfXmsyXdIO~P50CzP8yqs6ezQa-XP7ShwMlwC0ZcfrNKd3oSjLSHpsyI7dkbs65QiIxzsZb2n9nbp~qVsQLXl8ZB7O2yS~eGV30UCJUIHUwQqW0cVJ9GNH3Srt7T2tGU4MYjw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary/Background Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.646Z\",\"updated_at\":\"2022-03-10T15:13:44.509Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"|\"},{\"key\":\"3d8d818be60a2f3a99286ca10fdcaf953b04455d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"101:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/f0Q/nQe/btv4LeDcKk4x0wX1/style_thumbnail_1.png?Expires=1649635200&Signature=gXaK0OLt6ayFRxJ~lNjyhjmMSCH4-G1S-DIZIf8JgwcAcFS4tg89PhRC~AvXAitFPqNscG7fYZ-pD96Hej~LaeY37qdMN8OTD3Uz123g2TmEyenLY76-SAEkcDnEDn6IobCSI3~WSMZG4ZDcNLACzEhF5KU5oUjjjh6r~zpmsuliviJ2QsnpWByFSOLifEY3zJCjozYUnz0ODpdnOQqL07ZgTLfLOREGzowv2AzQE3mEPA5mP1GjEBSAowxOjxZlnyQnyGSgm59GKc8Y5CJv4vcIBXBJpOb2CaPHycaUqTOw-XkWvb8k-KtgA28TR9GfLYB3683PFhzTAXkx3c9Wtg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.681Z\",\"updated_at\":\"2022-03-10T15:13:44.501Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"RO\"},{\"key\":\"28d01019de63efed67883b4153bb1ec181874c30\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"104:1392\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/U4p/Tvi/EK7AvhFGFZ01zNi6/style_thumbnail_8.png?Expires=1649635200&Signature=MoIDIQCIjfhX83Vb4vyy-Cm~B6ZXPxxMiYHvEl4s9kj-spMWW7n0kSuBB72QuAMN8GkZCN0cEoER81kzhDfSDJBFWiJoyhyGlTQUNlwzz7fIL1Otticl3OngGqS~lJeywFYAMb3vYjv9sueMe-re6A7GEdMCQyHtVmjD~DKibohR2wMmc0ARGZ-fQekY2EmdSzeYRZyk9Pb1Hdti6fVRr~DCeHRq-b~NFknt12IRbaLWVcM5UmPrsF~IljTDLYK0hBlolNtYERgX4t5KggXZtnzdQwp9bm4eZGjvLItjR9vGhowb6QK-GS7H7LSclJl-LyEOWMtygode9543rbFsfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary/Border Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.782Z\",\"updated_at\":\"2022-03-10T15:13:44.494Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"~6\"},{\"key\":\"0dd6cc65ed1e0da4a65a7dbdec871d9bfbc81b15\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2381\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iLy/tFf/i0zSBlwFv4G6msWk/style_thumbnail_17.png?Expires=1649635200&Signature=cZ3~QMfEIiQGJhsYENhgxE4JlNQbOYMrUjkf8DmdgK0dx~005ej5Gbrj-o1h5G99ZebCe2Fx32RjBIuuRZtz17ngJVAT-G0Zz7D3BQPdmKjtlScOiceQlmXPGfanU~1ynxqoClAG0ZF-czoUTiUIl7Z35L~0x5M5YEktaGceyTRzXJ0LHAIfIvQG4jbXDRDj5uYkSukD7dqxsMMqCrWYL31kuWcX-rroH2uOEjeEHtHS~53yi7yvmJVcI9NGPA-FXUDFLSub-BZpkQdeh8E4nw7QInS3qXWsj-BFFyi3F7Iw96qaN4pCQ4-hXVlC2yOjaUIVLQUfz4wyWKRBvrDvEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary\",\"description\":\"Secondary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.982Z\",\"updated_at\":\"2022-03-10T15:13:44.488Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"/\"},{\"key\":\"0b5584dab7afb79694edee18e1a0f4528c1b30f9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1415\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/eym/7Gu/4SkJ2dqxwc1JGDu0/style_thumbnail_11.png?Expires=1649635200&Signature=djSQDSNfefOusi0mobPMEXBH0f2JEDiECcHvhS-xk~3qeBgqbTMm3cagEMzxauswlKi~RdD4j5X35B2iPfbIGcPiSMJvziajtilHZBNjRbDZNq1ImUNtZjeNGZGzabm1YnO-hcrJkjYkSIg-1QiXd2FrPd7LplRvHrcb5eHCo9-4MaqIsqiNdanEhkliXsxB7Mh6EUVTaJBHEa7Stu-SLKWitV86GcMHGbmymwpsJPj6J2PhIKEvGLyEz7pKW7aOzvZ7DtJfxOGxwxA3w9UnIkEQKvp5HPQiyeLNirC~HYnoCh6Jg-~SfSKLplkX-O-ri0HeNEhq-zP0dzQHTcwPow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Plain/Background Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.948Z\",\"updated_at\":\"2022-03-10T15:13:44.477Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"~\\\"\"},{\"key\":\"e449d354bcb3b1a75c310bf34ca109eca2e806fc\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1432\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yFC/mGy/bU35UFDULcIUBBp6/style_thumbnail_0.png?Expires=1649635200&Signature=HJH5c4gJHl1Y0Vys2aDBO1ms6eg09F2aF27Yp4p3bmCkpgdJcz91UErrutirgAjJ3ekkamRajm8vrWMlRsZxP-ogtrnLmnOWjB-9xVCpjYz1iX6~wcvY~ip4wGUIXX3R~ScTWPg4qJZImipuq0vAeLXrCobtheF-iM0ob9hoyFh~XBM5OAMDeknqb1TFOHYtnODPfkBnq0IBecdgQnv~b2dyk-hdF8yeY4AA~TCAHMuiWjPxzCq8P0Ff3U9fbLOW7UcUnas0YXZNv8QZZnU-qqqfAy9-kDD0Si81jMRyimKg7xx6dYw7Pew6q2MiV4feeh3vqqHO0AYhY9h5tZ~Utg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.822Z\",\"updated_at\":\"2022-03-09T10:57:10.553Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"N\"},{\"key\":\"0e00f688cd363b572752edebf943dab3d66b3e95\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1433\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/LLe/eIC/N9ArUd5TTINeywEQ/style_thumbnail_1.png?Expires=1649635200&Signature=a1anw~hR1dr9gchgiqk9nyjtH44GGSKkGSNcFN5BSAznh2j9e-K0rFT4w2WXWHGoP932ZWAh~KI1A~yZu3jmQKzH~0hVyPSKH3x-QJHc3pAbo8m6MvKZzVa9ciTIDRadyK8ZZgjtncFqr5xHruVJrJGiGb1yM2~RQPJZplDt1T1GpKtb~4LP7Ns76tfwQxqZjOfwz-OiOIJm53wI64Rmx8oEZj5QxuVrtUFuF72V6FKmLK-04x5dDYafbbyNnsV2SapCOZtWj3mVq7A0WjhcvDV5~iCODKbqi57JbWy7aLcfL7ePIEkwz-H5dwde0YHXFaS6UQqnhmJEUcvDqAY~0w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.817Z\",\"updated_at\":\"2022-03-09T10:57:10.547Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"O\"},{\"key\":\"0a6bf727ddea4108e955e7e4e3a191ebf9bdf74d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1521\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Y2W/lDX/riQEC7uVYR49YOzL/style_thumbnail_0.png?Expires=1649635200&Signature=ei-0IKgQmPXG7UeuNSANTlrZqqTzwU0rrXScuN3BaOIZvDKgVwQprBCEAXreYyn7BOdS5PAvoorGwkWG4WpzkExBvA1BFixDD3UqNHTztcfAQKMpfDIlb-DMrb-gG6JURimboNIjY5Q6bZqai5bAqClmuouJ1AeFw-OoAzqbpeqSqr7-7i18eJfmDLrf4ngjnGvNHvEN1gQy64zhi6pf1PbaLJEe0mTunfnG4uGRNTsKm4bqmcx6t95GiLYbzObp5eQ3k9JMFZA6asZkKOZfOw4BrRhqYtbLUf16OGo4NQE2BNQzQF3dOav60-W0mWamatsiD7RzM7crv7EDiiINXw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Success\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.869Z\",\"updated_at\":\"2022-03-09T10:52:28.091Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"_\"},{\"key\":\"e01cc96187afa152265eb2b8f97607ad0391cdfb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1523\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xIu/f6S/SUFFQg0eBnLMr8TK/style_thumbnail_1.png?Expires=1649635200&Signature=EOFHpm4QlYYxJpwm1pMDQ8irktbkkq29m8gsojFen6Dis3b4kp7wV1mKWfW6JGcVXkQTl5qzTuqK-OqEYi8zNw5mI5KjRHo~Bp~kmx~X0xcPJZBcA76CCvqgeJKYcevhEc59E0Kkfuo2h8EruQPXop5EHEugFSNaaWLQj76tT2vdPMPcqeujslOGJ~vB7LW7P7Qo8xyT9R7JkFxhv21HKle0Kr26HAP1TQSqtIadjwQVwEuHLViJsvCRZKuULKwqwo4iF2vNLh-W3BcdZM1JoF0KqvDh7fvwfwqvP1TTJ8r5D166zSqMt9vkwNhsUIFAF-loT6dqktQzxU0CrDnBCw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Critical\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.737Z\",\"updated_at\":\"2022-03-09T10:48:18.660Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"a\"},{\"key\":\"492fb3207c0cea54dc2977b48b61d09739a46b9b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1538\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/W9g/Vtn/M9V1NaNlQVVLQ2zh/style_thumbnail_0.png?Expires=1649635200&Signature=UATaMyfCnyRp4RDp9GTKNVFGblkkXRyqFI9mCIgUfBAzf6FJvDXcxxmmXOdSl666e0leOkieKUmv0o~d6M~a5LoKDqk0xqmcyINS3KkO6Zr~sazmhBYy3VYsGV0f8MQtbwRpOR4Ep2J96YU6C8uwlF0OXSO6ixVmdt0Xehxg8BWgVch4f7BSC-2Ufrhnxh1RmTH8MuYonzDEahLSWN2iNs7RhMPieq60597wymxND7umtmtFg81zSzUwBuZgBBR6rFg7C5T0TZhwRbBu2jRyVqX8zq6s7RivO25lu9nKMue42NnfLz2RRC9YMoWKzkiwLDK~bgp2owBgxcf9rJGEiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Error\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.524Z\",\"updated_at\":\"2022-03-09T10:48:18.654Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"aO\"},{\"key\":\"ffa8470c8873338da642b47dfda437c4ac5ff62b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:739\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TFl/xnJ/51cAhwxp1zbIL29A/style_thumbnail_68.png?Expires=1649635200&Signature=LcXTYPz7L5c73v7e7BT3eRQtw-hRN0AmZA6pRLjdRrv4LX-JFh6lgJtq8fo5li-FJm7T5YJmX8V~gUNf0uAb5loszipFm~wTT-5H5sb4VRqMpieiT-PIKANBqC3zHFJ~vrt2scRt~6M18kTG-hs69GGQyPZmBF61MMXcnSOmeLAo6KRaVWRumRkCeTGT9UCX7Q~DOnRa6L7NM8KiP8aVcspH~m0-1jqjGhwAMjiPV68Kxh-icR~U7uzXd-gJkYI8NYFyMvs-ZsADvou7V2bF~tasRyXgHb~2pCZzm-YtUVYeeO4-FT1x71OcFbihApWWqW~K~7s3SRnvdpKgcuL2~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.858Z\",\"updated_at\":\"2022-03-07T12:03:58.409Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"7\"},{\"key\":\"fdd2bbb7f23cab937357c3dd786f0cd654705923\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1305\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/v2f/XGM/JGFgBJ1dniFh14iX/style_thumbnail_3.png?Expires=1649635200&Signature=A8~JMkIKJjOwfITp0KdI6lDFY5OYx8UcUCWuZ~cnjAjnl1IpJoXlC9XmQlkeY8BQJWllg0AnjWSwGyWt6f-E2wpQkc8SrOycYrFyPCsorom4B~44sBTJVkKKFSIqXyiMHf9N5fcohLnIAn1Y0TSQeoPq934BSvnspo10GIGo5oCDMuCwsoXaDzucP7PKi20irKHEUCzznCrmIiiGvSwZ4VZJxItrHrWx-nIG4Q3u3jUtniReVcRsxZTAuyw9SC-iKDQgK3hAqlF7BmCS3ZoYvTrX1E0DxYIxDba7nZCjw8u5OxHPIYLM7cZCIE1-O81s6tyF9loodsImkr5rz9v4ug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Accent/Border Primary Accent enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.696Z\",\"updated_at\":\"2022-03-07T12:03:58.404Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"h\"},{\"key\":\"f995b876d740cca61c8c65eaeeb45fd5eed02da8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1516\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/m4M/IfH/EmF59dsi7qKhI3wf/style_thumbnail_81.png?Expires=1649635200&Signature=gfGDSGEqWHARrbwTr5fvQ2jfCqS53cj0CorQwbkDedB5HUXyqkuW-XvtqQUPlxbXx0ea4JVM7NX2Mw7MeHadM9jt4Z0DFMs8Y8o9f552sd1Y9~fb5Nga4ja~ZI86Ex951j8qznM72TV0jbj7ylG1psYaLJtD5xkrxhoG0c6vXdEcLqP8PKG-d1~3At59L9GAqIy~skjQ88nmFehNox1U16ZHlfoECvLZWF490YyMhNujGzx3lP4AX~4hvak11r-PgEgui-geAtnBU2LMQHrhx2s1tsaEXygSx8UuL4TugFeU7lKVtsZ1cMYrEcWaTWar231tNP1F1QM-J1rsJRLm1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Anomaly\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.929Z\",\"updated_at\":\"2022-03-07T12:03:58.398Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Z\"},{\"key\":\"f929e6f612c2fc5f7a5e411f5dd5b8e3666fbe14\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:790\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QNS/W9f/s8uFAxwFNYofcQyV/style_thumbnail_114.png?Expires=1649635200&Signature=IJ7wGsi1gX9hre0JUtVikT5pEze21bjym0F8~Ge3la932IBZzyIBLM5FRxDawMWa4GWotfDbnLfdCvTUbqgn0fAmzpg7AwKdCqzBH7ycE8x--t3hcCQr96zsAffdpPPOzzmTIg0uRJCxGAB8gU3TQ1H7PwZzDgaX7L3UtbfKQgyA-u7xFP867r8n2TTc8bd82Z5UvbTercjjZG7GPipZ6yFroCI4ulOxlrxFl9QqNnA4idRs60-Ao3Zp5AWC16SNYqVTZs9P351g02lRTE5CyGNZ~WAtwCe7kgmF8ysbyJGfb5mANpm2X8VRQ2jjXjUPUoM4yLuE0JlZ-iS5RH3IAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Focus\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.106Z\",\"updated_at\":\"2022-03-07T12:03:58.392Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"@\"},{\"key\":\"f7e2ded6caebf0779cbfbd0a557e46e1947a614a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1522\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fsU/Bf6/ybzns65ZH1CLCcmh/style_thumbnail_35.png?Expires=1649635200&Signature=azdIKKW5uoztQyU3rwwdsuivUQfpRkXs4fFGWpDkgtAQRRJdj0uGfjTVcMIp9ojP-9xcm7Xw83MUGJgeuSgOzgMV8MOhEH9ohtvw-WRHbfbHIDHwlB1CJVTj1JpTow3Avwh~TbsL2asT8xD~MZAtm6NK9vyCx51iBP1WdmSssQrlrF2pF6hKj3rH6yIlJAuI~1yLDvlMDjWtrmKQXjm7xNrvXIfD5fRF46OOUoKgS~jY~yv2kHzsmalmzgzwMoiCObA2JL~4Ht9KGZrDJnx1B2y6AX45KBnEwBoMkzfFx4ZOiIGTe9TvIef8fWPLkJPcMfgRr-dvzc0ukChfSeYcSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Warning\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.686Z\",\"updated_at\":\"2022-03-07T12:03:58.381Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"`\"},{\"key\":\"f7300ef0ffe874fe81c12b1e3a50d4f6a247b2b3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1314\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uxo/T6a/KTorhemYi98VoHoB/style_thumbnail_36.png?Expires=1649635200&Signature=ErkzpQUAF5GvrKIBcMFaU4mFgvDTfutOYYndvZq8tyyLfP5lyHl491u9ynkO8ZwGimsd8ulH1S3baPAbCeGRBj7WebhAK-QL3~vY~VCC2KQz5~YlQ2zp~bpJb5rC~byLHr6rPygasltYc4aNNzjJS~sbHl57nnpb38qXCs8UvOckn0l5XGFkC8Uoug-ILCgcJYO3xoZK87xiE-ClHa-YD8NNUcD1ust8bRK78yug9BtFX2Ydb-lPEgVzxUbWyfFJym68wfVq-NFKGpSk9dCBa2dbeoZ45eOOyfTke4u7NOG41J2~fckRQfZL-gWV3xcEgpwC7kAMffaE-slY8JNJpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary/Border Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.639Z\",\"updated_at\":\"2022-03-07T12:03:58.376Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"q\"},{\"key\":\"f591d3c7c3252e0b1f8dd6abc52351151c7086c2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ozB/sLM/5Ig4jjBNTCxo0LT6/style_thumbnail_66.png?Expires=1649635200&Signature=Tvc1vhb-49B7J4kDQdr9x5za05wm973HJLpS0HFqtrAvcKOeO3FdxDPfJ3yiKUdu94QElfj1dgJA8akAVa8bxCbs-XXLfygvpuwNVoWB8UkotMl5AVIm12Z1J-SLXnNqzDCica-K8BUwUatdfNmQkkapzBIbGnhB94UzDLIP6UBinvvW~-oLEe9t9us8aJQUhm6I3i7Mkyr4r-AG8y2fnK-rO9IW92beuIf2q~d67QjE8GB0h02xby1s8Q9FueRqKdMk13IpwHwHPcNQvYw~vlDuqZrzH79WRhfPF5MQSZFABPbZDje-6aOKO-Nwkt5wSOoP5KLonON2tjqO5pP7GQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Info\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.845Z\",\"updated_at\":\"2022-03-07T12:03:58.370Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"I\"},{\"key\":\"f498b75092721682b9f98527f234fa8a5bc0ce22\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1422\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vuk/rd1/LKlysiXmSp08pg0p/style_thumbnail_22.png?Expires=1649635200&Signature=ORclGEcYSjApBll2Jc-ZrOGcfX3cFpkIpC7aD0ZeShCfX-lgSh43IPNMfzAVrEA-mfu1XWx5kHvYdeVSBts1c4qbS~UPTUE02gOAtDYuHuZny0wC4hg6h1LMOTCj1B~scad~-9knqNQnUS~rtlsxRKxs1FZQTACVMLDPR0xXTwOF9rPvZr3q~wJIKYqIUoe5X3MHD2DiUs77H2nhc1Y2T7kFQ~SHkLKSe9dMm~BmdhHhwntJyBhyqc-J9f6Fx6aVthwzO6wQeY7yVbHuZulf5b1tZ-C4JzN--eoRYm2~0xGQ~zQl9z9mQSiMYhZmRJYQ~diJ0GtOaFwoNIZMJ9K-~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Destructive/Background Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.600Z\",\"updated_at\":\"2022-03-07T12:03:58.365Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~)\"},{\"key\":\"f3098db025e7272071f27ae6f9a5e5d3096eae65\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0GZ/vkD/qmOvsqroHMrb6IU4/style_thumbnail_11.png?Expires=1649635200&Signature=P-AMToWNOmFu63Z97dNqu9jIaH~5rVEyJaGQPY9UbXSJMKCUX-txmoE51m2iIpZXIdgb0Yc7bUkalHbL3X0HSKK572UWnpMfG5UQ9Nznl~pt3kL-CN94tDbYkY34V0LAAg-mcHjixriVSppAZfKBlvyEXg3ThRKs8AQRBevkwEfiRPCjzKvkMzExxdOMaqoojj6wRSx1zf~3ksYWwXUp6qoT7eqa0o098PsrIwb9tsmYXh5e3U337VGM2XMk4gNJhkexdVxpyhPiD8t3ane5fcoofEO156dRdyZNIznRW5AiUqTyBE4Zm4V-yqPrO-2XoUuxPp-aooXY-fQpv~RqRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Success\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.543Z\",\"updated_at\":\"2022-03-07T12:03:58.359Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"K\"},{\"key\":\"ec1a34259a53ade310a8c6962911d0f3a10ef792\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/gRZ/AYV/Tad7qaP2WUihOHRN/style_thumbnail_44.png?Expires=1649635200&Signature=esOnBiuGWHlxvqGCwpqcFhHW3Ilv0DD3NnLix-Vev8HjoNVvWKmhKlG6ZSeQkC-Z~6GQnBkC59EpFznzE7oqK9dJZHL-9Xq2R7R~PTRVvJ~JNJ2Enclq4i8OzRiJVk7kysih6hVwA6nQWmuxhW8lP14JoA5ypG4uM8-dT4YkCGo8eDQnF7xOKEdPxSo6zKGBzcW3x2OKJcygB0hQ9MatSyjZUC2jb-0RaYW~11QUDhA9Rp4u18zxp4tpaki2Kxl0Dtx1l79NmmQxSm7zGe6nWRLuao8DAn71vCzxgGCyEvdpGEcfTINd1siBmTslKU2q5sktf3DhjELeDFL10XitOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Destructive/Text On Destructive\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.732Z\",\"updated_at\":\"2022-03-07T12:03:58.348Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~.\"},{\"key\":\"eaf8fdae1692761a1e4f31b7831aaeb009c0ec61\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1648\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2YJ/UY2/7no0480AZD6KyMkF/style_thumbnail_20.png?Expires=1649635200&Signature=YHn~GL3gq-SLb-EtpF0CcmmtzO4BTQfEq4ZoN4jOkyGSJddvBrRUhrJjahLNOLSznmMb4pIm39-QBGPFwxo7RQwrvkN~uUGsLgNLb2zbx9kag7isApCzrHLKEi16slIp8Ze-P17qslUqHQl~UK1neN4dbOBD2pVvndAfyfbGarouWKQ5XGS5HM24H-zor~YvQAzAiBYK8qUZMWqi4FyFDCMukgStGMYinExTV87KTrbnOOGB6nkNYhP5Xk6kfKNPbVASAC8NFPqR2I3m4kQeWk7-s9TwKWb8cJDrYheJECL2bOUpr6tpC6IfWBNmMlnO-cqBtfQTUV7hZ6XD7TuBgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Border Primary Translucent Enabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.760Z\",\"updated_at\":\"2022-03-07T12:03:58.343Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~E\"},{\"key\":\"ea3af86dfa80f1c89ad9baa91e0bbeecbbe5f105\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2395\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JAb/t3o/fHMkVnc5NryHTHqk/style_thumbnail_84.png?Expires=1649635200&Signature=KnnC3-~~Q9QEDXXc-KLCU7fcnOJs5GMzcqFc3mOZI5I988e1s9Vb~UmtnjzpTiKZjO8~tvj7fBm8J6rq~u1i5JWpQLi6pshFwrwXAEApqDoQYU9QfTDqeYKclifoTS3XyUN9LgQisbhH02aqwATpbZttwQ-w4~1vtQqHk0WWbO701CIF3Ilu4nW8XdhmBXCUFLeNPX-Xk6LDyRjFQi7-SA-UkoRN9caq7l79kj8pt2IWQFX41in2SqivPGAl8rl2AcfeQ6Q2e3pVRiXkVMepDWdY41gjKtQHUnJ2V~w1zvbJtOcG0IaJx~5cEBIAsgLaDKmdlsJsKJNrPQ8zOqvEHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Hover\",\"description\":\"Text color for System items on hover state\",\"created_at\":\"2022-02-25T12:33:22.944Z\",\"updated_at\":\"2022-03-07T12:03:58.337Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"3\"},{\"key\":\"e80e26efbd2ea6c4d4311398f73923881d71d9f9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1418\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/SJg/Mg5/zYhk9vO4VqTzczoJ/style_thumbnail_2.png?Expires=1649635200&Signature=DooVYYCzVJopDDVRt0rheCxPip4vb4hfgjEON8KG4lBx1sRe887oBL0VI3CEbWobcpLqUNC8QJzqTFqPC9wyOc5uh2d4ilPkGIF9Kn6tHQpcaR7LaB67V8Pb-hzjeWk3kEcdFEL5IRoXdqCRY-26dM5f849bLfmyLHlAO264VixOm95GnT9kcUMp8OIF~Vz9Pbk~jhG8aB68wXsYy5ChsWwVlrpcQdkx7oxMhLZNkhhe161u0VcFfUzaAwb6EeMacUXMT5Pv~IECN4QV4Nsa~OBaG-TMlBG74UoXUS-s~FUmOAIPviGVZrWLfgR3Xh6kT9ZeNT~eEDlG2~excppEGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Plain/Border Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.569Z\",\"updated_at\":\"2022-03-10T15:13:44.569Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"~%\"},{\"key\":\"e67fe626e5071c2818058f0e6ae6ccc2c9b1747d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1086\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aoZ/4Nd/u64HJFJvNhekdjoA/style_thumbnail_27.png?Expires=1649635200&Signature=F7cXTmrjXfYinYHX4QV7uQl6Iv28lgczKscD5vVMG-ebcg6CjRZA--W-U~aLHRaFRb8Ww94DAYIxg4ogTGsVA8alvrLzDdt5VjJFY~A0RFQMEn7Q8DBIEc4~apklbSmglz~OaBu5ro3tut0dSNO9oFXRFMD0aQxuTQsl1OEGYy-qqaXg9ZrEghq00Kij57rIvvh9by81H5kXSL2gva7PSKTZDbUXPVN0ytpdECyhSaCe5J5pvK5ShbCEYY37fXih4vQrFItHeVcLgj9yEfingz5F9gk0cWFBdUkRA8NxMs6UlMjvJ0hVmJKpgCpMRT8zJRSGo1gOmzsQUm4WzQwvxA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.633Z\",\"updated_at\":\"2022-03-07T12:03:58.326Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"G\"},{\"key\":\"e5d0cf9d125a6c4808863d1328ac4315cb8ae21b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1759\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kvY/a4A/dWomsqgpvmln1240/style_thumbnail_17.png?Expires=1649635200&Signature=TfXk0YnI6WTbwYodwuwOcrZOOYgn8X3DV9VsajaLITHizBNvdbb25m0LcUUWtTUw-B2fzd7vFt2eefse5uUF5jsja8qabbJf9eNPNg9nnwsllWJoePuhgh7XHrIkCYsccty556~PxIbT9o9KNkTu7g~VY1vahLelxHcecio5H3KQZ9o9BR-9nVx~t4pQ-n3ob7ngEV-SqrUqz7VBNY4t~CYWmIK4DRQis-fnnt8iSzkUxmmH1e5QSIzfzLXzgPPZ9aDK8qxogSAie~U6X6wdmgBmqxQeFvgmnQlBztLIPGFvZ8Jz5YcCAGh8cESMRLBmO0k3l-q4arsKCCi31qPSuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary Translucent/Background Tertiary Translucent Pressed\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.739Z\",\"updated_at\":\"2022-03-07T12:03:58.320Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~R\"},{\"key\":\"4edbb9f84d88ce62dfe77c1e6a84164b68cb78e0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1844\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/un8/tRL/PxeHHhne0eqaYQ0L/style_thumbnail_0.png?Expires=1649635200&Signature=ccBtaSYOCiViQnzbi0PxRY~oqkprJg15YMXptdovJBb1IQRWtojdBvRmRAEbrqUn73xEgEX2zrOTzurptpnWKXWVSHtrV4vNJinv3VUm7-rzgrbIWcL59x946BpgpEySIrs0ygyoZmi915lJBPJu2oi0062nixaUZAKjwQDlqzqqxJ8EphkdPxgfJcZ4w6iF9ClFNJ6t1VMC-osbGX0X90~KPgJ9uxON5D3F4Rg9gTf-~-dJfzHokQNpk3uKT~yiMptptv6Fd9JECPoDnqGDQ9BjoFneYVDf0zLdV86Z~AEQ2ucO2~U276FKVyg8QMH2jMY3k7Igmwf7B6TZxJiimw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Query/Keyword\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.483Z\",\"updated_at\":\"2022-03-07T12:03:57.796Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0\"},{\"key\":\"4d582a5bdeed416beb3192eb60ec7137bef8f1c7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1762\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Mdo/2IF/lBwVCd0XWWEFh2CE/style_thumbnail_18.png?Expires=1649635200&Signature=C4Gv3gzMiz65XJmx5gAQFmN3daI6gkGiyltk~ILs9ED6~ep6wAEXBxrVO7VHChgVSxaUkz~z8dr8JLRX95DY517aJOo5YXI5ja~-a6ueBSSab-uwT0hHZavgIUowheQlfJHBiPL70rsU4JbbJj6rmyrlcHLzbcpAjXub4Uo8wj6IoHvZ~qorg8~fya6~UOBH0whY9j2EIuQv9sC3KFUo~PPVEcZvi5KldONkTaG9Dzow0rTI3b1uL0-iyqbv3KPghaQhgosVXEieINFykvXDg-vDT61zELI2KVawHJdOBCXCZUq4Bd33xPQvtG1NAy1hK2bCtjs2sURqMCkdsSsRDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary Translucent/Border Tertiary Translucent Pressed\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.746Z\",\"updated_at\":\"2022-03-07T12:03:57.790Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~U\"},{\"key\":\"4c5472002ee9e9014f25b2cde12bc75530c01f31\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1512\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3Qz/9dX/smjO7mkXOLMaJNfP/style_thumbnail_4.png?Expires=1649635200&Signature=LXH7Mhf0Skc0bPYLE5UTuOV7nJc7ZAZzu29xiGVJRG657AxgVUWdPHgP~KqduMoRl1kwTNwthfMURFlUD74KfuOkCVuyKnKeZS-y7f7X~k~Of4i45wOvTn6OTNO9d7iKS~ANkZGUkK9-hT2p1cIziWDwuF9u1GhqMbE1dP4Zv2e7312oPkINe90Qms~PSWZpfFTTGfQjieCBaDdRPz3oVTYvJJtPJpfNQzCr4Bb7bHeK4oQcIcGWBBPPVSzp1ei~D8XbNyDXHWsDlzatR-7AqwVKNafhdeN3QIp-Ht9DEXE94IkCVTe8N0b-sdxhmVOlEcA8nlHYn8vtMLtVqIp2WA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.537Z\",\"updated_at\":\"2022-03-07T12:03:57.784Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~?\"},{\"key\":\"4bfe27d2620e3e5cdfc02b7cc8d0db8fe86dbcf3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/p1U/7Kx/dd16p4FA3BGN7ihD/style_thumbnail_44.png?Expires=1649635200&Signature=LIoQ0C5EQpp4ZDaSxB1ygvjrgg-S9Om~QaJ3ShnhusX1zsIBs5NMMblsKerDfmtyqimDQd-SQz5HXKOjyAU6MGXI9qZ6BP7cxiQv4iWSKSscsdz96rMIhwKz~3YMDN~-2nbp0JiepsXT0qfkE-WiwI7t6MYHgYcjI9wIz9eh2A8eCf5rW58NqDzW8aYPcawrp5AofkVJtOU4zyl~0MjQsBMjDe0b30bOc0oYeYMaT4CMUC-lHPlYq9IHLUZPRsSCag8txRd6DRB~OySNJstFAGpYQYNYeogPR~m-QZcHS1pUYa86nPDydIn4HV-bYqORaY1rHKbln2rHLOnfUIE6Mw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary/Background Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.792Z\",\"updated_at\":\"2022-03-07T12:03:57.778Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"{\"},{\"key\":\"48d7c5cb2d4166aa7a3b3cd213463ac51b50a17a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"126:1406\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hmS/EU0/sHxi7Ahe5WlFiCav/style_thumbnail_0.png?Expires=1649635200&Signature=Zp4x8~NnrFPTGBeUYeCDVtVfn~BfP72j7PLBXaS-~apWbyvq8DSeKJXyiOJqqJzTvF6MFQthAuMCe505a0jwLJR~RuHwe8Xm6C49fo3dKD67gsQnSzZHnI5BwF91hnNho1NFVYXbzeaFJa9hihsTeBeQkAuRmOC9sEXcLg-u3WALgewnvbdVKiOUsRRI7BvxKe7ZUxDFtyek8olXaND3llzFXoDUK402j2721C9tb0cz8Wm9e7pat5WiglOTA1~VWkIrlEvaZT~Crb6swGEbZCj2EgsPUjmy9p4XiQovG~ALiMYGDV23iDSVFVHHmsjMZiHJ1bPMklFinhmJQ3Tf1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-01T11:49:51.759Z\",\"updated_at\":\"2022-03-07T12:03:57.768Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~8\"},{\"key\":\"47ddb6fe30190a1679d0e88be69134f30e018b86\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1845\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ywr/QYP/OmVEHB6FmJ84zMlR/style_thumbnail_6.png?Expires=1649635200&Signature=eyvTMx0TGY~Z4vkKq0ksx9gWFWqQYzPr7LJE3-9oVB5JV3lkBLhrY13qKdyJZnnflXO1~rXm7UjaL7YUJAGCQhgT4envaBswVuBh5fykml-~RFSx~M7mmUmOaQ18si52cdaPsNttNrmfT7M21gXcfbZKKOkslZ9mrcwmH~h4oit2-0JY1nMPgwjuPT6gng9Cy4eK~7KkGsu1I5jDDDTL4LqeJXIvIZKqvW0U4otL-QgbeA7OU53eP6BRP9~~fiCIqsRXuY2vUMMDf30azh19TKQEfYWaReJBv-gT6Hs2fTPjcZYBzEzkFY6ue00nrXy68U0NxT8W10nJGZQW2HNHfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Query/Function\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.517Z\",\"updated_at\":\"2022-03-07T12:03:57.762Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~1\"},{\"key\":\"472711761aa216601e1708eec59328c945350fca\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1303\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Pn5/FgM/61x6if0q5NTLM6HV/style_thumbnail_42.png?Expires=1649635200&Signature=M1lpPAirT6yJmDcl-EOsWyIXZFPg961nrTZXX63GBAeZ~aijRaQdD~gy1VtteJkpUOWk52RIaDf7bFNpv91aCKrfbjxwVvG90J24FgomPQDvM2husVb6Y9lbOXPMzTmQKQOif7w6-yxLe4SwxAS5Nhcn2afBYIddtOSeCDmrjg2fH3wll6a4c5zYnwkYSG1HjRlTjxJLFVnWytOuqgxEgpyKjRUDbjMy8dvB4QEm5ziGsgVZx7bUTyDvTz4Q8O-x8iVqiFSzXTsh7nQ2eormUoUQpPot~-LjSvu6h8zhn7eS3z-sGg7xqO22kj8fL6BFXCwYcpB9K2-fTwEoAnRrvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Accent/Background Primary Accent hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.722Z\",\"updated_at\":\"2022-03-07T12:03:57.757Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"f\"},{\"key\":\"46b1248d1191b41ec368e1199e0cae64e5c2501a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2369\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EEg/KpX/7FPN3gVcgAyyPHTY/style_thumbnail_74.png?Expires=1649635200&Signature=Hys2pHKEvGuupGNwlW7T2LPinpCyWfussPFnE074Pc0Mc2FjPuFDQK~UIi8Xm94IbHFqvpUvsL0c-7JwshBwUDoxvpnRK2zbC2FVMlW5CdS8~BjyDGbpXJEOex8l5iIu8Uj7BiRDWErabn3uFP-BqXfhdi1HFhZE1F8i1c3P1B3tbnRxav-rC-R~TYRFjKlx2XC8p9~xMMdl2LtL3wm7rKIPSqY4J1LEn4fAxOrcqUML5969-0wvG6eW4V2dDGyl4xBz8zCO-fbt-4cy4vaoogPsqC~b4JyPNCAXZmZmXV3f2RfBISJ89GrnkgjNFp7hu1SwJdaX12jBDsYKk0OTaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background App\",\"description\":\"Application body background\",\"created_at\":\"2022-02-25T12:33:22.893Z\",\"updated_at\":\"2022-03-07T12:03:57.752Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"\\\"\"},{\"key\":\"465d9d7d5ca47d252e7853b4921af17b38d969a2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2397\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/D90/ial/awVXUolf3CnjjB2x/style_thumbnail_110.png?Expires=1649635200&Signature=PD6ykRbvWY8VKVDMjsgDRb6eD2S2TDQ37NP71UZ0kJnTyCThMGsyi5jKGGvHqP-OBUmKLAa4ZQQHp5VbbU2QlFDyHIo~1N~Yr7Lhxqrur0v-Q2aWwM76ZM8n2Td31oRndupyrSnso2yAji8FDgpSs4ZVhiY7xM5IKpcvwmuSgEgSomzJk0H1bwXsAEwsHlC~2SF6RzPqSCDpGK9JY3eJaIlj83qfy500C8nHBl2IjoMTO6Wgy4ZD3SbbzOGS2gKtDETXH1QlQZsV0WSt4PpwqHtwL~LD8ABnZ65~Oxy9wPXQzDt8u3-SttHucU5cYxzI9Hg0OwdSjuCYlhdzHfxvxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected High Contrast\",\"description\":\"Text color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-25T12:33:23.087Z\",\"updated_at\":\"2022-03-07T12:03:57.747Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"5\"},{\"key\":\"4564d9f2d458153b3a2a108a30cd75c43b59d05c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fvq/gIC/hq2HQm8aAH6nYuGc/style_thumbnail_39.png?Expires=1649635200&Signature=DE~IRQSCdD-BCAaN5c9lOzFjmR1Yo5SlKGMzTNQpzYpfrAl4aH8g7sWbRDMEfyALqocp7226NaR3yCoQYGS0c6AIOH0LLz0XQM0wg6kGtssfxggG9UrcJLidbcmaA0M8bvUjfDzBIOjWPDFxda7ER51xT~pJeUlbiikLvz0zyTLBthjoAu6pV45ZTNggHOthY2x8wqz2XSN3Nyl0bkvkP3x~TiKJiy3URwOvfUAFKxviHiqtgzeFXM1S31QY7Sv7KaUCySR5649NgaAxaJAEQW9-YhgB1WO-8Ekn54adABZWwRwlQPkrcTo7LVgj5qF9RgBibA1LcCcK1F5l8lMaqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification Inverted\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.706Z\",\"updated_at\":\"2022-03-07T12:03:57.742Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"d\"},{\"key\":\"43597fdb5c85b7a9218a1d61a51e65341a2bde11\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1485\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Qi8/tAi/6SMtpulbzR8tpsMj/style_thumbnail_83.png?Expires=1649635200&Signature=Fjk5CvrITcYyJ2Y6wOVd7bnsBfQTRScpfINNv7WMTg2MCDNeUGBOSA7yE16MgU3ytKYrzKObJcfLDbgx~DAQo88cRVsSm~ryVN5jEJog4Jzv3y-h~maRvTNXB-BV9LVF8J-7cTTgNA~Ch5Eu-x6DaHYeBvxXwkSv1g-hZfY9wz~ydvuBLf49MGyP1wVkWY4FA1l3eYyUKesYOn6BamlFgnfApl2dI9MgCem5~hEdCks7VR-AQK~hLMPQ1umnfGLsklsgD7zBwwhT-S1uTyUlAP9tW52qobf67PMNIixTGlYBseV5romq-s-ppzDbdKdXdpPQ5nFJurka2HQ5VwCGeA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.939Z\",\"updated_at\":\"2022-03-07T12:03:57.736Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"U\"},{\"key\":\"3fb696c3ec87fb9dd19a3e4f2f3853c7a0d0dd2c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1434\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ECK/BS0/oTCDhLF5YQVIvehh/style_thumbnail_1.png?Expires=1649635200&Signature=F0MHQGw3NPbLgMVMTpHB18t6CrMjjHpehO2ZLVmnC65u5j1EvibKLUSnZLy3N~92gR0Uj8Oh2kmSsY3EmV3lOZ0MAgOihrOLOHy8eIFpvoowWYVwItRgLZ31XkP5sYT6BOBIU5mLVGxNU5RtA8xUy3kM6~qPSmX0mXTCBDS~HMl9HxwfYBO4M2IX~0SCLKKnHBHK8kN5jE6WPW64dc4xZjwmI2uEKqbRttDEnZjCHPXgs-HHQPM9AD9w-CyDs9EYwjpEfrlD9T8ycjgyDAjS3pZ2XCUP2B1erqheky-Q46hDpqzzC7eWBcU3hrrBJD44XR6ilbparugSk3L8TCIQJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.491Z\",\"updated_at\":\"2022-03-07T12:03:57.731Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"P\"},{\"key\":\"397bb6d1b175e4148fb48573e50b85099b37d245\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2376\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zyZ/hME/9i98atReCgj4SKrG/style_thumbnail_104.png?Expires=1649635200&Signature=abUjsuXWX8FrY06eAWzL7plTl3JjOl6thEA-mbruyo5uNN53fb~OK2vTzroprhAR8joml4zpzb7ij-7U2c~diJak3i~lj8d1JGjjyBllYA8fGCvVlrb6AowA91NeBC4x0NYUKkvihc3wE2Ijv77lgHSebmZX3orX7GFmWLQe5zzcwO18PMGw6e7gzEt6BMHYUbKUCZnz0gi5ejI4lGH7NCwA5hBnNuYL6M5u39XnVGFkyY~LT500vu3JTr0BZ-9tp~DutDzogzVzU2fSeMtVditrDWeBBCuuuWC3wSfpBv0gmb6gLN7T1HLq4VD5bWM-7Ocg4E04DrhECDM6aObnVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected High Contrast\",\"description\":\"Background color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-25T12:33:23.054Z\",\"updated_at\":\"2022-03-07T12:03:57.720Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\")\"},{\"key\":\"38d7066612fa8fa8cf98a9a2c78d0c2b78c19d30\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1705\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Wjn/8eH/O7HQemQmEBcKPh8v/style_thumbnail_2.png?Expires=1649635200&Signature=D1YSxODPAmr2geJ97SUTe2Mrdxx0U0hOJsoGtODhq4Y3YiXpCgPb5x-y0gXaabwejnNr2xAci~UMQV3X5RudkQj0RWZoJe2zzdDvdGC0ssr4ArMlvPgSt-urOVCW98IOkAGErgR1y5v6VOYxO4xiQKsXJ2sZ3IiTUcmiAfZjJfpAz7M1232oFOYtH9UUB8wnpBhlVsH9uySqKVit4bdbwbWVvby6M-tTmlVhRV5G8XkPBF-apydve3v3mJQX7sCk0514BcD0fU9tieehfAMsPY3Jp1ovlzTVqBfCgaLSvNsUF~lE2y-dID9WGIeAPgLsIeLBpqW6NecrCqGjGzHx5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary Translucent/Border Secondary Translucent Hover\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.648Z\",\"updated_at\":\"2022-03-07T12:03:57.715Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~M\"},{\"key\":\"31ded0cbb11cdacf01e877fce472da9b8f2893c1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/65d/ld1/mHqJPwUvqEwifioc/style_thumbnail_27.png?Expires=1649635200&Signature=Kl4uk0vI-rvbp4Hf1TFHYcDekEBiN7aM0w4NGB43hsxu7BVrfCDf9vy30UJikgG5HKOZ1SVIFNlo8oN235AmrUokMZpve5t9MC711R~wTbAIGwEIzhulzfSsy18gjjdG-9Z5HzTdz2ka4DpPDXDOAozHppdcpIhCuBDdpsy8nKNMhVt3Ps7s68ho752YD6iG-XJVwBJIbfiMNQhZCuVz-KdhqMy1bjIK3XHlkpBflZmy-jrsCkzGHefwj5wanEurXmTBqpsYkjDSp2UQ~sQhE8TXepT6Gl~zEDtUR8mAJGkCDP4x6l5JIs0anlRniLAgx9K0M7kDRm4kVKis3wMFGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Destructive/Background Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.533Z\",\"updated_at\":\"2022-03-07T12:03:57.710Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~(\"},{\"key\":\"2c10c1a9c077e351576598088edbc3dad82d03b0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1846\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/YfS/ZRL/bnzdTnbxKIb7NEFy/style_thumbnail_5.png?Expires=1649635200&Signature=FOfgPB06hteHrf7MjTgj5ZvxgFcY0yR91zxys6eVzIEfcbqd6NTmCf2Towob6dvVEVAOv0OIl7IPF7RER7S9~fVcGeOTr0CXFGKT2SP143uGcqz7FwteKiPD7Rr-D8tlAq98yL028ZJJyNDlGZ-OoAu3cq-t2c1erBbaNG7kdLYike1mQ1UC1ieCzbPS6oqzs9G4amY1deqXdco~a27P4cIfr4MVqYc0O3FCbl1avejqDKHATDJtxVCqwIfi5EM8CRCibKD156qb-DETvIDfDLOkKux0KaDkD5gf~SqCxvgctTfRTizljX~U33qzhR46ufBIQ75OXPM9y1G~QVMoGQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Query/String\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.512Z\",\"updated_at\":\"2022-03-07T12:03:57.705Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~2\"},{\"key\":\"2baaca090ea40415c6245f7ca25cb18ce3d77bcf\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1308\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/w7N/Fbo/04vBd6YnVMSqxywG/style_thumbnail_25.png?Expires=1649635200&Signature=CPa053cuOOP92kpmytMtKR02cLbp4tcMvQjVsOiLll~w~7rHrs5zM3Hij-ETsBUlc2E7tYOtOhe9gMoFUsfdencTbD~UYdKefEij9fQGS2~jixCyJV5ul9egesWCFLWUs~gY4Iwrnw03dSPYTtPr68NXtT4JvYLdv5E5YeL7B-k9Qz55V8tq6UsgZWy0IsYrKEv-DYMohLvu9LVpEehzOFIYfxV4l09ONRXLHayeToVCSaq3v40ErFtSvsHeql~6XRc75~86asfJSSiYmvfK0fucvfNfe789yVzxV-QWAg62GuWchTaoFSwgFwWyhZxsxRKK1my6ZRVQhGFrap8WUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Accent/Text On Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.620Z\",\"updated_at\":\"2022-03-07T12:03:57.700Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"k\"},{\"key\":\"290036b6bb2ecf2693d8622f547593442fe567be\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:759\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bHo/eiA/2mfGm5onlqqPwRze/style_thumbnail_0.png?Expires=1649635200&Signature=P4MUea6bMDrX-PZUd-lAlzqQSocg9PHCqpmd793N0Xa0PLWbOhUmlTxo28mcV~SKFjp75gUlJFNIFOifXa4MkuCB~z5oGZpIrlIzOaxXJ7jlqvHnZTFDp2O3cK0xAlZgAQyIXVlTfX3WxtWIfMILvaRb1hpLk31M0JjRIZl5MbHHJiVNpLANURB-~ZZ3ek2IMQk2oj5tTGJY4gG6W7HktL5Bhmm2ygq0rYGywhUot9NI9-c0CVog0QGeY-kY0ydFfgcOYqE9mZbYGOk3-MEE0UBL4x5wnSrd8-yMWoQQ1ia-DI5rmfa9aBGUF-E5aDkpEeb~ugmXpjppAMICBVI8Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Link\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.035Z\",\"updated_at\":\"2022-03-07T12:03:57.695Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\">\"},{\"key\":\"28add7d56b9dd29e7214eb8643d6db190f025d13\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jm8/mu4/T89k21t8epAZcLLP/style_thumbnail_2.png?Expires=1649635200&Signature=AmowW3hXESCXMl0XHye0CJRGDSBAoNJTc1clI7rriMcGlIw7O15wcDUlEIk18OXOKplJOChZq~wHF1KrwQsOR-H5s3PEfP7ctNrG852AO5AbnStY8Nvakaxz~CDxYan1Iptr8WQV7ycaAHhM3w71d5P9s6kuVQUHFdtjqtNxOpmsN7G0kawsa7w33RgviUfmb4tPrJ8-~MGX1B3faboPU3-6CSyLU-8pyRE6uGJFmoaiJ-H14PiyGWLEuy7fv3EYgJDCP8V0eDFaEPlBsij~n1XlrB23emOYgBf5r8Lqcp1U~n7RxJLrFoQWwyHWv8qhPoBHbglJYnPh9foo3HfVhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Error\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.528Z\",\"updated_at\":\"2022-03-07T12:03:57.684Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~;\"},{\"key\":\"26788e861bf1ee429a671cd0d7b57687e34ce346\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2371\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aZy/KlA/VwYTkKrBktrAag6x/style_thumbnail_109.png?Expires=1649635200&Signature=ftUvUM3EOgAgeUism98DG~GYroSb5UK4b9ufMjkmjtNSK0-xYjN8BiwufmsAbSfUw9LQ3aqE3E5NXmHB92i51KKYxYblb7qvdHBX6q0SOngkVOD3PhHo9WmsefwJmsgvAuiZ7WvQrG9AqmUn08~UKBPviwchiPeYsujUIvOCBDoL1NwMx0pGiWY-LQff0uJYGDSf7DMKd~i1EIpI-VzN5iXYisWAvVJkZ4EEmWL4VEj6Y9ffRhIwMYhiwHPioJQTdUWMUlQHCBun9xbu7f30f5L-XzgaP~lOhIBuOfdRyygZ1xDCOyMfiaeV8v6-pQ0GsrhBnTDWS8EE9xjT1s-4jQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 2\",\"description\":\"Pop-overs (Dropdown menu, select menu, inline menu)\",\"created_at\":\"2022-02-25T12:33:23.082Z\",\"updated_at\":\"2022-03-07T12:03:57.679Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"$\"},{\"key\":\"24d932eeac6526a9334821a3119e6555f524c7f1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2370\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zYG/q0H/XqUYAXz2reJxaKcU/style_thumbnail_99.png?Expires=1649635200&Signature=eBMH6YENDQn1nJGYfCuIPtW3WT-B0R3JHZV21PjR3MHOmdkjIN76CoGH8AAx5LkiMwXREl1SDNyPECrwLvOoFvz0fYsOAjl7gUWfVltPcmtrt3nrxLlu4ReQ8-e0sLIWW9BH-trygwzY~3e0YYpA14fWBKnlPLIYgdPbnV0BN-5hOGCXthqhOERtfeMVVd9IKlyrZ8Uss0Y0-5a8ZsKzbcN3yl19Yy0XYxGQdFIZeikos8BOpXQ~7SpLif7mKNu6xszsPBwvpBqAuez5VYKV~sXn0ZhxVU3FYfDX4MJIA9nwNGxmoZU4CIpq6IguUE6AA3xB1YlzWsVxJRmnDdkZGQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 1\",\"description\":\"General surface background\",\"created_at\":\"2022-02-25T12:33:23.024Z\",\"updated_at\":\"2022-03-07T12:03:57.673Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"#\"},{\"key\":\"24c63d9a4a58b289417c6415d011041b3fa9e164\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"136:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/XxA/oCb/Q1H3yXZXxwXqxL4D/style_thumbnail_1.png?Expires=1649635200&Signature=els~QzD1ymH0z~Aeu4u0L-5Ek~0I6Xc-U8BT~wmGt-Oxxq5p12T0YR-k0PztOhUKpgGFBzPszkx~LPEXJ6TgE2TiEFa7Ajw0dOA85itU2CdNA4BdTcDzBg0kvIpAuM65uMRA4ShA~bR925fYypCZCjdvUsEhlfgJ~pskapp0baV-l4LpytYlplAxnzOalsuxfTPx1luFIJ~7LE1l6QRms6CLqiaFIWWOZWYEMqDpZqt43wowUfckyYp5IziQTXYe7lH7Ulyti-BSyiQ2e~tDVTc8is4uTYV34zfhy15WMvZnjKhxvHMwDmJhGOYX2Z2qVLmUrgozU3s02R2NoYYwuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Foreground On Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:15:41.372Z\",\"updated_at\":\"2022-03-07T12:03:57.668Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~9\"},{\"key\":\"238a529f9dd309311f9ad8c1477cc38b3d5a33a6\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1839\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/5n9/dKN/LjNxzgRcBuDLDTzO/style_thumbnail_2.png?Expires=1649635200&Signature=JC~CD45Slfu2PvS2RGe8ekm-ONmClAo2XyEemORUbG2xhdi~y9W6daAGFstO08~vIh8Hl7IWsmkleC~FNkY-jnozi0q-QZj6dZ4Zb5UKx1mar6PEIpWNuq8iWGcI0p-pxcAZL-nZK-EKtpAgV3BbmHdXzg57cCxpUakMGebNQqCVcIF5o5uhqLfUTjmLDX6w5SIr6IxG9KrX92UGuf9oKIye18McB6trys5xglKjf33ON5LdmaQKBh0GuAJmuC7Et3uygjfAPE6CLk~CLOiIC~7NYG1UdYpMvvXx-dRSKO6Inu1YvgFp9r3peElbCSJ9d3QaUcaa1T~Tul4tsdGWbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Query/Normal\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.497Z\",\"updated_at\":\"2022-03-07T12:03:57.663Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~/\"},{\"key\":\"219d066514449bb129f0bc9990c624bbd01cf3c9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ZFU/lhj/A9wmzUmzcDMVBxlL/style_thumbnail_95.png?Expires=1649635200&Signature=F2Ec2jSf1lSF7Ot-C6tpYbxttjzMmejNs~oZJzz3HxNLi63zmOVmv8LGqhOV2bc-kKc524LCNb3WtUy1owsUSwHC8W4J2QujFHJX9A6raU80NBMOq32JaWTW4gS-0iY7I1QPEm9fKeZ6WmVvbQpHVGkE94OMLCPOyFrklOiEwE4Ojr69GgPcrybUcCiY2CNp5j7ywx4CLO-OJdgT0-2POYglAZf1Ey~mcbLtnbkJwPyTZaH07AisTdW60N4ToF25g8sjqZzfhSL0ioO5I~UIIM9a5H6g2nVsFLsXyVUDMmhacjahEbQgfXdPIw61ktgSZO7XJI7APT1DWo4PX5dTMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Plain/Background Plain Neutral\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.002Z\",\"updated_at\":\"2022-03-07T12:03:57.658Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~!\"},{\"key\":\"1e00321cc9fc05901700e452183dfb6f58c6b892\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:741\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/RCb/c8Y/TFAhk5whZVprtldx/style_thumbnail_58.png?Expires=1649635200&Signature=RZfUsf3X6klXX8nEok-Eew4e-3cnT2mS6GyULsc1NxvkVP729AmYYYMgSsovlX~bHNQMkpJfAJPHVPUejve~kaPxD8xSQTcGnzGvlq7Z-mafp7O9Al8a~2vuBFI9LaJF9rUzbB0GpjKxEzuKrkYRFs0hBm3W8hP63mCNPTXmCATF3pTZ0Oiwbdca~ZmJlwAIkC1ViPvcgaNB~y~idnxVeOBogTPF2mg8ydcnr~qn4pi6rFerI~rN1UfxwQzXif5UljCP6ej5xzYU8Ne3jyyBgUpsk-ZPcgQE~VdtLP8OAWWrltEgR2GZspREvzQeQXTV1-ZiQCLy82AmUFn6cqMQZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Disabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.802Z\",\"updated_at\":\"2022-03-07T12:03:57.653Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"9\"},{\"key\":\"1b02d1cb62de8733e3107dce1f7bf54893b7b4eb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:789\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/8SJ/wDz/dCZQZ1mcrMfwEmEz/style_thumbnail_80.png?Expires=1649635200&Signature=ZXr4aXqDyIz~dY10Q6pzSZJFJULnAwtOcAKEITb8XgqbgWFbqVnhOXxc1EqUBOHF0xcta1vLDUx5TptDsktzTunhnWMf05x6A1CwNSQUCm7UvIlC3sBay5Z1JFQG8kq0mOA6rICtuJrVb9gGz82V5xZBOU5NvyYR07gCj6Su3RY~K7CpkTuU~H36QwVfBc9~9bV0RxJjC6qOX7H-ox9PctNJYPIDSDSsVvWCQg3MMpD19RDZfBFvqAAl97nnJLQNMZ5Qqc6t8ZSHp~6NkhDrhVIBdF97O0t01RWkgTTpa60n9p1aK31fryZ7ekmXE-HHEMQ0cCilrHw~iFYnzOVcKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Favorite\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.924Z\",\"updated_at\":\"2022-03-07T12:03:57.648Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"?\"},{\"key\":\"1a12af35e64b789afd08c4ab4c94ac089c631c57\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1506\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6O2/tyH/FLLt2p9FMs1wifjh/style_thumbnail_1.png?Expires=1649635200&Signature=d-XyFWLR6WZMNhq7EDjSoyhZ3SaiRG7c3vMY13iQF0Xa0Wxgl~waLD5tT~-fHXjmXBQupGIiikEMqqiF5RSjqkh8BFSo2HRtIdWgJ3KUi~73TX-LpwEUOn-EWdWgApvjkspdzbKtFowbsnHtQ-8tVZlwjahjQudDKvD~W5RujQ0Jabr392fDO9CZSFpaI7g08W0adwRbdrrfHnWX1ID~mn5dsLr5lpnIOTBmDFBQlSug55UNoUPTwETH2hYHlDvaTozzn1onwonHOc4LEwoNzVpe3KXUtg3WGMhpODMl7auYw7uaNv-pqtSVrhs0KnvZgXZKCKkXRR5pXxZ5Wv5NzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Handler Multi Control\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.518Z\",\"updated_at\":\"2022-03-07T12:03:57.643Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~>\"},{\"key\":\"171aa354537a7df429f0a52b596cba8155cf35a8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1431\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/igD/LPW/MhaU3eSWUJatcG16/style_thumbnail_63.png?Expires=1649635200&Signature=RuU00NPuECVslkwhg3D18c8ravxGYv8IQYxvIIIAH1m63CJeiiBmveTTVWc4SLqIIRxE9h4mJs4bXtM5J8c~m-pKnX-FAuVbaknSbXbxec8BDFtfSrmD2C4MePBzUmBNwIOb3qcHbe0af6lEelokcGlrVHKpOC57msKDwGe13fPc9uR6Wq60VnDC~ZtsSQzRBnXTDEIowxgqEdUNKgE~zjhsuvReY6fABcbqnSumUniHI6nsJA9j0ValAsJI0Al-WMAOJvxOE5j3jxkXCLhWygP1wWJRbrxOzpuXmOQ0Q2bpA2vWSreZ2dhtrKVK5c~Q7U0uAApXSIFt5pcj-SqOtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Critical\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.827Z\",\"updated_at\":\"2022-03-07T12:03:57.636Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"M\"},{\"key\":\"161e717a76c9b2e7d4946d62c4ee1f905f2dd469\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1757\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nTc/TnL/Sz3pjtdx3sIUoLXB/style_thumbnail_0.png?Expires=1649635200&Signature=a6OQq9FhodgVBlZZXIbOcBJn8Zq4~ws0xpWglCl6WiqXleY78-jZap~TKeLyNY-6pl24HnIXIesRx8n9t3bJD5DflYOl40oq~DQkHBsciHT~AB3cvs15Uac8EAd8y0aE4WfbiJZOkc1Hq6zURSrsg6DZMyl3zS~MyhxwAu42Idl5SHtf5aRSzkE-twhYbmOi3~pQ9uAcs7VG2uWqt8uW2Ut-sV1CWPJMPUVjeqP0OgJ4G6rwKhQO0ffDgbheGOOjtLLlo7GIwqBIlZrsdLCGL1qCQbhI3iJgA0NxpRgz6spv-BL1ncj6DTHxBHkU1mhCGDsjBrl36wI8cqC~NgzJSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary Translucent/Background Tertiary Translucent Enabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.635Z\",\"updated_at\":\"2022-03-07T12:03:57.630Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~P\"},{\"key\":\"0fb3da9b280f39f8a39c6aebce1f3de547a182bb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1651\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Dqo/Uw8/GcbC7shnG58tnBxt/style_thumbnail_1.png?Expires=1649635200&Signature=CiRb7E9384uTCe3kW5EMblOfCcnp9dlDkYtqVDmkDtJRIXsc0088TtAZgSrsb7IA~wMDi8yvCF-zXhiG6PZjspTc2xuzIIT1GIS230HlCGwpWVk6F74Su9oexlKdW5ZKPdAeHJi-LisKivRoVQsnP2liVjuh39AwnnrdASYU-6ccC4yoQhicxJStknTjjwVpPtMt5g2gMrS95xrSzjXcDnRy514XcQb4f0M6P5~z9UTcVY1XD4gGLHoC61r~cMiMf4Q8BvU2ddGY620S47v3lVTVetpVR-jABpMsd~ZjlvmxrTx2AC0-AxNpz5vNM86oQvsFl~5h9d7pqH~Sl4P1ew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Text On Primary Translucent\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.642Z\",\"updated_at\":\"2022-03-07T12:03:57.625Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~H\"},{\"key\":\"0d38e93ffef3aab73a2c3eabcc8b28d600d73d30\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1525\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BFu/Z0j/PWt2LnllQq7CbcH6/style_thumbnail_51.png?Expires=1649635200&Signature=GlydpAZsQwDw-AQ6jML41FYGnk1E1emqd1-HRUSVEFX9R7h4aZ3Heq0oEEKHHEzfGnbLvSeUrdhhkZ64gfDymOybeovYOP8pJbA99PsYIummjpADXWTN75iJRqMdnUYFcwsMJHWbecdbBfNgVmL5tgyUJYrx5C-s4N~xn2Hd5nv~Uwmp4BtfpuN44ptIH8vdFi9hstOo2NYE5fZ16Vu0nUyo0v0DlLW~sx8zIojilA-m4oYUKGpd6Cdon7hp6Zx2q3WeV2Pl2jVP-GSAz7sEYaUrlP1TPczP9JCGVyLk7NohQLBBGImxrWLR5UahuiZEgqAWaFoG0NUhkYwnoK-W0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.767Z\",\"updated_at\":\"2022-03-07T12:03:57.606Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"c\"},{\"key\":\"0a841ca5c0a69ca8f47486ce3a557f261185d93e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1317\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Iew/nKx/suLdREEtXTN6MwJJ/style_thumbnail_5.png?Expires=1649635200&Signature=J1K36h1Ek-7u5ENbjNjzvLwSqft~iS~N8YlwsAbdOim65XOPEKhrWB8WyHKcnfSe856LMdQXdIiUI2OsVgkEnR40JKyKKf7mPqCa7vmO9DXD2hL68X3rdeZBlYmdduFBCyh0aUFR86V6TCzX4gLdr9-pd4CSGnsQu23YdfqEJVmHcExQ5zBYDPuNo1T5SkDyykFj2LDQL-ECBsKLUfNVWo8cOV9nPYWAZzppVj2K16J~7lXhys-XwfRU5sFoMtDjcKGiomayTHY5SELOjUzVNlKi2sgRDGxlUVWd2CVtcBs1r10-jtlBQgVJ3-8CYkjB59vrwAQQkOpEsi59YpNa~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary/Background Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.712Z\",\"updated_at\":\"2022-03-10T15:13:44.471Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"t\"},{\"key\":\"062d81806ffb2bf35c18440471acfe837abd9fea\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2378\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/X2w/PhB/D0DG2gyyewoFYSlK/style_thumbnail_105.png?Expires=1649635200&Signature=VzmqEMjQZq-THm4zWTymy3xiZbBTa0XcaW0bZMu1m7qWT7~MYoVvtEgPO7YhFnYeQJDO32-DqLHUcgmneDb2ytDEctgZeGHleTUtFI-ggwBEo6TsTQhzPUbq05IeHvWkbbI0EwP2N6GQTRwPeCj-c9V0y1OR95xDa3G3Xxwb2QBTtRJW1uB-rquo4eD-753fjM-nRZz6YI4LVETD16jFnYlgwtjHN9qN7S8cL8Q7tuJHPBBH~oQOifhLCfvCV6HnrdAIJqN5tTvJj5jF2yXIug3Ghj-mQlhUqUZW8rfP7aAbnBNa7yjrkDC6Eru5v95vSywhHq3bIZ75lgKPUUstAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Nav Extended\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.060Z\",\"updated_at\":\"2022-03-07T12:03:57.583Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"+\"},{\"key\":\"055ba18d27bbc736d810f502e4be9030b754ea99\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1435\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6Tf/DP7/SxHoaOpr9IbLKiau/style_thumbnail_7.png?Expires=1649635200&Signature=K0DWK3eJoPPy8NUS5s1wIK3EyHbB81YD3DqvKKcF2qXrv5OHEHgCxrAd6uVlz1guVtmlqemQX5WICI9QvFHJPp1npXIYi7SrGrNaVv7SnPps~8Vbv-Dda~j4V~vtENiSw3ya92NgPMmGr0wLMuLWcyZSqG8gb36ZtNwoYGtNGreNR~eJE7vNaZ7kLgNTRAuMKZhs54e4du90yMPo1B4V2cOcy3j4yKo8Uj-gc~qxbpikmYU3mU1WACrYhOJ9iNoL95-jBP4beM-ioeGoBB5z8FojYJ~TMaKWS-wSZkWmUCo4YJ0lUku92m5Xiz~K8~68Aq4BYzc8NWqnw5XTXOPtRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.523Z\",\"updated_at\":\"2022-03-07T12:03:57.577Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Q\"},{\"key\":\"053d7d93c02e4cd98c3bc3e532970c390aac7c95\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"105:1394\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/K4p/FVr/MJKwuiBePcCpIqfu/style_thumbnail_14.png?Expires=1649635200&Signature=XZZxFvWWnrzWTU6pyo6siiwdVWBZkkhVHduWB~rFhvZPia~L-Mw7KV9MA6voGnEB-rCbNrueNYdbLHvQwyQYHkXKnpwBbLz3sPbH9zU6OPhPP-7iqPScn0Po7nCpUSmuqBgSuzHHkKazGfkS99eOmJUaJ7~P6toFP8BsNX7zcjp3k78JzEweMAypfZGUreMmXKU4QHeLYLBphXjM~sqRGEAM9dT3Dur8x6Kf8ab1OpbmhieAXCiD5nDDYHrh0~6tA31u9G9sQV5HCgXSSkUNPT5Ga3incDEF5cvFHGbMDzebAwc-IZX1NdP24NbhHNmzVZTLdD4-dpNVa41RuEktOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary/Text On Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.558Z\",\"updated_at\":\"2022-03-07T12:03:57.568Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~7\"},{\"key\":\"e4244f3710fb948e121c39234b1e6e2b4c166ce0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/9ep/TSF/vdASWLYbLM1UGkfw/style_thumbnail_32.png?Expires=1649635200&Signature=YY-QfzqxpIxPHSZJSjm9bn~6U5Q7JWElAQiNHVsjVBjt4Vfduylph9DiNsEVnflK~ddjBMERv40~anRtNpLZkIHb~AStwkUPkhppzi2UH9ycchQ0vIGvuvyjbKcZ1AIOexhHvL47Fobw3E4G64Mry04PSrV9IbI6v9L39XeISTEvlCzotWMHmsx-5XXznSCT2u0qRrs3Gie~sf2~QR4-j7~96Cjru~n5dOdZsT1HSCB-farrDSfRWNhDoO8O6Nuzlz6JOOscLNVHY9Htx9sWK7jLxjl3zegcEYCO6UxK3eYotbA25~8ZpApgLAsguFNQ772RDJsNH2RCBbD1ZC5~eA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Destructive/Border Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.627Z\",\"updated_at\":\"2022-03-07T12:03:58.307Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~,\"},{\"key\":\"e20cdbf16a69775c38fc7436118ad08f05ae9ac1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1426\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bOw/Z2l/NmnwV6Io6EbSwag2/style_thumbnail_16.png?Expires=1649635200&Signature=bBlm-bGWvIC9u5VeAbENXNrLI-BK269ZOWHEYfe~Sz0RqUS3Jefrt5NI4XwWuaAAX7PwfhT7ANjhgFY7xWXJTsgeOojgZB2e3wPE8Yzdi2g~4vXC0kVx3PbS26BYXjD6OVmW8BSAWY-yamnDHlMkQDhxaAJQWVZxMVCeTdwfR19MLi31SQGNfUZlQhIhZ3G-bXJ3WbNr0sz9j9Ldx2WfoSboBE7v-idPPQjn~DSm8UEMq37NwN7HKxGRzxvtIZHE7GgAZN8Tu9miXSMG9Ajm1CoYeStZZJNunLxs7CvpkRSsy~iG31g3F59yFquPCSXHcx16N7Tf8xO2PNCpLPqI2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Destructive/Border Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.528Z\",\"updated_at\":\"2022-03-07T12:03:58.301Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~+\"},{\"key\":\"e1638c602ade488d08d8c6dc5080b264bb45180c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2374\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JiC/VaE/JL9TKDpTTfS5X4gC/style_thumbnail_107.png?Expires=1649635200&Signature=UnxK1-Tp6~U1qRrMvuuU73PnUsyF7ODXsJKNtAZYxj8z9SAbMv7FG4BhaeT-jxmCEUBAhvHbz6AJEh8le3EXOefZBCUa9R9fj4gTTCUpUDI-Tz7HxS06ezKMQGoFyFcGO-4DFlc9pBDZacfqxM3td~uviH5s6N-LGIIj6br0X2s42~DLmrk8GNibUqBrs0F-dt8E1Jkehhrn4ubupc5RR47LB9nsoQEWimbyC6lAp6jfIEgpnvYXdTTfWVpbWd6pV9na7cCHo4ofBiEwKW8fKnLM7LtkE9BIzza6oA5SFV-YhWvzTz4yuHNiLUQpPy5rz7y2qN64HOc0OsoPov0Jyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Disabled\",\"description\":\"Background color for Disabled items background\",\"created_at\":\"2022-02-25T12:33:23.072Z\",\"updated_at\":\"2022-03-07T12:03:58.295Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\",\"},{\"key\":\"ddfa8623c96684cbee6ec0e1ce1435d9253744fa\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1409\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4oZ/975/YTPqaC2J6Rh7PwOc/style_thumbnail_7.png?Expires=1649635200&Signature=A5Qr-~73rVvJRABNLzjwRlHbLiWjpU01oTDi~MJBtt-tts71owDWAxtvnHuF9pvkdPySkNegt2y1bFD8YMCzsNVBn~FSYuVy8CFVhro9uNQcyR~~h2EigFpsgHwXGgcZ6Nz6IQPKWoKfM4itTi8k4bQ7On6yRUO9AF9nnW2A4FAYWdeJIE4yO9PqQ~8c-Qj3~OBN8Bjj1Y57nt5I0GFsmfKQ1vtct1z3haM2RTd7ZemEdcY1dJWes7E3WsZTaJZ0f9wGPaRT4BfA3BXOt6ymyBqGWDYGvvQMSIi9~-uDWhNVMWg~TI5nf23-S4mQzVaqLrDxGa8gQiVy2GeFrWSCGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary/Background Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.752Z\",\"updated_at\":\"2022-03-10T15:13:44.564Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"z\"},{\"key\":\"dd296095aecc4bdde4e6c14b3af3b509be52056e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1484\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/alc/tbm/lW85fZ2AWhqppBLj/style_thumbnail_0.png?Expires=1649635200&Signature=IM8GqKiy2V5FUzrW~0b~h57LAJJRIEj6fKxDsFb05lz3flJGNfbb472b1-bf4jjbr9E7yDRyorLypelqvVHvUdhZGQ~8ZWsnDfq12Nbl4mfvvk6AvG69Nnywg6xeeQe~zlpBVMW6KbXvy2NEAtcCSLw~PnafW4C22BeV2CXIwNkuwMId2I~jQqz2MUzooNqKpIfcwli00mG-0XPGFrYOnmV48D9Gw59rW4~UVoiM2NdYhVgIItsEWQXEkBZZKcutn9JJrscHtK4304pyJdMb1UYP2FGDfRECZZkgS9JlFFj3nYNz7bSkOUEOJw-AsZyXetcLc5J4Cvdj-qGe4rZTqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.797Z\",\"updated_at\":\"2022-03-07T12:03:58.276Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"T\"},{\"key\":\"db793ef082f1fa1836a32e8f9bbe74bb9f6e433c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1520\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vNL/IdJ/5G3gIZAae4jffV4O/style_thumbnail_7.png?Expires=1649635200&Signature=WBeb7HZsPOl0bHjXaFflF4-WAyaC5Ra4fyrDZwZWwn96QiDcfvt7bJQwiLTdlZauREti~jiE2ym9IJckVOq~LxfB1eWkeJgpgZklwk-F22eEUJlAkAbu-fWgCmXL29OYlqqVUILio2uy9-G1PiXj5C54zMimFlDMZdXR2EscYNVxZTqPzXk48Njnfr7H0bvhyWmpB47vNjhBjI3csEkjMeIcbfOalt6GOfggiw38sd7~dggZsrJBLTTBL0krmcdzCv3kxuCjXT1iztgrkyC35Jb40IKSRPW4vIbhNThxSEQwW15CF8FXzhWnaxz5NAKgkkEuHQObRA95UFsVlevz2Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Announcement\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.077Z\",\"updated_at\":\"2022-03-07T12:03:58.270Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"^\"},{\"key\":\"da68c86178d531db12a16ac64163bdb3d1a8ae65\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rOm/XgY/cid1FcY4lYlPheNq/style_thumbnail_50.png?Expires=1649635200&Signature=TYXVQQOqW3kZBBAJu0IpOtIMucxWFFjkd7xv66lkSYomLTbjWrlXwNPDtScU~nyA7FsClJCkgsC-jSMV53ssakrzBFJFc3o6wpJOt6zcZL-h1ssBanCG76UaCxvJ9ZKonUkMFwYs5rJShLToB3fR3qLV8rTav7KPgvScipOcH5XeM56lFiIbGc5pGhQ0-B8ttxvFwfdmJClNGcaJIOk8cE6dcJSKmkWZQsXuL69yU0zppfih8rcE6jmM2usTpDleQ3YSYriLM7FkZMk1ZuSAGN9i5STNnYb-8BctCPfv5BiemvozIIrykjqagZYfyxtkWSSZZfBe-HdHIm6xj3WlHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Destructive/Background Destructive pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.762Z\",\"updated_at\":\"2022-03-07T12:03:58.264Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~*\"},{\"key\":\"d664cda1b0c838d129f3bcec3d90882d8fd30f18\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JFK/oYJ/UNP2gv6lRf1znj0T/style_thumbnail_21.png?Expires=1649635200&Signature=eqPDYjEQ-seKgFL0SQkoE0rH-N8zFHoFyH6OcOztvbe3KgGXBMSkmuyRdgABbW8wbsieT3zCRTuYg8hoBaAzQBNHnx9bRGnCnKPYcayA2taU-sdBXRcl9QRhMRiFCTwOw7lovfvUacrGdSWuyoOM-EVteyDVpsqdrIvRLpJI6AsX8Z7vrUlvLW6GhvV3AsqoMjpetUnvk~rPwpw~jIQ4H87rOW8OEPG4C9SRtnsWAEdVxp6rszl61GOTpNeWINF4KGila1j9mXACYPQmYz74UAAta4AnVOtYH5G4TbHQ-~eBhdxESxfG5MAjz10taOpv6PmDCLCgVskT8XV~A7HtKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Plain/Background Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.701Z\",\"updated_at\":\"2022-03-07T12:03:58.257Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~#\"},{\"key\":\"d4041ec911dc273c7951380d7c591bf8046286f1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1758\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HCJ/w2x/XrqeRrvUyWnTz5Gd/style_thumbnail_19.png?Expires=1649635200&Signature=QPXnQesuYqZ~z8fHtBduUnL0lhbgUFzRU9Adn95rw1Kk-FiAm5UnfR0rQSpY~DzvECF4CrZ6hL8PeHai5q2EuL-0VZe2RyyDTzP1L8P3mYph-xNla~Lw6TFxRoUtkPi8xblrZcrWnaBTWZ5~zM2BAW4HakJVsC~XfdWpcAkmjlzqGfBfO99-mro-COvrJ75pKuSiF3MTgpaYvh2AZp1UhyiutXJw5ObFcfDXt4FfqBH9gXKUXGicqRp9KCxmaLfQbx~26Go5XgrTIkocS4QT7YN1K1iDS3OG0IlenG2-5b2DvoTGEQsW9T4yLtGaIHsnnfTKRtHa6pVcs-bgwMr1AQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary Translucent/Background Tertiary Translucent Hover\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.753Z\",\"updated_at\":\"2022-03-07T12:03:58.246Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~Q\"},{\"key\":\"d1577c6dd974cc1f532e416ffca256df07b3c9d0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2396\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HG6/Dtc/ntXuBUW0IR0GADt6/style_thumbnail_4.png?Expires=1649635200&Signature=UoCMTQ-Xn-DyeqZFM6wW5S2VthNCNw561AhGuJ0hrn4nXxutiETxDdp~1688-6OvtTvxshoL6zgukJAF3lEL26xA5wYLSiGMDOvkezEmFsDuExCMROqoIZCqgEZWLJi6jIG5UHWQLvuTM6wURc0qxAe7qAbtGuujnwsplNSFaAfOqECia4fbgC8zVTiNfAagbPrtJH6xtmIpDVWCSA5Vp0sA0RTanj57c24674d7HiS~VPU9I9YmvXwxDwtckugffrKJtsn8V~GyRdJU6WQOpFwq906Jo8uGqFXuudlpgaHHBLD5rS5t3gHxmxF~z2mpUPKvCwOV7rb7EcCZK7chCw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected Low Contrast\",\"description\":\"Text color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-25T12:33:22.507Z\",\"updated_at\":\"2022-03-07T12:03:58.234Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"4\"},{\"key\":\"cf6767f66c45888b1e41ba493a433e3273a89d8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1483\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ba3/T8n/QwtNf0y1KFxr665k/style_thumbnail_5.png?Expires=1649635200&Signature=Uv1T6wu9jA9re6q1A68LDXc9TXqc3rY7M~wGKTGruw7r7tmvaacrnhMqbt7wmblcNPb1AFAoArmHJjQO8LRVxNMNCYUnS2zG9RPhy5U3mp50NgYt4uY9mumSdAeM-6Szz0RLedSLzapO6TNuLTcivZ-viTSunR~FDch4fFOLsouXum32JuOQ2xvZfGXQOnCropSXWrieujFWmL9k24MPShTLw3iKxinHimNqKQ5VmmoqnAJnjWIGHWWvHZ2GetwCw1cTWyq3Kg9p3KGsZGX5LfyOOJaUiSoKjKAulc-6nWcOzeaR5mfL9R2qYvPWXy-DhTU4X4j3ZuK3QRGb3yMr~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.887Z\",\"updated_at\":\"2022-03-07T12:03:58.228Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"S\"},{\"key\":\"cef991d8a5ab81f69894865025e98c55a38ca11a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:457\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0Lg/JHc/Xvjs5XjOf0KB6QYg/style_thumbnail_103.png?Expires=1649635200&Signature=Py~4wtbYrzp7o8Z3OaT3aIslWWYSb0oLcRHb81XBgu7TPqQfPysECSwDmBk3V2ioHK~nuEk7XJJizr~NyoIZMAkRk3hzwCo133XpD0SDqTjo6hCcmxEbhWrSL07isgBLukDdHiv1ZzY0IG-83eceI1PC1yZedmkE8tI3OCJHr8MtkrktCLoCYCKSHtNc606-35VwFZqw-LGimwEBSmFrcukMTJDLLiK-bJtOMxtXUt3dJEEi8~DQWc9Z84FLbgGsSyWxa~VFF3UwLIvWWLrik~Av0-kORVpH3bQ5FBL2a0QV~TamZrdLpr6iOtmbaX6NZDpPjFcmbdDGpwL7cVx4JA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.047Z\",\"updated_at\":\"2022-03-07T12:03:58.223Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"E\"},{\"key\":\"ccbfe8c54900bd4238dab48733ceab4e2246d4e5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1315\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/7hQ/AnP/SmUzHwNzb6CpvKPc/style_thumbnail_32.png?Expires=1649635200&Signature=Tm9RGEt3Um5rH5HpsZNKdMxhLa31EU-txTdzFEGq9Nn2zrm-LIkgy7jsfzpxvmVKR39byICDYhF~DsaI85z1bow4EJYTCNe3hz01L9~KQwza~nsYMhSKpURvEmreXa4P7cjLl23tAitO3ymMHorqlmxt9IifUg786qt~d6AuhrIKkreQUk0WpAaO0cQ4aBo~x6nbKAI~YHmTOmxAKHer9F0gna0rvnMmKCpvpJClNzSzH4TltP3QKSV5ZmFHmuHvVC0GS-xxlcvX4v2xQPpdEJY0Gq8ijDTmTWX-suZTQ~dVeQ~I8S~tb8ewkXU8XuEp43Q69k~NSp5PA6M6HfP4ew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary/Text On Primary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.667Z\",\"updated_at\":\"2022-03-07T12:03:58.217Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"r\"},{\"key\":\"cb27bf455820278d574503da16a9577b830f5f86\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2375\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PDr/4Tb/dNkjZ9DfgqakEW7V/style_thumbnail_0.png?Expires=1649635200&Signature=Fb3QJVs2rxMYjUabD-2Sqfj0pU4F9Nb4GUyiX-jPAw9lE0yb1LtcJ~MteHoOG4ZmsGu6ecQvLr~Jvs7OSybXKga62s2A73R3QEYcfF76UbL6LOfaOzoeGjm2-GLSKoPAm1F-ZDKl4o8WtatIMPqmLzZ6uSTJPq3tCzAuzovb3ZNhPI86k8CzVzn9qdG76LFlskxESp2JbDUKt6pXdYmz9Kkjn0dVBTt5zyoUgER7Rf4fJ3rcy-cwcFO6BXX1GkH4tRgqWgKd-xbE7PbmkWZsQgr8HB6mG9QdaHKueYzkGCx7mrKz~GljUAzKhPzcjnG20zkHODIgOY~Jvb66tv0-0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected Low Contrast\",\"description\":\"Background color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-25T12:33:22.584Z\",\"updated_at\":\"2022-03-07T12:03:58.212Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"(\"},{\"key\":\"c551939b9ebbddc410173b4f09b2d6b0bc214962\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"20:527\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J1E/uIb/MsdfTb0rriFXVONQ/style_thumbnail_51.png?Expires=1649635200&Signature=OCgFLjqdHmFOwwvKpKiLUlGWxGeypknmDxeuF8JX71nOYg1mrGrhY6BlFSBSvLZrIoGXmBK-c3DpnRe36X6sfdUJaU5fHlix5-h4AA3acItVqDlRdj-ZQ5tfnmV7koZKjBOxKvQnVkORHUJXHZ2u-Ezk6qgMC8VhPU0GP5dbHbGy1k67pGSn9JyA0CotKXKIL~WHOytbFnv3UUOL0fd-SUhRAFY3O0q2xOvmQso4~BApqPbH~Eor-JxZ-MdTg9ExpfXuXFi9Yb1CGwYewLlcl7PeoFC7PTd0jJ9qLqa5Uur0KikRyg9HBA62b5wrTIw7BfGHVQiVXzE49Not1U4Vhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.012Z\",\"updated_at\":\"2022-03-07T12:03:58.207Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"B\"},{\"key\":\"c53592be88467964579e37b727ef47a4fb6b115c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1436\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Sqk/r8w/oFkoks1wTBPq1HpZ/style_thumbnail_59.png?Expires=1649635200&Signature=PXrq08r3RmPO018btJjHu84hvFllGKxu5OHz86ZnuyQvckkwdXnwcMMAscgMuCsakgyHTtgAmFYkmy8sckmH7c2mfIp1qpAAdgy1VXYogoL7gBkX6E4EHokzuozQ6mAWstzGAHTRVD9YJYnF3FCQiQZMETsrXwvvEfzHVNlRSz9UZEiImT0ASzuMGB-INcgOXutaKua1CdRB0EPz2XA3k-U0mhbLixM~WSwCEQgp5DWTY0oP9~HUu5ama5Tvjbhg3qo24ZVEsuIsOmO9luc7gZQwlelg9hP0-cy4UnZwcLUkcTy5YWUMYrTS7~gP3ukH-ftXEru5IdehxPnukZljKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.807Z\",\"updated_at\":\"2022-03-07T12:03:58.202Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"R\"},{\"key\":\"c4b4f0ae82dd56acd14102aba5cba037fe849733\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1323\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/O5X/Kwu/xQdUQLPj5vzDupad/style_thumbnail_20.png?Expires=1649635200&Signature=hRCgnbrc~vHF36fVJ7eTFw8leq6LZoD9~krZtAUtG~8ivkctrlJUa-Gf-T-d8qJ39-r4b2GvNkv7ApYMzsZQc2aaGBLhos7WxU20XNkMkws7bzUbbsE6QU9yRPz6jUdAGdwKcw0tb-PF5P5fMrpFrRXm4mCx9ENDYIjQCyGdhkeOOEgcz-G-jVERERu7RB15eqA8VlZhSZgjttwyeE3Uam9FMBJV4M~IsIHkuCv2KQ1RpXkGsVPsiuGroyZyQcDiFI0Eg9lb-~xALkp5DmtIFmZ4OlW4~NcOP5-oPBvP6nSNqWc7j--qs4JXpCI952sQc-x1G5LqM1dYAhe0Nj68Dw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary/Border Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.674Z\",\"updated_at\":\"2022-03-07T12:03:58.197Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"x\"},{\"key\":\"c31bc4407348a035fbeafcb7b6204ae2b9f74495\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1761\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/26v/1Tg/p1yqPu7UCumifShu/style_thumbnail_10.png?Expires=1649635200&Signature=SvFbdjcd3KVIJdZaUSWJdIGY7L8CH0gO7mrQE~eXU~pa-BlfSr2BFWeBaDx4Z-tebbllP0qE9CU44eKATzJ6Mr6vQtZwlRWDXPpaQALm~r~5vhDK5HYH3g2GKo2ejGQDLU6tkLmcQgAuBvnxugwRb23pw4YAdrBhnZ7XVN2N-ZikwR9hyxNpVFlMb5fgA-QJCfmT68udw0W-u6Pmu6LH55WrwhfR507NyZolegg~Lf5x-7Vu0j-UTitPqrHEHF6V9ySwweWV-rOYJHf4mo9gFMCrZskbT~6439YkRchkgHsWd-uEH6AXRs4VlEJjWGVmuljfUVibsS8~V8AJjoLq~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary Translucent/Border Tertiary Translucent Hover\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.698Z\",\"updated_at\":\"2022-03-07T12:03:58.191Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~T\"},{\"key\":\"c00fd69d077ca84f084ffd398a10d6b2660cf163\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1312\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/REy/bCR/ePH3wy4koEFfNwKh/style_thumbnail_39.png?Expires=1649635200&Signature=VJ4Krl4GJwxvNI0RzsmqMe8KWKG6zUemLZ6MnnHveWlTBzQieA24iuUgL7nxq~d0MlM8gqtTll~wl43WO-2V9hJ0ET29OZq2bcSfnLKeoeWX3MkDsNRUEGV28shwtmkpAgrrx2Zxjqw66~R40BA0GQcx6Svchuy2W1hFMo9gDYUx-RR7HGfPcEM545VbsEc1YkrmfyiSjc~vPQUES8H8yWJKHUzNVpEgNjZkDx0WJFk3DWRFMq-GajedJRkBWwqYppkwetAMX7220mPtxfc4R8Ij8svF7ae8tL5YPKV6BaDWq9Jbi3ZjOvTj6GZrP~fU96mf3hIYcIZFdmjxsjUu-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary/Border Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.747Z\",\"updated_at\":\"2022-03-07T12:03:58.180Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"o\"},{\"key\":\"bf751740d511d4dcdb83c93ee97ddcf12dd79a3c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1647\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Dj7/3ux/rMbrQu1h1ekjbceO/style_thumbnail_14.png?Expires=1649635200&Signature=aC5Fgb~lDvU6EesNH8olWofoycJRVWDyVqJf-6yzH-w1b3GwmZzXt4fOvIb5-27kv6lJpxzhsu4ojyU6QEphXCpGC7x3rubNC~RNnxsi0SsRcfAUKseQ5PFdHaPJU~n9LGdZ1QLHbVDj49LCCPPg2G0~A1UZwhZGPAnRv0Z1BEWhVJaG-YeAzMuJFZWiHfuEnOZnHYdrFN4kUuEyY16MHMsvmFu1wsEHFAT9wi4TZ8sCcwfEnKzaKo9TrWA~YSg4IIhdi15ylndEsuWuULmwHb6L5p7R-BpAl1gG8T4HAkBcaPzCdCaEYuzM6oyYs1f20oS4IQDag8Zq~oOIbIF8pQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Background Primary Translucent Pressed\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.722Z\",\"updated_at\":\"2022-03-07T12:03:58.170Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~D\"},{\"key\":\"bea4623dc162779967304c555bd75109890a5f15\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"21:454\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ARi/zXP/8LCLom5HocyIjW0X/style_thumbnail_113.png?Expires=1649635200&Signature=KkwiX~ZfeDVlPNDJTTyKvU6Ifyc0ZvKFxCLOUf4KrUcOL1qMEbChKHgUXQhyRIOZBQEo-kT6GVk7Z36~MweSEcsilEqt3JJzsMHIMW4lzJQGUHqLxOzEJ1skIMs9osIvrLW2~zlpBK~KyokG3ZhTf-B2WPIaVq2HeB4hkjfunyBKhRxC57KRsXbZzSCTs0FpI76QRwtz6anpz6CwAF4SJ0d-7EvfaYIBMdYcM98HEVWLx5rb0nvMiFNpmLpPU2cpi3fMTpB~9kkUrA1UEw6naC3AnPKnoPctp75I4W7zPSh6UBGjjTnzRyAwhjKaBvtFZr0eiFHbzJnxnZAL90~2FA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Foreground On Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.101Z\",\"updated_at\":\"2022-03-07T12:03:58.164Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"D\"},{\"key\":\"bcd86bf284a03ad183ea1ba56ad05474058ea1af\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1307\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/eKy/zwM/VGqNaovIYj6wykBo/style_thumbnail_40.png?Expires=1649635200&Signature=NO7tL9Ak3e4f8zxFyeQK08~FRPGgh3kOe92L7BV-Pac7RZAAmEb~f7B1kCiyraG~aJr0b7crFmsA3hFPwWKPS7T9fIKvgRz6N1KQ7IjIYe-HnEk01BqymyQWcI4IOjSh~IyvHdgV9-PDASH8P97F7WVlBEh-kdzz7CNl7r12B9CJYPD5vUyuFMG0W9ZbgzokapLNUJXMhcoYICHUj8imMOGuaDqcC8nqIvTJqQfjVWED~S-rk9OlGBpfyhdQV30-h3F6sqk-FfihLjf0hEkg3mdbgS7Eu6QH~-VvpPf3Q3mPrWKDjIqncLNTzl0wiMrWsehgSyiIn1zGbPFKVLtYZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Accent/Border Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.742Z\",\"updated_at\":\"2022-03-07T12:03:58.159Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"j\"},{\"key\":\"bc570b6f33e00d9ef7df42a829bb6f9799bd08db\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1486\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yJ6/nrN/Rpi8SgLS2eotSZ1f/style_thumbnail_93.png?Expires=1649635200&Signature=XBjEn4IHe0C46m-L4LIXtKcprFJirSB5atR2aqt484I6tnks9btYB9KGLQIeEQ-3ClLdc5XxeWrwfinLTYbOLaaOuoD7WZUiqJbKKUuRy2cP0~0ZkP6ErFP5DKlAwMgDwkJvoa-rQ456OUIb0U6gauAXuN1YGT6g--NM4I7y-wX7HL9LehHFbd~z0KQD2bzqj9NO2fHjChXGsKu-0DZCyWAQc24F~8QquvqdMKu4gcIj-clPpTlVtTFcwWjoicOfaqYQWZxdHDK6wFp~mV-ta8LG7n8YAlZpZWyk4MtunXbVdTF1BtTkpugAtZWcn0CqE0xERObu1blCh~tXVOlXxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.992Z\",\"updated_at\":\"2022-03-07T12:03:58.153Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"V\"},{\"key\":\"bad789d2a0e03e2cc914d9dcb6592f469f63e139\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"30:1309\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vGy/bs9/9F5c3h0B2SoBBrMd/style_thumbnail_49.png?Expires=1649635200&Signature=Ms3gEV773Kjzj9uoF37GdXjyuC7rAncPyo-c02wAJSYWH6EorrSHA-1f6HaAfVkVv9btjlFvIG8X3HrbDRQmjb4ZO8UxuqsQSbbFdt8aihW5DdZ~gZXiuj4um6lB9fbR3qjKGxTpRW2KqsMVKclFQuzkWrGQBVtHBFXf9u0~rjgFPmpTbKak-hsHD45rOauG1hBpuHVroIot72KXI193GmggMfMqFwuxjY4l3QMZSfqeng2YmtwqglzEmIs14bUpjMztw45O5P4t6pfR-O6RrC4FTjeYqhafzL~hDK0gWrZ-9BNXuewoYq-crjXRCWkvFrVZoUlMBODY7MLDMHmevA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary/Background Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.007Z\",\"updated_at\":\"2022-03-07T12:03:58.147Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"l\"},{\"key\":\"ba9758f41653205459c7b99e2e4aeb2f31755331\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1430\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2jt/RN9/Sp8KHt1jd78ysz7a/style_thumbnail_64.png?Expires=1649635200&Signature=D~KjQ6kidq-co0MgAkMPnhTu9dhD8isKBINN1M1oudOXP5JGv1-~XKI6Oy6gI3H~JOCAlAdZ-v-sT8wfILdn8QHM7Ke~0BuvMcsDaqf5v4xKy-dnRgY~Qnh5MTlX~NqiexdQSyMGe5FP99qhZGtrzf11mzIDzWNO0nr08ILiMU1SQzXVGi8IJBePGCs6OCAf~-Rqnnpkt0uSyCVZdaH3Mvt4TnepZ7oIBbt1y7xqcLwix0PgkRaTjQhZzRA5W~9DaSH-NdR~5sOvsoFzSnjh1kKnIgwPat-F2lQ~IKVxRgRvJhMaa8DQtYFtunsH1X5VoYxAPy79GiBgBWCPdemlPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Warning\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.834Z\",\"updated_at\":\"2022-03-07T12:03:58.141Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"L\"},{\"key\":\"b93040224eb7a46f860d99e2ba9f95d7f9f38a6e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1704\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kt3/d2s/7Wvxl5ra0pTRemAl/style_thumbnail_6.png?Expires=1649635200&Signature=VVOXcOIgLCXjjNYXf64n7Vp4CRRC1r7ojtReADoMzUgHvUw1oM1xanVs38QXGaEbOC0opv53j2FMzVgAPk64sFaG2NWEDBI9-FwCjO3Zf9~Uo2g02jUaHxge6S2GSO5K7JBxScFRd2KABjUUP~bdMgJo2AMJ-uOVRAP5C1LoKTV1IZs3CCH6GIANLuidd5IwD1AUHGywLNs1YxaW6C6Pfa-A8WRBy0lW8dBNUNZgvIEJC~BXsG4GgXzse8gHNzqo1sWg9zhIWOxXZYQkGD5LV0kDNxPLuC41ogtpC7jwFps9ULLQBgJZOV~-EthL-9DplASn906akCZ3BUA82J3eXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary Translucent/Border Secondary Translucent Enabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.673Z\",\"updated_at\":\"2022-03-07T12:03:58.136Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~L\"},{\"key\":\"b5cd13e28cd4200dda7d02b8494861e466978dd5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2384\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jcK/qd1/PRXf5ebUjYiS6siI/style_thumbnail_23.png?Expires=1649635200&Signature=OMe1y8nJNOjSpt5Ly-VKLpLUH3pmnIfiIyK5XXxGhHHH9xHOrfSP52R~zV468XO9OG5YlytFRTT~WbGJp2wU5Bhhj~NxUQpP3Q4fMh~IejjE4NhhsqTWGShfns184OxNNxgYKVoypKrNGmc9aSp7TV-JvUr3Z6~Q8tNHe9hewMzQudDxtMDiBR9NQi5zZrt--YPJaXDcXzkFk5jnWiVxUzz8O1afqcBGppCqXjJ3TH8u9AHnmqhv~nIHEU4DObc~2czct5rv~LWamhXnUWLrZRy8v66yiR60UK~jXg~jvj62LTDhUICLJRh8rHWORsINYEtvpsodUR-EdtjARI-VyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Disabled\",\"description\":\"Text and icon color for Disabled elements\",\"created_at\":\"2022-02-25T12:33:22.606Z\",\"updated_at\":\"2022-03-07T12:03:58.131Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"2\"},{\"key\":\"b44d68edc095dc41acaea60028bc1ef76eca58dc\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1514\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uiX/Tn5/xee425VzxlmqPIcl/style_thumbnail_72.png?Expires=1649635200&Signature=XL73GhVdkYp3GMBEfNYwnCUoOgBmstxc1o8VEgLx2XBXwKRP~7222Tp36FqsNVKJCny6ajnjah3nuK9RBxvDn9I~bzHzq9QYjRlFTeuaNmHV8Cznst~dMDt446arYBt2I31GuK7BXjcgEgA-XW87GM8l8uivh3aDl40UaZc20rfHv08FacY6uoT-4fSOGR~SoWqX0QpIJqTwXrNgv4vS4jCDwMBKoBQ1mMubLubxki4FpqT7CX2tDiUoDgk9kT2qsVIjLVBWIcnzkwcaS97boabdlXv57mZwk0fHrR6pYVvV1NIoUukFsDzEv2yzQnzt6fH4~B2EvePUZNdZNC2b0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Operational\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.881Z\",\"updated_at\":\"2022-03-07T12:03:58.125Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"X\"},{\"key\":\"b1f9a9d818a2495ff614d2f1f4eb81ad5da263a3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1848\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BXn/jiP/XXq6maH0274WCe1o/style_thumbnail_13.png?Expires=1649635200&Signature=UP5h-YWugndM6w6Wm-QflB0f59bx-hOJ0yWpbImkezmlt2pMqrX6Lmboq8awQUE23bbdJ97T7nc-~kiCPfiATIFhyTnsYOY69CnSaoHiIPGrpFYsL66ea9WL2goTDckDegpFh7FgOFYgUd1ckjyJtarom~eDvIVawCkWQ7eZsegXACZKApfheMFuj-BuAJkT2Q2NJduiIQ9lqGVsGH0htxqiH699dPCuDUYt8q-8JY6hWZ2HnX~oKg93FhRpDkWJp18rypR2VK~KpIEZQyWOaxWTpk-s5reWoOfeI6ccYgunasS1YYY7OT-mAOnUzHXOxmqy~QPXfrI1J9Lp-THLuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Query/Numeric\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.553Z\",\"updated_at\":\"2022-03-07T12:03:58.115Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4\"},{\"key\":\"b021a4e2fbe5872cabc2af3a8d0b523572483698\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1085\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cTQ/ka5/mYkfq3A3JQOTfaKR/style_thumbnail_71.png?Expires=1649635200&Signature=PBUaOH61P~5sCrvUscA3S0P~0fYe3cBNHs82QMdrEwVloiltHx~EZrjZbNGj3GnQzyXkEeIK62rvoqel16t3twGolqKHmI6ko9plcbdkfdxMMH4el2Me~XcZu~kSouG6Jm8fMMSM2VhfFtq6Vti~Z3XVQi7QgCyK2hv1RhhTdK9tjewT94WxON7OvQPrSQdV2cwRzQ4DC7d-ooTZp79ym6QzJ5tZp73djspA39vDqukl0Sm0DvyFm9hC-xIQZyPVhdZNCd-lRcpmd04evET4CUguFB33FFMKl1S7NgFJaKXmOZTO8TpbpACLK3XRlbNjCsKp7CZyAKDc3OKo7Mu2lQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.875Z\",\"updated_at\":\"2022-03-07T12:03:58.110Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"F\"},{\"key\":\"aedc5a90462a8686345cf4f479fcfef61aae471d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1706\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/qC0/Elh/rjPAUDtXSuKSOGOQ/style_thumbnail_5.png?Expires=1649635200&Signature=Lx~mvdtILkxlv782g-XNvRWDEgwVUmuEPHp6s7G92AcuVYQRbiQfVx-1N2psqY8ZAPyh6i5Wy18wGyVRc8FKJoP6tzxn8yC5DLpUK8VowweL8hMSQPPO-I501RZOiKK7zNxMAArBYPwFzN9W9Ztnij8BqvvNXnUV4dgjvO13t1yu6jAxVd3TSbfJx1ZBWhn-xjrzLJnmgYH~iPeB~MTHSpyPnrkFPWK8jjUGRECrSrmlOqqWU3Hlk8DD8~s1qesr1m5JK~OzgEK-5uVSCkIYQrvmKQF0FIxPkcicXp8qQeJZ328ipw6Gt1bU9UZdgq-zUnB1n3ZjshZ-LXOQFeNB9Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary Translucent/Border Secondary Translucent Pressed\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.667Z\",\"updated_at\":\"2022-03-07T12:03:58.105Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~N\"},{\"key\":\"aec0b85cdc132faed547e2be013ab70ed55d397c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1322\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/MCl/Ana/Lji53rRrjDe1bvNa/style_thumbnail_53.png?Expires=1649635200&Signature=gD0rRJkmgwJDhOPrBzrGlqYmT0R7vfy3QSFlCudH23H16Sf5oF8o3Y~HxkydBAJvOElBkJjBRFVwXjXM3GVdF4vgFitcNri8jGGxyrZiq-oVPhMotzcF8Adjy4HSPahhR6MU3hbmmDGZlGVK~N50MykSTPb4R8n1rJF8Y3Z2j8GEbnFgSSUt1dIfUbIJXwODUX~fZ-giIilQwiky7~2m2RrT-zBzm0aknkO7ZLqwrzyzLRtf7XA8cCoc9CDnXe4bRJ1j-56xByJ2rn1xdeXCmL8sj4ZenHE4dYuMjTUdCyYJbwfDvpyCN2NWNEmOZN0ootWmtITKkrXM1Kxsl5X-IQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary/Border Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.097Z\",\"updated_at\":\"2022-03-07T12:03:58.099Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"w\"},{\"key\":\"ac6aaf18138ee04da9b38b6b3108c2841a83e65b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1701\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/w8V/CnM/Igs9cYWT2XEUtah0/style_thumbnail_16.png?Expires=1649635200&Signature=Di7gTDTRkZ2WJP20FVPh8JHZ4EvQ9y93y1mXtaWOhi7ignRPkOtJRGv369toC~kOpo4EFOYNQrtLSOXcu-tEdH4lr-py~xkxdlAS5gCJw7ymc3Rws4us7N4b96DxDQkxiyrfWnj-dSYFDqG2U96JqQhEPa-sstw2mMI2Ixl6kVSycphcNU0vurRFuAy-0Jy5AVlO1qumardBvdnJz-ChHACjzLhLLGhzoQUa~YSOy5cUqF54lTokJAC09IUPrCHc-QZpeQfl-pQttMQbGxMTbDSxh~GhCU8oLb6ueMyRhmy~Kwf1XKtFsS4MWeiOcgf44JzmMh771z5jcIRY0UIIcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary Translucent/Background Secondary Translucent Enabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.733Z\",\"updated_at\":\"2022-03-07T12:03:58.094Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~I\"},{\"key\":\"ac28d9ac5bc16703ac4fd16e7da5bf7608dbd522\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1417\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Zcw/T5z/9ASeThJvloUV3pP2/style_thumbnail_28.png?Expires=1649635200&Signature=LyHxHjoFwmCXU8qVsLTL04CvpCukuC3tP0eu9cyoN4dkW9BLoKu8nFyQQA0QKpd6cSsRPEmV4lfbuRJzpB~qtMmRejbjnLtJEoNgfUhYFyLOFOjQQ8i9YVQbOe3l8y5sdtYt4OQutns3s2jBQAew5da2R9QzD8x-Fcjx~1Ur836qYGqa8m6OLHi0L7yBpvAZAqgiylWdLex8cv1K~lIekXKSWfblKOMtXDX-wsID2L4xHamp6Ky-slCeVvCWKonip2SkZKweNLDNZTTxPPquvLYDYvcVQNtJkOQBHfUuvyFVWxrA91C1ag7Fq80NiCwRQzaR9ln0TY1FmK9v0Recgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Plain/Border Plain Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.579Z\",\"updated_at\":\"2022-03-07T12:03:58.089Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~$\"},{\"key\":\"ac0cce503094fc7f8764978d28c95f0580ef5f8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2380\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4Dw/WWM/G90OoQJg8fif6jjG/style_thumbnail_0.png?Expires=1649635200&Signature=MRp2cFcyOPwfzx7x1RPEjRFQWoCoTcmY~U3CGIKqIM7Cnfq10VilbvTkY2xzBzKFhYpCxkV~yaYOLX4nvphL3TRVFr06ioHYzLlmQMZmRdPH1cjILxQnk8f1uxkHm-BsT4foupkGkZvZGeyK5dHlUoY9NuH2IQJTI7bdg-PGn8IxXRPQt7YFyfW-QvFMUVMqXmYMAm~G8RcBdg3LSSDkiTRpcnjiRlvWS5tr8bBSSRBtsT3ABEx5wubQbar0YsU4jMleccWRZkcOF4K6h-94pMjtIY7aEnzl-~YeFugID7hn2yHL2EX~yIDiCjO-xHGwFNlB1Q~gqXUnGlHGY2F5ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary Inverted\",\"description\":\"Inverted Primary text and icon color\",\"created_at\":\"2022-02-25T12:33:23.116Z\",\"updated_at\":\"2022-03-07T12:03:58.083Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\".\"},{\"key\":\"ab4389dd8ed997e70667bf1e90f6db750385a877\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Cfg/X6z/kQgqFwGnUVnxsxEV/style_thumbnail_5.png?Expires=1649635200&Signature=F-cCjip0BxaPaIjCZ4yd~R4en2pE5YdhwyCYCh7ZcN1gYsJNSr049OpT3yRGIm6LJorzF29MRQ1TL~RjS-J-EGaCsqA8DJwfVEBv5YjIXqFXdsKI0nTW0dQdJlRVi5NMIVXY0aq7Mzh4yrbvJbFxxXXL0OZVtr1VxIcIvYexFMZ7RNe48tK6wKZw6EL0BSoCHslhjFUclogsi0TVCSEpOMvnB14xaT9rkb3rLLeTVzpph0Q5mjjNhsq99lFzh4VsFUVdqnUQ8DK~WhrCrQI0YKPP~wunMJ7QKfneuEo64zn~cNEHIiouHQBRN~iDy76zskR6gXL9woyvqRyiATDEag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Hover\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.541Z\",\"updated_at\":\"2022-03-07T12:03:58.078Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"BO\"},{\"key\":\"a9bb5eb525fb125506f26bcfbd6175603fbcf8f2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1707\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rnd/ZL6/sI8xDLGCunICaZiF/style_thumbnail_3.png?Expires=1649635200&Signature=VkT6WIghFKojmP3oodoM3RkeHsISGYpVYSqW8LU9Nf8LyvAP5wqbG-WBPVJSRzp46BuSTuI04nFUdIWnuqrNeZOFaIhvlF0VFOP5YQU5R2bnMK-kfJmDWc3CmA8qyHfLWFGPEZhJNXgT2krhR--RETkApnQkLtuz-KUqBKIUMlzxf2BB1sZHYHIsP9IO8FOb4UMFPaDD~MIl8nEbtQ2twAwpi5au~YRhNk3RKLEjdw9JCzsqQepX6RQ0tsV0HVT8IxN73VqjGh4n1H2oxycA1egBGfRuu6FooMCPK108eMwvIA1BYEeJCzVuNP3KztCy3~y0CIY80ZmCsvKctf0SXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary Translucent/Text On Secondary Translucent\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.653Z\",\"updated_at\":\"2022-03-07T12:03:58.052Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~O\"},{\"key\":\"a96fdb3b74e2c5ee64ca7a24a97529dcff020a01\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2373\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Icy/1xa/DKhmvmHhfJmupwUN/style_thumbnail_78.png?Expires=1649635200&Signature=gkbdfpwVNTnzBRu6iQJ4rVctGQlF7U68PWwf1xve~ANDR1zykiqKjdToVe5Z9PeF4itKN4eIG5D5p6RC2vwn-qbWpPcUA8OwF60pWPWcu4XutLVSSBmK-g2-6YL4GYVaHgPIUcHcWKn5pRR4ZOMvPc~H9PKwAvWWV1yp8ds0kbvkC73a-yrEMpJeYzTOSx9XhTpJ6aoKIXX7w5WtoILmtN8mH~32Vx7lPZ47I~qOwhzJW8izEk3KbglKfoFT5WeCPzc03cIFVxr8ljwMiRrGogReSMwgmCTb4fZg7Vr29hiQJkArsu-8WtrwGoSxk43dk9~QrpS5kjHy3UhPyajG~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Hover\",\"description\":\"Background color for System items on hover state\",\"created_at\":\"2022-02-25T12:33:22.913Z\",\"updated_at\":\"2022-03-07T12:03:58.047Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"&\"},{\"key\":\"a96ef43958dcea881346ef078a56169d988ba943\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0jG/eXQ/vEtmQdfd2OpgIhkA/style_thumbnail_52.png?Expires=1649635200&Signature=c8EyH81JptHmbowXAybTPSihFsL1JP6OcZKU2I33IhUTTXUPmnYYYZZIBfioPAH7f9JdTxZgJEOzI4gfwWROexnXlL~~-Q3tK7KCpp-IOFeg8sGsHrBG3XC6wQ3XUsl9PrC8jwDxp~1ya2rFW~GkzWnNlekwyhRc-2DlQdn33iWE95-MezyDwCWKVnOCBXNj9HTcievMa0xoSVvPifq1STA1auILfVARUVsIhtImbzVKrbI~djNcVQynF9w5spsxUxrXNh9Co1lsVjWY1qRfGTFy1URpvlxvuX7hJ9THjJRTOSmCpv4RTmI3BEJBoHPd6g87tj20nYw6gKF1mKA1gg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.545Z\",\"updated_at\":\"2022-03-07T12:03:58.042Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~<\"},{\"key\":\"a750f394afc7d56547bb0639a502642b1c445e89\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1702\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/g7z/vZB/unuHC0t3XNcknSrA/style_thumbnail_12.png?Expires=1649635200&Signature=WOHOs~xMiYct8HMCk001RD~ZpxNMEzSn9JWf6cvxRB6e-UO8q4YHHxC~RmhasnDs3loHx2457LT9DoP0O5TYCTTTtlnNqYxjS2-U7MX3E~ieRRLe7TasKsdluNDEDTMk04kmrC6qVfZERhmSq2OmPVaUt4GrD-BrehJKwFoV9yAjN6-UytbvPfE0OAMmLn4gG1Z7XkGjsdeAx9RbqnnLiKDOiJkpLxMRxtLMC5whOIBL2ZpJ7GsF7c8XGF8bSDx-RxyAKA3ATBgjI4pVHAPBMJRDkkPxbpzfWEKXzZcQ9iqdOBQQidPCxyxF2JOKkYv81YZQg0dkOwk~MmNq7Xj4Ng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary Translucent/Background Secondary Translucent Hover\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.709Z\",\"updated_at\":\"2022-03-07T12:03:58.036Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~J\"},{\"key\":\"a6d1577ec82aec5d32451b0639769bed04a44310\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/9TW/70T/AaV8ysEEWtJjxu29/style_thumbnail_0.png?Expires=1649635200&Signature=A9aHxBbtaGvG0wlehXp3kFLS14iAwFa4Ea2l-wYnmgQXuqdTRPOzbbUYosOMRZohFS8M~0ND0Pc3riY0yeVklCslZB4LjBqmfYjH5XFbQXp92lSvUsqiSWTmnm-cCEyn1~Z8-NR6a6SVjM5KFg6p1Rq6pMj2Zw2eB3hhxLa2wiyRbSWW-QDCEwnWSF0B1y9MHp34yDmwffXfgHwFRmBX58Ivr-dt1yBGeqMMfXt4vPQekHqyVULC9tbd4UCjCs6HeJe-jynuxw~FWATKPXxq~v0lB-NtMkYH0cWDnmyiyrMIEZbe-hOD4j5YlWqCewXaw6l2VRnin7rxlOOP7FrNeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Announcement\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.839Z\",\"updated_at\":\"2022-03-07T12:03:58.031Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"J\"},{\"key\":\"a2ada56137d9cc4b529a0cf3f3386cf0ed8ecb94\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1311\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0Cp/1jo/5N11yydS8OZrEgWU/style_thumbnail_42.png?Expires=1649635200&Signature=alCEn56LgliSWumU~edGDmMPQf6fGSR7xaCK6HXd3Vnavbqtgexy1zRpvv7~PHyuXNnRKePwM~MjXjCNHV8YgxjEWxpO~UzJkZa4sW2xaAk3NTIEV04xM6ijg8uSyAxqdvQrQDL64PnF3CTgtI-xGtQ3BhJoyX-4FVtxw7kB9b8SS6MJ6QrSTa7J8UYhqpplyIAlleWVvRwOCzDMxQ1UECuYFt6Mb5ho~V4NTQTSkAnFUc2lHg~7~2FtPhxFVnibqqywhLbEuRCOgaUylaIHhb043wlI1imlKDBr4~WLv-59FjSwwhViK-L6O59YOmitEVWV90SS1WkVnZR40VT6Rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary/Background Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.787Z\",\"updated_at\":\"2022-03-07T12:03:58.026Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"n\"},{\"key\":\"a00b0da40d6e36e18304fb96954d804102356292\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1302\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Bu1/xZZ/kEQGAzjSDMSatErj/style_thumbnail_4.png?Expires=1649635200&Signature=YY9Zan9bBNGwrbSd9TQertROgRkMdmlaUnFvcjiRHgCPrE6J80jQjDMmtjpx0jxSEbxmtttcZBHg5ve3FD2rClLJ535zP8Y8LrVmIO~OHuftDv6LZl2-8MvrqpULYs1aJCbO7Zr4eDEXLxNFRWmMq-ycFF18wjgdvBQZ0~11VieSe-Zc0WkteYgpkAOFRuMdxPDyNJlpPyvhHqMAydGtjRdQbsDoRPvAC2XSWUKAa3t8KgIkxrk8twGcI6ew4n23G8nHqABcueUH3bzNZrWwUjg-~Jp8gH7JK9koAZ2jNvwUSKGk3-FIby9D7ggfyLvSXwIZ1QgdZWqbAl67ZyXeKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Accent/Background Primary Accent enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.717Z\",\"updated_at\":\"2022-03-07T12:03:58.016Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"e\"},{\"key\":\"9d29ae538208caa7ea8c88d2feaeca6de88d5d7d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1760\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/S93/L3X/Qe7XuTClv3dMx3Ju/style_thumbnail_7.png?Expires=1649635200&Signature=GMsmKNjswvG1EIpH22JHuvK4JGHeAEqq3NVoYyxYVVGk7Q-kpiRtfLwlgZp7OVoDa12Z58WEeDwJjLu0D8QL30FmRqh5hGYbc73XqkLc8Byid3duJvLyRU9Dny58UYrPZgD44NbInTgMS~XpGaHfnzuCuDVvoydqSIODRYkkvpV5PNfRKZXclh3oISQxdisPOE3gHmPGa71Hefa431zvGFWAR1zQ86cpofbCDk6MO5q8BwL4a8kCuadyxlVFlfrDjJSx6ns9jEXEF1Eyc894L5VzCkQW6WbE0vuTjL42C7mGt6Akr2vxDaGaD-kXB2rpu7e8TQquP1UgtLa~Jl2Cag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary Translucent/Border Tertiary Translucent Enabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.680Z\",\"updated_at\":\"2022-03-07T12:03:58.011Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~S\"},{\"key\":\"9c9b429331c9b7fa3ec1c5f54ca47a607762bd2f\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1650\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HFI/3Bd/1UGJeG5EK794KNbN/style_thumbnail_13.png?Expires=1649635200&Signature=AQ5XENBxUdlvMzwomqbyhP8LgZssH~179HwuzbkW04pcBCTBxcianoHerSOHEiSXfCNHfjuMaDLrf0vcHjAWMc1JoLyDlG7Briuh27Hi1zOgYu-b7TVo1gutEVxI1ICBE3jF3Lyjjjx4C76a7vT4ANEXtr4R9d8AaUCcCikDE2Bt3LK7hxT1SRewvo8ZItx~QYo3lsisggxvMPUpsXm1KXJ0TeJOs3K3v9VYE0syW8s4Jw61GW3CL46fynsiY9~Ms1ZzSJuwYbhv4m3VgJtdVBz41fEDtqfL4X3kZX66~Rrc830l1uzTPXy9vCThZT-9jiSR65HfWGhDIhTuM7ZJnw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Border Primary Translucent Pressed\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.715Z\",\"updated_at\":\"2022-03-07T12:03:58.006Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~G\"},{\"key\":\"9b579448ec8eb443754483002cb59bf102510b33\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1763\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mzQ/vyx/DQNcZtgtglIhW7J3/style_thumbnail_21.png?Expires=1649635200&Signature=X0mzOZ~kUcngbjUNodl0C8s2onTvEvin7zWxgM1WKxRzuuXYOy1a39Fh1EjCxxeijPMYVaksFXBMT2Dfvcs1yOKvKH6Jv1BM5q8gs9dSI8D1N2No74gsuILg8iVFoIliuYGFTfP3WR2GxaKdKLPl0KP1EMPCH5AlOyAxC-rwZ1iNtu~KxeiFxmtKthOeHQpfW48SuyngFrpnQSc-~W2tRtUiW5kXul9GMmBdISuL2xwSQ0FyeJVih~k18qzNRI0drg5pizmR0HnucULUaMq5dhRZ9vkxkQMZd8FKg3n~syOv-AWM4Rn0o~99nkKAkwBZnEbGRh6NDo5klen1ARJmyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary Translucent/Text On Tertiary Translucent\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.766Z\",\"updated_at\":\"2022-03-07T12:03:58.001Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~V\"},{\"key\":\"99df447c6e9a955d690ec601c438370f12fc7dc5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1321\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VLC/WJC/2KwAYIFBwogNsdyH/style_thumbnail_46.png?Expires=1649635200&Signature=gSh5kDPCFDeMOQ6qmbCBHe5lmStEUjKYXoyBKGOjWETaNazxkOjndy3FoUOfVtFIZgvJJ8Bz-QXVcJn2uAbmNogs3gJycJVvFJrSrJNGImkbfmeXs1BzpSr5Hbr99NGFMFDcO9ox2RgG-grD76ZbqmNB36CdKU4MnJ36iqOoLrbV2isZJaOUWt1Wrg89N1dspZrimC9oBSSqWkAOz3T8T1~65qWtf2capyinRBZfDPE8yGuh6X2~yroYt1mJKpmn9NRI-0tOOaP1YJGCmiHOav7vBZDeatz1Oo2KgejEKMFK-gOyK4ma2zggxt7a5kne~bMcKQkjYf2C9rjNzIV7zA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary/Border Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.812Z\",\"updated_at\":\"2022-03-07T12:03:57.995Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"v\"},{\"key\":\"9738804be910310373d47e2d8f7d4a721a334b5a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/REj/Xmc/rG11qv1gmzOeIXKq/style_thumbnail_7.png?Expires=1649635200&Signature=IKVDz08qUU474db7hc70toIBx2~FtmMzZvzE5B4W57XlsTVdhNN8AC1C4-zMZNC35DNHXppYZB9fQb5hU0vVKbDW7wM9QINzrusNCTn5FqfzL7DSg3xgU8lcjggB~igECIhNS~8czKpIIwbBcN0tqZ~NXxqK4QAmECgKJuK5PODcb1mcriKzeRUhLkDD1hHQ6o-bPX9zHEtCdZjXPNRCryHhZMIb7ZVyPAGd66SEw~~dFHC1retMz3P0xkZJiBth8H2A2R4PY9ALR4H6Wlzc~2kVuXTBKS7t63YxCqT0ew~40E-DwKK7Fl2n7i-LiVvBWMYwFudceKvACEqwrmZCmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.550Z\",\"updated_at\":\"2022-03-07T12:03:57.989Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~@\"},{\"key\":\"96513e1fc0df9ce1cd4aec773a58d733b2110754\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:752\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/h6B/EYK/oMA4XtP7WYEikRaL/style_thumbnail_67.png?Expires=1649635200&Signature=Y1nV6wmda7bzep2vHUfLAk5bt8jGtMwDOVXwbqS0OULRvpAio3oQxAQgqzYTiWdaYz7Lm9u-g14cgI2w9FF5~vtUkB6qIl95bKw6DiSqryznSd-ZWqbnZxH5KkrDbFP24yVyUvl2mO6YsJ9YNmyqJ-7plFrK5C-RJBO6qeMqJtw4bPAAruLc5BvkRwTqLKTEKaYTdIF1Qoy0QBAdFbQt~Ef-D8Tfu8EXtsZs-WRjvaoNyYk3VB6b6GgOWQB~O~2icQ5a5mpTjtfWs1srdWrOl5Qqje1UX4fCq0~aHPn3aPDIu1zhLV2xA~LKXcNfpA03BBET3Ctlc~wMBDknZAL87Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Secondary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.852Z\",\"updated_at\":\"2022-03-07T12:03:57.984Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"<\"},{\"key\":\"94da8df461ec560a2386b1efb90479311f97323c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2379\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VqQ/xpe/JbdtgrAEEbh7ADCG/style_thumbnail_92.png?Expires=1649635200&Signature=G9fWDfUpg~Rf3b201rDvYsw7jY0IFvPKa837euBg6Kk1chXvWnwwiauzE6AyjY5BmJAXBlGL4yX18BBNIQCe6LkTICJ39WQIkGLO~Ma3-sF8YrCPdhZKmzIBcDqVJYVKlqszJZFqufZf7TjIXE4QwQfb61XHUwOFFxvKwgugRN09BEjSbfNPx9D0YtQqm4reHpFwNfpoN7HeqdFE3Uaj1PK3lEdJYJDNVpyJvSkKmsbCsOOSKnCASPJt78NjK49CQNGcKLOx1fzVpInmqpgHfI6h66MNereri-ePFohRkYEZrm3NZkyfp0XHdkPk9TgihdKC5~2rIet-~39d7uprwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary\",\"description\":\"Primary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.987Z\",\"updated_at\":\"2022-03-07T12:03:57.979Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"-\"},{\"key\":\"91724b824f1a9b8848e94ea4b6f246b1550728ac\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1644\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CY7/zBA/UryoTTEIps4GKOLQ/style_thumbnail_11.png?Expires=1649635200&Signature=Jq~Ohtfgj3wA7ImrulVWGCzO8kXlImpcUzIJlKAhdxIvi99ykOUl4tw2AdjrGVjw9I9Axs6JDZTdwPOuCRVzCzQkR66mj8-e4nZaeSvlPtn1DoIpXE6tpvWjRs3GsUkijw~uicwi8FNtPkjqTYAfDrR9qwWe6B05Ru8ROUT5e-xdiRJtP01Oh2v6dVtgYp6NbFN0m4A0d7Y8Ze7c1RyyquJ1YKhLw~vvnB12SxRwcw6zUbBES~hFGPG43Fe0bqvdc~YKM7E71cURXk1y87pjtMTLfJC8LKWS1lpicRZgv2ccLY8JH-zT4a-9yTyhuXSLD0zmzkEjUn4E6q6PtThP7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Background Primary Translucent Enabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.703Z\",\"updated_at\":\"2022-03-07T12:03:57.974Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~A\"},{\"key\":\"91347a02c61377cc909fedae52cf7f782e31b597\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:751\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/UiV/Rdg/OEuKxhHI9QvjMWNn/style_thumbnail_17.png?Expires=1649635200&Signature=N5YYUcvtYutTNdVe3HmQHnqcXXeFIgzDeB2W5Zplz20CV1L56mEfQxobEpI2OaTOgRe9xsRu4AiSEciBaMOSDC4kAv8wV7kotNEa0kDTmvDma1a8eitfjj3McxTEzz91wXxo0HEHTivuXl6fb5tyZZ-0lQaxMV5ztoLiLN-KvSLQjuE5GW-z~-9SssGIuYi5Q5TMyy8zVasq9CodxwXWcFDdacmO0ubwzeNbovHwiJXVIlawYAQSaIT6Q57Ehiizbh~GvF7rhDACLxtQhT~ZmVZLevsQV5ndsemleLGbdgT1cwFDD2wtYt0vXirPQ9YBYxAt~sT-XZ3kPaiQ~Teypg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Primary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.574Z\",\"updated_at\":\"2022-03-07T12:03:57.968Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\";\"},{\"key\":\"9064590235fcda44a9cfe972f297b2f4edf31fe9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:740\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NIk/P5w/tEm5i3J9RbKRZqpg/style_thumbnail_75.png?Expires=1649635200&Signature=eeyVu26rWzOhLyYb0QnGwaZbg51RkGN9561lRkecvAcfpiU3jLQcpJR~M4beFWKLZFgMggoJ-YNlasckcMDuh12QfPXz9Ou31uUs5ZuhGMdXAnZ6o6cg7jmEG0OKa83gljc5kAmZR1d6mu-7U94BfDo3VWbv4U4A5qLSud4gA9oz9eNsqQ7GnnNE39f9OgWtXNF4RqzLtla3~ARxssiaSuTzkOS45hSEYhLBjev1Bdce7KjCUak49efdsai62dM8aYRA5nQNGfIjstoF-8iNyTexC4qQp2AhZJFwcLNXSB8b6xLtvqRmoXLP7658gLpNsO2W983pBCMmIeR-75sbsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Strong\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.898Z\",\"updated_at\":\"2022-03-07T12:03:57.963Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"8\"},{\"key\":\"8ea704444e906ba1437a91bd36dbd2ed55324c8a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/v7G/RZq/3raFenVARj8KCl0R/style_thumbnail_30.png?Expires=1649635200&Signature=WCmpaI3lpn9d5~d~a0bjL3J4856bjDJvXSiYQno-9VuDckGLbhOd2cdBM4kVFwiN~vAahtyl1uW9DUiIUxt2KiW3a55G2ZHfi8tAVkSrc6GlrYIGs3IO-2yOEzOEu36eNZsXBMfsiNYBGcIeshV~iBGdVh1nlh20GEltfEVnUDgstZpnU230jnIH-uSpA8uPF9BCkxuSUBRl12uaHSviLZ11BCuWNQMcT4zYfii3BrlKY-7ojwe5Fecx6QrIepj4Z1qlsK-dj-5nUk~0--9zvll964VUuBoySTKbwj0d2mY0JhvWBaPI9XAhugLObVLy4leG0sNkTL2Z8UryI~ev3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Destructive/Border Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.654Z\",\"updated_at\":\"2022-03-07T12:03:57.958Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~-\"},{\"key\":\"8da708dc1659d01dc2dc3d41862b5aa5b06a5d18\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1517\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JZx/n7k/wJaBnInh7Ob62Uiz/style_thumbnail_115.png?Expires=1649635200&Signature=X5LuDjxUqOxoYz1aSjdmAcv7Ki2BRo4ic0t6WVbwCGrrluQhzTOoUqGxI0SyT3S9vTeaOqEE17HFPbnNFER53wIcucT~GR3kUWqHXeWAB5GtZewAdRXinAVI-ZyYWRVAmQCknzjIplCVsi6vxT9~00nAyscWMduyzEcR0UraNUcRCNHpcOwXJmeb3bgz6va6Hf0klqFhXlhrHdpw2iMAqpt8ywOUApg2dZlJngsOHkBDhWcmobtphhkI7URPpy-1j1ytyK3RMzrFGfHnLgJWfJpIYJezk0PZ-8LZDHIW~k3jAAPQ7JLophftKCEwLOt1mtGgir6pcWn9xXHawGJWOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unavailable\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.111Z\",\"updated_at\":\"2022-03-07T12:03:57.953Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"[\"},{\"key\":\"8bcfd6a224214596af4c11357b260e57bc187571\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1087\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kxo/Kvo/nz2RMI7YajCdrf6o/style_thumbnail_69.png?Expires=1649635200&Signature=SNM5tiPKSdJgA6WzIWikFIwyxne5NqrW~yMaY33asBBdhF8l7QTbbgbOeyZH3zGhB8-DyUdXSkLQ6Bm2FpTUJzVxrFJ0LzOdIRW1MF9GNVNNMPUnuLXDVVdSmfU3Pnvv0CZropbXufSDyyEGP8ABgn9Wr-geshVvLfLGzzOFIyKiv~oayZT7i5A6GmdumoiRzBLA~-g8iqg7UxZw6HGdiK~xvr8gRXjKp1qMKehGJfG6q3Ma1gS1u6pwok07KuJ5Wp68PYfJCJUQStsbHGbD3rxeN4ub9cPjODni-vWv4BW7OQeg~FW2O4MkxDUgudPPhyHTRrVnVIy7GPipJtXCDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Text On Filter\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.863Z\",\"updated_at\":\"2022-03-07T12:03:57.947Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"H\"},{\"key\":\"8a13cf4b8920f6f370c7256724a488415da55bfd\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1703\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xTJ/soV/7Ij5bKxDVohOa8Gc/style_thumbnail_9.png?Expires=1649635200&Signature=L-hXitcrzFTUD5xKTtEcv86Llk2EFsHj2tsYTzzx8H3TTdYMitG~gyajMYkJEFj6GfZUN2TlDQgKs~sSB1FgGOD9UxWB9A58fHHuqfB77dMoRUTCLZwXFrQ9wbmmgEJpMr227MruYlblqRnUWDhVvwNxDXWMnYMUR6OdjffGgii-3BFgvH-EluWwPQiKJbp7QUxwq6dMm8TeWkEYt8j-eodiLqZh1h1gdfovUnWsV4aIHw7lNRBNl0~dYYOvm21bQdYK4TyXHLeWPMygpWAD8N9X2eWTIIkIvZ23Nj9TXZ~hceJqDE6M5wB9EL-nPQEJ9-rXETH6pzz-ShyqHWkkmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary Translucent/Background Secondary Translucent Pressed\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.692Z\",\"updated_at\":\"2022-03-07T12:03:57.942Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~K\"},{\"key\":\"85f88070f65fb4c1d19e0522427b41bcc26ed15e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1324\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/k2W/R4t/MDdIJTZ2sKyuBZMb/style_thumbnail_111.png?Expires=1649635200&Signature=eu7LaDPSKmeDtHIfhOZU~AzKcCa1ugVjtJTT0CphpV2-waoHcL2TomCzU~toAq-VBpXpo2Ysi7xRmMkX-cSYnwGX~k8b7JxN76a5-kKUbzAS7olDN5-umE4ILP64xKm8vW8YTT3muZbaZLbr9cHtj6ljjtXkPA3XhdZ85rkb2R~YgBhEaCBANvqa6OD9WsqPpYZLrnTbJv1IXrM2sDDeWWne2IGsWHs8Cl4HlQ1S11SouMQy7fLP3hYOmJEaD-bMBfFiHdupQraE7Pg~OzVnr9mVQJV~uuVmF5DTOSLPXBknxfXP2Jht~SItXMS34PCjbHuPULCguY8Fieq4W-9Dcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary/Text On Secondary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.092Z\",\"updated_at\":\"2022-03-07T12:03:57.937Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"y\"},{\"key\":\"85f60944851eda177c740eeabe4c8921add5c221\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EFl/G6p/3S4I4DMHoSDTWoqc/style_thumbnail_76.png?Expires=1649635200&Signature=BWO3BNNxkmkHR-c50SCiWoTe1dTJsDs8EIZcFu4Hxm5KB0fPnHchmne~Pkav2-GCi8gPpNQzsKKF2sJ-UwixvBMKrS9bJDfbrQjRkFLAADWRPRICLxm-Go8Ou5-A42Hfj6VvRdw9X6SituGbCEM8PrVCSdK71Fs8kr4fANB6Y09330dncCcNXY1eWI2u6rVe7gco33fUzdZrc9b9U8WHVyqc7ad~L8DIp15czvaqhtgFlcA0lCGuKikdXZGNDTkGjd1gMs4dhxsCwNRzHnQJSYBXxmxNo7p0x-iVQiRvsqUgJICBKKa-d5U7RxL7GmYbcDZIxtURYc-85sdbRw~Glw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unknown\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.903Z\",\"updated_at\":\"2022-03-07T12:03:57.931Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"\\\\\"},{\"key\":\"80fe13d6142b2d4c0422980f5492657edc2dd4db\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1519\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/S7N/RJp/1FBYqcQmJoYCKEfb/style_thumbnail_6.png?Expires=1649635200&Signature=ey-sZDJHh25YSIkZPxPAYfzB0mELryB0BH2BvAhZo0iF2PawdulqoTuMP~Ui1iHDhoJQIRz828QPGXsSRJHR2KwlOZ9DoMA84fwXNqBHQvtRxh-UgR2VsgsXBVQK1p5lixxmwKlxiNkpN76I6ePhhkKNcH5Zeq3mguJtLPcl7NgvIMv2ZI56yXhupesqfXsAkEnB0W732XPspZ9-Ys12AtLHs9nsTWVnTHncP6GVDmh~iFcrGhnFDc4IaCqYYy4Y27R8dDDe0tVLqZKwvjIvmLexqGWXlYmYnk1575qziEeCt5jUHyW3TDbBbskW4fkI6tYx6DRh9MAZGDGRfs3Anw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Info\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.018Z\",\"updated_at\":\"2022-03-07T12:03:57.916Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"]\"},{\"key\":\"7f4515ddb452db28ea9605e1eee249bcd520267b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"21:448\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/DjS/Fko/EdKUZNJzBc6NjBun/style_thumbnail_79.png?Expires=1649635200&Signature=VwKpt~p07z09QlArXpW~0jdh1V4hFWuo-BH3B3oJCPyjSVWfY4eVQSi8351baqjZNXdITp1YXUfefOLHJAM4ZzD6QYzT-yHbGt68O7bXnMTxLhuC5pCN9LY0GaG8kExSLBc6XRuxT1NHXE7bTSqjkXu7kLZixjvJC0p8Hp~3o47tCYz7Ka4lJ3iPvLVwHpiv-TKJm6QpOtZ1imLVbvWQk7RmowhHxCmJEzjPFK336a4Hs8MIRUiv7BxbZ5z36Ugz6D99O45Q66v9eu082NmTtUMm5MF4nZ3fmsNax41HCl1jv9IauEkkeulznR3QNaX5rdAOC5h-bWH0q~zYSGnbJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.918Z\",\"updated_at\":\"2022-03-07T12:03:57.911Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"C\"},{\"key\":\"7d6a927a6da62a37e7e61af4b5984da90fbadc11\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1524\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NPH/oAi/SfSnU23cBbHv18Px/style_thumbnail_0.png?Expires=1649635200&Signature=D-5aQkDGg6reaNw8tCsKtaXteOa~x1RMAMiv8hCtPns6xwhlotkg40IKC~A7Ke6bEeQUMEUbWqUAyWW7pTP5hTFalO~kcDTChtokCzLoKS9IxRLfNaDaqbV6~lWIOPEOluRe5dmPur~NPI~fygo2LT0X1uq9k5-Zwupp~Z9RojqoAUwAzXzhxgRg~70Oa1KF4yzclHvBVsjiQlHoR9VxHqsxayMJUPMKV2qmN~23rK9jJa4YmQ0vueH-tg4Cnlkf-SBkfH9wQf1eNzwC0k-vGqEgElWnVbMzz03Xcm3navdIl51m5d3tEsMzukA6vb5rVqGU40KmQahq7zIQhHZEVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Neutral\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.772Z\",\"updated_at\":\"2022-03-07T12:03:57.906Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"b\"},{\"key\":\"772668fc8be854ff2701d0171548e0642ef118bb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"136:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fdr/FzQ/19z4MRvKAN3HU95M/style_thumbnail_2.png?Expires=1649635200&Signature=b09-qZEe2w6BUF9SYQBksLkvPoINoZsXY4wZAO8QDbLahzPDhS6DoAcJKks2UgcYnAh3RNaI~i3w2QFrlWY6tGLA68gmhYgp6BmEUeHVnQg2LasiN9nA-yqcety2rJqEH9fbg60GAN9GGzeUVe0QhfyurCgBjTadYAO53AybJY0qz-t4Ehqo9X2-gikHlK9uRBrKKLDInFxUv6DeaRScc2ojlJ0eAwkI0iTpCKWkBcNGyg3IMWST2DeDonjFoANvBqHG63-5UckbZlaUfzrOzSVUNpcXoLuVwvQ-Yuk6CHif0c4ADKyMqA2A4y1xk7iwajuX1dsJjaAvAnrHbm-QeA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Accent\",\"description\":\"\",\"created_at\":\"2022-03-04T10:15:41.379Z\",\"updated_at\":\"2022-03-07T12:03:57.901Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~:\"},{\"key\":\"74c183c86fa424dc940799b3cdacc6824931caa0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1318\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/swi/fCk/UQnnJEnPmuzFc2Bj/style_thumbnail_33.png?Expires=1649635200&Signature=eOtqFaRugL4UUmsLSgtJvoOUjRlgIHiaxKdz38idGukUyvjXbOjpv6G4FLMcpaOpYTmeaFbZHQGo2yk-PpZnQtXLOq2Dl2fZD~fUXjHzPy35frlAyN87nEQ3vwCbEWSX~eF47OglXyymqumObgII3MkqgjcWQJ0BqX07JdQo80T2wfQXLoGYXC2gSrL-LPDryl7yzjU~7mLg8F-VxDtf6ZIYGnFaW8nJV~M5uD8xYoo3sa7mlRc66LQ4SvL37BRFhYdKOotmBkihVgEVg-ojy2JTkhlknFEKQbH1GZqYVntDQeeiQDBCQtOJMYJiSzmRewBSbOiHXRX0x7jaVzkV1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary/Background Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.691Z\",\"updated_at\":\"2022-03-07T12:03:57.896Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"u\"},{\"key\":\"730f76dc189f00e5c902e0e464c31726c8255811\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2377\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3eA/zD4/32nr5ZuV37syr91Z/style_thumbnail_106.png?Expires=1649635200&Signature=E7pO2Jx360kJbksIO2MT3U-0ID1WXbD0nA~NBC3rRir7vUhrmEmf6fKotlSCQSfjPpFKqgQsI-mMLHT8FUdDVpFzvBgxExf-~NoP41YoLAhsxJ-gOMVYNmkSSqnu-vbgNSf8yLAj5JIJGmkNwvm69zP5~R5bphzo-E6kXp4GcbxeISkN-TFoEeBAf-Sga~d7HwRsz6QnMqtlEJ236n1J04R8SXxK7yJMHcTA~FhyQcx~RamqXYxny6MqaJTemAmF-lh3Eg9Jgq0vqeG2RIwPLYHExaJSUa1Evq-aiWx931y3BbssdWOXb~UVU29ywULbv44j3X1SXD-lVyHB6UHK0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Nav Main\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.067Z\",\"updated_at\":\"2022-03-07T12:03:57.884Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"*\"},{\"key\":\"72cbccbba2add3eb4c511d140032de17a4c3a75f\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:753\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/sDs/rW7/AxHjoCSzlYJEnrXV/style_thumbnail_15.png?Expires=1649635200&Signature=e8-bb~1vcCNcJeyiVCZ4KEaGOtTcLDL5qitsksAFSFfQzZVyxVTHgJuj2B26e2YUQ~Ymyutq1LBauORP1JfYNY62KFwmV6blbCKglHXOt6P8qyjlyuxFBck1DXxjg87HbzoN7ulS5mNwaCpdn4HJph4IQsBD44TQ6DFK4jjCawt9WDXwOP2URXBUlbciULa878d2njUl3oN1zm~y3fWhHJK2PHHfZtGOjK1uOZckRBIr3OozwzsIyxAbL-zcFfXbJaS5kdETREzbbVdRR0GBaIkR0s6Q-mqHcKWl6r4BBJyRl2fPYuFkAlITCjYHjr2QLGXDZbd1aeLM5QggrebnPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.971Z\",\"updated_at\":\"2022-03-10T15:13:44.515Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"=\"},{\"key\":\"6f9fbbc37db9880ca87d31a742665e62f2bf183f\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/sph/XmE/p9iq47UXi0dMFTRZ/style_thumbnail_18.png?Expires=1649635200&Signature=Q2K4BnsP9OcPMokp~VtummQR49fyDcb6Jnp3m4canUAzIZdqElAHEnLmX21Sk2TK03vPgwWanOQ4vsFhiprBjrPOfX-y1wIeSdx7vaTeeWb4C3KnXgVVrCwRoUDfPVBdCswYbZsyNX-It2ihp40PSfMzhdoA9MRlgVzkFkfFktZKoP1jXuWN85VkMRSjYJbt0Rzhyax52XH2p6Jc8JkX9fvqSDl6AEdqyI5YeLBbJNtVPlgNgFdLpN5XwQUhihVNMJjh35hrkaPHiuiOEXsmrgL9L23rXM7aLLdi1U2MS3nt04sEY0z3IG3Ok~xwwsX73d24rR9HIA7q~Uk2n~~mAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Plain/Border Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.564Z\",\"updated_at\":\"2022-03-07T12:03:57.874Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~&\"},{\"key\":\"6c5fea659d4dba983327456079ad0a259f9121f7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1847\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/8Uj/s13/Nf1LKde4s1lUxLwY/style_thumbnail_20.png?Expires=1649635200&Signature=fW3Dp2kY345~DnnQG2PLVX5JyzWwGMk~UPqdOSChLkXFftCcfVyvze~LroflfpX80P3n8kwprjHuIHKJB2DUORJr6whbjDF-eGrJgJ2OAPyZ1bmK1iIKUYXPkuda6eFCJrYxJew1j1hiW2TUy3w4mr73H90b2e5haRZCw6fdtOs6nmBdF2YduefbEysPrJevmRQ8hdZFhQuiluCMm7zNvo1btPA3L2gK2sc5OHGONZAgGXzNpIWrK4vuAGNTWqzbw~4Usyru06bRpsGWE7iYCic0HUL~TyRvn11q1dLu~Wbe6q-QT6VTHyaTSCWo3czyr8oVV18aAg80aDPfpxTAwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Query/Regex\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.589Z\",\"updated_at\":\"2022-03-07T12:03:57.869Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~3\"},{\"key\":\"69df32bc9c690ea6f0e2d27b18ebd96a03e3ca24\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1646\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/DvI/VPx/LGEIIsxKIdfK4A5X/style_thumbnail_4.png?Expires=1649635200&Signature=hiN7YiIZv05pag8uMkY0RrARNb2-3dkmcOED9QDqBoQ1J2AlCvRbt~~petUqGTdf45vtWD0i9fyKwybfNgM2renZ6yh3I1XJakaC-zIQLaa9BmRM869b0hKBU3zdGsH~nvOAMGauClTnHppI0HIhY9s8ykTwdE6smToy2tIyJrqRYkVbs5SJbBdE5E-hWqXNtdf-3a7v3LibKwwNVnr42bteI9HxqnwlNVVdCRpwGwrG5p5P9tZJcjGCXUyFFUw~CIrcQucLK7ZB1ze32fSB6C25OjOIYXeD2fpv0X0YUZp86~mK~rqKjVulIuS1AxaI5ARRUsF33FEHLJ-A3h0tOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Background Primary Translucent Hover\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.660Z\",\"updated_at\":\"2022-03-07T12:03:57.864Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~C\"},{\"key\":\"6811c9a456f6ce8b5b7c4551d1c4e1be9fdefb7a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:750\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/p6l/euT/Ures2wRCd7btHlNq/style_thumbnail_0.png?Expires=1649635200&Signature=P6DwsDUw7-2fXeZC3AApCsUn~wbbVnbbwdro1RYD1b-s3anzafYbSp3dnNSHvkt1keMcriVHrxUtYBXptEw9GHB~I1yFWcue0BHqc9mNEjHqwcvnDdi5RkfpY-PknqwEzMDVmxR-AcbX5CH~-egYtNn24nGA3K7tOaBQc1hOne-P~TbM0tGewVqctgB1u2P9m9cTehcstikysVf-QqGXhCIE3I6uBzLW4ssizJtDQqSe2ys~3ZVXx8a5js4ev9e~KU17xAWsL0QtxFWQ8GhD5DA1lEH8qS5HnbkSC3QMGZvvOwUDsBebA3~puBda71u8~ZS1m9FqEVVoFag8xnnm-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.538Z\",\"updated_at\":\"2022-03-07T12:03:57.858Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\":\"},{\"key\":\"67db579a7edd8e7af291191d07a5d9cafc538167\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1304\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Dg2/brj/Xm58xOhUItqfjv4C/style_thumbnail_6.png?Expires=1649635200&Signature=Orqx55apuqY8if1lpMGyAULjLIFNkrGyji3WI1BDKZigZS7~HFwbjWbmbQJEtSA12Zpg1zLa3EhS1vZXVzaGA7f0Ww~U6-40SNMV7uJEoU-DWjbDCGsadOo4auwh69XPzSBNQYWFNX9eg8IWCxGeuRinRBYRTccxnpphkDOufP8eGR2OjodWMngMvco8lpLmvl7p7d4WYNXHnfs-cRJp-Y2Z2AKaNEKtcuNuuets82E1zVHYfcCzyTd-0BjW4pZN0BFA2FtLgmPTTe1ySzB5A7KqW9gZzezVatqOOHSTFeT3LWLrSunZyScDzLHX~6kJ4-lfLsCxeZe2fFm-689BZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Accent/Background Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.029Z\",\"updated_at\":\"2022-03-07T12:03:57.853Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"g\"},{\"key\":\"63d4adfde6619ffd2b15097e28599ba8b1bd9be8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WnC/hLs/4DL150KcT2Ya2n92/style_thumbnail_29.png?Expires=1649635200&Signature=Pq7G39GHpR9GdDiWY3bFnJth2Oi8h7QiAaayrS-A~uuWkOAErFWWv27skETrdyx-AEqJaT19OTJO7w9d7wR4bMEqWiG~IiKxQcHTjgXPYJqkz4Zh5N3vjAsTbR1MjVxZv8-DTvRkUnLpWZanzq5DSs38DVlwU8v~R4uLLlZebUjCdpzAW1rCf0s6jTlkMx5EjvdEIap1QERGdzl~66z1St1xZjVw~Q1GrRS0Okx25Pl6Mc6x0Is~TrLk-~P~ZTYC~mBEaP2uKxRk4BOMqeNNiD-lMJYCvL-7jODEKx920nUoFJ~fIhKnrib7eo5nYMi9fV5iioTwqe9gFwaD-w1m0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary/Border Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.661Z\",\"updated_at\":\"2022-03-07T12:03:57.848Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~\"},{\"key\":\"6088038dd3df1989e98cdf0fb0e9bdc23af29f21\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1649\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nR2/Psa/lJfBkrHzbY7WpSun/style_thumbnail_8.png?Expires=1649635200&Signature=IiByZkPvMR1u-6yPThB6ohdpbrmJ7so3x2t98tK7gofZzqoIkprigSzSzLhd~9xJVUHEMb7WpAUf3Spvj4T5lSljgERPofeDcj~GUe~9cwAsCS8gJcczika26a~FPnRIz525ZTMh-KffUqieWlRr5AkMSjN~8EhD4ypM5EpUMQNmN~rNpv3-eM8QH8MUasM5weWDnvAirSYODjMxx9NV11aBg0ytFM3gas325gw07E5w20GO2k1bQQl~fu9inCdz2oAC61LzCOIEoQ8LeWNupfSTkBqDROAphJgyovvEpSoSRfjmL5eEo7mcpZlpyxbSKX5OuWAyJSQs6Bo53voHPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Border Primary Translucent Hover\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.686Z\",\"updated_at\":\"2022-03-07T12:03:57.836Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~F\"},{\"key\":\"5ab92f7156e1969f3369d038debd5455193cccb5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1645\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HR5/1AU/k3EZ0cR2k32vbJpe/style_thumbnail_15.png?Expires=1649635200&Signature=BUmesK~fehL4hRcs7Lyh0il~tOTsw~xJ4rsNxIbfDaKgi-YOmRzZvKpwgO6KRzQCVeOhTkSc5BOwR6wzEszBawwtmi3UxU~vksMW6PtbbLgB0elLLWYQ1nSuXmW1QxJGZgHZ1hHyqLUwLIlNL~ZX-tXGYZpE~qR8GjtWRkhhKVFtMRWthwT6Op8CheWn83VGE~RwJQSkoUJUcBrrmB6Xb9IVWuApNpvjjYFn1SsmjO6n6wjrdOPbNCCmKpQ-gKIkvnHnkXRttBLJ8giTHntw~irtOov7SC06utbYE4Sm-QHoMeYMjlmUYMaNpOa1oBv9Jbt4ZmruaEIFCDQuUC4cRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Background Primary Translucent Enabled Inverted\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.728Z\",\"updated_at\":\"2022-03-07T12:03:57.830Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~B\"},{\"key\":\"557f2c7f63de59a7c378279e7c9654bfa43f3020\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1849\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/sk1/u5D/aw81bRmmjxdzQ8vS/style_thumbnail_3.png?Expires=1649635200&Signature=cNQKqv-T322KAnaoSGdshr3HTyKfBeINIv3L8z0zUrkFs1OXOLWBBtBZsT1QZ3OrIqZi5xYjzcNDzMsR3MRHpk8iXWr2IljIvZw9vfuky-e-JX9v5zAafgU-912XG7o9s4pSXOMeYnRM8TWtjKerBfNgpteW7oZn5~EYgOinMYxnbfwUTU9Wh3xx1ITacluA2FcJcYs~UclG0z8sCu5mXq5Enn0MkpaLIhKT6~-wRgWIFDX4SSC4cbxsXKQYAOH8lzuXXRCS6BUirmXo5bATKwCAlMVQttt4nymmeCvyQdvsFrJ4zUvnbXLjO9ljLSoNXYKZsgZ1jv9nwGETGL1Gqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Query/Operator\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.502Z\",\"updated_at\":\"2022-03-07T12:03:57.825Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~5\"},{\"key\":\"53a4716741658575994c6cf6fd1fc554d45ff784\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1306\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/n3G/2RX/XJ6p1o2NkO7HGMeL/style_thumbnail_41.png?Expires=1649635200&Signature=LPv-QnoH1owIosYuFRig31AEEL3hJL49~p7tMLckZKuKTJPDA8KxNXm~6PGG7Q23Pc5~TfEPpSrdV-JD-r-Ysd6Pai4z1uOMtToeohOfwYFIf5kfwchkFzzCllpARlS9ZADMDRiTuEl8AuGyRVxTbsjYKOn7L-z1nWZLvqBde6XSNm9yKB-zvC~~yN4YA--YBTuz82Qz4T67adlqN0QzjBJSGRZXYsMvZnBJ48ChNT9sWWUnqJ2qu0ZBlgKTKH0yVL6SRyuISgNjBzoKTB2o7iIgp9r0vW9GSv4Rbv4QdE8grQ9zgpihvi6RtPaMC~d1RGUHyeW3s~dW8SXQMsDu4A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Accent/Border Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.757Z\",\"updated_at\":\"2022-03-07T12:03:57.819Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"i\"},{\"key\":\"52c101369cef572c6908975f95e417a493bf258e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/RTz/q2X/44wfYKqoSY9LH6nh/style_thumbnail_102.png?Expires=1649635200&Signature=LNIRSQCdMKejrgXItP6W~4rhn0JyL-dYeQX7Sxoq7iXNabPOYHQC9SI0hzV56fXoocSP9cYJsMbDHw59woFWJ89IMttz~BprnIoZFWAFEysfxnJiFzSPSw3IeHaYfZ2AbEQGCTme30Z3EbyBMX2v6uIeCIfBuUbAv57ojzwBbomW7rk6J3y5pdU5TqGHgwICO-S6oMUqU0DykpehUQsxk5L4XLnTZocpzQnt6WCYBmW4HJp~Df1AwELogYv5hR5GVj7Ca7dttu~ZvV3CUBqvONDTyTirt9MpFskQGFWPs-3AX7iKtYOui5~DU9R4h09fB~uT1mD~Q~HaGVXivOh3wQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Plain/Text On Plain\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.041Z\",\"updated_at\":\"2022-03-07T12:03:57.813Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~'\"},{\"key\":\"52b68da39f0ffc8e2718c89e7bb0637ea29ce3b9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1316\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/pC0/Lir/BBWXfEpVP36TgE1w/style_thumbnail_35.png?Expires=1649635200&Signature=Wivvu094bwDn62R5C8e1j62pd8UiECSYBxP67dwKKD2~nsAerAKDhtob5BG9kedrS4vzCdeINz9mEtlErIhOqH5CYa~c1sYSWw3L0ZgugDwtKjGTtNuQ9KpNx16a0s-yFuo3pHX4fVuxXR59DOHRk4NgAEgXhSF1PXPYNw9~Hw2Clh44I48tPnkJfaizg~cMEIER2hEgXhUWIbIyjH1-FqfKCOvSu31ZVgQPlduCPlbUzj3YWIJg9acGUd030C~SwN34hLcRMRHVFQw4I5slBiafWNhsnj2ftTPPWQ1zbDcCYNhxwSg56yKzmqeJacaG5ECmQ2B87Rz7AE-p0PAeOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary/Background Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.727Z\",\"updated_at\":\"2022-03-07T12:03:57.808Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"s\"},{\"key\":\"4fb63920dc8acc078ccd3f3a339d5fc2eea85b8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1515\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1bk/R6z/sFRaqnxLs2ZYrty5/style_thumbnail_53.png?Expires=1649635200&Signature=R2cM2sIlbE-pYgHmgSyOxGQzKH4U8JCmFfYyjyEFjScv~4oxGbR3i4BZDEzIKdtpAyxdWEDzo~5au2z6lSBx1HfHu02yOuoBtU7vidBqMvkWLNk8GIZmd7ACi1tyi44Dfdf2fSLmsK-W7IWa4TQ2A1JyYTHuNqPdGwMkjEJzgqcDKHr9uXcJZg1PxmAywLGUntIpYGZO6PtbARj4Wpn8Z78ys7Q7XHarqRquly-d2b5j92QEdwinLhwvRjS95Dv9b-gO4qzbay8BL5zmCBlx27sjQvp730CUNZSd5Mca7uqlwyyH5Vcn90v7ihDByfDJLzllPj8DBZYLmmtilPSnpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Degraded\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.777Z\",\"updated_at\":\"2022-03-07T12:03:57.802Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Y\"}]},\"i18n\":null}");

/***/ }),

/***/ "./data/light-mode.json":
/*!******************************!*\
  !*** ./data/light-mode.json ***!
  \******************************/
/*! exports provided: error, status, meta, i18n, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"error\":false,\"status\":200,\"meta\":{\"styles\":[{\"key\":\"4b061b75b3bc7b3506ff7b86bcdb3ffe9de4a2cf\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1318\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/y8E/hAu/qkP6P3QPFUnAjjgI/style_thumbnail_0.png?Expires=1649635200&Signature=cG3HCVq-6U5LKYXN4Q39NG-4B5JdbVqNUPBYJVMpi5AVKnUJTkvQNZKHu6yWbSH50~nSjVvhG9E7n1eNQtvaockixAGDu9lO~SBr7VMpZt0GLXQe5lBLJ5O9Sd25NqGZZwcAg2R2AHOML-ljbCq2ClMblDS961rD~nUWP9zQviPBTo352JtJclA0KrFfSNI1tAquw3Og4kc1f79~i3GD-2STjt8bUPruaCl-LEspbVZqdNJK2Dw01BIuDJZrz1Wzr0-b-aBqFRXhQe0S5J49-rvlBfKL2ESP8zlCJbXP2BaZcfpNEcU4GmfMgRVWvavrR5JTGiHSmCVhIMDKh2CrgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary/Background Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.271Z\",\"updated_at\":\"2022-03-28T14:35:27.001Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}r\"},{\"key\":\"940f11280cb9dc4815ef81d7109478bff0a30fb8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"45:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/LjI/Slb/vWwSntVmv4mvXk96/style_thumbnail_0.png?Expires=1649635200&Signature=Ci1DKh53QxmceP4Z7gV3-fo79NUuCuG0tWLo9mn2TJ7eLlxj6~RDDgHmsXYKGRfkIpKM4NxVHsY5Yv4e3YKStoy22-k3dRfl~WlOZHZRqgyHpw0IkaMuHtLt6Z0obvsgg9OfiBVOymaMKuYi5ksX66nHVeN54Spx-umCfw7iC0HYiLqKAUmced-Jzr17eGlzGocfsfOA1pM~7kEqrw8~zlUKHiyUnEI5cU~zMKAh6-fLRSW6CrnmztvfjOksE~QlkeXOVLeiYZ5Jr5xP5nKy12-JYiVYFP8eFJ5NrJnfqBwVZEdgqBhgtVf2vCC1KEOdec-7zKvPK74Xq750P1lwmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Nav Floating\",\"description\":\"\",\"created_at\":\"2022-02-24T11:24:52.077Z\",\"updated_at\":\"2022-03-18T11:14:28.244Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"+O\"},{\"key\":\"46e6b897183d0f6f0f8f350df0e0e5ee28d19f34\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"211:1602\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2dV/XCC/xV8ySdsQk3cY8vp1/style_thumbnail_0.png?Expires=1649635200&Signature=ObGz4n1dHT7Yn6u93aeo3Jg1AtezkU4wUsn7ARrBeWHrZaGMJfMn5P-TS5ytYCS~rSbFQnTLSI0L8~1a~LyQlc8YuIBod8KGDeHp2afzxBKjvmmXQxpQUm8O60xjpWRc6JCXAZHIlyo2Ze4Hf2rwwhGwp~dcz7Eyo0PrpPMIJMcJ7aesWyRil6vCiyusfVONhF3rzXDekw2euxEg0LuRkCd0i-xwKtL~4mOFYoIFNmSmnJSIAaCAvDcONpd-lchuRReOsWM6IpxJJkBKGGwZq-PcTw5eGUuSdPR2Tyx05Ya9qYB0u6CU8QItLxK2rMIbfjqYGtKisAqNoJTi-q1gvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Nav\",\"description\":\"\",\"created_at\":\"2022-03-14T14:41:43.894Z\",\"updated_at\":\"2022-03-14T14:41:43.894Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~=\"},{\"key\":\"fd8d29f607936a5e301141dc068fd53c20b9d35e\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"210:1596\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Aww/DrD/FaRf5LJvNxH3F0De/style_thumbnail_0.png?Expires=1649635200&Signature=YzBE1AFBZ48au0T~GRB~8OJhih~6jwuMAnAhfkq2I~ywDgUFg5TVbTKj8QaIoWT9rENJdMN9a9yRh~98-gryXMtRPPBHKiRi6QCMz8iFmiDLOhM8tAoNvXJmmIRPLZ9M0Evdj~zTmNwAZCbaP36dmd6g-jjaVxT-OTJA1Lj1AQ4JB8Hen-E41iReEruOdDrh9QRvYh~o66qtv2ST5hyOsqNJSX8QTvaywOSwDwyGh6I6~sSy0H-qqaIqRPeQ4fc8ZO7ipoHTM9cW3IV5Ypy9jO4K9sdjJ8GAcODceqJPGickMiEK8JXG9ZGuvF0UvkKXD1vd4Ue4ofGIGJI1ToH-iA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Nav Selected\",\"description\":\"\",\"created_at\":\"2022-03-14T14:38:16.377Z\",\"updated_at\":\"2022-03-14T14:38:16.377Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"+f\"},{\"key\":\"c4270a7ab9bb7c4260dd45e87938c3cddd757e93\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"206:1583\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WVK/Tsw/isKqMPcrchoyl20J/style_thumbnail_2.png?Expires=1649635200&Signature=Powy~ZooCbKyWXNPlxVhkKY32Tkf8768lD~qo24sGnJIrLI3Jp9YIRsDdKVL9XrTjJttcWGXS4LvH5R5Pwm~grg9mioq-7t7W6cW5g07-8SgON-~GF5sL22VEAKpGG4ed2ohMtUrozG99DlQILQg3vghv7DRrSLESI1qIYtT~YRKKCkRpteieaHAeamXAP2-tFB463iCtt2oBU2DnrrRH6J4QkzdcrpmlAcw1k-dTQr1DI251tdhfxxr0GWLXa20onJUp~PJ0xBNmjc814BMuNnzfTpYRqYhjwGF7RlWaO5F48vk05mH60cps0~EmSjWDAgix9zagBIsKNrMlicE7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Logo/Logo Main Path\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:37.517Z\",\"updated_at\":\"2022-03-14T14:29:37.517Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~;\"},{\"key\":\"14b0c1cd30228a0efcad5fee672ec398ee5c4540\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"206:1584\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xct/F0H/8wVn5DBkdFg7OThL/style_thumbnail_1.png?Expires=1649635200&Signature=avVLwMWbfWIBOXQQjlggAZ~rFBFm7u4jDl3ou2RiOTOb7Tom3mfKDdTlU8~muk2SzDKHk9KXWc6gPL7nDKddIl47~lURTli3JzoTV3yh4Z~Csl3hXPZyaM89LxuRcOp49MeaIke6sPcUzXzBTA7CwQ5WWdLt4tBT2-RdRUgdLRYrn4g6R-r0bx5UolEfp2RlgUEsCLVyfkIoJt63LfbopLi5wy43XmNy4Ap9mjjvcrrr2I3ETBLIXaFm4iggPIR8yFWnorRpuidByfSI7MWn-ILx7txE99RicSz2cwsHgAsyf6HL0gWmUCtERgCV4Z~d~8yO8hqrAnEGJ-ZxLUjjcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Logo/Logo Alternate Path\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:37.511Z\",\"updated_at\":\"2022-03-14T14:29:37.511Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~<\"},{\"key\":\"cfac5fd75722f844733fa2081b05bf54667dc1fe\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"206:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kPI/Epz/cJIA46Vqo6jw3IcB/style_thumbnail_0.png?Expires=1649635200&Signature=czPSD3NOD9SzNBZvgeFw8soLNQqm0eNOosHRk8pgECTwjPhKArHgvohHm~y00RpBjf4SfTu74btlkuFySIgsBusSdjXSXxt~yPNdg0GVqDR6wVPuDX8tO-SKUto3EwOP~Tcp5lobP3-OYN4FToyQEJsHJyxVzNwFz~wbvqCZHrGxbLtkRwL3mOleknetcGCoCI6rNl2Ale4DjOdTwjC~OPnG5fgZnFoEAeCv66jQr28JCLZ6TlAbsSh9p-7vnah8TwH0Job-VV3lR7VSVbAFVI03qDaRCmBhhn2Kq0xVPAGCp-AYMI7iu6nbUVux6LFwqAKFtv8XPFhDulcmvbVBag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Logo/Logo Text Fill\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:37.502Z\",\"updated_at\":\"2022-03-14T14:29:37.502Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~:\"},{\"key\":\"ff8c8d81b7c93788ea0247558bd82e4882e49405\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1486\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1oW/PPT/dANuUx7qAWM5eIcI/style_thumbnail_91.png?Expires=1649635200&Signature=IUXS6hPK6WYgn9GiFkvTiI9-C8ZIQVOw~wJbcOaTlfrRj8K3SBapkl0p7uyvqk3ExYbyQEeUk-6GzLiVLz-G3owzwO8lST8dgm4d4AH8GdyCoQ2kGtfIoT~dpaAy86Qb3Ix~qBrMFjLam13tHAHQAlJId2I906AVcNk1TfqUcrrCer-89u28jxjVam1mEykTrQsTSWABpFxpk6B4QqiuWV1dN4pU~uT7eSKxNPVV5KJzcaaDu9h-d55SoPrdDsiZzNv7Bqtu6YwOx3iHoYtze-n6J1vcOvAGBkT83bLBYC9KWxhsbs1ZiQLFUJ6640ZekyeMeXzYLSGhWpTAyjJ8jQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.566Z\",\"updated_at\":\"2022-03-11T16:02:18.246Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"V\"},{\"key\":\"febf2470cab929d771bad64960952bb1f0536899\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1306\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/L3S/g0w/VD6Q9fGXCbvFYiFw/style_thumbnail_49.png?Expires=1649635200&Signature=TAPiq15bonawOgnM856I4w8tT3YeSXUoKOHcAvkuDIA86qFmHeSzR48ngIrqGIr5BQSr4V27Nvl-PX-12wnILRMJ8Kf1VO0JFjBZA9jGpVKKrUhdGCeLX76pUWtYpj9GcwdZSsbk1fqh~RJCMLg7JA2mr6ojD9eeFEI7ujr4BRsLHeOE7xghqCPRbYR-yTlsHrV79bECy6vGHgivm1adQ5TdZtxQndj0LYbpEjQ9J8uIrC3Yxuy3yixO-7bt~JLLkq34MtEdOj7C29FTDgVDWTSbUzgzuP-K2BFgyJ1-Y5oVxZjIPY-nqMLENGoTKts45Yk5-8tfk2AsBxH-odaixA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Accent/Border Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.334Z\",\"updated_at\":\"2022-03-11T16:02:18.241Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@{\"},{\"key\":\"fde13af11696eb0406383d8c7991a5d0ee3c8997\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1519\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ags/liQ/hHi1iwmFKuXXqyKB/style_thumbnail_96.png?Expires=1649635200&Signature=EwZb0SeSn4noTvlEUg09nHp0DoVZtHfF4F60YcVWLFjjxc1zGsNCB1UP5QDeLxoBsmBT3lwRS4sZ2EKohLWp~uUYtPlH0Xw51RiZlhdtSwK9s6ntn9CjhfMkoBjiBfDY78OhfwGkUq9TA3x18lot3-VqVEdLp5kPsIKRXoQIItbPjPpZfAbEKEPJ97DUt4-cgVEIPSxoU6KbaVE9axC355ks0CEJUVm9ggSVcfF630-o7jN4jwrHZFgNb3AnO5fNY5~4XCj1-bRKgJtBpiUh6EozdwbFshpSsWmLn4CQ-fL8F2kZRasrocZe4kESRSvcrXzh8R1RHnffBPLq7NXY-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Info\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.592Z\",\"updated_at\":\"2022-03-11T16:02:18.237Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"]\"},{\"key\":\"fcfb439eda2d0fdb1ce6c2bffe6ea78306e23a01\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2396\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jkl/g8Q/HPOyGfOwFBgxoksR/style_thumbnail_98.png?Expires=1649635200&Signature=TjTHGx96VuhLLvURbRtLmgyUYVIUWFF~Xv3vM71rC2TDP40zr-G7mqOBBr4qyOu6kN3bp2~YqSzOUFd7LfehW3lnQ3BIuwyqZkSGP3fDjg2fw-aNM1DXUU9rL7wx8x-8vEeNyVwu11Gk48Aao3~-zddaHxrRaGc3HfCnZiWYK5ateQTyA~DQTomLy8wt6aIi8Y0JOpsti8FV6R-Yz7HDbR0wrHUqv5hNpcCg2Y6ICd~9mXI6y4FrMPiU~PgBeLAnM0iJYxObN3MdHpqqm4DyPgdamsz0aaysxHB35CI3a5zwj8oJHbXW-tUxAW1kMz2SWubvm7Sfivq3YsLTeBSCcQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected Low Contrast\",\"description\":\"Text color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-17T15:35:46.602Z\",\"updated_at\":\"2022-03-11T16:02:18.227Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"4\"},{\"key\":\"fcef2ab05063c319da1be2e1bdd1a091b646e0d3\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2375\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/B6O/HVs/gPGhiAtlJFR728k3/style_thumbnail_99.png?Expires=1649635200&Signature=AeacMlLT73~05l~QW1kBbCJGdbR920ZccTZqvcbdAJCpPk9YXYRM-Ppvb0xufMtISjK2dQQSE0DHSLctAnNGSZyZg3eI-Wga8KLVTP5800u-AZHEJGZBdR87AHWCgSKLubJqtnB7c7NtQgSVS3kZeVztLFe3C0fyJjt4Okj3vQOVapd5d3071dPyf-dLA7CO4tERDJwC8hfIrBXzP~~aolTh8ygFHqiMUGeRER5Avq4S5Ay8oLOPwK23crlk~kFk7btCA0b0yjTCYCn7lPZ0W0W4jey5tw5ZRAmr7t72BvnF7IE6y6NuP-kfJD1Jbz17p8Q2C9leqYfQYNV1Wcpzog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected Low Contrast\",\"description\":\"Background color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-17T15:35:46.608Z\",\"updated_at\":\"2022-03-11T16:02:18.223Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"(\"},{\"key\":\"fa4595a947833b67a8eaca04a73e0e4262fec4e6\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1521\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ZTz/ayq/hDZci7r5b95DvjnK/style_thumbnail_1.png?Expires=1649635200&Signature=E7E2XY0gvKLhFd21DfBNN5QuOeiB4O~oV9VgFwfWudAfizXNvJRv1JsRwLQ5q66Il7gbKrE0AWc8G-xJbanH-Ear20kMxsvovsiAEbdEotc~wb1zSohWRvFk4oC1XYK~EAt~i5A2JzqZw4CWLR2ZNilkYopm1bmyNJxyjMUHFSu9tfj753PeqpUiMXxh2dRncamayWViGdyGSUzozot8hugrMXivDSb-n1Fe2W8QrM6jvriX7-bDEt1jJmUZKbcA~vWzf59te-yAqCnLnXy4OKt8mgeF2Fvt4dndvjMISN4Fm9zylUU0G9~UeCgf06n1Jm2kqqx4p6sJ6tDS8jPB7Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Success\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.438Z\",\"updated_at\":\"2022-03-11T16:02:18.218Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"_\"},{\"key\":\"f99e72d5b1b4a6b9c09c1533e766924bcf23272f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3JL/J6g/4s1IO3xOEksSVh0K/style_thumbnail_23.png?Expires=1649635200&Signature=c-0r-U4-pYEGufYVYRgeVVJ~0bj6AA6~rg75wKFeNh2sx7fj0BVAaIhSQOChRN2yUT1SD0YUnWK0VpNdnV6JwBYC42pgSACsfVbnWkhtgdGI~zluBjR8HnsH8tJZof1JqgMF5i28FD4NCssgybb69wXHPSq4hKsLowVGekX7EkaL93yxS5OiemWmpYxhYQR65wdc2I06tCagHRv9VGhu0BiV11JiCVMXo87Tcdcv44bSVe-LpjLYBpCT~r2GC-uQFkgjZmOa5VO-01cK-nQMJzhvdDEQVPFLhIvmIYd1kkQuBoHOOLMya9g~PxW1j~-GKJh9c4ie7WXDbHKGPy8ncQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Plain/Border Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.185Z\",\"updated_at\":\"2022-03-11T16:02:18.208Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}|\"},{\"key\":\"f720936e5d4d6f651528ee735db2dc3e7193ac1c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2372\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WvG/WUb/TPt7KKwuLIyp57jN/style_thumbnail_92.png?Expires=1649635200&Signature=aaywKSMpTjItBG-xJRarxF89xXiO0Fe7stLREzlzxFM0ZxrDpR5ie3vl6fHYL~GsfMkIh2RkWFYZMQsgFg5d~cBxGJVgvOsg6T2TXKh8eGXGB03gkeYe~R4JCsDZLBZj6bZwmf3tI0LQ1sZIu9xM0SVBxkWiWQBeSvLOmeTlDxpAa0hh3qe5JNFvf6X1bEGXxDo3OD97WIKg970T7i-eV2uvCnLviCfLhCu~jpDPVY2vC6K3DIafEMrYV3sfTRhTCjq9jUH1DlKY-N76pV3eBey037DeqYjbvxx5nAKJ9fmv5e~WEkOZKYCtGFSxFai~mSuqSUM61-ptT9txGvK58Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Floating\",\"description\":\"Feedback indicators bg: toast, callout\",\"created_at\":\"2022-02-17T15:35:46.571Z\",\"updated_at\":\"2022-03-11T16:02:18.204Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"%\"},{\"key\":\"f35432635cc8a62278e5b6414331f12305134b8b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1314\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4lK/Z20/mhJaumPdiutyQCB1/style_thumbnail_43.png?Expires=1649635200&Signature=C1uuZIlx~k1kn0kqVLcbesKC84VRyPjNeQy6YK4~Fk7JnVil5EHpGXt4iU1XO5CwBB6B6ylt6CYpx9UQtJFmZY4NyCu3VCSV3K5a2QsnWoV4bQQ-6jej~tHYZWICnhPugwiyXCnlxImLOcWldPpmXoXY0i9tSvcYxg9~jWpupg7BjN9Bb6XB6yUUTTPC6RxDwzZSC0m25qA--YfsljZ2ziym72JkQ5Wlkh9Ay-EV75IX1KaMYXsKPCPVd-Wv0Ek1A0ugkNXu9AL1B5rV8~3bcj0b4iog~ggmwB7JrabF4im4t6fg1L5KWjwDi3SnkdNwVOClluup6w8My86YiO7zGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary/Border Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.223Z\",\"updated_at\":\"2022-03-11T16:02:18.190Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}|\"},{\"key\":\"f0ae4a74df49e73724abf9008241b6d0a617ff4a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"21:448\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/DuS/Htn/Dg3GIDqqx08LOmn3/style_thumbnail_74.png?Expires=1649635200&Signature=QoBL5l8bxoKKXkXAEwoTOalNafYeKBmxJP3GVlAaE2hDGdmifuG9LqPHZ~v7-UcgUdbCLycXfyOqHdlnVJEFTGbgyfYZgT~akMtVM2xAWlcFalEgKKLYQ680miCruPH~8TD85grnf0Ds91O67IkbzLKsRZPau~LZ3lvcOFPCioXOLSwpR-QWunKGliEPEQW4IkZIbUgx-8aAHe93p0RDbdiKG-iy1V4ykwiLHVfmkBDuJTizmul7Q43wMvJFytDO4Zlu4PztIA1xiFzvgkIWQ9-ZCBSqlanX3e2MM2EyIxxC9Vd8ArMcOQ4TRvEzbKza~SVroIPY2VMBkVhg4BRtOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.483Z\",\"updated_at\":\"2022-03-11T16:02:18.186Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"C\"},{\"key\":\"f085f55d821b6c745041bc21970d26d1701bb283\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2380\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3Kw/b3K/4OC1ld5L3rAiG416/style_thumbnail_89.png?Expires=1649635200&Signature=ZgGhPQzHWQllASMFWAJrR9~MDSEnSYq1~xYllx~orTiHzG7iAgP3k5P~D0HAIaTBvtLPSxUKm5xmsMTdEz3z6r-tmEO9YdGmXPlwfBUdAN1fKMBjA~ixSSEBgrazxkPAK2KbL-MVEs41PdVGqzGwF3eew-HAEcq3gBaD~jbf8vn~73F5qw97IRoXpZlleF8nNzj8b3qqaXIJdVZZKaSYCwua2wQk0-dEKVOkmu4m1CxgztTFBYaIsoU99PXvbD0tPK8lVX2njzQk5ifv9yjrPopOxFVb~IjI5q4kEAeD9E7fqTRt6zEilCf3DzfzNZxftfeXwKCaDcMDdSWQN93FJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary Inverted\",\"description\":\"Inverted Primary text and icon color\",\"created_at\":\"2022-02-17T15:35:46.556Z\",\"updated_at\":\"2022-03-11T16:02:18.181Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\".\"},{\"key\":\"ef8df15bcae18523a1e9c75ead76484e3946905e\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1849\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nnD/cY0/6WHhFrtlSyWg1Gvj/style_thumbnail_0.png?Expires=1649635200&Signature=JUP8VF9d7~0Q-jBSzqZ3Z3UNjgcGwH02p8-6Gi3jcfNEg63FxbIxhN60I~ukRZcfi6xGF12iHAdQIRTIqKPJUnrlxXaYQGXPBKsHUiWl5whQBcdQTF-WENK5XATAEEKADGhmI6geBw9Z5HdBbF~tsvPQcrrQ8R4H0PLV-lLxSsZ6Eob5EM7wZMbwpfM2plAeM09SXMgLGoA2dWAga3XA-vBKzpQDUDJ5r7nweqntMUkuA4VTqpzGST8z~yhh8XJhs27Fd00Y--cuhHMWUlW7AA3n5e2FItqfX~nYA6ZQksglMHI~gImkwxfjJ24SPvwUpEr9kiFDdn8rpaPXqL8BXw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Query/Operator\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.118Z\",\"updated_at\":\"2022-03-11T16:02:18.177Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~5\"},{\"key\":\"ee6d71d43193e6d32af1b76bdbb8a17e0e88a0fe\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2377\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/qXF/PhQ/I9hkOg7KaTRBgMgU/style_thumbnail_10.png?Expires=1649635200&Signature=EzFBOjshvFxhY-WqfJdybUvgTMcidgY-dv9lF4nblKLYA4NM4ZXJyEH0KVlFaWLeQ2Nn0zUdGeZiuGa5caupvZAehqpk6NJS2lWaU-ZQ4M2VL5qKovN-h57lXIMJWVkwFP03dDf46IZSjmAzRTbjj-fqZT9FJVZWTzfyHdRhh9xl6MOhmXtHGbNSIZ-N~-Ei60RnyTWkIEbWICg7JVn8zg4AQVSaK0OwkeYcpD8OTErY8IplfaFjDzn50tmu2oYKc7cCspn1V-L2phUp9QWgRvRPjVxT6BX1FEoaE9y8TwncS9ag5dwAFbUE1rQLUvf0NcAss7jMuPWZ4GX6WmiDcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Nav Main\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.662Z\",\"updated_at\":\"2022-03-11T16:02:18.172Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"*\"},{\"key\":\"ed7ff3d8852c1b96614d2ba17f5c71157eb86160\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:740\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tvG/hTN/xoMWtuwLvVVIS9t6/style_thumbnail_70.png?Expires=1649635200&Signature=baLS~m2CeMvSeRo7QZ5WDwgrcaFAOMQb13-GljbuDeJM~YwmNw6RTfR~CDBPjGmWjAPq~TrlVezTr-ImTdqsrui7fEBV1geni9wuag~ya-6YTdmyx6qS8Kpop1N4W9rjdB-zpuQc8OeDovZnjAlF2WeIfMUABiiwwdG-x7poXuGaFCkziNjYIfnc-cDF2oyFkepUmW9SwpvSxR-f8lrgueCkyJqvq0f6BRHIaLxyCGZSfVh28hvkMeRjx0rX~F2-y2j6x-P2BCHQU0IVQIuzyq6ptvg~JEW8O1Tr~FERxZ55tMBMOJjTWFb4ezwH9~5FQC6ci2hzzYuWUnoqsJiX~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Strong\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.463Z\",\"updated_at\":\"2022-03-11T16:02:18.168Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"8\"},{\"key\":\"e97868949b4dcc2aeab0bccef4ff42dc66f60dce\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"21:454\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TAF/YLn/B81gvprjNPTCLRIj/style_thumbnail_86.png?Expires=1649635200&Signature=eEBjsHjrIZDL4yClzMCk2ilgjW7zJI3sTYNSZYL3po1Z9-R2jb2UaUZOMiU-HJi25rjUpfC58JEZp2KzHoXL07rSiyC70FDbXQp2jrJ0rNpKUYahCBBZ3xAYoMW2pu2y4NVDil895q~H5agNbfLLPzoL3p~FISHP0aCFPv0NPCOcRHZYOeSry0ONXb8F69Iom~VKwOJIqAQ363wWjo-ldDGOQHoTIWHVfwIZudh3uV1tVqjMQb4OmBBo8-DQcXYaQSD1zwQDIxRafMK69vg-Je5BvyBjAp4Rxu6Bd7bXHUKZOFBFg4IBSruDwMqTmfWT~aOdOYuLK~OOP60v7ftsdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Foreground On Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.541Z\",\"updated_at\":\"2022-03-11T16:02:18.158Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"D\"},{\"key\":\"e6034bcfdb11fedfb2d0d8d89e0f44775cd17d16\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"56:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/DLb/4LM/G8J4DRGvcAgyi6Wm/style_thumbnail_0.png?Expires=1649635200&Signature=b7jCb6KjMlZn6OVu27YQ-NUjwGTbTjsSSuXf3nlHfJkQBXl7wxowDj0p3JaSTPpVBXtZDCN39kGJZsqcx-rChN2KNWecgk~eOXxW2JfsWjKpwjj61FfiAJh43xKZQQnpgP7rcm6kVAt4KAkgnZh~1PvLQz1xPdlHGTcjnklKzu6-498N0DOLLLc5GzAWar57-xKLZoGTs2fUTbT5F6C89eBGDD3G6eBYfZSqHdrwzd5hC-fVLHSD41pjMDkbFnQ459MV2vVgh2x5EbnILpcvteX-b12u0zWDG27LnKcIJDGyzEhPnDadONhF4PmrX8bMuZhA2sib8y8w4~rw3-6KYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-24T16:56:40.445Z\",\"updated_at\":\"2022-03-11T16:02:18.154Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"RO\"},{\"key\":\"e2e02da9993a4113d498e233123a00de0e9f119a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2373\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yoa/Hw7/MZJ9koCG5KrEfBAw/style_thumbnail_73.png?Expires=1649635200&Signature=MqHeKnMGM-RkSMJIdq1x0EuxWuUyqq0wh68m3b-ppBZUOEVcD-SuUmT-TEH~~oTuuKhD1Pqar2B-8No~jObWfgjKyV1AAQ1h3ARepKPbw7g7mBtG~R0Xtmbi4wKJ1h7qLxI5mXg9LYRacv4llhws0dS3nAw4w9qd0GNVF0hyWMQ7k0qEyvz2VwF6hWcBgt-qZJrptvYke-KqoPRVE1lFaArCp3~kdvW1YDkjOOrGGOg1ospeatIJW12pBc801pvRyyietT4KCeQqiT6hSTNNKM-cRXJoat~MotbsvrTj8QphiQ7Zzqe~2RCgQepCQ5TabUIj-P4plQuusZPu42Rr1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Hover\",\"description\":\"Background color for System items on hover state\",\"created_at\":\"2022-02-17T15:35:46.478Z\",\"updated_at\":\"2022-03-11T16:02:18.149Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"&\"},{\"key\":\"e24efa3b0db9320018513ae1c1b305230689fc5c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2371\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TrP/iR6/sB7ay9rXqoHWT4gS/style_thumbnail_101.png?Expires=1649635200&Signature=NyS0kSgQyMeag655o-191d9SKl2SVUF5tBM1Q3C-xyXdr~rLkSzZ32S1cPEpkjb3pSfI529lV8Nm0VvMQrBBswNB93n0pnMwmOHiwiRQvaIRi~ag1PucD~DHqNfkafiUIAT53Pq5SzmX~N9gzp5NFDS-pkpzx~MvwZ8t1kKkEIreBzrM8fizJz32GEDqyzenmftJTO9id8P-MGV6IXcQroBpBMQu3d0ApwawhO02X4G99aKuFNTvt62H-akqBnF7qdpm8tZx8hpXm8jASX~HhNwGhEljVqZ~ZtBP8N1lzMlvPMX0grTJ6GXpAhnnnUJH9tBTOherwuGxPHqSBreXYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 2\",\"description\":\"Pop-overs (Dropdown menu, select menu, inline menu)\",\"created_at\":\"2022-02-17T15:35:46.617Z\",\"updated_at\":\"2022-03-11T16:02:18.144Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"$\"},{\"key\":\"e1e5e64924837a5449b34b1d972aa6789d021d1e\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:741\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ljs/Jq3/vJyiRVSDRNl6PkhZ/style_thumbnail_55.png?Expires=1649635200&Signature=hhl8~MzDK~OSWqOTrmnihlxn4DcPGrLQnwei8NS2npCoTCVzLXZHd2hB1b2SUsrI2MGuu~KnDANNf5wcRNdMfIjOGS3QQ6cyaO7g4coD~JzZSQMRwW-HeJ9V7WjEbFvJ9g-HyILV~6FUs~uYf5pYsTYm9mejClO4zKxAOKoq2jXJMWM46fKSAiKQggxmeC1n53NSJ6TZCVufzDTLCkeSYCjrSnKCrcASNipucSPyMU0nU0YAwt3SJuHEIfCO9uSvpxon2qzBIP~0d-dcmlSS6c0HrhdvbSf-unkKlGduYh-cZbDnbd8kQJbD-AOIK9U9qf6xm3E6q8Xy0uFd8v07yA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Disabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.387Z\",\"updated_at\":\"2022-03-11T16:02:18.139Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"9\"},{\"key\":\"e1d71d2be6213eea04d3a7e47f008c98e3bf9348\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1511\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0Sk/AFn/iePbbMCk0SNZrGy9/style_thumbnail_20.png?Expires=1649635200&Signature=L8q4RT~dWi16wc48eey1jm5QrUQuXoH4lWGOyQO~7oTKOK97Ps7UkSl4twMynp11DaLkO8-jOue4LdodrMJq87UedA5mbIXzyx6pEvpsvy403rukJ8dutSmov-tD0Jp-FM8fyjZoFRS1jLEy1HJFZRaxn3FnqFLfgB20vSk8orZVSB9crFIGFDWL6M0I~kWoFczt9IB1PGLyZw-k0isvSVALaYs~tBbSqwOCYWA131GjteWB0PpQ2tnb2nZByQ9G0fx5lFBgHXsv7ovQ~9rCS~kmLVFBYVaw9s9w~cwjbXRkcg72Zw1aMX-1vj4s~17v32JPaIKgYT4uenczjjpdgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary Translucent/Border Secondary Translucent hover\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:25.003Z\",\"updated_at\":\"2022-03-11T16:02:18.134Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}{\"},{\"key\":\"e093a7ec34b4102b9202ddd5c96aed8bb89761d6\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1304\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/dfn/kht/oEprGCYCaHaQwDEs/style_thumbnail_8.png?Expires=1649635200&Signature=bsr6MI9t-dV~tLwgsSQgD~QEzmWwPcEg7GMRWjJMknlGadB-86xDy7YQv0VTVAqgRHY9JrvGHplOaox~tdR2Rj082j2-0rCghzaZ-IF1rYuNihYC47wJQCNLogxPq21VgPtIE6ShDxmmPDNRjq5SNQl9Ib-Yv8vGbs2OkaiU5-pEAjg9g02uQ7tU5YvBqDas432oBbZYLn2-tSE8Kw0OwWpeQollAVfnjDsPKXvBbIVy8zLm~OrswyrURf3WheGtwV7IJxFqRy5cIXK-76AOgJGwuymfj~KxAnoQJNbGvWuCqeeBVaSVOq4EOO5KXY9GWqBCvmY4U5CgUosVTiR9XQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Accent/Background Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.632Z\",\"updated_at\":\"2022-03-11T16:02:18.130Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@r\"},{\"key\":\"e091d8254869bc42a1ad87af7c273f6c52ac37d2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1323\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/N0A/7Ni/0MMCVdSwnzmactUg/style_thumbnail_0.png?Expires=1649635200&Signature=VA4UXDDzXf0wgPwndKCvBzYc8pXfN~dnZU4Lglh6P3V4M-snyQSHIHjW2RFmbfvfpYjivGgz8uW5zNlUiRgl1joVSG7xO2vjITiElcyJKJqfn0TmRj0KsRObRSCFhnJpB7jPIH6oC4OdZ~9tZGQe1m0NjXqbextrRdcJaOJjtV63Pwil9r~SPVK6c6O-LstGIEptx8t7VGebdpl4cftfHcaL4vviVypUZpUwg8aNi5i~~uUSOHRvRgsZN1CF1LK8AGy5r-ngPmUHo5niAkfPIm8ZfxyMSpGxezbfFpYtyuo2VTcuyISbsKOm8HJi2xYu96C3DTObtEAMJEdoTOdr7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary/Border Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.266Z\",\"updated_at\":\"2022-03-11T16:02:18.125Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}|\"},{\"key\":\"df8c317c9659f437f56a1a0558ce6130c5002ac0\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"61:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/7Ut/Ity/jPpzPudCIdFvTPuc/style_thumbnail_9.png?Expires=1649635200&Signature=Z93jasrKf-xfm5ThK~mjWGEuLCg3KkWMBdHUu3ox6k6wliegWOHzw-6bFyUGCBOQIDjfyNWntAQnglxoVEIrdH~IQKbAHLBf251atP68IWUlNHXYeU3VDmnj9khamkbwVL2Ly-njj5BtwqT3HxFoFT1t-YRVi4primj~sxni33O3XTG2UJjB7q-LsX1jL~I786ymaaSTYEqz2GnNNYe5SXVl4wvotH63Yr2B0NR0aadqeFOt8ZAH2G1yfzxotbweZzlrt-3eWi08~s4lHQ0CgqqxaDlToug8aredPbBWWRP5Usmo~40-b4jL64d4ikUjhktrVahfD9aKiDZkbbdaLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary/Text On Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:31:34.758Z\",\"updated_at\":\"2022-03-11T16:02:18.111Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}\"},{\"key\":\"da8463f843751c8307206c40b3d6473c28435e4a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JGE/t7L/ymQnY45XYTDoiBzt/style_thumbnail_28.png?Expires=1649635200&Signature=Xm4sORamavSAiAT9ghSTnVXhG5UJ5oTsJSEJ7tFF5-j1OMA~9fG-Gfu1vdh~oakJVdONOzm~9y5uKdBLZm~6CIatoPr2Dy8XTF-G4syh04VMaB2er2Vpu5vpV2fIAGYvRh8OHA9ChBgELGOxWclC2yaoAiZA17-OFUJWtXKg1NAHM~tH-9HvDj0a1drFPT0pA9FLtVQqrAiIZpYhQFJuac7PCztcP1eGl5JTM3RVIE6S539Kfw6xsMSLg9RP9Imd1NHUB7I4jq~KWNdKOnmB8-Cg9Gidox~Gp9rM314C4dkPSeZ0m3~RjYBCiau-FBdmLhe2tWpM2O7czCRLghBy5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Destructive/Border Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.252Z\",\"updated_at\":\"2022-03-11T16:02:18.100Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}}|\"},{\"key\":\"d9acd540d4e7b962a0e9e12a3956088262fbe629\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1556\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Pbr/H6q/jLMHVQOMu3bzXiXM/style_thumbnail_6.png?Expires=1649635200&Signature=TFVVzLMCkM5PqyeqDBwWntfDNmIeAwckwpZeAbW4StJlByeEBKUhg5JzDfJAj70RqckmT~OMloXBeW5Nvcpju-nYCpwiOV6oONA2l8EvGljRNugqMEgKa8jJntizJH2oqJndg0qKVcVkvZKp5CF9ToQ0DDN76NJwiCK4UCvtpgidkmaafRay5InZOrH6eN4n4SxnrQu9U~55f9yjS4PRbZgEgEHRfGZr~8XWeKEEyl1vbK3LN8RmgMUbicTlkkAzfsI8RyXstW0rrB2SQdKoKQZPDtoEaTKXKvoq-xjG6tS6HR-jTGHv1OEBGvQ4YVZF6B7hq3JF8oR7nN1VFt65PA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary Translucent/Background Tertiary Translucent Enabled\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.971Z\",\"updated_at\":\"2022-03-11T16:02:18.096Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}7\"},{\"key\":\"d992f3357cb278ab3cbf1fefe22e7653646626ba\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1507\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/dUl/3E3/rl7uVYcnCD6Tzzif/style_thumbnail_42.png?Expires=1649635200&Signature=Z~LJSjBMr6F3KZlDodfBTtwHj0YiR7e3VkdAaQdNBWn4elZIAh26VB3qd-2pNcHQJCi6BYTeCHv6~Nyjc8fpGtvFXLmBxKmtuh3~3rwzRseIzqxgP93l6B35qC2efS9Hex9lUkcmQtOpY9OQr48nwgmz6fP9uQQ4AENFkND2xW~684WIlliU5x-dR11ujH-Xs1QGkhIcCAk~SYRCTZvlu07RvRZGuwFadSH8S1GhWPLh1o6RSzw5gBj4exxpHrTd-xksv60s6fmU~sfmITHNyWKMmTw5LVY0SSIEGVVvLZKVCUhGtM-MvsYTowd4Vd3DDPNmAD4B5sZhM5U-l9i6gQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary Translucent/Background Secondary Translucent Hover\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.989Z\",\"updated_at\":\"2022-03-11T16:02:18.090Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}f\"},{\"key\":\"d4ecbcbaa519daf06c1c61e66c54c6451058e92c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"105:1534\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cSP/Xli/ddwApmHznAnWTKto/style_thumbnail_4.png?Expires=1649635200&Signature=KKR5mNj3dOKDtoxn~HFMpL965NTNf5PjwbkHFi8Ujg6QWKbUyQCf99gNVb56dkarZ8JJtrFlWpwOLCcnHmSM5I4QUj5GCCZbk-dDZsGpI72dZoVlc-gvF3-qKTlik52xLIbtZtoZwGTZTK3O3CWNJ8Gq0FyNT5wxACo8jcmRoywsyyHxAA-e~gJ2qWJJV8KQFUoQcW13vfgkOu2gx85hK63YlrrmDC46USbsLzv8ytfKL5lP~JAaawLZY6S-1RIRviAfw9RZcax~koBrKVKEAB74l1p0h-Sgv-LPIAgYBSXfG38uo29ZzKF-ZSltg6de6ImP1NL1rGZZj~CEgCTzig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-03T13:10:15.704Z\",\"updated_at\":\"2022-03-11T16:02:18.085Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"CO\"},{\"key\":\"d05b3cf8102f98dd567870f9f45ef6b71784ae0b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1559\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wlQ/aPG/Uljve3Q6h5aDQQ1O/style_thumbnail_0.png?Expires=1649635200&Signature=NIdEYLnoLP~efA4nnw6E~pn0qPekvrBds1xlCBu1BW84DnWq2d5n4uWWf~Y1fhYxpgN3Fe5747xhn0VcQCK9ZCyYzPgMpd-NJwQYTJy-Xzq2MrIxQeMyH-MEjJsVva7f2AIgDv00gsOstprS8MaM~fyajJ~F6JMaZxhMxPzTArZ~qLmaw8ANmINbFVw9rJEF7SqaCPL-zEzC6~pXeEfoq0zobKVwQwrMIRfABEiJ8IUsvXYBwjqGspYMDUv5PX3zuvJJxE~XdbhwVf-8bIwhsFJzQwUO88XkVMDeAon4HfDjeQhu3NyoSk3NXUEXVEB0FQ7Gg0AZmcymLmEG1ov6eg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary Translucent/Border Tertiary Translucent Enabled\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.927Z\",\"updated_at\":\"2022-03-11T16:02:18.075Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}L\"},{\"key\":\"cd9867b6d055f5ea911b9f686b49aac0170de979\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:457\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TF2/5eT/Ullxq0287gxirh9f/style_thumbnail_107.png?Expires=1649635200&Signature=AJllnxiHbfjbR1BkDvA4TYRVMQl24L-CbdqZaHxTbF2suyEYo3lgarezEHsmQ4TVb8USpdGTttpfAdfm9aB7czr8bFuXkDXIj-p~fM~Wb08egPj3uqunLwJNgLzKlSW7aoiOInZtcjWePioJkiSvRUs~NxpakCRLmVAXh~HrlrWniw2wpuIFwAnljvfwEjWbgjiliCECqEdu2q2WB7LGrKRg7QuCrATbXVRki61H34rDKxDjVMRiA9-67EAKiHPT5R1Y00HLYfdqC00ehbssr8YKJpmbfeOBklK6xX-CWJZlZ6TrSn8wpqRfYaxsKRnLUv6Ej~mFJpU8IqEMU9o-Bg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.647Z\",\"updated_at\":\"2022-03-11T16:02:18.064Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"E\"},{\"key\":\"c7ac3da9a5e32f8c3906be2a2f56bc739e792d7b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:790\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/YUx/9Nv/XScyRjW84lpBdbJL/style_thumbnail_0.png?Expires=1649635200&Signature=Tg4xvzKzL41McSZH-uOLjbOm5SZAt1pxhsT0CZDx4rY0LniLw-FfGfkycd6E6KRxTA7TJL2yQl3c~dlN3iVVm4ieSE1mloCpA4BCFAOxNcWJSWPGM-dSF18LQNR3Aum0vG7nu-dZgWZ1Ep5Pbahbbv9ZQ8UbAjaUcmcA88FAQT6mJ4rfctrw4uULU4DNMblY7Tvto2hWCCfpSkOyXTuNdv8CnUzRWrCuRavB4VGNLttz1pYjLr3WKrIhgXMwY9cuDQj3G0v0gihMw7FH4-uJGjsqm330IL2eDsMDkQ16EhNLdk1NrdF1qzefOTEhnrwya9L7Oo2oCoQHWKtPMrlYlw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Focus\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.546Z\",\"updated_at\":\"2022-03-11T16:02:18.060Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@\"},{\"key\":\"c6d5b0324bb7d47fa9c8819279e7b2758d0e37c1\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"61:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aJS/yAO/O09PWIyss855cwd8/style_thumbnail_10.png?Expires=1649635200&Signature=BOPfzvTn5UwNw17Gbyp-LCxsTtYcLWYaSdMY3IqoQltJaLVW1dhb8SlVtOMG1mKTKCbLAVkDeyQlk-czyN0dsw~RwiQ2i-GQ2Pl88B8AXxoxWi0GHTf6hleAfec5NHScYa4Mi6KTWMYhdNJ939ravgMoJH8I3uBl4fFInVq0u4mZEWc0R7F8tMFrsL2vgmCCMv8ctioj-xYyzT96Futt4agOO43inYdbTXh58mo8u544fxFI2uw-mjlk6aeC5TI-X8if5yJMfluidYcbGqFyOx0Xi3sgde4of6YZ0AuVpN9E0552vw4E8XZFVj85nbRmGHNY7Aum6F6-Xp5s-d0tdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary/Border Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:31:34.764Z\",\"updated_at\":\"2022-03-11T16:02:18.055Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}|\"},{\"key\":\"c4805829f7aa1d9f43eef68370525e48dc63815b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/etM/2g7/FEcvZ7m8VkKPIbAp/style_thumbnail_1.png?Expires=1649635200&Signature=e53wCGie2Iej-Y0hRXTX0KHwAkzhnQrKGBWYFe4OPTaF5CX2FmagtXUM1xkWS1QTsFx0Vg22ro1u73iY6wSjAZPCqbptms9SqFrwiLL11UZFx4OUwqHQVu~tzGDzKnxxU1vW7ZM0rtzItJRqRlVy3oN1ECwrC~yeZpFXN3QipulZPkSJwTNLVtF5i6bmhbQfNVTWwE9jHo~PrfT1ZAS47LqnuaXk4dzWGUMlKJOpzoILXlKpctPvrdQCT-mZ44NFgRjU0KK2ONO~G~kw6hRapT6QR0MxYHtw6rTUCk7mM31j6b0h-uywXNygKpYl5ZRbnBw7~BmuhRGB0Poe6ryBJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary/Background Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.368Z\",\"updated_at\":\"2022-03-11T16:02:18.050Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}f\"},{\"key\":\"c3d97ccad48736ff0f1f45a898cafb425203c3d0\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"120:1600\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yjW/4hW/HS2f8qcgB0lIPyOu/style_thumbnail_1.png?Expires=1649635200&Signature=MlWEnJSQoItB6dYvaOYMJ7880aA1hLkEVegonGsVf35dwMSLC9TGEkoPGwBgHuKMB7M2c3IHWxyXl91TZopo4NpgMnRKrlTs~6s7bGAAkCcEuXhe9Mol7M4cepJE8rjLi~9Uq8OtrBo4B7KE7TNL2UXaWVsQvjqpLUAXbnZFAWMlxTTWROmQGX0j3PSy-p4noTjwgmr1E73SSSQG3zKaO7s4gfqqqLVOOPKzcgYp5PTtnuBTRsCyDJ4NY2434WHU0wX1rtRee2UFL5-ZsukgbaTt-RULDa2ESe4-higToL6k2uGmGrr4gL60R1wFb-xzOnnn3BRrDyT7hDpRUMbnJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Multi Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-03T17:11:01.912Z\",\"updated_at\":\"2022-03-11T16:02:18.046Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"DO\"},{\"key\":\"c3912b7e3de980df16b615019f7f9e4faa723ee3\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/blI/uAg/h6JEuFzSWdU39JgI/style_thumbnail_48.png?Expires=1649635200&Signature=ckO5SM8lGFhwirlg6S9IBqGsvKZ3znrm7Hb7EwaaQmsUU2~j6AFc7J3WqW5pGO5n6hPjr1pM2gjWp5tKWMo20oc4OgLqKAU93IV5wj64LUdY92DA3SasUz5~MieGE61yGQC0pHMY8R45ekYDtFjCLrw1wf-JIQMEJu0qWu6sbtDFQQFxJS3L9grk82QT68hxTF9UV6aj61d6vtu7QX93DpPPUruwdw5iwRc894AauzTvJH7unhSXQmrJso4B40pW2Ey9EgiT3pDxu4sKqH5s7b1v-1O2OMutQG42~pgzRBzJszOTy6Z1pBqqgL9ojyV169QDGYj~4dIqqZUoOHxdXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Destructive/Background Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.339Z\",\"updated_at\":\"2022-03-11T16:02:18.041Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}}r\"},{\"key\":\"c30ebe4e0828d4543f977d67ba900958a335ba14\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:739\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ALL/NNf/PEHbpSC2zE3dmeqk/style_thumbnail_63.png?Expires=1649635200&Signature=ABV6mctJaRfV-1NKNVAd5ZPSKVQG2IQEk9Pl4yqpHd~ZxEz4lP~xBb8a8PWeF0DKfB3LmmV~R4NjCrBCGuOtbWmTGfS-U1v48YaraXQxhZs1Yt2Zks5B2LDgpUeTYpG6ApcTpy5ItZgK7soMqHA-ThgjMsqukPzobSj31fUj9GNsunVVSlht8ScXlz0vzwiKDB0Bh9nPdQwr8vuqHSe02v5yNXD3d26nZ8bX2WOrU20MmG0Jb9Z-j4TRMpraajh0Rp8wT3VqMbR6vzGKvSkG9gkCGdm3GDvU71vjR8RMtIx0eiyPhSkF4wyqEKwHwsxWF29Kgx0Zj6whU53Dcfbarw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.427Z\",\"updated_at\":\"2022-03-11T16:02:18.037Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"7\"},{\"key\":\"c2a591ba590762ff0067a3a2feed6fa959d0c848\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2379\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/MOk/Gw7/fMvFah7Lx5kH3sVa/style_thumbnail_90.png?Expires=1649635200&Signature=cGu8wPCn1dAHeCLXq6epNuEdp3vugjWKcfP8BvYH~CkshwMLuqObMb39MKe9GDtDPg788FNB4MpvZkR4HEK~bZaK46BHKdXvcyhhGaAXEihmplnbou8c0-163t-hRyqHkibmsm7~BmtMgdzxxaTLiR4gBkUB-H5CHKXAEYBx9WLoaz5CS-iSKqTVJX0q6jvlVUIqxDvWah27Wb2XtNOemgwO0qgmoZpY8Mmwo~gQtG-jWnT8n~NWimqP4tFGflbj95WRPjztdbFqdUSBO8tA8ZdU1JEMUwIZuNmqiqfpao3Eiwf8XV~4I2eMZvvAnDWwk2pyyvu6dSAM~dbCopj2BQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary\",\"description\":\"Primary text and icon color\",\"created_at\":\"2022-02-17T15:35:46.561Z\",\"updated_at\":\"2022-03-11T16:02:18.032Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"-\"},{\"key\":\"c20fe0c3743e693164e5960baa00ea19dfc67b1f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1848\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uLe/red/ivQWcwxs6JElp7IO/style_thumbnail_5.png?Expires=1649635200&Signature=YtL8bQ1P1z6R3qvaA6Hgz~b1WcYAIsu~lzLQ6yvH-G2b0Ro3iqLbjPaJbUWUxgTzfTophsjPrqATZcI12uSw0tyo2I8w-1hnyDyK~3EoGk~Nzb8Bs7CMoFl70M8VHXW0ek6iuxj1xbS8b3AfxlQHBKhnwx~QqtuG5c5CecdrTB-dPmWfliuQ-vMEtudfErLwomFukkvt45J5PfXOTqocyLkaN3tBSzyUtg0QkRNGXm4wvJcJw9J9EGyZViA1G7VksbWWyEZehWSaJEOxO0LktIxklnD7FGoMFeRfCZSPhzSioRVDSt2C99rdB65hrzd7WEQdAfrbNpCtQ-me9W0KdQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Query/Numeric\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.146Z\",\"updated_at\":\"2022-03-11T16:02:18.028Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~4\"},{\"key\":\"bd9cbb95214eb76437b9eccb7897d24de4cc64c8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"30:1310\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oHp/jhb/nXJfoWbX5RvbEJld/style_thumbnail_54.png?Expires=1649635200&Signature=Yj8BYNqqqwLmcPpeqYrkU75AFt6MM2swtBhEroWulU~IWoxn2CQZGYF7c-e1zUphHWzjcxHv~iz8z3m5GPs6DF7GbUc6A~vTq64NC92jZQejiDqiZTgf4QLQ2edj~WhCehjlJfJAcUEqkOM7~3WMM3NNR3mCvq3b3WKSkmtiaik~ANSeeEF4EIovgKR6PmNdVdz2tUtGr0EBYKwr7MX84ldYSrP7dux0KaZvNGDfNYHXl5xaq9KVTvdfLYhDfot39I6o852CLG7DmuG4yH8xjyazZcdAaVt9s8M232XKXDn-LxunVMWfKIQU65hky~3mtpJYYEhAMKt5Qmsp3lW1NA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary/Background Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.237Z\",\"updated_at\":\"2022-03-11T16:02:18.023Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}f\"},{\"key\":\"b8852809f5c770c42da4f09677e086f052b776fc\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2374\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xFq/VPj/QOtyh1MUJ0r8YSi4/style_thumbnail_0.png?Expires=1649635200&Signature=f7Y0gD2K8L1fWnk-K5KD9hZBj0WuLMEYhdQV~FvZFEBNtTgLIGF9tqJfoXlp6nE11JiZ3HXY8jYa2JchwCri1PDACcdy3mcQ1kvez6bbq64dfgb18ZiXIFfwd8BXGo0ff0m-5V8gdxOSqAW2zdjmWhAgW~q2257Za-Yz723Kv62Py399dvP9xt4pMhMPThHz~8HcvOFq3aMrHtaR1RfqJQbu3iEfLTrNqyrDoLkdScjkGsz30B76NjQhPfEvPzqxTIaLWQNXLNuTRNolp0N-0CLY6AHiiF3g3K71HEDcThsy7UwjTZbwoUY-zvmbDKs2p66PfbaZuZrx05ilR1c6cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Disabled\",\"description\":\"Background color for Disabled items background\",\"created_at\":\"2022-02-17T15:35:46.667Z\",\"updated_at\":\"2022-03-11T16:02:18.014Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\",\"},{\"key\":\"b7bb627d821b8a993e03c21d9b9938b53aca929b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1458\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/MzW/TlC/jikpkx2wFdLX7Va2/style_thumbnail_3.png?Expires=1649635200&Signature=GTkIL9y887tBnyPrzp7I9M35rOwhw5o56jP6D4Qy4Pe5YJZHE6CkyVd1Ch51skaCjQdry6u1yV9uoNJmIQnu1vF87-Cc0xkSgGxjk8X45kQzw6kcxj5Sm~IS51qhqCwlTQApI2HB8QV0gR4GNDfrYQMmnymca6-bb9zAbavHMsfMXLfbkcoCtZ~FWxQTn1r0SVP8wOkjAYzjnh3T~OxZPA81ChisYsvvtLe9ygMFzmw62h9nx3EcCsRb-e8kFo40knufsMJVG4ErPyElGkpJ2iEiT7I0jz1Z1ObQOJGTldo7YpIHJ4KLcRsRY0jv2I19qhZurUUEqOCH8aS9vgdSsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Background Primary Translucent Pressed\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.918Z\",\"updated_at\":\"2022-03-11T16:02:18.010Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}r\"},{\"key\":\"b510bd149b22e273da4d44cdd6b1ec657f1a9316\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1461\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/t2P/fIr/P5OMr44JJalqxRE3/style_thumbnail_1.png?Expires=1649635200&Signature=ZNXcMwSXUDlsfTHkU2Bvb-E4uyqJFtivMyE0IUeGyKljXwyvDrOSMqrC7h9ZXXfo4BNYLdhac6lOwiZOQkxpVpCn0LFCY-Xw8EyVweop0nBi0a-TVOpRcOZ-nGCC3wRkv36MNKvHoE-wBwBtjDQdyDydaqmJOVaomumrfLRJouYUTJJ5cxKHlx0JZIsVLIsLMKryvyqPN8F3tGHG6n1Z95DZu2xYJjVa9zIQRPGeGSlsy8hwdjj5xo1LnNg-~j05ZeeFaX0Vpn9g4q7bde66PhPTsHUGPfhsP9V~SWZU8oIwDSu4YTizE0RInF4ImrxGDhc3RxrE5wqW4H5GlQDCxA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Border Primary Translucent Pressed\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.931Z\",\"updated_at\":\"2022-03-11T16:02:18.005Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}|\"},{\"key\":\"96e4443901e4a460209c8a07370d852e4d4247b8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/c66/Qmr/44YVl0eDNc0leQYy/style_thumbnail_22.png?Expires=1649635200&Signature=ZGhJVzHQ46n~9OaFdNIaMgM-FngKzZXzWhhwPnFNSH5VMZkETqtRSWT4JQQeaHpBokcIvD3FDqGL~7ww-UHO69dINvkExv2FlHRJ2O9ZXV-yxBxOFLaZGvYWWDUpt1hFAWmjxYPTAhMbmz6UtehJanEtKcLqIDJO58d~IhSJ6M2CBMj1P7fDzD~oJ-pHIj~7Vu336tbeUh5QZTau0Jz5WCORiDU-ScrvjorZkk7CZI57qgH-k7rftR68kMIxgm2sFszA9e3ygU0Fm7T6npqigjQ3G6gCazAYzir4ZtBMvfYb5lit6F93PIlHUG0Y5iYWKKoYN4RxUt3VWZ3CUrQmvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Destructive/Background Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.151Z\",\"updated_at\":\"2022-03-11T16:02:17.930Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}}O\"},{\"key\":\"93093eb763a00ffa7d41127baddd3acd7f2c20e2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1522\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uyk/GHt/vR6vVxPCvZ3df70B/style_thumbnail_0.png?Expires=1649635200&Signature=bMGta4MBrPS8CFQLa0knXAITQrgMu7dfocSltJu4SNHijWF~LHifQJHf190Prpk-tMFZZGMUmJiwRlOmHNX13ouYIpWe1QJQhI-KwNjwzRqJZEgO6wKG9GHTkiut~0jPzf8mDYl13E1Kyn0Jh4PMvmtjRewJnKiyXV2XbMNRLCwnncQ0zSPjZOtF9Yn~~VRS9vyEVVI1FdKEqsJwm4KvPFzcrG4qwYRM1N~UBpP9-2b~p80EqUmThN64s2nZbY~rIfHFfxDvjxberG6Ar7QFaTu3G0NgaLp52o07KnSXx7FwdscdKl01FbwMNMmG4eniEhX3q1YHXWmIcx4GV5TSFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Warning\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.242Z\",\"updated_at\":\"2022-03-11T16:02:17.919Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"`\"},{\"key\":\"8f6506a79963d280851a0dd029aafa5fd328513f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"97:1578\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/W7O/dEk/56VIS7GuS4lXL7GR/style_thumbnail_0.png?Expires=1649635200&Signature=efM7r7niNWxwfYBksLAQq~nlSEk34hunqUGuKifE9TeDNcdrL--d4lmWhI42Cy~iw6NPs2eJEMTGFcWMeEWsihNO7-FRyU6mhpyg2EgBeDDqXlacd9bgwXeflOPBHl7eR40gfzXFq3UbGyaZHi4mJ-QM1EW1~xrvQfxz~wF4tftHNKPVty7qwGxA3XoqjLcmsWj25EUN4ReEV32iYl58~XRVQZ-NTfc31Nb4UHtU313CW4NHvY4MTcdFwz8-3hG9au2E7rIAFHmnJYke-RnnIPOjEABS7Lf0w~sdfScx8ADL4dD-W-kB3XX6hiYgZMovI5Mjb~nWtWpT8OYO3g9Isw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Hover\",\"description\":\"\",\"created_at\":\"2022-03-03T11:03:10.535Z\",\"updated_at\":\"2022-03-11T16:02:17.914Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"B7\"},{\"key\":\"8f241e62ad034324f285439556b438e2922ea245\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1514\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fgK/sEb/lRUhHujwHkOu55t7/style_thumbnail_67.png?Expires=1649635200&Signature=HewStf5AjtVmWY1B8DAyvT~Fg9Pt-V8LV6W6BHoyjSYbcRjU1lisuiE-lo-UczUgOUI5trpWLG09bpFSTJ2g7jvCMOox0yrnuaRff~S-70JfrIYCTtmo41zoQ7U8Pk5mdfzjLvvtJgjYIrGOFwxNSCDqeByhsG9rHf5B0YpnTgUkJBKUMF5bU8vCZfJNOBtgs65Wo5AQBNEEx2PZB1EsXwc~QeAQEADsMVB1r9Xro1hlib9v6XR8ygDFUmKUiHQn2IXOmGAkF4Yj4NFlEesLol1UZQB2AVlF5i~MuCUsoX~7IEe4-IXMmNK7M~CEWjZkALY6ce77jLfv9rLunm2uoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Operational\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.448Z\",\"updated_at\":\"2022-03-11T16:02:17.909Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"X\"},{\"key\":\"8cdcd2041dc91b70d25309fec1d36c74d3743233\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:750\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/052/XB5/d7nVPyFmUFaWbtw7/style_thumbnail_7.png?Expires=1649635200&Signature=ck0TUEGWacefumX9hsTAw-TJUDWWn07gWE5VlV2ri8ysRdlP-Keg2Fh8QTsnMpBAyMqwbI4uMaMp44mQzkHfrWYW4jKhB4~wZWJf~~4JYbAuWZhoXIZW0OyF~TUNJ1gQumCg8Sin1X~qr9BcdigFu97D4Qqx-i7EPloqTOMWNRugWOjBViesGT0UkdYJJzJX9hATo071B4MnCv5hhUjaP8LWd-AcojKiLsaD8AIis9eqCbsBokkPL~8zDZrcBl-SQscxxQcFPG9iouX7-7ReIMc45pG2YUGLnSOLlTQIHAtwmWVzZEj5UR3cSa~3Okx54PvHQDITREXPGJ6lVRTH-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.155Z\",\"updated_at\":\"2022-03-11T16:02:17.904Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\":\"},{\"key\":\"8b817d5ad3a254e94a06a6ac1e79ce9a865428e2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"114:1558\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/AB3/9Q2/k6T0vZSJbUs6x8Ho/style_thumbnail_0.png?Expires=1649635200&Signature=ZTT5AUmQ9zDjcdOsgaTc3Ld9MYnzlI5B~PsWxJhxepGkG~~3y0ZWmH53-CHroVR2hM5tNn4FctS38murX1CyQB2OLGrgwpQfFrU2edwxrdVaN4RbQuR-EWgVlPNJLKmOIjAf0hYlZiqh0rSyxFapUa37SZnMb2zkA0OK11I6xXNpHWjjEP2gTW8hTsy-VoSuEWMFOzDGPACjaQZe-UN5PZ75vbsgRYhZQqzUQHRPTXzYlUoMNePuzsj2Nt2yIGaEt~fAvpi3gzfToe0VOKMJil1WY98GFfv6S2T~JEOJZmv76skLjBkx~f04Ij3QgYmQgUwc407JAU2pC-Cql0dNVA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Background Primary Translucent Enabled Inverted\",\"description\":\"\",\"created_at\":\"2022-03-03T16:30:22.531Z\",\"updated_at\":\"2022-03-11T16:02:17.898Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}Z\"},{\"key\":\"87f36e89c8954a4498c1a14b089eba5c11586e2a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/YZp/KNd/xufhac6rv3sdxGKM/style_thumbnail_36.png?Expires=1649635200&Signature=IMf-EppYVGMxtP7mrSzpaQVstXkwPUT8hhdSdO8~4eRTibDZkDi8A-WJlF2kLZraVVSCGfyfPULgosVkCBC-vnBoTN-ubNTq0RIxa9Zud~MiKUD7LbzvtKoKBTI2A-ktxUEwic42lSuMX~6Pfh8Kf9-d80NztDxATfdFIw3xZ8KMYaSgCG-ad0UBOI2UySbCmXUANLSCY5nYAL7QQFeY~W4MOMLbICZrZ9S0rXXv2mkpAgbwsVQirwFT-RXyFNmjJ62HVtQe~B1-STs70gUanCMf-pwccScvAUrsjxgn2wnRpROyXFfTOwvTMj~juEcsQkDicq2Rhp0Z5F5K0PFpKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Destructive/Text On Destructive\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.295Z\",\"updated_at\":\"2022-03-11T16:02:17.893Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}}}\"},{\"key\":\"859680c104a4a42a3b553124e0f25ed2e189cfd3\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1302\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fr3/kda/xRU6noBUYTQqqeCu/style_thumbnail_35.png?Expires=1649635200&Signature=D5~lT6LHH~IODzuX92f5EN06CodpbcJr2MGkVcH4Cy0GJd7DPDyIObdQfWa0ADjt-dSBZOg~U5xiQaEdKZrsyVTD9tNc1TMVViRzt3k34F9J67samKmxSkCdzs1-gleWd9lQ8WuV8sUdtZZR5uyAoW5wn3i~DX0bwdHRTJOBk737e6dgRnNhCEy632IQM17RhbEy2piiFpO4K9wr5au1kAX2VPKG~WMjy3lm0f~~GzvHvTik3IPoEX~QzI1GdtAJWq7pvPg6P4nsdYdgT~cJY~xsUzmQ6izacX~L9bgyTMAeS~atRG7x7egYmHWcLLsl4wDgDNwtK3nkkoqKsx1P~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Accent/Background Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.349Z\",\"updated_at\":\"2022-03-11T16:02:17.887Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@O\"},{\"key\":\"820cf81a41129c9f0b8c4a2bfb9fbebbe2e80bbd\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1315\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KrE/7vB/KtYBCJsUxUxbcuIO/style_thumbnail_29.png?Expires=1649635200&Signature=O4YvXc5bDriukVGzyC4jaMKBAad9bXG4ZznFsq1RkHHJLlWELBZyk4EkbRD7DXOL1ZEXPf3A~WdPBOcS-8iSlvjyFoFJAglwKq5U8aF7ICo2rcwLaekxdKAfkY4c~pxXyo9uZZU~oF6Ad-zCyVyW0~bp1BCW-xOnXXnqMCDD625F5zprVOguDD-hTCL40ogG15ULGEIrb2wcogJUy7AxN0ETZbgmdat2xr3yxi2uyevLuVNjOGzBA3H8oZXFscltJ5hDVqFMGOIT2T23-1C~k9Ut7Q9OgaYWQmCWfeTBOD29RNmq-KoS-QvXgMDXrc-h04HOYx7jwOV~eibbZBXU~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary/Text On Primary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.261Z\",\"updated_at\":\"2022-03-11T16:02:17.882Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}\"},{\"key\":\"810b06a3d3088bfbeb11f91fd97d078c9310de3f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:738\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cSb/37a/41HlFaFPGHuCtPzj/style_thumbnail_77.png?Expires=1649635200&Signature=JUDAbIO-nlWvxZ3~COiANfEC8xKlyqL~TzPkNZPnKiGJkXHkc-6jmlfyb64RE8VZ5RCVsaxHQS9NIc-bhhNFFPSI8Fe4FjGRCuBQc3aH~kNTUMOMPcHanzzxGUbU-Z8wfC0RZ3-jL3GbKvutYZE4GCGSJPIKLVE1rsz23N561FlNzh-Ssk6dOR7xP42sU1HEEp8x-vw-HrG2DuZZFzLROHeSHpNK~KzzkJiUxBUf1JyjQjAocBdOv-ZE3LWypwt9BhQvGEBqWJZGOoBxjsJtYQe98hW~c0cLPG8khvnDzi4E1KlNpggE8tvMDJmVWfCD7AJb-Ht2HYomP89Q0lV2ZQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Regular\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.497Z\",\"updated_at\":\"2022-03-11T16:02:17.878Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"6\"},{\"key\":\"80990aa8f09235c87a27786cd6e0aa77861277fd\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1509\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Dqj/LTQ/cEKedbkyndiiFpTS/style_thumbnail_15.png?Expires=1649635200&Signature=A2GifIk~2FBo1JycJNcqov1H9InS8y8J8VDgfpwLUCVLbDtElFA6pPx2JsgkeZK0MH16NQbTMUswHxxzigOvASZzAletlq3ySG1IZOrhi6oeKxxk8i~X541GlH-5HZn3ejvv4rw-0TTi7a95KrYqQfjoyhlVV~EWp6rSsHZCEzOI5ve~2QFzdY8HYTnw3U1PI960EWyG2M8daDnQ5P86QMok20oGLNmi9q7qJXoJMeL0I5c0UhIbe1pVx6OsnvB1pmWO1aC8uV9n3WxDSdtc1PH7vgpCjj~BthpObZCXvBlW-T2ouf~8BTflZIKHGjw2CERx~O9eRbCm8V5Dlo4cuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary Translucent/Background Secondary Translucent pressed\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.980Z\",\"updated_at\":\"2022-03-11T16:02:17.873Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}r\"},{\"key\":\"7f432d441c55640ef9e1c41839ce91e23873cb88\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"30:1309\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/MV8/hyG/rvpZV4p3hNoRYYqK/style_thumbnail_56.png?Expires=1649635200&Signature=VMdhtr8gNeec5lLyw5fKBiLMNqphEfYXYGC1a4GA~uJzs1EK7qvEidIBMWo1ccXauTMnLip~KbA5be6iHWqpq6nZONEONMPMgM~WT9ZY-CT8Knw7fMH3erxQSQ-PEGEh06BfvgMAcS-mXBv~yLubdyeE0pdXjjOjgN7K~XMmrCUQvxBYlFukBwNfTTTulY6mpWkwiqLJGqi7qhKX4UREBkrnIl10nZCSBHWlCF2WOypv1Krd6ErGlcKI01QtCQBgW4sYpQYmDUMVHY9NBoRDGq7HNf4q12icNBo1SRwTBpyMEzRPUADWYHlWKGhtZOFEPw7qtkzVfqy1LNeAFfoUPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary/Background Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.581Z\",\"updated_at\":\"2022-03-11T16:02:17.867Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}O\"},{\"key\":\"7e80dfe37e09a55a45f2dde366d298906b18f124\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1422\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QLa/R9M/Hhec22QISYiOJjg9/style_thumbnail_6.png?Expires=1649635200&Signature=ANvwwxemjAr7JmMrEO6br2SIUm2M6Ac7-19GccilxXQXegJ7DDMTHiSCvlE~rm-GhaYvJEiW3KDEYcMZVjnhZkQ9WjxZbaKYrDvEdI8wGC098oSwL25tQS6BasSEu6G4yvtLef0ucnp9MU6EpcWrzpmQhPy9lagBm5WCxWA7Ec7BaxhV69DJG-mXMn95g7tBK7C83s3mii-Jt-9I32-SJAfVj6PcDCDmymDSsuxLFyBDf2Q-imdWK3LY0TYh56iO15cKbNunC3ZT3q9orjmGNg9kgzW8n9ZTAwqWgbLSZbyL9~AaA3c7BWEklo5GAzw4UH0431NDg-HdPi2Hk9Bpog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Destructive/Background Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.214Z\",\"updated_at\":\"2022-03-11T16:02:17.862Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}}f\"},{\"key\":\"7c5ad1e5c3ac214a39934a57f08da1074ee3a862\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2381\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1be/eMt/WPZOi4EJLv9BAijQ/style_thumbnail_84.png?Expires=1649635200&Signature=V~QuEqN2Pqs8dRxsbbsNlO1144UBAK3mt69~TGcDenHUCTpVzn9uBd0we8DoiGOeSvo1TeBXDmKmdrNmTpCjn41tlRPRbqM8Y2saip8yxlaIXbKYW37ueSwTIA807rL9Hh1wES2aW~Y7de3HpLUdxAlcMpAQ8X8GEZNfRr-YteysloyT33M279x6VRzkU1E5InHsDUmRJfWr8mJv-lL-nwI9etcfPQhHigwtujBxDVkSVqLE7wbWnIg68PSxcxL14QKxQMhJbm4J0G53BmENOCF3C-3viAvMpR3nCnbwP1cW6cPxusCu3GM0RQwSBqy8pyAZBe2BUMQc5dpy866lKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary\",\"description\":\"Secondary text and icon color\",\"created_at\":\"2022-02-17T15:35:46.532Z\",\"updated_at\":\"2022-03-11T16:02:17.857Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"/\"},{\"key\":\"79238c0ab078d0325eb81adafd38d030042f008e\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1558\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/RdY/WNV/Add5h9Olac0VhjVJ/style_thumbnail_2.png?Expires=1649635200&Signature=cqhuGttZC5JhoLgt-AJzqEBy5DLoZLnSyo5eYu3njBtCGOxmx9U2cXN5xaiz4g7-nMlTR88POrWnyb~avHqi4-b7x~YOZ2CEU-8B~3NsetmGyhv-RfhMTmtWARBQigjnmIT3a82pkczgNWQrnei3vN0PnaJMQsr~jtph3HO0EsB4V11GQDgKllVoJ~S-xHQtbaT9aNH8Qk7S1Ia1mlZLIDjhmOGNVbyEcCT1W3uZCa1gCFTDDHk33Ewrvm1CFFYuYEXihLL7O9D7jK7kUIbmd5gpZL5XBSR4fftkQDdSLYufbtKkjEO~1l9s6SXQBVigNILsXzyLSt6cRXhXZ9yV8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary Translucent/Background Tertiary Translucent Pressed\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.936Z\",\"updated_at\":\"2022-03-11T16:02:17.852Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}I\"},{\"key\":\"77bee09f170937fcb9bd07fd0042cafc9493b2a5\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1485\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/y4C/9fa/pc5ulsAawsKw0pJX/style_thumbnail_78.png?Expires=1649635200&Signature=YMIY66x1u-ofviBTj2VBAG3MF27dFU9tE1EGJgkNhDBOUU4sxASHmY7N-~gum3TUts~xOVc7fl2REH1jZv1-kHAMpErJG29hSgwAexDLtWf57~KF39E77vizfpzP3HHy9GTwRnO0DUVf1SZK81B9ATIF0ymFoGizEWBdlFjhFeNjR-4JU-pv934z6PNsYTeoa-sAjL4VCnsB4hyQWjC6NioULoHJi5-94Dli7s0-BuK2BxbUz30X2VHHTPd5a4aySxBuw7sTu-GkYC8ZV5begke3A-1Zyc0nVhgm-bdBQ1VMNo8CSm9UvIC1QdHJHrnbclNFVwPlJ0QfN55xJdHbyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.502Z\",\"updated_at\":\"2022-03-11T16:02:17.847Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"U\"},{\"key\":\"76d2c272e5fd4068a8b8ccb57f42e032bd5fbc1a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1459\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J04/coC/gZLfJ87cDC1V8Nee/style_thumbnail_2.png?Expires=1649635200&Signature=Gjr599~2Ma901No71lNIuazBDZSCMJa0VasNZ8KuJpBciJQ9X6bzdTIKx~yG4sxp-rw2t4EGsnBpTZJg4sEoT3QRfL-0mtHEtNEjbsUc8Mmg74-IRzDA4TKINas3f5~UIoRfVS2RZoPUJcYqUxYwKW19Et7hGqcXFlUpH3QNUfapaF5YdHxliJB6v2-meXGoS~D5eoiI97Uit5XO4qfG3ERbtGl~LkFK9hzLGHhjZKvVR~BLOhMp7f6-dppA0hVWKs~jAYF4uSjoSs5ZmefMJ8-k9OMcoM5-DIh80HcUQ-0gBI9TMZL1Rnk7BwE0u5qYXSKZdHKyr8eUZZOYweJGBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Border Primary Translucent Enabled\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.912Z\",\"updated_at\":\"2022-03-11T16:02:17.842Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}x\"},{\"key\":\"7044cf072b617b7fb13094bee8676db3f6ad8624\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:753\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CQu/DE7/vOIRYhlY5gyrOT91/style_thumbnail_82.png?Expires=1649635200&Signature=J1Jo9KNQI94G64ujIlJCXjfH9hYgWlSXaH2REmBW-pxxzDotrJcNu9CaJMPzPKx0-VrRAiJJB0oYzonVKD-dUhlHoj9FYoh20iufq1juOGGsDs~f7Pku3fA-eh8zbtMrgEkorq1Vo-T5x9qFgBD5zgfAZy7Wq20csKPAnwt8mEw0fJdg3U~BGVFVcMLu-OtCLHcK4sPw0DuKZxP7HDv3kOLrRtGs1um9ALnqWTHsumuc0Zo5MhabeJhPZpfTbteowEmeaH7x3cN-5FkRDrvFTjH3BhMQpVHoveP1Nj8glNrgHY076EWNWpecPXSrwu7PjnxwSatJbUtMrW9Y9XBmSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.523Z\",\"updated_at\":\"2022-03-11T16:02:17.836Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"=\"},{\"key\":\"6e37a15b5198031d99546be0d646c9ae8c7b9e00\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"36:1415\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/9Iv/kRt/xZYmaIgthj2HdQFc/style_thumbnail_53.png?Expires=1649635200&Signature=Jpu6zvpQCIaXzKkVJoq1gFXSPBUW98lu~MubFJ56JTv5Gq~zcAa0sP2J7mpFypJNaT7QIkogoOO2F20iYC2vpEeAe3jBFO-X85Y9GYoaCwrphj0pMevPfrcTG~ZrozfotLtjVRtXaqm3dRgG0bCE5UZPDd9rnJQ8U7UcYcV6JQMJxn9FOyNctMXd-dYcxY9IJguXdh5up3gsx8SEcinDJdjfkXW9vsiMvZ2e3IEwu2ZFXQs2hZI5ZpYo5SaWS8Va4GcDa8PzIM8ffTLXERnsh6-nFKpZfLSad3PYxeaSo1LnDBoMcQ2QxCs6tVtjxpDIl4gDS3PQ009mbaRYUttT4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Plain/Background Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.233Z\",\"updated_at\":\"2022-03-11T16:02:17.832Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}f\"},{\"key\":\"6d89ff003733834de9c17cc3a8efc3e3e4af81ae\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1845\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/U1o/rjc/1vTkPVX7LVOIlGg6/style_thumbnail_10.png?Expires=1649635200&Signature=LXQUD~E-zDctX3pI7iXlQ1mXzq19aQGXUP0jBQL4XMOTTalFAQMiW4Yij9Zdnqz0J9Xza3CtUJUWAb0YzNuwN7HNrmm7yLIJOG5CbXyeN1fv7F2ElfSMPhnzJ3s7eVBA4q0N-rFb7rp1PaTk9TYPFUxrmweQo7vrMpfq4I0Ko4FgAzPHo~qbr2Md0xfostFc7tY~LGUGofZM5ehaPtae9mW5XXkdaN6UnzSEFbS9sEWf7XCTHdmtj6UJW3wCJSnV5Y-iiCthuYvCz5XtoO7ATVEdeKozNAd0AtHokKy1qpeujnGUM-Ouv71u3Af0mJdr~aCL7zutbJ2MgS8yso4Rbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Query/Function\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.171Z\",\"updated_at\":\"2022-03-11T16:02:17.827Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~1\"},{\"key\":\"6d2321d7570c9643e048ff3750cd4010dcfbae2a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2383\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vvq/0OT/e40EExLMzUa3qr7l/style_thumbnail_80.png?Expires=1649635200&Signature=T267OMZxc~dYZ5QeDWfMZyAugAjJuiUv1sW7FYSrAltGAoR8YIA1xF8d5XgHNAzee23dUQ~cJ6h0oz5iXdTcjt8ul2r9tN5AZEx4UXgqUseaLC9UGNRirw0DxwClCj3YLDEQBbbJSFGf4RBuWI95qvfyy9SpMUqEb7VS0AeACUd3y-X0gMDQDpDGs2vPFAvFEp2EqFJqluxSr8cSNOzTJ~vckwug63acgoDb~s96GgK41x63SZ8eES0lW0C73JYLnnHx34mG0rvbou6U-ipgpxxc-IzO~zYtLRpbQq5oh-li7NC0xR3lluWIBg76Q7E~bhPTy-E8ixZT29QvIWOJDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Muted\",\"description\":\"Muted text and icon color\",\"created_at\":\"2022-02-17T15:35:46.512Z\",\"updated_at\":\"2022-03-11T16:02:17.821Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"1\"},{\"key\":\"6c9e5ba9b15956cd3f3364caa5bd646071511bcf\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1557\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BiC/4Qb/KUGaZZPZ2ln9PB09/style_thumbnail_5.png?Expires=1649635200&Signature=QpVuy3oEk2WhKeDPttoLlMHPtLgG7uV9udVxbHFrzWW-X07oQ0v6KB66TaYLrLl29Ys-yUODse2XS-60axIUBzMw94aufQ2P5yvwqrzjBVn-dbb0drNjezo0DMs9Irv3aJD~TGBDd1Zv~R7qzlFaFEtlsV6nGSPsiAviuKyLIfyV0HqN~WcqvoMYWf0mm2y7SALt5~7jY99bNUVNoA-y6~6tTxoKsjdpEmxXj2cSJnnqx-Cw4sJ6hSqsokVsNCeGXqhpPJg1QViT84Tt8CKDzWondY9SAfm-DXY23ecTQ33McrTncJvjQFbGy9Bbk8zVk88c4oxKHu5jg-g8FTwwbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary Translucent/Background Tertiary Translucent Hover\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.962Z\",\"updated_at\":\"2022-03-11T16:02:17.810Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}C\"},{\"key\":\"63f1ca4e02fd507544f3adf3e685047b5ebf9610\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1409\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/GAW/V1a/RWQoH4QpvRbKSPpI/style_thumbnail_7.png?Expires=1649635200&Signature=e4f13uE7Cl2PQk6mGCJRt49xCm56cZBZRLV3wEA-tGhAIOYZhRWGjxUxwxMNQDpBHUPgvmQOOjU93vCDlWJG9Lq9NjLxViSkPUiWV23j8glOI2YBdDAYAkI4CiTFU7i-Uax0-6aJY3sjyEMsuWhC7diD2W1oEhnFBL7OLnEvk6288MeucdVo4BJpAdPjsnQJNt1hYmNKUIU6E1IF2-HN74Ow8hzJQU0wrhTd5k~s5mjdiEqqCt4xdGv0oXqvtBzljNaQHq8SBoJ88PDlDPTYPvuNCiVn0hQq-GCqqATwqM4ERxTc0LgsOjVpeWOH1wr0UIFnXjFI6YM~2ivGsJifGQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary/Background Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.329Z\",\"updated_at\":\"2022-03-11T16:02:17.797Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}O\"},{\"key\":\"633b88aca617748f74d57a8ea3f9269c17ee2518\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1322\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/V9k/iGd/7AYaMzVpJX7TI0Nt/style_thumbnail_3.png?Expires=1649635200&Signature=SZ--daQYaxxV252hS2-WipbVS0wWoznmR2Wi8m183-rlNYWxQtp-RmLTRE3SYBXQC1jwixVcJIM3DE6lRV5pv6J2wP4PVP8lemEF5hl3X3omrI9cyfp9aTEbNExfawy1zW4fpsne9xhvDRFLhx0Wfk0S~wF8T6QcLZGFqqBj3qsMs5-lJwTLOWmaLcN8ldKg1SpRP8QflrXyPPwMcTFQG7fr7QIhT4mvp~r5OZY6empxM0HaN9tB2JYcNLHI6Up0F3NkZjKkr3HGoZQSv1WrLmPrr0LKYS8M0YsDKgsP5h5L1qMzK8ffeZWovCzE1cjX6uRhB12WkQmTSVFKZ6lGKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary/Border Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.537Z\",\"updated_at\":\"2022-03-11T16:02:17.792Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}{\"},{\"key\":\"61188726761c1f617b0f8ef5ccfa94fff741aa58\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"20:526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wL4/jwN/FBcqeeHih31g9aiZ/style_thumbnail_81.png?Expires=1649635200&Signature=Z4RhJrUbsACMA2P1qvLa3Xvy50mpyIlEv2s14IqnMr48G9QGGKX2qpII0xb~e~LVW8h2AnDiIHq2NrvhY5FbxELyaozj~AsZdJzWNRqYP~wZBWjXOQ-W3QHJsvV8b8YQpWYAsJvvn5UCiWp3gXyp-rDPPHod2l0HqrcRkN08qqocud-pfhXTVhhO0btf9gYcEdkWTyt-R3L4wlNPBjfz-cHJOQT50L-9vgybFYZbqGU7MNfkRFNJ0XnGu8Encyf3GuTdPQIqHlYwLs2LHhCexWFLcGXpiJHMHlMuB7F8npfwoWWFKyGvExVVlmHaCJoVrroShQsMaBGdjmIsqcoQIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.518Z\",\"updated_at\":\"2022-03-11T16:02:17.787Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"A\"},{\"key\":\"58b2de9b4cf0d80ce2a4baba64f395a6a8f235ef\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ElO/x6O/kSURHS3WzZnQsIoW/style_thumbnail_3.png?Expires=1649635200&Signature=Nc2PEsM-0UoMxqCXPAe3cWwP6LOSwqBTZ3slMxfS3C1Z03UkD9IrS1KVuEWuqTm2DBE5cYmwtoAgkf~RQLkECRsawI~v98~G2yldwG~Cjpxkd~mxE-Muc8NTe3gw5uWAOY25LFGbEh8cy-hdq740EW9kn2rDGfQu~-AfyRiNspkJjdykOdBZUneAPinct7k6OjVzSdeNnlEmUHZG9wSJwuGsg26soeWaEW75VXHLRr63Kx7VRRQT7Xm~oMhGxVrIxknGF0t80hqCi8-6U1jSFTWHR02dFmvnELuT8QvelkkaE7o1RrN35mF53PxBfz9Y8zMkOEKQUgPjdFpA3oozUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary/Border Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.257Z\",\"updated_at\":\"2022-03-11T16:02:17.773Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}{\"},{\"key\":\"5578fd8e9b0d1a70a4f1c5b17c10370f03080219\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:751\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/8A2/oTV/Mm5kGdyaiSmwHN29/style_thumbnail_15.png?Expires=1649635200&Signature=P8ZpZMXCTgzzStUfhoqjmbJERHmRPQ4pGBPcqJhAt8Hgk8Bc358EK6fu5vDQy~bGQwy2Tl2qNoQ5jOH2uoVf9Rvxiz54Gueow0o2y48Y1VjEf6spyqzei5VUlAwTEuP2dm80ZVTe3USC84qrL8TcpSUKcu5pqSQPnFd9raxcxyhs~nNeiHhI9wSnDQdyrvB4DmuRRvkJYAts3uUgdRoCox8wQt8TE3anNDF9MlaWG57JnliQapl0yBTNkj1s61oMGIq5w4yoWIg8TKaxIVnXshGLQbjg5qiRVkuPzG~VxJIP7Ab1aFP~X1p33A2uOa~iuq8V58BvoNQkOrjXo~5N2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Primary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.195Z\",\"updated_at\":\"2022-03-11T16:02:17.769Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\";\"},{\"key\":\"55671893da5573842723792aa4a85a782ff2a4b6\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2369\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/urd/aFZ/JVX9b2KxDu6tUVtw/style_thumbnail_69.png?Expires=1649635200&Signature=L51o~ktnURBDMiT5c2yPMr2M~HaHGUFrvo9ACBVlYoHhMQyCuW7ofA5tMoOML1MaBqB~QMs4n-1hWVRnP4fJjUvPRZFitsi-PWIdxpiJYzvhSYdNAibqk4YMhA-H8xRe-MG--EvgkN51K3KRb8b6UXKFN5ELfgZSxZv~53djmZgEjeJAdN2nj9Yd5JSLUPflje0Xx1DLBFDycMPzvh7MWtUICrprFBIrWITi6BrPtJ9oEt~eksIWuj8Zf~GUfHRaAonc6Gb~rd~E5XgeEcTq5P4x81c42AeZvngV6jm9nIxDxkMxdkY96cSMNl5QBO8cuPtCgW-u6v52NpjFjLcRkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background App\",\"description\":\"Application body background\",\"created_at\":\"2022-02-17T15:35:46.458Z\",\"updated_at\":\"2022-03-11T16:02:17.764Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"\\\"\"},{\"key\":\"53e82392f306e2264a1d94a81aa77d02b4d4a98a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1483\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WoN/XpM/yQhtSX1interu3Xe/style_thumbnail_68.png?Expires=1649635200&Signature=IfEBubJc7fgBV1Gyo5Sr9B0~cyT-pLFRElM9nlkd1MQAiTK5h-Mi4afhFudZHLkJONHrhY9EnacYyY4~XSTrXmNjUW2IAzVkoIUs2sTGy3yjQA~Q7aAxgB9aL37oU~RiJvGvLEneZH4uDRO1UmMlDg7waOHZZVu0UdWpN1T6Y02R3uth4bbn68C5RO175uE7I~xP5TZXEz-1JlbfPjwTftMT6OU2uIhcpsulfkzJCxXS~pssOEwKN8izilOG-zugsIRkbggGqkVxZcstLXL4WCpvZKvtadVKhSEyOC4BwToCLFmhRHT7zgIej2WVQ2xsXFiZkFQKjMAqbvA4bGhzZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.453Z\",\"updated_at\":\"2022-03-11T16:02:17.759Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"S\"},{\"key\":\"525494fe61a9d4c12c9429357fdf7a9dffce04c8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1426\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Edn/6ya/pv0Ii61BrX4FMbiz/style_thumbnail_19.png?Expires=1649635200&Signature=Bpzxhcqq8srC1j2g4ATo4OZy2PAJ6Ix8C-tIkTmRqSFFolL0oXZ~QUQlaEbP57FrHYLxcqrb2BxcMQetSTmZUOebgVfuhF9ovv7iQXRDgDs~cb~6l5ZqzqasMQx48UIIczEkJAehOViOVHVHRaZNe4qehO9D11R5w8pKwGGKKG6ZkfLbm5zUnqrQMs4q2czd~yGdqGj16mDsGSw6fqPHFIUKHZSS8XhGMY-eNcLrDPvKpXJ2G9zzMfm5IJOvtjXmSBEY0-24w9h-NrBpGenKGQjn6DL~YhpjM3U1kU44myXrmETITFJ9jmRapGJ8Gr1fcXflwOC-8e1GY7eegWmxcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Destructive/Border Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.181Z\",\"updated_at\":\"2022-03-11T16:02:17.753Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}}x\"},{\"key\":\"51575ae710fa16950cf68a55f9d205cc565df79d\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1516\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wnQ/N69/NVCtOAXV2tsoSflo/style_thumbnail_76.png?Expires=1649635200&Signature=Jvd8MlBSAWCHhh9VENSDb~5rI0kBl1ivsBpQ1tN1vj4~OQ3h1-rrWwHcrj-n9gPGkGD-MlOu4-Oagfz6d-7tdcJmwp~wnmXJCLkgARi1vg5frCy01QoeZzvPrvueF8QGve1Rf~anqCLW7SjdkEUlJlHj8I3a6ZcrkEtA9hvTTtGRzUNJ4YBVfBMVatEvYlUbmbWW8roAZUIAfh7RiW8wWOU7KfRVpfSJEjGU9MZgics-15KVf~tlpSysiJbzCMRTmPnUKoqd7STNvTIv2TX-4APPixVCfrht80MaHIUJcbfpyr7OFO-0RQYxnZwxw7894BF1bkYi2dCeD2AeQ~TfBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Anomaly\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.492Z\",\"updated_at\":\"2022-03-11T16:02:17.747Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"Z\"},{\"key\":\"4c78003980a9e350339a4149994e82ebe58f0811\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1303\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fnn/4dt/qfqYN2KUgIB3hf2r/style_thumbnail_38.png?Expires=1649635200&Signature=CrPaD1IV1-g-GYtbTAWL7nswvIiaYfEleeIMZXPWaXRmt2Mg08QikJP0wZia1vAc6rPl7mrgrQRA1aTrVk6Pk1FUSWWt5Whl0tgIf9H~GGN4dKKSRa1d6Ar5drF0YG6O8gto~mjD38gNi8O1ergjnaEzsVALs1FHmTHmycpWOuTwtFqYVAbTSWBd-4f8haM3rGS48zoWBDmrBp0Nln3CinX~OzCQCxC8Ey0xcMyx62MuD6et1dvGq648OghSAS5UpaO49Z1mtvVvGxxpCOksgQ3a9vapehyScPqL51zRTTYVFt0Qfq5T0x9AMfj7hMD43r8ipBlJlsHTVpvEKWND~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Accent/Background Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.285Z\",\"updated_at\":\"2022-03-11T16:02:17.742Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@f\"},{\"key\":\"4c0e1c073e8d24b8a812c73a848bf1891b86cc22\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1307\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6hz/Mvs/oyLcIU5WHvpewHn6/style_thumbnail_45.png?Expires=1649635200&Signature=AuRQCZNbE-KAX4a-KhOzHbVv2EyVN3QMgCShliODfuRs0VNZN~j3aXax7V6EmakQz46O5ZKdYVV562mYf1RPI07wV15KjB2CEBgwBOSCZiH96Bu6zV7ATAlgxOUqTyE5Qe04cThrFWo8vbJW3lf13LOQ1fpqOEDNbqw6FmWIwVCSLi~Tx6iB8XgOvxCc9~oYxpwXl70SOo7vWrDgYqF87lAndGFw3miZjszmsqo2EAK-muP1kr2PVjMSL5CWCtuDM9y1IiYSJgBJgASacS0mvqF-BvJUgruPJ0-69Y0wVSFa2VY-l~dDyVr2aqeCa06Au9kvXbzmTqszqnkabRcokw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Accent/Border Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.319Z\",\"updated_at\":\"2022-03-11T16:02:17.738Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@|\"},{\"key\":\"4b4e6494cc96f9c91a7e8f858d8e75274f16cbee\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:759\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jpz/VyR/GX4LxDkWKno2965B/style_thumbnail_105.png?Expires=1649635200&Signature=UGIl0ldOp8dN~RBaoMVCiH-BIu2ZU1838HbWXbbU-LeMMnD3zvF7mdv~vHfn~lgPeh6PJcqEKi54bkA-PXezhyUaQtt8B3Vr1ss2sKCPtftI933I~xkr58B1QqmGoBPKi9RN8~lnxpPAPZrGwT3Rf049Y2nSyPyxd645pvT6Ef7SVAh0X5VvzYJnEtR~3NJo9Ji2N1MV-2TUZE7Nx2Nj3oiZddz76JfVm13ddLEDerI5xbc8guL9IfsRU3UFkCiIQM~UTuE8un37zKwf6I8yPbvVwQTsJPjPz9BOSzF-f0DeVTlfgfEra9U3jYQwDD1E16JzNrHMi2fJkcEzjzPeSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Link\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.637Z\",\"updated_at\":\"2022-03-11T16:02:17.733Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\">\"},{\"key\":\"48a0133375061da6643f59278c4cdbc1ae6ebf4b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1313\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/llf/ncK/r7VMG9PxqGqzL4gZ/style_thumbnail_44.png?Expires=1649635200&Signature=TBMpNWcHycbUEmsm3cXVXENuw2Vie65gpZsxlL~-YZAvl-g0RzFBfBUqoj1Tb5~C-aakIQTu4CVZOb4K78JmCOd4WEk2kAzRH3eUzBMEaqF2a8T3ohzkk-ikO~ctiIslywjtGL~9Vv04kn-Efu8GL7N0Etm5I2kEJlF-LYB9sDIaGqdbz3vrW2EwwYl4MgnSnpYtqBZdO8OpqyKyQ9h7HwmEJ3wG5JoplvC-WcY6QQg~hd~cZu~rZyEdW~HURaqXOPsE2aNBU61SdIMVq78uYdAT-zZGUtUc3svSOvz~9HVqsI~iohvy-LtIR88BvOvIGmBwI6ADYSB73Le8~8mzRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary/Border Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.165Z\",\"updated_at\":\"2022-03-11T16:02:17.725Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}{\"},{\"key\":\"45b2967a72314fd950111b1dd1937a44a1baa5be\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/whX/iDS/LgRIUbBdENpppsUu/style_thumbnail_0.png?Expires=1649635200&Signature=JFj5wBQqzM7nSFHyhPbF33aoZBq78uHNrxapoV6HsjgLr5lOxrvs32Ix9NJjQvUlxCIRoBZ0YQz3ojnvd33lwBb09CMAL8EUTGK7yc1TWw1UkasIvZXMUSSUeaQRHFc87cRnrrpkGIuOMezi27ednb4UDhEgn128nxzbS7lB6Yjx4VPWiy9JyT4yPC8Z1z9q-iorVSsoYZ1jMYIyZovhEd79cCdVNHRnUifBF3SoDaukOcgdP~vC6KGVfQsyf9DyiswCNpPwHnQzGdEoH-nOYm~HEWobzPjGK9sgT7p0ii~P2kUGQHKXFpHBxTLUfPQLhrO3LPqjol1dgQvvD5~k4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Plain/Text On Plain\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.642Z\",\"updated_at\":\"2022-03-11T16:02:17.716Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}}\"},{\"key\":\"459171bbf39995b0e05ce46c4c94fc0232ff0929\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1412\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2hR/trE/kJearQ0ZsBeHPO30/style_thumbnail_0.png?Expires=1649635200&Signature=R9z9~Sg4caW2X4nQrSoMKGksKtMbkMAwryr5qqFntmmNb7HoNoDylyZXrgRkTaczrocFAJ1SaMIweBPQ9pFkn7CVwUjcZSX~zKAF7uBu07KI7oP3nXGfDNGymBB5cVHuIPlgAE67b1bMwUzdnkA~E1dFpNDZX2dGETdc71J6d1boFLT7s0Gf8IDXWSMNbRBRibeoHvo1QOwVw5QsWKHfY8f98ibamEukwb0~GtXY8X5hUlYezXkTN~RIIkgipKyc69GQMAvfQ4J~CIE9gaT7ZP9elcrIeiuOXpRtPm8x4-zQapyq444ICLhJym4AvgYvdsKOP6-UwGcW8lg7brWEYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary/Border Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.209Z\",\"updated_at\":\"2022-03-11T16:02:17.711Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}x\"},{\"key\":\"4502e98ef17c40d674fe6bbf80890247176a4381\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1517\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Iec/r43/NWnxsUf16exXS7e5/style_thumbnail_88.png?Expires=1649635200&Signature=O02p8uBfZUecCXteZ9XdnHWPKtrsdT8B0SSvAh4K7K3R9zKJOlPvFT1i6-V--ZBQ3OkbbzgoIpDN07UJWvUms-JgeMV270m5SMdqAfBZp~pnm8LqjsNvXFrwNJATQpC-EUwhkQFe0zAJ7OjctSVY2HxlnrV327j8lLPFXimqEPslS8y8mJlchV1st3s4BTfkV4ztoWfnQ0Z-ExZY29YDzt-q1tGml-OyMf-slVI98Tj7qocRKJo08O5ZHmx1T9cpeKehSzdXyNpx-qHpLyla5Y82YXlwT2H7Yb1KMHkRnPYCQ5VvwoFhTt7wJRpErZno2IczeSUNTv-rqabBZ8AsuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unavailable\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.551Z\",\"updated_at\":\"2022-03-11T16:02:17.706Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"[\"},{\"key\":\"44fb12c0049f59c20254040b430bb230f51aa387\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2378\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kOu/rsl/cMuDlV1ZegHUvXH9/style_thumbnail_9.png?Expires=1649635200&Signature=hBYfA4kzwijumeAK16YvhW4C967d3T0HtVSzWzL0ZmMslrWVIQXCVvC~S5iaIu6epxL-Y7pbK~XYXm3sc1okeCPnxfKmEK1hhIQn2WBVZkjzMdZVghf2WCRak~WW5SlB~z-HQsIruUCw15~xqYKA~nJG0CSkn5tU50QNzvSsw8UEbvzYBDVzg~rVLr0yqOU0Za3JUiEmWEDE1ANan3u7qD8fRfBeWVwWQL8gPkkhHRlD6i6qi8qmWKysjQGmXGdErj2rRgQ2rvDSYai3veRbbPGxGB3K5qz9m~jFMPeGASgsYv~UE8DhAwWKg8ptJg6tyI96DnRHlz~Rl5AsGZckDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Nav Extended\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.657Z\",\"updated_at\":\"2022-03-11T16:02:17.702Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"+\"},{\"key\":\"43709081913ea51d06f511c9d1c249643c6b1eec\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"105:1540\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WqK/Tvd/3G5pRgq6kyFctaqn/style_thumbnail_5.png?Expires=1649635200&Signature=LHmBVRYm0fAvw72onLPb4OvJ9xXCo9Gs-z-BRg4w9eroAiAycOr2~GPbDoFTxsf9QmNRwWL--vp5pl-iHd2MmDERx8BT54VxdVud1gmjL-DSnspWyCN930dULlC-izdrt~O6JDmdkvRFhjwwv~WO5~dr1RBHn4Txtk7cEGJTB5uqOfzAx4M64YjbMDpjUaMKrvcGJVoWtPrC~kaNIglCJmPMtTYEmQJ3vWxwrApGCSXJcW2xl4i~tkQDITo5JvaHE6sfzzQbG1XMPrEWT9tVE-pMU-Yf3D4cW6Yd0VXMfToJjdBEIpK4Wl4JYzjvPZnzugEDPQMQRtflLUT6Kt6Yug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected\",\"description\":\"\",\"created_at\":\"2022-03-03T13:10:15.709Z\",\"updated_at\":\"2022-03-11T16:02:17.697Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"EO\"},{\"key\":\"3e72b52bee16eceb6d79b474edcc2b6c76428be9\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2395\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/g3G/BpD/Zn35PsszEbLmxaGH/style_thumbnail_79.png?Expires=1649635200&Signature=AdIJdzm1lfbB2I02G9pIvXESN058Loay7oPVABUI5lL7su~xQuUF5z0Xntket~RUmkRJ6fVvOw49BTYdxHDrjK6FReqwFBemp5qxBItyVEY3UL7qkLeoBdNna5TS3IyqcL3jBVuQli~U0juR8rbzzIYTqlniwcV3LnrsFaz~1VXXhTNx4rkv9dtX6kttnEH5yL8QYTaj3cdez8PwdhV041eWk-dm37u58tq28VP5Dbr38b4x~EunlswmUU8nDa2~wFchHk9FYngZR8FHVoLibQgHLjrXK8p8W8izPnMpYjk7VdEfl-1VyT7KUz5S7tku-XWgXIIEUV-Hy3BsNafZ4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Hover\",\"description\":\"Text color for System items on hover state\",\"created_at\":\"2022-02-17T15:35:46.507Z\",\"updated_at\":\"2022-03-11T16:02:17.693Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"3\"},{\"key\":\"3dcd6f6f7c4614e82340a97866143b6d5239193e\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1462\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/l2W/FIW/1pJXiP8AyKlJtE6h/style_thumbnail_19.png?Expires=1649635200&Signature=an5sxa2Q9MQoJ8b0Z0FOaTGxamw1viACIj1jl3OS9dy47ClvVcdR3GW8uyQke6Ti9Qw9faCw3~H-BXkhKCmA58GSd6rsQofKlrfd-l7x2ixBbQg3UnkIzywedWpMllDUYJqiEIRo4CUWqwjGmsCZQ~mMrice8JmJ02icIggXzqdsGZYnV9ZP9zMpPRdhAhh-0XVzZXUI~eqSPADbC35UBaIlJyTApdD5IfrZ39T214vTTdtr9wslfembk0nsExCufwen4pN9yvki-NuG2A~Ju3Ww7p6HwUeThyQysXCP~7hjE2xhe063CcGpoecdYnFpyeS6wCtdd6BRbq-ckz0-zQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Text On Primary Translucent\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.998Z\",\"updated_at\":\"2022-03-11T16:02:17.688Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}\"},{\"key\":\"3d7d3eda58f74469135ec6f89bdda10fe22ca1bb\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Vf0/lqI/KHqEkC00leJ3FVw7/style_thumbnail_46.png?Expires=1649635200&Signature=bP2tNMxKXgZhIY239Kfff3T8MLPcq0Q6Z56vb~EibR08RLPc23Af9DvykLEKYuyG4TOehCxesQPdC26I0WrXVKldnDtBfgpwgw059e7UDWCM0z7px4OjGd28pfcs0Wop54XxQpTspWyxtqilW~XFLgcVQw52HM9eX2rGAT0zFM0jDxPGWXU0cxdO4YG~iC3W5EPJxW4PAfVYvQooWX1B8RAze~4aKmTCBqmXMEOzlhpgaAptJKTOYUyrg-waHpibgmU~DZn6vpa5qe55mx~DbWqGEpa5tUt4xvsxN-6t~8GdwJrgTRxJyFjQVtunRJd1P4j9tAUl5oLsSYyQ1g3BAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification Inverted\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.344Z\",\"updated_at\":\"2022-03-11T16:02:17.683Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"d\"},{\"key\":\"3d3c2694d76f541b04926add38f2c210951e0ff2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"87:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bvb/Jxh/ektY8fqmUzUynSWY/style_thumbnail_0.png?Expires=1649635200&Signature=AibqGgDE7PPcLH-MRvvyCU57Xt1QPvfm0h7FCNk96tT3zAP0JdpTMdHCrcmfpTakG0qoM9wZ3coBy4vzVnwVm8jzUOFrsCBul2eMtM1IzqnyQV3Xu1gXU0ktwH9wCeeh1zTyHIcwAtSd-qnRE3dWb0SQmqxToLBuf1aj9y9ablczD4LzGW4uEWUK0n~0xzagAdLHB6xqfSrZV9rEig9qGHPo9~ErwYOSrToLzD6MjFfZRNJQxJ-~Sdyb5GiEIF2q~MciNxdDAG4mn4J365oDjB4GJPy039F1NKlIrdOA-ZPO1u5nQbTWYd2Cw4tVT4XF87Xq7ZNxM0LubPz3Z4Audw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Error\",\"description\":\"\",\"created_at\":\"2022-03-02T14:32:53.645Z\",\"updated_at\":\"2022-03-11T16:02:17.679Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~9\"},{\"key\":\"3cb275c0202af047dad2652d0ed6789d06b62e94\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"105:1541\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iUX/iGW/xw9EO1vv0k08SaoB/style_thumbnail_0.png?Expires=1649635200&Signature=ca~PzFBx0p8wCQERu9Z9q3YCALHZxpCQ-hVN81JT-lLxs9hqIVRv78ObEU~Koudsj2dFqGPIAGu4N0-V7XguJat5PJcXgKdg5Gu62i7ebkpC7jp1cwA1cBX73~EIz8yaJAC-OZVf9Z5IUH3kIELz-GN-XnYdpjgScJ6oLyGXudKv8tftBA-vcwqqG2ICF7Qp~CgB4IkLKF8DceCHljpr6M1TWBhd2Xp4NdY66YFNBjdQrMwaEQfEDbsqA4qg5iYo5Zp6WlKJK-IDLk~xC2HU5IirOFYQ6xZE97JnlJ~7bQbKsf0T7UNaRf9ZHdzcu~bvF1U2TtsbvlJjX0~mXkz-kA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-03T13:10:15.697Z\",\"updated_at\":\"2022-03-11T16:02:17.674Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"Ef\"},{\"key\":\"3b66f8bff33b6352ee0be91b265c59c82516e2ad\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2397\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/GLY/ThF/yW9UswxqrHJ0GtsO/style_thumbnail_102.png?Expires=1649635200&Signature=Bv~noomkdm6EG6zUY3FAk2IG9sA5DCgHDRscYDt9VnGKcJujIpUw3mk324Ej444sRpr46P2uER8XcrvUNGh0veyCef5mi6OBdariuyx-XdeHchmSMc51GV4Rxi7p6exNkg4AyYyMVxI-JUW8swE8mKhZxWAz-39fLzggsAzodG33Ug~ajc~SCcyT~QQEpqR42o4hGUi3OV~2LwooM8yBvv8Lj3LTaKkwJjLVmN9p-9BFqDjNJXNwyiZuBL-XPWoveoN1SdAdVaPWoU2Lkxyn6ZXLanAw6rngI8bFBz7YSQZXr24TDQUxKi2J0oCPERW3Af074Fye2delsn-lTFJ~ZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected High Contrast\",\"description\":\"Text color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-17T15:35:46.622Z\",\"updated_at\":\"2022-03-11T16:02:17.670Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"5\"},{\"key\":\"351ba76ffc5f9d3d0acb11c2707495e567f2fa28\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1456\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2Ns/ZRC/Hz09EdRURk6cbdn3/style_thumbnail_18.png?Expires=1649635200&Signature=aXx2~PgP-66EzbJllimBvo1CZHlPJk9P4mqF3P9-3sLNg9rj~AgANqs8fk7~VX-LSaurlzNfaRFoLBt7EEopTg7fOxeCzCyBwNLGqAR92C8Pe5~YIGISBJM9xywF56h7CADoBHqVBalOCj0cQDMHSGdAMOp6BFyyHdTl9UUXGiJ76qFeO~kJi4GCXiPGkGDZ33t-8Rz57reJf11-9cfzcQNLGS7oV9PmZzqyxMoZp-AsojFTIurJyjLIyx8dq4KgGE9iWAcM9B3NBiik6HXv3zK-quSW9oHIWhGvl4qJiBGYw6UAlsIyuC~UCbBK3r4PFYO-yTYBFuUJlTyWjCl3Cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Background Primary Translucent Enabled\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.958Z\",\"updated_at\":\"2022-03-11T16:02:17.665Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}O\"},{\"key\":\"32705dd80fa63b0a88ac15891eb5aed1c3b777f2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1417\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Uou/E0g/N2GZGiOKLCnESgBs/style_thumbnail_12.png?Expires=1649635200&Signature=IvlFOZoW6ApQK2ii7Ifh-hJsS-FPeka8qk5r-IHDJjVG4wnxkJWOPnDWsTS89rfEOYmLVD~Ox9vaJHRCLWzS7P2GobEMBs-wj22cNKZG8JI3vkQIdNFBRx~jCz-JCjpa5LSpH5SUajTtimkCtsLa45Vdqo~a-qTlqVePdbVvnZl1K4H6e~eqjGKTO0GJxIYqohve14mvvtgAkfHtu8aDN2SwcsqcuH8SNQpCGKUVAeI7xuNXznQF-jwnTJZyob-dwBJrd~rPOxOBDxFxQnnHEQlvflFC2HY6hnlGZ0mbqP8YcQAu5qF~WPhCv4avPwfR8LhRzNVRYmGNY4yw21~wKA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Plain/Border Plain Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.200Z\",\"updated_at\":\"2022-03-11T16:02:17.659Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}x\"},{\"key\":\"31b36a20950c9aee9789c3c85f78a17d075d1e7c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uqs/ThY/NbhAOsMoL0a2Wxhx/style_thumbnail_8.png?Expires=1649635200&Signature=aDxrgq1Z3OkduuYOKiAB9~~RvfK39HyZuOuq-yH-pyw-C6p1JGcQCL2wr5~IlYtuSHAHsxlLvJQpWkcWqkf~nUUjn0hI-H2IYVVI0RBTdt-bQjwA3FbB~Yn9I1lwu1YKerGU31XjE63LgFyQmH2zZzj1mM6kdguPZQXOREJvlmDKnlZDETGWKL4WhPh6GmEINC1LWNsP4LVqcCDHpNRR-sGVZX2ifnTJZ97qBIYWSccB3ndXSZedvjitEFGaBPpYkBY5~j0IFwXQ3wF84vnyJB5W83SKt9k9h33V1x40C96xHlB804rE6K6Omi8APPWPsrGLvUXgCjeD1WVMWq0sBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Destructive/Border Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.305Z\",\"updated_at\":\"2022-03-11T16:02:17.655Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}}{\"},{\"key\":\"2ed8b72b52cd8884b939b66bb366df199d903af1\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"120:1601\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oYZ/r0l/TqDcvOnTAQ5nuIo4/style_thumbnail_0.png?Expires=1649635200&Signature=TtAiiAUUpqpQ5pxBzSTER74-~~1s8mJRlAjbthUPOpvYjg8fQMKPEpbJ0rSmEwt02KGgGbeqy4qQ2ZXNiVaiy6vGQjnBcdbmasUMSqtd51K2SrTOYFOkBr77Cgpfp7RI7FSdhcMiiIgkLuVks1QQuzM7IgnFUO1gd6Tcntvwcw3lXo3ReXlEQIc7quXRIaYfMsqyyR8o9UNYQIXgXcHtnfGRivbPy5reSnOS6lAex8bc2A3g6q1QS98hqjllytfZTfD07c8XDyXYQNOK1G7kZXn6oAVRjvOvy6rqQEt~hGvEmXZyLoZxmZQrXCB69Ol6Bc~XYSZJJgNe5qz3FWPe5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Handler Multi Control\",\"description\":\"\",\"created_at\":\"2022-03-03T17:11:01.906Z\",\"updated_at\":\"2022-03-11T16:02:17.650Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"Df\"},{\"key\":\"2c2586d6abba3822d9e1844802e44293620790d5\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1513\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Q4f/aUI/MAN87WW34nO67AgO/style_thumbnail_18.png?Expires=1649635200&Signature=Qe7nCeEo4lMkUCl0IFFH~Xmb~hoolgUcXQ~a-fD399CNIjuTc2EYhEvzVKpK3mhw-weseTViip9gL-1yi-LIlrMP4udRS9YtTXJSSqh9sOYolBWlSHeHXKmgcglEug318-HkL9O6e8RwaqochmWfKJuWTO5bfEvmUoFyx~1-GI8ksubhd-0~xECIYgNN0GSnQXSYjEE-omVGk3InUTW4s1pY3exGerQub3P5SMDxMtP-itPawNoXXO4is1XlTpjoD2ld7qGV8Cp-QR954-16oap6-N5W2DxjygClS1Bhsy9Hnm-yGTfVZvAitajbV2amidbxCO4Kj~-z1Rj3KcZ8Ug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary Translucent/Text On Secondary Translucent\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.993Z\",\"updated_at\":\"2022-03-11T16:02:17.645Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}\"},{\"key\":\"2b3162830a5c413a851c5c7e6a6eaf22947046c4\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"20:527\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tEa/JVw/J2bIgA2PD2HnPgOr/style_thumbnail_2.png?Expires=1649635200&Signature=HaNeOpIWoSauLRHZRrX18xKwSLV1m72XUJM0XV13ucrPm66W2NP~0v2yPGK2SmMIM7kiQLRQkBZ-qnHfNXWRzcvSjnqqBAHxlryGjIzbzunzLBP4l5wf-m2anY-SZrKhxfmhWjZ1ud0Jr1AwZz54Qnm3cInyeJlwiNUGKCvBPZyp7hRdVFqxwWIEEWhsNw88Gfv6no7ErW-EBpw0l9dqHvQVtD5hcmTPtUeu3RJBF3-Gm~-mKLEHWu5MOcGrB2jRrbBRG-FvJMhgHgA1NLYh-QmZbsTqEozuCL3QNmc0-bio27mX79jmulPKYNmO4i-bzK3txYwLEpMceOfDMT9XwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.587Z\",\"updated_at\":\"2022-03-11T16:02:17.641Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"B\"},{\"key\":\"27cdf5f7e9827a030512785f1a2bc27bcc5942a2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2370\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ONS/5Kb/Yyd6LalR9LyppGvP/style_thumbnail_97.png?Expires=1649635200&Signature=due6e17-X71Uaui6Fy0smPPerFH47zRpRCI4zn3HgUUYJEQ14ZxYdg3SQux3UEyAsa6UPTx8ktPUhukeayrcGyumScmLx5jffxbE9agXVnsbT6gM6W42WUdyP1tzXejE1nszTE14jXs4yA5ONlPaC7TaCmWQF3Nd6LEXh8SQMT-QbcRehZCO85nMkZaq28i3v5bn27kwqEYY71ghUpJLbj4dsXKhmiv1CVaPDMP5JzszYjP1WmCxrqveebQ7KKy3EGSNH0D-gvkHvyagnHcUVJrFKkO~AYSRgILwIDpe71OPVfnAtdcTQ4zhJx5P6B50aNlpCll67JddguzKFPV1tg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 1\",\"description\":\"General surface background\",\"created_at\":\"2022-02-17T15:35:46.597Z\",\"updated_at\":\"2022-03-11T16:02:17.635Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"#\"},{\"key\":\"2372e673b5e14aced4b97e1561bf0558bff8c0bc\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1487\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zeK/bzQ/gJupHsvxaJnqHjXd/style_thumbnail_72.png?Expires=1649635200&Signature=SIOoZLsE3I1t1lHUbjucHnNbpQL9DqN2ndhSpK8BMtGbSfsfgDXcGXZJSjbVJ7Q59uwceKpxMsy6zbyyvqwDladi-hVfaQyiqSCF6~GJLTdRBmlMQXjeMnLSP36NAlNPL0Ajr0UbDodY6K8UdiF9e2QRhvyNMekDFPEzIHZ-EpTWtKUrSxUTB0xLkI2M1OYbtG8FrGXbd4j3m9Ma0he3B1kmGmvlrNvtWIlmT2S-UAqbk9j-c81lhP5djcDXfZSBSReU-53l07M2Of120GDqwiiFnAWuChiMRlvt3wQV~rKoggXr0RcbybUEIZYC0XAJllPqq~bHLYgN2VKBkskhAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.473Z\",\"updated_at\":\"2022-03-11T16:02:17.630Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"W\"},{\"key\":\"22733af3e5edf7196d757854a28419e68b0c816d\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mkG/nWV/oCxWoWzCbhsIQVFh/style_thumbnail_60.png?Expires=1649635200&Signature=GoMHZqtOFNWphtPtU86uQkCPWKVchJKOWIA5pmioI-zOAE9NbIsBAdRyVGNnwNMy9YLkRMex-~qLv3zg4Lh7rxNvabIMdAEMeSadHGrctCQ~hi-LpzrQhEQb0Je7Ev0aRmyrZZmtddSUIPH9CHRV2SF9TXXNMAI7n~iZSWOOi93zm3cLvBU1ktKPPiPAdnL5oA6Hi9bbUu-c3wjz33-cp3yaSRjyM9qfzxFn~RSWmOeVk6KY45opdly4S2ADI4vednaTMllO~PsLHm9fJ80apx44vQvfXDVQg8Ct~W2uX2Qpa-Jp~Ckb4OB9IIOo56bc6u6zds0l~cGmma~Phk8GMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Announcement\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.412Z\",\"updated_at\":\"2022-03-11T16:02:17.625Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"J\"},{\"key\":\"1bd81df52214633bf2746e2fd0729b2ff95fa698\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1508\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4Kj/eBk/bSKcv5KO1v6L8SAQ/style_thumbnail_40.png?Expires=1649635200&Signature=FdzUx7OnThLrto8bu6OonhxBE7qvZwUu5YvTUcg9tCGlL6wtU0FbLf8Qo52OcDUtEOgEbowmJwZwZetGjaBsGBAolyVk4lEZ0xr6dyPJ39GwzHQapqOjr~A9MXXCayQEj0aCyTj8wvKardvsx~x6JlMKAl3hADR~oSp-hrmLb8g9yzQRyDesNhL03OymoqB52p7qQT3i0i7DMtj99iA1rcB52HaMIgrPrVN6QTzoGzjAX4Bwo1Nfd2Hc6elGYGq-ATs297wCtYPQLfnC0PCTtCtlwM68AwgmALsXy8RhHnMxdWuSwhtgmHihE4ZxoLgj1Cwl7R6~~5o8nYYqYTLvOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary Translucent/Background Secondary Translucent Enabled\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.984Z\",\"updated_at\":\"2022-03-11T16:02:17.620Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}O\"},{\"key\":\"1b489efbc59c804faed2d5a81635ef505c02cfef\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1316\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BRS/XXC/ewBTo3g9hnvvRAoi/style_thumbnail_0.png?Expires=1649635200&Signature=IKB7P2ReJJBWSNeMcFem5XhyQCzYyDmOWhkFwUHbfzzH8Ba5xWcmnx~uoWmVIr7CzbLBSa-4waPWXI0jnhfiE-AXvlH4JvCywL4fH4lHgPEaX1zK1poq9~j~9DGRDEo1N2b-2HOmNLJi7PPKw7-lLB5uWaEK8mxy4oGhhWQZLXZ9XMX0gwZJvdVBYQYOmRZfKfn2U7QTBfcXCjfIRz4A~dgVMmIvNBH0QjJttHNcUm4Onx-0pmyO-DsE3lipZuf7tzLME3Wl7cs292E2CVcUm7x1MkFHIFoLs-C6y65cdvENOMu1ckzVEgP21-WeJz1GXwA2ePOBxoAMrRbTWla63g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary/Background Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.290Z\",\"updated_at\":\"2022-03-11T16:02:17.615Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}O\"},{\"key\":\"163f54464640c21f2201a9d389cc1101efdaea15\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:752\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VBe/igN/2T3lOl44SFqGN6tc/style_thumbnail_62.png?Expires=1649635200&Signature=AMfHM5CwRNyfSGOmrl8iKdbb9RXJYLVxuSLWGV07qWWjKI57dPB-0HI5MkZRfcovesTN4DSAG4le3YSAX1ZdgTz-H2zHdjYLfy~THlbl5~ciDVMaHifbOoroxMiflK8Ur0W7Uaaa-SK9iXpmX7WV8c5cyMFilfIakm2RVLfP-z2oQC9ZEQZAxFazyTfECWY3gaAhUjkeQQnnifgpjZ6UeB1Gth7CGU9iRHv7I4GfunYsnfbscp6tpWFUOIoVj8J~G~jGiKPV0CZ7YLOlCVHmX1ERR9JaOOkKmBG0XqQJWgz-o42jNbXEkqURoPCL9C4vv1Z6sOD3kpJPuAROxb29WA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Secondary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.423Z\",\"updated_at\":\"2022-03-11T16:02:17.610Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"<\"},{\"key\":\"1626270c6e39616509e6287e1a5f8d517f330048\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"92:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oke/Yxm/UP4xPC4rrAP3iqdC/style_thumbnail_0.png?Expires=1649635200&Signature=LIbp5lXJ7eYXkHBMpWoJpHxtztOdC8rdvbh1DIzuXLKNrOiJgh0DqaLMeU1JLoX1mvPhYqvMJnFUUC5hRY1SOgL-IT1dXG8ySOGPf6itoNZIkTi7a-9CWULR~tILlE3xUr~5SBauYImvsrdYyFOHN66F2IvN4hNhpk~NbXtd6qQYsajw1AY8GMdxHp7z5NrhfWHreOfR4slYzu1hgf1n6H~OaBQe-0tMmMhpA~EzgjwldzC8Uc0wPy6EcKLIbIy5SRol4Po9rTczF5CtR9LjNIuVuUy6gmr~VUtlshyyMCZHEYRhJBiFHJDvl4HSmIs4FNC3yypBT3EpI3jqLvtiAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Accent\",\"description\":\"\",\"created_at\":\"2022-03-03T09:48:05.966Z\",\"updated_at\":\"2022-03-11T16:02:17.604Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~8O\"},{\"key\":\"110e28bcce91d802e77f9ece4a72b0928526d225\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"77:1407\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/V4I/fQx/Fypj0AXYmKYpcHvb/style_thumbnail_0.png?Expires=1649635200&Signature=bfCb7KG5xmtLraX9fetlALNIE2ktLiJqZjGj586Syby7Vsiw1YosXcWhp~8boXVSBm~GCuCNV8POp4vODUPCtKD0p3AtYWmNmk7MHhzCVShOg0eQ2sJ3u6m70p1ydI-VVhvFwc2yQNSOXu~P~8VsoSYaoxg2VjPWHiITBH8QRczKT7eE8ynLOBRT-VNxnFnlXLoCqdkDg78zD1MCtE0NS3ud50ewZKaRQSGVRrz-jg0KlJRD69zDSbGj0h-sLMZPdbXa-ypkTIAKwZz1P0scZ-QLqQ-R9LZ5MM-7j8SZpFUjI~sS8dTjCVTFE0jcGq~sD~2BXhHCd2XyMm65zSx8vQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-01T11:40:33.793Z\",\"updated_at\":\"2022-03-11T16:02:17.598Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"BO\"},{\"key\":\"0f9c77cbc487cfb2afd38ac99603de548446e034\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1523\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tlk/iDW/tUIphGM24nOt4cTe/style_thumbnail_0.png?Expires=1649635200&Signature=V5OHBCR0a~75DcMN7cBkTDWWbjfYLG-3SY0Ubfgmd9Rdr25OmdeM~DkOCqk5N2N4pg6fUdMp-nB0de~mewKHadm~lcky-SUntzMsa2CNncpRtByqrvRyuXKdVQjqTvrnqTJksPR~QVUWIPivpcLDCZfetfBusZ9vk3OfXROJGHyzihM8TdjkZlM3gkCtU~5DsCVQ6M5pEXmv4cR-j6EIojJ1P5pSsuXPAjSJBTr7qnrnghKT4clmeAfL2C1zfqvVMu1-X4bgRUfwom8VI0YARNoeCbRM2SGDwuxec27wnUNzaiyibtxUd3LGTrXWUvFT2Tp1B2bA3~0RH6COmgCXwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Critical\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.314Z\",\"updated_at\":\"2022-03-11T16:02:17.593Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"a\"},{\"key\":\"0f0071af2db6c2119b46a4b08fa0572b0aea7a75\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1321\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/28J/fzK/jWu6yl8KftZC8sPd/style_thumbnail_1.png?Expires=1649635200&Signature=WMwQ4xMd1EEPewV5sQNg7x3JyFtxUVSB-E9tcZ8o3iCkCe5aqDI6Q7akpjKBy1j5RFNhu3z27-tvBA7q8qD8aDcPZFtsk~aRESNjRSjJo0osd9mB-H~zdf2bXVpZ6S61r19n~2D2kpcPP6zd6E7EASRTFvH73o1663xPqmfCIBm1yHbEXuaFqb3mIoFifZ1J271lf14pm7kM6ThHy~Yp6WZTyp04vsdzc8Q31vf9UhhknVdTL56M1DIrVZXhpJYtaH06JRApbM~QcSql72vAibBUV64kII4UgLXZEVtGwWKNoIWsgY37YSGxaJlSMsQ4qFiakVn95q9nhaZ3ke9KsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary/Border Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.397Z\",\"updated_at\":\"2022-03-11T16:02:17.588Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}x\"},{\"key\":\"0e5bdf33f848cbfcd4c6261864f81cab04d02da0\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1846\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cdR/caE/jXjXaC1M6iT762BM/style_thumbnail_3.png?Expires=1649635200&Signature=QOIGmqRVAneti3Ru1zXPgB7~jeTWtw~pUFIZB5v4-6ynM7p2pH0dDisvxHWV8dkV56B0PSaXEKPQ1QtO073cG6kAVc72wtX7jwvPNnOyTtZb6ed-pQSWPirU9-p9PLpX2YhNjvQi-t-kyypFWDEqz57n~QE73jpKSIY5~Tz-gveYB-lxAzq4A2P9AaA9mjtK2h8EqGhfDT2T6fZRJRu5ClsL2zMoCsJdsfGnm0Y~QFXfihcdmz0AugaI4-v50hPfNJswPnh9ROHqZbujQ-7v6ho0xDAHn3gSahCBoDk6j5PzRaEBZirQV1jt5fycrV7i4xMLK9G-enI6j4jjZQ9NVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Query/String\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.136Z\",\"updated_at\":\"2022-03-11T16:02:17.583Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~2\"},{\"key\":\"0de146a53fafdbda76050b1e380a4c89404c6aaa\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1087\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PTe/DCS/rBSs8H17w30OlJlo/style_thumbnail_64.png?Expires=1649635200&Signature=h3CEgyWVcOm0ag0kHo~Ym5dJnXtU-HgwaDuikrsGVVzP88AQRsAzzaF54OU6otL6QiUyTtt4pjHWc7RihKhjEn8wBC-PSE3BscsrAIbVFfIvZ7C-g8QNAEVqvrbejOVOesy6acLHHrAHhbgE3s-0B7sQt~TG7kTwOFX70OuAIgb4j~hX2MBJmF29OohRKnnem-zSQlL6gKchAC8XGBfndWgWGaI11eg3oqiY0tGAC7W-HVuLQGOKiF~d3zsFNbBB5zP9UzyV0plxMCSw-OojOfrXEevV7esjtPiiBkQF4-yyHjoH-VDoxsZAH7XQyrhIse3tEJdaiVXY~Iy3bIg41g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Text On Filter\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.433Z\",\"updated_at\":\"2022-03-11T16:02:17.578Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"HO\"},{\"key\":\"0d32006172cb4e6464c6f4000f3f76cdda0ebaa0\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ogy/gCF/XnVHCEWQIJAbOlCP/style_thumbnail_8.png?Expires=1649635200&Signature=Rg9PGzwwYWIrBzkIlHyE~XKcT9xlYgvw29KD8bEtSZP2Z9BpK2CZpnVdJ2UHoLDk4utcRoT4DFxslzOArPmmkRbqalR1GzvRLAxaxGNK5ICjW4Dwoa0A~ty4~f4QN-YXZ0mUHdiYuB8tXW85gVvf5bC7Cji2LOEJvOUbPOnBxLB3JHGh6U~vuwrJB3~5oBVLdK22agjPg4RXyaI5xaHBIZuCkx14cUU4HWqWSGLDlT5KmF0MVgaF4XPygY4h6tEvLun9y9mNOKEMRMUhLrRpphZrUEgU7iQgtNDeB-ERMhXu2PvsqeDAYzRo-CyNuIfmXzEONdGzT1BdpxxiaI1IaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Success\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.160Z\",\"updated_at\":\"2022-03-11T16:02:17.559Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"K\"},{\"key\":\"0c380fc22f495e0d78c60a59478e01148d22a776\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1562\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bdb/Y5s/AzoeqU9UOSe1zAnv/style_thumbnail_3.png?Expires=1649635200&Signature=UCNiLLwXfctyS~jzUdEb1iqJxqcLt7hWeCNT2ZLq8Rkfpd99ENPpSwl5Oxq9FHPfjOkvTNV7-YH7mDbyGOAZFBlINjyrnem8RZdz2HWMOd37PJDy~JebTRRG149xVRdnARf592nV6Fu1TLUi6853IJS0tUl~0tsY17eUAjtHPji0EAqy~aVuccNb-CkFHvG4eU5iBQEhLDM5j43YT4jlwoKk-AyqwhU4~7FGRfB1jjthMTp1FD8kRcqKUZVY9fN5LnGhcujvbtJcKfEjKcMjEJdWYgwQJqa~H4XvY3SYCJykt4bLC8cQ284w17AyCYhKsBX79mhF0O6tlxRC0~F75w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary Translucent/Text On Tertiary Translucent\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.949Z\",\"updated_at\":\"2022-03-11T16:02:17.554Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}NO\"},{\"key\":\"0b5057da0f4b779ae6ed12d92aa2254314ccd42c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1847\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/x8E/hcM/lVY7fM75GEu6CnaZ/style_thumbnail_17.png?Expires=1649635200&Signature=Uy-8go8wOfLYIfT4IyQ92yutDu21~iiE7Urfuha0SaKocbucPO-ninXCFd8TPHOd-JcjNq2X8tmZtBgf2pt1O23BAwn9hcnuVHRhxpjy~qaeaBRQYVAR8OYxy2ee-ZKm2XrUf8iLxN-a7DYXapYOBiuZAgt5PdCPXAli~IYjF8BOr6TFvwfoQaS6-x6BPGMhqltJTS1O-5D179bfi~0dQSSzEevRU7qqxxJiNvz-SlnFynKtQLr-2-LsTq-bd0aNAeP0vAeeOYSGyv1cxep-kh4pCNwx5YXLDfC9G6KEpCVbc1oz13RgVTJZbXsTZXddnHrYCyDTW2oBnz-gD9S2CQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Query/Regex\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.204Z\",\"updated_at\":\"2022-03-11T16:02:17.549Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~3\"},{\"key\":\"0a3dbfb3bb499b639a6cae655ae795f6432edecf\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1312\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oYH/51b/WTrOZIfTNzjbsTEe/style_thumbnail_47.png?Expires=1649635200&Signature=YpTG8gg1OQGLU8a1p~Q1HBaIjOWVratzRR9AeGHSGc3WE9Q9t87ughHaD5Iwujznu0DDzP8R7~f8ANsPkaBW1A-zb879ljfTKrChY0kFPiLnCKQWtwbMG~mrv0Tcowo9W6fPGhuz4CZ~pGxmMjJnNPXheeDB-RGSC9yf4ErK-piA4b6hiQ0N0f2oB4poAY27oL4Vuq3fAHfOa2jOHYSEe4GIccUqnHAcqHIBZJCQRTI6sHsvyernTHQHafnwJyK-eQej9YFE4Y9m-LJhT-pnXRQ3CiDD-~EbuiWY8ZyAnNqzgyNqaAa7qDU0d9p30XtmAec42CA73L~FgpVDtra95Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary/Border Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.324Z\",\"updated_at\":\"2022-03-11T16:02:17.544Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}x\"},{\"key\":\"082e5844515c3269031ee679c886d1e6cdc3073c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1839\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oSh/cgM/QL6Y5JuMjMRdUoF1/style_thumbnail_4.png?Expires=1649635200&Signature=glVbxNf54Z~GfN-nX0eTg~DO77HJMVbzVaQH~M5wSLDiaeW3UVzQIShEs4OqG4f2mSfzZzxgdI~qEY5twDUjDnBXetdVYn7EvmqCFD8-SvbmKCRKIUC36NeXJjN-GsiJTzVwk-8Vt9MMneOIJlDfzLZAQ-q~A2osDJI1vLGg7UQUi~nW86pz0Sz3ad6mA6nWM02CsMMBn~hzwDuAa5MyDr7tAJhbldiYaovWhw3633dtfRqJI5xeq1w7W0J~nQLbrizJA9ruO~69T8Ijt6Auvip4eh8GGvsxRke3~dUf3m6sQbQqwqzD0Gt14TonlmYxfo5WgMiU~afJ0I1IsPn4lw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Query/Normal\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.141Z\",\"updated_at\":\"2022-03-11T16:02:17.539Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~/\"},{\"key\":\"06eaee152032393df8686f348fce7d32f8f1fe3b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1308\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1nL/NsL/9evZktY3QnXVInjt/style_thumbnail_37.png?Expires=1649635200&Signature=DeCqUpRntTEb-GmErH4yIGSREgiiF9h4lvyjCFaYabzxqDsRsEX155FbMvtrycOrDrP82cannig2MIeooEDNo253HGA2lc3jAUZF3fhI6UfBFNndNPpkl2BFHisFD9RdFabJ6KOlctN~VV7UwtOLztFmPuVAjSL-onl6-BntwRyIdExv9AT987pCbXgxXnRj1R36HGB7KUYSQh6hOMNIrdEfXC1A8IRxOsyQebqjLegtLjI1CaB4woWYrBODXjjgnz6~BhYe2lDDlb3jYLy25Cvjyfc44fhl58yLogc7W4jrEYOqlXC8f50NXHLX5kYslr0XnZmTiUvq4-zqi-SBbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Accent/Text On Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.300Z\",\"updated_at\":\"2022-03-11T16:02:17.534Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}\"},{\"key\":\"03bebbe3f0cbcb7a299cc408d45d54d26d22b67e\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1324\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J65/ulq/Hl9CJK5VAtNwK7Ri/style_thumbnail_2.png?Expires=1649635200&Signature=V1~nL3eNvYFeqMuj7swyfeVoQvARJ7rAdHUlcM1h0gV02HC9~gLJJRaWhbFg32TQx~6RgvVwKoA2dTrCWxO1rB7KrJZXFikofKMDd099CnPTdHCLk3Z6ATbaU~3laQZJZllZdHM8NGN6lN2NHdlTxfmk4sObv12EIPwXUkXsYas9BgqeujZe84JSdhrhe5bom2c09rueCAIdOVSQPmMgTZ-n5cWn77NDxg2gH1puDndwK8fwapxmwMJEsrchtpj8ULQRRdSIm9AcSrsevZ~rf8woYADXUm~~kQCO57rGFoCOxc8elogJRcoxQZyh1-Tl7cMLUacMmcHxykFZvKYRRg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary/Text On Secondary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.228Z\",\"updated_at\":\"2022-03-11T16:02:17.529Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}\"},{\"key\":\"0291b45b1252422a5de52508f8e77d6cc34fdab3\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:789\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6iC/1KL/R0sgbhKq47FqnDhY/style_thumbnail_75.png?Expires=1649635200&Signature=EDf3dGwniQcRBrqip2a-wmA-~Nez7KgCzsblX5-o8B0W~G~5au96I6dMVFtBpN~xZQ2xBOVmjBbE~RqRhGAXr3PIMExkvYWL0ua7vVdoB7X4Ij2jVQDl4xrZ3cFXmJFySW9RxLwb5vpTAEtbgfgfB1OHOP4GQ1OJ~CtIDtF-VQCgqQUp36wo68MiJNI02CVJYs-r7OJYYzoN4g80xguAv1k60oR2OtLR4yq-DnNOUqtrzmfzTxvMci~RH6pgYyg7cRVXkpEu4DE6tmHec4MnGh36ngGmqt0cPBVCay29njgePEQBC5p6pXFvoAaNxesE745mcqdRd69X-GNCwruWsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Favorite\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.488Z\",\"updated_at\":\"2022-03-11T16:02:17.524Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"?\"},{\"key\":\"019ca17d13381dd6407c20d22968ffa1ba903eb5\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1524\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cZu/AQP/u4MtTdK3tn2S9sne/style_thumbnail_52.png?Expires=1649635200&Signature=RAQPHU~R5CBEhskOwvc38mTijtAu9EVv--Hk0lSCxycIQp5VLn5-BrP~Ofd43I9yCi-lAcW-ZpeYQx-IK8WYmrQN6McwqgcmbkUnIj8p4I9unirl6vxSrkXmuAbjMKsXNpvlvto9aOXx1KqgR~dzQnaBPgzX3QprybBvS~2x~aaVR0bk~0CXYDCJ8~pCHBoFF7Yl5nlWHiV2C2SMMWijKbuEwzSXAwoMVvCluBoJzzb5RB7FRLbmuJkrzFpV4RAZ484WhxEJnlrZOkVK1cGXvU-WprhJzyMcHNQ7n3ylO3~QtF5sb02sxW5K5VpSqqtAfbb-lYi0a6PPEGzwqv1K2Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Neutral\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.373Z\",\"updated_at\":\"2022-03-11T16:02:17.519Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"b\"},{\"key\":\"0173c349731be80bc1335a155aae8d6d866f1f21\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2376\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6PP/dHx/MFkiDrjZu3zIYhji/style_thumbnail_108.png?Expires=1649635200&Signature=FtG0DPhuDrey4~nv4poYHqFMGBy1P2hp2894YoP7F2821dcyC0d6TTtnnMUfMux0O9ylSg6QhDMHidqFuVkCSJBVlvVNCeiCSooS83Voue8nK3ZHRWT~09zW49UxTk0CHEsPq~x3H0aiop1XaSRl79p3EkrFPS~GfDpJjyCGVq3TCkH9KV-gjJbtPL6-u5nMEjO~8c0i70ieSe24lcRuJeiI10dybrjDggvxcIZzJFBbFuQUTdVEjCRpOJFPpmGDBlLjJTAsH46RkckHOfq1i8De4tY1GgzxSmoZMxF7z4hV8vfp3b-aWaPIa6tuL7Twb7Sy1K50-~-HUtAaumqeYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected High Contrast\",\"description\":\"Background color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-17T15:35:46.652Z\",\"updated_at\":\"2022-03-11T16:02:17.514Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\")\"},{\"key\":\"012b0daf7aca6040f1470b230a415e656b0a89fd\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1460\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mjj/vRs/NbLMXdEX2vdFGxmU/style_thumbnail_10.png?Expires=1649635200&Signature=TOdgRETWStXvGadjJaa80Kv0YVCkfergijVhTTQNHO0KP7jUgF0IkYjhMZa2R2sxp9GS9wtG90cV7kBOXGIIGi02nbMNx16b83qqrEZAfbNQrrbY20rRk3GrqZs7b52Sy-lMafzoHmmATb8TYSlQfHGV9ORd6nUuykY-s6wFOflZRd47MtehfC2i--XOBAFy2nloEY4tKGVd6lHwGoIGT7HeFtN-0oXqjRl60JaKDztJWHljNeWYDT84XhubYgrxPvNESnh5t44CArgA8zehgQKzWQDypdjH3beNPMpqyCNz5~iY8RqON60zYYX-djtKKw6wBgzPEQkGghTCu~6kaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Border Primary Translucent Hover\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.940Z\",\"updated_at\":\"2022-03-11T16:02:17.508Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}{\"},{\"key\":\"08a71fe2424f121b7bf9d3f86ec04c7adda92964\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"191:1555\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/A6u/zMF/KQKwTbzq6IvGA6Bl/style_thumbnail_9.png?Expires=1649635200&Signature=XjsFANQTU~lpFuWVHqp8AfQyMCl2lmEH3jh9FXwkUNizGuzO84meFmxW5YTJGyzJuUPot~q0SpVBsWZv1XZFhKZyvyQd9GjRlXQRjIF~fjW1UY-Kxhp01En4LDiAomYmcl0IwevnZPsH3wIyW3wYSgP2nrBkO2wzgp3tT5FPnWX5d6Ct4H~AcBSsJ5OguKki7QuqUVt4dPYcoH8L6-FIIeL0Eb7ZMF7nDqDmUodO1AMBrN-0UJMeQKU02hpIM~pV5yBB4t9~jr9cnYkg-c1UN4yiV3KpagY2a5o1DLzYSmCBnouiN4GdLIN0tPTSLOLhAUsLkXcTJ~1cnWvrevS8Ww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Low Contrast\",\"description\":\"\",\"created_at\":\"2022-03-11T16:02:16.942Z\",\"updated_at\":\"2022-03-11T16:02:16.942Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"WO\"},{\"key\":\"cfb0febea0083c3fa09f37a106d25f460a131aec\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1418\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/o2K/6CJ/322DKFbKoudGe9Hl/style_thumbnail_24.png?Expires=1649635200&Signature=cfzGy6WBwJIgKQ7wo3BkIpft15qJWotzwJ~EMduRxuwWjyOnvTaVEpHqd8xZ-nZ90dOVtfA-na7nX~y1TESoDEK5U1EFgAaezCuRGGQIKY8EFHED-l---safb4dDDxLZl9rKpbcY-h6DdUi76o9jRrWO0fGC6iOmbjQ1xaheM2--Rg27VH83vNMniuSzz-j4LTwRagZYaSxpAXAz~ARUuh4bjlMYWzRpX5oHxRsEnDsKvDEscILzsFYQmi6A55JF63VqE01d5xzniOvpYzg7YLgjkWTLAMtYURZHbUYnJ2YNukUFnFPSeW~i7mt0qH7TfXVOKj~0~h9Mv6HNoN37FA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Plain/Border Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.190Z\",\"updated_at\":\"2022-03-11T16:02:18.070Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}{\"},{\"key\":\"686a26e475fc26400b3964a2e60e55c0dbe1ac2d\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1457\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3nY/uD3/ufZjtcMCbWrjtwAD/style_thumbnail_25.png?Expires=1649635200&Signature=Yf3pXaOJbgeMLf5P2eOF7hfgKOqmgnwWO2796a9Y2yhywuFTD5xosBkAf~mup-z0OSLw0oJeY8xdUakZUncC0FuI1TsBkMNS8hXSEixVywVnHxZY8etU9qr5vo3QK4Fvdq38E8-8TtjLJnuKe3-s9EHANdl68M0eiAVQdWudFVZbLjCelKiomdCNphlqtbh9aJLx4BIqDEL-fXbN8csvudIhCW7U8dPeykC0boNiMhUCzIG1Ebx5OZjlRbPmCVdfrEXL7xnM96cfZ3RFA1AEcvxtN3nPpKx-u1h6TQYvZ9iFiZSuaiccoqo5rEALGzxJ3rlSyZP4nLat1ojOwrZPug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Translucent/Background Primary Translucent Hover\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.966Z\",\"updated_at\":\"2022-03-11T16:02:17.801Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}f\"},{\"key\":\"5a19fbdee823b7495c3722cb78ade5f9e04b59a5\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1512\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xVs/O5o/bCIXEVkKutulGERl/style_thumbnail_13.png?Expires=1649635200&Signature=QHzYwDxFrfS6ITeN~fdvQQ66EXpz7FIMz6nIPqNIJi6njcQ0hn~~uBR-bajmCEkB6RV3VJpQkrZjecUHg9ZzeM3U23Vl228ims2ad~wB5EiYtjhhI8ZtNmqc84QOzvjsdWzxV3AKRa184Ho1yrMuKRfYp4HkPLndUc3YmhuE1BePo-EIUFLZEqre0BxnGzzg~qP28NILJoSem6NVA5vh~NZOjtaj8MwIrpn3qfWWX1DlPe4LIx-zp-Lp495~mgLuQRo4ynFDQ80Aio84kf6IZ9akxhg-M6VctcA8~IdIPGl9-54znt0E91cjEw8unue7OhlmhwBVlT43Yg0HnNHS2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary Translucent/Border Secondary Translucent Pressed\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.945Z\",\"updated_at\":\"2022-03-11T16:02:17.778Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}|\"},{\"key\":\"e00c183ab11374ddee96e212059b47be8623bf10\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1432\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tS1/Tdf/DwplsHzi2al20lh3/style_thumbnail_103.png?Expires=1649635200&Signature=CXNu4y807DS-a12qKWz6zQ9pJLLASmp0-rM21cnxeKThRgZoKYgIR~6DaI3io7aAmXYLzj0kfH-LZE1UPjmF047~Uv-KIWCDMNlRxGtabsuUZ-oTvfdXPmNHleV9FTdlMknyQ4QgwmPtnZ64jxCBluX5rMCzpbIfUP8bf1pEQiBrjlNNhNEIccug19MmSRzet7vY3glYofOMr8KxOQOla7yY5U03pstk8c0ZbDbXwcIWpa7fjXG36pO403D9hPzKHtiq~5smml1IIlLdoXH4lKIwr9hXOZpZbfxnrEntY3JT166FMw4nUHRdzleYzesOew-b5J0aVqFX7iZsWN0DEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.627Z\",\"updated_at\":\"2022-03-11T16:02:18.120Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"N\"},{\"key\":\"dfce37229a2e4e88eb393e86ec9b4ec3d66b9738\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1434\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vQx/1pa/PYRqwsPfwGcXpTkN/style_thumbnail_2.png?Expires=1649635200&Signature=Wyac35mSS5702GkpoCgyuKwxMgM-xaQvfalrsn95N~ug7pa64co1LvfHH10FOjHBoK2Kq2BGoqsYHA3KF1k51bCHdMC4tMcfpZfnGP3S636aoQQ97-NmZr4JJ9-U9vqo~~00erEM7Br734Xj9lYS9VFyTMjsZAmIHszKx~30tR68M6UuA8cUw~0vhzD62MhMmSXtStKM4oDWgLi~S8PSP7FhsHZEUYPsPiwgTFhCWZ5YOSrlrAcJnfj0rrzugQURwGWLiFW8n7GWD-CY5~9H~gC38mrF-zzXbvIPsLSDe6RKb2WgOlNvB9ooMyBSTB~OqNsqJC7rTTmsVOYAzv5MsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.131Z\",\"updated_at\":\"2022-03-11T16:02:18.116Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"P\"},{\"key\":\"dd6c5ab1906042f74cd197b15936187ee8cd9c2c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1435\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/U9U/J8p/of99yNH0JkUZajWA/style_thumbnail_11.png?Expires=1649635200&Signature=Vaer~ucJ2zy04V8ct6gSWZa5ARIvqXs91pUT2s2Uor9mxOYNmwZSfsAGTdznWX~liEkihHVmvWMTAhHgM7Q3kuQ87W9ZZodKyDLhoBBBSov8V6Z1wRjVoL9dKCkF1sologm7Qmnw1esFHzxB2KMMCqAJ-Gq~fUfeQ-FWjQeXbl6BhsQc8dlORUV89JZlGenjkcMMDOnkQsDx5vPB5CybgvGqY~uhaUm2fm2r~3Z4YloEYRYcq60RRKiJPJJ7xUlNslipxBpy51ib1bQCQDoZzFW-P~YZ5bhBZNPZVchCHIRW4P7zdyO9WDIMMnCqNSZrTh8mvSby-sfD5gMqj8uNEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.176Z\",\"updated_at\":\"2022-03-11T16:02:18.105Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"Q\"},{\"key\":\"d2d7ace9983897b23542aae87a6fcf3ee3048867\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1430\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rpX/Xcd/q0yhIOhgjQP5vgZh/style_thumbnail_112.png?Expires=1649635200&Signature=YOp843rbwQjYlOaVHcaNJ0sJPcPkv2GvHf46-kmGq1eXS7uGXg9miWAlumbg5PnTytyMChm7xGffgfd9Svuea37Xv-tX8NodX2nY2ZY9FdLua5UCoOHck1g2eKhV1hhWBYF9r7HCvAqlM2dRrfs6~C~2W5VYh8f9RuzwyFkPAORAYnYC~Ix~fkbpS-GizaXJkD6h4GTN5mZhwqnPmLh4SMBwV36JGLhSQGA18nktr-Tz0bhz9Rgoz4rdwnfY0esBh9Vg2Co8hgpsPp7aIrq1Ngmga0TLMNaa8BUOYH6MR9ED7T9r3uXu3PQNyO86dpOU5YHVrKog6E7G9JIVW0eCOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Warning\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.672Z\",\"updated_at\":\"2022-03-11T16:02:18.080Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"L\"},{\"key\":\"bd36fe04a5c11389697cea92834e1d659d2c9ada\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2384\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ylG/Kih/qqlM28blEwiNlCXy/style_thumbnail_20.png?Expires=1649635200&Signature=BdLAth0YAvnmlLpYKz4sbisGVvnZ2ZpSLsNQAYwuQ4nGxv8rPjBR33RlKn81IQ7MYtwpZEmJB3NtQln-QkO2PDh1Ra-HwjGHiS~zDPEwwdD4JvHXNSGwGvDk2XvsuzZ-cpe-3UcWFbDBvsV6PTMxj5O32lkvIvVa-sH8~1RQgScIIgBNkEt8Fhmfw9TFAW8W1uVDfk6Pld-jAD1KrXYpGdEJwZtZp9CMGi9KLc1UxDqzeXKaMU62hRdSuz0jIYQ8R23sspVu6zcMWA8Y417dQ4aAm~sI2Xa7xxjPDwTxoIoV~Lshkww7mcD5zfErjgI4FjoiIMvCyWQxzki1dwXd8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Disabled\",\"description\":\"Text and icon color for Disabled elements\",\"created_at\":\"2022-02-17T15:35:46.219Z\",\"updated_at\":\"2022-03-11T16:02:18.019Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"2\"},{\"key\":\"9e795de23aea014ad1328d148c954cd955229afa\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Pnv/CYP/MoPZFql1K5CmrFUw/style_thumbnail_61.png?Expires=1649635200&Signature=a8pO2Mg6fmI9OcdvQWJ215sAPqrCZ4~bSA6EV0ptq9VrKEEXpqEsbR97T1cHlGC0SU31-Eck1xiPYjvRiqAio6KzL~T772DcvXZNxK~H3SPdSHPLBC0fJFmHCncigp5nZ5EBw6Wnbo7kisvcyGDH241R0myZEhqqZy5sWI67Ww6UNGr4RyUNlSoKa2Ac~fsJvKkbnsdH-upnw0pt3Sv9SaTIeJGXSDOflM7Ka2AdmQD7lF-isMDYRPbjUbJ4CTmz7nVKnj8RGazfyARr3T5Eo2h18fwTLfijFnT89mRHgEUcZRFSOUt35bvNiyqIt0DHUSqpevqtk0VzHSGURIDu-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Info\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.417Z\",\"updated_at\":\"2022-03-11T16:02:17.944Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"I\"},{\"key\":\"6ccd77187f48a324145f9cf158b2437fb20021da\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1844\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/qnk/LLJ/E99rVPIPX3SmayE1/style_thumbnail_1.png?Expires=1649635200&Signature=fqazD87FGlM3QWckHf~ZXqO9GIE7qEoGERlrXFUAHJxfh4Yqt~bHzUpgvH80dBJBOtr-Y5cp78hb52XyQ9u9Twi5t4JWn9ohW1YeNBorVhxf5I5uN8xCEh2FS-kYEw-kHzvt6g28xIAh514ANKfxmDNgpabHVS2nBSeBmv~dAwZwfk2BlthJ5j-CX5II38EPrPWDEb3G7qo9Oa7fer2YTnCNpP42CFThQfMdm5Ou6zBLawTHZIW-jSLpxpJnQHTCNKKVyS-o1rIy1Fh5LerYN-S67S1poPAL4272HpYsZT89w9UJerTA1V2eyvLnpArCheKSu3UdsIB4B86BAiYzLA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Query/Keyword\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.126Z\",\"updated_at\":\"2022-03-11T16:02:17.815Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~0\"},{\"key\":\"6a026fc327c293cb7626902ceae76e698d45aa45\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1525\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Chl/k9T/roO7ceLJ4NTZBgvt/style_thumbnail_49.png?Expires=1649635200&Signature=Y1cX1poZ8hMAqwPkfNvAmKbpr5XMgLgcU7LWt0bM09yjgdPCZUKT46x69puEL-HHNTJikCOHSSs622dEiDkxVy16ytAX5lSoK7W31jN~fmnmRxDgSn7e6XyxYNmawD~r~PYSJBjTjlYaN1XEgTF2rCQ1P3L0XDFLb7fxU8Rkxvx-Eca3tnAmlRO1ixgb7mgJJKGAKWlJxzD-55guQjWTcccUNGdQerGMEXK-qz36UCD0JdY6zod9HKRScA22ByRUYUIa5F8gcZdGcAYVUgHLwOsO2nDr3HeaoaSIFKfrhVKc2hHetDZp-nxCGdldO8CITfabsaNUaPaLFonqcU9QYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.359Z\",\"updated_at\":\"2022-03-11T16:02:17.805Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"c\"},{\"key\":\"5c5bbae2667c5b1ef2146a1812a15b9eb71bcd63\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1520\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iL7/fvy/c1R4XSTyB9m4JLXv/style_thumbnail_2.png?Expires=1649635200&Signature=Gne91azHU6eA8RLqA0IPuCuIzc1ihI38UzefT7-Tge0g7kCnR5osTuXwtCBxM11t2F7rNDdJ8Ha9Z5SZqCFfJ3BPe9j40khGBWIZ-u6r9lxGt68Zez8lYcowGcWSOf2L3YnTzSa3rKCliFhSDIrE3vchSeozXOi6Em5EG3JMeLjE~15lQ~MWElpZVHqikdxaSWIekkLM9I1P~hszIQqDPcAD3l5-uERyCQhTuwiPk6Rot79YzstfeMzV3ONLAZ3u-5p4ZWv-ro6vLgcHn0NY-p-ercAhMlyrnaM6sDpccRcgj8YQzXVf1rd2bXoCYDkzHgMyQZF1wVKdnxWyP84ROA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Announcement\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.613Z\",\"updated_at\":\"2022-03-11T16:02:17.782Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"^\"},{\"key\":\"4663c47d437f48fa780cca2a6af426c1a27bf89f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1433\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Kpq/s8z/NGJIdJYUXtg5ywxa/style_thumbnail_58.png?Expires=1649635200&Signature=VMhzyneBZfAt1HDLJ5~rEYHTsNU5hqlHd-zJRm~osuWrJbS5e3LeUgVoHdBGZJHJnjwCkHKC4nRI3z8VhYs6lTU48-XKf6nxCiogMaKUgBUmN9WYsnrG3gv2DGkB~1X13JNsU0nZtLW9u1zL-kBBfhY5n~L-NaZLYM9vBX1Qo6hqiQKdYpb6pcUJdWXgRikQxW334sTUcJdD6Z8FvOtMJfJQPe6BjxQ8mXEMv~ZXTMNEE803v0zplgRObrjCoungJT0-bZfxD52mP2PFIolhjIVkWnMEV1POVC-eVVz0r5SBB9-0L5v4GQ6y-LExbEKVfrauJFnAv0pwQ6uNo4cbHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.402Z\",\"updated_at\":\"2022-03-11T16:02:17.720Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"O\"},{\"key\":\"b2532a1d0dfa7f22febcd3a96bcd1e4b9cf2252c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"36:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/prV/aMu/KGb4vsLxAet9EcEx/style_thumbnail_93.png?Expires=1649635200&Signature=Cl1vcXipgI86UNFC8QlxFAO-LOFIdnbJDPl4JhlteKaETMOPxjjWbWsdPzJvjIyc2117-bvJwCv9Ol81kVt3tsv4qxmUk865qRb3gqlUZtgF~dnaeaQ5YAzYnxsEy6lnrZJ5WtFFJ56BowhSSzEZmgce02lWtMdx6XvMvkJPiXVAV5hzPdujuSGexLZUNQhPFf2KvHgXgfD0PfyZop3DIng-RPZIsq78o8UqQHVxwRkKzGy5OEl8T6US~Ee0QzanilyOc8yR8qJWdU~NKlAWUT6ZuIkoZhlWn3YtnIHcex~N221x7Yc-oBCs6wydJeeSI1gTdDLy2YKv9SbVdYCItA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Plain/Background Plain Neutral\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.576Z\",\"updated_at\":\"2022-03-11T16:02:18.000Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}O\"},{\"key\":\"b226fe5b2de1d986798e7924806eba4d45e28770\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1311\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KLU/ISx/9ucsnThAqZH3gcxU/style_thumbnail_17.png?Expires=1649635200&Signature=QCWuNAWoICbBfUoYmdQKuxDUarOfhtFbIS5yWwYtwGxa5e5vSclFFa-EaV0MCUUPgQzI3NU65grX2l4-Ma19S4KVWCdi4ozEeA59AounV2ITgKvVscXSkSozCNo-X2Gxu7vUHwgjT5AEuhr4RhsEWj-eVs8fhN4SrZ8HMTraYoMNDpcd4Wg14xGaQ~XU8t2J6JZtIGSgBsgbvkY3KvvjbgtIoR~~ZpXVwhtYhtAzNYZP4gGP6Uc8a70UrC6dcCfvCfWuH5-JZ74PyUcAjStLnKrENjgENHexDwowv049N7ZXrFJrXeoCZW1suj3gMEU8wgFK0UwnQ9L3S0IQ7-qBnQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary/Background Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.364Z\",\"updated_at\":\"2022-03-11T16:02:17.995Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}r\"},{\"key\":\"b1d06a9d2bb8785d12e2e4de21c232887ea20b88\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1317\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cIK/QCa/yJFSPm4I4JTPX6QP/style_thumbnail_1.png?Expires=1649635200&Signature=balO-g1~hNh8ohvOigWA7LuDHfCvhDoSlwsx6-nduZ1kc3WLQ8qAZc3Zd5NQHQ9QGdJjYiTR0oruvfY6ylNqZO2DIWsJKHRbE--WFaZ7GwUu9k8-d6eiN3kqDtxktS7TPhMYikUHSBD04T1ROC2EOIz~PoZuA8nGAcioKYwg~tJ0doYSiLTwcdrVJsI0D39cTsFuM4nN0wTLaiWbHS13woB~rmFAeQP~IW-1PSx~FtTUOeQ0nLB-A3wWQudy7XCT7avs0NWhaz999JlojZBgd4pQlRUeIbAd3FhB461TLFjXf9ybZekSM0fFocYSXFH0FbbBhb0ykWAGX8V8Oy8lwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary/Background Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.354Z\",\"updated_at\":\"2022-03-11T16:02:17.991Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}f\"},{\"key\":\"af13416e45fcd15b538aef4c35067516401f9507\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1561\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jwT/dfr/OhjPiRk7nhZhRFIR/style_thumbnail_4.png?Expires=1649635200&Signature=OVF3I~TvmYKPwVCN43ohyIv7xbsopimr9-T2XiukRf2QRuOxBbEgRVmzHgINWAKGsuQ4CDaa~ms6j46nZqU--qDvNGiuPbG3qqQINrwAVCBVHzQdtLlsR9XVz7MvkP2NsqtAugKFUjT2YCPGj3ciFGAWNw697rjgd9QUQYHT3oypeQ1lyuUhOnZIpbdcaW~5NbVmySskHcWm05k4QI3gtILVERxdknWaRo8Y7lKIrS5g3TjnBGaj~NqzAE839z0jn1k3uhqslWLnG5ZUK0toLwedfLg53TwBKbczYwY0V9V4UxXUBdL7y~MBODusRuOJSG3YqzK-1-e3KU-87waJgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary Translucent/Border Tertiary Translucent Pressed\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.953Z\",\"updated_at\":\"2022-03-11T16:02:17.986Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}N\"},{\"key\":\"ae43c2067df6cb30ab2d029de27f69f61d9e6632\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1560\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/qY2/nVY/OHr8oR7d3AHn4PDU/style_thumbnail_1.png?Expires=1649635200&Signature=GOKOlX-mu3mETRaM66UR0L1CqXD7nkTnyiFQw1BCgwv1o1appZde7wcE3kgxrNud1VZ~ov46vrtXc6C~nw4QLKtUtlWGvFv0WyDeBS4nxV0KCsbLBd-PwCxheYo6vaY49QzxOoAuMVaKy-D5CNngF3QFrd5Ibn9-Z63g18BXT6~cUnE2ARZSs9OGe53x44iBdHmL5yUuhGb89AwHIdqLsMnz6IglTdldTZ30P~zQ9lLpkqMbInlw6wqVjhu2JQKSemIuIwZypf8dEEc8MUhSm4IGnlLGpKogvGQhuZtFAA~JM9FMnX2xbauc0DnrLcysqfLN2tSurlPkmm6kVO4qSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary Translucent/Border Tertiary Translucent Hover\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.922Z\",\"updated_at\":\"2022-03-11T16:02:17.981Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}M\"},{\"key\":\"ac5753c72eb25f71f36337a7b875727ffdad8ee8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1484\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/9T1/0ov/9EqYc6EVXoDW55Dg/style_thumbnail_54.png?Expires=1649635200&Signature=Z8XhfLlKj3honKOsJTaX89SW563VlMU0ja0TJdWcjokXHflC~9xT7Oc4Fs4E-jTdX77OWau95LA7nOKCWLlLFN1C6Ob4wmqwZZ13A1h66~4V0AtRbAEs75Nmaq4hI3H1yRb5PNNL~q5VXX71kLXELE~LMWnViIYbvHLFoIrsIqpdA~UK3FKg2y2f2sg5xezfZW4dAQd-flws6BRxOo8OXIwTiAzQIqCgHJZUM107iOwIOSAnWJTuCGEl1qWaSGf657q2XHZOFnxvMvNR9EBAYBQe3qF~5UzRACA11W~82CSt5GA73wSk4ScV~yTF9SPcgXVkf8Rp6haM4DX2t9M0Fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.383Z\",\"updated_at\":\"2022-03-11T16:02:17.976Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"T\"},{\"key\":\"abba715d7bb0ab93f9ad5751116d6cec72a72f33\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"36:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jeR/33K/vF8mi3ASKL49J4xV/style_thumbnail_26.png?Expires=1649635200&Signature=eRh5nD4e7bA5EPF9uWf7TLJeG8RDlOVz754QqqDkh1VBMbqaA43pk0n~-R8qejM~GfekfSvF5uH6p~0bkRoOb7WHFTLPzuZOAcLoZ8iCLLDb-Sts2V3QAIWeGZvS13KQtQ-gMst-pWdk~8yo0AJwf9kiyynJIFCFIvK3G6GHDANqUGdPgT~ieF6Trnfie7BTKvQy4T-l1U-zb~Uw4BSIBc0hwhczXK569EaSQJpseMgUjsP8UzBU5xiBfbFW776omQZJolzMHgBP9JWZq7vp5boZgqRTV1QmbGV49Y4jutpdaNb5TvXpMPspdHSdd628Q9V5xYYOZ09o27dizVibyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Plain/Background Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.280Z\",\"updated_at\":\"2022-03-11T16:02:17.972Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}}r\"},{\"key\":\"a9b8878b6c2fba465183fba4303da7d86dc8b46f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"82:1401\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/AsN/7UI/D0HEnki5EM5paDxO/style_thumbnail_0.png?Expires=1649635200&Signature=TUpTm~ez~SOrDIK6uKuc41mVp4rO7sS447E0QCOjWARFWDXKkJPiLYlPg7N186VwgaRTbnPZ2LmGTZEOGB25j5ZHZs0laKIRixW6xJZylTz1AF4XydGJlNwWZ671THoEtWt9mz4fv0ElWVxIq~m1Sf-tP72eFPrNMVagsHZydC87BeAbqSTK6VyofLmhahtACBgKQJgySWkzL45jAFTg4a2LudMWtLAfjpKhwoxEqwfpPnLiP1IiJezVh4cQBAMVvawNjvwoIkcavuEEuuCKvg3QxvpHjD0bDWPfB3No59kp91UPraXRoqoLjqTypINHhpizcX-qhU6y1blx4qiSSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Foreground On Disabled\",\"description\":\"\",\"created_at\":\"2022-03-02T11:48:02.118Z\",\"updated_at\":\"2022-03-11T16:02:17.967Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~8\"},{\"key\":\"a2ae03c63dda81608a24af4e0f55e5cba08539bb\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1085\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KmA/KVg/gv8GSH01Ocn2EI0g/style_thumbnail_66.png?Expires=1649635200&Signature=WkxfBidsn1bXXhdKnft9HcQrjj-vI8p-C-RxMJJS1QxVV4DXakSkMyBWSIU0s5Pq1aVd7LZAZZ5LvzgBV2koO4UmttFLhYzyYmT0AqqzRiEAK91ku2hJCti1y-jbtSRVqD8MOqZ4VB9tRlkBVQJJ2byhhTAN9KVOmKed54gPi5lh55KgOoYJQF7hK9uqvDj-zTy0E8-821iAoWVqqFwwYD9WPN2j-2lr7GjtGB0qt7861olEudbhkvZ5Pi5wj1DnKHgq5BVPW~ylO53zD0pgYVKHJ~huY9q82Nc2UMlNda2glfzzf0HLBi-lCtLRis2~wmBStEgLvmWzdx8e2~a1sQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.443Z\",\"updated_at\":\"2022-03-11T16:02:17.963Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"G\"},{\"key\":\"a098e3653b26038429db4ea47eedc4dcd6c47da6\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1436\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jUW/y0J/Yk20GRMmlRyxkqUJ/style_thumbnail_56.png?Expires=1649635200&Signature=dwXZa3y18M9MvI8LJnOjDbWwd4t~1gSd8Lt3nOD~PrbZ5AZQB1x9a9lhWhEN3Ti3sX1k7othbeAQDo0bSv7ke1h9uuUnNaaf8aFAyWsu76ZC~GNwk6F8V5rbk4pRiueABATUqkYU4~MlF2TslE7ODb8KOsSmHcO-EegvVn7mXk1C5iN2IxD4D9Md0YjW0LH-pxm8jiUTDAWm2jQgZ1sW~nL1if4h2OCRyfcgL75v8aT1gVoWbmXnVAuqEloX0Z3CZrr3QOm8MGYev11dZHqw0v8S0GNJi1TCDJ2tqnkQoxxiH5jtNAwAEE~DHjAkMgl-AQIgikhnL4n301qXAOIVNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.392Z\",\"updated_at\":\"2022-03-11T16:02:17.958Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"R\"},{\"key\":\"a060aa93813b147aad4cd2dcfdb34de91b5a128c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1305\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wCX/1Nc/3smnmy3aZEb0jt2r/style_thumbnail_32.png?Expires=1649635200&Signature=CP7irQWMtDFaiQ1YVRMBbQrk9WdQ5PbzLXH4NKEzNcwR1Y5u2D20IEmHc2DBDFs4~o58untC~fJZvM8aDhyJaVLYGIcJI-qzULu47hGBa8h~hZ1OALrd-4IUfZtAlISYSqxWZfsLBCSgkocFV3xdC6dIZDb4qQi5uae9-zkFzixfcSNmALvXW0P4-p0Vr3EoWez21i~BOWAaV4XStEXdCBlGtt8k2Ko6VAYCwEoB53MM1km~as-jmLlVy6nijQSasM6rYowfmyV3zuplnCoGpBtooOlnOd7JDAaWcn8mN74bp46CpfSUxBR2AAdm4hOTzq~hrBovF6tOj20vgRSAAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Primary Accent/Border Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.276Z\",\"updated_at\":\"2022-03-11T16:02:17.953Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@x\"},{\"key\":\"9eb71027b53e7d03955f2defabc70ae991858b06\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"87:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/OdD/4RD/idONBzP8guOzCp2U/style_thumbnail_1.png?Expires=1649635200&Signature=U5lm~tIdj6I2pePH7aOCSumA3BkLewUV36d9OFQDYXdgI7SML8yc388Teqm3Ro~BsC84I03eK7C7mOyBh5xB6GwOdnJTitIMtSYQ1gyPQGblPfL4ewC5AG-fmJ0GEfdcpP-cNT-5NyMcVQL5Y~DQ-5Sk2gPra2vrOfIUUF~7RdtbkJj~~sBeQnCBddCnT1e1cB8fq35Rn0ZNPropb-8d~U9lhxDpxR7eGtYtWV4Mu1j~PL9FYJZ8SsM3zycPbPvnzFw5CR1dz-I11cCFUlazfeNe4TDcW2~PS7SbTKvU8u5E-2mvUR9xFpj8NQqbGmuzSLHTGfsqGHLY5P1V5yeLlg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Error\",\"description\":\"\",\"created_at\":\"2022-03-02T14:32:53.650Z\",\"updated_at\":\"2022-03-11T16:02:17.948Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"aO\"},{\"key\":\"9e16881ef2bd421ed25d497b337374c3e3203bdc\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1411\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/P4A/xS9/b2W8NVSLxQuXpje2/style_thumbnail_2.png?Expires=1649635200&Signature=erX41fbFwYGGcTzbJH10r7JoV2STrqtanrMZMYRDEj-20K58QwIEEnMJQgfknnNko~7016Glr-uyJ-cmYwB-Z2f9IeshuzlPf6tkiuz7YlcQY6IHP0bBuognvcuITI7-brPx0ZFmShf3TsxSh7wn-sSUiefB62HPfMWNp8Vvgi8gwp9PYU55wnmlydZG3JcgmHxwuHPiTQp2lWPw7IdO~wJe381ur9c8yEotWgqQE6cbymNmM7vrPWtob0opz2DRJsvnTenfAi3GCnVv3u82upaA-iyWZwBINTrnvfGkg~jKfYmwxN7pKLdoGNgKwJUpwNSIn9njOvSf0LkfPXx8Cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Tertiary/Background Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.247Z\",\"updated_at\":\"2022-03-11T16:02:17.939Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}}}r\"},{\"key\":\"9b7f80e1c7a304913cf72596a20b05fcd7504c4d\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1510\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ce8/Ir4/xsXTGySySiOr98p2/style_thumbnail_33.png?Expires=1649635200&Signature=cl2L-SICuz9OBCU~oZ3YZ5G-CZ3eakdmk~8pk8hv4Vx~XMFndjbu33h62lk0~zIbiwRkKwVlrxLwraQkoFIpiFuuZG0i5duZkSa3mO7JEX8yuJZHhG91ZEvD4O1Sk2ksXqWjY-uFYVNj2Kg1LrvbKEaNFE6HyQfglcKsjPpDXqQ1saQWNQYv1engEc8m8Ajb6von3EPeBC02kFkvbO5yt47KrmNYA~bc35oPUopKLPOBAtNLyOYHoT-7r2zvMVY-lC5~qAV91T-6kg~QJXTH8Hw5wRtZNdnlW60Q75-skfkLZBmu6123o0OmKftqTutUMEN0fuMC9NJlA8YuVz4Krg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Buttons/Secondary Translucent/Border Secondary Translucent Enabled\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.975Z\",\"updated_at\":\"2022-03-11T16:02:17.935Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@}}}}x\"},{\"key\":\"fdbfdc8a60fe3e0bfdee60336d8cf5b5bb1a1ce5\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1515\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Zcz/Ff2/TiTA3kc49iZx9vdF/style_thumbnail_53.png?Expires=1649635200&Signature=Bress9rHazgJRqtDH32~ILyPPR5prxOa0ezmojHKBFty7Rd-5poj0fdsePARqvBF~hY3pXSTXxuDWlfbIAwlKRHectV2lkm2h269jXw4MPBiFFfhmoTApu-5OHoCU3zT4OvtIqsSLlUxErF2KHIf7xsbPSD-XQyGGq6calVity~xIEFhwVVY4lD9EaKdUMg-SESEuC2X7Dy0LoKCioBxUeNJaycMPxdSUR5nXclhQCfLZdnxJt0sZcVetrA9Fd-NRnkl7QTbRm~BT5UpBRQ14ddkoXPtU3lKWRBmxhjqgCzqgB9ZhUnW79jn-zmsk1Pznaj2KqeHjrGN9aR~zIWU9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Degraded\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.378Z\",\"updated_at\":\"2022-03-11T16:02:18.232Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"Y\"},{\"key\":\"f9c3fc076dc2bbd0279fbbdde2961d5011fc1a4b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/eXp/gs7/NpqQWETMcxc9xV2R/style_thumbnail_71.png?Expires=1649635200&Signature=Qa6-Kxg3yqejrmklpHD1zZA~smphhIfuME75fNOmo6YaMw3yNA1vi~Fz6Zw5nUWaa8CXbOaRGmrXDodfbBB5Bg0w0dWS8PVoRPDu~s-acqBM5bVCEI2Eouqo~NbDQLXYb9VopCoHuT3vU-I3spdCo1uCKf2Fy8kHWEyswijhTZCAAL7hG2klzXcVH5NvpRpCHC9oe38jxtEnM6RGS42fL9dnCysmndJwc-qeuWmi6Yjno4lsosCF8JFqZZg5ANyk0IQh28RLtKBuMlSAAuMWVDf-janaN4AMmfzZMH6-SkD3CDa8NfbGQy0IgXyQ79XXp6djsI6RUcDlECmQOhYe8g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unknown\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.468Z\",\"updated_at\":\"2022-03-11T16:02:18.213Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"\\\\\"},{\"key\":\"f673a03ddc76c4f14bf3bcbd028201a8f49c3550\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1431\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ooV/lNx/lh8HnreCYSJkAzo1/style_thumbnail_59.png?Expires=1649635200&Signature=aHoj6X9iGtbGf~vak~dCbBk8LDOleQRbte7RAlXc1xJ~qcB4FmjxFIoy8vDXE7~RmgkAgb0yLqAhJjLzZ~wYfO-Bz5m35efXQuzzk5pKON8ebhLcUySY8-NzdhcsQWoGIWdz6-BwBFj8N~Wz4z9SJtNwDkEpEJfhU5akya9G5Xoeim3gBOJ2Tu7EYddk1A3EQTAw~8PFfEOH1Ka7u1B1IrF9l7-Uzg-GOSjuznck6CGRyvLEryft0jZSYPkyl2Avi8DZ3ZXJqVi6plsfdUo2zOW-7jua1hzd7TqNR98MxgO03N9RI6u9xQQBJyUiDNhIQt7VkWFaMn3QDMTBVFOc9g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Critical\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.407Z\",\"updated_at\":\"2022-03-11T16:02:18.200Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"M\"},{\"key\":\"f49d66a80f6c2bae52643a5553035a9add1b837b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1086\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/u60/6tq/Y24CQgxRLUUyzDQN/style_thumbnail_39.png?Expires=1649635200&Signature=IrIh1Io3Suvs96GKfUF0lqRrnn8tT5LXJFIdF6rXLo~EzIThqs5ziQI8~1hsC7kcqdAnbtnX4kCMhkbrRYagA~h0c1xqXlZZzjE~kuNy~rQb4E43n-uODkZ4fNREN40D9hfGWNA4OEOU5udT9Wd1FzvWWLsYAGHgoqWvl7nzbXJuL25qxWMRXeESS2qtWpxkQ6UCtNccJ2mFNj47cLkOTxLOlTqMgsKxWnTUFZEH7Cywh9K1RVMfQxCi0zYHhxjLzsG6UU5-OHs5ezBioBIiQ9Vh3n0zOZ65pztRldFHf3kp13itSoDYJhmgG0OOk72ktek6hClXCm8A4RDiXJLhLA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.310Z\",\"updated_at\":\"2022-03-11T16:02:18.195Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"H\"},{\"key\":\"e99939e903afb4f44f4a3a31914e44efc39a1efb\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2382\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/naE/ZwC/7kDsI3uNcyRYVzht/style_thumbnail_83.png?Expires=1649635200&Signature=INC1q7-M4vYhTc0~mQD9jz~5eWcOhRZXTEp0u2C0L3Xa28LEXEymJnpPIHDDK7DxQgbOWjQrrXOS6~UPqoCm4ycwKyu0XsASYLepnbszksYU4dnJ9EchkFfbaARLVvmb3ks6dMMn5bMsRVaEd4rOO8eki63LJJfQHT0cg-P3~6jTVj7BX6bCSx6Xivs2NrmtWkL6xA1ajStI-RDXQNBTCPiYG35sl3dMcYzHYv9TlyZRimDBJ4kCP~VLp-uUVwfGzT9Of-sfCxyNA-8dmMpwa0WRvO6nYAaInCHAs9gULrPcr93S25AyWrYzQT9E3gBxz~ws3TMpthm0Y4OBHKd8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary Inverted\",\"description\":\"Inverted Secondary text and icon color\",\"created_at\":\"2022-02-17T15:35:46.527Z\",\"updated_at\":\"2022-03-11T16:02:18.163Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"0\"}]},\"i18n\":null}");

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/applyMatrixToPoint.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/applyMatrixToPoint.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyMatrixToPoint = applyMatrixToPoint;

function applyMatrixToPoint(matrix, point) {
  return [point[0] * matrix[0][0] + point[1] * matrix[0][1] + matrix[0][2], point[0] * matrix[1][0] + point[1] * matrix[1][1] + matrix[1][2]];
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/clone.js":
/*!******************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/clone.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clone;

/**
 *  this function returns clone the object
 */
function clone(val) {
  const type = typeof val;

  if (type === 'undefined' || type === 'number' || type === 'string' || type === 'boolean' || type === 'symbol' || val === null) {
    return val;
  } else if (type === 'object') {
    if (val instanceof Array) {
      return val.map(clone);
    } else if (val instanceof Uint8Array) {
      return new Uint8Array(val);
    } else {
      const o = {};

      for (const key in val) {
        o[key] = clone(val[key]);
      }

      return o;
    }
  }

  throw 'unknown';
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/convertColor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/convertColor.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.figmaRGBToWebRGB = figmaRGBToWebRGB;
exports.webRGBToFigmaRGB = webRGBToFigmaRGB;
exports.figmaRGBToHex = figmaRGBToHex;
exports.hexToFigmaRGB = hexToFigmaRGB;
const namesRGB = ['r', 'g', 'b'];
/**
 * this function converts figma color to RGB(A) (array)
 */
// figmaRGBToWebRGB({r: 0.887499988079071, g: 0.07058823853731155, b: 0.0665624737739563})
//=> [226, 18, 17]

function figmaRGBToWebRGB(color) {
  const rgb = [];
  namesRGB.forEach((e, i) => {
    rgb[i] = Math.round(color[e] * 255);
  });
  if (color['a'] !== undefined) rgb[3] = Math.round(color['a'] * 100) / 100;
  return rgb;
}
/**
 * this function converts RGB(A) color (array) to figma color
 */
// webRGBToFigmaRGB([226, 18, 17])
//=> {r: 0.8862745098039215, g: 0.07058823529411765, b: 0.06666666666666667}


function webRGBToFigmaRGB(color) {
  const rgb = {};
  namesRGB.forEach((e, i) => {
    rgb[e] = color[i] / 255;
  });
  if (color[3] !== undefined) rgb['a'] = color[3];
  return rgb;
}
/**
 * this function converts figma color to HEX (string)
 */
// figmaRGBToHex({ r: 0, g: 0.1, b: 1 })
//=> #001aff


function figmaRGBToHex(color) {
  let hex = '#';
  const rgb = figmaRGBToWebRGB(color);
  hex += ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);

  if (rgb[3] !== undefined) {
    const a = Math.round(rgb[3] * 255).toString(16);

    if (a.length == 1) {
      hex += '0' + a;
    } else {
      if (a !== 'ff') hex += a;
    }
  }

  return hex;
}
/**
 * this function converts HEX color (string) to figma color
 */
// hexToFigmaRGB(#001aff)
//=> { r: 0, g: 0.10196078431372549, b: 1 }


function hexToFigmaRGB(color) {
  let opacity = '';
  color = color.toLowerCase();
  if (color[0] === '#') color = color.slice(1);

  if (color.length === 3) {
    color = color.replace(/(.)(.)(.)?/g, '$1$1$2$2$3$3');
  } else if (color.length === 8) {
    const arr = color.match(/(.{6})(.{2})/);
    color = arr[1];
    opacity = arr[2];
  }

  const num = parseInt(color, 16);
  const rgb = [num >> 16, num >> 8 & 255, num & 255];

  if (opacity) {
    rgb.push(parseInt(opacity, 16) / 255);
    return webRGBToFigmaRGB(rgb);
  } else {
    return webRGBToFigmaRGB(rgb);
  }
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/extractImageCropParams.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/extractImageCropParams.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractImageCropParams = extractImageCropParams;

var _matrixInverse = _interopRequireDefault(__webpack_require__(/*! matrix-inverse */ "./node_modules/matrix-inverse/matrix-inverse.js"));

var _applyMatrixToPoint = __webpack_require__(/*! ./applyMatrixToPoint */ "./node_modules/@figma-plugin/helpers/dist/helpers/applyMatrixToPoint.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method can extract the image crop rotation, scale (/size) and position.
 *
 * @param shapeWidth
 * @param shapeHeight
 * @param t
 */
function extractImageCropParams(shapeWidth, shapeHeight, t) {
  const transform = t.length === 2 ? [...t, [0, 0, 1]] : [...t];
  const mxInv = (0, _matrixInverse.default)(transform);
  const points = [[0, 0], [1, 0], [1, 1], [0, 1]].map(p => (0, _applyMatrixToPoint.applyMatrixToPoint)(mxInv, p));
  const angle = Math.atan2(points[1][1] - points[0][1], points[1][0] - points[0][0]);
  const sx = Math.sqrt(Math.pow(points[1][0] - points[0][0], 2) + Math.pow(points[1][1] - points[0][1], 2));
  const sy = Math.sqrt(Math.pow(points[2][0] - points[1][0], 2) + Math.pow(points[2][1] - points[1][1], 2));
  return {
    rotation: angle * (180 / Math.PI),
    scale: [sx, sy],
    size: [sx * shapeWidth, sy * shapeHeight],
    position: [-points[0][0] * shapeWidth, -points[0][1] * shapeHeight]
  };
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/extractLinearGradientStartEnd.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/extractLinearGradientStartEnd.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractLinearGradientParamsFromTransform = extractLinearGradientParamsFromTransform;

var _matrixInverse = _interopRequireDefault(__webpack_require__(/*! matrix-inverse */ "./node_modules/matrix-inverse/matrix-inverse.js"));

var _applyMatrixToPoint = __webpack_require__(/*! ./applyMatrixToPoint */ "./node_modules/@figma-plugin/helpers/dist/helpers/applyMatrixToPoint.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method can extract the x and y positions of the start and end of the linear gradient
 * (scale is not important here)
 *
 * @param shapeWidth number
 * @param shapeHeight number
 * @param t Transform
 */
function extractLinearGradientParamsFromTransform(shapeWidth, shapeHeight, t) {
  const transform = t.length === 2 ? [...t, [0, 0, 1]] : [...t];
  const mxInv = (0, _matrixInverse.default)(transform);
  const startEnd = [[0, 0.5], [1, 0.5]].map(p => (0, _applyMatrixToPoint.applyMatrixToPoint)(mxInv, p));
  return {
    start: [startEnd[0][0] * shapeWidth, startEnd[0][1] * shapeHeight],
    end: [startEnd[1][0] * shapeWidth, startEnd[1][1] * shapeHeight]
  };
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/extractRadialOrDiamondGradientParams.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/extractRadialOrDiamondGradientParams.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractRadialOrDiamondGradientParams = extractRadialOrDiamondGradientParams;

var _matrixInverse = _interopRequireDefault(__webpack_require__(/*! matrix-inverse */ "./node_modules/matrix-inverse/matrix-inverse.js"));

var _applyMatrixToPoint = __webpack_require__(/*! ./applyMatrixToPoint */ "./node_modules/@figma-plugin/helpers/dist/helpers/applyMatrixToPoint.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method can extract the rotation (in degrees), center point and radius for a radial or diamond gradient
 *
 * @param shapeWidth
 * @param shapeHeight
 * @param t
 */
function extractRadialOrDiamondGradientParams(shapeWidth, shapeHeight, t) {
  const transform = t.length === 2 ? [...t, [0, 0, 1]] : [...t];
  const mxInv = (0, _matrixInverse.default)(transform);
  const centerPoint = (0, _applyMatrixToPoint.applyMatrixToPoint)(mxInv, [0.5, 0.5]);
  const rxPoint = (0, _applyMatrixToPoint.applyMatrixToPoint)(mxInv, [1, 0.5]);
  const ryPoint = (0, _applyMatrixToPoint.applyMatrixToPoint)(mxInv, [0.5, 1]);
  const rx = Math.sqrt(Math.pow(rxPoint[0] - centerPoint[0], 2) + Math.pow(rxPoint[1] - centerPoint[1], 2));
  const ry = Math.sqrt(Math.pow(ryPoint[0] - centerPoint[0], 2) + Math.pow(ryPoint[1] - centerPoint[1], 2));
  const angle = Math.atan((rxPoint[1] - centerPoint[1]) / (rxPoint[0] - centerPoint[0])) * (180 / Math.PI);
  return {
    rotation: angle,
    center: [centerPoint[0] * shapeWidth, centerPoint[1] * shapeHeight],
    radius: [rx * shapeWidth, ry * shapeHeight]
  };
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/findMethods.js":
/*!************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/findMethods.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAll = void 0;

var _ = __webpack_require__(/*! .. */ "./node_modules/@figma-plugin/helpers/dist/index.js");

/**
 * Custom implementation of the figma.findAll method, which runs x1000 times faster.
 *
 * ### Usage example
 * ```ts
 * import { findAll, isTextNode } from "@figma-plugin/helpers"
 *
 * const textNodes = findAll(figma.currentPage.children, isTextNode)
 * ```
 *
 * ### How to replace native `figma.findAll`
 * ```diff
 * + import { findAll } from "@figma-plugin/helpers"
 *
 * - const textNodes = figma.currentPage.findAll((node) => node.type === "TEXT");
 * + const textNodes = findAll(figma.currentPage.children, (node) => node.type === "TEXT")
 * ```
 */
const findAll = (nodes, iteratee) => {
  const result = [];

  for (let i = 0; i < nodes.length; i++) {
    if (iteratee(nodes[i], i, nodes)) {
      result.push(nodes[i]);
    } else if ((0, _.hasChildren)(nodes[i])) {
      result.push(...findAll(nodes[i]['children'], iteratee));
    }
  }

  return result;
};

exports.findAll = findAll;

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/getAllFonts.js":
/*!************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/getAllFonts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAllFonts;

/**
 * this function returns all used fonts to textNodes
 */
function getAllFonts(textNodes) {
  const fonts = [];

  const pushUnique = font => {
    if (!fonts.some(item => item.family === font.family && item.style === font.style)) {
      fonts.push(font);
    }
  };

  for (const node of textNodes) {
    if (node.fontName === figma.mixed) {
      const len = node.characters.length;

      for (let i = 0; i < len; i++) {
        const font = node.getRangeFontName(i, i + 1);
        pushUnique(font);
      }
    } else {
      pushUnique(node.fontName);
    }
  }

  return fonts;
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/getBoundingRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/getBoundingRect.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBoundingRect;

var _isUndefined2 = _interopRequireDefault(__webpack_require__(/*! lodash/isUndefined */ "./node_modules/lodash/isUndefined.js"));

var _applyMatrixToPoint = __webpack_require__(/*! ./applyMatrixToPoint */ "./node_modules/@figma-plugin/helpers/dist/helpers/applyMatrixToPoint.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  this function return a bounding rect for an nodes
 */
// x/y absolute coordinates
// height/width
// x2/y2 bottom right coordinates
function getBoundingRect(nodes) {
  const boundingRect = {
    x: 0,
    y: 0,
    x2: 0,
    y2: 0,
    height: 0,
    width: 0
  };

  if (nodes.length) {
    const xy = nodes.reduce((rez, node) => {
      if (!node.absoluteTransform) {
        console.warn('Provided node haven\'t "absoluteTransform" property, but it\'s required for calculations.');
        return rez;
      }

      if ((0, _isUndefined2.default)(node.height) || (0, _isUndefined2.default)(node.width)) {
        console.warn('Provided node haven\'t "width/height" property, but it\'s required for calculations.');
        return rez;
      }

      const halfHeight = node.height / 2;
      const halfWidth = node.width / 2;
      const [[c0, s0, x], [s1, c1, y]] = node.absoluteTransform;
      const matrix = [[c0, s0, x + halfWidth * c0 + halfHeight * s0], [s1, c1, y + halfWidth * s1 + halfHeight * c1]]; // the coordinates of the corners of the rectangle

      const XY = {
        x: [1, -1, 1, -1],
        y: [1, -1, -1, 1]
      }; // fill in

      for (let i = 0; i <= 3; i++) {
        const a = (0, _applyMatrixToPoint.applyMatrixToPoint)(matrix, [XY.x[i] * halfWidth, XY.y[i] * halfHeight]);
        XY.x[i] = a[0];
        XY.y[i] = a[1];
      }

      XY.x.sort((a, b) => a - b);
      XY.y.sort((a, b) => a - b);
      rez.x.push(XY.x[0]);
      rez.y.push(XY.y[0]);
      rez.x2.push(XY.x[3]);
      rez.y2.push(XY.y[3]);
      return rez;
    }, {
      x: [],
      y: [],
      x2: [],
      y2: []
    });
    const rect = {
      x: Math.min(...xy.x),
      y: Math.min(...xy.y),
      x2: Math.max(...xy.x2),
      y2: Math.max(...xy.y2)
    };
    boundingRect.x = rect.x;
    boundingRect.y = rect.y;
    boundingRect.x2 = rect.x2;
    boundingRect.y2 = rect.y2;
    boundingRect.width = rect.x2 - rect.x;
    boundingRect.height = rect.y2 - rect.y;
  }

  return boundingRect;
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/getCSSStyles.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/getCSSStyles.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextNodeCSS = void 0;

var _get2 = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stringValueToCss = value => {
  if (/right|bottom/i.test(value)) {
    return 'flex-end';
  } else if (/left|top/i.test(value)) {
    return 'flex-start';
  } else if (/center/i.test(value)) {
    return 'center';
  } else if (/lower/i.test(value)) {
    return 'lowercase';
  } else if (/upper/i.test(value)) {
    return 'uppercase';
  } else if (/title/i.test(value)) {
    return 'capitalize';
  } else {
    return 'none';
  }
};

const unitValueToCss = ({
  unit,
  value
}) => {
  if (unit === 'PERCENT') {
    return `${value}%`;
  } else if (unit === 'PIXELS') {
    return `${value}px`;
  } else {
    return 'auto';
  }
};

const isUnitValue = obj => {
  return obj.hasOwnProperty('unit');
};

const getStyleValue = (node, key, exactString) => {
  const value = (0, _get2.default)(node, key);

  if (value === undefined) {
    return null;
  } else if (typeof value === 'string') {
    return exactString ? value.toLowerCase().trim() : stringValueToCss(value.toLowerCase().trim());
  } else if (typeof value === 'number') {
    return `${value}px`;
  } else if (isUnitValue(value)) {
    return unitValueToCss(value);
  } else {
    console.warn('Unexpected value: ', value);
  }
};
/**
 *  get CSS styles of TextNode
 */


const getTextNodeCSS = node => {
  return {
    position: 'absolute',
    top: getStyleValue(node, 'y'),
    left: getStyleValue(node, 'x'),
    width: getStyleValue(node, 'width'),
    height: getStyleValue(node, 'height'),
    display: 'flex',
    'justify-content': getStyleValue(node, 'textAlignHorizontal'),
    'align-items': getStyleValue(node, 'textAlignVertical'),
    'text-indent': getStyleValue(node, 'paragraphIndent'),
    'letter-spacing': getStyleValue(node, 'letterSpacing'),
    'line-height': getStyleValue(node, 'lineHeight'),
    'font-size': getStyleValue(node, 'fontSize'),
    'font-style': getStyleValue(node, 'fontName.style', true),
    'font-weight': getStyleValue(node, 'fontName.style', true),
    'text-decoration': getStyleValue(node, 'textDecoration', true),
    'text-transform': getStyleValue(node, 'textCase'),
    'font-family': `${getStyleValue(node, 'fontName.family', true)} ${getStyleValue(node, 'fontName.style', true)}`
  };
}; // this file can be extended to support all node types


exports.getTextNodeCSS = getTextNodeCSS;

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/getNodeIndex.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/getNodeIndex.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNodeIndex;

/**
 * this function allows you to get the return the index of node in its parent
 */
function getNodeIndex(node) {
  return node.parent.children.indexOf(node);
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/getPage.js":
/*!********************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/getPage.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPage;

var _isTypeNode = __webpack_require__(/*! ./isTypeNode */ "./node_modules/@figma-plugin/helpers/dist/helpers/isTypeNode.js");

/**
 * this function allows you to pass in a node and return its pageNode
 */
function getPage(node) {
  if (!(0, _isTypeNode.isPageNode)(node)) {
    return getPage(node.parent);
  } else {
    return node;
  }
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/getRelativePosition.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/getRelativePosition.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRelativePosition = exports.getTopLevelParent = void 0;

var _ = __webpack_require__(/*! ../ */ "./node_modules/@figma-plugin/helpers/dist/index.js");

/**
 * Return top level parent for node before PageNode.
 * For example:
 * ```js
 * // for structure below
 * // Page / Frame / Group1 / Group2 / Text
 *
 * getTopLevelParent(Text) // Frame
 * ```
 */
const getTopLevelParent = node => {
  if (node && node.parent && !(0, _.isPageNode)(node.parent)) {
    return getTopLevelParent(node.parent);
  } else {
    return node;
  }
};
/**
 * Calculate relative position of node based on provided parent or top level parent.
 * For example:
 * ```js
 * // for structure below
 * // Page / Frame / Group1 / Group2 / Text
 *
 * getRelativePosition(Text, Group1) // will calculate { x, y } based on Group1
 *
 * getRelativePosition(Text) // will calculate { x, y } based on Frame
 * ```
 **/


exports.getTopLevelParent = getTopLevelParent;

const getRelativePosition = (node, relativeNode) => {
  relativeNode = relativeNode || getTopLevelParent(node);
  return {
    x: Math.abs(Math.round(relativeNode.absoluteTransform[0][2] - node.absoluteTransform[0][2])),
    y: Math.abs(Math.round(relativeNode.absoluteTransform[1][2] - node.absoluteTransform[1][2]))
  };
};

exports.getRelativePosition = getRelativePosition;

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/hasChildren.js":
/*!************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/hasChildren.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasChildren = void 0;

/**
 * Checks node to have children nodes
 * For example:
 *
 * ```ts
 * // BEFORE
 * console.log(node.children) // throw TS error "Property 'children' does not exist on type ..."
 *
 * // AFTER
 * if (hasChildren(node)) {
 *  console.log(node.children) // valid code
 * }
 * ```
 *
 */
const hasChildren = node => Boolean(node['children']);

exports.hasChildren = hasChildren;

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/isPartOfInstance.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/isPartOfInstance.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPartOfInstance;

/**
 * this function allows you to check whether a node is part of an instance
 */
function isPartOfInstance(node) {
  const parent = node.parent;

  if (parent.type === 'INSTANCE') {
    return true;
  } else if (parent.type === 'PAGE') {
    return false;
  } else {
    return isPartOfInstance(parent);
  }
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/isPartOfNode.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/isPartOfNode.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPartOfNode;

/**
 * this function allows you to check whether a node is part of an rootNode
 */
function isPartOfNode(part, rootNode) {
  const parent = part.parent;

  if (parent === rootNode) {
    return true;
  } else if (parent.type === 'PAGE') {
    return false;
  } else {
    return isPartOfNode(parent, rootNode);
  }
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/isTypeNode.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/isTypeNode.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOneOfNodeType = exports.isComponentNode = exports.isInstanceNode = exports.isTextNode = exports.isFrameNode = exports.isGroupNode = exports.isPageNode = void 0;

/**
 * Checks node to be PageNode
 */
const isPageNode = node => {
  return node.type === 'PAGE';
};
/**
 * Checks node to be GroupNode
 */


exports.isPageNode = isPageNode;

const isGroupNode = node => {
  return node.type === 'GROUP';
};
/**
 * Checks node to be FrameNode
 */


exports.isGroupNode = isGroupNode;

const isFrameNode = node => {
  return node.type === 'FRAME';
};
/**
 * Checks node to be TextNode
 */


exports.isFrameNode = isFrameNode;

const isTextNode = node => {
  return node.type === 'TEXT';
};
/**
 * Checks node to be InstanceNode
 */


exports.isTextNode = isTextNode;

const isInstanceNode = node => {
  return node.type === 'INSTANCE';
};
/**
 * Checks node to be ComponentNode
 */


exports.isInstanceNode = isInstanceNode;

const isComponentNode = node => {
  return node.type === 'COMPONENT';
};
/**
 * Checks node to be one of provided types
 */


exports.isComponentNode = isComponentNode;

const isOneOfNodeType = (node, typeList) => {
  return typeList.includes(node.type);
};

exports.isOneOfNodeType = isOneOfNodeType;

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/isVisibleNode.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/isVisibleNode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVisibleNode;

/**
 * This helper recursively checks all parents for visibility, to guarantee that's node is visible
 */
function isVisibleNode(node) {
  if (node && node.parent) {
    if (node.visible && node.parent.type !== 'PAGE') {
      return isVisibleNode(node.parent);
    } else {
      return node.visible;
    }
  } else {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/loadFonts.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/loadFonts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadFonts;

/**
 * this function asynchronously loads the passed fonts
 */
async function loadFonts(fonts) {
  const promises = fonts.map(font => figma.loadFontAsync(font));
  await Promise.all(promises);
  return fonts;
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/loadUniqueFonts.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/loadUniqueFonts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadUniqueFonts;

var _getAllFonts = _interopRequireDefault(__webpack_require__(/*! ./getAllFonts */ "./node_modules/@figma-plugin/helpers/dist/helpers/getAllFonts.js"));

var _loadFonts = _interopRequireDefault(__webpack_require__(/*! ./loadFonts */ "./node_modules/@figma-plugin/helpers/dist/helpers/loadFonts.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * this function allows you to load only unique fonts asynchronously
 */
async function loadUniqueFonts(textNodes) {
  const fonts = (0, _getAllFonts.default)(textNodes);
  return (0, _loadFonts.default)(fonts);
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/nodeToObject.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/nodeToObject.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodeToObject = void 0;

/**
 * Transform node to object with keys, that are hidden by default.
 * For example:
 * ```ts
 * const node = figma.currentPage.findOne((el) => el.type === "TEXT");
 * console.log(Object.keys(node).length) // 1
 * console.log(Object.keys(nodeToObject(node)).length) // 42
 * console.log(Object.keys(nodeToObject(node, true)).length) // 39
 * ```
 *
 * @param node
 * @param withoutRelations
 */
const nodeToObject = (node, withoutRelations) => {
  const props = Object.entries(Object.getOwnPropertyDescriptors(node.__proto__));
  const blacklist = ['parent', 'children', 'removed', 'masterComponent'];
  const obj = {
    id: node.id,
    type: node.type
  };

  for (const [name, prop] of props) {
    if (prop.get && !blacklist.includes(name)) {
      try {
        if (typeof obj[name] === 'symbol') {
          obj[name] = 'Mixed';
        } else {
          obj[name] = prop.get.call(node);
        }
      } catch (err) {
        obj[name] = undefined;
      }
    }
  }

  if (node.parent && !withoutRelations) {
    obj.parent = {
      id: node.parent.id,
      type: node.parent.type
    };
  }

  if (node.children && !withoutRelations) {
    obj.children = node.children.map(child => nodeToObject(child, withoutRelations));
  }

  if (node.masterComponent && !withoutRelations) {
    obj.masterComponent = nodeToObject(node.masterComponent, withoutRelations);
  }

  return obj;
};

exports.nodeToObject = nodeToObject;

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/parseTextStyle.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/parseTextStyle.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseTextStyle = parseTextStyle;
exports.splitTextStyleIntoLines = splitTextStyleIntoLines;
exports.joinTextLinesStyles = joinTextLinesStyles;
exports.applyTextStyleToTextNode = applyTextStyleToTextNode;
exports.changeCharactersTextStyle = changeCharactersTextStyle;
exports.changeTextStyle = changeTextStyle;

var _uniqWith2 = _interopRequireDefault(__webpack_require__(/*! lodash/uniqWith */ "./node_modules/lodash/uniqWith.js"));

var _cloneDeep2 = _interopRequireDefault(__webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js"));

var _isEqual2 = _interopRequireDefault(__webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js"));

var _getAllFonts = _interopRequireDefault(__webpack_require__(/*! ./getAllFonts */ "./node_modules/@figma-plugin/helpers/dist/helpers/getAllFonts.js"));

var _loadFonts = _interopRequireDefault(__webpack_require__(/*! ./loadFonts */ "./node_modules/@figma-plugin/helpers/dist/helpers/loadFonts.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styleFonts = ['fontSize', 'fontName', 'textCase', 'textDecoration', 'letterSpacing', 'lineHeight', 'fills', 'textStyleId', 'fillStyleId'];
/*
	The function returns the text node styles, splitting them into different arrays, such as:
	[{
		characters: "...",
		... (styles)
	}, ...]

	---

	Returns styles for the entire text:
	parseTextStyle(textNode)
	
	Returns text styles from the 100th to the last character:
	parseTextStyle(textNode, 100)

	Returns styles for the entire text, but only with fontName and textDecoration:
	parseTextStyle(textNode, undefined, undefined, ["fontName", "textDecoration"])
*/

function parseTextStyle(node, start = 0, end, styleName) {
  if (!end) end = node.characters.length;
  if (!styleName) styleName = styleFonts;

  if (end <= start) {
    console.error('Start must be greater than end');
    return [];
  } // string substring, defined styles


  const styleMap = []; // a composing string of a specific style

  let textStyle;
  const names = styleName.map(name => {
    return name.replace(/^(.)/g, $1 => $1.toUpperCase());
  }); // splitting text into substrings by style

  for (let startIndex = start; startIndex < end; startIndex++) {
    const endIndex = startIndex + 1;
    const letter = {
      characters: node.characters[startIndex]
    }; // collection of styles

    names.forEach((n, i) => {
      letter[styleName[i]] = node['getRange' + n](startIndex, endIndex);
    });

    if (textStyle) {
      if (isEqualLetterStyle(letter, textStyle)) {
        // the character has the same properties as the generated substring
        // add it to it
        textStyle.characters += letter.characters;
      } else {
        // style properties are different
        styleMap.push(textStyle); // we start to form a new substring

        textStyle = letter;
      }
    } else {
      // we start forming the first substring
      textStyle = letter;
    }
  }

  styleMap.push(textStyle);
  return styleMap;
}
/*
	Allows to split the styles obtained with parseTextStyle into lines based on newlines.

	If the removeNewlineCharacters parameter == true, the newline characters will be removed.
	RemoveEmptylines == true will remove empty lines.
*/


function splitTextStyleIntoLines(textStyle, removeNewlineCharacters = false, removeEmptylines = false) {
  let line = [];
  let lines = [];
  const re = new RegExp('(.+|(?<=\n)(.?)(?=$))(\n|\u2028)?|(\n|\u2028)', 'g');
  const re2 = new RegExp('\n|\u2028');
  textStyle.forEach((style, index) => {
    if (re2.test(style.characters)) {
      const ls = style.characters.match(re);

      if (ls === null) {
        // text is missing
        line.push(style);
      } else if (ls.length === 1) {
        // the style text consists of 1 line
        line.push(style);
        lines.push(line);
        line = [];
      } else {
        // multiple-line text
        style = (0, _cloneDeep2.default)(style);
        style.characters = ls.shift();
        line.push(style);
        lines.push(line);
        line = [];
        const last = ls.pop(); // dealing with internal text strings

        lines.push(...ls.map(e => {
          style = (0, _cloneDeep2.default)(style);
          style.characters = e;
          return [style];
        }));
        style = (0, _cloneDeep2.default)(style);
        style.characters = last;

        if (last === '') {
          if (!textStyle[index + 1]) {
            // last line final
            lines.push([style]);
          } // else false end of text

        } else {
          // does not end
          line.push(style);
        }
      }
    } else {
      line.push(style);
    }
  });
  if (line.length) lines.push(line); // deleting newline characters

  if (removeNewlineCharacters) {
    lines.forEach(l => {
      const style = l[l.length - 1];
      style.characters = style.characters.replace(re2, '');
    });
  } // deleting empty lines


  if (removeEmptylines) {
    lines = lines.filter(l => l.filter(l => l.characters.replace(re2, '') !== '').length !== 0);
  }

  return lines;
}
/*
	Inverse function of splitTextStyleIntoLines.
	The addNewlineCharacters parameter is responsible for whether you need to add a newline character at the end of each line
*/


function joinTextLinesStyles(textStyle, addNewlineCharacters = false) {
  const tStyle = (0, _cloneDeep2.default)(textStyle);
  let newline = '';

  switch (typeof addNewlineCharacters) {
    case 'boolean':
      if (addNewlineCharacters) newline = '\n';
      break;

    case 'string':
      newline = addNewlineCharacters;
      break;
  } // adding new line characters


  if (addNewlineCharacters && newline) {
    tStyle.forEach((style, i) => {
      if (i !== tStyle.length - 1) style[style.length - 1].characters += newline;
    });
  } // join


  const line = tStyle.shift();
  tStyle.forEach(style => {
    const fitst = style.shift();

    if (isEqualLetterStyle(fitst, line[line.length - 1])) {
      // the style of the beginning of the line differs from the end of the style of the text being compiled
      line[line.length - 1].characters += fitst.characters;
    } else {
      line.push(fitst);
    }

    if (style.length) line.push(...style);
  });
  return line;
}
/*
	Apply the text styles obtained from parseTextStyle to the text node.
	The second parameter can be passed a text node, the text of which will be changed.
*/


async function applyTextStyleToTextNode(textStyle, textNode, isLoadFonts = true) {
  if (isLoadFonts) {
    let fonts = [{
      family: 'Roboto',
      style: 'Regular'
    }];

    if (textStyle[0].fontName) {
      fonts.push(...textStyle.map(e => e.fontName));
    }

    if (textNode) {
      fonts.push(...(0, _getAllFonts.default)([textNode]));
    }

    fonts = (0, _uniqWith2.default)(fonts, _isEqual2.default);
    await (0, _loadFonts.default)(fonts);
  }

  if (!textNode) textNode = figma.createText();
  textNode.characters = textStyle.reduce((str, style) => {
    return str + style.characters;
  }, '');
  let n = 0;
  textStyle.forEach(style => {
    const L = style.characters.length;

    if (L) {
      for (const key in style) {
        if (key !== 'characters') {
          const name = key.replace(/^(.)/g, $1 => $1.toUpperCase());
          textNode['setRange' + name](n, n + L, style[key]);
        }
      }

      n += L;
    }
  });
  return textNode;
}
/*
	Replacing text in textStyle
	If the passed text is shorter than in styles, the extra styles will be removed.
	If the passed text is longer than the styles, the overflow text will get the style of the last character.
*/


function changeCharactersTextStyle(textStyle, characters) {
  textStyle = (0, _cloneDeep2.default)(textStyle);
  let n = 0;
  const length = textStyle.length - 1;
  const charactersLength = characters.length;

  for (let i = 0; i <= length; i++) {
    const s = textStyle[i];
    let l = s.characters.length; // if passed text is longer than text in styles

    if (i == length) l = charactersLength;
    s.characters = characters.slice(n, n + l);
    n += l;

    if (n > charactersLength) {
      // new text is shorter than text in styles
      textStyle = textStyle.splice(0, i + 1);
      continue;
    }
  }

  return textStyle;
}
/*
	Function for changing properties of TextStyle. 
	The beforeValue parameter allows you to specify the value in which the property to be changed should be.
*/


function changeTextStyle(textStyle, styleName, newValue, beforeValue) {
  textStyle = (0, _cloneDeep2.default)(textStyle);
  textStyle.forEach(style => {
    if (beforeValue === undefined || beforeValue !== undefined && (0, _isEqual2.default)(style[styleName], beforeValue)) {
      ;
      style[styleName] = newValue;
    }
  });
  return textStyle;
}
/*comparing character styles to the styles of the composing substring*/


function isEqualLetterStyle(letter, textStyle) {
  let is = true; // iterating over font properties

  for (const key in letter) {
    if (key !== 'characters') {
      if (!(0, _isEqual2.default)(letter[key], textStyle[key])) {
        // property varies
        // stop searching
        is = false;
        break;
      }
    }
  }

  return is;
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/setCharacters.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/setCharacters.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCharacters = void 0;

var _uniqBy2 = _interopRequireDefault(__webpack_require__(/*! lodash/uniqBy */ "./node_modules/lodash/uniqBy.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const setCharacters = async (node, characters, options) => {
  const fallbackFont = (options === null || options === void 0 ? void 0 : options.fallbackFont) || {
    family: 'Roboto',
    style: 'Regular'
  };

  try {
    if (node.fontName === figma.mixed) {
      if ((options === null || options === void 0 ? void 0 : options.smartStrategy) === 'prevail') {
        const fontHashTree = {};

        for (let i = 1; i < node.characters.length; i++) {
          const charFont = node.getRangeFontName(i - 1, i);
          const key = `${charFont.family}::${charFont.style}`;
          fontHashTree[key] = fontHashTree[key] ? fontHashTree[key] + 1 : 1;
        }

        const prevailedTreeItem = Object.entries(fontHashTree).sort((a, b) => b[1] - a[1])[0];
        const [family, style] = prevailedTreeItem[0].split('::');
        const prevailedFont = {
          family,
          style
        };
        await figma.loadFontAsync(prevailedFont);
        node.fontName = prevailedFont;
      } else if ((options === null || options === void 0 ? void 0 : options.smartStrategy) === 'strict') {
        return setCharactersWithStrictMatchFont(node, characters, fallbackFont);
      } else if ((options === null || options === void 0 ? void 0 : options.smartStrategy) === 'experimental') {
        return setCharactersWithSmartMatchFont(node, characters, fallbackFont);
      } else {
        const firstCharFont = node.getRangeFontName(0, 1);
        await figma.loadFontAsync(firstCharFont);
        node.fontName = firstCharFont;
      }
    } else {
      await figma.loadFontAsync({
        family: node.fontName.family,
        style: node.fontName.style
      });
    }
  } catch (err) {
    console.warn(`Failed to load "${node.fontName['family']} ${node.fontName['style']}" font and replaced with fallback "${fallbackFont.family} ${fallbackFont.style}"`, err);
    await figma.loadFontAsync(fallbackFont);
    node.fontName = fallbackFont;
  }

  try {
    node.characters = characters;
    return true;
  } catch (err) {
    console.warn(`Failed to set characters. Skipped.`, err);
    return false;
  }
};

exports.setCharacters = setCharacters;

const setCharactersWithStrictMatchFont = async (node, characters, fallbackFont) => {
  const fontHashTree = {};

  for (let i = 1; i < node.characters.length; i++) {
    const startIdx = i - 1;
    const startCharFont = node.getRangeFontName(startIdx, i);
    const startCharFontVal = `${startCharFont.family}::${startCharFont.style}`;

    while (i < node.characters.length) {
      i++;
      const charFont = node.getRangeFontName(i - 1, i);

      if (startCharFontVal !== `${charFont.family}::${charFont.style}`) {
        break;
      }
    }

    fontHashTree[`${startIdx}_${i}`] = startCharFontVal;
  }

  await figma.loadFontAsync(fallbackFont);
  node.fontName = fallbackFont;
  node.characters = characters;
  console.log(fontHashTree);
  await Promise.all(Object.keys(fontHashTree).map(async range => {
    console.log(range, fontHashTree[range]);
    const [start, end] = range.split('_');
    const [family, style] = fontHashTree[range].split('::');
    const matchedFont = {
      family,
      style
    };
    await figma.loadFontAsync(matchedFont);
    return node.setRangeFontName(Number(start), Number(end), matchedFont);
  }));
  return true;
};

const getDelimiterPos = (str, delimiter, startIdx = 0, endIdx = str.length) => {
  const indices = [];
  let temp = startIdx;

  for (let i = startIdx; i < endIdx; i++) {
    if (str[i] === delimiter && i + startIdx !== endIdx && temp !== i + startIdx) {
      indices.push([temp, i + startIdx]);
      temp = i + startIdx + 1;
    }
  }

  temp !== endIdx && indices.push([temp, endIdx]);
  return indices.filter(Boolean);
};

const buildLinearOrder = node => {
  const fontTree = [];
  const newLinesPos = getDelimiterPos(node.characters, '\n');
  newLinesPos.forEach(([newLinesRangeStart, newLinesRangeEnd], n) => {
    const newLinesRangeFont = node.getRangeFontName(newLinesRangeStart, newLinesRangeEnd);

    if (newLinesRangeFont === figma.mixed) {
      const spacesPos = getDelimiterPos(node.characters, ' ', newLinesRangeStart, newLinesRangeEnd);
      spacesPos.forEach(([spacesRangeStart, spacesRangeEnd], s) => {
        const spacesRangeFont = node.getRangeFontName(spacesRangeStart, spacesRangeEnd);

        if (spacesRangeFont === figma.mixed) {
          const spacesRangeFont = node.getRangeFontName(spacesRangeStart, spacesRangeStart[0]);
          fontTree.push({
            start: spacesRangeStart,
            delimiter: ' ',
            family: spacesRangeFont.family,
            style: spacesRangeFont.style
          });
        } else {
          fontTree.push({
            start: spacesRangeStart,
            delimiter: ' ',
            family: spacesRangeFont.family,
            style: spacesRangeFont.style
          });
        }
      });
    } else {
      fontTree.push({
        start: newLinesRangeStart,
        delimiter: '\n',
        family: newLinesRangeFont.family,
        style: newLinesRangeFont.style
      });
    }
  });
  return fontTree.sort((a, b) => +a.start - +b.start).map(({
    family,
    style,
    delimiter
  }) => ({
    family,
    style,
    delimiter
  }));
};

const setCharactersWithSmartMatchFont = async (node, characters, fallbackFont) => {
  const rangeTree = buildLinearOrder(node);
  const fontsToLoad = (0, _uniqBy2.default)(rangeTree, ({
    family,
    style
  }) => `${family}::${style}`).map(({
    family,
    style
  }) => ({
    family,
    style
  }));
  await Promise.all([...fontsToLoad, fallbackFont].map(figma.loadFontAsync));
  node.fontName = fallbackFont;
  node.characters = characters;
  let prevPos = 0;
  rangeTree.forEach(({
    family,
    style,
    delimiter
  }) => {
    if (prevPos < node.characters.length) {
      const delimeterPos = node.characters.indexOf(delimiter, prevPos);
      const endPos = delimeterPos > prevPos ? delimeterPos : node.characters.length;
      const matchedFont = {
        family,
        style
      };
      node.setRangeFontName(prevPos, endPos, matchedFont);
      prevPos = endPos + 1;
    }
  });
  return true;
};

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/helpers/topLevelFrames.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/helpers/topLevelFrames.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = topLevelFrames;

/**
 * this function returns all top level frames on currentPage
 */
function topLevelFrames(page = figma.currentPage) {
  return page.children.filter(node => node.type === 'FRAME');
}

/***/ }),

/***/ "./node_modules/@figma-plugin/helpers/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@figma-plugin/helpers/dist/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "clone", {
  enumerable: true,
  get: function () {
    return _clone.default;
  }
});
Object.defineProperty(exports, "getAllFonts", {
  enumerable: true,
  get: function () {
    return _getAllFonts.default;
  }
});
Object.defineProperty(exports, "getBoundingRect", {
  enumerable: true,
  get: function () {
    return _getBoundingRect.default;
  }
});
Object.defineProperty(exports, "getNodeIndex", {
  enumerable: true,
  get: function () {
    return _getNodeIndex.default;
  }
});
Object.defineProperty(exports, "getPage", {
  enumerable: true,
  get: function () {
    return _getPage.default;
  }
});
Object.defineProperty(exports, "hasChildren", {
  enumerable: true,
  get: function () {
    return _hasChildren.hasChildren;
  }
});
Object.defineProperty(exports, "isPartOfInstance", {
  enumerable: true,
  get: function () {
    return _isPartOfInstance.default;
  }
});
Object.defineProperty(exports, "isPartOfNode", {
  enumerable: true,
  get: function () {
    return _isPartOfNode.default;
  }
});
Object.defineProperty(exports, "isVisibleNode", {
  enumerable: true,
  get: function () {
    return _isVisibleNode.default;
  }
});
Object.defineProperty(exports, "loadUniqueFonts", {
  enumerable: true,
  get: function () {
    return _loadUniqueFonts.default;
  }
});
Object.defineProperty(exports, "loadFonts", {
  enumerable: true,
  get: function () {
    return _loadFonts.default;
  }
});
Object.defineProperty(exports, "nodeToObject", {
  enumerable: true,
  get: function () {
    return _nodeToObject.nodeToObject;
  }
});
Object.defineProperty(exports, "topLevelFrames", {
  enumerable: true,
  get: function () {
    return _topLevelFrames.default;
  }
});
Object.defineProperty(exports, "getTextNodeCSS", {
  enumerable: true,
  get: function () {
    return _getCSSStyles.getTextNodeCSS;
  }
});
Object.defineProperty(exports, "findAll", {
  enumerable: true,
  get: function () {
    return _findMethods.findAll;
  }
});
Object.defineProperty(exports, "getRelativePosition", {
  enumerable: true,
  get: function () {
    return _getRelativePosition.getRelativePosition;
  }
});
Object.defineProperty(exports, "getTopLevelParent", {
  enumerable: true,
  get: function () {
    return _getRelativePosition.getTopLevelParent;
  }
});
Object.defineProperty(exports, "figmaRGBToWebRGB", {
  enumerable: true,
  get: function () {
    return _convertColor.figmaRGBToWebRGB;
  }
});
Object.defineProperty(exports, "webRGBToFigmaRGB", {
  enumerable: true,
  get: function () {
    return _convertColor.webRGBToFigmaRGB;
  }
});
Object.defineProperty(exports, "figmaRGBToHex", {
  enumerable: true,
  get: function () {
    return _convertColor.figmaRGBToHex;
  }
});
Object.defineProperty(exports, "hexToFigmaRGB", {
  enumerable: true,
  get: function () {
    return _convertColor.hexToFigmaRGB;
  }
});
Object.defineProperty(exports, "isComponentNode", {
  enumerable: true,
  get: function () {
    return _isTypeNode.isComponentNode;
  }
});
Object.defineProperty(exports, "isFrameNode", {
  enumerable: true,
  get: function () {
    return _isTypeNode.isFrameNode;
  }
});
Object.defineProperty(exports, "isGroupNode", {
  enumerable: true,
  get: function () {
    return _isTypeNode.isGroupNode;
  }
});
Object.defineProperty(exports, "isInstanceNode", {
  enumerable: true,
  get: function () {
    return _isTypeNode.isInstanceNode;
  }
});
Object.defineProperty(exports, "isPageNode", {
  enumerable: true,
  get: function () {
    return _isTypeNode.isPageNode;
  }
});
Object.defineProperty(exports, "isTextNode", {
  enumerable: true,
  get: function () {
    return _isTypeNode.isTextNode;
  }
});
Object.defineProperty(exports, "isOneOfNodeType", {
  enumerable: true,
  get: function () {
    return _isTypeNode.isOneOfNodeType;
  }
});
Object.defineProperty(exports, "extractImageCropParams", {
  enumerable: true,
  get: function () {
    return _extractImageCropParams.extractImageCropParams;
  }
});
Object.defineProperty(exports, "extractLinearGradientParamsFromTransform", {
  enumerable: true,
  get: function () {
    return _extractLinearGradientStartEnd.extractLinearGradientParamsFromTransform;
  }
});
Object.defineProperty(exports, "extractRadialOrDiamondGradientParams", {
  enumerable: true,
  get: function () {
    return _extractRadialOrDiamondGradientParams.extractRadialOrDiamondGradientParams;
  }
});
Object.defineProperty(exports, "setCharacters", {
  enumerable: true,
  get: function () {
    return _setCharacters.setCharacters;
  }
});
Object.defineProperty(exports, "parseTextStyle", {
  enumerable: true,
  get: function () {
    return _parseTextStyle.parseTextStyle;
  }
});
Object.defineProperty(exports, "splitTextStyleIntoLines", {
  enumerable: true,
  get: function () {
    return _parseTextStyle.splitTextStyleIntoLines;
  }
});
Object.defineProperty(exports, "joinTextLinesStyles", {
  enumerable: true,
  get: function () {
    return _parseTextStyle.joinTextLinesStyles;
  }
});
Object.defineProperty(exports, "applyTextStyleToTextNode", {
  enumerable: true,
  get: function () {
    return _parseTextStyle.applyTextStyleToTextNode;
  }
});
Object.defineProperty(exports, "changeCharactersTextStyle", {
  enumerable: true,
  get: function () {
    return _parseTextStyle.changeCharactersTextStyle;
  }
});
Object.defineProperty(exports, "changeTextStyle", {
  enumerable: true,
  get: function () {
    return _parseTextStyle.changeTextStyle;
  }
});

var _clone = _interopRequireDefault(__webpack_require__(/*! ./helpers/clone */ "./node_modules/@figma-plugin/helpers/dist/helpers/clone.js"));

var _getAllFonts = _interopRequireDefault(__webpack_require__(/*! ./helpers/getAllFonts */ "./node_modules/@figma-plugin/helpers/dist/helpers/getAllFonts.js"));

var _getBoundingRect = _interopRequireDefault(__webpack_require__(/*! ./helpers/getBoundingRect */ "./node_modules/@figma-plugin/helpers/dist/helpers/getBoundingRect.js"));

var _getNodeIndex = _interopRequireDefault(__webpack_require__(/*! ./helpers/getNodeIndex */ "./node_modules/@figma-plugin/helpers/dist/helpers/getNodeIndex.js"));

var _getPage = _interopRequireDefault(__webpack_require__(/*! ./helpers/getPage */ "./node_modules/@figma-plugin/helpers/dist/helpers/getPage.js"));

var _hasChildren = __webpack_require__(/*! ./helpers/hasChildren */ "./node_modules/@figma-plugin/helpers/dist/helpers/hasChildren.js");

var _isPartOfInstance = _interopRequireDefault(__webpack_require__(/*! ./helpers/isPartOfInstance */ "./node_modules/@figma-plugin/helpers/dist/helpers/isPartOfInstance.js"));

var _isPartOfNode = _interopRequireDefault(__webpack_require__(/*! ./helpers/isPartOfNode */ "./node_modules/@figma-plugin/helpers/dist/helpers/isPartOfNode.js"));

var _isVisibleNode = _interopRequireDefault(__webpack_require__(/*! ./helpers/isVisibleNode */ "./node_modules/@figma-plugin/helpers/dist/helpers/isVisibleNode.js"));

var _loadUniqueFonts = _interopRequireDefault(__webpack_require__(/*! ./helpers/loadUniqueFonts */ "./node_modules/@figma-plugin/helpers/dist/helpers/loadUniqueFonts.js"));

var _loadFonts = _interopRequireDefault(__webpack_require__(/*! ./helpers/loadFonts */ "./node_modules/@figma-plugin/helpers/dist/helpers/loadFonts.js"));

var _nodeToObject = __webpack_require__(/*! ./helpers/nodeToObject */ "./node_modules/@figma-plugin/helpers/dist/helpers/nodeToObject.js");

var _topLevelFrames = _interopRequireDefault(__webpack_require__(/*! ./helpers/topLevelFrames */ "./node_modules/@figma-plugin/helpers/dist/helpers/topLevelFrames.js"));

var _getCSSStyles = __webpack_require__(/*! ./helpers/getCSSStyles */ "./node_modules/@figma-plugin/helpers/dist/helpers/getCSSStyles.js");

var _findMethods = __webpack_require__(/*! ./helpers/findMethods */ "./node_modules/@figma-plugin/helpers/dist/helpers/findMethods.js");

var _getRelativePosition = __webpack_require__(/*! ./helpers/getRelativePosition */ "./node_modules/@figma-plugin/helpers/dist/helpers/getRelativePosition.js");

var _convertColor = __webpack_require__(/*! ./helpers/convertColor */ "./node_modules/@figma-plugin/helpers/dist/helpers/convertColor.js");

var _isTypeNode = __webpack_require__(/*! ./helpers/isTypeNode */ "./node_modules/@figma-plugin/helpers/dist/helpers/isTypeNode.js");

var _extractImageCropParams = __webpack_require__(/*! ./helpers/extractImageCropParams */ "./node_modules/@figma-plugin/helpers/dist/helpers/extractImageCropParams.js");

var _extractLinearGradientStartEnd = __webpack_require__(/*! ./helpers/extractLinearGradientStartEnd */ "./node_modules/@figma-plugin/helpers/dist/helpers/extractLinearGradientStartEnd.js");

var _extractRadialOrDiamondGradientParams = __webpack_require__(/*! ./helpers/extractRadialOrDiamondGradientParams */ "./node_modules/@figma-plugin/helpers/dist/helpers/extractRadialOrDiamondGradientParams.js");

var _setCharacters = __webpack_require__(/*! ./helpers/setCharacters */ "./node_modules/@figma-plugin/helpers/dist/helpers/setCharacters.js");

var _parseTextStyle = __webpack_require__(/*! ./helpers/parseTextStyle */ "./node_modules/@figma-plugin/helpers/dist/helpers/parseTextStyle.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUniq.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    noop = __webpack_require__(/*! ./noop */ "./node_modules/lodash/noop.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/isUndefined.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isUndefined.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/uniqBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/uniqBy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js");

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ }),

/***/ "./node_modules/lodash/uniqWith.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/uniqWith.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js");

/**
 * This method is like `_.uniq` except that it accepts `comparator` which
 * is invoked to compare elements of `array`. The order of result values is
 * determined by the order they occur in the array.The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.uniqWith(objects, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 */
function uniqWith(array, comparator) {
  comparator = typeof comparator == 'function' ? comparator : undefined;
  return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
}

module.exports = uniqWith;


/***/ }),

/***/ "./node_modules/matrix-inverse/matrix-inverse.js":
/*!*******************************************************!*\
  !*** ./node_modules/matrix-inverse/matrix-inverse.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Sylvester = {}

Sylvester.Matrix = function() {}

Sylvester.Matrix.create = function(elements) {
  var M = new Sylvester.Matrix()
  return M.setElements(elements)
}

Sylvester.Matrix.I = function(n) {
  var els = [],
    i = n,
    j
  while (i--) {
    j = n
    els[i] = []
    while (j--) {
      els[i][j] = i === j ? 1 : 0
    }
  }
  return Sylvester.Matrix.create(els)
}

Sylvester.Matrix.prototype = {
  dup: function() {
    return Sylvester.Matrix.create(this.elements)
  },

  isSquare: function() {
    var cols = this.elements.length === 0 ? 0 : this.elements[0].length
    return this.elements.length === cols
  },

  toRightTriangular: function() {
    if (this.elements.length === 0) return Sylvester.Matrix.create([])
    var M = this.dup(),
      els
    var n = this.elements.length,
      i,
      j,
      np = this.elements[0].length,
      p
    for (i = 0; i < n; i++) {
      if (M.elements[i][i] === 0) {
        for (j = i + 1; j < n; j++) {
          if (M.elements[j][i] !== 0) {
            els = []
            for (p = 0; p < np; p++) {
              els.push(M.elements[i][p] + M.elements[j][p])
            }
            M.elements[i] = els
            break
          }
        }
      }
      if (M.elements[i][i] !== 0) {
        for (j = i + 1; j < n; j++) {
          var multiplier = M.elements[j][i] / M.elements[i][i]
          els = []
          for (p = 0; p < np; p++) {
            // Elements with column numbers up to an including the number of the
            // row that we're subtracting can safely be set straight to zero,
            // since that's the point of this routine and it avoids having to
            // loop over and correct rounding errors later
            els.push(
              p <= i ? 0 : M.elements[j][p] - M.elements[i][p] * multiplier
            )
          }
          M.elements[j] = els
        }
      }
    }
    return M
  },

  determinant: function() {
    if (this.elements.length === 0) {
      return 1
    }
    if (!this.isSquare()) {
      return null
    }
    var M = this.toRightTriangular()
    var det = M.elements[0][0],
      n = M.elements.length
    for (var i = 1; i < n; i++) {
      det = det * M.elements[i][i]
    }
    return det
  },

  isSingular: function() {
    return this.isSquare() && this.determinant() === 0
  },

  augment: function(matrix) {
    if (this.elements.length === 0) {
      return this.dup()
    }
    var M = matrix.elements || matrix
    if (typeof M[0][0] === 'undefined') {
      M = Sylvester.Matrix.create(M).elements
    }
    var T = this.dup(),
      cols = T.elements[0].length
    var i = T.elements.length,
      nj = M[0].length,
      j
    if (i !== M.length) {
      return null
    }
    while (i--) {
      j = nj
      while (j--) {
        T.elements[i][cols + j] = M[i][j]
      }
    }
    return T
  },

  inverse: function() {
    if (this.elements.length === 0) {
      return null
    }
    if (!this.isSquare() || this.isSingular()) {
      return null
    }
    var n = this.elements.length,
      i = n,
      j
    var M = this.augment(Sylvester.Matrix.I(n)).toRightTriangular()
    var np = M.elements[0].length,
      p,
      els,
      divisor
    var inverse_elements = [],
      new_element
    // Sylvester.Matrix is non-singular so there will be no zeros on the
    // diagonal. Cycle through rows from last to first.
    while (i--) {
      // First, normalise diagonal elements to 1
      els = []
      inverse_elements[i] = []
      divisor = M.elements[i][i]
      for (p = 0; p < np; p++) {
        new_element = M.elements[i][p] / divisor
        els.push(new_element)
        // Shuffle off the current row of the right hand side into the results
        // array as it will not be modified by later runs through this loop
        if (p >= n) {
          inverse_elements[i].push(new_element)
        }
      }
      M.elements[i] = els
      // Then, subtract this row from those above it to give the identity matrix
      // on the left hand side
      j = i
      while (j--) {
        els = []
        for (p = 0; p < np; p++) {
          els.push(M.elements[j][p] - M.elements[i][p] * M.elements[j][i])
        }
        M.elements[j] = els
      }
    }
    return Sylvester.Matrix.create(inverse_elements)
  },

  setElements: function(els) {
    var i,
      j,
      elements = els.elements || els
    if (elements[0] && typeof elements[0][0] !== 'undefined') {
      i = elements.length
      this.elements = []
      while (i--) {
        j = elements[i].length
        this.elements[i] = []
        while (j--) {
          this.elements[i][j] = elements[i][j]
        }
      }
      return this
    }
    var n = elements.length
    this.elements = []
    for (i = 0; i < n; i++) {
      this.elements.push([elements[i]])
    }
    return this
  },
}

module.exports = function(elements) {
  return Sylvester.Matrix.create(elements).inverse().elements
}


/***/ }),

/***/ "./node_modules/uuid-random/index.js":
/*!*******************************************!*\
  !*** ./node_modules/uuid-random/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function(){

  var
    buf,
    bufIdx = 0,
    hexBytes = [],
    i
  ;

  // Pre-calculate toString(16) for speed
  for (i = 0; i < 256; i++) {
    hexBytes[i] = (i + 0x100).toString(16).substr(1);
  }

  // Buffer random numbers for speed
  // Reduce memory usage by decreasing this number (min 16)
  // or improve speed by increasing this number (try 16384)
  uuid.BUFFER_SIZE = 4096;

  // Binary uuids
  uuid.bin = uuidBin;

  // Clear buffer
  uuid.clearBuffer = function() {
    buf = null;
    bufIdx = 0;
  };

  // Test for uuid
  uuid.test = function(uuid) {
    if (typeof uuid === 'string') {
      return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid);
    }
    return false;
  };

  // Node & Browser support
  var crypt0;
  if (typeof crypto !== 'undefined') {
    crypt0 = crypto;
  } else if( (typeof window !== 'undefined') && (typeof window.msCrypto !== 'undefined')) {
    crypt0 = window.msCrypto; // IE11
  }

  if (true) {
    crypt0 = crypt0 || __webpack_require__(/*! crypto */ 0);
    module.exports = uuid;
  } else {}

  // Use best available PRNG
  // Also expose this so you can override it.
  uuid.randomBytes = (function(){
    if (crypt0) {
      if (crypt0.randomBytes) {
        return crypt0.randomBytes;
      }
      if (crypt0.getRandomValues) {
        if (typeof Uint8Array.prototype.slice !== 'function') {
          return function(n) {
            var bytes = new Uint8Array(n);
            crypt0.getRandomValues(bytes);
            return Array.from(bytes);
          };
        }
        return function(n) {
          var bytes = new Uint8Array(n);
          crypt0.getRandomValues(bytes);
          return bytes;
        };
      }
    }
    return function(n) {
      var i, r = [];
      for (i = 0; i < n; i++) {
        r.push(Math.floor(Math.random() * 256));
      }
      return r;
    };
  })();

  // Buffer some random bytes for speed
  function randomBytesBuffered(n) {
    if (!buf || ((bufIdx + n) > uuid.BUFFER_SIZE)) {
      bufIdx = 0;
      buf = uuid.randomBytes(uuid.BUFFER_SIZE);
    }
    return buf.slice(bufIdx, bufIdx += n);
  }

  // uuid.bin
  function uuidBin() {
    var b = randomBytesBuffered(16);
    b[6] = (b[6] & 0x0f) | 0x40;
    b[8] = (b[8] & 0x3f) | 0x80;
    return b;
  }

  // String UUIDv4 (Random)
  function uuid() {
    var b = uuidBin();
    return hexBytes[b[0]] + hexBytes[b[1]] +
      hexBytes[b[2]] + hexBytes[b[3]] + '-' +
      hexBytes[b[4]] + hexBytes[b[5]] + '-' +
      hexBytes[b[6]] + hexBytes[b[7]] + '-' +
      hexBytes[b[8]] + hexBytes[b[9]] + '-' +
      hexBytes[b[10]] + hexBytes[b[11]] +
      hexBytes[b[12]] + hexBytes[b[13]] +
      hexBytes[b[14]] + hexBytes[b[15]]
    ;
  }

})();


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/plugin/controller.ts":
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid-random */ "./node_modules/uuid-random/index.js");
/* harmony import */ var uuid_random__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_random__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @figma-plugin/helpers */ "./node_modules/@figma-plugin/helpers/dist/index.js");
/* harmony import */ var _figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_light_mode_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/light-mode.json */ "./data/light-mode.json");
var _data_light_mode_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/light-mode.json */ "./data/light-mode.json", 1);
/* harmony import */ var _data_dark_mode_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/dark-mode.json */ "./data/dark-mode.json");
var _data_dark_mode_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/dark-mode.json */ "./data/dark-mode.json", 1);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




figma.showUI(__html__, { width: 300, height: 448 });
let customEventData = {
    fileName: figma.currentPage.parent.name,
    fileKey: figma.fileKey,
    "User Name": figma.currentUser.name,
    "User Avatar": figma.currentUser.photoUrl,
    "User ID": figma.currentUser.id,
    "Session ID": figma.currentUser.sessionId,
};
const navigateTo = (screen) => {
    figma.ui.postMessage({ type: "figma-command", message: Object.assign({ openedTo: screen }, customEventData)
    });
};
switch (figma.command) {
    case "open-home":
        navigateTo('open-home');
        break;
    case "open-table-creator":
        navigateTo('open-table-creator');
        break;
    case "open-language-linter":
        navigateTo('open-language-linter');
        figma.ui.resize(475, 500);
        break;
    case "open-color-linter":
        navigateTo('open-color-linter');
        figma.ui.resize(475, 500);
        break;
}
const createTable = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const tableFrame = figma.createFrame();
    let headerCell = yield figma.importComponentByKeyAsync("ce8fa8e8cab07a19f83f4181ac8cbe76093c6bc3");
    let tableRow = figma.createComponent();
    let cellFillContainerY = false;
    yield figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
    yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
    tableFrame.name = "Table";
    tableFrame.counterAxisSizingMode = "AUTO";
    tableFrame.layoutMode = "VERTICAL";
    tableFrame.x = figma.viewport.center.x;
    tableFrame.y = figma.viewport.center.y;
    msg.columnConfiguration.find((col) => (cellFillContainerY = col.multiValue));
    [...Array(msg.rows + 1).keys()].map((rowIndex) => {
        tableRow.layoutMode = "HORIZONTAL";
        tableRow.counterAxisSizingMode = "AUTO";
        tableRow.name = "Row";
        msg.columnConfiguration.map((col) => __awaiter(void 0, void 0, void 0, function* () {
            let { name: colName, alignment: colAlignment, cellType: colCellType, multiValue: colMultiValue, } = col;
            colAlignment =
                colAlignment[0].toUpperCase() + colAlignment.substring(1);
            colCellType = colCellType[0].toUpperCase() + colCellType.substring(1);
            colMultiValue = colMultiValue.toString();
            colMultiValue =
                colMultiValue[0].toUpperCase() + colMultiValue.substring(1);
            if (rowIndex === 0) {
                let thisHeaderCell = headerCell.createInstance();
                let textNodeOfHeaderCell = thisHeaderCell.children[0].children[0];
                thisHeaderCell.name = colName.length > 0 ? colName : "Header";
                textNodeOfHeaderCell.deleteCharacters(0, textNodeOfHeaderCell.characters.length);
                textNodeOfHeaderCell.insertCharacters(0, colName.length > 0 ? colName : "Header");
                thisHeaderCell.setProperties({ Alignment: colAlignment });
                thisHeaderCell.resize(colMultiValue === "True" ? 120 : thisHeaderCell.width, thisHeaderCell.height);
                thisHeaderCell.children[0].layoutGrow = cellFillContainerY ? 1 : 0;
                thisHeaderCell.primaryAxisSizingMode = cellFillContainerY
                    ? "FIXED"
                    : "AUTO";
                tableRow.appendChild(thisHeaderCell);
            }
        }));
        if (rowIndex === 0) {
            tableFrame.appendChild(tableRow);
        }
        else {
            let thisTableRow = tableRow.createInstance();
            thisTableRow.children.map((cell, index) => {
                let { cellType: colCellType, multiValue: colMultiValue } = msg.columnConfiguration[index];
                colCellType = colCellType[0].toUpperCase() + colCellType.substring(1);
                colMultiValue = colMultiValue.toString();
                colMultiValue =
                    colMultiValue[0].toUpperCase() + colMultiValue.substring(1);
                cell.name === "Header" ? (cell.name = "Cell") : null;
                cell.setProperties({ Type: "Body" });
                cell.children[0].children[0].setProperties({
                    Type: colCellType,
                    "Multi-value": colMultiValue,
                });
                cell.children[0].layoutGrow = cellFillContainerY ? 1 : 0;
                cell.primaryAxisSizingMode = cellFillContainerY ? "FIXED" : "AUTO";
            });
            tableFrame.appendChild(thisTableRow);
        }
    });
    let tableData = Object.assign({ fileName: figma.currentPage.parent.name, fileKey: figma.fileKey, "Column count": msg.columnConfiguration.length, "Row count": msg.rows, "Column Configuration": msg.columnConfiguration }, customEventData);
    figma.ui.postMessage({ type: "table-created", message: tableData });
    figma.notify("Table created ✅");
});
const pushTextLayerToArray = (layer, array) => {
    array.push({
        id: layer.id,
        name: layer.name,
        visible: layer.visible,
        x: layer.x,
        y: layer.y,
        type: layer.type,
        characters: layer === null || layer === void 0 ? void 0 : layer.characters,
        children: layer === null || layer === void 0 ? void 0 : layer.children,
    });
};
const sendCurrentTextSelection = () => {
    let selection = figma.currentPage.selection;
    let textLayers = [];
    selection.forEach((selectedLayer) => {
        if (!!(selectedLayer === null || selectedLayer === void 0 ? void 0 : selectedLayer.children)) {
            const selectedTextLayers = selectedLayer.findAll(n => n.type === 'TEXT');
            selectedTextLayers.forEach((layer) => {
                Object(_figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_1__["isVisibleNode"])(layer) && pushTextLayerToArray(layer, textLayers);
            });
        }
        else if (selectedLayer.type === 'TEXT') {
            Object(_figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_1__["isVisibleNode"])(selectedLayer) && pushTextLayerToArray(selectedLayer, textLayers);
        }
    });
    return figma.ui.postMessage({
        type: "new-text-selection",
        message: {
            textLayers,
            selectedLayers: selection
        }
    });
};
const rgbToHex = (r, g, b) => {
    const componentToHex = (c) => {
        c = Math.round(c * 255);
        let hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    const combineComponents = (r, g, b) => {
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    };
    return combineComponents(r, g, b);
};
const pushColorToArray = (layer, colorType, array) => {
    var _a, _b, _c;
    const styleIdType = colorType === 'fills' ? 'fillStyleId' : 'strokeStyleId';
    const isSolidColor = ((_a = layer === null || layer === void 0 ? void 0 : layer.fills[0]) === null || _a === void 0 ? void 0 : _a.type) === 'SOLID';
    const colorIsImage = colorType === 'fills' && ((_b = layer === null || layer === void 0 ? void 0 : layer.fills[0]) === null || _b === void 0 ? void 0 : _b.type) === 'IMAGE';
    const colorIsGradient = colorType === 'fills' && ((_c = layer === null || layer === void 0 ? void 0 : layer.fills[0]) === null || _c === void 0 ? void 0 : _c.type.includes('GRADIENT'));
    const colorIsVisible = layer[colorType][0].visible;
    if (!colorIsImage && !colorIsGradient && colorIsVisible && !layer.isChildOfIconWithFill) {
        const colorInHex = (colorInRGB) => {
            return rgbToHex(colorInRGB.r, colorInRGB.g, colorInRGB.b);
        };
        array.push({
            colorId: uuid_random__WEBPACK_IMPORTED_MODULE_0___default()(),
            layerId: layer.layerId,
            layerName: layer.name,
            layerType: layer.type,
            color: layer[colorType],
            colorStyleId: layer[styleIdType],
            hasColorStyle: isSolidColor ? layer[styleIdType].length > 0 : false,
            visible: layer.visible,
            colorType: colorType.slice(0, -1),
            colorInHex: colorInHex(layer[colorType][0].color),
        });
    }
};
let colorTokens = [];
const getColorTokens = () => __awaiter(void 0, void 0, void 0, function* () {
    const lightModeTokens = yield Promise.all(_data_light_mode_json__WEBPACK_IMPORTED_MODULE_2__.meta.styles.map((style) => __awaiter(void 0, void 0, void 0, function* () { return style; })));
    const darkModeTokens = yield Promise.all(_data_dark_mode_json__WEBPACK_IMPORTED_MODULE_3__.meta.styles.map((style) => __awaiter(void 0, void 0, void 0, function* () { return style; })));
    const allColorTokens = lightModeTokens.concat(darkModeTokens);
    colorTokens = yield Promise.all(allColorTokens.map((style) => __awaiter(void 0, void 0, void 0, function* () {
        const tempRectangle = figma.createRectangle();
        tempRectangle.visible = false;
        let colorStyleWithHex = {};
        const importedStyle = yield figma.importStyleByKeyAsync(style.key);
        tempRectangle.fillStyleId = importedStyle.id;
        if (tempRectangle.fills[0].color !== undefined) {
            colorStyleWithHex = Object.assign(Object.assign({}, style), { hex: rgbToHex(tempRectangle.fills[0].color.r, tempRectangle.fills[0].color.g, tempRectangle.fills[0].color.b) });
        }
        else {
            colorStyleWithHex = Object.assign(Object.assign({}, style), { hex: 'None' });
        }
        tempRectangle.remove();
        return colorStyleWithHex;
    })));
});
const getColorStats = () => {
    getColorTokens();
    const getRawLayersWithColor = () => {
        let selection = figma.currentPage.selection;
        const relevantLayers = selection.map((selectedLayer) => {
            var _a;
            let outputForLayersWithChildren = [];
            const isRelevantLayer = (n) => {
                const acceptableNodetypes = [
                    'ELLIPSE',
                    'FRAME',
                    'GROUP',
                    'COMPONENT',
                    'INSTANCE',
                    'LINE',
                    'POLYGON',
                    'RECTANGLE',
                    'SHAPE_WITH_TEXT',
                    'STAR',
                    'TEXT',
                    'BOOLEAN_OPERATION'
                ];
                let hasFill = "fills" in n && (n === null || n === void 0 ? void 0 : n.fills[0]) !== undefined;
                let hasStroke = "strokes" in n && (n === null || n === void 0 ? void 0 : n.strokes[0]) !== undefined;
                const hasFillOrStroke = hasFill || hasStroke;
                const nodeIsValidNodeType = acceptableNodetypes.some((nodeType) => n.type === nodeType);
                return nodeIsValidNodeType && hasFillOrStroke;
            };
            const selectedLayerHasChildren = 'findAll' in selectedLayer &&
                ((_a = selectedLayer === null || selectedLayer === void 0 ? void 0 : selectedLayer.children) === null || _a === void 0 ? void 0 : _a.length) > 0;
            if (selectedLayerHasChildren) {
                outputForLayersWithChildren = selectedLayer.findAll((n) => isRelevantLayer(n));
                return [...outputForLayersWithChildren];
            }
            else if (isRelevantLayer(selectedLayer)) {
                return [selectedLayer];
            }
            else {
                return [];
            }
        });
        let output = relevantLayers.flat();
        output = output.filter(layer => Object(_figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_1__["isVisibleNode"])(layer));
        return output;
    };
    const rawLayersWithColor = getRawLayersWithColor();
    const layersWithColor = rawLayersWithColor.map((layer) => {
        var _a, _b;
        const hasFill = "fills" in layer && layer.fills[0] !== undefined;
        const hasStroke = "strokes" in layer && layer.strokes[0] !== undefined;
        const hasFillAndStroke = hasFill && hasStroke;
        const isChildOfIcon = layer.parent.type === 'BOOLEAN_OPERATION';
        const parentIconHasFill = ((_b = (_a = layer.parent) === null || _a === void 0 ? void 0 : _a.fills) === null || _b === void 0 ? void 0 : _b.length) > 0;
        const isChildOfIconWithFill = isChildOfIcon && parentIconHasFill;
        return {
            layerId: layer.id,
            name: layer.name,
            fills: "fills" in layer && layer.fills,
            strokes: "strokes" in layer && layer.strokes,
            fillStyleId: "fillStyleId" in layer && layer.fillStyleId,
            strokeStyleId: "strokeStyleId" in layer && layer.strokeStyleId,
            visible: layer.visible,
            type: layer.type,
            hasFill: hasFill,
            hasStroke: hasStroke,
            hasFillAndStroke: hasFillAndStroke,
            isChildOfIconWithFill: isChildOfIconWithFill
        };
    });
    const allInstancesOfColor = layersWithColor
        .map((layer) => {
        let tempColors = [];
        if (layer.hasFillAndStroke) {
            pushColorToArray(layer, 'fills', tempColors);
            pushColorToArray(layer, 'strokes', tempColors);
        }
        else if (layer.hasFill) {
            pushColorToArray(layer, 'fills', tempColors);
        }
        else if (layer.hasStroke) {
            pushColorToArray(layer, 'strokes', tempColors);
        }
        return tempColors;
    })
        .flat();
    const doesColorMatchAnyOneCoreStyle = (colorInHex) => {
        return colorTokens.some((style) => {
            var _a, _b;
            return colorInHex === ((_b = (_a = style === null || style === void 0 ? void 0 : style.color) === null || _a === void 0 ? void 0 : _a.color) === null || _b === void 0 ? void 0 : _b.hex);
        }, false);
    };
    const doesKeyMatchAnyOneCoreColorStyleKey = (key) => {
        return colorTokens.some((style) => {
            return key.includes(style.key);
        }, false);
    };
    const colorsWithColorStyle = allInstancesOfColor.filter((color) => {
        return color.hasColorStyle;
    });
    const colorsUsingOneCoreStyle = (() => {
        let colors = colorsWithColorStyle.filter((color) => {
            const { r, g, b } = color.color[0].color;
            const colorInHex = rgbToHex(r, g, b);
            return doesColorMatchAnyOneCoreStyle(colorInHex) && doesKeyMatchAnyOneCoreColorStyleKey(color.colorStyleId);
        });
        colors.map((color, index) => {
            colorTokens.map((style) => {
                if (color.colorStyleId.includes(style.key)) {
                    colors[index] = Object.assign(Object.assign({}, color), { styleName: style.name });
                }
                return;
            });
        });
        return colors;
    })();
    const colorsNotUsingOneCoreColorStyle = allInstancesOfColor.filter((color) => {
        return !colorTokens.some((oneCoreColor) => {
            return color.colorStyleId.includes(oneCoreColor.key);
        });
    });
    const oneCoreColorStyleCoverage = `${((colorsUsingOneCoreStyle.length / allInstancesOfColor.length) * 100).toFixed(2)}%`;
    const idsOfAllInstancesOfColor = allInstancesOfColor.map((color) => color.colorId);
    const colorStats = {
        selectedLayersWithColor: rawLayersWithColor,
        allInstancesOfColor: allInstancesOfColor,
        colorsWithColorStyle: colorsWithColorStyle,
        colorsUsingOneCoreStyle: colorsUsingOneCoreStyle,
        colorsNotUsingOneCoreColorStyle: colorsNotUsingOneCoreColorStyle,
        oneCoreColorStyleCoverage: oneCoreColorStyleCoverage,
        idsOfAllInstancesOfColor: idsOfAllInstancesOfColor,
    };
    return colorStats;
};
const selectAndZoomToLayer = (layerId) => {
    const layer = figma.getNodeById(layerId);
    figma.currentPage.selection = [layer];
    figma.viewport.scrollAndZoomIntoView([layer]);
};
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.type === "navigate-to-tab") {
        switch (msg.tabClicked) {
            case "home":
                figma.ui.resize(300, 448);
                navigateTo('open-home');
                break;
            case "table-creator":
                figma.ui.resize(300, 448);
                navigateTo('open-table-creator');
                break;
            case "language-linter":
                sendCurrentTextSelection();
                figma.ui.resize(475, 500);
                navigateTo('open-language-linter');
                break;
            case "color-linter":
                figma.ui.resize(475, 500);
                navigateTo('open-color-linter');
                break;
        }
    }
    if (msg.type === "initialize-selection") {
        figma.ui.postMessage({
            type: "initial-selection",
            message: figma.currentPage.selection
        });
    }
    if (msg.type === 'close-plugin') {
        figma.closePlugin();
    }
    if (msg.type === "create-table") {
        createTable(msg);
    }
    if (msg.type === 'run-language-linter') {
        sendCurrentTextSelection();
    }
    if (msg.type === 'request-local-custom-dictionary') {
        figma.clientStorage.getAsync("languageLinterCustomDictionary").then(result => {
            figma.ui.postMessage({
                type: "local-custom-dictionary-retrieved",
                message: result ? result : []
            });
        });
    }
    if (msg.type === 'add-to-dictionary') {
        figma.clientStorage.getAsync("languageLinterCustomDictionary").then(result => {
            let newCustomDictionary = result ? result : [];
            newCustomDictionary.push(msg.wordToAdd);
            figma.clientStorage.setAsync("languageLinterCustomDictionary", newCustomDictionary);
        });
    }
    if (msg.type === 'get-sample-text') {
        const sampleText = figma.currentPage.selection;
        figma.ui.postMessage({ type: "sample-text", message: sampleText });
    }
    if (msg.type === 'sample-text-changed') {
        selectAndZoomToLayer(msg.activeNodeId);
    }
    if (msg.type === 'update-source-text') {
        const activeTextLayer = figma.getNodeById(msg.layerId);
        let fontName = activeTextLayer.fontName;
        if (fontName === figma.mixed) {
            yield Promise.all(activeTextLayer.getRangeAllFontNames(0, activeTextLayer.characters.length).map(figma.loadFontAsync));
        }
        else {
            yield figma.loadFontAsync(fontName);
        }
        activeTextLayer.deleteCharacters(0, activeTextLayer.characters.length);
        activeTextLayer.insertCharacters(0, msg.updatedText);
        figma.ui.postMessage({ type: "source-text-updated", message: msg.updatedText });
    }
    if (msg.type === 'text-linted') {
        figma.ui.postMessage({ type: "text-linted", message: {
                customEventData,
                minimalReport: msg.minimalReport,
                fullReport: msg.fullReport
            } });
    }
    if (msg.type === 'run-color-linter') {
        const sendColorData = () => __awaiter(void 0, void 0, void 0, function* () {
            yield getColorTokens();
            figma.ui.postMessage({
                type: 'color-stats',
                message: Object.assign(Object.assign({}, customEventData), { colorStats: getColorStats(), colorTokens: colorTokens, selectionMade: figma.currentPage.selection.length > 0 }),
            });
        });
        sendColorData();
    }
    if (msg.type === 'select-layer') {
        selectAndZoomToLayer(msg.layerId);
    }
    if (msg.type === 'apply-color-style') {
        figma.importStyleByKeyAsync(msg.colorStyleKey).then(imported => {
            figma.getNodeById(msg.layerId)[`${msg.colorType}StyleId`] = imported.id;
            figma.ui.postMessage({
                type: 'color-replaced',
                message: Object.assign(Object.assign({}, customEventData), { layerId: msg.layerId, layerName: figma.getNodeById(msg.layerId).name, originalColor: msg.originalColor, colorStyleKey: msg.colorStyleKey, colorStyleName: msg.colorStyleName, colorStyleColor: msg.colorStyleColor }),
            });
        });
    }
});
figma.on("selectionchange", () => {
    console.log('selectionchange event was fired');
    figma.ui.postMessage({
        type: "selection-changed",
        message: figma.currentPage.selection
    });
});


/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvYXBwbHlNYXRyaXhUb1BvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2Nsb25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2NvbnZlcnRDb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9maW5kTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRBbGxGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRCb3VuZGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvZ2V0Q1NTU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldE5vZGVJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRQYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldFJlbGF0aXZlUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaGFzQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNQYXJ0T2ZJbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1BhcnRPZk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNUeXBlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1Zpc2libGVOb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2xvYWRGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9sb2FkVW5pcXVlRm9udHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvbm9kZVRvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3BhcnNlVGV4dFN0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3NldENoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvdG9wTGV2ZWxGcmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jbG9uZURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcUJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcVdpdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdHJpeC1pbnZlcnNlL21hdHJpeC1pbnZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkLXJhbmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZhOztBQUVi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QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7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LENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNB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QUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLHVEQUF1RCxxQkFBcUIscU5BQXFOO0FBQ2pTLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7QUM5YkQsZSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGx1Z2luL2NvbnRyb2xsZXIudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYXBwbHlNYXRyaXhUb1BvaW50ID0gYXBwbHlNYXRyaXhUb1BvaW50O1xuXG5mdW5jdGlvbiBhcHBseU1hdHJpeFRvUG9pbnQobWF0cml4LCBwb2ludCkge1xuICByZXR1cm4gW3BvaW50WzBdICogbWF0cml4WzBdWzBdICsgcG9pbnRbMV0gKiBtYXRyaXhbMF1bMV0gKyBtYXRyaXhbMF1bMl0sIHBvaW50WzBdICogbWF0cml4WzFdWzBdICsgcG9pbnRbMV0gKiBtYXRyaXhbMV1bMV0gKyBtYXRyaXhbMV1bMl1dO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2xvbmU7XG5cbi8qKlxuICogIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBjbG9uZSB0aGUgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGUgPT09ICdzeW1ib2wnIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHJldHVybiB2YWwubWFwKGNsb25lKTtcbiAgICB9IGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvID0ge307XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbCkge1xuICAgICAgICBvW2tleV0gPSBjbG9uZSh2YWxba2V5XSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgfVxuXG4gIHRocm93ICd1bmtub3duJztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZmlnbWFSR0JUb1dlYlJHQiA9IGZpZ21hUkdCVG9XZWJSR0I7XG5leHBvcnRzLndlYlJHQlRvRmlnbWFSR0IgPSB3ZWJSR0JUb0ZpZ21hUkdCO1xuZXhwb3J0cy5maWdtYVJHQlRvSGV4ID0gZmlnbWFSR0JUb0hleDtcbmV4cG9ydHMuaGV4VG9GaWdtYVJHQiA9IGhleFRvRmlnbWFSR0I7XG5jb25zdCBuYW1lc1JHQiA9IFsncicsICdnJywgJ2InXTtcbi8qKlxuICogdGhpcyBmdW5jdGlvbiBjb252ZXJ0cyBmaWdtYSBjb2xvciB0byBSR0IoQSkgKGFycmF5KVxuICovXG4vLyBmaWdtYVJHQlRvV2ViUkdCKHtyOiAwLjg4NzQ5OTk4ODA3OTA3MSwgZzogMC4wNzA1ODgyMzg1MzczMTE1NSwgYjogMC4wNjY1NjI0NzM3NzM5NTYzfSlcbi8vPT4gWzIyNiwgMTgsIDE3XVxuXG5mdW5jdGlvbiBmaWdtYVJHQlRvV2ViUkdCKGNvbG9yKSB7XG4gIGNvbnN0IHJnYiA9IFtdO1xuICBuYW1lc1JHQi5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgcmdiW2ldID0gTWF0aC5yb3VuZChjb2xvcltlXSAqIDI1NSk7XG4gIH0pO1xuICBpZiAoY29sb3JbJ2EnXSAhPT0gdW5kZWZpbmVkKSByZ2JbM10gPSBNYXRoLnJvdW5kKGNvbG9yWydhJ10gKiAxMDApIC8gMTAwO1xuICByZXR1cm4gcmdiO1xufVxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGNvbnZlcnRzIFJHQihBKSBjb2xvciAoYXJyYXkpIHRvIGZpZ21hIGNvbG9yXG4gKi9cbi8vIHdlYlJHQlRvRmlnbWFSR0IoWzIyNiwgMTgsIDE3XSlcbi8vPT4ge3I6IDAuODg2Mjc0NTA5ODAzOTIxNSwgZzogMC4wNzA1ODgyMzUyOTQxMTc2NSwgYjogMC4wNjY2NjY2NjY2NjY2NjY2N31cblxuXG5mdW5jdGlvbiB3ZWJSR0JUb0ZpZ21hUkdCKGNvbG9yKSB7XG4gIGNvbnN0IHJnYiA9IHt9O1xuICBuYW1lc1JHQi5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgcmdiW2VdID0gY29sb3JbaV0gLyAyNTU7XG4gIH0pO1xuICBpZiAoY29sb3JbM10gIT09IHVuZGVmaW5lZCkgcmdiWydhJ10gPSBjb2xvclszXTtcbiAgcmV0dXJuIHJnYjtcbn1cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBjb252ZXJ0cyBmaWdtYSBjb2xvciB0byBIRVggKHN0cmluZylcbiAqL1xuLy8gZmlnbWFSR0JUb0hleCh7IHI6IDAsIGc6IDAuMSwgYjogMSB9KVxuLy89PiAjMDAxYWZmXG5cblxuZnVuY3Rpb24gZmlnbWFSR0JUb0hleChjb2xvcikge1xuICBsZXQgaGV4ID0gJyMnO1xuICBjb25zdCByZ2IgPSBmaWdtYVJHQlRvV2ViUkdCKGNvbG9yKTtcbiAgaGV4ICs9ICgoMSA8PCAyNCkgKyAocmdiWzBdIDw8IDE2KSArIChyZ2JbMV0gPDwgOCkgKyByZ2JbMl0pLnRvU3RyaW5nKDE2KS5zbGljZSgxKTtcblxuICBpZiAocmdiWzNdICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBhID0gTWF0aC5yb3VuZChyZ2JbM10gKiAyNTUpLnRvU3RyaW5nKDE2KTtcblxuICAgIGlmIChhLmxlbmd0aCA9PSAxKSB7XG4gICAgICBoZXggKz0gJzAnICsgYTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGEgIT09ICdmZicpIGhleCArPSBhO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoZXg7XG59XG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gY29udmVydHMgSEVYIGNvbG9yIChzdHJpbmcpIHRvIGZpZ21hIGNvbG9yXG4gKi9cbi8vIGhleFRvRmlnbWFSR0IoIzAwMWFmZilcbi8vPT4geyByOiAwLCBnOiAwLjEwMTk2MDc4NDMxMzcyNTQ5LCBiOiAxIH1cblxuXG5mdW5jdGlvbiBoZXhUb0ZpZ21hUkdCKGNvbG9yKSB7XG4gIGxldCBvcGFjaXR5ID0gJyc7XG4gIGNvbG9yID0gY29sb3IudG9Mb3dlckNhc2UoKTtcbiAgaWYgKGNvbG9yWzBdID09PSAnIycpIGNvbG9yID0gY29sb3Iuc2xpY2UoMSk7XG5cbiAgaWYgKGNvbG9yLmxlbmd0aCA9PT0gMykge1xuICAgIGNvbG9yID0gY29sb3IucmVwbGFjZSgvKC4pKC4pKC4pPy9nLCAnJDEkMSQyJDIkMyQzJyk7XG4gIH0gZWxzZSBpZiAoY29sb3IubGVuZ3RoID09PSA4KSB7XG4gICAgY29uc3QgYXJyID0gY29sb3IubWF0Y2goLyguezZ9KSguezJ9KS8pO1xuICAgIGNvbG9yID0gYXJyWzFdO1xuICAgIG9wYWNpdHkgPSBhcnJbMl07XG4gIH1cblxuICBjb25zdCBudW0gPSBwYXJzZUludChjb2xvciwgMTYpO1xuICBjb25zdCByZ2IgPSBbbnVtID4+IDE2LCBudW0gPj4gOCAmIDI1NSwgbnVtICYgMjU1XTtcblxuICBpZiAob3BhY2l0eSkge1xuICAgIHJnYi5wdXNoKHBhcnNlSW50KG9wYWNpdHksIDE2KSAvIDI1NSk7XG4gICAgcmV0dXJuIHdlYlJHQlRvRmlnbWFSR0IocmdiKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gd2ViUkdCVG9GaWdtYVJHQihyZ2IpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmV4dHJhY3RJbWFnZUNyb3BQYXJhbXMgPSBleHRyYWN0SW1hZ2VDcm9wUGFyYW1zO1xuXG52YXIgX21hdHJpeEludmVyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJtYXRyaXgtaW52ZXJzZVwiKSk7XG5cbnZhciBfYXBwbHlNYXRyaXhUb1BvaW50ID0gcmVxdWlyZShcIi4vYXBwbHlNYXRyaXhUb1BvaW50XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGNhbiBleHRyYWN0IHRoZSBpbWFnZSBjcm9wIHJvdGF0aW9uLCBzY2FsZSAoL3NpemUpIGFuZCBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0gc2hhcGVXaWR0aFxuICogQHBhcmFtIHNoYXBlSGVpZ2h0XG4gKiBAcGFyYW0gdFxuICovXG5mdW5jdGlvbiBleHRyYWN0SW1hZ2VDcm9wUGFyYW1zKHNoYXBlV2lkdGgsIHNoYXBlSGVpZ2h0LCB0KSB7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IHQubGVuZ3RoID09PSAyID8gWy4uLnQsIFswLCAwLCAxXV0gOiBbLi4udF07XG4gIGNvbnN0IG14SW52ID0gKDAsIF9tYXRyaXhJbnZlcnNlLmRlZmF1bHQpKHRyYW5zZm9ybSk7XG4gIGNvbnN0IHBvaW50cyA9IFtbMCwgMF0sIFsxLCAwXSwgWzEsIDFdLCBbMCwgMV1dLm1hcChwID0+ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobXhJbnYsIHApKTtcbiAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKHBvaW50c1sxXVsxXSAtIHBvaW50c1swXVsxXSwgcG9pbnRzWzFdWzBdIC0gcG9pbnRzWzBdWzBdKTtcbiAgY29uc3Qgc3ggPSBNYXRoLnNxcnQoTWF0aC5wb3cocG9pbnRzWzFdWzBdIC0gcG9pbnRzWzBdWzBdLCAyKSArIE1hdGgucG93KHBvaW50c1sxXVsxXSAtIHBvaW50c1swXVsxXSwgMikpO1xuICBjb25zdCBzeSA9IE1hdGguc3FydChNYXRoLnBvdyhwb2ludHNbMl1bMF0gLSBwb2ludHNbMV1bMF0sIDIpICsgTWF0aC5wb3cocG9pbnRzWzJdWzFdIC0gcG9pbnRzWzFdWzFdLCAyKSk7XG4gIHJldHVybiB7XG4gICAgcm90YXRpb246IGFuZ2xlICogKDE4MCAvIE1hdGguUEkpLFxuICAgIHNjYWxlOiBbc3gsIHN5XSxcbiAgICBzaXplOiBbc3ggKiBzaGFwZVdpZHRoLCBzeSAqIHNoYXBlSGVpZ2h0XSxcbiAgICBwb3NpdGlvbjogWy1wb2ludHNbMF1bMF0gKiBzaGFwZVdpZHRoLCAtcG9pbnRzWzBdWzFdICogc2hhcGVIZWlnaHRdXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmV4dHJhY3RMaW5lYXJHcmFkaWVudFBhcmFtc0Zyb21UcmFuc2Zvcm0gPSBleHRyYWN0TGluZWFyR3JhZGllbnRQYXJhbXNGcm9tVHJhbnNmb3JtO1xuXG52YXIgX21hdHJpeEludmVyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJtYXRyaXgtaW52ZXJzZVwiKSk7XG5cbnZhciBfYXBwbHlNYXRyaXhUb1BvaW50ID0gcmVxdWlyZShcIi4vYXBwbHlNYXRyaXhUb1BvaW50XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGNhbiBleHRyYWN0IHRoZSB4IGFuZCB5IHBvc2l0aW9ucyBvZiB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgbGluZWFyIGdyYWRpZW50XG4gKiAoc2NhbGUgaXMgbm90IGltcG9ydGFudCBoZXJlKVxuICpcbiAqIEBwYXJhbSBzaGFwZVdpZHRoIG51bWJlclxuICogQHBhcmFtIHNoYXBlSGVpZ2h0IG51bWJlclxuICogQHBhcmFtIHQgVHJhbnNmb3JtXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RMaW5lYXJHcmFkaWVudFBhcmFtc0Zyb21UcmFuc2Zvcm0oc2hhcGVXaWR0aCwgc2hhcGVIZWlnaHQsIHQpIHtcbiAgY29uc3QgdHJhbnNmb3JtID0gdC5sZW5ndGggPT09IDIgPyBbLi4udCwgWzAsIDAsIDFdXSA6IFsuLi50XTtcbiAgY29uc3QgbXhJbnYgPSAoMCwgX21hdHJpeEludmVyc2UuZGVmYXVsdCkodHJhbnNmb3JtKTtcbiAgY29uc3Qgc3RhcnRFbmQgPSBbWzAsIDAuNV0sIFsxLCAwLjVdXS5tYXAocCA9PiAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG14SW52LCBwKSk7XG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IFtzdGFydEVuZFswXVswXSAqIHNoYXBlV2lkdGgsIHN0YXJ0RW5kWzBdWzFdICogc2hhcGVIZWlnaHRdLFxuICAgIGVuZDogW3N0YXJ0RW5kWzFdWzBdICogc2hhcGVXaWR0aCwgc3RhcnRFbmRbMV1bMV0gKiBzaGFwZUhlaWdodF1cbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zID0gZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zO1xuXG52YXIgX21hdHJpeEludmVyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJtYXRyaXgtaW52ZXJzZVwiKSk7XG5cbnZhciBfYXBwbHlNYXRyaXhUb1BvaW50ID0gcmVxdWlyZShcIi4vYXBwbHlNYXRyaXhUb1BvaW50XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGNhbiBleHRyYWN0IHRoZSByb3RhdGlvbiAoaW4gZGVncmVlcyksIGNlbnRlciBwb2ludCBhbmQgcmFkaXVzIGZvciBhIHJhZGlhbCBvciBkaWFtb25kIGdyYWRpZW50XG4gKlxuICogQHBhcmFtIHNoYXBlV2lkdGhcbiAqIEBwYXJhbSBzaGFwZUhlaWdodFxuICogQHBhcmFtIHRcbiAqL1xuZnVuY3Rpb24gZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zKHNoYXBlV2lkdGgsIHNoYXBlSGVpZ2h0LCB0KSB7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IHQubGVuZ3RoID09PSAyID8gWy4uLnQsIFswLCAwLCAxXV0gOiBbLi4udF07XG4gIGNvbnN0IG14SW52ID0gKDAsIF9tYXRyaXhJbnZlcnNlLmRlZmF1bHQpKHRyYW5zZm9ybSk7XG4gIGNvbnN0IGNlbnRlclBvaW50ID0gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShteEludiwgWzAuNSwgMC41XSk7XG4gIGNvbnN0IHJ4UG9pbnQgPSAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG14SW52LCBbMSwgMC41XSk7XG4gIGNvbnN0IHJ5UG9pbnQgPSAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG14SW52LCBbMC41LCAxXSk7XG4gIGNvbnN0IHJ4ID0gTWF0aC5zcXJ0KE1hdGgucG93KHJ4UG9pbnRbMF0gLSBjZW50ZXJQb2ludFswXSwgMikgKyBNYXRoLnBvdyhyeFBvaW50WzFdIC0gY2VudGVyUG9pbnRbMV0sIDIpKTtcbiAgY29uc3QgcnkgPSBNYXRoLnNxcnQoTWF0aC5wb3cocnlQb2ludFswXSAtIGNlbnRlclBvaW50WzBdLCAyKSArIE1hdGgucG93KHJ5UG9pbnRbMV0gLSBjZW50ZXJQb2ludFsxXSwgMikpO1xuICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbigocnhQb2ludFsxXSAtIGNlbnRlclBvaW50WzFdKSAvIChyeFBvaW50WzBdIC0gY2VudGVyUG9pbnRbMF0pKSAqICgxODAgLyBNYXRoLlBJKTtcbiAgcmV0dXJuIHtcbiAgICByb3RhdGlvbjogYW5nbGUsXG4gICAgY2VudGVyOiBbY2VudGVyUG9pbnRbMF0gKiBzaGFwZVdpZHRoLCBjZW50ZXJQb2ludFsxXSAqIHNoYXBlSGVpZ2h0XSxcbiAgICByYWRpdXM6IFtyeCAqIHNoYXBlV2lkdGgsIHJ5ICogc2hhcGVIZWlnaHRdXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZpbmRBbGwgPSB2b2lkIDA7XG5cbnZhciBfID0gcmVxdWlyZShcIi4uXCIpO1xuXG4vKipcbiAqIEN1c3RvbSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgZmlnbWEuZmluZEFsbCBtZXRob2QsIHdoaWNoIHJ1bnMgeDEwMDAgdGltZXMgZmFzdGVyLlxuICpcbiAqICMjIyBVc2FnZSBleGFtcGxlXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZmluZEFsbCwgaXNUZXh0Tm9kZSB9IGZyb20gXCJAZmlnbWEtcGx1Z2luL2hlbHBlcnNcIlxuICpcbiAqIGNvbnN0IHRleHROb2RlcyA9IGZpbmRBbGwoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4sIGlzVGV4dE5vZGUpXG4gKiBgYGBcbiAqXG4gKiAjIyMgSG93IHRvIHJlcGxhY2UgbmF0aXZlIGBmaWdtYS5maW5kQWxsYFxuICogYGBgZGlmZlxuICogKyBpbXBvcnQgeyBmaW5kQWxsIH0gZnJvbSBcIkBmaWdtYS1wbHVnaW4vaGVscGVyc1wiXG4gKlxuICogLSBjb25zdCB0ZXh0Tm9kZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiKTtcbiAqICsgY29uc3QgdGV4dE5vZGVzID0gZmluZEFsbChmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbiwgKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIpXG4gKiBgYGBcbiAqL1xuY29uc3QgZmluZEFsbCA9IChub2RlcywgaXRlcmF0ZWUpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpdGVyYXRlZShub2Rlc1tpXSwgaSwgbm9kZXMpKSB7XG4gICAgICByZXN1bHQucHVzaChub2Rlc1tpXSk7XG4gICAgfSBlbHNlIGlmICgoMCwgXy5oYXNDaGlsZHJlbikobm9kZXNbaV0pKSB7XG4gICAgICByZXN1bHQucHVzaCguLi5maW5kQWxsKG5vZGVzW2ldWydjaGlsZHJlbiddLCBpdGVyYXRlZSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnRzLmZpbmRBbGwgPSBmaW5kQWxsOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0QWxsRm9udHM7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiByZXR1cm5zIGFsbCB1c2VkIGZvbnRzIHRvIHRleHROb2Rlc1xuICovXG5mdW5jdGlvbiBnZXRBbGxGb250cyh0ZXh0Tm9kZXMpIHtcbiAgY29uc3QgZm9udHMgPSBbXTtcblxuICBjb25zdCBwdXNoVW5pcXVlID0gZm9udCA9PiB7XG4gICAgaWYgKCFmb250cy5zb21lKGl0ZW0gPT4gaXRlbS5mYW1pbHkgPT09IGZvbnQuZmFtaWx5ICYmIGl0ZW0uc3R5bGUgPT09IGZvbnQuc3R5bGUpKSB7XG4gICAgICBmb250cy5wdXNoKGZvbnQpO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKGNvbnN0IG5vZGUgb2YgdGV4dE5vZGVzKSB7XG4gICAgaWYgKG5vZGUuZm9udE5hbWUgPT09IGZpZ21hLm1peGVkKSB7XG4gICAgICBjb25zdCBsZW4gPSBub2RlLmNoYXJhY3RlcnMubGVuZ3RoO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoaSwgaSArIDEpO1xuICAgICAgICBwdXNoVW5pcXVlKGZvbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwdXNoVW5pcXVlKG5vZGUuZm9udE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb250cztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldEJvdW5kaW5nUmVjdDtcblxudmFyIF9pc1VuZGVmaW5lZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvaXNVbmRlZmluZWRcIikpO1xuXG52YXIgX2FwcGx5TWF0cml4VG9Qb2ludCA9IHJlcXVpcmUoXCIuL2FwcGx5TWF0cml4VG9Qb2ludFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiAgdGhpcyBmdW5jdGlvbiByZXR1cm4gYSBib3VuZGluZyByZWN0IGZvciBhbiBub2Rlc1xuICovXG4vLyB4L3kgYWJzb2x1dGUgY29vcmRpbmF0ZXNcbi8vIGhlaWdodC93aWR0aFxuLy8geDIveTIgYm90dG9tIHJpZ2h0IGNvb3JkaW5hdGVzXG5mdW5jdGlvbiBnZXRCb3VuZGluZ1JlY3Qobm9kZXMpIHtcbiAgY29uc3QgYm91bmRpbmdSZWN0ID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB4MjogMCxcbiAgICB5MjogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDBcbiAgfTtcblxuICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgeHkgPSBub2Rlcy5yZWR1Y2UoKHJleiwgbm9kZSkgPT4ge1xuICAgICAgaWYgKCFub2RlLmFic29sdXRlVHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignUHJvdmlkZWQgbm9kZSBoYXZlblxcJ3QgXCJhYnNvbHV0ZVRyYW5zZm9ybVwiIHByb3BlcnR5LCBidXQgaXRcXCdzIHJlcXVpcmVkIGZvciBjYWxjdWxhdGlvbnMuJyk7XG4gICAgICAgIHJldHVybiByZXo7XG4gICAgICB9XG5cbiAgICAgIGlmICgoMCwgX2lzVW5kZWZpbmVkMi5kZWZhdWx0KShub2RlLmhlaWdodCkgfHwgKDAsIF9pc1VuZGVmaW5lZDIuZGVmYXVsdCkobm9kZS53aWR0aCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdQcm92aWRlZCBub2RlIGhhdmVuXFwndCBcIndpZHRoL2hlaWdodFwiIHByb3BlcnR5LCBidXQgaXRcXCdzIHJlcXVpcmVkIGZvciBjYWxjdWxhdGlvbnMuJyk7XG4gICAgICAgIHJldHVybiByZXo7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBub2RlLmhlaWdodCAvIDI7XG4gICAgICBjb25zdCBoYWxmV2lkdGggPSBub2RlLndpZHRoIC8gMjtcbiAgICAgIGNvbnN0IFtbYzAsIHMwLCB4XSwgW3MxLCBjMSwgeV1dID0gbm9kZS5hYnNvbHV0ZVRyYW5zZm9ybTtcbiAgICAgIGNvbnN0IG1hdHJpeCA9IFtbYzAsIHMwLCB4ICsgaGFsZldpZHRoICogYzAgKyBoYWxmSGVpZ2h0ICogczBdLCBbczEsIGMxLCB5ICsgaGFsZldpZHRoICogczEgKyBoYWxmSGVpZ2h0ICogYzFdXTsgLy8gdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBjb3JuZXJzIG9mIHRoZSByZWN0YW5nbGVcblxuICAgICAgY29uc3QgWFkgPSB7XG4gICAgICAgIHg6IFsxLCAtMSwgMSwgLTFdLFxuICAgICAgICB5OiBbMSwgLTEsIC0xLCAxXVxuICAgICAgfTsgLy8gZmlsbCBpblxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobWF0cml4LCBbWFkueFtpXSAqIGhhbGZXaWR0aCwgWFkueVtpXSAqIGhhbGZIZWlnaHRdKTtcbiAgICAgICAgWFkueFtpXSA9IGFbMF07XG4gICAgICAgIFhZLnlbaV0gPSBhWzFdO1xuICAgICAgfVxuXG4gICAgICBYWS54LnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgIFhZLnkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgcmV6LngucHVzaChYWS54WzBdKTtcbiAgICAgIHJlei55LnB1c2goWFkueVswXSk7XG4gICAgICByZXoueDIucHVzaChYWS54WzNdKTtcbiAgICAgIHJlei55Mi5wdXNoKFhZLnlbM10pO1xuICAgICAgcmV0dXJuIHJlejtcbiAgICB9LCB7XG4gICAgICB4OiBbXSxcbiAgICAgIHk6IFtdLFxuICAgICAgeDI6IFtdLFxuICAgICAgeTI6IFtdXG4gICAgfSk7XG4gICAgY29uc3QgcmVjdCA9IHtcbiAgICAgIHg6IE1hdGgubWluKC4uLnh5LngpLFxuICAgICAgeTogTWF0aC5taW4oLi4ueHkueSksXG4gICAgICB4MjogTWF0aC5tYXgoLi4ueHkueDIpLFxuICAgICAgeTI6IE1hdGgubWF4KC4uLnh5LnkyKVxuICAgIH07XG4gICAgYm91bmRpbmdSZWN0LnggPSByZWN0Lng7XG4gICAgYm91bmRpbmdSZWN0LnkgPSByZWN0Lnk7XG4gICAgYm91bmRpbmdSZWN0LngyID0gcmVjdC54MjtcbiAgICBib3VuZGluZ1JlY3QueTIgPSByZWN0LnkyO1xuICAgIGJvdW5kaW5nUmVjdC53aWR0aCA9IHJlY3QueDIgLSByZWN0Lng7XG4gICAgYm91bmRpbmdSZWN0LmhlaWdodCA9IHJlY3QueTIgLSByZWN0Lnk7XG4gIH1cblxuICByZXR1cm4gYm91bmRpbmdSZWN0O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRUZXh0Tm9kZUNTUyA9IHZvaWQgMDtcblxudmFyIF9nZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2dldFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHN0cmluZ1ZhbHVlVG9Dc3MgPSB2YWx1ZSA9PiB7XG4gIGlmICgvcmlnaHR8Ym90dG9tL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2ZsZXgtZW5kJztcbiAgfSBlbHNlIGlmICgvbGVmdHx0b3AvaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnZmxleC1zdGFydCc7XG4gIH0gZWxzZSBpZiAoL2NlbnRlci9pLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdjZW50ZXInO1xuICB9IGVsc2UgaWYgKC9sb3dlci9pLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdsb3dlcmNhc2UnO1xuICB9IGVsc2UgaWYgKC91cHBlci9pLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICd1cHBlcmNhc2UnO1xuICB9IGVsc2UgaWYgKC90aXRsZS9pLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdjYXBpdGFsaXplJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ25vbmUnO1xuICB9XG59O1xuXG5jb25zdCB1bml0VmFsdWVUb0NzcyA9ICh7XG4gIHVuaXQsXG4gIHZhbHVlXG59KSA9PiB7XG4gIGlmICh1bml0ID09PSAnUEVSQ0VOVCcpIHtcbiAgICByZXR1cm4gYCR7dmFsdWV9JWA7XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ1BJWEVMUycpIHtcbiAgICByZXR1cm4gYCR7dmFsdWV9cHhgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnYXV0byc7XG4gIH1cbn07XG5cbmNvbnN0IGlzVW5pdFZhbHVlID0gb2JqID0+IHtcbiAgcmV0dXJuIG9iai5oYXNPd25Qcm9wZXJ0eSgndW5pdCcpO1xufTtcblxuY29uc3QgZ2V0U3R5bGVWYWx1ZSA9IChub2RlLCBrZXksIGV4YWN0U3RyaW5nKSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gKDAsIF9nZXQyLmRlZmF1bHQpKG5vZGUsIGtleSk7XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGV4YWN0U3RyaW5nID8gdmFsdWUudG9Mb3dlckNhc2UoKS50cmltKCkgOiBzdHJpbmdWYWx1ZVRvQ3NzKHZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcbiAgfSBlbHNlIGlmIChpc1VuaXRWYWx1ZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdW5pdFZhbHVlVG9Dc3ModmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUud2FybignVW5leHBlY3RlZCB2YWx1ZTogJywgdmFsdWUpO1xuICB9XG59O1xuLyoqXG4gKiAgZ2V0IENTUyBzdHlsZXMgb2YgVGV4dE5vZGVcbiAqL1xuXG5cbmNvbnN0IGdldFRleHROb2RlQ1NTID0gbm9kZSA9PiB7XG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiBnZXRTdHlsZVZhbHVlKG5vZGUsICd5JyksXG4gICAgbGVmdDogZ2V0U3R5bGVWYWx1ZShub2RlLCAneCcpLFxuICAgIHdpZHRoOiBnZXRTdHlsZVZhbHVlKG5vZGUsICd3aWR0aCcpLFxuICAgIGhlaWdodDogZ2V0U3R5bGVWYWx1ZShub2RlLCAnaGVpZ2h0JyksXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICdqdXN0aWZ5LWNvbnRlbnQnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICd0ZXh0QWxpZ25Ib3Jpem9udGFsJyksXG4gICAgJ2FsaWduLWl0ZW1zJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAndGV4dEFsaWduVmVydGljYWwnKSxcbiAgICAndGV4dC1pbmRlbnQnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICdwYXJhZ3JhcGhJbmRlbnQnKSxcbiAgICAnbGV0dGVyLXNwYWNpbmcnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICdsZXR0ZXJTcGFjaW5nJyksXG4gICAgJ2xpbmUtaGVpZ2h0JzogZ2V0U3R5bGVWYWx1ZShub2RlLCAnbGluZUhlaWdodCcpLFxuICAgICdmb250LXNpemUnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICdmb250U2l6ZScpLFxuICAgICdmb250LXN0eWxlJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAnZm9udE5hbWUuc3R5bGUnLCB0cnVlKSxcbiAgICAnZm9udC13ZWlnaHQnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICdmb250TmFtZS5zdHlsZScsIHRydWUpLFxuICAgICd0ZXh0LWRlY29yYXRpb24nOiBnZXRTdHlsZVZhbHVlKG5vZGUsICd0ZXh0RGVjb3JhdGlvbicsIHRydWUpLFxuICAgICd0ZXh0LXRyYW5zZm9ybSc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3RleHRDYXNlJyksXG4gICAgJ2ZvbnQtZmFtaWx5JzogYCR7Z2V0U3R5bGVWYWx1ZShub2RlLCAnZm9udE5hbWUuZmFtaWx5JywgdHJ1ZSl9ICR7Z2V0U3R5bGVWYWx1ZShub2RlLCAnZm9udE5hbWUuc3R5bGUnLCB0cnVlKX1gXG4gIH07XG59OyAvLyB0aGlzIGZpbGUgY2FuIGJlIGV4dGVuZGVkIHRvIHN1cHBvcnQgYWxsIG5vZGUgdHlwZXNcblxuXG5leHBvcnRzLmdldFRleHROb2RlQ1NTID0gZ2V0VGV4dE5vZGVDU1M7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXROb2RlSW5kZXg7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIGdldCB0aGUgcmV0dXJuIHRoZSBpbmRleCBvZiBub2RlIGluIGl0cyBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0Tm9kZUluZGV4KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUucGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRQYWdlO1xuXG52YXIgX2lzVHlwZU5vZGUgPSByZXF1aXJlKFwiLi9pc1R5cGVOb2RlXCIpO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBwYXNzIGluIGEgbm9kZSBhbmQgcmV0dXJuIGl0cyBwYWdlTm9kZVxuICovXG5mdW5jdGlvbiBnZXRQYWdlKG5vZGUpIHtcbiAgaWYgKCEoMCwgX2lzVHlwZU5vZGUuaXNQYWdlTm9kZSkobm9kZSkpIHtcbiAgICByZXR1cm4gZ2V0UGFnZShub2RlLnBhcmVudCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0UmVsYXRpdmVQb3NpdGlvbiA9IGV4cG9ydHMuZ2V0VG9wTGV2ZWxQYXJlbnQgPSB2b2lkIDA7XG5cbnZhciBfID0gcmVxdWlyZShcIi4uL1wiKTtcblxuLyoqXG4gKiBSZXR1cm4gdG9wIGxldmVsIHBhcmVudCBmb3Igbm9kZSBiZWZvcmUgUGFnZU5vZGUuXG4gKiBGb3IgZXhhbXBsZTpcbiAqIGBgYGpzXG4gKiAvLyBmb3Igc3RydWN0dXJlIGJlbG93XG4gKiAvLyBQYWdlIC8gRnJhbWUgLyBHcm91cDEgLyBHcm91cDIgLyBUZXh0XG4gKlxuICogZ2V0VG9wTGV2ZWxQYXJlbnQoVGV4dCkgLy8gRnJhbWVcbiAqIGBgYFxuICovXG5jb25zdCBnZXRUb3BMZXZlbFBhcmVudCA9IG5vZGUgPT4ge1xuICBpZiAobm9kZSAmJiBub2RlLnBhcmVudCAmJiAhKDAsIF8uaXNQYWdlTm9kZSkobm9kZS5wYXJlbnQpKSB7XG4gICAgcmV0dXJuIGdldFRvcExldmVsUGFyZW50KG5vZGUucGFyZW50KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufTtcbi8qKlxuICogQ2FsY3VsYXRlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIG5vZGUgYmFzZWQgb24gcHJvdmlkZWQgcGFyZW50IG9yIHRvcCBsZXZlbCBwYXJlbnQuXG4gKiBGb3IgZXhhbXBsZTpcbiAqIGBgYGpzXG4gKiAvLyBmb3Igc3RydWN0dXJlIGJlbG93XG4gKiAvLyBQYWdlIC8gRnJhbWUgLyBHcm91cDEgLyBHcm91cDIgLyBUZXh0XG4gKlxuICogZ2V0UmVsYXRpdmVQb3NpdGlvbihUZXh0LCBHcm91cDEpIC8vIHdpbGwgY2FsY3VsYXRlIHsgeCwgeSB9IGJhc2VkIG9uIEdyb3VwMVxuICpcbiAqIGdldFJlbGF0aXZlUG9zaXRpb24oVGV4dCkgLy8gd2lsbCBjYWxjdWxhdGUgeyB4LCB5IH0gYmFzZWQgb24gRnJhbWVcbiAqIGBgYFxuICoqL1xuXG5cbmV4cG9ydHMuZ2V0VG9wTGV2ZWxQYXJlbnQgPSBnZXRUb3BMZXZlbFBhcmVudDtcblxuY29uc3QgZ2V0UmVsYXRpdmVQb3NpdGlvbiA9IChub2RlLCByZWxhdGl2ZU5vZGUpID0+IHtcbiAgcmVsYXRpdmVOb2RlID0gcmVsYXRpdmVOb2RlIHx8IGdldFRvcExldmVsUGFyZW50KG5vZGUpO1xuICByZXR1cm4ge1xuICAgIHg6IE1hdGguYWJzKE1hdGgucm91bmQocmVsYXRpdmVOb2RlLmFic29sdXRlVHJhbnNmb3JtWzBdWzJdIC0gbm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXSkpLFxuICAgIHk6IE1hdGguYWJzKE1hdGgucm91bmQocmVsYXRpdmVOb2RlLmFic29sdXRlVHJhbnNmb3JtWzFdWzJdIC0gbm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVsxXVsyXSkpXG4gIH07XG59O1xuXG5leHBvcnRzLmdldFJlbGF0aXZlUG9zaXRpb24gPSBnZXRSZWxhdGl2ZVBvc2l0aW9uOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5oYXNDaGlsZHJlbiA9IHZvaWQgMDtcblxuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBoYXZlIGNoaWxkcmVuIG5vZGVzXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0c1xuICogLy8gQkVGT1JFXG4gKiBjb25zb2xlLmxvZyhub2RlLmNoaWxkcmVuKSAvLyB0aHJvdyBUUyBlcnJvciBcIlByb3BlcnR5ICdjaGlsZHJlbicgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAuLi5cIlxuICpcbiAqIC8vIEFGVEVSXG4gKiBpZiAoaGFzQ2hpbGRyZW4obm9kZSkpIHtcbiAqICBjb25zb2xlLmxvZyhub2RlLmNoaWxkcmVuKSAvLyB2YWxpZCBjb2RlXG4gKiB9XG4gKiBgYGBcbiAqXG4gKi9cbmNvbnN0IGhhc0NoaWxkcmVuID0gbm9kZSA9PiBCb29sZWFuKG5vZGVbJ2NoaWxkcmVuJ10pO1xuXG5leHBvcnRzLmhhc0NoaWxkcmVuID0gaGFzQ2hpbGRyZW47IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1BhcnRPZkluc3RhbmNlO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBjaGVjayB3aGV0aGVyIGEgbm9kZSBpcyBwYXJ0IG9mIGFuIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIGlzUGFydE9mSW5zdGFuY2Uobm9kZSkge1xuICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudDtcblxuICBpZiAocGFyZW50LnR5cGUgPT09ICdJTlNUQU5DRScpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gJ1BBR0UnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpc1BhcnRPZkluc3RhbmNlKHBhcmVudCk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzUGFydE9mTm9kZTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gY2hlY2sgd2hldGhlciBhIG5vZGUgaXMgcGFydCBvZiBhbiByb290Tm9kZVxuICovXG5mdW5jdGlvbiBpc1BhcnRPZk5vZGUocGFydCwgcm9vdE5vZGUpIHtcbiAgY29uc3QgcGFyZW50ID0gcGFydC5wYXJlbnQ7XG5cbiAgaWYgKHBhcmVudCA9PT0gcm9vdE5vZGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gJ1BBR0UnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpc1BhcnRPZk5vZGUocGFyZW50LCByb290Tm9kZSk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNPbmVPZk5vZGVUeXBlID0gZXhwb3J0cy5pc0NvbXBvbmVudE5vZGUgPSBleHBvcnRzLmlzSW5zdGFuY2VOb2RlID0gZXhwb3J0cy5pc1RleHROb2RlID0gZXhwb3J0cy5pc0ZyYW1lTm9kZSA9IGV4cG9ydHMuaXNHcm91cE5vZGUgPSBleHBvcnRzLmlzUGFnZU5vZGUgPSB2b2lkIDA7XG5cbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgUGFnZU5vZGVcbiAqL1xuY29uc3QgaXNQYWdlTm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnUEFHRSc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBHcm91cE5vZGVcbiAqL1xuXG5cbmV4cG9ydHMuaXNQYWdlTm9kZSA9IGlzUGFnZU5vZGU7XG5cbmNvbnN0IGlzR3JvdXBOb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdHUk9VUCc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBGcmFtZU5vZGVcbiAqL1xuXG5cbmV4cG9ydHMuaXNHcm91cE5vZGUgPSBpc0dyb3VwTm9kZTtcblxuY29uc3QgaXNGcmFtZU5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0ZSQU1FJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIFRleHROb2RlXG4gKi9cblxuXG5leHBvcnRzLmlzRnJhbWVOb2RlID0gaXNGcmFtZU5vZGU7XG5cbmNvbnN0IGlzVGV4dE5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ1RFWFQnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgSW5zdGFuY2VOb2RlXG4gKi9cblxuXG5leHBvcnRzLmlzVGV4dE5vZGUgPSBpc1RleHROb2RlO1xuXG5jb25zdCBpc0luc3RhbmNlTm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnSU5TVEFOQ0UnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgQ29tcG9uZW50Tm9kZVxuICovXG5cblxuZXhwb3J0cy5pc0luc3RhbmNlTm9kZSA9IGlzSW5zdGFuY2VOb2RlO1xuXG5jb25zdCBpc0NvbXBvbmVudE5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0NPTVBPTkVOVCc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBvbmUgb2YgcHJvdmlkZWQgdHlwZXNcbiAqL1xuXG5cbmV4cG9ydHMuaXNDb21wb25lbnROb2RlID0gaXNDb21wb25lbnROb2RlO1xuXG5jb25zdCBpc09uZU9mTm9kZVR5cGUgPSAobm9kZSwgdHlwZUxpc3QpID0+IHtcbiAgcmV0dXJuIHR5cGVMaXN0LmluY2x1ZGVzKG5vZGUudHlwZSk7XG59O1xuXG5leHBvcnRzLmlzT25lT2ZOb2RlVHlwZSA9IGlzT25lT2ZOb2RlVHlwZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzVmlzaWJsZU5vZGU7XG5cbi8qKlxuICogVGhpcyBoZWxwZXIgcmVjdXJzaXZlbHkgY2hlY2tzIGFsbCBwYXJlbnRzIGZvciB2aXNpYmlsaXR5LCB0byBndWFyYW50ZWUgdGhhdCdzIG5vZGUgaXMgdmlzaWJsZVxuICovXG5mdW5jdGlvbiBpc1Zpc2libGVOb2RlKG5vZGUpIHtcbiAgaWYgKG5vZGUgJiYgbm9kZS5wYXJlbnQpIHtcbiAgICBpZiAobm9kZS52aXNpYmxlICYmIG5vZGUucGFyZW50LnR5cGUgIT09ICdQQUdFJykge1xuICAgICAgcmV0dXJuIGlzVmlzaWJsZU5vZGUobm9kZS5wYXJlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbm9kZS52aXNpYmxlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvYWRGb250cztcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFzeW5jaHJvbm91c2x5IGxvYWRzIHRoZSBwYXNzZWQgZm9udHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZEZvbnRzKGZvbnRzKSB7XG4gIGNvbnN0IHByb21pc2VzID0gZm9udHMubWFwKGZvbnQgPT4gZmlnbWEubG9hZEZvbnRBc3luYyhmb250KSk7XG4gIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgcmV0dXJuIGZvbnRzO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbG9hZFVuaXF1ZUZvbnRzO1xuXG52YXIgX2dldEFsbEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9nZXRBbGxGb250c1wiKSk7XG5cbnZhciBfbG9hZEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkRm9udHNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBsb2FkIG9ubHkgdW5pcXVlIGZvbnRzIGFzeW5jaHJvbm91c2x5XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRVbmlxdWVGb250cyh0ZXh0Tm9kZXMpIHtcbiAgY29uc3QgZm9udHMgPSAoMCwgX2dldEFsbEZvbnRzLmRlZmF1bHQpKHRleHROb2Rlcyk7XG4gIHJldHVybiAoMCwgX2xvYWRGb250cy5kZWZhdWx0KShmb250cyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm5vZGVUb09iamVjdCA9IHZvaWQgMDtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gbm9kZSB0byBvYmplY3Qgd2l0aCBrZXlzLCB0aGF0IGFyZSBoaWRkZW4gYnkgZGVmYXVsdC5cbiAqIEZvciBleGFtcGxlOlxuICogYGBgdHNcbiAqIGNvbnN0IG5vZGUgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kT25lKChlbCkgPT4gZWwudHlwZSA9PT0gXCJURVhUXCIpO1xuICogY29uc29sZS5sb2coT2JqZWN0LmtleXMobm9kZSkubGVuZ3RoKSAvLyAxXG4gKiBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhub2RlVG9PYmplY3Qobm9kZSkpLmxlbmd0aCkgLy8gNDJcbiAqIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKG5vZGVUb09iamVjdChub2RlLCB0cnVlKSkubGVuZ3RoKSAvLyAzOVxuICogYGBgXG4gKlxuICogQHBhcmFtIG5vZGVcbiAqIEBwYXJhbSB3aXRob3V0UmVsYXRpb25zXG4gKi9cbmNvbnN0IG5vZGVUb09iamVjdCA9IChub2RlLCB3aXRob3V0UmVsYXRpb25zKSA9PiB7XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmVudHJpZXMoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobm9kZS5fX3Byb3RvX18pKTtcbiAgY29uc3QgYmxhY2tsaXN0ID0gWydwYXJlbnQnLCAnY2hpbGRyZW4nLCAncmVtb3ZlZCcsICdtYXN0ZXJDb21wb25lbnQnXTtcbiAgY29uc3Qgb2JqID0ge1xuICAgIGlkOiBub2RlLmlkLFxuICAgIHR5cGU6IG5vZGUudHlwZVxuICB9O1xuXG4gIGZvciAoY29uc3QgW25hbWUsIHByb3BdIG9mIHByb3BzKSB7XG4gICAgaWYgKHByb3AuZ2V0ICYmICFibGFja2xpc3QuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW25hbWVdID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIG9ialtuYW1lXSA9ICdNaXhlZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqW25hbWVdID0gcHJvcC5nZXQuY2FsbChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIG9ialtuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobm9kZS5wYXJlbnQgJiYgIXdpdGhvdXRSZWxhdGlvbnMpIHtcbiAgICBvYmoucGFyZW50ID0ge1xuICAgICAgaWQ6IG5vZGUucGFyZW50LmlkLFxuICAgICAgdHlwZTogbm9kZS5wYXJlbnQudHlwZVxuICAgIH07XG4gIH1cblxuICBpZiAobm9kZS5jaGlsZHJlbiAmJiAhd2l0aG91dFJlbGF0aW9ucykge1xuICAgIG9iai5jaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4ubWFwKGNoaWxkID0+IG5vZGVUb09iamVjdChjaGlsZCwgd2l0aG91dFJlbGF0aW9ucykpO1xuICB9XG5cbiAgaWYgKG5vZGUubWFzdGVyQ29tcG9uZW50ICYmICF3aXRob3V0UmVsYXRpb25zKSB7XG4gICAgb2JqLm1hc3RlckNvbXBvbmVudCA9IG5vZGVUb09iamVjdChub2RlLm1hc3RlckNvbXBvbmVudCwgd2l0aG91dFJlbGF0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuZXhwb3J0cy5ub2RlVG9PYmplY3QgPSBub2RlVG9PYmplY3Q7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlVGV4dFN0eWxlID0gcGFyc2VUZXh0U3R5bGU7XG5leHBvcnRzLnNwbGl0VGV4dFN0eWxlSW50b0xpbmVzID0gc3BsaXRUZXh0U3R5bGVJbnRvTGluZXM7XG5leHBvcnRzLmpvaW5UZXh0TGluZXNTdHlsZXMgPSBqb2luVGV4dExpbmVzU3R5bGVzO1xuZXhwb3J0cy5hcHBseVRleHRTdHlsZVRvVGV4dE5vZGUgPSBhcHBseVRleHRTdHlsZVRvVGV4dE5vZGU7XG5leHBvcnRzLmNoYW5nZUNoYXJhY3RlcnNUZXh0U3R5bGUgPSBjaGFuZ2VDaGFyYWN0ZXJzVGV4dFN0eWxlO1xuZXhwb3J0cy5jaGFuZ2VUZXh0U3R5bGUgPSBjaGFuZ2VUZXh0U3R5bGU7XG5cbnZhciBfdW5pcVdpdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL3VuaXFXaXRoXCIpKTtcblxudmFyIF9jbG9uZURlZXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKSk7XG5cbnZhciBfaXNFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvaXNFcXVhbFwiKSk7XG5cbnZhciBfZ2V0QWxsRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2dldEFsbEZvbnRzXCIpKTtcblxudmFyIF9sb2FkRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRGb250c1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHN0eWxlRm9udHMgPSBbJ2ZvbnRTaXplJywgJ2ZvbnROYW1lJywgJ3RleHRDYXNlJywgJ3RleHREZWNvcmF0aW9uJywgJ2xldHRlclNwYWNpbmcnLCAnbGluZUhlaWdodCcsICdmaWxscycsICd0ZXh0U3R5bGVJZCcsICdmaWxsU3R5bGVJZCddO1xuLypcblx0VGhlIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRleHQgbm9kZSBzdHlsZXMsIHNwbGl0dGluZyB0aGVtIGludG8gZGlmZmVyZW50IGFycmF5cywgc3VjaCBhczpcblx0W3tcblx0XHRjaGFyYWN0ZXJzOiBcIi4uLlwiLFxuXHRcdC4uLiAoc3R5bGVzKVxuXHR9LCAuLi5dXG5cblx0LS0tXG5cblx0UmV0dXJucyBzdHlsZXMgZm9yIHRoZSBlbnRpcmUgdGV4dDpcblx0cGFyc2VUZXh0U3R5bGUodGV4dE5vZGUpXG5cdFxuXHRSZXR1cm5zIHRleHQgc3R5bGVzIGZyb20gdGhlIDEwMHRoIHRvIHRoZSBsYXN0IGNoYXJhY3Rlcjpcblx0cGFyc2VUZXh0U3R5bGUodGV4dE5vZGUsIDEwMClcblxuXHRSZXR1cm5zIHN0eWxlcyBmb3IgdGhlIGVudGlyZSB0ZXh0LCBidXQgb25seSB3aXRoIGZvbnROYW1lIGFuZCB0ZXh0RGVjb3JhdGlvbjpcblx0cGFyc2VUZXh0U3R5bGUodGV4dE5vZGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBbXCJmb250TmFtZVwiLCBcInRleHREZWNvcmF0aW9uXCJdKVxuKi9cblxuZnVuY3Rpb24gcGFyc2VUZXh0U3R5bGUobm9kZSwgc3RhcnQgPSAwLCBlbmQsIHN0eWxlTmFtZSkge1xuICBpZiAoIWVuZCkgZW5kID0gbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aDtcbiAgaWYgKCFzdHlsZU5hbWUpIHN0eWxlTmFtZSA9IHN0eWxlRm9udHM7XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1N0YXJ0IG11c3QgYmUgZ3JlYXRlciB0aGFuIGVuZCcpO1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyBzdHJpbmcgc3Vic3RyaW5nLCBkZWZpbmVkIHN0eWxlc1xuXG5cbiAgY29uc3Qgc3R5bGVNYXAgPSBbXTsgLy8gYSBjb21wb3Npbmcgc3RyaW5nIG9mIGEgc3BlY2lmaWMgc3R5bGVcblxuICBsZXQgdGV4dFN0eWxlO1xuICBjb25zdCBuYW1lcyA9IHN0eWxlTmFtZS5tYXAobmFtZSA9PiB7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvXiguKS9nLCAkMSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcbiAgfSk7IC8vIHNwbGl0dGluZyB0ZXh0IGludG8gc3Vic3RyaW5ncyBieSBzdHlsZVxuXG4gIGZvciAobGV0IHN0YXJ0SW5kZXggPSBzdGFydDsgc3RhcnRJbmRleCA8IGVuZDsgc3RhcnRJbmRleCsrKSB7XG4gICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgMTtcbiAgICBjb25zdCBsZXR0ZXIgPSB7XG4gICAgICBjaGFyYWN0ZXJzOiBub2RlLmNoYXJhY3RlcnNbc3RhcnRJbmRleF1cbiAgICB9OyAvLyBjb2xsZWN0aW9uIG9mIHN0eWxlc1xuXG4gICAgbmFtZXMuZm9yRWFjaCgobiwgaSkgPT4ge1xuICAgICAgbGV0dGVyW3N0eWxlTmFtZVtpXV0gPSBub2RlWydnZXRSYW5nZScgKyBuXShzdGFydEluZGV4LCBlbmRJbmRleCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGV4dFN0eWxlKSB7XG4gICAgICBpZiAoaXNFcXVhbExldHRlclN0eWxlKGxldHRlciwgdGV4dFN0eWxlKSkge1xuICAgICAgICAvLyB0aGUgY2hhcmFjdGVyIGhhcyB0aGUgc2FtZSBwcm9wZXJ0aWVzIGFzIHRoZSBnZW5lcmF0ZWQgc3Vic3RyaW5nXG4gICAgICAgIC8vIGFkZCBpdCB0byBpdFxuICAgICAgICB0ZXh0U3R5bGUuY2hhcmFjdGVycyArPSBsZXR0ZXIuY2hhcmFjdGVycztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHN0eWxlIHByb3BlcnRpZXMgYXJlIGRpZmZlcmVudFxuICAgICAgICBzdHlsZU1hcC5wdXNoKHRleHRTdHlsZSk7IC8vIHdlIHN0YXJ0IHRvIGZvcm0gYSBuZXcgc3Vic3RyaW5nXG5cbiAgICAgICAgdGV4dFN0eWxlID0gbGV0dGVyO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3ZSBzdGFydCBmb3JtaW5nIHRoZSBmaXJzdCBzdWJzdHJpbmdcbiAgICAgIHRleHRTdHlsZSA9IGxldHRlcjtcbiAgICB9XG4gIH1cblxuICBzdHlsZU1hcC5wdXNoKHRleHRTdHlsZSk7XG4gIHJldHVybiBzdHlsZU1hcDtcbn1cbi8qXG5cdEFsbG93cyB0byBzcGxpdCB0aGUgc3R5bGVzIG9idGFpbmVkIHdpdGggcGFyc2VUZXh0U3R5bGUgaW50byBsaW5lcyBiYXNlZCBvbiBuZXdsaW5lcy5cblxuXHRJZiB0aGUgcmVtb3ZlTmV3bGluZUNoYXJhY3RlcnMgcGFyYW1ldGVyID09IHRydWUsIHRoZSBuZXdsaW5lIGNoYXJhY3RlcnMgd2lsbCBiZSByZW1vdmVkLlxuXHRSZW1vdmVFbXB0eWxpbmVzID09IHRydWUgd2lsbCByZW1vdmUgZW1wdHkgbGluZXMuXG4qL1xuXG5cbmZ1bmN0aW9uIHNwbGl0VGV4dFN0eWxlSW50b0xpbmVzKHRleHRTdHlsZSwgcmVtb3ZlTmV3bGluZUNoYXJhY3RlcnMgPSBmYWxzZSwgcmVtb3ZlRW1wdHlsaW5lcyA9IGZhbHNlKSB7XG4gIGxldCBsaW5lID0gW107XG4gIGxldCBsaW5lcyA9IFtdO1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyguK3woPzw9XFxuKSguPykoPz0kKSkoXFxufFxcdTIwMjgpP3woXFxufFxcdTIwMjgpJywgJ2cnKTtcbiAgY29uc3QgcmUyID0gbmV3IFJlZ0V4cCgnXFxufFxcdTIwMjgnKTtcbiAgdGV4dFN0eWxlLmZvckVhY2goKHN0eWxlLCBpbmRleCkgPT4ge1xuICAgIGlmIChyZTIudGVzdChzdHlsZS5jaGFyYWN0ZXJzKSkge1xuICAgICAgY29uc3QgbHMgPSBzdHlsZS5jaGFyYWN0ZXJzLm1hdGNoKHJlKTtcblxuICAgICAgaWYgKGxzID09PSBudWxsKSB7XG4gICAgICAgIC8vIHRleHQgaXMgbWlzc2luZ1xuICAgICAgICBsaW5lLnB1c2goc3R5bGUpO1xuICAgICAgfSBlbHNlIGlmIChscy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gdGhlIHN0eWxlIHRleHQgY29uc2lzdHMgb2YgMSBsaW5lXG4gICAgICAgIGxpbmUucHVzaChzdHlsZSk7XG4gICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIGxpbmUgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG11bHRpcGxlLWxpbmUgdGV4dFxuICAgICAgICBzdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KShzdHlsZSk7XG4gICAgICAgIHN0eWxlLmNoYXJhY3RlcnMgPSBscy5zaGlmdCgpO1xuICAgICAgICBsaW5lLnB1c2goc3R5bGUpO1xuICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICBsaW5lID0gW107XG4gICAgICAgIGNvbnN0IGxhc3QgPSBscy5wb3AoKTsgLy8gZGVhbGluZyB3aXRoIGludGVybmFsIHRleHQgc3RyaW5nc1xuXG4gICAgICAgIGxpbmVzLnB1c2goLi4ubHMubWFwKGUgPT4ge1xuICAgICAgICAgIHN0eWxlID0gKDAsIF9jbG9uZURlZXAyLmRlZmF1bHQpKHN0eWxlKTtcbiAgICAgICAgICBzdHlsZS5jaGFyYWN0ZXJzID0gZTtcbiAgICAgICAgICByZXR1cm4gW3N0eWxlXTtcbiAgICAgICAgfSkpO1xuICAgICAgICBzdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KShzdHlsZSk7XG4gICAgICAgIHN0eWxlLmNoYXJhY3RlcnMgPSBsYXN0O1xuXG4gICAgICAgIGlmIChsYXN0ID09PSAnJykge1xuICAgICAgICAgIGlmICghdGV4dFN0eWxlW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgIC8vIGxhc3QgbGluZSBmaW5hbFxuICAgICAgICAgICAgbGluZXMucHVzaChbc3R5bGVdKTtcbiAgICAgICAgICB9IC8vIGVsc2UgZmFsc2UgZW5kIG9mIHRleHRcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGRvZXMgbm90IGVuZFxuICAgICAgICAgIGxpbmUucHVzaChzdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGluZS5wdXNoKHN0eWxlKTtcbiAgICB9XG4gIH0pO1xuICBpZiAobGluZS5sZW5ndGgpIGxpbmVzLnB1c2gobGluZSk7IC8vIGRlbGV0aW5nIG5ld2xpbmUgY2hhcmFjdGVyc1xuXG4gIGlmIChyZW1vdmVOZXdsaW5lQ2hhcmFjdGVycykge1xuICAgIGxpbmVzLmZvckVhY2gobCA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9IGxbbC5sZW5ndGggLSAxXTtcbiAgICAgIHN0eWxlLmNoYXJhY3RlcnMgPSBzdHlsZS5jaGFyYWN0ZXJzLnJlcGxhY2UocmUyLCAnJyk7XG4gICAgfSk7XG4gIH0gLy8gZGVsZXRpbmcgZW1wdHkgbGluZXNcblxuXG4gIGlmIChyZW1vdmVFbXB0eWxpbmVzKSB7XG4gICAgbGluZXMgPSBsaW5lcy5maWx0ZXIobCA9PiBsLmZpbHRlcihsID0+IGwuY2hhcmFjdGVycy5yZXBsYWNlKHJlMiwgJycpICE9PSAnJykubGVuZ3RoICE9PSAwKTtcbiAgfVxuXG4gIHJldHVybiBsaW5lcztcbn1cbi8qXG5cdEludmVyc2UgZnVuY3Rpb24gb2Ygc3BsaXRUZXh0U3R5bGVJbnRvTGluZXMuXG5cdFRoZSBhZGROZXdsaW5lQ2hhcmFjdGVycyBwYXJhbWV0ZXIgaXMgcmVzcG9uc2libGUgZm9yIHdoZXRoZXIgeW91IG5lZWQgdG8gYWRkIGEgbmV3bGluZSBjaGFyYWN0ZXIgYXQgdGhlIGVuZCBvZiBlYWNoIGxpbmVcbiovXG5cblxuZnVuY3Rpb24gam9pblRleHRMaW5lc1N0eWxlcyh0ZXh0U3R5bGUsIGFkZE5ld2xpbmVDaGFyYWN0ZXJzID0gZmFsc2UpIHtcbiAgY29uc3QgdFN0eWxlID0gKDAsIF9jbG9uZURlZXAyLmRlZmF1bHQpKHRleHRTdHlsZSk7XG4gIGxldCBuZXdsaW5lID0gJyc7XG5cbiAgc3dpdGNoICh0eXBlb2YgYWRkTmV3bGluZUNoYXJhY3RlcnMpIHtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGlmIChhZGROZXdsaW5lQ2hhcmFjdGVycykgbmV3bGluZSA9ICdcXG4nO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgbmV3bGluZSA9IGFkZE5ld2xpbmVDaGFyYWN0ZXJzO1xuICAgICAgYnJlYWs7XG4gIH0gLy8gYWRkaW5nIG5ldyBsaW5lIGNoYXJhY3RlcnNcblxuXG4gIGlmIChhZGROZXdsaW5lQ2hhcmFjdGVycyAmJiBuZXdsaW5lKSB7XG4gICAgdFN0eWxlLmZvckVhY2goKHN0eWxlLCBpKSA9PiB7XG4gICAgICBpZiAoaSAhPT0gdFN0eWxlLmxlbmd0aCAtIDEpIHN0eWxlW3N0eWxlLmxlbmd0aCAtIDFdLmNoYXJhY3RlcnMgKz0gbmV3bGluZTtcbiAgICB9KTtcbiAgfSAvLyBqb2luXG5cblxuICBjb25zdCBsaW5lID0gdFN0eWxlLnNoaWZ0KCk7XG4gIHRTdHlsZS5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICBjb25zdCBmaXRzdCA9IHN0eWxlLnNoaWZ0KCk7XG5cbiAgICBpZiAoaXNFcXVhbExldHRlclN0eWxlKGZpdHN0LCBsaW5lW2xpbmUubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAvLyB0aGUgc3R5bGUgb2YgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGluZSBkaWZmZXJzIGZyb20gdGhlIGVuZCBvZiB0aGUgc3R5bGUgb2YgdGhlIHRleHQgYmVpbmcgY29tcGlsZWRcbiAgICAgIGxpbmVbbGluZS5sZW5ndGggLSAxXS5jaGFyYWN0ZXJzICs9IGZpdHN0LmNoYXJhY3RlcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmUucHVzaChmaXRzdCk7XG4gICAgfVxuXG4gICAgaWYgKHN0eWxlLmxlbmd0aCkgbGluZS5wdXNoKC4uLnN0eWxlKTtcbiAgfSk7XG4gIHJldHVybiBsaW5lO1xufVxuLypcblx0QXBwbHkgdGhlIHRleHQgc3R5bGVzIG9idGFpbmVkIGZyb20gcGFyc2VUZXh0U3R5bGUgdG8gdGhlIHRleHQgbm9kZS5cblx0VGhlIHNlY29uZCBwYXJhbWV0ZXIgY2FuIGJlIHBhc3NlZCBhIHRleHQgbm9kZSwgdGhlIHRleHQgb2Ygd2hpY2ggd2lsbCBiZSBjaGFuZ2VkLlxuKi9cblxuXG5hc3luYyBmdW5jdGlvbiBhcHBseVRleHRTdHlsZVRvVGV4dE5vZGUodGV4dFN0eWxlLCB0ZXh0Tm9kZSwgaXNMb2FkRm9udHMgPSB0cnVlKSB7XG4gIGlmIChpc0xvYWRGb250cykge1xuICAgIGxldCBmb250cyA9IFt7XG4gICAgICBmYW1pbHk6ICdSb2JvdG8nLFxuICAgICAgc3R5bGU6ICdSZWd1bGFyJ1xuICAgIH1dO1xuXG4gICAgaWYgKHRleHRTdHlsZVswXS5mb250TmFtZSkge1xuICAgICAgZm9udHMucHVzaCguLi50ZXh0U3R5bGUubWFwKGUgPT4gZS5mb250TmFtZSkpO1xuICAgIH1cblxuICAgIGlmICh0ZXh0Tm9kZSkge1xuICAgICAgZm9udHMucHVzaCguLi4oMCwgX2dldEFsbEZvbnRzLmRlZmF1bHQpKFt0ZXh0Tm9kZV0pKTtcbiAgICB9XG5cbiAgICBmb250cyA9ICgwLCBfdW5pcVdpdGgyLmRlZmF1bHQpKGZvbnRzLCBfaXNFcXVhbDIuZGVmYXVsdCk7XG4gICAgYXdhaXQgKDAsIF9sb2FkRm9udHMuZGVmYXVsdCkoZm9udHMpO1xuICB9XG5cbiAgaWYgKCF0ZXh0Tm9kZSkgdGV4dE5vZGUgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gIHRleHROb2RlLmNoYXJhY3RlcnMgPSB0ZXh0U3R5bGUucmVkdWNlKChzdHIsIHN0eWxlKSA9PiB7XG4gICAgcmV0dXJuIHN0ciArIHN0eWxlLmNoYXJhY3RlcnM7XG4gIH0sICcnKTtcbiAgbGV0IG4gPSAwO1xuICB0ZXh0U3R5bGUuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgY29uc3QgTCA9IHN0eWxlLmNoYXJhY3RlcnMubGVuZ3RoO1xuXG4gICAgaWYgKEwpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgICAgIGlmIChrZXkgIT09ICdjaGFyYWN0ZXJzJykge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBrZXkucmVwbGFjZSgvXiguKS9nLCAkMSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICB0ZXh0Tm9kZVsnc2V0UmFuZ2UnICsgbmFtZV0obiwgbiArIEwsIHN0eWxlW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG4gKz0gTDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGV4dE5vZGU7XG59XG4vKlxuXHRSZXBsYWNpbmcgdGV4dCBpbiB0ZXh0U3R5bGVcblx0SWYgdGhlIHBhc3NlZCB0ZXh0IGlzIHNob3J0ZXIgdGhhbiBpbiBzdHlsZXMsIHRoZSBleHRyYSBzdHlsZXMgd2lsbCBiZSByZW1vdmVkLlxuXHRJZiB0aGUgcGFzc2VkIHRleHQgaXMgbG9uZ2VyIHRoYW4gdGhlIHN0eWxlcywgdGhlIG92ZXJmbG93IHRleHQgd2lsbCBnZXQgdGhlIHN0eWxlIG9mIHRoZSBsYXN0IGNoYXJhY3Rlci5cbiovXG5cblxuZnVuY3Rpb24gY2hhbmdlQ2hhcmFjdGVyc1RleHRTdHlsZSh0ZXh0U3R5bGUsIGNoYXJhY3RlcnMpIHtcbiAgdGV4dFN0eWxlID0gKDAsIF9jbG9uZURlZXAyLmRlZmF1bHQpKHRleHRTdHlsZSk7XG4gIGxldCBuID0gMDtcbiAgY29uc3QgbGVuZ3RoID0gdGV4dFN0eWxlLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHMgPSB0ZXh0U3R5bGVbaV07XG4gICAgbGV0IGwgPSBzLmNoYXJhY3RlcnMubGVuZ3RoOyAvLyBpZiBwYXNzZWQgdGV4dCBpcyBsb25nZXIgdGhhbiB0ZXh0IGluIHN0eWxlc1xuXG4gICAgaWYgKGkgPT0gbGVuZ3RoKSBsID0gY2hhcmFjdGVyc0xlbmd0aDtcbiAgICBzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzLnNsaWNlKG4sIG4gKyBsKTtcbiAgICBuICs9IGw7XG5cbiAgICBpZiAobiA+IGNoYXJhY3RlcnNMZW5ndGgpIHtcbiAgICAgIC8vIG5ldyB0ZXh0IGlzIHNob3J0ZXIgdGhhbiB0ZXh0IGluIHN0eWxlc1xuICAgICAgdGV4dFN0eWxlID0gdGV4dFN0eWxlLnNwbGljZSgwLCBpICsgMSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGV4dFN0eWxlO1xufVxuLypcblx0RnVuY3Rpb24gZm9yIGNoYW5naW5nIHByb3BlcnRpZXMgb2YgVGV4dFN0eWxlLiBcblx0VGhlIGJlZm9yZVZhbHVlIHBhcmFtZXRlciBhbGxvd3MgeW91IHRvIHNwZWNpZnkgdGhlIHZhbHVlIGluIHdoaWNoIHRoZSBwcm9wZXJ0eSB0byBiZSBjaGFuZ2VkIHNob3VsZCBiZS5cbiovXG5cblxuZnVuY3Rpb24gY2hhbmdlVGV4dFN0eWxlKHRleHRTdHlsZSwgc3R5bGVOYW1lLCBuZXdWYWx1ZSwgYmVmb3JlVmFsdWUpIHtcbiAgdGV4dFN0eWxlID0gKDAsIF9jbG9uZURlZXAyLmRlZmF1bHQpKHRleHRTdHlsZSk7XG4gIHRleHRTdHlsZS5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICBpZiAoYmVmb3JlVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBiZWZvcmVWYWx1ZSAhPT0gdW5kZWZpbmVkICYmICgwLCBfaXNFcXVhbDIuZGVmYXVsdCkoc3R5bGVbc3R5bGVOYW1lXSwgYmVmb3JlVmFsdWUpKSB7XG4gICAgICA7XG4gICAgICBzdHlsZVtzdHlsZU5hbWVdID0gbmV3VmFsdWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRleHRTdHlsZTtcbn1cbi8qY29tcGFyaW5nIGNoYXJhY3RlciBzdHlsZXMgdG8gdGhlIHN0eWxlcyBvZiB0aGUgY29tcG9zaW5nIHN1YnN0cmluZyovXG5cblxuZnVuY3Rpb24gaXNFcXVhbExldHRlclN0eWxlKGxldHRlciwgdGV4dFN0eWxlKSB7XG4gIGxldCBpcyA9IHRydWU7IC8vIGl0ZXJhdGluZyBvdmVyIGZvbnQgcHJvcGVydGllc1xuXG4gIGZvciAoY29uc3Qga2V5IGluIGxldHRlcikge1xuICAgIGlmIChrZXkgIT09ICdjaGFyYWN0ZXJzJykge1xuICAgICAgaWYgKCEoMCwgX2lzRXF1YWwyLmRlZmF1bHQpKGxldHRlcltrZXldLCB0ZXh0U3R5bGVba2V5XSkpIHtcbiAgICAgICAgLy8gcHJvcGVydHkgdmFyaWVzXG4gICAgICAgIC8vIHN0b3Agc2VhcmNoaW5nXG4gICAgICAgIGlzID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpcztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc2V0Q2hhcmFjdGVycyA9IHZvaWQgMDtcblxudmFyIF91bmlxQnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL3VuaXFCeVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHNldENoYXJhY3RlcnMgPSBhc3luYyAobm9kZSwgY2hhcmFjdGVycywgb3B0aW9ucykgPT4ge1xuICBjb25zdCBmYWxsYmFja0ZvbnQgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZhbGxiYWNrRm9udCkgfHwge1xuICAgIGZhbWlseTogJ1JvYm90bycsXG4gICAgc3R5bGU6ICdSZWd1bGFyJ1xuICB9O1xuXG4gIHRyeSB7XG4gICAgaWYgKG5vZGUuZm9udE5hbWUgPT09IGZpZ21hLm1peGVkKSB7XG4gICAgICBpZiAoKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zbWFydFN0cmF0ZWd5KSA9PT0gJ3ByZXZhaWwnKSB7XG4gICAgICAgIGNvbnN0IGZvbnRIYXNoVHJlZSA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY2hhckZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoaSAtIDEsIGkpO1xuICAgICAgICAgIGNvbnN0IGtleSA9IGAke2NoYXJGb250LmZhbWlseX06OiR7Y2hhckZvbnQuc3R5bGV9YDtcbiAgICAgICAgICBmb250SGFzaFRyZWVba2V5XSA9IGZvbnRIYXNoVHJlZVtrZXldID8gZm9udEhhc2hUcmVlW2tleV0gKyAxIDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZhaWxlZFRyZWVJdGVtID0gT2JqZWN0LmVudHJpZXMoZm9udEhhc2hUcmVlKS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSlbMF07XG4gICAgICAgIGNvbnN0IFtmYW1pbHksIHN0eWxlXSA9IHByZXZhaWxlZFRyZWVJdGVtWzBdLnNwbGl0KCc6OicpO1xuICAgICAgICBjb25zdCBwcmV2YWlsZWRGb250ID0ge1xuICAgICAgICAgIGZhbWlseSxcbiAgICAgICAgICBzdHlsZVxuICAgICAgICB9O1xuICAgICAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHByZXZhaWxlZEZvbnQpO1xuICAgICAgICBub2RlLmZvbnROYW1lID0gcHJldmFpbGVkRm9udDtcbiAgICAgIH0gZWxzZSBpZiAoKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zbWFydFN0cmF0ZWd5KSA9PT0gJ3N0cmljdCcpIHtcbiAgICAgICAgcmV0dXJuIHNldENoYXJhY3RlcnNXaXRoU3RyaWN0TWF0Y2hGb250KG5vZGUsIGNoYXJhY3RlcnMsIGZhbGxiYWNrRm9udCk7XG4gICAgICB9IGVsc2UgaWYgKChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc21hcnRTdHJhdGVneSkgPT09ICdleHBlcmltZW50YWwnKSB7XG4gICAgICAgIHJldHVybiBzZXRDaGFyYWN0ZXJzV2l0aFNtYXJ0TWF0Y2hGb250KG5vZGUsIGNoYXJhY3RlcnMsIGZhbGxiYWNrRm9udCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaXJzdENoYXJGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKDAsIDEpO1xuICAgICAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKGZpcnN0Q2hhckZvbnQpO1xuICAgICAgICBub2RlLmZvbnROYW1lID0gZmlyc3RDaGFyRm9udDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7XG4gICAgICAgIGZhbWlseTogbm9kZS5mb250TmFtZS5mYW1pbHksXG4gICAgICAgIHN0eWxlOiBub2RlLmZvbnROYW1lLnN0eWxlXG4gICAgICB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUud2FybihgRmFpbGVkIHRvIGxvYWQgXCIke25vZGUuZm9udE5hbWVbJ2ZhbWlseSddfSAke25vZGUuZm9udE5hbWVbJ3N0eWxlJ119XCIgZm9udCBhbmQgcmVwbGFjZWQgd2l0aCBmYWxsYmFjayBcIiR7ZmFsbGJhY2tGb250LmZhbWlseX0gJHtmYWxsYmFja0ZvbnQuc3R5bGV9XCJgLCBlcnIpO1xuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoZmFsbGJhY2tGb250KTtcbiAgICBub2RlLmZvbnROYW1lID0gZmFsbGJhY2tGb250O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBub2RlLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLndhcm4oYEZhaWxlZCB0byBzZXQgY2hhcmFjdGVycy4gU2tpcHBlZC5gLCBlcnIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0cy5zZXRDaGFyYWN0ZXJzID0gc2V0Q2hhcmFjdGVycztcblxuY29uc3Qgc2V0Q2hhcmFjdGVyc1dpdGhTdHJpY3RNYXRjaEZvbnQgPSBhc3luYyAobm9kZSwgY2hhcmFjdGVycywgZmFsbGJhY2tGb250KSA9PiB7XG4gIGNvbnN0IGZvbnRIYXNoVHJlZSA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3RhcnRJZHggPSBpIC0gMTtcbiAgICBjb25zdCBzdGFydENoYXJGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKHN0YXJ0SWR4LCBpKTtcbiAgICBjb25zdCBzdGFydENoYXJGb250VmFsID0gYCR7c3RhcnRDaGFyRm9udC5mYW1pbHl9Ojoke3N0YXJ0Q2hhckZvbnQuc3R5bGV9YDtcblxuICAgIHdoaWxlIChpIDwgbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aCkge1xuICAgICAgaSsrO1xuICAgICAgY29uc3QgY2hhckZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoaSAtIDEsIGkpO1xuXG4gICAgICBpZiAoc3RhcnRDaGFyRm9udFZhbCAhPT0gYCR7Y2hhckZvbnQuZmFtaWx5fTo6JHtjaGFyRm9udC5zdHlsZX1gKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvbnRIYXNoVHJlZVtgJHtzdGFydElkeH1fJHtpfWBdID0gc3RhcnRDaGFyRm9udFZhbDtcbiAgfVxuXG4gIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoZmFsbGJhY2tGb250KTtcbiAgbm9kZS5mb250TmFtZSA9IGZhbGxiYWNrRm9udDtcbiAgbm9kZS5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcbiAgY29uc29sZS5sb2coZm9udEhhc2hUcmVlKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoZm9udEhhc2hUcmVlKS5tYXAoYXN5bmMgcmFuZ2UgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJhbmdlLCBmb250SGFzaFRyZWVbcmFuZ2VdKTtcbiAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSByYW5nZS5zcGxpdCgnXycpO1xuICAgIGNvbnN0IFtmYW1pbHksIHN0eWxlXSA9IGZvbnRIYXNoVHJlZVtyYW5nZV0uc3BsaXQoJzo6Jyk7XG4gICAgY29uc3QgbWF0Y2hlZEZvbnQgPSB7XG4gICAgICBmYW1pbHksXG4gICAgICBzdHlsZVxuICAgIH07XG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhtYXRjaGVkRm9udCk7XG4gICAgcmV0dXJuIG5vZGUuc2V0UmFuZ2VGb250TmFtZShOdW1iZXIoc3RhcnQpLCBOdW1iZXIoZW5kKSwgbWF0Y2hlZEZvbnQpO1xuICB9KSk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgZ2V0RGVsaW1pdGVyUG9zID0gKHN0ciwgZGVsaW1pdGVyLCBzdGFydElkeCA9IDAsIGVuZElkeCA9IHN0ci5sZW5ndGgpID0+IHtcbiAgY29uc3QgaW5kaWNlcyA9IFtdO1xuICBsZXQgdGVtcCA9IHN0YXJ0SWR4O1xuXG4gIGZvciAobGV0IGkgPSBzdGFydElkeDsgaSA8IGVuZElkeDsgaSsrKSB7XG4gICAgaWYgKHN0cltpXSA9PT0gZGVsaW1pdGVyICYmIGkgKyBzdGFydElkeCAhPT0gZW5kSWR4ICYmIHRlbXAgIT09IGkgKyBzdGFydElkeCkge1xuICAgICAgaW5kaWNlcy5wdXNoKFt0ZW1wLCBpICsgc3RhcnRJZHhdKTtcbiAgICAgIHRlbXAgPSBpICsgc3RhcnRJZHggKyAxO1xuICAgIH1cbiAgfVxuXG4gIHRlbXAgIT09IGVuZElkeCAmJiBpbmRpY2VzLnB1c2goW3RlbXAsIGVuZElkeF0pO1xuICByZXR1cm4gaW5kaWNlcy5maWx0ZXIoQm9vbGVhbik7XG59O1xuXG5jb25zdCBidWlsZExpbmVhck9yZGVyID0gbm9kZSA9PiB7XG4gIGNvbnN0IGZvbnRUcmVlID0gW107XG4gIGNvbnN0IG5ld0xpbmVzUG9zID0gZ2V0RGVsaW1pdGVyUG9zKG5vZGUuY2hhcmFjdGVycywgJ1xcbicpO1xuICBuZXdMaW5lc1Bvcy5mb3JFYWNoKChbbmV3TGluZXNSYW5nZVN0YXJ0LCBuZXdMaW5lc1JhbmdlRW5kXSwgbikgPT4ge1xuICAgIGNvbnN0IG5ld0xpbmVzUmFuZ2VGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKG5ld0xpbmVzUmFuZ2VTdGFydCwgbmV3TGluZXNSYW5nZUVuZCk7XG5cbiAgICBpZiAobmV3TGluZXNSYW5nZUZvbnQgPT09IGZpZ21hLm1peGVkKSB7XG4gICAgICBjb25zdCBzcGFjZXNQb3MgPSBnZXREZWxpbWl0ZXJQb3Mobm9kZS5jaGFyYWN0ZXJzLCAnICcsIG5ld0xpbmVzUmFuZ2VTdGFydCwgbmV3TGluZXNSYW5nZUVuZCk7XG4gICAgICBzcGFjZXNQb3MuZm9yRWFjaCgoW3NwYWNlc1JhbmdlU3RhcnQsIHNwYWNlc1JhbmdlRW5kXSwgcykgPT4ge1xuICAgICAgICBjb25zdCBzcGFjZXNSYW5nZUZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoc3BhY2VzUmFuZ2VTdGFydCwgc3BhY2VzUmFuZ2VFbmQpO1xuXG4gICAgICAgIGlmIChzcGFjZXNSYW5nZUZvbnQgPT09IGZpZ21hLm1peGVkKSB7XG4gICAgICAgICAgY29uc3Qgc3BhY2VzUmFuZ2VGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKHNwYWNlc1JhbmdlU3RhcnQsIHNwYWNlc1JhbmdlU3RhcnRbMF0pO1xuICAgICAgICAgIGZvbnRUcmVlLnB1c2goe1xuICAgICAgICAgICAgc3RhcnQ6IHNwYWNlc1JhbmdlU3RhcnQsXG4gICAgICAgICAgICBkZWxpbWl0ZXI6ICcgJyxcbiAgICAgICAgICAgIGZhbWlseTogc3BhY2VzUmFuZ2VGb250LmZhbWlseSxcbiAgICAgICAgICAgIHN0eWxlOiBzcGFjZXNSYW5nZUZvbnQuc3R5bGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb250VHJlZS5wdXNoKHtcbiAgICAgICAgICAgIHN0YXJ0OiBzcGFjZXNSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgZGVsaW1pdGVyOiAnICcsXG4gICAgICAgICAgICBmYW1pbHk6IHNwYWNlc1JhbmdlRm9udC5mYW1pbHksXG4gICAgICAgICAgICBzdHlsZTogc3BhY2VzUmFuZ2VGb250LnN0eWxlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb250VHJlZS5wdXNoKHtcbiAgICAgICAgc3RhcnQ6IG5ld0xpbmVzUmFuZ2VTdGFydCxcbiAgICAgICAgZGVsaW1pdGVyOiAnXFxuJyxcbiAgICAgICAgZmFtaWx5OiBuZXdMaW5lc1JhbmdlRm9udC5mYW1pbHksXG4gICAgICAgIHN0eWxlOiBuZXdMaW5lc1JhbmdlRm9udC5zdHlsZVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZvbnRUcmVlLnNvcnQoKGEsIGIpID0+ICthLnN0YXJ0IC0gK2Iuc3RhcnQpLm1hcCgoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZSxcbiAgICBkZWxpbWl0ZXJcbiAgfSkgPT4gKHtcbiAgICBmYW1pbHksXG4gICAgc3R5bGUsXG4gICAgZGVsaW1pdGVyXG4gIH0pKTtcbn07XG5cbmNvbnN0IHNldENoYXJhY3RlcnNXaXRoU21hcnRNYXRjaEZvbnQgPSBhc3luYyAobm9kZSwgY2hhcmFjdGVycywgZmFsbGJhY2tGb250KSA9PiB7XG4gIGNvbnN0IHJhbmdlVHJlZSA9IGJ1aWxkTGluZWFyT3JkZXIobm9kZSk7XG4gIGNvbnN0IGZvbnRzVG9Mb2FkID0gKDAsIF91bmlxQnkyLmRlZmF1bHQpKHJhbmdlVHJlZSwgKHtcbiAgICBmYW1pbHksXG4gICAgc3R5bGVcbiAgfSkgPT4gYCR7ZmFtaWx5fTo6JHtzdHlsZX1gKS5tYXAoKHtcbiAgICBmYW1pbHksXG4gICAgc3R5bGVcbiAgfSkgPT4gKHtcbiAgICBmYW1pbHksXG4gICAgc3R5bGVcbiAgfSkpO1xuICBhd2FpdCBQcm9taXNlLmFsbChbLi4uZm9udHNUb0xvYWQsIGZhbGxiYWNrRm9udF0ubWFwKGZpZ21hLmxvYWRGb250QXN5bmMpKTtcbiAgbm9kZS5mb250TmFtZSA9IGZhbGxiYWNrRm9udDtcbiAgbm9kZS5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcbiAgbGV0IHByZXZQb3MgPSAwO1xuICByYW5nZVRyZWUuZm9yRWFjaCgoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZSxcbiAgICBkZWxpbWl0ZXJcbiAgfSkgPT4ge1xuICAgIGlmIChwcmV2UG9zIDwgbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZGVsaW1ldGVyUG9zID0gbm9kZS5jaGFyYWN0ZXJzLmluZGV4T2YoZGVsaW1pdGVyLCBwcmV2UG9zKTtcbiAgICAgIGNvbnN0IGVuZFBvcyA9IGRlbGltZXRlclBvcyA+IHByZXZQb3MgPyBkZWxpbWV0ZXJQb3MgOiBub2RlLmNoYXJhY3RlcnMubGVuZ3RoO1xuICAgICAgY29uc3QgbWF0Y2hlZEZvbnQgPSB7XG4gICAgICAgIGZhbWlseSxcbiAgICAgICAgc3R5bGVcbiAgICAgIH07XG4gICAgICBub2RlLnNldFJhbmdlRm9udE5hbWUocHJldlBvcywgZW5kUG9zLCBtYXRjaGVkRm9udCk7XG4gICAgICBwcmV2UG9zID0gZW5kUG9zICsgMTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdHJ1ZTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0b3BMZXZlbEZyYW1lcztcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYWxsIHRvcCBsZXZlbCBmcmFtZXMgb24gY3VycmVudFBhZ2VcbiAqL1xuZnVuY3Rpb24gdG9wTGV2ZWxGcmFtZXMocGFnZSA9IGZpZ21hLmN1cnJlbnRQYWdlKSB7XG4gIHJldHVybiBwYWdlLmNoaWxkcmVuLmZpbHRlcihub2RlID0+IG5vZGUudHlwZSA9PT0gJ0ZSQU1FJyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjbG9uZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfY2xvbmUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRBbGxGb250c1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0QWxsRm9udHMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRCb3VuZGluZ1JlY3RcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldEJvdW5kaW5nUmVjdC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldE5vZGVJbmRleFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0Tm9kZUluZGV4LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0UGFnZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0UGFnZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImhhc0NoaWxkcmVuXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9oYXNDaGlsZHJlbi5oYXNDaGlsZHJlbjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1BhcnRPZkluc3RhbmNlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1BhcnRPZkluc3RhbmNlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNQYXJ0T2ZOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1BhcnRPZk5vZGUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1Zpc2libGVOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1Zpc2libGVOb2RlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibG9hZFVuaXF1ZUZvbnRzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9sb2FkVW5pcXVlRm9udHMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJsb2FkRm9udHNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2xvYWRGb250cy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm5vZGVUb09iamVjdFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfbm9kZVRvT2JqZWN0Lm5vZGVUb09iamVjdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ0b3BMZXZlbEZyYW1lc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdG9wTGV2ZWxGcmFtZXMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRUZXh0Tm9kZUNTU1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0Q1NTU3R5bGVzLmdldFRleHROb2RlQ1NTO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImZpbmRBbGxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZpbmRNZXRob2RzLmZpbmRBbGw7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0UmVsYXRpdmVQb3NpdGlvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0UmVsYXRpdmVQb3NpdGlvbi5nZXRSZWxhdGl2ZVBvc2l0aW9uO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldFRvcExldmVsUGFyZW50XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRSZWxhdGl2ZVBvc2l0aW9uLmdldFRvcExldmVsUGFyZW50O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImZpZ21hUkdCVG9XZWJSR0JcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2NvbnZlcnRDb2xvci5maWdtYVJHQlRvV2ViUkdCO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndlYlJHQlRvRmlnbWFSR0JcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2NvbnZlcnRDb2xvci53ZWJSR0JUb0ZpZ21hUkdCO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImZpZ21hUkdCVG9IZXhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2NvbnZlcnRDb2xvci5maWdtYVJHQlRvSGV4O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImhleFRvRmlnbWFSR0JcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2NvbnZlcnRDb2xvci5oZXhUb0ZpZ21hUkdCO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzQ29tcG9uZW50Tm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc0NvbXBvbmVudE5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNGcmFtZU5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNGcmFtZU5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNHcm91cE5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNHcm91cE5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNJbnN0YW5jZU5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNJbnN0YW5jZU5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNQYWdlTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc1BhZ2VOb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzVGV4dE5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNUZXh0Tm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc09uZU9mTm9kZVR5cGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNPbmVPZk5vZGVUeXBlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImV4dHJhY3RJbWFnZUNyb3BQYXJhbXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2V4dHJhY3RJbWFnZUNyb3BQYXJhbXMuZXh0cmFjdEltYWdlQ3JvcFBhcmFtcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJleHRyYWN0TGluZWFyR3JhZGllbnRQYXJhbXNGcm9tVHJhbnNmb3JtXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9leHRyYWN0TGluZWFyR3JhZGllbnRTdGFydEVuZC5leHRyYWN0TGluZWFyR3JhZGllbnRQYXJhbXNGcm9tVHJhbnNmb3JtO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImV4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zLmV4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzZXRDaGFyYWN0ZXJzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9zZXRDaGFyYWN0ZXJzLnNldENoYXJhY3RlcnM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicGFyc2VUZXh0U3R5bGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLnBhcnNlVGV4dFN0eWxlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNwbGl0VGV4dFN0eWxlSW50b0xpbmVzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5zcGxpdFRleHRTdHlsZUludG9MaW5lcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJqb2luVGV4dExpbmVzU3R5bGVzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5qb2luVGV4dExpbmVzU3R5bGVzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFwcGx5VGV4dFN0eWxlVG9UZXh0Tm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUuYXBwbHlUZXh0U3R5bGVUb1RleHROb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNoYW5nZUNoYXJhY3RlcnNUZXh0U3R5bGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLmNoYW5nZUNoYXJhY3RlcnNUZXh0U3R5bGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY2hhbmdlVGV4dFN0eWxlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5jaGFuZ2VUZXh0U3R5bGU7XG4gIH1cbn0pO1xuXG52YXIgX2Nsb25lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2Nsb25lXCIpKTtcblxudmFyIF9nZXRBbGxGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9nZXRBbGxGb250c1wiKSk7XG5cbnZhciBfZ2V0Qm91bmRpbmdSZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2dldEJvdW5kaW5nUmVjdFwiKSk7XG5cbnZhciBfZ2V0Tm9kZUluZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2dldE5vZGVJbmRleFwiKSk7XG5cbnZhciBfZ2V0UGFnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9nZXRQYWdlXCIpKTtcblxudmFyIF9oYXNDaGlsZHJlbiA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvaGFzQ2hpbGRyZW5cIik7XG5cbnZhciBfaXNQYXJ0T2ZJbnN0YW5jZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9pc1BhcnRPZkluc3RhbmNlXCIpKTtcblxudmFyIF9pc1BhcnRPZk5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvaXNQYXJ0T2ZOb2RlXCIpKTtcblxudmFyIF9pc1Zpc2libGVOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2lzVmlzaWJsZU5vZGVcIikpO1xuXG52YXIgX2xvYWRVbmlxdWVGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9sb2FkVW5pcXVlRm9udHNcIikpO1xuXG52YXIgX2xvYWRGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9sb2FkRm9udHNcIikpO1xuXG52YXIgX25vZGVUb09iamVjdCA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvbm9kZVRvT2JqZWN0XCIpO1xuXG52YXIgX3RvcExldmVsRnJhbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL3RvcExldmVsRnJhbWVzXCIpKTtcblxudmFyIF9nZXRDU1NTdHlsZXMgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2dldENTU1N0eWxlc1wiKTtcblxudmFyIF9maW5kTWV0aG9kcyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZmluZE1ldGhvZHNcIik7XG5cbnZhciBfZ2V0UmVsYXRpdmVQb3NpdGlvbiA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0UmVsYXRpdmVQb3NpdGlvblwiKTtcblxudmFyIF9jb252ZXJ0Q29sb3IgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2NvbnZlcnRDb2xvclwiKTtcblxudmFyIF9pc1R5cGVOb2RlID0gcmVxdWlyZShcIi4vaGVscGVycy9pc1R5cGVOb2RlXCIpO1xuXG52YXIgX2V4dHJhY3RJbWFnZUNyb3BQYXJhbXMgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2V4dHJhY3RJbWFnZUNyb3BQYXJhbXNcIik7XG5cbnZhciBfZXh0cmFjdExpbmVhckdyYWRpZW50U3RhcnRFbmQgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kXCIpO1xuXG52YXIgX2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zXCIpO1xuXG52YXIgX3NldENoYXJhY3RlcnMgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3NldENoYXJhY3RlcnNcIik7XG5cbnZhciBfcGFyc2VUZXh0U3R5bGUgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3BhcnNlVGV4dFN0eWxlXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfSIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG4iLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG4iLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCAwKSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXM7XG4iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXJyYXlJbmNsdWRlc2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhIGNvbXBhcmF0b3IuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzV2l0aChhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChjb21wYXJhdG9yKHZhbHVlLCBhcnJheVtpbmRleF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcbiIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcbiIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25JbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbkluKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25JbjtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnblZhbHVlO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ24nKSxcbiAgICBiYXNlQXNzaWduSW4gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduSW4nKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgY29weVN5bWJvbHMgPSByZXF1aXJlKCcuL19jb3B5U3ltYm9scycpLFxuICAgIGNvcHlTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19jb3B5U3ltYm9sc0luJyksXG4gICAgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKSxcbiAgICBnZXRBbGxLZXlzSW4gPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzSW4nKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpbml0Q2xvbmVBcnJheSA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUFycmF5JyksXG4gICAgaW5pdENsb25lQnlUYWcgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVCeVRhZycpLFxuICAgIGluaXRDbG9uZU9iamVjdCA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZU9iamVjdCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc01hcCA9IHJlcXVpcmUoJy4vaXNNYXAnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1NldCA9IHJlcXVpcmUoJy4vaXNTZXQnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX0ZMQVRfRkxBRyA9IDIsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbG9uZWAgYW5kIGBfLmNsb25lRGVlcGAgd2hpY2ggdHJhY2tzXG4gKiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIERlZXAgY2xvbmVcbiAqICAyIC0gRmxhdHRlbiBpbmhlcml0ZWQgcHJvcGVydGllc1xuICogIDQgLSBDbG9uZSBzeW1ib2xzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgcGFyZW50IG9iamVjdCBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGFuZCB0aGVpciBjbG9uZSBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICB2YXIgcmVzdWx0LFxuICAgICAgaXNEZWVwID0gYml0bWFzayAmIENMT05FX0RFRVBfRkxBRyxcbiAgICAgIGlzRmxhdCA9IGJpdG1hc2sgJiBDTE9ORV9GTEFUX0ZMQUcsXG4gICAgICBpc0Z1bGwgPSBiaXRtYXNrICYgQ0xPTkVfU1lNQk9MU19GTEFHO1xuXG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIHJlc3VsdCA9IChpc0ZsYXQgfHwgaXNGdW5jKSA/IHt9IDogaW5pdENsb25lT2JqZWN0KHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBpc0ZsYXRcbiAgICAgICAgICA/IGNvcHlTeW1ib2xzSW4odmFsdWUsIGJhc2VBc3NpZ25JbihyZXN1bHQsIHZhbHVlKSlcbiAgICAgICAgICA6IGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHN1YlZhbHVlKSB7XG4gICAgICByZXN1bHQuYWRkKGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3ViVmFsdWUsIHZhbHVlLCBzdGFjaykpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzTWFwKHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgICAgcmVzdWx0LnNldChrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBrZXlzRnVuYyA9IGlzRnVsbFxuICAgID8gKGlzRmxhdCA/IGdldEFsbEtleXNJbiA6IGdldEFsbEtleXMpXG4gICAgOiAoaXNGbGF0ID8ga2V5c0luIDoga2V5cyk7XG5cbiAgdmFyIHByb3BzID0gaXNBcnIgPyB1bmRlZmluZWQgOiBrZXlzRnVuYyh2YWx1ZSk7XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNsb25lO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGU7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRJbmRleGAgYW5kIGBfLmZpbmRMYXN0SW5kZXhgIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMSA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xuIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmhhc0luYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSGFzSW4ob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGtleSBpbiBPYmplY3Qob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSGFzSW47XG4iLCJ2YXIgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vX2Jhc2VGaW5kSW5kZXgnKSxcbiAgICBiYXNlSXNOYU4gPSByZXF1aXJlKCcuL19iYXNlSXNOYU4nKSxcbiAgICBzdHJpY3RJbmRleE9mID0gcmVxdWlyZSgnLi9fc3RyaWN0SW5kZXhPZicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgYGZyb21JbmRleGAgYm91bmRzIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlXG4gICAgPyBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KVxuICAgIDogYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUlzTmFOLCBmcm9tSW5kZXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgYmFzZUlzRXF1YWxEZWVwID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG4iLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG4iLCJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWFwYCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBtYXBUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWFwO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hdGNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoRGF0YSBUaGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gbWF0Y2hEYXRhLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IGluZGV4LFxuICAgICAgbm9DdXN0b21pemVyID0gIWN1c3RvbWl6ZXI7XG5cbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGg7XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pXG4gICAgICAgICAgPyBkYXRhWzFdICE9PSBvYmplY3RbZGF0YVswXV1cbiAgICAgICAgICA6ICEoZGF0YVswXSBpbiBvYmplY3QpXG4gICAgICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIHZhciBrZXkgPSBkYXRhWzBdLFxuICAgICAgICBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBzcmNWYWx1ZSA9IGRhdGFbMV07XG5cbiAgICBpZiAobm9DdXN0b21pemVyICYmIGRhdGFbMl0pIHtcbiAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhY2sgPSBuZXcgU3RhY2s7XG4gICAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgICAgIDogcmVzdWx0XG4gICAgICAgICAgKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hdGNoO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hTmAgd2l0aG91dCBzdXBwb3J0IGZvciBudW1iZXIgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgTmFOYCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYU47XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuIiwidmFyIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzZXRUYWcgPSAnW29iamVjdCBTZXRdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1NldGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzU2V0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gc2V0VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1NldDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuIiwidmFyIGJhc2VNYXRjaGVzID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXMnKSxcbiAgICBiYXNlTWF0Y2hlc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXNQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBwcm9wZXJ0eSA9IHJlcXVpcmUoJy4vcHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pdGVyYXRlZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGFuIGl0ZXJhdGVlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBpdGVyYXRlZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlKSB7XG4gIC8vIERvbid0IHN0b3JlIHRoZSBgdHlwZW9mYCByZXN1bHQgaW4gYSB2YXJpYWJsZSB0byBhdm9pZCBhIEpJVCBidWcgaW4gU2FmYXJpIDkuXG4gIC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2MDM0IGZvciBtb3JlIGRldGFpbHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICA/IGJhc2VNYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKVxuICAgICAgOiBiYXNlTWF0Y2hlcyh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXRlcmF0ZWU7XG4iLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5c0luID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5c0luJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXNJbjtcbiIsInZhciBiYXNlSXNNYXRjaCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hdGNoJyksXG4gICAgZ2V0TWF0Y2hEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWF0Y2hEYXRhJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShtYXRjaERhdGFbMF1bMF0sIG1hdGNoRGF0YVswXVsxXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT09IHNvdXJjZSB8fCBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlcztcbiIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyksXG4gICAgZ2V0ID0gcmVxdWlyZSgnLi9nZXQnKSxcbiAgICBoYXNJbiA9IHJlcXVpcmUoJy4vaGFzSW4nKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lc24ndCBjbG9uZSBgc3JjVmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHNyY1ZhbHVlKSB7XG4gIGlmIChpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKHRvS2V5KHBhdGgpLCBzcmNWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBvYmpWYWx1ZSA9IGdldChvYmplY3QsIHBhdGgpO1xuICAgIHJldHVybiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBvYmpWYWx1ZSA9PT0gc3JjVmFsdWUpXG4gICAgICA/IGhhc0luKG9iamVjdCwgcGF0aClcbiAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzUHJvcGVydHk7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcbiIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVByb3BlcnR5YCB3aGljaCBzdXBwb3J0cyBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eURlZXAocGF0aCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHlEZWVwO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXG4gICAgY3JlYXRlU2V0ID0gcmVxdWlyZSgnLi9fY3JlYXRlU2V0JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBzZWVuID0gcmVzdWx0O1xuXG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICB9XG4gIGVsc2UgaWYgKGxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgdmFyIHNldCA9IGl0ZXJhdGVlID8gbnVsbCA6IGNyZWF0ZVNldChhcnJheSk7XG4gICAgaWYgKHNldCkge1xuICAgICAgcmV0dXJuIHNldFRvQXJyYXkoc2V0KTtcbiAgICB9XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIHNlZW4gPSBuZXcgU2V0Q2FjaGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgc2VlbiA9IGl0ZXJhdGVlID8gW10gOiByZXN1bHQ7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgc2VlbkluZGV4ID0gc2Vlbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoc2VlbkluZGV4LS0pIHtcbiAgICAgICAgaWYgKHNlZW5bc2VlbkluZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyhzZWVuLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIGlmIChzZWVuICE9PSByZXN1bHQpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5pcTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gaXNLZXkodmFsdWUsIG9iamVjdCkgPyBbdmFsdWVdIDogc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFBhdGg7XG4iLCJ2YXIgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQXJyYXlCdWZmZXI7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgYWxsb2NVbnNhZmUgPSBCdWZmZXIgPyBCdWZmZXIuYWxsb2NVbnNhZmUgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhbGxvY1Vuc2FmZSA/IGFsbG9jVW5zYWZlKGxlbmd0aCkgOiBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgYnVmZmVyLmNvcHkocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUJ1ZmZlcjtcbiIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgZGF0YVZpZXdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVZpZXcgVGhlIGRhdGEgdmlldyB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgZGF0YSB2aWV3LlxuICovXG5mdW5jdGlvbiBjbG9uZURhdGFWaWV3KGRhdGFWaWV3LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSA6IGRhdGFWaWV3LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGF0YVZpZXc7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lUmVnRXhwO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVTeW1ib2w7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVR5cGVkQXJyYXk7XG4iLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG4iLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpO1xuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICB2YXIgaXNOZXcgPSAhb2JqZWN0O1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3VmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5T2JqZWN0O1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBhbmQgaW5oZXJpdGVkIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzSW4oc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9sc0luO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcbiIsInZhciBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBub29wID0gcmVxdWlyZSgnLi9ub29wJyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9iamVjdCBvZiBgdmFsdWVzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYWRkIHRvIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgc2V0LlxuICovXG52YXIgY3JlYXRlU2V0ID0gIShTZXQgJiYgKDEgLyBzZXRUb0FycmF5KG5ldyBTZXQoWywtMF0pKVsxXSkgPT0gSU5GSU5JVFkpID8gbm9vcCA6IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gbmV3IFNldCh2YWx1ZXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTZXQ7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQ2hlY2sgdGhhdCBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIGFyclN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICB2YXIgb3RoU3RhY2tlZCA9IHN0YWNrLmdldChvdGhlcik7XG4gIGlmIChhcnJTdGFja2VkICYmIG90aFN0YWNrZWQpIHtcbiAgICByZXR1cm4gYXJyU3RhY2tlZCA9PSBvdGhlciAmJiBvdGhTdGFja2VkID09IGFycmF5O1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVIYXMoc2Vlbiwgb3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLnB1c2gob3RoSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXG4gICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKGFycmF5KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcbiIsInZhciBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayB0aGF0IGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgb2JqU3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICB2YXIgb3RoU3RhY2tlZCA9IHN0YWNrLmdldChvdGhlcik7XG4gIGlmIChvYmpTdGFja2VkICYmIG90aFN0YWNrZWQpIHtcbiAgICByZXR1cm4gb2JqU3RhY2tlZCA9PSBvdGhlciAmJiBvdGhTdGFja2VkID09IG9iamVjdDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG4iLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzSW4sIGdldFN5bWJvbHNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5c0luO1xuIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcbiIsInZhciBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3Mgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbWF0Y2ggZGF0YSBvZiBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hEYXRhKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0ga2V5cyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICB2YXIga2V5ID0gcmVzdWx0W2xlbmd0aF0sXG4gICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG5cbiAgICByZXN1bHRbbGVuZ3RoXSA9IFtrZXksIHZhbHVlLCBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hdGNoRGF0YTtcbiIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHNJbjtcbiIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcbiIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBleGlzdHMgb24gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFzRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgcHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBoYXNGdW5jKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBmYWxzZTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSB0b0tleShwYXRoW2luZGV4XSk7XG4gICAgaWYgKCEocmVzdWx0ID0gb2JqZWN0ICE9IG51bGwgJiYgaGFzRnVuYyhvYmplY3QsIGtleSkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XG4gIH1cbiAgaWYgKHJlc3VsdCB8fCArK2luZGV4ICE9IGxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgbGVuZ3RoID0gb2JqZWN0ID09IG51bGwgPyAwIDogb2JqZWN0Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiYgaXNJbmRleChrZXksIGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1BhdGg7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IG5ldyBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVBcnJheTtcbiIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpLFxuICAgIGNsb25lRGF0YVZpZXcgPSByZXF1aXJlKCcuL19jbG9uZURhdGFWaWV3JyksXG4gICAgY2xvbmVSZWdFeHAgPSByZXF1aXJlKCcuL19jbG9uZVJlZ0V4cCcpLFxuICAgIGNsb25lU3ltYm9sID0gcmVxdWlyZSgnLi9fY2xvbmVTeW1ib2wnKSxcbiAgICBjbG9uZVR5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19jbG9uZVR5cGVkQXJyYXknKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE1hcGAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgYFNldGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBjbG9uZUFycmF5QnVmZmVyKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIHJldHVybiBjbG9uZURhdGFWaWV3KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcjtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVJlZ0V4cChvYmplY3QpO1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3I7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVN5bWJvbChvYmplY3QpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQnlUYWc7XG4iLCJ2YXIgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVPYmplY3Q7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG4iLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlmIHN1aXRhYmxlIGZvciBzdHJpY3RcbiAqICBlcXVhbGl0eSBjb21wYXJpc29ucywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSAmJiAhaXNPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaWN0Q29tcGFyYWJsZTtcbiIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcbiIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG4iLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgbWF0Y2hlc1Byb3BlcnR5YCBmb3Igc291cmNlIHZhbHVlcyBzdWl0YWJsZVxuICogZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKGtleSwgc3JjVmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIE9iamVjdChvYmplY3QpKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlc1N0cmljdENvbXBhcmFibGU7XG4iLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG4iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG4iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzSW47XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG4iLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zIG9mIHZhbHVlcywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWN0SW5kZXhPZjtcbiIsInZhciBtZW1vaXplQ2FwcGVkID0gcmVxdWlyZSgnLi9fbWVtb2l6ZUNhcHBlZCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHN0cmluZy5jaGFyQ29kZUF0KDApID09PSA0NiAvKiAuICovKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN1YlN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9QYXRoO1xuIiwidmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0tleTtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcbiIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9ERUVQX0ZMQUcgfCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcbiIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG4iLCJ2YXIgYmFzZUhhc0luID0gcmVxdWlyZSgnLi9fYmFzZUhhc0luJyksXG4gICAgaGFzUGF0aCA9IHJlcXVpcmUoJy4vX2hhc1BhdGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IG9yIGluaGVyaXRlZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNJbihvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0luO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBkZWVwIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZVxuICogZXF1aXZhbGVudC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2Qgc3VwcG9ydHMgY29tcGFyaW5nIGFycmF5cywgYXJyYXkgYnVmZmVycywgYm9vbGVhbnMsXG4gKiBkYXRlIG9iamVjdHMsIGVycm9yIG9iamVjdHMsIG1hcHMsIG51bWJlcnMsIGBPYmplY3RgIG9iamVjdHMsIHJlZ2V4ZXMsXG4gKiBzZXRzLCBzdHJpbmdzLCBzeW1ib2xzLCBhbmQgdHlwZWQgYXJyYXlzLiBgT2JqZWN0YCBvYmplY3RzIGFyZSBjb21wYXJlZFxuICogYnkgdGhlaXIgb3duLCBub3QgaW5oZXJpdGVkLCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuIEZ1bmN0aW9ucyBhbmQgRE9NXG4gKiBub2RlcyBhcmUgY29tcGFyZWQgYnkgc3RyaWN0IGVxdWFsaXR5LCBpLmUuIGA9PT1gLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmlzRXF1YWwob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogb2JqZWN0ID09PSBvdGhlcjtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRXF1YWwodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXF1YWw7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwidmFyIGJhc2VJc01hcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNNYXAgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc01hcDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYE1hcGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNNYXAobmV3IE1hcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc01hcChuZXcgV2Vha01hcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNNYXAgPSBub2RlSXNNYXAgPyBiYXNlVW5hcnkobm9kZUlzTWFwKSA6IGJhc2VJc01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc01hcDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VJc1NldCA9IHJlcXVpcmUoJy4vX2Jhc2VJc1NldCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNTZXQgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1NldDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFNldGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTZXQobmV3IFNldCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1NldChuZXcgV2Vha1NldCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNTZXQgPSBub2RlSXNTZXQgPyBiYXNlVW5hcnkobm9kZUlzU2V0KSA6IGJhc2VJc1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1NldDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgdW5kZWZpbmVkYCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVW5kZWZpbmVkKHZvaWQgMCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1VuZGVmaW5lZChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVW5kZWZpbmVkO1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGNsZWFyYCwgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEV4cG9zZSBgTWFwQ2FjaGVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLm5vb3ApO1xuICogLy8gPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBObyBvcGVyYXRpb24gcGVyZm9ybWVkLlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vb3A7XG4iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5JyksXG4gICAgYmFzZVByb3BlcnR5RGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eURlZXAnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBhIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFtcbiAqICAgeyAnYSc6IHsgJ2InOiAyIH0gfSxcbiAqICAgeyAnYSc6IHsgJ2InOiAxIH0gfVxuICogXTtcbiAqXG4gKiBfLm1hcChvYmplY3RzLCBfLnByb3BlcnR5KCdhLmInKSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqXG4gKiBfLm1hcChfLnNvcnRCeShvYmplY3RzLCBfLnByb3BlcnR5KFsnYScsICdiJ10pKSwgJ2EuYicpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcmV0dXJuIGlzS2V5KHBhdGgpID8gYmFzZVByb3BlcnR5KHRvS2V5KHBhdGgpKSA6IGJhc2VQcm9wZXJ0eURlZXAocGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGVydHk7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcbiIsInZhciBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy51bmlxYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGBpdGVyYXRlZWAgd2hpY2ggaXNcbiAqIGludm9rZWQgZm9yIGVhY2ggZWxlbWVudCBpbiBgYXJyYXlgIHRvIGdlbmVyYXRlIHRoZSBjcml0ZXJpb24gYnkgd2hpY2hcbiAqIHVuaXF1ZW5lc3MgaXMgY29tcHV0ZWQuIFRoZSBvcmRlciBvZiByZXN1bHQgdmFsdWVzIGlzIGRldGVybWluZWQgYnkgdGhlXG4gKiBvcmRlciB0aGV5IG9jY3VyIGluIHRoZSBhcnJheS4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6XG4gKiAodmFsdWUpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy51bmlxQnkoWzIuMSwgMS4yLCAyLjNdLCBNYXRoLmZsb29yKTtcbiAqIC8vID0+IFsyLjEsIDEuMl1cbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8udW5pcUJ5KFt7ICd4JzogMSB9LCB7ICd4JzogMiB9LCB7ICd4JzogMSB9XSwgJ3gnKTtcbiAqIC8vID0+IFt7ICd4JzogMSB9LCB7ICd4JzogMiB9XVxuICovXG5mdW5jdGlvbiB1bmlxQnkoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSA/IGJhc2VVbmlxKGFycmF5LCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDIpKSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaXFCeTtcbiIsInZhciBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy51bmlxYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGBjb21wYXJhdG9yYCB3aGljaFxuICogaXMgaW52b2tlZCB0byBjb21wYXJlIGVsZW1lbnRzIG9mIGBhcnJheWAuIFRoZSBvcmRlciBvZiByZXN1bHQgdmFsdWVzIGlzXG4gKiBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlciB0aGV5IG9jY3VyIGluIHRoZSBhcnJheS5UaGUgY29tcGFyYXRvciBpcyBpbnZva2VkXG4gKiB3aXRoIHR3byBhcmd1bWVudHM6IChhcnJWYWwsIG90aFZhbCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ3gnOiAxLCAneSc6IDIgfSwgeyAneCc6IDIsICd5JzogMSB9LCB7ICd4JzogMSwgJ3knOiAyIH1dO1xuICpcbiAqIF8udW5pcVdpdGgob2JqZWN0cywgXy5pc0VxdWFsKTtcbiAqIC8vID0+IFt7ICd4JzogMSwgJ3knOiAyIH0sIHsgJ3gnOiAyLCAneSc6IDEgfV1cbiAqL1xuZnVuY3Rpb24gdW5pcVdpdGgoYXJyYXksIGNvbXBhcmF0b3IpIHtcbiAgY29tcGFyYXRvciA9IHR5cGVvZiBjb21wYXJhdG9yID09ICdmdW5jdGlvbicgPyBjb21wYXJhdG9yIDogdW5kZWZpbmVkO1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlVW5pcShhcnJheSwgdW5kZWZpbmVkLCBjb21wYXJhdG9yKSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaXFXaXRoO1xuIiwidmFyIFN5bHZlc3RlciA9IHt9XG5cblN5bHZlc3Rlci5NYXRyaXggPSBmdW5jdGlvbigpIHt9XG5cblN5bHZlc3Rlci5NYXRyaXguY3JlYXRlID0gZnVuY3Rpb24oZWxlbWVudHMpIHtcbiAgdmFyIE0gPSBuZXcgU3lsdmVzdGVyLk1hdHJpeCgpXG4gIHJldHVybiBNLnNldEVsZW1lbnRzKGVsZW1lbnRzKVxufVxuXG5TeWx2ZXN0ZXIuTWF0cml4LkkgPSBmdW5jdGlvbihuKSB7XG4gIHZhciBlbHMgPSBbXSxcbiAgICBpID0gbixcbiAgICBqXG4gIHdoaWxlIChpLS0pIHtcbiAgICBqID0gblxuICAgIGVsc1tpXSA9IFtdXG4gICAgd2hpbGUgKGotLSkge1xuICAgICAgZWxzW2ldW2pdID0gaSA9PT0gaiA/IDEgOiAwXG4gICAgfVxuICB9XG4gIHJldHVybiBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZShlbHMpXG59XG5cblN5bHZlc3Rlci5NYXRyaXgucHJvdG90eXBlID0ge1xuICBkdXA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZSh0aGlzLmVsZW1lbnRzKVxuICB9LFxuXG4gIGlzU3F1YXJlOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29scyA9IHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAwID8gMCA6IHRoaXMuZWxlbWVudHNbMF0ubGVuZ3RoXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSBjb2xzXG4gIH0sXG5cbiAgdG9SaWdodFRyaWFuZ3VsYXI6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKFtdKVxuICAgIHZhciBNID0gdGhpcy5kdXAoKSxcbiAgICAgIGVsc1xuICAgIHZhciBuID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICBpLFxuICAgICAgaixcbiAgICAgIG5wID0gdGhpcy5lbGVtZW50c1swXS5sZW5ndGgsXG4gICAgICBwXG4gICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgaWYgKE0uZWxlbWVudHNbaV1baV0gPT09IDApIHtcbiAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICBpZiAoTS5lbGVtZW50c1tqXVtpXSAhPT0gMCkge1xuICAgICAgICAgICAgZWxzID0gW11cbiAgICAgICAgICAgIGZvciAocCA9IDA7IHAgPCBucDsgcCsrKSB7XG4gICAgICAgICAgICAgIGVscy5wdXNoKE0uZWxlbWVudHNbaV1bcF0gKyBNLmVsZW1lbnRzW2pdW3BdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTS5lbGVtZW50c1tpXSA9IGVsc1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChNLmVsZW1lbnRzW2ldW2ldICE9PSAwKSB7XG4gICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgdmFyIG11bHRpcGxpZXIgPSBNLmVsZW1lbnRzW2pdW2ldIC8gTS5lbGVtZW50c1tpXVtpXVxuICAgICAgICAgIGVscyA9IFtdXG4gICAgICAgICAgZm9yIChwID0gMDsgcCA8IG5wOyBwKyspIHtcbiAgICAgICAgICAgIC8vIEVsZW1lbnRzIHdpdGggY29sdW1uIG51bWJlcnMgdXAgdG8gYW4gaW5jbHVkaW5nIHRoZSBudW1iZXIgb2YgdGhlXG4gICAgICAgICAgICAvLyByb3cgdGhhdCB3ZSdyZSBzdWJ0cmFjdGluZyBjYW4gc2FmZWx5IGJlIHNldCBzdHJhaWdodCB0byB6ZXJvLFxuICAgICAgICAgICAgLy8gc2luY2UgdGhhdCdzIHRoZSBwb2ludCBvZiB0aGlzIHJvdXRpbmUgYW5kIGl0IGF2b2lkcyBoYXZpbmcgdG9cbiAgICAgICAgICAgIC8vIGxvb3Agb3ZlciBhbmQgY29ycmVjdCByb3VuZGluZyBlcnJvcnMgbGF0ZXJcbiAgICAgICAgICAgIGVscy5wdXNoKFxuICAgICAgICAgICAgICBwIDw9IGkgPyAwIDogTS5lbGVtZW50c1tqXVtwXSAtIE0uZWxlbWVudHNbaV1bcF0gKiBtdWx0aXBsaWVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIE0uZWxlbWVudHNbal0gPSBlbHNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gTVxuICB9LFxuXG4gIGRldGVybWluYW50OiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICAgIGlmICghdGhpcy5pc1NxdWFyZSgpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICB2YXIgTSA9IHRoaXMudG9SaWdodFRyaWFuZ3VsYXIoKVxuICAgIHZhciBkZXQgPSBNLmVsZW1lbnRzWzBdWzBdLFxuICAgICAgbiA9IE0uZWxlbWVudHMubGVuZ3RoXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgIGRldCA9IGRldCAqIE0uZWxlbWVudHNbaV1baV1cbiAgICB9XG4gICAgcmV0dXJuIGRldFxuICB9LFxuXG4gIGlzU2luZ3VsYXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmlzU3F1YXJlKCkgJiYgdGhpcy5kZXRlcm1pbmFudCgpID09PSAwXG4gIH0sXG5cbiAgYXVnbWVudDogZnVuY3Rpb24obWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5kdXAoKVxuICAgIH1cbiAgICB2YXIgTSA9IG1hdHJpeC5lbGVtZW50cyB8fCBtYXRyaXhcbiAgICBpZiAodHlwZW9mIE1bMF1bMF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBNID0gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUoTSkuZWxlbWVudHNcbiAgICB9XG4gICAgdmFyIFQgPSB0aGlzLmR1cCgpLFxuICAgICAgY29scyA9IFQuZWxlbWVudHNbMF0ubGVuZ3RoXG4gICAgdmFyIGkgPSBULmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIG5qID0gTVswXS5sZW5ndGgsXG4gICAgICBqXG4gICAgaWYgKGkgIT09IE0ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBqID0gbmpcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgVC5lbGVtZW50c1tpXVtjb2xzICsgal0gPSBNW2ldW2pdXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBUXG4gIH0sXG5cbiAgaW52ZXJzZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNTcXVhcmUoKSB8fCB0aGlzLmlzU2luZ3VsYXIoKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgdmFyIG4gPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGkgPSBuLFxuICAgICAgalxuICAgIHZhciBNID0gdGhpcy5hdWdtZW50KFN5bHZlc3Rlci5NYXRyaXguSShuKSkudG9SaWdodFRyaWFuZ3VsYXIoKVxuICAgIHZhciBucCA9IE0uZWxlbWVudHNbMF0ubGVuZ3RoLFxuICAgICAgcCxcbiAgICAgIGVscyxcbiAgICAgIGRpdmlzb3JcbiAgICB2YXIgaW52ZXJzZV9lbGVtZW50cyA9IFtdLFxuICAgICAgbmV3X2VsZW1lbnRcbiAgICAvLyBTeWx2ZXN0ZXIuTWF0cml4IGlzIG5vbi1zaW5ndWxhciBzbyB0aGVyZSB3aWxsIGJlIG5vIHplcm9zIG9uIHRoZVxuICAgIC8vIGRpYWdvbmFsLiBDeWNsZSB0aHJvdWdoIHJvd3MgZnJvbSBsYXN0IHRvIGZpcnN0LlxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIC8vIEZpcnN0LCBub3JtYWxpc2UgZGlhZ29uYWwgZWxlbWVudHMgdG8gMVxuICAgICAgZWxzID0gW11cbiAgICAgIGludmVyc2VfZWxlbWVudHNbaV0gPSBbXVxuICAgICAgZGl2aXNvciA9IE0uZWxlbWVudHNbaV1baV1cbiAgICAgIGZvciAocCA9IDA7IHAgPCBucDsgcCsrKSB7XG4gICAgICAgIG5ld19lbGVtZW50ID0gTS5lbGVtZW50c1tpXVtwXSAvIGRpdmlzb3JcbiAgICAgICAgZWxzLnB1c2gobmV3X2VsZW1lbnQpXG4gICAgICAgIC8vIFNodWZmbGUgb2ZmIHRoZSBjdXJyZW50IHJvdyBvZiB0aGUgcmlnaHQgaGFuZCBzaWRlIGludG8gdGhlIHJlc3VsdHNcbiAgICAgICAgLy8gYXJyYXkgYXMgaXQgd2lsbCBub3QgYmUgbW9kaWZpZWQgYnkgbGF0ZXIgcnVucyB0aHJvdWdoIHRoaXMgbG9vcFxuICAgICAgICBpZiAocCA+PSBuKSB7XG4gICAgICAgICAgaW52ZXJzZV9lbGVtZW50c1tpXS5wdXNoKG5ld19lbGVtZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBNLmVsZW1lbnRzW2ldID0gZWxzXG4gICAgICAvLyBUaGVuLCBzdWJ0cmFjdCB0aGlzIHJvdyBmcm9tIHRob3NlIGFib3ZlIGl0IHRvIGdpdmUgdGhlIGlkZW50aXR5IG1hdHJpeFxuICAgICAgLy8gb24gdGhlIGxlZnQgaGFuZCBzaWRlXG4gICAgICBqID0gaVxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBlbHMgPSBbXVxuICAgICAgICBmb3IgKHAgPSAwOyBwIDwgbnA7IHArKykge1xuICAgICAgICAgIGVscy5wdXNoKE0uZWxlbWVudHNbal1bcF0gLSBNLmVsZW1lbnRzW2ldW3BdICogTS5lbGVtZW50c1tqXVtpXSlcbiAgICAgICAgfVxuICAgICAgICBNLmVsZW1lbnRzW2pdID0gZWxzXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZShpbnZlcnNlX2VsZW1lbnRzKVxuICB9LFxuXG4gIHNldEVsZW1lbnRzOiBmdW5jdGlvbihlbHMpIHtcbiAgICB2YXIgaSxcbiAgICAgIGosXG4gICAgICBlbGVtZW50cyA9IGVscy5lbGVtZW50cyB8fCBlbHNcbiAgICBpZiAoZWxlbWVudHNbMF0gJiYgdHlwZW9mIGVsZW1lbnRzWzBdWzBdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaSA9IGVsZW1lbnRzLmxlbmd0aFxuICAgICAgdGhpcy5lbGVtZW50cyA9IFtdXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGogPSBlbGVtZW50c1tpXS5sZW5ndGhcbiAgICAgICAgdGhpcy5lbGVtZW50c1tpXSA9IFtdXG4gICAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2ldW2pdID0gZWxlbWVudHNbaV1bal1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgdmFyIG4gPSBlbGVtZW50cy5sZW5ndGhcbiAgICB0aGlzLmVsZW1lbnRzID0gW11cbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2goW2VsZW1lbnRzW2ldXSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbGVtZW50cykge1xuICByZXR1cm4gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUoZWxlbWVudHMpLmludmVyc2UoKS5lbGVtZW50c1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbihmdW5jdGlvbigpe1xuXG4gIHZhclxuICAgIGJ1ZixcbiAgICBidWZJZHggPSAwLFxuICAgIGhleEJ5dGVzID0gW10sXG4gICAgaVxuICA7XG5cbiAgLy8gUHJlLWNhbGN1bGF0ZSB0b1N0cmluZygxNikgZm9yIHNwZWVkXG4gIGZvciAoaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgIGhleEJ5dGVzW2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbiAgfVxuXG4gIC8vIEJ1ZmZlciByYW5kb20gbnVtYmVycyBmb3Igc3BlZWRcbiAgLy8gUmVkdWNlIG1lbW9yeSB1c2FnZSBieSBkZWNyZWFzaW5nIHRoaXMgbnVtYmVyIChtaW4gMTYpXG4gIC8vIG9yIGltcHJvdmUgc3BlZWQgYnkgaW5jcmVhc2luZyB0aGlzIG51bWJlciAodHJ5IDE2Mzg0KVxuICB1dWlkLkJVRkZFUl9TSVpFID0gNDA5NjtcblxuICAvLyBCaW5hcnkgdXVpZHNcbiAgdXVpZC5iaW4gPSB1dWlkQmluO1xuXG4gIC8vIENsZWFyIGJ1ZmZlclxuICB1dWlkLmNsZWFyQnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgYnVmID0gbnVsbDtcbiAgICBidWZJZHggPSAwO1xuICB9O1xuXG4gIC8vIFRlc3QgZm9yIHV1aWRcbiAgdXVpZC50ZXN0ID0gZnVuY3Rpb24odXVpZCkge1xuICAgIGlmICh0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAvXlswLTlhLWZdezh9LVswLTlhLWZdezR9LTRbMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn0kL2kudGVzdCh1dWlkKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIE5vZGUgJiBCcm93c2VyIHN1cHBvcnRcbiAgdmFyIGNyeXB0MDtcbiAgaWYgKHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3J5cHQwID0gY3J5cHRvO1xuICB9IGVsc2UgaWYoICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgJiYgKHR5cGVvZiB3aW5kb3cubXNDcnlwdG8gIT09ICd1bmRlZmluZWQnKSkge1xuICAgIGNyeXB0MCA9IHdpbmRvdy5tc0NyeXB0bzsgLy8gSUUxMVxuICB9XG5cbiAgaWYgKCh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgJiYgKHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSkge1xuICAgIGNyeXB0MCA9IGNyeXB0MCB8fCByZXF1aXJlKCdjcnlwdG8nKTtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHV1aWQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cudXVpZCA9IHV1aWQ7XG4gIH1cblxuICAvLyBVc2UgYmVzdCBhdmFpbGFibGUgUFJOR1xuICAvLyBBbHNvIGV4cG9zZSB0aGlzIHNvIHlvdSBjYW4gb3ZlcnJpZGUgaXQuXG4gIHV1aWQucmFuZG9tQnl0ZXMgPSAoZnVuY3Rpb24oKXtcbiAgICBpZiAoY3J5cHQwKSB7XG4gICAgICBpZiAoY3J5cHQwLnJhbmRvbUJ5dGVzKSB7XG4gICAgICAgIHJldHVybiBjcnlwdDAucmFuZG9tQnl0ZXM7XG4gICAgICB9XG4gICAgICBpZiAoY3J5cHQwLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNsaWNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KG4pO1xuICAgICAgICAgICAgY3J5cHQwLmdldFJhbmRvbVZhbHVlcyhieXRlcyk7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShieXRlcyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24obikge1xuICAgICAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KG4pO1xuICAgICAgICAgIGNyeXB0MC5nZXRSYW5kb21WYWx1ZXMoYnl0ZXMpO1xuICAgICAgICAgIHJldHVybiBieXRlcztcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG4pIHtcbiAgICAgIHZhciBpLCByID0gW107XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHIucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLy8gQnVmZmVyIHNvbWUgcmFuZG9tIGJ5dGVzIGZvciBzcGVlZFxuICBmdW5jdGlvbiByYW5kb21CeXRlc0J1ZmZlcmVkKG4pIHtcbiAgICBpZiAoIWJ1ZiB8fCAoKGJ1ZklkeCArIG4pID4gdXVpZC5CVUZGRVJfU0laRSkpIHtcbiAgICAgIGJ1ZklkeCA9IDA7XG4gICAgICBidWYgPSB1dWlkLnJhbmRvbUJ5dGVzKHV1aWQuQlVGRkVSX1NJWkUpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmLnNsaWNlKGJ1ZklkeCwgYnVmSWR4ICs9IG4pO1xuICB9XG5cbiAgLy8gdXVpZC5iaW5cbiAgZnVuY3Rpb24gdXVpZEJpbigpIHtcbiAgICB2YXIgYiA9IHJhbmRvbUJ5dGVzQnVmZmVyZWQoMTYpO1xuICAgIGJbNl0gPSAoYls2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBiWzhdID0gKGJbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgcmV0dXJuIGI7XG4gIH1cblxuICAvLyBTdHJpbmcgVVVJRHY0IChSYW5kb20pXG4gIGZ1bmN0aW9uIHV1aWQoKSB7XG4gICAgdmFyIGIgPSB1dWlkQmluKCk7XG4gICAgcmV0dXJuIGhleEJ5dGVzW2JbMF1dICsgaGV4Qnl0ZXNbYlsxXV0gK1xuICAgICAgaGV4Qnl0ZXNbYlsyXV0gKyBoZXhCeXRlc1tiWzNdXSArICctJyArXG4gICAgICBoZXhCeXRlc1tiWzRdXSArIGhleEJ5dGVzW2JbNV1dICsgJy0nICtcbiAgICAgIGhleEJ5dGVzW2JbNl1dICsgaGV4Qnl0ZXNbYls3XV0gKyAnLScgK1xuICAgICAgaGV4Qnl0ZXNbYls4XV0gKyBoZXhCeXRlc1tiWzldXSArICctJyArXG4gICAgICBoZXhCeXRlc1tiWzEwXV0gKyBoZXhCeXRlc1tiWzExXV0gK1xuICAgICAgaGV4Qnl0ZXNbYlsxMl1dICsgaGV4Qnl0ZXNbYlsxM11dICtcbiAgICAgIGhleEJ5dGVzW2JbMTRdXSArIGhleEJ5dGVzW2JbMTVdXVxuICAgIDtcbiAgfVxuXG59KSgpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkLXJhbmRvbSc7XG5pbXBvcnQgeyBpc1Zpc2libGVOb2RlIH0gZnJvbSBcIkBmaWdtYS1wbHVnaW4vaGVscGVyc1wiO1xuaW1wb3J0IHJhd0xpZ2h0Q29sb3JUb2tlbnMgZnJvbSAnLi4vLi4vZGF0YS9saWdodC1tb2RlLmpzb24nO1xuaW1wb3J0IHJhd0RhcmtDb2xvclRva2VucyBmcm9tICcuLi8uLi9kYXRhL2RhcmstbW9kZS5qc29uJztcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogMzAwLCBoZWlnaHQ6IDQ0OCB9KTtcbmxldCBjdXN0b21FdmVudERhdGEgPSB7XG4gICAgZmlsZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLnBhcmVudC5uYW1lLFxuICAgIGZpbGVLZXk6IGZpZ21hLmZpbGVLZXksXG4gICAgXCJVc2VyIE5hbWVcIjogZmlnbWEuY3VycmVudFVzZXIubmFtZSxcbiAgICBcIlVzZXIgQXZhdGFyXCI6IGZpZ21hLmN1cnJlbnRVc2VyLnBob3RvVXJsLFxuICAgIFwiVXNlciBJRFwiOiBmaWdtYS5jdXJyZW50VXNlci5pZCxcbiAgICBcIlNlc3Npb24gSURcIjogZmlnbWEuY3VycmVudFVzZXIuc2Vzc2lvbklkLFxufTtcbmNvbnN0IG5hdmlnYXRlVG8gPSAoc2NyZWVuKSA9PiB7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcImZpZ21hLWNvbW1hbmRcIiwgbWVzc2FnZTogT2JqZWN0LmFzc2lnbih7IG9wZW5lZFRvOiBzY3JlZW4gfSwgY3VzdG9tRXZlbnREYXRhKVxuICAgIH0pO1xufTtcbnN3aXRjaCAoZmlnbWEuY29tbWFuZCkge1xuICAgIGNhc2UgXCJvcGVuLWhvbWVcIjpcbiAgICAgICAgbmF2aWdhdGVUbygnb3Blbi1ob21lJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvcGVuLXRhYmxlLWNyZWF0b3JcIjpcbiAgICAgICAgbmF2aWdhdGVUbygnb3Blbi10YWJsZS1jcmVhdG9yJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvcGVuLWxhbmd1YWdlLWxpbnRlclwiOlxuICAgICAgICBuYXZpZ2F0ZVRvKCdvcGVuLWxhbmd1YWdlLWxpbnRlcicpO1xuICAgICAgICBmaWdtYS51aS5yZXNpemUoNDc1LCA1MDApO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwib3Blbi1jb2xvci1saW50ZXJcIjpcbiAgICAgICAgbmF2aWdhdGVUbygnb3Blbi1jb2xvci1saW50ZXInKTtcbiAgICAgICAgZmlnbWEudWkucmVzaXplKDQ3NSwgNTAwKTtcbiAgICAgICAgYnJlYWs7XG59XG5jb25zdCBjcmVhdGVUYWJsZSA9IChtc2cpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHRhYmxlRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGxldCBoZWFkZXJDZWxsID0geWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhcImNlOGZhOGU4Y2FiMDdhMTlmODNmNDE4MWFjOGNiZTc2MDkzYzZiYzNcIik7XG4gICAgbGV0IHRhYmxlUm93ID0gZmlnbWEuY3JlYXRlQ29tcG9uZW50KCk7XG4gICAgbGV0IGNlbGxGaWxsQ29udGFpbmVyWSA9IGZhbHNlO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICB0YWJsZUZyYW1lLm5hbWUgPSBcIlRhYmxlXCI7XG4gICAgdGFibGVGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICB0YWJsZUZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgdGFibGVGcmFtZS54ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLng7XG4gICAgdGFibGVGcmFtZS55ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgbXNnLmNvbHVtbkNvbmZpZ3VyYXRpb24uZmluZCgoY29sKSA9PiAoY2VsbEZpbGxDb250YWluZXJZID0gY29sLm11bHRpVmFsdWUpKTtcbiAgICBbLi4uQXJyYXkobXNnLnJvd3MgKyAxKS5rZXlzKCldLm1hcCgocm93SW5kZXgpID0+IHtcbiAgICAgICAgdGFibGVSb3cubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICB0YWJsZVJvdy5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgdGFibGVSb3cubmFtZSA9IFwiUm93XCI7XG4gICAgICAgIG1zZy5jb2x1bW5Db25maWd1cmF0aW9uLm1hcCgoY29sKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCB7IG5hbWU6IGNvbE5hbWUsIGFsaWdubWVudDogY29sQWxpZ25tZW50LCBjZWxsVHlwZTogY29sQ2VsbFR5cGUsIG11bHRpVmFsdWU6IGNvbE11bHRpVmFsdWUsIH0gPSBjb2w7XG4gICAgICAgICAgICBjb2xBbGlnbm1lbnQgPVxuICAgICAgICAgICAgICAgIGNvbEFsaWdubWVudFswXS50b1VwcGVyQ2FzZSgpICsgY29sQWxpZ25tZW50LnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGNvbENlbGxUeXBlID0gY29sQ2VsbFR5cGVbMF0udG9VcHBlckNhc2UoKSArIGNvbENlbGxUeXBlLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGNvbE11bHRpVmFsdWUgPSBjb2xNdWx0aVZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjb2xNdWx0aVZhbHVlID1cbiAgICAgICAgICAgICAgICBjb2xNdWx0aVZhbHVlWzBdLnRvVXBwZXJDYXNlKCkgKyBjb2xNdWx0aVZhbHVlLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGlzSGVhZGVyQ2VsbCA9IGhlYWRlckNlbGwuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dE5vZGVPZkhlYWRlckNlbGwgPSB0aGlzSGVhZGVyQ2VsbC5jaGlsZHJlblswXS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5uYW1lID0gY29sTmFtZS5sZW5ndGggPiAwID8gY29sTmFtZSA6IFwiSGVhZGVyXCI7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGVPZkhlYWRlckNlbGwuZGVsZXRlQ2hhcmFjdGVycygwLCB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbC5jaGFyYWN0ZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGVPZkhlYWRlckNlbGwuaW5zZXJ0Q2hhcmFjdGVycygwLCBjb2xOYW1lLmxlbmd0aCA+IDAgPyBjb2xOYW1lIDogXCJIZWFkZXJcIik7XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwuc2V0UHJvcGVydGllcyh7IEFsaWdubWVudDogY29sQWxpZ25tZW50IH0pO1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLnJlc2l6ZShjb2xNdWx0aVZhbHVlID09PSBcIlRydWVcIiA/IDEyMCA6IHRoaXNIZWFkZXJDZWxsLndpZHRoLCB0aGlzSGVhZGVyQ2VsbC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLmNoaWxkcmVuWzBdLmxheW91dEdyb3cgPSBjZWxsRmlsbENvbnRhaW5lclkgPyAxIDogMDtcbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBjZWxsRmlsbENvbnRhaW5lcllcbiAgICAgICAgICAgICAgICAgICAgPyBcIkZJWEVEXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkFVVE9cIjtcbiAgICAgICAgICAgICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0aGlzSGVhZGVyQ2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0YWJsZUZyYW1lLmFwcGVuZENoaWxkKHRhYmxlUm93KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aGlzVGFibGVSb3cgPSB0YWJsZVJvdy5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgdGhpc1RhYmxlUm93LmNoaWxkcmVuLm1hcCgoY2VsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgeyBjZWxsVHlwZTogY29sQ2VsbFR5cGUsIG11bHRpVmFsdWU6IGNvbE11bHRpVmFsdWUgfSA9IG1zZy5jb2x1bW5Db25maWd1cmF0aW9uW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjb2xDZWxsVHlwZSA9IGNvbENlbGxUeXBlWzBdLnRvVXBwZXJDYXNlKCkgKyBjb2xDZWxsVHlwZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICAgICAgY29sTXVsdGlWYWx1ZSA9IGNvbE11bHRpVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb2xNdWx0aVZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgY29sTXVsdGlWYWx1ZVswXS50b1VwcGVyQ2FzZSgpICsgY29sTXVsdGlWYWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICAgICAgY2VsbC5uYW1lID09PSBcIkhlYWRlclwiID8gKGNlbGwubmFtZSA9IFwiQ2VsbFwiKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRQcm9wZXJ0aWVzKHsgVHlwZTogXCJCb2R5XCIgfSk7XG4gICAgICAgICAgICAgICAgY2VsbC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgICAgICAgICAgVHlwZTogY29sQ2VsbFR5cGUsXG4gICAgICAgICAgICAgICAgICAgIFwiTXVsdGktdmFsdWVcIjogY29sTXVsdGlWYWx1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjZWxsLmNoaWxkcmVuWzBdLmxheW91dEdyb3cgPSBjZWxsRmlsbENvbnRhaW5lclkgPyAxIDogMDtcbiAgICAgICAgICAgICAgICBjZWxsLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IGNlbGxGaWxsQ29udGFpbmVyWSA/IFwiRklYRURcIiA6IFwiQVVUT1wiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YWJsZUZyYW1lLmFwcGVuZENoaWxkKHRoaXNUYWJsZVJvdyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgdGFibGVEYXRhID0gT2JqZWN0LmFzc2lnbih7IGZpbGVOYW1lOiBmaWdtYS5jdXJyZW50UGFnZS5wYXJlbnQubmFtZSwgZmlsZUtleTogZmlnbWEuZmlsZUtleSwgXCJDb2x1bW4gY291bnRcIjogbXNnLmNvbHVtbkNvbmZpZ3VyYXRpb24ubGVuZ3RoLCBcIlJvdyBjb3VudFwiOiBtc2cucm93cywgXCJDb2x1bW4gQ29uZmlndXJhdGlvblwiOiBtc2cuY29sdW1uQ29uZmlndXJhdGlvbiB9LCBjdXN0b21FdmVudERhdGEpO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJ0YWJsZS1jcmVhdGVkXCIsIG1lc3NhZ2U6IHRhYmxlRGF0YSB9KTtcbiAgICBmaWdtYS5ub3RpZnkoXCJUYWJsZSBjcmVhdGVkIOKchVwiKTtcbn0pO1xuY29uc3QgcHVzaFRleHRMYXllclRvQXJyYXkgPSAobGF5ZXIsIGFycmF5KSA9PiB7XG4gICAgYXJyYXkucHVzaCh7XG4gICAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgICAgbmFtZTogbGF5ZXIubmFtZSxcbiAgICAgICAgdmlzaWJsZTogbGF5ZXIudmlzaWJsZSxcbiAgICAgICAgeDogbGF5ZXIueCxcbiAgICAgICAgeTogbGF5ZXIueSxcbiAgICAgICAgdHlwZTogbGF5ZXIudHlwZSxcbiAgICAgICAgY2hhcmFjdGVyczogbGF5ZXIgPT09IG51bGwgfHwgbGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheWVyLmNoYXJhY3RlcnMsXG4gICAgICAgIGNoaWxkcmVuOiBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuY2hpbGRyZW4sXG4gICAgfSk7XG59O1xuY29uc3Qgc2VuZEN1cnJlbnRUZXh0U2VsZWN0aW9uID0gKCkgPT4ge1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgbGV0IHRleHRMYXllcnMgPSBbXTtcbiAgICBzZWxlY3Rpb24uZm9yRWFjaCgoc2VsZWN0ZWRMYXllcikgPT4ge1xuICAgICAgICBpZiAoISEoc2VsZWN0ZWRMYXllciA9PT0gbnVsbCB8fCBzZWxlY3RlZExheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZExheWVyLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0TGF5ZXJzID0gc2VsZWN0ZWRMYXllci5maW5kQWxsKG4gPT4gbi50eXBlID09PSAnVEVYVCcpO1xuICAgICAgICAgICAgc2VsZWN0ZWRUZXh0TGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaXNWaXNpYmxlTm9kZShsYXllcikgJiYgcHVzaFRleHRMYXllclRvQXJyYXkobGF5ZXIsIHRleHRMYXllcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0ZWRMYXllci50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgIGlzVmlzaWJsZU5vZGUoc2VsZWN0ZWRMYXllcikgJiYgcHVzaFRleHRMYXllclRvQXJyYXkoc2VsZWN0ZWRMYXllciwgdGV4dExheWVycyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcIm5ldy10ZXh0LXNlbGVjdGlvblwiLFxuICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICB0ZXh0TGF5ZXJzLFxuICAgICAgICAgICAgc2VsZWN0ZWRMYXllcnM6IHNlbGVjdGlvblxuICAgICAgICB9XG4gICAgfSk7XG59O1xuY29uc3QgcmdiVG9IZXggPSAociwgZywgYikgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFRvSGV4ID0gKGMpID0+IHtcbiAgICAgICAgYyA9IE1hdGgucm91bmQoYyAqIDI1NSk7XG4gICAgICAgIGxldCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyAnMCcgKyBoZXggOiBoZXg7XG4gICAgfTtcbiAgICBjb25zdCBjb21iaW5lQ29tcG9uZW50cyA9IChyLCBnLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiAnIycgKyBjb21wb25lbnRUb0hleChyKSArIGNvbXBvbmVudFRvSGV4KGcpICsgY29tcG9uZW50VG9IZXgoYik7XG4gICAgfTtcbiAgICByZXR1cm4gY29tYmluZUNvbXBvbmVudHMociwgZywgYik7XG59O1xuY29uc3QgcHVzaENvbG9yVG9BcnJheSA9IChsYXllciwgY29sb3JUeXBlLCBhcnJheSkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGNvbnN0IHN0eWxlSWRUeXBlID0gY29sb3JUeXBlID09PSAnZmlsbHMnID8gJ2ZpbGxTdHlsZUlkJyA6ICdzdHJva2VTdHlsZUlkJztcbiAgICBjb25zdCBpc1NvbGlkQ29sb3IgPSAoKF9hID0gbGF5ZXIgPT09IG51bGwgfHwgbGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheWVyLmZpbGxzWzBdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudHlwZSkgPT09ICdTT0xJRCc7XG4gICAgY29uc3QgY29sb3JJc0ltYWdlID0gY29sb3JUeXBlID09PSAnZmlsbHMnICYmICgoX2IgPSBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuZmlsbHNbMF0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50eXBlKSA9PT0gJ0lNQUdFJztcbiAgICBjb25zdCBjb2xvcklzR3JhZGllbnQgPSBjb2xvclR5cGUgPT09ICdmaWxscycgJiYgKChfYyA9IGxheWVyID09PSBudWxsIHx8IGxheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXllci5maWxsc1swXSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnR5cGUuaW5jbHVkZXMoJ0dSQURJRU5UJykpO1xuICAgIGNvbnN0IGNvbG9ySXNWaXNpYmxlID0gbGF5ZXJbY29sb3JUeXBlXVswXS52aXNpYmxlO1xuICAgIGlmICghY29sb3JJc0ltYWdlICYmICFjb2xvcklzR3JhZGllbnQgJiYgY29sb3JJc1Zpc2libGUgJiYgIWxheWVyLmlzQ2hpbGRPZkljb25XaXRoRmlsbCkge1xuICAgICAgICBjb25zdCBjb2xvckluSGV4ID0gKGNvbG9ySW5SR0IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZ2JUb0hleChjb2xvckluUkdCLnIsIGNvbG9ySW5SR0IuZywgY29sb3JJblJHQi5iKTtcbiAgICAgICAgfTtcbiAgICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgICAgICBjb2xvcklkOiB1dWlkKCksXG4gICAgICAgICAgICBsYXllcklkOiBsYXllci5sYXllcklkLFxuICAgICAgICAgICAgbGF5ZXJOYW1lOiBsYXllci5uYW1lLFxuICAgICAgICAgICAgbGF5ZXJUeXBlOiBsYXllci50eXBlLFxuICAgICAgICAgICAgY29sb3I6IGxheWVyW2NvbG9yVHlwZV0sXG4gICAgICAgICAgICBjb2xvclN0eWxlSWQ6IGxheWVyW3N0eWxlSWRUeXBlXSxcbiAgICAgICAgICAgIGhhc0NvbG9yU3R5bGU6IGlzU29saWRDb2xvciA/IGxheWVyW3N0eWxlSWRUeXBlXS5sZW5ndGggPiAwIDogZmFsc2UsXG4gICAgICAgICAgICB2aXNpYmxlOiBsYXllci52aXNpYmxlLFxuICAgICAgICAgICAgY29sb3JUeXBlOiBjb2xvclR5cGUuc2xpY2UoMCwgLTEpLFxuICAgICAgICAgICAgY29sb3JJbkhleDogY29sb3JJbkhleChsYXllcltjb2xvclR5cGVdWzBdLmNvbG9yKSxcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmxldCBjb2xvclRva2VucyA9IFtdO1xuY29uc3QgZ2V0Q29sb3JUb2tlbnMgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBsaWdodE1vZGVUb2tlbnMgPSB5aWVsZCBQcm9taXNlLmFsbChyYXdMaWdodENvbG9yVG9rZW5zLm1ldGEuc3R5bGVzLm1hcCgoc3R5bGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyByZXR1cm4gc3R5bGU7IH0pKSk7XG4gICAgY29uc3QgZGFya01vZGVUb2tlbnMgPSB5aWVsZCBQcm9taXNlLmFsbChyYXdEYXJrQ29sb3JUb2tlbnMubWV0YS5zdHlsZXMubWFwKChzdHlsZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiBzdHlsZTsgfSkpKTtcbiAgICBjb25zdCBhbGxDb2xvclRva2VucyA9IGxpZ2h0TW9kZVRva2Vucy5jb25jYXQoZGFya01vZGVUb2tlbnMpO1xuICAgIGNvbG9yVG9rZW5zID0geWllbGQgUHJvbWlzZS5hbGwoYWxsQ29sb3JUb2tlbnMubWFwKChzdHlsZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBSZWN0YW5nbGUgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgdGVtcFJlY3RhbmdsZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGxldCBjb2xvclN0eWxlV2l0aEhleCA9IHt9O1xuICAgICAgICBjb25zdCBpbXBvcnRlZFN0eWxlID0geWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKHN0eWxlLmtleSk7XG4gICAgICAgIHRlbXBSZWN0YW5nbGUuZmlsbFN0eWxlSWQgPSBpbXBvcnRlZFN0eWxlLmlkO1xuICAgICAgICBpZiAodGVtcFJlY3RhbmdsZS5maWxsc1swXS5jb2xvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb2xvclN0eWxlV2l0aEhleCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUpLCB7IGhleDogcmdiVG9IZXgodGVtcFJlY3RhbmdsZS5maWxsc1swXS5jb2xvci5yLCB0ZW1wUmVjdGFuZ2xlLmZpbGxzWzBdLmNvbG9yLmcsIHRlbXBSZWN0YW5nbGUuZmlsbHNbMF0uY29sb3IuYikgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb2xvclN0eWxlV2l0aEhleCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUpLCB7IGhleDogJ05vbmUnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBSZWN0YW5nbGUucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybiBjb2xvclN0eWxlV2l0aEhleDtcbiAgICB9KSkpO1xufSk7XG5jb25zdCBnZXRDb2xvclN0YXRzID0gKCkgPT4ge1xuICAgIGdldENvbG9yVG9rZW5zKCk7XG4gICAgY29uc3QgZ2V0UmF3TGF5ZXJzV2l0aENvbG9yID0gKCkgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCByZWxldmFudExheWVycyA9IHNlbGVjdGlvbi5tYXAoKHNlbGVjdGVkTGF5ZXIpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGxldCBvdXRwdXRGb3JMYXllcnNXaXRoQ2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGlzUmVsZXZhbnRMYXllciA9IChuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjZXB0YWJsZU5vZGV0eXBlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ0VMTElQU0UnLFxuICAgICAgICAgICAgICAgICAgICAnRlJBTUUnLFxuICAgICAgICAgICAgICAgICAgICAnR1JPVVAnLFxuICAgICAgICAgICAgICAgICAgICAnQ09NUE9ORU5UJyxcbiAgICAgICAgICAgICAgICAgICAgJ0lOU1RBTkNFJyxcbiAgICAgICAgICAgICAgICAgICAgJ0xJTkUnLFxuICAgICAgICAgICAgICAgICAgICAnUE9MWUdPTicsXG4gICAgICAgICAgICAgICAgICAgICdSRUNUQU5HTEUnLFxuICAgICAgICAgICAgICAgICAgICAnU0hBUEVfV0lUSF9URVhUJyxcbiAgICAgICAgICAgICAgICAgICAgJ1NUQVInLFxuICAgICAgICAgICAgICAgICAgICAnVEVYVCcsXG4gICAgICAgICAgICAgICAgICAgICdCT09MRUFOX09QRVJBVElPTidcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGxldCBoYXNGaWxsID0gXCJmaWxsc1wiIGluIG4gJiYgKG4gPT09IG51bGwgfHwgbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbi5maWxsc1swXSkgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBsZXQgaGFzU3Ryb2tlID0gXCJzdHJva2VzXCIgaW4gbiAmJiAobiA9PT0gbnVsbCB8fCBuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuLnN0cm9rZXNbMF0pICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzRmlsbE9yU3Ryb2tlID0gaGFzRmlsbCB8fCBoYXNTdHJva2U7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZUlzVmFsaWROb2RlVHlwZSA9IGFjY2VwdGFibGVOb2RldHlwZXMuc29tZSgobm9kZVR5cGUpID0+IG4udHlwZSA9PT0gbm9kZVR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlSXNWYWxpZE5vZGVUeXBlICYmIGhhc0ZpbGxPclN0cm9rZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZExheWVySGFzQ2hpbGRyZW4gPSAnZmluZEFsbCcgaW4gc2VsZWN0ZWRMYXllciAmJlxuICAgICAgICAgICAgICAgICgoX2EgPSBzZWxlY3RlZExheWVyID09PSBudWxsIHx8IHNlbGVjdGVkTGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkTGF5ZXIuY2hpbGRyZW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpID4gMDtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZExheWVySGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRGb3JMYXllcnNXaXRoQ2hpbGRyZW4gPSBzZWxlY3RlZExheWVyLmZpbmRBbGwoKG4pID0+IGlzUmVsZXZhbnRMYXllcihuKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5vdXRwdXRGb3JMYXllcnNXaXRoQ2hpbGRyZW5dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNSZWxldmFudExheWVyKHNlbGVjdGVkTGF5ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtzZWxlY3RlZExheWVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBvdXRwdXQgPSByZWxldmFudExheWVycy5mbGF0KCk7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dC5maWx0ZXIobGF5ZXIgPT4gaXNWaXNpYmxlTm9kZShsYXllcikpO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG4gICAgY29uc3QgcmF3TGF5ZXJzV2l0aENvbG9yID0gZ2V0UmF3TGF5ZXJzV2l0aENvbG9yKCk7XG4gICAgY29uc3QgbGF5ZXJzV2l0aENvbG9yID0gcmF3TGF5ZXJzV2l0aENvbG9yLm1hcCgobGF5ZXIpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgaGFzRmlsbCA9IFwiZmlsbHNcIiBpbiBsYXllciAmJiBsYXllci5maWxsc1swXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBoYXNTdHJva2UgPSBcInN0cm9rZXNcIiBpbiBsYXllciAmJiBsYXllci5zdHJva2VzWzBdICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGhhc0ZpbGxBbmRTdHJva2UgPSBoYXNGaWxsICYmIGhhc1N0cm9rZTtcbiAgICAgICAgY29uc3QgaXNDaGlsZE9mSWNvbiA9IGxheWVyLnBhcmVudC50eXBlID09PSAnQk9PTEVBTl9PUEVSQVRJT04nO1xuICAgICAgICBjb25zdCBwYXJlbnRJY29uSGFzRmlsbCA9ICgoX2IgPSAoX2EgPSBsYXllci5wYXJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5maWxscykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmxlbmd0aCkgPiAwO1xuICAgICAgICBjb25zdCBpc0NoaWxkT2ZJY29uV2l0aEZpbGwgPSBpc0NoaWxkT2ZJY29uICYmIHBhcmVudEljb25IYXNGaWxsO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGF5ZXJJZDogbGF5ZXIuaWQsXG4gICAgICAgICAgICBuYW1lOiBsYXllci5uYW1lLFxuICAgICAgICAgICAgZmlsbHM6IFwiZmlsbHNcIiBpbiBsYXllciAmJiBsYXllci5maWxscyxcbiAgICAgICAgICAgIHN0cm9rZXM6IFwic3Ryb2tlc1wiIGluIGxheWVyICYmIGxheWVyLnN0cm9rZXMsXG4gICAgICAgICAgICBmaWxsU3R5bGVJZDogXCJmaWxsU3R5bGVJZFwiIGluIGxheWVyICYmIGxheWVyLmZpbGxTdHlsZUlkLFxuICAgICAgICAgICAgc3Ryb2tlU3R5bGVJZDogXCJzdHJva2VTdHlsZUlkXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuc3Ryb2tlU3R5bGVJZCxcbiAgICAgICAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICAgICAgICB0eXBlOiBsYXllci50eXBlLFxuICAgICAgICAgICAgaGFzRmlsbDogaGFzRmlsbCxcbiAgICAgICAgICAgIGhhc1N0cm9rZTogaGFzU3Ryb2tlLFxuICAgICAgICAgICAgaGFzRmlsbEFuZFN0cm9rZTogaGFzRmlsbEFuZFN0cm9rZSxcbiAgICAgICAgICAgIGlzQ2hpbGRPZkljb25XaXRoRmlsbDogaXNDaGlsZE9mSWNvbldpdGhGaWxsXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgY29uc3QgYWxsSW5zdGFuY2VzT2ZDb2xvciA9IGxheWVyc1dpdGhDb2xvclxuICAgICAgICAubWFwKChsYXllcikgPT4ge1xuICAgICAgICBsZXQgdGVtcENvbG9ycyA9IFtdO1xuICAgICAgICBpZiAobGF5ZXIuaGFzRmlsbEFuZFN0cm9rZSkge1xuICAgICAgICAgICAgcHVzaENvbG9yVG9BcnJheShsYXllciwgJ2ZpbGxzJywgdGVtcENvbG9ycyk7XG4gICAgICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyLCAnc3Ryb2tlcycsIHRlbXBDb2xvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxheWVyLmhhc0ZpbGwpIHtcbiAgICAgICAgICAgIHB1c2hDb2xvclRvQXJyYXkobGF5ZXIsICdmaWxscycsIHRlbXBDb2xvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxheWVyLmhhc1N0cm9rZSkge1xuICAgICAgICAgICAgcHVzaENvbG9yVG9BcnJheShsYXllciwgJ3N0cm9rZXMnLCB0ZW1wQ29sb3JzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcENvbG9ycztcbiAgICB9KVxuICAgICAgICAuZmxhdCgpO1xuICAgIGNvbnN0IGRvZXNDb2xvck1hdGNoQW55T25lQ29yZVN0eWxlID0gKGNvbG9ySW5IZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbG9yVG9rZW5zLnNvbWUoKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9ySW5IZXggPT09ICgoX2IgPSAoX2EgPSBzdHlsZSA9PT0gbnVsbCB8fCBzdHlsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3R5bGUuY29sb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb2xvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmhleCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9O1xuICAgIGNvbnN0IGRvZXNLZXlNYXRjaEFueU9uZUNvcmVDb2xvclN0eWxlS2V5ID0gKGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gY29sb3JUb2tlbnMuc29tZSgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBrZXkuaW5jbHVkZXMoc3R5bGUua2V5KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH07XG4gICAgY29uc3QgY29sb3JzV2l0aENvbG9yU3R5bGUgPSBhbGxJbnN0YW5jZXNPZkNvbG9yLmZpbHRlcigoY29sb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbG9yLmhhc0NvbG9yU3R5bGU7XG4gICAgfSk7XG4gICAgY29uc3QgY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUgPSAoKCkgPT4ge1xuICAgICAgICBsZXQgY29sb3JzID0gY29sb3JzV2l0aENvbG9yU3R5bGUuZmlsdGVyKChjb2xvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyByLCBnLCBiIH0gPSBjb2xvci5jb2xvclswXS5jb2xvcjtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ySW5IZXggPSByZ2JUb0hleChyLCBnLCBiKTtcbiAgICAgICAgICAgIHJldHVybiBkb2VzQ29sb3JNYXRjaEFueU9uZUNvcmVTdHlsZShjb2xvckluSGV4KSAmJiBkb2VzS2V5TWF0Y2hBbnlPbmVDb3JlQ29sb3JTdHlsZUtleShjb2xvci5jb2xvclN0eWxlSWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29sb3JzLm1hcCgoY29sb3IsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb2xvclRva2Vucy5tYXAoKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yLmNvbG9yU3R5bGVJZC5pbmNsdWRlcyhzdHlsZS5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yc1tpbmRleF0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbG9yKSwgeyBzdHlsZU5hbWU6IHN0eWxlLm5hbWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbG9ycztcbiAgICB9KSgpO1xuICAgIGNvbnN0IGNvbG9yc05vdFVzaW5nT25lQ29yZUNvbG9yU3R5bGUgPSBhbGxJbnN0YW5jZXNPZkNvbG9yLmZpbHRlcigoY29sb3IpID0+IHtcbiAgICAgICAgcmV0dXJuICFjb2xvclRva2Vucy5zb21lKChvbmVDb3JlQ29sb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5jb2xvclN0eWxlSWQuaW5jbHVkZXMob25lQ29yZUNvbG9yLmtleSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IG9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2UgPSBgJHsoKGNvbG9yc1VzaW5nT25lQ29yZVN0eWxlLmxlbmd0aCAvIGFsbEluc3RhbmNlc09mQ29sb3IubGVuZ3RoKSAqIDEwMCkudG9GaXhlZCgyKX0lYDtcbiAgICBjb25zdCBpZHNPZkFsbEluc3RhbmNlc09mQ29sb3IgPSBhbGxJbnN0YW5jZXNPZkNvbG9yLm1hcCgoY29sb3IpID0+IGNvbG9yLmNvbG9ySWQpO1xuICAgIGNvbnN0IGNvbG9yU3RhdHMgPSB7XG4gICAgICAgIHNlbGVjdGVkTGF5ZXJzV2l0aENvbG9yOiByYXdMYXllcnNXaXRoQ29sb3IsXG4gICAgICAgIGFsbEluc3RhbmNlc09mQ29sb3I6IGFsbEluc3RhbmNlc09mQ29sb3IsXG4gICAgICAgIGNvbG9yc1dpdGhDb2xvclN0eWxlOiBjb2xvcnNXaXRoQ29sb3JTdHlsZSxcbiAgICAgICAgY29sb3JzVXNpbmdPbmVDb3JlU3R5bGU6IGNvbG9yc1VzaW5nT25lQ29yZVN0eWxlLFxuICAgICAgICBjb2xvcnNOb3RVc2luZ09uZUNvcmVDb2xvclN0eWxlOiBjb2xvcnNOb3RVc2luZ09uZUNvcmVDb2xvclN0eWxlLFxuICAgICAgICBvbmVDb3JlQ29sb3JTdHlsZUNvdmVyYWdlOiBvbmVDb3JlQ29sb3JTdHlsZUNvdmVyYWdlLFxuICAgICAgICBpZHNPZkFsbEluc3RhbmNlc09mQ29sb3I6IGlkc09mQWxsSW5zdGFuY2VzT2ZDb2xvcixcbiAgICB9O1xuICAgIHJldHVybiBjb2xvclN0YXRzO1xufTtcbmNvbnN0IHNlbGVjdEFuZFpvb21Ub0xheWVyID0gKGxheWVySWQpID0+IHtcbiAgICBjb25zdCBsYXllciA9IGZpZ21hLmdldE5vZGVCeUlkKGxheWVySWQpO1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtsYXllcl07XG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtsYXllcl0pO1xufTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChtc2cudHlwZSA9PT0gXCJuYXZpZ2F0ZS10by10YWJcIikge1xuICAgICAgICBzd2l0Y2ggKG1zZy50YWJDbGlja2VkKSB7XG4gICAgICAgICAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSgzMDAsIDQ0OCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbygnb3Blbi1ob21lJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGFibGUtY3JlYXRvclwiOlxuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSgzMDAsIDQ0OCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbygnb3Blbi10YWJsZS1jcmVhdG9yJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGFuZ3VhZ2UtbGludGVyXCI6XG4gICAgICAgICAgICAgICAgc2VuZEN1cnJlbnRUZXh0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKDQ3NSwgNTAwKTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvKCdvcGVuLWxhbmd1YWdlLWxpbnRlcicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNvbG9yLWxpbnRlclwiOlxuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSg0NzUsIDUwMCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbygnb3Blbi1jb2xvci1saW50ZXInKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiaW5pdGlhbGl6ZS1zZWxlY3Rpb25cIikge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcImluaXRpYWwtc2VsZWN0aW9uXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2Nsb3NlLXBsdWdpbicpIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcImNyZWF0ZS10YWJsZVwiKSB7XG4gICAgICAgIGNyZWF0ZVRhYmxlKG1zZyk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3J1bi1sYW5ndWFnZS1saW50ZXInKSB7XG4gICAgICAgIHNlbmRDdXJyZW50VGV4dFNlbGVjdGlvbigpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdyZXF1ZXN0LWxvY2FsLWN1c3RvbS1kaWN0aW9uYXJ5Jykge1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImxvY2FsLWN1c3RvbS1kaWN0aW9uYXJ5LXJldHJpZXZlZFwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdCA/IHJlc3VsdCA6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2FkZC10by1kaWN0aW9uYXJ5Jykge1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdDdXN0b21EaWN0aW9uYXJ5ID0gcmVzdWx0ID8gcmVzdWx0IDogW107XG4gICAgICAgICAgICBuZXdDdXN0b21EaWN0aW9uYXJ5LnB1c2gobXNnLndvcmRUb0FkZCk7XG4gICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIsIG5ld0N1c3RvbURpY3Rpb25hcnkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnZ2V0LXNhbXBsZS10ZXh0Jykge1xuICAgICAgICBjb25zdCBzYW1wbGVUZXh0ID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic2FtcGxlLXRleHRcIiwgbWVzc2FnZTogc2FtcGxlVGV4dCB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnc2FtcGxlLXRleHQtY2hhbmdlZCcpIHtcbiAgICAgICAgc2VsZWN0QW5kWm9vbVRvTGF5ZXIobXNnLmFjdGl2ZU5vZGVJZCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3VwZGF0ZS1zb3VyY2UtdGV4dCcpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlVGV4dExheWVyID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmxheWVySWQpO1xuICAgICAgICBsZXQgZm9udE5hbWUgPSBhY3RpdmVUZXh0TGF5ZXIuZm9udE5hbWU7XG4gICAgICAgIGlmIChmb250TmFtZSA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKGFjdGl2ZVRleHRMYXllci5nZXRSYW5nZUFsbEZvbnROYW1lcygwLCBhY3RpdmVUZXh0TGF5ZXIuY2hhcmFjdGVycy5sZW5ndGgpLm1hcChmaWdtYS5sb2FkRm9udEFzeW5jKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGZvbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmVUZXh0TGF5ZXIuZGVsZXRlQ2hhcmFjdGVycygwLCBhY3RpdmVUZXh0TGF5ZXIuY2hhcmFjdGVycy5sZW5ndGgpO1xuICAgICAgICBhY3RpdmVUZXh0TGF5ZXIuaW5zZXJ0Q2hhcmFjdGVycygwLCBtc2cudXBkYXRlZFRleHQpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic291cmNlLXRleHQtdXBkYXRlZFwiLCBtZXNzYWdlOiBtc2cudXBkYXRlZFRleHQgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3RleHQtbGludGVkJykge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwidGV4dC1saW50ZWRcIiwgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIGN1c3RvbUV2ZW50RGF0YSxcbiAgICAgICAgICAgICAgICBtaW5pbWFsUmVwb3J0OiBtc2cubWluaW1hbFJlcG9ydCxcbiAgICAgICAgICAgICAgICBmdWxsUmVwb3J0OiBtc2cuZnVsbFJlcG9ydFxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAncnVuLWNvbG9yLWxpbnRlcicpIHtcbiAgICAgICAgY29uc3Qgc2VuZENvbG9yRGF0YSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgZ2V0Q29sb3JUb2tlbnMoKTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY29sb3Itc3RhdHMnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3VzdG9tRXZlbnREYXRhKSwgeyBjb2xvclN0YXRzOiBnZXRDb2xvclN0YXRzKCksIGNvbG9yVG9rZW5zOiBjb2xvclRva2Vucywgc2VsZWN0aW9uTWFkZTogZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA+IDAgfSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbmRDb2xvckRhdGEoKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnc2VsZWN0LWxheWVyJykge1xuICAgICAgICBzZWxlY3RBbmRab29tVG9MYXllcihtc2cubGF5ZXJJZCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2FwcGx5LWNvbG9yLXN0eWxlJykge1xuICAgICAgICBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMobXNnLmNvbG9yU3R5bGVLZXkpLnRoZW4oaW1wb3J0ZWQgPT4ge1xuICAgICAgICAgICAgZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmxheWVySWQpW2Ake21zZy5jb2xvclR5cGV9U3R5bGVJZGBdID0gaW1wb3J0ZWQuaWQ7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NvbG9yLXJlcGxhY2VkJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbUV2ZW50RGF0YSksIHsgbGF5ZXJJZDogbXNnLmxheWVySWQsIGxheWVyTmFtZTogZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmxheWVySWQpLm5hbWUsIG9yaWdpbmFsQ29sb3I6IG1zZy5vcmlnaW5hbENvbG9yLCBjb2xvclN0eWxlS2V5OiBtc2cuY29sb3JTdHlsZUtleSwgY29sb3JTdHlsZU5hbWU6IG1zZy5jb2xvclN0eWxlTmFtZSwgY29sb3JTdHlsZUNvbG9yOiBtc2cuY29sb3JTdHlsZUNvbG9yIH0pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3Rpb25jaGFuZ2UgZXZlbnQgd2FzIGZpcmVkJyk7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInNlbGVjdGlvbi1jaGFuZ2VkXCIsXG4gICAgICAgIG1lc3NhZ2U6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblxuICAgIH0pO1xufSk7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9