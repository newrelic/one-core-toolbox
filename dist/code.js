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

module.exports = JSON.parse("{\"error\":false,\"status\":200,\"meta\":{\"styles\":[{\"key\":\"e6fc8e5dc3df8c899a20780b6204efc818a14d7f\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"234:1555\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4LO/oVc/732OljlnBcNppPRi/style_thumbnail_48.png?Expires=1655683200&Signature=MaDbnZ-Oe1woSDlsCA6x3dBMDB4aSUbyf6D~jo2cHhUQHiP1gVNN2hkUWkGklUKLvJrFHywdIIWGfTnAm2rWU~PtUXBCR9pggvrplHA5VCrs7RD9QYmM9Z4gPVqL9TiPYDSAtH7eqP3cNva3rEn7DSIvBTLAjPLuNajyZ7~VL6msPHdwaPdinv1tU~Y7--0E9qHzTwPvY53xZkC5k3Z~4FhU3QrzdQVfc1F1Nciyogyo46wnI~E0wiuNpJQt6Ywiu5OX2b1tQZjd~FtydoODaV8oU25phIiIfsTOAwENPLGH1Sts~Nm1fsEgEIesB9rs1q9j7htpmW7rsp404CNgdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Selected\",\"description\":\"\",\"created_at\":\"2022-03-14T14:38:06.263Z\",\"updated_at\":\"2022-05-13T09:40:25.495Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e/\"},{\"key\":\"e80c27cec2c1bba6e5c3ddf88cc028ddea3178e8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"490:1563\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/A8U/p6s/40yY0trx1zcbhWLC/style_thumbnail_1.png?Expires=1655683200&Signature=bY84kxusqjTpiB7pRfuTq7l1nCshAjqt6nT4QbbfVpbiNaCdme0M~sbIxKgcNUoP8H1JDwRI5oBQ0G1WKbxxTvd~adoE9Tn-ZcruI-kXrP73-G24c7LvKMYLrK-x5psbvO-0d~h87jkfhze~1ABe~AcU7AiyN1ZoZkefzpKkihpG28OEsbzmI9ovoUdTyMwkJybwFGqf9W8QVXpRPhMKsQbeU3Vmd~tKfmrU20FQ489L9rXdi0y572ieGhTNiOe5xrktrQL-TfLs0Z7zKMhS6Uu2wj1L9P0x7DtGz69hExgZqSgOnNoLbgzxn5msfHChZoxYPoZFeLCkt2HBDeRMqg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Hover\",\"description\":\"\",\"created_at\":\"2022-05-13T09:40:25.395Z\",\"updated_at\":\"2022-05-13T09:40:25.395Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e.\"},{\"key\":\"6c5fea659d4dba983327456079ad0a259f9121f7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1847\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Rtn/6mv/bxZevKI28Y2sxc4o/style_thumbnail_0.png?Expires=1655683200&Signature=U~s7JefOkndJSV7BflUE0bW82UIXgZ0YRS-44NhbhbqlIP~7opD1gj9VbjNEFmoM1wLAZgy0P6jixvM2GlWblHbH9f90XeIvsXimiSp-YAAvQ5ho9C~D0w638PAKfAaBLiVtUY8j4T-lMY78u50vmf9yn1ElKTSyAkk88tZMcVNz~K3eBe2M-VxQgk1Z49vgnkao-KQMeuovq-rVNiyzd2SGkKYwVT3yP1Bf2pWcx6Gzs8jwKdGZc-BNKgAaDhgZIqGUKzygIM6IUjVoBEcbPwj1pwsM8SNqOp3fMau6pyCjEpxqLJISz-MMQGeRIwHPwzaArzIyuImiZpfTVReh8g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Regex\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.589Z\",\"updated_at\":\"2022-05-10T06:11:55.384Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~0x\"},{\"key\":\"4edbb9f84d88ce62dfe77c1e6a84164b68cb78e0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1844\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/W1A/i4D/mdb5IFisQipeEyTd/style_thumbnail_2.png?Expires=1655683200&Signature=NFuYr8Ybxy9LT50Gsxsk9RmjIS2Xtaw2uiLlcwY5tlWz6WoSNwfD5EgYntYCXxN0QdSsS0t1QJEKwX1Opj6cv2MjiZ5jYURbjFDjMYuYNKKy3~74aWeLZAJzKlf-GaqdsGd5ig1ACuyd5F14fNLAi~XYnkJh4UE6iAawT3Yljc-8KkGmDTghspmyXEY4afyZmkDmTv5J0Mt7B0iqdTL9YVK1~VAQMwwINFIZBBUcL6kbnWPORbw9SMWd2ygc8G8IxqHXbMt45St2ywNRwZe6XgliX18If3SXWszqlnFlvRMwfXu87Y5HdP2SfpiH6F66L8YlDAbW~iNbKTx~q64cHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Keyword\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.483Z\",\"updated_at\":\"2022-05-10T06:11:55.378Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~0O\"},{\"key\":\"47ddb6fe30190a1679d0e88be69134f30e018b86\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1845\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jnj/ul9/M9LIYOm6f2PZuQ7l/style_thumbnail_1.png?Expires=1655683200&Signature=OtvtXlZ1KoujXBnzVNfrwJjArwti56w3HbTMYr9uMweg0sWS8sexy5vaXHX8yMX9MEPwgzRpcmUAXSGFoaAKGHwoIx6~rz3CnTSJOOqgUsjehi5NYBxpJACudzvbhSZ-0Hu~Bq77yEx-SIo1T8ogyd6E1uGrxLPjT9vP5WZRGG4tJsiuCnX-o0Wmz16LzeNPJ0AicXSgwO1dFFC8aAlOxWg2tNV9nciw5J9FwPneTCKkNkPv4LshPisse8GF3TQd90NPwt2mmjU4m2NHopk-nLIXQaDz7Ol7XbuIWZhDhSfmBAeaj5QB981MJj4sQErbvBEH0-xgR7f3izvsII4CpQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Function\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.517Z\",\"updated_at\":\"2022-05-10T06:11:55.372Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~0f\"},{\"key\":\"c412194794f517b78c51920ae546c608e6056dae\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1684\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NVd/lyp/ygrW9XZQ7DJ7qyp5/style_thumbnail_0.png?Expires=1655683200&Signature=fadyZLzBkTiHhcbWq2NAx8qT2CSEYRasjEbgBjqEnDFWUAgc94Xy9BU1QDAfJCmB9GvNo~EX8ZWMALT3XrOaP8sHodcW2YTIM4UsLAx~xqZfyI39CkX0PpH0eCVe7J6EHWtRs3htWLjwftza1D-bf4XZg-NBxWXCkeo9VTZWRt9UrkaQzTBUhxiKw-UggwUEywfDEU8eyIeZvEuWsf1Owmu3kEToINx5pPfMDC0dchTz81abTB46JZ7EKfhfgMzN6U5ittcfOTpD5FMKPoX1Ay1HJS2RTGuLEG3xNi9~IzfnZ3E-h0tKJ9B38hnG5E7ezuTlE-Lp2lyxnJ8nVP-s7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.762Z\",\"updated_at\":\"2022-05-03T08:33:04.291Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4r\"},{\"key\":\"cf6767f66c45888b1e41ba493a433e3273a89d8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1483\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/5P9/9fe/bJWszhV66ntAUXB8/style_thumbnail_2.png?Expires=1655683200&Signature=ZwnHQydmcRJfCfFENFk55XW5d7C8kK4InzjS3jMuGhPrzLg7kHglo0ElgilVh2ZcCO0Td3SFgIw-6XjvNF~g6D~Kgu8KLAtXENSC2IHI~11F~VC7D78NMHLbhiCIs5voJTK~uEyKPQAF1BiiX3Rm-9j9IIQfTBr0pGgrwd4bDghy8ZdyxFipX~SIPZx9quRLLCbisVPbzZerxdEG13XunYT-ewI7elyq~zyZTubL-tiPFhTOqLxr2t6~Rs6iQ2SwUI1oEwB2fC-GKm0fFhIpQppEwEaI1Jd83JvPzhjFGVC3gGGirXmMFQUBX2MQvGRNmKpgRUTn2LVOBgCOwzKOFQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.887Z\",\"updated_at\":\"2022-04-28T09:01:01.916Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"S\"},{\"key\":\"bc570b6f33e00d9ef7df42a829bb6f9799bd08db\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1486\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/qxG/1Ua/LadLL0qCRmwjptAq/style_thumbnail_4.png?Expires=1655683200&Signature=JJks8d2G8auul0k-~Z5-0ive~XrNLgV0hwtjMAXM-8KSfJBg56Ga8LekxS9JjhEKKEaGi7MX1smqZ7zW9VqbFTAbNbykapyKm~6rzv2T6HsQm7mSynRXtA2gYNZ1VmrdDP5C0TR-fWvfhekDJR7MXnozpEsYcu9y6LI8C9DpguNX3AsvCwivzhZb4ZBVHfrh6B7N7p7pCgvtigV4LYhsqDl4djx2D-FuoASiECyNr1J1W46BQl1P0~bu~xEaG~uRWHU7iIkcmHaisbEaewFSRBNABjWUAt-BrbP4nBeSGCoyfKI5al6ao5syauJid-~MhJJS6jSl8qNFL5z83lnNkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.992Z\",\"updated_at\":\"2022-04-28T09:01:01.910Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"V\"},{\"key\":\"a04d540bdb338462ff6a60b5afa6eb2eb04a8971\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1487\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Z2t/CSP/hPLGhJdesaPvx8fH/style_thumbnail_3.png?Expires=1655683200&Signature=BKaCt6iVSedjqX38sSwpZqQG-4fxwu7Qc~tcrWWGRfbb82mqmkUij6~rgHgAPLIScrUKI8or5Bezf1ALQhPP1LyR3SNC7jJN-tEWCmkxLZirGAtVt85Suum2crKyhJEFlEJ~lENkQDvVfhCRYbbVISYeC3XLMOsvqL~LXPYoj9SVrw7poKpFMtSOyJNnGASH1RiBpSbq9O0cXqMCh0JiWSdaHNpvmSnwL11gUOmYCKFYpLbgPwGo4qqhFZ4zQp39zwlrK4xpn3v6xumoEYEcCLUyNFEnm5EpL1Yphl0KFfEPTxzt3oCCLYy77VOmVMU1qwjuq18gjfgUbUk~WK3c7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.908Z\",\"updated_at\":\"2022-04-28T09:01:01.905Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"W\"},{\"key\":\"055ba18d27bbc736d810f502e4be9030b754ea99\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1435\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/B0h/A5f/Ve9reWw33IU1dqbW/style_thumbnail_0.png?Expires=1655683200&Signature=MkzqaDaygkIHNZ~kzmjLxrgUf0fKkiXBfZNSLykBrXFhSCm036j7msqogPWn81Rp2kzYKUpBn69dBX1p3KSp3t94-YdBTTYoA4Q5gLBAxq4mrq1UF5wxspoicMvWEVd3o-x61rnrgY6F1SWLFvebHVGpHA8EYDmwlUCwXeqZiCcg17P2t-Cvc6IbaxZJnP78a9~v09BpAFFmWAdi4I9HFMT8BBgT0re32M-deNGy6uKQrAxevNIedONwUvNEIC-b66TVc-p3Q0YO1WizLhd14kUwiLRxbU2F22gINPXdTErm3m~SkQa8YhhG-6sLL4tUQV6zUaa3M6SSGX3lPU88dA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.523Z\",\"updated_at\":\"2022-04-28T09:01:01.899Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"Q\"},{\"key\":\"ab55f498d4517ba8ab842da582fc432292b768ad\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"402:1560\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aPB/xM1/Z7ofvqDjD2LZ2QR6/style_thumbnail_1.png?Expires=1655683200&Signature=W~VhKmphJ0jqYVYDx6lgMdwVMn7a4JRIqxyxxyB9nsC9NqbuiHBvlOxahn0DH-Xoa8Wm1lwMfFZq94nIKsKIpcH-a8Kfsc7DoJNp7yGvcntOzLmwMULrB-bcnOblhpxEcrJXu9abNcjZxhSu9FAmz-QXjF9vg2NbHpMZoPn1YUGu~FYe8gTX1vVXuyFXe9iszEzl7v-6cfi3FrLwA7DnVzubFw6a1mbVm4CyHLvLzKCdn~6eFKEchBPjBkzQbQPmDyxt~K4qkvrkwHxODa1yYsAavFWtwVKBeyttgvyKPV2lwxwNFLyRj3ieiqcXlEGVUN7DiZVeL5NLPOwGYqJcmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Overlay\",\"description\":\"\",\"created_at\":\"2022-04-28T09:01:01.878Z\",\"updated_at\":\"2022-04-28T09:01:01.878Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~eN}}}}}|f\"},{\"key\":\"a93e2537f8f9d7d34caff3b9313fe3543b29fe7c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"388:1580\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fsc/BJ3/VyIYPTpIbsiZfu1q/style_thumbnail_0.png?Expires=1655683200&Signature=DFXdOF2lIPASc8Nq62ZMRU7fsus4NycNIs7kEPIECwYi52FaemMsixUTtbIEHyfspE3YLI0SawiOd3MNT~AugJ9uQzf~9Gr-d-WC7HPRJtEaQhxvgWP51e-DGwVtda3kclI92WIPxVndiMS2cNwLig1UtzXUER1OJPMUZ6jVLHai6s1rsuDQMVA0daom3jh8e-xv4TighbRx-oidLWc4CdT2UHIJC7tQfdwIDEqsVgSD63KgE0UwV2TlcYxfxBuyLWlze-7c5Q5Q14-JiLj-vFy2Xl8SMlGY7lvB7NDdNuNZ0vfENAw17avk8FQWvxXHNlJ1cdmemQRXR7GXO1MUSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Muted\",\"description\":\"\",\"created_at\":\"2022-04-27T14:24:08.074Z\",\"updated_at\":\"2022-04-27T14:24:08.074Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~i\"},{\"key\":\"fdd2bbb7f23cab937357c3dd786f0cd654705923\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1305\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NHz/wvQ/9rCmPuW7C582piVx/style_thumbnail_1.png?Expires=1655683200&Signature=fL~6RrQXKnBI3uJh1hhYnaJvSy5~4R~0XJ6YAUpXFju95~a0hXrF3n-XLx5FsOO1g1o7wu7qEItZBO602OeXCw1ZDMsOMGtqMbHsc0ur~wfGbtoMwjRdO5m1AABeWjhBsxnbr4mEgn9UJu4WK4MB2vcGHprkJRodh-gFzWj4HqhuAmvJgtvqTXfzjuBRNNhSkIlZCDldFsAXHETGkTtDH-Is43WmQ~35O90BcW-UYGJQvuZof4qYdtQk9r72FU~FFd2e9NJwe8aAZp9rlHXcy~vrUVxIo3RehpfwnkmsrmWB6Mi1LIBH26OHskM92BXH2GZZCs13aGFdc64Mwa8i7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.696Z\",\"updated_at\":\"2022-04-27T10:29:30.135Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eL\"},{\"key\":\"bcd86bf284a03ad183ea1ba56ad05474058ea1af\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1307\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jKy/eP1/lrWY6X7upEis6dYT/style_thumbnail_4.png?Expires=1655683200&Signature=J7tsNqlbc4QJKPT7gHAu3xed2WhfNNQ8iyY7oZyW6OFau5SmWQYU~GHnQrelTXrOlP0-kO7NOeK~xrhiF2zRmIO1fBpOfG3KsGSV6~-kN8HFblo1djyiLvVARVe5osItJHV94mmO0V5lMpkACBUQK9v1~GqMPEgNFu-VYqIA27bJ9aZu1RGBAFlNkTLEIW0DS2S56~Hd8J-yAeP7jTSEjHiBOiY06pZuQRmb0chdS8gLjY~5~V5apaml4Y94nq1E0DbEh9qwpUdaDOTcwmZYzOTNlEPdwyDL21d9p-q8iZtwbMcOcRmA7dzokjukUbIz4HGsW3RbJa6eNsIPhNn9Ug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.742Z\",\"updated_at\":\"2022-04-27T10:29:30.129Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN\"},{\"key\":\"a00b0da40d6e36e18304fb96954d804102356292\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1302\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tXH/ifs/TD1Cxo8tV4z4lHBM/style_thumbnail_2.png?Expires=1655683200&Signature=fnwwiYoCW6vjTZ54ONQoFcF~yhxmI3Rd1FMTMtk0QfZ4SLBQs5A8v3~b5yDv1K3NXXhkzX9JST3xY3QSJhd5lbOIoqF~sSsnrpaettJTq0ldL2UgdLK8uGtJo50H~SagNn1DJldpmANRsJC7yvnxu2AzongUZlbPTrJLBk5EvDn-paP6ey7O2GXsjauHXzDliWhxU-MFT1JPfBrsSvV9b8bvEsY9AAP4wuxh5~kk5L7aVLBSYZqas0l9MwJIXcSk60xi-~6nWwGbEX2K3tz5jlMP8KJPYoJb4YyHfe7pjNhf98luubAlc9s3CjjP6-n6Ah-UephdhMOSVtzDMUg2vQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.717Z\",\"updated_at\":\"2022-04-27T10:29:30.124Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e7\"},{\"key\":\"772668fc8be854ff2701d0171548e0642ef118bb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"136:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aOG/ZUq/o6xiPxcJ5SRytHM6/style_thumbnail_0.png?Expires=1655683200&Signature=S0aJGy8m7k4kLk7fuePXBmx6-eOU1Yyw8jXzPv9Z60RnHsErJN9sOu5oURUucYw6n1FVd4LYRHg9xPFHWLosUaZXw-MglUU3WVrBWsoB8WW0bJeRGICvdoMzfbyqbCXw9A1vmRAUPjMPyYs8I7SLebdYpLMx3fkjssS1MUsaxCgYJsV2or5lJwSSSGB-UkqQuH~kpBxYbtj2ttQil92ANg~tLA0ToTcN0WxGapzr99ymj31xIoG4N1QXLl0tWy0HcH-p8rukjPF4d93ISSWW6na8kuZHJEpqGT0ZwC2ZtNzU3Mg54w3LuuFfRF8j6fEfr4XXCRW6l3aQksV1kq~iWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Accent\",\"description\":\"\",\"created_at\":\"2022-03-04T10:15:41.379Z\",\"updated_at\":\"2022-04-27T10:29:30.118Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~:\"},{\"key\":\"67db579a7edd8e7af291191d07a5d9cafc538167\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1304\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VIm/Zb3/n8IrdP29sVLxWTid/style_thumbnail_5.png?Expires=1655683200&Signature=Ld2kIA6xmkBP-AxZKXpEbLx3aYRiSnKqYxI11cbKN0XJlKXufpQBx5n9oPDf~5prfu2XEbw9TQQq~3TizgXYvMGOedX2BDgkCbi7a8KA6bcGnIraH7724fTLcLKIAq2A5hcVk8OHW8XcIPwiehFx761sf24KBGfpCnaB-Khc4qTYuOam350qK-qcwdapFHm9G~FN7UGPxwcgPWeWXkXo-FVzg9EEIpOMZsu23AZA6JRs9JHUYPWMOO0SBik3lLI0UNhCuAZKGbD6QN6WuXc6K78wx9WHx7YILCw9cbLKL2vsVPOmNm1iVd03cXFCuZ6LNEGsHLKW3pXhbyXL9VX~aQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.029Z\",\"updated_at\":\"2022-04-27T10:29:30.111Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eI\"},{\"key\":\"472711761aa216601e1708eec59328c945350fca\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1303\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/u6c/2nc/RhC4QqHpGCUFgEpS/style_thumbnail_3.png?Expires=1655683200&Signature=cwy~FP1pTM8EAT~36CldqmssIR6BmYIFIW-I4WdAEloTFuT-qxrfrAxBC4k3NwG3J2O1WFzPnvD~jLCxhR5R6wAd~ho-JWnwWADE0btznjg9R4VEJtQdgcb8z02skPg5drJP-G-33P5TJKgvDFnWMwngMi72RUuLZjq5LIB7Nwj9xhcUz6YANEv-sIxAKBmtPqQ8ZjCuWJ9WANbpjGwPrQ2pEg~3A1BlcAH02qyrwflViN0QU9wqqaFf1AehHZG9h~De5aLoKFvNO4pTmkXL6ElctpCbwKUbhjWUXpvfIIRBn4OeCSdK8wtaA8nKNGAYiVLJDLEswu7o0hUX3dDczQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.722Z\",\"updated_at\":\"2022-04-27T10:29:30.104Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eC\"},{\"key\":\"cb27bf455820278d574503da16a9577b830f5f86\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2375\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KI5/2yA/mFU9Z1NG6Elinicz/style_thumbnail_0.png?Expires=1655683200&Signature=V~evLk6GHM5689gRI63I06V1PJWGgVi1Nxh9S1GrK~DqG2y4y-ZE37ws3diQba~S~P-zP9IqDDxeiYwRBHiBYeHlsdP55Y2qBvtHPYGfWM64IOwK4UwHFLbKKr0Jrqm7V8w-1Blprw2F0HlhKRMZg1qI6XhcMDOn9kVRCujTkD-y8lk0tth6Rqd9q54aEm6cjdXNYuTdO-92vy0npD2Sqxd5RjO6~UD2mhZGqBXgtZhyVs8rpNKDQnER1QHn9XwWiP3e5EAKUuPWxWQ0s9WbIgQNX~R1KEREoLq1tRiwQCkywwbUHqKVQTrH2ED7fA0ZqKZkck8oZum0dO4aosj4EA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected Low Contrast\",\"description\":\"Background color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-25T12:33:22.584Z\",\"updated_at\":\"2022-04-27T10:01:36.795Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"(\"},{\"key\":\"404073bac29c7d33c3c7f1a16112db256be4c837\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1561\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/knO/Et3/v3JevhSmflm7GhEj/style_thumbnail_0.png?Expires=1655683200&Signature=hqquDBNU6ZzFEXxhD2~6Exyr2l0ZAIOJBmefWQZw~~ez8TrU-YxqAbi3N5zglRyW8Gt-Tzsb2pULdZWABhWA4IYUNFLsgPq48lnLDeta1db75-XCPtVTXluoiPnuoLv9UUu5Dyk9lE4B4WQDqrIU4xqxM8x3FvaGpmQR8m6JY2DZ5qdSRYFPPm-WktwfBGaizfDEpBcgNcMKODUzwpgsq8KAyX9qUgJXM0rIzeIvc0GqKRYjIZAf-6b6nMeJ4q2Pz~mxILGE6Vpba3n3frJZKZDVHPyOmNSm0S46ZUqabW1Esspb1I58sxkn3s-gcFOG3MlrJPuEhjU1RCppJ7v9vw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Path Alternate\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.322Z\",\"updated_at\":\"2022-04-27T09:57:25.671Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~er\"},{\"key\":\"0468a0dcdaca8460437b47fd3428588740826710\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1560\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PdT/91S/pcpM39M2UVWdTmgI/style_thumbnail_1.png?Expires=1655683200&Signature=ekk95PH1rAqNxm0awTX9VqF1nZAXm7Yqoa1FIIwA6EbhEpHrBlFyva~K6BAplD30wUBG71X8LgfssHC02GLaQyxXpRrSzzjs~xuUNBCuxdyzgEqHXEwh7VZRtdADQWc9Zeu39hBNx8cN1hdSAwvpIs4MTVTBCyFT-P-6izHnvK2Yarisr8ROHyHkret0WpFDa49FXYy59o7EgA8V7b1IRTxi6Q9NcuDpWJBaxjW8EgujE8VhXLT~h-Vh4BoAkUcnCag1~ummynO0kpdjMjn7I1wcwXVW-ayUr0mO1NyQiAnjyeH2fCrFFSSYu5wbBg2A6LyyqK34Nu2zCqZA0qFNnQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Path Main\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.328Z\",\"updated_at\":\"2022-04-27T09:57:25.660Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~ef\"},{\"key\":\"bc984118a258bb2d1c647d8752cd5ed77e8a6701\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"374:1555\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/U0f/fXN/nNqP1lB4iR7oPj82/style_thumbnail_0.png?Expires=1655683200&Signature=CMik7lAaHTq3FuGrkyy6IvfvGinCEIDzsHVvg7UnLcQxZ6iu~cdoPv3R8f-fCIulUsUrgWBK2QGhh1-dydYFoIs~nf7n6J-SKE-Z-bb2GyC0d-NxtxFxjl-jQlyUmu5Y2i79JNqbYPA86L1zn6SLAL50GR0xWm9FSTBh2cLGJ7AyjNsx60TChaluiyeHUgCpB~C1H1AME7ECalmgrWJSyCPlWKcNqY9-8RF4Igma8UsZq5HEqzVGyZdk64TkOP8lPYBq7oZBEX4qhvNw7tiy2i1OZ9JR4bTLA-XIF2QlpBE3KaWaSYitxFS-3Cy~ajhK5jCpy9Ov~cUI53FEDhk6bg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Text Fill Alternate\",\"description\":\"\",\"created_at\":\"2022-04-26T16:18:42.252Z\",\"updated_at\":\"2022-04-26T16:30:56.257Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eZ\"},{\"key\":\"aa41ac55a17c23e2237ea2fab28ce0741ccc7ab7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1559\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/SnQ/ksm/bhus4tZDNKeoijBs/style_thumbnail_1.png?Expires=1655683200&Signature=bB7d0leN8k2JRcKnea4xaW0U-iVmw0sOpwoAh4nvR9o5SGImbCNDb6XEl6b7~eW4XbnlWTo1XU7-~FR6vhsXnRn~K2nNOpPBEDs0TC5vzBydtGmqkyzKefZXNVxCOwy-XSXom5N2c9KgqKdx3cyrdTNP7kKM6h7xpw7W0EF1KIJMHVR3o1ky0d5c5w2AcyQaNZVnG-d4rSt8q8ef1tXAhx0aiY5vhPPNID1UUzD09bUK99VNIdLi3bpRJGvA40MS1NIHG5vuFKMc7-WHmqgVVStGByASB2i3B9KV7CPkrHzn9-ITlaDJfqGZ6b7xf81zHfeXiOK-mpNUayUZlR1ldA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Text Fill\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.312Z\",\"updated_at\":\"2022-04-26T16:28:37.042Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eO\"},{\"key\":\"238a529f9dd309311f9ad8c1477cc38b3d5a33a6\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1839\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/H1Q/pSB/lBCyzseFdYN3nFjG/style_thumbnail_0.png?Expires=1655683200&Signature=T42qNWHwAXoiMVyZG49X1nIAjstllhPwvU6qGqtye3VbkGsvceliydKQTPhJCGA0dHVEQ~uwDrap9BJXKkqxsiRY20E8TYlcGVF2SNiFV-MoLIOdCH~wBZDWZ5dEhIKwKZ8cNT40vCsULvTJ7jQpw6cBSKlzyfWZSvHX~kiwsomGsZMUzzKhoERqXKL2Ks2oFnNFDLwpxSooykV2s88ZkaZ07eiSuYY18pFEFBQKc8IgnbTH~63KUjojzrtUAll-n40eivd~RgHSBD6Vxg-jl8fFHW4aF8Erl503uxG2KHai27KYa1tKs7LuY4FHX09QZevKbSDxuiTAsefjjF8h9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Normal\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.497Z\",\"updated_at\":\"2022-04-26T15:22:01.895Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"~0\"},{\"key\":\"dc402c03ad1e60da766ba4fcf5a13ea0c2bcbe60\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"354:1610\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/gLN/BEi/nbt3MflELGy0bAxI/style_thumbnail_1.png?Expires=1655683200&Signature=L0vK7Z2k5b6E92ICLgtOML8vykvaE6dIbIDSHgYFzOgjDX35qKqfpsdGjfhOWqtqyADkAZxk2yGo5gX3mgrZNYR6ryazicYKEwyQBs-wMWEYAstO9n3lQT-Ph5vHMjhReJ89wTw8~eik65oou~M9S0VubB-Vge1EMh328WUr5UBuVjfFaIpww-BkJsrw7gI6U~RmIktAEDYDQEZFvioHYMpdlTtTg3LZI9m3LeW7lkVGlCmr0BAlLskUmP04HcXtP6sOTYHSDe6JcuTw51N~f7ehOgbA3s1Mh~OhrLl4L93wMaCrt2BftnFdMAjWpXaL~cpiu2P7e2bVsyk2DUVfeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Anomaly\",\"description\":\"\",\"created_at\":\"2022-04-19T13:56:42.247Z\",\"updated_at\":\"2022-04-19T13:56:42.247Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"`O\"},{\"key\":\"b2d74f583bf2b4d79faf4f598c1a03ea4dc00630\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"354:1604\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/baB/oSF/K8D1Fn5VDVj1Z9le/style_thumbnail_0.png?Expires=1655683200&Signature=S26VovQqKHaAHyDW1Y9WBDN0uehTcPcPYM53eqqxdb6PyjOo~QHrByJ-eh4PQYbV7ZwQihnIIt9rwz9UbUHyvQR4kPAdudNkVzJavNUfxDtv0L2HtyxYb9z1Ojsi8WlJsgRSohnk7YF9-coSa7sXSgQw~fsKJl70smqGQ~~pvOSyjY1JpsIa--hq3jTRz7gvtBBs6CAqHWyaZ3Imljcu-me1JMueu75ZNIDH34KQ4pwlMPhyW4fkJXGQx4TeeiJjfhc1nNDUuCBuHISwC5KJiZovqEFbzcBRvWzClaa6O7L4RRK-ea5OzZnqqDmr~Ip8XVWgHy1MxBm-t5NebfxoRg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Anomaly Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-04-19T13:56:42.239Z\",\"updated_at\":\"2022-04-19T13:56:42.239Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"QO\"},{\"key\":\"f7300ef0ffe874fe81c12b1e3a50d4f6a247b2b3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1314\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QPq/3hn/YXratGeGb3H6NJxm/style_thumbnail_32.png?Expires=1655683200&Signature=NqqhOtBrJSFLXNXTwZX7Ye7fMj9-ezMRnxZ-Dr4N-LptAAM-6wF66yhWx3WYnwSWJVEDXRdRenXrsnTaXKa30vbIrW2A85Qb1hM~-8bvHEGnuK~GlCp32khkpT8CAV6cXHdS66U1shkHFdLZxClwGvfDoEouF89uZZpax6MZM56x21wi0cklRgPeh1gtFAmhsPps3nLSt02fVwuRCENgOLTOShCd3RRSjTZYjmbXSqTVbZEudcL3zEBBIminKgAyw149mPvtL848RiQr4~0-H~hdyfRgvMw1POPuxlpv9jxwwJIYqyFceMdaWGkTRo57qKV-mE0ixuwiMXEbfeU2Dw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.639Z\",\"updated_at\":\"2022-04-07T16:01:47.374Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}\"},{\"key\":\"f498b75092721682b9f98527f234fa8a5bc0ce22\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1422\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2P2/Uqw/pIVO1gwtRGPlPdvJ/style_thumbnail_16.png?Expires=1655683200&Signature=TGsrW6gMd8ukzCUleAwoGexRn~aGOznrO3PaBi4vqKn~wGLKrUoLDe6sY~C9rrS~MmvfbJ17bC4Rzbo~lPd7j4oaOYkmFqjB5oEKCCjRBkGY4ZCJXdH98I9DdSZMjP~eM4PoAqz2JVSIdBDgpOWcXcDMdP6QOigS6UAcu7g6seHh~MMRjxBcsaQfGe1LR~NP54ghEhqTWeCpWwrv0FabarCRwfvpviOR-OofWGUiGmWn~Wf-kMK05ZEdwlF22sx88f4hWi3sNXKmCH7VhjQ7VZ27YylzTTrBcvJYvCuoa3Hppioiv3x-r5is8qDLs4Wi8XpVYiVS-o3xRqobyZfq0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.600Z\",\"updated_at\":\"2022-04-07T16:01:47.365Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}r\"},{\"key\":\"ec1a34259a53ade310a8c6962911d0f3a10ef792\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/gz1/IiG/DFlUgCyqilU0oEDQ/style_thumbnail_15.png?Expires=1655683200&Signature=Pkf~RFdMFyWpxEf2yK~L~9qfI1EAEqgCBpteZn0iVKJN1GMvQtKad26pJ6qZy1~l2cHEmsfRBljjX6icFDuWLNV4tp1HIPL9O6iFbYl22ysEGP3UR0yf98urxDcj8Y9eBdn4hDhT62DrQSVa0Pcoh97p3UGqlP2AyYDriMVXFBOexwkuZDMVuw16c18W8V6oUc4r1NOcaA8Bkl7XlGS~XXQ9FpHuQZ8CsjIDIJVSsapxyX5nUyU4jxqZV2Q4pG5A8afOZVWbANv5C5TCjKhd-qRZi8P3nKWGxSF2bSGCd~XtV0IDGgr9u6bUe0YbEuGPs8Mt~gZCBQXbNW87ECNuCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Text On Destructive\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.732Z\",\"updated_at\":\"2022-04-07T16:01:47.357Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}O\"},{\"key\":\"e80e26efbd2ea6c4d4311398f73923881d71d9f9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1418\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CoC/JC4/bdI6UI0dniPuJfTq/style_thumbnail_18.png?Expires=1655683200&Signature=DfJwEg140L5mF0s01QVjymtEon~n5e6Y7u6el8EMb7PL-ukfnlI3fcIHqOFKppsOOyggSUeKB7hzOWu7BoRlPtN~QAZKclIcYZk8hBweFBO0uQNAoo9Ojs0ziNCZ1~JdKAejjGsIzZ9lODNKFyBUHe2BDaOXiNWiP9z0nanROjTd-BPMIEmPPEPv23NJt9BC37KnGZZ-h7I6STKMknQUCxfkJLWh4WGfSes-YjQioUwsOByOgCJcEGK2gbdyI6pyTW351pIRECdxb44JheUr5rVoLngv4xf1nGqT5sKYwjZ1MgKCTui75ypPzWhb-7K84UChswc7f4XKfN7LsX5JiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.569Z\",\"updated_at\":\"2022-04-07T16:01:47.349Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}|\"},{\"key\":\"e4244f3710fb948e121c39234b1e6e2b4c166ce0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/h0J/xwr/gwtN0NYd02nzJ1tl/style_thumbnail_42.png?Expires=1655683200&Signature=HMgQdaHC7KYpwSxD56a9FD-~0i~s2DayoYBPom12lqguts~hdfmhXjQGud8JmJxeKNGS5oaHIDTe2Lm~3op8BppndlkZRBItaHxHFUxURzdbFRh1thISHsftZHQ0Zhe1zF3XG6p7E4-m2fy58gywwHY9wo07gAR~V0M4VKrYMHbhrQvjVYc0kFT4rUDxr5TnKbNMfu~biWVoxaHhRcAWXCm25saWo4rZdS8lySV6BGkCH85xnnPDAgM9jNXM5rkvFei2ATZJ~o6UD05sccm4IjFYumsBXfP0dKAh6MmbDvFu32ZQq-pjmUq2ESnBVpljMlIP3YN-3skfRf0T69GLKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.627Z\",\"updated_at\":\"2022-04-07T16:01:47.333Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}|\"},{\"key\":\"e20cdbf16a69775c38fc7436118ad08f05ae9ac1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1426\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3fS/YTd/eoJkSWIPBQSe5cQK/style_thumbnail_0.png?Expires=1655683200&Signature=C49Dwgf10tnotJYRVuhAYAemeS76rv1TBcTzaB3g~eM~KM1GTaP2f2J7RUxqYGuKBQKwmSRg2wSBHdMEu1MRn-XRQqHcaqda8cV9HtnfEmKB30ig6fcmVnTrKhHtPpa-E-d1ocshcIEuvngaSDP0fTlY3GtsxfbyD5wXatOh7sI7Yj9~vs~wN4VBy8iF9~KQerOger-M9FunaG-CuB3UkGuynyzFTeZPtvn3McREhbcENTtHU7uviFplq5Mbk9nr-l6FrcdPHoooJndN-zdEXM8xdR5QK0oqhcDifNnyRId3xDMpE90AFEFGCHPwJ45-~Z~0~gt2~6MAfCXJNOXNFg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.528Z\",\"updated_at\":\"2022-04-07T16:01:47.326Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}{\"},{\"key\":\"ddfa8623c96684cbee6ec0e1ce1435d9253744fa\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1409\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kxZ/2Yd/TD19w0dbukmaXyne/style_thumbnail_34.png?Expires=1655683200&Signature=KtYyOZcqHtrsYrr2KcB~O1Frl90pwi49xls1MNpUNR5v5znhMevp7vo3tMFXIS3Yg~SCnyubKxjp8xSiDcW7cLQivIVKuiq8yPAvbdazNbUqLZOLrZUPfm0CZuzT2m1~Z~waJtdL0uLDsQ87FcGZWiICn78ShotlLjWdubLEaJ0lLwHv3xoDIz54EK1-Igj-WXITF0JRbJxBZqskcNBIaMwDpLKkbaKVNCCwmsol7ujyo5HhKQtYx-eB3m4pCO26ELkHoysWj8ydrtorzy4Utfv8RAJiEO0OpeeaZOQnFGDJzlFvmGtDXx3nshJnQE2bKrowoNJsuXUz-i4RTu2taQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.752Z\",\"updated_at\":\"2022-04-07T16:01:47.317Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}f\"},{\"key\":\"da68c86178d531db12a16ac64163bdb3d1a8ae65\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rBK/my1/IxfltI4tuJTgvaZb/style_thumbnail_38.png?Expires=1655683200&Signature=OhKQHcNix9wKcSFKqLavl2zOX7o07ZL83bJ-ltfXOwnBC~~dVsFX8WHdzb8f35m1kqxuHqRppdJmFlTcY9Y62VfzktXzprIa6nPkf~69iC6qOj39RPK9YfQCnJA3-aW21XxH1PYzX3~sw90DipOhZr9OFL1hGQWB4ZPDsqkGXiwcSv5pVGVbwtObirOI1kXhWshwhEll7wNNdau10F3967T-vfGEa~4rga7vXqP1cOkdCAO0jsYD2hdl1r20O3uOwNtdIWhbO4JVtanXQZDgZLOxAFmyimcOcMpPtvwanquJnIT1pxzCWVNDhgUYgSMiU9vd60NXxxNsmooxQxoh5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.762Z\",\"updated_at\":\"2022-04-07T16:01:47.309Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}x\"},{\"key\":\"d664cda1b0c838d129f3bcec3d90882d8fd30f18\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yHl/u4F/WKw13VmxTxVOlRFD/style_thumbnail_20.png?Expires=1655683200&Signature=JfDYkd4Ml74gjxHNeE3KYSdPYJI3hpYnGsDjYffKbzn6ph~-XSh~3JVgNTfOTd1TiEvha1nXN3Y4tjT9gcDL6PBibK3VgZzVR6qW3BEJ5qZjqsRI5HtSZ35hp8mwyDcIpH88iTJxepBWKj4op70qlU1WL255NMQNueOa~whFwukOIv8wgKHOeQKYHiilPQB0JWtShIIt21zkbDkmxAYSLOOi2-aF1oI63NPpUkGY7OCSShRalVBciQ4BfYxYO2yIaRkF9GMezUaOvePktgCH2Fa0AHu-2xOsoTdkxmdYTvdsw7br7qowk2DZYHSvJOV06PUA0dXXQKJkFl2SHf70nA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.701Z\",\"updated_at\":\"2022-04-07T16:01:47.301Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}x\"},{\"key\":\"aec0b85cdc132faed547e2be013ab70ed55d397c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1322\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ttg/v1E/ypOIbVcG3P5egQav/style_thumbnail_57.png?Expires=1655683200&Signature=P2LYmpRCoeVCyh2QFs57DoMN1ctiXgw~CpKbmjdMKTGcppWO1qOc4SOqxhlcHJO4i318q-HYh~iJi3cO24RYRiCSrLxNNgLnEXpMJFBfh7urkW14TnljRzehqf-zuus2S~GtKOBpqd4nsCdaAfrkrFuyxyJa6Z3IfXCXd71cGKn2wI26F8EZOGrMWfH5LSKXqNsnA9A6m5gtgsocvFl-NZrLZAnDCxT4Xo7jnfcuqtmEV0~NmRMsntFIYLwwpeIlyg5kWflT7rCvAfkczD61Gs7K0kRuA26WXaj27mORXqXVvPMw7dBBv1JWjBpgUoUSZCSNTzRb9mJ0N6cK3OmJOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.097Z\",\"updated_at\":\"2022-04-07T16:01:47.243Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}|\"},{\"key\":\"ac28d9ac5bc16703ac4fd16e7da5bf7608dbd522\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1417\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hFf/7YX/XixJgYIyUxMbNJwP/style_thumbnail_19.png?Expires=1655683200&Signature=gbg0IOvoHIflrg1n1BKoeWHGMwEhJ-j-iGHw4Q5eFB965F7CzPRRbSW3YHPOldOxt7-jb2KBYL~257iyZaKCE-Jc1Xw-WPBKBmbRNx1yE0dnsMc7ycZ0sIAMsntZc~TMErwVAy~uHdKaVsXrTnhGBqIPyYAr0sadrf-kQOHg9j7S-tZ204wRgr0qkNHscxv8WPUXwKKs6B3plue1hNNH8h~UumqRYIh7I4NKnvXCBSwY4y6AQH7Q2PK3M-vF7DsnhTzWG3n7Y5hUhTQbTacbI79w6cqbXOx128T~drWecYacr2-3TIy-GelyDlAdwOl7U6ZwIcwN-k845yzkr8vDnw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.579Z\",\"updated_at\":\"2022-04-07T16:01:47.235Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}{\"},{\"key\":\"aaffe5ed4e0b2083311df366699cc63cdea69974\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1313\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QMi/7So/7GaRykvXwdpGm5YZ/style_thumbnail_33.png?Expires=1655683200&Signature=KMeD-4DHrDRIKCb3fbQYz-D2~8t5SZd7fWNedoowX9PL8n1tQPP~VEkRAWUw~pt0hSbcwuO9D~9OyZ32VlQcWoAqIhbT9q~obSGIgBeoSvMpUyWMXrmsy5Dv1AEJt1kVi1WwTp1lt0jt4lRn9BR0ZXUwOZB~dtQfZPZvlBlYu4Ey6MqTYqxac4AupodyHB31QNV74X1-v5t4F~ZndOsdR64VkfNogVYcdeNJJJqROLUjC-nLZfYLXu14UjrfZ9w4DSi41DnKxosbAGizkvFUne~hOcbo4sUETqAHcx0RNkoyAXZvl3z5fCH-WGaRKppaq08Dz0-8qVxisj8FYxbTMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.548Z\",\"updated_at\":\"2022-04-07T16:01:47.229Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN|\"},{\"key\":\"a2ada56137d9cc4b529a0cf3f3386cf0ed8ecb94\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1311\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bVB/m2H/8nr8IhTuUzLNe5Rz/style_thumbnail_39.png?Expires=1655683200&Signature=GVBVV4xOPUwJ7vE226SYnhoFKFvWAHWJwp-28W9Lcb~Reuq6Q4wujkmEZexuaqt898yQiVdkDlJaO3zJHbZi4KuIb0t3rXSVAKhA~j0gL8DXEukEMiYe2m4Xg7bb2iVV6prUBLaPNErEw0LuKzcr3H5NMu6ITEX7a9JEDWbxiSNmtJBNSWgJoUETEyMfXwo-3JzyqqAIjAu18uYF-zj5Z3Cj1JpMob7g2gjPkvqrw5J7JNp9zIYJOXawoB4JPGmXpRCAoBB~A6tLQ5idXa47qCvj6ZPmkBq~nVgVLQPiIBnUKprj4LaMn4Uk3G4LLz0TIv1o4I0wdY6FCi9fqk1~6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.787Z\",\"updated_at\":\"2022-04-07T16:01:47.217Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNx\"},{\"key\":\"99df447c6e9a955d690ec601c438370f12fc7dc5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1321\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TXr/3Tq/OQ6KxqmePqB7MUgs/style_thumbnail_44.png?Expires=1655683200&Signature=ZeyMs28MnKsOBhbr2ltTmGIz1mdWx~NEJY95OuF2ERGM81SnTcEVSx8Rxc3dNVqKiyN-GzojcnbKBEodv2UJGbA07uSfLemTczwVuWll4JfWp9RAHITJTtBbqVa1fUM-Bbo9Ie38Hu3stMDQW-P-~8OHVOH63atMp95zzv3w5cLD2GtZKe~P5OWsJtsq8Sbw98bhYzX3M4FUsg1JYIWlOS~0X5jCoUUtCSDxR-ek9UC0BdZXg-0JWhQKYhOLad5C4IPb3SY4Fw7cH-bwi5LSDkQzIvxN8jwMD0NtpFKMtOe2E68ThbgK7Glk1~YR6mI5TpFi4idSfakjVRmd49F6-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.812Z\",\"updated_at\":\"2022-04-07T16:01:47.205Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}{\"},{\"key\":\"91724b824f1a9b8848e94ea4b6f246b1550728ac\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1644\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oEy/FGw/juQLcEJSprkyFaEa/style_thumbnail_1.png?Expires=1655683200&Signature=bToN6m0zaeKdGJQjb7j6p6MsgMe-VtAoe3LHFVRWddnXS0xNSxjyFFq-AfpixP9ojPdpcGtPLN7ERzfagL-~KW6DEQ~YRFIk-XvAomsOEIr6BkND3SxoVMGoJVSlSBwApZG9csgQIi1~~sa9GxX3JkhlnWdyiQz9064U6X0lBxuP2hVvkX-WcTWtDEPjx39U9OM8AtTEfh1e5hz54kdOl4jw6uzrwZOwFnhiWUILclTMNeUEUWzfOopqCTdzFYlU1CMg-oKIHwcCAusp3YWiuApnNbSGx50ahn6kY9zZrma-Ei2TxsNyuqL~2oAtDgA22ROpDj3WgyQl4CvPwaWlpg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.703Z\",\"updated_at\":\"2022-04-07T16:01:47.198Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}f\"},{\"key\":\"8ea704444e906ba1437a91bd36dbd2ed55324c8a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/XzT/RhB/BGVL3dL1Rq1HRasc/style_thumbnail_23.png?Expires=1655683200&Signature=aXxiMn9aPYPBwi~kMnjLEekyBpT5Hx2ymRAGb2J34cmQRB~wokicslENtUWSH85jOCJEoDqoL78G1Ph7KMMaDLUcHkFe8RuednklfrpUeQGAB7RJmX7DrhIxJ~d9KLD11AFpBl7yMM2OI3JaN0nxQ1vPSapbOtxh2vYBPvD1-eq2W66sCsyv87bsD9Ncgan57ob3eVe70VBL4Dd-KyZENKqCn-QVJRMPx7hR26H6Q5QYHmOyPO40f9hCHiiK6B0abz9d7tJK7X5h-gvy6i7robp5GFwNTwdcUYLBRJ2GOWoxXCOGjVYSgbyuqQEc~bZJfUWuCa-wibfmHP4MmOuj5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.654Z\",\"updated_at\":\"2022-04-07T16:01:47.192Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}\"},{\"key\":\"85f88070f65fb4c1d19e0522427b41bcc26ed15e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1324\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zoP/kuQ/22XmaHbSpeerdn8Y/style_thumbnail_56.png?Expires=1655683200&Signature=OOq~efQLXS0DVsRNNRpOm2rrd3CEVoB2sZhn8dJ9Dmz5Wd~7EC9AvkUw5wOCHLWnYaxYeF-obpw8WFPkVDN4IrUbHF54tS8NF~dZMsFLOzRZAaRLZWdMTbQLQeIeOR1ObCxcUBE1dDCxG~S2d0clieF4jYLdS9UlIGMYt0T-i6LhaFrkK2fl0LtPMRrOAIPzgoKeznWnaWrlxmVKCIp9CU7NwyECK7IoZy-ysgQR4hAGKoSJzn9MtwfYUuFxMntJL6-8ryEpZgGfJU3aICuEulmQMU9RJ09~p1pt3jEsWIJg7DAmdAR1oa-467mSH2xeYwAgCoi8nkZA-3WZIYP23Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Text On Secondary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.092Z\",\"updated_at\":\"2022-04-07T16:01:47.186Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}O\"},{\"key\":\"84258cd72dab13611314cc3f63a8082ea687211d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"45:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/OoY/2Kl/wspkbKrAtVEDgErU/style_thumbnail_2.png?Expires=1655683200&Signature=g0Xy8G6NEVxDkLkCNY4SMOw045yhsyGkNPDRmrn76n9YkLoM-Ho4CHfODqyVtfjxikdBmrq0V1O8WsjngDOaCtoFCoBXKsdnm5bapAcwNV36amKyfRL714vJYno8NaOEx~6hq8SFtIwK4D34qNW4igqCwO~uzWJ2GeUo-uyJKNPfwLC39dDZABkoZaoDO4E1s1NiozxJF6JNLyCvS~DaQhjY0CdI6ZEEL17yJ4nHBBb1lCx7g7iifQoomiIZCfsbBcT6qSyz8CVjuf6FvRSX3GCErMFgIVuRwlP3pfPbArJzGSyhsLLAEHpac5YkYogikocvQ-5ZngMubFsZ4z2IJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Floating\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.613Z\",\"updated_at\":\"2022-04-07T16:01:47.180Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e4\"},{\"key\":\"74c183c86fa424dc940799b3cdacc6824931caa0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1318\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/FAk/Ojp/cy7gMAytyKy3sDgJ/style_thumbnail_26.png?Expires=1655683200&Signature=BcL4IBKjATCchRPL0Xx4OhAhEiNTMZ4JfF~Wm6KGezUznAY33Rxz86UtbXiQJLw1xOeYYL~YaqJVio0qD48BG7GUlnhkSLiENcFDFRh4HYSFYZDHB9snYH04GzCXatsWy3cbBDdzAB1NSQvVSmECRKY4xVjX0B3CJd0Iovttnari-wRzeGwoF7q4CFqzWsQBY6znQMgBCIr9UVvVPsIdRGMfWTQx2Dc7rEs~uEYmKcf~fboGY7c1Uix3U0mOVxO-aUiT4BxQR4Ka~n71kDcDf8R4E5Y1eo0fx7G43vHIUEoo6zjbv9D5a44ceSJX44VWHg5vWrKD~MuC8y4h15HRhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.691Z\",\"updated_at\":\"2022-04-07T16:01:47.173Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}x\"},{\"key\":\"7490d3069bce67d2ade872cc4f73da11247c8042\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"30:1310\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/GXc/puO/EyKBC692UWFA8tyE/style_thumbnail_47.png?Expires=1655683200&Signature=XauYnt1Ia4oH~jLjhu4KGdv92tfvaj9lrpD1sSjQxNYhsxazE1kakTBL4obQ4iEmVdMi7YV60ptQJIgXwVMYLBr2xOtPDPBQFgK6~NxoG3Guo3jGYJyhXaKD0WMzh~y-O3fqV9RR-l7002pDAIE86ZNaxfO6DkqyWBcfUrXSZ1tfNQW0L-ahHb33v~5JdGXo50yQOzrARgjylpvAPSBXK9SkimLfSrwjRLh8v1M5z~HgNoXM7ocNil3FI2JWZaMWF9pHPt-YMt5W3J3ukuUfrtvfGq-~RMB4V~Zex9cQe19h~mxdY~tWaSPEUK2GW6lPaRyvp6h6zT-ChzF2Z0jwxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.953Z\",\"updated_at\":\"2022-04-07T16:01:47.167Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNr\"},{\"key\":\"730f76dc189f00e5c902e0e464c31726c8255811\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2377\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fTQ/Wnn/51aKviyzsG6t0q9J/style_thumbnail_54.png?Expires=1655683200&Signature=V6o8sEGsL085z6EaKpTLQiqhvCsp-XxsCJyQ4rEjCDxWjVqquE4X4bdEzp~dkY6EMm2QKDxI-K0Mq9TNY~G8tYUf44tJUksKjKZLKa07t3UTPmlU0~pR7vYBE3HTqt89zPVuDegoIn3tMKUJK-j831D03QkccGAcvZb6wGHusGX1j1UEv0DcRW3udhicbDx9o73UOKRiiau4XLDDYr-eVLf5y6L-NfbmIOF6EvK~rwkwqsZUemguWrCVbQQRcHDhJJ-UhSc8~80u05XIC8tm9LWF-b5LXspt3qn-IipXer2KFcuyEnD2gnU92U7zpoYMCF8tDKpjocJ74mvx9pWvDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Main\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.067Z\",\"updated_at\":\"2022-04-07T16:01:47.161Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e+\"},{\"key\":\"6f9fbbc37db9880ca87d31a742665e62f2bf183f\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BQ5/jTF/oOyok7QsqBFdvqZx/style_thumbnail_12.png?Expires=1655683200&Signature=d1BvW1fnkSOwvraGNQyh5HlDfiYvx-vJvS9KQkfhz49Wd3eMGdI7LDwN3d4~idZUcNJVJ9TzBu3GsfQp4K3ze7YjrmQFkiJwRPizHU6cFGuAV8ZJ2ngRhGi9IPZQocw4YLF0tShHF3uY-jKNucxVfoERcj-6zk6Ve5NjCZK6mVAgFxN7uLC~Szdhr7gqlIsY4v1h1YfWPUorzJot3h3ff~UcKU0h9PVqlkjMmvp63Fql3M1Rw4WD7Ctg8DpTqLffw~3aeFKu1vLe9x~G-OeTMHe77jenmA1hM1viAtdr6qnbB7ostGYMK3tFvgG0IJLekpP6PYwLIWM70RHokEekJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.564Z\",\"updated_at\":\"2022-04-07T16:01:47.154Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}\"},{\"key\":\"63d4adfde6619ffd2b15097e28599ba8b1bd9be8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jlb/DnP/SqId8RKQwbsHkPST/style_thumbnail_22.png?Expires=1655683200&Signature=fRFhC6diSMA5sZQh6gsfG3UMYEC0r5ElR2WSnxbk1137NqkBwsI-SItFDeqNbB~xy73RoN2JVY2iG7KsbUVdss4QZlb6RO4d1sqb394R6cJhD6tRFroUxyC1KQnmHAbAZbQssCWthL~LkwG2NmjPC3rrNU2AvK1z7dxpbUShDNpA8MNT8fpI5levP7wbFlU3pX5oNgkDJsYsuurAzsC0~zyR-9-JewOd2~1MSuOkqQLkXD92upj5K7bNiivqqPpaRqX2-fIwjJjUB9lmNMjQ2CzVG2scH3MT7p-Az7l59gRZBzlHCKmpt~qIHy0Vz~NP1doYRM3wKfF~Apknvrkxqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.661Z\",\"updated_at\":\"2022-04-07T16:01:47.142Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}|\"},{\"key\":\"63305ca5cb6c2e5607796133fd649e07e0a68d46\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1411\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J8l/xaD/PS2VUZdctvcXB3fW/style_thumbnail_21.png?Expires=1655683200&Signature=bgHkodajX6qGkFPAgDAlCSYgvwoFM~7OHFC7DymvhQEjIjHa0JlVCul7pIs18CUUiZ1KOAUCzqzzXaUm8mA-jutPCHmxKsZT7ser2KQCmTWG~SgD7vHshRYJ7Q5Lz2kypAMRuAMgG6x734cqWg1Pd-2kzmz3q4WDNrynwpSo2TkyGq9qdepCbDbl53JZ0NmFNi7b3~Gp5918t4-t9GplWeiWFSVYDkcCQwEUIcuKa9LpHrGMPOhet8GCPP-k~WCVv-Mksest~S2NTUxRpGLDIc2oVN0STLRL6qRq46UQ1OS91hNnNJ0wniiYboW0NKNocGqewMY~sHf-12Za19s1Yw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.646Z\",\"updated_at\":\"2022-04-07T16:01:47.136Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}x\"},{\"key\":\"5ab92f7156e1969f3369d038debd5455193cccb5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1645\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0QX/soA/1LOvyPETIa2MBeQx/style_thumbnail_13.png?Expires=1655683200&Signature=TDpKT4dNG0PF28niLx0CrZY6pO~o~tOT2PDl-NLl3gVG0GE1JAcm~Ngc4WFlQqd~GC2WwwpLhrLyUiFJWjz5iz7yhPHX6GZmClbC2juxrI6nx0cW2oVEx4Zlceqd8YSbeM~IbeJBI6YBJjOx6CfIaGH8SmFWEWFPH1rPXEX8GJ52240MTgqNaDHLJ0uNVmYoJhUY4pdZ0x~pjNCvf2QIW~SQ0MQ67teFIx9al9vCndpd16Cm2Da87Skvl7UP70USr5iCKgk-2cjuEFLpeTD6efKelnYRaPjvsdHO4r1f0tqGVKrZZHHlaeAI-4XJTJe23HQG7f7LLHYIor~AJ4jZ1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.728Z\",\"updated_at\":\"2022-04-07T16:01:47.130Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}r\"},{\"key\":\"56c418abffcdc98abb3ef987a6b03fc18a60633a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"234:1561\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tBK/Xg2/jDUNCDiR2Y6jWpOq/style_thumbnail_5.png?Expires=1655683200&Signature=CCl6~NeGIOSJaWfBUa8mfnWrFuTQ2VPDGQJuME84-oPmzeyque5vNfAWWYeXK8a4v-i-2lv4y15r5rytoNht6p1RKxdfp7v9IcfsP5p078w19u080ml3UaQwcB00WRi-v-JsGJph-sE~DEe1UcxACv2DjQhPhEuYMqUAdZtyemLFtYmfBPGxMSHUxxMoV0CO-TK9RMssFTilFc4INQIgD~emD0yoQOmFuOIGRMQuPtEMbYm4qHoci8F~OBSpgPaGw90F6ZcqJ~Ns8NLlc7QzeER4q1xhUt7eSK~jYIP94j092na2Hdp2E8zoI0eej8mzdlU3kXf4LfSkm0mWjWw2Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Text Nav\",\"description\":\"\",\"created_at\":\"2022-03-14T14:41:39.337Z\",\"updated_at\":\"2022-04-07T16:01:47.123Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e6\"},{\"key\":\"53a4716741658575994c6cf6fd1fc554d45ff784\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1306\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tUQ/oLj/hVvq0HxGtxcn7Ag1/style_thumbnail_37.png?Expires=1655683200&Signature=eoyoJTQ3HUUe3W6nOCp8eA1qkypplpTODL16acyNYHGVhnfwK63D5q33fV3XQRdkcc4CcrwXH3mm7u7st-yn1-H5E6BUg52uLLxCSa6UQHOw7vsOQnRMn25qbAB7kvVfU7TKpNtuJ6yKxPr0XPrl7d-sNutFeZJxtKnbaYv-pDMd~BS8kfYo8I4Wg7Fn7sDv3oMZUFMFTIzN58sQrRpmtSbDzVdwi73UUf6zcvLfw9-WeU89oR5HKBfVLd3qw5NeI6E5EEj4TZTvQaYbQm5jBHwU6U3pFo5ofz0DiY1JriloX-nqarzOTza8n6W1Bup~~RD-jNEIyGQQeKX-YH~IjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.757Z\",\"updated_at\":\"2022-04-07T16:01:47.117Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eM\"},{\"key\":\"52c101369cef572c6908975f95e417a493bf258e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zql/jnA/nYT3rxjFPj5VezUC/style_thumbnail_52.png?Expires=1655683200&Signature=HRIu~1S7L0oML2i-fBS4m8xBsnzHRbBW-dC3HobjY5Q4IK1u~fa8reYmiAsGH4KEcSXJB2E~D6DhrzHL5u0ZiyFZWTLpC6QilLtQk09-xSFRDXnft5qU3uIh97G8Q1s66vKwN03vpbCBek2B2Q11q1NwiJjithX~~7lFtJeUN4~biJc20A0wB~icHKnR~Wll0qKz3XZL1WljyWMjvKdzmc0zWzZQbD4p-6uDWTWzQ7FfIIza-mXXyMdH7dB2fD2MtxdaO82LnZQUO87LFqzqgt3j10qDkURDaZZ6rumMH3gels4yOiq5-TMAe9JrX4RSlaYq8SkIrkkwsDrw20B5Mw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Text On Plain\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.041Z\",\"updated_at\":\"2022-04-07T16:01:47.111Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}O\"},{\"key\":\"52b68da39f0ffc8e2718c89e7bb0637ea29ce3b9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1316\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vGU/caK/brZ2Rljv29Ks4sDw/style_thumbnail_30.png?Expires=1655683200&Signature=Umya96sNQhCdy4NFEs2getw83qtttEk7Nedhk0bOYdwt4807xyCtIHbKLPDSbJUg~mnFskLzCJnblbF1p4JGpbaeYjV6-taY77TrwylE1EawMxGUXX5KRK30~-FvwXjvb~dZYUg74zS~CK8Rz4I50z4qPSqa85gSpsglWraUZX~b~q4wYE2iYM-7lhcPeU0jSY4q5VG2EppLG2lAzeOqu~tPKNfq9bWK1SBh7XViZUFkCPBvz2WzyKFPjBWFjHlXn531fx731aX1RTwmw3EfPAlZ60yHoQnlvxuHrCJaUzy9NIfmTcJnTe5L5NhD85p4lGXmNpZQ2GoTAMhBjiPz1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.727Z\",\"updated_at\":\"2022-04-07T16:01:47.105Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}f\"},{\"key\":\"4bfe27d2620e3e5cdfc02b7cc8d0db8fe86dbcf3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fhu/Ro7/SUtXhXwBJ5tdKfeG/style_thumbnail_40.png?Expires=1655683200&Signature=XO0Y5dPiR0~KHZlHMEPtBTCoL25xNzEUIwISILahVtJsdlg4bGHQI1LRa5rG9vr23Ng0IeOzg1QTHReacxx~jHwcIic1T~LnFFXGNEgguHcgTKZFpxpZhhSSZnoVc9WKFMoIYYwHAX74c-YesLVngVHExEYCJxLc6q1hU-l6yuzl0huMmTaVvqSKMzBlRnLct9YHRBKZuukSpImDQBC-mHeY9Hm7WymGgUnfhTdTCZ-e3Mfdwdn-XBhrRJf8UwKWShKL0JK~rySqlIegpfdogAuK~KYsJQf~hM-4IZo~1Up~DRJBHG6Kjsy61LXAgP5-eeqowciyB6ZuKX26uwGz5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.792Z\",\"updated_at\":\"2022-04-07T16:01:47.099Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}r\"},{\"key\":\"31ded0cbb11cdacf01e877fce472da9b8f2893c1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oE5/9o7/bwWL3Gaza5qnuyUQ/style_thumbnail_17.png?Expires=1655683200&Signature=PLO57VEfjVK-CdUuGjqKAKCIZS0kQM6gaxK~Dhb5h5GfNThY-3CgwZiDYGLTVIuRirWWnZM5jkq5gehoWSTAJ7DaYerQkyV3yCUErBynNVBuSG0ff5Or5ggCfZPE3RbRVqg7HF86f04K0MROTIkLx-3ALmFIKkxpMrKZG7bO~ZGIgQa~TEauOHDxtBxVICOqeUGeYeSmEx4u3w6f1m~e2EBo5CA5Ry4b7p0lYKEr9VrWR7~i07iuFNO~7uju1ZCWts~ubbASH9YSOCThH04iYSbv4R1O83de3dRjDxzOQPG1Oeut6SRCz7MU5qcimmtsvGksNXICHYDW8Q-eC1otDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.533Z\",\"updated_at\":\"2022-04-07T16:01:47.080Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}f\"},{\"key\":\"2baaca090ea40415c6245f7ca25cb18ce3d77bcf\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1308\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xy2/LoC/JayHr6KDNzaP5j4k/style_thumbnail_43.png?Expires=1655683200&Signature=C5at0slaf4RKUFhub~XTj0aNcb0zOV9vxSMkidJHPEHDryNJ7UUuweSc4KyCC70lXNWRYocNtDFTvicNj4Avt-sJ-4A11t47kGnTsUS76UwcP-ZqtJUKOChBq4mjGt3VpYQ5sUheokLyNJcsyhn8czxw5-5bAsLoaxSt5x6x9PIMWR6amh2q8n6BHcGRzgFME3SbnoQM7pQKOHkKQakONL7FJe0dZ23uQS4ZH8kjClIEN64e3wkSD39u84T5rrTQyilRWDJ6yaFG~TY0UhvIt4VsQql4VEc2goZDU3W-tmWMntMaKIymvacX6jCZp-szqMoU1~FhtAHR7IJgAVJwMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Text On Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.620Z\",\"updated_at\":\"2022-04-07T16:01:47.074Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNO\"},{\"key\":\"28d01019de63efed67883b4153bb1ec181874c30\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"104:1392\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KkN/uDK/bDDLGO2tAJ5mdE57/style_thumbnail_41.png?Expires=1655683200&Signature=Y5C1vc1Vsk~4EEDbY7dWLka-yXT4sczxHMU2y80dgGrrfgxkUIeJU1K63LnQFDEu7KfKxqgOKubVJjxQepPE63u3GU1ZMjslXp0wFNzFu3GBGhuMf3xE9YjE7EPcIjceKwJ~BkRdQ5zGluR2o9hseLqg1mF8V1PH7aXTEcFAxN5J3gd67L~~OyJVJTeqttucVlGfm3scHhETuQM~9XL8MlvJ61fhAy0Dp4T6rXyMOfJcFOXxXP9Q3RpcqmFgwEjB5ct1D0A6-2~c7ZQm4kFqitQVRT4si17nIKZ1emiCVCJ3tDLqPQ5uSBIHct4Lu9HLe99CNSrzCP6pu2wRRsng3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.782Z\",\"updated_at\":\"2022-04-07T16:01:47.066Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}\"},{\"key\":\"219d066514449bb129f0bc9990c624bbd01cf3c9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1Yh/IYK/fSXsPLEpTUbenH21/style_thumbnail_49.png?Expires=1655683200&Signature=HguOsDEOLqVhLVYV6MV8Bg16AJrloDN0v4KJVqlkQfVk9o0RLDzyeEtyTnjgh~mOhHcERI5wXB78xRTvdRZbZMcOb5Tmj-x3LN2aUeERWd6bqRtZGSnloZbXJ1~Br~s47ylityaq9lx8-PJf67nH8EUTi-VWDBoqaju7D1kLwuZU7rsFCqk71qAabkBMejG00g7Ssd9lkm3y5iCh0o4BWR3t73wlmcmh2ONwTZ3xkAB0lijnv723L6GxcE4XT244G-UbPpLMQ1Vxl6tatmfpfL32virzIXTIBL7LU7MOKlwSMbZxRBnfy37DvNwidfeEj7aRhAhyvFPydv3lbPgNPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Neutral\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.002Z\",\"updated_at\":\"2022-04-07T16:01:47.044Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}f\"},{\"key\":\"1a12af35e64b789afd08c4ab4c94ac089c631c57\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1506\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ra7/uUL/ud73166Ix35miY36/style_thumbnail_3.png?Expires=1655683200&Signature=XroejWhmbN8ngU5e7C09pd5gu19SG6PvbYJyKbt5oulIyDXNhnGBwi1rJvWnyTfyYH0hW0OB6A1XTn72BMl2eu9jvolUXeaFCZT79OWcEN5d~EkPobnPpnxPyChhzSBslcpyIpWgSSa3SabdoBE8FZIgRiEM50zvpaUUElyQPljyHEPzQ03ylpz~tw0zb9czMmwHcmICBplOv51oyzN8vvEErxNXo~II7J~n8BYLwBNuqVo~Y2Tb9VvNYy5PBNf2fgi0fRHfllCK-pYzWKlw00zUclvovlmv93eIf~BJaLfJt32ZAIDt3sxTrPEws8u0cZ-IwU5d6bdVlVNWOWd~CA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Handler Multi Control\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.518Z\",\"updated_at\":\"2022-04-07T16:01:47.037Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e6f\"},{\"key\":\"0b5584dab7afb79694edee18e1a0f4528c1b30f9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1415\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KC4/ZDQ/15PQloFu0A7ZQw4c/style_thumbnail_46.png?Expires=1655683200&Signature=GY0LsvVYKjgJaeCFSjcfnRtQ6SQexVOlZ8njwPfC2-IojhVdD8Isl3PiZVRQ8ZroAZvQ~aJ5jTCvoZdVhn5J8Ar1LOiX0YgN8Jo4MNKXfy~jwE3vZbmG6-KjahndeW5mGkk5wlyE3ps1Z4v8IJ0v5flQQFOXuTgPqfEBWSazhHUrPS3Gm5o2or1v9vDVtRTik0cuKucZEMdTzLB-VxvjDxshk3onEiVV8Bv-CBaaFx9ajaA-LblTn2JWUjC2wD0h9BWlXj5g-9nMdVw0W5B9Mu3t06ta78u15g97O8eb1D2xyftuM~dwsfyrHZ2WGIgBBU6s9xpA-FVgVVLyOOH~8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.948Z\",\"updated_at\":\"2022-04-07T16:01:47.031Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}r\"},{\"key\":\"0a841ca5c0a69ca8f47486ce3a557f261185d93e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1317\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/gMh/2zZ/43exbL5pqX3HCXOd/style_thumbnail_28.png?Expires=1655683200&Signature=MQ0hZCyDK0G8OyAb9u5~K2dm07R5-CNQ-vd8-TeQcazDd3Ivfp9KILvsNfR-EGyFMKDC0QCMTuesEvdIModvHU6-888pnAmuAkCICRswBS3hcpNtG0ni1ay-VgAk-CsbmsD3lk0O8CTVCdMJTtSIpGbkiIe7-cB7Qps-oavurEf~8cJQoOsCLAx2nwbLAcnXt5YI-Ngiri9XLgjW~vmaPTtFFtAt1ylAAIt5Hqqm-IHZFaQFTAYmjPuqldDI9~eDmRXAJPsVjLJxumN0hgzEGLbK8l5TTsVDy3iOLbrUqE7B~wpkCXB3mztr8KmjYumGs7nCbcXkTZ8V5fzMDaRXcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.712Z\",\"updated_at\":\"2022-04-07T16:01:47.025Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}r\"},{\"key\":\"062d81806ffb2bf35c18440471acfe837abd9fea\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2378\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aJU/fl1/72uvsZ2TGixXw4PC/style_thumbnail_53.png?Expires=1655683200&Signature=LK1CWMK325rbqazOG2I9uPiS5YGMsIRl3UCgHZmtBCLq-NxCEbJLVSFpOlMa5bqys8u5djwutQi4LoUvjDw5rzeOLLHh~iDquCfyvLFqZm83TFUScScz2rSXLcmCigdEsb-eyNTtqYvF6NxyodS5HLn7sr7v363fbu~7Tz06TBli7WcTWkgGljdMfDHO70w9p7oQTx7CLh50G4FtPrv1MBLb0spN5YftmdydwgnTStSqc0LtmstLFVxUwXNJR4Lu5shPVXaB~VroJCU8hjiGJpYe0jY7sk6pzYrNnVAux2e-GSoLiZ4Gez7QBVInfiW3R9e4bF0IC-bO6-L6RCsBwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Extended\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.060Z\",\"updated_at\":\"2022-04-07T16:01:47.019Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e1\"},{\"key\":\"053d7d93c02e4cd98c3bc3e532970c390aac7c95\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"105:1394\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4Bb/HqA/4LFBBRfSAomrffS0/style_thumbnail_14.png?Expires=1655683200&Signature=XbwBdtEsSY7hGgOlmj52kacFDn11apnW1lGJjoHPx5fF1etyZ6xNtsqJ~RXGM36NdsAP21LRKmevbLM7EhQv8lFQ~ImngkgQDVacCokYVHglcwZ5W6kbXgwV3oe3RskDa-bLsVZjm5LF-ubtm-svcuh6mUZg8e7q-QCobGt78SyuRaStUkoANqqZdvC4F~TT17iIYDC1EDCv4qzgy8fA4GtTEQCXaVU3R~75i7bqlCRnQzdgBYTKTvtFCUAjeWE3Af5MDYLN8qmrWrqeK1nsXQ1DVnVGN1nECIyhjmggQxfJrMGyzHjwdSbwhISPlQ3pSR0aeHDTVDYUMt09pdYr1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Text On Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.558Z\",\"updated_at\":\"2022-04-07T16:01:47.013Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}O\"},{\"key\":\"4ecfbd1aa04ffdf5e23f88f6d6e95ead44618f4d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1688\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EaJ/aoR/VioTSylzQ64QMgyE/style_thumbnail_55.png?Expires=1655683200&Signature=FZzKdE-SQH9dgmiaZ83eN~-nsn3eBGLd6ua2EIfgUP8NufhNtajdfNNqKT6dqPcp60-fjIZuQrkf7NC66b6jDzwIBUwx7BJp6SvEWx94LVH8hjlMO1aLesmeBPMjEV755Jg8eBmOvOXzIHpLIRyF17rNlKsU2vdXXoghNdJrEP6C2DXBaAkcw3tjb~DIIoj59V5ApskNPgTh~AyBUok8LCWFfiA0cBOahlDnLu4kcLyBpxsBe-pJsxxoOlP5XwLVCcyuf9GnzN-e9inDehaD6UwEOrtbGDoDG3SOS3dC2Moz5D3jVQYYd8vyUyg5wkB3SVry13qw1K~VYWfghMpuFQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.501Z\",\"updated_at\":\"2022-04-07T16:01:46.501Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}{O\"},{\"key\":\"6c2e41fbbfc42aa032e18087939c4e9175a3c485\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1687\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hWh/LPc/TWsI7YOXiBEdbRxK/style_thumbnail_9.png?Expires=1655683200&Signature=F5WTSLwVsDyeNPhEV6083H2UfiAaXifGPVd5I7XI1zLofuk8o~zW6nvx2~mJGd3793TPaUQvEZjmGGWQtA5Bh69AdyegWGX9pQJhN~RRJDAPkwWwt-rn~zev7HMbU4VPncdUmGfXwaSobD1AkZEi-fJd-Qc3rApPgd8VuFenE-q9jnWaFOVwzlxms-4X5sA9ck54yQ4gPkq-OUCgoDSv~GB-2I1fTBLW~VNQTzWdmJxjt2mcO4z5QNYSrlJ10vjspIlypoB5PzFph34LKa4xVRwGVSoudQvcHmcWrvwybkPcBO9R-zxSgY75~MQ326rqZd04PR8j54Bg4Mgcn-U4rQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.495Z\",\"updated_at\":\"2022-04-07T16:01:46.495Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}y\"},{\"key\":\"727df7c22192c4844dda2cd64a89f1830fb50399\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1686\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ak9/dwk/dkw1flEDH4Dnrdji/style_thumbnail_8.png?Expires=1655683200&Signature=IK9JOjeAnhDOSvBBfYzgQOKkSiKykzAXLjTR69xgEjjzf36QDIzfErV5XXxYQzl9tNOkIJrOnWBA6bMv3B5W6N7El19P0KDr4zVEtGMthfbpNJoTGJF4f0U9ho-2Woq7XY9fZMG-ll8HMjPJn1YjBA3bP~uuEvzaAJqrX~qKyea1oM8~z-kQrIvhoZkhvowy74Mvipv7guxqZKlhc9gBGXfmfZA0Hh492Hm7ubyIZt3XprTy4SipdOe4kB0myGIEWgM6gpnP0MTssL23aO~cxU4kdXBbSDAhWSzRKfrxUJkSft9bfWImTVgGw8XEIWmks25uq6Ih0iCZ2E6LlheKwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.489Z\",\"updated_at\":\"2022-04-07T16:01:46.489Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}u\"},{\"key\":\"e1bbe21fbe2e5fd2e368f4186145032ba488c8e8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1689\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/LDB/LZm/n2ihyaDQt1bdbHd1/style_thumbnail_6.png?Expires=1655683200&Signature=TTyTYtbDr9zxfHP8FNW07aMkqKCybViE8bsI5NBkEGFhjiZxA11wEfB81j3~-kuJD69pATQ4tEnbSG8D6u8x~NZRgznexcqNCIaUU6DWAHv4wE2y~31OBfXWYoQOvwywRiQpyaVwTjL~KiwKnWam0ZIj4C~aHXoWwgYcb~3n-31WfodPZJ4IsbkBWUaz5GubRIvrDVjeugelJNYM7iSAxBwE7qFvZjLOZY~ebgpCuPFD8cYbsA7MVrKPLSc3wZyF1IbB3UiXshopmUAV01rePIMkIuRhM02qdQLhDB4i~q1Z-U-sG2tch2d06ppbiG7v6sJ0OeGJBfuD~RDzvF8WkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.482Z\",\"updated_at\":\"2022-04-07T16:01:46.482Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}|O\"},{\"key\":\"f07bfcda1fb6e36e37d46c8dcd2d9b5bfe824755\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1679\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TKt/S7P/iP7XzlfvdxDyq1lf/style_thumbnail_1.png?Expires=1655683200&Signature=ELW96oYVwsytCgCzE0dw1NMjDvX-fIyeI7ZeCBjWUUWsa-vs9ibpFN4Dx6FijvaB6gGHzvepNLcYKg20Ygh-r6ANtDbysrrgbj10~pyy1ju2qOco2U5Ktw-BxR5hH39hXJ8PJZL22uGBj4guWAGKe3a02Yldky7K0wNyhQ~JSjF-X15PiScHvQM--A7JwhWH99uRHlFNBlCPUsMebkRrSFEaIMvCckib10GQC28DLNnts3Nf4Cd~VbElVfJ68U32GkmypDanx3IWvyPq7gUPITubQYLlyWvyGQGQX1hyzB2ppTI0PcCS8H4HQQ3gvO8VkfTbgla~30ezoLwIh5NR7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.776Z\",\"updated_at\":\"2022-04-04T14:03:47.506Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~1\"},{\"key\":\"c27dd6adde29e9e87f4140cf4c86f86af03bbb63\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1689\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xWB/ZgA/D4jPVLcpYkgW1Zez/style_thumbnail_0.png?Expires=1655683200&Signature=BfE4sFt7PyXQ0R6slcqTdMwZ4q6TzTVkcRj3p3zecvO1PGxryewh3x1VBqplyQbzRl4OnC9ISgbx29a4euERQ14Tolu-9JpgsVxUnHnXyVzYHLdZ4LED6qntB55PNS0hTAqQXW4AMfdXH-W63~ey5QP6x8eAas214ACkfbzky-bag1ErrFXwITFMuBWd-6rHL70HdUorwOP1P9L2RvFUcVn6Kw684K12ZK3upsKJmoXghHVirokgZ4fUCwoyAJ5uBe41Snien8f8RG89dREOBUFznb~7hZE9lrpkmI8zBumsBpFfQeHqUtCksmqXMNFl4ps3RK7o-eW4MQIk40pumA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.737Z\",\"updated_at\":\"2022-04-04T14:03:47.499Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~b\"},{\"key\":\"b1f9a9d818a2495ff614d2f1f4eb81ad5da263a3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1848\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Sy9/ce4/8JHVcaY0d0kyXqHp/style_thumbnail_12.png?Expires=1655683200&Signature=QsVT6-npeoImQw1QoXxY0NduuscYqnL2uPa1Z9kE8xUjatBQX0klZ1sW-uAKyj3nzVDAIhsCX9vExDj~zRsk5-fMmAUDFzdi2~Yx3lRgJugtPSUG961JRBLQQZ6YYTQ5~8iNiayzNGBIs4SziHa75HY7fdsJO1xMoS-htQO5N9yYrzNjlNPMUIyhQmQTABEU0-TTUh~cg87XuwLgZjU0yN5UjhsABpSTep9FBZ7o8QVK9M~ll9vizlMaSvYY9Qb1VjSlR2leHcqDEm1cnts7LT3mmUrEbmmhsK56ZpjxUT~5YmTtvu6ts791y31804BXV3UFf1uOYBZO7IBXRhicpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Numeric\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.553Z\",\"updated_at\":\"2022-04-04T13:08:11.859Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0{\"},{\"key\":\"557f2c7f63de59a7c378279e7c9654bfa43f3020\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1849\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yui/4nM/Zwm5ZHIqle2hF3cI/style_thumbnail_11.png?Expires=1655683200&Signature=ILGxnYRNA-M0GBDXq1F~GNMGzOYIg1H8dUbU7H5m1BN80LW3M1PI8VoAnOuoF6tc-U16sJQEnYhhlxzlQzO6vlsZwa9pwr2QhN5ga0GQydODpUFZUPpsjuhUGUIT4cYy-kpZLUZXROh~ygVIFF386rDIpk09kU~7ZjLt2Hz~5zZoiBNwbyFDFe8mqrhwsfRs3oT6MmjhX7jkzErYKZwQKU5A2irHoTCCZBiJ4ifBuH88~~h-TgMAhv-PAT9txO7K-qEGtsD2VErdj-PgglS~qO42~jMR-Hrq0D~F3i0ka5Fm26bLQU74zYcv73iVIcxe6ojaqJ80Ym7ugkNhQKa1Fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Operator\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.502Z\",\"updated_at\":\"2022-04-04T13:08:11.849Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~/\"},{\"key\":\"2c10c1a9c077e351576598088edbc3dad82d03b0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1846\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Bbh/iUO/cfoyn3vSQwVpEeHl/style_thumbnail_7.png?Expires=1655683200&Signature=QvhxbgdKpgTKZmDY-1wjfFbIrWXe4bf0JGudabofwZJrHQDHPxtwetDb1YlsR5ta~xq-8OJHLSvycBY7S94yF2Dz9bMcJ4U2s0D~2mAb9NSrJTyl0hlYBgwheSriq9hVV~mLE~iA4hTTkHJUK6TB46LbT5UG~4QGHnO39tSP76E~OynjHglKOrBeZ7JNWOEbmFkqab~IIO9ny3ocmgHvV~L5~hwlmirdfmHJloVmaeQqM13U6XekLSTNiuq10XEwBxqvUrBSpTSyMDjaaTjABkU126PYkCDXMx5y6ujAWxmZWW8UQQisUq~SiCgwXCTzY4OWtJzjcgLOTq4Ses1CHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/String\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.512Z\",\"updated_at\":\"2022-04-04T13:08:11.834Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0r\"},{\"key\":\"8638ae0f49622e9d8395064ea744cedcd3c078fd\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1680\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/G0j/V7O/I67cDxzAhmYbRn1M/style_thumbnail_20.png?Expires=1655683200&Signature=YkDkBst64ada1z3B8lT0H-5FUuBBRWOY3-3fWAEM11vZKkYSTWXwvcXdMQTtjjplmwG~HQj3MnQ-gPxyvBhcGbcIoaxdCSNhn65o2FUEYFeS~BE86jk4tn-19Yz5wmRfN~PVYOxNZwPoFKVbM4TRb6GHKZ4qVQT~6zKGSpUOHbmcd1WLUWvAP4YgYeQ98ybCY1Thq6dFTsc5C8MffarcjCvqOS5aBcp--2wBQ7wU9jB0vttd7LBmNQzCbjv9bVZreMWdeOnNdjua~yNUB8CGLUIONM-P6OsGHSZLb8FeTif4CoaN-kJmdPMVDX6TUNHe0JN7VEp~AeTbxT57Y4gJ9Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background High Contrast\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.801Z\",\"updated_at\":\"2022-04-04T13:08:11.801Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~3\"},{\"key\":\"51b91ad28644dabf5b31183664be52f8ee9f3220\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1682\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/er3/ByS/msNVJHhyUJ3WhCJ7/style_thumbnail_19.png?Expires=1655683200&Signature=aErEGa9hDpw38HBwZ8AqC6xLdBUzWI7aMDnd1KHZV5~vjQW~i421-gkHTXVTgw5-Ogr8wvH~O7H35L21ca01eOmqBIJ6IFzEBVbnFxyG1ncfog2-scQrCOjlvtuu7NI8S6IL6wD5Ixd-0LnGiiOgMUkFwQNrR0nVgd4Rxi0hAgEIwUIQ0d3V8onmKlTNkYq1mjgiGyVa588pI8VCs~Ee34ret2F2WWpEWnIDpP7qMMfGDGsp1NeonLe62MNjz2kBcGGcroDP9-eZOwynFkg4ZhGu7Gdb2ahQ1LvkmGb3KdmPuTuiY2IvvTdnNLTCIqwhRHPX5nqc5dlSb19wH2bKAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.797Z\",\"updated_at\":\"2022-04-04T13:08:11.797Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4O\"},{\"key\":\"6e24a91a3b1b28b7fe288096c58af415cb730760\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1681\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/N0I/HNi/uMcZs4moPXRGOcGj/style_thumbnail_18.png?Expires=1655683200&Signature=eCi-1gbrlQ90yCP2W4S6lXMXZvjWCHr4RA3-PcCZ6uf-ttadgumM8QpFzoj3SnY0rrKcssxHJTvxwrHBAOqEahwWptWAyAz7XuVg2jPTFph0siT-A65u8B76A4ZW~u1NonC3sOpL6FoQuuIvqVfHGQZ0TKxMUD4Keu72pwBXtnhFBOJIuSvVptCYEKmxb49jAwobQMZ8WYpUozCsn8V1PRNxGn3SQlRAujyidVDKdC8uuiyAqy1yLBatM4kHYAHk2eEM4Fvg3wrurGg1hjlZXJgzccOsQuyabINQ3CZHNF1jdKH~xwgkcmh6Z1poKMQP6JYAP~TcNnEzvD0eFA1LEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Regular\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.791Z\",\"updated_at\":\"2022-04-04T13:08:11.791Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4\"},{\"key\":\"99896ca3670b300fdd56bae6a342c0c51e1fe7c0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1692\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/AeW/JrH/VuBSUYZzKYasuEv6/style_thumbnail_17.png?Expires=1655683200&Signature=WXgOd5CxBS7xN7cfms4bnM~8iMyPovGOFyOlPRQOzPG3H2bfO9I802JlLEvvGJ5NEAzShEJxQW-Kkl-0FJl7XVqIFu50LM4wt3ALKPdhYH-rNLtt-Y-G33Px4PrZid6HPqk~8~j5W3f93wKgwhUkgGJWPO2E~nF3CbMbdPXwsKg7-ekQ0oIrFl-DlllNOjRjaut0BtRb3OZL1HHVvHa8TurxKo1y9lhiowZIaG8jf3wXEJB6yMtcTQY9IZJPt2CGCtSpnz0VnUDlzhvAg5aZkuAfisq7pNWRQmDpJuf4ZHjJ5c6qYQujjEJL5VgIRc0gNMl71drSnafl-7tphBw5sQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Muted\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.786Z\",\"updated_at\":\"2022-04-04T13:08:11.786Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e\"},{\"key\":\"02d03f3d47544f27d14210313bd6f2d2ec6aa7e2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1683\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/7Nv/UQy/syMXLjtuCV8trpU1/style_thumbnail_16.png?Expires=1655683200&Signature=UXza8sKTjW6dN28kp4NJDuTpd-3-X6WpSOfAoP1IrTiMdi6n9OiAQ7HcDBHfk3gzmfyX8ibnELlwGhd4FNzsLniHtQ6s8H51-~Qi3Sf5fjOr8N6mBsZ6r-CYLZYHkol7G587rz4eOH4DvVaObuYkV9YVlqoL6RyW1QAentHbUbP4x2d-ID0GuW2eW3bYKoFWTU8Ew66Itpy96F71ozY859RRLNYC8ML-xa8fBGyrTL69MTCSdIWQDD9Z5rhfQ2s-Cb-R5gxnaT8~yubJu3Oirp8YtHp0bYGKR9JDt5t3EjakwF~eFefFf5nUzCusItMfUOIZg7Yg0b0A0fNYzA9WbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.781Z\",\"updated_at\":\"2022-04-04T13:08:11.781Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4f\"},{\"key\":\"d2bffb996e1f6da0fce60f0288a7050bf2cc14f7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1688\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KhR/xvE/bpNj7D9jmi6On9GP/style_thumbnail_10.png?Expires=1655683200&Signature=VYYwd0umw5qi2YJdRYHS67jWruP6Cc-lRtNj~yI2KLiKAnIW6BYY9HUDyATrBAhVjpPhZXaGBFhPCtKzJTEHmw9hA7-HB08cCjlriCs3m1k0bB64R2tDsU4pMvEU4E54Gcxx3G7IMajR0k9wzaeqhl5Oaunps1fC3pf93ijC21zzD8Fg5MRtMon8aTRWuxXe2X6jYcspsI~zBqEhJrduLw6XYg3aWepKg0L7eGBerlKhoTtW0CtbJJ48iuPDi3CAz-ex~LVN-c9XXYuhxGAoQdKZnw-hmBXXEyj-Itmk8-NX7rjTUlLNf5NCGJnK~xVBFtNJWtUZeqdNKzFiQr9zTQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Success\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.771Z\",\"updated_at\":\"2022-04-04T13:08:11.771Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4}\"},{\"key\":\"df14d7970e239d7c63b6134cf59e578909baf8cb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1685\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vBM/P1v/7WyhLA0MIg8f55a7/style_thumbnail_6.png?Expires=1655683200&Signature=Rl6BVYvaTwQ6yK56ncN8TBTfJFB97wHrWiVZgArS5qwYwiWtYtRA0DqrOWovxxRX5u0DelFNceRisRSLXud7yefDsx1W9qonhGmgD7IUgMmpzBUDW1kVQ2-xiakvgRfng54UdE2wto91cWtsts4NXC6zKm35ksopnGJwrQ2JXEojr~sK4rwlBu-bNqlhJecddooAd1Dust1xNEQhTm-WYP8-BpZLjLMGiZN6tU7WIVVL6wt5uG~pZ-dssjcOtp1RSud0PZxlkAGPwuBP5fkRVqzlYnT565RonLmqgFkc2doULWV-VmZ7nNBx8mDxZ2mamBoumoGsZl5LgC0otsiCMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Highlight\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.766Z\",\"updated_at\":\"2022-04-04T13:08:11.766Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4x\"},{\"key\":\"084258efa5c89fc941b4b3812bf62e97e6ab4fa0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1691\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JQD/Lve/7Dq62JcPC5BUYVeK/style_thumbnail_4.png?Expires=1655683200&Signature=Ezx6bMQTdYYW1~vjiQv1~oDDQSgu-oh-v9cfYAETnekYeeJXoUvaywG6hewQhD~TTjwswpQIOXDS3crIn~lcH76cwlMWDmnYYhwFLO4-qb520jF9FLes7n9etCov84dktZNubLAkV-fsbLnKUkFo4zom-RDWgyqYlpDzCh2bbTosXg0hsOKvIvRqr8zBA6Zm11NDX2xP1C4LKhF7LZvjp-lH3Y0mjxzA3PBhC0lpu9I2Pf214Qe2eOXAebaeUf8BXc1FMHPxIru0KqwJ6~VYIhdwzGCt344hRKU-IUYF5sKfCTM0b1zAE2~cr8nBN-z8hMGi62Y0WtzP3yIoUS9j~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.756Z\",\"updated_at\":\"2022-04-04T13:08:11.756Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~d\"},{\"key\":\"daba68993a7825bce14e2c1b1d137429ce54f17d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1686\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bhr/Sav/kahMmt6GyUpOvtPS/style_thumbnail_3.png?Expires=1655683200&Signature=E~l2IBINC1zYOKD5Opta~3TM556L37WFJSVaYvOdNwB8v9KhLwJ8q47C3JH0W60Xtcf442VGkTAJN0XzH79EdFXBC1tyGqT7pnpQN9jod9CaWyXgHjk0C2MWZFku9ok3l~AwI5NI-lxeQsivu2ki2rhQxaOhFYMBz8mTp3JI3mLw6dUz-w35ziYIeDe-g2xZJaEGvfpa8qK3XOUiItlghyQur8sJhMBd6a6RJA4G0D4ZJL5VAoSGXh8tEOmpEpmfYLpt071euiUHsBt6iBxO-gr8jPudnqP6~eQkPjhvba7bmLKDARbaZmR~Ie95WSCSeHKBWulYTl90aYJ7SPiITA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Error\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.752Z\",\"updated_at\":\"2022-04-04T13:08:11.752Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4{\"},{\"key\":\"23b28354b140ffb8b2aed2a5b02cbfda0927092a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1687\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2Qp/Rwd/9xfsm6ft8q1HDI6B/style_thumbnail_2.png?Expires=1655683200&Signature=KBWrKA~3eO2cI9UfXsqBOXbr9SUmui0PTqS9u3A1BdIoNowT-PTXn471kXfDw~3XRWOizIz9J3onkTRBz9JO35HwJtuFHAPMKv~gipcGvN8ygcHclqSTsMxHP5UfBAxjNn0MorLysJYUYqkzeu11OaoGhcycS2sdsnn56RVIgMBoJaGcXkcB8i969QHyYxfAr1KIoL-aMzSBuC92mE~58mCnkiuL5IJ7EEA14kElt5rjbAEGEf9XqVSDIpFCmooWjQ6~iSTpeO-U6o2-4~xpc1wXv9CkgP2JAwVduCsMeM20S67~G2yB~Q0T52DsxdJtoGb-Wel0dPVZgfI5wEz0fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Warning\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.747Z\",\"updated_at\":\"2022-04-04T13:08:11.747Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4|\"},{\"key\":\"9fe7af9777ad346bba7549abeb4a5430d80a20b2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1690\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/pr9/BgE/zMAP3KlJfxZadiJN/style_thumbnail_1.png?Expires=1655683200&Signature=aXwJPDFGKTaoSUov09zF3068kEaRcQ8zrwW4Bnm~zhCk6iDkWkmF9QlmOLdCgsj4XuY8SGIgJW51TzbUD9RXBxzfJ4yN2vQrfCa987EpUL~EmPd6VtTcHsVpN8y5~LxpeP3CEfbAsf0JQGT5uTxF2ameJKQZr2fDiGyrr5q3y~e2OcwKMHqMrlol0yokTPx1aBjual9xSpYPfe8r7CdLsUCY4ZXuZ2y~EB09kVjOs48X8zvHSuGjKQiqcqaqVcenCBIBGhNqZhZwWQwONwgxPgo9jknXcGzVSNnEFX0zqXJXyXRs501txwtzbdOfU6VTB8QDxnNhpqyIIMQn102DtA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.742Z\",\"updated_at\":\"2022-04-04T13:08:11.742Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~c\"},{\"key\":\"a6d1577ec82aec5d32451b0639769bed04a44310\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uyg/HWc/0ui5Ck4Rnr8t7zXW/style_thumbnail_0.png?Expires=1655683200&Signature=G2NHWfGRQemF8aY0ZnhhUke3GNORlc-n3kE4pKaSTELFGD4AS653Uzqy83zIvLErTHLac~mpO609qADnd9vjuv3TiEKA76VrTlMpAuMOc4RJ4rhoQMx0ET05siknJMxc5OvuN11BTdsgBSJJNMN8OvKgMV4~jBwcDxJavsgGelOjb1Zx5ZF~ev1QH31TXCi2LAR5DYB2XoK6piHOmRONQ9SUb6KDz9XBGQ2s8LR9lP91G6z5UPoIn0ZOkZ2VfqGhRvdMm2XDFw~4pk2611~6uE-HYq~xtYOduPStYfUtF~MEIErnqt9o7jSM1WFXiKUnM~O8qjcAWnZmlpURMloOhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Announcement\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.839Z\",\"updated_at\":\"2022-04-01T10:58:48.322Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"J\"},{\"key\":\"878cf98b608f73da55710539b4cf12d442b06b0e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"227:1552\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xjf/wIZ/66FFegTdFAaFZBg1/style_thumbnail_0.png?Expires=1655683200&Signature=P9WnV47hIPsFCr7q6tTTHYpLYvcyktYsdp0nPpWp31tqIfnmZ6o39Tq6a0guW2XAQA2a7xM9GQyT9LpV09Fqamo2AF5AA5Yw-h0r4sMiy2f3kU7EZGu3e5fL6VnBGbhOHwMGt-gIdrmrjTLMq2Kabfl~~FQynOoF10Uze9r1TJ7QzUkkX900Djtnt-Qpc3cyh6FC06NvXVSLgs3aVtwdms13bO85ZGocp1nmf84oykIkz6HW8VqFQhZDbQiMrF1DmaaoDsi-TMszq~nN8lt-P6NkmC3zbq1HRrj~nne-Ikj0LRCDK7LQYeBVg7NPSMCgTSU5wdMzG-clV7rWI83w5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Low Contrast\",\"description\":\"\",\"created_at\":\"2022-03-11T16:07:59.623Z\",\"updated_at\":\"2022-03-11T16:07:59.623Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"WO\"},{\"key\":\"f8f016b4e0b8cd9dd5e1bdb1e0228bf11f77f8d6\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2372\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WoU/tlp/uF0BX2MyMQe21vKw/style_thumbnail_18.png?Expires=1655683200&Signature=elrfqaiNXfXSZANsfnosdQX4g0AiU8~xBdciLoN6fC-RjgUlyP9XIPYBs5NLGq-xGy1gpCoWUwSeCQkqT6GCbAOUcgrK72gHsUtAbiqabSbWJ3q5~9eq3cs~GxB9cOeYGi0oz6lwDWJhol94t6-GQdqqdcl2luctlmwkQ3sAdIZ6flWaeN05seYGT12lAFmsQejhVh~BWqoApXCpa8-jVZO2OJeA9~xWojgOikGHQZD124UE3j5PvBRCLL7pjDRJ5JCThCmfM54oJYpOfBX-TKVdLMg3S-TX2bxkpgE8TPUQFh8q2FI9Y1hH1WOS59ektPjAjmhxtBq6adAsLwkSog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Floating\",\"description\":\"Feedback indicators bg: toast, callout\",\"created_at\":\"2022-02-25T12:33:22.997Z\",\"updated_at\":\"2022-03-10T15:13:44.581Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"%\"},{\"key\":\"ef58f49300baf80c6613b04e065f393c2d2003d3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:738\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/V8m/FVU/gyze641TtqLbgvHX/style_thumbnail_10.png?Expires=1655683200&Signature=CwY0DbiQqcYB7mEj0dlDGkMas2kLeHbUbdq6tdLgewmFT1Ocd6iAzCi3UMxCgbK7cq7fnH1VUWNTyZBvdbX0DLiacrcpQoFe7ny5eKSqGbyevXCMVJvS14G0qaY~Rf8redCLJQzmB8e72nTN~H3LSqV2EU-Lug37uwRQkDsOS00bB3re83wm2RaQKBMSE-pv2804exkbGNlBdypl-bP7zqHtSS4LSd1IYWwPg2SDVODd2DoS5XeqFn1LKKmuvmwU3So~EgqCpD57UIIa1O-Ytl3EKNVuFdwck7aMFUV~F0JUI5ujfrZrm5y3OEQaqBACjdHn2KnJ29nazZRgk7d9lw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Regular\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.934Z\",\"updated_at\":\"2022-03-10T15:13:44.576Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"6\"},{\"key\":\"d3765002568fd933b50a860721e45c08f3df3a01\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"20:526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6fK/1C9/DBkGPETAWbtlx2fz/style_thumbnail_14.png?Expires=1655683200&Signature=Vvc9QI71HShJPj98sy~sF0kk1npOY7CPM~ptUS-2KjsdDxwelqIdd6CUCmAP1sS35Qo3g10~c1frdHH2eg4YRA6u1dJ41i~tcirGgxnuU7QQ~NisagWneL5A2GgVqIvlUY8QqfCuyjMyWU2ML4ulVPSMs3fMoNPg0-3JGsnghMZfWjwglzxk7KZkDFN-~OxE7hnl9zO~WVG1R~5V-1boV7esgxHX1DvIez~K2JNQ3rH7mv8iuaH6GEdpax3CK86EScj3w99l8cy-f9w2WZZTfTVTqYM1IWqC-Tc4ddhfSKbFwFPMkvmIuix1Mf4L6yLi-TAF0vxPQosgn~N~s7CyYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.966Z\",\"updated_at\":\"2022-03-10T15:13:44.554Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"A\"},{\"key\":\"c1784197b7ed4cbcb6c76fd9f761898fc13275f5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2383\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/p4k/pEC/rL8SgzB7YtXh9fOV/style_thumbnail_13.png?Expires=1655683200&Signature=JiVEMtCBT29beEHH595X52BiGhJx2F20opAOwDvzkK~hWBgAd~~w29Vyd8K1ZKQB1sPOrGIOcoRIsFeLQYnLMMGCc2KT0XAGsSTDxd79X9HmxMImyeRi4OuvKHfsnXx12RnP~UZrBZvQHpZWVX0RWNrdpahFhtNu~DT0qfLGw2DSqpikru1NYfap00b7h6iK0nTiJAuj6QZ0gZlY13lvbnnlRaG7n3qVZ2R0YVd6Wul3kmn29bj4Ph7~G6379p659j5mmsaGshBfjtuSFNBSfry3W12wTZDLgd3NijD8TxAGEzmTzygZ0-DEy2OxMmBMu7NWBT9wdPN8Pk7Kc2Zgsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Muted\",\"description\":\"Muted text and icon color\",\"created_at\":\"2022-02-25T12:33:22.960Z\",\"updated_at\":\"2022-03-10T15:13:44.548Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"1\"},{\"key\":\"85651d34ab4114cfcfbfd9726f44acccfe77a5b7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2382\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iwQ/m9C/kA8qKx31kRVc6SVB/style_thumbnail_16.png?Expires=1655683200&Signature=Cq3Bj74LkyJf5Td5Zkap37OSD0kFy31FGzPb80EpaX0gPl3shcHzeNnGtZM2jc0iYueGL-MHCLTgoK82IVMJLe5ZlTc2sNWcM0P2KVkgTdSA-N21JHq8R1PpH5ALy6RTLiYdafBhIrov6dEatyFTR8pwmvwOvyiBlIf4whav8YRIH6McEuDsCMlUbaQtDuc4aY~Cx4JkNYgRCnNd8xZ8cQXEyyq4C3S~VLPO8uk6h7M6414l29H3a5hJVF4gRpsyh80wqBTNJ1M0oAkiZSnBHhEEXdMzptdve-ZRyTbR0vP0nWJ5-FPH2eYiC1y~CvkO~KeoQQVL-DCGNUvFUHFhKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary Inverted\",\"description\":\"Inverted Secondary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.977Z\",\"updated_at\":\"2022-03-10T15:13:44.527Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"0\"},{\"key\":\"3d8d818be60a2f3a99286ca10fdcaf953b04455d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"101:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/f0Q/nQe/btv4LeDcKk4x0wX1/style_thumbnail_1.png?Expires=1655683200&Signature=DQAdN~9rK6px4BGTM5VSNlZDEKnyyCdL3jEBesSFJOKhgXagF1hjJkIwVxF3TUX0bxpflgK~IMn4z2o5FOsmGiOvoiWHnen2fytXJyjOvLmm1kcSufpB3Uy2Hv2ecTziqTvneE4RHucoONxhinycg5Dqla2OHTLmZAkrkmOJ7Gz-zi9rGF3ZykLHoMApUjixLFUkzOIqOS8iKUPeea4rnzS9XDmShSirhodR2akqTEvICvLuBdRSbsqQ3C~LUdYVA4d6RRx94kGXfSXqidg9vusSuZWwQlm1bsL4AHX~6ie6Pc1WzchfHre~L3EhWscqdSEiEbV4d9lECQ-rEugkCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.681Z\",\"updated_at\":\"2022-03-10T15:13:44.501Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"RO\"},{\"key\":\"0dd6cc65ed1e0da4a65a7dbdec871d9bfbc81b15\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2381\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iLy/tFf/i0zSBlwFv4G6msWk/style_thumbnail_17.png?Expires=1655683200&Signature=BBpOBCOIaWk~yIlWFteDYhhxzBztiuba8Wurm0I5e0wUg-L2WzdO624C5boH7giCj2lyL0ioPUPKGIcvo09mZEQdMOxWzU6eTmVVJ9waXqaKslWZMdZDaKlDsBZVuIcsOGd8srkGXyclgmw9aBNffhT-PmEm1JZ-~ikv6QwhOBEtVzRHblWIaGOYvJFre~LjA8R1vIN2xAZpAP8ZCEPRQK2tzh4ycv~dhN9~ptwsztnyum57KVWenLpLZPs2A8eGuSVLWF3VLpXFfD50ytdB1gx0JQnVYZ4fAssFq~5vdde3RwgFw3l7rvyR4KKXgXqe2TTS39i5DeU8EX~Ej8qXjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary\",\"description\":\"Secondary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.982Z\",\"updated_at\":\"2022-03-10T15:13:44.488Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"/\"},{\"key\":\"e449d354bcb3b1a75c310bf34ca109eca2e806fc\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1432\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yFC/mGy/bU35UFDULcIUBBp6/style_thumbnail_0.png?Expires=1655683200&Signature=Fmv9aW2b10Wh3dcOwnN-QHV2ZC9ZUrBlftvYnCj0Mvvm5K-C4S~oy8nYzVgYDmJvsblRf3FbakE4FaUS5~F83yXh0AapN-V~P1Uz9liZMZIeOe20hrtH928I8~rmO9sdRzbFrm-xlWBregD2El3~Xd6NsPQINoVprDhhvKlkX1Jrvrf1cwNZHaaHy4JDPF3LR2kAS7q6F-aZmN6HmVb9MMYLNPOsZ8KGuZqEQLXW9vF5tG-egcX87P1foRWVNXH~jiV-LV08t07rBopF4Bpp53qngaZpmbZuDo-HZelrITttSZSyjVKxK46tTv584GsNft095PTJcY4Zi1YDxh-XJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.822Z\",\"updated_at\":\"2022-03-09T10:57:10.553Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"N\"},{\"key\":\"0e00f688cd363b572752edebf943dab3d66b3e95\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1433\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/LLe/eIC/N9ArUd5TTINeywEQ/style_thumbnail_1.png?Expires=1655683200&Signature=DxeX9bh7icLuigA8YD35CFiCXk-S-hCGk53t6hMDylNZHnlWLxkc9DTZIdWHv0dDaTkHrcZdm~Ev0WQqu9~Ubf3CXiKCCeIA9g3jOejIQJSRtClNCU0Y4lmoKX5ZJ3m0k81u4pmYwXO-XZgKAUF3PmE9yS4pMKxeRnv-FXYUckVyr2xtCeUD8N3fAWlf1bt2uh4wBGO1V2hIMjpKoYCLbwWCchgIIv4g92UPKq-g~p3EMWIqc0aqtGfgzraruv3sLJod9hdJgGF8spxGRlSD2AhuqC37sF4e5M7ONT0U44oBCDQQ2ShbXcU2KVEDbqWFcyPvZFXA5kHblPdemEUYtA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.817Z\",\"updated_at\":\"2022-03-09T10:57:10.547Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"O\"},{\"key\":\"0a6bf727ddea4108e955e7e4e3a191ebf9bdf74d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1521\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Y2W/lDX/riQEC7uVYR49YOzL/style_thumbnail_0.png?Expires=1655683200&Signature=CwGzsIxy3Ulvt4RS7qckmm4YPQELz8zJF0R~s4rjzjKuFsI4y35HdWyd3Sdm~9DetwgX0c1K4Fr9uXhayna6TZmESYaF03rboEyyJ4-D0ZGc3va6BE8YkPlhAWYfXA8KsxRqnCsSiU17wbyNPiQYgRsSgLUCovrUSWoFDu1Ca6TqayboCiXZd-FSNLzlbsCHRi1WsSxGoq~vesb9MWNjsXIRynUxDVr3FhgkTLrBq7MYViM6yfabZQgrOJxObR1VWyVedpWiFQqESVq91uvh16dO21fnW5nJg2RimZkSGheifvr6C8R6M~3784bXs3zP4B-5XFVGnXSCO1UwnleqiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Success\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.869Z\",\"updated_at\":\"2022-03-09T10:52:28.091Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"_\"},{\"key\":\"e01cc96187afa152265eb2b8f97607ad0391cdfb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1523\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xIu/f6S/SUFFQg0eBnLMr8TK/style_thumbnail_1.png?Expires=1655683200&Signature=QphrMCTI560WXlFmHaKyUqMd80H5kQ59FEJKYAiSoe2873u2Llyx85PzEI6XxJG7tBZQs3AWuK2~iBx4lr~Z55Kq2MqDdOA-n9QACmiODywAVQ2fEHftpQiT-R3-oLyJUeZdSkhhuvxZgjoiaeR0LuxoubuYC-hHvOSYgeVC4CrMvZgpLEVHAKRMe1zIlEeeLqgCtZxtUwTnyZl~hN0Xm91GNQ2c02xavD0ZhItekp0YAc7c-DOU5JokEh8ZmNM9pdnriDG6PRxlzSXWRzVR3A4xd1Vh-siZQCz~q05rI-F6knOia0EZmBhiz8FIOSy0qE8qUtM5fRbCOvNAhJsWDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Critical\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.737Z\",\"updated_at\":\"2022-03-09T10:48:18.660Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"a\"},{\"key\":\"492fb3207c0cea54dc2977b48b61d09739a46b9b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1538\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/W9g/Vtn/M9V1NaNlQVVLQ2zh/style_thumbnail_0.png?Expires=1655683200&Signature=GYLxZp9xCs0SpGGB4su6UeZTPWHDlobmvD6OgR5IJ5usK96EM4e5fpF6u5IoXmF86JhD4le7FBy2zfzkE7D64yzhLs79TtSNsyyr4A534YU-mtqfRDBBaTVY7WMSlEO3Yxh-TGGOKQNzn-B94D0giUwqO9vMzhCgfphr3hulOasIn5b~GhupxIexEcXpNq3VhgEkjUvUHoAPgGDRFa86KUYHOkd7qsTlt6ImaxzF8XeZZh5AcyOZOsVfNhV9-vr6ZLbpPkKtFmbn4XMc6xeJ73PmEMuWhe7Y4zohlJlvJt7F8Co0IKXQ85innZwdZqgsMrfdwizBplhZlddJmvaJHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Error\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.524Z\",\"updated_at\":\"2022-03-09T10:48:18.654Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"aO\"},{\"key\":\"ffa8470c8873338da642b47dfda437c4ac5ff62b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:739\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TFl/xnJ/51cAhwxp1zbIL29A/style_thumbnail_68.png?Expires=1655683200&Signature=AqLQhIaGnvK2LsRMByYwGwL5hmCHWOhSspAUn~6nvx0cl9PuDhjvVBKtnejht43xmKMh4OYU1QVHbBThuxpdFP1Dp7JwJzPqTnBrBCqRPPLVHlnJGelNsm-Z0IUAcJK85tEBMglDUpGNAff7PQNownQg~2My0DLqP52vC-cu94aMeGquGPe1y8H0E~Olq9KLgraBMCsy~FmzjrWaZzGkuy-~WitHvWVfeSTKdfvQhLkuv11VUgbhgUmqlzXJI5wBmA5qL-S3dHPQx791YX7C5DZB-EoW-s3bjzGgl7HbmeA-dQ7KKgZllvPnbPtz31zRcihDMOoC57PwirwAp~Uyrg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.858Z\",\"updated_at\":\"2022-03-07T12:03:58.409Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"7\"},{\"key\":\"f995b876d740cca61c8c65eaeeb45fd5eed02da8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1516\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/m4M/IfH/EmF59dsi7qKhI3wf/style_thumbnail_81.png?Expires=1655683200&Signature=eUMKsUEYsjgElgyLUxMI3NnRQwYrCo3eeGk83IkhVDj8KzPRtw6ko3Y-m6b97IdWM-Mz9cWDIZAp2k7D3RrHGS7m7xWVSnyT1sjz4YYiZxTItW0fDj1jU7Nvjax2rDe5gUrY5bG-v3zHp-QmjLmTEhOOv5cJlWDVeQ2g0jnp~oVjR0fqDP7ENtNhG-JmkEMV6u759FHqGpWp-4bMlNvKNqqkwPd9OPbgkFh1fRIsJ9mSZ1xFYXmkBfRID2l5LzCYpwYYZPWB33DN1f4hDZD-YU3z5i4k4u9F9f6YPWyYuL7MdYpzbh-iC-NPBvYkXlfN1xoD6gARQOV0-raNsWH46w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Anomaly\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.929Z\",\"updated_at\":\"2022-03-07T12:03:58.398Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Z\"},{\"key\":\"f929e6f612c2fc5f7a5e411f5dd5b8e3666fbe14\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:790\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QNS/W9f/s8uFAxwFNYofcQyV/style_thumbnail_114.png?Expires=1655683200&Signature=RHq~eFHkDi2Ejv6liKB2WGU4JW9j1UMHbdHdD62PYLqcvU9TwJ8PARJYcB5~M-hI66E4w9xkEui7bx~FRaKPXBJcD7eK41xuNtTmCxhXX~hfUZtKBKkepT0Ho2T4zUoNotG0enDlmMgptPobu0kZB592pa8O49C7NWJGMKvq6ZxkpWWw-kozDTFtvGhXxsF6J1Y~N6cJ7sZ8-ArihaILQtTiEkSJmavk-cvDYMeI-HxyMxYEM39TEtwc7LmHEJm6mWH4gl5njRYcVlm1aOy-eMNP2VoIpvC~JWdWBMitiC1gjNTsITJ1kjHnN4xsm~txq6YKifnJjvlXv8uvvay6zw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Focus\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.106Z\",\"updated_at\":\"2022-03-07T12:03:58.392Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"@\"},{\"key\":\"f7e2ded6caebf0779cbfbd0a557e46e1947a614a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1522\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fsU/Bf6/ybzns65ZH1CLCcmh/style_thumbnail_35.png?Expires=1655683200&Signature=K1vnQiqYUFkZrl7dy-B0tG620WlNaoZ9nRyxaPsWALcO9ekApabEa8X27bBLPbcS~CnzGZi4miuVO1Tv8ShBJ4eyycWY-5l83h4zlPGrul9rbfEpody7A2n7C3Hh2r2mgCzTqeDw8N6fS4X3jdvKnIanNVmpppJqsN9fwzyC8MXvCRUJ0oPDmlSlvSC-KZaDVw4xk9JwU4NgWUeIeYfb7HTVymyTAtwmJawfmk3LN07a~glQYEl4Sz8O8Asy824hOouNxUvVGKhdssfgHIKVnEbJ0f~lDbW1a17GttbPXlawsv95bbMnrefP7VslfzespqwB2qBBf237gpwAMT0Ytw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Warning\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.686Z\",\"updated_at\":\"2022-03-07T12:03:58.381Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"`\"},{\"key\":\"f591d3c7c3252e0b1f8dd6abc52351151c7086c2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ozB/sLM/5Ig4jjBNTCxo0LT6/style_thumbnail_66.png?Expires=1655683200&Signature=UPi9sWOjgL2KCLmpNG5Qw0CrLaSr67L6Fo62902M2qkq7gxLZgA4xPnS64WPO7fmcNqOYlcOZZ4IVNlo2pudlKe9YEkOPZZNeFC~yUQ9LW7nAInsVCWNG28WhU5YKNKm4CiKaa-pF6KjqBchB22yQ4HCwfVQ~ZaO58gZn3H7G6apnPawtbuhexlp85varKSBQdw3UGYhslKKYoA57HHzS3sCbFQq4eamQ8v6xzwr58bJdKOq5zvOoID73LJwrcbkejOTk6NonW4XQ96N7A3jXtnjTfHDVcsiEJhSLPyW~3z9i02kjuSiPuSpqOixvefklcAZW3uSCHJypOdIbrVRbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Info\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.845Z\",\"updated_at\":\"2022-03-07T12:03:58.370Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"I\"},{\"key\":\"f3098db025e7272071f27ae6f9a5e5d3096eae65\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0GZ/vkD/qmOvsqroHMrb6IU4/style_thumbnail_11.png?Expires=1655683200&Signature=IeEC773rWL7VSjU3I4JggkwSZIJoJx~-JQb514-o-TUX2ku1m~m87Pb~ag7XJBHKEibB3mCNmwa74atFTnNBiiT~kSBm~MzBhubwIPJfRJdBRYTNoHVYnHwv2CGaRWmg20-ab5Oz4Aof2zcJtUB5PNoCiVE80SMxsT8kvqgInIIvftkBVn5JmbksOeHNXIinTPhLbM8WpKbgqR2kAwVS-f4JevvqIfqD6hem8dv~tfAQTL6-vc92HBjCOivhxCJYRxJdTirPsNu8nQotDtwMCqj9wftjzohbUSGie0tc6PVTbPFFD0ydLsT2k2Iy-q3PY6Dey3Q~HezgeXdVoP4aIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Success\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.543Z\",\"updated_at\":\"2022-03-07T12:03:58.359Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"K\"},{\"key\":\"ea3af86dfa80f1c89ad9baa91e0bbeecbbe5f105\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2395\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JAb/t3o/fHMkVnc5NryHTHqk/style_thumbnail_84.png?Expires=1655683200&Signature=GM9mXNGtIKv-heKwhJ1aw0CKt1YkTlzaUfBYq7X9jtcJfBxwzXG3OdVuaUT-VyvWs4NrC3HoLF3jRnwYDwaYQg8Jy5Yej69iVgK8bEJ~9Y9aaSPiuxOAWy1tvKrlnmAZ5xWterGRbHF0IYdwN422y~3tm7NDbforZ3ttaRRifyqLAogtHzbioJpV8-9JCcCbYEH-ZjOXw41iA1HKw4s4iLuuIXcASIZWNZ85I3dKGJrs6IjkmDf2GYQPLkgX1uTSIpt92SEJuoNkvMsF~pQmKmYsFqXVM3ILvee9-Xi0iTuBazCHa2O~S0PT2-vQ6ptcof3NXYW53mPyUs7suau91A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Hover\",\"description\":\"Text color for System items on hover state\",\"created_at\":\"2022-02-25T12:33:22.944Z\",\"updated_at\":\"2022-03-07T12:03:58.337Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"3\"},{\"key\":\"e67fe626e5071c2818058f0e6ae6ccc2c9b1747d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1086\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aoZ/4Nd/u64HJFJvNhekdjoA/style_thumbnail_27.png?Expires=1655683200&Signature=DWasZQDzyxF4PnelSXa9RGVodhelczAYAVwqhRNNRkmpYtUwOLaLowyWzQNcVUwpSh0rp-NGe6mzEgcfQM6rqAMeo1C2HM90DfU0COlE8Lkq69XifPV0iH6wx~bTrGLXz4-YMgiifafax6hFlHT24ZFrk4UDJ8uq2w~ngNdj1vYaWaNdnVji32M0t2lpZTrnPW1K677k5bqT2QHxS4SSO2p94~ARtAz53GKi~IhjAjp3GveGq8tdGlA0i-XmEyKyVtwOYkfkVTr7-jOsG0ChkVcCf70ScSINtuaip9877Muc5zXefEaC4It0SnmIoSmbq6NhUXG8xG-e5XTT5~lbxA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.633Z\",\"updated_at\":\"2022-03-07T12:03:58.326Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"G\"},{\"key\":\"4c5472002ee9e9014f25b2cde12bc75530c01f31\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1512\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3Qz/9dX/smjO7mkXOLMaJNfP/style_thumbnail_4.png?Expires=1655683200&Signature=M0Dd7fTkPmcIpXXCz~cnp5UEx8Ofx6Gv9KpMm35YXpKp3rul4-jLHp8Zs3XibrCgihFRjLZUW6r3c9g90he2n8JQvGYstygAu9DwFdUIhwSRbwS7hJWewgvLHCtvdl8Aql3v4ov2AU~erZkF8kmAld5I4XrLVeBkhb3MP3jYPZ7edbUIX~zYf4dS3f3-KWhGkjpgZC7exRm380W90eoSXffBtUdusnZpBqxk5~y2tzGkqsfxde9SwKC0t5dT35nf-iRfrjeNH9exLR8o3Md0JB7GA1clawxpiTXLFuEmdxtbgR80AltnATOJRBUs-N8Taj3D4ycKVgdPNjgNiRvzSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.537Z\",\"updated_at\":\"2022-03-07T12:03:57.784Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~?\"},{\"key\":\"48d7c5cb2d4166aa7a3b3cd213463ac51b50a17a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"126:1406\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hmS/EU0/sHxi7Ahe5WlFiCav/style_thumbnail_0.png?Expires=1655683200&Signature=YyTE3THG9CUxQxppWWLcB23nLp7b7rbMWIxWQnPyGNpdynPNjLu7eBCbwzlF9Z1njTB8ysyLoXiWBPLoOKKl4MBm~Hq2w-U9YAs9qtJGBplXqW7u84gCoXcBkSYR5medleQXlvJY~aq92xF0hHzlsG4m09M8djTHjYanOxHmJm7B9UWcJRT6N9ye86lM3C3ImMsufwUVg5ks3VtFeQn-IVE7HzDKhiCVtg1NwFDBViLyxCjRO9AfYjhWg4Un~yO4ffQ3MjByKympGLXMW88BtFw9ROpvfqcb8jJch~I77H5vbZt7LpLhPVLOXjyt-Pi2J8Clm6IWVr9Og~VCl1jKQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-01T11:49:51.759Z\",\"updated_at\":\"2022-03-07T12:03:57.768Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~8\"},{\"key\":\"46b1248d1191b41ec368e1199e0cae64e5c2501a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2369\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EEg/KpX/7FPN3gVcgAyyPHTY/style_thumbnail_74.png?Expires=1655683200&Signature=SfCPlbF51ua76TU6R0p6GlNmL0tINiPwPfws5ovKoY6CCWfxoIDZZZ1QtftvkIoQKNf9xgVgamOrKuKk4BFGh0YwDZVCdDGcRHxQaVVFiure3cZf0OUFb7vUCCFINkwYShUJ3CF5z7lY97j0QfEhpEJXk93a3gE9gcA-O4gYT2BqEbX4Nrb~9k9eQGnhx8xrrqoUH0-YR3g1rJ776w9D45xQ6-oM9cHpahgQuE6jDd40LHWwPOJl3xGseJI9NW8z-q6jfQrYUuRRsmIehpPe3eRVeqKJlLfqabSGIHctTZg81I2bZ9V9CKVKzjca6nfF4M7MHhNUw5lazPvfI4qRWQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background App\",\"description\":\"Application body background\",\"created_at\":\"2022-02-25T12:33:22.893Z\",\"updated_at\":\"2022-03-07T12:03:57.752Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"\\\"\"},{\"key\":\"465d9d7d5ca47d252e7853b4921af17b38d969a2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2397\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/D90/ial/awVXUolf3CnjjB2x/style_thumbnail_110.png?Expires=1655683200&Signature=OhtLzj4s9GfFvXqcJG0QXQuORe02jl5-QfaPKo6QNVXDuDBEmBS2yZc3U8xW8LrN962EzLFQ2Cr--bF0PykpWCfMnmAMel3ijA0FLHO2LoUlaUJWoIEq1WXid5C11A~FXwbsv8l7DOqhhrPcnT~qtqfPYSMJFGmmueZcWhgZ4dInKLM8lJEussAoSHUOOaa4jxER3yxHkpRDBTxTEGMFw8VBlVzSCnKzCu1R4u8qqqjjb0FqDjr7mDjWJnzAMI4MpYrYeY2YvDAIuCra2RnUZcq6MkzCGnCzbvH7ODtB5R7z29tRr-r~8GgwZrPNAWfCjvatqwrSWlI6vAiTTs7Q7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected High Contrast\",\"description\":\"Text color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-25T12:33:23.087Z\",\"updated_at\":\"2022-03-07T12:03:57.747Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"5\"},{\"key\":\"4564d9f2d458153b3a2a108a30cd75c43b59d05c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fvq/gIC/hq2HQm8aAH6nYuGc/style_thumbnail_39.png?Expires=1655683200&Signature=FmrA-uEvaYT~xRGKV5576IbNYyp-H5L6z3taFWX36GO7emlamsRP1jZwu0SfRh0e~YHx~pSRQE68hHR5yWC3d7cuf6HASibmuQq8KgbJKToamLf7-b86v~Q2tprwildK7ZyUKqcK8sLpAyHPh~di5BJoSLbvMrG3Gwo8LwU8wejKmQTDdI4pyqd2J5htrZ8YuI6090T610i1chXbuYcGwWU15QlHCIMCPhERZBhpMxLSjSJVq851HiCN5Sq-mLwhexFIX5d0YX2qG-nzkKRdvy33oVwu6v3JvbIxmY7GrcCh3rpRCvVAuznr7D2TuQ-SmHxeF7RtVnGmPUccpcLvKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification Inverted\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.706Z\",\"updated_at\":\"2022-03-07T12:03:57.742Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"d\"},{\"key\":\"43597fdb5c85b7a9218a1d61a51e65341a2bde11\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1485\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Qi8/tAi/6SMtpulbzR8tpsMj/style_thumbnail_83.png?Expires=1655683200&Signature=f93G0qL7w~d1AgkFfXS6TMRZlpRR0r-ALhzR4GLwX2k1E35kZRJU6IAPbPf2FLoUNbo98-XL3RKgrinn9~cXk4POlkvTS11d0Lim6a4tQPUlgC29pDo8onmz5PI-RypEVzmWnW7eXyDR7gye1Mm0upNCTDHn7X1FAQCpVCUwSo4V3Sy9S4DgB-t3nb~aooeHVu~8rWNlFJMMg9CIR9tN4L1IaVvYozLX16SxafwcWNl4jdZy8f-Pa1RhtxK7H18Aend8gKMPdn8NvD6x7VY0x3xIckd5QBa3khDEWuvzxbXvDT-6Z4Bi3IKaVWQs7nRg0sT-u2MIy9p~h2t3HLVEVA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.939Z\",\"updated_at\":\"2022-03-07T12:03:57.736Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"U\"},{\"key\":\"3fb696c3ec87fb9dd19a3e4f2f3853c7a0d0dd2c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1434\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ECK/BS0/oTCDhLF5YQVIvehh/style_thumbnail_1.png?Expires=1655683200&Signature=UR7G4unUb01SBAh-l-4svXFlEwT~SVAdTGf3pNLCf7N0wUw49Fv9bg-NOmiRIpW-mquJlV7rmolyR-oZu3XHxAkLCI~u1zUouBLMxxP9LUELVB-3O6BCtWRhPr45z9ZqgeFPSdrTLKoPALg7Fie3mDkq5Ai3ptNrtNwteCI-ccLWuwUapn3OSy9ma4XKNOq9ZgTyn6nUjDrBnCTepCl89PmIHej-xtPpHeo1p6TmXfXB6NagURDIGVtePGRzxwCDVmWO0oG3RxQDzrf6NA6ppk~b-14iukYi8-v~qWinIeTTSyjo46jSJOTVN4yrqmwBU~8U1AjBXKjXezwPMJPG5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.491Z\",\"updated_at\":\"2022-03-07T12:03:57.731Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"P\"},{\"key\":\"397bb6d1b175e4148fb48573e50b85099b37d245\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2376\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zyZ/hME/9i98atReCgj4SKrG/style_thumbnail_104.png?Expires=1655683200&Signature=BBlUqJ~rCTJ3z8Jpe3fXNVQynXw681tBqGnFbcH7xUgx59KJSerNVxAggINyET7jQ8ymMv3SrAU9gMvWhc4UT~NYlNo04W9X00KfbNT-mRHjBuTjwdq4o-Y98ciEZc44cl~uSiPJIpOhm-0uFNwus~wzK3buKFnci8UmF66NXyrGhPTlCClYNnvWfVobw3u4zA1PzYtBVftQxNKM-jTLrn1IsTpfePDPS9TIpgsJPqoG6XFelLm-w~I0vLu6gzA7TxR7px~SrgGy3bpfVS67eYjDKU7M2i4DA6hEj-lOcx1So37o18eaOixAP7Iaa4K3SVbr4W7~YITZ8bLfDcyVcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected High Contrast\",\"description\":\"Background color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-25T12:33:23.054Z\",\"updated_at\":\"2022-03-07T12:03:57.720Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\")\"},{\"key\":\"290036b6bb2ecf2693d8622f547593442fe567be\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:759\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bHo/eiA/2mfGm5onlqqPwRze/style_thumbnail_0.png?Expires=1655683200&Signature=DR1IZtpRtSWOMZMmzOsgX4V8IoD0FKRetCejY-iFeGc~W9JX5NvcU~6f~342-4Hj8pj-CRAX49wHjUa7LaMXvQjsjiZ~hlf1aCmOe4UGFg~kN3dOODnNG2zbTmkcHGoHMDktaobIRLvvCcxms6ulVOotaQ3sKMyXYKvX-0OHfHe2e6NJSzjpy6ko6XqnJXUo51lWX-YD~JhefPQSq5BVWr9afn1lxU-e0Y7i2~9dF8H33fUyWldsj9mu4IpkV3oSbsEk2Tp95xO76lGmARaeJ8kuFu-KPdcXkKJpZg3m7tmVHBs5f9z~V1a4Dic1xVtAtN38~-YtVnEIYxQ2RHq89Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Link\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.035Z\",\"updated_at\":\"2022-03-07T12:03:57.695Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\">\"},{\"key\":\"28add7d56b9dd29e7214eb8643d6db190f025d13\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jm8/mu4/T89k21t8epAZcLLP/style_thumbnail_2.png?Expires=1655683200&Signature=GZdVI~zyChmgYBoRlKbnXrZGm9MHIF0nXIq8f~WOXw64HaP3njwoPAEa6atBL-Z62xNRl~6QXDwD9dIxCyswbRIRZQ2DYbI0gBZogktXHprJaeiodhAuFdJTm~UCoh3wvzwhmpRqrD9jw0HJfX7clGv6qymWVAhEgllQkaBigqoQZCf5zqfTKzMisrJbucdKRXc-Rb1-IWUAQWfvD8KuF6RLRCwRvMYw5laZ8DCpZyDzuNEvpW8pSXOSaaM-sOcpcFsfdPHK5SQ~EeHF6Xoj-gIx383JYPGBkMzSlsR41zdEPxbpIkYetWNQk~AbDYwKr7WlamEt8j3z~FIRF-zjBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Error\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.528Z\",\"updated_at\":\"2022-03-07T12:03:57.684Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~;\"},{\"key\":\"26788e861bf1ee429a671cd0d7b57687e34ce346\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2371\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aZy/KlA/VwYTkKrBktrAag6x/style_thumbnail_109.png?Expires=1655683200&Signature=F70rOoNo6eMJ~jpzQqFXJlkRXo97j-RJYgkriakEZgQYo3RmN8K9DqyKOaHCS4-jbB7gZ~eqWi2bzISnm5k4Q1eWUrhbPhy6~wKWNRtighcwVpAv8FcqgJtohSXfidXzAdcp5TWNswoJjX7bV3EviPXH~Y4gGrEbVi-pHfPWnFtqz4DOqrvP9KIM8LRC45rCktIc8HLSkkAsDx8MSZNxZ1i7Xg3QwHOK0l6bEfAaGR9dHWCQyHC-go~X6fSZCKEharINGJnP-AZJX8ErUK0eQV7RAW6m0cmwT8tmq-xiYmCTP16Jnxm2AYlyCW5ncPEbokBCL7NBmI7JWf9Ov5GdOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 2\",\"description\":\"Pop-overs (Dropdown menu, select menu, inline menu)\",\"created_at\":\"2022-02-25T12:33:23.082Z\",\"updated_at\":\"2022-03-07T12:03:57.679Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"$\"},{\"key\":\"24d932eeac6526a9334821a3119e6555f524c7f1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2370\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zYG/q0H/XqUYAXz2reJxaKcU/style_thumbnail_99.png?Expires=1655683200&Signature=WaI3i0XHylM1bwWVGL7v5aAfI9eNhcabIywx1vieKIdgtCWM4s3NrQT9ScjAgUdekiza0U5eG1f7Xb2k7mDsG~6ghZI-pIJSYEVaBEFolpl5Jy2jh8usiTdav72hpmMk4AH4ATEgVPL7GoGUlzXq3QUU8B1zdu7RB7KT-g0cwzg~Iw~P9Hib9HmJoDJEha06~oOyPhAROyjwpzWYpBWSPJdq3IzbiscR9UYRGqzuIOObZAPQ4r6h9-tv76CzL24sCziEOOAi8qqPGRur10galcdYzm03-spuQcHhw7XD6l7QeuhalC6So4uZgpJWR-WldNKReeQFU6AFio31M-G6Kg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 1\",\"description\":\"General surface background\",\"created_at\":\"2022-02-25T12:33:23.024Z\",\"updated_at\":\"2022-03-07T12:03:57.673Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"#\"},{\"key\":\"24c63d9a4a58b289417c6415d011041b3fa9e164\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"136:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/XxA/oCb/Q1H3yXZXxwXqxL4D/style_thumbnail_1.png?Expires=1655683200&Signature=GEB8lUqDGqSHlii1opttoID1CQ6-aZfF~UL8aHlrJdVXDvp9zDlYxC0LM0i3kwLnrRhYiJpCROa8bmO-ismqU6X55aQWE6DHIoSnrqq3WlD9JiiXDFhcqXgDg--QH2MUhPCn5JDrSztuHM27EbXx3a4klrnV1FNPdKftdPfMDhTY8zuM5l2QT0BO129hmWJhvRPK435fcDqf-rWYHIBv0Yzyyc73cNcLEYmzrXxZqhbXfx-~rsLG0-RYPWKXMLRtSXkJXt1MX~3VOs~2HKEJX1TP~blnW6KhriqjCOL5DtRxIsCGcp1swcazcq2btVkRlGgn5HiOuwD4BPSOqRzUhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Foreground On Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:15:41.372Z\",\"updated_at\":\"2022-03-07T12:03:57.668Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~9\"},{\"key\":\"d426bbcc8c94c04f1f91b74507b8aaac59e024d5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1412\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/G0N/BJi/JdPobijUXQpudepR/style_thumbnail_24.png?Expires=1655683200&Signature=DZHTGYbNHO94eEr5jaAjQiRGdzzL4n281sL4iG6VsacRhNpp6CLadub61dhz~NEjnJM2dtGR78NK2q1qwkXZ31pNDn3kBjmgESyvxsa2tG2K9UKe1k9H-wkAKbUHWqrK51yoUlwjcSW95MuaWz2WloJiIZlBw29Zx0ShZ0ywLdPdIJXjXxAw18PAvVaVxDGnF4r07cuYmDO-SJHS-9OpF7U3O6njYrvYBglpFQh-Jq9nKuWRwfTFHyqVvWrO18iUYlmOAd14qOMtsaz1Ebrj1gYclmLr~brfZPJjNR6kgv-V~hDaQbk1Tv4BpG2FuuBV~IPBMLN5Sq1RBPhgSa1hGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.594Z\",\"updated_at\":\"2022-04-07T16:01:47.294Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}{\"},{\"key\":\"ccbfe8c54900bd4238dab48733ceab4e2246d4e5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1315\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JG3/5cT/wTfYEJGXpauE9Z8T/style_thumbnail_31.png?Expires=1655683200&Signature=VbQUUAko49s1j4fbaOvyk8JbIpmSCEhCs~LM67ermyb1AcaXDsrUJcHSuWt1M37x8gbPN2xZpg5ZLV6GgGel4GCJkJK0TzP0NmSztVDLUsRr738IwqwFeJFQERXda0JX0pNN1Tf3YCs6PGMu8bdCfO4MZgTruiAfG8KZpMEMMlEFFfqW7nlHwUa1ct-pVyTogLEjR68UZM2kxD-lJCh4hjHKt4aNcY4zDHdW-hOSx17Zjp8JkCIn8Bwund8zx3jNLSXmQh5hFy6ftGjOh2fTLPYKC--9YYd-rce5dOI8QZL55NbtJVxMblcWz8at-VsLc0OwG5MK8CGVx3FJBMK-ZQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Text On Primary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.667Z\",\"updated_at\":\"2022-04-07T16:01:47.286Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}O\"},{\"key\":\"c4b4f0ae82dd56acd14102aba5cba037fe849733\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1323\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/lIo/PCt/gUza8elc7MnOOyxp/style_thumbnail_4.png?Expires=1655683200&Signature=ex6B59SxHwr3R5f9~C9yAfH3BRY2PuUr3ElPfcI-CpGQvfSoMNM-49i4f1R7RF0TVStdu713IxWRmIfh5osT0X4ZIlc0rvm7TRkR9qAofbtV8f0yvxVRj-mAyTKyDW8PRhxIUmzkY1ZvNj5bQlGHVFZ1aN3~dzxL-oARCWlxIodVuDAfIx6dDcDYWm1CVhrPZW1Z1H15pkaeheP7dNOpWtpBO5uj58Q4Ou4aUSaTHwGbx2zsZwMyGvVOqNCnujaf63Px4pQwoi7DuJRaDF6MHPozUlwWQxdC1mxnkQuzdhfcuZblXq5jpR7U4GWddhXkE0U3H-RBOTkZhrrSiY-XDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.674Z\",\"updated_at\":\"2022-04-07T16:01:47.280Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}\"},{\"key\":\"c00fd69d077ca84f084ffd398a10d6b2660cf163\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1312\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hGW/1DT/5ZYN2wLpks25Wmb2/style_thumbnail_35.png?Expires=1655683200&Signature=K3SF9r3kxbSRYRummjjB0uR8X7MUDms0OBsCju0iRXHNmDW3hZtU24AqzTAWuhuu-tomi2ha-Lr01ia385IVqnyFVqu5sUX5oSEISaByL1W-yecD~uZDzF4eUOM12sT~o5-b7dEyg3K1VVTnQcPUwHPSAPNuVlmVWyWdLRxgobix8CbjaqGAU7qzizOK96s66gl2yxhCRhRLEkfgDK1AFPeVfG9V3IVGlGJCsmW1D9gwjjFiMmsLN8PWY5alcKTrwapwGUAMoQWHOJ7qrA6nAuO5EQ~CRoEqd~NAmYfPMTswpdwM4mqVgrZEQrclHRRr6QpI0HK7yGETnFoI3pU6iw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.747Z\",\"updated_at\":\"2022-04-07T16:01:47.274Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN{\"},{\"key\":\"bad789d2a0e03e2cc914d9dcb6592f469f63e139\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"30:1309\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TKu/RTq/iP5qEMENRIcDam0y/style_thumbnail_50.png?Expires=1655683200&Signature=O0aU6bFtgq7dOEMgS-BqCPom6BZf8BkBfT4kTbo2M1~CbytizGjdU8M4P6ox6bMlW4PbodHdKcsv-tlxZ4JSGi279GgOcQfB-UQqBdceJw-Wl0Djuj0Bfng-N2P-X8v-dw3Z7Am~-JuEUGksBofHxMw5dVTGqPz2vMszuKHmAr0yJkpFeWbb-0V6Vm2epToXDY2sPvatO7R8Ie6hlnMeDcAPmmjmJZQdbd~oxR3G7He1d0A61R1N4ltzTdr7SQv3R3cUJkPpbSw6XKigv0-taFdEinhB39TDiRlau42kihYthJD6lmOKqeO5JZI19kZPDJqwE6KvZ~nJr99vM6UNyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.007Z\",\"updated_at\":\"2022-04-07T16:01:47.259Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNf\"},{\"key\":\"b2a48612311e70026985495141ff5f9ed4802ada\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1505\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/XHL/e10/jRf2hIYn0UWJWThk/style_thumbnail_11.png?Expires=1655683200&Signature=ZrLVPQ1tOqUnBE9MFkzPPuVRWO3TgxKg1AmDnEN-bh2w4vTjFfbS7Iiaz1rOzV~ygM7CyundrCePy~soC9oKsXsx3jVO-NOvTG6vpgbIghFGwuh~33eryjTGZdrkmC-43j7HDB~XRYIZqolYCjfYKzZXLLSSg~KoWmCFffZV6zPRj0UuGr19sIsoAAtnJ9GGCw9H1nFnaVQOEDjaEWb7iwrwKTETkFkfRbbWvZI2Qnp8X3OJiexBuYF8j02j9O76aB2tt2GbN3peQ2CsN2NShnVAjIBx4uQVnEV5gCJkT5~3gyCw3Ufx2nVs1djk7CN6ss2mmCNq8y7TBUSgHZVZ2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Multi Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.532Z\",\"updated_at\":\"2022-04-07T16:01:47.251Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e6O\"},{\"key\":\"1e00321cc9fc05901700e452183dfb6f58c6b892\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:741\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/RCb/c8Y/TFAhk5whZVprtldx/style_thumbnail_58.png?Expires=1655683200&Signature=OPAzixIuXIoXT13QoHRCIZ3X43kk3SFgVe3hSIA8zZMYfVSagMdycPoVEaV6ITDI9to7E8J0Bs5fyd~7wt~RJWZDxN7iBseeS7Wf26qd9j~FHB6ADQD95uJxWHxyM0Q9AIfly6YAIu0qpO5U4S8KTTF8K2kMFa6c5XUG~hnMKNFIEH2QrsKqp8j-0wgYZlCDh3aLwXzfXdcWakeyxSHgzjy00isI~bkue2oU9g1dD5Ki46yd51RgO5GxXyTklsi9kAmbePmUFFHz9uXWj12~VffmXn2sLtTkj6vNJjueJKKLb2UsAx4ixCTzlY3akjtnX~bF4aecA9c60UFLQ7O1FQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Disabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.802Z\",\"updated_at\":\"2022-03-07T12:03:57.653Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"9\"},{\"key\":\"1b02d1cb62de8733e3107dce1f7bf54893b7b4eb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:789\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/8SJ/wDz/dCZQZ1mcrMfwEmEz/style_thumbnail_80.png?Expires=1655683200&Signature=SGYRLGbdVFdftIx9JY6ruGgas534xGGVGXakhEc4TE3HD8LEWM2~kW0~Kdbb40SnbO06VMwVxzY1PwesGwQdjbFGdP~xq5auxi0e0Luqc7QGnIg-2BFtcziii0mF~~-3W42lBT--XFG2WxSN2uBD3~Rc14JbkGOFVvhSJo3rnTIwT8bPrLYDNjIFC4VZmp3CmAToMzsED5Y2ikqx029NdDhI-vKQgarYAjMo66MlRabteDKsqZkBySXrWkFL2~rNveqX8a1NlNk6vN5TYor2I1B0K9OqzNhjzRUHLwP~-q-tFnvipxbnjo8~TxT0cMEBxYnYZDDursBgQU5bv1urqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Favorite\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.924Z\",\"updated_at\":\"2022-03-07T12:03:57.648Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"?\"},{\"key\":\"171aa354537a7df429f0a52b596cba8155cf35a8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1431\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/igD/LPW/MhaU3eSWUJatcG16/style_thumbnail_63.png?Expires=1655683200&Signature=HsI4109AVQivuUwpCKky56FhFwnhk1Nj~cDw0qutLSg2zyTCdjhZXVuLPcgQa6-pXKmJXiALmStrwv7LHkUI~BASm0rJcF3KMB1rN6yvWbLCAdGciniK87Jhm2Gx-r7QNKv4TKrwuwvqxcB~8aOVFl58KVSmEwNIpKGp5-Unu-5XlDUMcN7xuby~OqPeCuKi~XEnZvhgCo76KatyX3TbSoWDj09QdrkmFBGZHiFRSG0X8M0adktb0gM3kpFr5-o41Ra72heRA3ad6D9CQ83pqwJHFstjOFncEVTMSRAduNGBKgk20jD6fQYp12mWDseT~IpRbj9sKf5u4FocXa9x2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Critical\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.827Z\",\"updated_at\":\"2022-03-07T12:03:57.636Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"M\"},{\"key\":\"0d38e93ffef3aab73a2c3eabcc8b28d600d73d30\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1525\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BFu/Z0j/PWt2LnllQq7CbcH6/style_thumbnail_51.png?Expires=1655683200&Signature=KSvEjrqSKK3yokDH-pvvbSWMjU7KVb1FJAEVgf8mBwmHLu9FfNUSNIwSvb4WViOE~PhP8IvvOeaDzAzq0itH6jG6zVQ0WsI55ieFL58Fm0efylY2Ib5zbrugRlFukSjSo55fw4~f4KXuaKL7bAlraYmPTNb9yoyeEQ8jvmals-km8TpK4El-RimX4S-H6qQJNvdgPEdCgcxNemSVU5h1oKpSfbcNckVm2Kq~LJXBxq1sQnGFR9ZvXtMdOHIe-KLFRxmJ498pG2n139tSbKqUdb5pLtyPWvN2RM7fYaiBeuVsB4d3U2AwUuHYwunNaLhZabbX5Q5gmqASJsAemi~qbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.767Z\",\"updated_at\":\"2022-03-07T12:03:57.606Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"c\"},{\"key\":\"e1638c602ade488d08d8c6dc5080b264bb45180c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2374\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JiC/VaE/JL9TKDpTTfS5X4gC/style_thumbnail_107.png?Expires=1655683200&Signature=gA-5qBGKn4oa8DQonJHlLRgUBVR03jnFS4OdRfUz-ygrBrQzY0GYbbo5-MGpie4OgaDDLGRHU9p1Tn7qEeN8TmSjbOrcC46RrJo4YeSgI4A3nXDkfTAXz4XCKY8ab6RxcFk2Xb6G~qjoHh6vsHvCNWBoTxA518CQAXsqywB7FTURGOdzmHx4eBFbXzxIes75bwacQJ7X730hNdF4D63frljH2qy9Yc~HSN76Z17HWv~F1CPQLtFqU5E9mFP-1QXAdgQG~Bnlvg~neKc-x6KXHMa9BNw48yZPa0vTGi~-gftrmSCsn-QttKppmlYcs4JogZE0OK3Pn0VoRA-lLaRrqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Disabled\",\"description\":\"Background color for Disabled items background\",\"created_at\":\"2022-02-25T12:33:23.072Z\",\"updated_at\":\"2022-03-07T12:03:58.295Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\",\"},{\"key\":\"dd296095aecc4bdde4e6c14b3af3b509be52056e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1484\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/alc/tbm/lW85fZ2AWhqppBLj/style_thumbnail_0.png?Expires=1655683200&Signature=eAlglJhRp43Bw5-Sf~JhgLgcI~zl7-C2g5nE-~nfpdJLvf0X4GQRzPV9BVSlkTOUC~qjaxjXmh9f68g8D1hzlpctthBO~FUoAAVS8WXrYyGCAcQVEhpGNnBJ3waqEExXB0yCeGU9Luzs9Gl2HpPxsK~ieMCXjixbnf7CZe1GB04T8FmNFsTl91pyBdvZ8b4-GMfK0w5DHlLsRbZIwcJdYpojHb6o~h5Zshe6Z1-bnFktzJaz1Z9SHm5h8cKYiLP8ME~mtFBieC~~RmcfkMjW-FWGWssHjiYuT4kjZnz9t3z2xLc~8utYtlGprUcdNxdpTT0roH-2UtaAj9yoZZBIow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.797Z\",\"updated_at\":\"2022-03-07T12:03:58.276Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"T\"},{\"key\":\"db793ef082f1fa1836a32e8f9bbe74bb9f6e433c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1520\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vNL/IdJ/5G3gIZAae4jffV4O/style_thumbnail_7.png?Expires=1655683200&Signature=Sqq83HWlUqpLSp0yRgvej0oJohkcaxh6doImu~48Nnf~YPPXqowKWmV6rPieBfDkHV9wzmkvcqz0N0gytcbM076nYmkyOCIxxKaGU82woxZWCAkttYjO7tJZs9xnTE7Rm2xEUwbIVR50NcZGAi~yWbeKe6-vkNoiCBYW1iBxIlf7pYEBp~BAVig3JzamKUCGTjOmxcA7q4Stjx0TV4QSgAjQHjmgEp2PcMBaKY5j-iTScOFgfQ2uxIe~zXvMTa-bisXU4CA5Aal3eL3936IuKmrvB~LcGTO0dVPi2bVGG1H3PS6Dulv-iHXtOXdlgFuGkHDclWtje9wf9H6VW27t9g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Announcement\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.077Z\",\"updated_at\":\"2022-03-07T12:03:58.270Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"^\"},{\"key\":\"d1577c6dd974cc1f532e416ffca256df07b3c9d0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2396\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HG6/Dtc/ntXuBUW0IR0GADt6/style_thumbnail_4.png?Expires=1655683200&Signature=NfMUm5yXB7gnPt8D91veU~PilOERLR~dXtb9~trZ73~x6QGHd67CB60HOBV1Vr0kSgbCOxYKzKMB6K9zO9ntKoer~21xkgLkQtUCTlemnxBozAKTF-DBRfXmXqFqPtszosXfo2DCzXnoOnuG~zqV5xOYiR0qeOnmff7uost8xnQFqASc7FXAEnQOg-bYUIs-2HBaY7h9btXGQKEKyjzEX36CCXJT-SD7lHQ2Q30~RIuBUfHcMgskwP4mTJGiw4zTgojg2lQtf9kmELi1tvNCCR5TR9-X6ywOhiWIgGu2FmuuEBMsbpogIbnd-N6JX0X0RYefFu~uJ-EU3pwjpKfIvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected Low Contrast\",\"description\":\"Text color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-25T12:33:22.507Z\",\"updated_at\":\"2022-03-07T12:03:58.234Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"4\"},{\"key\":\"cef991d8a5ab81f69894865025e98c55a38ca11a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:457\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0Lg/JHc/Xvjs5XjOf0KB6QYg/style_thumbnail_103.png?Expires=1655683200&Signature=eaH4mDuFqs7zzJrQ8hrOvJzR8YzGqERVnlkRy4azelMrLcdusDkSrnG9uWf9WnWXHnUapKqcq9Q3Zmr7k3VY1Ay1OzQXtZfSnGW6CC8DHn3Cr0TOe2iDd4sV39G-qw97B8qa8l9VZod9gzz5Qnz-mbRnBCabOPcglJkcaUFIQ3ZKaKIQhU3CXCal7seosxlROCEF1kR-7F3qtLBslL0kOSBBU10KlzL5RK~XLKq9oiZ49EmKiIO3Uzrb6P18Uo2~VXyjyWwSw2NhCtgxScp0hzFfNFp0WV3JGok0LMxPQi852lSMGXgICM53Q3lw20fOXkN5bgDIPAIEtcbfT7whHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.047Z\",\"updated_at\":\"2022-03-07T12:03:58.223Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"E\"},{\"key\":\"c551939b9ebbddc410173b4f09b2d6b0bc214962\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"20:527\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J1E/uIb/MsdfTb0rriFXVONQ/style_thumbnail_51.png?Expires=1655683200&Signature=Lt8BTPyXX61SVfkmVyJ1f3RX60ze5tpw9HTLkiwfVNBUQuFVVGCDeFv2lSpZPxz7uym0xWaDIwRh3Tp-0Zz~s7D2n~tvbNJUiCi6OhcqPX3arlgKSVr-3fNp6ucEpOY9Rbq4uAa5306EFBHl1MzNJa--oT2ffouoFMAU78~SIMVs5X0PowIMaWPqJVMd0B-T~yIh8PD7L2T6Vnvpwy2OiLUEPEjphx~DykMpnLf75E7Yg2CLXXEcF9PKaEyqcS3F3ye6Jo2CNLlHn5wTd0X~4KdkUhzToRVKW~yHqcCGaJGIn3xnfCYUX-lsIgAEnF4zv8mMNTA23Ol22Qt9tPH-yQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.012Z\",\"updated_at\":\"2022-03-07T12:03:58.207Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"B\"},{\"key\":\"c53592be88467964579e37b727ef47a4fb6b115c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1436\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Sqk/r8w/oFkoks1wTBPq1HpZ/style_thumbnail_59.png?Expires=1655683200&Signature=b~d72BxxXY3Pw3ittL9iDE8uc9JJwSCGW4oI5~1EZd~Qu1u1m8Xz1v5FNckliI00zbAo2HBlVcLzYAnM2ahGGtPLu53vD7W25KUEhO0pKJx2L4KqEyXNmKcY9ncs26h0TnVk8lQLWdtnaNKJ8ihqDEwXM-lw7uoG5eplT3bZ~L~yZ7QtZoEvXQiv2BquW9ucQIoNQblgKvxGQjGzosoxBZ7cUe7~FG3aWZgr9x6PpvpoLC~L8bVN1wOQ-FgkVaRT6Dy78J0cETVNiemK0JYsplLwfeh904ato6lXFCwHX9cSPQAe3IEQdanKX~EsrldqCNpbfyRTpw~bkuthsv0qfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.807Z\",\"updated_at\":\"2022-03-07T12:03:58.202Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"R\"},{\"key\":\"bea4623dc162779967304c555bd75109890a5f15\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"21:454\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ARi/zXP/8LCLom5HocyIjW0X/style_thumbnail_113.png?Expires=1655683200&Signature=IPcqMKZHoruMX2Rd5rETmY1~Drx1K3teh4Q98y0cAVFUxztOoEHAwwulenRAeLQcWykxbbMsM92ZW8qDzuevBd-6Lbez2WaxUI2WF07~TPN77GdR7dXcDQCySix6ttx~YvlySjC63TN7QaIXLiFm5hTvCcBqco8Ko9FL2ZHxKjE5o2yEf6c3ZgeE5WpQenikgi6ISozY7glgdNkKVMxJqTBbLlQHz83ro~dCz7fdOrvaoljRuLBATpOWS4pqFAXccIYnbHH3vdFSxganJIuQ0auWL7HApkVZSzdzHZ5ziRKpOujlXf~ljrDkj0zJcTNjzoYjA5jqJzBkcXMMLreuiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Foreground On Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.101Z\",\"updated_at\":\"2022-03-07T12:03:58.164Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"D\"},{\"key\":\"ba9758f41653205459c7b99e2e4aeb2f31755331\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1430\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2jt/RN9/Sp8KHt1jd78ysz7a/style_thumbnail_64.png?Expires=1655683200&Signature=EozoKur3FVgmb~AnFNaG-q~8lDEQHJ-pFMLAVqOoVkkblYHFOXcmOO-aeYpZVJ4kuqiHWGe3XqZM9z5PZJpNZw1HbwqKIA7YH5chxq8h4u0gKix3e5Kz1vlTyutAhehBqtV7wucufCQ3Q4y-YXCn144poDEGke6z5f~8iXyoC~GSyO1Io87hLIuXvr6G1sv7dFrRks8APUMi9WkhNczsHoTNbANDvGqeS0CnoLM6hF1om1mFdfEvDioGvYAwLdLPvRshP7bXYtxl8xfHQXVgY8wdJNq4VzDkYUr5NHg2qhOpsduU87JpDfmdoF7yyvIq7u8rU6nJhpAjSHfk7KIwPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Warning\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.834Z\",\"updated_at\":\"2022-03-07T12:03:58.141Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"L\"},{\"key\":\"b5cd13e28cd4200dda7d02b8494861e466978dd5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2384\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jcK/qd1/PRXf5ebUjYiS6siI/style_thumbnail_23.png?Expires=1655683200&Signature=CDr6JQb3Wo0KO6L~CkFU7zrdAb3-snoVEIwNx9l4sX82vNnTvyg9j7ZfgrqS4c3yLgWT6fD2RdabYn~cLZkhe1VBXYtj1d5EMoCuta6lzQS2sbcewalf4uQAslG8tNbUETQdhQTbnpqwCCaFR7b~l7ZVEfQiS-cxvMXpnTcJlX0Ut5DV-sd-6K73ka9svE1zN4kKes~6vGMkQUkPdfeP04BzZu7zAp-RO65IGC4EkI1hfqx7Za47L9pZwuiniQq0ANITpNCC9r2iuor1501e1jXBNJbm5wBimCQDykOcpK~HDO-mbAYl5ugMICFchkdwDhNyULdS-3dcYSXM~AT3Qw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Disabled\",\"description\":\"Text and icon color for Disabled elements\",\"created_at\":\"2022-02-25T12:33:22.606Z\",\"updated_at\":\"2022-03-07T12:03:58.131Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"2\"},{\"key\":\"b44d68edc095dc41acaea60028bc1ef76eca58dc\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1514\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uiX/Tn5/xee425VzxlmqPIcl/style_thumbnail_72.png?Expires=1655683200&Signature=WFp6CTsYvV4DtM~~itp~SSQG0C0~EUryMwBQrt88oIe~GsCTmNEP8Tp86VAtxkeWa5H6Jjab1dkx0GGGAL5o6G5slHE7fxZ2dEhLyxVNgAAVOaMtBl1FopALYthSq6dvCscfKqa~NdJ2UYWUEzvEiTW6W0nawmMw7826o2I5lEAl6X5bT1Iu1KhmwU2ejavC2PVY2JJkag-1X7Nz45q00HzA0NDBbL9m2zZG3HSxyp3iCQb~ttb9qRf3pROh1X5H9MakU3q7flwVsRVJ-ML6q0gr0r-JpDDzIJ6A5m5f~9-v5uIlCaK7LDEmdtcV7ATBp-T5n~~qgvjmZKisWZd2Ww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Operational\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.881Z\",\"updated_at\":\"2022-03-07T12:03:58.125Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"X\"},{\"key\":\"b021a4e2fbe5872cabc2af3a8d0b523572483698\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1085\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cTQ/ka5/mYkfq3A3JQOTfaKR/style_thumbnail_71.png?Expires=1655683200&Signature=NPfYgN5PyeWWU99HQVhbviyhcxX6quaMNQhNvbcQUERR5mSsHybkmK8v1TtEx5AKFlV3HnNBivwjAHW9OCLQk4iTz2kr2wOLKz6T0e5KofnRnxn~rR9~SCvIuDZJdeKfLHebYdZ0bCkfNHkZzBnwAaGDzSdvFcw55Ue3fNGF2STmQbfs0GyaMHC2LzveG7mucIgzIu9nFaGUkfG5l1Z-GVYBci1GItcHTpBQKcu7wUuz0njojTXvOhFQubsSO6zaKCz~GaQRw7PO0njKB6p4lIY5LWi7526qDhpMDU3It8Khll0jioZ8qt6JakaPrj9tVauHT1TNrpRmkDSYA9tkzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.875Z\",\"updated_at\":\"2022-03-07T12:03:58.110Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"F\"},{\"key\":\"ac0cce503094fc7f8764978d28c95f0580ef5f8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2380\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4Dw/WWM/G90OoQJg8fif6jjG/style_thumbnail_0.png?Expires=1655683200&Signature=JMnTgx~n2hHc4fTDAbll4jS7O0cvTKGhUnDDP6Mo2icBI3GOmeSkjpOCeZw-nqPsiD1Xo5Io-aqlxJzwqviFuyhJgqbCtaD0y2QNvs3XBV9VL2A4LJPyUgQoRt~edfE9Lg-wY4nkp2hECWCAghpWK-ZcXJftoGzbefM4vu~TjNvUtiBn7Tyycj~3YkcprWxZEk7BudLI5VKFD0KGNCi8MKvs7sie7xLHtUINIC8OtNWXoMvLYiNHJj1E2I1Dxkh02J0H-nqDGXAzmHy81F71NI1oif5ZiOcoU9fyGNrH2MK1b6ilWZOBkS8EnehkJR6K0n3aAKQkYDVLxqw9yXMZhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary Inverted\",\"description\":\"Inverted Primary text and icon color\",\"created_at\":\"2022-02-25T12:33:23.116Z\",\"updated_at\":\"2022-03-07T12:03:58.083Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\".\"},{\"key\":\"ab4389dd8ed997e70667bf1e90f6db750385a877\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Cfg/X6z/kQgqFwGnUVnxsxEV/style_thumbnail_5.png?Expires=1655683200&Signature=asSCKwAnec6yyY-oExbIouk2UrQB7ylTMC1hQq5gRUBKGh0TICGL1flShSkUMvyTDRoEpUoicZ6GQ1NZKxnNBrKDgplmzEveRiqjHk4MkpmmcDkO8YCuYrJIUE7N2N8oKO2I9SmFCqiW69nrpAh7uGEolS7bcW9GxzluuHk6N24GA1LBuaywczI9b8yktrQDvJj0n5tho6-N4gHNA4HDmUvHYHpiKT2kwK37TA~-WajnFH4v7iKpo5FL6wa~LWqFp3ECycjzfzufYanraqvIuyRxsDyGdr4c4p16W~YvqrqlD1I6vE-iQMrfiizPufBlNVRf8Ts-0jPNzwP2fJM-xA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Hover\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.541Z\",\"updated_at\":\"2022-03-07T12:03:58.078Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"BO\"},{\"key\":\"a96fdb3b74e2c5ee64ca7a24a97529dcff020a01\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2373\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Icy/1xa/DKhmvmHhfJmupwUN/style_thumbnail_78.png?Expires=1655683200&Signature=X0gRHNGRhSBpzLsMOtVbVm~EqwVStz7y9IJDW5vBcercI0x0a9GF75-w1TEPlhR0-iAkNGmCUYLVWkj6NaKYRdtEq~1WGO~64azabCzYrwiP3hGq8SbnCjelDsdGvTZiSNib9klp9Vveh8mrCt8zQtr8RFI-skaNyAwsYkq6PruOOJkF7-Fwml~vjGPSNEg824r~OKj~L2pbpzREFtTdx20PyTlQ-f-WS-1-VuBLzgZAhHzYP9C7cCwBwr0ct2OGinzySMfxgZ2iNFBqfImUoc0syQsqs3plxp40cGpAX~Wc02OkRWH8YYawi~Y27KjxiH4zT~6Ix5ZIOBtLBk4QMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Hover\",\"description\":\"Background color for System items on hover state\",\"created_at\":\"2022-02-25T12:33:22.913Z\",\"updated_at\":\"2022-03-07T12:03:58.047Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"&\"},{\"key\":\"a96ef43958dcea881346ef078a56169d988ba943\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0jG/eXQ/vEtmQdfd2OpgIhkA/style_thumbnail_52.png?Expires=1655683200&Signature=Qx9sRojjan3LhPyGQO8yaxCcQKRUzvPX1MkhDP4jR2sWABnytDqeAX-qXVwY2b6SOd829NRV8somCqfG1b4Y6QsfwIDrqxyOkrXr9TFO5TCfqls0MW7Fhu2OLT~Ycj1en1id5RIytIOCPsYfncpMZ~yfCd5BGU0LWLqzaAQEMhR-~Bi~gjVtbE24JJGCX82s7RqhgbuF7A9Z8e0rGB6IGGaza9KcHJw42e~Tul7zOx2mMATrmmeV1PKzinNEgueOqdNE-KTgWFWoefiwxhOFQW3fy5OimX5~1TR2X2sLi~S1LijqZnXMRZn9lyJRkF1KrCI0WXbsCjHL4AtzgEcM4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.545Z\",\"updated_at\":\"2022-03-07T12:03:58.042Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~<\"},{\"key\":\"9738804be910310373d47e2d8f7d4a721a334b5a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/REj/Xmc/rG11qv1gmzOeIXKq/style_thumbnail_7.png?Expires=1655683200&Signature=MDvFOa~Rszb4HmmDePDJk61197XW1zJCtug0DWw6sBNIWK-tNROnIvE35JRPulHxB7~BvSvSxlZJZ-Qw7R3mJ~F7mDGb6EdIvLSi8Ka03FSslkR5T8B5F-RPF7D6ysn7AF559Isw-PEeMglV9z8nlAvXMy1eWMF6lvjZXCyTJQh4fBVzqw-INXIXoUACg74wDvLgJGEp-CPrZWMUnM-Lm1Nur1h7ge-~eUJFWczNxwA7dxo99UyOIm10D9QoyJYF0acVqmcT6x2nit7nrTurJf1B0W2Eio8hmygsz331-CWon3~ZrSHL-RGQgWc1nrdDaWVQwuhpWpv-lTB2zTbI2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.550Z\",\"updated_at\":\"2022-03-07T12:03:57.989Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~@\"},{\"key\":\"94da8df461ec560a2386b1efb90479311f97323c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2379\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VqQ/xpe/JbdtgrAEEbh7ADCG/style_thumbnail_92.png?Expires=1655683200&Signature=Q9f4bNnaI11r50xL5A0gGGGTrSeqwoXh2LiQ4eKthwzRV2IGm-TS9pRCEI9q-9eWwnBpGHXqfpghB~Yc0zzCUti6NrPcaxwA6GJTJo65Y5grvp-ozPMLASy~nOlAon0-g0oA-tm0FOuKekx1ZdzmZOc38xX0ta2hV0W7OPtlvfofiEuj9FgnBQbMmuszA-31p8YH34V04E1Wsyh23y0T1KxtMc8FHXulDZLpmY3lm7jfvN1DGcLxGBmchPuLn3fjcWqt0INSPC4YkRPT-PQMPrhQdEhiei-vyBa400-QMzUH6b3xI65jE0dd73pKWa-~Te9zW7JHT0tM2Gb8Pa1kXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary\",\"description\":\"Primary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.987Z\",\"updated_at\":\"2022-03-07T12:03:57.979Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"-\"},{\"key\":\"9064590235fcda44a9cfe972f297b2f4edf31fe9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:740\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NIk/P5w/tEm5i3J9RbKRZqpg/style_thumbnail_75.png?Expires=1655683200&Signature=f9GzDIriywDX4K5K2xzAC1aKSUH44V6~8gmQyNiU1pzEAv~7ZgwI59Zrfzyk4fAajWkP6pjovfARrw740wNiynn2-E10saovuGiO1AmT~vj1kzdJU~I5l6zHSO6MYhiXtpgiE6KD~qWUQagmHCFT4U-JPvu~~htEVK2NsSPmas7IzLWMft8eQp--lnl6DHjcgpxloLxX3gRcw67iWVeaQDAvZjAwamTRGSfNvu-ctCcXuYHRGwgxCWMlXajqmER3gO6Y6OpHD-VnzdV57bbHfLUCeEUO-r9kH~Ll3xgAPRHqI8IeTmAZ41gIedKthvgCn21SIuOJa6AuIzsIBp69kg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Strong\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.898Z\",\"updated_at\":\"2022-03-07T12:03:57.963Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"8\"},{\"key\":\"8da708dc1659d01dc2dc3d41862b5aa5b06a5d18\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1517\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JZx/n7k/wJaBnInh7Ob62Uiz/style_thumbnail_115.png?Expires=1655683200&Signature=cWqLzDArjFtI1~tmf-9Y8p~3sVbAtERC-NIlgb9k~nQ2k-B4AoXyGqmhov5~EoTsSfPrZaMnhchvUNoyC7PPL3~4uI9MJ5dvIGMF-SVS2SbJQBtJ4~JduNaNyiBxpiOptyDpfbAp0evFZxTb368ciFdwQ4zvw4SJjKEM1Gd4P~wpEtamRDQqZWHOOnpi4aYclsX9zySVqkFr~lMin2yQH8MhiLypjG04y3FYSUK0nXlZPil7BZ0WhcMByGkKIwvEn0s3VvLSwdE3ET~b2qUf3jM2qKGu7lO8b3HWckkc8o4qu1nKMkbAO-emwFcqNco7N~v6nmPFUq-w4TEaJQFdRw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unavailable\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.111Z\",\"updated_at\":\"2022-03-07T12:03:57.953Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"[\"},{\"key\":\"8bcfd6a224214596af4c11357b260e57bc187571\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1087\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kxo/Kvo/nz2RMI7YajCdrf6o/style_thumbnail_69.png?Expires=1655683200&Signature=Y77xb71fuN84eGle6qd8ftYpVv2QabbWIkUr4bbv~LzgB4fOzwYWhWqEZrnX5BCcGktjNibPTm1WLneNhYt-6wZjG6yl3cpj-CgpiirtjCOwSNT2RZXFrjyGthXjzBKviMpb~HykJtV6Gz2~bFtCtspqVGmy4SG~-OBlWjlRMK20P8GUrUQibQJ2IgnBwXeRcS5R5iW-~n76PAUI3j~tAuQLOR5IMK04GHv15Ui9xKn4raTk4GOeB5SIIf7B~0j7QQPKOzPhH7dxd4BEwVWK~aRHGFAq5TwVng~YwlJPoPnq5PyIJHjLICLBSEBjapmINfdM9XWmSqimptEOpsafog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Text On Filter\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.863Z\",\"updated_at\":\"2022-03-07T12:03:57.947Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"H\"},{\"key\":\"85f60944851eda177c740eeabe4c8921add5c221\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EFl/G6p/3S4I4DMHoSDTWoqc/style_thumbnail_76.png?Expires=1655683200&Signature=I8ai-k6tkqTiMLSEJGdrA9XHRsE01NNQ5cgN4A0SZ-bTNvpPx3tXZ9u10FbOOAK-0CVXmVsAs2ddl~Szx3V8l7NXMK178pQooy4Nv-D4jeOnItgzqRmbm5QYgkANW8V27cvBmUNnbKHkioI~j~P-Sfmz-x0HJKG4yGaIIsL~XfSrs-7p1EckGqN4pZfHApzEy3Js5lSOFbZbd9le4wZv9JblxJaU8fLhWQdTb5H2Cy5DPvsjVIP0BbRwT7OZxAqgsrHUeL3rFlZMpoSOiI5qNBWw17p5lnb~ZQ2nmZ~~1zolqMgwSkQaGMZULMFtRMJmpWQTIXe1EFuheBb8pxPcaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unknown\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.903Z\",\"updated_at\":\"2022-03-07T12:03:57.931Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"\\\\\"},{\"key\":\"80fe13d6142b2d4c0422980f5492657edc2dd4db\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1519\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/S7N/RJp/1FBYqcQmJoYCKEfb/style_thumbnail_6.png?Expires=1655683200&Signature=AnO5BF3BtxEmcNK4kLedOQZ9tVRua4ZG8hBCbPgmkZThX12dXf57ZaYUba5WpGBFDJ3Wql6dtbTjtOcFp~xR67PlTBkg9KLoVYyBxZ6Dtrmp6Smv85Mq7zsPV0BJ8ybz2ZOhEunLuP8~j7YggimJWjCLfV1IyrBs6TN1zqwwf-JbQ49FllDCHzTh0CtcSXDX3iJ-dc60McF9sHzcvAV-0jwagO5hE9IjiXOFvzCC8o5I6tFGX6psMhbBDCXzV3vme0BFGA3y4YACNYJSQjOOq04Fvce0dlonYrHsE~c046wgfuR5viDpwtuuV4EhWl-9LTbyqfWoVS2JRysUEmutHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Info\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.018Z\",\"updated_at\":\"2022-03-07T12:03:57.916Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"]\"},{\"key\":\"7f4515ddb452db28ea9605e1eee249bcd520267b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"21:448\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/DjS/Fko/EdKUZNJzBc6NjBun/style_thumbnail_79.png?Expires=1655683200&Signature=WBXofztPk7gLIrS8xH23MdCMcb0qAa0WcAN56Xikzpb8ckp25CMnMPT~gSwHvv0M-N585WiYON-Vxm~nxwBzY7imRWITAD9hLG1G9Q1owjpMNOMykQQgAnXmHNvyIIG2FHJdT3zC-B5sltfmUjKn0yMw2AC~rU8-It9Fr~f~Lh4y0DncOrqtK3cJrhz~ENyey3ButQi0kpv-JMC4vsfTGyIxtvzlqdQhclIevzdcMkNcjf1yOFrush~yyZX0Y9vBxNA1SsqYqHKjTw0pVmdASCA-oEkbiVPfUuQZJxLhRXBAcE2BzrY~dH3EQ7TTzDc0-NnHOu1I8pnGW3oGjzmUng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.918Z\",\"updated_at\":\"2022-03-07T12:03:57.911Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"C\"},{\"key\":\"7d6a927a6da62a37e7e61af4b5984da90fbadc11\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1524\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NPH/oAi/SfSnU23cBbHv18Px/style_thumbnail_0.png?Expires=1655683200&Signature=G4E2X-n0Ro0utckulkHdOeIGudbjs7l8vqQ6IMon7DFObl7t5JqXCZ7hJypHKlwBWIPlvucsVPSKkUuu-tKnz2OesWjqRPfM4VpgggDTPA88QGfDAmVK-7AcHQeHaBozbe8gxCoU7U6R4We7Ejxk-TXXGhj1J0dSyvr1uzbuRjtKIDtfDBltyxb~MX0EzpwsNEEn7fR5IbJKLRo9GoTgGuChlcyjJw5-scCaDtOL77On45epaIQ-WJc7aALj5gKWBOtAW79v9XylR7qkwpOZ2-uSy--nBffhv2tYN0Is4KjkMpI77x9yIgyWb5KmgT6hbxepo2DR3vCKR3eiqt4mhQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Neutral\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.772Z\",\"updated_at\":\"2022-03-07T12:03:57.906Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"b\"},{\"key\":\"4fb63920dc8acc078ccd3f3a339d5fc2eea85b8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1515\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1bk/R6z/sFRaqnxLs2ZYrty5/style_thumbnail_53.png?Expires=1655683200&Signature=RL1a9cm3-0dCGI-5n7sz8cXUj~MoeWxX5LY7z6Ua7B79K~fTmsB~-u78ZC0zq4AYz3~ZLA03s7waEwKK1ZiH~EBYauMnLZZ~0gG8-9ys8YLu3y5gR4gNIflrYxy4QGIPwHAmLDclZOAqAEgVZZl-p6zW6bMZ7V9c1qbW1X5Zsl-kBWdBnh9T0flmPlsNLmdoXh1BdIZaAlsFExc1akVlrgGHS0UT3VJrpI0PBM0U2eOA0j8Ln5Wt6vDfgJG4oNuYKIXmKQ2sz496VM2U5~kQoq5k0BcXKtmH1u4MUw1KZ2CpbU6Wu7fMPz6-SMl5lbhMmVsbBiKw6P8gcQPDrzJl7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Degraded\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.777Z\",\"updated_at\":\"2022-03-07T12:03:57.802Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Y\"}]},\"i18n\":null}");

/***/ }),

/***/ "./data/light-mode.json":
/*!******************************!*\
  !*** ./data/light-mode.json ***!
  \******************************/
/*! exports provided: error, status, meta, i18n, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"error\":false,\"status\":200,\"meta\":{\"styles\":[{\"key\":\"96f9176f943374edd9a30a89481e1829b072768a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"302:2342\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nGm/f4m/IY9UsmEniMHCpC6c/style_thumbnail_0.png?Expires=1655683200&Signature=A0EnCcM75OR2vr4cE1TwoAKAWVPZ8-rkz5gjsPYQ3MhlguCNNsKcIwuUjwln2W3bGV4POH3gRaTusA3LcsPDipg~fdFBXpD3S3oGPS3kC24jrjKMw6PYCgH55VibZhsWvKMLFhxFeryycAneAgDkAdUHqR1B9YfGraYTEIXQbOQN-oFr1YGwxxmxtk05~4ccMLl7CYgnOlstzPAYU56DrdXIC5JpuesMNbgIQEDV-Bps6DplmEo6Pu2n8fhpQKTI9PVdv3rrlEcXfKhYvyu13Q4qjQvY6AKDvgmhf2KatV4XtHuKufLoIOr5oe8RfkHhj6cv0qAG74ZNCWgJElbE8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Hover\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:38.074Z\",\"updated_at\":\"2022-05-13T09:40:30.572Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f&\"},{\"key\":\"6c031816a0144a8eb07eff70f1fbadbc26bd803f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2378\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VhB/NbE/rZRV8noQwWlWuEv3/style_thumbnail_3.png?Expires=1655683200&Signature=ZvRwTJgUFrvkiU4rZYjXyQoU~ZMinoz2xkjy2nmeRmcrWe8xdfojo-XS4aq6ybFsaDlTIijXWHQA4aBQH~jPvsJPFNkw0-3XDiuGhdzB2dxTM0NB3Lb8AFTTgtzhOWKa2cMhSM0ZpJNyQpbgh4A1sLT44WVaHyYbIIZagNndwl5L2J9wo0qinn6E79CrVzCzV006hC0p2gERXNgRSfaMB7mXZO8NzjgFgspddyuH~Mc0yFkjYGc6X8MQ1py9XM2jRNFwYp1whZDmZgS5xgpbQ9QpiwOgGkDreXMknkcT-c8kNxjGpZ04QRN7SRJ-tQEJzLzcWT34b8Z7Rr2SYc2pUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Extended\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.240Z\",\"updated_at\":\"2022-05-13T09:40:30.565Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f(\"},{\"key\":\"4ce99c65aab7bfb5fc3048f9dfdd234e6d1b5bc2\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"140:1573\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ndp/Nry/qa4JJ9yf7nPIzCG1/style_thumbnail_14.png?Expires=1655683200&Signature=VrVBSmNMvHGLr2Uo1rHjbfNx3iwlVpY8r48RqNMBjL5D2xp6QbfuOWV6DAzbKEux1B-SQHVtORolvJ1guodID0lDOVBQ1NRoCUKfPYFhLtvL77fQinSNvtc7qckWgbGiGJrvfjolxURhS5Ya8ptJHYX4j6UxN1Uzm~IqnEsf6eZJxttqGIsg79u7WBtpKvQkAMfTwzJWtH~zvwtLvedRWd~WEYeitM4tyTksaiAKmVSIaV3PEh~mvCeNRe6jdTNn19uArf0yL3zWtmGybhHRDDfXDsKUhLqviAlbmnY8hveGxLUIxacGTjlgMyThRI6MqGYMO-hLLA8wgBb36zVGkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Selected\",\"description\":\"\",\"created_at\":\"2022-03-14T14:38:09.892Z\",\"updated_at\":\"2022-05-13T09:40:30.560Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f'\"},{\"key\":\"1d0b379a44862132f26cb88460e03ac10c05fdd8\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"45:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ATd/Jgp/EXTUFwXIYhTAYuVX/style_thumbnail_1.png?Expires=1655683200&Signature=d1sOALXU4XIBq-hJVVfhN6zTR86gZu7mclqev9nA0NMsxfsXOGleiKe17VcIGly3WIIcyzwMTOjT4xz3rJQkOTmkIAy4wRm7TU7iiiVnpOAoWO2nMjtBSbEwzkzNLHiz2AWoXzTk8XZsOBIY~w4hKsXNS4d9BwnR9Kb8WQPbaK7S0Ht1L3d42~UKLU5nxnlTqA3plq49lRQtI9n21clZ0m9~hIZr5--bA0aSoJWk4GXUNd8sFy61XaP71YrTRrUt1Y8V7~4~RPd8mF8YpKybTqrZRrxFl~upu2oJRMVexR9PVjGP-LwSpNpIiUR3Yd-2kk29-Ipf3VSgRkfA1G8BJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Floating\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.811Z\",\"updated_at\":\"2022-05-13T09:40:30.553Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f)\"},{\"key\":\"c51b0e9e008ae33102e12754ab38759c7986c7a7\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1849\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rUy/yCT/0bn0SEkwjK1DPsZ2/style_thumbnail_3.png?Expires=1655683200&Signature=Hvkc9vMLbiKgry4U6LuysNBhyGTvsQHXaeiJzzbPpqPQ~z~aQ~gaz5vTMhsk4J1dfqcll-Hx-O59~Z~qjK6G0OSHQvwkAmoD~DtSp6-dB22gDUxDa4EeNg3~92z9ku4aoCtzFoTLRVzXFbtEKuYBSPg~qIMjMKizAvKLUv15yGB0VL4nuRiau8FZLh8-kva65IvyVIftYZ2wfOwtWfeBxyXPoduNGO0TvzOsBWjjdfcdROA~RvWnvMZsfYwUa0MPVDF7HOlB4HTOvAnkL5Z8MWDhEauwCKhd~0RaNiAzPeoyKxxMNqMkynMN1LJ6khPLZhKH6AmJrplAz2rSmdxd4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Operator\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.705Z\",\"updated_at\":\"2022-05-10T06:11:46.122Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~^r\"},{\"key\":\"7625dfef7e121a86d056e7c766bed9e00e151fee\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1845\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/E4J/md3/khR2KYI4zrzNkjOM/style_thumbnail_0.png?Expires=1655683200&Signature=EGw47fHurn0XLU3IKPUB4LaDiCfJ93JMlwrgR71HYHeHrrHkUZdL-RqScHSfvU8~7S9CSCaQnX--SOngSwXbzn68gWt1zLGy~J2T1eNj1ufkqasU2~9UBnxY4TMDPoFxtatVKUCs9rtqzPDC9wrn7elsUTzxs~rpUQh5jtys65XXVq0vlsqLCEgmicTsRVbmzy4IQYTw~mqD7UM3wr2CIsjRqNfSENlRwWmMQE44oLAibP6S9nS3pXbmlaldcfyb~1FDfNq6Tsili7mcJWynbI4niHFey7JJNbFT1MhMZTbWMSqhF~QKi9~RgKmzgQNgiDRXlnqxERFSalYuQ~iuKA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Function\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.764Z\",\"updated_at\":\"2022-05-10T06:11:46.115Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~]\"},{\"key\":\"46a22d938a89a327cab67dd4dcbfc8f2f8fcd94d\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1848\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Xtg/GVk/UwaCkLHGJezYcfwW/style_thumbnail_1.png?Expires=1655683200&Signature=U~zgLPMMKmDlCb18iwoIIAXOAd~E1VvvZJyqStJGmJj5icDzMz1qhCHUpAHm9vP9eOEV4O7ZUD6~-dYwYzqYtrY75zpbsyMtxc6OmKATT0o-f6AntBGtxWCn72ZkUpicir8z9oSydI2nCmbB~8TjVejzsbkD0YhZhIk1eUTvivvQoT7XN8hPmja1wmyTQ3E8UXxm43Alvt0QQBEoApxt5Jj~tCzrxfafIpKFu6MaLFZHv~z7kzSff0DD~Lxo09GdlxExFFBigMDGFZWgTNMwo6cXV3JiuXpVAWMjR4oiO3EiVYONdTer502h59jINdiXmYTvUchuEYv5uAHX9K0~3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Numeric\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.715Z\",\"updated_at\":\"2022-05-10T06:11:46.109Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~^f\"},{\"key\":\"220ab8aed1c27db5ff930b1387e671d3c25069e8\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1847\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/V7s/fIy/3BxATQwkeyzKcZvS/style_thumbnail_2.png?Expires=1655683200&Signature=Cxa--y72bAPHElI79dMpl4b6Qp7CR0MQZCO1Alol1LEqHeeLpRkylkYujo3-GkYsMX4~6hH9FzmoFmHcy3QfhTOEWopxE0Paxvk7RhoRe9gakZ9iMmXKvdE-9~c6egPvskBnVmjoMhD-5HgjXZ2Q565tjuYGWu53NblgjoSCKZrUAUsftSaKPnBuve9aOlFdY4XYm8W5jCQz14OXdiMfMDunyvA1pHDO~pTWdf26d815aklBsl2vOiUfq8TwiOWbtcRpolBAiIIJb8ImM5pajLKeVUHtkL5GErVGSNALw4AvkCg1~K2wpEAZ08X46ZUml2ZXmVIDBEm7meQ6CnMq6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Regex\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.802Z\",\"updated_at\":\"2022-05-10T06:11:46.100Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~^O\"},{\"key\":\"1d268d03d25956ff172bb134cdf796a649563272\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2374\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hLw/s44/rVNcNEoUibYdslZk/style_thumbnail_0.png?Expires=1655683200&Signature=SpqehqF134qbwD65l1ILubrOloFOJkNWDn72b4ONTqxDWyClEPkexQl1T0b0IX-CMTBVPHLJRmrztn0hIKSXM9JuiIrM-1tiTYzbOXh9R4EyVYBWciPlkS0dSsHOVKsX5wnVKKdN6aKp0lcmBct4eCQ4aVAjtgW8ku8Mow3jW23YKgTin48Mi6cFsB4Ri6LuQytcCgQuLdicoPEwOKy0Eg4g2TKQrNtllGgysabeJPeNhZineo6nN5IApdRw-8pKgPzjPn-uo978pequ3CWPJnYv0ELUIbb2kdmxmTWIuWvufj-m6A7AAhqyP7t3Mf407OKd1v7yjZsRmvM5Bo0ufA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Disabled\",\"description\":\"Background color for Disabled items background\",\"created_at\":\"2022-02-25T14:45:34.252Z\",\"updated_at\":\"2022-05-04T09:31:38.073Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\",\"},{\"key\":\"77c62a637e7556e37c874477d168d8e3b0e66fe4\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1752\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/lgQ/DPk/KyfHbCQcB4XBCtfk/style_thumbnail_0.png?Expires=1655683200&Signature=gVByyM4evz7VjUklDLZMBBNqIRmEbdLOZNMw-AMkLLRZWOcUXFNYNvzoSDTzndyiDf~~NiWPvLTwTtYowJNkjB3bdPQknN14GhKw5FtPAJrKixexWXYP5daCrL-tZqtrLFXOhcixFoqKLoiUQHBqWpztzK6HckJvx5kXA0lOOR4rKkcOZ9SN9moAWfeCkEFwV6CWGyEILcDVtjCukSqAMnsr2hCFlrw0IBGcDn3Hrlz2Jsv0jQd79aoVlIsmu3G4Eao2ZKde9fgyfMivkzpjMCSJUTri-8KsfjQzN~8cKHQfD~175k3wHcLqnV~yk1ih03WB44omGEt3RK71xrbS7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.283Z\",\"updated_at\":\"2022-05-03T08:32:44.335Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_|\"},{\"key\":\"b4818463bfc379e8b6c82b665590eb49838ea4f6\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"316:1794\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/OAI/5Nx/L9tk6yU1uMKC1gru/style_thumbnail_0.png?Expires=1655683200&Signature=BNcu-tUK74sRiKL-ndlKLBgYk97XlOX4w5izRU6VaLPHztNp3IQLeP-YDigqo9NeTU8jzTO6vwyv3eHshUjzn~jkc~QRyJdua597TKiFtltIHHgR20SbGew3TA9AUPelgXTnhBfwAkFRv7gzxJpjMELnZ0TL0A6DE8n9G-WOJ3K7u37hcwoOQc8wd2q1B-YUktIk9lZBl9KDhSQ1Vo1LoTF4fy9dUj7sGw6F7iQLAj3aXn3hoaEFDSfWv7auBuNCkBR0PxG8dwHNZp6P9QJ2XvOeU3U3Pf-jYrLfkt2I72FSDHwYbaKoOK-Hj8GCkEphKTgzlXp7w9xA-AWaXT2aKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:38.078Z\",\"updated_at\":\"2022-04-28T13:04:10.407Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}zO\"},{\"key\":\"455422afc0c32ec71214789472196bd014bfcc5d\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"379:1723\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Rxe/AtU/vUGSAtix8lcmh32Z/style_thumbnail_0.png?Expires=1655683200&Signature=VCDg7HuQEFkb2YTFwNpOg5C911QR4ZyZaKu2n~1BUO1k-plU4D6UPsr8sMX7ozjkBjw1jC5bHjw6gsfDJ~IBo5jP5PklQU9YvQ-g8m8NyM0hRQjXontuVanHRT18sQOhMlQ3TJHZSCSoiGayRCLsDCYf66LB5xGPnggP5SQN-1Z1wetIpHuyVFaCN59CJH-RtCscsk~aaeFocG9PA1Iz82rMkeWuaBJDb978siUaYwZsN25Qla6FT7ZsUzbCi5ZfhE-byLoo4CX-cXwKbpDEaH~yTY~0xvH4lD1bJsB8T8VpCLEYb9nzkm32H6m7hi5k6sQEtDpBi~kmqJTGu1pqHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Overlay\",\"description\":\"\",\"created_at\":\"2022-04-28T09:01:22.483Z\",\"updated_at\":\"2022-04-28T09:01:22.483Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~f6}}}}}{O\"},{\"key\":\"e495c7f5a4952de28645b0e8f9cad4ec1bfd1b1e\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1758\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HW7/0Ad/dkkB6a4rVIR7onE7/style_thumbnail_0.png?Expires=1655683200&Signature=gGH32IPko91viKZDkag~uv~RNhUUlWfGr3GyT~Xq9TRDziNHgrrDzo1XIBB4DMrQaihRgS8s5NV1rosqfUd3030WWd8tnigWicFcjTU72izCmAnZh8y2OmcsgNmVQ6XxwaDU4sT90dLpTEoS74rRcuDTffOifGyibmO9Hvn3GjOkKuSUq~e9SiYZGNmT8YwU7BtjM~g2TZSWN3HlB9Evy2nqaT39FDape0ndRwKNQ7YKHa1qeKXQFyq6LFct8DDlmlY6loAjnHCm93lpsRUP8qknIcGl8s1jE~auA5mgrHNwC6tlI1CrefUGStNINRpMoYvLZM8INdalkDsAm4g3bg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.304Z\",\"updated_at\":\"2022-04-28T08:55:45.014Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~d\"},{\"key\":\"5191a5c47fefdfaf31221586e96bcd487746bdda\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"139:1580\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/AiS/CQn/8oTENOIMi53t8Kh3/style_thumbnail_0.png?Expires=1655683200&Signature=c1gnGsTa9Id68DasdbJOdxsGQNRUDFTkhWQzL~nHBywJNaNhDk1lXFg4RUtPhuT1vJQ0U78F5pAz9wkAtY2ZYeNuTK6SRB4rys3mHo95KFJcd~3tJzaLhZyHCHEOzjW4QeubQukA5kGmfvYsfL9ZJ8yeBdXdXRHoSDcjALkO4UGLhzHqvE6Y-3O2w2psUlQ-b92FDaeJuK0IoZgmRFnUsnJc-aISmVifwkzXjPLeoeeam2nvSIkrDDvDFtEfGUfCJBTQBlG1Kw-neGtfe-rfHF8ysFsr400Tn2p1-uMAZrKhdWvpPYUfdsAgSDvAwxnrOASvcoJL2V~qoSToMZpAdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Text Fill\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:42.173Z\",\"updated_at\":\"2022-04-27T15:26:35.357Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f7\"},{\"key\":\"013d5c57a6bbe1827712360967b091f2a0d8d8ec\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"350:1751\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0ua/Ffo/c9UjUgpj5s03rYKO/style_thumbnail_1.png?Expires=1655683200&Signature=T9u~sy1D4vrljuhSYc9lguK1F-j~Nonz3YNuo5t-liOSS4DRLqfxheDxsGvBf9C22nBiuqmreMLXRiLtihpB9D6rxaO1hS94to~gacsgVyNf425W~wTL8bzjOugxem7KPi9mSin9qLSog1Q9UQd9LV4UN3M-dcc67LyJCtb~wT-mEf1t~ID3F53UwF~ZNz9VxzIWs1kNkWIjNCvnGuTeNoqhSk~CCjuwr~9TBKI3VlxPOaG3TevWE8GQpdP~jv6AFjIMI775LxTJjKRX5VBNZGtLhtfU3GuG9XS9D9KJ-r3g0USR8LFzg8ckz7P8N8w0AAMkuZCXSWJvqHPRkAQEKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Text Fill Alternate\",\"description\":\"\",\"created_at\":\"2022-04-26T16:22:03.760Z\",\"updated_at\":\"2022-04-27T15:26:35.350Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f=\"},{\"key\":\"0377474c1e9f61f62d1a7ad64a828d879e8a16e3\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"373:1775\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Zux/IFm/6TwfvPNhHd1pxFQt/style_thumbnail_0.png?Expires=1655683200&Signature=htZdeNcCCFDS1KBVf9wZUIyupA1vYc3Se8CTpzv8ugfESm9Tr6zWe9BxQCWhiZbUM67ZIK81Linz09MEPkgaVe5gtX9kKK6XpriG7loZpVectT9kop-A1U15Gq-yq2K~PmKjt91Nkz8qlC3fYJAvo~qgQhhgaIeB8N2Q1FszC4W5ZmKadksHcqt~TgM6YZCi7~XCvGDP8-faeV9bfAUyqnHDM7B0X1bK2o-8Xk2aStlWW6FDm7jgSeQTJmQrU75FuX~oQBN~7hGFNDMnycmt2JxvSfp9cS-OfuzfAf3QmFwb8W-d7GmqbMmmnQ8FaWlal6CGikYkfOaZccccgac9Qg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Muted\",\"description\":\"\",\"created_at\":\"2022-04-27T14:23:57.049Z\",\"updated_at\":\"2022-04-27T14:23:57.049Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~i\"},{\"key\":\"f9a59ab2a06428596ee7a66307722e7f54db8e17\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"28:1305\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Mui/fIN/UNxW2sssLDbG0eOC/style_thumbnail_1.png?Expires=1655683200&Signature=RZ~agWeYSCkDZI4S9rINjbiGU1dpIkaw3qmuja2B3NbbcsGIu~O5lr9NjFNPt69JyOX4Ctopl3v71yY~xpYwq2JZjamCY52PAX~5Gl~4peBPrO960X5NKe8C7ad7545Uq6pLVb0UWZMyHWScNFsycdnhdH9jh3WZlNpp6EvdorXCpZULtFYXwmzcvUrwEPU0lVpINx62TLnVh4dKyE3LWUBJY9TdC9bpemubwd7sthc~W0cn5OobzjAVtrClA5mHoUMxl2zQ68OTnB0RPVMMQYmyfNY8HN0r45IfjlzndQXg9I2~XRCMU0xdqWHZX1zEaNhLHOuq~SFI5m3MKTxTxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.844Z\",\"updated_at\":\"2022-04-27T10:29:34.647Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f5\"},{\"key\":\"a2072cca6d5525ac3f6b160ec4f640b28ee1b675\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"28:1303\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KT5/AlR/IKi3egueGV6nMGZH/style_thumbnail_3.png?Expires=1655683200&Signature=e-yhg4NHShBt~xOtZ6o2cAQs93HYKWljeXyIImB5N6YILFiW656plbHcPPw0jBequfNZqSi-nlfIU6frYp5jSbYSxe4gMjZTqK3in~C2t6Xy7H9JyF0qXHgH~yn6uExj2HzcldPWc1C8A8rNR5OV1krSsczsmE0OCdYc9CAedFIJVd33-EX54n~NEQnvbv5MfjS7EbFZWtGXdspC3jGsJ8qRM3uJwgpc~mE1fGICucyrOXJAK2OV8dUWq~tFtxGDY6r~8iyMC2BtGRvwsaMoxiWe24g4iUOgfVyi4UxB-mIc~E8bgzhPpO-gms6d2-rMCaFUi2iZ0UHgA6nqB-XMrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.882Z\",\"updated_at\":\"2022-04-27T10:29:34.635Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f1\"},{\"key\":\"7a9e4fb42ac3a4fd47a2f2a2a410fd8cbd5cd032\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"28:1307\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cuP/TdA/6aBYBNyzsFoj2S0n/style_thumbnail_4.png?Expires=1655683200&Signature=FYubJLkJpYye~S4O0cLICDJp19wRnnh0LlOGkRBpAhKlkAA-zzxUNe71DAeulXdWiS1P3jt5RL-5rqKdj3zICcv1bE17avPyyfOPovhAXDO0rBzJQSC8UMhuHo3S6eSQ8Ut5FRrSA2Dgd2nbSoJu-Fm~kirnbJ30gT-9t4mjUSkEfcW2sT4THsObkeE3iaPwBoW4HHdsyIGIp1jOjJoDWRbPh0SjL27qlHe9xvBJUyP2DjAlN5ujz6ZmbmutuVTiIPoV0byh~3XH8PtXfmpGJn29EutAJnS610om4hVd4pDKe1HFkUaAEcUurig9~jrHPMM3YYTS6jYpls~2tuOS5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.901Z\",\"updated_at\":\"2022-04-27T10:29:34.628Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6O\"},{\"key\":\"355c699fb70d5a0e744ccf9d90a0e1e6ea1eac2f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"28:1304\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nbI/hlk/NcpeAggcS5Y7jB5p/style_thumbnail_5.png?Expires=1655683200&Signature=f0VKTS4-o2r5fXmrFs41etGr4sIVMWkAXEISyhbzgCo5RkE9UiSI7ncgIOeh74JDzjHIctgevZ9qjhmbf~0EFqVWUCrEG6l4Zde4QHQ91ywuEqUNzqbESwLZkDGpFGIpbSvVrnchoB-5b3UTY6ug1WrOaoKvtxzX~3ykVdg1Daz3koxSoY4BL6Y53y0kjVNlFLgjIJdHC6sO~MInhjhbH6Hb7ofwH0OKj8qr-sTY5lfRpCqG0y32Uk2xxeJm7ELe2euN6vAyhiyegxbND~TSdFzitIL3vnGlp6qjcKagyzvY21JuSjqpplQg~0NvRgAPCLSyOIi0625igq8C97cJIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.210Z\",\"updated_at\":\"2022-04-27T10:29:34.621Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f4\"},{\"key\":\"1cd044c4efa8b694aa5bc31fb6a092bd71039258\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"115:1409\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/k4P/27b/jJgcl1EC223Uzosu/style_thumbnail_0.png?Expires=1655683200&Signature=PGu4iAC-JUNbma27SPVndf3UgRfofgkj0WKo99idExjZ4vLrLXcT4LDV40pC0Rkj02h84Y1GqhAh6TJc9mwdEK-zpTDR0reMDhsx2ab~D~knO3Ty0ynVBD2XFoWIHSTVeXmmQCYz~fB9kj2Cg3xXnbmnwsfkndw9PlZcPkOPpxTqaG72TaYK1dgq3lOkuzn4WwDAP64tCUDUQjqc2-P5fEUa55deQm0r9tIEf9ritg~oDku-PVdwqDHGhpOdUmO4oHfvRRwHoIOQnhEHYx-XLGHwNjiKNmz50VZxDh0zINMa3iuaDpFT3lJNZfMkWCCPJB6SHxpKTZ~y0i48-GmXOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Accent\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:49.918Z\",\"updated_at\":\"2022-04-27T10:29:34.613Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~9\"},{\"key\":\"9cc373dcb917719f32388409e969067546106ac7\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2375\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0bU/dvh/xZyud3n50WND2kxQ/style_thumbnail_0.png?Expires=1655683200&Signature=GVkHKXk6OhpCAPC7xbnrUYss3Ooy-ssDmrK~6sfJsUAi9XptJYzz3Ar4AjPGewJZudA6sEh7ozpqfg6oGxjrMUcm9Wf1gisAgCY-zU2SFDCdKVZQQSo-bEcNF8HzJiW6jv5o2D8goq86IitwT3F5WFbvNrZEfPiBzITQrFrNppO~~FDcUGpdv58hjZGyWi4DidY6hhVUDc9yusUHE9zfweCapr~CpNrfYKz41GTylW0c0lyAbwOzEUV12GjYuodbyHAC1a8lHCYU2nRbecOkTse6FKU1dQV8ZAh6GkfOPsqeSrDkoGQwbxJURIvLsWhdDRxNWMA0NCuUkoyriINA6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected Low Contrast\",\"description\":\"Background color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-25T14:45:33.792Z\",\"updated_at\":\"2022-04-27T09:59:29.841Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"(\"},{\"key\":\"5ef5a34eeef7b9c9f867b541e8f6d36ad20067ab\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1519\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Gww/7Ur/w3DrkfzQevEfNDEP/style_thumbnail_0.png?Expires=1655683200&Signature=WqPOwtCNY6PWFqGP29DkA3itqqn8Y5Ln1BsUhjNy7LOQdRkihGDMggaviQveLuLefrM8Tn-FHg-tgllznbSbf0Oxn0uty7dPQqJiAylhb7Uy5xeUOETNL6geiASUJsUNQ2CTxf273PrHvudm3F8ffCQ7s8KNq3CvvlJGGcOLaJbQquzailJkKkDWmsd-G-DVOFsZvrH352lltgt6ft2HcvAW-yMDXUyZRi4ACbmZrm1g1nSIuxbolQP7ul16NMi9cek9XBqB7O2xMBCZSXviPI~nIlg116y~Pwmn4vl0JMDZvQEBXhtRTEDlDGSH93-fu81K-E5mhDniTHZzBsps8g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Info\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.199Z\",\"updated_at\":\"2022-04-27T08:37:42.975Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"]\"},{\"key\":\"dfabd9e2574dd10ce09e1478593611804f28156e\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"139:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Orn/MDo/sjXstVgDnU1PXo9P/style_thumbnail_1.png?Expires=1655683200&Signature=EX-EAmGdqFFoAq7IkI~wHgZ-a-1ruwnbZ4e5dEdrcTGYjBQFlerCc3Wzogcbt0tiKuM5y0tm64MX5vEF3aFQ~j3lpoqTr3HLlkLLdNjsxXniPXNNTBGeuFYDaJWF9AFXMK95RB9OW0ttoN9nhraS9Fc5C2i5PvWWYB-4p6otS2QHLqXU3SXGaU-Cy4dj-w18xuQpHr-PnNgYCilpdxPBr5mYDWtUrmvHVd6IheyV-RSfWDJ62r~J1OYXTQI4pBTOTJ5KnQDdYsi1zYdz0yrx1iReWIsKyfzBR4QH~0wJLUBS5beKHq3GdVJrWFC8q2Jrd~2rMImdlJUJwcUfdTSCCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Path Alternate\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:42.178Z\",\"updated_at\":\"2022-04-27T09:57:08.068Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~fI\"},{\"key\":\"b6f2adc00544ff6f27605478a85fe824821dfbb0\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"139:1581\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Uco/A3b/VnyqcCZAcBPLkjkP/style_thumbnail_0.png?Expires=1655683200&Signature=WpP05tbm9ozcmV3HGon42y0fygL1svkRKB-ZIa2HIIVo5IAyOCcLw1j1Z89WJNkBVLRfN90lKywpDVk25EFTKn-WhCZpHlz15-0G-GIC3Ek94r3hzhN2XX--KqjwKwODf~Ns0E6mxIffqlh7FpxLG~SXMCiXY87LD4TZFgRC1V6FJL4z5AgNVik5v--65yhJNHsbVGvDPa9gRhnqlj0DsshUH1WSx-iR9JfPuX~0qp~NbnpQMp3VkTe3w9gwlvqzYXmFqkKwBOk~bGbkgtWKyT0l3LLwO6N9Oi~DnZojJgjnZbz~LzblMiCQ04qLZam7~2thDelZFoqoxyTGCwKmxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Path Main\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:42.165Z\",\"updated_at\":\"2022-04-27T09:57:08.063Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~fC\"},{\"key\":\"acbd3b7a9dbf4e501267bdb4cf0841da23532bf6\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1520\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mGx/52X/QyblEPz7B2l5BKpZ/style_thumbnail_1.png?Expires=1655683200&Signature=RVvcd5880UA1Xg3HgSFJAdnmA8YIWH-KRnXThxkGIuyeArlbcc3MbxlU9r2oBqhwv~DamfP2vqjkuSbiwQrJTR0GagEo~3hlRiAAvjRTt6iTLLuYLGQiinpi60~aIPXs9yQYH~IaLMYuH~PbrkeP7JOJwqV5IIAVjtV7JEdqvysfrAx6YJ9bqT66OuJSFcl0t5wQH~duZ~n1vPNbDKBut-F9vtUmWQ30c26X9CKFDCY2N3QYrA-FiytzeUO0Ff6jVJ1zUOX8fTKMJtA0cHGcYdVb2~yMwg0ctqdT04R~PuOCvJ4E9ClQSiNwdShk~y93EJu8cBVrRA4HVZxalLfs9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Announcement\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.258Z\",\"updated_at\":\"2022-04-27T08:37:42.984Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"^\"},{\"key\":\"8d9b7fcb6436b14a1e68f1b6f40fc2df3fb27b03\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1846\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/7jI/Oh7/Pk8PD9UtGg1LaQ8h/style_thumbnail_0.png?Expires=1655683200&Signature=cYO4nfZsGxHcJ3Z~Hs1bJQi0apyOQJ3WHG0zCiuMgciIySY3WO7qBgxzsOJvKvc4Kwf5zGET7~zTWgkr9TcBJ12ynKMTrQGVEFqA8LhCtKHQXIZqQNydtJ5yngvQvFgDxJBg7JfKJqbMwGp3gh8GbHRC4QafhKL9k5mig~wAm8sqRuxRur1P9wfawZV6tMEC6BWmE7WfyKUKS8M4Yp56EMf20LdzNoFjyjjMGLq6o-kx5XYkitxHZRtUExuKtF2gZi~EW-OXxperQkRFVvZEMThkURAETDhtmLQ7i3~cDz3vlPZPoEWAWA~RzYH4KyJJLJAijDvNOjAIAEagI4Incw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/String\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.719Z\",\"updated_at\":\"2022-04-26T12:40:56.424Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"~^\"},{\"key\":\"22b0dd29e9c84bbc60dc712848c2424483a4b4b2\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"338:1743\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/12Y/kgW/3DZDH7q08fngjHM0/style_thumbnail_1.png?Expires=1655683200&Signature=glet-Z~GUy-Ja6nIqEmI7Zm7nclEt2zCyYkVtIHLg4ljxuU1AP9cAvnt4rjT8r4XQOzAw2sKo3nrh1j9zC9DlwFYSVqwUn5HDe7hQ1j1tHyj3p3dEorIFlB9KrUBwnnhXARRvO95oH7q9PvmvySIOteI5crHI~nXbSOAx-8WYS4XAeEm~uDlsqiDw~1yfCb1H0TZky0NWu0h1CGOWEf4UmLNHMLX-ntXZCYFtVxq6xqJ0cyQVWcNvQmYLKAmSOjBZ~3O-A1SuyRurwAsVEINgS5rZnX1dH-05qp6ukYQH4vGkKsnjpFiHvJv1KRCQmELUuWw0nwzJq7lUyT93uvv1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Anomaly\",\"description\":\"\",\"created_at\":\"2022-04-19T13:27:59.042Z\",\"updated_at\":\"2022-04-19T13:27:59.042Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"`O\"},{\"key\":\"d8d65adc23c1cdbe1810e6782b4acb158e2f7286\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"338:1727\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EQW/0Ml/ntojKMQQgzxm9Vp4/style_thumbnail_0.png?Expires=1655683200&Signature=HirnHxKtZyDC11N2ioVMftwW2PQtreKqkRMoa2rMVm1h5YfpOUaz7Gi8zSEIhTfKOnF4J7xj-ii38ETaHJzTWeDru1c3sFN9-8an4qsvAukDuOf~bYwq3Rbj6PsguW3s3tLJdLYhMZQ40q5hU8fxzatsmC8sAluGL2RN4sWUQfyrV1pQY1oyE7ATFpeQRG4Bs3qlbmv0r0PqGM04mg3N0Rsg505uwxHTk-HFTtgvShbwVU6vytHyfGif~~SKwynVEfvNKsr0HUTrCVI34DWvF3~JGgx3uuxg8mR8m9TzYPlHVs6si4xQ8RRM59VpDArbdTl5xHKtH6-ZN677j9TqyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Anomaly Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-04-19T13:27:59.035Z\",\"updated_at\":\"2022-04-19T13:27:59.035Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"QO\"},{\"key\":\"1a73fb6607b145b967b9fd4fc354ac32a0f77a88\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vzj/ju9/GBpzf4SWRcLvAQ4E/style_thumbnail_16.png?Expires=1655683200&Signature=Z1TvZ2x5u51Z5cHmlazvn47NhDc-YtJGSfVjlsNXU0YHFPxKG0xYPDkb8LQslY3nk7wMy--jltCaTTbOo1ig2jYOpZA6Ut9UijszOTQY2EeL3r-lzd~7wsI51odKFp7aTTL1OMLN5wcD8Y3vPRjHT9B~Ui49PPKdrBMG7Tsmhqm9PpNHbvqGJO3EBq6u3AT5srY86BQlzyz2HCh1sChrgLOXmIcTLnZlPmXFVvDWTaUzJyFKgUho97e51r9bBf5OlXB3N8FWXak54G0oceHhYG3RaBhaSwqJfIZlTHZDPATPHBDRqNcVOQpzipX0IBPEofcmVcBnrcvtcNvfhMnayA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.724Z\",\"updated_at\":\"2022-04-07T16:01:38.436Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}r\"},{\"key\":\"154922c57521f72266829da3b7b6e1b84606aa29\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"34:1411\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/5Sg/uJO/FMJZ5MPpOHd7UK1J/style_thumbnail_21.png?Expires=1655683200&Signature=bLio3zEGjnBx1MKbhbgXu2~fW3Bnnfn17Lx5LYsxVDN0c6iqOxLy30YUV7hvvmIQnmMIx8~J2vBeREacmqE7zWHShQyWBDLDh4a2V4MJ7TBAdWN45xJvwR5~J~gOFJSGSSKqfDkvK5EtLGAGNOtTRY6Yww2fXfgt2zFZnQs5ZXUGByplf5IFhJR-n7et0FRtllC6IP3boM6xiPdp6n4srNUu512~S-IHWeEd5HiaSvGXXPikwiFI9urhOPhQCHKJOcgt1~oJj1Xa6Smv3JZY07ORM85kApt3XZSqiWebK6E9tpo9dqxMe4s7ZTpURCndNpCCDNODt0CXeC3Ks43rrA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.858Z\",\"updated_at\":\"2022-04-07T16:01:38.431Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}{\"},{\"key\":\"0eb1826ab7c5e428cd494ecb39f23ec804db0480\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1316\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/qdg/Smf/3tHPHnmoroZYp8lH/style_thumbnail_27.png?Expires=1655683200&Signature=EGCiUS5mX2zelBFyaawP3LOEpasUvw0wD4U-rEEGEooT4-0~qsUqhA0DK8xloDR2huPo-VQcImsgsk7KRzJ5-UgZsndLQxSdGwGGaZMJTAI-E0XZ-yo8s7CrtVi~7sEHXBbfod-wENAjLNIaC4R81Qks7WCdol5jf9xultki28g-T3d-JD~~xLL31aRUmv02P5wZ8gg87ghdkbhi~J1nuz8jX-5OS9iYQbrK99F9Mcyhv8JHiqswoqdXyxoUL-XhP37qGET-5mi9bcyyUjRC26ztUO7~GUS1b1Abc~vQf8uncZTnLjewoUtm~BxljlTuDJLiawD3IsX~Lxf7h4WGnw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.886Z\",\"updated_at\":\"2022-04-07T16:01:38.426Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}r\"},{\"key\":\"06a97e511beab640fe67ca3faef7c3bdee2f468c\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"61:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/d96/C4d/cpyWrOlq83cbR7ER/style_thumbnail_49.png?Expires=1655683200&Signature=WnYrdFrj234fV9N0UDRfM0tjdLSZQFBp9vfF-Y1qrLTGMmxhauMPrPm4yfOkppSmmaNfI-6MJqNEOxJmhVfdn~31asZCC6vaSwbIiz9FOcMvv41O5-ydKdJM3i4JyXf5AQEIWrWNMdco3dyRRda7bxfPLnUCrzm6qpiyCHgX7JmgunWOjulVT4HaByak9d8CG-2Q5WF8Pv1Dipd4UVi5nCuKoPxaFNbPp92QM2LHOdOO~O65gYMNbysDEVKi1ZVfPfg5olYC2cjmP4vU~6HMvSnwCZnL84EgL9pbuLIGtdFL-8z5vClkFQ3j77ckVunM3aVxgj1ES2iz5AQHXLY~gw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Text On Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.215Z\",\"updated_at\":\"2022-04-07T16:01:38.422Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}f\"},{\"key\":\"0628e9b9c3d661f4bf6b16100bc1246029a228e5\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6zU/fBx/CF2NoAc8NkdF7OHl/style_thumbnail_15.png?Expires=1655683200&Signature=SbwerJkGWsLDsrCTvmPbjYRGKF6GZjiZnxSVgMKpVwYGdMAtTkdJm4uxC3GeEUh0-9nQUSfFs6AojPalwP6qGHQrFCUrbN1koZe0O~mb8t7pGXXOKQen~jmk07DCRCWBCzor9FmdnLeVVGTYIwvGMqFi~baQDN85-37FJA3JMW~Y2UUzsYr86qsEftr2B8FzQPyzBJlUCxMkWfcPAI9-3NAIGyQ5gr-sD9JSh~JylQrk7WGqCnBypMZjUZzBSXEaIkaEKYapS7zLx9nbcCEABXznWjG6dF0jnYa4rosFX2wslhglbX5jCy-rf67vsqHLDOPfRCPbQuODFGrpj9v8Pg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.774Z\",\"updated_at\":\"2022-04-07T16:01:38.416Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}O\"},{\"key\":\"007b41645edbe7b2e4d72be6af7cdf979d2279e7\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1313\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Wpz/8Ow/j0RrDfmvayFowXiY/style_thumbnail_30.png?Expires=1655683200&Signature=RaZHYjUA2yJ~RPdAIexCobbkVNIYNpLfXS-fii5MBYxby8uCThZBb79EcZz3BggPx2i7WDoEyxBPzEcbigbexqnwtK3EccOzdghQUFcSK8oIexzLWaWPi-cz9v8mHioAp0lXOtQVj3QJYFq-XCfJbmkhlz0MSH-Bnq-spwX9DvdluS8G7cyJ2TH6FjcnJdD3j2r7TrgxX6I4EN2WBvPX31~wd0fQrYKrJQnitdsXIxuWVyBOh08AIIYgRsxh3iPNxpab-S9b00d2gMZ-ApIemptWsPy3fSvK68JapVhOvKOYvltuXQCF3eh5n85ZdgSl5cGUANYauhbIWDz3s9EHUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.729Z\",\"updated_at\":\"2022-04-07T16:01:38.412Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}\"},{\"key\":\"5155d289c715350545ad5ae84c3042e71fa7e8b3\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"316:1792\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nyy/ymt/0oC3Gnth1vpGBwjX/style_thumbnail_7.png?Expires=1655683200&Signature=JSXRoqSFVosCTJfHNyiRP1nzzOnoxtUCtI~4iyaQO0r~C8b2HVEsbX0BDTRTW9WQArHr9TQE-kstkUXH1XLwp~xtcxSWnWeFL5Gt71RE37~06piT6xFAoRVNJ~v2E-zTxkcXeHRaoBii-cH9a2ji6~HWtsGkCfQAkHE~-SGz3m7oIahvU4jvnNzU0bwUZNfAvAkofwclHqJGI6JN8sZU2Ip7A5x1serWDvb3il8l4cGb144qKKfpjdEkY8ZDOitGD3XqVs~bfU7gwZhS9mBe~7emDQe0kU1WSDNuYmXpViATWiBr3dskWZNWfsaZ8pWtM15cd6xLbHWyzVFkF8MzKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:38.069Z\",\"updated_at\":\"2022-04-07T16:01:38.069Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}y\"},{\"key\":\"fcced5829e35556c8b61b7df35b129cb01b890a4\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"316:1795\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/H3C/14c/MP7pFOM69AZGZ30Y/style_thumbnail_2.png?Expires=1655683200&Signature=Q4omvcP8~on5sh87Ic78fZpK5tYZr07Ye~q7P0uagBLAkWKNl2arKb7ggDR4uhQY3aJKKQu9yR8PhORhuetKtSgxjQKEZORF7dj1wlYGXvhOQLTIi80cfNa-N-CNFifNxYn8DZIl9oSdRbEaif5IYJbMHz1xqClu2c2mDwx8cQ0Cq7K23cWQ85EBKtfoKbC9elqfiB6-VIv7wgVyeP5ixW5n79zNpnm1kzXji~tBJpbODwFcjJ~on7rYNy7LBGPViKZepLsJpmYm08fuyq-5gX2dN9icsG9y71TH3fOo2U1Bs0u795thBMKhOmAnWg6PRF3h4r3~E03vnN~N2udbTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:38.064Z\",\"updated_at\":\"2022-04-07T16:01:38.064Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}zf\"},{\"key\":\"8d500df18eb9d583444b79765c0dfda612b9e450\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"316:1793\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cgi/m0j/KePFx3JUfuQmvlpF/style_thumbnail_0.png?Expires=1655683200&Signature=YqySDHwKxIHGltUxW6JRYtB5UcYVSPc2sorVzazDJ0RFpVa6Bo9~~gHU1YdUFQKR5NTDO8G8hwY-pc1x~-~s~1hCyGcEKhZyfd2aY~lq66N4sdVU-dL9CGmhBJaWqaLG1EqbVQADCfE855qZHUv9E49lqfwbVBtwYGWEUIrOptVtytCCb0bPLWuNL6Y89kTQDbCgiNUB1C0lGsr2OIewNIBeySRhjpBuxKQxqITbYLZP4GS1ba7d9KqR2MP5Z1eGEFH0EgLIom4ip39HCXO~kPQP9hagrpMxZPJ~bdxvootN6dLUPsoeWBfnWuD62T94CEOcQ5UpZocGkmg1g9h3GA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:38.059Z\",\"updated_at\":\"2022-04-07T16:01:38.059Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}z\"},{\"key\":\"785e84aa1a58d63a12ecd64e3ad2f5e2e0b95361\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1747\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Oxr/s7f/NF1neDGtqUCRKCvY/style_thumbnail_0.png?Expires=1655683200&Signature=dOOcJh7zr1W3M~dvAdo1iDFT7YCyAOum5zxoaCPDxnxT9Ll19wx8KLEzCB-s3vrUXhLF4R22b~XZpnx6cSydPCxBJ~3haOhDAPTBxhkeh-xC4V22eqdD8NVikq6WLYaLsvf2qzH0kiSp0grrBJfs4TqstYsA5EqS2dNViIC90sz9e6uB3MlGRI8rneSIHBks3te-T~~9cdRVYjJNtiIb9V4drjdQGMiwTnDXHa-Uhb7N6xf2RR0rJnHgn4gTxgwP-Pd~DUygz-VHZXH6-qcEBf20wBzVDQyY9dKmVzCh2hmiQrcEd7pzXz6fBU25D4PHt-jjQcQ2dV5w06AmKK32Uw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.322Z\",\"updated_at\":\"2022-04-04T14:04:25.014Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_O\"},{\"key\":\"d10a6e924e7e3d4fd6c51df7c606c4046b1b2c97\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1844\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/G1W/fp5/WKr7uvQpcOHagS6j/style_thumbnail_5.png?Expires=1655683200&Signature=OtJQcmRr7f1ppZqmPO8DzHg5hzor0dH2WcNxcat-ouawyt~QAeLEayxPsCwgjQoHzdNCcIqPYGsbn9mmW6WIvXMiDQoXDAzkR69gHXLJyV95a9t64hzRUTwfQ145ON8SZoQIuIXSd5xu9EKB3K77DRutlcRevUKuLEXs8BwdPuTSFnGkSfmeMReE2qAVwQI6CMi1gYCrvX7mQqxQU2dYHofj8Gct4FLz4eFD-YD2NklxRIjV3O96jzEVmJmsuy0Dip9lmU9pbk63tEDokXTc-ggUsEUm0t1XqtQgutX-hqQ48rcwQb5LzCwjVewg46stQOpg0ikunaFL5DtjJNlRMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Keyword\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.734Z\",\"updated_at\":\"2022-04-04T13:08:43.398Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~\\\\\"},{\"key\":\"57e66bc1e680d523c05a2d462c0b6502454edc10\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1839\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/g2O/mZs/yzr0UD5qMugYpKYk/style_thumbnail_12.png?Expires=1655683200&Signature=RPlgRFhsPCQokPYqTSWSUPN~K3eaxD6COzo2VO1OH8r2HuF7RYSd4VKu4N4~MkSu~TqoUbWNR9pY8Wn3N2w5W4po0Wjqyk-~carVVZ4gbmRRPon~S0mbrtUnF4W~2EaB~5kr4VGyuqCcH-x90vx1LyRTq2q7lKve8SeiQ2eXVB3AuVaFT0BP9d3Ur~zNEbxJA~97yX7OxEs5uiIMdbR~BArwKVQlrl4EUS3zuAVgOVU9XdKZBoHZg6At-lKWygsX7kG~5MpWo~1PVaWZSuiRx-3CP1l9eeBxhaz-0oRNIiUn3-gf3JaSa9Y2C3kSOAIYp5FhyNpbD9q5JpQSKkFaLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Normal\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.744Z\",\"updated_at\":\"2022-04-04T13:08:43.377Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~Z\"},{\"key\":\"1d4820d54bfacfb0eacc5a493098d985d353324c\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1759\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4EO/JLD/NXwYIgfFaA8XOwOv/style_thumbnail_20.png?Expires=1655683200&Signature=RfabgC6WdwkVvieQrHKRURwdX4knDm5J8HPIgb6D4Afc1KPWXEUxSqzJxcAL64~KRabupUAGXS8rDyGuN0pT2HILe7CCuDDVqUSJnDtEQ1PZPcbcsRfEGXNq4g1BSGs15PAUZAVf6U~19ocLvq4Tpz~5yJ9wYTvmAre7NKD8NJdjMhjDUV4kHoYQD4i8FXLu~n0vyfVLbyRzUnQGbhwbbaI9tWaATUE5x5HfGnvkEXHJDQAfDQKSS-eeahy3cKUu98teDjm4ieWustwal8fZP5P1f2urI47KozNSQUO1OHXY4oOGih1WECWc836FbIpNBIt7fR8jGap938Jo7eCB-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.332Z\",\"updated_at\":\"2022-04-04T13:08:43.332Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e\"},{\"key\":\"a126ece8547f05b1addc93edb8a170b909c29551\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1760\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4y6/K5D/YvOElNj8wEBmMdXP/style_thumbnail_19.png?Expires=1655683200&Signature=RGm-yzXPdcjHiivHRlH6PHGR~JyqBo3Ogs~E0t3oFIw3-cCZVCp1JiN2qnNAITVXfkpZ1yK9T8k1O-8bdaLFfDTBoRTMbiQWfE3jhP-V7-ikaLwIOjHI43axSai1ZyOEnOTH9a~RVBlEMxP7159Q8Wwheg44BTzM3cmBcvG4RwmqBk0dtqwbmTkDMTIaoJQ-7qr4KEQnDsohIBMTvS39nAHeo0at3UmS0LTw3qZBzYXJhUWEu1Oo4hrF6xBFbNN5iZldNlLRXMNoVYqIkdi-6fl7XgFrWR8GzWPGea0WNO~ZLe67IbvaLvLOOm94qaSx2cx6v~pRZAcD09Zrg3D1UA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Muted\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.327Z\",\"updated_at\":\"2022-04-04T13:08:43.327Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f\"},{\"key\":\"fd6c12d94d852a3fcdbc5f81ef4c1c15f547affe\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1751\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tX9/Nr3/SDqdd5wPSYEZK4cq/style_thumbnail_17.png?Expires=1655683200&Signature=NAOXI2yduYPz5h7Pu1qc~OEKZhCkGT0NIOrNCngOhAVBI6WF8WyQFBsWP4Ni6-qZV~4kdfNpt~9eYorqf2vC2gmdYvsvLGbyKimlXuc586pANoJ3KWIUIbEfXK3-JNtawLFih5RA~J7X9XVWHNtp1mfNHW5pv~~iW1KYtheyynqHm2EvY2o4caMnwdc~rCQt7byN2196ZIkaERKAQ0SgL2xNVKdBWuhtFJCp2KoCMHtM~7y0fqp8yWSMq5MqjRpGIo6VYLYmj34k3PDrFt2T8ufSQlLbwgAwIpCWzh9MntDFO937R3DUu95nqFi4WmcGy3YFXFozHSEK9fFcyOwsHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.317Z\",\"updated_at\":\"2022-04-04T13:08:43.317Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_{\"},{\"key\":\"64b272a2926b4a650a18575b577651e5e48f2230\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1749\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Oyq/Pyf/T9RsiS5AzKFWtu4r/style_thumbnail_16.png?Expires=1655683200&Signature=Qr3TWf6TS-ulADkt9SdNJmHbXCBuxSKP6mIi~-H7AWAfwutLhej35EaiMZICWpiMx9tEq1AEexPgxky9cpremyIjD5y~fN1LL~GdWo22uFetmvtoFO5HyFq0lJNfiNy5-SyDO17OOLmR2GptwT52lDncJXs3s5sB5woS6wV3kmpeO-dpx23dPvjBZXgKMAsphDbFcrtHKctZYs1EeZsou86kIpI0E~60nQBbizSJvETUFVltgRIvxxYZyXmzy707QjngVgbZzcnWr81AW85qHwF5ZjkSN202-GK9~7qnwDM5buJeNIwS2Y2JqlMahqOGJzU~l5GoO-YuWNHLRkUyKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Regular\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.313Z\",\"updated_at\":\"2022-04-04T13:08:43.313Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_r\"},{\"key\":\"1e2104e210a38274a9376481b8b559a620d7a68a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1748\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ZQx/LBC/RHeJNZFTglhdU8Vx/style_thumbnail_15.png?Expires=1655683200&Signature=Uj9BKjNu24J0blPEr5IWEiEHMda2L11o94pZd6w1TaLUmOHsiowbwCEtq6LWlqBVprLr~MyKbDyCU6y6mXJ3aUuWoRjUTbifHDVSySYnpv5FzTrr~pt0mJPCyH~91cIKeqHro15jSvF3OA6IIUIKE6HeaSH6PgZuLlgyBo~KJIbRlcyautiC9m~DnlLlr4PnrquOAXl5JvqJhppl8ZVrMLWrjj4~MGUfsAT-aCE18Pg5hFZ~UgeBkPteMNNX3ofPc-I22RlFSyEqc4sptoCKDIZcUltRGYT0eBezw992qGUtpFGOu2EgoMOrYbdFJoEQ~uM2~8XaxvtL~Uq74kt3Xg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background High Contrast\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.309Z\",\"updated_at\":\"2022-04-04T13:08:43.309Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_f\"},{\"key\":\"bde9a947fbbe79c1e7ca812fcc5742b14f9340e2\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1753\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PAw/sxp/qFxSU2XpW27OmIKV/style_thumbnail_13.png?Expires=1655683200&Signature=XV1C3wCXHUjOfNRkzxbfnf7b-Ck6XKCxlXYqVLDcMEaX3mD24wKXKnQOZhqNtE2Rxebw4EDEPlNFT1tlJUthcRZTUpXt9mN1XMeE9DG2O8Z2gnm89ODjzQW~HVfG9X4CJ1ToOSBzZNL9~9AKSppM~C09Vsz3GV5k2BmECv755EhjTVp-eNH7XPKwj4VCfvybv8B5NkX~ZMU19r2x3XIbSw4qipDBFS6aGh48zIQaTcvcfa7QHOTyi5vUSpPjsvanMIeqTOTllwd2dNdtR-g19d9LmJ5O7GhxNh9QeFkRYoMg9AIiEkcHIrKw0u4CBE35mUUuTorHC7vnyVscxHrXiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Highlight\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.298Z\",\"updated_at\":\"2022-04-04T13:08:43.298Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_}\"},{\"key\":\"9b204966a122b14acf4035baf4e5abf45e95a0e5\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1750\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zNh/x0n/TkW9XreXDKq0BNMr/style_thumbnail_10.png?Expires=1655683200&Signature=U3e1n30VTfN5iPrqp-BLxToG6WPfw2t2oWUuJyJvrKPa9QDnGqsBePCIUMEfEvi-FjojzjT3kwv6WaxqhCH6k~G1Zp6-IjVrWx2xsUanEYskN4w6ek4~uWATmy8y-GVVlw7xDeZirvqsFlx8D67wQ6woJqdJdj3etjvqP0YqM-Naj0VhxeOBwPPucU7Yd7KI86p0qAiAmnaBWPRa25pdzacVVimfeWUHtSbg3EoqzU5UoJa~iU5EAuW8cjxfSpAT8aOkYagwJEb5L9e30r6J-iZ1uYoSr2BxAcSa6Ry7clsh9B7obitWlOF7g3ldlM43qVNmeRLXKNTW-7p4twP~Fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.293Z\",\"updated_at\":\"2022-04-04T13:08:43.293Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_x\"},{\"key\":\"2cf9d693c0713d54eb95cd77b696b218705126b5\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1756\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CMs/Pky/wqwF6QlownLsjMoS/style_thumbnail_9.png?Expires=1655683200&Signature=XVx1sOMRrG~nJG8ZDmnLOpiyfTccAqDwCdwUT~KOaxhpDvkPhNMABiuQxpL6lKlJCaYmhG2ogsVPfhVT~zm0F3TGvUaCCMwgkRYnny2chvh32BejJbEpcZUrg76OptPYFTxLc6RDpfQDBcRPsia9dx~7jaR1nPZSAHEiIqVFIPCMroKVLzCeEt7uHCJhZnze2knxvDoLPjKGANAq3uD86KdJCLhl6RdASErBAirlui1Cje86ec4gzfC2m2Nz82gwVA-6ZUjq-9J6NtsANpy8mtRl2zZtCwWL0a3nSzNL0jVghoNoAUYqwr4ooQEhiHtV0DATQd3ozYdfsV9kv0rfhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Success\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.288Z\",\"updated_at\":\"2022-04-04T13:08:43.288Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_}r\"},{\"key\":\"b9bb23469c776e1ec496fce687d3239e9b6e645e\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1754\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Bvl/Dhg/acqhz3mpwFXjNEm6/style_thumbnail_3.png?Expires=1655683200&Signature=K82HDA1LmlUMmnaTo~-ZpNitC94-0F8mZLR6OqLsucsf8JSZDXc0-CZbUlVK2oV3k0gnb4H7qvCzT~c2XIRQarRYZUEni8JWjRYnlnxXKcPXsT18qAYBJipehRBxeEOrtE25cvtS3EkDcVl5xRiCLE483wL9XrqCoA5zti7nxIMxEBl0pU9E-RZnVBUdVb8h~Px3-vMM1uK5~ufd9LLOrS8fX5Qh2RNbUJiz1Yp75WicWIPVP0iDx4Eo1oycPGm5uiyE78CtB5SDWvCDjSsXqAlnifEN7Xq5Hvjvi9Dx~Ygy40JKEnKgNJUuL~GCzYe9ybbWg07XQMl06sLsRn7U6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Error\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.278Z\",\"updated_at\":\"2022-04-04T13:08:43.278Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_}O\"},{\"key\":\"f8a2b0cd78fbfcadf9179d9393c9bbd7e2334cdd\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1755\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/UeS/l1L/kLTkQfH8afPRI9Cy/style_thumbnail_2.png?Expires=1655683200&Signature=aW69HFbG~Mqwmsi5d777zd-z~dAbsq3KTcbbgnEe0ZWYCCubUt1xdYdM1aXZqB-oao1mbWwWdS7OAR7AX0-kmsdExRd7VtBYuQ8a5Ao9ezzK-ue3nVHmAi428YXx3L4hLid1dsF8XG4dCzPP522iiEBGB~Fb9oke7m6LESz6X8vwj-w8aVpYAg1y9bXwlsAOx2FAHEO~GzM68v4TdoIS2wFemlvYDChJ-xNFI2mGaq~KR8Yha3fg8RRCdN4MRgXLH8pj9FwZ5ryDSwiCoDZDaQF8eBdlQoivgwNaqJeWR3fDbprYhTxmZrK5jicJ3kZDeVCNNGU1oT7K2HS894zxWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Warning\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.274Z\",\"updated_at\":\"2022-04-04T13:08:43.274Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_}f\"},{\"key\":\"3563ea5517a4163c6c1de605f54717f4bef18e53\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1757\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jfc/xOB/0CEsna82DSC4qQ1k/style_thumbnail_0.png?Expires=1655683200&Signature=dl0z~11s3NOiqynbl-ueFGriQyAiM2yoY2pj-6car0U7OYGAd51l93-6PsKVSSvBCtubOlf70x8V9SbRPrcz3D71thjHy~O~J~cM6T1E8ml4v4938SsTm~zpcSWdZz~Dnj5LeIBTOFm2idYJDR~x0u4lMZrRJ-qZT4gTDX4wm1F2LA7g5OlJxlBRkSvm6Jen4cBkfumRWXQRtfLVm4~IdQWoYgUKNGM~sLIeOzTWzaejW5s87-xgi0nU5VOzvpSM2msV0m0zWpbQU1W3ME~lnPNugzVvbWsksn~GUCw7KonvsnsVUqW-t3zcm4GvFo~orRKAMyk1OjhdSKamr6-KJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.269Z\",\"updated_at\":\"2022-04-04T13:08:43.269Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~`\"},{\"key\":\"7dc698985638593b3cadfbe549d8722ff356e1cf\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0RK/1Uv/c8kHCcEtfDh3qekt/style_thumbnail_3.png?Expires=1655683200&Signature=ZcwARndKS0pvw5KTeqFSczh8xSA3agZ5D8SJ8P9-2esfRWBMuy5M3eOgve8W9rURmAXo9gdrqXyOoRTj5ih43BW6oWGcOmRNYKRa~y-vYCLzbPPIKrb7qHTrVxOYW9hGeCGFCvoMaCKVd9O9Df4msAWa7aQJezLdamFrlzdvD~x61PrPkyU0wLg0q5rdvMb2Gq60cJhY4nFwdbj7oXiz6vGNUqg0a-q2hFMjZSbvarsmER1BJPHu5YUnQ0vyYvuqa7yTe-HDn-5-mxPtT0RCj-CuYrwkCh1ytjcJaN0P7Y4OOPrCDSun01mq5b53Z3FA5blb7mBxuF7sxph5MCuEgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Announcement\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.017Z\",\"updated_at\":\"2022-04-04T13:08:35.875Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"J\"},{\"key\":\"f0ed0e1f31512aa4bfb65cbb515b3b2d95c61dd0\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"56:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ARi/ubJ/aS4OHU7a4gAs51bA/style_thumbnail_0.png?Expires=1655683200&Signature=GSYyhn01337sD6YZE11dCXRIxGLKlYnZGMehefD7zxD3-OKALeH8hVejSBsElbUgcwAAamYoUmM6jr6Z7Qxdkcmqnb3m9nqMxJwjblrPWoJ6Q84d9Ipb9RLHlA6RN0MNVeqBSbSRY3SPz4a3eY--fmMrerIJqBLl1WNr-GgIaBiScq~O0OoUUUp2E3W1Q~I21PLM4eUv-8WOFw-kulHpJYpbg5B67L6n1RsGQXuG~27igsBs8KaL~sxQf3VedE3uJElTkl5VGbLo1aPzRzKxZZQREyWtn~ovURWT3xNCE7ixOuRZ5-6PvVbMmj8jN-IXgFd3zp4i5MtawuHAeOYXrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.694Z\",\"updated_at\":\"2022-03-29T15:02:43.892Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"RO\"},{\"key\":\"93de26f648118746f8de96fa32c4789e754bfbf2\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"135:1541\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/H1l/Trr/GWBVk9cdyseYesik/style_thumbnail_0.png?Expires=1655683200&Signature=hCJ~O1pW0Ig73e-xVOyNMNq5QDH3A2LLX5898cIGsW6jRI4GhgKRaqSAKguWrFMpDAr6M05cQvN9wH6MctrzvzukwXMYrk3YSoUMc3kBepDvvYuZ~zbTV8ieMaLAMQEEZD3pHGaw~QRiqyncYy1mUOnf68fhTNqzsN9oomJwsnKlv6DodrUls6mLw3viYkFGR4hmzFQxRR7a3iEieaaos2crWG2z1h8VyjprWxGGKGHpz0YhCE-Vmq00fioghK~JmeEZZ85Txhns8~YsZjExJIGujwJ9H3CXq81w--dQswT4lObYyoibop0WnSPX5PksOhBSsqq4uAyA8moIJoBRaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Low Contrast\",\"description\":\"\",\"created_at\":\"2022-03-11T16:04:10.510Z\",\"updated_at\":\"2022-03-11T16:04:10.510Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"WO\"},{\"key\":\"a88ab4b3339bb9e54bdc09a21122a226b2bd4bc1\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1523\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/onw/lKV/Y38wFhBzHiAbFoYJ/style_thumbnail_31.png?Expires=1655683200&Signature=cMx47loB~U-gHl0vnaw91Wm1gD4vJ8acZ8vhNCXLqsJt~D0Az5aY7Wbdk0o4Bc-UyZnIEMl-DQMvqXBT2Zq3m-1GX5w63Nfkzyp1VIz3UFb~-mjgUN88-H~MagDmCooye98tXhEQM~I~Z~SEdKDQPNSzSzgUoRkdmM3CfQHAsfd80ACi~deL~0Y7L91kT1fUxnkAh5cmki-e-ZiCxB9na8xYQWjGsFCPZNRtijyhvwn8kVDyCVx27h9RiW8rj1Joze5JOpYjZh7ld6a1R5WuCdXGiDKpNvRZLkO12fFOoMexDzTu0oF-KAI3vWny9YZIRuN-A5RW5b666-7dWlLWNw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Critical\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.897Z\",\"updated_at\":\"2022-03-04T15:05:50.377Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"a\"},{\"key\":\"22d0602a1439fa7882e6db9d6fe88a60a82233fb\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"20:527\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wSb/Q1B/Jq5Yl0CRbrrBqACp/style_thumbnail_59.png?Expires=1655683200&Signature=PwE5n9~YFuGnHoED4o4rXTMQgRCabyYrf812wwap6V3tR~sp81CulWKOL9Z9-y7hZsW3GhlaBdJbJ6MnX07-7iPhRZCuJdHU2o1MfDPdjaE~SDJDWQVc3ebeCm7tBNd7ORKcW8kSizh~a0EihS0Hmi~--22ZHnmzHnc~9O9AgMB2RdFhSepigbg0CpTfiQxcDLO1VjWQh96FHigbjwqj0Hz0MbMGwdaZ-tOs7vsJWzEijhesVaPZWzaDCebdm0IYcN1E7hFZDPEG9KWvjWI~bjJktmLklxs5GuuumUP0RfBibphf6uWWTsBNDTJJ~tJxPIFjgE3T6V6ThLzC~v4axw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.194Z\",\"updated_at\":\"2022-03-04T15:05:50.229Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"B\"},{\"key\":\"64751c5d925b493ca32a4dec99f8d4d39c335da3\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"115:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tEc/BmC/PTPZJuHnMmKm9Z75/style_thumbnail_66.png?Expires=1655683200&Signature=g04CR29wW4Ca~RyVert-CwQxJ9xVZWdcvtebGmrX8~isU-tasDt0L58IgTZf1m7Nhdzmn0XJgQegmGwRbs2b1cOtpkbOpavKon7HRC5jkgX-ZlcguuBG9H0bPYIwhQbSfIPG2Rcd2Q1QBZm41gcJQ-4jgz6nlUehvZ~SJZMj6ivbu8CqNTdOOS0Z-tl8adbNYOSB9XInrWRAG2SLqQYaTFj-6uUE28B~W3LDGvyxn3qiMe4Hu3zK4ln01Tszm0crf4N7ZnFHLjkTCBUC-6bXhZnh-gt8GoL7MP1iBbbKNNhPOjzz9n5GYKkYHHVYO9XhS7st3lLGWTzstCxudwbYKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Error\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:50.059Z\",\"updated_at\":\"2022-03-04T15:05:50.059Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"~:\"},{\"key\":\"e9c2d41f8020f30bc3658809f757cdcafd64b605\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1454\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/DwW/tE7/edPxTPkZfDWGbW6m/style_thumbnail_64.png?Expires=1655683200&Signature=DB1MiFcb2izyeqmGhq0RyAI3FaSbxncedG0Vr9pXKed79SLjI5VPj~Rm6im89lurL1CkJk~rT2aUuQ65YnTPER1cti6OAwh9VBIKsEntugbvkvpjIPtCSerPn5WC5jtY~pZN6RW1o7mQ8P~IHO57od~lL60MKsuF4OJLSlvCEfiyCcaPiEhyhFhsKKJdC5XHT~8xJqaDTfQPitIVc6eNfmzxMf-GjnpZi6MEScfDkxN3gGrTY2l2ZTDcIwm145CvKPcNZ6hvQZDXgaGZqA~mq6mVy8Aceah0WrCyloj85fuj8RSwxz6TV01UmJiC58pdZwhPy6Fnqk2~tn3QaTp~CQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:50.055Z\",\"updated_at\":\"2022-03-04T15:05:50.055Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"Df\"},{\"key\":\"0af166625472bc2108daad8015f44def2957f5ca\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1482\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aiH/Fdv/3fpwp0BHBqGAdlj6/style_thumbnail_57.png?Expires=1655683200&Signature=A43HV0PbqTGwl6Lg6Fu0GNVBXjObOnDq7rHlpLVT8y7X~ZFI89ndzuGPQYFr8nCW8GRAwxqeamwcHY0gz89Q4OiJlyGLnOeo7vLF0a-XyElENaTEDBDzsErS434SKZlN62a5l2nr3LB4MvRYKPOEspG8jcrKJzKyE435M5zj3b-~cv2XSXSVLJIapOJtq~SNdRHZ0xVbrk9HPbOoFVvn77qHZ-8dFzdRUVNBn8q4yEachD1f7Sk6PJVPwYUkGV6lNeVo6cN1r7MJTptlEwQw-037ITcLVbQFna-dqSIsvVlRm9M~3DDZDaNSTU8BKEjeAHDKPKCLBJiP4bW2LShoYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:50.034Z\",\"updated_at\":\"2022-03-04T15:05:50.034Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"EO\"},{\"key\":\"e9ce47407d36721510a5b1e68ea9049b5136934a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"115:1408\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vCx/MUg/qHCFv5su1ZfOG8rY/style_thumbnail_53.png?Expires=1655683200&Signature=eq1l7p~psbiGHbnl0AvF6j-tCd78-yBGtakiJlZ2w5~e8OlspX5uH9iuWZYB5pS-Jb8u5uHCUOBmAumofWfnckegKOFA4WKNTWf~~fPfCUxkMTCb9Gy3t35~T7QBVwsMl8PjgSS3OMgsdvmMjKO5U8YWzj6lazjn1OpusQ-~v~oMWigle5tMzeWTsh9yJQKsuAkMSq9T8FiwOEq-I~pYaYmX3EMMPre5gv~5UqwdK8zUjXixF7vv8cH1UqRL1SRApvh6i8nXHqjI~WJ-fA9quh4hPZ6W6-QGOJVmlaQxXBbInnfwaqByD6LzgEAH8JMuw--qD9a07krPY6dGCriz8g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Foreground On Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:50.023Z\",\"updated_at\":\"2022-03-04T15:05:50.023Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"~8\"},{\"key\":\"d8c114ba720612b0c7a0ea34f1fde1c12bd43b0c\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1481\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QUY/zLE/TuktSqgKz8Oadqm3/style_thumbnail_10.png?Expires=1655683200&Signature=c2U1d2lxkKiFDI6mccZMEactGZRggHCg1s6OrUX6k027JlA-h3zGArEag-vMy7Wtq4QyxmeAQlKTwPmPyyQDdANUgHrBfnPuywHMeH1-3qldyYvJ~MItxe5gAFUUQ6-d34LdZ2rsJFxQ0KSnrjnAN8WJw96r8f5MmVa~wokch5sUSMM6xgZpBUQqF1KCLTcT1YwJU2tuEwJL0UabA~zmOQ7DY6N9tCTTpoF2FMv~RqqKcF6yP7eynlDURxGO75ARKtIUXTDylnOI8ZAe7gzZNrwNjVnPD8dzaqhBBOB8Or1D7daR6XkpJhy2D8ZyEEHvcLUb6MkbWr12z-yPYEiDIA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:49.941Z\",\"updated_at\":\"2022-03-04T15:05:49.941Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"Ef\"},{\"key\":\"bda3c74fcbc261f38da164af365935af5531d61f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1452\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NrS/6oy/QHpyw2qNEgF2pUnu/style_thumbnail_7.png?Expires=1655683200&Signature=YHUgjrRq9BjdZMqfQL6ZoSNvfg44aomivMLHxmmjS8H0Fyr7FZCpZrxUxhM-GfVWazTxic-tM731yP7Ry6ZcDyBa0cdDnRS4NpmTfq8oEfhDhZhdrmt~3Nxe5cSR7YixHf4hPSiFDdeJD28SJtmkjGnWBUErMOwpO6txE6zIXsRAHb-VR5dqV3j~yrLJKdG2N5J2AF9yiN5y7ERUP8mtTdenjc-c2ITLG90d~m5WtujKD~DrTNTb-RtIC9Zz0AxpOhC4YHknVRm45uJXga19fqBQ~iXvDBTlO6BPPyXWPtxWv890gyzaCJ6QwswJ5AjWesuwxU3URDAlRBms3eq7vA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Hover\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:49.936Z\",\"updated_at\":\"2022-03-04T15:05:49.936Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"B7\"},{\"key\":\"a1ad385b73cf071c28eb541c398925dc296d1599\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1488\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rig/cA1/IZa9Y04bpyY5EThT/style_thumbnail_6.png?Expires=1655683200&Signature=asgLhFKLFNmafBlE9-EtR8iZGXdjZfYrhlWcmmlrc3J8Mb-IQqQx1HqCzJ4Cf3cWz64CK9Lw-UzPsXUW~5tY5ygpMwdupCn2j2pM30jJq9o9mFzunCDiu-ExGpx78jFUm9UsZbAvA~wKBPqELSvOwF3AU8zkyeyAtet3JhmKxWZvRmrJDDJLleLxaa6YKMbaCrF0BKPgSFxInqmtIoU3X~a1pEpQE5PhibyMTeOuIynguS1DBkHBKRHR5QrQnrZRO7fYgq4EvavMAzCO59XDrCRk7hyxzG45zxkA7puSWwsWa-uF98WtmWjRTQ~fi9ZG4Xr8nJ~1XB5d~1jE-nc4Ew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Error\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:49.932Z\",\"updated_at\":\"2022-03-04T15:05:49.932Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"~;\"},{\"key\":\"3d67b88fea60c340552f67c0b16d2ed9ce52e705\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"112:1408\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/f40/tEa/41IvM1BlyffaX4oo/style_thumbnail_0.png?Expires=1655683200&Signature=ZXJ5WcSA3z3NzwMOLlyuJ3Yr7paLhwzEqkHHclJ8kSTNyMkMNWUbCXd~5IMajg4Dfa8AkVAVGmGoTMerWhsdZQgahwCOQqKM1RyM2x6wveOqnxsVtURopakKUlfuDNeqLpe4YyPB8bozPbEh5aOHh4HsXZ1WgbnlJfZMv6M1d0ZzjX0-Hbi4HRWqW78csrUla~huISjKk3-Ao0Zy96F5o3oiNXHez2SpPco9CNQII8mcPwtVdJoFX2HCqOSwQ7WRRg-xblX98ZLx57hImlMJkXOPcZe9ErXtrIOvMDgkjAHN2g2uRPP7TVEQCW4507p6j5gSbHcGyJQvYSaf4fFQ-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-01T11:43:28.189Z\",\"updated_at\":\"2022-03-01T11:43:28.189Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"BO\"},{\"key\":\"463ac36744f2753ef62a277fc816a14d2652ac98\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"17:789\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HJm/REm/ugpS2G1HXe9mWruQ/style_thumbnail_79.png?Expires=1655683200&Signature=KMVj2LMrwJBvaHSuMyeKnDbSYmrmNQ~AkUuD-V32YC6vgSrlBBlCGLGGESatDmVb~ETd8sp7RbwEkeq26guwO-LHxDH02kgsDf0gySVDh3g5J1q1g53Z-l5ZVYElN7hm6XubUSJoNHT9DH5wVDMHKFyc5RAaTdD3bZHfl1j5m4ZgDJOahhXa6DzzjMpex3Kjd9jkf5f5r1Bk7oegap-vH62exGtDrxvFuHzepnQBTeF16Uf6y0k5clyXpE7GP0scL1QnUgQ2lmsrk5veQLm7WZqhJ-Mzw~2p5UumROzDOXqy9CVSrDpwNdUxU-aC9K9E0VjXdZ3Av4TdLm4~pfv-nQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Favorite\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.093Z\",\"updated_at\":\"2022-02-28T13:59:37.646Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"?\"},{\"key\":\"3d9825e2af663ad763f0bd14af0f2280a81022ff\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"17:759\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fv1/13h/koj8dBzRlqKgGxx9/style_thumbnail_100.png?Expires=1655683200&Signature=TAxNbst2NG~Lqx3K6PMspMpYOmHPH9T8bdKTYsx2S78tgQe6lxtF2~Q12-EAdkJu-CsUES9Xl~Q0wy3LwcDWfEDGONoftHVPKjc4ZFNUigOWDoI5UzTRyh0ueu0PaCUIxCZ3YDVAG5Msc1BV5DMxXpFLnBXavLvxX-ouNB9SDOVrf~dHlTBI6qoKHz2JTZSQVvKQyRJ~kjL7cnX~UfIYdspPEl5uvNtu2LJqPiRK56okXNUAawg44UDw22uh21ru2CWt~tJbrx1WgB3UcbexX-2AkmAyKc6GW9Rl2RjlNXSql2A0jLK7YknaMwgQ31UAgdWzzNWBejB9gvUO56EZCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Link\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.220Z\",\"updated_at\":\"2022-02-28T13:59:37.639Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\">\"},{\"key\":\"3d7c714e48d65014d2e0799c6caf0dba81370179\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2383\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QJ5/Ttb/cuGYTQ9gjE1bIGTx/style_thumbnail_85.png?Expires=1655683200&Signature=WknvSb4RdQN5RZcNNv0MZ3W8tW4sWJ8wWsF3DDB9Ap-Mo1QsqrFBp11db7W~a~xlu9M9-HzEZPBGolRLzT~RkbrEldiBdfShSfkWtxJBqxVZBMVa6O8X5H492KA72j6n5H6J3ufz9CIT5pAZbGDgCeIfuipkJWF~eMB5LPcbhg20MD8XEa639weVGEEWoQ083~UeL-a3M0utDjSOwTdL4mnIUIEDWj~gdQ4a5Qct66TGUyZ4sOJDodr5T35RPtJm9RX8x9H4RWj9qaoS-av69kxPMnE5d3845SVxnaS7n6nRXO22FXpFWCblXQ8TZ~W1UbSvIZf~eP~1wbG6QzEK0w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Muted\",\"description\":\"Muted text and icon color\",\"created_at\":\"2022-02-25T14:45:34.125Z\",\"updated_at\":\"2022-02-28T13:59:37.632Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"1\"},{\"key\":\"3bea6bd887d8046722e43176e6f574ad07e92eee\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1514\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uav/f1M/qBtoYSHh7r5zjNUw/style_thumbnail_71.png?Expires=1655683200&Signature=XbVZ2Aif~yUgutT4GdOmmt2pLEN5ZgIrkPOuFL7MTYd24LiFGKdcngVobrSU0O7e4WAemwAeU6k2ZmnHU-xbUbS9e1mwapwrMI2srdJTXWorpdckE2Uy~OhKmQA~XJixze0iCnO4OReSao6rMWE9NfT7Z5eovpo3A9buWiEg91sCnfmFpmGwCFWk~sR2ShwIrLBcTz~2xGgNUIie8J597MU5LsI5RaFDgIZ~yC0H0A4JVCMmcxzmqRGpCCylJ~bQMERKVHTdmARk0r~-vUo0vtuJiDCpdNqJH2Jx~9gQriqBZr5S-FKZqBIHJd4XE9hhgQcQGrDLawzJYIPLkrwWbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Operational\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.051Z\",\"updated_at\":\"2022-02-28T13:59:37.620Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"X\"},{\"key\":\"366bfa820880972ff53ca815a03d6423de225b55\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2372\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J0B/ERU/tjTaliiJMP0UIL6t/style_thumbnail_92.png?Expires=1655683200&Signature=WTdWwlHfqtphnUvqBNwnYFKv8LjlOv5AVApgbQvvfA~TOEtYVkQd40yEplBgs3dDJR8zxgGa85dasUqkeoFdyazGV7c421DJZ3ZMX2YL1Nu9yfFJOz6M7uLfRFATknWSLaPiUaOJZrkCb0coyeTwU0Vxfov~merkxlmXDe8TAAxCEPS5KBWQny~58g7HP2xufizgzvz9O9cFvQOkJsHpJX0T2QI2gflK4TAalDL4Dzq5wfz4rr2wGXVeYETP5wjjp2U--Ss8WYH~xj1vM0oXNQzsyoNvqDbPZMB4PnAwH6lNOIG5m~30Uib~A1DWO4KTLAitbt~immDWL8iqova69w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Floating\",\"description\":\"Feedback indicators bg: toast, callout\",\"created_at\":\"2022-02-25T14:45:34.177Z\",\"updated_at\":\"2022-02-28T13:59:37.608Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"%\"},{\"key\":\"31710f2e47bf07f7218188f05214c6d05e500a7e\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1486\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/X8j/Jx6/P2SlgvtGZCVYHg5w/style_thumbnail_91.png?Expires=1655683200&Signature=AdVl7YSdkzdDKUtNW68CW70mRnRQbpvw8DYrjEPAbwVDuwdW4UXlo1LuEPsu~vVL-l325x1211w~PQL95FtdBZu9ajiK7YqeuAiE-K1s0PBpvIcUU3Y0mRVJ7c0bUxssmIMLy68AGQjTAmXqD8ZPF6S7I51NQpi1PTRRHv6k3h3yPe~Jr4xHo402IMBnvaFtgY4YVSDH6IVJ5fwMsIJd~IhcKf0kMuKxwjVfmv2W4bgrLMQ9JoqF2QssiPtFtYauxEZlZdnxe~xqB62C~zsonPd14TIpRg5-PQP-efQxsIQUchBglweye8SZtDasCDuKfp~eup3NfpMEBwXCT1-LIA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.173Z\",\"updated_at\":\"2022-02-28T13:59:37.590Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"V\"},{\"key\":\"2af066b7c10d2700b2ca84f4c67810a5a7ddbe35\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1436\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/SWq/Sic/ozuLH3ypyxnjJCEr/style_thumbnail_58.png?Expires=1655683200&Signature=S7rNFsrpPuIU0Xbch6W5YLRollmMYQHKXm9cVmRIKK0jBOB9f9K-dS10tVtuoDtVi5GMIXBSIhQXRmmtilEplncY9l1OVd61HoKQVTZ4G9l-UqsEKDlxC90mzrz~7nF43nreH3r4CGAITdSrgvl41h3krgVuWDWAgqpM2rbNcYR9LsaZPUo0kag0Sqk3u~rDg2qrzVmpj5y3S3zz3vEcy5mNCr4ICWjgxAT3YLd5Z8GAwfprEFZ-8TiqT~68HyMPYjr7jsx6IRyKCfIeg3eBDvbp2igj8IpkG7TCxd7SkPc1NJdkr2BrBCAfF4I2fmyoqo4a7Q4pRclhLwil-U3PfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.989Z\",\"updated_at\":\"2022-02-28T13:59:37.577Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"R\"},{\"key\":\"24ce0abdb3409844d5fddbc910369e58288b61dd\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1086\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PjI/bzP/hk6NWK5c0YuAur5w/style_thumbnail_27.png?Expires=1655683200&Signature=LIGtM4Y9IWLLNMXs5l1cGaxZv1L9AlrYxVvuk2plTiZalC-LSmSprmbVybkCSR-y92mYOZBMK1qI8Ge71ICkL0cj-NCV61ZmQPPD8Pd3c4os8fa95dgjmbw-f9x9WjlT0jog6WkkbLSlA4tu~JPeIfNVG22trV86pelLcHvhAUE6h6JHJx0dqHECQLfpwtlSR6I4NabGJ~BGMdsDt6baarYNgR5zgPju7q-tzt2awWPImJU2VLd11VKRicJPvtmVuD74j0T8IfPV2RcexqV5JM1WZANDw7au5dHhVHyCWqKxGfGpasiR40AW01M1eZDyZuAQOVf7TgjXBvZ-6m7tjw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.825Z\",\"updated_at\":\"2022-02-28T13:59:37.571Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"G\"},{\"key\":\"20f795acb1a6aa4af9d99711c7637f2824a61c45\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1485\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tXv/mZ8/v48WlzfxDYyaGdi1/style_thumbnail_82.png?Expires=1655683200&Signature=MPlgJwaH53gfQW28zN2vWHvbYs00wpSiZZ~Fmd-BlZSt9AIm9n00twXBKcU~tySqtadw4BlQQXbdTyOF21uefbyKOBRbDYRJMu2uLOcFAvo9uAPbDWzHJBy6elUxhuIIefnHyOqyIN16FVpg0vHGg1Zzkhp1AtAFULYcRkeqUwlDU12IYEYg6Ci04C7Gbpmk~U4YuteE4twU0xNO8ctFHLW3rMJPea8Wvm5fj1vAv3HWDMZhV07wkdKVzL6Hn2PT5Qj8L3qRmnhlFgNUQ324c-i1e2ejhCKYg2OMBy642uKbXGNrR0Pljy~AlBF3kJjqNjknUOYGVve371CkTFfNFQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.110Z\",\"updated_at\":\"2022-02-28T13:59:37.553Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"U\"},{\"key\":\"1b34b1497234d75bde517f06186855a94f151e4a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2384\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hLB/Usp/fY9eN0pDtp7fVpWq/style_thumbnail_29.png?Expires=1655683200&Signature=eQECU0ZF~oNYYxKZFO76asITvMLphuQ5Cu~CGO-XSe2nEyow0CBX~B59IWRZ8~CAZ7AG~NRkTSynDkYOx6I87lPgqprWOBDCioEoBkHhACqFy8RG22jrLHO8XVnicXWXWVo0ejJokP4kNAAhjOH86j1~I1oJk85rh4oU8O7yw-~E8Bmq2AHF8N83izZsKMWNUwsd-cNpJVZqLgngIbkIyjP0-BR49En-fC27Bplgl8N3SOvgMEq6INgTOZoT188h4m7SN519P6j6iE4YVI7BhoyXXN4THDxuy8KR~UijUY~fOoX6eVv9C2BEmkfS1QQk7QL5a9ScEzXjfWIIOlyD6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Disabled\",\"description\":\"Text and icon color for Disabled elements\",\"created_at\":\"2022-02-25T14:45:33.834Z\",\"updated_at\":\"2022-02-28T13:59:37.517Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"2\"},{\"key\":\"12b97ec662a5c30cbf92d3f90449d4cdabf47d7f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1087\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jvn/R5x/IYIx6o5coa60upYs/style_thumbnail_68.png?Expires=1655683200&Signature=hw5nd-EFLcwM6cQqHQTIJCY-8d9TdseYvEZw2M8SN8rQEzMBgrWveRlZ-nTUh05djA4~lDozwfuAH3ivqulP4TCg0g9Z4kjiQK2ZMK0nYTOOLOONiqOXWZIqQ1aht9a0KBUMF9axYT0Z7aY5BaHPt~SPfb2gwravpZgCDOwkp8Vjsh5EhLbSflOiGD~EISCjptj8eJWe-qJCmfnlWbfIyvN9BlNHQo8BXrhNKBURCDQiS1fg3j4CXRwnt6sno~Sj6-BXa5rkemOYTtCndlVtKj2-O5xGb5f6nUzsaXXUaUAyv2WwoXt6wFd-e5hpmpgDIZ2LioFOgOmksIPKmdGV1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Text On Filter\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.035Z\",\"updated_at\":\"2022-02-28T13:59:37.498Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"H\"},{\"key\":\"0728cb933b9a60d401644ef8f3d8bd5eb9a3d124\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2379\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ekp/Bfm/3fPzAIlrNTyrCK6I/style_thumbnail_90.png?Expires=1655683200&Signature=BIaHjJpOKNggMphROgVYM8rtO6ruU4eF7gpKFbo3nuDbWQKFgqhze7UKo1SG7Pi1jF-aBlcb8RdIPs2nsqL8tp2Ph4jpVw13ojJEYfF0-dMfz0yOjTP8nmn6~n-Ds3qQQoeatEpSnZTLSFRr-XQaig6nPCQLpdOtQzM-ELiGKB36NVr3yMn2ssUwwv-ADIPMLfTMgBb9TGgtLAmESSE8El5elpoc5r87QQoOPhZ5BSz3Mb5nhMUL~plNPNNDz0g2j8PR7GfmF55x2j3R5e~ZY0jHU0b4jsOMZlWEodyXWeR~KydTwDp4hn8DTr3WSeOj-~fiNE49rrkgudz5qqKWdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary\",\"description\":\"Primary text and icon color\",\"created_at\":\"2022-02-25T14:45:34.167Z\",\"updated_at\":\"2022-02-28T13:59:37.486Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"-\"},{\"key\":\"042e24eb81e667f3cc88814ccff64823e0603874\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Z37/DX6/Fl5Q2k0NpeeJCaE6/style_thumbnail_75.png?Expires=1655683200&Signature=XUjsSqMZTf9lCCHUWi5D~m7kDOLnzJw4xzzswpMmTlO~P2RsDwoAIdteOBtOUFUwFHrlD25L8Y9H7ePGtu-t99t2RoYwXJDdGJAcwHXbZj~FQMtxACfbkDQsSsVyk9Z0Aoir1CLr2zxPXZO~M9MC5BdEGnFLH0MSD09W9FWQlYxR5TbiZzt6bMKGEei5guR0lDom4vilIIPNkE3Hx0sjerzraoNYYCYPHuvxfhLpLkiBHwll~3cgI4KimctLD5HDD6MzxxpLM449QoSQMxtpuhyS2wgjmqi46QYHE9sZCpk~MiY4N7UQ2YMT9RcjSkJhGis2CkBmVYLLVOYTzBEj6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unknown\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.072Z\",\"updated_at\":\"2022-02-28T13:59:37.467Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"\\\\\"},{\"key\":\"02fb7671adcf8451ec4b892ef5c3da1175eea4fc\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2376\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1jS/FIP/orLGdFUsDmmbDWkb/style_thumbnail_103.png?Expires=1655683200&Signature=gLtSfGAPWG9ZZPinl5y93ZUWN4h3rZTaUnYdaP7TxbP38hqYCx4nNyvzllF8vIgfvk2LEc36WLEi5JOHRJG8dB1qqw5JEnPjbCfiiQGUnFqmp2v6-TeNUACFNOCIIJ5jCUMk79BtCkikZJmWITZMOMso4ASrp-KuFQGWYVricn-60TPyVP8Ug-9fbbuaRg9Kk1jLWvMRIKJDQxgqQteKaRwP9zVjuCGidA3QcP~fXytM~g1TH7QCzC88UQBC-k0MiYuUaPJUPlnu2NE1X5H~HTGInlHSb13SuIdX-p9BSa-hzG8qbvpvkHfvfWGoAuTX4SU9fOTCQn2W6ikT7pdAEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected High Contrast\",\"description\":\"Background color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-25T14:45:34.235Z\",\"updated_at\":\"2022-02-28T13:59:37.460Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\")\"},{\"key\":\"ee5f7bdfe035208592d7dfb7eef765187c0b3ab1\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1IN/ET3/w8fj7KIzBf8qLKGv/style_thumbnail_51.png?Expires=1655683200&Signature=S2M8~U6NCZPqjtdB77f~e1Yandk2V8~~6DT9hswwAM60M6XnGJcDLQj1UZJzhOjZzOZcyyKvwELolLYVbn8i741HHLIGlwa-yqBJLDDscKHK8yvb6Uz1DBD2h~YYtMRzNSb6gUARlv5IwL4Qrs5nv64XFKkQO3qvvCCO3pr~2f9eHo7WC8GCo9QTk7G~7Ofv2qJ2AWFEsna3X0LJmDLlaJ2ZZGaVoN3cS-5OkyYUd7oSNVno9WNSEAcP65o77lS07NkeShZHe2ebM-n6hLGzIvo~7ZxnRgyQtR3RUhFbEsGwqheI6QxUyg-lt8keY7~8ueZmpeuFDbOp4mjz6uOPow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Text On Plain\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.224Z\",\"updated_at\":\"2022-04-07T16:01:38.701Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}f\"},{\"key\":\"eda66544d9271ff5a8cbc5bc59cd6812f70bcbdc\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1315\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/K0c/6vX/4f5Sj8z0xZ0fPvIk/style_thumbnail_28.png?Expires=1655683200&Signature=FBlSsbMGK~WThhsN66i~el1eC~J11wwzczAmueSOgcCkXLjqyfjRMYtogbOE-AcAjQxpZoECrJw4nHmNiB3T-k1vinTicEVTd2pMbTpj--FMl4p5XTBp1aJGcnEXlsgfeVfD4NaS19SV0cz65n7j8NOBRkDzF00mTE9FnCxVO0D4RihFHVxpsqZseyB0~Wjcpa9VFQqlBTIckQqLjR4wrWP2jd5Sdc0c~jyju5P9bxH7bzLdl5aax0-4Uy6ZdoNvBeoy-AtcZfdzdDlhl7na~RWRPhklo0hz5bOywleSotRQvQF6gtTplsIJncJdFP3JwWe7xbC7bcWb3xWIJZO5sg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Text On Primary\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.872Z\",\"updated_at\":\"2022-04-07T16:01:38.695Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}f\"},{\"key\":\"ec027d791e9eb840b1f623af04ce4877965fce21\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2377\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BWa/a8e/mMkaAEogAaa1zOTu/style_thumbnail_53.png?Expires=1655683200&Signature=DQweS~IF1njvws5z~lKXNyFRHcV2wYvD1Qd4QgfTzt5lQ4toLbLsxL~vhSiN7jorERInZ8xrQYBdF6hKuA2d1rHTozZ4hxOOgMb84yyDpHgQKVJv~N1O~38YSVlHsHItmZVN2wYi0LlGwFBWTh71~g3~fLGJzU4ak8ZpyAyAxNi9P7wBsBjUe2XY1BLGIvw1K8DSfdqDxsdH0k91s6meCKe4Zl8XhElro5Ubbw7xYy~a32C7cTD0iLyx2PxNRkORgve3UeXmtDmqrMUl5Q9SLTOhih2p4X3zVJ7np5nXmbEdZH7CNaqS~ZnsULbscWWUTFsHj4zH5taAH81UQ~-xEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Main\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.245Z\",\"updated_at\":\"2022-04-07T16:01:38.688Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f%\"},{\"key\":\"e3217c3ed9382bd68c788e98695eb1ac88b50573\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"30:1310\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6fr/Qwj/StknVLhYX9oCO0fp/style_thumbnail_45.png?Expires=1655683200&Signature=fI8yVwIDcKuHOP~5s4Yjx-9b8KlxHBEb5b~8cQ2AKMzygOSA-2Gn6wHXU2sFJbBDPWs1gmAZ-rMbYA3FtX1t9w-igjcAlMlU6JVtSI~akxbSvSwSKXWv7qXRn2D8bqn92BI1kdptjCv~EFR2JoLGr-p3f9H4GSmQP1E~xY1ZD8BGH2S72eZ4x1i9CHsyLWfs6aEQ4CRQINajXdCuB1UBw387huwDmB49PU35oBjx5thE-HobHPaB0KWeluKZwsbdJ4t4lJ8bXB76Wl23EALPZRWi4lh0wayNl1lXKd-ySJi~gPpCkwCnlcnIAuGiEfSx2RcC5DZaAH0z~YqoGHouaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.120Z\",\"updated_at\":\"2022-04-07T16:01:38.682Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6x\"},{\"key\":\"e1b1e748bdd46cb5e5cafb9c4a4c89ee8205a2b8\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"36:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/lJF/RZR/rQ5dOibewfkS5ndo/style_thumbnail_17.png?Expires=1655683200&Signature=C9mkEIRUVdbBUgk~74Cj2Qfn5t8vwQUPED22AlyJ1e~69yDlyEw5siSgutTEWIfcbo~ayPH2tKYjpJlYA3L06CMlqLi011qGr0aTBfbj1n1NnAGs-f2m62~5kYnL~PTSFebHerFm9FNZ1YjDyE-oMKnkYfzZm-NBtfwvwWrcO3fAlvrCnQHS8M-t-VMjjSSxhhE2qTO5Vy8nFOr3mWSg6W~gEO-iVg8Sv7AZAQcr5vFBtEVfOok0Hz4AOgdVNhDoILM1AdUDyRxJXq0Dwt4hixM70-p6S-JPP5LT-BUL-KWPC-x7NpAgxu0~TdFnjwjOk2zkqeLE7UZZCG5iKiGLCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.797Z\",\"updated_at\":\"2022-04-07T16:01:38.676Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}{\"},{\"key\":\"ddcceb2c7fdcefcb92b14b14c26ab1a27fb73334\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/r9d/pel/kjYNbh1fIgwKsrmw/style_thumbnail_34.png?Expires=1655683200&Signature=FrHIZsVJWQi2YgZxkx4I~uVw57wb~hdd27CDEfhvrJlwHLg6ZlrXfptXUtEr-GT1rXmDyafdzQ9-WZV9XL1KX1gBx3ss1Z5QBB8EgMJdrGSLzjYl9-8rgj2-5iuBk7Jf7I89V-JrpIpx7eQAVWaGPImb9eAVazvPEjvVRkM7w~61x7wqS3H~eQr3yvldSvlsB-HEBUj6sVOUOJ95SLxgj8gpGBBmWi5FXGA3tP7004G3z~2wq1hu6gxZiOeDRB5StkTDhjzql0SuH-~V7UdA~JX0R7-cPdHrXvDnAy4OGGRwxJZYIfv~fc3hNEi83wgvJQOVxyJIpqiQAvZC-UnjxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.922Z\",\"updated_at\":\"2022-04-07T16:01:38.665Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}{\"},{\"key\":\"d69c3d0141cca6c11f698c8143c90190e6541076\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1312\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bwS/4ny/hNdDfSrRjDdmTjvu/style_thumbnail_31.png?Expires=1655683200&Signature=AAZCV0b5FT94BSHyGy5clQjfz7LnJJeqz-DB2eOFd1InafyDv83peRbkcSAdrwcdYDwvbKm4-OCP9GlTc9O89DR3nC1A7bsi7ITFcXWqx~D60RwEyM0hpi9VVNNUgqkby3vAByo9Vk9hO9uDue~mmx4ZyEVdi3w1yS6N4FQtnfDN5mXsyqWZ1UVzq88mSy5CPAdoeb0p9y1bzPhiIRt3qCRsmNNBRFxqU-sYwFimBOtY9tqtBMGaJw2BPZgCLi-su0c68OBOrqzjJqD6TKJdA-wfxLLH~nQAE07V6PECiFmDFeKoBDmrY816JjFTyTNCDELRcmp~ZQa86tNJC~-v0w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.906Z\",\"updated_at\":\"2022-04-07T16:01:38.660Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6|\"},{\"key\":\"c93e0e5d2aa83e30578f42ac884895c21d4a8d92\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"28:1308\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xXo/7Im/Fsnay093kpvtIRcj/style_thumbnail_39.png?Expires=1655683200&Signature=bMyEZ6-cQABfAqj0XeaIGIxk33aXPPoqqIFp9fKvnAsP1QPe8oMid4vSEuoCoDt0kfCzjMji2cOM0ikAqzzXIuSlY3adOCIqTscUFeWNpgsmyVCZV~9ecpuUYHUU9INoISWRtJ1Zta3QyzNEr5J5leTPtO4nxY8hoH9MtgWZ-IsnDHw87CpCFPR8qiMAD7EYZ5xNDIMIp5ml~L7o9CwS0U6uA5oSXtLVZDrNgp2t7sj5qJ5prhFx4fV3NTtjVVqeF8MZzDue6-In5XQr9jZVZ6-Lit2c9kgWfckFuhh82c6RGrmi2v698HmWYfgLuNleUqy2Aj1Uy5AahLgO0QhXJQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Text On Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.816Z\",\"updated_at\":\"2022-04-07T16:01:38.655Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6f\"},{\"key\":\"c90d6df3eec9880fc6b055f921a91ee7ed0f87fe\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"34:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/l9w/Ism/iO5aiyecNLGieQHR/style_thumbnail_36.png?Expires=1655683200&Signature=dpsxjumORepLLRCFOQ3M5z97vJuEcRdFBMsPg7mw~nQuOcHdd9icNRUuAWH72WU7tZeiInS95nlrmf1KIBXJiEi0Eono4zxQnQRFYQwp4xSmbZGjqcJ2zp-iLij2s47dWjmRyYEXPofQ9onkxRtaoRD4vAfPVqfJ-qsK8Gdvw3xL8dqgvJF53EVfKpEtoP2Z8NDXy4iVl~ixYSeqbtAEPdVdSBq8Gkd8ycuQ9zhV~grrUUYIlvh7OD~h5vNkpo2NWN46~FZ5IflImtJGgqkgz5u7edOhkkPeeFXPYUtSnhpQNL9hog5TuvTjQj26d2nRRze3WX4ikg2sLlY0tSGjlw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.956Z\",\"updated_at\":\"2022-04-07T16:01:38.650Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}x\"},{\"key\":\"c805071fd41804920daaf2d7b38ee20f3c756756\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"34:1409\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/YYO/7JM/WXjFnKfwFV6bzS13/style_thumbnail_32.png?Expires=1655683200&Signature=UlTrPY3JEXgtDtUuJ305bvXUiZ4KpYCnKm2N9l6YJ-SswOdX-HzRkWwexnDeQ8lw4QyaTWapcLGyTVUC1w~hJxApjPrfS~jh~qK-jDuotHufKXKirhCi4m4RkHuNCJEc5BCU2Lldv4LJAEJrtsxG0wbquV7-80293rDHm-7BGmk8mf28mnVOreBhwDuNcCPbYvWFFDf795AIDn864WeEh5J2Svb2PPqqY495DH92a6wXXiRwERxeyZ36EjUiZ-JTC46G3xEr8ExQ36ACd-zCLd44kMNEaUz7mZX~ZM78qZMT1jxCLrxmaIvIFsovFBlg30cWPvqb9u-5SBCRYNQ61w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.912Z\",\"updated_at\":\"2022-04-07T16:01:38.645Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}r\"},{\"key\":\"c082879b14f1db8fa5ef036fd3f2917185006c30\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"28:1302\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zAQ/ttk/b3BR2KmAhHSyCxMg/style_thumbnail_2.png?Expires=1655683200&Signature=EQwnKk1LUwo1nxnHiGGKsH-FTgZ2~mua1A6PWXu9uzFUjwtz7Fe9dmCmiA6J8LTdFQDKFlwXnNP~0vw0QQUnC6Gh6XuEZxNa~1drAlIJBd18tExhGX8KTn23n6oR~6MTEaLS4y--2DidXwyZSZ5dFr8xO7IZXbDCn3KgpzHQ~4OFobmWKhyciT-47R~Y7bvxuo6q7yYIA3utsea3Z8B3DhJ0Z~iyxuXDtpUF0Vf3L5cVuu6KccgpzsEvV5XBG91CfWSYLu9eZBNVuc9jFmdPxPdCiWEcuUXcInzAwEgnfszMV~V5OesktwIDmR4num9PzSxK9VwLjKUVfTTIPdbxvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.932Z\",\"updated_at\":\"2022-04-27T10:29:34.641Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f+\"},{\"key\":\"ac49b1d5bf17e771080bf2449174368066b96507\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1467\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mc0/bte/j7bqJUPs9Afav2EG/style_thumbnail_40.png?Expires=1655683200&Signature=DTQSFwTQpaxKYzxCnK~tX1qJTt6QzbhIzQEe~684DxmaXV7kO9WyNBCfe4tE4iUlnadWNHYwthnFSSoNMr-VDdK-m0OwbotA1e5QCRR3qZuo9UWEhERoTohs~lljHPKt0lzTuApOLUuGw9LRsQ1NQ5JG1WAGsyS8jxRLAk7jR0X5x8Ptx-QLRiFy1Q75m0XH88tT-FKf8VxZjLEWfRy6Avp3h4Tp4BTN2os11W9p8MF5q-e5FA86jJTbefv5OPfHoiyb~TJG-CpbL2zK20fc-zlulAvAHMPdp0FwdGB2p4IbvW8DiiQjc0Qs57YVZvY2UTojLHTlkAr1Xgyi4ToAJQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Multi Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:50.011Z\",\"updated_at\":\"2022-04-07T16:01:38.631Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f*r\"},{\"key\":\"9da069f424f41318b8ffeb37aac34882b3495578\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"36:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Zhl/erC/YfLxqkVwMsTVmZa7/style_thumbnail_46.png?Expires=1655683200&Signature=fgwKD3oC3KW6gVz4Sw2WuHeMG7XJ4hshQV6oxbhM-0LPLJfXRC3i~gtxjlpfZ~Wyun74pgB-hNEkaMz5cF4kKqzF2BgMMU3zDSRYgn7ZQ4c1ihmDQ7OVS9jqnQVOF6BGDiqYqjdU050Z3PDuQhnZ0U3xypQKMPix~QklynDxQfu-0nDB8hsv40qBkL9olpHRPIddplcLHSFZvYZmn16cjYdLovESPK08n2ZKHRVdd1V0gHdqpCoVQ0PKAMW86yQoAq8LiqzSQQjyI~1H8Fm6CQp0MRyfwOaQHpU09Xl0NvKnO7PG1-SrHSeZ8VxWg3YBYgl6YKaXZz5xUEv1qKQYzA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Neutral\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.183Z\",\"updated_at\":\"2022-04-07T16:01:38.621Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}r\"},{\"key\":\"9b2f399135f1519efc79f8116e164862cddd6ff6\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"34:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4e0/zLN/SkBx7GGuTy6mPBCl/style_thumbnail_18.png?Expires=1655683200&Signature=W2TjGJGMICfon5L6GSgdDuYA7jWRkiNhsbxszAZHrC8NlqpBc~Wu0gDaQH6mC7hJ8I95MT07wWzxt5ILKTH0eURwBVk0Lco8AtAeevK~fDelhUW1YUS595b2XpHLqQTsIS~3yKy~gdvH0D8Edb6gPl-WMuwlCCWtPXw7Q5vd~L1oToMK-~YBX40m1pOSaI53Ve9gW1EDdiZ9WBHcjsVd7yBGPi3bj8aB0lcsPsnfE0Npvi2x1JDlHcUmKvmtb4OSsNgV~v6iJnUuKNmxTIwCHQYXuBE0tV6c~66u6E4CYyIiFH~kxnhAfZeWpbKmarG63VPxTWzKGoCG7iXDRoYaGQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.868Z\",\"updated_at\":\"2022-04-07T16:01:38.616Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}\"},{\"key\":\"932c2d6eb806ec55c98db7863f750c3d8b2696a8\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/t5K/qfZ/GKKCkkTmKxW85B1y/style_thumbnail_19.png?Expires=1655683200&Signature=XUwlNXgJrGfPqfAIZgafUGmdifr0GR76p7UvaQojNadlQHvlSJvXDWyTKVQCGc1wssyRy5i-lxmN3iLMdsmtFuCOix4t57nuhP0FMvNomlEiSzofK3EyYEIexnJAluDIrXcw186z5E46Dciq7IsAQO78Z3HMUfesSDJAXDaa~UVs797ON0xAyg8tkinlQshGpR1S4C23y1pCH-DBiClXhs~8Siiqfu5MJY7zijQbGx2divj2wTh0jZz9xo7bUIhNzq5an2iByCC2U7CCOZhCp68jABWGZ5WgVLsbjAoRFHtIwWjFhMtVS2pYAbvXDhbno5I~qJzHL7K83TIn~JSUvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.863Z\",\"updated_at\":\"2022-04-07T16:01:38.611Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}O\"},{\"key\":\"909280bb96c0c80f7b5328a8a9091a127ab849e9\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"61:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vcV/j77/GqDImAGrtGrXIPVm/style_thumbnail_54.png?Expires=1655683200&Signature=bJfNNG40xmRF1cKCCswlGCP57rbauW7x~-S3YD-JJA-WgUcdeEuNSK2yPf~0KsWIoi6Rp3g2iLRoVIQ0DqmNh3LEbud-pwCV6nU~PIQUYPGpRA0x2mNrs70Ptb0h8HGcDA4NTC8Achmz7CvqRbZlAn1NKgEanldQoionarrRm3ylCxLFk738A-4FOifIjBFc5JOTMFhDjXVxD7XsBe1q7N01Q3GR6D-jvrhr8aLyS0i-XckS3xVirjkahXE2bNq~LZ2dhGS8nV2-pfOTtfk6AGt6-MxXF7b0eN5bAyQVE2b7hE90Efsk3oGNcvD7v1sWpUIxGQJnPAhtn45cQhgBRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.263Z\",\"updated_at\":\"2022-04-07T16:01:38.606Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}O\"},{\"key\":\"8f0f4bb7658eb060d5b529ee8cffda47be5221bb\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1422\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/swe/0zt/mrk4tddnKIcohBSC/style_thumbnail_13.png?Expires=1655683200&Signature=WbzSmuJ55NTBDKu9Bo2DrFIvyXU8YeiI5luDGs5Ca6EkarqdmxCDsbnb46OKmx0RSWsuH5xchZ9bFSRh406Li0EpN8LiWecmskiuFIb-WpKp5Jl2kWO4schzEtVlDfvA6cWpIE82CJ-sLDD4coIZ3Umoy9qSz13VCELGaeP6Qu2j81j7F6uZbimYcnOpJVNj4vt9heGqoRp38IJUaDuVakeWB8TRNGkSglA3Hv2gP8l0dBx05T1ttaC2vuyhUOxTpr6uDCFl6SB5aF29XLM1x4I97~-Xk8DXK0ENEOUGGltmYuj-hOe~4TGCag~8ZASGRzfcHsY6kawyLZ2U6mOSvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.829Z\",\"updated_at\":\"2022-04-07T16:01:38.601Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}x\"},{\"key\":\"897eae932e83a8452e9f32f18cee100bfb796d82\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"141:1584\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6U0/Xge/s2NzCkZiMxQRtOTb/style_thumbnail_55.png?Expires=1655683200&Signature=XozjhpA9h6QMo0vILx2bydt2d8EH02JITz0m9YcAABJR7Hv~hgMoPIS8OBn3mlgHc-67l79eFJTOsPO-OWKmm9xwPFdAC-KVFu~nnhNXHoKfpgnLUoP0J7feIxTypdFfEGpndv4s6Aj0QsS8lS1~~QN2ZYJlGQQZ2LnHl4U8aVZ9A7wINXv5M4aw8KEaK5TaqFtWU5bPxSpppZyNs0uBzW9MBo2tTAVl5-4ONP7YZTm99I6DZSYxUTVvoYvv9Foa7e~crSu4~uwqvfWrfsPPJiSqzt6WZYTPzKvKO-MQ~OG-ZX0OHSPF5jx-2DmL9Tdk7Bv5sOVKxIEQ5oxaeKMYeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Text Nav\",\"description\":\"\",\"created_at\":\"2022-03-14T14:41:34.346Z\",\"updated_at\":\"2022-04-07T16:01:38.597Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f*f\"},{\"key\":\"805e21041bfb59d0e53d7746f6d07ab1aabafa59\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1317\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/YTf/zAU/d1iq4nZgUpN0shHq/style_thumbnail_24.png?Expires=1655683200&Signature=MoU6C2XL-d8OkmB5Lm1ldAo9tLakwD2VV1ArTgFGFabBQ~dWDZsUCD45VT3B4V0id7aRlIjth9Viqim453TLtW6jDRsuijXgKDr4sgwA7ChhEaWbaIMMW4CJbRfIl90YGf8qrWa9Yi19t2DpaDeUd-ngL6ro-hBytXjz-30vlOp9640c4sZ-0UQiBPnGu0BXH-SBnLZrv~0lJcHcVMVIXRDwLQxYZzfIv7kGumcoQavw3VM5uquxO~UvnelE8Zh3ukQoN0drts4laxOlAagxqWy2ifCTlLDx1bh~wpk1Xcy1IGBVZIPlWdX0Ktm5DvhmtdNwAdWN2neZo6JjqNwhsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.938Z\",\"updated_at\":\"2022-04-07T16:01:38.592Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}x\"},{\"key\":\"75029f391a06ca3fa18f639b04cddc6fa10f910e\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/M5Z/J1K/E2FOkiHn1hAVvrrK/style_thumbnail_11.png?Expires=1655683200&Signature=KULl3T8y58q~cgS1rb9LmaKonBODV6j31cD6FpNSb0JlxzxTYzEHXTKQwBlOQO1bqLjLDJUfdFay~67z46UZKVFWVaqTx355tvwOoXicBDe3Ft2Lhn-J9DQ~96OFlLeKLbIc0O9q29Ie5dynyPkoH9Q7pwhDQ2axdHDaAWJtaLgt7jJPz6b6dJ-sS4F8vcfzVl2tFwkSlE4AyNF-ZC2q4EcrbhRHLGPLv0aHQnr8KTcgpFdo0ruL1Uqzjm~JIZo9EgDkOKHurDkx9mT83j7Br9tW-HQlUhIyw5ZqaiaOCQORjcvII5wjmY0x0FP1u3ScKz-Sw5ZaqTPp0StAwv5cVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Text On Destructive\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.892Z\",\"updated_at\":\"2022-04-07T16:01:38.582Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}f\"},{\"key\":\"73bcfc9e519a412cf38087b05322af2659864db2\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1323\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vZV/PNH/vJ1b420SlpTwWm3W/style_thumbnail_3.png?Expires=1655683200&Signature=CGPLloS6j4h0lN6JkA7Sf~QWz96Jd7TKbR11ySvy7ES5KfaIfMIkBem3EOXq5-Ij2wY7Y~LJVxOqnBpBYTqGzztnMsrYah8O9R-zFdc6eCNTNxNh-lakQR7iNy0Q7KCN67Gek~Ps9IZSMAZy6PYzXvUgyv7KShVvRcwIKfGt1Wvh2E0Ghm7P~08qkVE7WBZVA2wYtrGSsUdS8Mlh5LvvU~nNHSpZcKLNBmoPu8mwDrSIhavw6eFriCaHe738fOkV96E1~zqIQ2tVvlHG0rrBVnqMQp9OSR5jgL6d9~JNvmjcHWmoIIo3pNCmV6g2OhjJRygSmOlauMr3u8n7uON0jA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.877Z\",\"updated_at\":\"2022-04-07T16:01:38.574Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}O\"},{\"key\":\"6d223cc3368bcfbcde934dd0c8d3b23acc2a1c3f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1547\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mYi/jjI/ul5OiLYOylb5bAjJ/style_thumbnail_5.png?Expires=1655683200&Signature=VKB2AFZCY0ZY3RgrZB8-DZDln5z~LegEulLz8AQ6qm1SnpEz8KuakMkzOXyJI67apqWAbZid2TlEGqbvQKibdFNbGwUFSQR~FZkAsC1qFWFqw0vujbKxnNbKguBGMP1GKajrt51Cl3K8OgXYj8IRAYpaMtD1IXyz-kAQZgqXeHWjrQCOkQ4NO4IycAiZgPotFFQjtuQNQPhmPOLAfthQGy3tENYWZtaWn7DJ0pS~ggZur7qAgXf8~JCiX2vqxk~91B3TcEk9cUv2S1DvSZppEBWdysTcH0BMI2q9h2e56j6D0SP7e7UgmwTbah1tyEz9loHgVonVdn1~giZ9I7yNCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:49.950Z\",\"updated_at\":\"2022-04-07T16:01:38.544Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}r\"},{\"key\":\"6bd5690b6d9995b2d234556a3347b5b65a096d5d\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"30:1309\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ud5/ksl/3yFDlIqzwZFAyi2V/style_thumbnail_47.png?Expires=1655683200&Signature=bqxqMpzF~9-R0kZNG25VOXkTtbGvM1EVfkAh4zMY9MSXUDtxgy3VU3SYe0jVXBOMj2v~YXpqSc2CkXqREHHNma1E6Iii5C0TqU31iCM6KhkkVrNRwveiGQlg-ITaf47PaZz~sP7mYp2TcUfkR9h8orS89ehLyb6QPWc1ZEeyYjf4wWpVMuUI~1mQMDk-GP90-tZ3GqIAYZ3KBfQ7TzD77BuyIJoVJKJH6y9EinvSXNCA6jCVIDjZYe2pbgt0B9apnLEperZg68unaoMmQ42TAd56dOQkapGE9t~PG3WV0QZ3zV8qCVzGgHQnnPg-CRjwjSKJucA6jDKWZWrjfgVLTQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.188Z\",\"updated_at\":\"2022-04-07T16:01:38.534Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6r\"},{\"key\":\"671ad32839675be5a0e45d97d145f79e59aba973\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4hI/qDu/zwAUYZZUd70UIJOj/style_thumbnail_38.png?Expires=1655683200&Signature=PvJqjLJ3Qe6i2OAQ72Z71ZXFWFLmdYy0kXeZ23zKHaFtHPPr8TZgvaO1-vvAgRypt2TfgKr32ZqxEnoQdXy5LjQrdJaiDV0KgomuNdlSuS7PyJhhHxaqn8ql2N0fttQL4je9yRV7xCzTQmnlzbOla5dztqGg0AxbrpsR7ut0kEqX83KYchDjuv0Di7bTTpBNs1LjFcf-a4dAkpQkOHetXQsgimRV4knRKtxdeWAScsEZw4XHUHd-VyK8WKp6YkSxoS7-XCOifPPDhhG-FKeiuPMlKzidXUKrF0-A0QKmvEXKzjT~dWUevYeupa37-Y5P9CCy~IyJ2mP~CJI6bUhrWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.820Z\",\"updated_at\":\"2022-04-07T16:01:38.530Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}\"},{\"key\":\"64e64f81a796d42be82745c6ea9ed6ab19c5817a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"34:1412\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Azw/1Jx/VBS792mRJ7o0VdL4/style_thumbnail_20.png?Expires=1655683200&Signature=U0lYM0OJ0rxKXOcmVt~Ec4ULE7IfymhGw9mLfOn7K8qjTrOu5RYuXsAaPzyYO1p7AXGQcrrOfj0OrNAg~mk275g2jEeRkjeKn6aEhRzxt9vifcsn6TSHwq8VK3TMg~Brd70gYqVWoVRfg9LPfRD3624-pEw5NRFJC5Mx9RoEYb4wKl5I9qKUf24lUUvbIAog2s-PtUNNJOp05HzZA3bGipxyqXKvdHp1HdTI407jlxG6DuzKvoRc9cwjaIkLmI63cbIyLtY8YyiMCvOaLg5dQ25rJAjUnEZrG2NEFEZFl2STt0Kxcg-W9OXzQPp8eHXfS0GaqsHqaCHKm2VG-SWNPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.806Z\",\"updated_at\":\"2022-04-07T16:01:38.525Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}|\"},{\"key\":\"6176e891dd435fb5593f02e298de04bfb8f8dc13\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1311\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EYO/JVE/p4fHtnXRFScpbeiO/style_thumbnail_37.png?Expires=1655683200&Signature=IHA~aTAGEEV~H-NR6A2osJ6EHTv6PH5SkEJOZQ2Df9EYqYNihl0YXK~rlaRRo0Vmg8JpqVLmYsAtfSWpyIxNht-eBk0nWZY6MYsChuRKaI7-Urfodx8c5wf5QP8y74WPn2d7N7AezdidOnOpS-keIs9qXVB~JT6sL935FudJkXHBRDaI0QBBIoNOy3g9GW1~UfYJKs7hId2U7YD-1bBd8TP7rmHZnI7C0e5LKgxhluGoZvCBWCFu6p8c8DtXjxQwDokcEXdGFvgMWUQz2oKq0Z0caYT840ZDqw-t8tavzO27NomCJaf7fD1yja4Iss963H2I3G4ded1Lnt56MIFcvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.950Z\",\"updated_at\":\"2022-04-07T16:01:38.520Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6{\"},{\"key\":\"5bec920e63333942b9225225722fdaf5fe355cf4\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1322\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xDS/5ot/y2XBtfa80jWT4Err/style_thumbnail_58.png?Expires=1655683200&Signature=E~pPLAsLEIju1OGuA6d05M-0MGFTK3ksQD-ctkgsnmaepCBIUnIMvpeZ0vppQymXQ1fNwsjXt45oaG-hlv-DmEefgvjT8KIDkxlKcNT0x2zryAjhR8GHcm3-u9WYb3aGerGO1n~f7CPcxv~emFvyaDeof5ApJimU0YkQVJNpS1EbOOr66Rq054zNx2KcnGJ19sx0pBglUvgb5vY~UFf8~Dg-F~REQH4zq8ywOQv-Urj41n-habXQVsisUoPE6NE3RRFjLo7cAj-Zg2wls7cT-ZvOqpaJvUag84gUVrZqTdA~XvzTScXS2SEjyIZBywFdWlFj3ZIyRNmTLPOJhi-5gA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.285Z\",\"updated_at\":\"2022-04-07T16:01:38.515Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}\"},{\"key\":\"5aa85523fcd824ec3e1b4145b53d2346794f1d68\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1318\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nxV/bow/CYtFoWBPoIceAfNH/style_thumbnail_23.png?Expires=1655683200&Signature=Oc46Gu2cAd8VruJ1tG-2rY5o8t~R1FEX1nx4xlQlx9Oeks3FIxrymEY4DI~wzsqAfbMGzJIxD-HDzxfjY0L21mFoAtHxk1drjaeU4IXQtpkREYvyHEfVxfvT-jYnpH7cxsjDkHfD3cbrB0CiIQXZaVq98xBEmm0K1dS8a3Qyj6imIRFxIocegGV7MMdf-k2EPmR5uIlQwuro3KZp3KZTNaBArNBUHcrjulb6cDm--K3sQrfIlaZ-t~k5KgcaNvbGlF3OzkPSFAGUOXQlseK~UKIlMm0KxXkQ0dIhO-Wir7OdnHiOOJI8JnREyHup1ulVCx-UvZP96QS64gVyj-gYTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.849Z\",\"updated_at\":\"2022-04-07T16:01:38.510Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}{\"},{\"key\":\"521e4a7ddd72d315413a3741bf3ffd255637ef11\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1426\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kUQ/M7h/Fj1loPBh2idU7trs/style_thumbnail_10.png?Expires=1655683200&Signature=aK0TxMOez6NRKlqF0WXDaurjvagphvgeBQTqjK83sUPDIv-Uc96F6xCSR4RbsEVLt4nGV6dviTpvnTqj32sPp03oARD02uB~OX8rl~9q~VPvYG2waHzUjvYGTg4UAqyI1JihsK8uBEp-uQBJf4IV61o8IMVZCi1HidWsEqM7CRYv6MYavDFMsJNrZ3Hsieb6Nb3RJK9HuqtQPeW9P0uzSJN0HxTR-ar17EMevUPdB7BfTVO6RdzfsNgfMzIWJJsaDFOs8piZdT~8TrRBEWNeHTj~VleymM9HN2MfWbkZ~~y1sDebFEjY9GSQzSA4v6uP3DS8-AwUVlv~-B4hZ0BO-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.758Z\",\"updated_at\":\"2022-04-07T16:01:38.505Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}|\"},{\"key\":\"515c912dc46b8aa1fc237d3f6cb3480c5e711aeb\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1321\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/UZP/5XV/3gmaJUabs7ETdbX3/style_thumbnail_41.png?Expires=1655683200&Signature=Q~gNy-F7CHTAGKPs1DEHRcmFmSWVcXwy57Ikc4Kt6NgI1alXPqkpv99g~ZZ-I2j6Mg1optRPR-a8ur6iiJ3LVqVrXdVvbkHUvEoQgEqxUY2GdmwheDfrE1R9FaLXwNOXWyEfiSiWmaGplzupaJ92P2kUY-mamhwnoSZCToRfidnX7hDkdsUUK5qCUZs1-TYbOBXVWG2cdQzpKmBp9qijs2lopNtgMKiPymUx2CGucDSDqwhoJMV35R3OmpO3WJmtUHfT5Dpu6UD4~3E5lARlcKQ9nj6DHhRdibCF~qHWqL3fxNZoefoVdnIf4i5ax9Yd7W38EYAGoYAfja-foNTvhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.993Z\",\"updated_at\":\"2022-04-07T16:01:38.496Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}|\"},{\"key\":\"3c83525b7293015a44771691a017286f6dc41b46\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1314\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/dWg/TvI/im8IL5TlG1uQOY3m/style_thumbnail_29.png?Expires=1655683200&Signature=ApqoKZ2Jwd78a2oTydXX-MzsApaAac3ntA2OlvMJK8sdsEG6cdKZZ1LRPovYyZeReGUU4l0AhEHYkiYXA1JxoJuSWmb2Ojg6uM2Gu6BgrpaOMddL-xC9H120rCwPBeQYxHHT33c8WoLxtWJofb-oOuSlTBYxKUm-ip~BFopTmL7fYTHDsSUonrIvuntMV6Bos2xTu4zMfWecRXfNkF482ysIDvhfanTxL5iY5GS3lk5sR6xsTywSuHt9xqDwhjUeKT0A1ivnv65I-26FQj1GpWr3ZtyAeffJK0Z4sHDT7sP4rNmTnxsjPeoEG7-Ad~O-zHZtT~cSo2nX4fBgwfsqOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.839Z\",\"updated_at\":\"2022-04-07T16:01:38.485Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}O\"},{\"key\":\"3812e7c4dcaac19f864673b81ee45be172ccde72\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"36:1415\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/GuE/fFg/cJ4H45sc3NS7LYuI/style_thumbnail_44.png?Expires=1655683200&Signature=L53Z8bfIZaoOBBygiNYoyQ-4WN72-pt7T~qsaxLKSVeKXLKaG2L2d9wMmKJHW27YVeL9g6xhkAqng~wkjq~-EbXVsdPVNPDpmO-N0qDHMbzRnqH0QhdKxz4zYeWDfFL-Q4zr93ez53MOr0fFNQejbvt4dzZnSpqPQwSc4nbuL30vdc36ETZLzd-dpYfprgcYxwJ0TIWcCgL8-CSCKfZEO-IhklwduWY4vhI6RHhfnsJFeQSdgtnU5s6K1rx6wuqd-0h16mL4OPtGFFi2CRS-OaJ7Z5nIA3DYIRjafQpFm5YzPxEVsvmYZJnX0hUKo7V8pI0Dm~wPaHMSA1CT25MnrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.115Z\",\"updated_at\":\"2022-04-07T16:01:38.481Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}x\"},{\"key\":\"31b453ca1d58e6439bafecac4f0265f0ed955da9\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1417\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BRn/y67/ZS8qI1DUthaEbDPH/style_thumbnail_8.png?Expires=1655683200&Signature=YB5yt7QYav6aABQ6RhO9OpNaRpXPb91VfKfPf9WkoG-bYq7dYTkN~e5tw5slCv5fJ3xfajNnpNSV6VdTGsF7sDm-ROgqbsUVBnoTA73OZWKUMYSojeeu8dPm1UD5CGG0UWVSnWz4Jzrv-vhvco2S2yibAiQ67cyikR0X2mjilAZx9wBenutQ0pc6hMk6imzMot88FB08GTvJgCpDIWUWFyqfNUINzYoVig-ugQZkIOx2Rcr~QH97u3nnaBWmWukqsH-2wMfBRh1hObi73A5vPjczI7eVxY6RnVC2WmqzLglMotgRuYWQwooi~aGVPAv-4MEATVr5rERMKxDxKX5lSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.788Z\",\"updated_at\":\"2022-04-07T16:01:38.471Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}|\"},{\"key\":\"31429636e1063bf8d16280d97c2075393bae5cfc\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1548\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3xz/m2M/gVqiyJbY6OM0Ux7j/style_thumbnail_50.png?Expires=1655683200&Signature=gb7pp4NPYEx0~v9uGK2EIBSDDBWGJlKX4onXQLwfGLnsPCaGNnjGNQlzQmAc5Gliv51RjER3XYZbaEA6MlmTTJOaEmZJUpnAVHKFihhkkwOlSyovLVigpV~-w-nCqifijWCn5yYVMaz3C6n~97d0wXivd-lXVo4SofzG4f-cN6rbuWc9mCXEj3Il2476ulfAOumZTy3nGFXS5RvpcO0V1FdQlJQ9Vp7dN0XbDkvgeESuK-Wr3a7U7mRA2pqLdC4Z8S52qMabWqpps3ObbdHhlV08P7uyiOAxgWlAHymdxXHoRV5dlEWmFI64SZEKwYL5K8gJpk-dsQiFETFZhFAULA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:50.039Z\",\"updated_at\":\"2022-04-07T16:01:38.466Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}x\"},{\"key\":\"2edec863632f4bf19e9e7b6831134769860ec1c2\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1468\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/daE/A7C/Y7SPl0KvwIEZNP9p/style_thumbnail_56.png?Expires=1655683200&Signature=M3VCm3yaZTLC7El5VDmYypyS53LgGCdj9A77e4GcvmT-Y8tm6mPjTKakbXjYcORKmxXguqxHNCHM2cqXyQ4sZyBB3gJMrvVnGw5FgZCVlOGImLkqTfvdRa-nDyHCI~DVG~NAgH-fgJtYRSr3CuL1d0sQ35EDVWLv69LvjkwWZH1BPtLW3WcCLUKaT0rhpzRdWi-K28pM-FhtwNc5Pfpc~d0Bj3cp1HqV387HxSeTuGFryy4s9oMRAyJtcZz7~tNJuwvabceipVfTy-YnFiPQRNYksaqhYzW92Q-8xrxWv8WSNew7BEX-YhX~MMb0Ojhbdh5WxOE8ik~tr3r~sxFDTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Handler Multi Control\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:50.044Z\",\"updated_at\":\"2022-04-07T16:01:38.462Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f*x\"},{\"key\":\"2b90d9076637020b8c30840c71f6607de4278e9c\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1324\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/c2G/ELL/hnVTa1EQ2lCxkxxT/style_thumbnail_57.png?Expires=1655683200&Signature=JfStExrJIzdIEA8l5QuFoSrETWlgaMbaNdhNbilqtuWrNzZ1MrZJU5rgZ8sD4w2diVznx9wBECupLYEUDXJREhoaZ3PtHhCPJdninJVF9LslCaDpp2v~Oe97L9cEF4-kvQO83wH2BLsaRj6ffAtdDXAQXXpq2fId0-M6oT582Hi2KUuGsXEIXkIlJqqnqaN4VPCw5b-Ua~ObpucKH8Liii-eQdWQVEMGj75iL4Bz1iYhXVLfhEUqBTVZEKnU7GjI5u0W~5fjud-~9o~aD-3iwUHiim4Vvfb7OVSC3dQL4uzWtR9PNh6mXOA7yBnSV60P-eg2UTIfc7UOJ3GcqKV31A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Text On Secondary\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.280Z\",\"updated_at\":\"2022-04-07T16:01:38.457Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}f\"},{\"key\":\"1e158dcc73365e79f0f1f8e248b7ffc8d4d2d765\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1418\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JbN/KZb/oItWdrlFeutNYhD4/style_thumbnail_6.png?Expires=1655683200&Signature=TYDC9ITxgepBfk0WrQj8E1Hs3Rq95G3-JBH0VJ6vVqSjj-JITGRsPUgoXk1pL0X4X2VteDtDT5PGvSzc8~20we~ucWVpjoWMma4NcmGl0lGGosLukk72YUgc2A70QAeJ-MmC5l5~4fn5lzcXoRJlzLhHiMtUeIbJD9ey04eZNLKOHn5z9r6xVt0uubkSCG0o53rhj5LxDvzT6jEUM1diFPWjP5yqjUtozjcdGBfLqqclUQECgH1yLIi6ZVkkLtXtLC8BeziTaiL6tp8z2pIkEtWVgnQaKkSFG3FbA9TqWbX2PBm5VJHI33dHuAq6CsLNCQEv5vGDp76Fd1Yna7ovKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.779Z\",\"updated_at\":\"2022-04-07T16:01:38.452Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}\"},{\"key\":\"1cca69467512c1ce4a789c715d53cac8f80132dc\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"28:1306\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xyN/ZOe/nlge4oBp7Oyln24O/style_thumbnail_35.png?Expires=1655683200&Signature=QqZIGaTBR4LgCTB-tibtZT4Nr0uBtuR8Uy0uSl5YJjEB9OKt3dG1tYqqQHSl66KYkeTmbQrioF~jlpnRPzKmvOElQmt61BwfWKNOMUZlaZf34FTKFQShBA86pjJ1pyruI74D9Cdqrx6TAezlDMQJ6x5d5sYTILdc9TEbWHK2G2KTGZ8CQt9kEF-PtssNCf5vLV9jhQ5clslHozSxGF13UAcSkm5CtEc3zW-5NEtkjPPJTxpdRlUy1UWCgX8GkcUIBJTK96jo8jNkR2z1KwKOnuT0Dddl7IK~1v7-WyBPbi037i7E9RIWgTV-mirwI0ooV77UeiyWHK-yBzDnB~GTgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.917Z\",\"updated_at\":\"2022-04-07T16:01:38.442Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6\"},{\"key\":\"feb066a14120ecc71c056d34c18995209bd33eb3\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1521\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wj6/oCU/s6EaeErZZ8xLc0g4/style_thumbnail_69.png?Expires=1655683200&Signature=e1a~Vlux1nDNlzU8TGbWy56-gwqJk97r5UXOL~Wf5crZsqkTcy5OxxurXSNDB650h0eXSHdNFZUeMt71XcrLlvt2kzciiyoEV6U29ixrLLuKzdzon4-zMKQM1K~4Azlt0yH66gXqny~-Wuj4HHHXyf-9yDuSu6wL2egh26PC0Pf3enumnLu18s7Sfybi5LL1yD4izCK8WybXNFynunHfRNNJ1ZWX5ZwbmE7R6NsLuF7gFZqFxbhjcDF6Z8TS3677msD1GEqXWHHOrMGjZnuE3jqglo4PQ9dyHCDrjSpTi48e~5Qk8ERKaYnaK9hZPTCx4KUhH-Ql~CP29JsQC0nw4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Success\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.040Z\",\"updated_at\":\"2022-02-28T13:59:38.229Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"_\"},{\"key\":\"fd201a48ccea476c4654e71460ddccf37a45fece\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1522\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/8Dd/KBC/1hzbWFDphJCZpVzb/style_thumbnail_33.png?Expires=1655683200&Signature=Jm9jKdKSWo5R-G1FzTJCsesDL7M6pz4B0jF96nEVtiypwwgWiAOT6IuIVsF0B8e-SH4HiAtHdnq3-WFjvGQ2Qas7k2Id8w~MR19vE7bgoKtvz8AOYaOR916ZFe7F~2HD0AfC9YhGvMQxQ08ZPuw0GFS2YA-DMsaRQ3L3U4hZ5y2Nxa5hFYNah9kBDUxBfSaBQwoXTo273h-QSqzEU5JdAOy44AhgupqBynyvzY6OnB5-~bPEfrwCI48MVUpkpxv5PAFTEyCNpJ-~OnwdvsOAz~BKhywdfqOv76tdIk9q2iiTJ6ZRBsQCPIc2eQsMLXNpLDFjXyyf8X---diEmqYUBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Warning\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.854Z\",\"updated_at\":\"2022-02-28T13:59:38.222Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"`\"},{\"key\":\"f7069149f9792a48ed0ecc1e67e7c46ae9306b00\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2396\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/w2C/0Ac/DbsjCLBOWpgyN13X/style_thumbnail_3.png?Expires=1655683200&Signature=Y-Tw~cVub5C6oVF1EUeZ1KB4PWLnt2FxL8MWt6iJtMqzhHq71JQzCdRHDAvfIBGHlxnBDsytik8PjoygvEhgzH0qUIJ9oLkH1Mw1qETdnRIz9IJNvDUoXlDm7qfT5fBgNETn0-T1L33pZnUoqZkPtlO4scGANho8kKWEljmaFDb7MyodqEtx2NWNmtT2hyDUBCZ4A49vgtly~XHA0Zm0qNAuZrYhRiSPhvEnvhNb6u-IckCkCCN2xaoRs4gszLeFZbvUfXgyrznl-z8awC5dqTpXqXe1UexNWxpOnGviytuZIZC9KHn4XKUo0IW8Dfba6nSs~k14rjGc9Mry5iH5rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected Low Contrast\",\"description\":\"Text color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-25T14:45:33.710Z\",\"updated_at\":\"2022-02-28T13:59:38.210Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"4\"},{\"key\":\"f6c84a6be959c1340cd8324f539961e53105ded8\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1515\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KK2/CLs/1DErWsJPymYslAhD/style_thumbnail_55.png?Expires=1655683200&Signature=SmiJfJ0YFZ-e-H3CeB107m2RRK-uY~S~Bk-tJZfqNY9e6o12IVxI8RNNKphJX-PTtha5CPEqd2qV0cX0rLOCgtr9xPd58dSDC2wNUwGNHzZBijQP3MSwCyDJw3LrbNeehEg3zzsLvFJaR~aZSg9lxcolpWjia3jmf0cBX7ybc9SidxCdIGwhGDBbEURLsSeXTcKFw7SC8KDLtBWCvSsoEeM6aaZm4zAmcr8g7kGK5e0AjpR744YlcE-d71D23XvIqMZBzZFOTdWCoo7-Gn7bSqGNo~3iT98VgF~wl3SFXEiMIih2C6YsXkDBw7SyOVCea~BzdftTv-kDYXmqMZqboQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Degraded\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.973Z\",\"updated_at\":\"2022-02-28T13:59:38.203Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Y\"},{\"key\":\"f3ddf5f7365eca88f15e4139471a6a669d2fb41e\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uVf/I3I/4bkxbCTyEr7Wm406/style_thumbnail_48.png?Expires=1655683200&Signature=Uevmdi8wLnnOikQe7UFve1b3i3l4W9DObztNWwAy~f-sb4dMAnSBeOkq4aMhpi8r6lj2hP81FDykJ-TT7CNwq~LAqmPqSlNYWnLYDJIN~2WRe2-4IpO-J3jExORiE2wi57utqdwpISbzvLYfCGWvYA5ol09PyBzbBAC9WxmlOAC8BfDii~wJmxDUCNi32hMWAK4suGZGjzghYzE00EnRCIGdbW5fMw8ndTKNMzWOSeZS9XX4HlpZq4-siVV4LCLyS4fUYiUhZQKkYfSl6P5LzxZKl6xtdh5w~Dp14S-wWxTpnwRvpda~WEy2tJwTC-mwrK0-MDZ4J7MOpdzwIdV4aQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification Inverted\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.927Z\",\"updated_at\":\"2022-02-28T13:59:38.191Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"d\"},{\"key\":\"f0f60bb7c9feac78a2fc29ded13de8095645e834\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1435\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/usb/NuI/jl66hJzRsqvkckcz/style_thumbnail_15.png?Expires=1655683200&Signature=RAcIxw0nq9hNgPCkzjXjaOs~vqULuVD4-B6FdjadeD2o8GGhU5o5tYQ9jJFGe4Lg9RMmAsBPfNWceARC8ilzF8qeHhcevr9Uz6w-I8llcnIHlL2iHZHsZIwOly7CMGtnjGho2RYjGHrz8wkvi7O4VAPzTkj-j~oJZsWdiFBIjbuE~mdnAhPdxah5BgkFT2a2VW54Xa4Fp1E0GV-wrTWjqZvF24PKvbDHgSkNHdeku5Rce6qUHWnC~LFZkR1EOZ7iLZPF0VrU0IF3HKIoPCnbrYgETn2kI3VLYZAEK6oC73522wZA2xbtCKQ6lV3prjDlDZw7I4pMUCb41UOvHnMxzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.769Z\",\"updated_at\":\"2022-02-28T13:59:38.185Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Q\"},{\"key\":\"ecc14fe7227e3052733fa58d19f01ee8d4e6b061\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2371\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ikj/Xgt/8Ydb3A1DYm9WlBex/style_thumbnail_109.png?Expires=1655683200&Signature=Cu5LSiC1d8KfBuKY~uXTtRI7o4SPkJR1vHYYZPj17yCHkFHv-Kg1ZoBTFp1fkDTbrwLdV4RtMlHkB6NTCbLHiV9LsLNrtwzTJqFyYWsTUEGpxWjrTo4RE1cJBzfZ8jrJU3VTShrhiXj6HAYdqSTu3c80VdU4-tViSZljrZ8wrF7ndkmlMe69x-Y5go7flqADcG5kEjkNmz~jSvobPkGXLbLrSJ2xF9h0KmpZN316N68Pl6gVA68iRnHdykIvS1yFAgZaeGet3SheE8F7z0s6puFmAsFVDfCBSiVkkvgddQVBlpzyET-6Z7IiQx2BOKBUF-X6fY83LGHQpPMLgVXcPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 2\",\"description\":\"Pop-overs (Dropdown menu, select menu, inline menu)\",\"created_at\":\"2022-02-25T14:45:34.270Z\",\"updated_at\":\"2022-02-28T13:59:38.155Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"$\"},{\"key\":\"e14a8eb99e4232d6e11f999cd268815548bbc6b7\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1487\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/MVr/g5N/3ojfui8tOMusa5Ct/style_thumbnail_76.png?Expires=1655683200&Signature=fDCWikLTvbKGS6ztmOtJSPoNh~3Zbdau6eGtWuM1lVEeROYtV7fvGZ~NLgKxxghO8HvemGH4u9tXjlGm71z92i-sbmZWDajZ1U3KDkfPSUiuGBmCLd1HyYsyPjyYrz8cZjAgvvyYJG-pwfrIRtKuzbRjEi09AICPngVrLavmFn-v1aYhmxLNg4vInnuKC~1i8ECRyqfyxOgpFXaiDcH9RxVqTYVY6YbVgdX65RI97D8qMeJrtyd~flhwNyn2WDjvgzpSWYXTwP7wpyaCU1ikFNkFknLA~CKyABDV56YiZr1N04EIiyZ3Ttd1SKxIh5k2DprDJ2RUz-TT8qQ-Tk8JWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.078Z\",\"updated_at\":\"2022-02-28T13:59:38.126Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"W\"},{\"key\":\"db0e17704923d214b4093fb710fe9ee967b98e9b\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/RvX/mvw/1jiJ0sqo2MLt6DCx/style_thumbnail_11.png?Expires=1655683200&Signature=dg3lvCNah6xrbl8Be~vDBqjkHI45wNVKEcxtDWHGfxqQMsS7DYB09tPUX3Y2SHaaXqUkg~7WtXpybZ7VnTyk81MGnRZcA1SruViHBcVogiWDWzmYocjU6ldXYFFKXRmLi7LP1xDkJNO3TaIcsScGsklmGcSPOmZ5qMneqrCupP5nUaumNk9g6i3RgsWKb23KkHePow5zAJ7k7uQfS00AVbY8XgoZy6xoOguIgP7WihNVmlvIdejMleLdAjZZqvka9pAbDg3MMBQmyZ3Kt4RlyWdYT904kivqi9Ng3TiJVRL2cNe-BGJxgPdf83VXzTwcC6nFS5iZ00l5jOYgfaz8WA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Success\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.749Z\",\"updated_at\":\"2022-02-28T13:59:38.113Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"K\"},{\"key\":\"d82dccf3046bb8d90590847bc85576894d9d6cc4\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"17:741\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QEA/kyl/vwsYjgECD1qHcBQb/style_thumbnail_57.png?Expires=1655683200&Signature=Br9LCV037YQYY88KgxfwE9CjO4pL2fX8LTZwAKXh-bF~~P1t-1SHhuqw1epDu-500k0po3X-67zbM0Ei4R47VkSLGHXR7SXRObnE9UxxbY6OQZolNdALpM~E9NEVb7AUqLvVdU-yu-fqhRE9fr~n54NpCU1nG3cZa6iTzbtnnHS9aWX0A528U-6hy~zL6uLpxa8qNXqH3r6VjfE9X~cClq2Syxk6pIYRTdinrkIHZW49pF9lkyfgfSOyFK6vDVPBdHBQm~y5vh-AHU7g1QjHyP~Ug0buOAr9NqaMJ6L7TP1imz182RwQFzRy5BB0-j2Mp-j9sBVjkXpPpF1yDJtBFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Disabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.984Z\",\"updated_at\":\"2022-02-28T13:59:38.107Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"9\"},{\"key\":\"d674d02bb5b320efaddc4252a07b703eb50b3b8c\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1431\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/dNt/ZFg/ZvFGuXt5l2RDUgDF/style_thumbnail_62.png?Expires=1655683200&Signature=KRaMPHahHWfpsRouFwuZFbALnbk4KDK~vRRDrPdr8rgqnMzIfHfBDWDuDCfOY1pa~dfKxff2fjC~VIVtQXaylhwek8XXHn6gwbQXOusrJC~DVKoQmJvvmdkMlHI7d-ZPxG7oagrEB2nhIJvojPEY0q25EpP9tjViTnVwDZWL6zMNdkfgTEuEMlWFsqaA~VE2EKixn7EVI5jPoQJLMylYUeHzSbP-bnozXqyo-CJycG3dbWTQ~X3R2fHRjH9oStwVCaAh4azVnV7fsq-GZh8diCbNFObXHQyeiyX-jFetXlzIO3-Mz9aSPLeqPbHc24CaGWcLd4SCpYuFhmxnDnp3Rg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Critical\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.007Z\",\"updated_at\":\"2022-02-28T13:59:38.092Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"M\"},{\"key\":\"cdff4f4381bdd485c0c1c59d55876ffb717342e7\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1085\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wp7/pWf/i5eLmpcPdFShglQt/style_thumbnail_70.png?Expires=1655683200&Signature=OuLVUH5Ue3HRd4XRzXMDjj8V2-2kz9EvuNRWDQwBeTGZpcjckcnWM6qjXMhhXnApv0U3h4d0wz67aUDKmmOw9MTwcv9SU1Gu6HYA4-eXoVujMdZ1Z4EET4oZZY7kATwQtJjY1u3Bw-dNrSVAYJ8XiHtSQSdNcdxvPHaZr6l2~dwNRs1OoZo3rTtrU19kZuS~K1wa5mm5F4fz46KaBzbaFTAFcreuaMj3Zc7bvVHV6grEOE-7NLFo9E4~CV2ekeAMq1Z-KEWt-pRpMHGiDX3buZMpiNt3doLSGotg8-sRgLyaHcft5uBLaQH8nCikpQnvVMfxG87UR7PF4D5Tj3zRpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.045Z\",\"updated_at\":\"2022-02-28T13:59:38.078Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"F\"},{\"key\":\"cc3c5e3243f8dcffbda4bbc52267db7fe1021bf5\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2395\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/myb/PC6/fPcKWkomDH562IsF/style_thumbnail_1.png?Expires=1655683200&Signature=M20vOE5m8s05kKPkNdD3DO6tiZxEfQEPxY1xmkaYO7QqEJCv0jnEe9Ra3q8q-~dv8RyH2FE~OEN3UXc-03s4cYv9c3OfezlwdvFTM-wcUdgcxO1413C5EjJlER9NhLGLB4umtJqxQSkGxsuxULZFtfrTlpujvSelCUf1PAurcqa~08MJVT-qaajwHqlOPR9bRuuG0drFFJU~FcUzVOX1bqgVffBsuUabt~RWPXrcXzxGd9nwOD2HY2l0EyE3JSqy1aqHnMO9KJB3Ax1Wrt-teHc6N9m7haRy~I~C-FAOCzSe~P6lJjMFSKAya3hNt5uSHQspxygv2fYPLiKk7SnsCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Hover\",\"description\":\"Text color for System items on hover state\",\"created_at\":\"2022-02-25T14:45:33.700Z\",\"updated_at\":\"2022-02-28T13:59:38.072Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"3\"},{\"key\":\"c38e9e588e8f33e037952ecf8f6d3008393ce08d\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2370\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/P4A/SiP/2L0tEWAgavFwHPEy/style_thumbnail_97.png?Expires=1655683200&Signature=b8UsoZPVEZv~InUTZ-~myWXMxFLtorZqV413~JfvJ4mUP3BjCaajuOYVidiTfTFtgJEwYr4la1MBKy6mXK5-DD0~EgYgIZz5bBgDEO2hsBl4qZIPngTtzZgKRiYmUa5ErSPQk75JqWcq31tdXJB0F4GO5MmarTEx4xk5G~FMwMoBHP3NaXbULRl3~JMyLVM~nmx1YqaCRs5E6fVwWTx4AxGCO3suwGqPgs69PCt7S6AJ6CoDnffxWUpsYj1vtkb~uJTU6sDKfOjPr-i9RlNMoVEd-iMALq83jJC-5JZC0DKLVid22Tq9vRmCHMNqpNtaMdFbh3coG1hf9glcs3jwjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 1\",\"description\":\"General surface background\",\"created_at\":\"2022-02-25T14:45:34.205Z\",\"updated_at\":\"2022-02-28T13:59:38.031Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"#\"},{\"key\":\"bf7d559fa9f62d4770f9a91468088e47d43d1b37\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2380\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ufW/buS/cDT5FHFSIPUbskfX/style_thumbnail_116.png?Expires=1655683200&Signature=KRuriCPkbAPcDl~PUCIrjM~wfiSjWB4v8PigA4Rsm2Es9nP6iwYfO0Dwkw0U~Ok3GMJuBgFowSWIYMU9bXsTYorYvYcyun2Qfb0t-Qi~8Z71uNNs0L1wLue-hfigp4bRHVDQjJ3e1h2X53~4LAt3zl9NE1Y9-Y5Bj3Dz4~v3KzeoxvxVuljNa6Kj5EsE45IZDeUukHNhCc2obmE6eKzDFcsIv~ywoF3AoDgNu-AGos~QCcTpNXbS14~vn1VMgmH2x9XXJwmch60ZB5vdg34PfQXXun6skmPFv2BT33EejgFWhfGIkUVc-yHWxkC~lf6uWE39x-xEUx9a03GuD8VAHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary Inverted\",\"description\":\"Inverted Primary text and icon color\",\"created_at\":\"2022-02-25T14:45:34.308Z\",\"updated_at\":\"2022-02-28T13:59:38.014Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\".\"},{\"key\":\"b9466f23d6807b4dacd10491bb63787ef8072f31\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1433\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/e8E/bc8/2hNH8yFfUwODVIea/style_thumbnail_60.png?Expires=1655683200&Signature=DppF6n42cNAxWsQkmaggHeCipS7j3BsmBeipIsukJcStFR4R1rHhNAOdlaZKnJh6i5FnEKDvq6baVuSoL2eQnAWXVDauhFrMNRhNg8yg3pRnzXeBSgyXP6ruoA8Z-ywtkR7P3yFl9LHgMIWlpCzG1Cieq8MxactM~sFBnkHuIq5tbiQsX2CSrdSYtOqftFIoxL12AYr44EunOtdU416eZeHLUZMmqPOycvxcEb1w3zotKZEHthjs8-dDH8mYMeBCka1pPB~UYjRKD4vvyWZzrULOFYUnapv2uqnKNxl0ZoUyU0-a7XXJdQpvc~kOOe~HZ4Jy3oCEB9ikiCOBWfW3fQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.998Z\",\"updated_at\":\"2022-02-28T13:59:38.002Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"O\"},{\"key\":\"b127e4ff512ca4a979d8bc5cbf7e5de0a30e8720\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1484\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fgn/Xey/sVlkaMNBCqxHiC8X/style_thumbnail_56.png?Expires=1655683200&Signature=Sh4-VHuTV-BQuw3jxKiMuWyP9VpjtrWElfxr6QHQDelYJH99NqybCGZ3sZQcSkVhZdyhtsOFD1AlElWNsMM2HAQOWtyqlOtraTapeB0HKrX3pY9BI8sZYDgiDMHPGsQD3nKAVSWKlwSDnxgFhtX9V1FR9bx1b5sSA8vdufEuG1WvYHPRcLrYm2O0FdnclzVlIFb4QB6hAMSdTGvOn0EMh0gIjLsrXD2c0cfzFb8A9YHV7opmJV058mscT5Esq5YKhe2KsJtBNjZ86k1FBPj2BvRRaSqJ2cBXk5kZ49dHrFPKNJOxBR~y7irN3hZJn2HLoxNODSkKXdQgYKF2rrPPUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.978Z\",\"updated_at\":\"2022-02-28T13:59:37.995Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"T\"},{\"key\":\"a4b7a72f887031e0be30f956c4342a82a283a349\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:457\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3Bd/Vwu/oj5PFfUBJKb781zU/style_thumbnail_102.png?Expires=1655683200&Signature=H2A0sVPaBWNngH9XnsyOFvqEFLtneoYp5PO6Rw5X59ZpADFPUld-PidwPB0cvor~JTYL7nzbWElLoJQegcUp9uxHCx-RQU9rXHFrDL1h1zCpDYLJLhDROIan3JdgGrrxrwcESRRRkWKAc2uWNltSQ9MPwGUs2EF1TleAQduIVT9Z~lFotHcnaJ6Jl7WJFYxIRW7stdK7lDdi1HVBqjAtWQDxPbJ2qqn-3VOnJE8q2kK3y6p0Soy0pEjxNAL9CeMsYnwYMa8kYCCV-YYAuQuGN5VwaRWcHiuDnw1D3z6rQiNrXmkFDE5pQByCueAPQz4oGFnZLmJAV2WU5aa6QjE~nA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.230Z\",\"updated_at\":\"2022-02-28T13:59:37.976Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"E\"},{\"key\":\"9ec930241fc36b0027d4a03e876cd017761a746a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2397\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TWi/dlx/sq0wXP6IQY7I6f6l/style_thumbnail_110.png?Expires=1655683200&Signature=HeWP~YjjRPRLI3xRoaz0GWsKbSrzjF8SITFfRHVJrlrKgib3MMHihtcA34vQ7XVYhVd2x9y3CUTh2HNZnA1NZMhS-jBtCMZ5p5tB-~waJvs0qayDqJ6l2ZWi21n89boRjI4KNd-3TUGqt8bYYPhfWqBCclbo66dPbRdPLzJJYk5cN5xHr7tMSosKujO9OCMWQXm8WVGICxiYF~yJk~3ybWyZDiws-N~JI2NLvCF95jF97rys051fWv7l-dCVTnxRfKGkciKj38X1KZkLrPq5-th6E8wH2CuCPq9pIJZuTPm9o~ad-9buIq7ypgSMHZpulMebfQBb7AxjCJinEaNL7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected High Contrast\",\"description\":\"Text color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-25T14:45:34.275Z\",\"updated_at\":\"2022-02-28T13:59:37.964Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"5\"},{\"key\":\"9daf0db65b15101fc2192ff8027b4d5c94fcc95a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1517\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1A1/pUn/8jvAUGwSM1gFLzxU/style_thumbnail_115.png?Expires=1655683200&Signature=NsdlaDhDVUeTeVK3xSsSra7JybvqpE~febtcyMiXCKOWDJnx4-7c7ZSXCMIt1S2NaprpWuSlmksq3QI41VfgLfgQRvgSYxH~orUBgIBdh~VzHoSnSg2wvWmBkemGfPKway8wiRzXMuwJrKJ1MQzUgddx8cbJSpqoTWp~aY2tJf8PL9REa72MOqgWbC6UBFgSsAuqtcyE88hV3QFxgpBDIgdAHs0gypcZdl4bysqbFjoLqcaxM3OVnPdJUc0xgc91r0n9TXAj-~ufrKx4wrKXFQc5XzqL1Zdm5RVaC0wFLPMxfVEyQLCcICZvT3w3EgVT~eXcan09VuyydaX7meG1Iw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unavailable\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.303Z\",\"updated_at\":\"2022-02-28T13:59:37.958Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"[\"},{\"key\":\"9da9bee93c7360d21207457defc9d044c691d65d\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"17:790\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/gol/LwU/OAxJn4cD00ogCiLd/style_thumbnail_114.png?Expires=1655683200&Signature=UiVPziI~Lx-u1EICWXVc2CsyYdA6AtzEF1xECiTlGYtRNSTGcbfsv9IwqkgWAthXxi0uFTyVqiMz5VkCLDo-3t75DwVMe9sS2LHRkg0jupz7IrhWVhCh0KYgFJjgYEYEofFti~Ii9IWSj6UXKHvVxAf5IvIgvUeAfh0Qmi6RZgrCtprCyzw2oNIYdFqC6jkBQUyypRpGz~c0xlj7T~IYbN-GreBmr3IvHXArshYdXJ8FurqhEn40a8sztUZ3NZ0TsFiE4apfk2rC~z447WCZV-Z4HCuWZTQL90-EgPDp33MrHpd7i1o6wLIrdPYnLLPAOhUZN3xtHmcDpnaed7UEZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Focus\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.296Z\",\"updated_at\":\"2022-02-28T13:59:37.951Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"@\"},{\"key\":\"95f38199495dbdbc616a5427a4a4aa4db229cb7f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1525\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/lGi/0tw/97fJZlgvyRUVx0YN/style_thumbnail_51.png?Expires=1655683200&Signature=dTKMVdyb~Jvgoxuhd1dd9ayIPatGH0d2tBuqXsJxyBDMHfKh4oXwnkXeBRW44A1ZhY9xRpxxKwhK7~D68bStVnYMyzANnbOJI8oaibl4o4pu5Mcbg~grJP90IKpketYqtf1k4-IaJLLpBiXNpvy-tNfvZQ-ZPz1IcpnZZOuP1tD6exDNPv2ZlPR5zo9OUJ~~3xK3F~PSm7dcDESYtyvvc3Gaj3wiUsfksf6SJFNEzuzWh3p2Bq3l0nO9gl2mj1iSXie963cY2TBeFtFVyVpeQi6ykKE0LSEZLh5VnndIH3iN3W-blmTezKLXVGeWIyYnvK89YBfVFkk49BXnDBMKSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.944Z\",\"updated_at\":\"2022-02-28T13:59:37.926Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"c\"},{\"key\":\"940a86cbf458591ddf4b02af6c9a221c3015e76d\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/FLk/4Vc/peNTqiNsp6T4ZTvB/style_thumbnail_65.png?Expires=1655683200&Signature=CdhXi4s0dviJ073VwXcXoiumyn16WlwWp1aAwg-w1pGHQ7cq~STK6khZ~K~-l8Ga769bySvpR2n1JBoUpOJgjTv9kw3Iezr7juYf9O-Y7RF9UuHNZ~K0jVa8-EXxu5ABhpD920~wfbJ1e5K1kqIrA89f-LRFD-PDkINU7YYA9KUbcO5rym-jLVNOiMBd4yOp1fO5EEDpFeq4GksroJwC7lAgWj964OsnkXWtLj8PXyphw06wQHTsjOxHYDujTHflWoamgIsFmTOW0F3~4Z3ULksn5sIHaJmaI1V0O9w8arw6~acgPMWLXrt~YmRIUaMrx43bNHM8fS0gjwfszv7V~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Info\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.021Z\",\"updated_at\":\"2022-02-28T13:59:37.919Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"I\"},{\"key\":\"92e7416c09677279e65f8a69142d200172e692c3\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1434\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ysW/Gp0/RXHjJcWnlcuj9nQs/style_thumbnail_9.png?Expires=1655683200&Signature=DLxVOby0ehHmxBJkOLnXZeYXnKyg9Ryfq7StuDaBa6hMbsxwEWlFDrSZEgoUlh-rVxVZWZMIpKiObzWC9XG4l2d8dDEYgsfptfXtxEzc2U64m2jWqUrH4-U6HGz9oCbAwIW8~Gz51yEQRrLAgPozubIVg0q-X2t9qA8yzZkWGDnDSgmIwNryvGOuLdcQEGQGEa-iu6pKQSwWNXhhxSGZknewS~cOq2zIo50gjC~X5YvUGlPc5gqeboMDMdQd3liBtgL6K~SmikcrFGOkgDMQKDg1ZiOUHKfQrfN1QdGnwOiuQhPA6fJVQMN4XJk6ylgbG-bt4krHQ3xsHQnV93y1tA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.739Z\",\"updated_at\":\"2022-02-28T13:59:37.905Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"P\"},{\"key\":\"91d9d70444271282cf7439f4ec6d7414673e101d\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2381\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0OG/hF3/HZeJS4BHwWdsvBlm/style_thumbnail_89.png?Expires=1655683200&Signature=cW9VEBmmZqNPllSJcOplbV64fZGksreQK88rhJq8XH978nWRNr26JT2XIxsxG86bzX9WNx8D4XeyoMWlmnDL7m3GzH0SF6~1xxC66a~EBhR2T8OWDpi-PnAMBHYU7TO1UWEr~8bm1qfAZyUTxayFrrig5EfX7WNNNBq2Y24y3JvzshQPAd~uOSkZSqz5yI5M4KmkmVx54sTlHvlfgxQtJUVxCQpDMrrd4~pCOl3foN74foI5ky9ZoB1EW7wU~1IAdWKGKYyaiTRCLi0xKiaNQHZZqZTwNwKlh5DhuvbF-8baPY3RzZYpgPPxKTq8ckwj8yqg2c-YRExj~mCh2DyM4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary\",\"description\":\"Secondary text and icon color\",\"created_at\":\"2022-02-25T14:45:34.162Z\",\"updated_at\":\"2022-02-28T13:59:37.898Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"/\"},{\"key\":\"9150199360074aaba9324b8a55d822519e18aa97\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1524\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Sp7/1km/x4YTyEuraq5FXqeY/style_thumbnail_54.png?Expires=1655683200&Signature=hYe82ughkhwfL1dQ5zMcw5jFqyRLkX8HPvEtuQ9tTumo-p2iRGY7dpVBCXCkzdnG~1HH6NVnEZ1QQZGvtdEn-9V7bg74JsjRz~9rFzxQTSHN2z-RlNMWBIqgO5DREuit~AZi~oC8Z9EQg0aIaLYdJKoYXRKiu4nny5PJSJsRMPMnkXrjLcMX7nA8PFjjM6A~E2Ifcn-IfXMYM8U2m95h46NWOSbT7dNbIYAAKwsrw1OB7en4FtQsmp-9sSZwizEhi5Tw7TFqVFrk2SVvPTWI5~W2sd~3uzs58QrlgsfLjj4CeOUsYTwlBqGSUGXCUo6pX9Qc9jxkc9KJ3wo6Q22Arg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Neutral\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.961Z\",\"updated_at\":\"2022-02-28T13:59:37.892Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"b\"},{\"key\":\"89db9a0f00ec24654902a882493c614afeed7b85\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1432\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/W9Y/Tz5/TvYMu2S3EEJkPDCy/style_thumbnail_61.png?Expires=1655683200&Signature=adPxNdGjBD2nldrLZ7XPjaMm3cnEQnLJ8kdazX8wZ5EQaLze1Nj~Fu-R4EUBF92ynn3y1tArZ2sw4dN9g5e7~Ipsa4biq3mAo-C6-SWumaud0cQ7N6Li6sNeMlNjZ4I4dHQVhmGnR3b4iYuJ6DzqJ1X7N8n6A9epHxPVuA~6vz0Ml~PzmSzbvjF0ZG4WF7RI9YIzmNd~3fBBRl6gi83cFMYqHbb1AeU-WkgCbpeFghEj0RQ3FN13UE9YDMiJd8OF7qQCvkgMk47haBXcrR1NyhneaE~mB74wOnu8QqgL2zKYpMBiIvGRou2vyWwZq0kuHMzqgvBbG18zxLs2CPxgdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.003Z\",\"updated_at\":\"2022-02-28T13:59:37.865Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"N\"},{\"key\":\"849ee15caebf1fcfad9462c682e874adc911066c\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2369\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vtW/3Xn/2ByyAsphGW0KX2GA/style_thumbnail_73.png?Expires=1655683200&Signature=V1P5QVx3Ue2QX1N1zC9iOBGt~CQEqRsutIwVAd344oz59oi-wmdwlZVNNaUpDGVsF~f75iNsb~G12HTUQ53fnBhTePFI5JEMdw6eNBGjunGgDp5uLQktc8XQsQvVAQpBkaMMg6g7c7SBwCJRPmkTnBQHF4NOpL0J06g6jREVHEVADJaQtgZk2lQ9xW1CCiUjwVQ0MA5ZL3jhOIHFSbvyTAta59c3vFiTzC2KyWCjym~PMecfUGgrdNurhVnr6AX96Bilybhvf5ZxbWiAkiGA4VobRAzWK8jAz7HCoe9AIhu0mkUKusk7XYsVGDWj~VMIgf6tqi5J6dFackYawW7NAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background App\",\"description\":\"Application body background\",\"created_at\":\"2022-02-25T14:45:34.062Z\",\"updated_at\":\"2022-02-28T13:59:37.858Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"\\\"\"},{\"key\":\"821e09eadc1a11a5fed34fdcd72d8cd8c6a5eea3\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"17:738\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rXE/6PU/5WhCWN406NEidLGZ/style_thumbnail_81.png?Expires=1655683200&Signature=ZIRxZwhq40w1SG9Lv5A5XoIGKTG~AYHg85RilcUQLBu8W-niDyShHqlwMPfikDZDVxdyNU8g4RQyeQ1Oc4YhZRok8JKFpKMMs0SBf5ydnr6tslmvtJ0JBUXdvwKnY7rXLiPo99n~M9zpF6FFSZ2gPjSRKRYe3sTWR3cM-b7PBQd6hbvz7naoVthZ7-ZbkaM~UrLMnG2CL3nQqURUrswzFheLLARL2OKNiqDnPX7HhFYhWUu26CeRuDCwsPhDF9FNjAAiUrDQPAte9YXbNB50iprq7vHqhON4DQBEbJeWFMqPjCcefGSxag8ZuocS9~AmRFaJri4lIVaX5OuF6CbKLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Regular\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.105Z\",\"updated_at\":\"2022-02-28T13:59:37.852Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"6\"},{\"key\":\"7eabaf8ca6a4fb2a2593221f09c2aa40bbde8426\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1483\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/AFZ/mv6/YYPhdGzpnwQetYZZ/style_thumbnail_72.png?Expires=1655683200&Signature=Y~bnbk2U4thF6ThC~tbUbPfZ0h72Qw8bdiqtw5MS3grz6vuAu1CVu3fXcwISJTNe~oD4H4dGOLkG7-7J69E-SSIA8UKfX-jEeDdyw-Tlx4v5dlC1Ug-EtnDGjK4992A62ZAGBZMukZGSjrjdhJvu9I0Vu4mjFbO9okFqxtA7kYCApEUEHP-gImsXvj2sg0NyAXIGFDhquYDkaGKkCBotNB7prgrVNa5QU8tTCDf89jXj0dB4yJ7Ftalf~04EhNA5zdfbbVd2ouS8m27qa45lcYEZEzWWShHbABBt0tAZxqx3-QLVULxtjrggLIcCA2kFMsASnISbUoZqtXGuqm46EA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.056Z\",\"updated_at\":\"2022-02-28T13:59:37.836Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"S\"},{\"key\":\"79b18797f39cb1863664b854adeb891fff78999f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1516\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vab/dBc/QYlfOdgbJNYq9w9q/style_thumbnail_80.png?Expires=1655683200&Signature=OzPCkV9qIa6UwXM7KUX3jR~6teGqwQI~EXPNSmANOPDfTqu4tu-rA8zDzuW4vYkG0oSv9ppvYr6ka2pvNJRBt7BFhUGs7Ftyjw1GZphhHhuL4~s9aR5YggBm2zD2wdllVS3zD25mfkgEt6j66zmLKYDbsOnbkANZwTsooH5iDRSXIR3uNjg6X0JHLUQn9QsTxV1C4U9Rqfcbd7IKHpy9WYj91v5aXA6q6EdDheZt~fi1-tb4U-mnemo4MHNVorGkZPa4N9L6-cH8NaUTVxlEvNHJhae9OU9RvasK8TpiREFEqpFPZvWhThwuDUMv396WdEkHPGixgg-dgK8-cccbQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Anomaly\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.099Z\",\"updated_at\":\"2022-02-28T13:59:37.817Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Z\"},{\"key\":\"784e37fafab1579595ad655ddbb5f055e3f8281f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"21:448\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uD2/pQ6/OoyvFX51PPyneK0z/style_thumbnail_78.png?Expires=1655683200&Signature=SEE5zba1OzRvd0oivcobnwkjFJBB23Rxtn26nQLFcmAhWpXzaCzo~w7vmVM8KhSEmWxm0YornIboZ6bpjIBwnannWhz-mxKWblg~cOE5M6XbdB2RsBDn88SxCutTF4llYp0Ik6hJPiW-W8MqDKqhia30G5ICA~PBeBOLqqXL8xDeFuqOiU6TnBxEvExrTyMY7tryJn0~EyXnWn5WP5-5Cjicdj7RZYaLTrHx5Cmxbb7ySgzQzEWwQ62wKMMKOkdU5M4XffxA3E-pRIFqbBV440u05a4dH9qBNFnZFWWvYN8YLpQSoYjoMDouXmt9hS0lqBFD4usJcONmigbBos5kwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.087Z\",\"updated_at\":\"2022-02-28T13:59:37.810Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"C\"},{\"key\":\"6958d47026f3b4daaa44a3c9ddb873ebcc5c43da\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2373\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0EX/a1p/2gGRGRFs1QUY3lhr/style_thumbnail_77.png?Expires=1655683200&Signature=btPLiF73qolRHw00IAUwcy4MT4C9hJzpCcq9RHGYrlF3e7SCFjomzK2qJpEJtthRgnRwt3n48OLckiBv4dtRoiE7isXu10vqR2na8O4n40tppK-37q6GxbJ4vRAVRvdnKkwq6~u07VORMG-ouyQW387P1RAf70bS45f8-17NLJ9Ns9BjQmfs4H4xptkMNqQ02ZsmkKWlnt72WwLIesNNvynH2DiWXvYC7TFKBRtbey1tx7AjYKP4H8i-831BlB8k3X-7nzt0oGNEGtdfTSMmNzDGnUykoRuEId7rP-WkfPETXq3EdjZN2pbPcRYRFNDZO-MsZxWNisvjFxyiz2w2bw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Hover\",\"description\":\"Background color for System items on hover state\",\"created_at\":\"2022-02-25T14:45:34.082Z\",\"updated_at\":\"2022-02-28T13:59:37.768Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"&\"},{\"key\":\"5ef38ee02ae56cd3baa7bb23ed3ec879ebadd1e8\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"17:739\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/drW/lR4/5KssRAOrElTULUKK/style_thumbnail_67.png?Expires=1655683200&Signature=hJKABXa6-qUnaelqrHdGbibt~J7FY0oE4QiSJi6Agy1TcNYMl3RWJlC0VQDw~Od5qjssg~vx2FxdpkYHNkhDT24JHrCIJg1CQnAeJQ0DL0DHiH-ZvpgUyHQB1K4oNvNcH~W01VY2d0usC6RqSlOTb8n5BYr84ZmSyOlZoJUiwf4Irde9T2c3nroahF3Qeh24tCfieMg3xroOm~4CyVEjzSssVKh3PHUy0tYjofqTfVLHdc36n9NYE5QS~OHI3be38JwjicH86GT~Yyor075SuFMrWup5FIRNEDh3r90HAUv-Y4B~5o34zvIRq012VxS9sE0qUKxdV8~~q4t6myVpkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.031Z\",\"updated_at\":\"2022-02-28T13:59:37.734Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"7\"},{\"key\":\"5e4afb5695c4a9854887b8c04d8a805f5357d7f0\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2382\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VCv/lCL/g1bCfOk7bLEb81nC/style_thumbnail_88.png?Expires=1655683200&Signature=X~vgkfwy9QscXxgKzjBevrrLLGpCqL-1a2EyViXZlvaxOeWV65MdIWKoW09YLBOf1IwGz5b~v-4N3njcRsue7kqhxm3SQaah3qUel6DNbj2v51I0DkX5dmlYtlV4opIPrpIRbfwaGH2eedeaB3L~--3QTVXGJFiN5do4IXK8z~tDgvHqglljb-6pyphJm9AgzAUXlCxd9pluNdbjpnijUvz6TzkpQ2SJrmB6Pc76XI4u2gp22kGIFlCNQ2O-MWTs5x94QWcE9vFMJwEAFnyzcZ99b-z4pbSZHjm8sLf-Lvr4oIbUUiKkK9QtEWTHgttRf8KCXOyfqLOB5V5YnShKNw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary Inverted\",\"description\":\"Inverted Secondary text and icon color\",\"created_at\":\"2022-02-25T14:45:34.157Z\",\"updated_at\":\"2022-02-28T13:59:37.728Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"0\"},{\"key\":\"56fece13f083666cde3d6300b39ba3c53ec51a11\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"20:526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Veh/Z3W/8Wc4EHsdR5jibLTp/style_thumbnail_86.png?Expires=1655683200&Signature=ezSVF5iXGNk50wwGGk2zM11Fqumc-WTzv6h60kqvyUy30J75TvlVgbhPv7nPZSgLorDgYk6Yr4OcaAUPazkz2HhfOvCjYojZMUs4TfVvRsu~1Gl4XIQHUufG8MYQc4UoLQG72eLx7u-STfHs4~wkIe9ErpQ5okmnmxyk15V6rKvOh9SzrgvTwviJYd0872cBZE7THBevGKmkmnq-gXg5-le1lNd85qphu5Slu7~4tdu0kDhnLnDwCYXPTh0bTw83pyRSWJzOa8IrSiaBCiFBxkWPLsL8lj619a3Zej8w693sbi14i~ECvx8OcC3XBPQs81K-BLD0MYQACvCItzaAnQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.131Z\",\"updated_at\":\"2022-02-28T13:59:37.694Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"A\"},{\"key\":\"564730fe54614022451c217022215ec8aca8a312\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"21:454\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/UrG/VyI/SQfV26J8A5W9AaV6/style_thumbnail_113.png?Expires=1655683200&Signature=XUyeCu7HviS9-NdI8bIfaeypzscPp7EtsoMSzQ0R7e4YZTCH3M6aoMiFtbiitFIqKyxnRuAAplH2ZK6EzG-evTL8DSK7O6Y0kYAU7w22KpHb8~v3I-6E7NiG78RxWbDgb34OTm3OTFuX2bOy6svkUakLwOdM7d4rqO5rg8eJcF8tY~FcW8OUJoBJ8~VF43GOmajeUc74PsFMMMS4xhAwzgLdetaICjS5l5CgdSbacI4BpXdt8gOde0YfqW6rXZ~GeMXko0AlhBOgEf1a7DGqwVHv~~oUW1Zmm0eNtMis7m7Eki24hEArKyS5xqRtSm8yu9hGBdFAfSAZhX6orOaALg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Foreground On Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.290Z\",\"updated_at\":\"2022-02-28T13:59:37.687Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"D\"},{\"key\":\"55127373faa66ee6563815b9adafb1727984e9a5\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"17:740\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nJY/Y8F/rMJb3Vd9TST7qwQt/style_thumbnail_74.png?Expires=1655683200&Signature=JIQ9A2FpK4I1dHcqx0S~yEYynqJLfAruM7KxsNRS3YihvERD5Oln4aVIKePl8uKs0CVQinUUISIenea9smy-LuylYWj-3BoGiPo3CKF5i8j8M7iZBGZsE9vKK6-R5aD~WMUmHKWvPnOi5JJOH0c0o35K0ZivIUZ~jZvwztEpIxLNr4Bmi1qKstFmHo1dDI9K-RPQFuH~ol26JPXgnTyU8Y3ccidrXCz-YIQK9g3~P889LPMjQWpKCf~lig-AqNna41onfgJdM~KBmyrDa5uJI--k1UA8jY7Jl7JxJWs8CLW~DiImICEKvQageMfDum83HJ5oFkzkziip1cMuNzlAdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Strong\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.068Z\",\"updated_at\":\"2022-02-28T13:59:37.679Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"8\"},{\"key\":\"4b099c526d593da7a449c01588e9b0b9377aea1a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1430\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hj0/Qko/LMeobHaXIKXp2wfe/style_thumbnail_63.png?Expires=1655683200&Signature=bNwwhQGb~b06RukVJcfxxKSsjpVxufyZ9z5CyCNrd~XjtpJW8fPNVSWwF1HsXLJWvtDd3y2Rd8QJrLimhvQ894XcVeiyIfVSHhKoTeF-BFmJZ6oAnpamStYV~Ew-NCDGol1C2x1OgJadat6TVdzDPbCDAA~XAjvyPuJ0lpKUJrfQvZvS5qKMLTl7u3dKsnQ1~ZKr7IyRJotOuuvTQaASSmoZ3ZKFyy89nnvYW7EiUq3TdNw1~xCnoYps4~3zl4nxk13cnjzsO1v5kyf28nhXVlXMeS68PI0VCirGSLtbfoO3zc98KewpssUDK2QvsD1vmdhkauj18Xm7FaAEzKENFg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Warning\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.012Z\",\"updated_at\":\"2022-02-28T13:59:37.658Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"L\"}]},\"i18n\":null}");

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

/***/ "./src/app/components/utils.ts":
/*!*************************************!*\
  !*** ./src/app/components/utils.ts ***!
  \*************************************/
/*! exports provided: isEqual, truncateLayerName, toCapitalizedString, rgbToHex, selectAndZoomToLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateLayerName", function() { return truncateLayerName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCapitalizedString", function() { return toCapitalizedString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAndZoomToLayer", function() { return selectAndZoomToLayer; });
const isEqual = (obj1, obj2) => {
    function getType(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    }
    function areArraysEqual() {
        if (obj1.length !== obj2.length)
            return false;
        for (let i = 0; i < obj1.length; i++) {
            if (!isEqual(obj1[i], obj2[i]))
                return false;
        }
        return true;
    }
    function areObjectsEqual() {
        if (Object.keys(obj1).length !== Object.keys(obj2).length)
            return false;
        for (let key in obj1) {
            if (Object.prototype.hasOwnProperty.call(obj1, key)) {
                if (!isEqual(obj1[key], obj2[key]))
                    return false;
            }
        }
        return true;
    }
    function areFunctionsEqual() {
        return obj1.toString() === obj2.toString();
    }
    function arePrimativesEqual() {
        return obj1 === obj2;
    }
    let type = getType(obj1);
    if (type !== getType(obj2))
        return false;
    if (type === "array")
        return areArraysEqual();
    if (type === "object")
        return areObjectsEqual();
    if (type === "function")
        return areFunctionsEqual();
    return arePrimativesEqual();
};
const truncateLayerName = (layerName, maxLength = 25) => {
    if (layerName.length > maxLength) {
        return layerName.substring(0, maxLength) + "...";
    }
    return layerName;
};
const toCapitalizedString = (valueToConvert) => {
    let outputValue = valueToConvert.toString();
    outputValue = outputValue[0].toUpperCase() + outputValue.substring(1);
    return outputValue;
};
const rgbToHex = (r, g, b) => {
    const componentToHex = (colorValue) => {
        colorValue = Math.round(colorValue * 255);
        let hex = colorValue.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    const combineComponents = (r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    };
    return combineComponents(r, g, b);
};
const selectAndZoomToLayer = (layerId) => {
    const layer = figma.getNodeById(layerId);
    figma.currentPage.selection = [layer];
    figma.viewport.scrollAndZoomIntoView([layer]);
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
/* harmony import */ var _app_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/components/utils */ "./src/app/components/utils.ts");
/* harmony import */ var _data_light_mode_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/light-mode.json */ "./data/light-mode.json");
var _data_light_mode_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/light-mode.json */ "./data/light-mode.json", 1);
/* harmony import */ var _data_dark_mode_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/dark-mode.json */ "./data/dark-mode.json");
var _data_dark_mode_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/dark-mode.json */ "./data/dark-mode.json", 1);
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
    height: 448,
};
const createTable = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const tableFrame = figma.createFrame();
    let headerCell = yield figma.importComponentByKeyAsync("ce8fa8e8cab07a19f83f4181ac8cbe76093c6bc3");
    let tableRow = figma.createComponent();
    let cellFillContainerY = false;
    yield figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
    yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
    tableFrame.name = "Table";
    tableFrame.fills = [];
    tableFrame.counterAxisSizingMode = "AUTO";
    tableFrame.layoutMode = "VERTICAL";
    tableFrame.x = figma.viewport.center.x;
    tableFrame.y = figma.viewport.center.y;
    msg.columnConfiguration.find((col) => (cellFillContainerY = col.multiValue));
    [...Array(msg.rows + 1).keys()].map((rowIndex) => {
        tableRow.layoutMode = "HORIZONTAL";
        tableRow.counterAxisSizingMode = "AUTO";
        tableRow.name = "Row";
        msg.columnConfiguration.forEach((col) => __awaiter(void 0, void 0, void 0, function* () {
            let { name: colName, alignment: colAlignment, cellType: colCellType, multiValue: colMultiValue, } = col;
            colAlignment = Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_2__["toCapitalizedString"])(colAlignment);
            colCellType = Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_2__["toCapitalizedString"])(colCellType);
            colMultiValue = Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_2__["toCapitalizedString"])(colMultiValue);
            if (rowIndex === 0) {
                let thisHeaderCell = headerCell.createInstance();
                let textNodeOfHeaderCell = thisHeaderCell.children[0]
                    .children[0];
                const shouldHaveHeaderText = colCellType !== "Favorite" && colCellType !== "Actions";
                const cellTypeIsActions = colCellType === "Actions";
                const hasCustomColName = colName.length;
                console.log(colName.length);
                const setHeaderTextCharacters = (newChars) => {
                    textNodeOfHeaderCell.deleteCharacters(0, textNodeOfHeaderCell.characters.length);
                    textNodeOfHeaderCell.insertCharacters(0, newChars);
                };
                if (hasCustomColName) {
                    thisHeaderCell.name = colName;
                    setHeaderTextCharacters(colName);
                }
                else {
                    thisHeaderCell.name = "Header";
                    setHeaderTextCharacters("Header");
                }
                if (!shouldHaveHeaderText) {
                    const arrowsLayer = thisHeaderCell.findOne((child) => child.name === "Arrows");
                    arrowsLayer.visible = false;
                    setHeaderTextCharacters(" ");
                }
                thisHeaderCell.setProperties({ Alignment: colAlignment });
                const determineHeaderCellWidth = () => {
                    if (msg.isMultiValue)
                        return 120;
                    if (colCellType === "Entity")
                        return 102;
                    if (!shouldHaveHeaderText)
                        return 50;
                    return thisHeaderCell.width;
                };
                thisHeaderCell.resize(determineHeaderCellWidth(), thisHeaderCell.height);
                thisHeaderCell.children[0].layoutGrow =
                    cellFillContainerY ? 1 : 0;
                thisHeaderCell.primaryAxisSizingMode = cellFillContainerY
                    ? "FIXED"
                    : "AUTO";
                thisHeaderCell.counterAxisSizingMode = !shouldHaveHeaderText
                    ? "AUTO"
                    : "FIXED";
                thisHeaderCell.counterAxisSizingMode = cellTypeIsActions
                    ? "FIXED"
                    : thisHeaderCell.counterAxisSizingMode;
                tableRow.appendChild(thisHeaderCell);
            }
        }));
        if (rowIndex === 0) {
            tableFrame.appendChild(tableRow);
        }
        else {
            let thisTableRow = tableRow.createInstance();
            thisTableRow.children.map((cell, index) => {
                cell = cell;
                let { cellType: colCellType, multiValue: colMultiValue } = msg.columnConfiguration[index];
                const cellTypesThatCanBeMultiValue = [
                    "Text",
                    "Metric",
                    "Entity",
                    "Link",
                ];
                const tableMultiValue = Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_2__["toCapitalizedString"])(msg.isMultiValue);
                colCellType = Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_2__["toCapitalizedString"])(colCellType);
                colMultiValue = Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_2__["toCapitalizedString"])(colMultiValue);
                const colCanBeMultiValue = cellTypesThatCanBeMultiValue.some((cellType) => cellType === colCellType);
                cell.name === "Header" ? (cell.name = "Cell") : null;
                cell.setProperties({ Type: "Body" });
                cell.children[0].children[0].setProperties({
                    Type: colCellType,
                    "Multi-value": colCanBeMultiValue ? tableMultiValue : "False",
                });
                cell.counterAxisSizingMode = "FIXED";
                if (msg.isMultiValue && colMultiValue === "False") {
                    if (!colCanBeMultiValue)
                        return;
                    const additionalValueLayer = cell.findOne((child) => child.name === "Secondary value" && child.type === "TEXT");
                    additionalValueLayer.characters = " ";
                }
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
            const selectedTextLayers = selectedLayer.findAll((n) => n.type === "TEXT");
            selectedTextLayers.forEach((layer) => {
                Object(_figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_1__["isVisibleNode"])(layer) && pushTextLayerToArray(layer, textLayers);
            });
        }
        else if (selectedLayer.type === "TEXT") {
            Object(_figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_1__["isVisibleNode"])(selectedLayer) &&
                pushTextLayerToArray(selectedLayer, textLayers);
        }
    });
    return figma.ui.postMessage({
        type: "new-text-selection",
        message: {
            textLayers,
            selectedLayers: selection,
        },
    });
};
const pushColorToArray = (layer, colorType, array, layerHasSegmentStyles = false) => {
    var _a, _b, _c;
    const styleIdType = colorType === "fills" ? "fillStyleId" : "strokeStyleId";
    const isSolidColor = ((_a = layer === null || layer === void 0 ? void 0 : layer.fills[0]) === null || _a === void 0 ? void 0 : _a.type) === "SOLID";
    const colorIsImage = colorType === "fills" && ((_b = layer === null || layer === void 0 ? void 0 : layer.fills[0]) === null || _b === void 0 ? void 0 : _b.type) === "IMAGE";
    const colorIsGradient = colorType === "fills" && ((_c = layer === null || layer === void 0 ? void 0 : layer.fills[0]) === null || _c === void 0 ? void 0 : _c.type.includes("GRADIENT"));
    const colorIsVisible = layerHasSegmentStyles
        ? true
        : layer[colorType][0].visible;
    const colorInHex = (colorInRGB) => {
        return Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_2__["rgbToHex"])(colorInRGB.r, colorInRGB.g, colorInRGB.b);
    };
    const segmentColorInHex = layerHasSegmentStyles
        ? colorInHex(layer.segment.fills[0].color)
        : false;
    const hasColorStyle = () => {
        if (layerHasSegmentStyles) {
            return layer.segment.fillStyleId.length > 0;
        }
        else {
            return isSolidColor ? layer[styleIdType].length > 0 : false;
        }
    };
    if (!colorIsImage &&
        !colorIsGradient &&
        colorIsVisible &&
        !layer.isChildOfIconWithFill) {
        array.push({
            colorId: uuid_random__WEBPACK_IMPORTED_MODULE_0___default()(),
            layerId: layer.layerId,
            layerName: layer.name,
            layerType: layer.type,
            color: layerHasSegmentStyles ? layer.segment.fills[0] : layer[colorType],
            colorStyleId: layerHasSegmentStyles
                ? layer.segment.fillStyleId
                : layer[styleIdType],
            hasColorStyle: hasColorStyle(),
            visible: layer.visible,
            colorType: colorType.slice(0, -1),
            colorInHex: layerHasSegmentStyles
                ? segmentColorInHex
                : colorInHex(layer[colorType][0].color),
            layerHasSegmentStyles: layerHasSegmentStyles,
            segment: layerHasSegmentStyles && layer.segment,
        });
    }
};
let colorTokens = [];
const getColorTokens = (mapThemesToEachOther) => __awaiter(void 0, void 0, void 0, function* () {
    let lightThemeTokens = yield Promise.all(_data_light_mode_json__WEBPACK_IMPORTED_MODULE_3__.meta.styles.map((style) => __awaiter(void 0, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, style), { theme: "light" });
    })));
    let darkThemeTokens = yield Promise.all(_data_dark_mode_json__WEBPACK_IMPORTED_MODULE_4__.meta.styles.map((style) => __awaiter(void 0, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, style), { theme: "dark" });
    })));
    if (mapThemesToEachOther) {
        lightThemeTokens = lightThemeTokens.map((token) => {
            var _a;
            const darkThemeToken = darkThemeTokens.filter((darkToken) => token.name.toLowerCase() === darkToken.name.toLowerCase());
            return Object.assign(Object.assign({}, token), { darkThemeToken: ((_a = darkThemeToken[0]) === null || _a === void 0 ? void 0 : _a.key) ? darkThemeToken[0].key : null });
        });
        darkThemeTokens = darkThemeTokens.map((token) => {
            var _a;
            const lightThemeToken = lightThemeTokens.filter((lightToken) => token.name.toLowerCase() === lightToken.name.toLowerCase());
            return Object.assign(Object.assign({}, token), { lightThemeToken: ((_a = lightThemeToken[0]) === null || _a === void 0 ? void 0 : _a.key)
                    ? lightThemeToken[0].key
                    : null });
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
            colorStyleWithHex = Object.assign(Object.assign({}, style), { hex: Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_2__["rgbToHex"])(tempRectangle.fills[0].color.r, tempRectangle.fills[0].color.g, tempRectangle.fills[0].color.b) });
        }
        else {
            colorStyleWithHex = Object.assign(Object.assign({}, style), { hex: "None" });
        }
        return colorStyleWithHex;
    })));
    tempRectangle.remove();
});
const getColorStats = (forThemeSwitcher = false) => __awaiter(void 0, void 0, void 0, function* () {
    figma.skipInvisibleInstanceChildren = true;
    yield getColorTokens(true);
    const getRawLayersWithColor = () => {
        let selection = figma.currentPage.selection;
        const relevantLayers = selection.map((selectedLayer) => {
            var _a;
            let outputForLayersWithChildren = [];
            const isRelevantLayer = (n) => {
                let acceptableNodetypes = [
                    "ELLIPSE",
                    "FRAME",
                    "GROUP",
                    "COMPONENT",
                    "INSTANCE",
                    "LINE",
                    "POLYGON",
                    "RECTANGLE",
                    "SHAPE_WITH_TEXT",
                    "STAR",
                    "TEXT",
                    "BOOLEAN_OPERATION",
                ];
                const hasFill = "fills" in n && (n === null || n === void 0 ? void 0 : n.fills[0]) !== undefined;
                const hasStroke = "strokes" in n && (n === null || n === void 0 ? void 0 : n.strokes[0]) !== undefined;
                const isChildOfBooleanOperation = n.parent.type === "BOOLEAN_OPERATION";
                const textLayerHasSegmentStyles = () => {
                    if (n.type !== "TEXT") {
                        return false;
                    }
                    else {
                        return n.getStyledTextSegments(["fills"]).length > 1;
                    }
                };
                forThemeSwitcher && acceptableNodetypes.push("VECTOR");
                const hasFillOrStroke = hasFill || hasStroke;
                const nodeIsValidNodeType = acceptableNodetypes.some((nodeType) => n.type === nodeType);
                return (nodeIsValidNodeType &&
                    (hasFillOrStroke || textLayerHasSegmentStyles()) &&
                    !isChildOfBooleanOperation);
            };
            const selectedLayerHasChildren = "findAll" in selectedLayer && ((_a = selectedLayer === null || selectedLayer === void 0 ? void 0 : selectedLayer.children) === null || _a === void 0 ? void 0 : _a.length) > 0;
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
        output = output.filter((layer) => Object(_figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_1__["isVisibleNode"])(layer));
        return output;
    };
    const rawLayersWithColor = getRawLayersWithColor();
    const layersWithColor = rawLayersWithColor.map((layer) => {
        const hasFill = "fills" in layer && layer.fills[0] !== undefined;
        const hasStroke = "strokes" in layer && layer.strokes[0] !== undefined;
        const textLayerHasSegmentStyles = layer.type === "TEXT" &&
            layer.getStyledTextSegments(["fills"]).length > 1;
        const hasFillAndStroke = hasFill && hasStroke;
        const isChildOfIcon = layer.parent.type === "BOOLEAN_OPERATION";
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
            isChildOfIconWithFill: isChildOfIconWithFill,
            hasSegmentStyles: textLayerHasSegmentStyles,
        };
    });
    const allInstancesOfColor = layersWithColor
        .map((layer) => {
        let tempColors = [];
        if (layer.hasFillAndStroke) {
            pushColorToArray(layer, "fills", tempColors);
            pushColorToArray(layer, "strokes", tempColors);
        }
        else if (layer.hasFill) {
            pushColorToArray(layer, "fills", tempColors);
        }
        else if (layer.hasStroke) {
            pushColorToArray(layer, "strokes", tempColors);
        }
        else if (layer.hasSegmentStyles) {
            const node = figma.getNodeById(layer.layerId);
            const segmentedFills = node.getStyledTextSegments(["fills"]);
            segmentedFills.forEach((segment) => {
                const fillStyleId = node.getRangeFillStyleId(segment.start, segment.end);
                const segmentToBePushed = Object.assign(Object.assign({}, segment), { fillStyleId });
                const layerToBePushed = Object.assign(Object.assign({}, layer), { segment: segmentToBePushed });
                pushColorToArray(layerToBePushed, "fills", tempColors, true);
            });
        }
        return tempColors;
    })
        .flat();
    const colorsUsingOneCoreStyle = allInstancesOfColor
        .filter((color) => {
        return colorTokens.some((oneCoreColor) => {
            return color.colorStyleId.includes(oneCoreColor.key);
        });
    })
        .map((color) => {
        let oneCoreToken = undefined;
        colorTokens.forEach((oneCoreColor) => {
            if (color.colorStyleId.includes(oneCoreColor.key)) {
                oneCoreToken = oneCoreColor;
            }
        });
        return Object.assign(Object.assign({}, color), { token: oneCoreToken });
    });
    const oneCoreColorStyleCoverage = `${((colorsUsingOneCoreStyle.length / allInstancesOfColor.length) *
        100).toFixed(0)}%`;
    if (forThemeSwitcher) {
        return {
            colorsUsingOneCoreStyle,
            allInstancesOfColor,
            oneCoreColorStyleCoverage,
        };
    }
    const colorsWithColorStyle = allInstancesOfColor.filter((color) => {
        return color.hasColorStyle;
    });
    const colorsNotUsingOneCoreColorStyle = allInstancesOfColor.filter((color) => {
        return !colorTokens.some((oneCoreColor) => {
            return color.colorStyleId.includes(oneCoreColor.key);
        });
    });
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
let themeSwitchedNotification = undefined;
const switchToTheme = (theme, closeAfterRun = false) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (closeAfterRun) {
        figma.showUI(__html__, { width: 70, height: 0 });
    }
    else {
        figma.ui.postMessage({ type: `loading-${theme}-theme-switch` });
    }
    if (figma.currentPage.selection.length === 0) {
        themeSwitchedNotification && (themeSwitchedNotification === null || themeSwitchedNotification === void 0 ? void 0 : themeSwitchedNotification.cancel());
        figma.notify("Select some layers before choosing a theme", { error: true });
        return closeAfterRun && figma.closePlugin();
    }
    themeSwitchedNotification && (themeSwitchedNotification === null || themeSwitchedNotification === void 0 ? void 0 : themeSwitchedNotification.cancel());
    const loadingNotification = figma.notify(`Converting selection to ${theme} mode...`);
    const colorStats = yield getColorStats(true);
    let importedStyles = [];
    let keysToLoad = () => {
        let keys = [];
        colorStats.colorsUsingOneCoreStyle.forEach((color) => {
            var _a;
            if ("theme" in color.token && ((_a = color.token) === null || _a === void 0 ? void 0 : _a.theme) !== theme) {
                const keyOfTokenInOppositeTheme = theme === "light"
                    ? color.token.lightThemeToken
                    : color.token.darkThemeToken;
                const keyIsNotDuplicate = !keys.some((key) => key === keyOfTokenInOppositeTheme);
                if (keyOfTokenInOppositeTheme === null) {
                    console.error(`Missing token: No ${theme} theme token found for "${color.token.name}".`);
                    return;
                }
                keyIsNotDuplicate && keys.push(keyOfTokenInOppositeTheme);
            }
        });
        return keys;
    };
    importedStyles = yield Promise.all(keysToLoad().map((key) => __awaiter(void 0, void 0, void 0, function* () { return figma.importStyleByKeyAsync(key); })));
    for (const color of colorStats.colorsUsingOneCoreStyle) {
        if ("theme" in color.token && ((_a = color.token) === null || _a === void 0 ? void 0 : _a.theme) !== theme) {
            const node = figma.getNodeById(color.layerId);
            const keyOfTokenInOppositeTheme = theme === "light"
                ? color.token.lightThemeToken
                : color.token.darkThemeToken;
            const importedStyle = importedStyles.filter((style) => style.key === keyOfTokenInOppositeTheme)[0];
            if (keyOfTokenInOppositeTheme === null) {
                console.error(`Missing token: No ${theme} theme token found for "${color.token.name}".`);
                return;
            }
            if (color.layerHasSegmentStyles) {
                node.setRangeFillStyleId(color.segment.start, color.segment.end, importedStyle.id);
            }
            else {
                node[`${color.colorType}StyleId`] = importedStyle.id;
            }
        }
    }
    loadingNotification.cancel();
    const coverageAsInteger = colorStats.oneCoreColorStyleCoverage.substring(0, colorStats.oneCoreColorStyleCoverage.length - 1);
    const isErrorWorthy = parseInt(coverageAsInteger) < 50;
    if (colorStats.oneCoreColorStyleCoverage === "100%") {
        themeSwitchedNotification = figma.notify(`${theme === "light" ? "🔆" : "🌙"} Selection set to ${theme} mode`);
    }
    else {
        themeSwitchedNotification = figma.notify(`✋ Warning: Only ${colorStats.oneCoreColorStyleCoverage} converted to 
      ${theme} mode because some colors aren't using One Core color styles.`, { timeout: isErrorWorthy ? 999999999 : 15000, error: isErrorWorthy });
    }
    figma.ui.postMessage({
        type: "theme-switched",
        message: Object.assign({ switchedTo: theme, closeAfterRun, colorsUsingOneCoreStyle: colorStats.colorsUsingOneCoreStyle.length, colorsSelected: colorStats.allInstancesOfColor.length, colorsSwitched: colorStats.oneCoreColorStyleCoverage }, customEventData),
    });
});
const fileName = encodeURIComponent(figma.currentPage.parent.name);
const currentSelection = figma.currentPage.selection;
const currentNodeId = encodeURIComponent(currentSelection.length > 0 ? currentSelection[0].id : figma.currentPage.id);
const fileUrl = `https://figma.com/file/${figma.fileKey}/${fileName}?node-id=${currentNodeId}`;
let customEventData = {
    fileName: figma.currentPage.parent.name,
    fileKey: figma.fileKey,
    "User Name": figma.currentUser.name,
    "User Avatar": figma.currentUser.photoUrl,
    "User ID": figma.currentUser.id,
    "Session ID": figma.currentUser.sessionId,
    fileUrl,
};
const navigateTo = (screen) => {
    figma.ui.postMessage({
        type: "figma-command",
        message: Object.assign({ openedTo: screen }, customEventData),
    });
};
const navigationActions = {
    "open-home": () => {
        figma.showUI(__html__, { themeColors: true, width: 300, height: 448 });
        navigateTo("open-home");
    },
    "open-table-creator": () => {
        figma.showUI(__html__, { themeColors: true, width: 300, height: 448 });
        navigateTo("open-table-creator");
    },
    "theme-switcher-to-light": () => {
        switchToTheme("light", true);
    },
    "theme-switcher-to-dark": () => {
        switchToTheme("dark", true);
    },
    "open-language-linter": () => {
        figma.showUI(__html__, { themeColors: true, width: 475, height: 500 });
        navigateTo("open-language-linter");
    },
    "open-color-linter": () => {
        figma.showUI(__html__, { themeColors: true, width: 475, height: 500 });
        navigateTo("open-color-linter");
    },
};
navigationActions[figma.command]();
console.log(figma.command);
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.type === "navigate-to-tab") {
        switch (msg.tabClicked) {
            case "home":
                uiSize = {
                    width: 300,
                    height: 448,
                };
                figma.ui.resize(uiSize.width, uiSize.height);
                navigateTo("open-home");
                break;
            case "table-creator":
                uiSize = {
                    width: 300,
                    height: 448,
                };
                figma.ui.resize(uiSize.width, uiSize.height);
                navigateTo("open-table-creator");
                break;
            case "language-linter":
                sendCurrentTextSelection();
                uiSize = {
                    width: 475,
                    height: 500,
                };
                figma.ui.resize(uiSize.width, uiSize.height);
                navigateTo("open-language-linter");
                break;
            case "color-linter":
                uiSize = {
                    width: 475,
                    height: 500,
                };
                figma.ui.resize(uiSize.width, uiSize.height);
                navigateTo("open-color-linter");
                break;
        }
    }
    if (msg.type == "display-error") {
        figma.notify(msg.content, { error: true });
    }
    if (msg.type === "initialize-selection") {
        figma.ui.postMessage({
            type: "initial-selection",
            message: figma.currentPage.selection,
        });
    }
    if (msg.type === "close-plugin") {
        figma.closePlugin();
    }
    if (msg.type === "create-table") {
        createTable(msg);
    }
    if (msg.type === "run-language-linter") {
        sendCurrentTextSelection();
    }
    if (msg.type === "request-local-custom-dictionary") {
        figma.clientStorage
            .getAsync("languageLinterCustomDictionary")
            .then((result) => {
            figma.ui.postMessage({
                type: "local-custom-dictionary-retrieved",
                message: result ? result : [],
            });
        });
    }
    if (msg.type === "add-to-dictionary") {
        figma.clientStorage
            .getAsync("languageLinterCustomDictionary")
            .then((result) => {
            let newCustomDictionary = result ? result : [];
            newCustomDictionary.push(msg.wordToAdd);
            figma.clientStorage.setAsync("languageLinterCustomDictionary", newCustomDictionary);
        });
    }
    if (msg.type === "get-sample-text") {
        const sampleText = figma.currentPage.selection;
        figma.ui.postMessage({ type: "sample-text", message: sampleText });
    }
    if (msg.type === "sample-text-changed") {
        Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_2__["selectAndZoomToLayer"])(msg.activeNodeId);
    }
    if (msg.type === "update-source-text") {
        const activeTextLayer = figma.getNodeById(msg.layerId);
        let fontName = activeTextLayer.fontName;
        if (fontName === figma.mixed) {
            yield Promise.all(activeTextLayer
                .getRangeAllFontNames(0, activeTextLayer.characters.length)
                .map(figma.loadFontAsync));
        }
        else {
            yield figma.loadFontAsync(fontName);
        }
        activeTextLayer.deleteCharacters(0, activeTextLayer.characters.length);
        activeTextLayer.insertCharacters(0, msg.updatedText);
        figma.ui.postMessage({
            type: "source-text-updated",
            message: msg.updatedText,
        });
    }
    if (msg.type === "text-linted") {
        figma.ui.postMessage({
            type: "text-linted",
            message: {
                customEventData,
                minimalReport: msg.minimalReport,
                fullReport: msg.fullReport,
            },
        });
    }
    const sendColorData = () => __awaiter(void 0, void 0, void 0, function* () {
        yield getColorTokens(false);
        const colorStats = yield getColorStats();
        figma.ui.postMessage({
            type: "color-stats",
            message: Object.assign(Object.assign({}, customEventData), { colorStats: colorStats, colorTokens: colorTokens, selectionMade: figma.currentPage.selection.length > 0 }),
        });
    });
    if (msg.type === "run-color-linter") {
        sendColorData();
    }
    if (msg.type === "select-layer") {
        Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_2__["selectAndZoomToLayer"])(msg.layerId);
    }
    if (msg.type === "apply-color-style") {
        figma.importStyleByKeyAsync(msg.colorStyleKey).then((imported) => {
            figma.getNodeById(msg.layerId)[`${msg.colorType}StyleId`] = imported.id;
            figma.ui.postMessage({
                type: "color-replaced",
                message: Object.assign(Object.assign({}, customEventData), { layerId: msg.layerId, layerName: figma.getNodeById(msg.layerId).name, originalColor: msg.originalColor, colorStyleKey: msg.colorStyleKey, colorStyleName: msg.colorStyleName, colorStyleColor: msg.colorStyleColor }),
            });
        });
    }
    if (msg.type === "resize") {
        figma.ui.resize(msg.size.x >= uiSize.width ? msg.size.x : uiSize.width, msg.size.y >= uiSize.height ? msg.size.y : uiSize.height);
    }
    if (msg.type === "theme-switcher-to-dark") {
        switchToTheme("dark");
    }
    if (msg.type === "theme-switcher-to-light") {
        switchToTheme("light");
    }
});
figma.on("selectionchange", () => {
    console.log("selectionchange event was fired");
    figma.ui.postMessage({
        type: "selection-changed",
        message: figma.currentPage.selection,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvYXBwbHlNYXRyaXhUb1BvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2Nsb25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2NvbnZlcnRDb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9maW5kTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRBbGxGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRCb3VuZGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvZ2V0Q1NTU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldE5vZGVJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRQYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldFJlbGF0aXZlUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaGFzQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNQYXJ0T2ZJbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1BhcnRPZk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNUeXBlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1Zpc2libGVOb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2xvYWRGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9sb2FkVW5pcXVlRm9udHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvbm9kZVRvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3BhcnNlVGV4dFN0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3NldENoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvdG9wTGV2ZWxGcmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jbG9uZURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcUJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcVdpdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdHJpeC1pbnZlcnNlL21hdHJpeC1pbnZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkLXJhbmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7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Q0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0M7Ozs7Ozs7Ozs7OztBQ3hCYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcEJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNwQmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEM7Ozs7Ozs7Ozs7OztBQzFFYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3BCYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDZGE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFD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QUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbk1hOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFF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Q0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwyQ0FBMkM7QUFDekU7QUFDQTtBQUNBLFFBQVEsa0ZBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHFCQUFxQiwwR0FBMEc7QUFDbEwsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0ZBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSx1REFBdUQscUJBQXFCLHFOQUFxTjtBQUNqUyxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7O0FDM3FCRCxlIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wbHVnaW4vY29udHJvbGxlci50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5hcHBseU1hdHJpeFRvUG9pbnQgPSBhcHBseU1hdHJpeFRvUG9pbnQ7XG5cbmZ1bmN0aW9uIGFwcGx5TWF0cml4VG9Qb2ludChtYXRyaXgsIHBvaW50KSB7XG4gIHJldHVybiBbcG9pbnRbMF0gKiBtYXRyaXhbMF1bMF0gKyBwb2ludFsxXSAqIG1hdHJpeFswXVsxXSArIG1hdHJpeFswXVsyXSwgcG9pbnRbMF0gKiBtYXRyaXhbMV1bMF0gKyBwb2ludFsxXSAqIG1hdHJpeFsxXVsxXSArIG1hdHJpeFsxXVsyXV07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjbG9uZTtcblxuLyoqXG4gKiAgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGNsb25lIHRoZSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnbnVtYmVyJyB8fCB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnYm9vbGVhbicgfHwgdHlwZSA9PT0gJ3N5bWJvbCcgfHwgdmFsID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgcmV0dXJuIHZhbC5tYXAoY2xvbmUpO1xuICAgIH0gZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG8gPSB7fTtcblxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsKSB7XG4gICAgICAgIG9ba2V5XSA9IGNsb25lKHZhbFtrZXldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG87XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgJ3Vua25vd24nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5maWdtYVJHQlRvV2ViUkdCID0gZmlnbWFSR0JUb1dlYlJHQjtcbmV4cG9ydHMud2ViUkdCVG9GaWdtYVJHQiA9IHdlYlJHQlRvRmlnbWFSR0I7XG5leHBvcnRzLmZpZ21hUkdCVG9IZXggPSBmaWdtYVJHQlRvSGV4O1xuZXhwb3J0cy5oZXhUb0ZpZ21hUkdCID0gaGV4VG9GaWdtYVJHQjtcbmNvbnN0IG5hbWVzUkdCID0gWydyJywgJ2cnLCAnYiddO1xuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGNvbnZlcnRzIGZpZ21hIGNvbG9yIHRvIFJHQihBKSAoYXJyYXkpXG4gKi9cbi8vIGZpZ21hUkdCVG9XZWJSR0Ioe3I6IDAuODg3NDk5OTg4MDc5MDcxLCBnOiAwLjA3MDU4ODIzODUzNzMxMTU1LCBiOiAwLjA2NjU2MjQ3Mzc3Mzk1NjN9KVxuLy89PiBbMjI2LCAxOCwgMTddXG5cbmZ1bmN0aW9uIGZpZ21hUkdCVG9XZWJSR0IoY29sb3IpIHtcbiAgY29uc3QgcmdiID0gW107XG4gIG5hbWVzUkdCLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICByZ2JbaV0gPSBNYXRoLnJvdW5kKGNvbG9yW2VdICogMjU1KTtcbiAgfSk7XG4gIGlmIChjb2xvclsnYSddICE9PSB1bmRlZmluZWQpIHJnYlszXSA9IE1hdGgucm91bmQoY29sb3JbJ2EnXSAqIDEwMCkgLyAxMDA7XG4gIHJldHVybiByZ2I7XG59XG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gY29udmVydHMgUkdCKEEpIGNvbG9yIChhcnJheSkgdG8gZmlnbWEgY29sb3JcbiAqL1xuLy8gd2ViUkdCVG9GaWdtYVJHQihbMjI2LCAxOCwgMTddKVxuLy89PiB7cjogMC44ODYyNzQ1MDk4MDM5MjE1LCBnOiAwLjA3MDU4ODIzNTI5NDExNzY1LCBiOiAwLjA2NjY2NjY2NjY2NjY2NjY3fVxuXG5cbmZ1bmN0aW9uIHdlYlJHQlRvRmlnbWFSR0IoY29sb3IpIHtcbiAgY29uc3QgcmdiID0ge307XG4gIG5hbWVzUkdCLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICByZ2JbZV0gPSBjb2xvcltpXSAvIDI1NTtcbiAgfSk7XG4gIGlmIChjb2xvclszXSAhPT0gdW5kZWZpbmVkKSByZ2JbJ2EnXSA9IGNvbG9yWzNdO1xuICByZXR1cm4gcmdiO1xufVxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGNvbnZlcnRzIGZpZ21hIGNvbG9yIHRvIEhFWCAoc3RyaW5nKVxuICovXG4vLyBmaWdtYVJHQlRvSGV4KHsgcjogMCwgZzogMC4xLCBiOiAxIH0pXG4vLz0+ICMwMDFhZmZcblxuXG5mdW5jdGlvbiBmaWdtYVJHQlRvSGV4KGNvbG9yKSB7XG4gIGxldCBoZXggPSAnIyc7XG4gIGNvbnN0IHJnYiA9IGZpZ21hUkdCVG9XZWJSR0IoY29sb3IpO1xuICBoZXggKz0gKCgxIDw8IDI0KSArIChyZ2JbMF0gPDwgMTYpICsgKHJnYlsxXSA8PCA4KSArIHJnYlsyXSkudG9TdHJpbmcoMTYpLnNsaWNlKDEpO1xuXG4gIGlmIChyZ2JbM10gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGEgPSBNYXRoLnJvdW5kKHJnYlszXSAqIDI1NSkudG9TdHJpbmcoMTYpO1xuXG4gICAgaWYgKGEubGVuZ3RoID09IDEpIHtcbiAgICAgIGhleCArPSAnMCcgKyBhO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYSAhPT0gJ2ZmJykgaGV4ICs9IGE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGhleDtcbn1cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBjb252ZXJ0cyBIRVggY29sb3IgKHN0cmluZykgdG8gZmlnbWEgY29sb3JcbiAqL1xuLy8gaGV4VG9GaWdtYVJHQigjMDAxYWZmKVxuLy89PiB7IHI6IDAsIGc6IDAuMTAxOTYwNzg0MzEzNzI1NDksIGI6IDEgfVxuXG5cbmZ1bmN0aW9uIGhleFRvRmlnbWFSR0IoY29sb3IpIHtcbiAgbGV0IG9wYWNpdHkgPSAnJztcbiAgY29sb3IgPSBjb2xvci50b0xvd2VyQ2FzZSgpO1xuICBpZiAoY29sb3JbMF0gPT09ICcjJykgY29sb3IgPSBjb2xvci5zbGljZSgxKTtcblxuICBpZiAoY29sb3IubGVuZ3RoID09PSAzKSB7XG4gICAgY29sb3IgPSBjb2xvci5yZXBsYWNlKC8oLikoLikoLik/L2csICckMSQxJDIkMiQzJDMnKTtcbiAgfSBlbHNlIGlmIChjb2xvci5sZW5ndGggPT09IDgpIHtcbiAgICBjb25zdCBhcnIgPSBjb2xvci5tYXRjaCgvKC57Nn0pKC57Mn0pLyk7XG4gICAgY29sb3IgPSBhcnJbMV07XG4gICAgb3BhY2l0eSA9IGFyclsyXTtcbiAgfVxuXG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KGNvbG9yLCAxNik7XG4gIGNvbnN0IHJnYiA9IFtudW0gPj4gMTYsIG51bSA+PiA4ICYgMjU1LCBudW0gJiAyNTVdO1xuXG4gIGlmIChvcGFjaXR5KSB7XG4gICAgcmdiLnB1c2gocGFyc2VJbnQob3BhY2l0eSwgMTYpIC8gMjU1KTtcbiAgICByZXR1cm4gd2ViUkdCVG9GaWdtYVJHQihyZ2IpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB3ZWJSR0JUb0ZpZ21hUkdCKHJnYik7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZXh0cmFjdEltYWdlQ3JvcFBhcmFtcyA9IGV4dHJhY3RJbWFnZUNyb3BQYXJhbXM7XG5cbnZhciBfbWF0cml4SW52ZXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm1hdHJpeC1pbnZlcnNlXCIpKTtcblxudmFyIF9hcHBseU1hdHJpeFRvUG9pbnQgPSByZXF1aXJlKFwiLi9hcHBseU1hdHJpeFRvUG9pbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY2FuIGV4dHJhY3QgdGhlIGltYWdlIGNyb3Agcm90YXRpb24sIHNjYWxlICgvc2l6ZSkgYW5kIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSBzaGFwZVdpZHRoXG4gKiBAcGFyYW0gc2hhcGVIZWlnaHRcbiAqIEBwYXJhbSB0XG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RJbWFnZUNyb3BQYXJhbXMoc2hhcGVXaWR0aCwgc2hhcGVIZWlnaHQsIHQpIHtcbiAgY29uc3QgdHJhbnNmb3JtID0gdC5sZW5ndGggPT09IDIgPyBbLi4udCwgWzAsIDAsIDFdXSA6IFsuLi50XTtcbiAgY29uc3QgbXhJbnYgPSAoMCwgX21hdHJpeEludmVyc2UuZGVmYXVsdCkodHJhbnNmb3JtKTtcbiAgY29uc3QgcG9pbnRzID0gW1swLCAwXSwgWzEsIDBdLCBbMSwgMV0sIFswLCAxXV0ubWFwKHAgPT4gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShteEludiwgcCkpO1xuICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIocG9pbnRzWzFdWzFdIC0gcG9pbnRzWzBdWzFdLCBwb2ludHNbMV1bMF0gLSBwb2ludHNbMF1bMF0pO1xuICBjb25zdCBzeCA9IE1hdGguc3FydChNYXRoLnBvdyhwb2ludHNbMV1bMF0gLSBwb2ludHNbMF1bMF0sIDIpICsgTWF0aC5wb3cocG9pbnRzWzFdWzFdIC0gcG9pbnRzWzBdWzFdLCAyKSk7XG4gIGNvbnN0IHN5ID0gTWF0aC5zcXJ0KE1hdGgucG93KHBvaW50c1syXVswXSAtIHBvaW50c1sxXVswXSwgMikgKyBNYXRoLnBvdyhwb2ludHNbMl1bMV0gLSBwb2ludHNbMV1bMV0sIDIpKTtcbiAgcmV0dXJuIHtcbiAgICByb3RhdGlvbjogYW5nbGUgKiAoMTgwIC8gTWF0aC5QSSksXG4gICAgc2NhbGU6IFtzeCwgc3ldLFxuICAgIHNpemU6IFtzeCAqIHNoYXBlV2lkdGgsIHN5ICogc2hhcGVIZWlnaHRdLFxuICAgIHBvc2l0aW9uOiBbLXBvaW50c1swXVswXSAqIHNoYXBlV2lkdGgsIC1wb2ludHNbMF1bMV0gKiBzaGFwZUhlaWdodF1cbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybSA9IGV4dHJhY3RMaW5lYXJHcmFkaWVudFBhcmFtc0Zyb21UcmFuc2Zvcm07XG5cbnZhciBfbWF0cml4SW52ZXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm1hdHJpeC1pbnZlcnNlXCIpKTtcblxudmFyIF9hcHBseU1hdHJpeFRvUG9pbnQgPSByZXF1aXJlKFwiLi9hcHBseU1hdHJpeFRvUG9pbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY2FuIGV4dHJhY3QgdGhlIHggYW5kIHkgcG9zaXRpb25zIG9mIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBsaW5lYXIgZ3JhZGllbnRcbiAqIChzY2FsZSBpcyBub3QgaW1wb3J0YW50IGhlcmUpXG4gKlxuICogQHBhcmFtIHNoYXBlV2lkdGggbnVtYmVyXG4gKiBAcGFyYW0gc2hhcGVIZWlnaHQgbnVtYmVyXG4gKiBAcGFyYW0gdCBUcmFuc2Zvcm1cbiAqL1xuZnVuY3Rpb24gZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybShzaGFwZVdpZHRoLCBzaGFwZUhlaWdodCwgdCkge1xuICBjb25zdCB0cmFuc2Zvcm0gPSB0Lmxlbmd0aCA9PT0gMiA/IFsuLi50LCBbMCwgMCwgMV1dIDogWy4uLnRdO1xuICBjb25zdCBteEludiA9ICgwLCBfbWF0cml4SW52ZXJzZS5kZWZhdWx0KSh0cmFuc2Zvcm0pO1xuICBjb25zdCBzdGFydEVuZCA9IFtbMCwgMC41XSwgWzEsIDAuNV1dLm1hcChwID0+ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobXhJbnYsIHApKTtcbiAgcmV0dXJuIHtcbiAgICBzdGFydDogW3N0YXJ0RW5kWzBdWzBdICogc2hhcGVXaWR0aCwgc3RhcnRFbmRbMF1bMV0gKiBzaGFwZUhlaWdodF0sXG4gICAgZW5kOiBbc3RhcnRFbmRbMV1bMF0gKiBzaGFwZVdpZHRoLCBzdGFydEVuZFsxXVsxXSAqIHNoYXBlSGVpZ2h0XVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXMgPSBleHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXM7XG5cbnZhciBfbWF0cml4SW52ZXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm1hdHJpeC1pbnZlcnNlXCIpKTtcblxudmFyIF9hcHBseU1hdHJpeFRvUG9pbnQgPSByZXF1aXJlKFwiLi9hcHBseU1hdHJpeFRvUG9pbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY2FuIGV4dHJhY3QgdGhlIHJvdGF0aW9uIChpbiBkZWdyZWVzKSwgY2VudGVyIHBvaW50IGFuZCByYWRpdXMgZm9yIGEgcmFkaWFsIG9yIGRpYW1vbmQgZ3JhZGllbnRcbiAqXG4gKiBAcGFyYW0gc2hhcGVXaWR0aFxuICogQHBhcmFtIHNoYXBlSGVpZ2h0XG4gKiBAcGFyYW0gdFxuICovXG5mdW5jdGlvbiBleHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXMoc2hhcGVXaWR0aCwgc2hhcGVIZWlnaHQsIHQpIHtcbiAgY29uc3QgdHJhbnNmb3JtID0gdC5sZW5ndGggPT09IDIgPyBbLi4udCwgWzAsIDAsIDFdXSA6IFsuLi50XTtcbiAgY29uc3QgbXhJbnYgPSAoMCwgX21hdHJpeEludmVyc2UuZGVmYXVsdCkodHJhbnNmb3JtKTtcbiAgY29uc3QgY2VudGVyUG9pbnQgPSAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG14SW52LCBbMC41LCAwLjVdKTtcbiAgY29uc3QgcnhQb2ludCA9ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobXhJbnYsIFsxLCAwLjVdKTtcbiAgY29uc3QgcnlQb2ludCA9ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobXhJbnYsIFswLjUsIDFdKTtcbiAgY29uc3QgcnggPSBNYXRoLnNxcnQoTWF0aC5wb3cocnhQb2ludFswXSAtIGNlbnRlclBvaW50WzBdLCAyKSArIE1hdGgucG93KHJ4UG9pbnRbMV0gLSBjZW50ZXJQb2ludFsxXSwgMikpO1xuICBjb25zdCByeSA9IE1hdGguc3FydChNYXRoLnBvdyhyeVBvaW50WzBdIC0gY2VudGVyUG9pbnRbMF0sIDIpICsgTWF0aC5wb3cocnlQb2ludFsxXSAtIGNlbnRlclBvaW50WzFdLCAyKSk7XG4gIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuKChyeFBvaW50WzFdIC0gY2VudGVyUG9pbnRbMV0pIC8gKHJ4UG9pbnRbMF0gLSBjZW50ZXJQb2ludFswXSkpICogKDE4MCAvIE1hdGguUEkpO1xuICByZXR1cm4ge1xuICAgIHJvdGF0aW9uOiBhbmdsZSxcbiAgICBjZW50ZXI6IFtjZW50ZXJQb2ludFswXSAqIHNoYXBlV2lkdGgsIGNlbnRlclBvaW50WzFdICogc2hhcGVIZWlnaHRdLFxuICAgIHJhZGl1czogW3J4ICogc2hhcGVXaWR0aCwgcnkgKiBzaGFwZUhlaWdodF1cbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZmluZEFsbCA9IHZvaWQgMDtcblxudmFyIF8gPSByZXF1aXJlKFwiLi5cIik7XG5cbi8qKlxuICogQ3VzdG9tIGltcGxlbWVudGF0aW9uIG9mIHRoZSBmaWdtYS5maW5kQWxsIG1ldGhvZCwgd2hpY2ggcnVucyB4MTAwMCB0aW1lcyBmYXN0ZXIuXG4gKlxuICogIyMjIFVzYWdlIGV4YW1wbGVcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmaW5kQWxsLCBpc1RleHROb2RlIH0gZnJvbSBcIkBmaWdtYS1wbHVnaW4vaGVscGVyc1wiXG4gKlxuICogY29uc3QgdGV4dE5vZGVzID0gZmluZEFsbChmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbiwgaXNUZXh0Tm9kZSlcbiAqIGBgYFxuICpcbiAqICMjIyBIb3cgdG8gcmVwbGFjZSBuYXRpdmUgYGZpZ21hLmZpbmRBbGxgXG4gKiBgYGBkaWZmXG4gKiArIGltcG9ydCB7IGZpbmRBbGwgfSBmcm9tIFwiQGZpZ21hLXBsdWdpbi9oZWxwZXJzXCJcbiAqXG4gKiAtIGNvbnN0IHRleHROb2RlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIpO1xuICogKyBjb25zdCB0ZXh0Tm9kZXMgPSBmaW5kQWxsKGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuLCAobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIilcbiAqIGBgYFxuICovXG5jb25zdCBmaW5kQWxsID0gKG5vZGVzLCBpdGVyYXRlZSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGl0ZXJhdGVlKG5vZGVzW2ldLCBpLCBub2RlcykpIHtcbiAgICAgIHJlc3VsdC5wdXNoKG5vZGVzW2ldKTtcbiAgICB9IGVsc2UgaWYgKCgwLCBfLmhhc0NoaWxkcmVuKShub2Rlc1tpXSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKC4uLmZpbmRBbGwobm9kZXNbaV1bJ2NoaWxkcmVuJ10sIGl0ZXJhdGVlKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydHMuZmluZEFsbCA9IGZpbmRBbGw7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRBbGxGb250cztcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYWxsIHVzZWQgZm9udHMgdG8gdGV4dE5vZGVzXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEZvbnRzKHRleHROb2Rlcykge1xuICBjb25zdCBmb250cyA9IFtdO1xuXG4gIGNvbnN0IHB1c2hVbmlxdWUgPSBmb250ID0+IHtcbiAgICBpZiAoIWZvbnRzLnNvbWUoaXRlbSA9PiBpdGVtLmZhbWlseSA9PT0gZm9udC5mYW1pbHkgJiYgaXRlbS5zdHlsZSA9PT0gZm9udC5zdHlsZSkpIHtcbiAgICAgIGZvbnRzLnB1c2goZm9udCk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAoY29uc3Qgbm9kZSBvZiB0ZXh0Tm9kZXMpIHtcbiAgICBpZiAobm9kZS5mb250TmFtZSA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgIGNvbnN0IGxlbiA9IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgZm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShpLCBpICsgMSk7XG4gICAgICAgIHB1c2hVbmlxdWUoZm9udCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHB1c2hVbmlxdWUobm9kZS5mb250TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvbnRzO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Qm91bmRpbmdSZWN0O1xuXG52YXIgX2lzVW5kZWZpbmVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC9pc1VuZGVmaW5lZFwiKSk7XG5cbnZhciBfYXBwbHlNYXRyaXhUb1BvaW50ID0gcmVxdWlyZShcIi4vYXBwbHlNYXRyaXhUb1BvaW50XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqICB0aGlzIGZ1bmN0aW9uIHJldHVybiBhIGJvdW5kaW5nIHJlY3QgZm9yIGFuIG5vZGVzXG4gKi9cbi8vIHgveSBhYnNvbHV0ZSBjb29yZGluYXRlc1xuLy8gaGVpZ2h0L3dpZHRoXG4vLyB4Mi95MiBib3R0b20gcmlnaHQgY29vcmRpbmF0ZXNcbmZ1bmN0aW9uIGdldEJvdW5kaW5nUmVjdChub2Rlcykge1xuICBjb25zdCBib3VuZGluZ1JlY3QgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHgyOiAwLFxuICAgIHkyOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9O1xuXG4gIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICBjb25zdCB4eSA9IG5vZGVzLnJlZHVjZSgocmV6LCBub2RlKSA9PiB7XG4gICAgICBpZiAoIW5vZGUuYWJzb2x1dGVUcmFuc2Zvcm0pIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdQcm92aWRlZCBub2RlIGhhdmVuXFwndCBcImFic29sdXRlVHJhbnNmb3JtXCIgcHJvcGVydHksIGJ1dCBpdFxcJ3MgcmVxdWlyZWQgZm9yIGNhbGN1bGF0aW9ucy4nKTtcbiAgICAgICAgcmV0dXJuIHJlejtcbiAgICAgIH1cblxuICAgICAgaWYgKCgwLCBfaXNVbmRlZmluZWQyLmRlZmF1bHQpKG5vZGUuaGVpZ2h0KSB8fCAoMCwgX2lzVW5kZWZpbmVkMi5kZWZhdWx0KShub2RlLndpZHRoKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1Byb3ZpZGVkIG5vZGUgaGF2ZW5cXCd0IFwid2lkdGgvaGVpZ2h0XCIgcHJvcGVydHksIGJ1dCBpdFxcJ3MgcmVxdWlyZWQgZm9yIGNhbGN1bGF0aW9ucy4nKTtcbiAgICAgICAgcmV0dXJuIHJlejtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGFsZkhlaWdodCA9IG5vZGUuaGVpZ2h0IC8gMjtcbiAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IG5vZGUud2lkdGggLyAyO1xuICAgICAgY29uc3QgW1tjMCwgczAsIHhdLCBbczEsIGMxLCB5XV0gPSBub2RlLmFic29sdXRlVHJhbnNmb3JtO1xuICAgICAgY29uc3QgbWF0cml4ID0gW1tjMCwgczAsIHggKyBoYWxmV2lkdGggKiBjMCArIGhhbGZIZWlnaHQgKiBzMF0sIFtzMSwgYzEsIHkgKyBoYWxmV2lkdGggKiBzMSArIGhhbGZIZWlnaHQgKiBjMV1dOyAvLyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGNvcm5lcnMgb2YgdGhlIHJlY3RhbmdsZVxuXG4gICAgICBjb25zdCBYWSA9IHtcbiAgICAgICAgeDogWzEsIC0xLCAxLCAtMV0sXG4gICAgICAgIHk6IFsxLCAtMSwgLTEsIDFdXG4gICAgICB9OyAvLyBmaWxsIGluXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShtYXRyaXgsIFtYWS54W2ldICogaGFsZldpZHRoLCBYWS55W2ldICogaGFsZkhlaWdodF0pO1xuICAgICAgICBYWS54W2ldID0gYVswXTtcbiAgICAgICAgWFkueVtpXSA9IGFbMV07XG4gICAgICB9XG5cbiAgICAgIFhZLnguc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgWFkueS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICByZXoueC5wdXNoKFhZLnhbMF0pO1xuICAgICAgcmV6LnkucHVzaChYWS55WzBdKTtcbiAgICAgIHJlei54Mi5wdXNoKFhZLnhbM10pO1xuICAgICAgcmV6LnkyLnB1c2goWFkueVszXSk7XG4gICAgICByZXR1cm4gcmV6O1xuICAgIH0sIHtcbiAgICAgIHg6IFtdLFxuICAgICAgeTogW10sXG4gICAgICB4MjogW10sXG4gICAgICB5MjogW11cbiAgICB9KTtcbiAgICBjb25zdCByZWN0ID0ge1xuICAgICAgeDogTWF0aC5taW4oLi4ueHkueCksXG4gICAgICB5OiBNYXRoLm1pbiguLi54eS55KSxcbiAgICAgIHgyOiBNYXRoLm1heCguLi54eS54MiksXG4gICAgICB5MjogTWF0aC5tYXgoLi4ueHkueTIpXG4gICAgfTtcbiAgICBib3VuZGluZ1JlY3QueCA9IHJlY3QueDtcbiAgICBib3VuZGluZ1JlY3QueSA9IHJlY3QueTtcbiAgICBib3VuZGluZ1JlY3QueDIgPSByZWN0LngyO1xuICAgIGJvdW5kaW5nUmVjdC55MiA9IHJlY3QueTI7XG4gICAgYm91bmRpbmdSZWN0LndpZHRoID0gcmVjdC54MiAtIHJlY3QueDtcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0ID0gcmVjdC55MiAtIHJlY3QueTtcbiAgfVxuXG4gIHJldHVybiBib3VuZGluZ1JlY3Q7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFRleHROb2RlQ1NTID0gdm9pZCAwO1xuXG52YXIgX2dldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvZ2V0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgc3RyaW5nVmFsdWVUb0NzcyA9IHZhbHVlID0+IHtcbiAgaWYgKC9yaWdodHxib3R0b20vaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnZmxleC1lbmQnO1xuICB9IGVsc2UgaWYgKC9sZWZ0fHRvcC9pLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdmbGV4LXN0YXJ0JztcbiAgfSBlbHNlIGlmICgvY2VudGVyL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2NlbnRlcic7XG4gIH0gZWxzZSBpZiAoL2xvd2VyL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2xvd2VyY2FzZSc7XG4gIH0gZWxzZSBpZiAoL3VwcGVyL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ3VwcGVyY2FzZSc7XG4gIH0gZWxzZSBpZiAoL3RpdGxlL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2NhcGl0YWxpemUnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnbm9uZSc7XG4gIH1cbn07XG5cbmNvbnN0IHVuaXRWYWx1ZVRvQ3NzID0gKHtcbiAgdW5pdCxcbiAgdmFsdWVcbn0pID0+IHtcbiAgaWYgKHVuaXQgPT09ICdQRVJDRU5UJykge1xuICAgIHJldHVybiBgJHt2YWx1ZX0lYDtcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnUElYRUxTJykge1xuICAgIHJldHVybiBgJHt2YWx1ZX1weGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdhdXRvJztcbiAgfVxufTtcblxuY29uc3QgaXNVbml0VmFsdWUgPSBvYmogPT4ge1xuICByZXR1cm4gb2JqLmhhc093blByb3BlcnR5KCd1bml0Jyk7XG59O1xuXG5jb25zdCBnZXRTdHlsZVZhbHVlID0gKG5vZGUsIGtleSwgZXhhY3RTdHJpbmcpID0+IHtcbiAgY29uc3QgdmFsdWUgPSAoMCwgX2dldDIuZGVmYXVsdCkobm9kZSwga2V5KTtcblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZXhhY3RTdHJpbmcgPyB2YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSA6IHN0cmluZ1ZhbHVlVG9Dc3ModmFsdWUudG9Mb3dlckNhc2UoKS50cmltKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYCR7dmFsdWV9cHhgO1xuICB9IGVsc2UgaWYgKGlzVW5pdFZhbHVlKHZhbHVlKSkge1xuICAgIHJldHVybiB1bml0VmFsdWVUb0Nzcyh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKCdVbmV4cGVjdGVkIHZhbHVlOiAnLCB2YWx1ZSk7XG4gIH1cbn07XG4vKipcbiAqICBnZXQgQ1NTIHN0eWxlcyBvZiBUZXh0Tm9kZVxuICovXG5cblxuY29uc3QgZ2V0VGV4dE5vZGVDU1MgPSBub2RlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3knKSxcbiAgICBsZWZ0OiBnZXRTdHlsZVZhbHVlKG5vZGUsICd4JyksXG4gICAgd2lkdGg6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3dpZHRoJyksXG4gICAgaGVpZ2h0OiBnZXRTdHlsZVZhbHVlKG5vZGUsICdoZWlnaHQnKSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgJ2p1c3RpZnktY29udGVudCc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3RleHRBbGlnbkhvcml6b250YWwnKSxcbiAgICAnYWxpZ24taXRlbXMnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICd0ZXh0QWxpZ25WZXJ0aWNhbCcpLFxuICAgICd0ZXh0LWluZGVudCc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3BhcmFncmFwaEluZGVudCcpLFxuICAgICdsZXR0ZXItc3BhY2luZyc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2xldHRlclNwYWNpbmcnKSxcbiAgICAnbGluZS1oZWlnaHQnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICdsaW5lSGVpZ2h0JyksXG4gICAgJ2ZvbnQtc2l6ZSc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnRTaXplJyksXG4gICAgJ2ZvbnQtc3R5bGUnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICdmb250TmFtZS5zdHlsZScsIHRydWUpLFxuICAgICdmb250LXdlaWdodCc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnROYW1lLnN0eWxlJywgdHJ1ZSksXG4gICAgJ3RleHQtZGVjb3JhdGlvbic6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3RleHREZWNvcmF0aW9uJywgdHJ1ZSksXG4gICAgJ3RleHQtdHJhbnNmb3JtJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAndGV4dENhc2UnKSxcbiAgICAnZm9udC1mYW1pbHknOiBgJHtnZXRTdHlsZVZhbHVlKG5vZGUsICdmb250TmFtZS5mYW1pbHknLCB0cnVlKX0gJHtnZXRTdHlsZVZhbHVlKG5vZGUsICdmb250TmFtZS5zdHlsZScsIHRydWUpfWBcbiAgfTtcbn07IC8vIHRoaXMgZmlsZSBjYW4gYmUgZXh0ZW5kZWQgdG8gc3VwcG9ydCBhbGwgbm9kZSB0eXBlc1xuXG5cbmV4cG9ydHMuZ2V0VGV4dE5vZGVDU1MgPSBnZXRUZXh0Tm9kZUNTUzsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldE5vZGVJbmRleDtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gZ2V0IHRoZSByZXR1cm4gdGhlIGluZGV4IG9mIG5vZGUgaW4gaXRzIHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXROb2RlSW5kZXgobm9kZSkge1xuICByZXR1cm4gbm9kZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldFBhZ2U7XG5cbnZhciBfaXNUeXBlTm9kZSA9IHJlcXVpcmUoXCIuL2lzVHlwZU5vZGVcIik7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHBhc3MgaW4gYSBub2RlIGFuZCByZXR1cm4gaXRzIHBhZ2VOb2RlXG4gKi9cbmZ1bmN0aW9uIGdldFBhZ2Uobm9kZSkge1xuICBpZiAoISgwLCBfaXNUeXBlTm9kZS5pc1BhZ2VOb2RlKShub2RlKSkge1xuICAgIHJldHVybiBnZXRQYWdlKG5vZGUucGFyZW50KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRSZWxhdGl2ZVBvc2l0aW9uID0gZXhwb3J0cy5nZXRUb3BMZXZlbFBhcmVudCA9IHZvaWQgMDtcblxudmFyIF8gPSByZXF1aXJlKFwiLi4vXCIpO1xuXG4vKipcbiAqIFJldHVybiB0b3AgbGV2ZWwgcGFyZW50IGZvciBub2RlIGJlZm9yZSBQYWdlTm9kZS5cbiAqIEZvciBleGFtcGxlOlxuICogYGBganNcbiAqIC8vIGZvciBzdHJ1Y3R1cmUgYmVsb3dcbiAqIC8vIFBhZ2UgLyBGcmFtZSAvIEdyb3VwMSAvIEdyb3VwMiAvIFRleHRcbiAqXG4gKiBnZXRUb3BMZXZlbFBhcmVudChUZXh0KSAvLyBGcmFtZVxuICogYGBgXG4gKi9cbmNvbnN0IGdldFRvcExldmVsUGFyZW50ID0gbm9kZSA9PiB7XG4gIGlmIChub2RlICYmIG5vZGUucGFyZW50ICYmICEoMCwgXy5pc1BhZ2VOb2RlKShub2RlLnBhcmVudCkpIHtcbiAgICByZXR1cm4gZ2V0VG9wTGV2ZWxQYXJlbnQobm9kZS5wYXJlbnQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2RlO1xuICB9XG59O1xuLyoqXG4gKiBDYWxjdWxhdGUgcmVsYXRpdmUgcG9zaXRpb24gb2Ygbm9kZSBiYXNlZCBvbiBwcm92aWRlZCBwYXJlbnQgb3IgdG9wIGxldmVsIHBhcmVudC5cbiAqIEZvciBleGFtcGxlOlxuICogYGBganNcbiAqIC8vIGZvciBzdHJ1Y3R1cmUgYmVsb3dcbiAqIC8vIFBhZ2UgLyBGcmFtZSAvIEdyb3VwMSAvIEdyb3VwMiAvIFRleHRcbiAqXG4gKiBnZXRSZWxhdGl2ZVBvc2l0aW9uKFRleHQsIEdyb3VwMSkgLy8gd2lsbCBjYWxjdWxhdGUgeyB4LCB5IH0gYmFzZWQgb24gR3JvdXAxXG4gKlxuICogZ2V0UmVsYXRpdmVQb3NpdGlvbihUZXh0KSAvLyB3aWxsIGNhbGN1bGF0ZSB7IHgsIHkgfSBiYXNlZCBvbiBGcmFtZVxuICogYGBgXG4gKiovXG5cblxuZXhwb3J0cy5nZXRUb3BMZXZlbFBhcmVudCA9IGdldFRvcExldmVsUGFyZW50O1xuXG5jb25zdCBnZXRSZWxhdGl2ZVBvc2l0aW9uID0gKG5vZGUsIHJlbGF0aXZlTm9kZSkgPT4ge1xuICByZWxhdGl2ZU5vZGUgPSByZWxhdGl2ZU5vZGUgfHwgZ2V0VG9wTGV2ZWxQYXJlbnQobm9kZSk7XG4gIHJldHVybiB7XG4gICAgeDogTWF0aC5hYnMoTWF0aC5yb3VuZChyZWxhdGl2ZU5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMF1bMl0gLSBub2RlLmFic29sdXRlVHJhbnNmb3JtWzBdWzJdKSksXG4gICAgeTogTWF0aC5hYnMoTWF0aC5yb3VuZChyZWxhdGl2ZU5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMV1bMl0gLSBub2RlLmFic29sdXRlVHJhbnNmb3JtWzFdWzJdKSlcbiAgfTtcbn07XG5cbmV4cG9ydHMuZ2V0UmVsYXRpdmVQb3NpdGlvbiA9IGdldFJlbGF0aXZlUG9zaXRpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmhhc0NoaWxkcmVuID0gdm9pZCAwO1xuXG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGhhdmUgY2hpbGRyZW4gbm9kZXNcbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYHRzXG4gKiAvLyBCRUZPUkVcbiAqIGNvbnNvbGUubG9nKG5vZGUuY2hpbGRyZW4pIC8vIHRocm93IFRTIGVycm9yIFwiUHJvcGVydHkgJ2NoaWxkcmVuJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIC4uLlwiXG4gKlxuICogLy8gQUZURVJcbiAqIGlmIChoYXNDaGlsZHJlbihub2RlKSkge1xuICogIGNvbnNvbGUubG9nKG5vZGUuY2hpbGRyZW4pIC8vIHZhbGlkIGNvZGVcbiAqIH1cbiAqIGBgYFxuICpcbiAqL1xuY29uc3QgaGFzQ2hpbGRyZW4gPSBub2RlID0+IEJvb2xlYW4obm9kZVsnY2hpbGRyZW4nXSk7XG5cbmV4cG9ydHMuaGFzQ2hpbGRyZW4gPSBoYXNDaGlsZHJlbjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzUGFydE9mSW5zdGFuY2U7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIGNoZWNrIHdoZXRoZXIgYSBub2RlIGlzIHBhcnQgb2YgYW4gaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gaXNQYXJ0T2ZJbnN0YW5jZShub2RlKSB7XG4gIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50O1xuXG4gIGlmIChwYXJlbnQudHlwZSA9PT0gJ0lOU1RBTkNFJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHBhcmVudC50eXBlID09PSAnUEFHRScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlzUGFydE9mSW5zdGFuY2UocGFyZW50KTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNQYXJ0T2ZOb2RlO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBjaGVjayB3aGV0aGVyIGEgbm9kZSBpcyBwYXJ0IG9mIGFuIHJvb3ROb2RlXG4gKi9cbmZ1bmN0aW9uIGlzUGFydE9mTm9kZShwYXJ0LCByb290Tm9kZSkge1xuICBjb25zdCBwYXJlbnQgPSBwYXJ0LnBhcmVudDtcblxuICBpZiAocGFyZW50ID09PSByb290Tm9kZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHBhcmVudC50eXBlID09PSAnUEFHRScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlzUGFydE9mTm9kZShwYXJlbnQsIHJvb3ROb2RlKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc09uZU9mTm9kZVR5cGUgPSBleHBvcnRzLmlzQ29tcG9uZW50Tm9kZSA9IGV4cG9ydHMuaXNJbnN0YW5jZU5vZGUgPSBleHBvcnRzLmlzVGV4dE5vZGUgPSBleHBvcnRzLmlzRnJhbWVOb2RlID0gZXhwb3J0cy5pc0dyb3VwTm9kZSA9IGV4cG9ydHMuaXNQYWdlTm9kZSA9IHZvaWQgMDtcblxuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBQYWdlTm9kZVxuICovXG5jb25zdCBpc1BhZ2VOb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdQQUdFJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIEdyb3VwTm9kZVxuICovXG5cblxuZXhwb3J0cy5pc1BhZ2VOb2RlID0gaXNQYWdlTm9kZTtcblxuY29uc3QgaXNHcm91cE5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0dST1VQJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIEZyYW1lTm9kZVxuICovXG5cblxuZXhwb3J0cy5pc0dyb3VwTm9kZSA9IGlzR3JvdXBOb2RlO1xuXG5jb25zdCBpc0ZyYW1lTm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnRlJBTUUnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgVGV4dE5vZGVcbiAqL1xuXG5cbmV4cG9ydHMuaXNGcmFtZU5vZGUgPSBpc0ZyYW1lTm9kZTtcblxuY29uc3QgaXNUZXh0Tm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnVEVYVCc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBJbnN0YW5jZU5vZGVcbiAqL1xuXG5cbmV4cG9ydHMuaXNUZXh0Tm9kZSA9IGlzVGV4dE5vZGU7XG5cbmNvbnN0IGlzSW5zdGFuY2VOb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdJTlNUQU5DRSc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBDb21wb25lbnROb2RlXG4gKi9cblxuXG5leHBvcnRzLmlzSW5zdGFuY2VOb2RlID0gaXNJbnN0YW5jZU5vZGU7XG5cbmNvbnN0IGlzQ29tcG9uZW50Tm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnQ09NUE9ORU5UJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIG9uZSBvZiBwcm92aWRlZCB0eXBlc1xuICovXG5cblxuZXhwb3J0cy5pc0NvbXBvbmVudE5vZGUgPSBpc0NvbXBvbmVudE5vZGU7XG5cbmNvbnN0IGlzT25lT2ZOb2RlVHlwZSA9IChub2RlLCB0eXBlTGlzdCkgPT4ge1xuICByZXR1cm4gdHlwZUxpc3QuaW5jbHVkZXMobm9kZS50eXBlKTtcbn07XG5cbmV4cG9ydHMuaXNPbmVPZk5vZGVUeXBlID0gaXNPbmVPZk5vZGVUeXBlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNWaXNpYmxlTm9kZTtcblxuLyoqXG4gKiBUaGlzIGhlbHBlciByZWN1cnNpdmVseSBjaGVja3MgYWxsIHBhcmVudHMgZm9yIHZpc2liaWxpdHksIHRvIGd1YXJhbnRlZSB0aGF0J3Mgbm9kZSBpcyB2aXNpYmxlXG4gKi9cbmZ1bmN0aW9uIGlzVmlzaWJsZU5vZGUobm9kZSkge1xuICBpZiAobm9kZSAmJiBub2RlLnBhcmVudCkge1xuICAgIGlmIChub2RlLnZpc2libGUgJiYgbm9kZS5wYXJlbnQudHlwZSAhPT0gJ1BBR0UnKSB7XG4gICAgICByZXR1cm4gaXNWaXNpYmxlTm9kZShub2RlLnBhcmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBub2RlLnZpc2libGU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbG9hZEZvbnRzO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYXN5bmNocm9ub3VzbHkgbG9hZHMgdGhlIHBhc3NlZCBmb250c1xuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkRm9udHMoZm9udHMpIHtcbiAgY29uc3QgcHJvbWlzZXMgPSBmb250cy5tYXAoZm9udCA9PiBmaWdtYS5sb2FkRm9udEFzeW5jKGZvbnQpKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICByZXR1cm4gZm9udHM7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsb2FkVW5pcXVlRm9udHM7XG5cbnZhciBfZ2V0QWxsRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2dldEFsbEZvbnRzXCIpKTtcblxudmFyIF9sb2FkRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRGb250c1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIGxvYWQgb25seSB1bmlxdWUgZm9udHMgYXN5bmNocm9ub3VzbHlcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZFVuaXF1ZUZvbnRzKHRleHROb2Rlcykge1xuICBjb25zdCBmb250cyA9ICgwLCBfZ2V0QWxsRm9udHMuZGVmYXVsdCkodGV4dE5vZGVzKTtcbiAgcmV0dXJuICgwLCBfbG9hZEZvbnRzLmRlZmF1bHQpKGZvbnRzKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubm9kZVRvT2JqZWN0ID0gdm9pZCAwO1xuXG4vKipcbiAqIFRyYW5zZm9ybSBub2RlIHRvIG9iamVjdCB3aXRoIGtleXMsIHRoYXQgYXJlIGhpZGRlbiBieSBkZWZhdWx0LlxuICogRm9yIGV4YW1wbGU6XG4gKiBgYGB0c1xuICogY29uc3Qgbm9kZSA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRPbmUoKGVsKSA9PiBlbC50eXBlID09PSBcIlRFWFRcIik7XG4gKiBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhub2RlKS5sZW5ndGgpIC8vIDFcbiAqIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKG5vZGVUb09iamVjdChub2RlKSkubGVuZ3RoKSAvLyA0MlxuICogY29uc29sZS5sb2coT2JqZWN0LmtleXMobm9kZVRvT2JqZWN0KG5vZGUsIHRydWUpKS5sZW5ndGgpIC8vIDM5XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gbm9kZVxuICogQHBhcmFtIHdpdGhvdXRSZWxhdGlvbnNcbiAqL1xuY29uc3Qgbm9kZVRvT2JqZWN0ID0gKG5vZGUsIHdpdGhvdXRSZWxhdGlvbnMpID0+IHtcbiAgY29uc3QgcHJvcHMgPSBPYmplY3QuZW50cmllcyhPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXykpO1xuICBjb25zdCBibGFja2xpc3QgPSBbJ3BhcmVudCcsICdjaGlsZHJlbicsICdyZW1vdmVkJywgJ21hc3RlckNvbXBvbmVudCddO1xuICBjb25zdCBvYmogPSB7XG4gICAgaWQ6IG5vZGUuaWQsXG4gICAgdHlwZTogbm9kZS50eXBlXG4gIH07XG5cbiAgZm9yIChjb25zdCBbbmFtZSwgcHJvcF0gb2YgcHJvcHMpIHtcbiAgICBpZiAocHJvcC5nZXQgJiYgIWJsYWNrbGlzdC5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmpbbmFtZV0gPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgb2JqW25hbWVdID0gJ01peGVkJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmpbbmFtZV0gPSBwcm9wLmdldC5jYWxsKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgb2JqW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChub2RlLnBhcmVudCAmJiAhd2l0aG91dFJlbGF0aW9ucykge1xuICAgIG9iai5wYXJlbnQgPSB7XG4gICAgICBpZDogbm9kZS5wYXJlbnQuaWQsXG4gICAgICB0eXBlOiBub2RlLnBhcmVudC50eXBlXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub2RlLmNoaWxkcmVuICYmICF3aXRob3V0UmVsYXRpb25zKSB7XG4gICAgb2JqLmNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gbm9kZVRvT2JqZWN0KGNoaWxkLCB3aXRob3V0UmVsYXRpb25zKSk7XG4gIH1cblxuICBpZiAobm9kZS5tYXN0ZXJDb21wb25lbnQgJiYgIXdpdGhvdXRSZWxhdGlvbnMpIHtcbiAgICBvYmoubWFzdGVyQ29tcG9uZW50ID0gbm9kZVRvT2JqZWN0KG5vZGUubWFzdGVyQ29tcG9uZW50LCB3aXRob3V0UmVsYXRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5leHBvcnRzLm5vZGVUb09iamVjdCA9IG5vZGVUb09iamVjdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VUZXh0U3R5bGUgPSBwYXJzZVRleHRTdHlsZTtcbmV4cG9ydHMuc3BsaXRUZXh0U3R5bGVJbnRvTGluZXMgPSBzcGxpdFRleHRTdHlsZUludG9MaW5lcztcbmV4cG9ydHMuam9pblRleHRMaW5lc1N0eWxlcyA9IGpvaW5UZXh0TGluZXNTdHlsZXM7XG5leHBvcnRzLmFwcGx5VGV4dFN0eWxlVG9UZXh0Tm9kZSA9IGFwcGx5VGV4dFN0eWxlVG9UZXh0Tm9kZTtcbmV4cG9ydHMuY2hhbmdlQ2hhcmFjdGVyc1RleHRTdHlsZSA9IGNoYW5nZUNoYXJhY3RlcnNUZXh0U3R5bGU7XG5leHBvcnRzLmNoYW5nZVRleHRTdHlsZSA9IGNoYW5nZVRleHRTdHlsZTtcblxudmFyIF91bmlxV2l0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvdW5pcVdpdGhcIikpO1xuXG52YXIgX2Nsb25lRGVlcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvY2xvbmVEZWVwXCIpKTtcblxudmFyIF9pc0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC9pc0VxdWFsXCIpKTtcblxudmFyIF9nZXRBbGxGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ2V0QWxsRm9udHNcIikpO1xuXG52YXIgX2xvYWRGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZEZvbnRzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgc3R5bGVGb250cyA9IFsnZm9udFNpemUnLCAnZm9udE5hbWUnLCAndGV4dENhc2UnLCAndGV4dERlY29yYXRpb24nLCAnbGV0dGVyU3BhY2luZycsICdsaW5lSGVpZ2h0JywgJ2ZpbGxzJywgJ3RleHRTdHlsZUlkJywgJ2ZpbGxTdHlsZUlkJ107XG4vKlxuXHRUaGUgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGV4dCBub2RlIHN0eWxlcywgc3BsaXR0aW5nIHRoZW0gaW50byBkaWZmZXJlbnQgYXJyYXlzLCBzdWNoIGFzOlxuXHRbe1xuXHRcdGNoYXJhY3RlcnM6IFwiLi4uXCIsXG5cdFx0Li4uIChzdHlsZXMpXG5cdH0sIC4uLl1cblxuXHQtLS1cblxuXHRSZXR1cm5zIHN0eWxlcyBmb3IgdGhlIGVudGlyZSB0ZXh0OlxuXHRwYXJzZVRleHRTdHlsZSh0ZXh0Tm9kZSlcblx0XG5cdFJldHVybnMgdGV4dCBzdHlsZXMgZnJvbSB0aGUgMTAwdGggdG8gdGhlIGxhc3QgY2hhcmFjdGVyOlxuXHRwYXJzZVRleHRTdHlsZSh0ZXh0Tm9kZSwgMTAwKVxuXG5cdFJldHVybnMgc3R5bGVzIGZvciB0aGUgZW50aXJlIHRleHQsIGJ1dCBvbmx5IHdpdGggZm9udE5hbWUgYW5kIHRleHREZWNvcmF0aW9uOlxuXHRwYXJzZVRleHRTdHlsZSh0ZXh0Tm9kZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFtcImZvbnROYW1lXCIsIFwidGV4dERlY29yYXRpb25cIl0pXG4qL1xuXG5mdW5jdGlvbiBwYXJzZVRleHRTdHlsZShub2RlLCBzdGFydCA9IDAsIGVuZCwgc3R5bGVOYW1lKSB7XG4gIGlmICghZW5kKSBlbmQgPSBub2RlLmNoYXJhY3RlcnMubGVuZ3RoO1xuICBpZiAoIXN0eWxlTmFtZSkgc3R5bGVOYW1lID0gc3R5bGVGb250cztcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgY29uc29sZS5lcnJvcignU3RhcnQgbXVzdCBiZSBncmVhdGVyIHRoYW4gZW5kJyk7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vIHN0cmluZyBzdWJzdHJpbmcsIGRlZmluZWQgc3R5bGVzXG5cblxuICBjb25zdCBzdHlsZU1hcCA9IFtdOyAvLyBhIGNvbXBvc2luZyBzdHJpbmcgb2YgYSBzcGVjaWZpYyBzdHlsZVxuXG4gIGxldCB0ZXh0U3R5bGU7XG4gIGNvbnN0IG5hbWVzID0gc3R5bGVOYW1lLm1hcChuYW1lID0+IHtcbiAgICByZXR1cm4gbmFtZS5yZXBsYWNlKC9eKC4pL2csICQxID0+ICQxLnRvVXBwZXJDYXNlKCkpO1xuICB9KTsgLy8gc3BsaXR0aW5nIHRleHQgaW50byBzdWJzdHJpbmdzIGJ5IHN0eWxlXG5cbiAgZm9yIChsZXQgc3RhcnRJbmRleCA9IHN0YXJ0OyBzdGFydEluZGV4IDwgZW5kOyBzdGFydEluZGV4KyspIHtcbiAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyAxO1xuICAgIGNvbnN0IGxldHRlciA9IHtcbiAgICAgIGNoYXJhY3RlcnM6IG5vZGUuY2hhcmFjdGVyc1tzdGFydEluZGV4XVxuICAgIH07IC8vIGNvbGxlY3Rpb24gb2Ygc3R5bGVzXG5cbiAgICBuYW1lcy5mb3JFYWNoKChuLCBpKSA9PiB7XG4gICAgICBsZXR0ZXJbc3R5bGVOYW1lW2ldXSA9IG5vZGVbJ2dldFJhbmdlJyArIG5dKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgICB9KTtcblxuICAgIGlmICh0ZXh0U3R5bGUpIHtcbiAgICAgIGlmIChpc0VxdWFsTGV0dGVyU3R5bGUobGV0dGVyLCB0ZXh0U3R5bGUpKSB7XG4gICAgICAgIC8vIHRoZSBjaGFyYWN0ZXIgaGFzIHRoZSBzYW1lIHByb3BlcnRpZXMgYXMgdGhlIGdlbmVyYXRlZCBzdWJzdHJpbmdcbiAgICAgICAgLy8gYWRkIGl0IHRvIGl0XG4gICAgICAgIHRleHRTdHlsZS5jaGFyYWN0ZXJzICs9IGxldHRlci5jaGFyYWN0ZXJzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc3R5bGUgcHJvcGVydGllcyBhcmUgZGlmZmVyZW50XG4gICAgICAgIHN0eWxlTWFwLnB1c2godGV4dFN0eWxlKTsgLy8gd2Ugc3RhcnQgdG8gZm9ybSBhIG5ldyBzdWJzdHJpbmdcblxuICAgICAgICB0ZXh0U3R5bGUgPSBsZXR0ZXI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdlIHN0YXJ0IGZvcm1pbmcgdGhlIGZpcnN0IHN1YnN0cmluZ1xuICAgICAgdGV4dFN0eWxlID0gbGV0dGVyO1xuICAgIH1cbiAgfVxuXG4gIHN0eWxlTWFwLnB1c2godGV4dFN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlTWFwO1xufVxuLypcblx0QWxsb3dzIHRvIHNwbGl0IHRoZSBzdHlsZXMgb2J0YWluZWQgd2l0aCBwYXJzZVRleHRTdHlsZSBpbnRvIGxpbmVzIGJhc2VkIG9uIG5ld2xpbmVzLlxuXG5cdElmIHRoZSByZW1vdmVOZXdsaW5lQ2hhcmFjdGVycyBwYXJhbWV0ZXIgPT0gdHJ1ZSwgdGhlIG5ld2xpbmUgY2hhcmFjdGVycyB3aWxsIGJlIHJlbW92ZWQuXG5cdFJlbW92ZUVtcHR5bGluZXMgPT0gdHJ1ZSB3aWxsIHJlbW92ZSBlbXB0eSBsaW5lcy5cbiovXG5cblxuZnVuY3Rpb24gc3BsaXRUZXh0U3R5bGVJbnRvTGluZXModGV4dFN0eWxlLCByZW1vdmVOZXdsaW5lQ2hhcmFjdGVycyA9IGZhbHNlLCByZW1vdmVFbXB0eWxpbmVzID0gZmFsc2UpIHtcbiAgbGV0IGxpbmUgPSBbXTtcbiAgbGV0IGxpbmVzID0gW107XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKC4rfCg/PD1cXG4pKC4/KSg/PSQpKShcXG58XFx1MjAyOCk/fChcXG58XFx1MjAyOCknLCAnZycpO1xuICBjb25zdCByZTIgPSBuZXcgUmVnRXhwKCdcXG58XFx1MjAyOCcpO1xuICB0ZXh0U3R5bGUuZm9yRWFjaCgoc3R5bGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKHJlMi50ZXN0KHN0eWxlLmNoYXJhY3RlcnMpKSB7XG4gICAgICBjb25zdCBscyA9IHN0eWxlLmNoYXJhY3RlcnMubWF0Y2gocmUpO1xuXG4gICAgICBpZiAobHMgPT09IG51bGwpIHtcbiAgICAgICAgLy8gdGV4dCBpcyBtaXNzaW5nXG4gICAgICAgIGxpbmUucHVzaChzdHlsZSk7XG4gICAgICB9IGVsc2UgaWYgKGxzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyB0aGUgc3R5bGUgdGV4dCBjb25zaXN0cyBvZiAxIGxpbmVcbiAgICAgICAgbGluZS5wdXNoKHN0eWxlKTtcbiAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgbGluZSA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbXVsdGlwbGUtbGluZSB0ZXh0XG4gICAgICAgIHN0eWxlID0gKDAsIF9jbG9uZURlZXAyLmRlZmF1bHQpKHN0eWxlKTtcbiAgICAgICAgc3R5bGUuY2hhcmFjdGVycyA9IGxzLnNoaWZ0KCk7XG4gICAgICAgIGxpbmUucHVzaChzdHlsZSk7XG4gICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIGxpbmUgPSBbXTtcbiAgICAgICAgY29uc3QgbGFzdCA9IGxzLnBvcCgpOyAvLyBkZWFsaW5nIHdpdGggaW50ZXJuYWwgdGV4dCBzdHJpbmdzXG5cbiAgICAgICAgbGluZXMucHVzaCguLi5scy5tYXAoZSA9PiB7XG4gICAgICAgICAgc3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkoc3R5bGUpO1xuICAgICAgICAgIHN0eWxlLmNoYXJhY3RlcnMgPSBlO1xuICAgICAgICAgIHJldHVybiBbc3R5bGVdO1xuICAgICAgICB9KSk7XG4gICAgICAgIHN0eWxlID0gKDAsIF9jbG9uZURlZXAyLmRlZmF1bHQpKHN0eWxlKTtcbiAgICAgICAgc3R5bGUuY2hhcmFjdGVycyA9IGxhc3Q7XG5cbiAgICAgICAgaWYgKGxhc3QgPT09ICcnKSB7XG4gICAgICAgICAgaWYgKCF0ZXh0U3R5bGVbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgLy8gbGFzdCBsaW5lIGZpbmFsXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFtzdHlsZV0pO1xuICAgICAgICAgIH0gLy8gZWxzZSBmYWxzZSBlbmQgb2YgdGV4dFxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZG9lcyBub3QgZW5kXG4gICAgICAgICAgbGluZS5wdXNoKHN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lLnB1c2goc3R5bGUpO1xuICAgIH1cbiAgfSk7XG4gIGlmIChsaW5lLmxlbmd0aCkgbGluZXMucHVzaChsaW5lKTsgLy8gZGVsZXRpbmcgbmV3bGluZSBjaGFyYWN0ZXJzXG5cbiAgaWYgKHJlbW92ZU5ld2xpbmVDaGFyYWN0ZXJzKSB7XG4gICAgbGluZXMuZm9yRWFjaChsID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlID0gbFtsLmxlbmd0aCAtIDFdO1xuICAgICAgc3R5bGUuY2hhcmFjdGVycyA9IHN0eWxlLmNoYXJhY3RlcnMucmVwbGFjZShyZTIsICcnKTtcbiAgICB9KTtcbiAgfSAvLyBkZWxldGluZyBlbXB0eSBsaW5lc1xuXG5cbiAgaWYgKHJlbW92ZUVtcHR5bGluZXMpIHtcbiAgICBsaW5lcyA9IGxpbmVzLmZpbHRlcihsID0+IGwuZmlsdGVyKGwgPT4gbC5jaGFyYWN0ZXJzLnJlcGxhY2UocmUyLCAnJykgIT09ICcnKS5sZW5ndGggIT09IDApO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVzO1xufVxuLypcblx0SW52ZXJzZSBmdW5jdGlvbiBvZiBzcGxpdFRleHRTdHlsZUludG9MaW5lcy5cblx0VGhlIGFkZE5ld2xpbmVDaGFyYWN0ZXJzIHBhcmFtZXRlciBpcyByZXNwb25zaWJsZSBmb3Igd2hldGhlciB5b3UgbmVlZCB0byBhZGQgYSBuZXdsaW5lIGNoYXJhY3RlciBhdCB0aGUgZW5kIG9mIGVhY2ggbGluZVxuKi9cblxuXG5mdW5jdGlvbiBqb2luVGV4dExpbmVzU3R5bGVzKHRleHRTdHlsZSwgYWRkTmV3bGluZUNoYXJhY3RlcnMgPSBmYWxzZSkge1xuICBjb25zdCB0U3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkodGV4dFN0eWxlKTtcbiAgbGV0IG5ld2xpbmUgPSAnJztcblxuICBzd2l0Y2ggKHR5cGVvZiBhZGROZXdsaW5lQ2hhcmFjdGVycykge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgaWYgKGFkZE5ld2xpbmVDaGFyYWN0ZXJzKSBuZXdsaW5lID0gJ1xcbic7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBuZXdsaW5lID0gYWRkTmV3bGluZUNoYXJhY3RlcnM7XG4gICAgICBicmVhaztcbiAgfSAvLyBhZGRpbmcgbmV3IGxpbmUgY2hhcmFjdGVyc1xuXG5cbiAgaWYgKGFkZE5ld2xpbmVDaGFyYWN0ZXJzICYmIG5ld2xpbmUpIHtcbiAgICB0U3R5bGUuZm9yRWFjaCgoc3R5bGUsIGkpID0+IHtcbiAgICAgIGlmIChpICE9PSB0U3R5bGUubGVuZ3RoIC0gMSkgc3R5bGVbc3R5bGUubGVuZ3RoIC0gMV0uY2hhcmFjdGVycyArPSBuZXdsaW5lO1xuICAgIH0pO1xuICB9IC8vIGpvaW5cblxuXG4gIGNvbnN0IGxpbmUgPSB0U3R5bGUuc2hpZnQoKTtcbiAgdFN0eWxlLmZvckVhY2goc3R5bGUgPT4ge1xuICAgIGNvbnN0IGZpdHN0ID0gc3R5bGUuc2hpZnQoKTtcblxuICAgIGlmIChpc0VxdWFsTGV0dGVyU3R5bGUoZml0c3QsIGxpbmVbbGluZS5sZW5ndGggLSAxXSkpIHtcbiAgICAgIC8vIHRoZSBzdHlsZSBvZiB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5lIGRpZmZlcnMgZnJvbSB0aGUgZW5kIG9mIHRoZSBzdHlsZSBvZiB0aGUgdGV4dCBiZWluZyBjb21waWxlZFxuICAgICAgbGluZVtsaW5lLmxlbmd0aCAtIDFdLmNoYXJhY3RlcnMgKz0gZml0c3QuY2hhcmFjdGVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZS5wdXNoKGZpdHN0KTtcbiAgICB9XG5cbiAgICBpZiAoc3R5bGUubGVuZ3RoKSBsaW5lLnB1c2goLi4uc3R5bGUpO1xuICB9KTtcbiAgcmV0dXJuIGxpbmU7XG59XG4vKlxuXHRBcHBseSB0aGUgdGV4dCBzdHlsZXMgb2J0YWluZWQgZnJvbSBwYXJzZVRleHRTdHlsZSB0byB0aGUgdGV4dCBub2RlLlxuXHRUaGUgc2Vjb25kIHBhcmFtZXRlciBjYW4gYmUgcGFzc2VkIGEgdGV4dCBub2RlLCB0aGUgdGV4dCBvZiB3aGljaCB3aWxsIGJlIGNoYW5nZWQuXG4qL1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGFwcGx5VGV4dFN0eWxlVG9UZXh0Tm9kZSh0ZXh0U3R5bGUsIHRleHROb2RlLCBpc0xvYWRGb250cyA9IHRydWUpIHtcbiAgaWYgKGlzTG9hZEZvbnRzKSB7XG4gICAgbGV0IGZvbnRzID0gW3tcbiAgICAgIGZhbWlseTogJ1JvYm90bycsXG4gICAgICBzdHlsZTogJ1JlZ3VsYXInXG4gICAgfV07XG5cbiAgICBpZiAodGV4dFN0eWxlWzBdLmZvbnROYW1lKSB7XG4gICAgICBmb250cy5wdXNoKC4uLnRleHRTdHlsZS5tYXAoZSA9PiBlLmZvbnROYW1lKSk7XG4gICAgfVxuXG4gICAgaWYgKHRleHROb2RlKSB7XG4gICAgICBmb250cy5wdXNoKC4uLigwLCBfZ2V0QWxsRm9udHMuZGVmYXVsdCkoW3RleHROb2RlXSkpO1xuICAgIH1cblxuICAgIGZvbnRzID0gKDAsIF91bmlxV2l0aDIuZGVmYXVsdCkoZm9udHMsIF9pc0VxdWFsMi5kZWZhdWx0KTtcbiAgICBhd2FpdCAoMCwgX2xvYWRGb250cy5kZWZhdWx0KShmb250cyk7XG4gIH1cblxuICBpZiAoIXRleHROb2RlKSB0ZXh0Tm9kZSA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IHRleHRTdHlsZS5yZWR1Y2UoKHN0ciwgc3R5bGUpID0+IHtcbiAgICByZXR1cm4gc3RyICsgc3R5bGUuY2hhcmFjdGVycztcbiAgfSwgJycpO1xuICBsZXQgbiA9IDA7XG4gIHRleHRTdHlsZS5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICBjb25zdCBMID0gc3R5bGUuY2hhcmFjdGVycy5sZW5ndGg7XG5cbiAgICBpZiAoTCkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICAgICAgaWYgKGtleSAhPT0gJ2NoYXJhY3RlcnMnKSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGtleS5yZXBsYWNlKC9eKC4pL2csICQxID0+ICQxLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgIHRleHROb2RlWydzZXRSYW5nZScgKyBuYW1lXShuLCBuICsgTCwgc3R5bGVba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbiArPSBMO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0ZXh0Tm9kZTtcbn1cbi8qXG5cdFJlcGxhY2luZyB0ZXh0IGluIHRleHRTdHlsZVxuXHRJZiB0aGUgcGFzc2VkIHRleHQgaXMgc2hvcnRlciB0aGFuIGluIHN0eWxlcywgdGhlIGV4dHJhIHN0eWxlcyB3aWxsIGJlIHJlbW92ZWQuXG5cdElmIHRoZSBwYXNzZWQgdGV4dCBpcyBsb25nZXIgdGhhbiB0aGUgc3R5bGVzLCB0aGUgb3ZlcmZsb3cgdGV4dCB3aWxsIGdldCB0aGUgc3R5bGUgb2YgdGhlIGxhc3QgY2hhcmFjdGVyLlxuKi9cblxuXG5mdW5jdGlvbiBjaGFuZ2VDaGFyYWN0ZXJzVGV4dFN0eWxlKHRleHRTdHlsZSwgY2hhcmFjdGVycykge1xuICB0ZXh0U3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkodGV4dFN0eWxlKTtcbiAgbGV0IG4gPSAwO1xuICBjb25zdCBsZW5ndGggPSB0ZXh0U3R5bGUubGVuZ3RoIC0gMTtcbiAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcyA9IHRleHRTdHlsZVtpXTtcbiAgICBsZXQgbCA9IHMuY2hhcmFjdGVycy5sZW5ndGg7IC8vIGlmIHBhc3NlZCB0ZXh0IGlzIGxvbmdlciB0aGFuIHRleHQgaW4gc3R5bGVzXG5cbiAgICBpZiAoaSA9PSBsZW5ndGgpIGwgPSBjaGFyYWN0ZXJzTGVuZ3RoO1xuICAgIHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnMuc2xpY2UobiwgbiArIGwpO1xuICAgIG4gKz0gbDtcblxuICAgIGlmIChuID4gY2hhcmFjdGVyc0xlbmd0aCkge1xuICAgICAgLy8gbmV3IHRleHQgaXMgc2hvcnRlciB0aGFuIHRleHQgaW4gc3R5bGVzXG4gICAgICB0ZXh0U3R5bGUgPSB0ZXh0U3R5bGUuc3BsaWNlKDAsIGkgKyAxKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXh0U3R5bGU7XG59XG4vKlxuXHRGdW5jdGlvbiBmb3IgY2hhbmdpbmcgcHJvcGVydGllcyBvZiBUZXh0U3R5bGUuIFxuXHRUaGUgYmVmb3JlVmFsdWUgcGFyYW1ldGVyIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgdmFsdWUgaW4gd2hpY2ggdGhlIHByb3BlcnR5IHRvIGJlIGNoYW5nZWQgc2hvdWxkIGJlLlxuKi9cblxuXG5mdW5jdGlvbiBjaGFuZ2VUZXh0U3R5bGUodGV4dFN0eWxlLCBzdHlsZU5hbWUsIG5ld1ZhbHVlLCBiZWZvcmVWYWx1ZSkge1xuICB0ZXh0U3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkodGV4dFN0eWxlKTtcbiAgdGV4dFN0eWxlLmZvckVhY2goc3R5bGUgPT4ge1xuICAgIGlmIChiZWZvcmVWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGJlZm9yZVZhbHVlICE9PSB1bmRlZmluZWQgJiYgKDAsIF9pc0VxdWFsMi5kZWZhdWx0KShzdHlsZVtzdHlsZU5hbWVdLCBiZWZvcmVWYWx1ZSkpIHtcbiAgICAgIDtcbiAgICAgIHN0eWxlW3N0eWxlTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGV4dFN0eWxlO1xufVxuLypjb21wYXJpbmcgY2hhcmFjdGVyIHN0eWxlcyB0byB0aGUgc3R5bGVzIG9mIHRoZSBjb21wb3Npbmcgc3Vic3RyaW5nKi9cblxuXG5mdW5jdGlvbiBpc0VxdWFsTGV0dGVyU3R5bGUobGV0dGVyLCB0ZXh0U3R5bGUpIHtcbiAgbGV0IGlzID0gdHJ1ZTsgLy8gaXRlcmF0aW5nIG92ZXIgZm9udCBwcm9wZXJ0aWVzXG5cbiAgZm9yIChjb25zdCBrZXkgaW4gbGV0dGVyKSB7XG4gICAgaWYgKGtleSAhPT0gJ2NoYXJhY3RlcnMnKSB7XG4gICAgICBpZiAoISgwLCBfaXNFcXVhbDIuZGVmYXVsdCkobGV0dGVyW2tleV0sIHRleHRTdHlsZVtrZXldKSkge1xuICAgICAgICAvLyBwcm9wZXJ0eSB2YXJpZXNcbiAgICAgICAgLy8gc3RvcCBzZWFyY2hpbmdcbiAgICAgICAgaXMgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZXRDaGFyYWN0ZXJzID0gdm9pZCAwO1xuXG52YXIgX3VuaXFCeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvdW5pcUJ5XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgc2V0Q2hhcmFjdGVycyA9IGFzeW5jIChub2RlLCBjaGFyYWN0ZXJzLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGZhbGxiYWNrRm9udCA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmFsbGJhY2tGb250KSB8fCB7XG4gICAgZmFtaWx5OiAnUm9ib3RvJyxcbiAgICBzdHlsZTogJ1JlZ3VsYXInXG4gIH07XG5cbiAgdHJ5IHtcbiAgICBpZiAobm9kZS5mb250TmFtZSA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNtYXJ0U3RyYXRlZ3kpID09PSAncHJldmFpbCcpIHtcbiAgICAgICAgY29uc3QgZm9udEhhc2hUcmVlID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjaGFyRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShpIC0gMSwgaSk7XG4gICAgICAgICAgY29uc3Qga2V5ID0gYCR7Y2hhckZvbnQuZmFtaWx5fTo6JHtjaGFyRm9udC5zdHlsZX1gO1xuICAgICAgICAgIGZvbnRIYXNoVHJlZVtrZXldID0gZm9udEhhc2hUcmVlW2tleV0gPyBmb250SGFzaFRyZWVba2V5XSArIDEgOiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldmFpbGVkVHJlZUl0ZW0gPSBPYmplY3QuZW50cmllcyhmb250SGFzaFRyZWUpLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVswXTtcbiAgICAgICAgY29uc3QgW2ZhbWlseSwgc3R5bGVdID0gcHJldmFpbGVkVHJlZUl0ZW1bMF0uc3BsaXQoJzo6Jyk7XG4gICAgICAgIGNvbnN0IHByZXZhaWxlZEZvbnQgPSB7XG4gICAgICAgICAgZmFtaWx5LFxuICAgICAgICAgIHN0eWxlXG4gICAgICAgIH07XG4gICAgICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMocHJldmFpbGVkRm9udCk7XG4gICAgICAgIG5vZGUuZm9udE5hbWUgPSBwcmV2YWlsZWRGb250O1xuICAgICAgfSBlbHNlIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNtYXJ0U3RyYXRlZ3kpID09PSAnc3RyaWN0Jykge1xuICAgICAgICByZXR1cm4gc2V0Q2hhcmFjdGVyc1dpdGhTdHJpY3RNYXRjaEZvbnQobm9kZSwgY2hhcmFjdGVycywgZmFsbGJhY2tGb250KTtcbiAgICAgIH0gZWxzZSBpZiAoKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zbWFydFN0cmF0ZWd5KSA9PT0gJ2V4cGVyaW1lbnRhbCcpIHtcbiAgICAgICAgcmV0dXJuIHNldENoYXJhY3RlcnNXaXRoU21hcnRNYXRjaEZvbnQobm9kZSwgY2hhcmFjdGVycywgZmFsbGJhY2tGb250KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hhckZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoMCwgMSk7XG4gICAgICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoZmlyc3RDaGFyRm9udCk7XG4gICAgICAgIG5vZGUuZm9udE5hbWUgPSBmaXJzdENoYXJGb250O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHtcbiAgICAgICAgZmFtaWx5OiBub2RlLmZvbnROYW1lLmZhbWlseSxcbiAgICAgICAgc3R5bGU6IG5vZGUuZm9udE5hbWUuc3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKGBGYWlsZWQgdG8gbG9hZCBcIiR7bm9kZS5mb250TmFtZVsnZmFtaWx5J119ICR7bm9kZS5mb250TmFtZVsnc3R5bGUnXX1cIiBmb250IGFuZCByZXBsYWNlZCB3aXRoIGZhbGxiYWNrIFwiJHtmYWxsYmFja0ZvbnQuZmFtaWx5fSAke2ZhbGxiYWNrRm9udC5zdHlsZX1cImAsIGVycik7XG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhmYWxsYmFja0ZvbnQpO1xuICAgIG5vZGUuZm9udE5hbWUgPSBmYWxsYmFja0ZvbnQ7XG4gIH1cblxuICB0cnkge1xuICAgIG5vZGUuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUud2FybihgRmFpbGVkIHRvIHNldCBjaGFyYWN0ZXJzLiBTa2lwcGVkLmAsIGVycik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnRzLnNldENoYXJhY3RlcnMgPSBzZXRDaGFyYWN0ZXJzO1xuXG5jb25zdCBzZXRDaGFyYWN0ZXJzV2l0aFN0cmljdE1hdGNoRm9udCA9IGFzeW5jIChub2RlLCBjaGFyYWN0ZXJzLCBmYWxsYmFja0ZvbnQpID0+IHtcbiAgY29uc3QgZm9udEhhc2hUcmVlID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdGFydElkeCA9IGkgLSAxO1xuICAgIGNvbnN0IHN0YXJ0Q2hhckZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoc3RhcnRJZHgsIGkpO1xuICAgIGNvbnN0IHN0YXJ0Q2hhckZvbnRWYWwgPSBgJHtzdGFydENoYXJGb250LmZhbWlseX06OiR7c3RhcnRDaGFyRm9udC5zdHlsZX1gO1xuXG4gICAgd2hpbGUgKGkgPCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoKSB7XG4gICAgICBpKys7XG4gICAgICBjb25zdCBjaGFyRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShpIC0gMSwgaSk7XG5cbiAgICAgIGlmIChzdGFydENoYXJGb250VmFsICE9PSBgJHtjaGFyRm9udC5mYW1pbHl9Ojoke2NoYXJGb250LnN0eWxlfWApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9udEhhc2hUcmVlW2Ake3N0YXJ0SWR4fV8ke2l9YF0gPSBzdGFydENoYXJGb250VmFsO1xuICB9XG5cbiAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhmYWxsYmFja0ZvbnQpO1xuICBub2RlLmZvbnROYW1lID0gZmFsbGJhY2tGb250O1xuICBub2RlLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xuICBjb25zb2xlLmxvZyhmb250SGFzaFRyZWUpO1xuICBhd2FpdCBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhmb250SGFzaFRyZWUpLm1hcChhc3luYyByYW5nZSA9PiB7XG4gICAgY29uc29sZS5sb2cocmFuZ2UsIGZvbnRIYXNoVHJlZVtyYW5nZV0pO1xuICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHJhbmdlLnNwbGl0KCdfJyk7XG4gICAgY29uc3QgW2ZhbWlseSwgc3R5bGVdID0gZm9udEhhc2hUcmVlW3JhbmdlXS5zcGxpdCgnOjonKTtcbiAgICBjb25zdCBtYXRjaGVkRm9udCA9IHtcbiAgICAgIGZhbWlseSxcbiAgICAgIHN0eWxlXG4gICAgfTtcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKG1hdGNoZWRGb250KTtcbiAgICByZXR1cm4gbm9kZS5zZXRSYW5nZUZvbnROYW1lKE51bWJlcihzdGFydCksIE51bWJlcihlbmQpLCBtYXRjaGVkRm9udCk7XG4gIH0pKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBnZXREZWxpbWl0ZXJQb3MgPSAoc3RyLCBkZWxpbWl0ZXIsIHN0YXJ0SWR4ID0gMCwgZW5kSWR4ID0gc3RyLmxlbmd0aCkgPT4ge1xuICBjb25zdCBpbmRpY2VzID0gW107XG4gIGxldCB0ZW1wID0gc3RhcnRJZHg7XG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0SWR4OyBpIDwgZW5kSWR4OyBpKyspIHtcbiAgICBpZiAoc3RyW2ldID09PSBkZWxpbWl0ZXIgJiYgaSArIHN0YXJ0SWR4ICE9PSBlbmRJZHggJiYgdGVtcCAhPT0gaSArIHN0YXJ0SWR4KSB7XG4gICAgICBpbmRpY2VzLnB1c2goW3RlbXAsIGkgKyBzdGFydElkeF0pO1xuICAgICAgdGVtcCA9IGkgKyBzdGFydElkeCArIDE7XG4gICAgfVxuICB9XG5cbiAgdGVtcCAhPT0gZW5kSWR4ICYmIGluZGljZXMucHVzaChbdGVtcCwgZW5kSWR4XSk7XG4gIHJldHVybiBpbmRpY2VzLmZpbHRlcihCb29sZWFuKTtcbn07XG5cbmNvbnN0IGJ1aWxkTGluZWFyT3JkZXIgPSBub2RlID0+IHtcbiAgY29uc3QgZm9udFRyZWUgPSBbXTtcbiAgY29uc3QgbmV3TGluZXNQb3MgPSBnZXREZWxpbWl0ZXJQb3Mobm9kZS5jaGFyYWN0ZXJzLCAnXFxuJyk7XG4gIG5ld0xpbmVzUG9zLmZvckVhY2goKFtuZXdMaW5lc1JhbmdlU3RhcnQsIG5ld0xpbmVzUmFuZ2VFbmRdLCBuKSA9PiB7XG4gICAgY29uc3QgbmV3TGluZXNSYW5nZUZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUobmV3TGluZXNSYW5nZVN0YXJ0LCBuZXdMaW5lc1JhbmdlRW5kKTtcblxuICAgIGlmIChuZXdMaW5lc1JhbmdlRm9udCA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgIGNvbnN0IHNwYWNlc1BvcyA9IGdldERlbGltaXRlclBvcyhub2RlLmNoYXJhY3RlcnMsICcgJywgbmV3TGluZXNSYW5nZVN0YXJ0LCBuZXdMaW5lc1JhbmdlRW5kKTtcbiAgICAgIHNwYWNlc1Bvcy5mb3JFYWNoKChbc3BhY2VzUmFuZ2VTdGFydCwgc3BhY2VzUmFuZ2VFbmRdLCBzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwYWNlc1JhbmdlRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShzcGFjZXNSYW5nZVN0YXJ0LCBzcGFjZXNSYW5nZUVuZCk7XG5cbiAgICAgICAgaWYgKHNwYWNlc1JhbmdlRm9udCA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgICAgICBjb25zdCBzcGFjZXNSYW5nZUZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoc3BhY2VzUmFuZ2VTdGFydCwgc3BhY2VzUmFuZ2VTdGFydFswXSk7XG4gICAgICAgICAgZm9udFRyZWUucHVzaCh7XG4gICAgICAgICAgICBzdGFydDogc3BhY2VzUmFuZ2VTdGFydCxcbiAgICAgICAgICAgIGRlbGltaXRlcjogJyAnLFxuICAgICAgICAgICAgZmFtaWx5OiBzcGFjZXNSYW5nZUZvbnQuZmFtaWx5LFxuICAgICAgICAgICAgc3R5bGU6IHNwYWNlc1JhbmdlRm9udC5zdHlsZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvbnRUcmVlLnB1c2goe1xuICAgICAgICAgICAgc3RhcnQ6IHNwYWNlc1JhbmdlU3RhcnQsXG4gICAgICAgICAgICBkZWxpbWl0ZXI6ICcgJyxcbiAgICAgICAgICAgIGZhbWlseTogc3BhY2VzUmFuZ2VGb250LmZhbWlseSxcbiAgICAgICAgICAgIHN0eWxlOiBzcGFjZXNSYW5nZUZvbnQuc3R5bGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvbnRUcmVlLnB1c2goe1xuICAgICAgICBzdGFydDogbmV3TGluZXNSYW5nZVN0YXJ0LFxuICAgICAgICBkZWxpbWl0ZXI6ICdcXG4nLFxuICAgICAgICBmYW1pbHk6IG5ld0xpbmVzUmFuZ2VGb250LmZhbWlseSxcbiAgICAgICAgc3R5bGU6IG5ld0xpbmVzUmFuZ2VGb250LnN0eWxlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZm9udFRyZWUuc29ydCgoYSwgYikgPT4gK2Euc3RhcnQgLSArYi5zdGFydCkubWFwKCh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlLFxuICAgIGRlbGltaXRlclxuICB9KSA9PiAoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZSxcbiAgICBkZWxpbWl0ZXJcbiAgfSkpO1xufTtcblxuY29uc3Qgc2V0Q2hhcmFjdGVyc1dpdGhTbWFydE1hdGNoRm9udCA9IGFzeW5jIChub2RlLCBjaGFyYWN0ZXJzLCBmYWxsYmFja0ZvbnQpID0+IHtcbiAgY29uc3QgcmFuZ2VUcmVlID0gYnVpbGRMaW5lYXJPcmRlcihub2RlKTtcbiAgY29uc3QgZm9udHNUb0xvYWQgPSAoMCwgX3VuaXFCeTIuZGVmYXVsdCkocmFuZ2VUcmVlLCAoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZVxuICB9KSA9PiBgJHtmYW1pbHl9Ojoke3N0eWxlfWApLm1hcCgoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZVxuICB9KSA9PiAoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZVxuICB9KSk7XG4gIGF3YWl0IFByb21pc2UuYWxsKFsuLi5mb250c1RvTG9hZCwgZmFsbGJhY2tGb250XS5tYXAoZmlnbWEubG9hZEZvbnRBc3luYykpO1xuICBub2RlLmZvbnROYW1lID0gZmFsbGJhY2tGb250O1xuICBub2RlLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xuICBsZXQgcHJldlBvcyA9IDA7XG4gIHJhbmdlVHJlZS5mb3JFYWNoKCh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlLFxuICAgIGRlbGltaXRlclxuICB9KSA9PiB7XG4gICAgaWYgKHByZXZQb3MgPCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBkZWxpbWV0ZXJQb3MgPSBub2RlLmNoYXJhY3RlcnMuaW5kZXhPZihkZWxpbWl0ZXIsIHByZXZQb3MpO1xuICAgICAgY29uc3QgZW5kUG9zID0gZGVsaW1ldGVyUG9zID4gcHJldlBvcyA/IGRlbGltZXRlclBvcyA6IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgICBjb25zdCBtYXRjaGVkRm9udCA9IHtcbiAgICAgICAgZmFtaWx5LFxuICAgICAgICBzdHlsZVxuICAgICAgfTtcbiAgICAgIG5vZGUuc2V0UmFuZ2VGb250TmFtZShwcmV2UG9zLCBlbmRQb3MsIG1hdGNoZWRGb250KTtcbiAgICAgIHByZXZQb3MgPSBlbmRQb3MgKyAxO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0cnVlO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvcExldmVsRnJhbWVzO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBhbGwgdG9wIGxldmVsIGZyYW1lcyBvbiBjdXJyZW50UGFnZVxuICovXG5mdW5jdGlvbiB0b3BMZXZlbEZyYW1lcyhwYWdlID0gZmlnbWEuY3VycmVudFBhZ2UpIHtcbiAgcmV0dXJuIHBhZ2UuY2hpbGRyZW4uZmlsdGVyKG5vZGUgPT4gbm9kZS50eXBlID09PSAnRlJBTUUnKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNsb25lXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jbG9uZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldEFsbEZvbnRzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRBbGxGb250cy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldEJvdW5kaW5nUmVjdFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0Qm91bmRpbmdSZWN0LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0Tm9kZUluZGV4XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXROb2RlSW5kZXguZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRQYWdlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRQYWdlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaGFzQ2hpbGRyZW5cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2hhc0NoaWxkcmVuLmhhc0NoaWxkcmVuO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzUGFydE9mSW5zdGFuY2VcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzUGFydE9mSW5zdGFuY2UuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1BhcnRPZk5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzUGFydE9mTm9kZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzVmlzaWJsZU5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVmlzaWJsZU5vZGUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJsb2FkVW5pcXVlRm9udHNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2xvYWRVbmlxdWVGb250cy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImxvYWRGb250c1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfbG9hZEZvbnRzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibm9kZVRvT2JqZWN0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9ub2RlVG9PYmplY3Qubm9kZVRvT2JqZWN0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInRvcExldmVsRnJhbWVzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90b3BMZXZlbEZyYW1lcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldFRleHROb2RlQ1NTXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRDU1NTdHlsZXMuZ2V0VGV4dE5vZGVDU1M7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZmluZEFsbFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZmluZE1ldGhvZHMuZmluZEFsbDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRSZWxhdGl2ZVBvc2l0aW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRSZWxhdGl2ZVBvc2l0aW9uLmdldFJlbGF0aXZlUG9zaXRpb247XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0VG9wTGV2ZWxQYXJlbnRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldFJlbGF0aXZlUG9zaXRpb24uZ2V0VG9wTGV2ZWxQYXJlbnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZmlnbWFSR0JUb1dlYlJHQlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfY29udmVydENvbG9yLmZpZ21hUkdCVG9XZWJSR0I7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2ViUkdCVG9GaWdtYVJHQlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfY29udmVydENvbG9yLndlYlJHQlRvRmlnbWFSR0I7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZmlnbWFSR0JUb0hleFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfY29udmVydENvbG9yLmZpZ21hUkdCVG9IZXg7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaGV4VG9GaWdtYVJHQlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfY29udmVydENvbG9yLmhleFRvRmlnbWFSR0I7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNDb21wb25lbnROb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzQ29tcG9uZW50Tm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0ZyYW1lTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc0ZyYW1lTm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0dyb3VwTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc0dyb3VwTm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0luc3RhbmNlTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc0luc3RhbmNlTm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1BhZ2VOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzUGFnZU5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNUZXh0Tm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc1RleHROb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzT25lT2ZOb2RlVHlwZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc09uZU9mTm9kZVR5cGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXh0cmFjdEltYWdlQ3JvcFBhcmFtc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZXh0cmFjdEltYWdlQ3JvcFBhcmFtcy5leHRyYWN0SW1hZ2VDcm9wUGFyYW1zO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImV4dHJhY3RMaW5lYXJHcmFkaWVudFBhcmFtc0Zyb21UcmFuc2Zvcm1cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kLmV4dHJhY3RMaW5lYXJHcmFkaWVudFBhcmFtc0Zyb21UcmFuc2Zvcm07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXMuZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNldENoYXJhY3RlcnNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3NldENoYXJhY3RlcnMuc2V0Q2hhcmFjdGVycztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVRleHRTdHlsZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUucGFyc2VUZXh0U3R5bGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3BsaXRUZXh0U3R5bGVJbnRvTGluZXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLnNwbGl0VGV4dFN0eWxlSW50b0xpbmVzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImpvaW5UZXh0TGluZXNTdHlsZXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLmpvaW5UZXh0TGluZXNTdHlsZXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYXBwbHlUZXh0U3R5bGVUb1RleHROb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5hcHBseVRleHRTdHlsZVRvVGV4dE5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY2hhbmdlQ2hhcmFjdGVyc1RleHRTdHlsZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUuY2hhbmdlQ2hhcmFjdGVyc1RleHRTdHlsZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjaGFuZ2VUZXh0U3R5bGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLmNoYW5nZVRleHRTdHlsZTtcbiAgfVxufSk7XG5cbnZhciBfY2xvbmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvY2xvbmVcIikpO1xuXG52YXIgX2dldEFsbEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2dldEFsbEZvbnRzXCIpKTtcblxudmFyIF9nZXRCb3VuZGluZ1JlY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0Qm91bmRpbmdSZWN0XCIpKTtcblxudmFyIF9nZXROb2RlSW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0Tm9kZUluZGV4XCIpKTtcblxudmFyIF9nZXRQYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2dldFBhZ2VcIikpO1xuXG52YXIgX2hhc0NoaWxkcmVuID0gcmVxdWlyZShcIi4vaGVscGVycy9oYXNDaGlsZHJlblwiKTtcblxudmFyIF9pc1BhcnRPZkluc3RhbmNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2lzUGFydE9mSW5zdGFuY2VcIikpO1xuXG52YXIgX2lzUGFydE9mTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9pc1BhcnRPZk5vZGVcIikpO1xuXG52YXIgX2lzVmlzaWJsZU5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvaXNWaXNpYmxlTm9kZVwiKSk7XG5cbnZhciBfbG9hZFVuaXF1ZUZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2xvYWRVbmlxdWVGb250c1wiKSk7XG5cbnZhciBfbG9hZEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2xvYWRGb250c1wiKSk7XG5cbnZhciBfbm9kZVRvT2JqZWN0ID0gcmVxdWlyZShcIi4vaGVscGVycy9ub2RlVG9PYmplY3RcIik7XG5cbnZhciBfdG9wTGV2ZWxGcmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvdG9wTGV2ZWxGcmFtZXNcIikpO1xuXG52YXIgX2dldENTU1N0eWxlcyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0Q1NTU3R5bGVzXCIpO1xuXG52YXIgX2ZpbmRNZXRob2RzID0gcmVxdWlyZShcIi4vaGVscGVycy9maW5kTWV0aG9kc1wiKTtcblxudmFyIF9nZXRSZWxhdGl2ZVBvc2l0aW9uID0gcmVxdWlyZShcIi4vaGVscGVycy9nZXRSZWxhdGl2ZVBvc2l0aW9uXCIpO1xuXG52YXIgX2NvbnZlcnRDb2xvciA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvY29udmVydENvbG9yXCIpO1xuXG52YXIgX2lzVHlwZU5vZGUgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2lzVHlwZU5vZGVcIik7XG5cbnZhciBfZXh0cmFjdEltYWdlQ3JvcFBhcmFtcyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZXh0cmFjdEltYWdlQ3JvcFBhcmFtc1wiKTtcblxudmFyIF9leHRyYWN0TGluZWFyR3JhZGllbnRTdGFydEVuZCA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZXh0cmFjdExpbmVhckdyYWRpZW50U3RhcnRFbmRcIik7XG5cbnZhciBfZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zID0gcmVxdWlyZShcIi4vaGVscGVycy9leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXNcIik7XG5cbnZhciBfc2V0Q2hhcmFjdGVycyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvc2V0Q2hhcmFjdGVyc1wiKTtcblxudmFyIF9wYXJzZVRleHRTdHlsZSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvcGFyc2VUZXh0U3R5bGVcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9IiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcbiIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG4iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RWFjaDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcbiIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhcnJheUluY2x1ZGVzYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNXaXRoKGFycmF5LCB2YWx1ZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4iLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuIiwidmFyIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbkluYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduSW4ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbkluO1xuIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduVmFsdWU7XG4iLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaCcpLFxuICAgIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbicpLFxuICAgIGJhc2VBc3NpZ25JbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25JbicpLFxuICAgIGNsb25lQnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVCdWZmZXInKSxcbiAgICBjb3B5QXJyYXkgPSByZXF1aXJlKCcuL19jb3B5QXJyYXknKSxcbiAgICBjb3B5U3ltYm9scyA9IHJlcXVpcmUoJy4vX2NvcHlTeW1ib2xzJyksXG4gICAgY29weVN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2NvcHlTeW1ib2xzSW4nKSxcbiAgICBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpLFxuICAgIGdldEFsbEtleXNJbiA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXNJbicpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGluaXRDbG9uZUFycmF5ID0gcmVxdWlyZSgnLi9faW5pdENsb25lQXJyYXknKSxcbiAgICBpbml0Q2xvbmVCeVRhZyA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUJ5VGFnJyksXG4gICAgaW5pdENsb25lT2JqZWN0ID0gcmVxdWlyZSgnLi9faW5pdENsb25lT2JqZWN0JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzTWFwID0gcmVxdWlyZSgnLi9pc01hcCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU2V0ID0gcmVxdWlyZSgnLi9pc1NldCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfRkxBVF9GTEFHID0gMixcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIHN1cHBvcnRlZCBieSBgXy5jbG9uZWAuICovXG52YXIgY2xvbmVhYmxlVGFncyA9IHt9O1xuY2xvbmVhYmxlVGFnc1thcmdzVGFnXSA9IGNsb25lYWJsZVRhZ3NbYXJyYXlUYWddID1cbmNsb25lYWJsZVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRhVmlld1RhZ10gPVxuY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPVxuY2xvbmVhYmxlVGFnc1tmbG9hdDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50MTZUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MzJUYWddID0gY2xvbmVhYmxlVGFnc1ttYXBUYWddID1cbmNsb25lYWJsZVRhZ3NbbnVtYmVyVGFnXSA9IGNsb25lYWJsZVRhZ3Nbb2JqZWN0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3JlZ2V4cFRhZ10gPSBjbG9uZWFibGVUYWdzW3NldFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID0gY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDhUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OENsYW1wZWRUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5jbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCBhbmQgYF8uY2xvbmVEZWVwYCB3aGljaCB0cmFja3NcbiAqIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gRGVlcCBjbG9uZVxuICogIDIgLSBGbGF0dGVuIGluaGVyaXRlZCBwcm9wZXJ0aWVzXG4gKiAgNCAtIENsb25lIHN5bWJvbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQsXG4gICAgICBpc0RlZXAgPSBiaXRtYXNrICYgQ0xPTkVfREVFUF9GTEFHLFxuICAgICAgaXNGbGF0ID0gYml0bWFzayAmIENMT05FX0ZMQVRfRkxBRyxcbiAgICAgIGlzRnVsbCA9IGJpdG1hc2sgJiBDTE9ORV9TWU1CT0xTX0ZMQUc7XG5cbiAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gY29weUFycmF5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgICAgaXNGdW5jID0gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcblxuICAgIGlmIChpc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjbG9uZUJ1ZmZlcih2YWx1ZSwgaXNEZWVwKTtcbiAgICB9XG4gICAgaWYgKHRhZyA9PSBvYmplY3RUYWcgfHwgdGFnID09IGFyZ3NUYWcgfHwgKGlzRnVuYyAmJiAhb2JqZWN0KSkge1xuICAgICAgcmVzdWx0ID0gKGlzRmxhdCB8fCBpc0Z1bmMpID8ge30gOiBpbml0Q2xvbmVPYmplY3QodmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGlzRmxhdFxuICAgICAgICAgID8gY29weVN5bWJvbHNJbih2YWx1ZSwgYmFzZUFzc2lnbkluKHJlc3VsdCwgdmFsdWUpKVxuICAgICAgICAgIDogY29weVN5bWJvbHModmFsdWUsIGJhc2VBc3NpZ24ocmVzdWx0LCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsb25lYWJsZVRhZ3NbdGFnXSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZUJ5VGFnKHZhbHVlLCB0YWcsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24oc3ViVmFsdWUpIHtcbiAgICAgIHJlc3VsdC5hZGQoYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdWJWYWx1ZSwgdmFsdWUsIHN0YWNrKSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNNYXAodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGtleXNGdW5jID0gaXNGdWxsXG4gICAgPyAoaXNGbGF0ID8gZ2V0QWxsS2V5c0luIDogZ2V0QWxsS2V5cylcbiAgICA6IChpc0ZsYXQgPyBrZXlzSW4gOiBrZXlzKTtcblxuICB2YXIgcHJvcHMgPSBpc0FyciA/IHVuZGVmaW5lZCA6IGtleXNGdW5jKHZhbHVlKTtcbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ2xvbmU7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNyZWF0ZTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG4iLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaGFzSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VIYXNJbihvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYga2V5IGluIE9iamVjdChvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VIYXNJbjtcbiIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJc05hTiA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hTicpLFxuICAgIHN0cmljdEluZGV4T2YgPSByZXF1aXJlKCcuL19zdHJpY3RJbmRleE9mJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWVcbiAgICA/IHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpXG4gICAgOiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXNOYU4sIGZyb21JbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcbiIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL19lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9fZXF1YWxPYmplY3RzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcbiIsInZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXBgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hcCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IG1hcFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXA7XG4iLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWF0Y2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBvYmplY3RgIGlzIGEgbWF0Y2gsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gIWxlbmd0aDtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgaWYgKChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSlcbiAgICAgICAgICA/IGRhdGFbMV0gIT09IG9iamVjdFtkYXRhWzBdXVxuICAgICAgICAgIDogIShkYXRhWzBdIGluIG9iamVjdClcbiAgICAgICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgdmFyIGtleSA9IGRhdGFbMF0sXG4gICAgICAgIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHNyY1ZhbHVlID0gZGF0YVsxXTtcblxuICAgIGlmIChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSkge1xuICAgICAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFjayA9IG5ldyBTdGFjaztcbiAgICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spO1xuICAgICAgfVxuICAgICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcsIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICAgICAgOiByZXN1bHRcbiAgICAgICAgICApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWF0Y2g7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmFOYCB3aXRob3V0IHN1cHBvcnQgZm9yIG51bWJlciBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGBOYU5gLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hTjtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG4iLCJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzU2V0YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHNldCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNTZXQodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBzZXRUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzU2V0O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlc1Byb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLml0ZXJhdGVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbdmFsdWU9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYW4gaXRlcmF0ZWUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGl0ZXJhdGVlLlxuICovXG5mdW5jdGlvbiBiYXNlSXRlcmF0ZWUodmFsdWUpIHtcbiAgLy8gRG9uJ3Qgc3RvcmUgdGhlIGB0eXBlb2ZgIHJlc3VsdCBpbiBhIHZhcmlhYmxlIHRvIGF2b2lkIGEgSklUIGJ1ZyBpbiBTYWZhcmkgOS5cbiAgLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYwMzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gYmFzZU1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pXG4gICAgICA6IGJhc2VNYXRjaGVzKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHkodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJdGVyYXRlZTtcbiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzSW4gPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5c0luO1xuIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9fYmFzZUlzTWF0Y2gnKSxcbiAgICBnZXRNYXRjaERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXRjaERhdGEnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzO1xuIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKSxcbiAgICBnZXQgPSByZXF1aXJlKCcuL2dldCcpLFxuICAgIGhhc0luID0gcmVxdWlyZSgnLi9oYXNJbicpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcbiAgICAgID8gaGFzSW4ob2JqZWN0LCBwYXRoKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG4iLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKSxcbiAgICBjcmVhdGVTZXQgPSByZXF1aXJlKCcuL19jcmVhdGVTZXQnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuaXFCeWAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHNlZW4gPSByZXN1bHQ7XG5cbiAgaWYgKGNvbXBhcmF0b3IpIHtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4gIH1cbiAgZWxzZSBpZiAobGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcbiAgICB2YXIgc2V0ID0gaXRlcmF0ZWUgPyBudWxsIDogY3JlYXRlU2V0KGFycmF5KTtcbiAgICBpZiAoc2V0KSB7XG4gICAgICByZXR1cm4gc2V0VG9BcnJheShzZXQpO1xuICAgIH1cbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgc2VlbiA9IG5ldyBTZXRDYWNoZTtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWVuID0gaXRlcmF0ZWUgPyBbXSA6IHJlc3VsdDtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciBzZWVuSW5kZXggPSBzZWVuLmxlbmd0aDtcbiAgICAgIHdoaWxlIChzZWVuSW5kZXgtLSkge1xuICAgICAgICBpZiAoc2VlbltzZWVuSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHNlZW4sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgaWYgKHNlZW4gIT09IHJlc3VsdCkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmlxO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcbiIsInZhciBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVBcnJheUJ1ZmZlcjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQnVmZmVyO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEYXRhVmlldztcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVSZWdFeHA7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVN5bWJvbDtcbiIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lVHlwZWRBcnJheTtcbiIsIi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlBcnJheTtcbiIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpO1xuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHM7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIGFuZCBpbmhlcml0ZWQgc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHNJbihzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzSW47XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwidmFyIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCcuL25vb3AnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2JqZWN0IG9mIGB2YWx1ZXNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhZGQgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBzZXQuXG4gKi9cbnZhciBjcmVhdGVTZXQgPSAhKFNldCAmJiAoMSAvIHNldFRvQXJyYXkobmV3IFNldChbLC0wXSkpWzFdKSA9PSBJTkZJTklUWSkgPyBub29wIDogZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgU2V0KHZhbHVlcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNldDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG4iLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vX2FycmF5U29tZScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYGFycmF5YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBDaGVjayB0aGF0IGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgYXJyU3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIHZhciBvdGhTdGFja2VkID0gc3RhY2suZ2V0KG90aGVyKTtcbiAgaWYgKGFyclN0YWNrZWQgJiYgb3RoU3RhY2tlZCkge1xuICAgIHJldHVybiBhcnJTdGFja2VkID09IG90aGVyICYmIG90aFN0YWNrZWQgPT0gYXJyYXk7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuIiwidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIHRoYXQgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBvYmpTdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIHZhciBvdGhTdGFja2VkID0gc3RhY2suZ2V0KG90aGVyKTtcbiAgaWYgKG9ialN0YWNrZWQgJiYgb3RoU3RhY2tlZCkge1xuICAgIHJldHVybiBvYmpTdGFja2VkID09IG90aGVyICYmIG90aFN0YWNrZWQgPT0gb2JqZWN0O1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNJbiwgZ2V0U3ltYm9sc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzSW47XG4iLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBrZXkgPSByZXN1bHRbbGVuZ3RoXSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHNJbiA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKG9iamVjdCkge1xuICAgIGFycmF5UHVzaChyZXN1bHQsIGdldFN5bWJvbHMob2JqZWN0KSk7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9sc0luO1xuIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGV4aXN0cyBvbiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYXNGdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjayBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKTtcbiAgICBpZiAoIShyZXN1bHQgPSBvYmplY3QgIT0gbnVsbCAmJiBoYXNGdW5jKG9iamVjdCwga2V5KSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgfVxuICBpZiAocmVzdWx0IHx8ICsraW5kZXggIT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBsZW5ndGggPSBvYmplY3QgPT0gbnVsbCA/IDAgOiBvYmplY3QubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUGF0aDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gbmV3IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUFycmF5O1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyksXG4gICAgY2xvbmVEYXRhVmlldyA9IHJlcXVpcmUoJy4vX2Nsb25lRGF0YVZpZXcnKSxcbiAgICBjbG9uZVJlZ0V4cCA9IHJlcXVpcmUoJy4vX2Nsb25lUmVnRXhwJyksXG4gICAgY2xvbmVTeW1ib2wgPSByZXF1aXJlKCcuL19jbG9uZVN5bWJvbCcpLFxuICAgIGNsb25lVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Nsb25lVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTWFwYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBgU2V0YCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcjtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVCeVRhZztcbiIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcbiIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBtYXRjaGVzUHJvcGVydHlgIGZvciBzb3VyY2UgdmFsdWVzIHN1aXRhYmxlXG4gKiBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUoa2V5LCBzcmNWYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWUgJiZcbiAgICAgIChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gT2JqZWN0KG9iamVjdCkpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZTtcbiIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXNJbjtcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG4iLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IDQ2IC8qIC4gKi8pIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3ViU3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG4iLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuIiwidmFyIGJhc2VDbG9uZSA9IHJlcXVpcmUoJy4vX2Jhc2VDbG9uZScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmNsb25lYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBjbG9uZXMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVjdXJzaXZlbHkgY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnYSc6IDEgfSwgeyAnYic6IDIgfV07XG4gKlxuICogdmFyIGRlZXAgPSBfLmNsb25lRGVlcChvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKGRlZXBbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gIHJldHVybiBiYXNlQ2xvbmUodmFsdWUsIENMT05FX0RFRVBfRkxBRyB8IENMT05FX1NZTUJPTFNfRkxBRyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG4iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAsIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldDtcbiIsInZhciBiYXNlSGFzSW4gPSByZXF1aXJlKCcuL19iYXNlSGFzSW4nKSxcbiAgICBoYXNQYXRoID0gcmVxdWlyZSgnLi9faGFzUGF0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgaXMgYSBkaXJlY3Qgb3IgaW5oZXJpdGVkIHByb3BlcnR5IG9mIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IF8uY3JlYXRlKHsgJ2EnOiBfLmNyZWF0ZSh7ICdiJzogMiB9KSB9KTtcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EuYicpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2InKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGhhc0luKG9iamVjdCwgcGF0aCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgaGFzUGF0aChvYmplY3QsIHBhdGgsIGJhc2VIYXNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzSW47XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlXG4gKiBlcXVpdmFsZW50LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBjb21wYXJpbmcgYXJyYXlzLCBhcnJheSBidWZmZXJzLCBib29sZWFucyxcbiAqIGRhdGUgb2JqZWN0cywgZXJyb3Igb2JqZWN0cywgbWFwcywgbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcyxcbiAqIHNldHMsIHN0cmluZ3MsIHN5bWJvbHMsIGFuZCB0eXBlZCBhcnJheXMuIGBPYmplY3RgIG9iamVjdHMgYXJlIGNvbXBhcmVkXG4gKiBieSB0aGVpciBvd24sIG5vdCBpbmhlcml0ZWQsIGVudW1lcmFibGUgcHJvcGVydGllcy4gRnVuY3Rpb25zIGFuZCBET01cbiAqIG5vZGVzIGFyZSBjb21wYXJlZCBieSBzdHJpY3QgZXF1YWxpdHksIGkuZS4gYD09PWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uaXNFcXVhbChvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBvYmplY3QgPT09IG90aGVyO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcXVhbDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCJ2YXIgYmFzZUlzTWFwID0gcmVxdWlyZSgnLi9fYmFzZUlzTWFwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc01hcCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzTWFwO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgTWFwYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBtYXAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc01hcChuZXcgTWFwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTWFwKG5ldyBXZWFrTWFwKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc01hcCA9IG5vZGVJc01hcCA/IGJhc2VVbmFyeShub2RlSXNNYXApIDogYmFzZUlzTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFwO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUlzU2V0ID0gcmVxdWlyZSgnLi9fYmFzZUlzU2V0JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1NldCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzU2V0O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU2V0YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1NldChuZXcgU2V0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU2V0KG5ldyBXZWFrU2V0KTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1NldCA9IG5vZGVJc1NldCA/IGJhc2VVbmFyeShub2RlSXNTZXQpIDogYmFzZUlzU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2V0O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNVbmRlZmluZWQodm9pZCAwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVW5kZWZpbmVkKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNVbmRlZmluZWQ7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG4iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcbiIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHknKSxcbiAgICBiYXNlUHJvcGVydHlEZWVwID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5RGVlcCcpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGEgZ2l2ZW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW1xuICogICB7ICdhJzogeyAnYic6IDIgfSB9LFxuICogICB7ICdhJzogeyAnYic6IDEgfSB9XG4gKiBdO1xuICpcbiAqIF8ubWFwKG9iamVjdHMsIF8ucHJvcGVydHkoJ2EuYicpKTtcbiAqIC8vID0+IFsyLCAxXVxuICpcbiAqIF8ubWFwKF8uc29ydEJ5KG9iamVjdHMsIF8ucHJvcGVydHkoWydhJywgJ2InXSkpLCAnYS5iJyk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICByZXR1cm4gaXNLZXkocGF0aCkgPyBiYXNlUHJvcGVydHkodG9LZXkocGF0aCkpIDogYmFzZVByb3BlcnR5RGVlcChwYXRoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9wZXJ0eTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuIiwidmFyIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLnVuaXFgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGl0ZXJhdGVlYCB3aGljaCBpc1xuICogaW52b2tlZCBmb3IgZWFjaCBlbGVtZW50IGluIGBhcnJheWAgdG8gZ2VuZXJhdGUgdGhlIGNyaXRlcmlvbiBieSB3aGljaFxuICogdW5pcXVlbmVzcyBpcyBjb21wdXRlZC4gVGhlIG9yZGVyIG9mIHJlc3VsdCB2YWx1ZXMgaXMgZGV0ZXJtaW5lZCBieSB0aGVcbiAqIG9yZGVyIHRoZXkgb2NjdXIgaW4gdGhlIGFycmF5LiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDpcbiAqICh2YWx1ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVuaXFCeShbMi4xLCAxLjIsIDIuM10sIE1hdGguZmxvb3IpO1xuICogLy8gPT4gWzIuMSwgMS4yXVxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy51bmlxQnkoW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH0sIHsgJ3gnOiAxIH1dLCAneCcpO1xuICogLy8gPT4gW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH1dXG4gKi9cbmZ1bmN0aW9uIHVuaXFCeShhcnJheSwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVVuaXEoYXJyYXksIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMikpIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pcUJ5O1xuIiwidmFyIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLnVuaXFgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGNvbXBhcmF0b3JgIHdoaWNoXG4gKiBpcyBpbnZva2VkIHRvIGNvbXBhcmUgZWxlbWVudHMgb2YgYGFycmF5YC4gVGhlIG9yZGVyIG9mIHJlc3VsdCB2YWx1ZXMgaXNcbiAqIGRldGVybWluZWQgYnkgdGhlIG9yZGVyIHRoZXkgb2NjdXIgaW4gdGhlIGFycmF5LlRoZSBjb21wYXJhdG9yIGlzIGludm9rZWRcbiAqIHdpdGggdHdvIGFyZ3VtZW50czogKGFyclZhbCwgb3RoVmFsKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAneCc6IDEsICd5JzogMiB9LCB7ICd4JzogMiwgJ3knOiAxIH0sIHsgJ3gnOiAxLCAneSc6IDIgfV07XG4gKlxuICogXy51bmlxV2l0aChvYmplY3RzLCBfLmlzRXF1YWwpO1xuICogLy8gPT4gW3sgJ3gnOiAxLCAneSc6IDIgfSwgeyAneCc6IDIsICd5JzogMSB9XVxuICovXG5mdW5jdGlvbiB1bmlxV2l0aChhcnJheSwgY29tcGFyYXRvcikge1xuICBjb21wYXJhdG9yID0gdHlwZW9mIGNvbXBhcmF0b3IgPT0gJ2Z1bmN0aW9uJyA/IGNvbXBhcmF0b3IgOiB1bmRlZmluZWQ7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSA/IGJhc2VVbmlxKGFycmF5LCB1bmRlZmluZWQsIGNvbXBhcmF0b3IpIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pcVdpdGg7XG4iLCJ2YXIgU3lsdmVzdGVyID0ge31cblxuU3lsdmVzdGVyLk1hdHJpeCA9IGZ1bmN0aW9uKCkge31cblxuU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUgPSBmdW5jdGlvbihlbGVtZW50cykge1xuICB2YXIgTSA9IG5ldyBTeWx2ZXN0ZXIuTWF0cml4KClcbiAgcmV0dXJuIE0uc2V0RWxlbWVudHMoZWxlbWVudHMpXG59XG5cblN5bHZlc3Rlci5NYXRyaXguSSA9IGZ1bmN0aW9uKG4pIHtcbiAgdmFyIGVscyA9IFtdLFxuICAgIGkgPSBuLFxuICAgIGpcbiAgd2hpbGUgKGktLSkge1xuICAgIGogPSBuXG4gICAgZWxzW2ldID0gW11cbiAgICB3aGlsZSAoai0tKSB7XG4gICAgICBlbHNbaV1bal0gPSBpID09PSBqID8gMSA6IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKGVscylcbn1cblxuU3lsdmVzdGVyLk1hdHJpeC5wcm90b3R5cGUgPSB7XG4gIGR1cDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKHRoaXMuZWxlbWVudHMpXG4gIH0sXG5cbiAgaXNTcXVhcmU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb2xzID0gdGhpcy5lbGVtZW50cy5sZW5ndGggPT09IDAgPyAwIDogdGhpcy5lbGVtZW50c1swXS5sZW5ndGhcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cy5sZW5ndGggPT09IGNvbHNcbiAgfSxcblxuICB0b1JpZ2h0VHJpYW5ndWxhcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUoW10pXG4gICAgdmFyIE0gPSB0aGlzLmR1cCgpLFxuICAgICAgZWxzXG4gICAgdmFyIG4gPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGksXG4gICAgICBqLFxuICAgICAgbnAgPSB0aGlzLmVsZW1lbnRzWzBdLmxlbmd0aCxcbiAgICAgIHBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBpZiAoTS5lbGVtZW50c1tpXVtpXSA9PT0gMCkge1xuICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgIGlmIChNLmVsZW1lbnRzW2pdW2ldICE9PSAwKSB7XG4gICAgICAgICAgICBlbHMgPSBbXVxuICAgICAgICAgICAgZm9yIChwID0gMDsgcCA8IG5wOyBwKyspIHtcbiAgICAgICAgICAgICAgZWxzLnB1c2goTS5lbGVtZW50c1tpXVtwXSArIE0uZWxlbWVudHNbal1bcF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBNLmVsZW1lbnRzW2ldID0gZWxzXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE0uZWxlbWVudHNbaV1baV0gIT09IDApIHtcbiAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICB2YXIgbXVsdGlwbGllciA9IE0uZWxlbWVudHNbal1baV0gLyBNLmVsZW1lbnRzW2ldW2ldXG4gICAgICAgICAgZWxzID0gW11cbiAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgbnA7IHArKykge1xuICAgICAgICAgICAgLy8gRWxlbWVudHMgd2l0aCBjb2x1bW4gbnVtYmVycyB1cCB0byBhbiBpbmNsdWRpbmcgdGhlIG51bWJlciBvZiB0aGVcbiAgICAgICAgICAgIC8vIHJvdyB0aGF0IHdlJ3JlIHN1YnRyYWN0aW5nIGNhbiBzYWZlbHkgYmUgc2V0IHN0cmFpZ2h0IHRvIHplcm8sXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGF0J3MgdGhlIHBvaW50IG9mIHRoaXMgcm91dGluZSBhbmQgaXQgYXZvaWRzIGhhdmluZyB0b1xuICAgICAgICAgICAgLy8gbG9vcCBvdmVyIGFuZCBjb3JyZWN0IHJvdW5kaW5nIGVycm9ycyBsYXRlclxuICAgICAgICAgICAgZWxzLnB1c2goXG4gICAgICAgICAgICAgIHAgPD0gaSA/IDAgOiBNLmVsZW1lbnRzW2pdW3BdIC0gTS5lbGVtZW50c1tpXVtwXSAqIG11bHRpcGxpZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgTS5lbGVtZW50c1tqXSA9IGVsc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBNXG4gIH0sXG5cbiAgZGV0ZXJtaW5hbnQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzU3F1YXJlKCkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHZhciBNID0gdGhpcy50b1JpZ2h0VHJpYW5ndWxhcigpXG4gICAgdmFyIGRldCA9IE0uZWxlbWVudHNbMF1bMF0sXG4gICAgICBuID0gTS5lbGVtZW50cy5sZW5ndGhcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgZGV0ID0gZGV0ICogTS5lbGVtZW50c1tpXVtpXVxuICAgIH1cbiAgICByZXR1cm4gZGV0XG4gIH0sXG5cbiAgaXNTaW5ndWxhcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTcXVhcmUoKSAmJiB0aGlzLmRldGVybWluYW50KCkgPT09IDBcbiAgfSxcblxuICBhdWdtZW50OiBmdW5jdGlvbihtYXRyaXgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmR1cCgpXG4gICAgfVxuICAgIHZhciBNID0gbWF0cml4LmVsZW1lbnRzIHx8IG1hdHJpeFxuICAgIGlmICh0eXBlb2YgTVswXVswXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIE0gPSBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZShNKS5lbGVtZW50c1xuICAgIH1cbiAgICB2YXIgVCA9IHRoaXMuZHVwKCksXG4gICAgICBjb2xzID0gVC5lbGVtZW50c1swXS5sZW5ndGhcbiAgICB2YXIgaSA9IFQuZWxlbWVudHMubGVuZ3RoLFxuICAgICAgbmogPSBNWzBdLmxlbmd0aCxcbiAgICAgIGpcbiAgICBpZiAoaSAhPT0gTS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGogPSBualxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBULmVsZW1lbnRzW2ldW2NvbHMgKyBqXSA9IE1baV1bal1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFRcbiAgfSxcblxuICBpbnZlcnNlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICghdGhpcy5pc1NxdWFyZSgpIHx8IHRoaXMuaXNTaW5ndWxhcigpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICB2YXIgbiA9IHRoaXMuZWxlbWVudHMubGVuZ3RoLFxuICAgICAgaSA9IG4sXG4gICAgICBqXG4gICAgdmFyIE0gPSB0aGlzLmF1Z21lbnQoU3lsdmVzdGVyLk1hdHJpeC5JKG4pKS50b1JpZ2h0VHJpYW5ndWxhcigpXG4gICAgdmFyIG5wID0gTS5lbGVtZW50c1swXS5sZW5ndGgsXG4gICAgICBwLFxuICAgICAgZWxzLFxuICAgICAgZGl2aXNvclxuICAgIHZhciBpbnZlcnNlX2VsZW1lbnRzID0gW10sXG4gICAgICBuZXdfZWxlbWVudFxuICAgIC8vIFN5bHZlc3Rlci5NYXRyaXggaXMgbm9uLXNpbmd1bGFyIHNvIHRoZXJlIHdpbGwgYmUgbm8gemVyb3Mgb24gdGhlXG4gICAgLy8gZGlhZ29uYWwuIEN5Y2xlIHRocm91Z2ggcm93cyBmcm9tIGxhc3QgdG8gZmlyc3QuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgLy8gRmlyc3QsIG5vcm1hbGlzZSBkaWFnb25hbCBlbGVtZW50cyB0byAxXG4gICAgICBlbHMgPSBbXVxuICAgICAgaW52ZXJzZV9lbGVtZW50c1tpXSA9IFtdXG4gICAgICBkaXZpc29yID0gTS5lbGVtZW50c1tpXVtpXVxuICAgICAgZm9yIChwID0gMDsgcCA8IG5wOyBwKyspIHtcbiAgICAgICAgbmV3X2VsZW1lbnQgPSBNLmVsZW1lbnRzW2ldW3BdIC8gZGl2aXNvclxuICAgICAgICBlbHMucHVzaChuZXdfZWxlbWVudClcbiAgICAgICAgLy8gU2h1ZmZsZSBvZmYgdGhlIGN1cnJlbnQgcm93IG9mIHRoZSByaWdodCBoYW5kIHNpZGUgaW50byB0aGUgcmVzdWx0c1xuICAgICAgICAvLyBhcnJheSBhcyBpdCB3aWxsIG5vdCBiZSBtb2RpZmllZCBieSBsYXRlciBydW5zIHRocm91Z2ggdGhpcyBsb29wXG4gICAgICAgIGlmIChwID49IG4pIHtcbiAgICAgICAgICBpbnZlcnNlX2VsZW1lbnRzW2ldLnB1c2gobmV3X2VsZW1lbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIE0uZWxlbWVudHNbaV0gPSBlbHNcbiAgICAgIC8vIFRoZW4sIHN1YnRyYWN0IHRoaXMgcm93IGZyb20gdGhvc2UgYWJvdmUgaXQgdG8gZ2l2ZSB0aGUgaWRlbnRpdHkgbWF0cml4XG4gICAgICAvLyBvbiB0aGUgbGVmdCBoYW5kIHNpZGVcbiAgICAgIGogPSBpXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGVscyA9IFtdXG4gICAgICAgIGZvciAocCA9IDA7IHAgPCBucDsgcCsrKSB7XG4gICAgICAgICAgZWxzLnB1c2goTS5lbGVtZW50c1tqXVtwXSAtIE0uZWxlbWVudHNbaV1bcF0gKiBNLmVsZW1lbnRzW2pdW2ldKVxuICAgICAgICB9XG4gICAgICAgIE0uZWxlbWVudHNbal0gPSBlbHNcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKGludmVyc2VfZWxlbWVudHMpXG4gIH0sXG5cbiAgc2V0RWxlbWVudHM6IGZ1bmN0aW9uKGVscykge1xuICAgIHZhciBpLFxuICAgICAgaixcbiAgICAgIGVsZW1lbnRzID0gZWxzLmVsZW1lbnRzIHx8IGVsc1xuICAgIGlmIChlbGVtZW50c1swXSAmJiB0eXBlb2YgZWxlbWVudHNbMF1bMF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpID0gZWxlbWVudHMubGVuZ3RoXG4gICAgICB0aGlzLmVsZW1lbnRzID0gW11cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaiA9IGVsZW1lbnRzW2ldLmxlbmd0aFxuICAgICAgICB0aGlzLmVsZW1lbnRzW2ldID0gW11cbiAgICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNbaV1bal0gPSBlbGVtZW50c1tpXVtqXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICB2YXIgbiA9IGVsZW1lbnRzLmxlbmd0aFxuICAgIHRoaXMuZWxlbWVudHMgPSBbXVxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMuZWxlbWVudHMucHVzaChbZWxlbWVudHNbaV1dKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9LFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gIHJldHVybiBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZShlbGVtZW50cykuaW52ZXJzZSgpLmVsZW1lbnRzXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuKGZ1bmN0aW9uKCl7XG5cbiAgdmFyXG4gICAgYnVmLFxuICAgIGJ1ZklkeCA9IDAsXG4gICAgaGV4Qnl0ZXMgPSBbXSxcbiAgICBpXG4gIDtcblxuICAvLyBQcmUtY2FsY3VsYXRlIHRvU3RyaW5nKDE2KSBmb3Igc3BlZWRcbiAgZm9yIChpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgaGV4Qnl0ZXNbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xuICB9XG5cbiAgLy8gQnVmZmVyIHJhbmRvbSBudW1iZXJzIGZvciBzcGVlZFxuICAvLyBSZWR1Y2UgbWVtb3J5IHVzYWdlIGJ5IGRlY3JlYXNpbmcgdGhpcyBudW1iZXIgKG1pbiAxNilcbiAgLy8gb3IgaW1wcm92ZSBzcGVlZCBieSBpbmNyZWFzaW5nIHRoaXMgbnVtYmVyICh0cnkgMTYzODQpXG4gIHV1aWQuQlVGRkVSX1NJWkUgPSA0MDk2O1xuXG4gIC8vIEJpbmFyeSB1dWlkc1xuICB1dWlkLmJpbiA9IHV1aWRCaW47XG5cbiAgLy8gQ2xlYXIgYnVmZmVyXG4gIHV1aWQuY2xlYXJCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICBidWYgPSBudWxsO1xuICAgIGJ1ZklkeCA9IDA7XG4gIH07XG5cbiAgLy8gVGVzdCBmb3IgdXVpZFxuICB1dWlkLnRlc3QgPSBmdW5jdGlvbih1dWlkKSB7XG4gICAgaWYgKHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIC9eWzAtOWEtZl17OH0tWzAtOWEtZl17NH0tNFswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfSQvaS50ZXN0KHV1aWQpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gTm9kZSAmIEJyb3dzZXIgc3VwcG9ydFxuICB2YXIgY3J5cHQwO1xuICBpZiAodHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjcnlwdDAgPSBjcnlwdG87XG4gIH0gZWxzZSBpZiggKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSAmJiAodHlwZW9mIHdpbmRvdy5tc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgY3J5cHQwID0gd2luZG93Lm1zQ3J5cHRvOyAvLyBJRTExXG4gIH1cblxuICBpZiAoKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSAmJiAodHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgY3J5cHQwID0gY3J5cHQwIHx8IHJlcXVpcmUoJ2NyeXB0bycpO1xuICAgIG1vZHVsZS5leHBvcnRzID0gdXVpZDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy51dWlkID0gdXVpZDtcbiAgfVxuXG4gIC8vIFVzZSBiZXN0IGF2YWlsYWJsZSBQUk5HXG4gIC8vIEFsc28gZXhwb3NlIHRoaXMgc28geW91IGNhbiBvdmVycmlkZSBpdC5cbiAgdXVpZC5yYW5kb21CeXRlcyA9IChmdW5jdGlvbigpe1xuICAgIGlmIChjcnlwdDApIHtcbiAgICAgIGlmIChjcnlwdDAucmFuZG9tQnl0ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyeXB0MC5yYW5kb21CeXRlcztcbiAgICAgIH1cbiAgICAgIGlmIChjcnlwdDAuZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24obikge1xuICAgICAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobik7XG4gICAgICAgICAgICBjcnlwdDAuZ2V0UmFuZG9tVmFsdWVzKGJ5dGVzKTtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGJ5dGVzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobik7XG4gICAgICAgICAgY3J5cHQwLmdldFJhbmRvbVZhbHVlcyhieXRlcyk7XG4gICAgICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24obikge1xuICAgICAgdmFyIGksIHIgPSBbXTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgci5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvLyBCdWZmZXIgc29tZSByYW5kb20gYnl0ZXMgZm9yIHNwZWVkXG4gIGZ1bmN0aW9uIHJhbmRvbUJ5dGVzQnVmZmVyZWQobikge1xuICAgIGlmICghYnVmIHx8ICgoYnVmSWR4ICsgbikgPiB1dWlkLkJVRkZFUl9TSVpFKSkge1xuICAgICAgYnVmSWR4ID0gMDtcbiAgICAgIGJ1ZiA9IHV1aWQucmFuZG9tQnl0ZXModXVpZC5CVUZGRVJfU0laRSk7XG4gICAgfVxuICAgIHJldHVybiBidWYuc2xpY2UoYnVmSWR4LCBidWZJZHggKz0gbik7XG4gIH1cblxuICAvLyB1dWlkLmJpblxuICBmdW5jdGlvbiB1dWlkQmluKCkge1xuICAgIHZhciBiID0gcmFuZG9tQnl0ZXNCdWZmZXJlZCgxNik7XG4gICAgYls2XSA9IChiWzZdICYgMHgwZikgfCAweDQwO1xuICAgIGJbOF0gPSAoYls4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIC8vIFN0cmluZyBVVUlEdjQgKFJhbmRvbSlcbiAgZnVuY3Rpb24gdXVpZCgpIHtcbiAgICB2YXIgYiA9IHV1aWRCaW4oKTtcbiAgICByZXR1cm4gaGV4Qnl0ZXNbYlswXV0gKyBoZXhCeXRlc1tiWzFdXSArXG4gICAgICBoZXhCeXRlc1tiWzJdXSArIGhleEJ5dGVzW2JbM11dICsgJy0nICtcbiAgICAgIGhleEJ5dGVzW2JbNF1dICsgaGV4Qnl0ZXNbYls1XV0gKyAnLScgK1xuICAgICAgaGV4Qnl0ZXNbYls2XV0gKyBoZXhCeXRlc1tiWzddXSArICctJyArXG4gICAgICBoZXhCeXRlc1tiWzhdXSArIGhleEJ5dGVzW2JbOV1dICsgJy0nICtcbiAgICAgIGhleEJ5dGVzW2JbMTBdXSArIGhleEJ5dGVzW2JbMTFdXSArXG4gICAgICBoZXhCeXRlc1tiWzEyXV0gKyBoZXhCeXRlc1tiWzEzXV0gK1xuICAgICAgaGV4Qnl0ZXNbYlsxNF1dICsgaGV4Qnl0ZXNbYlsxNV1dXG4gICAgO1xuICB9XG5cbn0pKCk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJjb25zdCBpc0VxdWFsID0gKG9iajEsIG9iajIpID0+IHtcbiAgICBmdW5jdGlvbiBnZXRUeXBlKG9iaikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFyZUFycmF5c0VxdWFsKCkge1xuICAgICAgICBpZiAob2JqMS5sZW5ndGggIT09IG9iajIubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iajEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghaXNFcXVhbChvYmoxW2ldLCBvYmoyW2ldKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFyZU9iamVjdHNFcXVhbCgpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG9iajEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMob2JqMikubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqMSkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmoxLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsKG9iajFba2V5XSwgb2JqMltrZXldKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhcmVGdW5jdGlvbnNFcXVhbCgpIHtcbiAgICAgICAgcmV0dXJuIG9iajEudG9TdHJpbmcoKSA9PT0gb2JqMi50b1N0cmluZygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhcmVQcmltYXRpdmVzRXF1YWwoKSB7XG4gICAgICAgIHJldHVybiBvYmoxID09PSBvYmoyO1xuICAgIH1cbiAgICBsZXQgdHlwZSA9IGdldFR5cGUob2JqMSk7XG4gICAgaWYgKHR5cGUgIT09IGdldFR5cGUob2JqMikpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAodHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICByZXR1cm4gYXJlQXJyYXlzRXF1YWwoKTtcbiAgICBpZiAodHlwZSA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgcmV0dXJuIGFyZU9iamVjdHNFcXVhbCgpO1xuICAgIGlmICh0eXBlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBhcmVGdW5jdGlvbnNFcXVhbCgpO1xuICAgIHJldHVybiBhcmVQcmltYXRpdmVzRXF1YWwoKTtcbn07XG5jb25zdCB0cnVuY2F0ZUxheWVyTmFtZSA9IChsYXllck5hbWUsIG1heExlbmd0aCA9IDI1KSA9PiB7XG4gICAgaWYgKGxheWVyTmFtZS5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGxheWVyTmFtZS5zdWJzdHJpbmcoMCwgbWF4TGVuZ3RoKSArIFwiLi4uXCI7XG4gICAgfVxuICAgIHJldHVybiBsYXllck5hbWU7XG59O1xuY29uc3QgdG9DYXBpdGFsaXplZFN0cmluZyA9ICh2YWx1ZVRvQ29udmVydCkgPT4ge1xuICAgIGxldCBvdXRwdXRWYWx1ZSA9IHZhbHVlVG9Db252ZXJ0LnRvU3RyaW5nKCk7XG4gICAgb3V0cHV0VmFsdWUgPSBvdXRwdXRWYWx1ZVswXS50b1VwcGVyQ2FzZSgpICsgb3V0cHV0VmFsdWUuc3Vic3RyaW5nKDEpO1xuICAgIHJldHVybiBvdXRwdXRWYWx1ZTtcbn07XG5jb25zdCByZ2JUb0hleCA9IChyLCBnLCBiKSA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50VG9IZXggPSAoY29sb3JWYWx1ZSkgPT4ge1xuICAgICAgICBjb2xvclZhbHVlID0gTWF0aC5yb3VuZChjb2xvclZhbHVlICogMjU1KTtcbiAgICAgICAgbGV0IGhleCA9IGNvbG9yVmFsdWUudG9TdHJpbmcoMTYpO1xuICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xuICAgIH07XG4gICAgY29uc3QgY29tYmluZUNvbXBvbmVudHMgPSAociwgZywgYikgPT4ge1xuICAgICAgICByZXR1cm4gXCIjXCIgKyBjb21wb25lbnRUb0hleChyKSArIGNvbXBvbmVudFRvSGV4KGcpICsgY29tcG9uZW50VG9IZXgoYik7XG4gICAgfTtcbiAgICByZXR1cm4gY29tYmluZUNvbXBvbmVudHMociwgZywgYik7XG59O1xuY29uc3Qgc2VsZWN0QW5kWm9vbVRvTGF5ZXIgPSAobGF5ZXJJZCkgPT4ge1xuICAgIGNvbnN0IGxheWVyID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobGF5ZXJJZCk7XG4gICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW2xheWVyXTtcbiAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW2xheWVyXSk7XG59O1xuZXhwb3J0IHsgaXNFcXVhbCwgdHJ1bmNhdGVMYXllck5hbWUsIHRvQ2FwaXRhbGl6ZWRTdHJpbmcsIHJnYlRvSGV4LCBzZWxlY3RBbmRab29tVG9MYXllciwgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHV1aWQgZnJvbSBcInV1aWQtcmFuZG9tXCI7XG5pbXBvcnQgeyBpc1Zpc2libGVOb2RlIH0gZnJvbSBcIkBmaWdtYS1wbHVnaW4vaGVscGVyc1wiO1xuaW1wb3J0IHsgdG9DYXBpdGFsaXplZFN0cmluZywgcmdiVG9IZXgsIHNlbGVjdEFuZFpvb21Ub0xheWVyLCB9IGZyb20gXCIuLi9hcHAvY29tcG9uZW50cy91dGlsc1wiO1xuaW1wb3J0IHJhd0xpZ2h0Q29sb3JUb2tlbnMgZnJvbSBcIi4uLy4uL2RhdGEvbGlnaHQtbW9kZS5qc29uXCI7XG5pbXBvcnQgcmF3RGFya0NvbG9yVG9rZW5zIGZyb20gXCIuLi8uLi9kYXRhL2RhcmstbW9kZS5qc29uXCI7XG5sZXQgdWlTaXplID0ge1xuICAgIHdpZHRoOiAzMDAsXG4gICAgaGVpZ2h0OiA0NDgsXG59O1xuY29uc3QgY3JlYXRlVGFibGUgPSAobXNnKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB0YWJsZUZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBsZXQgaGVhZGVyQ2VsbCA9IHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoXCJjZThmYThlOGNhYjA3YTE5ZjgzZjQxODFhYzhjYmU3NjA5M2M2YmMzXCIpO1xuICAgIGxldCB0YWJsZVJvdyA9IGZpZ21hLmNyZWF0ZUNvbXBvbmVudCgpO1xuICAgIGxldCBjZWxsRmlsbENvbnRhaW5lclkgPSBmYWxzZTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgdGFibGVGcmFtZS5uYW1lID0gXCJUYWJsZVwiO1xuICAgIHRhYmxlRnJhbWUuZmlsbHMgPSBbXTtcbiAgICB0YWJsZUZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIHRhYmxlRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICB0YWJsZUZyYW1lLnggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICB0YWJsZUZyYW1lLnkgPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueTtcbiAgICBtc2cuY29sdW1uQ29uZmlndXJhdGlvbi5maW5kKChjb2wpID0+IChjZWxsRmlsbENvbnRhaW5lclkgPSBjb2wubXVsdGlWYWx1ZSkpO1xuICAgIFsuLi5BcnJheShtc2cucm93cyArIDEpLmtleXMoKV0ubWFwKChyb3dJbmRleCkgPT4ge1xuICAgICAgICB0YWJsZVJvdy5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgIHRhYmxlUm93LmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICB0YWJsZVJvdy5uYW1lID0gXCJSb3dcIjtcbiAgICAgICAgbXNnLmNvbHVtbkNvbmZpZ3VyYXRpb24uZm9yRWFjaCgoY29sKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCB7IG5hbWU6IGNvbE5hbWUsIGFsaWdubWVudDogY29sQWxpZ25tZW50LCBjZWxsVHlwZTogY29sQ2VsbFR5cGUsIG11bHRpVmFsdWU6IGNvbE11bHRpVmFsdWUsIH0gPSBjb2w7XG4gICAgICAgICAgICBjb2xBbGlnbm1lbnQgPSB0b0NhcGl0YWxpemVkU3RyaW5nKGNvbEFsaWdubWVudCk7XG4gICAgICAgICAgICBjb2xDZWxsVHlwZSA9IHRvQ2FwaXRhbGl6ZWRTdHJpbmcoY29sQ2VsbFR5cGUpO1xuICAgICAgICAgICAgY29sTXVsdGlWYWx1ZSA9IHRvQ2FwaXRhbGl6ZWRTdHJpbmcoY29sTXVsdGlWYWx1ZSk7XG4gICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhpc0hlYWRlckNlbGwgPSBoZWFkZXJDZWxsLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHROb2RlT2ZIZWFkZXJDZWxsID0gdGhpc0hlYWRlckNlbGwuY2hpbGRyZW5bMF1cbiAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZEhhdmVIZWFkZXJUZXh0ID0gY29sQ2VsbFR5cGUgIT09IFwiRmF2b3JpdGVcIiAmJiBjb2xDZWxsVHlwZSAhPT0gXCJBY3Rpb25zXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbFR5cGVJc0FjdGlvbnMgPSBjb2xDZWxsVHlwZSA9PT0gXCJBY3Rpb25zXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzQ3VzdG9tQ29sTmFtZSA9IGNvbE5hbWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbE5hbWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXRIZWFkZXJUZXh0Q2hhcmFjdGVycyA9IChuZXdDaGFycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbC5kZWxldGVDaGFyYWN0ZXJzKDAsIHRleHROb2RlT2ZIZWFkZXJDZWxsLmNoYXJhY3RlcnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5vZGVPZkhlYWRlckNlbGwuaW5zZXJ0Q2hhcmFjdGVycygwLCBuZXdDaGFycyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzQ3VzdG9tQ29sTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5uYW1lID0gY29sTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGVhZGVyVGV4dENoYXJhY3RlcnMoY29sTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5uYW1lID0gXCJIZWFkZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGVhZGVyVGV4dENoYXJhY3RlcnMoXCJIZWFkZXJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghc2hvdWxkSGF2ZUhlYWRlclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyb3dzTGF5ZXIgPSB0aGlzSGVhZGVyQ2VsbC5maW5kT25lKChjaGlsZCkgPT4gY2hpbGQubmFtZSA9PT0gXCJBcnJvd3NcIik7XG4gICAgICAgICAgICAgICAgICAgIGFycm93c0xheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGVhZGVyVGV4dENoYXJhY3RlcnMoXCIgXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5zZXRQcm9wZXJ0aWVzKHsgQWxpZ25tZW50OiBjb2xBbGlnbm1lbnQgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0ZXJtaW5lSGVhZGVyQ2VsbFdpZHRoID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobXNnLmlzTXVsdGlWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxMjA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xDZWxsVHlwZSA9PT0gXCJFbnRpdHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxMDI7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hvdWxkSGF2ZUhlYWRlclRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gNTA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzSGVhZGVyQ2VsbC53aWR0aDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLnJlc2l6ZShkZXRlcm1pbmVIZWFkZXJDZWxsV2lkdGgoKSwgdGhpc0hlYWRlckNlbGwuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5jaGlsZHJlblswXS5sYXlvdXRHcm93ID1cbiAgICAgICAgICAgICAgICAgICAgY2VsbEZpbGxDb250YWluZXJZID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gY2VsbEZpbGxDb250YWluZXJZXG4gICAgICAgICAgICAgICAgICAgID8gXCJGSVhFRFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJBVVRPXCI7XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwuY291bnRlckF4aXNTaXppbmdNb2RlID0gIXNob3VsZEhhdmVIZWFkZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgID8gXCJBVVRPXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwuY291bnRlckF4aXNTaXppbmdNb2RlID0gY2VsbFR5cGVJc0FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgPyBcIkZJWEVEXCJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzSGVhZGVyQ2VsbC5jb3VudGVyQXhpc1NpemluZ01vZGU7XG4gICAgICAgICAgICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGhpc0hlYWRlckNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGFibGVGcmFtZS5hcHBlbmRDaGlsZCh0YWJsZVJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGhpc1RhYmxlUm93ID0gdGFibGVSb3cuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgIHRoaXNUYWJsZVJvdy5jaGlsZHJlbi5tYXAoKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY2VsbCA9IGNlbGw7XG4gICAgICAgICAgICAgICAgbGV0IHsgY2VsbFR5cGU6IGNvbENlbGxUeXBlLCBtdWx0aVZhbHVlOiBjb2xNdWx0aVZhbHVlIH0gPSBtc2cuY29sdW1uQ29uZmlndXJhdGlvbltpbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbFR5cGVzVGhhdENhbkJlTXVsdGlWYWx1ZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiTWV0cmljXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRW50aXR5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiTGlua1wiLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGVNdWx0aVZhbHVlID0gdG9DYXBpdGFsaXplZFN0cmluZyhtc2cuaXNNdWx0aVZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb2xDZWxsVHlwZSA9IHRvQ2FwaXRhbGl6ZWRTdHJpbmcoY29sQ2VsbFR5cGUpO1xuICAgICAgICAgICAgICAgIGNvbE11bHRpVmFsdWUgPSB0b0NhcGl0YWxpemVkU3RyaW5nKGNvbE11bHRpVmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbENhbkJlTXVsdGlWYWx1ZSA9IGNlbGxUeXBlc1RoYXRDYW5CZU11bHRpVmFsdWUuc29tZSgoY2VsbFR5cGUpID0+IGNlbGxUeXBlID09PSBjb2xDZWxsVHlwZSk7XG4gICAgICAgICAgICAgICAgY2VsbC5uYW1lID09PSBcIkhlYWRlclwiID8gKGNlbGwubmFtZSA9IFwiQ2VsbFwiKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRQcm9wZXJ0aWVzKHsgVHlwZTogXCJCb2R5XCIgfSk7XG4gICAgICAgICAgICAgICAgY2VsbC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgICAgICAgICAgVHlwZTogY29sQ2VsbFR5cGUsXG4gICAgICAgICAgICAgICAgICAgIFwiTXVsdGktdmFsdWVcIjogY29sQ2FuQmVNdWx0aVZhbHVlID8gdGFibGVNdWx0aVZhbHVlIDogXCJGYWxzZVwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNlbGwuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgIGlmIChtc2cuaXNNdWx0aVZhbHVlICYmIGNvbE11bHRpVmFsdWUgPT09IFwiRmFsc2VcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbENhbkJlTXVsdGlWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkaXRpb25hbFZhbHVlTGF5ZXIgPSBjZWxsLmZpbmRPbmUoKGNoaWxkKSA9PiBjaGlsZC5uYW1lID09PSBcIlNlY29uZGFyeSB2YWx1ZVwiICYmIGNoaWxkLnR5cGUgPT09IFwiVEVYVFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFZhbHVlTGF5ZXIuY2hhcmFjdGVycyA9IFwiIFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxsLmNoaWxkcmVuWzBdLmxheW91dEdyb3cgPSBjZWxsRmlsbENvbnRhaW5lclkgPyAxIDogMDtcbiAgICAgICAgICAgICAgICBjZWxsLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IGNlbGxGaWxsQ29udGFpbmVyWSA/IFwiRklYRURcIiA6IFwiQVVUT1wiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YWJsZUZyYW1lLmFwcGVuZENoaWxkKHRoaXNUYWJsZVJvdyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgdGFibGVEYXRhID0gT2JqZWN0LmFzc2lnbih7IGZpbGVOYW1lOiBmaWdtYS5jdXJyZW50UGFnZS5wYXJlbnQubmFtZSwgZmlsZUtleTogZmlnbWEuZmlsZUtleSwgXCJDb2x1bW4gY291bnRcIjogbXNnLmNvbHVtbkNvbmZpZ3VyYXRpb24ubGVuZ3RoLCBcIlJvdyBjb3VudFwiOiBtc2cucm93cywgXCJDb2x1bW4gQ29uZmlndXJhdGlvblwiOiBtc2cuY29sdW1uQ29uZmlndXJhdGlvbiB9LCBjdXN0b21FdmVudERhdGEpO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJ0YWJsZS1jcmVhdGVkXCIsIG1lc3NhZ2U6IHRhYmxlRGF0YSB9KTtcbiAgICBmaWdtYS5ub3RpZnkoXCJUYWJsZSBjcmVhdGVkIOKchVwiKTtcbn0pO1xuY29uc3QgcHVzaFRleHRMYXllclRvQXJyYXkgPSAobGF5ZXIsIGFycmF5KSA9PiB7XG4gICAgYXJyYXkucHVzaCh7XG4gICAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgICAgbmFtZTogbGF5ZXIubmFtZSxcbiAgICAgICAgdmlzaWJsZTogbGF5ZXIudmlzaWJsZSxcbiAgICAgICAgeDogbGF5ZXIueCxcbiAgICAgICAgeTogbGF5ZXIueSxcbiAgICAgICAgdHlwZTogbGF5ZXIudHlwZSxcbiAgICAgICAgY2hhcmFjdGVyczogbGF5ZXIgPT09IG51bGwgfHwgbGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheWVyLmNoYXJhY3RlcnMsXG4gICAgICAgIGNoaWxkcmVuOiBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuY2hpbGRyZW4sXG4gICAgfSk7XG59O1xuY29uc3Qgc2VuZEN1cnJlbnRUZXh0U2VsZWN0aW9uID0gKCkgPT4ge1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgbGV0IHRleHRMYXllcnMgPSBbXTtcbiAgICBzZWxlY3Rpb24uZm9yRWFjaCgoc2VsZWN0ZWRMYXllcikgPT4ge1xuICAgICAgICBpZiAoISEoc2VsZWN0ZWRMYXllciA9PT0gbnVsbCB8fCBzZWxlY3RlZExheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZExheWVyLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0TGF5ZXJzID0gc2VsZWN0ZWRMYXllci5maW5kQWxsKChuKSA9PiBuLnR5cGUgPT09IFwiVEVYVFwiKTtcbiAgICAgICAgICAgIHNlbGVjdGVkVGV4dExheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgICAgICAgICAgIGlzVmlzaWJsZU5vZGUobGF5ZXIpICYmIHB1c2hUZXh0TGF5ZXJUb0FycmF5KGxheWVyLCB0ZXh0TGF5ZXJzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdGVkTGF5ZXIudHlwZSA9PT0gXCJURVhUXCIpIHtcbiAgICAgICAgICAgIGlzVmlzaWJsZU5vZGUoc2VsZWN0ZWRMYXllcikgJiZcbiAgICAgICAgICAgICAgICBwdXNoVGV4dExheWVyVG9BcnJheShzZWxlY3RlZExheWVyLCB0ZXh0TGF5ZXJzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6IFwibmV3LXRleHQtc2VsZWN0aW9uXCIsXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHRleHRMYXllcnMsXG4gICAgICAgICAgICBzZWxlY3RlZExheWVyczogc2VsZWN0aW9uLFxuICAgICAgICB9LFxuICAgIH0pO1xufTtcbmNvbnN0IHB1c2hDb2xvclRvQXJyYXkgPSAobGF5ZXIsIGNvbG9yVHlwZSwgYXJyYXksIGxheWVySGFzU2VnbWVudFN0eWxlcyA9IGZhbHNlKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgY29uc3Qgc3R5bGVJZFR5cGUgPSBjb2xvclR5cGUgPT09IFwiZmlsbHNcIiA/IFwiZmlsbFN0eWxlSWRcIiA6IFwic3Ryb2tlU3R5bGVJZFwiO1xuICAgIGNvbnN0IGlzU29saWRDb2xvciA9ICgoX2EgPSBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuZmlsbHNbMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50eXBlKSA9PT0gXCJTT0xJRFwiO1xuICAgIGNvbnN0IGNvbG9ySXNJbWFnZSA9IGNvbG9yVHlwZSA9PT0gXCJmaWxsc1wiICYmICgoX2IgPSBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuZmlsbHNbMF0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50eXBlKSA9PT0gXCJJTUFHRVwiO1xuICAgIGNvbnN0IGNvbG9ySXNHcmFkaWVudCA9IGNvbG9yVHlwZSA9PT0gXCJmaWxsc1wiICYmICgoX2MgPSBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuZmlsbHNbMF0pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50eXBlLmluY2x1ZGVzKFwiR1JBRElFTlRcIikpO1xuICAgIGNvbnN0IGNvbG9ySXNWaXNpYmxlID0gbGF5ZXJIYXNTZWdtZW50U3R5bGVzXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IGxheWVyW2NvbG9yVHlwZV1bMF0udmlzaWJsZTtcbiAgICBjb25zdCBjb2xvckluSGV4ID0gKGNvbG9ySW5SR0IpID0+IHtcbiAgICAgICAgcmV0dXJuIHJnYlRvSGV4KGNvbG9ySW5SR0IuciwgY29sb3JJblJHQi5nLCBjb2xvckluUkdCLmIpO1xuICAgIH07XG4gICAgY29uc3Qgc2VnbWVudENvbG9ySW5IZXggPSBsYXllckhhc1NlZ21lbnRTdHlsZXNcbiAgICAgICAgPyBjb2xvckluSGV4KGxheWVyLnNlZ21lbnQuZmlsbHNbMF0uY29sb3IpXG4gICAgICAgIDogZmFsc2U7XG4gICAgY29uc3QgaGFzQ29sb3JTdHlsZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGxheWVySGFzU2VnbWVudFN0eWxlcykge1xuICAgICAgICAgICAgcmV0dXJuIGxheWVyLnNlZ21lbnQuZmlsbFN0eWxlSWQubGVuZ3RoID4gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc1NvbGlkQ29sb3IgPyBsYXllcltzdHlsZUlkVHlwZV0ubGVuZ3RoID4gMCA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoIWNvbG9ySXNJbWFnZSAmJlxuICAgICAgICAhY29sb3JJc0dyYWRpZW50ICYmXG4gICAgICAgIGNvbG9ySXNWaXNpYmxlICYmXG4gICAgICAgICFsYXllci5pc0NoaWxkT2ZJY29uV2l0aEZpbGwpIHtcbiAgICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgICAgICBjb2xvcklkOiB1dWlkKCksXG4gICAgICAgICAgICBsYXllcklkOiBsYXllci5sYXllcklkLFxuICAgICAgICAgICAgbGF5ZXJOYW1lOiBsYXllci5uYW1lLFxuICAgICAgICAgICAgbGF5ZXJUeXBlOiBsYXllci50eXBlLFxuICAgICAgICAgICAgY29sb3I6IGxheWVySGFzU2VnbWVudFN0eWxlcyA/IGxheWVyLnNlZ21lbnQuZmlsbHNbMF0gOiBsYXllcltjb2xvclR5cGVdLFxuICAgICAgICAgICAgY29sb3JTdHlsZUlkOiBsYXllckhhc1NlZ21lbnRTdHlsZXNcbiAgICAgICAgICAgICAgICA/IGxheWVyLnNlZ21lbnQuZmlsbFN0eWxlSWRcbiAgICAgICAgICAgICAgICA6IGxheWVyW3N0eWxlSWRUeXBlXSxcbiAgICAgICAgICAgIGhhc0NvbG9yU3R5bGU6IGhhc0NvbG9yU3R5bGUoKSxcbiAgICAgICAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICAgICAgICBjb2xvclR5cGU6IGNvbG9yVHlwZS5zbGljZSgwLCAtMSksXG4gICAgICAgICAgICBjb2xvckluSGV4OiBsYXllckhhc1NlZ21lbnRTdHlsZXNcbiAgICAgICAgICAgICAgICA/IHNlZ21lbnRDb2xvckluSGV4XG4gICAgICAgICAgICAgICAgOiBjb2xvckluSGV4KGxheWVyW2NvbG9yVHlwZV1bMF0uY29sb3IpLFxuICAgICAgICAgICAgbGF5ZXJIYXNTZWdtZW50U3R5bGVzOiBsYXllckhhc1NlZ21lbnRTdHlsZXMsXG4gICAgICAgICAgICBzZWdtZW50OiBsYXllckhhc1NlZ21lbnRTdHlsZXMgJiYgbGF5ZXIuc2VnbWVudCxcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmxldCBjb2xvclRva2VucyA9IFtdO1xuY29uc3QgZ2V0Q29sb3JUb2tlbnMgPSAobWFwVGhlbWVzVG9FYWNoT3RoZXIpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBsaWdodFRoZW1lVG9rZW5zID0geWllbGQgUHJvbWlzZS5hbGwocmF3TGlnaHRDb2xvclRva2Vucy5tZXRhLnN0eWxlcy5tYXAoKHN0eWxlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUpLCB7IHRoZW1lOiBcImxpZ2h0XCIgfSk7XG4gICAgfSkpKTtcbiAgICBsZXQgZGFya1RoZW1lVG9rZW5zID0geWllbGQgUHJvbWlzZS5hbGwocmF3RGFya0NvbG9yVG9rZW5zLm1ldGEuc3R5bGVzLm1hcCgoc3R5bGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZSksIHsgdGhlbWU6IFwiZGFya1wiIH0pO1xuICAgIH0pKSk7XG4gICAgaWYgKG1hcFRoZW1lc1RvRWFjaE90aGVyKSB7XG4gICAgICAgIGxpZ2h0VGhlbWVUb2tlbnMgPSBsaWdodFRoZW1lVG9rZW5zLm1hcCgodG9rZW4pID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IGRhcmtUaGVtZVRva2VuID0gZGFya1RoZW1lVG9rZW5zLmZpbHRlcigoZGFya1Rva2VuKSA9PiB0b2tlbi5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGRhcmtUb2tlbi5uYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdG9rZW4pLCB7IGRhcmtUaGVtZVRva2VuOiAoKF9hID0gZGFya1RoZW1lVG9rZW5bMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5rZXkpID8gZGFya1RoZW1lVG9rZW5bMF0ua2V5IDogbnVsbCB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRhcmtUaGVtZVRva2VucyA9IGRhcmtUaGVtZVRva2Vucy5tYXAoKHRva2VuKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBjb25zdCBsaWdodFRoZW1lVG9rZW4gPSBsaWdodFRoZW1lVG9rZW5zLmZpbHRlcigobGlnaHRUb2tlbikgPT4gdG9rZW4ubmFtZS50b0xvd2VyQ2FzZSgpID09PSBsaWdodFRva2VuLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlbiksIHsgbGlnaHRUaGVtZVRva2VuOiAoKF9hID0gbGlnaHRUaGVtZVRva2VuWzBdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eua2V5KVxuICAgICAgICAgICAgICAgICAgICA/IGxpZ2h0VGhlbWVUb2tlblswXS5rZXlcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgYWxsQ29sb3JUb2tlbnMgPSBsaWdodFRoZW1lVG9rZW5zLmNvbmNhdChkYXJrVGhlbWVUb2tlbnMpO1xuICAgIGNvbnN0IHRlbXBSZWN0YW5nbGUgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICBjb2xvclRva2VucyA9IHlpZWxkIFByb21pc2UuYWxsKGFsbENvbG9yVG9rZW5zLm1hcCgoc3R5bGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0ZW1wUmVjdGFuZ2xlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvbG9yU3R5bGVXaXRoSGV4ID0ge307XG4gICAgICAgIGNvbnN0IGltcG9ydGVkU3R5bGUgPSB5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoc3R5bGUua2V5KTtcbiAgICAgICAgdGVtcFJlY3RhbmdsZS5maWxsU3R5bGVJZCA9IGltcG9ydGVkU3R5bGUuaWQ7XG4gICAgICAgIGlmICh0ZW1wUmVjdGFuZ2xlLmZpbGxzWzBdLmNvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbG9yU3R5bGVXaXRoSGV4ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZSksIHsgaGV4OiByZ2JUb0hleCh0ZW1wUmVjdGFuZ2xlLmZpbGxzWzBdLmNvbG9yLnIsIHRlbXBSZWN0YW5nbGUuZmlsbHNbMF0uY29sb3IuZywgdGVtcFJlY3RhbmdsZS5maWxsc1swXS5jb2xvci5iKSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9yU3R5bGVXaXRoSGV4ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZSksIHsgaGV4OiBcIk5vbmVcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sb3JTdHlsZVdpdGhIZXg7XG4gICAgfSkpKTtcbiAgICB0ZW1wUmVjdGFuZ2xlLnJlbW92ZSgpO1xufSk7XG5jb25zdCBnZXRDb2xvclN0YXRzID0gKGZvclRoZW1lU3dpdGNoZXIgPSBmYWxzZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgZmlnbWEuc2tpcEludmlzaWJsZUluc3RhbmNlQ2hpbGRyZW4gPSB0cnVlO1xuICAgIHlpZWxkIGdldENvbG9yVG9rZW5zKHRydWUpO1xuICAgIGNvbnN0IGdldFJhd0xheWVyc1dpdGhDb2xvciA9ICgpID0+IHtcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgY29uc3QgcmVsZXZhbnRMYXllcnMgPSBzZWxlY3Rpb24ubWFwKChzZWxlY3RlZExheWVyKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBsZXQgb3V0cHV0Rm9yTGF5ZXJzV2l0aENoaWxkcmVuID0gW107XG4gICAgICAgICAgICBjb25zdCBpc1JlbGV2YW50TGF5ZXIgPSAobikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhY2NlcHRhYmxlTm9kZXR5cGVzID0gW1xuICAgICAgICAgICAgICAgICAgICBcIkVMTElQU0VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJGUkFNRVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkdST1VQXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ09NUE9ORU5UXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiSU5TVEFOQ0VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJMSU5FXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiUE9MWUdPTlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlJFQ1RBTkdMRVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlNIQVBFX1dJVEhfVEVYVFwiLFxuICAgICAgICAgICAgICAgICAgICBcIlNUQVJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJURVhUXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQk9PTEVBTl9PUEVSQVRJT05cIixcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0ZpbGwgPSBcImZpbGxzXCIgaW4gbiAmJiAobiA9PT0gbnVsbCB8fCBuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuLmZpbGxzWzBdKSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc1N0cm9rZSA9IFwic3Ryb2tlc1wiIGluIG4gJiYgKG4gPT09IG51bGwgfHwgbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbi5zdHJva2VzWzBdKSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzQ2hpbGRPZkJvb2xlYW5PcGVyYXRpb24gPSBuLnBhcmVudC50eXBlID09PSBcIkJPT0xFQU5fT1BFUkFUSU9OXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dExheWVySGFzU2VnbWVudFN0eWxlcyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4udHlwZSAhPT0gXCJURVhUXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuLmdldFN0eWxlZFRleHRTZWdtZW50cyhbXCJmaWxsc1wiXSkubGVuZ3RoID4gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9yVGhlbWVTd2l0Y2hlciAmJiBhY2NlcHRhYmxlTm9kZXR5cGVzLnB1c2goXCJWRUNUT1JcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzRmlsbE9yU3Ryb2tlID0gaGFzRmlsbCB8fCBoYXNTdHJva2U7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZUlzVmFsaWROb2RlVHlwZSA9IGFjY2VwdGFibGVOb2RldHlwZXMuc29tZSgobm9kZVR5cGUpID0+IG4udHlwZSA9PT0gbm9kZVR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAobm9kZUlzVmFsaWROb2RlVHlwZSAmJlxuICAgICAgICAgICAgICAgICAgICAoaGFzRmlsbE9yU3Ryb2tlIHx8IHRleHRMYXllckhhc1NlZ21lbnRTdHlsZXMoKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgIWlzQ2hpbGRPZkJvb2xlYW5PcGVyYXRpb24pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTGF5ZXJIYXNDaGlsZHJlbiA9IFwiZmluZEFsbFwiIGluIHNlbGVjdGVkTGF5ZXIgJiYgKChfYSA9IHNlbGVjdGVkTGF5ZXIgPT09IG51bGwgfHwgc2VsZWN0ZWRMYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRMYXllci5jaGlsZHJlbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkgPiAwO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkTGF5ZXJIYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlzUmVsZXZhbnRMYXllcihzZWxlY3RlZExheWVyKTtcbiAgICAgICAgICAgICAgICBvdXRwdXRGb3JMYXllcnNXaXRoQ2hpbGRyZW4gPSBzZWxlY3RlZExheWVyLmZpbmRBbGwoKG4pID0+IGlzUmVsZXZhbnRMYXllcihuKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1JlbGV2YW50TGF5ZXIoc2VsZWN0ZWRMYXllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5vdXRwdXRGb3JMYXllcnNXaXRoQ2hpbGRyZW5dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtzZWxlY3RlZExheWVyLCAuLi5vdXRwdXRGb3JMYXllcnNXaXRoQ2hpbGRyZW5dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzUmVsZXZhbnRMYXllcihzZWxlY3RlZExheWVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbc2VsZWN0ZWRMYXllcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgb3V0cHV0ID0gcmVsZXZhbnRMYXllcnMuZmxhdCgpO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQuZmlsdGVyKChsYXllcikgPT4gaXNWaXNpYmxlTm9kZShsYXllcikpO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG4gICAgY29uc3QgcmF3TGF5ZXJzV2l0aENvbG9yID0gZ2V0UmF3TGF5ZXJzV2l0aENvbG9yKCk7XG4gICAgY29uc3QgbGF5ZXJzV2l0aENvbG9yID0gcmF3TGF5ZXJzV2l0aENvbG9yLm1hcCgobGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgaGFzRmlsbCA9IFwiZmlsbHNcIiBpbiBsYXllciAmJiBsYXllci5maWxsc1swXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBoYXNTdHJva2UgPSBcInN0cm9rZXNcIiBpbiBsYXllciAmJiBsYXllci5zdHJva2VzWzBdICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHRleHRMYXllckhhc1NlZ21lbnRTdHlsZXMgPSBsYXllci50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgbGF5ZXIuZ2V0U3R5bGVkVGV4dFNlZ21lbnRzKFtcImZpbGxzXCJdKS5sZW5ndGggPiAxO1xuICAgICAgICBjb25zdCBoYXNGaWxsQW5kU3Ryb2tlID0gaGFzRmlsbCAmJiBoYXNTdHJva2U7XG4gICAgICAgIGNvbnN0IGlzQ2hpbGRPZkljb24gPSBsYXllci5wYXJlbnQudHlwZSA9PT0gXCJCT09MRUFOX09QRVJBVElPTlwiO1xuICAgICAgICBsZXQgcGFyZW50SWNvbkhhc0ZpbGwgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgaXNDaGlsZE9mSWNvbldpdGhGaWxsID0gaXNDaGlsZE9mSWNvbiAmJiBwYXJlbnRJY29uSGFzRmlsbDtcbiAgICAgICAgY29uc3QgY2hlY2tQYXJlbnRGb3JGaWxsID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKFwiZmlsbHNcIiBpbiBsYXllci5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRJY29uSGFzRmlsbCA9IGxheWVyLnBhcmVudC5maWxscy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjaGVja1BhcmVudEZvckZpbGwoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxheWVySWQ6IGxheWVyLmlkLFxuICAgICAgICAgICAgbmFtZTogbGF5ZXIubmFtZSxcbiAgICAgICAgICAgIGZpbGxzOiBcImZpbGxzXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuZmlsbHMsXG4gICAgICAgICAgICBzdHJva2VzOiBcInN0cm9rZXNcIiBpbiBsYXllciAmJiBsYXllci5zdHJva2VzLFxuICAgICAgICAgICAgZmlsbFN0eWxlSWQ6IFwiZmlsbFN0eWxlSWRcIiBpbiBsYXllciAmJiBsYXllci5maWxsU3R5bGVJZCxcbiAgICAgICAgICAgIHN0cm9rZVN0eWxlSWQ6IFwic3Ryb2tlU3R5bGVJZFwiIGluIGxheWVyICYmIGxheWVyLnN0cm9rZVN0eWxlSWQsXG4gICAgICAgICAgICB2aXNpYmxlOiBsYXllci52aXNpYmxlLFxuICAgICAgICAgICAgdHlwZTogbGF5ZXIudHlwZSxcbiAgICAgICAgICAgIGhhc0ZpbGw6IGhhc0ZpbGwsXG4gICAgICAgICAgICBoYXNTdHJva2U6IGhhc1N0cm9rZSxcbiAgICAgICAgICAgIGhhc0ZpbGxBbmRTdHJva2U6IGhhc0ZpbGxBbmRTdHJva2UsXG4gICAgICAgICAgICBpc0NoaWxkT2ZJY29uV2l0aEZpbGw6IGlzQ2hpbGRPZkljb25XaXRoRmlsbCxcbiAgICAgICAgICAgIGhhc1NlZ21lbnRTdHlsZXM6IHRleHRMYXllckhhc1NlZ21lbnRTdHlsZXMsXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgY29uc3QgYWxsSW5zdGFuY2VzT2ZDb2xvciA9IGxheWVyc1dpdGhDb2xvclxuICAgICAgICAubWFwKChsYXllcikgPT4ge1xuICAgICAgICBsZXQgdGVtcENvbG9ycyA9IFtdO1xuICAgICAgICBpZiAobGF5ZXIuaGFzRmlsbEFuZFN0cm9rZSkge1xuICAgICAgICAgICAgcHVzaENvbG9yVG9BcnJheShsYXllciwgXCJmaWxsc1wiLCB0ZW1wQ29sb3JzKTtcbiAgICAgICAgICAgIHB1c2hDb2xvclRvQXJyYXkobGF5ZXIsIFwic3Ryb2tlc1wiLCB0ZW1wQ29sb3JzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsYXllci5oYXNGaWxsKSB7XG4gICAgICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyLCBcImZpbGxzXCIsIHRlbXBDb2xvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxheWVyLmhhc1N0cm9rZSkge1xuICAgICAgICAgICAgcHVzaENvbG9yVG9BcnJheShsYXllciwgXCJzdHJva2VzXCIsIHRlbXBDb2xvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxheWVyLmhhc1NlZ21lbnRTdHlsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChsYXllci5sYXllcklkKTtcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnRlZEZpbGxzID0gbm9kZS5nZXRTdHlsZWRUZXh0U2VnbWVudHMoW1wiZmlsbHNcIl0pO1xuICAgICAgICAgICAgc2VnbWVudGVkRmlsbHMuZm9yRWFjaCgoc2VnbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxTdHlsZUlkID0gbm9kZS5nZXRSYW5nZUZpbGxTdHlsZUlkKHNlZ21lbnQuc3RhcnQsIHNlZ21lbnQuZW5kKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWdtZW50VG9CZVB1c2hlZCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc2VnbWVudCksIHsgZmlsbFN0eWxlSWQgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGF5ZXJUb0JlUHVzaGVkID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBsYXllciksIHsgc2VnbWVudDogc2VnbWVudFRvQmVQdXNoZWQgfSk7XG4gICAgICAgICAgICAgICAgcHVzaENvbG9yVG9BcnJheShsYXllclRvQmVQdXNoZWQsIFwiZmlsbHNcIiwgdGVtcENvbG9ycywgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcENvbG9ycztcbiAgICB9KVxuICAgICAgICAuZmxhdCgpO1xuICAgIGNvbnN0IGNvbG9yc1VzaW5nT25lQ29yZVN0eWxlID0gYWxsSW5zdGFuY2VzT2ZDb2xvclxuICAgICAgICAuZmlsdGVyKChjb2xvcikgPT4ge1xuICAgICAgICByZXR1cm4gY29sb3JUb2tlbnMuc29tZSgob25lQ29yZUNvbG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3IuY29sb3JTdHlsZUlkLmluY2x1ZGVzKG9uZUNvcmVDb2xvci5rZXkpO1xuICAgICAgICB9KTtcbiAgICB9KVxuICAgICAgICAubWFwKChjb2xvcikgPT4ge1xuICAgICAgICBsZXQgb25lQ29yZVRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICBjb2xvclRva2Vucy5mb3JFYWNoKChvbmVDb3JlQ29sb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChjb2xvci5jb2xvclN0eWxlSWQuaW5jbHVkZXMob25lQ29yZUNvbG9yLmtleSkpIHtcbiAgICAgICAgICAgICAgICBvbmVDb3JlVG9rZW4gPSBvbmVDb3JlQ29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb2xvciksIHsgdG9rZW46IG9uZUNvcmVUb2tlbiB9KTtcbiAgICB9KTtcbiAgICBjb25zdCBvbmVDb3JlQ29sb3JTdHlsZUNvdmVyYWdlID0gYCR7KChjb2xvcnNVc2luZ09uZUNvcmVTdHlsZS5sZW5ndGggLyBhbGxJbnN0YW5jZXNPZkNvbG9yLmxlbmd0aCkgKlxuICAgICAgICAxMDApLnRvRml4ZWQoMCl9JWA7XG4gICAgaWYgKGZvclRoZW1lU3dpdGNoZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbG9yc1VzaW5nT25lQ29yZVN0eWxlLFxuICAgICAgICAgICAgYWxsSW5zdGFuY2VzT2ZDb2xvcixcbiAgICAgICAgICAgIG9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGNvbG9yc1dpdGhDb2xvclN0eWxlID0gYWxsSW5zdGFuY2VzT2ZDb2xvci5maWx0ZXIoKGNvbG9yKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2xvci5oYXNDb2xvclN0eWxlO1xuICAgIH0pO1xuICAgIGNvbnN0IGNvbG9yc05vdFVzaW5nT25lQ29yZUNvbG9yU3R5bGUgPSBhbGxJbnN0YW5jZXNPZkNvbG9yLmZpbHRlcigoY29sb3IpID0+IHtcbiAgICAgICAgcmV0dXJuICFjb2xvclRva2Vucy5zb21lKChvbmVDb3JlQ29sb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5jb2xvclN0eWxlSWQuaW5jbHVkZXMob25lQ29yZUNvbG9yLmtleSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGlkc09mQWxsSW5zdGFuY2VzT2ZDb2xvciA9IGFsbEluc3RhbmNlc09mQ29sb3IubWFwKChjb2xvcikgPT4gY29sb3IuY29sb3JJZCk7XG4gICAgY29uc3QgY29sb3JTdGF0cyA9IHtcbiAgICAgICAgc2VsZWN0ZWRMYXllcnNXaXRoQ29sb3I6IHJhd0xheWVyc1dpdGhDb2xvcixcbiAgICAgICAgYWxsSW5zdGFuY2VzT2ZDb2xvcjogYWxsSW5zdGFuY2VzT2ZDb2xvcixcbiAgICAgICAgY29sb3JzV2l0aENvbG9yU3R5bGU6IGNvbG9yc1dpdGhDb2xvclN0eWxlLFxuICAgICAgICBjb2xvcnNVc2luZ09uZUNvcmVTdHlsZTogY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUsXG4gICAgICAgIGNvbG9yc05vdFVzaW5nT25lQ29yZUNvbG9yU3R5bGU6IGNvbG9yc05vdFVzaW5nT25lQ29yZUNvbG9yU3R5bGUsXG4gICAgICAgIG9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2U6IG9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2UsXG4gICAgICAgIGlkc09mQWxsSW5zdGFuY2VzT2ZDb2xvcjogaWRzT2ZBbGxJbnN0YW5jZXNPZkNvbG9yLFxuICAgIH07XG4gICAgcmV0dXJuIGNvbG9yU3RhdHM7XG59KTtcbmxldCB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID0gdW5kZWZpbmVkO1xuY29uc3Qgc3dpdGNoVG9UaGVtZSA9ICh0aGVtZSwgY2xvc2VBZnRlclJ1biA9IGZhbHNlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKGNsb3NlQWZ0ZXJSdW4pIHtcbiAgICAgICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA3MCwgaGVpZ2h0OiAwIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBgbG9hZGluZy0ke3RoZW1lfS10aGVtZS1zd2l0Y2hgIH0pO1xuICAgIH1cbiAgICBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uICYmICh0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID09PSBudWxsIHx8IHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24uY2FuY2VsKCkpO1xuICAgICAgICBmaWdtYS5ub3RpZnkoXCJTZWxlY3Qgc29tZSBsYXllcnMgYmVmb3JlIGNob29zaW5nIGEgdGhlbWVcIiwgeyBlcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuIGNsb3NlQWZ0ZXJSdW4gJiYgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgdGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiAmJiAodGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiA9PT0gbnVsbCB8fCB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uLmNhbmNlbCgpKTtcbiAgICBjb25zdCBsb2FkaW5nTm90aWZpY2F0aW9uID0gZmlnbWEubm90aWZ5KGBDb252ZXJ0aW5nIHNlbGVjdGlvbiB0byAke3RoZW1lfSBtb2RlLi4uYCk7XG4gICAgY29uc3QgY29sb3JTdGF0cyA9IHlpZWxkIGdldENvbG9yU3RhdHModHJ1ZSk7XG4gICAgbGV0IGltcG9ydGVkU3R5bGVzID0gW107XG4gICAgbGV0IGtleXNUb0xvYWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBrZXlzID0gW107XG4gICAgICAgIGNvbG9yU3RhdHMuY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUuZm9yRWFjaCgoY29sb3IpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChcInRoZW1lXCIgaW4gY29sb3IudG9rZW4gJiYgKChfYSA9IGNvbG9yLnRva2VuKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGhlbWUpICE9PSB0aGVtZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleU9mVG9rZW5Jbk9wcG9zaXRlVGhlbWUgPSB0aGVtZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gY29sb3IudG9rZW4ubGlnaHRUaGVtZVRva2VuXG4gICAgICAgICAgICAgICAgICAgIDogY29sb3IudG9rZW4uZGFya1RoZW1lVG9rZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5SXNOb3REdXBsaWNhdGUgPSAha2V5cy5zb21lKChrZXkpID0+IGtleSA9PT0ga2V5T2ZUb2tlbkluT3Bwb3NpdGVUaGVtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGtleU9mVG9rZW5Jbk9wcG9zaXRlVGhlbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgTWlzc2luZyB0b2tlbjogTm8gJHt0aGVtZX0gdGhlbWUgdG9rZW4gZm91bmQgZm9yIFwiJHtjb2xvci50b2tlbi5uYW1lfVwiLmApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGtleUlzTm90RHVwbGljYXRlICYmIGtleXMucHVzaChrZXlPZlRva2VuSW5PcHBvc2l0ZVRoZW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH07XG4gICAgaW1wb3J0ZWRTdHlsZXMgPSB5aWVsZCBQcm9taXNlLmFsbChrZXlzVG9Mb2FkKCkubWFwKChrZXkpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyByZXR1cm4gZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGtleSk7IH0pKSk7XG4gICAgZm9yIChjb25zdCBjb2xvciBvZiBjb2xvclN0YXRzLmNvbG9yc1VzaW5nT25lQ29yZVN0eWxlKSB7XG4gICAgICAgIGlmIChcInRoZW1lXCIgaW4gY29sb3IudG9rZW4gJiYgKChfYSA9IGNvbG9yLnRva2VuKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGhlbWUpICE9PSB0aGVtZSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGNvbG9yLmxheWVySWQpO1xuICAgICAgICAgICAgY29uc3Qga2V5T2ZUb2tlbkluT3Bwb3NpdGVUaGVtZSA9IHRoZW1lID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICA/IGNvbG9yLnRva2VuLmxpZ2h0VGhlbWVUb2tlblxuICAgICAgICAgICAgICAgIDogY29sb3IudG9rZW4uZGFya1RoZW1lVG9rZW47XG4gICAgICAgICAgICBjb25zdCBpbXBvcnRlZFN0eWxlID0gaW1wb3J0ZWRTdHlsZXMuZmlsdGVyKChzdHlsZSkgPT4gc3R5bGUua2V5ID09PSBrZXlPZlRva2VuSW5PcHBvc2l0ZVRoZW1lKVswXTtcbiAgICAgICAgICAgIGlmIChrZXlPZlRva2VuSW5PcHBvc2l0ZVRoZW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgTWlzc2luZyB0b2tlbjogTm8gJHt0aGVtZX0gdGhlbWUgdG9rZW4gZm91bmQgZm9yIFwiJHtjb2xvci50b2tlbi5uYW1lfVwiLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2xvci5sYXllckhhc1NlZ21lbnRTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBub2RlLnNldFJhbmdlRmlsbFN0eWxlSWQoY29sb3Iuc2VnbWVudC5zdGFydCwgY29sb3Iuc2VnbWVudC5lbmQsIGltcG9ydGVkU3R5bGUuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZVtgJHtjb2xvci5jb2xvclR5cGV9U3R5bGVJZGBdID0gaW1wb3J0ZWRTdHlsZS5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2FkaW5nTm90aWZpY2F0aW9uLmNhbmNlbCgpO1xuICAgIGNvbnN0IGNvdmVyYWdlQXNJbnRlZ2VyID0gY29sb3JTdGF0cy5vbmVDb3JlQ29sb3JTdHlsZUNvdmVyYWdlLnN1YnN0cmluZygwLCBjb2xvclN0YXRzLm9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2UubGVuZ3RoIC0gMSk7XG4gICAgY29uc3QgaXNFcnJvcldvcnRoeSA9IHBhcnNlSW50KGNvdmVyYWdlQXNJbnRlZ2VyKSA8IDUwO1xuICAgIGlmIChjb2xvclN0YXRzLm9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2UgPT09IFwiMTAwJVwiKSB7XG4gICAgICAgIHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24gPSBmaWdtYS5ub3RpZnkoYCR7dGhlbWUgPT09IFwibGlnaHRcIiA/IFwi8J+UhlwiIDogXCLwn4yZXCJ9IFNlbGVjdGlvbiBzZXQgdG8gJHt0aGVtZX0gbW9kZWApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiA9IGZpZ21hLm5vdGlmeShg4pyLIFdhcm5pbmc6IE9ubHkgJHtjb2xvclN0YXRzLm9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2V9IGNvbnZlcnRlZCB0byBcbiAgICAgICR7dGhlbWV9IG1vZGUgYmVjYXVzZSBzb21lIGNvbG9ycyBhcmVuJ3QgdXNpbmcgT25lIENvcmUgY29sb3Igc3R5bGVzLmAsIHsgdGltZW91dDogaXNFcnJvcldvcnRoeSA/IDk5OTk5OTk5OSA6IDE1MDAwLCBlcnJvcjogaXNFcnJvcldvcnRoeSB9KTtcbiAgICB9XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInRoZW1lLXN3aXRjaGVkXCIsXG4gICAgICAgIG1lc3NhZ2U6IE9iamVjdC5hc3NpZ24oeyBzd2l0Y2hlZFRvOiB0aGVtZSwgY2xvc2VBZnRlclJ1biwgY29sb3JzVXNpbmdPbmVDb3JlU3R5bGU6IGNvbG9yU3RhdHMuY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUubGVuZ3RoLCBjb2xvcnNTZWxlY3RlZDogY29sb3JTdGF0cy5hbGxJbnN0YW5jZXNPZkNvbG9yLmxlbmd0aCwgY29sb3JzU3dpdGNoZWQ6IGNvbG9yU3RhdHMub25lQ29yZUNvbG9yU3R5bGVDb3ZlcmFnZSB9LCBjdXN0b21FdmVudERhdGEpLFxuICAgIH0pO1xufSk7XG5jb25zdCBmaWxlTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChmaWdtYS5jdXJyZW50UGFnZS5wYXJlbnQubmFtZSk7XG5jb25zdCBjdXJyZW50U2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuY29uc3QgY3VycmVudE5vZGVJZCA9IGVuY29kZVVSSUNvbXBvbmVudChjdXJyZW50U2VsZWN0aW9uLmxlbmd0aCA+IDAgPyBjdXJyZW50U2VsZWN0aW9uWzBdLmlkIDogZmlnbWEuY3VycmVudFBhZ2UuaWQpO1xuY29uc3QgZmlsZVVybCA9IGBodHRwczovL2ZpZ21hLmNvbS9maWxlLyR7ZmlnbWEuZmlsZUtleX0vJHtmaWxlTmFtZX0/bm9kZS1pZD0ke2N1cnJlbnROb2RlSWR9YDtcbmxldCBjdXN0b21FdmVudERhdGEgPSB7XG4gICAgZmlsZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLnBhcmVudC5uYW1lLFxuICAgIGZpbGVLZXk6IGZpZ21hLmZpbGVLZXksXG4gICAgXCJVc2VyIE5hbWVcIjogZmlnbWEuY3VycmVudFVzZXIubmFtZSxcbiAgICBcIlVzZXIgQXZhdGFyXCI6IGZpZ21hLmN1cnJlbnRVc2VyLnBob3RvVXJsLFxuICAgIFwiVXNlciBJRFwiOiBmaWdtYS5jdXJyZW50VXNlci5pZCxcbiAgICBcIlNlc3Npb24gSURcIjogZmlnbWEuY3VycmVudFVzZXIuc2Vzc2lvbklkLFxuICAgIGZpbGVVcmwsXG59O1xuY29uc3QgbmF2aWdhdGVUbyA9IChzY3JlZW4pID0+IHtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6IFwiZmlnbWEtY29tbWFuZFwiLFxuICAgICAgICBtZXNzYWdlOiBPYmplY3QuYXNzaWduKHsgb3BlbmVkVG86IHNjcmVlbiB9LCBjdXN0b21FdmVudERhdGEpLFxuICAgIH0pO1xufTtcbmNvbnN0IG5hdmlnYXRpb25BY3Rpb25zID0ge1xuICAgIFwib3Blbi1ob21lXCI6ICgpID0+IHtcbiAgICAgICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHRoZW1lQ29sb3JzOiB0cnVlLCB3aWR0aDogMzAwLCBoZWlnaHQ6IDQ0OCB9KTtcbiAgICAgICAgbmF2aWdhdGVUbyhcIm9wZW4taG9tZVwiKTtcbiAgICB9LFxuICAgIFwib3Blbi10YWJsZS1jcmVhdG9yXCI6ICgpID0+IHtcbiAgICAgICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHRoZW1lQ29sb3JzOiB0cnVlLCB3aWR0aDogMzAwLCBoZWlnaHQ6IDQ0OCB9KTtcbiAgICAgICAgbmF2aWdhdGVUbyhcIm9wZW4tdGFibGUtY3JlYXRvclwiKTtcbiAgICB9LFxuICAgIFwidGhlbWUtc3dpdGNoZXItdG8tbGlnaHRcIjogKCkgPT4ge1xuICAgICAgICBzd2l0Y2hUb1RoZW1lKFwibGlnaHRcIiwgdHJ1ZSk7XG4gICAgfSxcbiAgICBcInRoZW1lLXN3aXRjaGVyLXRvLWRhcmtcIjogKCkgPT4ge1xuICAgICAgICBzd2l0Y2hUb1RoZW1lKFwiZGFya1wiLCB0cnVlKTtcbiAgICB9LFxuICAgIFwib3Blbi1sYW5ndWFnZS1saW50ZXJcIjogKCkgPT4ge1xuICAgICAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgdGhlbWVDb2xvcnM6IHRydWUsIHdpZHRoOiA0NzUsIGhlaWdodDogNTAwIH0pO1xuICAgICAgICBuYXZpZ2F0ZVRvKFwib3Blbi1sYW5ndWFnZS1saW50ZXJcIik7XG4gICAgfSxcbiAgICBcIm9wZW4tY29sb3ItbGludGVyXCI6ICgpID0+IHtcbiAgICAgICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHRoZW1lQ29sb3JzOiB0cnVlLCB3aWR0aDogNDc1LCBoZWlnaHQ6IDUwMCB9KTtcbiAgICAgICAgbmF2aWdhdGVUbyhcIm9wZW4tY29sb3ItbGludGVyXCIpO1xuICAgIH0sXG59O1xubmF2aWdhdGlvbkFjdGlvbnNbZmlnbWEuY29tbWFuZF0oKTtcbmNvbnNvbGUubG9nKGZpZ21hLmNvbW1hbmQpO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKG1zZy50eXBlID09PSBcIm5hdmlnYXRlLXRvLXRhYlwiKSB7XG4gICAgICAgIHN3aXRjaCAobXNnLnRhYkNsaWNrZWQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgICAgICAgICAgdWlTaXplID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0OCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSh1aVNpemUud2lkdGgsIHVpU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG8oXCJvcGVuLWhvbWVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGFibGUtY3JlYXRvclwiOlxuICAgICAgICAgICAgICAgIHVpU2l6ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NDgsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5yZXNpemUodWlTaXplLndpZHRoLCB1aVNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvKFwib3Blbi10YWJsZS1jcmVhdG9yXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxhbmd1YWdlLWxpbnRlclwiOlxuICAgICAgICAgICAgICAgIHNlbmRDdXJyZW50VGV4dFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIHVpU2l6ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ3NSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5yZXNpemUodWlTaXplLndpZHRoLCB1aVNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvKFwib3Blbi1sYW5ndWFnZS1saW50ZXJcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY29sb3ItbGludGVyXCI6XG4gICAgICAgICAgICAgICAgdWlTaXplID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDc1LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSh1aVNpemUud2lkdGgsIHVpU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG8oXCJvcGVuLWNvbG9yLWxpbnRlclwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT0gXCJkaXNwbGF5LWVycm9yXCIpIHtcbiAgICAgICAgZmlnbWEubm90aWZ5KG1zZy5jb250ZW50LCB7IGVycm9yOiB0cnVlIH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiaW5pdGlhbGl6ZS1zZWxlY3Rpb25cIikge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcImluaXRpYWwtc2VsZWN0aW9uXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiY2xvc2UtcGx1Z2luXCIpIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcImNyZWF0ZS10YWJsZVwiKSB7XG4gICAgICAgIGNyZWF0ZVRhYmxlKG1zZyk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJydW4tbGFuZ3VhZ2UtbGludGVyXCIpIHtcbiAgICAgICAgc2VuZEN1cnJlbnRUZXh0U2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJyZXF1ZXN0LWxvY2FsLWN1c3RvbS1kaWN0aW9uYXJ5XCIpIHtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZVxuICAgICAgICAgICAgLmdldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJsb2NhbC1jdXN0b20tZGljdGlvbmFyeS1yZXRyaWV2ZWRcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXN1bHQgPyByZXN1bHQgOiBbXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcImFkZC10by1kaWN0aW9uYXJ5XCIpIHtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZVxuICAgICAgICAgICAgLmdldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Q3VzdG9tRGljdGlvbmFyeSA9IHJlc3VsdCA/IHJlc3VsdCA6IFtdO1xuICAgICAgICAgICAgbmV3Q3VzdG9tRGljdGlvbmFyeS5wdXNoKG1zZy53b3JkVG9BZGQpO1xuICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhcImxhbmd1YWdlTGludGVyQ3VzdG9tRGljdGlvbmFyeVwiLCBuZXdDdXN0b21EaWN0aW9uYXJ5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJnZXQtc2FtcGxlLXRleHRcIikge1xuICAgICAgICBjb25zdCBzYW1wbGVUZXh0ID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic2FtcGxlLXRleHRcIiwgbWVzc2FnZTogc2FtcGxlVGV4dCB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcInNhbXBsZS10ZXh0LWNoYW5nZWRcIikge1xuICAgICAgICBzZWxlY3RBbmRab29tVG9MYXllcihtc2cuYWN0aXZlTm9kZUlkKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcInVwZGF0ZS1zb3VyY2UtdGV4dFwiKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRleHRMYXllciA9IGZpZ21hLmdldE5vZGVCeUlkKG1zZy5sYXllcklkKTtcbiAgICAgICAgbGV0IGZvbnROYW1lID0gYWN0aXZlVGV4dExheWVyLmZvbnROYW1lO1xuICAgICAgICBpZiAoZm9udE5hbWUgPT09IGZpZ21hLm1peGVkKSB7XG4gICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChhY3RpdmVUZXh0TGF5ZXJcbiAgICAgICAgICAgICAgICAuZ2V0UmFuZ2VBbGxGb250TmFtZXMoMCwgYWN0aXZlVGV4dExheWVyLmNoYXJhY3RlcnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIC5tYXAoZmlnbWEubG9hZEZvbnRBc3luYykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhmb250TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZlVGV4dExheWVyLmRlbGV0ZUNoYXJhY3RlcnMoMCwgYWN0aXZlVGV4dExheWVyLmNoYXJhY3RlcnMubGVuZ3RoKTtcbiAgICAgICAgYWN0aXZlVGV4dExheWVyLmluc2VydENoYXJhY3RlcnMoMCwgbXNnLnVwZGF0ZWRUZXh0KTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJzb3VyY2UtdGV4dC11cGRhdGVkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBtc2cudXBkYXRlZFRleHQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwidGV4dC1saW50ZWRcIikge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcInRleHQtbGludGVkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgY3VzdG9tRXZlbnREYXRhLFxuICAgICAgICAgICAgICAgIG1pbmltYWxSZXBvcnQ6IG1zZy5taW5pbWFsUmVwb3J0LFxuICAgICAgICAgICAgICAgIGZ1bGxSZXBvcnQ6IG1zZy5mdWxsUmVwb3J0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHNlbmRDb2xvckRhdGEgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZ2V0Q29sb3JUb2tlbnMoZmFsc2UpO1xuICAgICAgICBjb25zdCBjb2xvclN0YXRzID0geWllbGQgZ2V0Q29sb3JTdGF0cygpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcImNvbG9yLXN0YXRzXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbUV2ZW50RGF0YSksIHsgY29sb3JTdGF0czogY29sb3JTdGF0cywgY29sb3JUb2tlbnM6IGNvbG9yVG9rZW5zLCBzZWxlY3Rpb25NYWRlOiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID4gMCB9KSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKG1zZy50eXBlID09PSBcInJ1bi1jb2xvci1saW50ZXJcIikge1xuICAgICAgICBzZW5kQ29sb3JEYXRhKCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJzZWxlY3QtbGF5ZXJcIikge1xuICAgICAgICBzZWxlY3RBbmRab29tVG9MYXllcihtc2cubGF5ZXJJZCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJhcHBseS1jb2xvci1zdHlsZVwiKSB7XG4gICAgICAgIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhtc2cuY29sb3JTdHlsZUtleSkudGhlbigoaW1wb3J0ZWQpID0+IHtcbiAgICAgICAgICAgIGZpZ21hLmdldE5vZGVCeUlkKG1zZy5sYXllcklkKVtgJHttc2cuY29sb3JUeXBlfVN0eWxlSWRgXSA9IGltcG9ydGVkLmlkO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiY29sb3ItcmVwbGFjZWRcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbUV2ZW50RGF0YSksIHsgbGF5ZXJJZDogbXNnLmxheWVySWQsIGxheWVyTmFtZTogZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmxheWVySWQpLm5hbWUsIG9yaWdpbmFsQ29sb3I6IG1zZy5vcmlnaW5hbENvbG9yLCBjb2xvclN0eWxlS2V5OiBtc2cuY29sb3JTdHlsZUtleSwgY29sb3JTdHlsZU5hbWU6IG1zZy5jb2xvclN0eWxlTmFtZSwgY29sb3JTdHlsZUNvbG9yOiBtc2cuY29sb3JTdHlsZUNvbG9yIH0pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwicmVzaXplXCIpIHtcbiAgICAgICAgZmlnbWEudWkucmVzaXplKG1zZy5zaXplLnggPj0gdWlTaXplLndpZHRoID8gbXNnLnNpemUueCA6IHVpU2l6ZS53aWR0aCwgbXNnLnNpemUueSA+PSB1aVNpemUuaGVpZ2h0ID8gbXNnLnNpemUueSA6IHVpU2l6ZS5oZWlnaHQpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwidGhlbWUtc3dpdGNoZXItdG8tZGFya1wiKSB7XG4gICAgICAgIHN3aXRjaFRvVGhlbWUoXCJkYXJrXCIpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwidGhlbWUtc3dpdGNoZXItdG8tbGlnaHRcIikge1xuICAgICAgICBzd2l0Y2hUb1RoZW1lKFwibGlnaHRcIik7XG4gICAgfVxufSk7XG5maWdtYS5vbihcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3Rpb25jaGFuZ2UgZXZlbnQgd2FzIGZpcmVkXCIpO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJzZWxlY3Rpb24tY2hhbmdlZFwiLFxuICAgICAgICBtZXNzYWdlOiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sXG4gICAgfSk7XG59KTtcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=