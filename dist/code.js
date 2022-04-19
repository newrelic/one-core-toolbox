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
        const hasFill = "fills" in layer && layer.fills[0] !== undefined;
        const hasStroke = "strokes" in layer && layer.strokes[0] !== undefined;
        const hasFillAndStroke = hasFill && hasStroke;
        const isChildOfIcon = layer.parent.type === 'BOOLEAN_OPERATION';
        let parentIconHasFill = false;
        const isChildOfIconWithFill = isChildOfIcon && parentIconHasFill;
        const checkParentForFill = () => {
            if ("fills" in layer.parent) {
                parentIconHasFill = layer.parent.fills.length > 0;
            }
        };
        checkParentForFill();
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
const switchToTheme = (theme, closeAfterRun = false) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (closeAfterRun) {
        figma.showUI(__html__, { width: 70, height: 0 });
    }
    if (figma.currentPage.selection.length === 0) {
        themeSwitchedNotification && (themeSwitchedNotification === null || themeSwitchedNotification === void 0 ? void 0 : themeSwitchedNotification.cancel());
        figma.notify("Select some layers before choosing a theme", { error: true });
        return closeAfterRun && figma.closePlugin();
    }
    themeSwitchedNotification && (themeSwitchedNotification === null || themeSwitchedNotification === void 0 ? void 0 : themeSwitchedNotification.cancel());
    const loadingNotification = figma.notify(`Converting selection to ${theme} mode...`);
    const colorStats = yield getColorStats();
    for (const color of colorStats.colorsUsingOneCoreStyle) {
        if ("theme" in color.token && ((_a = color.token) === null || _a === void 0 ? void 0 : _a.theme) !== theme) {
            const keyOfTokenInOppositeTheme = theme === 'light' ?
                color.token.lightThemeToken :
                color.token.darkThemeToken;
            yield figma.importStyleByKeyAsync(keyOfTokenInOppositeTheme).then(imported => {
                figma.getNodeById(color.layerId)[`${color.colorType}StyleId`] = imported.id;
            });
        }
    }
    loadingNotification.cancel();
    themeSwitchedNotification = figma.notify(`${theme === 'light' ? '🔆' : '🌙'} Selection set to ${theme} mode`);
    figma.ui.postMessage({ type: "theme-switched", message: Object.assign({ switchedTo: theme, closeAfterRun }, customEventData)
    });
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
        switchToTheme('light', true);
        break;
    case "theme-switcher-to-dark":
        switchToTheme('dark', true);
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
        switchToTheme('dark');
    }
    if (msg.type === 'theme-switcher-to-light') {
        switchToTheme('light');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvYXBwbHlNYXRyaXhUb1BvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2Nsb25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2NvbnZlcnRDb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9maW5kTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRBbGxGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRCb3VuZGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvZ2V0Q1NTU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldE5vZGVJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRQYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldFJlbGF0aXZlUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaGFzQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNQYXJ0T2ZJbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1BhcnRPZk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNUeXBlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1Zpc2libGVOb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2xvYWRGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9sb2FkVW5pcXVlRm9udHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvbm9kZVRvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3BhcnNlVGV4dFN0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3NldENoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvdG9wTGV2ZWxGcmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jbG9uZURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcUJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcVdpdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdHJpeC1pbnZlcnNlL21hdHJpeC1pbnZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkLXJhbmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2hDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0VBQW9FO0FBQ3pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILGdDQUFnQyxFQUFFLElBQUksRUFBRTtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzVGYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLDRDQUE0QyxtQkFBTyxDQUFDLHVFQUFnQjs7QUFFcEUsMEJBQTBCLG1CQUFPLENBQUMscUdBQXNCOztBQUV4RCxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLDRDQUE0QyxtQkFBTyxDQUFDLHVFQUFnQjs7QUFFcEUsMEJBQTBCLG1CQUFPLENBQUMscUdBQXNCOztBQUV4RCxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3QmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSw0Q0FBNEMsbUJBQU8sQ0FBQyx1RUFBZ0I7O0FBRXBFLDBCQUEwQixtQkFBTyxDQUFDLHFHQUFzQjs7QUFFeEQsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLFFBQVEsbUJBQU8sQ0FBQyw4REFBSTs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7OztBQ3pDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLDJDQUEyQyxtQkFBTyxDQUFDLGdFQUFvQjs7QUFFdkUsMEJBQTBCLG1CQUFPLENBQUMscUdBQXNCOztBQUV4RCxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzSEFBc0g7O0FBRXRIO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVIscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNyRmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxtQ0FBbUMsbUJBQU8sQ0FBQyxnREFBWTs7QUFFdkQsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCLEdBQUc7QUFDSCxjQUFjLE1BQU07QUFDcEIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILGNBQWMsTUFBTTtBQUNwQixHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQTZDLEdBQUcsNENBQTRDO0FBQ2xIO0FBQ0EsRUFBRTs7O0FBR0Ysd0M7Ozs7Ozs7Ozs7OztBQ3pGYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNaYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLGtCQUFrQixtQkFBTyxDQUFDLHFGQUFjOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xCYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLFFBQVEsbUJBQU8sQ0FBQywrREFBSzs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsT0FBTztBQUMvRDtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEOzs7Ozs7Ozs7Ozs7QUNsRGE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQzs7Ozs7Ozs7Ozs7O0FDeEJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNwQmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3BCYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQzs7Ozs7Ozs7Ozs7O0FDMUVhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcEJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNkYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLDBDQUEwQyxtQkFBTyxDQUFDLHVGQUFlOztBQUVqRSx3Q0FBd0MsbUJBQU8sQ0FBQyxtRkFBYTs7QUFFN0Qsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ25CYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsbUJBQU8sQ0FBQywwREFBaUI7O0FBRWpFLHlDQUF5QyxtQkFBTyxDQUFDLDREQUFrQjs7QUFFbkUsdUNBQXVDLG1CQUFPLENBQUMsd0RBQWdCOztBQUUvRCwwQ0FBMEMsbUJBQU8sQ0FBQyx1RkFBZTs7QUFFakUsd0NBQXdDLG1CQUFPLENBQUMsbUZBQWE7O0FBRTdELHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdILHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFOztBQUVMLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGFBQWE7QUFDOUI7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzdUYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLHNDQUFzQyxtQkFBTyxDQUFDLHNEQUFlOztBQUU3RCxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0EseUJBQXlCLGdCQUFnQixJQUFJLGVBQWU7QUFDNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSCxvQ0FBb0Msd0JBQXdCLEdBQUcsdUJBQXVCLHFDQUFxQyxvQkFBb0IsR0FBRyxtQkFBbUI7QUFDcks7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUIsSUFBSSxvQkFBb0I7O0FBRTdFO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsZ0JBQWdCLElBQUksZUFBZTtBQUNyRTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLFNBQVMsR0FBRyxFQUFFO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsUUFBUSxPQUFPLElBQUksTUFBTTtBQUM1QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzFNYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNaYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMkNBQTJDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3REFBd0Q7QUFDdEY7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHFCQUFxQixxSEFBcUg7QUFDN0wsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLHVEQUF1RCxxQkFBcUIscU5BQXFOO0FBQ2pTLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7QUN0Z0JELGUiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFwcGx5TWF0cml4VG9Qb2ludCA9IGFwcGx5TWF0cml4VG9Qb2ludDtcblxuZnVuY3Rpb24gYXBwbHlNYXRyaXhUb1BvaW50KG1hdHJpeCwgcG9pbnQpIHtcbiAgcmV0dXJuIFtwb2ludFswXSAqIG1hdHJpeFswXVswXSArIHBvaW50WzFdICogbWF0cml4WzBdWzFdICsgbWF0cml4WzBdWzJdLCBwb2ludFswXSAqIG1hdHJpeFsxXVswXSArIHBvaW50WzFdICogbWF0cml4WzFdWzFdICsgbWF0cml4WzFdWzJdXTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNsb25lO1xuXG4vKipcbiAqICB0aGlzIGZ1bmN0aW9uIHJldHVybnMgY2xvbmUgdGhlIG9iamVjdFxuICovXG5mdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdudW1iZXInIHx8IHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdib29sZWFuJyB8fCB0eXBlID09PSAnc3ltYm9sJyB8fCB2YWwgPT09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKHZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4gdmFsLm1hcChjbG9uZSk7XG4gICAgfSBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbyA9IHt9O1xuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWwpIHtcbiAgICAgICAgb1trZXldID0gY2xvbmUodmFsW2tleV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gIH1cblxuICB0aHJvdyAndW5rbm93bic7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZpZ21hUkdCVG9XZWJSR0IgPSBmaWdtYVJHQlRvV2ViUkdCO1xuZXhwb3J0cy53ZWJSR0JUb0ZpZ21hUkdCID0gd2ViUkdCVG9GaWdtYVJHQjtcbmV4cG9ydHMuZmlnbWFSR0JUb0hleCA9IGZpZ21hUkdCVG9IZXg7XG5leHBvcnRzLmhleFRvRmlnbWFSR0IgPSBoZXhUb0ZpZ21hUkdCO1xuY29uc3QgbmFtZXNSR0IgPSBbJ3InLCAnZycsICdiJ107XG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gY29udmVydHMgZmlnbWEgY29sb3IgdG8gUkdCKEEpIChhcnJheSlcbiAqL1xuLy8gZmlnbWFSR0JUb1dlYlJHQih7cjogMC44ODc0OTk5ODgwNzkwNzEsIGc6IDAuMDcwNTg4MjM4NTM3MzExNTUsIGI6IDAuMDY2NTYyNDczNzczOTU2M30pXG4vLz0+IFsyMjYsIDE4LCAxN11cblxuZnVuY3Rpb24gZmlnbWFSR0JUb1dlYlJHQihjb2xvcikge1xuICBjb25zdCByZ2IgPSBbXTtcbiAgbmFtZXNSR0IuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgIHJnYltpXSA9IE1hdGgucm91bmQoY29sb3JbZV0gKiAyNTUpO1xuICB9KTtcbiAgaWYgKGNvbG9yWydhJ10gIT09IHVuZGVmaW5lZCkgcmdiWzNdID0gTWF0aC5yb3VuZChjb2xvclsnYSddICogMTAwKSAvIDEwMDtcbiAgcmV0dXJuIHJnYjtcbn1cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBjb252ZXJ0cyBSR0IoQSkgY29sb3IgKGFycmF5KSB0byBmaWdtYSBjb2xvclxuICovXG4vLyB3ZWJSR0JUb0ZpZ21hUkdCKFsyMjYsIDE4LCAxN10pXG4vLz0+IHtyOiAwLjg4NjI3NDUwOTgwMzkyMTUsIGc6IDAuMDcwNTg4MjM1Mjk0MTE3NjUsIGI6IDAuMDY2NjY2NjY2NjY2NjY2Njd9XG5cblxuZnVuY3Rpb24gd2ViUkdCVG9GaWdtYVJHQihjb2xvcikge1xuICBjb25zdCByZ2IgPSB7fTtcbiAgbmFtZXNSR0IuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgIHJnYltlXSA9IGNvbG9yW2ldIC8gMjU1O1xuICB9KTtcbiAgaWYgKGNvbG9yWzNdICE9PSB1bmRlZmluZWQpIHJnYlsnYSddID0gY29sb3JbM107XG4gIHJldHVybiByZ2I7XG59XG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gY29udmVydHMgZmlnbWEgY29sb3IgdG8gSEVYIChzdHJpbmcpXG4gKi9cbi8vIGZpZ21hUkdCVG9IZXgoeyByOiAwLCBnOiAwLjEsIGI6IDEgfSlcbi8vPT4gIzAwMWFmZlxuXG5cbmZ1bmN0aW9uIGZpZ21hUkdCVG9IZXgoY29sb3IpIHtcbiAgbGV0IGhleCA9ICcjJztcbiAgY29uc3QgcmdiID0gZmlnbWFSR0JUb1dlYlJHQihjb2xvcik7XG4gIGhleCArPSAoKDEgPDwgMjQpICsgKHJnYlswXSA8PCAxNikgKyAocmdiWzFdIDw8IDgpICsgcmdiWzJdKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG5cbiAgaWYgKHJnYlszXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgYSA9IE1hdGgucm91bmQocmdiWzNdICogMjU1KS50b1N0cmluZygxNik7XG5cbiAgICBpZiAoYS5sZW5ndGggPT0gMSkge1xuICAgICAgaGV4ICs9ICcwJyArIGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhICE9PSAnZmYnKSBoZXggKz0gYTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaGV4O1xufVxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGNvbnZlcnRzIEhFWCBjb2xvciAoc3RyaW5nKSB0byBmaWdtYSBjb2xvclxuICovXG4vLyBoZXhUb0ZpZ21hUkdCKCMwMDFhZmYpXG4vLz0+IHsgcjogMCwgZzogMC4xMDE5NjA3ODQzMTM3MjU0OSwgYjogMSB9XG5cblxuZnVuY3Rpb24gaGV4VG9GaWdtYVJHQihjb2xvcikge1xuICBsZXQgb3BhY2l0eSA9ICcnO1xuICBjb2xvciA9IGNvbG9yLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChjb2xvclswXSA9PT0gJyMnKSBjb2xvciA9IGNvbG9yLnNsaWNlKDEpO1xuXG4gIGlmIChjb2xvci5sZW5ndGggPT09IDMpIHtcbiAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UoLyguKSguKSguKT8vZywgJyQxJDEkMiQyJDMkMycpO1xuICB9IGVsc2UgaWYgKGNvbG9yLmxlbmd0aCA9PT0gOCkge1xuICAgIGNvbnN0IGFyciA9IGNvbG9yLm1hdGNoKC8oLns2fSkoLnsyfSkvKTtcbiAgICBjb2xvciA9IGFyclsxXTtcbiAgICBvcGFjaXR5ID0gYXJyWzJdO1xuICB9XG5cbiAgY29uc3QgbnVtID0gcGFyc2VJbnQoY29sb3IsIDE2KTtcbiAgY29uc3QgcmdiID0gW251bSA+PiAxNiwgbnVtID4+IDggJiAyNTUsIG51bSAmIDI1NV07XG5cbiAgaWYgKG9wYWNpdHkpIHtcbiAgICByZ2IucHVzaChwYXJzZUludChvcGFjaXR5LCAxNikgLyAyNTUpO1xuICAgIHJldHVybiB3ZWJSR0JUb0ZpZ21hUkdCKHJnYik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHdlYlJHQlRvRmlnbWFSR0IocmdiKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5leHRyYWN0SW1hZ2VDcm9wUGFyYW1zID0gZXh0cmFjdEltYWdlQ3JvcFBhcmFtcztcblxudmFyIF9tYXRyaXhJbnZlcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibWF0cml4LWludmVyc2VcIikpO1xuXG52YXIgX2FwcGx5TWF0cml4VG9Qb2ludCA9IHJlcXVpcmUoXCIuL2FwcGx5TWF0cml4VG9Qb2ludFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjYW4gZXh0cmFjdCB0aGUgaW1hZ2UgY3JvcCByb3RhdGlvbiwgc2NhbGUgKC9zaXplKSBhbmQgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHNoYXBlV2lkdGhcbiAqIEBwYXJhbSBzaGFwZUhlaWdodFxuICogQHBhcmFtIHRcbiAqL1xuZnVuY3Rpb24gZXh0cmFjdEltYWdlQ3JvcFBhcmFtcyhzaGFwZVdpZHRoLCBzaGFwZUhlaWdodCwgdCkge1xuICBjb25zdCB0cmFuc2Zvcm0gPSB0Lmxlbmd0aCA9PT0gMiA/IFsuLi50LCBbMCwgMCwgMV1dIDogWy4uLnRdO1xuICBjb25zdCBteEludiA9ICgwLCBfbWF0cml4SW52ZXJzZS5kZWZhdWx0KSh0cmFuc2Zvcm0pO1xuICBjb25zdCBwb2ludHMgPSBbWzAsIDBdLCBbMSwgMF0sIFsxLCAxXSwgWzAsIDFdXS5tYXAocCA9PiAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG14SW52LCBwKSk7XG4gIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihwb2ludHNbMV1bMV0gLSBwb2ludHNbMF1bMV0sIHBvaW50c1sxXVswXSAtIHBvaW50c1swXVswXSk7XG4gIGNvbnN0IHN4ID0gTWF0aC5zcXJ0KE1hdGgucG93KHBvaW50c1sxXVswXSAtIHBvaW50c1swXVswXSwgMikgKyBNYXRoLnBvdyhwb2ludHNbMV1bMV0gLSBwb2ludHNbMF1bMV0sIDIpKTtcbiAgY29uc3Qgc3kgPSBNYXRoLnNxcnQoTWF0aC5wb3cocG9pbnRzWzJdWzBdIC0gcG9pbnRzWzFdWzBdLCAyKSArIE1hdGgucG93KHBvaW50c1syXVsxXSAtIHBvaW50c1sxXVsxXSwgMikpO1xuICByZXR1cm4ge1xuICAgIHJvdGF0aW9uOiBhbmdsZSAqICgxODAgLyBNYXRoLlBJKSxcbiAgICBzY2FsZTogW3N4LCBzeV0sXG4gICAgc2l6ZTogW3N4ICogc2hhcGVXaWR0aCwgc3kgKiBzaGFwZUhlaWdodF0sXG4gICAgcG9zaXRpb246IFstcG9pbnRzWzBdWzBdICogc2hhcGVXaWR0aCwgLXBvaW50c1swXVsxXSAqIHNoYXBlSGVpZ2h0XVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5leHRyYWN0TGluZWFyR3JhZGllbnRQYXJhbXNGcm9tVHJhbnNmb3JtID0gZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybTtcblxudmFyIF9tYXRyaXhJbnZlcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibWF0cml4LWludmVyc2VcIikpO1xuXG52YXIgX2FwcGx5TWF0cml4VG9Qb2ludCA9IHJlcXVpcmUoXCIuL2FwcGx5TWF0cml4VG9Qb2ludFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjYW4gZXh0cmFjdCB0aGUgeCBhbmQgeSBwb3NpdGlvbnMgb2YgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIGxpbmVhciBncmFkaWVudFxuICogKHNjYWxlIGlzIG5vdCBpbXBvcnRhbnQgaGVyZSlcbiAqXG4gKiBAcGFyYW0gc2hhcGVXaWR0aCBudW1iZXJcbiAqIEBwYXJhbSBzaGFwZUhlaWdodCBudW1iZXJcbiAqIEBwYXJhbSB0IFRyYW5zZm9ybVxuICovXG5mdW5jdGlvbiBleHRyYWN0TGluZWFyR3JhZGllbnRQYXJhbXNGcm9tVHJhbnNmb3JtKHNoYXBlV2lkdGgsIHNoYXBlSGVpZ2h0LCB0KSB7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IHQubGVuZ3RoID09PSAyID8gWy4uLnQsIFswLCAwLCAxXV0gOiBbLi4udF07XG4gIGNvbnN0IG14SW52ID0gKDAsIF9tYXRyaXhJbnZlcnNlLmRlZmF1bHQpKHRyYW5zZm9ybSk7XG4gIGNvbnN0IHN0YXJ0RW5kID0gW1swLCAwLjVdLCBbMSwgMC41XV0ubWFwKHAgPT4gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShteEludiwgcCkpO1xuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBbc3RhcnRFbmRbMF1bMF0gKiBzaGFwZVdpZHRoLCBzdGFydEVuZFswXVsxXSAqIHNoYXBlSGVpZ2h0XSxcbiAgICBlbmQ6IFtzdGFydEVuZFsxXVswXSAqIHNoYXBlV2lkdGgsIHN0YXJ0RW5kWzFdWzFdICogc2hhcGVIZWlnaHRdXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmV4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcyA9IGV4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcztcblxudmFyIF9tYXRyaXhJbnZlcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibWF0cml4LWludmVyc2VcIikpO1xuXG52YXIgX2FwcGx5TWF0cml4VG9Qb2ludCA9IHJlcXVpcmUoXCIuL2FwcGx5TWF0cml4VG9Qb2ludFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjYW4gZXh0cmFjdCB0aGUgcm90YXRpb24gKGluIGRlZ3JlZXMpLCBjZW50ZXIgcG9pbnQgYW5kIHJhZGl1cyBmb3IgYSByYWRpYWwgb3IgZGlhbW9uZCBncmFkaWVudFxuICpcbiAqIEBwYXJhbSBzaGFwZVdpZHRoXG4gKiBAcGFyYW0gc2hhcGVIZWlnaHRcbiAqIEBwYXJhbSB0XG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcyhzaGFwZVdpZHRoLCBzaGFwZUhlaWdodCwgdCkge1xuICBjb25zdCB0cmFuc2Zvcm0gPSB0Lmxlbmd0aCA9PT0gMiA/IFsuLi50LCBbMCwgMCwgMV1dIDogWy4uLnRdO1xuICBjb25zdCBteEludiA9ICgwLCBfbWF0cml4SW52ZXJzZS5kZWZhdWx0KSh0cmFuc2Zvcm0pO1xuICBjb25zdCBjZW50ZXJQb2ludCA9ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobXhJbnYsIFswLjUsIDAuNV0pO1xuICBjb25zdCByeFBvaW50ID0gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShteEludiwgWzEsIDAuNV0pO1xuICBjb25zdCByeVBvaW50ID0gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShteEludiwgWzAuNSwgMV0pO1xuICBjb25zdCByeCA9IE1hdGguc3FydChNYXRoLnBvdyhyeFBvaW50WzBdIC0gY2VudGVyUG9pbnRbMF0sIDIpICsgTWF0aC5wb3cocnhQb2ludFsxXSAtIGNlbnRlclBvaW50WzFdLCAyKSk7XG4gIGNvbnN0IHJ5ID0gTWF0aC5zcXJ0KE1hdGgucG93KHJ5UG9pbnRbMF0gLSBjZW50ZXJQb2ludFswXSwgMikgKyBNYXRoLnBvdyhyeVBvaW50WzFdIC0gY2VudGVyUG9pbnRbMV0sIDIpKTtcbiAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4oKHJ4UG9pbnRbMV0gLSBjZW50ZXJQb2ludFsxXSkgLyAocnhQb2ludFswXSAtIGNlbnRlclBvaW50WzBdKSkgKiAoMTgwIC8gTWF0aC5QSSk7XG4gIHJldHVybiB7XG4gICAgcm90YXRpb246IGFuZ2xlLFxuICAgIGNlbnRlcjogW2NlbnRlclBvaW50WzBdICogc2hhcGVXaWR0aCwgY2VudGVyUG9pbnRbMV0gKiBzaGFwZUhlaWdodF0sXG4gICAgcmFkaXVzOiBbcnggKiBzaGFwZVdpZHRoLCByeSAqIHNoYXBlSGVpZ2h0XVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5maW5kQWxsID0gdm9pZCAwO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuLlwiKTtcblxuLyoqXG4gKiBDdXN0b20gaW1wbGVtZW50YXRpb24gb2YgdGhlIGZpZ21hLmZpbmRBbGwgbWV0aG9kLCB3aGljaCBydW5zIHgxMDAwIHRpbWVzIGZhc3Rlci5cbiAqXG4gKiAjIyMgVXNhZ2UgZXhhbXBsZVxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZpbmRBbGwsIGlzVGV4dE5vZGUgfSBmcm9tIFwiQGZpZ21hLXBsdWdpbi9oZWxwZXJzXCJcbiAqXG4gKiBjb25zdCB0ZXh0Tm9kZXMgPSBmaW5kQWxsKGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuLCBpc1RleHROb2RlKVxuICogYGBgXG4gKlxuICogIyMjIEhvdyB0byByZXBsYWNlIG5hdGl2ZSBgZmlnbWEuZmluZEFsbGBcbiAqIGBgYGRpZmZcbiAqICsgaW1wb3J0IHsgZmluZEFsbCB9IGZyb20gXCJAZmlnbWEtcGx1Z2luL2hlbHBlcnNcIlxuICpcbiAqIC0gY29uc3QgdGV4dE5vZGVzID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZEFsbCgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIik7XG4gKiArIGNvbnN0IHRleHROb2RlcyA9IGZpbmRBbGwoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4sIChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiKVxuICogYGBgXG4gKi9cbmNvbnN0IGZpbmRBbGwgPSAobm9kZXMsIGl0ZXJhdGVlKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaXRlcmF0ZWUobm9kZXNbaV0sIGksIG5vZGVzKSkge1xuICAgICAgcmVzdWx0LnB1c2gobm9kZXNbaV0pO1xuICAgIH0gZWxzZSBpZiAoKDAsIF8uaGFzQ2hpbGRyZW4pKG5vZGVzW2ldKSkge1xuICAgICAgcmVzdWx0LnB1c2goLi4uZmluZEFsbChub2Rlc1tpXVsnY2hpbGRyZW4nXSwgaXRlcmF0ZWUpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0cy5maW5kQWxsID0gZmluZEFsbDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldEFsbEZvbnRzO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBhbGwgdXNlZCBmb250cyB0byB0ZXh0Tm9kZXNcbiAqL1xuZnVuY3Rpb24gZ2V0QWxsRm9udHModGV4dE5vZGVzKSB7XG4gIGNvbnN0IGZvbnRzID0gW107XG5cbiAgY29uc3QgcHVzaFVuaXF1ZSA9IGZvbnQgPT4ge1xuICAgIGlmICghZm9udHMuc29tZShpdGVtID0+IGl0ZW0uZmFtaWx5ID09PSBmb250LmZhbWlseSAmJiBpdGVtLnN0eWxlID09PSBmb250LnN0eWxlKSkge1xuICAgICAgZm9udHMucHVzaChmb250KTtcbiAgICB9XG4gIH07XG5cbiAgZm9yIChjb25zdCBub2RlIG9mIHRleHROb2Rlcykge1xuICAgIGlmIChub2RlLmZvbnROYW1lID09PSBmaWdtYS5taXhlZCkge1xuICAgICAgY29uc3QgbGVuID0gbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBmb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKGksIGkgKyAxKTtcbiAgICAgICAgcHVzaFVuaXF1ZShmb250KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHVzaFVuaXF1ZShub2RlLmZvbnROYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9udHM7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRCb3VuZGluZ1JlY3Q7XG5cbnZhciBfaXNVbmRlZmluZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2lzVW5kZWZpbmVkXCIpKTtcblxudmFyIF9hcHBseU1hdHJpeFRvUG9pbnQgPSByZXF1aXJlKFwiLi9hcHBseU1hdHJpeFRvUG9pbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogIHRoaXMgZnVuY3Rpb24gcmV0dXJuIGEgYm91bmRpbmcgcmVjdCBmb3IgYW4gbm9kZXNcbiAqL1xuLy8geC95IGFic29sdXRlIGNvb3JkaW5hdGVzXG4vLyBoZWlnaHQvd2lkdGhcbi8vIHgyL3kyIGJvdHRvbSByaWdodCBjb29yZGluYXRlc1xuZnVuY3Rpb24gZ2V0Qm91bmRpbmdSZWN0KG5vZGVzKSB7XG4gIGNvbnN0IGJvdW5kaW5nUmVjdCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgeDI6IDAsXG4gICAgeTI6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH07XG5cbiAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IHh5ID0gbm9kZXMucmVkdWNlKChyZXosIG5vZGUpID0+IHtcbiAgICAgIGlmICghbm9kZS5hYnNvbHV0ZVRyYW5zZm9ybSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1Byb3ZpZGVkIG5vZGUgaGF2ZW5cXCd0IFwiYWJzb2x1dGVUcmFuc2Zvcm1cIiBwcm9wZXJ0eSwgYnV0IGl0XFwncyByZXF1aXJlZCBmb3IgY2FsY3VsYXRpb25zLicpO1xuICAgICAgICByZXR1cm4gcmV6O1xuICAgICAgfVxuXG4gICAgICBpZiAoKDAsIF9pc1VuZGVmaW5lZDIuZGVmYXVsdCkobm9kZS5oZWlnaHQpIHx8ICgwLCBfaXNVbmRlZmluZWQyLmRlZmF1bHQpKG5vZGUud2lkdGgpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignUHJvdmlkZWQgbm9kZSBoYXZlblxcJ3QgXCJ3aWR0aC9oZWlnaHRcIiBwcm9wZXJ0eSwgYnV0IGl0XFwncyByZXF1aXJlZCBmb3IgY2FsY3VsYXRpb25zLicpO1xuICAgICAgICByZXR1cm4gcmV6O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBoYWxmSGVpZ2h0ID0gbm9kZS5oZWlnaHQgLyAyO1xuICAgICAgY29uc3QgaGFsZldpZHRoID0gbm9kZS53aWR0aCAvIDI7XG4gICAgICBjb25zdCBbW2MwLCBzMCwgeF0sIFtzMSwgYzEsIHldXSA9IG5vZGUuYWJzb2x1dGVUcmFuc2Zvcm07XG4gICAgICBjb25zdCBtYXRyaXggPSBbW2MwLCBzMCwgeCArIGhhbGZXaWR0aCAqIGMwICsgaGFsZkhlaWdodCAqIHMwXSwgW3MxLCBjMSwgeSArIGhhbGZXaWR0aCAqIHMxICsgaGFsZkhlaWdodCAqIGMxXV07IC8vIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgY29ybmVycyBvZiB0aGUgcmVjdGFuZ2xlXG5cbiAgICAgIGNvbnN0IFhZID0ge1xuICAgICAgICB4OiBbMSwgLTEsIDEsIC0xXSxcbiAgICAgICAgeTogWzEsIC0xLCAtMSwgMV1cbiAgICAgIH07IC8vIGZpbGwgaW5cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG1hdHJpeCwgW1hZLnhbaV0gKiBoYWxmV2lkdGgsIFhZLnlbaV0gKiBoYWxmSGVpZ2h0XSk7XG4gICAgICAgIFhZLnhbaV0gPSBhWzBdO1xuICAgICAgICBYWS55W2ldID0gYVsxXTtcbiAgICAgIH1cblxuICAgICAgWFkueC5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICBYWS55LnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgIHJlei54LnB1c2goWFkueFswXSk7XG4gICAgICByZXoueS5wdXNoKFhZLnlbMF0pO1xuICAgICAgcmV6LngyLnB1c2goWFkueFszXSk7XG4gICAgICByZXoueTIucHVzaChYWS55WzNdKTtcbiAgICAgIHJldHVybiByZXo7XG4gICAgfSwge1xuICAgICAgeDogW10sXG4gICAgICB5OiBbXSxcbiAgICAgIHgyOiBbXSxcbiAgICAgIHkyOiBbXVxuICAgIH0pO1xuICAgIGNvbnN0IHJlY3QgPSB7XG4gICAgICB4OiBNYXRoLm1pbiguLi54eS54KSxcbiAgICAgIHk6IE1hdGgubWluKC4uLnh5LnkpLFxuICAgICAgeDI6IE1hdGgubWF4KC4uLnh5LngyKSxcbiAgICAgIHkyOiBNYXRoLm1heCguLi54eS55MilcbiAgICB9O1xuICAgIGJvdW5kaW5nUmVjdC54ID0gcmVjdC54O1xuICAgIGJvdW5kaW5nUmVjdC55ID0gcmVjdC55O1xuICAgIGJvdW5kaW5nUmVjdC54MiA9IHJlY3QueDI7XG4gICAgYm91bmRpbmdSZWN0LnkyID0gcmVjdC55MjtcbiAgICBib3VuZGluZ1JlY3Qud2lkdGggPSByZWN0LngyIC0gcmVjdC54O1xuICAgIGJvdW5kaW5nUmVjdC5oZWlnaHQgPSByZWN0LnkyIC0gcmVjdC55O1xuICB9XG5cbiAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0VGV4dE5vZGVDU1MgPSB2b2lkIDA7XG5cbnZhciBfZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC9nZXRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBzdHJpbmdWYWx1ZVRvQ3NzID0gdmFsdWUgPT4ge1xuICBpZiAoL3JpZ2h0fGJvdHRvbS9pLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdmbGV4LWVuZCc7XG4gIH0gZWxzZSBpZiAoL2xlZnR8dG9wL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2ZsZXgtc3RhcnQnO1xuICB9IGVsc2UgaWYgKC9jZW50ZXIvaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnY2VudGVyJztcbiAgfSBlbHNlIGlmICgvbG93ZXIvaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnbG93ZXJjYXNlJztcbiAgfSBlbHNlIGlmICgvdXBwZXIvaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAndXBwZXJjYXNlJztcbiAgfSBlbHNlIGlmICgvdGl0bGUvaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnY2FwaXRhbGl6ZSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdub25lJztcbiAgfVxufTtcblxuY29uc3QgdW5pdFZhbHVlVG9Dc3MgPSAoe1xuICB1bml0LFxuICB2YWx1ZVxufSkgPT4ge1xuICBpZiAodW5pdCA9PT0gJ1BFUkNFTlQnKSB7XG4gICAgcmV0dXJuIGAke3ZhbHVlfSVgO1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdQSVhFTFMnKSB7XG4gICAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ2F1dG8nO1xuICB9XG59O1xuXG5jb25zdCBpc1VuaXRWYWx1ZSA9IG9iaiA9PiB7XG4gIHJldHVybiBvYmouaGFzT3duUHJvcGVydHkoJ3VuaXQnKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlVmFsdWUgPSAobm9kZSwga2V5LCBleGFjdFN0cmluZykgPT4ge1xuICBjb25zdCB2YWx1ZSA9ICgwLCBfZ2V0Mi5kZWZhdWx0KShub2RlLCBrZXkpO1xuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBleGFjdFN0cmluZyA/IHZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpIDogc3RyaW5nVmFsdWVUb0Nzcyh2YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBgJHt2YWx1ZX1weGA7XG4gIH0gZWxzZSBpZiAoaXNVbml0VmFsdWUodmFsdWUpKSB7XG4gICAgcmV0dXJuIHVuaXRWYWx1ZVRvQ3NzKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4oJ1VuZXhwZWN0ZWQgdmFsdWU6ICcsIHZhbHVlKTtcbiAgfVxufTtcbi8qKlxuICogIGdldCBDU1Mgc3R5bGVzIG9mIFRleHROb2RlXG4gKi9cblxuXG5jb25zdCBnZXRUZXh0Tm9kZUNTUyA9IG5vZGUgPT4ge1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogZ2V0U3R5bGVWYWx1ZShub2RlLCAneScpLFxuICAgIGxlZnQ6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3gnKSxcbiAgICB3aWR0aDogZ2V0U3R5bGVWYWx1ZShub2RlLCAnd2lkdGgnKSxcbiAgICBoZWlnaHQ6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2hlaWdodCcpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAnanVzdGlmeS1jb250ZW50JzogZ2V0U3R5bGVWYWx1ZShub2RlLCAndGV4dEFsaWduSG9yaXpvbnRhbCcpLFxuICAgICdhbGlnbi1pdGVtcyc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3RleHRBbGlnblZlcnRpY2FsJyksXG4gICAgJ3RleHQtaW5kZW50JzogZ2V0U3R5bGVWYWx1ZShub2RlLCAncGFyYWdyYXBoSW5kZW50JyksXG4gICAgJ2xldHRlci1zcGFjaW5nJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAnbGV0dGVyU3BhY2luZycpLFxuICAgICdsaW5lLWhlaWdodCc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2xpbmVIZWlnaHQnKSxcbiAgICAnZm9udC1zaXplJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAnZm9udFNpemUnKSxcbiAgICAnZm9udC1zdHlsZSc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnROYW1lLnN0eWxlJywgdHJ1ZSksXG4gICAgJ2ZvbnQtd2VpZ2h0JzogZ2V0U3R5bGVWYWx1ZShub2RlLCAnZm9udE5hbWUuc3R5bGUnLCB0cnVlKSxcbiAgICAndGV4dC1kZWNvcmF0aW9uJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAndGV4dERlY29yYXRpb24nLCB0cnVlKSxcbiAgICAndGV4dC10cmFuc2Zvcm0nOiBnZXRTdHlsZVZhbHVlKG5vZGUsICd0ZXh0Q2FzZScpLFxuICAgICdmb250LWZhbWlseSc6IGAke2dldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnROYW1lLmZhbWlseScsIHRydWUpfSAke2dldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnROYW1lLnN0eWxlJywgdHJ1ZSl9YFxuICB9O1xufTsgLy8gdGhpcyBmaWxlIGNhbiBiZSBleHRlbmRlZCB0byBzdXBwb3J0IGFsbCBub2RlIHR5cGVzXG5cblxuZXhwb3J0cy5nZXRUZXh0Tm9kZUNTUyA9IGdldFRleHROb2RlQ1NTOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Tm9kZUluZGV4O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBnZXQgdGhlIHJldHVybiB0aGUgaW5kZXggb2Ygbm9kZSBpbiBpdHMgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVJbmRleChub2RlKSB7XG4gIHJldHVybiBub2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0UGFnZTtcblxudmFyIF9pc1R5cGVOb2RlID0gcmVxdWlyZShcIi4vaXNUeXBlTm9kZVwiKTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gcGFzcyBpbiBhIG5vZGUgYW5kIHJldHVybiBpdHMgcGFnZU5vZGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFnZShub2RlKSB7XG4gIGlmICghKDAsIF9pc1R5cGVOb2RlLmlzUGFnZU5vZGUpKG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFBhZ2Uobm9kZS5wYXJlbnQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2RlO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFJlbGF0aXZlUG9zaXRpb24gPSBleHBvcnRzLmdldFRvcExldmVsUGFyZW50ID0gdm9pZCAwO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuLi9cIik7XG5cbi8qKlxuICogUmV0dXJuIHRvcCBsZXZlbCBwYXJlbnQgZm9yIG5vZGUgYmVmb3JlIFBhZ2VOb2RlLlxuICogRm9yIGV4YW1wbGU6XG4gKiBgYGBqc1xuICogLy8gZm9yIHN0cnVjdHVyZSBiZWxvd1xuICogLy8gUGFnZSAvIEZyYW1lIC8gR3JvdXAxIC8gR3JvdXAyIC8gVGV4dFxuICpcbiAqIGdldFRvcExldmVsUGFyZW50KFRleHQpIC8vIEZyYW1lXG4gKiBgYGBcbiAqL1xuY29uc3QgZ2V0VG9wTGV2ZWxQYXJlbnQgPSBub2RlID0+IHtcbiAgaWYgKG5vZGUgJiYgbm9kZS5wYXJlbnQgJiYgISgwLCBfLmlzUGFnZU5vZGUpKG5vZGUucGFyZW50KSkge1xuICAgIHJldHVybiBnZXRUb3BMZXZlbFBhcmVudChub2RlLnBhcmVudCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG4vKipcbiAqIENhbGN1bGF0ZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiBub2RlIGJhc2VkIG9uIHByb3ZpZGVkIHBhcmVudCBvciB0b3AgbGV2ZWwgcGFyZW50LlxuICogRm9yIGV4YW1wbGU6XG4gKiBgYGBqc1xuICogLy8gZm9yIHN0cnVjdHVyZSBiZWxvd1xuICogLy8gUGFnZSAvIEZyYW1lIC8gR3JvdXAxIC8gR3JvdXAyIC8gVGV4dFxuICpcbiAqIGdldFJlbGF0aXZlUG9zaXRpb24oVGV4dCwgR3JvdXAxKSAvLyB3aWxsIGNhbGN1bGF0ZSB7IHgsIHkgfSBiYXNlZCBvbiBHcm91cDFcbiAqXG4gKiBnZXRSZWxhdGl2ZVBvc2l0aW9uKFRleHQpIC8vIHdpbGwgY2FsY3VsYXRlIHsgeCwgeSB9IGJhc2VkIG9uIEZyYW1lXG4gKiBgYGBcbiAqKi9cblxuXG5leHBvcnRzLmdldFRvcExldmVsUGFyZW50ID0gZ2V0VG9wTGV2ZWxQYXJlbnQ7XG5cbmNvbnN0IGdldFJlbGF0aXZlUG9zaXRpb24gPSAobm9kZSwgcmVsYXRpdmVOb2RlKSA9PiB7XG4gIHJlbGF0aXZlTm9kZSA9IHJlbGF0aXZlTm9kZSB8fCBnZXRUb3BMZXZlbFBhcmVudChub2RlKTtcbiAgcmV0dXJuIHtcbiAgICB4OiBNYXRoLmFicyhNYXRoLnJvdW5kKHJlbGF0aXZlTm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXSAtIG5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMF1bMl0pKSxcbiAgICB5OiBNYXRoLmFicyhNYXRoLnJvdW5kKHJlbGF0aXZlTm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVsxXVsyXSAtIG5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMV1bMl0pKVxuICB9O1xufTtcblxuZXhwb3J0cy5nZXRSZWxhdGl2ZVBvc2l0aW9uID0gZ2V0UmVsYXRpdmVQb3NpdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaGFzQ2hpbGRyZW4gPSB2b2lkIDA7XG5cbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gaGF2ZSBjaGlsZHJlbiBub2Rlc1xuICogRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHNcbiAqIC8vIEJFRk9SRVxuICogY29uc29sZS5sb2cobm9kZS5jaGlsZHJlbikgLy8gdGhyb3cgVFMgZXJyb3IgXCJQcm9wZXJ0eSAnY2hpbGRyZW4nIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgLi4uXCJcbiAqXG4gKiAvLyBBRlRFUlxuICogaWYgKGhhc0NoaWxkcmVuKG5vZGUpKSB7XG4gKiAgY29uc29sZS5sb2cobm9kZS5jaGlsZHJlbikgLy8gdmFsaWQgY29kZVxuICogfVxuICogYGBgXG4gKlxuICovXG5jb25zdCBoYXNDaGlsZHJlbiA9IG5vZGUgPT4gQm9vbGVhbihub2RlWydjaGlsZHJlbiddKTtcblxuZXhwb3J0cy5oYXNDaGlsZHJlbiA9IGhhc0NoaWxkcmVuOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNQYXJ0T2ZJbnN0YW5jZTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gY2hlY2sgd2hldGhlciBhIG5vZGUgaXMgcGFydCBvZiBhbiBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBpc1BhcnRPZkluc3RhbmNlKG5vZGUpIHtcbiAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG5cbiAgaWYgKHBhcmVudC50eXBlID09PSAnSU5TVEFOQ0UnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAocGFyZW50LnR5cGUgPT09ICdQQUdFJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaXNQYXJ0T2ZJbnN0YW5jZShwYXJlbnQpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1BhcnRPZk5vZGU7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIGNoZWNrIHdoZXRoZXIgYSBub2RlIGlzIHBhcnQgb2YgYW4gcm9vdE5vZGVcbiAqL1xuZnVuY3Rpb24gaXNQYXJ0T2ZOb2RlKHBhcnQsIHJvb3ROb2RlKSB7XG4gIGNvbnN0IHBhcmVudCA9IHBhcnQucGFyZW50O1xuXG4gIGlmIChwYXJlbnQgPT09IHJvb3ROb2RlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAocGFyZW50LnR5cGUgPT09ICdQQUdFJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaXNQYXJ0T2ZOb2RlKHBhcmVudCwgcm9vdE5vZGUpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzT25lT2ZOb2RlVHlwZSA9IGV4cG9ydHMuaXNDb21wb25lbnROb2RlID0gZXhwb3J0cy5pc0luc3RhbmNlTm9kZSA9IGV4cG9ydHMuaXNUZXh0Tm9kZSA9IGV4cG9ydHMuaXNGcmFtZU5vZGUgPSBleHBvcnRzLmlzR3JvdXBOb2RlID0gZXhwb3J0cy5pc1BhZ2VOb2RlID0gdm9pZCAwO1xuXG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIFBhZ2VOb2RlXG4gKi9cbmNvbnN0IGlzUGFnZU5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ1BBR0UnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgR3JvdXBOb2RlXG4gKi9cblxuXG5leHBvcnRzLmlzUGFnZU5vZGUgPSBpc1BhZ2VOb2RlO1xuXG5jb25zdCBpc0dyb3VwTm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnR1JPVVAnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgRnJhbWVOb2RlXG4gKi9cblxuXG5leHBvcnRzLmlzR3JvdXBOb2RlID0gaXNHcm91cE5vZGU7XG5cbmNvbnN0IGlzRnJhbWVOb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdGUkFNRSc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBUZXh0Tm9kZVxuICovXG5cblxuZXhwb3J0cy5pc0ZyYW1lTm9kZSA9IGlzRnJhbWVOb2RlO1xuXG5jb25zdCBpc1RleHROb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdURVhUJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIEluc3RhbmNlTm9kZVxuICovXG5cblxuZXhwb3J0cy5pc1RleHROb2RlID0gaXNUZXh0Tm9kZTtcblxuY29uc3QgaXNJbnN0YW5jZU5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0lOU1RBTkNFJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIENvbXBvbmVudE5vZGVcbiAqL1xuXG5cbmV4cG9ydHMuaXNJbnN0YW5jZU5vZGUgPSBpc0luc3RhbmNlTm9kZTtcblxuY29uc3QgaXNDb21wb25lbnROb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdDT01QT05FTlQnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgb25lIG9mIHByb3ZpZGVkIHR5cGVzXG4gKi9cblxuXG5leHBvcnRzLmlzQ29tcG9uZW50Tm9kZSA9IGlzQ29tcG9uZW50Tm9kZTtcblxuY29uc3QgaXNPbmVPZk5vZGVUeXBlID0gKG5vZGUsIHR5cGVMaXN0KSA9PiB7XG4gIHJldHVybiB0eXBlTGlzdC5pbmNsdWRlcyhub2RlLnR5cGUpO1xufTtcblxuZXhwb3J0cy5pc09uZU9mTm9kZVR5cGUgPSBpc09uZU9mTm9kZVR5cGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1Zpc2libGVOb2RlO1xuXG4vKipcbiAqIFRoaXMgaGVscGVyIHJlY3Vyc2l2ZWx5IGNoZWNrcyBhbGwgcGFyZW50cyBmb3IgdmlzaWJpbGl0eSwgdG8gZ3VhcmFudGVlIHRoYXQncyBub2RlIGlzIHZpc2libGVcbiAqL1xuZnVuY3Rpb24gaXNWaXNpYmxlTm9kZShub2RlKSB7XG4gIGlmIChub2RlICYmIG5vZGUucGFyZW50KSB7XG4gICAgaWYgKG5vZGUudmlzaWJsZSAmJiBub2RlLnBhcmVudC50eXBlICE9PSAnUEFHRScpIHtcbiAgICAgIHJldHVybiBpc1Zpc2libGVOb2RlKG5vZGUucGFyZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5vZGUudmlzaWJsZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsb2FkRm9udHM7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhc3luY2hyb25vdXNseSBsb2FkcyB0aGUgcGFzc2VkIGZvbnRzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRGb250cyhmb250cykge1xuICBjb25zdCBwcm9taXNlcyA9IGZvbnRzLm1hcChmb250ID0+IGZpZ21hLmxvYWRGb250QXN5bmMoZm9udCkpO1xuICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gIHJldHVybiBmb250cztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvYWRVbmlxdWVGb250cztcblxudmFyIF9nZXRBbGxGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ2V0QWxsRm9udHNcIikpO1xuXG52YXIgX2xvYWRGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZEZvbnRzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gbG9hZCBvbmx5IHVuaXF1ZSBmb250cyBhc3luY2hyb25vdXNseVxuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkVW5pcXVlRm9udHModGV4dE5vZGVzKSB7XG4gIGNvbnN0IGZvbnRzID0gKDAsIF9nZXRBbGxGb250cy5kZWZhdWx0KSh0ZXh0Tm9kZXMpO1xuICByZXR1cm4gKDAsIF9sb2FkRm9udHMuZGVmYXVsdCkoZm9udHMpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ub2RlVG9PYmplY3QgPSB2b2lkIDA7XG5cbi8qKlxuICogVHJhbnNmb3JtIG5vZGUgdG8gb2JqZWN0IHdpdGgga2V5cywgdGhhdCBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQuXG4gKiBGb3IgZXhhbXBsZTpcbiAqIGBgYHRzXG4gKiBjb25zdCBub2RlID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZE9uZSgoZWwpID0+IGVsLnR5cGUgPT09IFwiVEVYVFwiKTtcbiAqIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKG5vZGUpLmxlbmd0aCkgLy8gMVxuICogY29uc29sZS5sb2coT2JqZWN0LmtleXMobm9kZVRvT2JqZWN0KG5vZGUpKS5sZW5ndGgpIC8vIDQyXG4gKiBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhub2RlVG9PYmplY3Qobm9kZSwgdHJ1ZSkpLmxlbmd0aCkgLy8gMzlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBub2RlXG4gKiBAcGFyYW0gd2l0aG91dFJlbGF0aW9uc1xuICovXG5jb25zdCBub2RlVG9PYmplY3QgPSAobm9kZSwgd2l0aG91dFJlbGF0aW9ucykgPT4ge1xuICBjb25zdCBwcm9wcyA9IE9iamVjdC5lbnRyaWVzKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG5vZGUuX19wcm90b19fKSk7XG4gIGNvbnN0IGJsYWNrbGlzdCA9IFsncGFyZW50JywgJ2NoaWxkcmVuJywgJ3JlbW92ZWQnLCAnbWFzdGVyQ29tcG9uZW50J107XG4gIGNvbnN0IG9iaiA9IHtcbiAgICBpZDogbm9kZS5pZCxcbiAgICB0eXBlOiBub2RlLnR5cGVcbiAgfTtcblxuICBmb3IgKGNvbnN0IFtuYW1lLCBwcm9wXSBvZiBwcm9wcykge1xuICAgIGlmIChwcm9wLmdldCAmJiAhYmxhY2tsaXN0LmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIG9ialtuYW1lXSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICBvYmpbbmFtZV0gPSAnTWl4ZWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ialtuYW1lXSA9IHByb3AuZ2V0LmNhbGwobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBvYmpbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vZGUucGFyZW50ICYmICF3aXRob3V0UmVsYXRpb25zKSB7XG4gICAgb2JqLnBhcmVudCA9IHtcbiAgICAgIGlkOiBub2RlLnBhcmVudC5pZCxcbiAgICAgIHR5cGU6IG5vZGUucGFyZW50LnR5cGVcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgIXdpdGhvdXRSZWxhdGlvbnMpIHtcbiAgICBvYmouY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBub2RlVG9PYmplY3QoY2hpbGQsIHdpdGhvdXRSZWxhdGlvbnMpKTtcbiAgfVxuXG4gIGlmIChub2RlLm1hc3RlckNvbXBvbmVudCAmJiAhd2l0aG91dFJlbGF0aW9ucykge1xuICAgIG9iai5tYXN0ZXJDb21wb25lbnQgPSBub2RlVG9PYmplY3Qobm9kZS5tYXN0ZXJDb21wb25lbnQsIHdpdGhvdXRSZWxhdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbmV4cG9ydHMubm9kZVRvT2JqZWN0ID0gbm9kZVRvT2JqZWN0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZVRleHRTdHlsZSA9IHBhcnNlVGV4dFN0eWxlO1xuZXhwb3J0cy5zcGxpdFRleHRTdHlsZUludG9MaW5lcyA9IHNwbGl0VGV4dFN0eWxlSW50b0xpbmVzO1xuZXhwb3J0cy5qb2luVGV4dExpbmVzU3R5bGVzID0gam9pblRleHRMaW5lc1N0eWxlcztcbmV4cG9ydHMuYXBwbHlUZXh0U3R5bGVUb1RleHROb2RlID0gYXBwbHlUZXh0U3R5bGVUb1RleHROb2RlO1xuZXhwb3J0cy5jaGFuZ2VDaGFyYWN0ZXJzVGV4dFN0eWxlID0gY2hhbmdlQ2hhcmFjdGVyc1RleHRTdHlsZTtcbmV4cG9ydHMuY2hhbmdlVGV4dFN0eWxlID0gY2hhbmdlVGV4dFN0eWxlO1xuXG52YXIgX3VuaXFXaXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC91bmlxV2l0aFwiKSk7XG5cbnZhciBfY2xvbmVEZWVwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIikpO1xuXG52YXIgX2lzRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2lzRXF1YWxcIikpO1xuXG52YXIgX2dldEFsbEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9nZXRBbGxGb250c1wiKSk7XG5cbnZhciBfbG9hZEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkRm9udHNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBzdHlsZUZvbnRzID0gWydmb250U2l6ZScsICdmb250TmFtZScsICd0ZXh0Q2FzZScsICd0ZXh0RGVjb3JhdGlvbicsICdsZXR0ZXJTcGFjaW5nJywgJ2xpbmVIZWlnaHQnLCAnZmlsbHMnLCAndGV4dFN0eWxlSWQnLCAnZmlsbFN0eWxlSWQnXTtcbi8qXG5cdFRoZSBmdW5jdGlvbiByZXR1cm5zIHRoZSB0ZXh0IG5vZGUgc3R5bGVzLCBzcGxpdHRpbmcgdGhlbSBpbnRvIGRpZmZlcmVudCBhcnJheXMsIHN1Y2ggYXM6XG5cdFt7XG5cdFx0Y2hhcmFjdGVyczogXCIuLi5cIixcblx0XHQuLi4gKHN0eWxlcylcblx0fSwgLi4uXVxuXG5cdC0tLVxuXG5cdFJldHVybnMgc3R5bGVzIGZvciB0aGUgZW50aXJlIHRleHQ6XG5cdHBhcnNlVGV4dFN0eWxlKHRleHROb2RlKVxuXHRcblx0UmV0dXJucyB0ZXh0IHN0eWxlcyBmcm9tIHRoZSAxMDB0aCB0byB0aGUgbGFzdCBjaGFyYWN0ZXI6XG5cdHBhcnNlVGV4dFN0eWxlKHRleHROb2RlLCAxMDApXG5cblx0UmV0dXJucyBzdHlsZXMgZm9yIHRoZSBlbnRpcmUgdGV4dCwgYnV0IG9ubHkgd2l0aCBmb250TmFtZSBhbmQgdGV4dERlY29yYXRpb246XG5cdHBhcnNlVGV4dFN0eWxlKHRleHROb2RlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgW1wiZm9udE5hbWVcIiwgXCJ0ZXh0RGVjb3JhdGlvblwiXSlcbiovXG5cbmZ1bmN0aW9uIHBhcnNlVGV4dFN0eWxlKG5vZGUsIHN0YXJ0ID0gMCwgZW5kLCBzdHlsZU5hbWUpIHtcbiAgaWYgKCFlbmQpIGVuZCA9IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7XG4gIGlmICghc3R5bGVOYW1lKSBzdHlsZU5hbWUgPSBzdHlsZUZvbnRzO1xuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICBjb25zb2xlLmVycm9yKCdTdGFydCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBlbmQnKTtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gc3RyaW5nIHN1YnN0cmluZywgZGVmaW5lZCBzdHlsZXNcblxuXG4gIGNvbnN0IHN0eWxlTWFwID0gW107IC8vIGEgY29tcG9zaW5nIHN0cmluZyBvZiBhIHNwZWNpZmljIHN0eWxlXG5cbiAgbGV0IHRleHRTdHlsZTtcbiAgY29uc3QgbmFtZXMgPSBzdHlsZU5hbWUubWFwKG5hbWUgPT4ge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoL14oLikvZywgJDEgPT4gJDEudG9VcHBlckNhc2UoKSk7XG4gIH0pOyAvLyBzcGxpdHRpbmcgdGV4dCBpbnRvIHN1YnN0cmluZ3MgYnkgc3R5bGVcblxuICBmb3IgKGxldCBzdGFydEluZGV4ID0gc3RhcnQ7IHN0YXJ0SW5kZXggPCBlbmQ7IHN0YXJ0SW5kZXgrKykge1xuICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIDE7XG4gICAgY29uc3QgbGV0dGVyID0ge1xuICAgICAgY2hhcmFjdGVyczogbm9kZS5jaGFyYWN0ZXJzW3N0YXJ0SW5kZXhdXG4gICAgfTsgLy8gY29sbGVjdGlvbiBvZiBzdHlsZXNcblxuICAgIG5hbWVzLmZvckVhY2goKG4sIGkpID0+IHtcbiAgICAgIGxldHRlcltzdHlsZU5hbWVbaV1dID0gbm9kZVsnZ2V0UmFuZ2UnICsgbl0oc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRleHRTdHlsZSkge1xuICAgICAgaWYgKGlzRXF1YWxMZXR0ZXJTdHlsZShsZXR0ZXIsIHRleHRTdHlsZSkpIHtcbiAgICAgICAgLy8gdGhlIGNoYXJhY3RlciBoYXMgdGhlIHNhbWUgcHJvcGVydGllcyBhcyB0aGUgZ2VuZXJhdGVkIHN1YnN0cmluZ1xuICAgICAgICAvLyBhZGQgaXQgdG8gaXRcbiAgICAgICAgdGV4dFN0eWxlLmNoYXJhY3RlcnMgKz0gbGV0dGVyLmNoYXJhY3RlcnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzdHlsZSBwcm9wZXJ0aWVzIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgc3R5bGVNYXAucHVzaCh0ZXh0U3R5bGUpOyAvLyB3ZSBzdGFydCB0byBmb3JtIGEgbmV3IHN1YnN0cmluZ1xuXG4gICAgICAgIHRleHRTdHlsZSA9IGxldHRlcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2Ugc3RhcnQgZm9ybWluZyB0aGUgZmlyc3Qgc3Vic3RyaW5nXG4gICAgICB0ZXh0U3R5bGUgPSBsZXR0ZXI7XG4gICAgfVxuICB9XG5cbiAgc3R5bGVNYXAucHVzaCh0ZXh0U3R5bGUpO1xuICByZXR1cm4gc3R5bGVNYXA7XG59XG4vKlxuXHRBbGxvd3MgdG8gc3BsaXQgdGhlIHN0eWxlcyBvYnRhaW5lZCB3aXRoIHBhcnNlVGV4dFN0eWxlIGludG8gbGluZXMgYmFzZWQgb24gbmV3bGluZXMuXG5cblx0SWYgdGhlIHJlbW92ZU5ld2xpbmVDaGFyYWN0ZXJzIHBhcmFtZXRlciA9PSB0cnVlLCB0aGUgbmV3bGluZSBjaGFyYWN0ZXJzIHdpbGwgYmUgcmVtb3ZlZC5cblx0UmVtb3ZlRW1wdHlsaW5lcyA9PSB0cnVlIHdpbGwgcmVtb3ZlIGVtcHR5IGxpbmVzLlxuKi9cblxuXG5mdW5jdGlvbiBzcGxpdFRleHRTdHlsZUludG9MaW5lcyh0ZXh0U3R5bGUsIHJlbW92ZU5ld2xpbmVDaGFyYWN0ZXJzID0gZmFsc2UsIHJlbW92ZUVtcHR5bGluZXMgPSBmYWxzZSkge1xuICBsZXQgbGluZSA9IFtdO1xuICBsZXQgbGluZXMgPSBbXTtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoLit8KD88PVxcbikoLj8pKD89JCkpKFxcbnxcXHUyMDI4KT98KFxcbnxcXHUyMDI4KScsICdnJyk7XG4gIGNvbnN0IHJlMiA9IG5ldyBSZWdFeHAoJ1xcbnxcXHUyMDI4Jyk7XG4gIHRleHRTdHlsZS5mb3JFYWNoKChzdHlsZSwgaW5kZXgpID0+IHtcbiAgICBpZiAocmUyLnRlc3Qoc3R5bGUuY2hhcmFjdGVycykpIHtcbiAgICAgIGNvbnN0IGxzID0gc3R5bGUuY2hhcmFjdGVycy5tYXRjaChyZSk7XG5cbiAgICAgIGlmIChscyA9PT0gbnVsbCkge1xuICAgICAgICAvLyB0ZXh0IGlzIG1pc3NpbmdcbiAgICAgICAgbGluZS5wdXNoKHN0eWxlKTtcbiAgICAgIH0gZWxzZSBpZiAobHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIHRoZSBzdHlsZSB0ZXh0IGNvbnNpc3RzIG9mIDEgbGluZVxuICAgICAgICBsaW5lLnB1c2goc3R5bGUpO1xuICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICBsaW5lID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBtdWx0aXBsZS1saW5lIHRleHRcbiAgICAgICAgc3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkoc3R5bGUpO1xuICAgICAgICBzdHlsZS5jaGFyYWN0ZXJzID0gbHMuc2hpZnQoKTtcbiAgICAgICAgbGluZS5wdXNoKHN0eWxlKTtcbiAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgbGluZSA9IFtdO1xuICAgICAgICBjb25zdCBsYXN0ID0gbHMucG9wKCk7IC8vIGRlYWxpbmcgd2l0aCBpbnRlcm5hbCB0ZXh0IHN0cmluZ3NcblxuICAgICAgICBsaW5lcy5wdXNoKC4uLmxzLm1hcChlID0+IHtcbiAgICAgICAgICBzdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KShzdHlsZSk7XG4gICAgICAgICAgc3R5bGUuY2hhcmFjdGVycyA9IGU7XG4gICAgICAgICAgcmV0dXJuIFtzdHlsZV07XG4gICAgICAgIH0pKTtcbiAgICAgICAgc3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkoc3R5bGUpO1xuICAgICAgICBzdHlsZS5jaGFyYWN0ZXJzID0gbGFzdDtcblxuICAgICAgICBpZiAobGFzdCA9PT0gJycpIHtcbiAgICAgICAgICBpZiAoIXRleHRTdHlsZVtpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAvLyBsYXN0IGxpbmUgZmluYWxcbiAgICAgICAgICAgIGxpbmVzLnB1c2goW3N0eWxlXSk7XG4gICAgICAgICAgfSAvLyBlbHNlIGZhbHNlIGVuZCBvZiB0ZXh0XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkb2VzIG5vdCBlbmRcbiAgICAgICAgICBsaW5lLnB1c2goc3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmUucHVzaChzdHlsZSk7XG4gICAgfVxuICB9KTtcbiAgaWYgKGxpbmUubGVuZ3RoKSBsaW5lcy5wdXNoKGxpbmUpOyAvLyBkZWxldGluZyBuZXdsaW5lIGNoYXJhY3RlcnNcblxuICBpZiAocmVtb3ZlTmV3bGluZUNoYXJhY3RlcnMpIHtcbiAgICBsaW5lcy5mb3JFYWNoKGwgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSBsW2wubGVuZ3RoIC0gMV07XG4gICAgICBzdHlsZS5jaGFyYWN0ZXJzID0gc3R5bGUuY2hhcmFjdGVycy5yZXBsYWNlKHJlMiwgJycpO1xuICAgIH0pO1xuICB9IC8vIGRlbGV0aW5nIGVtcHR5IGxpbmVzXG5cblxuICBpZiAocmVtb3ZlRW1wdHlsaW5lcykge1xuICAgIGxpbmVzID0gbGluZXMuZmlsdGVyKGwgPT4gbC5maWx0ZXIobCA9PiBsLmNoYXJhY3RlcnMucmVwbGFjZShyZTIsICcnKSAhPT0gJycpLmxlbmd0aCAhPT0gMCk7XG4gIH1cblxuICByZXR1cm4gbGluZXM7XG59XG4vKlxuXHRJbnZlcnNlIGZ1bmN0aW9uIG9mIHNwbGl0VGV4dFN0eWxlSW50b0xpbmVzLlxuXHRUaGUgYWRkTmV3bGluZUNoYXJhY3RlcnMgcGFyYW1ldGVyIGlzIHJlc3BvbnNpYmxlIGZvciB3aGV0aGVyIHlvdSBuZWVkIHRvIGFkZCBhIG5ld2xpbmUgY2hhcmFjdGVyIGF0IHRoZSBlbmQgb2YgZWFjaCBsaW5lXG4qL1xuXG5cbmZ1bmN0aW9uIGpvaW5UZXh0TGluZXNTdHlsZXModGV4dFN0eWxlLCBhZGROZXdsaW5lQ2hhcmFjdGVycyA9IGZhbHNlKSB7XG4gIGNvbnN0IHRTdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KSh0ZXh0U3R5bGUpO1xuICBsZXQgbmV3bGluZSA9ICcnO1xuXG4gIHN3aXRjaCAodHlwZW9mIGFkZE5ld2xpbmVDaGFyYWN0ZXJzKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBpZiAoYWRkTmV3bGluZUNoYXJhY3RlcnMpIG5ld2xpbmUgPSAnXFxuJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIG5ld2xpbmUgPSBhZGROZXdsaW5lQ2hhcmFjdGVycztcbiAgICAgIGJyZWFrO1xuICB9IC8vIGFkZGluZyBuZXcgbGluZSBjaGFyYWN0ZXJzXG5cblxuICBpZiAoYWRkTmV3bGluZUNoYXJhY3RlcnMgJiYgbmV3bGluZSkge1xuICAgIHRTdHlsZS5mb3JFYWNoKChzdHlsZSwgaSkgPT4ge1xuICAgICAgaWYgKGkgIT09IHRTdHlsZS5sZW5ndGggLSAxKSBzdHlsZVtzdHlsZS5sZW5ndGggLSAxXS5jaGFyYWN0ZXJzICs9IG5ld2xpbmU7XG4gICAgfSk7XG4gIH0gLy8gam9pblxuXG5cbiAgY29uc3QgbGluZSA9IHRTdHlsZS5zaGlmdCgpO1xuICB0U3R5bGUuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgY29uc3QgZml0c3QgPSBzdHlsZS5zaGlmdCgpO1xuXG4gICAgaWYgKGlzRXF1YWxMZXR0ZXJTdHlsZShmaXRzdCwgbGluZVtsaW5lLmxlbmd0aCAtIDFdKSkge1xuICAgICAgLy8gdGhlIHN0eWxlIG9mIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpbmUgZGlmZmVycyBmcm9tIHRoZSBlbmQgb2YgdGhlIHN0eWxlIG9mIHRoZSB0ZXh0IGJlaW5nIGNvbXBpbGVkXG4gICAgICBsaW5lW2xpbmUubGVuZ3RoIC0gMV0uY2hhcmFjdGVycyArPSBmaXRzdC5jaGFyYWN0ZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lLnB1c2goZml0c3QpO1xuICAgIH1cblxuICAgIGlmIChzdHlsZS5sZW5ndGgpIGxpbmUucHVzaCguLi5zdHlsZSk7XG4gIH0pO1xuICByZXR1cm4gbGluZTtcbn1cbi8qXG5cdEFwcGx5IHRoZSB0ZXh0IHN0eWxlcyBvYnRhaW5lZCBmcm9tIHBhcnNlVGV4dFN0eWxlIHRvIHRoZSB0ZXh0IG5vZGUuXG5cdFRoZSBzZWNvbmQgcGFyYW1ldGVyIGNhbiBiZSBwYXNzZWQgYSB0ZXh0IG5vZGUsIHRoZSB0ZXh0IG9mIHdoaWNoIHdpbGwgYmUgY2hhbmdlZC5cbiovXG5cblxuYXN5bmMgZnVuY3Rpb24gYXBwbHlUZXh0U3R5bGVUb1RleHROb2RlKHRleHRTdHlsZSwgdGV4dE5vZGUsIGlzTG9hZEZvbnRzID0gdHJ1ZSkge1xuICBpZiAoaXNMb2FkRm9udHMpIHtcbiAgICBsZXQgZm9udHMgPSBbe1xuICAgICAgZmFtaWx5OiAnUm9ib3RvJyxcbiAgICAgIHN0eWxlOiAnUmVndWxhcidcbiAgICB9XTtcblxuICAgIGlmICh0ZXh0U3R5bGVbMF0uZm9udE5hbWUpIHtcbiAgICAgIGZvbnRzLnB1c2goLi4udGV4dFN0eWxlLm1hcChlID0+IGUuZm9udE5hbWUpKTtcbiAgICB9XG5cbiAgICBpZiAodGV4dE5vZGUpIHtcbiAgICAgIGZvbnRzLnB1c2goLi4uKDAsIF9nZXRBbGxGb250cy5kZWZhdWx0KShbdGV4dE5vZGVdKSk7XG4gICAgfVxuXG4gICAgZm9udHMgPSAoMCwgX3VuaXFXaXRoMi5kZWZhdWx0KShmb250cywgX2lzRXF1YWwyLmRlZmF1bHQpO1xuICAgIGF3YWl0ICgwLCBfbG9hZEZvbnRzLmRlZmF1bHQpKGZvbnRzKTtcbiAgfVxuXG4gIGlmICghdGV4dE5vZGUpIHRleHROb2RlID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICB0ZXh0Tm9kZS5jaGFyYWN0ZXJzID0gdGV4dFN0eWxlLnJlZHVjZSgoc3RyLCBzdHlsZSkgPT4ge1xuICAgIHJldHVybiBzdHIgKyBzdHlsZS5jaGFyYWN0ZXJzO1xuICB9LCAnJyk7XG4gIGxldCBuID0gMDtcbiAgdGV4dFN0eWxlLmZvckVhY2goc3R5bGUgPT4ge1xuICAgIGNvbnN0IEwgPSBzdHlsZS5jaGFyYWN0ZXJzLmxlbmd0aDtcblxuICAgIGlmIChMKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgICAgICBpZiAoa2V5ICE9PSAnY2hhcmFjdGVycycpIHtcbiAgICAgICAgICBjb25zdCBuYW1lID0ga2V5LnJlcGxhY2UoL14oLikvZywgJDEgPT4gJDEudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgdGV4dE5vZGVbJ3NldFJhbmdlJyArIG5hbWVdKG4sIG4gKyBMLCBzdHlsZVtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuICs9IEw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRleHROb2RlO1xufVxuLypcblx0UmVwbGFjaW5nIHRleHQgaW4gdGV4dFN0eWxlXG5cdElmIHRoZSBwYXNzZWQgdGV4dCBpcyBzaG9ydGVyIHRoYW4gaW4gc3R5bGVzLCB0aGUgZXh0cmEgc3R5bGVzIHdpbGwgYmUgcmVtb3ZlZC5cblx0SWYgdGhlIHBhc3NlZCB0ZXh0IGlzIGxvbmdlciB0aGFuIHRoZSBzdHlsZXMsIHRoZSBvdmVyZmxvdyB0ZXh0IHdpbGwgZ2V0IHRoZSBzdHlsZSBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIuXG4qL1xuXG5cbmZ1bmN0aW9uIGNoYW5nZUNoYXJhY3RlcnNUZXh0U3R5bGUodGV4dFN0eWxlLCBjaGFyYWN0ZXJzKSB7XG4gIHRleHRTdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KSh0ZXh0U3R5bGUpO1xuICBsZXQgbiA9IDA7XG4gIGNvbnN0IGxlbmd0aCA9IHRleHRTdHlsZS5sZW5ndGggLSAxO1xuICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzID0gdGV4dFN0eWxlW2ldO1xuICAgIGxldCBsID0gcy5jaGFyYWN0ZXJzLmxlbmd0aDsgLy8gaWYgcGFzc2VkIHRleHQgaXMgbG9uZ2VyIHRoYW4gdGV4dCBpbiBzdHlsZXNcblxuICAgIGlmIChpID09IGxlbmd0aCkgbCA9IGNoYXJhY3RlcnNMZW5ndGg7XG4gICAgcy5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycy5zbGljZShuLCBuICsgbCk7XG4gICAgbiArPSBsO1xuXG4gICAgaWYgKG4gPiBjaGFyYWN0ZXJzTGVuZ3RoKSB7XG4gICAgICAvLyBuZXcgdGV4dCBpcyBzaG9ydGVyIHRoYW4gdGV4dCBpbiBzdHlsZXNcbiAgICAgIHRleHRTdHlsZSA9IHRleHRTdHlsZS5zcGxpY2UoMCwgaSArIDEpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRleHRTdHlsZTtcbn1cbi8qXG5cdEZ1bmN0aW9uIGZvciBjaGFuZ2luZyBwcm9wZXJ0aWVzIG9mIFRleHRTdHlsZS4gXG5cdFRoZSBiZWZvcmVWYWx1ZSBwYXJhbWV0ZXIgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSB2YWx1ZSBpbiB3aGljaCB0aGUgcHJvcGVydHkgdG8gYmUgY2hhbmdlZCBzaG91bGQgYmUuXG4qL1xuXG5cbmZ1bmN0aW9uIGNoYW5nZVRleHRTdHlsZSh0ZXh0U3R5bGUsIHN0eWxlTmFtZSwgbmV3VmFsdWUsIGJlZm9yZVZhbHVlKSB7XG4gIHRleHRTdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KSh0ZXh0U3R5bGUpO1xuICB0ZXh0U3R5bGUuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgaWYgKGJlZm9yZVZhbHVlID09PSB1bmRlZmluZWQgfHwgYmVmb3JlVmFsdWUgIT09IHVuZGVmaW5lZCAmJiAoMCwgX2lzRXF1YWwyLmRlZmF1bHQpKHN0eWxlW3N0eWxlTmFtZV0sIGJlZm9yZVZhbHVlKSkge1xuICAgICAgO1xuICAgICAgc3R5bGVbc3R5bGVOYW1lXSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0ZXh0U3R5bGU7XG59XG4vKmNvbXBhcmluZyBjaGFyYWN0ZXIgc3R5bGVzIHRvIHRoZSBzdHlsZXMgb2YgdGhlIGNvbXBvc2luZyBzdWJzdHJpbmcqL1xuXG5cbmZ1bmN0aW9uIGlzRXF1YWxMZXR0ZXJTdHlsZShsZXR0ZXIsIHRleHRTdHlsZSkge1xuICBsZXQgaXMgPSB0cnVlOyAvLyBpdGVyYXRpbmcgb3ZlciBmb250IHByb3BlcnRpZXNcblxuICBmb3IgKGNvbnN0IGtleSBpbiBsZXR0ZXIpIHtcbiAgICBpZiAoa2V5ICE9PSAnY2hhcmFjdGVycycpIHtcbiAgICAgIGlmICghKDAsIF9pc0VxdWFsMi5kZWZhdWx0KShsZXR0ZXJba2V5XSwgdGV4dFN0eWxlW2tleV0pKSB7XG4gICAgICAgIC8vIHByb3BlcnR5IHZhcmllc1xuICAgICAgICAvLyBzdG9wIHNlYXJjaGluZ1xuICAgICAgICBpcyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXM7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNldENoYXJhY3RlcnMgPSB2b2lkIDA7XG5cbnZhciBfdW5pcUJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC91bmlxQnlcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBzZXRDaGFyYWN0ZXJzID0gYXN5bmMgKG5vZGUsIGNoYXJhY3RlcnMsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZmFsbGJhY2tGb250ID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5mYWxsYmFja0ZvbnQpIHx8IHtcbiAgICBmYW1pbHk6ICdSb2JvdG8nLFxuICAgIHN0eWxlOiAnUmVndWxhcidcbiAgfTtcblxuICB0cnkge1xuICAgIGlmIChub2RlLmZvbnROYW1lID09PSBmaWdtYS5taXhlZCkge1xuICAgICAgaWYgKChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc21hcnRTdHJhdGVneSkgPT09ICdwcmV2YWlsJykge1xuICAgICAgICBjb25zdCBmb250SGFzaFRyZWUgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGNoYXJGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKGkgLSAxLCBpKTtcbiAgICAgICAgICBjb25zdCBrZXkgPSBgJHtjaGFyRm9udC5mYW1pbHl9Ojoke2NoYXJGb250LnN0eWxlfWA7XG4gICAgICAgICAgZm9udEhhc2hUcmVlW2tleV0gPSBmb250SGFzaFRyZWVba2V5XSA/IGZvbnRIYXNoVHJlZVtrZXldICsgMSA6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2YWlsZWRUcmVlSXRlbSA9IE9iamVjdC5lbnRyaWVzKGZvbnRIYXNoVHJlZSkuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pWzBdO1xuICAgICAgICBjb25zdCBbZmFtaWx5LCBzdHlsZV0gPSBwcmV2YWlsZWRUcmVlSXRlbVswXS5zcGxpdCgnOjonKTtcbiAgICAgICAgY29uc3QgcHJldmFpbGVkRm9udCA9IHtcbiAgICAgICAgICBmYW1pbHksXG4gICAgICAgICAgc3R5bGVcbiAgICAgICAgfTtcbiAgICAgICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhwcmV2YWlsZWRGb250KTtcbiAgICAgICAgbm9kZS5mb250TmFtZSA9IHByZXZhaWxlZEZvbnQ7XG4gICAgICB9IGVsc2UgaWYgKChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc21hcnRTdHJhdGVneSkgPT09ICdzdHJpY3QnKSB7XG4gICAgICAgIHJldHVybiBzZXRDaGFyYWN0ZXJzV2l0aFN0cmljdE1hdGNoRm9udChub2RlLCBjaGFyYWN0ZXJzLCBmYWxsYmFja0ZvbnQpO1xuICAgICAgfSBlbHNlIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNtYXJ0U3RyYXRlZ3kpID09PSAnZXhwZXJpbWVudGFsJykge1xuICAgICAgICByZXR1cm4gc2V0Q2hhcmFjdGVyc1dpdGhTbWFydE1hdGNoRm9udChub2RlLCBjaGFyYWN0ZXJzLCBmYWxsYmFja0ZvbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlyc3RDaGFyRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZSgwLCAxKTtcbiAgICAgICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhmaXJzdENoYXJGb250KTtcbiAgICAgICAgbm9kZS5mb250TmFtZSA9IGZpcnN0Q2hhckZvbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoe1xuICAgICAgICBmYW1pbHk6IG5vZGUuZm9udE5hbWUuZmFtaWx5LFxuICAgICAgICBzdHlsZTogbm9kZS5mb250TmFtZS5zdHlsZVxuICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLndhcm4oYEZhaWxlZCB0byBsb2FkIFwiJHtub2RlLmZvbnROYW1lWydmYW1pbHknXX0gJHtub2RlLmZvbnROYW1lWydzdHlsZSddfVwiIGZvbnQgYW5kIHJlcGxhY2VkIHdpdGggZmFsbGJhY2sgXCIke2ZhbGxiYWNrRm9udC5mYW1pbHl9ICR7ZmFsbGJhY2tGb250LnN0eWxlfVwiYCwgZXJyKTtcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKGZhbGxiYWNrRm9udCk7XG4gICAgbm9kZS5mb250TmFtZSA9IGZhbGxiYWNrRm9udDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbm9kZS5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKGBGYWlsZWQgdG8gc2V0IGNoYXJhY3RlcnMuIFNraXBwZWQuYCwgZXJyKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydHMuc2V0Q2hhcmFjdGVycyA9IHNldENoYXJhY3RlcnM7XG5cbmNvbnN0IHNldENoYXJhY3RlcnNXaXRoU3RyaWN0TWF0Y2hGb250ID0gYXN5bmMgKG5vZGUsIGNoYXJhY3RlcnMsIGZhbGxiYWNrRm9udCkgPT4ge1xuICBjb25zdCBmb250SGFzaFRyZWUgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN0YXJ0SWR4ID0gaSAtIDE7XG4gICAgY29uc3Qgc3RhcnRDaGFyRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShzdGFydElkeCwgaSk7XG4gICAgY29uc3Qgc3RhcnRDaGFyRm9udFZhbCA9IGAke3N0YXJ0Q2hhckZvbnQuZmFtaWx5fTo6JHtzdGFydENoYXJGb250LnN0eWxlfWA7XG5cbiAgICB3aGlsZSAoaSA8IG5vZGUuY2hhcmFjdGVycy5sZW5ndGgpIHtcbiAgICAgIGkrKztcbiAgICAgIGNvbnN0IGNoYXJGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKGkgLSAxLCBpKTtcblxuICAgICAgaWYgKHN0YXJ0Q2hhckZvbnRWYWwgIT09IGAke2NoYXJGb250LmZhbWlseX06OiR7Y2hhckZvbnQuc3R5bGV9YCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb250SGFzaFRyZWVbYCR7c3RhcnRJZHh9XyR7aX1gXSA9IHN0YXJ0Q2hhckZvbnRWYWw7XG4gIH1cblxuICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKGZhbGxiYWNrRm9udCk7XG4gIG5vZGUuZm9udE5hbWUgPSBmYWxsYmFja0ZvbnQ7XG4gIG5vZGUuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG4gIGNvbnNvbGUubG9nKGZvbnRIYXNoVHJlZSk7XG4gIGF3YWl0IFByb21pc2UuYWxsKE9iamVjdC5rZXlzKGZvbnRIYXNoVHJlZSkubWFwKGFzeW5jIHJhbmdlID0+IHtcbiAgICBjb25zb2xlLmxvZyhyYW5nZSwgZm9udEhhc2hUcmVlW3JhbmdlXSk7XG4gICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gcmFuZ2Uuc3BsaXQoJ18nKTtcbiAgICBjb25zdCBbZmFtaWx5LCBzdHlsZV0gPSBmb250SGFzaFRyZWVbcmFuZ2VdLnNwbGl0KCc6OicpO1xuICAgIGNvbnN0IG1hdGNoZWRGb250ID0ge1xuICAgICAgZmFtaWx5LFxuICAgICAgc3R5bGVcbiAgICB9O1xuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMobWF0Y2hlZEZvbnQpO1xuICAgIHJldHVybiBub2RlLnNldFJhbmdlRm9udE5hbWUoTnVtYmVyKHN0YXJ0KSwgTnVtYmVyKGVuZCksIG1hdGNoZWRGb250KTtcbiAgfSkpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGdldERlbGltaXRlclBvcyA9IChzdHIsIGRlbGltaXRlciwgc3RhcnRJZHggPSAwLCBlbmRJZHggPSBzdHIubGVuZ3RoKSA9PiB7XG4gIGNvbnN0IGluZGljZXMgPSBbXTtcbiAgbGV0IHRlbXAgPSBzdGFydElkeDtcblxuICBmb3IgKGxldCBpID0gc3RhcnRJZHg7IGkgPCBlbmRJZHg7IGkrKykge1xuICAgIGlmIChzdHJbaV0gPT09IGRlbGltaXRlciAmJiBpICsgc3RhcnRJZHggIT09IGVuZElkeCAmJiB0ZW1wICE9PSBpICsgc3RhcnRJZHgpIHtcbiAgICAgIGluZGljZXMucHVzaChbdGVtcCwgaSArIHN0YXJ0SWR4XSk7XG4gICAgICB0ZW1wID0gaSArIHN0YXJ0SWR4ICsgMTtcbiAgICB9XG4gIH1cblxuICB0ZW1wICE9PSBlbmRJZHggJiYgaW5kaWNlcy5wdXNoKFt0ZW1wLCBlbmRJZHhdKTtcbiAgcmV0dXJuIGluZGljZXMuZmlsdGVyKEJvb2xlYW4pO1xufTtcblxuY29uc3QgYnVpbGRMaW5lYXJPcmRlciA9IG5vZGUgPT4ge1xuICBjb25zdCBmb250VHJlZSA9IFtdO1xuICBjb25zdCBuZXdMaW5lc1BvcyA9IGdldERlbGltaXRlclBvcyhub2RlLmNoYXJhY3RlcnMsICdcXG4nKTtcbiAgbmV3TGluZXNQb3MuZm9yRWFjaCgoW25ld0xpbmVzUmFuZ2VTdGFydCwgbmV3TGluZXNSYW5nZUVuZF0sIG4pID0+IHtcbiAgICBjb25zdCBuZXdMaW5lc1JhbmdlRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShuZXdMaW5lc1JhbmdlU3RhcnQsIG5ld0xpbmVzUmFuZ2VFbmQpO1xuXG4gICAgaWYgKG5ld0xpbmVzUmFuZ2VGb250ID09PSBmaWdtYS5taXhlZCkge1xuICAgICAgY29uc3Qgc3BhY2VzUG9zID0gZ2V0RGVsaW1pdGVyUG9zKG5vZGUuY2hhcmFjdGVycywgJyAnLCBuZXdMaW5lc1JhbmdlU3RhcnQsIG5ld0xpbmVzUmFuZ2VFbmQpO1xuICAgICAgc3BhY2VzUG9zLmZvckVhY2goKFtzcGFjZXNSYW5nZVN0YXJ0LCBzcGFjZXNSYW5nZUVuZF0sIHMpID0+IHtcbiAgICAgICAgY29uc3Qgc3BhY2VzUmFuZ2VGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKHNwYWNlc1JhbmdlU3RhcnQsIHNwYWNlc1JhbmdlRW5kKTtcblxuICAgICAgICBpZiAoc3BhY2VzUmFuZ2VGb250ID09PSBmaWdtYS5taXhlZCkge1xuICAgICAgICAgIGNvbnN0IHNwYWNlc1JhbmdlRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShzcGFjZXNSYW5nZVN0YXJ0LCBzcGFjZXNSYW5nZVN0YXJ0WzBdKTtcbiAgICAgICAgICBmb250VHJlZS5wdXNoKHtcbiAgICAgICAgICAgIHN0YXJ0OiBzcGFjZXNSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgZGVsaW1pdGVyOiAnICcsXG4gICAgICAgICAgICBmYW1pbHk6IHNwYWNlc1JhbmdlRm9udC5mYW1pbHksXG4gICAgICAgICAgICBzdHlsZTogc3BhY2VzUmFuZ2VGb250LnN0eWxlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9udFRyZWUucHVzaCh7XG4gICAgICAgICAgICBzdGFydDogc3BhY2VzUmFuZ2VTdGFydCxcbiAgICAgICAgICAgIGRlbGltaXRlcjogJyAnLFxuICAgICAgICAgICAgZmFtaWx5OiBzcGFjZXNSYW5nZUZvbnQuZmFtaWx5LFxuICAgICAgICAgICAgc3R5bGU6IHNwYWNlc1JhbmdlRm9udC5zdHlsZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9udFRyZWUucHVzaCh7XG4gICAgICAgIHN0YXJ0OiBuZXdMaW5lc1JhbmdlU3RhcnQsXG4gICAgICAgIGRlbGltaXRlcjogJ1xcbicsXG4gICAgICAgIGZhbWlseTogbmV3TGluZXNSYW5nZUZvbnQuZmFtaWx5LFxuICAgICAgICBzdHlsZTogbmV3TGluZXNSYW5nZUZvbnQuc3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmb250VHJlZS5zb3J0KChhLCBiKSA9PiArYS5zdGFydCAtICtiLnN0YXJ0KS5tYXAoKHtcbiAgICBmYW1pbHksXG4gICAgc3R5bGUsXG4gICAgZGVsaW1pdGVyXG4gIH0pID0+ICh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlLFxuICAgIGRlbGltaXRlclxuICB9KSk7XG59O1xuXG5jb25zdCBzZXRDaGFyYWN0ZXJzV2l0aFNtYXJ0TWF0Y2hGb250ID0gYXN5bmMgKG5vZGUsIGNoYXJhY3RlcnMsIGZhbGxiYWNrRm9udCkgPT4ge1xuICBjb25zdCByYW5nZVRyZWUgPSBidWlsZExpbmVhck9yZGVyKG5vZGUpO1xuICBjb25zdCBmb250c1RvTG9hZCA9ICgwLCBfdW5pcUJ5Mi5kZWZhdWx0KShyYW5nZVRyZWUsICh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlXG4gIH0pID0+IGAke2ZhbWlseX06OiR7c3R5bGV9YCkubWFwKCh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlXG4gIH0pID0+ICh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlXG4gIH0pKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoWy4uLmZvbnRzVG9Mb2FkLCBmYWxsYmFja0ZvbnRdLm1hcChmaWdtYS5sb2FkRm9udEFzeW5jKSk7XG4gIG5vZGUuZm9udE5hbWUgPSBmYWxsYmFja0ZvbnQ7XG4gIG5vZGUuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG4gIGxldCBwcmV2UG9zID0gMDtcbiAgcmFuZ2VUcmVlLmZvckVhY2goKHtcbiAgICBmYW1pbHksXG4gICAgc3R5bGUsXG4gICAgZGVsaW1pdGVyXG4gIH0pID0+IHtcbiAgICBpZiAocHJldlBvcyA8IG5vZGUuY2hhcmFjdGVycy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGRlbGltZXRlclBvcyA9IG5vZGUuY2hhcmFjdGVycy5pbmRleE9mKGRlbGltaXRlciwgcHJldlBvcyk7XG4gICAgICBjb25zdCBlbmRQb3MgPSBkZWxpbWV0ZXJQb3MgPiBwcmV2UG9zID8gZGVsaW1ldGVyUG9zIDogbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICAgIGNvbnN0IG1hdGNoZWRGb250ID0ge1xuICAgICAgICBmYW1pbHksXG4gICAgICAgIHN0eWxlXG4gICAgICB9O1xuICAgICAgbm9kZS5zZXRSYW5nZUZvbnROYW1lKHByZXZQb3MsIGVuZFBvcywgbWF0Y2hlZEZvbnQpO1xuICAgICAgcHJldlBvcyA9IGVuZFBvcyArIDE7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRydWU7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9wTGV2ZWxGcmFtZXM7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiByZXR1cm5zIGFsbCB0b3AgbGV2ZWwgZnJhbWVzIG9uIGN1cnJlbnRQYWdlXG4gKi9cbmZ1bmN0aW9uIHRvcExldmVsRnJhbWVzKHBhZ2UgPSBmaWdtYS5jdXJyZW50UGFnZSkge1xuICByZXR1cm4gcGFnZS5jaGlsZHJlbi5maWx0ZXIobm9kZSA9PiBub2RlLnR5cGUgPT09ICdGUkFNRScpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY2xvbmVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2Nsb25lLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0QWxsRm9udHNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldEFsbEZvbnRzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0Qm91bmRpbmdSZWN0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRCb3VuZGluZ1JlY3QuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXROb2RlSW5kZXhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldE5vZGVJbmRleC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldFBhZ2VcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldFBhZ2UuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJoYXNDaGlsZHJlblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaGFzQ2hpbGRyZW4uaGFzQ2hpbGRyZW47XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNQYXJ0T2ZJbnN0YW5jZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNQYXJ0T2ZJbnN0YW5jZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzUGFydE9mTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNQYXJ0T2ZOb2RlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNWaXNpYmxlTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNWaXNpYmxlTm9kZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImxvYWRVbmlxdWVGb250c1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfbG9hZFVuaXF1ZUZvbnRzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibG9hZEZvbnRzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9sb2FkRm9udHMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJub2RlVG9PYmplY3RcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX25vZGVUb09iamVjdC5ub2RlVG9PYmplY3Q7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidG9wTGV2ZWxGcmFtZXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RvcExldmVsRnJhbWVzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0VGV4dE5vZGVDU1NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldENTU1N0eWxlcy5nZXRUZXh0Tm9kZUNTUztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmaW5kQWxsXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9maW5kTWV0aG9kcy5maW5kQWxsO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldFJlbGF0aXZlUG9zaXRpb25cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldFJlbGF0aXZlUG9zaXRpb24uZ2V0UmVsYXRpdmVQb3NpdGlvbjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRUb3BMZXZlbFBhcmVudFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0UmVsYXRpdmVQb3NpdGlvbi5nZXRUb3BMZXZlbFBhcmVudDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmaWdtYVJHQlRvV2ViUkdCXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0Q29sb3IuZmlnbWFSR0JUb1dlYlJHQjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3ZWJSR0JUb0ZpZ21hUkdCXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0Q29sb3Iud2ViUkdCVG9GaWdtYVJHQjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmaWdtYVJHQlRvSGV4XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0Q29sb3IuZmlnbWFSR0JUb0hleDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJoZXhUb0ZpZ21hUkdCXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0Q29sb3IuaGV4VG9GaWdtYVJHQjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0NvbXBvbmVudE5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNDb21wb25lbnROb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzRnJhbWVOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzRnJhbWVOb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzR3JvdXBOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzR3JvdXBOb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzSW5zdGFuY2VOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzSW5zdGFuY2VOb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzUGFnZU5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNQYWdlTm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1RleHROb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzVGV4dE5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNPbmVPZk5vZGVUeXBlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzT25lT2ZOb2RlVHlwZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJleHRyYWN0SW1hZ2VDcm9wUGFyYW1zXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zLmV4dHJhY3RJbWFnZUNyb3BQYXJhbXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZXh0cmFjdExpbmVhckdyYWRpZW50U3RhcnRFbmQuZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJleHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcy5leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2V0Q2hhcmFjdGVyc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfc2V0Q2hhcmFjdGVycy5zZXRDaGFyYWN0ZXJzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlVGV4dFN0eWxlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5wYXJzZVRleHRTdHlsZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzcGxpdFRleHRTdHlsZUludG9MaW5lc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUuc3BsaXRUZXh0U3R5bGVJbnRvTGluZXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiam9pblRleHRMaW5lc1N0eWxlc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUuam9pblRleHRMaW5lc1N0eWxlcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhcHBseVRleHRTdHlsZVRvVGV4dE5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLmFwcGx5VGV4dFN0eWxlVG9UZXh0Tm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjaGFuZ2VDaGFyYWN0ZXJzVGV4dFN0eWxlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5jaGFuZ2VDaGFyYWN0ZXJzVGV4dFN0eWxlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNoYW5nZVRleHRTdHlsZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUuY2hhbmdlVGV4dFN0eWxlO1xuICB9XG59KTtcblxudmFyIF9jbG9uZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9jbG9uZVwiKSk7XG5cbnZhciBfZ2V0QWxsRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0QWxsRm9udHNcIikpO1xuXG52YXIgX2dldEJvdW5kaW5nUmVjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9nZXRCb3VuZGluZ1JlY3RcIikpO1xuXG52YXIgX2dldE5vZGVJbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9nZXROb2RlSW5kZXhcIikpO1xuXG52YXIgX2dldFBhZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0UGFnZVwiKSk7XG5cbnZhciBfaGFzQ2hpbGRyZW4gPSByZXF1aXJlKFwiLi9oZWxwZXJzL2hhc0NoaWxkcmVuXCIpO1xuXG52YXIgX2lzUGFydE9mSW5zdGFuY2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvaXNQYXJ0T2ZJbnN0YW5jZVwiKSk7XG5cbnZhciBfaXNQYXJ0T2ZOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2lzUGFydE9mTm9kZVwiKSk7XG5cbnZhciBfaXNWaXNpYmxlTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9pc1Zpc2libGVOb2RlXCIpKTtcblxudmFyIF9sb2FkVW5pcXVlRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvbG9hZFVuaXF1ZUZvbnRzXCIpKTtcblxudmFyIF9sb2FkRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvbG9hZEZvbnRzXCIpKTtcblxudmFyIF9ub2RlVG9PYmplY3QgPSByZXF1aXJlKFwiLi9oZWxwZXJzL25vZGVUb09iamVjdFwiKTtcblxudmFyIF90b3BMZXZlbEZyYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy90b3BMZXZlbEZyYW1lc1wiKSk7XG5cbnZhciBfZ2V0Q1NTU3R5bGVzID0gcmVxdWlyZShcIi4vaGVscGVycy9nZXRDU1NTdHlsZXNcIik7XG5cbnZhciBfZmluZE1ldGhvZHMgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2ZpbmRNZXRob2RzXCIpO1xuXG52YXIgX2dldFJlbGF0aXZlUG9zaXRpb24gPSByZXF1aXJlKFwiLi9oZWxwZXJzL2dldFJlbGF0aXZlUG9zaXRpb25cIik7XG5cbnZhciBfY29udmVydENvbG9yID0gcmVxdWlyZShcIi4vaGVscGVycy9jb252ZXJ0Q29sb3JcIik7XG5cbnZhciBfaXNUeXBlTm9kZSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvaXNUeXBlTm9kZVwiKTtcblxudmFyIF9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zID0gcmVxdWlyZShcIi4vaGVscGVycy9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zXCIpO1xuXG52YXIgX2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kID0gcmVxdWlyZShcIi4vaGVscGVycy9leHRyYWN0TGluZWFyR3JhZGllbnRTdGFydEVuZFwiKTtcblxudmFyIF9leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXMgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtc1wiKTtcblxudmFyIF9zZXRDaGFyYWN0ZXJzID0gcmVxdWlyZShcIi4vaGVscGVycy9zZXRDaGFyYWN0ZXJzXCIpO1xuXG52YXIgX3BhcnNlVGV4dFN0eWxlID0gcmVxdWlyZShcIi4vaGVscGVycy9wYXJzZVRleHRTdHlsZVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG4iLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcbiIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG4iLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbjtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25JbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduSW47XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25WYWx1ZTtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduJyksXG4gICAgYmFzZUFzc2lnbkluID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbkluJyksXG4gICAgY2xvbmVCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUJ1ZmZlcicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGNvcHlTeW1ib2xzID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHMnKSxcbiAgICBjb3B5U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHNJbicpLFxuICAgIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyksXG4gICAgZ2V0QWxsS2V5c0luID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5c0luJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVBcnJheScpLFxuICAgIGluaXRDbG9uZUJ5VGFnID0gcmVxdWlyZSgnLi9faW5pdENsb25lQnlUYWcnKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNNYXAgPSByZXF1aXJlKCcuL2lzTWFwJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTZXQgPSByZXF1aXJlKCcuL2lzU2V0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihzdWJWYWx1ZSkge1xuICAgICAgcmVzdWx0LmFkZChiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN1YlZhbHVlLCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc01hcCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDEgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbmRJbmRleDtcbiIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhc0luO1xuIiwidmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUlzTmFOID0gcmVxdWlyZSgnLi9fYmFzZUlzTmFOJyksXG4gICAgc3RyaWN0SW5kZXhPZiA9IHJlcXVpcmUoJy4vX3N0cmljdEluZGV4T2YnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IGBmcm9tSW5kZXhgIGJvdW5kcyBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZVxuICAgID8gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleClcbiAgICA6IGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJc05hTiwgZnJvbUluZGV4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW5kZXhPZjtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuIiwidmFyIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hcGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBtYXAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWFwKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gbWFwVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hcDtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYU5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbnVtYmVyIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmFOO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcbiIsInZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc2V0VGFnID0gJ1tvYmplY3QgU2V0XSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNTZXRgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1NldCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IHNldFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNTZXQ7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcbiIsInZhciBiYXNlTWF0Y2hlcyA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzJyksXG4gICAgYmFzZU1hdGNoZXNQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgcHJvcGVydHkgPSByZXF1aXJlKCcuL3Byb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXRlcmF0ZWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhbiBpdGVyYXRlZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgaXRlcmF0ZWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJdGVyYXRlZSh2YWx1ZSkge1xuICAvLyBEb24ndCBzdG9yZSB0aGUgYHR5cGVvZmAgcmVzdWx0IGluIGEgdmFyaWFibGUgdG8gYXZvaWQgYSBKSVQgYnVnIGluIFNhZmFyaSA5LlxuICAvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NjAzNCBmb3IgbW9yZSBkZXRhaWxzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKVxuICAgICAgPyBiYXNlTWF0Y2hlc1Byb3BlcnR5KHZhbHVlWzBdLCB2YWx1ZVsxXSlcbiAgICAgIDogYmFzZU1hdGNoZXModmFsdWUpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUl0ZXJhdGVlO1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXNJbiA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXNJbicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzSW47XG4iLCJ2YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL19iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hdGNoRGF0YScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzYCB3aGljaCBkb2Vzbid0IGNsb25lIGBzb3VyY2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgaWYgKG1hdGNoRGF0YS5sZW5ndGggPT0gMSAmJiBtYXRjaERhdGFbMF1bMl0pIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUobWF0Y2hEYXRhWzBdWzBdLCBtYXRjaERhdGFbMF1bMV0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09PSBzb3VyY2UgfHwgYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG4iLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpLFxuICAgIGdldCA9IHJlcXVpcmUoJy4vZ2V0JyksXG4gICAgaGFzSW4gPSByZXF1aXJlKCcuL2hhc0luJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzUHJvcGVydHlgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNyY1ZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICBpZiAoaXNLZXkocGF0aCkgJiYgaXNTdHJpY3RDb21wYXJhYmxlKHNyY1ZhbHVlKSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSh0b0tleShwYXRoKSwgc3JjVmFsdWUpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIgb2JqVmFsdWUgPSBnZXQob2JqZWN0LCBwYXRoKTtcbiAgICByZXR1cm4gKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgb2JqVmFsdWUgPT09IHNyY1ZhbHVlKVxuICAgICAgPyBoYXNJbihvYmplY3QsIHBhdGgpXG4gICAgICA6IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlc1Byb3BlcnR5O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG4iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VQcm9wZXJ0eWAgd2hpY2ggc3VwcG9ydHMgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5RGVlcDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcbiIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpLFxuICAgIGNyZWF0ZVNldCA9IHJlcXVpcmUoJy4vX2NyZWF0ZVNldCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmlxKGFycmF5LCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgc2VlbiA9IHJlc3VsdDtcblxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgfVxuICBlbHNlIGlmIChsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xuICAgIGlmIChzZXQpIHtcbiAgICAgIHJldHVybiBzZXRUb0FycmF5KHNldCk7XG4gICAgfVxuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xuICB9XG4gIGVsc2Uge1xuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xuICAgICAgd2hpbGUgKHNlZW5JbmRleC0tKSB7XG4gICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICghaW5jbHVkZXMoc2VlbiwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICBpZiAoc2VlbiAhPT0gcmVzdWx0KSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuIiwidmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUFycmF5QnVmZmVyO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURhdGFWaWV3O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVJlZ0V4cDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU3ltYm9sO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9scyhzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9scztcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpO1xuXG4vKipcbiAqIENvcGllcyBvd24gYW5kIGluaGVyaXRlZCBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9sc0luKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9sc0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHNJbjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG4iLCJ2YXIgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgbm9vcCA9IHJlcXVpcmUoJy4vbm9vcCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvYmplY3Qgb2YgYHZhbHVlc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFkZCB0byB0aGUgc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IHNldC5cbiAqL1xudmFyIGNyZWF0ZVNldCA9ICEoU2V0ICYmICgxIC8gc2V0VG9BcnJheShuZXcgU2V0KFssLTBdKSlbMV0pID09IElORklOSVRZKSA/IG5vb3AgOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBTZXQodmFsdWVzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2V0O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcbiIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIENoZWNrIHRoYXQgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBhcnJTdGFja2VkID0gc3RhY2suZ2V0KGFycmF5KTtcbiAgdmFyIG90aFN0YWNrZWQgPSBzdGFjay5nZXQob3RoZXIpO1xuICBpZiAoYXJyU3RhY2tlZCAmJiBvdGhTdGFja2VkKSB7XG4gICAgcmV0dXJuIGFyclN0YWNrZWQgPT0gb3RoZXIgJiYgb3RoU3RhY2tlZCA9PSBhcnJheTtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG4iLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgdGhhdCBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIG9ialN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgdmFyIG90aFN0YWNrZWQgPSBzdGFjay5nZXQob3RoZXIpO1xuICBpZiAob2JqU3RhY2tlZCAmJiBvdGhTdGFja2VkKSB7XG4gICAgcmV0dXJuIG9ialN0YWNrZWQgPT0gb3RoZXIgJiYgb3RoU3RhY2tlZCA9PSBvYmplY3Q7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0luLCBnZXRTeW1ib2xzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXNJbjtcbiIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG4iLCJ2YXIgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdmFyIGtleSA9IHJlc3VsdFtsZW5ndGhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgcmVzdWx0W2xlbmd0aF0gPSBba2V5LCB2YWx1ZSwgaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXRjaERhdGE7XG4iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9sc0luID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAob2JqZWN0KSB7XG4gICAgYXJyYXlQdXNoKHJlc3VsdCwgZ2V0U3ltYm9scyhvYmplY3QpKTtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGUob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzSW47XG4iLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG4iLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcbiIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgZXhpc3RzIG9uIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgaGFzRnVuYykge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gdG9LZXkocGF0aFtpbmRleF0pO1xuICAgIGlmICghKHJlc3VsdCA9IG9iamVjdCAhPSBudWxsICYmIGhhc0Z1bmMob2JqZWN0LCBrZXkpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICB9XG4gIGlmIChyZXN1bHQgfHwgKytpbmRleCAhPSBsZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGxlbmd0aCA9IG9iamVjdCA9PSBudWxsID8gMCA6IG9iamVjdC5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNQYXRoO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUFycmF5KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBuZXcgYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQXJyYXk7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKSxcbiAgICBjbG9uZURhdGFWaWV3ID0gcmVxdWlyZSgnLi9fY2xvbmVEYXRhVmlldycpLFxuICAgIGNsb25lUmVnRXhwID0gcmVxdWlyZSgnLi9fY2xvbmVSZWdFeHAnKSxcbiAgICBjbG9uZVN5bWJvbCA9IHJlcXVpcmUoJy4vX2Nsb25lU3ltYm9sJyksXG4gICAgY2xvbmVUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fY2xvbmVUeXBlZEFycmF5Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBNYXBgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIGBTZXRgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3I7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUJ5VGFnO1xuIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpZiBzdWl0YWJsZSBmb3Igc3RyaWN0XG4gKiAgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmljdENvbXBhcmFibGU7XG4iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG4iLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYG1hdGNoZXNQcm9wZXJ0eWAgZm9yIHNvdXJjZSB2YWx1ZXMgc3VpdGFibGVcbiAqIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShrZXksIHNyY1ZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSBzcmNWYWx1ZSAmJlxuICAgICAgKHNyY1ZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiBPYmplY3Qob2JqZWN0KSkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlO1xuIiwidmFyIG1lbW9pemUgPSByZXF1aXJlKCcuL21lbW9pemUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIG1heGltdW0gbWVtb2l6ZSBjYWNoZSBzaXplLiAqL1xudmFyIE1BWF9NRU1PSVpFX1NJWkUgPSA1MDA7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1lbW9pemVgIHdoaWNoIGNsZWFycyB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24nc1xuICogY2FjaGUgd2hlbiBpdCBleGNlZWRzIGBNQVhfTUVNT0laRV9TSVpFYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1lbW9pemVDYXBwZWQoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gbWVtb2l6ZShmdW5jLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoY2FjaGUuc2l6ZSA9PT0gTUFYX01FTU9JWkVfU0laRSkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAgdmFyIGNhY2hlID0gcmVzdWx0LmNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVDYXBwZWQ7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcbiIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5kZXhPZmAgd2hpY2ggcGVyZm9ybXMgc3RyaWN0IGVxdWFsaXR5XG4gKiBjb21wYXJpc29ucyBvZiB2YWx1ZXMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmljdEluZGV4T2Y7XG4iLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDYgLyogLiAqLykge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3ViU3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdWJTdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcbiIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG4iLCJ2YXIgYmFzZUNsb25lID0gcmVxdWlyZSgnLi9fYmFzZUNsb25lJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uY2xvbmVgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGNsb25lcyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZWN1cnNpdmVseSBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBkZWVwIGNsb25lZCB2YWx1ZS5cbiAqIEBzZWUgXy5jbG9uZVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKG9iamVjdHMpO1xuICogY29uc29sZS5sb2coZGVlcFswXSA9PT0gb2JqZWN0c1swXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgQ0xPTkVfREVFUF9GTEFHIHwgQ0xPTkVfU1lNQk9MU19GTEFHKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcbiIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuIiwidmFyIGJhc2VIYXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VIYXNJbicpLFxuICAgIGhhc1BhdGggPSByZXF1aXJlKCcuL19oYXNQYXRoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBpcyBhIGRpcmVjdCBvciBpbmhlcml0ZWQgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0gXy5jcmVhdGUoeyAnYSc6IF8uY3JlYXRlKHsgJ2InOiAyIH0pIH0pO1xuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsIFsnYScsICdiJ10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNJbjtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG4iLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG4iLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmVcbiAqIGVxdWl2YWxlbnQuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIHN1cHBvcnRzIGNvbXBhcmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLFxuICogZGF0ZSBvYmplY3RzLCBlcnJvciBvYmplY3RzLCBtYXBzLCBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLFxuICogc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkIGFycmF5cy4gYE9iamVjdGAgb2JqZWN0cyBhcmUgY29tcGFyZWRcbiAqIGJ5IHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGdW5jdGlvbnMgYW5kIERPTVxuICogbm9kZXMgYXJlIGNvbXBhcmVkIGJ5IHN0cmljdCBlcXVhbGl0eSwgaS5lLiBgPT09YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5pc0VxdWFsKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIG9iamVjdCA9PT0gb3RoZXI7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VxdWFsKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VxdWFsO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcbiIsInZhciBiYXNlSXNNYXAgPSByZXF1aXJlKCcuL19iYXNlSXNNYXAnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzTWFwID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNNYXA7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBNYXBgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTWFwKG5ldyBNYXApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNNYXAobmV3IFdlYWtNYXApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzTWFwID0gbm9kZUlzTWFwID8gYmFzZVVuYXJ5KG5vZGVJc01hcCkgOiBiYXNlSXNNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXA7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlSXNTZXQgPSByZXF1aXJlKCcuL19iYXNlSXNTZXQnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzU2V0ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNTZXQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTZXRgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHNldCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU2V0KG5ldyBTZXQpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTZXQobmV3IFdlYWtTZXQpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzU2V0ID0gbm9kZUlzU2V0ID8gYmFzZVVuYXJ5KG5vZGVJc1NldCkgOiBiYXNlSXNTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTZXQ7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYHVuZGVmaW5lZGAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1VuZGVmaW5lZCh2b2lkIDApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNVbmRlZmluZWQobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1VuZGVmaW5lZDtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzSW4gPSByZXF1aXJlKCcuL19iYXNlS2V5c0luJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG4iLCJ2YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8udW5pcWAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgaXRlcmF0ZWVgIHdoaWNoIGlzXG4gKiBpbnZva2VkIGZvciBlYWNoIGVsZW1lbnQgaW4gYGFycmF5YCB0byBnZW5lcmF0ZSB0aGUgY3JpdGVyaW9uIGJ5IHdoaWNoXG4gKiB1bmlxdWVuZXNzIGlzIGNvbXB1dGVkLiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpcyBkZXRlcm1pbmVkIGJ5IHRoZVxuICogb3JkZXIgdGhleSBvY2N1ciBpbiB0aGUgYXJyYXkuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OlxuICogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udW5pcUJ5KFsyLjEsIDEuMiwgMi4zXSwgTWF0aC5mbG9vcik7XG4gKiAvLyA9PiBbMi4xLCAxLjJdXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLnVuaXFCeShbeyAneCc6IDEgfSwgeyAneCc6IDIgfSwgeyAneCc6IDEgfV0sICd4Jyk7XG4gKiAvLyA9PiBbeyAneCc6IDEgfSwgeyAneCc6IDIgfV1cbiAqL1xuZnVuY3Rpb24gdW5pcUJ5KGFycmF5LCBpdGVyYXRlZSkge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlVW5pcShhcnJheSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSkgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmlxQnk7XG4iLCJ2YXIgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8udW5pcWAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgY29tcGFyYXRvcmAgd2hpY2hcbiAqIGlzIGludm9rZWQgdG8gY29tcGFyZSBlbGVtZW50cyBvZiBgYXJyYXlgLiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpc1xuICogZGV0ZXJtaW5lZCBieSB0aGUgb3JkZXIgdGhleSBvY2N1ciBpbiB0aGUgYXJyYXkuVGhlIGNvbXBhcmF0b3IgaXMgaW52b2tlZFxuICogd2l0aCB0d28gYXJndW1lbnRzOiAoYXJyVmFsLCBvdGhWYWwpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICd4JzogMSwgJ3knOiAyIH0sIHsgJ3gnOiAyLCAneSc6IDEgfSwgeyAneCc6IDEsICd5JzogMiB9XTtcbiAqXG4gKiBfLnVuaXFXaXRoKG9iamVjdHMsIF8uaXNFcXVhbCk7XG4gKiAvLyA9PiBbeyAneCc6IDEsICd5JzogMiB9LCB7ICd4JzogMiwgJ3knOiAxIH1dXG4gKi9cbmZ1bmN0aW9uIHVuaXFXaXRoKGFycmF5LCBjb21wYXJhdG9yKSB7XG4gIGNvbXBhcmF0b3IgPSB0eXBlb2YgY29tcGFyYXRvciA9PSAnZnVuY3Rpb24nID8gY29tcGFyYXRvciA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVVuaXEoYXJyYXksIHVuZGVmaW5lZCwgY29tcGFyYXRvcikgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmlxV2l0aDtcbiIsInZhciBTeWx2ZXN0ZXIgPSB7fVxuXG5TeWx2ZXN0ZXIuTWF0cml4ID0gZnVuY3Rpb24oKSB7fVxuXG5TeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZSA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gIHZhciBNID0gbmV3IFN5bHZlc3Rlci5NYXRyaXgoKVxuICByZXR1cm4gTS5zZXRFbGVtZW50cyhlbGVtZW50cylcbn1cblxuU3lsdmVzdGVyLk1hdHJpeC5JID0gZnVuY3Rpb24obikge1xuICB2YXIgZWxzID0gW10sXG4gICAgaSA9IG4sXG4gICAgalxuICB3aGlsZSAoaS0tKSB7XG4gICAgaiA9IG5cbiAgICBlbHNbaV0gPSBbXVxuICAgIHdoaWxlIChqLS0pIHtcbiAgICAgIGVsc1tpXVtqXSA9IGkgPT09IGogPyAxIDogMFxuICAgIH1cbiAgfVxuICByZXR1cm4gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUoZWxzKVxufVxuXG5TeWx2ZXN0ZXIuTWF0cml4LnByb3RvdHlwZSA9IHtcbiAgZHVwOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUodGhpcy5lbGVtZW50cylcbiAgfSxcblxuICBpc1NxdWFyZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbHMgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCA/IDAgOiB0aGlzLmVsZW1lbnRzWzBdLmxlbmd0aFxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gY29sc1xuICB9LFxuXG4gIHRvUmlnaHRUcmlhbmd1bGFyOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT09IDApIHJldHVybiBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZShbXSlcbiAgICB2YXIgTSA9IHRoaXMuZHVwKCksXG4gICAgICBlbHNcbiAgICB2YXIgbiA9IHRoaXMuZWxlbWVudHMubGVuZ3RoLFxuICAgICAgaSxcbiAgICAgIGosXG4gICAgICBucCA9IHRoaXMuZWxlbWVudHNbMF0ubGVuZ3RoLFxuICAgICAgcFxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGlmIChNLmVsZW1lbnRzW2ldW2ldID09PSAwKSB7XG4gICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgaWYgKE0uZWxlbWVudHNbal1baV0gIT09IDApIHtcbiAgICAgICAgICAgIGVscyA9IFtdXG4gICAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgbnA7IHArKykge1xuICAgICAgICAgICAgICBlbHMucHVzaChNLmVsZW1lbnRzW2ldW3BdICsgTS5lbGVtZW50c1tqXVtwXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE0uZWxlbWVudHNbaV0gPSBlbHNcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoTS5lbGVtZW50c1tpXVtpXSAhPT0gMCkge1xuICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgIHZhciBtdWx0aXBsaWVyID0gTS5lbGVtZW50c1tqXVtpXSAvIE0uZWxlbWVudHNbaV1baV1cbiAgICAgICAgICBlbHMgPSBbXVxuICAgICAgICAgIGZvciAocCA9IDA7IHAgPCBucDsgcCsrKSB7XG4gICAgICAgICAgICAvLyBFbGVtZW50cyB3aXRoIGNvbHVtbiBudW1iZXJzIHVwIHRvIGFuIGluY2x1ZGluZyB0aGUgbnVtYmVyIG9mIHRoZVxuICAgICAgICAgICAgLy8gcm93IHRoYXQgd2UncmUgc3VidHJhY3RpbmcgY2FuIHNhZmVseSBiZSBzZXQgc3RyYWlnaHQgdG8gemVybyxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoYXQncyB0aGUgcG9pbnQgb2YgdGhpcyByb3V0aW5lIGFuZCBpdCBhdm9pZHMgaGF2aW5nIHRvXG4gICAgICAgICAgICAvLyBsb29wIG92ZXIgYW5kIGNvcnJlY3Qgcm91bmRpbmcgZXJyb3JzIGxhdGVyXG4gICAgICAgICAgICBlbHMucHVzaChcbiAgICAgICAgICAgICAgcCA8PSBpID8gMCA6IE0uZWxlbWVudHNbal1bcF0gLSBNLmVsZW1lbnRzW2ldW3BdICogbXVsdGlwbGllclxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBNLmVsZW1lbnRzW2pdID0gZWxzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE1cbiAgfSxcblxuICBkZXRlcm1pbmFudDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNTcXVhcmUoKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgdmFyIE0gPSB0aGlzLnRvUmlnaHRUcmlhbmd1bGFyKClcbiAgICB2YXIgZGV0ID0gTS5lbGVtZW50c1swXVswXSxcbiAgICAgIG4gPSBNLmVsZW1lbnRzLmxlbmd0aFxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICBkZXQgPSBkZXQgKiBNLmVsZW1lbnRzW2ldW2ldXG4gICAgfVxuICAgIHJldHVybiBkZXRcbiAgfSxcblxuICBpc1Npbmd1bGFyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1NxdWFyZSgpICYmIHRoaXMuZGV0ZXJtaW5hbnQoKSA9PT0gMFxuICB9LFxuXG4gIGF1Z21lbnQ6IGZ1bmN0aW9uKG1hdHJpeCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHVwKClcbiAgICB9XG4gICAgdmFyIE0gPSBtYXRyaXguZWxlbWVudHMgfHwgbWF0cml4XG4gICAgaWYgKHR5cGVvZiBNWzBdWzBdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgTSA9IFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKE0pLmVsZW1lbnRzXG4gICAgfVxuICAgIHZhciBUID0gdGhpcy5kdXAoKSxcbiAgICAgIGNvbHMgPSBULmVsZW1lbnRzWzBdLmxlbmd0aFxuICAgIHZhciBpID0gVC5lbGVtZW50cy5sZW5ndGgsXG4gICAgICBuaiA9IE1bMF0ubGVuZ3RoLFxuICAgICAgalxuICAgIGlmIChpICE9PSBNLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaiA9IG5qXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIFQuZWxlbWVudHNbaV1bY29scyArIGpdID0gTVtpXVtqXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gVFxuICB9LFxuXG4gIGludmVyc2U6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzU3F1YXJlKCkgfHwgdGhpcy5pc1Npbmd1bGFyKCkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHZhciBuID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICBpID0gbixcbiAgICAgIGpcbiAgICB2YXIgTSA9IHRoaXMuYXVnbWVudChTeWx2ZXN0ZXIuTWF0cml4LkkobikpLnRvUmlnaHRUcmlhbmd1bGFyKClcbiAgICB2YXIgbnAgPSBNLmVsZW1lbnRzWzBdLmxlbmd0aCxcbiAgICAgIHAsXG4gICAgICBlbHMsXG4gICAgICBkaXZpc29yXG4gICAgdmFyIGludmVyc2VfZWxlbWVudHMgPSBbXSxcbiAgICAgIG5ld19lbGVtZW50XG4gICAgLy8gU3lsdmVzdGVyLk1hdHJpeCBpcyBub24tc2luZ3VsYXIgc28gdGhlcmUgd2lsbCBiZSBubyB6ZXJvcyBvbiB0aGVcbiAgICAvLyBkaWFnb25hbC4gQ3ljbGUgdGhyb3VnaCByb3dzIGZyb20gbGFzdCB0byBmaXJzdC5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAvLyBGaXJzdCwgbm9ybWFsaXNlIGRpYWdvbmFsIGVsZW1lbnRzIHRvIDFcbiAgICAgIGVscyA9IFtdXG4gICAgICBpbnZlcnNlX2VsZW1lbnRzW2ldID0gW11cbiAgICAgIGRpdmlzb3IgPSBNLmVsZW1lbnRzW2ldW2ldXG4gICAgICBmb3IgKHAgPSAwOyBwIDwgbnA7IHArKykge1xuICAgICAgICBuZXdfZWxlbWVudCA9IE0uZWxlbWVudHNbaV1bcF0gLyBkaXZpc29yXG4gICAgICAgIGVscy5wdXNoKG5ld19lbGVtZW50KVxuICAgICAgICAvLyBTaHVmZmxlIG9mZiB0aGUgY3VycmVudCByb3cgb2YgdGhlIHJpZ2h0IGhhbmQgc2lkZSBpbnRvIHRoZSByZXN1bHRzXG4gICAgICAgIC8vIGFycmF5IGFzIGl0IHdpbGwgbm90IGJlIG1vZGlmaWVkIGJ5IGxhdGVyIHJ1bnMgdGhyb3VnaCB0aGlzIGxvb3BcbiAgICAgICAgaWYgKHAgPj0gbikge1xuICAgICAgICAgIGludmVyc2VfZWxlbWVudHNbaV0ucHVzaChuZXdfZWxlbWVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgTS5lbGVtZW50c1tpXSA9IGVsc1xuICAgICAgLy8gVGhlbiwgc3VidHJhY3QgdGhpcyByb3cgZnJvbSB0aG9zZSBhYm92ZSBpdCB0byBnaXZlIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAgICAgIC8vIG9uIHRoZSBsZWZ0IGhhbmQgc2lkZVxuICAgICAgaiA9IGlcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgZWxzID0gW11cbiAgICAgICAgZm9yIChwID0gMDsgcCA8IG5wOyBwKyspIHtcbiAgICAgICAgICBlbHMucHVzaChNLmVsZW1lbnRzW2pdW3BdIC0gTS5lbGVtZW50c1tpXVtwXSAqIE0uZWxlbWVudHNbal1baV0pXG4gICAgICAgIH1cbiAgICAgICAgTS5lbGVtZW50c1tqXSA9IGVsc1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUoaW52ZXJzZV9lbGVtZW50cylcbiAgfSxcblxuICBzZXRFbGVtZW50czogZnVuY3Rpb24oZWxzKSB7XG4gICAgdmFyIGksXG4gICAgICBqLFxuICAgICAgZWxlbWVudHMgPSBlbHMuZWxlbWVudHMgfHwgZWxzXG4gICAgaWYgKGVsZW1lbnRzWzBdICYmIHR5cGVvZiBlbGVtZW50c1swXVswXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGkgPSBlbGVtZW50cy5sZW5ndGhcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBbXVxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBqID0gZWxlbWVudHNbaV0ubGVuZ3RoXG4gICAgICAgIHRoaXMuZWxlbWVudHNbaV0gPSBbXVxuICAgICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1tpXVtqXSA9IGVsZW1lbnRzW2ldW2pdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIHZhciBuID0gZWxlbWVudHMubGVuZ3RoXG4gICAgdGhpcy5lbGVtZW50cyA9IFtdXG4gICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKFtlbGVtZW50c1tpXV0pXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH0sXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWxlbWVudHMpIHtcbiAgcmV0dXJuIFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKGVsZW1lbnRzKS5pbnZlcnNlKCkuZWxlbWVudHNcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4oZnVuY3Rpb24oKXtcblxuICB2YXJcbiAgICBidWYsXG4gICAgYnVmSWR4ID0gMCxcbiAgICBoZXhCeXRlcyA9IFtdLFxuICAgIGlcbiAgO1xuXG4gIC8vIFByZS1jYWxjdWxhdGUgdG9TdHJpbmcoMTYpIGZvciBzcGVlZFxuICBmb3IgKGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgICBoZXhCeXRlc1tpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG4gIH1cblxuICAvLyBCdWZmZXIgcmFuZG9tIG51bWJlcnMgZm9yIHNwZWVkXG4gIC8vIFJlZHVjZSBtZW1vcnkgdXNhZ2UgYnkgZGVjcmVhc2luZyB0aGlzIG51bWJlciAobWluIDE2KVxuICAvLyBvciBpbXByb3ZlIHNwZWVkIGJ5IGluY3JlYXNpbmcgdGhpcyBudW1iZXIgKHRyeSAxNjM4NClcbiAgdXVpZC5CVUZGRVJfU0laRSA9IDQwOTY7XG5cbiAgLy8gQmluYXJ5IHV1aWRzXG4gIHV1aWQuYmluID0gdXVpZEJpbjtcblxuICAvLyBDbGVhciBidWZmZXJcbiAgdXVpZC5jbGVhckJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgIGJ1ZiA9IG51bGw7XG4gICAgYnVmSWR4ID0gMDtcbiAgfTtcblxuICAvLyBUZXN0IGZvciB1dWlkXG4gIHV1aWQudGVzdCA9IGZ1bmN0aW9uKHV1aWQpIHtcbiAgICBpZiAodHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gL15bMC05YS1mXXs4fS1bMC05YS1mXXs0fS00WzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9JC9pLnRlc3QodXVpZCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyBOb2RlICYgQnJvd3NlciBzdXBwb3J0XG4gIHZhciBjcnlwdDA7XG4gIGlmICh0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNyeXB0MCA9IGNyeXB0bztcbiAgfSBlbHNlIGlmKCAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpICYmICh0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJykpIHtcbiAgICBjcnlwdDAgPSB3aW5kb3cubXNDcnlwdG87IC8vIElFMTFcbiAgfVxuXG4gIGlmICgodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpICYmICh0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICBjcnlwdDAgPSBjcnlwdDAgfHwgcmVxdWlyZSgnY3J5cHRvJyk7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LnV1aWQgPSB1dWlkO1xuICB9XG5cbiAgLy8gVXNlIGJlc3QgYXZhaWxhYmxlIFBSTkdcbiAgLy8gQWxzbyBleHBvc2UgdGhpcyBzbyB5b3UgY2FuIG92ZXJyaWRlIGl0LlxuICB1dWlkLnJhbmRvbUJ5dGVzID0gKGZ1bmN0aW9uKCl7XG4gICAgaWYgKGNyeXB0MCkge1xuICAgICAgaWYgKGNyeXB0MC5yYW5kb21CeXRlcykge1xuICAgICAgICByZXR1cm4gY3J5cHQwLnJhbmRvbUJ5dGVzO1xuICAgICAgfVxuICAgICAgaWYgKGNyeXB0MC5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5zbGljZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShuKTtcbiAgICAgICAgICAgIGNyeXB0MC5nZXRSYW5kb21WYWx1ZXMoYnl0ZXMpO1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYnl0ZXMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShuKTtcbiAgICAgICAgICBjcnlwdDAuZ2V0UmFuZG9tVmFsdWVzKGJ5dGVzKTtcbiAgICAgICAgICByZXR1cm4gYnl0ZXM7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbihuKSB7XG4gICAgICB2YXIgaSwgciA9IFtdO1xuICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICByLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8vIEJ1ZmZlciBzb21lIHJhbmRvbSBieXRlcyBmb3Igc3BlZWRcbiAgZnVuY3Rpb24gcmFuZG9tQnl0ZXNCdWZmZXJlZChuKSB7XG4gICAgaWYgKCFidWYgfHwgKChidWZJZHggKyBuKSA+IHV1aWQuQlVGRkVSX1NJWkUpKSB7XG4gICAgICBidWZJZHggPSAwO1xuICAgICAgYnVmID0gdXVpZC5yYW5kb21CeXRlcyh1dWlkLkJVRkZFUl9TSVpFKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zi5zbGljZShidWZJZHgsIGJ1ZklkeCArPSBuKTtcbiAgfVxuXG4gIC8vIHV1aWQuYmluXG4gIGZ1bmN0aW9uIHV1aWRCaW4oKSB7XG4gICAgdmFyIGIgPSByYW5kb21CeXRlc0J1ZmZlcmVkKDE2KTtcbiAgICBiWzZdID0gKGJbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgYls4XSA9IChiWzhdICYgMHgzZikgfCAweDgwO1xuICAgIHJldHVybiBiO1xuICB9XG5cbiAgLy8gU3RyaW5nIFVVSUR2NCAoUmFuZG9tKVxuICBmdW5jdGlvbiB1dWlkKCkge1xuICAgIHZhciBiID0gdXVpZEJpbigpO1xuICAgIHJldHVybiBoZXhCeXRlc1tiWzBdXSArIGhleEJ5dGVzW2JbMV1dICtcbiAgICAgIGhleEJ5dGVzW2JbMl1dICsgaGV4Qnl0ZXNbYlszXV0gKyAnLScgK1xuICAgICAgaGV4Qnl0ZXNbYls0XV0gKyBoZXhCeXRlc1tiWzVdXSArICctJyArXG4gICAgICBoZXhCeXRlc1tiWzZdXSArIGhleEJ5dGVzW2JbN11dICsgJy0nICtcbiAgICAgIGhleEJ5dGVzW2JbOF1dICsgaGV4Qnl0ZXNbYls5XV0gKyAnLScgK1xuICAgICAgaGV4Qnl0ZXNbYlsxMF1dICsgaGV4Qnl0ZXNbYlsxMV1dICtcbiAgICAgIGhleEJ5dGVzW2JbMTJdXSArIGhleEJ5dGVzW2JbMTNdXSArXG4gICAgICBoZXhCeXRlc1tiWzE0XV0gKyBoZXhCeXRlc1tiWzE1XV1cbiAgICA7XG4gIH1cblxufSkoKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC1yYW5kb20nO1xuaW1wb3J0IHsgaXNWaXNpYmxlTm9kZSB9IGZyb20gXCJAZmlnbWEtcGx1Z2luL2hlbHBlcnNcIjtcbmltcG9ydCByYXdMaWdodENvbG9yVG9rZW5zIGZyb20gJy4uLy4uL2RhdGEvbGlnaHQtbW9kZS5qc29uJztcbmltcG9ydCByYXdEYXJrQ29sb3JUb2tlbnMgZnJvbSAnLi4vLi4vZGF0YS9kYXJrLW1vZGUuanNvbic7XG5jb25zdCBjcmVhdGVUYWJsZSA9IChtc2cpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHRhYmxlRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGxldCBoZWFkZXJDZWxsID0geWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhcImNlOGZhOGU4Y2FiMDdhMTlmODNmNDE4MWFjOGNiZTc2MDkzYzZiYzNcIik7XG4gICAgbGV0IHRhYmxlUm93ID0gZmlnbWEuY3JlYXRlQ29tcG9uZW50KCk7XG4gICAgbGV0IGNlbGxGaWxsQ29udGFpbmVyWSA9IGZhbHNlO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICB0YWJsZUZyYW1lLm5hbWUgPSBcIlRhYmxlXCI7XG4gICAgdGFibGVGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICB0YWJsZUZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgdGFibGVGcmFtZS54ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLng7XG4gICAgdGFibGVGcmFtZS55ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgbXNnLmNvbHVtbkNvbmZpZ3VyYXRpb24uZmluZCgoY29sKSA9PiAoY2VsbEZpbGxDb250YWluZXJZID0gY29sLm11bHRpVmFsdWUpKTtcbiAgICBbLi4uQXJyYXkobXNnLnJvd3MgKyAxKS5rZXlzKCldLm1hcCgocm93SW5kZXgpID0+IHtcbiAgICAgICAgdGFibGVSb3cubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICB0YWJsZVJvdy5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgdGFibGVSb3cubmFtZSA9IFwiUm93XCI7XG4gICAgICAgIG1zZy5jb2x1bW5Db25maWd1cmF0aW9uLm1hcCgoY29sKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCB7IG5hbWU6IGNvbE5hbWUsIGFsaWdubWVudDogY29sQWxpZ25tZW50LCBjZWxsVHlwZTogY29sQ2VsbFR5cGUsIG11bHRpVmFsdWU6IGNvbE11bHRpVmFsdWUsIH0gPSBjb2w7XG4gICAgICAgICAgICBjb2xBbGlnbm1lbnQgPVxuICAgICAgICAgICAgICAgIGNvbEFsaWdubWVudFswXS50b1VwcGVyQ2FzZSgpICsgY29sQWxpZ25tZW50LnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGNvbENlbGxUeXBlID0gY29sQ2VsbFR5cGVbMF0udG9VcHBlckNhc2UoKSArIGNvbENlbGxUeXBlLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGNvbE11bHRpVmFsdWUgPSBjb2xNdWx0aVZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjb2xNdWx0aVZhbHVlID1cbiAgICAgICAgICAgICAgICBjb2xNdWx0aVZhbHVlWzBdLnRvVXBwZXJDYXNlKCkgKyBjb2xNdWx0aVZhbHVlLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGlzSGVhZGVyQ2VsbCA9IGhlYWRlckNlbGwuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dE5vZGVPZkhlYWRlckNlbGwgPSB0aGlzSGVhZGVyQ2VsbC5jaGlsZHJlblswXS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5uYW1lID0gY29sTmFtZS5sZW5ndGggPiAwID8gY29sTmFtZSA6IFwiSGVhZGVyXCI7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGVPZkhlYWRlckNlbGwuZGVsZXRlQ2hhcmFjdGVycygwLCB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbC5jaGFyYWN0ZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGVPZkhlYWRlckNlbGwuaW5zZXJ0Q2hhcmFjdGVycygwLCBjb2xOYW1lLmxlbmd0aCA+IDAgPyBjb2xOYW1lIDogXCJIZWFkZXJcIik7XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwuc2V0UHJvcGVydGllcyh7IEFsaWdubWVudDogY29sQWxpZ25tZW50IH0pO1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLnJlc2l6ZShjb2xNdWx0aVZhbHVlID09PSBcIlRydWVcIiA/IDEyMCA6IHRoaXNIZWFkZXJDZWxsLndpZHRoLCB0aGlzSGVhZGVyQ2VsbC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLmNoaWxkcmVuWzBdLmxheW91dEdyb3cgPSBjZWxsRmlsbENvbnRhaW5lclkgPyAxIDogMDtcbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBjZWxsRmlsbENvbnRhaW5lcllcbiAgICAgICAgICAgICAgICAgICAgPyBcIkZJWEVEXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkFVVE9cIjtcbiAgICAgICAgICAgICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0aGlzSGVhZGVyQ2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0YWJsZUZyYW1lLmFwcGVuZENoaWxkKHRhYmxlUm93KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aGlzVGFibGVSb3cgPSB0YWJsZVJvdy5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgdGhpc1RhYmxlUm93LmNoaWxkcmVuLm1hcCgoY2VsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgeyBjZWxsVHlwZTogY29sQ2VsbFR5cGUsIG11bHRpVmFsdWU6IGNvbE11bHRpVmFsdWUgfSA9IG1zZy5jb2x1bW5Db25maWd1cmF0aW9uW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjb2xDZWxsVHlwZSA9IGNvbENlbGxUeXBlWzBdLnRvVXBwZXJDYXNlKCkgKyBjb2xDZWxsVHlwZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICAgICAgY29sTXVsdGlWYWx1ZSA9IGNvbE11bHRpVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb2xNdWx0aVZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgY29sTXVsdGlWYWx1ZVswXS50b1VwcGVyQ2FzZSgpICsgY29sTXVsdGlWYWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICAgICAgY2VsbC5uYW1lID09PSBcIkhlYWRlclwiID8gKGNlbGwubmFtZSA9IFwiQ2VsbFwiKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRQcm9wZXJ0aWVzKHsgVHlwZTogXCJCb2R5XCIgfSk7XG4gICAgICAgICAgICAgICAgY2VsbC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgICAgICAgICAgVHlwZTogY29sQ2VsbFR5cGUsXG4gICAgICAgICAgICAgICAgICAgIFwiTXVsdGktdmFsdWVcIjogY29sTXVsdGlWYWx1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjZWxsLmNoaWxkcmVuWzBdLmxheW91dEdyb3cgPSBjZWxsRmlsbENvbnRhaW5lclkgPyAxIDogMDtcbiAgICAgICAgICAgICAgICBjZWxsLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IGNlbGxGaWxsQ29udGFpbmVyWSA/IFwiRklYRURcIiA6IFwiQVVUT1wiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YWJsZUZyYW1lLmFwcGVuZENoaWxkKHRoaXNUYWJsZVJvdyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgdGFibGVEYXRhID0gT2JqZWN0LmFzc2lnbih7IGZpbGVOYW1lOiBmaWdtYS5jdXJyZW50UGFnZS5wYXJlbnQubmFtZSwgZmlsZUtleTogZmlnbWEuZmlsZUtleSwgXCJDb2x1bW4gY291bnRcIjogbXNnLmNvbHVtbkNvbmZpZ3VyYXRpb24ubGVuZ3RoLCBcIlJvdyBjb3VudFwiOiBtc2cucm93cywgXCJDb2x1bW4gQ29uZmlndXJhdGlvblwiOiBtc2cuY29sdW1uQ29uZmlndXJhdGlvbiB9LCBjdXN0b21FdmVudERhdGEpO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJ0YWJsZS1jcmVhdGVkXCIsIG1lc3NhZ2U6IHRhYmxlRGF0YSB9KTtcbiAgICBmaWdtYS5ub3RpZnkoXCJUYWJsZSBjcmVhdGVkIOKchVwiKTtcbn0pO1xuY29uc3QgcHVzaFRleHRMYXllclRvQXJyYXkgPSAobGF5ZXIsIGFycmF5KSA9PiB7XG4gICAgYXJyYXkucHVzaCh7XG4gICAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgICAgbmFtZTogbGF5ZXIubmFtZSxcbiAgICAgICAgdmlzaWJsZTogbGF5ZXIudmlzaWJsZSxcbiAgICAgICAgeDogbGF5ZXIueCxcbiAgICAgICAgeTogbGF5ZXIueSxcbiAgICAgICAgdHlwZTogbGF5ZXIudHlwZSxcbiAgICAgICAgY2hhcmFjdGVyczogbGF5ZXIgPT09IG51bGwgfHwgbGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheWVyLmNoYXJhY3RlcnMsXG4gICAgICAgIGNoaWxkcmVuOiBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuY2hpbGRyZW4sXG4gICAgfSk7XG59O1xuY29uc3Qgc2VuZEN1cnJlbnRUZXh0U2VsZWN0aW9uID0gKCkgPT4ge1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgbGV0IHRleHRMYXllcnMgPSBbXTtcbiAgICBzZWxlY3Rpb24uZm9yRWFjaCgoc2VsZWN0ZWRMYXllcikgPT4ge1xuICAgICAgICBpZiAoISEoc2VsZWN0ZWRMYXllciA9PT0gbnVsbCB8fCBzZWxlY3RlZExheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZExheWVyLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0TGF5ZXJzID0gc2VsZWN0ZWRMYXllci5maW5kQWxsKG4gPT4gbi50eXBlID09PSAnVEVYVCcpO1xuICAgICAgICAgICAgc2VsZWN0ZWRUZXh0TGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaXNWaXNpYmxlTm9kZShsYXllcikgJiYgcHVzaFRleHRMYXllclRvQXJyYXkobGF5ZXIsIHRleHRMYXllcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0ZWRMYXllci50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgIGlzVmlzaWJsZU5vZGUoc2VsZWN0ZWRMYXllcikgJiYgcHVzaFRleHRMYXllclRvQXJyYXkoc2VsZWN0ZWRMYXllciwgdGV4dExheWVycyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcIm5ldy10ZXh0LXNlbGVjdGlvblwiLFxuICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICB0ZXh0TGF5ZXJzLFxuICAgICAgICAgICAgc2VsZWN0ZWRMYXllcnM6IHNlbGVjdGlvblxuICAgICAgICB9XG4gICAgfSk7XG59O1xuY29uc3QgcmdiVG9IZXggPSAociwgZywgYikgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFRvSGV4ID0gKGMpID0+IHtcbiAgICAgICAgYyA9IE1hdGgucm91bmQoYyAqIDI1NSk7XG4gICAgICAgIGxldCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyAnMCcgKyBoZXggOiBoZXg7XG4gICAgfTtcbiAgICBjb25zdCBjb21iaW5lQ29tcG9uZW50cyA9IChyLCBnLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiAnIycgKyBjb21wb25lbnRUb0hleChyKSArIGNvbXBvbmVudFRvSGV4KGcpICsgY29tcG9uZW50VG9IZXgoYik7XG4gICAgfTtcbiAgICByZXR1cm4gY29tYmluZUNvbXBvbmVudHMociwgZywgYik7XG59O1xuY29uc3QgcHVzaENvbG9yVG9BcnJheSA9IChsYXllciwgY29sb3JUeXBlLCBhcnJheSkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGNvbnN0IHN0eWxlSWRUeXBlID0gY29sb3JUeXBlID09PSAnZmlsbHMnID8gJ2ZpbGxTdHlsZUlkJyA6ICdzdHJva2VTdHlsZUlkJztcbiAgICBjb25zdCBpc1NvbGlkQ29sb3IgPSAoKF9hID0gbGF5ZXIgPT09IG51bGwgfHwgbGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheWVyLmZpbGxzWzBdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudHlwZSkgPT09ICdTT0xJRCc7XG4gICAgY29uc3QgY29sb3JJc0ltYWdlID0gY29sb3JUeXBlID09PSAnZmlsbHMnICYmICgoX2IgPSBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuZmlsbHNbMF0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50eXBlKSA9PT0gJ0lNQUdFJztcbiAgICBjb25zdCBjb2xvcklzR3JhZGllbnQgPSBjb2xvclR5cGUgPT09ICdmaWxscycgJiYgKChfYyA9IGxheWVyID09PSBudWxsIHx8IGxheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXllci5maWxsc1swXSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnR5cGUuaW5jbHVkZXMoJ0dSQURJRU5UJykpO1xuICAgIGNvbnN0IGNvbG9ySXNWaXNpYmxlID0gbGF5ZXJbY29sb3JUeXBlXVswXS52aXNpYmxlO1xuICAgIGlmICghY29sb3JJc0ltYWdlICYmICFjb2xvcklzR3JhZGllbnQgJiYgY29sb3JJc1Zpc2libGUgJiYgIWxheWVyLmlzQ2hpbGRPZkljb25XaXRoRmlsbCkge1xuICAgICAgICBjb25zdCBjb2xvckluSGV4ID0gKGNvbG9ySW5SR0IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZ2JUb0hleChjb2xvckluUkdCLnIsIGNvbG9ySW5SR0IuZywgY29sb3JJblJHQi5iKTtcbiAgICAgICAgfTtcbiAgICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgICAgICBjb2xvcklkOiB1dWlkKCksXG4gICAgICAgICAgICBsYXllcklkOiBsYXllci5sYXllcklkLFxuICAgICAgICAgICAgbGF5ZXJOYW1lOiBsYXllci5uYW1lLFxuICAgICAgICAgICAgbGF5ZXJUeXBlOiBsYXllci50eXBlLFxuICAgICAgICAgICAgY29sb3I6IGxheWVyW2NvbG9yVHlwZV0sXG4gICAgICAgICAgICBjb2xvclN0eWxlSWQ6IGxheWVyW3N0eWxlSWRUeXBlXSxcbiAgICAgICAgICAgIGhhc0NvbG9yU3R5bGU6IGlzU29saWRDb2xvciA/IGxheWVyW3N0eWxlSWRUeXBlXS5sZW5ndGggPiAwIDogZmFsc2UsXG4gICAgICAgICAgICB2aXNpYmxlOiBsYXllci52aXNpYmxlLFxuICAgICAgICAgICAgY29sb3JUeXBlOiBjb2xvclR5cGUuc2xpY2UoMCwgLTEpLFxuICAgICAgICAgICAgY29sb3JJbkhleDogY29sb3JJbkhleChsYXllcltjb2xvclR5cGVdWzBdLmNvbG9yKSxcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmxldCBjb2xvclRva2VucyA9IFtdO1xuY29uc3QgZ2V0Q29sb3JUb2tlbnMgPSAobWFwVGhlbWVzVG9FYWNoT3RoZXIpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBsaWdodFRoZW1lVG9rZW5zID0geWllbGQgUHJvbWlzZS5hbGwocmF3TGlnaHRDb2xvclRva2Vucy5tZXRhLnN0eWxlcy5tYXAoKHN0eWxlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUpLCB7IHRoZW1lOiAnbGlnaHQnIH0pO1xuICAgIH0pKSk7XG4gICAgbGV0IGRhcmtUaGVtZVRva2VucyA9IHlpZWxkIFByb21pc2UuYWxsKHJhd0RhcmtDb2xvclRva2Vucy5tZXRhLnN0eWxlcy5tYXAoKHN0eWxlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUpLCB7IHRoZW1lOiAnZGFyaycgfSk7XG4gICAgfSkpKTtcbiAgICBpZiAobWFwVGhlbWVzVG9FYWNoT3RoZXIpIHtcbiAgICAgICAgbGlnaHRUaGVtZVRva2VucyA9IGxpZ2h0VGhlbWVUb2tlbnMubWFwKHRva2VuID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhcmtUaGVtZVRva2VuID0gZGFya1RoZW1lVG9rZW5zLmZpbHRlcihkYXJrVG9rZW4gPT4gdG9rZW4ubmFtZS50b0xvd2VyQ2FzZSgpID09PSBkYXJrVG9rZW4ubmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRva2VuKSwgeyBkYXJrVGhlbWVUb2tlbjogZGFya1RoZW1lVG9rZW5bMF0ua2V5IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZGFya1RoZW1lVG9rZW5zID0gZGFya1RoZW1lVG9rZW5zLm1hcCh0b2tlbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaWdodFRoZW1lVG9rZW4gPSBsaWdodFRoZW1lVG9rZW5zLmZpbHRlcihsaWdodFRva2VuID0+IHRva2VuLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbGlnaHRUb2tlbi5uYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdG9rZW4pLCB7IGxpZ2h0VGhlbWVUb2tlbjogbGlnaHRUaGVtZVRva2VuWzBdLmtleSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGFsbENvbG9yVG9rZW5zID0gbGlnaHRUaGVtZVRva2Vucy5jb25jYXQoZGFya1RoZW1lVG9rZW5zKTtcbiAgICBjb25zdCB0ZW1wUmVjdGFuZ2xlID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgY29sb3JUb2tlbnMgPSB5aWVsZCBQcm9taXNlLmFsbChhbGxDb2xvclRva2Vucy5tYXAoKHN0eWxlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdGVtcFJlY3RhbmdsZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGxldCBjb2xvclN0eWxlV2l0aEhleCA9IHt9O1xuICAgICAgICBjb25zdCBpbXBvcnRlZFN0eWxlID0geWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKHN0eWxlLmtleSk7XG4gICAgICAgIHRlbXBSZWN0YW5nbGUuZmlsbFN0eWxlSWQgPSBpbXBvcnRlZFN0eWxlLmlkO1xuICAgICAgICBpZiAodGVtcFJlY3RhbmdsZS5maWxsc1swXS5jb2xvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb2xvclN0eWxlV2l0aEhleCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUpLCB7IGhleDogcmdiVG9IZXgodGVtcFJlY3RhbmdsZS5maWxsc1swXS5jb2xvci5yLCB0ZW1wUmVjdGFuZ2xlLmZpbGxzWzBdLmNvbG9yLmcsIHRlbXBSZWN0YW5nbGUuZmlsbHNbMF0uY29sb3IuYikgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb2xvclN0eWxlV2l0aEhleCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUpLCB7IGhleDogJ05vbmUnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xvclN0eWxlV2l0aEhleDtcbiAgICB9KSkpO1xuICAgIHRlbXBSZWN0YW5nbGUucmVtb3ZlKCk7XG59KTtcbmNvbnN0IGdldENvbG9yU3RhdHMgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB5aWVsZCBnZXRDb2xvclRva2Vucyh0cnVlKTtcbiAgICBjb25zdCBnZXRSYXdMYXllcnNXaXRoQ29sb3IgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IHJlbGV2YW50TGF5ZXJzID0gc2VsZWN0aW9uLm1hcCgoc2VsZWN0ZWRMYXllcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgbGV0IG91dHB1dEZvckxheWVyc1dpdGhDaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgY29uc3QgaXNSZWxldmFudExheWVyID0gKG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NlcHRhYmxlTm9kZXR5cGVzID0gW1xuICAgICAgICAgICAgICAgICAgICAnRUxMSVBTRScsXG4gICAgICAgICAgICAgICAgICAgICdGUkFNRScsXG4gICAgICAgICAgICAgICAgICAgICdHUk9VUCcsXG4gICAgICAgICAgICAgICAgICAgICdDT01QT05FTlQnLFxuICAgICAgICAgICAgICAgICAgICAnSU5TVEFOQ0UnLFxuICAgICAgICAgICAgICAgICAgICAnTElORScsXG4gICAgICAgICAgICAgICAgICAgICdQT0xZR09OJyxcbiAgICAgICAgICAgICAgICAgICAgJ1JFQ1RBTkdMRScsXG4gICAgICAgICAgICAgICAgICAgICdTSEFQRV9XSVRIX1RFWFQnLFxuICAgICAgICAgICAgICAgICAgICAnU1RBUicsXG4gICAgICAgICAgICAgICAgICAgICdURVhUJyxcbiAgICAgICAgICAgICAgICAgICAgJ0JPT0xFQU5fT1BFUkFUSU9OJ1xuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgbGV0IGhhc0ZpbGwgPSBcImZpbGxzXCIgaW4gbiAmJiAobiA9PT0gbnVsbCB8fCBuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuLmZpbGxzWzBdKSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGxldCBoYXNTdHJva2UgPSBcInN0cm9rZXNcIiBpbiBuICYmIChuID09PSBudWxsIHx8IG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG4uc3Ryb2tlc1swXSkgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNGaWxsT3JTdHJva2UgPSBoYXNGaWxsIHx8IGhhc1N0cm9rZTtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlSXNWYWxpZE5vZGVUeXBlID0gYWNjZXB0YWJsZU5vZGV0eXBlcy5zb21lKChub2RlVHlwZSkgPT4gbi50eXBlID09PSBub2RlVHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVJc1ZhbGlkTm9kZVR5cGUgJiYgaGFzRmlsbE9yU3Ryb2tlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTGF5ZXJIYXNDaGlsZHJlbiA9ICdmaW5kQWxsJyBpbiBzZWxlY3RlZExheWVyICYmXG4gICAgICAgICAgICAgICAgKChfYSA9IHNlbGVjdGVkTGF5ZXIgPT09IG51bGwgfHwgc2VsZWN0ZWRMYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRMYXllci5jaGlsZHJlbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkgPiAwO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkTGF5ZXJIYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlzUmVsZXZhbnRMYXllcihzZWxlY3RlZExheWVyKTtcbiAgICAgICAgICAgICAgICBvdXRwdXRGb3JMYXllcnNXaXRoQ2hpbGRyZW4gPSBzZWxlY3RlZExheWVyLmZpbmRBbGwoKG4pID0+IGlzUmVsZXZhbnRMYXllcihuKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1JlbGV2YW50TGF5ZXIoc2VsZWN0ZWRMYXllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5vdXRwdXRGb3JMYXllcnNXaXRoQ2hpbGRyZW5dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtzZWxlY3RlZExheWVyLCAuLi5vdXRwdXRGb3JMYXllcnNXaXRoQ2hpbGRyZW5dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzUmVsZXZhbnRMYXllcihzZWxlY3RlZExheWVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbc2VsZWN0ZWRMYXllcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgb3V0cHV0ID0gcmVsZXZhbnRMYXllcnMuZmxhdCgpO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQuZmlsdGVyKGxheWVyID0+IGlzVmlzaWJsZU5vZGUobGF5ZXIpKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuICAgIGNvbnN0IHJhd0xheWVyc1dpdGhDb2xvciA9IGdldFJhd0xheWVyc1dpdGhDb2xvcigpO1xuICAgIGNvbnN0IGxheWVyc1dpdGhDb2xvciA9IHJhd0xheWVyc1dpdGhDb2xvci5tYXAoKGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc0ZpbGwgPSBcImZpbGxzXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuZmlsbHNbMF0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaGFzU3Ryb2tlID0gXCJzdHJva2VzXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuc3Ryb2tlc1swXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBoYXNGaWxsQW5kU3Ryb2tlID0gaGFzRmlsbCAmJiBoYXNTdHJva2U7XG4gICAgICAgIGNvbnN0IGlzQ2hpbGRPZkljb24gPSBsYXllci5wYXJlbnQudHlwZSA9PT0gJ0JPT0xFQU5fT1BFUkFUSU9OJztcbiAgICAgICAgbGV0IHBhcmVudEljb25IYXNGaWxsID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGlzQ2hpbGRPZkljb25XaXRoRmlsbCA9IGlzQ2hpbGRPZkljb24gJiYgcGFyZW50SWNvbkhhc0ZpbGw7XG4gICAgICAgIGNvbnN0IGNoZWNrUGFyZW50Rm9yRmlsbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChcImZpbGxzXCIgaW4gbGF5ZXIucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyZW50SWNvbkhhc0ZpbGwgPSBsYXllci5wYXJlbnQuZmlsbHMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY2hlY2tQYXJlbnRGb3JGaWxsKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYXllcklkOiBsYXllci5pZCxcbiAgICAgICAgICAgIG5hbWU6IGxheWVyLm5hbWUsXG4gICAgICAgICAgICBmaWxsczogXCJmaWxsc1wiIGluIGxheWVyICYmIGxheWVyLmZpbGxzLFxuICAgICAgICAgICAgc3Ryb2tlczogXCJzdHJva2VzXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuc3Ryb2tlcyxcbiAgICAgICAgICAgIGZpbGxTdHlsZUlkOiBcImZpbGxTdHlsZUlkXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuZmlsbFN0eWxlSWQsXG4gICAgICAgICAgICBzdHJva2VTdHlsZUlkOiBcInN0cm9rZVN0eWxlSWRcIiBpbiBsYXllciAmJiBsYXllci5zdHJva2VTdHlsZUlkLFxuICAgICAgICAgICAgdmlzaWJsZTogbGF5ZXIudmlzaWJsZSxcbiAgICAgICAgICAgIHR5cGU6IGxheWVyLnR5cGUsXG4gICAgICAgICAgICBoYXNGaWxsOiBoYXNGaWxsLFxuICAgICAgICAgICAgaGFzU3Ryb2tlOiBoYXNTdHJva2UsXG4gICAgICAgICAgICBoYXNGaWxsQW5kU3Ryb2tlOiBoYXNGaWxsQW5kU3Ryb2tlLFxuICAgICAgICAgICAgaXNDaGlsZE9mSWNvbldpdGhGaWxsOiBpc0NoaWxkT2ZJY29uV2l0aEZpbGxcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zdCBhbGxJbnN0YW5jZXNPZkNvbG9yID0gbGF5ZXJzV2l0aENvbG9yXG4gICAgICAgIC5tYXAoKGxheWVyKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wQ29sb3JzID0gW107XG4gICAgICAgIGlmIChsYXllci5oYXNGaWxsQW5kU3Ryb2tlKSB7XG4gICAgICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyLCAnZmlsbHMnLCB0ZW1wQ29sb3JzKTtcbiAgICAgICAgICAgIHB1c2hDb2xvclRvQXJyYXkobGF5ZXIsICdzdHJva2VzJywgdGVtcENvbG9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGF5ZXIuaGFzRmlsbCkge1xuICAgICAgICAgICAgcHVzaENvbG9yVG9BcnJheShsYXllciwgJ2ZpbGxzJywgdGVtcENvbG9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGF5ZXIuaGFzU3Ryb2tlKSB7XG4gICAgICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyLCAnc3Ryb2tlcycsIHRlbXBDb2xvcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wQ29sb3JzO1xuICAgIH0pXG4gICAgICAgIC5mbGF0KCk7XG4gICAgY29uc3QgY29sb3JzV2l0aENvbG9yU3R5bGUgPSBhbGxJbnN0YW5jZXNPZkNvbG9yLmZpbHRlcigoY29sb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbG9yLmhhc0NvbG9yU3R5bGU7XG4gICAgfSk7XG4gICAgY29uc3QgY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUgPSBhbGxJbnN0YW5jZXNPZkNvbG9yLmZpbHRlcigoY29sb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbG9yVG9rZW5zLnNvbWUoKG9uZUNvcmVDb2xvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmNvbG9yU3R5bGVJZC5pbmNsdWRlcyhvbmVDb3JlQ29sb3Iua2V5KTtcbiAgICAgICAgfSk7XG4gICAgfSkubWFwKGNvbG9yID0+IHtcbiAgICAgICAgbGV0IG9uZUNvcmVUb2tlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29sb3JUb2tlbnMuZm9yRWFjaCgob25lQ29yZUNvbG9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29sb3IuY29sb3JTdHlsZUlkLmluY2x1ZGVzKG9uZUNvcmVDb2xvci5rZXkpKSB7XG4gICAgICAgICAgICAgICAgb25lQ29yZVRva2VuID0gb25lQ29yZUNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29sb3IpLCB7IHRva2VuOiBvbmVDb3JlVG9rZW4gfSk7XG4gICAgfSk7XG4gICAgY29uc3QgY29sb3JzTm90VXNpbmdPbmVDb3JlQ29sb3JTdHlsZSA9IGFsbEluc3RhbmNlc09mQ29sb3IuZmlsdGVyKChjb2xvcikgPT4ge1xuICAgICAgICByZXR1cm4gIWNvbG9yVG9rZW5zLnNvbWUoKG9uZUNvcmVDb2xvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmNvbG9yU3R5bGVJZC5pbmNsdWRlcyhvbmVDb3JlQ29sb3Iua2V5KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3Qgb25lQ29yZUNvbG9yU3R5bGVDb3ZlcmFnZSA9IGAkeygoY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUubGVuZ3RoIC8gYWxsSW5zdGFuY2VzT2ZDb2xvci5sZW5ndGgpICogMTAwKS50b0ZpeGVkKDIpfSVgO1xuICAgIGNvbnN0IGlkc09mQWxsSW5zdGFuY2VzT2ZDb2xvciA9IGFsbEluc3RhbmNlc09mQ29sb3IubWFwKChjb2xvcikgPT4gY29sb3IuY29sb3JJZCk7XG4gICAgY29uc3QgY29sb3JTdGF0cyA9IHtcbiAgICAgICAgc2VsZWN0ZWRMYXllcnNXaXRoQ29sb3I6IHJhd0xheWVyc1dpdGhDb2xvcixcbiAgICAgICAgYWxsSW5zdGFuY2VzT2ZDb2xvcjogYWxsSW5zdGFuY2VzT2ZDb2xvcixcbiAgICAgICAgY29sb3JzV2l0aENvbG9yU3R5bGU6IGNvbG9yc1dpdGhDb2xvclN0eWxlLFxuICAgICAgICBjb2xvcnNVc2luZ09uZUNvcmVTdHlsZTogY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUsXG4gICAgICAgIGNvbG9yc05vdFVzaW5nT25lQ29yZUNvbG9yU3R5bGU6IGNvbG9yc05vdFVzaW5nT25lQ29yZUNvbG9yU3R5bGUsXG4gICAgICAgIG9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2U6IG9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2UsXG4gICAgICAgIGlkc09mQWxsSW5zdGFuY2VzT2ZDb2xvcjogaWRzT2ZBbGxJbnN0YW5jZXNPZkNvbG9yLFxuICAgIH07XG4gICAgcmV0dXJuIGNvbG9yU3RhdHM7XG59KTtcbmNvbnN0IHNlbGVjdEFuZFpvb21Ub0xheWVyID0gKGxheWVySWQpID0+IHtcbiAgICBjb25zdCBsYXllciA9IGZpZ21hLmdldE5vZGVCeUlkKGxheWVySWQpO1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtsYXllcl07XG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtsYXllcl0pO1xufTtcbmxldCB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID0gdW5kZWZpbmVkO1xuY29uc3Qgc3dpdGNoVG9UaGVtZSA9ICh0aGVtZSwgY2xvc2VBZnRlclJ1biA9IGZhbHNlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKGNsb3NlQWZ0ZXJSdW4pIHtcbiAgICAgICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA3MCwgaGVpZ2h0OiAwIH0pO1xuICAgIH1cbiAgICBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uICYmICh0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID09PSBudWxsIHx8IHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24uY2FuY2VsKCkpO1xuICAgICAgICBmaWdtYS5ub3RpZnkoXCJTZWxlY3Qgc29tZSBsYXllcnMgYmVmb3JlIGNob29zaW5nIGEgdGhlbWVcIiwgeyBlcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuIGNsb3NlQWZ0ZXJSdW4gJiYgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgdGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiAmJiAodGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiA9PT0gbnVsbCB8fCB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uLmNhbmNlbCgpKTtcbiAgICBjb25zdCBsb2FkaW5nTm90aWZpY2F0aW9uID0gZmlnbWEubm90aWZ5KGBDb252ZXJ0aW5nIHNlbGVjdGlvbiB0byAke3RoZW1lfSBtb2RlLi4uYCk7XG4gICAgY29uc3QgY29sb3JTdGF0cyA9IHlpZWxkIGdldENvbG9yU3RhdHMoKTtcbiAgICBmb3IgKGNvbnN0IGNvbG9yIG9mIGNvbG9yU3RhdHMuY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUpIHtcbiAgICAgICAgaWYgKFwidGhlbWVcIiBpbiBjb2xvci50b2tlbiAmJiAoKF9hID0gY29sb3IudG9rZW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50aGVtZSkgIT09IHRoZW1lKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlPZlRva2VuSW5PcHBvc2l0ZVRoZW1lID0gdGhlbWUgPT09ICdsaWdodCcgP1xuICAgICAgICAgICAgICAgIGNvbG9yLnRva2VuLmxpZ2h0VGhlbWVUb2tlbiA6XG4gICAgICAgICAgICAgICAgY29sb3IudG9rZW4uZGFya1RoZW1lVG9rZW47XG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoa2V5T2ZUb2tlbkluT3Bwb3NpdGVUaGVtZSkudGhlbihpbXBvcnRlZCA9PiB7XG4gICAgICAgICAgICAgICAgZmlnbWEuZ2V0Tm9kZUJ5SWQoY29sb3IubGF5ZXJJZClbYCR7Y29sb3IuY29sb3JUeXBlfVN0eWxlSWRgXSA9IGltcG9ydGVkLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZGluZ05vdGlmaWNhdGlvbi5jYW5jZWwoKTtcbiAgICB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID0gZmlnbWEubm90aWZ5KGAke3RoZW1lID09PSAnbGlnaHQnID8gJ/CflIYnIDogJ/CfjJknfSBTZWxlY3Rpb24gc2V0IHRvICR7dGhlbWV9IG1vZGVgKTtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwidGhlbWUtc3dpdGNoZWRcIiwgbWVzc2FnZTogT2JqZWN0LmFzc2lnbih7IHN3aXRjaGVkVG86IHRoZW1lLCBjbG9zZUFmdGVyUnVuIH0sIGN1c3RvbUV2ZW50RGF0YSlcbiAgICB9KTtcbn0pO1xubGV0IGN1c3RvbUV2ZW50RGF0YSA9IHtcbiAgICBmaWxlTmFtZTogZmlnbWEuY3VycmVudFBhZ2UucGFyZW50Lm5hbWUsXG4gICAgZmlsZUtleTogZmlnbWEuZmlsZUtleSxcbiAgICBcIlVzZXIgTmFtZVwiOiBmaWdtYS5jdXJyZW50VXNlci5uYW1lLFxuICAgIFwiVXNlciBBdmF0YXJcIjogZmlnbWEuY3VycmVudFVzZXIucGhvdG9VcmwsXG4gICAgXCJVc2VyIElEXCI6IGZpZ21hLmN1cnJlbnRVc2VyLmlkLFxuICAgIFwiU2Vzc2lvbiBJRFwiOiBmaWdtYS5jdXJyZW50VXNlci5zZXNzaW9uSWQsXG59O1xuY29uc3QgbmF2aWdhdGVUbyA9IChzY3JlZW4pID0+IHtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiZmlnbWEtY29tbWFuZFwiLCBtZXNzYWdlOiBPYmplY3QuYXNzaWduKHsgb3BlbmVkVG86IHNjcmVlbiB9LCBjdXN0b21FdmVudERhdGEpXG4gICAgfSk7XG59O1xuc3dpdGNoIChmaWdtYS5jb21tYW5kKSB7XG4gICAgY2FzZSBcIm9wZW4taG9tZVwiOlxuICAgICAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDMwMCwgaGVpZ2h0OiA0NDggfSk7XG4gICAgICAgIG5hdmlnYXRlVG8oJ29wZW4taG9tZScpO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwib3Blbi10YWJsZS1jcmVhdG9yXCI6XG4gICAgICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogMzAwLCBoZWlnaHQ6IDQ0OCB9KTtcbiAgICAgICAgbmF2aWdhdGVUbygnb3Blbi10YWJsZS1jcmVhdG9yJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0aGVtZS1zd2l0Y2hlci10by1saWdodFwiOlxuICAgICAgICBzd2l0Y2hUb1RoZW1lKCdsaWdodCcsIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwidGhlbWUtc3dpdGNoZXItdG8tZGFya1wiOlxuICAgICAgICBzd2l0Y2hUb1RoZW1lKCdkYXJrJywgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvcGVuLWxhbmd1YWdlLWxpbnRlclwiOlxuICAgICAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDQ3NSwgaGVpZ2h0OiA1MDAgfSk7XG4gICAgICAgIG5hdmlnYXRlVG8oJ29wZW4tbGFuZ3VhZ2UtbGludGVyJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvcGVuLWNvbG9yLWxpbnRlclwiOlxuICAgICAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDQ3NSwgaGVpZ2h0OiA1MDAgfSk7XG4gICAgICAgIG5hdmlnYXRlVG8oJ29wZW4tY29sb3ItbGludGVyJyk7XG4gICAgICAgIGJyZWFrO1xufVxuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKG1zZy50eXBlID09PSBcIm5hdmlnYXRlLXRvLXRhYlwiKSB7XG4gICAgICAgIHN3aXRjaCAobXNnLnRhYkNsaWNrZWQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgICAgICAgICAgdWlTaXplID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0OFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKHVpU2l6ZS53aWR0aCwgdWlTaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbygnb3Blbi1ob21lJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGFibGUtY3JlYXRvclwiOlxuICAgICAgICAgICAgICAgIHVpU2l6ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NDhcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSh1aVNpemUud2lkdGgsIHVpU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG8oJ29wZW4tdGFibGUtY3JlYXRvcicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxhbmd1YWdlLWxpbnRlclwiOlxuICAgICAgICAgICAgICAgIHNlbmRDdXJyZW50VGV4dFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIHVpU2l6ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ3NSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSh1aVNpemUud2lkdGgsIHVpU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG8oJ29wZW4tbGFuZ3VhZ2UtbGludGVyJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY29sb3ItbGludGVyXCI6XG4gICAgICAgICAgICAgICAgdWlTaXplID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDc1LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKHVpU2l6ZS53aWR0aCwgdWlTaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbygnb3Blbi1jb2xvci1saW50ZXInKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiaW5pdGlhbGl6ZS1zZWxlY3Rpb25cIikge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcImluaXRpYWwtc2VsZWN0aW9uXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2Nsb3NlLXBsdWdpbicpIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcImNyZWF0ZS10YWJsZVwiKSB7XG4gICAgICAgIGNyZWF0ZVRhYmxlKG1zZyk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3J1bi1sYW5ndWFnZS1saW50ZXInKSB7XG4gICAgICAgIHNlbmRDdXJyZW50VGV4dFNlbGVjdGlvbigpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdyZXF1ZXN0LWxvY2FsLWN1c3RvbS1kaWN0aW9uYXJ5Jykge1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImxvY2FsLWN1c3RvbS1kaWN0aW9uYXJ5LXJldHJpZXZlZFwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdCA/IHJlc3VsdCA6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2FkZC10by1kaWN0aW9uYXJ5Jykge1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdDdXN0b21EaWN0aW9uYXJ5ID0gcmVzdWx0ID8gcmVzdWx0IDogW107XG4gICAgICAgICAgICBuZXdDdXN0b21EaWN0aW9uYXJ5LnB1c2gobXNnLndvcmRUb0FkZCk7XG4gICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIsIG5ld0N1c3RvbURpY3Rpb25hcnkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnZ2V0LXNhbXBsZS10ZXh0Jykge1xuICAgICAgICBjb25zdCBzYW1wbGVUZXh0ID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic2FtcGxlLXRleHRcIiwgbWVzc2FnZTogc2FtcGxlVGV4dCB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnc2FtcGxlLXRleHQtY2hhbmdlZCcpIHtcbiAgICAgICAgc2VsZWN0QW5kWm9vbVRvTGF5ZXIobXNnLmFjdGl2ZU5vZGVJZCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3VwZGF0ZS1zb3VyY2UtdGV4dCcpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlVGV4dExheWVyID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmxheWVySWQpO1xuICAgICAgICBsZXQgZm9udE5hbWUgPSBhY3RpdmVUZXh0TGF5ZXIuZm9udE5hbWU7XG4gICAgICAgIGlmIChmb250TmFtZSA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKGFjdGl2ZVRleHRMYXllci5nZXRSYW5nZUFsbEZvbnROYW1lcygwLCBhY3RpdmVUZXh0TGF5ZXIuY2hhcmFjdGVycy5sZW5ndGgpLm1hcChmaWdtYS5sb2FkRm9udEFzeW5jKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGZvbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmVUZXh0TGF5ZXIuZGVsZXRlQ2hhcmFjdGVycygwLCBhY3RpdmVUZXh0TGF5ZXIuY2hhcmFjdGVycy5sZW5ndGgpO1xuICAgICAgICBhY3RpdmVUZXh0TGF5ZXIuaW5zZXJ0Q2hhcmFjdGVycygwLCBtc2cudXBkYXRlZFRleHQpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic291cmNlLXRleHQtdXBkYXRlZFwiLCBtZXNzYWdlOiBtc2cudXBkYXRlZFRleHQgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3RleHQtbGludGVkJykge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwidGV4dC1saW50ZWRcIiwgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIGN1c3RvbUV2ZW50RGF0YSxcbiAgICAgICAgICAgICAgICBtaW5pbWFsUmVwb3J0OiBtc2cubWluaW1hbFJlcG9ydCxcbiAgICAgICAgICAgICAgICBmdWxsUmVwb3J0OiBtc2cuZnVsbFJlcG9ydFxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG4gICAgY29uc3Qgc2VuZENvbG9yRGF0YSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBnZXRDb2xvclRva2VucyhmYWxzZSk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6ICdjb2xvci1zdGF0cycsXG4gICAgICAgICAgICBtZXNzYWdlOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbUV2ZW50RGF0YSksIHsgY29sb3JTdGF0czogeWllbGQgZ2V0Q29sb3JTdGF0cygpLCBjb2xvclRva2VuczogY29sb3JUb2tlbnMsIHNlbGVjdGlvbk1hZGU6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPiAwIH0pLFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAobXNnLnR5cGUgPT09ICdydW4tY29sb3ItbGludGVyJykge1xuICAgICAgICBzZW5kQ29sb3JEYXRhKCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3NlbGVjdC1sYXllcicpIHtcbiAgICAgICAgc2VsZWN0QW5kWm9vbVRvTGF5ZXIobXNnLmxheWVySWQpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdhcHBseS1jb2xvci1zdHlsZScpIHtcbiAgICAgICAgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKG1zZy5jb2xvclN0eWxlS2V5KS50aGVuKGltcG9ydGVkID0+IHtcbiAgICAgICAgICAgIGZpZ21hLmdldE5vZGVCeUlkKG1zZy5sYXllcklkKVtgJHttc2cuY29sb3JUeXBlfVN0eWxlSWRgXSA9IGltcG9ydGVkLmlkO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2xvci1yZXBsYWNlZCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXN0b21FdmVudERhdGEpLCB7IGxheWVySWQ6IG1zZy5sYXllcklkLCBsYXllck5hbWU6IGZpZ21hLmdldE5vZGVCeUlkKG1zZy5sYXllcklkKS5uYW1lLCBvcmlnaW5hbENvbG9yOiBtc2cub3JpZ2luYWxDb2xvciwgY29sb3JTdHlsZUtleTogbXNnLmNvbG9yU3R5bGVLZXksIGNvbG9yU3R5bGVOYW1lOiBtc2cuY29sb3JTdHlsZU5hbWUsIGNvbG9yU3R5bGVDb2xvcjogbXNnLmNvbG9yU3R5bGVDb2xvciB9KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcInJlc2l6ZVwiKSB7XG4gICAgICAgIGZpZ21hLnVpLnJlc2l6ZShtc2cuc2l6ZS54ID49IHVpU2l6ZS53aWR0aCA/IG1zZy5zaXplLnggOiB1aVNpemUud2lkdGgsIG1zZy5zaXplLnkgPj0gdWlTaXplLmhlaWdodCA/IG1zZy5zaXplLnkgOiB1aVNpemUuaGVpZ2h0KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAndGhlbWUtc3dpdGNoZXItdG8tZGFyaycpIHtcbiAgICAgICAgc3dpdGNoVG9UaGVtZSgnZGFyaycpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICd0aGVtZS1zd2l0Y2hlci10by1saWdodCcpIHtcbiAgICAgICAgc3dpdGNoVG9UaGVtZSgnbGlnaHQnKTtcbiAgICB9XG59KTtcbmZpZ21hLm9uKFwic2VsZWN0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0aW9uY2hhbmdlIGV2ZW50IHdhcyBmaXJlZCcpO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJzZWxlY3Rpb24tY2hhbmdlZFwiLFxuICAgICAgICBtZXNzYWdlOiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25cbiAgICB9KTtcbn0pO1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==