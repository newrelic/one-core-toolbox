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

module.exports = JSON.parse("{\"error\":false,\"status\":200,\"meta\":{\"styles\":[{\"key\":\"fdd2bbb7f23cab937357c3dd786f0cd654705923\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1305\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WnL/XwU/H2mLBv0ubshU4GPn/style_thumbnail_0.png?Expires=1651449600&Signature=aoanH~DM5mVk9ROnU1LqD9er7Q~zwbg0OKsOruU8CUqnX2cLIRW650oniE9R4TIdRqah4NbdSldIEfJZjRNaD0AFuAmmhVaFyXOqShzb0XeTuVInkOnQQxYXYPkQ-5kh1wPXJ61ZS~lmDjvLR-IrfLBAbXDGK2RdW79yA7~mYtSeL~YhRuRDURTmukFqsOO7-e5HNI-nFy6v4~M6GFRZwXDvHjAWu0hibAjlCyPQMbJWhHDvTRC7xVr2CytYL5~zuDuQ1BDx3P7gXJDX1w1dkeTI8GNlHXZQ41Zs6vjid-4gWTYt6gaX9mOxhrF68yKdOan6Dtqy9B7fJ9REyzDltw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.696Z\",\"updated_at\":\"2022-04-13T16:04:50.482Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"~eL\"},{\"key\":\"a00b0da40d6e36e18304fb96954d804102356292\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1302\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ESo/g5p/f4D1zMNhNkMT1rrO/style_thumbnail_1.png?Expires=1651449600&Signature=F2JHPnAha-V9Lg~HmurQZCgZ2t0S3M97~y5RPRLPoZyKreHHXIej0pdxjWPVokdGdIKGBv2MelYTFtv2goi-B0KMznJprTL3v9Lr59sJ5UhybFet~t9pWxAxzLdDMmNSlB~QamS~ARVqajOTkcRa9gIgOmSeiUzq2wfQyWclLlvcltfO-la3ImWy~WP5GydeduH~hDam~Mb8RIBinXX3CxCZO2W8XYdSaW7M0kfuu4wdWddDVB2eLXU9E3Tebz7diFDNU2s3XN33gTlTiLPcbtB4tVPSoRDpZaMmTj3dvd4pjASWYh9aGxko4bGge9B9x6k1rr7K7QShJTq8lLuXhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.717Z\",\"updated_at\":\"2022-04-13T16:04:50.476Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"~e7\"},{\"key\":\"472711761aa216601e1708eec59328c945350fca\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1303\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J2l/Fq1/O2DklU7Pk4X619rW/style_thumbnail_2.png?Expires=1651449600&Signature=CMiB0qr9HQf8ScSlcKMxZA3h~vDBEILnszduqrwUVimUO7PH~5U3gp8r7mo-Z10JroLjZv4WBqdy~bO75dNHOyXNsmKjQoaNj8I3AaphVJhtVjmH2BKep9oo8hB8NfmJ-muYkMN-DfGnJZXsrZIoOs~mP0xXoPxBwJXp8fV7DFVju2AP4MknQOXP7T6FEnFwQZzwNcEm5njh-5ZZZcplwZBGO5K~SECsQVN8WZ2cSHG8w8rmaVTZ-KsZUX~hXe0zwR1jvM2~-GMjEmCt5NO9Tx32G2F2yK8IKHYvrWJwVtVMKUq5m1oBx00UOtrdiRfGyn~gg0I-q8VJezuUmDiIyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.722Z\",\"updated_at\":\"2022-04-13T16:04:50.468Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"~eC\"},{\"key\":\"f7300ef0ffe874fe81c12b1e3a50d4f6a247b2b3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1314\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QPq/3hn/YXratGeGb3H6NJxm/style_thumbnail_32.png?Expires=1651449600&Signature=KNn-ViiazZTXdlsG2kSRgWV8t9S6O6I6n3CNwetoP4AxvYjqm0dX109UwOdaIcYwSVx9iEX2WBr65WwrZUeVxTedb95aFo8gn5OSPENuL5MC8TX-RzWTZwIRppX6teHWVW351kRlbQ8uKsuZQh7h7y9Z04CofPjdzp3mBlmlhXOQuChDhRneaVJdrpOKuzFBV9ReThOMQA6nP6z5V-zN2y5zRTjfyOy9oIHDUb67Uuga7ihK-fjhlm7Z-uQ7Z8mPNLqt9Y71oUpYGzAWLaktLn3Opc~ninIxdJ-ur6XekpTtdY3n1UkWagONcam0cJs4zA2Jy8BcVAnsq4X5GbT0Aw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.639Z\",\"updated_at\":\"2022-04-07T16:01:47.374Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}\"},{\"key\":\"f498b75092721682b9f98527f234fa8a5bc0ce22\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1422\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2P2/Uqw/pIVO1gwtRGPlPdvJ/style_thumbnail_16.png?Expires=1651449600&Signature=hFHMlyiXfn8mvZ6dxnJcbzXtGu1tu5qy9iNcDRbgDhl8bEj9wb5gp7yRSm5xeImRrgIiOQXp~YnxkutRF8F6pxzxiJHb-cPR6gUPiwq3AiQiyF23WfsNaIfEt9XgfcQFTiEq2NOfsTSYDQXwy64hvgfLVEgDeLPJbvRUqh5D7p6QU3b2kb0ZDYpSKKxRR3ES~siMU5aFuGffYVVb5oWxpSPoJpj2wDyI5Oi9rPHB67zrPHgI11CYNCTjPbA7hOeGV3a~qbgilLW5eHGchQP3ufXzkl3dpzoZ8I0TqSD6p0PdpyQ-xA0kIC0~GTmdAt15UKzAa6eimi3AJIj-16l46g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.600Z\",\"updated_at\":\"2022-04-07T16:01:47.365Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}r\"},{\"key\":\"ec1a34259a53ade310a8c6962911d0f3a10ef792\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/gz1/IiG/DFlUgCyqilU0oEDQ/style_thumbnail_15.png?Expires=1651449600&Signature=CeR5F-LXwo6pAfyyS2q3qBCh2jffjW3np~IN1115CJrM-TTKLH7a5IYH7jkpU2EMYOY0QdgEKJqA54NEZdh--zt2KOgWtaSu5OqbqH4n~SiI2IudbJ3d6S5xbpj1KUTkX-5CZaY8CwESGzkxrVNnUSM1vN~vTax65SzuyELDpgsOWD36m2X-AqL-Ty9q0EkE6UHB1DaTRrBG8PUWenHtnyLfkTPYwHj-UfKJO5oE8-OVc9LPIOz3YEzBnFdemjRX07wcDf~IZEchwgoditUgdLH7VF-fLHW4ALwgScgFTuOL-MOwLB-gJqZUpuVhjhBzR17IVMXyjfcOWgKEoED3LA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Text On Destructive\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.732Z\",\"updated_at\":\"2022-04-07T16:01:47.357Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}O\"},{\"key\":\"e80e26efbd2ea6c4d4311398f73923881d71d9f9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1418\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CoC/JC4/bdI6UI0dniPuJfTq/style_thumbnail_18.png?Expires=1651449600&Signature=e5afCSKQTuIOQfzVUbeBkpK0EApEF-FLB6We84kUqZMP7I-6Kmly0bbQBKkfRcFu3Da6e9ZQu-k1x~Q1tvfZy9lSNr00q9APz1PBdXaNq5ZKGzF~dto~q8jyh7HzNCXzagUSNRpViVaBHRl1y1NjIIbOh75nEcMHCalMZieJHD2E~bM-nm469TM8q9aKWhMYikPOg3zmt-odUg0YozrKF6V2ngX-41-wRvL4PW6IVPDJPZh~i5VmjAqXq-RsSAiWHH3NERHO7NnT8gy4fySKUAhYwUqdvMzSA9o2YoYQ4JIyuqS-y-VMgve8t4SggliewdjW~UlxHoRwNZ8V7R2UhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.569Z\",\"updated_at\":\"2022-04-07T16:01:47.349Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}|\"},{\"key\":\"e6fc8e5dc3df8c899a20780b6204efc818a14d7f\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"234:1555\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4LO/oVc/732OljlnBcNppPRi/style_thumbnail_48.png?Expires=1651449600&Signature=FjEPwNbxosRNOU6jJt5C-Fa9eci3Uvmuyj9xbN~FHgEai~Kc4R0ffc2W7uE9o6nAlX-gXopalLvA-wAAbig21tpmAk5eerra3TkURrg6hSDmqCeEmgwFk8~S0xITo34v4hOdH5hRsnHsLau6pD8qdwXrKrNnc56UBcR-yDm6oolPFsIFqTUKly78z0Z~1gSyiRrutBc4kJGYAhnO9TeerFe6h1l~5CFJdH~ijlvDIYipBxnVtG8VZZEp5R5VaPhJSVaLWttTMAGxJCn~60Q6QwnLg9EqEMPp81Dc~kMQ5gMakA4BlajtNjYFFXBrQ37tSjUZ2TAQbasfTF4h6R0bHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Selected\",\"description\":\"\",\"created_at\":\"2022-03-14T14:38:06.263Z\",\"updated_at\":\"2022-04-07T16:01:47.341Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e5\"},{\"key\":\"e4244f3710fb948e121c39234b1e6e2b4c166ce0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/h0J/xwr/gwtN0NYd02nzJ1tl/style_thumbnail_42.png?Expires=1651449600&Signature=e9pzOhLSAXmXUTUK2XpH4OZ4IQ86e4QXQSMa3kwo5oS3vcwJK9KAhNGliKpIuC-vzXoK9wQ3zhWPGlI3sc1a03UJ2ZJl-5mVjzJX~x3hSxHcP8JW4UpKKP-LWeMCHg1xhSYb4gWJGUpXw~THoZRxt~xGMnDyhlKT1~oYoTKi53~FHOWoRGUQYPAv8jbnTnluiZW0uI6FTk8x3ocXiKFflNtU1QmGR34tZgVEgoc2q90qknzU--FyCIyE80zVifBdIShrr30DKPuQipDGDetSLfJtrCHhciDFRLC~f-rxP2qBnWiOhw3fK3C47KCfZZnYQFhL6izN0nI2hNscfs1i6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.627Z\",\"updated_at\":\"2022-04-07T16:01:47.333Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}|\"},{\"key\":\"e20cdbf16a69775c38fc7436118ad08f05ae9ac1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1426\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3fS/YTd/eoJkSWIPBQSe5cQK/style_thumbnail_0.png?Expires=1651449600&Signature=XxPdVIxtQVfoI-TM-hNTeGW3xwcmA~zhOcFp4VK8PmJbRUQ~Lee7Tvtzky4uG7fC42R63x-OXBg7hRX6vFXVkIp9iU9-OGOevRDzGICCPZGdamJZgn7pf7bhKVRrvqTaMGywj6LByLHPOdTZho46NvpS~3lVXR1tND4HnP7Z5jWIAqObBZXA5mSNsv3tMYS8P~athiAOY3jHGaka07QWCIsodR~TZHeVQGB7kXivvW7xpLORV6EeTwo1KUoW6aMZrVV1qpUaJ5nkq~a61RJSUE6fIzlNmuhFkc3myCDwtczX47fbyQ5EhDdzXpxtMKZASJ~9hQqKFKybvYt6lnbGGQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.528Z\",\"updated_at\":\"2022-04-07T16:01:47.326Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}{\"},{\"key\":\"ddfa8623c96684cbee6ec0e1ce1435d9253744fa\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1409\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kxZ/2Yd/TD19w0dbukmaXyne/style_thumbnail_34.png?Expires=1651449600&Signature=Xk6qGDAG0PclSNldq9wflt6pa4BVFcFuNvRcmVvolxDstxdpDb7yL7~RjjlhhwJDymQAVLiRgusDObTnyIXpnFya2VxU9moJasmvGKBGIk0~rp-BrxKWDtLlnY09uxE-MEeFzvHyof1yzgFsy7egb3B~NfjPDc89evy~Wtv1A6qqVul7NzB4O5kUG7Gj1Dfvesx7090rDJHXgiBC0-uGK5-lCFkYXm9IO~b2Y9Yu~P8TRu2dG1YGC1rbN9StzE7R-4N4b1pBRGbDHKBB~oRGWJhrwjXlf7HbKllKQnBlmwJVznd-Zjgb9VcVeXxxaU~vY69kXYjvIyYO13PTyOHTEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.752Z\",\"updated_at\":\"2022-04-07T16:01:47.317Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}f\"},{\"key\":\"da68c86178d531db12a16ac64163bdb3d1a8ae65\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rBK/my1/IxfltI4tuJTgvaZb/style_thumbnail_38.png?Expires=1651449600&Signature=Y6daaA0EiLDhugO-MzANIyqjJXqmfvQHtl~NEMbC3RZjgHCVKzXAJ2tqqXYnT80HnnRdeVK~5bCNutbll2zUAhDWoU-RNtOs5HQRbm8I16WsCsEXF4aboQfRHt8ZvZfx91YLuq6IVIWxmTXkpxW7DfsJyl5O4RDyRQlVGGLa7rXNSwlnWMJsNR2MY8iXGIGf-nHXyM6QM8q5CUj6c3gZQ7GNZn7pc1d1~lAyTwWTQgiau~3Bt7PhmQB0eiFJCDeU~uYRnE2IpeVpZx1X0QZhvJfKtlp5pr96Njo5vbFsvT3l58VcVZAQygfJ3rCCNgBl7rT06MtIPF9K7AU67LyfDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.762Z\",\"updated_at\":\"2022-04-07T16:01:47.309Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}x\"},{\"key\":\"d664cda1b0c838d129f3bcec3d90882d8fd30f18\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yHl/u4F/WKw13VmxTxVOlRFD/style_thumbnail_20.png?Expires=1651449600&Signature=Vlk8ZUaTVWEPt7aGsdgfSCEbTujaKOBdvSvOVIway7J41xVKM4K7-GtxGrcBCg-Vm2~cZJNH1zqxNH9FAlEy~OOjkID8PwqgGQvhZi5MjsQAULUYRt6MPsXBPJDH3JCIjlHnUHchmU8PXPFCaHWdMqqazpyobsA4JPJ2SOOfEstN-nZS0yrlREW-YIxAtbzylPJXgED4LOiPS3wAxkP3hIM6-zcSwacwxuVJ-lVTFS~c5s-z-XirDrLi~ZtvHpH23nvh7gzq~W-Hdxnff-pzPxZgCJd5~CcrNOXqVQV5pq1p5FCRPIG~lmzr8GZf-9peKDrEokPESP8Bpg5~2UjlqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.701Z\",\"updated_at\":\"2022-04-07T16:01:47.301Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}x\"},{\"key\":\"aec0b85cdc132faed547e2be013ab70ed55d397c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1322\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ttg/v1E/ypOIbVcG3P5egQav/style_thumbnail_57.png?Expires=1651449600&Signature=FVxBsJpfHWyf3ZefxYK1KvZGMvIy383Irf2EnYAW3ZjhVuMers7-YR7nxMvMdzjzG-4DIQ1p3fOUZhvIwF1katxcWjooonk4BamV6OU7DvYQuqSWkCNF2HhbEep31G0bcegdk27A4ijMdXdAzrf9FnPvBmgQOr6J8gSWZDETCQC~4bQGBXNksQt0fItmCIalElJTGckDuP39Giaf2snUXkOEnFa~vXFAT6n1ixjMrS3WLJJvaJp~ax62tusHGdyUdsCBUgFPZ~UppYj661V1BlEjeE5C5YPNh3Gczd0Jqc~FO170ZgNrgdjdi0K7hBqykWgWRYwXxqD3K8zHxPIJ0w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.097Z\",\"updated_at\":\"2022-04-07T16:01:47.243Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}|\"},{\"key\":\"ac28d9ac5bc16703ac4fd16e7da5bf7608dbd522\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1417\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hFf/7YX/XixJgYIyUxMbNJwP/style_thumbnail_19.png?Expires=1651449600&Signature=e~YLIdQDbbLNqnmCb7~e9sHI6Vi8RCWF4K4rvndZRv5YtVu7WHQLERXMTGtkI66bE4vpknsRTOftMRUVM-j2T-aqL3f5IVEfE2FtC6YNGs3dtMuE-Y8iExeP2HxYGlTyzfUidhSPuG2F-RpnxWzoUSeXkBLlvs~Pxcq5az93aPBhGL77gSCnjcULmptTpHb55eK~WtaVk0FWuCjccuUaD08ewjnt7~6ZlldWGcWj34XNlLP2wcmg6aTkFsxtY~giOSde74kW~X0~G1ZarAeVQidBicynJHOExXAgSl33~FAeRJdxDQICvz6YZl-OpNm3Chx~7j7vervDrw8a8C0jTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.579Z\",\"updated_at\":\"2022-04-07T16:01:47.235Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}{\"},{\"key\":\"aaffe5ed4e0b2083311df366699cc63cdea69974\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1313\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QMi/7So/7GaRykvXwdpGm5YZ/style_thumbnail_33.png?Expires=1651449600&Signature=VYmLJjwPOceECgHuVALv7hf1t~eKJ-QF4Y2ut4Hoqgk96CD-etMW6Ih23b4Tbxe6Ngq8KopPMcpTsX0YTw-hRByuVS3PhCb3i56PTDj91g22D96dgxHiIkYPFD3tK9crM-a5C524~tFnRFhXex~qD6Ro~htugocorD0agjYHXw2YL2FE4zyEuxc9MRRF2YcxQF55aRcos5m~DcUKK7MaNb1e0oIBqEqJ8SiHq8v53BwinoNKlJVtbMbWw05rrSwdmJ7FcC4U~eL-r6dXj~gFskYRamIzU9g9biLtGuVZyYclZ2IBMc5UlN0EJKrsg8pSiCd3nAN3EX07fPsLdaxklg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.548Z\",\"updated_at\":\"2022-04-07T16:01:47.229Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN|\"},{\"key\":\"aa41ac55a17c23e2237ea2fab28ce0741ccc7ab7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1559\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2lh/qhr/VxEF6BGMDxeus0Jx/style_thumbnail_7.png?Expires=1651449600&Signature=R~P4r-P6ysmyPrnnwFJbopR4bs5lpONK99d2Ow-KyfelN8hrg26--QONvSp2fD3S5RaTUZ9Ts3KwRMpoqaGm~kv-yqdUPms-eXfxd85qJMcxzpUR15qppSQaJhlanOq5KU4lHDN2qs7ybfAwVgP74QRSxvGX25o5lA3SdeOX~D6HQaRSCEYONluApSo8TI4bq6hFdkmjy7yZURTpqXlQAIDUSOHFlftYJBXz0oqgLB9ZuaGy-Ow56XHMLXiSUwR9hyqWH0kTYH-icd5kOrepcoDSgMRRk5O6AE4u5iRb70tQHOXoIYx6DtO8qPz-Kb8TrZE-RJtQE2fq8FWhzAd0sw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Text Fill\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.312Z\",\"updated_at\":\"2022-04-07T16:01:47.223Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eO\"},{\"key\":\"a2ada56137d9cc4b529a0cf3f3386cf0ed8ecb94\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1311\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bVB/m2H/8nr8IhTuUzLNe5Rz/style_thumbnail_39.png?Expires=1651449600&Signature=NWKrvN7IM8GTSobuI45P~enacrIApArOXDmGefWgWKBPXEi8myvSknYH7HtjSW6fihL75KOjj8G0YyOKLmNRbiJZmLg1exsE5ng6R4RxaWSwNejo0DlGMBpyO-eHBIiODSszCoz8WGEaOIjElFZiIOBjMzCNHAoEE~t002sScZDX6hi7iV5i5DSx7Uz4vwD~gMA6ommJp-ym~~SJESztNm7E1qGdsGUJ33gOUZs3Anpp661Vmb0zkCCw5Vg0is0XIQyzZBvJT-JFY8y35ujNtMxq6PsQroJTOQ84lTqy-74-lqKaIzl9315IUmBfvrqXqGrccU2G3qd4rJlMbqBA2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.787Z\",\"updated_at\":\"2022-04-07T16:01:47.217Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNx\"},{\"key\":\"99df447c6e9a955d690ec601c438370f12fc7dc5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1321\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TXr/3Tq/OQ6KxqmePqB7MUgs/style_thumbnail_44.png?Expires=1651449600&Signature=PjzgwYbXHWOnitSaTfqQ9GTSa6703XrYic1iasxvNmKUGkFPHOxrUTIjSWDWZJkakq4vNni-1gZGMLHZ1UFBmdEBby8mrgTOfJAK4MEIUz6m1QykNpbCGEgXRm3EORnd4NSEplB-XdcZxQurrx0mPMKHjSQxJ-Y5LpInUUI0-L-TxtcQwTF4IhTv-0~4A5TxlGe6PMFFfldcYeIPnHT3mb5~yXGBIel7OK1e14eTLrBRURUi15t4CWgOtH9CUOUsOtX2gwMe-rJtsrbcFAH4JHZVxj79FUBovhJcrQUFFBXI2oaXKuM-tjjiGcIZjLCHEhACoD5f37gsSvEaKIwU4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.812Z\",\"updated_at\":\"2022-04-07T16:01:47.205Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}{\"},{\"key\":\"91724b824f1a9b8848e94ea4b6f246b1550728ac\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1644\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oEy/FGw/juQLcEJSprkyFaEa/style_thumbnail_1.png?Expires=1651449600&Signature=Uq7C2qEtyO2ZBRoyguwIxJjrKNbKIK30Ma8BQYBWXvKlS4lsB2mSvwF4inc~St7S5Ubv0TDFxGBkpuOp71jXshsXgtznoG4w0y8xfqX3ogRbNjxxz65Oz5x~sm5QHmEXQD4W26~Ol-fKRzBFjmrmgEh3N~sEjbdTuSWskHLmbeNr0l48LM1ayWLH699ML878ptImLlplj~2bvqMlJsZfWOsyrR48jJqNDmdVcI8OvmFs4qjlYXxQk-eqqm8iIVJ6~7SxY8uCSE1Gc9iSZQ~8~MxSi5lCXTR5fm6GfBpJpXTcj1GUuP-vVc0XffQ7nv5pEAHydDbo82Lbt1rEmBwzkA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.703Z\",\"updated_at\":\"2022-04-07T16:01:47.198Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}f\"},{\"key\":\"8ea704444e906ba1437a91bd36dbd2ed55324c8a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/XzT/RhB/BGVL3dL1Rq1HRasc/style_thumbnail_23.png?Expires=1651449600&Signature=TAQggEbckMtmRusju65PccTMNDp5mmBRpprrUQa3siCbRkqmhTN-oeH3MiW66xguoSWvbZQ5rDlFVMGkOF0Z-Rv4sXWm~aPVdDqmdDXqOhcZ6aKj7QCqmfWfgta92wr94OOr10Dd0-zbZooFyRanbhNR0K4iZJZUusOYQRsIhNcilrj3ej0O-uWJZUFZWyqx5Sm9FsTET9y673vFT-sMKdKfv1bb9QQydWSFBWE3qgAdC4elDNnFTTp2VykRpCRPUXDKnu7YdN0f7YEKImeWknOuE4S3Cw3hmUfkN4NVwL-zzrrw8RmlakWv6OxRm~pjaAPzHMiBXkfKyyuazvzEOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.654Z\",\"updated_at\":\"2022-04-07T16:01:47.192Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}\"},{\"key\":\"85f88070f65fb4c1d19e0522427b41bcc26ed15e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1324\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zoP/kuQ/22XmaHbSpeerdn8Y/style_thumbnail_56.png?Expires=1651449600&Signature=crjpHRn55qzTrkj0PFKmND-cBtSUTk~GmvuzmtFfTN2I4GFeGyjoiHFj6s09e4JsOiTXhofc0lqvwxvyVhH2-EyrnPVP-pmaD-oxibojus6~JxGOmfUbIuFSxY57tuXW8XsqACz7umm9QvZCAGkhT4D9hAcQXOwwFQy~wUFyOTmUu7EEZNxSlqkBtAiUl6hL4WIEFGFwD3qqHfROruhAxMXokjhSXC3Tx2845AhrDOyTp9Llno4y0GBxZHo42AID67ZQiOYvVFkl7VvcC30BKIW81qQrojHskFlQsBb7aAKauvdPw2Av5~OulsZLzJdAFvk~Mpi64s7dLh39Ay19XA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Text On Secondary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.092Z\",\"updated_at\":\"2022-04-07T16:01:47.186Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}O\"},{\"key\":\"84258cd72dab13611314cc3f63a8082ea687211d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"45:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/OoY/2Kl/wspkbKrAtVEDgErU/style_thumbnail_2.png?Expires=1651449600&Signature=RbxSbOVoIALihPT2jntQcGanTz5r71x~ZJJbsDtA~m87e3QtU68M6Y5Prb1US2Z3oab7CtijPbjsgmRPhfrTHOWbKqDSmnvMkUg6aHsKCIo8ylsSncKbsb4B4v2l0Ocb5qT9N2LUKqnaNeggwwsrgkXxm~3jD~pHme9Wm2lO~z~j3Aunm50W~bZGpxLFnigW8Nfe18~jfDR07b0iQEN0hQPk9hoQpzogRd1HTiFi9Q4alRYeh9v6mrc1Q75Yj1lrNuwgyvOq~mEAm9-4CYadJ1CTJUdXiznQzDbX9wet-M1SBt6kla1N~mYNePn2ef058L~NWLkuc4g8ujqSsEfsjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Floating\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.613Z\",\"updated_at\":\"2022-04-07T16:01:47.180Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e4\"},{\"key\":\"74c183c86fa424dc940799b3cdacc6824931caa0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1318\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/FAk/Ojp/cy7gMAytyKy3sDgJ/style_thumbnail_26.png?Expires=1651449600&Signature=MV~U9PB7gE~dCFTMIm3JRMISzie0HTt9ebDi2XkjkWqSSqOG9~jAftkevVM7lkELnZTpz0RLcMdiZ9YgYbTPKidAFWCCdzLonERaEY7Sh0f33VOGMzRIlxJ-407UpeTZzyORlW1j2lK04dMDJ208AA1qlrVQf0LIFST-nMZM~hhLtB8ktZmeoRsverclLZIpHW3gBR4-zRDHr879-IpJsdzdkKJeUmyJtoTyc40iYyiR2qXem0P~wuO9fA7xCTT9Oss1voYLu5FfAdYvyUIe2hgwwJBygP-6AptxqeB8HdsjAYEa2Oo10bWAsd26ddmLWCUMroqpHw8fqdNH8rnJ3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.691Z\",\"updated_at\":\"2022-04-07T16:01:47.173Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}x\"},{\"key\":\"7490d3069bce67d2ade872cc4f73da11247c8042\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"30:1310\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/GXc/puO/EyKBC692UWFA8tyE/style_thumbnail_47.png?Expires=1651449600&Signature=QKCAPbeyybcbw6wHvYainWKqxG1Ty4F1apDqM5U30kYbujvVwful9cL4JC5kMbkUOGaNynkQa0FeurKnLNqg~v~ZmNCwNBbci65At8njnXDLbdNuc3e12hx5a8lTN0PafZ5CH7Ttt7rqm4qnJc~-jZ1hu3SP8qHZJIquggbBN9kEkalXhSWIBW~t0JdHJjMOX~v3TjtP~dBp7BMeTU5AZJV3aoid-1Ls0DIBWPpILvbqOv4xSxxNRAfhFuKGo9rY2gznn1VE4vNHYelB3bRt-QlXUpi4HT7Ew51RITwYd1lZE7gEsf~OITeDfB9fbN-R9csApdDI6CXqCN~yPYZRTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.953Z\",\"updated_at\":\"2022-04-07T16:01:47.167Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNr\"},{\"key\":\"730f76dc189f00e5c902e0e464c31726c8255811\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2377\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fTQ/Wnn/51aKviyzsG6t0q9J/style_thumbnail_54.png?Expires=1651449600&Signature=GtJsp6OHnBlgmJToU2c4t7iUYac-YWTdYJKm0MPIxmPLQFHcOOSoJZeS053NDvPKhUQNXhKoMrkUIUoQvua2gq1xtZnIScjwXBkoDjQMW568hsdGf4Psq3OTD600G2C9-MbysyoiA22JNyv0NIcFZxWRJ36pRH6Z6DqkFiQNXaoehadU0YZv3NYnBTjto5FdAbSwObzpp3f30at079Y1UA-DADgP~8C02ixmoSMJxWOGZp5J-D~RIJLHxRXTh2sfd0E5Z2rNXxxe3ePRM94IXBZo7RZK-IMaEwF0PfSlJ2Uq8p8~BpbKu1azWJWDWA9wlTaYajqTtPmtBxVVnj1-OA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Main\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.067Z\",\"updated_at\":\"2022-04-07T16:01:47.161Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e+\"},{\"key\":\"6f9fbbc37db9880ca87d31a742665e62f2bf183f\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BQ5/jTF/oOyok7QsqBFdvqZx/style_thumbnail_12.png?Expires=1651449600&Signature=GeYSBLEPsw99e2hhBikvefr9gIbzFIxcAb3qOgKR5JoQjsMhNTX38mK7jV~5otEUYyIax6MbZAO21rivkag586gOzxtOOnHlQGnjlSulA-52xYPQi4ZRJLVJhwNmBx7HiEvdNU0pZemjm5WYpWgKmS5HbNesKmMU4WbGnxM5TtXe1WAdPeaHK9JU0AheR3FdEKxsy6axc0f1ohZakq6UfwIljfJJA2cv5kk1kzHfxTSWf~qpv1Bv84390-l3l1LP8I26azn0ohnFA1EMKhUM-01ney3fNMKRKgxgbJutogCc~I9jqP5qfVYpbWXibDV0F4Fj~Qaz0OVwqf9dFy4UHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.564Z\",\"updated_at\":\"2022-04-07T16:01:47.154Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}\"},{\"key\":\"67db579a7edd8e7af291191d07a5d9cafc538167\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1304\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Eqp/5YV/W88zrCGyNrvg8hgJ/style_thumbnail_51.png?Expires=1651449600&Signature=eibQIl8sXT2F8RrimbVYNm4yt9R3q7l8E5wD12q9y0DgDKgiQp~lLpYlUvLcjWA7139zaYENdu6SGdY5jxRvxlBJ-9jo0I4Q7xbuYYIlPBMXjHFLtw~mirsqGSZBwCDzry9TczJ-Bhao92zBmYypISk~ujZA8Ctn74qmA63QynaktWVUraBBjr5lYsNEPAh0~GTuQwUUtnIxToWW2zwBndrWUw0FCbSVuyXrnnSpBCC3XGQD~D0dncEi~pb8VSh8tKc4wFjU9z0Ez19ID7Jv0F7Pq-jrXJ6luWqDXXWoj2ROvDbtaJ8JfbGSDCbS7SGUkFZfcoFEBxERMaVvIPn5oQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.029Z\",\"updated_at\":\"2022-04-07T16:01:47.148Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eI\"},{\"key\":\"63d4adfde6619ffd2b15097e28599ba8b1bd9be8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jlb/DnP/SqId8RKQwbsHkPST/style_thumbnail_22.png?Expires=1651449600&Signature=dlfS05c-zk~bOj-awmNKwRxzujo26Hj832JrNi5bjkEAuyy83T9ZqmOLJas2Gf2BhsTBHMvzIUH~Fm8-WWUy1fOdDr4YZe4YL5PFXGW6ktI4hZmCl0VphVfmu-5hvIQBQFHc2WkX-OXRqM7Vn7FZTr6L3tbYKVvGa-cSuq3bULD7YriZDft94Z8Obkv2SrDODsACx8gM3ohcgsBvRJcwAbIep7sizFx87VS-PaFRNzMTmjLtn7VdTE-qT236WRWOTvRA16HR9wWfueyPz-EOoB~OgUZjyDl8DFBbAAaUmf7VnFI37SYKE7dy1qBLdOI~epkUwsOHNQd2iEN0ASqdjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.661Z\",\"updated_at\":\"2022-04-07T16:01:47.142Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}|\"},{\"key\":\"63305ca5cb6c2e5607796133fd649e07e0a68d46\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1411\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J8l/xaD/PS2VUZdctvcXB3fW/style_thumbnail_21.png?Expires=1651449600&Signature=IBAGSycWqQN3LDy03xDd9a7ZlTBGBWWKUlTKSFbJcDXLuvl89MyOh7RlnE021U5TnMo7yAfh6uO4rzvp1z3LqqM5uxDuD1YDBMhaV5joflITVA5vtGJMsyEtzEA0uVl163L8mflPwK1wSLej3Naezom1S3cmaNMl8E5YehRJe9B4gRjsgCEurD6f4kg9coupd18NE8U1wS9MVO4rOYPrNtgkdBr0OBfJug0vYWZkWuJkdLyICmwTt-f6kmzArsVBcfEzLpy2xPz~31ReS2jkOGmyW4zrE708tkjNmeKUdVkwc3Hm~n-DvkTgEJT3reYj~SdTcGynBU5tb0i49qCtTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.646Z\",\"updated_at\":\"2022-04-07T16:01:47.136Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}x\"},{\"key\":\"5ab92f7156e1969f3369d038debd5455193cccb5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1645\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0QX/soA/1LOvyPETIa2MBeQx/style_thumbnail_13.png?Expires=1651449600&Signature=CsatNuGZ7NgiSwaCzmCm9H48kmNr-aeZ4cCBCsoR4Ov9uq7aqw0uCMyWu98dpQkCLZlvnr05w1PuXaLZEonPl4WQtVj1byF3WbENHdDLOKd3SBVo33Te1jCAiSKdB5U1lnNAeriyzw3u1MIRm2xJ1vOxC1W-MInzodzKVZ5AXG41FiNaGNpuGMwsJhqukFQFFq5Bxl9wDLkFupyXtedaH-57yRXQOXFs4BIBkB9Qwc8MMfW6wYdCPtJ6QVL0Ub3X7IbX5C3vdSBLgIr-dsI22S7PbTPPCwXDt~5Pivhw9Nqa35Sns9BtyVH~HdbwtA3LhglOoPKSP6oz~bMD5llGMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.728Z\",\"updated_at\":\"2022-04-07T16:01:47.130Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}r\"},{\"key\":\"56c418abffcdc98abb3ef987a6b03fc18a60633a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"234:1561\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tBK/Xg2/jDUNCDiR2Y6jWpOq/style_thumbnail_5.png?Expires=1651449600&Signature=LBOl5h59EQ42JoTXiuUGMiKqzYdMcYKeYzPaN3Ve9xTT5ZIVRaE8Xan-PfSYViAEG3AjievwGmQeJANnqV8AtCQhQVhuA0eiVMzVhQh8cEkKu1sKA7JyXba4SIMk006sXmB1VR0tEo5EThh3S5Gi8fuC3RVVU6gSBnv1el5to-3IzUINKehVpJWKOyKqh3LM1hTn07y3FqMY6-1CZW1ruLaIOZYryxqmxGdMcijjiQwsb1-2I-jee6iKED1REtNLFTtVlKg8jzOV~MkfvxsUzWDChvv7Os9iY~XxuEWwaDH5SWnFaJThVPnOqZBEPfvLGqn11AcziG9SKrH5Ca1ozw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Text Nav\",\"description\":\"\",\"created_at\":\"2022-03-14T14:41:39.337Z\",\"updated_at\":\"2022-04-07T16:01:47.123Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e6\"},{\"key\":\"53a4716741658575994c6cf6fd1fc554d45ff784\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1306\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tUQ/oLj/hVvq0HxGtxcn7Ag1/style_thumbnail_37.png?Expires=1651449600&Signature=Yspc7p1joL3suiFuHHndmjR37V8GLHX~ZAbd6PBypfmHmhOXcmkBFKv~TNdQMmU5nLsp69bWAwFwE5MRaTK2SNNRuQFbeTBwvV~5sbu-DhDxr1RP5ABs689j8Qk9CwxszSHVhhocGQi9JK2kZWMZl~Zw56pSzgdoAsRK81-XSav6lTFX6a22W2klBrTKbrCZTf0iR2GS9NLKr5oyKPnBdpxGhe4cMjy1UXXy42VPzX8UC332fUbOsR2DzUS8M06nc8NKFtneeP-4E0IDScbuWeWFaz3ArcsfQdKo0Yj8kw0p4iOP3~mnx4oTs3gfyWMz-qvtHRtKrVf4yOaxmkxgXA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.757Z\",\"updated_at\":\"2022-04-07T16:01:47.117Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eM\"},{\"key\":\"52c101369cef572c6908975f95e417a493bf258e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zql/jnA/nYT3rxjFPj5VezUC/style_thumbnail_52.png?Expires=1651449600&Signature=fUZutRPMdNWYJ91uDxnVtLwijO5de14pZxcNpycVBolnpl~X2jpWZGb~8rOb2z3GE3wqQVKhCsAnNiysaayvBZ1BmebpQxV6~qSjmYkHVc9sxKfHYKHcVhrx29mD7s4fvLBUl5gZqAgETcbAX1EB-iLHZpRy~KI9qo3pNt5rW~CegB0r6NPY5GWoh4xlBcajSinnHlP151DMtErbx3A5AC-VSHBZo1yf8MNSjdst53~2T158Qka1NEB7Q6hB6KpNY9rLli-49jGtTl8nL9AdP2p5X1ijVDhGCrEQ~hxboQjhVFMrOTx~GiDo9ilyM-l~MDiZg7fpdUXocBjh5rduNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Text On Plain\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.041Z\",\"updated_at\":\"2022-04-07T16:01:47.111Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}O\"},{\"key\":\"52b68da39f0ffc8e2718c89e7bb0637ea29ce3b9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1316\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vGU/caK/brZ2Rljv29Ks4sDw/style_thumbnail_30.png?Expires=1651449600&Signature=MOe4hLLDdxHnfDAOcPQYMLQ8SixEYf6EhKkdxIIa9LXGg9iLPtD7jXY9FzqjAIvP1-iRfoL5n4owx3OB7aMDUrBo4evIfje8F~QXW23DO3oOlbRU4prX3IibHb1Ezg01KSwR59u2hgttaBX14SViooDixy8OEjqcLM3x~ZtPrgYu6uvh8XuyAwaX44MPh7mKDblcDg6gFjI1c5u34O5TSQBeXH18XPf-cg9n19M8AtAc~wMbFb9KTJsXEiXZUSxE-A34m~2KE2NczfNg8cENM1omQ6SozcINaKm5HlC4K0Tw9A9sTJbxDtzQIMOwdxW316Vu-kz4yU9EJJDSDSMdUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.727Z\",\"updated_at\":\"2022-04-07T16:01:47.105Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}f\"},{\"key\":\"4bfe27d2620e3e5cdfc02b7cc8d0db8fe86dbcf3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fhu/Ro7/SUtXhXwBJ5tdKfeG/style_thumbnail_40.png?Expires=1651449600&Signature=WjdVdDvMPCl9Jmzq3ulj0jHutq9WiHrMA8dS-z0~B1uMOffpmnQ9kIRct4tsW5G8AtuXw~cl83tVWXtXXdjbLsKXgg~2wq4oBPHANjjcjZR-wyf2NhqQm35ECciBuw0QZYNRO5xcO5lTP~g6RW4WQArLMzHBq66-3uHGMxuIHWaAJ8plzvoNGg7J7l6Q7q5hyjhuDbmF0Yy9awuHobbXbJlh8m~0bWCF1MSz4ye2SFH~UF4zrmjca2AAgoZbNrW6LMNh2X4YGJW8b0mjkY23UZM1cKRcBUK4JzmWzsJL3PcVs1i9SK6GR8TJVOfkwXo41UYnlUovOuThOvIDGPiLFg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.792Z\",\"updated_at\":\"2022-04-07T16:01:47.099Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}r\"},{\"key\":\"404073bac29c7d33c3c7f1a16112db256be4c837\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1561\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EaX/QlW/GYHTdwKFSGxyNpqH/style_thumbnail_10.png?Expires=1651449600&Signature=SCScBr781cvcmcpuGNdyzpb7eelUfWmFywUTVyd5pUJAcjkSiXkkzSYmRdUUQnhUBG17IZHPwUjdju6z~ODKIkjRE5w-vwFUerGdBmPp08fgGxp6zEZKt7qVql6A7TzG7S~YHqHs5tsHoDtTd7ReE-1lnA8H~1cQnz4r7rxLA602JV-2lC1WpRaQg5TSlglYmV1W4ocCtsIc2IszYvhnkPTx9sXxgnxG3eHClgtQzb6bJufHj-6pNG2uCJUH7sl2jHUKYnx6ap7lTMiSK5nnVqozW3d3FoaftI1xpOO9bYahFNPU5gY4QOmcb7fIij3eioGJfUzCZqBhKOK33DbXEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Alternate Path\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.322Z\",\"updated_at\":\"2022-04-07T16:01:47.086Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~er\"},{\"key\":\"31ded0cbb11cdacf01e877fce472da9b8f2893c1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oE5/9o7/bwWL3Gaza5qnuyUQ/style_thumbnail_17.png?Expires=1651449600&Signature=Atmheao80v6HHiihk6gPL6uyTT2BA44vnJ2yIJ0tsj2swSU0Ns52P3ezWq7YJvM0jP0xG-Uhie~Q2Jf4DD7Ok1gN5FSfEd4~NgqDl96GZw5Ju~L~ZvLaM6xgOt16T~rbbOY75n0dRpxfHNbW2FVAjPJ4e7N2k6IxKCB9DTO2tvmDt40j7U5vCzTI~LgFNMV1A-OxT801pWzJk7~Re-KZ0vzUjxdtuyEK~tzUWZCv0FZ-p17nxsJEJ0zfWG2TUrBYZUxKZQQvE0qLpgK~sFND88SH0cWgQ5DkJxUzn9ITtl3dQeETOndzXyBB3o1rpIxY~lvLVbf7lCBMapuNxNExFg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.533Z\",\"updated_at\":\"2022-04-07T16:01:47.080Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}f\"},{\"key\":\"2baaca090ea40415c6245f7ca25cb18ce3d77bcf\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1308\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xy2/LoC/JayHr6KDNzaP5j4k/style_thumbnail_43.png?Expires=1651449600&Signature=NMo2x5E3Ivta99e3h5bF0jWqnSynnUKgZbMx9gVKgbfp1WFLWn5sUFKiGpftmGJW09awCFdGGpZAv-Ma86w0eXRREw3iAUGkK4ORiiRV8kYYY5b2siM3iJuSl26pqqAea~MWWaZKHXBIrPMnnVLX4soBU0o7YL~wcqYaiXJm4IOxrsxaHcL~in0Yv0DZCCORTQ1VWuL2h3NP08nlpwzbl~c6uLyw2gM1RDjGBzzqd978tlGqz0iYoIVaCWYHTqmRVykp6BSZfRFebcx1MPNRAwRghZ3XbPBn2kY1Z3jbRfxPiMVKGp4-0GSyi4CT6PjQHZQLk1dF87PTIcm9Jgb3Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Text On Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.620Z\",\"updated_at\":\"2022-04-07T16:01:47.074Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNO\"},{\"key\":\"28d01019de63efed67883b4153bb1ec181874c30\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"104:1392\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KkN/uDK/bDDLGO2tAJ5mdE57/style_thumbnail_41.png?Expires=1651449600&Signature=PULToWfjWwUSKEx4SAFbCWosLqdtZTgh3-Y6yunI2N7oa6aAJO8iTwYbmVnaeGHDU6hqLnPWQ9-JZMxNYPkj7f~y41OFKJpH94i5eJhTh7gDv3EErFQHuZIUyRLSqo7-rmdOXAB-n8Clmzt9zSiM8dqpmyqVAY6TkBn~4MkyGPm7f2RE4grHhvrTIw3dHVtrBt8TUfFxf8OA3qnNRn4QAWSpPgdK6yIGSffBqZkU3Cp1Tb69cn39kB4qPFHi-qEeTFAVOHQOSSsf8ceZTklPagjGMMELVc9hlxbUTvbZFdIj8H4sFapPog5isFo3HOmeH3RkwAYbM~eJ64BM66bF8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.782Z\",\"updated_at\":\"2022-04-07T16:01:47.066Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}\"},{\"key\":\"219d066514449bb129f0bc9990c624bbd01cf3c9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1Yh/IYK/fSXsPLEpTUbenH21/style_thumbnail_49.png?Expires=1651449600&Signature=OFK1Q6xJ7D2XUJksCLL3sonGO4N6~Wy~PUdNy1fOpOrJRGNJgH0y0QsgVsgm~0V0GQrMnA2o3lhbcSexvifZe6MsvLZc5RJMZxRkUzzYIt9N3mQDlJQd8gEIHJCmVNqChIpokSqpfErQxPlmIU~CPoHPfyg-NaV7kDgi1T0HWC4lNZ3yFa3ASuHVIeToPvbEYsVJmXcVLCEz4Q41591phj4FvSdbGHptx-unIH8~P5BTggkp0uftQQeNZ1ecM~BgjoJn8AqOx17uVcQ0u~im4dXU6VZXAw7SgNlKpVg09opxwiWQQf1X9D2vDVm6JkJM3NSViuI4uqYUseKL4lh~YA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Neutral\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.002Z\",\"updated_at\":\"2022-04-07T16:01:47.044Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}f\"},{\"key\":\"1a12af35e64b789afd08c4ab4c94ac089c631c57\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1506\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ra7/uUL/ud73166Ix35miY36/style_thumbnail_3.png?Expires=1651449600&Signature=hnj~u8OLtHkf7xL6mToaxyt1~1j-XmKL-Baf4s3-yvOoQq2gwJbP99N~0CPHHFZGT2Ho-CeNuUgaZjUCDbKthkZhBm3KIdRi0SgtYFM8TdSQMEqw~H0B8pYBKXNxIRV7-PwHqsoNvnXUQ-9VYBq7Fj1K0RmzNNvi1feIn627FCXKcnGWLVP9M7uplxaeJp1yq86kEWMvIogO6F24rpHMrDt4d1DA1GInAaWSD63AusNnKak3UHucib~H4W2nUWhzTEHs9R0hhkvt6qd-Y6roSMkWJVSjYWLhswCvnatCIHjwWKYnekOrzJcJnsqXgnTcBsQlnYZzvSBh-fu0y~nawA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Handler Multi Control\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.518Z\",\"updated_at\":\"2022-04-07T16:01:47.037Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e6f\"},{\"key\":\"0b5584dab7afb79694edee18e1a0f4528c1b30f9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1415\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KC4/ZDQ/15PQloFu0A7ZQw4c/style_thumbnail_46.png?Expires=1651449600&Signature=Po0Q1zGRwXDp-2L1gptAeoXlG-dd50xmbx3AfyVHYLhgKiU2apEE3j5g1lPJOPVLi7J-xwWGk22Lg-E9Nln-6OblDvhqqNbFeaoXCk~uwYYiiMgY2ovc5hZuj~wSbgGY4IoIX7avnQH8p27JcHaU6NvVneGpquGBs-2mQovLSDjX5hEDAd1eoUDTaL46H6g3M65-lzL5k736TsUN0LBGJpWFEJ1TYLaf8QcXRZsBAYkVHPiZ3ucPZidcZOLXbhyxPO8oXWU8gUjPE6c~OofgkqdByu~8jlIGKOgwEY0f3mPo~GJBc6OC3DaWLDHEGtAZnp0aoo642pwOcQ12xSbszg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.948Z\",\"updated_at\":\"2022-04-07T16:01:47.031Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}r\"},{\"key\":\"0a841ca5c0a69ca8f47486ce3a557f261185d93e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1317\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/gMh/2zZ/43exbL5pqX3HCXOd/style_thumbnail_28.png?Expires=1651449600&Signature=KgIU5sTK4CgFOCP~oZDeHEzKIgEnegnDyynnA4yQrM7ROcsWicN1xtQKS0rrjVDCKHw9G-0l8Z0bDi6v~Kga98wRuPe7hBVrGzuDytXXDPSOFy5y-hGzAj~S3gUPyxQwG4HZhf3MS7iVjhR8CU0uQVhAcyceIeLfWvC~fKFtpyoocWjVV6IycebyExjXcbsHiX~ZFEeEBsc-fUtWNTZMNhRIWyszjxYdrcnL6knZW~y4Ap8gV8PWCo5BHVKu5IdLyZ4-JAU99YyWgBQMSGec8FFgRKClJC24PARzdVgN~vZBCHuh0I1Nl4l5~tcOkUeZWdpnFyholPka6hh435C2kA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.712Z\",\"updated_at\":\"2022-04-07T16:01:47.025Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}r\"},{\"key\":\"062d81806ffb2bf35c18440471acfe837abd9fea\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2378\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aJU/fl1/72uvsZ2TGixXw4PC/style_thumbnail_53.png?Expires=1651449600&Signature=Ibl4gJH8cEd8eCzrTbOsH4tPPU6UldUd7qhAjDCWiX7xs~qmjQtUVlsXYsfTNDppVOJPV2jKc3pUOm2ULUYSEcT~3mybu73FsscAdS-UjNc5SEGZHgItWJcoDJocSqIgP0dv3TUIsITz8vQ-n4-gYtjxKx3BHOwhAVL~CbhnxnuNRNlm-IxeFx4CYVMPLvTcKIhkmPzFF74vigqobR~FeD-Ltzyuv1lkQPZDNlU7iExi16LZLS9-zCrBeAY0~k8Z~9vlGLMJ7mffxEufj9IlDcWLYH6GVxyAcKMqNHVSb4XGWUMhjtu1mxfxdCPXvg5kB0mAv03npnOhxOr3WMXEpg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Extended\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.060Z\",\"updated_at\":\"2022-04-07T16:01:47.019Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e1\"},{\"key\":\"053d7d93c02e4cd98c3bc3e532970c390aac7c95\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"105:1394\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4Bb/HqA/4LFBBRfSAomrffS0/style_thumbnail_14.png?Expires=1651449600&Signature=W25Ke2veUSLDsGCSPpYtQYgui8tGobxeOiicFGjhmzIsBIY8SYs8xwk9~145f6F0Umwr90jo9FViGs00HcTrUeQZW8Vlwjsy7dMXD25iBqlAPPvhxANLCQrnwZmVVnaLy0D1Bh7iZJXRhU55XNcvQTi-RuY5s9~psZNmSIbPUMk0q8SOO2~7sILk8ZSC19VEeMMo2w-bzSoL41oepa8mLYzcW0ynCYj-IzuItlZTz6UQhctsSPZfO52Us5IOMYUTYM22uxlTnbqzOvYQ0FXnsFDKtvmp6MPZFxkjX1geMec2l3NPKlGdEf5rtaJZGpZkIFZZzG3azT05DpKZmJiP3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Text On Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.558Z\",\"updated_at\":\"2022-04-07T16:01:47.013Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}O\"},{\"key\":\"0468a0dcdaca8460437b47fd3428588740826710\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1560\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/YBP/kKS/ijKsHst81lmJPfOF/style_thumbnail_45.png?Expires=1651449600&Signature=RujtFWi0qTYbI55QWVeHYVHR0hDlTYCnptlTbVP6HyOYvXiF~FxNe5FSr79hdUi~blUSzPJjHTvlA9~AMsmCkP8fdQT-~vUk0KVveR4CtFxxPqlgh3YHmdip64SxqPkkOc~sDoinhot5ZXSxhR3YHQSENBK-u7fnlG~MKudyJoyF9MZGdcc5fcGQS5vtRfLEcC2yP9tiEJ15xd20T9RbsXrRFarXLiGKIGNe1H9QiUVTfsaQKYfUVTnDDv9jRiGJYrHHCbddXb-KtZcYeq733Aw9cEzY1dzPmjmK29Yefe0UcP4ir3pUBSRxJiu6UDuKNJQHyx35A~YEgZIIJmElLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Main Path\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.328Z\",\"updated_at\":\"2022-04-07T16:01:47.006Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~ef\"},{\"key\":\"4ecfbd1aa04ffdf5e23f88f6d6e95ead44618f4d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1688\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EaJ/aoR/VioTSylzQ64QMgyE/style_thumbnail_55.png?Expires=1651449600&Signature=hR9RzOZlvyO8nIunKI5AZGaTsiCBDliq2RxPLMO5ZomUvdRTC0sBcTOrJwyNWUvMZzGy4i4lbmwR69OAMTS6s7GbHbSN0BGyKh7-sVgnRklK4quO2Ne28iXun1xHJIB~WH2FeuEsn8EvvPRugh~SATQc2tfCRxtgiuon1VjFHgOsyNGXOCC4lsAu54hGYaRc49e-YfeQe6Ixz9fHil-a32z9nYiJU-kIrkL83OvgedhZO1VrEJZluIWCgWx5tZ3uFcEQt0SgT0QqGJHEKQQvfmz3w7pEhA5HI~WzKpuY6O104w7IIXvfU53rCJQtVB6D~xjyuTg0TGqgwWWaaLlU0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.501Z\",\"updated_at\":\"2022-04-07T16:01:46.501Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}{O\"},{\"key\":\"6c2e41fbbfc42aa032e18087939c4e9175a3c485\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1687\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hWh/LPc/TWsI7YOXiBEdbRxK/style_thumbnail_9.png?Expires=1651449600&Signature=biAohBBxVSBGYwyHN2BmVR69CwR9Kny0vHrO5Le3ti8ZdniIA~0GIZGy8Vx9rF7r5JyHAf0JGpKLCp2SSh9m8Eb8m-OHSzbJcQUPUtB7DfzZL~TiP-eg-xdKDTUe6X6zYYcWib0dzW4Vp~KfNHUjrgfCfxOQgiXi47CIjb-bApLylmud~ILlUmX~r0AQShEqMb0q2RrI~dv~QZ3ekAauSfpK5kob7uindkJXjyQ5k8qwBr7zp5y92GapXcBd13ghV-nGt7UTFfg7jFUd4Y78VDOoVuAvpez6eAR7RetfOdKqGxb6fCYXWUslPK3exD22HWuP826xMS3uWU4f1HVAAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.495Z\",\"updated_at\":\"2022-04-07T16:01:46.495Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}y\"},{\"key\":\"727df7c22192c4844dda2cd64a89f1830fb50399\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1686\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ak9/dwk/dkw1flEDH4Dnrdji/style_thumbnail_8.png?Expires=1651449600&Signature=eZ0HKopPp-tG4jjm~JZWiJJiNfZxKZfTbeHwO0HC9U2tYyG1hS-Oe7~DDDPYePIFMPBZE8rzXs8tCVULaZbBbwg-t1G8AtY1TtR6L8oJpeNeG~VmM8PQCPLSUhzWfKmnULEPSpbderQNVlp~VNgRWEmwRFxpjeIPN6XDUGSPVvHrPZU4f0qqPEuA0nYbnKcZo9ZD7HBsUkpLWZEsgn~H9015OnT6yjDKXnsfFzNUVTWcmkI09fe4S5DMNCA9ShQVLsQNkUILuJyWlFXeGawwLTJi6rcGspegW01fdmhUfMwTh0Pc6WKC9GuXBvFWMJuMxaPqshvVffZIvbEwviozNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.489Z\",\"updated_at\":\"2022-04-07T16:01:46.489Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}u\"},{\"key\":\"e1bbe21fbe2e5fd2e368f4186145032ba488c8e8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1689\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/LDB/LZm/n2ihyaDQt1bdbHd1/style_thumbnail_6.png?Expires=1651449600&Signature=bkDlH52M3rBZpDUKz2FPNyuhkSaaHV8SXzdcSJRJmtUfyzZFVMTWXDZrY8Oj2HDLaTGxewW~gMWnwYlmBnHi2Mdbs08eeUETuH1LX8UZPXSmbjHTtCtdkq5nQzcm449liwgGYXM9OZSHlEVW~Zjl9k5P0n3XhjOBKF-uuKiai62pRfKUMlk2CB2NsN6kxCTT2MuYelr2CKOs3X5D-TFeoX2pppvKV0Ro9z1RENknGOG8sSxR4ykgnRXHVJsnvBxkQVnsrwhERAUbHmCXPZ3fmwv3nLo2bPdpqUSOQ9LCURTtJMRCTsKRTc-bwLgkmx8ioXbDSEuDRSSh98FQeXk7jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.482Z\",\"updated_at\":\"2022-04-07T16:01:46.482Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}|O\"},{\"key\":\"f07bfcda1fb6e36e37d46c8dcd2d9b5bfe824755\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1679\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TKt/S7P/iP7XzlfvdxDyq1lf/style_thumbnail_1.png?Expires=1651449600&Signature=GgQhoE7tpHiwJAa9MrDJDz8jWoD45q89TMU66SltAwklryOB67rVZpA5v2OtPEHqToxfY1tsYD22-5uAsQ9UrErXv94Ep4jFFXgy0y2Z5OLr6bVxKKU~8XZLZ~sMwIf0vuGqkNm8x8UsXy-ZRmg7WYZq3lgjO~R0uNwf0rV~YSO0Q65EAUaKwodB14f8KWX1VMoWXLQ70HCoYbaw1Jd5YUDIlU87k3RxYQbu6cAs0-4IpsEHa~YgY-Dru~uGgW8fvwWZ4itRSJ4dc6rUL13aYcxwWtCcW8CGIQgPzBJXQ4syZBMQMLS3qMxjuBNpavAD88zcGg4BgfuPvybcvj6c4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.776Z\",\"updated_at\":\"2022-04-04T14:03:47.506Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~1\"},{\"key\":\"c27dd6adde29e9e87f4140cf4c86f86af03bbb63\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1689\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xWB/ZgA/D4jPVLcpYkgW1Zez/style_thumbnail_0.png?Expires=1651449600&Signature=Fwb9i9MKMjq6XxTw3tRVMSJtffhGkR1soPPJwwOprIkzaRH81Q0G1gESFYHn0x5ZqKfydVd7S5sUOt3idy76VLbgtXK-TbQ6h6YQsa9ksvxL-yuI8UdaCIV5Zg0-PXP11~QPSGVh5wotmhAnjkO9pRb8h98qkpcqkk7XwnF-~KAKvXZWZVdTp6Ai7QRofLw0~bKILsKjXNzhrsNaRKKCnwnVgIBZVJ0xz2P~7K4RvKeAC~iGQ9HYBrI1TQT~5F50Xb7Bs3VzNaQzKAyW1uDrIVJuw0J9X-dHytvltJsxIh41yDe1Vjd5xGnad~uZL~ca5SklOcmhewEXLDtyNP~1aQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.737Z\",\"updated_at\":\"2022-04-04T14:03:47.499Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~b\"},{\"key\":\"b1f9a9d818a2495ff614d2f1f4eb81ad5da263a3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1848\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Sy9/ce4/8JHVcaY0d0kyXqHp/style_thumbnail_12.png?Expires=1651449600&Signature=dUaCPPksGHn1G1SjhUooP9HGPsmSaheQsz1r1Ve2rAP~0-uvhdMydfk71wEZyg1nkHdBJhrTts~qAQvAMrTHp4acw3pjHQAup7srI54O9hx1rbbuAewlh0nkFcc9cdH4Q7x-NDzMD8MQUZZOuCg1F8N76NWoAPge~S2zQ2maW6eo6LuxRefcW89IYnq~5pkYu6qZSb7VEZdlnjtfyyWdnopRnR~CKcpVccbj57QfomPX2FB2qeHS3yXx6cSXccVwesPEl4iaWpVZTsOdnSHN3hYk5RmRcPAIM2jt04Pdsw7DtZnnnrDWaFtXh0tN8RWE7QYJ1V4ApIQQr1ItRjxSrg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Numeric\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.553Z\",\"updated_at\":\"2022-04-04T13:08:11.859Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0{\"},{\"key\":\"6c5fea659d4dba983327456079ad0a259f9121f7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1847\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/788/dCv/mdzGDgKa6sPLPAAA/style_thumbnail_8.png?Expires=1651449600&Signature=gp4OJ~fxr0Ro-McYTsH9QFpaGArkAGrg9C1G0Ln~2Tu-sMazTawc9tkrSrSJHVcUsTkWE7p9cRXUg1cTdoCclvsXK-T3ltCIEAjhUu4KJy~LWrunr5Kn1i0xuXDFMzID9j76oG7alNVHFUJ4iHge3pWuT~LH1Qr1Whb~CAoqaDzcl4o4t6gkh6kd0uw2sFmH0KfKwNC4mQn1NXFR6aQ9awPFwohsGMKFYpLJlPF9rlSxyjUg6LJQiNu1crPV0lAHoGeTm92TG8~GZRDG3LGdK8pc3u6qKFp4KFFGZM-E7HGvYiA6Y8WaxsXGnhW7isNgJaMcjg-PoNDe7JucucYHAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Regex\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.589Z\",\"updated_at\":\"2022-04-04T13:08:11.854Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0x\"},{\"key\":\"557f2c7f63de59a7c378279e7c9654bfa43f3020\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1849\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yui/4nM/Zwm5ZHIqle2hF3cI/style_thumbnail_11.png?Expires=1651449600&Signature=fQSgSLBTaAKRYpgr7Sgroiuj35PvZiJrpLO8ZMzpLeU5Iu2o3cSSovRvauqZY~WQTQgQvAO2KKcb1QMw9S1kfijcTCgN0I0cMYk2~txoakaIAJyRy~6fUfCVCkewGkLlJFJDnzTYixUZuKdnGnWKf65oAeQN2LyYeAMgh3XbFmHlntP-acP6Xak04QzLfNGFd7up82OHqizz2FvihzuqLtOpSlswrIYW2uHk3-eJlB9ekSNhbzpJnQQq6fKrMq9-c9VLJOx0My6FLR1-cvdPiVeHmc49c8k8eFmVxJgRyKX~HCVvfu71gOUx7AKDISXJMv8h5Is3C0WD3ZLwDaAcag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Operator\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.502Z\",\"updated_at\":\"2022-04-04T13:08:11.849Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~/\"},{\"key\":\"4edbb9f84d88ce62dfe77c1e6a84164b68cb78e0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1844\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/dvF/q8s/m21MIRzE3kYGDxu8/style_thumbnail_14.png?Expires=1651449600&Signature=Ny8PzafA~1vDWxEMEnDHPdQVqg03Fe6J1NGtajkmWZ9SL5XwL3sTFj2~qWlsSK2LBIF9p9zmDdmDIfW1BwsaQBnm5pKCoS-c10olwn6AcLm25YOn4qdmotj9~t80EqriXcNMBKD1bFaGsQTt~ME-h2y5NasLcSuB5nghRz899Zfcsk-h6e4jTt2GbKHATi3pVQF~AiK~a40LQrd3HmmtqtKMKb7DoghOgI4FZAZifTaDl6F0fjcPZz4gqwn5aNAUfc18c0E-XG2-RFTIp0ryMSI4md~bNXjwQnaHu-NQKzEZBg3PzopgmiTT85wnGFcJJKb8b7dyoVQ9TrSBIgyGxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Keyword\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.483Z\",\"updated_at\":\"2022-04-04T13:08:11.844Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0O\"},{\"key\":\"47ddb6fe30190a1679d0e88be69134f30e018b86\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1845\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hTr/PXT/yZ4V4Nf47FDvfSb6/style_thumbnail_13.png?Expires=1651449600&Signature=XnOoYSgHORv9JQckySpXLWnhkyeDwTaEOljH6enOhP1PVDRzo1tZTbK~ORmwAhfTvlYd3CwBAk4UsixwWTnvTUdGrh~lWlLzVGCy3JF0KRri9cesOrMMuNfm~pRRjzzw3PDZcSoT6mm6xolNGuz1XilUsMnlGWwrdZ-No1UQaA0O4j-kj~2-BLQIktlAGrrNe735-iP3locjI2MAdn03XAGgwNZ7uOQX~hIE7~~gWAMvOoy8-SVDHlCz9xa-PxH-uhGhWxW9e3YtTXi~HQt1~xifuVkOh4TJfR0Lv94VWASfYWotwKDvn44e2OF~9r-K41HwWZ8MsXJj4Pl1zwiEBQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Function\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.517Z\",\"updated_at\":\"2022-04-04T13:08:11.840Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0f\"},{\"key\":\"2c10c1a9c077e351576598088edbc3dad82d03b0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1846\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Bbh/iUO/cfoyn3vSQwVpEeHl/style_thumbnail_7.png?Expires=1651449600&Signature=GMe8U5nNBXKof7uVvcGzve0S5VkxrUY6zygMGwcH3oxFEFtDlW4rOGyc4j2l94Ma4rZpnEXjsd3mQsLYbvL~1XRJEaad809XocCnH~590VLCIU-cMofUZbRibgVpwARuYJm6m8HcHleZjGABOVmhvF4wLU3v-zqLblbtpd-AvCJGWdb7~xVhENAR0cem0XbBJHolcs1H6kvSQnVqf7tfSPH~4KipbH1~KXadPTro5Az2OKTF~49pTGUpIrotfHR15bH15Nu2WtN88x~kvLrh3dwlRkPwJW1JfrZg4lOlmGiTj3hA5Ly4-RoWUAYhfHdgmXhW695B4HU~jUHEjrHnuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/String\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.512Z\",\"updated_at\":\"2022-04-04T13:08:11.834Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0r\"},{\"key\":\"238a529f9dd309311f9ad8c1477cc38b3d5a33a6\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1839\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HVc/XUh/PlXOSVnqFr9GUpAe/style_thumbnail_9.png?Expires=1651449600&Signature=Vf2DMG01EObqQxax37iYfDdM2ZXRdXPLWoU7R1jgWeuZgRpXIuQUlQaPYUuR7tLuwihJZTvbiIGM84IBVkJVQnXAD1PszQIu2Cz00lpaupn2l6w0uA26OCad4Mfe~BcOZQnXnncsAJBh-gc6awwu0PX85YEvgfDhX5XEy6mEDjF9CTuIBt6VPqVLCw2FUXI6AhkO6vPVHKHh12cPn3TrWiEU~UD5xlo72Uh0PDgKcl45GA7TYNLCa46S1gwr-BxStyYtidscBAXJKvDz2hWj7ssF6NW0rIobweSl01qppSuo9AVkF2cKxizoI1IUDelRCkqhS6sU-xg5eIZl2gcXhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Normal\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.497Z\",\"updated_at\":\"2022-04-04T13:08:11.829Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0\"},{\"key\":\"8638ae0f49622e9d8395064ea744cedcd3c078fd\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1680\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/G0j/V7O/I67cDxzAhmYbRn1M/style_thumbnail_20.png?Expires=1651449600&Signature=QkSOT7Yi5wkGvfMpYvXP2uQahQvx47a69YatrmjFPraIeVlUHtUOeoBwlCAMI5I5ZYmj5eecltgz16rOADcnQ-1fnm7Vmq6NogMySljUuTvOKce314WmgZ0KCIURqR3JSDEpgEE4luR2dCLnAJg6N6dtupDe-P6zM32s9PmwmjZNDiEEEjXNsE2J5hhdMaH1cUnYDGYFsJF~XR8UBQhq108P-9y~G0zzgbb2r36AfIQkNxQNaU6OxbqDNJB4JlnjxX3YeV6y8i9uH9~B9gqIW29YRPk-kxuItRLCiVRToPnlYmlZPVLQtUYuq0kI6GKaQjvMCc8fDy9E-84avVJRTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background High Contrast\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.801Z\",\"updated_at\":\"2022-04-04T13:08:11.801Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~3\"},{\"key\":\"51b91ad28644dabf5b31183664be52f8ee9f3220\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1682\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/er3/ByS/msNVJHhyUJ3WhCJ7/style_thumbnail_19.png?Expires=1651449600&Signature=Vcw0AubYMGlhw9b25laYV93CSFF-PnQoL8i~ZrD8bnsbHf8s3o7LCR9Qhl~C5-FvUVJzDT7XKz2qibT-6za8iZ6P1MyBP7GD14KKWVE9xqQ6CKEKJzXyG1F2WtggPlhaCY5LqXdodomXVZaY1EYQlZ83qk53ItdwS0e0vUW-m-pqUlLJcbueCz~YLXR4epJ6SiZ0OSKBhJhpH-0THmgNXYPAxzGOuEPFqx0BxtKVoquZiWncGqeWeK~yyYBZnuz6k2wqIiSAQROMNA4-kELFQ6bO4~ERwd5khi86WsZfMiIuGP-uUM0N9nHvKFif51pAZmZREOL2uud0uHqeyWmpfg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.797Z\",\"updated_at\":\"2022-04-04T13:08:11.797Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4O\"},{\"key\":\"6e24a91a3b1b28b7fe288096c58af415cb730760\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1681\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/N0I/HNi/uMcZs4moPXRGOcGj/style_thumbnail_18.png?Expires=1651449600&Signature=INC8rbboPRHniXI8r6hdb8fhjh4eS9MZtrvf3FzH1yWA0LDD2jcgYWXTr4um4x4yqcla-wDT3m5HHYDdi9xK6LOefwLja576o7bJrQyhWHXvloTQHN1SCjLijwHAV2gZKeSKfdY7EdlQfFD0wa5v3WAVg6Fi9CKdNUvw17ozwtPktetrol~raEzQoYpwqVRwK-1-EPgPOa1Hyzs0LPoGPs1J5h3HQvg9s0AKU4V9UkMVuktxzgZ-C4s4lPOBOwh2NQehcP3OMpv-IVcXvQgtTcGN1g7~TrUPICz5vaNYQ91oBd8FP5robXzLBwUGO1l8nQ6l1Zkd1d4tb~IU4fAzCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Regular\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.791Z\",\"updated_at\":\"2022-04-04T13:08:11.791Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4\"},{\"key\":\"99896ca3670b300fdd56bae6a342c0c51e1fe7c0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1692\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/AeW/JrH/VuBSUYZzKYasuEv6/style_thumbnail_17.png?Expires=1651449600&Signature=UTZokdYRMDp8ydeWy6G9zYW8b~xnOjCzdQHtIMqqrC4z7XGs7yyN6DPT1zIH8YuWhvcbuQF~kHtF2ev1AZn8ddWBJK4y3EsiTWRmALEQeiYR2b0L7x6TE31EVaeMhL3rXfbpP-qpbRFDHPlGGKtSWxpvZ9QkGksEq147y5wcxnSIXNtLKsIIPgCBFn9oM9pGXmA7XWE7qRtsB9y3WqDF~SoBYTa9ix9s4ANsDgiRMh2~2y5bGErjLSOENpdMiXJwDyR168xnICARZ-oh5bbLeQzfbVkCiusXdCRkuREKPKcsavnRJRcapfN7wAe224A4e4~9YPyBAmAceDHHdNNhoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Muted\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.786Z\",\"updated_at\":\"2022-04-04T13:08:11.786Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e\"},{\"key\":\"02d03f3d47544f27d14210313bd6f2d2ec6aa7e2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1683\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/7Nv/UQy/syMXLjtuCV8trpU1/style_thumbnail_16.png?Expires=1651449600&Signature=O96ZDpiEUIG5FRLfuoNIi3xN9JL9DV3cGEz3fvPYXR919Mq7g2XlkvAkSnX3DdhzKYCTAExOyPqlkKPJ-4Ekq~8H69~D5aOyyefkTv8Q91dVkOfRnAmcx6BNHUVohaqAv6eJdP1UnM0dvFWWEw0G9GdPrI9xJzwjdGYqrKou2IS~bf5OYia5uJTGDoSussTNyBy9VNNJpEFx--EgHnej3Kwc-CWUG-HC7mNy6J0rhdV7E2YSKvEcu18yGCSBqTfskU6zO49R3HA2lmcFlMTooTiH~wfrVo8WhGPp6n1Hmq-0z2s939uWlsIAWDNzRRG~am1bg4LKjT~bA~RT3mzcew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.781Z\",\"updated_at\":\"2022-04-04T13:08:11.781Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4f\"},{\"key\":\"d2bffb996e1f6da0fce60f0288a7050bf2cc14f7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1688\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KhR/xvE/bpNj7D9jmi6On9GP/style_thumbnail_10.png?Expires=1651449600&Signature=SFlxhKQeB70ddmp2yiw1CkNPMfsN5n22EMPQv1~2p-pxsLT0~W~jyqOAdPwrKfbgFPDGEBVyHD1k1uzYfirhUBBi47Z9vXQ7LAluTMVU5D1F7AcmhHQieVWWTccXJv5-OUUj0lg5fIa85VDfL6CHEkAl2Ne9dklfnylH3vgExoql7Lv8ymBsQ14P5PdNly0tRcCTxHGtkNG1yNu3Idh2M393wIK2iUSVZeX2xufoS9Xkznv7YvvVcJgsnbAEEgZueA4vohOrL1UTOy9VexXlFX1Kri~TITts3FbTGiGSfrNLamnpQEhYGjHpYe2SyYPtnrIRZ5iXnx~nEQWZ-73tNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Success\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.771Z\",\"updated_at\":\"2022-04-04T13:08:11.771Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4}\"},{\"key\":\"df14d7970e239d7c63b6134cf59e578909baf8cb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1685\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vBM/P1v/7WyhLA0MIg8f55a7/style_thumbnail_6.png?Expires=1651449600&Signature=gpRSizvuGrehJTQWwCsYn-exrHHdH6wZr-y0763I3rJGiNzKiWCGM-tWRGPRsLX14kzurGgH2hlOwF-pqRFfTwRTXPmw1yMY-Bw1Wf5f8RVfPv8DWBTpGFxvEDqgcZ50Jm2x5D2LRGVU6SIRFoXmfsGgi4FBbhBXzwZxTHdsou~-MYGQiPGzhI8~rXLIthO-U6xe1QBiyIKnLiWMNkOv0g03oYMqW~h5HDf96gjt2P5qg4UPx5SITf4jR9VX6-4uHOZEoku5R2CZYPGRe4ERxC9TIkmOV1Abw2RZGsnPbWmt8z6hJFB~FDBjdviEMzJbJLMNOm5C7wUb0PcaS7xTLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Highlight\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.766Z\",\"updated_at\":\"2022-04-04T13:08:11.766Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4x\"},{\"key\":\"c412194794f517b78c51920ae546c608e6056dae\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1684\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PGD/15X/xJCdxWI87Kj42KS1/style_thumbnail_5.png?Expires=1651449600&Signature=HJu8ZPok5B0DW2dSsJBdj7r~Ne2eDAV0awGVn~dKkL-Ssnt1w7iKcUOJpU1QkhzX8R4A4wuUBW7GQ4i0P9jDUs5mUhNoP31Aljphi9MphDFFaxUXaeCfuwXS5UqhAII7sEMIMk-CMwv14wDDfNOXRloFv1mlnX1o2zpsXlsSWO-XXAPL6F9CbwBctmgPoJy~B8OTQYDDSc-qypaKYyLlTdfgBwZAKrd44FP9MVwKq-wQgi3cGs99YfVl6DQblRFh055e9~Ga~BH~N038oAbV9BE08nzget2zInLKAx88T4RDDRDWn6Gqtfnz~kCd~fYAdCmuP1TG-no2FOCMS4THZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.762Z\",\"updated_at\":\"2022-04-04T13:08:11.762Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4r\"},{\"key\":\"084258efa5c89fc941b4b3812bf62e97e6ab4fa0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1691\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JQD/Lve/7Dq62JcPC5BUYVeK/style_thumbnail_4.png?Expires=1651449600&Signature=Rvxc4G0gjUW6yp8rWYQk696ZmMoGaGj7ZGHsXzhgubRQJWHK~4BoELnlYdWrr~-1E85jxffzoAChGHWR10jMLBbNFO0slwYMPlyuZ6ojCCLCJqkqUM4ATN-9S9-lwh0dOuG33aZAvGn2~8giXQfd1Phbkucz--GAO58j7YXR3a0rGV-wx3cvKf0JNFgrU7JQTn1I9hYzfzlH5trPwlHaOfxpCwGPJ79Om4pIzHJxd5zq~tK3dgQzoY-5pZzLqzhWaJMyyriTSi1tcZM6u6Vqlb-Q1LXCf5G9FhOT81SwYRAJVmv5r-KYCLKUbYiSB5tZ3nNvtMWcvDnGNtpjWRK-kw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.756Z\",\"updated_at\":\"2022-04-04T13:08:11.756Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~d\"},{\"key\":\"daba68993a7825bce14e2c1b1d137429ce54f17d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1686\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bhr/Sav/kahMmt6GyUpOvtPS/style_thumbnail_3.png?Expires=1651449600&Signature=dSFy9pKTl89on6ejt-vHLffq900EhehX1xXXJg-zFxq-DWBjS1rGeqzVVLWsdmkD1jZu8N89gn6gFewjCDTssqDudXTZ262B4Hqq-n7F2EHXQCrLciCMDhzeRP8Kvc6P12HCYSK2aHIHN1T-ScyqScMwUYLmFXDKfrGUHelv2V6aGzFNU2OSWfmwIjKy9NGN89bVmcRvUVTIFSl0zE5JrntvlGk93GebEr4qPu-L4I7sQMaUNML7UAhtdO~WTIgl1lCr0y9mihDYulPJQd5sGLdNXYvhLiknZZlG2EoFKPtjAUD8DbXhtF296cowNf-HKnYnOj9MsPy6NWjwZuDUQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Error\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.752Z\",\"updated_at\":\"2022-04-04T13:08:11.752Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4{\"},{\"key\":\"23b28354b140ffb8b2aed2a5b02cbfda0927092a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1687\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2Qp/Rwd/9xfsm6ft8q1HDI6B/style_thumbnail_2.png?Expires=1651449600&Signature=LmcZysBkzv7YLmjZ6c10Og5VxxlI~Cir0Ojj9~cJN7RjiVPu6drRLPSf1wbOp1dmJvnyfRH6Y1zfy8CCi5EI~ds48DWP5AN4jpTeOO3uQWFqHeglsnYKpiK~So2nLBWwr~TQ6FGMxTB1VnB5uT-IqxxGUWlHgbFO7helz1TnYqJYNTFO-j9uN9AEchSL~jJQDxCvZtTE9dzs5vy1GENWxWzyfFF9-F-jzg5IrhzyL~IA6eY0KEY50HvN68j7F9pj8Z7s9DTfh-5tizVPYUyApIyszoI3xdFeTixTe-cHei~9yqoZfFO61kRZ5S2HiYJHXhvFyZSIsRN-JkAekr7S7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Warning\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.747Z\",\"updated_at\":\"2022-04-04T13:08:11.747Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4|\"},{\"key\":\"9fe7af9777ad346bba7549abeb4a5430d80a20b2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1690\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/pr9/BgE/zMAP3KlJfxZadiJN/style_thumbnail_1.png?Expires=1651449600&Signature=KoX6bW~XjCBh28wvX~0UEPCO0QTFV4p3~9AGAJYh0URasrX5nHCyYd4XFzdQHQl-JBtpDDT7b4Z-60b2VeIBrwqX0V46lccSSQ~zsBgpQxA8TgC6HfmNXIfKHz54LLylasr0Y6o6EkhU3shn0wp3mSTzVXEd9sM0OT9duYLhc0cHmhCcWAGWqVE6u-4J5JJBQFH~buVOnU2OeVsew6Y1E5enFcey5UYcdID1tFK8pHBL-F5OKNPh3k8za1gs40~1UFMMXlIm3wX79Ut11~MuXe70qpjeP4qjhGHimlRhEg9DYMfyCADSaiXLwl73aGFleMhznwVKsCj-KRlqMr1SxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.742Z\",\"updated_at\":\"2022-04-04T13:08:11.742Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~c\"},{\"key\":\"a6d1577ec82aec5d32451b0639769bed04a44310\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uyg/HWc/0ui5Ck4Rnr8t7zXW/style_thumbnail_0.png?Expires=1651449600&Signature=Ix6YlB17LCGjA87udOtDWl554rinaeCI6xm0m25KaW2-ZeoqWDFPlzXDW82kCzTsHSn5wBfSUWRsfnBsLkINc3N~4n3uOQZh~tQzr4Cx2f6yyfu0unhleb0mjnnwvzBH1E8i24ux1IIcTchrWOmU9TLxDQnHxB1Rc5wTFcd-8QTXmZ1iYogxzQZcFYQG012UKk7DbkUSeOHr5PyANW1KGKe0kaGMthLuInRkwk9cwVO4BW33EQhx9YHxLm8~vK0p28NznjsEeqTi93aFjEj7Z0Krs6KHrDmTkVL8JIZN-QOaZUm5zmtfGexDxHcesG0xI8HK9wBZhy9Ad8K6r1GXKA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Announcement\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.839Z\",\"updated_at\":\"2022-04-01T10:58:48.322Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"J\"},{\"key\":\"878cf98b608f73da55710539b4cf12d442b06b0e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"227:1552\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xjf/wIZ/66FFegTdFAaFZBg1/style_thumbnail_0.png?Expires=1651449600&Signature=d2YQ~WQOmw8s-YbgGmyCQ2zc4Uv2W29CUMlrx3L6FOdH0ERZOVlMlwN0cM0vM7hT3UXRZ6Y4r5t-dfqQEImOjiaenpg4cxtHYtnKMCXL-~GMmuOHjwurFDIhpn5XmM~brysPtEvESPdkhAzDvbTBJVtJQrh-pkYmrpZNI5GtrDxjTdSZJuIqY-IJ7QZwX7O5Fmt~Zs0o2LVxY5g8Z6CboH-KkLAlxdpQ08n7nfsCu~nz9xYTOQ-fUOkoAsYq~PBqeJQj~g578teLBo0QMVSAEApWG82O1oQkiaX7PhfR-liXX8pjeDE2IEgqLlIQPHhukxq80CkvfHrsD87X70DApA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Low Contrast\",\"description\":\"\",\"created_at\":\"2022-03-11T16:07:59.623Z\",\"updated_at\":\"2022-03-11T16:07:59.623Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"WO\"},{\"key\":\"f8f016b4e0b8cd9dd5e1bdb1e0228bf11f77f8d6\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2372\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WoU/tlp/uF0BX2MyMQe21vKw/style_thumbnail_18.png?Expires=1651449600&Signature=djzwc8pQzgzYAmwA9YW0fhP7EmyWlAQYlVMcg8Ymy2ij0Vcap0TfkUG82LSyGpB7kNlkhRfdRZmEzPoz4d23pco26rAE~cTYzqKHcyZbg9LcADmRuVaU6Gecta3xny3eGoWSYdHQ7aY4KZ3HzDhPBow0PTbgr1DzIEwlgaEbXbmNwH17oElADDHCB5Rhz2Cl2CTQSJ8buvezsPWI5XTMNNKYz~iyMLpqIdZ2FsHTRXF5PRFaiB1dV42oyUxvqWqXxjI~lmhxy7n~mUXypDLdoDc~W9kJPer32ZCHdrx1176QrrFpQ2eu34IwgR6jUMkXwkpDGZgGxPHGfsaSVAphyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Floating\",\"description\":\"Feedback indicators bg: toast, callout\",\"created_at\":\"2022-02-25T12:33:22.997Z\",\"updated_at\":\"2022-03-10T15:13:44.581Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"%\"},{\"key\":\"ef58f49300baf80c6613b04e065f393c2d2003d3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:738\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/V8m/FVU/gyze641TtqLbgvHX/style_thumbnail_10.png?Expires=1651449600&Signature=M5-y28CrsnHju039T4LNqDgGc91S~HoDA4Fk5HCCFSvQThTMhnvvrVaQpVCJVQd8gNBHnB0DAnx3zozH4xZIchKAZ-5ckbXWFVpxy81O2TBheFyyVoKZmu0QNFl2Wd~pspTyA-vd1w9zh~k~taE7VRnTqEfrE0yNUP2UeV3h9pj75c3rgwECQEbEPSLukmZZyeAGTw6R7P64FHQIcK8atKVlb9jNNqHZFkP3I~uX1-ryVKqFiCsieqgafzRGAoHnZB7AQijQKxHQuL7lQ-cF56fHjJzgMmNJ-ta75mzvXGhxJz~Qi8focbJKztC62nuUK3PnwTWam03MaWBpaRBzZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Regular\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.934Z\",\"updated_at\":\"2022-03-10T15:13:44.576Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"6\"},{\"key\":\"d3765002568fd933b50a860721e45c08f3df3a01\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"20:526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6fK/1C9/DBkGPETAWbtlx2fz/style_thumbnail_14.png?Expires=1651449600&Signature=hrUxAD7CKMnzmL-8its~cKUHQ2NulLWyKrVRKy391zYXFCPXeiVl4oAWijT3cBuERSoc6fSwu5ow-NHs~Zvhz6KNG-ryF5n7dWN4HksRgUWbFMpR9DO4fqjNKe39VnqFjsQixDD0XYjlSy6vAUUUB3GfpKN5miVhO-Gfhl-KWVG6J6b6M-n4cy~WVZAjPCU-duNy-QKnVOtmXFEMNUuqNyHKSkrIwPs8Dy~jnHkVvwcmwMp1DSUmx-7ru-OR6XOSK-OdxJVAfoiU1sbTtnklAEG6RV2TXlN2FZ1bkm5NgtUKCo6Fgmx7DVm0jjxI-pcXjUY4RD5bAqRPSPi7MmZJgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.966Z\",\"updated_at\":\"2022-03-10T15:13:44.554Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"A\"},{\"key\":\"c1784197b7ed4cbcb6c76fd9f761898fc13275f5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2383\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/p4k/pEC/rL8SgzB7YtXh9fOV/style_thumbnail_13.png?Expires=1651449600&Signature=SQVkmh0gq73Kmbx3A7ebVrUu3b14dwCl--suP0m8UJCzerTYS7FtG-IG4vBrzqDHePAVXgWU5dmMYP-kokkaVOMq~Ir-BtpAnvf5OJmkuZ-tHnXqSKkP9DryvStoWT5Iyt~XUtyk0Ty-5lngJaJnjRr2qJ22whmWVZpErF9Qllfg1kx~OLbkF1afUvdQlpYRprCL7RCtualqjTuvknnCjt3q~TYEdnwwDACQBUAya093ithEMzxOLNaLwFDvY~UEMP~6iczOtke2MEcc1SE-LEkPFzj~IvpTipCjcfIyhRk6h~ARVDA1Xbb7IdbUDo17EjuSxOrgIYOKkHOn5QN7gw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Muted\",\"description\":\"Muted text and icon color\",\"created_at\":\"2022-02-25T12:33:22.960Z\",\"updated_at\":\"2022-03-10T15:13:44.548Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"1\"},{\"key\":\"a04d540bdb338462ff6a60b5afa6eb2eb04a8971\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1487\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/7zm/Dkw/AlXkmzyI7FkDmfPc/style_thumbnail_9.png?Expires=1651449600&Signature=cCcIwWo3vEkk6MpL5O4~olbVqaeUtviW20yiclbezQYidTvEfA-o2g4TeXs~aMXRvhh~sEcDNlqHnaUz9mGnxQMN-9LjZbPus9q-snUUE0r2g3-rSd4qjP9ZahvTFPZb5WBld40uEHWTTZbGd1mMNqWJhdwHPmbf28mvTLGRnpVYWD-AOYtwNDfyOv3jib0s-vJ1p3mXBDDVRb~GYfOTdfHslQr6XE9ONZz4BjYSEZwKyCeLDh~BJ6zkA7EU1lZsLJqTQIsRlfsa1Eh-QtgOmCraKRbd223va0H4ggGwQnY135DtUn10qgTqlr284ZpQOZW9iZMjmJ7G6YhxD8bpdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.908Z\",\"updated_at\":\"2022-03-10T15:13:44.533Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"W\"},{\"key\":\"85651d34ab4114cfcfbfd9726f44acccfe77a5b7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2382\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iwQ/m9C/kA8qKx31kRVc6SVB/style_thumbnail_16.png?Expires=1651449600&Signature=brYhvY9fb~q2CV7HWo5TgVPcqgCgA9tyAU~Vd1Yg7LrScB5qYIsPQPrJagbibLFJo09Z141fMGDV7Tb-08H-9yTU5t7SJ3eolFzpGRRZyfHF3FEtX1dPRneFxheOIk1puScymM~2ZCjxb5iaFDeoYSRnnFINh5xmcVCStM1HfPd5rIwpXrNU1jsTiIAerO7F1c2c8UaVIseZCE1GIjb9jhurbUo3YsIn9zn9UHwHa5VYiGckEdOkmfRnZfummujxDy-eyFjn7VczWxeOM9nYTeaR7HsXBbaabBmeHkEfPmxY5ZL1cS5wF3pOwrsRwqN101-bb62L4DCMel6uxyp8Lg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary Inverted\",\"description\":\"Inverted Secondary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.977Z\",\"updated_at\":\"2022-03-10T15:13:44.527Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"0\"},{\"key\":\"3d8d818be60a2f3a99286ca10fdcaf953b04455d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"101:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/f0Q/nQe/btv4LeDcKk4x0wX1/style_thumbnail_1.png?Expires=1651449600&Signature=RrG42sFv7NcSCDN8CkDLxABZpLaZ-hDyHjn29X4PLpfF~8R9bsKXdau4jzNkM~7wOiaSLO4CDTTrbJPGgAXWM60RgEsbrjcA0t9E3s3UHp2Mn8uDnkx6SUjWueaTLw~qkeoBubYfIYa60RfC5C-Sgfh68Uhvl703rURYN1DlFWfxO8-ct7FzrcsOHaXkJwq0AtcUpePSb-GP6DFB4qAW3SjL2DshsEkyAO0gOM1mBiXmK8O0bkueSYJ9~MwRtIej6qqjV6tLQQT80SxrSfwpRqDTpI4Fi4k6SRv7YSS9h-Te3TstMHyFXSqLShG2NDCsV8uk3pU~LLGZfoEp~6tKrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.681Z\",\"updated_at\":\"2022-03-10T15:13:44.501Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"RO\"},{\"key\":\"0dd6cc65ed1e0da4a65a7dbdec871d9bfbc81b15\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2381\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iLy/tFf/i0zSBlwFv4G6msWk/style_thumbnail_17.png?Expires=1651449600&Signature=KWrvnrpi70iGk3dXR-SWANWlmmmnIC23ggCpB13Cjidu~rhyf76EfSE8VeUcn-bblkuzNZtCVFNoBTTIAlyTia4-BS7kGqv02ItVrcVfjCCL-LdEq4p9dm4Rw57JjLrQyAEPGw4Squ4PKwYbQ1KrHYNNmIfxJIMiy0AeWp1fiAlZaSg5L2cU-2LTDRuprYzg~8qB5wnyp~DNZaXvzi2Q16p6rhV0yGHSE-p7WyG0g0ADoy2XOXQtod8HDyk1is9KmNbFVOGCaB4aEjSy3OsJvmjXSm0UyrgWJrF11AeDxMcT4Hdaad-4pjBQdl3KodHdR3LS8DKswu30YZmNnJeSiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary\",\"description\":\"Secondary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.982Z\",\"updated_at\":\"2022-03-10T15:13:44.488Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"/\"},{\"key\":\"e449d354bcb3b1a75c310bf34ca109eca2e806fc\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1432\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yFC/mGy/bU35UFDULcIUBBp6/style_thumbnail_0.png?Expires=1651449600&Signature=GLGXdy4hoTpWz2FfcjoaDd1LIFB7Vwmgrzdxn5AzS2GV2Ezsh3I-EkmjsF35LnTsSTrp-pWBvxUcVwxbb5lzja40t4tn4TFKo547Upykb2ybmau4UtOOSa-23aipP3WzL6TgnuB09x2U-pMuJKqQg3ps3QAm80a-e2cPN9qKtnlzruOb5nHoMRg-zB9USYG8VrblGVC9YN3GeSEaVQv8CxUAtZsORU8YGoH-hro~vwfhD2mROCY5XfGtR1zNKHo-lV55rqiDK16k2VaKntaf1kbPAUmgDLpBXKTjoCbP-cot4~d-fxompEusNw3Cj7PzjsFANFQXaksJIikSf2UhXw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.822Z\",\"updated_at\":\"2022-03-09T10:57:10.553Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"N\"},{\"key\":\"0e00f688cd363b572752edebf943dab3d66b3e95\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1433\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/LLe/eIC/N9ArUd5TTINeywEQ/style_thumbnail_1.png?Expires=1651449600&Signature=QBkBU-lCaO27-LQY3TDBIndmsbNDWNrlVmw15LkyMV2NSVJaXhbozRHgQtS2L91TGkX0qlAd6ws9tCgg4hhYaEitckyOGgf1~2JAxZvelhWBbLd9KwZKtN4Q~AC8i6f5OKwmAWWSLAxHvhs8qkpClzZ9ylFqMbxRA-DU-8VvT8nVY10yVdZqkAy58q8mcpqC1YBLe0UkR6K5ITA0ym7gj2EpxpzJeMq9pBIxZAN17tpnJSMfsgqslv-pLvIK85ilG3w3IeVPbOC~BWH8bujjdpPQWM6H~ejJsc7x5MmXFgqGr0j9~2VsACJDUav9PsBEAcLVDFjGht4T67kQBliaOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.817Z\",\"updated_at\":\"2022-03-09T10:57:10.547Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"O\"},{\"key\":\"0a6bf727ddea4108e955e7e4e3a191ebf9bdf74d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1521\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Y2W/lDX/riQEC7uVYR49YOzL/style_thumbnail_0.png?Expires=1651449600&Signature=PSgBWrXfKDlpbWja-2vq9uqXYGV7co4xHtqTpZP5ZbmyfqRw-CAWqYMBfMrfnLGwn5CjH~CqrAJSmca4hVLlGjAB0maaHsto3~KiHXNQ6Kmsuw5UFxAjS2AuWxiZujmq1ME4WYQjg4LK~3vQwnz0HNK3zqa0D-JGGPpAqgZCyh6Tixbxae8mAZc8X7ZjNZIkg4F2JMu~K2OgisfAaHNhDbiUh4cWv6ozn7AJwXoiMSvGLTV74Lt422P7IJ6AL~w25bo8DUYESOiKOQ~CCAWRsyl9QNfI-B~gTVMhhI7M6c5wqZNa1ysnm1dv-y555Wo916YxFgvKw~b0rKn6qAra3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Success\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.869Z\",\"updated_at\":\"2022-03-09T10:52:28.091Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"_\"},{\"key\":\"e01cc96187afa152265eb2b8f97607ad0391cdfb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1523\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xIu/f6S/SUFFQg0eBnLMr8TK/style_thumbnail_1.png?Expires=1651449600&Signature=F9QcREC3u2b4K9SrEXHCqfnMGsdqSKODDulKsBczpvIGUY52nyQootdFdoldVWFq7HXXPeck0iZkjn3zT8XUnv5sLyGiTupNGTNdUM6ITNamtyl1YcJLpI5mTr6nFxaV4Od4~BfD9cwNcklHaXCL3MWC8I6GTMWdRcyOv0H32tcjHoWvIOJ1SKw-0uJSNxSAivp~GGoEMsQVJ60MIFX1bodXaROzytGyad7rwPyU45tD5myNeZ7F87w329sqMt-RIYf2L-J07smGDtDbiW1LZtgtYEaBieS32UeNSU0Wcb9n643GbMPhT9hwrFaJWHMc9Qllq6Bm9HbcREhpEo1QWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Critical\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.737Z\",\"updated_at\":\"2022-03-09T10:48:18.660Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"a\"},{\"key\":\"492fb3207c0cea54dc2977b48b61d09739a46b9b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1538\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/W9g/Vtn/M9V1NaNlQVVLQ2zh/style_thumbnail_0.png?Expires=1651449600&Signature=diBhAy879lUZqJGfLrqp2EFNOW9MG1~y~xl2d3Z~Gcq-LipCK3DimUNNX79laqT~TQC5FviPRkA02i7e-GpAUFzt-TWcXkqHrfumyBIh2N94wb9XfvPhGCsOIhekbmaP9gwfQ-y~JcFX4Tn4t2B8OZ0rLWpvroRjwOW3U89wBYq4zCQ-3AGXXMTGbUMBPSAjNX1uihPFHU6P3eDNhybBcbltxldfATe8JLHNUlBawEwTmWsxxia9-2B3D81DWXOheLOgwzB1UTDroE6gVNWIh1iDHcXECDAbrRQbrwFsAk6yRvG2VVGfob1LEjCsF~U5Kw3InBrxzN4JV3m3wC7EcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Error\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.524Z\",\"updated_at\":\"2022-03-09T10:48:18.654Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"aO\"},{\"key\":\"ffa8470c8873338da642b47dfda437c4ac5ff62b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:739\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TFl/xnJ/51cAhwxp1zbIL29A/style_thumbnail_68.png?Expires=1651449600&Signature=TJP2T1lGtmEI4qw8yfIiLfCIuyvNxdtFRAeowKFIYeZW~UIcwfqAbKW2g-HiikOcbYjryVqSXrAZuKfhNb2HrX5mJvL~cUeR1RpftneQzYYD1M~ZKk1dgBRG5BFzJd7U8-3-lL0F3pixOzkE88r3lRbTrIXoIIYZQrcyVcnf7p0N3LjqvUWSfNtgFYVWiw3UyEATel54rRayoQKcpbRfZ71-goPh8rtq7~g8enBCAezgXwdp-kCSzIV-pvi4dWe7tmgPwd2tLY8eIGe1QCoLpPMwmmcnGvAqJI56c1WEl7Uso1PIXUVl8s6wfyWXBrn0DM3XcuUg5WTHEnoHhJKE3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.858Z\",\"updated_at\":\"2022-03-07T12:03:58.409Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"7\"},{\"key\":\"f995b876d740cca61c8c65eaeeb45fd5eed02da8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1516\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/m4M/IfH/EmF59dsi7qKhI3wf/style_thumbnail_81.png?Expires=1651449600&Signature=VnnpKDpFo3SfEVW8HUn8rdQieLVYritLgxZXkxFEnWQOB~rM8YKPflN-RSpZPFI77Ox7r7N-QmIT5JT0Y~Dh-yg0QzdIVlpBE0H9l4Uw5I~-XeoBXYxwDndgp50eaLyiw3m8AevnPjtSSbPhDsGtp7ESGBuSKrs4Hrq8B60XHN~CNAo7SS6Os3xRFgG9oTxAvKtHFQHmpgcwQSTCkE56QMMhtESVRJ8Qn7TRLPPxCDADEzeSzvuAgjcs~Lg5Vb9Ugsa2r~HRAZoosEaGANtm5A2tRRydOCmgUMaIFKRwMvC4Hg5SfIFAeiPeO8ni8bV72N2lBFxkPa4UhBdRpy3sfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Anomaly\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.929Z\",\"updated_at\":\"2022-03-07T12:03:58.398Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Z\"},{\"key\":\"f929e6f612c2fc5f7a5e411f5dd5b8e3666fbe14\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:790\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QNS/W9f/s8uFAxwFNYofcQyV/style_thumbnail_114.png?Expires=1651449600&Signature=PJCDJafTe5Ei5Hd3KPs633a7AnexxN5w7B3riLUNCXzaQnyTZmEE-zgjeBnNxrRVrqYoRm82a95yObjek05azbl-oVldNFrWoV4hDiGXCrDt71TJqBVo2F2Dh2d13KgNiKuG3IC9leQMbS4kdFsU5fWjMrLMhrGHBDTfFtZw0EEQcSTj0LUn57TK7FyUPIc2zu7ji042Mq~HH5PnKfFDsNGmGdIM3dt06Il672XS2NthJK4JapxUlUpXuwTJZ~Hd4fxdMh~d9gmAVBhJVxrib7dA~WPygYvTTL0sznGLN3YKlyYrzJDtNWn1jU~7WLWLFr6hGwM6g9nZ0XeM6g9W8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Focus\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.106Z\",\"updated_at\":\"2022-03-07T12:03:58.392Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"@\"},{\"key\":\"f7e2ded6caebf0779cbfbd0a557e46e1947a614a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1522\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fsU/Bf6/ybzns65ZH1CLCcmh/style_thumbnail_35.png?Expires=1651449600&Signature=Tbs44K~A2vQ29I5jHKT4IFkvZfLZ9XY-ciMsrzAxjSVRkTQdBQDGzI4zIKRDIW3JtbTBMTrO48WfYNmXVyn32T4BJ3TuVwHHrxD~Q~kZUL7ZVCh2u5IFT5iAG7XF~hfrHvhcZ5fKPX3S8OmAnT0nMrr81FTZhWCo8Ymt3b2GnAbnpGW7pFMZvWrbeeYy0EAPugqA-U09rLeZTkxPK1QG1pej6ZlWsTNVBbk5tUb9KWohUMMI2AdSmnNHeDlIXPyc0tMXsmZ-U3R2iQSjUdJwawyDE3qBt43fSapgJDYH~Ochxar4pl3ON55GTryTqm~FPTkSpVk0HpaxltE6tdv04Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Warning\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.686Z\",\"updated_at\":\"2022-03-07T12:03:58.381Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"`\"},{\"key\":\"f591d3c7c3252e0b1f8dd6abc52351151c7086c2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ozB/sLM/5Ig4jjBNTCxo0LT6/style_thumbnail_66.png?Expires=1651449600&Signature=JwUcTLH-ghqJbRJwcP8fbHWJ47-AaDyQwlabdOBJfQTOhtw8psbdu3eXhSA1xSzsw-MFytv2eFfPXzw2hpbDYiwx5IEbsvRb3zoRfV8KaIpr3Yix5nYU-4KQbrm196mDN9Fa-~jNWTlthPDhfBgnK7uh8sS6g90Cb3favg7KoF6fAVyHsnyCSniNUSPVLxyqHkTC7ZxWZUWvwsLTtK5iyqb9KxpAvbSfKTC9uk7k3-wP57IWDq5HmQ4g-65LjocoHFR2EAq9QpEGS4nr~KWLLmxDl3bA9e-HEDjeOUwiq3UZbjo6n4e2Xul4y7BIcDVHC~DzjITy~2jtrIDCYGF5LQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Info\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.845Z\",\"updated_at\":\"2022-03-07T12:03:58.370Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"I\"},{\"key\":\"f3098db025e7272071f27ae6f9a5e5d3096eae65\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0GZ/vkD/qmOvsqroHMrb6IU4/style_thumbnail_11.png?Expires=1651449600&Signature=EDGoHPS~or8BHxmbvk1DpN0bk2xsgjUmnX9qAdYUR8G4EFfDkYEW90XE2GEGhbl9QNSl4tuv1QdDFCtUef~W7AhQLguBQJHSvzoveyUPWh2gFunF9RZupLdpCFbBpYvF1eubsNlQaKUqtkktjF572eX4zDLC1dp-77R9CjmhkhccTsGLpr2ml-3qHc9XxNKaIQumVvTyaCGmmOkKBnjtcysizVvlt2Hsw0K78Rf1obFJhKKdoLfrQNkXJWa5Ehk5zqjdfuckkslAAIdxTMgji6Ny~zm5hrVXlX9d2zCzHbAObj-Jg3wm-sNxBQ9z4zmOSbCX6Qe4UzIN8qi2H2WG5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Success\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.543Z\",\"updated_at\":\"2022-03-07T12:03:58.359Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"K\"},{\"key\":\"ea3af86dfa80f1c89ad9baa91e0bbeecbbe5f105\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2395\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JAb/t3o/fHMkVnc5NryHTHqk/style_thumbnail_84.png?Expires=1651449600&Signature=eDY~ehKCmDnNf7uoWh3DakR-fnS3P4L7kjm8inurzfP28VJC-6AXnEAECerarKVWOg7k-5~A-JNV-DEiWy5hMTudfGcFtD8yH8wEwVwLIvlmY1tZueF9mftmp47AzxjNXTQc2FVr~wlLXLCFpDDWHZpEg77nQ5d1JdIyII2Q9cEFeka809PI53LFlJL-rknB6fj9TuCkBEFTgARUGbZ5lg16PJ8sw545bvDOBW8jmfJvD8dR~oL-GHAwXs5hcHqtnIxZbg2EsfaygxiYJD5VmWAPhEZyTEykO~sgJPZvPSUSu7ousVR~YGhb6Z8wq~sEvCJb3gb2RYQkTg0ewIyyJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Hover\",\"description\":\"Text color for System items on hover state\",\"created_at\":\"2022-02-25T12:33:22.944Z\",\"updated_at\":\"2022-03-07T12:03:58.337Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"3\"},{\"key\":\"e67fe626e5071c2818058f0e6ae6ccc2c9b1747d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1086\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aoZ/4Nd/u64HJFJvNhekdjoA/style_thumbnail_27.png?Expires=1651449600&Signature=hJefFChO50YNBboRI07iXGCVpVp3HhalzpWAM1cWLxc3CU5ngcKWj5WMuk9gYbIV2LYORaK68v5w5puUqRpyMa5fDsNvnwrYQIbOPcxpO26-qqdO9oTxspTs6-XQ6MdKZrc8hVbhXX8v3XMdR71ef7NRb2hdhW2X~auLgFiX1LXjPC7S1aOGKt4~0mZKzMiHZT3IsaZKve9GMmf2mJ6vcfe8WQ1cq3Jjuk88dvku8dFIksc53vsi~oEHZC~J8rc4P1IoQRsABYfaoP3ekjakyfsEFAfB5SeOyukErWS1rC-x~NkyQmF06pkjWe~YwDazKv7x104UCymxLlKNUis~IA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.633Z\",\"updated_at\":\"2022-03-07T12:03:58.326Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"G\"},{\"key\":\"4c5472002ee9e9014f25b2cde12bc75530c01f31\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1512\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3Qz/9dX/smjO7mkXOLMaJNfP/style_thumbnail_4.png?Expires=1651449600&Signature=aVIK~tJtkQAsDwjuaGxc72NFypbqG3fCUiNbWtRNreDL3VLCvLM3a71PfYK7Z9C~a0-QXdJqphoFxwBio3gUb32WDYQHQZLF5uMBdTb4E8xFF2pqST8OYNFvPrj6GAmSS-i3d4rJOMIcU6E9tLtzR9jPBWQX81WyXoPpyhBDTrFdrzge33vzsP8QwWw~T1SFxLccROX5zq~P5DzTSkwJcJ1KBoZ7gs7~GqjCzgAXaMnHc3WaZrZ8quY3A8~lX~wH59ayJI2m6vlO9JqLFea5yvkkgJhbowLZlTnvqimXkBQB~9KiXkv2o5z-S4Whf6WJlZDKLpjzNwrExKYOpH5sZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.537Z\",\"updated_at\":\"2022-03-07T12:03:57.784Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~?\"},{\"key\":\"48d7c5cb2d4166aa7a3b3cd213463ac51b50a17a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"126:1406\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hmS/EU0/sHxi7Ahe5WlFiCav/style_thumbnail_0.png?Expires=1651449600&Signature=TWs1mWiBy8LOWWLaQSawSFLn3wSBzTpsOGtJlGenfrG4~5b2O2prm7q9HbNfPa6Iyu-Td0LXtLY3cDtHzmoYQ5mnDgk~NjH33BBHUgoeZO-O7O7fWIRuTLZlfeheG-UGcREO6YebqYMMqs6F9NBcjdPppQn4VCsrxkD9XvASxzjeaDTLUbnvUg5UfxS1RPXEilgr1mhnCsv~DFzzioP5rGXxeISF8CvTLgCPi-5AHN57OeYYboBOxeGg5kUc3w3A4R-wc~TAUkhaUp0tADfWD0mG9PZ0gjbwMxGLSS3hDc-XhYZYsiBFy3YAdhwP8y0sqsALlzdTxvFJj-trZi3dFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-01T11:49:51.759Z\",\"updated_at\":\"2022-03-07T12:03:57.768Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~8\"},{\"key\":\"46b1248d1191b41ec368e1199e0cae64e5c2501a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2369\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EEg/KpX/7FPN3gVcgAyyPHTY/style_thumbnail_74.png?Expires=1651449600&Signature=GYhxdd~o0K970SAOEl4g5lggCu-WSitzhYKW1greacD9GQ0A7Ql5U7mQf-uP6NIo1VIp5n1us016fo6A5YcBPAuZvKDvQ7NWEZC~EnlZarIZCUw67YT0FWn-HysbJgCApPAlDVBDE9h3jJtFpVk0e5K9mtZ607~tq4AVEgrW01DE4xIjhNvXwF59N73SHWl5pAbgUP6~l7kKlI6R2ZBxBpL8uTcUoICHf9mxCuwQKXahe2DVN60~n0xJoVEp85weol-CHG53XGejQ1HWtceGquYY5caNMx8rxMK19NzYgSuuR8Cqyely2atIKrTuDkXd~dsh7y9MPaWG2b3-Zfq3Ew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background App\",\"description\":\"Application body background\",\"created_at\":\"2022-02-25T12:33:22.893Z\",\"updated_at\":\"2022-03-07T12:03:57.752Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"\\\"\"},{\"key\":\"465d9d7d5ca47d252e7853b4921af17b38d969a2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2397\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/D90/ial/awVXUolf3CnjjB2x/style_thumbnail_110.png?Expires=1651449600&Signature=Yjm0q6xlEOn5LJwOdiO4OnH-CWeH8GOumvHD7ogleO2-0Nu9RHujMfFVsV8qeO2fVjxOpp1iym94VTuKXo5YdtFQsbe9zlyIhhR7vv3~9GGEnIoMc3CnBNEM8Vp29Kddm2FEawkFy7tdIyk1u89ZdTTJ4GnuBgsXpiIAM3rc~oRlI8erUpRN7nWs2zyN7nWsKWurEomPykDKIr0nMoLoN0kPajVMbfmSggG4dxRC4r9S~9d2vTSxYgEjFQuxuKVtZC2nTLwAc1UZB4iyiIuiXRDGtqjEu7ZefkILZe7mL52A9IJapKKrPr3317wBUbsp6ddGWwrZ8c77YcLzUszn0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected High Contrast\",\"description\":\"Text color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-25T12:33:23.087Z\",\"updated_at\":\"2022-03-07T12:03:57.747Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"5\"},{\"key\":\"4564d9f2d458153b3a2a108a30cd75c43b59d05c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fvq/gIC/hq2HQm8aAH6nYuGc/style_thumbnail_39.png?Expires=1651449600&Signature=EmA6PakWBb4EOprhOjl9DrdcHPRsJVL2sWE58zY8zIw1SB1zNztlCu9Nwh14VJ7ruVik-~BaS3Gqop5wuB1B0MbcGoHfJ5B0LeJyWeSqzYNZM7QhqXEc5iOceGy86keIR517-FopdD9DsxCVxdhb5Y4SuSq7PX8y0~GSljatgjKcoO2BQjj3iNp1mQ8lKgsqNAv0gNWqLv3x45SujFiB4dBIUtejAVGG-TpSCGMlUOA8vDnNKznx7wa9ljPVjr6XR~6-sUHVrpr1~a~ZzBwNH4da5ihpjB2hDpJFNRFqnhZMjMyaRd6BSzlUJONlUZmNiNrtiyjSkOi4BQhzXrP6yg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification Inverted\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.706Z\",\"updated_at\":\"2022-03-07T12:03:57.742Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"d\"},{\"key\":\"43597fdb5c85b7a9218a1d61a51e65341a2bde11\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1485\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Qi8/tAi/6SMtpulbzR8tpsMj/style_thumbnail_83.png?Expires=1651449600&Signature=JVfeQHc1hmabXVMq3r5JLgU3-GR2WNI36cMACbeCeI80HqJ~rz~UpKpVuwsfXArfQAqwBp1nefTsz2~gBdRJ2YQG~bAFnO42nf71m8OMvY0J0P6OLLDbxXwJDSDY--lO~PcHaeRBq~Ieio-V6lwfwb253L2bi7adyBw0lGU7WdpmPO3F8SNKKJU8c-tYghc~JuAdK507zCUQWVHMEgaMQ32WgESePO66zGY61xMd-G7p5h~UPo-in~rkoCySdo1uSIGBlW0WGZsozfe3lPwo18JsVAliubv1CP6~pTjUa-t6F3vZM2nahWj0V7naX5GSyuECHAMIEOg2~hRcjMeFKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.939Z\",\"updated_at\":\"2022-03-07T12:03:57.736Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"U\"},{\"key\":\"3fb696c3ec87fb9dd19a3e4f2f3853c7a0d0dd2c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1434\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ECK/BS0/oTCDhLF5YQVIvehh/style_thumbnail_1.png?Expires=1651449600&Signature=Spi7hj-OCFJvHACw6wZNwvcLa~2iWBLOxhT54U4K68qUhawLu1lXMAzq2ThLcun951WK9znAbFGWG-mTkb0lzjEQb~i~tOnUzQKbNK2lHELO1E~y0chyDMp-R2wXKsZERg2Na34iRykifRf7RW-8uWML1RG15niawcnVT4tQq4wKfPgxjK2RGcYQE7nh3euA8U2Iy5Dd7cvMfaHAHRdJnPKRK-iEpV~Ken-2tlDT7d2PYzRvJGCbIua2EWoPJ~mhTqgAIDeqnxNxjl-LHxII73ZVBMgeGj~YF3i01vwzAvqKu6JSEGS0KzTtJJ1LBKe9n5JMIRsbJ5clnlEU7-a2DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.491Z\",\"updated_at\":\"2022-03-07T12:03:57.731Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"P\"},{\"key\":\"397bb6d1b175e4148fb48573e50b85099b37d245\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2376\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zyZ/hME/9i98atReCgj4SKrG/style_thumbnail_104.png?Expires=1651449600&Signature=AVv327T~QSi6NfC9h0m7jgNmETlHo7JmrmTBaE2yf1iV~WDYLg0SjaAI4n6foNi5ZVdlJvb8U77jb2ZwdjaPAKOshcI~x334evHZbUxIp1Mjomz6FCXyfiah4Vg0zTwiHm548wMw1~nfyGqkTO0TTFtz1nODuFBp9tSdLu~Tn~mJLr5bMyMIJEB4S5C77b0jK1WFuXGC~kuKkq0WT0noZWHgUUpIqLIFqQrD9ytzf3B9N7k6O6fVcrQmFHZ2Qys4UUgbi10OtV6553o6ZhYbAXr8XTS4aHRDW5cAOCNUN9OxHw0ccfb5voliztzmCVUQJtjDBlne2aLuwkUfyfCN3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected High Contrast\",\"description\":\"Background color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-25T12:33:23.054Z\",\"updated_at\":\"2022-03-07T12:03:57.720Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\")\"},{\"key\":\"290036b6bb2ecf2693d8622f547593442fe567be\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:759\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bHo/eiA/2mfGm5onlqqPwRze/style_thumbnail_0.png?Expires=1651449600&Signature=TMpuJAAf6C~h2Qks8fc0W0ZGwjNC73KDizvOskaVcs4Dq1bpNfiKSoa9ho-JfMnOf5jOK2uhulynJitacAPWoWaehWCKjP2jrM1mecMbN7ibtCsPkDR~gza9~CgfRHQJxORiCtt3-6ZYJgUOZis7gcNT3-v-5tdsRpQDvQknpaTfHT93~cwgcE-jxtWZcDFLDy6MpIlBF27cDTxG5ACAanKwvtz7JXtHKdnVWfbN-a-7kEKe~B-Tfu0lhua7utb54UG2O8SL2AwLpQcBaGjYs5qnXAy4784ooVf4L7dSa8GOxE2EZeDuB7XbXBcbTyHF7JKm4mXcGvpzei66BkJ-xQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Link\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.035Z\",\"updated_at\":\"2022-03-07T12:03:57.695Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\">\"},{\"key\":\"28add7d56b9dd29e7214eb8643d6db190f025d13\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jm8/mu4/T89k21t8epAZcLLP/style_thumbnail_2.png?Expires=1651449600&Signature=IQWdkjnVh0Wudpl7JNFPbVpewAImLGwt0B25Ks0lEVSHGLjJPrijTqqCTl~AahlEq~nvxQOfy2fZDN1V0LK9WdnVDj8eULGWzsh4v0KxgCNceaHCd0xwDnuzUk3SgN4v2ZACTqdyVUNg3L~I1pH8i9E3qy5pTQq9r-rQ-k5vLtjKMAs8LtYozr-2K7RFaWeVWBbZPDD2E0Mx6xyeKI1UjJJ5rzxiRTKUm9e5pAHMkfVnXMZo9ekeXVeYmJo-ZMxac8OIHtsGzFKIH2Vku2qkeTigXckq0y2pR4S1xhArPATQREIYOkM2fPEAS65AG7XxWi4e9e-RLhaAx9CYYMAscw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Error\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.528Z\",\"updated_at\":\"2022-03-07T12:03:57.684Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~;\"},{\"key\":\"26788e861bf1ee429a671cd0d7b57687e34ce346\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2371\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aZy/KlA/VwYTkKrBktrAag6x/style_thumbnail_109.png?Expires=1651449600&Signature=T5NLyKHlk8T4iDHyUee8E4QyKLhjbAwToRMgeYryGl8Iw49xXvW8CNi0tMc2LMn9HPXY~dQUbbBqu13Uwb9-o-uHghh92jqj0QOqkss1E~blgv5CXpQr25fK9IWAbS2-Hi0yrUEpJIg7DbIUj8g5wiIwmN9bq1iEr-AG0kFgNT89M3psS9s3bmHFfOVsI8D~mNXcJAV4s7Yr6YoBpgqBRGtvg7RL2XewUqgDsJQL-VuOB9i4m5IVJX~z8ouvnJesiJTpKGo8sBzsY244jEXqwIdFhnHpBfJ8ZYcqcPbZnqTxHeiUD4-76S4O7Hg5PrhMYf6cn9m9QDrjpL1AK77vnQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 2\",\"description\":\"Pop-overs (Dropdown menu, select menu, inline menu)\",\"created_at\":\"2022-02-25T12:33:23.082Z\",\"updated_at\":\"2022-03-07T12:03:57.679Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"$\"},{\"key\":\"24d932eeac6526a9334821a3119e6555f524c7f1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2370\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zYG/q0H/XqUYAXz2reJxaKcU/style_thumbnail_99.png?Expires=1651449600&Signature=WzF1P1PppPBQGWjmkWUGTNX6Z0ak4b8xI5ZNyUf~32uxx8S1Du0VXGsE6xyLk4Gbc~YMx9sUej0SwkLXngy0pgb3fI47g4p7zmwjVfoyDjrP86QSOvoiAPByHOnxDity23BbX~Ox5ENGuOlch~sX-IkD4M0d3eC8twnjytdAAzFHxinFtt7bWM-6q6TTQ9SEQ7ghid7TuzFYqwisVoNdbmgu3aYLt6D0956iFaVJ2s8tjtU8aKiVsHAIeSlR2vLIcFM05VD8R4hZp-8qn53vmJwK1rBz~U43BaGG5TVGJZEnJ4EO7QWwAzvd8vs0-SxNtl8O9QiYOkMe3jQsWsc75A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 1\",\"description\":\"General surface background\",\"created_at\":\"2022-02-25T12:33:23.024Z\",\"updated_at\":\"2022-03-07T12:03:57.673Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"#\"},{\"key\":\"24c63d9a4a58b289417c6415d011041b3fa9e164\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"136:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/XxA/oCb/Q1H3yXZXxwXqxL4D/style_thumbnail_1.png?Expires=1651449600&Signature=Q3qcylq7EDKq6MSisV3dAtThDB9Wm01p9S3sZoDlQDQaFqvnpYGtE~ODtjXSxk8z8bGmUuHyCvVSg4XsbVDSlfd-Mwu7xlIRG85Tv490mGZW321suuu3T2~Zu~qBsIe2bnoQl2WmTrZzZlVRsSGhf9e14PF5ZNKVAK86HaQ-6iDwcldhQ~Jbz~2i1Rj9tGyCWI6fYLwMtTXRYWSR0nxBmb5tvOEPYk4vwQsX5eRY~uJF6ZN8pXT~HCT-qYuMgUB7Le6frJvyT2vGIm1KoBiVy5HFSB6T9yUIxEXt7damwAfXBTQ3qVfCcqmsbnWMFAhuk6FKnZfHqJFK6~rkHK0SHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Foreground On Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:15:41.372Z\",\"updated_at\":\"2022-03-07T12:03:57.668Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~9\"},{\"key\":\"d426bbcc8c94c04f1f91b74507b8aaac59e024d5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1412\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/G0N/BJi/JdPobijUXQpudepR/style_thumbnail_24.png?Expires=1651449600&Signature=V88oeQk6w0FIfvCrOmYf1QdqopFU9cOt1Uu0UX1zw8VS19-ME-TTlpq5HHB~kdJVyfrw5bKRn-jBQvqJBagH5dRvcnXKQC39GH35-ywrTXrB3tHA0FjuSsqBtwsXocvVQ3tO9Ifm7DNxK16oXAdhs7HqTt~kemXgkzSwDhP8GpzdSu1yY~dVLht1qLfzW4hJD9r~2GRmzP9ZS1a4Bbf94yoz8MoLPjUXeaikeihA2Wlf1E6djvkbRvTdDcSppyykM0UgF6HSyMtxsnaKY9hskheB4dl9SYNTjlON8SuOsnOZmyzWwj7bcGYLwTn75ITqm5ybVy2iGAO6mSHJsZVRAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.594Z\",\"updated_at\":\"2022-04-07T16:01:47.294Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}{\"},{\"key\":\"ccbfe8c54900bd4238dab48733ceab4e2246d4e5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1315\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JG3/5cT/wTfYEJGXpauE9Z8T/style_thumbnail_31.png?Expires=1651449600&Signature=HoZjeAcR21HYflwwuxJEHdgn6sk4Lpuu9PgSWdBklXBs5~U6GkQjwVIed3NCxL13EMPgQbWKKhIAwOhSuDbt8yyoWNyIRK-X6taoX30K5DsLuSewx-xufYZEm9J~3R~cciXxwsCUafGj6nzTggG~G39IpZo7HzavJsyXPJAGqIiFGaFQpjkuDcFquyzJmnLffB0DNsIEc8X8~1Xd-TRMs997w2DAqoZSd2YYokZkwV43USvlrw8cAo2ipqIMQLp5S2hVEMacuPxuHNkCQOHqtnBbpvH4aDpt9pCxxVyJRJdflcm1h-s96VsvfQZoWWCHeWhQQBaxtl5pYlJnTGr~Sg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Text On Primary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.667Z\",\"updated_at\":\"2022-04-07T16:01:47.286Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}O\"},{\"key\":\"c4b4f0ae82dd56acd14102aba5cba037fe849733\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1323\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/lIo/PCt/gUza8elc7MnOOyxp/style_thumbnail_4.png?Expires=1651449600&Signature=WFsw2A4~Suk2vW8jlk4kFjr23WpX5oXQ32KLi1IhoZfF5rbDwX1u62oDlLGXGwXhhzDC6Ty2oE4QhkuAwQG9oz4PvRydH1uyHGL-Wqh7bdDnotP5B-xnhFZCYtoPFgrnS5Tl8RBtNNan9oQTknP8EOF-z4KAro4j5l7ebf58QeWrhH-2MlxC8fLKneB8f9yYDqqECK6bfSZrDM6cJJes4obp1HQ3ImvJiCqrCXD0G6IxvKjbos4R8oahfZOdA9pq~HVmJiANSv-ViZUh3Sz0rie7wEnf01wKFtLV9gDjRXojv6i6etB433Nyo1m7AibyPFQV8HJu4asCrESxA9FLLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.674Z\",\"updated_at\":\"2022-04-07T16:01:47.280Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}\"},{\"key\":\"c00fd69d077ca84f084ffd398a10d6b2660cf163\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1312\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hGW/1DT/5ZYN2wLpks25Wmb2/style_thumbnail_35.png?Expires=1651449600&Signature=I79IFIIlsijbZBsh973IkEP-wdo4s32~E0xQ3DYOCGqsrsMRjLq9XexiTAG2StmITNKGxzWgu8N~y5aC3LrVVQdviRA8R60PcdKJUfK8hEXfMVF2Lv44nx2gpQnthD0jR3pAALLE6~iqiLrMm028FKrIv1R8dBIFh~9a4lXnq8jva6Um6d1NeYNS4-mzpzhTYfTr4y6tp4oZbaO4pOmyyuT4mNYJfSDmy-BbCHILXY5jw5aF7tAVLqzkDaHpGlIl4p8C-ahVqyJ9aV11dZiowUxP4O-Q49VQ~z3aI6DwTsXCQXsk26ywjiaPgThFFSK8G-vHYoxlOdkZhOKGb8JXNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.747Z\",\"updated_at\":\"2022-04-07T16:01:47.274Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN{\"},{\"key\":\"bcd86bf284a03ad183ea1ba56ad05474058ea1af\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1307\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/K5n/isp/Okih9paKLXwHUuii/style_thumbnail_36.png?Expires=1651449600&Signature=b3KsAQf~qfCzlTGwOsJVHpTOo4VWmB75M~CtOZJZe~wDFXKtN-HPi2tlvvjWKv3Ud0fh7AG7OSLFu63HDfu-zIF7O4QlLZ-b-lr7N89gQT~osgqHst2jXMMaRUeywuhym8ITk4b0UYgpWv-1aRZ3l2cH3~GYaPY1D~B6-XriRduSqyfVj0MVTJWQYAltWED-Adq4-yfDPQ3B0ZNeCN~QVwP01LwWapajJVcDqGtEOgLMHh~Ptyl~ql6hD6UYxzaeS8MJ6jL3FxWL3BGv6GMIR53-4oFmdjsNIBdqkVdMXFTrzn-sGSv9K-quiRVLWlprlj09MQGwcumsHd6mXXzYzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.742Z\",\"updated_at\":\"2022-04-07T16:01:47.267Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN\"},{\"key\":\"bad789d2a0e03e2cc914d9dcb6592f469f63e139\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"30:1309\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TKu/RTq/iP5qEMENRIcDam0y/style_thumbnail_50.png?Expires=1651449600&Signature=UhtrQZ2~crBlOuWvJkHvL0PWpBIqsMLMuUsUEJs4D6fy76qkNX8KIL50X3QFVWKw93FBv9WENA4abqkkbEmgCmflTDsIigVWY8b3Y1IFU67Yo8Um1d5bR1BL3SKdtq00K~Y1zq~nK7t8GyT3aZ7pMwfTtaQH-oBy18eNwL1wOC1V9O2h~PaxEF4qVvf-W90b0l6mr8VO3aDzX7S51xGGpGPYXyqq8JX77Angn6bypFq9JvNdO9XcMopWtKh4R-Vt9i5wqng0vvbIRcIO9pIgTE3hAj4~YzzUWjJ87z7ytO-ol9s1r9eVqOXY3GW2Rp96iZcMFLo0fv3DD29v6qN5FA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.007Z\",\"updated_at\":\"2022-04-07T16:01:47.259Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNf\"},{\"key\":\"b2a48612311e70026985495141ff5f9ed4802ada\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1505\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/XHL/e10/jRf2hIYn0UWJWThk/style_thumbnail_11.png?Expires=1651449600&Signature=Sm6eOcndb2TqegqR155egvzODVwRbhh4tU1xCiU-yWqlg1J-gsfKNlY42cpuzaOoAr5Sl40kvXwFFxCUZjgo2iwM8ISH0Mi9tRW3w6EK71cZrBq78dQcCqn1JUmRPGAXiqvawR4SZcOPFl6uXSghBgQuUZUqKOeJsmudQ8qkgJwQdkGSeH5wxlUNW5iqjNB7JKHI80SgkWkSjImv~LMYDo8y6E-z12TvQrR8Tt6l7RY1V9nqjn22kJrJXpoCi89cVt70a8mi~6npJ82Bv0IfKjb1BVP9lwek22PjDfVjwu7xFUaYK59UHalz~7PSG~NCt-5FD-35D1d6BTeJgD20pQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Multi Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.532Z\",\"updated_at\":\"2022-04-07T16:01:47.251Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e6O\"},{\"key\":\"1e00321cc9fc05901700e452183dfb6f58c6b892\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:741\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/RCb/c8Y/TFAhk5whZVprtldx/style_thumbnail_58.png?Expires=1651449600&Signature=TXZhjJsZjS4BEAslJfHYHfQF88KktuP4~1Mr9aPoDQaF84ngluaprMz6HiWcXQYuglwJkGnOuEWJrNay9aCBJ3L1BtzLY0y8cMkLgmBWmSgIwyD1Oh6UZ0OaHoZdQplkES5F90yUvX3v3pkJdyYm6dmpBHzhSuWShiJ3S9SdIYPDQ2udGCzN2WwbDiRHMObtFk9~s3YBIx8eOtDcqiCU94ZoZ4pYqPa4WuZkgqUT3Hf52GZ4wjcATyN9JMvW9H6ixvGNB358hHLBMh6IBKcptmh3HgoEW0uirJ6t9VpuN2cQHCVYCTRM19I94Ja0ZiOmiMLdTsCN2BSbc13KwiaQwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Disabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.802Z\",\"updated_at\":\"2022-03-07T12:03:57.653Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"9\"},{\"key\":\"1b02d1cb62de8733e3107dce1f7bf54893b7b4eb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:789\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/8SJ/wDz/dCZQZ1mcrMfwEmEz/style_thumbnail_80.png?Expires=1651449600&Signature=hBbu8iDIwjutQw8GqO0yNKEZZUn~Htahmif4t7IbGsMbCqh40eRyA3epJ1O89zBfQ3SAHpk0PEVfDU6lfeeILkmywq6S3q4pYOENRMrUjqIR2jlC-KtArwJt1uNob8Y0nwhKIP7RWzg-wWESoSJZtthmEvubaB5lOGBpBWxri16uaOLHBinYxQw3WJ1b3wFOzrDUHBE1wB1i1zn~hTrcATLLogyd0NFKo6ibsbEFW4~fafLX1YXlYHrYuLO2RFA2JCXYLdGNmaLuKgSTack4CXJgLOBaOZueWqngFL1ixf4Nrx-nq25z4ZHmWoEQ8uQYmXPmUzy3Pez2gZPojfNY1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Favorite\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.924Z\",\"updated_at\":\"2022-03-07T12:03:57.648Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"?\"},{\"key\":\"171aa354537a7df429f0a52b596cba8155cf35a8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1431\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/igD/LPW/MhaU3eSWUJatcG16/style_thumbnail_63.png?Expires=1651449600&Signature=Sx1G3ynj5i7h~cNyN02qiw7A4SgVc-0akUTRTYaU0hNtptDkaSsB48rrwqVcriuSr0LHgqOc6iU6NWpB534iSy3rpE776zmc6TItmrgQyWpb0sgXoPFcPtBvwuqO1tm~-4ryPpqkqbXT~FyNn53-Y6-31A1BRzB-bS9Uoq7mxWbib9ugLV6zNFVnFF7mX67BNLndd~IWMRxc-2tbNjr5Au8CkBDWqp99a02C2FdUxQqWS6zFALFQdg-jVYRwdnrGc5cq0A9t6uG5jRcXediA2e7r6ouR1ZfnUMbyv-UtisJ16xD42tq0DefIV91OX0l6l9reZzkIwrbmACyO~7D3PQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Critical\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.827Z\",\"updated_at\":\"2022-03-07T12:03:57.636Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"M\"},{\"key\":\"0d38e93ffef3aab73a2c3eabcc8b28d600d73d30\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1525\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BFu/Z0j/PWt2LnllQq7CbcH6/style_thumbnail_51.png?Expires=1651449600&Signature=DZzKKpEJScmSSMiu1M5apZpSSc7XvYOHp9oGBY5jnsyy7FIGIcwHKmk9GLdScUmo4Urf45xd-vxtNXLoNUUizKXmQrH9LXnt9YmAPop6cUjwwWxTBqDiWBRqhVSPSsjd8POUVqWykHejLKzN5p8JDVxydihoMNOzEq3sExKdRlAzhM~5T8gqYRYSfiwZjN4ixS4q5g7cXVFeykIDAgUncpxDryETgCj9vrQKTyi3gPa77muhjEZ~lpStqn3wGEFP0MwnPLJ~NnIDAIDMgRyF02OgUECPycjKDlylDM6vdeKh3nKGlXeCrL0e7VuZ6K6tiYfW0jDhgwRl-WIjpb~j~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.767Z\",\"updated_at\":\"2022-03-07T12:03:57.606Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"c\"},{\"key\":\"055ba18d27bbc736d810f502e4be9030b754ea99\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1435\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6Tf/DP7/SxHoaOpr9IbLKiau/style_thumbnail_7.png?Expires=1651449600&Signature=e8e9qesu6v8nHT4OQK2SpVhGcgyjYhBorVy52niM1cSzqwG5nmLHdhm7RtcNZNicLVlBLPgXuMRLDKqlG0VCnL78g7A-XoHlVOhd6YFGz0uDTNbiffKRKNohvoHsTgGiX56UuhKIA05WBJ4ebXaIz4RrMwyLwTFRNG2HKAl~5qVGkpNF9ejtj7bHT3fzH2cQkDvOfO2Bj7ql9ywg622ZyvAR0qC2cdRz4n~nFMeyPyJ4SUH2TG0Hbob0MuJYHeBU7cLHox2AACAM6zdaADEDkuLkNbC5RjkmTpvWX08RSvidq6hVoU5roFNddXNx6aCFiojjBf0u80Mls0Prb5iOrg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.523Z\",\"updated_at\":\"2022-03-07T12:03:57.577Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Q\"},{\"key\":\"e1638c602ade488d08d8c6dc5080b264bb45180c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2374\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JiC/VaE/JL9TKDpTTfS5X4gC/style_thumbnail_107.png?Expires=1651449600&Signature=M70Lmz22AmwnJEOku1Q2dTGojaFfrDrqScleMbRF3Rin4aD94Sz63UwUEppnaZLaewKD3tcCzn~Q1lsuYlQpV2BD06fIdfY~X-Y0vJOxIv3AmzFs6Mardjy16h6kOKHBiJeNcJ76uw74XkuCrbA3Uvd2HIvijPUNlzapAh-5L9UPkBpzH42JD8hZgN3j3eyqcrfJgrZrmrtfTO34vcTvdbgsbF8bU-FCVFL472bi~k4GtsSNZTOYMZGCw8uEOPbMqIlTDWTua-PVhGkT3IASrlIFVj4bhqd8lgmtXOrzGqCcH8-B9gg3pGQR3xBObqQMBUOR69eAxwfuK-bBmgvqsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Disabled\",\"description\":\"Background color for Disabled items background\",\"created_at\":\"2022-02-25T12:33:23.072Z\",\"updated_at\":\"2022-03-07T12:03:58.295Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\",\"},{\"key\":\"dd296095aecc4bdde4e6c14b3af3b509be52056e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1484\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/alc/tbm/lW85fZ2AWhqppBLj/style_thumbnail_0.png?Expires=1651449600&Signature=dSBaec3tyMuvzc96dt4b1hkPyGVXm9D9iXJkl8L53ok5U724OSlgNrHpxwjtJoXONLbaK6bH2Dsfs1OUKEYuY9QaKhlDW1cY1dniIv9D9OIM0LP-7g81HXYemqZojNuqf9dlwhHsa~-5HhPh3vJHMaL2pe~qg2VvDuXRdaas2b4Z3shM8RcOyW0ozbReAFGsDPcc33ojMwByeiW33U0dPW4EOcJNci1wJSPg-gHuzdNHSJhyBnofF3KLatClC~fCfOPNQbEThQcL98tjumXjtkScMgawd1uQmrzcbKfMeJHTdi8Puy-LZTpPKSJEYnIzX5qqCxl8vAD8seBxUR~-xQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.797Z\",\"updated_at\":\"2022-03-07T12:03:58.276Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"T\"},{\"key\":\"db793ef082f1fa1836a32e8f9bbe74bb9f6e433c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1520\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vNL/IdJ/5G3gIZAae4jffV4O/style_thumbnail_7.png?Expires=1651449600&Signature=eOZjxrFG5h6PeuDuT~Xk9gSmrJA3gbFJ5PDuSmEIGyX0zleH2~MwO4gT~GK7E2IaT0vrEumGA0lS6jqrB~BHjbgeXsbc5y~BghPaIHG1Kl-Ql6LikFrCAGURf1U74vtOXpnzxihNKcI3A1padDs7v20hJTlC~jvvq4L0WZH1nNyP6Mi8BJII2JrJY~STYTl9MTYHcXtmZRzBMFNhTP25wNe-6L9C9Lkp86fKlUwy1PtC3oW5lN0lAbv7qxbRuM5iFUCTMqu2FlZ9gx2XAiCrwD89XkupRrN6ZiXDSubBROeVEhlKoeiPVJ7xS286Bk1fZvLGtvFJoc8StZ0IVXmAEw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Announcement\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.077Z\",\"updated_at\":\"2022-03-07T12:03:58.270Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"^\"},{\"key\":\"d1577c6dd974cc1f532e416ffca256df07b3c9d0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2396\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HG6/Dtc/ntXuBUW0IR0GADt6/style_thumbnail_4.png?Expires=1651449600&Signature=GZVKnhkUEHs4Nuc6xhBGn~ySoEMvH~3bmZCGcyyd4mJtFXsM4AEKEmE43XbWhd9u4AhHs1PgQDsjWWPmPmR9V0JrImEoT~nDGYH7GaZWcloX88GUg7KenL1LGtOD1HeCKZDndPC~CmOOf6J1ewtSThOTWbfeSqSBiTNBeSXAFLaH7Bm65E-c6DW2ofVnIDXTaI-9gkJD8LIVBtsa5ca0xZ95XElNR5chsy7EcdKwdf-MJ1aRoiUvXWMUUv5fgYskkVbr46~MutG4SyE9wbAyp9KWj6wVgcMJ2V6UrCzxvziUuHugrHDqNZpKWHAuldpkeAmEvYcbOUiHG8OpJjbZjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected Low Contrast\",\"description\":\"Text color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-25T12:33:22.507Z\",\"updated_at\":\"2022-03-07T12:03:58.234Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"4\"},{\"key\":\"cf6767f66c45888b1e41ba493a433e3273a89d8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1483\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ba3/T8n/QwtNf0y1KFxr665k/style_thumbnail_5.png?Expires=1651449600&Signature=EmFXlpOnq52clM1fpIlKMPMZZ~BvZxOJf27vbhzYkjcqwHWAY7DutTbJOrIUsBAsmleIgYTJj2eUBlJW6sgQTo7-rOuAxtOs-x0HPm5KlUHzTKNDALgZjbMJ7xrZK1yVhu9Wcnf728MGykapQC~xcWZ2scLR-6FmvG6UAMWyWRmLCulmtlPlEMbE2MTd03cdO3Ns~7Zx1w3e7EOuG-2cb9XLEJEPal-F6BpmLX5-zi~YKfeNzl8VbjHmX7t~KBIvM7grmHDVutru15qDkC7UkNqax4KZqXchvmxpE3PG-Cuoxth1N7D3yiEq4RMMZgzBSp9t0vWjSDLVmVzTTbhNtw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.887Z\",\"updated_at\":\"2022-03-07T12:03:58.228Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"S\"},{\"key\":\"cef991d8a5ab81f69894865025e98c55a38ca11a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:457\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0Lg/JHc/Xvjs5XjOf0KB6QYg/style_thumbnail_103.png?Expires=1651449600&Signature=GF13CaE~SbsWbe8OwFfUDKkfg40MpU8oRdBe5gMeVFidL6W5tVAnoySjWAeHIkSaEoVKnPCd1dtKYYPLAlgg5tSq-7u-GBHo6PYq7Ykp~9bvCPd-jzAHke~kpT10v8fyf7SxxwPx1Wl4xLdQw~CB679QrLjgtX16tFPlg-qwzByW1l3io1NRa5vl0V2e1nbKSM210m3JT~lR8lGeKk8bXyRaTVGjONguc9WjWrUfNdFvSFTleNANs0zz7iM142ZyKQEaCEu-eYOZq6CRk-O7ehA~sPGjOMqd3XlAj6C-bE1Uv8Vh2J0xl~5ZzS7jdVUhd9nFNYNHwXQr0iOB7uDBBQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.047Z\",\"updated_at\":\"2022-03-07T12:03:58.223Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"E\"},{\"key\":\"cb27bf455820278d574503da16a9577b830f5f86\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2375\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PDr/4Tb/dNkjZ9DfgqakEW7V/style_thumbnail_0.png?Expires=1651449600&Signature=EVYVZOOY4~r~oqdwMVwzxQ46CZZ1f2acCanQmIg9ydQ8gxYqs4b4GU~GWg~xyLwI9QqB-~e9heOUgwiuxBDN2NuJumHLuV9GKY~AVHCz3wdH6XFgQAYJQPm9BDpbZLTR1brxBg1spX9WBNnl3EqfCbuS4SLr7wmqvLsg04mMkhs11MuEhGXMuo47raX5Fy80H93SWVpdbzhfyI4i0qQmdxj6xWftfYmizs6gNbXhVsy22nT2UCXLmd62~Ew2aK4271KALas5MSrP4kSet2fcTc02HNIsSq9FYhwSSpzTxUTnz8Yqqj8T1UIFD38GNe5O~1sKsyWP7EKCNUpFSrilQQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected Low Contrast\",\"description\":\"Background color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-25T12:33:22.584Z\",\"updated_at\":\"2022-03-07T12:03:58.212Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"(\"},{\"key\":\"c551939b9ebbddc410173b4f09b2d6b0bc214962\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"20:527\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J1E/uIb/MsdfTb0rriFXVONQ/style_thumbnail_51.png?Expires=1651449600&Signature=amKWngSTWVdtUPNCmffXKLkEXlsTkrXZM72oTEfXOR8Wa-7PZzcPWtq4kxEd6qWXr1LaVJARNTYO-w1YmLLgOlVId~FiCA7jW4ksyMBZA0fHqq1s5CpuU6atYGtuAWLjJes~nD~mwfEwZ7ZsT4JUpIfR3kgD~8Z1OhBYspCVMxT-yXwQSm00JHl2A-B9SPxsdnPofGvADxYdtr942SzTT6tOzKfEgF1wTpJMcJsY27QO7ADPY0DWXyHiO2veWIGfsU6otz470dj7Q5WoaxX5RglFLMtIkfjwS-vgosl0KAMpjPjd~fKsBv4aJd5EX~pKuGPLgEVWVgFnDDjX0xIujg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.012Z\",\"updated_at\":\"2022-03-07T12:03:58.207Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"B\"},{\"key\":\"c53592be88467964579e37b727ef47a4fb6b115c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1436\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Sqk/r8w/oFkoks1wTBPq1HpZ/style_thumbnail_59.png?Expires=1651449600&Signature=THtnYs~CCt-SVtjHkatWxFZ6qj7owSBBqPBNNY2k5Xjc9sHZ0P0qpU5aE7UFFWkl1ScZ-GnokiLWUdzbNQJiHqBDZl8kqjQlZ44pnZ5-J4cDeXyTZzkP6lFE~dq71jjGK-X0HfoqX~vzW356c1-J~lzZQnpYOglrICzxEXlfDtg-UPLC1kGBbbMCh6YtKTrbOp3zP2EBi7RL5fFZBGL38Wgb8LZCCtArkWzaR4ZAW~g2O6CDYhK-MNamurtt3dpjuFdmLRlLuz1aXaS~XocMcoMzIYinb-vUKmLNPW9~iyt2770TGsr1uDD43aXiM~MdTydrAS~jnx8XNfh5ULO4xg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.807Z\",\"updated_at\":\"2022-03-07T12:03:58.202Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"R\"},{\"key\":\"bea4623dc162779967304c555bd75109890a5f15\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"21:454\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ARi/zXP/8LCLom5HocyIjW0X/style_thumbnail_113.png?Expires=1651449600&Signature=A-K-W9C1diwX~1H-sRl~YL2JWZ4pfx4q1I0u~MYEOREGK0~FrrlnMPDgwpHxK9iMczWeUXIyDi0bHjf9nxeWqZLIF-Yh-yklwJqaQxc-9xcNa5LvTgTxRUQ6LqL4J4qmupEUbnfQdylcIiXnqqo3echCNEftD2yXW6~CLiebzlMKPaS6FyJAsXdJ25aoPa37~6SDUXzEB~5sejoSe-zmAUOy8~Syz1v-CXbnVv1cPtqcWn326V-59hsKc8qJwozGzVQuK6R4LRrP8u9CoBj2Yq1cM8MeQzeUMONBJjRcROzuhK88SUQ-6mhoVXbcjpE2EKE3Fy~wvdYVN6dzPHa03g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Foreground On Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.101Z\",\"updated_at\":\"2022-03-07T12:03:58.164Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"D\"},{\"key\":\"bc570b6f33e00d9ef7df42a829bb6f9799bd08db\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1486\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yJ6/nrN/Rpi8SgLS2eotSZ1f/style_thumbnail_93.png?Expires=1651449600&Signature=Mlthoq27NLjTgfOFWxMCsPPDlyymFR4gTOiMWYkKGk7ZW5LBA~wpNbi8BUoAkNo2sE3WsnVA-YK2Ueg6BVH5a~7x9z7TId5IY9GADNnxw3Fdr56RMbskF7N~dmUIwCpomtQDwoFyITub3R-fymjKRFJ109VYD2iuC5Io5ub0vhmqKnKCUBzLz~bBM~iYxvhrZxCC8z71ISsmJOG98RQu~o1AGXJFqRUmo~oHrKY0g~ufCCi31KUFC9D0~81RpnluMk3qhGfRc2Q76BD3f4jKVCqkm~7hgGzNdPGfeay3yi~nX7wBynZfgOKrSS~fKQckr5svRnln6e7RlEf83hiXwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.992Z\",\"updated_at\":\"2022-03-07T12:03:58.153Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"V\"},{\"key\":\"ba9758f41653205459c7b99e2e4aeb2f31755331\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1430\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2jt/RN9/Sp8KHt1jd78ysz7a/style_thumbnail_64.png?Expires=1651449600&Signature=Iddf0JKEvCCEDep64Re-qhWWWSsERxTtHmD6rPKMA9XZZlhrZG5xpAOBuQ4MBhAhju50U9vPbuWsEnV~GInK3mC4UC7oV02kLieWLiZHJFlaQ2-WqfrRCgYbZZakHtb3z4iMS4ARMivXHmsRNvcxmOPCuRP806KZfKfWX8se5HZBo4FBUeRA90B3Ju6122uFgwhPP68~8wdvnAVEoz2u5v6NUzF5~fEZyJ9uF-iTiJ~Y~1fvTXqGeyKtnjxcXWniIvg3NXGBfdE0n0mk8Y1ff9b-EJSrEWTs4yCL8BDSIX9Ti-urc4dZ5YisW-m23E69VA4KUjnNUH~-6jp9dFE~~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Warning\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.834Z\",\"updated_at\":\"2022-03-07T12:03:58.141Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"L\"},{\"key\":\"b5cd13e28cd4200dda7d02b8494861e466978dd5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2384\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jcK/qd1/PRXf5ebUjYiS6siI/style_thumbnail_23.png?Expires=1651449600&Signature=VLSV9sVMYxy5nopHu99bB~eQx660hywn1B-o33yJEXhFN26pl-KrioBJtbZCzBfIwHyYsf4r5v3PjlCb7D96Ged~K1db6ksDRE7tUmPC8zl4WoqfvxqH~8gKbl1AVFY73lW7B62U0S3puGKSeaYbdY9Wit~ZdzH5ONQHET0wGyhUqzNQVcM5MWmEArH7rd5s0CJL30lEiqltThr~rcGJnkV~j3xvAfuNGCDXd6JyaZ7pAWzD3ZL9H2qKmqZvhCFpBX27v3LBfjAiUJKlfgQe33e~s4GCc995xpswRiE9ciqSY90U798yjGbhG5ftJiZJWR7LueCs7mg7lTfAkpStMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Disabled\",\"description\":\"Text and icon color for Disabled elements\",\"created_at\":\"2022-02-25T12:33:22.606Z\",\"updated_at\":\"2022-03-07T12:03:58.131Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"2\"},{\"key\":\"b44d68edc095dc41acaea60028bc1ef76eca58dc\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1514\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uiX/Tn5/xee425VzxlmqPIcl/style_thumbnail_72.png?Expires=1651449600&Signature=cudvPhDnja~EQP-Wcz8-klINTdhkBopimwGmyId3lJ9eoHTvECBnBvekBY88hXwRzwFCy1eVL4ShfmOpyIEhpNxwP6OBn2WyFY0tW7EP9c~IpqqfvnvwiSwK0UZg2kleJvvXBRfnUXNfN38yISQk5MD8awpqY~a0JRa8QaF50TJ1O11eMfViNIn45DYde-5d6cQdau2DhRdZkfuBHt6u4wwO54PyyYmFxrITBk1i6AI4LL8~z3BxVoXENy7W6F6MhX6Ay5VX6CAk3fUiER-1hMJx7fED1c2P8wbLC-GaTATRsMGdu2kRnst9rNtPjsC0iZcWTPDoim3nfdwk93xUBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Operational\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.881Z\",\"updated_at\":\"2022-03-07T12:03:58.125Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"X\"},{\"key\":\"b021a4e2fbe5872cabc2af3a8d0b523572483698\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1085\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cTQ/ka5/mYkfq3A3JQOTfaKR/style_thumbnail_71.png?Expires=1651449600&Signature=FMD9zY18jWPfU1~63s7ON46-dcuPs0vFXDCZK3ZQnzZ6jELdcbc5iY98XK~MzklCGlKg7oTETqmUANDeL7OgzCw~gsqbjIcA5EgMvd7C-VMELGXkRM6WlrO0m1humYSTt2lkq94JsTrVIpi0jIy9XDOLa7ZGArP7V2VBhdOXcvn6P8of5mtXar2j8j7bFtjYRu0haEUpWLyFdekLuSSo03udOfiR81dm~uCHvZKGOQy5rFJCjC77yXq~uVTkEXS7HWRmfZ25ZXoNqtOSQEdDvdWLRWsKRhAHU10cA7BIxv2FKDWk-HN4LLBU1d3GUZEz0liXmFNyGqav35MRp99-XQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.875Z\",\"updated_at\":\"2022-03-07T12:03:58.110Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"F\"},{\"key\":\"ac0cce503094fc7f8764978d28c95f0580ef5f8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2380\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4Dw/WWM/G90OoQJg8fif6jjG/style_thumbnail_0.png?Expires=1651449600&Signature=T9gWdk2wn2rlrgvCAUP9UcQwj4EmZYgx~7wfokCAoL-39k6kvtr3GkIdvkbrpFZ03ilSbaw7ClenLC6eyLK58BGFjdvXR-7hKgawTkxQWhGxxSs4hYI1li8P0dKkjhP4LCQ-6jVGac7cVj~njRykPSGAiBLifLKWvL3bDyobOHEHv77UhevBZL8tATrkTwi6DFONTsw3XR2l5sdqGH3SjVJC1L3GyJiGLGkW2IHbqpoFoD71SsF3VggVGxmNuZpqDkJvb9KpmLqVOUsdS9bB95yOzwMqcpbuREKFb6QqyJ7LbNd28340dalncuy2sob8zhrBlISEKkDR9Tfts5o-hA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary Inverted\",\"description\":\"Inverted Primary text and icon color\",\"created_at\":\"2022-02-25T12:33:23.116Z\",\"updated_at\":\"2022-03-07T12:03:58.083Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\".\"},{\"key\":\"ab4389dd8ed997e70667bf1e90f6db750385a877\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Cfg/X6z/kQgqFwGnUVnxsxEV/style_thumbnail_5.png?Expires=1651449600&Signature=bsMm-PAHqgo~99lKs1sA8LYhzH0QCRMXdNbotT5QpdWxXXWvH0nsM8xzY4ZhxxHDJtuXCaJlE3YQxwzjk3x0d3bsvOPkeKd5SoW8xMEEG8snBUMCBB9KC3RKtsQKoQgVGBEsaVqc166K3qguZi0ZAs0C8vu4G9VYUvIqvxh98O1RUK4Q1dGynFvCH5jH62dsE6mwAEdD8RLdWgsnNe4tUZqoYhPXqS7HeXMbCGMiJRdddloSGXTPKsQClDihkIrKVUsLSmB6mD40KOogdEkHTt7Atn6QabtND~LI8RaWgCXTtsHUam7Gl-OAJNtK8AGU7PTa3q3KTCO42rhNLOYDMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Hover\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.541Z\",\"updated_at\":\"2022-03-07T12:03:58.078Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"BO\"},{\"key\":\"a96fdb3b74e2c5ee64ca7a24a97529dcff020a01\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2373\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Icy/1xa/DKhmvmHhfJmupwUN/style_thumbnail_78.png?Expires=1651449600&Signature=cc2oHXXkDQS709bBH5LJkNygkcTOjUrFve91zKa2dPJY9yTVdJ84LOLd2FXzQIWWyquoWh-AKvlpuGyzcHA91LyjOkFHz22WNiyMKQPrAfxN1XGT6QUIq62ypOJ-hrMrUw1X6pLZEQurxlKVsiztMFh4HmSdloYuGx2WXN2hoghTC4X9rqPJ4N~HQ2JuhO-nxwk1oTRt2nen7Cbkle8mk2yiJc8u77vLQC5c-Nx3enB~U17LHyWB-z3xdXABCTJIBFlLtaWrejMJHlxcL7vPdiE7vgAGmEoRm8MpCAjjP4OZXWvpXSj~-z2xPeeytsuUKVKw~6YYwT2sPfIdXH97ZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Hover\",\"description\":\"Background color for System items on hover state\",\"created_at\":\"2022-02-25T12:33:22.913Z\",\"updated_at\":\"2022-03-07T12:03:58.047Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"&\"},{\"key\":\"a96ef43958dcea881346ef078a56169d988ba943\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0jG/eXQ/vEtmQdfd2OpgIhkA/style_thumbnail_52.png?Expires=1651449600&Signature=F~d2honGZkUMFtqR~Ezt46bUEUtr8bYhAc4VTO1vsSW-04HlvyrYY-3QLWeRNjici8ruu5aTGbTjdt6tbnJkArDhqQU-T5z0PNl0NBKRY0ZcmQNG6nKrtlXtjP1zz7aFW1txkaBTH9WWSAMw9Xlh9Hjfd1tFTT2kxx02evxHYoH76hYibEInucYs3eWEtlXyZdIini0qp2IOzlitQnvI4~ht-vbYCvopk-ri12VSUQZNsWHeSz9hDt2nuJDSQ02LHma2Cxl4DhdqILZX3OKhyzr25zSosjhMvtwFRwgXNpPYapEMnM5OzrQ5AsSmNSYkynNmGbJ-BTYpFy1w~sS~ZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.545Z\",\"updated_at\":\"2022-03-07T12:03:58.042Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~<\"},{\"key\":\"9738804be910310373d47e2d8f7d4a721a334b5a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/REj/Xmc/rG11qv1gmzOeIXKq/style_thumbnail_7.png?Expires=1651449600&Signature=KeM38DgxMcC9DFhFvcK8IFzwQhbCulnmFBsFoFMb331OhXYYR25rOorB84jiDTC2QEq9Xf1EmEDr4JhIp~FiZC~G4IjyWc-A4fFWkvk2VceB7J~uavLJDznJaOx3MNbAdz54djTkAMkfSvByWLXbZok~Cq~6ODANcQ5dKSmkSc3b1HnTESkq5-4J7Zvo0Uj8T-dC~bd6LUDxPZ1ZQhUw2Nt7OynCCP1kQ3cppD~QW0d1xdw773rpfGMLS3sd9pq75JfSudDMeaHOfeo5NeVSoWKN-D9NrWNZmW5aMiYqQm8dIotQeXNjUl-V~IK~cv5k2rxC2zrwHBjY0mJMp5shnA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.550Z\",\"updated_at\":\"2022-03-07T12:03:57.989Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~@\"},{\"key\":\"96513e1fc0df9ce1cd4aec773a58d733b2110754\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:752\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/h6B/EYK/oMA4XtP7WYEikRaL/style_thumbnail_67.png?Expires=1651449600&Signature=LMHdcanN4KC8Ya5jBzxB0ZBXADWGjH1GA8POW-5Sfo85rLEBp4QFBbO-oEJA0y88T7wDjBzIduU1oJVQ8JJi4D-GhZ4oFFplmLisyvnpmMd8zPcMBp2o1eiTtOesGeBO~hqV-zmrKX10efY8QFYLWDs2B1FsWdezuUSBL0wXsupZ3StSD2OojgOhMoYykZ3jNY8XjUMexpxepMcAAprF3DZErB2wsTGi5wL5A9V-2n6eWC~HCc~iuhcP1ZWzUp6af3vsrukbXaE2MyibCh4lCVPNtkR5cHiO1pt~-60i4vOPEya67LzgJq-VpuuyVmqwRaIxYwMh8QNFoaipj1Oohg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Secondary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.852Z\",\"updated_at\":\"2022-03-07T12:03:57.984Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"<\"},{\"key\":\"94da8df461ec560a2386b1efb90479311f97323c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2379\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VqQ/xpe/JbdtgrAEEbh7ADCG/style_thumbnail_92.png?Expires=1651449600&Signature=RkQ-wF8TUXbQnamSiNvUvQpSLf8zvYHeBT-bI7DobUmPRdA2DTimYvSPECjmT69QXJXla9-PzCaqO~gI-4PwimFbgLBYwjUQ05uVrGnnR6Oyaxx0J~bKPoSjsdwRVMZC74gzo7jsV93~E~M0P31-0jG~qXTFT79R87piPXUM69FNlPAAPlEJrxOtm~htPQfbnms5kH8HXDdPrpSKEXiJW3pN07Bh7ihZ6oB5rJlg9~FX00b~v6g8KYApzH1U0DqRpYIVGxGuuz8RqlCNKlPZ~0ZpFvZmHPssrSyoTdAzb-H0atMAf83mCdrawAYVXb~GKVfpoXL6kOT0mbcA98bLpg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary\",\"description\":\"Primary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.987Z\",\"updated_at\":\"2022-03-07T12:03:57.979Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"-\"},{\"key\":\"91347a02c61377cc909fedae52cf7f782e31b597\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:751\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/UiV/Rdg/OEuKxhHI9QvjMWNn/style_thumbnail_17.png?Expires=1651449600&Signature=bvqW5i3fxSlUD9tkV82JNAKAA37VZAKCH0fzf-frp~cFG6JHhox-qM2WO5lIaguqolUF-ExTppSwItGGp8qVCzEahfLIYRIW2pYYMbYHl2AQDNGTQ41-ZRKy6~9SqF4YKHbQ4oEd~IB2fxP9atXc30-pNNyCaBKZr04iDT8WCYFgtnJfbAh8mUnCebfXLQT71DqHtTY4ADR4aEfiO8nilyyhbnz8J40KhJQeVwGMzFpNTuxDJOF8AFzmYms8OCvkTzx-BiuuUqMa8eumcOy4GpX4WC~kZpVnC5uNBYOZ7s6HK3hHN8hPI9Vtc4Th5nx1zHzbRtLm1VEJ8WL2AB-W0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Primary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.574Z\",\"updated_at\":\"2022-03-07T12:03:57.968Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\";\"},{\"key\":\"9064590235fcda44a9cfe972f297b2f4edf31fe9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:740\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NIk/P5w/tEm5i3J9RbKRZqpg/style_thumbnail_75.png?Expires=1651449600&Signature=d6C3jFEwo5wZP6a-RZQFLL6C0Ar-lfVoZBXj9yG58jk82Ponkrft~avJ5gnFRG5o8DG3kQIEA6rLw~o~MXgNaiMzF4LgFVuxdD7qdq3VXzZLn0b90rsyuNELvrCiNESvbb~lzr9yZmdDw1GM-sxj~ztDX4eBzY8Y6e4mmoN7YAkFzt8-LcGZLqqAQ-4dtIx~Ztjhsh4vPXrD-iZ4aFJXevIDzzlUkTptj1vdYdPCa-FFclgyJJyXskVkbAGtUD~dhnbhp3hFO9G-M0lDN5if3vxs5h3AEi9fyvgdPmQNJh8VL6W8TPp9FwESK8qtiZ~bh9vQ7Myslq32iqLNzZSYJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Strong\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.898Z\",\"updated_at\":\"2022-03-07T12:03:57.963Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"8\"},{\"key\":\"8da708dc1659d01dc2dc3d41862b5aa5b06a5d18\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1517\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JZx/n7k/wJaBnInh7Ob62Uiz/style_thumbnail_115.png?Expires=1651449600&Signature=SspgY3ufwFeJx8s-3pxWwB3HMafvXbLpacFnHXdHDrECeAeFDSVPjwLSqX17jvn9jElpKOam9Aao5ugW6JmnWwFptjUu0KzF5uMQ8-aoVNJ7A387023heX4GZUlFN~LnhLEggStCdIe-augp0X81-o80S8mgUcV87gtzDhZH~mdcuGyISOZX8JYGE08Ik8YVZM6zdMAy8pZWVP9KCAjTwk79zGx7erRGoh4cHQCFM5TlrvgZPlwufPhhC043nwiRi5yOorRUFY7iwbpGpR8GZqqnWlVWB8OOtUgLV0G-mJ~OWYAUC6BV90wp-s38GpBrI2gGkpT1V-93pjcPHojuSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unavailable\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.111Z\",\"updated_at\":\"2022-03-07T12:03:57.953Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"[\"},{\"key\":\"8bcfd6a224214596af4c11357b260e57bc187571\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1087\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kxo/Kvo/nz2RMI7YajCdrf6o/style_thumbnail_69.png?Expires=1651449600&Signature=Uwm0sTun9-qJAlZG6nJMlqsUzheVi6I8LcktHDguoakKt5tCiHoGWGpphN~P3ebcCL5Jhb38mUxdsl7af4~1Mh3AP8--nJFWewdxBjDfkn1eJFFTDSiYABOXAG8GdII~Yv4sRNwFhWIhM8fkmbbi2iYxaJT8dbWUTY5JTZMtFZLlQWnusWfYEQQgf0s7IHdsrouJ0mkZ5A2p7YKTwo-iUpKIW~1d5hLV9i60LSA81UxG4TUiDZ5Jc~XJo8zZ0pZUxt62hf-2xGN~2N0IvVJ3f-Ht2qgOOABErnnIcHqnmKifYAGpsxHE0IoniQ1WeAAmG2L2yOJQM7AEBRG3fN-FuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Text On Filter\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.863Z\",\"updated_at\":\"2022-03-07T12:03:57.947Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"H\"},{\"key\":\"85f60944851eda177c740eeabe4c8921add5c221\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EFl/G6p/3S4I4DMHoSDTWoqc/style_thumbnail_76.png?Expires=1651449600&Signature=DArRnQgs94-FCdSPkhq01f7VXtDF1Ms8wv36oRLr8kULndBp2RtJuQ3GccM8oA5fl2LeJVhjfysxmKa6KF4xZjd3sf29T9nn0CUrdab2bwpXPxDJgHpaj6Aypy3XXguScBUIo7PnzoE481xPVkLHCiURqgN6YH5x1qULS461LUKWOLpOgO~2c4NR9o2sA31v63eRLX0F1IkRARfNLfKLvyPvluUJKogSm1Z8zhmOGO90~XGGwMJL0bTETP-ve8iX-k8TXqjZcKdVMM4isrJcI5Qv3l7q0mSenyKo56f74nzmxi6AktujcSDhlS-ShMwErOIiuThNHap3wPx~P~-z9g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unknown\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.903Z\",\"updated_at\":\"2022-03-07T12:03:57.931Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"\\\\\"},{\"key\":\"80fe13d6142b2d4c0422980f5492657edc2dd4db\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1519\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/S7N/RJp/1FBYqcQmJoYCKEfb/style_thumbnail_6.png?Expires=1651449600&Signature=Yk584sORj7JYNvsdPMs6agIHh8XaBQngVxhUXJGK0CL3eZmxpj2bJNcxs1zlBLFYL-P4XLv6hZcNLv2Sz0EbAMdNbufjRZlqZNtSlGjuJwXdcZgVQEuDYDeXLOzZeBZO8QsRbJ~aN6sTeV4jLcUlsI0vXnu5PP4OtBUdil5NE6Q9g91XuyTyZ8i1-sVuUNz1dSiaNO2S~uB2oK-3ZJ7P9VLr8LA2rKPVv6qzFC7V1zG56duWFSZ5WnuEBCHdIZOzOH5xfyJ95cSzPTrBEYTnPBLdY7ZyD-VgF8YyLGuvie0uBqWiG5HaJmH~VRPMqsq6I8pgmrzZQndhXjkKfBqflA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Info\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.018Z\",\"updated_at\":\"2022-03-07T12:03:57.916Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"]\"},{\"key\":\"7f4515ddb452db28ea9605e1eee249bcd520267b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"21:448\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/DjS/Fko/EdKUZNJzBc6NjBun/style_thumbnail_79.png?Expires=1651449600&Signature=hcsP3yvmxHWO~Zd4aqt0z1cEiiIRntGcp4Oew204EGfKPoM6pv8JKeT7lI09PBc5HF~vE5b8XEZ01I77GoQTRBlzWZbk~WF0WqJmiu7Bkhns4DYFvRtIOf-9UJNxWr8PYfyefGb0OD4TN-FM9dLsQ~3RmC1A~68D6dNR2l~qwMSAOZzxnvL0dxM85WzJGwlhODo1jy636jc68pxyBctz8EyY5jgz94sV6QbCHiMhUO6xXlys8ngm~bqBHzEKbkL9yFnXL-gRbfuADjyyAKKxouaN8zMpKD7VQRy19WPquzX~99U03xyR2G6D30srodxA-XFf9vzO0PGSBp4GLHYhFg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.918Z\",\"updated_at\":\"2022-03-07T12:03:57.911Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"C\"},{\"key\":\"7d6a927a6da62a37e7e61af4b5984da90fbadc11\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1524\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NPH/oAi/SfSnU23cBbHv18Px/style_thumbnail_0.png?Expires=1651449600&Signature=LE6qz-67zxjQa8KRhrTm2ddXl-cx7tmJGwYDalAO6eyHliFdTzq40fZ9wPGaB~isJRa4C1HH161MFTmSJkSd3rZC932pL2z21D2m9fENCd4kR3mW-B4NljRQeiwIULecAkwZzNZBUyeYaW8wn09ksJ8eR1Vg~Q8owGj3P2Z8Jgo-H1AWcei5XHLu2t1YufguxZc2mF~o4JRznghHedM~jfip~TmN8VlcZWJE1T4e5Pk3ENw6UXkQKqjSDr~wd5ZpXEhJFrD4ZoAb9zknGw3aqNf1nSdIAurt8uZtlVLV6-d4VPYvDVlq0iqn~JUZBFuw2cyGYxU79CGPTefCPsQAWQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Neutral\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.772Z\",\"updated_at\":\"2022-03-07T12:03:57.906Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"b\"},{\"key\":\"772668fc8be854ff2701d0171548e0642ef118bb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"136:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fdr/FzQ/19z4MRvKAN3HU95M/style_thumbnail_2.png?Expires=1651449600&Signature=DEF9c3Jwd3OJyWArHZEWjw8ScjXcDwTTZvoiCwysGTULj6kSD9cXzeXttanjit4dhI0B23~qvN5BwDKJP86IBkuk4dJc9pG6UKOHL-83inpE3AttSKQ7QZJzP20Jbr8L63B4IgYDDxhSVbhcQSptMRbABJzmpwIWX3TvHJY-FvfsavQtU5-uAv5IfGr3nrqlF6feV-FfqlrHhSbOFHzhz8mE34P93QDXMobx2gK4cRr-QmgMBYc39rN0ifx4OfgZ4GwvRbvwdr34YlEPnowQ-mYlw4Qm-ZMcyQrgDtP2~O4QjCkS-LQ7jAOlhxitpn3VJgiYYkiFg0nH44sLJ7vB6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Accent\",\"description\":\"\",\"created_at\":\"2022-03-04T10:15:41.379Z\",\"updated_at\":\"2022-03-07T12:03:57.901Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~:\"},{\"key\":\"72cbccbba2add3eb4c511d140032de17a4c3a75f\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:753\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/sDs/rW7/AxHjoCSzlYJEnrXV/style_thumbnail_15.png?Expires=1651449600&Signature=hUxW91NrmlzqsaGVj9aj5~Rbnjs~H83QYpr8RZ~XA71uCDN2Pqwjb9mcWNI-DbL95z6-FY87GNVK3U5vFdzN0LKPACFpJxsmSqI1tkForbY1xpHheQQZURFQx9-jicSkm9tTZPEIsGBtKEY8wOq36m9MSvCl6gGxsGzuq170oNK51sPWGzklLmwTIirFaDfzrZ0tbeWsPtNkOxcAniCIo4S-8gQn211oI0uUzbGVg2JWZycgnlb4G7SGiTRall9UAp2Bp7w0TzEWUP~RIGVYehm91DAs-qGF-Q8hgvIY1e-Bblq36SXuR1muY8av0VjU4xaDBypJBr6CmgMzfao5Dg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.971Z\",\"updated_at\":\"2022-03-10T15:13:44.515Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"=\"},{\"key\":\"6811c9a456f6ce8b5b7c4551d1c4e1be9fdefb7a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:750\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/p6l/euT/Ures2wRCd7btHlNq/style_thumbnail_0.png?Expires=1651449600&Signature=JliGUjOCl7bpG1SDOzHBhJLzdquKwLVB-AF6AUbAAtELA~fntCEmW3QmfSiLURs5t3DDh0X15Z17eAH3zPzZzSnfU63OAf~W5CxmefzLIqHM0-XqYUFf2LkC61H~ybiLLcxzZ6YYbQRe3n8ojOybPr88k14Rn0mTG94pmHD30Zra~Vysai1I6W9OWuL3msaVY-O2lwEa8iQ00DB-u3BC0N1LH4k6rK5D-9Kg5i0I0XRFE5CEd45eBIgdXx7eem-6CStVbulA2sseqGu9mwYcnAtrxnk1Jo-RrWxeVnp-9hUFF-aVoJNCnBhOEG1Shl-ls4ZfpLY6LG4zgyPMZqrMBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.538Z\",\"updated_at\":\"2022-03-07T12:03:57.858Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\":\"},{\"key\":\"4fb63920dc8acc078ccd3f3a339d5fc2eea85b8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1515\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1bk/R6z/sFRaqnxLs2ZYrty5/style_thumbnail_53.png?Expires=1651449600&Signature=QYTsk4~ny1OE8Jw4dW3CmctnZYLEm5NUEKW7tswQ-EzDTB5SXVrYkOpQZFNrVHU11~uw9R8m7FzpxqDuj7skj1VfOjKw96AXWMGOpOEUYcsI5UX8bNLbFI423f85AdZMSdWuv4AeXfNV8ozTYudEEmut0fHGUZAeuLE8ZhCFB4OsIIoQc4MeVsbwbf8CtQtzLBY-qA53EB3r0oPWo67vYAZ1TNOeBD4lTGrvNWYTlMkq7T5IOpTl4Jk7CBWQBm0gTQcy~RYxj8WZ8BUMz6xjjcoT4UEoadoI7ibKF8PuQRIbaQH9AXLD7gv2GjZ9A-Y7zFM~nee5eVfCFQXFTHV4Iw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Degraded\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.777Z\",\"updated_at\":\"2022-03-07T12:03:57.802Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Y\"}]},\"i18n\":null}");

/***/ }),

/***/ "./data/light-mode.json":
/*!******************************!*\
  !*** ./data/light-mode.json ***!
  \******************************/
/*! exports provided: error, status, meta, i18n, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"error\":false,\"status\":200,\"meta\":{\"styles\":[{\"key\":\"df8c317c9659f437f56a1a0558ce6130c5002ac0\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"61:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0E2/3GM/xFtN79QIYhs9UvJg/style_thumbnail_52.png?Expires=1651449600&Signature=DfXe3GN~HjnGg6dQDbFoTTS5wfPHZa48bs2lzI8JlqOzELw4ZngYBgHTOD1ELHstyCAtZBhjmmdrrCI4AnooKft3eh0qa8XXYBCKTkkLt0xmQu8aCq3P8osYHZ-yooG1X6A1odyH8uyfNCPAocC1UfgueEY1igstHqQIGbjsuEkR04B0LQufu18INcbqBNQhHjFn1Dwps-44leirapjohA6EKKlTsMedbH-rgvgMW6ISkmftaUWfQZ~FZFY3~TU3G3RNHe5ApaogMzKFW7vhGvdkw2esXGOBFjttszeMFYLJFG5hrRsfAOEdwvAC0pk5AIq86BExFJggjq0fxcYYwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Text On Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:31:34.758Z\",\"updated_at\":\"2022-04-07T16:01:58.562Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}O\"},{\"key\":\"da8463f843751c8307206c40b3d6473c28435e4a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QIE/7Hn/1qwk3OF9X1esUF7g/style_thumbnail_25.png?Expires=1651449600&Signature=htSyYjIFSTc1I6UHuKH~T8R7Dn4jir5JkhHhqtMzOEv-EQxIYT1ZO~XX58IosiaphlNHHCQUSpwcyrel3ELkqMaECj1A7lSBlmTJuEK88yvKppIc1IOyFzYb9CZ7MtjRsga7HswvwjsFkG37esDlIbblYO1ZwEmi9RblFrTY0meWBUGbXDK4LnZ0rl4XfglXvYV2kNGCCKGxctT8A1czBlMNosrLKE8Bid8YOLKILHqGvBOJCDP5-deR-GrdDfUm~ODexg2GQYlk384NLSy~Ylz6kuYGfj-VU15h86knA29VLyhbHXIr-U2NgyLUNt01pUGozXDRoUNETvNcJwZB7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.252Z\",\"updated_at\":\"2022-04-07T16:01:58.557Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}\"},{\"key\":\"cfb0febea0083c3fa09f37a106d25f460a131aec\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1418\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CMY/CnJ/xtqF3yrHEYQTQOsD/style_thumbnail_3.png?Expires=1651449600&Signature=KhAiKvQjiAQQrMMWWgjtImer9-PVe9i2X4PAL1KK1wpAnTlAZ5eXiLiBQb-FqfTtxoXQL69~yEPj3vmkeno3x8THoXlS8PdNQF8t07hz7qsdTdEQ7SaDgL-b3QSRc6imoyMUvnEltcPhIJFepVwrLl20gG91nP7g9TRhxaieMeDrUXvOCTP41l-TiWtLzhhmAE~k5R16NMU0rFVj9gFmbUFCmn9ZnBP8ATjNiQnVwE-5p6Z3aG-VLkmQMfD2KAAY~TtsEXKsHc94gRSQQ7IdqOkLfwZoWxX29HXMf65IiyFTNSdXqsScXl0S9oL2~ZH2yxvYwDhE6RYym2jU00MS0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.190Z\",\"updated_at\":\"2022-04-07T16:01:58.552Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}|\"},{\"key\":\"cfac5fd75722f844733fa2081b05bf54667dc1fe\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"206:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/K5G/y0h/1CxzKMajxcSnSNnM/style_thumbnail_10.png?Expires=1651449600&Signature=gfcrbvVbbSnZ1HeblkfFoZmv9xs0-ecYG02Uzw2VnjaMHOgjmIk1Up-MPkTgxdbPDZeeW3Qk9QMkeRPsQZYIE8ZKjOhGkPrAkM0~pjdLIunYDTVF2pL6~G~r7Vow6eyYl7lDm6tS0hQA6wLluqfrwKIeWymWjp845HwhNRa2Tw5~druNt5FffdaD1ckXPJm9KT-FxmlayvVc5rY~ONmyCyD0JI-VoXNlqnmcjhJ1qsM6S0beJwZLilSkywHTGxV5wqjZMSt-dzEQ0KLvRHNycsVSCt9F9uaBivIQEOdsp8r7nirSlMElpVUu5Hw2EI41pKsRqD4SJLnRFBeDg6XA8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Text Fill\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:37.502Z\",\"updated_at\":\"2022-04-07T16:01:58.547Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W\\\"\"},{\"key\":\"c6d5b0324bb7d47fa9c8819279e7b2758d0e37c1\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"61:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/l7S/riH/bbvAggxCVUmsueRV/style_thumbnail_56.png?Expires=1651449600&Signature=RP13MLqtsRC-5UQSEbVrXe8JvaYjhvjg8a~LGxSW7bAiObMbNliO19ZG3hCKogXXn39~AK7dhw1aw3svqflXRS2OQJoEiejaHPu9kdKL2~MJvft6ZnJu-5sLwDcgn-uRyuhY3N05AW2xKzMzwyc0sh6c9PuUhZGmfsnJqaVyUn~ap4rIW35naKf6vAQfTsMsqrimV3ZGgKeatdtVYzaBExfz8Nre6w9-YM~7j6lI4z~l-6RfL0wHOI~uFhp~QhLh0rMYaiJyAG3tiTq-r~IYPE0PsU8eXVzrueYh6L7GHysBEHB2mbjcZe562qlbDafi79GWPu4Q8aPO-yAMW27v7Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:31:34.764Z\",\"updated_at\":\"2022-04-07T16:01:58.542Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}\"},{\"key\":\"c4805829f7aa1d9f43eef68370525e48dc63815b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/quH/nV4/YQgXe0HLaOAO1obb/style_thumbnail_4.png?Expires=1651449600&Signature=GopAraAfuxXyF0ERr9qMktjp2DXKzElolHak~7Nsosddya3kbGcQBew6yIbocVtL5KzfTFQ-tmw2398MNze-PBuAUXOu-1IGqmwFamsgAzTilL40f0-pBxGaXHEOc0PC3AZ0UGkkVX2N7aS5lyBk74EhL9nR9dih7i1Cp0X~CFD37SFXs9o8myBbBtynv3AaQmR9hk5gHWYyPYtmfyjkmyBCkq2Ik7wIUsnnSyIpMEg~HLsTIabP63fANPISPb69dk5HOj~hL62tggVW1kpp0kBA-if8IXsv5cHcC5w1MaO5jMx0wObdwx3iR-ThGVsv7ydt0lcPk-0tzL3~wRuuzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.368Z\",\"updated_at\":\"2022-04-07T16:01:58.536Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}r\"},{\"key\":\"c4270a7ab9bb7c4260dd45e87938c3cddd757e93\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"206:1583\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/sXt/f0d/fXZSPLiQhW1vRjg3/style_thumbnail_9.png?Expires=1651449600&Signature=SwlLGdwmef2DmrxW~sD87CH15ejDryrIrMLjV9JVotOeH1nRHG8j4HGuRcZK8s3~7I8v05L0iE3fakO7rBvG6u08MC7YG0UNHuJ6u7pKThkYLgG0mh2aYhY~4LIgzGttAOa27i8H5AGF4yJMTLAJtx~FFpuq5LkI8RbDh-imu91xbW1O-NQiWTTlGfYFJjpXcwI0BXm-2yJqAWqeyo1ZBdBPrqyfu7Hv9TAYW7t~F2A2CV97nQh5vync4qjyPWtUUkzmkuQtcG4LRVriIMpe79AgT4io9qEkE4rMxJ~Cul7Zj6-4JrAgb1NJckyRWfiGNfMJ470vKvOhhzFTBibw5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Main Path\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:37.517Z\",\"updated_at\":\"2022-04-07T16:01:58.531Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W#\"},{\"key\":\"c3d97ccad48736ff0f1f45a898cafb425203c3d0\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"120:1600\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/D9C/IVe/Lp9gcSvFblGgrfjJ/style_thumbnail_41.png?Expires=1651449600&Signature=GJ9-DnCi-8JGP1-QDU6GCzhcYa614xkIdhGYabKUPX5hEu4brfGUvS2-a3JVWHzjZMGWMeM79OH9ED9rlgy-o1-58GMa5dTPzOFQGR8xsEg~mda4vMrGxT3S~vfBpYUApcmnPkT6M1Plgt5mmhj9FKs7jsJcxYRNFVYowN-QYzfoJbWPZvpt-vWuenVdOms2uBY-vC9Ypi0j9Vb~rG9t6Z0LjqJKzpLzym1WfftUeZTVrGv0R9mT6mhVS7V-UlByQLDJ8ryX4y425fbMHgsSFlHUCAiFeT-yMDng6vjN-XNOy0nF7ApW9C~DHs8JHjsNNz-7LA4woyGX2Al3O2xrYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Multi Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-03T17:11:01.912Z\",\"updated_at\":\"2022-04-07T16:01:58.526Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!|\"},{\"key\":\"c3912b7e3de980df16b615019f7f9e4faa723ee3\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/8Ac/oOu/V5ZRxlpTA4UTHP7H/style_thumbnail_39.png?Expires=1651449600&Signature=IqVEhty4-mk3iBL4hZmWAxEGqc20RUjJ4rmWUPk-rjgtEJwc49ePDIbGQK~hElPJTMKyTqlnqrdCKdb-NRdRVq~7rj3tvwdckXGpe2YspMdGrGLoYwkdjXKL1f-CiaYvPPxaL7MJS2bX5n90E~Vx28d-6e9rDkU8FFNjr3G0~rJ0cZcviMIsZXR4SfNtNzIE6dtf4XZrFDJkMeR-J09uhzvcQyQYqE9TERMt0YwGMIm6uq6hEJChJCvehxPF-3~Tg7wEcV7IY9wdV~axv1PUWSHuyLMRxwJr8K1lrPz3nXp2Wb921PNiDyo6-dHbHW9aOQFnDfrQuAjpHjVZHLZ9cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.339Z\",\"updated_at\":\"2022-04-07T16:01:58.520Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}x\"},{\"key\":\"bd9cbb95214eb76437b9eccb7897d24de4cc64c8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"30:1310\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/w9H/Afh/afSE6ghcRZ1zPNZ1/style_thumbnail_48.png?Expires=1651449600&Signature=aM4QQtunCt~KltFQdZPreynxbSjOFpW1vE6LcYhwJDDkeh9AKAb5a9ZNl5R9o5upc1pqzaJiFDt0A7OM9Eoew9~uFdWnPZAYOYybPbCf260W1oNuL5ojTQR87PgHSOj2GBp7hbYlpXITx0R6JyT0KIFSDij7kBz~QAhSNzf48pPXU2YjzE~2DJsxQyVhTnkYQ2mNB3LqmYo5I572Zbzw~aUmzU8kfGNoG3-Qpicxkeh0ADmyE4nAlb~u-5o4uZv1GycGoObBE296I5KY7UyWQwfLaRaWI-I2LRym7FguAa3pVBWaoCF6We0KoFnw5uhva0gq01vSR1BdnCOg6f7iNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.237Z\",\"updated_at\":\"2022-04-07T16:01:58.515Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}f\"},{\"key\":\"b2532a1d0dfa7f22febcd3a96bcd1e4b9cf2252c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"36:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0Rl/ndv/QnFyrT911dxonV0j/style_thumbnail_49.png?Expires=1651449600&Signature=Px8osczNOQxI65Ml6ddlPtls1f3H01B7Fyhx6hHj9wGHnseNJc2Qkq4WhodzyRNTYIE0ElSVgv2cbqR7buH6H97zoAxS1XNnAFrfjtZGJj2CS37WsC-NrKK~1uaDZWP41aGaWKjVlkXcXO320k8EXu36oLGqNXFE4DQ3YOMTu18-0w1SfG7UEOB82ZzFdGExuCkmu5AsqYWDsYyj38aYrjFv-nV2Ujd-5iQnbX7hVGgeeEVeoklzB-0UlZDDWT3UZsVXAlSQ1qhJ7-qcr27vOmsmeQUXVX5UBAxtKFJDR2f1-9ABVy6rWiTJd12K3M9wuifwcM7jAL4ch4qBHry8mA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Neutral\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.576Z\",\"updated_at\":\"2022-04-07T16:01:58.509Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}f\"},{\"key\":\"b226fe5b2de1d986798e7924806eba4d45e28770\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1311\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/5Ag/NP0/xX2rjeade0vpePZi/style_thumbnail_5.png?Expires=1651449600&Signature=Bg1T4tZ00~HpWwH09CLvhQ~~JG9aMT9Q0JaqkiRxE~K4swalXRQTim0Pjes~fBjt9WL82S27kH5oa3D9x3~0HOfA4uWIpEhq35SBp8SS0DGLeXlfEYMfAXEamWeLn3Vev3~OeSsRWldO9w4WLUMpJc-ewRjxGTiWcMtghKUDsBGMhKmO-fHZ3yZ-kZjAB13FiO2erOongoSpKwvgbs6kGi-jQofN6BSb83FBOasLC3tgOtZoHYsGZJD2fEg8StRu3kmZvirTCRUhX~I9vwLn3LqSosOCLn2cUxJSjOXImv1gUBUrIVjgUTyHIzBgsKywrmDuUTcDXh3LdUevspduDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.364Z\",\"updated_at\":\"2022-04-07T16:01:58.504Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}r\"},{\"key\":\"b1d06a9d2bb8785d12e2e4de21c232887ea20b88\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1317\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JMh/2Bq/HLh4bwghnVPrhPL3/style_thumbnail_30.png?Expires=1651449600&Signature=G1Dlb6DrGqrs9fOTqf~lNqTmAcR1DFRUtvrepwEPcrEQhtbEw7JjO-iXGWDfURC0zdws0W-n3~cHqfE43mh1kAGLcn~5ubXo~d9-rAC8ECoifj7UsqffVdwXfYAkvJ5WXSJ2ZnXW0P7q2scbYYeHTlxt16TQ-3O1MEOQk7F0iYh37uIXz0TFU83M6Vl~t9TeLHPl5IlIVfslFBX0uIwLDHA33X9Whfpjw9cfVVCgyAQ0n~jlZp9ap5XSb2uj8qkfWvn3ohIK1AY~qnaOMV1lSqxBKGU~aSO4Z1Cgl7E5U4eWBGldRLMv~hFW4omOiY3wRrQl5xBS1ow73pfTCMjLUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.354Z\",\"updated_at\":\"2022-04-07T16:01:58.498Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}r\"},{\"key\":\"abba715d7bb0ab93f9ad5751116d6cec72a72f33\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"36:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/M0e/xjX/PdQYIKVs52N72vXn/style_thumbnail_22.png?Expires=1651449600&Signature=OY~~L0~8NfoqQHtZRKg0Z~5TG12RpxJ2yRVpAgcvEKLW7mpz12Pr8CzDcSJxVkfR4DKALAD3ECv9ikUALIg8s-UVVVA1j34O7tNoJGWBuCg8Oa9D8vcZRSZVQ2ZtJK6wzjAuHtS~gPPvb7PDmIyk8tpW9oU6CO4EdG3HYnJoN59gSFm~~SiAybvmTPGMKZmUdAJWETs-~TiB-tYTn8i69j3ILt6SjGCPivsSR~PgeeLb8JtaruqjE27~kNwQWHdMI2Om83vlAQM~3qLgHFYXbqEmdXpyhnMgRzK8S1pXy2b37kHkDqC~yjktrPOxVzIm2GzITpGG73zNz4WSx~VSRw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.280Z\",\"updated_at\":\"2022-04-07T16:01:58.493Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}x\"},{\"key\":\"a060aa93813b147aad4cd2dcfdb34de91b5a128c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1305\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/k5b/8nu/kXDOeDv9s2yHFVIY/style_thumbnail_28.png?Expires=1651449600&Signature=ZZGdkbk3bOrgNLD-dY-ZXNnGCzkhRaWx0HQglGfuYs~YFk2SlqE92MYdWjjXRWJBtyn0yTXwDlSMlucEJFLJiOTA0R-GdETJ2wVky3-YvP6fcn12X~VKs4LpgeSBR03cMmnzHdT8Exu6ZG4ZMc6iSiMEDNwVIHBzznHsDStQ~x1Kl8CX~oRzGb0~Y9VQJjVn1ZOpNgKKj8Cnsjfkwq4sL~5r3517xyML8rwKNhjViMRfPyFhwWaIW73fclHItrmIulv~bsd6ZRgIBvGccrO~n7fHqbmGHPYDXQbsiWaFx6-MXSRMHpEFSsHh76TzWKUNzJs~PLfycx9f~ZAQmvFxzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.276Z\",\"updated_at\":\"2022-04-07T16:01:58.488Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}x\"},{\"key\":\"9e16881ef2bd421ed25d497b337374c3e3203bdc\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1411\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/eIU/Z1I/mghFq8Lhmt7EtzYE/style_thumbnail_23.png?Expires=1651449600&Signature=J~MiH4Pg8QJ57GCxby517yTdjPQyL8tT~q9xJSBsrBGqFgokQWfVk9D2y8aGLLSrMoVNDgbhPgeRopWw9yn6K3DsjqcaZRk2CUdGIQDJSVdt6ocuZQmw457Z22A4a-rg4bZS9p5U6cJzJ8fQ5K~p1SfwZ4iDIxHEb1DNXP3kKU9ugB1AaoptCGGINSEYn40jslEiqIoeSDRCg6LK6SAOFQrZsV~CqGAfZ8823nUIXpjOPeNmMXABrAl7R3aMt1ME9UuE980KmJ33GotO2dQY176PxA-SY~73ZzwQ6hvXMP8DQx5L6GrxiUGW2O696PwJFc1Qcfb0FwQPS6GXmkb-IQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.247Z\",\"updated_at\":\"2022-04-07T16:01:58.482Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}x\"},{\"key\":\"96e4443901e4a460209c8a07370d852e4d4247b8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/A8U/y5r/ncj2D7MKLPaM4LAP/style_thumbnail_19.png?Expires=1651449600&Signature=dSkgoqbmNdmrMi3vCOC6Ve6kVRCiQr3LWejy3OVNqpyH7rt3ZItn8dPKDqaQcD2PQ20Rp7c6XkgvrA4zGQcokIaSBT7F~YLhujFh3NrMF8frQJyXSoXdbPFa0aQqyrAAbVhDpw3d5iBl-dksGot5WnSl60Es38E8pl-l6C7mxDjqooUjrezIBbDbVlRBvalfFOOTrfakLPwawQnRny~Pd1D43kYgy~jGidAYskQ2IG~P6uciqLzuu9YuxIr4b45jvCqOUSC-OLojkS-jhudbO~PHsiZqBOWWiUYKkmy3VFdy1yZYl8gG3atpEKyCmxCArBoT2f7ER1OAl-ktxMqf~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.151Z\",\"updated_at\":\"2022-04-07T16:01:58.477Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}f\"},{\"key\":\"940f11280cb9dc4815ef81d7109478bff0a30fb8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"45:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VEa/nKX/HPXo4dRH9hsxbEnp/style_thumbnail_14.png?Expires=1651449600&Signature=gP-epIQwNct7UiHCJpZWR1HNhIM82NIZrh84SyI6T6ZY1cNoVKu476KK78BhtSIsnmjV6c~7O0sGA4HNavIMr~Rom~AV9CYcgm9OPuykMCpL4zNTZ~5drV4NdHQAMk5fwd04O3GlNGpF2cwA4ixDGe8sLqBuCFdz8fiaf~9kuoTY95peTKkN3nj0HrEJYm0jKlcM5KYKtUBoTlW4xPOTEM0zuZkCcnXuUOOU3FE5D9m4gYGSEohhmVRS6dEMpoRBni4V-61C~ikhpXGBVrW1mAvrLR~lJIMG0LO~wO4tedF~Egnf2jsLP5oVrovjE7JgfBlM5VVhuSNYXK~ZfU9omQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Floating\",\"description\":\"\",\"created_at\":\"2022-02-24T11:24:52.077Z\",\"updated_at\":\"2022-04-07T16:01:58.471Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!r\"},{\"key\":\"8b817d5ad3a254e94a06a6ac1e79ce9a865428e2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"114:1558\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/k7I/71b/Djvuz9baVxGqb0RQ/style_thumbnail_12.png?Expires=1651449600&Signature=WZZtlEWxONa0vY19tT79KeS3FHBFFeSwn4fDG3eymsXPgKLGDwpY-qVEA8XNiOc1wcg3FXHJmMEk5pmQeq13XvA5grQgSJqkRjBn~lKyrAc1kM6TuPWcDl3ZJ4hqbfwUJtqfNZZxAF6GjEDoHHkdLKNjvmZEdgp4mtGdJtMPZpHK1Y2w9VIL71lLTMEHmboL1MuPsoII6vm6vxI6MTs7wYqeoRXGSNKa7F8lU~kIUht5TrofkvD2soHwKI2F~gv7BSEaLIL18k0TEvHZLzPFJy4kHlodsJMBJGMb0idT~APoS1WriiMoaSOeLn7DEiCWSgQBxDsmscf2wfl0E0yVYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-03-03T16:30:22.531Z\",\"updated_at\":\"2022-04-07T16:01:58.466Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}r\"},{\"key\":\"87f36e89c8954a4498c1a14b089eba5c11586e2a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CmC/euu/sfhcBQHUlBYeP63F/style_thumbnail_17.png?Expires=1651449600&Signature=O4pbo3kL5urrQmiICvr39CbGDNS-75qLoE9ngzSzXfUQ~dr6EBbe9z6zc8DS0tHttO-mIp449kTwx9r2SvDoH9NICeKyzRcbcAZLldHz55plLXz5WA-eqdyZ58co47SL~Yp9AtbakN5Z0JGdXQsfvN3Co4fiBzg1SZnmX7SfAIkZvMWiLPYLf1yiL9CS4konB0SyPuKslTuk-VGuIq0t8fVcnIvx~AOnMkhkkje8EXfhnJ70gnrdY3vKpri759T0PU3NwSJ9nki6gQDLBNx8Hydfbiy3QyeshOCO61nkXgN8yCmJCt-0bSGiXmD8WrgP5p3Zls9hO--IAyCepkmUeA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Text On Destructive\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.295Z\",\"updated_at\":\"2022-04-07T16:01:58.461Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}O\"},{\"key\":\"859680c104a4a42a3b553124e0f25ed2e189cfd3\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1302\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JHx/VLV/vrKAspgQTtTJAZtk/style_thumbnail_31.png?Expires=1651449600&Signature=ACL5hE0CeycjX49ouEdOwVnzBGLR5tz16ZAkL2O3eg-gATxR1vVRcGxoemiEmNn1butyWWfkN820S8ATu4Wm8dDBWVFKessp8YsOzCnatgQnwio6-nUOUkaCxXjG9cKJ0cODvGd-8lT6-LX~f2kKbxsPZAIICZnbQYoFKDUlhm5EVDwZxRs1AcsAMVDVZhlWGwIrSk2AFGbvdwcABOaCqWmNr6C~lxmBKCaACtJodSHvNbZSFTTUPWHO8~-U5xAVeyFs8TrIc6Sdfw33s03VKDKebMXQ~WcD7qAt73LShlzwqqPU1jeuUUpKRevZRxFksnsQd1-fWsxnmdJxnJt~2Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.349Z\",\"updated_at\":\"2022-04-07T16:01:58.455Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}O\"},{\"key\":\"820cf81a41129c9f0b8c4a2bfb9fbebbe2e80bbd\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1315\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nzN/Qz2/ANyVhhYGdVxj0Ba6/style_thumbnail_16.png?Expires=1651449600&Signature=GNFKCdZ~0Z8FUjEvc7UfRg~1pqXArjSSHaUC8Pu444Y6KuQf17dZLVmAvU6BDoMMX~7IuJJefOYrjR9cFf9i0JqU6wq1ar98f400F~QjZVfSh7P7DsEi0oOC~eWUvZXUab3zvw6aKitWRQun05p7CDJ86HYfU4mkf~uYvgXEugpwY0GGWyNbBFPv1s74PGrxhSahaZMGXzxx2p1UZRDLADeso~YkJh5wP1pYC0JYTF5G694MpNECFsVULVvOmQVh8OQBVvoKCuHK9UGkVywUzRiJNrbJgbMwxO48BDcZd4Yn7Dn8RZSGBbrbDaC-r6YWD9Qq3jWm7OylrCOBrh~lmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Text On Primary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.261Z\",\"updated_at\":\"2022-04-07T16:01:58.450Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}\"},{\"key\":\"7f432d441c55640ef9e1c41839ce91e23873cb88\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"30:1309\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/eSh/LoC/MIIQT8U9TCF1EOCn/style_thumbnail_50.png?Expires=1651449600&Signature=JB0nQNmUTYv2pxNuwJ0zrgn0C26sYDenfeq0f2NTfjQDMWgD5XoaTfufkMWsJBTlLw4rkWa71mRb6rK3D0hw6Tkl2cLmglEIW1HC3e52UOaW~mu2o0lHbKA2AzVQpPA1c9Sm83IVyWIUme1ctzYQ3T8ol97uogmOlefnLoe0rII14L9cQIYjlxanWZQWT6SKiZTwT6LguKZdoci0tLodUF7f-U5mDySwtwajG0Ug1KQiV4WVKC1ElXe5E5v-qW5r6eq1~c64mV-Pjm7i~xXedmSN1Cr0dO4mmZ2XFoobZj4ET~np7FVpvbo-Mc2Rr3ExziLGeMjYc4J15SfMIbx03Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.581Z\",\"updated_at\":\"2022-04-07T16:01:58.444Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}O\"},{\"key\":\"7e80dfe37e09a55a45f2dde366d298906b18f124\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1422\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1pH/dqw/DvIBBjr7YTjaWHUl/style_thumbnail_18.png?Expires=1651449600&Signature=Xe-WvTqr9Ilz6WxoPQBn9cc2j-ZXDoFrqb9nKVuGp6K~uv~gdcGczZDBa1q5qZg7U46lBonNNQGiHMucCbHtSxkRGt9VcNaDSIvvnsoURDGgJiZgImshe2DqHMKuaCRXYlXHmbrWergLckzqjqlc8t6QmpklFWG3UUkQeyxoILr2Vj1lAIr~WPb4FntWk5qvN6l3ZpTPNoluwPU7CCFquyY936SK6MOwEFAbgO4kxVSPBxktwoHNJTMHBBIFvRScLSHLuskQnZjczOqVBU8vPNFOUbVfPtZOiqT~9AKtJwrYAHCk18jXn5~kA-s5sglJUjPUCjFGjbGHZ66eQjtZKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.214Z\",\"updated_at\":\"2022-04-07T16:01:58.439Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}r\"},{\"key\":\"6e37a15b5198031d99546be0d646c9ae8c7b9e00\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"36:1415\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Yaz/6cz/Iz2Ss6PP1TT4OLRj/style_thumbnail_47.png?Expires=1651449600&Signature=LaF-WVd32mTefuEQ2-3fWAMviSZw6sYwBmkO1xRXw6ob~e~7jREXhhztxduD6EwJAZrxW35cIjWi-mnP~BTOP8AFxTgPT4r8oUomIzG4NojHIlq47oBaLPM8VHuaL1s50j4fsPB8O3Ywar3wO6qm98ZekSP6~i08kSoG3jta8vz8jjyaxVHXv00kxSNoAX3QRWbrJIDiNC3aBKPUg5-5uXZw4xSJel8lm5dG04bYjR6v8bhLuMpzOPp9SbALiPt5KRShhcA1c2~-CcQph15ABBeLABAgt9M~G6vIEvJewYV76H5KLuy~EnnqA00nyFe0823-PoyBuiJu36oXEfIgsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.233Z\",\"updated_at\":\"2022-04-07T16:01:58.434Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}r\"},{\"key\":\"63f1ca4e02fd507544f3adf3e685047b5ebf9610\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1409\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/qbN/DjV/Lp5ZdMReiojYw47u/style_thumbnail_38.png?Expires=1651449600&Signature=cSTNG-pTojqmjUmaK5llPPO0HjR6TArQDJTVCLvOq8yNJNmkVgueVE3DyCTYENUc3-CGUHBhfiDfF-FicDj-2EFwr2PW4tmfpFFiJDMfB5Asg4WI~XIdMM42BUpbJi0cO-t3CQbGyEKMipH-XgLmlE4UhZwyuQsFUPbIL0I1p8jtfQsxgBSXLfmr420nBy0G7Rj1I0deWBKyoBBpAwhsqG7ZR1gHLGdPSqBHRwoZSFZmA2zY1zfvLOIyp7McXhObPdrTK39zg13lb7Z6jgOP35yqDn4rcmKZxDdCH8m7~Ni8Mv2KvTCQtbQS-OjyzIBpoFxwba41D7r1yO9hFvrZQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.329Z\",\"updated_at\":\"2022-04-07T16:01:58.428Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}f\"},{\"key\":\"633b88aca617748f74d57a8ea3f9269c17ee2518\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1322\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tqW/imq/HUwMYk9jgZ1SWpaj/style_thumbnail_58.png?Expires=1651449600&Signature=CVWfCOq~btdWHOg-KHOXLBjFd5DwCV62b2a5r8SePnpsvmlJmww-ccdqla1GLdH1lgFQ58hC2beFrY6S028XB7sLdlr3Gmb2uofVSpol1HV0qS4G726VEv5h-KXgIG5vQVKqJTHyyRhJCNaijybdyBag4nvOUwbW3EBayXG-THb3lq-dUIT8PcPSVF~kibXHAkkAxBbpcTpyUQifkdKaMCyJWZTD669ERDe~wIBmHtuAXcWyTcavD4Zd8FQQb8-r-b~pYWcG7NBOOF~FKtHJTtCtOrT~6V-J9TuJHXRqrHpSjSTy1lHsq3WUaDKgOUcFUnCHpol3ibNZKjaLqo7Vmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.537Z\",\"updated_at\":\"2022-04-07T16:01:58.422Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}|\"},{\"key\":\"58b2de9b4cf0d80ce2a4baba64f395a6a8f235ef\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ww3/Jt2/U8AHBrSr3w0ba4DB/style_thumbnail_24.png?Expires=1651449600&Signature=DHCtzVZamLMH0Noke34~f8w9f-ms0gBTn-OJfdfjizjkJzLAgHuauuASh3WKSZmeoBgtRwVv9zI1R5TzulDf4D4ZMjmAY1YbTM~~txloT7zqSXtaJCA8AVvbGMd1akOA1N1-Zr~MjcxiMN-YM-tKw0B6ozH06puE4XAGFZEE3GsYGk5QRvNxTKhkyEAbt1RplVJot53PRlA3o1Vuhj5XgAda7rYSWXQPiCe5CptoGz5kPEERjGm0Ryh6qzwusLUg9KZe0TG6qcvtUDsLmJoOLd25EgTXDy9zrKoCUlLfvY6t-VI1uyScYqAG2waWZ9abwNSTDmUPrPCxJQ8rRQQACg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.257Z\",\"updated_at\":\"2022-04-07T16:01:58.417Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}|\"},{\"key\":\"525494fe61a9d4c12c9429357fdf7a9dffce04c8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1426\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/FuR/bAQ/jodIxNECAQ8Xsm54/style_thumbnail_11.png?Expires=1651449600&Signature=e4uvNPszoUMI9y50jPEpahfPoLI-ZzO18YbV6MxhBnpGYLPQVGG7cE2FjJvqL-jesAF2awcIFfeXiBxEEDglLbPEajfNyjcBwkIfZtzb7HC-a2sZbiUFuynUrm0ZqZgrA2y818dFpv0BJNcyqNYLqZoDuuO7vQ7El9sAJf8CXAB9CAjj9K~-bFWwXyrLOl7UPR-d1BldSuhwSnLtIfXgSJq1UY0w71yLG3hl-ELwjLfDhlmtjUyd-H2MCfA2vHXKogL0Vj4hM6h4t~XuFLm~0YwVfz2AzsRsr0KczzkviWOSInFhjZ6Kuq3EbjtK0oqIUZyUVlMYuu5~bPR6u3o1VA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.181Z\",\"updated_at\":\"2022-04-07T16:01:58.411Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}{\"},{\"key\":\"4c78003980a9e350339a4149994e82ebe58f0811\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1303\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wdW/xuY/Db3WCzaU5vbEs5Wx/style_thumbnail_32.png?Expires=1651449600&Signature=gDSDva5LXNQpxGaFDw4dSxVnUJe7YkcKRTLOa-seXVTuCRjtQq8GMs1K09-W~x9QPoEFU0FS8umWz4C76K5XkqJOxuwohNj5v5yfH9qehSI-1zcfXA~GMQRi8JtvNPh8h-WNL5soojuMFOXsZkTomNqO2aCe~anhiH~wO8AvWef8eLS2rHjdVrqcOEkn5klLbsZHJ6GzPL2MRNaVoR-26jx1EElPKMD3d4Kc1Rl3AieUVnC4GH2K85xgyp~rGofenMDMRT1eQ9xQsqZGBkMs18zLzE~fkMDvgopzpXu1fJtG2IJBxwtCsXrhHUbJUBZbVOC81gxdYmcEvOSVgnty5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.285Z\",\"updated_at\":\"2022-04-07T16:01:58.405Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}f\"},{\"key\":\"4c0e1c073e8d24b8a812c73a848bf1891b86cc22\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1307\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6K9/Y5j/GcOCaHf2WpSMR8Mw/style_thumbnail_36.png?Expires=1651449600&Signature=L2Zq5~jzmpyTvcnZbEgqlfosQChXVt0aSBsI6GWlKEVQu1P1pQxLMtTXdhUMxM9IF0RDBm7fMr8k7-EhhRW-XWAr17ZfEvs7~BkjFN68uQBhn994IRvasCRItitKx43o1qqtmbt51ERfEcqGrTiPRctl7dmRqkNJZo2cAN7iM8yo2pSQb-CkPfK4aHE4Q5JCPQBz6yqAxoSGRiAwr4R6g6A9wGrjV6jzxnXbAQrqRhKOEDaee2nLGu4PhyuEzbJxXn0xrgebvXUs-hyGG9LOUkfNzLdRL5vY5xkvlmRiJJ1rv5kf3DMGuUraWKx7LM90rtwFwmLH7K4YbQ8nDL2pZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.319Z\",\"updated_at\":\"2022-04-07T16:01:58.398Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}|\"},{\"key\":\"4b061b75b3bc7b3506ff7b86bcdb3ffe9de4a2cf\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1318\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NA2/lpi/7PP82p2K9rv75BWC/style_thumbnail_29.png?Expires=1651449600&Signature=cM8LqgtNR4RNRzfJPwWJWz3irtaJNm8nKWYqrhUqcih9w0WJfOKGcD5hVi-hpxHoYYZ8dxSFSKfOWvFaF7wP8NHAKyhbXpL7oE-neDoW~s3yR8-bjLsmJ0Vj6N6lvxMnJSzZGIKiATseh38GCbWyAZhmqBlRvjK44vQlA3mo679au6NdX2Om6W45mczkCfSX6mZkHDxWm9vwb7Xii82WVFuc6RFp582do6nFZodcdZE-QqlB4zmg3cVANtQnYALGjcpZK76JAc9meLPpRamV~ignKuQo3PBjR8vlRY4atfSnGGGLyoLSqt~1ttgJN8dEK-HArVXdXZRzIkvEkC09Ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.271Z\",\"updated_at\":\"2022-04-07T16:01:58.391Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}x\"},{\"key\":\"48a0133375061da6643f59278c4cdbc1ae6ebf4b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1313\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ebO/U7k/759YMKA16Zcx8aTV/style_thumbnail_35.png?Expires=1651449600&Signature=WqQuhTkkEbHArv~Z7-H8LMBDED0LrbPeRAoiq3BgrdXdxMIc7krwsBI9B9NqPaoBISiQzHU7hBnUEguMJESWVsCjvSOpB1my0Ysh9q0p2uUYO6~ZnCQBjoMEsFX-bLJzqZoVEusTvgbP918ENv66niEEOezogvzb2H~WFvbzQMOoioYk0X~5Uy-KgDPloBklOncSvCcbCHvdy-DKueSh-km1THPGmSIcRK13jtG2FgLRuVGz6ZaGvRH5BJ0TTsBVLbe~~N3vNulMw3PeKCFh9PIVBnxmT54hyRR-YRKfoq5Rrat3OyiaFfq2FYsY13TELzKdlthiU~uNg7cXHG1khg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.165Z\",\"updated_at\":\"2022-04-07T16:01:58.385Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}{\"},{\"key\":\"46e6b897183d0f6f0f8f350df0e0e5ee28d19f34\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"211:1602\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/D2i/0KT/T5qm2vdkytDlRWBD/style_thumbnail_46.png?Expires=1651449600&Signature=UkSzN1zYJ-8GTUwMfxpKuPMB14dZtNEcR2XImBzvOM4oVsF1RdylyunguFx4x9bpuMUYazsWb8WbgVP4QHEMXa5tBsvUT~kcdgUjHn1uL0k6T9GH9zCJLMKM0~Tmv9h9Kc0DPfspEKH-hRPK4iDbHFrEfgZhcux0D7E-aCTKPKLatoChpx3vQzOMT5hF9mPEAQrabt9BCN7LCqtWDFM3vFf8VLQxoAG-6Mw-ID3JyBpqhMBWCYvcL5zxsm8BScqXaDZ910LIVZBUX8NOQJpFjoyRsfk-0lRxpSAmdw7FiicIMpnfSM-J4V3GjHUYzNk10Bz-Y9yA6OfjHfkxPvDelw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Text Nav\",\"description\":\"\",\"created_at\":\"2022-03-14T14:41:43.894Z\",\"updated_at\":\"2022-04-07T16:01:58.378Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!{\"},{\"key\":\"45b2967a72314fd950111b1dd1937a44a1baa5be\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/00E/nGh/xPIWW6hhnrcbH912/style_thumbnail_53.png?Expires=1651449600&Signature=PZNd4BGRfJ1J70CgVew7rbabLjxodCnMHozv0-MJ0F6YgfOBfqgC-2LqslEoFTQ044aIpc22KfHbuedNtC5G7f1ctZW~Q0SeZS6450bsw0cfi-iMWiIFHewm6vnOiQYGvtVPKAqnwWiPwPoj6FT2NFzQtgisiewq8j9Kuxs5Fgo35KzUaFGJLEXpckaDMFPBMv3CqbX2oQT-rSxxRzW-pYn4hwSp3rmdgYH~sVDEotFNNke7cpVapTyROV~Td-w57CSCYSoZDs88tv2xdrZDLQEd~UzVpiZVDl~pXqUQyDeL9uNWflp~fCDTfrwnoA13zXQRkdd9jCOi0LfjcFxVWQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Text On Plain\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.642Z\",\"updated_at\":\"2022-04-07T16:01:58.372Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}O\"},{\"key\":\"459171bbf39995b0e05ce46c4c94fc0232ff0929\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1412\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fds/gw7/Trb5Z0yHuUUws5B2/style_thumbnail_26.png?Expires=1651449600&Signature=N4JGlvuyh9y5PEWkrwchGUC1fwOoVzv22erYfkmYj9mE0vAR4F6kn6uHWqUuXyD0howTdqHScBFOrfzi620GNN9yoeJKNA7zQJvpdw14OLApkAGVKGVk7OKqEwDQRQC4Tcrbke-NEBWvxiKNMg5ihsOHnJ6sKf9bqCU7HOBihu4GSWYXwpyWwEUmvJlqnJMXrIKX~h8JqJOJl5RKHv2-ef-Nub4h1-JmImngCpLQP9Ykgx7Z-1OQkgy7o58TdevDIkEJuUUeMEWuw7hNH-dW5mwJqqbgpkNKj26ajVYDsezDF74ndJLh8kE4fQcc~T88oTucBNfEbutCf0CP0P5gtg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.209Z\",\"updated_at\":\"2022-04-07T16:01:58.367Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}{\"},{\"key\":\"44fb12c0049f59c20254040b430bb230f51aa387\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2378\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bkA/75B/dwpCx3EnlqLebYK1/style_thumbnail_54.png?Expires=1651449600&Signature=Jex81hnokfnAAcQCFYWwRaPa2uI4XGbVdtzmcr5qTm6iwjbnA08OAfmgjCP~SgmOtoxdxHeXiqJzWwmUh1h3cxWA-jEoJoJD-48HCKsbOkpns9ONilUeBsSWSZ2mlAMGtvSIKpf6cjfoYQ2hBaiEc5paNqp0YQFyOV74O3x5pLCmgj85qIxpcRqGLm241HR2Q1N9DMqNRdBo6QsPKyZoE6J2ucYptPamFYqhuKU3YKctLKOJQnzjn2e4KWWkq6SX4jCoCqGILu6n16-wRUvIK7ms47tth7GB5Z4YIpBsn489~70FJN3KTHWqvmxeJkiMSZdWG3LIEhyN9S8nHlfoQg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Extended\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.657Z\",\"updated_at\":\"2022-04-07T16:01:58.362Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!x\"},{\"key\":\"351ba76ffc5f9d3d0acb11c2707495e567f2fa28\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1456\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3U5/tR9/nTr27mWc7F01SUPB/style_thumbnail_13.png?Expires=1651449600&Signature=VgTRPg00wDsWp5JIJowBl4Qa3iHfu2BY49arLVxgykjs6koQdTMrv4BHv9m7Ka7tJGVprohJeJmWV77mELvDvOfjmsez9XaFQvaaH0cwRoZ0aarnNK~EMMpbRUkfwFwlc2lrrTWCz-3HIQOvvXjcoagpFT2KzI0Wss4QAlVmcHm1B8-wg3Qerj1RU8u0NS9lZ2lg00adw1AOQdJ79XASwTB6e0I6UpJqZVdZMp1Tk8YAGtBXLx00P9yydS6HEaQXkjh~V0SVW9oZRvPKAaAimlcozBJpamJN4rYKFX8uy3J7S~FugP~hBYZhGKxiwnrzBiMa5SZMYEzXijIK0y9qQg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.958Z\",\"updated_at\":\"2022-04-07T16:01:58.356Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}f\"},{\"key\":\"32705dd80fa63b0a88ac15891eb5aed1c3b777f2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1417\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/j5k/A9L/gY6YQxES9tYkWovI/style_thumbnail_21.png?Expires=1651449600&Signature=IU3Oqi3OagoVD7p9nQCe1cMaUWMnV1Gsy-5ZOI-sk6eCPs7pvlpDw85~bmv-LUYqIf1KT8ILT8K3VxYilndXot0VmDfaCitVtbEYgZ3QAZshlacA12qxw~eCd0E86UunanyR2hDeWXnEJmIK278QdR~TUX1fWOukWuQXFsXOzm1-0aoE9Ms0XLvT6xm-tl84TKOR~5yuoH4dBL3PKzHY03Byv89V3J6FSNwtBw8diOeA5bgPRYMBz7sCuqzOhhDcHnfxEN~0vB33VKVMF6yPsCPmIjydZSKtXUu9~tPVnRgewhfx8j-N9-uF6p2jsYs7MOaxCiVvATLPjwRmSDXmsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.200Z\",\"updated_at\":\"2022-04-07T16:01:58.350Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}{\"},{\"key\":\"31b36a20950c9aee9789c3c85f78a17d075d1e7c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QIl/PMq/Dj8lkvV6AO9YEr1K/style_thumbnail_42.png?Expires=1651449600&Signature=XhCeanPGCP3b~kv5mM8zvcmh-X~UAkxQ6dt6pUq3s88M2vDHjh3QRqqEI6S9rIMoftmMc7AOMBIcB4rvB7o5J1F7UBMsvIfx7ARcIHwpoZhrHC73h8STZrMj4ibo~olbyJIhXrR-l5opJjX-0I8czyMGqr1avqnjWq9cMjpabet9UwaewHNrI~Mb1vXi0Kr9U6a2SNgpmL~4g53INLOw~H-3JhNvrKyB-8M2Nvx2DHsVCguBubkaLDjsNteoNugIq6DgT~8HMxngDk-cDR3PJxN54UPQpHEDKTDx6jedVoxZj1GS~y4f-XMlKzKvxsbXntZhZMqf-8zHXRE1PJYidw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.305Z\",\"updated_at\":\"2022-04-07T16:01:58.344Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}|\"},{\"key\":\"2ed8b72b52cd8884b939b66bb366df199d903af1\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"120:1601\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/35T/6Yf/lQm2rdJzwNIVbVln/style_thumbnail_15.png?Expires=1651449600&Signature=CUXOnaMzYOfVP0JMQMn9dbK2Wo7n8vz2c2MkGMKdptwu8J1arurE8ALEBm~0pHGhR1Pvcwdht~MIJvfYZ2UeMlti~FW9hGxgLcvhPm57B9BcJeVeq9srzupEgbnBOHJu9OhQDZDiL1O6Nfq-R7dYmmQXcc-3hYw4WYpNI798Mx5hVeaXG68mMUyVofE~VuLOQjjFVdq~~LwqjJs6ax01Eirqdl3MJDt5qwEi~Wa0uH3CfUoo46baLCCd4qqjwDB3ukzNZE35RkK83o4yCA5wwuvmsknzYDbWreAAifGgOX5HcAbfoat-PPg2bjJVPUghUj53Rlyg2tfU2p6oP301Dw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Handler Multi Control\",\"description\":\"\",\"created_at\":\"2022-03-03T17:11:01.906Z\",\"updated_at\":\"2022-04-07T16:01:58.337Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}\"},{\"key\":\"1b489efbc59c804faed2d5a81635ef505c02cfef\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1316\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QaT/L68/mosDAQBvgmzWMUIf/style_thumbnail_33.png?Expires=1651449600&Signature=AeH6P03127YK3OFZDY4yg1NAffzTphziTeRx~TVhyNHyvOFNtZFaTqUIYExwgB8xbySfXCckJAD1xWkhQStFV9h1Kqxz1pUisU9ldneTRsKMWU6brjsYE2XqqwJy5OES4GtoHkU2hPxJkV~vvDdE-yX~2CkZn9B33xV6-ung9FrTfm5w0znOH09yuM6ZrVgppadKivyT3KSgQ-Db4o2i6zF06AeW0ejuZ~TeLcyl4GG0KEjPuLMeVcCm45oy7ht3kZKN2~wO04cAicivFiRP0xe8fBUCEm8KUytq~-4JO3RSVjWH1623LU9MicZpWgkWYnovYUyQT4nmoqgAYMH8CQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.290Z\",\"updated_at\":\"2022-04-07T16:01:58.331Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}f\"},{\"key\":\"14b0c1cd30228a0efcad5fee672ec398ee5c4540\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"206:1584\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0iJ/nwN/mwJusRmr6yqR99W8/style_thumbnail_8.png?Expires=1651449600&Signature=FZ8EyUvsKKFULLvEP-LQUCvbQfwzWiXKSy9G9C9yiFgb96sB7IH9AmKEDL02i0t5cviOtPgQNP9JV0tGiggsTKmBDKiU2jlrcxMitaAmhkz8ATsD7e6whadqP2SqmPUeN3JTHH6wAGe1EkKhK7a0WQCsPL1NJ0fBEuyHFae0PreborAaKTymNXn~Kx5KRLZTNQKXrVTPqvhVuycAROre0g1-AlRDjcEKYbb~3deOJJ5UDEvX1v5-5dwWlvx2UuJ0MrA3T1s3GEmfp-vSibxifQ4CknsbXz50HvCEBqCQGgHBbur-JPtTX2rlrdJuHOFfvcsm9QM-Y9Kgz3bdGtP6tQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Alternate Path\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:37.511Z\",\"updated_at\":\"2022-04-07T16:01:58.325Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W$\"},{\"key\":\"0f0071af2db6c2119b46a4b08fa0572b0aea7a75\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1321\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vjq/0MJ/YVihjnC2c7bYQqcY/style_thumbnail_45.png?Expires=1651449600&Signature=W2LUpggtb0BBT3wVxdhhNciZvI~HnRlHeqAu2fjr9Ang4DgjFh4Kp-GgSMpYmXWXvD8cN9X6SBlKBSaTrZv3I2Klt3rVeNWsqpdAzfmTSTGSQGp1Zfy3~ebTmTSeCk3q68FeLgH-gqLQPIRuAyK5m9kgdZxJCQK9VRrJI66PJOd7~MO8NA214yWS9k~nYzqQK5g5xkvgIy9RN1Qj1FDHu0xQB2hMBIbeMH1lLUtOpWwXud7kBMYhSoyUF9khTUyWvKGOMHB26sW-donkjzCP~BwCXYcRposlSUdumS94wDINbQnjvtm22cqcQaAwvN1sLcCb8nGnivcqNPCNPP7PyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.397Z\",\"updated_at\":\"2022-04-07T16:01:58.320Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}{\"},{\"key\":\"0a3dbfb3bb499b639a6cae655ae795f6432edecf\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1312\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nJH/u3j/7Rr3MCN1ZkTGoBgV/style_thumbnail_37.png?Expires=1651449600&Signature=C2k3vDBKFFjqar4uPAiQuKMyTpThA6RZl3VSWWBMSX9vPHCgNBgWrg34qbrgoNb1Oq8fSuOipF1kbeyCN6j-nVtzaL4ju8wYyAcz07hqpBoULkn9MsBEJHCOh0GMCgTOJtAboCYfMMf9ooVpfGXj7qlKxWRA-GV~~xw1Xw6pbgKBF7RAcyi00IciaNvx03AChRwJgQmVR~nPSA0PJ3xptTyo1-TWZFgcTELhxTOVBwDCV2yWEL-Kh-BnInQ1CisxxdxHODQBOTHxn6jXua1iO1WkaHF1zh440xsx3kuigjfkadMySoSmb61LoKlGByrcW5YUetLF61k9VXU9VdyDrA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.324Z\",\"updated_at\":\"2022-04-07T16:01:58.313Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}x\"},{\"key\":\"06eaee152032393df8686f348fce7d32f8f1fe3b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1308\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1uY/VVx/Wkqo9y1NOvOpRz0z/style_thumbnail_43.png?Expires=1651449600&Signature=E~bHzQ1XMqSKeQMulgJIZ-tH4viskBtFTWBKrdIIhtg-6DnYZN74vOZkyByfabbg2UJSV787jisVkmbbK2unQR0HVLp38p0fhR2tga4tsOYOeLBxYTjDm2FYgujk03DOhZHmZcbCZN0YvRnF8vEkh~OSNexUmSYy8fho9AK0xJFTwGnhfMmWnzaODLObz7s~dkKCJUhDkEjUBceNdIsZ99vtHY7PTT-MFYhCTl-VoNiBjJvU5IA~tudDkoVHROTgf39vfxEHZpgs8wbh8H9RsC~N4Bs4J6Ig~EylDL~BLs8u9CFL~u81RTtn7Ykh2UujwxuqiFaav7QDYWUSkmyOOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Text On Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.300Z\",\"updated_at\":\"2022-04-07T16:01:58.308Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}\"},{\"key\":\"03bebbe3f0cbcb7a299cc408d45d54d26d22b67e\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1324\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/MXW/TC3/pR6tvAbbGiPFv7F8/style_thumbnail_57.png?Expires=1651449600&Signature=FQC-4FC0EPQc99Qjm7GfPZdREYo3ZqcDBg43v2lnU3ib7UKLvgZwCy8d3CtOMF~JkDhOWlx~IOejuxvhXXkrVzyi1E7Q3yxdmsn-WeIPqa9HoQ8bHAPRQFSyG~hIobSw568pDJj0EFWRQ4CH4uffzljNiPFjnLZwt0YEauPX7A83S~SkyiK2mQElbAMA-Zp1tLGSDpVyDkL~FpQeuPvWYfpW~FmZpO27-pqZMxLHZynPEjjhzoCbKrDSdz62lqYQbprmI9jn8Oa8rvPeY0gBirLxt6OK0Qh0oQHrMCAsxNDswkzUEyi3LYApnUd1vZ6dhg6qFWXriyQnXFvavBtW3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Text On Secondary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.228Z\",\"updated_at\":\"2022-04-07T16:01:58.303Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}O\"},{\"key\":\"66a3df2c10443d6263e5b901d1d7e72862f5cc74\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"405:1626\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/u6p/V0a/l4s5XoqT4zpyBqFT/style_thumbnail_7.png?Expires=1651449600&Signature=HNSmxTOQgVIbE2ducRn90ImnLcCXMiG4bbRKRy9DK0zi~R-9C8G8-EQtJKlOTmM2OiTqLxLovU~DiFR2mKNt2gC-keb~LzWS3-1RST5~YOY1Y3WtOXeahunmO9UkNmNBwF2Rkyr5AAL1fCDLDaFfhvwheoAqd9VTh0uRwvdB6T2tWU-OefbFGQuILYgo2~pg9BWNqodHulqp6t9bPSAnc9gcWX0tNmaCCxsFeSQXk1m~l~p~P73FIoTCj1pFvURN~Ik73OuW3t0lCXeTtEYDofOSvh2Ei93z61kArhcHsZGTvHkNA0snZSGLO5lxyiV8o-pXHoBxuBSP-Xi4YfPyYw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:57.943Z\",\"updated_at\":\"2022-04-07T16:01:57.943Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}u\"},{\"key\":\"1106356695b7c8414cbe1c13ad79fe2580f33302\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"405:1629\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xyO/UmL/OwmQikfCYD95BMwo/style_thumbnail_6.png?Expires=1651449600&Signature=SWrykKcIV~slJQW42zbx~sCwGADi4L~sc58-Z0bq3T3PZZ91BdVQ8QXncZBYqOfbEWfmRxO0Y0fau7nSvtzxAYSZozThN6bK-oUuiJAzEYDel2dSUCrbCrOWHxIm1uBYpUQ9pGUEfg-NeI8qTQw3ws1-zM4TBKxxGap5-rIEejJWVM7stxg-DRCEhcqGJCKafT6D0FAMs9ed~n6IFYgeBd1OkFCvz0hpemawkvPH0yHGAx9xpwJN-kCW7jvkphGoE4AnByJpECS-dXkLTm0E3YTGVE2sRNiJ5xSptGKANJXKs0RgKPCZ~JLY0VjCO7oTJyB99A~ih8HWQ~11bPNRUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:57.937Z\",\"updated_at\":\"2022-04-07T16:01:57.937Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}|O\"},{\"key\":\"b95b5518f8ed0fda6d8c0410dd4e15e824bbeed5\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"405:1628\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/gaz/1Dk/kRLOS4WPthdFghol/style_thumbnail_2.png?Expires=1651449600&Signature=LgQWfcNe36VNBFTHuzZyel2svb9LZntp3z8cQhvujEpIKKaxiidQDBaHI~WUjkrvA~oV80UTG-krxNfZvA8wrTjkhAQ-vbZllCSXV8oxQ54KorGNi96NiupPRsV-JA~e595XPvtHxOqASnpuKqPdCCHpMcKdHRgsulP9GJuk3cKIz6~6LaJDbTJNXldaXdwZUh~5sy2LjNEvj98ndV8cv4R8hvydF1Vu4YnHgyJoabiPOsRlcicaPDR50JIh7uwte0epyhH47kN~BkpFdo8ywdT3cIVMqb2MqLV~qqWzpr2Gy-zlNK0yLATENAaqLpQYUKjcgp6gGRh7PWoIMcGnXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:57.931Z\",\"updated_at\":\"2022-04-07T16:01:57.931Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}{O\"},{\"key\":\"ed651a82fce628ff05d654b9c6c823adf6c813dc\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"402:1795\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zrt/6d6/nXNmJNkQD8Yj7J4q/style_thumbnail_1.png?Expires=1651449600&Signature=gt6BfznyiMkF~JioHvz80lBI5WaBSH4ivZiAv9Tp40Mv1DCljFc0XjTLy0c7k-div27Lh75TfdOb-lMu2LOBSQd2MJHmwCcQrwQzgaPv3uwdIXSlGswT63S6ai4PTMgKLpuuGAnkVdnY77yQShLRLPag~JF7lY6gex7MT7IzB-8PXrv3b~cw4EnKvu1WbZhkwZpWgdPoMmnuga5LiNxXjkrcnZ54uiTtsCvkJnygx85inPPA0fZLKfZ3lzDUZ9MVbG0ycKJnX4HyDRRuop1WS1hnE9lA23UJ~RMWCkqIIQ0-BZrc-fmpNz2EFLM8jGTArBKeeNtltVh1yKzD3qJvBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Selected\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:57.926Z\",\"updated_at\":\"2022-04-07T16:01:57.926Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!\"},{\"key\":\"c1fad918c767a247bc3a249271f2415aab71d744\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"405:1627\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xgI/sFk/QT6z4jZl597wRhJg/style_thumbnail_0.png?Expires=1651449600&Signature=UU8wbbvHLz8h2ihpfYPeGdhZsNTLZHk9rkuh-ITEfYpufSsGxxuR6e~S~NzQOR0ZALWAGJLnVWWDoa~Vuo1JFnD5hEvh3317ZRbiWxUkBMOZC6CAPTh5d4Nz4stheVLLm1t~-i9iIUsCO5VySiSQrz63mz0yT052P-LP1SpkUFaDOO-2NCXG1Lvkx44LP7JuaMoEqYSQKQVCCKCDZZoYkDxKt22bW7O~lD1alTMFYNlz5hdzcO3s40xXtyKaLnhA4dim7R2BrwDWmpEHKNH8bogzd3ydmM7uYJh6j7YhJaCG7LKuotolkOMtI8LSiZYH3dFUFBFp3bZQW4sd8n9ldw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:57.919Z\",\"updated_at\":\"2022-04-07T16:01:57.919Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}y\"},{\"key\":\"89540db00235f36e707191b6dfe99b01f5e19e83\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1641\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/O1i/G0c/N7QvyTrOlXiE7iBL/style_thumbnail_0.png?Expires=1651449600&Signature=delUkK~~KDFY1oBaUga5Cj9ZRcGGrWBjJqIPvYePx6zLepwm2bzM7L2KuVb8s6gRjGpi5dALDrAe3zZmywLC9t7rpjNu0uMmDnNGNXRQHw3YSmbUGAgTVjnVKYWwOlygrqrMBzF1VdCPG9ey7lPmRmkEFirIhvnJB~PEKTd6AsAJecOrZIp65zucVlj6cCA8ULPSmRsGYt-3dQ~OjBkSQfc-vw1JyqzAEYqdf-LKhdcxD~EqpltxOj62vrufJIvQbhoWXHnGk0-RUvnMZc8j7J7MJbW-uxFhhjbrBDZ8AB9FrUarrUQnkKK~44mOCGqG5aCCXmcFICFQ44YM-6LxJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.906Z\",\"updated_at\":\"2022-04-04T14:04:20.544Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~>\"},{\"key\":\"ef8df15bcae18523a1e9c75ead76484e3946905e\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1849\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xCU/gCr/ZffcdTwv353qnk9H/style_thumbnail_10.png?Expires=1651449600&Signature=hZg4877v98AaKr41urUCJG6-SwkdOpR0DUn7RWp4s1FFL3X5iLapzoLn~1AkflNh1XqucbDoZQ41~D3zT2UN3hRpyuZT9O1mAnwPkUvMjGernAuSsCUfhTFL12yQYHzbveEgnJb56iRnPMXbBPs57bJTHPy7E-TamZRvmE9V~t7AIJgSLoP0WrWFKXqT9H~0eeMrpKsaVnefLJWiKDKvrayQu9Z3UBYB-Yi9PvwtZ0MNstJw4Q6tevsRJIomtrTUxGrMUR1TykCX5nwnJ80frdpgEV0oI4soJble3LYZiN6Tvmcez~8WtPJHGyuHwxj8nkPmyExbhylk8u3559kmdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Operator\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.118Z\",\"updated_at\":\"2022-04-04T13:08:57.002Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~=}\"},{\"key\":\"c20fe0c3743e693164e5960baa00ea19dfc67b1f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1848\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/28Z/7lF/vtRR7CtHSpmMWnaD/style_thumbnail_0.png?Expires=1651449600&Signature=aCZ3DA1kUjdsAXzITxvs21~fgKVcVD1WQTX2W4aV0ZqULNdGu2tKjoXNbzzwPBZpqVZ3MaFanUE5Wt2y1uZbTP3TU2iypOUCjkzzcAiRf4loOiTcXEOlI659Zu~BxeMXlUYnVXu-gu6Itkvw6y46hJWaZZNI9Mtal~BUo7g7-3BuOi12PcDpw~xdq5wa-xcSVeyL9HnvI7~44ng7hYP5anhBxxGWLawv~Y1Mnf2e0N5c6vEWhCmKOq6bnOBRtjxkiYQ9d1XUnJKeE7RbKSlJMk7C8u0cGQScrhcVRW0ekiTHMTOdWQFMedVdIg8Oktdp2SwyMjvpvn7dttXz8jKZXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Numeric\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.146Z\",\"updated_at\":\"2022-04-04T13:08:56.997Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~=|\"},{\"key\":\"6d89ff003733834de9c17cc3a8efc3e3e4af81ae\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1845\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/i2A/G42/XBk9ZLIHJl0r0dlP/style_thumbnail_3.png?Expires=1651449600&Signature=QSBdjWrqbbE0-Z7AgODt1ikT-UwdGb6Ix0o5oSziLgf~XSgvxdI78SORID8jroQ5P5T2C4FBpgfPaid3I0LoV44k~Vfk1HGmaIQCZsqsyPUgTgdhLoAhef~CqKN-niP4qhDwioskap8FGJiCB~swLNE3qPFWh7QUH~Wo8d--QrBuBJOqW368HdCZBwLOXzxloSESi44ZfSejpgSBvxTzxJHBWCOsS-xv6quq-tksSKw0gDCJDMrkTWsXRqR5e1f~Qim-zSvSvw7U7zQbhzeM-a1kDtKIYGjjzKMT1LD7CRgSwmBheCONPd6fYoiXZzC9zEB7Cf-Hd8qn8WJkGO-1Dw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Function\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.171Z\",\"updated_at\":\"2022-04-04T13:08:56.992Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~=r\"},{\"key\":\"6ccd77187f48a324145f9cf158b2437fb20021da\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1844\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kGt/Ol6/lxI96MnyKxDjWW0c/style_thumbnail_13.png?Expires=1651449600&Signature=SaNxkpSc6a78RygaJp5xk7nvRdCALPrCVyenbcdO~qwQZC2U5C5Zt~21G4oleowSXCylwONKztQYPQD53wnMQxvwIOmyM3miNOQp-maj0oJZ9XzLl7PGSFn-csPI~6wSYaNaLm4cfRWhHe1ODNvhrnKiruxxep01z8wKORFtc9lfb3ULB1vvmu1GhEWiWJ4ylauHg92DMFSt~tnN4HBMm1BgMDvBHjerx1pH26Qu-9X2CyBh1V8~4avHJg614a3QxXCIUMaynrb-flXhwziL6SVasHbF35gYNXHqNp0sV4QXVyzOrhe~x9OeAzzZQIL1oNZNgebNtquqF07iQN-bBQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Keyword\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.126Z\",\"updated_at\":\"2022-04-04T13:08:56.987Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~=f\"},{\"key\":\"0e5bdf33f848cbfcd4c6261864f81cab04d02da0\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1846\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0T8/iM9/HJSNLlpQR9F4bEmA/style_thumbnail_5.png?Expires=1651449600&Signature=PgBp9f4WmOhRVy7x~yWWLuYi1KQf7R0vGJhnBWYQzKMf5q7s-wFf6TpBvbeCKV8Ljz8Zwtjh5KqqnXT7vdvrqdL~8N5x2ij~oe10PW0Hn2WLzU8Ns~kmJWPaYuMRMB8R5LBsfFSwksQJNrP~yANud70QSaMj6hhbXOzBP5tM8wImwGv1VepfSiQ4-ED8L0V5gfydT~ZIJTJhL3FcR6lRhBFn04EeVftrWp2nH931rxOCZVcs0t8vtEbfAc5AkQCFjk~EMEeRoFj2k9Mu~N-g5yDUN7VZiRXUGMwc-SjTtAX2zHZvLCibQoc-6AJVv29e~ain6JRNG17djZNk~f0BEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/String\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.136Z\",\"updated_at\":\"2022-04-04T13:08:56.981Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~=x\"},{\"key\":\"0b5057da0f4b779ae6ed12d92aa2254314ccd42c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1847\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uSl/xN8/nWjDNmyjlBue3DQz/style_thumbnail_12.png?Expires=1651449600&Signature=ew47AGSF~CwzD2E29l~vr0RtwG7OiykBPGFuGYFe0HVZ5nDDhXN71dbBQ6r-D7TWWzusKgXwbw035zxxu-QsCw4d3hQOiP9rHU0ngdlcgJtikqyevBTibBrmEnKIw0LC6XRn~3eX9neAjTJAn~sY~zHhaW7FKC1KFzs6XyaDWGQAGGAX09LpB0HL0viP2aZqM~hKWtRB9-yTtG3pmq9r1oaQgzOUAE0xiSSpq6s7RxQix-3k7PtxP6Kwv1UoSWQA6VbS28ana8oJFKt4AaJUAjiFQPASz7~fo1ljbD6P3F5WrdCnKAi~846lrem0AA3OxcgodUZ2qg-cJYEKCkfr-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Regex\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.204Z\",\"updated_at\":\"2022-04-04T13:08:56.974Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~={\"},{\"key\":\"082e5844515c3269031ee679c886d1e6cdc3073c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1839\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Rwc/kFf/4Br9OCLpoChuUtvY/style_thumbnail_14.png?Expires=1651449600&Signature=dsIB-KzKWqNnjFOHsbLSmJoeixxY7pevdvN-tPQVhXEw9Ykr9YMvTj2tCKvMpfPId-TkadC9ctwlBwTBa6qY2m64-9palSRLVQnw8hRgdwGs6ENlU~08bPTmeFDsozNpjdxXNYHZp9f8vbdpTuRAbLaJkkZNwW-Mi4fgtCuwWvkGHy-t2JDsHgs8JbKi2rtr3guIcJTMy0yf4UaGdupLIcoGrhH4gMZOeZraQVrrP~NqrLCBXF4l-zBvlpMvvvM~HLMnwsh8J-VEl5mhZhwLcrDe~GpiALEtCOhxXZ~PzD9ycI2H8Gg0O~rmA1yAKhvG8pTxNnXow8ccJQWUFCMrvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Normal\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.141Z\",\"updated_at\":\"2022-04-04T13:08:56.967Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~=O\"},{\"key\":\"cdecdfda76b077e0668199e3c2f74fa2fb592b0a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1730\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/FpP/Hb7/AWHvIY37UPSiuCT2/style_thumbnail_20.png?Expires=1651449600&Signature=AhRpC6vfHmVpDNEm00-BYtu9m2HE7ZtjxqTTlq66SAj1CBKcmyFqW4OSWUxPkKzLSUIzAA-X-tpNsYJCCYLMS7UuhB-I0tnl4IP-Z51HaI0G0ZqIgaFDno6ZvOWibltcmTfJtV-2wHni~KAfBg3sSL6r-YsaT46pHMUOnMwd3xbePuWoAwkL80Wvzzx7OsNJ2M74h5bCb~hHWOA6nJHafAO2HnCvgCx7jWtBPe5deqUnK~eqVX74Bzh7PA6YjrcEn6gqzTgbXH-yBfaUI7te4VK0nap~~97YCVMqfErpFdwIUWN0oH1Q-pqFx0JF0vniWFyFceykc8lSBAQx7nBUog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Muted\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.936Z\",\"updated_at\":\"2022-04-04T13:08:56.936Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W\"},{\"key\":\"768e016e46ea9ec6b62b06e907ee49160dae11b2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1646\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EZx/QCA/usfuLBeiILxSV1jD/style_thumbnail_19.png?Expires=1651449600&Signature=B7HJgbjB4odI5PnqWhJyk~~jEYW6VV-Szm4TRlImG9e9IDf5MKcE4bQMWPpY0hMMQcxPCkiUTVQiiZRw5pMpQsugQTAVUXDxZcSe7C5D85ZN4nlR-VoQJDwdIa2LsI0vOIKy1OzwXDuZVhUQbJbdW9W1XAK94Zw1AKN53oqaRmD0UGT4UktNIlUl2D2fF4KunLjb667XcjyXxnu9aRz6vQBKHVyNpSzKM5-E-PGE~RgNyG2yJnl54p2wDJcNVW5oa34F2fMhoUoh4dGdc2KVEnN0gYZyRonvoHir0D9o4dmh64t7Uw4RGqr2VL3OYqzwlsgrebglqmS7OzIol~sT~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.932Z\",\"updated_at\":\"2022-04-04T13:08:56.932Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~M\"},{\"key\":\"838bad4394aee22fa33f86d2c2d0776dcdcee982\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1724\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mKL/JJV/VkClp1rVVlvu3WDX/style_thumbnail_18.png?Expires=1651449600&Signature=S1M1F-ql7P8jA-QvZnK6RhPBzgJU3gKfW64ddtHhcnijuYTtCQ5JNx0p4narzKft~-1xGFYaDTDIBElSLF1V6AZmzz~KR8luYRvcQkXaC-Yy3OxpwE1B6VOiMZ108vuDcmmhXUUE~I3ruOIj4WpVEMASGQIiehwoGrxTr9akS3x930Z3wb0~ym8smzVXqKwU6SEMabLaxf62PFlEbXc-wSt~R0b-AInRLjXBMdtSEDJIBjqohNb1TGuc8yMZD9-V4uXqTBGyvlzEEDeH~VRxaS2bw73a6Hkp1RtdbyjnC-Dr0BAgQs48FPl4qcVwSEAY5uyO5IFdakPzq5Hnw3F~pQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.928Z\",\"updated_at\":\"2022-04-04T13:08:56.928Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~V\"},{\"key\":\"780115171ae4abfadb7766f22becf85e7816481a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1723\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HI7/JQl/lRWHt5c5IWVBheV7/style_thumbnail_17.png?Expires=1651449600&Signature=PsV1EOoc-C~Rf0tQjRfMuGaN8n6bZeOvLnYnpIUyLp9keK407iLp-A9i8ZM4ungo6Y3Bv~5PwKLy0UlLYHSxMT8jtAIVIvMw9m7dUBuledKs7vumx43xSKNPfFRv2bvvtF6oTCMZYoQhmIxSE6eGOE-FaoY1c9wP~UAbVfn4bHjpVx4fRSfU5fLlMM4p0O7xMPCiZqOKBYGxuemkTxJwFKSTFypmoAvfJbr~xqwnTlF-9T9dukWpVMDgcPaFlEtTq4vbuXkNbfjzU09NJXlCognED~FIYFUgebkowlblrMM~ADJBY8iHqyM3dwWzDSaDWY6i80d7667R68nGePLs2Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.925Z\",\"updated_at\":\"2022-04-04T13:08:56.925Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~Q\"},{\"key\":\"55e577010d43988ab417e18c2933c7e0cd6baa19\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1725\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/44x/ROf/pIwzu6t4aWprseKB/style_thumbnail_16.png?Expires=1651449600&Signature=do84hGeSA3r-XOIwy7El9lDn5OOSeZsvIcUI5D9LIv0~uhTIHX7yYc7AIqxshm66w~C~X80~L-QsDFfNCtXnO9DUNHfKRAsMBs0nfAvJdE2nL4KOozPqBSQcJi6WjQ0rfNQqfIHHGutOGR64aXvS0g~0T1Sb3tNIsnXChVm1BkqLuyt0ywLHcvCaKAT1Kk4AxqDAZHs0D3g536yDGcITtebULaqX7nk3DasiTO9TYHMJ6i2sZQMwsMxlSAeHbK8llZ~ruMsu0Z1bJ32Jb8G5vdrU3o4kCBgEnfvycc0tJjA4r9LQWy7GExBrJF8iqwa8XV5q-h6rfUmDnGqmvUI8hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.921Z\",\"updated_at\":\"2022-04-04T13:08:56.921Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~U\"},{\"key\":\"89017925b9ebff43037610060be9de7cbe5543d1\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1653\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/LCo/MFb/kTDZ3uDZkrDdUPBd/style_thumbnail_15.png?Expires=1651449600&Signature=YHpu0R-mjg3d5QXYPVr5X5QgTgovptR38BCK4yWid-16aRZtdJomTW9l5MSOZHDXMgS2m7oGuHgYpZZKlrwU7ymeuUbXXxt8chk-O7anztMbzyqaO~3hZ6F~jv1xAVNZ9tDR-606NTthhS52kXWvHSYMN8TGrwAB3-pD7EMyqy6alHxfFcRYXDAwK15Q6j0x5My70vIh5b-sFPruZosgsjm-wrDpLaufAncz6avsszgWBhxB~kXPnoiEQS5r~ghbKaZqPBCE8K-0-mLGhPdlggRHQlijXlefnmIzHeV3hE-X5bP2pIvgIdmRiRb6o0gij6v3NFjbuXkVK7MHHwfM-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Error\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.917Z\",\"updated_at\":\"2022-04-04T13:08:56.917Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~O\"},{\"key\":\"0430f389fc2306bbca6ee520309b473b3e4ad042\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1644\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/P63/kTA/VSfDN04amMmD7iUs/style_thumbnail_11.png?Expires=1651449600&Signature=EzZSpd9K3ZQM~8M92t3l~P~r~E90dOqq7p3AtnuaLtHb3GCwL4-XDfXewi~sNjneWe0ye6sqxGPh9aEl2G7vISlWEtzh9a6nVA-oWk4CKAiDkGSuael825lO9vnO0Pk64Lo5p0qSFTpo6y55OCFStkWogmSmoFAsqZQ0yjG3F6qDz0Ga5W-QPC1gNhXOEdQh3Dfv2WWDz~8uyAGkeJEumwdYbcpL7SZL7xyVd2P95wBjBY38JF2L-CfXQmp9pMYAfsptS6YfW4BR42b7WBg-ZXy64-x5yENO1K0tb2dsIhSMoMZqxTAEe9BN9XHSgv8J20Fm~fg5pptLICzrmryn-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.913Z\",\"updated_at\":\"2022-04-04T13:08:56.913Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~K\"},{\"key\":\"f3b3cd4f903e80e82c7835ace60ea970b15138bc\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1645\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yff/txp/4M5VXEDoxfEylQZw/style_thumbnail_9.png?Expires=1651449600&Signature=JXUgxoIYw2Ge46K1xGToPG1pfFyAofJf8wv9cbWeQHrGSlPSBVf75CTrNtm1ZufnozlufNA1bVrHKiH6UwdXgULqmF6N38Xko2MIc0Hx0sbm8Eu11KkOzkBuEUTq1KlCQnmqL0l-f-76Is9fc1~WIqZ6rIVGO9KTcaGcbx9I~BkGsO5J52dlyDxmT2KM16pM6eulDbBSZO6Lh8HPmUn6sLFE0oRchQ2vNYPjmYnCG9NC-jhJM86jUh7m1rKLIiCmJaDeE9vqMbY9ZpJmSmGyWBDV6~LSRRcXVjFN9FUb~FgFkSX3jqxyWuLtiNMoUVg2lK-yzP4u9FUc7MRj4X4j1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.910Z\",\"updated_at\":\"2022-04-04T13:08:56.910Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~L\"},{\"key\":\"dfffd3e347be8c787f17ece5b581aa81b6ca25a0\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1647\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/D2F/UdS/HGYfsL8nfZNEaTHE/style_thumbnail_7.png?Expires=1651449600&Signature=A2N9ehW5ffXBQHpiQCxU3fPlRfY-g3cVpbw8i8xz26sJb-wIxrGT31lEmULcbnzsYTYd3-3uKUInWGemGJvaKF3qxRbt1gf7ynu9u-TikuepElBrN32cNXU-2alx1hU5Z76vo9vwh-SJzxK35huV64C3ek23Lw3GC66rpxaBpBKNk-lbYUb3h8Fn3CSGeAVpsVG8rG9QwoW69eCu6HAvW5taQYwcuxFjN7Exe2Z8xid5mXe~uIVp9SdxTI9x8SwetfcoJv0vPUlMI67SuRK3kubSHzA9X2JDStXbeaUtV1V5u1Vc5dJLMKmj8CEjZ-rWeiIqRUNNpjGpt7vJAuzgaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Highlight\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.902Z\",\"updated_at\":\"2022-04-04T13:08:56.902Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~N\"},{\"key\":\"e1245e0a166ebcb0c9d938a45fe7321cc30ee3e3\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1659\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vet/Dky/SnBlgiPP1cGf7g4D/style_thumbnail_6.png?Expires=1651449600&Signature=gm6mt~v8b38DQWTxnTUoaZZ8X5WVYe4SvPpbHeycr0MJ6Thza5O7rvnpUE9f4Kwq8iwMZlDDrbNiGr6ax07XTusUZB3KPdmTfjwLT5la~-TvzQa-1~fIcH5bm1bv92xCIOejmqc7VD~TYqVTOHDw35Qjf9xLlvYpNJF5A1kRvm2uSrEePFc9OevJPBR-xbyLRAn720OdY~k7DRtraSAB3HtcjIwK9AB-4uFdY-zbdInAqKyvZ4nbeJdXPXLdF~FdZ2JtdA3pB919YKZVI7Y2iXrNTZT-EZKUMNmJFAM3hxDNBeqnrUYdm64Tye9VhERIzn7pufdXcm24mrnIuGkRUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Warning\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.898Z\",\"updated_at\":\"2022-04-04T13:08:56.898Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~H\"},{\"key\":\"c3013a3a6394e0633bf53fb98d9e67f8bb4d111f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1642\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PHp/pja/tlNrT2cAMiLHBkwX/style_thumbnail_4.png?Expires=1651449600&Signature=OZy-IoGzbBwKzi8vNxkBQ8QNRL7JBQfWYRo3gufhkUaLgi2VdqFtU8Dicuqv9MA7ZWnKQg5hwOfu-xjRqrjJHr5HhqKUAcbHNvefwbaZInBzB7nem4YVaDEim0JNM1yCFIMkAyaRf5D3TM~AHAoc49soXM8L2Jdl0sc4Au-Ii2-ymENXHIWEQA5Hl9kjYzjK9m6TLfsdWl7h6WNqjehqB2NOVU71DL1Y2j60MvA5gXcKM1w2iBMSKM1x6vbLljcLsajDwiknpaoeU6FSILLYcJ44Ptq-e3Xl15CVM6QYOqiWmOhwffVC-0xS~ZcyqJAWmvPsQX2PpjP9b-1RJfvd6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background High Contrast\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.894Z\",\"updated_at\":\"2022-04-04T13:08:56.894Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~I\"},{\"key\":\"ba05d53d05254176d214ebd016d3c509bbfd032d\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1643\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/o3n/zdA/GdROwqLq5ZBOE0hv/style_thumbnail_2.png?Expires=1651449600&Signature=JyrJNjMZMjq0kNkdNrATKygvzpVqsMGrqKaOHT75Vn43VFZs8OLPrdTX6LGQuCBPDOP5Dcdqsr~NYojz~ohAqgDtAV~hbr98NF39xFtNeTUZVlTWalfiOG89WfTDyTjfVRloirW4iCY68rsYzmgsJX1aTnde8LoV1E9tYrC5XSHChF~RZwPP3Xzkx9fzWyWgq98t8~nX3zFofMew7R5gXf4KXck5kR2csjdbkI-rTJKtzXJR1~fqh5GrwY6OkD1S~B2F28rCTQz0cf1yVPUKSO83JRxkqs3Ql4hfeIvHcVsnIHrIKtodYvoTyoz4M8NCGvAe0ht4QA5sTy6g~9w6Qw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Regular\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.891Z\",\"updated_at\":\"2022-04-04T13:08:56.891Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~J\"},{\"key\":\"5e1e99c8d5afbc011bdd22de6ec05d090543ab50\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1665\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mZn/AHl/OPkZ4dAEkUKMflp4/style_thumbnail_1.png?Expires=1651449600&Signature=C-Q~95Cg~ffImglTNrjCbatv~-TF6diOa0NQfYKD5Hnh5s6uOtC9M8lY4yz5yiUDQs3-EkBJnGo5VlOO3UAvxzIS~KAwCfb~AjE1uJ8ZzHuuF0ue8YEA4plVAzpEsH4Uh~x~2drNGGuQwFqZhIHVuRtQviSbKy0quEdL6BJPWpmusU0LJm-vmRvC-0gxcgDJMu5FHAXXtyoNqTGTzsjrpcWikdL45eJomRYJvFSGyPt6~auYzmd3u5vIQFw7ijYJraoTSI40ugm3gdIvCNQTBJP1apHQgcpeYLNdKGL--LJ3~dUtX7QGVc0txtBAbe8MuuCvx4vo0qlwT7TaXSWkmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Success\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.886Z\",\"updated_at\":\"2022-04-04T13:08:56.886Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~P\"},{\"key\":\"e6034bcfdb11fedfb2d0d8d89e0f44775cd17d16\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"56:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3CD/GfL/6Pw5MpypxpUBLCCf/style_thumbnail_0.png?Expires=1651449600&Signature=YgAlDQALPnmr5jS70VxFZ~6ZdJcdO7~sJfHOzMeEfn1AhO87Xbd7izkShhzgZesko4y29gBqRXnnX15l2Ah6m2tc4s-W4FWsKUU~8NjkoOtBOJ2YfAlEEU7CzEB~4e-ot4IXRsHUv6OnJjrvDmE69~u6TWvDucoqfFRztgTv~qEo9OCFTPy3he1KJZjBe6qPGSM7Li6V4iDv3lR0wwwZ4r8QXPavyn219B8mBaLflq7SGEDsP6GXtHjOQjwfNUbZLyN-lRXxMKDbjUkDVVrURy5bYbtGwV6yUdyA61KvzoUdMrwfYGm0k77eK9jDJJNQRH2ZPzBh5ZRE1r1sy91i6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-24T16:56:40.445Z\",\"updated_at\":\"2022-03-29T15:02:02.116Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"RO\"},{\"key\":\"ff8c8d81b7c93788ea0247558bd82e4882e49405\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1486\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1oW/PPT/dANuUx7qAWM5eIcI/style_thumbnail_91.png?Expires=1651449600&Signature=Usy3omQHSRvs6Zm0DPTHFWnIJimQFdZM7f7VY~Bz~Gkl22qdYW9H~DfVAPRtfRpmv58L4duN0r4d4O-m3byQCIO5K0Lwf7wNFN12zZDvGYt1bcV24ocmWGxd1dJgppwGv4~7ZHkbCB8XVZR1V1XIWUuooS~siAU7Jq8r-3h5gGyaFpquuvYZWK7JIeVqHmlyQuoKqLo3G1y7ygl7eKwJSla2pJ5uzB0AOr2Updxx~HiaOv7B97NgEeI9GRnY-OEyx~gQcv1b86hKQmYEIiRs1VzImS8cKVVQ1nSUafsbqm6koeNwH-XdXa9YjWf1Ziypch3Dd6B44DpUjfD3kIIq8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.566Z\",\"updated_at\":\"2022-03-11T16:02:18.246Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"V\"},{\"key\":\"fde13af11696eb0406383d8c7991a5d0ee3c8997\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1519\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ags/liQ/hHi1iwmFKuXXqyKB/style_thumbnail_96.png?Expires=1651449600&Signature=HIDAgRr4aYB8PwyMGXse55NH~dmCBQ6iJiMIERmo529xML1FSmi~McuyDC6XmtIV~6fR6VQpztXmkESyDLb7MRo1bDMg0Ht4r8xJrDlcfFXZ0-dFs~MMAmg8XErnOwsmbvcTbBxcGiqYw1U9TxyeGGcaIAzlaLAvejWMsfZaILAQxBgkFTDT7MnK05r3czuBc-c7VR7cKI9c541BIB4z0FFL14vs08sN7niBXFVX0pZNejJK3Q3IA7hmgzinKmO4oGoJ0MwsdD2K5Dh087BCHtU6fgkSmBQSOCy~i04L2Ilm8C37SUVBu7oH9voXU9cZVN6JtaUeOw7eVnAs2TYHBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Info\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.592Z\",\"updated_at\":\"2022-03-11T16:02:18.237Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"]\"},{\"key\":\"fcfb439eda2d0fdb1ce6c2bffe6ea78306e23a01\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2396\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jkl/g8Q/HPOyGfOwFBgxoksR/style_thumbnail_98.png?Expires=1651449600&Signature=UclgWVEuZ9-i6MR~2q6QOby1nCyNyugkRLHOEz2dK47bbx1zS6razi3QX9d82WKpwPHqz5FauGfEm7w2hm~-ZWREiaq2udK7tlsrcKPEW9B5R~1tIHYvS2T4eU0yGvbCSCVJ4suX9Kxp~m9BE7tZLjlB7S957fyQensyEwp5fcgfmqLZT4r5WCVWy5K6leVxZBEU~ODudnNP7Fv3gnDia-GEkKFI~Y-CmWfDSqvnQLk1SJvFdTaUMRAgSehHG7T91Vn14nFLmEtuZqwIZontGBiZNs3RlmJTELiGmrJVyiMlJ8CtFryPK5bvHUrBUP0RMWgUzSYZrd-Lkr-3qdYQ3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected Low Contrast\",\"description\":\"Text color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-17T15:35:46.602Z\",\"updated_at\":\"2022-03-11T16:02:18.227Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"4\"},{\"key\":\"fcef2ab05063c319da1be2e1bdd1a091b646e0d3\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2375\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/B6O/HVs/gPGhiAtlJFR728k3/style_thumbnail_99.png?Expires=1651449600&Signature=aQjXBKVx5yH9WABUmuDRiCrxWsBVhpeNlt6HMZgf9n17ZVAkQb-97mvTrZjDnrn-FhbjCG9A9sy9bcXW2A5lXahV8oV~vyhdVjqE3AlfU2eLQzeuFmKx~E6ubni98MSPH74DhHa5Nm620Olwx~eeD~aD~O6DLgDmDMBj82HBuTP5uxVeWfnrRTs6bXA-cdcMBkxZhQYHFSZ7vYtZAoyJsNtk5cA4WE7uTEsdIj8eMUW09rwkpE4jxU~INxUnZw0Jg9HrV9Y1sB1UWhEzThjGv4DxFLUlnic0ejkaZoEA2-uk-0chIotaONG7akwZ1zOVJB8fWbgfXNuqm13kAKVI0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected Low Contrast\",\"description\":\"Background color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-17T15:35:46.608Z\",\"updated_at\":\"2022-03-11T16:02:18.223Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"(\"},{\"key\":\"fa4595a947833b67a8eaca04a73e0e4262fec4e6\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1521\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ZTz/ayq/hDZci7r5b95DvjnK/style_thumbnail_1.png?Expires=1651449600&Signature=e1NKKPp8SZa6NJKx9OOyPE5UC-fXN2QD449b3OBu8eHugPzPllbZg2r-slM2jzmF-sb8c8tqmq2j7xL6a4AirPq~V-fJws0-kRblYHZ0gmFhcdhgFEBCEIIQdUu3frxlw5O4LCPj2MnhteYyYmwazRdY~tiK5hlY-dinIF6dyplY3IbS3KtH50a8Cp2B6k7uaCR6c8G63ItcQumJX3xAysnwxFZyilnjO-IVGmCepoGQOBGHyuHnum4Aj4YFwHgfjaPKMsiRdF4W24Om4TSwtSwSqB4jNeckpUUypwujezuOiscJuesx8DdnIua1JPaX4a~4R6dSMpPFlz762NMMEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Success\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.438Z\",\"updated_at\":\"2022-03-11T16:02:18.218Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"_\"},{\"key\":\"f720936e5d4d6f651528ee735db2dc3e7193ac1c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2372\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WvG/WUb/TPt7KKwuLIyp57jN/style_thumbnail_92.png?Expires=1651449600&Signature=ZdAlzOadThiqA1vqqJ9ktTido~prnjclXf~I-zkpl5FJ9xLnStHEPcOKTqa-f0-eUGOUp21nkngUzt~eRqOjk4-XkSRmAZaX712s8bOEXo5qbgcxaO7f6Zc-qsLnv1Q23K2fBGWaBpiN-MZDG06R43sKo~3KQj24r1rPeSY0i2bdx5ZQRh1KFHH6mX0yMug2xnDkP2Z0vqSHE0BbeP-~Y4LzNLrfkPK7THZas6hG6s5wzsuUkFLUqSlaBzCKXb1a6d7CSzieU02L8bNtiXcvPUBKCqsg1Ui4jzcvNecxt3H~1ubzgSy5he891LhsT6terHOf1~IcUdbWRHMDBTnqcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Floating\",\"description\":\"Feedback indicators bg: toast, callout\",\"created_at\":\"2022-02-17T15:35:46.571Z\",\"updated_at\":\"2022-03-11T16:02:18.204Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"%\"},{\"key\":\"f0ae4a74df49e73724abf9008241b6d0a617ff4a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"21:448\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/DuS/Htn/Dg3GIDqqx08LOmn3/style_thumbnail_74.png?Expires=1651449600&Signature=FLRAhAs0QcL7xWt4Qr7L~LMhEtIMnxTiYyfBokq91WcJawV9DemnkX4ZquEyvd9gJUkX0NA~0XFh3c5iAgTcToqjSwTXEsTr3XR6mtgi8fs7-8698-qmFkbdVf-LJzHNqxgx~DDayX-ek55ZuDl-caZf2X34YGmvZbKRoOJ-Jju5hWh-p6y2Tw3~xzFwog37Rtd9jh9Q3jqYgj3jlES0ifb729QifqcW3DDodxrP8ocb1yWOd6Aw-qVtJFVK~WtehohsF7dtGYmhg8QooBgtXzNqgDmxBrAiBlO3zlAmgPwl7Bte-GcU0CWB9JJcyidLzEU~~WwKGCgO9Pf0FGVGfg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.483Z\",\"updated_at\":\"2022-03-11T16:02:18.186Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"C\"},{\"key\":\"f085f55d821b6c745041bc21970d26d1701bb283\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2380\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3Kw/b3K/4OC1ld5L3rAiG416/style_thumbnail_89.png?Expires=1651449600&Signature=K-hWhVeSQGLaKswaqIbG7pJHACLP-eAvRCDgwemKT9p7WUyvFS~~ZyJuGbW6yo1Bxyboedd0oMTRa4BI9H95DW46E97PFBOamOgdZxkTan05GoA9W5qo8curnIw~h8KrrG3GHAxo0~pNG9j8sOjtlRHhe8jG2ADs342mKE0YZn3mfv~Vqap7JpN6nupCflSbfTkldolW2d6iWzi~xdtcHJEobIQK-MTbjwh91M~CY~QOgqpfAh9kwA-zrVBARZDZmode7OmsA0cvU2G9PBmprMMmJo1TgDtt61MVBgFHFLLNaE6hhAZaRCGQhtrzXrz76IHl2XZbHbwOsHe7MlcArA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary Inverted\",\"description\":\"Inverted Primary text and icon color\",\"created_at\":\"2022-02-17T15:35:46.556Z\",\"updated_at\":\"2022-03-11T16:02:18.181Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\".\"},{\"key\":\"ed7ff3d8852c1b96614d2ba17f5c71157eb86160\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:740\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tvG/hTN/xoMWtuwLvVVIS9t6/style_thumbnail_70.png?Expires=1651449600&Signature=WkDYGi0GD4gjqFwWMbbiGbs0OMvhSqJX6PYcUYEEQWQg2oGgh0E6BgQ4WjaOMrcS6tY1CIwMTM3N14BwkXBhLiaXuQFJCZDAYuyxfVsNAnW2hyi4UVt3zy5~NODcdj3qp5tv8ylfQ~qfdK9bLuo2WHD~IiDZNtyzrge5pklVRJh2wiesFEz9BCxyxDovEPmnkT9LBorbu3S-av3Agf-tN3Kl9WFuAVoBqUy6wDkwgcayeO~7eG9VZo3kAbNjcTS6P3UugJg0I7Ba4GjW6k6PifpqFija70VM4JSuFf0kH~1AoKi752WYmqPZrMRn2q3C-XrooFcFvMEPO3HtqAibyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Strong\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.463Z\",\"updated_at\":\"2022-03-11T16:02:18.168Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"8\"},{\"key\":\"e97868949b4dcc2aeab0bccef4ff42dc66f60dce\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"21:454\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TAF/YLn/B81gvprjNPTCLRIj/style_thumbnail_86.png?Expires=1651449600&Signature=OgBal1YX~TwJM49Xp7pyzFeQFRHmF1yJLQ7UMb0LxJP1JVQtNoHuMVJlwjrt0dImPP~TS7UsiXOj8-IKXp~E~AW3Gn6zZNjff-6-mbGSnswCLG~vgHaJacLs3h0E3XrQpkbrJXH912fI9RC5G-N07rH8Z7-4ClAF9lEMDAgVaNL32RNU29Cfg7d2ex3cthb3zr81x6DQ7NHDZGQCbAxQb1LiKkZp43OURw5AvrgKD8vQTvQaFWsCerZ-7Jt2Mtj4dacQP7cFIZFgxZfk8~2PtF0noaMisL7ihSg3HLRs20rVHLFGbmozbF9KqX0tIvdMwMhNNNZmAK4XOBQyoLmt0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Foreground On Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.541Z\",\"updated_at\":\"2022-03-11T16:02:18.158Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"D\"},{\"key\":\"e2e02da9993a4113d498e233123a00de0e9f119a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2373\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yoa/Hw7/MZJ9koCG5KrEfBAw/style_thumbnail_73.png?Expires=1651449600&Signature=OG0mSwsvahOKKZ1A~VKsRoZnX3JDp~GrCW5kXaeKsGT9f1nKicuxDYlQFbORIlwzy7jQj5vOkEqCxh--scad6Ey99cx7T6gLWNAUhZJ1wPJxM-u14CrzdtYj7O0efJ9ldrM5jNcfwsJ8d4IQkOUrpJs~t~gteNNeceED~sAin0lQmV9D63zgAI~BjU-IQuLV~MFazCK-SZdCtKs4gQz5GbVbFslY-vQ9Da4CLyjfmgPgD850tVy9Z2~0Xh-CdxGKVRRsNvQbv~2-koI4sAG1X2fNATUmDW-8ZQUSXaQx1TxS-WuuzmwOvdSx0N1JU3GBox7NRj7kgSYDoG2qr5JPPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Hover\",\"description\":\"Background color for System items on hover state\",\"created_at\":\"2022-02-17T15:35:46.478Z\",\"updated_at\":\"2022-03-11T16:02:18.149Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"&\"},{\"key\":\"e24efa3b0db9320018513ae1c1b305230689fc5c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2371\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TrP/iR6/sB7ay9rXqoHWT4gS/style_thumbnail_101.png?Expires=1651449600&Signature=D4tbfpwLCyaR-FJ5jIzE7DgcJyB9J~mfTHeR6Pr4CMk6pnGuixDFKEWeLr-x-NNy6dYGk83fR687-FJd3S2EJYsCQWPRudzeWzhKSk4xKpC9SC2~8MuuPjRBfWNUw77gW-MQqb63IGCwWctpK7bE3gVaYiyvGQmyu0Rh9Avp7-XKODRD9WtOqHmglBpftWgO8liBcvi13iXFyobMBu3tDRylcB-RGanwWwEAJOguxCe0x9wt7kla6X4FHvAodN~1Tpa8HuyNX0Z561AEeqZXIowBUwzN1M8ZVvnZgPlvGUgvvC6CMA3VNFH11WGt5-1wwVk-2-XgQQf8KYNhyBTiUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 2\",\"description\":\"Pop-overs (Dropdown menu, select menu, inline menu)\",\"created_at\":\"2022-02-17T15:35:46.617Z\",\"updated_at\":\"2022-03-11T16:02:18.144Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"$\"},{\"key\":\"e1e5e64924837a5449b34b1d972aa6789d021d1e\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:741\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ljs/Jq3/vJyiRVSDRNl6PkhZ/style_thumbnail_55.png?Expires=1651449600&Signature=M6ZFg-vgBPwH19hyIimX8X7bEf2RIc4XXSs8fCVF8e3skxmWW4yG3L66-aBhCY7mVf3xZnV1GoeNNqLVXXnqZJ6Emm6CXMuMcbxaGztQ~gt32nFeezt6PiBZCjl3ujahZEMTw9YEZVCj2AXpUqAhviDjCLbzPkMUCnrnil4Vz4tO9IfaW1ZQYDn75CBXefzawzASpoEWYXqLSTUmg2oli0z2QZ3zlzTdQsg1ydmoUL09kSyCoPdM4amtb4cKEdVm8qr2RTsw-uR~01KS15Q3NmKhk7NycVv-R9SSSa0gtRiSXTKK6US6QM~CRezkB8Lms~XQ5LCG56~ghAp9OkCOYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Disabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.387Z\",\"updated_at\":\"2022-03-11T16:02:18.139Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"9\"},{\"key\":\"d4ecbcbaa519daf06c1c61e66c54c6451058e92c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"105:1534\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cSP/Xli/ddwApmHznAnWTKto/style_thumbnail_4.png?Expires=1651449600&Signature=RgxYJD6y7itiY3OtsHozrx2jHTl3k38fPIW~WCM4qOVWNIDxpu3EahneJ9plNCCmdlRUX5nla97JgfBQZcc6aS-isXO0ZwRECOxEa-IbesvepynrGVyTHFFZWGqI0ju-mQIUYbQe0ByCIHL7flHT3HdP69n4r58uzidpxBjiXTq3ncsa3EzQEgHW4c2eZAGx6wc0niHONisnTq1LeynLQQURT~MR-qeGYqt4USDQkeJOSZ5~7bd108kTl07C6pNAEuOeaZ~XPXJSL7wVKluqUQLmIs3JbYPPStHnQxFZ3k4xwbMoLMrEYK4yxeM95zAjymToPDoK5sY3UFvbF9Yr9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-03T13:10:15.704Z\",\"updated_at\":\"2022-03-11T16:02:18.085Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"CO\"},{\"key\":\"cd9867b6d055f5ea911b9f686b49aac0170de979\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:457\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TF2/5eT/Ullxq0287gxirh9f/style_thumbnail_107.png?Expires=1651449600&Signature=R7uGQtVzUyvh4k6d3rHfo2wQvXU2aDh4YCuBPwKBgnGu~7ewm0CcLtrmvwpR7Vtkeud5HGB56BizBxquCcdUwQUVbvETGhoPxwOm8JDZCT6qyzWoiLFyvuV2rZmik2JmSMjbugLAYLU5fAyz9pBwJXIitzP4GtYdFyzp5zWDSI-2GLOJNTrxI2eXH1Du0bDemtQmQlldqXyhrm5POX0eB0tecXfuc0G5DzkwxficNtV8zBnPFAfNrBNUmkfXTnvcIbkFzHYg2KofcNhckqVzFm8TQOYTAQjvEycxjhpRyw63FC7-~VkPbZi5thzKiswDYbLAlT~aU94SnUrgpn-4SQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.647Z\",\"updated_at\":\"2022-03-11T16:02:18.064Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"E\"},{\"key\":\"c7ac3da9a5e32f8c3906be2a2f56bc739e792d7b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:790\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/YUx/9Nv/XScyRjW84lpBdbJL/style_thumbnail_0.png?Expires=1651449600&Signature=DspMDPDmlciwkI7~L55aTWHwV~vGYbZH5uEeBwtA1ePdFYle~3oxeiy-lXg90LwFOIabv2ikbGy3iVNhMdtA1m-xbyot61qEfK6uZlT0S-5e87IPGqVpv~pO5W-lK4ylsXhmRriSrxpeu6akPYsA0ASnfB0DqbUz784Pfkuf4I6eT48sMW5i-dwfPjdQwR9iWRFZc5ddd4plsEkD2bk-wlsqlIXt~P~wYF4tDSMAs0UOQRqwRJi0LrFuzVshrjB6SGFWvCvFweXj5OIKGzfT1XfaWmeWRUSXCO5OtnBo35miMAbJStZ4EbOFkiZ-eCDfOUitrDPtL5hXL41deWS2SA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Focus\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.546Z\",\"updated_at\":\"2022-03-11T16:02:18.060Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@\"},{\"key\":\"c30ebe4e0828d4543f977d67ba900958a335ba14\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:739\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ALL/NNf/PEHbpSC2zE3dmeqk/style_thumbnail_63.png?Expires=1651449600&Signature=hJTZtRgv-h2yR56Sq9GLrr0uCDv98PjuIKkb-Y0obrMPKHGOvEVXFT6LxUuviP8cBHo2SQQZDi7MybzBi55PM1XAG2Jg96j88FuZNt3~P0UNMZLm48yTHKOJt4lyOZO00rDRc4IwPwXj6o32CTms-CBVhx9Zkvv0Wx0SLbIXhMopLr-Mq~LJc9O-ejGMDu5yO3ahR9WiwyOK2MOKQ9KvYdU0nkXHwm0Gwi5uf1EB132eiMpSYcVQO8hRS2I9n1hIV9TpncNrL8~F2cuLNepLkKo0HqkXKoRpvhM3rMcXpuvEs8IUW15qSpJ52rqrQJP6rYHFLOUrKEaZbQAZpFPmdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.427Z\",\"updated_at\":\"2022-03-11T16:02:18.037Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"7\"},{\"key\":\"c2a591ba590762ff0067a3a2feed6fa959d0c848\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2379\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/MOk/Gw7/fMvFah7Lx5kH3sVa/style_thumbnail_90.png?Expires=1651449600&Signature=ReOedGcL1UEMDk0hOyEbvXiZRw73oNTGHlvymwEqgyIAU-ZRpd4rKIIWTGeivtQo15AlwyluG0lNzsTUPauPDdAhl5jm8wwH3D2OCcPJ9oNBuoWYIY6V3BQRA11hlhIlODwuIe~v599X12cNVzOxU75X5AtFBRBhxLJ5Xg~yPxAVZeOVYOxuW40BJX5-JwjhvQOOY6CUeGWuum3C5txjydnQpPir2kzRKHjf3pfjJ4u8iVbLtOoJ92n3rf00Ia3U9wZ4AaId~I7P2gLCVatEHt2BEroyoNq9s-5aG40TGoUSlrEt1DSDlm6nFok07VBcIz4SaB3zvdEnPfP9tMNF-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary\",\"description\":\"Primary text and icon color\",\"created_at\":\"2022-02-17T15:35:46.561Z\",\"updated_at\":\"2022-03-11T16:02:18.032Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"-\"},{\"key\":\"b8852809f5c770c42da4f09677e086f052b776fc\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2374\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xFq/VPj/QOtyh1MUJ0r8YSi4/style_thumbnail_0.png?Expires=1651449600&Signature=HCMOEdqsjcrK3W92n0P6iKf4dC1K29u2pvm52xR-aJEo4FWlIEtJkMTVEipS54a4UGtVy9Tw~NP2ffySlxk-JCFXUt6kjeW-94uJbhwjnuKqF2lHM2DfXFLbzogzULau4gmx-Csst~m7CwWoZkT4hC8CgR911IsEdE4dc4RXXdIbERfu2AMevoPfFvXDSWsTHX8MEgcHusvg7SJhEGS4frejflck~1WM~vS5jpcVRCom8~Gtkf8hH0pJVZz8nR6vMYrCf~J1d8kXdv7icRQ47FvKda2Ey88zui-bW1Hoxk-Xf0qxfRVhHAAKH9PLI~9ZK2oElrZWpqNO-ZBm4p9fJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Disabled\",\"description\":\"Background color for Disabled items background\",\"created_at\":\"2022-02-17T15:35:46.667Z\",\"updated_at\":\"2022-03-11T16:02:18.014Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\",\"},{\"key\":\"93093eb763a00ffa7d41127baddd3acd7f2c20e2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1522\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uyk/GHt/vR6vVxPCvZ3df70B/style_thumbnail_0.png?Expires=1651449600&Signature=hP5v-ec0VkYeSBgCwmkjbvU8iOT-5sNy~x-0saR0L0F6A8jCjxNM7fBYop4AzXf9o6Tdo7pu7-u2dszyCUR-0btNP62AkGv3LSCSRT2iQDAyxuY1rIHEOjLIKJgH6puRmPhmEbWiGp8eHaHrtygoyaml3xKdtcny3OQnHKJSLaUsFHBxVIVUkOgnIguxh159FZ64X--R~C-cEiFV7O0VvJ5ogQv9ErA71-lw2j1vcDqMHETYK-wXkUN51Gw410oPK7PSbm6M9eUjB5Mk64AqR8DJo5WfSjQ~m7nx0LPM4gdaKuMWRX7qrGe~oiPcXayr9dRVEXKAkOzCx9COGxJFRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Warning\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.242Z\",\"updated_at\":\"2022-03-11T16:02:17.919Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"`\"},{\"key\":\"8f6506a79963d280851a0dd029aafa5fd328513f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"97:1578\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/W7O/dEk/56VIS7GuS4lXL7GR/style_thumbnail_0.png?Expires=1651449600&Signature=TxdrENaDn2m~wpwSIFreVlm~OIgcVLLXusyHWXrF3swtAqyKS5tj22btn4EBoxdoXyxodCWiEP4Hr5ZuPZVcFrQFoX9fG2EDf0cE2zL6sYB90xi4EvSjoXV5pkqCMP5Ek3EEq22MHBea8i4I7q38s1Gacwas4MDJ-x-qAhHPgJev7bsfpZrijqulS2kh7XaHJsn0FLvtbK4MuanUuXxXPmdqNYP8dH4wfAACrcPibpoKBF79c9tkMcLltL74PvfU0qV9XFhjI-Y9DZA5BfyGhSeelRIXqoL~PwDUYWNlaR4b4F9S7nw6~Id8bh5JlHdhzy6zH0uU~prGVQ06oo6VQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Hover\",\"description\":\"\",\"created_at\":\"2022-03-03T11:03:10.535Z\",\"updated_at\":\"2022-03-11T16:02:17.914Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"B7\"},{\"key\":\"8f241e62ad034324f285439556b438e2922ea245\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1514\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fgK/sEb/lRUhHujwHkOu55t7/style_thumbnail_67.png?Expires=1651449600&Signature=hnofQlS95YHtWG2GMQRj1jEpAfsTZdTV1XGteE2FFiahGxJe32gYayM1gtNJ1QNWZJqcd-NuAuqxadZphX-6AlK6hJ-HPaRQebCvq-JpCZWKpaYd620wvhvcXLRKBC6YCkalI0g3BTPL8amNJULCuc2NKc0qinsR1l3WsaPxKlsGFRIlRKGo3N0FIEoL7fvaW1Npi0XGkZHfUpdGY5li~A5~0plGwcmSzjUBTRyGmz-e6tKiDgBo~COJ8dcQNkomYrmYw~vqU~7gi~aZryKsTrYl~YRXHGU6wCirTL39rZOsLXvEmGh4-DlxkBfgrS8Zot5SKD05--X2TTrasxcqyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Operational\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.448Z\",\"updated_at\":\"2022-03-11T16:02:17.909Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"X\"},{\"key\":\"8cdcd2041dc91b70d25309fec1d36c74d3743233\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:750\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/052/XB5/d7nVPyFmUFaWbtw7/style_thumbnail_7.png?Expires=1651449600&Signature=H9e72tEDNyJpi0hlv1jgvqEy-~kGt7nTzOxvI91sWv-jqG5AUpLW3yhLqUCG9kyg~oZ0yhaBd8V20Uxhf-s~9uT~9EdN90MoYIN3zrkRnIfrpT4NHnS8QSDr077mQafLnzWYuOYkme8diGVXCfuwNeB-~fp6gr4ztOxyR51NLGOqkLzt75Tjg2YveYrRENbOv8bpdxUWIa85KG5cJhydCfGce2qYdU3Xyog9DvyAnX3FuiiVkijJPjFeUzhq2oyre1MujNj1R2TbdSILsBam68o~bF0gt9vDITNPaZNFOuP4LJcIRtaDuDNaAeZJNv9yX-mgZ7-qpzQJCFu-9f5AJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.155Z\",\"updated_at\":\"2022-03-11T16:02:17.904Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\":\"},{\"key\":\"810b06a3d3088bfbeb11f91fd97d078c9310de3f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:738\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cSb/37a/41HlFaFPGHuCtPzj/style_thumbnail_77.png?Expires=1651449600&Signature=BQef-1gDY8ChK82rpJuidJZ4Gda6kalAFT51w4Z72zv8FUBK2~1FyuzNX0XO~TaHJc3CFCZW7dZQBA8YUPEGMTigFXd-JHwIjcfNogHdKNlbPqIcDwYcJ4Y24E6ZvmyW2hzJqEq-mkQIdffV~S-Njw9t~iwMNOCsTDJ6TDJu6T~eQ9b7BCMcO~fOrImTo1uDTMUWRYwgFkY8EtB8D9acht692XE~f-slqd0G6aYg8Q29IiNxU-3rLbIjzKyEm~Rs~iQBI36BnvNKEidR3pZWf~ouyGaybExG7WW4WWeBMJ~lIm0yWcf37ovv~E0J3zb8bIlULLLVdpAlgYYteN7i-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Regular\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.497Z\",\"updated_at\":\"2022-03-11T16:02:17.878Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"6\"},{\"key\":\"7c5ad1e5c3ac214a39934a57f08da1074ee3a862\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2381\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1be/eMt/WPZOi4EJLv9BAijQ/style_thumbnail_84.png?Expires=1651449600&Signature=Tr2N3QPu1s1t4c6kmlzOQMgwngaApzOV7nx7EBQLznuARzFFOViFnfv21hHYb9jlcCkHlE1zOwODSBYaKNSna9h4qLZlNzX3ZvM1XwC4ZvEAiMsehbk3CQaqTrYlN7MQJ8nyKOZrYhHxhPwhRt34ttQpVDLwVqWp0~PM0x6hAp2Un-0lb4iWSR5cT6R5tkflj7-vBh5T7janSjHYM3ovfM1mqvc3eh4J3T3FnGyHXTsNRwdNDeskZKzezMqKep2GRIG~JiKG9YD7BLiWgrGnXe~pcvTs6EiH2vk0ce6~B~IdzmH6geiFDBNij9a0GJQKXv-wlKTGHPHzXFZs9PeXZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary\",\"description\":\"Secondary text and icon color\",\"created_at\":\"2022-02-17T15:35:46.532Z\",\"updated_at\":\"2022-03-11T16:02:17.857Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"/\"},{\"key\":\"77bee09f170937fcb9bd07fd0042cafc9493b2a5\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1485\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/y4C/9fa/pc5ulsAawsKw0pJX/style_thumbnail_78.png?Expires=1651449600&Signature=N7rCBQ2uzoWapXeplOp8rCiL-3fXQjFNtLuUAIVrqjztzq5P-6jEj3LB0BWkRGoZtLWSp6D4mfwfvgWZOgmWY-DXW2YCGWqGrr5FTsSR7Yatf4iPa0Wo7GmJEvetTPhqliVhN8z-9Nx15IWXeKWC2itO3QCFTqHMw7hMB3WJqvkscGEYXjLbo0JDCXrOF6ylOxVobEgUPkkr4cdEL3137SbKnRSJ6ByLOBVLz-L-obWgMqXTudj5AZnSAbZuL9~fajNonpUqq2EYruhtRpG5uCHS2qAr-sz9rj-R9GtYwilr0F3bfkq04wH9ZBUCKMb7IBBWdApzAfn74nLEUyo4Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.502Z\",\"updated_at\":\"2022-03-11T16:02:17.847Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"U\"},{\"key\":\"7044cf072b617b7fb13094bee8676db3f6ad8624\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:753\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CQu/DE7/vOIRYhlY5gyrOT91/style_thumbnail_82.png?Expires=1651449600&Signature=g~2EOjqkevd5LdgQKrwrO5ggMv7AJpxHTWQeispMC27BrVPjK5kU5xOyFMrFqmfKbFqneUrFQUlelMOTnXvJYMXC58G7gUYfve~dtt9YC3hm78WKpBLVerVRMCf0chOxnYLUNyDI5nrYA~W2U92cy8wdQwyNvIbwNELyDPtjcuF2E6CCWLXmo3b2cWGI~taEkqMUExoq9zsqm1Zj11u~kIicPOVEvo3Sd1ZSgghG5TB-3oR5O5ZcVHPJrcAsYv7DnBICsx1C3AWXkAkIAI~wsp-hk0gLFkdqoIMVrtdRm668COJcxEtaHjdZ7wWRX2h9jeZZch2~b4RU1X8ejZdgAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.523Z\",\"updated_at\":\"2022-03-11T16:02:17.836Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"=\"},{\"key\":\"6d2321d7570c9643e048ff3750cd4010dcfbae2a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2383\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vvq/0OT/e40EExLMzUa3qr7l/style_thumbnail_80.png?Expires=1651449600&Signature=KaZI92RL~cMBzuM66vfEbQEOTA6clm47ILtgXAsCT20ddZBDimwleyVwLuGr3td-Bv9LWzZpmh3uVrsHQ3x5le5TUvXJB-lHU6fWGwSBd~zmyaXuD~uzS--a~1ehBe8jD4nojJQzHiYp3Tnk4SAJCT0BhXQNsQZH7Rw5bXH2WGFnWylXswTsI1SikGLZfwDPOZ91JwzRE0p4g6vLNN2JLj-Tja--HCDtPUDt29Btn9r1BHrhJ5UGldZ3AkxMNU3Dc2W19D~OuJqwqRh41U8e1Ma57mWAGMH27yCgd0kosVzhYS6oQi7EK-Vx-3RDUh93jLGPkH-~YizFGcTQGzZTyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Muted\",\"description\":\"Muted text and icon color\",\"created_at\":\"2022-02-17T15:35:46.512Z\",\"updated_at\":\"2022-03-11T16:02:17.821Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"1\"},{\"key\":\"61188726761c1f617b0f8ef5ccfa94fff741aa58\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"20:526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wL4/jwN/FBcqeeHih31g9aiZ/style_thumbnail_81.png?Expires=1651449600&Signature=Rw1zewOpyXBc43Jsj~0dt88YADTC860k1MarfqydEY3k19ED3ljAIWabOVw1QqshFzM38AP79o0o5NuqA0HA63p7ck6cChxQsSk66hbkuTCklHFgTA4IqQrrzJR~7gm1jLJehiW--Er3lyiN3xHAdVb0S34XJSxw3zOMcBTpS2vZbGCLNlNPIo3RWNswKCejz-~tTtaGtVkWcCcaMBbHoEOG~cyJG1EnWQh7BxDb-qxs-jSApRfZmKeTPetowB~EDW5eZJ4La1N89Y9vCSU2MRwgPoMILabrStIuUytvNxrrsXYhTMZAYNiCOStYIsoG2IjdTQC3abCrWILif0prDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.518Z\",\"updated_at\":\"2022-03-11T16:02:17.787Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"A\"},{\"key\":\"5578fd8e9b0d1a70a4f1c5b17c10370f03080219\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:751\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/8A2/oTV/Mm5kGdyaiSmwHN29/style_thumbnail_15.png?Expires=1651449600&Signature=Js93rjFi0G1ohFoW2iAbAClhCYVHCSfvVJKP6PMLRsDWVzl~ZkALjY-YKBMWEVlIKA1sJ7GepOYKndRUOGuVyziKgVUlzk3VHSpmhBmGRfN~wjbnyAvMSAg8opfB4BCzSTEKlm7C1HDdLxvCrlICRdgO835QxGVCaJvgIuuxAlTYKDsRsQ8CrFQb~Aw9ZbRUSmkuwxB77HU3k1LeLUs532vyo5a9kCc~gpZILTTy5AE-bCpDseToQQs8gvUs1MkQ7okMmI0p688MVKbIJo3mCgm8FGqWpNoenAgGX4hdrgqOafUhVGfA45N1rRBToTif-1pdeCh~x9jTOTdPdenGWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Primary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.195Z\",\"updated_at\":\"2022-03-11T16:02:17.769Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\";\"},{\"key\":\"55671893da5573842723792aa4a85a782ff2a4b6\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2369\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/urd/aFZ/JVX9b2KxDu6tUVtw/style_thumbnail_69.png?Expires=1651449600&Signature=bNTEGpH6RcKwlEdenZLz9Q-fGfnLhfPPuTWEZfrhX5FJQauVITaUGPOEOH~aYZTZBnKh0fxfS79qR2xTI0n89bJ6g1p~SS8cuPzbToLoIk1Gm85cq8196zjoCnoWtLdNNfTQmtPDQjIMtscVpXo-gpIJahQ3hKnRTEZx48vaCDD0GJb4~63XMhBnskaRgIirxwuIh5J1AS6kMt3mh-x2rVH5oCUfcsZyCGsDvIymrXEtQ1x3-pvSaesZLzGsI2Fy1KNgnbOC008dvFyOLlKd4W37v0R5~hhdKWk-VvMWw72nE2PJg8WalQJf3CYAANSQZLYxtk6WYWYFRaKStvvBDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background App\",\"description\":\"Application body background\",\"created_at\":\"2022-02-17T15:35:46.458Z\",\"updated_at\":\"2022-03-11T16:02:17.764Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"\\\"\"},{\"key\":\"53e82392f306e2264a1d94a81aa77d02b4d4a98a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1483\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WoN/XpM/yQhtSX1interu3Xe/style_thumbnail_68.png?Expires=1651449600&Signature=dazZIlT~tLTwTBTfZj2xUiaGsiD~4bcEgeTlyEW5egswX4kiHBfR4yxRsKmt5OVwZavZbtFrb1xRpPjS~gUb0XplyAkGovQ9l838CZoiZJeUKzUliHTuIwZ5nwzMigUEUgNqKO1KeXgHnTmPP93e3vWNXwWJ38vw5uuxDy8edzbjUm3SU7NucgHhCMEa2~gI4T7SQYEgK1oTtiNrxKMpXZIvwoP28z3jhq0NPcCPA2ldYp84l8oyQAbdST3uXdzpqlzMHGrD91wcZMs5NiY7dnUJdkMiDivZXCvljzx235~5yxeJOqWLJ5N5Tp-b-KPDlA8sWcyS5iv29Kme-TFilQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.453Z\",\"updated_at\":\"2022-03-11T16:02:17.759Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"S\"},{\"key\":\"51575ae710fa16950cf68a55f9d205cc565df79d\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1516\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wnQ/N69/NVCtOAXV2tsoSflo/style_thumbnail_76.png?Expires=1651449600&Signature=ZWkFj9U3eWdiTStEDfu9Ay5X7ayD7AMDPvjZOGLrGD9R4WhNrc2hkkl6CptcXJRy39W~-K9uBXdjcxsIDdneVtIfWcB-ExTPL8Lg2~kw0pevG0lsAqSNkBLzsuy-nSs9xRUrRZTOgaidtI2Rv~jv1fOIqV9pBWUefzj86IDCxDJxz7vKWW74c5q7vTmO3k45kh3QGrEg28Y1aurFlH2n-jcFlZWqSwY7VSToN62fbE2U3x5IZS6D9wqPr7oKyWBjdU5XwAdmhuohWbPbGRReb8TKdP0Vk1sh~brpxcCKh7o3n2TUbTklXFyvlWWtjm-C2EW9F~HRrKN-DFiPjrq~4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Anomaly\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.492Z\",\"updated_at\":\"2022-03-11T16:02:17.747Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"Z\"},{\"key\":\"4b4e6494cc96f9c91a7e8f858d8e75274f16cbee\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:759\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jpz/VyR/GX4LxDkWKno2965B/style_thumbnail_105.png?Expires=1651449600&Signature=D6a6DuSWSDrlJXcRFdoz-GPhaTPuaiY6zy5yP4p5RI~MArW4S5dpPbMa-EfgHmHxcjBnJkX2e3CybPbuDX1XSrDvq-fC5v5oKUMsFpyXcY~Ai0x5htcmsDae9My8wzcyjqKejzlFvNHIfmn28YAFX9veHlA6heVERfTTk8roOAQUjzvvSmeL6We9yR59l53d0s6emaynFMamLYaZwf3f3pojYA2eD65lQS4qpXw-vbzkcgpNvw6tNf6bYo67wY5wfK8HBteSh8KFWRV9mNHoWOthzNhq80up02JMlBFWvNJUXIOUeyxqDj7~NPfOCd72JIFrt0flMecZErCI1RcS6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Link\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.637Z\",\"updated_at\":\"2022-03-11T16:02:17.733Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\">\"},{\"key\":\"4502e98ef17c40d674fe6bbf80890247176a4381\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1517\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Iec/r43/NWnxsUf16exXS7e5/style_thumbnail_88.png?Expires=1651449600&Signature=EsGRyOBAvx7JJYSHAGSyE~lesWLwrP9Wpz9ItqQnTMLHce5dKSD~-kO1lLgBIuchAX4NAS9fUZJciOOOMYh5Zns6oMdM~JjmOUn43worx5m~P0tnDBSPZcntNCkq0sZM7CkslD3dlByI4UxyA01cTCX5X3g0eeGNrq9OCRzh39rJxnE2XI1E2l~AiYxkPOhLEz8r6Og~RHds8qz00-hXAU2tTATkxbb-~2iagDInD-pytotonvi5vMNksiYXB0e-pn8kJmnVwA2h6-vjsK8fzbyzPwj7X7cu8U2zNmPbz1FL~3GCvKP48hJmi1iWtJEgiKa2nOPmR~E-MjBkGX5CNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unavailable\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.551Z\",\"updated_at\":\"2022-03-11T16:02:17.706Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"[\"},{\"key\":\"43709081913ea51d06f511c9d1c249643c6b1eec\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"105:1540\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WqK/Tvd/3G5pRgq6kyFctaqn/style_thumbnail_5.png?Expires=1651449600&Signature=Vr9EAl3huGWaIxx~KRZqatZlRSYgq6PcOUKnD44jy9CjehyRHaw5dUoWc~zjTt-62Pp7p3VKUnPkGc2sbp0oaABOSpGLvEClqUM1D5myRQEUoWjZC4NQyR7431CgprcON3hpPcUWuBlMZkcw-ryQZJVhxgy3tnGoLjxGFsiPIfSKnLQjPuTip4g6L91eHJJDxQ2YMYU0ozbtzaod4XiDD51fkXhmtD~ALY9EaJYAyiVjVmhkb5HRlWDlY-uqq8mAl-8beA3wt3xKJDICtYobMbyrn9Cc3ypxUMt6Mo4eGFnZCgxgUfrMNvD7FXo63PGuJp8hBnHUF~vcBUwvHQE9zw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected\",\"description\":\"\",\"created_at\":\"2022-03-03T13:10:15.709Z\",\"updated_at\":\"2022-03-11T16:02:17.697Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"EO\"},{\"key\":\"3e72b52bee16eceb6d79b474edcc2b6c76428be9\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2395\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/g3G/BpD/Zn35PsszEbLmxaGH/style_thumbnail_79.png?Expires=1651449600&Signature=GALDG2iNqVYIUVrZHNdEr~VeyqvnKnf2M7eci9BBIYZ7PCGAEFagkvX3yrDeDXT2ENFkWrQW~e397upuVRjqGlOxlw~aCSQJKLQsZTDFJXU6-ZBu3Zuq3ElK7ebPxyRQIw8SJD6YV5CErWvBJ4dvuVDx9sKI8OC9RjCsCyLNXX0HFhObA4edxCpsa9kjj3AfVOHijOP~XO5kknmbkIMUK0wDfklxmhXs9xfKpNg8K4WQ4X1Y1TVKvVFGJbevVxTixBrIM6tgUMdlQOXvJTFNXVYFpVNvoxp~IfgkYhgFo0up9So2WhkWF3GGKIu7FMEuGu64ThLuCRJi4VKiZhcMIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Hover\",\"description\":\"Text color for System items on hover state\",\"created_at\":\"2022-02-17T15:35:46.507Z\",\"updated_at\":\"2022-03-11T16:02:17.693Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"3\"},{\"key\":\"3d7d3eda58f74469135ec6f89bdda10fe22ca1bb\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Vf0/lqI/KHqEkC00leJ3FVw7/style_thumbnail_46.png?Expires=1651449600&Signature=Za2LxjbJQl1BDM0rM9c9orH1N0OjQj31NFByL4AoLVf-nZKrEwlC3n7NskwgtNn0GRirNzklgEMNgLq~~B9DjAZnNVIWyIF4uuUkV34GYL0H7fl04RccpufZ9b6zxjxiMpoMMS8Rqg~MaaB-y8NQsZI-XLqTEP4rQTHz2p8Qj4t~Y0N3pGirJ-kVtziMYW1WhACtMJCXM79KQhkG8cUeJm24AcX4qJr4nUheZLPUhKjrJ0nnDy4GucLUyiBKam8dPxGR-WhHPckPidSQGzOZi28MylXQoHC~p1u~lV~Jja7PD-CdGZMAqc~HBnIEzTEvJJwovVBvSea7EiYuJ0De7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification Inverted\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.344Z\",\"updated_at\":\"2022-03-11T16:02:17.683Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"d\"},{\"key\":\"3d3c2694d76f541b04926add38f2c210951e0ff2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"87:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bvb/Jxh/ektY8fqmUzUynSWY/style_thumbnail_0.png?Expires=1651449600&Signature=Z6OVbIfLhtZW5b30gWjfgos1bYN3WytkRPvmWgncsrp6uWZQOUPsqxwkye9PpIveNWKMIxHl240zaz7274GRaSpbyoMd3qeztzP9r~hi-76H-EqfTgmWY45o2RbqVoMlBl3O2fKvZ3n~ILBD89C8gxyC7JuCgzF1QygHmhKS5ay~Anm4FzJ8rFckgA3-z~MbjIwFJvvD14psed3xgyYiVfoLSW86bI~fa~sXLn~R5uhSqPGx9O59pC-0-9gMEUMUZgfrrV~~PDteZDXpbA8HLcjDUUKll-cWVq5CLvq64EicQsYtg8HlRP4diqMc9kgef4Bknd6h0o6790EcFVw4hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Error\",\"description\":\"\",\"created_at\":\"2022-03-02T14:32:53.645Z\",\"updated_at\":\"2022-03-11T16:02:17.679Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~9\"},{\"key\":\"3cb275c0202af047dad2652d0ed6789d06b62e94\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"105:1541\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iUX/iGW/xw9EO1vv0k08SaoB/style_thumbnail_0.png?Expires=1651449600&Signature=VU2hJUAD7uCtdlGPGzlfipwMm9LuOAD4ByIxcvJNbaGFCl07eT98CZfe-2gGNZyj153bRfg87Z0iASlTE-woqhPHyfb3j~t0z9I8OpDpjoQLFwVeH8U1bTj-HW1zTGnypFsZQhWELTLl9IU4KJtLz7H-uEmndIx47rJsQjV6YZ3D-qeOxXMXvZsGFeZx7GDdfHtifUp1GV8ySwFkcK9ys-BH3kJpXpgcfcvhJ-SEEWfu5r7m1-akkEDSvBjDVfRAmkLv14HrvqGSsarwKgpRhmyAdUh6~ktGGZjOzBzoNSj4gkjLSnUj6JWhNSg3qGPQdajlTw4QoRJCeWdFpPcjGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-03T13:10:15.697Z\",\"updated_at\":\"2022-03-11T16:02:17.674Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"Ef\"},{\"key\":\"3b66f8bff33b6352ee0be91b265c59c82516e2ad\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2397\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/GLY/ThF/yW9UswxqrHJ0GtsO/style_thumbnail_102.png?Expires=1651449600&Signature=QHaFOBW7SZv8xjZyGf8M-STQ~U3orjMQken37jjhuV-JFDBCm2mpVWQyJXgk72SPgLFG2KfTl-AzPkYbGvjhZht9ji3ZoizF3a2hlaAMIM~7PSGVg30SrfBG3LUUcXj9juASQ~eGY4ySHHRRear5r4MR343VFUCzUsWUsQSEXEXZZ~vfuPAZA4AxfVNDwmLYtQGRHF2GEazt~yegauPPZsF-DyJYpzV4qM5~hM4u~Kw3LzR~iuXCmAxgV-8FJAYR0RQ8wyycvs6v7OD3BQTsC9wfDxw0291sLuo~GFSThMY1gz1JVQZhDZEgY1JSXyOK~Y8ijt02NHTMUyvzLoWKLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected High Contrast\",\"description\":\"Text color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-17T15:35:46.622Z\",\"updated_at\":\"2022-03-11T16:02:17.670Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"5\"},{\"key\":\"2b3162830a5c413a851c5c7e6a6eaf22947046c4\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"20:527\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tEa/JVw/J2bIgA2PD2HnPgOr/style_thumbnail_2.png?Expires=1651449600&Signature=TODuISBgJQ8IqC6FOph7I~SPAPpWPbeWpj2H9u1N90s9ppctdUuFGyVBYZBwAFIW3ZFGaUio55iNVohFpy8jGrnj5RX4KRwdsHoub1XclvpmBsDA1CMeq1~~o2MmOtjulCtkaDnpieF~79h09MRZP4yMQ3Oivy7X4-GPp0fWoM7UlPZ3BME~kh6dBmgU~RL4~fM7UkyQVG3ujUf~kz5K6QXdtbwRngLC6wqpanDXOXnDWCwgIjEtEmOOQ-rC-esan9PBN1BtZi2mjBrFwHZpRkJDNZJqWHRbLwcJHAtIJrwirRb~~QAfALHx1U-hZsMAHMWPNCaCeJPNnrnp8vt-jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.587Z\",\"updated_at\":\"2022-03-11T16:02:17.641Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"B\"},{\"key\":\"27cdf5f7e9827a030512785f1a2bc27bcc5942a2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2370\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ONS/5Kb/Yyd6LalR9LyppGvP/style_thumbnail_97.png?Expires=1651449600&Signature=amus6skocadwTMwq7w0NK76YLztLDkE4rkjqENiEjA6skAi7ZfMAwjpZzGvx5ByUKa6uz5XUSNO7lAaPLkTctGaoQ0EN78Vili29291KyzbSs00d-o6qVCS9PWfcrx2gQTKWfyyMmnEvl4d1inBycT9jLHSCLk0EMbDqQZbCuKiOl8M8KEITwM8M~YdAAE9~mgsBnSCaOS9wrwANLwvt0QtvFDsY0KyIlaoDGLsYYGFQHzv3gw71hUbPgiFVkR2UCfB9fN5RDP-FuOBMR96wzfpPFtV6pgFBpIkFFN-i72ytowbNSrSZEz7tOEuKl6zRo1ah4y~EK6CNCOI1iB2HFg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 1\",\"description\":\"General surface background\",\"created_at\":\"2022-02-17T15:35:46.597Z\",\"updated_at\":\"2022-03-11T16:02:17.635Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"#\"},{\"key\":\"2372e673b5e14aced4b97e1561bf0558bff8c0bc\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1487\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zeK/bzQ/gJupHsvxaJnqHjXd/style_thumbnail_72.png?Expires=1651449600&Signature=MgY~dMd-EN0aKZHQbBnpGZrfQXC34pOEiiAepjTq~lKgOiLFKdnO0MQJWUMquSjLZpC5z2mrXpZLEIoFAVBRXtoIjzBdrbDjKRU~v8yNiYpFhgAjSHUWz1CVJQdyhDjws78hg8K6TzgWC129yqaV~RSumLotUMqMWcA6vbq~vF86BlPYzV2PR5N1J7vYxqm9~eDFs0ZiSKNZ25SmHmQQp8EROgBFyBIu3CfOFD7WOC36jmqqo9F2~JSznoYePn-r0cMT0lFjszNbWRh292i~NltnQsY64ch7QVk5Ogr7SYThrEMgVN3KyAoqBHWfCIJt7WkYB293dCMtazaEsUYt1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.473Z\",\"updated_at\":\"2022-03-11T16:02:17.630Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"W\"},{\"key\":\"22733af3e5edf7196d757854a28419e68b0c816d\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mkG/nWV/oCxWoWzCbhsIQVFh/style_thumbnail_60.png?Expires=1651449600&Signature=WcjhO7u-YXf~rxQM~Q6ZmflBrXZoUejAve0JpJvcVWLVMuCxmxjE1SdoEGisZLMl9pybFfc8HUMMyG7CgAG06~jx4w1d8IhNaKMqAofrNbXJOGJy0e6I73ExRHbWOui-4Gqn6wLnimNhM05eBL6J9-m3ogw0bT6suoeqZF2zWM802G~iAmxjSTXIYPXdKNs8MqD7xYy~QauOIUxsiJLPOzeu0qVP9GPO5S8thuH0vHe9P879Et0V476EFt7dMQbQDNS2StdlGDmuCvRXAlzJk42qGWAe~NNRrP5LjTSVDXG-z2Rcq421GThzGcUfhLLkrcRHUEI78B7veD-HjEsz9g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Announcement\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.412Z\",\"updated_at\":\"2022-03-11T16:02:17.625Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"J\"},{\"key\":\"163f54464640c21f2201a9d389cc1101efdaea15\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:752\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VBe/igN/2T3lOl44SFqGN6tc/style_thumbnail_62.png?Expires=1651449600&Signature=F1WJKh0zUtZgMgUbENZ5mJCQJudD3XR814j6Xfp-oMcV1uOQnWhTX6CPV74LNFH8NCjmsPFfC1mFDS0ibq~qBV4lmiewmNJrKB-xS01kon~~Hh31svBHLWR-omQHeoXT2A8unJDhG24GBatha3cEFe-KhLmHo63RULPDwvaKUCw-Ty5DnEvma3L4j29iPClDqLSLukmAvIfLLiLBrxqQszAl4nwW8qDN0OVo68PJCsZCWFafnoKgbtJWn3B35gRUspCZBpyaTHBmZq1E-xt7XQXaJwsSp61eZVV4TDWjcQMBtKq7B7PPNwqhcXXcdgK8bMJvTDOMMScCnW7Osp2bCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Secondary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.423Z\",\"updated_at\":\"2022-03-11T16:02:17.610Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"<\"},{\"key\":\"1626270c6e39616509e6287e1a5f8d517f330048\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"92:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oke/Yxm/UP4xPC4rrAP3iqdC/style_thumbnail_0.png?Expires=1651449600&Signature=WDxx3ypyW1CdJ9A57NnEs8NY9dnM14rbbbwHcUM0s9DJ6C~FM3zrGEqHTyKC~9POHUsz3qKT8WfTi0Wtta8XbOfhqszxbPkQua-P78h3GIsgGshYJicD3FXH8x~Jl4CnPYYSaTEMzCPWREJA8-siM~gC32gpQDO28hmmnZOKpK~eFRQ50kNlWtACY9f0~e7~ZZeR87dJXaTZ2SaGIj9Ox-buqcBygsYmA8yPRK21J85TAn-H0LWke~zcjnAxq8Ean-nE5GTtUZBvFDay6~9UEjUbGAFikBNoKveNbglrCFPlvUfnYRWnJULN6zqUqwPPBOZj3F0c3F1LriGVcs2MVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Accent\",\"description\":\"\",\"created_at\":\"2022-03-03T09:48:05.966Z\",\"updated_at\":\"2022-03-11T16:02:17.604Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~8O\"},{\"key\":\"110e28bcce91d802e77f9ece4a72b0928526d225\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"77:1407\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/V4I/fQx/Fypj0AXYmKYpcHvb/style_thumbnail_0.png?Expires=1651449600&Signature=DHuAjjiHeScOyuNukb0ixvAf8s7Yab8uKS1eGADUuS1ZtHAYqzKFF6fqlu~vSaX1WdwboUDK53HxrtaNrFqFN9yFpP64Cm1WL8kVSFa-Py1gAmnzHHsygq62qpzRrjtHZGvbG3f-SHs6HsO5ahxCCCve-kJtCKN8cLBXlTiUAh0PCoGrIfBntKJNx2XxVe~303ODhgVcBHM2J~JEVnjzJnifDZpmKNCbb8hKjFA12Ag-c8yrYE8AnSkhZszJFyguKHN7u~kgbRwjCUk6bUZublbyxtG4iYQcDAoRt7BEsJZJnzdwQynaZm4V-2m9a4QZFUfQ0MBW~65dmzPF79sqqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-01T11:40:33.793Z\",\"updated_at\":\"2022-03-11T16:02:17.598Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"BO\"},{\"key\":\"0f9c77cbc487cfb2afd38ac99603de548446e034\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1523\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tlk/iDW/tUIphGM24nOt4cTe/style_thumbnail_0.png?Expires=1651449600&Signature=EesE3dEp3rPKrCKdJOjReyeB6pkrRafgRilV-9o5DdpUh4GufVRZcocI-NU0Sb1AuFuLwWQ7ON-anUmm4VUQkuqQwNWZNMaFPz20C0SKAgMiTLa7B6C7-f0UKFfQ44BgA3ZXP7vj7fr8XZRBnDqVlbJ0J8er7Z~gfLlptJ4G8kJwgV3bIfDcmmAlSBTN4Z0TjY1qx~N-3zQKluStGPneAA9ZwFKacewIv8mQQxO7MFH~2SNtiMp8IauFOI~QY3miRODhXKamGPIrKYNdiB~gn-Ek0yFnIPeWzf4JFrFAO9UPmYBCrlalkfHuBRgMKPXtrr0~3Kw0p9jevAC-kLtV7Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Critical\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.314Z\",\"updated_at\":\"2022-03-11T16:02:17.593Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"a\"},{\"key\":\"0de146a53fafdbda76050b1e380a4c89404c6aaa\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1087\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PTe/DCS/rBSs8H17w30OlJlo/style_thumbnail_64.png?Expires=1651449600&Signature=N~tYWm~af-KAobuG-hwK-cWBPel0wNyytMcHnd9qN1iAlD-Y7BDz1ZlaqoxGZg6dUNiuR1YjKVa-q2R4Q4T1eu2uJ6O1dNRXloWBIyAn-43WFvK1cuk0agLDgNLrsXtK6JAa72KQbb2AfNxihXEgiE1R55j2GSDG7VJcol2aItXM~lQkGPweWGwg-1~9~ay3LaJPFOuAwnxwAWifzgsLlz6stSDarcVSL6bBme6M9kw05MpqFKVAK8ph8js6Dzm0yUmRrsXlhRzGA6lGpjxy5wXA5lIO70UY2LYAIOD3UG19efx0tRwAnpjDvOO1cw0LSN6nE-TfvNd9NazVKxCzUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Text On Filter\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.433Z\",\"updated_at\":\"2022-03-11T16:02:17.578Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"HO\"},{\"key\":\"0d32006172cb4e6464c6f4000f3f76cdda0ebaa0\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ogy/gCF/XnVHCEWQIJAbOlCP/style_thumbnail_8.png?Expires=1651449600&Signature=M3AW7~l1KVvOB-vKcIe-nc4It0ZwxIJxWdGg8OV6SSXhqIj0ZgnH3B5Cqlh0j2tsMWOgGzz8aRyvaZ4wFS5w5V--EuZ0MmDIdtWG5nlDYzh4~qv3VLg15oQ-fVEvWJx-IRoENKgPGL~hDGxWjmOVQU3I6iJPjtrnHaTHrVzjRNw-4Xmib8QZA9l9YpI8vImiiSt7KwCU373beh2MPSULM5CCg8YCwSbnqNnGAb-PTcXWwttn1XGAbngeRU9ZY~mK-HzLMyw0xryaIqsIsd4QDUWR8LrHsAErLefAF1Itz4Ef2DkDQbeaR6kca9qYu5VjWYZ~e9rNZbNoVWJ1CAuD3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Success\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.160Z\",\"updated_at\":\"2022-03-11T16:02:17.559Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"K\"},{\"key\":\"0291b45b1252422a5de52508f8e77d6cc34fdab3\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:789\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6iC/1KL/R0sgbhKq47FqnDhY/style_thumbnail_75.png?Expires=1651449600&Signature=ZOC0lhElIPqIUngBQ0JW~30JWsRdSNFku9WJNHZws8tr47zWb~WOJftnxSLV2kBbESQDFm7XIckWqKaeGemcBB55KISZL7XixhjBdTXz9RyBsTLTifyn87IwXbOH4WvgYYnsCjJg3nMPkzhy4ZYZ2usS-TfYMU~j1kRakcqq3UmFoYaEgcVt19Zv3uKNG4wI6WALsVxM-KXCWvbmnXkZsomqkHqd-zOB5QaXgYxv93WW3hR4SVuD14WZnv8V~HUEJevx7eQzCN2pdLtjMmC0FBsB9bHEM96w33DGLHojuF4IZiE-Qq80wXHTF49xGXtOG-uGAEd9txSzHqDCTa-O5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Favorite\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.488Z\",\"updated_at\":\"2022-03-11T16:02:17.524Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"?\"},{\"key\":\"019ca17d13381dd6407c20d22968ffa1ba903eb5\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1524\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cZu/AQP/u4MtTdK3tn2S9sne/style_thumbnail_52.png?Expires=1651449600&Signature=gK0plBrSyVHz0hl7lGcDq5Cdh6W7kctcjzT7PDtygWA5X3~vac6RB44P3lqJBrLYmxlBiIfOAT2CQ6vAYL7ETuA0KI9jzqwumcChSKWNARY0Pjx38hkG2gRtgdP9fZ1gs72aI0N4Uh2QehuWycr3T6Ei8kAq5filMsgDB00-wtL5U1Ud6K~s42DpfDrCvsZ~4u3oGJNdtm3Ve2lNzp6I-sVjrloVbK5idHjb1wSy73sH-NYqx6kSPoFnH3u8n5iaFNpFBlmd9h6KPy2segQrZSHLSyKQ2p--jmEKdbPq0H6m5jOw0cClJdt9e5viLj1TBHAFsRMXOcoLkFdqULRFJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Neutral\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.373Z\",\"updated_at\":\"2022-03-11T16:02:17.519Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"b\"},{\"key\":\"0173c349731be80bc1335a155aae8d6d866f1f21\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2376\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6PP/dHx/MFkiDrjZu3zIYhji/style_thumbnail_108.png?Expires=1651449600&Signature=Xr85EHRALMB98xLRJrDcbW8wneM0PYPMQBWsJemrKR3HYcn4EmKYCS7xSh21zwMYKbXpJbgr8JRo9yiJHjdcUl4h18p3o4evDT8yn578n00WvTKOzLckHegGAPvUCoLLxlhcwa~UiJLaWEk14HxM3dVVDqjJjh7wUDCxDWrOf78M67l826BjoPb9ywYPKWmA0xWCyR0ATcs7oB-xXGu8XtXDLUEsCxvIZ2HggO5gmrqYSyKxJcCpQCu30bOHtF8cNHcYIj701iG1YfPkdSJZswAixmH5X0xoaJvwqHjryxRtbX2ZjN~ww7Qwr96AMrLGMGvziq5dkhzVmLpwbrAtzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected High Contrast\",\"description\":\"Background color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-17T15:35:46.652Z\",\"updated_at\":\"2022-03-11T16:02:17.514Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\")\"},{\"key\":\"08a71fe2424f121b7bf9d3f86ec04c7adda92964\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"191:1555\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/A6u/zMF/KQKwTbzq6IvGA6Bl/style_thumbnail_9.png?Expires=1651449600&Signature=g8XdZhr9O9FSZPs8SOp3F~DgSSTaugYbfieD5Bj9CEB1xTIpkdx7riQ9jMHoJnzBExnICSg~9uTXQcZ3mAVyNjwPcOYgYOlBh1x7U4uaC-bYjrhrtktPmhCJVLW4CHl5KNHwjF5dEac9NypY7kUqox4jPZ~B1KOwwE3D~Fjw7xHSYrco7QgdYsqE07OQXNqVoJn8Tl1zYZHagkd1E4KPY3Wma9A1b3r76CrOEswye6ZBCglOrLw3ukNKCy3h81BMmjOvFNQmdqlNuwoT0daXCagpI99hG9QcdjCni9CXZwRYdFHyT28wXp4aSnNbqgcnz8TcXYfAdd5XwOHRHfTUyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Low Contrast\",\"description\":\"\",\"created_at\":\"2022-03-11T16:02:16.942Z\",\"updated_at\":\"2022-03-11T16:02:16.942Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"WO\"},{\"key\":\"febf2470cab929d771bad64960952bb1f0536899\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1306\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/j0o/xUw/u1eaANugJJrAiRDv/style_thumbnail_40.png?Expires=1651449600&Signature=Ow7XgAVDlBI48YN57yj4NWXnd1NZXJaXVX-G6cWXr0Fqs1rDkLu38ITmlmpZh6nDwMX7GjNHUrL3Ob6SWEsmEqr5DDtBzGB9ulYUeG3kXeVChmaHx3FAACDigH61~ojmuCF5HMiFo3OaHIcrzxkStdOtE1P32sOjHpSUe0Cc0-6f9k1ucPp1PZzyJSHEP1xpCsrzir4GiQ7NZdhUIHZv6efDYYDt31uJpieeaot1NmtZSLV4BBnLrbFap4cOLthIqYiLQLqh1PMAC7RoEpXaJUt3P2sb9eqSj9Iz1EzRLkOnqpyCxK7f1EBc8N-F~zbGY1waCAGat5HwuKGqjsvgfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.334Z\",\"updated_at\":\"2022-04-07T16:01:58.599Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}{\"},{\"key\":\"fd8d29f607936a5e301141dc068fd53c20b9d35e\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"210:1596\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PXm/uE8/TWbssttKQGIkCSq1/style_thumbnail_44.png?Expires=1651449600&Signature=HCURuh1PycKSkD9JYQ5vFKFPr0Z5DAozPTEZSP8T8FLyxQ28JU9dz-mkC5jpNCOAZ~6fGnpwU7Xtbmmpp-W3LmDfklJqq~S4xdBGv1Ou6noCjftMYFU7M9A-xToEdq7L7P8SpnF9uePHSa3sS-aca4PJJEqS~yder-v40xzg7YA-G~4VUiridVFFW-8OiRswhDRt~IQAbI7Hs6P~IeW9UlOymGPoK5-XIgVv5lAuX08YDvjrsXwgG-tWgdh7dDUICwdXthB2l19yYXnYl59EFiXq5NaZ06v5Q4uKShAV-vi9IgM1wUWPwiPoLgvVYaLdIZmUr0wiFCmemdpzuCMAEw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Selected\",\"description\":\"\",\"created_at\":\"2022-03-14T14:38:16.377Z\",\"updated_at\":\"2022-04-07T16:01:58.594Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!O\"},{\"key\":\"f99e72d5b1b4a6b9c09c1533e766924bcf23272f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CUQ/nc4/4Tf14ktqlqLVlHWQ/style_thumbnail_20.png?Expires=1651449600&Signature=OY9AiNcG8MBMDjWJYui-F1CsQ3FgEkFG7UaUlJvJkobej372FKuUIYe4idRZIlRnyLTusbVmDFZ42wq9eYLwFOnMNoxXZr0MTGx7seYbHWKlSFRb3Zvkhr3-JZ~Aao~9xAPCcmVEykPv2Gq~hwX~TBUJM7lMIz6WlcF40MimfrlbQGAHcV6aIStMsHNhXivOY~l~W07Od9e3PDtH8bCW0PvD~RdinhCwHJEdLjBWlxhqfuh8uj~f9Mb~bWLXbpMWnTqZ-PQLGD-QVhDZSW8YCZ5eS-QtmMHSMQPmfO0RTP7OBqE4YesI6Yl1G4oOEgb28JWcakZTqEOCcqSJWNiLgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.185Z\",\"updated_at\":\"2022-04-07T16:01:58.589Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}\"},{\"key\":\"f35432635cc8a62278e5b6414331f12305134b8b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1314\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Yle/pGR/Ct9O5BJU2a1PiUf1/style_thumbnail_34.png?Expires=1651449600&Signature=cOP66h3VpshS73qAWGDfnXx6bLyy-hwR~~adwxTeUW4qS1JYaDP2zCYhtqnoweVSyzVK7C9VaScKTGgBIZy1HWglS-2dKHm8HERuDOuS1sYkVcgibeP~eeBaJ7wO9Nr~CsPXEnONY9S~4CLmY6AyTKArjdkZXZMxB1nNM1g86A2j9yYAeZiHjak-Gu-pePCVYeO8Q9d26kbuslp~PMC9a6jZ6A-61TEs1tPoA2yGntHNb2-PJUT9ANmlOE7wb1ANJ-YweSXum9OPC0OmWIw48EuD~t35IgCsQ5pPnkd07F-F3g9ncu6L8iC0n8Rm3vnfOgq8qcUH1QbloNJ6w6t1Mg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.223Z\",\"updated_at\":\"2022-04-07T16:01:58.583Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}|\"},{\"key\":\"ee6d71d43193e6d32af1b76bdbb8a17e0e88a0fe\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2377\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/svL/rOC/FlASuQuqAPz28tLF/style_thumbnail_55.png?Expires=1651449600&Signature=UGnD79CB2Eewwiy99k0-~3OgKCbhDLXc1jgz0-Wp~ykMMsPGaJc7iGTzoRPtzwwY4JSw-aacx8q7IDglpY12DzCIb5C~BmoJaUX1uPSV~X9fO8WohHQH00LoRKSCBmba5ksfAd6qf8biYGiu8DfWCopGDBI1qOrozg5q0obh1y7EYAVb9K3FMc-poCB1Mmb19vGu92Ksz7F6fBBZOl2nbdSetkFicmI~I0IgRLleeugfLm-uBTBSUam3W-uDgPo6HqXmfnbEa9DT0-6OL~mNg-qT6CwYT60QGMxp4OrojvhtfrpRiffKZXQ~6hiTJwAZks-Vz6JdPRcHIUgVeleuqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Main\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.662Z\",\"updated_at\":\"2022-04-07T16:01:58.578Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!f\"},{\"key\":\"e093a7ec34b4102b9202ddd5c96aed8bb89761d6\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1304\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Gzy/Uwq/zdZo7BfGsKHeXIpl/style_thumbnail_51.png?Expires=1651449600&Signature=U8~VPs~39owYsulMa8vcyqp8eByWu0Wn1Eq3v0pTVhOGaEilmBxZtsVFRd8H0s5hPxOhCbulNZxoraXolDkKnv3axb~Ilva4onrEdfPzZ6vWT7CqLk9236V95sJb34N-RVu1vKJ18uCoytpxTz-o1BkiqcKjQ7K8v8DJlR1OSdgVM6vF1wZiz1M0hjbhPB7caVWDc103aZyVBUY-05cdqmdd~bKMfx3V3KKjmNzEh-3WibxMJgle~00zdb~8Xgk3jbpk~26-s7EIpRve47QhXXjMx-Yp1nOyz7lsAbdgePL~p0~51YCe~yDyEu7d5d7Vhjkq08iMQEEZD1PxJrYu2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.632Z\",\"updated_at\":\"2022-04-07T16:01:58.573Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}r\"},{\"key\":\"e091d8254869bc42a1ad87af7c273f6c52ac37d2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1323\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ZwK/4Px/1iyGs8JbDA9q7Mth/style_thumbnail_27.png?Expires=1651449600&Signature=XmelR3JDsH7J6-YC9KYlgF-ItfpNepQI3lGfCnbYxMqiXhHruntPjULSAQFzoO8gD2A9mzDZ6ljcn4zR0-k-vCqu4o-0Qo6LUC5rzXZDiP-08zbLbCsL4~JOelHE5D4EYZYkjXnK5fWZBb0bMabQ0mVP8JXzuEduCWVgIFUkC4z84QP0BK5gXdqOH88AySAQq839HfUxQJX64rliLR8eAX~r3kl3MG2cc9SzJQbxweUovBwYn2CSi73P7qdrSiLH0IdWIZJTXKHF~fduieow4Y5qIpW~mpKGYjtAQ2KrX8Mvs4NsFxS79a8ESTDqznbg8bP5tRfRJfPquAI-VNsQ3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.266Z\",\"updated_at\":\"2022-04-07T16:01:58.568Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}\"},{\"key\":\"e00c183ab11374ddee96e212059b47be8623bf10\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1432\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tS1/Tdf/DwplsHzi2al20lh3/style_thumbnail_103.png?Expires=1651449600&Signature=U4IwuiDxnMFPBQrijQMVDE6KmWHAFV7UiTgTPyhZw2jqkOOKq05BorAVLKmC293hbfdTHz2AmToZp7bxr3wwJoCSNT-lbwvHcsu9bFzosCUpteDzbkRlX6HJOvRLu7ECts5QNTtm892lPklXcTMD--jkxPrmYcxjRY~mtmSUWk1EwoL6eVxvSM1nZ6LHSLtmdOS1S55jnat91Gh4W2cCQeKCCELsCzRWGpsrbk3hPeULOGDeV6L0US8u7zRzF-~svmvP9OdZ2p9Oc-iwBEgP~DavDqszrtsi583v3Rb9Rby2rs0Q7ljKw-FoYsm8pfKx1eaUDnx0h4yIebz3RQYMJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.627Z\",\"updated_at\":\"2022-03-11T16:02:18.120Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"N\"},{\"key\":\"dfce37229a2e4e88eb393e86ec9b4ec3d66b9738\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1434\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vQx/1pa/PYRqwsPfwGcXpTkN/style_thumbnail_2.png?Expires=1651449600&Signature=al3RYCS0fnBO3T9j2SSEHQSy1XLmIXZbgiLKY5eVqc2SF1tADt-DWElENmu2KJPZyCq-C~pQBy-DpVJqP6NlZLLDIPeeZZZFGGomczwNzIyYqRFOc2LM089LnTw0KjOAUScI7RJ89~T-xTCrA6R7Sh1ezrLq6HzTVeomMbIe9rCHkq2RZFd6YSoeJesCG71eoowjqA2oaapWS1C0pZEVMlgEa2OmvbPRFyYcZGvefH22AGmYDsT2ZFX7uvTd3cQsQ4Uf6hkuwT2hAzK1qLlVlow5kgaH2w6lYW3upcbGz6~nuu6cYapdQYI0T~jquZX-Rfsm8qiRLkumFMjjWJZk5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.131Z\",\"updated_at\":\"2022-03-11T16:02:18.116Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"P\"},{\"key\":\"dd6c5ab1906042f74cd197b15936187ee8cd9c2c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1435\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/U9U/J8p/of99yNH0JkUZajWA/style_thumbnail_11.png?Expires=1651449600&Signature=fg0Ei2JC~49kTzveVZPLuQNW0EU-z9-RbDUQhV4uMP4Qu3Yr7SelZ4f7imczA9jbGwuQxoc6-teaLCrLlZz99vfa5GcegcmPkyZ6VziFP6N2idJD1kD~Dbh6xYsDO4DImlQ~LtEZZFytnNUVawQLePUl2MQlFh6FSwqv6b0-6IgYV3FSUHFWXQdPu0LLTdwKVGM98fccwu0RVDfbVQcZ0yhYXnHZO3EmHIQ2ynsBf7h51I~-vuhTnx1qCPmdqwZ2u9Z0d9FVk86yFAHU5NYsZIZnF1Sbiv39Sx-QALsvd5yUDydYVv8WJBwO4hfsy7SdsLM~PKDquY8Tu1PawKVQXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.176Z\",\"updated_at\":\"2022-03-11T16:02:18.105Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"Q\"},{\"key\":\"d2d7ace9983897b23542aae87a6fcf3ee3048867\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1430\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rpX/Xcd/q0yhIOhgjQP5vgZh/style_thumbnail_112.png?Expires=1651449600&Signature=X1zIkg9vp6pjXtqBwQFkFJS1IjlbiH70K5~CHeaUEUVPwGTwwxBr06a4JfDOb-6dpgmNwXDAp8uTySVuerGsmTC0itwzuXfIoKq~5Twz55EicxrL-AUqOJt11BAoC22yWN7qnKQJ7rEaGNJVXW7WgskkDmrD5-RyE~uYbz-mh9qaNCxVPm3ydFCdlQCHfcr5j4bpvCr0OrhqJlYMgR7yrEQu7vMqsMGa4s9ovy7NLwxTucy5feqCDZeXzY~f6POndad8bBRI~HobkSQu7NsWnorYrzM57OswZsSs0NQdFyGDE8zH5CZNSnqiMAyuwuODBrcp5VC28kuU08f6Vx6SBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Warning\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.672Z\",\"updated_at\":\"2022-03-11T16:02:18.080Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"L\"},{\"key\":\"bd36fe04a5c11389697cea92834e1d659d2c9ada\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2384\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ylG/Kih/qqlM28blEwiNlCXy/style_thumbnail_20.png?Expires=1651449600&Signature=JORufPbWEPrNuikV3Z0fzRh5Q0yMHor57dhTp4tLKihHc1Bjm2R~1Ueqez2FFFtHVPfeBWzIHYSxVeeIa5ET7hwgZnv3TDY7GpwoHxDloSW3zOhtzptJjvwCwfwIQcHcZlxjFy6bJSbWD8zt1x8cBrMnQa0-7W3MF8vxjqKbJW0BmIDW4Nw1sw7Idi-~hNNkxTvgKctlSdUlnKiycgT7xBIpV-qSJ7xLLcQSuJL6h0maliLx9-QUONmTc0UrDvGKtA-ZtNBUAi3dGmGRkkWqKRzjYmzG2CD6neeeVBDe~CUbVyV0xFHgE9lZkhRAQMwxzP1--HuBYg~ehgptXpKFow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Disabled\",\"description\":\"Text and icon color for Disabled elements\",\"created_at\":\"2022-02-17T15:35:46.219Z\",\"updated_at\":\"2022-03-11T16:02:18.019Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"2\"},{\"key\":\"9e795de23aea014ad1328d148c954cd955229afa\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Pnv/CYP/MoPZFql1K5CmrFUw/style_thumbnail_61.png?Expires=1651449600&Signature=QgSjzEFrxb7QsYpyv6UkhXwYhVZG863kmIplspVju-0YpP3V-ke7Y81KzXY90Dy-OBoiBOKgU7MEzG32iBZx1DmREl6bdbpj8ykhmSqzNOB5gNN~2rZ~OmLnT2mHJBPVJ0gvQA0DeVR4gVoMv98mQcSNKtKILPWX9guhnqBzYF2i6dxtiKv7luCjljZVz03n9CKcUVX3wdqzBHq2ZlSQbGIwm6pWiSR4RjkQoAuIjs~8vXKAGytMa-GzQ0PekxxFjFPzVm0~v6KzUZVLU8Vf0KOCUAaaI2NUJ28Ny3peZAK3z~rl4bhJOnDjiYTZBeveUW80Y~vQ1GHMI9Z4M6IbBQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Info\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.417Z\",\"updated_at\":\"2022-03-11T16:02:17.944Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"I\"},{\"key\":\"6a026fc327c293cb7626902ceae76e698d45aa45\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1525\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Chl/k9T/roO7ceLJ4NTZBgvt/style_thumbnail_49.png?Expires=1651449600&Signature=OSKQLSEatCtn72tdtsuJcWW479NFXfHC9gzvu9K2oFtK-7SidoUlOxsn0r~CL~u4igl5DQ992ye5bAVHWUC-UlpQ8pUHSR-y-38885p2kLKG8D02TL1SH4~nvzCqW3a8hLjzQXkgmjp2F6aj4uKgQbxJ6U~Wfew0WXOsz7w3LPcBYuaCDX6DKPXid57qK1NkSUUIT8XgJDIdnCZj2FI8Fx0WEYuPk7~7MBbezgFDYNUWFDtPaTLedSR3ENL-jo5triIIYDNuY6sZptSxGBOls60VDwfbatDrdIBnTmbXDjulDWBVKP~YD4xY5szOix5S5n0ByAweDyF7tKSB46OLdQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.359Z\",\"updated_at\":\"2022-03-11T16:02:17.805Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"c\"},{\"key\":\"5c5bbae2667c5b1ef2146a1812a15b9eb71bcd63\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1520\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iL7/fvy/c1R4XSTyB9m4JLXv/style_thumbnail_2.png?Expires=1651449600&Signature=ZwfYHT7~~kWvak-bkrC2lrE0odRqZL8YSqHoqJhrqCB1WjHtBhiiUiJ5kt9inPIcVWhil9nv2MYE10BhruJvbKWiZqQ3LavT2wHxXOwltvG8eE6APDfUwNAiOSBoFiQRWpGCUd2m0mRF5YJQlpIk3aEobpSdlmikEmWq0JUs9y5rQvIAk2vf5BQuXP9WtJ9gIzi9Mx5dd2DFnuv~B6XhfgIw5f4lmkCpaL5k1Qj~TW1Pt1X0QCn8IwrQmewTH5TZ~XVPE6gdsJnQX3ecICRgJ~xPkxNV62sZ-7apdFJnKz1F~Fzgfkl3WT9gMhoieKoHew7wqSGwtKHsT2iDMJf7QA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Announcement\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.613Z\",\"updated_at\":\"2022-03-11T16:02:17.782Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"^\"},{\"key\":\"4663c47d437f48fa780cca2a6af426c1a27bf89f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1433\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Kpq/s8z/NGJIdJYUXtg5ywxa/style_thumbnail_58.png?Expires=1651449600&Signature=aoTbjuUnRlP5Rcs38va6ADmbmimxv1Rgm-wVjplCulXGg9UQSg5VjfLMmD99X72ZvQG~VsRpCv3qwrKpAbz7~A5rew86YFAgVlL-68Ja7rNoSDmLRZGxkWHF4MWXuMf~4iunXkTckUy7v1J03P5sKi9R1uqEuEh4uJp3R51pbGdoLnLgRWY0Mrh2VTmBdkX4uaNI9xhPov6cG6dtDaT1L81UN6cPb3SnIU1E3OhNGPlW4Ru-isybMkHZrRgn-YJuS0kOfvWR8NZU~GerkJ7eGfq~IDJ7YGttUsm8pWMLu6qDv6QxpOejzSLVjv9cl30rvR11fR7D-4g~1~oliJeoDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.402Z\",\"updated_at\":\"2022-03-11T16:02:17.720Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"O\"},{\"key\":\"ac5753c72eb25f71f36337a7b875727ffdad8ee8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1484\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/9T1/0ov/9EqYc6EVXoDW55Dg/style_thumbnail_54.png?Expires=1651449600&Signature=VO248jt6D-zdxFWEHx5~3P84f9N4bEap1fTyhDTInuOJ3NhgwHxcpVMP9LLWfQnD7vQ1wW-wiy3NPX0KrWdwUEWnoOkzQEZ051s34-P2OX-L01OWypEQRukjiVp36hOLLEwAfGUIzgraRLWfekKBSg2oODS19naot9KQ5aD7Bj6dlic3q7IHsqdq1gNPHV67bVpPpMF2W5uY~aUombprJJUyPOAjKwlFAbz2L2j1CgXNhP6gGQSeIGBYGWrq26MAZlDUbJwMFq1Wefqdvdc6MRbIC09N7MePLGqEQa-KpqBYvhbPvD0NbUAlQNHcIZnDrvxuw~yPCQu1j07F~YLJSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.383Z\",\"updated_at\":\"2022-03-11T16:02:17.976Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"T\"},{\"key\":\"a9b8878b6c2fba465183fba4303da7d86dc8b46f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"82:1401\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/AsN/7UI/D0HEnki5EM5paDxO/style_thumbnail_0.png?Expires=1651449600&Signature=LRCyMmmQfk1b9UFyGpoiY4alqb7bWIUsHM2bOinUUzdNzrjwmbQDWLmQlmrbzv3k3oFTSYcJj7paEGR0l7vQLnYI4XuPa3xs0L4fWaDw-WJwRbQWxnE-Whj8jhvd7iiRlMgCoEizzbFXOBsxv~2WankufAxCPWRegIBnWJAdHHnCM8E5kdnRRlELQFgEE66herqyQeT3YZTqjlgQ9WUVkVdPlKEIYHZTBI7axMYN2aIlZ7zgMurysd4hBQtgs4hAjAeQ4QjwdP92a2g9HUtmE2iGr7XC4Dnsnq9H3lYuR4-dXRDzZwU6OuYIOVFFR90jGD9XSrjFimc2wzUovRStQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Foreground On Disabled\",\"description\":\"\",\"created_at\":\"2022-03-02T11:48:02.118Z\",\"updated_at\":\"2022-03-11T16:02:17.967Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~8\"},{\"key\":\"a2ae03c63dda81608a24af4e0f55e5cba08539bb\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1085\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KmA/KVg/gv8GSH01Ocn2EI0g/style_thumbnail_66.png?Expires=1651449600&Signature=Zumid8RAbfO-WxqvHLkQcEkHSqZT09wvVUO--pu7HDev3G0YKzaoSaQsAZFUGXaZzHx-b1QXP45p1nwZLO40UVCpdvv90kKTvfj1mnLlTubDZjsxUCHy4fwjjt2fRo3mzsi68fZS86A-yKL2nT4msZvedUi3QZE0UqAII-Bvodd0la4nj~QrugJj-sNhId8jbVwFyE8VAWZk7bQ7B~AVCIVvOdm~M6~quC99HsF4GiPyS6-X~YWDwvWfYvseoOI2PKKk0aEU3Nyox6OWImzUtfrzBeKDjlvCbgXCU8TIfMvJnfWINlU4MUwFH4uajtnCApknR5FSOkaTXsa9Ll-0Ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.443Z\",\"updated_at\":\"2022-03-11T16:02:17.963Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"G\"},{\"key\":\"a098e3653b26038429db4ea47eedc4dcd6c47da6\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1436\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jUW/y0J/Yk20GRMmlRyxkqUJ/style_thumbnail_56.png?Expires=1651449600&Signature=J8rlEA1LXAB3mNqo9LVbwrH-hnaruZkR0z-0s-p24Jmg7mDsqD7EYGGT6aLMdVbGCvXwX5yCoaeLw30iq1kRmLhJFA7oymmt62iuWSRUjXc-x6aA87uJzKbZaL4FASxvJsAeBTnsB9SqiBLZisv-Ls-mYS839JloCtD5weufWXtd0XILRo~L2xJPUXKD1kfB6UG8r0JsPx~DJbRyKT~YL2EFT1DEf1oIxtvecz~121gkd2TvOVA5ycw4kJui3bRQ00JAlQrg0t-QOMchE41TsNDG5lQRogD4lbjKrrj3NCbJ3vFh4nL7FTQjw7vBPvaoTMHBtUXBNgUBFcOhEzvvlQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.392Z\",\"updated_at\":\"2022-03-11T16:02:17.958Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"R\"},{\"key\":\"9eb71027b53e7d03955f2defabc70ae991858b06\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"87:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/OdD/4RD/idONBzP8guOzCp2U/style_thumbnail_1.png?Expires=1651449600&Signature=PSznIcA3cM7eJr01zPtgpip~mofzn4UaXRIsVg4n8eRZldbcTbszxyPaEledntecj0fTblF407inuhYzT5aeQkXK4OhhZDxo6UQZgKE52lESks1WJz9tIH-q-oUiaj6D7VWAVue40enVe-lSXgdNd3XljlguzotE5Qqvrg887e68TPuu0PrE4sJQq7VRAtH9J0ts2lCXMyO5xuf5vPGwv1I3-CqWgZaK94~cx2NToQH3GijX02Kx1PYCT50CfOoUYFc19FK7QjY9NE9IpZsJ4BZAve13FONzzXAR3ap0BvEKyMpebqrPCtItnqPawXMPCP0mys8gR~YxwbTZ~pSf1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Error\",\"description\":\"\",\"created_at\":\"2022-03-02T14:32:53.650Z\",\"updated_at\":\"2022-03-11T16:02:17.948Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"aO\"},{\"key\":\"fdbfdc8a60fe3e0bfdee60336d8cf5b5bb1a1ce5\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1515\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Zcz/Ff2/TiTA3kc49iZx9vdF/style_thumbnail_53.png?Expires=1651449600&Signature=PrVwGxzZfe4QRIA4dfo-biRnE1X8bnLQ-cMq7cPcI1xZ9Aif8QBFxZxYwGZ6mzqv-KeUK83fCoq0LzhQnuNiOe4FPc9JOXZ~1qmNGt8e0s8fT-c-cZ92d6sMXfGOrBnxjUUqCpaDPCHX-tmQxn76VPkve8162jDpDY91M6Bhr3b6-SDNo15QqFGJdKjOVcnNxmBbuSouAzEvaugTqq2e~jZbzplpgkT-n5DArWI4JIk2nwtC5AkHY~kiBpdln6ZUoJpy5ItzzyNBcnHwuILkhY2FgU5Vom0H6-ph-euvQxssiGOPLAO7mj26HKrWni3KNcEo2gB1OfmCP4GMjyJCxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Degraded\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.378Z\",\"updated_at\":\"2022-03-11T16:02:18.232Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"Y\"},{\"key\":\"f9c3fc076dc2bbd0279fbbdde2961d5011fc1a4b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/eXp/gs7/NpqQWETMcxc9xV2R/style_thumbnail_71.png?Expires=1651449600&Signature=B-EqJ1CiFxdfidAv2~fA8mtI5JMQNAwynXovQ4vLQUh8CUMKlZuMWIdn9ngGN4JWSYBJKsHk69KddDZ6FRDhNElagFESUU~qbOw~7bo7SxSr-Lb6xzgcze2EacCAKHtBJNbn2IGVZLfwwM2zf0K~SPpftGjwdx0YEfvy92K8m8OPl~GopKXDqXlKlNCMXJNtF8pWQqfSa2q6nnnwKeuPmAvJNwP3XdGt4RNCyPud0hmU4QUofcS5Ng3v4OgCkzqywVYZui4kgPkdwDHeO2shNvaPx0wuFaWpk8H2MEKlv7bhMeI8UKBbkMHlYWHeS9B~cjuaGOwDhz~Bsbuiou1aLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unknown\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.468Z\",\"updated_at\":\"2022-03-11T16:02:18.213Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"\\\\\"},{\"key\":\"f673a03ddc76c4f14bf3bcbd028201a8f49c3550\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1431\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ooV/lNx/lh8HnreCYSJkAzo1/style_thumbnail_59.png?Expires=1651449600&Signature=E-dAhRMGY4cHjNhyzp7G2W2kX4eCHpPHQ6BoypdWY5CTQew6wTt3ghnF2vehtKhd8u58y3j0~68OHDtlT6GZUS2tIfuPU4evz4PHg9wvyrwfuMui7jqNkTXavkCjlCrcWdQyxrgcqBhPLdpQB9HsJZm7OQjbLAg-TmOp-nsO4SCkULXU6j5ry9Ndxz8XCmqYVrSVdm8mtUNjJ780gqsXBMkT8C~U1AMJAzWTP3WeLhzOdSSIcWnBH1ick4i9kl~gJRKIIbfKNtbkxlnxqdcwcl14r-myXyQYwFdp-rXHYKVzJOWyTFq3jDA53KdJ2BBZtPpzvaLEnXOP9eRa7cQU-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Critical\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.407Z\",\"updated_at\":\"2022-03-11T16:02:18.200Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"M\"},{\"key\":\"f49d66a80f6c2bae52643a5553035a9add1b837b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1086\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/u60/6tq/Y24CQgxRLUUyzDQN/style_thumbnail_39.png?Expires=1651449600&Signature=Z8iZy0Vs5o8rKt3bv1bH7~YcERxXE2t50MVwXMsKR~dM-unexI31TtUCxgyPWRXp8YDhvN29RoQqclJ4zq1KrVDi9ZCCIO3b~vewrXudzWMFGhI~gzs5WuZ8SDWXPDUHHK~~xwwopsIfBAoXJKTk19CXiSB~nhhWtSW0hNQ28IQQ47vTQ5hxzlLcoSGCYZmZrHUAZvtKtRz6B-rnwfdh~O77Q6lUvQrDUtGwGUYPuxOdDbaZQIzxeho9Ixwpen2LU7khLP~E-fPZg4O5iWK6VxjPb8WGwWvM0i5VMMG4ePKLop0H9QgFvsmvPXaHJb-oaWxuLzIIX-Gea8YJRJJHxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.310Z\",\"updated_at\":\"2022-03-11T16:02:18.195Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"H\"},{\"key\":\"e99939e903afb4f44f4a3a31914e44efc39a1efb\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2382\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/naE/ZwC/7kDsI3uNcyRYVzht/style_thumbnail_83.png?Expires=1651449600&Signature=ImS3HOFf9rauttnADdhuLKXeJiV5rm0L3hsedCESGV0mr7RSCyFoBKivAmQU4WJgK7hbdjFVp2CbCX9sxs5BGgucDCwUiNdT~Qho70FwUdITDJfVVbCNldT6xhpMThwbPQenLOugjRBphUew0V4lQNXvoEgoHQKzWBz-3avo9GRrJKAUSwRejitaAfOl~poriPic3djYThCUGvGU4YElRJ7HJUPtBOGJvPHbImF0LEGDeTNIoRwJGDslvmmgXITQkA2SA3ezR2EjC4PtUYD47aoEz~EGTp19Vg5Sej4blRAefJDIZja6Gqeb7Zz8RLvg5yRvn1nytQeoSETx58Cpow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary Inverted\",\"description\":\"Inverted Secondary text and icon color\",\"created_at\":\"2022-02-17T15:35:46.527Z\",\"updated_at\":\"2022-03-11T16:02:18.163Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"0\"}]},\"i18n\":null}");

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
const getColorTokens = (mapThemesToEachOther) => __awaiter(void 0, void 0, void 0, function* () {
    let lightThemeTokens = yield Promise.all(_data_light_mode_json__WEBPACK_IMPORTED_MODULE_2__.meta.styles.map((style) => __awaiter(void 0, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, style), { theme: 'light' });
    })));
    let darkThemeTokens = yield Promise.all(_data_dark_mode_json__WEBPACK_IMPORTED_MODULE_3__.meta.styles.map((style) => __awaiter(void 0, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, style), { theme: 'dark' });
    })));
    if (mapThemesToEachOther) {
        lightThemeTokens = lightThemeTokens.map(token => {
            const darkThemeToken = darkThemeTokens.filter(darkToken => token.name.toLowerCase() === darkToken.name.toLowerCase());
            return Object.assign(Object.assign({}, token), { darkThemeToken: darkThemeToken[0].key });
        });
        darkThemeTokens = darkThemeTokens.map(token => {
            const lightThemeToken = lightThemeTokens.filter(lightToken => token.name.toLowerCase() === lightToken.name.toLowerCase());
            return Object.assign(Object.assign({}, token), { lightThemeToken: lightThemeToken[0].key });
        });
    }
    const allColorTokens = lightThemeTokens.concat(darkThemeTokens);
    const tempRectangle = figma.createRectangle();
    colorTokens = yield Promise.all(allColorTokens.map((style) => __awaiter(void 0, void 0, void 0, function* () {
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
        return colorStyleWithHex;
    })));
    tempRectangle.remove();
});
const getColorStats = () => __awaiter(void 0, void 0, void 0, function* () {
    yield getColorTokens(true);
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
                isRelevantLayer(selectedLayer);
                outputForLayersWithChildren = selectedLayer.findAll((n) => isRelevantLayer(n));
                if (!isRelevantLayer(selectedLayer)) {
                    return [...outputForLayersWithChildren];
                }
                else {
                    return [selectedLayer, ...outputForLayersWithChildren];
                }
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
    const colorsUsingOneCoreStyle = allInstancesOfColor.filter((color) => {
        return colorTokens.some((oneCoreColor) => {
            return color.colorStyleId.includes(oneCoreColor.key);
        });
    }).map(color => {
        let oneCoreToken = undefined;
        colorTokens.forEach((oneCoreColor) => {
            if (color.colorStyleId.includes(oneCoreColor.key)) {
                oneCoreToken = oneCoreColor;
            }
        });
        return Object.assign(Object.assign({}, color), { token: oneCoreToken });
    });
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
});
const selectAndZoomToLayer = (layerId) => {
    const layer = figma.getNodeById(layerId);
    figma.currentPage.selection = [layer];
    figma.viewport.scrollAndZoomIntoView([layer]);
};
let themeSwitchedNotification = undefined;
const switchToDarkTheme = (closeAfterRun) => __awaiter(void 0, void 0, void 0, function* () {
    if (figma.currentPage.selection.length === 0) {
        themeSwitchedNotification && (themeSwitchedNotification === null || themeSwitchedNotification === void 0 ? void 0 : themeSwitchedNotification.cancel());
        figma.notify("Select some layers before choosing a theme", { error: true });
        return closeAfterRun && figma.closePlugin();
    }
    themeSwitchedNotification && (themeSwitchedNotification === null || themeSwitchedNotification === void 0 ? void 0 : themeSwitchedNotification.cancel());
    const loadingNotification = figma.notify("Converting selection to dark mode...");
    const colorStats = yield getColorStats();
    for (const color of colorStats.colorsUsingOneCoreStyle) {
        if (color.token.theme === 'light') {
            yield figma.importStyleByKeyAsync(color.token.darkThemeToken).then(imported => {
                figma.getNodeById(color.layerId)[`${color.colorType}StyleId`] = imported.id;
            });
        }
    }
    loadingNotification.cancel();
    themeSwitchedNotification = figma.notify("🌙 Selection set to dark mode");
    closeAfterRun && figma.closePlugin();
});
const switchToLightTheme = (closeAfterRun) => __awaiter(void 0, void 0, void 0, function* () {
    if (figma.currentPage.selection.length === 0) {
        themeSwitchedNotification && (themeSwitchedNotification === null || themeSwitchedNotification === void 0 ? void 0 : themeSwitchedNotification.cancel());
        figma.notify("Select some layers before choosing a theme", { error: true });
        return closeAfterRun && figma.closePlugin();
    }
    themeSwitchedNotification && (themeSwitchedNotification === null || themeSwitchedNotification === void 0 ? void 0 : themeSwitchedNotification.cancel());
    const loadingNotification = figma.notify("Converting selection to light mode...");
    const colorStats = yield getColorStats();
    for (const color of colorStats.colorsUsingOneCoreStyle) {
        if (color.token.theme === 'dark') {
            yield figma.importStyleByKeyAsync(color.token.lightThemeToken).then(imported => {
                figma.getNodeById(color.layerId)[`${color.colorType}StyleId`] = imported.id;
            });
        }
    }
    loadingNotification.cancel();
    themeSwitchedNotification = figma.notify("🔆 Selection set to light mode");
    closeAfterRun && figma.closePlugin();
});
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
        figma.showUI(__html__, { width: 300, height: 448 });
        navigateTo('open-home');
        break;
    case "open-table-creator":
        figma.showUI(__html__, { width: 300, height: 448 });
        navigateTo('open-table-creator');
        break;
    case "theme-switcher-to-light":
        switchToLightTheme(true);
        break;
    case "theme-switcher-to-dark":
        switchToDarkTheme(true);
        break;
    case "open-language-linter":
        figma.showUI(__html__, { width: 475, height: 500 });
        navigateTo('open-language-linter');
        break;
    case "open-color-linter":
        figma.showUI(__html__, { width: 475, height: 500 });
        navigateTo('open-color-linter');
        break;
}
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.type === "navigate-to-tab") {
        switch (msg.tabClicked) {
            case "home":
                uiSize = {
                    width: 300,
                    height: 448
                };
                figma.ui.resize(uiSize.width, uiSize.height);
                navigateTo('open-home');
                break;
            case "table-creator":
                uiSize = {
                    width: 300,
                    height: 448
                };
                figma.ui.resize(uiSize.width, uiSize.height);
                navigateTo('open-table-creator');
                break;
            case "language-linter":
                sendCurrentTextSelection();
                uiSize = {
                    width: 475,
                    height: 500
                };
                figma.ui.resize(uiSize.width, uiSize.height);
                navigateTo('open-language-linter');
                break;
            case "color-linter":
                uiSize = {
                    width: 475,
                    height: 500
                };
                figma.ui.resize(uiSize.width, uiSize.height);
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
    const sendColorData = () => __awaiter(void 0, void 0, void 0, function* () {
        yield getColorTokens(false);
        figma.ui.postMessage({
            type: 'color-stats',
            message: Object.assign(Object.assign({}, customEventData), { colorStats: yield getColorStats(), colorTokens: colorTokens, selectionMade: figma.currentPage.selection.length > 0 }),
        });
    });
    if (msg.type === 'run-color-linter') {
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
    if (msg.type === "resize") {
        figma.ui.resize(msg.size.x >= uiSize.width ? msg.size.x : uiSize.width, msg.size.y >= uiSize.height ? msg.size.y : uiSize.height);
    }
    if (msg.type === 'theme-switcher-to-dark') {
        switchToDarkTheme();
    }
    if (msg.type === 'theme-switcher-to-light') {
        switchToLightTheme();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvYXBwbHlNYXRyaXhUb1BvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2Nsb25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2NvbnZlcnRDb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9maW5kTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRBbGxGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRCb3VuZGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvZ2V0Q1NTU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldE5vZGVJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRQYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldFJlbGF0aXZlUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaGFzQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNQYXJ0T2ZJbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1BhcnRPZk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNUeXBlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1Zpc2libGVOb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2xvYWRGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9sb2FkVW5pcXVlRm9udHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvbm9kZVRvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3BhcnNlVGV4dFN0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3NldENoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvdG9wTGV2ZWxGcmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jbG9uZURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcUJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcVdpdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdHJpeC1pbnZlcnNlL21hdHJpeC1pbnZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkLXJhbmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZhOztBQUVi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QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7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LENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNB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IGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGx1Z2luL2NvbnRyb2xsZXIudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYXBwbHlNYXRyaXhUb1BvaW50ID0gYXBwbHlNYXRyaXhUb1BvaW50O1xuXG5mdW5jdGlvbiBhcHBseU1hdHJpeFRvUG9pbnQobWF0cml4LCBwb2ludCkge1xuICByZXR1cm4gW3BvaW50WzBdICogbWF0cml4WzBdWzBdICsgcG9pbnRbMV0gKiBtYXRyaXhbMF1bMV0gKyBtYXRyaXhbMF1bMl0sIHBvaW50WzBdICogbWF0cml4WzFdWzBdICsgcG9pbnRbMV0gKiBtYXRyaXhbMV1bMV0gKyBtYXRyaXhbMV1bMl1dO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2xvbmU7XG5cbi8qKlxuICogIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBjbG9uZSB0aGUgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGUgPT09ICdzeW1ib2wnIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHJldHVybiB2YWwubWFwKGNsb25lKTtcbiAgICB9IGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvID0ge307XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbCkge1xuICAgICAgICBvW2tleV0gPSBjbG9uZSh2YWxba2V5XSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgfVxuXG4gIHRocm93ICd1bmtub3duJztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZmlnbWFSR0JUb1dlYlJHQiA9IGZpZ21hUkdCVG9XZWJSR0I7XG5leHBvcnRzLndlYlJHQlRvRmlnbWFSR0IgPSB3ZWJSR0JUb0ZpZ21hUkdCO1xuZXhwb3J0cy5maWdtYVJHQlRvSGV4ID0gZmlnbWFSR0JUb0hleDtcbmV4cG9ydHMuaGV4VG9GaWdtYVJHQiA9IGhleFRvRmlnbWFSR0I7XG5jb25zdCBuYW1lc1JHQiA9IFsncicsICdnJywgJ2InXTtcbi8qKlxuICogdGhpcyBmdW5jdGlvbiBjb252ZXJ0cyBmaWdtYSBjb2xvciB0byBSR0IoQSkgKGFycmF5KVxuICovXG4vLyBmaWdtYVJHQlRvV2ViUkdCKHtyOiAwLjg4NzQ5OTk4ODA3OTA3MSwgZzogMC4wNzA1ODgyMzg1MzczMTE1NSwgYjogMC4wNjY1NjI0NzM3NzM5NTYzfSlcbi8vPT4gWzIyNiwgMTgsIDE3XVxuXG5mdW5jdGlvbiBmaWdtYVJHQlRvV2ViUkdCKGNvbG9yKSB7XG4gIGNvbnN0IHJnYiA9IFtdO1xuICBuYW1lc1JHQi5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgcmdiW2ldID0gTWF0aC5yb3VuZChjb2xvcltlXSAqIDI1NSk7XG4gIH0pO1xuICBpZiAoY29sb3JbJ2EnXSAhPT0gdW5kZWZpbmVkKSByZ2JbM10gPSBNYXRoLnJvdW5kKGNvbG9yWydhJ10gKiAxMDApIC8gMTAwO1xuICByZXR1cm4gcmdiO1xufVxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGNvbnZlcnRzIFJHQihBKSBjb2xvciAoYXJyYXkpIHRvIGZpZ21hIGNvbG9yXG4gKi9cbi8vIHdlYlJHQlRvRmlnbWFSR0IoWzIyNiwgMTgsIDE3XSlcbi8vPT4ge3I6IDAuODg2Mjc0NTA5ODAzOTIxNSwgZzogMC4wNzA1ODgyMzUyOTQxMTc2NSwgYjogMC4wNjY2NjY2NjY2NjY2NjY2N31cblxuXG5mdW5jdGlvbiB3ZWJSR0JUb0ZpZ21hUkdCKGNvbG9yKSB7XG4gIGNvbnN0IHJnYiA9IHt9O1xuICBuYW1lc1JHQi5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgcmdiW2VdID0gY29sb3JbaV0gLyAyNTU7XG4gIH0pO1xuICBpZiAoY29sb3JbM10gIT09IHVuZGVmaW5lZCkgcmdiWydhJ10gPSBjb2xvclszXTtcbiAgcmV0dXJuIHJnYjtcbn1cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBjb252ZXJ0cyBmaWdtYSBjb2xvciB0byBIRVggKHN0cmluZylcbiAqL1xuLy8gZmlnbWFSR0JUb0hleCh7IHI6IDAsIGc6IDAuMSwgYjogMSB9KVxuLy89PiAjMDAxYWZmXG5cblxuZnVuY3Rpb24gZmlnbWFSR0JUb0hleChjb2xvcikge1xuICBsZXQgaGV4ID0gJyMnO1xuICBjb25zdCByZ2IgPSBmaWdtYVJHQlRvV2ViUkdCKGNvbG9yKTtcbiAgaGV4ICs9ICgoMSA8PCAyNCkgKyAocmdiWzBdIDw8IDE2KSArIChyZ2JbMV0gPDwgOCkgKyByZ2JbMl0pLnRvU3RyaW5nKDE2KS5zbGljZSgxKTtcblxuICBpZiAocmdiWzNdICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBhID0gTWF0aC5yb3VuZChyZ2JbM10gKiAyNTUpLnRvU3RyaW5nKDE2KTtcblxuICAgIGlmIChhLmxlbmd0aCA9PSAxKSB7XG4gICAgICBoZXggKz0gJzAnICsgYTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGEgIT09ICdmZicpIGhleCArPSBhO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoZXg7XG59XG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gY29udmVydHMgSEVYIGNvbG9yIChzdHJpbmcpIHRvIGZpZ21hIGNvbG9yXG4gKi9cbi8vIGhleFRvRmlnbWFSR0IoIzAwMWFmZilcbi8vPT4geyByOiAwLCBnOiAwLjEwMTk2MDc4NDMxMzcyNTQ5LCBiOiAxIH1cblxuXG5mdW5jdGlvbiBoZXhUb0ZpZ21hUkdCKGNvbG9yKSB7XG4gIGxldCBvcGFjaXR5ID0gJyc7XG4gIGNvbG9yID0gY29sb3IudG9Mb3dlckNhc2UoKTtcbiAgaWYgKGNvbG9yWzBdID09PSAnIycpIGNvbG9yID0gY29sb3Iuc2xpY2UoMSk7XG5cbiAgaWYgKGNvbG9yLmxlbmd0aCA9PT0gMykge1xuICAgIGNvbG9yID0gY29sb3IucmVwbGFjZSgvKC4pKC4pKC4pPy9nLCAnJDEkMSQyJDIkMyQzJyk7XG4gIH0gZWxzZSBpZiAoY29sb3IubGVuZ3RoID09PSA4KSB7XG4gICAgY29uc3QgYXJyID0gY29sb3IubWF0Y2goLyguezZ9KSguezJ9KS8pO1xuICAgIGNvbG9yID0gYXJyWzFdO1xuICAgIG9wYWNpdHkgPSBhcnJbMl07XG4gIH1cblxuICBjb25zdCBudW0gPSBwYXJzZUludChjb2xvciwgMTYpO1xuICBjb25zdCByZ2IgPSBbbnVtID4+IDE2LCBudW0gPj4gOCAmIDI1NSwgbnVtICYgMjU1XTtcblxuICBpZiAob3BhY2l0eSkge1xuICAgIHJnYi5wdXNoKHBhcnNlSW50KG9wYWNpdHksIDE2KSAvIDI1NSk7XG4gICAgcmV0dXJuIHdlYlJHQlRvRmlnbWFSR0IocmdiKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gd2ViUkdCVG9GaWdtYVJHQihyZ2IpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmV4dHJhY3RJbWFnZUNyb3BQYXJhbXMgPSBleHRyYWN0SW1hZ2VDcm9wUGFyYW1zO1xuXG52YXIgX21hdHJpeEludmVyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJtYXRyaXgtaW52ZXJzZVwiKSk7XG5cbnZhciBfYXBwbHlNYXRyaXhUb1BvaW50ID0gcmVxdWlyZShcIi4vYXBwbHlNYXRyaXhUb1BvaW50XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGNhbiBleHRyYWN0IHRoZSBpbWFnZSBjcm9wIHJvdGF0aW9uLCBzY2FsZSAoL3NpemUpIGFuZCBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0gc2hhcGVXaWR0aFxuICogQHBhcmFtIHNoYXBlSGVpZ2h0XG4gKiBAcGFyYW0gdFxuICovXG5mdW5jdGlvbiBleHRyYWN0SW1hZ2VDcm9wUGFyYW1zKHNoYXBlV2lkdGgsIHNoYXBlSGVpZ2h0LCB0KSB7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IHQubGVuZ3RoID09PSAyID8gWy4uLnQsIFswLCAwLCAxXV0gOiBbLi4udF07XG4gIGNvbnN0IG14SW52ID0gKDAsIF9tYXRyaXhJbnZlcnNlLmRlZmF1bHQpKHRyYW5zZm9ybSk7XG4gIGNvbnN0IHBvaW50cyA9IFtbMCwgMF0sIFsxLCAwXSwgWzEsIDFdLCBbMCwgMV1dLm1hcChwID0+ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobXhJbnYsIHApKTtcbiAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKHBvaW50c1sxXVsxXSAtIHBvaW50c1swXVsxXSwgcG9pbnRzWzFdWzBdIC0gcG9pbnRzWzBdWzBdKTtcbiAgY29uc3Qgc3ggPSBNYXRoLnNxcnQoTWF0aC5wb3cocG9pbnRzWzFdWzBdIC0gcG9pbnRzWzBdWzBdLCAyKSArIE1hdGgucG93KHBvaW50c1sxXVsxXSAtIHBvaW50c1swXVsxXSwgMikpO1xuICBjb25zdCBzeSA9IE1hdGguc3FydChNYXRoLnBvdyhwb2ludHNbMl1bMF0gLSBwb2ludHNbMV1bMF0sIDIpICsgTWF0aC5wb3cocG9pbnRzWzJdWzFdIC0gcG9pbnRzWzFdWzFdLCAyKSk7XG4gIHJldHVybiB7XG4gICAgcm90YXRpb246IGFuZ2xlICogKDE4MCAvIE1hdGguUEkpLFxuICAgIHNjYWxlOiBbc3gsIHN5XSxcbiAgICBzaXplOiBbc3ggKiBzaGFwZVdpZHRoLCBzeSAqIHNoYXBlSGVpZ2h0XSxcbiAgICBwb3NpdGlvbjogWy1wb2ludHNbMF1bMF0gKiBzaGFwZVdpZHRoLCAtcG9pbnRzWzBdWzFdICogc2hhcGVIZWlnaHRdXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmV4dHJhY3RMaW5lYXJHcmFkaWVudFBhcmFtc0Zyb21UcmFuc2Zvcm0gPSBleHRyYWN0TGluZWFyR3JhZGllbnRQYXJhbXNGcm9tVHJhbnNmb3JtO1xuXG52YXIgX21hdHJpeEludmVyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJtYXRyaXgtaW52ZXJzZVwiKSk7XG5cbnZhciBfYXBwbHlNYXRyaXhUb1BvaW50ID0gcmVxdWlyZShcIi4vYXBwbHlNYXRyaXhUb1BvaW50XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGNhbiBleHRyYWN0IHRoZSB4IGFuZCB5IHBvc2l0aW9ucyBvZiB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgbGluZWFyIGdyYWRpZW50XG4gKiAoc2NhbGUgaXMgbm90IGltcG9ydGFudCBoZXJlKVxuICpcbiAqIEBwYXJhbSBzaGFwZVdpZHRoIG51bWJlclxuICogQHBhcmFtIHNoYXBlSGVpZ2h0IG51bWJlclxuICogQHBhcmFtIHQgVHJhbnNmb3JtXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RMaW5lYXJHcmFkaWVudFBhcmFtc0Zyb21UcmFuc2Zvcm0oc2hhcGVXaWR0aCwgc2hhcGVIZWlnaHQsIHQpIHtcbiAgY29uc3QgdHJhbnNmb3JtID0gdC5sZW5ndGggPT09IDIgPyBbLi4udCwgWzAsIDAsIDFdXSA6IFsuLi50XTtcbiAgY29uc3QgbXhJbnYgPSAoMCwgX21hdHJpeEludmVyc2UuZGVmYXVsdCkodHJhbnNmb3JtKTtcbiAgY29uc3Qgc3RhcnRFbmQgPSBbWzAsIDAuNV0sIFsxLCAwLjVdXS5tYXAocCA9PiAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG14SW52LCBwKSk7XG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IFtzdGFydEVuZFswXVswXSAqIHNoYXBlV2lkdGgsIHN0YXJ0RW5kWzBdWzFdICogc2hhcGVIZWlnaHRdLFxuICAgIGVuZDogW3N0YXJ0RW5kWzFdWzBdICogc2hhcGVXaWR0aCwgc3RhcnRFbmRbMV1bMV0gKiBzaGFwZUhlaWdodF1cbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zID0gZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zO1xuXG52YXIgX21hdHJpeEludmVyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJtYXRyaXgtaW52ZXJzZVwiKSk7XG5cbnZhciBfYXBwbHlNYXRyaXhUb1BvaW50ID0gcmVxdWlyZShcIi4vYXBwbHlNYXRyaXhUb1BvaW50XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGNhbiBleHRyYWN0IHRoZSByb3RhdGlvbiAoaW4gZGVncmVlcyksIGNlbnRlciBwb2ludCBhbmQgcmFkaXVzIGZvciBhIHJhZGlhbCBvciBkaWFtb25kIGdyYWRpZW50XG4gKlxuICogQHBhcmFtIHNoYXBlV2lkdGhcbiAqIEBwYXJhbSBzaGFwZUhlaWdodFxuICogQHBhcmFtIHRcbiAqL1xuZnVuY3Rpb24gZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zKHNoYXBlV2lkdGgsIHNoYXBlSGVpZ2h0LCB0KSB7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IHQubGVuZ3RoID09PSAyID8gWy4uLnQsIFswLCAwLCAxXV0gOiBbLi4udF07XG4gIGNvbnN0IG14SW52ID0gKDAsIF9tYXRyaXhJbnZlcnNlLmRlZmF1bHQpKHRyYW5zZm9ybSk7XG4gIGNvbnN0IGNlbnRlclBvaW50ID0gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShteEludiwgWzAuNSwgMC41XSk7XG4gIGNvbnN0IHJ4UG9pbnQgPSAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG14SW52LCBbMSwgMC41XSk7XG4gIGNvbnN0IHJ5UG9pbnQgPSAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG14SW52LCBbMC41LCAxXSk7XG4gIGNvbnN0IHJ4ID0gTWF0aC5zcXJ0KE1hdGgucG93KHJ4UG9pbnRbMF0gLSBjZW50ZXJQb2ludFswXSwgMikgKyBNYXRoLnBvdyhyeFBvaW50WzFdIC0gY2VudGVyUG9pbnRbMV0sIDIpKTtcbiAgY29uc3QgcnkgPSBNYXRoLnNxcnQoTWF0aC5wb3cocnlQb2ludFswXSAtIGNlbnRlclBvaW50WzBdLCAyKSArIE1hdGgucG93KHJ5UG9pbnRbMV0gLSBjZW50ZXJQb2ludFsxXSwgMikpO1xuICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbigocnhQb2ludFsxXSAtIGNlbnRlclBvaW50WzFdKSAvIChyeFBvaW50WzBdIC0gY2VudGVyUG9pbnRbMF0pKSAqICgxODAgLyBNYXRoLlBJKTtcbiAgcmV0dXJuIHtcbiAgICByb3RhdGlvbjogYW5nbGUsXG4gICAgY2VudGVyOiBbY2VudGVyUG9pbnRbMF0gKiBzaGFwZVdpZHRoLCBjZW50ZXJQb2ludFsxXSAqIHNoYXBlSGVpZ2h0XSxcbiAgICByYWRpdXM6IFtyeCAqIHNoYXBlV2lkdGgsIHJ5ICogc2hhcGVIZWlnaHRdXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZpbmRBbGwgPSB2b2lkIDA7XG5cbnZhciBfID0gcmVxdWlyZShcIi4uXCIpO1xuXG4vKipcbiAqIEN1c3RvbSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgZmlnbWEuZmluZEFsbCBtZXRob2QsIHdoaWNoIHJ1bnMgeDEwMDAgdGltZXMgZmFzdGVyLlxuICpcbiAqICMjIyBVc2FnZSBleGFtcGxlXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZmluZEFsbCwgaXNUZXh0Tm9kZSB9IGZyb20gXCJAZmlnbWEtcGx1Z2luL2hlbHBlcnNcIlxuICpcbiAqIGNvbnN0IHRleHROb2RlcyA9IGZpbmRBbGwoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4sIGlzVGV4dE5vZGUpXG4gKiBgYGBcbiAqXG4gKiAjIyMgSG93IHRvIHJlcGxhY2UgbmF0aXZlIGBmaWdtYS5maW5kQWxsYFxuICogYGBgZGlmZlxuICogKyBpbXBvcnQgeyBmaW5kQWxsIH0gZnJvbSBcIkBmaWdtYS1wbHVnaW4vaGVscGVyc1wiXG4gKlxuICogLSBjb25zdCB0ZXh0Tm9kZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiKTtcbiAqICsgY29uc3QgdGV4dE5vZGVzID0gZmluZEFsbChmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbiwgKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIpXG4gKiBgYGBcbiAqL1xuY29uc3QgZmluZEFsbCA9IChub2RlcywgaXRlcmF0ZWUpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpdGVyYXRlZShub2Rlc1tpXSwgaSwgbm9kZXMpKSB7XG4gICAgICByZXN1bHQucHVzaChub2Rlc1tpXSk7XG4gICAgfSBlbHNlIGlmICgoMCwgXy5oYXNDaGlsZHJlbikobm9kZXNbaV0pKSB7XG4gICAgICByZXN1bHQucHVzaCguLi5maW5kQWxsKG5vZGVzW2ldWydjaGlsZHJlbiddLCBpdGVyYXRlZSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnRzLmZpbmRBbGwgPSBmaW5kQWxsOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0QWxsRm9udHM7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiByZXR1cm5zIGFsbCB1c2VkIGZvbnRzIHRvIHRleHROb2Rlc1xuICovXG5mdW5jdGlvbiBnZXRBbGxGb250cyh0ZXh0Tm9kZXMpIHtcbiAgY29uc3QgZm9udHMgPSBbXTtcblxuICBjb25zdCBwdXNoVW5pcXVlID0gZm9udCA9PiB7XG4gICAgaWYgKCFmb250cy5zb21lKGl0ZW0gPT4gaXRlbS5mYW1pbHkgPT09IGZvbnQuZmFtaWx5ICYmIGl0ZW0uc3R5bGUgPT09IGZvbnQuc3R5bGUpKSB7XG4gICAgICBmb250cy5wdXNoKGZvbnQpO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKGNvbnN0IG5vZGUgb2YgdGV4dE5vZGVzKSB7XG4gICAgaWYgKG5vZGUuZm9udE5hbWUgPT09IGZpZ21hLm1peGVkKSB7XG4gICAgICBjb25zdCBsZW4gPSBub2RlLmNoYXJhY3RlcnMubGVuZ3RoO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoaSwgaSArIDEpO1xuICAgICAgICBwdXNoVW5pcXVlKGZvbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwdXNoVW5pcXVlKG5vZGUuZm9udE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb250cztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldEJvdW5kaW5nUmVjdDtcblxudmFyIF9pc1VuZGVmaW5lZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvaXNVbmRlZmluZWRcIikpO1xuXG52YXIgX2FwcGx5TWF0cml4VG9Qb2ludCA9IHJlcXVpcmUoXCIuL2FwcGx5TWF0cml4VG9Qb2ludFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiAgdGhpcyBmdW5jdGlvbiByZXR1cm4gYSBib3VuZGluZyByZWN0IGZvciBhbiBub2Rlc1xuICovXG4vLyB4L3kgYWJzb2x1dGUgY29vcmRpbmF0ZXNcbi8vIGhlaWdodC93aWR0aFxuLy8geDIveTIgYm90dG9tIHJpZ2h0IGNvb3JkaW5hdGVzXG5mdW5jdGlvbiBnZXRCb3VuZGluZ1JlY3Qobm9kZXMpIHtcbiAgY29uc3QgYm91bmRpbmdSZWN0ID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB4MjogMCxcbiAgICB5MjogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDBcbiAgfTtcblxuICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgeHkgPSBub2Rlcy5yZWR1Y2UoKHJleiwgbm9kZSkgPT4ge1xuICAgICAgaWYgKCFub2RlLmFic29sdXRlVHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignUHJvdmlkZWQgbm9kZSBoYXZlblxcJ3QgXCJhYnNvbHV0ZVRyYW5zZm9ybVwiIHByb3BlcnR5LCBidXQgaXRcXCdzIHJlcXVpcmVkIGZvciBjYWxjdWxhdGlvbnMuJyk7XG4gICAgICAgIHJldHVybiByZXo7XG4gICAgICB9XG5cbiAgICAgIGlmICgoMCwgX2lzVW5kZWZpbmVkMi5kZWZhdWx0KShub2RlLmhlaWdodCkgfHwgKDAsIF9pc1VuZGVmaW5lZDIuZGVmYXVsdCkobm9kZS53aWR0aCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdQcm92aWRlZCBub2RlIGhhdmVuXFwndCBcIndpZHRoL2hlaWdodFwiIHByb3BlcnR5LCBidXQgaXRcXCdzIHJlcXVpcmVkIGZvciBjYWxjdWxhdGlvbnMuJyk7XG4gICAgICAgIHJldHVybiByZXo7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBub2RlLmhlaWdodCAvIDI7XG4gICAgICBjb25zdCBoYWxmV2lkdGggPSBub2RlLndpZHRoIC8gMjtcbiAgICAgIGNvbnN0IFtbYzAsIHMwLCB4XSwgW3MxLCBjMSwgeV1dID0gbm9kZS5hYnNvbHV0ZVRyYW5zZm9ybTtcbiAgICAgIGNvbnN0IG1hdHJpeCA9IFtbYzAsIHMwLCB4ICsgaGFsZldpZHRoICogYzAgKyBoYWxmSGVpZ2h0ICogczBdLCBbczEsIGMxLCB5ICsgaGFsZldpZHRoICogczEgKyBoYWxmSGVpZ2h0ICogYzFdXTsgLy8gdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBjb3JuZXJzIG9mIHRoZSByZWN0YW5nbGVcblxuICAgICAgY29uc3QgWFkgPSB7XG4gICAgICAgIHg6IFsxLCAtMSwgMSwgLTFdLFxuICAgICAgICB5OiBbMSwgLTEsIC0xLCAxXVxuICAgICAgfTsgLy8gZmlsbCBpblxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobWF0cml4LCBbWFkueFtpXSAqIGhhbGZXaWR0aCwgWFkueVtpXSAqIGhhbGZIZWlnaHRdKTtcbiAgICAgICAgWFkueFtpXSA9IGFbMF07XG4gICAgICAgIFhZLnlbaV0gPSBhWzFdO1xuICAgICAgfVxuXG4gICAgICBYWS54LnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgIFhZLnkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgcmV6LngucHVzaChYWS54WzBdKTtcbiAgICAgIHJlei55LnB1c2goWFkueVswXSk7XG4gICAgICByZXoueDIucHVzaChYWS54WzNdKTtcbiAgICAgIHJlei55Mi5wdXNoKFhZLnlbM10pO1xuICAgICAgcmV0dXJuIHJlejtcbiAgICB9LCB7XG4gICAgICB4OiBbXSxcbiAgICAgIHk6IFtdLFxuICAgICAgeDI6IFtdLFxuICAgICAgeTI6IFtdXG4gICAgfSk7XG4gICAgY29uc3QgcmVjdCA9IHtcbiAgICAgIHg6IE1hdGgubWluKC4uLnh5LngpLFxuICAgICAgeTogTWF0aC5taW4oLi4ueHkueSksXG4gICAgICB4MjogTWF0aC5tYXgoLi4ueHkueDIpLFxuICAgICAgeTI6IE1hdGgubWF4KC4uLnh5LnkyKVxuICAgIH07XG4gICAgYm91bmRpbmdSZWN0LnggPSByZWN0Lng7XG4gICAgYm91bmRpbmdSZWN0LnkgPSByZWN0Lnk7XG4gICAgYm91bmRpbmdSZWN0LngyID0gcmVjdC54MjtcbiAgICBib3VuZGluZ1JlY3QueTIgPSByZWN0LnkyO1xuICAgIGJvdW5kaW5nUmVjdC53aWR0aCA9IHJlY3QueDIgLSByZWN0Lng7XG4gICAgYm91bmRpbmdSZWN0LmhlaWdodCA9IHJlY3QueTIgLSByZWN0Lnk7XG4gIH1cblxuICByZXR1cm4gYm91bmRpbmdSZWN0O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRUZXh0Tm9kZUNTUyA9IHZvaWQgMDtcblxudmFyIF9nZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2dldFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHN0cmluZ1ZhbHVlVG9Dc3MgPSB2YWx1ZSA9PiB7XG4gIGlmICgvcmlnaHR8Ym90dG9tL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2ZsZXgtZW5kJztcbiAgfSBlbHNlIGlmICgvbGVmdHx0b3AvaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnZmxleC1zdGFydCc7XG4gIH0gZWxzZSBpZiAoL2NlbnRlci9pLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdjZW50ZXInO1xuICB9IGVsc2UgaWYgKC9sb3dlci9pLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdsb3dlcmNhc2UnO1xuICB9IGVsc2UgaWYgKC91cHBlci9pLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICd1cHBlcmNhc2UnO1xuICB9IGVsc2UgaWYgKC90aXRsZS9pLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdjYXBpdGFsaXplJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ25vbmUnO1xuICB9XG59O1xuXG5jb25zdCB1bml0VmFsdWVUb0NzcyA9ICh7XG4gIHVuaXQsXG4gIHZhbHVlXG59KSA9PiB7XG4gIGlmICh1bml0ID09PSAnUEVSQ0VOVCcpIHtcbiAgICByZXR1cm4gYCR7dmFsdWV9JWA7XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ1BJWEVMUycpIHtcbiAgICByZXR1cm4gYCR7dmFsdWV9cHhgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnYXV0byc7XG4gIH1cbn07XG5cbmNvbnN0IGlzVW5pdFZhbHVlID0gb2JqID0+IHtcbiAgcmV0dXJuIG9iai5oYXNPd25Qcm9wZXJ0eSgndW5pdCcpO1xufTtcblxuY29uc3QgZ2V0U3R5bGVWYWx1ZSA9IChub2RlLCBrZXksIGV4YWN0U3RyaW5nKSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gKDAsIF9nZXQyLmRlZmF1bHQpKG5vZGUsIGtleSk7XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGV4YWN0U3RyaW5nID8gdmFsdWUudG9Mb3dlckNhc2UoKS50cmltKCkgOiBzdHJpbmdWYWx1ZVRvQ3NzKHZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcbiAgfSBlbHNlIGlmIChpc1VuaXRWYWx1ZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdW5pdFZhbHVlVG9Dc3ModmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUud2FybignVW5leHBlY3RlZCB2YWx1ZTogJywgdmFsdWUpO1xuICB9XG59O1xuLyoqXG4gKiAgZ2V0IENTUyBzdHlsZXMgb2YgVGV4dE5vZGVcbiAqL1xuXG5cbmNvbnN0IGdldFRleHROb2RlQ1NTID0gbm9kZSA9PiB7XG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiBnZXRTdHlsZVZhbHVlKG5vZGUsICd5JyksXG4gICAgbGVmdDogZ2V0U3R5bGVWYWx1ZShub2RlLCAneCcpLFxuICAgIHdpZHRoOiBnZXRTdHlsZVZhbHVlKG5vZGUsICd3aWR0aCcpLFxuICAgIGhlaWdodDogZ2V0U3R5bGVWYWx1ZShub2RlLCAnaGVpZ2h0JyksXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICdqdXN0aWZ5LWNvbnRlbnQnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICd0ZXh0QWxpZ25Ib3Jpem9udGFsJyksXG4gICAgJ2FsaWduLWl0ZW1zJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAndGV4dEFsaWduVmVydGljYWwnKSxcbiAgICAndGV4dC1pbmRlbnQnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICdwYXJhZ3JhcGhJbmRlbnQnKSxcbiAgICAnbGV0dGVyLXNwYWNpbmcnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICdsZXR0ZXJTcGFjaW5nJyksXG4gICAgJ2xpbmUtaGVpZ2h0JzogZ2V0U3R5bGVWYWx1ZShub2RlLCAnbGluZUhlaWdodCcpLFxuICAgICdmb250LXNpemUnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICdmb250U2l6ZScpLFxuICAgICdmb250LXN0eWxlJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAnZm9udE5hbWUuc3R5bGUnLCB0cnVlKSxcbiAgICAnZm9udC13ZWlnaHQnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICdmb250TmFtZS5zdHlsZScsIHRydWUpLFxuICAgICd0ZXh0LWRlY29yYXRpb24nOiBnZXRTdHlsZVZhbHVlKG5vZGUsICd0ZXh0RGVjb3JhdGlvbicsIHRydWUpLFxuICAgICd0ZXh0LXRyYW5zZm9ybSc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3RleHRDYXNlJyksXG4gICAgJ2ZvbnQtZmFtaWx5JzogYCR7Z2V0U3R5bGVWYWx1ZShub2RlLCAnZm9udE5hbWUuZmFtaWx5JywgdHJ1ZSl9ICR7Z2V0U3R5bGVWYWx1ZShub2RlLCAnZm9udE5hbWUuc3R5bGUnLCB0cnVlKX1gXG4gIH07XG59OyAvLyB0aGlzIGZpbGUgY2FuIGJlIGV4dGVuZGVkIHRvIHN1cHBvcnQgYWxsIG5vZGUgdHlwZXNcblxuXG5leHBvcnRzLmdldFRleHROb2RlQ1NTID0gZ2V0VGV4dE5vZGVDU1M7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXROb2RlSW5kZXg7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIGdldCB0aGUgcmV0dXJuIHRoZSBpbmRleCBvZiBub2RlIGluIGl0cyBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0Tm9kZUluZGV4KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUucGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRQYWdlO1xuXG52YXIgX2lzVHlwZU5vZGUgPSByZXF1aXJlKFwiLi9pc1R5cGVOb2RlXCIpO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBwYXNzIGluIGEgbm9kZSBhbmQgcmV0dXJuIGl0cyBwYWdlTm9kZVxuICovXG5mdW5jdGlvbiBnZXRQYWdlKG5vZGUpIHtcbiAgaWYgKCEoMCwgX2lzVHlwZU5vZGUuaXNQYWdlTm9kZSkobm9kZSkpIHtcbiAgICByZXR1cm4gZ2V0UGFnZShub2RlLnBhcmVudCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0UmVsYXRpdmVQb3NpdGlvbiA9IGV4cG9ydHMuZ2V0VG9wTGV2ZWxQYXJlbnQgPSB2b2lkIDA7XG5cbnZhciBfID0gcmVxdWlyZShcIi4uL1wiKTtcblxuLyoqXG4gKiBSZXR1cm4gdG9wIGxldmVsIHBhcmVudCBmb3Igbm9kZSBiZWZvcmUgUGFnZU5vZGUuXG4gKiBGb3IgZXhhbXBsZTpcbiAqIGBgYGpzXG4gKiAvLyBmb3Igc3RydWN0dXJlIGJlbG93XG4gKiAvLyBQYWdlIC8gRnJhbWUgLyBHcm91cDEgLyBHcm91cDIgLyBUZXh0XG4gKlxuICogZ2V0VG9wTGV2ZWxQYXJlbnQoVGV4dCkgLy8gRnJhbWVcbiAqIGBgYFxuICovXG5jb25zdCBnZXRUb3BMZXZlbFBhcmVudCA9IG5vZGUgPT4ge1xuICBpZiAobm9kZSAmJiBub2RlLnBhcmVudCAmJiAhKDAsIF8uaXNQYWdlTm9kZSkobm9kZS5wYXJlbnQpKSB7XG4gICAgcmV0dXJuIGdldFRvcExldmVsUGFyZW50KG5vZGUucGFyZW50KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufTtcbi8qKlxuICogQ2FsY3VsYXRlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIG5vZGUgYmFzZWQgb24gcHJvdmlkZWQgcGFyZW50IG9yIHRvcCBsZXZlbCBwYXJlbnQuXG4gKiBGb3IgZXhhbXBsZTpcbiAqIGBgYGpzXG4gKiAvLyBmb3Igc3RydWN0dXJlIGJlbG93XG4gKiAvLyBQYWdlIC8gRnJhbWUgLyBHcm91cDEgLyBHcm91cDIgLyBUZXh0XG4gKlxuICogZ2V0UmVsYXRpdmVQb3NpdGlvbihUZXh0LCBHcm91cDEpIC8vIHdpbGwgY2FsY3VsYXRlIHsgeCwgeSB9IGJhc2VkIG9uIEdyb3VwMVxuICpcbiAqIGdldFJlbGF0aXZlUG9zaXRpb24oVGV4dCkgLy8gd2lsbCBjYWxjdWxhdGUgeyB4LCB5IH0gYmFzZWQgb24gRnJhbWVcbiAqIGBgYFxuICoqL1xuXG5cbmV4cG9ydHMuZ2V0VG9wTGV2ZWxQYXJlbnQgPSBnZXRUb3BMZXZlbFBhcmVudDtcblxuY29uc3QgZ2V0UmVsYXRpdmVQb3NpdGlvbiA9IChub2RlLCByZWxhdGl2ZU5vZGUpID0+IHtcbiAgcmVsYXRpdmVOb2RlID0gcmVsYXRpdmVOb2RlIHx8IGdldFRvcExldmVsUGFyZW50KG5vZGUpO1xuICByZXR1cm4ge1xuICAgIHg6IE1hdGguYWJzKE1hdGgucm91bmQocmVsYXRpdmVOb2RlLmFic29sdXRlVHJhbnNmb3JtWzBdWzJdIC0gbm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXSkpLFxuICAgIHk6IE1hdGguYWJzKE1hdGgucm91bmQocmVsYXRpdmVOb2RlLmFic29sdXRlVHJhbnNmb3JtWzFdWzJdIC0gbm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVsxXVsyXSkpXG4gIH07XG59O1xuXG5leHBvcnRzLmdldFJlbGF0aXZlUG9zaXRpb24gPSBnZXRSZWxhdGl2ZVBvc2l0aW9uOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5oYXNDaGlsZHJlbiA9IHZvaWQgMDtcblxuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBoYXZlIGNoaWxkcmVuIG5vZGVzXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0c1xuICogLy8gQkVGT1JFXG4gKiBjb25zb2xlLmxvZyhub2RlLmNoaWxkcmVuKSAvLyB0aHJvdyBUUyBlcnJvciBcIlByb3BlcnR5ICdjaGlsZHJlbicgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAuLi5cIlxuICpcbiAqIC8vIEFGVEVSXG4gKiBpZiAoaGFzQ2hpbGRyZW4obm9kZSkpIHtcbiAqICBjb25zb2xlLmxvZyhub2RlLmNoaWxkcmVuKSAvLyB2YWxpZCBjb2RlXG4gKiB9XG4gKiBgYGBcbiAqXG4gKi9cbmNvbnN0IGhhc0NoaWxkcmVuID0gbm9kZSA9PiBCb29sZWFuKG5vZGVbJ2NoaWxkcmVuJ10pO1xuXG5leHBvcnRzLmhhc0NoaWxkcmVuID0gaGFzQ2hpbGRyZW47IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1BhcnRPZkluc3RhbmNlO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBjaGVjayB3aGV0aGVyIGEgbm9kZSBpcyBwYXJ0IG9mIGFuIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIGlzUGFydE9mSW5zdGFuY2Uobm9kZSkge1xuICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudDtcblxuICBpZiAocGFyZW50LnR5cGUgPT09ICdJTlNUQU5DRScpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gJ1BBR0UnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpc1BhcnRPZkluc3RhbmNlKHBhcmVudCk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzUGFydE9mTm9kZTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gY2hlY2sgd2hldGhlciBhIG5vZGUgaXMgcGFydCBvZiBhbiByb290Tm9kZVxuICovXG5mdW5jdGlvbiBpc1BhcnRPZk5vZGUocGFydCwgcm9vdE5vZGUpIHtcbiAgY29uc3QgcGFyZW50ID0gcGFydC5wYXJlbnQ7XG5cbiAgaWYgKHBhcmVudCA9PT0gcm9vdE5vZGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gJ1BBR0UnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpc1BhcnRPZk5vZGUocGFyZW50LCByb290Tm9kZSk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNPbmVPZk5vZGVUeXBlID0gZXhwb3J0cy5pc0NvbXBvbmVudE5vZGUgPSBleHBvcnRzLmlzSW5zdGFuY2VOb2RlID0gZXhwb3J0cy5pc1RleHROb2RlID0gZXhwb3J0cy5pc0ZyYW1lTm9kZSA9IGV4cG9ydHMuaXNHcm91cE5vZGUgPSBleHBvcnRzLmlzUGFnZU5vZGUgPSB2b2lkIDA7XG5cbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgUGFnZU5vZGVcbiAqL1xuY29uc3QgaXNQYWdlTm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnUEFHRSc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBHcm91cE5vZGVcbiAqL1xuXG5cbmV4cG9ydHMuaXNQYWdlTm9kZSA9IGlzUGFnZU5vZGU7XG5cbmNvbnN0IGlzR3JvdXBOb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdHUk9VUCc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBGcmFtZU5vZGVcbiAqL1xuXG5cbmV4cG9ydHMuaXNHcm91cE5vZGUgPSBpc0dyb3VwTm9kZTtcblxuY29uc3QgaXNGcmFtZU5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0ZSQU1FJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIFRleHROb2RlXG4gKi9cblxuXG5leHBvcnRzLmlzRnJhbWVOb2RlID0gaXNGcmFtZU5vZGU7XG5cbmNvbnN0IGlzVGV4dE5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ1RFWFQnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgSW5zdGFuY2VOb2RlXG4gKi9cblxuXG5leHBvcnRzLmlzVGV4dE5vZGUgPSBpc1RleHROb2RlO1xuXG5jb25zdCBpc0luc3RhbmNlTm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnSU5TVEFOQ0UnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgQ29tcG9uZW50Tm9kZVxuICovXG5cblxuZXhwb3J0cy5pc0luc3RhbmNlTm9kZSA9IGlzSW5zdGFuY2VOb2RlO1xuXG5jb25zdCBpc0NvbXBvbmVudE5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0NPTVBPTkVOVCc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBvbmUgb2YgcHJvdmlkZWQgdHlwZXNcbiAqL1xuXG5cbmV4cG9ydHMuaXNDb21wb25lbnROb2RlID0gaXNDb21wb25lbnROb2RlO1xuXG5jb25zdCBpc09uZU9mTm9kZVR5cGUgPSAobm9kZSwgdHlwZUxpc3QpID0+IHtcbiAgcmV0dXJuIHR5cGVMaXN0LmluY2x1ZGVzKG5vZGUudHlwZSk7XG59O1xuXG5leHBvcnRzLmlzT25lT2ZOb2RlVHlwZSA9IGlzT25lT2ZOb2RlVHlwZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzVmlzaWJsZU5vZGU7XG5cbi8qKlxuICogVGhpcyBoZWxwZXIgcmVjdXJzaXZlbHkgY2hlY2tzIGFsbCBwYXJlbnRzIGZvciB2aXNpYmlsaXR5LCB0byBndWFyYW50ZWUgdGhhdCdzIG5vZGUgaXMgdmlzaWJsZVxuICovXG5mdW5jdGlvbiBpc1Zpc2libGVOb2RlKG5vZGUpIHtcbiAgaWYgKG5vZGUgJiYgbm9kZS5wYXJlbnQpIHtcbiAgICBpZiAobm9kZS52aXNpYmxlICYmIG5vZGUucGFyZW50LnR5cGUgIT09ICdQQUdFJykge1xuICAgICAgcmV0dXJuIGlzVmlzaWJsZU5vZGUobm9kZS5wYXJlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbm9kZS52aXNpYmxlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvYWRGb250cztcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFzeW5jaHJvbm91c2x5IGxvYWRzIHRoZSBwYXNzZWQgZm9udHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZEZvbnRzKGZvbnRzKSB7XG4gIGNvbnN0IHByb21pc2VzID0gZm9udHMubWFwKGZvbnQgPT4gZmlnbWEubG9hZEZvbnRBc3luYyhmb250KSk7XG4gIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgcmV0dXJuIGZvbnRzO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbG9hZFVuaXF1ZUZvbnRzO1xuXG52YXIgX2dldEFsbEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9nZXRBbGxGb250c1wiKSk7XG5cbnZhciBfbG9hZEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkRm9udHNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBsb2FkIG9ubHkgdW5pcXVlIGZvbnRzIGFzeW5jaHJvbm91c2x5XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRVbmlxdWVGb250cyh0ZXh0Tm9kZXMpIHtcbiAgY29uc3QgZm9udHMgPSAoMCwgX2dldEFsbEZvbnRzLmRlZmF1bHQpKHRleHROb2Rlcyk7XG4gIHJldHVybiAoMCwgX2xvYWRGb250cy5kZWZhdWx0KShmb250cyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm5vZGVUb09iamVjdCA9IHZvaWQgMDtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gbm9kZSB0byBvYmplY3Qgd2l0aCBrZXlzLCB0aGF0IGFyZSBoaWRkZW4gYnkgZGVmYXVsdC5cbiAqIEZvciBleGFtcGxlOlxuICogYGBgdHNcbiAqIGNvbnN0IG5vZGUgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kT25lKChlbCkgPT4gZWwudHlwZSA9PT0gXCJURVhUXCIpO1xuICogY29uc29sZS5sb2coT2JqZWN0LmtleXMobm9kZSkubGVuZ3RoKSAvLyAxXG4gKiBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhub2RlVG9PYmplY3Qobm9kZSkpLmxlbmd0aCkgLy8gNDJcbiAqIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKG5vZGVUb09iamVjdChub2RlLCB0cnVlKSkubGVuZ3RoKSAvLyAzOVxuICogYGBgXG4gKlxuICogQHBhcmFtIG5vZGVcbiAqIEBwYXJhbSB3aXRob3V0UmVsYXRpb25zXG4gKi9cbmNvbnN0IG5vZGVUb09iamVjdCA9IChub2RlLCB3aXRob3V0UmVsYXRpb25zKSA9PiB7XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmVudHJpZXMoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobm9kZS5fX3Byb3RvX18pKTtcbiAgY29uc3QgYmxhY2tsaXN0ID0gWydwYXJlbnQnLCAnY2hpbGRyZW4nLCAncmVtb3ZlZCcsICdtYXN0ZXJDb21wb25lbnQnXTtcbiAgY29uc3Qgb2JqID0ge1xuICAgIGlkOiBub2RlLmlkLFxuICAgIHR5cGU6IG5vZGUudHlwZVxuICB9O1xuXG4gIGZvciAoY29uc3QgW25hbWUsIHByb3BdIG9mIHByb3BzKSB7XG4gICAgaWYgKHByb3AuZ2V0ICYmICFibGFja2xpc3QuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW25hbWVdID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIG9ialtuYW1lXSA9ICdNaXhlZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqW25hbWVdID0gcHJvcC5nZXQuY2FsbChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIG9ialtuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobm9kZS5wYXJlbnQgJiYgIXdpdGhvdXRSZWxhdGlvbnMpIHtcbiAgICBvYmoucGFyZW50ID0ge1xuICAgICAgaWQ6IG5vZGUucGFyZW50LmlkLFxuICAgICAgdHlwZTogbm9kZS5wYXJlbnQudHlwZVxuICAgIH07XG4gIH1cblxuICBpZiAobm9kZS5jaGlsZHJlbiAmJiAhd2l0aG91dFJlbGF0aW9ucykge1xuICAgIG9iai5jaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4ubWFwKGNoaWxkID0+IG5vZGVUb09iamVjdChjaGlsZCwgd2l0aG91dFJlbGF0aW9ucykpO1xuICB9XG5cbiAgaWYgKG5vZGUubWFzdGVyQ29tcG9uZW50ICYmICF3aXRob3V0UmVsYXRpb25zKSB7XG4gICAgb2JqLm1hc3RlckNvbXBvbmVudCA9IG5vZGVUb09iamVjdChub2RlLm1hc3RlckNvbXBvbmVudCwgd2l0aG91dFJlbGF0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuZXhwb3J0cy5ub2RlVG9PYmplY3QgPSBub2RlVG9PYmplY3Q7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlVGV4dFN0eWxlID0gcGFyc2VUZXh0U3R5bGU7XG5leHBvcnRzLnNwbGl0VGV4dFN0eWxlSW50b0xpbmVzID0gc3BsaXRUZXh0U3R5bGVJbnRvTGluZXM7XG5leHBvcnRzLmpvaW5UZXh0TGluZXNTdHlsZXMgPSBqb2luVGV4dExpbmVzU3R5bGVzO1xuZXhwb3J0cy5hcHBseVRleHRTdHlsZVRvVGV4dE5vZGUgPSBhcHBseVRleHRTdHlsZVRvVGV4dE5vZGU7XG5leHBvcnRzLmNoYW5nZUNoYXJhY3RlcnNUZXh0U3R5bGUgPSBjaGFuZ2VDaGFyYWN0ZXJzVGV4dFN0eWxlO1xuZXhwb3J0cy5jaGFuZ2VUZXh0U3R5bGUgPSBjaGFuZ2VUZXh0U3R5bGU7XG5cbnZhciBfdW5pcVdpdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL3VuaXFXaXRoXCIpKTtcblxudmFyIF9jbG9uZURlZXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKSk7XG5cbnZhciBfaXNFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvaXNFcXVhbFwiKSk7XG5cbnZhciBfZ2V0QWxsRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2dldEFsbEZvbnRzXCIpKTtcblxudmFyIF9sb2FkRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRGb250c1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHN0eWxlRm9udHMgPSBbJ2ZvbnRTaXplJywgJ2ZvbnROYW1lJywgJ3RleHRDYXNlJywgJ3RleHREZWNvcmF0aW9uJywgJ2xldHRlclNwYWNpbmcnLCAnbGluZUhlaWdodCcsICdmaWxscycsICd0ZXh0U3R5bGVJZCcsICdmaWxsU3R5bGVJZCddO1xuLypcblx0VGhlIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRleHQgbm9kZSBzdHlsZXMsIHNwbGl0dGluZyB0aGVtIGludG8gZGlmZmVyZW50IGFycmF5cywgc3VjaCBhczpcblx0W3tcblx0XHRjaGFyYWN0ZXJzOiBcIi4uLlwiLFxuXHRcdC4uLiAoc3R5bGVzKVxuXHR9LCAuLi5dXG5cblx0LS0tXG5cblx0UmV0dXJucyBzdHlsZXMgZm9yIHRoZSBlbnRpcmUgdGV4dDpcblx0cGFyc2VUZXh0U3R5bGUodGV4dE5vZGUpXG5cdFxuXHRSZXR1cm5zIHRleHQgc3R5bGVzIGZyb20gdGhlIDEwMHRoIHRvIHRoZSBsYXN0IGNoYXJhY3Rlcjpcblx0cGFyc2VUZXh0U3R5bGUodGV4dE5vZGUsIDEwMClcblxuXHRSZXR1cm5zIHN0eWxlcyBmb3IgdGhlIGVudGlyZSB0ZXh0LCBidXQgb25seSB3aXRoIGZvbnROYW1lIGFuZCB0ZXh0RGVjb3JhdGlvbjpcblx0cGFyc2VUZXh0U3R5bGUodGV4dE5vZGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBbXCJmb250TmFtZVwiLCBcInRleHREZWNvcmF0aW9uXCJdKVxuKi9cblxuZnVuY3Rpb24gcGFyc2VUZXh0U3R5bGUobm9kZSwgc3RhcnQgPSAwLCBlbmQsIHN0eWxlTmFtZSkge1xuICBpZiAoIWVuZCkgZW5kID0gbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aDtcbiAgaWYgKCFzdHlsZU5hbWUpIHN0eWxlTmFtZSA9IHN0eWxlRm9udHM7XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1N0YXJ0IG11c3QgYmUgZ3JlYXRlciB0aGFuIGVuZCcpO1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyBzdHJpbmcgc3Vic3RyaW5nLCBkZWZpbmVkIHN0eWxlc1xuXG5cbiAgY29uc3Qgc3R5bGVNYXAgPSBbXTsgLy8gYSBjb21wb3Npbmcgc3RyaW5nIG9mIGEgc3BlY2lmaWMgc3R5bGVcblxuICBsZXQgdGV4dFN0eWxlO1xuICBjb25zdCBuYW1lcyA9IHN0eWxlTmFtZS5tYXAobmFtZSA9PiB7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvXiguKS9nLCAkMSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcbiAgfSk7IC8vIHNwbGl0dGluZyB0ZXh0IGludG8gc3Vic3RyaW5ncyBieSBzdHlsZVxuXG4gIGZvciAobGV0IHN0YXJ0SW5kZXggPSBzdGFydDsgc3RhcnRJbmRleCA8IGVuZDsgc3RhcnRJbmRleCsrKSB7XG4gICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgMTtcbiAgICBjb25zdCBsZXR0ZXIgPSB7XG4gICAgICBjaGFyYWN0ZXJzOiBub2RlLmNoYXJhY3RlcnNbc3RhcnRJbmRleF1cbiAgICB9OyAvLyBjb2xsZWN0aW9uIG9mIHN0eWxlc1xuXG4gICAgbmFtZXMuZm9yRWFjaCgobiwgaSkgPT4ge1xuICAgICAgbGV0dGVyW3N0eWxlTmFtZVtpXV0gPSBub2RlWydnZXRSYW5nZScgKyBuXShzdGFydEluZGV4LCBlbmRJbmRleCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGV4dFN0eWxlKSB7XG4gICAgICBpZiAoaXNFcXVhbExldHRlclN0eWxlKGxldHRlciwgdGV4dFN0eWxlKSkge1xuICAgICAgICAvLyB0aGUgY2hhcmFjdGVyIGhhcyB0aGUgc2FtZSBwcm9wZXJ0aWVzIGFzIHRoZSBnZW5lcmF0ZWQgc3Vic3RyaW5nXG4gICAgICAgIC8vIGFkZCBpdCB0byBpdFxuICAgICAgICB0ZXh0U3R5bGUuY2hhcmFjdGVycyArPSBsZXR0ZXIuY2hhcmFjdGVycztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHN0eWxlIHByb3BlcnRpZXMgYXJlIGRpZmZlcmVudFxuICAgICAgICBzdHlsZU1hcC5wdXNoKHRleHRTdHlsZSk7IC8vIHdlIHN0YXJ0IHRvIGZvcm0gYSBuZXcgc3Vic3RyaW5nXG5cbiAgICAgICAgdGV4dFN0eWxlID0gbGV0dGVyO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3ZSBzdGFydCBmb3JtaW5nIHRoZSBmaXJzdCBzdWJzdHJpbmdcbiAgICAgIHRleHRTdHlsZSA9IGxldHRlcjtcbiAgICB9XG4gIH1cblxuICBzdHlsZU1hcC5wdXNoKHRleHRTdHlsZSk7XG4gIHJldHVybiBzdHlsZU1hcDtcbn1cbi8qXG5cdEFsbG93cyB0byBzcGxpdCB0aGUgc3R5bGVzIG9idGFpbmVkIHdpdGggcGFyc2VUZXh0U3R5bGUgaW50byBsaW5lcyBiYXNlZCBvbiBuZXdsaW5lcy5cblxuXHRJZiB0aGUgcmVtb3ZlTmV3bGluZUNoYXJhY3RlcnMgcGFyYW1ldGVyID09IHRydWUsIHRoZSBuZXdsaW5lIGNoYXJhY3RlcnMgd2lsbCBiZSByZW1vdmVkLlxuXHRSZW1vdmVFbXB0eWxpbmVzID09IHRydWUgd2lsbCByZW1vdmUgZW1wdHkgbGluZXMuXG4qL1xuXG5cbmZ1bmN0aW9uIHNwbGl0VGV4dFN0eWxlSW50b0xpbmVzKHRleHRTdHlsZSwgcmVtb3ZlTmV3bGluZUNoYXJhY3RlcnMgPSBmYWxzZSwgcmVtb3ZlRW1wdHlsaW5lcyA9IGZhbHNlKSB7XG4gIGxldCBsaW5lID0gW107XG4gIGxldCBsaW5lcyA9IFtdO1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyguK3woPzw9XFxuKSguPykoPz0kKSkoXFxufFxcdTIwMjgpP3woXFxufFxcdTIwMjgpJywgJ2cnKTtcbiAgY29uc3QgcmUyID0gbmV3IFJlZ0V4cCgnXFxufFxcdTIwMjgnKTtcbiAgdGV4dFN0eWxlLmZvckVhY2goKHN0eWxlLCBpbmRleCkgPT4ge1xuICAgIGlmIChyZTIudGVzdChzdHlsZS5jaGFyYWN0ZXJzKSkge1xuICAgICAgY29uc3QgbHMgPSBzdHlsZS5jaGFyYWN0ZXJzLm1hdGNoKHJlKTtcblxuICAgICAgaWYgKGxzID09PSBudWxsKSB7XG4gICAgICAgIC8vIHRleHQgaXMgbWlzc2luZ1xuICAgICAgICBsaW5lLnB1c2goc3R5bGUpO1xuICAgICAgfSBlbHNlIGlmIChscy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gdGhlIHN0eWxlIHRleHQgY29uc2lzdHMgb2YgMSBsaW5lXG4gICAgICAgIGxpbmUucHVzaChzdHlsZSk7XG4gICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIGxpbmUgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG11bHRpcGxlLWxpbmUgdGV4dFxuICAgICAgICBzdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KShzdHlsZSk7XG4gICAgICAgIHN0eWxlLmNoYXJhY3RlcnMgPSBscy5zaGlmdCgpO1xuICAgICAgICBsaW5lLnB1c2goc3R5bGUpO1xuICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICBsaW5lID0gW107XG4gICAgICAgIGNvbnN0IGxhc3QgPSBscy5wb3AoKTsgLy8gZGVhbGluZyB3aXRoIGludGVybmFsIHRleHQgc3RyaW5nc1xuXG4gICAgICAgIGxpbmVzLnB1c2goLi4ubHMubWFwKGUgPT4ge1xuICAgICAgICAgIHN0eWxlID0gKDAsIF9jbG9uZURlZXAyLmRlZmF1bHQpKHN0eWxlKTtcbiAgICAgICAgICBzdHlsZS5jaGFyYWN0ZXJzID0gZTtcbiAgICAgICAgICByZXR1cm4gW3N0eWxlXTtcbiAgICAgICAgfSkpO1xuICAgICAgICBzdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KShzdHlsZSk7XG4gICAgICAgIHN0eWxlLmNoYXJhY3RlcnMgPSBsYXN0O1xuXG4gICAgICAgIGlmIChsYXN0ID09PSAnJykge1xuICAgICAgICAgIGlmICghdGV4dFN0eWxlW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgIC8vIGxhc3QgbGluZSBmaW5hbFxuICAgICAgICAgICAgbGluZXMucHVzaChbc3R5bGVdKTtcbiAgICAgICAgICB9IC8vIGVsc2UgZmFsc2UgZW5kIG9mIHRleHRcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGRvZXMgbm90IGVuZFxuICAgICAgICAgIGxpbmUucHVzaChzdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGluZS5wdXNoKHN0eWxlKTtcbiAgICB9XG4gIH0pO1xuICBpZiAobGluZS5sZW5ndGgpIGxpbmVzLnB1c2gobGluZSk7IC8vIGRlbGV0aW5nIG5ld2xpbmUgY2hhcmFjdGVyc1xuXG4gIGlmIChyZW1vdmVOZXdsaW5lQ2hhcmFjdGVycykge1xuICAgIGxpbmVzLmZvckVhY2gobCA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9IGxbbC5sZW5ndGggLSAxXTtcbiAgICAgIHN0eWxlLmNoYXJhY3RlcnMgPSBzdHlsZS5jaGFyYWN0ZXJzLnJlcGxhY2UocmUyLCAnJyk7XG4gICAgfSk7XG4gIH0gLy8gZGVsZXRpbmcgZW1wdHkgbGluZXNcblxuXG4gIGlmIChyZW1vdmVFbXB0eWxpbmVzKSB7XG4gICAgbGluZXMgPSBsaW5lcy5maWx0ZXIobCA9PiBsLmZpbHRlcihsID0+IGwuY2hhcmFjdGVycy5yZXBsYWNlKHJlMiwgJycpICE9PSAnJykubGVuZ3RoICE9PSAwKTtcbiAgfVxuXG4gIHJldHVybiBsaW5lcztcbn1cbi8qXG5cdEludmVyc2UgZnVuY3Rpb24gb2Ygc3BsaXRUZXh0U3R5bGVJbnRvTGluZXMuXG5cdFRoZSBhZGROZXdsaW5lQ2hhcmFjdGVycyBwYXJhbWV0ZXIgaXMgcmVzcG9uc2libGUgZm9yIHdoZXRoZXIgeW91IG5lZWQgdG8gYWRkIGEgbmV3bGluZSBjaGFyYWN0ZXIgYXQgdGhlIGVuZCBvZiBlYWNoIGxpbmVcbiovXG5cblxuZnVuY3Rpb24gam9pblRleHRMaW5lc1N0eWxlcyh0ZXh0U3R5bGUsIGFkZE5ld2xpbmVDaGFyYWN0ZXJzID0gZmFsc2UpIHtcbiAgY29uc3QgdFN0eWxlID0gKDAsIF9jbG9uZURlZXAyLmRlZmF1bHQpKHRleHRTdHlsZSk7XG4gIGxldCBuZXdsaW5lID0gJyc7XG5cbiAgc3dpdGNoICh0eXBlb2YgYWRkTmV3bGluZUNoYXJhY3RlcnMpIHtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGlmIChhZGROZXdsaW5lQ2hhcmFjdGVycykgbmV3bGluZSA9ICdcXG4nO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgbmV3bGluZSA9IGFkZE5ld2xpbmVDaGFyYWN0ZXJzO1xuICAgICAgYnJlYWs7XG4gIH0gLy8gYWRkaW5nIG5ldyBsaW5lIGNoYXJhY3RlcnNcblxuXG4gIGlmIChhZGROZXdsaW5lQ2hhcmFjdGVycyAmJiBuZXdsaW5lKSB7XG4gICAgdFN0eWxlLmZvckVhY2goKHN0eWxlLCBpKSA9PiB7XG4gICAgICBpZiAoaSAhPT0gdFN0eWxlLmxlbmd0aCAtIDEpIHN0eWxlW3N0eWxlLmxlbmd0aCAtIDFdLmNoYXJhY3RlcnMgKz0gbmV3bGluZTtcbiAgICB9KTtcbiAgfSAvLyBqb2luXG5cblxuICBjb25zdCBsaW5lID0gdFN0eWxlLnNoaWZ0KCk7XG4gIHRTdHlsZS5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICBjb25zdCBmaXRzdCA9IHN0eWxlLnNoaWZ0KCk7XG5cbiAgICBpZiAoaXNFcXVhbExldHRlclN0eWxlKGZpdHN0LCBsaW5lW2xpbmUubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAvLyB0aGUgc3R5bGUgb2YgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGluZSBkaWZmZXJzIGZyb20gdGhlIGVuZCBvZiB0aGUgc3R5bGUgb2YgdGhlIHRleHQgYmVpbmcgY29tcGlsZWRcbiAgICAgIGxpbmVbbGluZS5sZW5ndGggLSAxXS5jaGFyYWN0ZXJzICs9IGZpdHN0LmNoYXJhY3RlcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmUucHVzaChmaXRzdCk7XG4gICAgfVxuXG4gICAgaWYgKHN0eWxlLmxlbmd0aCkgbGluZS5wdXNoKC4uLnN0eWxlKTtcbiAgfSk7XG4gIHJldHVybiBsaW5lO1xufVxuLypcblx0QXBwbHkgdGhlIHRleHQgc3R5bGVzIG9idGFpbmVkIGZyb20gcGFyc2VUZXh0U3R5bGUgdG8gdGhlIHRleHQgbm9kZS5cblx0VGhlIHNlY29uZCBwYXJhbWV0ZXIgY2FuIGJlIHBhc3NlZCBhIHRleHQgbm9kZSwgdGhlIHRleHQgb2Ygd2hpY2ggd2lsbCBiZSBjaGFuZ2VkLlxuKi9cblxuXG5hc3luYyBmdW5jdGlvbiBhcHBseVRleHRTdHlsZVRvVGV4dE5vZGUodGV4dFN0eWxlLCB0ZXh0Tm9kZSwgaXNMb2FkRm9udHMgPSB0cnVlKSB7XG4gIGlmIChpc0xvYWRGb250cykge1xuICAgIGxldCBmb250cyA9IFt7XG4gICAgICBmYW1pbHk6ICdSb2JvdG8nLFxuICAgICAgc3R5bGU6ICdSZWd1bGFyJ1xuICAgIH1dO1xuXG4gICAgaWYgKHRleHRTdHlsZVswXS5mb250TmFtZSkge1xuICAgICAgZm9udHMucHVzaCguLi50ZXh0U3R5bGUubWFwKGUgPT4gZS5mb250TmFtZSkpO1xuICAgIH1cblxuICAgIGlmICh0ZXh0Tm9kZSkge1xuICAgICAgZm9udHMucHVzaCguLi4oMCwgX2dldEFsbEZvbnRzLmRlZmF1bHQpKFt0ZXh0Tm9kZV0pKTtcbiAgICB9XG5cbiAgICBmb250cyA9ICgwLCBfdW5pcVdpdGgyLmRlZmF1bHQpKGZvbnRzLCBfaXNFcXVhbDIuZGVmYXVsdCk7XG4gICAgYXdhaXQgKDAsIF9sb2FkRm9udHMuZGVmYXVsdCkoZm9udHMpO1xuICB9XG5cbiAgaWYgKCF0ZXh0Tm9kZSkgdGV4dE5vZGUgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gIHRleHROb2RlLmNoYXJhY3RlcnMgPSB0ZXh0U3R5bGUucmVkdWNlKChzdHIsIHN0eWxlKSA9PiB7XG4gICAgcmV0dXJuIHN0ciArIHN0eWxlLmNoYXJhY3RlcnM7XG4gIH0sICcnKTtcbiAgbGV0IG4gPSAwO1xuICB0ZXh0U3R5bGUuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgY29uc3QgTCA9IHN0eWxlLmNoYXJhY3RlcnMubGVuZ3RoO1xuXG4gICAgaWYgKEwpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgICAgIGlmIChrZXkgIT09ICdjaGFyYWN0ZXJzJykge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBrZXkucmVwbGFjZSgvXiguKS9nLCAkMSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICB0ZXh0Tm9kZVsnc2V0UmFuZ2UnICsgbmFtZV0obiwgbiArIEwsIHN0eWxlW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG4gKz0gTDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGV4dE5vZGU7XG59XG4vKlxuXHRSZXBsYWNpbmcgdGV4dCBpbiB0ZXh0U3R5bGVcblx0SWYgdGhlIHBhc3NlZCB0ZXh0IGlzIHNob3J0ZXIgdGhhbiBpbiBzdHlsZXMsIHRoZSBleHRyYSBzdHlsZXMgd2lsbCBiZSByZW1vdmVkLlxuXHRJZiB0aGUgcGFzc2VkIHRleHQgaXMgbG9uZ2VyIHRoYW4gdGhlIHN0eWxlcywgdGhlIG92ZXJmbG93IHRleHQgd2lsbCBnZXQgdGhlIHN0eWxlIG9mIHRoZSBsYXN0IGNoYXJhY3Rlci5cbiovXG5cblxuZnVuY3Rpb24gY2hhbmdlQ2hhcmFjdGVyc1RleHRTdHlsZSh0ZXh0U3R5bGUsIGNoYXJhY3RlcnMpIHtcbiAgdGV4dFN0eWxlID0gKDAsIF9jbG9uZURlZXAyLmRlZmF1bHQpKHRleHRTdHlsZSk7XG4gIGxldCBuID0gMDtcbiAgY29uc3QgbGVuZ3RoID0gdGV4dFN0eWxlLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHMgPSB0ZXh0U3R5bGVbaV07XG4gICAgbGV0IGwgPSBzLmNoYXJhY3RlcnMubGVuZ3RoOyAvLyBpZiBwYXNzZWQgdGV4dCBpcyBsb25nZXIgdGhhbiB0ZXh0IGluIHN0eWxlc1xuXG4gICAgaWYgKGkgPT0gbGVuZ3RoKSBsID0gY2hhcmFjdGVyc0xlbmd0aDtcbiAgICBzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzLnNsaWNlKG4sIG4gKyBsKTtcbiAgICBuICs9IGw7XG5cbiAgICBpZiAobiA+IGNoYXJhY3RlcnNMZW5ndGgpIHtcbiAgICAgIC8vIG5ldyB0ZXh0IGlzIHNob3J0ZXIgdGhhbiB0ZXh0IGluIHN0eWxlc1xuICAgICAgdGV4dFN0eWxlID0gdGV4dFN0eWxlLnNwbGljZSgwLCBpICsgMSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGV4dFN0eWxlO1xufVxuLypcblx0RnVuY3Rpb24gZm9yIGNoYW5naW5nIHByb3BlcnRpZXMgb2YgVGV4dFN0eWxlLiBcblx0VGhlIGJlZm9yZVZhbHVlIHBhcmFtZXRlciBhbGxvd3MgeW91IHRvIHNwZWNpZnkgdGhlIHZhbHVlIGluIHdoaWNoIHRoZSBwcm9wZXJ0eSB0byBiZSBjaGFuZ2VkIHNob3VsZCBiZS5cbiovXG5cblxuZnVuY3Rpb24gY2hhbmdlVGV4dFN0eWxlKHRleHRTdHlsZSwgc3R5bGVOYW1lLCBuZXdWYWx1ZSwgYmVmb3JlVmFsdWUpIHtcbiAgdGV4dFN0eWxlID0gKDAsIF9jbG9uZURlZXAyLmRlZmF1bHQpKHRleHRTdHlsZSk7XG4gIHRleHRTdHlsZS5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICBpZiAoYmVmb3JlVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBiZWZvcmVWYWx1ZSAhPT0gdW5kZWZpbmVkICYmICgwLCBfaXNFcXVhbDIuZGVmYXVsdCkoc3R5bGVbc3R5bGVOYW1lXSwgYmVmb3JlVmFsdWUpKSB7XG4gICAgICA7XG4gICAgICBzdHlsZVtzdHlsZU5hbWVdID0gbmV3VmFsdWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRleHRTdHlsZTtcbn1cbi8qY29tcGFyaW5nIGNoYXJhY3RlciBzdHlsZXMgdG8gdGhlIHN0eWxlcyBvZiB0aGUgY29tcG9zaW5nIHN1YnN0cmluZyovXG5cblxuZnVuY3Rpb24gaXNFcXVhbExldHRlclN0eWxlKGxldHRlciwgdGV4dFN0eWxlKSB7XG4gIGxldCBpcyA9IHRydWU7IC8vIGl0ZXJhdGluZyBvdmVyIGZvbnQgcHJvcGVydGllc1xuXG4gIGZvciAoY29uc3Qga2V5IGluIGxldHRlcikge1xuICAgIGlmIChrZXkgIT09ICdjaGFyYWN0ZXJzJykge1xuICAgICAgaWYgKCEoMCwgX2lzRXF1YWwyLmRlZmF1bHQpKGxldHRlcltrZXldLCB0ZXh0U3R5bGVba2V5XSkpIHtcbiAgICAgICAgLy8gcHJvcGVydHkgdmFyaWVzXG4gICAgICAgIC8vIHN0b3Agc2VhcmNoaW5nXG4gICAgICAgIGlzID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpcztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc2V0Q2hhcmFjdGVycyA9IHZvaWQgMDtcblxudmFyIF91bmlxQnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL3VuaXFCeVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHNldENoYXJhY3RlcnMgPSBhc3luYyAobm9kZSwgY2hhcmFjdGVycywgb3B0aW9ucykgPT4ge1xuICBjb25zdCBmYWxsYmFja0ZvbnQgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZhbGxiYWNrRm9udCkgfHwge1xuICAgIGZhbWlseTogJ1JvYm90bycsXG4gICAgc3R5bGU6ICdSZWd1bGFyJ1xuICB9O1xuXG4gIHRyeSB7XG4gICAgaWYgKG5vZGUuZm9udE5hbWUgPT09IGZpZ21hLm1peGVkKSB7XG4gICAgICBpZiAoKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zbWFydFN0cmF0ZWd5KSA9PT0gJ3ByZXZhaWwnKSB7XG4gICAgICAgIGNvbnN0IGZvbnRIYXNoVHJlZSA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY2hhckZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoaSAtIDEsIGkpO1xuICAgICAgICAgIGNvbnN0IGtleSA9IGAke2NoYXJGb250LmZhbWlseX06OiR7Y2hhckZvbnQuc3R5bGV9YDtcbiAgICAgICAgICBmb250SGFzaFRyZWVba2V5XSA9IGZvbnRIYXNoVHJlZVtrZXldID8gZm9udEhhc2hUcmVlW2tleV0gKyAxIDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZhaWxlZFRyZWVJdGVtID0gT2JqZWN0LmVudHJpZXMoZm9udEhhc2hUcmVlKS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSlbMF07XG4gICAgICAgIGNvbnN0IFtmYW1pbHksIHN0eWxlXSA9IHByZXZhaWxlZFRyZWVJdGVtWzBdLnNwbGl0KCc6OicpO1xuICAgICAgICBjb25zdCBwcmV2YWlsZWRGb250ID0ge1xuICAgICAgICAgIGZhbWlseSxcbiAgICAgICAgICBzdHlsZVxuICAgICAgICB9O1xuICAgICAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHByZXZhaWxlZEZvbnQpO1xuICAgICAgICBub2RlLmZvbnROYW1lID0gcHJldmFpbGVkRm9udDtcbiAgICAgIH0gZWxzZSBpZiAoKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zbWFydFN0cmF0ZWd5KSA9PT0gJ3N0cmljdCcpIHtcbiAgICAgICAgcmV0dXJuIHNldENoYXJhY3RlcnNXaXRoU3RyaWN0TWF0Y2hGb250KG5vZGUsIGNoYXJhY3RlcnMsIGZhbGxiYWNrRm9udCk7XG4gICAgICB9IGVsc2UgaWYgKChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc21hcnRTdHJhdGVneSkgPT09ICdleHBlcmltZW50YWwnKSB7XG4gICAgICAgIHJldHVybiBzZXRDaGFyYWN0ZXJzV2l0aFNtYXJ0TWF0Y2hGb250KG5vZGUsIGNoYXJhY3RlcnMsIGZhbGxiYWNrRm9udCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaXJzdENoYXJGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKDAsIDEpO1xuICAgICAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKGZpcnN0Q2hhckZvbnQpO1xuICAgICAgICBub2RlLmZvbnROYW1lID0gZmlyc3RDaGFyRm9udDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7XG4gICAgICAgIGZhbWlseTogbm9kZS5mb250TmFtZS5mYW1pbHksXG4gICAgICAgIHN0eWxlOiBub2RlLmZvbnROYW1lLnN0eWxlXG4gICAgICB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUud2FybihgRmFpbGVkIHRvIGxvYWQgXCIke25vZGUuZm9udE5hbWVbJ2ZhbWlseSddfSAke25vZGUuZm9udE5hbWVbJ3N0eWxlJ119XCIgZm9udCBhbmQgcmVwbGFjZWQgd2l0aCBmYWxsYmFjayBcIiR7ZmFsbGJhY2tGb250LmZhbWlseX0gJHtmYWxsYmFja0ZvbnQuc3R5bGV9XCJgLCBlcnIpO1xuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoZmFsbGJhY2tGb250KTtcbiAgICBub2RlLmZvbnROYW1lID0gZmFsbGJhY2tGb250O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBub2RlLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLndhcm4oYEZhaWxlZCB0byBzZXQgY2hhcmFjdGVycy4gU2tpcHBlZC5gLCBlcnIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0cy5zZXRDaGFyYWN0ZXJzID0gc2V0Q2hhcmFjdGVycztcblxuY29uc3Qgc2V0Q2hhcmFjdGVyc1dpdGhTdHJpY3RNYXRjaEZvbnQgPSBhc3luYyAobm9kZSwgY2hhcmFjdGVycywgZmFsbGJhY2tGb250KSA9PiB7XG4gIGNvbnN0IGZvbnRIYXNoVHJlZSA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3RhcnRJZHggPSBpIC0gMTtcbiAgICBjb25zdCBzdGFydENoYXJGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKHN0YXJ0SWR4LCBpKTtcbiAgICBjb25zdCBzdGFydENoYXJGb250VmFsID0gYCR7c3RhcnRDaGFyRm9udC5mYW1pbHl9Ojoke3N0YXJ0Q2hhckZvbnQuc3R5bGV9YDtcblxuICAgIHdoaWxlIChpIDwgbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aCkge1xuICAgICAgaSsrO1xuICAgICAgY29uc3QgY2hhckZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoaSAtIDEsIGkpO1xuXG4gICAgICBpZiAoc3RhcnRDaGFyRm9udFZhbCAhPT0gYCR7Y2hhckZvbnQuZmFtaWx5fTo6JHtjaGFyRm9udC5zdHlsZX1gKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvbnRIYXNoVHJlZVtgJHtzdGFydElkeH1fJHtpfWBdID0gc3RhcnRDaGFyRm9udFZhbDtcbiAgfVxuXG4gIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoZmFsbGJhY2tGb250KTtcbiAgbm9kZS5mb250TmFtZSA9IGZhbGxiYWNrRm9udDtcbiAgbm9kZS5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcbiAgY29uc29sZS5sb2coZm9udEhhc2hUcmVlKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoZm9udEhhc2hUcmVlKS5tYXAoYXN5bmMgcmFuZ2UgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJhbmdlLCBmb250SGFzaFRyZWVbcmFuZ2VdKTtcbiAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSByYW5nZS5zcGxpdCgnXycpO1xuICAgIGNvbnN0IFtmYW1pbHksIHN0eWxlXSA9IGZvbnRIYXNoVHJlZVtyYW5nZV0uc3BsaXQoJzo6Jyk7XG4gICAgY29uc3QgbWF0Y2hlZEZvbnQgPSB7XG4gICAgICBmYW1pbHksXG4gICAgICBzdHlsZVxuICAgIH07XG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhtYXRjaGVkRm9udCk7XG4gICAgcmV0dXJuIG5vZGUuc2V0UmFuZ2VGb250TmFtZShOdW1iZXIoc3RhcnQpLCBOdW1iZXIoZW5kKSwgbWF0Y2hlZEZvbnQpO1xuICB9KSk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgZ2V0RGVsaW1pdGVyUG9zID0gKHN0ciwgZGVsaW1pdGVyLCBzdGFydElkeCA9IDAsIGVuZElkeCA9IHN0ci5sZW5ndGgpID0+IHtcbiAgY29uc3QgaW5kaWNlcyA9IFtdO1xuICBsZXQgdGVtcCA9IHN0YXJ0SWR4O1xuXG4gIGZvciAobGV0IGkgPSBzdGFydElkeDsgaSA8IGVuZElkeDsgaSsrKSB7XG4gICAgaWYgKHN0cltpXSA9PT0gZGVsaW1pdGVyICYmIGkgKyBzdGFydElkeCAhPT0gZW5kSWR4ICYmIHRlbXAgIT09IGkgKyBzdGFydElkeCkge1xuICAgICAgaW5kaWNlcy5wdXNoKFt0ZW1wLCBpICsgc3RhcnRJZHhdKTtcbiAgICAgIHRlbXAgPSBpICsgc3RhcnRJZHggKyAxO1xuICAgIH1cbiAgfVxuXG4gIHRlbXAgIT09IGVuZElkeCAmJiBpbmRpY2VzLnB1c2goW3RlbXAsIGVuZElkeF0pO1xuICByZXR1cm4gaW5kaWNlcy5maWx0ZXIoQm9vbGVhbik7XG59O1xuXG5jb25zdCBidWlsZExpbmVhck9yZGVyID0gbm9kZSA9PiB7XG4gIGNvbnN0IGZvbnRUcmVlID0gW107XG4gIGNvbnN0IG5ld0xpbmVzUG9zID0gZ2V0RGVsaW1pdGVyUG9zKG5vZGUuY2hhcmFjdGVycywgJ1xcbicpO1xuICBuZXdMaW5lc1Bvcy5mb3JFYWNoKChbbmV3TGluZXNSYW5nZVN0YXJ0LCBuZXdMaW5lc1JhbmdlRW5kXSwgbikgPT4ge1xuICAgIGNvbnN0IG5ld0xpbmVzUmFuZ2VGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKG5ld0xpbmVzUmFuZ2VTdGFydCwgbmV3TGluZXNSYW5nZUVuZCk7XG5cbiAgICBpZiAobmV3TGluZXNSYW5nZUZvbnQgPT09IGZpZ21hLm1peGVkKSB7XG4gICAgICBjb25zdCBzcGFjZXNQb3MgPSBnZXREZWxpbWl0ZXJQb3Mobm9kZS5jaGFyYWN0ZXJzLCAnICcsIG5ld0xpbmVzUmFuZ2VTdGFydCwgbmV3TGluZXNSYW5nZUVuZCk7XG4gICAgICBzcGFjZXNQb3MuZm9yRWFjaCgoW3NwYWNlc1JhbmdlU3RhcnQsIHNwYWNlc1JhbmdlRW5kXSwgcykgPT4ge1xuICAgICAgICBjb25zdCBzcGFjZXNSYW5nZUZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoc3BhY2VzUmFuZ2VTdGFydCwgc3BhY2VzUmFuZ2VFbmQpO1xuXG4gICAgICAgIGlmIChzcGFjZXNSYW5nZUZvbnQgPT09IGZpZ21hLm1peGVkKSB7XG4gICAgICAgICAgY29uc3Qgc3BhY2VzUmFuZ2VGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKHNwYWNlc1JhbmdlU3RhcnQsIHNwYWNlc1JhbmdlU3RhcnRbMF0pO1xuICAgICAgICAgIGZvbnRUcmVlLnB1c2goe1xuICAgICAgICAgICAgc3RhcnQ6IHNwYWNlc1JhbmdlU3RhcnQsXG4gICAgICAgICAgICBkZWxpbWl0ZXI6ICcgJyxcbiAgICAgICAgICAgIGZhbWlseTogc3BhY2VzUmFuZ2VGb250LmZhbWlseSxcbiAgICAgICAgICAgIHN0eWxlOiBzcGFjZXNSYW5nZUZvbnQuc3R5bGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb250VHJlZS5wdXNoKHtcbiAgICAgICAgICAgIHN0YXJ0OiBzcGFjZXNSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgZGVsaW1pdGVyOiAnICcsXG4gICAgICAgICAgICBmYW1pbHk6IHNwYWNlc1JhbmdlRm9udC5mYW1pbHksXG4gICAgICAgICAgICBzdHlsZTogc3BhY2VzUmFuZ2VGb250LnN0eWxlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb250VHJlZS5wdXNoKHtcbiAgICAgICAgc3RhcnQ6IG5ld0xpbmVzUmFuZ2VTdGFydCxcbiAgICAgICAgZGVsaW1pdGVyOiAnXFxuJyxcbiAgICAgICAgZmFtaWx5OiBuZXdMaW5lc1JhbmdlRm9udC5mYW1pbHksXG4gICAgICAgIHN0eWxlOiBuZXdMaW5lc1JhbmdlRm9udC5zdHlsZVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZvbnRUcmVlLnNvcnQoKGEsIGIpID0+ICthLnN0YXJ0IC0gK2Iuc3RhcnQpLm1hcCgoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZSxcbiAgICBkZWxpbWl0ZXJcbiAgfSkgPT4gKHtcbiAgICBmYW1pbHksXG4gICAgc3R5bGUsXG4gICAgZGVsaW1pdGVyXG4gIH0pKTtcbn07XG5cbmNvbnN0IHNldENoYXJhY3RlcnNXaXRoU21hcnRNYXRjaEZvbnQgPSBhc3luYyAobm9kZSwgY2hhcmFjdGVycywgZmFsbGJhY2tGb250KSA9PiB7XG4gIGNvbnN0IHJhbmdlVHJlZSA9IGJ1aWxkTGluZWFyT3JkZXIobm9kZSk7XG4gIGNvbnN0IGZvbnRzVG9Mb2FkID0gKDAsIF91bmlxQnkyLmRlZmF1bHQpKHJhbmdlVHJlZSwgKHtcbiAgICBmYW1pbHksXG4gICAgc3R5bGVcbiAgfSkgPT4gYCR7ZmFtaWx5fTo6JHtzdHlsZX1gKS5tYXAoKHtcbiAgICBmYW1pbHksXG4gICAgc3R5bGVcbiAgfSkgPT4gKHtcbiAgICBmYW1pbHksXG4gICAgc3R5bGVcbiAgfSkpO1xuICBhd2FpdCBQcm9taXNlLmFsbChbLi4uZm9udHNUb0xvYWQsIGZhbGxiYWNrRm9udF0ubWFwKGZpZ21hLmxvYWRGb250QXN5bmMpKTtcbiAgbm9kZS5mb250TmFtZSA9IGZhbGxiYWNrRm9udDtcbiAgbm9kZS5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcbiAgbGV0IHByZXZQb3MgPSAwO1xuICByYW5nZVRyZWUuZm9yRWFjaCgoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZSxcbiAgICBkZWxpbWl0ZXJcbiAgfSkgPT4ge1xuICAgIGlmIChwcmV2UG9zIDwgbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZGVsaW1ldGVyUG9zID0gbm9kZS5jaGFyYWN0ZXJzLmluZGV4T2YoZGVsaW1pdGVyLCBwcmV2UG9zKTtcbiAgICAgIGNvbnN0IGVuZFBvcyA9IGRlbGltZXRlclBvcyA+IHByZXZQb3MgPyBkZWxpbWV0ZXJQb3MgOiBub2RlLmNoYXJhY3RlcnMubGVuZ3RoO1xuICAgICAgY29uc3QgbWF0Y2hlZEZvbnQgPSB7XG4gICAgICAgIGZhbWlseSxcbiAgICAgICAgc3R5bGVcbiAgICAgIH07XG4gICAgICBub2RlLnNldFJhbmdlRm9udE5hbWUocHJldlBvcywgZW5kUG9zLCBtYXRjaGVkRm9udCk7XG4gICAgICBwcmV2UG9zID0gZW5kUG9zICsgMTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdHJ1ZTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0b3BMZXZlbEZyYW1lcztcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYWxsIHRvcCBsZXZlbCBmcmFtZXMgb24gY3VycmVudFBhZ2VcbiAqL1xuZnVuY3Rpb24gdG9wTGV2ZWxGcmFtZXMocGFnZSA9IGZpZ21hLmN1cnJlbnRQYWdlKSB7XG4gIHJldHVybiBwYWdlLmNoaWxkcmVuLmZpbHRlcihub2RlID0+IG5vZGUudHlwZSA9PT0gJ0ZSQU1FJyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjbG9uZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfY2xvbmUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRBbGxGb250c1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0QWxsRm9udHMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRCb3VuZGluZ1JlY3RcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldEJvdW5kaW5nUmVjdC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldE5vZGVJbmRleFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0Tm9kZUluZGV4LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0UGFnZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0UGFnZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImhhc0NoaWxkcmVuXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9oYXNDaGlsZHJlbi5oYXNDaGlsZHJlbjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1BhcnRPZkluc3RhbmNlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1BhcnRPZkluc3RhbmNlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNQYXJ0T2ZOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1BhcnRPZk5vZGUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1Zpc2libGVOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1Zpc2libGVOb2RlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibG9hZFVuaXF1ZUZvbnRzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9sb2FkVW5pcXVlRm9udHMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJsb2FkRm9udHNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2xvYWRGb250cy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm5vZGVUb09iamVjdFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfbm9kZVRvT2JqZWN0Lm5vZGVUb09iamVjdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ0b3BMZXZlbEZyYW1lc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdG9wTGV2ZWxGcmFtZXMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRUZXh0Tm9kZUNTU1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0Q1NTU3R5bGVzLmdldFRleHROb2RlQ1NTO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImZpbmRBbGxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZpbmRNZXRob2RzLmZpbmRBbGw7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0UmVsYXRpdmVQb3NpdGlvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0UmVsYXRpdmVQb3NpdGlvbi5nZXRSZWxhdGl2ZVBvc2l0aW9uO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldFRvcExldmVsUGFyZW50XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRSZWxhdGl2ZVBvc2l0aW9uLmdldFRvcExldmVsUGFyZW50O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImZpZ21hUkdCVG9XZWJSR0JcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2NvbnZlcnRDb2xvci5maWdtYVJHQlRvV2ViUkdCO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndlYlJHQlRvRmlnbWFSR0JcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2NvbnZlcnRDb2xvci53ZWJSR0JUb0ZpZ21hUkdCO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImZpZ21hUkdCVG9IZXhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2NvbnZlcnRDb2xvci5maWdtYVJHQlRvSGV4O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImhleFRvRmlnbWFSR0JcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2NvbnZlcnRDb2xvci5oZXhUb0ZpZ21hUkdCO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzQ29tcG9uZW50Tm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc0NvbXBvbmVudE5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNGcmFtZU5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNGcmFtZU5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNHcm91cE5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNHcm91cE5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNJbnN0YW5jZU5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNJbnN0YW5jZU5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNQYWdlTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc1BhZ2VOb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzVGV4dE5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNUZXh0Tm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc09uZU9mTm9kZVR5cGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNPbmVPZk5vZGVUeXBlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImV4dHJhY3RJbWFnZUNyb3BQYXJhbXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2V4dHJhY3RJbWFnZUNyb3BQYXJhbXMuZXh0cmFjdEltYWdlQ3JvcFBhcmFtcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJleHRyYWN0TGluZWFyR3JhZGllbnRQYXJhbXNGcm9tVHJhbnNmb3JtXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9leHRyYWN0TGluZWFyR3JhZGllbnRTdGFydEVuZC5leHRyYWN0TGluZWFyR3JhZGllbnRQYXJhbXNGcm9tVHJhbnNmb3JtO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImV4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zLmV4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzZXRDaGFyYWN0ZXJzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9zZXRDaGFyYWN0ZXJzLnNldENoYXJhY3RlcnM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicGFyc2VUZXh0U3R5bGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLnBhcnNlVGV4dFN0eWxlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNwbGl0VGV4dFN0eWxlSW50b0xpbmVzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5zcGxpdFRleHRTdHlsZUludG9MaW5lcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJqb2luVGV4dExpbmVzU3R5bGVzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5qb2luVGV4dExpbmVzU3R5bGVzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFwcGx5VGV4dFN0eWxlVG9UZXh0Tm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUuYXBwbHlUZXh0U3R5bGVUb1RleHROb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNoYW5nZUNoYXJhY3RlcnNUZXh0U3R5bGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLmNoYW5nZUNoYXJhY3RlcnNUZXh0U3R5bGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY2hhbmdlVGV4dFN0eWxlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5jaGFuZ2VUZXh0U3R5bGU7XG4gIH1cbn0pO1xuXG52YXIgX2Nsb25lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2Nsb25lXCIpKTtcblxudmFyIF9nZXRBbGxGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9nZXRBbGxGb250c1wiKSk7XG5cbnZhciBfZ2V0Qm91bmRpbmdSZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2dldEJvdW5kaW5nUmVjdFwiKSk7XG5cbnZhciBfZ2V0Tm9kZUluZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2dldE5vZGVJbmRleFwiKSk7XG5cbnZhciBfZ2V0UGFnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9nZXRQYWdlXCIpKTtcblxudmFyIF9oYXNDaGlsZHJlbiA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvaGFzQ2hpbGRyZW5cIik7XG5cbnZhciBfaXNQYXJ0T2ZJbnN0YW5jZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9pc1BhcnRPZkluc3RhbmNlXCIpKTtcblxudmFyIF9pc1BhcnRPZk5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvaXNQYXJ0T2ZOb2RlXCIpKTtcblxudmFyIF9pc1Zpc2libGVOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2lzVmlzaWJsZU5vZGVcIikpO1xuXG52YXIgX2xvYWRVbmlxdWVGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9sb2FkVW5pcXVlRm9udHNcIikpO1xuXG52YXIgX2xvYWRGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9sb2FkRm9udHNcIikpO1xuXG52YXIgX25vZGVUb09iamVjdCA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvbm9kZVRvT2JqZWN0XCIpO1xuXG52YXIgX3RvcExldmVsRnJhbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL3RvcExldmVsRnJhbWVzXCIpKTtcblxudmFyIF9nZXRDU1NTdHlsZXMgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2dldENTU1N0eWxlc1wiKTtcblxudmFyIF9maW5kTWV0aG9kcyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZmluZE1ldGhvZHNcIik7XG5cbnZhciBfZ2V0UmVsYXRpdmVQb3NpdGlvbiA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0UmVsYXRpdmVQb3NpdGlvblwiKTtcblxudmFyIF9jb252ZXJ0Q29sb3IgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2NvbnZlcnRDb2xvclwiKTtcblxudmFyIF9pc1R5cGVOb2RlID0gcmVxdWlyZShcIi4vaGVscGVycy9pc1R5cGVOb2RlXCIpO1xuXG52YXIgX2V4dHJhY3RJbWFnZUNyb3BQYXJhbXMgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2V4dHJhY3RJbWFnZUNyb3BQYXJhbXNcIik7XG5cbnZhciBfZXh0cmFjdExpbmVhckdyYWRpZW50U3RhcnRFbmQgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kXCIpO1xuXG52YXIgX2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zXCIpO1xuXG52YXIgX3NldENoYXJhY3RlcnMgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3NldENoYXJhY3RlcnNcIik7XG5cbnZhciBfcGFyc2VUZXh0U3R5bGUgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3BhcnNlVGV4dFN0eWxlXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfSIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG4iLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG4iLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCAwKSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXM7XG4iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXJyYXlJbmNsdWRlc2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhIGNvbXBhcmF0b3IuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzV2l0aChhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChjb21wYXJhdG9yKHZhbHVlLCBhcnJheVtpbmRleF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcbiIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcbiIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25JbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbkluKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25JbjtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnblZhbHVlO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ24nKSxcbiAgICBiYXNlQXNzaWduSW4gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduSW4nKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgY29weVN5bWJvbHMgPSByZXF1aXJlKCcuL19jb3B5U3ltYm9scycpLFxuICAgIGNvcHlTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19jb3B5U3ltYm9sc0luJyksXG4gICAgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKSxcbiAgICBnZXRBbGxLZXlzSW4gPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzSW4nKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpbml0Q2xvbmVBcnJheSA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUFycmF5JyksXG4gICAgaW5pdENsb25lQnlUYWcgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVCeVRhZycpLFxuICAgIGluaXRDbG9uZU9iamVjdCA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZU9iamVjdCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc01hcCA9IHJlcXVpcmUoJy4vaXNNYXAnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1NldCA9IHJlcXVpcmUoJy4vaXNTZXQnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX0ZMQVRfRkxBRyA9IDIsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbG9uZWAgYW5kIGBfLmNsb25lRGVlcGAgd2hpY2ggdHJhY2tzXG4gKiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIERlZXAgY2xvbmVcbiAqICAyIC0gRmxhdHRlbiBpbmhlcml0ZWQgcHJvcGVydGllc1xuICogIDQgLSBDbG9uZSBzeW1ib2xzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgcGFyZW50IG9iamVjdCBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGFuZCB0aGVpciBjbG9uZSBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICB2YXIgcmVzdWx0LFxuICAgICAgaXNEZWVwID0gYml0bWFzayAmIENMT05FX0RFRVBfRkxBRyxcbiAgICAgIGlzRmxhdCA9IGJpdG1hc2sgJiBDTE9ORV9GTEFUX0ZMQUcsXG4gICAgICBpc0Z1bGwgPSBiaXRtYXNrICYgQ0xPTkVfU1lNQk9MU19GTEFHO1xuXG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIHJlc3VsdCA9IChpc0ZsYXQgfHwgaXNGdW5jKSA/IHt9IDogaW5pdENsb25lT2JqZWN0KHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBpc0ZsYXRcbiAgICAgICAgICA/IGNvcHlTeW1ib2xzSW4odmFsdWUsIGJhc2VBc3NpZ25JbihyZXN1bHQsIHZhbHVlKSlcbiAgICAgICAgICA6IGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHN1YlZhbHVlKSB7XG4gICAgICByZXN1bHQuYWRkKGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3ViVmFsdWUsIHZhbHVlLCBzdGFjaykpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzTWFwKHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgICAgcmVzdWx0LnNldChrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBrZXlzRnVuYyA9IGlzRnVsbFxuICAgID8gKGlzRmxhdCA/IGdldEFsbEtleXNJbiA6IGdldEFsbEtleXMpXG4gICAgOiAoaXNGbGF0ID8ga2V5c0luIDoga2V5cyk7XG5cbiAgdmFyIHByb3BzID0gaXNBcnIgPyB1bmRlZmluZWQgOiBrZXlzRnVuYyh2YWx1ZSk7XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNsb25lO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGU7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRJbmRleGAgYW5kIGBfLmZpbmRMYXN0SW5kZXhgIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMSA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xuIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmhhc0luYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSGFzSW4ob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGtleSBpbiBPYmplY3Qob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSGFzSW47XG4iLCJ2YXIgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vX2Jhc2VGaW5kSW5kZXgnKSxcbiAgICBiYXNlSXNOYU4gPSByZXF1aXJlKCcuL19iYXNlSXNOYU4nKSxcbiAgICBzdHJpY3RJbmRleE9mID0gcmVxdWlyZSgnLi9fc3RyaWN0SW5kZXhPZicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgYGZyb21JbmRleGAgYm91bmRzIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlXG4gICAgPyBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KVxuICAgIDogYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUlzTmFOLCBmcm9tSW5kZXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgYmFzZUlzRXF1YWxEZWVwID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG4iLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG4iLCJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWFwYCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBtYXBUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWFwO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hdGNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoRGF0YSBUaGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gbWF0Y2hEYXRhLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IGluZGV4LFxuICAgICAgbm9DdXN0b21pemVyID0gIWN1c3RvbWl6ZXI7XG5cbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGg7XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pXG4gICAgICAgICAgPyBkYXRhWzFdICE9PSBvYmplY3RbZGF0YVswXV1cbiAgICAgICAgICA6ICEoZGF0YVswXSBpbiBvYmplY3QpXG4gICAgICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIHZhciBrZXkgPSBkYXRhWzBdLFxuICAgICAgICBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBzcmNWYWx1ZSA9IGRhdGFbMV07XG5cbiAgICBpZiAobm9DdXN0b21pemVyICYmIGRhdGFbMl0pIHtcbiAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhY2sgPSBuZXcgU3RhY2s7XG4gICAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgICAgIDogcmVzdWx0XG4gICAgICAgICAgKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hdGNoO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hTmAgd2l0aG91dCBzdXBwb3J0IGZvciBudW1iZXIgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgTmFOYCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYU47XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuIiwidmFyIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzZXRUYWcgPSAnW29iamVjdCBTZXRdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1NldGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzU2V0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gc2V0VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1NldDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuIiwidmFyIGJhc2VNYXRjaGVzID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXMnKSxcbiAgICBiYXNlTWF0Y2hlc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXNQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBwcm9wZXJ0eSA9IHJlcXVpcmUoJy4vcHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pdGVyYXRlZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGFuIGl0ZXJhdGVlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBpdGVyYXRlZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlKSB7XG4gIC8vIERvbid0IHN0b3JlIHRoZSBgdHlwZW9mYCByZXN1bHQgaW4gYSB2YXJpYWJsZSB0byBhdm9pZCBhIEpJVCBidWcgaW4gU2FmYXJpIDkuXG4gIC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2MDM0IGZvciBtb3JlIGRldGFpbHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICA/IGJhc2VNYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKVxuICAgICAgOiBiYXNlTWF0Y2hlcyh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXRlcmF0ZWU7XG4iLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5c0luID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5c0luJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXNJbjtcbiIsInZhciBiYXNlSXNNYXRjaCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hdGNoJyksXG4gICAgZ2V0TWF0Y2hEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWF0Y2hEYXRhJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShtYXRjaERhdGFbMF1bMF0sIG1hdGNoRGF0YVswXVsxXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT09IHNvdXJjZSB8fCBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlcztcbiIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyksXG4gICAgZ2V0ID0gcmVxdWlyZSgnLi9nZXQnKSxcbiAgICBoYXNJbiA9IHJlcXVpcmUoJy4vaGFzSW4nKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lc24ndCBjbG9uZSBgc3JjVmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHNyY1ZhbHVlKSB7XG4gIGlmIChpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKHRvS2V5KHBhdGgpLCBzcmNWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBvYmpWYWx1ZSA9IGdldChvYmplY3QsIHBhdGgpO1xuICAgIHJldHVybiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBvYmpWYWx1ZSA9PT0gc3JjVmFsdWUpXG4gICAgICA/IGhhc0luKG9iamVjdCwgcGF0aClcbiAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzUHJvcGVydHk7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcbiIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVByb3BlcnR5YCB3aGljaCBzdXBwb3J0cyBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eURlZXAocGF0aCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHlEZWVwO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXG4gICAgY3JlYXRlU2V0ID0gcmVxdWlyZSgnLi9fY3JlYXRlU2V0JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBzZWVuID0gcmVzdWx0O1xuXG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICB9XG4gIGVsc2UgaWYgKGxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgdmFyIHNldCA9IGl0ZXJhdGVlID8gbnVsbCA6IGNyZWF0ZVNldChhcnJheSk7XG4gICAgaWYgKHNldCkge1xuICAgICAgcmV0dXJuIHNldFRvQXJyYXkoc2V0KTtcbiAgICB9XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIHNlZW4gPSBuZXcgU2V0Q2FjaGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgc2VlbiA9IGl0ZXJhdGVlID8gW10gOiByZXN1bHQ7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgc2VlbkluZGV4ID0gc2Vlbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoc2VlbkluZGV4LS0pIHtcbiAgICAgICAgaWYgKHNlZW5bc2VlbkluZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyhzZWVuLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIGlmIChzZWVuICE9PSByZXN1bHQpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5pcTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gaXNLZXkodmFsdWUsIG9iamVjdCkgPyBbdmFsdWVdIDogc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFBhdGg7XG4iLCJ2YXIgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQXJyYXlCdWZmZXI7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgYWxsb2NVbnNhZmUgPSBCdWZmZXIgPyBCdWZmZXIuYWxsb2NVbnNhZmUgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhbGxvY1Vuc2FmZSA/IGFsbG9jVW5zYWZlKGxlbmd0aCkgOiBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgYnVmZmVyLmNvcHkocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUJ1ZmZlcjtcbiIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgZGF0YVZpZXdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVZpZXcgVGhlIGRhdGEgdmlldyB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgZGF0YSB2aWV3LlxuICovXG5mdW5jdGlvbiBjbG9uZURhdGFWaWV3KGRhdGFWaWV3LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSA6IGRhdGFWaWV3LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGF0YVZpZXc7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lUmVnRXhwO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVTeW1ib2w7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVR5cGVkQXJyYXk7XG4iLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG4iLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpO1xuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICB2YXIgaXNOZXcgPSAhb2JqZWN0O1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3VmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5T2JqZWN0O1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBhbmQgaW5oZXJpdGVkIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzSW4oc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9sc0luO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcbiIsInZhciBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBub29wID0gcmVxdWlyZSgnLi9ub29wJyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9iamVjdCBvZiBgdmFsdWVzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYWRkIHRvIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgc2V0LlxuICovXG52YXIgY3JlYXRlU2V0ID0gIShTZXQgJiYgKDEgLyBzZXRUb0FycmF5KG5ldyBTZXQoWywtMF0pKVsxXSkgPT0gSU5GSU5JVFkpID8gbm9vcCA6IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gbmV3IFNldCh2YWx1ZXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTZXQ7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQ2hlY2sgdGhhdCBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIGFyclN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICB2YXIgb3RoU3RhY2tlZCA9IHN0YWNrLmdldChvdGhlcik7XG4gIGlmIChhcnJTdGFja2VkICYmIG90aFN0YWNrZWQpIHtcbiAgICByZXR1cm4gYXJyU3RhY2tlZCA9PSBvdGhlciAmJiBvdGhTdGFja2VkID09IGFycmF5O1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVIYXMoc2Vlbiwgb3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLnB1c2gob3RoSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXG4gICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKGFycmF5KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcbiIsInZhciBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayB0aGF0IGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgb2JqU3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICB2YXIgb3RoU3RhY2tlZCA9IHN0YWNrLmdldChvdGhlcik7XG4gIGlmIChvYmpTdGFja2VkICYmIG90aFN0YWNrZWQpIHtcbiAgICByZXR1cm4gb2JqU3RhY2tlZCA9PSBvdGhlciAmJiBvdGhTdGFja2VkID09IG9iamVjdDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG4iLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzSW4sIGdldFN5bWJvbHNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5c0luO1xuIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcbiIsInZhciBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3Mgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbWF0Y2ggZGF0YSBvZiBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hEYXRhKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0ga2V5cyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICB2YXIga2V5ID0gcmVzdWx0W2xlbmd0aF0sXG4gICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG5cbiAgICByZXN1bHRbbGVuZ3RoXSA9IFtrZXksIHZhbHVlLCBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hdGNoRGF0YTtcbiIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHNJbjtcbiIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcbiIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBleGlzdHMgb24gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFzRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgcHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBoYXNGdW5jKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBmYWxzZTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSB0b0tleShwYXRoW2luZGV4XSk7XG4gICAgaWYgKCEocmVzdWx0ID0gb2JqZWN0ICE9IG51bGwgJiYgaGFzRnVuYyhvYmplY3QsIGtleSkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XG4gIH1cbiAgaWYgKHJlc3VsdCB8fCArK2luZGV4ICE9IGxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgbGVuZ3RoID0gb2JqZWN0ID09IG51bGwgPyAwIDogb2JqZWN0Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiYgaXNJbmRleChrZXksIGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1BhdGg7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IG5ldyBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVBcnJheTtcbiIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpLFxuICAgIGNsb25lRGF0YVZpZXcgPSByZXF1aXJlKCcuL19jbG9uZURhdGFWaWV3JyksXG4gICAgY2xvbmVSZWdFeHAgPSByZXF1aXJlKCcuL19jbG9uZVJlZ0V4cCcpLFxuICAgIGNsb25lU3ltYm9sID0gcmVxdWlyZSgnLi9fY2xvbmVTeW1ib2wnKSxcbiAgICBjbG9uZVR5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19jbG9uZVR5cGVkQXJyYXknKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE1hcGAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgYFNldGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBjbG9uZUFycmF5QnVmZmVyKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIHJldHVybiBjbG9uZURhdGFWaWV3KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcjtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVJlZ0V4cChvYmplY3QpO1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3I7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVN5bWJvbChvYmplY3QpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQnlUYWc7XG4iLCJ2YXIgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVPYmplY3Q7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG4iLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlmIHN1aXRhYmxlIGZvciBzdHJpY3RcbiAqICBlcXVhbGl0eSBjb21wYXJpc29ucywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSAmJiAhaXNPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaWN0Q29tcGFyYWJsZTtcbiIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcbiIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG4iLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgbWF0Y2hlc1Byb3BlcnR5YCBmb3Igc291cmNlIHZhbHVlcyBzdWl0YWJsZVxuICogZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKGtleSwgc3JjVmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIE9iamVjdChvYmplY3QpKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlc1N0cmljdENvbXBhcmFibGU7XG4iLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG4iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG4iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzSW47XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG4iLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zIG9mIHZhbHVlcywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWN0SW5kZXhPZjtcbiIsInZhciBtZW1vaXplQ2FwcGVkID0gcmVxdWlyZSgnLi9fbWVtb2l6ZUNhcHBlZCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHN0cmluZy5jaGFyQ29kZUF0KDApID09PSA0NiAvKiAuICovKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN1YlN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9QYXRoO1xuIiwidmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0tleTtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcbiIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9ERUVQX0ZMQUcgfCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcbiIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG4iLCJ2YXIgYmFzZUhhc0luID0gcmVxdWlyZSgnLi9fYmFzZUhhc0luJyksXG4gICAgaGFzUGF0aCA9IHJlcXVpcmUoJy4vX2hhc1BhdGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IG9yIGluaGVyaXRlZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNJbihvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0luO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBkZWVwIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZVxuICogZXF1aXZhbGVudC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2Qgc3VwcG9ydHMgY29tcGFyaW5nIGFycmF5cywgYXJyYXkgYnVmZmVycywgYm9vbGVhbnMsXG4gKiBkYXRlIG9iamVjdHMsIGVycm9yIG9iamVjdHMsIG1hcHMsIG51bWJlcnMsIGBPYmplY3RgIG9iamVjdHMsIHJlZ2V4ZXMsXG4gKiBzZXRzLCBzdHJpbmdzLCBzeW1ib2xzLCBhbmQgdHlwZWQgYXJyYXlzLiBgT2JqZWN0YCBvYmplY3RzIGFyZSBjb21wYXJlZFxuICogYnkgdGhlaXIgb3duLCBub3QgaW5oZXJpdGVkLCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuIEZ1bmN0aW9ucyBhbmQgRE9NXG4gKiBub2RlcyBhcmUgY29tcGFyZWQgYnkgc3RyaWN0IGVxdWFsaXR5LCBpLmUuIGA9PT1gLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmlzRXF1YWwob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogb2JqZWN0ID09PSBvdGhlcjtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRXF1YWwodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXF1YWw7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwidmFyIGJhc2VJc01hcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNNYXAgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc01hcDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYE1hcGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNNYXAobmV3IE1hcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc01hcChuZXcgV2Vha01hcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNNYXAgPSBub2RlSXNNYXAgPyBiYXNlVW5hcnkobm9kZUlzTWFwKSA6IGJhc2VJc01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc01hcDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VJc1NldCA9IHJlcXVpcmUoJy4vX2Jhc2VJc1NldCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNTZXQgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1NldDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFNldGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTZXQobmV3IFNldCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1NldChuZXcgV2Vha1NldCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNTZXQgPSBub2RlSXNTZXQgPyBiYXNlVW5hcnkobm9kZUlzU2V0KSA6IGJhc2VJc1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1NldDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgdW5kZWZpbmVkYCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVW5kZWZpbmVkKHZvaWQgMCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1VuZGVmaW5lZChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVW5kZWZpbmVkO1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGNsZWFyYCwgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEV4cG9zZSBgTWFwQ2FjaGVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLm5vb3ApO1xuICogLy8gPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBObyBvcGVyYXRpb24gcGVyZm9ybWVkLlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vb3A7XG4iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5JyksXG4gICAgYmFzZVByb3BlcnR5RGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eURlZXAnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBhIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFtcbiAqICAgeyAnYSc6IHsgJ2InOiAyIH0gfSxcbiAqICAgeyAnYSc6IHsgJ2InOiAxIH0gfVxuICogXTtcbiAqXG4gKiBfLm1hcChvYmplY3RzLCBfLnByb3BlcnR5KCdhLmInKSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqXG4gKiBfLm1hcChfLnNvcnRCeShvYmplY3RzLCBfLnByb3BlcnR5KFsnYScsICdiJ10pKSwgJ2EuYicpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcmV0dXJuIGlzS2V5KHBhdGgpID8gYmFzZVByb3BlcnR5KHRvS2V5KHBhdGgpKSA6IGJhc2VQcm9wZXJ0eURlZXAocGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGVydHk7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcbiIsInZhciBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy51bmlxYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGBpdGVyYXRlZWAgd2hpY2ggaXNcbiAqIGludm9rZWQgZm9yIGVhY2ggZWxlbWVudCBpbiBgYXJyYXlgIHRvIGdlbmVyYXRlIHRoZSBjcml0ZXJpb24gYnkgd2hpY2hcbiAqIHVuaXF1ZW5lc3MgaXMgY29tcHV0ZWQuIFRoZSBvcmRlciBvZiByZXN1bHQgdmFsdWVzIGlzIGRldGVybWluZWQgYnkgdGhlXG4gKiBvcmRlciB0aGV5IG9jY3VyIGluIHRoZSBhcnJheS4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6XG4gKiAodmFsdWUpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy51bmlxQnkoWzIuMSwgMS4yLCAyLjNdLCBNYXRoLmZsb29yKTtcbiAqIC8vID0+IFsyLjEsIDEuMl1cbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8udW5pcUJ5KFt7ICd4JzogMSB9LCB7ICd4JzogMiB9LCB7ICd4JzogMSB9XSwgJ3gnKTtcbiAqIC8vID0+IFt7ICd4JzogMSB9LCB7ICd4JzogMiB9XVxuICovXG5mdW5jdGlvbiB1bmlxQnkoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSA/IGJhc2VVbmlxKGFycmF5LCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDIpKSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaXFCeTtcbiIsInZhciBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy51bmlxYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGBjb21wYXJhdG9yYCB3aGljaFxuICogaXMgaW52b2tlZCB0byBjb21wYXJlIGVsZW1lbnRzIG9mIGBhcnJheWAuIFRoZSBvcmRlciBvZiByZXN1bHQgdmFsdWVzIGlzXG4gKiBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlciB0aGV5IG9jY3VyIGluIHRoZSBhcnJheS5UaGUgY29tcGFyYXRvciBpcyBpbnZva2VkXG4gKiB3aXRoIHR3byBhcmd1bWVudHM6IChhcnJWYWwsIG90aFZhbCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ3gnOiAxLCAneSc6IDIgfSwgeyAneCc6IDIsICd5JzogMSB9LCB7ICd4JzogMSwgJ3knOiAyIH1dO1xuICpcbiAqIF8udW5pcVdpdGgob2JqZWN0cywgXy5pc0VxdWFsKTtcbiAqIC8vID0+IFt7ICd4JzogMSwgJ3knOiAyIH0sIHsgJ3gnOiAyLCAneSc6IDEgfV1cbiAqL1xuZnVuY3Rpb24gdW5pcVdpdGgoYXJyYXksIGNvbXBhcmF0b3IpIHtcbiAgY29tcGFyYXRvciA9IHR5cGVvZiBjb21wYXJhdG9yID09ICdmdW5jdGlvbicgPyBjb21wYXJhdG9yIDogdW5kZWZpbmVkO1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlVW5pcShhcnJheSwgdW5kZWZpbmVkLCBjb21wYXJhdG9yKSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaXFXaXRoO1xuIiwidmFyIFN5bHZlc3RlciA9IHt9XG5cblN5bHZlc3Rlci5NYXRyaXggPSBmdW5jdGlvbigpIHt9XG5cblN5bHZlc3Rlci5NYXRyaXguY3JlYXRlID0gZnVuY3Rpb24oZWxlbWVudHMpIHtcbiAgdmFyIE0gPSBuZXcgU3lsdmVzdGVyLk1hdHJpeCgpXG4gIHJldHVybiBNLnNldEVsZW1lbnRzKGVsZW1lbnRzKVxufVxuXG5TeWx2ZXN0ZXIuTWF0cml4LkkgPSBmdW5jdGlvbihuKSB7XG4gIHZhciBlbHMgPSBbXSxcbiAgICBpID0gbixcbiAgICBqXG4gIHdoaWxlIChpLS0pIHtcbiAgICBqID0gblxuICAgIGVsc1tpXSA9IFtdXG4gICAgd2hpbGUgKGotLSkge1xuICAgICAgZWxzW2ldW2pdID0gaSA9PT0gaiA/IDEgOiAwXG4gICAgfVxuICB9XG4gIHJldHVybiBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZShlbHMpXG59XG5cblN5bHZlc3Rlci5NYXRyaXgucHJvdG90eXBlID0ge1xuICBkdXA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZSh0aGlzLmVsZW1lbnRzKVxuICB9LFxuXG4gIGlzU3F1YXJlOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29scyA9IHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAwID8gMCA6IHRoaXMuZWxlbWVudHNbMF0ubGVuZ3RoXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSBjb2xzXG4gIH0sXG5cbiAgdG9SaWdodFRyaWFuZ3VsYXI6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKFtdKVxuICAgIHZhciBNID0gdGhpcy5kdXAoKSxcbiAgICAgIGVsc1xuICAgIHZhciBuID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICBpLFxuICAgICAgaixcbiAgICAgIG5wID0gdGhpcy5lbGVtZW50c1swXS5sZW5ndGgsXG4gICAgICBwXG4gICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgaWYgKE0uZWxlbWVudHNbaV1baV0gPT09IDApIHtcbiAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICBpZiAoTS5lbGVtZW50c1tqXVtpXSAhPT0gMCkge1xuICAgICAgICAgICAgZWxzID0gW11cbiAgICAgICAgICAgIGZvciAocCA9IDA7IHAgPCBucDsgcCsrKSB7XG4gICAgICAgICAgICAgIGVscy5wdXNoKE0uZWxlbWVudHNbaV1bcF0gKyBNLmVsZW1lbnRzW2pdW3BdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTS5lbGVtZW50c1tpXSA9IGVsc1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChNLmVsZW1lbnRzW2ldW2ldICE9PSAwKSB7XG4gICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgdmFyIG11bHRpcGxpZXIgPSBNLmVsZW1lbnRzW2pdW2ldIC8gTS5lbGVtZW50c1tpXVtpXVxuICAgICAgICAgIGVscyA9IFtdXG4gICAgICAgICAgZm9yIChwID0gMDsgcCA8IG5wOyBwKyspIHtcbiAgICAgICAgICAgIC8vIEVsZW1lbnRzIHdpdGggY29sdW1uIG51bWJlcnMgdXAgdG8gYW4gaW5jbHVkaW5nIHRoZSBudW1iZXIgb2YgdGhlXG4gICAgICAgICAgICAvLyByb3cgdGhhdCB3ZSdyZSBzdWJ0cmFjdGluZyBjYW4gc2FmZWx5IGJlIHNldCBzdHJhaWdodCB0byB6ZXJvLFxuICAgICAgICAgICAgLy8gc2luY2UgdGhhdCdzIHRoZSBwb2ludCBvZiB0aGlzIHJvdXRpbmUgYW5kIGl0IGF2b2lkcyBoYXZpbmcgdG9cbiAgICAgICAgICAgIC8vIGxvb3Agb3ZlciBhbmQgY29ycmVjdCByb3VuZGluZyBlcnJvcnMgbGF0ZXJcbiAgICAgICAgICAgIGVscy5wdXNoKFxuICAgICAgICAgICAgICBwIDw9IGkgPyAwIDogTS5lbGVtZW50c1tqXVtwXSAtIE0uZWxlbWVudHNbaV1bcF0gKiBtdWx0aXBsaWVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIE0uZWxlbWVudHNbal0gPSBlbHNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gTVxuICB9LFxuXG4gIGRldGVybWluYW50OiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICAgIGlmICghdGhpcy5pc1NxdWFyZSgpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICB2YXIgTSA9IHRoaXMudG9SaWdodFRyaWFuZ3VsYXIoKVxuICAgIHZhciBkZXQgPSBNLmVsZW1lbnRzWzBdWzBdLFxuICAgICAgbiA9IE0uZWxlbWVudHMubGVuZ3RoXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgIGRldCA9IGRldCAqIE0uZWxlbWVudHNbaV1baV1cbiAgICB9XG4gICAgcmV0dXJuIGRldFxuICB9LFxuXG4gIGlzU2luZ3VsYXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmlzU3F1YXJlKCkgJiYgdGhpcy5kZXRlcm1pbmFudCgpID09PSAwXG4gIH0sXG5cbiAgYXVnbWVudDogZnVuY3Rpb24obWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5kdXAoKVxuICAgIH1cbiAgICB2YXIgTSA9IG1hdHJpeC5lbGVtZW50cyB8fCBtYXRyaXhcbiAgICBpZiAodHlwZW9mIE1bMF1bMF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBNID0gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUoTSkuZWxlbWVudHNcbiAgICB9XG4gICAgdmFyIFQgPSB0aGlzLmR1cCgpLFxuICAgICAgY29scyA9IFQuZWxlbWVudHNbMF0ubGVuZ3RoXG4gICAgdmFyIGkgPSBULmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIG5qID0gTVswXS5sZW5ndGgsXG4gICAgICBqXG4gICAgaWYgKGkgIT09IE0ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBqID0gbmpcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgVC5lbGVtZW50c1tpXVtjb2xzICsgal0gPSBNW2ldW2pdXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBUXG4gIH0sXG5cbiAgaW52ZXJzZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNTcXVhcmUoKSB8fCB0aGlzLmlzU2luZ3VsYXIoKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgdmFyIG4gPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGkgPSBuLFxuICAgICAgalxuICAgIHZhciBNID0gdGhpcy5hdWdtZW50KFN5bHZlc3Rlci5NYXRyaXguSShuKSkudG9SaWdodFRyaWFuZ3VsYXIoKVxuICAgIHZhciBucCA9IE0uZWxlbWVudHNbMF0ubGVuZ3RoLFxuICAgICAgcCxcbiAgICAgIGVscyxcbiAgICAgIGRpdmlzb3JcbiAgICB2YXIgaW52ZXJzZV9lbGVtZW50cyA9IFtdLFxuICAgICAgbmV3X2VsZW1lbnRcbiAgICAvLyBTeWx2ZXN0ZXIuTWF0cml4IGlzIG5vbi1zaW5ndWxhciBzbyB0aGVyZSB3aWxsIGJlIG5vIHplcm9zIG9uIHRoZVxuICAgIC8vIGRpYWdvbmFsLiBDeWNsZSB0aHJvdWdoIHJvd3MgZnJvbSBsYXN0IHRvIGZpcnN0LlxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIC8vIEZpcnN0LCBub3JtYWxpc2UgZGlhZ29uYWwgZWxlbWVudHMgdG8gMVxuICAgICAgZWxzID0gW11cbiAgICAgIGludmVyc2VfZWxlbWVudHNbaV0gPSBbXVxuICAgICAgZGl2aXNvciA9IE0uZWxlbWVudHNbaV1baV1cbiAgICAgIGZvciAocCA9IDA7IHAgPCBucDsgcCsrKSB7XG4gICAgICAgIG5ld19lbGVtZW50ID0gTS5lbGVtZW50c1tpXVtwXSAvIGRpdmlzb3JcbiAgICAgICAgZWxzLnB1c2gobmV3X2VsZW1lbnQpXG4gICAgICAgIC8vIFNodWZmbGUgb2ZmIHRoZSBjdXJyZW50IHJvdyBvZiB0aGUgcmlnaHQgaGFuZCBzaWRlIGludG8gdGhlIHJlc3VsdHNcbiAgICAgICAgLy8gYXJyYXkgYXMgaXQgd2lsbCBub3QgYmUgbW9kaWZpZWQgYnkgbGF0ZXIgcnVucyB0aHJvdWdoIHRoaXMgbG9vcFxuICAgICAgICBpZiAocCA+PSBuKSB7XG4gICAgICAgICAgaW52ZXJzZV9lbGVtZW50c1tpXS5wdXNoKG5ld19lbGVtZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBNLmVsZW1lbnRzW2ldID0gZWxzXG4gICAgICAvLyBUaGVuLCBzdWJ0cmFjdCB0aGlzIHJvdyBmcm9tIHRob3NlIGFib3ZlIGl0IHRvIGdpdmUgdGhlIGlkZW50aXR5IG1hdHJpeFxuICAgICAgLy8gb24gdGhlIGxlZnQgaGFuZCBzaWRlXG4gICAgICBqID0gaVxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBlbHMgPSBbXVxuICAgICAgICBmb3IgKHAgPSAwOyBwIDwgbnA7IHArKykge1xuICAgICAgICAgIGVscy5wdXNoKE0uZWxlbWVudHNbal1bcF0gLSBNLmVsZW1lbnRzW2ldW3BdICogTS5lbGVtZW50c1tqXVtpXSlcbiAgICAgICAgfVxuICAgICAgICBNLmVsZW1lbnRzW2pdID0gZWxzXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZShpbnZlcnNlX2VsZW1lbnRzKVxuICB9LFxuXG4gIHNldEVsZW1lbnRzOiBmdW5jdGlvbihlbHMpIHtcbiAgICB2YXIgaSxcbiAgICAgIGosXG4gICAgICBlbGVtZW50cyA9IGVscy5lbGVtZW50cyB8fCBlbHNcbiAgICBpZiAoZWxlbWVudHNbMF0gJiYgdHlwZW9mIGVsZW1lbnRzWzBdWzBdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaSA9IGVsZW1lbnRzLmxlbmd0aFxuICAgICAgdGhpcy5lbGVtZW50cyA9IFtdXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGogPSBlbGVtZW50c1tpXS5sZW5ndGhcbiAgICAgICAgdGhpcy5lbGVtZW50c1tpXSA9IFtdXG4gICAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2ldW2pdID0gZWxlbWVudHNbaV1bal1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgdmFyIG4gPSBlbGVtZW50cy5sZW5ndGhcbiAgICB0aGlzLmVsZW1lbnRzID0gW11cbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2goW2VsZW1lbnRzW2ldXSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbGVtZW50cykge1xuICByZXR1cm4gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUoZWxlbWVudHMpLmludmVyc2UoKS5lbGVtZW50c1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbihmdW5jdGlvbigpe1xuXG4gIHZhclxuICAgIGJ1ZixcbiAgICBidWZJZHggPSAwLFxuICAgIGhleEJ5dGVzID0gW10sXG4gICAgaVxuICA7XG5cbiAgLy8gUHJlLWNhbGN1bGF0ZSB0b1N0cmluZygxNikgZm9yIHNwZWVkXG4gIGZvciAoaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgIGhleEJ5dGVzW2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbiAgfVxuXG4gIC8vIEJ1ZmZlciByYW5kb20gbnVtYmVycyBmb3Igc3BlZWRcbiAgLy8gUmVkdWNlIG1lbW9yeSB1c2FnZSBieSBkZWNyZWFzaW5nIHRoaXMgbnVtYmVyIChtaW4gMTYpXG4gIC8vIG9yIGltcHJvdmUgc3BlZWQgYnkgaW5jcmVhc2luZyB0aGlzIG51bWJlciAodHJ5IDE2Mzg0KVxuICB1dWlkLkJVRkZFUl9TSVpFID0gNDA5NjtcblxuICAvLyBCaW5hcnkgdXVpZHNcbiAgdXVpZC5iaW4gPSB1dWlkQmluO1xuXG4gIC8vIENsZWFyIGJ1ZmZlclxuICB1dWlkLmNsZWFyQnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgYnVmID0gbnVsbDtcbiAgICBidWZJZHggPSAwO1xuICB9O1xuXG4gIC8vIFRlc3QgZm9yIHV1aWRcbiAgdXVpZC50ZXN0ID0gZnVuY3Rpb24odXVpZCkge1xuICAgIGlmICh0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAvXlswLTlhLWZdezh9LVswLTlhLWZdezR9LTRbMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn0kL2kudGVzdCh1dWlkKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIE5vZGUgJiBCcm93c2VyIHN1cHBvcnRcbiAgdmFyIGNyeXB0MDtcbiAgaWYgKHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3J5cHQwID0gY3J5cHRvO1xuICB9IGVsc2UgaWYoICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgJiYgKHR5cGVvZiB3aW5kb3cubXNDcnlwdG8gIT09ICd1bmRlZmluZWQnKSkge1xuICAgIGNyeXB0MCA9IHdpbmRvdy5tc0NyeXB0bzsgLy8gSUUxMVxuICB9XG5cbiAgaWYgKCh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgJiYgKHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSkge1xuICAgIGNyeXB0MCA9IGNyeXB0MCB8fCByZXF1aXJlKCdjcnlwdG8nKTtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHV1aWQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cudXVpZCA9IHV1aWQ7XG4gIH1cblxuICAvLyBVc2UgYmVzdCBhdmFpbGFibGUgUFJOR1xuICAvLyBBbHNvIGV4cG9zZSB0aGlzIHNvIHlvdSBjYW4gb3ZlcnJpZGUgaXQuXG4gIHV1aWQucmFuZG9tQnl0ZXMgPSAoZnVuY3Rpb24oKXtcbiAgICBpZiAoY3J5cHQwKSB7XG4gICAgICBpZiAoY3J5cHQwLnJhbmRvbUJ5dGVzKSB7XG4gICAgICAgIHJldHVybiBjcnlwdDAucmFuZG9tQnl0ZXM7XG4gICAgICB9XG4gICAgICBpZiAoY3J5cHQwLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNsaWNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KG4pO1xuICAgICAgICAgICAgY3J5cHQwLmdldFJhbmRvbVZhbHVlcyhieXRlcyk7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShieXRlcyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24obikge1xuICAgICAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KG4pO1xuICAgICAgICAgIGNyeXB0MC5nZXRSYW5kb21WYWx1ZXMoYnl0ZXMpO1xuICAgICAgICAgIHJldHVybiBieXRlcztcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG4pIHtcbiAgICAgIHZhciBpLCByID0gW107XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHIucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgLy8gQnVmZmVyIHNvbWUgcmFuZG9tIGJ5dGVzIGZvciBzcGVlZFxuICBmdW5jdGlvbiByYW5kb21CeXRlc0J1ZmZlcmVkKG4pIHtcbiAgICBpZiAoIWJ1ZiB8fCAoKGJ1ZklkeCArIG4pID4gdXVpZC5CVUZGRVJfU0laRSkpIHtcbiAgICAgIGJ1ZklkeCA9IDA7XG4gICAgICBidWYgPSB1dWlkLnJhbmRvbUJ5dGVzKHV1aWQuQlVGRkVSX1NJWkUpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmLnNsaWNlKGJ1ZklkeCwgYnVmSWR4ICs9IG4pO1xuICB9XG5cbiAgLy8gdXVpZC5iaW5cbiAgZnVuY3Rpb24gdXVpZEJpbigpIHtcbiAgICB2YXIgYiA9IHJhbmRvbUJ5dGVzQnVmZmVyZWQoMTYpO1xuICAgIGJbNl0gPSAoYls2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBiWzhdID0gKGJbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgcmV0dXJuIGI7XG4gIH1cblxuICAvLyBTdHJpbmcgVVVJRHY0IChSYW5kb20pXG4gIGZ1bmN0aW9uIHV1aWQoKSB7XG4gICAgdmFyIGIgPSB1dWlkQmluKCk7XG4gICAgcmV0dXJuIGhleEJ5dGVzW2JbMF1dICsgaGV4Qnl0ZXNbYlsxXV0gK1xuICAgICAgaGV4Qnl0ZXNbYlsyXV0gKyBoZXhCeXRlc1tiWzNdXSArICctJyArXG4gICAgICBoZXhCeXRlc1tiWzRdXSArIGhleEJ5dGVzW2JbNV1dICsgJy0nICtcbiAgICAgIGhleEJ5dGVzW2JbNl1dICsgaGV4Qnl0ZXNbYls3XV0gKyAnLScgK1xuICAgICAgaGV4Qnl0ZXNbYls4XV0gKyBoZXhCeXRlc1tiWzldXSArICctJyArXG4gICAgICBoZXhCeXRlc1tiWzEwXV0gKyBoZXhCeXRlc1tiWzExXV0gK1xuICAgICAgaGV4Qnl0ZXNbYlsxMl1dICsgaGV4Qnl0ZXNbYlsxM11dICtcbiAgICAgIGhleEJ5dGVzW2JbMTRdXSArIGhleEJ5dGVzW2JbMTVdXVxuICAgIDtcbiAgfVxuXG59KSgpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkLXJhbmRvbSc7XG5pbXBvcnQgeyBpc1Zpc2libGVOb2RlIH0gZnJvbSBcIkBmaWdtYS1wbHVnaW4vaGVscGVyc1wiO1xuaW1wb3J0IHJhd0xpZ2h0Q29sb3JUb2tlbnMgZnJvbSAnLi4vLi4vZGF0YS9saWdodC1tb2RlLmpzb24nO1xuaW1wb3J0IHJhd0RhcmtDb2xvclRva2VucyBmcm9tICcuLi8uLi9kYXRhL2RhcmstbW9kZS5qc29uJztcbmNvbnN0IGNyZWF0ZVRhYmxlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgdGFibGVGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgbGV0IGhlYWRlckNlbGwgPSB5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKFwiY2U4ZmE4ZThjYWIwN2ExOWY4M2Y0MTgxYWM4Y2JlNzYwOTNjNmJjM1wiKTtcbiAgICBsZXQgdGFibGVSb3cgPSBmaWdtYS5jcmVhdGVDb21wb25lbnQoKTtcbiAgICBsZXQgY2VsbEZpbGxDb250YWluZXJZID0gZmFsc2U7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJPcGVuIFNhbnNcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgIHRhYmxlRnJhbWUubmFtZSA9IFwiVGFibGVcIjtcbiAgICB0YWJsZUZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIHRhYmxlRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICB0YWJsZUZyYW1lLnggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICB0YWJsZUZyYW1lLnkgPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueTtcbiAgICBtc2cuY29sdW1uQ29uZmlndXJhdGlvbi5maW5kKChjb2wpID0+IChjZWxsRmlsbENvbnRhaW5lclkgPSBjb2wubXVsdGlWYWx1ZSkpO1xuICAgIFsuLi5BcnJheShtc2cucm93cyArIDEpLmtleXMoKV0ubWFwKChyb3dJbmRleCkgPT4ge1xuICAgICAgICB0YWJsZVJvdy5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgIHRhYmxlUm93LmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICB0YWJsZVJvdy5uYW1lID0gXCJSb3dcIjtcbiAgICAgICAgbXNnLmNvbHVtbkNvbmZpZ3VyYXRpb24ubWFwKChjb2wpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IHsgbmFtZTogY29sTmFtZSwgYWxpZ25tZW50OiBjb2xBbGlnbm1lbnQsIGNlbGxUeXBlOiBjb2xDZWxsVHlwZSwgbXVsdGlWYWx1ZTogY29sTXVsdGlWYWx1ZSwgfSA9IGNvbDtcbiAgICAgICAgICAgIGNvbEFsaWdubWVudCA9XG4gICAgICAgICAgICAgICAgY29sQWxpZ25tZW50WzBdLnRvVXBwZXJDYXNlKCkgKyBjb2xBbGlnbm1lbnQuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgY29sQ2VsbFR5cGUgPSBjb2xDZWxsVHlwZVswXS50b1VwcGVyQ2FzZSgpICsgY29sQ2VsbFR5cGUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgY29sTXVsdGlWYWx1ZSA9IGNvbE11bHRpVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbE11bHRpVmFsdWUgPVxuICAgICAgICAgICAgICAgIGNvbE11bHRpVmFsdWVbMF0udG9VcHBlckNhc2UoKSArIGNvbE11bHRpVmFsdWUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoaXNIZWFkZXJDZWxsID0gaGVhZGVyQ2VsbC5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbCA9IHRoaXNIZWFkZXJDZWxsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLm5hbWUgPSBjb2xOYW1lLmxlbmd0aCA+IDAgPyBjb2xOYW1lIDogXCJIZWFkZXJcIjtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbC5kZWxldGVDaGFyYWN0ZXJzKDAsIHRleHROb2RlT2ZIZWFkZXJDZWxsLmNoYXJhY3RlcnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbC5pbnNlcnRDaGFyYWN0ZXJzKDAsIGNvbE5hbWUubGVuZ3RoID4gMCA/IGNvbE5hbWUgOiBcIkhlYWRlclwiKTtcbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5zZXRQcm9wZXJ0aWVzKHsgQWxpZ25tZW50OiBjb2xBbGlnbm1lbnQgfSk7XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwucmVzaXplKGNvbE11bHRpVmFsdWUgPT09IFwiVHJ1ZVwiID8gMTIwIDogdGhpc0hlYWRlckNlbGwud2lkdGgsIHRoaXNIZWFkZXJDZWxsLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwuY2hpbGRyZW5bMF0ubGF5b3V0R3JvdyA9IGNlbGxGaWxsQ29udGFpbmVyWSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IGNlbGxGaWxsQ29udGFpbmVyWVxuICAgICAgICAgICAgICAgICAgICA/IFwiRklYRURcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiQVVUT1wiO1xuICAgICAgICAgICAgICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHRoaXNIZWFkZXJDZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRhYmxlRnJhbWUuYXBwZW5kQ2hpbGQodGFibGVSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRoaXNUYWJsZVJvdyA9IHRhYmxlUm93LmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICB0aGlzVGFibGVSb3cuY2hpbGRyZW4ubWFwKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7IGNlbGxUeXBlOiBjb2xDZWxsVHlwZSwgbXVsdGlWYWx1ZTogY29sTXVsdGlWYWx1ZSB9ID0gbXNnLmNvbHVtbkNvbmZpZ3VyYXRpb25baW5kZXhdO1xuICAgICAgICAgICAgICAgIGNvbENlbGxUeXBlID0gY29sQ2VsbFR5cGVbMF0udG9VcHBlckNhc2UoKSArIGNvbENlbGxUeXBlLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICAgICBjb2xNdWx0aVZhbHVlID0gY29sTXVsdGlWYWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbE11bHRpVmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICBjb2xNdWx0aVZhbHVlWzBdLnRvVXBwZXJDYXNlKCkgKyBjb2xNdWx0aVZhbHVlLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICAgICBjZWxsLm5hbWUgPT09IFwiSGVhZGVyXCIgPyAoY2VsbC5uYW1lID0gXCJDZWxsXCIpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBjZWxsLnNldFByb3BlcnRpZXMoeyBUeXBlOiBcIkJvZHlcIiB9KTtcbiAgICAgICAgICAgICAgICBjZWxsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgICAgICAgICAgICBUeXBlOiBjb2xDZWxsVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgXCJNdWx0aS12YWx1ZVwiOiBjb2xNdWx0aVZhbHVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNlbGwuY2hpbGRyZW5bMF0ubGF5b3V0R3JvdyA9IGNlbGxGaWxsQ29udGFpbmVyWSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIGNlbGwucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gY2VsbEZpbGxDb250YWluZXJZID8gXCJGSVhFRFwiIDogXCJBVVRPXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhYmxlRnJhbWUuYXBwZW5kQ2hpbGQodGhpc1RhYmxlUm93KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGxldCB0YWJsZURhdGEgPSBPYmplY3QuYXNzaWduKHsgZmlsZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLnBhcmVudC5uYW1lLCBmaWxlS2V5OiBmaWdtYS5maWxlS2V5LCBcIkNvbHVtbiBjb3VudFwiOiBtc2cuY29sdW1uQ29uZmlndXJhdGlvbi5sZW5ndGgsIFwiUm93IGNvdW50XCI6IG1zZy5yb3dzLCBcIkNvbHVtbiBDb25maWd1cmF0aW9uXCI6IG1zZy5jb2x1bW5Db25maWd1cmF0aW9uIH0sIGN1c3RvbUV2ZW50RGF0YSk7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInRhYmxlLWNyZWF0ZWRcIiwgbWVzc2FnZTogdGFibGVEYXRhIH0pO1xuICAgIGZpZ21hLm5vdGlmeShcIlRhYmxlIGNyZWF0ZWQg4pyFXCIpO1xufSk7XG5jb25zdCBwdXNoVGV4dExheWVyVG9BcnJheSA9IChsYXllciwgYXJyYXkpID0+IHtcbiAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICBuYW1lOiBsYXllci5uYW1lLFxuICAgICAgICB2aXNpYmxlOiBsYXllci52aXNpYmxlLFxuICAgICAgICB4OiBsYXllci54LFxuICAgICAgICB5OiBsYXllci55LFxuICAgICAgICB0eXBlOiBsYXllci50eXBlLFxuICAgICAgICBjaGFyYWN0ZXJzOiBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuY2hhcmFjdGVycyxcbiAgICAgICAgY2hpbGRyZW46IGxheWVyID09PSBudWxsIHx8IGxheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXllci5jaGlsZHJlbixcbiAgICB9KTtcbn07XG5jb25zdCBzZW5kQ3VycmVudFRleHRTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBsZXQgdGV4dExheWVycyA9IFtdO1xuICAgIHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZExheWVyKSA9PiB7XG4gICAgICAgIGlmICghIShzZWxlY3RlZExheWVyID09PSBudWxsIHx8IHNlbGVjdGVkTGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkTGF5ZXIuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRleHRMYXllcnMgPSBzZWxlY3RlZExheWVyLmZpbmRBbGwobiA9PiBuLnR5cGUgPT09ICdURVhUJyk7XG4gICAgICAgICAgICBzZWxlY3RlZFRleHRMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpc1Zpc2libGVOb2RlKGxheWVyKSAmJiBwdXNoVGV4dExheWVyVG9BcnJheShsYXllciwgdGV4dExheWVycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxlY3RlZExheWVyLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgICAgICAgaXNWaXNpYmxlTm9kZShzZWxlY3RlZExheWVyKSAmJiBwdXNoVGV4dExheWVyVG9BcnJheShzZWxlY3RlZExheWVyLCB0ZXh0TGF5ZXJzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6IFwibmV3LXRleHQtc2VsZWN0aW9uXCIsXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHRleHRMYXllcnMsXG4gICAgICAgICAgICBzZWxlY3RlZExheWVyczogc2VsZWN0aW9uXG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5jb25zdCByZ2JUb0hleCA9IChyLCBnLCBiKSA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50VG9IZXggPSAoYykgPT4ge1xuICAgICAgICBjID0gTWF0aC5yb3VuZChjICogMjU1KTtcbiAgICAgICAgbGV0IGhleCA9IGMudG9TdHJpbmcoMTYpO1xuICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/ICcwJyArIGhleCA6IGhleDtcbiAgICB9O1xuICAgIGNvbnN0IGNvbWJpbmVDb21wb25lbnRzID0gKHIsIGcsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuICcjJyArIGNvbXBvbmVudFRvSGV4KHIpICsgY29tcG9uZW50VG9IZXgoZykgKyBjb21wb25lbnRUb0hleChiKTtcbiAgICB9O1xuICAgIHJldHVybiBjb21iaW5lQ29tcG9uZW50cyhyLCBnLCBiKTtcbn07XG5jb25zdCBwdXNoQ29sb3JUb0FycmF5ID0gKGxheWVyLCBjb2xvclR5cGUsIGFycmF5KSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgY29uc3Qgc3R5bGVJZFR5cGUgPSBjb2xvclR5cGUgPT09ICdmaWxscycgPyAnZmlsbFN0eWxlSWQnIDogJ3N0cm9rZVN0eWxlSWQnO1xuICAgIGNvbnN0IGlzU29saWRDb2xvciA9ICgoX2EgPSBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuZmlsbHNbMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50eXBlKSA9PT0gJ1NPTElEJztcbiAgICBjb25zdCBjb2xvcklzSW1hZ2UgPSBjb2xvclR5cGUgPT09ICdmaWxscycgJiYgKChfYiA9IGxheWVyID09PSBudWxsIHx8IGxheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXllci5maWxsc1swXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnR5cGUpID09PSAnSU1BR0UnO1xuICAgIGNvbnN0IGNvbG9ySXNHcmFkaWVudCA9IGNvbG9yVHlwZSA9PT0gJ2ZpbGxzJyAmJiAoKF9jID0gbGF5ZXIgPT09IG51bGwgfHwgbGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheWVyLmZpbGxzWzBdKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudHlwZS5pbmNsdWRlcygnR1JBRElFTlQnKSk7XG4gICAgY29uc3QgY29sb3JJc1Zpc2libGUgPSBsYXllcltjb2xvclR5cGVdWzBdLnZpc2libGU7XG4gICAgaWYgKCFjb2xvcklzSW1hZ2UgJiYgIWNvbG9ySXNHcmFkaWVudCAmJiBjb2xvcklzVmlzaWJsZSAmJiAhbGF5ZXIuaXNDaGlsZE9mSWNvbldpdGhGaWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbG9ySW5IZXggPSAoY29sb3JJblJHQikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJnYlRvSGV4KGNvbG9ySW5SR0IuciwgY29sb3JJblJHQi5nLCBjb2xvckluUkdCLmIpO1xuICAgICAgICB9O1xuICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICAgIGNvbG9ySWQ6IHV1aWQoKSxcbiAgICAgICAgICAgIGxheWVySWQ6IGxheWVyLmxheWVySWQsXG4gICAgICAgICAgICBsYXllck5hbWU6IGxheWVyLm5hbWUsXG4gICAgICAgICAgICBsYXllclR5cGU6IGxheWVyLnR5cGUsXG4gICAgICAgICAgICBjb2xvcjogbGF5ZXJbY29sb3JUeXBlXSxcbiAgICAgICAgICAgIGNvbG9yU3R5bGVJZDogbGF5ZXJbc3R5bGVJZFR5cGVdLFxuICAgICAgICAgICAgaGFzQ29sb3JTdHlsZTogaXNTb2xpZENvbG9yID8gbGF5ZXJbc3R5bGVJZFR5cGVdLmxlbmd0aCA+IDAgOiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICAgICAgICBjb2xvclR5cGU6IGNvbG9yVHlwZS5zbGljZSgwLCAtMSksXG4gICAgICAgICAgICBjb2xvckluSGV4OiBjb2xvckluSGV4KGxheWVyW2NvbG9yVHlwZV1bMF0uY29sb3IpLFxuICAgICAgICB9KTtcbiAgICB9XG59O1xubGV0IGNvbG9yVG9rZW5zID0gW107XG5jb25zdCBnZXRDb2xvclRva2VucyA9IChtYXBUaGVtZXNUb0VhY2hPdGhlcikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IGxpZ2h0VGhlbWVUb2tlbnMgPSB5aWVsZCBQcm9taXNlLmFsbChyYXdMaWdodENvbG9yVG9rZW5zLm1ldGEuc3R5bGVzLm1hcCgoc3R5bGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZSksIHsgdGhlbWU6ICdsaWdodCcgfSk7XG4gICAgfSkpKTtcbiAgICBsZXQgZGFya1RoZW1lVG9rZW5zID0geWllbGQgUHJvbWlzZS5hbGwocmF3RGFya0NvbG9yVG9rZW5zLm1ldGEuc3R5bGVzLm1hcCgoc3R5bGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZSksIHsgdGhlbWU6ICdkYXJrJyB9KTtcbiAgICB9KSkpO1xuICAgIGlmIChtYXBUaGVtZXNUb0VhY2hPdGhlcikge1xuICAgICAgICBsaWdodFRoZW1lVG9rZW5zID0gbGlnaHRUaGVtZVRva2Vucy5tYXAodG9rZW4gPT4ge1xuICAgICAgICAgICAgY29uc3QgZGFya1RoZW1lVG9rZW4gPSBkYXJrVGhlbWVUb2tlbnMuZmlsdGVyKGRhcmtUb2tlbiA9PiB0b2tlbi5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGRhcmtUb2tlbi5uYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdG9rZW4pLCB7IGRhcmtUaGVtZVRva2VuOiBkYXJrVGhlbWVUb2tlblswXS5rZXkgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkYXJrVGhlbWVUb2tlbnMgPSBkYXJrVGhlbWVUb2tlbnMubWFwKHRva2VuID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpZ2h0VGhlbWVUb2tlbiA9IGxpZ2h0VGhlbWVUb2tlbnMuZmlsdGVyKGxpZ2h0VG9rZW4gPT4gdG9rZW4ubmFtZS50b0xvd2VyQ2FzZSgpID09PSBsaWdodFRva2VuLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlbiksIHsgbGlnaHRUaGVtZVRva2VuOiBsaWdodFRoZW1lVG9rZW5bMF0ua2V5IH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgYWxsQ29sb3JUb2tlbnMgPSBsaWdodFRoZW1lVG9rZW5zLmNvbmNhdChkYXJrVGhlbWVUb2tlbnMpO1xuICAgIGNvbnN0IHRlbXBSZWN0YW5nbGUgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICBjb2xvclRva2VucyA9IHlpZWxkIFByb21pc2UuYWxsKGFsbENvbG9yVG9rZW5zLm1hcCgoc3R5bGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0ZW1wUmVjdGFuZ2xlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvbG9yU3R5bGVXaXRoSGV4ID0ge307XG4gICAgICAgIGNvbnN0IGltcG9ydGVkU3R5bGUgPSB5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoc3R5bGUua2V5KTtcbiAgICAgICAgdGVtcFJlY3RhbmdsZS5maWxsU3R5bGVJZCA9IGltcG9ydGVkU3R5bGUuaWQ7XG4gICAgICAgIGlmICh0ZW1wUmVjdGFuZ2xlLmZpbGxzWzBdLmNvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbG9yU3R5bGVXaXRoSGV4ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZSksIHsgaGV4OiByZ2JUb0hleCh0ZW1wUmVjdGFuZ2xlLmZpbGxzWzBdLmNvbG9yLnIsIHRlbXBSZWN0YW5nbGUuZmlsbHNbMF0uY29sb3IuZywgdGVtcFJlY3RhbmdsZS5maWxsc1swXS5jb2xvci5iKSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9yU3R5bGVXaXRoSGV4ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZSksIHsgaGV4OiAnTm9uZScgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbG9yU3R5bGVXaXRoSGV4O1xuICAgIH0pKSk7XG4gICAgdGVtcFJlY3RhbmdsZS5yZW1vdmUoKTtcbn0pO1xuY29uc3QgZ2V0Q29sb3JTdGF0cyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHlpZWxkIGdldENvbG9yVG9rZW5zKHRydWUpO1xuICAgIGNvbnN0IGdldFJhd0xheWVyc1dpdGhDb2xvciA9ICgpID0+IHtcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgY29uc3QgcmVsZXZhbnRMYXllcnMgPSBzZWxlY3Rpb24ubWFwKChzZWxlY3RlZExheWVyKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBsZXQgb3V0cHV0Rm9yTGF5ZXJzV2l0aENoaWxkcmVuID0gW107XG4gICAgICAgICAgICBjb25zdCBpc1JlbGV2YW50TGF5ZXIgPSAobikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjY2VwdGFibGVOb2RldHlwZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICdFTExJUFNFJyxcbiAgICAgICAgICAgICAgICAgICAgJ0ZSQU1FJyxcbiAgICAgICAgICAgICAgICAgICAgJ0dST1VQJyxcbiAgICAgICAgICAgICAgICAgICAgJ0NPTVBPTkVOVCcsXG4gICAgICAgICAgICAgICAgICAgICdJTlNUQU5DRScsXG4gICAgICAgICAgICAgICAgICAgICdMSU5FJyxcbiAgICAgICAgICAgICAgICAgICAgJ1BPTFlHT04nLFxuICAgICAgICAgICAgICAgICAgICAnUkVDVEFOR0xFJyxcbiAgICAgICAgICAgICAgICAgICAgJ1NIQVBFX1dJVEhfVEVYVCcsXG4gICAgICAgICAgICAgICAgICAgICdTVEFSJyxcbiAgICAgICAgICAgICAgICAgICAgJ1RFWFQnLFxuICAgICAgICAgICAgICAgICAgICAnQk9PTEVBTl9PUEVSQVRJT04nXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBsZXQgaGFzRmlsbCA9IFwiZmlsbHNcIiBpbiBuICYmIChuID09PSBudWxsIHx8IG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG4uZmlsbHNbMF0pICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgbGV0IGhhc1N0cm9rZSA9IFwic3Ryb2tlc1wiIGluIG4gJiYgKG4gPT09IG51bGwgfHwgbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbi5zdHJva2VzWzBdKSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0ZpbGxPclN0cm9rZSA9IGhhc0ZpbGwgfHwgaGFzU3Ryb2tlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVJc1ZhbGlkTm9kZVR5cGUgPSBhY2NlcHRhYmxlTm9kZXR5cGVzLnNvbWUoKG5vZGVUeXBlKSA9PiBuLnR5cGUgPT09IG5vZGVUeXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZUlzVmFsaWROb2RlVHlwZSAmJiBoYXNGaWxsT3JTdHJva2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRMYXllckhhc0NoaWxkcmVuID0gJ2ZpbmRBbGwnIGluIHNlbGVjdGVkTGF5ZXIgJiZcbiAgICAgICAgICAgICAgICAoKF9hID0gc2VsZWN0ZWRMYXllciA9PT0gbnVsbCB8fCBzZWxlY3RlZExheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZExheWVyLmNoaWxkcmVuKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSA+IDA7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRMYXllckhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaXNSZWxldmFudExheWVyKHNlbGVjdGVkTGF5ZXIpO1xuICAgICAgICAgICAgICAgIG91dHB1dEZvckxheWVyc1dpdGhDaGlsZHJlbiA9IHNlbGVjdGVkTGF5ZXIuZmluZEFsbCgobikgPT4gaXNSZWxldmFudExheWVyKG4pKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUmVsZXZhbnRMYXllcihzZWxlY3RlZExheWVyKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLm91dHB1dEZvckxheWVyc1dpdGhDaGlsZHJlbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3NlbGVjdGVkTGF5ZXIsIC4uLm91dHB1dEZvckxheWVyc1dpdGhDaGlsZHJlbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNSZWxldmFudExheWVyKHNlbGVjdGVkTGF5ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtzZWxlY3RlZExheWVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBvdXRwdXQgPSByZWxldmFudExheWVycy5mbGF0KCk7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dC5maWx0ZXIobGF5ZXIgPT4gaXNWaXNpYmxlTm9kZShsYXllcikpO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG4gICAgY29uc3QgcmF3TGF5ZXJzV2l0aENvbG9yID0gZ2V0UmF3TGF5ZXJzV2l0aENvbG9yKCk7XG4gICAgY29uc3QgbGF5ZXJzV2l0aENvbG9yID0gcmF3TGF5ZXJzV2l0aENvbG9yLm1hcCgobGF5ZXIpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgaGFzRmlsbCA9IFwiZmlsbHNcIiBpbiBsYXllciAmJiBsYXllci5maWxsc1swXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBoYXNTdHJva2UgPSBcInN0cm9rZXNcIiBpbiBsYXllciAmJiBsYXllci5zdHJva2VzWzBdICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGhhc0ZpbGxBbmRTdHJva2UgPSBoYXNGaWxsICYmIGhhc1N0cm9rZTtcbiAgICAgICAgY29uc3QgaXNDaGlsZE9mSWNvbiA9IGxheWVyLnBhcmVudC50eXBlID09PSAnQk9PTEVBTl9PUEVSQVRJT04nO1xuICAgICAgICBjb25zdCBwYXJlbnRJY29uSGFzRmlsbCA9ICgoX2IgPSAoX2EgPSBsYXllci5wYXJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5maWxscykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmxlbmd0aCkgPiAwO1xuICAgICAgICBjb25zdCBpc0NoaWxkT2ZJY29uV2l0aEZpbGwgPSBpc0NoaWxkT2ZJY29uICYmIHBhcmVudEljb25IYXNGaWxsO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGF5ZXJJZDogbGF5ZXIuaWQsXG4gICAgICAgICAgICBuYW1lOiBsYXllci5uYW1lLFxuICAgICAgICAgICAgZmlsbHM6IFwiZmlsbHNcIiBpbiBsYXllciAmJiBsYXllci5maWxscyxcbiAgICAgICAgICAgIHN0cm9rZXM6IFwic3Ryb2tlc1wiIGluIGxheWVyICYmIGxheWVyLnN0cm9rZXMsXG4gICAgICAgICAgICBmaWxsU3R5bGVJZDogXCJmaWxsU3R5bGVJZFwiIGluIGxheWVyICYmIGxheWVyLmZpbGxTdHlsZUlkLFxuICAgICAgICAgICAgc3Ryb2tlU3R5bGVJZDogXCJzdHJva2VTdHlsZUlkXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuc3Ryb2tlU3R5bGVJZCxcbiAgICAgICAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICAgICAgICB0eXBlOiBsYXllci50eXBlLFxuICAgICAgICAgICAgaGFzRmlsbDogaGFzRmlsbCxcbiAgICAgICAgICAgIGhhc1N0cm9rZTogaGFzU3Ryb2tlLFxuICAgICAgICAgICAgaGFzRmlsbEFuZFN0cm9rZTogaGFzRmlsbEFuZFN0cm9rZSxcbiAgICAgICAgICAgIGlzQ2hpbGRPZkljb25XaXRoRmlsbDogaXNDaGlsZE9mSWNvbldpdGhGaWxsXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgY29uc3QgYWxsSW5zdGFuY2VzT2ZDb2xvciA9IGxheWVyc1dpdGhDb2xvclxuICAgICAgICAubWFwKChsYXllcikgPT4ge1xuICAgICAgICBsZXQgdGVtcENvbG9ycyA9IFtdO1xuICAgICAgICBpZiAobGF5ZXIuaGFzRmlsbEFuZFN0cm9rZSkge1xuICAgICAgICAgICAgcHVzaENvbG9yVG9BcnJheShsYXllciwgJ2ZpbGxzJywgdGVtcENvbG9ycyk7XG4gICAgICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyLCAnc3Ryb2tlcycsIHRlbXBDb2xvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxheWVyLmhhc0ZpbGwpIHtcbiAgICAgICAgICAgIHB1c2hDb2xvclRvQXJyYXkobGF5ZXIsICdmaWxscycsIHRlbXBDb2xvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxheWVyLmhhc1N0cm9rZSkge1xuICAgICAgICAgICAgcHVzaENvbG9yVG9BcnJheShsYXllciwgJ3N0cm9rZXMnLCB0ZW1wQ29sb3JzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcENvbG9ycztcbiAgICB9KVxuICAgICAgICAuZmxhdCgpO1xuICAgIGNvbnN0IGRvZXNDb2xvck1hdGNoQW55T25lQ29yZVN0eWxlID0gKGNvbG9ySW5IZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbG9yVG9rZW5zLnNvbWUoKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9ySW5IZXggPT09ICgoX2IgPSAoX2EgPSBzdHlsZSA9PT0gbnVsbCB8fCBzdHlsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3R5bGUuY29sb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb2xvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmhleCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9O1xuICAgIGNvbnN0IGRvZXNLZXlNYXRjaEFueU9uZUNvcmVDb2xvclN0eWxlS2V5ID0gKGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gY29sb3JUb2tlbnMuc29tZSgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBrZXkuaW5jbHVkZXMoc3R5bGUua2V5KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH07XG4gICAgY29uc3QgY29sb3JzV2l0aENvbG9yU3R5bGUgPSBhbGxJbnN0YW5jZXNPZkNvbG9yLmZpbHRlcigoY29sb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbG9yLmhhc0NvbG9yU3R5bGU7XG4gICAgfSk7XG4gICAgY29uc3QgY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUgPSBhbGxJbnN0YW5jZXNPZkNvbG9yLmZpbHRlcigoY29sb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbG9yVG9rZW5zLnNvbWUoKG9uZUNvcmVDb2xvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmNvbG9yU3R5bGVJZC5pbmNsdWRlcyhvbmVDb3JlQ29sb3Iua2V5KTtcbiAgICAgICAgfSk7XG4gICAgfSkubWFwKGNvbG9yID0+IHtcbiAgICAgICAgbGV0IG9uZUNvcmVUb2tlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29sb3JUb2tlbnMuZm9yRWFjaCgob25lQ29yZUNvbG9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29sb3IuY29sb3JTdHlsZUlkLmluY2x1ZGVzKG9uZUNvcmVDb2xvci5rZXkpKSB7XG4gICAgICAgICAgICAgICAgb25lQ29yZVRva2VuID0gb25lQ29yZUNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29sb3IpLCB7IHRva2VuOiBvbmVDb3JlVG9rZW4gfSk7XG4gICAgfSk7XG4gICAgY29uc3QgY29sb3JzTm90VXNpbmdPbmVDb3JlQ29sb3JTdHlsZSA9IGFsbEluc3RhbmNlc09mQ29sb3IuZmlsdGVyKChjb2xvcikgPT4ge1xuICAgICAgICByZXR1cm4gIWNvbG9yVG9rZW5zLnNvbWUoKG9uZUNvcmVDb2xvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmNvbG9yU3R5bGVJZC5pbmNsdWRlcyhvbmVDb3JlQ29sb3Iua2V5KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3Qgb25lQ29yZUNvbG9yU3R5bGVDb3ZlcmFnZSA9IGAkeygoY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUubGVuZ3RoIC8gYWxsSW5zdGFuY2VzT2ZDb2xvci5sZW5ndGgpICogMTAwKS50b0ZpeGVkKDIpfSVgO1xuICAgIGNvbnN0IGlkc09mQWxsSW5zdGFuY2VzT2ZDb2xvciA9IGFsbEluc3RhbmNlc09mQ29sb3IubWFwKChjb2xvcikgPT4gY29sb3IuY29sb3JJZCk7XG4gICAgY29uc3QgY29sb3JTdGF0cyA9IHtcbiAgICAgICAgc2VsZWN0ZWRMYXllcnNXaXRoQ29sb3I6IHJhd0xheWVyc1dpdGhDb2xvcixcbiAgICAgICAgYWxsSW5zdGFuY2VzT2ZDb2xvcjogYWxsSW5zdGFuY2VzT2ZDb2xvcixcbiAgICAgICAgY29sb3JzV2l0aENvbG9yU3R5bGU6IGNvbG9yc1dpdGhDb2xvclN0eWxlLFxuICAgICAgICBjb2xvcnNVc2luZ09uZUNvcmVTdHlsZTogY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUsXG4gICAgICAgIGNvbG9yc05vdFVzaW5nT25lQ29yZUNvbG9yU3R5bGU6IGNvbG9yc05vdFVzaW5nT25lQ29yZUNvbG9yU3R5bGUsXG4gICAgICAgIG9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2U6IG9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2UsXG4gICAgICAgIGlkc09mQWxsSW5zdGFuY2VzT2ZDb2xvcjogaWRzT2ZBbGxJbnN0YW5jZXNPZkNvbG9yLFxuICAgIH07XG4gICAgcmV0dXJuIGNvbG9yU3RhdHM7XG59KTtcbmNvbnN0IHNlbGVjdEFuZFpvb21Ub0xheWVyID0gKGxheWVySWQpID0+IHtcbiAgICBjb25zdCBsYXllciA9IGZpZ21hLmdldE5vZGVCeUlkKGxheWVySWQpO1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtsYXllcl07XG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtsYXllcl0pO1xufTtcbmxldCB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID0gdW5kZWZpbmVkO1xuY29uc3Qgc3dpdGNoVG9EYXJrVGhlbWUgPSAoY2xvc2VBZnRlclJ1bikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiAmJiAodGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiA9PT0gbnVsbCB8fCB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uLmNhbmNlbCgpKTtcbiAgICAgICAgZmlnbWEubm90aWZ5KFwiU2VsZWN0IHNvbWUgbGF5ZXJzIGJlZm9yZSBjaG9vc2luZyBhIHRoZW1lXCIsIHsgZXJyb3I6IHRydWUgfSk7XG4gICAgICAgIHJldHVybiBjbG9zZUFmdGVyUnVuICYmIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfVxuICAgIHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24gJiYgKHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24gPT09IG51bGwgfHwgdGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbi5jYW5jZWwoKSk7XG4gICAgY29uc3QgbG9hZGluZ05vdGlmaWNhdGlvbiA9IGZpZ21hLm5vdGlmeShcIkNvbnZlcnRpbmcgc2VsZWN0aW9uIHRvIGRhcmsgbW9kZS4uLlwiKTtcbiAgICBjb25zdCBjb2xvclN0YXRzID0geWllbGQgZ2V0Q29sb3JTdGF0cygpO1xuICAgIGZvciAoY29uc3QgY29sb3Igb2YgY29sb3JTdGF0cy5jb2xvcnNVc2luZ09uZUNvcmVTdHlsZSkge1xuICAgICAgICBpZiAoY29sb3IudG9rZW4udGhlbWUgPT09ICdsaWdodCcpIHtcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhjb2xvci50b2tlbi5kYXJrVGhlbWVUb2tlbikudGhlbihpbXBvcnRlZCA9PiB7XG4gICAgICAgICAgICAgICAgZmlnbWEuZ2V0Tm9kZUJ5SWQoY29sb3IubGF5ZXJJZClbYCR7Y29sb3IuY29sb3JUeXBlfVN0eWxlSWRgXSA9IGltcG9ydGVkLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZGluZ05vdGlmaWNhdGlvbi5jYW5jZWwoKTtcbiAgICB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID0gZmlnbWEubm90aWZ5KFwi8J+MmSBTZWxlY3Rpb24gc2V0IHRvIGRhcmsgbW9kZVwiKTtcbiAgICBjbG9zZUFmdGVyUnVuICYmIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59KTtcbmNvbnN0IHN3aXRjaFRvTGlnaHRUaGVtZSA9IChjbG9zZUFmdGVyUnVuKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uICYmICh0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID09PSBudWxsIHx8IHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24uY2FuY2VsKCkpO1xuICAgICAgICBmaWdtYS5ub3RpZnkoXCJTZWxlY3Qgc29tZSBsYXllcnMgYmVmb3JlIGNob29zaW5nIGEgdGhlbWVcIiwgeyBlcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuIGNsb3NlQWZ0ZXJSdW4gJiYgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgdGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiAmJiAodGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiA9PT0gbnVsbCB8fCB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uLmNhbmNlbCgpKTtcbiAgICBjb25zdCBsb2FkaW5nTm90aWZpY2F0aW9uID0gZmlnbWEubm90aWZ5KFwiQ29udmVydGluZyBzZWxlY3Rpb24gdG8gbGlnaHQgbW9kZS4uLlwiKTtcbiAgICBjb25zdCBjb2xvclN0YXRzID0geWllbGQgZ2V0Q29sb3JTdGF0cygpO1xuICAgIGZvciAoY29uc3QgY29sb3Igb2YgY29sb3JTdGF0cy5jb2xvcnNVc2luZ09uZUNvcmVTdHlsZSkge1xuICAgICAgICBpZiAoY29sb3IudG9rZW4udGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgICAgICAgeWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGNvbG9yLnRva2VuLmxpZ2h0VGhlbWVUb2tlbikudGhlbihpbXBvcnRlZCA9PiB7XG4gICAgICAgICAgICAgICAgZmlnbWEuZ2V0Tm9kZUJ5SWQoY29sb3IubGF5ZXJJZClbYCR7Y29sb3IuY29sb3JUeXBlfVN0eWxlSWRgXSA9IGltcG9ydGVkLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZGluZ05vdGlmaWNhdGlvbi5jYW5jZWwoKTtcbiAgICB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID0gZmlnbWEubm90aWZ5KFwi8J+UhiBTZWxlY3Rpb24gc2V0IHRvIGxpZ2h0IG1vZGVcIik7XG4gICAgY2xvc2VBZnRlclJ1biAmJiBmaWdtYS5jbG9zZVBsdWdpbigpO1xufSk7XG5sZXQgY3VzdG9tRXZlbnREYXRhID0ge1xuICAgIGZpbGVOYW1lOiBmaWdtYS5jdXJyZW50UGFnZS5wYXJlbnQubmFtZSxcbiAgICBmaWxlS2V5OiBmaWdtYS5maWxlS2V5LFxuICAgIFwiVXNlciBOYW1lXCI6IGZpZ21hLmN1cnJlbnRVc2VyLm5hbWUsXG4gICAgXCJVc2VyIEF2YXRhclwiOiBmaWdtYS5jdXJyZW50VXNlci5waG90b1VybCxcbiAgICBcIlVzZXIgSURcIjogZmlnbWEuY3VycmVudFVzZXIuaWQsXG4gICAgXCJTZXNzaW9uIElEXCI6IGZpZ21hLmN1cnJlbnRVc2VyLnNlc3Npb25JZCxcbn07XG5jb25zdCBuYXZpZ2F0ZVRvID0gKHNjcmVlbikgPT4ge1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJmaWdtYS1jb21tYW5kXCIsIG1lc3NhZ2U6IE9iamVjdC5hc3NpZ24oeyBvcGVuZWRUbzogc2NyZWVuIH0sIGN1c3RvbUV2ZW50RGF0YSlcbiAgICB9KTtcbn07XG5zd2l0Y2ggKGZpZ21hLmNvbW1hbmQpIHtcbiAgICBjYXNlIFwib3Blbi1ob21lXCI6XG4gICAgICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogMzAwLCBoZWlnaHQ6IDQ0OCB9KTtcbiAgICAgICAgbmF2aWdhdGVUbygnb3Blbi1ob21lJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvcGVuLXRhYmxlLWNyZWF0b3JcIjpcbiAgICAgICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAzMDAsIGhlaWdodDogNDQ4IH0pO1xuICAgICAgICBuYXZpZ2F0ZVRvKCdvcGVuLXRhYmxlLWNyZWF0b3InKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInRoZW1lLXN3aXRjaGVyLXRvLWxpZ2h0XCI6XG4gICAgICAgIHN3aXRjaFRvTGlnaHRUaGVtZSh0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInRoZW1lLXN3aXRjaGVyLXRvLWRhcmtcIjpcbiAgICAgICAgc3dpdGNoVG9EYXJrVGhlbWUodHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvcGVuLWxhbmd1YWdlLWxpbnRlclwiOlxuICAgICAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDQ3NSwgaGVpZ2h0OiA1MDAgfSk7XG4gICAgICAgIG5hdmlnYXRlVG8oJ29wZW4tbGFuZ3VhZ2UtbGludGVyJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvcGVuLWNvbG9yLWxpbnRlclwiOlxuICAgICAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDQ3NSwgaGVpZ2h0OiA1MDAgfSk7XG4gICAgICAgIG5hdmlnYXRlVG8oJ29wZW4tY29sb3ItbGludGVyJyk7XG4gICAgICAgIGJyZWFrO1xufVxuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKG1zZy50eXBlID09PSBcIm5hdmlnYXRlLXRvLXRhYlwiKSB7XG4gICAgICAgIHN3aXRjaCAobXNnLnRhYkNsaWNrZWQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgICAgICAgICAgdWlTaXplID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0OFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKHVpU2l6ZS53aWR0aCwgdWlTaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbygnb3Blbi1ob21lJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGFibGUtY3JlYXRvclwiOlxuICAgICAgICAgICAgICAgIHVpU2l6ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NDhcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSh1aVNpemUud2lkdGgsIHVpU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG8oJ29wZW4tdGFibGUtY3JlYXRvcicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxhbmd1YWdlLWxpbnRlclwiOlxuICAgICAgICAgICAgICAgIHNlbmRDdXJyZW50VGV4dFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIHVpU2l6ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ3NSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSh1aVNpemUud2lkdGgsIHVpU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG8oJ29wZW4tbGFuZ3VhZ2UtbGludGVyJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY29sb3ItbGludGVyXCI6XG4gICAgICAgICAgICAgICAgdWlTaXplID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDc1LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKHVpU2l6ZS53aWR0aCwgdWlTaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbygnb3Blbi1jb2xvci1saW50ZXInKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiaW5pdGlhbGl6ZS1zZWxlY3Rpb25cIikge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcImluaXRpYWwtc2VsZWN0aW9uXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2Nsb3NlLXBsdWdpbicpIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcImNyZWF0ZS10YWJsZVwiKSB7XG4gICAgICAgIGNyZWF0ZVRhYmxlKG1zZyk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3J1bi1sYW5ndWFnZS1saW50ZXInKSB7XG4gICAgICAgIHNlbmRDdXJyZW50VGV4dFNlbGVjdGlvbigpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdyZXF1ZXN0LWxvY2FsLWN1c3RvbS1kaWN0aW9uYXJ5Jykge1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImxvY2FsLWN1c3RvbS1kaWN0aW9uYXJ5LXJldHJpZXZlZFwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdCA/IHJlc3VsdCA6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2FkZC10by1kaWN0aW9uYXJ5Jykge1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdDdXN0b21EaWN0aW9uYXJ5ID0gcmVzdWx0ID8gcmVzdWx0IDogW107XG4gICAgICAgICAgICBuZXdDdXN0b21EaWN0aW9uYXJ5LnB1c2gobXNnLndvcmRUb0FkZCk7XG4gICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIsIG5ld0N1c3RvbURpY3Rpb25hcnkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnZ2V0LXNhbXBsZS10ZXh0Jykge1xuICAgICAgICBjb25zdCBzYW1wbGVUZXh0ID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic2FtcGxlLXRleHRcIiwgbWVzc2FnZTogc2FtcGxlVGV4dCB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnc2FtcGxlLXRleHQtY2hhbmdlZCcpIHtcbiAgICAgICAgc2VsZWN0QW5kWm9vbVRvTGF5ZXIobXNnLmFjdGl2ZU5vZGVJZCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3VwZGF0ZS1zb3VyY2UtdGV4dCcpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlVGV4dExheWVyID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmxheWVySWQpO1xuICAgICAgICBsZXQgZm9udE5hbWUgPSBhY3RpdmVUZXh0TGF5ZXIuZm9udE5hbWU7XG4gICAgICAgIGlmIChmb250TmFtZSA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKGFjdGl2ZVRleHRMYXllci5nZXRSYW5nZUFsbEZvbnROYW1lcygwLCBhY3RpdmVUZXh0TGF5ZXIuY2hhcmFjdGVycy5sZW5ndGgpLm1hcChmaWdtYS5sb2FkRm9udEFzeW5jKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGZvbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmVUZXh0TGF5ZXIuZGVsZXRlQ2hhcmFjdGVycygwLCBhY3RpdmVUZXh0TGF5ZXIuY2hhcmFjdGVycy5sZW5ndGgpO1xuICAgICAgICBhY3RpdmVUZXh0TGF5ZXIuaW5zZXJ0Q2hhcmFjdGVycygwLCBtc2cudXBkYXRlZFRleHQpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic291cmNlLXRleHQtdXBkYXRlZFwiLCBtZXNzYWdlOiBtc2cudXBkYXRlZFRleHQgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3RleHQtbGludGVkJykge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwidGV4dC1saW50ZWRcIiwgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIGN1c3RvbUV2ZW50RGF0YSxcbiAgICAgICAgICAgICAgICBtaW5pbWFsUmVwb3J0OiBtc2cubWluaW1hbFJlcG9ydCxcbiAgICAgICAgICAgICAgICBmdWxsUmVwb3J0OiBtc2cuZnVsbFJlcG9ydFxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG4gICAgY29uc3Qgc2VuZENvbG9yRGF0YSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBnZXRDb2xvclRva2VucyhmYWxzZSk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6ICdjb2xvci1zdGF0cycsXG4gICAgICAgICAgICBtZXNzYWdlOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbUV2ZW50RGF0YSksIHsgY29sb3JTdGF0czogeWllbGQgZ2V0Q29sb3JTdGF0cygpLCBjb2xvclRva2VuczogY29sb3JUb2tlbnMsIHNlbGVjdGlvbk1hZGU6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPiAwIH0pLFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAobXNnLnR5cGUgPT09ICdydW4tY29sb3ItbGludGVyJykge1xuICAgICAgICBzZW5kQ29sb3JEYXRhKCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3NlbGVjdC1sYXllcicpIHtcbiAgICAgICAgc2VsZWN0QW5kWm9vbVRvTGF5ZXIobXNnLmxheWVySWQpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdhcHBseS1jb2xvci1zdHlsZScpIHtcbiAgICAgICAgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKG1zZy5jb2xvclN0eWxlS2V5KS50aGVuKGltcG9ydGVkID0+IHtcbiAgICAgICAgICAgIGZpZ21hLmdldE5vZGVCeUlkKG1zZy5sYXllcklkKVtgJHttc2cuY29sb3JUeXBlfVN0eWxlSWRgXSA9IGltcG9ydGVkLmlkO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2xvci1yZXBsYWNlZCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXN0b21FdmVudERhdGEpLCB7IGxheWVySWQ6IG1zZy5sYXllcklkLCBsYXllck5hbWU6IGZpZ21hLmdldE5vZGVCeUlkKG1zZy5sYXllcklkKS5uYW1lLCBvcmlnaW5hbENvbG9yOiBtc2cub3JpZ2luYWxDb2xvciwgY29sb3JTdHlsZUtleTogbXNnLmNvbG9yU3R5bGVLZXksIGNvbG9yU3R5bGVOYW1lOiBtc2cuY29sb3JTdHlsZU5hbWUsIGNvbG9yU3R5bGVDb2xvcjogbXNnLmNvbG9yU3R5bGVDb2xvciB9KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcInJlc2l6ZVwiKSB7XG4gICAgICAgIGZpZ21hLnVpLnJlc2l6ZShtc2cuc2l6ZS54ID49IHVpU2l6ZS53aWR0aCA/IG1zZy5zaXplLnggOiB1aVNpemUud2lkdGgsIG1zZy5zaXplLnkgPj0gdWlTaXplLmhlaWdodCA/IG1zZy5zaXplLnkgOiB1aVNpemUuaGVpZ2h0KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAndGhlbWUtc3dpdGNoZXItdG8tZGFyaycpIHtcbiAgICAgICAgc3dpdGNoVG9EYXJrVGhlbWUoKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAndGhlbWUtc3dpdGNoZXItdG8tbGlnaHQnKSB7XG4gICAgICAgIHN3aXRjaFRvTGlnaHRUaGVtZSgpO1xuICAgIH1cbn0pO1xuZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3Rpb25jaGFuZ2UgZXZlbnQgd2FzIGZpcmVkJyk7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInNlbGVjdGlvbi1jaGFuZ2VkXCIsXG4gICAgICAgIG1lc3NhZ2U6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblxuICAgIH0pO1xufSk7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9