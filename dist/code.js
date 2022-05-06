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

module.exports = JSON.parse("{\"error\":false,\"status\":200,\"meta\":{\"styles\":[{\"key\":\"fdd2bbb7f23cab937357c3dd786f0cd654705923\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1305\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WnL/XwU/H2mLBv0ubshU4GPn/style_thumbnail_0.png?Expires=1650844800&Signature=KMZlATBd3awbHZTjrRvU8JdHnCHea1jE6pKys4BRbSqzXMC5Hb9mPJdqCYruaujskBYe7W4U0uDs-HyP20h1xFBPoeoGOYnQCBGAHVSs7qJjRp0Po1VKx9qDchcRKW7yypX~LYMfZ8c~48NjpjDuTgLaHEKnlNnMHg1nIlI1Zco7e4QmPJcYhsHy63lFLuG9goZygjuADBXN8v7F8V3sgf2PBcUre8DBcg1H-CviQtRG2TntHc1fdt4kCIdbrvp4UgxXNFGcjinwg0KbaG6eXO3uoT3NA0hq1zmS1HSoSTNIlHkf5g~CfduwMvM5g3kil--mkmgW0x0pjQqdFXmM8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.696Z\",\"updated_at\":\"2022-04-13T16:04:50.482Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"~eL\"},{\"key\":\"a00b0da40d6e36e18304fb96954d804102356292\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1302\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ESo/g5p/f4D1zMNhNkMT1rrO/style_thumbnail_1.png?Expires=1650844800&Signature=QtvEyydcrxqsnj5S1jCVrXnDV9B7mkkjy5rLdLLCLKd3zp~znvXrNnOiholOeghlwaPf4wJG6syj3uk4e05ahtJOOP~Hs4CJ4Bv2LNk1Ui~RrIqw4Dt0uBu7Z7q8HZIM4wlkVSFNZvs2-LYVEFNiKRkc6FS1g4A5UCa5gBV5PWxupc8whpf6wBhHi6dqq7UN1C5apym-uhoPnM0weMaATgOGa6ygqkGSw8Yw4X3NkGMGmJ1a7rkHU0ykBFhErH57cAZI14hVn4tuIbJc3bXxPAsUi~OsEqddqNzfzGQS0~KQuVR8fNtPZmr8HzRoZsp6rr~HTQQnH4TOPFubJQYwXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.717Z\",\"updated_at\":\"2022-04-13T16:04:50.476Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"~e7\"},{\"key\":\"472711761aa216601e1708eec59328c945350fca\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1303\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J2l/Fq1/O2DklU7Pk4X619rW/style_thumbnail_2.png?Expires=1650844800&Signature=O1RXivCi2SknFNUkhoS~tJL7BbD6qCa6abjXI2TnTQcEt4BnurHbST5H6ghFt84iJHk7oL4pDiN7ulFdMLM6VSfmO8HtLRa8irueAmlBygyRB4zhaqo-UCXrTqntpxkXsG1WRHvh0D3z50WbPuCuJma2Ysd526jbX7AW4RBOL2RxApfihVgljslvED89NyU7lAo2u~~fUpjmUNAIl2jeWAHykAgeisUzCqCHnaWF~hCFZL3DXY4gaTP1BB~I0DKrvq1hTRiXnB0oL3rwTmWpZ10w4uV-h0HNB5cFx~io0MvVr3~hv6ni6F1~IfPBkmGD5tdREboQQJMxnVMW04~nyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.722Z\",\"updated_at\":\"2022-04-13T16:04:50.468Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"~eC\"},{\"key\":\"f7300ef0ffe874fe81c12b1e3a50d4f6a247b2b3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1314\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QPq/3hn/YXratGeGb3H6NJxm/style_thumbnail_32.png?Expires=1650844800&Signature=CKKOpuWCs8oM0w-lo8sl1YimkRN7ugosVN3uKgncyXkwSmMpFgvvZ5FOtVwgRsagOsmvLL0tClnlLvmsKn1sHyiht7wAGeL5~UwEiZ0OaWyixOeonnDxMo-kgKVizTpURkuKdqP8oFZA1CTvx5rzBceFiboFMHJaKPVkP6Dg0EmifInj1d-Tzfob9Kg~bVdiHHi5Zj207BRXoNVpFY~JSz0opzEnBwbpRhfNngqc8JkogAO-FPBFWsXpRTXtko1bFaxlZhqcd80ShRgVYv6jJHFvL3vh88D3U69xoUnPafA~ooHrozmgkb0l63w~pKTzZi6WJmfVTTiBAcE~nWhDzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.639Z\",\"updated_at\":\"2022-04-07T16:01:47.374Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}\"},{\"key\":\"f498b75092721682b9f98527f234fa8a5bc0ce22\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1422\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2P2/Uqw/pIVO1gwtRGPlPdvJ/style_thumbnail_16.png?Expires=1650844800&Signature=KVWb58VxQQ-lv~Bz6HN4ByknjgfjLj7mk4tSAkPZpaDZEgwHdOBJ6x1MuYuQZda20ehmF0j56oQ-QO5de4g~3vF7uU1la02Wi-eqDDbSwMxcDsxI9flqxtcSQzl0~I~u83Br3lf83Ye5mU5TMuk6kp6b52m79V1rFQAadFPfyKNGm1Xk0P3XjujUALlK7zfWDuI1TcqBI0DaQmugoBoQv2HfmeSgo9V2JOo~S4gXKAS-4dm0qyxI1XSD2K4vt6AgKdxwanAXShsteQqLpiiiR9vWvPgDlKlHvvD26W4QGbpmqIzJL9RngsRvcWs1Io6UBWkLYCMg1WNLL5duvSfBBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.600Z\",\"updated_at\":\"2022-04-07T16:01:47.365Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}r\"},{\"key\":\"ec1a34259a53ade310a8c6962911d0f3a10ef792\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/gz1/IiG/DFlUgCyqilU0oEDQ/style_thumbnail_15.png?Expires=1650844800&Signature=Y-beb9sPtD77unS4BZQ-YDdcxAxt9qTr8BeGOcfwcfGZlyyLIFlP2o-OziOQHCzBvdIU1DhQg8EEgfjuSDAWjHil9AnFX7aO~H70wXO2T807pH5HkiCSXuIafq274Tu9XAp9MTSHw9JD-DTxrCiJpVOCmbJJBy28SCDx4nOiKftvcFV078REUIKeTQEP~VU--~Qm3noIFRQzzpMMhJkDRwFqRYYy-flNY-niBFefYnXHNfjAVzZytnXUk8ZnTxpi7EpUffZ0N~2H2PX0yp~B-Pq9abqteWKf~ZnRnkenUbJwNVzB46MZ2aUzjWnDyf~PApzgGr8JoXKxFqVZz9tZ5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Text On Destructive\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.732Z\",\"updated_at\":\"2022-04-07T16:01:47.357Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}O\"},{\"key\":\"e80e26efbd2ea6c4d4311398f73923881d71d9f9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1418\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CoC/JC4/bdI6UI0dniPuJfTq/style_thumbnail_18.png?Expires=1650844800&Signature=RwfPeTp7D4rP04eJOiY2YKmae-uTxelPN4cCeGLMhNZ4WPsBOGvM3ALYHVHj7kStgvqGGZuH2vU~enY9M8~q4P-C1SG0DOVSof~pIO6F3CGDDcDGW~RrM7n775uVxcfJSQHBl4PYJpdsvHYyH9JgZK-KIrJ0tH6LmlGFprxdKGojlLX40GPHmlYLI9RPyfngJKgFFzglS8jVkt9l3l9RauD3k-a-0wOyqMVeDBZ8NI9Nxzc6Jsnaq-zIQFkqe7bEZGl4tDeUUhbcun2tLcLoXW6N1sJmPebeohekGlZQYDX61szK41AM24ThCEu4ti8oolDoRwq0V5tH4ba4mhYW5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.569Z\",\"updated_at\":\"2022-04-07T16:01:47.349Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}|\"},{\"key\":\"e6fc8e5dc3df8c899a20780b6204efc818a14d7f\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"234:1555\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4LO/oVc/732OljlnBcNppPRi/style_thumbnail_48.png?Expires=1650844800&Signature=F8lFd-KYUj11Z-0LGtawIAxMjRkb2GIpNnp45j1e~Xq37akyKBaAC0OCgtJSM6f37cbxVRK3sCvmLLV3g-VhhAz6MXVae7E6AV5MZh4Im25OviSWo41xoMn9ilIDijsvAioMPiilHi8RlWiNdMIklVa4QIe8ljN494tfJLtPt2nEyz-gpQHnEtNJwv8UfiRffNjzNrcGJeMUMV8fZpOOYkDfzdPDjhoJTZJSz3kbwUpP9gZDjL9c-0Rk~1JnjdTYxL~ktuyjTce0vTFWgE3sbUEoSpMbMd9ODX4E7DwpYpkIq-lV9dtpG8sYGEADhm9p4w-LYLtO0FuycFW-H~7ITw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Selected\",\"description\":\"\",\"created_at\":\"2022-03-14T14:38:06.263Z\",\"updated_at\":\"2022-04-07T16:01:47.341Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e5\"},{\"key\":\"e4244f3710fb948e121c39234b1e6e2b4c166ce0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/h0J/xwr/gwtN0NYd02nzJ1tl/style_thumbnail_42.png?Expires=1650844800&Signature=C-ZbHDQm3HlvPL6ea1k-GNXqwn4H2OpyvZSrQcv3f0FQqVFH5SGgn5OW8TcapdbOsN9vcDpcLANgJ-ZcG1LMdwfJb3m5anpLrpnDaaosVWHeXR4FbVuoE4RD9Xyy9-sO429HdsW4vQwZjtVyusAszri1pCVBDcwtiH~ARsvbMoQYP4dKFq4aH7rhknbkhdc1FtqvcTdOOdZ8fZn~-hx2qgv05itZiz-ST3wE9u7dSBPxr~Bf8MfUFz29aWtQRTS3ZSR9M8SbLa7TmP9dGW95ptSTGPs0kFWQNAXFBNDsShgxYn6jTsDhc9fEy3TkVLZ64UZdh9DWWHRct4IxA2o0mw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.627Z\",\"updated_at\":\"2022-04-07T16:01:47.333Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}|\"},{\"key\":\"e20cdbf16a69775c38fc7436118ad08f05ae9ac1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1426\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3fS/YTd/eoJkSWIPBQSe5cQK/style_thumbnail_0.png?Expires=1650844800&Signature=JSS9TVQXMXlt~0JsB8n~A0JZuEiXV1SFzjMjD5DuoNX4W~h-s2Oq5AI1Pfoabssj-QCaBwSnHpztBqc1y99hegX5U~Lx73LhfmRm0jG7udWf1-7Zcnx8aRmyHZy89n6qPrNX6XJE8KiBYUTcv7Ewkhvo6SIUz2Dml681VwJ7GmuqJLsfqwNuSNKH-TPmbKgM48Gd9UwZ9H7BhJ2l-W39QNTqbGfX7G3GdWCmvUTOFtYWqSnrpLR8My34~zCsZvjByG6R68T3brX2bcDv73ak6GcobkmCuaE-EHtgD1Qk5i6~lZv2jgFIv5QRhDjAIjdaN4Y6e9nEz6IAbZToFDHLVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.528Z\",\"updated_at\":\"2022-04-07T16:01:47.326Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}{\"},{\"key\":\"ddfa8623c96684cbee6ec0e1ce1435d9253744fa\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1409\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kxZ/2Yd/TD19w0dbukmaXyne/style_thumbnail_34.png?Expires=1650844800&Signature=E22dJAJho2kmWHaQ5ihMmWcgR4Av0XzcnsoqnXxd4fr~SKj3hTosyXO3JkFvdqHJcPtyZjkomeKqK6g~sqYbCk~UPgSSaYg4SwvgyuXLya0Vv3yRuRQZ85xsvzpgErlWaH8Jz1lZkW~PRNePRQCXhT-5O1odXXciCcJ1lqsbvSTNeXJGkdW20S8yTbwgsIyCvjpX0bx600U0w84LQbl09MSlId9jeJ5dRw~yIn95xOxEP9xgncf~tbMMWhVW4A2yD~k23KVCfaBs4PZ-igi7bKYMmIlG9Fv71HH4Q42wMG0DopbpjtbrHzBoYRzn7ghsnJmAk7r7GU8peCwF5vpEdQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.752Z\",\"updated_at\":\"2022-04-07T16:01:47.317Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}f\"},{\"key\":\"da68c86178d531db12a16ac64163bdb3d1a8ae65\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rBK/my1/IxfltI4tuJTgvaZb/style_thumbnail_38.png?Expires=1650844800&Signature=H~giFIq0od~oJMkINqivzOlkF2005I~EDmL~GMYbHjxnTIf8ArmZFp3stSthkqN~CUuoZAVNXext~Uwk1UnFoVf6vAw2KZGI974PuQ9HDJ6AKs~CBCyVv6aWHmdrJAl4CQ76aanjCfbHaOyuuLRrMgl8B9wz2flXcB3yEQKoSD6fuObad9tsmQKxNkAa4L5ZoNuSfkCps41BVCT~AUqJuuCPYfmcRD57jGvmJWzNmH2Bg4bB5CB7LFJVRB5IdOe-6z~AWjBHdBo2-ySs9N-joUEqCQIK73jTx3ADRkjSsXF8xonIcDZ8EKD6paKz-opfD0NBNbPLkQ-zp3jHv80dCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.762Z\",\"updated_at\":\"2022-04-07T16:01:47.309Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}x\"},{\"key\":\"d664cda1b0c838d129f3bcec3d90882d8fd30f18\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yHl/u4F/WKw13VmxTxVOlRFD/style_thumbnail_20.png?Expires=1650844800&Signature=ImlqTZ7AtRWB4RT8mCGDZxcVct0RRxkl1WVHd9JsrX-v~Q-dF3GswghUCBJ4sX141KOnfL0UqpCXcoetBbSw~xdAvhEYq2rlYb0Sq5XdfcoIvoqbzQIdDWrrr08qTF7WmbiDxUSCRPkpPH8TChGcWo8mghTMU~BaUaRKwRAiCFL5Rq79l~khMinbNEzHSvHEwV4SFzBAzYzECaUwb2Wt9tMhmhAz1UQrEyjz4N7YOyIKtElyn53ABxgndALrdDpm9EB0EJaGnpChZ4n~5Kyav6GdhW5XI9WU7i1O8GwX0Eun-vIV6e9REw~77iKw4Da-iBUYAANSHJkP7muP8Z26wQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.701Z\",\"updated_at\":\"2022-04-07T16:01:47.301Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}x\"},{\"key\":\"aec0b85cdc132faed547e2be013ab70ed55d397c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1322\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ttg/v1E/ypOIbVcG3P5egQav/style_thumbnail_57.png?Expires=1650844800&Signature=diGCPZvdXwLgYoCoX0hiCyt1gECk4eZgNDe8agfg3fxuHju2X~bO9YOVU0VEzC9uTmjzxvgRB-KGRLSIVt9Htf-gn84T8SI~4W1C8aJgjHNnwCdazz~ToTT-aLkXjp68stiUwdf3WsYLj5UljCZILHYFGxVN6MbpXnqJE5KzvxtL7jb42ojRJISWEXklwpqJWu4oEo8NZhtnAs5qLcqzPcw01mxdLhipZn96q1ajEXmwoamMZ6Xqb2q12u7T9HCqOvusb4gvqG4GXVsrX5pLtFqY3zC2zSaNXjw7KTmUeafenB6Ym6O21LSYGt4H2AsQB9gspdYutxdWbrNA3-zBSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.097Z\",\"updated_at\":\"2022-04-07T16:01:47.243Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}|\"},{\"key\":\"ac28d9ac5bc16703ac4fd16e7da5bf7608dbd522\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1417\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hFf/7YX/XixJgYIyUxMbNJwP/style_thumbnail_19.png?Expires=1650844800&Signature=LIKzJF9lpqE2SxFLamM7n4ZygaiJWHcfrxO2ouSsy1-L65CfoNZ15oRh8Bc4UZFsn9MbiDnwLSZ65p1XpCKnJ1m~g~sqKzY2QObj3O0hvBtO20Ywo-48zeV~4xsTEt1VruMZ5nXF4HpVh8RsbAMXcoiRjffwVfJZRPRfDzi~-DG7Djmwg~AM4oG6NQQCbaVelCpCuSs0Fwvoq3ef5dEKzRdXIl24EzJGHNoWu-n9d8R7gOHsizpZI3bQFrUIBPcLiDwQyyb4Dj02Y3QqpvCpHrweIFsV7sQPolhaa96Te5G7eMR1KaCx40siWq1pJM637Nd7GERGraWMvZR4EHhBvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.579Z\",\"updated_at\":\"2022-04-07T16:01:47.235Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}{\"},{\"key\":\"aaffe5ed4e0b2083311df366699cc63cdea69974\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1313\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QMi/7So/7GaRykvXwdpGm5YZ/style_thumbnail_33.png?Expires=1650844800&Signature=B8BGvJs-z-wdqbtGIayrI-N-aypA3ONsrBjkCsutRzP85bg1C-ulcy1yfAAjT8x2xVeOYWS03ljDqo~sWtgWFSwK5~ZFfA9SRyM938PfiFkfU3KwVSUJ0btYW6tA43PhzpHuErf28mMpGeA4mUwRYPJVoArKBft-4Dke7svCbsmpNxqWSkxPghkQHhIr8wIoL2yyDWkIX6xVSBirBYJ0vlwQpKyrYd7fVCM2VMLNBZ8xcp41vmCOqU8E9g9Q8PBh22z2d4k98DKtrGof5VVhwDwkaStNl2lO~gqCXLQxbh9xifH6UVjLvru-X3fDielhGIxK73Ar0SDJ7oAopr31vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.548Z\",\"updated_at\":\"2022-04-07T16:01:47.229Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN|\"},{\"key\":\"aa41ac55a17c23e2237ea2fab28ce0741ccc7ab7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1559\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2lh/qhr/VxEF6BGMDxeus0Jx/style_thumbnail_7.png?Expires=1650844800&Signature=dS7KVdE8KLFRtyeg1YssuprkvpMSkmfGFrUZkwE005EXN60WT5GSxa57aSheS5V84QKgSzoO5DC-OElzq8tkChPMgkxNcO1WPZdY5OPgmmRpXnhGYyeVZHUn8ptghfYJqJ8f4FFf5bxCj51gKabY9C~jcKTSmsyLNL3M09g22oIJthGnWsyEkmaN3Bo70pFffuXHtR0Seza-drI7lj5u8p7DSDd0TA6T4aGApRJk9Fv75vc~HafpxDotTao9c23dEli5vcVVKjSO8gjlBMOiuAu4NKai4AGqk7IxJsEkF3G9UYItpDofkglZGiPJ8IJHViEY2XhGRo2cqZ7OLAGKUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Text Fill\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.312Z\",\"updated_at\":\"2022-04-07T16:01:47.223Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eO\"},{\"key\":\"a2ada56137d9cc4b529a0cf3f3386cf0ed8ecb94\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1311\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bVB/m2H/8nr8IhTuUzLNe5Rz/style_thumbnail_39.png?Expires=1650844800&Signature=NjMf7xAJmpWiTrEvE~A5q3dwP8mb3eswsOnj0ntCMrVKxawVYaWfM5ym6Lb3ZXEhxgVbYPBvZwRdM97YwWkx2WR4wTclU4e1j~xxdRmNZ04LRJ7HYdH1auLiOg4XAGZovsLg3d4cH4Xquh2A0fQIHNzO-UcXV2725OqjGaaYcqmRp5BaW9WHSZ9fLREdTvrEpH2Af0yhQZtU1BLXB1R6LX5sckMtEmrHAfSY0bzZ-roxI7qFzzTASpQiKFrcoeL7w2hMl1wRsNJ~BzJN6M8wCdN7S2DADVFsVkrWzujDlhuLdwGQaRGE8yFvFpJriwJ-HTGLIZGTLAe~-x0cqXXP1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.787Z\",\"updated_at\":\"2022-04-07T16:01:47.217Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNx\"},{\"key\":\"99df447c6e9a955d690ec601c438370f12fc7dc5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1321\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TXr/3Tq/OQ6KxqmePqB7MUgs/style_thumbnail_44.png?Expires=1650844800&Signature=CTElDB8ayMZKpZiZDzChNCoJq7~ppXYPMwa~A1JIKNjt4CMIQhiJSjZBZNM6phmFmlSa9J186STsp-hqrOjbb7ZBU3yhg1GYRoLJ67FKo87i0XRWCYJTE9OBV3oAWSdDsX3ubXDQN9eBYQlktaMjg0Oxt~IBpZEY1kyc-a7wD4zRmkUDNO1pdVykn2hlOvuDsOFxJewrtvDkQWYVf2dFV6auA60hpbNlwSrLirwoajxeCsGRr3BRodzDP8yhFvf9DQ47ToWRko5xSF0JgVMZiCqCoVq~gggPICVUwgyBsrNaLForzjGMjcXzWpTXNzqZAKR-vxgYR4cg3Tjegvwb0w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.812Z\",\"updated_at\":\"2022-04-07T16:01:47.205Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}{\"},{\"key\":\"91724b824f1a9b8848e94ea4b6f246b1550728ac\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1644\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oEy/FGw/juQLcEJSprkyFaEa/style_thumbnail_1.png?Expires=1650844800&Signature=DlaYw2V3kwT8AYOsPR-nbc~igLWuw1M~NHi5J6r7cASx5hdZfm00vs8bdnxagPM9-g36Clpl3f871piaO3CWvmlK3QSPI-ZU2PC6AvPlxSRG2~VllC7-1t8PoD4ZVnAUv5NXYlg0iLomajNiKyVvQnWF8SSvnG-wIJgjEWHyE2htg7UuX2PoUeedScdFWpeMtz7schU1Ri8~m9RG0l773ADJQxCI1VNGbg~WbMpTssHvv6wZJHEZQI5ZzDFVUo~J5ec9YWo7fy7u-A5-PDj0renyVFS6MxsbnBPZuxBk09lkvVLyfMFz7vHLh-R~CpTAqNVymf7~hI5uQJ8Yiw9otA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.703Z\",\"updated_at\":\"2022-04-07T16:01:47.198Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}f\"},{\"key\":\"8ea704444e906ba1437a91bd36dbd2ed55324c8a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/XzT/RhB/BGVL3dL1Rq1HRasc/style_thumbnail_23.png?Expires=1650844800&Signature=Y-hL6Bs428wpkKEjp54MhMolwuOQzqOgu5R7QJ8l9-ZZ8gFTGNbyUFTAxlcXRXzoHMFaw-wg~74pl-ezfzR7DFzuRjDTCW-SbRgzNz996TDJoPXl0YVokSmOU5-D0bVjcVR3j6hCESE7PTvlAHzRgyGAZQLpi2A1qJDYo0scJShq3Jz0cskVKU4nTZe~v1Uf7Zd-hmJSkEJJKXhnc5jLGD78g0Diub3F9nnXFLp7uFImGIzmmCj06jzNx-NTYB5hG13Iw0lv2yZSGB1c3~fzO-XmGMUCCJ96ILkzI9WkXkQyLKDRk-jZcVEj4X~gZwRvJNmtq0PVjix4Ntk9i3L80A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.654Z\",\"updated_at\":\"2022-04-07T16:01:47.192Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}\"},{\"key\":\"85f88070f65fb4c1d19e0522427b41bcc26ed15e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1324\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zoP/kuQ/22XmaHbSpeerdn8Y/style_thumbnail_56.png?Expires=1650844800&Signature=INhKc6HTG2gKAhSQP2JBNZP~n087BrpaEe77zl39VewTwRkZNQcWWQV0ZzxtvYtc-njlms~tpnE5KsnwZ8UuQ8gOHWmPCLjzbCBEr0hFVP4NwD9ejivVImFzYrydEzIrUSgBH0PxmObeCzVXQ0Pv9PIVnWA0vCUaSMWpfaeC4Hlwuz4jCAFc1shKQHw92huiRtq0m8eJ8VrbAVN~KtpAbnhAoEJ~c8LLuxYxN6VNpK6lH~XzVkLtcT4Jox5C5bt9G8qqJjj61RqshtsNv17JXFflTrI6iBDv2ov7AYZx4MAhpb3zGxXHdRf8LE9RI3ziMobSFYJEB2FGr8bjzKivBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Text On Secondary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.092Z\",\"updated_at\":\"2022-04-07T16:01:47.186Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}O\"},{\"key\":\"84258cd72dab13611314cc3f63a8082ea687211d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"45:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/OoY/2Kl/wspkbKrAtVEDgErU/style_thumbnail_2.png?Expires=1650844800&Signature=N-JpofWLFsAKWkrxEeWzboeAoQOkb~KB-biDqWOyp1PGaqEXOsGpR-PGGr~vuHmgJXKqqDfPVdrE9f96kmr2Qd7qFeUNORRLzVOqRnS4kTufKbflz038YfuhhwdOBDmsPnTkd7hV61R68sGECuhtD0gmIJPYKw-BPGlecUQZpA3-8FDNyPVMKhtGoNMr1ZGbCNTgI2r8seAgPGnOrPYmUNbIjHuIEf55R4dfKyQBBIQT8T5ZOBmOspn6k2FUkkZLrQZGJQUKEtGDcX4-icfC9NJ67GKuGZe-mNFvz0Wad8aHZXmxybtDCVTFIIbHcd9ZlOHT~rcs8m7LEb-ztgSaVA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Floating\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.613Z\",\"updated_at\":\"2022-04-07T16:01:47.180Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e4\"},{\"key\":\"74c183c86fa424dc940799b3cdacc6824931caa0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1318\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/FAk/Ojp/cy7gMAytyKy3sDgJ/style_thumbnail_26.png?Expires=1650844800&Signature=V928U7R9u222~4N1DTrJXIpLIJGrfHx-t1jJmBXyvasI9ja7svnco~V5xDmAfxQz8n4qYgcYJkUlVGUyu2t1gf7QM8AGuPT9RHda1y7mq51V3btS2KvkHOo9Dou3oSjKmmUsIx9P1bXbUErHn-cXHbCh-48SQ0iWxAwW4Cib6UP6e9iZVXigxqiVONE0nAESlRE7mjLTSZ-HGAgCELvfhpd-bya4qVwJEWUaw1VM0d5~rd11b7z91YBwNuYT3bOb-jKog71xezELdbR501Z2Fftx5so4OPr3cvlaMvTmzVIbEar~okh2HKubLs4nuwY90vs2ZG~jKAi7wC0RczWqgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.691Z\",\"updated_at\":\"2022-04-07T16:01:47.173Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}x\"},{\"key\":\"7490d3069bce67d2ade872cc4f73da11247c8042\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"30:1310\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/GXc/puO/EyKBC692UWFA8tyE/style_thumbnail_47.png?Expires=1650844800&Signature=h0tStP2ptxJ6jBBiAPNlf87SnfYAlHmRb-I1-AXRyREB-lDnZvRNKhJvJE6owZWLIZkJk0cIQSaKw8Z0gdRy5NA0eEvAMAN4WIorcIHZwtV6ocaxJCZZPWTBAlAvlxtHf6qs2sUZKEzBe6yDYaM3S99jX1CwRENAlasayJGsOHykNMf3MwvnBgPqYxcg9Df6s-jPqAltWBb5oFSOX3ZDwhOVJCV8BCdY0IrFweeoOODiBAW4esdMVna8oEdft7OAUMz-JgOjUcwd~jKVqhMymePZTcwF3NgYStZBCup7RgxJJCjDUqHDx1xsanqRPjMbUuz7h7eSUyirplQ2sJm1rg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.953Z\",\"updated_at\":\"2022-04-07T16:01:47.167Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNr\"},{\"key\":\"730f76dc189f00e5c902e0e464c31726c8255811\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2377\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fTQ/Wnn/51aKviyzsG6t0q9J/style_thumbnail_54.png?Expires=1650844800&Signature=bHV2pw04E4rQeSqqYXiAXldnRIvHRLfQ~m~JvFeG34mFvb3vnkYOqwLSjcivbD6szWWRggT3d2gzdlylZ0NulyLAtA50nMKfeoPqeGNfyHgFd0RYsHWv0FDPluwuB~Qpx2iIprcgnqus8HbaLRDXRMb7PTq2cX~beGFm7tkqAP6Q3wR6zYE4WKeuh0GGMKgOSIbLeflwSwKUU7axoa8LXjTNGlhu1llrRNboMhYireb4PBzofz5CbyghdmODD8Un0araY7g07k33KV9ULheYDk0lLnXgl6ArN-by7iKWRsZdUF5C9N93rvaV622278m-op0XNi7KSOys7yrtmLHrgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Main\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.067Z\",\"updated_at\":\"2022-04-07T16:01:47.161Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e+\"},{\"key\":\"6f9fbbc37db9880ca87d31a742665e62f2bf183f\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BQ5/jTF/oOyok7QsqBFdvqZx/style_thumbnail_12.png?Expires=1650844800&Signature=TJ7m7swAVJFkvqftTU4r~xSdwLXArZKcsbJYr9KMcI1yxCZ4jT70U1PV1waJXSvrcFaTxnNSPNWfALGdGOCjb71Sc8c4h7p9ZVesYPPN2XaKLue5ma-g~mgWRQMohJk98uAcFHWA89AM0xqlxteG70-Dn6E4b-GK1TcpmYfdqQSetWrs~2Vz1Xoy-AGjoGJh5wowUet74t4wqqbPuEC4tMjbYOfd2B-ZmdFECTiPg5npMklP-HhAEQVvvIi0z9Tyuag5TjZN7fZe4jnrXtOqdazTTt4T9qcAZJR-8LzvSvRt3HU7CEiuQYI5U8ff~vGunWHxzwuTT4ctu7cGKb9yRA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.564Z\",\"updated_at\":\"2022-04-07T16:01:47.154Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}\"},{\"key\":\"67db579a7edd8e7af291191d07a5d9cafc538167\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1304\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Eqp/5YV/W88zrCGyNrvg8hgJ/style_thumbnail_51.png?Expires=1650844800&Signature=G147E1VatPeQT-TISTbtrJKqn2bq9craAAaGpQrrVVUFX33dtzKNgGhFEBDbZ2kNL06YA3VaJMDix12oy~0EhD~BLV3si861GIenHJ4nkBDBhZP0uWItOsy25hJZkFd5mkZxv9fyHhM9vrxHm5EzlMdFH4H~NZB3JB4-fmT~boLIe148UcJDijyR0LnweconWiZGDNd6YVNPFzIz6PKuCeHtC2uSI8IRgH7crEUxhD-QDM~vNtk8sHeDU4OqDWa8GhigoVx~3bJUZ8vC2RvAC7X66u96r~TOmqxjsHSy9jo-QoWYBzyE0AQX9DkHy6rbVtj56RQrKfVLXlHGDvVjuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.029Z\",\"updated_at\":\"2022-04-07T16:01:47.148Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eI\"},{\"key\":\"63d4adfde6619ffd2b15097e28599ba8b1bd9be8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jlb/DnP/SqId8RKQwbsHkPST/style_thumbnail_22.png?Expires=1650844800&Signature=R8CwRzJFOqBqgB1bCXbWZm~LsM2c3Q4i6iDtyX4SL3ERVPUDdaGMCfKo4iF22MN8pcafxVuCwL8od-uc-KewtizRkXocVOUazuf~43Ita7BNiskVMZ9xZIoY-CMesDGVWR~T3WmdL5pKXB84oZA1LLfGexIoyYt7IJLxo~cpFOeZIe5V8jp2YhgMoz5TbxMNIU69HqUa-C9ZeLHUw8w2mJlivfIPALETEIabyLgclFsk7oDMgm1AnOO485NOjhe-QqjTztxQar1ctRfXB4u2M7JGkghN0Ql3ffg9xfdbJOErF4LMLKdSpt69ep4i-JHUyOQhcYa0UpG1jsmaGobJJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.661Z\",\"updated_at\":\"2022-04-07T16:01:47.142Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}|\"},{\"key\":\"63305ca5cb6c2e5607796133fd649e07e0a68d46\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1411\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J8l/xaD/PS2VUZdctvcXB3fW/style_thumbnail_21.png?Expires=1650844800&Signature=Ji9YYPs1YhInZXpQBewFKhIFvebU~oMY~FPS6NXzmzYDlU01zxxzGINeV7wbc7E1ePvVHZw7EL1z6CaZn6K9aYhC~fgz4j~qmTAYYeuGy~d0mDEIUQFRrf3~vJEpkWyFVukQnKRE~ajEpNVCHdkRpLoV7a0hRfNiXRHbRdew5RATC-uZ68hiN36g7JTW~KvhkX3IlqQMzIfnGEs0DMCxPqn1RB~bW73FBT6MzaL45S5pgeyFnppiCwmj0SlMut4VRW5bIGi-Fd-b-tl6~17dj~7TdGu~E6BGKWxno~FOFtlpWSSzjEkH0~adLrZkvdq-v0WIMU6OfX0fjbeFvIWzTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.646Z\",\"updated_at\":\"2022-04-07T16:01:47.136Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}x\"},{\"key\":\"5ab92f7156e1969f3369d038debd5455193cccb5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1645\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0QX/soA/1LOvyPETIa2MBeQx/style_thumbnail_13.png?Expires=1650844800&Signature=CSRr18Djri5XsKzrcfQU1cNkosTXhLPMFFJN7UhHWeKjm3JihXIFny6CMsZ~k4NNdyXOSFkJycQnEygnQjQBydfWYFHMRx1ORvf~Z3UPIUnBl4xQVRW3h0eIrqmsRLp3KksTcPtz252mXw7Igqp9E3N~Bpb4SYBVH0LExcBm7JhUHx0MwP-50u2XS2urxIQhSkQSvxXaZY1SXGdUvD-ZrbnEoisgJ3hd4TswuJsqr71~ITD6OrE468mhxKcakMhysmvCeQiUkh3K5GxJgWOeJ7oUJNdvUOZMfYITDJgTet3g3P1fmXba4UM~Qa-3IU5wAdLVXWtjQ-Dw3sVEJh2Hkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.728Z\",\"updated_at\":\"2022-04-07T16:01:47.130Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}r\"},{\"key\":\"56c418abffcdc98abb3ef987a6b03fc18a60633a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"234:1561\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tBK/Xg2/jDUNCDiR2Y6jWpOq/style_thumbnail_5.png?Expires=1650844800&Signature=AzBvqFl9R7MFEkn720EvaQyNCcX-iSics72WiaJtmZ07~pWKvZqVDb~zEIJ-e912-qvGuDYKBzGsv6gnwnDNbj0Lfl-KL2-XSjM11dBSwmfENWtOWDaR-LxAHVbdupCVvTGqNIUE0Jh5Bwl-7r0e17necko8aAZvYveqEa1ciH8wWOChLyrl8V~WnmtR7gAdlPeFSbfC-5Riu51DSWBog~1sU51qBqBxdhHdgsH87P01-LMc55f~XG6AFkzyez9yw6jivmFc0wySmc4QtoXiIsOkcYGpbTGrwAypx7928Zh7fMcm3GBNEPC39guwXOxFLC5dzdrHblBJhqX7PlK4yA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Text Nav\",\"description\":\"\",\"created_at\":\"2022-03-14T14:41:39.337Z\",\"updated_at\":\"2022-04-07T16:01:47.123Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e6\"},{\"key\":\"53a4716741658575994c6cf6fd1fc554d45ff784\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1306\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tUQ/oLj/hVvq0HxGtxcn7Ag1/style_thumbnail_37.png?Expires=1650844800&Signature=VtQIBHa31Dpb0D~UCs3qgqOy8p5myaYJhpbl04TFPo4OsFI~rcNYY0h3hN9pWi4rVGOhOlnNQMEOkyqmpJ3YuI2ec5rJ73WDRoF3HJT4kBWEZNtGulCszJj-0XZlcCnEpk~sDv4LE4LSROH8hp2FyqSNvLmPw7-VDqB89uzdD0fPef-JzT86M2JQINn-5sB~hZtaLPCLI8Sq6cCWhfQ2aZG4umJeiSEtdqWSQAQsXUqS-h76ggaJXMqbT5ZjMlRHytyzNk9dV3JZ70pSh87PYcPXzm95nSbRUnN~3x7yGEPRW5PYDAqrKw971xD0kKa899GKvqqiXmWQOLVv1Txogw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.757Z\",\"updated_at\":\"2022-04-07T16:01:47.117Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eM\"},{\"key\":\"52c101369cef572c6908975f95e417a493bf258e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zql/jnA/nYT3rxjFPj5VezUC/style_thumbnail_52.png?Expires=1650844800&Signature=NLIs5FukjP6ldhfBPaOKx0Texb0hOWCzicBAsllcLyYO4QF7Cc-TCwLDIiODrgonHUCKoLlM5PZ2oaYQkUP41yPjkaY2PTucfL4ET7rF6LpS6CAhe25C8bqgC8dUzJQx-8HGVI5-FqbREkxYCoRgIvAgH9lvW1hQESc0XQ6D1RMxmls7Y1k4ubbua0Us8pnPYZuo-qX44vEEgPDz8NhJiK8p7xEIjKGz8RaA7tIwNV5Z-8OwsoQCLB3TdXbLrZzRNpqATYy70EhaKrHsE~vhBY5X-dDOYwfCjyEfDusdotzhJp3BJINdeHpu5X~MFwzWtLj18P6ktsi3Id~M~XXHCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Text On Plain\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.041Z\",\"updated_at\":\"2022-04-07T16:01:47.111Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}O\"},{\"key\":\"52b68da39f0ffc8e2718c89e7bb0637ea29ce3b9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1316\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vGU/caK/brZ2Rljv29Ks4sDw/style_thumbnail_30.png?Expires=1650844800&Signature=Ihdv9LlUEqIC5bjJa5n7tf0~PVcauE08XOfj0bu5OXRC00KzqtBW5d69AjpgwTOXwAQTexhrTpr~zUBRgrZb-GcFWt0WAyW4khO0bMWqmY0VqJsSOKHduHMdQMAVzbPzK~AfBFwThyWxmY~9fQq7sh5Pxfz7Ye~iYZt-IEOf6zqfDGZ2gsaf1f048DPbmM00PD8Qip62bN5W3BbeJ5VIF5p4EclxUrPQluwkgNem5CTp6XpQRHxUwhLe~5~vfOlyqvA2WRF8XA3EPIo0LI~B3ZjZ61vhUdY-pUKKcQVYpiogCT2iBj2C5IBOM1ycflP6ylUvx4r93Xn984FVLl0fFQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.727Z\",\"updated_at\":\"2022-04-07T16:01:47.105Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}f\"},{\"key\":\"4bfe27d2620e3e5cdfc02b7cc8d0db8fe86dbcf3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fhu/Ro7/SUtXhXwBJ5tdKfeG/style_thumbnail_40.png?Expires=1650844800&Signature=R~mHJ~~PNf1kZHx78Pvo1zYKr-yDnz6Gh2-44EZJyh2Ad7IMNY5sP7YYmrdWXLM8FSdtuH5-EEXWK06bd8SmN3oUs8Vwue2~FXsRo2fGhmLYhjgVg9594vKp~tLF35NzDz3w9fTKWByyIga69U-D7BXNWuQvr9nfpIOuePjT4b0dK0q0JdOSEL-6KzPzZrvYQfapQnxPdspZVevfYphGmvUdfitV5AH2NXtHuKqAjhjhls~w56n4A4Fqb5U60sis6aFJowd1uJiPI4KOf2Jnl8r~wYnljCPXlqqSuiHiKQL9Nty~tXU5M38DRIB-tpQXOOmxwLSwtfbPgcz~H5wCdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.792Z\",\"updated_at\":\"2022-04-07T16:01:47.099Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}r\"},{\"key\":\"404073bac29c7d33c3c7f1a16112db256be4c837\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1561\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EaX/QlW/GYHTdwKFSGxyNpqH/style_thumbnail_10.png?Expires=1650844800&Signature=CBgaiCiWAALR~9ykVXK5Nvtly2TiBJBykR~7Cq6AcxFDa077EHul~3Dz-q4wYl5jQp214sbf6lR1SansH28hp2Pwn5jR1vCz94eAHCuOAhQB~YqleQ8JI3QiTMXaxRXi8DLs74WcN7yiYchViUgJiRg8QpeRamzeEGd5eroFyrNgOI6e5ACBtogAb-nO8hAMHTbs21GwaCf~gdhCdi6dcTo40R7LPvD3NJP0xrTEfKLUORvRsVPumojny-qKg5kMow3B2YNAhBZdaWkKcYFEkJZtaz3D1TtzinddgyPnhjhATp3uGQwQc03y5bz9XhU-1BUsDUggMiLz~QzNWy0Hzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Alternate Path\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.322Z\",\"updated_at\":\"2022-04-07T16:01:47.086Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~er\"},{\"key\":\"31ded0cbb11cdacf01e877fce472da9b8f2893c1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oE5/9o7/bwWL3Gaza5qnuyUQ/style_thumbnail_17.png?Expires=1650844800&Signature=hy9pBmPgh2oLm3AeVeAQfR9ftyDToEj4IYiH4PHhF7llvwm7IZUw7V-sawjG-1YQqZ6to~q5ri8eK8p~fY4kBPGKC72c6c1XHP2-vRxo4P3fpAAk~MRPVdk7Us87Et7wt5mbefDRLtMyME8rQlr6i75lPnm3mtDYxGOMW0qV~J-jGbBRsVpBh9Ky8xOYVgnJie8Nzfar3GuIcvK5~9fEvmA4VZiBFxOO1xVJWMldbmqAz2ARH7gzkr~bQKxM5lzOgDvE~jCtOxK4txUozFqRLJUmySBGmc44tfqcSMm8rdyo2cIjh3YXxh-hp5S47BWUqZidBfpFCevtH6Yaew0jlg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.533Z\",\"updated_at\":\"2022-04-07T16:01:47.080Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}f\"},{\"key\":\"2baaca090ea40415c6245f7ca25cb18ce3d77bcf\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1308\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xy2/LoC/JayHr6KDNzaP5j4k/style_thumbnail_43.png?Expires=1650844800&Signature=NFPi-2KPl4nthXz-ue4X~W-PeTkKubn703-dhROBZVxw1kc4sV6dtmibtCV5qd2UdQhzKO9YKpvTmS9Yvl6ac-riplgR7wgn3J6m7hclykChtZ2wvOLLpKjkYSGLFbxS8bKEEbYcI2UKJtCTUesrEZbmJXcBQDZC5S2b-zAxODdtiJNY7j6iqhk8riXSbvM7cJERsoJxd0H7efzxhyGDYvNAUqeeRhLxGBaVRED0n3cZqsoS0Oi2iQA0vjOMzKx0sloo4MdvITLxuNCgYb270BBeZgWUL0iZcv5VIlqzmmFl33uLp6hjvZ3qgjThUP-Z4jQUcsGRuaWSgzJ4TBQzzA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Text On Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.620Z\",\"updated_at\":\"2022-04-07T16:01:47.074Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNO\"},{\"key\":\"28d01019de63efed67883b4153bb1ec181874c30\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"104:1392\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KkN/uDK/bDDLGO2tAJ5mdE57/style_thumbnail_41.png?Expires=1650844800&Signature=e5xwj4N9~cHowtNQktVD-p-29dg91MkDOi9B3Tg59DE0lY4RSXSK-AUJK2MfnxfT7MBOONkysknbmDliBuyr1d5q9bxfsCf1sW0wO6F0AWwPLyp7H3UYPCy4Ieechzl8HWgSRxVjPi1pYfJs2Dn9K3cNAbcPgPGhWNYcEx9Na9JCgiN0p-JwZKPbM38CAuCBO1OVD3kxX6-b0h2bND68g4RCijHnW92qQnMAee3fEBQP~9sDWG4Dk4JMkAbpcJOHgRLCrLJaiYWUXt~Iw9i06uCvjFz9qyjqVwQT23SuYL~rTqUd94uZuG15P3fwDzZpFu70BnwkCLfBHuxfCDbzXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.782Z\",\"updated_at\":\"2022-04-07T16:01:47.066Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}\"},{\"key\":\"219d066514449bb129f0bc9990c624bbd01cf3c9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1Yh/IYK/fSXsPLEpTUbenH21/style_thumbnail_49.png?Expires=1650844800&Signature=SN2FV1iH1-K2WRKYm4iGOk4xptB4z4arnkHHb7pcnbhuGTmbbkeRbSpJ8SwPGIGWhG1RD6JXbi-s52PwejdeL1NbQdLVrb6LEwt~Zng4QC9XwJcgE5jfh~RS1iS9kiIUMEL-3rHVPvPnTHzn35Nb5h2R2uZFA5Gc0EKLAhrF01bd4bxViTC-2rHdvMgql0UQ~4zHGoDZJDrs0BpviTmbzr4~Sh58ZmhK2uSblpFmcR9qvUKXYKWBduWsPOmYli2vIKcYJZmAzwdzXXlVWad103IJjRs-MsJwVjk3G3Uty6prj1eTKj2Lau~MuHNpiWqzTjZXGyyOQHSEuZol73mUQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Neutral\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.002Z\",\"updated_at\":\"2022-04-07T16:01:47.044Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}f\"},{\"key\":\"1a12af35e64b789afd08c4ab4c94ac089c631c57\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1506\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ra7/uUL/ud73166Ix35miY36/style_thumbnail_3.png?Expires=1650844800&Signature=Z9hVkvWCtG4NvKqEISIdwEKuRNKNd8XKzr~bS73xsAfw295cQqxsuB8OZlUoLRac4~ki8qjtFg58Vh-L8YO8aFTg0NEBezBMXGivhFqvqn-r2z7G9nbizEt2Le1~jQdWbbrkMaVil6tpyJYTS7kuFWGQ9xOBo9F5eYLjIrCdWUlt~L62tMUpiY2BulTCREud2XoxJAni3fVtTl0IXU0XroceVY8Pidw4hkC~WjEyuVWN1QjHiPdQUzw7TvF~YMxt0eQvwqXQX4LebpsbHGTyW~KDS9RbBujbErSjyuUeDRvDOT1YRNazY81SiCHy4ZmSN2vSQDdcAyCIII1jUXK-sA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Handler Multi Control\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.518Z\",\"updated_at\":\"2022-04-07T16:01:47.037Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e6f\"},{\"key\":\"0b5584dab7afb79694edee18e1a0f4528c1b30f9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1415\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KC4/ZDQ/15PQloFu0A7ZQw4c/style_thumbnail_46.png?Expires=1650844800&Signature=TUQsoVlB2m~XiA6IgzfQAErzs4yEca~CNm14JqYgdKACpwx1pV10jzT~Ws650EnBLKeq8wzZFdaBnPRvarOKEZyFiKlzRxMGJ1-0ArLQgILtrFrRC2WiNTg~PTfva7RzCrQUR~0Thvw8Xm8FrH17KPFuzWUiwxS--nDifdE5VW86EH7dCCiCbFpsx2fTytbh76Zb1lAfWzbmo0ylk26hfvsUd0Vp0W8jLiZA6D3KR~~fOMU2n~sAuZEFSyqiyU~K35mwmnKt28DfIJ1X9a50raqDA9cKy1XY4KkWOTsm~9wPdRXWj0KhZ6WLhEeAKFmlLUhBz47XsT3i0mUAaqdXqg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.948Z\",\"updated_at\":\"2022-04-07T16:01:47.031Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}r\"},{\"key\":\"0a841ca5c0a69ca8f47486ce3a557f261185d93e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1317\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/gMh/2zZ/43exbL5pqX3HCXOd/style_thumbnail_28.png?Expires=1650844800&Signature=VPoXIMrW3We5rYBguNgNTJ2TKYKj2oVQOj17KXiNGpdBXu4fVYCSqBiS9~WeGAqZQy-ACgvL0efWzrrTGp1WkA7AXXf-o~AEqkpqO0hhiNbVQOOK6lYgn1iMNCq3sK7WhO40QGjWsacDX7FNvC3HqN-tDXHSI82rP6qDX4upweyVgWI26HuQmSoks7yCstXtOnBAz-ji8B~ScmAvXm0ik~tAVplWT-gLZP3fqG1-xiZR~Ra8JKdwK3LLNs7olbeuHv5WOZA~Ric1niLFINViA4b9JjgGnSjchwUKmEZXAkZjP03AGBcvwsftdDKvHNyAIzbF3X1loYEBx8Af5jfFcQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.712Z\",\"updated_at\":\"2022-04-07T16:01:47.025Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}r\"},{\"key\":\"062d81806ffb2bf35c18440471acfe837abd9fea\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2378\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aJU/fl1/72uvsZ2TGixXw4PC/style_thumbnail_53.png?Expires=1650844800&Signature=JW9g4hfQAhdpTA~UYFtauhRlhSILOQ~EiisDYu0ggjQZodDgNMLxICQigd5oT92J-BU~EAZZGqm9shP-bdP48WA6dzVu47aAnSqRDyyLk4UGXK5MGouUpG4AjGa4Qt4zKMWMdXJKwvSNWUJiRIh-QDJtIEBXeLcBSpQhsGvENUf87NYxu61yE5-uoGVFCBkoxZ--s1C0DqblZ3agb83Y7c5NzMf7n8kzb-EHN53-ICmBEdjeQ9HN1MTF3arMFW18gaS-iZwEGzs6wFRIpI0nks6hHgrtj44gs31KjfVe6iYWg9EGDrCChPWrgIDlv-V87xl6NH-0QsW4vUKSeAMUlw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Extended\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.060Z\",\"updated_at\":\"2022-04-07T16:01:47.019Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e1\"},{\"key\":\"053d7d93c02e4cd98c3bc3e532970c390aac7c95\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"105:1394\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4Bb/HqA/4LFBBRfSAomrffS0/style_thumbnail_14.png?Expires=1650844800&Signature=bICwBbo8al2xb~rOQKvRJcVUCG8mXl~SwLxGI-bZblQsLcl8CzPvJwzMPQ1Xap-WhfB70lFSEUG8oNR7WGaA04LlA8S76A5cUpVz4K8oOxiyEcWkDCAKaIZkN8Z-omFGp1DpAxQu9Kz~5ykGjmgsuaHocuECz3V1XrIkL5jPX0VF0YFnq2UkVuRXTRQ~bSpG7~4kMvwhtLToxuQ9e25Lh9Q7wrbQzFf~lNt6X4AXqxqFGgQ~k7eLFqSVea7BOTbG7Gf2UXp0oxvzyZmKaQiWY9fpWh54OT17LstimR78DAi1AllGHRDQZfE4T7s8ci3nlpD~3V69A5Aa9sHA0Jwwmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Text On Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.558Z\",\"updated_at\":\"2022-04-07T16:01:47.013Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}O\"},{\"key\":\"0468a0dcdaca8460437b47fd3428588740826710\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1560\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/YBP/kKS/ijKsHst81lmJPfOF/style_thumbnail_45.png?Expires=1650844800&Signature=C21jYo8ZTsD-dps8Tudi62GpmCEfvhb~sMDip8CaQeA2OJfXgI3M91Rvuynb~M1OPINENMorUWfvvKoUJIB3ToQIeRyl31FpPM62vRjNvhuWn81lzvuPhc7OrisweFjE5WAOAJgC6Vsdp8zclfohdyJOfn5zVkfB~SmsRGxHhVCD45w8isnN1d8MiUYy89W20CJplVPBmU8q76xatOpPEVqjWbvJn60Kyr1-8BVvI7ZeJ3uNK9K9TXjLMAJ6C1ZpnRjFjA~-nZk6DGQUtozCfDAi912i26KBS7SXVrykwD~JlrX9XJwnWtrp5z9lLjXf2IGwf-VNBSLiF6-HKCqy9Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Main Path\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.328Z\",\"updated_at\":\"2022-04-07T16:01:47.006Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~ef\"},{\"key\":\"4ecfbd1aa04ffdf5e23f88f6d6e95ead44618f4d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1688\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EaJ/aoR/VioTSylzQ64QMgyE/style_thumbnail_55.png?Expires=1650844800&Signature=CGP1p8pNW5r4wYpF5an0zlySkSHlt2okW4dxooBvQGAbO0E7PG6WEsO7bPJQ0j4bSB~vap9UrirJGMopwTlQZUEw0UNw~6DwJA7GQ8hC14Nz3KC1lqCjnfEyTvWe-K7kxVgHi5xVL3JSqio4oxG4~~8MXXIgRfH1KiVbozJ9K1M1-VUS~s-WcFs2FMr6EKaUSq3eEyZFdOAPYvfNHLi6jkxgEhyRbu3RoKPdfecULapdMVz2jhzLTvHWj8S9nvtt8n8PW8VMnzdGjuke85cPX2a0W7RPvM0J91nOQo92C9asqfbeCu6rvulpqNmPuNsTNKpsneAcxSY9ES6eE9K5PQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.501Z\",\"updated_at\":\"2022-04-07T16:01:46.501Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}{O\"},{\"key\":\"6c2e41fbbfc42aa032e18087939c4e9175a3c485\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1687\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hWh/LPc/TWsI7YOXiBEdbRxK/style_thumbnail_9.png?Expires=1650844800&Signature=PbfcoywJrSLhKd6VH8PlQHtv1SSny~YquJv8WJmEbUOvdRVLBu9OZGCliIxi~SWDuMLAAgtDHKB7vCYDUHqLqZ5cRxEedoB66658siXbP5mR1p7OYWVwqP0VmfvPgH576HHwqTpR6qwHj4fcJRKoJR28nLgNBQe9ZoQvb65XegB8H2qbwQUahfjMc3CCO5Q2VUFV17ikRmKGGb5zgVYFg8lWQ6J-mt4xjWnG1zbR~DaStlnVZaaO1xRd1Vf9ikXfjgAksIuBiYiMRQwYm0Rmc-rksEWZbE8gscBAMjtbvbSqzIFyXMnmZJXAGnvS14WLb~0GSv21bn9tSWezKeBr7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.495Z\",\"updated_at\":\"2022-04-07T16:01:46.495Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}y\"},{\"key\":\"727df7c22192c4844dda2cd64a89f1830fb50399\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1686\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ak9/dwk/dkw1flEDH4Dnrdji/style_thumbnail_8.png?Expires=1650844800&Signature=DkcAusdSI4w~hUBGzEpRraXEYOX6XKGF-xE94v0OQ5EtRu75GoZxarOShV3hpZaNedKPOjO6s6Bu8rkYyMmGVgDUfKm1iPZGxsvhoBqZet52VD3UrGgnGtrxcfNlXeobMDqfZwlrZg2r2p7TtdAzjzd2XeSMalabpmw4gutjofPkcClREaCWvTcqY2y~omeZMTmf0jDy5loxWLgc~ue-gEOkzQ3Wxo8-RyUDNlrT6Z44S4Vwh1kEnhHcKcC-2g26wzVztpTBikuEpwpGXS5mia1M5GE9Z~Vh2aeSLUNOf6sKFFRJz7sV4dMVbRq3ldgodk3F8Sa8ev8X0TpMUfmllg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.489Z\",\"updated_at\":\"2022-04-07T16:01:46.489Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}u\"},{\"key\":\"e1bbe21fbe2e5fd2e368f4186145032ba488c8e8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1689\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/LDB/LZm/n2ihyaDQt1bdbHd1/style_thumbnail_6.png?Expires=1650844800&Signature=Stnu0p968L2btiT3M0HrcgDfrte0kMb1u7b1HrIrYhSAZrHfcrbX8EY58RIHM0qyApfiC0uDJxdmjelQlBKLoCErDlVIViSklL5FgZ5SpS~g4VnPopP2gl1-NIAHVbWbRCIQQK-msJAWtNELz8OUwh8o7Em5Re4fbvdINSoIZFWV3aqB~BIbt0yc-hwNrt9NGgXrMMo5mXmy7Hwqd2UE9Y792mkGJj4gRmJfevdywrLvm-Y4dvQp-wIbjTM1abyy26-dlbXZLpiFEzWrStvAmmr1~ycI5LMDgCdyRlJsjzTcucAoGwhN7OZLaKAPaiie8obl72dZ5AvWPa1h2YU9ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.482Z\",\"updated_at\":\"2022-04-07T16:01:46.482Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}|O\"},{\"key\":\"f07bfcda1fb6e36e37d46c8dcd2d9b5bfe824755\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1679\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TKt/S7P/iP7XzlfvdxDyq1lf/style_thumbnail_1.png?Expires=1650844800&Signature=WgE9PxFIOUbWn72-Xf5nAYlGsI~WIaGLpwvpTMJwL5hweFFIAnBSZEM0OpQGGIj74ZFRh8hYMHe5WPIcD9y0aTaMtQ25nzTf4zBgH9b9wWiypZCQNeHugMS6xSFLvVPB0Rlh-kVIwirXhau0hyLX3C8HXklrQ2oWQxTEdbNLNbedLRoLyo8931APcdFtkqBt3TOj-y0ZTQAdWEABfZJ9QERfscVwJg-ShBvUXs1hlc6oLNhrgjdj5oy61IWSUu-TvQEVexGMpllti5HVpL37oTnIzWV4IZpIFDiMKz87EDbKz5M6GIC6a66TWHaHsMtD1zML9yf5~J8Kz1hMAMDi9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.776Z\",\"updated_at\":\"2022-04-04T14:03:47.506Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~1\"},{\"key\":\"c27dd6adde29e9e87f4140cf4c86f86af03bbb63\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1689\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xWB/ZgA/D4jPVLcpYkgW1Zez/style_thumbnail_0.png?Expires=1650844800&Signature=gYrul8~Oj1dCRZvJqBxD58FACXintvkA8wJg-FwVCosKBmC7TbAXZwgcboLBDDw9jrduzvd3fWQOepzzH4i3o6mJXeFdLePNeKqo4VurLFgEwoO1qqWOXD9nGfA~WhznjB7ZJJmKQy0f3E8ES9vLlgkU8pc3BaLUEE4L7TWQ240~YdqKcqlaheAzDH6UW0w7yn9QyxZ5ioeIzmuMSkIfOS88QRPapwIGYiI4vNyd7JcalPoZ2B-4yCmtKP~90Wfmzw3uIuekJWouv3OsMSHYWODG~bYpdoHHWQjuaf~thkHAsAhlymdMV8vuZBdrK4njjOC751GRqv6PH2x6ACoAWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.737Z\",\"updated_at\":\"2022-04-04T14:03:47.499Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~b\"},{\"key\":\"b1f9a9d818a2495ff614d2f1f4eb81ad5da263a3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1848\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Sy9/ce4/8JHVcaY0d0kyXqHp/style_thumbnail_12.png?Expires=1650844800&Signature=Sn2fZ7Q5h96aqApRgXywFe6pa4vt4-UwJv68IvUKjDQUwmQTxe-XAYCFQIfrp6UD2DHyppnIGdWqOpV0xPD-qRKvTHWjSOe1kkZbg0AE9vq1CbvR9Ct2EkEU5F7ebMa0tlqG0uMaU80E-wQicOHu5bJT-pCKnjvxEyfTl3vxrdnp8SFhI6WeKumGRWkAP-WATP0K5MPvjm1BU57kCJUp-UU~imOoUyy53fhGkVNfyUdXwRWI6CrZZmOWheEAhPZklE7KlYpixNtXWNM-aqZbpDkw1BZbUz01zsR75mmKC9z5vJTMiZrmoy~YmRi31LPNvVoN~QdgExqJQqUJVxE95Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Numeric\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.553Z\",\"updated_at\":\"2022-04-04T13:08:11.859Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0{\"},{\"key\":\"6c5fea659d4dba983327456079ad0a259f9121f7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1847\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/788/dCv/mdzGDgKa6sPLPAAA/style_thumbnail_8.png?Expires=1650844800&Signature=ZKE5gX7yJlPCUFb5G-8J2aquKn-NxtcRCckayIMRxPfvFEC-uOxGXggwICIzUeT6DX35mPnULEp4bz3PO6rbm8IVpgPGvZ3yjEFsmwIhEoT4aMIMmRVHktUaWQYnUBDX3h6R3H2jQWYJrYgOP5EQhQCNDoCVWSAhWJd-6FUCgaFC0p5CSV5IJtar0vbEOrwOhIov1K1T7fj~XqZt6N0Z~Vx7SXF02Q8A~NrXLiROYOWd3A6AWRIiBAKaH2l6MwozseIoKeAcoe-1lhE3KBnbRqusMvCfUnDNP06FNJgTGIsw5vAB~2H94mEocLHe7Yds8y6WipcgL80f54xy4wadVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Regex\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.589Z\",\"updated_at\":\"2022-04-04T13:08:11.854Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0x\"},{\"key\":\"557f2c7f63de59a7c378279e7c9654bfa43f3020\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1849\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yui/4nM/Zwm5ZHIqle2hF3cI/style_thumbnail_11.png?Expires=1650844800&Signature=L6phnWO0nx9jvPkuGsJS-Yiv8Wpa5xaLXUPIb4ZjT6iZMw351q2wxyQhP4JcVuT~B68QEfVm7iZk975qyqjI~LxrzzcVxmGinlvQOLXBc8de9MLK82J8GWtknHjMLoKfUx5djHXNJQyUS8WD~8Nnnkqrhym3T-VMbi2wBcYgvIE6EokZxwlLrotpYWyENYCl7jtOu1c~zo0mp4vr0nQEiwpOROFvQmHw6wICkGQ307p0PmZ5SKYx1hrhgq2C2LGdmNmnrzxq~3DLuMW~WHGLQkoj0hJCbslyEpctk2LguH-ioJ5-1n0xB-gEYjlqaF~K1aV~8Ibn40WisbzmeI8JRg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Operator\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.502Z\",\"updated_at\":\"2022-04-04T13:08:11.849Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~/\"},{\"key\":\"4edbb9f84d88ce62dfe77c1e6a84164b68cb78e0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1844\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/dvF/q8s/m21MIRzE3kYGDxu8/style_thumbnail_14.png?Expires=1650844800&Signature=ezaNxyA8DHJFHElcf-cuXRfuXbNxPDQPZphF4X5GaWGlUuK3W1I3QbnwDstkrxsW4PIR2T8gRPrR7aIKWZccv4-HeLtpf7TOy60II117F3su6P73rXQXqe4qUcSCLsZDG8OxQlyi6OLk3~33cQw45NwPwN5~u2PROW893v2JujZVsiOUOYlDs9uxoePRHgw~bRoWhQ34Opj~lUtUqzjDMzqaqBYm0QpEru685otwjP3E30K3FY1p-4DJbUgdlChCfKxvD-aEgi-n5YT4kUqjHZBMsp55~SX7ZXsODyeLOngDuMhie3SwKTTqE4-eyJqKDeEWyBxV68lv8jHdyy7OZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Keyword\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.483Z\",\"updated_at\":\"2022-04-04T13:08:11.844Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0O\"},{\"key\":\"47ddb6fe30190a1679d0e88be69134f30e018b86\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1845\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hTr/PXT/yZ4V4Nf47FDvfSb6/style_thumbnail_13.png?Expires=1650844800&Signature=GGO1tP6KWsEGGtRV~yS~FsEPI99FV-eCCv6I1MQBJKw76pF82WMxHhOH-g6sC04UG6yLCG7xXgWFXQN2U5KkjCMWqmspEMdw2Lo-R-VjufMf91msO4A7PdiNOaYX73~7zEZlSkg6Cb-Ct2mSsbAHSzAo0twLV2I3plW2T3Y6-Z34gM2eDA6pVpoQHjRfgK0uEa9GaPz5UjfY~Y46NLP6cBuQXQiI0hVSIXm2wgV-KgXUQkwOnm2p0NIsTb1pSS8Zt2YpFad0UERyfGyVfjathdKjeLkYtSypHRrNj-J0CT7aUHevEZ6FBTf91SlI6SkCllabQ9a6HLPh5xlApSjkLA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Function\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.517Z\",\"updated_at\":\"2022-04-04T13:08:11.840Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0f\"},{\"key\":\"2c10c1a9c077e351576598088edbc3dad82d03b0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1846\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Bbh/iUO/cfoyn3vSQwVpEeHl/style_thumbnail_7.png?Expires=1650844800&Signature=dv1M4OJYimHVyrDLQ25zpQ9yMJllz42xo~ILhEe1BsxedZmjlTfzEUAXcA2trAAwHXBQmZ6icLQKN0B8oUWvqKKhDSY9yS~v10DrMipHG~4xPzQIstvjmqZ79p1ywiBhWbZ-L7DUwll~6hWXthJI~gTgEokmeqJnqEyZpjhe-AxlPi0XfwRi10WommZDsbXAzZ9PvBM2WztUA2IKLxeuNRhJZlVQkkXSVXdvV6vpBRbPZ1PYNANqeZTAKu~BV0UqEpYNF~xTddHBRIz2uaC-MoE7QJCss3L4iV33te1ldjHKaDfMR6rKGE2K-3~7RIjVwYm2Urcf0iarDcr0YQHNdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/String\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.512Z\",\"updated_at\":\"2022-04-04T13:08:11.834Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0r\"},{\"key\":\"238a529f9dd309311f9ad8c1477cc38b3d5a33a6\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1839\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HVc/XUh/PlXOSVnqFr9GUpAe/style_thumbnail_9.png?Expires=1650844800&Signature=InX7FNjQFeT2XVzz6tEQhRutYS-WXHKRxvH~F7aTgy6Ais4GWQWYyqvsFFqm1-8ktlP9QnS2p6zNWXNw3x4TRbuSfpotwObS9Y8r9U6nRo6sHwfofx6v9DysWt5KtdiKHcP8JbPT05uX0HJu1451NyvieZwbmEFlFLMW9ENDWoi6F5SGmhIVX0wmN9wMnFo0c7QJhR1NJ80hhIKHvPQiENqaApCZlQsJr51UllNJvgDQVceAIzs5uCxxkH90fl5JS5BRQ4zG5gK5w4hTpJSDA4olmgrP-Hf1YdOXkJ6FKgxg31~ddCGmYKGPfvzs7fV2Sbl-oomlt2BXc~48D6PwSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Normal\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.497Z\",\"updated_at\":\"2022-04-04T13:08:11.829Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0\"},{\"key\":\"8638ae0f49622e9d8395064ea744cedcd3c078fd\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1680\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/G0j/V7O/I67cDxzAhmYbRn1M/style_thumbnail_20.png?Expires=1650844800&Signature=Upt6D7WQDCtGBfeiIyLnDqNtMP4kDaIM8kR5kfZBvJut4E52xaluXw07~ojD6OEiINdb5oaKYnznHBYT9aV6mKvbb6~xoolMZzWtMNxKrLQdAK39n9mTrNDy086wC4CKqNrY5CbnZeJTUEZ~M4A0xzj3LJkxBh5HMSs~JiEc1cNZdUjSekLujH7KWA-i37c5rKWRdKE5aE~BmWGNN6d4SrmHCZdpixrO9JMWr09Ro5b3CMf91UMwNiY8lSCKWtzJTp1yX0DJWuu3DH1loSZkqUtE82IUS4nxFdi42jyYwOk9SEe7tZkV~SzKDmVKBjmXPk4-KBvTzs8A8DFUg7saOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background High Contrast\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.801Z\",\"updated_at\":\"2022-04-04T13:08:11.801Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~3\"},{\"key\":\"51b91ad28644dabf5b31183664be52f8ee9f3220\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1682\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/er3/ByS/msNVJHhyUJ3WhCJ7/style_thumbnail_19.png?Expires=1650844800&Signature=DcGa~WpmqCC7MNXZu00lgfeenvjsHwq3VL3QxPiNMY~j0peBTPny9x6nzanYXMWUUhU1ZlRDHVcJrUSa6TgyTFVM3KmeSgTqiZWjY~d1WYZixEONbVnbp3iFAijfaq5inl5ruEZtlYkiEqfzUwLqSXO3xCw8mQrn9Y6BPl8oPMe0mq-DcT7XTkjMe-gET-112uktJyv2R6suvox7M5yxqgZ2S973VOzj0b93Ybmz-JHguF3GxDuflYp9i59j~Fw9n46eH2s0Y5riCNHy53UUqtrCg2Yu10u5GnhQP8xWivkCvazExNZBn1z9yeVO~S-fAQM~k6sBmlSEAJjgOSu0CQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.797Z\",\"updated_at\":\"2022-04-04T13:08:11.797Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4O\"},{\"key\":\"6e24a91a3b1b28b7fe288096c58af415cb730760\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1681\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/N0I/HNi/uMcZs4moPXRGOcGj/style_thumbnail_18.png?Expires=1650844800&Signature=JXjX8e0ueYTIRzWcn3yBA2qUzXK4HxI32svHH-qSdKNuHqb4tXWDCuwKmSrFivWV77-7kfstRygbBPFPvpQRnbn~YKkb8hJb0QMXlc4M4aYSpvVxblKmlrrS5TxL8bcZadbGLB8ukNAB6ZtlKmc39m9DZq~u7r86e-YdSsJKtyE5hR0CYKM3MqVJ5KYiJhDKIfOviO929rk5aGU8heApf4KGujhn4ccskZ7PMtiKwgAwX83QuyAKu70o00h8OXDgqwvg0fgUnQyU5zzGDR2urxnaLMT6DkjH7Af7hgfkDH3ptLlvXLxoTv-1qBpqHDWQgFLSPNtzGbJp5GiT6Yd9IA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Regular\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.791Z\",\"updated_at\":\"2022-04-04T13:08:11.791Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4\"},{\"key\":\"99896ca3670b300fdd56bae6a342c0c51e1fe7c0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1692\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/AeW/JrH/VuBSUYZzKYasuEv6/style_thumbnail_17.png?Expires=1650844800&Signature=P4JWlDij-YEcyILebi2g5~a2IDlqRT2qdsRQNJ4f~iE0OZmGeTJmPkh5p0-i7TC~II-hCWcx4mrm9rJmBKOUibPTWalsQjZsQnEEAf3J5LooPxQj-7K1wQlnrZPBt-YLPJxgdOWyEumzbV8a-Uqsf6rZVeYGu8u2WsiLUFVUUalNw3sax~TMla7aq9vdh9UX-AIuXO1Bk9rjLFrqYzxiD0cRQ6NC6CcL1BT6sYu0NKNWKedie725XyaKWxVzabIZ9~HPDlc4g8BywspRmLAcMiz580Xf~BbhwyTbmIuZn6D7n-2Lu~CnzlxQN7mirhYeMEAJj6FM~GfrXhrOxtDp7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Muted\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.786Z\",\"updated_at\":\"2022-04-04T13:08:11.786Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e\"},{\"key\":\"02d03f3d47544f27d14210313bd6f2d2ec6aa7e2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1683\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/7Nv/UQy/syMXLjtuCV8trpU1/style_thumbnail_16.png?Expires=1650844800&Signature=Otq8gijP1ZipSiIZyy2jIyV9RKFW6IMYXe-oUOMo2krHQHgjebSm0YA~mqdsALc9bi15VE95ElfwW9eGEOqmNyHITDBmd6Oqu8YuQtvCfJ5L5xBXuBlyfpAlcTHVYPEQZh8L9B12q80QMUOgtbs80huSjiB1WRVml6iHViA83qFbK89JwwIAmHvlLgzlW2vqQKB87Bdqz4zolt42fP9MQTEtmkG8hPlwNFmyELwC41K8pZMfkcC5udB4jW0pGXAQV3q-Tf4-PWT2tWY2UYlUMtEPKn13Mlh9TlkpppcDD97~cHB6ONnbkLdUhbrGZAJR3CM4xWMPrUR6sZ1S7lfG0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.781Z\",\"updated_at\":\"2022-04-04T13:08:11.781Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4f\"},{\"key\":\"d2bffb996e1f6da0fce60f0288a7050bf2cc14f7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1688\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KhR/xvE/bpNj7D9jmi6On9GP/style_thumbnail_10.png?Expires=1650844800&Signature=OyHpGAN3RrhzxDOAs2TC-pAuq1uCv~THsCEY9htTmVDhuzDOpQsBfCQJw7S8MP0tyacMbsidP5DV0Uw1at5D22if31N-1LW8by7zNpkmlnybTwxNZW1Iubh2Th~ZwX39UXdPBh9tEJ1jvzxubw4IONdrUvrcoM0Dz35utG9WpQ3XYCkooHh1bi4mN0q5r3Z6jnWm2ml0cNxjxDedxL2VZf9oZk4LzJnSfMmxKNj-YBNFwWM-jTpUxtRqGsFN4LSpmApt~M0mexULo7-nYyOgm~5bysePEpuu6nNd5eBpS5BlzX2IejfeLsqpi2Path5bZHkKeJFDyuKqCRIkHiBOnQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Success\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.771Z\",\"updated_at\":\"2022-04-04T13:08:11.771Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4}\"},{\"key\":\"df14d7970e239d7c63b6134cf59e578909baf8cb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1685\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vBM/P1v/7WyhLA0MIg8f55a7/style_thumbnail_6.png?Expires=1650844800&Signature=aryxYwyU6WbP1zlfH6-GfF8B0bcnr-kynAMbFNN6OZDh3rNfOy~dCVbRN07URF3hJmBQzeNpTVNgvOGr-FTP8erRvVauQdR3muFgPPfu3zcdSJ2ug6xNHNgcYwdwDJ0O07ybKe3yYzVgOTTcX48UrBLM5Srf617pv0KdNZBehUk-XSYkG0HpI7qX0dDpU2HT8JDngvThPnkjaZaTOJ7TbXM868AkYBYoogF5eRbbHpWtoHd3-P9FbOzIFLVk5MttdyNzzwhE0c-QWFreFdgm84B3igDYCbni73hM1WwzzLC8eoqAnsEhbdbOOJfkx4uWBv3SyOMA7-nUf-7vD9WOCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Highlight\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.766Z\",\"updated_at\":\"2022-04-04T13:08:11.766Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4x\"},{\"key\":\"c412194794f517b78c51920ae546c608e6056dae\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1684\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PGD/15X/xJCdxWI87Kj42KS1/style_thumbnail_5.png?Expires=1650844800&Signature=MSKKhCMof8OQSyL-p481xCLUoNezZuCo0Dj6meAFH0-PyT2wKY0oGl7iF1OrcGTAfwXrVju36SZC1NlZxeuerbVNY~KU~jtMmZxmMimlrpD~RTmlOlJT71lgdpgBaSiMYrU-ivDHPj1jh-Mb-l9eyqILtjourJP8D4BFjTM0lyl5jGnJa-2vaqy0pKUzllqQRBHLBt3gp4CBDAkQILWmg5EbF213hW1B6foyUUGHkuGsnIW216hshHyXgJi6lEV9wIzLYKTvrjKsnvOg8sZ3LVFzENlbJqV5K1MkTD9urslTpPPUBid5bLTR~QvexOJb2ZdNSiEGmo-TeGmSOKUrYw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.762Z\",\"updated_at\":\"2022-04-04T13:08:11.762Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4r\"},{\"key\":\"084258efa5c89fc941b4b3812bf62e97e6ab4fa0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1691\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JQD/Lve/7Dq62JcPC5BUYVeK/style_thumbnail_4.png?Expires=1650844800&Signature=IGXSmvs~0PzPgXYKljxJ9BjRYzpsqnCsa4n7gJbrniEsDlDnov0bmp7bbGqKZaAFoKmXTY3mMtLk8fPkVGf6Morvuc2G-yT5ZdaCcZGt1MhInGGNEo56iylcO7HUUO1sxtwPRim3kLkwzn0HUc4yBsKOnJu6T5exvqED8ioCiEm66~WMhlIqi8uqP9c~ndNcJ4Y6YHLUkCaqFBlxGOkleoVBXrEpZSkksqjK2tN4KO55YC3JD0iXzlBUe-zDlZTjmk9ciXf~1~4hxEyWyCte~7QjNjptiU-XVhnwZJ6PBxmLWozp64TFVD2FuYx2syxRNGriYmNGAcrdpa7BHa6R3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.756Z\",\"updated_at\":\"2022-04-04T13:08:11.756Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~d\"},{\"key\":\"daba68993a7825bce14e2c1b1d137429ce54f17d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1686\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bhr/Sav/kahMmt6GyUpOvtPS/style_thumbnail_3.png?Expires=1650844800&Signature=YFxSpDt3wkmPdppooFAFRvgfjG-xIBpRJi11EoMfgJTXFWqu82qTywiAWKKBtO3KK5SGQMAq~sMGO2SjUjTub7jNOGsbPeqPv2k1pFz3o2mmoX2UaEjUd~nYSbsN~jI4VJblQqhXRudjTP2S6fmsJSqlPfDxLuaUhcRxftIoT20PG9SWNYTm8W3cG0ryE-fAhGg5ztiCGRBWrPGx4BeXHouHlLPh6Py9Fi53yjbfDk8w0ZMh5SRB4vDWJFDocKLXFVVMbZpU-XkGiDiClDfJYj4x9keOEaQE~31Qfc6v2vwL40EMVN-gbGrGbI5KwhnsiGu19sVxrl72qg5YALcU2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Error\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.752Z\",\"updated_at\":\"2022-04-04T13:08:11.752Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4{\"},{\"key\":\"23b28354b140ffb8b2aed2a5b02cbfda0927092a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1687\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2Qp/Rwd/9xfsm6ft8q1HDI6B/style_thumbnail_2.png?Expires=1650844800&Signature=J2EJI0PQ~3VZOYQDAOfJuLNCR-CyUro1TvQRNv3Ak64c-zbg1EFzGHrZiUQ6FcrSfvozG8s-IKjDLSNSYkGTVbt8dzXhq~r7ScfFxqUX11PiihfhkRDNm2Wu3bmGWLVWISQCuVs1Aohpgtft-9ZdNkJ2N6JdhrK4oHuBWLIoD-bm6pcNKvV7qXNDbBjGKy2k~0MFe9dpCTmPiyOQEKidctvsx97iQ63Yd-vQ1~hzYyedtd5-wH9WOOPiL3C33OK6Npd~03UNQ7XxoWyoobCUQ7ka6mqfojnpuxiRd52TLVFW6w5jsYenhQNNTBlGHELRfDur0ASYcRwlrgx50iAESw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Warning\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.747Z\",\"updated_at\":\"2022-04-04T13:08:11.747Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4|\"},{\"key\":\"9fe7af9777ad346bba7549abeb4a5430d80a20b2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1690\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/pr9/BgE/zMAP3KlJfxZadiJN/style_thumbnail_1.png?Expires=1650844800&Signature=PV4DRhBKf33O1G9zNgTGhwrdHwajZLJPrjr6yrFdFtUb9-VpC-TMKqbgRNxA83r9YQdAVtgVhS46ZD7MPgXZwKieonrye1Gu64jkxcS7g5SrmSNYvIEgwBEoAFQXU8iRCCIZv1lBhHMtGOOU8-Wt2y5IPDV-kpnlPs2BuADyqVHUDDkVo3ImRM7dmetbdeByHfKhHMNNBIWF3BOM9zWjWxhBkdcFTnksAb0d~g0VGRyFgs5ZVO-3-WWRkiVJ1OoGs91o4be1BuiYGolRi9~kGwIGgSy6F3w9YwgA7xGgmwS70HPzcAZnwrZT5kPk2PTh3G6WVh-YNwzRJueryOCt3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.742Z\",\"updated_at\":\"2022-04-04T13:08:11.742Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~c\"},{\"key\":\"a6d1577ec82aec5d32451b0639769bed04a44310\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uyg/HWc/0ui5Ck4Rnr8t7zXW/style_thumbnail_0.png?Expires=1650844800&Signature=MRCPoPtV4bCNQGa6rMpXZFaSJoMJ2xRZlgdNBEKGoDe3t0-95ovEatmijB2mFLu0SbQunOv0v9jsuwxKv95BV8uw7gs5zWTWcrTwlr0MC-5VH6A0FjOPBOCl97neCegafCZ7TgKYGgRVHUUZW--htTLUAb9mIuVdvCHMnIRgvYT8M5xwKO8HPbq5p2aJ9PSvPzMybVo5tP3jKomUrHO00LwHOgsREU9LiJncWxn2hGhqF0kFMMY6uDKKC~cEGZx1WYYCBj4BKeIRGR-rdIgjBCy3wIVOs~YDh0K0MV~7PQYDtkSLJHsaOm3SIo~vd45CTXvYpNjZqNo4OoZ2yPuzqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Announcement\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.839Z\",\"updated_at\":\"2022-04-01T10:58:48.322Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"J\"},{\"key\":\"878cf98b608f73da55710539b4cf12d442b06b0e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"227:1552\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xjf/wIZ/66FFegTdFAaFZBg1/style_thumbnail_0.png?Expires=1650844800&Signature=MNO3ciHb9NWic5rY4ZfYFBwEgkwndq3UL8b8puUYOjpkqff51XPIj8byPWbS4oZdvDLFkZ4alkan~zrYnzn2uy2y7pYkqDWisnJytSeoTFdS7LikDPh53JgmCw~uj33QkbGrRjTrk9g4Xe3AhaHw5aI5H-mXTavNaNXIKhI0ZY2yG-SPC1JPqNGepztynsmVikxB0CpHg~9CAn6KCEV1n3oqRWqvid8DrawWOAijX4YiUmJK8YclfWTOUipuJszoRab8rZ5pyrOiOWTHd-RCSHxJRhXdYNCg4c5vmZU0snCuy6udIbszMO2DnygN0E86066APcrZcpy4NTnVX9nn4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Low Contrast\",\"description\":\"\",\"created_at\":\"2022-03-11T16:07:59.623Z\",\"updated_at\":\"2022-03-11T16:07:59.623Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"WO\"},{\"key\":\"f8f016b4e0b8cd9dd5e1bdb1e0228bf11f77f8d6\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2372\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WoU/tlp/uF0BX2MyMQe21vKw/style_thumbnail_18.png?Expires=1650844800&Signature=L~-WM3WqufbFOn7cFSdqhs0ddwMlvRYPt3C8l5JK1z8E~onMluv-Glcgz08cBqfCtwG3SY-6WKvnth2XzjKoIY4wYyllpCjfkJx1aGqgX5zcZOOkgR8rAvRXUeV-h3mf9GtdFeZb-lVAa3MVIcmMlEc0UQMe~JnYSl03STiLWv-uk~G2sEJyRPUwpCSspiwET6bh5VC0TPYnNxH2k7Xm1jbMqk3SRvY9jp~fK-YkVEyBceEIZg~4qPknQJVGoLEavDMyKDB4DxZaRqKFoh2u2b0r98D86gQr5QDliBzssyK-snUGObwvzE8VzZyQ5aRa2kpgqBPirTuxs16-v8DB0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Floating\",\"description\":\"Feedback indicators bg: toast, callout\",\"created_at\":\"2022-02-25T12:33:22.997Z\",\"updated_at\":\"2022-03-10T15:13:44.581Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"%\"},{\"key\":\"ef58f49300baf80c6613b04e065f393c2d2003d3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:738\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/V8m/FVU/gyze641TtqLbgvHX/style_thumbnail_10.png?Expires=1650844800&Signature=Bm30MBFUxFoTXhr-Pb1wJQZGoPFcR6SFGzm6b1cXDbndwOwmpd8WP7U~k1BjxZ5FsSJvHqtg33PbAJ~nXPn4TL9zVwnfG2SqGp82ecH4efQ~GIK24t2kJbZ9a5iZBzdE15oTTGyq5GbSvZwukAicmOxTfow2Bn9D4h~odUH75Y6eULQzFkM04cwTa0JmCZMi1Ez383fNI4VQOANn76OFZW5z3Q4CaY0QqG5BdO122sqJYNrYjSFwJA61hJrJM2Hpoe79Hxq8fmHsp22T3hUky8kfOo4C24GXK~YsMRePDZE-exE9~gwW4CN~uIel9-y0a6rEYhQK4I18uYUR6kewXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Regular\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.934Z\",\"updated_at\":\"2022-03-10T15:13:44.576Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"6\"},{\"key\":\"d3765002568fd933b50a860721e45c08f3df3a01\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"20:526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6fK/1C9/DBkGPETAWbtlx2fz/style_thumbnail_14.png?Expires=1650844800&Signature=R2UWtUD7ukhxDySpESzVv4Qcrr90h0mJZvXMdDN44jeTx8wwc5eJPnlBv7M-2lwK9hY-QmxCgULMdCsW9W02LLOAPm19kV65768L-1C43PKcgoYdMb03LwqJ9v6mGEMICiNo~g2dMHdK3SXlUjMTzAdXHgw9qxbJeSnWkqgMAllrlF2616vTj464aDlhtKi-r9oM0KbVJC78oLXhXtvUn8vgaEJKYeMhfraZRaDce~YunkDHOPqlO8Tn2oNEzKgU3jlVQsp1LONdD8oyA3aaa36TK65cOsmc0oG7YaLFNqDQtnR9U0Hfp7GyIYT6XFBI0Y3CJCjAhPFWqDotrLeFbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.966Z\",\"updated_at\":\"2022-03-10T15:13:44.554Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"A\"},{\"key\":\"c1784197b7ed4cbcb6c76fd9f761898fc13275f5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2383\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/p4k/pEC/rL8SgzB7YtXh9fOV/style_thumbnail_13.png?Expires=1650844800&Signature=FKEWHTh0RVrFkRfHi-rIx8fXVVtz39u2hEqQRDo-XtDdUNKMT~EIqB~19ktjQ19spy99Ws2G6WytglAzFX3ou9D-6xxyQhNLmVf9lrpMeOIatLS-SiSUF-TGGcAkCQoUTvUlqxuWFgmXnYj-Dnk1zrZ3GVdhVes-ZlITnu0ptTreCoONXT8yfAHLFgTsmrbDJ3OIbGL-z8BVv5NJgDxrmQUylhdMpoMECsFuC3LNjj7MsdTw3dgjRafiQ1qjzf9Cox5rnhIM-DrCahYhy3yn2Kg1XZVzxL7J2PZHHitf7p3TYBLrFGg3YdVZoofjC7ryK~BCtOUVzb89BdDnsUDdEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Muted\",\"description\":\"Muted text and icon color\",\"created_at\":\"2022-02-25T12:33:22.960Z\",\"updated_at\":\"2022-03-10T15:13:44.548Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"1\"},{\"key\":\"a04d540bdb338462ff6a60b5afa6eb2eb04a8971\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1487\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/7zm/Dkw/AlXkmzyI7FkDmfPc/style_thumbnail_9.png?Expires=1650844800&Signature=JXt3IOecggEgwrpm5H4POCUnXDK5ddgkRYQw-M1~ibnWnoWsAMKBdgVvAjqtp39CJaPTR9DEdzOY2SOKWJeGUxcc9Ngjv5lnr6hqAfs952oxLWk-fFeM8jYzJxfV3G-xUxSqpZpRan06n9YQVZmF-6~CRlfBbnGUKC~rVD0AhM-OCY4GXZKTxV58HJ4nWdcyvyOX5YFrfwi-M5aYlCCguczpPuiCoY2MssPIeFJU~ULfylQYIccdwucEnjeIjiNkYvWDASRYbAQ3OANjSQfKGbFp~6LuwCfmQdybZ03NkmCl8XcWDjN0InwgfFvU1OCbqh~syPDX3GWCW~O-~ZWNEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.908Z\",\"updated_at\":\"2022-03-10T15:13:44.533Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"W\"},{\"key\":\"85651d34ab4114cfcfbfd9726f44acccfe77a5b7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2382\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iwQ/m9C/kA8qKx31kRVc6SVB/style_thumbnail_16.png?Expires=1650844800&Signature=ef2GG48PEVGcxPstcBrVTGEGk~NRfIiqTZbVZ~LzcWldpO7UAiiHrkBTiV4Kty3Vek~Mv4uiwz0UpC9Rdm4MTh~8UW~N8LhLM15qbPWGrNcbwYZF-UW3QPAcXQAN7SzkERaT66zzx5xK7RCFcfYA~vg5dQQuonMSZS5~yPvsnn8egS9CpXyfgOAh1xNkaB8mZvfuVIN0ODNw59304kpu~CQk5CWRx0jvefcY46IHZGOhYY1zcA1r8F~E1r2FkJWkZxcCs7r2MTgBBCq1y6rG9QpoAJnNPzeeE3mk5LPjuqtVnpCTxuQlj8ZA6xPPOtb04ue5r8p0vn74l5V-X1NtRg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary Inverted\",\"description\":\"Inverted Secondary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.977Z\",\"updated_at\":\"2022-03-10T15:13:44.527Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"0\"},{\"key\":\"3d8d818be60a2f3a99286ca10fdcaf953b04455d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"101:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/f0Q/nQe/btv4LeDcKk4x0wX1/style_thumbnail_1.png?Expires=1650844800&Signature=ZUk42tPiUPHAuZMVlUKNQ0Ei10lG6rtQKoPupafUi7hSKOBwub4o42xob5LTChyFKMiE~gZYWQsZl2HcFzKujjsV3b3hMGBC8QACgTUKIIFusvkISiIAyqnnwRI2kActn-Sp7puzQZxdLytuGeXa3omeOFfiEZld-BICdEEFQ2MjIREiimls1d58IiKrTAJxsnOr9mm8RngqyTxjUFzVIWoA2G-A4B2s5UpnnEPH-BEEJyUbD0I3y0bTc0OrmYX-TyKi8c-90F4RW2jXIdGdmruXFAe0LEPtaYqnAXX1NJ6cy5bq9cQeWeCiZ-I9yU58PIbI5CCx8BBrJjH2qIYgUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.681Z\",\"updated_at\":\"2022-03-10T15:13:44.501Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"RO\"},{\"key\":\"0dd6cc65ed1e0da4a65a7dbdec871d9bfbc81b15\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2381\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iLy/tFf/i0zSBlwFv4G6msWk/style_thumbnail_17.png?Expires=1650844800&Signature=XggNsJG5nW7dnj4ZtCAn6PYLuAuCfoyVI3sKqMQhrTiCHTT~NM92RV3Px-bgoiV5MkEstGutn2NCH6~7QCGi88wl4ywKjCxl4c3P~8VxW0Zyyyuk1d46R0bZA2-FgdUp7D3PNjIZ48gXdDc0dADNG-6xrAvLPrBdg3HZKi~azCjcKrrY9qfWNnHSAMLHCV8ROaS6FMwiRRV6M~gQBaAeIKadT1JsH7yTQR~8e52XJl81OAcHe2ci10j27dd9eEHsEf0Pixcl0Lzd2hJC7xM50jJmkOt6hppoBr64~9Ayv~51wAB-fLqHHpLaw5ZYyMe-fOj38YW3PpYfHEGzgSM-UA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary\",\"description\":\"Secondary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.982Z\",\"updated_at\":\"2022-03-10T15:13:44.488Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"/\"},{\"key\":\"e449d354bcb3b1a75c310bf34ca109eca2e806fc\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1432\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yFC/mGy/bU35UFDULcIUBBp6/style_thumbnail_0.png?Expires=1650844800&Signature=X3dObeq5rs7zIO8W2~UGUreDt6xrUbkIg8iGkvga9qMMqXP9-8~7WibyZJuPVR2qiv5Djj1rH1Ne1SFVSilgleykdf5pD6OQ58m07fkXYWTale6UPwhdFWIQjBzmc8p3M2Ay8oG4mWEkWmozn5WWPScFA2mPoNxorY-hM10VUDXlA66vGr4J0M7ug6vgPLU0Ph04PqSsv6YcOfMtbCDA9opaDr~z77ayIZ1U~bxQwqMWgHCjN58ImLIUaD-2I5PQ8JIfh7s4l2BNHCpxwhepFQ8sJ7pRkqDgbY~22x4BZNw3fPAVWHYlmkWgoDbC~h9T-qgko7PIWm3Kj5HQBkWAJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.822Z\",\"updated_at\":\"2022-03-09T10:57:10.553Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"N\"},{\"key\":\"0e00f688cd363b572752edebf943dab3d66b3e95\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1433\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/LLe/eIC/N9ArUd5TTINeywEQ/style_thumbnail_1.png?Expires=1650844800&Signature=a9kAbfW2BIckieX8HYpBxIlHMobbaismt-AbL4venA9t52uXrWOpWd5bBtd~SAmVgGvJ98Rnnb8S9k2czpUjcA413QL~ccYMkThlY3SqhHPLyaYW60-kP7EPO17d5yabrqby5yQ7LeyCJz5A0iwcuu~V77PxnGc4l80WRy4LGNjGy0s6nwVU2mmM9XX1rEDiTdYHVMrvkwIT1hzTpm8am1uki-2OL0GM37aHm9SGYSBt17tQXzLaVnMfQ9tuVfIBI~iAldIcEOKjXEZdHhGHMl2afpt2l2Pp5Oi4h0h-mfhWJHFDt2WRLdPQZqQgCcB-3Q8Gy4AsElUE5K2Z7~pSXw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.817Z\",\"updated_at\":\"2022-03-09T10:57:10.547Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"O\"},{\"key\":\"0a6bf727ddea4108e955e7e4e3a191ebf9bdf74d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1521\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Y2W/lDX/riQEC7uVYR49YOzL/style_thumbnail_0.png?Expires=1650844800&Signature=g~HtbFLNc17GkCDf65k4Z1NEmWwy0J2k6vMXDCB4-Nw1~LlrDkb3CG47gVn7vwQ~XN~G45DRunSF9f2ujAwyWNDyF4VBNryThaMhpsCV4nujBXTUoVud03DF5vVlPH1vs8WSyI57K8bZ6gT4GwRp2PLWAIxENVrI1wbDDpeTIGN1dl9m-FNmclx6kjorBALi737luUzSxKPJ47XwzwHbC8IPPVtY1e2DSUXWKnsqNmEampIBPUG1DISabzBGKDm9hn9btY6AFwHbUL4oN~QcOgzoyTh-LB3mjMD73UkeluVaT9MSrM7V290DEuQmwQ8~SCTX~b7Kq3xvJvp~QZHx1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Success\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.869Z\",\"updated_at\":\"2022-03-09T10:52:28.091Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"_\"},{\"key\":\"e01cc96187afa152265eb2b8f97607ad0391cdfb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1523\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xIu/f6S/SUFFQg0eBnLMr8TK/style_thumbnail_1.png?Expires=1650844800&Signature=F~sjicqkY3J5ZACgXg13ZUNWPYgNfN~369KhQnZXI~ofwNgGYF-ajufCXWQUGrsR1GlWvESaD7rp~COG07MQDGiQSg5nQDaIhnshfFIM4aGPU1EP1zNvcAd-VGObBvBNhFgH6vPPYN-T~3pTPjxdFw7rUbL7lSiLx0v99pnR4jRQdI4qkCK71MNDqVDEqY1-VFKon1-3N3-MtoZTBwKGcNemzxRO6OCTtNrMrYR1THL5VhHMBt7RajkrhplqEYjIGodG-xsPApMDqe2d7oFYkLgmYIRAOV20VckVjfOCFZSgENN6FC2KX--8VlXyQdFNl2snFVAgXX88cJBG2UQsYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Critical\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.737Z\",\"updated_at\":\"2022-03-09T10:48:18.660Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"a\"},{\"key\":\"492fb3207c0cea54dc2977b48b61d09739a46b9b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1538\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/W9g/Vtn/M9V1NaNlQVVLQ2zh/style_thumbnail_0.png?Expires=1650844800&Signature=KqUZb2eCAu7XA2GjxyMlHq~UnU76PVztEzOtkBQQegpqnPaxHRY~cnRJrcR1snnhtuo8k2dEB-x0E7rTSsWdG~xWQupByQTRx3Qp5NPUIPKhUluU9QPWlFfgfq9BQ5rIuQNUurujA25G7LIL9RyKZYopuy~HpOgysD4M5QrN6XadYHL7Wmgj1aYiumUxphbcq5Seiyscx5YFcU7VOW4EWDcE4h3ZFZO0ynD54zqB5-PMBLm2u0VMfqfZSXcpQ5kt2XbbYxz57hXVA7RowLx5JRkDDuO6-xXQP9mrPk1jaXBUDNBp-7Ph-6JL9HnWSmIiqY8ezovx7cXn~gb8ANX8yA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Error\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.524Z\",\"updated_at\":\"2022-03-09T10:48:18.654Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"aO\"},{\"key\":\"ffa8470c8873338da642b47dfda437c4ac5ff62b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:739\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TFl/xnJ/51cAhwxp1zbIL29A/style_thumbnail_68.png?Expires=1650844800&Signature=hmpjAzVrCEGOqVtFWBKw~e3UzZi-r~1oy~ZUMgY28886MXOMF36CXuQfCc5yIfimaE0YN78QDjximJrI6Y1Ise1G9WV5Hma87odjVpwRhHmJ6iACtclArxJbG0G2JYQF-l2yjuH8X8vsTHiUdtTUzSsKCkBwwdYSEX8jLM8QZ7alupiaXtB1cXNKreyvTzWt2efHCZjgsfgBIF7aw4PcG7l6W6R-kfcGCS8JjBZKrOa0Wr~7M~K2vbMuP~hQo6MBhJFHQdcs1zgmdyO4PeCH4QYPtIkpdK2ORoOyrU~VPY5LLnne8KlwrPtLk-3cADepQ1KBlG9rjZXK-BNJpOZ46Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.858Z\",\"updated_at\":\"2022-03-07T12:03:58.409Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"7\"},{\"key\":\"f995b876d740cca61c8c65eaeeb45fd5eed02da8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1516\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/m4M/IfH/EmF59dsi7qKhI3wf/style_thumbnail_81.png?Expires=1650844800&Signature=Y8oVIOZ~Vk5LFNSalUwxuW~A7mkd5p0q2NH0p6AAYR9wkLmp0-bvPLCOdJ2OdYSJbVyy4JO0R1F3oexeU26ERl5XAwIwaz0QZLgSjfyDKxF4fvNXC2KQksJ3tHbqUjRltLwjcsbBzZuT8bqm533EgltDjFRressCvhDOj-1EiB-00KV5mFoA5OyRgANHwdx5o19nZXcM2SwWaDhTvT8LZTj61W8oG69FjBBFTBidbncNatoNAKiK1CXyWyNBzRQ~VaZcsUkZAwQhic66nYLgTqSwB3n0aeLukzTClkTquaIo-SBE6eZmQUmL2Zock8XnapNbhQKqKoAPF3~VxCu7og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Anomaly\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.929Z\",\"updated_at\":\"2022-03-07T12:03:58.398Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Z\"},{\"key\":\"f929e6f612c2fc5f7a5e411f5dd5b8e3666fbe14\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:790\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QNS/W9f/s8uFAxwFNYofcQyV/style_thumbnail_114.png?Expires=1650844800&Signature=EdpZhoPsWInKyU7rcFAGvNL7qcRgTXD2wVrX329yhZN7HZqVGrePunSIWZeS5uIObxYttXR1F3sS2WGGJBnvABbClHREWULkjVyYuQlMUpZoc4Qtv~4MfjTwz0-u491JVmR7G-RiCH9DP4Oeygd7TRTASOxgwgdnwGRSxEgQ7u9c80FEuEBEb5m8obfI8nm6Bs25n9pRAV~F2oBkCtEhHtPWK~iplhnW3TBeXz-FhrTBYuWCeVvNq2RXGWFUoLhKcZNKypUZEIZ51RAyqJY1YnSe~0EleQDH-eSQrXIt0ZUKc84aUpIUzpH3KovSTRZlx80aUo5~wOAQDuvrxUt3GQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Focus\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.106Z\",\"updated_at\":\"2022-03-07T12:03:58.392Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"@\"},{\"key\":\"f7e2ded6caebf0779cbfbd0a557e46e1947a614a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1522\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fsU/Bf6/ybzns65ZH1CLCcmh/style_thumbnail_35.png?Expires=1650844800&Signature=E5~C7cf1ORbcnAHSeYzPHeXCfDI4aueIdCSakEQcCDlIaAr22eSOzdz5-VA6Mjdz1-ikOyYqNf65Yk5gqCP-jbH~v77Ns0jEwUd6DP1jV0RHhHwOCcT9YtsGMFA3znCz7kn2JWW1UvucNmPzzIwqIcdNu0nRZcCD20BCPo3Ak7FV0aKmJib-qqH65TOpm4jXVIiEvYCmmGwa~~NPmr6ewRU8-BlDYTZ6niu7Y3pLfOw6iUKE66bYBDGBidskvS5EhM4TkRw7uY3c2fN-uXzJAeWucjtzMbZo2rWY09hFONTwLbGDAwzTjjUfU7VF2-cEuzrQN-KuFfSZC1aAvENBhQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Warning\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.686Z\",\"updated_at\":\"2022-03-07T12:03:58.381Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"`\"},{\"key\":\"f591d3c7c3252e0b1f8dd6abc52351151c7086c2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ozB/sLM/5Ig4jjBNTCxo0LT6/style_thumbnail_66.png?Expires=1650844800&Signature=g40A9VWPZt3LTE~gJFve-iZXbxCFE9~DuaJyouTvznZPV-VC4Vhe1pJ0Z35ZCazYYCzPr1HJNojKC7Q~V0C~n3OxBzrFw59qdR2MM3qfbIJC8abqclBEwq2hQNi07VFGTnv1tg3Top0cywXvnrzXqunSW8u1tjnyDtcmBr6onqweYAC2Y57kR-0tueJ07li72ukG0ASTcJ3YQkhMTNSBARzE9p~aUBNDz2291woLwdyB7kY81au2atwuy9tXVU34eGMwViMdH2wGg7EfQLm-2UtrMGsQEBD~IObFig4Tvrb2eY7k4odT7fbMXHnX59mfq6fhusP4Fv~CjTOhFWpDMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Info\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.845Z\",\"updated_at\":\"2022-03-07T12:03:58.370Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"I\"},{\"key\":\"f3098db025e7272071f27ae6f9a5e5d3096eae65\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0GZ/vkD/qmOvsqroHMrb6IU4/style_thumbnail_11.png?Expires=1650844800&Signature=djjv4rt8OgrJikGNi3Y-FaJINjlQVJBa0UPKvTiXu3hkb7y-s5-9tDduGwEvE6rZSXR9Q7sGdFgcOV4noHP6vbugV7jz9Mzo4D~JofLNIhn0cBmHHijagS~f7zZh04-drxtZRtOiGNb-sfbs-BN5-m48dysHQLoD~zruM8F4GO8lhX9IB5Q09SeK~-WebzcaVtc3jBwAkDWzHd-1zGZ5edJ0e2r2Uhy~v136yFfH9FikNG2HAxy-LDxNtt6DseQPk9uPJUvT~e0DVvqTWYWOi3j5fHji0Wp2K5AIqk4-VEFy2PE342AgTLlNMiDCcSH~Vt93n4S4lIuhXvgB7RF-wg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Success\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.543Z\",\"updated_at\":\"2022-03-07T12:03:58.359Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"K\"},{\"key\":\"ea3af86dfa80f1c89ad9baa91e0bbeecbbe5f105\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2395\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JAb/t3o/fHMkVnc5NryHTHqk/style_thumbnail_84.png?Expires=1650844800&Signature=I9M9dKJJCDoTrendInkUTLJtVpYCdeOwBSceCUTNR87d1kVV~0X-ak6OV6U009gDREOU1eKfwGVIYrrz20E81AtmkBONK7YY8HV46ooq79gSruyI0Gm8sxAweSK-5INtaGpjrI7JcYJA5XvQDTJYSnXjkolW2ghN4oEKZHtPXvnkX7tG9RwoYMTAdYhIn0301vwPLBM1ksgzTM8uzWTnAN4oMoXJiE5lclaRy55d9zDw88kaONEgFMhTaZKN1ILeovJ~TVLM4Bu1wQ0ehj1gHFOVjZGShyhHwlcLAmLKxl-bbhKXWhX7EaJuDfYLWYiqHX0oHnwRXEAdESuGy6vp0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Hover\",\"description\":\"Text color for System items on hover state\",\"created_at\":\"2022-02-25T12:33:22.944Z\",\"updated_at\":\"2022-03-07T12:03:58.337Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"3\"},{\"key\":\"e67fe626e5071c2818058f0e6ae6ccc2c9b1747d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1086\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aoZ/4Nd/u64HJFJvNhekdjoA/style_thumbnail_27.png?Expires=1650844800&Signature=WGJBOfKrdOSnXybpy9KcijR3ogsIE1IZwqyUFsJP~tF3EoIP1Hod0-wcZWBN4WCs9zBCf-fPLY7p1nRBACkV~-2NndFicNpfG6d9VliYyqenAX~bYswH-GQ6xF9xOhzJ7icN6ZLMgQH0ENoaMWKIsa8NlX016L4Fv~rBgsiKGudGRtdNlSlpDr5u-EbUvGjrctnHCKD9ZF9MtH1pz~iqAzfYlqmVJHHPPjJ-tzXIKdnfBSVicdQoboOYtPxlCG338Rp-Bu3ErNYXhDfGxqKXOBt03d1SsAkDQJ~Sd6eVa7mdrBqAo53EBnN2gR~5rmTc0217zOy9vPLSVAr730Irgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.633Z\",\"updated_at\":\"2022-03-07T12:03:58.326Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"G\"},{\"key\":\"4c5472002ee9e9014f25b2cde12bc75530c01f31\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1512\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3Qz/9dX/smjO7mkXOLMaJNfP/style_thumbnail_4.png?Expires=1650844800&Signature=TReTaGNzugxmI7EDWW-Nw6nHT29qDluU1UDiFVKUk48g6W-ZKJn~76UDO~epGOPk7VRbBT7mMxbaTszn9NC~Kjl3k-He2aF5DpT-y2~KH6~JlH8jTvG4esRMVuL9xJNaUcv7DLJw6DlMTvz0ieSIUddkZ1YkzipD0NgvxxaZdvYc-YQI99agsCN8zCDS0Pg2XgfdI2W0ZHTqpFtGteIWPgY5h5bIm32nyXGXOJgm-L6zTCRZhCqbbISv-2t8mIb8yypaALpAjMrZqZTuyv4GRjoQK-yUeqMoRD8jopkZKJmYIJ2tSe8Ss43snb4hs5ZM-CLIDm6eLMZKPc8xFnjzHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.537Z\",\"updated_at\":\"2022-03-07T12:03:57.784Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~?\"},{\"key\":\"48d7c5cb2d4166aa7a3b3cd213463ac51b50a17a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"126:1406\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hmS/EU0/sHxi7Ahe5WlFiCav/style_thumbnail_0.png?Expires=1650844800&Signature=JPPSc~ws8YcaSZa-yQ5bE32sMo6o3Er-lNdgddwlNwZlJmsnDPU24S2qGZpr092geKgSt-YZdtB1R3llFDBmaPpJUUXN1me8h9l8~PNuoa0sE-WuhLkqKpClLn1ZiPGO1xmeQHPW2JdfuBYS-G~4-5U8EGK53ZQzSYS4nUEAbP9PzTOeEVdJR1~1zwd2fL0h-PwtP6nb0GKCDXmkBr-~bh3tDKcEsQlJQ1Jb19L6-TwnEKKotgD3Dys3JDYA4Ws1GHZ7IUFGSgMYgVy8Ex8rRRZ1ggdb9BYD4YhHFyHu1i9JtuHWTYr4g7P~NbXMYcdmQflnhX-HeaVTojUFVYyB2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-01T11:49:51.759Z\",\"updated_at\":\"2022-03-07T12:03:57.768Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~8\"},{\"key\":\"46b1248d1191b41ec368e1199e0cae64e5c2501a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2369\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EEg/KpX/7FPN3gVcgAyyPHTY/style_thumbnail_74.png?Expires=1650844800&Signature=FKJEprPkiOdTlCKt1IbX~KobDWs9KWPkiPr9o17nWsgP-fFZ~C6rNgfaUJsHBUC4mtQWxQWhkI2PWLeGDk91RIz2nM9Sv2tPrtE3dIpDroXGO2c5FHYw6~yCvhr47jafvjdX1Kii7ZT6bYJDYPo-YaCr2tFToG~31GaVRcn~KkK6lMxf~U8pb3yqNnkKhUkSwuALIkla42eOKETlTrDOIZ0viOEkmAeYNtbCq54qA6DIsH~2Uufwmy8tRBcFLJPIsPzKU-EPCGkOBMERzqhaV44OQqIjqmvWVK0Lz76J3Wd4XltnsNBaoujs1sb~Qd4cYFjLiSBV0YKGM9QFj7lTPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background App\",\"description\":\"Application body background\",\"created_at\":\"2022-02-25T12:33:22.893Z\",\"updated_at\":\"2022-03-07T12:03:57.752Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"\\\"\"},{\"key\":\"465d9d7d5ca47d252e7853b4921af17b38d969a2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2397\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/D90/ial/awVXUolf3CnjjB2x/style_thumbnail_110.png?Expires=1650844800&Signature=XchKiOdOKGiaY2bM9wDRKMJUb76TOkzzj0A5TTJ9NF50c88lAkrOJvOBgSf2c9aP1-EGucocgvOBkDAmhGURNO0V8aXkbsgLvM0qdM4FUAtFkVkHcTex6QNjTcwFFv~B0sZoiZY8QxjZlD~BwMiRdrJJyYracnkC8vz4UuSFa0h6PVNWK3en8zTH0XqZcf3ZB6edAWqxnUesLmiCPnRs5tuAaHvuwjv4KbCJ2uctGJMBzb987TX06Wgrz3K44yWtrF0nzY-ofr8KHfvOC-MvjTkjScabOtTT-H2cTpDm2VvcqQLOrttW9TYw9UgByZOMTVRVf-yjyWnGRUwU2rxoxA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected High Contrast\",\"description\":\"Text color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-25T12:33:23.087Z\",\"updated_at\":\"2022-03-07T12:03:57.747Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"5\"},{\"key\":\"4564d9f2d458153b3a2a108a30cd75c43b59d05c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fvq/gIC/hq2HQm8aAH6nYuGc/style_thumbnail_39.png?Expires=1650844800&Signature=gLJka~LMMTcO0CvUln1oS3yDmzHgjMzMlR5p1Ee~p8fJZdqlSPr4cV9UNyt4n88wqtnb8wosJ~y29SR1C9-Y6uP5f7HmxXHlx-mbRlmdwp9N-Qm1397BjTUdWGPxTMixoah23JjBGLhOiL3rePR9tf-BiTEVpf0HtxSubpwm~d0poQggNeQo-mAudq3Ainyil-DpXyWgJXVDycIis6xCnHJQGuQqbxMy3A29M6UgDff2-f1PJ1lKxrdzQV~fnDIpWksnUlH8lvtC4jTbuiSz42KTng7Fx~8yhjMlBuD2XOei5VAfCP~uHCYPoTurzGbXzHJD~rq1rQi0sBi-RmV7DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification Inverted\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.706Z\",\"updated_at\":\"2022-03-07T12:03:57.742Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"d\"},{\"key\":\"43597fdb5c85b7a9218a1d61a51e65341a2bde11\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1485\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Qi8/tAi/6SMtpulbzR8tpsMj/style_thumbnail_83.png?Expires=1650844800&Signature=OsH63cvmgIf7-Hy1haD8BaPt3hdJV0pR68J~p7E6l6Socls~Cd41iQG2P6B78~eK7QuK2kj20dmaVfmcV0zsf43eTlhJRuvgQkAAmzmaQgWxJpJY0w6ZkLwtNmAMD-aD4lkzPT6dgnEINT-v6cJgHVN9NCgeOOyEuF8SCc2hnFOkRjxUI4BkFXKhzcJ7LuJkgEM01sj2H9~ksxe6nriTQkEASbln4tKjnlqL6p~EfU~4WPIHhVUHcdGIA8TVuDw7IPk2LG2vCjdm4IiuJnd7TZ3p~CLZQEhVGQ2LRR6m8U-DivYQ-TjOCtjxtXwgsqzZwOqfFn9jbvxZiynsO~bypg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.939Z\",\"updated_at\":\"2022-03-07T12:03:57.736Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"U\"},{\"key\":\"3fb696c3ec87fb9dd19a3e4f2f3853c7a0d0dd2c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1434\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ECK/BS0/oTCDhLF5YQVIvehh/style_thumbnail_1.png?Expires=1650844800&Signature=QNSWYTIBXpbKe8iOSsbOFvU8bQ3UTrMl9fkCstDiM6PwzvIgBLwoWiSJnx5-JaJ9pY58Z-OH7JaLILUx2-ipoGoHivSmD1Unj-JmVSXubMDmKs-KAqXtMAZxEy4fCIqao4AyTJfEl9HcYDGtZbGiXXJSoBpWaM5IpFMPm5LkB8oVJ0NKBzJWONEjhF6L1ZlMmUrQs~VruRivPg4aS5gddwTW9Y3SrM~Fy63B3SS~T3Gns9K8vc55j0QYhU3PStWQJWUESnlfDU2raPAxlxbHQHOLOszK4MGsjwyyTcbCK6Cvau861kjkjJmaaMHA-tG802wb0JIZIH95SYApjEn25g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.491Z\",\"updated_at\":\"2022-03-07T12:03:57.731Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"P\"},{\"key\":\"397bb6d1b175e4148fb48573e50b85099b37d245\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2376\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zyZ/hME/9i98atReCgj4SKrG/style_thumbnail_104.png?Expires=1650844800&Signature=d3Ae1o2cQLq~k5Iwtu~8AQgUOyQ5t6HkJfaEATj2MxLIFgswUor6SI2Pu1fezmOmdrIWAGtv8hlTt-~k4d11ScaPtjCbLjztWVUq5Pxqv~urwgKAj9eE5s1Q6mwI98-TFNXsU0EFpF0IB~PZkYC59qXC~dUIsXB3NQFuJgMcqSfiaWe1L0Eei55K-92WeCE3qmEcTR7qZeKFtSsNwy95JwwU0CQqHQD0xL7JEPR2GeaZfJN2e~SWQSsLb6j3xlSixvAIzz9oKkDSAbdOtl6223Tvcb4-hs9GthUGHJMVycdXG1rpCd5V6rpAJytmyOmTkKWv6LrLS1cGwB4BgjIL2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected High Contrast\",\"description\":\"Background color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-25T12:33:23.054Z\",\"updated_at\":\"2022-03-07T12:03:57.720Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\")\"},{\"key\":\"290036b6bb2ecf2693d8622f547593442fe567be\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:759\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bHo/eiA/2mfGm5onlqqPwRze/style_thumbnail_0.png?Expires=1650844800&Signature=W8v0aL83twbQ7OmhY2qBOaGtIexEyt7ktJalQd15jGEIyvCh-ROcde3wQyfN9ODaARa3X0QrbRQFozNHFl2aeAAvURUN8z2Fa9m6JCTFUqMDLNWcjG944sYlvqgOIOKdhYyEIGVxHTwgdsSeb6jR~~4fhAyyyZXc~Sgviec4mDEfn~Sz9aTJ2WZ78nIxxL56GYXx4oIQdfxWBjyxqXsr4ZSikhxtzwmKl7F1GlTuGKJ9gPGWRyYHjmHRsfFdR89XPMXXe2K4S-ixy0C5ZaqxXrCF~0p7SIX6kV4Twzm4tBdvTns6Uw6jJrSokaxpO0ptdIUXkfuyBnhIOlGNcxG1~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Link\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.035Z\",\"updated_at\":\"2022-03-07T12:03:57.695Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\">\"},{\"key\":\"28add7d56b9dd29e7214eb8643d6db190f025d13\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jm8/mu4/T89k21t8epAZcLLP/style_thumbnail_2.png?Expires=1650844800&Signature=U6ABgoyCHWaofj26dgFR8WSe2oZyQWUVTMqYaGNjzBqwfw~4qPipIRRRx8bmhmXgqmWr4PTszGZrxVddKWqDoBGgOeY3Z5wxnPACJ-rEWv-t~zdDRcTaWVolHqnppMqE4Fh5zaXOHX0DD4CjEQQzUQnIT6o9J7ecsRNxfEAtydIvntFhGkHGtBDmyEJICO7MpoYm6ajFQM5TcuLqh7nUhqD4oFf016NvFsFTxT0dbGTLbRYXBYelmk0yG0WLLXOQpYOmQFaiZQhqH~BqyMR4FDXVhkM1wSDz7oE~KTVQQmxn9zYK6qP17MGKXZOZ49pL2Nz-1WaIZTp9jBJG9SOalQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Error\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.528Z\",\"updated_at\":\"2022-03-07T12:03:57.684Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~;\"},{\"key\":\"26788e861bf1ee429a671cd0d7b57687e34ce346\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2371\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aZy/KlA/VwYTkKrBktrAag6x/style_thumbnail_109.png?Expires=1650844800&Signature=WJUANPKFBy6UoHo6gbkkJ6qO4qzqMpW58s~FafBuMIV65z2RlOiOEey1vai0O4Z4gRIWaKyKrq5h3iPoltrpu1DR12FGOXZpeKz-0~oYrqW3E9sx8bWXZl4hgv3yIZGwE9zhZBq2frA3mjdAHbhGBWEN9HVPQD36IjECmYlfnYNsccVnkAbDE1EVmH3~jDukVj~GvnqDy2VPDcToRkNuuHKJzLIRKlklhzOD9qWn56e6fL608iabz3~TD~NpN5-OfiQogzvfx6xhTPEaApKzIPBXpd2o6AnDp1bERfyxaMEsglJmY8uS0T6R3tH97Ny05hdKP7Y0MG1ISHT5QlnqGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 2\",\"description\":\"Pop-overs (Dropdown menu, select menu, inline menu)\",\"created_at\":\"2022-02-25T12:33:23.082Z\",\"updated_at\":\"2022-03-07T12:03:57.679Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"$\"},{\"key\":\"24d932eeac6526a9334821a3119e6555f524c7f1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2370\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zYG/q0H/XqUYAXz2reJxaKcU/style_thumbnail_99.png?Expires=1650844800&Signature=ZcyU24wYH465gpw1E3SEhT68-blWiuAuhCMzIdbHGRiuxvHzrVH~xlkXyvD5IG04vZpTGNGXuX~5BMtZwkkmJ3~XXrSURSgrX6I96gUmTM1a6BMeXZQ1IuuhTXsCrnujvvF~yVwTWQe9sj3VRbsz2sNZ1T~zl-jluj8CwLrYzlmP9mhgX1u0zLlHr0qPbQG3h6IL7vyMRoZhweVqQl68nvogOQ9vp-QTB83S9aZiOmFRwgo2fvLzM0cWVc6cdVoR~bjGnXGNEG-cFlk-vm7B4k~iDlBs6fd6ZVKSgkUwf5rqpGOlSKA31h-dYkLeg3Cfagpubv6VxnE7BJJuCz2hqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 1\",\"description\":\"General surface background\",\"created_at\":\"2022-02-25T12:33:23.024Z\",\"updated_at\":\"2022-03-07T12:03:57.673Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"#\"},{\"key\":\"24c63d9a4a58b289417c6415d011041b3fa9e164\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"136:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/XxA/oCb/Q1H3yXZXxwXqxL4D/style_thumbnail_1.png?Expires=1650844800&Signature=ZQqmpz5QQikDPEfb5Ta92qdDOmU9g0lif67LsXVw2SEMVdCqeLeKcxenZKgV2HZuGNii8sbl6YisvYu9UeM13uUfn34m8JSLsu7L6Z3ZznB6aTayptLu4YpRNgEBqH-O6BtwuOk9Rq-9qQNt6u~cteU1zVe3sMpCAfBkDfX9Dq6433hn1GRb8m-GTTvFe~eX0-SFoHdBn3r58iNQBNr7UMLgFMbB5wNMRfaVArW7DwdEVbfytA-n8px0kUQK7muhrwIH14dVS6fpbQAwGhyy~T28rBbAzYoCwh5jurFMiikPTgDaUTKIpdgulWAqCEMYqsJ-vS4IuUo5Kt~DrrSrTQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Foreground On Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:15:41.372Z\",\"updated_at\":\"2022-03-07T12:03:57.668Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~9\"},{\"key\":\"d426bbcc8c94c04f1f91b74507b8aaac59e024d5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1412\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/G0N/BJi/JdPobijUXQpudepR/style_thumbnail_24.png?Expires=1650844800&Signature=VGpF2cz1LBMf1k7BK1Tg2fwUflvZDHq5UfWKlHVZJGycXaNlXMNg0JZnzThNl6U1DS1zXiOUCF486pOaQDeI2QWFfgiosJQDJp3XEJDzvkWlaru-vX0f8u1QXfDazeBZqNQ8X32vhKu54kPGzoBMyS597GkxOU5eFomNrNMbWdi6OBpJBHP5RQG7zfe00StqtWDOtyk4r76eJsYP3r10rLwaaLa5mG3iYJB4y8cFbGUIDg8CoX30cE9L~noYVcz-uCpb6-s5cWTnQ56alt3-nVags6Xvquz16QahjSVBLOF7-Q6mgK1Hwi5JUGtOtqSG4FayyEqTgoM~BTTAGzWokA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.594Z\",\"updated_at\":\"2022-04-07T16:01:47.294Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}{\"},{\"key\":\"ccbfe8c54900bd4238dab48733ceab4e2246d4e5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1315\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JG3/5cT/wTfYEJGXpauE9Z8T/style_thumbnail_31.png?Expires=1650844800&Signature=TiVlB569GK6rt0FqJPGZFfR3mCo1XOPb8pE~yZinz2bmb7kksX0T36t3CN06D~PbbLVcOJDj28oDjqQBi6ibxUDl8y~ILuECaDt2nCcYPhIu774LZnpBmXooM7Udm8DpdXQXnxLTZXrNWG1YGY24V1s-4JOuKqu4ijfqaiD9eslQQE7RNN8-VgmDX4Zk3joo-NC2WMLm~8rey9T-iUSCqOiGlvUrZcTnOCyiqZsWVNVBkojYDonsn0nvQzTKgaCHmz8NX-Dmf0YD0LyVTUujso45dtw5Q9RmYg6kVJy7JYPOFT5XUMSBIxwwQ5yhLTaLF0UmaggZ4C4u8yDlJ39hyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Text On Primary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.667Z\",\"updated_at\":\"2022-04-07T16:01:47.286Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}O\"},{\"key\":\"c4b4f0ae82dd56acd14102aba5cba037fe849733\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1323\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/lIo/PCt/gUza8elc7MnOOyxp/style_thumbnail_4.png?Expires=1650844800&Signature=ftc8xqowXGOg9dyDX8TdzAW-dRvOmv~7xSiKCeWsV9yA55GEMs1~T-thZ5NWPf9nmifjwQaqZY6NMAcd8qAL8F4ea80FRtXglZJVZjlazOk6jTpT1MrbyNaXVhgq0E3e-V25s6VXi27VhP0Zz0PL5A6rajVyhgrWhWhscT69ZDA7uuTBa2LYFgVhSt2Zs~69UgflPAIca~sgk1EKO9XczsUlefLwJKFICKk4eZp97tJ9xwQLLptNOrKziUDFNJcn6sAdZkTBv0GDwe6NM2gDuvF2kIXNr7knYUINyq5kWHmbyOA288Kd15Hg6v8BQQR6GX-Whjb5Yd~NdwfMxB7OCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.674Z\",\"updated_at\":\"2022-04-07T16:01:47.280Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}\"},{\"key\":\"c00fd69d077ca84f084ffd398a10d6b2660cf163\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1312\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hGW/1DT/5ZYN2wLpks25Wmb2/style_thumbnail_35.png?Expires=1650844800&Signature=B1Mqh6w6ogj6IGZ5yVlrZkbE8~4MrK0irH5La4YRX1N6bNaYbTcmHyrCXKhFn10H5t~YfUWCnbtEpNRcfSGKk4PPCwA0zwiQCz~-BmDE-bouz0ztCZs0yPq0xHY5luGvtEEa5TGr4y2uCcWPCrElfp87qc62VedmZaFr6e4NED-8~6WL2P9KBLj5t0YusIvedNyQp5vJfDY3jIqdJYK~ZCYTEDv7Oq9Qr2mtpLPRW5-nAryPJ3WqBnkOQ6~ZMDZEFmKcJrk7Hs8JknuTc5EXdgX1npeCyfKdnVy-odV5oTEBZP81WY-sLnjB1k-HRsDewwaA3X3y7IkPPIyM18PnWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.747Z\",\"updated_at\":\"2022-04-07T16:01:47.274Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN{\"},{\"key\":\"bcd86bf284a03ad183ea1ba56ad05474058ea1af\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1307\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/K5n/isp/Okih9paKLXwHUuii/style_thumbnail_36.png?Expires=1650844800&Signature=gXbxRp18I27EOqD6CxTYrEnzi6Di6VCiw1mfsEqEsssLHD9AlUlQZiQL55hebmAAAcH963u7Saq0Z10MKr15pzIfVNHXcADeuhfbuIe7Jc70f9G~0d69mH9GYkpO371Cey8Xz6Cz80pweFxwl1A01NY7GG~QFhleeNldBGMowbIEqsS1Z~eiQJs0VtP79NsiDe0jb32F~WzGcpYXj8ar1IBvHGKcgDLtFyLsgIRgIyZtNGN-3syxISVcPUruIwXlDPXusz516wV0kvtF8Mq~dtLiCggWDjESXGMRNnf6Qp0kq8fnZkD~vwsBvFX9bOSH-DdOVJ-gUOOvROuIBUwwNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.742Z\",\"updated_at\":\"2022-04-07T16:01:47.267Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN\"},{\"key\":\"bad789d2a0e03e2cc914d9dcb6592f469f63e139\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"30:1309\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TKu/RTq/iP5qEMENRIcDam0y/style_thumbnail_50.png?Expires=1650844800&Signature=Nso1d7eHigwlfcQ0UenQw3Atg5PsbpBjUTizMQmWUUceF8NFIHCcelsIZolAP9jxkFinEQOmFmEHPlDCox9-IloioI4elbLu0--QlnRpatOmf4sospXBeGTagbWek5dsmx9SWRgwALYlPE1mdzAjFhlg3oTTE8Wukl0DJlupk2nv7ryWlbCTvEIdjJw7kNrJCSCnbUd~7Nnl2sclqfwn2NyX-e6oQQCc0jSVJ2S8aBuuAff3c0qvClJdzDFbgJTg2-~NrjRhav~gvQxj4LM5DTfoYzSxZI9nYp3JoZvckQnH~GjIEFWgWSgnfG5sR2dAEYi1ktVQhI5Fd9A2weyh3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.007Z\",\"updated_at\":\"2022-04-07T16:01:47.259Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNf\"},{\"key\":\"b2a48612311e70026985495141ff5f9ed4802ada\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1505\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/XHL/e10/jRf2hIYn0UWJWThk/style_thumbnail_11.png?Expires=1650844800&Signature=F7tauvTqO0dtoPnBvGr2qys9LUC6-W~pv47XV5PIiZcB~T0gXtQizyb~bOQNcG1MPzIX~zYtobJ7EHHANJ3heZi53DtjaDTwlTV3MFrF4uJx7jK1g6OpltuwrsloxbCcgFfKhx9RnKZW7W8JmAIZBJiLM2eX6EKpPVlI4iHBNL5084iCBRyF5kqbX5VPOoD0o078p2RXwKZAvtEvG3fLcwmDRluLmSPkc372r3ePP5n2RLaH1Tjd4H8KkzuhU4DUpk1jvCVUudWJc50xLGUgwSJUqp86w81BwpATragI8-U7ms~GSkOVG53M0DwfLZScjeaf6KsR8wV-47G4uwJTaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Multi Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.532Z\",\"updated_at\":\"2022-04-07T16:01:47.251Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e6O\"},{\"key\":\"1e00321cc9fc05901700e452183dfb6f58c6b892\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:741\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/RCb/c8Y/TFAhk5whZVprtldx/style_thumbnail_58.png?Expires=1650844800&Signature=K8ZWZBOl0hnZk~TM8NmWeAcUZ6ZW9ELEOCW7OFOHDiOJyiA9PVABXm-KXw7GfJ1rw4iQsXR5IGAJNYILtUv53bZYmzKi7Zhni56ZyP5durN1EOCvcmyHGZog-kwtWAeWL~DCv~2gAlmL5-NaWPZd3i-vnVKppu55eZ1E3yoXx6QeH6Gw24jUYBAlb1f~U2Pag-Dop-fHZf4teGn3rRZ8Pjq1t88Zb9~YCnv5-yeXywkVdALmTCmmf6DY8wIDdV5wz2wswAivtrJ2A6wEtt-Ka9A~LQr~cR-~g74vDnZC5UCvpcFbF~Jg9oFzX5CRW3yRHyBizJR~yxG2r5pyfcsIkA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Disabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.802Z\",\"updated_at\":\"2022-03-07T12:03:57.653Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"9\"},{\"key\":\"1b02d1cb62de8733e3107dce1f7bf54893b7b4eb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:789\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/8SJ/wDz/dCZQZ1mcrMfwEmEz/style_thumbnail_80.png?Expires=1650844800&Signature=fThq2laNKven1IK4ElTv~9uhTDynmAEchQUId-g6LYXLF44wGQ9~Jb~F25Q3K1x9e1vR6x8YyqQBJUn1MG0ZYAp1lafov6foNBqI7NDAqxqrdheRjop8oSixyklecRZixGz~wMkN9uax5SuwmUMZ-XTyvS-i8jeupz9dD8FxeBBarJafSWzEHf0W4pY5A1LkvR9BvpHmKnmsb5sDc8ZIA82ppRoMIThBc1-dzQRG9hXWF67-Hsx9CRm-m2DSeZOqkVWkOLCfYUuYxuSsYZMLbQRaAmgBOFicFiqX0mFnoWTU6dygxiL7GtPuBbrSCeru~5lzouAcXnfPWfP3bA8~bw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Favorite\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.924Z\",\"updated_at\":\"2022-03-07T12:03:57.648Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"?\"},{\"key\":\"171aa354537a7df429f0a52b596cba8155cf35a8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1431\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/igD/LPW/MhaU3eSWUJatcG16/style_thumbnail_63.png?Expires=1650844800&Signature=WRn5YTVTtb2xwTYmv04-hFWvTLPY7NVaFqZJWiLRbme28CRXIWtHBVJ5feEBUEPCZJC52Jlw2NGIzhxBJKlZ2bfsDwvl4iCqJ7B-QwT5Qd20r5lFxU-By~pNdXSAN8kSzWJ1eYXzsZYO2JWuUrlUjuTt0yyqlPzK0LzXMGYTr3ElpYbXCEMoZ24M3z-cyI7ZYDZ35wzjlreQTbFtVBSFV7v0d97Bznny1JDPQN-wFbcgIkdMQQjA0RvnB7hjwOU37hN1tbQG~R6ul8dL2oSzgZacxHACCUOGzZ7WsHFer7ZkMRLU5niuER10CGz~s86ZVo7zcx2fZvQX1XVlSKZbxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Critical\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.827Z\",\"updated_at\":\"2022-03-07T12:03:57.636Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"M\"},{\"key\":\"0d38e93ffef3aab73a2c3eabcc8b28d600d73d30\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1525\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BFu/Z0j/PWt2LnllQq7CbcH6/style_thumbnail_51.png?Expires=1650844800&Signature=dSCZPGvnQ8h8sJSzId-FgXe0AYf6UfAx2B0aOycYoNW45SEHy0csu61Sa3gozCRQVXFyRl0Rq9~k1sdJipYmE1WtjTNzsEr6jqKaVVyawebh71ftAllFElIgpQMHlJZMJooOXIMC3DVuhkClD~RIJn5vD5rgNZTIIU0wzL4jLfpj842Z0BQU8H0XGmzCI0zQZX2Yym4JYo6G~LXSwP4iXk-mqsdeDpvWoks71KbKcXEOhixlMmRanyzwxArsNdfNt-gnRMeoPlk9MnfHZ6BnfcApKROgX2j5h-4Jbf851zvJA1MAZCvxbn8ImPtaunzewtwQqTbOHdRzSjEcimIdQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.767Z\",\"updated_at\":\"2022-03-07T12:03:57.606Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"c\"},{\"key\":\"055ba18d27bbc736d810f502e4be9030b754ea99\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1435\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6Tf/DP7/SxHoaOpr9IbLKiau/style_thumbnail_7.png?Expires=1650844800&Signature=g529q5BhI3qjPOF6bMGw8ScbKYK3ecfKzSYEcyU456trC8iOomb5gPoXrGs~5RHK-7OwcPybE1O4K2NmSy5JYdDdR3QvBK0WbI~jdxYC4XBV3PL8MEOesFifb5aMViT3sNGYkLi283OMvnIbCPKPwHRKOfjdCj3ULky9a0S6dtKPeNoos7AqyoQOHC~sxm-jXyxmYVJA7IGHtaiYvKr44PD9HspSgDQRCbIP8Wnm3l1aG-U8q410octyNuP0r-TfjEow303yht9Yikt5q8~tmDX1kmXQZrW7Nrweu-M77ZkPOYi6u~X3dhe4ShCq8hYEw9QLcUlD-U-1zoUxwMo9lQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.523Z\",\"updated_at\":\"2022-03-07T12:03:57.577Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Q\"},{\"key\":\"e1638c602ade488d08d8c6dc5080b264bb45180c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2374\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JiC/VaE/JL9TKDpTTfS5X4gC/style_thumbnail_107.png?Expires=1650844800&Signature=hhmuhMmx6a8Xs2myNrbntzgtAGJrWVN7IIaZ2QFf4ZVGOduoZRdIxVOc6W05W6~aClZWB9l74jZcg2R6fFtJdInsmswlxFZfL3KYP65TnWOj77TY8ae2x6FQ0Vfz2qBigkzff5Jh0fDGtK1SX-l9UFCTol0H6ahe2sAYG~e014Z4RbcySHS0P-0K69yPRorDPXy76fk-JG7kmBIAfdhI6jWndVx-PF~Wht0DvVR2szkz2e1xJ-4J~YkkDUeefNfWGfwBb1~XRAuQXrWoFkPKAFZ8~yYTS1UuNjbVV64gCNb1kDiPMqyT121XAa6LT5KqKACf7mIcdwh9JbzR867snA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Disabled\",\"description\":\"Background color for Disabled items background\",\"created_at\":\"2022-02-25T12:33:23.072Z\",\"updated_at\":\"2022-03-07T12:03:58.295Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\",\"},{\"key\":\"dd296095aecc4bdde4e6c14b3af3b509be52056e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1484\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/alc/tbm/lW85fZ2AWhqppBLj/style_thumbnail_0.png?Expires=1650844800&Signature=buQ~5CLoTQhcA5oh87PFQJC4YKkRaq67HeS-SnwBS~9KKcNg~OUEqTHs92TRqIiocTZ~4A1yX1utCQzGlYIcPVfB9ULNVS9LFC4bNjP0GyzoarEnwLhN2KcG70ScU6Jn4Sa0YW8gJdsoyTlU01QWPSy-tAyvL2SILpKphG38Y6QowtfoK8~r24B9ju-Zynw3jNI3~ntLFNAZPRNPtP5uSuh6ZwBHU39n7NAVORXO1TbDWyUOfagNkxavjBb0wVyUuHBhOkXOPaNZMtV5hdcCVhcxHNygEP7NyMO-va5SxyE2mrboL3GvuBYyBQlJQ7SDMiL5kdHpj4dMbIpYEHygZQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.797Z\",\"updated_at\":\"2022-03-07T12:03:58.276Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"T\"},{\"key\":\"db793ef082f1fa1836a32e8f9bbe74bb9f6e433c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1520\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vNL/IdJ/5G3gIZAae4jffV4O/style_thumbnail_7.png?Expires=1650844800&Signature=hEJATP9bRmoRrnySgSOQRS87GD3SOyeQ6SByjixsii9RA3pgvam1gsSu9r3yelYYIqcjA8oeGcTN8IkL3iSVkauJuXIF0kresQpMZaR3NNB~PU33gVH29Ze0wvzwtBb8dTcI9Ywxs4GOaBrpvS9RQzG5IOn9TpbTSZ-C7Lw3oSrGQ0XqU4SPWFopIHCkZzFqnG44Mgt0Se7RIytRwapw~Pa~7M8quTqHxd2QjeXvKbKjK0v0c8rZpcMX-C7uD1cmr4YXgKC5gmwpEaCaBbPOBuQ8P4W34QF4WYeCgDQ70RRlnlE4EgSJKqOWPMySeXCTI6txNN-QvC~375RTHUGnXA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Announcement\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.077Z\",\"updated_at\":\"2022-03-07T12:03:58.270Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"^\"},{\"key\":\"d1577c6dd974cc1f532e416ffca256df07b3c9d0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2396\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HG6/Dtc/ntXuBUW0IR0GADt6/style_thumbnail_4.png?Expires=1650844800&Signature=Nap0C9KgfyoKwwPQ2CfVdp1hg5MC8PYV4G0Ze~A1MaLgoMm1Jpb~AYIgTE2c6D1WTRAn171OLqgYHVx~ZM4n24G1YEZxCiaTsn~BrQoRK1fuvZhhd918hFuG3AyGsLEgQlX4H8BfEJqV9idzMa6L4-wjqaXLwW3G-iXi8KioFBqCtFizTS3l3KLNfWMCDoDWTv0huuV~b6vZxABlaRElKyyA5qcYpjhFiUAWUbaKmcWopSD7fTmwoHGuRk-QsBz~JfLRRHucl42BFWLHR66Y8ydkqW01rkHbiJT7XPI6EYDQQwbeXhdbXZ5f~KUnB-u2nH8gLVl11hsKzDl7ZDFtWQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected Low Contrast\",\"description\":\"Text color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-25T12:33:22.507Z\",\"updated_at\":\"2022-03-07T12:03:58.234Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"4\"},{\"key\":\"cf6767f66c45888b1e41ba493a433e3273a89d8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1483\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ba3/T8n/QwtNf0y1KFxr665k/style_thumbnail_5.png?Expires=1650844800&Signature=J0Ujzrf9GH~vntpvZ0UrOW3QEKKk44KTJJdzjBX48sJV7XQFOhod5Ff-wcg0kiZJ4FUmMKJHv0T1ArsgLNZCt3~xaZYDHYCvn~c342L5uRi9MN3o79W2Dx69IKC4Yd~8wQWm83AqjSoSAwJsoBr-TPiaSfEMxbnmvUVUNoB1WEdY5cTziO9j6jU1avjZBReyIxrHbpkzfj9Z77MepQ2D20y2sl~dqWQKV6MBAT6zzp741wELgLWuupBl6b9Cqk54njOJOKTk3ASJc87mVS6x8lPRI9Fi6O8r22BN-WXt0jBvwW45DEEq6qbeu8BzC8i1vBMG4DSwJKRWJOiBAUVN-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.887Z\",\"updated_at\":\"2022-03-07T12:03:58.228Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"S\"},{\"key\":\"cef991d8a5ab81f69894865025e98c55a38ca11a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:457\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0Lg/JHc/Xvjs5XjOf0KB6QYg/style_thumbnail_103.png?Expires=1650844800&Signature=hPn8pNUFwU0CaQGtVMrv30SaP9f5jFZzw0o6VeXuL0dhcxo3rnIJEJO0rB-rK~hYKIY77CTF5GH-8YlAwmlqgW8hNqX1l~jjiwUTqBl9f0jaa7bPPzy2JbmOTp1xr8z93IZKSDzX9r8StXQL~ncHCmIgE9-J2cfJB-ZoREDWHE0KB5ONpAZO1AQUoE6MiqJOboQgKFiUTjvzZuRcllEB9bFKc3OYB2Vd6xnbW9omKGbucgfd6VxdwWPqKaKyqWjyOkyZWXUNCC9o~Vyt4fgJtcXiaj3fTw6vJcZhg3w3inI2E15rekhnXq~Uk2ZyhKzSm6S9hZ~msaLwbNPW8t75GA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.047Z\",\"updated_at\":\"2022-03-07T12:03:58.223Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"E\"},{\"key\":\"cb27bf455820278d574503da16a9577b830f5f86\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2375\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PDr/4Tb/dNkjZ9DfgqakEW7V/style_thumbnail_0.png?Expires=1650844800&Signature=C0zqjEZubjjgXDdcxFnPnoazbLoYueQN7UKbTWy5FM9bquJajPEyUrHrizP6LmXQ50LYY8ADc7vOz3RGXMrjJVdnyxN43yoOgZH96gMQuB7oWF9tCqk9v8YXgQm~3PczWMHgEg~Jw5ZCWWKTzwllH0phOEAXwrQiT5noIWj1dkuhZIP7gIZEVXl2TxDYTSXqVtrFyoMEymu4p5y5eA-zwx8pwCwA7P9l1xg5~TO2hTAt2hnBI80DBhpUn1rkhXAkefp722RPdfjuKM0jmqezwc~a5BBKKRuNnQYibjSMHok3bN9z43e5YYdYc5eg9rI962EZHJ2yMkHezzhPmCd6xg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected Low Contrast\",\"description\":\"Background color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-25T12:33:22.584Z\",\"updated_at\":\"2022-03-07T12:03:58.212Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"(\"},{\"key\":\"c551939b9ebbddc410173b4f09b2d6b0bc214962\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"20:527\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J1E/uIb/MsdfTb0rriFXVONQ/style_thumbnail_51.png?Expires=1650844800&Signature=EzhBLmylOSW1RUH7u3pM4b93qz6vIh2MIGyid3zez2qHU10kMqgkdQzDGAU~5EqQFupXKNCZhHq4Bgn5wlgbHAHHKot4atOp~sEYv0jQYbAMLKUxICB7kojHwdk0Qz~QY2VwiviDyb2swU~QYGGymLD3y422yup9tuETOiNPXe~7QB7jP6Yn2eiuen3bOXrlNsrnYsrWVKE4679Xa6YxaJFf4U0H-wSQeiAoPxH2i~GQZyHik0nh5wadfPggiDD-hximb~Ve6li~4zaT~WuL4AGv7hVWmDSDARrTc86AN0~CGBA1Q3B63v1GVt36z~VBW7qjrJ-WisCRuBDS7u6s8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.012Z\",\"updated_at\":\"2022-03-07T12:03:58.207Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"B\"},{\"key\":\"c53592be88467964579e37b727ef47a4fb6b115c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1436\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Sqk/r8w/oFkoks1wTBPq1HpZ/style_thumbnail_59.png?Expires=1650844800&Signature=IU88SDATToyglnZExil038y2jIfgrZe0iW5mVtYNFiedrzx3VtG8ouTbPGGetlSTvk4mwIL4FcYZWfDtm498bfnvvjUb8mMhCu7yFA2RTDNHXXgpO1a~~uhfdp7Y6BhWQfsz6T7pZO0Mml~6su4MwW-uLaeBHS2uq01GAobi8E8x3oEG4rz4NEiu6WhRi6sv1o5B-Rs5NX~HzesbdvykU8QeKX-vu6aMqEHXDk3PwBkuJGaQgiyqY9~S3sRk~GEJ8FuCFRv0FFMTMsYgpz8YqdAi-Aw5H2ywHLMjSvO20qtFxY5mP--ekdgl~88cGlNiVFDSlaH613xNFlFMMeZ28g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.807Z\",\"updated_at\":\"2022-03-07T12:03:58.202Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"R\"},{\"key\":\"bea4623dc162779967304c555bd75109890a5f15\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"21:454\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ARi/zXP/8LCLom5HocyIjW0X/style_thumbnail_113.png?Expires=1650844800&Signature=ff8tGCmad3RCQTG5RwXu6bCBMcjE9J55Zzgj8ruYn7c5p5b1nEQ3sU0CAXath8UqpD48MqEPAK4R17GmJFL0C3~vT-0bc9qJCtlXrLQiBEc~~IxWF3DFMLwi3ZQSd4suSkigXCqQl0-2bTUmoxcZypR345X-uY06YL3aFM7Y-4JzaCTz~Owislaa9y9x3K-vsDE3qsrgrRk6G4z2OkDtqyuM1CIUdKAm8cDgqfhIlwlmSAvLdaQqRvTWlBQRR5kf4ruWzJhSs0DgX2csc93bDxR2zk-4sUj4kyvwT41GqCqNekVuv7sChO3WlzgFZV6YnkjAVy~u1upagXhftdHHTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Foreground On Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.101Z\",\"updated_at\":\"2022-03-07T12:03:58.164Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"D\"},{\"key\":\"bc570b6f33e00d9ef7df42a829bb6f9799bd08db\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1486\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yJ6/nrN/Rpi8SgLS2eotSZ1f/style_thumbnail_93.png?Expires=1650844800&Signature=CDfXyjI5XXuz5izx~iRvHKZwNbZ0xHCyQEyeyy-08aWgJGMQGG6MFtBVHLY3UoTJ~YMG~qvMx5emNC8ExCwgsYu3iKL9jg96NfBFruwOmXJ7i~-4BEGnveDvWNWCvNisk8XC-rEMMkCxE8nfmcTa3-b8PCrso-Cl20BgLrtrdQF~-ittBBBRPofrtJlfsd05o-2gway60veTm48ozE4zkkP9oraFru4zKMiFyxf7r4rbuGWVwdKbnlV9mHDto9gRK-rwPsUmFJKfWeV59XQL-7VNLlNPNIJcPSRHBhqesqkMexUElRXzOAZlx3dCFqWnEj3~~9dGrMNKss9YtKZfdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.992Z\",\"updated_at\":\"2022-03-07T12:03:58.153Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"V\"},{\"key\":\"ba9758f41653205459c7b99e2e4aeb2f31755331\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1430\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2jt/RN9/Sp8KHt1jd78ysz7a/style_thumbnail_64.png?Expires=1650844800&Signature=dMxAeSwBP46LJWbV7V8iK4GcDQT7t6D-U~ve83GiyElufkT10FmkHeFwequuEZl6XvolLW1J9yLgzk4nV2GqE2rjlslv5Itnxj-f4hyHb6cktz-tqGYNcwUMlDuxoxDM6RnmGSVXZ5dgQb7faZ2ZjdAYL5PG~9dbEJHdXiKQDuDb-YMZtRjKwzN~sr73KBtz3BYz3eymkJ0USXFwgQWlIiZIj-Zm~e0LTyotc0ptfH5jo5HIXXbrT4I0ic8J2qCeSIaZk~XV-9vI1VNpnkrZjKg6qfSqwKIWFx~LdsVSX4oHNEhzn1qMduSvykBt8uOGl25bdgkK3wfXrxYc0RE7yg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Warning\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.834Z\",\"updated_at\":\"2022-03-07T12:03:58.141Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"L\"},{\"key\":\"b5cd13e28cd4200dda7d02b8494861e466978dd5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2384\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jcK/qd1/PRXf5ebUjYiS6siI/style_thumbnail_23.png?Expires=1650844800&Signature=I-HIC-xY~V1rU1vqJB58UiX~NA1fGnAdZlxKn6sz1WKCRotAftTBKyySg0GwDcQRydLUcrB~Bn3SGhTpG~kBFhGRiXCqi6kpT68lR~l3oSReDN3isHXavxly7dpQxdj9r55yc1XzTgGJEZJ0mkUWJP-LBMM4u9~2RFORotDbYjFayY-QL036sD5GwOdL0f4w6l1ntooebUtu~kLPky0nRLIV0fgSymt5mGKHo-T2Pb~Qn~wcJG2y9HlHKsUONcU5v5oMCnOOK3P4B7YFywgGXunk0d2nl6dYdre3NegEsUfV5JBFX-owcrNEvFhNfFYeWfGGjulGpeKRmLNfWDIjfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Disabled\",\"description\":\"Text and icon color for Disabled elements\",\"created_at\":\"2022-02-25T12:33:22.606Z\",\"updated_at\":\"2022-03-07T12:03:58.131Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"2\"},{\"key\":\"b44d68edc095dc41acaea60028bc1ef76eca58dc\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1514\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uiX/Tn5/xee425VzxlmqPIcl/style_thumbnail_72.png?Expires=1650844800&Signature=H91ujFVYWEDYd~M5e4-6taa0ElwaDvoGJxVMbeh~R5Acu~gmk3RO8YxYxzzoCNQFAQ7hU~WD4eGBRfUNP4-wyAFp9gb8u-5tVJiWYCs3iK0yHvUwMaYBpEA50je1voOMgRBxbf45BbJMPUtGEZuUobjmGAtEXU3DwTSMHRy0UKbwovWfZMz~gZItkkWP0UTm-5zyWs1h751SZHB9yWYY5CepkT0srK4FvtQs3QE7lFx28Hqe5qYEBYQn2jFNPDRZnFG4IS4cYeopVyUp4PGY2foi82GKP3xkifi73L3lUbECUWpL0pgnjBbmWCXUG7bxONRVHfuMjWp-0zGsL3SQ6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Operational\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.881Z\",\"updated_at\":\"2022-03-07T12:03:58.125Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"X\"},{\"key\":\"b021a4e2fbe5872cabc2af3a8d0b523572483698\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1085\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cTQ/ka5/mYkfq3A3JQOTfaKR/style_thumbnail_71.png?Expires=1650844800&Signature=Z3s3OVUHy2o9Vxy7nV~i1YuPHRSAahTZpC2rdOinxmvSAzjDp4LXS2aGi3L~TgK1thx5Dt2L~Nz7-BFPcxMpqX7KdGmF~D2rZNPOIZYO0ZmhKbR6ixO22IxIJfGTbfBYX9qKpH8q-tFKhIeep-9C13V9xKEW2mtZ-NZry7YQrCsNdsgJcWCp73rKABnRokG-140yDtZ2dwryGUsA6ZMLCQnUPQMYJAdymJAvfhwmw3bcXE9wl0HIHAWF7yZI6a847rCvMhBbr0qXpUBz5QTM~Tl8TuhRYZOiXC-0dhZl7lfXA8ZChaQ2WbzbdrznEBffErPyPADjFzXf8mQxUxshQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.875Z\",\"updated_at\":\"2022-03-07T12:03:58.110Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"F\"},{\"key\":\"ac0cce503094fc7f8764978d28c95f0580ef5f8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2380\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4Dw/WWM/G90OoQJg8fif6jjG/style_thumbnail_0.png?Expires=1650844800&Signature=KiwSoGYIxSlKgIN4yR86-yNdpf7EalunBWNYaEoLAInrUFk4y-4F18bls~S1FHh-x0PJq8NIKK3uqJTsoI33tDpvZ4UTea8Yj3fgrGxdxbQ4xuyk~47BHUC7KtgM1cLqthvOwNxkR46mTI9yoqUSq6omb6H63YFmSn-0DorTpNGyBAnBTcbNOt7H1W0r~JosDZo6iJKJD-TDJ7DDu4NcIlcqTVBSvYgmKhnidnprDUVOx7~xBcfHrWe5Pby3DgVozR~lpxg9zeEyA5ZECct2vDgsaNeopoVJPlCqXK43xkHNvpfjqhxcXWn6t6lneHb9G~lYw756E9-CuqLIMT5nsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary Inverted\",\"description\":\"Inverted Primary text and icon color\",\"created_at\":\"2022-02-25T12:33:23.116Z\",\"updated_at\":\"2022-03-07T12:03:58.083Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\".\"},{\"key\":\"ab4389dd8ed997e70667bf1e90f6db750385a877\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Cfg/X6z/kQgqFwGnUVnxsxEV/style_thumbnail_5.png?Expires=1650844800&Signature=TdnEGrsykuRpEp7peMA6n9k75vA7wYh57jjKou6KSlmISK4prwD9sV9Alnx4LYNhjGIQq12esK14W8kbgicBIvVdSpCs2B1C7jIZI6qWGbzW1pIoU33kBniADGrmdR8odEY8iOz4hJwTwL5K~VrBGT05Gk6gjzce1SqyBoYMAi98LpJpgQQae4g31FEgVwg1uMsaoVn7R2Q9V9cOvN8~d0ChTpG9N5NVNns1-rpAB0U3dnytTlEWd80oDUQBCPTmqPySwLc-nkdtJ~OpYfcbLPxp9xoInQk4n5FaGLcuRusyaOPDfjIvTf-B9HMpw54QwrcE7oAQ7XhkcnxZCqGivQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Hover\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.541Z\",\"updated_at\":\"2022-03-07T12:03:58.078Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"BO\"},{\"key\":\"a96fdb3b74e2c5ee64ca7a24a97529dcff020a01\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2373\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Icy/1xa/DKhmvmHhfJmupwUN/style_thumbnail_78.png?Expires=1650844800&Signature=EP1vio3mL-iod54RJ~6wa6hNpEX6J0waSG70Giqw6EZVxRxLg7fnQtLNHB2C3AK9alJBMa74TrKDoqb7YyZwN-77xC6S7fcjzPg0yzKS0613k7xhQpDl1NJPcXIhglqF8djWzYwYIDcXEZ5FUFE-G~uxYyPUVsTBPqsslo9CiWCBr2NOyMRuqUxoE8QaznkLEGUjIs7aeAR0Ji~7X4itpQtsDrxpaZcgKgUa8FQrMT0RURjVjBMMKkW64oL5iXOdLggo7YVIfhZajxwYOzlQYbiMHHu8kkFNW7b1-EtM0fDpylOXa652zP-2ui4aSPVOwdaFr4yPcYa9W3EpHsWpLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Hover\",\"description\":\"Background color for System items on hover state\",\"created_at\":\"2022-02-25T12:33:22.913Z\",\"updated_at\":\"2022-03-07T12:03:58.047Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"&\"},{\"key\":\"a96ef43958dcea881346ef078a56169d988ba943\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0jG/eXQ/vEtmQdfd2OpgIhkA/style_thumbnail_52.png?Expires=1650844800&Signature=I4jHmwmv9wV0tuqIrMrXmfnlW5-U0-x80em5j1izgAQ5SUJK26N8WYSCAP3avq1wKt2ZZIhxt-bZ-sjK~7eVj8IVz03Hg~up4B21S4mgKYHB80N1IdpIuPSPvJ2e-98491Q~IUZbfInHo8TDG~~AhIhO1KPOKfw8w-8sEme0rLUjcN7MRkEArTyOEnppms0tT-HxgOtJlu4mhT7EWzB0ks8wuyxDAJ0yVeoEuZZ1ana695BgufZVjkK9MsUG4zVIMLeTkXU4SEKgK8i59p~1KmyyNeuAq6GaVRW7JMMzVl158DOV6UGgieNdu7mVq9Qyc7rNntTq-MPpq0cTbIUlHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.545Z\",\"updated_at\":\"2022-03-07T12:03:58.042Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~<\"},{\"key\":\"9738804be910310373d47e2d8f7d4a721a334b5a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/REj/Xmc/rG11qv1gmzOeIXKq/style_thumbnail_7.png?Expires=1650844800&Signature=YFaEpZiL8Zwb2J5pvKterVcAyYMgKiryMmKfBWsCDPjqfZOY7uTHtXdr-PGoUT3rK9jAiw4BmBjeE5aYCemSz7KlHyWyAiLDhC83DlZFqM7KTRtlXOCUN2r110x1bkLSmqvBiwHYwnoWLgnzMfQOJUEi~lMU5FIZwtJ9vIoP43JTM4akA8uP0MrLjKlPQaVjrgw8cJ40gfodOJGcBhg~Vl-eT0tKkMmoG-fSCeKQCMcHGd3tctZlhv-~IbOT0HkR9zerTPmXF-xUkugHbdIuQumrcmfckfWZFmJC17iQjHP2zBdi8OKaE01~qm-vL-XaYkH5~2dxFpvi9y6zSD7-gg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.550Z\",\"updated_at\":\"2022-03-07T12:03:57.989Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~@\"},{\"key\":\"96513e1fc0df9ce1cd4aec773a58d733b2110754\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:752\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/h6B/EYK/oMA4XtP7WYEikRaL/style_thumbnail_67.png?Expires=1650844800&Signature=hDUFjeEc55e7PufgnaIbOFsH2q5IJdIhThBZ3rYz4cUtfP5UprDutEKlNdhM5O5tub0AIAT7okjwcR69d1WQxnYP~Ehj~mObf3HemBjgjyrbNIrJ1fqnh7OlaqxP2GQ4T~hrjdCnUtKSRkjErxtBhjeCwQHKMiiDVSyQY~JQW0bAVjkkZ-TgRr-Y~l5O~Rnird1O-iPmo-zyWVxwGJ4RVuPLZ5SWqic4Re8YvMcRO9dl5ZSRCi77NMCEtSmPyFOcWuTNxifofgYhk-OwrMPY3e0qYA0-~Bl78MVwbSn3Nw314kc3JJ8ZKBr~cnkHy-1s8Xw79oTVyjkAxrFEsUsnRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Secondary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.852Z\",\"updated_at\":\"2022-03-07T12:03:57.984Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"<\"},{\"key\":\"94da8df461ec560a2386b1efb90479311f97323c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2379\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VqQ/xpe/JbdtgrAEEbh7ADCG/style_thumbnail_92.png?Expires=1650844800&Signature=CTTymAeq~Em79ZHO51-nypoDOT8RaglcnF0OqqG201lmIvuMkXVrKPNbqoUMJ2wf4o3r~FbALQClrcjz-xG6w~e0oG5mqXnvMYV8b13k1OqsqeDkEVWv4B14jCuMhjtumNdiuCeNRuXfxh4zblrXNLKjtQbctqACxj10FeEKzpfBA4pISGiy9pHCJ1EiGnYwmTF3eEagNEVJIRa9WGuOHCfNFjeSdTBWwZMehriyyRrmY2zulhefGURtbNK5DQrbYDhi9hsu35pjemzvW4O~DZo70HRCfSwmRlaV5iCYAWHLNNCHhGHyejSeZ6XFU2btk9e71Xute-r6T~BLS-F5fw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary\",\"description\":\"Primary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.987Z\",\"updated_at\":\"2022-03-07T12:03:57.979Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"-\"},{\"key\":\"91347a02c61377cc909fedae52cf7f782e31b597\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:751\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/UiV/Rdg/OEuKxhHI9QvjMWNn/style_thumbnail_17.png?Expires=1650844800&Signature=b-uUe4nvJLsQ4787RmlklE6t8O05FWeEKkOdaT7nb6mSVCu1HtD6-VaJqUqpi8l-KEsmxCPq-a9w0rBBjh4U~ziIc2jcymagETEoZscTVOl7UEIK~ckiF3pcJjDYvL1RYCVQvMG9AysR3oIOYBnb6TtEuoypCzW58T3pOPGIxiUtFIDsSzpN9K665cBuYI4LppyEYTeGFGS6gLKYz59C42wwNd2RrvuMrYUgQ1fXv5C09trZ4zICzS7S5mRZuD4WR~yy2Y9hjsAyfk0~Rxaa73JiOEzrRw3UP69UdK89pxe1-77Z2ZWpvAIlAuGEJTe9cfK5u2Se6hIXZZ7fQcvlNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Primary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.574Z\",\"updated_at\":\"2022-03-07T12:03:57.968Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\";\"},{\"key\":\"9064590235fcda44a9cfe972f297b2f4edf31fe9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:740\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NIk/P5w/tEm5i3J9RbKRZqpg/style_thumbnail_75.png?Expires=1650844800&Signature=IkYDUGyxZhtzbWXb3w0nANfLkWVxXW-9nQKcwCBQskc5wYVeCB8vPII8TJDmGPWUI1K1-OvcJRU8JVdH7ysLh~z~Ku6RycuaTh2~Z08r6RiqBzlevU26X0oZxSiPbLKA4F8DthJq-9BYmTZR4ZU0JjTbG2FzjbwflbN-Qt3Q3jsI2aR4HoHG5ZZg0-eRf4g3Fa5d32tKq4ax2QGb~YkolHowBarW-wmMUUphDBIGMlBwDKU6cfU4YIp6JeIm1FURHHQU-G2VIIXj7iWU9IXw-z9imROj8m1A8GIWXKC5nEBLmKqoCtk7CYR69DGCqjw2jOO1X9LFRZ38KXaZ96I6QA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Strong\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.898Z\",\"updated_at\":\"2022-03-07T12:03:57.963Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"8\"},{\"key\":\"8da708dc1659d01dc2dc3d41862b5aa5b06a5d18\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1517\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JZx/n7k/wJaBnInh7Ob62Uiz/style_thumbnail_115.png?Expires=1650844800&Signature=CGMLXhxWS9lYAOQRUuMK9MUB15b-kbSzdRmzzent6sn0HTv6UbNlg9LIRoTJMoKb-f6B-A2o7qZ5qirxX0PNJWAXLFBaY0Aq60P-OUKYa9Zow3hCPrmOlhoho53KnA8iios4-qKHa7toOPmc~yKkMzQe-0I9Mqhv5lAE4dVq3rDBE2r~oc9LiscoFDdEUXIjDvmYXfoyu997gfCQJ1zHMMbcRz7~M1hA3GDm6dO-I7kc~veYG2gnqRyWZ26x0VQoS6D0E2NyMhPWtqV2mlrz5q5dsKr77XROCx1ZzucEibhSAgEliFAqh~i~oA9ajQZh-49NlHKwi97Adi-aVDIFMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unavailable\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.111Z\",\"updated_at\":\"2022-03-07T12:03:57.953Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"[\"},{\"key\":\"8bcfd6a224214596af4c11357b260e57bc187571\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1087\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kxo/Kvo/nz2RMI7YajCdrf6o/style_thumbnail_69.png?Expires=1650844800&Signature=UTkRO9tV3HWOWN4Orm3P7GzY7vxJ-~7ytpag~30bDYPk5alzihx0yH8SfiwuR7kLO5BPcplNtUgQISZA-SRGr0OhpK0fuLJ~VIrfy2dIgNSChCnfI1S~JUZz3u9cY6AuudjmXoGzY6NAHRhMoTJmz1M8NvxxzjOUGZrcBuKHiXGfX5XXEZ3zNe5AhA0h3zz7Z8NxEknjb0qXhcFj24ybq0J9bI9cH-Bi8w7jjH6Kxy6K5lJYsu29MoRkD5gF2kuXT3C9jqDRbl5-huRIQPxn3lTjj-l9rnOTtyxTSpZfWPoU~segFylz4ayY53o48MRH5I~k1VtcvoiRUSjbOf~R9Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Text On Filter\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.863Z\",\"updated_at\":\"2022-03-07T12:03:57.947Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"H\"},{\"key\":\"85f60944851eda177c740eeabe4c8921add5c221\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EFl/G6p/3S4I4DMHoSDTWoqc/style_thumbnail_76.png?Expires=1650844800&Signature=M9KL72IVXMXu3Kp2bMijBFUIv29um3b4HJTKdTAtta~ekl48KV~ZlSWYDjGd~HtMqq~q9c2P8lMKlZLUCNKFpdOgDw2d9PwFtex8PT7hv8zCSI51EIX0Xpw5HooF4JgtIxDMBxmh9mDzrHzTmD4URkp8Enf4NC-LJXgdwDXXMBMBG20U9q0w06ZV2aQKtVR-iFz5yUKjN90-99v5Muwh8Wx5Tt5U1VZShpngm3uzIkY4mAJbnTGDKYF8Vs9qmJVV97tPZh3gkPJp6wdt3r7en2KlunShgZcU30Qx5A8QRVNOIovNC3aljtePHXwpJI7qzN5fsEvDzYRAAamORLiBIg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unknown\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.903Z\",\"updated_at\":\"2022-03-07T12:03:57.931Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"\\\\\"},{\"key\":\"80fe13d6142b2d4c0422980f5492657edc2dd4db\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1519\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/S7N/RJp/1FBYqcQmJoYCKEfb/style_thumbnail_6.png?Expires=1650844800&Signature=DnVgFKS6fNQWJr0dYRDuaP-FHWGsW8tFi1YzPkNQIZQV-g~yOrKt-gxd24vSdSHzOgisHGqr6zzI5proN5vm4rnLvAPhXSB~WdfZVSWGuaqU7nF3fgES5YtE1zyz9YzJ6I2rdRvcXqTuEXih5zk8gVyd17jDBUWGOR2bzSkEWTlSyQaMn0QMOwuecc2-p8o1xjE7i0Fb7APFC~ukQuASwrdK7cSEFPx7IPE7550xIaIlDiefqi~ghYuXUKxPWmxyg6e3lsZlp-VZy9m~Gg8pO4vAbn8cVhiUe9JpyF0J1W4KIei~21hyToTNDuAXrE0ti01ULWxd1mcO2rHJLDkNuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Info\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.018Z\",\"updated_at\":\"2022-03-07T12:03:57.916Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"]\"},{\"key\":\"7f4515ddb452db28ea9605e1eee249bcd520267b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"21:448\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/DjS/Fko/EdKUZNJzBc6NjBun/style_thumbnail_79.png?Expires=1650844800&Signature=TI-Mbo9KXFdlY0OwgQdf7F2qxUBt44EoWBz5Nx6SLSKJJ4zYS3ws9kTGsgqzejaTTT2GRDa6I5a0vNfKiEN1LGL47KmR-1eCymtnSOIhVEIUNR6j5JfZK5pDNKUHih-q-YsQ8cN32WkEMJ0gfgj3t6OXM2BA8Qsc05rOu7q-6SSrCzvE6L64HbLJLJnrqO98edpj9H-QpuUA9A0pAFLgMklm3H9qGkwT0s8IYl793H~2MpXRijoGSFBpWxYP1V2SBQfCj2GxVtrXW9QWDGAWc3zY2wMj~rAT5KO3bHeqFE8oTjH4XyTfmEuqfwdfAzi1-yZKroiLj4VjBC6c9m7XQQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.918Z\",\"updated_at\":\"2022-03-07T12:03:57.911Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"C\"},{\"key\":\"7d6a927a6da62a37e7e61af4b5984da90fbadc11\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1524\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NPH/oAi/SfSnU23cBbHv18Px/style_thumbnail_0.png?Expires=1650844800&Signature=cUnOT66-O0AczCDtE5uGo8iY3BiQM9s0BiQ1v0kECFl9WloV3WAoUWIYi4R~HmVevKweOK5pIB9FJ0wVcJru72rBPxUpDiPCXac-R8K5BlqO9ncgDH-5mXLuUzbSbVkvMicUsv9likxOrUcNzrbRe-gFZ1mvcTSXtoyKPKcsuMgWXrXZ1oQwy7UiHLUNlQDPlhif4fY8wx0ahucWiy-gXnfogYn8SA0pXeLl8hueZQq5PgxrRdHwOI~XV7a8do-Opw-gf89HRCTzjkj5exBdsl5zdOKOekPpHfgQRr-0brBp3kAAVRgjg~Q2KQPmQnUmgXqPmgKVbolvgKMKxwLWVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Neutral\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.772Z\",\"updated_at\":\"2022-03-07T12:03:57.906Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"b\"},{\"key\":\"772668fc8be854ff2701d0171548e0642ef118bb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"136:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fdr/FzQ/19z4MRvKAN3HU95M/style_thumbnail_2.png?Expires=1650844800&Signature=Rw19j2lJq~xw0n2TH~XMe7ykxtrA5k2uBvei77U9Vd5bZzZhkIG7x6ULPp9fDwdekBgGz3sRsZLzsFwlzAy6rSJGUapZ53w9UGSj6tDvLwOXGcIwRKeu7JSHbdEPWJKH40neoEXJw0Pe3zlsRMff9oQmrX5xs-KaL-udDiVDdwO3FZEks~ri~cmawz0jqsON5YqvHoFmes4S03ZRQTeHfJf3x1~HGFwCCNeYe~LmabcIOugqmQ5PLsP7cQr5vlbgNOvDfrGgJ3ep0QZ38GkUkCOaN9CTiDZpnyGHJ2IAvZLRn-AU8OE9DCxXSydJTTlmef1J1eq9UoWyda-G5711rg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Accent\",\"description\":\"\",\"created_at\":\"2022-03-04T10:15:41.379Z\",\"updated_at\":\"2022-03-07T12:03:57.901Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~:\"},{\"key\":\"72cbccbba2add3eb4c511d140032de17a4c3a75f\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:753\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/sDs/rW7/AxHjoCSzlYJEnrXV/style_thumbnail_15.png?Expires=1650844800&Signature=NjWFtp3wMC0sln8svvOG2GkXHiB99EyrkWfoaqTU0OAxZ6HcIwnQhgpepaVmtIB2CcnXJOtkrfSy38tmyJUe~rU9I2MGchK~1XlXmvL2gA9CuyiXe1E9h6NiCJzvQtgNgOH6K4gh3H2QAcy2NoHy9mMEYzTJoXMzDXHnB1lae8InvOuySBS6HQAZiCfUvPecwa~m1f6JLM4DwiniQB9uRXHn-PE4fKdyrZ3IpSl5UArF2sHaWuJ6tp1WhlZisIi11CIrVPDTa4hR2e0uHPa4XsG~ZeNbV9kRGRj~jPvDTpckz59uKHybtUbu-P9r6dVVuWMJydCxO004JG3pMn09tQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.971Z\",\"updated_at\":\"2022-03-10T15:13:44.515Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/ec882934-30ec-4dfb-862d-e76c7de5d02e\"},\"sort_position\":\"=\"},{\"key\":\"6811c9a456f6ce8b5b7c4551d1c4e1be9fdefb7a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:750\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/p6l/euT/Ures2wRCd7btHlNq/style_thumbnail_0.png?Expires=1650844800&Signature=HQQKqF2B2KllB14GqZ0HJ3b3kJKVNYNQFMNirCmDSZt8zEmyzow5WW4irk8qTOTdTDtG0-LfrHXIYOG6byhmrkwkKhGVsow9NjlVO7DrZjthJWf7S~mLgd7WSgEVxs6bWGtPDeao5ynjacmqkAAlYwIT86iahh4U096SPd6HR-SuhBNxmNeaM2uRzQ8EJsUGEqDMpumPUIy2WiUdsU~y0VC2IJbvZBWsi28tFbJw0o4JtK9Aec8KiMEnWzM9GrSqx7hh4uEKeZOy5vqGZi2uTMBalkCA9tovg5QyueqwIvrd6Xoon3yqtFSh6jaCSRYwbuYk5alynSueh3C3QccUpg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.538Z\",\"updated_at\":\"2022-03-07T12:03:57.858Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\":\"},{\"key\":\"4fb63920dc8acc078ccd3f3a339d5fc2eea85b8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1515\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1bk/R6z/sFRaqnxLs2ZYrty5/style_thumbnail_53.png?Expires=1650844800&Signature=YBaZv473Lpijfg9Vwye7jdbAM3cFH4TtaLj~VsMNVOZqutfFBXBURkLH1HvEu7BAQnQXx4EuxXVftrSSz0NqJ~XJ5CpyDpo75rL78F83b1sb2XSlqNdMdZvIN~kGt-RkDz1BYVYjpneOYtpwxfAf5g0ctG1yZ9SS~Iy3JxMqgB0dYzQ9mYLCUK6PSxjpu94RYEd6T3ZvGtaFY0mSrEiqqRz8eUvY28ZinVk3HiK3sWrLc8tjeCmPkZ31Na90LFqGoNMMQ-Elq1mVMRpm4ISdtBdSvJEKIypdb0bjSkoB~3W57Ie64aqgEXzIQoN728aCmZ6hwMiI0j9P9q7I3pp1uQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Degraded\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.777Z\",\"updated_at\":\"2022-03-07T12:03:57.802Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Y\"}]},\"i18n\":null}");

/***/ }),

/***/ "./data/light-mode.json":
/*!******************************!*\
  !*** ./data/light-mode.json ***!
  \******************************/
/*! exports provided: error, status, meta, i18n, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"error\":false,\"status\":200,\"meta\":{\"styles\":[{\"key\":\"df8c317c9659f437f56a1a0558ce6130c5002ac0\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"61:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0E2/3GM/xFtN79QIYhs9UvJg/style_thumbnail_52.png?Expires=1650844800&Signature=NHVDGko25mvrts4qSFrxowZsiR9YSTM3gj7TColvUFCC71bn2hkajA9fXIbB3Q-NvKOjp6a7KmockdXPajT5LmkGn1CDhnoCfErgM-RuhIuXMlr9sbElJBRt6x8yevHbep8OxQQSNfoipDvGl8hROf-cs4tLDosxXmeZIpEtuSL6W6XuRBf1evzarRBCI3q2yZZyGU0N7pxS8Ey402f-rgF8bjnjZIShu90g25IKptLc74~WX4UAtbed2hoD36LwFVJg282kbeHLOiJoqkbFthX51I7I49VECN11dMPLt7OfQOs8HGPYw-a5h9af6d5KjOUT5vv2nE4pL3UxSPoTNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Text On Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:31:34.758Z\",\"updated_at\":\"2022-04-07T16:01:58.562Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}O\"},{\"key\":\"da8463f843751c8307206c40b3d6473c28435e4a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QIE/7Hn/1qwk3OF9X1esUF7g/style_thumbnail_25.png?Expires=1650844800&Signature=fiRbbrm1fBgZ7UJuctF1ruNsc7Z70m~JwCPwKiO2CD-8ZNc8ovSMTtN4qta~U7Mo~s1Em13WtZ36nRJepaXnhifa2vHpBuYLHtx7EEbdEbdtnBhh9v0PiBHPOHL5XLLF7hFhqa2a8MIpKH2Z3DtaVMUhWepUgGnvwdKbb8y0fapa3skxoxQaprB6KeSsj2Q521HRpwXzbAmwr2kFh7U7WdQ06UTgli2ev~yVcl3k2e0rRx99L4c2tTWCOrA6kjfSDGqt4x66fedrLvnXNdMjUoEmGIca5jlBKkmA55NU9U32b5KkOUiXgpt0gjNxaqmVl1AmuETSSlNXNjWsIrzhog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.252Z\",\"updated_at\":\"2022-04-07T16:01:58.557Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}\"},{\"key\":\"cfb0febea0083c3fa09f37a106d25f460a131aec\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1418\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CMY/CnJ/xtqF3yrHEYQTQOsD/style_thumbnail_3.png?Expires=1650844800&Signature=G9S80ytoAT3UoDwieH~rbzbcEM6HBOYEzU51s-jAWE~1nKEjDTurYN4ZdoViuvMWRhSbuafutpai9KHGhsKkJN6Iw3PbncBdTggDAZFsRJEguQ3qgy9UM1lXrFylkOq6B-iPr7BOXRZlYXf2xJfmxTTwrKCOGI1Y8QpqBXY9NtXEFcWtHVNbnp92bHvtLwMU4eq0Asl14PB5qwC4xXpxUMo4qKnE-ZED45YzpJVSa46cKaR2XRtJONcbk5waaLtrRlPthtqYQRNnQbixMUoM14QXgVVfQUIO0qzwKidT67HPeNnFd0cgKcQFp3ds0e~cVWD5tmPnDxwpKi7N6O2bwQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.190Z\",\"updated_at\":\"2022-04-07T16:01:58.552Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}|\"},{\"key\":\"cfac5fd75722f844733fa2081b05bf54667dc1fe\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"206:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/K5G/y0h/1CxzKMajxcSnSNnM/style_thumbnail_10.png?Expires=1650844800&Signature=bfhEM86GluwROJV~WgiNV8MMfVo~ygUQPQWIjEgHB8TGrA3BHgQAx5vN3wFqkhXs~F2Pz3sAWbvgicv8kQjmb1DBXqmqZGC61gRYqjw2naFB4~OOprSwUE636lwu9CTWqMEtJyXLuH090jzcrruXs6jhe5dzLH1SuYrkJzmXyFxlBmrmdX8eNypu7jKOcH4obVaq~owEHDM5qsssy4kp8UkPvlmauu9SHWUbVSLPvF5EIUXW7ct7baf6MAoFiXltoGJ0CRiQiMOwfOEdMk5uTKYMaDlahGMTUVIj8-kNDCx8iysYJiSh20mR3ii9J6scVNXV8Ov7pzLXjSkad-qiGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Text Fill\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:37.502Z\",\"updated_at\":\"2022-04-07T16:01:58.547Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W\\\"\"},{\"key\":\"c6d5b0324bb7d47fa9c8819279e7b2758d0e37c1\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"61:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/l7S/riH/bbvAggxCVUmsueRV/style_thumbnail_56.png?Expires=1650844800&Signature=CXF8GfvRlEi37Z6KJmQSbtV-Zh30A7X~6ahlUgl5ViKhD-dIKWvXuRsAGhwaR0CqL2WHIQZs4frQMxu1eOfb7VI3Mg8-xp0MqLVs-Eg8yEtPwAGJQgLMxYEF7w5jGSKe~1j827f-QLV2iB9bcd4ecLbC9ZpEeWOnl302hU5TaHygd7o-QUAb7o5ljcMyw-AxAf8WEVRGJtQcT6BtTRSmvP2giWPE4BOlxck4WSjGJja71M6bSB5MQAmaG2edHJbQ~5vKXETlDttn2RO5YomK0Pwvp1ONuMA4XSu0k-y1Q~X8QZ7MHVJckmHHLOtfJStn~KSTXe~noV8ZWlEd9ZRM-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:31:34.764Z\",\"updated_at\":\"2022-04-07T16:01:58.542Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}\"},{\"key\":\"c4805829f7aa1d9f43eef68370525e48dc63815b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/quH/nV4/YQgXe0HLaOAO1obb/style_thumbnail_4.png?Expires=1650844800&Signature=My664GE9zMYlpXsZhdhCiAOHWcWjHVr-tExlbeM6nMXKjEBxfVPs-GLnIXefkpSb6mp2NxNIZjmnCiGdDDDPLoYBwpYfLqP35Z-UoKbwPNa6-ayrTEDzHKp9nc9YJkHtlkrW-ajAaQYtmNqfl~zOXwSCzN~RUGQeT-ME9znlMALFu1kzux99U57O7OdnaIyUTJH7flIic0s8Gkha6RgSgeGAREqDO3P0VWywD6pozJOyo8GkALG~ePOAZErnzl8ykcmRLLbq39I614lfgL2r3Qb5qWa2~fysxF-QRxoJoJlPQaHYeqZY630eY8sdAWeY5ui1Or16y1M-v5hhb~oWWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.368Z\",\"updated_at\":\"2022-04-07T16:01:58.536Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}r\"},{\"key\":\"c4270a7ab9bb7c4260dd45e87938c3cddd757e93\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"206:1583\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/sXt/f0d/fXZSPLiQhW1vRjg3/style_thumbnail_9.png?Expires=1650844800&Signature=PpVxiTeD05Yy8Fm6EJuxsApp-RLNtmmWOWE9tBfTq0Ry8MGtKnnSP2duAHjC0hLwefj3717x3mFIV~93dSf6lTGfKl5KyoFHbKrQLByZ2gy3WaRHkkLU2gxOB469X~4xozKFjIMuW6fVnQK69T50etEJijE1fgQXXmt1vcDzKjUiN~VLuKv0xFieRHMoQiwoBx1jLJLeRTeWcYZTdD0i6qZpUAMRGVTvTcRAAMvT7MSfBoeD5hZ2hQC4UIGv7iFR-BoNkjPatDH01L3-VeztxEKKNKR-UxWlESUPv6VhufyL6-BJ6jOEGXNx3MPOsStzwsgpfTfGyqcSw38BZ0rztA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Main Path\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:37.517Z\",\"updated_at\":\"2022-04-07T16:01:58.531Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W#\"},{\"key\":\"c3d97ccad48736ff0f1f45a898cafb425203c3d0\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"120:1600\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/D9C/IVe/Lp9gcSvFblGgrfjJ/style_thumbnail_41.png?Expires=1650844800&Signature=Xt597cT9XFm1i~QuQj9UqbUGnfOs5BCwoGdSIdR8VkFHy82A9hA9MI5FxJTjoDhDhzQYSjOPqwcWO2Q5zaos9jGSvw50iFRoF1iD3lrTPxwVoh~6uvSoYvhwYtxa0-Xtf2y1D6xlCYqQJXNoaq5mCb9kRCQelfpIHmfEwIOpMFhGJITBFUBpBQKJpUZgpJiAAzMSWz077EJS2PYl6HYjs2Ltu3R8YN3HI9rTqiLxyDq0AfrngtQcoVXH4wgSrg~wkCL-V5LNx7svTTmNhbEWhvSV5-h0AKcSHR5h48dzw0N1lboV3zcaUQ~L93y-t6WbvzAl5qk3gjkY5a11rjNwhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Multi Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-03T17:11:01.912Z\",\"updated_at\":\"2022-04-07T16:01:58.526Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!|\"},{\"key\":\"c3912b7e3de980df16b615019f7f9e4faa723ee3\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/8Ac/oOu/V5ZRxlpTA4UTHP7H/style_thumbnail_39.png?Expires=1650844800&Signature=Vir0FSN-vlRUFLU8tr5tJWfI9gmDAASA-fRgMCUy4KtifaO8Q-DNzwtrU4Hfeo~e32HiBeUSecm0MCvaHUnFSaqODufENF5gSFnjCmStbeScjytwaGDUmigUDWsqoEnfP5CxjFAhynpHVXnQ99Bgu6WTvrymTl4Nhc9-JZJSxtiVULl9F-hD3d364wgrj7~-eMiPIVCJCBx-BhCrBEn4QTIlprBNvbLIJmwEqDXP7JBYEBl2TqAUzXIV~~Cpd0bAtinc~tiJwUwT8fFzBVLCnkDDmfc-s7TKYfLiQsxxW9YIHl-ItX4bmQgX7x-GCnZVc3Jt~3zp-gO5tYyh0gwOvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.339Z\",\"updated_at\":\"2022-04-07T16:01:58.520Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}x\"},{\"key\":\"bd9cbb95214eb76437b9eccb7897d24de4cc64c8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"30:1310\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/w9H/Afh/afSE6ghcRZ1zPNZ1/style_thumbnail_48.png?Expires=1650844800&Signature=D9Rye1a1zWiwhbV6NSoqebzhPn3g-15-0dwbI2OsXB4GA8xCjFTy0rv2iVn2m2orBOwd5PeLIizLjS2m3OO9qV2M~JqHhr0A14Yt1AqRypDlTOJbuSU7ukjtkFQKlDcB89kbCkikNFYS0fQz5Xz1vbBDWBycqIX4lhS8pOW1cYlzEku~Qb4Z9UD8jxuUU0zhz4deUyCJ5RqEhByfurZUcgIYkQkr8kvYNP9-RCdoEC5tSQnGO7HhYBX3~H4fq21P-6VpvtSD7qR-jOLEQBjAtlE7hxJ8Sqb38k861ZcV~jthLzA9GPXmXlFxcA~EhdYjvx60fRyzOgYJLOIlsA8o6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.237Z\",\"updated_at\":\"2022-04-07T16:01:58.515Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}f\"},{\"key\":\"b2532a1d0dfa7f22febcd3a96bcd1e4b9cf2252c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"36:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0Rl/ndv/QnFyrT911dxonV0j/style_thumbnail_49.png?Expires=1650844800&Signature=RWWhCKozdY83nAEv0mg4dfMTUNAY~0qwH~trhTygmloD6-hLvVDij~OM8HEyU80i3bf9NSHSbRzCrkzZjX8QO1THCiKECJdBrIzA7y2OVLPjKBuOt3ddFAQMNzR0pjv7OZBaQNieDM4yqmYUexH9B86afnOYJuKLz9pZyBr7nak60Nzrcaln2isOc3kBpFMi1P8Ppb5F7KjXHqxmSLlbuC33Y6KPr6yCmtOHW2go~KrTBXan80Vi0ykYCeYhac12FFelZe9-TdYtkTtT~3h2uzfvQMaEPe2zkBSBuZKjqkxMvLBJkuRJM2nIOvRyQpjOMtkgKVPLIc0stVChveoDgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Neutral\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.576Z\",\"updated_at\":\"2022-04-07T16:01:58.509Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}f\"},{\"key\":\"b226fe5b2de1d986798e7924806eba4d45e28770\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1311\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/5Ag/NP0/xX2rjeade0vpePZi/style_thumbnail_5.png?Expires=1650844800&Signature=FUX0xAC5yQ6ytqYqf6aM9iD-ERmG~z7tW7crkNv0edQV~Frx4~1EfuHT~C8Wd7F8ACSbwQ4CSuX-q0vNsefcUM4jkZ7y~CSW85OHsVonpwCTw06kFy968DzJalO8oSwb~YCr8AYt9jFUGs~9TCiyUR-ABR4MnTolgAiBKhOP2Am-YSyctR0oBi4BJv38odqfyYbHnyfVevp~6qgqwFFGq3-wEpzvDSVBTQjOmS3Vt8gPgXq3VQPXPA-qAgBp1dG4Pn1GJZfZBNTK5YtjtXEs-QP83FtjtTT25HxfNzFTmRBde9aNadSB~b-m68D-XPDH8x68yPuCZxTw~12~5R4C5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.364Z\",\"updated_at\":\"2022-04-07T16:01:58.504Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}r\"},{\"key\":\"b1d06a9d2bb8785d12e2e4de21c232887ea20b88\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1317\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JMh/2Bq/HLh4bwghnVPrhPL3/style_thumbnail_30.png?Expires=1650844800&Signature=GtnIDbQrVzVBrw2383s0PfbjAFwfhseGYeDmSml3dqfjAAvBmhGOT5u8-rNVGU2LSqhJKQhA-eSZNWdN~r4tByY8DBw-ghjKkiQ0JATYsi2FhXXK-kbs1udXXLWJ5ZyUYxbNmJHTxIIXgD1--GauCM2C8n8wFkG0T4s7AcfpdoIlkAkWZcpflNehTrfkTIXYmDJ9dlYGEB6FKnj74nznWEDNn4FYy6QJSojgdXyAQo3k2JUgwj9o3ncreiPBAsp2LznuyPsisXzSeukcO2Ej-foWxVue4w5e4Xso8M9h25O1ho3s~ubuz-Tp7MgFj0ekx0xjZPs-UOitbSNEtI03fQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.354Z\",\"updated_at\":\"2022-04-07T16:01:58.498Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}r\"},{\"key\":\"abba715d7bb0ab93f9ad5751116d6cec72a72f33\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"36:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/M0e/xjX/PdQYIKVs52N72vXn/style_thumbnail_22.png?Expires=1650844800&Signature=HJJRb8-BlfQiMA09b62UciL7gXyN8ZhAMEcGzOGWS-vvZc6TgN2BoDUWPYik5eDfXM2Qf~RGGOdDIJ0loasqqhcOy8NrKHiziHUtakwAfJUkTdxXQTTA58IuUMT~kbvL6WNXKGFkTsoy~XhDJ3OPmVPDwn2wd47TlG-KuVCEpICaOMsNH~0PWsgx1bDoX7Np~UyD3bWSCy6G0~xe0ZLaByoDa0ZR3mipxJy22veBDIWiVayyLJ1C1oahFKD4PMHP8UigItsM05AXMKkkyiOsMJmSAcehBSIrwjwTSA-gO7-kHXxKNNbeK70U~m4BYJer7Blbrl1YOStAtOdnN7tQ5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.280Z\",\"updated_at\":\"2022-04-07T16:01:58.493Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}x\"},{\"key\":\"a060aa93813b147aad4cd2dcfdb34de91b5a128c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1305\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/k5b/8nu/kXDOeDv9s2yHFVIY/style_thumbnail_28.png?Expires=1650844800&Signature=ZuavBxcYZjH1iXObOoo6qgic4iQrGAW6iI0tZaGVc02Uy-KuGSIoZ6B4O02M7yopKk66dDwCKrYaIGoME6ltmJyXYBuZa-4IphdPLyLmj9UoYOGKCL5j1AxfAudwh80C0jdqerwC08L~2Wyie7tmWLzyccH32xSgJJBR2ACcmfbdw2WppHxCXwQuaKsBIIQpsNMqghiIsnXBEnVsAX52qDcco9~Ossw7nrehwWN6oEqO9m1uucDr0b9Eu-ZwAxcdBhaQqf2tMVLbivZhLjdtwCZ64qVlb~BwHNxN2KFD7NLNxctHydM7mxCFBp~nPorp4eqNLSNFBzRKt~laVAW~2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.276Z\",\"updated_at\":\"2022-04-07T16:01:58.488Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}x\"},{\"key\":\"9e16881ef2bd421ed25d497b337374c3e3203bdc\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1411\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/eIU/Z1I/mghFq8Lhmt7EtzYE/style_thumbnail_23.png?Expires=1650844800&Signature=C~UnPhqGZ~~caVf0LLsWy5utamdedvKFFMm2Lt3IIMss-Oi6fbgLOPRsdDcCZiKkzQ9~cEcqKwJ5mXTDw~9YxPXqixCHUQBdk7~V1VAz9tMtisK2xGkTCZZWEbj5MYlUPulCjMQx9aJVByOQMVqhhyyjaDa2SMBpergBoZjZHzRijOBfrN4~KE6AvUyPzUsJgwyK2SnnSU63xTASSr2uZC7nKfXkY6ozQYPzFuDGEfQgpaKkgDmqSEolmb1yTr~b-5lF2OTp5kjhwaLzZwRP7XSOub6ih7c4xp0-cdFdYLDHjI2nGWPk8ecg~upJaXdrRQwlzAuixJb2oQ8dnBBGUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.247Z\",\"updated_at\":\"2022-04-07T16:01:58.482Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}x\"},{\"key\":\"96e4443901e4a460209c8a07370d852e4d4247b8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/A8U/y5r/ncj2D7MKLPaM4LAP/style_thumbnail_19.png?Expires=1650844800&Signature=JZ4wKieQl8Y4odK6FJfZtMuYPHACqdvmxuYUiiUogOAfeQDxEkem6bzMHgFbsRW9cOLcPHK14IWKcuXr6v62uCGIIgLZk7zfQe4nuhyyhmgy3sJ9P5rifkbP0X9cM~B26BNesC3XSpSgpeXWiijH5afZsdXKlnsaDC7IzNFss8A0H7UW1eB6~lkrD4oe58vC0X7qQLYAUwoFt5yeWYgomfoBGKM6NZ2rR0ACaDDi08Rg~vwwFovTBYmvgYhCliwX~mvEofypH1Q4XTW3DKI9yBiE6LbSa~-CKBg57SaVU86~8Z67zlDERu96adf20lglh-k3SHTEOaUWOMLeGsn-jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.151Z\",\"updated_at\":\"2022-04-07T16:01:58.477Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}f\"},{\"key\":\"940f11280cb9dc4815ef81d7109478bff0a30fb8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"45:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VEa/nKX/HPXo4dRH9hsxbEnp/style_thumbnail_14.png?Expires=1650844800&Signature=SUS-4r3Va-QA9LuU2TAqRL8XIuybOLhfbUeg44sDSglcHvJVlhITCgsAtB~Bedsp9-Jy7ThTVXbKJRh3qvBfOvcRnubp9~DL5zj9xhrMGf5ww7JHvoVpiUAby4yUbI52hd8t7y~ZBmJH-P529DmK2WS2uq9PFnlqjtPZ9KlUgUWv3~0BEK7UudMbsrfOISTpZXobG5UBfWZN8093DGeE7K3yR1qL3He8tw~rqAcg6GqGnAnI620BWVTZTO83QO40ZmbaFRAz85EKvW573y5HqWMD6ID11-4T6TITu2-uAIQgRmIeoR5510MDn~O55pMIA4R2oKIIrNX-i1zzsPUoaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Floating\",\"description\":\"\",\"created_at\":\"2022-02-24T11:24:52.077Z\",\"updated_at\":\"2022-04-07T16:01:58.471Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!r\"},{\"key\":\"8b817d5ad3a254e94a06a6ac1e79ce9a865428e2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"114:1558\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/k7I/71b/Djvuz9baVxGqb0RQ/style_thumbnail_12.png?Expires=1650844800&Signature=I6ekai4DA3IbEbBzPQ06NuwVojLxzr79kEtrINDWD7H3NCFSZ9brRQ0tQLHsrUndNUo5FYjq5aFaVk4k8m0LH8HJTbS00JLcAKJcMe5FKbpBqj7ALjumQRj~XBsKIAWVU8VOErb1PXpIDN9aNaqGpRtOWUzMPJ6VfCjGknjxmp5qC3L7m4Kw1DYOikgYqbj-TN~lXXr9ApjVTep6rPIlkMmyOezR~z8-bJf~WNVtmz4spWOLczGVvVQCEWClwFJYVeee84tVhfJuIwdXBfN5tnuhHr9yHey08u2WNLygGFU81Jxl9vsam3xxme-gJzSwzWhckDtLcwrYCzm5GYQ27w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-03-03T16:30:22.531Z\",\"updated_at\":\"2022-04-07T16:01:58.466Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}r\"},{\"key\":\"87f36e89c8954a4498c1a14b089eba5c11586e2a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CmC/euu/sfhcBQHUlBYeP63F/style_thumbnail_17.png?Expires=1650844800&Signature=dEC4t0nMXYQcb3LXFSAV94O9BrdmoQiPw-6COUBQkhEYvCbhE-BDdZkE0Q04eSZehfK6hAaDVaEPX9fKhlhXNZ5HPcuWjh5l2rGOC~bUDAio8zl75FsH-u75mmmkTjms-XfOWs-g-t22~xvzW1xGAQQmAUmbSVSG057aBfEs4doHaP1sO1YbqOBDYqpBLaDu80CDCNZC0WlekwBesOWwcf-LEcSEtp5o8vEDNL~DkzXCcbkM~vAJu6Fqt4V0abYBHgeC9ouvfRCiMjgszP88nswC9QXEajEkgtaByK3DyXnxtyKg7gVIRmgtHtqjp2Cr~XSpFqPyIA6niVVFLkAeQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Text On Destructive\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.295Z\",\"updated_at\":\"2022-04-07T16:01:58.461Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}O\"},{\"key\":\"859680c104a4a42a3b553124e0f25ed2e189cfd3\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1302\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JHx/VLV/vrKAspgQTtTJAZtk/style_thumbnail_31.png?Expires=1650844800&Signature=Jg5eS~AOkg2aozTkRAzQe4~lB759Lk4FgxNmSWX8KQCaSYosWtr1~pQ689erx96EiZkJFKS8-f5ei5tRdoMKzehDuKSS~4mLzNc7JQx~xGbO5GRSep6NN5altk-KvidSs1hnzcTGTVW9JpqJXgpTf9xgBHZ2XjCtC30c2o6KTbv-ZzEg1lpvQ4VhCWzO0-r8lOgZCQJx3dh0SqHjhuDMxfZoyaAuOvdAlWfUf-0uVL6SZjxlxD4KhiPbl6OvUYgHs4BN2WEWIY4emqaX6iThn~IPAt8yTxT7eaDMsoywYA8IAV8wVuOn7qaiu0eM6zVgSlVEOmn3j8Dms2cDWNgyGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.349Z\",\"updated_at\":\"2022-04-07T16:01:58.455Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}O\"},{\"key\":\"820cf81a41129c9f0b8c4a2bfb9fbebbe2e80bbd\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1315\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nzN/Qz2/ANyVhhYGdVxj0Ba6/style_thumbnail_16.png?Expires=1650844800&Signature=Qrhm16OKuUBvWj0m2sLLWLjR7dO9UXccml5kMpyeKjKdBFJu6SFicxaoFJwDjJepW4bsEehivHsU-61SfGtwlEJNSB6rrefpAckhiNb-ysOyE4UWUhCY2J1ai9DqG99paG3ib2iBILqPlrk8~fZ9eQ0cY57kgJWZO3aT3mv-lpp7mrPv7s2S6LBAlTGrxsHxFVU-OfeIdRg5p~E01BtYx-eSDhde-Vqvlp7VvQFuGsqXKvotty6XgaE38zSA5-6bYXAtPegX-sGbLDaPvGFXO-bD9HkqcEhC~oyU7p3Y5OpHWEIrB6vjttGCOby13HXWIk4hcEsooV4-ngNAUWGIyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Text On Primary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.261Z\",\"updated_at\":\"2022-04-07T16:01:58.450Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}\"},{\"key\":\"7f432d441c55640ef9e1c41839ce91e23873cb88\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"30:1309\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/eSh/LoC/MIIQT8U9TCF1EOCn/style_thumbnail_50.png?Expires=1650844800&Signature=V--x3iqmRC3qV-mur5TWRK~YSL2y179JfFdrPydFlbEpcFEj8K7OE-SqY0J8OWuyrj3qs2UHEnU9H2wTj21oRvxQRvoo-TD~cED8b6zz9Dyks9Voz9JBZypYYKmRdgiIeQ3IVIRbVTl1qSA7~kSyx4t8QqPMV2Uqbs1DpAT--qu66kHT5HSOPreW4GyGI6NACt4k~T1mmdknWdLl8PVFVut0bcOX5OBUFGKctGr99Z6sjEnkh3IlTibHYlEEAr30y5WnFJde2UKG01S1wQKFEaR2qxmCLjh-Q7CWWw8kJevGcoX3aBLjsjc17nujh2zobQgyFHxSFzto58-qJBuksw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.581Z\",\"updated_at\":\"2022-04-07T16:01:58.444Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}O\"},{\"key\":\"7e80dfe37e09a55a45f2dde366d298906b18f124\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1422\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1pH/dqw/DvIBBjr7YTjaWHUl/style_thumbnail_18.png?Expires=1650844800&Signature=IEOutx4xDVAuw~d1IvxXQJUabAuYulj25-h7TU26BATdL4Ud7fno2kelPiPAL4UYZ06KB9mRZuR2cV~NTBYKGLMhQEM7M-1IkgWKV0euvm~f6-a5ZDBPnIC298eaZNlFQwuxiDBnZOaYkKWF7C-xOYoOHEX-Bfu0wI8kC8J6uj08hQswl~P8PMACHV-qgSnXYWl0-C8U4vFVJKAMJ1ZLxZuN-cQekxSLteGMsZ5vwVmu8m4KF3~p6HuZ-Q3jOC5NeEfu8ENaJaNNBad8E--Z7geySgdHkrXYN7lvEK6aKA0VWZo1CyD8aQWLZ4YfpEvFLArvzvPF3UCcKohvugXW6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.214Z\",\"updated_at\":\"2022-04-07T16:01:58.439Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}r\"},{\"key\":\"6e37a15b5198031d99546be0d646c9ae8c7b9e00\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"36:1415\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Yaz/6cz/Iz2Ss6PP1TT4OLRj/style_thumbnail_47.png?Expires=1650844800&Signature=OR5i4IsIjazZPKKC-70TDUPfvbr8EnEWQC6f-9xybo3amOVklpZ8gq0gLjI56Z0uN-pc6hyI3EoG-YxMrd7ggeDXShcS6~S7SOg4~wcjrSUT1GSEdYHKksVaccE3HBkFLw--tcumfoDpoapPmpSU~ufCnpEM4~TYEMOszQvO0IJkEWaPswNK-lGM9SGH6d8GQso4X6i8SOmfNv3I4fV13OsyJQTUh0eZtqoeQqHT8NMmuMzHV-6y3EnORWqmbjO8qlTyxQhFkFyytVEVV9fVbas720PDAV00ywRLeBGRVXp5R0Dlrtq1tyyrRMSXam0yLwA57lrjWnRtBaz7hIojXA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.233Z\",\"updated_at\":\"2022-04-07T16:01:58.434Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}r\"},{\"key\":\"63f1ca4e02fd507544f3adf3e685047b5ebf9610\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1409\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/qbN/DjV/Lp5ZdMReiojYw47u/style_thumbnail_38.png?Expires=1650844800&Signature=BV~8zt6aFSepQ84Q3LWJrQnxbfALLpwASpsPHeOHChilfcgLf10QE5eFtNyl~77w3ol6K5T-86OJ72CKQ20UWOb-lYVRQmvUGs7UswX~xYwmiFWVob4fA-Lgr3nzT924TGuP8ZIlzD~bC-pKMBhY~I48mcbNY5i5rADYDm4X6B778UZg~D7iKcvQqHmzPIlfiyLK-kNCMsdNpJu0Gt5bcVBelxY6PWbfZGLpQV1RQFfu0GMrNWuMwfditniSDgYOynDXAQP512bzTFagdr6v85iok-iN4DooGaXmNPGU6eQ4FzpZXrpQMruAQNVIWqbkCs06M550LGZe8-UeVOoMww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.329Z\",\"updated_at\":\"2022-04-07T16:01:58.428Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}f\"},{\"key\":\"633b88aca617748f74d57a8ea3f9269c17ee2518\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1322\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tqW/imq/HUwMYk9jgZ1SWpaj/style_thumbnail_58.png?Expires=1650844800&Signature=MFBudybNszxAJsWDv4kZy-Ju~l7SNm3oK~hxYqs5AKY348~wrxW3Mfr25JMp1HZuYJfYYx1RZh4KnAoTiOEJ6BH4fEkZjyz2aDljBE8HRTixHbXGfRiRzu2P1FWxKyO9qlK8rbvt7iirYl6lY~tRG0dpS1oiNtjwhi9l5JwnkMYiPIA71isAxStIcVHNtM7S3TBWWmF7~1X3q5o2eU2HZ~4iteW8NsxXgRTuBJbVe7WTDS8Zg12d0SriMaJjnKGmXPxLpF1GtoxF~Hf-GjoKswP48MiKXokSnylNn2-mdQWCRAjq8f7qauBUisafcuEYBCH8KCUFqEg-w9TgajJQCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.537Z\",\"updated_at\":\"2022-04-07T16:01:58.422Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}|\"},{\"key\":\"58b2de9b4cf0d80ce2a4baba64f395a6a8f235ef\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ww3/Jt2/U8AHBrSr3w0ba4DB/style_thumbnail_24.png?Expires=1650844800&Signature=TmmxMH0R41h-cGLQZq6VzBo5lmcSYfoR8ItD6Zad-HD6nHRwEYrBCaUvr8a5fxDsv1teVoPjX9p~0Fw~EcsqKp~GEPEC70-wpDOW73vU5ICoSwKRbEPEQlzXzCN8KQnG5FNnZ4QrPr87gYoYYwd4Oa-CdNsUYdv-qGIu-Hd2Qmyr4rr-ErmXRJE1WXebufa1gP2Z2hhiE1pgaANn7LnDdG41Bs8fW8AYHxaYmoz72k8~an3TPFFO0CLFXhvRz4nu0a25qghaYmzW1VQJHfQ6bmGCFq5OIbYxNhRB6dmP13WHKPsBSiWJho73wNRSWBCCqjkJ8m9rSK3-N82rg6l1Uw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.257Z\",\"updated_at\":\"2022-04-07T16:01:58.417Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}|\"},{\"key\":\"525494fe61a9d4c12c9429357fdf7a9dffce04c8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1426\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/FuR/bAQ/jodIxNECAQ8Xsm54/style_thumbnail_11.png?Expires=1650844800&Signature=LLuQTfC77N0u6usaQjvpbYcJsoDVtumxBPGlhlTNUMsgwLXLxR6hFmpjU~IydZMfYf45mh~NCnYPWN9oRjpff7h1dUKOUirKyz8dSleFonDUsXm7NR5tM3ubO3gr-yoqSlVxLgsyM~Ad9YtABjrZrHt2Ihxp6pbNJHRWSKPE6oS1er4uh6GlepnQ4GCERxpWy7HMQ4WW6ZBTcguNzMHXUDONvW2-r9Ws-DofrbQVlPvlKAxUaXUhDbW~MDYwrFQCIyTyT~1UOfecmvQqjnNxY2nSdmNjB7bgqtpHLpGG6Sfb-ZX-39Z7JhORKN9MS0CAxSptaRGwiyAGeRypkF8WIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.181Z\",\"updated_at\":\"2022-04-07T16:01:58.411Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}{\"},{\"key\":\"4c78003980a9e350339a4149994e82ebe58f0811\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1303\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wdW/xuY/Db3WCzaU5vbEs5Wx/style_thumbnail_32.png?Expires=1650844800&Signature=hkXvPdwv6R6iqLdo4BhJKv6evgAJMaULG2Pj4~lXIpdQw0wZyEf1LOdDGrZ8ay4Exy3vSy~D-leE562TSf0TUTLDgpDaKmdag3KvG6ibz~RdA25oOfwSJqRTp~tr3ynAbk50aJrkx25lfqHpB-J8Ew8~8WN7rMpG5Zt0hUS8VDFPOIyQP83apTRyk7XQFToCpPj7CmnIJbPujHoGcPHKlCzz1tHoEqpZNUBWUj1NsdCtOmlbc~4pmdwS69Uu52O8Wsktv2kCRArUmkczlwfZNTATeNydECDGtpAXqt3BwMCiyyQXNzdq4gjOwX2NqB5sNynRWSHCmwx7bVwFPf6eSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.285Z\",\"updated_at\":\"2022-04-07T16:01:58.405Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}f\"},{\"key\":\"4c0e1c073e8d24b8a812c73a848bf1891b86cc22\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1307\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6K9/Y5j/GcOCaHf2WpSMR8Mw/style_thumbnail_36.png?Expires=1650844800&Signature=gwDKYydvhlWfISdVrZcR2yWAtan3TVUhhuQrcAFLPN81Zy5QAbaJvsFjb4AeSenlEUmcTeH4ONCX8IBInMQuKEJ6lGFs9vLGU7urlthE9BsRou8WcO37KDrC~~gPvOikG6~P6LVNraSa9AXInl85KFH1eZrKHOW6JY8UOvUxJ887bOLYxWMJGKghdujq3WumVr5-V9~KiKFRv3eI-dDuHNhCs3ITuD71DjRVrJO5NrepySpiwoQ13zZDllTLh36utFyGmV3lJJ0mqvQeLyb-yz-4-0LzCikfm8O4DGgWY~6eKGnkTeCMO6wLKkgXu~JHP1hGFYWjsh85H6SjyVOaQg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.319Z\",\"updated_at\":\"2022-04-07T16:01:58.398Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}|\"},{\"key\":\"4b061b75b3bc7b3506ff7b86bcdb3ffe9de4a2cf\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1318\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NA2/lpi/7PP82p2K9rv75BWC/style_thumbnail_29.png?Expires=1650844800&Signature=cxzZQdEbdDAbanvfCewuuVCt-RdoOA2RX6Q5pWkR~SDC3tSDzHr4cjCxOd-JcAdJ7WR6X50CEHjjErO~a8IdcTLvAdjw-dX1su0cF3oDb8s7b7R6vwOl2wQiWKD29SLb2s3OYOsgHYMDO11UNVJSY9vpUOvPX3T19yivhw2m-DhTyOZZ7V5JcUigjChHU1Y25lYpK7PdwQbqi-8KTtLyjD3kk69YphX03I8P6qJ4qVtckEyCwA9~I7vNKu8I3ijzxi7YEFj~~~~dkPYJ6f2ocaPEH6FF-KfjLFFCgt-hckARca6zIhjjI3qxE4KNacnAfcumt5nUuyWnCxkVflu3Zw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.271Z\",\"updated_at\":\"2022-04-07T16:01:58.391Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}x\"},{\"key\":\"48a0133375061da6643f59278c4cdbc1ae6ebf4b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1313\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ebO/U7k/759YMKA16Zcx8aTV/style_thumbnail_35.png?Expires=1650844800&Signature=R8W~2fuDGkHBn7WGgUYGeblZu7KEJZfpGV10K1HOs8kjHxxjouvSc~VqKHWhMbcyJpiNOdK3KrZLAkeukDqlx5CmZkUdeQjCHvbpERkc2j584CwjcHBI3rf3qCyBOV9Mip6pb2TpKzsQpJYh39uMAcfLUHHi0t8TzeoCxrU5IIbQ7k0ZDmu78BXPwARpzONr8dLYooOeD4K7COVddrXO0y60HZ1jXugUFYD8jfoOxnQBLDKGn1Xskr9zMO8~2nyWQ25g3EN5TY7OKZ0kyOQOob8~XZukQxpGAKpGSVYrYIzRvxNuoCpaYhRI5bAgnqEJdHXnjXRASoGWZt3xLpq3kA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.165Z\",\"updated_at\":\"2022-04-07T16:01:58.385Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}{\"},{\"key\":\"46e6b897183d0f6f0f8f350df0e0e5ee28d19f34\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"211:1602\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/D2i/0KT/T5qm2vdkytDlRWBD/style_thumbnail_46.png?Expires=1650844800&Signature=Akc6YQMZ--R2gN-U86SjsgIxRLCD~Faoa1KWr5r9aEJ8i9csPSZBdswgTBqrzIDyMP86wAF2lT57hM960234D-9GX576Pw-igL2SzoHdkFDVVvac3gNBmm40y-QvkwBfxFyFIbWNHaNr8O3LG~wM4ir~FcTRwCQrK3LgV6ug0hcDFVoOMxck9aOWURsGlu3HDMic~1flthAd6ogYlcDae-zj5W0DEIZHEJ~ECgMnG3Sa4-SSoUsLAmK~vxBIyiu71p83zPqjIjXj8iTG2VfrcNh56OCl1Zjsiuukg~qZxy2xbzj3TIb-W90OQqjadGzbpVWEq47R9GxDpJSoZ8ijnA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Text Nav\",\"description\":\"\",\"created_at\":\"2022-03-14T14:41:43.894Z\",\"updated_at\":\"2022-04-07T16:01:58.378Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!{\"},{\"key\":\"45b2967a72314fd950111b1dd1937a44a1baa5be\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/00E/nGh/xPIWW6hhnrcbH912/style_thumbnail_53.png?Expires=1650844800&Signature=WcvoOcvelDtISAcSUA4bF~9HdbdzZUbRLbvkbHqiW7~tgG3mAlRibwytheeRDaCVIvseK7HJMu2V-HfWRhz20fMSJRBsS35f5CVsWNXTI6H9X~hXsKPeC2siqisGWJKEjJAlKFhUutngjBcwqSiRqGqATHnUoQkB~Vhjaas3wf6xfTfxsLnxGLvEHRslm~ruDAGzHP35okb93KTMb9BbRsaqqLuNFXkqIXBAAKXbCpE18vWXQJC-~ChabJtGLaVPzoT6QEsw6~ckjpsvIqYnSnitH5nBvd5sv2jFIzpyFBqcOdeQ~Iz3HTcA49K~56xNQwSX6m-Zk8b0VKZ1GdjYmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Text On Plain\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.642Z\",\"updated_at\":\"2022-04-07T16:01:58.372Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}O\"},{\"key\":\"459171bbf39995b0e05ce46c4c94fc0232ff0929\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"34:1412\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fds/gw7/Trb5Z0yHuUUws5B2/style_thumbnail_26.png?Expires=1650844800&Signature=bAniasP8IkQqC4Tk8aSTfLyGdyhRpistn~PpNAyEpVqU3xPreGOnwuYlw9mKF1BqIof8z3Jkh89BwF-gAHB0blKmFCOWpiTUeWrD~LlFjwmsAEC2-Igsb3aGTC9hkU3VOjAnXvyuc0pKN6dUoQ94mUuVxP0M5kXZgcXkb0qdh2JR5opMld-4CCCEx5IJx03HUbcIzwHNuBYMOZjfXeXoswfBd5oe-xa~2uMOOY0AXNY6kITRYgFJgZ8bHrQNGru91z~b4i1qJk-yXq8ZMzzbFapSuS1BxopSNKPFljh-TwmkCB2AlUcRBkIsKLnYp6zbhdTriAqOTvjBA5VK05ed6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.209Z\",\"updated_at\":\"2022-04-07T16:01:58.367Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}{\"},{\"key\":\"44fb12c0049f59c20254040b430bb230f51aa387\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2378\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bkA/75B/dwpCx3EnlqLebYK1/style_thumbnail_54.png?Expires=1650844800&Signature=EeooqjsyofqURQ-9cB4Krg6EUjcj~UFTUGz-g8Dpw6NWdiHIG0aIRT5F37qaOzWC8v4Hs6Xd6WEHz7p4xxxH5iiMtEbp7sBWPyTAYdMN3B~FIoLcAtnxfAamKp9Yg8vy4b9h8K~Z3DY2vmkGiyfYmBHo9VFL6j8dZFU5jXiRyAfJH5C30VbwjTPp2M4W~x4Su~uf2q~ySqk05alLRGizyxFKcKFbkGZaCgtW1jtsV-zANZTmPZdHvS~oSF30WB1WUfks4Cp8DI4LgLBdcYxbXgF1~zsyCWtXwgckkN6~jmIQiWAHaB1oyMtnJ8alzr~~o-OjwXVqqeUnGYrG9q9HJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Extended\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.657Z\",\"updated_at\":\"2022-04-07T16:01:58.362Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!x\"},{\"key\":\"351ba76ffc5f9d3d0acb11c2707495e567f2fa28\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"95:1456\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3U5/tR9/nTr27mWc7F01SUPB/style_thumbnail_13.png?Expires=1650844800&Signature=eVZsfpAIOiUh7KwuZsOI0AK5QFvnleggyAUc2-a7~t4WHBE~e0OqBAGU5WVPCpdUiWwHQ6yO-WL3p6Tour6--7LcpUQOvo6mXVSOG8dKpF-XlIr45fErrr7QTWRryQSWJfd6Bd9iKdMARxYYgEgerBGUv7sLPSzwydhU55N78-~eh9UNcijUSvbRktzBEK-n6NfFwINexTLpfzoUek8pDUb3-w1o6imAG0bU-XseqA-z-BAvZVERwSk8d-i6ljW6lj7mwPdvI1AX7yU8vzdZFmbbLCYQxZWOm5VzZF0skDBBcL7B58yQIbMGDCnEg7wulWl9fCiLzFYiYLmyQktBWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent\",\"description\":\"\",\"created_at\":\"2022-03-03T10:34:24.958Z\",\"updated_at\":\"2022-04-07T16:01:58.356Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}f\"},{\"key\":\"32705dd80fa63b0a88ac15891eb5aed1c3b777f2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1417\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/j5k/A9L/gY6YQxES9tYkWovI/style_thumbnail_21.png?Expires=1650844800&Signature=G3AQZZRFZ0fYEcd2V91agXBXJf3E8tQsI1ph5nlVcAJxCehat22W7Xj~5V95WzVVZTOyQKn~bTt6mZC7TLv5RGvH~cggZaPMevs-KSsB6SGSL-mZ-wkf0kyNPV6HKApgAzjZ0NY6OIAlCtI7xihLKrm5um4jplRhBxr5MtLaAMZEEno4kFObR1acQ0KmIgQPWMhRfB6FXqYjl1QOAVlrIhsWnN69xfSMEOVmkwV88ZWQQV1mgCOiHiBx5VXf~q7hXrv13P3wdTvXiwP8rLeIi8JRCIOuJGVcHjt~r8y1LWZqZY6Bp9VgFTh3NM2VbL8NSBScQGkTofPcfbLQMk7NwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.200Z\",\"updated_at\":\"2022-04-07T16:01:58.350Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}{\"},{\"key\":\"31b36a20950c9aee9789c3c85f78a17d075d1e7c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QIl/PMq/Dj8lkvV6AO9YEr1K/style_thumbnail_42.png?Expires=1650844800&Signature=JHBWr7Rgy4KOarYvIRo95IceDg8oWeu2yFmT3Ut4j32SIITvLaiyn5BOJwnipZQTFvaPcyYie2kP0lgrNH5l45fLB0fmEdRG4euw5R0BukYhKKoB2w1a9FSCou3djYYezv2xfp4PBDDxr-3pMZl7JpRpz-V1Gh1RlNUPy~~6ldap6sBKlCzEQpem4ikNIp6b-xt5t6qCeFTe6rKYaHvT~zjHQv8Hpn~~vI7joPInZN9ZQI5lXN-9BxPddsH4WBjkCygzbV9bNHLe9mMY9VPHrvI~Wkmd~cOFkGsQjUf2f5~wIiRs~OtsGrvUlzwHt7ObxPrTg9bIOCOjVhX1G3oWdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.305Z\",\"updated_at\":\"2022-04-07T16:01:58.344Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}|\"},{\"key\":\"2ed8b72b52cd8884b939b66bb366df199d903af1\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"120:1601\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/35T/6Yf/lQm2rdJzwNIVbVln/style_thumbnail_15.png?Expires=1650844800&Signature=QoKN3WTQvPqhZw9JRRZJUCGig-OnoSgpvHSoCLdJxKn1fGTI6vifYkSYIOTnjHpCU9E-hhw2yqw~B8rQPbPZ1lJBVAIbMNniJi~WAty7ea4hCbGD6srgIwYYdMY64ddxMp~1xfQOvqcStlD97zLf4VTrUOq1FyaR3LI7Ytr3sdgpCiHFuqpTLxzkLDcbcuCu~1p6S5YesbcBuUziLkwQjf4GXpfr-Bz9muZt9bw4AZLw0F3bAwXMaEokDqOQN1pGq4P2fBHbEKPSD0vy6rXYystHbBn7D3QudMPCAnFejpfIp0vmxvWdHek5KN8NgwTQ28hVFPznPHLPyilaVMqiXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Handler Multi Control\",\"description\":\"\",\"created_at\":\"2022-03-03T17:11:01.906Z\",\"updated_at\":\"2022-04-07T16:01:58.337Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}\"},{\"key\":\"1b489efbc59c804faed2d5a81635ef505c02cfef\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1316\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QaT/L68/mosDAQBvgmzWMUIf/style_thumbnail_33.png?Expires=1650844800&Signature=JfgeOBieH2QhcUk4Ls8DLQAnC1DcYlqW9MMonc-AJ-PlOSyp-aMuGpU91a4AhQSB-UDqWddsi5vSWmxnvFtvKL4E68oAUlGBGZUN1VXGIILKziPhnCsmYxMIwjdT4CoyeAL8Hkzy1HrMklfRr4H0oJ9Zf71ApYK72~HHbElHg~9~a2tGCyf813jW-lThFHLkHiVrECP~hkXTHmogc5fR91csAsd2mQp501mMATmpC4o9BSvlFufzKw6WeUjJB27CHeY-MWEY2jaFJvdVEGjXr0t2xvB9h5jMLux8KQWYYiH6VNIl26xOxPRJaguBuyCoCCnWCByKL9KCPZ0W1cBk6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.290Z\",\"updated_at\":\"2022-04-07T16:01:58.331Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}f\"},{\"key\":\"14b0c1cd30228a0efcad5fee672ec398ee5c4540\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"206:1584\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0iJ/nwN/mwJusRmr6yqR99W8/style_thumbnail_8.png?Expires=1650844800&Signature=ddGOp8hsNYdV3hWUeWN17jiY4rxp5h-BmLjBXE5vht1U4-qua~HNoWmTAunIcTBs9DLCJD46-iYtFHMkyjDD3uv-wwKMB0MQJve30LTeIwwQ9Nl5OpqxHDst1cZi~U-wEDb-30a-Y9FbqiFh~9VGZrQdjes~LPxMCrhhtfN-YAdHROcbcgrHlTdF7QvSwx-8PruJg9WU2PaFR9rcmNSlXJPVuUFEkNo6pvZ5C3g1ARFZrRjSHHPC-caORPLM3ln9fDdV7KZT6kFCCqLqSTpDYa-5PAbRlf5H1L3-tMVJ~i1Hx-NIaaZzpCM1hg78jXsxbFH~X1BigbdIQl1IQvXxiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Alternate Path\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:37.511Z\",\"updated_at\":\"2022-04-07T16:01:58.325Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W$\"},{\"key\":\"0f0071af2db6c2119b46a4b08fa0572b0aea7a75\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1321\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vjq/0MJ/YVihjnC2c7bYQqcY/style_thumbnail_45.png?Expires=1650844800&Signature=bO5u66aKWIsHJkWL5EgFemaQHAOqn1kz94dqzok~jKZGkuYbxeQMJQEZ6As7XC90fUvD4Vkr2j7Fjb~7muY0YNdJoeumdljAorWOcRpSmP6J3DXJfCt-kIShzI8qequQL53eztc9Wm1ZryIKiw1wPMYa-JxrbP3YvXYTmylT6IReb4tba7fFevP6q~8e~0no2GVfpovtdCoHeFLjYSGKWbjnNIXz5Y5P32AzOqPk0iu76ea-ZWwlvjKg~Z7jYYc0rxnXhqXHhOMXdffufJiziuCq6XTxrq2PDy6mmzGtIE4UIYkPkVdjGz17Se2O1xa7WCo5yXCVtzZqb1XVUybd-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.397Z\",\"updated_at\":\"2022-04-07T16:01:58.320Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}{\"},{\"key\":\"0a3dbfb3bb499b639a6cae655ae795f6432edecf\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1312\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nJH/u3j/7Rr3MCN1ZkTGoBgV/style_thumbnail_37.png?Expires=1650844800&Signature=AoAYk8a7BowDaT81Ts8kR3TcyxkW62HSvhPvFcdP~Fy3TcG7g5Z4HdySKMB1scVKpWuxqDyJ12E8NHeyuLcPbKkkT3Env7H2ZrlV2UE7YJ0KwJ0CgLE2vngKl1VXOTjt7vDi3HiMAggJkn8SZ3KkV35AXPvD7AvcDoAv1C-5Z0wHpE0tndZSNs9XGRhNDjtGsRY2XAg6u9owzE3jS7RETzwClaglfjxAuF3NrxBS2h6Q~j8JZa6ZSrTzU7o3kvsFa2NOCxkZetMrbaRBN21GjnwLY2b~6AEY0qCVfZOIrdVTDHyYlTwJ0KYC4kGwNlcsBrYLmchFqe9MFqvijGVtUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.324Z\",\"updated_at\":\"2022-04-07T16:01:58.313Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}x\"},{\"key\":\"06eaee152032393df8686f348fce7d32f8f1fe3b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1308\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1uY/VVx/Wkqo9y1NOvOpRz0z/style_thumbnail_43.png?Expires=1650844800&Signature=C1OwBtQ03fkJ07rLXxXyW-0~tK3N7GEWtEk5R9kwONGPpLQ2o7W4QN2kNze920BJgDTO93IP8tGqpYJ1hqGDpVvYZVagN4M-FfBT-tczoOeSFHlXZVQbsPnt9qpSX7a22w7zs8f0Q3uCXO4Z13f5OA1x8LtFMHVVMmLHuT3mr3Fg9FxMA4wSdDT1kxNsGQ5AK9Xh1FFl1ROxuVBhys8yvQt89XxJllG5j156HLthhIJU~Tgf9TuCMQZgvwZjXxJ~6c0hUXXAhiFRMymJVvfFQa4O5pIhDTCuTOjVLLSg0kU~s4nGyM38aB-h11XqzhiN3Rhaugqaa0qSCC5llOx1zA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Text On Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.300Z\",\"updated_at\":\"2022-04-07T16:01:58.308Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}\"},{\"key\":\"03bebbe3f0cbcb7a299cc408d45d54d26d22b67e\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1324\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/MXW/TC3/pR6tvAbbGiPFv7F8/style_thumbnail_57.png?Expires=1650844800&Signature=Rs44swuusu2BE7N3IDiWYR6oRfueMn7N4q782lNrrfPK0-yxqukJQN5~TO4U9z8leElqR1~4UKDkk6aHA~zbxpxiA5iSNUn09RGz7AbHBGjL4v1UQ5e84SNRM3lZmCvL8rBfSohQjIEseD7VuQ~cD8YgiT6AOIehMYOVYnypf96TDKYsRAy9nSmJ~48iI4OlntLqdy4ANgN6VIHmpEPjx1-xmAogFXan5uUhlJKedug8zOyHBKJqMS9lR-lGbbKkhD3-B0P-49Uc194J8MMRf~EPnNx97M9BRgCnOrk4gpE3Gm5KyI1UCYcBNSRLrDVKWAzJyhA3lqbFQDcZZJG46g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Text On Secondary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.228Z\",\"updated_at\":\"2022-04-07T16:01:58.303Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}O\"},{\"key\":\"66a3df2c10443d6263e5b901d1d7e72862f5cc74\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"405:1626\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/u6p/V0a/l4s5XoqT4zpyBqFT/style_thumbnail_7.png?Expires=1650844800&Signature=E~nJfUyFqxmnjN-zUwdRm591ZF9iQgHN6wu2Zld2fYJZLrMEkXPnMVMaTsK3gY0s2eDvyRyaWC6ZOSPz735JKHj7tqSRbjupksrgr6ab9K3PEFV2qaRIrgJV~WZd7VKRPktyYni7e-VI55HPhJB9QbpiXKd3D-sUF00ZENC6iz0ukGn9ZGmA8DoZGQwJVvURllJ-AbNLhUHneFxQ~rvf-TZlG~0Qu7IrQwOEyJtGY0BKxaUmVK1D6ZfgG6F9RkfSixJguNOSjcMzJFKmrpzgAQ2E9rXnLofGiGrDx6YWRBH0Jj7RiTdo1oLKDQm65OEjXFBpO4PaFZz-OnAnA-V6xg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:57.943Z\",\"updated_at\":\"2022-04-07T16:01:57.943Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}u\"},{\"key\":\"1106356695b7c8414cbe1c13ad79fe2580f33302\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"405:1629\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xyO/UmL/OwmQikfCYD95BMwo/style_thumbnail_6.png?Expires=1650844800&Signature=EhDiDdTIO6J~eLLGDVr6YOWC8f2W9syYAzTPkWf-muFdC~X6-m4ZqAxIg7tZZ4biBB3En8JRz1OLt4ysGDJfRwTV2qt4VqsuxKxFa3WSiShUw9zqK~eKzHLZZgo00OueELmp7ocEtev~17xKqGiyeUDm5s0IhL1qjoxEpU25Zp1xFTsACJFT~15lLr37eIMhAcUKy99Q~uVt0cHNZcf0lgYWXbRAmlpEadAie9Fp3m4zF7QZOK15JAQe0bKOwrIjEvWJg9c6speXPTY6A9Rf9IMY-HSO~12X0joQdxNUwlOTUFrot3UuZ-7Wdq8pTcoPzkLOH8E82pmnjHkH4n4pBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:57.937Z\",\"updated_at\":\"2022-04-07T16:01:57.937Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}|O\"},{\"key\":\"b95b5518f8ed0fda6d8c0410dd4e15e824bbeed5\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"405:1628\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/gaz/1Dk/kRLOS4WPthdFghol/style_thumbnail_2.png?Expires=1650844800&Signature=AdHM05c5Bf1ikD~bJEyWCV2q1nnC-8Ksp0fQDiJ8GV2How2dMTB86YAo90rzcaSLnxM36Wv8l3hN5hF6xSCX1hC6~7mog3wHePMfQOxwh75f41S1iUHQdFbxgu7ApF2QYwpukoYpd2zDxIK48hs5wtKcReBPsz5xkM69gNH98O6qS2Dorferl7QNEnm8WAjpRXwFkBri9f6ObAvjG7OhQ-nh6gqkL8I3vQUcIrtGDMCh1g8UudL60Z8NCnUbrn4wPbV5inqbE6idxJ7lkgXuAm5lPvIB3DpkBRBPol0gEdhYHCHy6H9Pkw71d34H9N54habl6N~YbwksyvPS5DVkyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:57.931Z\",\"updated_at\":\"2022-04-07T16:01:57.931Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}{O\"},{\"key\":\"ed651a82fce628ff05d654b9c6c823adf6c813dc\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"402:1795\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zrt/6d6/nXNmJNkQD8Yj7J4q/style_thumbnail_1.png?Expires=1650844800&Signature=I46o-y0-kacxDPxl-P7LvWnzvT-MZdy7zBQQgm0Z1RziRQST9oJxhwJiyC7px5uCXozrNQ0eyqnbUpANOGur3DeCbUuhJy~rFyhRfvb1VkcIHOGn8MrTnIhzGY9OPydewL8blPmfiung2UEt~G-lo81V4ngZyITGTPZkHNlmu782FpnfOza6i6P~c1omRbcPiz8S3OVkD5O4cjjQct-vbWayDv3aR691KIboBG~UJjEkbhDIZIQxzHQ00O7Qru0lB-EFCaAN2mDB0ix80Y~BPAG0huZdGn7itD8DnIZDtgUZt9k4ZsynRNgRVTtMRzYuWZcwDa6FBrZjEjg3yuX5MQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Selected\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:57.926Z\",\"updated_at\":\"2022-04-07T16:01:57.926Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!\"},{\"key\":\"c1fad918c767a247bc3a249271f2415aab71d744\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"405:1627\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xgI/sFk/QT6z4jZl597wRhJg/style_thumbnail_0.png?Expires=1650844800&Signature=OSyZLriiwIybLHojOKnxIQmneQrp5LEBGWRxzipH2pwZxil8Yi~sYsIQazh6kjt-4S2WAaOmLYM1P5N77wK5ncuCnueW9WHRB6IUmPjr6S4voGM~qk-gRJpHQoGkOQjSgBdABYJ9oqJneNApdjZ~LwB7xavwYY-mpjIwKj9mpXuUxGN9tiET~4DKhQ6oprjXCvXfVxZmprPGyP5v-KQq0hJHkhFDoEnKeF4JypI-uRZxPWfM0qVFlkMzgVhS0yZGkUo3dVIsOySp2KApjaCr6QTQczNw8aa4isKlFfMIfOE1NHgkLhhuPHNkujzXVkhRQIuuerrbg-l953jgUbKOvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:57.919Z\",\"updated_at\":\"2022-04-07T16:01:57.919Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}}y\"},{\"key\":\"89540db00235f36e707191b6dfe99b01f5e19e83\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1641\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/O1i/G0c/N7QvyTrOlXiE7iBL/style_thumbnail_0.png?Expires=1650844800&Signature=OSmh8izSI9zQ3JZYXUEUOLVFAJHxnqA5G5ukaK2yD8h7sY5hkYHLLnCed0fmuwIJNdDySzH7FLiHunZPqx7jOAWpR1hDVXCqmpojzSqsuO7DmGT5cr~fMwYeRbnqvAlZx6oSw2ikeL72KKOhdIGiD-ZxNfiI934Y5yRTB-~QcUmP4xcVxFas7iKJi-HRDoYiBgZm5ecM9upGq-c5LYF42NDHYT3AiALxcfcUY7UU9jDY02SkJqgBLnh1Znk17JGe8ZgSFnlhxKMSQo-zXqF8HFcKe6IXIyjZ~SSmsGBIJL27XBLb85S90Wiobnkeq0C9FsRUfvcSi~KslsjI8crC2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.906Z\",\"updated_at\":\"2022-04-04T14:04:20.544Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~>\"},{\"key\":\"ef8df15bcae18523a1e9c75ead76484e3946905e\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1849\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xCU/gCr/ZffcdTwv353qnk9H/style_thumbnail_10.png?Expires=1650844800&Signature=BHlq2UFHDG9654SYDCKjRX5S44ENQ6ikRttJPOxOBEIZQB3AYBJzB7guvyDtjy-jfRiUte2PPe13gUyVBBq8WJ~tIyWJKxYQum1s420IwpUxRyRdD0Qujecd~HRjGEMR2XYs2RxiRb7MTjXrZiKbw3T2WKqIQCtVRSlJwNVmIzEF4mNlvuQjBiFR7QLu4D2UhYrk-e~mkPjnUAv6iVQlDd5N6bcRe-mxhy9~knnbNq~Zzex7BuwSvA5jT0sRYwAscnfKrj9E0vBwoic0lgU7hHY4MOAdcrJDukVr4eUZiEsBOjLIunaR54mkERWUQl3uqBnpT1lPiqUwNVa8wi5uOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Operator\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.118Z\",\"updated_at\":\"2022-04-04T13:08:57.002Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~=}\"},{\"key\":\"c20fe0c3743e693164e5960baa00ea19dfc67b1f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1848\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/28Z/7lF/vtRR7CtHSpmMWnaD/style_thumbnail_0.png?Expires=1650844800&Signature=doDg4vYfWUSVBF2cQdrjZthCygpcp89hG42nxYshMK~VhtzjTK4Xh67qyo~xCtO6CgQVE1RQzhqco-NnaAPA3YCeX5LA~O-tIRT6guQfn1IS6MpOfI5goyVx4VcOXaLLvBjEDn7quzqbBBYEQUkNUWXSuQ3fZthFd6NWkx76Db1cgKGhL4aqodEdgghkMFkIblG8V~hUh7mKVhU7ANh4iyAK8Y0mxfQHaN36ViMgFBxbqqdqxLNxVCTCNmRCmF-SK32FWZUXX~GYEHDUwuLVGNTFkmSp1JJZywXnDMUEH4ZDWrN6EWAb9sQo90KuoCJRlZGSDVrc-wq31U6-CBFqbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Numeric\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.146Z\",\"updated_at\":\"2022-04-04T13:08:56.997Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~=|\"},{\"key\":\"6d89ff003733834de9c17cc3a8efc3e3e4af81ae\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1845\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/i2A/G42/XBk9ZLIHJl0r0dlP/style_thumbnail_3.png?Expires=1650844800&Signature=Ask0OORET-iZX5cnNMT5lS7xHU6ALmSv3fhCc8s1~VuG7I2atJYBKPnxpxOGx4kk4eZbsNbnSWpkoYNt4cKmFooZHcaUKJwJHyQH-e55nNTasqNNPYQFpXuYt~SrJ3g-zqEYEG-x-yXs~1~zmNpaiR2dOjEvDv~RE81pq~n1jJJaRsxvxw7j4rjze9chAXWijFDPKcOUsrwsfvOrShn7Svtrarbvmk-9bcTknSxG42HsLqqgieULowp-ACImFmhTamLAO22asUP4Yolhd8NsGLqUu3dyCrxvdaj7tX~Tp0Q4eRu9E4NLulWjXwvMPV0dfusGXjrUTYPSsWHAlQnGdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Function\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.171Z\",\"updated_at\":\"2022-04-04T13:08:56.992Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~=r\"},{\"key\":\"6ccd77187f48a324145f9cf158b2437fb20021da\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1844\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kGt/Ol6/lxI96MnyKxDjWW0c/style_thumbnail_13.png?Expires=1650844800&Signature=VdbZL384afF1wSc0TOSzEoEROpE-bIHuYBkfr-JrfvoFhf-Cr~FGG98S9d7~HagGl2KC1oMBo3NdV1S0AGEIshwWW6lKUywXzYUvfmfmjAnXc53KiV5ZGb5C~LhSMOqQgbriUey1b1rKB~nzSE8bvpyCqffIGbirYtQ~9YAdFvqj01Sc-iu4z464h2SXKKTtTTJ8~lly8-RpXwecKB~qZNzm1Xx~KN-aNPBQ7oNQnNJD96KYqVUaY6USArP2ME2Vu0aqiHQAxiG6cmPJU2KYbwA4whJh5uWNN1ninVfrhZVxawITy7MbrwvNoyBwk~Q6oKhI3UFwXEy2-3cCwL6UFQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Keyword\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.126Z\",\"updated_at\":\"2022-04-04T13:08:56.987Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~=f\"},{\"key\":\"0e5bdf33f848cbfcd4c6261864f81cab04d02da0\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1846\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0T8/iM9/HJSNLlpQR9F4bEmA/style_thumbnail_5.png?Expires=1650844800&Signature=WoN6fZZ96fQ9qlRrwIKshPe9N5zL5yiqTQor2SB15QEOZ5R3MrOrzTE1HOcG78aSZO1D9YbYHN9oIYtyVSGW1DLu7TJB6U3b7bi52lGbCu~KzvJDDbBbUbAKc550Sp~VZF5wUhytTGjfu0vGoQGwAaNyi7vIpHe6QJT9JXUNUBIUmF4x90-63he-NHMJPtERskdp8PtDl0Fa-mjEQlKf69PTtNQIC6Ei2r2n~Fx7CFfMRZtQWzXfVKQ6vTHz89IieAW5-IexY7mGFs57RWJM8WST2Sh7qfCGh3pT8dV7RBzvoBMdaqtOlTsmsShsd8LNg5HKFp~EnEnRfUiCGgcpVA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/String\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.136Z\",\"updated_at\":\"2022-04-04T13:08:56.981Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~=x\"},{\"key\":\"0b5057da0f4b779ae6ed12d92aa2254314ccd42c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1847\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uSl/xN8/nWjDNmyjlBue3DQz/style_thumbnail_12.png?Expires=1650844800&Signature=GOZ8JFm00AothknUAAU23zZeWXNfMq~gSMaInmiYCyhJi1-1QauZyStYYmJAVRU-rRgBh8RySHQIUzA~HbT6~sjNsefHGrBs55eUNMIJA5rlp-PCism3ACXFP7UCsvypUS9~ZEFdG9OCNTmhCG1xFZjmfy89NCYSmvGVJo27wbpvGJbJQmirSBw31ToD1g-95eP38L1LQLIP6L3DuZCh86ppj~VzYC7skncjLQQ6Mk9OqLseR-IoT~95oZfrivXC3E4YKbJogOcVxYYU8iKc1UXq7xdfVj42vrWKH0-c72eJdd3Q~uM2nMXyuQVH-ziLMPT8g96-9YdElrUCS1QGWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Regex\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.204Z\",\"updated_at\":\"2022-04-04T13:08:56.974Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~={\"},{\"key\":\"082e5844515c3269031ee679c886d1e6cdc3073c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1839\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Rwc/kFf/4Br9OCLpoChuUtvY/style_thumbnail_14.png?Expires=1650844800&Signature=Abp-JYaJpvVk8HTP0XoTvqT2BxIvX6qHOyq0fuqof0JDEaKbpUv9n~AiuEbiS-ougnVp7JuYivFrvP4FoM-lPEpnRwMjiVvmwhangHckbCEHDxYIFNVLhoWIfNU~HnEg0cY2ojMjJ4eN3fNvcSBUJ1WrnF7FLJRhmmY1eH8fl-1j1W-5RNFnUQ5A06QdRYWaTvw46LZ~BFFbFrhvsxr9HooRp8GXYirC2C9nlDnBWnYB5XO~uYNyBF87jurzI-UvR7r0GWmTbWfb~yDWsTX~NbiABLYn8B27n~feu7iVi5uwOMKsHHfdwg7zRHFSO8I4pSCePH~9hilPR6oUGgaCHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Normal\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.141Z\",\"updated_at\":\"2022-04-04T13:08:56.967Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~=O\"},{\"key\":\"cdecdfda76b077e0668199e3c2f74fa2fb592b0a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1730\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/FpP/Hb7/AWHvIY37UPSiuCT2/style_thumbnail_20.png?Expires=1650844800&Signature=QGNhmlJ-Y8LdRTIZgYRYBkSN8-~7kEwJgWWeF9J92zRrNXmrkDngcZ9~FxsHOOGPWhSfx9LYRo3uY6JDotjuXOyT07R673GRy3539RZjQuf~YEoNln8LxDplz09GyuBvJOWgVYAxuXkp5qVl8jbejSrVjP94Ll6F2IH1~GNx13yL0hOs34rLD95qhhr0lDeCuTh9GGKNO1vJiS4tenSy0ASBZMk7NMtrylyNyVNKU4pQAvKS1j3Q0~nTq1Zp5X9Nra7t2XK6SFYHuDa5zeKUpglIIsmlmbhM6qBBfhSLzRgz8nZQX9AYoP99lVlRd9noZ5JD3rOow5viitatS65e2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Muted\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.936Z\",\"updated_at\":\"2022-04-04T13:08:56.936Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W\"},{\"key\":\"768e016e46ea9ec6b62b06e907ee49160dae11b2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1646\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EZx/QCA/usfuLBeiILxSV1jD/style_thumbnail_19.png?Expires=1650844800&Signature=XarB5LINquyKlwbvR0rkmr2afEvszFqQtUp1msdkZ3Up76uMGUo3Ww~PxxEXnU0MRBQPNceVPKD4LieI0xKbVbDNGvUNcK60kVhwBOu2AxIC4ciGyFLiGDL8hEkXQLOzGqpZ-ff7jR3WqT6t6-r4jGlyDZBOK4nWk1Axi-qHdcyQD5EsxECRqwARmyRPcFNLiHmtxsIM~rEkywGcUmquqFEy4~6v11lzf9~-sWRxd2FF0BasuQ-n-ScIhfHcCgktTfmVhjhyFlydgkq-3hzWcilKNPPzGim-LZyTg15zosBFJhJRnoVakU4UHfx9BZLDeLLs3cBtYgy1bE9bfOeinw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.932Z\",\"updated_at\":\"2022-04-04T13:08:56.932Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~M\"},{\"key\":\"838bad4394aee22fa33f86d2c2d0776dcdcee982\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1724\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mKL/JJV/VkClp1rVVlvu3WDX/style_thumbnail_18.png?Expires=1650844800&Signature=B01k89bUpjiqFHar1IISBNa5s6qCaBNw~bSikP9kceTZaHOjjP9pxZtuLnnd1Ih0ce2yHCgE~xkPEmyDo~2-saMJ8cTmULlxz32cwe2I2ZFSUo3iNcQcYnfKccWYvcpLd4ztwTBlJCF47hmhwmRXTVR7x0Dw-ocZ6UvDUSLmbLBFOvysrt3LxhZNtoQaWGscIPUfq7SKpYW~BoaHnoFCLuLJH17u5lQiQYEYC~mBu5G~vwh5FKbzpwd~rWL9G511yx136biqM3jPwNEcrFK-x2uTbZTKYnBgNCiOJ8BUqOCNWVRwQ7SBWiiqMaYVO-8Ketlz5BVcJ6AVH5n4PtUoFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.928Z\",\"updated_at\":\"2022-04-04T13:08:56.928Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~V\"},{\"key\":\"780115171ae4abfadb7766f22becf85e7816481a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1723\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HI7/JQl/lRWHt5c5IWVBheV7/style_thumbnail_17.png?Expires=1650844800&Signature=EqQ4BrNeuOVbbmFko6wdyzsMEGYybPhaCVsj6c-Z0q-9D2f986HgHpd~ZAxxcy348gbOFSduroffbhtWOWahkJsYoCCJCtXkZuMSX8A7easdOnH9Il5YII5ppGV4K4IN5c~vNdb6HP0goVbkIQ0YnzIK8P8uq13inL~egwHP3jqzZ9tvABINF18ic474D78jCMtDlplma2mDmM7efDBWmw98umiz6hu0ZX6qWE~KSoxLq-Buh2RYtJIwOuRcJV-pMY6xEkk8lf8F5mLUHUtKcfxAcNKD-cuIfX1OOwM-HwODjTAnNfdaq2ZXc9nKx55I7jAMcL-wCSnlXhlf7DO9xg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.925Z\",\"updated_at\":\"2022-04-04T13:08:56.925Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~Q\"},{\"key\":\"55e577010d43988ab417e18c2933c7e0cd6baa19\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1725\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/44x/ROf/pIwzu6t4aWprseKB/style_thumbnail_16.png?Expires=1650844800&Signature=TbZ9uLH4DLt22JgiDOoEfCP-PsMjC2pc9pD6G7blAx6QexyQSkV57iVYWHlxMuBoA6hhjdOs3c2h0vK-Poi1lA8O0TrcBnd4pqoKg-jEYSHs3dzS746E5Y9teOHadh6ArCHEA07Tt659u8pi2BehBlUw2OPbVyGqswVk0-qyAnKYNHC4cGr-X8SKr5ERy0cN1kiYHxXmGfJYq8sXrWi6MyJFc5canQt~O902Ex-Qw7ONv6Kwu29Lrjm4FAJENutlTJAzGVlHqSeI8AF7Qi24rhVjMCmz3ku5tY~yW16-NtVsXwqTvTtMdd3ymIpkQuBk3snVwSFyW540-Jn3rsk7QA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.921Z\",\"updated_at\":\"2022-04-04T13:08:56.921Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~U\"},{\"key\":\"89017925b9ebff43037610060be9de7cbe5543d1\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1653\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/LCo/MFb/kTDZ3uDZkrDdUPBd/style_thumbnail_15.png?Expires=1650844800&Signature=QoZ8lg4ViuZsQ4OGyXHZ4AxP3m0tr-eDMO1nuABvR454sTvnXsRfBSDzce9VRtbmPGaF9QzSjYNsn3jDO3jdmeXHWk7tOeugWxBbjW4bh-hC4zSrsWeZZlsLgEMhkRhZSN-aJAVZwB-KBo-SCU5XUkiNn9xOnwXhX-myBr9oQwnxEZ5jFiZwW7zSiE486fFxCr6oEl-~85vLEfC8AfXx~87p1ayz5XIppqw64~sXOepAXGSDKwTlbCmva39ENq96Y9Nb5cLgxAeKBIOBACB-NPhNxQcVF5BLgs9E4bYBvWsK3-iWLQPLdjdTrR5h2liT58mgeu6LIreOzKjmk3wVow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Error\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.917Z\",\"updated_at\":\"2022-04-04T13:08:56.917Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~O\"},{\"key\":\"0430f389fc2306bbca6ee520309b473b3e4ad042\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1644\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/P63/kTA/VSfDN04amMmD7iUs/style_thumbnail_11.png?Expires=1650844800&Signature=V-RWPzXRdVi27p3sXGiThwi5F6Ui2F~OpyMMUFjZTteAsn0lAbaei6GA5spn0VNP7dSGcXGtV7Kz2iF359lV47hN4DfmOJBzntHAPmebf6J9HGu2RHs6gSm62CSBs0GQwyul7dwT3w2Ypg7OMFvJSg4HMBuGkj5j0DJM~kkVIqznJcFtG8t3bedEnj2nlBnPHgivsUjOJPWvWUGHd4ghwGwLkJA7gfcxy9jlCC~uWMXHO53w30tBZ3ao1o5GmwTD3Lgp9plcw3tPVDBnWTAI3PlXP90D15uqfZfqMWqTpnazzIS1tRFfm-uxfzfprbTCsWlYO5Au5YleIfhlC73-eQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.913Z\",\"updated_at\":\"2022-04-04T13:08:56.913Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~K\"},{\"key\":\"f3b3cd4f903e80e82c7835ace60ea970b15138bc\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1645\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yff/txp/4M5VXEDoxfEylQZw/style_thumbnail_9.png?Expires=1650844800&Signature=VeUmL56ssN2jRB7EWrkgd~EwGwsOIqgEON6FyUXRlRFERuFQ6t5-~Fq0X6XafFaaa9L8fPsMF-2WcI~IoJ1E87m14VoP6LK7TPJYooX8q12XiKWpu0mEVvqT0VU6OT8hqPLgmKNd6t4Iw5e63u3iZWr-8UwvNaoVS37AVmttTrEBz7N8eW7gkzNR4OldIFQmJDPeHGyPrhtq5PI-pZUdwFykwFWwj-LJXD4vuDkzkRs2c5BcRWgsOR3Z~f8GfNmiVJSqUEOeAMHagqGt2dYwANCDddoeQnuJJppNLY0NEm~2Q9yF3tpL8ulDOC9eU6dwh5aKJ6CPjmcfc0uGrNCSZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.910Z\",\"updated_at\":\"2022-04-04T13:08:56.910Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~L\"},{\"key\":\"dfffd3e347be8c787f17ece5b581aa81b6ca25a0\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1647\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/D2F/UdS/HGYfsL8nfZNEaTHE/style_thumbnail_7.png?Expires=1650844800&Signature=JMVhkqxeU8uFisiaCcaoFqoV5oceAu5HI~zXCXM3X3zxjGStlGEEbAOB3svEonoPXqJG2U2T4tx4iFLDLEGCuoey99lkfPI-plvZfmCb6CYyU7qMRmevaeskCA~b5NyF3~ubcdrdKTwkEp5Ef~I0fe-1PRuFcEqsa5~c38afXlaz~cwa0WDqXrQcEJqQIYZRWNP1ZapYnB8bEo7uEB77uHOIpFVXDIShpOR93Dh3QW-8g6sRrmjAawFTVC71tB3nR2YAtkHcHjhk3jIkdnZ5NsI4axT10T~dG3iXy2kCn1cXBi5jFpmVx3yaH6zpXcRr3HzKAjTKokb0XHAC8gNUTQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Highlight\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.902Z\",\"updated_at\":\"2022-04-04T13:08:56.902Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~N\"},{\"key\":\"e1245e0a166ebcb0c9d938a45fe7321cc30ee3e3\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1659\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vet/Dky/SnBlgiPP1cGf7g4D/style_thumbnail_6.png?Expires=1650844800&Signature=Y96jwi3~zWA66Wl-grm0gMHkxZZkfH-GfJQKeopAEcI0kXYHAHyeMSyXmaeJaZqcx4road7YTxLexNycFDUuBIPmLUtqAEZkJR5Q55-iWtLflZqNOOMwVEvMAAogkEHzTErQh2blwkDNqv9gIhi-eOa9XgEMCHrJUhit4hQIuZsww9hi-RHPI85p7QGfTl9RvHODDNm940N508DGFKhCiujXw0d2AkpsFpTwRXSJEaMFeXDeoPRdtdaIsNuvWmdiX1jyuBYStxp2kR2j-0~mSEQJaouFvPNpFcxJ1rjwXnWHuiuuTw8lc4JNCUtE0FAIyFJfYXy0YRx0ecHNlgQ41Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Warning\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.898Z\",\"updated_at\":\"2022-04-04T13:08:56.898Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~H\"},{\"key\":\"c3013a3a6394e0633bf53fb98d9e67f8bb4d111f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1642\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PHp/pja/tlNrT2cAMiLHBkwX/style_thumbnail_4.png?Expires=1650844800&Signature=aeDDmmGUA~vpowESSm8ekeIjqk6URcjEv-ei2AidlPv0zQA5bw-nnFtZEUdMZu5rLEYVWQEktytAMAIp5uhAcKGXAv5uwFEbaKILJiJIc~jnkBe4zyflomBDyvIdKIjD5lnXz2sU2pDcFKIi44XfWSbEAVFh2DmwmaelTevBDoMCK-U0-yLMJB2nihVqXEYMz3euyaYvIqED4HqMLvyeaUVpcjglG9c6cJ1gM2IAJCHqwV-QBddXdDP7eFM8~FtppjUdi-f~KUanJSmuuVZdveP3TI0r~JXLYf0cL8VlMHp8DuiLJVvcFoau5e~ieVAUwHOxFJpll19CJq7TNm41zw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background High Contrast\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.894Z\",\"updated_at\":\"2022-04-04T13:08:56.894Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~I\"},{\"key\":\"ba05d53d05254176d214ebd016d3c509bbfd032d\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1643\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/o3n/zdA/GdROwqLq5ZBOE0hv/style_thumbnail_2.png?Expires=1650844800&Signature=BaGavNd8UlUgbJmMofK~tFjXVc2KIo7J1cnoyd4PCGSk2Npq~zKXCRBD4POrDdfEeiQVbn-8u8yhMpMZQHA59mLTBldoyOy4IBKQ2Ohe63UYdJIMO9wEb0ueGYuTKxZPIwVptL7~eXs~5ZHUdbFoF59ny1wUu8jr8Ly~jTfmDztAMHbEAP~TPjpibSCUmBtgjC9UGMvUamR8eMN-~LflVxoLBqM5AdwhbBtKXVfU70cnTBSwlNKyZqUnxEQTanFldXU2gLBXXYkCmXSsXvppHNOSlXUZZ1vRR-gZKXIGimggTOW1mA55U7AiLkC9vEK5yD-c2dpV2w4kQOPGIRokLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Regular\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.891Z\",\"updated_at\":\"2022-04-04T13:08:56.891Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~J\"},{\"key\":\"5e1e99c8d5afbc011bdd22de6ec05d090543ab50\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"340:1665\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mZn/AHl/OPkZ4dAEkUKMflp4/style_thumbnail_1.png?Expires=1650844800&Signature=I8Px6kh32RNKX4RwrZLFLBUerXq3CuSbP20dUOq5fwf7ij5Mznzwz-i7dJgPkw0QljL0QFHJ3nK8wkairLS9kseaO2miahNZRjsoN22vy3RiIiY-XdvcEecXADLWuCwZ8jd7w9nD3qOlz9~AZvk8ghnGlWRgV9tefhC5825hHXWlrt~tP9QT7G3WjSfaoMxiDpR6vkITgl1iEJdGoS~Cc2DAqTINums3zMdvHmy4SDx7cpQa2Q-4CbPgMstbc5qzASnyQ7SPN1cQanpuOKm2ZWuRGGe54WD~G4~1VpNhxo1HwS58LsYhrY7RYF~OD1eb4vx~YXawHbgHL6rYdAca1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Success\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:56.886Z\",\"updated_at\":\"2022-04-04T13:08:56.886Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~P\"},{\"key\":\"e6034bcfdb11fedfb2d0d8d89e0f44775cd17d16\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"56:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3CD/GfL/6Pw5MpypxpUBLCCf/style_thumbnail_0.png?Expires=1650844800&Signature=cnAcKMkPRSDgiGHuOIZ4qiUSoYNbWHp0mENAnosjjNVw1yZQOTg534jWHlJCCIv13UIMWKU7iAgpZ7RaEgk8yU~CWZpx6-6Cw8Jw0-uyVAqDSy7X4EJtQu2ZWQEzhOT9vj~fRu8asr98JyR-rmGFVQBt~iRa4~GicHBGuQOq~2b2OHWBdwYUDlpKjSxXI~X9HkjglhPG5Zv765OYsY2MsT2TtaXQHm2EYCIAuRqFNM0p4LNwu0khcFD7Q1rFbcb4b6aJ~ZnLuCSARiaLK55I8md73PWxBO~82nhfyqQt6EHOATkVNDd1mWNR1auddaXQCMdBB3tmxPa23Yo9yt0RMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-24T16:56:40.445Z\",\"updated_at\":\"2022-03-29T15:02:02.116Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"RO\"},{\"key\":\"ff8c8d81b7c93788ea0247558bd82e4882e49405\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1486\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1oW/PPT/dANuUx7qAWM5eIcI/style_thumbnail_91.png?Expires=1650844800&Signature=AEstlX0xSYW10oZs~pnWM0DjTM2J47I9AkX-UOmgyiX2wznOQ1veQ3bid53mJif6Uioe0gwXwBkd2usg85dAPqp0kqMp7GFMRLugZVEBuvu9X1sF92Jv9JnCExjgMIFn4kV62Bm~4gGEEIXMna~6YZzzzVAZBSwAo5eZ5U6TsSFREu0sgwynjkuLYNg2HwvF5dFH1bgi011ofEX2SpbgJr56x0ELuvgn193IdxD9ELUv0mZk5dtkvWuyIgBBFZrZEzc9aDDdcD~ZoxvWOWeAL-J3Oa~nC~hn9FnX9UGz1BIeF76hCIo1EUydc9pauNEdWox2KLkuVvrZQ7HkHtvPSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.566Z\",\"updated_at\":\"2022-03-11T16:02:18.246Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"V\"},{\"key\":\"fde13af11696eb0406383d8c7991a5d0ee3c8997\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1519\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ags/liQ/hHi1iwmFKuXXqyKB/style_thumbnail_96.png?Expires=1650844800&Signature=ccHumx2bQTziXKtmCisGxvp5ckdccEpSA-iSspT0qyI1Uj6bMbtBhejit-6lpZnRxeP3m2mvz5b2cPCricIUJqufYLY~RE6x5PogcD0RlROShUWgfhugu2EBGZqVfAVAIZIevfQu-VLhwJrc534SSf5TAUKJz4Tk~~5HgLzr5G4gQxQ3Hnh~MBGBEnOKdTNAObxSq2D146bCBdtBu6cP6Z4eJVQhsaHwyv-fJ-Y2b62OO4Vq0~KQd5G9LV~I7YH0PwJ0OP1KBYt26b9vUAslUqPGVxx0m09SgpOzoorprSxGI--0I6fgo9QK1sIn4u4iEmeG~FRHeXqhoBdJhnR4vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Info\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.592Z\",\"updated_at\":\"2022-03-11T16:02:18.237Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"]\"},{\"key\":\"fcfb439eda2d0fdb1ce6c2bffe6ea78306e23a01\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2396\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jkl/g8Q/HPOyGfOwFBgxoksR/style_thumbnail_98.png?Expires=1650844800&Signature=P~N2WTaiyqNpgYnfw-3jItBKWzGkfNFcvVAwYfzuTMOqasmg2KEd3xwc-xcLRYLYhtb5PgzOii36agbHgm4wQ8uYzVLhfMzWs2wM3hzpFwDzuflyrm5GktWT2NUtPEdkVEU9Qf-tqaTFbBOtyTMJOsQDi9~lV-OcCechC9-wH~cbVgCNzO3tUMxJJyr~EI~gsir2XZaZj-NLwk3v~d~pXfGV4OHRg6J5I6FEtyIhZ0pS5DO4hdQJH3DAlWb6B9zUlmoVsSMxNXESIa~-XgvZQ9iryNmSmrejUlpwaFjnb36~35V1l878ZcM0uUi83VlgF~kwEGbUSZnPzk55WrDJNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected Low Contrast\",\"description\":\"Text color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-17T15:35:46.602Z\",\"updated_at\":\"2022-03-11T16:02:18.227Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"4\"},{\"key\":\"fcef2ab05063c319da1be2e1bdd1a091b646e0d3\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2375\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/B6O/HVs/gPGhiAtlJFR728k3/style_thumbnail_99.png?Expires=1650844800&Signature=fY0d1E7v1BC4oTiPGIREwJPFkJNQaVZVFi8HWr-5twWB~bbOekFQFJMjMaEoNKRzsX0IkF1ZINRo1wKWE5Ljx3f8hl9NaCaNswnv3XeewuVC6UfvOApXbQz7ukIt08xQ73hLCU2c8xbSArM0VfIBURyNkXIpY9D-sNco5ei4~h-VJ36PQmq39ev6eAUs2myg2sJj5ZU7unuCrBFOBlOft7Ih-vYtjrRQ-jxDaW0AsP6UKqnld24dkbeJyu2fNX359Y8ah0IKlOh4L5AmHoa45~fCDHC~UF9Qa3gp-i-sHQrwX4jxdbk6Nr05Eiuv3SmnKE1E1YQaL34D7kEnwLUEog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected Low Contrast\",\"description\":\"Background color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-17T15:35:46.608Z\",\"updated_at\":\"2022-03-11T16:02:18.223Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"(\"},{\"key\":\"fa4595a947833b67a8eaca04a73e0e4262fec4e6\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1521\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ZTz/ayq/hDZci7r5b95DvjnK/style_thumbnail_1.png?Expires=1650844800&Signature=GeNan7gHZINkY4gb3lOYzfdFQHNlO4APt3mCFF6gtcLIoNEGigcR6l89SLTag2G-njqp0GCC78tyw2DtDCBCczPtSutqu1SdT72CwfmViOGsZ20xeS26iXh10JvcvN5thUbPBEyqxEZd5iYu~-d3fS01uySBINwC4SDTb7UYyhT2GIM4gJ2i06dwFKtmnLTzZooykRDWtDgPgd0psvSp3M-A-Ppn3q8QHlaNXHUKjG4u4fzXKlDArqnv8i-xmFQ-YVDLREIZzWLL6rxJKanXWsPCn0mxsVg6sO3xBXEPDuuPWXOq5aowlukWZP9QxcJUoUmitV9Y56MVwXV49C6bZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Success\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.438Z\",\"updated_at\":\"2022-03-11T16:02:18.218Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"_\"},{\"key\":\"f720936e5d4d6f651528ee735db2dc3e7193ac1c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2372\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WvG/WUb/TPt7KKwuLIyp57jN/style_thumbnail_92.png?Expires=1650844800&Signature=QiQAgYRj0Yy8uggm5vz8QTbFXuCn5QnIx~czEmps7-EWHeTzBf1msBzjef8j7LO6fTwepdSv16gtQS0MfA7tl4XNWtPjhS0dJObEXEOaRtVIpHxtp6tQIZgXO5gRhUMJD0GxRN0Rn6T3LqChQIQsV7WAFH0jQLKDNvbxjXUKBGD1R6ZgZHnCZICcfpZ9tT2VAj7HYjdJMXNFDBJI2lyWe-94Nijj5ajJY~7CpCcM24eTU5yoV8EKbliEW88nmz25N7rtYmhKHOLfaWtDa~7iR76amQ4mfWLZtblFIt-RfZqwWhqHDdUcs~r3H8YaQy8XbpzvsSLHUBWuP1QdKK~gOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Floating\",\"description\":\"Feedback indicators bg: toast, callout\",\"created_at\":\"2022-02-17T15:35:46.571Z\",\"updated_at\":\"2022-03-11T16:02:18.204Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"%\"},{\"key\":\"f0ae4a74df49e73724abf9008241b6d0a617ff4a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"21:448\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/DuS/Htn/Dg3GIDqqx08LOmn3/style_thumbnail_74.png?Expires=1650844800&Signature=Ss77SFItjbfyl49~zcgwEIjkOoruqplu5Y1Q70rwQffQPlQT2TwmTz8t7CiV2ZcrcRDy3kj1WXSp4zT3xBWvPsNsoxTlEFN95biggxOTZMzd7-3DyFMdaEagndrTEKyXMjDYOdVY9J9DSgHkG5Dv7pzJ~iTtUaLm8sxqhV~s4bacxepVvDBzmouY6zya8rwUosVmh6fZQ3bwSAj90MucJZzDVBGekK6alXrGeq8YNDbRXyHapPRkEztjZ2d6N40Wbx2~E0DYgueynRSug8~1z2p5BgTMFIq6qIaJHYaLvt-66E6doNNRp5rijKIVxQHY4zmRtzbnjYgogTN~G7i-IA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.483Z\",\"updated_at\":\"2022-03-11T16:02:18.186Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"C\"},{\"key\":\"f085f55d821b6c745041bc21970d26d1701bb283\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2380\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3Kw/b3K/4OC1ld5L3rAiG416/style_thumbnail_89.png?Expires=1650844800&Signature=STJ7vFkdXLkh1Aa1-XG4pxZk7GrcdwfOZGjxC0m2h4hEZcrs4HSDylYtSBHntM3QGRmUK5fgvq-g5k~AZRE3XcYeI2nCzAe7GbZ2WH~melEumHNOUrvhtbhYoxbnWGP1IhrGfVr~y5Y8I3~IhQ0GLuwj9JoLGvVTSQS8rgTW6EagbaCzu8q3KojuwUnCDGsypjnunN4Jn~1VAWZsc~0r8~nk5E1gqjXOLj3uk0eR2jzxec60VVLKGIAKP4~IgRp1DjY4lRV0bGnXixa1BV1SnVBx-G0kjlyX980Yp0fcWUggk5MArebRYd~lfUHWlrNcK2zuqNYAmAXWuU6FRH5UxA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary Inverted\",\"description\":\"Inverted Primary text and icon color\",\"created_at\":\"2022-02-17T15:35:46.556Z\",\"updated_at\":\"2022-03-11T16:02:18.181Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\".\"},{\"key\":\"ed7ff3d8852c1b96614d2ba17f5c71157eb86160\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:740\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tvG/hTN/xoMWtuwLvVVIS9t6/style_thumbnail_70.png?Expires=1650844800&Signature=A3lbTLxQTlp6RQbOeKtx15QKgXsIwo8149rQwEbZcCoSd~ZzGxpLil23LPVA56uppD98I8L5vWU-ecNIearizBUSKAfjAVdbAg8~nQh-AFf2za01FXFbFGTbnbqo7K5GMjcJbGuByVOzUHCe2IXdqOn~n-EMHVgMu~XHeJYhQfCuse5ISvot29ALX9zrNIVrMwMnuyh3ZEeDzavPmn0p5k207eqKgbd~rA321lFBbpaff5Ndgyqv6QQBI6NddxKEaBAZDw9CFB-8Gk2GFPitCo6SshczUZmrr7-RNohWW7krQvlsNmyChyANV15DhbGAUAh6Ztb9VFVPOJz6UIyq5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Strong\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.463Z\",\"updated_at\":\"2022-03-11T16:02:18.168Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"8\"},{\"key\":\"e97868949b4dcc2aeab0bccef4ff42dc66f60dce\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"21:454\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TAF/YLn/B81gvprjNPTCLRIj/style_thumbnail_86.png?Expires=1650844800&Signature=G17FuKdoC1A0t2XtSVvLCvb7hetN7QsYFu5QHMIG8vinD9TR~ISdM7h1OshSyEuDcy0GdsnQgkSHQrmXV6~MnyDvZIyjXIyktT-AiD2xgjRS88BnX2056UltK6h3fGlof5yu4RDH2HrM9JE~9Op5WJJ-U7wA0DWLLYK4dCS5Jkj5OoYHifsJUgD~7d4zoyVV3VbxSAXErxSHihKhMpQOnuaD-2W2Nze2MZ6UbP4AhRYZUdhE4oyn6h12wpTMb6Iic8mqrT7F1vbg10RhQDfkAnhXMQo-lES5KrBP5wMMjVRx2Rc1Ky8McrP9lqLXhqi6m19i33yAjgriSsBAnpQxMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Foreground On Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.541Z\",\"updated_at\":\"2022-03-11T16:02:18.158Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"D\"},{\"key\":\"e2e02da9993a4113d498e233123a00de0e9f119a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2373\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yoa/Hw7/MZJ9koCG5KrEfBAw/style_thumbnail_73.png?Expires=1650844800&Signature=ADUznJTuldMbjbJ2vXO3kozGDKELXi6fKdvz2NFGGvM7qTjjVYJoOS8WJ9lAGasl31cDOHZWr95YdvBRRIwyKfqWZIKU7YiskZZo2F4WEOBG~iDiMRwCuqcTxAL3wi4pYViUfcjB9jJYRwBRoPD-QPFuIF1VRJQpYgRmJ9t4alqxjeZPlTXESNTFEYVp8WlUwL~Ls6bRih7UDhxaWa2FDImcfWOwKmHYRAFK~GeKKglv1m3SxumkOCfbf5k0A-R-3mwaoQy2q2kax-A1jSV5CPbiN3o0rDuqfrAlQy1dyrAUzTAdjXv50Qvyb7EeKUcOsEBavosGjcrh4EZgX9siXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Hover\",\"description\":\"Background color for System items on hover state\",\"created_at\":\"2022-02-17T15:35:46.478Z\",\"updated_at\":\"2022-03-11T16:02:18.149Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"&\"},{\"key\":\"e24efa3b0db9320018513ae1c1b305230689fc5c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2371\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TrP/iR6/sB7ay9rXqoHWT4gS/style_thumbnail_101.png?Expires=1650844800&Signature=gXea4BtXs9cr4hwQyP1lChdN5hLH8fLkiYttdDXBNsjDitCGIaJkHH8k1Qqd7JAq5jTvqeJcWbQ0BHUecRVgX8o6mppZa37Brgs~Utx-XHXBUAhv5uiedBs7pk43c98FgElPh3JduaTC2NWelJY~slxa~-opzTjGuOCDXT1gOpta2UhquTUYTD6IxNQ9HVEjIFyaeVmvmNtaSzD-tq05eVYWU5xdxlbYMIawYhvg8uxHU-6HjJWiHwj0fSW5w7qVObBkZE~HqD1zzQ6vl4ElDsOPaj-CiJo5S0k1dpUg3Fuoge4RFSFeLqeXx-spAQKDbVYIyfrY7-l4Tcy6LZSE1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 2\",\"description\":\"Pop-overs (Dropdown menu, select menu, inline menu)\",\"created_at\":\"2022-02-17T15:35:46.617Z\",\"updated_at\":\"2022-03-11T16:02:18.144Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"$\"},{\"key\":\"e1e5e64924837a5449b34b1d972aa6789d021d1e\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:741\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ljs/Jq3/vJyiRVSDRNl6PkhZ/style_thumbnail_55.png?Expires=1650844800&Signature=fByL-RsT7ZTmFsEI54l5zVfaUTy2pvXIFHU3Z8FKR4RgwKD3op2snSwsXf-QZZEJI7XtHipKtMQc8OBPeAy6RJfNtYBfC-nB6~vZ5JjwkQ1CsLY~8lsP4WHrK~DzfAi8pC85EmmI7q9tEM~lhe2iJbvhYfxBX-IbD4DkqyctMS1X1x5c2jj7kvOp6XASfjA5rX0UZLJmefVXYyAhN-7ZjIWmxo9ElaT8VP4wE7luZR7Y8pg1RyAAUSk7v3qpk3vIj97afBrLjwj~ihm9did0QhVv4l5q03DNZQjCbe0fQW0b1-NgeVLFmF9E3~AKdZ-Vyvz5eAgyjNs1UFymsWG4eg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Disabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.387Z\",\"updated_at\":\"2022-03-11T16:02:18.139Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"9\"},{\"key\":\"d4ecbcbaa519daf06c1c61e66c54c6451058e92c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"105:1534\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cSP/Xli/ddwApmHznAnWTKto/style_thumbnail_4.png?Expires=1650844800&Signature=dTO8s4NYSlT1F0QzEDKFvmkcGkAgRK3FbYX6vLWdN99XvmWacD8WJC~UasPjjaAm703qQsQKa~s8o46Tg6gTIiJ5phmkN3GFqWhOONT9GjUvlsC6m6liW1veHA4WUdRLEZG7pF0yVq9OEHQ0BRpkevj8lkYt~nwZL5EU7TbrLGqFHrgGQP7u-DW943yT7X7OuUXBrIXxDcq0P9v-0bC3iSd6A-dLBr4q8zJ7DKq4sImujlXMiMqWTVYPr4zV1EhrdMRi2M2reUWmxC5p0kEIS57W-bmdAxAw~wZx4c0JP7dN9IVP3tuTm-uTi~7FrGAevKYyQtZ~cJ0oYeMHQgwwPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-03T13:10:15.704Z\",\"updated_at\":\"2022-03-11T16:02:18.085Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"CO\"},{\"key\":\"cd9867b6d055f5ea911b9f686b49aac0170de979\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:457\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TF2/5eT/Ullxq0287gxirh9f/style_thumbnail_107.png?Expires=1650844800&Signature=TbhMXQFq7ndgaFzftY7~9BB-Dp88EddxPR5HLYDRD7P-HpEuyoyQhYWWjYhlC-ZJRLjmUggztxGEMwnfdd-DIx11sjzY138IxerhSHhJIf1IgFW1qryf4BAABMqRn~IqcFweRhJ~pB0RileMnnd-UDv-pSKSceY5Gv~cHbTcBOzd4hu4MPVJ-MR0yxsEWZe8w6rf3CacZCbd~Pm9rM2B8TtD6vXlAjheQZAzSgZ~6JwMc1o38gFTBYjH8InCzHlME3Fc4YUzaNOXC5DVVN2GdNRej719h4G7tsHJIN4bRtbpMIVvRmfnSQhhV9tNxVpqIWxs2evO1IF8ZWbM8NjW8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.647Z\",\"updated_at\":\"2022-03-11T16:02:18.064Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"E\"},{\"key\":\"c7ac3da9a5e32f8c3906be2a2f56bc739e792d7b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:790\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/YUx/9Nv/XScyRjW84lpBdbJL/style_thumbnail_0.png?Expires=1650844800&Signature=ekwtIG8qxkYjil8ACLgRhGeXbwGJlgf5w~7v-tG4KtMDYyKSsyF5oE9cNVWNXCc9bxVrpXxIbQlzLJ1SikESufPv7NYtwcTTOeS2rYSYZIA1Ptb8o~ZoKQoTFbSQj2SPXJdwFDTTuvO6H4y2OPqV6ivhHIMm5FzaqjJPjzIgG3HNpPJxeoi-Vo38v82DeV44X8x5WO4f6nU8x3XY38OtZf7Uq58ONvUHd45wHqektV9iq4sH4oet3E2Y~ndZiSFj8kCzPOygk4VuM0cntGXIvZucgVHudFPhU1rAOAUBf3kPaFTg3e3eQ4xRJ4WbdXBK0KWNqQjh-dc7RsCmbyqm9g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Focus\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.546Z\",\"updated_at\":\"2022-03-11T16:02:18.060Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"@\"},{\"key\":\"c30ebe4e0828d4543f977d67ba900958a335ba14\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:739\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ALL/NNf/PEHbpSC2zE3dmeqk/style_thumbnail_63.png?Expires=1650844800&Signature=TYz2GiKUNGnvqc3xQdpAWBrE7t6d9vRg4OXim5BxktM68gHiPUXUzVMIaXJe6xM4xJHQCiX1PX27oVZesePxixUMSYqa0QpEH76~3HGqz5kmXPf99I92~hNxpgkrCR87bGn-~2m9zij0aPty6EALws8ViQNuq2eEU4bx57oSSBySJb8DpyHX1MhUGxuabOn8skyTdezMx2Kc6C8wihA-T-R0sIFi4TdLkTPYabdq4C2SExIqoNAkl31anq50L9N7GCteHqYxT-r~o7gQAUj-h9lgXNDdMIe5~ya-BWy9Mlj-pf3cHmCLGTwmNUtBfW4q0sFv~DW8q2JyvduV5Qd6QA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.427Z\",\"updated_at\":\"2022-03-11T16:02:18.037Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"7\"},{\"key\":\"c2a591ba590762ff0067a3a2feed6fa959d0c848\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2379\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/MOk/Gw7/fMvFah7Lx5kH3sVa/style_thumbnail_90.png?Expires=1650844800&Signature=hyc4awEvIWtEd0AHDzOcY5oqE6gX2mRxBBI4eRDlxJunR2Lebj7Q2ilNm6S5gwiuDoh4rugNibngsY-0p8z22VqUrvDklf2xrzWRPa3SKi2C7kbWZC69OK~1lWTHBu~uShEc3amDuXzw7-H0RuifRiztsNm-BgEJ3S72sWeLf9~uFRgMB3siyArHR7PQNlHoGYFGn0aiPqn~1-JLwkJSGJ4PADpKBU5q2mINaqHEcgESEvylHhHp4PjiU9WFteJCTvYBa2HsN2ITjLsrJmv1ogkmfv-lc8xcTEDuk8lYmrETyZnm2kBQF-dhUzpcgvILYzqtfgJbI036p3Lo4HTa3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary\",\"description\":\"Primary text and icon color\",\"created_at\":\"2022-02-17T15:35:46.561Z\",\"updated_at\":\"2022-03-11T16:02:18.032Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"-\"},{\"key\":\"b8852809f5c770c42da4f09677e086f052b776fc\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2374\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xFq/VPj/QOtyh1MUJ0r8YSi4/style_thumbnail_0.png?Expires=1650844800&Signature=D3fU-4ee-f40ip34rwO6pU3G9ReKe9QTXd7R1DK0VEhkCtQ0ts-kJoo5lX-M68zmu9qEquRY39JuAcCWQDN4LHZJShWn56Uz~9Qz~Dld6pyBwLErtq0OQ0fIvrKXD7Onjnfyo2WNZKolb6YfgYU2a4Pt~KdNwaesUvgKTMy3R0a3~4FEStwjjFgHB2dh9FER3oVy-BICI6imARF7u-S-tqb1g0h6h4RzDLzN7XfTmt7l0bQOvdpZ5A46znlmrR97Kke2aI-G9LhBxLwrOiW2f23uOd6la~TDpI-NxZ1n-z3hJlq1CnnuCDqwYbkMon~ZvSyDLj1touSpCjDoc8uTqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Disabled\",\"description\":\"Background color for Disabled items background\",\"created_at\":\"2022-02-17T15:35:46.667Z\",\"updated_at\":\"2022-03-11T16:02:18.014Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\",\"},{\"key\":\"93093eb763a00ffa7d41127baddd3acd7f2c20e2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1522\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uyk/GHt/vR6vVxPCvZ3df70B/style_thumbnail_0.png?Expires=1650844800&Signature=S6Uv0qpm9cH600v27kKW1dov4ITwM6cVVsoLg8cf-56xaq0~6Y5mcMZ0YL5FETMEWwqnnmKlQyvqjvJsiIZBoYKiDFOaVRPhEUs9iLfNE24DI9FeRqyseCMbfahL8ZUUkUq08vmXVIXOIasVn54GnP8TdnOqfYQVzu91SageV8Mx-gQ1j5~R7RRDAEvFsHKlOFP~YVkDHHWQU9RHhw30eFQBo6UGdHBdBSsgjp7GnrCq5ZdwONKZKFlHRbyPUsgaCU8pqMorMlyz~f-ziZkSbcDHb4mqoVYCb64LIj7Q91WigHe~5O5FP1BztkyqkX~dXTFmgM9ZIEkavrIvG8ke8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Warning\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.242Z\",\"updated_at\":\"2022-03-11T16:02:17.919Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"`\"},{\"key\":\"8f6506a79963d280851a0dd029aafa5fd328513f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"97:1578\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/W7O/dEk/56VIS7GuS4lXL7GR/style_thumbnail_0.png?Expires=1650844800&Signature=gD0B0CjUUA43hcb3cGSlvAFmrTDP77eXwnLexVd0cWApNXn8x8sQk8Jmfy2T5IEiyERoK-r0f7gsRLlSBid5IEafAO72as8xVtG2CeLGblzvtXWANb3dbM3tO2mjmeNChMU5welsBAYP87Nb4~Kzz5hGS5omGzNeO-mW8LU9zgmGfT1IoaMKKxMFV7cUTefyVXVr8353gZV22dl3qphBnyi~FGZtebjRdInkkrZcnpI0P5-N--RGiWL2dJ2QUgxtDld2cecrZQNkkP9SQB0oJ78Q~OM5u5o2dOfFO5UdX~QVrwwhOtqDJT6ojn3RKYxumOTSLINPty8~a02b3ZAlvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Hover\",\"description\":\"\",\"created_at\":\"2022-03-03T11:03:10.535Z\",\"updated_at\":\"2022-03-11T16:02:17.914Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"B7\"},{\"key\":\"8f241e62ad034324f285439556b438e2922ea245\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1514\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fgK/sEb/lRUhHujwHkOu55t7/style_thumbnail_67.png?Expires=1650844800&Signature=T7~L--s86u2TqPIhG~7p2Uhf19yk2bP41vH6LqXTlZnwmCHdwXezME5T0l3IvV77v5I2JzR6Y~~sGecaEECQKXf4Q0kT2~nEmEv888LZ8-zdomoRBKsmIFzxQeZU3fGGsXEq5y7C50W9xBBwcZmBproKHRHjVl6N~1uio8JgnfPQSgQ0Lkf1rrMbNf~7wJAbaba8g7EAeDsjSnXe1BlySi4BD09crRjvIFIaqQdApjOFsXZkF3eF9EQ~M-Z4VV0iAAbLM5VRRvDLfAAeKTvQ3iRQ1Z17bv3-PWqdIf6vR7~7gncAKl1LPO19-Wjsj2cRQN8WVakjWWx7wLsq2AbehA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Operational\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.448Z\",\"updated_at\":\"2022-03-11T16:02:17.909Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"X\"},{\"key\":\"8cdcd2041dc91b70d25309fec1d36c74d3743233\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:750\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/052/XB5/d7nVPyFmUFaWbtw7/style_thumbnail_7.png?Expires=1650844800&Signature=FGkwgxgZ12nVMpfJ9ZGGCkpf0BldyX1sWTWtowwV9SOU-bdwxPU2Y-pTGChGJI~MkLwu5cvUsz1tnLdcHjPSgjHp3zm6AQyot7HxipySog3hziD-t9IgByhvEFhMTBd6~dp~niZvnNtCJy7iuEwvWEuE0cuODWEx9JGacPWEvMlkRkSHB4f4zEzgtC06gpUybnQTNrefbzw7UbiKnII6a736l~dlO529TadDTyvpEbyswMDav7CLNscHiwCGVbK83do~J2bq1wVTKQyU~U0etml72XXpWqWYHqytjEdlrtQJwQjIabf9tLppdHjcTOGK6qoO79qdApcZGR6GgNvDqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.155Z\",\"updated_at\":\"2022-03-11T16:02:17.904Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\":\"},{\"key\":\"810b06a3d3088bfbeb11f91fd97d078c9310de3f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:738\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cSb/37a/41HlFaFPGHuCtPzj/style_thumbnail_77.png?Expires=1650844800&Signature=dCWkuoqkxvxjTB5PfQpSUw3r-CxD1P0yrNP5KZU-PrsKzw74RyXaW2KVqtZX4ld2rTYKCsQFo9KTpfSqf~--B6Vttf-IZ7yGeSjzxEEVoNetL1n4CuaIiMSPJabxgCo18fE6gl0dWWepHYXyZxYVzzaKNadOf9C3JeFkvyG8sUwodwsKfhlyk3j2QXRhf8rMHwwbKCFcXQODRJmXcax2HuPoUhMuxjjf0xrFaH66fzBd1--MStkjf-duWK8RGvkxqchsg8SgDB85Vos5qcqU6AJLId4-rTNfOjEIL4XkP9SrxpaGcblCI0Z-ylyEQvMRARUB1ejvysjDma~IPezP4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Regular\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.497Z\",\"updated_at\":\"2022-03-11T16:02:17.878Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"6\"},{\"key\":\"7c5ad1e5c3ac214a39934a57f08da1074ee3a862\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2381\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1be/eMt/WPZOi4EJLv9BAijQ/style_thumbnail_84.png?Expires=1650844800&Signature=S9z~614eh1M~3QQRbkAltnqpHe~WMrLHznTnmEVap8bvcKNFNPIUz6v6hIBNaZCphn9jnNVdiLmeUwLwj1FIOpMS0nKkHB2jETk5Vxi9VYM9p6yssFGEP2oXz-nw9vYUMpxEfk9B4h-OJdQbMULKzyA0txCKcYbPcHcG3ja8~IjOCL2JcykqHafQznZSoYbR4kyKpKNzKIeOo9L920wK8XmGMzIWNlLKE6xfS7Ngdab2WXuyaJAMA~uYxh~pPJ4irofgvYSX-pmap-EtF053jWneaWHMfevOGAUL--ycbFKTQdk9bh1LSTHH0j0lTT9Tpncw0snEQR~XpWuVM~zhhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary\",\"description\":\"Secondary text and icon color\",\"created_at\":\"2022-02-17T15:35:46.532Z\",\"updated_at\":\"2022-03-11T16:02:17.857Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"/\"},{\"key\":\"77bee09f170937fcb9bd07fd0042cafc9493b2a5\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1485\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/y4C/9fa/pc5ulsAawsKw0pJX/style_thumbnail_78.png?Expires=1650844800&Signature=NlNqzwTbMHjfVgiHtbaCVpdtUcYU50BOYQqTviW6lWw4O2T2JSgBOK0N0144n7NscZPE1aPpO8E1eCY46yzaTwqFO7NyqDti~keV1QvpItPxGnhEsDzjv7RoGBzzWytWVPsrGblnoNJu38BiIYf3V5pK3x6Yd6GvHlbu7b2O8V5TUjhxk6mwKcAzoJH-KoC6B7UHSJDI6nt2h0QscPH0xfLTTmhqP42MPeflR4z6MSV-mXyQtdtma8L4Yrg7txNsNQfVhJQiHtJvhl1-EA7i9MZwDYQvvyu4-uS0Pr1TR9f6ZlLQZ1Y1QBEYsHcmvdiHA5m19H2pxr3Pq1UEOLJarQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.502Z\",\"updated_at\":\"2022-03-11T16:02:17.847Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"U\"},{\"key\":\"7044cf072b617b7fb13094bee8676db3f6ad8624\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:753\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CQu/DE7/vOIRYhlY5gyrOT91/style_thumbnail_82.png?Expires=1650844800&Signature=FM4ykwR2FIwNBKWDQKRRBj~CnRTFGYBgZGaMibaEC~NQ2JJ6uJPGoDxufS0j4Vo8OJKaYWkErFu~J9QYNL3pvdnJtgC7Rt5eSxz2yVRLk~qY68XFkY7rHwYszc4Kvk48Ynm-MdP4-owWjV3~hjUI28~wgqnSslY1zEXBsfeQ0PO7~T7UbAL-dhemOECifHnPqGGVf8~n8IxQ19fVoln3-Oi4In9~0Q0oEb2zrW07yN1km-yhFSCs2wAx8VwcYKwjv-M35JtMxekLl1zOAnI7NA17NGJ6wmICRsCJ3kFk~ks-WaBMR12XYkuaMGioU4LM71k15fAp~Rmri6C2gk6aFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.523Z\",\"updated_at\":\"2022-03-11T16:02:17.836Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"=\"},{\"key\":\"6d2321d7570c9643e048ff3750cd4010dcfbae2a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2383\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vvq/0OT/e40EExLMzUa3qr7l/style_thumbnail_80.png?Expires=1650844800&Signature=BAf14rk4k~jzsHJF8fZXJU96sklzasSm~rFFMeBMoJe-pFaGp0mwJN76p2hBbku61BLhLYXmr6e~V-O~h6zYRBkv-Y7y33NfItwAgNkRbCvTBop9VaRcepNV1OUixDOl-p9RG6tN9gqTLETwV-0J6FMLerHEB7hwPomfC3BiMilC5DV-n7dW18Aw5RC8hoLOQKt0iMrNApA18SBwmZRBkPKxd3AWtrIClH3VO~yuaODbE6ZtQVXjZRu5CvrDZyiu9s7MIqiNGytHeH8qjUdjX806zebEszAiz44yxpYmHkf4rPr1UYK9Gy15tLBBBS~hxb98HGN7hkuTWQbsUOuhkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Muted\",\"description\":\"Muted text and icon color\",\"created_at\":\"2022-02-17T15:35:46.512Z\",\"updated_at\":\"2022-03-11T16:02:17.821Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"1\"},{\"key\":\"61188726761c1f617b0f8ef5ccfa94fff741aa58\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"20:526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wL4/jwN/FBcqeeHih31g9aiZ/style_thumbnail_81.png?Expires=1650844800&Signature=cvdKMJ8sdbSQI-0eeK1dP-B2Uu5dobF4x9ouoDy4jmkiKzduDozkNGGCv4WMz~tOIZI8iRQQCOb-AZHGpRlzGsVmslp8A2AWuOZl1pnJDaiVU7A4n7jFjVqdhfBseapdX1rvrVwmWaTzPSIcOkuehCZrVFpxYzQIqQs1gOZiAUp6TrYrn9dF1kPlC~lZzZVzh7SMwkc9X8LtjAxw08yyX1HSQfzC24vCPHpHURU~yWE6~ERl9IaG2edpQkOKPa0qjJBNcG~~h3JVJw-CGh-prH56-27j1Opx8oVgg1Q9UHNcOoD6VKg5zwcvxUx~vAuReL2jqZH1QwHyOGuCD9vwTQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.518Z\",\"updated_at\":\"2022-03-11T16:02:17.787Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"A\"},{\"key\":\"5578fd8e9b0d1a70a4f1c5b17c10370f03080219\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:751\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/8A2/oTV/Mm5kGdyaiSmwHN29/style_thumbnail_15.png?Expires=1650844800&Signature=X97eJ3-wVQQivL40QQm4H0Fm9kkpP2ECIkwQEySkd2LRbLjhl09eCJTIe~60Y8OKIp-dESHRAqEkApEsd9kc2vWxi1tcldKH8~oMGKVU0jvBSDH1bjjrwD6BpbRNILd4QKzYKDbjNx2UlR00XZaGz1Ll8tNSOG-FnzFITJFud3Dx1LE9cDSGXvbcyGOxGSeJPyuH4UXE5t6OZes3J8TILNSNt-pWP3kvovMNIRXXfz7W2O4VdZCd~oGpZLwm-~BZ8Og8ceOfNdBauf7Nx1oOW1C2wVAMC7Z7v0mnWHHg5dHbQGLULyxvSnGtlCzn75ySp0ZtXMBdBXfSw1GCGkaFzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Primary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.195Z\",\"updated_at\":\"2022-03-11T16:02:17.769Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\";\"},{\"key\":\"55671893da5573842723792aa4a85a782ff2a4b6\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2369\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/urd/aFZ/JVX9b2KxDu6tUVtw/style_thumbnail_69.png?Expires=1650844800&Signature=Bs9irUGiSuGRyk5JNvWQCLXaSaELCMaxKOgx2Rh22SKg01tlvREME6dxi1KCC8NqgTbbt1OqAX3hQ3Q3ePCwD6VOeIwz8S6~oAZLOcgarGM0qfXOS3j7rKVyPQnEOACVT3KDZ2RdePi4xEXACulJ5Zg0RRapT23AQRjfQ~zqfy4gPmXM3xUnODtyGjIkpwqUCCV8JwupgOe0Lxfy1J9y5rYFj7xLre8n62asuFx-5yXkN-nuJQ7eyPAYj7Nw~hMbUzQRr7C4leiBlcUHgFmK5FHY0gvQ55qeLjvn90hNx-Dedhv5NY8NmcknoF7G6UveywZBBDGxjRbpDl2EtbQmMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background App\",\"description\":\"Application body background\",\"created_at\":\"2022-02-17T15:35:46.458Z\",\"updated_at\":\"2022-03-11T16:02:17.764Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"\\\"\"},{\"key\":\"53e82392f306e2264a1d94a81aa77d02b4d4a98a\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1483\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WoN/XpM/yQhtSX1interu3Xe/style_thumbnail_68.png?Expires=1650844800&Signature=LApngiSUk~owLNOmX2Y6FHbi0r53L3M9OdP~9-fQ8WnIvSNdKwMHCJ7aLhHNY9iUYuAqQDa~bPMJJ~khY7r33bXo5ycOhnv2tQzATDR7CNJC0Un2py3xP-ruHcrJUMfkHaTCwf5m-NQNsEGAuCwX~CGmkPaq03CVh-qgBU~AUoi-9FtgE2s~MGoFUdUZ~h1w4ypS9g3lHUqdsNvHS7~HxQj3abgrN14RbtmTl7JxWpd7ywZAtIQUQukEjTXo-zihr9NsTObFdI1DS-0-rBE9NeNcYzav88XsPCvzM4C~OzwjkilAtKbM4k3bB89UzM1RNP4CmEJnI-rMiPgLYe9iHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.453Z\",\"updated_at\":\"2022-03-11T16:02:17.759Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"S\"},{\"key\":\"51575ae710fa16950cf68a55f9d205cc565df79d\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1516\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wnQ/N69/NVCtOAXV2tsoSflo/style_thumbnail_76.png?Expires=1650844800&Signature=JNkB3~A6fiWxckKyJ7Sh4yJVDai0KNNB-Hz51j-Gz4-rywqjpf9nj34ab92X5-6eaPKPV9q-wqeRzqykxe71xa-0dCeKwRhRnCz6jyoOFoGYuIfPd36MfaVl70msIvS4Mi-jXUPktRvQ26BK2dzIhiqDqpgusDrEATsjLn6LW39ymj54gylF74iSxJk9SH3L8GrX5nbIbq5g6DAKJWIIMN91L64DH9Y4i15ab9b-eTvVF7CnRSVIZmIHikrDOYe-t0sbvUNl6wD4T2W4S8PfuwRTDWu2wiapbrgCImWHjT4FH5Jd8aNEZCtyUW82JR0MXXX6LwP0aO9HAALNEVjO7Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Anomaly\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.492Z\",\"updated_at\":\"2022-03-11T16:02:17.747Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"Z\"},{\"key\":\"4b4e6494cc96f9c91a7e8f858d8e75274f16cbee\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:759\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jpz/VyR/GX4LxDkWKno2965B/style_thumbnail_105.png?Expires=1650844800&Signature=WgewhOkxpe~bpH-w78OjWnfAN-S9hMVsmTr9Qi0zwEbYnTUow32v0D5qCXAmbXklyE897Jj3PVEf6atRjHjrq67IiY3rFqOFnTwy8C1EIUi3n5kzaUVGWVLKikf5rMRkT9UD8f9HQxQYdMttJmnPv5Z2g3itIi68vzhKHSkmCQIEc6mB5wkmEtX9cBy8GkjKIu29Ibds4xGJVJyHzSMBh21~kdlRHk3MWx53b-wp3iOYvgZzikg31LzUtOk7FUt3ns7dE6PTQgqZ0VCZ1FHU3N9G7KC-GpTj5ibO0~kzalNvfRHaXXWAXIPX3dy8eWHkHY7KZTEz5gwIYhKZfPef~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Link\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.637Z\",\"updated_at\":\"2022-03-11T16:02:17.733Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\">\"},{\"key\":\"4502e98ef17c40d674fe6bbf80890247176a4381\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1517\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Iec/r43/NWnxsUf16exXS7e5/style_thumbnail_88.png?Expires=1650844800&Signature=ZuQ3e4iIwcEYDrrwWV5kY9z~LWcQ2hLr5sxpa37vAe7x45RCbrhgbPSa5vPY-bZ-EMxFgpeP4mAgCr5-hsgLtSDdZf1N0KSUayjEzfPp3inB1GKz2l-fGzZckJ9HqqZpAy84tq78~QRa6KIUjBo0pSn1pqOEWV6AQhPFuCrpt-m5DhKI73vQYiIH~PzKeojQxavT818tu2BGtwYoqDZap9iKWHGmKK1cdKnuqEmJZ06LhBKak3U6wcXZTJB5AYBIl9h0JC~Tg2oxY9eCArCSsolkL4siRG3chp-eLl94I6eB8LHOUxeAAAh2VnxNjyYEz7O~boZyRwsf5B6mLCYftg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unavailable\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.551Z\",\"updated_at\":\"2022-03-11T16:02:17.706Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"[\"},{\"key\":\"43709081913ea51d06f511c9d1c249643c6b1eec\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"105:1540\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WqK/Tvd/3G5pRgq6kyFctaqn/style_thumbnail_5.png?Expires=1650844800&Signature=c4x1T0M4PIvZyH6RCfFgVnh5CvVVdyCd0DGgqOHoR6U2JO963T-cfUc4fA8~BbYkyWK9Y6wHDO7gqzGJ7bFGRtejt5taG0JgVTlsLEz05its3LOpvHtOIJM2pGkSekhRURSwsTy1Ga0JypiAH1Tt6kOls2TYhjokq1sUJxSnnPLVIGYxU4S3RaGAETOBa29X94bB5-Hyz4DTmENxvaPf2E52wHlXBeWd-BwwuFYerKTdA75t5Kc9Qq3XE-fkDn~NFErXSA80xkfMzp2MAf4unMWWbV1CegwR5AxRoIkQ8pBcNRJ2iqXKv3Yu06iQjc3tEjht5tc046N5I1X3o~NDpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected\",\"description\":\"\",\"created_at\":\"2022-03-03T13:10:15.709Z\",\"updated_at\":\"2022-03-11T16:02:17.697Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"EO\"},{\"key\":\"3e72b52bee16eceb6d79b474edcc2b6c76428be9\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2395\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/g3G/BpD/Zn35PsszEbLmxaGH/style_thumbnail_79.png?Expires=1650844800&Signature=T-XOZ2JC9jTL-6iTUQ8IoC85uxWD8cgSu~GST3~xf1Cfm2r4q6Wh6Jkaizreo-4rBnM-ceIqSGZS5PCJT2BuSc5Sogt359CJASxSWatwlUgcSfQUNy6gbEv~k4~BkuM21ckKXBMyXcyayzP6NkDrKh10I2R0qTo-M4yj80Z2qCXxcgTZhhsbbOx1~8wXgdcxNoOEIUsDJMVp-FRGLaky4bYIT3FNAjRKImP27dosxeZf8kevtvxzp0gQ6KgA23SOHeCocoopupodQPgZOoAczXLiqSO6e6iW0N8wgLn0lgfEbLZmrNhtikvnJlO-nIiPQZc21wGMQUUXxWBDsgFPWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Hover\",\"description\":\"Text color for System items on hover state\",\"created_at\":\"2022-02-17T15:35:46.507Z\",\"updated_at\":\"2022-03-11T16:02:17.693Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"3\"},{\"key\":\"3d7d3eda58f74469135ec6f89bdda10fe22ca1bb\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Vf0/lqI/KHqEkC00leJ3FVw7/style_thumbnail_46.png?Expires=1650844800&Signature=c~s4z0g0kMwnolXZa~I7Gefd9Eqtw7XtH6xzlLiYBwAsFS5hikZRfWlQTnXxsq9IOZDKojYMTTwiGkLxoIC0hBLDnVEIBrcUtmStbcXC8WhU0n-SholG6NcmHatLElYUyt-PlsgUSSIC6XoPpTIdAvD~-C08mJ7VQzNpjSxM6IiPG6wQZo9kYk2saOpbJmqV4O-kebAla42J0Ky3gd8GoG-jSheFQnv85PV~vgDwjYZnXpylz96gsEtrAQ-4C-aLrMYc9KXa6EwJXdd9h1mDkhWKHoz3e3hf0Q9J5n6L7THkMDnoMbbmhIw3h8fmX8ukR1aHtI2Wurnb~eO60MM50Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification Inverted\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.344Z\",\"updated_at\":\"2022-03-11T16:02:17.683Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"d\"},{\"key\":\"3d3c2694d76f541b04926add38f2c210951e0ff2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"87:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bvb/Jxh/ektY8fqmUzUynSWY/style_thumbnail_0.png?Expires=1650844800&Signature=ZZENG6iVURb34bMmIAhjD~FK1K1utw9LfGDFPrsbj1hGjbendFJ23IvlLeO0DFz6CuD5t6iNhtrhK1Eb9cxDPsbj3gu32IMj3vcKoWk4BFi7SPW2UXdaa71e8TTuQG2RA83zuzyFF4RUAYk4O2R-S~Qm1YTspVjfBK6nHKEHwH-02XI9YGHHk77haZnjaGsUc40kwElyVwGYh25dgEVDIx2SuJ1KGkd6mBFGq6ohwwCJ4-7UL6c7rs1It8yDCRGFgzAHOGr2JSvmuCO6q9FliPmprJWdZ3xC0S03qwSLSPhTBXQxNK~Mc--kaxf3dK~iKw-V3wnSTNvGWN9tZk0D9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Error\",\"description\":\"\",\"created_at\":\"2022-03-02T14:32:53.645Z\",\"updated_at\":\"2022-03-11T16:02:17.679Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~9\"},{\"key\":\"3cb275c0202af047dad2652d0ed6789d06b62e94\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"105:1541\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iUX/iGW/xw9EO1vv0k08SaoB/style_thumbnail_0.png?Expires=1650844800&Signature=JFnk5QYQf1GiYsS9Va7oumXxJPHqfjgo9A5Dfxr9yp05c-A5rNZ0a2lNDO29eNC7WuBCLGty-vjv2cWO1cGFtAcIkD1HO4OxE8uiyTPY7~HNwY3FJSfQ9PvqcL4X4LfRpb8giZppsSlLND-cQ7N6ws9jry4OpzXfgOLjO0UIWdOKfCTx5AhX4J39vT0a5VEhrdfrijelzuqOhUFJWg1fad-Qx5AqWrXDgXnZr38KDb0H3DI9Cha44QjGB4GgfqFrdWRHcM5i9kv1qOThXX29bKZoUPJ-hta5bCTcaA2IcF5TU8uLahB8SN4v9b6eJ6pkEEWWmaZczMO4hINd0joxTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-03T13:10:15.697Z\",\"updated_at\":\"2022-03-11T16:02:17.674Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"Ef\"},{\"key\":\"3b66f8bff33b6352ee0be91b265c59c82516e2ad\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2397\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/GLY/ThF/yW9UswxqrHJ0GtsO/style_thumbnail_102.png?Expires=1650844800&Signature=ftZq15xhXmAeoYjCQDbIAQyYAeuP3fMTT08Pq4dE5vfIJiVJ99gHwVsv2WYNZu3EDx8QSlOE0h1-~~Rga5qp72ssfD~jIdVbnF0daYtiqdvOKxcdTGMB7hmksxrBOZhxoGSRaTS3niysU085eJUZDEIlI3hipzV96dmF1zI8vFF3GIWDhtC4yaVRTheMaNMY1zoNIDiVRwCo03GLHfI5YXmhDEN9XsiKEtuSJFO3YryrAb-cePyvrCgJdhUDdKAHvfVeRi7EWM~1VzImE5DHG8gMaiE2ASjI4LP36YvboA~8rArZeWFPd04aEpuayBSXCZfzkPPxYpKIvojw2e5Vsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected High Contrast\",\"description\":\"Text color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-17T15:35:46.622Z\",\"updated_at\":\"2022-03-11T16:02:17.670Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"5\"},{\"key\":\"2b3162830a5c413a851c5c7e6a6eaf22947046c4\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"20:527\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tEa/JVw/J2bIgA2PD2HnPgOr/style_thumbnail_2.png?Expires=1650844800&Signature=OzQCXqqwObPFTn2CRCmlsN1y4ltXAh93ZdxPyQrNdRw7YhLcJCQcN2Xyz8RVO9gjznn7CqrWs~LGFLoWNX~3Dt75WlH~qxwck5sIPCD8IcBhvyoIUCAlQTbtJknwLI20jjsp5jd4B06ak-7~CTeX8Re4hvTI2iufl7UqGDm81G4S-MEyv8lZUpFi48g280VPxNC1dc8pmKlPZjmq98cIo9Ajx3vI~CtqipWAZ7lCriZcOetyhSJ40L13~3uL~H57kOVmD6oWPor0-1XiKFjkbMKiP4lk-8EdXHIBb2i~wV3YSdsgUxbTaKi5lDlMXbWGN5nFATQSh9qJELtohlPMtg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.587Z\",\"updated_at\":\"2022-03-11T16:02:17.641Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"B\"},{\"key\":\"27cdf5f7e9827a030512785f1a2bc27bcc5942a2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2370\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ONS/5Kb/Yyd6LalR9LyppGvP/style_thumbnail_97.png?Expires=1650844800&Signature=RYvAgP7RSxqHNRQObEAL4OyrXLJzlQ8eCGIvwqcwNtrVhsCsR2LXC~LFnZFDdS4lYvjFHFnd6e0gKEqxlQvQH7vvHZh2BpwRAYpoKWrS5JvuiFdxBTSFIN-N6M0DZ8Dzfn10R6WZeW24ZXAiGdTxSjvat-6Ol0AuFRFkZ8eEQC357u7gXmAfv6BoL~ueyt9OwOitqRZxA-2KPFf6UDCJ9Q8SyyDA8sqO-nLOGhe8nmXQst8EQky4LQ9BaqSWrBROabmWw0D2d4nyucUNfXZmJTMHvwlGdLNRPwY~KKwLxriNfP7fVHQdrrIW1sSjbKPt8ntq19eq10lfrbHGtdq3iQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 1\",\"description\":\"General surface background\",\"created_at\":\"2022-02-17T15:35:46.597Z\",\"updated_at\":\"2022-03-11T16:02:17.635Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"#\"},{\"key\":\"2372e673b5e14aced4b97e1561bf0558bff8c0bc\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1487\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zeK/bzQ/gJupHsvxaJnqHjXd/style_thumbnail_72.png?Expires=1650844800&Signature=SNj7qNZCDfm8Ta8uK4gQohJEewozPlgPcTjX3S6EJuahOrntZrMZSvziw-jsBFauuhNJFIu8w072Z6wVEuYjjeqB~LQUhcXUBgWex39ZlDm7K892tPVwpExeCDvbwodG1A4kCL1tFMM3Ivntpb9YEy5AUj8Em3cLmw-BMQl3zhtwXVbxK0pkPQklKtCl9ZIFIS9QdaPXOZ29YMJk4Nhsi6CEBzmnmVa6S3h0TZd1bYggq8bi0HGArwIFVMTTTXPiT-6RbPN5IPMOnKwG9B49wHcOoXi19CvsFX3xfijA5td2vNP-oecm~WYGfa5IqRghyOwmuRstFGSmNd4hTkvy~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.473Z\",\"updated_at\":\"2022-03-11T16:02:17.630Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"W\"},{\"key\":\"22733af3e5edf7196d757854a28419e68b0c816d\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mkG/nWV/oCxWoWzCbhsIQVFh/style_thumbnail_60.png?Expires=1650844800&Signature=J05Ritq2xUEERbJoAK1OWMf8kiXHEBVUS93e60vp0pv3Cm8va5ACuu9mF77DgWm4QzUlqcsfCerbf9-ilQW2FJcY05dFQZmqiBUmt8vBhcZAHyjUhnQmccdxqJH6g5cHOtK3fGo3CBUuCF3SL9nOgQOYMJ5ZLTM-52oZVeiJOuBoOlT7fUpI7j8sb40lhjRfMAiTrX~scIFXPvgBhN9V12kPp4ftVthsQ6R2d67is9otZyn7g1rQlRMoWWRa2IPZjha~CdeX6P~8xAkkPUpX-p6MmQiEclAuo-5c34toVj0igLMSupJvzz9WEHPvWSM6ugyrWreSYAVP~r4MPvu2Vw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Announcement\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.412Z\",\"updated_at\":\"2022-03-11T16:02:17.625Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"J\"},{\"key\":\"163f54464640c21f2201a9d389cc1101efdaea15\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:752\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VBe/igN/2T3lOl44SFqGN6tc/style_thumbnail_62.png?Expires=1650844800&Signature=IzONqpGobaumy-aunxPOqUP-p0BRFOLZIKSNhc7IfWJbEzPjh-DtY-Ybi7HrBcb5W0OSoUF790vmOEwE8Kh3UVkIiZmJCbAVEl1Xr1DHU5MPp0JdZOVpX6yEJEOPqpT0oUFFzUDkYLoS243EspHJKWRh5AhemNtGa3JvBPE9V51Tmtd8TBxcva~oP3aRrEmn4TObrzkXBWQuHmW9rtPS2A9n7-23WvPktRVW6C2e4Rh5okrjrYvzJca7M7DjinASEyJltk6gKjVlmU2mTyCU6X8mhvdGV-qYXz4oTqiafXismwZsGcj1WYn05pm7FQrIpzJVU9MbASjRB-MteyOcTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Secondary\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.423Z\",\"updated_at\":\"2022-03-11T16:02:17.610Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"<\"},{\"key\":\"1626270c6e39616509e6287e1a5f8d517f330048\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"92:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oke/Yxm/UP4xPC4rrAP3iqdC/style_thumbnail_0.png?Expires=1650844800&Signature=PkNzGmVNtfg-e-HvTiPU~XQhTyM49pewZ7O-FbCpmQpDNqPc5bVt6Q6~4iKHmbI9r6ilZ-zgoSmbajdWZHv3He30iOH73CTz4FVwXEdZaanyVDkDsUdI~WmTuK9ahINd~U3aelTwLCGQ32rnmoGa3sBY3OEZoW77KasMmiiWLqjhbDHMpy718Csva5EFVoX2CldSLrOk~Dttz~p1jJwqmdq6WeRJJTp62V9fKujE2-9rZB3FldgZaRU30hvbq27re1EwlCskscOiL602NBwbHK8lCoT7ZiQ5vaT2LfCqmaRxmPxpAHlKRfIRQkxFGAV7yTfB0dk5EZ0FuKL23rVBiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Accent\",\"description\":\"\",\"created_at\":\"2022-03-03T09:48:05.966Z\",\"updated_at\":\"2022-03-11T16:02:17.604Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~8O\"},{\"key\":\"110e28bcce91d802e77f9ece4a72b0928526d225\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"77:1407\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/V4I/fQx/Fypj0AXYmKYpcHvb/style_thumbnail_0.png?Expires=1650844800&Signature=Oh5z~yt~xlXyWQXIaQJDRnayWdTczE-otSIHDqxLq4fCFvfx3wXoeVyWFkTMHPi5Zij3bcbQXwND4axAmXy80m0QtrYicC4Bs8koobn1AvBG6f5Eev2mY2T39D5LpLUm0ZS48CjWaaedar03J54id5CVmWRODNwmjciCf-p0lYj96AAWfVfZy3qOfr8OFBh5ezSAeodAFSG5dwGyiJ5QgdNOys-ynBip-W8bd0hMVbT3saQLc3f2D9rn93Lrl2PH-2y4OHBkSPQAHODnMpZ3wLQiwIaLNgLzjp3kYUxM3twB05iOAy5a0mtAf6oyozJ1Hnf4Khn6GHPoirnatdZKFg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-01T11:40:33.793Z\",\"updated_at\":\"2022-03-11T16:02:17.598Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"BO\"},{\"key\":\"0f9c77cbc487cfb2afd38ac99603de548446e034\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1523\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tlk/iDW/tUIphGM24nOt4cTe/style_thumbnail_0.png?Expires=1650844800&Signature=CjMVSsYW2J33-bfkdqqAuZTGCDnG8TrgFoVfsPqVNmrAahPBAwC1tkwYHgQ64JQGlTUt1WXdZYZWvTqqp64yJq~97mlEWbL8KJHd6FHM7h~1gk~jyOT~Xm0G~gVKOpTvD-PDHeaS9iRoMbRZ-UBSekTtA9myTd0zU-H7yl3fL6HyI84RJTc6NyfrsVvHFIDjpPipPtRe6jL8rUxeqx04e3I4gdb30y1XXdw8CPU2CcQUW8pnww6VtqDHr56pYvcb35tV74XIjREQ9BUyWc07J2sAoceWvG~8BBP~Bpo8LjP2vZJSE88EdIkydtGcYRrRXxt1wT1cxj12A0VtGo8d-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Critical\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.314Z\",\"updated_at\":\"2022-03-11T16:02:17.593Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"a\"},{\"key\":\"0de146a53fafdbda76050b1e380a4c89404c6aaa\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1087\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PTe/DCS/rBSs8H17w30OlJlo/style_thumbnail_64.png?Expires=1650844800&Signature=WQpjEg0magpajIHHpVV9TYRWv9svbfDU6xihX9Lv8SOIFq94r2EhDGUVvm9rUNU0Fiu80qDC1XvtD4C4pJ9oYsvrq9kkwWNFeGl2RXJb6xlPS1hmdts4EStAI4Sff3Mn0pxa7om4kRkHQZTWxaeAZqMOqgNdEYegSD1sMhxVgyTl0FKOPr2eCdJin4lttdmJwgW3wlnE51XbFzoh7bYKH~4FlOCV83dlObfdJyv1ynz8ENBSZoV50igbVL0QyzxPDbk7~S9fMgRKmymqCzQ5g5-zqrJJcb1EV-gHsKag2bNF89p14l8xdhXY-vaGKzYSuL86enqLY3Ykhdhc9oc37g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Text On Filter\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.433Z\",\"updated_at\":\"2022-03-11T16:02:17.578Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"HO\"},{\"key\":\"0d32006172cb4e6464c6f4000f3f76cdda0ebaa0\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ogy/gCF/XnVHCEWQIJAbOlCP/style_thumbnail_8.png?Expires=1650844800&Signature=Zr7ytSZkfsxk~Km730sIgfJeJ6GlotfjTGuAZksRlJjlu2CK07yGvKIbDFNTY2tzWqWgB0mfOBZrnCeaQTg5Er92TksY9DQG2mTB7XjiwRccpsTOi-3s~IOwucvbi3TkUrbhEUrtjPE9wPTDrKpviczob1zQ9MlacEbzCJhZeZjisvAJzgJS~3esSAZ7fO4abk51gmeNmUep1X~ItprSvGVgjnzB0riNRj5b1wmDVe5DFV94KvUqBf5aWAjmPLZ8391YZ8U9dCbvK3setXeM8yYVQ1S8s3~~0i~Zgp6d4joIRydztjdGvTLn1FzQn7Qo5LkLY-opfhyfxSm3pCbPXA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Success\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.160Z\",\"updated_at\":\"2022-03-11T16:02:17.559Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"K\"},{\"key\":\"0291b45b1252422a5de52508f8e77d6cc34fdab3\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"17:789\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6iC/1KL/R0sgbhKq47FqnDhY/style_thumbnail_75.png?Expires=1650844800&Signature=DjVEJwXUO170Q25-WrmoDnBns9zFbNFu4k7Ob7x7S5g8eXLcWWXTcPBsXd82Th1k4wpqM1ZMVVTiV-Ym1dGzaEcrj3DznV3nz-amkIoIBO0kjGle5c98Ye-hBmDF96-Lbfl-6EDxaVdwJlRWG~0PycpVJ~lPorgVtzHghXwb5nu4CRsu6mK53v5MQDVaPURjhIu0ZqpyxgNlUvS9aM0FCMQe4DLg5PePNgm~0HbX~USu8WcqmAhvkxJAH4hvNdex7f7ho~R4wmnSjFOzpLF7xtlt8uFGE77DRIK0NnIvLzSi8TMo0PzSj3dGl~ddG7luRpzOTn~5GXkyKWFPeET5QQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Favorite\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.488Z\",\"updated_at\":\"2022-03-11T16:02:17.524Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"?\"},{\"key\":\"019ca17d13381dd6407c20d22968ffa1ba903eb5\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1524\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cZu/AQP/u4MtTdK3tn2S9sne/style_thumbnail_52.png?Expires=1650844800&Signature=cYMKsVn0kxehK5mBk~JUaF4MxmNRYw2i9nurtLyIXsvfu7DUkxl~J7bJy3XWFyTbX~LjYHZThYZ7Sn8OIMfAyVn9LxUMl6T38UIa6XLf5oiUfq1nCbueee00tUIH8jFHpHmgUPLrXiQAod16650Ho0DHAc0nIpW2Rnrm1YRi8ONbPScxxNZv2OH7Nd1K~nQ82n1QOd5nzW5EvbFm4mJV8Ekrh6MVl42OPZQNsxGkEMcNqpqXnm9yd5P40AewuDtExcePY-x~w3vceh5SPtb-TIWUTXq7esPwrsEBXkSXvwmZg-LFDx2EiGEDoSUTbZoMMxT~1Lh1M4K8zvCEXVvgLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Neutral\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.373Z\",\"updated_at\":\"2022-03-11T16:02:17.519Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"b\"},{\"key\":\"0173c349731be80bc1335a155aae8d6d866f1f21\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2376\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6PP/dHx/MFkiDrjZu3zIYhji/style_thumbnail_108.png?Expires=1650844800&Signature=YBxTUvPnB7Xahz9sjbAOA67wdl6GLHSKStBJiXb9oDEUVq9iiUpLWdDXf014bA7wSRwXN9KW0OnBa-Af081MKnhLvEzD2wt37Oh59fqjzYWjNfQ1JRTWLoezFwQes5wnrzEVRHinSgCSlRiFP~YB1Cr3flftmd-EIEQ2-Nm6FY8lweAMLq4hFhj40Ps6GQISldNhc6wgsC0IqMXcMi85Fd8hxr8bQAwh4~YsC60qFrre2FKqxwMY4WeVTGUmKZxXpY~Q-n0DBxhuXA5u4Silu7880~apLIkGed8i7ft~WtgusUCZ-Le4acqAzGp~8cqKasbo5m3OoJ9285mwgwwymg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected High Contrast\",\"description\":\"Background color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-17T15:35:46.652Z\",\"updated_at\":\"2022-03-11T16:02:17.514Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\")\"},{\"key\":\"08a71fe2424f121b7bf9d3f86ec04c7adda92964\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"191:1555\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/A6u/zMF/KQKwTbzq6IvGA6Bl/style_thumbnail_9.png?Expires=1650844800&Signature=BCBbIvN8KNvMgHvK2SIHq3VoNtuWZA8FZqQp-QBSRmbOJ6hQnKMe1ppb4KRsfYT4YXO-umVJ~tj641P-DQm5hRrhuxqaBKjLVbtQcCpsTgtRm8zn~QHkMkN3ec8hE6E1YHHjgmu1fj7v9maN8jon9~NzSZFX2tj5GgRBwa9nH521I8Di4Qr8CAnN~-YEzVcK~feo-5Y~lhTM8SODhPcZF9wHA25yUFXtXeru6aAJLt5IKRk1RN1mZjt0r-C5h84zbo6AjQ15UFcpkEwlk2GGTXPqiRC7SamJWmGVUFPnQvmBsMOJNiDbK4r2ckVK1Fyjj26xU46lmgYlKMsistwXfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Low Contrast\",\"description\":\"\",\"created_at\":\"2022-03-11T16:02:16.942Z\",\"updated_at\":\"2022-03-11T16:02:16.942Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"WO\"},{\"key\":\"febf2470cab929d771bad64960952bb1f0536899\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1306\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/j0o/xUw/u1eaANugJJrAiRDv/style_thumbnail_40.png?Expires=1650844800&Signature=Mc6EnrM-Lh92H2gTeeW2az89scRaYwg45MpVpTubLjTd3m0OSueEow0wm4htUGLZ0ixDy1DbkmfJnKJQA0saalCAoNyRSAso~LPcwqZkuwgHU6XZDGOUX-bwmLM~xBJ3M-11lpkfyshZnty6zEMRVa9dofTB-rpFTFLf269nwe4lT6PhEG6JGsMmQmyXOeJIxN7E5kCvnfb86obBH2QYZZgc-So9rkXcOAcpi~DdTid3oT1ixdGjRxjgYW1w12XLdvyidQDqIQ3GA-43miummC-x8~PoOkP2~UnxhQK66wCbBfqxUlXguHVZGI-dqPRZ3XeTV3TYWiMSoR~7bHfKgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.334Z\",\"updated_at\":\"2022-04-07T16:01:58.599Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}{\"},{\"key\":\"fd8d29f607936a5e301141dc068fd53c20b9d35e\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"210:1596\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PXm/uE8/TWbssttKQGIkCSq1/style_thumbnail_44.png?Expires=1650844800&Signature=RriFEsry0Qe2hQSGh0GGTtM6SOZaIMMALLjvuMjMN0Ko2KDtqmjunaCsHbhRHBawNKmUVpWUrcv57zERFZ9yYrj~zT~GNrbl33ZK2aT9BSGH5p2uuXnPynyews5jvbmcC5JBuGMdfcy8L-SN~5yim5thUg~kiB3ahyb1sjJfWbKjzGvet2AAps-Zhhc1XgjTLco6Yx213NuAHbGWy5K12EOn0jinU6Wlf--W3PL1qKIxWl4s51pvEnxxwC9a-tNVAPMHbVdZnnDCg53XBqIXxK5267W50dzGecvyB3Wm5e6~ppWU4~j3oZrrteEN0dInIZodts0ezkXn4WrBmgfXYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Selected\",\"description\":\"\",\"created_at\":\"2022-03-14T14:38:16.377Z\",\"updated_at\":\"2022-04-07T16:01:58.594Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!O\"},{\"key\":\"f99e72d5b1b4a6b9c09c1533e766924bcf23272f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"39:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CUQ/nc4/4Tf14ktqlqLVlHWQ/style_thumbnail_20.png?Expires=1650844800&Signature=Tq8xOlwsu1epkVdfkkABNRQGNbtLasrjDWDozTKl-UXKWc~~JeCa0HJqui7SFa74Tn14R7R4m62RTG0LsfBOzUZ0bCEe-vIwDxV8xlyWYvcUhMTkg9sQbvLZ0f1i7vQpKWYTf1cckh-CTwTZ8dnTkwJxugeDJmtz2DzFcqNn47MTGRRRgw2Oh7ikPKcSXZ2-oSMGqJ47T-KBLkPn-4TQMu~tNAiHXgjh~K~UKh~Q2mkHYVQiDEi1l0tZpRCh9SuQk8xQJn4qPn6hRQPIWDZ3UUmuLt1RUfXofcYEqVacMwY8YXvyGfMeWAoZg3Ueb4uZYcFC0GkH5PYC2L4qRlgWHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.185Z\",\"updated_at\":\"2022-04-07T16:01:58.589Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}}}}}\"},{\"key\":\"f35432635cc8a62278e5b6414331f12305134b8b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1314\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Yle/pGR/Ct9O5BJU2a1PiUf1/style_thumbnail_34.png?Expires=1650844800&Signature=J-QyQXO8g7wdMHoV-QcFrfOO20dbB8e14jrdchZ1VM0hMUzjVjQhgJib5a-3kkQ3DPCJd1qircfkWF3B7DTdluvwvOyvZnS7D2H8QaTKlPLPbkvBHG6M4tKuyLI6K-~Nka2qgTiDg87D5oPksSSZZhwVRPTB~ChBS9sSVbET40t6loWNvawdmuAQ2PqHJs-TpZ~gIemrd~j9xhOUnVOkqNM9KxNuA5gpCBRrTD6ew0NDYY8PNq4HqVH9fvtYSLt1MAGutTen4lH1EyYxXpXnDBGYCsBVF2iDM9YzNlSk5wXkc3m6yKPZ-y9IcvUGQPn6W7asdShwLUp3RFN6dqLOog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.223Z\",\"updated_at\":\"2022-04-07T16:01:58.583Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}|\"},{\"key\":\"ee6d71d43193e6d32af1b76bdbb8a17e0e88a0fe\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2377\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/svL/rOC/FlASuQuqAPz28tLF/style_thumbnail_55.png?Expires=1650844800&Signature=DvVoBkSyFzmBQ3G7pwi~2IuDzB5SRubQtUvX2h5h-Luz9dNOXAENffdRbgwiAnfAv2gqVL9NmU4kS-PY91kq2khcBXatXujwzN-H9Vfj7CYe2LHutNw4KmbFqTb0eM6-n586cyXt1VAuBi~-~bQzMZlYqODB9z~OIa1NmtnWwtd4tV2hnkaL8SyxaZjuPQEkxhst7Y3vUaCy6VsK-G4hVpW~lqwBNmsP20LMCJbjN0SDB8uLvp58v94-xRPziA2kq00N74-CTUueoAbEzBNoMU3LRyp2d92ms6xoZKvSsn~6uzxhHx3uMSBjyIMqJ9fpOm3cm7tosrPKgrP2lu9MJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Main\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.662Z\",\"updated_at\":\"2022-04-07T16:01:58.578Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!f\"},{\"key\":\"e093a7ec34b4102b9202ddd5c96aed8bb89761d6\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"28:1304\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Gzy/Uwq/zdZo7BfGsKHeXIpl/style_thumbnail_51.png?Expires=1650844800&Signature=FUxudS59n3ymE4yYjee1eBlmM~6kWvmI370pmvYtsqVct5AJU6FcPbKbZEhyhxW1wcguc-65WcUD4v8Tpy1AFgeQJCxqSziKexLH41D8fDGHXJa~C5O3J72xACPPQLylGuR~PJuhOVrOvvmNmZDgVFd~UZc626HtGbesis65arQaT2fZd6wqxMLkAdqnL-ZjHplRQaSauCRU6Q7tcdOA~qKC9ho6FXbLv5Y88Jt9uk85AWEP55xI23X7rTxJSXGluDYunGEyxv9~8zgQ5BYw7kwC9alM7uzxadpXW8ZF7Ny7HwzCDW0h~OsQOX4gYMkQfqIwNNsq8qO0FdWMhiRqoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.632Z\",\"updated_at\":\"2022-04-07T16:01:58.573Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}r\"},{\"key\":\"e091d8254869bc42a1ad87af7c273f6c52ac37d2\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"31:1323\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ZwK/4Px/1iyGs8JbDA9q7Mth/style_thumbnail_27.png?Expires=1650844800&Signature=NiaGpiTp~hriNocqGLNg~tq-1dr33T65I~tWEHn~OwQjeinlQFsTpKQV~fUu9HoJcPLvvRLwZvWcDRFPLycCedEYHMkEZKACGZiJSN2Au2ztZd17pnq5idgylC2zocRqJdLwIIJAmqZS9KxnNPYuOXpL~dYshG2N110jnso64A0-nze9yVj8SICx8-Ap6jTJp00LbKqS-x8xqfRKvpHXw1BzViLR2pLPHDFAH9x7uvWimqdrfEbiOkP3m~47rVfePSbQ7Dy4haEtkMuD1MQ934RFiO6JssT3kobiYt~pJskX0G7oK-i6LMyIvX1KUt8r8nNJv1h-Ws-u6Egd~hyU3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.266Z\",\"updated_at\":\"2022-04-07T16:01:58.568Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~W!}}}}}\"},{\"key\":\"e00c183ab11374ddee96e212059b47be8623bf10\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1432\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tS1/Tdf/DwplsHzi2al20lh3/style_thumbnail_103.png?Expires=1650844800&Signature=eWS9d6nDPDiauFCOd45vhQNAkWuoYc-Pwr9txIWFd1k9lfG-nFT~KnYJ9ZbZZOPk8Ex0CG171HW0tlkOmqM8OSQhX8aBWgKG51I~yZ3PH~Tlq91JZEE6TxXeyfWSKdxd7dhEsY0opldB8aYwngEIo41xz6rlVy2RHIcIvEav5pBEAiqSbQKI2EovydmZXHvXEULnVc7PU2d4j5aao5tFynRI1eAD5JOuOfBZSsYscdDvYn4lCC0PvV2kSLVMxYeth9lImRZHhp3NA69s4fAg7k6laE9JXo~3vNrkTAnMvzPXTtU4PNJvHfDYqueLmSGfWIyWwdm28IxBPQZfN1m7ag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.627Z\",\"updated_at\":\"2022-03-11T16:02:18.120Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"N\"},{\"key\":\"dfce37229a2e4e88eb393e86ec9b4ec3d66b9738\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1434\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vQx/1pa/PYRqwsPfwGcXpTkN/style_thumbnail_2.png?Expires=1650844800&Signature=aN8snoz4nwyDDDCbfB8HkasDBQzcZpPd7WhD7pdtNRrgZ3Bl~6ukVw9QsREukEwBe3ekyG8023xXb~tBLq3ABeSr9Ntb1T-frWYY2nVoO5Z9t-0-6qeSvIgahdCh-lXQbh53r0MNOYidL92PmQPPnjpd0iV9yBCepPfCCMLuRZSvixtA7BF8UlR3EwogqldXvb3M~KShzvKaNuRz9mQR-wrw8bVZ1lpfFljupZ2V7HrRZ7uPZ-scBljUpYl4O98eAWs2v~71mdss4exTLjRmn8FF-eQHST4o9tS4bot~sBDZnSson0nhql1QONP8b1133yUROVAaJNs1u6SbEIAXQg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.131Z\",\"updated_at\":\"2022-03-11T16:02:18.116Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"P\"},{\"key\":\"dd6c5ab1906042f74cd197b15936187ee8cd9c2c\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1435\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/U9U/J8p/of99yNH0JkUZajWA/style_thumbnail_11.png?Expires=1650844800&Signature=Bd8ndnBvhi55ebH7D2IvaS97ns1QO-o4HpYZ3M7NhazuHS7ynCVapraKYyfpLgzqOQXo-6CC9mNPGXPZIzfLq4yqLWPKJrLAk12bACiQzkmAwWf54mM3E9uIhxwMIJzimHyvO0OQGeCoy4SCC6Vli-MzrgfzdsCnGR9R-3IQGfY0rNEtSSh1sG76YFJCHtu6Y3iWbDcH-5hUgT0-DHB1~9toKcmUSf5c~cylClFRAhvM~IFigGphwfvxxiCPna2nP0vVng6PpE-H2iBLYfAUlFIpJMRQRZGPiMmIR1fQqdIKAvuyeebSHYmJ75MwpnrjfrxsnAtENp8qbI3sOTQmgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.176Z\",\"updated_at\":\"2022-03-11T16:02:18.105Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"Q\"},{\"key\":\"d2d7ace9983897b23542aae87a6fcf3ee3048867\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1430\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rpX/Xcd/q0yhIOhgjQP5vgZh/style_thumbnail_112.png?Expires=1650844800&Signature=WGsqNIehetSAh4O5bwS6CAEi7dow2TL119ViK1tfnVFhcU8IjbAv6UJCjABvh5XWlC-EYX2hJjE51dYsmdGzdMuT-2kUAWEiAQRBIS8RXDqYzmovSY-7WOtwx5etfw2KnkBRbyLy5xQ~x-d6hret--ax7gx8ZADgieqv52cuq6ksFSt~qSPLJUSJrQ5mL3KRjHhu9HY64F0jcAgGoJeuFvd91QytghqC-EcrUrPXJZ0PYDQN-S-IbONb-yEOs3MMRhuoWTSfNDRXCw-OLpfNpiw7TZM6d4TmOwOmMCSjGdb~hp~Ct8dsoVpgDnTxetRH1LDlyqSuaxLHd6ohT2cP~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Warning\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.672Z\",\"updated_at\":\"2022-03-11T16:02:18.080Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"L\"},{\"key\":\"bd36fe04a5c11389697cea92834e1d659d2c9ada\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2384\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ylG/Kih/qqlM28blEwiNlCXy/style_thumbnail_20.png?Expires=1650844800&Signature=HkXz6Ug3CpQdh-4fA9QKfP7RoKu8BajhGBuFf-gejUxF7yhmx7n9coOMxA40rHWTQRhEB5P7bikYMUONtiZMSEYYHq4toCLUi32uet7rEJKKzzgWwPZ51OErfhtor35myHuYr9OZqBs1m306zSqjKZapakut3rT4K1ATmCOGrVhWgy~4EShbj2kym619zm0rqFN-iphjUO0vesLPYd0j8jaIWoSZyEFy2MPYFuJ2cD7jaKqiqEI-mxYACrxBnbf-NXS1yv1UfvfnIq51iKBtcgttcfNJtP9e26Fvn-sTlT692JQyqYpX7~~RnMHimyNj8b4SbCiInHlb~5bG6LSh9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Disabled\",\"description\":\"Text and icon color for Disabled elements\",\"created_at\":\"2022-02-17T15:35:46.219Z\",\"updated_at\":\"2022-03-11T16:02:18.019Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"2\"},{\"key\":\"9e795de23aea014ad1328d148c954cd955229afa\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Pnv/CYP/MoPZFql1K5CmrFUw/style_thumbnail_61.png?Expires=1650844800&Signature=RUJiG0hQNSkwBydZajMgthQYMUlPWbvVyPyndc6jUgaoOvxI~FSd2~MyfowYl2OU~oupYaz2ipBVgvBA9Vgdma2vm~9vDOc~qlEKA6OVehiay15X4iOV2txUSMDXF9kE0S6TbKQLNpr0NVKieDDQwwzIuk3pKfYb1UTAR5Qgr6mFd6aLkeaUu2~sT4VvMWTnkg2oXKVMBrtmU7h5tdYzDAuxfpt-mHhydqfP59TjO9sma-FAU6lzPeKc2VhE6OKdlBxRH9546CHEH0kntqTJhnJFaftAWQ6FoFNDL~ALe8y7iNXubb1ln-h6rb2icDnzD14KNx1vo9erM64FIrqZiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Info\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.417Z\",\"updated_at\":\"2022-03-11T16:02:17.944Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"I\"},{\"key\":\"6a026fc327c293cb7626902ceae76e698d45aa45\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1525\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Chl/k9T/roO7ceLJ4NTZBgvt/style_thumbnail_49.png?Expires=1650844800&Signature=d1wb6yNtnZk7UJbJzJ9SwlXCN-snVx8~R3irft84XgRAdLX2xYCqQpi2uoMfn1cFM5Xkv5K3JO6XToq8W1ucO2YxlyVmr6q8quIDxPVR1X4FjMkgNKCmFSQOUf50wRoXm0R7F6iy3J1RUkEeetylC-Ei7m8A8DOdUjhH0uhDJ366voiwyYbzPzXqWHF7WOtTIQnRMbHrq7NA5-nzpd5nVjSTV4hMRejuS0eNeqb9wv-3gAmugt1aDyttQilaQ5GbAQKgop1MNlzW16ETk1EZ7t21wl-npXrj5R2mc6nXFGxIGvKdzhuz--MK4FYqBioWwzVEfWyR4xz~ME7fpZ1GXA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.359Z\",\"updated_at\":\"2022-03-11T16:02:17.805Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"c\"},{\"key\":\"5c5bbae2667c5b1ef2146a1812a15b9eb71bcd63\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1520\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iL7/fvy/c1R4XSTyB9m4JLXv/style_thumbnail_2.png?Expires=1650844800&Signature=dEUzscHYHrZ6w9rGwDqWjz1Vin71fUIul6quvkIb~8xP~S3PVhulaAy7XUvv0HBc~EI1K2BP0b7tPR~G7Rx6rPSlJgi-91HmmBnJobPv~inI-aHRoRDaG2is9vZarx4LoaimdA982DGjnjm06-GznBKDud~~a8lZUDId0mDd95~vNIZxh7tN7Tv6NhMISgzkVLbjHBptJfoo7bQsqfdGflO1CiCDFnj5dqNR4bvKHE7ofma2-kaj-09PCH3r9c~An6nfL3Mx4WajMKuPRL-Jz-PDtwO7ElFzQozNZQU5AMAyAz3Df3XJbdwLbQDSY-C9r7pm9QXEDesbEeuVLXYkJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Announcement\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.613Z\",\"updated_at\":\"2022-03-11T16:02:17.782Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"^\"},{\"key\":\"4663c47d437f48fa780cca2a6af426c1a27bf89f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1433\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Kpq/s8z/NGJIdJYUXtg5ywxa/style_thumbnail_58.png?Expires=1650844800&Signature=SBy-62Ap1kCPl7~IYIfn~xD0pGIylKkem6cPN96MiEv-98QjPql93qIjLy4~~K9dlFvx31CTS5X9pCuT7Kdt7Ic4dUAcKiSP0J0B7bvY14oiM2pgXUgoak-M36~7clx6aPj1nDfUazuQSNMImtS5NSB7dHz8nwfmxPKZ~~zbSFPGEH0p94-W4m6VNmtpjanmDS6Kfz8RCwPUeHmF5QPmXLWwtw2LGUUD3PslyBS~seq8yTCgyytyOJTuLupfGzJOta7bghN8OR~HbYae74vUnDWm1pLk5ByiJT4dFpWbQCSuzp1E0ZLIA1mPET0trcqaAp-zAN1zIqdLL9Y4DIIp1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.402Z\",\"updated_at\":\"2022-03-11T16:02:17.720Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"O\"},{\"key\":\"ac5753c72eb25f71f36337a7b875727ffdad8ee8\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1484\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/9T1/0ov/9EqYc6EVXoDW55Dg/style_thumbnail_54.png?Expires=1650844800&Signature=ESkmuQ3upyUHmoaLfIjT7jlLxzEaT3aMQQO4TcX9lbQ~p4G9sm4Dub-g7fsL0N9p8oVxddQAG3ceZCzhubancLF6cyI8242gXUfN9zn69YBIydkqoJvg3BAnf2VFRmdVekbr-AGHPRv2-lvhX09Tu1ANuPPbdgOy3V0BgRiSO3JBJQq-KB5Z1giROGXbw1xdv-es~hZg9qI7YkXNpgI8IhofIabMAL5aJpt0JQD-bk-mYG9nnRA-0X41dje~J9XtzJ97NnjBhfRUU-8s2dZSXIp6RBMQyDqj~jT6rW6VtOe~8MeNCmXYZKH5PhWbUzUDUPyqXbSeYQr8C6BppEmCug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.383Z\",\"updated_at\":\"2022-03-11T16:02:17.976Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"T\"},{\"key\":\"a9b8878b6c2fba465183fba4303da7d86dc8b46f\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"82:1401\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/AsN/7UI/D0HEnki5EM5paDxO/style_thumbnail_0.png?Expires=1650844800&Signature=X9PA6IwYM6ZyXoH91sM5MBT~VzjWvSiIkfPzyARFpseuxsahC09-cvk~99hr~st94PbZHMflJY6UrdQZ3hROr0-krFTtodFc~taBtanjrrEgTIw1zokc~ni7CpF-v7PTBVUgO~qBQsXRe5FSCJeYgmIsaHWSikYHUJDyYvx52vGxGU105aMV4H-wQFeBeoHeETgZUPZDr58QYznRj6UFn0Ukfe2qYrYACKmEro1TVvnxt2EjcVRLCn~vrPf4NNiQdLigRuFIanDpBpP8nf1JO71SN7KCXAO5GlV8YALAqCIH9b5TYRfhpuwm8wz1wM0FvJW6~1Z7EKUfte0bJrMSzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Foreground On Disabled\",\"description\":\"\",\"created_at\":\"2022-03-02T11:48:02.118Z\",\"updated_at\":\"2022-03-11T16:02:17.967Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"~8\"},{\"key\":\"a2ae03c63dda81608a24af4e0f55e5cba08539bb\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1085\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KmA/KVg/gv8GSH01Ocn2EI0g/style_thumbnail_66.png?Expires=1650844800&Signature=c2uB1jbmfOc~~BsE2QTOpFTdKhW4smPM5--3yAIxU9i3~4rqrpyYyZ3KRlWDQqIjloCK1PBILAiGsTirNKSh4NffiTk4RJSoGXodz8YYrZywr2FjG~jHr020jw~5hYREfWbMPQbd5GdqNNA4chW2~Ryp5XRR41c~UBUftkhUICijRVeKR2rptokJ6DV5gsK3RwrHDmAj5vtj1jwO4TW5NBw8erAgEuYPkPxSisPrZUxbDuLY3stvjHCsClVipwYyQhbTcyA93HhRo7KbOybi5NuXJvDBTCIEV3Hl20AOuX2967Rio~dCzvHf8WUIy5gF~cRS5IBkyIxlqVQLb49J-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Enabled\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.443Z\",\"updated_at\":\"2022-03-11T16:02:17.963Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"G\"},{\"key\":\"a098e3653b26038429db4ea47eedc4dcd6c47da6\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1436\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jUW/y0J/Yk20GRMmlRyxkqUJ/style_thumbnail_56.png?Expires=1650844800&Signature=BdA-HGqnt42fYzawKsJ5Si2ynF2JcltBaOq7PiboWbOcCvr3j9MJ1hclrFkjXqmj37RnVlmOHG61LwN1AI8dV55x-1rxFJdQEcpV7mw4gWKc5btcEyGRSSV1ssAqDLX5R~rOFKVhY4gVxaJawEapCbW01RNEtRYhMfiuznbPulD9B0-ayV6rAfe0FssUs-EzLOwIXcVp0aNPbopz9ZNF5G0MX6ir1SJbap8H82mkohSmANVNpQaKubZEERgbNqE1XT1b1pMKAQJEclWWxTmv8yvGMsij0B6TXm6Ragfd1bYN9oHQXugEhYB4JKuXaB9PCWn3mg1psd1IQg~LSPQIKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.392Z\",\"updated_at\":\"2022-03-11T16:02:17.958Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"R\"},{\"key\":\"9eb71027b53e7d03955f2defabc70ae991858b06\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"87:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/OdD/4RD/idONBzP8guOzCp2U/style_thumbnail_1.png?Expires=1650844800&Signature=hitI7yRCcHmnzMTkwIyD3BYoi2HEsfWdHZYuqO~WjmsfsxZQfkRiILYXkEIwrLOyfD4FkcX73HiuuFVsrQZs7lB1hSFzgBpT1AeCs-3Jv5GddC1yQuNtr6J53VUTAfkTmwDMmZIYT7J4dWVqkvwmjNGuZj8RMzP0tOpJeEES4H-yPg2FaUIm0XAC9UW-8A-TfSMpKV4jDC~ItTAzYtHjZ0cB5c-JunjZWy3PORA7GQPVR5z3LgZ1fcBkwiXgLpoJr7nV7OMujd1tTHUwbUa4J8Nh4-V~jD1VM4jRdrBsTViSoAxc9IOqF3ap6sxLORNfG~paZxMClRe4w3Vf9WmP7Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Error\",\"description\":\"\",\"created_at\":\"2022-03-02T14:32:53.650Z\",\"updated_at\":\"2022-03-11T16:02:17.948Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"aO\"},{\"key\":\"fdbfdc8a60fe3e0bfdee60336d8cf5b5bb1a1ce5\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1515\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Zcz/Ff2/TiTA3kc49iZx9vdF/style_thumbnail_53.png?Expires=1650844800&Signature=L7q31Iyg7rRl2dxnSnSTB21gKH5FyQfPhMCJMajfzSpgxTuekGl7fZMX8y2EZ9nLyx724c8CIbgk2oPbSEJlRtdZKTfVWUCEjDcnemSawH~oRswfd9ryxQDAPcviGyggoido7WF4WUN~6pQhA30HPMXRPmKxBqoN0x3EeuDa33KfVJ9YE6t-wPjBZksVu5Zhwqm2l3T3GB3FURjjfV03A3BP~NZvdCyqSbvo6PlP7BCUMOUfnRSMAg9kA0InbznfC1KMSRBku7IFuZeff8BZVM0LFUeoj33mbffwUwLtwyca97vSu90ZI3TvZiGnZRZfAx05PrF25N8RxcRhg8EVqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Degraded\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.378Z\",\"updated_at\":\"2022-03-11T16:02:18.232Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"Y\"},{\"key\":\"f9c3fc076dc2bbd0279fbbdde2961d5011fc1a4b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/eXp/gs7/NpqQWETMcxc9xV2R/style_thumbnail_71.png?Expires=1650844800&Signature=DCMYH8sI5M0MZWCknZzV0aDL06Xl6YQ0TpF7ibSKtMbA8Qn3xxREFT6q4ApEY4xg5FZGgG69oEzSvhCJcJvmYgobQLeZ3H~mxiYfnGPxNWfQsyA5SC2WcHI4SkP~qI~TF5OTf5TqsiMz2Z~ma63rWqIfwS49CwsRBnbuqbXVoTnDD9-J2~WocNv0Mmr356i81CYqLtIiXiasIxdYTlAuakpoklYyFH-MjtRqbCzKjBS1LGKdRRZGHbaToSTC7KXtBfxN0VsKGYLFqxK6UxH4Nh6YBZ9~AV9j9SO6LtyvOYSybPoryhDalnt532XuadbF08TUT6fseCPlvY9kBy7KqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unknown\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.468Z\",\"updated_at\":\"2022-03-11T16:02:18.213Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"\\\\\"},{\"key\":\"f673a03ddc76c4f14bf3bcbd028201a8f49c3550\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1431\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ooV/lNx/lh8HnreCYSJkAzo1/style_thumbnail_59.png?Expires=1650844800&Signature=PhBHH6tmZ0Lbr3t0rDjWKUE8fBwXRSZ4kbrFo0BxLpzerUEd1NPAKVOhyUZpbB~ZN8C8vG9Ak2S4IReB-7mo3EJO2NqI1rA-oYUEwV0T7D8zSiB2MGJ1x1AEnskMECPdcxA~jXMo~RoLJnBqz2GaoRND8FxMbkuIg5ymaj5802-BMW-WaKxJGFHwB5acU1i5beY~uBW2AbUSNsLjnX06frt9Zvsxqf17uaGrIPUoz02~OYO5zs6QN4I~T~T9Hp95zIBrmxYx-NDEUZCpx6NP2YS-RjyGnp7R1J4U7rcvz7nQbZguTVafTRfrKEUVa3RkLLireXRU6b0tk3IT-e6ZvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Critical\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.407Z\",\"updated_at\":\"2022-03-11T16:02:18.200Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"M\"},{\"key\":\"f49d66a80f6c2bae52643a5553035a9add1b837b\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"27:1086\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/u60/6tq/Y24CQgxRLUUyzDQN/style_thumbnail_39.png?Expires=1650844800&Signature=Mz0m85u1u9wH6BAk45kQmTURDUE~XknJh1UHNlPoDzRDYNYvj2BN9~RfJOwu1WjhymEGV~eRG2SvN-XHBYRe51ayakymhehGuVZ~GGUeuw~oPNE084~BeBmJa6dOSW8VMg95z1oQyu21~yVJ-eAmgBYgyb3T05kZ~5WbAq8025XO-n-giQxKPei3exGjCEtQtTM9EBT-qE-hGFMhvhuz73GoV4RzfiArcBeIhgZI7XstckuGyTEdMRFBsn9CcToye6yTiSJwB8SNmjTN14-TB9wggwOgnkG-aqF6qd9OMuc8DECVHfLBx87Mqd6N-sOF7JwTUs~bkEsiQMcxPEI00Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Hover\",\"description\":\"\",\"created_at\":\"2022-02-17T15:35:46.310Z\",\"updated_at\":\"2022-03-11T16:02:18.195Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"H\"},{\"key\":\"e99939e903afb4f44f4a3a31914e44efc39a1efb\",\"file_key\":\"XhLTqysjEEQJ4js7g9pc1h\",\"node_id\":\"13:2382\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/naE/ZwC/7kDsI3uNcyRYVzht/style_thumbnail_83.png?Expires=1650844800&Signature=gJRe6~C5q7KW3ePtrWvdgztcpzBKO0VDWdjR64OoUhctxGiB6OuUTqutvri71Lgiyun~T1Kh33k234FMnTOeH-AKWYq896OATTmGlEggWvdeyjl9yp97vK9ZREGR-nl9vV1aFt4y8WefsScVrbRCj1lx3~Dy9go4X-D1CeKvTSrjyg7BxYFjgtWkeEfzWzbVKvdCEZLdwNjJnshZWw5sVdic7YWetiv~l4aw8iUuKzYCDdDRYkJimUsgo7~1A-NhuA8~xN7risusAWBIGY9fYwitO5mYuKhWsNN2Cw9eB2pmZnoxFMzb1pvnzB3apZkMHxfOO9l02h5O~0ciI9Ijcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary Inverted\",\"description\":\"Inverted Secondary text and icon color\",\"created_at\":\"2022-02-17T15:35:46.527Z\",\"updated_at\":\"2022-03-11T16:02:18.163Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/87e8cf91-da95-42a7-8a9a-321e5653e53f\"},\"sort_position\":\"0\"}]},\"i18n\":null}");

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




let uiSize = {
    width: 300,
    height: 448
};
figma.showUI(__html__, { width: uiSize.width, height: uiSize.height });
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
        uiSize = {
            width: 475,
            height: 500
        };
        figma.ui.resize(475, 500);
        break;
    case "open-color-linter":
        navigateTo('open-color-linter');
        uiSize = {
            width: 475,
            height: 500
        };
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
    const lightModeTokens = yield Promise.all(_data_light_mode_json__WEBPACK_IMPORTED_MODULE_2__.meta.styles.map((style) => __awaiter(void 0, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, style), { theme: 'light' });
    })));
    const darkModeTokens = yield Promise.all(_data_dark_mode_json__WEBPACK_IMPORTED_MODULE_3__.meta.styles.map((style) => __awaiter(void 0, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, style), { theme: 'dark' });
    })));
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
    if (msg.type === "resize") {
        figma.ui.resize(msg.size.x >= uiSize.width ? msg.size.x : uiSize.width, msg.size.y >= uiSize.height ? msg.size.y : uiSize.height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvYXBwbHlNYXRyaXhUb1BvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2Nsb25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2NvbnZlcnRDb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9maW5kTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRBbGxGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRCb3VuZGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvZ2V0Q1NTU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldE5vZGVJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRQYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldFJlbGF0aXZlUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaGFzQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNQYXJ0T2ZJbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1BhcnRPZk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNUeXBlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1Zpc2libGVOb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2xvYWRGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9sb2FkVW5pcXVlRm9udHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvbm9kZVRvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3BhcnNlVGV4dFN0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3NldENoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvdG9wTGV2ZWxGcmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jbG9uZURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcUJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcVdpdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdHJpeC1pbnZlcnNlL21hdHJpeC1pbnZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkLXJhbmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZhOztBQUVi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QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7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LENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdEQUF3RDtBQUN0RjtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxxQkFBcUIsK0dBQStHO0FBQzNMLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsdURBQXVELHFCQUFxQixxTkFBcU47QUFDalMsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7OztBQ2plRCxlIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wbHVnaW4vY29udHJvbGxlci50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5hcHBseU1hdHJpeFRvUG9pbnQgPSBhcHBseU1hdHJpeFRvUG9pbnQ7XG5cbmZ1bmN0aW9uIGFwcGx5TWF0cml4VG9Qb2ludChtYXRyaXgsIHBvaW50KSB7XG4gIHJldHVybiBbcG9pbnRbMF0gKiBtYXRyaXhbMF1bMF0gKyBwb2ludFsxXSAqIG1hdHJpeFswXVsxXSArIG1hdHJpeFswXVsyXSwgcG9pbnRbMF0gKiBtYXRyaXhbMV1bMF0gKyBwb2ludFsxXSAqIG1hdHJpeFsxXVsxXSArIG1hdHJpeFsxXVsyXV07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjbG9uZTtcblxuLyoqXG4gKiAgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGNsb25lIHRoZSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnbnVtYmVyJyB8fCB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnYm9vbGVhbicgfHwgdHlwZSA9PT0gJ3N5bWJvbCcgfHwgdmFsID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgcmV0dXJuIHZhbC5tYXAoY2xvbmUpO1xuICAgIH0gZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG8gPSB7fTtcblxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsKSB7XG4gICAgICAgIG9ba2V5XSA9IGNsb25lKHZhbFtrZXldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG87XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgJ3Vua25vd24nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5maWdtYVJHQlRvV2ViUkdCID0gZmlnbWFSR0JUb1dlYlJHQjtcbmV4cG9ydHMud2ViUkdCVG9GaWdtYVJHQiA9IHdlYlJHQlRvRmlnbWFSR0I7XG5leHBvcnRzLmZpZ21hUkdCVG9IZXggPSBmaWdtYVJHQlRvSGV4O1xuZXhwb3J0cy5oZXhUb0ZpZ21hUkdCID0gaGV4VG9GaWdtYVJHQjtcbmNvbnN0IG5hbWVzUkdCID0gWydyJywgJ2cnLCAnYiddO1xuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGNvbnZlcnRzIGZpZ21hIGNvbG9yIHRvIFJHQihBKSAoYXJyYXkpXG4gKi9cbi8vIGZpZ21hUkdCVG9XZWJSR0Ioe3I6IDAuODg3NDk5OTg4MDc5MDcxLCBnOiAwLjA3MDU4ODIzODUzNzMxMTU1LCBiOiAwLjA2NjU2MjQ3Mzc3Mzk1NjN9KVxuLy89PiBbMjI2LCAxOCwgMTddXG5cbmZ1bmN0aW9uIGZpZ21hUkdCVG9XZWJSR0IoY29sb3IpIHtcbiAgY29uc3QgcmdiID0gW107XG4gIG5hbWVzUkdCLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICByZ2JbaV0gPSBNYXRoLnJvdW5kKGNvbG9yW2VdICogMjU1KTtcbiAgfSk7XG4gIGlmIChjb2xvclsnYSddICE9PSB1bmRlZmluZWQpIHJnYlszXSA9IE1hdGgucm91bmQoY29sb3JbJ2EnXSAqIDEwMCkgLyAxMDA7XG4gIHJldHVybiByZ2I7XG59XG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gY29udmVydHMgUkdCKEEpIGNvbG9yIChhcnJheSkgdG8gZmlnbWEgY29sb3JcbiAqL1xuLy8gd2ViUkdCVG9GaWdtYVJHQihbMjI2LCAxOCwgMTddKVxuLy89PiB7cjogMC44ODYyNzQ1MDk4MDM5MjE1LCBnOiAwLjA3MDU4ODIzNTI5NDExNzY1LCBiOiAwLjA2NjY2NjY2NjY2NjY2NjY3fVxuXG5cbmZ1bmN0aW9uIHdlYlJHQlRvRmlnbWFSR0IoY29sb3IpIHtcbiAgY29uc3QgcmdiID0ge307XG4gIG5hbWVzUkdCLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICByZ2JbZV0gPSBjb2xvcltpXSAvIDI1NTtcbiAgfSk7XG4gIGlmIChjb2xvclszXSAhPT0gdW5kZWZpbmVkKSByZ2JbJ2EnXSA9IGNvbG9yWzNdO1xuICByZXR1cm4gcmdiO1xufVxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGNvbnZlcnRzIGZpZ21hIGNvbG9yIHRvIEhFWCAoc3RyaW5nKVxuICovXG4vLyBmaWdtYVJHQlRvSGV4KHsgcjogMCwgZzogMC4xLCBiOiAxIH0pXG4vLz0+ICMwMDFhZmZcblxuXG5mdW5jdGlvbiBmaWdtYVJHQlRvSGV4KGNvbG9yKSB7XG4gIGxldCBoZXggPSAnIyc7XG4gIGNvbnN0IHJnYiA9IGZpZ21hUkdCVG9XZWJSR0IoY29sb3IpO1xuICBoZXggKz0gKCgxIDw8IDI0KSArIChyZ2JbMF0gPDwgMTYpICsgKHJnYlsxXSA8PCA4KSArIHJnYlsyXSkudG9TdHJpbmcoMTYpLnNsaWNlKDEpO1xuXG4gIGlmIChyZ2JbM10gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGEgPSBNYXRoLnJvdW5kKHJnYlszXSAqIDI1NSkudG9TdHJpbmcoMTYpO1xuXG4gICAgaWYgKGEubGVuZ3RoID09IDEpIHtcbiAgICAgIGhleCArPSAnMCcgKyBhO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYSAhPT0gJ2ZmJykgaGV4ICs9IGE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGhleDtcbn1cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBjb252ZXJ0cyBIRVggY29sb3IgKHN0cmluZykgdG8gZmlnbWEgY29sb3JcbiAqL1xuLy8gaGV4VG9GaWdtYVJHQigjMDAxYWZmKVxuLy89PiB7IHI6IDAsIGc6IDAuMTAxOTYwNzg0MzEzNzI1NDksIGI6IDEgfVxuXG5cbmZ1bmN0aW9uIGhleFRvRmlnbWFSR0IoY29sb3IpIHtcbiAgbGV0IG9wYWNpdHkgPSAnJztcbiAgY29sb3IgPSBjb2xvci50b0xvd2VyQ2FzZSgpO1xuICBpZiAoY29sb3JbMF0gPT09ICcjJykgY29sb3IgPSBjb2xvci5zbGljZSgxKTtcblxuICBpZiAoY29sb3IubGVuZ3RoID09PSAzKSB7XG4gICAgY29sb3IgPSBjb2xvci5yZXBsYWNlKC8oLikoLikoLik/L2csICckMSQxJDIkMiQzJDMnKTtcbiAgfSBlbHNlIGlmIChjb2xvci5sZW5ndGggPT09IDgpIHtcbiAgICBjb25zdCBhcnIgPSBjb2xvci5tYXRjaCgvKC57Nn0pKC57Mn0pLyk7XG4gICAgY29sb3IgPSBhcnJbMV07XG4gICAgb3BhY2l0eSA9IGFyclsyXTtcbiAgfVxuXG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KGNvbG9yLCAxNik7XG4gIGNvbnN0IHJnYiA9IFtudW0gPj4gMTYsIG51bSA+PiA4ICYgMjU1LCBudW0gJiAyNTVdO1xuXG4gIGlmIChvcGFjaXR5KSB7XG4gICAgcmdiLnB1c2gocGFyc2VJbnQob3BhY2l0eSwgMTYpIC8gMjU1KTtcbiAgICByZXR1cm4gd2ViUkdCVG9GaWdtYVJHQihyZ2IpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB3ZWJSR0JUb0ZpZ21hUkdCKHJnYik7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZXh0cmFjdEltYWdlQ3JvcFBhcmFtcyA9IGV4dHJhY3RJbWFnZUNyb3BQYXJhbXM7XG5cbnZhciBfbWF0cml4SW52ZXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm1hdHJpeC1pbnZlcnNlXCIpKTtcblxudmFyIF9hcHBseU1hdHJpeFRvUG9pbnQgPSByZXF1aXJlKFwiLi9hcHBseU1hdHJpeFRvUG9pbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY2FuIGV4dHJhY3QgdGhlIGltYWdlIGNyb3Agcm90YXRpb24sIHNjYWxlICgvc2l6ZSkgYW5kIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSBzaGFwZVdpZHRoXG4gKiBAcGFyYW0gc2hhcGVIZWlnaHRcbiAqIEBwYXJhbSB0XG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RJbWFnZUNyb3BQYXJhbXMoc2hhcGVXaWR0aCwgc2hhcGVIZWlnaHQsIHQpIHtcbiAgY29uc3QgdHJhbnNmb3JtID0gdC5sZW5ndGggPT09IDIgPyBbLi4udCwgWzAsIDAsIDFdXSA6IFsuLi50XTtcbiAgY29uc3QgbXhJbnYgPSAoMCwgX21hdHJpeEludmVyc2UuZGVmYXVsdCkodHJhbnNmb3JtKTtcbiAgY29uc3QgcG9pbnRzID0gW1swLCAwXSwgWzEsIDBdLCBbMSwgMV0sIFswLCAxXV0ubWFwKHAgPT4gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShteEludiwgcCkpO1xuICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIocG9pbnRzWzFdWzFdIC0gcG9pbnRzWzBdWzFdLCBwb2ludHNbMV1bMF0gLSBwb2ludHNbMF1bMF0pO1xuICBjb25zdCBzeCA9IE1hdGguc3FydChNYXRoLnBvdyhwb2ludHNbMV1bMF0gLSBwb2ludHNbMF1bMF0sIDIpICsgTWF0aC5wb3cocG9pbnRzWzFdWzFdIC0gcG9pbnRzWzBdWzFdLCAyKSk7XG4gIGNvbnN0IHN5ID0gTWF0aC5zcXJ0KE1hdGgucG93KHBvaW50c1syXVswXSAtIHBvaW50c1sxXVswXSwgMikgKyBNYXRoLnBvdyhwb2ludHNbMl1bMV0gLSBwb2ludHNbMV1bMV0sIDIpKTtcbiAgcmV0dXJuIHtcbiAgICByb3RhdGlvbjogYW5nbGUgKiAoMTgwIC8gTWF0aC5QSSksXG4gICAgc2NhbGU6IFtzeCwgc3ldLFxuICAgIHNpemU6IFtzeCAqIHNoYXBlV2lkdGgsIHN5ICogc2hhcGVIZWlnaHRdLFxuICAgIHBvc2l0aW9uOiBbLXBvaW50c1swXVswXSAqIHNoYXBlV2lkdGgsIC1wb2ludHNbMF1bMV0gKiBzaGFwZUhlaWdodF1cbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybSA9IGV4dHJhY3RMaW5lYXJHcmFkaWVudFBhcmFtc0Zyb21UcmFuc2Zvcm07XG5cbnZhciBfbWF0cml4SW52ZXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm1hdHJpeC1pbnZlcnNlXCIpKTtcblxudmFyIF9hcHBseU1hdHJpeFRvUG9pbnQgPSByZXF1aXJlKFwiLi9hcHBseU1hdHJpeFRvUG9pbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY2FuIGV4dHJhY3QgdGhlIHggYW5kIHkgcG9zaXRpb25zIG9mIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBsaW5lYXIgZ3JhZGllbnRcbiAqIChzY2FsZSBpcyBub3QgaW1wb3J0YW50IGhlcmUpXG4gKlxuICogQHBhcmFtIHNoYXBlV2lkdGggbnVtYmVyXG4gKiBAcGFyYW0gc2hhcGVIZWlnaHQgbnVtYmVyXG4gKiBAcGFyYW0gdCBUcmFuc2Zvcm1cbiAqL1xuZnVuY3Rpb24gZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybShzaGFwZVdpZHRoLCBzaGFwZUhlaWdodCwgdCkge1xuICBjb25zdCB0cmFuc2Zvcm0gPSB0Lmxlbmd0aCA9PT0gMiA/IFsuLi50LCBbMCwgMCwgMV1dIDogWy4uLnRdO1xuICBjb25zdCBteEludiA9ICgwLCBfbWF0cml4SW52ZXJzZS5kZWZhdWx0KSh0cmFuc2Zvcm0pO1xuICBjb25zdCBzdGFydEVuZCA9IFtbMCwgMC41XSwgWzEsIDAuNV1dLm1hcChwID0+ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobXhJbnYsIHApKTtcbiAgcmV0dXJuIHtcbiAgICBzdGFydDogW3N0YXJ0RW5kWzBdWzBdICogc2hhcGVXaWR0aCwgc3RhcnRFbmRbMF1bMV0gKiBzaGFwZUhlaWdodF0sXG4gICAgZW5kOiBbc3RhcnRFbmRbMV1bMF0gKiBzaGFwZVdpZHRoLCBzdGFydEVuZFsxXVsxXSAqIHNoYXBlSGVpZ2h0XVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXMgPSBleHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXM7XG5cbnZhciBfbWF0cml4SW52ZXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm1hdHJpeC1pbnZlcnNlXCIpKTtcblxudmFyIF9hcHBseU1hdHJpeFRvUG9pbnQgPSByZXF1aXJlKFwiLi9hcHBseU1hdHJpeFRvUG9pbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY2FuIGV4dHJhY3QgdGhlIHJvdGF0aW9uIChpbiBkZWdyZWVzKSwgY2VudGVyIHBvaW50IGFuZCByYWRpdXMgZm9yIGEgcmFkaWFsIG9yIGRpYW1vbmQgZ3JhZGllbnRcbiAqXG4gKiBAcGFyYW0gc2hhcGVXaWR0aFxuICogQHBhcmFtIHNoYXBlSGVpZ2h0XG4gKiBAcGFyYW0gdFxuICovXG5mdW5jdGlvbiBleHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXMoc2hhcGVXaWR0aCwgc2hhcGVIZWlnaHQsIHQpIHtcbiAgY29uc3QgdHJhbnNmb3JtID0gdC5sZW5ndGggPT09IDIgPyBbLi4udCwgWzAsIDAsIDFdXSA6IFsuLi50XTtcbiAgY29uc3QgbXhJbnYgPSAoMCwgX21hdHJpeEludmVyc2UuZGVmYXVsdCkodHJhbnNmb3JtKTtcbiAgY29uc3QgY2VudGVyUG9pbnQgPSAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG14SW52LCBbMC41LCAwLjVdKTtcbiAgY29uc3QgcnhQb2ludCA9ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobXhJbnYsIFsxLCAwLjVdKTtcbiAgY29uc3QgcnlQb2ludCA9ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobXhJbnYsIFswLjUsIDFdKTtcbiAgY29uc3QgcnggPSBNYXRoLnNxcnQoTWF0aC5wb3cocnhQb2ludFswXSAtIGNlbnRlclBvaW50WzBdLCAyKSArIE1hdGgucG93KHJ4UG9pbnRbMV0gLSBjZW50ZXJQb2ludFsxXSwgMikpO1xuICBjb25zdCByeSA9IE1hdGguc3FydChNYXRoLnBvdyhyeVBvaW50WzBdIC0gY2VudGVyUG9pbnRbMF0sIDIpICsgTWF0aC5wb3cocnlQb2ludFsxXSAtIGNlbnRlclBvaW50WzFdLCAyKSk7XG4gIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuKChyeFBvaW50WzFdIC0gY2VudGVyUG9pbnRbMV0pIC8gKHJ4UG9pbnRbMF0gLSBjZW50ZXJQb2ludFswXSkpICogKDE4MCAvIE1hdGguUEkpO1xuICByZXR1cm4ge1xuICAgIHJvdGF0aW9uOiBhbmdsZSxcbiAgICBjZW50ZXI6IFtjZW50ZXJQb2ludFswXSAqIHNoYXBlV2lkdGgsIGNlbnRlclBvaW50WzFdICogc2hhcGVIZWlnaHRdLFxuICAgIHJhZGl1czogW3J4ICogc2hhcGVXaWR0aCwgcnkgKiBzaGFwZUhlaWdodF1cbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZmluZEFsbCA9IHZvaWQgMDtcblxudmFyIF8gPSByZXF1aXJlKFwiLi5cIik7XG5cbi8qKlxuICogQ3VzdG9tIGltcGxlbWVudGF0aW9uIG9mIHRoZSBmaWdtYS5maW5kQWxsIG1ldGhvZCwgd2hpY2ggcnVucyB4MTAwMCB0aW1lcyBmYXN0ZXIuXG4gKlxuICogIyMjIFVzYWdlIGV4YW1wbGVcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmaW5kQWxsLCBpc1RleHROb2RlIH0gZnJvbSBcIkBmaWdtYS1wbHVnaW4vaGVscGVyc1wiXG4gKlxuICogY29uc3QgdGV4dE5vZGVzID0gZmluZEFsbChmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbiwgaXNUZXh0Tm9kZSlcbiAqIGBgYFxuICpcbiAqICMjIyBIb3cgdG8gcmVwbGFjZSBuYXRpdmUgYGZpZ21hLmZpbmRBbGxgXG4gKiBgYGBkaWZmXG4gKiArIGltcG9ydCB7IGZpbmRBbGwgfSBmcm9tIFwiQGZpZ21hLXBsdWdpbi9oZWxwZXJzXCJcbiAqXG4gKiAtIGNvbnN0IHRleHROb2RlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIpO1xuICogKyBjb25zdCB0ZXh0Tm9kZXMgPSBmaW5kQWxsKGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuLCAobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIilcbiAqIGBgYFxuICovXG5jb25zdCBmaW5kQWxsID0gKG5vZGVzLCBpdGVyYXRlZSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGl0ZXJhdGVlKG5vZGVzW2ldLCBpLCBub2RlcykpIHtcbiAgICAgIHJlc3VsdC5wdXNoKG5vZGVzW2ldKTtcbiAgICB9IGVsc2UgaWYgKCgwLCBfLmhhc0NoaWxkcmVuKShub2Rlc1tpXSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKC4uLmZpbmRBbGwobm9kZXNbaV1bJ2NoaWxkcmVuJ10sIGl0ZXJhdGVlKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydHMuZmluZEFsbCA9IGZpbmRBbGw7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRBbGxGb250cztcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYWxsIHVzZWQgZm9udHMgdG8gdGV4dE5vZGVzXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEZvbnRzKHRleHROb2Rlcykge1xuICBjb25zdCBmb250cyA9IFtdO1xuXG4gIGNvbnN0IHB1c2hVbmlxdWUgPSBmb250ID0+IHtcbiAgICBpZiAoIWZvbnRzLnNvbWUoaXRlbSA9PiBpdGVtLmZhbWlseSA9PT0gZm9udC5mYW1pbHkgJiYgaXRlbS5zdHlsZSA9PT0gZm9udC5zdHlsZSkpIHtcbiAgICAgIGZvbnRzLnB1c2goZm9udCk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAoY29uc3Qgbm9kZSBvZiB0ZXh0Tm9kZXMpIHtcbiAgICBpZiAobm9kZS5mb250TmFtZSA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgIGNvbnN0IGxlbiA9IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgZm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShpLCBpICsgMSk7XG4gICAgICAgIHB1c2hVbmlxdWUoZm9udCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHB1c2hVbmlxdWUobm9kZS5mb250TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvbnRzO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Qm91bmRpbmdSZWN0O1xuXG52YXIgX2lzVW5kZWZpbmVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC9pc1VuZGVmaW5lZFwiKSk7XG5cbnZhciBfYXBwbHlNYXRyaXhUb1BvaW50ID0gcmVxdWlyZShcIi4vYXBwbHlNYXRyaXhUb1BvaW50XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqICB0aGlzIGZ1bmN0aW9uIHJldHVybiBhIGJvdW5kaW5nIHJlY3QgZm9yIGFuIG5vZGVzXG4gKi9cbi8vIHgveSBhYnNvbHV0ZSBjb29yZGluYXRlc1xuLy8gaGVpZ2h0L3dpZHRoXG4vLyB4Mi95MiBib3R0b20gcmlnaHQgY29vcmRpbmF0ZXNcbmZ1bmN0aW9uIGdldEJvdW5kaW5nUmVjdChub2Rlcykge1xuICBjb25zdCBib3VuZGluZ1JlY3QgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHgyOiAwLFxuICAgIHkyOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9O1xuXG4gIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICBjb25zdCB4eSA9IG5vZGVzLnJlZHVjZSgocmV6LCBub2RlKSA9PiB7XG4gICAgICBpZiAoIW5vZGUuYWJzb2x1dGVUcmFuc2Zvcm0pIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdQcm92aWRlZCBub2RlIGhhdmVuXFwndCBcImFic29sdXRlVHJhbnNmb3JtXCIgcHJvcGVydHksIGJ1dCBpdFxcJ3MgcmVxdWlyZWQgZm9yIGNhbGN1bGF0aW9ucy4nKTtcbiAgICAgICAgcmV0dXJuIHJlejtcbiAgICAgIH1cblxuICAgICAgaWYgKCgwLCBfaXNVbmRlZmluZWQyLmRlZmF1bHQpKG5vZGUuaGVpZ2h0KSB8fCAoMCwgX2lzVW5kZWZpbmVkMi5kZWZhdWx0KShub2RlLndpZHRoKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1Byb3ZpZGVkIG5vZGUgaGF2ZW5cXCd0IFwid2lkdGgvaGVpZ2h0XCIgcHJvcGVydHksIGJ1dCBpdFxcJ3MgcmVxdWlyZWQgZm9yIGNhbGN1bGF0aW9ucy4nKTtcbiAgICAgICAgcmV0dXJuIHJlejtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGFsZkhlaWdodCA9IG5vZGUuaGVpZ2h0IC8gMjtcbiAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IG5vZGUud2lkdGggLyAyO1xuICAgICAgY29uc3QgW1tjMCwgczAsIHhdLCBbczEsIGMxLCB5XV0gPSBub2RlLmFic29sdXRlVHJhbnNmb3JtO1xuICAgICAgY29uc3QgbWF0cml4ID0gW1tjMCwgczAsIHggKyBoYWxmV2lkdGggKiBjMCArIGhhbGZIZWlnaHQgKiBzMF0sIFtzMSwgYzEsIHkgKyBoYWxmV2lkdGggKiBzMSArIGhhbGZIZWlnaHQgKiBjMV1dOyAvLyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGNvcm5lcnMgb2YgdGhlIHJlY3RhbmdsZVxuXG4gICAgICBjb25zdCBYWSA9IHtcbiAgICAgICAgeDogWzEsIC0xLCAxLCAtMV0sXG4gICAgICAgIHk6IFsxLCAtMSwgLTEsIDFdXG4gICAgICB9OyAvLyBmaWxsIGluXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShtYXRyaXgsIFtYWS54W2ldICogaGFsZldpZHRoLCBYWS55W2ldICogaGFsZkhlaWdodF0pO1xuICAgICAgICBYWS54W2ldID0gYVswXTtcbiAgICAgICAgWFkueVtpXSA9IGFbMV07XG4gICAgICB9XG5cbiAgICAgIFhZLnguc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgWFkueS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICByZXoueC5wdXNoKFhZLnhbMF0pO1xuICAgICAgcmV6LnkucHVzaChYWS55WzBdKTtcbiAgICAgIHJlei54Mi5wdXNoKFhZLnhbM10pO1xuICAgICAgcmV6LnkyLnB1c2goWFkueVszXSk7XG4gICAgICByZXR1cm4gcmV6O1xuICAgIH0sIHtcbiAgICAgIHg6IFtdLFxuICAgICAgeTogW10sXG4gICAgICB4MjogW10sXG4gICAgICB5MjogW11cbiAgICB9KTtcbiAgICBjb25zdCByZWN0ID0ge1xuICAgICAgeDogTWF0aC5taW4oLi4ueHkueCksXG4gICAgICB5OiBNYXRoLm1pbiguLi54eS55KSxcbiAgICAgIHgyOiBNYXRoLm1heCguLi54eS54MiksXG4gICAgICB5MjogTWF0aC5tYXgoLi4ueHkueTIpXG4gICAgfTtcbiAgICBib3VuZGluZ1JlY3QueCA9IHJlY3QueDtcbiAgICBib3VuZGluZ1JlY3QueSA9IHJlY3QueTtcbiAgICBib3VuZGluZ1JlY3QueDIgPSByZWN0LngyO1xuICAgIGJvdW5kaW5nUmVjdC55MiA9IHJlY3QueTI7XG4gICAgYm91bmRpbmdSZWN0LndpZHRoID0gcmVjdC54MiAtIHJlY3QueDtcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0ID0gcmVjdC55MiAtIHJlY3QueTtcbiAgfVxuXG4gIHJldHVybiBib3VuZGluZ1JlY3Q7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFRleHROb2RlQ1NTID0gdm9pZCAwO1xuXG52YXIgX2dldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvZ2V0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgc3RyaW5nVmFsdWVUb0NzcyA9IHZhbHVlID0+IHtcbiAgaWYgKC9yaWdodHxib3R0b20vaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnZmxleC1lbmQnO1xuICB9IGVsc2UgaWYgKC9sZWZ0fHRvcC9pLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdmbGV4LXN0YXJ0JztcbiAgfSBlbHNlIGlmICgvY2VudGVyL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2NlbnRlcic7XG4gIH0gZWxzZSBpZiAoL2xvd2VyL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2xvd2VyY2FzZSc7XG4gIH0gZWxzZSBpZiAoL3VwcGVyL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ3VwcGVyY2FzZSc7XG4gIH0gZWxzZSBpZiAoL3RpdGxlL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2NhcGl0YWxpemUnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnbm9uZSc7XG4gIH1cbn07XG5cbmNvbnN0IHVuaXRWYWx1ZVRvQ3NzID0gKHtcbiAgdW5pdCxcbiAgdmFsdWVcbn0pID0+IHtcbiAgaWYgKHVuaXQgPT09ICdQRVJDRU5UJykge1xuICAgIHJldHVybiBgJHt2YWx1ZX0lYDtcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnUElYRUxTJykge1xuICAgIHJldHVybiBgJHt2YWx1ZX1weGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdhdXRvJztcbiAgfVxufTtcblxuY29uc3QgaXNVbml0VmFsdWUgPSBvYmogPT4ge1xuICByZXR1cm4gb2JqLmhhc093blByb3BlcnR5KCd1bml0Jyk7XG59O1xuXG5jb25zdCBnZXRTdHlsZVZhbHVlID0gKG5vZGUsIGtleSwgZXhhY3RTdHJpbmcpID0+IHtcbiAgY29uc3QgdmFsdWUgPSAoMCwgX2dldDIuZGVmYXVsdCkobm9kZSwga2V5KTtcblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZXhhY3RTdHJpbmcgPyB2YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSA6IHN0cmluZ1ZhbHVlVG9Dc3ModmFsdWUudG9Mb3dlckNhc2UoKS50cmltKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYCR7dmFsdWV9cHhgO1xuICB9IGVsc2UgaWYgKGlzVW5pdFZhbHVlKHZhbHVlKSkge1xuICAgIHJldHVybiB1bml0VmFsdWVUb0Nzcyh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKCdVbmV4cGVjdGVkIHZhbHVlOiAnLCB2YWx1ZSk7XG4gIH1cbn07XG4vKipcbiAqICBnZXQgQ1NTIHN0eWxlcyBvZiBUZXh0Tm9kZVxuICovXG5cblxuY29uc3QgZ2V0VGV4dE5vZGVDU1MgPSBub2RlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3knKSxcbiAgICBsZWZ0OiBnZXRTdHlsZVZhbHVlKG5vZGUsICd4JyksXG4gICAgd2lkdGg6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3dpZHRoJyksXG4gICAgaGVpZ2h0OiBnZXRTdHlsZVZhbHVlKG5vZGUsICdoZWlnaHQnKSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgJ2p1c3RpZnktY29udGVudCc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3RleHRBbGlnbkhvcml6b250YWwnKSxcbiAgICAnYWxpZ24taXRlbXMnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICd0ZXh0QWxpZ25WZXJ0aWNhbCcpLFxuICAgICd0ZXh0LWluZGVudCc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3BhcmFncmFwaEluZGVudCcpLFxuICAgICdsZXR0ZXItc3BhY2luZyc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2xldHRlclNwYWNpbmcnKSxcbiAgICAnbGluZS1oZWlnaHQnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICdsaW5lSGVpZ2h0JyksXG4gICAgJ2ZvbnQtc2l6ZSc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnRTaXplJyksXG4gICAgJ2ZvbnQtc3R5bGUnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICdmb250TmFtZS5zdHlsZScsIHRydWUpLFxuICAgICdmb250LXdlaWdodCc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnROYW1lLnN0eWxlJywgdHJ1ZSksXG4gICAgJ3RleHQtZGVjb3JhdGlvbic6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3RleHREZWNvcmF0aW9uJywgdHJ1ZSksXG4gICAgJ3RleHQtdHJhbnNmb3JtJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAndGV4dENhc2UnKSxcbiAgICAnZm9udC1mYW1pbHknOiBgJHtnZXRTdHlsZVZhbHVlKG5vZGUsICdmb250TmFtZS5mYW1pbHknLCB0cnVlKX0gJHtnZXRTdHlsZVZhbHVlKG5vZGUsICdmb250TmFtZS5zdHlsZScsIHRydWUpfWBcbiAgfTtcbn07IC8vIHRoaXMgZmlsZSBjYW4gYmUgZXh0ZW5kZWQgdG8gc3VwcG9ydCBhbGwgbm9kZSB0eXBlc1xuXG5cbmV4cG9ydHMuZ2V0VGV4dE5vZGVDU1MgPSBnZXRUZXh0Tm9kZUNTUzsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldE5vZGVJbmRleDtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gZ2V0IHRoZSByZXR1cm4gdGhlIGluZGV4IG9mIG5vZGUgaW4gaXRzIHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXROb2RlSW5kZXgobm9kZSkge1xuICByZXR1cm4gbm9kZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldFBhZ2U7XG5cbnZhciBfaXNUeXBlTm9kZSA9IHJlcXVpcmUoXCIuL2lzVHlwZU5vZGVcIik7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHBhc3MgaW4gYSBub2RlIGFuZCByZXR1cm4gaXRzIHBhZ2VOb2RlXG4gKi9cbmZ1bmN0aW9uIGdldFBhZ2Uobm9kZSkge1xuICBpZiAoISgwLCBfaXNUeXBlTm9kZS5pc1BhZ2VOb2RlKShub2RlKSkge1xuICAgIHJldHVybiBnZXRQYWdlKG5vZGUucGFyZW50KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRSZWxhdGl2ZVBvc2l0aW9uID0gZXhwb3J0cy5nZXRUb3BMZXZlbFBhcmVudCA9IHZvaWQgMDtcblxudmFyIF8gPSByZXF1aXJlKFwiLi4vXCIpO1xuXG4vKipcbiAqIFJldHVybiB0b3AgbGV2ZWwgcGFyZW50IGZvciBub2RlIGJlZm9yZSBQYWdlTm9kZS5cbiAqIEZvciBleGFtcGxlOlxuICogYGBganNcbiAqIC8vIGZvciBzdHJ1Y3R1cmUgYmVsb3dcbiAqIC8vIFBhZ2UgLyBGcmFtZSAvIEdyb3VwMSAvIEdyb3VwMiAvIFRleHRcbiAqXG4gKiBnZXRUb3BMZXZlbFBhcmVudChUZXh0KSAvLyBGcmFtZVxuICogYGBgXG4gKi9cbmNvbnN0IGdldFRvcExldmVsUGFyZW50ID0gbm9kZSA9PiB7XG4gIGlmIChub2RlICYmIG5vZGUucGFyZW50ICYmICEoMCwgXy5pc1BhZ2VOb2RlKShub2RlLnBhcmVudCkpIHtcbiAgICByZXR1cm4gZ2V0VG9wTGV2ZWxQYXJlbnQobm9kZS5wYXJlbnQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2RlO1xuICB9XG59O1xuLyoqXG4gKiBDYWxjdWxhdGUgcmVsYXRpdmUgcG9zaXRpb24gb2Ygbm9kZSBiYXNlZCBvbiBwcm92aWRlZCBwYXJlbnQgb3IgdG9wIGxldmVsIHBhcmVudC5cbiAqIEZvciBleGFtcGxlOlxuICogYGBganNcbiAqIC8vIGZvciBzdHJ1Y3R1cmUgYmVsb3dcbiAqIC8vIFBhZ2UgLyBGcmFtZSAvIEdyb3VwMSAvIEdyb3VwMiAvIFRleHRcbiAqXG4gKiBnZXRSZWxhdGl2ZVBvc2l0aW9uKFRleHQsIEdyb3VwMSkgLy8gd2lsbCBjYWxjdWxhdGUgeyB4LCB5IH0gYmFzZWQgb24gR3JvdXAxXG4gKlxuICogZ2V0UmVsYXRpdmVQb3NpdGlvbihUZXh0KSAvLyB3aWxsIGNhbGN1bGF0ZSB7IHgsIHkgfSBiYXNlZCBvbiBGcmFtZVxuICogYGBgXG4gKiovXG5cblxuZXhwb3J0cy5nZXRUb3BMZXZlbFBhcmVudCA9IGdldFRvcExldmVsUGFyZW50O1xuXG5jb25zdCBnZXRSZWxhdGl2ZVBvc2l0aW9uID0gKG5vZGUsIHJlbGF0aXZlTm9kZSkgPT4ge1xuICByZWxhdGl2ZU5vZGUgPSByZWxhdGl2ZU5vZGUgfHwgZ2V0VG9wTGV2ZWxQYXJlbnQobm9kZSk7XG4gIHJldHVybiB7XG4gICAgeDogTWF0aC5hYnMoTWF0aC5yb3VuZChyZWxhdGl2ZU5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMF1bMl0gLSBub2RlLmFic29sdXRlVHJhbnNmb3JtWzBdWzJdKSksXG4gICAgeTogTWF0aC5hYnMoTWF0aC5yb3VuZChyZWxhdGl2ZU5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMV1bMl0gLSBub2RlLmFic29sdXRlVHJhbnNmb3JtWzFdWzJdKSlcbiAgfTtcbn07XG5cbmV4cG9ydHMuZ2V0UmVsYXRpdmVQb3NpdGlvbiA9IGdldFJlbGF0aXZlUG9zaXRpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmhhc0NoaWxkcmVuID0gdm9pZCAwO1xuXG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGhhdmUgY2hpbGRyZW4gbm9kZXNcbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYHRzXG4gKiAvLyBCRUZPUkVcbiAqIGNvbnNvbGUubG9nKG5vZGUuY2hpbGRyZW4pIC8vIHRocm93IFRTIGVycm9yIFwiUHJvcGVydHkgJ2NoaWxkcmVuJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIC4uLlwiXG4gKlxuICogLy8gQUZURVJcbiAqIGlmIChoYXNDaGlsZHJlbihub2RlKSkge1xuICogIGNvbnNvbGUubG9nKG5vZGUuY2hpbGRyZW4pIC8vIHZhbGlkIGNvZGVcbiAqIH1cbiAqIGBgYFxuICpcbiAqL1xuY29uc3QgaGFzQ2hpbGRyZW4gPSBub2RlID0+IEJvb2xlYW4obm9kZVsnY2hpbGRyZW4nXSk7XG5cbmV4cG9ydHMuaGFzQ2hpbGRyZW4gPSBoYXNDaGlsZHJlbjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzUGFydE9mSW5zdGFuY2U7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIGNoZWNrIHdoZXRoZXIgYSBub2RlIGlzIHBhcnQgb2YgYW4gaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gaXNQYXJ0T2ZJbnN0YW5jZShub2RlKSB7XG4gIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50O1xuXG4gIGlmIChwYXJlbnQudHlwZSA9PT0gJ0lOU1RBTkNFJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHBhcmVudC50eXBlID09PSAnUEFHRScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlzUGFydE9mSW5zdGFuY2UocGFyZW50KTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNQYXJ0T2ZOb2RlO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBjaGVjayB3aGV0aGVyIGEgbm9kZSBpcyBwYXJ0IG9mIGFuIHJvb3ROb2RlXG4gKi9cbmZ1bmN0aW9uIGlzUGFydE9mTm9kZShwYXJ0LCByb290Tm9kZSkge1xuICBjb25zdCBwYXJlbnQgPSBwYXJ0LnBhcmVudDtcblxuICBpZiAocGFyZW50ID09PSByb290Tm9kZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHBhcmVudC50eXBlID09PSAnUEFHRScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlzUGFydE9mTm9kZShwYXJlbnQsIHJvb3ROb2RlKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc09uZU9mTm9kZVR5cGUgPSBleHBvcnRzLmlzQ29tcG9uZW50Tm9kZSA9IGV4cG9ydHMuaXNJbnN0YW5jZU5vZGUgPSBleHBvcnRzLmlzVGV4dE5vZGUgPSBleHBvcnRzLmlzRnJhbWVOb2RlID0gZXhwb3J0cy5pc0dyb3VwTm9kZSA9IGV4cG9ydHMuaXNQYWdlTm9kZSA9IHZvaWQgMDtcblxuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBQYWdlTm9kZVxuICovXG5jb25zdCBpc1BhZ2VOb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdQQUdFJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIEdyb3VwTm9kZVxuICovXG5cblxuZXhwb3J0cy5pc1BhZ2VOb2RlID0gaXNQYWdlTm9kZTtcblxuY29uc3QgaXNHcm91cE5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0dST1VQJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIEZyYW1lTm9kZVxuICovXG5cblxuZXhwb3J0cy5pc0dyb3VwTm9kZSA9IGlzR3JvdXBOb2RlO1xuXG5jb25zdCBpc0ZyYW1lTm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnRlJBTUUnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgVGV4dE5vZGVcbiAqL1xuXG5cbmV4cG9ydHMuaXNGcmFtZU5vZGUgPSBpc0ZyYW1lTm9kZTtcblxuY29uc3QgaXNUZXh0Tm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnVEVYVCc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBJbnN0YW5jZU5vZGVcbiAqL1xuXG5cbmV4cG9ydHMuaXNUZXh0Tm9kZSA9IGlzVGV4dE5vZGU7XG5cbmNvbnN0IGlzSW5zdGFuY2VOb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdJTlNUQU5DRSc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBDb21wb25lbnROb2RlXG4gKi9cblxuXG5leHBvcnRzLmlzSW5zdGFuY2VOb2RlID0gaXNJbnN0YW5jZU5vZGU7XG5cbmNvbnN0IGlzQ29tcG9uZW50Tm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnQ09NUE9ORU5UJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIG9uZSBvZiBwcm92aWRlZCB0eXBlc1xuICovXG5cblxuZXhwb3J0cy5pc0NvbXBvbmVudE5vZGUgPSBpc0NvbXBvbmVudE5vZGU7XG5cbmNvbnN0IGlzT25lT2ZOb2RlVHlwZSA9IChub2RlLCB0eXBlTGlzdCkgPT4ge1xuICByZXR1cm4gdHlwZUxpc3QuaW5jbHVkZXMobm9kZS50eXBlKTtcbn07XG5cbmV4cG9ydHMuaXNPbmVPZk5vZGVUeXBlID0gaXNPbmVPZk5vZGVUeXBlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNWaXNpYmxlTm9kZTtcblxuLyoqXG4gKiBUaGlzIGhlbHBlciByZWN1cnNpdmVseSBjaGVja3MgYWxsIHBhcmVudHMgZm9yIHZpc2liaWxpdHksIHRvIGd1YXJhbnRlZSB0aGF0J3Mgbm9kZSBpcyB2aXNpYmxlXG4gKi9cbmZ1bmN0aW9uIGlzVmlzaWJsZU5vZGUobm9kZSkge1xuICBpZiAobm9kZSAmJiBub2RlLnBhcmVudCkge1xuICAgIGlmIChub2RlLnZpc2libGUgJiYgbm9kZS5wYXJlbnQudHlwZSAhPT0gJ1BBR0UnKSB7XG4gICAgICByZXR1cm4gaXNWaXNpYmxlTm9kZShub2RlLnBhcmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBub2RlLnZpc2libGU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbG9hZEZvbnRzO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYXN5bmNocm9ub3VzbHkgbG9hZHMgdGhlIHBhc3NlZCBmb250c1xuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkRm9udHMoZm9udHMpIHtcbiAgY29uc3QgcHJvbWlzZXMgPSBmb250cy5tYXAoZm9udCA9PiBmaWdtYS5sb2FkRm9udEFzeW5jKGZvbnQpKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICByZXR1cm4gZm9udHM7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsb2FkVW5pcXVlRm9udHM7XG5cbnZhciBfZ2V0QWxsRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2dldEFsbEZvbnRzXCIpKTtcblxudmFyIF9sb2FkRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRGb250c1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIGxvYWQgb25seSB1bmlxdWUgZm9udHMgYXN5bmNocm9ub3VzbHlcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZFVuaXF1ZUZvbnRzKHRleHROb2Rlcykge1xuICBjb25zdCBmb250cyA9ICgwLCBfZ2V0QWxsRm9udHMuZGVmYXVsdCkodGV4dE5vZGVzKTtcbiAgcmV0dXJuICgwLCBfbG9hZEZvbnRzLmRlZmF1bHQpKGZvbnRzKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubm9kZVRvT2JqZWN0ID0gdm9pZCAwO1xuXG4vKipcbiAqIFRyYW5zZm9ybSBub2RlIHRvIG9iamVjdCB3aXRoIGtleXMsIHRoYXQgYXJlIGhpZGRlbiBieSBkZWZhdWx0LlxuICogRm9yIGV4YW1wbGU6XG4gKiBgYGB0c1xuICogY29uc3Qgbm9kZSA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRPbmUoKGVsKSA9PiBlbC50eXBlID09PSBcIlRFWFRcIik7XG4gKiBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhub2RlKS5sZW5ndGgpIC8vIDFcbiAqIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKG5vZGVUb09iamVjdChub2RlKSkubGVuZ3RoKSAvLyA0MlxuICogY29uc29sZS5sb2coT2JqZWN0LmtleXMobm9kZVRvT2JqZWN0KG5vZGUsIHRydWUpKS5sZW5ndGgpIC8vIDM5XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gbm9kZVxuICogQHBhcmFtIHdpdGhvdXRSZWxhdGlvbnNcbiAqL1xuY29uc3Qgbm9kZVRvT2JqZWN0ID0gKG5vZGUsIHdpdGhvdXRSZWxhdGlvbnMpID0+IHtcbiAgY29uc3QgcHJvcHMgPSBPYmplY3QuZW50cmllcyhPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXykpO1xuICBjb25zdCBibGFja2xpc3QgPSBbJ3BhcmVudCcsICdjaGlsZHJlbicsICdyZW1vdmVkJywgJ21hc3RlckNvbXBvbmVudCddO1xuICBjb25zdCBvYmogPSB7XG4gICAgaWQ6IG5vZGUuaWQsXG4gICAgdHlwZTogbm9kZS50eXBlXG4gIH07XG5cbiAgZm9yIChjb25zdCBbbmFtZSwgcHJvcF0gb2YgcHJvcHMpIHtcbiAgICBpZiAocHJvcC5nZXQgJiYgIWJsYWNrbGlzdC5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmpbbmFtZV0gPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgb2JqW25hbWVdID0gJ01peGVkJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmpbbmFtZV0gPSBwcm9wLmdldC5jYWxsKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgb2JqW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChub2RlLnBhcmVudCAmJiAhd2l0aG91dFJlbGF0aW9ucykge1xuICAgIG9iai5wYXJlbnQgPSB7XG4gICAgICBpZDogbm9kZS5wYXJlbnQuaWQsXG4gICAgICB0eXBlOiBub2RlLnBhcmVudC50eXBlXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub2RlLmNoaWxkcmVuICYmICF3aXRob3V0UmVsYXRpb25zKSB7XG4gICAgb2JqLmNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gbm9kZVRvT2JqZWN0KGNoaWxkLCB3aXRob3V0UmVsYXRpb25zKSk7XG4gIH1cblxuICBpZiAobm9kZS5tYXN0ZXJDb21wb25lbnQgJiYgIXdpdGhvdXRSZWxhdGlvbnMpIHtcbiAgICBvYmoubWFzdGVyQ29tcG9uZW50ID0gbm9kZVRvT2JqZWN0KG5vZGUubWFzdGVyQ29tcG9uZW50LCB3aXRob3V0UmVsYXRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5leHBvcnRzLm5vZGVUb09iamVjdCA9IG5vZGVUb09iamVjdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VUZXh0U3R5bGUgPSBwYXJzZVRleHRTdHlsZTtcbmV4cG9ydHMuc3BsaXRUZXh0U3R5bGVJbnRvTGluZXMgPSBzcGxpdFRleHRTdHlsZUludG9MaW5lcztcbmV4cG9ydHMuam9pblRleHRMaW5lc1N0eWxlcyA9IGpvaW5UZXh0TGluZXNTdHlsZXM7XG5leHBvcnRzLmFwcGx5VGV4dFN0eWxlVG9UZXh0Tm9kZSA9IGFwcGx5VGV4dFN0eWxlVG9UZXh0Tm9kZTtcbmV4cG9ydHMuY2hhbmdlQ2hhcmFjdGVyc1RleHRTdHlsZSA9IGNoYW5nZUNoYXJhY3RlcnNUZXh0U3R5bGU7XG5leHBvcnRzLmNoYW5nZVRleHRTdHlsZSA9IGNoYW5nZVRleHRTdHlsZTtcblxudmFyIF91bmlxV2l0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvdW5pcVdpdGhcIikpO1xuXG52YXIgX2Nsb25lRGVlcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvY2xvbmVEZWVwXCIpKTtcblxudmFyIF9pc0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC9pc0VxdWFsXCIpKTtcblxudmFyIF9nZXRBbGxGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ2V0QWxsRm9udHNcIikpO1xuXG52YXIgX2xvYWRGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZEZvbnRzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgc3R5bGVGb250cyA9IFsnZm9udFNpemUnLCAnZm9udE5hbWUnLCAndGV4dENhc2UnLCAndGV4dERlY29yYXRpb24nLCAnbGV0dGVyU3BhY2luZycsICdsaW5lSGVpZ2h0JywgJ2ZpbGxzJywgJ3RleHRTdHlsZUlkJywgJ2ZpbGxTdHlsZUlkJ107XG4vKlxuXHRUaGUgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGV4dCBub2RlIHN0eWxlcywgc3BsaXR0aW5nIHRoZW0gaW50byBkaWZmZXJlbnQgYXJyYXlzLCBzdWNoIGFzOlxuXHRbe1xuXHRcdGNoYXJhY3RlcnM6IFwiLi4uXCIsXG5cdFx0Li4uIChzdHlsZXMpXG5cdH0sIC4uLl1cblxuXHQtLS1cblxuXHRSZXR1cm5zIHN0eWxlcyBmb3IgdGhlIGVudGlyZSB0ZXh0OlxuXHRwYXJzZVRleHRTdHlsZSh0ZXh0Tm9kZSlcblx0XG5cdFJldHVybnMgdGV4dCBzdHlsZXMgZnJvbSB0aGUgMTAwdGggdG8gdGhlIGxhc3QgY2hhcmFjdGVyOlxuXHRwYXJzZVRleHRTdHlsZSh0ZXh0Tm9kZSwgMTAwKVxuXG5cdFJldHVybnMgc3R5bGVzIGZvciB0aGUgZW50aXJlIHRleHQsIGJ1dCBvbmx5IHdpdGggZm9udE5hbWUgYW5kIHRleHREZWNvcmF0aW9uOlxuXHRwYXJzZVRleHRTdHlsZSh0ZXh0Tm9kZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFtcImZvbnROYW1lXCIsIFwidGV4dERlY29yYXRpb25cIl0pXG4qL1xuXG5mdW5jdGlvbiBwYXJzZVRleHRTdHlsZShub2RlLCBzdGFydCA9IDAsIGVuZCwgc3R5bGVOYW1lKSB7XG4gIGlmICghZW5kKSBlbmQgPSBub2RlLmNoYXJhY3RlcnMubGVuZ3RoO1xuICBpZiAoIXN0eWxlTmFtZSkgc3R5bGVOYW1lID0gc3R5bGVGb250cztcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgY29uc29sZS5lcnJvcignU3RhcnQgbXVzdCBiZSBncmVhdGVyIHRoYW4gZW5kJyk7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vIHN0cmluZyBzdWJzdHJpbmcsIGRlZmluZWQgc3R5bGVzXG5cblxuICBjb25zdCBzdHlsZU1hcCA9IFtdOyAvLyBhIGNvbXBvc2luZyBzdHJpbmcgb2YgYSBzcGVjaWZpYyBzdHlsZVxuXG4gIGxldCB0ZXh0U3R5bGU7XG4gIGNvbnN0IG5hbWVzID0gc3R5bGVOYW1lLm1hcChuYW1lID0+IHtcbiAgICByZXR1cm4gbmFtZS5yZXBsYWNlKC9eKC4pL2csICQxID0+ICQxLnRvVXBwZXJDYXNlKCkpO1xuICB9KTsgLy8gc3BsaXR0aW5nIHRleHQgaW50byBzdWJzdHJpbmdzIGJ5IHN0eWxlXG5cbiAgZm9yIChsZXQgc3RhcnRJbmRleCA9IHN0YXJ0OyBzdGFydEluZGV4IDwgZW5kOyBzdGFydEluZGV4KyspIHtcbiAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyAxO1xuICAgIGNvbnN0IGxldHRlciA9IHtcbiAgICAgIGNoYXJhY3RlcnM6IG5vZGUuY2hhcmFjdGVyc1tzdGFydEluZGV4XVxuICAgIH07IC8vIGNvbGxlY3Rpb24gb2Ygc3R5bGVzXG5cbiAgICBuYW1lcy5mb3JFYWNoKChuLCBpKSA9PiB7XG4gICAgICBsZXR0ZXJbc3R5bGVOYW1lW2ldXSA9IG5vZGVbJ2dldFJhbmdlJyArIG5dKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgICB9KTtcblxuICAgIGlmICh0ZXh0U3R5bGUpIHtcbiAgICAgIGlmIChpc0VxdWFsTGV0dGVyU3R5bGUobGV0dGVyLCB0ZXh0U3R5bGUpKSB7XG4gICAgICAgIC8vIHRoZSBjaGFyYWN0ZXIgaGFzIHRoZSBzYW1lIHByb3BlcnRpZXMgYXMgdGhlIGdlbmVyYXRlZCBzdWJzdHJpbmdcbiAgICAgICAgLy8gYWRkIGl0IHRvIGl0XG4gICAgICAgIHRleHRTdHlsZS5jaGFyYWN0ZXJzICs9IGxldHRlci5jaGFyYWN0ZXJzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc3R5bGUgcHJvcGVydGllcyBhcmUgZGlmZmVyZW50XG4gICAgICAgIHN0eWxlTWFwLnB1c2godGV4dFN0eWxlKTsgLy8gd2Ugc3RhcnQgdG8gZm9ybSBhIG5ldyBzdWJzdHJpbmdcblxuICAgICAgICB0ZXh0U3R5bGUgPSBsZXR0ZXI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdlIHN0YXJ0IGZvcm1pbmcgdGhlIGZpcnN0IHN1YnN0cmluZ1xuICAgICAgdGV4dFN0eWxlID0gbGV0dGVyO1xuICAgIH1cbiAgfVxuXG4gIHN0eWxlTWFwLnB1c2godGV4dFN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlTWFwO1xufVxuLypcblx0QWxsb3dzIHRvIHNwbGl0IHRoZSBzdHlsZXMgb2J0YWluZWQgd2l0aCBwYXJzZVRleHRTdHlsZSBpbnRvIGxpbmVzIGJhc2VkIG9uIG5ld2xpbmVzLlxuXG5cdElmIHRoZSByZW1vdmVOZXdsaW5lQ2hhcmFjdGVycyBwYXJhbWV0ZXIgPT0gdHJ1ZSwgdGhlIG5ld2xpbmUgY2hhcmFjdGVycyB3aWxsIGJlIHJlbW92ZWQuXG5cdFJlbW92ZUVtcHR5bGluZXMgPT0gdHJ1ZSB3aWxsIHJlbW92ZSBlbXB0eSBsaW5lcy5cbiovXG5cblxuZnVuY3Rpb24gc3BsaXRUZXh0U3R5bGVJbnRvTGluZXModGV4dFN0eWxlLCByZW1vdmVOZXdsaW5lQ2hhcmFjdGVycyA9IGZhbHNlLCByZW1vdmVFbXB0eWxpbmVzID0gZmFsc2UpIHtcbiAgbGV0IGxpbmUgPSBbXTtcbiAgbGV0IGxpbmVzID0gW107XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKC4rfCg/PD1cXG4pKC4/KSg/PSQpKShcXG58XFx1MjAyOCk/fChcXG58XFx1MjAyOCknLCAnZycpO1xuICBjb25zdCByZTIgPSBuZXcgUmVnRXhwKCdcXG58XFx1MjAyOCcpO1xuICB0ZXh0U3R5bGUuZm9yRWFjaCgoc3R5bGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKHJlMi50ZXN0KHN0eWxlLmNoYXJhY3RlcnMpKSB7XG4gICAgICBjb25zdCBscyA9IHN0eWxlLmNoYXJhY3RlcnMubWF0Y2gocmUpO1xuXG4gICAgICBpZiAobHMgPT09IG51bGwpIHtcbiAgICAgICAgLy8gdGV4dCBpcyBtaXNzaW5nXG4gICAgICAgIGxpbmUucHVzaChzdHlsZSk7XG4gICAgICB9IGVsc2UgaWYgKGxzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyB0aGUgc3R5bGUgdGV4dCBjb25zaXN0cyBvZiAxIGxpbmVcbiAgICAgICAgbGluZS5wdXNoKHN0eWxlKTtcbiAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgbGluZSA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbXVsdGlwbGUtbGluZSB0ZXh0XG4gICAgICAgIHN0eWxlID0gKDAsIF9jbG9uZURlZXAyLmRlZmF1bHQpKHN0eWxlKTtcbiAgICAgICAgc3R5bGUuY2hhcmFjdGVycyA9IGxzLnNoaWZ0KCk7XG4gICAgICAgIGxpbmUucHVzaChzdHlsZSk7XG4gICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIGxpbmUgPSBbXTtcbiAgICAgICAgY29uc3QgbGFzdCA9IGxzLnBvcCgpOyAvLyBkZWFsaW5nIHdpdGggaW50ZXJuYWwgdGV4dCBzdHJpbmdzXG5cbiAgICAgICAgbGluZXMucHVzaCguLi5scy5tYXAoZSA9PiB7XG4gICAgICAgICAgc3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkoc3R5bGUpO1xuICAgICAgICAgIHN0eWxlLmNoYXJhY3RlcnMgPSBlO1xuICAgICAgICAgIHJldHVybiBbc3R5bGVdO1xuICAgICAgICB9KSk7XG4gICAgICAgIHN0eWxlID0gKDAsIF9jbG9uZURlZXAyLmRlZmF1bHQpKHN0eWxlKTtcbiAgICAgICAgc3R5bGUuY2hhcmFjdGVycyA9IGxhc3Q7XG5cbiAgICAgICAgaWYgKGxhc3QgPT09ICcnKSB7XG4gICAgICAgICAgaWYgKCF0ZXh0U3R5bGVbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgLy8gbGFzdCBsaW5lIGZpbmFsXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFtzdHlsZV0pO1xuICAgICAgICAgIH0gLy8gZWxzZSBmYWxzZSBlbmQgb2YgdGV4dFxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZG9lcyBub3QgZW5kXG4gICAgICAgICAgbGluZS5wdXNoKHN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lLnB1c2goc3R5bGUpO1xuICAgIH1cbiAgfSk7XG4gIGlmIChsaW5lLmxlbmd0aCkgbGluZXMucHVzaChsaW5lKTsgLy8gZGVsZXRpbmcgbmV3bGluZSBjaGFyYWN0ZXJzXG5cbiAgaWYgKHJlbW92ZU5ld2xpbmVDaGFyYWN0ZXJzKSB7XG4gICAgbGluZXMuZm9yRWFjaChsID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlID0gbFtsLmxlbmd0aCAtIDFdO1xuICAgICAgc3R5bGUuY2hhcmFjdGVycyA9IHN0eWxlLmNoYXJhY3RlcnMucmVwbGFjZShyZTIsICcnKTtcbiAgICB9KTtcbiAgfSAvLyBkZWxldGluZyBlbXB0eSBsaW5lc1xuXG5cbiAgaWYgKHJlbW92ZUVtcHR5bGluZXMpIHtcbiAgICBsaW5lcyA9IGxpbmVzLmZpbHRlcihsID0+IGwuZmlsdGVyKGwgPT4gbC5jaGFyYWN0ZXJzLnJlcGxhY2UocmUyLCAnJykgIT09ICcnKS5sZW5ndGggIT09IDApO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVzO1xufVxuLypcblx0SW52ZXJzZSBmdW5jdGlvbiBvZiBzcGxpdFRleHRTdHlsZUludG9MaW5lcy5cblx0VGhlIGFkZE5ld2xpbmVDaGFyYWN0ZXJzIHBhcmFtZXRlciBpcyByZXNwb25zaWJsZSBmb3Igd2hldGhlciB5b3UgbmVlZCB0byBhZGQgYSBuZXdsaW5lIGNoYXJhY3RlciBhdCB0aGUgZW5kIG9mIGVhY2ggbGluZVxuKi9cblxuXG5mdW5jdGlvbiBqb2luVGV4dExpbmVzU3R5bGVzKHRleHRTdHlsZSwgYWRkTmV3bGluZUNoYXJhY3RlcnMgPSBmYWxzZSkge1xuICBjb25zdCB0U3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkodGV4dFN0eWxlKTtcbiAgbGV0IG5ld2xpbmUgPSAnJztcblxuICBzd2l0Y2ggKHR5cGVvZiBhZGROZXdsaW5lQ2hhcmFjdGVycykge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgaWYgKGFkZE5ld2xpbmVDaGFyYWN0ZXJzKSBuZXdsaW5lID0gJ1xcbic7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBuZXdsaW5lID0gYWRkTmV3bGluZUNoYXJhY3RlcnM7XG4gICAgICBicmVhaztcbiAgfSAvLyBhZGRpbmcgbmV3IGxpbmUgY2hhcmFjdGVyc1xuXG5cbiAgaWYgKGFkZE5ld2xpbmVDaGFyYWN0ZXJzICYmIG5ld2xpbmUpIHtcbiAgICB0U3R5bGUuZm9yRWFjaCgoc3R5bGUsIGkpID0+IHtcbiAgICAgIGlmIChpICE9PSB0U3R5bGUubGVuZ3RoIC0gMSkgc3R5bGVbc3R5bGUubGVuZ3RoIC0gMV0uY2hhcmFjdGVycyArPSBuZXdsaW5lO1xuICAgIH0pO1xuICB9IC8vIGpvaW5cblxuXG4gIGNvbnN0IGxpbmUgPSB0U3R5bGUuc2hpZnQoKTtcbiAgdFN0eWxlLmZvckVhY2goc3R5bGUgPT4ge1xuICAgIGNvbnN0IGZpdHN0ID0gc3R5bGUuc2hpZnQoKTtcblxuICAgIGlmIChpc0VxdWFsTGV0dGVyU3R5bGUoZml0c3QsIGxpbmVbbGluZS5sZW5ndGggLSAxXSkpIHtcbiAgICAgIC8vIHRoZSBzdHlsZSBvZiB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5lIGRpZmZlcnMgZnJvbSB0aGUgZW5kIG9mIHRoZSBzdHlsZSBvZiB0aGUgdGV4dCBiZWluZyBjb21waWxlZFxuICAgICAgbGluZVtsaW5lLmxlbmd0aCAtIDFdLmNoYXJhY3RlcnMgKz0gZml0c3QuY2hhcmFjdGVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZS5wdXNoKGZpdHN0KTtcbiAgICB9XG5cbiAgICBpZiAoc3R5bGUubGVuZ3RoKSBsaW5lLnB1c2goLi4uc3R5bGUpO1xuICB9KTtcbiAgcmV0dXJuIGxpbmU7XG59XG4vKlxuXHRBcHBseSB0aGUgdGV4dCBzdHlsZXMgb2J0YWluZWQgZnJvbSBwYXJzZVRleHRTdHlsZSB0byB0aGUgdGV4dCBub2RlLlxuXHRUaGUgc2Vjb25kIHBhcmFtZXRlciBjYW4gYmUgcGFzc2VkIGEgdGV4dCBub2RlLCB0aGUgdGV4dCBvZiB3aGljaCB3aWxsIGJlIGNoYW5nZWQuXG4qL1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGFwcGx5VGV4dFN0eWxlVG9UZXh0Tm9kZSh0ZXh0U3R5bGUsIHRleHROb2RlLCBpc0xvYWRGb250cyA9IHRydWUpIHtcbiAgaWYgKGlzTG9hZEZvbnRzKSB7XG4gICAgbGV0IGZvbnRzID0gW3tcbiAgICAgIGZhbWlseTogJ1JvYm90bycsXG4gICAgICBzdHlsZTogJ1JlZ3VsYXInXG4gICAgfV07XG5cbiAgICBpZiAodGV4dFN0eWxlWzBdLmZvbnROYW1lKSB7XG4gICAgICBmb250cy5wdXNoKC4uLnRleHRTdHlsZS5tYXAoZSA9PiBlLmZvbnROYW1lKSk7XG4gICAgfVxuXG4gICAgaWYgKHRleHROb2RlKSB7XG4gICAgICBmb250cy5wdXNoKC4uLigwLCBfZ2V0QWxsRm9udHMuZGVmYXVsdCkoW3RleHROb2RlXSkpO1xuICAgIH1cblxuICAgIGZvbnRzID0gKDAsIF91bmlxV2l0aDIuZGVmYXVsdCkoZm9udHMsIF9pc0VxdWFsMi5kZWZhdWx0KTtcbiAgICBhd2FpdCAoMCwgX2xvYWRGb250cy5kZWZhdWx0KShmb250cyk7XG4gIH1cblxuICBpZiAoIXRleHROb2RlKSB0ZXh0Tm9kZSA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IHRleHRTdHlsZS5yZWR1Y2UoKHN0ciwgc3R5bGUpID0+IHtcbiAgICByZXR1cm4gc3RyICsgc3R5bGUuY2hhcmFjdGVycztcbiAgfSwgJycpO1xuICBsZXQgbiA9IDA7XG4gIHRleHRTdHlsZS5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICBjb25zdCBMID0gc3R5bGUuY2hhcmFjdGVycy5sZW5ndGg7XG5cbiAgICBpZiAoTCkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICAgICAgaWYgKGtleSAhPT0gJ2NoYXJhY3RlcnMnKSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGtleS5yZXBsYWNlKC9eKC4pL2csICQxID0+ICQxLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgIHRleHROb2RlWydzZXRSYW5nZScgKyBuYW1lXShuLCBuICsgTCwgc3R5bGVba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbiArPSBMO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0ZXh0Tm9kZTtcbn1cbi8qXG5cdFJlcGxhY2luZyB0ZXh0IGluIHRleHRTdHlsZVxuXHRJZiB0aGUgcGFzc2VkIHRleHQgaXMgc2hvcnRlciB0aGFuIGluIHN0eWxlcywgdGhlIGV4dHJhIHN0eWxlcyB3aWxsIGJlIHJlbW92ZWQuXG5cdElmIHRoZSBwYXNzZWQgdGV4dCBpcyBsb25nZXIgdGhhbiB0aGUgc3R5bGVzLCB0aGUgb3ZlcmZsb3cgdGV4dCB3aWxsIGdldCB0aGUgc3R5bGUgb2YgdGhlIGxhc3QgY2hhcmFjdGVyLlxuKi9cblxuXG5mdW5jdGlvbiBjaGFuZ2VDaGFyYWN0ZXJzVGV4dFN0eWxlKHRleHRTdHlsZSwgY2hhcmFjdGVycykge1xuICB0ZXh0U3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkodGV4dFN0eWxlKTtcbiAgbGV0IG4gPSAwO1xuICBjb25zdCBsZW5ndGggPSB0ZXh0U3R5bGUubGVuZ3RoIC0gMTtcbiAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcyA9IHRleHRTdHlsZVtpXTtcbiAgICBsZXQgbCA9IHMuY2hhcmFjdGVycy5sZW5ndGg7IC8vIGlmIHBhc3NlZCB0ZXh0IGlzIGxvbmdlciB0aGFuIHRleHQgaW4gc3R5bGVzXG5cbiAgICBpZiAoaSA9PSBsZW5ndGgpIGwgPSBjaGFyYWN0ZXJzTGVuZ3RoO1xuICAgIHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnMuc2xpY2UobiwgbiArIGwpO1xuICAgIG4gKz0gbDtcblxuICAgIGlmIChuID4gY2hhcmFjdGVyc0xlbmd0aCkge1xuICAgICAgLy8gbmV3IHRleHQgaXMgc2hvcnRlciB0aGFuIHRleHQgaW4gc3R5bGVzXG4gICAgICB0ZXh0U3R5bGUgPSB0ZXh0U3R5bGUuc3BsaWNlKDAsIGkgKyAxKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXh0U3R5bGU7XG59XG4vKlxuXHRGdW5jdGlvbiBmb3IgY2hhbmdpbmcgcHJvcGVydGllcyBvZiBUZXh0U3R5bGUuIFxuXHRUaGUgYmVmb3JlVmFsdWUgcGFyYW1ldGVyIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgdmFsdWUgaW4gd2hpY2ggdGhlIHByb3BlcnR5IHRvIGJlIGNoYW5nZWQgc2hvdWxkIGJlLlxuKi9cblxuXG5mdW5jdGlvbiBjaGFuZ2VUZXh0U3R5bGUodGV4dFN0eWxlLCBzdHlsZU5hbWUsIG5ld1ZhbHVlLCBiZWZvcmVWYWx1ZSkge1xuICB0ZXh0U3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkodGV4dFN0eWxlKTtcbiAgdGV4dFN0eWxlLmZvckVhY2goc3R5bGUgPT4ge1xuICAgIGlmIChiZWZvcmVWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGJlZm9yZVZhbHVlICE9PSB1bmRlZmluZWQgJiYgKDAsIF9pc0VxdWFsMi5kZWZhdWx0KShzdHlsZVtzdHlsZU5hbWVdLCBiZWZvcmVWYWx1ZSkpIHtcbiAgICAgIDtcbiAgICAgIHN0eWxlW3N0eWxlTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGV4dFN0eWxlO1xufVxuLypjb21wYXJpbmcgY2hhcmFjdGVyIHN0eWxlcyB0byB0aGUgc3R5bGVzIG9mIHRoZSBjb21wb3Npbmcgc3Vic3RyaW5nKi9cblxuXG5mdW5jdGlvbiBpc0VxdWFsTGV0dGVyU3R5bGUobGV0dGVyLCB0ZXh0U3R5bGUpIHtcbiAgbGV0IGlzID0gdHJ1ZTsgLy8gaXRlcmF0aW5nIG92ZXIgZm9udCBwcm9wZXJ0aWVzXG5cbiAgZm9yIChjb25zdCBrZXkgaW4gbGV0dGVyKSB7XG4gICAgaWYgKGtleSAhPT0gJ2NoYXJhY3RlcnMnKSB7XG4gICAgICBpZiAoISgwLCBfaXNFcXVhbDIuZGVmYXVsdCkobGV0dGVyW2tleV0sIHRleHRTdHlsZVtrZXldKSkge1xuICAgICAgICAvLyBwcm9wZXJ0eSB2YXJpZXNcbiAgICAgICAgLy8gc3RvcCBzZWFyY2hpbmdcbiAgICAgICAgaXMgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZXRDaGFyYWN0ZXJzID0gdm9pZCAwO1xuXG52YXIgX3VuaXFCeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvdW5pcUJ5XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgc2V0Q2hhcmFjdGVycyA9IGFzeW5jIChub2RlLCBjaGFyYWN0ZXJzLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGZhbGxiYWNrRm9udCA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmFsbGJhY2tGb250KSB8fCB7XG4gICAgZmFtaWx5OiAnUm9ib3RvJyxcbiAgICBzdHlsZTogJ1JlZ3VsYXInXG4gIH07XG5cbiAgdHJ5IHtcbiAgICBpZiAobm9kZS5mb250TmFtZSA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNtYXJ0U3RyYXRlZ3kpID09PSAncHJldmFpbCcpIHtcbiAgICAgICAgY29uc3QgZm9udEhhc2hUcmVlID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjaGFyRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShpIC0gMSwgaSk7XG4gICAgICAgICAgY29uc3Qga2V5ID0gYCR7Y2hhckZvbnQuZmFtaWx5fTo6JHtjaGFyRm9udC5zdHlsZX1gO1xuICAgICAgICAgIGZvbnRIYXNoVHJlZVtrZXldID0gZm9udEhhc2hUcmVlW2tleV0gPyBmb250SGFzaFRyZWVba2V5XSArIDEgOiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldmFpbGVkVHJlZUl0ZW0gPSBPYmplY3QuZW50cmllcyhmb250SGFzaFRyZWUpLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVswXTtcbiAgICAgICAgY29uc3QgW2ZhbWlseSwgc3R5bGVdID0gcHJldmFpbGVkVHJlZUl0ZW1bMF0uc3BsaXQoJzo6Jyk7XG4gICAgICAgIGNvbnN0IHByZXZhaWxlZEZvbnQgPSB7XG4gICAgICAgICAgZmFtaWx5LFxuICAgICAgICAgIHN0eWxlXG4gICAgICAgIH07XG4gICAgICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMocHJldmFpbGVkRm9udCk7XG4gICAgICAgIG5vZGUuZm9udE5hbWUgPSBwcmV2YWlsZWRGb250O1xuICAgICAgfSBlbHNlIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNtYXJ0U3RyYXRlZ3kpID09PSAnc3RyaWN0Jykge1xuICAgICAgICByZXR1cm4gc2V0Q2hhcmFjdGVyc1dpdGhTdHJpY3RNYXRjaEZvbnQobm9kZSwgY2hhcmFjdGVycywgZmFsbGJhY2tGb250KTtcbiAgICAgIH0gZWxzZSBpZiAoKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zbWFydFN0cmF0ZWd5KSA9PT0gJ2V4cGVyaW1lbnRhbCcpIHtcbiAgICAgICAgcmV0dXJuIHNldENoYXJhY3RlcnNXaXRoU21hcnRNYXRjaEZvbnQobm9kZSwgY2hhcmFjdGVycywgZmFsbGJhY2tGb250KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hhckZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoMCwgMSk7XG4gICAgICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoZmlyc3RDaGFyRm9udCk7XG4gICAgICAgIG5vZGUuZm9udE5hbWUgPSBmaXJzdENoYXJGb250O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHtcbiAgICAgICAgZmFtaWx5OiBub2RlLmZvbnROYW1lLmZhbWlseSxcbiAgICAgICAgc3R5bGU6IG5vZGUuZm9udE5hbWUuc3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKGBGYWlsZWQgdG8gbG9hZCBcIiR7bm9kZS5mb250TmFtZVsnZmFtaWx5J119ICR7bm9kZS5mb250TmFtZVsnc3R5bGUnXX1cIiBmb250IGFuZCByZXBsYWNlZCB3aXRoIGZhbGxiYWNrIFwiJHtmYWxsYmFja0ZvbnQuZmFtaWx5fSAke2ZhbGxiYWNrRm9udC5zdHlsZX1cImAsIGVycik7XG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhmYWxsYmFja0ZvbnQpO1xuICAgIG5vZGUuZm9udE5hbWUgPSBmYWxsYmFja0ZvbnQ7XG4gIH1cblxuICB0cnkge1xuICAgIG5vZGUuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUud2FybihgRmFpbGVkIHRvIHNldCBjaGFyYWN0ZXJzLiBTa2lwcGVkLmAsIGVycik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnRzLnNldENoYXJhY3RlcnMgPSBzZXRDaGFyYWN0ZXJzO1xuXG5jb25zdCBzZXRDaGFyYWN0ZXJzV2l0aFN0cmljdE1hdGNoRm9udCA9IGFzeW5jIChub2RlLCBjaGFyYWN0ZXJzLCBmYWxsYmFja0ZvbnQpID0+IHtcbiAgY29uc3QgZm9udEhhc2hUcmVlID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdGFydElkeCA9IGkgLSAxO1xuICAgIGNvbnN0IHN0YXJ0Q2hhckZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoc3RhcnRJZHgsIGkpO1xuICAgIGNvbnN0IHN0YXJ0Q2hhckZvbnRWYWwgPSBgJHtzdGFydENoYXJGb250LmZhbWlseX06OiR7c3RhcnRDaGFyRm9udC5zdHlsZX1gO1xuXG4gICAgd2hpbGUgKGkgPCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoKSB7XG4gICAgICBpKys7XG4gICAgICBjb25zdCBjaGFyRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShpIC0gMSwgaSk7XG5cbiAgICAgIGlmIChzdGFydENoYXJGb250VmFsICE9PSBgJHtjaGFyRm9udC5mYW1pbHl9Ojoke2NoYXJGb250LnN0eWxlfWApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9udEhhc2hUcmVlW2Ake3N0YXJ0SWR4fV8ke2l9YF0gPSBzdGFydENoYXJGb250VmFsO1xuICB9XG5cbiAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhmYWxsYmFja0ZvbnQpO1xuICBub2RlLmZvbnROYW1lID0gZmFsbGJhY2tGb250O1xuICBub2RlLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xuICBjb25zb2xlLmxvZyhmb250SGFzaFRyZWUpO1xuICBhd2FpdCBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhmb250SGFzaFRyZWUpLm1hcChhc3luYyByYW5nZSA9PiB7XG4gICAgY29uc29sZS5sb2cocmFuZ2UsIGZvbnRIYXNoVHJlZVtyYW5nZV0pO1xuICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHJhbmdlLnNwbGl0KCdfJyk7XG4gICAgY29uc3QgW2ZhbWlseSwgc3R5bGVdID0gZm9udEhhc2hUcmVlW3JhbmdlXS5zcGxpdCgnOjonKTtcbiAgICBjb25zdCBtYXRjaGVkRm9udCA9IHtcbiAgICAgIGZhbWlseSxcbiAgICAgIHN0eWxlXG4gICAgfTtcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKG1hdGNoZWRGb250KTtcbiAgICByZXR1cm4gbm9kZS5zZXRSYW5nZUZvbnROYW1lKE51bWJlcihzdGFydCksIE51bWJlcihlbmQpLCBtYXRjaGVkRm9udCk7XG4gIH0pKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBnZXREZWxpbWl0ZXJQb3MgPSAoc3RyLCBkZWxpbWl0ZXIsIHN0YXJ0SWR4ID0gMCwgZW5kSWR4ID0gc3RyLmxlbmd0aCkgPT4ge1xuICBjb25zdCBpbmRpY2VzID0gW107XG4gIGxldCB0ZW1wID0gc3RhcnRJZHg7XG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0SWR4OyBpIDwgZW5kSWR4OyBpKyspIHtcbiAgICBpZiAoc3RyW2ldID09PSBkZWxpbWl0ZXIgJiYgaSArIHN0YXJ0SWR4ICE9PSBlbmRJZHggJiYgdGVtcCAhPT0gaSArIHN0YXJ0SWR4KSB7XG4gICAgICBpbmRpY2VzLnB1c2goW3RlbXAsIGkgKyBzdGFydElkeF0pO1xuICAgICAgdGVtcCA9IGkgKyBzdGFydElkeCArIDE7XG4gICAgfVxuICB9XG5cbiAgdGVtcCAhPT0gZW5kSWR4ICYmIGluZGljZXMucHVzaChbdGVtcCwgZW5kSWR4XSk7XG4gIHJldHVybiBpbmRpY2VzLmZpbHRlcihCb29sZWFuKTtcbn07XG5cbmNvbnN0IGJ1aWxkTGluZWFyT3JkZXIgPSBub2RlID0+IHtcbiAgY29uc3QgZm9udFRyZWUgPSBbXTtcbiAgY29uc3QgbmV3TGluZXNQb3MgPSBnZXREZWxpbWl0ZXJQb3Mobm9kZS5jaGFyYWN0ZXJzLCAnXFxuJyk7XG4gIG5ld0xpbmVzUG9zLmZvckVhY2goKFtuZXdMaW5lc1JhbmdlU3RhcnQsIG5ld0xpbmVzUmFuZ2VFbmRdLCBuKSA9PiB7XG4gICAgY29uc3QgbmV3TGluZXNSYW5nZUZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUobmV3TGluZXNSYW5nZVN0YXJ0LCBuZXdMaW5lc1JhbmdlRW5kKTtcblxuICAgIGlmIChuZXdMaW5lc1JhbmdlRm9udCA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgIGNvbnN0IHNwYWNlc1BvcyA9IGdldERlbGltaXRlclBvcyhub2RlLmNoYXJhY3RlcnMsICcgJywgbmV3TGluZXNSYW5nZVN0YXJ0LCBuZXdMaW5lc1JhbmdlRW5kKTtcbiAgICAgIHNwYWNlc1Bvcy5mb3JFYWNoKChbc3BhY2VzUmFuZ2VTdGFydCwgc3BhY2VzUmFuZ2VFbmRdLCBzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwYWNlc1JhbmdlRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShzcGFjZXNSYW5nZVN0YXJ0LCBzcGFjZXNSYW5nZUVuZCk7XG5cbiAgICAgICAgaWYgKHNwYWNlc1JhbmdlRm9udCA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgICAgICBjb25zdCBzcGFjZXNSYW5nZUZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoc3BhY2VzUmFuZ2VTdGFydCwgc3BhY2VzUmFuZ2VTdGFydFswXSk7XG4gICAgICAgICAgZm9udFRyZWUucHVzaCh7XG4gICAgICAgICAgICBzdGFydDogc3BhY2VzUmFuZ2VTdGFydCxcbiAgICAgICAgICAgIGRlbGltaXRlcjogJyAnLFxuICAgICAgICAgICAgZmFtaWx5OiBzcGFjZXNSYW5nZUZvbnQuZmFtaWx5LFxuICAgICAgICAgICAgc3R5bGU6IHNwYWNlc1JhbmdlRm9udC5zdHlsZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvbnRUcmVlLnB1c2goe1xuICAgICAgICAgICAgc3RhcnQ6IHNwYWNlc1JhbmdlU3RhcnQsXG4gICAgICAgICAgICBkZWxpbWl0ZXI6ICcgJyxcbiAgICAgICAgICAgIGZhbWlseTogc3BhY2VzUmFuZ2VGb250LmZhbWlseSxcbiAgICAgICAgICAgIHN0eWxlOiBzcGFjZXNSYW5nZUZvbnQuc3R5bGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvbnRUcmVlLnB1c2goe1xuICAgICAgICBzdGFydDogbmV3TGluZXNSYW5nZVN0YXJ0LFxuICAgICAgICBkZWxpbWl0ZXI6ICdcXG4nLFxuICAgICAgICBmYW1pbHk6IG5ld0xpbmVzUmFuZ2VGb250LmZhbWlseSxcbiAgICAgICAgc3R5bGU6IG5ld0xpbmVzUmFuZ2VGb250LnN0eWxlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZm9udFRyZWUuc29ydCgoYSwgYikgPT4gK2Euc3RhcnQgLSArYi5zdGFydCkubWFwKCh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlLFxuICAgIGRlbGltaXRlclxuICB9KSA9PiAoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZSxcbiAgICBkZWxpbWl0ZXJcbiAgfSkpO1xufTtcblxuY29uc3Qgc2V0Q2hhcmFjdGVyc1dpdGhTbWFydE1hdGNoRm9udCA9IGFzeW5jIChub2RlLCBjaGFyYWN0ZXJzLCBmYWxsYmFja0ZvbnQpID0+IHtcbiAgY29uc3QgcmFuZ2VUcmVlID0gYnVpbGRMaW5lYXJPcmRlcihub2RlKTtcbiAgY29uc3QgZm9udHNUb0xvYWQgPSAoMCwgX3VuaXFCeTIuZGVmYXVsdCkocmFuZ2VUcmVlLCAoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZVxuICB9KSA9PiBgJHtmYW1pbHl9Ojoke3N0eWxlfWApLm1hcCgoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZVxuICB9KSA9PiAoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZVxuICB9KSk7XG4gIGF3YWl0IFByb21pc2UuYWxsKFsuLi5mb250c1RvTG9hZCwgZmFsbGJhY2tGb250XS5tYXAoZmlnbWEubG9hZEZvbnRBc3luYykpO1xuICBub2RlLmZvbnROYW1lID0gZmFsbGJhY2tGb250O1xuICBub2RlLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xuICBsZXQgcHJldlBvcyA9IDA7XG4gIHJhbmdlVHJlZS5mb3JFYWNoKCh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlLFxuICAgIGRlbGltaXRlclxuICB9KSA9PiB7XG4gICAgaWYgKHByZXZQb3MgPCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBkZWxpbWV0ZXJQb3MgPSBub2RlLmNoYXJhY3RlcnMuaW5kZXhPZihkZWxpbWl0ZXIsIHByZXZQb3MpO1xuICAgICAgY29uc3QgZW5kUG9zID0gZGVsaW1ldGVyUG9zID4gcHJldlBvcyA/IGRlbGltZXRlclBvcyA6IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgICBjb25zdCBtYXRjaGVkRm9udCA9IHtcbiAgICAgICAgZmFtaWx5LFxuICAgICAgICBzdHlsZVxuICAgICAgfTtcbiAgICAgIG5vZGUuc2V0UmFuZ2VGb250TmFtZShwcmV2UG9zLCBlbmRQb3MsIG1hdGNoZWRGb250KTtcbiAgICAgIHByZXZQb3MgPSBlbmRQb3MgKyAxO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0cnVlO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvcExldmVsRnJhbWVzO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBhbGwgdG9wIGxldmVsIGZyYW1lcyBvbiBjdXJyZW50UGFnZVxuICovXG5mdW5jdGlvbiB0b3BMZXZlbEZyYW1lcyhwYWdlID0gZmlnbWEuY3VycmVudFBhZ2UpIHtcbiAgcmV0dXJuIHBhZ2UuY2hpbGRyZW4uZmlsdGVyKG5vZGUgPT4gbm9kZS50eXBlID09PSAnRlJBTUUnKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNsb25lXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jbG9uZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldEFsbEZvbnRzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRBbGxGb250cy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldEJvdW5kaW5nUmVjdFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0Qm91bmRpbmdSZWN0LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0Tm9kZUluZGV4XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXROb2RlSW5kZXguZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRQYWdlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRQYWdlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaGFzQ2hpbGRyZW5cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2hhc0NoaWxkcmVuLmhhc0NoaWxkcmVuO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzUGFydE9mSW5zdGFuY2VcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzUGFydE9mSW5zdGFuY2UuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1BhcnRPZk5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzUGFydE9mTm9kZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzVmlzaWJsZU5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVmlzaWJsZU5vZGUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJsb2FkVW5pcXVlRm9udHNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2xvYWRVbmlxdWVGb250cy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImxvYWRGb250c1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfbG9hZEZvbnRzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibm9kZVRvT2JqZWN0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9ub2RlVG9PYmplY3Qubm9kZVRvT2JqZWN0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInRvcExldmVsRnJhbWVzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90b3BMZXZlbEZyYW1lcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldFRleHROb2RlQ1NTXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRDU1NTdHlsZXMuZ2V0VGV4dE5vZGVDU1M7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZmluZEFsbFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZmluZE1ldGhvZHMuZmluZEFsbDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRSZWxhdGl2ZVBvc2l0aW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRSZWxhdGl2ZVBvc2l0aW9uLmdldFJlbGF0aXZlUG9zaXRpb247XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0VG9wTGV2ZWxQYXJlbnRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldFJlbGF0aXZlUG9zaXRpb24uZ2V0VG9wTGV2ZWxQYXJlbnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZmlnbWFSR0JUb1dlYlJHQlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfY29udmVydENvbG9yLmZpZ21hUkdCVG9XZWJSR0I7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2ViUkdCVG9GaWdtYVJHQlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfY29udmVydENvbG9yLndlYlJHQlRvRmlnbWFSR0I7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZmlnbWFSR0JUb0hleFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfY29udmVydENvbG9yLmZpZ21hUkdCVG9IZXg7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaGV4VG9GaWdtYVJHQlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfY29udmVydENvbG9yLmhleFRvRmlnbWFSR0I7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNDb21wb25lbnROb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzQ29tcG9uZW50Tm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0ZyYW1lTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc0ZyYW1lTm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0dyb3VwTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc0dyb3VwTm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0luc3RhbmNlTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc0luc3RhbmNlTm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1BhZ2VOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzUGFnZU5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNUZXh0Tm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc1RleHROb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzT25lT2ZOb2RlVHlwZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc09uZU9mTm9kZVR5cGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXh0cmFjdEltYWdlQ3JvcFBhcmFtc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZXh0cmFjdEltYWdlQ3JvcFBhcmFtcy5leHRyYWN0SW1hZ2VDcm9wUGFyYW1zO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImV4dHJhY3RMaW5lYXJHcmFkaWVudFBhcmFtc0Zyb21UcmFuc2Zvcm1cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kLmV4dHJhY3RMaW5lYXJHcmFkaWVudFBhcmFtc0Zyb21UcmFuc2Zvcm07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXMuZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNldENoYXJhY3RlcnNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3NldENoYXJhY3RlcnMuc2V0Q2hhcmFjdGVycztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVRleHRTdHlsZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUucGFyc2VUZXh0U3R5bGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3BsaXRUZXh0U3R5bGVJbnRvTGluZXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLnNwbGl0VGV4dFN0eWxlSW50b0xpbmVzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImpvaW5UZXh0TGluZXNTdHlsZXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLmpvaW5UZXh0TGluZXNTdHlsZXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYXBwbHlUZXh0U3R5bGVUb1RleHROb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5hcHBseVRleHRTdHlsZVRvVGV4dE5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY2hhbmdlQ2hhcmFjdGVyc1RleHRTdHlsZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUuY2hhbmdlQ2hhcmFjdGVyc1RleHRTdHlsZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjaGFuZ2VUZXh0U3R5bGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLmNoYW5nZVRleHRTdHlsZTtcbiAgfVxufSk7XG5cbnZhciBfY2xvbmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvY2xvbmVcIikpO1xuXG52YXIgX2dldEFsbEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2dldEFsbEZvbnRzXCIpKTtcblxudmFyIF9nZXRCb3VuZGluZ1JlY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0Qm91bmRpbmdSZWN0XCIpKTtcblxudmFyIF9nZXROb2RlSW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0Tm9kZUluZGV4XCIpKTtcblxudmFyIF9nZXRQYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2dldFBhZ2VcIikpO1xuXG52YXIgX2hhc0NoaWxkcmVuID0gcmVxdWlyZShcIi4vaGVscGVycy9oYXNDaGlsZHJlblwiKTtcblxudmFyIF9pc1BhcnRPZkluc3RhbmNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2lzUGFydE9mSW5zdGFuY2VcIikpO1xuXG52YXIgX2lzUGFydE9mTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9pc1BhcnRPZk5vZGVcIikpO1xuXG52YXIgX2lzVmlzaWJsZU5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvaXNWaXNpYmxlTm9kZVwiKSk7XG5cbnZhciBfbG9hZFVuaXF1ZUZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2xvYWRVbmlxdWVGb250c1wiKSk7XG5cbnZhciBfbG9hZEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2xvYWRGb250c1wiKSk7XG5cbnZhciBfbm9kZVRvT2JqZWN0ID0gcmVxdWlyZShcIi4vaGVscGVycy9ub2RlVG9PYmplY3RcIik7XG5cbnZhciBfdG9wTGV2ZWxGcmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvdG9wTGV2ZWxGcmFtZXNcIikpO1xuXG52YXIgX2dldENTU1N0eWxlcyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0Q1NTU3R5bGVzXCIpO1xuXG52YXIgX2ZpbmRNZXRob2RzID0gcmVxdWlyZShcIi4vaGVscGVycy9maW5kTWV0aG9kc1wiKTtcblxudmFyIF9nZXRSZWxhdGl2ZVBvc2l0aW9uID0gcmVxdWlyZShcIi4vaGVscGVycy9nZXRSZWxhdGl2ZVBvc2l0aW9uXCIpO1xuXG52YXIgX2NvbnZlcnRDb2xvciA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvY29udmVydENvbG9yXCIpO1xuXG52YXIgX2lzVHlwZU5vZGUgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2lzVHlwZU5vZGVcIik7XG5cbnZhciBfZXh0cmFjdEltYWdlQ3JvcFBhcmFtcyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZXh0cmFjdEltYWdlQ3JvcFBhcmFtc1wiKTtcblxudmFyIF9leHRyYWN0TGluZWFyR3JhZGllbnRTdGFydEVuZCA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZXh0cmFjdExpbmVhckdyYWRpZW50U3RhcnRFbmRcIik7XG5cbnZhciBfZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zID0gcmVxdWlyZShcIi4vaGVscGVycy9leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXNcIik7XG5cbnZhciBfc2V0Q2hhcmFjdGVycyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvc2V0Q2hhcmFjdGVyc1wiKTtcblxudmFyIF9wYXJzZVRleHRTdHlsZSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvcGFyc2VUZXh0U3R5bGVcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9IiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcbiIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG4iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RWFjaDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcbiIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhcnJheUluY2x1ZGVzYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNXaXRoKGFycmF5LCB2YWx1ZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4iLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuIiwidmFyIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbkluYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduSW4ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbkluO1xuIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduVmFsdWU7XG4iLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaCcpLFxuICAgIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbicpLFxuICAgIGJhc2VBc3NpZ25JbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25JbicpLFxuICAgIGNsb25lQnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVCdWZmZXInKSxcbiAgICBjb3B5QXJyYXkgPSByZXF1aXJlKCcuL19jb3B5QXJyYXknKSxcbiAgICBjb3B5U3ltYm9scyA9IHJlcXVpcmUoJy4vX2NvcHlTeW1ib2xzJyksXG4gICAgY29weVN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2NvcHlTeW1ib2xzSW4nKSxcbiAgICBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpLFxuICAgIGdldEFsbEtleXNJbiA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXNJbicpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGluaXRDbG9uZUFycmF5ID0gcmVxdWlyZSgnLi9faW5pdENsb25lQXJyYXknKSxcbiAgICBpbml0Q2xvbmVCeVRhZyA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUJ5VGFnJyksXG4gICAgaW5pdENsb25lT2JqZWN0ID0gcmVxdWlyZSgnLi9faW5pdENsb25lT2JqZWN0JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzTWFwID0gcmVxdWlyZSgnLi9pc01hcCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU2V0ID0gcmVxdWlyZSgnLi9pc1NldCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfRkxBVF9GTEFHID0gMixcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIHN1cHBvcnRlZCBieSBgXy5jbG9uZWAuICovXG52YXIgY2xvbmVhYmxlVGFncyA9IHt9O1xuY2xvbmVhYmxlVGFnc1thcmdzVGFnXSA9IGNsb25lYWJsZVRhZ3NbYXJyYXlUYWddID1cbmNsb25lYWJsZVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRhVmlld1RhZ10gPVxuY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPVxuY2xvbmVhYmxlVGFnc1tmbG9hdDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50MTZUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MzJUYWddID0gY2xvbmVhYmxlVGFnc1ttYXBUYWddID1cbmNsb25lYWJsZVRhZ3NbbnVtYmVyVGFnXSA9IGNsb25lYWJsZVRhZ3Nbb2JqZWN0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3JlZ2V4cFRhZ10gPSBjbG9uZWFibGVUYWdzW3NldFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID0gY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDhUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OENsYW1wZWRUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5jbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCBhbmQgYF8uY2xvbmVEZWVwYCB3aGljaCB0cmFja3NcbiAqIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gRGVlcCBjbG9uZVxuICogIDIgLSBGbGF0dGVuIGluaGVyaXRlZCBwcm9wZXJ0aWVzXG4gKiAgNCAtIENsb25lIHN5bWJvbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQsXG4gICAgICBpc0RlZXAgPSBiaXRtYXNrICYgQ0xPTkVfREVFUF9GTEFHLFxuICAgICAgaXNGbGF0ID0gYml0bWFzayAmIENMT05FX0ZMQVRfRkxBRyxcbiAgICAgIGlzRnVsbCA9IGJpdG1hc2sgJiBDTE9ORV9TWU1CT0xTX0ZMQUc7XG5cbiAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gY29weUFycmF5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgICAgaXNGdW5jID0gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcblxuICAgIGlmIChpc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjbG9uZUJ1ZmZlcih2YWx1ZSwgaXNEZWVwKTtcbiAgICB9XG4gICAgaWYgKHRhZyA9PSBvYmplY3RUYWcgfHwgdGFnID09IGFyZ3NUYWcgfHwgKGlzRnVuYyAmJiAhb2JqZWN0KSkge1xuICAgICAgcmVzdWx0ID0gKGlzRmxhdCB8fCBpc0Z1bmMpID8ge30gOiBpbml0Q2xvbmVPYmplY3QodmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGlzRmxhdFxuICAgICAgICAgID8gY29weVN5bWJvbHNJbih2YWx1ZSwgYmFzZUFzc2lnbkluKHJlc3VsdCwgdmFsdWUpKVxuICAgICAgICAgIDogY29weVN5bWJvbHModmFsdWUsIGJhc2VBc3NpZ24ocmVzdWx0LCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsb25lYWJsZVRhZ3NbdGFnXSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZUJ5VGFnKHZhbHVlLCB0YWcsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24oc3ViVmFsdWUpIHtcbiAgICAgIHJlc3VsdC5hZGQoYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdWJWYWx1ZSwgdmFsdWUsIHN0YWNrKSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNNYXAodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGtleXNGdW5jID0gaXNGdWxsXG4gICAgPyAoaXNGbGF0ID8gZ2V0QWxsS2V5c0luIDogZ2V0QWxsS2V5cylcbiAgICA6IChpc0ZsYXQgPyBrZXlzSW4gOiBrZXlzKTtcblxuICB2YXIgcHJvcHMgPSBpc0FyciA/IHVuZGVmaW5lZCA6IGtleXNGdW5jKHZhbHVlKTtcbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ2xvbmU7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNyZWF0ZTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG4iLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaGFzSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VIYXNJbihvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYga2V5IGluIE9iamVjdChvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VIYXNJbjtcbiIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJc05hTiA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hTicpLFxuICAgIHN0cmljdEluZGV4T2YgPSByZXF1aXJlKCcuL19zdHJpY3RJbmRleE9mJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWVcbiAgICA/IHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpXG4gICAgOiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXNOYU4sIGZyb21JbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcbiIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL19lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9fZXF1YWxPYmplY3RzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcbiIsInZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXBgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hcCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IG1hcFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXA7XG4iLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWF0Y2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBvYmplY3RgIGlzIGEgbWF0Y2gsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gIWxlbmd0aDtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgaWYgKChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSlcbiAgICAgICAgICA/IGRhdGFbMV0gIT09IG9iamVjdFtkYXRhWzBdXVxuICAgICAgICAgIDogIShkYXRhWzBdIGluIG9iamVjdClcbiAgICAgICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgdmFyIGtleSA9IGRhdGFbMF0sXG4gICAgICAgIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHNyY1ZhbHVlID0gZGF0YVsxXTtcblxuICAgIGlmIChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSkge1xuICAgICAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFjayA9IG5ldyBTdGFjaztcbiAgICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spO1xuICAgICAgfVxuICAgICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcsIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICAgICAgOiByZXN1bHRcbiAgICAgICAgICApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWF0Y2g7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmFOYCB3aXRob3V0IHN1cHBvcnQgZm9yIG51bWJlciBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGBOYU5gLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hTjtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG4iLCJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzU2V0YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHNldCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNTZXQodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBzZXRUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzU2V0O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlc1Byb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLml0ZXJhdGVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbdmFsdWU9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYW4gaXRlcmF0ZWUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGl0ZXJhdGVlLlxuICovXG5mdW5jdGlvbiBiYXNlSXRlcmF0ZWUodmFsdWUpIHtcbiAgLy8gRG9uJ3Qgc3RvcmUgdGhlIGB0eXBlb2ZgIHJlc3VsdCBpbiBhIHZhcmlhYmxlIHRvIGF2b2lkIGEgSklUIGJ1ZyBpbiBTYWZhcmkgOS5cbiAgLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYwMzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gYmFzZU1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pXG4gICAgICA6IGJhc2VNYXRjaGVzKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHkodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJdGVyYXRlZTtcbiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzSW4gPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5c0luO1xuIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9fYmFzZUlzTWF0Y2gnKSxcbiAgICBnZXRNYXRjaERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXRjaERhdGEnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzO1xuIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKSxcbiAgICBnZXQgPSByZXF1aXJlKCcuL2dldCcpLFxuICAgIGhhc0luID0gcmVxdWlyZSgnLi9oYXNJbicpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcbiAgICAgID8gaGFzSW4ob2JqZWN0LCBwYXRoKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG4iLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKSxcbiAgICBjcmVhdGVTZXQgPSByZXF1aXJlKCcuL19jcmVhdGVTZXQnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuaXFCeWAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHNlZW4gPSByZXN1bHQ7XG5cbiAgaWYgKGNvbXBhcmF0b3IpIHtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4gIH1cbiAgZWxzZSBpZiAobGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcbiAgICB2YXIgc2V0ID0gaXRlcmF0ZWUgPyBudWxsIDogY3JlYXRlU2V0KGFycmF5KTtcbiAgICBpZiAoc2V0KSB7XG4gICAgICByZXR1cm4gc2V0VG9BcnJheShzZXQpO1xuICAgIH1cbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgc2VlbiA9IG5ldyBTZXRDYWNoZTtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWVuID0gaXRlcmF0ZWUgPyBbXSA6IHJlc3VsdDtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciBzZWVuSW5kZXggPSBzZWVuLmxlbmd0aDtcbiAgICAgIHdoaWxlIChzZWVuSW5kZXgtLSkge1xuICAgICAgICBpZiAoc2VlbltzZWVuSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHNlZW4sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgaWYgKHNlZW4gIT09IHJlc3VsdCkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmlxO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcbiIsInZhciBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVBcnJheUJ1ZmZlcjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQnVmZmVyO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEYXRhVmlldztcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVSZWdFeHA7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVN5bWJvbDtcbiIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lVHlwZWRBcnJheTtcbiIsIi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlBcnJheTtcbiIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpO1xuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHM7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIGFuZCBpbmhlcml0ZWQgc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHNJbihzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzSW47XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwidmFyIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCcuL25vb3AnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2JqZWN0IG9mIGB2YWx1ZXNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhZGQgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBzZXQuXG4gKi9cbnZhciBjcmVhdGVTZXQgPSAhKFNldCAmJiAoMSAvIHNldFRvQXJyYXkobmV3IFNldChbLC0wXSkpWzFdKSA9PSBJTkZJTklUWSkgPyBub29wIDogZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgU2V0KHZhbHVlcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNldDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG4iLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vX2FycmF5U29tZScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYGFycmF5YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBDaGVjayB0aGF0IGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgYXJyU3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIHZhciBvdGhTdGFja2VkID0gc3RhY2suZ2V0KG90aGVyKTtcbiAgaWYgKGFyclN0YWNrZWQgJiYgb3RoU3RhY2tlZCkge1xuICAgIHJldHVybiBhcnJTdGFja2VkID09IG90aGVyICYmIG90aFN0YWNrZWQgPT0gYXJyYXk7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuIiwidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIHRoYXQgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBvYmpTdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIHZhciBvdGhTdGFja2VkID0gc3RhY2suZ2V0KG90aGVyKTtcbiAgaWYgKG9ialN0YWNrZWQgJiYgb3RoU3RhY2tlZCkge1xuICAgIHJldHVybiBvYmpTdGFja2VkID09IG90aGVyICYmIG90aFN0YWNrZWQgPT0gb2JqZWN0O1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNJbiwgZ2V0U3ltYm9sc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzSW47XG4iLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBrZXkgPSByZXN1bHRbbGVuZ3RoXSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHNJbiA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKG9iamVjdCkge1xuICAgIGFycmF5UHVzaChyZXN1bHQsIGdldFN5bWJvbHMob2JqZWN0KSk7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9sc0luO1xuIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGV4aXN0cyBvbiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYXNGdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjayBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKTtcbiAgICBpZiAoIShyZXN1bHQgPSBvYmplY3QgIT0gbnVsbCAmJiBoYXNGdW5jKG9iamVjdCwga2V5KSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgfVxuICBpZiAocmVzdWx0IHx8ICsraW5kZXggIT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBsZW5ndGggPSBvYmplY3QgPT0gbnVsbCA/IDAgOiBvYmplY3QubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUGF0aDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gbmV3IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUFycmF5O1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyksXG4gICAgY2xvbmVEYXRhVmlldyA9IHJlcXVpcmUoJy4vX2Nsb25lRGF0YVZpZXcnKSxcbiAgICBjbG9uZVJlZ0V4cCA9IHJlcXVpcmUoJy4vX2Nsb25lUmVnRXhwJyksXG4gICAgY2xvbmVTeW1ib2wgPSByZXF1aXJlKCcuL19jbG9uZVN5bWJvbCcpLFxuICAgIGNsb25lVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Nsb25lVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTWFwYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBgU2V0YCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcjtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVCeVRhZztcbiIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcbiIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBtYXRjaGVzUHJvcGVydHlgIGZvciBzb3VyY2UgdmFsdWVzIHN1aXRhYmxlXG4gKiBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUoa2V5LCBzcmNWYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWUgJiZcbiAgICAgIChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gT2JqZWN0KG9iamVjdCkpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZTtcbiIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXNJbjtcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG4iLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IDQ2IC8qIC4gKi8pIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3ViU3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG4iLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuIiwidmFyIGJhc2VDbG9uZSA9IHJlcXVpcmUoJy4vX2Jhc2VDbG9uZScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmNsb25lYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBjbG9uZXMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVjdXJzaXZlbHkgY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnYSc6IDEgfSwgeyAnYic6IDIgfV07XG4gKlxuICogdmFyIGRlZXAgPSBfLmNsb25lRGVlcChvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKGRlZXBbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gIHJldHVybiBiYXNlQ2xvbmUodmFsdWUsIENMT05FX0RFRVBfRkxBRyB8IENMT05FX1NZTUJPTFNfRkxBRyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG4iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAsIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldDtcbiIsInZhciBiYXNlSGFzSW4gPSByZXF1aXJlKCcuL19iYXNlSGFzSW4nKSxcbiAgICBoYXNQYXRoID0gcmVxdWlyZSgnLi9faGFzUGF0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgaXMgYSBkaXJlY3Qgb3IgaW5oZXJpdGVkIHByb3BlcnR5IG9mIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IF8uY3JlYXRlKHsgJ2EnOiBfLmNyZWF0ZSh7ICdiJzogMiB9KSB9KTtcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EuYicpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2InKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGhhc0luKG9iamVjdCwgcGF0aCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgaGFzUGF0aChvYmplY3QsIHBhdGgsIGJhc2VIYXNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzSW47XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlXG4gKiBlcXVpdmFsZW50LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBjb21wYXJpbmcgYXJyYXlzLCBhcnJheSBidWZmZXJzLCBib29sZWFucyxcbiAqIGRhdGUgb2JqZWN0cywgZXJyb3Igb2JqZWN0cywgbWFwcywgbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcyxcbiAqIHNldHMsIHN0cmluZ3MsIHN5bWJvbHMsIGFuZCB0eXBlZCBhcnJheXMuIGBPYmplY3RgIG9iamVjdHMgYXJlIGNvbXBhcmVkXG4gKiBieSB0aGVpciBvd24sIG5vdCBpbmhlcml0ZWQsIGVudW1lcmFibGUgcHJvcGVydGllcy4gRnVuY3Rpb25zIGFuZCBET01cbiAqIG5vZGVzIGFyZSBjb21wYXJlZCBieSBzdHJpY3QgZXF1YWxpdHksIGkuZS4gYD09PWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uaXNFcXVhbChvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBvYmplY3QgPT09IG90aGVyO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcXVhbDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCJ2YXIgYmFzZUlzTWFwID0gcmVxdWlyZSgnLi9fYmFzZUlzTWFwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc01hcCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzTWFwO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgTWFwYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBtYXAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc01hcChuZXcgTWFwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTWFwKG5ldyBXZWFrTWFwKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc01hcCA9IG5vZGVJc01hcCA/IGJhc2VVbmFyeShub2RlSXNNYXApIDogYmFzZUlzTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFwO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUlzU2V0ID0gcmVxdWlyZSgnLi9fYmFzZUlzU2V0JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1NldCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzU2V0O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU2V0YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1NldChuZXcgU2V0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU2V0KG5ldyBXZWFrU2V0KTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1NldCA9IG5vZGVJc1NldCA/IGJhc2VVbmFyeShub2RlSXNTZXQpIDogYmFzZUlzU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2V0O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNVbmRlZmluZWQodm9pZCAwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVW5kZWZpbmVkKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNVbmRlZmluZWQ7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG4iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcbiIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHknKSxcbiAgICBiYXNlUHJvcGVydHlEZWVwID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5RGVlcCcpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGEgZ2l2ZW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW1xuICogICB7ICdhJzogeyAnYic6IDIgfSB9LFxuICogICB7ICdhJzogeyAnYic6IDEgfSB9XG4gKiBdO1xuICpcbiAqIF8ubWFwKG9iamVjdHMsIF8ucHJvcGVydHkoJ2EuYicpKTtcbiAqIC8vID0+IFsyLCAxXVxuICpcbiAqIF8ubWFwKF8uc29ydEJ5KG9iamVjdHMsIF8ucHJvcGVydHkoWydhJywgJ2InXSkpLCAnYS5iJyk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICByZXR1cm4gaXNLZXkocGF0aCkgPyBiYXNlUHJvcGVydHkodG9LZXkocGF0aCkpIDogYmFzZVByb3BlcnR5RGVlcChwYXRoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9wZXJ0eTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuIiwidmFyIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLnVuaXFgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGl0ZXJhdGVlYCB3aGljaCBpc1xuICogaW52b2tlZCBmb3IgZWFjaCBlbGVtZW50IGluIGBhcnJheWAgdG8gZ2VuZXJhdGUgdGhlIGNyaXRlcmlvbiBieSB3aGljaFxuICogdW5pcXVlbmVzcyBpcyBjb21wdXRlZC4gVGhlIG9yZGVyIG9mIHJlc3VsdCB2YWx1ZXMgaXMgZGV0ZXJtaW5lZCBieSB0aGVcbiAqIG9yZGVyIHRoZXkgb2NjdXIgaW4gdGhlIGFycmF5LiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDpcbiAqICh2YWx1ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVuaXFCeShbMi4xLCAxLjIsIDIuM10sIE1hdGguZmxvb3IpO1xuICogLy8gPT4gWzIuMSwgMS4yXVxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy51bmlxQnkoW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH0sIHsgJ3gnOiAxIH1dLCAneCcpO1xuICogLy8gPT4gW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH1dXG4gKi9cbmZ1bmN0aW9uIHVuaXFCeShhcnJheSwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVVuaXEoYXJyYXksIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMikpIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pcUJ5O1xuIiwidmFyIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLnVuaXFgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGNvbXBhcmF0b3JgIHdoaWNoXG4gKiBpcyBpbnZva2VkIHRvIGNvbXBhcmUgZWxlbWVudHMgb2YgYGFycmF5YC4gVGhlIG9yZGVyIG9mIHJlc3VsdCB2YWx1ZXMgaXNcbiAqIGRldGVybWluZWQgYnkgdGhlIG9yZGVyIHRoZXkgb2NjdXIgaW4gdGhlIGFycmF5LlRoZSBjb21wYXJhdG9yIGlzIGludm9rZWRcbiAqIHdpdGggdHdvIGFyZ3VtZW50czogKGFyclZhbCwgb3RoVmFsKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAneCc6IDEsICd5JzogMiB9LCB7ICd4JzogMiwgJ3knOiAxIH0sIHsgJ3gnOiAxLCAneSc6IDIgfV07XG4gKlxuICogXy51bmlxV2l0aChvYmplY3RzLCBfLmlzRXF1YWwpO1xuICogLy8gPT4gW3sgJ3gnOiAxLCAneSc6IDIgfSwgeyAneCc6IDIsICd5JzogMSB9XVxuICovXG5mdW5jdGlvbiB1bmlxV2l0aChhcnJheSwgY29tcGFyYXRvcikge1xuICBjb21wYXJhdG9yID0gdHlwZW9mIGNvbXBhcmF0b3IgPT0gJ2Z1bmN0aW9uJyA/IGNvbXBhcmF0b3IgOiB1bmRlZmluZWQ7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSA/IGJhc2VVbmlxKGFycmF5LCB1bmRlZmluZWQsIGNvbXBhcmF0b3IpIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pcVdpdGg7XG4iLCJ2YXIgU3lsdmVzdGVyID0ge31cblxuU3lsdmVzdGVyLk1hdHJpeCA9IGZ1bmN0aW9uKCkge31cblxuU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUgPSBmdW5jdGlvbihlbGVtZW50cykge1xuICB2YXIgTSA9IG5ldyBTeWx2ZXN0ZXIuTWF0cml4KClcbiAgcmV0dXJuIE0uc2V0RWxlbWVudHMoZWxlbWVudHMpXG59XG5cblN5bHZlc3Rlci5NYXRyaXguSSA9IGZ1bmN0aW9uKG4pIHtcbiAgdmFyIGVscyA9IFtdLFxuICAgIGkgPSBuLFxuICAgIGpcbiAgd2hpbGUgKGktLSkge1xuICAgIGogPSBuXG4gICAgZWxzW2ldID0gW11cbiAgICB3aGlsZSAoai0tKSB7XG4gICAgICBlbHNbaV1bal0gPSBpID09PSBqID8gMSA6IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKGVscylcbn1cblxuU3lsdmVzdGVyLk1hdHJpeC5wcm90b3R5cGUgPSB7XG4gIGR1cDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKHRoaXMuZWxlbWVudHMpXG4gIH0sXG5cbiAgaXNTcXVhcmU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb2xzID0gdGhpcy5lbGVtZW50cy5sZW5ndGggPT09IDAgPyAwIDogdGhpcy5lbGVtZW50c1swXS5sZW5ndGhcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cy5sZW5ndGggPT09IGNvbHNcbiAgfSxcblxuICB0b1JpZ2h0VHJpYW5ndWxhcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUoW10pXG4gICAgdmFyIE0gPSB0aGlzLmR1cCgpLFxuICAgICAgZWxzXG4gICAgdmFyIG4gPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGksXG4gICAgICBqLFxuICAgICAgbnAgPSB0aGlzLmVsZW1lbnRzWzBdLmxlbmd0aCxcbiAgICAgIHBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBpZiAoTS5lbGVtZW50c1tpXVtpXSA9PT0gMCkge1xuICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgIGlmIChNLmVsZW1lbnRzW2pdW2ldICE9PSAwKSB7XG4gICAgICAgICAgICBlbHMgPSBbXVxuICAgICAgICAgICAgZm9yIChwID0gMDsgcCA8IG5wOyBwKyspIHtcbiAgICAgICAgICAgICAgZWxzLnB1c2goTS5lbGVtZW50c1tpXVtwXSArIE0uZWxlbWVudHNbal1bcF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBNLmVsZW1lbnRzW2ldID0gZWxzXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE0uZWxlbWVudHNbaV1baV0gIT09IDApIHtcbiAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICB2YXIgbXVsdGlwbGllciA9IE0uZWxlbWVudHNbal1baV0gLyBNLmVsZW1lbnRzW2ldW2ldXG4gICAgICAgICAgZWxzID0gW11cbiAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgbnA7IHArKykge1xuICAgICAgICAgICAgLy8gRWxlbWVudHMgd2l0aCBjb2x1bW4gbnVtYmVycyB1cCB0byBhbiBpbmNsdWRpbmcgdGhlIG51bWJlciBvZiB0aGVcbiAgICAgICAgICAgIC8vIHJvdyB0aGF0IHdlJ3JlIHN1YnRyYWN0aW5nIGNhbiBzYWZlbHkgYmUgc2V0IHN0cmFpZ2h0IHRvIHplcm8sXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGF0J3MgdGhlIHBvaW50IG9mIHRoaXMgcm91dGluZSBhbmQgaXQgYXZvaWRzIGhhdmluZyB0b1xuICAgICAgICAgICAgLy8gbG9vcCBvdmVyIGFuZCBjb3JyZWN0IHJvdW5kaW5nIGVycm9ycyBsYXRlclxuICAgICAgICAgICAgZWxzLnB1c2goXG4gICAgICAgICAgICAgIHAgPD0gaSA/IDAgOiBNLmVsZW1lbnRzW2pdW3BdIC0gTS5lbGVtZW50c1tpXVtwXSAqIG11bHRpcGxpZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgTS5lbGVtZW50c1tqXSA9IGVsc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBNXG4gIH0sXG5cbiAgZGV0ZXJtaW5hbnQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzU3F1YXJlKCkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHZhciBNID0gdGhpcy50b1JpZ2h0VHJpYW5ndWxhcigpXG4gICAgdmFyIGRldCA9IE0uZWxlbWVudHNbMF1bMF0sXG4gICAgICBuID0gTS5lbGVtZW50cy5sZW5ndGhcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgZGV0ID0gZGV0ICogTS5lbGVtZW50c1tpXVtpXVxuICAgIH1cbiAgICByZXR1cm4gZGV0XG4gIH0sXG5cbiAgaXNTaW5ndWxhcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTcXVhcmUoKSAmJiB0aGlzLmRldGVybWluYW50KCkgPT09IDBcbiAgfSxcblxuICBhdWdtZW50OiBmdW5jdGlvbihtYXRyaXgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmR1cCgpXG4gICAgfVxuICAgIHZhciBNID0gbWF0cml4LmVsZW1lbnRzIHx8IG1hdHJpeFxuICAgIGlmICh0eXBlb2YgTVswXVswXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIE0gPSBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZShNKS5lbGVtZW50c1xuICAgIH1cbiAgICB2YXIgVCA9IHRoaXMuZHVwKCksXG4gICAgICBjb2xzID0gVC5lbGVtZW50c1swXS5sZW5ndGhcbiAgICB2YXIgaSA9IFQuZWxlbWVudHMubGVuZ3RoLFxuICAgICAgbmogPSBNWzBdLmxlbmd0aCxcbiAgICAgIGpcbiAgICBpZiAoaSAhPT0gTS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGogPSBualxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBULmVsZW1lbnRzW2ldW2NvbHMgKyBqXSA9IE1baV1bal1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFRcbiAgfSxcblxuICBpbnZlcnNlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICghdGhpcy5pc1NxdWFyZSgpIHx8IHRoaXMuaXNTaW5ndWxhcigpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICB2YXIgbiA9IHRoaXMuZWxlbWVudHMubGVuZ3RoLFxuICAgICAgaSA9IG4sXG4gICAgICBqXG4gICAgdmFyIE0gPSB0aGlzLmF1Z21lbnQoU3lsdmVzdGVyLk1hdHJpeC5JKG4pKS50b1JpZ2h0VHJpYW5ndWxhcigpXG4gICAgdmFyIG5wID0gTS5lbGVtZW50c1swXS5sZW5ndGgsXG4gICAgICBwLFxuICAgICAgZWxzLFxuICAgICAgZGl2aXNvclxuICAgIHZhciBpbnZlcnNlX2VsZW1lbnRzID0gW10sXG4gICAgICBuZXdfZWxlbWVudFxuICAgIC8vIFN5bHZlc3Rlci5NYXRyaXggaXMgbm9uLXNpbmd1bGFyIHNvIHRoZXJlIHdpbGwgYmUgbm8gemVyb3Mgb24gdGhlXG4gICAgLy8gZGlhZ29uYWwuIEN5Y2xlIHRocm91Z2ggcm93cyBmcm9tIGxhc3QgdG8gZmlyc3QuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgLy8gRmlyc3QsIG5vcm1hbGlzZSBkaWFnb25hbCBlbGVtZW50cyB0byAxXG4gICAgICBlbHMgPSBbXVxuICAgICAgaW52ZXJzZV9lbGVtZW50c1tpXSA9IFtdXG4gICAgICBkaXZpc29yID0gTS5lbGVtZW50c1tpXVtpXVxuICAgICAgZm9yIChwID0gMDsgcCA8IG5wOyBwKyspIHtcbiAgICAgICAgbmV3X2VsZW1lbnQgPSBNLmVsZW1lbnRzW2ldW3BdIC8gZGl2aXNvclxuICAgICAgICBlbHMucHVzaChuZXdfZWxlbWVudClcbiAgICAgICAgLy8gU2h1ZmZsZSBvZmYgdGhlIGN1cnJlbnQgcm93IG9mIHRoZSByaWdodCBoYW5kIHNpZGUgaW50byB0aGUgcmVzdWx0c1xuICAgICAgICAvLyBhcnJheSBhcyBpdCB3aWxsIG5vdCBiZSBtb2RpZmllZCBieSBsYXRlciBydW5zIHRocm91Z2ggdGhpcyBsb29wXG4gICAgICAgIGlmIChwID49IG4pIHtcbiAgICAgICAgICBpbnZlcnNlX2VsZW1lbnRzW2ldLnB1c2gobmV3X2VsZW1lbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIE0uZWxlbWVudHNbaV0gPSBlbHNcbiAgICAgIC8vIFRoZW4sIHN1YnRyYWN0IHRoaXMgcm93IGZyb20gdGhvc2UgYWJvdmUgaXQgdG8gZ2l2ZSB0aGUgaWRlbnRpdHkgbWF0cml4XG4gICAgICAvLyBvbiB0aGUgbGVmdCBoYW5kIHNpZGVcbiAgICAgIGogPSBpXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGVscyA9IFtdXG4gICAgICAgIGZvciAocCA9IDA7IHAgPCBucDsgcCsrKSB7XG4gICAgICAgICAgZWxzLnB1c2goTS5lbGVtZW50c1tqXVtwXSAtIE0uZWxlbWVudHNbaV1bcF0gKiBNLmVsZW1lbnRzW2pdW2ldKVxuICAgICAgICB9XG4gICAgICAgIE0uZWxlbWVudHNbal0gPSBlbHNcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKGludmVyc2VfZWxlbWVudHMpXG4gIH0sXG5cbiAgc2V0RWxlbWVudHM6IGZ1bmN0aW9uKGVscykge1xuICAgIHZhciBpLFxuICAgICAgaixcbiAgICAgIGVsZW1lbnRzID0gZWxzLmVsZW1lbnRzIHx8IGVsc1xuICAgIGlmIChlbGVtZW50c1swXSAmJiB0eXBlb2YgZWxlbWVudHNbMF1bMF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpID0gZWxlbWVudHMubGVuZ3RoXG4gICAgICB0aGlzLmVsZW1lbnRzID0gW11cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaiA9IGVsZW1lbnRzW2ldLmxlbmd0aFxuICAgICAgICB0aGlzLmVsZW1lbnRzW2ldID0gW11cbiAgICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNbaV1bal0gPSBlbGVtZW50c1tpXVtqXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICB2YXIgbiA9IGVsZW1lbnRzLmxlbmd0aFxuICAgIHRoaXMuZWxlbWVudHMgPSBbXVxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMuZWxlbWVudHMucHVzaChbZWxlbWVudHNbaV1dKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9LFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gIHJldHVybiBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZShlbGVtZW50cykuaW52ZXJzZSgpLmVsZW1lbnRzXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuKGZ1bmN0aW9uKCl7XG5cbiAgdmFyXG4gICAgYnVmLFxuICAgIGJ1ZklkeCA9IDAsXG4gICAgaGV4Qnl0ZXMgPSBbXSxcbiAgICBpXG4gIDtcblxuICAvLyBQcmUtY2FsY3VsYXRlIHRvU3RyaW5nKDE2KSBmb3Igc3BlZWRcbiAgZm9yIChpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgaGV4Qnl0ZXNbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xuICB9XG5cbiAgLy8gQnVmZmVyIHJhbmRvbSBudW1iZXJzIGZvciBzcGVlZFxuICAvLyBSZWR1Y2UgbWVtb3J5IHVzYWdlIGJ5IGRlY3JlYXNpbmcgdGhpcyBudW1iZXIgKG1pbiAxNilcbiAgLy8gb3IgaW1wcm92ZSBzcGVlZCBieSBpbmNyZWFzaW5nIHRoaXMgbnVtYmVyICh0cnkgMTYzODQpXG4gIHV1aWQuQlVGRkVSX1NJWkUgPSA0MDk2O1xuXG4gIC8vIEJpbmFyeSB1dWlkc1xuICB1dWlkLmJpbiA9IHV1aWRCaW47XG5cbiAgLy8gQ2xlYXIgYnVmZmVyXG4gIHV1aWQuY2xlYXJCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICBidWYgPSBudWxsO1xuICAgIGJ1ZklkeCA9IDA7XG4gIH07XG5cbiAgLy8gVGVzdCBmb3IgdXVpZFxuICB1dWlkLnRlc3QgPSBmdW5jdGlvbih1dWlkKSB7XG4gICAgaWYgKHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIC9eWzAtOWEtZl17OH0tWzAtOWEtZl17NH0tNFswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfSQvaS50ZXN0KHV1aWQpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gTm9kZSAmIEJyb3dzZXIgc3VwcG9ydFxuICB2YXIgY3J5cHQwO1xuICBpZiAodHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjcnlwdDAgPSBjcnlwdG87XG4gIH0gZWxzZSBpZiggKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSAmJiAodHlwZW9mIHdpbmRvdy5tc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgY3J5cHQwID0gd2luZG93Lm1zQ3J5cHRvOyAvLyBJRTExXG4gIH1cblxuICBpZiAoKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSAmJiAodHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgY3J5cHQwID0gY3J5cHQwIHx8IHJlcXVpcmUoJ2NyeXB0bycpO1xuICAgIG1vZHVsZS5leHBvcnRzID0gdXVpZDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy51dWlkID0gdXVpZDtcbiAgfVxuXG4gIC8vIFVzZSBiZXN0IGF2YWlsYWJsZSBQUk5HXG4gIC8vIEFsc28gZXhwb3NlIHRoaXMgc28geW91IGNhbiBvdmVycmlkZSBpdC5cbiAgdXVpZC5yYW5kb21CeXRlcyA9IChmdW5jdGlvbigpe1xuICAgIGlmIChjcnlwdDApIHtcbiAgICAgIGlmIChjcnlwdDAucmFuZG9tQnl0ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyeXB0MC5yYW5kb21CeXRlcztcbiAgICAgIH1cbiAgICAgIGlmIChjcnlwdDAuZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24obikge1xuICAgICAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobik7XG4gICAgICAgICAgICBjcnlwdDAuZ2V0UmFuZG9tVmFsdWVzKGJ5dGVzKTtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGJ5dGVzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobik7XG4gICAgICAgICAgY3J5cHQwLmdldFJhbmRvbVZhbHVlcyhieXRlcyk7XG4gICAgICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24obikge1xuICAgICAgdmFyIGksIHIgPSBbXTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgci5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvLyBCdWZmZXIgc29tZSByYW5kb20gYnl0ZXMgZm9yIHNwZWVkXG4gIGZ1bmN0aW9uIHJhbmRvbUJ5dGVzQnVmZmVyZWQobikge1xuICAgIGlmICghYnVmIHx8ICgoYnVmSWR4ICsgbikgPiB1dWlkLkJVRkZFUl9TSVpFKSkge1xuICAgICAgYnVmSWR4ID0gMDtcbiAgICAgIGJ1ZiA9IHV1aWQucmFuZG9tQnl0ZXModXVpZC5CVUZGRVJfU0laRSk7XG4gICAgfVxuICAgIHJldHVybiBidWYuc2xpY2UoYnVmSWR4LCBidWZJZHggKz0gbik7XG4gIH1cblxuICAvLyB1dWlkLmJpblxuICBmdW5jdGlvbiB1dWlkQmluKCkge1xuICAgIHZhciBiID0gcmFuZG9tQnl0ZXNCdWZmZXJlZCgxNik7XG4gICAgYls2XSA9IChiWzZdICYgMHgwZikgfCAweDQwO1xuICAgIGJbOF0gPSAoYls4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIC8vIFN0cmluZyBVVUlEdjQgKFJhbmRvbSlcbiAgZnVuY3Rpb24gdXVpZCgpIHtcbiAgICB2YXIgYiA9IHV1aWRCaW4oKTtcbiAgICByZXR1cm4gaGV4Qnl0ZXNbYlswXV0gKyBoZXhCeXRlc1tiWzFdXSArXG4gICAgICBoZXhCeXRlc1tiWzJdXSArIGhleEJ5dGVzW2JbM11dICsgJy0nICtcbiAgICAgIGhleEJ5dGVzW2JbNF1dICsgaGV4Qnl0ZXNbYls1XV0gKyAnLScgK1xuICAgICAgaGV4Qnl0ZXNbYls2XV0gKyBoZXhCeXRlc1tiWzddXSArICctJyArXG4gICAgICBoZXhCeXRlc1tiWzhdXSArIGhleEJ5dGVzW2JbOV1dICsgJy0nICtcbiAgICAgIGhleEJ5dGVzW2JbMTBdXSArIGhleEJ5dGVzW2JbMTFdXSArXG4gICAgICBoZXhCeXRlc1tiWzEyXV0gKyBoZXhCeXRlc1tiWzEzXV0gK1xuICAgICAgaGV4Qnl0ZXNbYlsxNF1dICsgaGV4Qnl0ZXNbYlsxNV1dXG4gICAgO1xuICB9XG5cbn0pKCk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQtcmFuZG9tJztcbmltcG9ydCB7IGlzVmlzaWJsZU5vZGUgfSBmcm9tIFwiQGZpZ21hLXBsdWdpbi9oZWxwZXJzXCI7XG5pbXBvcnQgcmF3TGlnaHRDb2xvclRva2VucyBmcm9tICcuLi8uLi9kYXRhL2xpZ2h0LW1vZGUuanNvbic7XG5pbXBvcnQgcmF3RGFya0NvbG9yVG9rZW5zIGZyb20gJy4uLy4uL2RhdGEvZGFyay1tb2RlLmpzb24nO1xubGV0IHVpU2l6ZSA9IHtcbiAgICB3aWR0aDogMzAwLFxuICAgIGhlaWdodDogNDQ4XG59O1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiB1aVNpemUud2lkdGgsIGhlaWdodDogdWlTaXplLmhlaWdodCB9KTtcbmxldCBjdXN0b21FdmVudERhdGEgPSB7XG4gICAgZmlsZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLnBhcmVudC5uYW1lLFxuICAgIGZpbGVLZXk6IGZpZ21hLmZpbGVLZXksXG4gICAgXCJVc2VyIE5hbWVcIjogZmlnbWEuY3VycmVudFVzZXIubmFtZSxcbiAgICBcIlVzZXIgQXZhdGFyXCI6IGZpZ21hLmN1cnJlbnRVc2VyLnBob3RvVXJsLFxuICAgIFwiVXNlciBJRFwiOiBmaWdtYS5jdXJyZW50VXNlci5pZCxcbiAgICBcIlNlc3Npb24gSURcIjogZmlnbWEuY3VycmVudFVzZXIuc2Vzc2lvbklkLFxufTtcbmNvbnN0IG5hdmlnYXRlVG8gPSAoc2NyZWVuKSA9PiB7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcImZpZ21hLWNvbW1hbmRcIiwgbWVzc2FnZTogT2JqZWN0LmFzc2lnbih7IG9wZW5lZFRvOiBzY3JlZW4gfSwgY3VzdG9tRXZlbnREYXRhKVxuICAgIH0pO1xufTtcbnN3aXRjaCAoZmlnbWEuY29tbWFuZCkge1xuICAgIGNhc2UgXCJvcGVuLWhvbWVcIjpcbiAgICAgICAgbmF2aWdhdGVUbygnb3Blbi1ob21lJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvcGVuLXRhYmxlLWNyZWF0b3JcIjpcbiAgICAgICAgbmF2aWdhdGVUbygnb3Blbi10YWJsZS1jcmVhdG9yJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvcGVuLWxhbmd1YWdlLWxpbnRlclwiOlxuICAgICAgICBuYXZpZ2F0ZVRvKCdvcGVuLWxhbmd1YWdlLWxpbnRlcicpO1xuICAgICAgICB1aVNpemUgPSB7XG4gICAgICAgICAgICB3aWR0aDogNDc1LFxuICAgICAgICAgICAgaGVpZ2h0OiA1MDBcbiAgICAgICAgfTtcbiAgICAgICAgZmlnbWEudWkucmVzaXplKDQ3NSwgNTAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm9wZW4tY29sb3ItbGludGVyXCI6XG4gICAgICAgIG5hdmlnYXRlVG8oJ29wZW4tY29sb3ItbGludGVyJyk7XG4gICAgICAgIHVpU2l6ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiA0NzUsXG4gICAgICAgICAgICBoZWlnaHQ6IDUwMFxuICAgICAgICB9O1xuICAgICAgICBmaWdtYS51aS5yZXNpemUoNDc1LCA1MDApO1xuICAgICAgICBicmVhaztcbn1cbmNvbnN0IGNyZWF0ZVRhYmxlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgdGFibGVGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgbGV0IGhlYWRlckNlbGwgPSB5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKFwiY2U4ZmE4ZThjYWIwN2ExOWY4M2Y0MTgxYWM4Y2JlNzYwOTNjNmJjM1wiKTtcbiAgICBsZXQgdGFibGVSb3cgPSBmaWdtYS5jcmVhdGVDb21wb25lbnQoKTtcbiAgICBsZXQgY2VsbEZpbGxDb250YWluZXJZID0gZmFsc2U7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJPcGVuIFNhbnNcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgIHRhYmxlRnJhbWUubmFtZSA9IFwiVGFibGVcIjtcbiAgICB0YWJsZUZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIHRhYmxlRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICB0YWJsZUZyYW1lLnggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICB0YWJsZUZyYW1lLnkgPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueTtcbiAgICBtc2cuY29sdW1uQ29uZmlndXJhdGlvbi5maW5kKChjb2wpID0+IChjZWxsRmlsbENvbnRhaW5lclkgPSBjb2wubXVsdGlWYWx1ZSkpO1xuICAgIFsuLi5BcnJheShtc2cucm93cyArIDEpLmtleXMoKV0ubWFwKChyb3dJbmRleCkgPT4ge1xuICAgICAgICB0YWJsZVJvdy5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgIHRhYmxlUm93LmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICB0YWJsZVJvdy5uYW1lID0gXCJSb3dcIjtcbiAgICAgICAgbXNnLmNvbHVtbkNvbmZpZ3VyYXRpb24ubWFwKChjb2wpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IHsgbmFtZTogY29sTmFtZSwgYWxpZ25tZW50OiBjb2xBbGlnbm1lbnQsIGNlbGxUeXBlOiBjb2xDZWxsVHlwZSwgbXVsdGlWYWx1ZTogY29sTXVsdGlWYWx1ZSwgfSA9IGNvbDtcbiAgICAgICAgICAgIGNvbEFsaWdubWVudCA9XG4gICAgICAgICAgICAgICAgY29sQWxpZ25tZW50WzBdLnRvVXBwZXJDYXNlKCkgKyBjb2xBbGlnbm1lbnQuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgY29sQ2VsbFR5cGUgPSBjb2xDZWxsVHlwZVswXS50b1VwcGVyQ2FzZSgpICsgY29sQ2VsbFR5cGUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgY29sTXVsdGlWYWx1ZSA9IGNvbE11bHRpVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbE11bHRpVmFsdWUgPVxuICAgICAgICAgICAgICAgIGNvbE11bHRpVmFsdWVbMF0udG9VcHBlckNhc2UoKSArIGNvbE11bHRpVmFsdWUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoaXNIZWFkZXJDZWxsID0gaGVhZGVyQ2VsbC5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbCA9IHRoaXNIZWFkZXJDZWxsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLm5hbWUgPSBjb2xOYW1lLmxlbmd0aCA+IDAgPyBjb2xOYW1lIDogXCJIZWFkZXJcIjtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbC5kZWxldGVDaGFyYWN0ZXJzKDAsIHRleHROb2RlT2ZIZWFkZXJDZWxsLmNoYXJhY3RlcnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbC5pbnNlcnRDaGFyYWN0ZXJzKDAsIGNvbE5hbWUubGVuZ3RoID4gMCA/IGNvbE5hbWUgOiBcIkhlYWRlclwiKTtcbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5zZXRQcm9wZXJ0aWVzKHsgQWxpZ25tZW50OiBjb2xBbGlnbm1lbnQgfSk7XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwucmVzaXplKGNvbE11bHRpVmFsdWUgPT09IFwiVHJ1ZVwiID8gMTIwIDogdGhpc0hlYWRlckNlbGwud2lkdGgsIHRoaXNIZWFkZXJDZWxsLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwuY2hpbGRyZW5bMF0ubGF5b3V0R3JvdyA9IGNlbGxGaWxsQ29udGFpbmVyWSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IGNlbGxGaWxsQ29udGFpbmVyWVxuICAgICAgICAgICAgICAgICAgICA/IFwiRklYRURcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiQVVUT1wiO1xuICAgICAgICAgICAgICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHRoaXNIZWFkZXJDZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRhYmxlRnJhbWUuYXBwZW5kQ2hpbGQodGFibGVSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRoaXNUYWJsZVJvdyA9IHRhYmxlUm93LmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICB0aGlzVGFibGVSb3cuY2hpbGRyZW4ubWFwKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7IGNlbGxUeXBlOiBjb2xDZWxsVHlwZSwgbXVsdGlWYWx1ZTogY29sTXVsdGlWYWx1ZSB9ID0gbXNnLmNvbHVtbkNvbmZpZ3VyYXRpb25baW5kZXhdO1xuICAgICAgICAgICAgICAgIGNvbENlbGxUeXBlID0gY29sQ2VsbFR5cGVbMF0udG9VcHBlckNhc2UoKSArIGNvbENlbGxUeXBlLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICAgICBjb2xNdWx0aVZhbHVlID0gY29sTXVsdGlWYWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbE11bHRpVmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICBjb2xNdWx0aVZhbHVlWzBdLnRvVXBwZXJDYXNlKCkgKyBjb2xNdWx0aVZhbHVlLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICAgICBjZWxsLm5hbWUgPT09IFwiSGVhZGVyXCIgPyAoY2VsbC5uYW1lID0gXCJDZWxsXCIpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBjZWxsLnNldFByb3BlcnRpZXMoeyBUeXBlOiBcIkJvZHlcIiB9KTtcbiAgICAgICAgICAgICAgICBjZWxsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgICAgICAgICAgICBUeXBlOiBjb2xDZWxsVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgXCJNdWx0aS12YWx1ZVwiOiBjb2xNdWx0aVZhbHVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNlbGwuY2hpbGRyZW5bMF0ubGF5b3V0R3JvdyA9IGNlbGxGaWxsQ29udGFpbmVyWSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIGNlbGwucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gY2VsbEZpbGxDb250YWluZXJZID8gXCJGSVhFRFwiIDogXCJBVVRPXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhYmxlRnJhbWUuYXBwZW5kQ2hpbGQodGhpc1RhYmxlUm93KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGxldCB0YWJsZURhdGEgPSBPYmplY3QuYXNzaWduKHsgZmlsZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLnBhcmVudC5uYW1lLCBmaWxlS2V5OiBmaWdtYS5maWxlS2V5LCBcIkNvbHVtbiBjb3VudFwiOiBtc2cuY29sdW1uQ29uZmlndXJhdGlvbi5sZW5ndGgsIFwiUm93IGNvdW50XCI6IG1zZy5yb3dzLCBcIkNvbHVtbiBDb25maWd1cmF0aW9uXCI6IG1zZy5jb2x1bW5Db25maWd1cmF0aW9uIH0sIGN1c3RvbUV2ZW50RGF0YSk7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInRhYmxlLWNyZWF0ZWRcIiwgbWVzc2FnZTogdGFibGVEYXRhIH0pO1xuICAgIGZpZ21hLm5vdGlmeShcIlRhYmxlIGNyZWF0ZWQg4pyFXCIpO1xufSk7XG5jb25zdCBwdXNoVGV4dExheWVyVG9BcnJheSA9IChsYXllciwgYXJyYXkpID0+IHtcbiAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICBuYW1lOiBsYXllci5uYW1lLFxuICAgICAgICB2aXNpYmxlOiBsYXllci52aXNpYmxlLFxuICAgICAgICB4OiBsYXllci54LFxuICAgICAgICB5OiBsYXllci55LFxuICAgICAgICB0eXBlOiBsYXllci50eXBlLFxuICAgICAgICBjaGFyYWN0ZXJzOiBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuY2hhcmFjdGVycyxcbiAgICAgICAgY2hpbGRyZW46IGxheWVyID09PSBudWxsIHx8IGxheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXllci5jaGlsZHJlbixcbiAgICB9KTtcbn07XG5jb25zdCBzZW5kQ3VycmVudFRleHRTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBsZXQgdGV4dExheWVycyA9IFtdO1xuICAgIHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZExheWVyKSA9PiB7XG4gICAgICAgIGlmICghIShzZWxlY3RlZExheWVyID09PSBudWxsIHx8IHNlbGVjdGVkTGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkTGF5ZXIuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRleHRMYXllcnMgPSBzZWxlY3RlZExheWVyLmZpbmRBbGwobiA9PiBuLnR5cGUgPT09ICdURVhUJyk7XG4gICAgICAgICAgICBzZWxlY3RlZFRleHRMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpc1Zpc2libGVOb2RlKGxheWVyKSAmJiBwdXNoVGV4dExheWVyVG9BcnJheShsYXllciwgdGV4dExheWVycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxlY3RlZExheWVyLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgICAgICAgaXNWaXNpYmxlTm9kZShzZWxlY3RlZExheWVyKSAmJiBwdXNoVGV4dExheWVyVG9BcnJheShzZWxlY3RlZExheWVyLCB0ZXh0TGF5ZXJzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6IFwibmV3LXRleHQtc2VsZWN0aW9uXCIsXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHRleHRMYXllcnMsXG4gICAgICAgICAgICBzZWxlY3RlZExheWVyczogc2VsZWN0aW9uXG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5jb25zdCByZ2JUb0hleCA9IChyLCBnLCBiKSA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50VG9IZXggPSAoYykgPT4ge1xuICAgICAgICBjID0gTWF0aC5yb3VuZChjICogMjU1KTtcbiAgICAgICAgbGV0IGhleCA9IGMudG9TdHJpbmcoMTYpO1xuICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/ICcwJyArIGhleCA6IGhleDtcbiAgICB9O1xuICAgIGNvbnN0IGNvbWJpbmVDb21wb25lbnRzID0gKHIsIGcsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuICcjJyArIGNvbXBvbmVudFRvSGV4KHIpICsgY29tcG9uZW50VG9IZXgoZykgKyBjb21wb25lbnRUb0hleChiKTtcbiAgICB9O1xuICAgIHJldHVybiBjb21iaW5lQ29tcG9uZW50cyhyLCBnLCBiKTtcbn07XG5jb25zdCBwdXNoQ29sb3JUb0FycmF5ID0gKGxheWVyLCBjb2xvclR5cGUsIGFycmF5KSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgY29uc3Qgc3R5bGVJZFR5cGUgPSBjb2xvclR5cGUgPT09ICdmaWxscycgPyAnZmlsbFN0eWxlSWQnIDogJ3N0cm9rZVN0eWxlSWQnO1xuICAgIGNvbnN0IGlzU29saWRDb2xvciA9ICgoX2EgPSBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuZmlsbHNbMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50eXBlKSA9PT0gJ1NPTElEJztcbiAgICBjb25zdCBjb2xvcklzSW1hZ2UgPSBjb2xvclR5cGUgPT09ICdmaWxscycgJiYgKChfYiA9IGxheWVyID09PSBudWxsIHx8IGxheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXllci5maWxsc1swXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnR5cGUpID09PSAnSU1BR0UnO1xuICAgIGNvbnN0IGNvbG9ySXNHcmFkaWVudCA9IGNvbG9yVHlwZSA9PT0gJ2ZpbGxzJyAmJiAoKF9jID0gbGF5ZXIgPT09IG51bGwgfHwgbGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheWVyLmZpbGxzWzBdKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudHlwZS5pbmNsdWRlcygnR1JBRElFTlQnKSk7XG4gICAgY29uc3QgY29sb3JJc1Zpc2libGUgPSBsYXllcltjb2xvclR5cGVdWzBdLnZpc2libGU7XG4gICAgaWYgKCFjb2xvcklzSW1hZ2UgJiYgIWNvbG9ySXNHcmFkaWVudCAmJiBjb2xvcklzVmlzaWJsZSAmJiAhbGF5ZXIuaXNDaGlsZE9mSWNvbldpdGhGaWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbG9ySW5IZXggPSAoY29sb3JJblJHQikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJnYlRvSGV4KGNvbG9ySW5SR0IuciwgY29sb3JJblJHQi5nLCBjb2xvckluUkdCLmIpO1xuICAgICAgICB9O1xuICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICAgIGNvbG9ySWQ6IHV1aWQoKSxcbiAgICAgICAgICAgIGxheWVySWQ6IGxheWVyLmxheWVySWQsXG4gICAgICAgICAgICBsYXllck5hbWU6IGxheWVyLm5hbWUsXG4gICAgICAgICAgICBsYXllclR5cGU6IGxheWVyLnR5cGUsXG4gICAgICAgICAgICBjb2xvcjogbGF5ZXJbY29sb3JUeXBlXSxcbiAgICAgICAgICAgIGNvbG9yU3R5bGVJZDogbGF5ZXJbc3R5bGVJZFR5cGVdLFxuICAgICAgICAgICAgaGFzQ29sb3JTdHlsZTogaXNTb2xpZENvbG9yID8gbGF5ZXJbc3R5bGVJZFR5cGVdLmxlbmd0aCA+IDAgOiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICAgICAgICBjb2xvclR5cGU6IGNvbG9yVHlwZS5zbGljZSgwLCAtMSksXG4gICAgICAgICAgICBjb2xvckluSGV4OiBjb2xvckluSGV4KGxheWVyW2NvbG9yVHlwZV1bMF0uY29sb3IpLFxuICAgICAgICB9KTtcbiAgICB9XG59O1xubGV0IGNvbG9yVG9rZW5zID0gW107XG5jb25zdCBnZXRDb2xvclRva2VucyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGxpZ2h0TW9kZVRva2VucyA9IHlpZWxkIFByb21pc2UuYWxsKHJhd0xpZ2h0Q29sb3JUb2tlbnMubWV0YS5zdHlsZXMubWFwKChzdHlsZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0eWxlKSwgeyB0aGVtZTogJ2xpZ2h0JyB9KTtcbiAgICB9KSkpO1xuICAgIGNvbnN0IGRhcmtNb2RlVG9rZW5zID0geWllbGQgUHJvbWlzZS5hbGwocmF3RGFya0NvbG9yVG9rZW5zLm1ldGEuc3R5bGVzLm1hcCgoc3R5bGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZSksIHsgdGhlbWU6ICdkYXJrJyB9KTtcbiAgICB9KSkpO1xuICAgIGNvbnN0IGFsbENvbG9yVG9rZW5zID0gbGlnaHRNb2RlVG9rZW5zLmNvbmNhdChkYXJrTW9kZVRva2Vucyk7XG4gICAgY29sb3JUb2tlbnMgPSB5aWVsZCBQcm9taXNlLmFsbChhbGxDb2xvclRva2Vucy5tYXAoKHN0eWxlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdGVtcFJlY3RhbmdsZSA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICB0ZW1wUmVjdGFuZ2xlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvbG9yU3R5bGVXaXRoSGV4ID0ge307XG4gICAgICAgIGNvbnN0IGltcG9ydGVkU3R5bGUgPSB5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoc3R5bGUua2V5KTtcbiAgICAgICAgdGVtcFJlY3RhbmdsZS5maWxsU3R5bGVJZCA9IGltcG9ydGVkU3R5bGUuaWQ7XG4gICAgICAgIGlmICh0ZW1wUmVjdGFuZ2xlLmZpbGxzWzBdLmNvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbG9yU3R5bGVXaXRoSGV4ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZSksIHsgaGV4OiByZ2JUb0hleCh0ZW1wUmVjdGFuZ2xlLmZpbGxzWzBdLmNvbG9yLnIsIHRlbXBSZWN0YW5nbGUuZmlsbHNbMF0uY29sb3IuZywgdGVtcFJlY3RhbmdsZS5maWxsc1swXS5jb2xvci5iKSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9yU3R5bGVXaXRoSGV4ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZSksIHsgaGV4OiAnTm9uZScgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcFJlY3RhbmdsZS5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIGNvbG9yU3R5bGVXaXRoSGV4O1xuICAgIH0pKSk7XG59KTtcbmNvbnN0IGdldENvbG9yU3RhdHMgPSAoKSA9PiB7XG4gICAgZ2V0Q29sb3JUb2tlbnMoKTtcbiAgICBjb25zdCBnZXRSYXdMYXllcnNXaXRoQ29sb3IgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IHJlbGV2YW50TGF5ZXJzID0gc2VsZWN0aW9uLm1hcCgoc2VsZWN0ZWRMYXllcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgbGV0IG91dHB1dEZvckxheWVyc1dpdGhDaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgY29uc3QgaXNSZWxldmFudExheWVyID0gKG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NlcHRhYmxlTm9kZXR5cGVzID0gW1xuICAgICAgICAgICAgICAgICAgICAnRUxMSVBTRScsXG4gICAgICAgICAgICAgICAgICAgICdGUkFNRScsXG4gICAgICAgICAgICAgICAgICAgICdHUk9VUCcsXG4gICAgICAgICAgICAgICAgICAgICdDT01QT05FTlQnLFxuICAgICAgICAgICAgICAgICAgICAnSU5TVEFOQ0UnLFxuICAgICAgICAgICAgICAgICAgICAnTElORScsXG4gICAgICAgICAgICAgICAgICAgICdQT0xZR09OJyxcbiAgICAgICAgICAgICAgICAgICAgJ1JFQ1RBTkdMRScsXG4gICAgICAgICAgICAgICAgICAgICdTSEFQRV9XSVRIX1RFWFQnLFxuICAgICAgICAgICAgICAgICAgICAnU1RBUicsXG4gICAgICAgICAgICAgICAgICAgICdURVhUJyxcbiAgICAgICAgICAgICAgICAgICAgJ0JPT0xFQU5fT1BFUkFUSU9OJ1xuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgbGV0IGhhc0ZpbGwgPSBcImZpbGxzXCIgaW4gbiAmJiAobiA9PT0gbnVsbCB8fCBuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuLmZpbGxzWzBdKSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGxldCBoYXNTdHJva2UgPSBcInN0cm9rZXNcIiBpbiBuICYmIChuID09PSBudWxsIHx8IG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG4uc3Ryb2tlc1swXSkgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNGaWxsT3JTdHJva2UgPSBoYXNGaWxsIHx8IGhhc1N0cm9rZTtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlSXNWYWxpZE5vZGVUeXBlID0gYWNjZXB0YWJsZU5vZGV0eXBlcy5zb21lKChub2RlVHlwZSkgPT4gbi50eXBlID09PSBub2RlVHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVJc1ZhbGlkTm9kZVR5cGUgJiYgaGFzRmlsbE9yU3Ryb2tlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTGF5ZXJIYXNDaGlsZHJlbiA9ICdmaW5kQWxsJyBpbiBzZWxlY3RlZExheWVyICYmXG4gICAgICAgICAgICAgICAgKChfYSA9IHNlbGVjdGVkTGF5ZXIgPT09IG51bGwgfHwgc2VsZWN0ZWRMYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRMYXllci5jaGlsZHJlbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkgPiAwO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkTGF5ZXJIYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIG91dHB1dEZvckxheWVyc1dpdGhDaGlsZHJlbiA9IHNlbGVjdGVkTGF5ZXIuZmluZEFsbCgobikgPT4gaXNSZWxldmFudExheWVyKG4pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLm91dHB1dEZvckxheWVyc1dpdGhDaGlsZHJlbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1JlbGV2YW50TGF5ZXIoc2VsZWN0ZWRMYXllcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3NlbGVjdGVkTGF5ZXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG91dHB1dCA9IHJlbGV2YW50TGF5ZXJzLmZsYXQoKTtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0LmZpbHRlcihsYXllciA9PiBpc1Zpc2libGVOb2RlKGxheWVyKSk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbiAgICBjb25zdCByYXdMYXllcnNXaXRoQ29sb3IgPSBnZXRSYXdMYXllcnNXaXRoQ29sb3IoKTtcbiAgICBjb25zdCBsYXllcnNXaXRoQ29sb3IgPSByYXdMYXllcnNXaXRoQ29sb3IubWFwKChsYXllcikgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBoYXNGaWxsID0gXCJmaWxsc1wiIGluIGxheWVyICYmIGxheWVyLmZpbGxzWzBdICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGhhc1N0cm9rZSA9IFwic3Ryb2tlc1wiIGluIGxheWVyICYmIGxheWVyLnN0cm9rZXNbMF0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaGFzRmlsbEFuZFN0cm9rZSA9IGhhc0ZpbGwgJiYgaGFzU3Ryb2tlO1xuICAgICAgICBjb25zdCBpc0NoaWxkT2ZJY29uID0gbGF5ZXIucGFyZW50LnR5cGUgPT09ICdCT09MRUFOX09QRVJBVElPTic7XG4gICAgICAgIGNvbnN0IHBhcmVudEljb25IYXNGaWxsID0gKChfYiA9IChfYSA9IGxheWVyLnBhcmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZpbGxzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubGVuZ3RoKSA+IDA7XG4gICAgICAgIGNvbnN0IGlzQ2hpbGRPZkljb25XaXRoRmlsbCA9IGlzQ2hpbGRPZkljb24gJiYgcGFyZW50SWNvbkhhc0ZpbGw7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYXllcklkOiBsYXllci5pZCxcbiAgICAgICAgICAgIG5hbWU6IGxheWVyLm5hbWUsXG4gICAgICAgICAgICBmaWxsczogXCJmaWxsc1wiIGluIGxheWVyICYmIGxheWVyLmZpbGxzLFxuICAgICAgICAgICAgc3Ryb2tlczogXCJzdHJva2VzXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuc3Ryb2tlcyxcbiAgICAgICAgICAgIGZpbGxTdHlsZUlkOiBcImZpbGxTdHlsZUlkXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuZmlsbFN0eWxlSWQsXG4gICAgICAgICAgICBzdHJva2VTdHlsZUlkOiBcInN0cm9rZVN0eWxlSWRcIiBpbiBsYXllciAmJiBsYXllci5zdHJva2VTdHlsZUlkLFxuICAgICAgICAgICAgdmlzaWJsZTogbGF5ZXIudmlzaWJsZSxcbiAgICAgICAgICAgIHR5cGU6IGxheWVyLnR5cGUsXG4gICAgICAgICAgICBoYXNGaWxsOiBoYXNGaWxsLFxuICAgICAgICAgICAgaGFzU3Ryb2tlOiBoYXNTdHJva2UsXG4gICAgICAgICAgICBoYXNGaWxsQW5kU3Ryb2tlOiBoYXNGaWxsQW5kU3Ryb2tlLFxuICAgICAgICAgICAgaXNDaGlsZE9mSWNvbldpdGhGaWxsOiBpc0NoaWxkT2ZJY29uV2l0aEZpbGxcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zdCBhbGxJbnN0YW5jZXNPZkNvbG9yID0gbGF5ZXJzV2l0aENvbG9yXG4gICAgICAgIC5tYXAoKGxheWVyKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wQ29sb3JzID0gW107XG4gICAgICAgIGlmIChsYXllci5oYXNGaWxsQW5kU3Ryb2tlKSB7XG4gICAgICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyLCAnZmlsbHMnLCB0ZW1wQ29sb3JzKTtcbiAgICAgICAgICAgIHB1c2hDb2xvclRvQXJyYXkobGF5ZXIsICdzdHJva2VzJywgdGVtcENvbG9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGF5ZXIuaGFzRmlsbCkge1xuICAgICAgICAgICAgcHVzaENvbG9yVG9BcnJheShsYXllciwgJ2ZpbGxzJywgdGVtcENvbG9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGF5ZXIuaGFzU3Ryb2tlKSB7XG4gICAgICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyLCAnc3Ryb2tlcycsIHRlbXBDb2xvcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wQ29sb3JzO1xuICAgIH0pXG4gICAgICAgIC5mbGF0KCk7XG4gICAgY29uc3QgZG9lc0NvbG9yTWF0Y2hBbnlPbmVDb3JlU3R5bGUgPSAoY29sb3JJbkhleCkgPT4ge1xuICAgICAgICByZXR1cm4gY29sb3JUb2tlbnMuc29tZSgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICByZXR1cm4gY29sb3JJbkhleCA9PT0gKChfYiA9IChfYSA9IHN0eWxlID09PSBudWxsIHx8IHN0eWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdHlsZS5jb2xvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbG9yKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaGV4KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH07XG4gICAgY29uc3QgZG9lc0tleU1hdGNoQW55T25lQ29yZUNvbG9yU3R5bGVLZXkgPSAoa2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBjb2xvclRva2Vucy5zb21lKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGtleS5pbmNsdWRlcyhzdHlsZS5rZXkpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfTtcbiAgICBjb25zdCBjb2xvcnNXaXRoQ29sb3JTdHlsZSA9IGFsbEluc3RhbmNlc09mQ29sb3IuZmlsdGVyKChjb2xvcikgPT4ge1xuICAgICAgICByZXR1cm4gY29sb3IuaGFzQ29sb3JTdHlsZTtcbiAgICB9KTtcbiAgICBjb25zdCBjb2xvcnNVc2luZ09uZUNvcmVTdHlsZSA9ICgoKSA9PiB7XG4gICAgICAgIGxldCBjb2xvcnMgPSBjb2xvcnNXaXRoQ29sb3JTdHlsZS5maWx0ZXIoKGNvbG9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHIsIGcsIGIgfSA9IGNvbG9yLmNvbG9yWzBdLmNvbG9yO1xuICAgICAgICAgICAgY29uc3QgY29sb3JJbkhleCA9IHJnYlRvSGV4KHIsIGcsIGIpO1xuICAgICAgICAgICAgcmV0dXJuIGRvZXNDb2xvck1hdGNoQW55T25lQ29yZVN0eWxlKGNvbG9ySW5IZXgpICYmIGRvZXNLZXlNYXRjaEFueU9uZUNvcmVDb2xvclN0eWxlS2V5KGNvbG9yLmNvbG9yU3R5bGVJZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb2xvcnMubWFwKChjb2xvciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbG9yVG9rZW5zLm1hcCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IuY29sb3JTdHlsZUlkLmluY2x1ZGVzKHN0eWxlLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzW2luZGV4XSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29sb3IpLCB7IHN0eWxlTmFtZTogc3R5bGUubmFtZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29sb3JzO1xuICAgIH0pKCk7XG4gICAgY29uc3QgY29sb3JzTm90VXNpbmdPbmVDb3JlQ29sb3JTdHlsZSA9IGFsbEluc3RhbmNlc09mQ29sb3IuZmlsdGVyKChjb2xvcikgPT4ge1xuICAgICAgICByZXR1cm4gIWNvbG9yVG9rZW5zLnNvbWUoKG9uZUNvcmVDb2xvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmNvbG9yU3R5bGVJZC5pbmNsdWRlcyhvbmVDb3JlQ29sb3Iua2V5KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3Qgb25lQ29yZUNvbG9yU3R5bGVDb3ZlcmFnZSA9IGAkeygoY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUubGVuZ3RoIC8gYWxsSW5zdGFuY2VzT2ZDb2xvci5sZW5ndGgpICogMTAwKS50b0ZpeGVkKDIpfSVgO1xuICAgIGNvbnN0IGlkc09mQWxsSW5zdGFuY2VzT2ZDb2xvciA9IGFsbEluc3RhbmNlc09mQ29sb3IubWFwKChjb2xvcikgPT4gY29sb3IuY29sb3JJZCk7XG4gICAgY29uc3QgY29sb3JTdGF0cyA9IHtcbiAgICAgICAgc2VsZWN0ZWRMYXllcnNXaXRoQ29sb3I6IHJhd0xheWVyc1dpdGhDb2xvcixcbiAgICAgICAgYWxsSW5zdGFuY2VzT2ZDb2xvcjogYWxsSW5zdGFuY2VzT2ZDb2xvcixcbiAgICAgICAgY29sb3JzV2l0aENvbG9yU3R5bGU6IGNvbG9yc1dpdGhDb2xvclN0eWxlLFxuICAgICAgICBjb2xvcnNVc2luZ09uZUNvcmVTdHlsZTogY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUsXG4gICAgICAgIGNvbG9yc05vdFVzaW5nT25lQ29yZUNvbG9yU3R5bGU6IGNvbG9yc05vdFVzaW5nT25lQ29yZUNvbG9yU3R5bGUsXG4gICAgICAgIG9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2U6IG9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2UsXG4gICAgICAgIGlkc09mQWxsSW5zdGFuY2VzT2ZDb2xvcjogaWRzT2ZBbGxJbnN0YW5jZXNPZkNvbG9yLFxuICAgIH07XG4gICAgcmV0dXJuIGNvbG9yU3RhdHM7XG59O1xuY29uc3Qgc2VsZWN0QW5kWm9vbVRvTGF5ZXIgPSAobGF5ZXJJZCkgPT4ge1xuICAgIGNvbnN0IGxheWVyID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobGF5ZXJJZCk7XG4gICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW2xheWVyXTtcbiAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW2xheWVyXSk7XG59O1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKG1zZy50eXBlID09PSBcIm5hdmlnYXRlLXRvLXRhYlwiKSB7XG4gICAgICAgIHN3aXRjaCAobXNnLnRhYkNsaWNrZWQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgICAgICAgICAgdWlTaXplID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0OFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKHVpU2l6ZS53aWR0aCwgdWlTaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbygnb3Blbi1ob21lJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGFibGUtY3JlYXRvclwiOlxuICAgICAgICAgICAgICAgIHVpU2l6ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NDhcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSh1aVNpemUud2lkdGgsIHVpU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG8oJ29wZW4tdGFibGUtY3JlYXRvcicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxhbmd1YWdlLWxpbnRlclwiOlxuICAgICAgICAgICAgICAgIHNlbmRDdXJyZW50VGV4dFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIHVpU2l6ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ3NSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSh1aVNpemUud2lkdGgsIHVpU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG8oJ29wZW4tbGFuZ3VhZ2UtbGludGVyJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY29sb3ItbGludGVyXCI6XG4gICAgICAgICAgICAgICAgdWlTaXplID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDc1LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKHVpU2l6ZS53aWR0aCwgdWlTaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbygnb3Blbi1jb2xvci1saW50ZXInKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiaW5pdGlhbGl6ZS1zZWxlY3Rpb25cIikge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcImluaXRpYWwtc2VsZWN0aW9uXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2Nsb3NlLXBsdWdpbicpIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcImNyZWF0ZS10YWJsZVwiKSB7XG4gICAgICAgIGNyZWF0ZVRhYmxlKG1zZyk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3J1bi1sYW5ndWFnZS1saW50ZXInKSB7XG4gICAgICAgIHNlbmRDdXJyZW50VGV4dFNlbGVjdGlvbigpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdyZXF1ZXN0LWxvY2FsLWN1c3RvbS1kaWN0aW9uYXJ5Jykge1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImxvY2FsLWN1c3RvbS1kaWN0aW9uYXJ5LXJldHJpZXZlZFwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdCA/IHJlc3VsdCA6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2FkZC10by1kaWN0aW9uYXJ5Jykge1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdDdXN0b21EaWN0aW9uYXJ5ID0gcmVzdWx0ID8gcmVzdWx0IDogW107XG4gICAgICAgICAgICBuZXdDdXN0b21EaWN0aW9uYXJ5LnB1c2gobXNnLndvcmRUb0FkZCk7XG4gICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIsIG5ld0N1c3RvbURpY3Rpb25hcnkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnZ2V0LXNhbXBsZS10ZXh0Jykge1xuICAgICAgICBjb25zdCBzYW1wbGVUZXh0ID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic2FtcGxlLXRleHRcIiwgbWVzc2FnZTogc2FtcGxlVGV4dCB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnc2FtcGxlLXRleHQtY2hhbmdlZCcpIHtcbiAgICAgICAgc2VsZWN0QW5kWm9vbVRvTGF5ZXIobXNnLmFjdGl2ZU5vZGVJZCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3VwZGF0ZS1zb3VyY2UtdGV4dCcpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlVGV4dExheWVyID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmxheWVySWQpO1xuICAgICAgICBsZXQgZm9udE5hbWUgPSBhY3RpdmVUZXh0TGF5ZXIuZm9udE5hbWU7XG4gICAgICAgIGlmIChmb250TmFtZSA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKGFjdGl2ZVRleHRMYXllci5nZXRSYW5nZUFsbEZvbnROYW1lcygwLCBhY3RpdmVUZXh0TGF5ZXIuY2hhcmFjdGVycy5sZW5ndGgpLm1hcChmaWdtYS5sb2FkRm9udEFzeW5jKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGZvbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmVUZXh0TGF5ZXIuZGVsZXRlQ2hhcmFjdGVycygwLCBhY3RpdmVUZXh0TGF5ZXIuY2hhcmFjdGVycy5sZW5ndGgpO1xuICAgICAgICBhY3RpdmVUZXh0TGF5ZXIuaW5zZXJ0Q2hhcmFjdGVycygwLCBtc2cudXBkYXRlZFRleHQpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic291cmNlLXRleHQtdXBkYXRlZFwiLCBtZXNzYWdlOiBtc2cudXBkYXRlZFRleHQgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3RleHQtbGludGVkJykge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwidGV4dC1saW50ZWRcIiwgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIGN1c3RvbUV2ZW50RGF0YSxcbiAgICAgICAgICAgICAgICBtaW5pbWFsUmVwb3J0OiBtc2cubWluaW1hbFJlcG9ydCxcbiAgICAgICAgICAgICAgICBmdWxsUmVwb3J0OiBtc2cuZnVsbFJlcG9ydFxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAncnVuLWNvbG9yLWxpbnRlcicpIHtcbiAgICAgICAgY29uc3Qgc2VuZENvbG9yRGF0YSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgZ2V0Q29sb3JUb2tlbnMoKTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY29sb3Itc3RhdHMnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3VzdG9tRXZlbnREYXRhKSwgeyBjb2xvclN0YXRzOiBnZXRDb2xvclN0YXRzKCksIGNvbG9yVG9rZW5zOiBjb2xvclRva2Vucywgc2VsZWN0aW9uTWFkZTogZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA+IDAgfSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbmRDb2xvckRhdGEoKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnc2VsZWN0LWxheWVyJykge1xuICAgICAgICBzZWxlY3RBbmRab29tVG9MYXllcihtc2cubGF5ZXJJZCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2FwcGx5LWNvbG9yLXN0eWxlJykge1xuICAgICAgICBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMobXNnLmNvbG9yU3R5bGVLZXkpLnRoZW4oaW1wb3J0ZWQgPT4ge1xuICAgICAgICAgICAgZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmxheWVySWQpW2Ake21zZy5jb2xvclR5cGV9U3R5bGVJZGBdID0gaW1wb3J0ZWQuaWQ7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NvbG9yLXJlcGxhY2VkJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbUV2ZW50RGF0YSksIHsgbGF5ZXJJZDogbXNnLmxheWVySWQsIGxheWVyTmFtZTogZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmxheWVySWQpLm5hbWUsIG9yaWdpbmFsQ29sb3I6IG1zZy5vcmlnaW5hbENvbG9yLCBjb2xvclN0eWxlS2V5OiBtc2cuY29sb3JTdHlsZUtleSwgY29sb3JTdHlsZU5hbWU6IG1zZy5jb2xvclN0eWxlTmFtZSwgY29sb3JTdHlsZUNvbG9yOiBtc2cuY29sb3JTdHlsZUNvbG9yIH0pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwicmVzaXplXCIpIHtcbiAgICAgICAgZmlnbWEudWkucmVzaXplKG1zZy5zaXplLnggPj0gdWlTaXplLndpZHRoID8gbXNnLnNpemUueCA6IHVpU2l6ZS53aWR0aCwgbXNnLnNpemUueSA+PSB1aVNpemUuaGVpZ2h0ID8gbXNnLnNpemUueSA6IHVpU2l6ZS5oZWlnaHQpO1xuICAgIH1cbn0pO1xuZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3Rpb25jaGFuZ2UgZXZlbnQgd2FzIGZpcmVkJyk7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInNlbGVjdGlvbi1jaGFuZ2VkXCIsXG4gICAgICAgIG1lc3NhZ2U6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblxuICAgIH0pO1xufSk7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9