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
                const isFavoriteCol = colCellType === "Favorite";
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
                if (isFavoriteCol) {
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
                    return thisHeaderCell.width;
                };
                thisHeaderCell.resize(determineHeaderCellWidth(), thisHeaderCell.height);
                thisHeaderCell.children[0].layoutGrow =
                    cellFillContainerY ? 1 : 0;
                thisHeaderCell.primaryAxisSizingMode = cellFillContainerY
                    ? "FIXED"
                    : "AUTO";
                thisHeaderCell.counterAxisSizingMode = isFavoriteCol ? "AUTO" : "FIXED";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvYXBwbHlNYXRyaXhUb1BvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2Nsb25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2NvbnZlcnRDb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9maW5kTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRBbGxGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRCb3VuZGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvZ2V0Q1NTU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldE5vZGVJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRQYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldFJlbGF0aXZlUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaGFzQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNQYXJ0T2ZJbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1BhcnRPZk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNUeXBlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1Zpc2libGVOb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2xvYWRGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9sb2FkVW5pcXVlRm9udHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvbm9kZVRvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3BhcnNlVGV4dFN0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3NldENoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvdG9wTGV2ZWxGcmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jbG9uZURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcUJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcVdpdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdHJpeC1pbnZlcnNlL21hdHJpeC1pbnZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkLXJhbmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7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Q0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0M7Ozs7Ozs7Ozs7OztBQ3hCYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcEJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNwQmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEM7Ozs7Ozs7Ozs7OztBQzFFYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3BCYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDZGE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFD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QUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbk1hOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFF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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJDQUEyQztBQUN6RTtBQUNBO0FBQ0EsUUFBUSxrRkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQscUJBQXFCLDBHQUEwRztBQUNsTCxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLHVEQUF1RCxxQkFBcUIscU5BQXFOO0FBQ2pTLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7QUNucUJELGUiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFwcGx5TWF0cml4VG9Qb2ludCA9IGFwcGx5TWF0cml4VG9Qb2ludDtcblxuZnVuY3Rpb24gYXBwbHlNYXRyaXhUb1BvaW50KG1hdHJpeCwgcG9pbnQpIHtcbiAgcmV0dXJuIFtwb2ludFswXSAqIG1hdHJpeFswXVswXSArIHBvaW50WzFdICogbWF0cml4WzBdWzFdICsgbWF0cml4WzBdWzJdLCBwb2ludFswXSAqIG1hdHJpeFsxXVswXSArIHBvaW50WzFdICogbWF0cml4WzFdWzFdICsgbWF0cml4WzFdWzJdXTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNsb25lO1xuXG4vKipcbiAqICB0aGlzIGZ1bmN0aW9uIHJldHVybnMgY2xvbmUgdGhlIG9iamVjdFxuICovXG5mdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdudW1iZXInIHx8IHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdib29sZWFuJyB8fCB0eXBlID09PSAnc3ltYm9sJyB8fCB2YWwgPT09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKHZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4gdmFsLm1hcChjbG9uZSk7XG4gICAgfSBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbyA9IHt9O1xuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWwpIHtcbiAgICAgICAgb1trZXldID0gY2xvbmUodmFsW2tleV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gIH1cblxuICB0aHJvdyAndW5rbm93bic7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZpZ21hUkdCVG9XZWJSR0IgPSBmaWdtYVJHQlRvV2ViUkdCO1xuZXhwb3J0cy53ZWJSR0JUb0ZpZ21hUkdCID0gd2ViUkdCVG9GaWdtYVJHQjtcbmV4cG9ydHMuZmlnbWFSR0JUb0hleCA9IGZpZ21hUkdCVG9IZXg7XG5leHBvcnRzLmhleFRvRmlnbWFSR0IgPSBoZXhUb0ZpZ21hUkdCO1xuY29uc3QgbmFtZXNSR0IgPSBbJ3InLCAnZycsICdiJ107XG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gY29udmVydHMgZmlnbWEgY29sb3IgdG8gUkdCKEEpIChhcnJheSlcbiAqL1xuLy8gZmlnbWFSR0JUb1dlYlJHQih7cjogMC44ODc0OTk5ODgwNzkwNzEsIGc6IDAuMDcwNTg4MjM4NTM3MzExNTUsIGI6IDAuMDY2NTYyNDczNzczOTU2M30pXG4vLz0+IFsyMjYsIDE4LCAxN11cblxuZnVuY3Rpb24gZmlnbWFSR0JUb1dlYlJHQihjb2xvcikge1xuICBjb25zdCByZ2IgPSBbXTtcbiAgbmFtZXNSR0IuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgIHJnYltpXSA9IE1hdGgucm91bmQoY29sb3JbZV0gKiAyNTUpO1xuICB9KTtcbiAgaWYgKGNvbG9yWydhJ10gIT09IHVuZGVmaW5lZCkgcmdiWzNdID0gTWF0aC5yb3VuZChjb2xvclsnYSddICogMTAwKSAvIDEwMDtcbiAgcmV0dXJuIHJnYjtcbn1cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBjb252ZXJ0cyBSR0IoQSkgY29sb3IgKGFycmF5KSB0byBmaWdtYSBjb2xvclxuICovXG4vLyB3ZWJSR0JUb0ZpZ21hUkdCKFsyMjYsIDE4LCAxN10pXG4vLz0+IHtyOiAwLjg4NjI3NDUwOTgwMzkyMTUsIGc6IDAuMDcwNTg4MjM1Mjk0MTE3NjUsIGI6IDAuMDY2NjY2NjY2NjY2NjY2Njd9XG5cblxuZnVuY3Rpb24gd2ViUkdCVG9GaWdtYVJHQihjb2xvcikge1xuICBjb25zdCByZ2IgPSB7fTtcbiAgbmFtZXNSR0IuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgIHJnYltlXSA9IGNvbG9yW2ldIC8gMjU1O1xuICB9KTtcbiAgaWYgKGNvbG9yWzNdICE9PSB1bmRlZmluZWQpIHJnYlsnYSddID0gY29sb3JbM107XG4gIHJldHVybiByZ2I7XG59XG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gY29udmVydHMgZmlnbWEgY29sb3IgdG8gSEVYIChzdHJpbmcpXG4gKi9cbi8vIGZpZ21hUkdCVG9IZXgoeyByOiAwLCBnOiAwLjEsIGI6IDEgfSlcbi8vPT4gIzAwMWFmZlxuXG5cbmZ1bmN0aW9uIGZpZ21hUkdCVG9IZXgoY29sb3IpIHtcbiAgbGV0IGhleCA9ICcjJztcbiAgY29uc3QgcmdiID0gZmlnbWFSR0JUb1dlYlJHQihjb2xvcik7XG4gIGhleCArPSAoKDEgPDwgMjQpICsgKHJnYlswXSA8PCAxNikgKyAocmdiWzFdIDw8IDgpICsgcmdiWzJdKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG5cbiAgaWYgKHJnYlszXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgYSA9IE1hdGgucm91bmQocmdiWzNdICogMjU1KS50b1N0cmluZygxNik7XG5cbiAgICBpZiAoYS5sZW5ndGggPT0gMSkge1xuICAgICAgaGV4ICs9ICcwJyArIGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhICE9PSAnZmYnKSBoZXggKz0gYTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaGV4O1xufVxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGNvbnZlcnRzIEhFWCBjb2xvciAoc3RyaW5nKSB0byBmaWdtYSBjb2xvclxuICovXG4vLyBoZXhUb0ZpZ21hUkdCKCMwMDFhZmYpXG4vLz0+IHsgcjogMCwgZzogMC4xMDE5NjA3ODQzMTM3MjU0OSwgYjogMSB9XG5cblxuZnVuY3Rpb24gaGV4VG9GaWdtYVJHQihjb2xvcikge1xuICBsZXQgb3BhY2l0eSA9ICcnO1xuICBjb2xvciA9IGNvbG9yLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChjb2xvclswXSA9PT0gJyMnKSBjb2xvciA9IGNvbG9yLnNsaWNlKDEpO1xuXG4gIGlmIChjb2xvci5sZW5ndGggPT09IDMpIHtcbiAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UoLyguKSguKSguKT8vZywgJyQxJDEkMiQyJDMkMycpO1xuICB9IGVsc2UgaWYgKGNvbG9yLmxlbmd0aCA9PT0gOCkge1xuICAgIGNvbnN0IGFyciA9IGNvbG9yLm1hdGNoKC8oLns2fSkoLnsyfSkvKTtcbiAgICBjb2xvciA9IGFyclsxXTtcbiAgICBvcGFjaXR5ID0gYXJyWzJdO1xuICB9XG5cbiAgY29uc3QgbnVtID0gcGFyc2VJbnQoY29sb3IsIDE2KTtcbiAgY29uc3QgcmdiID0gW251bSA+PiAxNiwgbnVtID4+IDggJiAyNTUsIG51bSAmIDI1NV07XG5cbiAgaWYgKG9wYWNpdHkpIHtcbiAgICByZ2IucHVzaChwYXJzZUludChvcGFjaXR5LCAxNikgLyAyNTUpO1xuICAgIHJldHVybiB3ZWJSR0JUb0ZpZ21hUkdCKHJnYik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHdlYlJHQlRvRmlnbWFSR0IocmdiKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5leHRyYWN0SW1hZ2VDcm9wUGFyYW1zID0gZXh0cmFjdEltYWdlQ3JvcFBhcmFtcztcblxudmFyIF9tYXRyaXhJbnZlcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibWF0cml4LWludmVyc2VcIikpO1xuXG52YXIgX2FwcGx5TWF0cml4VG9Qb2ludCA9IHJlcXVpcmUoXCIuL2FwcGx5TWF0cml4VG9Qb2ludFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjYW4gZXh0cmFjdCB0aGUgaW1hZ2UgY3JvcCByb3RhdGlvbiwgc2NhbGUgKC9zaXplKSBhbmQgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHNoYXBlV2lkdGhcbiAqIEBwYXJhbSBzaGFwZUhlaWdodFxuICogQHBhcmFtIHRcbiAqL1xuZnVuY3Rpb24gZXh0cmFjdEltYWdlQ3JvcFBhcmFtcyhzaGFwZVdpZHRoLCBzaGFwZUhlaWdodCwgdCkge1xuICBjb25zdCB0cmFuc2Zvcm0gPSB0Lmxlbmd0aCA9PT0gMiA/IFsuLi50LCBbMCwgMCwgMV1dIDogWy4uLnRdO1xuICBjb25zdCBteEludiA9ICgwLCBfbWF0cml4SW52ZXJzZS5kZWZhdWx0KSh0cmFuc2Zvcm0pO1xuICBjb25zdCBwb2ludHMgPSBbWzAsIDBdLCBbMSwgMF0sIFsxLCAxXSwgWzAsIDFdXS5tYXAocCA9PiAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG14SW52LCBwKSk7XG4gIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihwb2ludHNbMV1bMV0gLSBwb2ludHNbMF1bMV0sIHBvaW50c1sxXVswXSAtIHBvaW50c1swXVswXSk7XG4gIGNvbnN0IHN4ID0gTWF0aC5zcXJ0KE1hdGgucG93KHBvaW50c1sxXVswXSAtIHBvaW50c1swXVswXSwgMikgKyBNYXRoLnBvdyhwb2ludHNbMV1bMV0gLSBwb2ludHNbMF1bMV0sIDIpKTtcbiAgY29uc3Qgc3kgPSBNYXRoLnNxcnQoTWF0aC5wb3cocG9pbnRzWzJdWzBdIC0gcG9pbnRzWzFdWzBdLCAyKSArIE1hdGgucG93KHBvaW50c1syXVsxXSAtIHBvaW50c1sxXVsxXSwgMikpO1xuICByZXR1cm4ge1xuICAgIHJvdGF0aW9uOiBhbmdsZSAqICgxODAgLyBNYXRoLlBJKSxcbiAgICBzY2FsZTogW3N4LCBzeV0sXG4gICAgc2l6ZTogW3N4ICogc2hhcGVXaWR0aCwgc3kgKiBzaGFwZUhlaWdodF0sXG4gICAgcG9zaXRpb246IFstcG9pbnRzWzBdWzBdICogc2hhcGVXaWR0aCwgLXBvaW50c1swXVsxXSAqIHNoYXBlSGVpZ2h0XVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5leHRyYWN0TGluZWFyR3JhZGllbnRQYXJhbXNGcm9tVHJhbnNmb3JtID0gZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybTtcblxudmFyIF9tYXRyaXhJbnZlcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibWF0cml4LWludmVyc2VcIikpO1xuXG52YXIgX2FwcGx5TWF0cml4VG9Qb2ludCA9IHJlcXVpcmUoXCIuL2FwcGx5TWF0cml4VG9Qb2ludFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjYW4gZXh0cmFjdCB0aGUgeCBhbmQgeSBwb3NpdGlvbnMgb2YgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIGxpbmVhciBncmFkaWVudFxuICogKHNjYWxlIGlzIG5vdCBpbXBvcnRhbnQgaGVyZSlcbiAqXG4gKiBAcGFyYW0gc2hhcGVXaWR0aCBudW1iZXJcbiAqIEBwYXJhbSBzaGFwZUhlaWdodCBudW1iZXJcbiAqIEBwYXJhbSB0IFRyYW5zZm9ybVxuICovXG5mdW5jdGlvbiBleHRyYWN0TGluZWFyR3JhZGllbnRQYXJhbXNGcm9tVHJhbnNmb3JtKHNoYXBlV2lkdGgsIHNoYXBlSGVpZ2h0LCB0KSB7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IHQubGVuZ3RoID09PSAyID8gWy4uLnQsIFswLCAwLCAxXV0gOiBbLi4udF07XG4gIGNvbnN0IG14SW52ID0gKDAsIF9tYXRyaXhJbnZlcnNlLmRlZmF1bHQpKHRyYW5zZm9ybSk7XG4gIGNvbnN0IHN0YXJ0RW5kID0gW1swLCAwLjVdLCBbMSwgMC41XV0ubWFwKHAgPT4gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShteEludiwgcCkpO1xuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBbc3RhcnRFbmRbMF1bMF0gKiBzaGFwZVdpZHRoLCBzdGFydEVuZFswXVsxXSAqIHNoYXBlSGVpZ2h0XSxcbiAgICBlbmQ6IFtzdGFydEVuZFsxXVswXSAqIHNoYXBlV2lkdGgsIHN0YXJ0RW5kWzFdWzFdICogc2hhcGVIZWlnaHRdXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmV4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcyA9IGV4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcztcblxudmFyIF9tYXRyaXhJbnZlcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibWF0cml4LWludmVyc2VcIikpO1xuXG52YXIgX2FwcGx5TWF0cml4VG9Qb2ludCA9IHJlcXVpcmUoXCIuL2FwcGx5TWF0cml4VG9Qb2ludFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjYW4gZXh0cmFjdCB0aGUgcm90YXRpb24gKGluIGRlZ3JlZXMpLCBjZW50ZXIgcG9pbnQgYW5kIHJhZGl1cyBmb3IgYSByYWRpYWwgb3IgZGlhbW9uZCBncmFkaWVudFxuICpcbiAqIEBwYXJhbSBzaGFwZVdpZHRoXG4gKiBAcGFyYW0gc2hhcGVIZWlnaHRcbiAqIEBwYXJhbSB0XG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcyhzaGFwZVdpZHRoLCBzaGFwZUhlaWdodCwgdCkge1xuICBjb25zdCB0cmFuc2Zvcm0gPSB0Lmxlbmd0aCA9PT0gMiA/IFsuLi50LCBbMCwgMCwgMV1dIDogWy4uLnRdO1xuICBjb25zdCBteEludiA9ICgwLCBfbWF0cml4SW52ZXJzZS5kZWZhdWx0KSh0cmFuc2Zvcm0pO1xuICBjb25zdCBjZW50ZXJQb2ludCA9ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobXhJbnYsIFswLjUsIDAuNV0pO1xuICBjb25zdCByeFBvaW50ID0gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShteEludiwgWzEsIDAuNV0pO1xuICBjb25zdCByeVBvaW50ID0gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShteEludiwgWzAuNSwgMV0pO1xuICBjb25zdCByeCA9IE1hdGguc3FydChNYXRoLnBvdyhyeFBvaW50WzBdIC0gY2VudGVyUG9pbnRbMF0sIDIpICsgTWF0aC5wb3cocnhQb2ludFsxXSAtIGNlbnRlclBvaW50WzFdLCAyKSk7XG4gIGNvbnN0IHJ5ID0gTWF0aC5zcXJ0KE1hdGgucG93KHJ5UG9pbnRbMF0gLSBjZW50ZXJQb2ludFswXSwgMikgKyBNYXRoLnBvdyhyeVBvaW50WzFdIC0gY2VudGVyUG9pbnRbMV0sIDIpKTtcbiAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4oKHJ4UG9pbnRbMV0gLSBjZW50ZXJQb2ludFsxXSkgLyAocnhQb2ludFswXSAtIGNlbnRlclBvaW50WzBdKSkgKiAoMTgwIC8gTWF0aC5QSSk7XG4gIHJldHVybiB7XG4gICAgcm90YXRpb246IGFuZ2xlLFxuICAgIGNlbnRlcjogW2NlbnRlclBvaW50WzBdICogc2hhcGVXaWR0aCwgY2VudGVyUG9pbnRbMV0gKiBzaGFwZUhlaWdodF0sXG4gICAgcmFkaXVzOiBbcnggKiBzaGFwZVdpZHRoLCByeSAqIHNoYXBlSGVpZ2h0XVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5maW5kQWxsID0gdm9pZCAwO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuLlwiKTtcblxuLyoqXG4gKiBDdXN0b20gaW1wbGVtZW50YXRpb24gb2YgdGhlIGZpZ21hLmZpbmRBbGwgbWV0aG9kLCB3aGljaCBydW5zIHgxMDAwIHRpbWVzIGZhc3Rlci5cbiAqXG4gKiAjIyMgVXNhZ2UgZXhhbXBsZVxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZpbmRBbGwsIGlzVGV4dE5vZGUgfSBmcm9tIFwiQGZpZ21hLXBsdWdpbi9oZWxwZXJzXCJcbiAqXG4gKiBjb25zdCB0ZXh0Tm9kZXMgPSBmaW5kQWxsKGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuLCBpc1RleHROb2RlKVxuICogYGBgXG4gKlxuICogIyMjIEhvdyB0byByZXBsYWNlIG5hdGl2ZSBgZmlnbWEuZmluZEFsbGBcbiAqIGBgYGRpZmZcbiAqICsgaW1wb3J0IHsgZmluZEFsbCB9IGZyb20gXCJAZmlnbWEtcGx1Z2luL2hlbHBlcnNcIlxuICpcbiAqIC0gY29uc3QgdGV4dE5vZGVzID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZEFsbCgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIik7XG4gKiArIGNvbnN0IHRleHROb2RlcyA9IGZpbmRBbGwoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4sIChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiKVxuICogYGBgXG4gKi9cbmNvbnN0IGZpbmRBbGwgPSAobm9kZXMsIGl0ZXJhdGVlKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaXRlcmF0ZWUobm9kZXNbaV0sIGksIG5vZGVzKSkge1xuICAgICAgcmVzdWx0LnB1c2gobm9kZXNbaV0pO1xuICAgIH0gZWxzZSBpZiAoKDAsIF8uaGFzQ2hpbGRyZW4pKG5vZGVzW2ldKSkge1xuICAgICAgcmVzdWx0LnB1c2goLi4uZmluZEFsbChub2Rlc1tpXVsnY2hpbGRyZW4nXSwgaXRlcmF0ZWUpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0cy5maW5kQWxsID0gZmluZEFsbDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldEFsbEZvbnRzO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBhbGwgdXNlZCBmb250cyB0byB0ZXh0Tm9kZXNcbiAqL1xuZnVuY3Rpb24gZ2V0QWxsRm9udHModGV4dE5vZGVzKSB7XG4gIGNvbnN0IGZvbnRzID0gW107XG5cbiAgY29uc3QgcHVzaFVuaXF1ZSA9IGZvbnQgPT4ge1xuICAgIGlmICghZm9udHMuc29tZShpdGVtID0+IGl0ZW0uZmFtaWx5ID09PSBmb250LmZhbWlseSAmJiBpdGVtLnN0eWxlID09PSBmb250LnN0eWxlKSkge1xuICAgICAgZm9udHMucHVzaChmb250KTtcbiAgICB9XG4gIH07XG5cbiAgZm9yIChjb25zdCBub2RlIG9mIHRleHROb2Rlcykge1xuICAgIGlmIChub2RlLmZvbnROYW1lID09PSBmaWdtYS5taXhlZCkge1xuICAgICAgY29uc3QgbGVuID0gbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBmb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKGksIGkgKyAxKTtcbiAgICAgICAgcHVzaFVuaXF1ZShmb250KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHVzaFVuaXF1ZShub2RlLmZvbnROYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9udHM7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRCb3VuZGluZ1JlY3Q7XG5cbnZhciBfaXNVbmRlZmluZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2lzVW5kZWZpbmVkXCIpKTtcblxudmFyIF9hcHBseU1hdHJpeFRvUG9pbnQgPSByZXF1aXJlKFwiLi9hcHBseU1hdHJpeFRvUG9pbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogIHRoaXMgZnVuY3Rpb24gcmV0dXJuIGEgYm91bmRpbmcgcmVjdCBmb3IgYW4gbm9kZXNcbiAqL1xuLy8geC95IGFic29sdXRlIGNvb3JkaW5hdGVzXG4vLyBoZWlnaHQvd2lkdGhcbi8vIHgyL3kyIGJvdHRvbSByaWdodCBjb29yZGluYXRlc1xuZnVuY3Rpb24gZ2V0Qm91bmRpbmdSZWN0KG5vZGVzKSB7XG4gIGNvbnN0IGJvdW5kaW5nUmVjdCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgeDI6IDAsXG4gICAgeTI6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH07XG5cbiAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IHh5ID0gbm9kZXMucmVkdWNlKChyZXosIG5vZGUpID0+IHtcbiAgICAgIGlmICghbm9kZS5hYnNvbHV0ZVRyYW5zZm9ybSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1Byb3ZpZGVkIG5vZGUgaGF2ZW5cXCd0IFwiYWJzb2x1dGVUcmFuc2Zvcm1cIiBwcm9wZXJ0eSwgYnV0IGl0XFwncyByZXF1aXJlZCBmb3IgY2FsY3VsYXRpb25zLicpO1xuICAgICAgICByZXR1cm4gcmV6O1xuICAgICAgfVxuXG4gICAgICBpZiAoKDAsIF9pc1VuZGVmaW5lZDIuZGVmYXVsdCkobm9kZS5oZWlnaHQpIHx8ICgwLCBfaXNVbmRlZmluZWQyLmRlZmF1bHQpKG5vZGUud2lkdGgpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignUHJvdmlkZWQgbm9kZSBoYXZlblxcJ3QgXCJ3aWR0aC9oZWlnaHRcIiBwcm9wZXJ0eSwgYnV0IGl0XFwncyByZXF1aXJlZCBmb3IgY2FsY3VsYXRpb25zLicpO1xuICAgICAgICByZXR1cm4gcmV6O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBoYWxmSGVpZ2h0ID0gbm9kZS5oZWlnaHQgLyAyO1xuICAgICAgY29uc3QgaGFsZldpZHRoID0gbm9kZS53aWR0aCAvIDI7XG4gICAgICBjb25zdCBbW2MwLCBzMCwgeF0sIFtzMSwgYzEsIHldXSA9IG5vZGUuYWJzb2x1dGVUcmFuc2Zvcm07XG4gICAgICBjb25zdCBtYXRyaXggPSBbW2MwLCBzMCwgeCArIGhhbGZXaWR0aCAqIGMwICsgaGFsZkhlaWdodCAqIHMwXSwgW3MxLCBjMSwgeSArIGhhbGZXaWR0aCAqIHMxICsgaGFsZkhlaWdodCAqIGMxXV07IC8vIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgY29ybmVycyBvZiB0aGUgcmVjdGFuZ2xlXG5cbiAgICAgIGNvbnN0IFhZID0ge1xuICAgICAgICB4OiBbMSwgLTEsIDEsIC0xXSxcbiAgICAgICAgeTogWzEsIC0xLCAtMSwgMV1cbiAgICAgIH07IC8vIGZpbGwgaW5cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG1hdHJpeCwgW1hZLnhbaV0gKiBoYWxmV2lkdGgsIFhZLnlbaV0gKiBoYWxmSGVpZ2h0XSk7XG4gICAgICAgIFhZLnhbaV0gPSBhWzBdO1xuICAgICAgICBYWS55W2ldID0gYVsxXTtcbiAgICAgIH1cblxuICAgICAgWFkueC5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICBYWS55LnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgIHJlei54LnB1c2goWFkueFswXSk7XG4gICAgICByZXoueS5wdXNoKFhZLnlbMF0pO1xuICAgICAgcmV6LngyLnB1c2goWFkueFszXSk7XG4gICAgICByZXoueTIucHVzaChYWS55WzNdKTtcbiAgICAgIHJldHVybiByZXo7XG4gICAgfSwge1xuICAgICAgeDogW10sXG4gICAgICB5OiBbXSxcbiAgICAgIHgyOiBbXSxcbiAgICAgIHkyOiBbXVxuICAgIH0pO1xuICAgIGNvbnN0IHJlY3QgPSB7XG4gICAgICB4OiBNYXRoLm1pbiguLi54eS54KSxcbiAgICAgIHk6IE1hdGgubWluKC4uLnh5LnkpLFxuICAgICAgeDI6IE1hdGgubWF4KC4uLnh5LngyKSxcbiAgICAgIHkyOiBNYXRoLm1heCguLi54eS55MilcbiAgICB9O1xuICAgIGJvdW5kaW5nUmVjdC54ID0gcmVjdC54O1xuICAgIGJvdW5kaW5nUmVjdC55ID0gcmVjdC55O1xuICAgIGJvdW5kaW5nUmVjdC54MiA9IHJlY3QueDI7XG4gICAgYm91bmRpbmdSZWN0LnkyID0gcmVjdC55MjtcbiAgICBib3VuZGluZ1JlY3Qud2lkdGggPSByZWN0LngyIC0gcmVjdC54O1xuICAgIGJvdW5kaW5nUmVjdC5oZWlnaHQgPSByZWN0LnkyIC0gcmVjdC55O1xuICB9XG5cbiAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0VGV4dE5vZGVDU1MgPSB2b2lkIDA7XG5cbnZhciBfZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC9nZXRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBzdHJpbmdWYWx1ZVRvQ3NzID0gdmFsdWUgPT4ge1xuICBpZiAoL3JpZ2h0fGJvdHRvbS9pLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdmbGV4LWVuZCc7XG4gIH0gZWxzZSBpZiAoL2xlZnR8dG9wL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2ZsZXgtc3RhcnQnO1xuICB9IGVsc2UgaWYgKC9jZW50ZXIvaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnY2VudGVyJztcbiAgfSBlbHNlIGlmICgvbG93ZXIvaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnbG93ZXJjYXNlJztcbiAgfSBlbHNlIGlmICgvdXBwZXIvaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAndXBwZXJjYXNlJztcbiAgfSBlbHNlIGlmICgvdGl0bGUvaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnY2FwaXRhbGl6ZSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdub25lJztcbiAgfVxufTtcblxuY29uc3QgdW5pdFZhbHVlVG9Dc3MgPSAoe1xuICB1bml0LFxuICB2YWx1ZVxufSkgPT4ge1xuICBpZiAodW5pdCA9PT0gJ1BFUkNFTlQnKSB7XG4gICAgcmV0dXJuIGAke3ZhbHVlfSVgO1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdQSVhFTFMnKSB7XG4gICAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ2F1dG8nO1xuICB9XG59O1xuXG5jb25zdCBpc1VuaXRWYWx1ZSA9IG9iaiA9PiB7XG4gIHJldHVybiBvYmouaGFzT3duUHJvcGVydHkoJ3VuaXQnKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlVmFsdWUgPSAobm9kZSwga2V5LCBleGFjdFN0cmluZykgPT4ge1xuICBjb25zdCB2YWx1ZSA9ICgwLCBfZ2V0Mi5kZWZhdWx0KShub2RlLCBrZXkpO1xuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBleGFjdFN0cmluZyA/IHZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpIDogc3RyaW5nVmFsdWVUb0Nzcyh2YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBgJHt2YWx1ZX1weGA7XG4gIH0gZWxzZSBpZiAoaXNVbml0VmFsdWUodmFsdWUpKSB7XG4gICAgcmV0dXJuIHVuaXRWYWx1ZVRvQ3NzKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4oJ1VuZXhwZWN0ZWQgdmFsdWU6ICcsIHZhbHVlKTtcbiAgfVxufTtcbi8qKlxuICogIGdldCBDU1Mgc3R5bGVzIG9mIFRleHROb2RlXG4gKi9cblxuXG5jb25zdCBnZXRUZXh0Tm9kZUNTUyA9IG5vZGUgPT4ge1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogZ2V0U3R5bGVWYWx1ZShub2RlLCAneScpLFxuICAgIGxlZnQ6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3gnKSxcbiAgICB3aWR0aDogZ2V0U3R5bGVWYWx1ZShub2RlLCAnd2lkdGgnKSxcbiAgICBoZWlnaHQ6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2hlaWdodCcpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAnanVzdGlmeS1jb250ZW50JzogZ2V0U3R5bGVWYWx1ZShub2RlLCAndGV4dEFsaWduSG9yaXpvbnRhbCcpLFxuICAgICdhbGlnbi1pdGVtcyc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3RleHRBbGlnblZlcnRpY2FsJyksXG4gICAgJ3RleHQtaW5kZW50JzogZ2V0U3R5bGVWYWx1ZShub2RlLCAncGFyYWdyYXBoSW5kZW50JyksXG4gICAgJ2xldHRlci1zcGFjaW5nJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAnbGV0dGVyU3BhY2luZycpLFxuICAgICdsaW5lLWhlaWdodCc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2xpbmVIZWlnaHQnKSxcbiAgICAnZm9udC1zaXplJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAnZm9udFNpemUnKSxcbiAgICAnZm9udC1zdHlsZSc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnROYW1lLnN0eWxlJywgdHJ1ZSksXG4gICAgJ2ZvbnQtd2VpZ2h0JzogZ2V0U3R5bGVWYWx1ZShub2RlLCAnZm9udE5hbWUuc3R5bGUnLCB0cnVlKSxcbiAgICAndGV4dC1kZWNvcmF0aW9uJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAndGV4dERlY29yYXRpb24nLCB0cnVlKSxcbiAgICAndGV4dC10cmFuc2Zvcm0nOiBnZXRTdHlsZVZhbHVlKG5vZGUsICd0ZXh0Q2FzZScpLFxuICAgICdmb250LWZhbWlseSc6IGAke2dldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnROYW1lLmZhbWlseScsIHRydWUpfSAke2dldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnROYW1lLnN0eWxlJywgdHJ1ZSl9YFxuICB9O1xufTsgLy8gdGhpcyBmaWxlIGNhbiBiZSBleHRlbmRlZCB0byBzdXBwb3J0IGFsbCBub2RlIHR5cGVzXG5cblxuZXhwb3J0cy5nZXRUZXh0Tm9kZUNTUyA9IGdldFRleHROb2RlQ1NTOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Tm9kZUluZGV4O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBnZXQgdGhlIHJldHVybiB0aGUgaW5kZXggb2Ygbm9kZSBpbiBpdHMgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVJbmRleChub2RlKSB7XG4gIHJldHVybiBub2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0UGFnZTtcblxudmFyIF9pc1R5cGVOb2RlID0gcmVxdWlyZShcIi4vaXNUeXBlTm9kZVwiKTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gcGFzcyBpbiBhIG5vZGUgYW5kIHJldHVybiBpdHMgcGFnZU5vZGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFnZShub2RlKSB7XG4gIGlmICghKDAsIF9pc1R5cGVOb2RlLmlzUGFnZU5vZGUpKG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFBhZ2Uobm9kZS5wYXJlbnQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2RlO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFJlbGF0aXZlUG9zaXRpb24gPSBleHBvcnRzLmdldFRvcExldmVsUGFyZW50ID0gdm9pZCAwO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuLi9cIik7XG5cbi8qKlxuICogUmV0dXJuIHRvcCBsZXZlbCBwYXJlbnQgZm9yIG5vZGUgYmVmb3JlIFBhZ2VOb2RlLlxuICogRm9yIGV4YW1wbGU6XG4gKiBgYGBqc1xuICogLy8gZm9yIHN0cnVjdHVyZSBiZWxvd1xuICogLy8gUGFnZSAvIEZyYW1lIC8gR3JvdXAxIC8gR3JvdXAyIC8gVGV4dFxuICpcbiAqIGdldFRvcExldmVsUGFyZW50KFRleHQpIC8vIEZyYW1lXG4gKiBgYGBcbiAqL1xuY29uc3QgZ2V0VG9wTGV2ZWxQYXJlbnQgPSBub2RlID0+IHtcbiAgaWYgKG5vZGUgJiYgbm9kZS5wYXJlbnQgJiYgISgwLCBfLmlzUGFnZU5vZGUpKG5vZGUucGFyZW50KSkge1xuICAgIHJldHVybiBnZXRUb3BMZXZlbFBhcmVudChub2RlLnBhcmVudCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG4vKipcbiAqIENhbGN1bGF0ZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiBub2RlIGJhc2VkIG9uIHByb3ZpZGVkIHBhcmVudCBvciB0b3AgbGV2ZWwgcGFyZW50LlxuICogRm9yIGV4YW1wbGU6XG4gKiBgYGBqc1xuICogLy8gZm9yIHN0cnVjdHVyZSBiZWxvd1xuICogLy8gUGFnZSAvIEZyYW1lIC8gR3JvdXAxIC8gR3JvdXAyIC8gVGV4dFxuICpcbiAqIGdldFJlbGF0aXZlUG9zaXRpb24oVGV4dCwgR3JvdXAxKSAvLyB3aWxsIGNhbGN1bGF0ZSB7IHgsIHkgfSBiYXNlZCBvbiBHcm91cDFcbiAqXG4gKiBnZXRSZWxhdGl2ZVBvc2l0aW9uKFRleHQpIC8vIHdpbGwgY2FsY3VsYXRlIHsgeCwgeSB9IGJhc2VkIG9uIEZyYW1lXG4gKiBgYGBcbiAqKi9cblxuXG5leHBvcnRzLmdldFRvcExldmVsUGFyZW50ID0gZ2V0VG9wTGV2ZWxQYXJlbnQ7XG5cbmNvbnN0IGdldFJlbGF0aXZlUG9zaXRpb24gPSAobm9kZSwgcmVsYXRpdmVOb2RlKSA9PiB7XG4gIHJlbGF0aXZlTm9kZSA9IHJlbGF0aXZlTm9kZSB8fCBnZXRUb3BMZXZlbFBhcmVudChub2RlKTtcbiAgcmV0dXJuIHtcbiAgICB4OiBNYXRoLmFicyhNYXRoLnJvdW5kKHJlbGF0aXZlTm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXSAtIG5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMF1bMl0pKSxcbiAgICB5OiBNYXRoLmFicyhNYXRoLnJvdW5kKHJlbGF0aXZlTm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVsxXVsyXSAtIG5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMV1bMl0pKVxuICB9O1xufTtcblxuZXhwb3J0cy5nZXRSZWxhdGl2ZVBvc2l0aW9uID0gZ2V0UmVsYXRpdmVQb3NpdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaGFzQ2hpbGRyZW4gPSB2b2lkIDA7XG5cbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gaGF2ZSBjaGlsZHJlbiBub2Rlc1xuICogRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHNcbiAqIC8vIEJFRk9SRVxuICogY29uc29sZS5sb2cobm9kZS5jaGlsZHJlbikgLy8gdGhyb3cgVFMgZXJyb3IgXCJQcm9wZXJ0eSAnY2hpbGRyZW4nIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgLi4uXCJcbiAqXG4gKiAvLyBBRlRFUlxuICogaWYgKGhhc0NoaWxkcmVuKG5vZGUpKSB7XG4gKiAgY29uc29sZS5sb2cobm9kZS5jaGlsZHJlbikgLy8gdmFsaWQgY29kZVxuICogfVxuICogYGBgXG4gKlxuICovXG5jb25zdCBoYXNDaGlsZHJlbiA9IG5vZGUgPT4gQm9vbGVhbihub2RlWydjaGlsZHJlbiddKTtcblxuZXhwb3J0cy5oYXNDaGlsZHJlbiA9IGhhc0NoaWxkcmVuOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNQYXJ0T2ZJbnN0YW5jZTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gY2hlY2sgd2hldGhlciBhIG5vZGUgaXMgcGFydCBvZiBhbiBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBpc1BhcnRPZkluc3RhbmNlKG5vZGUpIHtcbiAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG5cbiAgaWYgKHBhcmVudC50eXBlID09PSAnSU5TVEFOQ0UnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAocGFyZW50LnR5cGUgPT09ICdQQUdFJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaXNQYXJ0T2ZJbnN0YW5jZShwYXJlbnQpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1BhcnRPZk5vZGU7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIGNoZWNrIHdoZXRoZXIgYSBub2RlIGlzIHBhcnQgb2YgYW4gcm9vdE5vZGVcbiAqL1xuZnVuY3Rpb24gaXNQYXJ0T2ZOb2RlKHBhcnQsIHJvb3ROb2RlKSB7XG4gIGNvbnN0IHBhcmVudCA9IHBhcnQucGFyZW50O1xuXG4gIGlmIChwYXJlbnQgPT09IHJvb3ROb2RlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAocGFyZW50LnR5cGUgPT09ICdQQUdFJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaXNQYXJ0T2ZOb2RlKHBhcmVudCwgcm9vdE5vZGUpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzT25lT2ZOb2RlVHlwZSA9IGV4cG9ydHMuaXNDb21wb25lbnROb2RlID0gZXhwb3J0cy5pc0luc3RhbmNlTm9kZSA9IGV4cG9ydHMuaXNUZXh0Tm9kZSA9IGV4cG9ydHMuaXNGcmFtZU5vZGUgPSBleHBvcnRzLmlzR3JvdXBOb2RlID0gZXhwb3J0cy5pc1BhZ2VOb2RlID0gdm9pZCAwO1xuXG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIFBhZ2VOb2RlXG4gKi9cbmNvbnN0IGlzUGFnZU5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ1BBR0UnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgR3JvdXBOb2RlXG4gKi9cblxuXG5leHBvcnRzLmlzUGFnZU5vZGUgPSBpc1BhZ2VOb2RlO1xuXG5jb25zdCBpc0dyb3VwTm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnR1JPVVAnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgRnJhbWVOb2RlXG4gKi9cblxuXG5leHBvcnRzLmlzR3JvdXBOb2RlID0gaXNHcm91cE5vZGU7XG5cbmNvbnN0IGlzRnJhbWVOb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdGUkFNRSc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBUZXh0Tm9kZVxuICovXG5cblxuZXhwb3J0cy5pc0ZyYW1lTm9kZSA9IGlzRnJhbWVOb2RlO1xuXG5jb25zdCBpc1RleHROb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdURVhUJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIEluc3RhbmNlTm9kZVxuICovXG5cblxuZXhwb3J0cy5pc1RleHROb2RlID0gaXNUZXh0Tm9kZTtcblxuY29uc3QgaXNJbnN0YW5jZU5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0lOU1RBTkNFJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIENvbXBvbmVudE5vZGVcbiAqL1xuXG5cbmV4cG9ydHMuaXNJbnN0YW5jZU5vZGUgPSBpc0luc3RhbmNlTm9kZTtcblxuY29uc3QgaXNDb21wb25lbnROb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdDT01QT05FTlQnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgb25lIG9mIHByb3ZpZGVkIHR5cGVzXG4gKi9cblxuXG5leHBvcnRzLmlzQ29tcG9uZW50Tm9kZSA9IGlzQ29tcG9uZW50Tm9kZTtcblxuY29uc3QgaXNPbmVPZk5vZGVUeXBlID0gKG5vZGUsIHR5cGVMaXN0KSA9PiB7XG4gIHJldHVybiB0eXBlTGlzdC5pbmNsdWRlcyhub2RlLnR5cGUpO1xufTtcblxuZXhwb3J0cy5pc09uZU9mTm9kZVR5cGUgPSBpc09uZU9mTm9kZVR5cGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1Zpc2libGVOb2RlO1xuXG4vKipcbiAqIFRoaXMgaGVscGVyIHJlY3Vyc2l2ZWx5IGNoZWNrcyBhbGwgcGFyZW50cyBmb3IgdmlzaWJpbGl0eSwgdG8gZ3VhcmFudGVlIHRoYXQncyBub2RlIGlzIHZpc2libGVcbiAqL1xuZnVuY3Rpb24gaXNWaXNpYmxlTm9kZShub2RlKSB7XG4gIGlmIChub2RlICYmIG5vZGUucGFyZW50KSB7XG4gICAgaWYgKG5vZGUudmlzaWJsZSAmJiBub2RlLnBhcmVudC50eXBlICE9PSAnUEFHRScpIHtcbiAgICAgIHJldHVybiBpc1Zpc2libGVOb2RlKG5vZGUucGFyZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5vZGUudmlzaWJsZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsb2FkRm9udHM7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhc3luY2hyb25vdXNseSBsb2FkcyB0aGUgcGFzc2VkIGZvbnRzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRGb250cyhmb250cykge1xuICBjb25zdCBwcm9taXNlcyA9IGZvbnRzLm1hcChmb250ID0+IGZpZ21hLmxvYWRGb250QXN5bmMoZm9udCkpO1xuICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gIHJldHVybiBmb250cztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvYWRVbmlxdWVGb250cztcblxudmFyIF9nZXRBbGxGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ2V0QWxsRm9udHNcIikpO1xuXG52YXIgX2xvYWRGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZEZvbnRzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gbG9hZCBvbmx5IHVuaXF1ZSBmb250cyBhc3luY2hyb25vdXNseVxuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkVW5pcXVlRm9udHModGV4dE5vZGVzKSB7XG4gIGNvbnN0IGZvbnRzID0gKDAsIF9nZXRBbGxGb250cy5kZWZhdWx0KSh0ZXh0Tm9kZXMpO1xuICByZXR1cm4gKDAsIF9sb2FkRm9udHMuZGVmYXVsdCkoZm9udHMpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ub2RlVG9PYmplY3QgPSB2b2lkIDA7XG5cbi8qKlxuICogVHJhbnNmb3JtIG5vZGUgdG8gb2JqZWN0IHdpdGgga2V5cywgdGhhdCBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQuXG4gKiBGb3IgZXhhbXBsZTpcbiAqIGBgYHRzXG4gKiBjb25zdCBub2RlID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZE9uZSgoZWwpID0+IGVsLnR5cGUgPT09IFwiVEVYVFwiKTtcbiAqIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKG5vZGUpLmxlbmd0aCkgLy8gMVxuICogY29uc29sZS5sb2coT2JqZWN0LmtleXMobm9kZVRvT2JqZWN0KG5vZGUpKS5sZW5ndGgpIC8vIDQyXG4gKiBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhub2RlVG9PYmplY3Qobm9kZSwgdHJ1ZSkpLmxlbmd0aCkgLy8gMzlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBub2RlXG4gKiBAcGFyYW0gd2l0aG91dFJlbGF0aW9uc1xuICovXG5jb25zdCBub2RlVG9PYmplY3QgPSAobm9kZSwgd2l0aG91dFJlbGF0aW9ucykgPT4ge1xuICBjb25zdCBwcm9wcyA9IE9iamVjdC5lbnRyaWVzKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG5vZGUuX19wcm90b19fKSk7XG4gIGNvbnN0IGJsYWNrbGlzdCA9IFsncGFyZW50JywgJ2NoaWxkcmVuJywgJ3JlbW92ZWQnLCAnbWFzdGVyQ29tcG9uZW50J107XG4gIGNvbnN0IG9iaiA9IHtcbiAgICBpZDogbm9kZS5pZCxcbiAgICB0eXBlOiBub2RlLnR5cGVcbiAgfTtcblxuICBmb3IgKGNvbnN0IFtuYW1lLCBwcm9wXSBvZiBwcm9wcykge1xuICAgIGlmIChwcm9wLmdldCAmJiAhYmxhY2tsaXN0LmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIG9ialtuYW1lXSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICBvYmpbbmFtZV0gPSAnTWl4ZWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ialtuYW1lXSA9IHByb3AuZ2V0LmNhbGwobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBvYmpbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vZGUucGFyZW50ICYmICF3aXRob3V0UmVsYXRpb25zKSB7XG4gICAgb2JqLnBhcmVudCA9IHtcbiAgICAgIGlkOiBub2RlLnBhcmVudC5pZCxcbiAgICAgIHR5cGU6IG5vZGUucGFyZW50LnR5cGVcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgIXdpdGhvdXRSZWxhdGlvbnMpIHtcbiAgICBvYmouY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBub2RlVG9PYmplY3QoY2hpbGQsIHdpdGhvdXRSZWxhdGlvbnMpKTtcbiAgfVxuXG4gIGlmIChub2RlLm1hc3RlckNvbXBvbmVudCAmJiAhd2l0aG91dFJlbGF0aW9ucykge1xuICAgIG9iai5tYXN0ZXJDb21wb25lbnQgPSBub2RlVG9PYmplY3Qobm9kZS5tYXN0ZXJDb21wb25lbnQsIHdpdGhvdXRSZWxhdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbmV4cG9ydHMubm9kZVRvT2JqZWN0ID0gbm9kZVRvT2JqZWN0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZVRleHRTdHlsZSA9IHBhcnNlVGV4dFN0eWxlO1xuZXhwb3J0cy5zcGxpdFRleHRTdHlsZUludG9MaW5lcyA9IHNwbGl0VGV4dFN0eWxlSW50b0xpbmVzO1xuZXhwb3J0cy5qb2luVGV4dExpbmVzU3R5bGVzID0gam9pblRleHRMaW5lc1N0eWxlcztcbmV4cG9ydHMuYXBwbHlUZXh0U3R5bGVUb1RleHROb2RlID0gYXBwbHlUZXh0U3R5bGVUb1RleHROb2RlO1xuZXhwb3J0cy5jaGFuZ2VDaGFyYWN0ZXJzVGV4dFN0eWxlID0gY2hhbmdlQ2hhcmFjdGVyc1RleHRTdHlsZTtcbmV4cG9ydHMuY2hhbmdlVGV4dFN0eWxlID0gY2hhbmdlVGV4dFN0eWxlO1xuXG52YXIgX3VuaXFXaXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC91bmlxV2l0aFwiKSk7XG5cbnZhciBfY2xvbmVEZWVwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIikpO1xuXG52YXIgX2lzRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2lzRXF1YWxcIikpO1xuXG52YXIgX2dldEFsbEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9nZXRBbGxGb250c1wiKSk7XG5cbnZhciBfbG9hZEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkRm9udHNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBzdHlsZUZvbnRzID0gWydmb250U2l6ZScsICdmb250TmFtZScsICd0ZXh0Q2FzZScsICd0ZXh0RGVjb3JhdGlvbicsICdsZXR0ZXJTcGFjaW5nJywgJ2xpbmVIZWlnaHQnLCAnZmlsbHMnLCAndGV4dFN0eWxlSWQnLCAnZmlsbFN0eWxlSWQnXTtcbi8qXG5cdFRoZSBmdW5jdGlvbiByZXR1cm5zIHRoZSB0ZXh0IG5vZGUgc3R5bGVzLCBzcGxpdHRpbmcgdGhlbSBpbnRvIGRpZmZlcmVudCBhcnJheXMsIHN1Y2ggYXM6XG5cdFt7XG5cdFx0Y2hhcmFjdGVyczogXCIuLi5cIixcblx0XHQuLi4gKHN0eWxlcylcblx0fSwgLi4uXVxuXG5cdC0tLVxuXG5cdFJldHVybnMgc3R5bGVzIGZvciB0aGUgZW50aXJlIHRleHQ6XG5cdHBhcnNlVGV4dFN0eWxlKHRleHROb2RlKVxuXHRcblx0UmV0dXJucyB0ZXh0IHN0eWxlcyBmcm9tIHRoZSAxMDB0aCB0byB0aGUgbGFzdCBjaGFyYWN0ZXI6XG5cdHBhcnNlVGV4dFN0eWxlKHRleHROb2RlLCAxMDApXG5cblx0UmV0dXJucyBzdHlsZXMgZm9yIHRoZSBlbnRpcmUgdGV4dCwgYnV0IG9ubHkgd2l0aCBmb250TmFtZSBhbmQgdGV4dERlY29yYXRpb246XG5cdHBhcnNlVGV4dFN0eWxlKHRleHROb2RlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgW1wiZm9udE5hbWVcIiwgXCJ0ZXh0RGVjb3JhdGlvblwiXSlcbiovXG5cbmZ1bmN0aW9uIHBhcnNlVGV4dFN0eWxlKG5vZGUsIHN0YXJ0ID0gMCwgZW5kLCBzdHlsZU5hbWUpIHtcbiAgaWYgKCFlbmQpIGVuZCA9IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7XG4gIGlmICghc3R5bGVOYW1lKSBzdHlsZU5hbWUgPSBzdHlsZUZvbnRzO1xuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICBjb25zb2xlLmVycm9yKCdTdGFydCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBlbmQnKTtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gc3RyaW5nIHN1YnN0cmluZywgZGVmaW5lZCBzdHlsZXNcblxuXG4gIGNvbnN0IHN0eWxlTWFwID0gW107IC8vIGEgY29tcG9zaW5nIHN0cmluZyBvZiBhIHNwZWNpZmljIHN0eWxlXG5cbiAgbGV0IHRleHRTdHlsZTtcbiAgY29uc3QgbmFtZXMgPSBzdHlsZU5hbWUubWFwKG5hbWUgPT4ge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoL14oLikvZywgJDEgPT4gJDEudG9VcHBlckNhc2UoKSk7XG4gIH0pOyAvLyBzcGxpdHRpbmcgdGV4dCBpbnRvIHN1YnN0cmluZ3MgYnkgc3R5bGVcblxuICBmb3IgKGxldCBzdGFydEluZGV4ID0gc3RhcnQ7IHN0YXJ0SW5kZXggPCBlbmQ7IHN0YXJ0SW5kZXgrKykge1xuICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIDE7XG4gICAgY29uc3QgbGV0dGVyID0ge1xuICAgICAgY2hhcmFjdGVyczogbm9kZS5jaGFyYWN0ZXJzW3N0YXJ0SW5kZXhdXG4gICAgfTsgLy8gY29sbGVjdGlvbiBvZiBzdHlsZXNcblxuICAgIG5hbWVzLmZvckVhY2goKG4sIGkpID0+IHtcbiAgICAgIGxldHRlcltzdHlsZU5hbWVbaV1dID0gbm9kZVsnZ2V0UmFuZ2UnICsgbl0oc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRleHRTdHlsZSkge1xuICAgICAgaWYgKGlzRXF1YWxMZXR0ZXJTdHlsZShsZXR0ZXIsIHRleHRTdHlsZSkpIHtcbiAgICAgICAgLy8gdGhlIGNoYXJhY3RlciBoYXMgdGhlIHNhbWUgcHJvcGVydGllcyBhcyB0aGUgZ2VuZXJhdGVkIHN1YnN0cmluZ1xuICAgICAgICAvLyBhZGQgaXQgdG8gaXRcbiAgICAgICAgdGV4dFN0eWxlLmNoYXJhY3RlcnMgKz0gbGV0dGVyLmNoYXJhY3RlcnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzdHlsZSBwcm9wZXJ0aWVzIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgc3R5bGVNYXAucHVzaCh0ZXh0U3R5bGUpOyAvLyB3ZSBzdGFydCB0byBmb3JtIGEgbmV3IHN1YnN0cmluZ1xuXG4gICAgICAgIHRleHRTdHlsZSA9IGxldHRlcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2Ugc3RhcnQgZm9ybWluZyB0aGUgZmlyc3Qgc3Vic3RyaW5nXG4gICAgICB0ZXh0U3R5bGUgPSBsZXR0ZXI7XG4gICAgfVxuICB9XG5cbiAgc3R5bGVNYXAucHVzaCh0ZXh0U3R5bGUpO1xuICByZXR1cm4gc3R5bGVNYXA7XG59XG4vKlxuXHRBbGxvd3MgdG8gc3BsaXQgdGhlIHN0eWxlcyBvYnRhaW5lZCB3aXRoIHBhcnNlVGV4dFN0eWxlIGludG8gbGluZXMgYmFzZWQgb24gbmV3bGluZXMuXG5cblx0SWYgdGhlIHJlbW92ZU5ld2xpbmVDaGFyYWN0ZXJzIHBhcmFtZXRlciA9PSB0cnVlLCB0aGUgbmV3bGluZSBjaGFyYWN0ZXJzIHdpbGwgYmUgcmVtb3ZlZC5cblx0UmVtb3ZlRW1wdHlsaW5lcyA9PSB0cnVlIHdpbGwgcmVtb3ZlIGVtcHR5IGxpbmVzLlxuKi9cblxuXG5mdW5jdGlvbiBzcGxpdFRleHRTdHlsZUludG9MaW5lcyh0ZXh0U3R5bGUsIHJlbW92ZU5ld2xpbmVDaGFyYWN0ZXJzID0gZmFsc2UsIHJlbW92ZUVtcHR5bGluZXMgPSBmYWxzZSkge1xuICBsZXQgbGluZSA9IFtdO1xuICBsZXQgbGluZXMgPSBbXTtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoLit8KD88PVxcbikoLj8pKD89JCkpKFxcbnxcXHUyMDI4KT98KFxcbnxcXHUyMDI4KScsICdnJyk7XG4gIGNvbnN0IHJlMiA9IG5ldyBSZWdFeHAoJ1xcbnxcXHUyMDI4Jyk7XG4gIHRleHRTdHlsZS5mb3JFYWNoKChzdHlsZSwgaW5kZXgpID0+IHtcbiAgICBpZiAocmUyLnRlc3Qoc3R5bGUuY2hhcmFjdGVycykpIHtcbiAgICAgIGNvbnN0IGxzID0gc3R5bGUuY2hhcmFjdGVycy5tYXRjaChyZSk7XG5cbiAgICAgIGlmIChscyA9PT0gbnVsbCkge1xuICAgICAgICAvLyB0ZXh0IGlzIG1pc3NpbmdcbiAgICAgICAgbGluZS5wdXNoKHN0eWxlKTtcbiAgICAgIH0gZWxzZSBpZiAobHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIHRoZSBzdHlsZSB0ZXh0IGNvbnNpc3RzIG9mIDEgbGluZVxuICAgICAgICBsaW5lLnB1c2goc3R5bGUpO1xuICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICBsaW5lID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBtdWx0aXBsZS1saW5lIHRleHRcbiAgICAgICAgc3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkoc3R5bGUpO1xuICAgICAgICBzdHlsZS5jaGFyYWN0ZXJzID0gbHMuc2hpZnQoKTtcbiAgICAgICAgbGluZS5wdXNoKHN0eWxlKTtcbiAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgbGluZSA9IFtdO1xuICAgICAgICBjb25zdCBsYXN0ID0gbHMucG9wKCk7IC8vIGRlYWxpbmcgd2l0aCBpbnRlcm5hbCB0ZXh0IHN0cmluZ3NcblxuICAgICAgICBsaW5lcy5wdXNoKC4uLmxzLm1hcChlID0+IHtcbiAgICAgICAgICBzdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KShzdHlsZSk7XG4gICAgICAgICAgc3R5bGUuY2hhcmFjdGVycyA9IGU7XG4gICAgICAgICAgcmV0dXJuIFtzdHlsZV07XG4gICAgICAgIH0pKTtcbiAgICAgICAgc3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkoc3R5bGUpO1xuICAgICAgICBzdHlsZS5jaGFyYWN0ZXJzID0gbGFzdDtcblxuICAgICAgICBpZiAobGFzdCA9PT0gJycpIHtcbiAgICAgICAgICBpZiAoIXRleHRTdHlsZVtpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAvLyBsYXN0IGxpbmUgZmluYWxcbiAgICAgICAgICAgIGxpbmVzLnB1c2goW3N0eWxlXSk7XG4gICAgICAgICAgfSAvLyBlbHNlIGZhbHNlIGVuZCBvZiB0ZXh0XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkb2VzIG5vdCBlbmRcbiAgICAgICAgICBsaW5lLnB1c2goc3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmUucHVzaChzdHlsZSk7XG4gICAgfVxuICB9KTtcbiAgaWYgKGxpbmUubGVuZ3RoKSBsaW5lcy5wdXNoKGxpbmUpOyAvLyBkZWxldGluZyBuZXdsaW5lIGNoYXJhY3RlcnNcblxuICBpZiAocmVtb3ZlTmV3bGluZUNoYXJhY3RlcnMpIHtcbiAgICBsaW5lcy5mb3JFYWNoKGwgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSBsW2wubGVuZ3RoIC0gMV07XG4gICAgICBzdHlsZS5jaGFyYWN0ZXJzID0gc3R5bGUuY2hhcmFjdGVycy5yZXBsYWNlKHJlMiwgJycpO1xuICAgIH0pO1xuICB9IC8vIGRlbGV0aW5nIGVtcHR5IGxpbmVzXG5cblxuICBpZiAocmVtb3ZlRW1wdHlsaW5lcykge1xuICAgIGxpbmVzID0gbGluZXMuZmlsdGVyKGwgPT4gbC5maWx0ZXIobCA9PiBsLmNoYXJhY3RlcnMucmVwbGFjZShyZTIsICcnKSAhPT0gJycpLmxlbmd0aCAhPT0gMCk7XG4gIH1cblxuICByZXR1cm4gbGluZXM7XG59XG4vKlxuXHRJbnZlcnNlIGZ1bmN0aW9uIG9mIHNwbGl0VGV4dFN0eWxlSW50b0xpbmVzLlxuXHRUaGUgYWRkTmV3bGluZUNoYXJhY3RlcnMgcGFyYW1ldGVyIGlzIHJlc3BvbnNpYmxlIGZvciB3aGV0aGVyIHlvdSBuZWVkIHRvIGFkZCBhIG5ld2xpbmUgY2hhcmFjdGVyIGF0IHRoZSBlbmQgb2YgZWFjaCBsaW5lXG4qL1xuXG5cbmZ1bmN0aW9uIGpvaW5UZXh0TGluZXNTdHlsZXModGV4dFN0eWxlLCBhZGROZXdsaW5lQ2hhcmFjdGVycyA9IGZhbHNlKSB7XG4gIGNvbnN0IHRTdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KSh0ZXh0U3R5bGUpO1xuICBsZXQgbmV3bGluZSA9ICcnO1xuXG4gIHN3aXRjaCAodHlwZW9mIGFkZE5ld2xpbmVDaGFyYWN0ZXJzKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBpZiAoYWRkTmV3bGluZUNoYXJhY3RlcnMpIG5ld2xpbmUgPSAnXFxuJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIG5ld2xpbmUgPSBhZGROZXdsaW5lQ2hhcmFjdGVycztcbiAgICAgIGJyZWFrO1xuICB9IC8vIGFkZGluZyBuZXcgbGluZSBjaGFyYWN0ZXJzXG5cblxuICBpZiAoYWRkTmV3bGluZUNoYXJhY3RlcnMgJiYgbmV3bGluZSkge1xuICAgIHRTdHlsZS5mb3JFYWNoKChzdHlsZSwgaSkgPT4ge1xuICAgICAgaWYgKGkgIT09IHRTdHlsZS5sZW5ndGggLSAxKSBzdHlsZVtzdHlsZS5sZW5ndGggLSAxXS5jaGFyYWN0ZXJzICs9IG5ld2xpbmU7XG4gICAgfSk7XG4gIH0gLy8gam9pblxuXG5cbiAgY29uc3QgbGluZSA9IHRTdHlsZS5zaGlmdCgpO1xuICB0U3R5bGUuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgY29uc3QgZml0c3QgPSBzdHlsZS5zaGlmdCgpO1xuXG4gICAgaWYgKGlzRXF1YWxMZXR0ZXJTdHlsZShmaXRzdCwgbGluZVtsaW5lLmxlbmd0aCAtIDFdKSkge1xuICAgICAgLy8gdGhlIHN0eWxlIG9mIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpbmUgZGlmZmVycyBmcm9tIHRoZSBlbmQgb2YgdGhlIHN0eWxlIG9mIHRoZSB0ZXh0IGJlaW5nIGNvbXBpbGVkXG4gICAgICBsaW5lW2xpbmUubGVuZ3RoIC0gMV0uY2hhcmFjdGVycyArPSBmaXRzdC5jaGFyYWN0ZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lLnB1c2goZml0c3QpO1xuICAgIH1cblxuICAgIGlmIChzdHlsZS5sZW5ndGgpIGxpbmUucHVzaCguLi5zdHlsZSk7XG4gIH0pO1xuICByZXR1cm4gbGluZTtcbn1cbi8qXG5cdEFwcGx5IHRoZSB0ZXh0IHN0eWxlcyBvYnRhaW5lZCBmcm9tIHBhcnNlVGV4dFN0eWxlIHRvIHRoZSB0ZXh0IG5vZGUuXG5cdFRoZSBzZWNvbmQgcGFyYW1ldGVyIGNhbiBiZSBwYXNzZWQgYSB0ZXh0IG5vZGUsIHRoZSB0ZXh0IG9mIHdoaWNoIHdpbGwgYmUgY2hhbmdlZC5cbiovXG5cblxuYXN5bmMgZnVuY3Rpb24gYXBwbHlUZXh0U3R5bGVUb1RleHROb2RlKHRleHRTdHlsZSwgdGV4dE5vZGUsIGlzTG9hZEZvbnRzID0gdHJ1ZSkge1xuICBpZiAoaXNMb2FkRm9udHMpIHtcbiAgICBsZXQgZm9udHMgPSBbe1xuICAgICAgZmFtaWx5OiAnUm9ib3RvJyxcbiAgICAgIHN0eWxlOiAnUmVndWxhcidcbiAgICB9XTtcblxuICAgIGlmICh0ZXh0U3R5bGVbMF0uZm9udE5hbWUpIHtcbiAgICAgIGZvbnRzLnB1c2goLi4udGV4dFN0eWxlLm1hcChlID0+IGUuZm9udE5hbWUpKTtcbiAgICB9XG5cbiAgICBpZiAodGV4dE5vZGUpIHtcbiAgICAgIGZvbnRzLnB1c2goLi4uKDAsIF9nZXRBbGxGb250cy5kZWZhdWx0KShbdGV4dE5vZGVdKSk7XG4gICAgfVxuXG4gICAgZm9udHMgPSAoMCwgX3VuaXFXaXRoMi5kZWZhdWx0KShmb250cywgX2lzRXF1YWwyLmRlZmF1bHQpO1xuICAgIGF3YWl0ICgwLCBfbG9hZEZvbnRzLmRlZmF1bHQpKGZvbnRzKTtcbiAgfVxuXG4gIGlmICghdGV4dE5vZGUpIHRleHROb2RlID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICB0ZXh0Tm9kZS5jaGFyYWN0ZXJzID0gdGV4dFN0eWxlLnJlZHVjZSgoc3RyLCBzdHlsZSkgPT4ge1xuICAgIHJldHVybiBzdHIgKyBzdHlsZS5jaGFyYWN0ZXJzO1xuICB9LCAnJyk7XG4gIGxldCBuID0gMDtcbiAgdGV4dFN0eWxlLmZvckVhY2goc3R5bGUgPT4ge1xuICAgIGNvbnN0IEwgPSBzdHlsZS5jaGFyYWN0ZXJzLmxlbmd0aDtcblxuICAgIGlmIChMKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgICAgICBpZiAoa2V5ICE9PSAnY2hhcmFjdGVycycpIHtcbiAgICAgICAgICBjb25zdCBuYW1lID0ga2V5LnJlcGxhY2UoL14oLikvZywgJDEgPT4gJDEudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgdGV4dE5vZGVbJ3NldFJhbmdlJyArIG5hbWVdKG4sIG4gKyBMLCBzdHlsZVtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuICs9IEw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRleHROb2RlO1xufVxuLypcblx0UmVwbGFjaW5nIHRleHQgaW4gdGV4dFN0eWxlXG5cdElmIHRoZSBwYXNzZWQgdGV4dCBpcyBzaG9ydGVyIHRoYW4gaW4gc3R5bGVzLCB0aGUgZXh0cmEgc3R5bGVzIHdpbGwgYmUgcmVtb3ZlZC5cblx0SWYgdGhlIHBhc3NlZCB0ZXh0IGlzIGxvbmdlciB0aGFuIHRoZSBzdHlsZXMsIHRoZSBvdmVyZmxvdyB0ZXh0IHdpbGwgZ2V0IHRoZSBzdHlsZSBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIuXG4qL1xuXG5cbmZ1bmN0aW9uIGNoYW5nZUNoYXJhY3RlcnNUZXh0U3R5bGUodGV4dFN0eWxlLCBjaGFyYWN0ZXJzKSB7XG4gIHRleHRTdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KSh0ZXh0U3R5bGUpO1xuICBsZXQgbiA9IDA7XG4gIGNvbnN0IGxlbmd0aCA9IHRleHRTdHlsZS5sZW5ndGggLSAxO1xuICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzID0gdGV4dFN0eWxlW2ldO1xuICAgIGxldCBsID0gcy5jaGFyYWN0ZXJzLmxlbmd0aDsgLy8gaWYgcGFzc2VkIHRleHQgaXMgbG9uZ2VyIHRoYW4gdGV4dCBpbiBzdHlsZXNcblxuICAgIGlmIChpID09IGxlbmd0aCkgbCA9IGNoYXJhY3RlcnNMZW5ndGg7XG4gICAgcy5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycy5zbGljZShuLCBuICsgbCk7XG4gICAgbiArPSBsO1xuXG4gICAgaWYgKG4gPiBjaGFyYWN0ZXJzTGVuZ3RoKSB7XG4gICAgICAvLyBuZXcgdGV4dCBpcyBzaG9ydGVyIHRoYW4gdGV4dCBpbiBzdHlsZXNcbiAgICAgIHRleHRTdHlsZSA9IHRleHRTdHlsZS5zcGxpY2UoMCwgaSArIDEpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRleHRTdHlsZTtcbn1cbi8qXG5cdEZ1bmN0aW9uIGZvciBjaGFuZ2luZyBwcm9wZXJ0aWVzIG9mIFRleHRTdHlsZS4gXG5cdFRoZSBiZWZvcmVWYWx1ZSBwYXJhbWV0ZXIgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSB2YWx1ZSBpbiB3aGljaCB0aGUgcHJvcGVydHkgdG8gYmUgY2hhbmdlZCBzaG91bGQgYmUuXG4qL1xuXG5cbmZ1bmN0aW9uIGNoYW5nZVRleHRTdHlsZSh0ZXh0U3R5bGUsIHN0eWxlTmFtZSwgbmV3VmFsdWUsIGJlZm9yZVZhbHVlKSB7XG4gIHRleHRTdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KSh0ZXh0U3R5bGUpO1xuICB0ZXh0U3R5bGUuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgaWYgKGJlZm9yZVZhbHVlID09PSB1bmRlZmluZWQgfHwgYmVmb3JlVmFsdWUgIT09IHVuZGVmaW5lZCAmJiAoMCwgX2lzRXF1YWwyLmRlZmF1bHQpKHN0eWxlW3N0eWxlTmFtZV0sIGJlZm9yZVZhbHVlKSkge1xuICAgICAgO1xuICAgICAgc3R5bGVbc3R5bGVOYW1lXSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0ZXh0U3R5bGU7XG59XG4vKmNvbXBhcmluZyBjaGFyYWN0ZXIgc3R5bGVzIHRvIHRoZSBzdHlsZXMgb2YgdGhlIGNvbXBvc2luZyBzdWJzdHJpbmcqL1xuXG5cbmZ1bmN0aW9uIGlzRXF1YWxMZXR0ZXJTdHlsZShsZXR0ZXIsIHRleHRTdHlsZSkge1xuICBsZXQgaXMgPSB0cnVlOyAvLyBpdGVyYXRpbmcgb3ZlciBmb250IHByb3BlcnRpZXNcblxuICBmb3IgKGNvbnN0IGtleSBpbiBsZXR0ZXIpIHtcbiAgICBpZiAoa2V5ICE9PSAnY2hhcmFjdGVycycpIHtcbiAgICAgIGlmICghKDAsIF9pc0VxdWFsMi5kZWZhdWx0KShsZXR0ZXJba2V5XSwgdGV4dFN0eWxlW2tleV0pKSB7XG4gICAgICAgIC8vIHByb3BlcnR5IHZhcmllc1xuICAgICAgICAvLyBzdG9wIHNlYXJjaGluZ1xuICAgICAgICBpcyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXM7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNldENoYXJhY3RlcnMgPSB2b2lkIDA7XG5cbnZhciBfdW5pcUJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC91bmlxQnlcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBzZXRDaGFyYWN0ZXJzID0gYXN5bmMgKG5vZGUsIGNoYXJhY3RlcnMsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZmFsbGJhY2tGb250ID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5mYWxsYmFja0ZvbnQpIHx8IHtcbiAgICBmYW1pbHk6ICdSb2JvdG8nLFxuICAgIHN0eWxlOiAnUmVndWxhcidcbiAgfTtcblxuICB0cnkge1xuICAgIGlmIChub2RlLmZvbnROYW1lID09PSBmaWdtYS5taXhlZCkge1xuICAgICAgaWYgKChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc21hcnRTdHJhdGVneSkgPT09ICdwcmV2YWlsJykge1xuICAgICAgICBjb25zdCBmb250SGFzaFRyZWUgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGNoYXJGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKGkgLSAxLCBpKTtcbiAgICAgICAgICBjb25zdCBrZXkgPSBgJHtjaGFyRm9udC5mYW1pbHl9Ojoke2NoYXJGb250LnN0eWxlfWA7XG4gICAgICAgICAgZm9udEhhc2hUcmVlW2tleV0gPSBmb250SGFzaFRyZWVba2V5XSA/IGZvbnRIYXNoVHJlZVtrZXldICsgMSA6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2YWlsZWRUcmVlSXRlbSA9IE9iamVjdC5lbnRyaWVzKGZvbnRIYXNoVHJlZSkuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pWzBdO1xuICAgICAgICBjb25zdCBbZmFtaWx5LCBzdHlsZV0gPSBwcmV2YWlsZWRUcmVlSXRlbVswXS5zcGxpdCgnOjonKTtcbiAgICAgICAgY29uc3QgcHJldmFpbGVkRm9udCA9IHtcbiAgICAgICAgICBmYW1pbHksXG4gICAgICAgICAgc3R5bGVcbiAgICAgICAgfTtcbiAgICAgICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhwcmV2YWlsZWRGb250KTtcbiAgICAgICAgbm9kZS5mb250TmFtZSA9IHByZXZhaWxlZEZvbnQ7XG4gICAgICB9IGVsc2UgaWYgKChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc21hcnRTdHJhdGVneSkgPT09ICdzdHJpY3QnKSB7XG4gICAgICAgIHJldHVybiBzZXRDaGFyYWN0ZXJzV2l0aFN0cmljdE1hdGNoRm9udChub2RlLCBjaGFyYWN0ZXJzLCBmYWxsYmFja0ZvbnQpO1xuICAgICAgfSBlbHNlIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNtYXJ0U3RyYXRlZ3kpID09PSAnZXhwZXJpbWVudGFsJykge1xuICAgICAgICByZXR1cm4gc2V0Q2hhcmFjdGVyc1dpdGhTbWFydE1hdGNoRm9udChub2RlLCBjaGFyYWN0ZXJzLCBmYWxsYmFja0ZvbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlyc3RDaGFyRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZSgwLCAxKTtcbiAgICAgICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhmaXJzdENoYXJGb250KTtcbiAgICAgICAgbm9kZS5mb250TmFtZSA9IGZpcnN0Q2hhckZvbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoe1xuICAgICAgICBmYW1pbHk6IG5vZGUuZm9udE5hbWUuZmFtaWx5LFxuICAgICAgICBzdHlsZTogbm9kZS5mb250TmFtZS5zdHlsZVxuICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLndhcm4oYEZhaWxlZCB0byBsb2FkIFwiJHtub2RlLmZvbnROYW1lWydmYW1pbHknXX0gJHtub2RlLmZvbnROYW1lWydzdHlsZSddfVwiIGZvbnQgYW5kIHJlcGxhY2VkIHdpdGggZmFsbGJhY2sgXCIke2ZhbGxiYWNrRm9udC5mYW1pbHl9ICR7ZmFsbGJhY2tGb250LnN0eWxlfVwiYCwgZXJyKTtcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKGZhbGxiYWNrRm9udCk7XG4gICAgbm9kZS5mb250TmFtZSA9IGZhbGxiYWNrRm9udDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbm9kZS5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKGBGYWlsZWQgdG8gc2V0IGNoYXJhY3RlcnMuIFNraXBwZWQuYCwgZXJyKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydHMuc2V0Q2hhcmFjdGVycyA9IHNldENoYXJhY3RlcnM7XG5cbmNvbnN0IHNldENoYXJhY3RlcnNXaXRoU3RyaWN0TWF0Y2hGb250ID0gYXN5bmMgKG5vZGUsIGNoYXJhY3RlcnMsIGZhbGxiYWNrRm9udCkgPT4ge1xuICBjb25zdCBmb250SGFzaFRyZWUgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN0YXJ0SWR4ID0gaSAtIDE7XG4gICAgY29uc3Qgc3RhcnRDaGFyRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShzdGFydElkeCwgaSk7XG4gICAgY29uc3Qgc3RhcnRDaGFyRm9udFZhbCA9IGAke3N0YXJ0Q2hhckZvbnQuZmFtaWx5fTo6JHtzdGFydENoYXJGb250LnN0eWxlfWA7XG5cbiAgICB3aGlsZSAoaSA8IG5vZGUuY2hhcmFjdGVycy5sZW5ndGgpIHtcbiAgICAgIGkrKztcbiAgICAgIGNvbnN0IGNoYXJGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKGkgLSAxLCBpKTtcblxuICAgICAgaWYgKHN0YXJ0Q2hhckZvbnRWYWwgIT09IGAke2NoYXJGb250LmZhbWlseX06OiR7Y2hhckZvbnQuc3R5bGV9YCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb250SGFzaFRyZWVbYCR7c3RhcnRJZHh9XyR7aX1gXSA9IHN0YXJ0Q2hhckZvbnRWYWw7XG4gIH1cblxuICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKGZhbGxiYWNrRm9udCk7XG4gIG5vZGUuZm9udE5hbWUgPSBmYWxsYmFja0ZvbnQ7XG4gIG5vZGUuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG4gIGNvbnNvbGUubG9nKGZvbnRIYXNoVHJlZSk7XG4gIGF3YWl0IFByb21pc2UuYWxsKE9iamVjdC5rZXlzKGZvbnRIYXNoVHJlZSkubWFwKGFzeW5jIHJhbmdlID0+IHtcbiAgICBjb25zb2xlLmxvZyhyYW5nZSwgZm9udEhhc2hUcmVlW3JhbmdlXSk7XG4gICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gcmFuZ2Uuc3BsaXQoJ18nKTtcbiAgICBjb25zdCBbZmFtaWx5LCBzdHlsZV0gPSBmb250SGFzaFRyZWVbcmFuZ2VdLnNwbGl0KCc6OicpO1xuICAgIGNvbnN0IG1hdGNoZWRGb250ID0ge1xuICAgICAgZmFtaWx5LFxuICAgICAgc3R5bGVcbiAgICB9O1xuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMobWF0Y2hlZEZvbnQpO1xuICAgIHJldHVybiBub2RlLnNldFJhbmdlRm9udE5hbWUoTnVtYmVyKHN0YXJ0KSwgTnVtYmVyKGVuZCksIG1hdGNoZWRGb250KTtcbiAgfSkpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGdldERlbGltaXRlclBvcyA9IChzdHIsIGRlbGltaXRlciwgc3RhcnRJZHggPSAwLCBlbmRJZHggPSBzdHIubGVuZ3RoKSA9PiB7XG4gIGNvbnN0IGluZGljZXMgPSBbXTtcbiAgbGV0IHRlbXAgPSBzdGFydElkeDtcblxuICBmb3IgKGxldCBpID0gc3RhcnRJZHg7IGkgPCBlbmRJZHg7IGkrKykge1xuICAgIGlmIChzdHJbaV0gPT09IGRlbGltaXRlciAmJiBpICsgc3RhcnRJZHggIT09IGVuZElkeCAmJiB0ZW1wICE9PSBpICsgc3RhcnRJZHgpIHtcbiAgICAgIGluZGljZXMucHVzaChbdGVtcCwgaSArIHN0YXJ0SWR4XSk7XG4gICAgICB0ZW1wID0gaSArIHN0YXJ0SWR4ICsgMTtcbiAgICB9XG4gIH1cblxuICB0ZW1wICE9PSBlbmRJZHggJiYgaW5kaWNlcy5wdXNoKFt0ZW1wLCBlbmRJZHhdKTtcbiAgcmV0dXJuIGluZGljZXMuZmlsdGVyKEJvb2xlYW4pO1xufTtcblxuY29uc3QgYnVpbGRMaW5lYXJPcmRlciA9IG5vZGUgPT4ge1xuICBjb25zdCBmb250VHJlZSA9IFtdO1xuICBjb25zdCBuZXdMaW5lc1BvcyA9IGdldERlbGltaXRlclBvcyhub2RlLmNoYXJhY3RlcnMsICdcXG4nKTtcbiAgbmV3TGluZXNQb3MuZm9yRWFjaCgoW25ld0xpbmVzUmFuZ2VTdGFydCwgbmV3TGluZXNSYW5nZUVuZF0sIG4pID0+IHtcbiAgICBjb25zdCBuZXdMaW5lc1JhbmdlRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShuZXdMaW5lc1JhbmdlU3RhcnQsIG5ld0xpbmVzUmFuZ2VFbmQpO1xuXG4gICAgaWYgKG5ld0xpbmVzUmFuZ2VGb250ID09PSBmaWdtYS5taXhlZCkge1xuICAgICAgY29uc3Qgc3BhY2VzUG9zID0gZ2V0RGVsaW1pdGVyUG9zKG5vZGUuY2hhcmFjdGVycywgJyAnLCBuZXdMaW5lc1JhbmdlU3RhcnQsIG5ld0xpbmVzUmFuZ2VFbmQpO1xuICAgICAgc3BhY2VzUG9zLmZvckVhY2goKFtzcGFjZXNSYW5nZVN0YXJ0LCBzcGFjZXNSYW5nZUVuZF0sIHMpID0+IHtcbiAgICAgICAgY29uc3Qgc3BhY2VzUmFuZ2VGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKHNwYWNlc1JhbmdlU3RhcnQsIHNwYWNlc1JhbmdlRW5kKTtcblxuICAgICAgICBpZiAoc3BhY2VzUmFuZ2VGb250ID09PSBmaWdtYS5taXhlZCkge1xuICAgICAgICAgIGNvbnN0IHNwYWNlc1JhbmdlRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShzcGFjZXNSYW5nZVN0YXJ0LCBzcGFjZXNSYW5nZVN0YXJ0WzBdKTtcbiAgICAgICAgICBmb250VHJlZS5wdXNoKHtcbiAgICAgICAgICAgIHN0YXJ0OiBzcGFjZXNSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgZGVsaW1pdGVyOiAnICcsXG4gICAgICAgICAgICBmYW1pbHk6IHNwYWNlc1JhbmdlRm9udC5mYW1pbHksXG4gICAgICAgICAgICBzdHlsZTogc3BhY2VzUmFuZ2VGb250LnN0eWxlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9udFRyZWUucHVzaCh7XG4gICAgICAgICAgICBzdGFydDogc3BhY2VzUmFuZ2VTdGFydCxcbiAgICAgICAgICAgIGRlbGltaXRlcjogJyAnLFxuICAgICAgICAgICAgZmFtaWx5OiBzcGFjZXNSYW5nZUZvbnQuZmFtaWx5LFxuICAgICAgICAgICAgc3R5bGU6IHNwYWNlc1JhbmdlRm9udC5zdHlsZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9udFRyZWUucHVzaCh7XG4gICAgICAgIHN0YXJ0OiBuZXdMaW5lc1JhbmdlU3RhcnQsXG4gICAgICAgIGRlbGltaXRlcjogJ1xcbicsXG4gICAgICAgIGZhbWlseTogbmV3TGluZXNSYW5nZUZvbnQuZmFtaWx5LFxuICAgICAgICBzdHlsZTogbmV3TGluZXNSYW5nZUZvbnQuc3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmb250VHJlZS5zb3J0KChhLCBiKSA9PiArYS5zdGFydCAtICtiLnN0YXJ0KS5tYXAoKHtcbiAgICBmYW1pbHksXG4gICAgc3R5bGUsXG4gICAgZGVsaW1pdGVyXG4gIH0pID0+ICh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlLFxuICAgIGRlbGltaXRlclxuICB9KSk7XG59O1xuXG5jb25zdCBzZXRDaGFyYWN0ZXJzV2l0aFNtYXJ0TWF0Y2hGb250ID0gYXN5bmMgKG5vZGUsIGNoYXJhY3RlcnMsIGZhbGxiYWNrRm9udCkgPT4ge1xuICBjb25zdCByYW5nZVRyZWUgPSBidWlsZExpbmVhck9yZGVyKG5vZGUpO1xuICBjb25zdCBmb250c1RvTG9hZCA9ICgwLCBfdW5pcUJ5Mi5kZWZhdWx0KShyYW5nZVRyZWUsICh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlXG4gIH0pID0+IGAke2ZhbWlseX06OiR7c3R5bGV9YCkubWFwKCh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlXG4gIH0pID0+ICh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlXG4gIH0pKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoWy4uLmZvbnRzVG9Mb2FkLCBmYWxsYmFja0ZvbnRdLm1hcChmaWdtYS5sb2FkRm9udEFzeW5jKSk7XG4gIG5vZGUuZm9udE5hbWUgPSBmYWxsYmFja0ZvbnQ7XG4gIG5vZGUuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG4gIGxldCBwcmV2UG9zID0gMDtcbiAgcmFuZ2VUcmVlLmZvckVhY2goKHtcbiAgICBmYW1pbHksXG4gICAgc3R5bGUsXG4gICAgZGVsaW1pdGVyXG4gIH0pID0+IHtcbiAgICBpZiAocHJldlBvcyA8IG5vZGUuY2hhcmFjdGVycy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGRlbGltZXRlclBvcyA9IG5vZGUuY2hhcmFjdGVycy5pbmRleE9mKGRlbGltaXRlciwgcHJldlBvcyk7XG4gICAgICBjb25zdCBlbmRQb3MgPSBkZWxpbWV0ZXJQb3MgPiBwcmV2UG9zID8gZGVsaW1ldGVyUG9zIDogbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICAgIGNvbnN0IG1hdGNoZWRGb250ID0ge1xuICAgICAgICBmYW1pbHksXG4gICAgICAgIHN0eWxlXG4gICAgICB9O1xuICAgICAgbm9kZS5zZXRSYW5nZUZvbnROYW1lKHByZXZQb3MsIGVuZFBvcywgbWF0Y2hlZEZvbnQpO1xuICAgICAgcHJldlBvcyA9IGVuZFBvcyArIDE7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRydWU7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9wTGV2ZWxGcmFtZXM7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiByZXR1cm5zIGFsbCB0b3AgbGV2ZWwgZnJhbWVzIG9uIGN1cnJlbnRQYWdlXG4gKi9cbmZ1bmN0aW9uIHRvcExldmVsRnJhbWVzKHBhZ2UgPSBmaWdtYS5jdXJyZW50UGFnZSkge1xuICByZXR1cm4gcGFnZS5jaGlsZHJlbi5maWx0ZXIobm9kZSA9PiBub2RlLnR5cGUgPT09ICdGUkFNRScpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY2xvbmVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2Nsb25lLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0QWxsRm9udHNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldEFsbEZvbnRzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0Qm91bmRpbmdSZWN0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRCb3VuZGluZ1JlY3QuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXROb2RlSW5kZXhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldE5vZGVJbmRleC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldFBhZ2VcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldFBhZ2UuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJoYXNDaGlsZHJlblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaGFzQ2hpbGRyZW4uaGFzQ2hpbGRyZW47XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNQYXJ0T2ZJbnN0YW5jZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNQYXJ0T2ZJbnN0YW5jZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzUGFydE9mTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNQYXJ0T2ZOb2RlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNWaXNpYmxlTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNWaXNpYmxlTm9kZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImxvYWRVbmlxdWVGb250c1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfbG9hZFVuaXF1ZUZvbnRzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibG9hZEZvbnRzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9sb2FkRm9udHMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJub2RlVG9PYmplY3RcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX25vZGVUb09iamVjdC5ub2RlVG9PYmplY3Q7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidG9wTGV2ZWxGcmFtZXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RvcExldmVsRnJhbWVzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0VGV4dE5vZGVDU1NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldENTU1N0eWxlcy5nZXRUZXh0Tm9kZUNTUztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmaW5kQWxsXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9maW5kTWV0aG9kcy5maW5kQWxsO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldFJlbGF0aXZlUG9zaXRpb25cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldFJlbGF0aXZlUG9zaXRpb24uZ2V0UmVsYXRpdmVQb3NpdGlvbjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRUb3BMZXZlbFBhcmVudFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0UmVsYXRpdmVQb3NpdGlvbi5nZXRUb3BMZXZlbFBhcmVudDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmaWdtYVJHQlRvV2ViUkdCXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0Q29sb3IuZmlnbWFSR0JUb1dlYlJHQjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3ZWJSR0JUb0ZpZ21hUkdCXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0Q29sb3Iud2ViUkdCVG9GaWdtYVJHQjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmaWdtYVJHQlRvSGV4XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0Q29sb3IuZmlnbWFSR0JUb0hleDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJoZXhUb0ZpZ21hUkdCXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0Q29sb3IuaGV4VG9GaWdtYVJHQjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0NvbXBvbmVudE5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNDb21wb25lbnROb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzRnJhbWVOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzRnJhbWVOb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzR3JvdXBOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzR3JvdXBOb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzSW5zdGFuY2VOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzSW5zdGFuY2VOb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzUGFnZU5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNQYWdlTm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1RleHROb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzVGV4dE5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNPbmVPZk5vZGVUeXBlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzT25lT2ZOb2RlVHlwZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJleHRyYWN0SW1hZ2VDcm9wUGFyYW1zXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zLmV4dHJhY3RJbWFnZUNyb3BQYXJhbXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZXh0cmFjdExpbmVhckdyYWRpZW50U3RhcnRFbmQuZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJleHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcy5leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2V0Q2hhcmFjdGVyc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfc2V0Q2hhcmFjdGVycy5zZXRDaGFyYWN0ZXJzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlVGV4dFN0eWxlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5wYXJzZVRleHRTdHlsZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzcGxpdFRleHRTdHlsZUludG9MaW5lc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUuc3BsaXRUZXh0U3R5bGVJbnRvTGluZXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiam9pblRleHRMaW5lc1N0eWxlc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUuam9pblRleHRMaW5lc1N0eWxlcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhcHBseVRleHRTdHlsZVRvVGV4dE5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLmFwcGx5VGV4dFN0eWxlVG9UZXh0Tm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjaGFuZ2VDaGFyYWN0ZXJzVGV4dFN0eWxlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5jaGFuZ2VDaGFyYWN0ZXJzVGV4dFN0eWxlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNoYW5nZVRleHRTdHlsZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUuY2hhbmdlVGV4dFN0eWxlO1xuICB9XG59KTtcblxudmFyIF9jbG9uZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9jbG9uZVwiKSk7XG5cbnZhciBfZ2V0QWxsRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0QWxsRm9udHNcIikpO1xuXG52YXIgX2dldEJvdW5kaW5nUmVjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9nZXRCb3VuZGluZ1JlY3RcIikpO1xuXG52YXIgX2dldE5vZGVJbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9nZXROb2RlSW5kZXhcIikpO1xuXG52YXIgX2dldFBhZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0UGFnZVwiKSk7XG5cbnZhciBfaGFzQ2hpbGRyZW4gPSByZXF1aXJlKFwiLi9oZWxwZXJzL2hhc0NoaWxkcmVuXCIpO1xuXG52YXIgX2lzUGFydE9mSW5zdGFuY2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvaXNQYXJ0T2ZJbnN0YW5jZVwiKSk7XG5cbnZhciBfaXNQYXJ0T2ZOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2lzUGFydE9mTm9kZVwiKSk7XG5cbnZhciBfaXNWaXNpYmxlTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9pc1Zpc2libGVOb2RlXCIpKTtcblxudmFyIF9sb2FkVW5pcXVlRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvbG9hZFVuaXF1ZUZvbnRzXCIpKTtcblxudmFyIF9sb2FkRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvbG9hZEZvbnRzXCIpKTtcblxudmFyIF9ub2RlVG9PYmplY3QgPSByZXF1aXJlKFwiLi9oZWxwZXJzL25vZGVUb09iamVjdFwiKTtcblxudmFyIF90b3BMZXZlbEZyYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy90b3BMZXZlbEZyYW1lc1wiKSk7XG5cbnZhciBfZ2V0Q1NTU3R5bGVzID0gcmVxdWlyZShcIi4vaGVscGVycy9nZXRDU1NTdHlsZXNcIik7XG5cbnZhciBfZmluZE1ldGhvZHMgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2ZpbmRNZXRob2RzXCIpO1xuXG52YXIgX2dldFJlbGF0aXZlUG9zaXRpb24gPSByZXF1aXJlKFwiLi9oZWxwZXJzL2dldFJlbGF0aXZlUG9zaXRpb25cIik7XG5cbnZhciBfY29udmVydENvbG9yID0gcmVxdWlyZShcIi4vaGVscGVycy9jb252ZXJ0Q29sb3JcIik7XG5cbnZhciBfaXNUeXBlTm9kZSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvaXNUeXBlTm9kZVwiKTtcblxudmFyIF9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zID0gcmVxdWlyZShcIi4vaGVscGVycy9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zXCIpO1xuXG52YXIgX2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kID0gcmVxdWlyZShcIi4vaGVscGVycy9leHRyYWN0TGluZWFyR3JhZGllbnRTdGFydEVuZFwiKTtcblxudmFyIF9leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXMgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtc1wiKTtcblxudmFyIF9zZXRDaGFyYWN0ZXJzID0gcmVxdWlyZShcIi4vaGVscGVycy9zZXRDaGFyYWN0ZXJzXCIpO1xuXG52YXIgX3BhcnNlVGV4dFN0eWxlID0gcmVxdWlyZShcIi4vaGVscGVycy9wYXJzZVRleHRTdHlsZVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG4iLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcbiIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG4iLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbjtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25JbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduSW47XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25WYWx1ZTtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduJyksXG4gICAgYmFzZUFzc2lnbkluID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbkluJyksXG4gICAgY2xvbmVCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUJ1ZmZlcicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGNvcHlTeW1ib2xzID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHMnKSxcbiAgICBjb3B5U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHNJbicpLFxuICAgIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyksXG4gICAgZ2V0QWxsS2V5c0luID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5c0luJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVBcnJheScpLFxuICAgIGluaXRDbG9uZUJ5VGFnID0gcmVxdWlyZSgnLi9faW5pdENsb25lQnlUYWcnKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNNYXAgPSByZXF1aXJlKCcuL2lzTWFwJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTZXQgPSByZXF1aXJlKCcuL2lzU2V0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihzdWJWYWx1ZSkge1xuICAgICAgcmVzdWx0LmFkZChiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN1YlZhbHVlLCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc01hcCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDEgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbmRJbmRleDtcbiIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhc0luO1xuIiwidmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUlzTmFOID0gcmVxdWlyZSgnLi9fYmFzZUlzTmFOJyksXG4gICAgc3RyaWN0SW5kZXhPZiA9IHJlcXVpcmUoJy4vX3N0cmljdEluZGV4T2YnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IGBmcm9tSW5kZXhgIGJvdW5kcyBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZVxuICAgID8gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleClcbiAgICA6IGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJc05hTiwgZnJvbUluZGV4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW5kZXhPZjtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuIiwidmFyIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hcGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBtYXAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWFwKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gbWFwVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hcDtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYU5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbnVtYmVyIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmFOO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcbiIsInZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc2V0VGFnID0gJ1tvYmplY3QgU2V0XSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNTZXRgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1NldCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IHNldFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNTZXQ7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcbiIsInZhciBiYXNlTWF0Y2hlcyA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzJyksXG4gICAgYmFzZU1hdGNoZXNQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgcHJvcGVydHkgPSByZXF1aXJlKCcuL3Byb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXRlcmF0ZWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhbiBpdGVyYXRlZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgaXRlcmF0ZWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJdGVyYXRlZSh2YWx1ZSkge1xuICAvLyBEb24ndCBzdG9yZSB0aGUgYHR5cGVvZmAgcmVzdWx0IGluIGEgdmFyaWFibGUgdG8gYXZvaWQgYSBKSVQgYnVnIGluIFNhZmFyaSA5LlxuICAvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NjAzNCBmb3IgbW9yZSBkZXRhaWxzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKVxuICAgICAgPyBiYXNlTWF0Y2hlc1Byb3BlcnR5KHZhbHVlWzBdLCB2YWx1ZVsxXSlcbiAgICAgIDogYmFzZU1hdGNoZXModmFsdWUpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUl0ZXJhdGVlO1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXNJbiA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXNJbicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzSW47XG4iLCJ2YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL19iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hdGNoRGF0YScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzYCB3aGljaCBkb2Vzbid0IGNsb25lIGBzb3VyY2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgaWYgKG1hdGNoRGF0YS5sZW5ndGggPT0gMSAmJiBtYXRjaERhdGFbMF1bMl0pIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUobWF0Y2hEYXRhWzBdWzBdLCBtYXRjaERhdGFbMF1bMV0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09PSBzb3VyY2UgfHwgYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG4iLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpLFxuICAgIGdldCA9IHJlcXVpcmUoJy4vZ2V0JyksXG4gICAgaGFzSW4gPSByZXF1aXJlKCcuL2hhc0luJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzUHJvcGVydHlgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNyY1ZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICBpZiAoaXNLZXkocGF0aCkgJiYgaXNTdHJpY3RDb21wYXJhYmxlKHNyY1ZhbHVlKSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSh0b0tleShwYXRoKSwgc3JjVmFsdWUpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIgb2JqVmFsdWUgPSBnZXQob2JqZWN0LCBwYXRoKTtcbiAgICByZXR1cm4gKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgb2JqVmFsdWUgPT09IHNyY1ZhbHVlKVxuICAgICAgPyBoYXNJbihvYmplY3QsIHBhdGgpXG4gICAgICA6IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlc1Byb3BlcnR5O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG4iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VQcm9wZXJ0eWAgd2hpY2ggc3VwcG9ydHMgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5RGVlcDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcbiIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpLFxuICAgIGNyZWF0ZVNldCA9IHJlcXVpcmUoJy4vX2NyZWF0ZVNldCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmlxKGFycmF5LCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgc2VlbiA9IHJlc3VsdDtcblxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgfVxuICBlbHNlIGlmIChsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xuICAgIGlmIChzZXQpIHtcbiAgICAgIHJldHVybiBzZXRUb0FycmF5KHNldCk7XG4gICAgfVxuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xuICB9XG4gIGVsc2Uge1xuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xuICAgICAgd2hpbGUgKHNlZW5JbmRleC0tKSB7XG4gICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICghaW5jbHVkZXMoc2VlbiwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICBpZiAoc2VlbiAhPT0gcmVzdWx0KSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuIiwidmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUFycmF5QnVmZmVyO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURhdGFWaWV3O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVJlZ0V4cDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU3ltYm9sO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9scyhzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9scztcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpO1xuXG4vKipcbiAqIENvcGllcyBvd24gYW5kIGluaGVyaXRlZCBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9sc0luKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9sc0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHNJbjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG4iLCJ2YXIgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgbm9vcCA9IHJlcXVpcmUoJy4vbm9vcCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvYmplY3Qgb2YgYHZhbHVlc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFkZCB0byB0aGUgc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IHNldC5cbiAqL1xudmFyIGNyZWF0ZVNldCA9ICEoU2V0ICYmICgxIC8gc2V0VG9BcnJheShuZXcgU2V0KFssLTBdKSlbMV0pID09IElORklOSVRZKSA/IG5vb3AgOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBTZXQodmFsdWVzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2V0O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcbiIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIENoZWNrIHRoYXQgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBhcnJTdGFja2VkID0gc3RhY2suZ2V0KGFycmF5KTtcbiAgdmFyIG90aFN0YWNrZWQgPSBzdGFjay5nZXQob3RoZXIpO1xuICBpZiAoYXJyU3RhY2tlZCAmJiBvdGhTdGFja2VkKSB7XG4gICAgcmV0dXJuIGFyclN0YWNrZWQgPT0gb3RoZXIgJiYgb3RoU3RhY2tlZCA9PSBhcnJheTtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG4iLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgdGhhdCBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIG9ialN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgdmFyIG90aFN0YWNrZWQgPSBzdGFjay5nZXQob3RoZXIpO1xuICBpZiAob2JqU3RhY2tlZCAmJiBvdGhTdGFja2VkKSB7XG4gICAgcmV0dXJuIG9ialN0YWNrZWQgPT0gb3RoZXIgJiYgb3RoU3RhY2tlZCA9PSBvYmplY3Q7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0luLCBnZXRTeW1ib2xzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXNJbjtcbiIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG4iLCJ2YXIgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdmFyIGtleSA9IHJlc3VsdFtsZW5ndGhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgcmVzdWx0W2xlbmd0aF0gPSBba2V5LCB2YWx1ZSwgaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXRjaERhdGE7XG4iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9sc0luID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAob2JqZWN0KSB7XG4gICAgYXJyYXlQdXNoKHJlc3VsdCwgZ2V0U3ltYm9scyhvYmplY3QpKTtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGUob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzSW47XG4iLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG4iLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcbiIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgZXhpc3RzIG9uIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgaGFzRnVuYykge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gdG9LZXkocGF0aFtpbmRleF0pO1xuICAgIGlmICghKHJlc3VsdCA9IG9iamVjdCAhPSBudWxsICYmIGhhc0Z1bmMob2JqZWN0LCBrZXkpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICB9XG4gIGlmIChyZXN1bHQgfHwgKytpbmRleCAhPSBsZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGxlbmd0aCA9IG9iamVjdCA9PSBudWxsID8gMCA6IG9iamVjdC5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNQYXRoO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUFycmF5KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBuZXcgYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQXJyYXk7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKSxcbiAgICBjbG9uZURhdGFWaWV3ID0gcmVxdWlyZSgnLi9fY2xvbmVEYXRhVmlldycpLFxuICAgIGNsb25lUmVnRXhwID0gcmVxdWlyZSgnLi9fY2xvbmVSZWdFeHAnKSxcbiAgICBjbG9uZVN5bWJvbCA9IHJlcXVpcmUoJy4vX2Nsb25lU3ltYm9sJyksXG4gICAgY2xvbmVUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fY2xvbmVUeXBlZEFycmF5Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBNYXBgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIGBTZXRgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3I7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUJ5VGFnO1xuIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpZiBzdWl0YWJsZSBmb3Igc3RyaWN0XG4gKiAgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmljdENvbXBhcmFibGU7XG4iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG4iLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYG1hdGNoZXNQcm9wZXJ0eWAgZm9yIHNvdXJjZSB2YWx1ZXMgc3VpdGFibGVcbiAqIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShrZXksIHNyY1ZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSBzcmNWYWx1ZSAmJlxuICAgICAgKHNyY1ZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiBPYmplY3Qob2JqZWN0KSkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlO1xuIiwidmFyIG1lbW9pemUgPSByZXF1aXJlKCcuL21lbW9pemUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIG1heGltdW0gbWVtb2l6ZSBjYWNoZSBzaXplLiAqL1xudmFyIE1BWF9NRU1PSVpFX1NJWkUgPSA1MDA7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1lbW9pemVgIHdoaWNoIGNsZWFycyB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24nc1xuICogY2FjaGUgd2hlbiBpdCBleGNlZWRzIGBNQVhfTUVNT0laRV9TSVpFYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1lbW9pemVDYXBwZWQoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gbWVtb2l6ZShmdW5jLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoY2FjaGUuc2l6ZSA9PT0gTUFYX01FTU9JWkVfU0laRSkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAgdmFyIGNhY2hlID0gcmVzdWx0LmNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVDYXBwZWQ7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcbiIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5kZXhPZmAgd2hpY2ggcGVyZm9ybXMgc3RyaWN0IGVxdWFsaXR5XG4gKiBjb21wYXJpc29ucyBvZiB2YWx1ZXMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmljdEluZGV4T2Y7XG4iLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDYgLyogLiAqLykge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3ViU3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdWJTdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcbiIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG4iLCJ2YXIgYmFzZUNsb25lID0gcmVxdWlyZSgnLi9fYmFzZUNsb25lJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uY2xvbmVgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGNsb25lcyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZWN1cnNpdmVseSBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBkZWVwIGNsb25lZCB2YWx1ZS5cbiAqIEBzZWUgXy5jbG9uZVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKG9iamVjdHMpO1xuICogY29uc29sZS5sb2coZGVlcFswXSA9PT0gb2JqZWN0c1swXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgQ0xPTkVfREVFUF9GTEFHIHwgQ0xPTkVfU1lNQk9MU19GTEFHKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcbiIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuIiwidmFyIGJhc2VIYXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VIYXNJbicpLFxuICAgIGhhc1BhdGggPSByZXF1aXJlKCcuL19oYXNQYXRoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBpcyBhIGRpcmVjdCBvciBpbmhlcml0ZWQgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0gXy5jcmVhdGUoeyAnYSc6IF8uY3JlYXRlKHsgJ2InOiAyIH0pIH0pO1xuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsIFsnYScsICdiJ10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNJbjtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG4iLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG4iLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmVcbiAqIGVxdWl2YWxlbnQuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIHN1cHBvcnRzIGNvbXBhcmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLFxuICogZGF0ZSBvYmplY3RzLCBlcnJvciBvYmplY3RzLCBtYXBzLCBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLFxuICogc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkIGFycmF5cy4gYE9iamVjdGAgb2JqZWN0cyBhcmUgY29tcGFyZWRcbiAqIGJ5IHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGdW5jdGlvbnMgYW5kIERPTVxuICogbm9kZXMgYXJlIGNvbXBhcmVkIGJ5IHN0cmljdCBlcXVhbGl0eSwgaS5lLiBgPT09YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5pc0VxdWFsKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIG9iamVjdCA9PT0gb3RoZXI7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VxdWFsKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VxdWFsO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcbiIsInZhciBiYXNlSXNNYXAgPSByZXF1aXJlKCcuL19iYXNlSXNNYXAnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzTWFwID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNNYXA7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBNYXBgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTWFwKG5ldyBNYXApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNNYXAobmV3IFdlYWtNYXApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzTWFwID0gbm9kZUlzTWFwID8gYmFzZVVuYXJ5KG5vZGVJc01hcCkgOiBiYXNlSXNNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXA7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlSXNTZXQgPSByZXF1aXJlKCcuL19iYXNlSXNTZXQnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzU2V0ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNTZXQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTZXRgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHNldCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU2V0KG5ldyBTZXQpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTZXQobmV3IFdlYWtTZXQpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzU2V0ID0gbm9kZUlzU2V0ID8gYmFzZVVuYXJ5KG5vZGVJc1NldCkgOiBiYXNlSXNTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTZXQ7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYHVuZGVmaW5lZGAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1VuZGVmaW5lZCh2b2lkIDApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNVbmRlZmluZWQobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1VuZGVmaW5lZDtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzSW4gPSByZXF1aXJlKCcuL19iYXNlS2V5c0luJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG4iLCJ2YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8udW5pcWAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgaXRlcmF0ZWVgIHdoaWNoIGlzXG4gKiBpbnZva2VkIGZvciBlYWNoIGVsZW1lbnQgaW4gYGFycmF5YCB0byBnZW5lcmF0ZSB0aGUgY3JpdGVyaW9uIGJ5IHdoaWNoXG4gKiB1bmlxdWVuZXNzIGlzIGNvbXB1dGVkLiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpcyBkZXRlcm1pbmVkIGJ5IHRoZVxuICogb3JkZXIgdGhleSBvY2N1ciBpbiB0aGUgYXJyYXkuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OlxuICogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udW5pcUJ5KFsyLjEsIDEuMiwgMi4zXSwgTWF0aC5mbG9vcik7XG4gKiAvLyA9PiBbMi4xLCAxLjJdXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLnVuaXFCeShbeyAneCc6IDEgfSwgeyAneCc6IDIgfSwgeyAneCc6IDEgfV0sICd4Jyk7XG4gKiAvLyA9PiBbeyAneCc6IDEgfSwgeyAneCc6IDIgfV1cbiAqL1xuZnVuY3Rpb24gdW5pcUJ5KGFycmF5LCBpdGVyYXRlZSkge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlVW5pcShhcnJheSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSkgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmlxQnk7XG4iLCJ2YXIgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8udW5pcWAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgY29tcGFyYXRvcmAgd2hpY2hcbiAqIGlzIGludm9rZWQgdG8gY29tcGFyZSBlbGVtZW50cyBvZiBgYXJyYXlgLiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpc1xuICogZGV0ZXJtaW5lZCBieSB0aGUgb3JkZXIgdGhleSBvY2N1ciBpbiB0aGUgYXJyYXkuVGhlIGNvbXBhcmF0b3IgaXMgaW52b2tlZFxuICogd2l0aCB0d28gYXJndW1lbnRzOiAoYXJyVmFsLCBvdGhWYWwpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICd4JzogMSwgJ3knOiAyIH0sIHsgJ3gnOiAyLCAneSc6IDEgfSwgeyAneCc6IDEsICd5JzogMiB9XTtcbiAqXG4gKiBfLnVuaXFXaXRoKG9iamVjdHMsIF8uaXNFcXVhbCk7XG4gKiAvLyA9PiBbeyAneCc6IDEsICd5JzogMiB9LCB7ICd4JzogMiwgJ3knOiAxIH1dXG4gKi9cbmZ1bmN0aW9uIHVuaXFXaXRoKGFycmF5LCBjb21wYXJhdG9yKSB7XG4gIGNvbXBhcmF0b3IgPSB0eXBlb2YgY29tcGFyYXRvciA9PSAnZnVuY3Rpb24nID8gY29tcGFyYXRvciA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVVuaXEoYXJyYXksIHVuZGVmaW5lZCwgY29tcGFyYXRvcikgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmlxV2l0aDtcbiIsInZhciBTeWx2ZXN0ZXIgPSB7fVxuXG5TeWx2ZXN0ZXIuTWF0cml4ID0gZnVuY3Rpb24oKSB7fVxuXG5TeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZSA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gIHZhciBNID0gbmV3IFN5bHZlc3Rlci5NYXRyaXgoKVxuICByZXR1cm4gTS5zZXRFbGVtZW50cyhlbGVtZW50cylcbn1cblxuU3lsdmVzdGVyLk1hdHJpeC5JID0gZnVuY3Rpb24obikge1xuICB2YXIgZWxzID0gW10sXG4gICAgaSA9IG4sXG4gICAgalxuICB3aGlsZSAoaS0tKSB7XG4gICAgaiA9IG5cbiAgICBlbHNbaV0gPSBbXVxuICAgIHdoaWxlIChqLS0pIHtcbiAgICAgIGVsc1tpXVtqXSA9IGkgPT09IGogPyAxIDogMFxuICAgIH1cbiAgfVxuICByZXR1cm4gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUoZWxzKVxufVxuXG5TeWx2ZXN0ZXIuTWF0cml4LnByb3RvdHlwZSA9IHtcbiAgZHVwOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUodGhpcy5lbGVtZW50cylcbiAgfSxcblxuICBpc1NxdWFyZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbHMgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCA/IDAgOiB0aGlzLmVsZW1lbnRzWzBdLmxlbmd0aFxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gY29sc1xuICB9LFxuXG4gIHRvUmlnaHRUcmlhbmd1bGFyOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT09IDApIHJldHVybiBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZShbXSlcbiAgICB2YXIgTSA9IHRoaXMuZHVwKCksXG4gICAgICBlbHNcbiAgICB2YXIgbiA9IHRoaXMuZWxlbWVudHMubGVuZ3RoLFxuICAgICAgaSxcbiAgICAgIGosXG4gICAgICBucCA9IHRoaXMuZWxlbWVudHNbMF0ubGVuZ3RoLFxuICAgICAgcFxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGlmIChNLmVsZW1lbnRzW2ldW2ldID09PSAwKSB7XG4gICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgaWYgKE0uZWxlbWVudHNbal1baV0gIT09IDApIHtcbiAgICAgICAgICAgIGVscyA9IFtdXG4gICAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgbnA7IHArKykge1xuICAgICAgICAgICAgICBlbHMucHVzaChNLmVsZW1lbnRzW2ldW3BdICsgTS5lbGVtZW50c1tqXVtwXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE0uZWxlbWVudHNbaV0gPSBlbHNcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoTS5lbGVtZW50c1tpXVtpXSAhPT0gMCkge1xuICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgIHZhciBtdWx0aXBsaWVyID0gTS5lbGVtZW50c1tqXVtpXSAvIE0uZWxlbWVudHNbaV1baV1cbiAgICAgICAgICBlbHMgPSBbXVxuICAgICAgICAgIGZvciAocCA9IDA7IHAgPCBucDsgcCsrKSB7XG4gICAgICAgICAgICAvLyBFbGVtZW50cyB3aXRoIGNvbHVtbiBudW1iZXJzIHVwIHRvIGFuIGluY2x1ZGluZyB0aGUgbnVtYmVyIG9mIHRoZVxuICAgICAgICAgICAgLy8gcm93IHRoYXQgd2UncmUgc3VidHJhY3RpbmcgY2FuIHNhZmVseSBiZSBzZXQgc3RyYWlnaHQgdG8gemVybyxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoYXQncyB0aGUgcG9pbnQgb2YgdGhpcyByb3V0aW5lIGFuZCBpdCBhdm9pZHMgaGF2aW5nIHRvXG4gICAgICAgICAgICAvLyBsb29wIG92ZXIgYW5kIGNvcnJlY3Qgcm91bmRpbmcgZXJyb3JzIGxhdGVyXG4gICAgICAgICAgICBlbHMucHVzaChcbiAgICAgICAgICAgICAgcCA8PSBpID8gMCA6IE0uZWxlbWVudHNbal1bcF0gLSBNLmVsZW1lbnRzW2ldW3BdICogbXVsdGlwbGllclxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBNLmVsZW1lbnRzW2pdID0gZWxzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE1cbiAgfSxcblxuICBkZXRlcm1pbmFudDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNTcXVhcmUoKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgdmFyIE0gPSB0aGlzLnRvUmlnaHRUcmlhbmd1bGFyKClcbiAgICB2YXIgZGV0ID0gTS5lbGVtZW50c1swXVswXSxcbiAgICAgIG4gPSBNLmVsZW1lbnRzLmxlbmd0aFxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICBkZXQgPSBkZXQgKiBNLmVsZW1lbnRzW2ldW2ldXG4gICAgfVxuICAgIHJldHVybiBkZXRcbiAgfSxcblxuICBpc1Npbmd1bGFyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1NxdWFyZSgpICYmIHRoaXMuZGV0ZXJtaW5hbnQoKSA9PT0gMFxuICB9LFxuXG4gIGF1Z21lbnQ6IGZ1bmN0aW9uKG1hdHJpeCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHVwKClcbiAgICB9XG4gICAgdmFyIE0gPSBtYXRyaXguZWxlbWVudHMgfHwgbWF0cml4XG4gICAgaWYgKHR5cGVvZiBNWzBdWzBdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgTSA9IFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKE0pLmVsZW1lbnRzXG4gICAgfVxuICAgIHZhciBUID0gdGhpcy5kdXAoKSxcbiAgICAgIGNvbHMgPSBULmVsZW1lbnRzWzBdLmxlbmd0aFxuICAgIHZhciBpID0gVC5lbGVtZW50cy5sZW5ndGgsXG4gICAgICBuaiA9IE1bMF0ubGVuZ3RoLFxuICAgICAgalxuICAgIGlmIChpICE9PSBNLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaiA9IG5qXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIFQuZWxlbWVudHNbaV1bY29scyArIGpdID0gTVtpXVtqXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gVFxuICB9LFxuXG4gIGludmVyc2U6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzU3F1YXJlKCkgfHwgdGhpcy5pc1Npbmd1bGFyKCkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHZhciBuID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICBpID0gbixcbiAgICAgIGpcbiAgICB2YXIgTSA9IHRoaXMuYXVnbWVudChTeWx2ZXN0ZXIuTWF0cml4LkkobikpLnRvUmlnaHRUcmlhbmd1bGFyKClcbiAgICB2YXIgbnAgPSBNLmVsZW1lbnRzWzBdLmxlbmd0aCxcbiAgICAgIHAsXG4gICAgICBlbHMsXG4gICAgICBkaXZpc29yXG4gICAgdmFyIGludmVyc2VfZWxlbWVudHMgPSBbXSxcbiAgICAgIG5ld19lbGVtZW50XG4gICAgLy8gU3lsdmVzdGVyLk1hdHJpeCBpcyBub24tc2luZ3VsYXIgc28gdGhlcmUgd2lsbCBiZSBubyB6ZXJvcyBvbiB0aGVcbiAgICAvLyBkaWFnb25hbC4gQ3ljbGUgdGhyb3VnaCByb3dzIGZyb20gbGFzdCB0byBmaXJzdC5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAvLyBGaXJzdCwgbm9ybWFsaXNlIGRpYWdvbmFsIGVsZW1lbnRzIHRvIDFcbiAgICAgIGVscyA9IFtdXG4gICAgICBpbnZlcnNlX2VsZW1lbnRzW2ldID0gW11cbiAgICAgIGRpdmlzb3IgPSBNLmVsZW1lbnRzW2ldW2ldXG4gICAgICBmb3IgKHAgPSAwOyBwIDwgbnA7IHArKykge1xuICAgICAgICBuZXdfZWxlbWVudCA9IE0uZWxlbWVudHNbaV1bcF0gLyBkaXZpc29yXG4gICAgICAgIGVscy5wdXNoKG5ld19lbGVtZW50KVxuICAgICAgICAvLyBTaHVmZmxlIG9mZiB0aGUgY3VycmVudCByb3cgb2YgdGhlIHJpZ2h0IGhhbmQgc2lkZSBpbnRvIHRoZSByZXN1bHRzXG4gICAgICAgIC8vIGFycmF5IGFzIGl0IHdpbGwgbm90IGJlIG1vZGlmaWVkIGJ5IGxhdGVyIHJ1bnMgdGhyb3VnaCB0aGlzIGxvb3BcbiAgICAgICAgaWYgKHAgPj0gbikge1xuICAgICAgICAgIGludmVyc2VfZWxlbWVudHNbaV0ucHVzaChuZXdfZWxlbWVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgTS5lbGVtZW50c1tpXSA9IGVsc1xuICAgICAgLy8gVGhlbiwgc3VidHJhY3QgdGhpcyByb3cgZnJvbSB0aG9zZSBhYm92ZSBpdCB0byBnaXZlIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAgICAgIC8vIG9uIHRoZSBsZWZ0IGhhbmQgc2lkZVxuICAgICAgaiA9IGlcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgZWxzID0gW11cbiAgICAgICAgZm9yIChwID0gMDsgcCA8IG5wOyBwKyspIHtcbiAgICAgICAgICBlbHMucHVzaChNLmVsZW1lbnRzW2pdW3BdIC0gTS5lbGVtZW50c1tpXVtwXSAqIE0uZWxlbWVudHNbal1baV0pXG4gICAgICAgIH1cbiAgICAgICAgTS5lbGVtZW50c1tqXSA9IGVsc1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUoaW52ZXJzZV9lbGVtZW50cylcbiAgfSxcblxuICBzZXRFbGVtZW50czogZnVuY3Rpb24oZWxzKSB7XG4gICAgdmFyIGksXG4gICAgICBqLFxuICAgICAgZWxlbWVudHMgPSBlbHMuZWxlbWVudHMgfHwgZWxzXG4gICAgaWYgKGVsZW1lbnRzWzBdICYmIHR5cGVvZiBlbGVtZW50c1swXVswXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGkgPSBlbGVtZW50cy5sZW5ndGhcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBbXVxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBqID0gZWxlbWVudHNbaV0ubGVuZ3RoXG4gICAgICAgIHRoaXMuZWxlbWVudHNbaV0gPSBbXVxuICAgICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1tpXVtqXSA9IGVsZW1lbnRzW2ldW2pdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIHZhciBuID0gZWxlbWVudHMubGVuZ3RoXG4gICAgdGhpcy5lbGVtZW50cyA9IFtdXG4gICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKFtlbGVtZW50c1tpXV0pXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH0sXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWxlbWVudHMpIHtcbiAgcmV0dXJuIFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKGVsZW1lbnRzKS5pbnZlcnNlKCkuZWxlbWVudHNcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4oZnVuY3Rpb24oKXtcblxuICB2YXJcbiAgICBidWYsXG4gICAgYnVmSWR4ID0gMCxcbiAgICBoZXhCeXRlcyA9IFtdLFxuICAgIGlcbiAgO1xuXG4gIC8vIFByZS1jYWxjdWxhdGUgdG9TdHJpbmcoMTYpIGZvciBzcGVlZFxuICBmb3IgKGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgICBoZXhCeXRlc1tpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG4gIH1cblxuICAvLyBCdWZmZXIgcmFuZG9tIG51bWJlcnMgZm9yIHNwZWVkXG4gIC8vIFJlZHVjZSBtZW1vcnkgdXNhZ2UgYnkgZGVjcmVhc2luZyB0aGlzIG51bWJlciAobWluIDE2KVxuICAvLyBvciBpbXByb3ZlIHNwZWVkIGJ5IGluY3JlYXNpbmcgdGhpcyBudW1iZXIgKHRyeSAxNjM4NClcbiAgdXVpZC5CVUZGRVJfU0laRSA9IDQwOTY7XG5cbiAgLy8gQmluYXJ5IHV1aWRzXG4gIHV1aWQuYmluID0gdXVpZEJpbjtcblxuICAvLyBDbGVhciBidWZmZXJcbiAgdXVpZC5jbGVhckJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgIGJ1ZiA9IG51bGw7XG4gICAgYnVmSWR4ID0gMDtcbiAgfTtcblxuICAvLyBUZXN0IGZvciB1dWlkXG4gIHV1aWQudGVzdCA9IGZ1bmN0aW9uKHV1aWQpIHtcbiAgICBpZiAodHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gL15bMC05YS1mXXs4fS1bMC05YS1mXXs0fS00WzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9JC9pLnRlc3QodXVpZCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyBOb2RlICYgQnJvd3NlciBzdXBwb3J0XG4gIHZhciBjcnlwdDA7XG4gIGlmICh0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNyeXB0MCA9IGNyeXB0bztcbiAgfSBlbHNlIGlmKCAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpICYmICh0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJykpIHtcbiAgICBjcnlwdDAgPSB3aW5kb3cubXNDcnlwdG87IC8vIElFMTFcbiAgfVxuXG4gIGlmICgodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpICYmICh0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICBjcnlwdDAgPSBjcnlwdDAgfHwgcmVxdWlyZSgnY3J5cHRvJyk7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LnV1aWQgPSB1dWlkO1xuICB9XG5cbiAgLy8gVXNlIGJlc3QgYXZhaWxhYmxlIFBSTkdcbiAgLy8gQWxzbyBleHBvc2UgdGhpcyBzbyB5b3UgY2FuIG92ZXJyaWRlIGl0LlxuICB1dWlkLnJhbmRvbUJ5dGVzID0gKGZ1bmN0aW9uKCl7XG4gICAgaWYgKGNyeXB0MCkge1xuICAgICAgaWYgKGNyeXB0MC5yYW5kb21CeXRlcykge1xuICAgICAgICByZXR1cm4gY3J5cHQwLnJhbmRvbUJ5dGVzO1xuICAgICAgfVxuICAgICAgaWYgKGNyeXB0MC5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5zbGljZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShuKTtcbiAgICAgICAgICAgIGNyeXB0MC5nZXRSYW5kb21WYWx1ZXMoYnl0ZXMpO1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYnl0ZXMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShuKTtcbiAgICAgICAgICBjcnlwdDAuZ2V0UmFuZG9tVmFsdWVzKGJ5dGVzKTtcbiAgICAgICAgICByZXR1cm4gYnl0ZXM7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbihuKSB7XG4gICAgICB2YXIgaSwgciA9IFtdO1xuICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICByLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8vIEJ1ZmZlciBzb21lIHJhbmRvbSBieXRlcyBmb3Igc3BlZWRcbiAgZnVuY3Rpb24gcmFuZG9tQnl0ZXNCdWZmZXJlZChuKSB7XG4gICAgaWYgKCFidWYgfHwgKChidWZJZHggKyBuKSA+IHV1aWQuQlVGRkVSX1NJWkUpKSB7XG4gICAgICBidWZJZHggPSAwO1xuICAgICAgYnVmID0gdXVpZC5yYW5kb21CeXRlcyh1dWlkLkJVRkZFUl9TSVpFKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zi5zbGljZShidWZJZHgsIGJ1ZklkeCArPSBuKTtcbiAgfVxuXG4gIC8vIHV1aWQuYmluXG4gIGZ1bmN0aW9uIHV1aWRCaW4oKSB7XG4gICAgdmFyIGIgPSByYW5kb21CeXRlc0J1ZmZlcmVkKDE2KTtcbiAgICBiWzZdID0gKGJbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgYls4XSA9IChiWzhdICYgMHgzZikgfCAweDgwO1xuICAgIHJldHVybiBiO1xuICB9XG5cbiAgLy8gU3RyaW5nIFVVSUR2NCAoUmFuZG9tKVxuICBmdW5jdGlvbiB1dWlkKCkge1xuICAgIHZhciBiID0gdXVpZEJpbigpO1xuICAgIHJldHVybiBoZXhCeXRlc1tiWzBdXSArIGhleEJ5dGVzW2JbMV1dICtcbiAgICAgIGhleEJ5dGVzW2JbMl1dICsgaGV4Qnl0ZXNbYlszXV0gKyAnLScgK1xuICAgICAgaGV4Qnl0ZXNbYls0XV0gKyBoZXhCeXRlc1tiWzVdXSArICctJyArXG4gICAgICBoZXhCeXRlc1tiWzZdXSArIGhleEJ5dGVzW2JbN11dICsgJy0nICtcbiAgICAgIGhleEJ5dGVzW2JbOF1dICsgaGV4Qnl0ZXNbYls5XV0gKyAnLScgK1xuICAgICAgaGV4Qnl0ZXNbYlsxMF1dICsgaGV4Qnl0ZXNbYlsxMV1dICtcbiAgICAgIGhleEJ5dGVzW2JbMTJdXSArIGhleEJ5dGVzW2JbMTNdXSArXG4gICAgICBoZXhCeXRlc1tiWzE0XV0gKyBoZXhCeXRlc1tiWzE1XV1cbiAgICA7XG4gIH1cblxufSkoKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImNvbnN0IGlzRXF1YWwgPSAob2JqMSwgb2JqMikgPT4ge1xuICAgIGZ1bmN0aW9uIGdldFR5cGUob2JqKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXJlQXJyYXlzRXF1YWwoKSB7XG4gICAgICAgIGlmIChvYmoxLmxlbmd0aCAhPT0gb2JqMi5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFpc0VxdWFsKG9iajFbaV0sIG9iajJbaV0pKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXJlT2JqZWN0c0VxdWFsKCkge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMob2JqMSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhvYmoyKS5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvYmoxKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iajEsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzRXF1YWwob2JqMVtrZXldLCBvYmoyW2tleV0pKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFyZUZ1bmN0aW9uc0VxdWFsKCkge1xuICAgICAgICByZXR1cm4gb2JqMS50b1N0cmluZygpID09PSBvYmoyLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFyZVByaW1hdGl2ZXNFcXVhbCgpIHtcbiAgICAgICAgcmV0dXJuIG9iajEgPT09IG9iajI7XG4gICAgfVxuICAgIGxldCB0eXBlID0gZ2V0VHlwZShvYmoxKTtcbiAgICBpZiAodHlwZSAhPT0gZ2V0VHlwZShvYmoyKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0eXBlID09PSBcImFycmF5XCIpXG4gICAgICAgIHJldHVybiBhcmVBcnJheXNFcXVhbCgpO1xuICAgIGlmICh0eXBlID09PSBcIm9iamVjdFwiKVxuICAgICAgICByZXR1cm4gYXJlT2JqZWN0c0VxdWFsKCk7XG4gICAgaWYgKHR5cGUgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuIGFyZUZ1bmN0aW9uc0VxdWFsKCk7XG4gICAgcmV0dXJuIGFyZVByaW1hdGl2ZXNFcXVhbCgpO1xufTtcbmNvbnN0IHRydW5jYXRlTGF5ZXJOYW1lID0gKGxheWVyTmFtZSwgbWF4TGVuZ3RoID0gMjUpID0+IHtcbiAgICBpZiAobGF5ZXJOYW1lLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4gbGF5ZXJOYW1lLnN1YnN0cmluZygwLCBtYXhMZW5ndGgpICsgXCIuLi5cIjtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyTmFtZTtcbn07XG5jb25zdCB0b0NhcGl0YWxpemVkU3RyaW5nID0gKHZhbHVlVG9Db252ZXJ0KSA9PiB7XG4gICAgbGV0IG91dHB1dFZhbHVlID0gdmFsdWVUb0NvbnZlcnQudG9TdHJpbmcoKTtcbiAgICBvdXRwdXRWYWx1ZSA9IG91dHB1dFZhbHVlWzBdLnRvVXBwZXJDYXNlKCkgKyBvdXRwdXRWYWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgcmV0dXJuIG91dHB1dFZhbHVlO1xufTtcbmNvbnN0IHJnYlRvSGV4ID0gKHIsIGcsIGIpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnRUb0hleCA9IChjb2xvclZhbHVlKSA9PiB7XG4gICAgICAgIGNvbG9yVmFsdWUgPSBNYXRoLnJvdW5kKGNvbG9yVmFsdWUgKiAyNTUpO1xuICAgICAgICBsZXQgaGV4ID0gY29sb3JWYWx1ZS50b1N0cmluZygxNik7XG4gICAgICAgIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XG4gICAgfTtcbiAgICBjb25zdCBjb21iaW5lQ29tcG9uZW50cyA9IChyLCBnLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBcIiNcIiArIGNvbXBvbmVudFRvSGV4KHIpICsgY29tcG9uZW50VG9IZXgoZykgKyBjb21wb25lbnRUb0hleChiKTtcbiAgICB9O1xuICAgIHJldHVybiBjb21iaW5lQ29tcG9uZW50cyhyLCBnLCBiKTtcbn07XG5jb25zdCBzZWxlY3RBbmRab29tVG9MYXllciA9IChsYXllcklkKSA9PiB7XG4gICAgY29uc3QgbGF5ZXIgPSBmaWdtYS5nZXROb2RlQnlJZChsYXllcklkKTtcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbbGF5ZXJdO1xuICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbbGF5ZXJdKTtcbn07XG5leHBvcnQgeyBpc0VxdWFsLCB0cnVuY2F0ZUxheWVyTmFtZSwgdG9DYXBpdGFsaXplZFN0cmluZywgcmdiVG9IZXgsIHNlbGVjdEFuZFpvb21Ub0xheWVyLCB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgdXVpZCBmcm9tIFwidXVpZC1yYW5kb21cIjtcbmltcG9ydCB7IGlzVmlzaWJsZU5vZGUgfSBmcm9tIFwiQGZpZ21hLXBsdWdpbi9oZWxwZXJzXCI7XG5pbXBvcnQgeyB0b0NhcGl0YWxpemVkU3RyaW5nLCByZ2JUb0hleCwgc2VsZWN0QW5kWm9vbVRvTGF5ZXIsIH0gZnJvbSBcIi4uL2FwcC9jb21wb25lbnRzL3V0aWxzXCI7XG5pbXBvcnQgcmF3TGlnaHRDb2xvclRva2VucyBmcm9tIFwiLi4vLi4vZGF0YS9saWdodC1tb2RlLmpzb25cIjtcbmltcG9ydCByYXdEYXJrQ29sb3JUb2tlbnMgZnJvbSBcIi4uLy4uL2RhdGEvZGFyay1tb2RlLmpzb25cIjtcbmxldCB1aVNpemUgPSB7XG4gICAgd2lkdGg6IDMwMCxcbiAgICBoZWlnaHQ6IDQ0OCxcbn07XG5jb25zdCBjcmVhdGVUYWJsZSA9IChtc2cpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHRhYmxlRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGxldCBoZWFkZXJDZWxsID0geWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhcImNlOGZhOGU4Y2FiMDdhMTlmODNmNDE4MWFjOGNiZTc2MDkzYzZiYzNcIik7XG4gICAgbGV0IHRhYmxlUm93ID0gZmlnbWEuY3JlYXRlQ29tcG9uZW50KCk7XG4gICAgbGV0IGNlbGxGaWxsQ29udGFpbmVyWSA9IGZhbHNlO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICB0YWJsZUZyYW1lLm5hbWUgPSBcIlRhYmxlXCI7XG4gICAgdGFibGVGcmFtZS5maWxscyA9IFtdO1xuICAgIHRhYmxlRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgdGFibGVGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIHRhYmxlRnJhbWUueCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuICAgIHRhYmxlRnJhbWUueSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgIG1zZy5jb2x1bW5Db25maWd1cmF0aW9uLmZpbmQoKGNvbCkgPT4gKGNlbGxGaWxsQ29udGFpbmVyWSA9IGNvbC5tdWx0aVZhbHVlKSk7XG4gICAgWy4uLkFycmF5KG1zZy5yb3dzICsgMSkua2V5cygpXS5tYXAoKHJvd0luZGV4KSA9PiB7XG4gICAgICAgIHRhYmxlUm93LmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgdGFibGVSb3cuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIHRhYmxlUm93Lm5hbWUgPSBcIlJvd1wiO1xuICAgICAgICBtc2cuY29sdW1uQ29uZmlndXJhdGlvbi5mb3JFYWNoKChjb2wpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IHsgbmFtZTogY29sTmFtZSwgYWxpZ25tZW50OiBjb2xBbGlnbm1lbnQsIGNlbGxUeXBlOiBjb2xDZWxsVHlwZSwgbXVsdGlWYWx1ZTogY29sTXVsdGlWYWx1ZSwgfSA9IGNvbDtcbiAgICAgICAgICAgIGNvbEFsaWdubWVudCA9IHRvQ2FwaXRhbGl6ZWRTdHJpbmcoY29sQWxpZ25tZW50KTtcbiAgICAgICAgICAgIGNvbENlbGxUeXBlID0gdG9DYXBpdGFsaXplZFN0cmluZyhjb2xDZWxsVHlwZSk7XG4gICAgICAgICAgICBjb2xNdWx0aVZhbHVlID0gdG9DYXBpdGFsaXplZFN0cmluZyhjb2xNdWx0aVZhbHVlKTtcbiAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGlzSGVhZGVyQ2VsbCA9IGhlYWRlckNlbGwuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dE5vZGVPZkhlYWRlckNlbGwgPSB0aGlzSGVhZGVyQ2VsbC5jaGlsZHJlblswXVxuICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgY29uc3QgaXNGYXZvcml0ZUNvbCA9IGNvbENlbGxUeXBlID09PSBcIkZhdm9yaXRlXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzQ3VzdG9tQ29sTmFtZSA9IGNvbE5hbWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbE5hbWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXRIZWFkZXJUZXh0Q2hhcmFjdGVycyA9IChuZXdDaGFycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbC5kZWxldGVDaGFyYWN0ZXJzKDAsIHRleHROb2RlT2ZIZWFkZXJDZWxsLmNoYXJhY3RlcnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5vZGVPZkhlYWRlckNlbGwuaW5zZXJ0Q2hhcmFjdGVycygwLCBuZXdDaGFycyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzQ3VzdG9tQ29sTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5uYW1lID0gY29sTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGVhZGVyVGV4dENoYXJhY3RlcnMoY29sTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5uYW1lID0gXCJIZWFkZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGVhZGVyVGV4dENoYXJhY3RlcnMoXCJIZWFkZXJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc0Zhdm9yaXRlQ29sKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycm93c0xheWVyID0gdGhpc0hlYWRlckNlbGwuZmluZE9uZSgoY2hpbGQpID0+IGNoaWxkLm5hbWUgPT09IFwiQXJyb3dzXCIpO1xuICAgICAgICAgICAgICAgICAgICBhcnJvd3NMYXllci52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNldEhlYWRlclRleHRDaGFyYWN0ZXJzKFwiIFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwuc2V0UHJvcGVydGllcyh7IEFsaWdubWVudDogY29sQWxpZ25tZW50IH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldGVybWluZUhlYWRlckNlbGxXaWR0aCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZy5pc011bHRpVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTIwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sQ2VsbFR5cGUgPT09IFwiRW50aXR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTAyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc0hlYWRlckNlbGwud2lkdGg7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5yZXNpemUoZGV0ZXJtaW5lSGVhZGVyQ2VsbFdpZHRoKCksIHRoaXNIZWFkZXJDZWxsLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwuY2hpbGRyZW5bMF0ubGF5b3V0R3JvdyA9XG4gICAgICAgICAgICAgICAgICAgIGNlbGxGaWxsQ29udGFpbmVyWSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IGNlbGxGaWxsQ29udGFpbmVyWVxuICAgICAgICAgICAgICAgICAgICA/IFwiRklYRURcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiQVVUT1wiO1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IGlzRmF2b3JpdGVDb2wgPyBcIkFVVE9cIiA6IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0aGlzSGVhZGVyQ2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0YWJsZUZyYW1lLmFwcGVuZENoaWxkKHRhYmxlUm93KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aGlzVGFibGVSb3cgPSB0YWJsZVJvdy5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgdGhpc1RhYmxlUm93LmNoaWxkcmVuLm1hcCgoY2VsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsID0gY2VsbDtcbiAgICAgICAgICAgICAgICBsZXQgeyBjZWxsVHlwZTogY29sQ2VsbFR5cGUsIG11bHRpVmFsdWU6IGNvbE11bHRpVmFsdWUgfSA9IG1zZy5jb2x1bW5Db25maWd1cmF0aW9uW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsVHlwZXNUaGF0Q2FuQmVNdWx0aVZhbHVlID0gW1xuICAgICAgICAgICAgICAgICAgICBcIlRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJNZXRyaWNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJFbnRpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJMaW5rXCIsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJsZU11bHRpVmFsdWUgPSB0b0NhcGl0YWxpemVkU3RyaW5nKG1zZy5pc011bHRpVmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbENlbGxUeXBlID0gdG9DYXBpdGFsaXplZFN0cmluZyhjb2xDZWxsVHlwZSk7XG4gICAgICAgICAgICAgICAgY29sTXVsdGlWYWx1ZSA9IHRvQ2FwaXRhbGl6ZWRTdHJpbmcoY29sTXVsdGlWYWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sQ2FuQmVNdWx0aVZhbHVlID0gY2VsbFR5cGVzVGhhdENhbkJlTXVsdGlWYWx1ZS5zb21lKChjZWxsVHlwZSkgPT4gY2VsbFR5cGUgPT09IGNvbENlbGxUeXBlKTtcbiAgICAgICAgICAgICAgICBjZWxsLm5hbWUgPT09IFwiSGVhZGVyXCIgPyAoY2VsbC5uYW1lID0gXCJDZWxsXCIpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBjZWxsLnNldFByb3BlcnRpZXMoeyBUeXBlOiBcIkJvZHlcIiB9KTtcbiAgICAgICAgICAgICAgICBjZWxsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgICAgICAgICAgICBUeXBlOiBjb2xDZWxsVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgXCJNdWx0aS12YWx1ZVwiOiBjb2xDYW5CZU11bHRpVmFsdWUgPyB0YWJsZU11bHRpVmFsdWUgOiBcIkZhbHNlXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2VsbC5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1zZy5pc011bHRpVmFsdWUgJiYgY29sTXVsdGlWYWx1ZSA9PT0gXCJGYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29sQ2FuQmVNdWx0aVZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsVmFsdWVMYXllciA9IGNlbGwuZmluZE9uZSgoY2hpbGQpID0+IGNoaWxkLm5hbWUgPT09IFwiU2Vjb25kYXJ5IHZhbHVlXCIgJiYgY2hpbGQudHlwZSA9PT0gXCJURVhUXCIpO1xuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVmFsdWVMYXllci5jaGFyYWN0ZXJzID0gXCIgXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNlbGwuY2hpbGRyZW5bMF0ubGF5b3V0R3JvdyA9IGNlbGxGaWxsQ29udGFpbmVyWSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIGNlbGwucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gY2VsbEZpbGxDb250YWluZXJZID8gXCJGSVhFRFwiIDogXCJBVVRPXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhYmxlRnJhbWUuYXBwZW5kQ2hpbGQodGhpc1RhYmxlUm93KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGxldCB0YWJsZURhdGEgPSBPYmplY3QuYXNzaWduKHsgZmlsZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLnBhcmVudC5uYW1lLCBmaWxlS2V5OiBmaWdtYS5maWxlS2V5LCBcIkNvbHVtbiBjb3VudFwiOiBtc2cuY29sdW1uQ29uZmlndXJhdGlvbi5sZW5ndGgsIFwiUm93IGNvdW50XCI6IG1zZy5yb3dzLCBcIkNvbHVtbiBDb25maWd1cmF0aW9uXCI6IG1zZy5jb2x1bW5Db25maWd1cmF0aW9uIH0sIGN1c3RvbUV2ZW50RGF0YSk7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInRhYmxlLWNyZWF0ZWRcIiwgbWVzc2FnZTogdGFibGVEYXRhIH0pO1xuICAgIGZpZ21hLm5vdGlmeShcIlRhYmxlIGNyZWF0ZWQg4pyFXCIpO1xufSk7XG5jb25zdCBwdXNoVGV4dExheWVyVG9BcnJheSA9IChsYXllciwgYXJyYXkpID0+IHtcbiAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICBuYW1lOiBsYXllci5uYW1lLFxuICAgICAgICB2aXNpYmxlOiBsYXllci52aXNpYmxlLFxuICAgICAgICB4OiBsYXllci54LFxuICAgICAgICB5OiBsYXllci55LFxuICAgICAgICB0eXBlOiBsYXllci50eXBlLFxuICAgICAgICBjaGFyYWN0ZXJzOiBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuY2hhcmFjdGVycyxcbiAgICAgICAgY2hpbGRyZW46IGxheWVyID09PSBudWxsIHx8IGxheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXllci5jaGlsZHJlbixcbiAgICB9KTtcbn07XG5jb25zdCBzZW5kQ3VycmVudFRleHRTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBsZXQgdGV4dExheWVycyA9IFtdO1xuICAgIHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZExheWVyKSA9PiB7XG4gICAgICAgIGlmICghIShzZWxlY3RlZExheWVyID09PSBudWxsIHx8IHNlbGVjdGVkTGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkTGF5ZXIuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRleHRMYXllcnMgPSBzZWxlY3RlZExheWVyLmZpbmRBbGwoKG4pID0+IG4udHlwZSA9PT0gXCJURVhUXCIpO1xuICAgICAgICAgICAgc2VsZWN0ZWRUZXh0TGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaXNWaXNpYmxlTm9kZShsYXllcikgJiYgcHVzaFRleHRMYXllclRvQXJyYXkobGF5ZXIsIHRleHRMYXllcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0ZWRMYXllci50eXBlID09PSBcIlRFWFRcIikge1xuICAgICAgICAgICAgaXNWaXNpYmxlTm9kZShzZWxlY3RlZExheWVyKSAmJlxuICAgICAgICAgICAgICAgIHB1c2hUZXh0TGF5ZXJUb0FycmF5KHNlbGVjdGVkTGF5ZXIsIHRleHRMYXllcnMpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJuZXctdGV4dC1zZWxlY3Rpb25cIixcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgdGV4dExheWVycyxcbiAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJzOiBzZWxlY3Rpb24sXG4gICAgICAgIH0sXG4gICAgfSk7XG59O1xuY29uc3QgcHVzaENvbG9yVG9BcnJheSA9IChsYXllciwgY29sb3JUeXBlLCBhcnJheSwgbGF5ZXJIYXNTZWdtZW50U3R5bGVzID0gZmFsc2UpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBjb25zdCBzdHlsZUlkVHlwZSA9IGNvbG9yVHlwZSA9PT0gXCJmaWxsc1wiID8gXCJmaWxsU3R5bGVJZFwiIDogXCJzdHJva2VTdHlsZUlkXCI7XG4gICAgY29uc3QgaXNTb2xpZENvbG9yID0gKChfYSA9IGxheWVyID09PSBudWxsIHx8IGxheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXllci5maWxsc1swXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnR5cGUpID09PSBcIlNPTElEXCI7XG4gICAgY29uc3QgY29sb3JJc0ltYWdlID0gY29sb3JUeXBlID09PSBcImZpbGxzXCIgJiYgKChfYiA9IGxheWVyID09PSBudWxsIHx8IGxheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXllci5maWxsc1swXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnR5cGUpID09PSBcIklNQUdFXCI7XG4gICAgY29uc3QgY29sb3JJc0dyYWRpZW50ID0gY29sb3JUeXBlID09PSBcImZpbGxzXCIgJiYgKChfYyA9IGxheWVyID09PSBudWxsIHx8IGxheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXllci5maWxsc1swXSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnR5cGUuaW5jbHVkZXMoXCJHUkFESUVOVFwiKSk7XG4gICAgY29uc3QgY29sb3JJc1Zpc2libGUgPSBsYXllckhhc1NlZ21lbnRTdHlsZXNcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogbGF5ZXJbY29sb3JUeXBlXVswXS52aXNpYmxlO1xuICAgIGNvbnN0IGNvbG9ySW5IZXggPSAoY29sb3JJblJHQikgPT4ge1xuICAgICAgICByZXR1cm4gcmdiVG9IZXgoY29sb3JJblJHQi5yLCBjb2xvckluUkdCLmcsIGNvbG9ySW5SR0IuYik7XG4gICAgfTtcbiAgICBjb25zdCBzZWdtZW50Q29sb3JJbkhleCA9IGxheWVySGFzU2VnbWVudFN0eWxlc1xuICAgICAgICA/IGNvbG9ySW5IZXgobGF5ZXIuc2VnbWVudC5maWxsc1swXS5jb2xvcilcbiAgICAgICAgOiBmYWxzZTtcbiAgICBjb25zdCBoYXNDb2xvclN0eWxlID0gKCkgPT4ge1xuICAgICAgICBpZiAobGF5ZXJIYXNTZWdtZW50U3R5bGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gbGF5ZXIuc2VnbWVudC5maWxsU3R5bGVJZC5sZW5ndGggPiAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlzU29saWRDb2xvciA/IGxheWVyW3N0eWxlSWRUeXBlXS5sZW5ndGggPiAwIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmICghY29sb3JJc0ltYWdlICYmXG4gICAgICAgICFjb2xvcklzR3JhZGllbnQgJiZcbiAgICAgICAgY29sb3JJc1Zpc2libGUgJiZcbiAgICAgICAgIWxheWVyLmlzQ2hpbGRPZkljb25XaXRoRmlsbCkge1xuICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICAgIGNvbG9ySWQ6IHV1aWQoKSxcbiAgICAgICAgICAgIGxheWVySWQ6IGxheWVyLmxheWVySWQsXG4gICAgICAgICAgICBsYXllck5hbWU6IGxheWVyLm5hbWUsXG4gICAgICAgICAgICBsYXllclR5cGU6IGxheWVyLnR5cGUsXG4gICAgICAgICAgICBjb2xvcjogbGF5ZXJIYXNTZWdtZW50U3R5bGVzID8gbGF5ZXIuc2VnbWVudC5maWxsc1swXSA6IGxheWVyW2NvbG9yVHlwZV0sXG4gICAgICAgICAgICBjb2xvclN0eWxlSWQ6IGxheWVySGFzU2VnbWVudFN0eWxlc1xuICAgICAgICAgICAgICAgID8gbGF5ZXIuc2VnbWVudC5maWxsU3R5bGVJZFxuICAgICAgICAgICAgICAgIDogbGF5ZXJbc3R5bGVJZFR5cGVdLFxuICAgICAgICAgICAgaGFzQ29sb3JTdHlsZTogaGFzQ29sb3JTdHlsZSgpLFxuICAgICAgICAgICAgdmlzaWJsZTogbGF5ZXIudmlzaWJsZSxcbiAgICAgICAgICAgIGNvbG9yVHlwZTogY29sb3JUeXBlLnNsaWNlKDAsIC0xKSxcbiAgICAgICAgICAgIGNvbG9ySW5IZXg6IGxheWVySGFzU2VnbWVudFN0eWxlc1xuICAgICAgICAgICAgICAgID8gc2VnbWVudENvbG9ySW5IZXhcbiAgICAgICAgICAgICAgICA6IGNvbG9ySW5IZXgobGF5ZXJbY29sb3JUeXBlXVswXS5jb2xvciksXG4gICAgICAgICAgICBsYXllckhhc1NlZ21lbnRTdHlsZXM6IGxheWVySGFzU2VnbWVudFN0eWxlcyxcbiAgICAgICAgICAgIHNlZ21lbnQ6IGxheWVySGFzU2VnbWVudFN0eWxlcyAmJiBsYXllci5zZWdtZW50LFxuICAgICAgICB9KTtcbiAgICB9XG59O1xubGV0IGNvbG9yVG9rZW5zID0gW107XG5jb25zdCBnZXRDb2xvclRva2VucyA9IChtYXBUaGVtZXNUb0VhY2hPdGhlcikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IGxpZ2h0VGhlbWVUb2tlbnMgPSB5aWVsZCBQcm9taXNlLmFsbChyYXdMaWdodENvbG9yVG9rZW5zLm1ldGEuc3R5bGVzLm1hcCgoc3R5bGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZSksIHsgdGhlbWU6IFwibGlnaHRcIiB9KTtcbiAgICB9KSkpO1xuICAgIGxldCBkYXJrVGhlbWVUb2tlbnMgPSB5aWVsZCBQcm9taXNlLmFsbChyYXdEYXJrQ29sb3JUb2tlbnMubWV0YS5zdHlsZXMubWFwKChzdHlsZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0eWxlKSwgeyB0aGVtZTogXCJkYXJrXCIgfSk7XG4gICAgfSkpKTtcbiAgICBpZiAobWFwVGhlbWVzVG9FYWNoT3RoZXIpIHtcbiAgICAgICAgbGlnaHRUaGVtZVRva2VucyA9IGxpZ2h0VGhlbWVUb2tlbnMubWFwKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgY29uc3QgZGFya1RoZW1lVG9rZW4gPSBkYXJrVGhlbWVUb2tlbnMuZmlsdGVyKChkYXJrVG9rZW4pID0+IHRva2VuLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gZGFya1Rva2VuLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlbiksIHsgZGFya1RoZW1lVG9rZW46ICgoX2EgPSBkYXJrVGhlbWVUb2tlblswXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmtleSkgPyBkYXJrVGhlbWVUb2tlblswXS5rZXkgOiBudWxsIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZGFya1RoZW1lVG9rZW5zID0gZGFya1RoZW1lVG9rZW5zLm1hcCgodG9rZW4pID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IGxpZ2h0VGhlbWVUb2tlbiA9IGxpZ2h0VGhlbWVUb2tlbnMuZmlsdGVyKChsaWdodFRva2VuKSA9PiB0b2tlbi5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGxpZ2h0VG9rZW4ubmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRva2VuKSwgeyBsaWdodFRoZW1lVG9rZW46ICgoX2EgPSBsaWdodFRoZW1lVG9rZW5bMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5rZXkpXG4gICAgICAgICAgICAgICAgICAgID8gbGlnaHRUaGVtZVRva2VuWzBdLmtleVxuICAgICAgICAgICAgICAgICAgICA6IG51bGwgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBhbGxDb2xvclRva2VucyA9IGxpZ2h0VGhlbWVUb2tlbnMuY29uY2F0KGRhcmtUaGVtZVRva2Vucyk7XG4gICAgY29uc3QgdGVtcFJlY3RhbmdsZSA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgIGNvbG9yVG9rZW5zID0geWllbGQgUHJvbWlzZS5hbGwoYWxsQ29sb3JUb2tlbnMubWFwKChzdHlsZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRlbXBSZWN0YW5nbGUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBsZXQgY29sb3JTdHlsZVdpdGhIZXggPSB7fTtcbiAgICAgICAgY29uc3QgaW1wb3J0ZWRTdHlsZSA9IHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhzdHlsZS5rZXkpO1xuICAgICAgICB0ZW1wUmVjdGFuZ2xlLmZpbGxTdHlsZUlkID0gaW1wb3J0ZWRTdHlsZS5pZDtcbiAgICAgICAgaWYgKHRlbXBSZWN0YW5nbGUuZmlsbHNbMF0uY29sb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29sb3JTdHlsZVdpdGhIZXggPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0eWxlKSwgeyBoZXg6IHJnYlRvSGV4KHRlbXBSZWN0YW5nbGUuZmlsbHNbMF0uY29sb3IuciwgdGVtcFJlY3RhbmdsZS5maWxsc1swXS5jb2xvci5nLCB0ZW1wUmVjdGFuZ2xlLmZpbGxzWzBdLmNvbG9yLmIpIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29sb3JTdHlsZVdpdGhIZXggPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0eWxlKSwgeyBoZXg6IFwiTm9uZVwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xvclN0eWxlV2l0aEhleDtcbiAgICB9KSkpO1xuICAgIHRlbXBSZWN0YW5nbGUucmVtb3ZlKCk7XG59KTtcbmNvbnN0IGdldENvbG9yU3RhdHMgPSAoZm9yVGhlbWVTd2l0Y2hlciA9IGZhbHNlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBmaWdtYS5za2lwSW52aXNpYmxlSW5zdGFuY2VDaGlsZHJlbiA9IHRydWU7XG4gICAgeWllbGQgZ2V0Q29sb3JUb2tlbnModHJ1ZSk7XG4gICAgY29uc3QgZ2V0UmF3TGF5ZXJzV2l0aENvbG9yID0gKCkgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCByZWxldmFudExheWVycyA9IHNlbGVjdGlvbi5tYXAoKHNlbGVjdGVkTGF5ZXIpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGxldCBvdXRwdXRGb3JMYXllcnNXaXRoQ2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGlzUmVsZXZhbnRMYXllciA9IChuKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFjY2VwdGFibGVOb2RldHlwZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgIFwiRUxMSVBTRVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkZSQU1FXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiR1JPVVBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDT01QT05FTlRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJJTlNUQU5DRVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkxJTkVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJQT0xZR09OXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiUkVDVEFOR0xFXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiU0hBUEVfV0lUSF9URVhUXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiU1RBUlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRFWFRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJCT09MRUFOX09QRVJBVElPTlwiLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzRmlsbCA9IFwiZmlsbHNcIiBpbiBuICYmIChuID09PSBudWxsIHx8IG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG4uZmlsbHNbMF0pICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzU3Ryb2tlID0gXCJzdHJva2VzXCIgaW4gbiAmJiAobiA9PT0gbnVsbCB8fCBuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuLnN0cm9rZXNbMF0pICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNDaGlsZE9mQm9vbGVhbk9wZXJhdGlvbiA9IG4ucGFyZW50LnR5cGUgPT09IFwiQk9PTEVBTl9PUEVSQVRJT05cIjtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0TGF5ZXJIYXNTZWdtZW50U3R5bGVzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobi50eXBlICE9PSBcIlRFWFRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4uZ2V0U3R5bGVkVGV4dFNlZ21lbnRzKFtcImZpbGxzXCJdKS5sZW5ndGggPiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3JUaGVtZVN3aXRjaGVyICYmIGFjY2VwdGFibGVOb2RldHlwZXMucHVzaChcIlZFQ1RPUlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNGaWxsT3JTdHJva2UgPSBoYXNGaWxsIHx8IGhhc1N0cm9rZTtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlSXNWYWxpZE5vZGVUeXBlID0gYWNjZXB0YWJsZU5vZGV0eXBlcy5zb21lKChub2RlVHlwZSkgPT4gbi50eXBlID09PSBub2RlVHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChub2RlSXNWYWxpZE5vZGVUeXBlICYmXG4gICAgICAgICAgICAgICAgICAgIChoYXNGaWxsT3JTdHJva2UgfHwgdGV4dExheWVySGFzU2VnbWVudFN0eWxlcygpKSAmJlxuICAgICAgICAgICAgICAgICAgICAhaXNDaGlsZE9mQm9vbGVhbk9wZXJhdGlvbik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRMYXllckhhc0NoaWxkcmVuID0gXCJmaW5kQWxsXCIgaW4gc2VsZWN0ZWRMYXllciAmJiAoKF9hID0gc2VsZWN0ZWRMYXllciA9PT0gbnVsbCB8fCBzZWxlY3RlZExheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZExheWVyLmNoaWxkcmVuKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSA+IDA7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRMYXllckhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaXNSZWxldmFudExheWVyKHNlbGVjdGVkTGF5ZXIpO1xuICAgICAgICAgICAgICAgIG91dHB1dEZvckxheWVyc1dpdGhDaGlsZHJlbiA9IHNlbGVjdGVkTGF5ZXIuZmluZEFsbCgobikgPT4gaXNSZWxldmFudExheWVyKG4pKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUmVsZXZhbnRMYXllcihzZWxlY3RlZExheWVyKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLm91dHB1dEZvckxheWVyc1dpdGhDaGlsZHJlbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3NlbGVjdGVkTGF5ZXIsIC4uLm91dHB1dEZvckxheWVyc1dpdGhDaGlsZHJlbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNSZWxldmFudExheWVyKHNlbGVjdGVkTGF5ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtzZWxlY3RlZExheWVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBvdXRwdXQgPSByZWxldmFudExheWVycy5mbGF0KCk7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dC5maWx0ZXIoKGxheWVyKSA9PiBpc1Zpc2libGVOb2RlKGxheWVyKSk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbiAgICBjb25zdCByYXdMYXllcnNXaXRoQ29sb3IgPSBnZXRSYXdMYXllcnNXaXRoQ29sb3IoKTtcbiAgICBjb25zdCBsYXllcnNXaXRoQ29sb3IgPSByYXdMYXllcnNXaXRoQ29sb3IubWFwKChsYXllcikgPT4ge1xuICAgICAgICBjb25zdCBoYXNGaWxsID0gXCJmaWxsc1wiIGluIGxheWVyICYmIGxheWVyLmZpbGxzWzBdICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGhhc1N0cm9rZSA9IFwic3Ryb2tlc1wiIGluIGxheWVyICYmIGxheWVyLnN0cm9rZXNbMF0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgdGV4dExheWVySGFzU2VnbWVudFN0eWxlcyA9IGxheWVyLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICBsYXllci5nZXRTdHlsZWRUZXh0U2VnbWVudHMoW1wiZmlsbHNcIl0pLmxlbmd0aCA+IDE7XG4gICAgICAgIGNvbnN0IGhhc0ZpbGxBbmRTdHJva2UgPSBoYXNGaWxsICYmIGhhc1N0cm9rZTtcbiAgICAgICAgY29uc3QgaXNDaGlsZE9mSWNvbiA9IGxheWVyLnBhcmVudC50eXBlID09PSBcIkJPT0xFQU5fT1BFUkFUSU9OXCI7XG4gICAgICAgIGxldCBwYXJlbnRJY29uSGFzRmlsbCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBpc0NoaWxkT2ZJY29uV2l0aEZpbGwgPSBpc0NoaWxkT2ZJY29uICYmIHBhcmVudEljb25IYXNGaWxsO1xuICAgICAgICBjb25zdCBjaGVja1BhcmVudEZvckZpbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoXCJmaWxsc1wiIGluIGxheWVyLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHBhcmVudEljb25IYXNGaWxsID0gbGF5ZXIucGFyZW50LmZpbGxzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNoZWNrUGFyZW50Rm9yRmlsbCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGF5ZXJJZDogbGF5ZXIuaWQsXG4gICAgICAgICAgICBuYW1lOiBsYXllci5uYW1lLFxuICAgICAgICAgICAgZmlsbHM6IFwiZmlsbHNcIiBpbiBsYXllciAmJiBsYXllci5maWxscyxcbiAgICAgICAgICAgIHN0cm9rZXM6IFwic3Ryb2tlc1wiIGluIGxheWVyICYmIGxheWVyLnN0cm9rZXMsXG4gICAgICAgICAgICBmaWxsU3R5bGVJZDogXCJmaWxsU3R5bGVJZFwiIGluIGxheWVyICYmIGxheWVyLmZpbGxTdHlsZUlkLFxuICAgICAgICAgICAgc3Ryb2tlU3R5bGVJZDogXCJzdHJva2VTdHlsZUlkXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuc3Ryb2tlU3R5bGVJZCxcbiAgICAgICAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICAgICAgICB0eXBlOiBsYXllci50eXBlLFxuICAgICAgICAgICAgaGFzRmlsbDogaGFzRmlsbCxcbiAgICAgICAgICAgIGhhc1N0cm9rZTogaGFzU3Ryb2tlLFxuICAgICAgICAgICAgaGFzRmlsbEFuZFN0cm9rZTogaGFzRmlsbEFuZFN0cm9rZSxcbiAgICAgICAgICAgIGlzQ2hpbGRPZkljb25XaXRoRmlsbDogaXNDaGlsZE9mSWNvbldpdGhGaWxsLFxuICAgICAgICAgICAgaGFzU2VnbWVudFN0eWxlczogdGV4dExheWVySGFzU2VnbWVudFN0eWxlcyxcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zdCBhbGxJbnN0YW5jZXNPZkNvbG9yID0gbGF5ZXJzV2l0aENvbG9yXG4gICAgICAgIC5tYXAoKGxheWVyKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wQ29sb3JzID0gW107XG4gICAgICAgIGlmIChsYXllci5oYXNGaWxsQW5kU3Ryb2tlKSB7XG4gICAgICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyLCBcImZpbGxzXCIsIHRlbXBDb2xvcnMpO1xuICAgICAgICAgICAgcHVzaENvbG9yVG9BcnJheShsYXllciwgXCJzdHJva2VzXCIsIHRlbXBDb2xvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxheWVyLmhhc0ZpbGwpIHtcbiAgICAgICAgICAgIHB1c2hDb2xvclRvQXJyYXkobGF5ZXIsIFwiZmlsbHNcIiwgdGVtcENvbG9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGF5ZXIuaGFzU3Ryb2tlKSB7XG4gICAgICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyLCBcInN0cm9rZXNcIiwgdGVtcENvbG9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGF5ZXIuaGFzU2VnbWVudFN0eWxlcykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGxheWVyLmxheWVySWQpO1xuICAgICAgICAgICAgY29uc3Qgc2VnbWVudGVkRmlsbHMgPSBub2RlLmdldFN0eWxlZFRleHRTZWdtZW50cyhbXCJmaWxsc1wiXSk7XG4gICAgICAgICAgICBzZWdtZW50ZWRGaWxscy5mb3JFYWNoKChzZWdtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbFN0eWxlSWQgPSBub2RlLmdldFJhbmdlRmlsbFN0eWxlSWQoc2VnbWVudC5zdGFydCwgc2VnbWVudC5lbmQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlZ21lbnRUb0JlUHVzaGVkID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzZWdtZW50KSwgeyBmaWxsU3R5bGVJZCB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXllclRvQmVQdXNoZWQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGxheWVyKSwgeyBzZWdtZW50OiBzZWdtZW50VG9CZVB1c2hlZCB9KTtcbiAgICAgICAgICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyVG9CZVB1c2hlZCwgXCJmaWxsc1wiLCB0ZW1wQ29sb3JzLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wQ29sb3JzO1xuICAgIH0pXG4gICAgICAgIC5mbGF0KCk7XG4gICAgY29uc3QgY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUgPSBhbGxJbnN0YW5jZXNPZkNvbG9yXG4gICAgICAgIC5maWx0ZXIoKGNvbG9yKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2xvclRva2Vucy5zb21lKChvbmVDb3JlQ29sb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5jb2xvclN0eWxlSWQuaW5jbHVkZXMob25lQ29yZUNvbG9yLmtleSk7XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgICAgIC5tYXAoKGNvbG9yKSA9PiB7XG4gICAgICAgIGxldCBvbmVDb3JlVG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbG9yVG9rZW5zLmZvckVhY2goKG9uZUNvcmVDb2xvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbG9yLmNvbG9yU3R5bGVJZC5pbmNsdWRlcyhvbmVDb3JlQ29sb3Iua2V5KSkge1xuICAgICAgICAgICAgICAgIG9uZUNvcmVUb2tlbiA9IG9uZUNvcmVDb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbG9yKSwgeyB0b2tlbjogb25lQ29yZVRva2VuIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IG9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2UgPSBgJHsoKGNvbG9yc1VzaW5nT25lQ29yZVN0eWxlLmxlbmd0aCAvIGFsbEluc3RhbmNlc09mQ29sb3IubGVuZ3RoKSAqXG4gICAgICAgIDEwMCkudG9GaXhlZCgwKX0lYDtcbiAgICBpZiAoZm9yVGhlbWVTd2l0Y2hlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUsXG4gICAgICAgICAgICBhbGxJbnN0YW5jZXNPZkNvbG9yLFxuICAgICAgICAgICAgb25lQ29yZUNvbG9yU3R5bGVDb3ZlcmFnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgY29sb3JzV2l0aENvbG9yU3R5bGUgPSBhbGxJbnN0YW5jZXNPZkNvbG9yLmZpbHRlcigoY29sb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbG9yLmhhc0NvbG9yU3R5bGU7XG4gICAgfSk7XG4gICAgY29uc3QgY29sb3JzTm90VXNpbmdPbmVDb3JlQ29sb3JTdHlsZSA9IGFsbEluc3RhbmNlc09mQ29sb3IuZmlsdGVyKChjb2xvcikgPT4ge1xuICAgICAgICByZXR1cm4gIWNvbG9yVG9rZW5zLnNvbWUoKG9uZUNvcmVDb2xvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmNvbG9yU3R5bGVJZC5pbmNsdWRlcyhvbmVDb3JlQ29sb3Iua2V5KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgaWRzT2ZBbGxJbnN0YW5jZXNPZkNvbG9yID0gYWxsSW5zdGFuY2VzT2ZDb2xvci5tYXAoKGNvbG9yKSA9PiBjb2xvci5jb2xvcklkKTtcbiAgICBjb25zdCBjb2xvclN0YXRzID0ge1xuICAgICAgICBzZWxlY3RlZExheWVyc1dpdGhDb2xvcjogcmF3TGF5ZXJzV2l0aENvbG9yLFxuICAgICAgICBhbGxJbnN0YW5jZXNPZkNvbG9yOiBhbGxJbnN0YW5jZXNPZkNvbG9yLFxuICAgICAgICBjb2xvcnNXaXRoQ29sb3JTdHlsZTogY29sb3JzV2l0aENvbG9yU3R5bGUsXG4gICAgICAgIGNvbG9yc1VzaW5nT25lQ29yZVN0eWxlOiBjb2xvcnNVc2luZ09uZUNvcmVTdHlsZSxcbiAgICAgICAgY29sb3JzTm90VXNpbmdPbmVDb3JlQ29sb3JTdHlsZTogY29sb3JzTm90VXNpbmdPbmVDb3JlQ29sb3JTdHlsZSxcbiAgICAgICAgb25lQ29yZUNvbG9yU3R5bGVDb3ZlcmFnZTogb25lQ29yZUNvbG9yU3R5bGVDb3ZlcmFnZSxcbiAgICAgICAgaWRzT2ZBbGxJbnN0YW5jZXNPZkNvbG9yOiBpZHNPZkFsbEluc3RhbmNlc09mQ29sb3IsXG4gICAgfTtcbiAgICByZXR1cm4gY29sb3JTdGF0cztcbn0pO1xubGV0IHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24gPSB1bmRlZmluZWQ7XG5jb25zdCBzd2l0Y2hUb1RoZW1lID0gKHRoZW1lLCBjbG9zZUFmdGVyUnVuID0gZmFsc2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAoY2xvc2VBZnRlclJ1bikge1xuICAgICAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDcwLCBoZWlnaHQ6IDAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IGBsb2FkaW5nLSR7dGhlbWV9LXRoZW1lLXN3aXRjaGAgfSk7XG4gICAgfVxuICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24gJiYgKHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24gPT09IG51bGwgfHwgdGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbi5jYW5jZWwoKSk7XG4gICAgICAgIGZpZ21hLm5vdGlmeShcIlNlbGVjdCBzb21lIGxheWVycyBiZWZvcmUgY2hvb3NpbmcgYSB0aGVtZVwiLCB7IGVycm9yOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm4gY2xvc2VBZnRlclJ1biAmJiBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgIH1cbiAgICB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uICYmICh0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID09PSBudWxsIHx8IHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24uY2FuY2VsKCkpO1xuICAgIGNvbnN0IGxvYWRpbmdOb3RpZmljYXRpb24gPSBmaWdtYS5ub3RpZnkoYENvbnZlcnRpbmcgc2VsZWN0aW9uIHRvICR7dGhlbWV9IG1vZGUuLi5gKTtcbiAgICBjb25zdCBjb2xvclN0YXRzID0geWllbGQgZ2V0Q29sb3JTdGF0cyh0cnVlKTtcbiAgICBsZXQgaW1wb3J0ZWRTdHlsZXMgPSBbXTtcbiAgICBsZXQga2V5c1RvTG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGtleXMgPSBbXTtcbiAgICAgICAgY29sb3JTdGF0cy5jb2xvcnNVc2luZ09uZUNvcmVTdHlsZS5mb3JFYWNoKChjb2xvcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKFwidGhlbWVcIiBpbiBjb2xvci50b2tlbiAmJiAoKF9hID0gY29sb3IudG9rZW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50aGVtZSkgIT09IHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5T2ZUb2tlbkluT3Bwb3NpdGVUaGVtZSA9IHRoZW1lID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBjb2xvci50b2tlbi5saWdodFRoZW1lVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgOiBjb2xvci50b2tlbi5kYXJrVGhlbWVUb2tlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlJc05vdER1cGxpY2F0ZSA9ICFrZXlzLnNvbWUoKGtleSkgPT4ga2V5ID09PSBrZXlPZlRva2VuSW5PcHBvc2l0ZVRoZW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5T2ZUb2tlbkluT3Bwb3NpdGVUaGVtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBNaXNzaW5nIHRva2VuOiBObyAke3RoZW1lfSB0aGVtZSB0b2tlbiBmb3VuZCBmb3IgXCIke2NvbG9yLnRva2VuLm5hbWV9XCIuYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAga2V5SXNOb3REdXBsaWNhdGUgJiYga2V5cy5wdXNoKGtleU9mVG9rZW5Jbk9wcG9zaXRlVGhlbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfTtcbiAgICBpbXBvcnRlZFN0eWxlcyA9IHlpZWxkIFByb21pc2UuYWxsKGtleXNUb0xvYWQoKS5tYXAoKGtleSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoa2V5KTsgfSkpKTtcbiAgICBmb3IgKGNvbnN0IGNvbG9yIG9mIGNvbG9yU3RhdHMuY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUpIHtcbiAgICAgICAgaWYgKFwidGhlbWVcIiBpbiBjb2xvci50b2tlbiAmJiAoKF9hID0gY29sb3IudG9rZW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50aGVtZSkgIT09IHRoZW1lKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoY29sb3IubGF5ZXJJZCk7XG4gICAgICAgICAgICBjb25zdCBrZXlPZlRva2VuSW5PcHBvc2l0ZVRoZW1lID0gdGhlbWUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgID8gY29sb3IudG9rZW4ubGlnaHRUaGVtZVRva2VuXG4gICAgICAgICAgICAgICAgOiBjb2xvci50b2tlbi5kYXJrVGhlbWVUb2tlbjtcbiAgICAgICAgICAgIGNvbnN0IGltcG9ydGVkU3R5bGUgPSBpbXBvcnRlZFN0eWxlcy5maWx0ZXIoKHN0eWxlKSA9PiBzdHlsZS5rZXkgPT09IGtleU9mVG9rZW5Jbk9wcG9zaXRlVGhlbWUpWzBdO1xuICAgICAgICAgICAgaWYgKGtleU9mVG9rZW5Jbk9wcG9zaXRlVGhlbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBNaXNzaW5nIHRva2VuOiBObyAke3RoZW1lfSB0aGVtZSB0b2tlbiBmb3VuZCBmb3IgXCIke2NvbG9yLnRva2VuLm5hbWV9XCIuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbG9yLmxheWVySGFzU2VnbWVudFN0eWxlcykge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0UmFuZ2VGaWxsU3R5bGVJZChjb2xvci5zZWdtZW50LnN0YXJ0LCBjb2xvci5zZWdtZW50LmVuZCwgaW1wb3J0ZWRTdHlsZS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlW2Ake2NvbG9yLmNvbG9yVHlwZX1TdHlsZUlkYF0gPSBpbXBvcnRlZFN0eWxlLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRpbmdOb3RpZmljYXRpb24uY2FuY2VsKCk7XG4gICAgY29uc3QgY292ZXJhZ2VBc0ludGVnZXIgPSBjb2xvclN0YXRzLm9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2Uuc3Vic3RyaW5nKDAsIGNvbG9yU3RhdHMub25lQ29yZUNvbG9yU3R5bGVDb3ZlcmFnZS5sZW5ndGggLSAxKTtcbiAgICBjb25zdCBpc0Vycm9yV29ydGh5ID0gcGFyc2VJbnQoY292ZXJhZ2VBc0ludGVnZXIpIDwgNTA7XG4gICAgaWYgKGNvbG9yU3RhdHMub25lQ29yZUNvbG9yU3R5bGVDb3ZlcmFnZSA9PT0gXCIxMDAlXCIpIHtcbiAgICAgICAgdGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiA9IGZpZ21hLm5vdGlmeShgJHt0aGVtZSA9PT0gXCJsaWdodFwiID8gXCLwn5SGXCIgOiBcIvCfjJlcIn0gU2VsZWN0aW9uIHNldCB0byAke3RoZW1lfSBtb2RlYCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID0gZmlnbWEubm90aWZ5KGDinIsgV2FybmluZzogT25seSAke2NvbG9yU3RhdHMub25lQ29yZUNvbG9yU3R5bGVDb3ZlcmFnZX0gY29udmVydGVkIHRvIFxuICAgICAgJHt0aGVtZX0gbW9kZSBiZWNhdXNlIHNvbWUgY29sb3JzIGFyZW4ndCB1c2luZyBPbmUgQ29yZSBjb2xvciBzdHlsZXMuYCwgeyB0aW1lb3V0OiBpc0Vycm9yV29ydGh5ID8gOTk5OTk5OTk5IDogMTUwMDAsIGVycm9yOiBpc0Vycm9yV29ydGh5IH0pO1xuICAgIH1cbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6IFwidGhlbWUtc3dpdGNoZWRcIixcbiAgICAgICAgbWVzc2FnZTogT2JqZWN0LmFzc2lnbih7IHN3aXRjaGVkVG86IHRoZW1lLCBjbG9zZUFmdGVyUnVuLCBjb2xvcnNVc2luZ09uZUNvcmVTdHlsZTogY29sb3JTdGF0cy5jb2xvcnNVc2luZ09uZUNvcmVTdHlsZS5sZW5ndGgsIGNvbG9yc1NlbGVjdGVkOiBjb2xvclN0YXRzLmFsbEluc3RhbmNlc09mQ29sb3IubGVuZ3RoLCBjb2xvcnNTd2l0Y2hlZDogY29sb3JTdGF0cy5vbmVDb3JlQ29sb3JTdHlsZUNvdmVyYWdlIH0sIGN1c3RvbUV2ZW50RGF0YSksXG4gICAgfSk7XG59KTtcbmNvbnN0IGZpbGVOYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KGZpZ21hLmN1cnJlbnRQYWdlLnBhcmVudC5uYW1lKTtcbmNvbnN0IGN1cnJlbnRTZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG5jb25zdCBjdXJyZW50Tm9kZUlkID0gZW5jb2RlVVJJQ29tcG9uZW50KGN1cnJlbnRTZWxlY3Rpb24ubGVuZ3RoID4gMCA/IGN1cnJlbnRTZWxlY3Rpb25bMF0uaWQgOiBmaWdtYS5jdXJyZW50UGFnZS5pZCk7XG5jb25zdCBmaWxlVXJsID0gYGh0dHBzOi8vZmlnbWEuY29tL2ZpbGUvJHtmaWdtYS5maWxlS2V5fS8ke2ZpbGVOYW1lfT9ub2RlLWlkPSR7Y3VycmVudE5vZGVJZH1gO1xubGV0IGN1c3RvbUV2ZW50RGF0YSA9IHtcbiAgICBmaWxlTmFtZTogZmlnbWEuY3VycmVudFBhZ2UucGFyZW50Lm5hbWUsXG4gICAgZmlsZUtleTogZmlnbWEuZmlsZUtleSxcbiAgICBcIlVzZXIgTmFtZVwiOiBmaWdtYS5jdXJyZW50VXNlci5uYW1lLFxuICAgIFwiVXNlciBBdmF0YXJcIjogZmlnbWEuY3VycmVudFVzZXIucGhvdG9VcmwsXG4gICAgXCJVc2VyIElEXCI6IGZpZ21hLmN1cnJlbnRVc2VyLmlkLFxuICAgIFwiU2Vzc2lvbiBJRFwiOiBmaWdtYS5jdXJyZW50VXNlci5zZXNzaW9uSWQsXG4gICAgZmlsZVVybCxcbn07XG5jb25zdCBuYXZpZ2F0ZVRvID0gKHNjcmVlbikgPT4ge1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJmaWdtYS1jb21tYW5kXCIsXG4gICAgICAgIG1lc3NhZ2U6IE9iamVjdC5hc3NpZ24oeyBvcGVuZWRUbzogc2NyZWVuIH0sIGN1c3RvbUV2ZW50RGF0YSksXG4gICAgfSk7XG59O1xuY29uc3QgbmF2aWdhdGlvbkFjdGlvbnMgPSB7XG4gICAgXCJvcGVuLWhvbWVcIjogKCkgPT4ge1xuICAgICAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgdGhlbWVDb2xvcnM6IHRydWUsIHdpZHRoOiAzMDAsIGhlaWdodDogNDQ4IH0pO1xuICAgICAgICBuYXZpZ2F0ZVRvKFwib3Blbi1ob21lXCIpO1xuICAgIH0sXG4gICAgXCJvcGVuLXRhYmxlLWNyZWF0b3JcIjogKCkgPT4ge1xuICAgICAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgdGhlbWVDb2xvcnM6IHRydWUsIHdpZHRoOiAzMDAsIGhlaWdodDogNDQ4IH0pO1xuICAgICAgICBuYXZpZ2F0ZVRvKFwib3Blbi10YWJsZS1jcmVhdG9yXCIpO1xuICAgIH0sXG4gICAgXCJ0aGVtZS1zd2l0Y2hlci10by1saWdodFwiOiAoKSA9PiB7XG4gICAgICAgIHN3aXRjaFRvVGhlbWUoXCJsaWdodFwiLCB0cnVlKTtcbiAgICB9LFxuICAgIFwidGhlbWUtc3dpdGNoZXItdG8tZGFya1wiOiAoKSA9PiB7XG4gICAgICAgIHN3aXRjaFRvVGhlbWUoXCJkYXJrXCIsIHRydWUpO1xuICAgIH0sXG4gICAgXCJvcGVuLWxhbmd1YWdlLWxpbnRlclwiOiAoKSA9PiB7XG4gICAgICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB0aGVtZUNvbG9yczogdHJ1ZSwgd2lkdGg6IDQ3NSwgaGVpZ2h0OiA1MDAgfSk7XG4gICAgICAgIG5hdmlnYXRlVG8oXCJvcGVuLWxhbmd1YWdlLWxpbnRlclwiKTtcbiAgICB9LFxuICAgIFwib3Blbi1jb2xvci1saW50ZXJcIjogKCkgPT4ge1xuICAgICAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgdGhlbWVDb2xvcnM6IHRydWUsIHdpZHRoOiA0NzUsIGhlaWdodDogNTAwIH0pO1xuICAgICAgICBuYXZpZ2F0ZVRvKFwib3Blbi1jb2xvci1saW50ZXJcIik7XG4gICAgfSxcbn07XG5uYXZpZ2F0aW9uQWN0aW9uc1tmaWdtYS5jb21tYW5kXSgpO1xuY29uc29sZS5sb2coZmlnbWEuY29tbWFuZCk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAobXNnLnR5cGUgPT09IFwibmF2aWdhdGUtdG8tdGFiXCIpIHtcbiAgICAgICAgc3dpdGNoIChtc2cudGFiQ2xpY2tlZCkge1xuICAgICAgICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgICAgICAgICB1aVNpemUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDQ4LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKHVpU2l6ZS53aWR0aCwgdWlTaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbyhcIm9wZW4taG9tZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0YWJsZS1jcmVhdG9yXCI6XG4gICAgICAgICAgICAgICAgdWlTaXplID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0OCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSh1aVNpemUud2lkdGgsIHVpU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG8oXCJvcGVuLXRhYmxlLWNyZWF0b3JcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGFuZ3VhZ2UtbGludGVyXCI6XG4gICAgICAgICAgICAgICAgc2VuZEN1cnJlbnRUZXh0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgdWlTaXplID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDc1LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSh1aVNpemUud2lkdGgsIHVpU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG8oXCJvcGVuLWxhbmd1YWdlLWxpbnRlclwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjb2xvci1saW50ZXJcIjpcbiAgICAgICAgICAgICAgICB1aVNpemUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NzUsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAwLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKHVpU2l6ZS53aWR0aCwgdWlTaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbyhcIm9wZW4tY29sb3ItbGludGVyXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PSBcImRpc3BsYXktZXJyb3JcIikge1xuICAgICAgICBmaWdtYS5ub3RpZnkobXNnLmNvbnRlbnQsIHsgZXJyb3I6IHRydWUgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJpbml0aWFsaXplLXNlbGVjdGlvblwiKSB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwiaW5pdGlhbC1zZWxlY3Rpb25cIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJjbG9zZS1wbHVnaW5cIikge1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiY3JlYXRlLXRhYmxlXCIpIHtcbiAgICAgICAgY3JlYXRlVGFibGUobXNnKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcInJ1bi1sYW5ndWFnZS1saW50ZXJcIikge1xuICAgICAgICBzZW5kQ3VycmVudFRleHRTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcInJlcXVlc3QtbG9jYWwtY3VzdG9tLWRpY3Rpb25hcnlcIikge1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlXG4gICAgICAgICAgICAuZ2V0QXN5bmMoXCJsYW5ndWFnZUxpbnRlckN1c3RvbURpY3Rpb25hcnlcIilcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImxvY2FsLWN1c3RvbS1kaWN0aW9uYXJ5LXJldHJpZXZlZFwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdCA/IHJlc3VsdCA6IFtdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiYWRkLXRvLWRpY3Rpb25hcnlcIikge1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlXG4gICAgICAgICAgICAuZ2V0QXN5bmMoXCJsYW5ndWFnZUxpbnRlckN1c3RvbURpY3Rpb25hcnlcIilcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdDdXN0b21EaWN0aW9uYXJ5ID0gcmVzdWx0ID8gcmVzdWx0IDogW107XG4gICAgICAgICAgICBuZXdDdXN0b21EaWN0aW9uYXJ5LnB1c2gobXNnLndvcmRUb0FkZCk7XG4gICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIsIG5ld0N1c3RvbURpY3Rpb25hcnkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcImdldC1zYW1wbGUtdGV4dFwiKSB7XG4gICAgICAgIGNvbnN0IHNhbXBsZVRleHQgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzYW1wbGUtdGV4dFwiLCBtZXNzYWdlOiBzYW1wbGVUZXh0IH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwic2FtcGxlLXRleHQtY2hhbmdlZFwiKSB7XG4gICAgICAgIHNlbGVjdEFuZFpvb21Ub0xheWVyKG1zZy5hY3RpdmVOb2RlSWQpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwidXBkYXRlLXNvdXJjZS10ZXh0XCIpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlVGV4dExheWVyID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmxheWVySWQpO1xuICAgICAgICBsZXQgZm9udE5hbWUgPSBhY3RpdmVUZXh0TGF5ZXIuZm9udE5hbWU7XG4gICAgICAgIGlmIChmb250TmFtZSA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKGFjdGl2ZVRleHRMYXllclxuICAgICAgICAgICAgICAgIC5nZXRSYW5nZUFsbEZvbnROYW1lcygwLCBhY3RpdmVUZXh0TGF5ZXIuY2hhcmFjdGVycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgLm1hcChmaWdtYS5sb2FkRm9udEFzeW5jKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGZvbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmVUZXh0TGF5ZXIuZGVsZXRlQ2hhcmFjdGVycygwLCBhY3RpdmVUZXh0TGF5ZXIuY2hhcmFjdGVycy5sZW5ndGgpO1xuICAgICAgICBhY3RpdmVUZXh0TGF5ZXIuaW5zZXJ0Q2hhcmFjdGVycygwLCBtc2cudXBkYXRlZFRleHQpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcInNvdXJjZS10ZXh0LXVwZGF0ZWRcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1zZy51cGRhdGVkVGV4dCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJ0ZXh0LWxpbnRlZFwiKSB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dC1saW50ZWRcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICBjdXN0b21FdmVudERhdGEsXG4gICAgICAgICAgICAgICAgbWluaW1hbFJlcG9ydDogbXNnLm1pbmltYWxSZXBvcnQsXG4gICAgICAgICAgICAgICAgZnVsbFJlcG9ydDogbXNnLmZ1bGxSZXBvcnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgc2VuZENvbG9yRGF0YSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBnZXRDb2xvclRva2VucyhmYWxzZSk7XG4gICAgICAgIGNvbnN0IGNvbG9yU3RhdHMgPSB5aWVsZCBnZXRDb2xvclN0YXRzKCk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwiY29sb3Itc3RhdHNcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3VzdG9tRXZlbnREYXRhKSwgeyBjb2xvclN0YXRzOiBjb2xvclN0YXRzLCBjb2xvclRva2VuczogY29sb3JUb2tlbnMsIHNlbGVjdGlvbk1hZGU6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPiAwIH0pLFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAobXNnLnR5cGUgPT09IFwicnVuLWNvbG9yLWxpbnRlclwiKSB7XG4gICAgICAgIHNlbmRDb2xvckRhdGEoKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcInNlbGVjdC1sYXllclwiKSB7XG4gICAgICAgIHNlbGVjdEFuZFpvb21Ub0xheWVyKG1zZy5sYXllcklkKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcImFwcGx5LWNvbG9yLXN0eWxlXCIpIHtcbiAgICAgICAgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKG1zZy5jb2xvclN0eWxlS2V5KS50aGVuKChpbXBvcnRlZCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmxheWVySWQpW2Ake21zZy5jb2xvclR5cGV9U3R5bGVJZGBdID0gaW1wb3J0ZWQuaWQ7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJjb2xvci1yZXBsYWNlZFwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3VzdG9tRXZlbnREYXRhKSwgeyBsYXllcklkOiBtc2cubGF5ZXJJZCwgbGF5ZXJOYW1lOiBmaWdtYS5nZXROb2RlQnlJZChtc2cubGF5ZXJJZCkubmFtZSwgb3JpZ2luYWxDb2xvcjogbXNnLm9yaWdpbmFsQ29sb3IsIGNvbG9yU3R5bGVLZXk6IG1zZy5jb2xvclN0eWxlS2V5LCBjb2xvclN0eWxlTmFtZTogbXNnLmNvbG9yU3R5bGVOYW1lLCBjb2xvclN0eWxlQ29sb3I6IG1zZy5jb2xvclN0eWxlQ29sb3IgfSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJyZXNpemVcIikge1xuICAgICAgICBmaWdtYS51aS5yZXNpemUobXNnLnNpemUueCA+PSB1aVNpemUud2lkdGggPyBtc2cuc2l6ZS54IDogdWlTaXplLndpZHRoLCBtc2cuc2l6ZS55ID49IHVpU2l6ZS5oZWlnaHQgPyBtc2cuc2l6ZS55IDogdWlTaXplLmhlaWdodCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJ0aGVtZS1zd2l0Y2hlci10by1kYXJrXCIpIHtcbiAgICAgICAgc3dpdGNoVG9UaGVtZShcImRhcmtcIik7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJ0aGVtZS1zd2l0Y2hlci10by1saWdodFwiKSB7XG4gICAgICAgIHN3aXRjaFRvVGhlbWUoXCJsaWdodFwiKTtcbiAgICB9XG59KTtcbmZpZ21hLm9uKFwic2VsZWN0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGlvbmNoYW5nZSBldmVudCB3YXMgZmlyZWRcIik7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInNlbGVjdGlvbi1jaGFuZ2VkXCIsXG4gICAgICAgIG1lc3NhZ2U6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbixcbiAgICB9KTtcbn0pO1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==