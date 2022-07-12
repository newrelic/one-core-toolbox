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

module.exports = JSON.parse("{\"error\":false,\"status\":200,\"meta\":{\"styles\":[{\"key\":\"89a9e28e7065a09932d897c109652e0f13d56c51\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"618:1563\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4z6/UmV/yl6rwFs0hU4KbVkT/style_thumbnail_0.png?Expires=1658707200&Signature=KJ~g6nTtJ6I5kORzbnBGJwkc6BrHfhxFyMd-pMM74XmKGZ~PpEevyE5LA9QeTKnwhNI9PvKk9kPiWdyfqzRKXiEf8pXcUHfx1nwFqPkCxFdmRaGDT-gmI8WLmkd2lsilG2EVVhQ~oqMQcjWrZo-bzyiCmoZ2GuBS8JwNt7sBPcxHKi0TrZTMbIgLSr9yLgZtYMmRk6rATTXCHB-vpGIM~8MpqT-f0j4wIVUsVJZJBOK~u077Q3Gfbjy~3BBQP0q31IBb2QgglkGL-Ya0fG6rcq6i8qjBQA8ILn~Py2kl1SSbRhgGdfUaY-BCryYKTCDKerKTJ~Pq-DGxn5ljC6avOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Severe\",\"description\":\"\",\"created_at\":\"2022-07-06T10:33:20.978Z\",\"updated_at\":\"2022-07-06T10:33:20.978Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"LO\"},{\"key\":\"dc402c03ad1e60da766ba4fcf5a13ea0c2bcbe60\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"354:1610\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Zks/8Cb/s9VrPYo4c6RLVLzy/style_thumbnail_0.png?Expires=1658707200&Signature=HOGPMMLEqgCTvkjnHTQNeO2FE0H4DjBToVQDm8b~IwrA2lBBYt-5e2RPvJ6uT4qVCKgT5SRr8tZM4d098C~JdOJeQ6JfrkPKiQL42bMudO07q6sJCG2kPNrc9GR-s4QthEy94DZETzOO30lLKb1i~LucbOk6gQaeJjkB0f4U0xXXQpfOnHF~~bU-xtRpcveD~fy8K2MgPYtFmw7NL48UtCOnycRYkJKYslF1EomP4Fsh9OnVr~M1ig9NW-g4q-vWFLc~cwzgpY29nMZ4Xb-KcYtSQbKsFMPsHjR-U5hF1WE9yIEgU5r6dh2mKqORlZQPzk5INLOl3J-I76zYDUH-gA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Severe\",\"description\":\"\",\"created_at\":\"2022-04-19T13:56:42.247Z\",\"updated_at\":\"2022-07-05T13:17:27.438Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"`O\"},{\"key\":\"b2d74f583bf2b4d79faf4f598c1a03ea4dc00630\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"354:1604\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/pJG/7eJ/mbWcy61MZ5nCII9A/style_thumbnail_1.png?Expires=1658707200&Signature=KGS1DXrcJGtX00vtVypUrlkYUtAZkG1Nt~l0gT4FcKPNSlh54zwzqdUdSBiiNqFtyLp3OBJR7ZY0r-1nBJ4AsHNMHf4fFPSsVujjPSv6-x5bn4HtgoB9OuslbriVfJRSxZ836cfE7tyAlUGYx-r0apRpy7uSnMi0WZAT8yeLjrE~FzTExG7s~EkoluGhV0VsVFv2gW8ruK1VcWjj4fBIRMq4Sbshi3cRdzdAnZvLnEGVahR1KHd~tU2dywDvdZ5aEeT5S8BThqC-bw-t3C9KOZYFy9nwpTZpfNoOCjBsDdpXgQy-mpQci3JrVLRYdFuA7LrtT4G9tfwHWVBg8tJssg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Severe Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-04-19T13:56:42.239Z\",\"updated_at\":\"2022-07-05T13:17:27.430Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"QO\"},{\"key\":\"e6fc8e5dc3df8c899a20780b6204efc818a14d7f\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"234:1555\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4LO/oVc/732OljlnBcNppPRi/style_thumbnail_48.png?Expires=1658707200&Signature=PnrO15cx6vv2a4-w7BmNdMI0CzF38NVBymJ4M3pxtgDF4FwaOpkHvoAfgsbBAz61zoCasilmzxjs90HxED1WD4OuatQ16oVzJd2dpdEB-fDv5BCYpcpiTGokac6pqa-fuugf6wzBNqJw9-fQoOci0IKx6Fd4ft9pBwRu10Yi1LHGZ49Fa35zy2xR3WkJBGpWEqc1FiTpcieEBKsnRHga5~i-SnpgIAGY9BqyRW7wwYLCioGvItaemSe~cSYSZNTGp4YsKvK6h3po3R9vqKfy84blTy817RdJJROc4UWzCyW6etN9Q-86Hkh3tWa1cYxQ5fN4NDHT3-e6IEJb8l9swA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Selected\",\"description\":\"\",\"created_at\":\"2022-03-14T14:38:06.263Z\",\"updated_at\":\"2022-05-13T09:40:25.495Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e/\"},{\"key\":\"e80c27cec2c1bba6e5c3ddf88cc028ddea3178e8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"490:1563\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/A8U/p6s/40yY0trx1zcbhWLC/style_thumbnail_1.png?Expires=1658707200&Signature=G8qElOrAPOL-CKOq-mpvSb6m~gF7wvnCBhXXEueWMgFUIHG2zoKm6~t5st75~MsNVC4Hu9ea~g3HhgmX80hiiiK4aCAGnWr--6NiFQ4atsKIsqIB1dNweQ-VvBc6jlhXZ~n8-kBRuf~GhKvhZ9CGAQCvXziGUWo-zPAvFr8WNFZtLU2an6jM0dA3V8S9JcWbAZSpwJLD3aoxogQIfrkQGL0mXeOVLSr6GXjrOeuDUDmns3F7KZzBCzSRVkq7AqLdpFsib-6-SRA7k0LC1OimBW0jQdU5D4ayP11wqJS4KVd6i6-T5UGIlQhkhWMTj06--ZU~IzNS45GGZvKAMAmdKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Hover\",\"description\":\"\",\"created_at\":\"2022-05-13T09:40:25.395Z\",\"updated_at\":\"2022-05-13T09:40:25.395Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e.\"},{\"key\":\"6c5fea659d4dba983327456079ad0a259f9121f7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1847\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Rtn/6mv/bxZevKI28Y2sxc4o/style_thumbnail_0.png?Expires=1658707200&Signature=XmdeJ7bp0nwoFFFxnA5-rJrTvP~KL9JFTwoYIkd36MqBD~LVHzpCE4MOkOO73fD5Lr2KDZGi9MJ9JHAlF-H2Hbps5vHgKGSiN4YDRDzSN9v2RrBix-ok2oPGU~ZbhbyA7DeKtlwO3xxvAWB3KdyELAEOIqWh~zr6oGqFdVEn-EjlOaZB~Ic9AAKXg1oRamNEQTGz~ASojdVKmqtGUMgEOvUL2du5qjTPRn5OKPNGuebk3ZSaXkMkmas0BP~8ExZ1lIFgQZgfLTchKh143MQIRvVECTpKq5OUsf7NSDEoABpekBmj~i3bwUgd3XTcVqzILZvKKVkV4exU~W5aT0YOTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Regex\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.589Z\",\"updated_at\":\"2022-05-10T06:11:55.384Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~0x\"},{\"key\":\"4edbb9f84d88ce62dfe77c1e6a84164b68cb78e0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1844\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/W1A/i4D/mdb5IFisQipeEyTd/style_thumbnail_2.png?Expires=1658707200&Signature=Dw2L0HqUoHyF6cK9E5~Tdm~quw3ztpnkL39O-NPggJ5SJrkv6AdGbzKvbOKYcsE1ARqTn1T~nHTYQsWKw3kToukoRjRmNGuNtwpMdlV2lkBTvOZyX-b8c~SYANXsH1ZfYWgBaE5rCQ8Udoatd8sSspsnFkN3f1YNTBZY8x73P1vehCT6tpqmOR-Zf3yjM3xjkTu7MxaQ1OH-aQZN~zIE6IT~Dcuio1L972eJg-9FYmSEjzVLNs9AY5rmKMmfOtmFMj0VmZuxCgoz7RSzgdTDFEoZtusqaKRuOjXpeVybLXbAgRReMaqfoxeYqcL~LcAD-uKN5Xm~1srMftgWCOMqLA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Keyword\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.483Z\",\"updated_at\":\"2022-05-10T06:11:55.378Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~0O\"},{\"key\":\"47ddb6fe30190a1679d0e88be69134f30e018b86\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1845\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jnj/ul9/M9LIYOm6f2PZuQ7l/style_thumbnail_1.png?Expires=1658707200&Signature=BEMpqIAvTHSST2wiVfCqi4mIGxye5ztmQ95j2uR0TWqC~nQw0zLcposMsjKq7XrxAbwQA9DAO0Lp4hd5e6IZRt-pO7PX-yH2XeiRAClQSP4uWhItRMTVcNdANjVd0QMuSDHzYOgwKRwZDb-ELfGyrQkjIH8ZtHsFJWIHwweqIeMOWRxXr~p1EKbVyvUR561XSoWSzjYUymxQKXOHR-ZUlWKO8kN38z4OgDDTOHGsqvXWyzNQF0JCbrdOGyUFzJOWtaDsmWitllli1174QZUkYzz2J3xCY6PHPVwVLXM1WoarTvzggygq2R9H5NrT02P07ZihgDkP4TLA6CA7heNlxA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Function\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.517Z\",\"updated_at\":\"2022-05-10T06:11:55.372Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~0f\"},{\"key\":\"c412194794f517b78c51920ae546c608e6056dae\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1684\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NVd/lyp/ygrW9XZQ7DJ7qyp5/style_thumbnail_0.png?Expires=1658707200&Signature=Awk8ac7JGeAFTV9Lo8hiSDucoVUzwj8a9033A-iGbbHLPq8ik-juEwxin2VYVJGHG1wrS9Xpf~6-GnKpxVgv-3ei3n~uu4Z7dJPD2EsgVndDavYUDjwb77KGPWbRNwzjZoPg0u1S1wVwIiK0D2Js6JOA~E1BHnpzMcOqfnzaPeatR~rvPQ6xompO0W3P7~SWW4koPKBsBDQQP~pSSunM2uwbWviM~eagtiMzD8wBhfzG8XZo9T0mQu1KCMFLqGntv4ZY3GdFYxaZRkvaepiwQs~wUUAW70nqjpPABswLtKaJrGY9VHOUzFp4gfMwJf75TiGMNdvbQ7PptjN1K2HRBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.762Z\",\"updated_at\":\"2022-05-03T08:33:04.291Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4r\"},{\"key\":\"cf6767f66c45888b1e41ba493a433e3273a89d8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1483\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/5P9/9fe/bJWszhV66ntAUXB8/style_thumbnail_2.png?Expires=1658707200&Signature=e7APWJ36ZqFadu58E4H1jVTedwlZXvFsKLUl2nZSB5zUtrMipsO8mnsEugvddlW3k3UbeY-5-~MwlnV7PCX~IWMgv03B3~ppoL~lTyURaFnZboQJiqhF0WM22iY163mVZIe75CGtfELcF7x~9uH17P3coqBMfyRzrRAjA13VZ42iZkQfce9GxkVKK8cjEgZis7qe540STkrkJvtu4J3z~Ah2nCzzky~GiiAZ9rR8KalddH-cb8nZLeJT~nzB2sY1Nb3m0pw2rNlzCjpzqOk-8Kpwo6DLEHucICuRA42vdCLRrNOYy1CgIFXVqRHf0O0vheXN1hkYNSL1iypxT5z5Tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.887Z\",\"updated_at\":\"2022-04-28T09:01:01.916Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"S\"},{\"key\":\"bc570b6f33e00d9ef7df42a829bb6f9799bd08db\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1486\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/qxG/1Ua/LadLL0qCRmwjptAq/style_thumbnail_4.png?Expires=1658707200&Signature=CFYd411NyJzH56wnLolcE-cYWi0GpUSIe2T2f1wyzkoQkS8zTCgMktPJAchPqENYEPClWh~GKJa6Jfn3JgPyg-8siamaGs1VcMPAfd65m-RXPMX-EDEyoH0WkNdYrTrk7eSMG~VtYDnmxxKMZ3vytditU7ixQw6YHfYY6~6Zkk3g4rI-92gv2s8sAsov6BN5bK-iySfGQfJ5cvLWRQMI3T9MP1ST83eUDcRY1c9qt4oJDO6jM63jnRTHyw7PLSIKRoEx2OeollHsG8-F79COwXas5lnsMU8ou4Xg6y3i8pHo42eWR8igOx7zgX98h71E1pdmuDs~hCqgkrLVe9NIyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.992Z\",\"updated_at\":\"2022-04-28T09:01:01.910Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"V\"},{\"key\":\"a04d540bdb338462ff6a60b5afa6eb2eb04a8971\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1487\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Z2t/CSP/hPLGhJdesaPvx8fH/style_thumbnail_3.png?Expires=1658707200&Signature=dGR5jtHY4~Qee1-5MrH9hbL2DIyUPwDULCdniyXoQY2YqNC3tjqKIICUoFFtZYNJ50wFXOWMCkFCadlV6G9gLASRvQ8MPzai9THxWy1HjH1p-Xr-B~ugZQ6UJ5TCHhFbteqo17YGejFJb9IyJtF8LKLSQ2-SqpLJmshWvbNpYLeTIevq2atr4SrPjGUqGnttVF774pcy2MzPrQN4FKoMKB1PjlnWqHqfMnW6ukU~VmUqKKLdaFXz93ySfTGm3K8KIFkklrLZx5gKmuoVJORvSJW5bwyj2LNi548wCdhQCMmK6De3z3k-VT19Yonmbmu1sSXXpaEVNhaH3Q~CV~B-ag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.908Z\",\"updated_at\":\"2022-04-28T09:01:01.905Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"W\"},{\"key\":\"055ba18d27bbc736d810f502e4be9030b754ea99\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1435\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/B0h/A5f/Ve9reWw33IU1dqbW/style_thumbnail_0.png?Expires=1658707200&Signature=ciheH1NAB73yNwRKveuGeLxq~OozcuxlnQjt0JKfHaecYJUEGgtK3jYC-iwWs3RX-GUttPMcAawMczLx2NA4KOKj6tYv9z4RcQFlBKrrJ-QnttZKoB~ZHE6S36IlsQuZk3sBLs9bJ3nLbyLKxJqIBtFPgCX0u1VoiX-eu~u96A-acQaq4Mu~fv6BoNbsIrElkU36wjOYLrDD9xquqTbAiqQEZLLJdLd~AwsIGKCi0CwhqilsumBsAsIsKNeQuNvS0~fp3ADb6vPdw4Jioxdhpj5cAVYRdjbmbJKjktOuP6TS9nNR4ADnko1BPwHGesjsK9jMFpre3gArTO4Ygs3RPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.523Z\",\"updated_at\":\"2022-04-28T09:01:01.899Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"Q\"},{\"key\":\"ab55f498d4517ba8ab842da582fc432292b768ad\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"402:1560\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aPB/xM1/Z7ofvqDjD2LZ2QR6/style_thumbnail_1.png?Expires=1658707200&Signature=cKqGP13xxNZ8Ja~XXweaC6mhHyBgj5Y0wtHlp63nUsClFw50D-TTe61AjYrL973oeQ6dvZ2mH-wy0CeByX~YgryqjpLzFmhOnu2lsy7Ry67nRLxzSbGx~qKgiafXMbIDaGFqx9zBNZIMFFawamS46rNKLpmNUrlPkdW-yzgldrf6UqLejHtLsBcBW4lQtBiunSpkJ-Qe4-R-r8u4pv7QIPu89F1AikPN7H8Grd7MR9jMNKNJHkyaGwyE03ps9TDmcY20z6sjcZG1TSHS2M8mpm5jblilRE~ZPQoDnRC6ZcP6QCA~3VkTRgQipPN6ANvqAgY59ExAbqwn0u01w8Sjxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Overlay\",\"description\":\"\",\"created_at\":\"2022-04-28T09:01:01.878Z\",\"updated_at\":\"2022-04-28T09:01:01.878Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~eN}}}}}|f\"},{\"key\":\"a93e2537f8f9d7d34caff3b9313fe3543b29fe7c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"388:1580\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fsc/BJ3/VyIYPTpIbsiZfu1q/style_thumbnail_0.png?Expires=1658707200&Signature=D7eSmbbnBbf0mwo9xsFBph9TABtgm0Gm-TFkB-2~2gCKbfptD7xmOGd0q0JIf42qGbXx95QB9utq0x3qorIoeyEMYhNvR5-FYKXRasfz-pKgs1ZDsalLY-jUXVnmClgvPV9chO91IVLmugLwqx0lbEhOYzKyr49R4m2hTEGca-sKGPrKnrBZ0uKBrQGDAMcwaMWPXo0WNNLNPFonwG3HBP~mS4CtBXHlkExM9qx9CGN8daM12f4g3sxzMacM1tpCr~8v8ZgkRMCfAxW611ClyINwb1x1lRQu1E9pTXQceWjf-iegzAQDm-AtvZcGY5NxsGql~rWCNh~1Joo0iKYu6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Muted\",\"description\":\"\",\"created_at\":\"2022-04-27T14:24:08.074Z\",\"updated_at\":\"2022-04-27T14:24:08.074Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~i\"},{\"key\":\"fdd2bbb7f23cab937357c3dd786f0cd654705923\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1305\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NHz/wvQ/9rCmPuW7C582piVx/style_thumbnail_1.png?Expires=1658707200&Signature=E1xK~ZffbnWsRzQ7zV3SwdByp3XWJWDnW-XR7H9txyoAcnOG1wFd6itRRlFI6Fla5I3irAq25BL3MwNNV48~2yC7ZY273zc3ri43oMmEnZxf53C3iGbaWW6axAZ41wuZb37nkALK7kYGAS9RO98KExN2VLVCMwqXLCFTuVAQ-Boen~B9pc~u2mGvslqfQP9BtRxJbFn2M7YiP0Sfjs7giAH~d1TZkkTBVMgYyNlwayUWLwfeqJq4F5zDYzzFNoy4E~cIMuZbTDnfmzZ0JtC6GRNF-Pzm3GbnFhk2kcsYhp1IJxO9VBKKN5gvhR-o38ZkLNRoNCXPPtJ6Mffuk1zv8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.696Z\",\"updated_at\":\"2022-04-27T10:29:30.135Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eL\"},{\"key\":\"bcd86bf284a03ad183ea1ba56ad05474058ea1af\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1307\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jKy/eP1/lrWY6X7upEis6dYT/style_thumbnail_4.png?Expires=1658707200&Signature=b04REhOFfhBxabbqtnv-aS7BgQH1uE1SWxAGNqd13dDURZQNZJmBoOpmeXzH85TEYRdkHLE2cpR4K8rf0LRNVquszpRzI5VXh6EJK0l3-Grqv45p4tTa~9lIKtGj6YlSnSSDzDQXG4ZUcxUM~D8--EJxy7fNH4pBukKrZuvkakmOq~qjFNslG2HE-Z9xOCEsAcxRFm6eoAGfRT8BlCw38yfY6EeJKOx3EKP~56CyVOcBuyR8w5o6bVXC1JLoSK-8VVCRtqBHvrTb2sxIVwgh5ZNjls72o-MzRIK0lXj6hAPe4FxR8a8thfrod9ZosU8fmHESvojSMO3rf~eqPwzZ7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.742Z\",\"updated_at\":\"2022-04-27T10:29:30.129Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN\"},{\"key\":\"a00b0da40d6e36e18304fb96954d804102356292\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1302\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tXH/ifs/TD1Cxo8tV4z4lHBM/style_thumbnail_2.png?Expires=1658707200&Signature=Rn39O72E2yikTfTNgLEq0C2gXGZIGDzplAnFxq91jjigs1OsmupH~BvtF3714UQlFZWuiUoo1lAIedmcbv~c2sDwQzeMJNNea6lKiiiazULuU7FLxHVBU6kgjdcvlwW6eFaVucRhYSKgDxZRnnDOkjf20YoZJokma~tGNcoebxl20ew26ZP2xVnBk8pX9-Q0SI1Amhp4I4KpQOj~-KAZdoKj7sG0QAl~Vly20anW21kvNRv8btHwESQLYj74mMR4O-PMzXb0ZSSCQSB4wMD4ImdjaSbpE7jZidJjetJ1-k-2NO0RMbL8xqoZaDlGXU4FkE8Il9~CICF528HHV6791w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.717Z\",\"updated_at\":\"2022-04-27T10:29:30.124Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e7\"},{\"key\":\"772668fc8be854ff2701d0171548e0642ef118bb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"136:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aOG/ZUq/o6xiPxcJ5SRytHM6/style_thumbnail_0.png?Expires=1658707200&Signature=PFtipeGiTrzRIsywpqYHTGLU2w~1w7YtCDZJI-7ekQORiOG66UWx49swABGAWZ93Mixklj-35C9UIv4j0FJ7AWtkGTKSsmpJkGem4WCzaVOMXUtJwIAEIhaHM07I9csHOq8-ZNDDRW7vYWuo3WXl0mFtoyOWyMwWW2e6sD7gCHZ3nhuzkjF0f0kgeMgsEs90LCCqPUyH2FcDx3URahGbKdTHJ~w2AKu3SMAeLpxh-H9cJEcS7vRM-eMMtwdgrk2RkXFR6M7gnVtGoKANbAyRlgSVeMfNveB8pTJ9-3eEa0vxG5ZspnaX~19L-Sas1Fe~hsmh9S0COKPc6HQtwo2AkA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Accent\",\"description\":\"\",\"created_at\":\"2022-03-04T10:15:41.379Z\",\"updated_at\":\"2022-04-27T10:29:30.118Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~:\"},{\"key\":\"67db579a7edd8e7af291191d07a5d9cafc538167\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1304\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VIm/Zb3/n8IrdP29sVLxWTid/style_thumbnail_5.png?Expires=1658707200&Signature=XEND1CN5j7E-5kDoaRwze8gvbtO50Yx0UcglcBsXCJvjtldifDX~ei~zts0jVQ8r8e3G71ug3K1qJQtp~9u0o1qXY6Nx19L-b3uE1vn8yRlRxaKiIBtREWxbzMkca1q2fqrVb7Cs8aXfOzwuLizjTqL-7Z071hrTIPbNgkGCeklaQSRWOkS66CsikmJwCjp-qirePbJXLhwiAD6apKoK~wHYH5FlYMer6EK904VqU6HwAxhzf7FxDUO~tklbjoktCAPoSNbd1RNwAl2Uz2fI~b2qa8LRkZGcNc58TZ8B~KSuzVd5VIs9C7h-1T7PQfQNWW3kJHcpg~mUztVZ5715uw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.029Z\",\"updated_at\":\"2022-04-27T10:29:30.111Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eI\"},{\"key\":\"472711761aa216601e1708eec59328c945350fca\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1303\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/u6c/2nc/RhC4QqHpGCUFgEpS/style_thumbnail_3.png?Expires=1658707200&Signature=b2Xvr9Sgvi7z~2pg0UrcAFnK3JPEzCcKKsMtwKXi4xuh35lLolMHxP7qnDlWMv~MW4i2GOb1OtOWOsQ0dImk9KBpLzfcR5zTW6ib1wpx~cfq1Mpj1tclMbYb~YIFr-HLiMRXD7tGay40vikHYJ8XWsp4Y2ojirV7kpgN-p5QD0mY5QuKQ2ezxpmxRrCZPz8vBHnvNv0gQ1C8bLSAt8k-nQAYbVZTLTQq1i2WIy4cc1DAnvBjbxa1X3rovOPNDI8DJfbr8hWLXw6AF5gRrdxfUFJ3x1eUjKUd78GK3PVL~zSVATxOsJ9S58DIxBD2dnrVBWF8P78Ya5zVqL3aw-bpqg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.722Z\",\"updated_at\":\"2022-04-27T10:29:30.104Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eC\"},{\"key\":\"cb27bf455820278d574503da16a9577b830f5f86\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2375\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KI5/2yA/mFU9Z1NG6Elinicz/style_thumbnail_0.png?Expires=1658707200&Signature=LKVILFOPYNyhaYXvf4Wak3GKwchTb2DRsEcbss2QiowL1Woq3rLpXjdXF2KLCjAHQowO-4s5YozCaSFjqoShxzDWuHSsMlXCfTf53ImLpRO3~oQk4QWGqgXQD75xP6lO5hmbVJvFrY7uYQOJBuppQtHkDcM7rON~doJ5IJQLhIyq2~VophmMu5ik2rn2D203Y~iZ-HURVJI4g94La1SZ8uGNkkMfeNepZdvbNIUsId1Zkd4nWvt~d5pTjYvXhwzCAIakR14l5h90xD1WQ9qXfxsAQZNT4N-U1IyE~BZ4HdNXjP8didys7AZzTBa~ql3cvhQVyP1wZpImLu5fAS4OVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected Low Contrast\",\"description\":\"Background color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-25T12:33:22.584Z\",\"updated_at\":\"2022-04-27T10:01:36.795Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"(\"},{\"key\":\"404073bac29c7d33c3c7f1a16112db256be4c837\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1561\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/knO/Et3/v3JevhSmflm7GhEj/style_thumbnail_0.png?Expires=1658707200&Signature=aGQqEi5fcua-6Tms-oxZxJN5yIX~Q5QOQZqd2Jf7r26VcLWCyiRQJ9209CI~udTgpYB-8dsnSr5F8UYMbuKFyAhCML-NNcKb2JcfAU-qDvcisDC3Ndbb25nqJMZhbIPXG-b51EZEvMGuSMumz-j6EBGUIWgKT8YElCwC1R41LqsZd7S5tDN1lhCttVMujkQxLqrx1JxiG61GCdoTBKbSSw7VTXjF1tbZG0vUOxqGTN6eozMtLBkYbBiYJm7JpXIsB6gVlYGgPlghKroByW90GgXSsHXfpgZ~fcVwADtKucTx8T-0NwyL1-mqpCAwrVwuUKoj7qq~sxlwkkMsLn32hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Path Alternate\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.322Z\",\"updated_at\":\"2022-04-27T09:57:25.671Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~er\"},{\"key\":\"0468a0dcdaca8460437b47fd3428588740826710\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1560\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PdT/91S/pcpM39M2UVWdTmgI/style_thumbnail_1.png?Expires=1658707200&Signature=RRDmm3IGZBCTLGBBHyG9BUAVAekPF6Wy1A3m9XKhExulaMOUHEdXH53eIgb6F6KyTj6ZiLYkmM~BygA9SlJQxfAZIf6aPUSYOM4ZBXgNBEZDuj8~qUWcxi4Xf6hAjRo~PJt4wLpehjhDP3zDDR94Cb-e~lJZkg3hG6KkRjzswheeGeeed5am978URf6mpfVUMAzcoHBaxYZe5Ui9wXEokNlGkeIL554o0UkXphVsE8thiTRhYrCc7tMOa5RK22ubcBs0Mn~2lbypK34nJmivAzAGehPuphMaZEzzhfhOy6DItlRrx-XeaXfimpBQk9uvcx1DqaE4C-a545BIWBzb1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Path Main\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.328Z\",\"updated_at\":\"2022-04-27T09:57:25.660Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~ef\"},{\"key\":\"bc984118a258bb2d1c647d8752cd5ed77e8a6701\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"374:1555\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/U0f/fXN/nNqP1lB4iR7oPj82/style_thumbnail_0.png?Expires=1658707200&Signature=EodcaEx-BSbDux8gdt9~QJ65xZ17KZS~aXmkBQY0P0Jo~-5fCtF~ycp39w6044bd2TC0GBZNu-u--pu6XHa-VeRei6MGnXPhO6MJbiAIl59J4XhhAzpNwsUv4Pc1ulGCvwA~RBkHN4vD9RZ8stMH7G65Wjml60Cf-PeKHveoNL6j5I88OZ4V9TFOgAA9t1vMv1bdm2xjXObCp33rO4PW-hBLfy0HTfFYYHyDxn6bX4Z6SmgGp-wJieU9Mc2rHyyHv3i9FXWI32fXXOuM4kOebtxcwGNKv81fVPAKSvzlt76-OvKuEQMMEk17y1C7wZvHUkMg0F7aeBc06vjDbvnMEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Text Fill Alternate\",\"description\":\"\",\"created_at\":\"2022-04-26T16:18:42.252Z\",\"updated_at\":\"2022-04-26T16:30:56.257Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eZ\"},{\"key\":\"aa41ac55a17c23e2237ea2fab28ce0741ccc7ab7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"233:1559\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/SnQ/ksm/bhus4tZDNKeoijBs/style_thumbnail_1.png?Expires=1658707200&Signature=JTxPgvTsT3ELNjsIlsne4Ffwi0SCl3Zn3WnC3kju1TdrbR0aW8cQZNora5pVPm4iXhYE8ltNj9v2voNGslmf53ftN8ptUMmlnnmTGZvvjXJseT8K8Jfcm61yy9JD8ZLYaBUcerZpOQ1XGXiePng4AySq9UJUi3P~-rNsZWQTss-Tjy0fTvPWgykaLPoWUM9095JN-c-8n60fb7pbsrpcC30Vzr7MLGqGxCCGy90KGqDXwK~3lwgDDY4M9dt41GORs71BqUkCYPGbvQFAv9agfoG6OSpd~-6RQva7bg25cMdYZ~6pjrD0U5id1NXK8ZUYTGNMQvDol1swWEQWs-g-hQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Text Fill\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:30.312Z\",\"updated_at\":\"2022-04-26T16:28:37.042Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eO\"},{\"key\":\"238a529f9dd309311f9ad8c1477cc38b3d5a33a6\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1839\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/H1Q/pSB/lBCyzseFdYN3nFjG/style_thumbnail_0.png?Expires=1658707200&Signature=PHm-J7zx5YGqBBp3BDQakifj-qwnNNKZXPdRnA7U7fD6MxYaAcOLNi6RCJ~GuJ0P473RdYc~6oFlWi~PcYm~rcUl3Ra0lHg-MbwfyfTWxTpsw1CPseMxrl8mADXoAuLzHpCJYSri-DYyiTLi7Ws3mDEqBMLB1qM~a6FlEpclMJBe7tTp4bAwt1Mfde6kFPZCcpfG2AUryMspZORpEysmxdOQF9IfEE7YorF87FMJ7vlFquNyltXBoE~1WHkxotGTN5Yf6~rxnHamNZamkeIfAbS2IzOTq1k0rPK7BwHU-ADE5bSWAWHECYVTUaCqfWKKkEOT56woKYrZ8YnDg84yJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Normal\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.497Z\",\"updated_at\":\"2022-04-26T15:22:01.895Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"~0\"},{\"key\":\"f7300ef0ffe874fe81c12b1e3a50d4f6a247b2b3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1314\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QPq/3hn/YXratGeGb3H6NJxm/style_thumbnail_32.png?Expires=1658707200&Signature=ZontlHIZ5RLccZJ6NA-R83Ma~sT7zQYox69wJvCeKOmdqBXo0eOkdZNkGrTiUUaMzl7N20wDLFoMGZo9cf~7adtYLhLJx0ctGCrNcRnHS81jidN6nYFj3NALesB9KrfDV5q~Ks9LPCNKNMN3vWi6swOxFld5o~y5CwoMQft724XCuFmZjdwfHSDmGxNVNZOs0yhO9UsmKzDmh~VW9UjpOluMogyLCXmuPhP4YKkjBUZYOGAlJWT6mzRDo6wxbkGMw629jgJDp-eGpgNdjSw34TDoSm6rNvii5dj1MKY-7kb2wKJShvut825sgfUxovV-nS8pH7W4nTZoKQ8DZ689zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.639Z\",\"updated_at\":\"2022-04-07T16:01:47.374Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}\"},{\"key\":\"f498b75092721682b9f98527f234fa8a5bc0ce22\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1422\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2P2/Uqw/pIVO1gwtRGPlPdvJ/style_thumbnail_16.png?Expires=1658707200&Signature=XAVH-Pu1CP4inV2yYOnOn0Z50izP2CZZhz9eIZr2Xx3sTXqPuD9bxWcV4Sn~Awl~ZUq~wtlvZPy0t8Z3lKKGp03AVm2tlDPTfjJcobOr9jpjH2XMXIhrQS6NI5NtjY23Fby~H3GcraT8ilMZ2mYY-robCouOEY4ogNImXVoJPWTGXAL1yV~pEuHKXY5jjKPdEco7cmbK~I3a458FyPPpiFB5jipdeRo9BY1yJJtzuDfYzavBk4gQ9N4J3Ax7f2LbRaT7dsy6q~z3HPeDD~vtMPSkz75nGVv~8VEp2BjQgjpqyqmTzvs~mFJHMn3bRrXzxEtKfeUERq4n~mkeQzKqNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.600Z\",\"updated_at\":\"2022-04-07T16:01:47.365Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}r\"},{\"key\":\"ec1a34259a53ade310a8c6962911d0f3a10ef792\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/gz1/IiG/DFlUgCyqilU0oEDQ/style_thumbnail_15.png?Expires=1658707200&Signature=DjxF0~OKx~TpJQP6R3KXkVGlQkPejdA1LY4t~YvViVVbpBSvM0BxVjEnxtqA7euuroySPhiJkxB07~DHGri8CTj983anyEKE5YlCchYpSi1KKadVcpVNI4tf5oq2NggIaIV5l~urRGZElVla2a-FTXxE7SQxQFUQaHtaD7V5qWqnbxiRCYPeTMbc5Ss-Xz9xNlI2Q18EgW6QJ2tQihdu6pH~NyxmQJRFZU2GqDnUyIQSXx0pWCaWUwOLivHOOV8J6zvzsVzWtZzrsRo-gedjtgE~FF5ZE0ulinDvfzPBXDRnNGwwI0WPtHW4hICFfO08plECIkTLOdfESZpPguehOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Text On Destructive\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.732Z\",\"updated_at\":\"2022-04-07T16:01:47.357Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}O\"},{\"key\":\"e80e26efbd2ea6c4d4311398f73923881d71d9f9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1418\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CoC/JC4/bdI6UI0dniPuJfTq/style_thumbnail_18.png?Expires=1658707200&Signature=B4mOwos3RVEipxtYELyzvSSpDLctcvxp5CNKJe8TjI0~7QjYpDq6WszjOHsCvWYB5J5hpTFZnkubZbYZp2HsneLOpnOhIKjkSa6apPhnraULhg~SiZF0kuqAEh3AlUb9WJ7V6BrTL25xEPyfzsHMLdn6qecUBf3zCwfU68XZSB3rIHusvFTtHE9D99J8dB82Yyyjov8atp1Kun1b3cxC6uhmT8jFVfWH0qJC60oeCQ0N7EJczpFOjkGKiQQR6-gBKD641r4sbrpWfEOR9hOxJFIdoLHRUzfNMbLmguVgw-4MXmPIM3E7zuTMFZLb8vOWIEmgz~N56FwNR~Vz3kIvwQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.569Z\",\"updated_at\":\"2022-04-07T16:01:47.349Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}|\"},{\"key\":\"e4244f3710fb948e121c39234b1e6e2b4c166ce0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/h0J/xwr/gwtN0NYd02nzJ1tl/style_thumbnail_42.png?Expires=1658707200&Signature=SweI39gEmja-Dz8CbeFDJhy2IYBBH3G5xnC~acyKBKTurrBi90b7wS-8Dqg7VTEhG5-leDufgOROwcagS5gkKgWX9m51yJbmRA5z7ObEjufOKeZk7E3TSHbbwOD9q4OccmkNqDqc0oo8yAhtVnbyaNTUO~ZWLh0~ivQgG1rNNKWCXmS6yyz1eaPIXaTha-DfcRtsImhFJNP563Am~iWNw7MpTPBLnWxQ3FC93MfIFAdMHO3zyXI-oD8HlgYZaJf5xrIKAuPi68hk6jDuGM9ebPi3mE-~zzEHn5-wtPt2yzxCy3zLTo2AlDEKy7mYO0jDJ01Q8wavAUTPsZITJYhCuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.627Z\",\"updated_at\":\"2022-04-07T16:01:47.333Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}|\"},{\"key\":\"e20cdbf16a69775c38fc7436118ad08f05ae9ac1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1426\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3fS/YTd/eoJkSWIPBQSe5cQK/style_thumbnail_0.png?Expires=1658707200&Signature=au8GxKuOac1rn1zGKQ-Es26bD-DMZRv9jkW2qwiSKJbTyOQ90~cIWifhIGdMyrZ~p5bVVQ9o~LSRLj42Z32RUTpWk-FBQl6cBHPWx7WW~AjUnXGcxyNbQYESX6Ljj68BNAwXbGV146Zaoh~oJzOSVrdGpL1Iq-~7f~SMUR5XWaZF1KjNikjHkxj~iJe2a81Go0hWfvTJE73rBbqLUMUcdKTbQSJdGPxatNVuRkCluwWpXoBqio3yb9-z0CGCZgQ4QeyIeP7ih8v1kJOGyDlR9u70iqx2iRnS-YpUk0mf6DxGw~t5q8Dfck9QaDvD6Xa2cwIr6eQyZlsvk6--g-Te7Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.528Z\",\"updated_at\":\"2022-04-07T16:01:47.326Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}{\"},{\"key\":\"ddfa8623c96684cbee6ec0e1ce1435d9253744fa\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1409\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kxZ/2Yd/TD19w0dbukmaXyne/style_thumbnail_34.png?Expires=1658707200&Signature=YvA10DJR31~wGxqRDB7YWLLiF8~DZhpwiiswO9DiiVI6sWqJQVgwx1xpnBmh8tq8Fr2w3WGZsy6Ub8a5vUvqTj9dD0bfTSBS8RSDDMhnPCMrhtQGl5Lgp-2ckE4KpYfLQcpf~w78lMTrLgrvr06ncDokdsdNBVVp754WCrXPTPqgfd62WxmddlWSAh2MAInftGws4IzNzQ5jmZHYVUVWxTZRQREL3bl5QCxGEPNlsBuHJi3e0qOVuPJifDIkvrYevHVb2WZpxPY-vJ54cTVzZU9y3i7xP7wwnKfBk1mZ5IjyC2lbzgnlduoZEu2wMoUhTx6H4SEVdotKe8zAR5Qq8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.752Z\",\"updated_at\":\"2022-04-07T16:01:47.317Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}f\"},{\"key\":\"da68c86178d531db12a16ac64163bdb3d1a8ae65\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rBK/my1/IxfltI4tuJTgvaZb/style_thumbnail_38.png?Expires=1658707200&Signature=Bgk4kciLde--kc7FKwQE80ZDRUm5qOG9H--dHwkBd5t~tgCBazrIrH0ADavzH13vEm-9RBzL0WRk5N6yJES6B4XkuVQultyPj3o~SGiG-WXRjFKsaMc2SMRQtoNq72bWYNgw2unAepnQdPdKdzQ2Q8~isKwRuugB3YN27z0cRQam9D61qSkiF6V8rzRjvPLAc-t7CGwFYUAfUl3JXAQP3rvHmBxv3a1maZoGfqGp8y8cP9-DNgmpygAO5O5DhTlAW710NZB4G5JJgjJVb4qiksTROGy-De7cWWlgVeZwcxQuVbQObCaDMsYlclMbjxaP0i56mi3kCx2lkoIdUUoEhQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.762Z\",\"updated_at\":\"2022-04-07T16:01:47.309Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}x\"},{\"key\":\"d664cda1b0c838d129f3bcec3d90882d8fd30f18\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yHl/u4F/WKw13VmxTxVOlRFD/style_thumbnail_20.png?Expires=1658707200&Signature=TtCVGFTdlKm9G5u7noQpme7PPo9Up0-PEgcTOChnZJh~P~unz~aPNmD2RaOlOWyXlrJhwIndB4JIr77IIPd9Rafp6yx6KpJLAfDESqjY7ZgXnr6F4Nj7fpwMVfNKArU0RpETsdZ6GZ2I5juoW-UvsVwc3pivcGS2cbz4R5FagZVA0jnRQCKBC7J3haX3aRjrHw9vDzxg7hpE-aGBSUxL9SVTjpFG9IrNQ4OmVUDOv72luTbUVsBfgrXN4yu~GCHyOJ3zM~1~ayHzLMEB-iHig39zxCqfXZN-O5bP4nFO1N9VoEMA658233wzbY6g0YMuEgmxkpISaf8BcDrbwI4fmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.701Z\",\"updated_at\":\"2022-04-07T16:01:47.301Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}x\"},{\"key\":\"aec0b85cdc132faed547e2be013ab70ed55d397c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1322\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ttg/v1E/ypOIbVcG3P5egQav/style_thumbnail_57.png?Expires=1658707200&Signature=G~jIb2lTxOlIgSFtQ~pXgcmiEcqG59JQ8OStyfS-4moA4P19PEYNzlTO59xnmldZX95m~2R0a0A-RsUsOm9AeCC27tckWBDhA9w5yyfaT3CbGItgRM8qEf8gwAo6liDKPJv0xJtdWx9sMd7nEMMMXxo5z36gIUwSXBGwHWBsxt~irMl~e0W9LTJrVVgtzXVlBX1OFneeaBqY9sOTijR5jJAMlBhVwFOb6sYZJLfSGYcqedvSvgWfKMLHResdaBWC4-EJMU2Z3sF6ncVJrkoKx5E8Mn2hxEfxAOqO~4mf0a15lURED8dqhvnrEOBWs5-Ba1ZmOjNIKz2EVb9AA~BiQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.097Z\",\"updated_at\":\"2022-04-07T16:01:47.243Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}|\"},{\"key\":\"ac28d9ac5bc16703ac4fd16e7da5bf7608dbd522\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1417\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hFf/7YX/XixJgYIyUxMbNJwP/style_thumbnail_19.png?Expires=1658707200&Signature=YtaJD4ORF73pc30tmMCjqBeLwjldiwzNzw46I2CcjFQE2GD8aFmZiCqve~TvCSGsahG2vHweRTF62bKCIyyuBQL-5UCbZX1oTiZWtqOcCiR5a2iCTMWSm1VqV0x4lGXKXKw98v2qHh4igdHIvfWNDAuQAl-kqRbFTaXmHizpakGNGI0HBVJxWH~1N8hc-pNQy7b2Q~cn-8vhsCX8tuvd-F1lIvTHB72jhIfX9UWzvx3IX86vzeIW0PpSFqLBLLLnO~OJF3ULLYtVyA6uXyEUXkkU4hS~84PMwzgWcofDSZxEo8-JSGIVsDKmFSVC-rAtD1P-V90lF3dZPAyE-AIHpQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.579Z\",\"updated_at\":\"2022-04-07T16:01:47.235Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}{\"},{\"key\":\"aaffe5ed4e0b2083311df366699cc63cdea69974\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1313\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QMi/7So/7GaRykvXwdpGm5YZ/style_thumbnail_33.png?Expires=1658707200&Signature=Hh6awFuQ9nNY5EGQRcCRprSkrVEcxaIM420ue1gNTO4Zn~qUfQdzpkUS7DtRtMR4Kd04Nq8lbvDnOVpeTp7WeXUV3U-hoDsod949MNZMuljj0MUzyB98u~ZuE8QZl37K7EAuZdhSOEb8nEVRgIW3JfI0dkUCiDR9inyQz987ozne76y8Ml9Ps5AfP2T43uTcs43UsVBKIOS3VbOVn2yY4ellquBM8vOaoZg6NyVUJKYb6mCTRXVl5PKCTjzBK4CeNuT6qwdx42BM9DJt6oNWwZSuWwtKRS5BzDyzI1C1csMeiSyMebSjyhiQb04I~fLR9Gq6P9KujXHlGnvxXcAxNw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.548Z\",\"updated_at\":\"2022-04-07T16:01:47.229Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN|\"},{\"key\":\"a2ada56137d9cc4b529a0cf3f3386cf0ed8ecb94\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1311\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bVB/m2H/8nr8IhTuUzLNe5Rz/style_thumbnail_39.png?Expires=1658707200&Signature=MstfySifsr3Pbq38MigeqKbWtCkJn2LUwWdJFu3YAf0CdZYdZqpGt7tKFMz8TaYQO2PJEOBIxOUaha-qPcjYBAFcYnpER7nk2IQSg3zGJkadJi3bxbYccVbcx-~r7yb55mnPdmYNdkG4hrDPzFbCC-wh0SMh~1KRk6Iy3Zabg3WTNt58cpFH~pEb~P7tALJ-Ne99NH0QEXtWIKOmn6~R0hFC36sRuwcZpWS8wEmf012LYwivLBpyyzMt-cgzA-Z1i61Cj8sG7Xn05XD3O3yRxAe7aFg8VlKWPe3JO56K4351t2lV-PvVzjZEW98UMW-XwUoA4jcOqbOkNN3uJtGrhQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.787Z\",\"updated_at\":\"2022-04-07T16:01:47.217Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNx\"},{\"key\":\"99df447c6e9a955d690ec601c438370f12fc7dc5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1321\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TXr/3Tq/OQ6KxqmePqB7MUgs/style_thumbnail_44.png?Expires=1658707200&Signature=MjPqxdtqMSGxjiqiewmhfW41KiL41XsQzY~LZ4PYaQOYn75o~8zAR1~f1HNr1VGeZCljo7QdKJIiEYGwqD3W4K0n5Kp6L5AWOvKhq4Egh6-4Aa1WFcjPyWGkoqaFF5sNm8taYafPyjskqKv7RXJ-E6Md7xHqUDwBV9XY3jxL9~oISLXp2nJQ2e7KvMh2cjSF8iXsD9toc1mmSB~es0KCG6eZvHBsGp-qLvqSTBNN09GIxXn-l~lhTtX6Czw-xwqVAyt9t4tausLQULf3JTvOmLK3rNzccc8n~drPWVRWipSVEp8xUcVL5SgEvrsIud2PtRa8b8u38hxHPKS~WjfYKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.812Z\",\"updated_at\":\"2022-04-07T16:01:47.205Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}{\"},{\"key\":\"91724b824f1a9b8848e94ea4b6f246b1550728ac\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1644\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oEy/FGw/juQLcEJSprkyFaEa/style_thumbnail_1.png?Expires=1658707200&Signature=XaQOfYgplmN3gSadVJLq~hQmarXeGvRPSHvYMIX5aC4dPdseSnT0SN8oWJFUNkf4TxI2s68amTCGNBJDhEc0r62cfEvnugIHFs9Fpvoo-l0dTyRwxTvk4pWqnkvWs~a5-SBNLJix3kgfOOsqKjWYT~tA8Uts7MG13f8HHtCg2qZdhNpnrb24rn6uQVbymPfr4rc8UC0HFu902TFmGEG2v9lQ~spj46tq31KjmH8~z-kony7KzRSKOQK8Wt8jEXoIAktpdLpDTLYJbecHwFabZLhnS8xFmgdDpjOAEQll~ZXtBHIAdGPQowWCo8tvjloXhSEKgwXiW4zJMgN85aMV2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.703Z\",\"updated_at\":\"2022-04-07T16:01:47.198Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}f\"},{\"key\":\"8ea704444e906ba1437a91bd36dbd2ed55324c8a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/XzT/RhB/BGVL3dL1Rq1HRasc/style_thumbnail_23.png?Expires=1658707200&Signature=M06qYX1GgDCEjVQpwZ78n~DTsg~kHZgrjBFUy5qi7mqILM5hjvc7EKtYv2gJcWzkgnRs-f6nYNJTRumUTJCJ0mW8zZiFlRI8AOVjmZ0XSO5WTYi3P~n1Dyb1yTQc5vV-vbXKJ6mR4Pm3ejjsu7Wto0planV-m8rkarZolVsCvncVQjmznnFPRdGR1po0cEmepW3GsfEPt1rQLrRNZliQXiu548gU43ZMdOM0Ck6nxoIMsGg7zogQ9HxmHoiJgpuJRrByxzFGYG4UptwbPU9MQCbrX59QOvpwMddG2W297Nkn5KQr6RNIshf8oAz1oMjFffqcrWNipzbUPXVgsPyHdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.654Z\",\"updated_at\":\"2022-04-07T16:01:47.192Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}\"},{\"key\":\"85f88070f65fb4c1d19e0522427b41bcc26ed15e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1324\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zoP/kuQ/22XmaHbSpeerdn8Y/style_thumbnail_56.png?Expires=1658707200&Signature=ViP8o3Dfm5P5KiIDHsNPsJYpgkA17Qt7izyIqZ2b7FlxBZIY8ldr72rOFDs6215opiUn8lutO4leHCeFRhtJlUopsnzqJF2-UE3yP99HfteZRKo5R3pivKqPBAHh69qykpQtN3gpi-voC9XdTw-6iCBrKpm~Wt9l2sNIu-f6onPrsyVQJHbD-CLFS5geCXHzlXjHHWQHj9DB7ptJXCz0XBqz6HH7LSGjevGoHMMSPf8-k-Xtm7NyWWJnD0VLNurqdVzF0IGutqQcozqsbGqUrXWXM~brkIV3ehmaApReCOiaTdXOeXc7NDAmZQmzE1mBGC4RWb7KYSXns-YS2ZIfIA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Text On Secondary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.092Z\",\"updated_at\":\"2022-04-07T16:01:47.186Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}O\"},{\"key\":\"84258cd72dab13611314cc3f63a8082ea687211d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"45:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/OoY/2Kl/wspkbKrAtVEDgErU/style_thumbnail_2.png?Expires=1658707200&Signature=M2KXzwiGBkRorOfQR18UCXFLbtoeaI~rYKXTq3OOelMw1vFM-GXeIDIh2JjTozRYw14HsMTu7qbrlWOEHSml39tfxu0f-orcWdl8VO0nlANvEyssyI18muN91nbZwhRNv6iZL1e1USDqbRuDu5ueB3UM3MAusFWaI69wc7RWrZehiw6X5oaIeHyK2pxmmE7htqlNgrrKe7YxfFSDPVXI7hPXR~-~PeFJw4FUDpw8VoZtfwO6oOc5q0rXQbqKB1clSqfhKcFvb8iFluT5772kEproeiYQR~nJG3W2qliZznre9VFa1De59ulsfyJtpikOxEe04lXKdNkj6CXsOyz21w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Floating\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.613Z\",\"updated_at\":\"2022-04-07T16:01:47.180Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e4\"},{\"key\":\"74c183c86fa424dc940799b3cdacc6824931caa0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1318\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/FAk/Ojp/cy7gMAytyKy3sDgJ/style_thumbnail_26.png?Expires=1658707200&Signature=HjwjhgPMPFbekVG9~qUB6j0G-i4ImMG81EahkfnV56D1GE5-LS-2Z1kQVkblG0uLrCKFu4845CuU7CS4u-ZJp0Z6qW47-lKFKg~DdXEmjQ5EOvQjG8e~tGF6Lc4C97ZHfU5ZG9jvCA3bPf0DBFFdy4zWqsVvNXqve7qDtP2nmNAWn8sznZ11Fc-wG-TOCZVpYx2-C9k~cDEaYRstaISBaVG~IiK4gKHTUUce-TICIQY-psEf~D7hDlFbo7yloO0o0wclpvu9qmXvVq8bwmXBc2-dCFjXog4Twzs7cX4pvUq67URQoqo~vzwInErPPPp0kCMebFOFYiwAKfaOup2Gmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.691Z\",\"updated_at\":\"2022-04-07T16:01:47.173Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}x\"},{\"key\":\"7490d3069bce67d2ade872cc4f73da11247c8042\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"30:1310\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/GXc/puO/EyKBC692UWFA8tyE/style_thumbnail_47.png?Expires=1658707200&Signature=YgoXrWSGu~7X0QDbZje4xhM3j9v6K7EdRJdA3AxD7jXJu2PqB2jsUK1eeX445DZ6QgzY930Sy2f30ELSUug1UObO88mGYdzFCMYSDBTh8-4w-a87JjCtbFkVxFwAGZ8hHC0lUxOaXQKV6jBtpT7a7LOE1Ec2NKvvDhlTdRzHHnE8W8X6ECzp0-zKZqYV6AXaRewGanYvI8n5pVptLtGMtxv2mGHQYLwBrXM3GOJDoNJtbCZ1dPwHVnCU7NlF39d~ZH4Vk1B8V3xq-VDUKgBNCGHBn3vZJn~7mp7heb9-wSStJ8XaHcsS9z269iyzqoWQXjdDlTCM9DGlSQrfyvJ9Sw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.953Z\",\"updated_at\":\"2022-04-07T16:01:47.167Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNr\"},{\"key\":\"730f76dc189f00e5c902e0e464c31726c8255811\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2377\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fTQ/Wnn/51aKviyzsG6t0q9J/style_thumbnail_54.png?Expires=1658707200&Signature=TtyPkliZer2Js0-6SOpDFealApwlFNxXlKhghiyJ~xOd0y0oNaVBb81H1IIyzkkZDOZ~1DLjdwww4Ozas7ywHnXDcnu4IQTm9oovF6L1RkLQtVRIaHd36Ti2rTNkvksgSBshNjlE5y0OLErh18ovZohOtAmRBnvd0zGTgwR1sK5~UWl2n8-yDAX20jqXPBsqnRqJ6HfPo71yH9X90zTrrLgtBa0JC2MUrc34lhlDa3eCazt8iGpoW6qzrHT8~h97a0MRd2s2RR~H8ebwOf256KjUjLm6-pVcjMhz231yWpAURekUoJiOeHtPtZf6rFuz4rHb3fZajuGlHLjHxDvZYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Main\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.067Z\",\"updated_at\":\"2022-04-07T16:01:47.161Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e+\"},{\"key\":\"6f9fbbc37db9880ca87d31a742665e62f2bf183f\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BQ5/jTF/oOyok7QsqBFdvqZx/style_thumbnail_12.png?Expires=1658707200&Signature=I~U26xrGCwdBzqg3Mj0rC9AWC6JCcTTUbmXqw3RlyAPMwUiohlRurT1LoA3-Vv5P8rHNwvI6ewLGZw28TziZxTywpc9HgzKNUGGR79mCzkfNBp7N8dCaCNjy922bKVS0GFTWCNbNxVx~Nv4coKXn7nNqPMTdQ62AQaa9l1bNUn9L6Bc12vFqj7YSfDlazqp1EY640bIgyGOY3VqZxE~vRU4k7oi0uuQv8jBy9t2KNP2i9WpvGhQI1MyWbkDYVzgqfs9zrFyFTyaOpNDSdTyLFHWIp3iXoF~US1~04wFSvVCHqcAX7EiTAVsi~knevRyHMGpCEj4iLiUQ8jFVIB5s~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.564Z\",\"updated_at\":\"2022-04-07T16:01:47.154Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}\"},{\"key\":\"63d4adfde6619ffd2b15097e28599ba8b1bd9be8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jlb/DnP/SqId8RKQwbsHkPST/style_thumbnail_22.png?Expires=1658707200&Signature=hD3yyVBkUYjosPAFBpGg-zaO5l~9FqMjlr5jG0LhXqwtLHjj8~DyfGNyr2e3LXKs2BVhUhVeQcnCBO1tOkuRm0sScHjEdPAhmh~4my5WTy-GCla1ZTkSwZ9UA2eHymP~WstI3PGGX3P8zcio2cId8lFARS0KKoDhA-g2UxqvZLBsgl6y9KiWYlwivDJiNUqGrE0q1OptweQ7h1fxWR1anxkJEb5nZ0ofElMZVoFFHnnY2jEIGWK70zoYUAwKJ5jbYpwyBdylP614CGMw04B1ayEeCtHvdU6eKMl4VBFgZFEtVcOHjjKoY4qkviXSZV6WMjCA134VKwPL5iC9GkROxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.661Z\",\"updated_at\":\"2022-04-07T16:01:47.142Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}|\"},{\"key\":\"63305ca5cb6c2e5607796133fd649e07e0a68d46\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1411\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J8l/xaD/PS2VUZdctvcXB3fW/style_thumbnail_21.png?Expires=1658707200&Signature=dJ9iRlzJRYD9LPjEu4T8aa09xYZBuq4ztIAhlg-f5q1BmVRs1ti2Aq2IZ3paI3oQ-GNbQG-r9MJ1xKspEg066cdCk3PHwReC1~tnY1mx2eqTch0hA9l7Q1lXeyiSekKdlG1Ctxsa-pnMWWE-8G9woNnSC5QSNHuIAvX2jU1e5hsTHtVrW~2PCxtJvGlyqxsq2WiUfZdZgpeGI~MDOU3uUmGwWAyLyPETepINoaQzF5dZPVKcrns7hUIHaNQJlP0b2wHKIYZQYEkNda9J7JOng0L9nKNVOWXhw1h-fSgcOxGHNbatdfZXiJdaRGoWJFcbFND5mszBKF4GbeZ01eROQQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.646Z\",\"updated_at\":\"2022-04-07T16:01:47.136Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}x\"},{\"key\":\"5ab92f7156e1969f3369d038debd5455193cccb5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1645\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0QX/soA/1LOvyPETIa2MBeQx/style_thumbnail_13.png?Expires=1658707200&Signature=Qyqs3WzJ0pTXn9KVkhfyzWGHmewI71J3zxJw8Vx23zkJncrH6FmNu888y4OVIgzFgJlyRmlQvL3er~KJOnt8~qHgZmlyWWJDbhS3AVkK~PdxLy-7g9hWmusBKAGKezNHvboomQMyFh7G4aV1eRWPQRx6Y47WHEPuTiSqkU9tjRrovIPDsD3eZ7pKxsWxYFTChTVEIctrNkyGi-upaTkZb8Hwe7gO7LzVSBqhjTD3QnHgOB9fv4qZ3uWETtue1TFQ6ZS3nskyCCcz~W6iATHWUNih964kQJWHV1u-w-DXSZpD0xgB-moBHCNWjS1MBE~KGalg91TKzXbTavZF~QGFQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-03-04T10:57:04.728Z\",\"updated_at\":\"2022-04-07T16:01:47.130Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}r\"},{\"key\":\"56c418abffcdc98abb3ef987a6b03fc18a60633a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"234:1561\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tBK/Xg2/jDUNCDiR2Y6jWpOq/style_thumbnail_5.png?Expires=1658707200&Signature=RBXE2nkPVCsPuVoC0vL9bJBBnkr9~aT~vV1TaoXxHGS4xptSqGgHtESqoccAThCdCDFkTYpwUCXkGtxKDF-M1f~dUu7NrBzVinuY2WISm5jreM5CCyP5YY2gTHiFAnBlpYWSeRKwqEQg~QUypyE66iDXiVDxrSWEJpSsRir9kI1X4XdniLac9hyW5JemtjgU9a76CAEqadBGYPWkqo743UXX4NTA99OhE5Z-6x73EmINKueYWCvLC7gNA-nGOISEgtol2kPopVF7YK-vmttgdXG0WFeJeeFXdER~9ZZ1Gx8GlVDD33lba663g8HGIaS1EhdkRLXrkClIlv2xfcc0jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Text Nav\",\"description\":\"\",\"created_at\":\"2022-03-14T14:41:39.337Z\",\"updated_at\":\"2022-04-07T16:01:47.123Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e6\"},{\"key\":\"53a4716741658575994c6cf6fd1fc554d45ff784\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1306\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tUQ/oLj/hVvq0HxGtxcn7Ag1/style_thumbnail_37.png?Expires=1658707200&Signature=bQ2Lyoiqa48zqlLQDq2V2xNDqF3DRks7hnQ-jUS0K6hmw~hpZDZJUe8ZenSah6Rcum-eXxgStUci3t3fM~KpPN7D6GmxZmkds90y1Gu2G~JewHrRMoHLEwkx8p-jsduf1aKg5ylz8zkikbJcmOomwvgy7fZXhrqGBlkEIoez7ZksSZ08htMcbn0A3xev8n2l3CTy~oUcCQtE9jvEENQg1VwaoGy-B0ansMG0wjyvIMWHXYS1ywp1J1AG4qxDo8lYPKKD7zD0vvO-oseNRYls47HPsS5CKUoWNE1anSjGDl5PbpraK7H1r2IR6Bxwp30D2lgzxptwm8C8RVeqDqzIQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.757Z\",\"updated_at\":\"2022-04-07T16:01:47.117Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eM\"},{\"key\":\"52c101369cef572c6908975f95e417a493bf258e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zql/jnA/nYT3rxjFPj5VezUC/style_thumbnail_52.png?Expires=1658707200&Signature=D4tO9j7HFVe8ywGcieLGJYxL4RJZvWVGDagv9bQKFJdIhV9A-Wn~wCGlJQNOGvH~Q0c7210kyYcQF0~pylOhgwd-~-jvxl4HoEfl3DmKaqx6IKxIdflM~HEK37rAHIgOSerbC6F~DLmhr54nyu15LyoKMgvh2pdmC50bdLUONlo8NGNVlI-HVd1xG~sM4ZM8S7pwH~uB4dbmkCD4YR9lVIRZU-UPbBMq1TAsPD3gO9~D4q5TuYZFzqtdNVGhuErjKExNCM087aGyRWKsJnQjJsxk57yfQsKwJpzSYCo8PacNygkAse6SAjwDZUpmrFTOBtD2rkSjtEflgLifPKu~jw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Text On Plain\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.041Z\",\"updated_at\":\"2022-04-07T16:01:47.111Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}O\"},{\"key\":\"52b68da39f0ffc8e2718c89e7bb0637ea29ce3b9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1316\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vGU/caK/brZ2Rljv29Ks4sDw/style_thumbnail_30.png?Expires=1658707200&Signature=eZF1XS7Jg4ra0edrPu6qbjV8sygwXuxC6B2165WXdZpPnWIjvMwxSOpxrDjOCdTE5-g4nf~ZLvU8JB8Wa9vapAwvJr-1YeDnmWhJrMBnm~gWLB8LpHV5YPO5U3dHqZxcSkZUJFZjksVGYD8NvkYEF284bzZwPlYp-1BzIR8AQV68fDPZqmdwj~ge~Sjk3-da676WeDSLUpbpZHxHaxHsNdnFF8ycGbXLwCnogIxw~U49D2rvRs4mGp97SifwnZTh451iKsi1QqOVXDi32VeFsCA2QaOsQtKMfs5mU08GQeJun4w08PZum1Fd00e4phq3Y5Ak5nkDiFZYYDRgNlWTPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.727Z\",\"updated_at\":\"2022-04-07T16:01:47.105Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}f\"},{\"key\":\"4bfe27d2620e3e5cdfc02b7cc8d0db8fe86dbcf3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fhu/Ro7/SUtXhXwBJ5tdKfeG/style_thumbnail_40.png?Expires=1658707200&Signature=SwnTtY3ASKD0~ZFHJ1F8evucQV3F71CA8Arng8azDbbrz1W2E63wWwS0KXFAoYzq5the4i4EFdee8xck3aNwXxcxCI5ZfPK8hSybuGeJdbHumIRdUFGGl9KQG5La8YKIVu-clDtRg2N8oiHSQ0qMeps~599Qlwu~QKAisJ1zLEzJrPlrNICROLEPnm9-l4RVLNzWddebvb2FHYWr3z44qGbVRNCGShP46Nctb3JTrjEeVnOzUaXei9AVSPgeefjZ2ayrBLkSjep8hRMrKlu9HiDpQV4cMEpIWuc5rpew2Iu8uwC8kbLwZNTp8X9l7UkNX1VAPKxA~isgshKTChUIog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.792Z\",\"updated_at\":\"2022-04-07T16:01:47.099Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}r\"},{\"key\":\"31ded0cbb11cdacf01e877fce472da9b8f2893c1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/oE5/9o7/bwWL3Gaza5qnuyUQ/style_thumbnail_17.png?Expires=1658707200&Signature=hHtpKxRAh0Lqe2sDHDtuUtBJRfZZQpwrfLJGz7TpU0RlgbbUq6EkYxpnzJnz9CCaoiMcDZwVnDBThMVQ3WBH~tJFCxAyLOb3DhIz8zt6GuBO4qMF~u3ZlcxZwm3sDEqLQLh7BLj3gez8R66vIIa7rya4MigtLYOw7azb9gj7ii8r2RgXBh6IICK~QxWm14xGLRLqqXu8PkKtLQ0wMwJ1uQfDBLjIt9sSqrn~WMkUvGZjpuvxdyFXndAKP1JcDR7q5FJ5edM52gcpd8U3~s1YoJNWRFSMXEVIoAfhA0xZEMcYPvZn~WXH0LsUfbWnZYF5bguOIgImOsBBHX~qs61m7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.533Z\",\"updated_at\":\"2022-04-07T16:01:47.080Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}f\"},{\"key\":\"2baaca090ea40415c6245f7ca25cb18ce3d77bcf\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"28:1308\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xy2/LoC/JayHr6KDNzaP5j4k/style_thumbnail_43.png?Expires=1658707200&Signature=Ag8faQZhC1~9yVsEjrAA1GxP3VhC9HETy7oC6jzJBhGqFdT0ixPmdEAxIqGLo~TDKZ0HCOWae7EV~OeYV6euf1fUgeoAvCmbqwFQmdkljbnG3Yhwrw39MalHnxYaYTRR6DKba~8gDzGCmAj421x9hM2cnur1iYv-RjNkOM2zYsdye44HMU8JWOVQ1jbB-TEwOjSka4Ia~sJkdQAV7EnXU0oRL7VfO9C4ISd0yXnT1x4ncJYyXZUJy5TW-QQ3CVn2ndLlua2fhHko56gQZyzEcn~aBv9JS0F2Yj5HuoCrvDdJY~egmvpQtqVyO85A1Zx939TUMcsj~88yiraIOxqq2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Text On Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.620Z\",\"updated_at\":\"2022-04-07T16:01:47.074Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNO\"},{\"key\":\"28d01019de63efed67883b4153bb1ec181874c30\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"104:1392\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KkN/uDK/bDDLGO2tAJ5mdE57/style_thumbnail_41.png?Expires=1658707200&Signature=DmUHX9Lp1VQTcrnJ83RMyAJD~lGsT2Lsg--c8z~IOzw9yRPxdyktOaoixLX~rUOmv6n2gSz5ntEFe9zLLocZGfqHLiVfi5clhFEUs9X5DMT8gaxQ6ZHh9pFRd7f-vkcSxJBBRIwRHUJDKEerZLsmvTJXeCNOlKsXdTtC~t5IuR6JAPeieKj2Wfo1kHamjBGdwVfdWmNkj5mpPF3yJKgee8Rz0KTT6AMmq63KFbU99QDsLZR8hWGxtUebE4TfzCme2Ui1Mi2DMtPc~MRl4H2PQuLo59tDh57tRVljJeWYHvM~JMadB6Ag95T~MzrME4XTH0pq83OlFVQIWufF-pBL-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.782Z\",\"updated_at\":\"2022-04-07T16:01:47.066Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}\"},{\"key\":\"219d066514449bb129f0bc9990c624bbd01cf3c9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1Yh/IYK/fSXsPLEpTUbenH21/style_thumbnail_49.png?Expires=1658707200&Signature=TSu2W7RutdQ0ujOXpAzIuJeLiX1r7jPhXYuG7W0AEnxlg6eouXtRu~9WlxRqg7OijauG-7CaAzfSN7-mpN5oDYoYHo8HWdQTKHDyArGh7Hu4vgOOshGxaZNZPD6Hnyr0HeALiOGxVwc2OAkXWe1h~Hr5XJPZFCHSU9CpVET~vAwxoeoOCTkOHsIsOq0Hv~WDv4gZDf0PV5mDaSUdeasY07Z1P0dK6yryGo-~x6Pl6dFsM5K2TKO9W4f8iS61vRCpoquApQohUlEDE170CYkKnLgW6izpXWUvlNS0fAAg-SRCzlthqavZCM8nO05OVEfF9IgGgduuQMZUeaoiKSu33A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Neutral\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.002Z\",\"updated_at\":\"2022-04-07T16:01:47.044Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}f\"},{\"key\":\"1a12af35e64b789afd08c4ab4c94ac089c631c57\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1506\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ra7/uUL/ud73166Ix35miY36/style_thumbnail_3.png?Expires=1658707200&Signature=bisTzgxSorMZOaNdNGjZ7L3aYiP3Dx4HassxzXDS-1BhT-PsXUJZ7J-hRyTZFvY9FcYMaXNBF4UgPUUSQLtV7KMSnz3bznewFRnagj-ginpYWLshRXu1NfuKk9qS01reZnbJ01HgIgqktk3V7EC7OOuxklnolTUa40eY-IByHj-OAbail4SzEN8CfLMPx8AyCOS-Vxn4cbVJq~X-QYAYsWU0jTXiF8PCAeQ6vf5V4cZslFZxWPz5GT617MsY3PUjdjGyPix4GmdQQ~hjqDsY7mkln4Tpa4S8aalTdjSoHTYGB-GGhYtXunrpSAT5o6Kjx9eL8hGHBSxDJyfqTgrXxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Handler Multi Control\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.518Z\",\"updated_at\":\"2022-04-07T16:01:47.037Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e6f\"},{\"key\":\"0b5584dab7afb79694edee18e1a0f4528c1b30f9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"36:1415\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KC4/ZDQ/15PQloFu0A7ZQw4c/style_thumbnail_46.png?Expires=1658707200&Signature=C2yp2VcMjyUodE01crVQseRnOlocdGo2M1pPQbM4V00B49W7g1o6WBKlzXyvFU6YUm0zawJm1ReJ3ZxtYo3hC~uuy88S75JTbUK5pHMEoaxRWZB4HzwL3ctlrYXOrBRuSGxfOQvqs87pdMH0MeldJ0dkHxAZxvz4JOoDA16Ovvq1XIeChbGI~1QOWyKTF~WFwxLXKLWtYNcSx20BeoX1aglTMZMVqgVOLpFQqOprQ~D1E1hr6lRaykMYgXFI1pgC6j51tsdwydJFUdxzD~SBU216ZbSti4XCzHAoxiPyM8OIl2TCchO2QhvJdrErJhU3-n5ATezdNhLo8RNjwYEqiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.948Z\",\"updated_at\":\"2022-04-07T16:01:47.031Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}r\"},{\"key\":\"0a841ca5c0a69ca8f47486ce3a557f261185d93e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1317\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/gMh/2zZ/43exbL5pqX3HCXOd/style_thumbnail_28.png?Expires=1658707200&Signature=KcNJjfv7AniV56pJJI3QmHjZIqM554bRVpQAm8QfcOHWhrNXngTUpAaaxf-fEpMrs3S-w1IpGcrAbFDTaBcO6NKCdDrKDlAuL59IhlKyuI1OgNw6hnJaJCQatJcwQKU5agot14HW3sqoCHLqqnzN2rWXuWf-Bwr-cFBQ3-zzCsn3QXNsWqhv8RVOJ5AN3vN~DMseZLXaxZLrK34mDE-MUZGUPffWFwF-Ro3T9-ep-PXAh3UTMt-LfIfg6bGhUtDlvCtfQ8MueE~N2S~iYqowEEgNdoVfUgflbm7dyrff0slGQ6abtWKnp7sqOqNMrIyIZSOUD-ct8tALExBELpTsgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.712Z\",\"updated_at\":\"2022-04-07T16:01:47.025Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}r\"},{\"key\":\"062d81806ffb2bf35c18440471acfe837abd9fea\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2378\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aJU/fl1/72uvsZ2TGixXw4PC/style_thumbnail_53.png?Expires=1658707200&Signature=cqLKAMWK~rfyOab-VAdyCxUsuxA6SaKwEhhqi7YhT94WNdAD~rKb4B4r9mVY4yQ~mP2lGgmLSpuPAhdr8COuSiarzTEFgrdpmRG-dPpX8J5iDeLzpW4XRJomIZG-4z~YrbL0haRl1C1MrlWkn83h17Hx60pEtWc~8mjriEhG~Pxpa2Scz3~g29HoLThx0g6JVKbKPImVzt4YVh2iilmCjBFu0dcfXxPpipB4oXKH4h3Jyf1GvQTlHZlnJ4C1kFqvcU~rnFC-xwAqsiT3hwFkQYDJy9EseeTaMiZpvzC-vFpRaI1MDbKO0YftCuMAM-oDxIbN8soTqxZ8m8zui~ppGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Extended\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.060Z\",\"updated_at\":\"2022-04-07T16:01:47.019Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e1\"},{\"key\":\"053d7d93c02e4cd98c3bc3e532970c390aac7c95\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"105:1394\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4Bb/HqA/4LFBBRfSAomrffS0/style_thumbnail_14.png?Expires=1658707200&Signature=Ebes9Bi3GdzPJ0w3Ls3bMaxEXeWH3bgPQR-jABGYd88EBqKS9SMOMd~I0-pnA7thIdWYHEkliyLvhSxTevjpPdlQP6XfM3ff6mQBXIxCO5u4d~ej3q7OrTox44zT8vEgyR85jP~CYaL4mcwF6Em7~3wCpOFPJ8H26v-Kh5mZ9RJ8Kw4F-VX6RCW1rc1PvhCTLyGZoyZ~tduyq3xsnOVFAVluzPL4ow8cKGDmXjB8ZpDluoWkiO7yvDw7GgCQXalsaWs~hekxmXeXMY0nZ27Ty~Z6Oy4VO4Mm5nwWqKhiq1ZJBNKNLsbIxRYc7LhE5RtN1Bmsjk2E0e5R88OHCynuVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Text On Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.558Z\",\"updated_at\":\"2022-04-07T16:01:47.013Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}O\"},{\"key\":\"4ecfbd1aa04ffdf5e23f88f6d6e95ead44618f4d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1688\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EaJ/aoR/VioTSylzQ64QMgyE/style_thumbnail_55.png?Expires=1658707200&Signature=OI6xW08IgmTbJdlWlIcJg1V7EpiYsLvOTl4hi0MID4KWTk0AviP2fd~uSRn7denuqNPHCMSzaLT~1evCgYjIzadL~EZ3jkNxRjcKLR8HcZSnTUvnWEDeEvLJ4s0GiZku2d8mFhewGk3VBcaofXZxDo7m5IyS2aDMmqEV8AxKj~qv~rAHU0oQXZRn1gs1gDAKz0uwOGORsNt7CvZ1DOFStohV3MJnHxELEmRpnvOfCo4w2lnaRMwSKlWoRFoJay5llHIBDDOzDvX9CWnu8Q~5kwv8MUNCUrd94LvGoj5Hh2OjfHOW2NvjTlxDKRepN7fayK~CAAgM0~F2igU4VSjUUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.501Z\",\"updated_at\":\"2022-04-07T16:01:46.501Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}{O\"},{\"key\":\"6c2e41fbbfc42aa032e18087939c4e9175a3c485\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1687\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hWh/LPc/TWsI7YOXiBEdbRxK/style_thumbnail_9.png?Expires=1658707200&Signature=K0Nlyig9FalBE4RD-DmRO5JyuAJxHOfu3KbvXVqrJSGsIdKRRcOWLIiqbQe32YqSYAilGNSzMW~3GpVPB29I~tnDVRmGYlo4gyGGoglZcDnFhQCgK11uYDik~QFsymLBLj5h-3Ur5JyUAj-htY3jn26Fa-voBZMNMW0BwjKedxXxGAFhWKwOqTIL~0jSIFCab959tpT8hULDV68pIGCCJnZM18VhMjdVUPIg0kP8-nMZE97yJaza5QVJiOSu8xZ~kw-fDnPBLYD7oGEGPQHAl2OdXasKAH4ITKCE7qy8ooU4owhALyzMxlg4giI2BaxpV0vb4mpBly7SmnPSbHwSqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.495Z\",\"updated_at\":\"2022-04-07T16:01:46.495Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}y\"},{\"key\":\"727df7c22192c4844dda2cd64a89f1830fb50399\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1686\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ak9/dwk/dkw1flEDH4Dnrdji/style_thumbnail_8.png?Expires=1658707200&Signature=aNiG2U89i6ZAVaJghZ~ozACZX~Oega3UYnXfn9pA-exw~zWt5-PjEMvcYD2iFQxzqWgJVYifbuYUXlZJJgDGOFiyAIj4Btz1ro0LnVvHX-iLfM9cCnxRKvUAcPyLZQsOOc9f18qNya5FNery9p8G48WeHPSvd~WRx17Zu7ne8cvCyuqhyK~0XR9B8GIMyqVG1e6J2kGkw6xRV3n38~-Gwi3p-q759QuvFKSzs9DIVaybVQPpXblV3gp2ZnoGKIYjVGZLIC9GnqIUuQkTAn9jyFHSlOB~-R4Om7nirOPnHEW0ayfUClyKWxiGvN8dkQyroMXZd~U9FugqBoVBYeLaWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.489Z\",\"updated_at\":\"2022-04-07T16:01:46.489Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}u\"},{\"key\":\"e1bbe21fbe2e5fd2e368f4186145032ba488c8e8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"309:1689\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/LDB/LZm/n2ihyaDQt1bdbHd1/style_thumbnail_6.png?Expires=1658707200&Signature=Fp5tkW6fI7o1Zx07~WVsWuivs~pZ8m6ScFDVHExZt~TGXjsyfDHmVikSnsMO6IBJwVsMSaGuclsaq2mzwfMogixyA4~kfkGJd3StTBtkAUkEXgG8uJQPpYXO6tWUNuNzvdmnP-dmKccJWDs4QxUY8Pq1a1OzuuM-6ggTqF3~ppsLRSxR2KMhsX79kAjon0Lrtki-fbYjJspwq8f-d34QshG1PvohkvSTBqXUFkPsTywcULLcDzpmm2L6REW03G2WVb-azZUCZOBuvKnPcl9X-R9f7OeujeW~rT-LZ4U3yncKcW0MAQfO-N-hwp7m3FGYfYI4q7Rzj75TeGNxm87IDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:46.482Z\",\"updated_at\":\"2022-04-07T16:01:46.482Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}}}}|O\"},{\"key\":\"f07bfcda1fb6e36e37d46c8dcd2d9b5bfe824755\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1679\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TKt/S7P/iP7XzlfvdxDyq1lf/style_thumbnail_1.png?Expires=1658707200&Signature=hyMhBnlaNOH41gzwMTg8HE~OjYpVg7plwlCLlaRsSJjiJ8cnFzmhxaV9W2j4DvgO~8Bvo1j7eib~HxqvuFFiDSFUalRwMfquSFIZ7e3bW2HTajdeANjEqEwndNJNKyfyd6cTe4uXG7h78kHFwCIIGGJHjDF5fKUhvwyyoRrH7bb9NMovIsS51l96iAqFmSPQRt5D1qBGsfGEJEmdTbKUGSsaebOJoDyuV3Ng0eoMcwbOkDPIcvfkxZ7zNHuzN89zV~58bI3mIPHLVJ~hTWc51ff1PtblKtNUXa2rbmTOb22nFzv~BtwZFvNcMyhQDVCP0yGeQipeloU4E7xqKPZI6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.776Z\",\"updated_at\":\"2022-04-04T14:03:47.506Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~1\"},{\"key\":\"c27dd6adde29e9e87f4140cf4c86f86af03bbb63\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1689\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xWB/ZgA/D4jPVLcpYkgW1Zez/style_thumbnail_0.png?Expires=1658707200&Signature=Hhp4Tv1p6zwSCn0jnugtoHbmkEAHuAgczR5WNwxGFzGESCm3F0~tPKQ1pNKJJBNU8TdbhNp~H7NkqkdvejnwBwnREJS34z6KIkqXi7Hb3G7TKjeTkhdgLkH1mNS7NE2Dt8vr7SlfV798nBNRLC1NtBGSo00ys8sHDfgL0Q739zxUJvDi-e-vaHfICAroDwzKzWKWsfJxHOvDMGGxxk~Nr6ogvXcf8Emeds6FJ3o46T9RjKb2jXBT1NQpOXhLTxx4IgeqkKchStE3vnJF6YPS82UP~czmg5U6OZGK92dApyC9n7Pr7qDbCpY6TEeSsvYDq3~uqaFfsNsYivD~P~OVMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.737Z\",\"updated_at\":\"2022-04-04T14:03:47.499Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~b\"},{\"key\":\"b1f9a9d818a2495ff614d2f1f4eb81ad5da263a3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1848\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Sy9/ce4/8JHVcaY0d0kyXqHp/style_thumbnail_12.png?Expires=1658707200&Signature=CYDH1hY9mSGB5bvsIuCjp~3VhBlzo6Dr-Omz7kIfjG7Veng-sE~iz0CH8wevbvsPnjN7H1qa8qXMjSzVZYMAcYVrZRY4oUbmW~MVGeYSSaSD6E--GCsO4dcB31zpdD09LiPxAKSsB7tfovtoLkVI96HWiyTHMlcKbjq4lKjzRCqdd3G8pT63t6Qi5bnijWlPPTLZWBIR9xZmcWMPwtE661RSRCejRksTtYxYSatL97t5EmgFWTQ-Kz9RBza17PCCN3GwPEswjQEgJZ6PJHPH92Y2buklAfzEWfjHdAPnN~KVqANSX6b6HUsMAWaEqc6gW3kPSEzyPb21wM2Dd3~l9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Numeric\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.553Z\",\"updated_at\":\"2022-04-04T13:08:11.859Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0{\"},{\"key\":\"557f2c7f63de59a7c378279e7c9654bfa43f3020\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1849\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yui/4nM/Zwm5ZHIqle2hF3cI/style_thumbnail_11.png?Expires=1658707200&Signature=TRKEmtWL2kbU3z6-4yYNvh2-~Q5iaLZfEnZWC63J0AJdCEv8qWQi5-PA6mnCX17s~ORQC~RWc-1WjMyKzBO4ZALzj13Bp1MnzYVK~HWoDN0m0M-wkQbXbokneIjx9cx2InyrRaXBrSD8KbBOLvpb~3afL9sDO7ta10dIDKGhdBkkUjNX88tQHDDN9b13qDRgyL6HMX3IdCHj0R6Mo6l37CCyVOJ9STWWQT0xvD8OHhSP70JCqv8nmUzmjYNjds7sg6H7ZhNoSA~NORU-CXrDhDKmBJKTwkLtUoN0XpaUPG4sQG57dlmLoHMdZ3QbBNQMNoFtcLiBRa7STEh82TZFMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Operator\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.502Z\",\"updated_at\":\"2022-04-04T13:08:11.849Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~/\"},{\"key\":\"2c10c1a9c077e351576598088edbc3dad82d03b0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"39:1846\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Bbh/iUO/cfoyn3vSQwVpEeHl/style_thumbnail_7.png?Expires=1658707200&Signature=LGySj-~IeJsrTP6w9lO1rK-blzKNypoag8j8o4RM1pQfH2Z1G0z5EU-8W3d-NyvBxs2D~vgOILSV2P8CNFABXNwBwNf37GqGq06ySVvFhgs42pc1mt1JCCaabckef2vH3rgxwv2mRm3F1tS4VdA25R0anZbFPKhbNBwRgTMYJaddZ-TG7h3mFn1teeW1OJZ7zjkMKFj5vRuZb~ykT~u7xPIlemR2oimAGwbou72aQ30522R7zPv4JPhmnmxBhYA~Np0h4tf7fZ4lptqwxAMcyKLCSaJAqFrriTj92nxfeqSh~ZDHWRkjM8Pc6hC6xqwy~DPGpokLMu5i9ZFY2iuUdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/String\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.512Z\",\"updated_at\":\"2022-04-04T13:08:11.834Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~0r\"},{\"key\":\"8638ae0f49622e9d8395064ea744cedcd3c078fd\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1680\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/G0j/V7O/I67cDxzAhmYbRn1M/style_thumbnail_20.png?Expires=1658707200&Signature=NKlTP8elrqRLFarM4w5Ch5ez-opiz70EYtxz3xG1ZF2EnoPufQwM52O7UfvOGr7Iei3M4W6gXfOKELjHGN6KWyq8p0P~7IskQWSBR3rFWVz4XlMZo9DnymBFGHGzXih3iJTWMXUz6oASqT0AMRBXYsKWY76weVfcKftPVqdj0UZwvrRa9Odp40VCwIPv~XQ821cT-ezXJC-01zV4csgtYgqWrf~P-cQXIzeN5Im7go1Pjy4bUchKFlwR2ynz8UY-dujLOtpQb3ntL-efrRvTVWgG5L3q6Grbdr7DBVR2469SRAxx4lJosFOPtaXVkDXU-LHLlsQEzmjo3wYWGxiMFQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background High Contrast\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.801Z\",\"updated_at\":\"2022-04-04T13:08:11.801Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~3\"},{\"key\":\"51b91ad28644dabf5b31183664be52f8ee9f3220\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1682\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/er3/ByS/msNVJHhyUJ3WhCJ7/style_thumbnail_19.png?Expires=1658707200&Signature=K6QJrAqpFK1zQr6UflCin86bbeUvm8k7IXD9UIxPy680w6DYhmWRGThMaj0fKRqZun~-PpcCIjn2x1FM~uYCrNiXvZ10FSaugEfaqJUuqDLAcLSWnMb-0WTTF5xDrkCLlYFPepNBKDINVaY1i2Mvp7na9KuvOjRS7IJv4SHkeKPOfJGpPLOKO7L33j53usqhtr2ozg9X~3kkgZMKPL0sA4iaI5MMAvSoj-PYbZ5yD5WJZcjrKScjicGVScEC9EfZIC2fZB7VqdL4S~loSbW2oczlfdW0wQk7X3cSDRjtesV-rkiSpwxsZw5VolRFmjL9NeJJc2jMFOWhnRcfs7xRlA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.797Z\",\"updated_at\":\"2022-04-04T13:08:11.797Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4O\"},{\"key\":\"6e24a91a3b1b28b7fe288096c58af415cb730760\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1681\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/N0I/HNi/uMcZs4moPXRGOcGj/style_thumbnail_18.png?Expires=1658707200&Signature=TtKKWcQ9kLZ6BVC8MNjqujLiiiYCHQ7QpnFR6VmHTUkZQgkW0F7iyvGIvpBY5bl0V4abQRAYabWTl-pjKxaXHmAJ9O4PY1HdozzWSXl0AQefQ1F-K6GVGP1NnMOlkc1GFLQAP7T3uNlpPhFGa9eIzgxQIiGT6iHHiKxrUQ~-YLCT8J6N4AFouF-a1ZxJuP-lSYID2eXXqTh44JjTFSCc3xdv9YPTYoyqQS8VHPdXYkRyIKNcRFpyxpKeXLpLUceaZmfPeT7Xp8wxFFItpwBcF4obyeZq2OJBXEwh3lKwruzkUHUzdBOgNg1l8lMjpFIgNBd3geN3aANYhw4iUL5q2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Regular\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.791Z\",\"updated_at\":\"2022-04-04T13:08:11.791Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4\"},{\"key\":\"99896ca3670b300fdd56bae6a342c0c51e1fe7c0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1692\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/AeW/JrH/VuBSUYZzKYasuEv6/style_thumbnail_17.png?Expires=1658707200&Signature=cs8sy4vUBW1CAwqUKh5EAkzF3IvYGbn4RezC7CLjABDGFCHlNc-EFq-91GXIVL1b-olGPqesszMrd1dAtCtCGN6wJZlGVBT2BX8ZuLLxIPf8BJL4UMsa7gS3Wvfl8QU8z1YvwITwRFkFjflBPjvv-Ic1ki4W0xD3MWb1SXx6D4rI7GGpgHqKl1VKTiDkaDN0rt7064JcafYjs0-TOI83phwNM35pS-GLzCy0b-IPvP1-vFPVFGiuA4dtmjAqQ7DWPz1R262UsMvVC2A5dRS1cXHfNXaSpSTcke6YoXWGSm0sFA2OIjxQFBtbWCp7mYyZuE37SH-OFyWEyAh24NGkTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Muted\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.786Z\",\"updated_at\":\"2022-04-04T13:08:11.786Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e\"},{\"key\":\"02d03f3d47544f27d14210313bd6f2d2ec6aa7e2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1683\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/7Nv/UQy/syMXLjtuCV8trpU1/style_thumbnail_16.png?Expires=1658707200&Signature=Fl6nHifxZ2vxTrgFLc5CxgMHbki3DoUDLrQ7cwUb5N~mgXSAt7Rlb9TTb8kBSwtWTzuRtRLTV~yHDj7Hx1M2Tqt8PNsNXkL25jPoCKRm2BIMANgoaQOYQxlLBnWS3FTs2XMc1735YG2wVTGczChRvK~Ep9sxKkIF2D00y9aEXv3XFZgB-2pxdIDkszWfqRXVGbDhkEe~IcmJC0eHuXVLM98lDxlcnZuCPdSOc0qkPzYD5TVYIW-R0k4tIrUfCPnC~z2dM85XaMSrHUYaQ0kKZRScZWawH4NdjECbjWsIzRXn06K9LCO1bqsZXF59bNbOZKIz7CaG1EtY4rfqEAjF-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.781Z\",\"updated_at\":\"2022-04-04T13:08:11.781Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4f\"},{\"key\":\"d2bffb996e1f6da0fce60f0288a7050bf2cc14f7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1688\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KhR/xvE/bpNj7D9jmi6On9GP/style_thumbnail_10.png?Expires=1658707200&Signature=EUf~st6cifKkhMLFtiunNb4P5i1GuIUQEtsP5sUSnQH52MMFfqH~3zzpC0h9PCfCteh3CmA7Io2aHfO7BPVPnY6nj8llevloABql5yLsvph9MqNP1ERn9CDSR~GF4xkxxJw46xvc0xe0MjvVCnsMUYeYlcTPNILK1GD0JXtEZdATXd5QmjHGJjsQE5fXLuvirqbCGjTVZoe5ckP-HlOA0mDcS8V-nydOtDNl5ppTT0NT1dceiX9HPLsFMeS6GNEFMGgtXJ8dRye51EzMFm-DQgSBkmkADnDTgLGm7WWge5hI77HojEtXZCCfokpL02oUApAeGVxQ~lmHVHuyC-EzVA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Success\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.771Z\",\"updated_at\":\"2022-04-04T13:08:11.771Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4}\"},{\"key\":\"df14d7970e239d7c63b6134cf59e578909baf8cb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1685\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vBM/P1v/7WyhLA0MIg8f55a7/style_thumbnail_6.png?Expires=1658707200&Signature=TbJ-LnCIHYnBpZSOWWhTjRhlfVP5JDNjNJhXtbzVl6aAjRXr9w9vU0SQD6xavZZqDriPLY4nVmbEynyrF3fEtev7hVZ8jrevSzT1kBl3j7al29TeneWz4egYTWNcaAZtxJsHw82yTcHdGVlUzD0qF9h1Zu1jJVn4FkT3q0o12fh69u0uiyn6KnfnQaJIuxZ~yryGlfAo54aHP138HoTz8xwIsWZ9PQ6h11he~gYI6AVHVLbigwMc3jy4KsDaHxPTP84pWrCfLxeD~OA~ejF29QJyGjuKAxG36UsEQmINg1unCQ6NO-0XLSa50Ul84GpL8wZw-X1j9Fuk0f78bt4Cwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Highlight\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.766Z\",\"updated_at\":\"2022-04-04T13:08:11.766Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4x\"},{\"key\":\"084258efa5c89fc941b4b3812bf62e97e6ab4fa0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1691\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JQD/Lve/7Dq62JcPC5BUYVeK/style_thumbnail_4.png?Expires=1658707200&Signature=O7QEJYJVOP2t09PnmHmKU4gKzwTSJwJSmm8mApLZeURGQaj2~TneoC9nKKB4~utlgLp1jpS1bB61iJaL5Xu69YzYpiYkz~R0wAVD5RTm-gLeY0cXWMq9U-E4-AT~G5HN81kNpj1maURfIurVSJGQzvcVb4zDcWtbp0cWi2l4MpRhiV8pfmIoYY69hRxlzRHXOeKOE2SWJyv6rru16TiVwqBYx09s428d2VPXq7gP5~IfB0fvGDB0a8c-b80Af99QMxGfPuEVV6clha4HeubsStouDPHuls1fOMt-KrolGFWhbbtnxhK0oq4AJJ8vzLDSfd7XVKBBeSR~s2cNr57RDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.756Z\",\"updated_at\":\"2022-04-04T13:08:11.756Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~d\"},{\"key\":\"daba68993a7825bce14e2c1b1d137429ce54f17d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1686\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bhr/Sav/kahMmt6GyUpOvtPS/style_thumbnail_3.png?Expires=1658707200&Signature=fpw5c6B5~sqRJDwsyDEEcouEuEAqCuE2EhHoIGYb2LrZoxtm0u2ilQRRINN~xsbOq3qqrZwqF6yGpt0HG5sBk1-zAj97xDT-0IUXz613rtIfdSq~DouXnFiL1CRwQ1JldEgCZ~UQp1aNBpFjzVu~2ahRPKxogSbUW8-xa8hqqqiKrkwZPFzIVHVFBwTeALcs~EC6L~TEltms2HlWr7m2kA9pFfSGgBwqKTlvftMlh2vDFd6hPnR~qchF1b2TPWZD-ZrFXTZCxXrMpU9cbaq4Xwhp2n2NWF1Gh~3nx1TSjzwrmv5i1qMAeLGSCB3cwib5NS4W~br7DGVwfovzmpkpIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Error\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.752Z\",\"updated_at\":\"2022-04-04T13:08:11.752Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4{\"},{\"key\":\"23b28354b140ffb8b2aed2a5b02cbfda0927092a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1687\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2Qp/Rwd/9xfsm6ft8q1HDI6B/style_thumbnail_2.png?Expires=1658707200&Signature=KRtW2rLrOM3szwpwSg9BzTVdP8o6AwiJEjB4pIuzAQ8mvatDVSphEp1vNaZ0YG08xg1teapDLiosJEt85Y4S5noQdUUaUDHpVVzCOgLs02bpbCQKDNBmjZu8qHFIf5VVeaC-8S7MD3s7nC3MVi3Fe5PzDyS-dtEbyfsD1~Z2b1EkKNzSfkaKfJZnkLsdqpOWWJoBV8OQ6ITbOr3bc0aG5JvU3qM0xKZy12Rq1cKapUNZVZcWYQBmeIybln74NipWICbSdJJK~CS8en1ucFjn4EcnedMkFPc2I9FQTD1mbVp2-b2YiHh5C6GxGhuLRN8Iqtx6x5eHaGef3fKU6e9dfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Warning\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.747Z\",\"updated_at\":\"2022-04-04T13:08:11.747Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~4|\"},{\"key\":\"9fe7af9777ad346bba7549abeb4a5430d80a20b2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"284:1690\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/pr9/BgE/zMAP3KlJfxZadiJN/style_thumbnail_1.png?Expires=1658707200&Signature=DqxzZwQlaBvj0cZda~1HveRxm8JLIciFM~B~3-VLg8lP0vMy-t1oHOWTUsfTABVGQLX4-fdndI3YfXdCMEDTqtop~oA9HaFZOY022LbdRrIr8c0HamXBa3st3lSj0pcH-oWpb4aN4sFxnD9~RzVYltIpjpz1L9bjal4VvKcl6Sq0ZmQaN3NYH6BRnGCnowZ2gJfsfJukBT7376O748gNiYlRwzgxfsd0-tQtDTxepy2w1LdhbnOyDZM9OTgdzj63slNAHcdV5ZTUaU46kCLMG5JjMVna3hlrTBTCv24sgyFwRLBNfw5oNV5zxMTZsL38FOP4GJAnqXPgMrc6wyX4AA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:11.742Z\",\"updated_at\":\"2022-04-04T13:08:11.742Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~c\"},{\"key\":\"a6d1577ec82aec5d32451b0639769bed04a44310\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uyg/HWc/0ui5Ck4Rnr8t7zXW/style_thumbnail_0.png?Expires=1658707200&Signature=H8tRs03cO7VlYul0sl-~9SCkdLwet5~ZmtFu9rgIOaMhwXehJFW0DCQScy8uB-QOb3SU8dSVjxiGmWZRv16NCkiqA1MkZ-CZlw8~z39K0z1dja9pDhg~C1-eQPmuoBvTFm8fQOJGsqFIZgDT76aaHdl8aGfmKuk1F5e1dcH~EHHKsEp7y2WqW1gZtXEOXTnxB2uWx2N6RAxQF1jeRARO8y0KECqkP~sq-H0y9DOpnkToyHFeTqXCYtpQox46F2juT7CC93r1q~gIRUXXfOF-qRRIMbDhlsK6kMy32hSenPgJlUfPdcnDmjmuGUq-ac9YAbRLqS2Wle3GErhs9TnN3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Announcement\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.839Z\",\"updated_at\":\"2022-04-01T10:58:48.322Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"J\"},{\"key\":\"878cf98b608f73da55710539b4cf12d442b06b0e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"227:1552\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xjf/wIZ/66FFegTdFAaFZBg1/style_thumbnail_0.png?Expires=1658707200&Signature=AJctLf7ZhMwrp-QEXaTxG0iczMMepEdz4RYXxcu4bGCYaG8MfBBgjlsW3xbtKtzv7tBS4g4fZPUvpon~xxovrtIsVSpL85GJEShFIiuVivBRFOMgcY-QrYn9xOUH~wJRrVkrXG1cMGddox5Rtjz7HfMXL7~Q30nwQ3-TjBmllunFwSW~54JW~~xROfkG7z2xHHxRmEP5hVOo3gFguE7plpSEn4SGQaKPnlPgP-snakAtEW6enaSiPubtBhgeDM1Fq-UXzFxhojKswjFgU0pgI3ZMrNwchc8v8ozImxiDLzEbD-FX2j0bkSia0qaW5JJqG0nHmUSOjfZjEI4RG7YOyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Low Contrast\",\"description\":\"\",\"created_at\":\"2022-03-11T16:07:59.623Z\",\"updated_at\":\"2022-03-11T16:07:59.623Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"WO\"},{\"key\":\"f8f016b4e0b8cd9dd5e1bdb1e0228bf11f77f8d6\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2372\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/WoU/tlp/uF0BX2MyMQe21vKw/style_thumbnail_18.png?Expires=1658707200&Signature=Z0dRD8FTKUnRMs5VB207z6D8rlD34Q80DzncThGqCVYO9ftx3Cw9vaW7bnWjwGoiT1xEF8bx76CUSSDIOwyUGwwLJg2PU4cAR1uSnbqYGQ~fP3oWA1esKXe-P~yPnrt4U1FGdhqrkpE20c~xHXJVzbfDS9bpXTVhX5m4sVGkJMNiYjSNzE-mOXrgOvxxTDHQIkLyXyajAaVTw~qCuiDVWqEqQSzr-sLRpqbCRP-djQtcir-2b6CPZBEi73Jgp6NslONS5Y6AutSYm6ssaC0oGuKijQJSSQMgxOKvdeOCB86qw8-dL6-q7N-b8cGlVNZyOK4UMAbn6Et16OhjeFbKlg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Floating\",\"description\":\"Feedback indicators bg: toast, callout\",\"created_at\":\"2022-02-25T12:33:22.997Z\",\"updated_at\":\"2022-03-10T15:13:44.581Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"%\"},{\"key\":\"ef58f49300baf80c6613b04e065f393c2d2003d3\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:738\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/V8m/FVU/gyze641TtqLbgvHX/style_thumbnail_10.png?Expires=1658707200&Signature=GuJkEveyj~r~EL~rY66qjFjPYR7GvIHBRK-Zmt7zvV2DLjxqgoMsp~E87HIaDAQWUA-PCZsFaukHLjjTE~NuS6PF~P7OU39QytbZQaQg1M~mBSXWMyXIZzt7ed4SLi4dVti1GwH1192AptIM9QMbGEWyI~N8um5fubC5PSuH4SsmwRbfncuaAqYK36HQpkqCwAtfz4psBy4kgVwXugzLQH31-rNgFJe4m9Kvl3BbWzwPq16C-XMQxaeDc6TgEE5jwgzxS53ik30NdUkALyrbHdIv69dbLJG-9xTZHmoz7o5Up1eweV9AUxNpXYnSk7W5GpL9SYcoDk6hqp5KwgtLPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Regular\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.934Z\",\"updated_at\":\"2022-03-10T15:13:44.576Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"6\"},{\"key\":\"d3765002568fd933b50a860721e45c08f3df3a01\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"20:526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6fK/1C9/DBkGPETAWbtlx2fz/style_thumbnail_14.png?Expires=1658707200&Signature=gKFaHJgs5p689oiZGsFtT0ZZUo2~NYq4lEhuZ4trL-L~oV7KnZdnYm-9d1eMyhhKDLSN-dOqOxXjZO534GYeAMeN6XwMpcuy7qA7pjRx4ZDrddLgO89UA3NsLbeAtGCED28FrbbvGUP8L0tgftUw-~Z~KHFHoIou7zSS4FTQm8VT-pCRzZQCr2yrzA8M3pQPdvRXQ-JBM~CxYo6UKoDsb820IxIc8Q4nKX-XiqHgwjoASREIXCOxsh8NqNqnwP7lKpF8izf7DVaUm6D-Fsiq2w7kaZCPJ9hSWjBsLgGwjQXRX7fily4iUj9eXlEJ3hfotc7sFfcymf3Sxzz5jwAGdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.966Z\",\"updated_at\":\"2022-03-10T15:13:44.554Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"A\"},{\"key\":\"c1784197b7ed4cbcb6c76fd9f761898fc13275f5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2383\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/p4k/pEC/rL8SgzB7YtXh9fOV/style_thumbnail_13.png?Expires=1658707200&Signature=PeiL2YJZGmSVOZh51taLJWr59GW2GNp~4GcD5DSJvaQGF3yZcNjU3bLr7Fn-hPpvmv70ly517c-Ma5TnHIthuinGhMp3rzESVBXlFYlD4wy80IbnPcjf4FD7RXipsttVUYmRp8Yp79~PcUwiqKDMRVCqqk2tPDQ3J9DAfCkm94rPNkRu7ajRA7KLZP1sDT7Vsld3leLfypCojYyIvbEq2eiz0uzhJDRqs7rNdDIeA4NVuBDnLmR6lMeWWehvQXu4QnA6eEWBx2zIT0zrnsUyZFouRLXIEm0ObmLX86~9xt8SwjQk4UR5Ty15D68vJeYaL3pAkhUVgi47X3s~wRPc7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Muted\",\"description\":\"Muted text and icon color\",\"created_at\":\"2022-02-25T12:33:22.960Z\",\"updated_at\":\"2022-03-10T15:13:44.548Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"1\"},{\"key\":\"85651d34ab4114cfcfbfd9726f44acccfe77a5b7\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2382\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iwQ/m9C/kA8qKx31kRVc6SVB/style_thumbnail_16.png?Expires=1658707200&Signature=KneR8RopXRHdgLpx0tp0Ev62f~ReJZlMvcJxjqimZcn1XMwsEWWl5DjGnZGpdujbr7vDjJfHGIauSk5vHdSQaW-zqn9IvqqadRxdIzt8tpgNEWvNoC6wVICptkoHhTt8O8lF~nT9DI18RdhO0vIUUyKtC0zDOpaPkBNhj225PpGvzzqk9fKPG00kcooM0~Tj8vGb~3UPhfCgiJTVrYOswyu00AFrNyZyomDdhf3Ofph44kmk4txgOfxBFEM7YyYIumHCBqCLlNwNTbC3sjmtKQDahoMr9Mv2G-3PfsYeVK2dNP0~av2kMx1CqELo3kNmwqC-YsNiMRskJtNh0c6OzA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary Inverted\",\"description\":\"Inverted Secondary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.977Z\",\"updated_at\":\"2022-03-10T15:13:44.527Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"0\"},{\"key\":\"3d8d818be60a2f3a99286ca10fdcaf953b04455d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"101:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/f0Q/nQe/btv4LeDcKk4x0wX1/style_thumbnail_1.png?Expires=1658707200&Signature=J5KVx2uuvLSGnMWai5wSUbMw1~H1bX0DjofUqo1cj1O5CNaBudpNdOi0QdRsAj5wHEtRtKndk7TRzHsImMHOLdkSzhqATpPi19k~07amb6Iht~nXVNcDswzaGVoY4xmFaoGzRRqmTlwf1cQgaqPnxw13Ex2-U11FKSQyv5vl478lGhaoA-BSZfGS5JNxHnQ7p4TS-840fYUDbELnnDtMFKGeSOVuy7am0sj3DeMO4CKX0jR-igmXK6dpXiHs57Qm8rG4Y34g7fyR~B6jqYmj5cugHCsQ3gHiFrd118HUeofMjqyFKJK0dxsL0lFv-c12xd8cUJnv7nxlrmV1nPmkDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.681Z\",\"updated_at\":\"2022-03-10T15:13:44.501Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"RO\"},{\"key\":\"0dd6cc65ed1e0da4a65a7dbdec871d9bfbc81b15\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2381\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/iLy/tFf/i0zSBlwFv4G6msWk/style_thumbnail_17.png?Expires=1658707200&Signature=eqn3jIu0rWdTunrf-JsRMDZUOeTsfox6D6~WzdH22MzDlNXc9gPklmv9KL-vbXeqKjVmEREIn23lbksWqHE-eYpKS9~tYtkluqureG0QDOZhs1QZH8Z89ANNeA-2OnLEypJPs3sMdqioSkbqksj-jEWJKOD7VYAmN4dmD2~n-KaABmEV~8oZ5nW8EceudZk7peeLvXtsUSx~afWmDwwG3mnCRSn2I7Oqb6DPT4S1r99SQzbxsX6Ro04ISGPhJ7-Cq7sbFsTmvPLJv-lfmAifqVoQyGI53kooKoyGftlIUhUiPi7SuSXMzvtoTKbktcf1s4u1rjUGt~hoG2wmDvquFQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary\",\"description\":\"Secondary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.982Z\",\"updated_at\":\"2022-03-10T15:13:44.488Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"/\"},{\"key\":\"e449d354bcb3b1a75c310bf34ca109eca2e806fc\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1432\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/yFC/mGy/bU35UFDULcIUBBp6/style_thumbnail_0.png?Expires=1658707200&Signature=LB~eBhMmGGe8zMt5eI3QoGwN-qnmm3o6dw9mPeEgIo5kf4-RdEItPyTWRFXKojNS8vBtJEPANGQgxO6uFkmpCYFLS-QaYLiG4tLYwM0p9qVLjZtcg3jmmOajOc0csUfTmlRtSzyIYZ5ugA7zt17-~GSY5MopEBCjEXx4EwooSavfUD5v01OFrqjbiL-kFhBT92WcHaFQOmXcoSmZptEcjBIQohKlsUBTftExw6EldEbCqPWQK1LsnskYzmLm4gEs3r14Vo806WW0xco9rVJ2mN8HDA0lZ7FTnda0ey5jsZtwT0km1dLniQP0zAXroRvlhl79LZzLpaYGF~zbeVLo0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.822Z\",\"updated_at\":\"2022-03-09T10:57:10.553Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"N\"},{\"key\":\"0e00f688cd363b572752edebf943dab3d66b3e95\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1433\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/LLe/eIC/N9ArUd5TTINeywEQ/style_thumbnail_1.png?Expires=1658707200&Signature=I~4~aERTvvABS56z83sqqdCHzYQd64LIrlSNzwqrcV7eOaZpOdNUJ465b9YAuWxEfnkqjtL1ayhVRux2LA7Pti9VZBEYl7lPoBEOFPwsjS1hrEeauYiAbO8FRtUdxK2Dtu1sXbgCk5jZgFmAsVQtWjc01CkmzVy6W1V-37semUEfwbXcVkwALfP5vQ1NbZKrsRPMhVhOkVb8~zEf9Zq7W3l7AWJgSeUQZFp02R2YIjBaZoryNp6y51JM~pR1b6sRKG-Y0OMQRUgGBQ-cI3jBNplwhNLWnS7zj6J0DNdeHMqwqixxVfeZ25K2A31Yc-55JESwzbbQtNsm9tHeqUaGWQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.817Z\",\"updated_at\":\"2022-03-09T10:57:10.547Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"O\"},{\"key\":\"0a6bf727ddea4108e955e7e4e3a191ebf9bdf74d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1521\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Y2W/lDX/riQEC7uVYR49YOzL/style_thumbnail_0.png?Expires=1658707200&Signature=coxlJv3HZEJdM7ptyP9i4GsbAtj5PD4CtHe95yYKLLNuoKgvF~vRgq2zXcqneolru1BaGaBWVqcoBsDnDcDgPiD-1kDyO8spn2mgIn~VVQ2IBpKO0vFs67JxcvnAgFqgZV0p83yZtQny465wkrF1vdOGPGtd~TpomvP8dWsSdn1LWFBQPXJwhSRILvqPnKcXurRvUU-~QFYmoPJpPkQWtyT43lMC~J36Ejl-G0sNtV-5KpI3XApsSvwpu~QqkPynngxWjydpfY3skfPW-3-a4fn8mwu4VqesxglCeShyjpeL1o3xZ5IDwgOyB3SSN4pmh1kkADMlYCsumME2EIIFrA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Success\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.869Z\",\"updated_at\":\"2022-03-09T10:52:28.091Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"_\"},{\"key\":\"e01cc96187afa152265eb2b8f97607ad0391cdfb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1523\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xIu/f6S/SUFFQg0eBnLMr8TK/style_thumbnail_1.png?Expires=1658707200&Signature=UvkOlxBBmHmZUaZzs9XHUsTAVuCPGA3cM~5TH0SS54-pBD1GzRYiFK0UtST69VA5KXcQtDGlYBdDp~vYDw4lFDMZ-yi6CgdD3gKCo6uJf7375NajeZOx0vNTJ6WVajE8Umg12qHzs23NB2ahZ5w0phKeZVjjY0D3mFCRaIMoWaKfc6Qu73~zmZ3oQT23j3dpBxScHWhtQ-~za7GqF3qfNkkrknh3le2ftpGXy~QpvrnK38RPeu-E7DZaxbRT8Fqunsh4zcT6zsihE8Q6lmVh6lumfRkf0PS9fKDwbBPSJMaWVWIp66G3HBDUVhZZtS7Ku2QbpgUyg8YPWlrD-3upnA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Critical\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.737Z\",\"updated_at\":\"2022-03-09T10:48:18.660Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"a\"},{\"key\":\"492fb3207c0cea54dc2977b48b61d09739a46b9b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1538\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/W9g/Vtn/M9V1NaNlQVVLQ2zh/style_thumbnail_0.png?Expires=1658707200&Signature=KRhubVEFAjibW0h222R1x0N9MPn26Sft~-9RFLDok07-9n9J3KLexH6lmGZdeHYJD2les1kVtWGljNqXQwVzgQDfi0Tmzis04rC8ay3EBM4Oyec063WPRsmaKQZaSo8V6WilXfb5P9d6dv7w2vgL~zBrwhd9ysnJF6Kvi6i5o84Z0yYzKVdUXPVE-TqNfGz1dA-FHK3c5onTIL8TbK6yi~kUosS1~Ey0eUx7xP0DUdmXUpZ1dHiCGK0NR-u9Qg~kRhf45hG0uKsnhw45rrFmEot9ltioDhrvUZEyRzIAYkG6YbT5ECC3NT9KJ-O2~qii7f9Q8ZOoUfPZfjv2KsSqBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Error\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.524Z\",\"updated_at\":\"2022-03-09T10:48:18.654Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"aO\"},{\"key\":\"ffa8470c8873338da642b47dfda437c4ac5ff62b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:739\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TFl/xnJ/51cAhwxp1zbIL29A/style_thumbnail_68.png?Expires=1658707200&Signature=TXnzapoy0B0s-YXqs7KZPJAJ4XKGKExw7A3K-MHROo55x37SM3kbebXwVq5364cWpIHBgD5lqS4GbFrMWjAI~gAUl3fkkmjyB8eIazSHvjkqjBX-6UGWCG8Cxhs8MkG304f6fdS9Z317AX8~xReWcQdEZzWRdh1vD6JG20HNLWiO1fxYy8CtyCCdvY6X0If972Te9EwHx86nLu06zuo52pKC62hJCeLXgHYfVp1NOEasif1DLugjzGcGdJaExb0TuAzpOVy1KYx3iC4clfummlU~6Qi6GlJllUErUykwMg3HTpNvK8faXkXv-bbFyWEo9KSX5C0kmeM6xJblkfR6zA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.858Z\",\"updated_at\":\"2022-03-07T12:03:58.409Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"7\"},{\"key\":\"f995b876d740cca61c8c65eaeeb45fd5eed02da8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1516\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/m4M/IfH/EmF59dsi7qKhI3wf/style_thumbnail_81.png?Expires=1658707200&Signature=EzNRYbI6WgF3zCY6pDN6aRxj8dT4uBrTNSCJ-afbT~WKWHMlNLAx-iwWPIEy7joaaP1UJPGaMkkR6eoMD1i~YMshT7-AbKFmcQOJfBHQCHtn2dETt17bv3eALwUWdrT0q5irUrnoejFXQNsCil57YQ2nJEs9eA4Nd18eYRe72RnOfaxWn7xliK24HASHyT~ne6AN8WK3UPHwWUoQWhJzs2lnqoN39LhSXr0rkcWi5i1-WvfKsusVb01sxpolKm4KxOsxlHC0A5rOT2FHQ9bNu0A8wxULw7tvv5-EW4~acQuW3wRX6GpmQEsluHOq5Hj3bGNmK8fAUtyXM6erpchePQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Anomaly\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.929Z\",\"updated_at\":\"2022-03-07T12:03:58.398Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Z\"},{\"key\":\"f929e6f612c2fc5f7a5e411f5dd5b8e3666fbe14\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:790\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QNS/W9f/s8uFAxwFNYofcQyV/style_thumbnail_114.png?Expires=1658707200&Signature=fS16Dlm0gC~xyGVd7o1Au2NAAkvwzMEPIG6UteDhvxsClPYipNTlNtlLzFMARQYT3EBl5c5m3gW-cK8moT2pbzYadWrW4Uoi4E08xg~fae8oq2kCvW9vZ7EdOF-tK2zW8nGlRlAbNhajicTAqf1s8ZEJbORv3oqmHZyL7gsobpIqkfgvDgpj56BEAoR712qNXPg~WcZRPqqJdpezfN1THK20vsqQWEA8lbmvyd-HCl-d3hz4VoGVUobjQpOd0crb-DS22xn82Dy5dWSxQTtgt3i8yRuUksM1XVBJyWcGXz6uEtVAmmxXNGVnbTG7eT2ruKnfzh7BWxJIztg6aAJdNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Focus\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.106Z\",\"updated_at\":\"2022-03-07T12:03:58.392Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"@\"},{\"key\":\"f7e2ded6caebf0779cbfbd0a557e46e1947a614a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1522\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fsU/Bf6/ybzns65ZH1CLCcmh/style_thumbnail_35.png?Expires=1658707200&Signature=g9PkpDo8HH-UaGf5U8QC~-XlxkMoAw0X5urR7pxAftmK~55XHgVJnfWiLYnq6YtOyXSq8Em-QzRBn91TnJbBgYfH-FIOXBlx~YfMMJauyi28HbZMhdwFb--CsLROM4b7YwAnBQNmtN-9sTzUWxkyRxmElgk4uyz6USGZnLM8~R9oCnLLZ4LWfhmEmA-APMgnOP~~jnMZD-0zC9cZn8YLrlaC9H5FX02H1w4tW58H88dCIBgNPKE439kr4RJLBdtzr4QzJzW0Vgd-s2w~JUkAey~iq9pMTRvjjakYNyB3~VWKP~t1NYo5FXWsIj4o5zRulOofTlEBvp~I9XpZexAsNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Warning\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.686Z\",\"updated_at\":\"2022-03-07T12:03:58.381Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"`\"},{\"key\":\"f591d3c7c3252e0b1f8dd6abc52351151c7086c2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ozB/sLM/5Ig4jjBNTCxo0LT6/style_thumbnail_66.png?Expires=1658707200&Signature=NU7hvXsrDvfqNkxvhhAG-uOjuypnYWceB2xWacvqF8JHBviFdQSGI4Oa98c3Ggimw-ErDMsekt5eqQwh3axEwTCCnTruGkE5OxsnG7GqxYC5noUvicO7b144EM0Ord1pzBgHMySN7M4Z1KQWNrsxNf40CROlGfjqYKKx47e4bzFnx8RTVfD6zep3zxTuU8Kgxsd7BJ~UmEJXL~1bYuU3AvR0yRb1~PsMkNPvoRL2sh0aGl8uPGFilZ4NmxEHyq1nvjYs2yghOubBP~DssxNShu7YLt8ct48UA6XhExM60NQ7kPcQnfCa2o3rzRSvuOYcgZwbylcpoLG~BsqR0IA-iA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Info\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.845Z\",\"updated_at\":\"2022-03-07T12:03:58.370Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"I\"},{\"key\":\"f3098db025e7272071f27ae6f9a5e5d3096eae65\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0GZ/vkD/qmOvsqroHMrb6IU4/style_thumbnail_11.png?Expires=1658707200&Signature=Xu1YxzsbWkXoa8xn6vUjTgEbKh4qimJl9AtLmzy-MHWyQDshwyA4xbO9JnDEUdMnOX15BKgtOev-U1Zw~VCE77IPVz~Oyb54hChHSvkaDemjv1TAbaDAaWDVPzK4Fem0cLDpCpNLDs8D0sPQ-3X~9ervg88ymPBUXTt8r85lAczhB2pOQKqBJfJDreNfI3rdZoaankmflEFnJHlw9wwk6zm7w9VrEukrozJrCGRs84-DZnZTzgyJVvUijviu9aXZg5Bm1TlgzoOQY12i4pVyV~hVy9nA50syZPEeSpG3XIXJb06i0B~ehTAnFWYv9Y93YWtLrjQM-O-ijAct6bGf1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Success\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.543Z\",\"updated_at\":\"2022-03-07T12:03:58.359Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"K\"},{\"key\":\"ea3af86dfa80f1c89ad9baa91e0bbeecbbe5f105\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2395\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JAb/t3o/fHMkVnc5NryHTHqk/style_thumbnail_84.png?Expires=1658707200&Signature=QQx-hqa8jKrY4sUv51RAQQS3Tqw8MyUaVdRYwmQxcuqlyZ4CQRP5r9O7OMBw1NjgTejO~xeXqQOo9pbEAaLIu61JSO9DCnaOM9Wny5NdkF98ejSBP-ddkzcgQsJHaVBiXepLVK2fRwyg76mhkSQl-BzmVQP9jt~m-ArUiA2cpiBer07fyq4HLkhLjNNqtvhnLWV042lxMRoJVN3g-FB4vI0u-2BLXFZrgINWCdZkGudbBfOUU9MsgURFNQz-ysuehqPx6LZYhi5lkh2-nwOmFK4fqilmak6jDB9Kut~EWVh~y3WZeEjAxk~ZrIdr68z-2a~IDnw5XCmHC7m-Gn6glw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Hover\",\"description\":\"Text color for System items on hover state\",\"created_at\":\"2022-02-25T12:33:22.944Z\",\"updated_at\":\"2022-03-07T12:03:58.337Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"3\"},{\"key\":\"e67fe626e5071c2818058f0e6ae6ccc2c9b1747d\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1086\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aoZ/4Nd/u64HJFJvNhekdjoA/style_thumbnail_27.png?Expires=1658707200&Signature=bGkI4DTJjlSy1EfqLqoPN0nY-z5K23ruqrogFPOze2Jlk3LfXpdKRzQUE4oKxF9ae-7jKFCGNUvjfJkznLYPvq1NA4u812zss99LiphyYGhYVzHVFyueSx9knY0bqodKOPKO22FO4xNZc3bdAsQrCmGrizFH94gMR2a2jzouEIJ9xbfMc1NJpwQ-6~mQlJvzJdm7E1feXjeh3NlLAGsiQK9QH0-INb96wmLaJIoDRzS~ZcB0DMvFua6FAHhP50Y4Z~xnJW8N8YogQXKCuJ0plWWErVUd4WlPSW9nGf1xCtQJSYMR3NANRMJS5d~MaxIkBuN5XCxUjDLdJPRmRciLDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.633Z\",\"updated_at\":\"2022-03-07T12:03:58.326Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"G\"},{\"key\":\"4c5472002ee9e9014f25b2cde12bc75530c01f31\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1512\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3Qz/9dX/smjO7mkXOLMaJNfP/style_thumbnail_4.png?Expires=1658707200&Signature=LgQXqUv5~QtyAS~7ZiataQuBkbxPts2eFZbGdOlgPDqACH4FkWdq-bUuHpof8eLKRllsrtoIJiYaStvLN0qfm4iSQnEN1ht8Rgrv7iIuM3a1Xo5OkVkrQgy2ppv-v862WZH9ecOR~OTSefVu-CDpEvYn1eFvTWIlpS1kFiLoT6k7Kfry3bcy5reWOH03oAOuAs9kM9-~LQT9TaBnXZsFdas1V9uaM5bVIb1I87E3KHXkBTdGG5UYb8~3Nlrqf6n9AtbgtdfFip2gngKbCCbY10ncl-20wLglWFE6vGgD3hg-1BeTHpPkBBYi2PgmqU0V-BddK4aYZTqzDAEjrpR2ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.537Z\",\"updated_at\":\"2022-03-07T12:03:57.784Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~?\"},{\"key\":\"48d7c5cb2d4166aa7a3b3cd213463ac51b50a17a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"126:1406\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hmS/EU0/sHxi7Ahe5WlFiCav/style_thumbnail_0.png?Expires=1658707200&Signature=GQJ8XOsHPgpXL0Ihj8bjgV2ZGzxPOPR6Jz-slOVIPxiy-hLjFeKPVLidSNw7GzlqQKHMQX-rgIhVpvLK25dXmbiUtVPU0XlB4Sh~TwUHSJ1bssuQA27Q18XoIE4t0NnbJADNCJZwK1B1YBAAC-JrWA1ZBtYd5LruX6AFaQPAiALj5YbU~ChYEOt3X4I-pXw99dJqzT3oZFExwZjoibxVD-6--T7HvuDLEkDONX9UxBCW85V45HpNQ41Xg9YGSfQmk3ESQmRoBEGqkmCgYqERbyCPoNKb9SRbtBVLdz4sWSdyG9IQ1Q27mVTsqRCpaANUQZmlE1ni~ax5ABqErnxBtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-01T11:49:51.759Z\",\"updated_at\":\"2022-03-07T12:03:57.768Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~8\"},{\"key\":\"46b1248d1191b41ec368e1199e0cae64e5c2501a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2369\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EEg/KpX/7FPN3gVcgAyyPHTY/style_thumbnail_74.png?Expires=1658707200&Signature=JeJTFog9MrVlTq~f5COf7QSk1bnd6mUcVBj6Pls6sJhQJdMW~7XAFtGxeaZ8XsRdssqJBDqh5cqmLAkCRSwRZO6pZuyq~Q7hdYJtBp2IzXyHMr7sZI66ou~l62y~Kw7qo9yygJOiaPTTWPMaM~Mjz6NFraAFDv~eAyhtIv7QSAEz6GoCDgSVS7L8t90t0bbLcoQHmHunDW0hpNk1f67fTTbMZ~sLvh7xN5NxJEneg5atyaoPyKAoJt22NgRGZdzJF6~xk74yl0zDJSHZa34Zzat0hmsd5rSXNlhLrhnaLESU1JvF0Lc4YkC60CD8pgoAsiF9aQp6hZzl66-dC-eWfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background App\",\"description\":\"Application body background\",\"created_at\":\"2022-02-25T12:33:22.893Z\",\"updated_at\":\"2022-03-07T12:03:57.752Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"\\\"\"},{\"key\":\"465d9d7d5ca47d252e7853b4921af17b38d969a2\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2397\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/D90/ial/awVXUolf3CnjjB2x/style_thumbnail_110.png?Expires=1658707200&Signature=EXeZVCp05ujASHOvOzRjc~n4fUb4k8~YCAQq5VGOQW~sTFzi6Xj5JNZvNVGaeiW-rzPBmz9dnT2CwSdRQwTEZyXfT5A4gHDdHMQouLrgM1jvvuJ1UZp1MKL7w2K0wRRjwHErPlt8Y2GVfiVOeEVkbI41EaIpn0TGEUmM8aRhQn-sD3hNLec2m16eXHPHv8oBqWQslOajIju7p5iD~kPUrU09lcMIPPa1DOR6qTPLTPrMGiLqr2nafQk0mBwHMoMfjRjnjc5b4RQ8npdVKwQFcE~-uKZXS3x4WyX2scrVSuj-08cNhRmypMqQKrX67bXLmRFob-8RtNJSnM012rzbHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected High Contrast\",\"description\":\"Text color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-25T12:33:23.087Z\",\"updated_at\":\"2022-03-07T12:03:57.747Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"5\"},{\"key\":\"4564d9f2d458153b3a2a108a30cd75c43b59d05c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fvq/gIC/hq2HQm8aAH6nYuGc/style_thumbnail_39.png?Expires=1658707200&Signature=PkPn9H89PESZD5x~daQxxH1ch3I4mp9ocz7o8BKE2jmjnJIR4Brlp5RnLBV0-UPS4XmDBOwQ0eNjZPWWmmBjI4CBwIBQPtcSwWQ~cRT9oir3sBi1UW5t2G1WOWIWA9mEJXqnte~dZl2UOEFi8nYRfv54K0a6xm63CD-JHvPdk-6NfEhTZB1naOVtD4H-RC6PqUewzm1lb6BBUtibpxteFHhxFMUzkGTu-tHjFFobqEba41nm4W7Vm13igCzSgnWAsBY7S-5ta~YyypwT5gIbEN05dajsSrU1uRsmf061~gU6KZWvlvP7TG5V8P85jQhBhvam6DGIMa9JrKyGVjzkCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification Inverted\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.706Z\",\"updated_at\":\"2022-03-07T12:03:57.742Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"d\"},{\"key\":\"43597fdb5c85b7a9218a1d61a51e65341a2bde11\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1485\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Qi8/tAi/6SMtpulbzR8tpsMj/style_thumbnail_83.png?Expires=1658707200&Signature=BkuG1w4hKskHkYQOhlpR9mJyUv0NHxAuCtJqnXDsNclgj7dXo7EtOT5hRKBvS~JnVZMZfTJMeiiL8j2ACkcsxXZS98NVojEGkCBETC9nv5hSoP~1v-oFO78oHx8Jvb-jAkIbZZ1o1-fieObKW9yyFvQP-2RswlN0SHRyeo0x3hqYbrakB29V8hY9s7gfOu2CnbGrwTd1b0vLPKrRiGoB8ae9fVHgSM~MXSDf6NBdozsxYTt5pphPho5wUTaBKuInt9Y7pHxFeDdiTsC0WtvPAhGEjZxT433KrwKK5cJ-UNoopMLj4OVfAw7tGz-L75wUVOt-2oI-XJvFe317QaLFYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.939Z\",\"updated_at\":\"2022-03-07T12:03:57.736Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"U\"},{\"key\":\"3fb696c3ec87fb9dd19a3e4f2f3853c7a0d0dd2c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1434\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ECK/BS0/oTCDhLF5YQVIvehh/style_thumbnail_1.png?Expires=1658707200&Signature=B9BSVCzsMiuLK-4x4XJtXUs~UtqPZTaibF3Vp9W9DSrzwtU5GhsPKMZKGN5ZzvgeEsQqoDwvF5CM60R5M4YgS-ShlebHwjp~hzgaNWbrjJgvEoBiVD~hzMn0g92MUHWTcYNd8ffphCIBrUq~S465UcEP~g9aUrmAoE519Dy1ixQKIyX~9Yz85u4him~lNPAyAvWg8O4CTHzLN9cTUXLlMmoGY5~IEctaZr8p2xxFal1K30I0WzATbD0lsmnVghDJsIbyDtHdeYOR46nzB1Hek48QVKDydTSaJ1ylTXjVwv6xQsfo3cpmjHregbJ6IGpGCSJoCpXTM2RpQrS-o9czLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.491Z\",\"updated_at\":\"2022-03-07T12:03:57.731Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"P\"},{\"key\":\"397bb6d1b175e4148fb48573e50b85099b37d245\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2376\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zyZ/hME/9i98atReCgj4SKrG/style_thumbnail_104.png?Expires=1658707200&Signature=hxF2A6JO3TjdVQAI59vgNVRQH3GV655b58ccRvYOprozIETwQtUYN~pGa3KPSBcyKaJxhob7faHOlbc93lmN5YjyUbnowsFBZkO6vbAQx464-21ryGRTKySy9iK33iCNIoZnu2hbvTFYQki~G2jCl1bjAOZwuGUFOcNgT6aLUBfu7Z1~689to2vCQ2q-rBZ-inMzhSDHb-ePWV7V6l-nhochoZ9Fd4ZjbdJlLq4VIfZpmuCymOuombeN09BnvqzsE3dAVn~rORv~BbRG4HYPd1Ao4MMv51VTf19NlJ~k4rRddZjo7mP8vmuErJKnbV1aEQH93mr2JWyWhwWZJhBh8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected High Contrast\",\"description\":\"Background color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-25T12:33:23.054Z\",\"updated_at\":\"2022-03-07T12:03:57.720Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\")\"},{\"key\":\"290036b6bb2ecf2693d8622f547593442fe567be\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:759\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bHo/eiA/2mfGm5onlqqPwRze/style_thumbnail_0.png?Expires=1658707200&Signature=ZXYWXAAd3cV-G3NZWnSaJSLGbfDbijR~O5QOTGs1opnDImZLi1Gj~ZpYXz8FOvPkLmYfIEoTSr2HwFdoPuS7Z5Rf9SD55w2vgf1~a6eDnrgCqJ0-2KhOjWMfAJTi1tm5oTizKKnF20V8gXsjRASQKFikvidrmoJfZ9aTbJv-Q0n49kL-hJY~uDwB-ACOCV8b94us5zMBtp3nD~mogahwk0JP0YtRm-2-GMOp86Slg00bq1qwkNywYUpXxjTQ7TCbbMMmDrVYORuWI6jb7SIf9YAhQf0aCRVSx5Hus4eblVW~f-rvRM3bzsa0apjTGIz5dGvp2CNnncNTT7E0llJy5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Link\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.035Z\",\"updated_at\":\"2022-03-07T12:03:57.695Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\">\"},{\"key\":\"28add7d56b9dd29e7214eb8643d6db190f025d13\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jm8/mu4/T89k21t8epAZcLLP/style_thumbnail_2.png?Expires=1658707200&Signature=Pu4yHkHHdBRjAjUmx9-hxGowpWyLcWrYr~me3yeaV7jCFRh0tiHs05uWHYTJOAKXmT3mBQyT46fDwhQnBBULY9mhidBQwvTsf1MzwMB8~cw574eG5u~nMHbyJzR9oqOkK1ezknji0r5EIJPYd-G0kvuXTt4OJtvAo7pNEk2Y1NkhPvwX6KTvbEqO3k5xx3X9~sSjquc7F0t41zplAJC5jG1L5X2VIjlyhMaHMt3ZjhstqsBcD50zQgs6UyBeJSTyqzVffMxuf3sRJBAtQbI6OhmfpakVvP-nNpyGOI5~N~blJU3JjFiy0maK3tlmh12b~5KUIUCVe-2XB2EQiQ8ChQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Error\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.528Z\",\"updated_at\":\"2022-03-07T12:03:57.684Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~;\"},{\"key\":\"26788e861bf1ee429a671cd0d7b57687e34ce346\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2371\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aZy/KlA/VwYTkKrBktrAag6x/style_thumbnail_109.png?Expires=1658707200&Signature=J5vMsN3eMVnwuH1Jfo3C81~0cYwDmvrBY8aAeMEnxuKI-sMMmxJuHJMFgoex~bbaBr3BK315U7uB9v9SiYu0JM4axA-cBivviQNOaI7jthFO3928ZUE4L4v4VD2jMQ9yu6e6K32X5oOLVAoZwJHiUX~4bqylWdpObjoS5di8sINZH7YVpb9TL88IcuxWLtTxqv5wjcrm-QTchHV5bXhB68uK3I42~YcnpcWpGRyxkO2EbKFlMwnVJl-IeGGybNLMgOS16HOkvnzfusaZi72MCBy8-LtUOafkCIoADRIqIQkX8pPOn6lhyDVFc1HXmbPkiuvyfPe6qbhFMTBOUBW4rg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 2\",\"description\":\"Pop-overs (Dropdown menu, select menu, inline menu)\",\"created_at\":\"2022-02-25T12:33:23.082Z\",\"updated_at\":\"2022-03-07T12:03:57.679Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"$\"},{\"key\":\"24d932eeac6526a9334821a3119e6555f524c7f1\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2370\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zYG/q0H/XqUYAXz2reJxaKcU/style_thumbnail_99.png?Expires=1658707200&Signature=EL0gKzdDtIwXx0fpq5HW5zEzCLRxLMbCMrHeV3f4-8Uq8lF5FG4EV1fKheEnWekBYnXBBbMTXaGebMid9ynJMF8mx9O2nXDVneHsZ5bF4naIxErrx9emYyF1GBWK3ZUl9ZQulWATeqr-W~ALNUnRwvCAjlHgN2GAblwBen4IUHs~uszGyX8w5IZeMc~3Zjz6-4DaF2lxWXxiG22rZaaQRIpZ~tzus6R8NPKmCvtcm1l3Xu3GahpHgkX71QPoEq1e-NkO-FMcwh5WOfaRnzA~1Dh2mbYEZyqmAhRbefq-nAPddJCM32R1fO2fjaSyogGk9UrBP2QWVIP1rw6FaI5InQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 1\",\"description\":\"General surface background\",\"created_at\":\"2022-02-25T12:33:23.024Z\",\"updated_at\":\"2022-03-07T12:03:57.673Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"#\"},{\"key\":\"24c63d9a4a58b289417c6415d011041b3fa9e164\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"136:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/XxA/oCb/Q1H3yXZXxwXqxL4D/style_thumbnail_1.png?Expires=1658707200&Signature=aN5ifzOB1wsVEs592D1lE0EGQbSgrRG9uhYcYlSesdOBAkBaixxDKy8gBhZcJOjqsdypgmVIs9vN5Q~kFeG9DLGzMt-J-i2LjCcOjAEdU-KNj3LVLw~YGIWEFkkw5OQ1bl2kT4L2ZSbtP17NwtAR6j216p39I9nidO36pJgz--HClKRzrwbv9lnytB56ZLqsdVk1kczV-VrjSzUlXQFy-4vZdhmMbkiSsW4C90kdcApz3OLzIOMKDPbS0mDHnsKDxwfQTSLrFwpdGc3oDIUy9PAjuVAa~f2KFApLIv4uffutHGjzHcYHdp7wGrTz-sSsH~Uswp64KpF34o9TJ3CAqg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Foreground On Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:15:41.372Z\",\"updated_at\":\"2022-03-07T12:03:57.668Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~9\"},{\"key\":\"d426bbcc8c94c04f1f91b74507b8aaac59e024d5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"34:1412\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/G0N/BJi/JdPobijUXQpudepR/style_thumbnail_24.png?Expires=1658707200&Signature=ggaNEdO0WDB1kggYI7~ErdbojMKBZHe~dF0hxVg11Es5F8lPfs-zVorP6MTnxuuUhwDFL8Ut-oQZs3AaJuyDL~jI95RuhmgPFAnIUwtVTBuFT0R6fmU8uvd-khsxQFmwnTfNad7TIhr4Te0dhanTSqd5CqVGmWWGfNVnDvrBM-1CXk3npQMoKNPdGZWHG7gIT4rh52d6n559vSP0W98HMjhJuPeKFG0vHChPYGDnJOR44C9yLqM3O4w~3txVynQXscJAX~9xiumEFlLrD5Er7HHRO0utcDVV4VAj5AnhfOdbvJMEIvYl2lC4FkzlmDAd~1NxC-Z7Gp4DJeO-9FuE1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.594Z\",\"updated_at\":\"2022-04-07T16:01:47.294Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}{\"},{\"key\":\"ccbfe8c54900bd4238dab48733ceab4e2246d4e5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1315\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JG3/5cT/wTfYEJGXpauE9Z8T/style_thumbnail_31.png?Expires=1658707200&Signature=DyrHNCMs8ASjpnFFhA~2RIOn1JEuwm0pMaH8SML9WT3vV0ViLetOJ845MwgwBwdx~MiDXhj12IhcTocssDJ~BJhGppNMzq~jA0d1mRSRRrMtdQO4S-ov2IpnfNyTmG5FJ4papswnya9VSdl7fcIDp8mZB~ljjy1-oYEhns4TX-M6mat6yUybwlvlcAIjW-E7FmtB2XToGO3CP-COvbA6IQykUZ1pBgUX3JXphy1LxYnt3WyoeiKRcSv~8n-9rF1A5o5mtQddsHZ7w3fiK~0lCahmMkiGjYXoyd~~D7PyNwaUhibLu-~-L~RdwZLY2uHCmOQQJpuYC9U7AJeDQGbhjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Text On Primary\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.667Z\",\"updated_at\":\"2022-04-07T16:01:47.286Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}O\"},{\"key\":\"c4b4f0ae82dd56acd14102aba5cba037fe849733\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1323\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/lIo/PCt/gUza8elc7MnOOyxp/style_thumbnail_4.png?Expires=1658707200&Signature=I23HGnIu5ah4JpWDpdpZsfBCIkgpODeQH1QD13pEdhRk~SQnigW388XOuj4JugfUKmuyk6dJzw5Q70U06jMikpaxNltn9c8A2Xw2DSaVVjAXBBg8xvOYYAzfMEwq1KF1~2lfPmnAT1zOMXDr3t7g3gX1FMPJzWItWMsoi9W7VqbIwKsyehFLR8ivbQ7pQW8p0WUaPfLRkUlqmNVUy1XiHJxVAZI2tVI9kSp1sOq58poLdEFvLIVtefItv0~Yc52a-0PVNBfnkAZ~-vr0xXp1XpeW~fgCtWK1X2OYPM-z2HZpVaOjHGIcwzn5PzTB5WTBPpFGBE3oOIBKo2AiB0lvIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.674Z\",\"updated_at\":\"2022-04-07T16:01:47.280Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN}}\"},{\"key\":\"c00fd69d077ca84f084ffd398a10d6b2660cf163\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"31:1312\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hGW/1DT/5ZYN2wLpks25Wmb2/style_thumbnail_35.png?Expires=1658707200&Signature=O2yQ4miEiZj6gARdPmGBzei5hSnsBmZrMUvcJCzGc3zRjhNpHQMt0K9a6c2C1WIXouBdoYRt5SM8EQNaoIkAzseip9EyaButUMyftQuBnbFUWrtnpDd2E496BJBhzXWN6TKiZebgx0jPdPFN5NtHzez4v4RlnAbZ6PaKwaB5MeRQNTD-iVsSgImrlQMu1mlNrx7rpkMuy9gbzmuxJ8RsIxGLHKJhA~mIqKD5nvinQNzvAwt0pY1ra0HJ-WLXI6pwxpw~JtiVggyl6t~xKxuYdy-3jIm9~WtAgpJ8t4eDS2GZNqQkaBOW6ztqzzFttQG8AFAkrIeV5wxMOKMQzTTYdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.747Z\",\"updated_at\":\"2022-04-07T16:01:47.274Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eN{\"},{\"key\":\"bad789d2a0e03e2cc914d9dcb6592f469f63e139\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"30:1309\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TKu/RTq/iP5qEMENRIcDam0y/style_thumbnail_50.png?Expires=1658707200&Signature=XzdVTjSdam1WHXMCkAdrSI5ayeAxXqiN3R5-FT4C7C~i-HO7vrB5aH~bKcTIRkl85~D2-cME9I5F39NPnJTouZp08HOhOEn2JApy7w79UWWAKgOeiA4B7in5Kymlpq4ctwI-Sf-vTUg9LyqM6H98WS5a06d4hHJhwNf6R68IaxBu0lN8eRSnwOePqyYPvfH6pGOW~RGMflrt7O9pWzzFP2D5vnKKcJfx6LVEqipYf03rQ~v~m-3tWHTP8CYcBvWja9nbjfty~YqdXWvOyO9e-JkB8DGWP4QPNLNZms4lyx5y0DVgCWGXydqlah1x6LpgMCoTK1-SZ~p7lF6vBzllsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.007Z\",\"updated_at\":\"2022-04-07T16:01:47.259Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~eNf\"},{\"key\":\"b2a48612311e70026985495141ff5f9ed4802ada\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1505\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/XHL/e10/jRf2hIYn0UWJWThk/style_thumbnail_11.png?Expires=1658707200&Signature=CwewC~WsoxoRSWd0OJQS4VgHNM-m7NThFWX~NIM0S6T3O5szKbeCDCEOHlmXjqRxx5Xp27BDWSAsVtIYIH2SemCfnrcXWPWD~UNGmqnCTa2P2i5POQqsbz7DrXFV541w6ntau~RDKyezcIv0xNJxsO08pAhWHVIERkt5TT4ucoFPEiEZqb2Sz1Q31wG76jB122RItcMEOIRgF7ZS7c~CcLCCIP7VUMk4Y~cvp8NzVKy~gSwJyUcnIYEOfgW~bdvwLbekzr5syyI4ywpKMBzhi-EAmGCGv1z0o175dFCL3n3r3~aFsQpJq1L9Fa9LzGFUgG3UDcSysKRfk44qgJiZZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Multi Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.532Z\",\"updated_at\":\"2022-04-07T16:01:47.251Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e6O\"},{\"key\":\"1e00321cc9fc05901700e452183dfb6f58c6b892\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:741\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/RCb/c8Y/TFAhk5whZVprtldx/style_thumbnail_58.png?Expires=1658707200&Signature=bfH7N9VU5n8mfhDw99CYNQdZdF19QRuJJPRtcV5F87sEENmM1IImnWuluxOi1k4BDkQB249QdPxjoFRPI84xVR2dbQw0SQoot9YuwqigXxtEisXAx5yYi~Ql7Vs6xlxQWa04tkRJF0fB9OIU-MyIUo~uiG0Ai9DR5JYnLoyHCcrY2eVz7lJ4~kShNARiPYARnIcIPk-eGHqvGqfQPSW9PByuEWApc00tAMgRFTh-4DVbZLKLNFMAYsD3kXdKt2K9mU3AmSwle55ooSkJL4hj9rg9j3CBDVAhbP0CVdB7gPcQ6CmvbCxQ3Xs~64~hFH5sNv6RsKFgKfPBdDiUCzY3~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Disabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.802Z\",\"updated_at\":\"2022-03-07T12:03:57.653Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"9\"},{\"key\":\"1b02d1cb62de8733e3107dce1f7bf54893b7b4eb\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:789\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/8SJ/wDz/dCZQZ1mcrMfwEmEz/style_thumbnail_80.png?Expires=1658707200&Signature=gcy5emEQLzXO~BDhd8rbFHX038dAosgXOZno1vSxtnLf-fWQxiRFO~KJr36DEhLUAa4Bd4xV2iF2PwyL3oyhmPk6PKBeqM5IItsnw5ONmec85XrPdrbBT2iKSzNCJPfkJSVPhDOPFVcgVLyIVxoeby4E9JMyDchetg5U8gqpfNRK2zG7FwGjjLSptT617Iuu4~yweCud7rwLWDyPHhb0ubNqGgqTM3QFYNT6npCTigPiy7c6E-GDO3lvw5o-CinN~vWOA91Dcv5zpoZYXfb99RQ9EGNnGJNUXfdSpyJq0GZtwpJ72YwhNPog9NUOCSb3gH6ZdnLjr3SU5KmHJGwM5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Favorite\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.924Z\",\"updated_at\":\"2022-03-07T12:03:57.648Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"?\"},{\"key\":\"171aa354537a7df429f0a52b596cba8155cf35a8\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1431\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/igD/LPW/MhaU3eSWUJatcG16/style_thumbnail_63.png?Expires=1658707200&Signature=UJw6AJ2zKw6eMv46Ws0ybiEQb0VqfHDpP3UvIg824yBQxshzNL37KFKB9vm35ArVS5wNt9Kv8tShYAUDSlgE4oJDsTv1p0qywAyzHBPgZtGw0z~JL7Igxsr1uhwVeyoEcBF4B3LfsIbJdQ4vnq2Uv8zlbuNW6YgRQ38aeVZld6Zt6pL4huuBkpaKkKs83nyufyMjGOsO3uS7vCrPm~4b8M0XCb5WT3XBgFzHNymSr4hrVq9GdmdUexJrlOJc60E8y9f1Rn0Eu9fyfr340M~F959KTLeaoEcKi1uYFjfuBeZgwKVYi7~g2ALVKyK3WhgRhwgpbHH5QpjTfqiAYcsRkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Critical\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.827Z\",\"updated_at\":\"2022-03-07T12:03:57.636Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"M\"},{\"key\":\"0d38e93ffef3aab73a2c3eabcc8b28d600d73d30\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1525\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BFu/Z0j/PWt2LnllQq7CbcH6/style_thumbnail_51.png?Expires=1658707200&Signature=NCdx~5FrDe16ZFv0YK~mt4ihesCrL-06Tam0K8WnuRjek1UWrw6HXBb1Msonw1gmjhzzhcrzFJs5It7BnA73IguBrvDbp~VTxtg4vo-0XpNEAZnPvITwntvALDcZqvUZfMiGEyMy5KFj7I7yPeWzGfqCc7RW4ilMFtKMT-zoW8zQLRxdEjfkidlP1p~exYMgwvRThjRFk7k-AN5jHN9vSX0UZj07ejlQ3nJFXjKNp~FvzhganWv3riqu~BHOjHAVnG9NJsdUjl2aRA0xmLr8eYrT6RaufNE6ggpXCo2reeMSPdrCU1ihirVD1CKYVlgdJeS23-gd4JNtl8Z1hIru9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.767Z\",\"updated_at\":\"2022-03-07T12:03:57.606Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"c\"},{\"key\":\"e1638c602ade488d08d8c6dc5080b264bb45180c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2374\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JiC/VaE/JL9TKDpTTfS5X4gC/style_thumbnail_107.png?Expires=1658707200&Signature=R5hd5aKbdN7WBt1IUh8LcFIj8lwuUsGlUL39ahLhmvVE08AQASqw7VEpxWu8aYKZ1huu9vybm0Zny1cPm6BWB2jCdn08rWLSfLFMiXKu0AXB0E6wgPF2-scHyceGVc9hLM1V6gEtf81ZTq02QHFEXBywG7R5VB82UNOL0cee1H~O7CYzalQG2JbbqJn9HabFoDJpuVKpjDOYFYp8UR0VRyBQ1dRhJMp4EjwRFNgWA9lEM3aTgMYIj8IWkkcGMCLvAwLA3MgTB~j5ylnZR3O-uQvHaH~2F0~pimQ0mWMprp14KNUwwwAolISX~HjmAEN5QZdeWbf98oOw~AziuXMyxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Disabled\",\"description\":\"Background color for Disabled items background\",\"created_at\":\"2022-02-25T12:33:23.072Z\",\"updated_at\":\"2022-03-07T12:03:58.295Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\",\"},{\"key\":\"dd296095aecc4bdde4e6c14b3af3b509be52056e\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1484\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/alc/tbm/lW85fZ2AWhqppBLj/style_thumbnail_0.png?Expires=1658707200&Signature=bNs0NOFBBBG1ZFUIh36QHc0BwErBP0oyfwlIriWinUJGcK5XVx6QpzEwjv1AEott6NryR5bT7LQArPk8M-nSnu3IH5GeVqyzNDJLCihIUH~LBJ0IhaEFiI61YCiT0RjFK2ZApDG0Flz7Rz98a6SWsuGBvaDTGxwHNw6-pCNj2KstkbS0hxVRAAYsiwTnwEM2lejcvsxq04L99U~MOkeDDaoVq~UNAmEpuroBHAI0yt~2PFfHhTIRS8V1jToVTV085LEKHeA6UdmZzA8mWFcyClQ0oTL-o8ir3GZGEAuzR0fW9T-JYjn8blyKYuGFLXjFs8QgUkoIJno6R3u5X4SQmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.797Z\",\"updated_at\":\"2022-03-07T12:03:58.276Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"T\"},{\"key\":\"db793ef082f1fa1836a32e8f9bbe74bb9f6e433c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1520\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vNL/IdJ/5G3gIZAae4jffV4O/style_thumbnail_7.png?Expires=1658707200&Signature=S7BIPftjCQSPsaz~dkZADn9fypwWRkrnuwQp9UnTAezwdwZ5zX3xBbjvEO-ScVPbMM982mvgBnihxk~moEm4ZGcOsXlWEUgbToPUsfYQ1UtazcDmr7hUGdpIMll5Okh7VLl90xACag4QCIGcDArrh4BaN2pbly2KJCeocCcTWLw4FRjOPX-uHWSps0CkVTql6j-E4AM8HeKRWJdjt5nnly98-tSzCx8TA4M-l4NgPZB5TX8bzL-~WtG5ZKAdCwuHtt60vf8jVsRg6cD0Brws8vwjaIekvAQhMaFlYUsMyTuoEc3Vfhj42oV7RNRABK1n15~OPftpcpL2~nMNvTAnMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Announcement\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.077Z\",\"updated_at\":\"2022-03-07T12:03:58.270Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"^\"},{\"key\":\"d1577c6dd974cc1f532e416ffca256df07b3c9d0\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2396\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HG6/Dtc/ntXuBUW0IR0GADt6/style_thumbnail_4.png?Expires=1658707200&Signature=fyl6pF8TksTKgytFwSs4Go4-AsZtc8I7gYkZsJocw9PT9P~4pwEmsxPdxKOI~haaieTmIaYxBdX4tYkP8V6RaK3heBp5yL8mwo~ZBZE-etq5E0Ae8WUa4tXvsRWG~7cTgyrCNlER8V3Kyj5l4Tb6KtNFTd84NWHr9B8jmGQIe3NL1oJfUEpaZMoHYdp2IHWORfyVjR~Mn52FcY4lxKeooy9vnEytcgBWts1pHmaOuL9AcTKs87MaHyc7Q5jpgMjvAty9bkHfV3N9UKCznozeWREDesP86yAu7UjFFiX4IgV3NSN-v9AfyIMuhQ3HRa3npngQ7Ij6IyoQGi8HuOPhuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected Low Contrast\",\"description\":\"Text color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-25T12:33:22.507Z\",\"updated_at\":\"2022-03-07T12:03:58.234Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"4\"},{\"key\":\"cef991d8a5ab81f69894865025e98c55a38ca11a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:457\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0Lg/JHc/Xvjs5XjOf0KB6QYg/style_thumbnail_103.png?Expires=1658707200&Signature=ecsD3VFaT96symm9ay2l-fWfSaR1KfrFmzd4yjd5wbnpylZZNn3n3oLw5WCVkKd0y7MZ5a6Ou-Ji0LoadxJLFTGPG-WgNHWR1A-XMmXvOxCqn8r1gfQQm6AR5-DPulZ3hucZK0o9XugHBBQAqSKJc58WLLkccxXFeMm9H2kOkExSlb7rI9hx5H5cCxpAqxjduaA2rojJDHZNPLO6wE7S38J73Bi9MBKA-P85loDQK6KGd4Ps3shRyJ~IbryoD~ZA0pOQslcucjj7jPscWi762Mw1zlfAuOtsIW37S1U-chLRtfe1x0MIfZwVdigUKkchS6zGkLeHSrhUSzotFHktLA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.047Z\",\"updated_at\":\"2022-03-07T12:03:58.223Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"E\"},{\"key\":\"c551939b9ebbddc410173b4f09b2d6b0bc214962\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"20:527\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J1E/uIb/MsdfTb0rriFXVONQ/style_thumbnail_51.png?Expires=1658707200&Signature=OXn7UN03kePo-8vF3HLhWxCerLcP0fWYB5uh5snTpFxA1Nhkb9zkCjwI~DRXG7mBGof8j4eOSzusSF9Lk5HWcDoRYe9mIquPX7g5FdXjK7z7H5v7rCoWGh2rOxEfnPdXwyWStqDUoSRxA7rLH9FeYmuMcLeiQvgwgHLErnDkk36tWTcpP0v-mM~E4vFgCkOXHrdDWvPIfATYz4JBifSTTMoUoyu9missMPmc84T3XM2QOgKfQLf5v6jcuiRxfN~JIiGdhBtJ9IeknBwihElEVb2JnXQ2ut0DR68Yn3UUJXVxy7MC1E6IvAfwEMlYPN8TDag3VMTDZ-2UxYYSn~obdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.012Z\",\"updated_at\":\"2022-03-07T12:03:58.207Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"B\"},{\"key\":\"c53592be88467964579e37b727ef47a4fb6b115c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1436\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Sqk/r8w/oFkoks1wTBPq1HpZ/style_thumbnail_59.png?Expires=1658707200&Signature=X4Hm0NDl3mn5vbuzpuKlYzk-xoVPayEoPELvtYr8VGMBw-K7Hp7GdWAyB~ABu39lGuCtISNAGdY6hNDuh0Ks~Kih08MdjPEgsAPIdKWaAn1tFTqdEdR2cmU3b4U5yJw230vnYWqC8EUEBga3rrutLao0bM3F1WPhMXze4E9q8l9WWvxnDIeMpYQkEAAwuRBh3aAALzBdKmus4nJbdyIpoSjxT51sDL02MIYIoiF5nkCEzUTyfZS4yYOozY5GIdUVpFb27jdtusNjtUyUMhD2ufmSeOaqaX8aO6CGZFGCoppaRGHlMnwH6T1EK~KEqlcujDG7F2btVq1OLrPhqVtQjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.807Z\",\"updated_at\":\"2022-03-07T12:03:58.202Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"R\"},{\"key\":\"bea4623dc162779967304c555bd75109890a5f15\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"21:454\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ARi/zXP/8LCLom5HocyIjW0X/style_thumbnail_113.png?Expires=1658707200&Signature=RfY2GAS7MB2E21YmJTH7-dVcEIjb49eXtvXi5Ycv2jJ50zn1iHF7xL~tAEHyoy00Lps1RChxjs9jT89Wnd10AxQpZ4UBe2vC4FToF--Bs0yUKqmUImeuM7wf~gNBIAnOcV06Gsaq7hyyxZIWokCjTrJoqlxiiDQw6lMhevU41~C8U6-6-O6aKy3cjZRgirJIrVB3oVVkgtf~w1oRL2G41kgVrwIRpTM6uExHIp8LlJVw8C9mLr~bEQgIOGojnm2ZsZDm9cL4VQcpKVLhffR78mA10J73Pw5E6obM0mWPhZejL-E7X6sJ6Z5CGR3OJryFoqT715vCZVQUiXucefqIRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Foreground On Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.101Z\",\"updated_at\":\"2022-03-07T12:03:58.164Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"D\"},{\"key\":\"ba9758f41653205459c7b99e2e4aeb2f31755331\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1430\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/2jt/RN9/Sp8KHt1jd78ysz7a/style_thumbnail_64.png?Expires=1658707200&Signature=Zxa7A~UzDZ~HZxrLNVZTySR~n0Kxa3iFsujb6EFGwFzIEbonEW26XpzSpITrLcdFiwsq5tXfIvz7KEtde6k0wbU2petQAfDH0g1rWdA04kReXfxLwOzZxaIPew5tPTfc7LT5DCpP49dj~uC1dV~zUsvClvX5pbM56zcHL4IWeK-VeCjvVZwgw0k4wxVoiid0TwO4rXtTsFDMPTLpOqTyd7qYxZLvz10o5ucbcZ3nIv5NXmrR-j~QPHZFf6-n4JKgikRwZ2DE3B6wl3~JbGHUzN7yBR9K8IYl7-Q4Sb9mSdavrq5U0zTIMemsshu8kn-nvsFnjvFkRdaBtuDNKgo4oQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Warning\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.834Z\",\"updated_at\":\"2022-03-07T12:03:58.141Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"L\"},{\"key\":\"b5cd13e28cd4200dda7d02b8494861e466978dd5\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2384\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/jcK/qd1/PRXf5ebUjYiS6siI/style_thumbnail_23.png?Expires=1658707200&Signature=Rbg6n8v05bJg0srYKoQch4s8uCXT3g9rFUSM9HyT4Xq1VYsORFTbJoJwwNkSCJHFsR881Ii1GYMWIvJLQ2XMKBMunHY5wxg~jQnBVVeBOMjFEfI8W7JkQ7DnOnfcLuX5-cDIDYMcWgpaUgaw53MKVhGVV64keKapw1QEpxhakBS8pVCJbJNBAU5EVXRgU8Qkhk-zTm5VhKpZ3kZz7JmHDDxp6~dn~UmpK2VttbPP~vAzWRP~2GfQreGp9pTxmTIOUrW4prMeGQ4MkCyoQmbi28fZilOifAl2cgO1r~TIFgguqQiSY1thtXKgm2l9eNnIqWsv5MepiHO6W1zzrqpmtA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Disabled\",\"description\":\"Text and icon color for Disabled elements\",\"created_at\":\"2022-02-25T12:33:22.606Z\",\"updated_at\":\"2022-03-07T12:03:58.131Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"2\"},{\"key\":\"b44d68edc095dc41acaea60028bc1ef76eca58dc\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1514\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uiX/Tn5/xee425VzxlmqPIcl/style_thumbnail_72.png?Expires=1658707200&Signature=drBAfVZOXBq-w4pZkhfzcHLJe6-JK6Zq3f30a2885I0QUq5TSSzoYwjChC4x9MdK451IECbt68aAQNzVuFhBxrC14JnntlmyLF24u7GdLqM1bxoRmebda7WunpfxPDr4K3MCIAs0OUes5Fuc2kNWBOvjqG7l1iwGCyWqN7bxYimC4I~NuN8HOofea2ljGNndx04cESy64S2L8TGnuQgjQL~hMNeJgX~yJIVO2yn4fA08657vrhRWCLWj6fH0boLT7~Nr~hksfvKFe9SCHVH36lR4tx~EUL87qS0buVMgdV1q2KIgihxyiX5GSYNhB9l~LuLmhTOepjfjBYD0FNGJ5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Operational\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.881Z\",\"updated_at\":\"2022-03-07T12:03:58.125Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"X\"},{\"key\":\"b021a4e2fbe5872cabc2af3a8d0b523572483698\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1085\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cTQ/ka5/mYkfq3A3JQOTfaKR/style_thumbnail_71.png?Expires=1658707200&Signature=P6-KmwVRAeFGcIIa~-SThlWWPDuIhEUjwP~OUXB-bUGfK-ZdFMQIlZ--wmqX0Z1W5HfyLzBvg4abIRADc~I2eQroqzsuw~VibWgd1ZLr0utDLwdNdvDWWkhnbyupm3Imgkoyym9ezPCHDpfcnSGC0uA7K8LwFejVbTf9A0-3yQYF-65y5dt9HvzJDf0K9fJ29q8cIyRw2nCWAfuPBVcEOpQn9WbM3Me~cSxBdjYa7p9sIPV9nyt3jHqYPJ38Ygsw7VSgiKpLdd8XWiEXmMDhuxpCFrNiUz9iMF2HIx-DAYI6F9YGEoXMxunPbCV4jRHMHQBZmYeDBxHXHf-xtKPKkA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.875Z\",\"updated_at\":\"2022-03-07T12:03:58.110Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"F\"},{\"key\":\"ac0cce503094fc7f8764978d28c95f0580ef5f8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2380\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4Dw/WWM/G90OoQJg8fif6jjG/style_thumbnail_0.png?Expires=1658707200&Signature=bgfXWmjYeewpGywItyYiPA4lpLibDchfPBPVZP2IyG-FRapzfz7j2-HwM617cesmmNQilNSfeDyrWIzfv~lrFX4mJZa68sXFcMFaJRvkFgtLt-XRkM1HGNP9nmUbjL~Sck7nXmW4FcT~M9z4WOa8MtqX7TQ~fF4bPkg28c5IYIhCk4M0PErMLbfouii1bBNJfkPgbG~QHyRcMRjNfyzFT58RH8Wv5rzDxQs0YXbuApuxZX2W~94zpnIoPv0-bPzalWdOQfTrsIjjXfcqppUsApliTU0vejwP2u4gYOYgah0IxjQT1ihAKS7SDCurQmM5tWgBcJ55kSxwM4pCjHcNJQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary Inverted\",\"description\":\"Inverted Primary text and icon color\",\"created_at\":\"2022-02-25T12:33:23.116Z\",\"updated_at\":\"2022-03-07T12:03:58.083Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\".\"},{\"key\":\"ab4389dd8ed997e70667bf1e90f6db750385a877\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Cfg/X6z/kQgqFwGnUVnxsxEV/style_thumbnail_5.png?Expires=1658707200&Signature=AvNqJIRyWJFtq9InZ2GkCXrBP14vmA~S9XMmBzO-UbVC-KbmXglu5rQ~u3bnRY27wii9z~BxsSmcxGe-sj6igGn5FhtX9hQgA60TGtegHWLzQYddGGJ17QII3-kBF4Apruy9zJrC3TbBQl4uK9K-QV2ezim8cG8oPxUT5swbFuVOn1Ao2CxM7yUToClovrEsdLFBhAZQAxSTtr3J08Uaxm1lrv52rKqH0Ev6DtJkELsn9-lULNhmqBX4HUAfPuw2GHCC8UQcJHdpjpSp-PAZsqiZmE-Nd~0-iZlv1FPMualv3~R1x9zjOGqsQn~HnqcM371BzrveZ290-QEu1as5fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Hover\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.541Z\",\"updated_at\":\"2022-03-07T12:03:58.078Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"BO\"},{\"key\":\"a96fdb3b74e2c5ee64ca7a24a97529dcff020a01\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2373\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Icy/1xa/DKhmvmHhfJmupwUN/style_thumbnail_78.png?Expires=1658707200&Signature=JDxqDfztyTRhG4429g68FFRm98ont7VitRaCoGqSnm4PK3goQ0UjFj3~AmLrs1aQalESMYoNBhp5UpQT56azjuJSIOz4d-iBWVsce6P4AUI2gDortNhiJKjtyRvIXIwRAOakPuNBECsVPq9yUcTfyr8IO4xB7zD-TjjYMp38lXa6mCW6PCYRCoChrs1FFT2Ke7YW4eFCT3q3Iw0YDTfBeotDwF0Jrl3zVTsfbau4mDl4p3059Mp56wDiccFuorEUKfoW5Jn1kYuTcOU7S8uoadi5IlRb2oLEeBh2svemKLdCxysl8K8A0S6LoHIC1TnPtjF0DxWR6DZ5TVrAznZfaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Hover\",\"description\":\"Background color for System items on hover state\",\"created_at\":\"2022-02-25T12:33:22.913Z\",\"updated_at\":\"2022-03-07T12:03:58.047Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"&\"},{\"key\":\"a96ef43958dcea881346ef078a56169d988ba943\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0jG/eXQ/vEtmQdfd2OpgIhkA/style_thumbnail_52.png?Expires=1658707200&Signature=HSEwulsL~Qtb1VYb3m~vD9Ucw6N3m54ScRqaLKYzkgLBeayNB1C6enG0oKOjcGgxs7l1ljId7w9We49QhuJc9DH3uj17MSpSdllJOZo-PPpxEY04-iKPIJ5qNJY7g-HEhdqicQ8C6zmfjvYhf5BEwBcZXIOor2IsfoQwZpP2C6k5XnLZZvkANLJBHvWZcwQmhByEqG-xBpNjbRbzeSNFyWyyVANfw8WPEHGsr6Sk1t45SVSt13IDfRjlsC8pdf20asq8RAb4LoHoOYaBXhvU0LY~cT9hmdV5Y1UZeABZlxFfRw3WHp0pJ-eEA~8mvKIekLRDRczdyWO6FhImE4bJgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.545Z\",\"updated_at\":\"2022-03-07T12:03:58.042Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~<\"},{\"key\":\"9738804be910310373d47e2d8f7d4a721a334b5a\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"137:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/REj/Xmc/rG11qv1gmzOeIXKq/style_thumbnail_7.png?Expires=1658707200&Signature=GTGpRuWzs3la4spRvq-Q4J85Hm14nmmHPXs47knwYU6L1Ahou2635FlRwIme7V8qJROJxqZI0bxDWwwEG3FVLeOBRMqXod9PNkd8JTBnPAWu0OPRROaH-~6-zz6TBCKPM5bmtqYxoLBhUVGvjkTqvUDVbX6nYCXN~kqdBvRe33UCXhmNLLzddr3vD7rkvL2E3pf0xDodnyJaAlrEwYxjt8mwq-zLiRxmR8lSwD6TTZRqoA~OGhxySJMPC7mI5bhkAg-Ijpjhhyob67jBh9PgcZbJagKeYqfCknnym~ZyZEmnLGSqV~kABJJgQhtyDOS9SK0HFQrqmO~~9iT5GUaepw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T10:38:19.550Z\",\"updated_at\":\"2022-03-07T12:03:57.989Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~@\"},{\"key\":\"94da8df461ec560a2386b1efb90479311f97323c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"13:2379\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VqQ/xpe/JbdtgrAEEbh7ADCG/style_thumbnail_92.png?Expires=1658707200&Signature=LWY2u22ty06j1kJmA3CQOlKEfrsAatwQN2q75J4F7dtYWGk5vA1UsuXTzNHPEIqUn-T3-ZAbLgfmIYTCbwq5aVTOz9Sf8iyWoBYVJkSJtCTtcWYBqccIFN~HNwO47wAo9hZtQlK4TwM-j~LfGEuPwHIhrjWdt061HpxH5aZ8af7XlVSMq3fwTkKPvGu5a5otQh3LXREsWjJEeM0N3ig-3QlAXpuu0t89BhOxgpeJGEF6FlYWmn1OX16hpQfIiCrI5au5Qc4EwT78imoj0NeTCY0t5yw1Rk926dOYcnf8fCbM2tGYoY8WopeVk9W3fhpxdeGrS2-SmCUL2OH5A33~3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary\",\"description\":\"Primary text and icon color\",\"created_at\":\"2022-02-25T12:33:22.987Z\",\"updated_at\":\"2022-03-07T12:03:57.979Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"-\"},{\"key\":\"9064590235fcda44a9cfe972f297b2f4edf31fe9\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"17:740\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NIk/P5w/tEm5i3J9RbKRZqpg/style_thumbnail_75.png?Expires=1658707200&Signature=LF-2N40GQj8NO20H7eMG8m-NAnPuFl1wvpHzDInqP2WNHJbWLCbdfOGx6wrjbz~ywq49wWnFJKp1jCBPxaQjwQalVCM18ffT0-WLWE2X4mr7BRV80V8MQukfrQF74W-bMD-gv9kwbzcju762AXOt6buGVQ-wvfd731OUmxa2LY13r0~6UYleEuhNOCniki~NyZb4oUfMZPGSeJMqhquJtIKBkfSwOWIb3RMeY~R48bFC6XYlamyzOqo2EToVqG6NV5QfU0GI0w15nXxf5GWjSPIChKsAoZ5V5pv3pvtX2T4aDYS2mz0mGROC4TFzuCHHlswAf9tPA16or~h2z-Tf1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Strong\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.898Z\",\"updated_at\":\"2022-03-07T12:03:57.963Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"8\"},{\"key\":\"8da708dc1659d01dc2dc3d41862b5aa5b06a5d18\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1517\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JZx/n7k/wJaBnInh7Ob62Uiz/style_thumbnail_115.png?Expires=1658707200&Signature=QNxF51mDk3yUyW8yk-YEaHnl~p1MmJ71yC-d3FpsWCcSHR-iKcMfwaAZ33VTJEHXbFaBtOmgk6o8Wdtl3lZeev-6w4erJDET4VO~w1sFkzR~6Cuw-5AzomqegIlBabV-z7lH9q2OEv6qaSdlumHtSStYKXPOKNoBkdvMVMgGx7IzoC~So7aV9hmsHcPn~xrXQb-9QqiYvztdMirZckogz5~L16rFYAOnJnoh9HUCuCP5V7P8pd6Qg4flxpQxj-YuICvylm~JuUFudoPGa291yRWLMzXhNpB2o1bt-PU8LlbiNg1NrbcoXjTgw88-ZqdlTA8qO0-O4Mc89nCLTPfuww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unavailable\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.111Z\",\"updated_at\":\"2022-03-07T12:03:57.953Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"[\"},{\"key\":\"8bcfd6a224214596af4c11357b260e57bc187571\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1087\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kxo/Kvo/nz2RMI7YajCdrf6o/style_thumbnail_69.png?Expires=1658707200&Signature=AkzBl3ZFON7j9hENlR6Jh1FY~AIlMaPzuJ2jzW6R68KvF0LSThUUnveiodcf6kWR0T5rLOxKyYceZ23ZfTrcn2wVPY7GX5qZxwFtOAodSPh3OJTDp98weKq~brawnYzBKIc2c1q7LnvOnp~qUM5mtX2qRD6xYqGsU460YV7Ndd4Kus0hNWmKDFpzZ5zfHQUmgPNRX~NSd9zFtOkl~1YX4rFrJNaQ-A5QE1~s6Pqaz5gra2j4z4EZplnPYjV0w-HOlxSanR-TbaYkblv2bMyUwf6mssMSN3D6lWLSFq3IYf0FF--FeLNj58F9lb51vvMcpbHMs3WN~co8sf82QJkDaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Text On Filter\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.863Z\",\"updated_at\":\"2022-03-07T12:03:57.947Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"H\"},{\"key\":\"85f60944851eda177c740eeabe4c8921add5c221\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EFl/G6p/3S4I4DMHoSDTWoqc/style_thumbnail_76.png?Expires=1658707200&Signature=XmbWNqwd-aeprF~jqAgoQgQMwMe6kCxcO715QFuAASnnd7xRtO1zWO3fAG4Hs~J-gWb7Fbxg-8GVCkCgnib1Yy6-ieqIl~cXcQ1spa30eX2AZhPYzsmK3OTBYK5AvwefvXoNLdgReF3aQH~3RnqoC9GIQbvtzi1GhPcUHdS9kBKYpmn2EqL5CSmO2NMjBaZkLRPBguK8FMrHl3~jGbW9CU5N6ebOoXXWZiLX9nTsgdjo27KA5R6~rwT1rSksHko~7moCAJD6bwyudVuAQcuSYDGukj9b1uYhJMqm1UEsH9e5asevNVZt0gIt4Upp~PWfnlF4YMz5ivTFMIt9DWINRg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unknown\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.903Z\",\"updated_at\":\"2022-03-07T12:03:57.931Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"\\\\\"},{\"key\":\"80fe13d6142b2d4c0422980f5492657edc2dd4db\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1519\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/S7N/RJp/1FBYqcQmJoYCKEfb/style_thumbnail_6.png?Expires=1658707200&Signature=WKbTUPn8UqKTeIYOgFpWYdJ~CEq8nr969diCV59LoV~yS6bXzlYbts-M~tN1nBvhcAnRGVksmRlxj-Ye2qFkQUGRm~zdK0OXocdvtmPFZtef5PDcjR3D842~wMc-tcf05MN5qJfmUwJceB6Js~RoRTwGeILhOHyfnsxy6FoJjH6Oad0F0m0glP0SbvniZdAZhsdgbHzczlnPMXKEzH3eyzS-8Uvkk8djNofbn~hgAaTEb-maDPLHOGVB0X74eSw~-lQ9fXcDgXRmnWA1PbZFgZ57IZpEPCld5SS5~z3gLATQ8V9QbsqBxB2jKnYbJoNBvCFBrw~sJ5mOWv6rKzbB2Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Info\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:23.018Z\",\"updated_at\":\"2022-03-07T12:03:57.916Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"]\"},{\"key\":\"7f4515ddb452db28ea9605e1eee249bcd520267b\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"21:448\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/DjS/Fko/EdKUZNJzBc6NjBun/style_thumbnail_79.png?Expires=1658707200&Signature=W-59SWZDW5IMSb4fYvegzFebha3iNV-uGTijbANJTL9REcp-oeal0ZX5qeKw0jI7NmDnjqlRLxAcpFnlfVmvLTKkqV5ejIn2Vlj-FZ5rM~7P63P049hRkUKjMSAuORKm11JJIWskPJJsKdIr2nKdTPVZf~Xe9AGVd3hqMSEBYUSqi-nc~uahyd8PhVdXha6lV56uXErWabVZ5cx-trmyOPRIeNgwEk9~cl1qyKt6WLE0CRGq8Cg3WebM4Oj0LHIQtdfRfvJWqfavjCwjPz9NynY6X6d4TTSBD1DVhcTJj7rZww49mqElSHr-2HR2mqcVGbjTKFK39lbNcDJjibXkiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.918Z\",\"updated_at\":\"2022-03-07T12:03:57.911Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"C\"},{\"key\":\"7d6a927a6da62a37e7e61af4b5984da90fbadc11\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1524\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NPH/oAi/SfSnU23cBbHv18Px/style_thumbnail_0.png?Expires=1658707200&Signature=dvi8ey2s~3IwKRpEwm6qNT25zxppMvs2pk4CvEl2tfem1JTSmqafbA20TV~1E~q76nlHkJBdfMj3uOyb2j9uNRVaXAjpHfQ~ZDqigQ~4YTN3dHZaOCoIMHrUwxRkcmt2OJn7Hd4XoiDMMTC65rgf6nYPSVd95xX8PmW3vackAInT3xlnxRbbAifO4eSpfIAwJBm2p7ZR1ds9hhw00QBYbqlRXoYJpr6Q9GHk5fc5NRdtc1UOi0UIlIEu89WoxgcN4oBfYiJ1AUodGRxUGvjhuoGuCW-etDqMLCDJs6Pd8KceZ-LQrD8-J4~~g5TWlOL7wDhIyhfr8OiwKDDBTqfDvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Neutral\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.772Z\",\"updated_at\":\"2022-03-07T12:03:57.906Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"b\"},{\"key\":\"4fb63920dc8acc078ccd3f3a339d5fc2eea85b8c\",\"file_key\":\"r2A9XUUQxda5FmgXSsqPU2\",\"node_id\":\"27:1515\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1bk/R6z/sFRaqnxLs2ZYrty5/style_thumbnail_53.png?Expires=1658707200&Signature=ccYVK-hYPhbVOAySahWYBiSWH7uvi-HR-IAThJy7rjSs~65-NqPIXaruiIKnn6zO9UNnKNsiCM3EEvN-wN5x6vVmsIhiY~2zmZgzpM1uGpRld2gaofXCoYObTqKxhXw8zGTD9UkiUXrXLN4gPjQYKGF4FtoVX~b4zqCa6pLzvZje7l2ZJGri8LwneMEGLSyRQAS21VpzSzBVzo~9D-oU56aj8iP6YsvNUXxCiBMxQlenR3T9vKLktJu~OA9td0fRig~XxsiqwmoZZefyGKM65o43bU860DB6OmooCPbOUcS8U2yC6G8eJmrObrOzGGXXubtCermdw~kCXU6xzAsXDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Degraded\",\"description\":\"\",\"created_at\":\"2022-02-25T12:33:22.777Z\",\"updated_at\":\"2022-03-07T12:03:57.802Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Y\"}]},\"i18n\":null}");

/***/ }),

/***/ "./data/light-mode.json":
/*!******************************!*\
  !*** ./data/light-mode.json ***!
  \******************************/
/*! exports provided: error, status, meta, i18n, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"error\":false,\"status\":200,\"meta\":{\"styles\":[{\"key\":\"65a490a483a6edb85f8616409cf8b7512806d9cc\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"624:1727\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hlr/nia/JsJe6pRdlJtkZZZZ/style_thumbnail_0.png?Expires=1658707200&Signature=cE0yKOLzdd2gWWpx5guBOOA4D1rv-PHA1PWZvu99BGdPK2mlpPpJr~1BIkhFaR4rwwgHG9UbxmmriKATRJw6KYCvOznO9NveXSBb9FRexOUb7PbIHQF8F5BM2f7Jqrd44U5JdlLNFQKBt2jI-vUREe0vetnDnDwyRmzu5WwIFNqgW5p3ix51r3klItwML3QUEJrtM2D4djxGD8Z2sxOQ53VWINZiFjDH3mtbs9eYXGvlyCL420t7mUdH2zl2kN2oRD2wVLfGaO4cbzBPTWFJuV8ilm2PZfG6u52lXD~rplUo7dttDKxAJII4TMewpKPqDbmpe2nyCmbncD7k829gFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Severe\",\"description\":\"\",\"created_at\":\"2022-07-06T10:33:29.389Z\",\"updated_at\":\"2022-07-06T10:33:29.389Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"LO\"},{\"key\":\"d8d65adc23c1cdbe1810e6782b4acb158e2f7286\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"338:1727\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Hrb/Rij/L6dfUwiAsUrsY5PJ/style_thumbnail_0.png?Expires=1658707200&Signature=Y6m9ILAx9pjCUYgKe0npf6OOMGUWt5Qnae679Xw13266-DDkMy3whSFAQr0LFmjgNgf-ordAnkcj~R2LvrqRKfb9VIFWSlJOw6u4YNH4d3B1hKvrOZzE2NhE1qLaWNbKPOFwF6YAqaS8mBhlVmOGNIUbxAoxW5lzDbRQCacrJkaIz2UB04sSUdPTwb1ZX8qC8HjOIMfzDKelWCmnH1Cd39rjnw4ce~sWh50SEPdsLY7RX2apmIB1vB4ieWTlQTuELoTrA9RCVHZZ8janaCJeozalf6HcrZSflesxPTxHCSHuOfId4JfG8Q8b7qPJ2CVfpc0P3m6K63wMjxxi5I1LWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Severe Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-04-19T13:27:59.035Z\",\"updated_at\":\"2022-07-05T13:17:48.343Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"QO\"},{\"key\":\"22b0dd29e9c84bbc60dc712848c2424483a4b4b2\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"338:1743\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KlR/QK2/lxHBJfY8h4SbBZp9/style_thumbnail_1.png?Expires=1658707200&Signature=ONpz0VvdvrGuLi8x~2x~QVRsFRrRxg4eMkbDaW2PqQxs-SHg8sJ3DKp4DZnGbN4b5~NLv4LRrZkHtPXslkAGXwqkciiLBGPjQvfnsFUYa-30vUyRf2k9OiSoXF9KiOGbNE1-fZi-qn9DUwSOAnz5DW4CfRdW1AnCsY9NTqdb-bnC3DdM0V9~RcPr1ZAgk438HOcPE-DnAOVsKNRn9OXVSxtWG1OlauQmxydo2XsFEfK6peFAWoHNHSXftIQlIrCvXCPRlxTDEaGccZmMPECj7aaZgdUZztVcuYJ23jNxt59xfBHE~g5gjdCPH6nKo7KcOnyaXd8BYwX~N4N2HjGk5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Severe\",\"description\":\"\",\"created_at\":\"2022-04-19T13:27:59.042Z\",\"updated_at\":\"2022-07-05T13:17:48.336Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"`O\"},{\"key\":\"96f9176f943374edd9a30a89481e1829b072768a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"302:2342\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nGm/f4m/IY9UsmEniMHCpC6c/style_thumbnail_0.png?Expires=1658707200&Signature=WqR~yQDhwEUx6stkEeI2cBjp39LBDxrWkv5OmSvzeftfLmay6dfS0XFZMCCfCYtcY5KR5EWa2ZqAOYyN0qdXT98lkqGphWsuIMarlcsdnXrMuKckFev1y54LmfzAIyCOmJg6qYixiYsUT3JZcScgKa2WItEufRrCmxtsndk6MuIYSD1H2wK16CgO61pjt9NrkfhCLh63ivHUEGxROr5CBkof4EHUssf1CrgENDSrnin5s9qb4rTW1k7CsODKEKIWiqtlOfXMxy-SgLOTrA5ULQySPM0MwVgV02oyhR6sDW7SDK8qiaRCqisNJUYRySd8Pkl3ySLs9SnYeq14DDWelw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Hover\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:38.074Z\",\"updated_at\":\"2022-05-13T09:40:30.572Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f&\"},{\"key\":\"6c031816a0144a8eb07eff70f1fbadbc26bd803f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2378\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VhB/NbE/rZRV8noQwWlWuEv3/style_thumbnail_3.png?Expires=1658707200&Signature=MQqbypKQ5cgaRr85FP~UNdnxJ-U8-dYCR12qUv52XBEt4sOsd29rwbKOOOSFsUzKRrjpT~vQSgSLultDwaLQLEz4YvwtoyP1CWZpLJmilcZBzSlOu8lXPNk51IAbZ~OCbL-UNhBMjZUQO7K8dV8ySRBvH32q3tYB0tsxfXRl5oOGF5ayhEzDsVtwbR4rC16ILPqiq2N64jrZgvOoLxFE8v-TlBJQ6UmDMI2M3ZX0X6mf5RCjz~IjLk8~s5hjUEKLxW28MYBVx5WQWmw8ADiGxg8kjL1fI-YvTxBI~RD5f8B5ekfaJa1T9lpX7EEfv4OQ9jNFAAOlhGJCa3qRDd0VAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Extended\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.240Z\",\"updated_at\":\"2022-05-13T09:40:30.565Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f(\"},{\"key\":\"4ce99c65aab7bfb5fc3048f9dfdd234e6d1b5bc2\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"140:1573\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ndp/Nry/qa4JJ9yf7nPIzCG1/style_thumbnail_14.png?Expires=1658707200&Signature=ISVrtTh2qEvANSPQLnOjuc9M47Spo7ppvJ2EyDk5E9O~etOvkbvgV-UR6mStHibRQaIStVKczvriT3hvg0zZFHUFeUHMITC-PQssqcRCHh7Cb-ZpFMBLt1CxtTAuFraAFArxAa7YEacPl4AT8qKUQA275IFdZFpiIb6NRXXnmoPOv4cHlIU3o2S1FnSAWK8aw2xsvx3D03P7xhBHhhcLteHfZaBpYHPa-lbgDj9cO7DiKyQcVgW7Pr8yoU8Vnqm9RxMAEJiOaJjLHWRoKwUVUWVO7~xi~ZglX5FWgbLSsUWbTqIZDC6zRQGwpUpd6lRG0o7n-p7xF4rQ~XIRbOsrDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Selected\",\"description\":\"\",\"created_at\":\"2022-03-14T14:38:09.892Z\",\"updated_at\":\"2022-05-13T09:40:30.560Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f'\"},{\"key\":\"1d0b379a44862132f26cb88460e03ac10c05fdd8\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"45:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ATd/Jgp/EXTUFwXIYhTAYuVX/style_thumbnail_1.png?Expires=1658707200&Signature=WXj60zVMNFntwNmsUQN0hnSW~9T123XNapW4ijPGC6ZPXMTYP60RdSM6afKmcN9ypiN~JdOXXCQAMvhjvNrmcdxDJQkAefzXAA6W-Yy3DWAlBsy433tDaHKeFMmgE2vS7Mh8lLmzuFLnVZ3wu3Zof4cpFtnaYLE8i1zP6Ukh88ItfSpnCK9cqbZwwqZ-lP9qtQmiFbP1F~2mHcgqq94Xyxsk8XAdPFJxvMK4rGx7mq9hk4wI7f3gWDwppzqz9f~x4vQuSP~xXIAgYNq7vVogn51xiW~YK7bD-Y8Ub6Jv5bGO4iw8v0FFtPiIGtpeqYP46KcVf3TfISAcGJnjIFYLug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Floating\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.811Z\",\"updated_at\":\"2022-05-13T09:40:30.553Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f)\"},{\"key\":\"c51b0e9e008ae33102e12754ab38759c7986c7a7\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1849\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rUy/yCT/0bn0SEkwjK1DPsZ2/style_thumbnail_3.png?Expires=1658707200&Signature=CI6uudPXP4BAmMMTyuIwQxFbDSXsEa8Wr0LxygalAVQ6U-z3tukWI5BfNTTimlayZFKzH0UKvMuMT37Zw2uQmVTwwIiStWH2NM4CtN9JPw~0r4zvlKTnXZ4PtpAmSppVXE3xICMN6EM7h4VeoydIT3pxwv7Tju8DzGDZq6wKCk39rlkca5qVF4D2UI4rag-ZL1J1s7gRZsP3yIMN~PejksfrJY-E7iQX2djNVj8bq~s3P06teiNA0dD57KNxtDM3GX4jP-F1P8uPHseS4Xi4Me-t-wjpZI0YJ3OArv26cCaTPbeiISmwrCGSHQjaIt2cH5i76~X6RJISzSYaDWmaDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Operator\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.705Z\",\"updated_at\":\"2022-05-10T06:11:46.122Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~^r\"},{\"key\":\"7625dfef7e121a86d056e7c766bed9e00e151fee\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1845\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/E4J/md3/khR2KYI4zrzNkjOM/style_thumbnail_0.png?Expires=1658707200&Signature=RgFketJQrUfIfRcyM5Cm4YirFJa7fCLuWqi~vQHRm5jvVhuFTUNSrlAIm7EuN7aqtF2Hg1RDolm9er5fnNzML5b~mNQAfy5z-fGXHYC9GIBpnjxxJuuPmEsGKkb4GWJj4nB37cHMvJfULOK3R4j4RqOEwkx4PcGE5sXfDQKcuvQyN7KGzf9c3-6eKN48thT246EwPl-COmH4nJVOqcOEZaS7-2pAX3Vgyb8N3UD3b9eP1PeJ6Xu83v-kICoEU85ooUWx6OwQuQgSHbCr4H86l-gD9LG-LfyUpcin8PxjghNRLDrJ4pg7cMh5cIuPSrizRbQfGwVnwoIJ9lRq8Jv8zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Function\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.764Z\",\"updated_at\":\"2022-05-10T06:11:46.115Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~]\"},{\"key\":\"46a22d938a89a327cab67dd4dcbfc8f2f8fcd94d\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1848\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Xtg/GVk/UwaCkLHGJezYcfwW/style_thumbnail_1.png?Expires=1658707200&Signature=cU9IcQfjyTh4Vr9cItbZabiHLLJEP30Pq486NY6J8mlxtSNAiy6eF-Uoxls1xzvojNQLCGoO6dE5hn1P7bnzpkRQOWin~OPoeOoHOTaFjfO88JYBR6M95s6rra-B7beaTTbkOgk7vOlWBizVRN5x7blbAExFg4EkoKUZgTt9tRCqDJVpZ8GJtN1xjf73oOzLbXI4PqJSi4Hbd8Zv89NMgWofqEsHO8zYsWCdX9~-YUog6yXZuPHBn6C5KRPvlUegZ0BHPEMvkpQNgrWFwV6szFOObXexjthcDf6SN6gR9r9uWFrHmJmL7shtYhf6RfccRSRUiISd8QSP93SS~70Niw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Numeric\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.715Z\",\"updated_at\":\"2022-05-10T06:11:46.109Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~^f\"},{\"key\":\"220ab8aed1c27db5ff930b1387e671d3c25069e8\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1847\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/V7s/fIy/3BxATQwkeyzKcZvS/style_thumbnail_2.png?Expires=1658707200&Signature=V6I~CYRERzTwa34HSmmEvyWEheyQzGOsTDrZUBtoHStufGS9mhogH3oJu5kgt9KcZKwoLzkECYGbHNII~RKhJYP~-oYUnhY5BIlAxyGXAvKsUka-iFLGffNWSKvLLyyECqvUopqysyNZe49e4x8Mdbxpoj5FMPlm9unyc5VFcQ1NhXTOCB-cAqJiWiNfvdCTVSuxYRr0IF-vy93Ny~MR5pAk3LYLDxvHBhrO8tFVYKQYFXl8yWs6WoAJzkMkzIYFDsdfbaPW4lr5vZQ7MUPTAQ5467MNYqHR7LreShYwXFTSbuoADNaIow15BerTz9-yIzo4aXr6kBb941tHSKCkkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Regex\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.802Z\",\"updated_at\":\"2022-05-10T06:11:46.100Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~^O\"},{\"key\":\"1d268d03d25956ff172bb134cdf796a649563272\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2374\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hLw/s44/rVNcNEoUibYdslZk/style_thumbnail_0.png?Expires=1658707200&Signature=LQr8IAGvHT3RQjQuoSd~oUWJo~ZP98BkEsynT2-CeGM-J5BRgxc0FjY78M0tkDjqXC1U2HB3NZ5evBkj1sNJlXT0rzp91mZJ2UTUenBYWrPyrqMdvgjOp~NWBwfbn8lwLQpoKG0MJxXMYLPLOvLs6eVYNRUqpzIkEsaHgoGnv~4n97S3EzIZRK-G4hMUO0pv2k7fCgB6w-kHcLtXprm2DKwuVZaUIzvZMPoWMRJvszGGvbGzXhgZ98eyre-hHcw9yewV58Xpj6GPkKsR484pr~qMkk7rmwcYxmJzY-RTjmmOmUMvIb2Eti8pf3FsNyJi1EzvktL71nHHeozjYNbdkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Disabled\",\"description\":\"Background color for Disabled items background\",\"created_at\":\"2022-02-25T14:45:34.252Z\",\"updated_at\":\"2022-05-04T09:31:38.073Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\",\"},{\"key\":\"77c62a637e7556e37c874477d168d8e3b0e66fe4\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1752\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/lgQ/DPk/KyfHbCQcB4XBCtfk/style_thumbnail_0.png?Expires=1658707200&Signature=Uejy5MrxwSYQRyxUPEpGap-qx7OjRMol4o4tpwl58r2nLByehAQFIPwEjyWIA6dMQklYEmIco6sesJ05AF4-Aie6nbPPUYRQNcnHve0YNSQmOd~vqQhQt2Ghwk8Ic0iE24lbQaBYryi-vOyFmTSAIo9bLPGR6yEm9orI0WnbMg6MvQZFaFkCiTNTKS4St6GaD3QFIbpbrKboERTqv9eAhgQIJwdPN3Qt013XaO9qNyYGshsmr8gf9uuXXj9GydAEqMFbfkr9dxn9Twj95DZxXCXAZ4xCvUoKUODJqf0y~1i5jylGky74y0giUr2JfOlbZFq67CADlC1ervqqOcawuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.283Z\",\"updated_at\":\"2022-05-03T08:32:44.335Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_|\"},{\"key\":\"b4818463bfc379e8b6c82b665590eb49838ea4f6\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"316:1794\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/OAI/5Nx/L9tk6yU1uMKC1gru/style_thumbnail_0.png?Expires=1658707200&Signature=DM--W4n1H3p6AyH3G0uNh8FzjzxN2xC71bdVRsma6Xak7e~KgecOU7s72eNVBlJhq-7SYtUhqeU~hibUgZhbZ9KUjPch5xJ7Bw-WsbwtdSMeVvpbxG6Yin7uGDGIkgVn0rNfYtMj-FNsr-E9C~OPRdKySY2KhJZ~eIlsMYfRkts8f-7iqXP08va-Q37vsBHNJ66UTmGkdq1Lh2v-TKuo9aG4uHNdjbWVMQNT1dpJvHWCGCDV-ujE61l4X7UpAJOYUA034wnZ1ou1r1QW2wg5GyyjS1WvIkTzQleiRb9LGtUx7UsIJ25SeX~6YNji8ow028U94lxJDrn2apd3~L2Y6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:38.078Z\",\"updated_at\":\"2022-04-28T13:04:10.407Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}zO\"},{\"key\":\"455422afc0c32ec71214789472196bd014bfcc5d\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"379:1723\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Rxe/AtU/vUGSAtix8lcmh32Z/style_thumbnail_0.png?Expires=1658707200&Signature=ASpTqoGkWpMK5eooSowGIa06B6XwAG0RxiCgH2enmp1C2V5yL3XSnPqW~KcTCts4L9WxAwpj5z4s5EgVTLwyBW2nPA7N2PARWvwvmUPW27Q9t8o7fMWZCzjZJ1yUmPOho9pZ9zaD7yVGO2qVqq5VbPsmmedX0zY0OwXPaUGXFdZWI2-pvF4x0b5HhwlT~VwlzIhabuNlNUqqltkVptZSIWWrGe2tCsH~o~MdhcE9HqJoZX5FHTutnr9tV~RqaUNsIAwwAKe2BpEvV1RcfuRD3Y6Z4D-BxzsxtU6mnmA5KawDTapiSK8oTkdvijAhLc7ueXa-A9vT7Lv~0gShIK1T2Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Overlay\",\"description\":\"\",\"created_at\":\"2022-04-28T09:01:22.483Z\",\"updated_at\":\"2022-04-28T09:01:22.483Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~f6}}}}}{O\"},{\"key\":\"e495c7f5a4952de28645b0e8f9cad4ec1bfd1b1e\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1758\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HW7/0Ad/dkkB6a4rVIR7onE7/style_thumbnail_0.png?Expires=1658707200&Signature=P4QMvSoIVV9P-BnPt-H0dnvXYlaRCvdgyQvHibsXSBrtawUNYcdxtaDklzL0jmuNhlWpCXf~TxF~Qf3F3MQ6JPK3A5HoJ6pD0l2DzpCoZ~--a48Hu-VifaV7x~67DUFTvJJjgiFGU~v~ploYMGvJ-L1yyoRV6EPpQa4tviD6flswEEhfYiG4hM~Vw1DBed1NGdLEPCPwFO3NPqVPcnYd1vwykcmv8YQ3dQtF7Qfby9PF1IPHJ3t43oG0Dky3i6C7OQhLvvdLCMRevbRK8wCmY5nsjpLYPZ7JWft-unlTOvIkg0EPskDxhJ0UEBWWcdx~rkS4qXqkdTPMWqKToQ95cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Secondary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.304Z\",\"updated_at\":\"2022-04-28T08:55:45.014Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~d\"},{\"key\":\"5191a5c47fefdfaf31221586e96bcd487746bdda\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"139:1580\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/AiS/CQn/8oTENOIMi53t8Kh3/style_thumbnail_0.png?Expires=1658707200&Signature=D7qnqmJ91oTEhLQeSdfGV5uTCpLjPlDh7OFkHeCSVSu6nKmyxoThdagAI92c8w0iU2TgV3rhBIHs-GyQ9g32XDP89OujcpjFIMgou8xsvFhahMY6N~jBqzCopLGYKBU-7-cOLe0Lw9Pq1LdFATJGgb8N8ddh4RUUffxwphXJZNnQj~w6BEjsqz9lqKEa5cNo~vZafiQ3qMKG2lfbVYwIbxNSfQY5JLQW7HVDDN81f4UCrY~74b0bsZQep-r~0G0zrwy-jQA1ajNlmATDQiKoqevwJQkJMoOnSJURdMLbhhFn0g4SqzDX9OWxkAfI13UQNiViGwSgqDG2ZblEVMCLMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Text Fill\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:42.173Z\",\"updated_at\":\"2022-04-27T15:26:35.357Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f7\"},{\"key\":\"013d5c57a6bbe1827712360967b091f2a0d8d8ec\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"350:1751\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0ua/Ffo/c9UjUgpj5s03rYKO/style_thumbnail_1.png?Expires=1658707200&Signature=EkgApM1PwjCTYHr7toPbFPu~WyICji7gbzEYAxOuAxUpXTHGjuwwXUQVDdk6EYCH-GuAPW0bsye53u7TlT30rafZlGrRmGXExSqA6r3Cf2ABISFR5-lN6mdoMy9b~TMHAOVrY~gZtyInC4ATUOFFeWJIZP0yDf1efe79FdLrkJ8iZHO-EouPOTdciMZgC51TDnJAy-OkCQXOo8uc-GJcgq~aBi-SN2OKEUiohNralHim1w-3mh4fklhfLzeLaPelCAPN34iLdkJ73i3hAmpkS1pJ9OurFZ13cNBiVdLlGvttkUH8X0jKCL0HhD2lhAlMgaMqvZ8Ep1xxRr2IBZZ4aQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Text Fill Alternate\",\"description\":\"\",\"created_at\":\"2022-04-26T16:22:03.760Z\",\"updated_at\":\"2022-04-27T15:26:35.350Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f=\"},{\"key\":\"0377474c1e9f61f62d1a7ad64a828d879e8a16e3\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"373:1775\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Zux/IFm/6TwfvPNhHd1pxFQt/style_thumbnail_0.png?Expires=1658707200&Signature=aH5SqqNiNyuGxKBretqTft66~L1v1YhngiXOi-OR-JzGH7SdFHaDQqvBsmbDomXMbsKgjavGZORC6QBlrJmlsFlwlq564v3R4BbcoVhJmSGM81sKqJFCbzRWVkOD2fQUHLp~SUl4TWiWXyLO3s4qd09Q9yi6Gj4uXFak14CQc8MiTgQOkS59cymzPZruT2msF2lbvNZTUspFj5clCVpEeNHuMtamHlKy4u48VrJdEV6csv4nNjTKEaX1Y0ftV93i8X8uwd4rULHteyxeSCpgRbLebAMmtJ7Byjf6dEW~n5ZFBn-8n3RNnJbr1ULNZrTeBCe4wRaJ5zvJ12AmlIQXfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Muted\",\"description\":\"\",\"created_at\":\"2022-04-27T14:23:57.049Z\",\"updated_at\":\"2022-04-27T14:23:57.049Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"~i\"},{\"key\":\"f9a59ab2a06428596ee7a66307722e7f54db8e17\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"28:1305\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Mui/fIN/UNxW2sssLDbG0eOC/style_thumbnail_1.png?Expires=1658707200&Signature=h5AO0KwSJaKHiPYy-YbYW9t1YXaVpK6QqengU9nQWcMKAInW1nTOEG3erpVt8L6RclHVUcH-BWv-cyXLk4sCDEJgYK57pRj5CBxbUKWd-SSXr536e20b~gsHkbhzqFlf-TiH7dTV9hSyH8zrQLWfPfvqTn~NcBqWSPbzaCsB1dfVvUDjbgemyVqckSBsdH1N0~1b7vAS6xiycUZAv6AD6NTYJD1pmlPQKBFGiN9968lOE3rREluG2q0a-~8LJIKnpHGo6iAkqYisjYfTIxquh4lvZvTe4VD34Zht6ROil0StfkK11TzzlzgVBOpGxBgCBwbGPvPvy0oqgMCL7s5hlg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.844Z\",\"updated_at\":\"2022-04-27T10:29:34.647Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f5\"},{\"key\":\"a2072cca6d5525ac3f6b160ec4f640b28ee1b675\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"28:1303\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KT5/AlR/IKi3egueGV6nMGZH/style_thumbnail_3.png?Expires=1658707200&Signature=cfhUz8ktenfHwWYs8-U1~s6f9ctiCwgbxJ6-h2ABKPPamXHHOxC02enJV8ICQ~TBWDHzWSFv4XnzpnHJ-c6sl18g8Ch1M19sJ5hnrLiQourLKFcGPe0YZKhQHaLkT6IMT6MLmKPTN6kCAiT8fGHCEzo9UpqF-14hwkF8N4ACaEDPrNYckGgll2JgB~PvIt~zDx44FndaKEvI~2dRP0Wwv9VnLAyAtbQSFSGTXbhVpYq8APL2BihlMaXekLxSflcCz7Ek9MevFEINdQFkdeMJNWMHZmKwaE-vfya6P1SUtzw4LN09Y~Jy-AEWnxLSNHgOzmWSyEOOe7YqUNpwNG582g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.882Z\",\"updated_at\":\"2022-04-27T10:29:34.635Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f1\"},{\"key\":\"7a9e4fb42ac3a4fd47a2f2a2a410fd8cbd5cd032\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"28:1307\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cuP/TdA/6aBYBNyzsFoj2S0n/style_thumbnail_4.png?Expires=1658707200&Signature=X5yKr4bzVM~0o1NOTHa3y5oQPNntm~Sye9jLRtyYorcBpmscoBrJh5Y5HrZmERGuVQQ80Z1qYzQfjCuH5M0fdi2qxPMw4s5dzg4Uf0iQMaO13cbkTXwCX9BxvNQB3tGTs3jP9RLzjgRbjOvGpz2j6Oqr7XWdQ57DeFG0SQZ26gHgLsFhXLaa8439RpULUxJVP~dPpLCFpIi6jdn43vVT9yvxA389fhA-XHirarFvAaTx3ml2H9-V6qFy4VMam0pK-IFlcTbq65aRuSQ43NyKmn77mgMzegtIoEqn57KEYW-wY2pRMHbNaQeoRdqB5Bf0N00A8JCW8IMaOuZCZLBePw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.901Z\",\"updated_at\":\"2022-04-27T10:29:34.628Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6O\"},{\"key\":\"355c699fb70d5a0e744ccf9d90a0e1e6ea1eac2f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"28:1304\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nbI/hlk/NcpeAggcS5Y7jB5p/style_thumbnail_5.png?Expires=1658707200&Signature=hzURqFWVBEoEKuB0rq9ocr4vCNFOVzZdqSINwTcq23~Xiu6uWXYQSzbzanPN6z41glSFnsuxY762pZ5HRqAfqi3jHncsiODaanuiAbMX0AIF46amg1uVYFNkXM-pwoMJaSswGtC4yRemOgvoAJQbH62~c1i7o4UuCF94fhYBOMFVFpSVkYLE-Tj3vrzqOxfpMpH6pfONeDkVPBv--qSD3NV-7F5R7i3raV5wy6ORkI2XmXbbPpz2R1~5KIf6fM-ghXmv8zUwTYqBVxo6SuK1nmPoj15Pz-yIMphK6gmPaai~oGObZe6U0CltgXLc4nIIqQsptDDN8VC2dTcqf2ONpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.210Z\",\"updated_at\":\"2022-04-27T10:29:34.621Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f4\"},{\"key\":\"1cd044c4efa8b694aa5bc31fb6a092bd71039258\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"115:1409\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/k4P/27b/jJgcl1EC223Uzosu/style_thumbnail_0.png?Expires=1658707200&Signature=GFqz0MrHQfBXYvLy20khPpsGu1kM0ADAm0OUrAYJ6wDOWeOBhPmughzZ2jCXx-8xlV4MJ2TkLqyZguoWSz7nr9P~9sy4F52NV7AhmGvD9iNCtzHTSzXf7qN8n06dDJzUaZkl9PYi0E2ddn~spEGq2BxqBfx81nUK0W3i7-~TGebyxIx8VgrtR-9to~BLAsea33tmwakmb68bmfnKuX3PbpZGYxZXlrWnQtnbhmRNlNob23X9APsWMpXQvPmXO5OuTA8ghRVkEpOH7lUpLzfzmybBtSenYGhUiXL-YKWzMvCJl2WJhAijHv1SuKJM1fC9UabvUatckf5CYOTQj6iIUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Accent\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:49.918Z\",\"updated_at\":\"2022-04-27T10:29:34.613Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~9\"},{\"key\":\"9cc373dcb917719f32388409e969067546106ac7\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2375\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0bU/dvh/xZyud3n50WND2kxQ/style_thumbnail_0.png?Expires=1658707200&Signature=TclTFra605vn~gBAtD63Ji0DTLvzEltN-~fL4ux2yR-OI4i9u2t3F--xSzRyEaLjdcprYcIruAIjLD-rhMyHsQN-UOsoKYoaLzRjNI~M5yVekoAQ48pkz5odwiY6E5h40Akn1TI0vrSQA~T5yGhYHyEQH5tzdwcUKpUu1cwWll8UoIqI-1Y8Du~o1LGEyblYqGkJZotM0lW~mst4654ylJ0QS6lHMAoowAhaeH5XAyjroWmIOsRCIWAYFQghV3DLOn4H0fp~1D4bNuLvAzb-X-IFnqD-M~~DAEtfO5nlK67-7mKpulzhi8NhNSP8p9zpuyjRqddv4EZY9n1SUzs-hA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected Low Contrast\",\"description\":\"Background color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-25T14:45:33.792Z\",\"updated_at\":\"2022-04-27T09:59:29.841Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"(\"},{\"key\":\"5ef5a34eeef7b9c9f867b541e8f6d36ad20067ab\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1519\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Gww/7Ur/w3DrkfzQevEfNDEP/style_thumbnail_0.png?Expires=1658707200&Signature=SKmz26jESp9or5Mp8J9dusAq-RSzeukwEUdmeLE4UTQP6BXvZqcVtjzUefYe8bSM~7dMAq9ZfwsQtiiIs5RdCSFQT8PxZq~127r9URxp9FC9qEJDu6PVTvgHOa9EL8h~4IM1fQ29BET2AnhDwEUT7-rAQ7LB9b0AaNxU7O~URwICODQ02gJTzNr3IVKmIk9-1ae~ke77UAW2SSJGlCySnoXs1wsxwCcYafI5YzoAeWwUJdZhJfePU8YbrOFSE~1Ll-fofDcCopsK6IARJjcCNwbHNtvSrZJlq-mvAujQrzcQITAvLc1tu6fXZzioPGPJ4UOmtRu9m9HmrV4idio-mA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Info\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.199Z\",\"updated_at\":\"2022-04-27T08:37:42.975Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"]\"},{\"key\":\"dfabd9e2574dd10ce09e1478593611804f28156e\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"139:1582\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Orn/MDo/sjXstVgDnU1PXo9P/style_thumbnail_1.png?Expires=1658707200&Signature=OCPDgNObo4E-TgbgimpFN6hGO7TYV4n1R3NW6Zpe2npCoWskayPU2yQ07sfo3xxkbWT7F9P3ytQ9jPyN~xPyHIELB72-Ebxmyu9PveBSUsDHBfBfeRBuSRPQtoFlT7ipwWjG8AFL~tQx80H7TF~VFW6xF-cC35-KchAs-0674qQrtAE31sV1GAjA5ZNFadLK-6XoohHNTBLWCH-AuS6Qh275u9yGTwpcnu2IujFqdKgc0tKuztdm~-NO11qkPqyloVGKuuu~UiCpBlUkdAdU82pceRmVQBXOB2sXmFcmDErYvVkScTH9gzgP0kqkghFLDOBSOv84-BE-aY5Zt2xSLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Path Alternate\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:42.178Z\",\"updated_at\":\"2022-04-27T09:57:08.068Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~fI\"},{\"key\":\"b6f2adc00544ff6f27605478a85fe824821dfbb0\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"139:1581\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Uco/A3b/VnyqcCZAcBPLkjkP/style_thumbnail_0.png?Expires=1658707200&Signature=E22hsard4RisG5NxwEVVVezWM0~2eYaVU57AhxOTxrV-xOjb7rdSChV4p8CkMwJqGQh8a2U8Xt6-4GFcz0Oes-rCIfjXGK0GmU6A37RTU2VvzdZ6GXnLBo62wYiB1DBi7UbZ7MWTgW7~xPfrBX8kLhg76ksG~k8V8NXyQ5EPVYEr92zNI5NNYT8Hi~NNN4rNFClTBeL~ZRNd7Zlc9bljECoomqkKEq7SUXxIpiXgrEWPLubolt2Sr90r1GZz78675N4mHK83V6ohiYVjyPYstJ11pEuQGbOUWxpqXD7UP9SJ4m~vi0SRgu3O9Y2Pqm7wWsiOl7cEwjY9Zqs7P6ph3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Logo/Logo Path Main\",\"description\":\"\",\"created_at\":\"2022-03-14T14:29:42.165Z\",\"updated_at\":\"2022-04-27T09:57:08.063Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~fC\"},{\"key\":\"acbd3b7a9dbf4e501267bdb4cf0841da23532bf6\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1520\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mGx/52X/QyblEPz7B2l5BKpZ/style_thumbnail_1.png?Expires=1658707200&Signature=Ez-vV0zo7FRjlYY9df6KIAtScGSRx6Y3LGBN4wpz15zbLiJ-WQLikaQKY6H395ywJALwSoiaZXURDSnzH4VRgbkIqcUU9O1iJMA3Ed5feZehcNlEswFyDCPPutymDGs3t6x18X6WAbj66k6uIla0BBk5~S5u58B~LY2~GyN~nPsHo9Occ3HDmI74R5jhvAKwrLjYXyTAUz9PjLhiV4Zrxkphr0nbilTG3HSioaSm9eS9XnR9p1pfUzWqgV2hu2ImcQnzhfR6iCJvHpNN97bBAicezDFjrUWYDJh484KMwaHc6yd0BGs6MVj6LLy2klkewmKUK4x~a6AacKRN9AUveA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Announcement\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.258Z\",\"updated_at\":\"2022-04-27T08:37:42.984Z\",\"user\":{\"id\":\"969964766425777755\",\"handle\":\"Patricia Pascual\",\"img_url\":\"https://s3-alpha.figma.com/profile/81c1d0ee-c48e-4913-a2b7-91f3757e4e08\"},\"sort_position\":\"^\"},{\"key\":\"8d9b7fcb6436b14a1e68f1b6f40fc2df3fb27b03\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1846\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/7jI/Oh7/Pk8PD9UtGg1LaQ8h/style_thumbnail_0.png?Expires=1658707200&Signature=Rz7Bz9cFG-nC3turIKoQk3ydMjXHZjucNfhn6vIZ-Mi3R4lytBxN5mhbpkWjp0861SwGRuBdG~Pya6-6gNIO28VwjAGdVJwRtzahWFfRUtKPutUKXKy9UKk~5qWEtqeMcf8fQ~IbnPvombLsW-biDBvIuFnmyhRjtd2JxayBW1IzfEDK4~3ZqzaZn--M2LnEi-iF~oNSSnnyfksDA7-MWV9IQtqOhGVigT3Npuo~Q3Q3bjHui5lZLAlg-E3dDjLJaRAJlBB44uJNLYUVKDfdYeU9SoWNqQ35zcm21F3~Rg3qp9i6VXSa3Wr-7I4P5t4EcGlNX7eigS35i9mUN9wcag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/String\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.719Z\",\"updated_at\":\"2022-04-26T12:40:56.424Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"~^\"},{\"key\":\"1a73fb6607b145b967b9fd4fc354ac32a0f77a88\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vzj/ju9/GBpzf4SWRcLvAQ4E/style_thumbnail_16.png?Expires=1658707200&Signature=B~3T3qhQLx7sXWViKstXNq9cZWX~XDEBFZWW-uj-a2wvbc3PG7SGUO-fX2qShf-0GetyW9-WcGj7WZmUxenN80ZWhnnvB3JBLHI45Zh6VAjGTxyL66yvoAITIPJpeGukfegSYwvLQ2~iqh8eoXGfwaaZQ~EiC83ed6H2lioKMN-jkeY7Nhrrk3JLvPefVyXpVmvsyZgGXXzTYDPQD1BtBsNVklWsnjxCMo8UxFyj5kygZG4~hC7igLZEa0-uDFBPS3vkAm-JwNd~VJCkOVLEIULPNyFxP8foiTTNb9xMUKOWGyx2PZEo6~S7214GfGN816Qyd6dMn23L7fMKOVzvzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.724Z\",\"updated_at\":\"2022-04-07T16:01:38.436Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}r\"},{\"key\":\"154922c57521f72266829da3b7b6e1b84606aa29\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"34:1411\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/5Sg/uJO/FMJZ5MPpOHd7UK1J/style_thumbnail_21.png?Expires=1658707200&Signature=CTCBKQSMahU-~fiSrmXUnA1hGisL3HhyaKiOZOL40DQWUdztAg84rkBjWzW2DjhbeC5OmsTPImSUzg7s2o9UFUB4yEMAOdPGMTGjEeE3O8nplm2rZcP5PRB7EYcT43I0CVKvtFxa6Awr7zPbIWpb2ysSi6ZWMhff1Enqy8cbfMdCnc5yGfCQpzpxMnusNi2MRNdbhfYZT1EbkUdpuTeiKDkItlK5-TiIbOpm3Qv3MEH4gB5EfgljvFir7tDUg6aYbMZK34UDvPaSbYoNJUV82lWNU2MzY9~WpcQGsBMVVPcGmb3H4kixXuHcFtgYb3MnL1VC0hlkBC4BiiWWuLKCgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.858Z\",\"updated_at\":\"2022-04-07T16:01:38.431Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}{\"},{\"key\":\"0eb1826ab7c5e428cd494ecb39f23ec804db0480\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1316\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/qdg/Smf/3tHPHnmoroZYp8lH/style_thumbnail_27.png?Expires=1658707200&Signature=M1uQwTy4MJJ6XndSnAcclcOLf76WfJpK5g6fF~zB5TbajehzSfxybfewgJzf8gPSXNANofHpc9Fu29ax3itStYFStW0PFAJK42hg1g94jHSKVzAefEFtfE6zCb4TenAOSUjyIWSFHw9mA1Ul1jF-KmOe8VHdT2tIu6SG6CkVpZVdMfw~DSBbdiNz3X0Ouv9-8fpoYmiuStZDU61SI4BYKIGk2eO1j3joonx0CB2vLgUvmGUXOyX3Oung410hvoiMNpF0Bx2jN5J8Xxm8L11wCJQ1OPa3nVq2swytSCo7naCwPwwErEC2vrhI5OyBpsMt2Bcm2CMoDaHgfjt9k7IQ-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.886Z\",\"updated_at\":\"2022-04-07T16:01:38.426Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}r\"},{\"key\":\"06a97e511beab640fe67ca3faef7c3bdee2f468c\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"61:1421\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/d96/C4d/cpyWrOlq83cbR7ER/style_thumbnail_49.png?Expires=1658707200&Signature=R1KZymowccJtogJerUrLRKCWzss0HwjpqsQ4LQcuNuWRy7aPjwnhRDL35E-QYwR9rU4yQ-RnL3ScKXxaaDV2w4wWxMN2Mhfe-l5UVbs5cWp3aLIjOop~wUDWznrGqEmGEM6LHzN9lF4aTQhAt8pjwjjUTu1GbB5ePU8Z1-~aW4cGSPMdqrcUQ1Ny~rOXDJqM2SjwXxTM5kwSwEXFZt1RnKD2~LHXs4E-FcSZbnmFYPj3jnRHe~gCXoHJUwTMzTaLsFJGiqOGP2c6o~9hVT2t3JSlPbgMbtRHmO-KnoyKWyr4v8HDPXalQ9vlTu3XQuuxI6itycG2PHh9Y3kJjVaNpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Text On Tertiary\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.215Z\",\"updated_at\":\"2022-04-07T16:01:38.422Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}f\"},{\"key\":\"0628e9b9c3d661f4bf6b16100bc1246029a228e5\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6zU/fBx/CF2NoAc8NkdF7OHl/style_thumbnail_15.png?Expires=1658707200&Signature=WxfNB2e2olUFPBB8p69lXQF44oD~a2FW15al8njzXU-jR~LwrUCA~V3IdNW7mC1LAaqz47arekdXuQlnKZ~7n3ilR5LdYH-9XOCyNZaqkn87oBLNjTuNsaX0Kv650I8Y8UVYzedkuqbNRk~FT6Xaz3ZYn2A6nSz3NdwqCv~d2Gyn1J~XE83-JpXyY7LmwCcCUuZB3P01~-9Q1QFIHHHYEYRGb55EMINn1SEVv~56pbB1EKeoqwCGiI4EjIBbgNCC55xL~hoEJdVsfnxcGuMHWA5X9KLfuuyggFLvb4KLRMaufkv6COA~zdnCC~O4Gh5rvvrPR6Hb9jPYuPFUs4g8kQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.774Z\",\"updated_at\":\"2022-04-07T16:01:38.416Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}O\"},{\"key\":\"007b41645edbe7b2e4d72be6af7cdf979d2279e7\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1313\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Wpz/8Ow/j0RrDfmvayFowXiY/style_thumbnail_30.png?Expires=1658707200&Signature=e7d5jPC76ssAXMc5AI1yqvriUGWYm8Xu70sxNOBsDS0wSa2odOLy6WCndNInZ2wFEPPKSIspDPJ-NPwkKyYkY4Tu8a0dtJaYrBtnr-fA4cwrHhcLOEdoElTiTaWfJoznsk28rfAnfFe1oudDDTcVYeg8CU20IfN9PX~jIhdoZHu1TsEqANBE1dwbO~5LF604WtJVXjWkVBtxpnVCFz0mkhVj~rub-tMHz1kp88KKKHowhl02C7nN83bzfGcvfov4jheR7biT~KXuABGrFmqZFWoF~H55kRIz-SheiYSI6z9Ju~MgaplwS1rZmqA4WChPl~qKbAqQhV-zRm9My5yH3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.729Z\",\"updated_at\":\"2022-04-07T16:01:38.412Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}\"},{\"key\":\"5155d289c715350545ad5ae84c3042e71fa7e8b3\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"316:1792\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nyy/ymt/0oC3Gnth1vpGBwjX/style_thumbnail_7.png?Expires=1658707200&Signature=EoZ5yN5b9ewc3vkyFLWmVhP7v6ogT5qqzlCruM0eK1kdlxjQKJlJyQa4djpTP7cedNEc4lWuvhYGti7GTnvnbb0dOSmBi5l7HKGfjPCx4zw73IfVWytjrOvnZHNll1m023R3d5w0OJBNSHa-5CSQwnOPhciAjvZN~NMZvh0wXTEwuBbAgLodkK1xT~wI2BY5G3sx7~HrXh3gXooAsJShovEsoLUi-370L2oSyAxCdZZ2egPVcQrN0pRZhvqwmupYV4o8bygZjIsASFMOePdKf-tEfYsjdo21vEUaaPtM06H5jH6eK37QsT-dVeTu0s09WSRDTqCLK9ekl5TEO1Gw4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:38.069Z\",\"updated_at\":\"2022-04-07T16:01:38.069Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}y\"},{\"key\":\"fcced5829e35556c8b61b7df35b129cb01b890a4\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"316:1795\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/H3C/14c/MP7pFOM69AZGZ30Y/style_thumbnail_2.png?Expires=1658707200&Signature=fAw23TzppLUwfcVdKR541AoAwI0xo6H67P1-gatuWgvr40IosxQ1buRXQj0iHAr8pBX4VKu19brdGPVhJ8xUEtoJMfdOPbn6-mGnobtiXVRu0AYtBuAyO2Cv0eHBfH2lNmLE2wn9ky8WAm8DpLdTBOasfVPmVhfhDje1xAx8uRt20OzNrNEwxlCl2AKgjhTY53rJGFwhekq0EksGjbotOqbPKMJ1dFTXqpErChI~LddcmhoMiKwXostO23aIU5SmuTFEBd2VC6rTW7Wk-uDL0EcFbCSVIu5VzU0OWRz5J74Wns6y~VMc8KzBdm~Xxo9UOSMplr~RRQyTN2euXnLk8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Shadow Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:38.064Z\",\"updated_at\":\"2022-04-07T16:01:38.064Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}zf\"},{\"key\":\"8d500df18eb9d583444b79765c0dfda612b9e450\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"316:1793\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/cgi/m0j/KePFx3JUfuQmvlpF/style_thumbnail_0.png?Expires=1658707200&Signature=hGYrRQKCE35DvGip2PhtEWCN5fOmcFF6fZwvCbSnjPYAfRYzi1QMEEP6St-7F88zqcXCr9S4tKVzeft3TwchPuwyVjl-bKU2-uvF1NdZjziRHDR0QiBL7t-KYQtURrAdIIvcKxwZ80PU9q9wwA5Ic0~0ypVySyy6Z9zOsQ8J4rdykOCBjqPB1fBJZqnrbTPwIit8wwW5Ey5ZUFf860Gzf7tFT420Ngfl6Z-~gaavkwDZjC7eHxdxRsY1jdPfxM0Mu513MzPZEad5n5ybZca4Ynp13ADfIWOrn8KEbHcRiPtyDiiyvOXCCDMHWch66m~~qRV9GBDL0phm4P-kSKbPSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Text Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-04-07T16:01:38.059Z\",\"updated_at\":\"2022-04-07T16:01:38.059Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}z\"},{\"key\":\"785e84aa1a58d63a12ecd64e3ad2f5e2e0b95361\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1747\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Oxr/s7f/NF1neDGtqUCRKCvY/style_thumbnail_0.png?Expires=1658707200&Signature=G2wJ6NE1gMsCeu07T4zkWuF6xfCUYmCvoTVtweqR1g~KNQQoB~rvUFz4tFlObTKJZmEovS8GQcJ4GVV0d3tTmfsaoixxBWo1hwaB4dWhh9lj9hoajWF3mJ6ZDf-nnjNQkA84jmefTKzf4WRDh4yAT1P4WDi0~BbI-q7bEkCeRpd7Lc0bTLYBi5eESYXWn9T3UTSnHOMYRxJw4zQ57bUHJRPgeklB-jwpdQu4JlbdrIFnbjCNiLpues0oEB2TAJQXJLS-hfa~N2zhFeQqH06KLuxjqPofO28GiuiGxQDOk1NNUAeIKlsFhPH0yPJDC7MbKxqPke53KLPhuB7IhntVAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.322Z\",\"updated_at\":\"2022-04-04T14:04:25.014Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_O\"},{\"key\":\"d10a6e924e7e3d4fd6c51df7c606c4046b1b2c97\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1844\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/G1W/fp5/WKr7uvQpcOHagS6j/style_thumbnail_5.png?Expires=1658707200&Signature=WZHqj9gIFs0VzHvKffZJBAg5nllHzikq~d6o7IVbXCvMKVgxJLBJaOdoclsvorqPLMEUiyiw0Y-4rf8a9GH1oWGvoKl1RKD7bPc~2YYjZHn86pIjbxSm1rI5UJfknlfF8C00kIrN1L-X6t68r4oTx9k6isZ757s0SmnRIVSYYlBdQj2VOG3txiGQSwFXWccfVXMJGqAM6TqJO9sp6iKEzUTrsIq0vzOEwYt7qOfwfvqZvz4PISG8kHzjlerFgWZTWuLS4TOk8LILTZ6UuGhA5h6px32oQPWfI9qqltgqvJl01YAxf1zXG5OalrUHkGz6L9ZMeEZTqwuTh4awZoI7jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Keyword\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.734Z\",\"updated_at\":\"2022-04-04T13:08:43.398Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~\\\\\"},{\"key\":\"57e66bc1e680d523c05a2d462c0b6502454edc10\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1839\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/g2O/mZs/yzr0UD5qMugYpKYk/style_thumbnail_12.png?Expires=1658707200&Signature=Ol9Bjd9uO9U2uZpbcOmR7dWjmuvDMKA1Tj3QZuov0doMRQIzEG0wSw9LPSbihYOpkZNwSxqiZqrEzufCGjyzS~oeyA~jJgosXC7AlavMyHvZhegwxf1nwG1pVbt497X-YnALKfyd93nYlcyxKH~B5r-~9kgoTLvKWNU16puUJfulaYtJCv5MPJJTHMFflPjr5qIv64R27gT~fcoXnJ-MZ9T3PGMLN6Oga8bKgQNY2QiW2l3pEfRZVDW52ZpL2N~H8Q8r5N5aIgrNnp8Wk48nuF1fOOXAN26w8CTOYCRAidZlkfHGlpcH9YKIklD3KBZGshdjiUN5r9lvEL1nZ-oqTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Query-Syntax/Normal\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.744Z\",\"updated_at\":\"2022-04-04T13:08:43.377Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~Z\"},{\"key\":\"1d4820d54bfacfb0eacc5a493098d985d353324c\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1759\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4EO/JLD/NXwYIgfFaA8XOwOv/style_thumbnail_20.png?Expires=1658707200&Signature=WgWK7v63tN0j26n9G21-vGXNNTjnWYFiRwtUUYnrIIdPijUkcQHVMBVUHA~exwmBU5psajhLpeTLq~rCiGGxb56SOa8QZsgP6OU2Po6EtAxbL8VXScWODhgR~EiXb5qiJQzkatxmNOawk8j~jp-cRPcRW6xjcFUZqIjU4BzZCR9FIxvwmQNvPrTla-7rw21H9676rcEAAkCG4uPiIC0EcCg5gM8aSvS1Wi5vduybT6XaC~wqycyLDHQJJOV~62oawj~1pCEORb8tB6EUWm~IJ50NtyMQ-zf~C7c9oQPBesv5C-CMCMlMXUCJiJDza3vSZlIL1D4m6KcYymRSGmBj2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.332Z\",\"updated_at\":\"2022-04-04T13:08:43.332Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~e\"},{\"key\":\"a126ece8547f05b1addc93edb8a170b909c29551\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1760\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4y6/K5D/YvOElNj8wEBmMdXP/style_thumbnail_19.png?Expires=1658707200&Signature=Y233hjpCmwtxr-ILWcuhlewXF5WzWWAGyUHABNO6VhxxGe3grXW5~p23coaGHqy-~Sgp3hOdS4k5pWqe~0IR11pE93Fyirs9a2LSTl2slD4SINwD5GEjB~FL0qDyjtFMH0XRgg75RkUeefEDGgP~WMk9ZqdKcBLlGNAB6aSEah5DW8L1Z7~QmRhoZZP7HtBnQrAk-1RV-V9DEYpBlxEJA7EPDv1bHGB0nSm4tTNgSXuC4c9-JZKvRPTYk3YL4HiKsn28AoQpl0g4h7-h~Mhl8a7fSNHBT6GrcDREheDarE6gyUXEXDx1JDM05hfPJHKlT5DJFD4WSpsm1-HJFi~S8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Text Muted\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.327Z\",\"updated_at\":\"2022-04-04T13:08:43.327Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f\"},{\"key\":\"fd6c12d94d852a3fcdbc5f81ef4c1c15f547affe\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1751\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tX9/Nr3/SDqdd5wPSYEZK4cq/style_thumbnail_17.png?Expires=1658707200&Signature=L29qoNs-XypgHiVKbBGyzp5qDPq8pOQEPe-tDbHBs3SvDLFI5R5NUL67GkIyYtzaQL1RLmgVj3wxHq4svUl-2b4hufFacCqPoDMS2DouLWYPiTL6mNyyaIpB0NrFyQxFvvwpoCqmMHt0ycxELU4sTYNpRDfbhO~C9sC2Q1ScTM1mdDfN~9gzKMIPNd2~HBzasRj2knDIPDx3boRBGGRcnNoCylARka3Xk5Kth7TYSvwb62Zj85PtfLo2OPpJNPrFKmq1ZLO1MLA4T4ysOb3HhTnRmGNqun6lMCI54d5Y~HSgtfhYEkdNXaaSbJp8KxsyMbpujGEu6R0NzWQTIEaD8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Primary\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.317Z\",\"updated_at\":\"2022-04-04T13:08:43.317Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_{\"},{\"key\":\"64b272a2926b4a650a18575b577651e5e48f2230\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1749\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Oyq/Pyf/T9RsiS5AzKFWtu4r/style_thumbnail_16.png?Expires=1658707200&Signature=IZKTaZ3Mks~miNWXQjX8G7TOgL3JqiQZksQQIdshJxyZqhdU3o7XE5STVUou1nHOCMeEO5~TUA4ZgalOxZREz3NjFcysEbQwOsShIbwGkzIWA8~iNs53CvM615BBMe0LobpfS1MciP1b7QxzkCXMLqLvxy5txxeSjx2IJ0ziL7JZpXCPXpbIynWBw6VbW4Vblj6BsFqzHBYyzHjVL3b12xU6RGWU0kiXJP~c83whrm8tuajRuDrkMDuz-GeH5iIxESTTINm210NHsWzbo6LlBo6QLgQQGcDQXrADekLlbCzgBvUylU0gs7RTq3-cUNc21GpKm9MLGGBNrbL1c~2b0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Regular\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.313Z\",\"updated_at\":\"2022-04-04T13:08:43.313Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_r\"},{\"key\":\"1e2104e210a38274a9376481b8b559a620d7a68a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1748\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ZQx/LBC/RHeJNZFTglhdU8Vx/style_thumbnail_15.png?Expires=1658707200&Signature=PKjtxuMejw6WoaM1znMmn3aWA~ktQdtkznwk6kdOSBAo9N5HtHZimR-33e-5wr65kxH2DmsdbSEMtJZLVl62~kPixCck7KZU72SP5ApG4upixyNGnyibclrO91Qyw39FrRNOLYZKO~5IseWhytCLzkV-QMEnWKjhbqPsupZVX3HmOkLbquV6GFdIxGPbXcA5kvbLfvN6YpHxgRo1FNrCH7dM8-rp~TZm3gNbMhI2ETv3CPCKPtLyUiSOenjmeSgUtjZ7UfYeiAy2jFm~SMwvTk6na2eMIt0Sv9QfNRLkYfqxOD~wBRNZE~-oUTMCgBaU6bEj2Q6DzhbWE6G8D6t0dw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Background High Contrast\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.309Z\",\"updated_at\":\"2022-04-04T13:08:43.309Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_f\"},{\"key\":\"bde9a947fbbe79c1e7ca812fcc5742b14f9340e2\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1753\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PAw/sxp/qFxSU2XpW27OmIKV/style_thumbnail_13.png?Expires=1658707200&Signature=Irff6Oj8TwUXETpTwSSLWjGWZUJBYfL1ScqqX0EjP78lQT4ky~rZakEupi5I54iqn-hzqyeqClTTkAjvVNyUOGo4-VKjO4OTBHLk7cAMDZgqWP9sZQlHGf5cYWLoqGh794O1rnae~6p3vk3Tm2UZauodaGuVuzdB8XbIwqv-0SM3WBxjTgwNribL2OeuEwCQjHFVjyLi6tjE0pksPa5vk02mTUO4j6~JiiPKjo1iD-QNB4X-H4ipPfPAIekZ9Bv5cwAmmPZ3gL1PetXC0Tl~FamuSB6JR363mZ~GC3gcfrIbKwrtQZXcIPVRHVj34Xs06G1dpD0zjMgqid14PbmVUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Highlight\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.298Z\",\"updated_at\":\"2022-04-04T13:08:43.298Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_}\"},{\"key\":\"9b204966a122b14acf4035baf4e5abf45e95a0e5\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1750\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zNh/x0n/TkW9XreXDKq0BNMr/style_thumbnail_10.png?Expires=1658707200&Signature=fo5-8Z6FRanwo2Sx2M~5iR7WnLrtG1iih1EiFxzM~KOOzkJrLTZx~4iQZubQI6wTUt1Tfd-x6tHxLu5vDgJRQbMfBHzX8D~Q8CWzJbr31o7XjRkgsCyfamqItrowc4FcTZOiLFZdjixBt~fsw62Zs8IzXWZ4eEcsvHpr3W9DvPD6OUC1rc4NbgSbGJPDCOoUHGX5O5c3MKopi~pnySyUtGmSNq8-kK2Me6beq9liWqh1X05EKomp1VljbNu3F5l~S0bO87xBxfeFt7l7qPcGKDrtdzXL5Lu59jMgpwbVe1IOBDR1C0yHqop77XfJp2il6~lXax3PXiiqoBJptM5eFg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.293Z\",\"updated_at\":\"2022-04-04T13:08:43.293Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_x\"},{\"key\":\"2cf9d693c0713d54eb95cd77b696b218705126b5\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1756\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/CMs/Pky/wqwF6QlownLsjMoS/style_thumbnail_9.png?Expires=1658707200&Signature=IbzSEggjky8XRS7VkfeCpeT-tsWMkZJ8T~6YXBJAVBlRd2sk1QUuYue8AYJ7RU3adh8m8Df~oksksyE380QZ7zAPIUQUkjFlR22go4ziOpkbjONIAeIUcQRhnkQl2WU-dRsyf~n0go6a1Nf~5pkRIAEX-x9RJw2yXQT9BMKfQnWWS88hJjY1DEORq~24vEqItxNBaK3lgTC-lhSlxcOhNOWl2OS7jgQr59PiUK~AVxuTn6dIxvO3KNU0XXbgMIFlGV-bmoONwiGus86Cw1NG2On2WAnSmidSqa9byj4L2W~MwIjDLR5WfreuHdTO2a1F2Ri4tcHiU5Pu2GpKFjlpkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Success\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.288Z\",\"updated_at\":\"2022-04-04T13:08:43.288Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_}r\"},{\"key\":\"b9bb23469c776e1ec496fce687d3239e9b6e645e\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1754\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Bvl/Dhg/acqhz3mpwFXjNEm6/style_thumbnail_3.png?Expires=1658707200&Signature=cMZbmd3xIuYonkCT1SYKsKeIqGktSy7paFbO-UHTr7i~D8YB15l6Xfysh5Ft1-RyQGc4jDvwWOCw9VE8f3yMsVH0rYmg~IAhCOomRcIYcvkW30RcGGjApIbiZiHkalsp3nyGzuFqpLZyJlEAXNykxRp4N6I6lsshKtvmFe3wRRCl-WwpzW~jEPQVOF58CI7gPQUHuAcJqdniJmkmBHzkGJchZ3Xm6FiDey2c8PZWVZDU7S6jaJKjIw5Yd2szIZlYWfrQXv6aPkxaD1qKkPgydf8FnBwegNVuKp-Hmu8W7FOiB-hr111q~mtXsiASJfjtVoiMYm0Xdo0Za8Rdnqs-BA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Error\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.278Z\",\"updated_at\":\"2022-04-04T13:08:43.278Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_}O\"},{\"key\":\"f8a2b0cd78fbfcadf9179d9393c9bbd7e2334cdd\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1755\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/UeS/l1L/kLTkQfH8afPRI9Cy/style_thumbnail_2.png?Expires=1658707200&Signature=hfem0J70ow8TZHqAn4GID7HnQ~DFr9BYsOxJlCZNNfy5YtztccIAXPjABlEVJOJREnznTeNcA3l6Lgjzzytw5cFNcg31bdcMbHJRDDMZGVmRGa7KL2GkfCkdAwNmrhvydmUT8csEGKo~Jsl9B4tkz7fJiO4s5yJYkwChT2YkLd6WRRAJ5C4cwKxTxxziKEouGFol6yVBDmv4jVEJpICqdykmD3qreJ3KpEWC5yMbt4zRLsu8ETdbbDcU6OwhYuUxlSgZJ9HtNLOcFrzYVam1TdXGwfYrnK00OdcTj3SpVFHXhX-KIbrOEMQBYVkB8DVjA10ZA-tLNXwJ3Tb8P7Ho7Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Console/Text Warning\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.274Z\",\"updated_at\":\"2022-04-04T13:08:43.274Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~_}f\"},{\"key\":\"3563ea5517a4163c6c1de605f54717f4bef18e53\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"229:1757\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jfc/xOB/0CEsna82DSC4qQ1k/style_thumbnail_0.png?Expires=1658707200&Signature=U7cdknplhqHV9ciwhGdagX-neGFy-dI3NkEXF1nAHFLgd5MwdJv7EDih-1gw4HAxlF9OJL-6opJ8P8rGJGlXxll3w1XJOY~YZv1HzZ5lbkZ1czsbrrfxnbuWlLVhd7YLadg8CKC2yD8tawIGusewg-PlEH8eri9IvuprTDQhOu4PkVQ~cf9c8uQ3POWaD8Nfc8soovjgfN3Dy2ONv3K~btcwCNNkhbheLLVaJOvI8XP5WqougA6klfxDGAT6-lem0P6eeqDbRNQOrwHMrQa~NzM3A9zJla90OEQSLdRdtfjUZ~qaEPegNwY1Y726fwkCYf5BMUD6Ryw5KmUBEUYi6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Code/Codeblocks/Background Main\",\"description\":\"\",\"created_at\":\"2022-04-04T13:08:43.269Z\",\"updated_at\":\"2022-04-04T13:08:43.269Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~`\"},{\"key\":\"7dc698985638593b3cadfbe549d8722ff356e1cf\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0RK/1Uv/c8kHCcEtfDh3qekt/style_thumbnail_3.png?Expires=1658707200&Signature=TDzCGlboIrULYEdi1vVpR9dMlFx-3WJO81AYBUtk79y~P83MCUHY5ISnxGeFlvcxqJxwtUCBrfdVSYT9rxI5e7Zjgz6xcfWU7On8L0-0fHYVedLPUo2DcwhJgDw6W~3Jb8k48PTI~FMB17sUFKBV3SEMUX0WK5O3Bki4NVPgc7cQSaJ2lkVXuGvOI-oaaf0QjGzxGIh02II1PtsOZmHirH-K2cPfY2yBHLDgOZEYjh0Oj4OQ0w3J3JXtO1yH31cS8Z4X~9AEDCSONjTdG53QOsdItgC3SsM9iBleo~hFNUEolQanaXrIA1M1YGlV6-wWWDMhC1lfdac--Ip9pg09VQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Announcement\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.017Z\",\"updated_at\":\"2022-04-04T13:08:35.875Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"J\"},{\"key\":\"f0ed0e1f31512aa4bfb65cbb515b3b2d95c61dd0\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"56:1419\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ARi/ubJ/aS4OHU7a4gAs51bA/style_thumbnail_0.png?Expires=1658707200&Signature=eeQblWGn6ibM-9of74qEdkDobSuUFpyI1IgFGrCF9B0b1xNnzrfyCPMbwvrYqneEgxJlHITcifVIX1bvWSR-dDzFVLyKw7pVTiYH8FChiovsbCP4BbBAPNbE8hJt0608b6O7TRX-aQ~tUSFbVZPiD5zBYh5xCmZ6RMzSxhodhK0qJBLFOFDqS1n-lfnNezQGMm0C~EusdU9HT~QGVy0xITP-UrvefzA4FST-E1tGbXlPS0nDHC1FYc2ndihj5Qg4O4AFuoNuM7V9GorREWHP00QoJnQKuxg9icjEcgCBqLGD5w8WA44Lnp2VtSrX6~YWv2FbJez9XxwP-~3ElH7wow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.694Z\",\"updated_at\":\"2022-03-29T15:02:43.892Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"RO\"},{\"key\":\"93de26f648118746f8de96fa32c4789e754bfbf2\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"135:1541\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/H1l/Trr/GWBVk9cdyseYesik/style_thumbnail_0.png?Expires=1658707200&Signature=aBhqKmenGy1o5LZI6-OfA-4frA3qcVTw17bu-6Wy4fc54vCnZKjubl--opU1NmCcxck4QYlzXZ3cAObXI6dqBKeWJqGS8syIGnWQzwcJJ6V7jDX23wUz0u2Chxziv0UXgTLbXm7rcVuC047S2nySofVEX6XOiDvGh0AoDI9lEj1WcfTw4CSBlFlO0R3z6wZQ205TOTNf29xBZJiyHr5N4R~~Qdg9EisQErGMeXIlZIccgcxu40aPyClxU~Kg9NtcKJM2L2qKxQ~5Ry9sJnD7hZ~OYsNYcVnKJkTc1j3IoJoQNJJrP005uX4f6WEmU8Fd3w8X8LRd~x0LodseydlI-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Neutral Low Contrast\",\"description\":\"\",\"created_at\":\"2022-03-11T16:04:10.510Z\",\"updated_at\":\"2022-03-11T16:04:10.510Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"WO\"},{\"key\":\"a88ab4b3339bb9e54bdc09a21122a226b2bd4bc1\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1523\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/onw/lKV/Y38wFhBzHiAbFoYJ/style_thumbnail_31.png?Expires=1658707200&Signature=BnO37-DjsPaiu45edTYK9VwBpw9JJNZ7QNGOYx04JDjd4pjEXM351g0Jo5UV3W1uT7IugieulxRCk0xtz6qwq-MxRK46Slk0AOzungX3EYpTZTfnXf8S-TRT9CpUOdz2OW7W0k6ONsBlUUEglhPyWhwSvXXkx8f9Z~70RdV4ogsnAv6rsGlz-VPHoQBtqm5znlSFbUjoG06UH2iflTbYmBoSBGdLfqwdQfaxgVeeceCXCfTXRfIuYo6pzuD7H-qOEOw9NXsNya29ogExrE8VYmynwWoGaIHTx0sOGRzWNikub9aUM91dqmKzBi3qXtDrRvXvB5GXl~D0wm4doUta5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Critical\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.897Z\",\"updated_at\":\"2022-03-04T15:05:50.377Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"a\"},{\"key\":\"22d0602a1439fa7882e6db9d6fe88a60a82233fb\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"20:527\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wSb/Q1B/Jq5Yl0CRbrrBqACp/style_thumbnail_59.png?Expires=1658707200&Signature=HxFrgWQbdt1MF8XoLT7HU71i~u~57ChqVaH8LgM4JhwpANnE35Cie~bPM3t0piAjGqgon-D-hc4FYjwMzfOldqRFb-Z3njAlIaNQDpXdl848Qo7F62obMT1ts6MyJoKqfgPgFPwWBcVm7BiUhzlCg~NP2q97AyUHM~ZR4n2NbbG932D4S3eVqLJzpF2X9p0WoP4r6yo~t3zcUQ3B9rzkV4XYEwkgcmlhUMUvwLLqZtongAYYQGVea7JJD7V2-l7v6ERgqM1ME99jjlb8g2snMBc1GVZbrwCE9afhQneLh5tIjKrlg1QnjffCnw2Q7Vv9JOqp3rRdb9u~-qZpikx03g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.194Z\",\"updated_at\":\"2022-03-04T15:05:50.229Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"B\"},{\"key\":\"64751c5d925b493ca32a4dec99f8d4d39c335da3\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"115:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tEc/BmC/PTPZJuHnMmKm9Z75/style_thumbnail_66.png?Expires=1658707200&Signature=ZT0oNQZbp5eKlUNrPwv-6RPUAD1QDS7efyfHJJDJHFt6KyKALSPirf6e7QF4pFfWC8jcIgLrofa-7IwZmUbg8Z7IdfVEWzOlivoJzaKlSSYYZn-XUljb3m6oM8xXDJHIqXW1Y6j5EbHBbJEm7epYl~occD5eAhORcoOL3Kx59RVlwspTX52KZxLe5Ka8nUPttEaKVM3UlHY~fGds0Qil~tENF4k6x~-XhbANQImSb~X4B4me~qbjFT8H7Tbr5UDDWerDN8h57F1-32uc9Rc9z99dmU5H4OZS2cPsQJqvCmK73m3rnaZBPwxzL80tKIlS7LnGC1lkVg7XfTha2k2dtw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Error\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:50.059Z\",\"updated_at\":\"2022-03-04T15:05:50.059Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"~:\"},{\"key\":\"e9c2d41f8020f30bc3658809f757cdcafd64b605\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1454\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/DwW/tE7/edPxTPkZfDWGbW6m/style_thumbnail_64.png?Expires=1658707200&Signature=M8vpdx5MmHHdckpv0XW3zHNx3anyG~iyHq7t3nm~PWjOE2gYGYsPTL40T-hE4D7PZtu4Bmmr2KSDafNAk8k2lCIfJgZrl4L9XkY2m38Zc0OTEpoKXS158B7-5AJDsG9O77Vp1C~Wseqx2EiJKDX2ZbWQ4mfz3MEgT1NWKjnkzsmRvEprAJbjidvjOTI7q43cr~QKlABt6ElDlOPf76hFVVh6XmrIrlSPfelaxBZ8juQUUJusf3jdQoZK5ECm2Xf7uS8kQZhYG4pdGxoZMF~T2BbZMhxkeud5WMoQErcWPvtN2xVO4GHSFe~dB6~2Fe1PlQ0shm3sNiaadg-8a1XzBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:50.055Z\",\"updated_at\":\"2022-03-04T15:05:50.055Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"Df\"},{\"key\":\"0af166625472bc2108daad8015f44def2957f5ca\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1482\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/aiH/Fdv/3fpwp0BHBqGAdlj6/style_thumbnail_57.png?Expires=1658707200&Signature=hUWEr64vICeytfPoMlKMlOAjchUf8VSU03zz0JH7YANkJuJ-n~zJdI25RPJ-yW12emftV0QI8Qlwtd7ZguoxF4~N~H9a9K8VZ-nuV4S3AlIVUP~N9MUohrrU8G8UGBt6duzLMtfwdQkC9RxSZ4TBmMNVRUFCwi4KcDkSmumqH5Am~teF1s76MPo2U-5aGNMsw6~CiubOOfDVWxqLhuFqTqIW34t-jN1RV-G7CWl9wefpC2GuTJ~E4BCFPnInBMOdmPhMtCJ9VAOxLudHgj~O91572qsdnXn83fZ4S7xZ-JHgYF0HD7Z-SwfyO4iBcgtlLcQ0gD0rFH4ZxfPq5ySpDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:50.034Z\",\"updated_at\":\"2022-03-04T15:05:50.034Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"EO\"},{\"key\":\"e9ce47407d36721510a5b1e68ea9049b5136934a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"115:1408\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vCx/MUg/qHCFv5su1ZfOG8rY/style_thumbnail_53.png?Expires=1658707200&Signature=BdoQIcctHgt8R~qcQiVZTPXWu0pmNQcI3oj0hN6n27ZVFv~Ad7B53jEHis2Y~AoKywzf1yoPvqC5Rh-4iMnAW88gIStt0pfd1u4c9n0bEWbexg~uXp-ZbRzlmvCpHV~uaA19rpEMscF5OmDpXppC2hJU4e-es6Xh9X7x9rsJnQDYcNDfQUS-ECnIefsIszgPMpMbvPQyJtzfhotXVG2W1KmqpXsMk2GXB15zqnxThiFfLFCcHg~06BraML8hySyBzOhfugsFkSJUzg6GwEqpLVgsYhafhtDHVRZv9rpYQW~7iBQBs-OO7QFp7Q0OqgykAjavTNX-g~skIEJu0ACwqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Foreground On Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:50.023Z\",\"updated_at\":\"2022-03-04T15:05:50.023Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"~8\"},{\"key\":\"d8c114ba720612b0c7a0ea34f1fde1c12bd43b0c\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1481\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QUY/zLE/TuktSqgKz8Oadqm3/style_thumbnail_10.png?Expires=1658707200&Signature=drbF1Y9rpd3rDHIIs1I6oR258-QeBAsXKPivUZErLhY7jzjJWB61SZHb4vAvs0wc30odCbHQ4cz6InUQ9sS~1kKAzgU0p0u6TZfsUA~GVfdnaZkmyOlNxwTW-izmbAUgplipqm7FFxmh5FUHwLC1bRdL9wuhqdUoW0CkHqrVB2y5P2jKSxU-OKNv9FkbXnTwV-StUegfef39Kq5MYkFQom6rBVSBs7fymGlI9Prim4Xoxpa0b1Zyhyv8HsJHMlHvwYzRsH2eEs5tRx4NlJ5LzLOc9vd4yQFceUMbZVJ85gk0C7wn7fVRJZuZXI491YAVJCDyhnHpAJ1F2ocnycYX5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Selected Disabled\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:49.941Z\",\"updated_at\":\"2022-03-04T15:05:49.941Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"Ef\"},{\"key\":\"bda3c74fcbc261f38da164af365935af5531d61f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1452\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/NrS/6oy/QHpyw2qNEgF2pUnu/style_thumbnail_7.png?Expires=1658707200&Signature=XDt7Y9vlqkSZ801PMnmdHylNltxkQnhZd3GwJdwohELYcY5BXFb~k3KiV5gMFc2PhCrlMuKDnTNH~wJv2Gz2rp8AlFb1NfTbhPsugcHms3ShIoAEVcwNwWqPRtAyQXB~ECHWQef3d~pRNN7uAmOJ-afQJ5AIYjHiFrJkFMQxSZHKRGnjaiWPJ2SKJ1OF8tSerK9LK1UxCyjfijnGUcL2Qyi-cVHtYKcido72I4DxBaoB0-UAqsFt9kmFVNxrqye~am13yUpQ~n-Y2Wv12uzU~aWER3aUONXPKlftAeRJ2zb3FPbz0WE7379Ds9NrAX0Sn49In0qsXV25wPMUTlyZwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Hover\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:49.936Z\",\"updated_at\":\"2022-03-04T15:05:49.936Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"B7\"},{\"key\":\"a1ad385b73cf071c28eb541c398925dc296d1599\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1488\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rig/cA1/IZa9Y04bpyY5EThT/style_thumbnail_6.png?Expires=1658707200&Signature=IuNOzJc27SdcjOWG6meCq4ijcQdwqQ5RsD6OpkP9182XdEiycfGXi460WDFrr9EQTKEDCJnzabJRyuvVBOtFNExPRxzdUB-TMeSHwdnRABTe-ZFDHfOQN5sQAFTPGoL-utVQs-4suIbk8iujAGO775Q8pFy7Dfz30PDQe3I88oj8GOezryESGo0E0evK2I4RO92cVAFg~6fnjsvOJarO5mc5ksqliVk2S4vDIRqdZ-39xSa1kt6K3-vKm8lfkh0IDpQ3K3kAq9NbF1gCc4fD9AeBKjWWCUNTsas2xTuiwo7f6RmVuhb-zAPQSTnacFsFLUnFHOKo6Xy7oAGzahDy6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Error\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:49.932Z\",\"updated_at\":\"2022-03-04T15:05:49.932Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"~;\"},{\"key\":\"3d67b88fea60c340552f67c0b16d2ed9ce52e705\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"112:1408\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/f40/tEa/41IvM1BlyffaX4oo/style_thumbnail_0.png?Expires=1658707200&Signature=fuBdc3GZkUG7b09yoHvBAG6goI4T5QZVjgwd90nli1B1UTZNUC7voH99zb6VpGr~JO6wdDomTxQb3sEcAYMGbOtH204nmYFO3yHrqo~De6WxTq8ufD6E8zEhUuED5V-wNJUzwdPmVzcCqQYTgmMh4DcBx4rSdE5NTfazbwEc0BQySZYhVsvpZg5r279C3kuQ42omptasx-xZgULxULWOVSyan50nyqGri7p-x~bo58OxOVItPo7qMKWUoPLgT4euycs~lCbp6gzsS8nDDu-ZCzMjKY5IEJ90ezxKDDu35LQzAN26QZfjipDO9PgIltXz~~-w7y4X6eO59JiY3TOzqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-01T11:43:28.189Z\",\"updated_at\":\"2022-03-01T11:43:28.189Z\",\"user\":{\"id\":\"1034784208787882473\",\"handle\":\"Luis J. Montoro\",\"img_url\":\"https://s3-alpha.figma.com/profile/26e94076-3ec7-4826-a4a2-543f1be57f68\"},\"sort_position\":\"BO\"},{\"key\":\"463ac36744f2753ef62a277fc816a14d2652ac98\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"17:789\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/HJm/REm/ugpS2G1HXe9mWruQ/style_thumbnail_79.png?Expires=1658707200&Signature=D9huBi2EVZ6oFLFz48mGkm0WXx9uh7edbMVimsJJc2ArKO0R3klLCOyLr1XDGRu33mhlTIrnvU0hZVvC-c2QpDPfksr59iwEgGpns-YkG4bmqZ6JJj4asoSoIdLpib8uIf1Zn0nnCAmnX99mVeG~MWvztQXWzksg-sf8iIkK2two7aMGue3FhIWFeULt23ZFSveXM-UxQgivHb1zhashIfUtmoBdN3Rk71BztVFxonUbm1d3wWP6ngSwmtuNkaXoKarFMUA9yyg~MJs1w~FgmbkP4tmQR59rKPxIkvR80WM8ZDW7w0Gc19ArctwL0BE8O0Nw3deAGVcHI60QsyqqYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Favorite\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.093Z\",\"updated_at\":\"2022-02-28T13:59:37.646Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"?\"},{\"key\":\"3d9825e2af663ad763f0bd14af0f2280a81022ff\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"17:759\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Fv1/13h/koj8dBzRlqKgGxx9/style_thumbnail_100.png?Expires=1658707200&Signature=VR66qft~izD0gN7OPO56IMNdkOTafzSdtLOuy~8ZfhdzGOkW-meFv-Cc5lKn5IvnBMXMn-Nzu9Iuxeq2PADhl1epd4Gnbk4iBf505OniMp46w3K89JAZiOLskopcWsWRjfxKHkRTaYH-Iy6bO1mVKV9GQyjYzRZVLHVp2OY5kqvTW-LfxI8HT1hnPQELA3CPdYsyv042LW3CEgPEBRbQyH-5VTZYS8U5SXYE1Kjfkul2YTqhvoz1Bc5qWgB0EAPUquTCw6OEwqzSGil5Vo5EdJLRUTn0Vv-etFGjlMgJpVzI7Kq9Qdj4O0Su~OGKAj1ZIObE0IPo31YrbnfJItq3lg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Link\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.220Z\",\"updated_at\":\"2022-02-28T13:59:37.639Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\">\"},{\"key\":\"3d7c714e48d65014d2e0799c6caf0dba81370179\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2383\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QJ5/Ttb/cuGYTQ9gjE1bIGTx/style_thumbnail_85.png?Expires=1658707200&Signature=KExCMZdfnGsYrXms0DOU5UcuRmq0sObhuOL9LmNhVonZ2i-TQOWOzMmjS~0XPorlNackqQs8ILqBgverYRFnUf0xHQPPoA6NOA1V9DZeLn3wbFCXhvUs3j2-joxESDgVtwOSagiD-hXisz4e3-zEqnYXL5FIspw1Zq5w7Lnz39FL6ocXWBM0GVvEXd1IZDXj8RD~5nGdnqo8ETE2LGQFlXTQtJRHb8mdZiN6ujk6DumV6yM80xD3~C7AUJRkGI1Brr-7r9VfK9xFmJTpeR5BlGcyKk2eB-2SNXZrLmdOjNDETtsR1-KhxWid1AM-OHWDhbZ-czUGw-qRCt8vwpzGrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Muted\",\"description\":\"Muted text and icon color\",\"created_at\":\"2022-02-25T14:45:34.125Z\",\"updated_at\":\"2022-02-28T13:59:37.632Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"1\"},{\"key\":\"3bea6bd887d8046722e43176e6f574ad07e92eee\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1514\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uav/f1M/qBtoYSHh7r5zjNUw/style_thumbnail_71.png?Expires=1658707200&Signature=J6TZOQIvXTJb5SJ63OJRxR7OVf9Jxp7YfYSFuN044lnHJPoa8efhEzbVTSBnFMlH5ZoYvf4jWY9KDieDZeBggrLwOQUh-J6ee5g0shrWu0zMB6dcUftLU7LYK7UQV~yptcPrjmiRr7edVCVT-JKr9xq1LzNeD1W77ZgBnkdMWxiUFum1PmNAlmim~PeiPQUiBs6D3vLDPApInYpmIw9Y6oKht3D3Hn6iIb-rsV5IZIYtQ1YKkJUsSrsTgyyEBm9SdU7rKdB9M9EbV2vurRDVW3mXmW30Luo7kNNnTUqYxukXqu66Zm-JaDfSpu45iIcBQ3ex4qsNsIyEU9WuxBkE5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Operational\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.051Z\",\"updated_at\":\"2022-02-28T13:59:37.620Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"X\"},{\"key\":\"366bfa820880972ff53ca815a03d6423de225b55\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2372\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/J0B/ERU/tjTaliiJMP0UIL6t/style_thumbnail_92.png?Expires=1658707200&Signature=BSk4jbDMXd68UwM-8YLz4vzJ2EjWVoZLQXAbqZ0X7GwugbFtkueiXfZ2iD7F6SfCMQ2TRvS9wZojDSXNKXlS1YKy4-y5qrVcFIOZqHXZCROoW-X4F0GJr2J7wEc~O4UI3TzGZUtiDD9-T9nkWl~hMIvbB9mWdDrE~B81wKVZ6lh2bknYX7Tswf2EgB~ODzt2rHKcF7mZRIcXsbWLFIIorhRdENXNHMMSQg8KbbjImiD81Sf9yQwQtJkQ7ObU8mht8FizFaAnjC9Zi2nh-XDRpXpHd3ddj4MCf9W9HM0Xk1qcU-7M7JgpgRXhxAi4p4SfACIpf2BVO1GBmTPGWJg5oQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Floating\",\"description\":\"Feedback indicators bg: toast, callout\",\"created_at\":\"2022-02-25T14:45:34.177Z\",\"updated_at\":\"2022-02-28T13:59:37.608Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"%\"},{\"key\":\"31710f2e47bf07f7218188f05214c6d05e500a7e\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1486\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/X8j/Jx6/P2SlgvtGZCVYHg5w/style_thumbnail_91.png?Expires=1658707200&Signature=IBoZokyikO-78wIpAFTpJ3xMDR7fH4CF6KMVdcfETMsGd44k94KKxXZZwjnnnOEYw03-MRSx~-aok2QfcwO7n3ECtjlJf1lmSsAZ2u0kiKsXcBeyBtle3T4eRSQCS29WkS37l54DQD29HqIWkZ7IN1hytV7Klu5OZ9CFWizI9XQEUFzE~WsadoRh52qj1mt3VrGlb7CPyYdR4nOheRZj35RovCMlb45Z4tk8bAhPN7xY0jRmIUKO48xPGMzoe9beLq6Jur3AgBiZxvrYUtFpbPngLE2-Nm94iDdnW1xjx9NuXfye0a~fEn0UcsQiZ4ZzSSDYnddc3hEbN3Hxjwi11A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.173Z\",\"updated_at\":\"2022-02-28T13:59:37.590Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"V\"},{\"key\":\"2af066b7c10d2700b2ca84f4c67810a5a7ddbe35\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1436\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/SWq/Sic/ozuLH3ypyxnjJCEr/style_thumbnail_58.png?Expires=1658707200&Signature=HNkEyBocd5MfBin3uD-htFN8NOOg0VpCZpqcA996PmHSjlJiniPVlbEBFizOKmSu~VUwWfHMlEq7XEGJuJb2eyUnkbSP3TfU53foEQ73G4SNAQPFT-bPvfFxO8UiH1kxyQkbxFsmc9CccuSSMY-yy1DtU6qceNwHtmXMDBQYr1BNz5bwC7eWbGptltACsN5Qu36oC0S-eSPFT9r-I43dAyv5jdxc7RfCKPlYV6Crt8qV0QODjOHAB2i0SqG4I~~e9yEeoIilIdbeJa3oZ5xmSPJGhZXPNTLpWHJRGleWLUb2-VdM-qq021HQoyhLzD6eNGd3j4JLldDMo9syjQsNKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.989Z\",\"updated_at\":\"2022-02-28T13:59:37.577Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"R\"},{\"key\":\"24ce0abdb3409844d5fddbc910369e58288b61dd\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1086\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/PjI/bzP/hk6NWK5c0YuAur5w/style_thumbnail_27.png?Expires=1658707200&Signature=h2bAQh19skrqOMYXXWdSNra2edcz4U3UPKOlhDj2UZNbR-sH7JY8DWvQCZkNnS0aaV-21t62bNoQ2walFddbXTd3FZwpU7KxKY9~hE2EqKxDEbxe4W6~Gtx6qLnY4v-0RlSKjYMsiH3F4owznbOkYkictG2IfPddMYCAEtXIZZ5ut59PxHTk2Bmoyp9i0NM5g8EZ8LeogwXxgxdV9jtIm4Mli1GFUgkxC2Pv-ql9yhKC14N0HKEufINtl1DDJrLLDE1MqzuXpsxlWT6DGWTrWfLAhuYp9n-vc9gZSOsPZKM0xBO6xfnhdOZbPAE2oJJ5gcaFed6GenWyzRHlmtsNDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.825Z\",\"updated_at\":\"2022-02-28T13:59:37.571Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"G\"},{\"key\":\"20f795acb1a6aa4af9d99711c7637f2824a61c45\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1485\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/tXv/mZ8/v48WlzfxDYyaGdi1/style_thumbnail_82.png?Expires=1658707200&Signature=TPOkZVcMI8WeuwjcWZgJ9N5-nOZdWnGy-Iy~3iJP--sUyIHHdT9u50e4jUHxHuhzCX7KwqyUGTK4CjSFGiyEpBLCXN5YKpGO2g-fUMw7niLcH3lrpl60D6Wa8gaS7MB2d8QqKRcgItp9z~8O95eUjegcHFuZ8XMJ2lVFh-w-vDDi3s7AsDFkKcwJYYB0prKJIVOquZzx55m3q3UyiXOx-DOKtAKaqXLmneruTdWDh1sblCaWhBsTGyf75b--tSSOuaPW02YYyuEAGF9yN2imi2OWXkWF2cCeQ6aBH11MsfoIHL2bhO50bnLmCQkgWobMNlZKgdKD2s1hHE2yx08NpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.110Z\",\"updated_at\":\"2022-02-28T13:59:37.553Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"U\"},{\"key\":\"1b34b1497234d75bde517f06186855a94f151e4a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2384\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hLB/Usp/fY9eN0pDtp7fVpWq/style_thumbnail_29.png?Expires=1658707200&Signature=ZsqD9fPoT2hXI81WusM0h9fW-X2N~BEL5uI84kVTWf7Afi7bptJ7BBW3wySeu45mUpg-IJ3rdjTGnFPWaRrq9d8AyKRvUI5Ft6oyS-z1x8Nc-PF1FK7D7dWE-SYBpJiV8FL7lN~OU52BGzeqPUNyXqBRkZQ-B2y5w27tpWkzpPkl7Ad2dIS5nbbGC5fD~xGaIzV6ur4ADBo8mL0wWfNcurhtwajszasn9g8NzBSTOVZ8hTI3inuCv6pJiSyby3mVJAb0GAqoUd3jXwX3PEI6cs0kLLKnm5hABk8Fqaz5LSNMIwYySkmCdsY~g5hOjnvTbbObH23kXbPPfpyG4tQWEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Disabled\",\"description\":\"Text and icon color for Disabled elements\",\"created_at\":\"2022-02-25T14:45:33.834Z\",\"updated_at\":\"2022-02-28T13:59:37.517Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"2\"},{\"key\":\"12b97ec662a5c30cbf92d3f90449d4cdabf47d7f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1087\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Jvn/R5x/IYIx6o5coa60upYs/style_thumbnail_68.png?Expires=1658707200&Signature=RK3JwQtQcR7oEkaEg4AqnTaTqPsyPxU6S2tHBamzKZjzjhPujvcpwwH9~bBh0uEAvVoraQOuqLl8kyfmLeuiPlZhbtLBD2qqDuRBvPO5nNIboRU7N-BF~nZT69fJcFdLNxVHb-1F4UZcBAxUBseSLzgC434UrRlDH-vmTagkAPBd~lQUrt4RZid0qCceiL8XLEZgrQcRzjbA-y6XR1efYKUbwNErEy54x4G~xs7Ld-9-ZvWcBIcuA9I5bAYzcFS9xEVlSs7KUCt7yIoanzhBdWrcnVrKjqJRw4QdF2vSs5CcLrhgDCA1eEV8TxqFrrKB7FUE73I076MUo5wnKBTX2Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Text On Filter\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.035Z\",\"updated_at\":\"2022-02-28T13:59:37.498Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"H\"},{\"key\":\"0728cb933b9a60d401644ef8f3d8bd5eb9a3d124\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2379\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ekp/Bfm/3fPzAIlrNTyrCK6I/style_thumbnail_90.png?Expires=1658707200&Signature=R7Cvva8pX2wmvJUltaZRvOHTebjDm6nnobYEJsXfniUF6VfBq1o0YvckP7b1dm40pJ7tsQwV0pYwmdyWIM9tPoRgDsLwYVf2vYAzB6vcOPmk~K9tNg1~~FRUayGdltEDoxdPQ7WUE8Wc0SJX372YopN4K5u8w2dv0VztuMqqIZk1HaNd9KbpKtrWEYBv5ZGN2FyM0l48eWpsIxL9wRbkrELHEcOz23MDYjk3Td4UlMa4k6siTjfOSPN4Cy9Q7H~OsMI1W~eB~N4RKyG5gd19NmkqstX5MQZY8RFE-3bQVkhZM53NTtNvse64n6ozbluE6b2GlWz6pM5FTxtsSLU2~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary\",\"description\":\"Primary text and icon color\",\"created_at\":\"2022-02-25T14:45:34.167Z\",\"updated_at\":\"2022-02-28T13:59:37.486Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"-\"},{\"key\":\"042e24eb81e667f3cc88814ccff64823e0603874\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1518\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Z37/DX6/Fl5Q2k0NpeeJCaE6/style_thumbnail_75.png?Expires=1658707200&Signature=D2X88bBfeOj57mvAcruL3eaHdlRftwARwi7YWgsb6bhdboMu~Rypwxe7S0htvGhDzZSWxqxvl~KUrbffrGEg2WWhc6NydjHhu59N~IHnRds6mjTyXoLrftz5djkLdu2X4AsPH7Z8lP2VwrBaXhS9lxJdb99nGkL7rO7V6F67gO-d9wvDlp1SD8hTM3uFbuJogx9Gd8aUy~XOCYQBPZqw16d6EncUofmRyS9KLVi9~0VqTjmhyq7hfk8bvj1IEScRTcZs8TFahQ8JBSa6tXTNUTq3u7vdm9uGRJ9Jp8G0jQVmNKvl2ey6esmQQ7ZSxMiUh5HcO4kU24O9w6Xc~NHVow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unknown\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.072Z\",\"updated_at\":\"2022-02-28T13:59:37.467Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"\\\\\"},{\"key\":\"02fb7671adcf8451ec4b892ef5c3da1175eea4fc\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2376\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1jS/FIP/orLGdFUsDmmbDWkb/style_thumbnail_103.png?Expires=1658707200&Signature=eCzEdZfhI6QWC5nf4ARLAv678c8qMCOF8us2ZsBNkLqQr9hNFlxr6o-VJadDeq2m-j5mWluMLc7-YI7LweYB7A6b98Zh~5z4k~-dt4UUHJd50XUbkKlTOWwN7pGxc4bjRw14HG~DqzEKMrJaPV9A1pPmsI4O3rXLqHHmeyidlpFcBhje7afipKRn1mMamwcSBq-0sevVaDItTlNAn9qz13xv-GliFh8tB82kxKQ6ilVLKKBU~tmOJH~fnrEXUvm1cnhtoBXt~OQzEgZdXs~k0SGkrl8tAqjM0TLeLRayV6OeoUdiB8uK552JI3zAT0RWbcIISF4xO6~~iNUBjk7L~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Selected High Contrast\",\"description\":\"Background color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-25T14:45:34.235Z\",\"updated_at\":\"2022-02-28T13:59:37.460Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\")\"},{\"key\":\"ee5f7bdfe035208592d7dfb7eef765187c0b3ab1\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1IN/ET3/w8fj7KIzBf8qLKGv/style_thumbnail_51.png?Expires=1658707200&Signature=U~7ApxSag8kp9gpDXGovFfffFcF5ByPATpPTrnGSSGGYQ45qgqvQBhBUPP0PCGDiZ4BAxByiVwYPUKv7CWDcYTBbUpjVvFk4rEC2qbpCULxLirOUBf2xbKc3wmLwTsskh1NEGp01vnvrxqUaDZEvIUYhpQO-xBy3nWAz8DRxtcG-OsVDuX64iV4oArpvWFWhVKz4rOFS74incCcmY1w0EKSB3ewOZiK9OnMzuVyAm73cFa-ZYKnH-fJ8iMVxwkgNAnR0GBc2GvlhIPl9fSGmrf6SZEbGGcb7BzIz~~sAF~4bXFLMU-oCJfZs3Pc4yf-UT2Y9FWtpDhRNof5-kVhk1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Text On Plain\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.224Z\",\"updated_at\":\"2022-04-07T16:01:38.701Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}f\"},{\"key\":\"eda66544d9271ff5a8cbc5bc59cd6812f70bcbdc\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1315\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/K0c/6vX/4f5Sj8z0xZ0fPvIk/style_thumbnail_28.png?Expires=1658707200&Signature=UAWFK6BW31e4M1GgntgMTGKez2nklpgHIKlXlXrUELOnNjCrknRar1XK-CMdesSSkgik2whk4fXYQvC8SybZwBvP4GfVTMm3YdMWgRpg0-K8ba0CZVWi1GI3zy~~5fZzxQUnr8UzyD7GU-l-ApTu-ZGHMXfrzVDlvgAEPzB96iTQjUlp6hTnKY4iiGhpTjxq9PzxInAeZoBb0EKoY2aqQM7vNmHlb-caW-LFUl7ozKhLmT9fZnVDeltlnrjrFX3UhOfz7AVGJsJh~dLoSNqGh5ZIyF693h7LomXQJqCoecYL~PBpL1l-MTdWi0QbSy4~jh19-8lqeAlc-ID59xetSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Text On Primary\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.872Z\",\"updated_at\":\"2022-04-07T16:01:38.695Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}f\"},{\"key\":\"ec027d791e9eb840b1f623af04ce4877965fce21\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2377\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BWa/a8e/mMkaAEogAaa1zOTu/style_thumbnail_53.png?Expires=1658707200&Signature=AQQesKLT18R85wZLxmUFTZkKMCknLT69WbH4F3qOaukcu8LXnzLMoKB98YTJiIO6Jb2lIS1s~ZxeFhj7JWXZJWrj0OycBr91Y5TiEaNJPcGSliMGjad4tnX73ltG0x6iRCefo85zR7fjGFVpqZ0r9prM-uhhRGzNyt4cmwIRTHKvZtrWsLPyoY~ikoc~y9V0eLubGhb3dYW27TUDxCegopt~BlpFC66dGItel-XJNYEm0iYh4AgxViWNd4P-nEF8~x6CCyHCDtu~JFubesrYcb7KQtzoOUSEbx9XWrCjTa5aSiztqe6Qa5roZyjpOEwatbmuVOKCSRJ1IcInoD8LZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Background Nav Main\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.245Z\",\"updated_at\":\"2022-04-07T16:01:38.688Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f%\"},{\"key\":\"e3217c3ed9382bd68c788e98695eb1ac88b50573\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"30:1310\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6fr/Qwj/StknVLhYX9oCO0fp/style_thumbnail_45.png?Expires=1658707200&Signature=dVgmvBzdP9T0AJ64JMsEWfbjs-OIAN3C5gQCftfl8cDOps-iGt~ovpEO2obU~EN0WKFl3Yb0L7J5Rc37QQxhi4TpfBhpMwSgOYsiyVy5kKTY2it7PCzl58ZZIxE4TVH9J6Y3Gc-mnKf~CN8oW0UyNpHGqjY2Dd5oWrHeElbrhO6-9zgmVsMcKvM8RjB3NML9QvBbE9FkV85fob0eUbDfot4yRTwEKeV9slBwccjKtkBIdU4FdSGDiqUdrd~f60wM9dttJ-pjW0XpPPc50Yjw8ELdhKna5nydZjs~ACOnyzLwIwesqtRApcb9ZVXgpzh0owIMYCPyVsN88n~M43bjgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.120Z\",\"updated_at\":\"2022-04-07T16:01:38.682Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6x\"},{\"key\":\"e1b1e748bdd46cb5e5cafb9c4a4c89ee8205a2b8\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"36:1416\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/lJF/RZR/rQ5dOibewfkS5ndo/style_thumbnail_17.png?Expires=1658707200&Signature=ZiA3lfiD3De8uwmDSrvBbJ2oXWrAv55kfY0r-BH-0T6rfqple6QTNvzz-8DvTETnoJlrFWfi-n5FQu0PQ6QktjCVu-SrfMI1kXfQYL-O5BDV~vMDot7Qt8tnEx7kkywvKTh~51GE3OgKkYN-FSrBPh7wiv9ChBIzqfKWCvv-fNf5xt9qFCAUCS-VaGwQGZCrKU-BBfhCu45ZdXVkfkbh2MJRjz-qMyOwCkFkdkwbOZlb9biLNRv5meNrpbJiCJu2pmRme01fOd6LiUkguwuHM~fJ0pOKnpGryP39hPmjP01zl5CeiGTIOExsTWQ-Wl-CIVt5Tsj7c5T01YL25haVYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.797Z\",\"updated_at\":\"2022-04-07T16:01:38.676Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}{\"},{\"key\":\"ddcceb2c7fdcefcb92b14b14c26ab1a27fb73334\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1425\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/r9d/pel/kjYNbh1fIgwKsrmw/style_thumbnail_34.png?Expires=1658707200&Signature=FH-yYRdsJTLekRr-4kYEFrkN21Nt5SNt81P7jM~WB5je2EFJBUs6NmGj6mHA0WVwVbjqgKjccPxe4KrTiS5qQYwXH3TVf6NQ2RO3Gpfb3aIALJawMmO-sTrN43GtWrZ9uaDvMgPIz1riYNvvdoDF41mvltU39C4qSQU4A7q6BWO4tMF3f0TWYxnTC189GivOxUptiJMn0rCweZTcvlV0sSMWaP3nPCsQeq4h12DCN~CixwCtFyQssIwjZRbEIkEhd4A0OnbOo1JypAAt5KDKEcxVu5ZgumYEXx1klgZpSli3M~IyZi2HkXOJQHbgwu9UAZpI31arlozcAgUzD7hyrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.922Z\",\"updated_at\":\"2022-04-07T16:01:38.665Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}{\"},{\"key\":\"d69c3d0141cca6c11f698c8143c90190e6541076\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1312\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/bwS/4ny/hNdDfSrRjDdmTjvu/style_thumbnail_31.png?Expires=1658707200&Signature=HLyFV~5pfC1QvMk6hFmfiBmtAFi96hMyI44JojWs9CQd9fewNMIYz18VvflKVeKUVM7YO2KDKwWyJz9gDC-dvlZ3HOLGnB-qy3aVQ-vh5cjtfnOocOUaraSLr2w4Mh8JtZGNEu6kH2ZiybYAq-3mzEUeIJy2jizWTkF5AARDz1kJ2ufS8lqyBLRkIYHZsv~B2Y5ku1OQl9jAM3Cm435HumKVEA~0VTx4Rw-2F8uADojy46m6uYOiTO3kn9lUgC8F1FXbydngEVVs7Op2V3XBz4D6vCaS9NvT~PljYhIaWq6EgzVWRr1-6HKgOyYSoMJyLe1HvmNGtkhnq5nQra7ZQg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.906Z\",\"updated_at\":\"2022-04-07T16:01:38.660Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6|\"},{\"key\":\"c93e0e5d2aa83e30578f42ac884895c21d4a8d92\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"28:1308\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xXo/7Im/Fsnay093kpvtIRcj/style_thumbnail_39.png?Expires=1658707200&Signature=FVElAGeMbkktA-CsaZAA5ZcOFWPWUn3eP73mHKmw2ai9O1w18JKiVtLsglcuqI09w1U5NspI8NIw8lA-zFCGZYex2CUK3PSUDdWzqjs3V4pVHBwZRSCaK55oHFeMWgw6I7y8GXCnGRG57xZDFKz7eivCFRjjK4pZIXHctRnLceyWDVq21eSbQ8QqA3ctW6IXzZtFfQf8hYpJZVWMlrx1h~u9ZSEj6yUULn3w24g1~o6nCo3KcHNCfJe7Ya5VEjBAUXNEgcrZctZXMX8BeiNYxQ-6dd0ZApE~cKOQrxhWMTwf6kMBt8KxD1Or6wgnxxh26oTdZl3zZ7-lkytTMpEPvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Text On Primary Accent\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.816Z\",\"updated_at\":\"2022-04-07T16:01:38.655Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6f\"},{\"key\":\"c90d6df3eec9880fc6b055f921a91ee7ed0f87fe\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"34:1410\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/l9w/Ism/iO5aiyecNLGieQHR/style_thumbnail_36.png?Expires=1658707200&Signature=H4v6lvkqECrvyOLaF8ASK6CdF7ktF8LxyJiw5S28Y9AlrTntm8ugpRWwibs0SdGXKq9VXzh-ZHffXieGYqygBZhjlDvqMCdFG3iHjyJAwkTWuibusfifd5poUdsOEQgwWbWk4VyD3bBX9n0q4e2DhRdz33GshN5FT2AxLIThkNT0IBYbSyNbXnPDJoPrOlMFu1E3mkr-Mi~vSI00oq8eAy1PUhA1wJHOijJCSIZYtI-aMoY3CsHJnLKU9PWuce4bYZ~d-Vx~IIwm-bcWoj7gpJt~jWGv8Oj0jG4Kzh9hn4IjsewIq2GzSZlX5-IGCKKd~EFPm5dPL6XjCdsbsT17Aw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.956Z\",\"updated_at\":\"2022-04-07T16:01:38.650Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}x\"},{\"key\":\"c805071fd41804920daaf2d7b38ee20f3c756756\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"34:1409\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/YYO/7JM/WXjFnKfwFV6bzS13/style_thumbnail_32.png?Expires=1658707200&Signature=OdOdA1f4mwKA-Q5G~Qe4JzSiQGbmFy0YSM2iRrVnQxYg96XkkDrD4kRXwfe~aW7CI7xAViqa8YYvXQ9BJhQ4HNKbb2Oj9O7cYzyhJ~WMJWCA576V0xklns7xXvMmAPSnRoj92XkK8uwsHMDXPNzDu8Sc8cYh6UDKQIsMjSJok9SbvfRoSRLKWb6idoMErM7~gM8u3CnfBHaToM8lwDa7OIjwEcv7hywjIC5QbtB7aPL5AU9j4KVAA~gEBgxRCp9LE8ZrKgUkxc3fgG53QVRnRTcz6GBkfi5ZqkIYotkyxbxVEyDte-WIt998IZBPB~qze2vClNEgxQbeKvBJk-cmGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Background Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.912Z\",\"updated_at\":\"2022-04-07T16:01:38.645Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}r\"},{\"key\":\"c082879b14f1db8fa5ef036fd3f2917185006c30\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"28:1302\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/zAQ/ttk/b3BR2KmAhHSyCxMg/style_thumbnail_2.png?Expires=1658707200&Signature=b2SEc9vmluo5krpr3yeXiuvq~Ts5oFoTqepENGpbNywWyGTQu7q07QJiJYXNE0PXrYIfw5XbxAMRZ1JmMGAEEBkdSIz8nBd2Jb7IqA--d2QPzMh73d3uBFW9pWBHr~yFoy9dMlqDrdHuionPXQPnzmrNr8nRbpAcepyYtx~J9eZAWOavh2Sg3ClJKeGUkH96WfftR61kjXpPXDMG98gcW3iUo6lOORnPJQ5dDONO4luaoas9EQpLZt2iXH6dnVaDpgqccSKYm5b2IGwVuntDxcHnmRhcpmIGsfqkJQb10IzVYT5PDz6ydhLB6ITc4VIq9ShyBzGqmqKTDN6psIl7IA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Background Primary Accent Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.932Z\",\"updated_at\":\"2022-04-27T10:29:34.641Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f+\"},{\"key\":\"ac49b1d5bf17e771080bf2449174368066b96507\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1467\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mc0/bte/j7bqJUPs9Afav2EG/style_thumbnail_40.png?Expires=1658707200&Signature=OhZGQLeuPq4rlQQZW22ytO8U6xuFpI8V-LUS97I7c3jxXVbDBc7jhZBG43hmRcKIqcrzunjcFX~JOlrVHaWC-QFZZFMxlJ35VZQpakD0C1lHRLnWgutC2qtArwiIYVS8RaBbr55pZHwdXTm~XYCMEh15hmEeNL6CRY~myKt5frDFTBXOjMvq9SRm6gToh61j~MckFihDw59Oda1Z8JHZrhD-eFCE~OKDbVOkeAV4LRXV6vjwdzCMckFZx7knErrtd~Wzbn5i4qsOJe-Aog0JDM-t~vn64xOQR6Hz1mR7tBXd9EQG44vE9F6rY5z14dr2lb9tyFZwBpTCb0P6FtHq0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Multi Control Enabled\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:50.011Z\",\"updated_at\":\"2022-04-07T16:01:38.631Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f*r\"},{\"key\":\"9da069f424f41318b8ffeb37aac34882b3495578\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"36:1414\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Zhl/erC/YfLxqkVwMsTVmZa7/style_thumbnail_46.png?Expires=1658707200&Signature=fVt9rAs~CRoszMDhN20LcHhz50bWmcsCbQdlC9rsngUxUoAFaSwJw6KLp37w4IpH9AA3IfEi304dPCW-IquGlTasjxzczdUz~vgKhUfR0V2d~y~OebEiBRU3K463e2-bPhjbHDelOogAm5EGu5ugHw4QYaSuLcqgiXmXKx05Oqg0jhvyssiALXrBsGbpKi9amvsMrpa8fbVyFIZV23pk4fbgDnRjt1~xMBcnCKni-NOub2Zelw~CEefgjkbAcri0qlSHkgejxNc-VV8-B6gSZhabasPErCN~wjdXK3yVqeeUj9-snUlA5o0iLvSpH24~GEKqlncCI3eUh8BiGhYG6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Neutral\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.183Z\",\"updated_at\":\"2022-04-07T16:01:38.621Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}r\"},{\"key\":\"9b2f399135f1519efc79f8116e164862cddd6ff6\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"34:1413\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4e0/zLN/SkBx7GGuTy6mPBCl/style_thumbnail_18.png?Expires=1658707200&Signature=IaD0VGAqpmdS8DmSByQ40YM~X4AAUrfTLg-QxHbp0HeORXRB8evUAlLCK03Rzls699UERrSmG4YYHT72sMFxdPfxbGDOIgZPjZnepjvd6gbL72SblSGHOblM0NWCwkoOyEmovQoFvR3U7HfJvQPkZzebRxYAKQI2nMQsqsAhWBYfXG5WsfL~Ziz7iF36HPc6Cy51SbfRf5xUGewPGJ24V~7zukvqjtQ9VQzNoC7sb7jN56rlNLgu6zLYajpp7wRddw-6qKtEtaCTWz5NY3NbzENw0kW36rzcrAYvhF1cnNXwnmErPSjB-QnmDJiGIFctEzoDrW9TKgrXYql2Z7X9OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.868Z\",\"updated_at\":\"2022-04-07T16:01:38.616Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}\"},{\"key\":\"932c2d6eb806ec55c98db7863f750c3d8b2696a8\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1428\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/t5K/qfZ/GKKCkkTmKxW85B1y/style_thumbnail_19.png?Expires=1658707200&Signature=GIm0vqKdvpCKTc2Wg-1wfx8vuRbHFsJfGwU8jEmjqY5z8nE1ewBqmcM1SQc-INEV9A7rN83cRjfZCUdYKbOhLdpV8mTYME90btv-J0c0Gc5yEpdVVTvPYi-IHSIIswQi1mLU8k-HmpTQsmaww5odrE3lh9rb1Q5ShpaSrsAgWofx2ONf7aph8Gi-9o2Hrt1DJ8~cmIpHZq5YLikq2lAKlJNCxkJsFxd-xNHAB46Z1rpPagrGc2tT222Z0dWVZnMHLIeBrDeUTlukvMEjavwtUPnBmoCDzV9kMPrcrAV5~8-ggU1kRhpf9b0a4qNsBO~QG3CG7eiKE0w9h0MO5~iDSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.863Z\",\"updated_at\":\"2022-04-07T16:01:38.611Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}O\"},{\"key\":\"909280bb96c0c80f7b5328a8a9091a127ab849e9\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"61:1420\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vcV/j77/GqDImAGrtGrXIPVm/style_thumbnail_54.png?Expires=1658707200&Signature=GaMrvsl8dJYJaJzU64IwyCLt95yDShjWlR9~8Kyc43SWVqiXV13QSAkY8-ZWl8kZmDDPE55qUf9v51uEWSngxJuQVSdS710cILHzzwYu8Byg88zBcy7WtDyuTZMJu0Ia8jAwieBax6rMDeeStfI4syeaeUqQurV~hTISZfA20iuRvJp6Mh6IvND2gqUnlyltb~W9wrXLaJN5OybyfrV6YoGwCFOEZkdjdEqgYoz8jptmZ8RkiD8AukTp9OlXiTEARkHeBoaupaJw2hVlHa-0IciPNUofAgn9eAmQKkvBUgFixrpYmuE--KgJGtqD9EtCu1-WNgit7iCNwQ5NXd0s~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.263Z\",\"updated_at\":\"2022-04-07T16:01:38.606Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}O\"},{\"key\":\"8f0f4bb7658eb060d5b529ee8cffda47be5221bb\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1422\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/swe/0zt/mrk4tddnKIcohBSC/style_thumbnail_13.png?Expires=1658707200&Signature=dC2QV5RsJEApEfWQF6D~~1M1rsaT0AWhsdOLywf~IjJjVDzScSMKj0avbeR8fRrybMBqomG01gMvy56eN8Ku8GSotYFcyEjXPtz~45Pyx~klr0WUGkOupdfW0vqhafaPrXhmK8-2UaI-3a2uWRifdHR1D8KWEQcmbf5Y~d9MPmBy2tnCByE4Q0z0N0s2NGc~jiIiW2JPO-OBXAGa86OkKraPqNJoST0sGcpMCa9IsM6ihi6yjvFN6Jb4Pjx1f50seHqgXFwFNf~g7mZ2H0WmcW2t0Y5rTUDa9RzUVqubYQmUS4l5l9PaF4jz89LSyxz8hnECa02ol0ljNAJ6Ie30OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Background Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.829Z\",\"updated_at\":\"2022-04-07T16:01:38.601Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}x\"},{\"key\":\"897eae932e83a8452e9f32f18cee100bfb796d82\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"141:1584\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/6U0/Xge/s2NzCkZiMxQRtOTb/style_thumbnail_55.png?Expires=1658707200&Signature=GpMBD6hQsFTclsSu5JcgqS91QCMfuKrlWGVmoGqfKrF98~GR-Kb9ycIcPCwo4LjyEaQj-etsxi1ZDF5v81aErzjgVhdwbv~hGiIGdZauvcEhtuRgv6CFMudFd-pkvdWr3bFMEFNkF9HgynP40ah~c6OILQONhpWkrKrLh0f9ArQVEP8RsDW4--ztht7bdERL-30i~2Bc-dqHRaR05uKR-CGBNHsliFEqf3sL7VKMq4s0uH7mW7rXz5W7bHUy3Vkx9ytZMvtxKLybnkEiXvxZxqiMiKgREJbHqSdMDISyrkgZ6eB7JCHh5pDhvhUgqyHY6a7PfnNidPNp9CR5No-xow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Navigation/Text Nav\",\"description\":\"\",\"created_at\":\"2022-03-14T14:41:34.346Z\",\"updated_at\":\"2022-04-07T16:01:38.597Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f*f\"},{\"key\":\"805e21041bfb59d0e53d7746f6d07ab1aabafa59\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1317\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/YTf/zAU/d1iq4nZgUpN0shHq/style_thumbnail_24.png?Expires=1658707200&Signature=QUz0MzIgnNrKzxtzu7lgDJPaPuMdIsKCC8onNZJzJ2EbUCsIOml-CzSCxJjud84tVuDS5hx9EEFhV1xspFCpxT4R9lVej03WR-1rbY3vSmsKS58meVyTZkZsxjIUzGB8A~cc-40UvWpNjjfYuWBcTDcOgFmAXxVE2JOIBk57h3x2m4EjWh46sZKp9CAvZM6V42KAlak54qZYrn97IPel4QVTXhAnheOkO0TCc0XoUiHYV2y~wtC5tWOfRfh1HR3tj5OVaA3R-QxVFMWcR0URVB547ieJt2q-n8IC-25Wo7TSzZvviarnAA1wt7ETQzU-LDVy06aMRSesT~O9TQtPKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.938Z\",\"updated_at\":\"2022-04-07T16:01:38.592Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}x\"},{\"key\":\"75029f391a06ca3fa18f639b04cddc6fa10f910e\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/M5Z/J1K/E2FOkiHn1hAVvrrK/style_thumbnail_11.png?Expires=1658707200&Signature=cjLAa-94ATnterTYJaj2rxCYbqVIHOBQsmhK2iSa9QAq1DRLqP-jTZ7FkFUYSJNxyObYu06oT3TcOeRpvgoskWGHT8sNnSfpfGPnj8rES6RNHhol-5gRQyV8fIYqc1-PJfJ8HwCvbcfk6~ztr~iTwMajIrde1U79UNdqHCeNqTHxwMO9yk5~lCbwNk7tCWrejA~YBoDRuQSV3eQVEkwVkubbc677-5zm1JYyU1MhunYbNFtxgfTsrTSgTW3IH8NlZyChuBnKSqKJEWEAtvLGl91HvsnKewU7T9cNm3fDr8NbqwUvDc0UkZ9SdgfJLHv-orbk~JkcFupOS7UvRzqX6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Text On Destructive\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.892Z\",\"updated_at\":\"2022-04-07T16:01:38.582Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}f\"},{\"key\":\"73bcfc9e519a412cf38087b05322af2659864db2\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1323\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vZV/PNH/vJ1b420SlpTwWm3W/style_thumbnail_3.png?Expires=1658707200&Signature=PZKZyxT~NSJcOy9Pcezj0uvhO4yHq1LQ-t~gFqpXZSR-2nCIjVrDrHtrXg5tsZ8YVY8jcSNAYIoz84IslbXx4DKdU2kC8GuQOsJb93OAjCXUh4DQb4orH0d5-clotor3eCvY~4H~IU7s3SX3Urw7-1VngGnysrWS8Wp3dhH4qT9JM7nT53a-lZk03q5TM1oiTzUlid0lssqlxzx85keRg42D2nioBurkSUaLFPcS7rc2RacXiX-0~p~dsC6gZds2i8VpCraCXlnxZNkKN2guagudSqR26bR4yhQJboEh~urT59Omvl6YCXojOwx1oOjBwRTiPQNBGEMyxWJJsBybcQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.877Z\",\"updated_at\":\"2022-04-07T16:01:38.574Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}O\"},{\"key\":\"6d223cc3368bcfbcde934dd0c8d3b23acc2a1c3f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1547\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/mYi/jjI/ul5OiLYOylb5bAjJ/style_thumbnail_5.png?Expires=1658707200&Signature=HXEgjzmmKWAEEU91df8ZzSx~rAGJXeomMG8nTghV4aYFn1j-rwelBT~IHtTxlKA1ngb3SJjlQWzvWE09POpbIc4o-74ep-OPI7uu2cN1-p1wVU8PfoxulCE0l7su~RyluXPUWuAuv4L5nMNImlLhtvEvqfLx3l0Tw3vBsFLuFEqv0wswtDeC4UqtpN~fwLKFKi6o5lMqHWzvYLMUIIaGw5SHPbQFgN8YeqUFtsomCs~~eOAjTq6~D4k8j5A0a2FaenNa9~R7~sTAWbQfBR~x32t6PWjJW4wMU~A5th-NAjgWsKbmqxCh2dyFUg3CegqTt0AOWH-1xKaep7o9prYejw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:49.950Z\",\"updated_at\":\"2022-04-07T16:01:38.544Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}r\"},{\"key\":\"6bd5690b6d9995b2d234556a3347b5b65a096d5d\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"30:1309\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Ud5/ksl/3yFDlIqzwZFAyi2V/style_thumbnail_47.png?Expires=1658707200&Signature=QnMaRXfkcH2uDAIy7klr8QTi33eSWprl-sb9UA4ez0rR-oQLNob0tQ4D-dSnZphLDewYN1Rzsmo0LcUp-~TZrxcl-KT~OC4fjRyU6VaXKRp8qaUm2Ku6SSctT9yeUyU07ysgH7nLyrwgLqh0jUQCPZYC8Ry3G8boSpk~d0gJq9r1-u8BT-i0ckiOckjALTJRiylx1iuZbaJd2DnwSW9AgL3BgEwIODFaGu8aaU-jMtT9XX9G4Cf98Y8Zbf~L3tVoKBKmEQitqzOWiscN3KXXVq4HAt7H4LCD~MkWlIRD0~Pu0Ev8k1artcbkhxaAcXeB8XQR2Y1pqHVXBYBaUEI5pQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.188Z\",\"updated_at\":\"2022-04-07T16:01:38.534Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6r\"},{\"key\":\"671ad32839675be5a0e45d97d145f79e59aba973\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/4hI/qDu/zwAUYZZUd70UIJOj/style_thumbnail_38.png?Expires=1658707200&Signature=Cd7GLnbt3TV9gBpkqlrpVJkF1-frCOlvTJBaWeFQaJodlyJHL6mXl0SlXkymKD0YnvDQJ9WpY8Romz4i8TINQDK6hc0x-yBGL0H6LMOz4AM8qgfXOXi9uuY7n3jB7ftTvyfwBUqc7~g7Gpxy3gQfMtkNtDb0mFzD3nfq7E8mmDIaQFRc2tL06BKKJSRJiBTSbzvC56MlaLgGZf-ljbuxwCkjKp6d2Y8e2NsXU9gu-Fi7WshIXi-fJvzRRZjCAgHKLT5nXjYxyxgaqPsKTjD7d~ZEVQnPT69yPVtT6f1MuomPZFwJ8oT5HMkjEhvuCZuFBomwxH3e~GlLjx0VDRbh3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.820Z\",\"updated_at\":\"2022-04-07T16:01:38.530Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}\"},{\"key\":\"64e64f81a796d42be82745c6ea9ed6ab19c5817a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"34:1412\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Azw/1Jx/VBS792mRJ7o0VdL4/style_thumbnail_20.png?Expires=1658707200&Signature=A2dDrgdYJCAvTOZJBNJ68Jcvl0hoe-8QLsi~9ZX~5CSWJlxDDORDAPS0qsOJDtNo8pkHnkZGsJ~9B06kJFSJG4ybFkpvA3VASaL6KTClQ4N3JZoXkCmkHb04sOMF1slhHMgyrk5LjME~TLtbyeSqT4Vkmcn6iZgIZtKIdNnT3~LhvVflsgJzEI07xEnrfMwWDXrSyIW7tHNV65T7APd9NbEoonhZ33k5~Omo0NNXCZ5~ds7wHj-J08K-acxuZNL5w6I~1hHJjv61GFa3Tfz4c7B68rwddpiUVkxNawOQGIU~Mewxzn2FRuagUjrEyb5OUg7SobdCXi6nRsy4-CihRg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Tertiary/Border Tertiary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.806Z\",\"updated_at\":\"2022-04-07T16:01:38.525Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}|\"},{\"key\":\"6176e891dd435fb5593f02e298de04bfb8f8dc13\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1311\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/EYO/JVE/p4fHtnXRFScpbeiO/style_thumbnail_37.png?Expires=1658707200&Signature=YS5uF~ihS1WLNSwqq4xsryl0SR47WN0h8Gtr-uLQ-klHRaCzSqodTOfXkZJrF5mGHOslC4vHjLL2M-ji6mrYSfC3ubwLWGZZ-krT~~KgOJQtIFpOt9aW1a8OAQZrL0IxRbXBQSm3SiMSd2hFDdWGZ-4US81bSZrHZtjxCUN0pKiOyCAZieBtKcxRa6HukAAmKgfW6f39SfnjISsN6JzUlBcuyCNRNx71guk0B8v1Qo6DOCjADKhs5HJatfacf-IIoTiAuXw6LAqCEEi7Rl7cYMaxm1vZF49lKGtxqwEqpHuKw5eg5987pBEa-3CFtTe1ep14tzWJsWejxsFuXoGmmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Background Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.950Z\",\"updated_at\":\"2022-04-07T16:01:38.520Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6{\"},{\"key\":\"5bec920e63333942b9225225722fdaf5fe355cf4\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1322\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xDS/5ot/y2XBtfa80jWT4Err/style_thumbnail_58.png?Expires=1658707200&Signature=HfGFH2HNKckPOL15IdFmy9jjulZ1~0FDsKV5g-L0twTipky8P3K1tBQM8nDQBatabWfw2KqHC2RCwPY7fagB36LEJQNiBnRZL~BvJBIym7mmGNC9Yc5F1Xw1S7ufMa1DjCtUmbi-ZfTZGGpJ0g3YQBxCsYYGISwWRovp5eT~6w1uVEU8YRJMBA12~1IiQnq~Kueb9fflQ1-KpSXzTStttMXM26e9MIoGfuYzAKme9Imkhe46UgfcHBw2KFX3XBFSqrTvLhicMVI6WOiaZ4f4fWpObSrYekv68FNofkJEYuMuoPkfdxGnJoUFIuAj9DnlvZvkLnml0IP5k5gx2CLzrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.285Z\",\"updated_at\":\"2022-04-07T16:01:38.515Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}\"},{\"key\":\"5aa85523fcd824ec3e1b4145b53d2346794f1d68\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1318\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nxV/bow/CYtFoWBPoIceAfNH/style_thumbnail_23.png?Expires=1658707200&Signature=AcIiZ9eRkYmjIrnHKH3h87UH-iydzETox5EKwYjKEUStQeN4t1g1H42~F0YFqDvEb8f3KfQMThaTCvYyRevFbSx7VT~7YSTwy6ZLUEujpbWxOCJgzpWAlwmBbb2-3cWNbcpMSRkhzrpiOWejIn0qkbCfTXH2uzqF5PhCu5qnK-S2Og18JTxgZrM4xbHCN7qc9bmPoCMnvXgL9n2MC3QLmSFAkV9Ymd033Qwqd8gK~9FHrYKsFXluhfaNgGroA5ukC4VU0nzGCRXn6LOAappdXamu71pW1F6abKQ1zEhphl54hMFE0ZfUT4OYE1uXgM6-X3TiKauKZ25hth5KspKa5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Background Secondary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.849Z\",\"updated_at\":\"2022-04-07T16:01:38.510Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}{\"},{\"key\":\"521e4a7ddd72d315413a3741bf3ffd255637ef11\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1426\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/kUQ/M7h/Fj1loPBh2idU7trs/style_thumbnail_10.png?Expires=1658707200&Signature=JTjDUvt-PzsofduujASBWpliVeyaFP96EpiPsgSXwLT86cba6kjOCmIUmxvPj097A0jW6tZ-ooofknmA~lTfF5AEU2cKhTR2w393JudmjF2FC0Zha3h5nq6Nc93X82wGjyqrL8vlyT4awQihwKjbF1-oWlx4Iy7oCJD2pwPsUVc5S8iv22-1joFGCeLifl3T4~jl1lopqp3-W44ITkG0Yky8xh9sTveDCwnxjkZIZ2W2I235m3TV3QZrzUlSYEvfjS5JX4NzxgQCSrzrxwBBIRNJdgo3s9VV8twS8qaavm-Fmq5hAe3qz8w2OJPcTt0xIZdp-jeDC8rGJ0v38CZxLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Destructive/Border Destructive Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.758Z\",\"updated_at\":\"2022-04-07T16:01:38.505Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}|\"},{\"key\":\"515c912dc46b8aa1fc237d3f6cb3480c5e711aeb\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1321\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/UZP/5XV/3gmaJUabs7ETdbX3/style_thumbnail_41.png?Expires=1658707200&Signature=TdpUwp4hqvAazpovAZswSAN2Q7B24irEIz72eAWsx4CIF1VbBw-xpjE2QsguKfqd94Ha4idarc7pFQicTFaKowrXOCJuxn3h9ZsX-DbC5Zpil8pb09J~xu4JWgn3SWjL4Y~vLh8oeDX8ZscvQPo2AYVKoud4yy79Qe1xdUY7DXrXQIt9bK3rLECJ7Fh1cYhjCKNw3LRRCupyd8wm1AaC8aCDHIbYeVAwfXIISAxxau~5Wo33h30paf-ClVTKsYWkNYUcGMLEa8LsGucfIvAXZOxVlOpv-gD~XNBc~AtIkux4Q4-a2ETgkkFzZQLax4MxC6BvU78hYc2BeLYisOtLHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Border Secondary Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.993Z\",\"updated_at\":\"2022-04-07T16:01:38.496Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}|\"},{\"key\":\"3c83525b7293015a44771691a017286f6dc41b46\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1314\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/dWg/TvI/im8IL5TlG1uQOY3m/style_thumbnail_29.png?Expires=1658707200&Signature=TD0v1Y3heRnE-CuT-3Kh3hOLWxF6P01nbuAa2Zo4QouU29n4AD~8BnXG9YpbDROaolSNiVtRLvs0MVRsZZW-uKNM~ahEDkwnZO11CaqYGU49HRo19V1vr~XY6fuTWuh8VXcF2XFOcPvNbtRWWIye8OZuvny79hdIQT492dREmPtji~7D37F6Mt21m861I1v~IiaK66AY8ILOXA8wBpUmlCN9kWIaMuTDakhA3OZz8k7ZGPUTN-fsQWZ13TEQheGPJy8IR78Mn6IM3VEqjd-vSnnyO9oh01em8X0rhOFyn43NtrR0LBVB80LkecWBnclL-Pb4VyxGWr6zN9ud2opiyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary/Border Primary Pressed\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.839Z\",\"updated_at\":\"2022-04-07T16:01:38.485Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}O\"},{\"key\":\"3812e7c4dcaac19f864673b81ee45be172ccde72\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"36:1415\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/GuE/fFg/cJ4H45sc3NS7LYuI/style_thumbnail_44.png?Expires=1658707200&Signature=B9kXr9jAhk-qAv60Aobr5OSMSG9HHfSCyaLra8eicwEwhke1PgliIyyC8B1Ou-kxJJAc23tTe9dzDmxTCccjOhUKakUU0kFwx7SvF05vap8-1bxar3S0Iy5A5rB1jtuYhOzhRkHBwiYQBpZKiGhs-YHISMCuOaXMGT7rQ0-lDhJeGnj4fVjwEBBaTxlns24TSW9GDM-wa8tBE8ZfZv0iVaFDAyW3yWxP8fl-iAkKk77S12d9bVhxQO36~ewKjvl-XaH23Iqd5-FBZksCKTODQ01CTM66UZ1xAivGDb7IzS~wGPn~CjEjIpqmakhp2AvnZ~vHIAbuvIbgd2vAH6gmhQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Background Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.115Z\",\"updated_at\":\"2022-04-07T16:01:38.481Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}x\"},{\"key\":\"31b453ca1d58e6439bafecac4f0265f0ed955da9\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1417\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/BRn/y67/ZS8qI1DUthaEbDPH/style_thumbnail_8.png?Expires=1658707200&Signature=Hq-MN8N5bEcvzOYpu5CRYM3~~91-5xiRDJY1sxuJcTic4yoKLhZbsrCYK97NlVITA9WeiJpyvt5rpVdt8odZGBHex7SvRnWIST~e0Klz7-JSYQpOl16-a1TSMbrIwQrPJKN0T7fnHGNq0z-NNzbTghB856ScEUuJRjAYrmqIg6H1IB8ZUusZJa8F5Zm8YYLtaxxspjDaEHmYYGh5Oea58z0nTD7EJ~EPX1mnjsJqVVxjEPEkuHkEoqJnF9nnUfSHI3AXilVJ8Ja~cmM41BHc3WhRYJGAxY3ZRd0xiP47czt6mhXSeQHdNqhjeXLJ-JcLT6DRGsPKINhk~-L-TjnyEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.788Z\",\"updated_at\":\"2022-04-07T16:01:38.471Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}|\"},{\"key\":\"31429636e1063bf8d16280d97c2075393bae5cfc\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1548\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3xz/m2M/gVqiyJbY6OM0Ux7j/style_thumbnail_50.png?Expires=1658707200&Signature=XRaWgjolUoEfKjaF6lozieKzrnyjDXMP~xW3m-R76Nj31jUzQ11IsG3PLoaWWWcBGAOK-VVroWAQv~hK9-PGGXVrAvjU~WxINlEDILBF6q-JPvltTuItvJv2BrW0OmthUcCXQBoT0kx5x5NtnPkjla9Ql3l0uqimzcxa30Qm2ibCRjaUNfRzXvi14EnMcpn9LaOfEHkkXky872qHIaIbPPGbOdvOeK9QJ-IC6xkItl3BlrccONnVMA~e9MLPIeNiQxMlPZ~rdvpAaw2KWOILq3v4AxlLorjKp12OeFkYOjsWBf6esGjoAgs9IIGWVZrRxujbSSTVSQkm7SXOTIQ9Mg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Translucent/Translucent Inverted\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:50.039Z\",\"updated_at\":\"2022-04-07T16:01:38.466Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}}x\"},{\"key\":\"2edec863632f4bf19e9e7b6831134769860ec1c2\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"116:1468\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/daE/A7C/Y7SPl0KvwIEZNP9p/style_thumbnail_56.png?Expires=1658707200&Signature=Q8QHSVAZ2PcLdXsTyIu9azsvipEwTHHQbRlpngozEZEZD7iJ8UDslYBo5eV0TupWIsvHXSSDXbNpr~veOAgmyHP-bpAoyMKS0Q1y6AXXBPJgq8sl5g4yyD8igu63YUKjedDpAof~6XnmlLSSTkOjTk3uQrim12Y3bngjR9UWTZgPfUOxTFlMGw0rjCExFsYNvWGm0DZD8ln5YtZySt8-OOOVRCsseymsmbXeDuFv4HeAxc3qf2SmbiVesrCa7s8alQM4bq-gnPDFokckHepEtruB0fybjzgI2pJrxEUGkGW4IEbT4V8A70eHo-bQNWqOU~KiEvkqkCOWZauDCmtHzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Forms/Background Handler Multi Control\",\"description\":\"\",\"created_at\":\"2022-03-04T15:05:50.044Z\",\"updated_at\":\"2022-04-07T16:01:38.462Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f*x\"},{\"key\":\"2b90d9076637020b8c30840c71f6607de4278e9c\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"31:1324\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/c2G/ELL/hnVTa1EQ2lCxkxxT/style_thumbnail_57.png?Expires=1658707200&Signature=EdYENVSlsGOnEQecJTdxd~NLbcPJ1NLqVfN2jo9bCHArRIAj9TNSYD5bK3YpLa7OaN08UDx4yiGpQIUTYnWN7Zne9L3B7MZHLzY8rmHjD37z2k0uaaWRSykUNopLtDN9FOXosu-OlI9fpznM1t2OVyBhTGHJK4Thaddiy96Qk2SK5bplwxB2D2rxtm9D0FKjlUjCmEyo870Ej0pG41CybimKy50So3xcaq0SD1LjUIroZbopvHAne9VJi5K9fswaiEiWw88IXI1JwFK5XOGlKkvfuAMZnmJVhrnX-Ez4GVtMSek4OlfgUKCjrJdUERpBCM6Rn~wsGP94zNXbnwX9lQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Secondary/Text On Secondary\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.280Z\",\"updated_at\":\"2022-04-07T16:01:38.457Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}f\"},{\"key\":\"1e158dcc73365e79f0f1f8e248b7ffc8d4d2d765\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"39:1418\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/JbN/KZb/oItWdrlFeutNYhD4/style_thumbnail_6.png?Expires=1658707200&Signature=UqhLqSOCDamM2eh5n-kw~o1Ej5vhv9iChpudOonVG2i~9106Z1fUytq8tHFqElJZvVE-rfeVUf~7INCX~hLj7L-VXmZOh9xWdvh6ilSmUxTPRM~PPc-hf7ft5YFCr07-~k22XD2XGKzEIumVqKeu9McM~hOv2uqdQPtUOnizyatXsvFSDDuZxb51PsKkLIGbGNZ59BomvB25OUeKRUTHmDITBhYndMJSALlCVDBfbl8lx4moZLUvTNtzQbv0ynSbEeFhFeLIucc1MMjzP7dfu8SoLolaGgfObvp-JctYp~dn4vPVyYX3DEh7P1NePn-d~yl1BOQzX86Tv-JX8oTEQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Plain/Border Plain Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.779Z\",\"updated_at\":\"2022-04-07T16:01:38.452Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6}}}}\"},{\"key\":\"1cca69467512c1ce4a789c715d53cac8f80132dc\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"28:1306\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/xyN/ZOe/nlge4oBp7Oyln24O/style_thumbnail_35.png?Expires=1658707200&Signature=FpQJPS8Uil7qpJFXxG8Xr63~oGjwUNWyxfN4Dt39pnVKue6ofOg6o8uXIfb~j2TS37anXmxoBPkT5FmKNaDF~NFT2VEEtC2wgTmmjclsKFSOopv~ZptHe1dCOLi7iUyBf9ioxqxRSFrapaF1lStrRVOS8ry-fyVW6Xvje2pVizrdPO0JJAV-GzNW0HrxMuvEyhEW1W6kpwF41DlbNJ72QlLsLTKTZ111eP7t2bu-24uiEd4ViTFNvHc0IYHuun0DJBTvgJMU9cgQPQ31hHEM8WCy9OohU~C3HmN7mEb56YsM9USoNJxTKUL~QJlBGBnUNL41i1u92m2wogGUxa5K5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"🔒Private/Buttons/Primary Accent/Border Primary Accent Hover\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.917Z\",\"updated_at\":\"2022-04-07T16:01:38.442Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"~f6\"},{\"key\":\"feb066a14120ecc71c056d34c18995209bd33eb3\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1521\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wj6/oCU/s6EaeErZZ8xLc0g4/style_thumbnail_69.png?Expires=1658707200&Signature=SwOh~Eu7bvFjUSTSMem8xY-VCnRIQXBcd0G0w4wE6pqBQF0c5GoDadfhl~eLZ~NnE6bPbIN37bMnax4AFszO7iRXWMeygrNWS9TzvG48Zyd3vAUoBswtdnslFPmPE5X2qBrUYmQDrLqzYTJYFGKNgEqwpl07hb-RWw2x-jANy4pJgM2AxRHDrLvId8RvHimkGQqAeAw~NnanjdrwVkLK~7CyxQ~Feck6BCq-vbOqIvv3SaVwp2W~Xyww18UTOu1h-XHtZg0gFp0R0PgGm9~QHABBQfQ2uloKaV~pMoahcyX8PqlXpbF14zdr2cFX47nwAZO-2ihm9juRwBlWd3RFRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Success\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.040Z\",\"updated_at\":\"2022-02-28T13:59:38.229Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"_\"},{\"key\":\"fd201a48ccea476c4654e71460ddccf37a45fece\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1522\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/8Dd/KBC/1hzbWFDphJCZpVzb/style_thumbnail_33.png?Expires=1658707200&Signature=biEtsH1juogkwNhH1hrXGWzZ~S5V04KwFvwXoEggcbrHEeJKQ8JbWhnFf7~RM844myWx6yYpTly-N9mNeSb0UiZNB4cplD-WkGubGUevt3va9xBYCXCQEeLtyNRsuCj89oFRlHDwip~N6Kty0Tpkmco0O1Ey4oDmfcbFRW80UZtr8N06LEMXXy8Uz5r2ytZuWydlMXmmFIB9vd0jkzN-v-8GHvyKHYEk~uDuYbECY71rxSQCjB0djXQK0CEOQIqa4I8l0lCeBKBxCTKDUoABGTmLXsJVRg1mXNUdIkpy1PA5EoLc37Xc1HMSuDV0aEfPuYzvIA89wlR0HEB5zdLUrg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Warning\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.854Z\",\"updated_at\":\"2022-02-28T13:59:38.222Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"`\"},{\"key\":\"f7069149f9792a48ed0ecc1e67e7c46ae9306b00\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2396\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/w2C/0Ac/DbsjCLBOWpgyN13X/style_thumbnail_3.png?Expires=1658707200&Signature=FFPtJwVF1lD3Mjc1h7ihQddIxZhDj6cwomn6UmW9RFEGc1Ipkql5niwn9JGiDgVypPsN5kacP6Fzsu-sZzXijmwz9xdEodobBJlByStgdtPGkhN-bsNt-byI4LwcxsCvx0FTXBN8JlUGer11RZLiT~hHFsG5FyilSRcnDl1AliSmuyo88DBLOJxgJlsMV2v7OoXWCj5G3hgtz-S8~Q-8CzGhKmnjAWFi~N0r1IQl3n0kgvcRxRFqmFEjvRaurgxNAI-SuJRiMheweAagsk5LywsuYQ-0hEueVZjMASVsmJX4PHPZk5IvDWd~uJb1W9ceO1-1xoFak7TiSuUKxmfh2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected Low Contrast\",\"description\":\"Text color for System items on selected state (low contrast)\",\"created_at\":\"2022-02-25T14:45:33.710Z\",\"updated_at\":\"2022-02-28T13:59:38.210Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"4\"},{\"key\":\"f6c84a6be959c1340cd8324f539961e53105ded8\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1515\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/KK2/CLs/1DErWsJPymYslAhD/style_thumbnail_55.png?Expires=1658707200&Signature=gnWxBP5Br1ZljWRP8mhikAuuPkC1-Vh5F-O4cJvgpiZYubXvhjLCsWf5HTrecJ5qMnTipblBLBFWHdM0BN~A7Giw~b2K~8a7bKzPg9k2spVtRYagr7PyEBw3qKz9Hs6htNiQc-TTjSFMozwDMbeXuZkfDQa-Fazxyy6LL8h8oeq0JW54y22cu1L-z2SeC2mwR6WUZVphCYxU1sScDs7rRBxaSDyB~cFyXUmJrbrp3Pu7NFiZGQxJFCkpz56MlEFKMtB4f-TrdZJQhRnUlQlBN-jCJwsK5pk~-xa2SdUluzZIw7rmriuIdkh3DCO9H5VkdxDKpQSrMlCRTe5IU3feqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Degraded\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.973Z\",\"updated_at\":\"2022-02-28T13:59:38.203Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Y\"},{\"key\":\"f3ddf5f7365eca88f15e4139471a6a669d2fb41e\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uVf/I3I/4bkxbCTyEr7Wm406/style_thumbnail_48.png?Expires=1658707200&Signature=WFkKXxrXYiFfW3TUALv5iGrC96NX5K4xIz~I~XYXt3uHOInyCZiJ1bxdQMlS9LTdTSIHOKZ-sEgZ6Lm3ajb~eyejr0MOifQ5c~kBd535v-w6yObGWzdEmLrjxiFTNM7QQjuXWyJDsWytc6wTq3IZ-fwD0ycIh6A4GMUeSiSbAwQjxrOs-Y6EyAa39s6tq5Ru23p2Y9DT7EwvlMcwZBDxGOx0l9iXU5mUWKmzaqYgci2WMGk7xYoxvDl8LZ4cbTRXjn~6aqV-vMHqqGQNkXKs35QN7VnzanOB8enH6p7~o0tqULTfJFoq-XcxtXO5ohw~tcB76563oPspGNtria3TAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification Inverted\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.927Z\",\"updated_at\":\"2022-02-28T13:59:38.191Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"d\"},{\"key\":\"f0f60bb7c9feac78a2fc29ded13de8095645e834\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1435\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/usb/NuI/jl66hJzRsqvkckcz/style_thumbnail_15.png?Expires=1658707200&Signature=XeMRRFWa-tMQZLIHcoOFnNDsmuOJhr~j3~AdPAD0m-V0NSKqpsN7uJZMAYudl7QLCluB8xhF8CwaA2BOW6O8mpIY0ShhBZ5FTj8x6bI5GuBt9S6lAz8~S6vf8q-mv55biCqwnhIsW6SD3iQm-NBO~R~xBLZIsWADFWAQ4WcBuIqIAWMZxaUxoZM0zsvx94F2jTOQg1aeUduQkN-nB4lKg9XDrlCOCK8LwZr289qMaAAj9xdLUpOoNQGFQsGvLDjIzSFOm4Cw7fjp35Eoc~tdeJydSzWWbPGGXM98EDcUOcbsJ0RbDE19~KWwjVKUovWB99hlvAzXLI1A02jv-Ov4qg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Warning Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.769Z\",\"updated_at\":\"2022-02-28T13:59:38.185Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Q\"},{\"key\":\"ecc14fe7227e3052733fa58d19f01ee8d4e6b061\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2371\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ikj/Xgt/8Ydb3A1DYm9WlBex/style_thumbnail_109.png?Expires=1658707200&Signature=DDRl4jGZIno2w5d~GML1xELmoEkvYzs4-9YFnidPtXLLaDPJ~JHTvOIzIHxHlM7eYLrV2tUu~zQ60tFOnsgy-h21FwDeBqPFaOl2g2NEfmnK06Uje~kiICpmIVQfUVjx9MEk23saOo0V175RkXA73voRnYgSiyH6GGXfGTCYcxJcrSSB~TpadOcGQeqPtC5-TtksWiD96RdMtCVlXLVXiPcmXlmy2YHFHuy3b2EF1fcehE7Ju8Jq4oTLK0UH~kg7Yc0EbVg1CqFHpoatN4szSTx9XcLadhiUEVsSiyzM61oA17-jNFgARBDDIHIr8KFxFVuoj6PgRPi4Rx7dSOi31g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 2\",\"description\":\"Pop-overs (Dropdown menu, select menu, inline menu)\",\"created_at\":\"2022-02-25T14:45:34.270Z\",\"updated_at\":\"2022-02-28T13:59:38.155Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"$\"},{\"key\":\"e14a8eb99e4232d6e11f999cd268815548bbc6b7\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1487\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/MVr/g5N/3ojfui8tOMusa5Ct/style_thumbnail_76.png?Expires=1658707200&Signature=GNauriu8Kb7JIDWUf5sQsfLeD1mJHRDysLBfvpFcq0O-U8Uh7GDNvU~MLX2jdTN2mGbhH0O5P6uV0L5FvLaXdK0SQIIpGT0mwmCIXeMdu4kjpO0V17D2E1IKqCgU-Y28ujIMdBB2W86v4tU57Iz3IR8cdkpohSR03bY5zd~b1UnS7xISKqikSqMyEDatF3d9TnsHdkC52VvSqTO66fjYv3vCPTg8LrIVzvBD6tCHTMXGk8wO-MyEsOjS48wlgTzd1vAajvcwJmSGh~u0grzcLEDTCWym1EwdO1MJzcCnfZ1sC0jGft7P7Km1uVwrvEIGB8yeY7omj1YFYmQDCVYkkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Critical Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.078Z\",\"updated_at\":\"2022-02-28T13:59:38.126Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"W\"},{\"key\":\"db0e17704923d214b4093fb710fe9ee967b98e9b\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1429\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/RvX/mvw/1jiJ0sqo2MLt6DCx/style_thumbnail_11.png?Expires=1658707200&Signature=QF3Pb-RSK0wFFhLvhoFbRJfdMm-O-8Mb66Rf6R6dr2ulK5oevnCZd3G2U4KRCb3cSmSzp~QQ-8lDkhsAxZVwn0-mlzVkdFiQNKGG~FKECr~JE9mCKenr5aMsYRMWCOKwMujOjnBtUts14QndkuyKWWRhwn8NoLkPtXEwTQ2lfk~vZE53ewILf2TO4bC9TF58XwS4yaw4s80KkLsf0N8lc4pYJ7Z3VZKbMi1jQMv81nOlq4W3muddCk82mx8ZTtg5vQg72Pi~R1a0IvsFnC8nPj0JMrs5DWC9ZRRF7agDtEPsmIsEStWuKDMCxsBa6KxrSDga8kIIkv69ldYDlxmYXw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Success\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.749Z\",\"updated_at\":\"2022-02-28T13:59:38.113Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"K\"},{\"key\":\"d82dccf3046bb8d90590847bc85576894d9d6cc4\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"17:741\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/QEA/kyl/vwsYjgECD1qHcBQb/style_thumbnail_57.png?Expires=1658707200&Signature=hrkK3FfOdCrnswKCP5CG9ecGPJl61wn9SClip4KaetpwfKJR-~TrDR3BsdhQQBwtxb3KovI09232JYMxhDuSVm6Pg5ijPFOAF7ZCu4ymGFnxuX6pGB5WfI3u27MB20bcDZyXJdIZsdiTNganr0nQ~fkJq6VTNs1h9ukMZO4aDQdYIXfuG3i0tJqksmhmJsu~6mwKx0Ceu7FnHAMfHRjX6ly4-MqWl5518AHp30Z7lehpq8mFIk6o8c96wESjWRbHC892l5zTRYN2wehemxpMMrcrXVi8oTmXvIz1p4uvg58JBZ0FbI~OqqhhDC~C5D0IBuViZqPJotNNuxwZ2OQ~rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Disabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.984Z\",\"updated_at\":\"2022-02-28T13:59:38.107Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"9\"},{\"key\":\"d674d02bb5b320efaddc4252a07b703eb50b3b8c\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1431\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/dNt/ZFg/ZvFGuXt5l2RDUgDF/style_thumbnail_62.png?Expires=1658707200&Signature=KdyolSBrtn~yjNehBGOzSgVtMjGS0bEJjhza5y3QkUFDUxpsYaee4j~vWg~EmJZvYcaOyPgsLD7bsAIZbq0N7d1M6uoz08Yvsbx5LviqcKqB34pgv16Bd9SQgxr3LlVzuNJCzntUSFJxWO4Q2XYfskO9KpebN-5e1200xrj1i9FbDevlkb0N1LytnkhtWLfzj17t7R1jvUmOFny3gw0Yh--pKAWQ~ZYCCdRdAidW2XN~c0hQgVY4bWKtZN9GtBFhi7Z6YX0rqW8~pFQ-1hC0-Hsj4kL5HkDHHtjYbxgZFlF03J2glWS7YHoCblnZwiHHwDLVcjRBS2Q5AJ3eBOHpCw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Critical\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.007Z\",\"updated_at\":\"2022-02-28T13:59:38.092Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"M\"},{\"key\":\"cdff4f4381bdd485c0c1c59d55876ffb717342e7\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1085\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/wp7/pWf/i5eLmpcPdFShglQt/style_thumbnail_70.png?Expires=1658707200&Signature=hZ-X8yGyvlL~4R10ifUude~jo~KUbfbftx8tuefpZWCILifVdSa3zZCp9hBoMHUPGQ2GQQQnGwO6zOlz5FvjMcakmiEWCzX5YrAzupTZDpHIStWtsZhexWmQijIffyoHjnf-Flm9CXZV0vTSWRpJsvw7sr3pQytQU1CNNCsuuzxRKOPzUwzF7pLOLJO2~lE5iLlUDbU0xKzp9Be5TN67X7cvkhtvyO3n-uUByft6k6KSiDmB4Twsr5NoOH7DPcUxntnsDKxBeNCJWfdcIcqfRRs3-zRboPLDiLxvEaivD5As1g2v6JThWBXgmJ0zMJOlG5k0yhS5VguPdVBdRaDhdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Filter Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.045Z\",\"updated_at\":\"2022-02-28T13:59:38.078Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"F\"},{\"key\":\"cc3c5e3243f8dcffbda4bbc52267db7fe1021bf5\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2395\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/myb/PC6/fPcKWkomDH562IsF/style_thumbnail_1.png?Expires=1658707200&Signature=Fje3CItR08s1XKz4byYqGjyY3avLwc8kG7RdZvJPwvRjuZAscIALyS4emsNzl-dKkOD2Zapri9ZhS7zWkxDhLb8X-RqGawhLBTHd7Qt8H757e5DxzjqPEIU27FKNlSp~3229jDu10~9d~7B5pWWcw~ScjQ75lTCoY69ldWpZHe-DPoloqafOuxgL1XWcvdZ-2mRlP77nFxSQMkyo8SC62XgKmPJMakj~8lymlYldkieBdE5RO4VKIBdPc4vEk7ZhgvMPrFd5KEqky6ccpocyLSCnqzSh-52a989WSMcFNCgiLQWW33tJr3EqONsuPLJ2rcN-hon9NpoLRzhC35aNXw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Hover\",\"description\":\"Text color for System items on hover state\",\"created_at\":\"2022-02-25T14:45:33.700Z\",\"updated_at\":\"2022-02-28T13:59:38.072Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"3\"},{\"key\":\"c38e9e588e8f33e037952ecf8f6d3008393ce08d\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2370\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/P4A/SiP/2L0tEWAgavFwHPEy/style_thumbnail_97.png?Expires=1658707200&Signature=gdu~4~VMjj7TikSr6ANJO0XXmuQyIJBpk6dmVstRPGQhJyAvlt7chFJl4bFUZYvCOFmeXPVbJuOmo-UXoenFIM5OB4ktkCNjIb91P1nhuU7jh6a8AwcCdJHYLQUJNtgIEnUCkhuPVa3yDiUnV0m1aCjiQVp~SN2bxY~yC3xDy8YZtf2rtxbypTSnGgmOuI3CkZbtjO2w~8fXFMCUB706SYfF-qcFTHG6ck08poCaURXS~hxU6GABsHfC0jxxkdvDr3lDonawtw63z08rG8UTWbDQ3O~imlHYeJ5FzOjbUC2BVzp3zxVbrfbbZkOg4h~j7LJ4qN0eIzRIQVVak3RiUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Surface 1\",\"description\":\"General surface background\",\"created_at\":\"2022-02-25T14:45:34.205Z\",\"updated_at\":\"2022-02-28T13:59:38.031Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"#\"},{\"key\":\"bf7d559fa9f62d4770f9a91468088e47d43d1b37\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2380\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ufW/buS/cDT5FHFSIPUbskfX/style_thumbnail_116.png?Expires=1658707200&Signature=XKnK5rMsUJDUqPAzl1MMP1B7B4tA0jGHYpTJl5uRkRKE~imycgiSZA1CO3L9y09YHAhtgVKIl8kCqmc-u2SI7KEvhtdvDjjioli21O5YZsWNgkHOy-bJAeHWjOHpVrRUFaS~RO-YAm04T~6iAUyVDDhL1WA7l~-kp9xem6ClNaLYS3oyXFoqE-mf~FUZiXY6s7d8MHvbyZUYJI2zwBlIrcq9XMliiOXdyOXIsWKNWhY1QzY74Z9PmdKd4FteqTD64VqbhUGbxQ4jb0~Q~kakcBsOJJ7YS8Ye2ITmCqfgoj7g8GdMtt6VDpgDsA05zShCx29yV7M3bTydXLUyGIEecQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Primary Inverted\",\"description\":\"Inverted Primary text and icon color\",\"created_at\":\"2022-02-25T14:45:34.308Z\",\"updated_at\":\"2022-02-28T13:59:38.014Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\".\"},{\"key\":\"b9466f23d6807b4dacd10491bb63787ef8072f31\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1433\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/e8E/bc8/2hNH8yFfUwODVIea/style_thumbnail_60.png?Expires=1658707200&Signature=K9e7oJlMbIXuLjHYUGRyQNfOr0o~g3bFkT2Di8ueaIEj32vJ105xBWroMBu08-~gXt0kodsLAmBIa~3NJsKJfgl4HFFMLq68cGkkZYppzPWvzvxQnerYGD2o90hwdbmWQNbuFwBZJ1dkwTkNM3W8cha6IeVMMQM5HHb0cZ0M2Qvkjajr8Xd7VJKTVAjCbdDk4ErKzBzCmBSkshZfW3wx3QIHPFhMzUPyxMgenCWuSwjEnUNPhopLEIkP935M0h7gHfTaLv5wWCwJasqWwSdrD6PXv44LlrmuHIcSbuLfMFqkfWYwIFf~Yyj7oXPsCKeoPN26agGSyYTDWZh96Kd4eg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.998Z\",\"updated_at\":\"2022-02-28T13:59:38.002Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"O\"},{\"key\":\"b127e4ff512ca4a979d8bc5cbf7e5de0a30e8720\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1484\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/fgn/Xey/sVlkaMNBCqxHiC8X/style_thumbnail_56.png?Expires=1658707200&Signature=PlZlkfnl0qWNZV-9ktksLvjxt~Js3UM0UbGIqvgu~oLG1xmMyPCveZSrqqTVmVNDl1mflB1Mn-FNwW4wkE8r1VAQgzASjUiCiRkSOs1R7txa~uL1uwa2u1on2UrC47e9NvzwFeWyME0LBMrMnP8AVsSzbNbXngcfCrKhIfnhAhze-6pxcmpwaarm0bNpciQmkQynmM4S0lX5w9g7zsdCGfeT63Dqmies-d1bCjXRGGJkt7Y2Lm7o1Ui399KwHYR7maJQzKtIJdhK0RG266RI-pXw0zzf9hcHwJgix1dkZS9OWDWPL32y6DYTJKsI3~Q38wmtl-PHOLbMAdUG4uuukA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Announcement Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.978Z\",\"updated_at\":\"2022-02-28T13:59:37.995Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"T\"},{\"key\":\"a4b7a72f887031e0be30f956c4342a82a283a349\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:457\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/3Bd/Vwu/oj5PFfUBJKb781zU/style_thumbnail_102.png?Expires=1658707200&Signature=aiBYxPYPtg~FUapCCGaOxF9qpjcpW6O0HMNVNfFZ0LiHIxyjT7ah~SuTv1bmcA4pdXOD0AOyVOLxK~dyfNU-tKU4hDWUMV9RWZqxNhtavN4ArCAt26Xwkbsrnk5qa9SdmgX9XM5aIgPDiAc-5GqB1mZhA411VktZiOGLpbGrPYb0EYI~2KB4XkNl0k~~6gZ8nMrATiZouXdjxfZ-4xKS25OEJNuBnduK80hshTUcJR7FiF9e-MThUioGzY8G~HsZFHQ-awGIgi91yhZXhOipuJGUf0w0quXqbiKuUk8zH3lSJ~T4GEDsn7j9GSmm6O4lxtH~Ker25i8DUBn3tOsD-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Border Control Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.230Z\",\"updated_at\":\"2022-02-28T13:59:37.976Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"E\"},{\"key\":\"9ec930241fc36b0027d4a03e876cd017761a746a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2397\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/TWi/dlx/sq0wXP6IQY7I6f6l/style_thumbnail_110.png?Expires=1658707200&Signature=QcRg-vFmOvsprMy3Nd~i7TmwdbhrbDxABSBIimJiaoc64j4kzWTyNMBu1Db92TmPtS12U5g189Hq2O3G~qPXsZl9AeHHbMWHPIqGFGCIcuN167Q1BOFiapG239GfE6nbUH0NlyUfV6UY3PvWIlKFSCkvG8kUa3txf76YdOal6QjKUuczkrlSXy9L8i5F5x~ulB4vushdmYUk46QQJtbR8~ABU6DBa38GJRpG8UJVcuBbK3w0GfA4uiIAShQiHNHTYPxFb4OhjNPunebwiCG-utwmw0jtAgmEetuZuFYLkQ0KPIcNipuCKnzx5mvBGpzjPdU6R1ob5T3osCQY4g2REg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text On Selected High Contrast\",\"description\":\"Text color for System items on selected state (high contrast)\",\"created_at\":\"2022-02-25T14:45:34.275Z\",\"updated_at\":\"2022-02-28T13:59:37.964Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"5\"},{\"key\":\"9daf0db65b15101fc2192ff8027b4d5c94fcc95a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1517\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/1A1/pUn/8jvAUGwSM1gFLzxU/style_thumbnail_115.png?Expires=1658707200&Signature=b~gHWQ5ot7bL9T1YiCm0KhEAkSdjPpZJVbMUt37VWryIvc-8teZUZafKkD30CCbWqZcbsjc3GfaKVdMBPyG2rJdk3atQHVeg~wp2Zmib3rlXhBIHqb4b0TgG0bdF81nKl9vcllJKRKX-TSs3hV-QpBacG9AOaP46Bfp2-iNkUxXLwHpr~MjloH5~vFeR~T61Ruch7rgT-OrAYQXBHZAexn3aUHiN3q4nBkPAG0UDuWg6hqMbA9Ppi-4WFN1cEj39FYSK7iyiNYtdxdZO8gnwt-o3DjGHXKFa0AQW5cJMZFCTzvgH8SRRPrpy6OtWGNOJ~RRK0oSlobrMO5FRxp4OYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Unavailable\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.303Z\",\"updated_at\":\"2022-02-28T13:59:37.958Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"[\"},{\"key\":\"9da9bee93c7360d21207457defc9d044c691d65d\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"17:790\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/gol/LwU/OAxJn4cD00ogCiLd/style_thumbnail_114.png?Expires=1658707200&Signature=PlI3YvIjDLLH0M4y0efD09ckIHwBOkqxkx7lKm99Hj6RPuOKiwMEtF-jzW9bb0Y5sLdwgy-qSC52g-P2mPi-htCDRYXfuaY9K7iP8yMcmnINxzp0J6NOleHcty~ZNHN9kkmJAxGY39~Nu14O1jTxo3CCtZIZKy2L5vj-W9~TIwU1CDU6jq2K4jyITbJnCMfqBX-1UBOATmsu5gtAaw6sHXCGyPhZjcNPJ5ZET~MEwdum2aGoOaWTZaAEB6UtU-ZZAk7o-jLJPHgcjQfGrin4rK4t5GiEt4HTkpmEBdJQV-yyI~g0MQ2ECi4M1iotsDMTIUqlxzEAsz5ptzkVJbN02Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Interactive/Interactive Focus\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.296Z\",\"updated_at\":\"2022-02-28T13:59:37.951Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"@\"},{\"key\":\"95f38199495dbdbc616a5427a4a4aa4db229cb7f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1525\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/lGi/0tw/97fJZlgvyRUVx0YN/style_thumbnail_51.png?Expires=1658707200&Signature=dLtoq~GI5PwZF8o5zYiprsDg7l~Z7Tn9Orebkt8uak8bckmCcmhNT7elrlDjgv8A65XPjHVn73VVOZ9cHiT7K1DE5NB49QvE4eFkO7gjmzu93OUBetW8UQc60wlRHsET3fq8UAqWrkGH3SD0k4LHghuoxzZ9YDqK3ecoUdomYJJ-iud0rJ30g2ueFvFVJNf1pLTH2HqpC~S9QqlFhR1JvsLyBMXPPnXlAodhkX1luhZydxtmAVZGmTeK4qJAjE2vKqAZHufLcdWRDrRMTC8lQq9Q00fbghsW7g~BE4a7OKWWpTaFAkLQRDGmfX2OtBPU2H-6XIGx9GXj~0KcyGp2Ew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text On Notification\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.944Z\",\"updated_at\":\"2022-02-28T13:59:37.926Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"c\"},{\"key\":\"940a86cbf458591ddf4b02af6c9a221c3015e76d\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1427\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/FLk/4Vc/peNTqiNsp6T4ZTvB/style_thumbnail_65.png?Expires=1658707200&Signature=UWClr-11K2Pouxo2psLr~S9lg9BAQR2SDS~rIwAvsFGIcEejtCYgy04rRhYeB~hhImGIhxF4G85xsrI3mnrydzm6fZpFr5XjmC50hJN341C1JdY6UlVOn3OIFhkgDDKUA5Sa5QgS5KocsIJZxJrKWeQyO8ELuUqW5JqhH41DZdzCQhvNRpEjbMthSipaseBQHFFX9qqq8I3dnqOq2iU3u3fpa4Prnd5jJZigCwmEAIafXrAQ7~aT61ZXTD4YVrCC90OuRF6rg7gtIJ2JPF-ICpg2S-V9yRRaczAjOh6TJT8S-dZBwcjZXgBNBxqsIVvPwrqMPGxN1QGadGaV7pYIJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Info\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.021Z\",\"updated_at\":\"2022-02-28T13:59:37.919Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"I\"},{\"key\":\"92e7416c09677279e65f8a69142d200172e692c3\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1434\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/ysW/Gp0/RXHjJcWnlcuj9nQs/style_thumbnail_9.png?Expires=1658707200&Signature=YWWg38y-QfZNAvWsk033U32ksWCMmJLCzl0WDpy0diybO2bUmimMFAmMWm7zxFJvr7qzypV3EPtFAfPKPkeEryM8jksVNl4JH4oG9s0zPbAzUYF~mPMDdsx0Rsn9qE0mwXjGwxTF4-mV6HMbaOSzCQzEyTq4~42cUkrcFEJSQUZlbEH9LMHzuIHaJBLzzifk5jfCHiCC2M08ckd6DqBhgldQ84ELeIUOvrNDFoqkrGCMk74I0lQdGKGUhIPtDpGq7Qzz7PW0dTHNmkCRv2fnoRpvf1AQJjo45sQ8-EZPs0sdJt6Z2SV5B9QFlpaNC0yUB48CHCZb3lZVgtD-g13HIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Success Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.739Z\",\"updated_at\":\"2022-02-28T13:59:37.905Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"P\"},{\"key\":\"91d9d70444271282cf7439f4ec6d7414673e101d\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2381\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0OG/hF3/HZeJS4BHwWdsvBlm/style_thumbnail_89.png?Expires=1658707200&Signature=Ymf2UA1SpVVYnu8l979t-RrOrNGSP-zzFJlS7LB3laTLxNaiF7OYIV3B0qqGwcovT8vbzskgV4AQY1TtxRzCO1QETeldSjv0zdO-3TM3Rej0fPvzqTPUY434fDH7Z2DzZrDpt9HazRI7XICxkm~7~UZ00XZrnNgdftjceClvOwSUDT2pHLdZb1uIFqJHdXlQ-klv6I4ILZ4fCdlHyR5IHEVX-Sl3ioDYFx4VUG6WiFWMurybfI12gLa81Jm3B69kfVXuinMnYdl5VjO15d0j5aA59IKpI~sIh1AFQBU5rEg1FETtmhhftnHXaXLF3pKXaz8Bc~3hVCNWev7mLXaP8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary\",\"description\":\"Secondary text and icon color\",\"created_at\":\"2022-02-25T14:45:34.162Z\",\"updated_at\":\"2022-02-28T13:59:37.898Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"/\"},{\"key\":\"9150199360074aaba9324b8a55d822519e18aa97\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1524\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Sp7/1km/x4YTyEuraq5FXqeY/style_thumbnail_54.png?Expires=1658707200&Signature=W0qfxS25bwia3UWmDB~V69O6F59lvNmMOdIUj4CuhV9pwm8E7awDWDhqBaCvr~G-63nYfHg5~E5ZEaUfRBSXOx-6pbGf6M8RbFyHMN-snpId99qg7Y-FKBUBY86yEMMyJj2ul8btynPG7FGoabHB7w~y6HYDkrJRhRRUvM5yaY-Wv~JZFnTDrJZDOrwgnlg8NylZeCV1tK5VdP22Lftjm-SR8DJDefQZtJd-PmjWIkBqe8vkDS7SjaJzC1wd2RlOa8RsYCB8Zr-LFc5fB8hAUXojDda06EgPYv-yvhCBOAbuK45mdXuves0XcgIjPoDRlmb7VZg02RsDvE5eVH0pOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Text/Text Neutral\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:33.961Z\",\"updated_at\":\"2022-02-28T13:59:37.892Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"b\"},{\"key\":\"89db9a0f00ec24654902a882493c614afeed7b85\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1432\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/W9Y/Tz5/TvYMu2S3EEJkPDCy/style_thumbnail_61.png?Expires=1658707200&Signature=Sq9fg5k~IzpmUJz4g2Du8OTYPgx0MiPol3M1dLgNdZFKl7Lqp-kbkTNgJym4iTzoQqwErElIfrGUZtLXGmQUz0XFKmjiS-tuhD1BBzkBSgsK8I231c2TlYw9JCxSFJx9O2K5FeaLhXSfLY07uqz1TNvMbvNyzEXfGdsm1dSqJnYedv~A8IAF3yiafFs3kxHz4UwhRoBAMKiogmWHjfa6NEs0NuT-PN8cEQt9Fibgs7drBMZU9p-kav7lDrxDTxwNY20cEK7x69LOnyG5lsJJS~v5u8O7O~MGA0KG2UoDyacaJ-i7Ws3IfDRSQ-ygZTbO8nCZwk0TKcSQo86~Jl19Kg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Mid Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.003Z\",\"updated_at\":\"2022-02-28T13:59:37.865Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"N\"},{\"key\":\"849ee15caebf1fcfad9462c682e874adc911066c\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2369\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vtW/3Xn/2ByyAsphGW0KX2GA/style_thumbnail_73.png?Expires=1658707200&Signature=UM50EdrxxazH47OW8WtdYiHsUI7Eo8sEpfq07f-r6-VccJAsrFTHQnAqRG0N0i0o8tfBSVqzPoIZqQsj1UJwSu6poW62Y12ccF455A9bQldCXwi4OvxZC1LsrEIXudEg15Cr6utICX1mPxcmqbrDtUkN1-gPhhTuRmsq7Z5EhhKN-8Gncfd-Of9hdS98AdEzyOEean7DLvrigVrWdirUhbUEZmbpvDJpuf5lMZ3QjLzbdgFTB4kR2prFF1a7UO6VHjjgWmbgEq1unohfZ-6yfyaQab9tYEsmywGyWF0K2EJ4yzMTBJ6zpZPkC2~~pKAe7x9N6irpOa3wK3n5Lx87dw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background App\",\"description\":\"Application body background\",\"created_at\":\"2022-02-25T14:45:34.062Z\",\"updated_at\":\"2022-02-28T13:59:37.858Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"\\\"\"},{\"key\":\"821e09eadc1a11a5fed34fdcd72d8cd8c6a5eea3\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"17:738\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/rXE/6PU/5WhCWN406NEidLGZ/style_thumbnail_81.png?Expires=1658707200&Signature=D~4TkUmY6yyF~jd9neyxZl12hDFB-mJc58dIgv3K9hxKTZr-U3Yto5hTpmP8NwBJQA46M7Ls1V1wZwYcY0HkTXBxi6ZYbKF1~afbWZi6LIZAXjpdcEUAArwU9l82i5BPvQf~Gx2u71uLuqnwo~obFR6k3NqY-WZ7Y6a8ZW9BA6zYFCp~e5GbMpLcL7MN7ZCoAjkw6RmghP8VAtuJe6GRW2vyV1tgO-gdvrgDmQ8jg~Byh4PUaZVcU~r5VtL9AIREo1d2YShAnPjYBT3G5gIX0yu6y9aYKSZwl55nmMZ1Vlkx98TYU9JOIbpemIT-HnktNGl4nYrDvXvcfoh4c0Dnwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Regular\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.105Z\",\"updated_at\":\"2022-02-28T13:59:37.852Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"6\"},{\"key\":\"7eabaf8ca6a4fb2a2593221f09c2aa40bbde8426\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1483\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/AFZ/mv6/YYPhdGzpnwQetYZZ/style_thumbnail_72.png?Expires=1658707200&Signature=E5Y3K1xialSK25kpnJozrtoBSCwnRZbI3xzKiFUFyTIOHxQMAZ3IH6K6oQIoctbaKLoN3TgPHishr~TKJJzah2yyJmcc7yd667f28B075KDjkr9JpxoPlBFfTmN2QPMjMmFy9PIwTsdk1ag7o7PI1foSwltKUtu5AU8KDkPpRscHfPK7N0apgQbc~U5QjhSLY4gGgHb1-MDl4~MIU36FEfMBuJTS6MJKpFwOk-g8sGBuQK17fqW5-R5tBuuPvh8agDJp4TlxwBCMkni5NQRawa1GqWaK0nR~CSW1k8U6MAUGYInFJ8W437N~t~UFL14NcV8KDeDkE~WXIuwjbXDX1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Info Low Contrast\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.056Z\",\"updated_at\":\"2022-02-28T13:59:37.836Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"S\"},{\"key\":\"79b18797f39cb1863664b854adeb891fff78999f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1516\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/vab/dBc/QYlfOdgbJNYq9w9q/style_thumbnail_80.png?Expires=1658707200&Signature=hIlVAkwBdCSfocyk~sRufPNTO4wNelgYGfhup9ydKVuAMBofX9Sg3y1el1HRodgb-c7TEWfE1rlhKCEyEcENuS~vIATUkOqRxnfL8id~HfYvfzJCoOLiut1JRpozEBRxTJgmnN4RxTw09q5e8eKyC3Nwf4pqbO1s-RGTn1OnaKmVz8yXU6SC9eOQ0qMVa0eQ8nqElx1NuUyV80tDna5MfkN76-G1Sgvp0qRA0bmVHt2atdiof7dbnSMo52-LOmNe9ynR9rgg8tu9r8l6Rt4WeBV7PYWKJGGgD~Zw~Q6RfvP0ppYcgtEjTKILcpNj1DGw8npRA5zHs8Bw35KYlR5dMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Status Anomaly\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.099Z\",\"updated_at\":\"2022-02-28T13:59:37.817Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"Z\"},{\"key\":\"784e37fafab1579595ad655ddbb5f055e3f8281f\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"21:448\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/uD2/pQ6/OoyvFX51PPyneK0z/style_thumbnail_78.png?Expires=1658707200&Signature=LJJSqhtQcB68eGTiF4bWF7L800wilbN21qRR-k6jZSRMWv5NssgRbi6PWYlosQW2IHpgHQjTMFZBvDSa3cDYxTid~LNTpi0QEwr9x35pLBoemAJtfcmIj-FL5nf6BR7E9gognt0iBdc8PSwHB7CzwS1uUZIzFbgptNLpcVPvXbJwZQbB0APdfvf02Xus~vIQyOJfHLTiL2Q-28h~ew83TOHVLZg9oKFsqbMBbmJodxhPFopge~MLyAAU-PWeYAOCURKx8c50HMBdMUnaesJj-gYOLFTILzh0iJabeoJgIRFNY0dVtYjot51J5lSPlVLWBqfHwPwLCUc6WUmuXZB~8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.087Z\",\"updated_at\":\"2022-02-28T13:59:37.810Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"C\"},{\"key\":\"6958d47026f3b4daaa44a3c9ddb873ebcc5c43da\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2373\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/0EX/a1p/2gGRGRFs1QUY3lhr/style_thumbnail_77.png?Expires=1658707200&Signature=HS9VnNP08YFZjFd4lrGiJmEbE-xwiswThj850OxpUOcZNw2FsPOXa-~jju4p79w5LVFvxZ2HHQJcvLeWwRkeGjkdnIxCoBSMPjkA5BdFfsW2e9UB2b~L35MBWOWyXNUopcjWrDJLfah5ioQnBv8llyA7YbpatXo~0EksoreDg57dkwvtA~uiiZH-mR991pzkbIx1fmvvK-pFo97LiGbfPTrY2r311sNL2juor5WSxX1lxm5qp9~w~-OS~OYiUyW8hGIjJmfZChvcH87f7A1txpZDW3EZxcSfei6djyj8U-cnC3-FfuWPW~-H5e8aX1D~KwaWdJYYm4GL19xNAmRO0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Background/Background Hover\",\"description\":\"Background color for System items on hover state\",\"created_at\":\"2022-02-25T14:45:34.082Z\",\"updated_at\":\"2022-02-28T13:59:37.768Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"&\"},{\"key\":\"5ef38ee02ae56cd3baa7bb23ed3ec879ebadd1e8\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"17:739\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/drW/lR4/5KssRAOrElTULUKK/style_thumbnail_67.png?Expires=1658707200&Signature=FEMcAAWflIBNGqIJ5rQRnqe4AhF2PudOdQhFDOA~2b-mTdMszkXya3oOKeGtBMqOpgXBDNRZ-36V7WCKjh6~57hxFRb0axQWuJgf~MmoLbL4qmCXmsyFNmZKQporfetrTsTkRPrQLMjB3~H4RgkJDhFqHgYukk9a~4QJ~c2HH~QsXiAz5ZmG2hK65XskV3rgea6lxjQ1SxQ4eGqDpr4xay1bNgEjp3GSGsVDCTPAP7MmBl5EqKOfqWMrcKG-LrzUv~QdEf7DR3GPjMeLASFHNKkfA4GRIjszQigQF~VQXjurZIAG-KwfJ7vQF0Dppz8tUhWAFpFXfn4ZXdu-dNm9Ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Subtle\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.031Z\",\"updated_at\":\"2022-02-28T13:59:37.734Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"7\"},{\"key\":\"5e4afb5695c4a9854887b8c04d8a805f5357d7f0\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"13:2382\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/VCv/lCL/g1bCfOk7bLEb81nC/style_thumbnail_88.png?Expires=1658707200&Signature=K8PC39YWm1RSGZme8tey0PfNsXBc8Al16etneBWhgGqNVsefSBmRloJTkWF6QtgfbKNArFQL7tvimlvsq7DFJS1wcpXFAkEyT3-WPte~4dSU~YArVDj7y~TRneUdAJfCQL2n6nqQiS8JJ2lnixb~AtGhmc0j9jt3aqdMe3mAGbToPG1620N3~keZnoOTHWFygyhXIGEqHh6OSJNPjmjk82~mi--E1l2OwS-DzduH9-1pufI9YbgRWf6NzB26~and66uwjDOLL8zB8RNPrjNaZ5moxwfX3WQqaFERlNbKJZoWKwlpr9J3E3z5gtRM~NXogPax2VkfIMQ9bKCiBSjm7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Text/Text Secondary Inverted\",\"description\":\"Inverted Secondary text and icon color\",\"created_at\":\"2022-02-25T14:45:34.157Z\",\"updated_at\":\"2022-02-28T13:59:37.728Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"0\"},{\"key\":\"56fece13f083666cde3d6300b39ba3c53ec51a11\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"20:526\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/Veh/Z3W/8Wc4EHsdR5jibLTp/style_thumbnail_86.png?Expires=1658707200&Signature=UileeYoZ1YsopvNa-Gi62HlSeedQzav9sGCYsId43QgU3dTzfX2w~ZS3fIR2TQQ1hFMEhDMozNDf30UE~cffxNE8sdohhGHmTNJWJ-~i~QL6aKiviN-Gi3Orf3u7lod661xn7ZTzg7Tt1qgANMg43S60hhIrahkkjOntrUqS4vDQNQyW1vVQxPROTn3yRsPmN9En53BXAbDoORyHqeoaZssjSt9zjNvunlWtZZaqQUNrQ9BBGBtPVXOEbDXGh0wvOTRqjIE6N4uO95k~jukbJYzXKsRSFTG0D~0Qh6gnyEbsPh1olrySzTzEd0iOJpKCzDBnsDedqfLyeD4xTyh1iQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Background Input Enabled\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.131Z\",\"updated_at\":\"2022-02-28T13:59:37.694Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"A\"},{\"key\":\"564730fe54614022451c217022215ec8aca8a312\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"21:454\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/UrG/VyI/SQfV26J8A5W9AaV6/style_thumbnail_113.png?Expires=1658707200&Signature=TzRdNpLjuQFEMRH3qXVcMMzvGKoDAhlmxRlT6NvIr1iyyynmYd4OJxYrEOjl0DzZGRsQdvFTWvqqOIDojFC23RRdVTwgPaT6hvDK39DrEXDeHYjku64oY~PvMWOBIbaz928opuW4lLoEjNZ3imjZ3p5DTdzGjI~Dp4FxrP9nfkoNCf9-zibK5BJjyV5s35M00XvwAagS5iXX-FS3kI8WZQh4c65R6Yosr6zdfffdFni2XMOcHkbv5mjhGxKEb~LeqEcHZkBurgHYnKOEhR0DjWsJDu19MxzsecQP3Wxu0s0s4C5u24Zq4CD8GouhrYwUrkxD4cKuo9SoBMIpwcVtEw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Forms/Foreground On Control Selected\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.290Z\",\"updated_at\":\"2022-02-28T13:59:37.687Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"D\"},{\"key\":\"55127373faa66ee6563815b9adafb1727984e9a5\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"17:740\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/nJY/Y8F/rMJb3Vd9TST7qwQt/style_thumbnail_74.png?Expires=1658707200&Signature=V~I6G1dSG7~jFgqwIuPiqAxeFsiqw38R6t7T7AIomKYu0nSBUCxY1tJ5~DVcsbd3JKMji6pqGe73qnH7Pc5XhFoL9paVGL0K6lcCAlOJ9Pi0IuixssCp1h1jbo68IRn0YhqmMY0pI4G5bRtATk93t3LiE3wp5Lk48YKn4wW6nkmi11wm0EcsQZajpy9ZM7bomugiFWukpLQYarVoB9UPZ4MNZAaD5xbjKmT9gQOysXdPTspxSGvnIIdoT-rrWVpzstyDvpNkoqqqBtK7yBWm0Lu--3OpFNFVmUXccJoPbOEF1G2AMBMSi2qPjF8TKttojrup6Xmc58rMeX-OahAbQQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"System/Borders/Border Strong\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.068Z\",\"updated_at\":\"2022-02-28T13:59:37.679Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"8\"},{\"key\":\"4b099c526d593da7a449c01588e9b0b9377aea1a\",\"file_key\":\"RsXZaTPG4VeIZTSjQPSosc\",\"node_id\":\"27:1430\",\"style_type\":\"FILL\",\"thumbnail_url\":\"https://s3-alpha-sig.figma.com/checkpoints/hj0/Qko/LMeobHaXIKXp2wfe/style_thumbnail_63.png?Expires=1658707200&Signature=gozMQHtO-0wGvgueZV4qDgzIaVt0-p9Od0o7~Pkyq0UKvL47MK5vWJsJSTkKSjBYLx0BSndhy14IkfaoCO-RMQIrvsY1AHRqoOq6kwrMhlCAoa2CqL3yn4k6CQrSn~QzmUZFSNb2PmRSVKXejjM5CWc4oYjUVXQDqwTfJKeRrj8O8pKz4Y~-eszcra7TNIBZt6Uqz8sYXzyJnWVvP91cQzP4i-~uAfn9HKwdqs7Ib-5ZlSdu5bRHVRl1nIDLk41ta98QdwMO7kNNCg464tkWYvWc0~6Y7Ey0Me9aM10~HCf1u3p6xDCfUkhfJ8U~U9Cjul22UqZ~02kf6o~pDRcBRA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\",\"name\":\"Attention/Background/Notification Warning\",\"description\":\"\",\"created_at\":\"2022-02-25T14:45:34.012Z\",\"updated_at\":\"2022-02-28T13:59:37.658Z\",\"user\":{\"id\":\"920257553178356915\",\"handle\":\"Alberto Roldán\",\"img_url\":\"https://s3-alpha.figma.com/profile/cd52b94a-f124-48b0-bf5d-c104cd97207f\"},\"sort_position\":\"L\"}]},\"i18n\":null}");

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

/***/ "./src/plugin/color-linter/colorLinter.ts":
/*!************************************************!*\
  !*** ./src/plugin/color-linter/colorLinter.ts ***!
  \************************************************/
/*! exports provided: getColorTokens, getColorStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorTokens", function() { return getColorTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorStats", function() { return getColorStats; });
/* harmony import */ var uuid_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid-random */ "./node_modules/uuid-random/index.js");
/* harmony import */ var uuid_random__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_random__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/components/utils */ "./src/app/components/utils.ts");
/* harmony import */ var _data_light_mode_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/light-mode.json */ "./data/light-mode.json");
var _data_light_mode_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/light-mode.json */ "./data/light-mode.json", 1);
/* harmony import */ var _data_dark_mode_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/dark-mode.json */ "./data/dark-mode.json");
var _data_dark_mode_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/dark-mode.json */ "./data/dark-mode.json", 1);
/* harmony import */ var _figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @figma-plugin/helpers */ "./node_modules/@figma-plugin/helpers/dist/index.js");
/* harmony import */ var _figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_4__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
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
        return Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_1__["rgbToHex"])(colorInRGB.r, colorInRGB.g, colorInRGB.b);
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
    let lightThemeTokens = yield Promise.all(_data_light_mode_json__WEBPACK_IMPORTED_MODULE_2__.meta.styles.map((style) => __awaiter(void 0, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, style), { theme: "light" });
    })));
    let darkThemeTokens = yield Promise.all(_data_dark_mode_json__WEBPACK_IMPORTED_MODULE_3__.meta.styles.map((style) => __awaiter(void 0, void 0, void 0, function* () {
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
            colorStyleWithHex = Object.assign(Object.assign({}, style), { hex: Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_1__["rgbToHex"])(tempRectangle.fills[0].color.r, tempRectangle.fills[0].color.g, tempRectangle.fills[0].color.b) });
        }
        else {
            colorStyleWithHex = Object.assign(Object.assign({}, style), { hex: "None" });
        }
        return colorStyleWithHex;
    })));
    tempRectangle.remove();
    return colorTokens;
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
        output = output.filter((layer) => Object(_figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_4__["isVisibleNode"])(layer));
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


/***/ }),

/***/ "./src/plugin/controller.ts":
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_creator_tableCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-creator/tableCreator */ "./src/plugin/table-creator/tableCreator.ts");
/* harmony import */ var _language_linter_languageLinter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language-linter/languageLinter */ "./src/plugin/language-linter/languageLinter.ts");
/* harmony import */ var _color_linter_colorLinter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-linter/colorLinter */ "./src/plugin/color-linter/colorLinter.ts");
/* harmony import */ var _theme_switcher_themeSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-switcher/themeSwitcher */ "./src/plugin/theme-switcher/themeSwitcher.ts");
/* harmony import */ var _app_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/components/utils */ "./src/app/components/utils.ts");
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
        Object(_theme_switcher_themeSwitcher__WEBPACK_IMPORTED_MODULE_3__["switchToTheme"])("light", true, customEventData);
    },
    "theme-switcher-to-dark": () => {
        Object(_theme_switcher_themeSwitcher__WEBPACK_IMPORTED_MODULE_3__["switchToTheme"])("dark", true, customEventData);
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
                Object(_language_linter_languageLinter__WEBPACK_IMPORTED_MODULE_1__["sendCurrentTextSelection"])();
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
        Object(_table_creator_tableCreator__WEBPACK_IMPORTED_MODULE_0__["createTable"])(msg, customEventData);
    }
    if (msg.type === "run-language-linter") {
        Object(_language_linter_languageLinter__WEBPACK_IMPORTED_MODULE_1__["sendCurrentTextSelection"])();
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
        Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_4__["selectAndZoomToLayer"])(msg.activeNodeId);
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
        const colorStats = yield Object(_color_linter_colorLinter__WEBPACK_IMPORTED_MODULE_2__["getColorStats"])();
        figma.ui.postMessage({
            type: "color-stats",
            message: Object.assign(Object.assign({}, customEventData), { colorStats: colorStats, colorTokens: yield Object(_color_linter_colorLinter__WEBPACK_IMPORTED_MODULE_2__["getColorTokens"])(false), selectionMade: figma.currentPage.selection.length > 0 }),
        });
    });
    if (msg.type === "run-color-linter") {
        sendColorData();
    }
    if (msg.type === "select-layer") {
        Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_4__["selectAndZoomToLayer"])(msg.layerId);
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
        Object(_theme_switcher_themeSwitcher__WEBPACK_IMPORTED_MODULE_3__["switchToTheme"])("dark", false, customEventData);
    }
    if (msg.type === "theme-switcher-to-light") {
        Object(_theme_switcher_themeSwitcher__WEBPACK_IMPORTED_MODULE_3__["switchToTheme"])("light", false, customEventData);
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

/***/ "./src/plugin/language-linter/languageLinter.ts":
/*!******************************************************!*\
  !*** ./src/plugin/language-linter/languageLinter.ts ***!
  \******************************************************/
/*! exports provided: sendCurrentTextSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCurrentTextSelection", function() { return sendCurrentTextSelection; });
/* harmony import */ var _figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @figma-plugin/helpers */ "./node_modules/@figma-plugin/helpers/dist/index.js");
/* harmony import */ var _figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__);

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
                Object(_figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__["isVisibleNode"])(layer) && pushTextLayerToArray(layer, textLayers);
            });
        }
        else if (selectedLayer.type === "TEXT") {
            Object(_figma_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__["isVisibleNode"])(selectedLayer) &&
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


/***/ }),

/***/ "./src/plugin/table-creator/tableCreator.ts":
/*!**************************************************!*\
  !*** ./src/plugin/table-creator/tableCreator.ts ***!
  \**************************************************/
/*! exports provided: createTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTable", function() { return createTable; });
/* harmony import */ var _app_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/components/utils */ "./src/app/components/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const createTable = (msg, customEventData) => __awaiter(void 0, void 0, void 0, function* () {
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
    const hideSortControls = (headerCell) => {
        const arrowsLayer = headerCell.findOne((child) => child.name === "Arrows");
        arrowsLayer.visible = false;
    };
    [...Array(msg.rows + 1).keys()].map((rowIndex) => {
        tableRow.layoutMode = "HORIZONTAL";
        tableRow.counterAxisSizingMode = "AUTO";
        tableRow.name = "Row";
        msg.columnConfiguration.forEach((col) => __awaiter(void 0, void 0, void 0, function* () {
            let { name: colName, alignment: colAlignment, cellType: colCellType, multiValue: colMultiValue, sortControls: colSortControls, } = col;
            colAlignment = Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_0__["toCapitalizedString"])(colAlignment);
            colCellType = Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_0__["toCapitalizedString"])(colCellType);
            colMultiValue = Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_0__["toCapitalizedString"])(colMultiValue);
            if (rowIndex === 0) {
                let thisHeaderCell = headerCell.createInstance();
                let textNodeOfHeaderCell = thisHeaderCell.children[0]
                    .children[0];
                const shouldHaveHeaderText = colCellType !== "Favorite" && colCellType !== "Actions";
                const cellTypeIsActions = colCellType === "Actions";
                const hasCustomColName = colName.length;
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
                    hideSortControls(thisHeaderCell);
                    setHeaderTextCharacters(" ");
                }
                thisHeaderCell.setProperties({ Alignment: colAlignment });
                const determineHeaderCellWidth = () => {
                    if (msg.isMultiValue)
                        return 120;
                    if (colCellType === "Entity")
                        return 102;
                    if (colCellType === "User")
                        return 120;
                    if (!shouldHaveHeaderText)
                        return 50;
                    if (shouldHaveHeaderText && colSortControls)
                        return 90;
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
                if (shouldHaveHeaderText && !colSortControls) {
                    thisHeaderCell.counterAxisSizingMode = "AUTO";
                }
                tableRow.appendChild(thisHeaderCell);
                const handleSortControls = () => {
                    if (colCellType === "Actions")
                        hideSortControls(thisHeaderCell);
                    if (!colSortControls)
                        hideSortControls(thisHeaderCell);
                };
                handleSortControls();
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
                const tableMultiValue = Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_0__["toCapitalizedString"])(msg.isMultiValue);
                colCellType = Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_0__["toCapitalizedString"])(colCellType);
                colMultiValue = Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_0__["toCapitalizedString"])(colMultiValue);
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


/***/ }),

/***/ "./src/plugin/theme-switcher/themeSwitcher.ts":
/*!****************************************************!*\
  !*** ./src/plugin/theme-switcher/themeSwitcher.ts ***!
  \****************************************************/
/*! exports provided: switchToTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchToTheme", function() { return switchToTheme; });
/* harmony import */ var _color_linter_colorLinter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color-linter/colorLinter */ "./src/plugin/color-linter/colorLinter.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let themeSwitchedNotification = undefined;
const switchToTheme = (theme, closeAfterRun = false, customEventData) => __awaiter(void 0, void 0, void 0, function* () {
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
    const colorStats = yield Object(_color_linter_colorLinter__WEBPACK_IMPORTED_MODULE_0__["getColorStats"])(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvYXBwbHlNYXRyaXhUb1BvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2Nsb25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2NvbnZlcnRDb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9maW5kTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRBbGxGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRCb3VuZGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvZ2V0Q1NTU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldE5vZGVJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRQYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldFJlbGF0aXZlUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaGFzQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNQYXJ0T2ZJbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1BhcnRPZk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNUeXBlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1Zpc2libGVOb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2xvYWRGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9sb2FkVW5pcXVlRm9udHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvbm9kZVRvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3BhcnNlVGV4dFN0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3NldENoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvdG9wTGV2ZWxGcmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jbG9uZURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcUJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcVdpdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdHJpeC1pbnZlcnNlL21hdHJpeC1pbnZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkLXJhbmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vY29sb3ItbGludGVyL2NvbG9yTGludGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL2xhbmd1YWdlLWxpbnRlci9sYW5ndWFnZUxpbnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3RhYmxlLWNyZWF0b3IvdGFibGVDcmVhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vdGhlbWUtc3dpdGNoZXIvdGhlbWVTd2l0Y2hlci50cyIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FB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QTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUMxTWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDWmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QWdDLG9OQUFvTjtBQUNwUCxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7O0FDaEZELGUiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFwcGx5TWF0cml4VG9Qb2ludCA9IGFwcGx5TWF0cml4VG9Qb2ludDtcblxuZnVuY3Rpb24gYXBwbHlNYXRyaXhUb1BvaW50KG1hdHJpeCwgcG9pbnQpIHtcbiAgcmV0dXJuIFtwb2ludFswXSAqIG1hdHJpeFswXVswXSArIHBvaW50WzFdICogbWF0cml4WzBdWzFdICsgbWF0cml4WzBdWzJdLCBwb2ludFswXSAqIG1hdHJpeFsxXVswXSArIHBvaW50WzFdICogbWF0cml4WzFdWzFdICsgbWF0cml4WzFdWzJdXTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNsb25lO1xuXG4vKipcbiAqICB0aGlzIGZ1bmN0aW9uIHJldHVybnMgY2xvbmUgdGhlIG9iamVjdFxuICovXG5mdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdudW1iZXInIHx8IHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdib29sZWFuJyB8fCB0eXBlID09PSAnc3ltYm9sJyB8fCB2YWwgPT09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKHZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4gdmFsLm1hcChjbG9uZSk7XG4gICAgfSBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbyA9IHt9O1xuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWwpIHtcbiAgICAgICAgb1trZXldID0gY2xvbmUodmFsW2tleV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gIH1cblxuICB0aHJvdyAndW5rbm93bic7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZpZ21hUkdCVG9XZWJSR0IgPSBmaWdtYVJHQlRvV2ViUkdCO1xuZXhwb3J0cy53ZWJSR0JUb0ZpZ21hUkdCID0gd2ViUkdCVG9GaWdtYVJHQjtcbmV4cG9ydHMuZmlnbWFSR0JUb0hleCA9IGZpZ21hUkdCVG9IZXg7XG5leHBvcnRzLmhleFRvRmlnbWFSR0IgPSBoZXhUb0ZpZ21hUkdCO1xuY29uc3QgbmFtZXNSR0IgPSBbJ3InLCAnZycsICdiJ107XG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gY29udmVydHMgZmlnbWEgY29sb3IgdG8gUkdCKEEpIChhcnJheSlcbiAqL1xuLy8gZmlnbWFSR0JUb1dlYlJHQih7cjogMC44ODc0OTk5ODgwNzkwNzEsIGc6IDAuMDcwNTg4MjM4NTM3MzExNTUsIGI6IDAuMDY2NTYyNDczNzczOTU2M30pXG4vLz0+IFsyMjYsIDE4LCAxN11cblxuZnVuY3Rpb24gZmlnbWFSR0JUb1dlYlJHQihjb2xvcikge1xuICBjb25zdCByZ2IgPSBbXTtcbiAgbmFtZXNSR0IuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgIHJnYltpXSA9IE1hdGgucm91bmQoY29sb3JbZV0gKiAyNTUpO1xuICB9KTtcbiAgaWYgKGNvbG9yWydhJ10gIT09IHVuZGVmaW5lZCkgcmdiWzNdID0gTWF0aC5yb3VuZChjb2xvclsnYSddICogMTAwKSAvIDEwMDtcbiAgcmV0dXJuIHJnYjtcbn1cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBjb252ZXJ0cyBSR0IoQSkgY29sb3IgKGFycmF5KSB0byBmaWdtYSBjb2xvclxuICovXG4vLyB3ZWJSR0JUb0ZpZ21hUkdCKFsyMjYsIDE4LCAxN10pXG4vLz0+IHtyOiAwLjg4NjI3NDUwOTgwMzkyMTUsIGc6IDAuMDcwNTg4MjM1Mjk0MTE3NjUsIGI6IDAuMDY2NjY2NjY2NjY2NjY2Njd9XG5cblxuZnVuY3Rpb24gd2ViUkdCVG9GaWdtYVJHQihjb2xvcikge1xuICBjb25zdCByZ2IgPSB7fTtcbiAgbmFtZXNSR0IuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgIHJnYltlXSA9IGNvbG9yW2ldIC8gMjU1O1xuICB9KTtcbiAgaWYgKGNvbG9yWzNdICE9PSB1bmRlZmluZWQpIHJnYlsnYSddID0gY29sb3JbM107XG4gIHJldHVybiByZ2I7XG59XG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gY29udmVydHMgZmlnbWEgY29sb3IgdG8gSEVYIChzdHJpbmcpXG4gKi9cbi8vIGZpZ21hUkdCVG9IZXgoeyByOiAwLCBnOiAwLjEsIGI6IDEgfSlcbi8vPT4gIzAwMWFmZlxuXG5cbmZ1bmN0aW9uIGZpZ21hUkdCVG9IZXgoY29sb3IpIHtcbiAgbGV0IGhleCA9ICcjJztcbiAgY29uc3QgcmdiID0gZmlnbWFSR0JUb1dlYlJHQihjb2xvcik7XG4gIGhleCArPSAoKDEgPDwgMjQpICsgKHJnYlswXSA8PCAxNikgKyAocmdiWzFdIDw8IDgpICsgcmdiWzJdKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG5cbiAgaWYgKHJnYlszXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgYSA9IE1hdGgucm91bmQocmdiWzNdICogMjU1KS50b1N0cmluZygxNik7XG5cbiAgICBpZiAoYS5sZW5ndGggPT0gMSkge1xuICAgICAgaGV4ICs9ICcwJyArIGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhICE9PSAnZmYnKSBoZXggKz0gYTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaGV4O1xufVxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGNvbnZlcnRzIEhFWCBjb2xvciAoc3RyaW5nKSB0byBmaWdtYSBjb2xvclxuICovXG4vLyBoZXhUb0ZpZ21hUkdCKCMwMDFhZmYpXG4vLz0+IHsgcjogMCwgZzogMC4xMDE5NjA3ODQzMTM3MjU0OSwgYjogMSB9XG5cblxuZnVuY3Rpb24gaGV4VG9GaWdtYVJHQihjb2xvcikge1xuICBsZXQgb3BhY2l0eSA9ICcnO1xuICBjb2xvciA9IGNvbG9yLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChjb2xvclswXSA9PT0gJyMnKSBjb2xvciA9IGNvbG9yLnNsaWNlKDEpO1xuXG4gIGlmIChjb2xvci5sZW5ndGggPT09IDMpIHtcbiAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UoLyguKSguKSguKT8vZywgJyQxJDEkMiQyJDMkMycpO1xuICB9IGVsc2UgaWYgKGNvbG9yLmxlbmd0aCA9PT0gOCkge1xuICAgIGNvbnN0IGFyciA9IGNvbG9yLm1hdGNoKC8oLns2fSkoLnsyfSkvKTtcbiAgICBjb2xvciA9IGFyclsxXTtcbiAgICBvcGFjaXR5ID0gYXJyWzJdO1xuICB9XG5cbiAgY29uc3QgbnVtID0gcGFyc2VJbnQoY29sb3IsIDE2KTtcbiAgY29uc3QgcmdiID0gW251bSA+PiAxNiwgbnVtID4+IDggJiAyNTUsIG51bSAmIDI1NV07XG5cbiAgaWYgKG9wYWNpdHkpIHtcbiAgICByZ2IucHVzaChwYXJzZUludChvcGFjaXR5LCAxNikgLyAyNTUpO1xuICAgIHJldHVybiB3ZWJSR0JUb0ZpZ21hUkdCKHJnYik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHdlYlJHQlRvRmlnbWFSR0IocmdiKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5leHRyYWN0SW1hZ2VDcm9wUGFyYW1zID0gZXh0cmFjdEltYWdlQ3JvcFBhcmFtcztcblxudmFyIF9tYXRyaXhJbnZlcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibWF0cml4LWludmVyc2VcIikpO1xuXG52YXIgX2FwcGx5TWF0cml4VG9Qb2ludCA9IHJlcXVpcmUoXCIuL2FwcGx5TWF0cml4VG9Qb2ludFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjYW4gZXh0cmFjdCB0aGUgaW1hZ2UgY3JvcCByb3RhdGlvbiwgc2NhbGUgKC9zaXplKSBhbmQgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHNoYXBlV2lkdGhcbiAqIEBwYXJhbSBzaGFwZUhlaWdodFxuICogQHBhcmFtIHRcbiAqL1xuZnVuY3Rpb24gZXh0cmFjdEltYWdlQ3JvcFBhcmFtcyhzaGFwZVdpZHRoLCBzaGFwZUhlaWdodCwgdCkge1xuICBjb25zdCB0cmFuc2Zvcm0gPSB0Lmxlbmd0aCA9PT0gMiA/IFsuLi50LCBbMCwgMCwgMV1dIDogWy4uLnRdO1xuICBjb25zdCBteEludiA9ICgwLCBfbWF0cml4SW52ZXJzZS5kZWZhdWx0KSh0cmFuc2Zvcm0pO1xuICBjb25zdCBwb2ludHMgPSBbWzAsIDBdLCBbMSwgMF0sIFsxLCAxXSwgWzAsIDFdXS5tYXAocCA9PiAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG14SW52LCBwKSk7XG4gIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihwb2ludHNbMV1bMV0gLSBwb2ludHNbMF1bMV0sIHBvaW50c1sxXVswXSAtIHBvaW50c1swXVswXSk7XG4gIGNvbnN0IHN4ID0gTWF0aC5zcXJ0KE1hdGgucG93KHBvaW50c1sxXVswXSAtIHBvaW50c1swXVswXSwgMikgKyBNYXRoLnBvdyhwb2ludHNbMV1bMV0gLSBwb2ludHNbMF1bMV0sIDIpKTtcbiAgY29uc3Qgc3kgPSBNYXRoLnNxcnQoTWF0aC5wb3cocG9pbnRzWzJdWzBdIC0gcG9pbnRzWzFdWzBdLCAyKSArIE1hdGgucG93KHBvaW50c1syXVsxXSAtIHBvaW50c1sxXVsxXSwgMikpO1xuICByZXR1cm4ge1xuICAgIHJvdGF0aW9uOiBhbmdsZSAqICgxODAgLyBNYXRoLlBJKSxcbiAgICBzY2FsZTogW3N4LCBzeV0sXG4gICAgc2l6ZTogW3N4ICogc2hhcGVXaWR0aCwgc3kgKiBzaGFwZUhlaWdodF0sXG4gICAgcG9zaXRpb246IFstcG9pbnRzWzBdWzBdICogc2hhcGVXaWR0aCwgLXBvaW50c1swXVsxXSAqIHNoYXBlSGVpZ2h0XVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5leHRyYWN0TGluZWFyR3JhZGllbnRQYXJhbXNGcm9tVHJhbnNmb3JtID0gZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybTtcblxudmFyIF9tYXRyaXhJbnZlcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibWF0cml4LWludmVyc2VcIikpO1xuXG52YXIgX2FwcGx5TWF0cml4VG9Qb2ludCA9IHJlcXVpcmUoXCIuL2FwcGx5TWF0cml4VG9Qb2ludFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjYW4gZXh0cmFjdCB0aGUgeCBhbmQgeSBwb3NpdGlvbnMgb2YgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIGxpbmVhciBncmFkaWVudFxuICogKHNjYWxlIGlzIG5vdCBpbXBvcnRhbnQgaGVyZSlcbiAqXG4gKiBAcGFyYW0gc2hhcGVXaWR0aCBudW1iZXJcbiAqIEBwYXJhbSBzaGFwZUhlaWdodCBudW1iZXJcbiAqIEBwYXJhbSB0IFRyYW5zZm9ybVxuICovXG5mdW5jdGlvbiBleHRyYWN0TGluZWFyR3JhZGllbnRQYXJhbXNGcm9tVHJhbnNmb3JtKHNoYXBlV2lkdGgsIHNoYXBlSGVpZ2h0LCB0KSB7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IHQubGVuZ3RoID09PSAyID8gWy4uLnQsIFswLCAwLCAxXV0gOiBbLi4udF07XG4gIGNvbnN0IG14SW52ID0gKDAsIF9tYXRyaXhJbnZlcnNlLmRlZmF1bHQpKHRyYW5zZm9ybSk7XG4gIGNvbnN0IHN0YXJ0RW5kID0gW1swLCAwLjVdLCBbMSwgMC41XV0ubWFwKHAgPT4gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShteEludiwgcCkpO1xuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBbc3RhcnRFbmRbMF1bMF0gKiBzaGFwZVdpZHRoLCBzdGFydEVuZFswXVsxXSAqIHNoYXBlSGVpZ2h0XSxcbiAgICBlbmQ6IFtzdGFydEVuZFsxXVswXSAqIHNoYXBlV2lkdGgsIHN0YXJ0RW5kWzFdWzFdICogc2hhcGVIZWlnaHRdXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmV4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcyA9IGV4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcztcblxudmFyIF9tYXRyaXhJbnZlcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibWF0cml4LWludmVyc2VcIikpO1xuXG52YXIgX2FwcGx5TWF0cml4VG9Qb2ludCA9IHJlcXVpcmUoXCIuL2FwcGx5TWF0cml4VG9Qb2ludFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjYW4gZXh0cmFjdCB0aGUgcm90YXRpb24gKGluIGRlZ3JlZXMpLCBjZW50ZXIgcG9pbnQgYW5kIHJhZGl1cyBmb3IgYSByYWRpYWwgb3IgZGlhbW9uZCBncmFkaWVudFxuICpcbiAqIEBwYXJhbSBzaGFwZVdpZHRoXG4gKiBAcGFyYW0gc2hhcGVIZWlnaHRcbiAqIEBwYXJhbSB0XG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcyhzaGFwZVdpZHRoLCBzaGFwZUhlaWdodCwgdCkge1xuICBjb25zdCB0cmFuc2Zvcm0gPSB0Lmxlbmd0aCA9PT0gMiA/IFsuLi50LCBbMCwgMCwgMV1dIDogWy4uLnRdO1xuICBjb25zdCBteEludiA9ICgwLCBfbWF0cml4SW52ZXJzZS5kZWZhdWx0KSh0cmFuc2Zvcm0pO1xuICBjb25zdCBjZW50ZXJQb2ludCA9ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobXhJbnYsIFswLjUsIDAuNV0pO1xuICBjb25zdCByeFBvaW50ID0gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShteEludiwgWzEsIDAuNV0pO1xuICBjb25zdCByeVBvaW50ID0gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShteEludiwgWzAuNSwgMV0pO1xuICBjb25zdCByeCA9IE1hdGguc3FydChNYXRoLnBvdyhyeFBvaW50WzBdIC0gY2VudGVyUG9pbnRbMF0sIDIpICsgTWF0aC5wb3cocnhQb2ludFsxXSAtIGNlbnRlclBvaW50WzFdLCAyKSk7XG4gIGNvbnN0IHJ5ID0gTWF0aC5zcXJ0KE1hdGgucG93KHJ5UG9pbnRbMF0gLSBjZW50ZXJQb2ludFswXSwgMikgKyBNYXRoLnBvdyhyeVBvaW50WzFdIC0gY2VudGVyUG9pbnRbMV0sIDIpKTtcbiAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4oKHJ4UG9pbnRbMV0gLSBjZW50ZXJQb2ludFsxXSkgLyAocnhQb2ludFswXSAtIGNlbnRlclBvaW50WzBdKSkgKiAoMTgwIC8gTWF0aC5QSSk7XG4gIHJldHVybiB7XG4gICAgcm90YXRpb246IGFuZ2xlLFxuICAgIGNlbnRlcjogW2NlbnRlclBvaW50WzBdICogc2hhcGVXaWR0aCwgY2VudGVyUG9pbnRbMV0gKiBzaGFwZUhlaWdodF0sXG4gICAgcmFkaXVzOiBbcnggKiBzaGFwZVdpZHRoLCByeSAqIHNoYXBlSGVpZ2h0XVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5maW5kQWxsID0gdm9pZCAwO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuLlwiKTtcblxuLyoqXG4gKiBDdXN0b20gaW1wbGVtZW50YXRpb24gb2YgdGhlIGZpZ21hLmZpbmRBbGwgbWV0aG9kLCB3aGljaCBydW5zIHgxMDAwIHRpbWVzIGZhc3Rlci5cbiAqXG4gKiAjIyMgVXNhZ2UgZXhhbXBsZVxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZpbmRBbGwsIGlzVGV4dE5vZGUgfSBmcm9tIFwiQGZpZ21hLXBsdWdpbi9oZWxwZXJzXCJcbiAqXG4gKiBjb25zdCB0ZXh0Tm9kZXMgPSBmaW5kQWxsKGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuLCBpc1RleHROb2RlKVxuICogYGBgXG4gKlxuICogIyMjIEhvdyB0byByZXBsYWNlIG5hdGl2ZSBgZmlnbWEuZmluZEFsbGBcbiAqIGBgYGRpZmZcbiAqICsgaW1wb3J0IHsgZmluZEFsbCB9IGZyb20gXCJAZmlnbWEtcGx1Z2luL2hlbHBlcnNcIlxuICpcbiAqIC0gY29uc3QgdGV4dE5vZGVzID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZEFsbCgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIik7XG4gKiArIGNvbnN0IHRleHROb2RlcyA9IGZpbmRBbGwoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4sIChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiKVxuICogYGBgXG4gKi9cbmNvbnN0IGZpbmRBbGwgPSAobm9kZXMsIGl0ZXJhdGVlKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaXRlcmF0ZWUobm9kZXNbaV0sIGksIG5vZGVzKSkge1xuICAgICAgcmVzdWx0LnB1c2gobm9kZXNbaV0pO1xuICAgIH0gZWxzZSBpZiAoKDAsIF8uaGFzQ2hpbGRyZW4pKG5vZGVzW2ldKSkge1xuICAgICAgcmVzdWx0LnB1c2goLi4uZmluZEFsbChub2Rlc1tpXVsnY2hpbGRyZW4nXSwgaXRlcmF0ZWUpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0cy5maW5kQWxsID0gZmluZEFsbDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldEFsbEZvbnRzO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBhbGwgdXNlZCBmb250cyB0byB0ZXh0Tm9kZXNcbiAqL1xuZnVuY3Rpb24gZ2V0QWxsRm9udHModGV4dE5vZGVzKSB7XG4gIGNvbnN0IGZvbnRzID0gW107XG5cbiAgY29uc3QgcHVzaFVuaXF1ZSA9IGZvbnQgPT4ge1xuICAgIGlmICghZm9udHMuc29tZShpdGVtID0+IGl0ZW0uZmFtaWx5ID09PSBmb250LmZhbWlseSAmJiBpdGVtLnN0eWxlID09PSBmb250LnN0eWxlKSkge1xuICAgICAgZm9udHMucHVzaChmb250KTtcbiAgICB9XG4gIH07XG5cbiAgZm9yIChjb25zdCBub2RlIG9mIHRleHROb2Rlcykge1xuICAgIGlmIChub2RlLmZvbnROYW1lID09PSBmaWdtYS5taXhlZCkge1xuICAgICAgY29uc3QgbGVuID0gbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBmb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKGksIGkgKyAxKTtcbiAgICAgICAgcHVzaFVuaXF1ZShmb250KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHVzaFVuaXF1ZShub2RlLmZvbnROYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9udHM7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRCb3VuZGluZ1JlY3Q7XG5cbnZhciBfaXNVbmRlZmluZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2lzVW5kZWZpbmVkXCIpKTtcblxudmFyIF9hcHBseU1hdHJpeFRvUG9pbnQgPSByZXF1aXJlKFwiLi9hcHBseU1hdHJpeFRvUG9pbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogIHRoaXMgZnVuY3Rpb24gcmV0dXJuIGEgYm91bmRpbmcgcmVjdCBmb3IgYW4gbm9kZXNcbiAqL1xuLy8geC95IGFic29sdXRlIGNvb3JkaW5hdGVzXG4vLyBoZWlnaHQvd2lkdGhcbi8vIHgyL3kyIGJvdHRvbSByaWdodCBjb29yZGluYXRlc1xuZnVuY3Rpb24gZ2V0Qm91bmRpbmdSZWN0KG5vZGVzKSB7XG4gIGNvbnN0IGJvdW5kaW5nUmVjdCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgeDI6IDAsXG4gICAgeTI6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH07XG5cbiAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IHh5ID0gbm9kZXMucmVkdWNlKChyZXosIG5vZGUpID0+IHtcbiAgICAgIGlmICghbm9kZS5hYnNvbHV0ZVRyYW5zZm9ybSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1Byb3ZpZGVkIG5vZGUgaGF2ZW5cXCd0IFwiYWJzb2x1dGVUcmFuc2Zvcm1cIiBwcm9wZXJ0eSwgYnV0IGl0XFwncyByZXF1aXJlZCBmb3IgY2FsY3VsYXRpb25zLicpO1xuICAgICAgICByZXR1cm4gcmV6O1xuICAgICAgfVxuXG4gICAgICBpZiAoKDAsIF9pc1VuZGVmaW5lZDIuZGVmYXVsdCkobm9kZS5oZWlnaHQpIHx8ICgwLCBfaXNVbmRlZmluZWQyLmRlZmF1bHQpKG5vZGUud2lkdGgpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignUHJvdmlkZWQgbm9kZSBoYXZlblxcJ3QgXCJ3aWR0aC9oZWlnaHRcIiBwcm9wZXJ0eSwgYnV0IGl0XFwncyByZXF1aXJlZCBmb3IgY2FsY3VsYXRpb25zLicpO1xuICAgICAgICByZXR1cm4gcmV6O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBoYWxmSGVpZ2h0ID0gbm9kZS5oZWlnaHQgLyAyO1xuICAgICAgY29uc3QgaGFsZldpZHRoID0gbm9kZS53aWR0aCAvIDI7XG4gICAgICBjb25zdCBbW2MwLCBzMCwgeF0sIFtzMSwgYzEsIHldXSA9IG5vZGUuYWJzb2x1dGVUcmFuc2Zvcm07XG4gICAgICBjb25zdCBtYXRyaXggPSBbW2MwLCBzMCwgeCArIGhhbGZXaWR0aCAqIGMwICsgaGFsZkhlaWdodCAqIHMwXSwgW3MxLCBjMSwgeSArIGhhbGZXaWR0aCAqIHMxICsgaGFsZkhlaWdodCAqIGMxXV07IC8vIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgY29ybmVycyBvZiB0aGUgcmVjdGFuZ2xlXG5cbiAgICAgIGNvbnN0IFhZID0ge1xuICAgICAgICB4OiBbMSwgLTEsIDEsIC0xXSxcbiAgICAgICAgeTogWzEsIC0xLCAtMSwgMV1cbiAgICAgIH07IC8vIGZpbGwgaW5cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG1hdHJpeCwgW1hZLnhbaV0gKiBoYWxmV2lkdGgsIFhZLnlbaV0gKiBoYWxmSGVpZ2h0XSk7XG4gICAgICAgIFhZLnhbaV0gPSBhWzBdO1xuICAgICAgICBYWS55W2ldID0gYVsxXTtcbiAgICAgIH1cblxuICAgICAgWFkueC5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICBYWS55LnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgIHJlei54LnB1c2goWFkueFswXSk7XG4gICAgICByZXoueS5wdXNoKFhZLnlbMF0pO1xuICAgICAgcmV6LngyLnB1c2goWFkueFszXSk7XG4gICAgICByZXoueTIucHVzaChYWS55WzNdKTtcbiAgICAgIHJldHVybiByZXo7XG4gICAgfSwge1xuICAgICAgeDogW10sXG4gICAgICB5OiBbXSxcbiAgICAgIHgyOiBbXSxcbiAgICAgIHkyOiBbXVxuICAgIH0pO1xuICAgIGNvbnN0IHJlY3QgPSB7XG4gICAgICB4OiBNYXRoLm1pbiguLi54eS54KSxcbiAgICAgIHk6IE1hdGgubWluKC4uLnh5LnkpLFxuICAgICAgeDI6IE1hdGgubWF4KC4uLnh5LngyKSxcbiAgICAgIHkyOiBNYXRoLm1heCguLi54eS55MilcbiAgICB9O1xuICAgIGJvdW5kaW5nUmVjdC54ID0gcmVjdC54O1xuICAgIGJvdW5kaW5nUmVjdC55ID0gcmVjdC55O1xuICAgIGJvdW5kaW5nUmVjdC54MiA9IHJlY3QueDI7XG4gICAgYm91bmRpbmdSZWN0LnkyID0gcmVjdC55MjtcbiAgICBib3VuZGluZ1JlY3Qud2lkdGggPSByZWN0LngyIC0gcmVjdC54O1xuICAgIGJvdW5kaW5nUmVjdC5oZWlnaHQgPSByZWN0LnkyIC0gcmVjdC55O1xuICB9XG5cbiAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0VGV4dE5vZGVDU1MgPSB2b2lkIDA7XG5cbnZhciBfZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC9nZXRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBzdHJpbmdWYWx1ZVRvQ3NzID0gdmFsdWUgPT4ge1xuICBpZiAoL3JpZ2h0fGJvdHRvbS9pLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdmbGV4LWVuZCc7XG4gIH0gZWxzZSBpZiAoL2xlZnR8dG9wL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2ZsZXgtc3RhcnQnO1xuICB9IGVsc2UgaWYgKC9jZW50ZXIvaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnY2VudGVyJztcbiAgfSBlbHNlIGlmICgvbG93ZXIvaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnbG93ZXJjYXNlJztcbiAgfSBlbHNlIGlmICgvdXBwZXIvaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAndXBwZXJjYXNlJztcbiAgfSBlbHNlIGlmICgvdGl0bGUvaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnY2FwaXRhbGl6ZSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdub25lJztcbiAgfVxufTtcblxuY29uc3QgdW5pdFZhbHVlVG9Dc3MgPSAoe1xuICB1bml0LFxuICB2YWx1ZVxufSkgPT4ge1xuICBpZiAodW5pdCA9PT0gJ1BFUkNFTlQnKSB7XG4gICAgcmV0dXJuIGAke3ZhbHVlfSVgO1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdQSVhFTFMnKSB7XG4gICAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ2F1dG8nO1xuICB9XG59O1xuXG5jb25zdCBpc1VuaXRWYWx1ZSA9IG9iaiA9PiB7XG4gIHJldHVybiBvYmouaGFzT3duUHJvcGVydHkoJ3VuaXQnKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlVmFsdWUgPSAobm9kZSwga2V5LCBleGFjdFN0cmluZykgPT4ge1xuICBjb25zdCB2YWx1ZSA9ICgwLCBfZ2V0Mi5kZWZhdWx0KShub2RlLCBrZXkpO1xuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBleGFjdFN0cmluZyA/IHZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpIDogc3RyaW5nVmFsdWVUb0Nzcyh2YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBgJHt2YWx1ZX1weGA7XG4gIH0gZWxzZSBpZiAoaXNVbml0VmFsdWUodmFsdWUpKSB7XG4gICAgcmV0dXJuIHVuaXRWYWx1ZVRvQ3NzKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4oJ1VuZXhwZWN0ZWQgdmFsdWU6ICcsIHZhbHVlKTtcbiAgfVxufTtcbi8qKlxuICogIGdldCBDU1Mgc3R5bGVzIG9mIFRleHROb2RlXG4gKi9cblxuXG5jb25zdCBnZXRUZXh0Tm9kZUNTUyA9IG5vZGUgPT4ge1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogZ2V0U3R5bGVWYWx1ZShub2RlLCAneScpLFxuICAgIGxlZnQ6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3gnKSxcbiAgICB3aWR0aDogZ2V0U3R5bGVWYWx1ZShub2RlLCAnd2lkdGgnKSxcbiAgICBoZWlnaHQ6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2hlaWdodCcpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAnanVzdGlmeS1jb250ZW50JzogZ2V0U3R5bGVWYWx1ZShub2RlLCAndGV4dEFsaWduSG9yaXpvbnRhbCcpLFxuICAgICdhbGlnbi1pdGVtcyc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3RleHRBbGlnblZlcnRpY2FsJyksXG4gICAgJ3RleHQtaW5kZW50JzogZ2V0U3R5bGVWYWx1ZShub2RlLCAncGFyYWdyYXBoSW5kZW50JyksXG4gICAgJ2xldHRlci1zcGFjaW5nJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAnbGV0dGVyU3BhY2luZycpLFxuICAgICdsaW5lLWhlaWdodCc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2xpbmVIZWlnaHQnKSxcbiAgICAnZm9udC1zaXplJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAnZm9udFNpemUnKSxcbiAgICAnZm9udC1zdHlsZSc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnROYW1lLnN0eWxlJywgdHJ1ZSksXG4gICAgJ2ZvbnQtd2VpZ2h0JzogZ2V0U3R5bGVWYWx1ZShub2RlLCAnZm9udE5hbWUuc3R5bGUnLCB0cnVlKSxcbiAgICAndGV4dC1kZWNvcmF0aW9uJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAndGV4dERlY29yYXRpb24nLCB0cnVlKSxcbiAgICAndGV4dC10cmFuc2Zvcm0nOiBnZXRTdHlsZVZhbHVlKG5vZGUsICd0ZXh0Q2FzZScpLFxuICAgICdmb250LWZhbWlseSc6IGAke2dldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnROYW1lLmZhbWlseScsIHRydWUpfSAke2dldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnROYW1lLnN0eWxlJywgdHJ1ZSl9YFxuICB9O1xufTsgLy8gdGhpcyBmaWxlIGNhbiBiZSBleHRlbmRlZCB0byBzdXBwb3J0IGFsbCBub2RlIHR5cGVzXG5cblxuZXhwb3J0cy5nZXRUZXh0Tm9kZUNTUyA9IGdldFRleHROb2RlQ1NTOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Tm9kZUluZGV4O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBnZXQgdGhlIHJldHVybiB0aGUgaW5kZXggb2Ygbm9kZSBpbiBpdHMgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVJbmRleChub2RlKSB7XG4gIHJldHVybiBub2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0UGFnZTtcblxudmFyIF9pc1R5cGVOb2RlID0gcmVxdWlyZShcIi4vaXNUeXBlTm9kZVwiKTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gcGFzcyBpbiBhIG5vZGUgYW5kIHJldHVybiBpdHMgcGFnZU5vZGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFnZShub2RlKSB7XG4gIGlmICghKDAsIF9pc1R5cGVOb2RlLmlzUGFnZU5vZGUpKG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFBhZ2Uobm9kZS5wYXJlbnQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2RlO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFJlbGF0aXZlUG9zaXRpb24gPSBleHBvcnRzLmdldFRvcExldmVsUGFyZW50ID0gdm9pZCAwO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuLi9cIik7XG5cbi8qKlxuICogUmV0dXJuIHRvcCBsZXZlbCBwYXJlbnQgZm9yIG5vZGUgYmVmb3JlIFBhZ2VOb2RlLlxuICogRm9yIGV4YW1wbGU6XG4gKiBgYGBqc1xuICogLy8gZm9yIHN0cnVjdHVyZSBiZWxvd1xuICogLy8gUGFnZSAvIEZyYW1lIC8gR3JvdXAxIC8gR3JvdXAyIC8gVGV4dFxuICpcbiAqIGdldFRvcExldmVsUGFyZW50KFRleHQpIC8vIEZyYW1lXG4gKiBgYGBcbiAqL1xuY29uc3QgZ2V0VG9wTGV2ZWxQYXJlbnQgPSBub2RlID0+IHtcbiAgaWYgKG5vZGUgJiYgbm9kZS5wYXJlbnQgJiYgISgwLCBfLmlzUGFnZU5vZGUpKG5vZGUucGFyZW50KSkge1xuICAgIHJldHVybiBnZXRUb3BMZXZlbFBhcmVudChub2RlLnBhcmVudCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG4vKipcbiAqIENhbGN1bGF0ZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiBub2RlIGJhc2VkIG9uIHByb3ZpZGVkIHBhcmVudCBvciB0b3AgbGV2ZWwgcGFyZW50LlxuICogRm9yIGV4YW1wbGU6XG4gKiBgYGBqc1xuICogLy8gZm9yIHN0cnVjdHVyZSBiZWxvd1xuICogLy8gUGFnZSAvIEZyYW1lIC8gR3JvdXAxIC8gR3JvdXAyIC8gVGV4dFxuICpcbiAqIGdldFJlbGF0aXZlUG9zaXRpb24oVGV4dCwgR3JvdXAxKSAvLyB3aWxsIGNhbGN1bGF0ZSB7IHgsIHkgfSBiYXNlZCBvbiBHcm91cDFcbiAqXG4gKiBnZXRSZWxhdGl2ZVBvc2l0aW9uKFRleHQpIC8vIHdpbGwgY2FsY3VsYXRlIHsgeCwgeSB9IGJhc2VkIG9uIEZyYW1lXG4gKiBgYGBcbiAqKi9cblxuXG5leHBvcnRzLmdldFRvcExldmVsUGFyZW50ID0gZ2V0VG9wTGV2ZWxQYXJlbnQ7XG5cbmNvbnN0IGdldFJlbGF0aXZlUG9zaXRpb24gPSAobm9kZSwgcmVsYXRpdmVOb2RlKSA9PiB7XG4gIHJlbGF0aXZlTm9kZSA9IHJlbGF0aXZlTm9kZSB8fCBnZXRUb3BMZXZlbFBhcmVudChub2RlKTtcbiAgcmV0dXJuIHtcbiAgICB4OiBNYXRoLmFicyhNYXRoLnJvdW5kKHJlbGF0aXZlTm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXSAtIG5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMF1bMl0pKSxcbiAgICB5OiBNYXRoLmFicyhNYXRoLnJvdW5kKHJlbGF0aXZlTm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVsxXVsyXSAtIG5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMV1bMl0pKVxuICB9O1xufTtcblxuZXhwb3J0cy5nZXRSZWxhdGl2ZVBvc2l0aW9uID0gZ2V0UmVsYXRpdmVQb3NpdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaGFzQ2hpbGRyZW4gPSB2b2lkIDA7XG5cbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gaGF2ZSBjaGlsZHJlbiBub2Rlc1xuICogRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHNcbiAqIC8vIEJFRk9SRVxuICogY29uc29sZS5sb2cobm9kZS5jaGlsZHJlbikgLy8gdGhyb3cgVFMgZXJyb3IgXCJQcm9wZXJ0eSAnY2hpbGRyZW4nIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgLi4uXCJcbiAqXG4gKiAvLyBBRlRFUlxuICogaWYgKGhhc0NoaWxkcmVuKG5vZGUpKSB7XG4gKiAgY29uc29sZS5sb2cobm9kZS5jaGlsZHJlbikgLy8gdmFsaWQgY29kZVxuICogfVxuICogYGBgXG4gKlxuICovXG5jb25zdCBoYXNDaGlsZHJlbiA9IG5vZGUgPT4gQm9vbGVhbihub2RlWydjaGlsZHJlbiddKTtcblxuZXhwb3J0cy5oYXNDaGlsZHJlbiA9IGhhc0NoaWxkcmVuOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNQYXJ0T2ZJbnN0YW5jZTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gY2hlY2sgd2hldGhlciBhIG5vZGUgaXMgcGFydCBvZiBhbiBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBpc1BhcnRPZkluc3RhbmNlKG5vZGUpIHtcbiAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG5cbiAgaWYgKHBhcmVudC50eXBlID09PSAnSU5TVEFOQ0UnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAocGFyZW50LnR5cGUgPT09ICdQQUdFJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaXNQYXJ0T2ZJbnN0YW5jZShwYXJlbnQpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1BhcnRPZk5vZGU7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIGNoZWNrIHdoZXRoZXIgYSBub2RlIGlzIHBhcnQgb2YgYW4gcm9vdE5vZGVcbiAqL1xuZnVuY3Rpb24gaXNQYXJ0T2ZOb2RlKHBhcnQsIHJvb3ROb2RlKSB7XG4gIGNvbnN0IHBhcmVudCA9IHBhcnQucGFyZW50O1xuXG4gIGlmIChwYXJlbnQgPT09IHJvb3ROb2RlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAocGFyZW50LnR5cGUgPT09ICdQQUdFJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaXNQYXJ0T2ZOb2RlKHBhcmVudCwgcm9vdE5vZGUpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzT25lT2ZOb2RlVHlwZSA9IGV4cG9ydHMuaXNDb21wb25lbnROb2RlID0gZXhwb3J0cy5pc0luc3RhbmNlTm9kZSA9IGV4cG9ydHMuaXNUZXh0Tm9kZSA9IGV4cG9ydHMuaXNGcmFtZU5vZGUgPSBleHBvcnRzLmlzR3JvdXBOb2RlID0gZXhwb3J0cy5pc1BhZ2VOb2RlID0gdm9pZCAwO1xuXG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIFBhZ2VOb2RlXG4gKi9cbmNvbnN0IGlzUGFnZU5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ1BBR0UnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgR3JvdXBOb2RlXG4gKi9cblxuXG5leHBvcnRzLmlzUGFnZU5vZGUgPSBpc1BhZ2VOb2RlO1xuXG5jb25zdCBpc0dyb3VwTm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnR1JPVVAnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgRnJhbWVOb2RlXG4gKi9cblxuXG5leHBvcnRzLmlzR3JvdXBOb2RlID0gaXNHcm91cE5vZGU7XG5cbmNvbnN0IGlzRnJhbWVOb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdGUkFNRSc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBUZXh0Tm9kZVxuICovXG5cblxuZXhwb3J0cy5pc0ZyYW1lTm9kZSA9IGlzRnJhbWVOb2RlO1xuXG5jb25zdCBpc1RleHROb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdURVhUJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIEluc3RhbmNlTm9kZVxuICovXG5cblxuZXhwb3J0cy5pc1RleHROb2RlID0gaXNUZXh0Tm9kZTtcblxuY29uc3QgaXNJbnN0YW5jZU5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0lOU1RBTkNFJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIENvbXBvbmVudE5vZGVcbiAqL1xuXG5cbmV4cG9ydHMuaXNJbnN0YW5jZU5vZGUgPSBpc0luc3RhbmNlTm9kZTtcblxuY29uc3QgaXNDb21wb25lbnROb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdDT01QT05FTlQnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgb25lIG9mIHByb3ZpZGVkIHR5cGVzXG4gKi9cblxuXG5leHBvcnRzLmlzQ29tcG9uZW50Tm9kZSA9IGlzQ29tcG9uZW50Tm9kZTtcblxuY29uc3QgaXNPbmVPZk5vZGVUeXBlID0gKG5vZGUsIHR5cGVMaXN0KSA9PiB7XG4gIHJldHVybiB0eXBlTGlzdC5pbmNsdWRlcyhub2RlLnR5cGUpO1xufTtcblxuZXhwb3J0cy5pc09uZU9mTm9kZVR5cGUgPSBpc09uZU9mTm9kZVR5cGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1Zpc2libGVOb2RlO1xuXG4vKipcbiAqIFRoaXMgaGVscGVyIHJlY3Vyc2l2ZWx5IGNoZWNrcyBhbGwgcGFyZW50cyBmb3IgdmlzaWJpbGl0eSwgdG8gZ3VhcmFudGVlIHRoYXQncyBub2RlIGlzIHZpc2libGVcbiAqL1xuZnVuY3Rpb24gaXNWaXNpYmxlTm9kZShub2RlKSB7XG4gIGlmIChub2RlICYmIG5vZGUucGFyZW50KSB7XG4gICAgaWYgKG5vZGUudmlzaWJsZSAmJiBub2RlLnBhcmVudC50eXBlICE9PSAnUEFHRScpIHtcbiAgICAgIHJldHVybiBpc1Zpc2libGVOb2RlKG5vZGUucGFyZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5vZGUudmlzaWJsZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsb2FkRm9udHM7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhc3luY2hyb25vdXNseSBsb2FkcyB0aGUgcGFzc2VkIGZvbnRzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRGb250cyhmb250cykge1xuICBjb25zdCBwcm9taXNlcyA9IGZvbnRzLm1hcChmb250ID0+IGZpZ21hLmxvYWRGb250QXN5bmMoZm9udCkpO1xuICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gIHJldHVybiBmb250cztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvYWRVbmlxdWVGb250cztcblxudmFyIF9nZXRBbGxGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ2V0QWxsRm9udHNcIikpO1xuXG52YXIgX2xvYWRGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZEZvbnRzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gbG9hZCBvbmx5IHVuaXF1ZSBmb250cyBhc3luY2hyb25vdXNseVxuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkVW5pcXVlRm9udHModGV4dE5vZGVzKSB7XG4gIGNvbnN0IGZvbnRzID0gKDAsIF9nZXRBbGxGb250cy5kZWZhdWx0KSh0ZXh0Tm9kZXMpO1xuICByZXR1cm4gKDAsIF9sb2FkRm9udHMuZGVmYXVsdCkoZm9udHMpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ub2RlVG9PYmplY3QgPSB2b2lkIDA7XG5cbi8qKlxuICogVHJhbnNmb3JtIG5vZGUgdG8gb2JqZWN0IHdpdGgga2V5cywgdGhhdCBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQuXG4gKiBGb3IgZXhhbXBsZTpcbiAqIGBgYHRzXG4gKiBjb25zdCBub2RlID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZE9uZSgoZWwpID0+IGVsLnR5cGUgPT09IFwiVEVYVFwiKTtcbiAqIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKG5vZGUpLmxlbmd0aCkgLy8gMVxuICogY29uc29sZS5sb2coT2JqZWN0LmtleXMobm9kZVRvT2JqZWN0KG5vZGUpKS5sZW5ndGgpIC8vIDQyXG4gKiBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhub2RlVG9PYmplY3Qobm9kZSwgdHJ1ZSkpLmxlbmd0aCkgLy8gMzlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBub2RlXG4gKiBAcGFyYW0gd2l0aG91dFJlbGF0aW9uc1xuICovXG5jb25zdCBub2RlVG9PYmplY3QgPSAobm9kZSwgd2l0aG91dFJlbGF0aW9ucykgPT4ge1xuICBjb25zdCBwcm9wcyA9IE9iamVjdC5lbnRyaWVzKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG5vZGUuX19wcm90b19fKSk7XG4gIGNvbnN0IGJsYWNrbGlzdCA9IFsncGFyZW50JywgJ2NoaWxkcmVuJywgJ3JlbW92ZWQnLCAnbWFzdGVyQ29tcG9uZW50J107XG4gIGNvbnN0IG9iaiA9IHtcbiAgICBpZDogbm9kZS5pZCxcbiAgICB0eXBlOiBub2RlLnR5cGVcbiAgfTtcblxuICBmb3IgKGNvbnN0IFtuYW1lLCBwcm9wXSBvZiBwcm9wcykge1xuICAgIGlmIChwcm9wLmdldCAmJiAhYmxhY2tsaXN0LmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIG9ialtuYW1lXSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICBvYmpbbmFtZV0gPSAnTWl4ZWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ialtuYW1lXSA9IHByb3AuZ2V0LmNhbGwobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBvYmpbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vZGUucGFyZW50ICYmICF3aXRob3V0UmVsYXRpb25zKSB7XG4gICAgb2JqLnBhcmVudCA9IHtcbiAgICAgIGlkOiBub2RlLnBhcmVudC5pZCxcbiAgICAgIHR5cGU6IG5vZGUucGFyZW50LnR5cGVcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgIXdpdGhvdXRSZWxhdGlvbnMpIHtcbiAgICBvYmouY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBub2RlVG9PYmplY3QoY2hpbGQsIHdpdGhvdXRSZWxhdGlvbnMpKTtcbiAgfVxuXG4gIGlmIChub2RlLm1hc3RlckNvbXBvbmVudCAmJiAhd2l0aG91dFJlbGF0aW9ucykge1xuICAgIG9iai5tYXN0ZXJDb21wb25lbnQgPSBub2RlVG9PYmplY3Qobm9kZS5tYXN0ZXJDb21wb25lbnQsIHdpdGhvdXRSZWxhdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbmV4cG9ydHMubm9kZVRvT2JqZWN0ID0gbm9kZVRvT2JqZWN0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZVRleHRTdHlsZSA9IHBhcnNlVGV4dFN0eWxlO1xuZXhwb3J0cy5zcGxpdFRleHRTdHlsZUludG9MaW5lcyA9IHNwbGl0VGV4dFN0eWxlSW50b0xpbmVzO1xuZXhwb3J0cy5qb2luVGV4dExpbmVzU3R5bGVzID0gam9pblRleHRMaW5lc1N0eWxlcztcbmV4cG9ydHMuYXBwbHlUZXh0U3R5bGVUb1RleHROb2RlID0gYXBwbHlUZXh0U3R5bGVUb1RleHROb2RlO1xuZXhwb3J0cy5jaGFuZ2VDaGFyYWN0ZXJzVGV4dFN0eWxlID0gY2hhbmdlQ2hhcmFjdGVyc1RleHRTdHlsZTtcbmV4cG9ydHMuY2hhbmdlVGV4dFN0eWxlID0gY2hhbmdlVGV4dFN0eWxlO1xuXG52YXIgX3VuaXFXaXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC91bmlxV2l0aFwiKSk7XG5cbnZhciBfY2xvbmVEZWVwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIikpO1xuXG52YXIgX2lzRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2lzRXF1YWxcIikpO1xuXG52YXIgX2dldEFsbEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9nZXRBbGxGb250c1wiKSk7XG5cbnZhciBfbG9hZEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkRm9udHNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBzdHlsZUZvbnRzID0gWydmb250U2l6ZScsICdmb250TmFtZScsICd0ZXh0Q2FzZScsICd0ZXh0RGVjb3JhdGlvbicsICdsZXR0ZXJTcGFjaW5nJywgJ2xpbmVIZWlnaHQnLCAnZmlsbHMnLCAndGV4dFN0eWxlSWQnLCAnZmlsbFN0eWxlSWQnXTtcbi8qXG5cdFRoZSBmdW5jdGlvbiByZXR1cm5zIHRoZSB0ZXh0IG5vZGUgc3R5bGVzLCBzcGxpdHRpbmcgdGhlbSBpbnRvIGRpZmZlcmVudCBhcnJheXMsIHN1Y2ggYXM6XG5cdFt7XG5cdFx0Y2hhcmFjdGVyczogXCIuLi5cIixcblx0XHQuLi4gKHN0eWxlcylcblx0fSwgLi4uXVxuXG5cdC0tLVxuXG5cdFJldHVybnMgc3R5bGVzIGZvciB0aGUgZW50aXJlIHRleHQ6XG5cdHBhcnNlVGV4dFN0eWxlKHRleHROb2RlKVxuXHRcblx0UmV0dXJucyB0ZXh0IHN0eWxlcyBmcm9tIHRoZSAxMDB0aCB0byB0aGUgbGFzdCBjaGFyYWN0ZXI6XG5cdHBhcnNlVGV4dFN0eWxlKHRleHROb2RlLCAxMDApXG5cblx0UmV0dXJucyBzdHlsZXMgZm9yIHRoZSBlbnRpcmUgdGV4dCwgYnV0IG9ubHkgd2l0aCBmb250TmFtZSBhbmQgdGV4dERlY29yYXRpb246XG5cdHBhcnNlVGV4dFN0eWxlKHRleHROb2RlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgW1wiZm9udE5hbWVcIiwgXCJ0ZXh0RGVjb3JhdGlvblwiXSlcbiovXG5cbmZ1bmN0aW9uIHBhcnNlVGV4dFN0eWxlKG5vZGUsIHN0YXJ0ID0gMCwgZW5kLCBzdHlsZU5hbWUpIHtcbiAgaWYgKCFlbmQpIGVuZCA9IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7XG4gIGlmICghc3R5bGVOYW1lKSBzdHlsZU5hbWUgPSBzdHlsZUZvbnRzO1xuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICBjb25zb2xlLmVycm9yKCdTdGFydCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBlbmQnKTtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gc3RyaW5nIHN1YnN0cmluZywgZGVmaW5lZCBzdHlsZXNcblxuXG4gIGNvbnN0IHN0eWxlTWFwID0gW107IC8vIGEgY29tcG9zaW5nIHN0cmluZyBvZiBhIHNwZWNpZmljIHN0eWxlXG5cbiAgbGV0IHRleHRTdHlsZTtcbiAgY29uc3QgbmFtZXMgPSBzdHlsZU5hbWUubWFwKG5hbWUgPT4ge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoL14oLikvZywgJDEgPT4gJDEudG9VcHBlckNhc2UoKSk7XG4gIH0pOyAvLyBzcGxpdHRpbmcgdGV4dCBpbnRvIHN1YnN0cmluZ3MgYnkgc3R5bGVcblxuICBmb3IgKGxldCBzdGFydEluZGV4ID0gc3RhcnQ7IHN0YXJ0SW5kZXggPCBlbmQ7IHN0YXJ0SW5kZXgrKykge1xuICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIDE7XG4gICAgY29uc3QgbGV0dGVyID0ge1xuICAgICAgY2hhcmFjdGVyczogbm9kZS5jaGFyYWN0ZXJzW3N0YXJ0SW5kZXhdXG4gICAgfTsgLy8gY29sbGVjdGlvbiBvZiBzdHlsZXNcblxuICAgIG5hbWVzLmZvckVhY2goKG4sIGkpID0+IHtcbiAgICAgIGxldHRlcltzdHlsZU5hbWVbaV1dID0gbm9kZVsnZ2V0UmFuZ2UnICsgbl0oc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRleHRTdHlsZSkge1xuICAgICAgaWYgKGlzRXF1YWxMZXR0ZXJTdHlsZShsZXR0ZXIsIHRleHRTdHlsZSkpIHtcbiAgICAgICAgLy8gdGhlIGNoYXJhY3RlciBoYXMgdGhlIHNhbWUgcHJvcGVydGllcyBhcyB0aGUgZ2VuZXJhdGVkIHN1YnN0cmluZ1xuICAgICAgICAvLyBhZGQgaXQgdG8gaXRcbiAgICAgICAgdGV4dFN0eWxlLmNoYXJhY3RlcnMgKz0gbGV0dGVyLmNoYXJhY3RlcnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzdHlsZSBwcm9wZXJ0aWVzIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgc3R5bGVNYXAucHVzaCh0ZXh0U3R5bGUpOyAvLyB3ZSBzdGFydCB0byBmb3JtIGEgbmV3IHN1YnN0cmluZ1xuXG4gICAgICAgIHRleHRTdHlsZSA9IGxldHRlcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2Ugc3RhcnQgZm9ybWluZyB0aGUgZmlyc3Qgc3Vic3RyaW5nXG4gICAgICB0ZXh0U3R5bGUgPSBsZXR0ZXI7XG4gICAgfVxuICB9XG5cbiAgc3R5bGVNYXAucHVzaCh0ZXh0U3R5bGUpO1xuICByZXR1cm4gc3R5bGVNYXA7XG59XG4vKlxuXHRBbGxvd3MgdG8gc3BsaXQgdGhlIHN0eWxlcyBvYnRhaW5lZCB3aXRoIHBhcnNlVGV4dFN0eWxlIGludG8gbGluZXMgYmFzZWQgb24gbmV3bGluZXMuXG5cblx0SWYgdGhlIHJlbW92ZU5ld2xpbmVDaGFyYWN0ZXJzIHBhcmFtZXRlciA9PSB0cnVlLCB0aGUgbmV3bGluZSBjaGFyYWN0ZXJzIHdpbGwgYmUgcmVtb3ZlZC5cblx0UmVtb3ZlRW1wdHlsaW5lcyA9PSB0cnVlIHdpbGwgcmVtb3ZlIGVtcHR5IGxpbmVzLlxuKi9cblxuXG5mdW5jdGlvbiBzcGxpdFRleHRTdHlsZUludG9MaW5lcyh0ZXh0U3R5bGUsIHJlbW92ZU5ld2xpbmVDaGFyYWN0ZXJzID0gZmFsc2UsIHJlbW92ZUVtcHR5bGluZXMgPSBmYWxzZSkge1xuICBsZXQgbGluZSA9IFtdO1xuICBsZXQgbGluZXMgPSBbXTtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoLit8KD88PVxcbikoLj8pKD89JCkpKFxcbnxcXHUyMDI4KT98KFxcbnxcXHUyMDI4KScsICdnJyk7XG4gIGNvbnN0IHJlMiA9IG5ldyBSZWdFeHAoJ1xcbnxcXHUyMDI4Jyk7XG4gIHRleHRTdHlsZS5mb3JFYWNoKChzdHlsZSwgaW5kZXgpID0+IHtcbiAgICBpZiAocmUyLnRlc3Qoc3R5bGUuY2hhcmFjdGVycykpIHtcbiAgICAgIGNvbnN0IGxzID0gc3R5bGUuY2hhcmFjdGVycy5tYXRjaChyZSk7XG5cbiAgICAgIGlmIChscyA9PT0gbnVsbCkge1xuICAgICAgICAvLyB0ZXh0IGlzIG1pc3NpbmdcbiAgICAgICAgbGluZS5wdXNoKHN0eWxlKTtcbiAgICAgIH0gZWxzZSBpZiAobHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIHRoZSBzdHlsZSB0ZXh0IGNvbnNpc3RzIG9mIDEgbGluZVxuICAgICAgICBsaW5lLnB1c2goc3R5bGUpO1xuICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICBsaW5lID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBtdWx0aXBsZS1saW5lIHRleHRcbiAgICAgICAgc3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkoc3R5bGUpO1xuICAgICAgICBzdHlsZS5jaGFyYWN0ZXJzID0gbHMuc2hpZnQoKTtcbiAgICAgICAgbGluZS5wdXNoKHN0eWxlKTtcbiAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgbGluZSA9IFtdO1xuICAgICAgICBjb25zdCBsYXN0ID0gbHMucG9wKCk7IC8vIGRlYWxpbmcgd2l0aCBpbnRlcm5hbCB0ZXh0IHN0cmluZ3NcblxuICAgICAgICBsaW5lcy5wdXNoKC4uLmxzLm1hcChlID0+IHtcbiAgICAgICAgICBzdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KShzdHlsZSk7XG4gICAgICAgICAgc3R5bGUuY2hhcmFjdGVycyA9IGU7XG4gICAgICAgICAgcmV0dXJuIFtzdHlsZV07XG4gICAgICAgIH0pKTtcbiAgICAgICAgc3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkoc3R5bGUpO1xuICAgICAgICBzdHlsZS5jaGFyYWN0ZXJzID0gbGFzdDtcblxuICAgICAgICBpZiAobGFzdCA9PT0gJycpIHtcbiAgICAgICAgICBpZiAoIXRleHRTdHlsZVtpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAvLyBsYXN0IGxpbmUgZmluYWxcbiAgICAgICAgICAgIGxpbmVzLnB1c2goW3N0eWxlXSk7XG4gICAgICAgICAgfSAvLyBlbHNlIGZhbHNlIGVuZCBvZiB0ZXh0XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkb2VzIG5vdCBlbmRcbiAgICAgICAgICBsaW5lLnB1c2goc3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmUucHVzaChzdHlsZSk7XG4gICAgfVxuICB9KTtcbiAgaWYgKGxpbmUubGVuZ3RoKSBsaW5lcy5wdXNoKGxpbmUpOyAvLyBkZWxldGluZyBuZXdsaW5lIGNoYXJhY3RlcnNcblxuICBpZiAocmVtb3ZlTmV3bGluZUNoYXJhY3RlcnMpIHtcbiAgICBsaW5lcy5mb3JFYWNoKGwgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSBsW2wubGVuZ3RoIC0gMV07XG4gICAgICBzdHlsZS5jaGFyYWN0ZXJzID0gc3R5bGUuY2hhcmFjdGVycy5yZXBsYWNlKHJlMiwgJycpO1xuICAgIH0pO1xuICB9IC8vIGRlbGV0aW5nIGVtcHR5IGxpbmVzXG5cblxuICBpZiAocmVtb3ZlRW1wdHlsaW5lcykge1xuICAgIGxpbmVzID0gbGluZXMuZmlsdGVyKGwgPT4gbC5maWx0ZXIobCA9PiBsLmNoYXJhY3RlcnMucmVwbGFjZShyZTIsICcnKSAhPT0gJycpLmxlbmd0aCAhPT0gMCk7XG4gIH1cblxuICByZXR1cm4gbGluZXM7XG59XG4vKlxuXHRJbnZlcnNlIGZ1bmN0aW9uIG9mIHNwbGl0VGV4dFN0eWxlSW50b0xpbmVzLlxuXHRUaGUgYWRkTmV3bGluZUNoYXJhY3RlcnMgcGFyYW1ldGVyIGlzIHJlc3BvbnNpYmxlIGZvciB3aGV0aGVyIHlvdSBuZWVkIHRvIGFkZCBhIG5ld2xpbmUgY2hhcmFjdGVyIGF0IHRoZSBlbmQgb2YgZWFjaCBsaW5lXG4qL1xuXG5cbmZ1bmN0aW9uIGpvaW5UZXh0TGluZXNTdHlsZXModGV4dFN0eWxlLCBhZGROZXdsaW5lQ2hhcmFjdGVycyA9IGZhbHNlKSB7XG4gIGNvbnN0IHRTdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KSh0ZXh0U3R5bGUpO1xuICBsZXQgbmV3bGluZSA9ICcnO1xuXG4gIHN3aXRjaCAodHlwZW9mIGFkZE5ld2xpbmVDaGFyYWN0ZXJzKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBpZiAoYWRkTmV3bGluZUNoYXJhY3RlcnMpIG5ld2xpbmUgPSAnXFxuJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIG5ld2xpbmUgPSBhZGROZXdsaW5lQ2hhcmFjdGVycztcbiAgICAgIGJyZWFrO1xuICB9IC8vIGFkZGluZyBuZXcgbGluZSBjaGFyYWN0ZXJzXG5cblxuICBpZiAoYWRkTmV3bGluZUNoYXJhY3RlcnMgJiYgbmV3bGluZSkge1xuICAgIHRTdHlsZS5mb3JFYWNoKChzdHlsZSwgaSkgPT4ge1xuICAgICAgaWYgKGkgIT09IHRTdHlsZS5sZW5ndGggLSAxKSBzdHlsZVtzdHlsZS5sZW5ndGggLSAxXS5jaGFyYWN0ZXJzICs9IG5ld2xpbmU7XG4gICAgfSk7XG4gIH0gLy8gam9pblxuXG5cbiAgY29uc3QgbGluZSA9IHRTdHlsZS5zaGlmdCgpO1xuICB0U3R5bGUuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgY29uc3QgZml0c3QgPSBzdHlsZS5zaGlmdCgpO1xuXG4gICAgaWYgKGlzRXF1YWxMZXR0ZXJTdHlsZShmaXRzdCwgbGluZVtsaW5lLmxlbmd0aCAtIDFdKSkge1xuICAgICAgLy8gdGhlIHN0eWxlIG9mIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpbmUgZGlmZmVycyBmcm9tIHRoZSBlbmQgb2YgdGhlIHN0eWxlIG9mIHRoZSB0ZXh0IGJlaW5nIGNvbXBpbGVkXG4gICAgICBsaW5lW2xpbmUubGVuZ3RoIC0gMV0uY2hhcmFjdGVycyArPSBmaXRzdC5jaGFyYWN0ZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lLnB1c2goZml0c3QpO1xuICAgIH1cblxuICAgIGlmIChzdHlsZS5sZW5ndGgpIGxpbmUucHVzaCguLi5zdHlsZSk7XG4gIH0pO1xuICByZXR1cm4gbGluZTtcbn1cbi8qXG5cdEFwcGx5IHRoZSB0ZXh0IHN0eWxlcyBvYnRhaW5lZCBmcm9tIHBhcnNlVGV4dFN0eWxlIHRvIHRoZSB0ZXh0IG5vZGUuXG5cdFRoZSBzZWNvbmQgcGFyYW1ldGVyIGNhbiBiZSBwYXNzZWQgYSB0ZXh0IG5vZGUsIHRoZSB0ZXh0IG9mIHdoaWNoIHdpbGwgYmUgY2hhbmdlZC5cbiovXG5cblxuYXN5bmMgZnVuY3Rpb24gYXBwbHlUZXh0U3R5bGVUb1RleHROb2RlKHRleHRTdHlsZSwgdGV4dE5vZGUsIGlzTG9hZEZvbnRzID0gdHJ1ZSkge1xuICBpZiAoaXNMb2FkRm9udHMpIHtcbiAgICBsZXQgZm9udHMgPSBbe1xuICAgICAgZmFtaWx5OiAnUm9ib3RvJyxcbiAgICAgIHN0eWxlOiAnUmVndWxhcidcbiAgICB9XTtcblxuICAgIGlmICh0ZXh0U3R5bGVbMF0uZm9udE5hbWUpIHtcbiAgICAgIGZvbnRzLnB1c2goLi4udGV4dFN0eWxlLm1hcChlID0+IGUuZm9udE5hbWUpKTtcbiAgICB9XG5cbiAgICBpZiAodGV4dE5vZGUpIHtcbiAgICAgIGZvbnRzLnB1c2goLi4uKDAsIF9nZXRBbGxGb250cy5kZWZhdWx0KShbdGV4dE5vZGVdKSk7XG4gICAgfVxuXG4gICAgZm9udHMgPSAoMCwgX3VuaXFXaXRoMi5kZWZhdWx0KShmb250cywgX2lzRXF1YWwyLmRlZmF1bHQpO1xuICAgIGF3YWl0ICgwLCBfbG9hZEZvbnRzLmRlZmF1bHQpKGZvbnRzKTtcbiAgfVxuXG4gIGlmICghdGV4dE5vZGUpIHRleHROb2RlID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICB0ZXh0Tm9kZS5jaGFyYWN0ZXJzID0gdGV4dFN0eWxlLnJlZHVjZSgoc3RyLCBzdHlsZSkgPT4ge1xuICAgIHJldHVybiBzdHIgKyBzdHlsZS5jaGFyYWN0ZXJzO1xuICB9LCAnJyk7XG4gIGxldCBuID0gMDtcbiAgdGV4dFN0eWxlLmZvckVhY2goc3R5bGUgPT4ge1xuICAgIGNvbnN0IEwgPSBzdHlsZS5jaGFyYWN0ZXJzLmxlbmd0aDtcblxuICAgIGlmIChMKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgICAgICBpZiAoa2V5ICE9PSAnY2hhcmFjdGVycycpIHtcbiAgICAgICAgICBjb25zdCBuYW1lID0ga2V5LnJlcGxhY2UoL14oLikvZywgJDEgPT4gJDEudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgdGV4dE5vZGVbJ3NldFJhbmdlJyArIG5hbWVdKG4sIG4gKyBMLCBzdHlsZVtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuICs9IEw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRleHROb2RlO1xufVxuLypcblx0UmVwbGFjaW5nIHRleHQgaW4gdGV4dFN0eWxlXG5cdElmIHRoZSBwYXNzZWQgdGV4dCBpcyBzaG9ydGVyIHRoYW4gaW4gc3R5bGVzLCB0aGUgZXh0cmEgc3R5bGVzIHdpbGwgYmUgcmVtb3ZlZC5cblx0SWYgdGhlIHBhc3NlZCB0ZXh0IGlzIGxvbmdlciB0aGFuIHRoZSBzdHlsZXMsIHRoZSBvdmVyZmxvdyB0ZXh0IHdpbGwgZ2V0IHRoZSBzdHlsZSBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIuXG4qL1xuXG5cbmZ1bmN0aW9uIGNoYW5nZUNoYXJhY3RlcnNUZXh0U3R5bGUodGV4dFN0eWxlLCBjaGFyYWN0ZXJzKSB7XG4gIHRleHRTdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KSh0ZXh0U3R5bGUpO1xuICBsZXQgbiA9IDA7XG4gIGNvbnN0IGxlbmd0aCA9IHRleHRTdHlsZS5sZW5ndGggLSAxO1xuICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzID0gdGV4dFN0eWxlW2ldO1xuICAgIGxldCBsID0gcy5jaGFyYWN0ZXJzLmxlbmd0aDsgLy8gaWYgcGFzc2VkIHRleHQgaXMgbG9uZ2VyIHRoYW4gdGV4dCBpbiBzdHlsZXNcblxuICAgIGlmIChpID09IGxlbmd0aCkgbCA9IGNoYXJhY3RlcnNMZW5ndGg7XG4gICAgcy5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycy5zbGljZShuLCBuICsgbCk7XG4gICAgbiArPSBsO1xuXG4gICAgaWYgKG4gPiBjaGFyYWN0ZXJzTGVuZ3RoKSB7XG4gICAgICAvLyBuZXcgdGV4dCBpcyBzaG9ydGVyIHRoYW4gdGV4dCBpbiBzdHlsZXNcbiAgICAgIHRleHRTdHlsZSA9IHRleHRTdHlsZS5zcGxpY2UoMCwgaSArIDEpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRleHRTdHlsZTtcbn1cbi8qXG5cdEZ1bmN0aW9uIGZvciBjaGFuZ2luZyBwcm9wZXJ0aWVzIG9mIFRleHRTdHlsZS4gXG5cdFRoZSBiZWZvcmVWYWx1ZSBwYXJhbWV0ZXIgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSB2YWx1ZSBpbiB3aGljaCB0aGUgcHJvcGVydHkgdG8gYmUgY2hhbmdlZCBzaG91bGQgYmUuXG4qL1xuXG5cbmZ1bmN0aW9uIGNoYW5nZVRleHRTdHlsZSh0ZXh0U3R5bGUsIHN0eWxlTmFtZSwgbmV3VmFsdWUsIGJlZm9yZVZhbHVlKSB7XG4gIHRleHRTdHlsZSA9ICgwLCBfY2xvbmVEZWVwMi5kZWZhdWx0KSh0ZXh0U3R5bGUpO1xuICB0ZXh0U3R5bGUuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgaWYgKGJlZm9yZVZhbHVlID09PSB1bmRlZmluZWQgfHwgYmVmb3JlVmFsdWUgIT09IHVuZGVmaW5lZCAmJiAoMCwgX2lzRXF1YWwyLmRlZmF1bHQpKHN0eWxlW3N0eWxlTmFtZV0sIGJlZm9yZVZhbHVlKSkge1xuICAgICAgO1xuICAgICAgc3R5bGVbc3R5bGVOYW1lXSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0ZXh0U3R5bGU7XG59XG4vKmNvbXBhcmluZyBjaGFyYWN0ZXIgc3R5bGVzIHRvIHRoZSBzdHlsZXMgb2YgdGhlIGNvbXBvc2luZyBzdWJzdHJpbmcqL1xuXG5cbmZ1bmN0aW9uIGlzRXF1YWxMZXR0ZXJTdHlsZShsZXR0ZXIsIHRleHRTdHlsZSkge1xuICBsZXQgaXMgPSB0cnVlOyAvLyBpdGVyYXRpbmcgb3ZlciBmb250IHByb3BlcnRpZXNcblxuICBmb3IgKGNvbnN0IGtleSBpbiBsZXR0ZXIpIHtcbiAgICBpZiAoa2V5ICE9PSAnY2hhcmFjdGVycycpIHtcbiAgICAgIGlmICghKDAsIF9pc0VxdWFsMi5kZWZhdWx0KShsZXR0ZXJba2V5XSwgdGV4dFN0eWxlW2tleV0pKSB7XG4gICAgICAgIC8vIHByb3BlcnR5IHZhcmllc1xuICAgICAgICAvLyBzdG9wIHNlYXJjaGluZ1xuICAgICAgICBpcyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXM7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNldENoYXJhY3RlcnMgPSB2b2lkIDA7XG5cbnZhciBfdW5pcUJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC91bmlxQnlcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBzZXRDaGFyYWN0ZXJzID0gYXN5bmMgKG5vZGUsIGNoYXJhY3RlcnMsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZmFsbGJhY2tGb250ID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5mYWxsYmFja0ZvbnQpIHx8IHtcbiAgICBmYW1pbHk6ICdSb2JvdG8nLFxuICAgIHN0eWxlOiAnUmVndWxhcidcbiAgfTtcblxuICB0cnkge1xuICAgIGlmIChub2RlLmZvbnROYW1lID09PSBmaWdtYS5taXhlZCkge1xuICAgICAgaWYgKChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc21hcnRTdHJhdGVneSkgPT09ICdwcmV2YWlsJykge1xuICAgICAgICBjb25zdCBmb250SGFzaFRyZWUgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGNoYXJGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKGkgLSAxLCBpKTtcbiAgICAgICAgICBjb25zdCBrZXkgPSBgJHtjaGFyRm9udC5mYW1pbHl9Ojoke2NoYXJGb250LnN0eWxlfWA7XG4gICAgICAgICAgZm9udEhhc2hUcmVlW2tleV0gPSBmb250SGFzaFRyZWVba2V5XSA/IGZvbnRIYXNoVHJlZVtrZXldICsgMSA6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2YWlsZWRUcmVlSXRlbSA9IE9iamVjdC5lbnRyaWVzKGZvbnRIYXNoVHJlZSkuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pWzBdO1xuICAgICAgICBjb25zdCBbZmFtaWx5LCBzdHlsZV0gPSBwcmV2YWlsZWRUcmVlSXRlbVswXS5zcGxpdCgnOjonKTtcbiAgICAgICAgY29uc3QgcHJldmFpbGVkRm9udCA9IHtcbiAgICAgICAgICBmYW1pbHksXG4gICAgICAgICAgc3R5bGVcbiAgICAgICAgfTtcbiAgICAgICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhwcmV2YWlsZWRGb250KTtcbiAgICAgICAgbm9kZS5mb250TmFtZSA9IHByZXZhaWxlZEZvbnQ7XG4gICAgICB9IGVsc2UgaWYgKChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc21hcnRTdHJhdGVneSkgPT09ICdzdHJpY3QnKSB7XG4gICAgICAgIHJldHVybiBzZXRDaGFyYWN0ZXJzV2l0aFN0cmljdE1hdGNoRm9udChub2RlLCBjaGFyYWN0ZXJzLCBmYWxsYmFja0ZvbnQpO1xuICAgICAgfSBlbHNlIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNtYXJ0U3RyYXRlZ3kpID09PSAnZXhwZXJpbWVudGFsJykge1xuICAgICAgICByZXR1cm4gc2V0Q2hhcmFjdGVyc1dpdGhTbWFydE1hdGNoRm9udChub2RlLCBjaGFyYWN0ZXJzLCBmYWxsYmFja0ZvbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlyc3RDaGFyRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZSgwLCAxKTtcbiAgICAgICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhmaXJzdENoYXJGb250KTtcbiAgICAgICAgbm9kZS5mb250TmFtZSA9IGZpcnN0Q2hhckZvbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoe1xuICAgICAgICBmYW1pbHk6IG5vZGUuZm9udE5hbWUuZmFtaWx5LFxuICAgICAgICBzdHlsZTogbm9kZS5mb250TmFtZS5zdHlsZVxuICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLndhcm4oYEZhaWxlZCB0byBsb2FkIFwiJHtub2RlLmZvbnROYW1lWydmYW1pbHknXX0gJHtub2RlLmZvbnROYW1lWydzdHlsZSddfVwiIGZvbnQgYW5kIHJlcGxhY2VkIHdpdGggZmFsbGJhY2sgXCIke2ZhbGxiYWNrRm9udC5mYW1pbHl9ICR7ZmFsbGJhY2tGb250LnN0eWxlfVwiYCwgZXJyKTtcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKGZhbGxiYWNrRm9udCk7XG4gICAgbm9kZS5mb250TmFtZSA9IGZhbGxiYWNrRm9udDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbm9kZS5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKGBGYWlsZWQgdG8gc2V0IGNoYXJhY3RlcnMuIFNraXBwZWQuYCwgZXJyKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydHMuc2V0Q2hhcmFjdGVycyA9IHNldENoYXJhY3RlcnM7XG5cbmNvbnN0IHNldENoYXJhY3RlcnNXaXRoU3RyaWN0TWF0Y2hGb250ID0gYXN5bmMgKG5vZGUsIGNoYXJhY3RlcnMsIGZhbGxiYWNrRm9udCkgPT4ge1xuICBjb25zdCBmb250SGFzaFRyZWUgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN0YXJ0SWR4ID0gaSAtIDE7XG4gICAgY29uc3Qgc3RhcnRDaGFyRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShzdGFydElkeCwgaSk7XG4gICAgY29uc3Qgc3RhcnRDaGFyRm9udFZhbCA9IGAke3N0YXJ0Q2hhckZvbnQuZmFtaWx5fTo6JHtzdGFydENoYXJGb250LnN0eWxlfWA7XG5cbiAgICB3aGlsZSAoaSA8IG5vZGUuY2hhcmFjdGVycy5sZW5ndGgpIHtcbiAgICAgIGkrKztcbiAgICAgIGNvbnN0IGNoYXJGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKGkgLSAxLCBpKTtcblxuICAgICAgaWYgKHN0YXJ0Q2hhckZvbnRWYWwgIT09IGAke2NoYXJGb250LmZhbWlseX06OiR7Y2hhckZvbnQuc3R5bGV9YCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb250SGFzaFRyZWVbYCR7c3RhcnRJZHh9XyR7aX1gXSA9IHN0YXJ0Q2hhckZvbnRWYWw7XG4gIH1cblxuICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKGZhbGxiYWNrRm9udCk7XG4gIG5vZGUuZm9udE5hbWUgPSBmYWxsYmFja0ZvbnQ7XG4gIG5vZGUuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG4gIGNvbnNvbGUubG9nKGZvbnRIYXNoVHJlZSk7XG4gIGF3YWl0IFByb21pc2UuYWxsKE9iamVjdC5rZXlzKGZvbnRIYXNoVHJlZSkubWFwKGFzeW5jIHJhbmdlID0+IHtcbiAgICBjb25zb2xlLmxvZyhyYW5nZSwgZm9udEhhc2hUcmVlW3JhbmdlXSk7XG4gICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gcmFuZ2Uuc3BsaXQoJ18nKTtcbiAgICBjb25zdCBbZmFtaWx5LCBzdHlsZV0gPSBmb250SGFzaFRyZWVbcmFuZ2VdLnNwbGl0KCc6OicpO1xuICAgIGNvbnN0IG1hdGNoZWRGb250ID0ge1xuICAgICAgZmFtaWx5LFxuICAgICAgc3R5bGVcbiAgICB9O1xuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMobWF0Y2hlZEZvbnQpO1xuICAgIHJldHVybiBub2RlLnNldFJhbmdlRm9udE5hbWUoTnVtYmVyKHN0YXJ0KSwgTnVtYmVyKGVuZCksIG1hdGNoZWRGb250KTtcbiAgfSkpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGdldERlbGltaXRlclBvcyA9IChzdHIsIGRlbGltaXRlciwgc3RhcnRJZHggPSAwLCBlbmRJZHggPSBzdHIubGVuZ3RoKSA9PiB7XG4gIGNvbnN0IGluZGljZXMgPSBbXTtcbiAgbGV0IHRlbXAgPSBzdGFydElkeDtcblxuICBmb3IgKGxldCBpID0gc3RhcnRJZHg7IGkgPCBlbmRJZHg7IGkrKykge1xuICAgIGlmIChzdHJbaV0gPT09IGRlbGltaXRlciAmJiBpICsgc3RhcnRJZHggIT09IGVuZElkeCAmJiB0ZW1wICE9PSBpICsgc3RhcnRJZHgpIHtcbiAgICAgIGluZGljZXMucHVzaChbdGVtcCwgaSArIHN0YXJ0SWR4XSk7XG4gICAgICB0ZW1wID0gaSArIHN0YXJ0SWR4ICsgMTtcbiAgICB9XG4gIH1cblxuICB0ZW1wICE9PSBlbmRJZHggJiYgaW5kaWNlcy5wdXNoKFt0ZW1wLCBlbmRJZHhdKTtcbiAgcmV0dXJuIGluZGljZXMuZmlsdGVyKEJvb2xlYW4pO1xufTtcblxuY29uc3QgYnVpbGRMaW5lYXJPcmRlciA9IG5vZGUgPT4ge1xuICBjb25zdCBmb250VHJlZSA9IFtdO1xuICBjb25zdCBuZXdMaW5lc1BvcyA9IGdldERlbGltaXRlclBvcyhub2RlLmNoYXJhY3RlcnMsICdcXG4nKTtcbiAgbmV3TGluZXNQb3MuZm9yRWFjaCgoW25ld0xpbmVzUmFuZ2VTdGFydCwgbmV3TGluZXNSYW5nZUVuZF0sIG4pID0+IHtcbiAgICBjb25zdCBuZXdMaW5lc1JhbmdlRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShuZXdMaW5lc1JhbmdlU3RhcnQsIG5ld0xpbmVzUmFuZ2VFbmQpO1xuXG4gICAgaWYgKG5ld0xpbmVzUmFuZ2VGb250ID09PSBmaWdtYS5taXhlZCkge1xuICAgICAgY29uc3Qgc3BhY2VzUG9zID0gZ2V0RGVsaW1pdGVyUG9zKG5vZGUuY2hhcmFjdGVycywgJyAnLCBuZXdMaW5lc1JhbmdlU3RhcnQsIG5ld0xpbmVzUmFuZ2VFbmQpO1xuICAgICAgc3BhY2VzUG9zLmZvckVhY2goKFtzcGFjZXNSYW5nZVN0YXJ0LCBzcGFjZXNSYW5nZUVuZF0sIHMpID0+IHtcbiAgICAgICAgY29uc3Qgc3BhY2VzUmFuZ2VGb250ID0gbm9kZS5nZXRSYW5nZUZvbnROYW1lKHNwYWNlc1JhbmdlU3RhcnQsIHNwYWNlc1JhbmdlRW5kKTtcblxuICAgICAgICBpZiAoc3BhY2VzUmFuZ2VGb250ID09PSBmaWdtYS5taXhlZCkge1xuICAgICAgICAgIGNvbnN0IHNwYWNlc1JhbmdlRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShzcGFjZXNSYW5nZVN0YXJ0LCBzcGFjZXNSYW5nZVN0YXJ0WzBdKTtcbiAgICAgICAgICBmb250VHJlZS5wdXNoKHtcbiAgICAgICAgICAgIHN0YXJ0OiBzcGFjZXNSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgZGVsaW1pdGVyOiAnICcsXG4gICAgICAgICAgICBmYW1pbHk6IHNwYWNlc1JhbmdlRm9udC5mYW1pbHksXG4gICAgICAgICAgICBzdHlsZTogc3BhY2VzUmFuZ2VGb250LnN0eWxlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9udFRyZWUucHVzaCh7XG4gICAgICAgICAgICBzdGFydDogc3BhY2VzUmFuZ2VTdGFydCxcbiAgICAgICAgICAgIGRlbGltaXRlcjogJyAnLFxuICAgICAgICAgICAgZmFtaWx5OiBzcGFjZXNSYW5nZUZvbnQuZmFtaWx5LFxuICAgICAgICAgICAgc3R5bGU6IHNwYWNlc1JhbmdlRm9udC5zdHlsZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9udFRyZWUucHVzaCh7XG4gICAgICAgIHN0YXJ0OiBuZXdMaW5lc1JhbmdlU3RhcnQsXG4gICAgICAgIGRlbGltaXRlcjogJ1xcbicsXG4gICAgICAgIGZhbWlseTogbmV3TGluZXNSYW5nZUZvbnQuZmFtaWx5LFxuICAgICAgICBzdHlsZTogbmV3TGluZXNSYW5nZUZvbnQuc3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmb250VHJlZS5zb3J0KChhLCBiKSA9PiArYS5zdGFydCAtICtiLnN0YXJ0KS5tYXAoKHtcbiAgICBmYW1pbHksXG4gICAgc3R5bGUsXG4gICAgZGVsaW1pdGVyXG4gIH0pID0+ICh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlLFxuICAgIGRlbGltaXRlclxuICB9KSk7XG59O1xuXG5jb25zdCBzZXRDaGFyYWN0ZXJzV2l0aFNtYXJ0TWF0Y2hGb250ID0gYXN5bmMgKG5vZGUsIGNoYXJhY3RlcnMsIGZhbGxiYWNrRm9udCkgPT4ge1xuICBjb25zdCByYW5nZVRyZWUgPSBidWlsZExpbmVhck9yZGVyKG5vZGUpO1xuICBjb25zdCBmb250c1RvTG9hZCA9ICgwLCBfdW5pcUJ5Mi5kZWZhdWx0KShyYW5nZVRyZWUsICh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlXG4gIH0pID0+IGAke2ZhbWlseX06OiR7c3R5bGV9YCkubWFwKCh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlXG4gIH0pID0+ICh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlXG4gIH0pKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoWy4uLmZvbnRzVG9Mb2FkLCBmYWxsYmFja0ZvbnRdLm1hcChmaWdtYS5sb2FkRm9udEFzeW5jKSk7XG4gIG5vZGUuZm9udE5hbWUgPSBmYWxsYmFja0ZvbnQ7XG4gIG5vZGUuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG4gIGxldCBwcmV2UG9zID0gMDtcbiAgcmFuZ2VUcmVlLmZvckVhY2goKHtcbiAgICBmYW1pbHksXG4gICAgc3R5bGUsXG4gICAgZGVsaW1pdGVyXG4gIH0pID0+IHtcbiAgICBpZiAocHJldlBvcyA8IG5vZGUuY2hhcmFjdGVycy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGRlbGltZXRlclBvcyA9IG5vZGUuY2hhcmFjdGVycy5pbmRleE9mKGRlbGltaXRlciwgcHJldlBvcyk7XG4gICAgICBjb25zdCBlbmRQb3MgPSBkZWxpbWV0ZXJQb3MgPiBwcmV2UG9zID8gZGVsaW1ldGVyUG9zIDogbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICAgIGNvbnN0IG1hdGNoZWRGb250ID0ge1xuICAgICAgICBmYW1pbHksXG4gICAgICAgIHN0eWxlXG4gICAgICB9O1xuICAgICAgbm9kZS5zZXRSYW5nZUZvbnROYW1lKHByZXZQb3MsIGVuZFBvcywgbWF0Y2hlZEZvbnQpO1xuICAgICAgcHJldlBvcyA9IGVuZFBvcyArIDE7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRydWU7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9wTGV2ZWxGcmFtZXM7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiByZXR1cm5zIGFsbCB0b3AgbGV2ZWwgZnJhbWVzIG9uIGN1cnJlbnRQYWdlXG4gKi9cbmZ1bmN0aW9uIHRvcExldmVsRnJhbWVzKHBhZ2UgPSBmaWdtYS5jdXJyZW50UGFnZSkge1xuICByZXR1cm4gcGFnZS5jaGlsZHJlbi5maWx0ZXIobm9kZSA9PiBub2RlLnR5cGUgPT09ICdGUkFNRScpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY2xvbmVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2Nsb25lLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0QWxsRm9udHNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldEFsbEZvbnRzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0Qm91bmRpbmdSZWN0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRCb3VuZGluZ1JlY3QuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXROb2RlSW5kZXhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldE5vZGVJbmRleC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldFBhZ2VcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldFBhZ2UuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJoYXNDaGlsZHJlblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaGFzQ2hpbGRyZW4uaGFzQ2hpbGRyZW47XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNQYXJ0T2ZJbnN0YW5jZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNQYXJ0T2ZJbnN0YW5jZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzUGFydE9mTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNQYXJ0T2ZOb2RlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNWaXNpYmxlTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNWaXNpYmxlTm9kZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImxvYWRVbmlxdWVGb250c1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfbG9hZFVuaXF1ZUZvbnRzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibG9hZEZvbnRzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9sb2FkRm9udHMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJub2RlVG9PYmplY3RcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX25vZGVUb09iamVjdC5ub2RlVG9PYmplY3Q7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidG9wTGV2ZWxGcmFtZXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RvcExldmVsRnJhbWVzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0VGV4dE5vZGVDU1NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldENTU1N0eWxlcy5nZXRUZXh0Tm9kZUNTUztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmaW5kQWxsXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9maW5kTWV0aG9kcy5maW5kQWxsO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldFJlbGF0aXZlUG9zaXRpb25cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldFJlbGF0aXZlUG9zaXRpb24uZ2V0UmVsYXRpdmVQb3NpdGlvbjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRUb3BMZXZlbFBhcmVudFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0UmVsYXRpdmVQb3NpdGlvbi5nZXRUb3BMZXZlbFBhcmVudDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmaWdtYVJHQlRvV2ViUkdCXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0Q29sb3IuZmlnbWFSR0JUb1dlYlJHQjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3ZWJSR0JUb0ZpZ21hUkdCXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0Q29sb3Iud2ViUkdCVG9GaWdtYVJHQjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmaWdtYVJHQlRvSGV4XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0Q29sb3IuZmlnbWFSR0JUb0hleDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJoZXhUb0ZpZ21hUkdCXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0Q29sb3IuaGV4VG9GaWdtYVJHQjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0NvbXBvbmVudE5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNDb21wb25lbnROb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzRnJhbWVOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzRnJhbWVOb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzR3JvdXBOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzR3JvdXBOb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzSW5zdGFuY2VOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzSW5zdGFuY2VOb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzUGFnZU5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVHlwZU5vZGUuaXNQYWdlTm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1RleHROb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzVGV4dE5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNPbmVPZk5vZGVUeXBlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzT25lT2ZOb2RlVHlwZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJleHRyYWN0SW1hZ2VDcm9wUGFyYW1zXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zLmV4dHJhY3RJbWFnZUNyb3BQYXJhbXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZXh0cmFjdExpbmVhckdyYWRpZW50U3RhcnRFbmQuZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJleHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcy5leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2V0Q2hhcmFjdGVyc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfc2V0Q2hhcmFjdGVycy5zZXRDaGFyYWN0ZXJzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlVGV4dFN0eWxlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5wYXJzZVRleHRTdHlsZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzcGxpdFRleHRTdHlsZUludG9MaW5lc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUuc3BsaXRUZXh0U3R5bGVJbnRvTGluZXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiam9pblRleHRMaW5lc1N0eWxlc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUuam9pblRleHRMaW5lc1N0eWxlcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhcHBseVRleHRTdHlsZVRvVGV4dE5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLmFwcGx5VGV4dFN0eWxlVG9UZXh0Tm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjaGFuZ2VDaGFyYWN0ZXJzVGV4dFN0eWxlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5jaGFuZ2VDaGFyYWN0ZXJzVGV4dFN0eWxlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNoYW5nZVRleHRTdHlsZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUuY2hhbmdlVGV4dFN0eWxlO1xuICB9XG59KTtcblxudmFyIF9jbG9uZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9jbG9uZVwiKSk7XG5cbnZhciBfZ2V0QWxsRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0QWxsRm9udHNcIikpO1xuXG52YXIgX2dldEJvdW5kaW5nUmVjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9nZXRCb3VuZGluZ1JlY3RcIikpO1xuXG52YXIgX2dldE5vZGVJbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9nZXROb2RlSW5kZXhcIikpO1xuXG52YXIgX2dldFBhZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0UGFnZVwiKSk7XG5cbnZhciBfaGFzQ2hpbGRyZW4gPSByZXF1aXJlKFwiLi9oZWxwZXJzL2hhc0NoaWxkcmVuXCIpO1xuXG52YXIgX2lzUGFydE9mSW5zdGFuY2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvaXNQYXJ0T2ZJbnN0YW5jZVwiKSk7XG5cbnZhciBfaXNQYXJ0T2ZOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2lzUGFydE9mTm9kZVwiKSk7XG5cbnZhciBfaXNWaXNpYmxlTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9pc1Zpc2libGVOb2RlXCIpKTtcblxudmFyIF9sb2FkVW5pcXVlRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvbG9hZFVuaXF1ZUZvbnRzXCIpKTtcblxudmFyIF9sb2FkRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvbG9hZEZvbnRzXCIpKTtcblxudmFyIF9ub2RlVG9PYmplY3QgPSByZXF1aXJlKFwiLi9oZWxwZXJzL25vZGVUb09iamVjdFwiKTtcblxudmFyIF90b3BMZXZlbEZyYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy90b3BMZXZlbEZyYW1lc1wiKSk7XG5cbnZhciBfZ2V0Q1NTU3R5bGVzID0gcmVxdWlyZShcIi4vaGVscGVycy9nZXRDU1NTdHlsZXNcIik7XG5cbnZhciBfZmluZE1ldGhvZHMgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2ZpbmRNZXRob2RzXCIpO1xuXG52YXIgX2dldFJlbGF0aXZlUG9zaXRpb24gPSByZXF1aXJlKFwiLi9oZWxwZXJzL2dldFJlbGF0aXZlUG9zaXRpb25cIik7XG5cbnZhciBfY29udmVydENvbG9yID0gcmVxdWlyZShcIi4vaGVscGVycy9jb252ZXJ0Q29sb3JcIik7XG5cbnZhciBfaXNUeXBlTm9kZSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvaXNUeXBlTm9kZVwiKTtcblxudmFyIF9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zID0gcmVxdWlyZShcIi4vaGVscGVycy9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zXCIpO1xuXG52YXIgX2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kID0gcmVxdWlyZShcIi4vaGVscGVycy9leHRyYWN0TGluZWFyR3JhZGllbnRTdGFydEVuZFwiKTtcblxudmFyIF9leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXMgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtc1wiKTtcblxudmFyIF9zZXRDaGFyYWN0ZXJzID0gcmVxdWlyZShcIi4vaGVscGVycy9zZXRDaGFyYWN0ZXJzXCIpO1xuXG52YXIgX3BhcnNlVGV4dFN0eWxlID0gcmVxdWlyZShcIi4vaGVscGVycy9wYXJzZVRleHRTdHlsZVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG4iLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcbiIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG4iLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbjtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25JbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduSW47XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25WYWx1ZTtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduJyksXG4gICAgYmFzZUFzc2lnbkluID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbkluJyksXG4gICAgY2xvbmVCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUJ1ZmZlcicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGNvcHlTeW1ib2xzID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHMnKSxcbiAgICBjb3B5U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHNJbicpLFxuICAgIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyksXG4gICAgZ2V0QWxsS2V5c0luID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5c0luJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVBcnJheScpLFxuICAgIGluaXRDbG9uZUJ5VGFnID0gcmVxdWlyZSgnLi9faW5pdENsb25lQnlUYWcnKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNNYXAgPSByZXF1aXJlKCcuL2lzTWFwJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTZXQgPSByZXF1aXJlKCcuL2lzU2V0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihzdWJWYWx1ZSkge1xuICAgICAgcmVzdWx0LmFkZChiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN1YlZhbHVlLCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc01hcCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDEgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbmRJbmRleDtcbiIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhc0luO1xuIiwidmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUlzTmFOID0gcmVxdWlyZSgnLi9fYmFzZUlzTmFOJyksXG4gICAgc3RyaWN0SW5kZXhPZiA9IHJlcXVpcmUoJy4vX3N0cmljdEluZGV4T2YnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IGBmcm9tSW5kZXhgIGJvdW5kcyBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZVxuICAgID8gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleClcbiAgICA6IGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJc05hTiwgZnJvbUluZGV4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW5kZXhPZjtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuIiwidmFyIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hcGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBtYXAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWFwKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gbWFwVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hcDtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYU5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbnVtYmVyIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmFOO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcbiIsInZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc2V0VGFnID0gJ1tvYmplY3QgU2V0XSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNTZXRgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1NldCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IHNldFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNTZXQ7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcbiIsInZhciBiYXNlTWF0Y2hlcyA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzJyksXG4gICAgYmFzZU1hdGNoZXNQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgcHJvcGVydHkgPSByZXF1aXJlKCcuL3Byb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXRlcmF0ZWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhbiBpdGVyYXRlZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgaXRlcmF0ZWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJdGVyYXRlZSh2YWx1ZSkge1xuICAvLyBEb24ndCBzdG9yZSB0aGUgYHR5cGVvZmAgcmVzdWx0IGluIGEgdmFyaWFibGUgdG8gYXZvaWQgYSBKSVQgYnVnIGluIFNhZmFyaSA5LlxuICAvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NjAzNCBmb3IgbW9yZSBkZXRhaWxzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKVxuICAgICAgPyBiYXNlTWF0Y2hlc1Byb3BlcnR5KHZhbHVlWzBdLCB2YWx1ZVsxXSlcbiAgICAgIDogYmFzZU1hdGNoZXModmFsdWUpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUl0ZXJhdGVlO1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXNJbiA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXNJbicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzSW47XG4iLCJ2YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL19iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hdGNoRGF0YScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzYCB3aGljaCBkb2Vzbid0IGNsb25lIGBzb3VyY2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgaWYgKG1hdGNoRGF0YS5sZW5ndGggPT0gMSAmJiBtYXRjaERhdGFbMF1bMl0pIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUobWF0Y2hEYXRhWzBdWzBdLCBtYXRjaERhdGFbMF1bMV0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09PSBzb3VyY2UgfHwgYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG4iLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpLFxuICAgIGdldCA9IHJlcXVpcmUoJy4vZ2V0JyksXG4gICAgaGFzSW4gPSByZXF1aXJlKCcuL2hhc0luJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzUHJvcGVydHlgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNyY1ZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICBpZiAoaXNLZXkocGF0aCkgJiYgaXNTdHJpY3RDb21wYXJhYmxlKHNyY1ZhbHVlKSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSh0b0tleShwYXRoKSwgc3JjVmFsdWUpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIgb2JqVmFsdWUgPSBnZXQob2JqZWN0LCBwYXRoKTtcbiAgICByZXR1cm4gKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgb2JqVmFsdWUgPT09IHNyY1ZhbHVlKVxuICAgICAgPyBoYXNJbihvYmplY3QsIHBhdGgpXG4gICAgICA6IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlc1Byb3BlcnR5O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG4iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VQcm9wZXJ0eWAgd2hpY2ggc3VwcG9ydHMgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5RGVlcDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcbiIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpLFxuICAgIGNyZWF0ZVNldCA9IHJlcXVpcmUoJy4vX2NyZWF0ZVNldCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmlxKGFycmF5LCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgc2VlbiA9IHJlc3VsdDtcblxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgfVxuICBlbHNlIGlmIChsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xuICAgIGlmIChzZXQpIHtcbiAgICAgIHJldHVybiBzZXRUb0FycmF5KHNldCk7XG4gICAgfVxuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xuICB9XG4gIGVsc2Uge1xuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xuICAgICAgd2hpbGUgKHNlZW5JbmRleC0tKSB7XG4gICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICghaW5jbHVkZXMoc2VlbiwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICBpZiAoc2VlbiAhPT0gcmVzdWx0KSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuIiwidmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUFycmF5QnVmZmVyO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURhdGFWaWV3O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVJlZ0V4cDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU3ltYm9sO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9scyhzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9scztcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpO1xuXG4vKipcbiAqIENvcGllcyBvd24gYW5kIGluaGVyaXRlZCBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9sc0luKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9sc0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHNJbjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG4iLCJ2YXIgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgbm9vcCA9IHJlcXVpcmUoJy4vbm9vcCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvYmplY3Qgb2YgYHZhbHVlc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFkZCB0byB0aGUgc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IHNldC5cbiAqL1xudmFyIGNyZWF0ZVNldCA9ICEoU2V0ICYmICgxIC8gc2V0VG9BcnJheShuZXcgU2V0KFssLTBdKSlbMV0pID09IElORklOSVRZKSA/IG5vb3AgOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBTZXQodmFsdWVzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2V0O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcbiIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIENoZWNrIHRoYXQgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBhcnJTdGFja2VkID0gc3RhY2suZ2V0KGFycmF5KTtcbiAgdmFyIG90aFN0YWNrZWQgPSBzdGFjay5nZXQob3RoZXIpO1xuICBpZiAoYXJyU3RhY2tlZCAmJiBvdGhTdGFja2VkKSB7XG4gICAgcmV0dXJuIGFyclN0YWNrZWQgPT0gb3RoZXIgJiYgb3RoU3RhY2tlZCA9PSBhcnJheTtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG4iLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgdGhhdCBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIG9ialN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgdmFyIG90aFN0YWNrZWQgPSBzdGFjay5nZXQob3RoZXIpO1xuICBpZiAob2JqU3RhY2tlZCAmJiBvdGhTdGFja2VkKSB7XG4gICAgcmV0dXJuIG9ialN0YWNrZWQgPT0gb3RoZXIgJiYgb3RoU3RhY2tlZCA9PSBvYmplY3Q7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0luLCBnZXRTeW1ib2xzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXNJbjtcbiIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG4iLCJ2YXIgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdmFyIGtleSA9IHJlc3VsdFtsZW5ndGhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgcmVzdWx0W2xlbmd0aF0gPSBba2V5LCB2YWx1ZSwgaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXRjaERhdGE7XG4iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9sc0luID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAob2JqZWN0KSB7XG4gICAgYXJyYXlQdXNoKHJlc3VsdCwgZ2V0U3ltYm9scyhvYmplY3QpKTtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGUob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzSW47XG4iLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG4iLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcbiIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgZXhpc3RzIG9uIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgaGFzRnVuYykge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gdG9LZXkocGF0aFtpbmRleF0pO1xuICAgIGlmICghKHJlc3VsdCA9IG9iamVjdCAhPSBudWxsICYmIGhhc0Z1bmMob2JqZWN0LCBrZXkpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICB9XG4gIGlmIChyZXN1bHQgfHwgKytpbmRleCAhPSBsZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGxlbmd0aCA9IG9iamVjdCA9PSBudWxsID8gMCA6IG9iamVjdC5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNQYXRoO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUFycmF5KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBuZXcgYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQXJyYXk7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKSxcbiAgICBjbG9uZURhdGFWaWV3ID0gcmVxdWlyZSgnLi9fY2xvbmVEYXRhVmlldycpLFxuICAgIGNsb25lUmVnRXhwID0gcmVxdWlyZSgnLi9fY2xvbmVSZWdFeHAnKSxcbiAgICBjbG9uZVN5bWJvbCA9IHJlcXVpcmUoJy4vX2Nsb25lU3ltYm9sJyksXG4gICAgY2xvbmVUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fY2xvbmVUeXBlZEFycmF5Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBNYXBgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIGBTZXRgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3I7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUJ5VGFnO1xuIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpZiBzdWl0YWJsZSBmb3Igc3RyaWN0XG4gKiAgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmljdENvbXBhcmFibGU7XG4iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG4iLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYG1hdGNoZXNQcm9wZXJ0eWAgZm9yIHNvdXJjZSB2YWx1ZXMgc3VpdGFibGVcbiAqIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShrZXksIHNyY1ZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSBzcmNWYWx1ZSAmJlxuICAgICAgKHNyY1ZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiBPYmplY3Qob2JqZWN0KSkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlO1xuIiwidmFyIG1lbW9pemUgPSByZXF1aXJlKCcuL21lbW9pemUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIG1heGltdW0gbWVtb2l6ZSBjYWNoZSBzaXplLiAqL1xudmFyIE1BWF9NRU1PSVpFX1NJWkUgPSA1MDA7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1lbW9pemVgIHdoaWNoIGNsZWFycyB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24nc1xuICogY2FjaGUgd2hlbiBpdCBleGNlZWRzIGBNQVhfTUVNT0laRV9TSVpFYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1lbW9pemVDYXBwZWQoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gbWVtb2l6ZShmdW5jLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoY2FjaGUuc2l6ZSA9PT0gTUFYX01FTU9JWkVfU0laRSkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAgdmFyIGNhY2hlID0gcmVzdWx0LmNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVDYXBwZWQ7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcbiIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5kZXhPZmAgd2hpY2ggcGVyZm9ybXMgc3RyaWN0IGVxdWFsaXR5XG4gKiBjb21wYXJpc29ucyBvZiB2YWx1ZXMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmljdEluZGV4T2Y7XG4iLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDYgLyogLiAqLykge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3ViU3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdWJTdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcbiIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG4iLCJ2YXIgYmFzZUNsb25lID0gcmVxdWlyZSgnLi9fYmFzZUNsb25lJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uY2xvbmVgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGNsb25lcyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZWN1cnNpdmVseSBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBkZWVwIGNsb25lZCB2YWx1ZS5cbiAqIEBzZWUgXy5jbG9uZVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKG9iamVjdHMpO1xuICogY29uc29sZS5sb2coZGVlcFswXSA9PT0gb2JqZWN0c1swXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgQ0xPTkVfREVFUF9GTEFHIHwgQ0xPTkVfU1lNQk9MU19GTEFHKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcbiIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuIiwidmFyIGJhc2VIYXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VIYXNJbicpLFxuICAgIGhhc1BhdGggPSByZXF1aXJlKCcuL19oYXNQYXRoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBpcyBhIGRpcmVjdCBvciBpbmhlcml0ZWQgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0gXy5jcmVhdGUoeyAnYSc6IF8uY3JlYXRlKHsgJ2InOiAyIH0pIH0pO1xuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsIFsnYScsICdiJ10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNJbjtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG4iLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG4iLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmVcbiAqIGVxdWl2YWxlbnQuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIHN1cHBvcnRzIGNvbXBhcmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLFxuICogZGF0ZSBvYmplY3RzLCBlcnJvciBvYmplY3RzLCBtYXBzLCBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLFxuICogc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkIGFycmF5cy4gYE9iamVjdGAgb2JqZWN0cyBhcmUgY29tcGFyZWRcbiAqIGJ5IHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGdW5jdGlvbnMgYW5kIERPTVxuICogbm9kZXMgYXJlIGNvbXBhcmVkIGJ5IHN0cmljdCBlcXVhbGl0eSwgaS5lLiBgPT09YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5pc0VxdWFsKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIG9iamVjdCA9PT0gb3RoZXI7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VxdWFsKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VxdWFsO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcbiIsInZhciBiYXNlSXNNYXAgPSByZXF1aXJlKCcuL19iYXNlSXNNYXAnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzTWFwID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNNYXA7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBNYXBgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTWFwKG5ldyBNYXApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNNYXAobmV3IFdlYWtNYXApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzTWFwID0gbm9kZUlzTWFwID8gYmFzZVVuYXJ5KG5vZGVJc01hcCkgOiBiYXNlSXNNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXA7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlSXNTZXQgPSByZXF1aXJlKCcuL19iYXNlSXNTZXQnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzU2V0ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNTZXQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTZXRgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHNldCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU2V0KG5ldyBTZXQpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTZXQobmV3IFdlYWtTZXQpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzU2V0ID0gbm9kZUlzU2V0ID8gYmFzZVVuYXJ5KG5vZGVJc1NldCkgOiBiYXNlSXNTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTZXQ7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYHVuZGVmaW5lZGAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1VuZGVmaW5lZCh2b2lkIDApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNVbmRlZmluZWQobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1VuZGVmaW5lZDtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzSW4gPSByZXF1aXJlKCcuL19iYXNlS2V5c0luJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG4iLCJ2YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8udW5pcWAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgaXRlcmF0ZWVgIHdoaWNoIGlzXG4gKiBpbnZva2VkIGZvciBlYWNoIGVsZW1lbnQgaW4gYGFycmF5YCB0byBnZW5lcmF0ZSB0aGUgY3JpdGVyaW9uIGJ5IHdoaWNoXG4gKiB1bmlxdWVuZXNzIGlzIGNvbXB1dGVkLiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpcyBkZXRlcm1pbmVkIGJ5IHRoZVxuICogb3JkZXIgdGhleSBvY2N1ciBpbiB0aGUgYXJyYXkuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OlxuICogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udW5pcUJ5KFsyLjEsIDEuMiwgMi4zXSwgTWF0aC5mbG9vcik7XG4gKiAvLyA9PiBbMi4xLCAxLjJdXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLnVuaXFCeShbeyAneCc6IDEgfSwgeyAneCc6IDIgfSwgeyAneCc6IDEgfV0sICd4Jyk7XG4gKiAvLyA9PiBbeyAneCc6IDEgfSwgeyAneCc6IDIgfV1cbiAqL1xuZnVuY3Rpb24gdW5pcUJ5KGFycmF5LCBpdGVyYXRlZSkge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlVW5pcShhcnJheSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSkgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmlxQnk7XG4iLCJ2YXIgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8udW5pcWAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgY29tcGFyYXRvcmAgd2hpY2hcbiAqIGlzIGludm9rZWQgdG8gY29tcGFyZSBlbGVtZW50cyBvZiBgYXJyYXlgLiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpc1xuICogZGV0ZXJtaW5lZCBieSB0aGUgb3JkZXIgdGhleSBvY2N1ciBpbiB0aGUgYXJyYXkuVGhlIGNvbXBhcmF0b3IgaXMgaW52b2tlZFxuICogd2l0aCB0d28gYXJndW1lbnRzOiAoYXJyVmFsLCBvdGhWYWwpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICd4JzogMSwgJ3knOiAyIH0sIHsgJ3gnOiAyLCAneSc6IDEgfSwgeyAneCc6IDEsICd5JzogMiB9XTtcbiAqXG4gKiBfLnVuaXFXaXRoKG9iamVjdHMsIF8uaXNFcXVhbCk7XG4gKiAvLyA9PiBbeyAneCc6IDEsICd5JzogMiB9LCB7ICd4JzogMiwgJ3knOiAxIH1dXG4gKi9cbmZ1bmN0aW9uIHVuaXFXaXRoKGFycmF5LCBjb21wYXJhdG9yKSB7XG4gIGNvbXBhcmF0b3IgPSB0eXBlb2YgY29tcGFyYXRvciA9PSAnZnVuY3Rpb24nID8gY29tcGFyYXRvciA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVVuaXEoYXJyYXksIHVuZGVmaW5lZCwgY29tcGFyYXRvcikgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmlxV2l0aDtcbiIsInZhciBTeWx2ZXN0ZXIgPSB7fVxuXG5TeWx2ZXN0ZXIuTWF0cml4ID0gZnVuY3Rpb24oKSB7fVxuXG5TeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZSA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gIHZhciBNID0gbmV3IFN5bHZlc3Rlci5NYXRyaXgoKVxuICByZXR1cm4gTS5zZXRFbGVtZW50cyhlbGVtZW50cylcbn1cblxuU3lsdmVzdGVyLk1hdHJpeC5JID0gZnVuY3Rpb24obikge1xuICB2YXIgZWxzID0gW10sXG4gICAgaSA9IG4sXG4gICAgalxuICB3aGlsZSAoaS0tKSB7XG4gICAgaiA9IG5cbiAgICBlbHNbaV0gPSBbXVxuICAgIHdoaWxlIChqLS0pIHtcbiAgICAgIGVsc1tpXVtqXSA9IGkgPT09IGogPyAxIDogMFxuICAgIH1cbiAgfVxuICByZXR1cm4gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUoZWxzKVxufVxuXG5TeWx2ZXN0ZXIuTWF0cml4LnByb3RvdHlwZSA9IHtcbiAgZHVwOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUodGhpcy5lbGVtZW50cylcbiAgfSxcblxuICBpc1NxdWFyZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbHMgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCA/IDAgOiB0aGlzLmVsZW1lbnRzWzBdLmxlbmd0aFxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gY29sc1xuICB9LFxuXG4gIHRvUmlnaHRUcmlhbmd1bGFyOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT09IDApIHJldHVybiBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZShbXSlcbiAgICB2YXIgTSA9IHRoaXMuZHVwKCksXG4gICAgICBlbHNcbiAgICB2YXIgbiA9IHRoaXMuZWxlbWVudHMubGVuZ3RoLFxuICAgICAgaSxcbiAgICAgIGosXG4gICAgICBucCA9IHRoaXMuZWxlbWVudHNbMF0ubGVuZ3RoLFxuICAgICAgcFxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGlmIChNLmVsZW1lbnRzW2ldW2ldID09PSAwKSB7XG4gICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgaWYgKE0uZWxlbWVudHNbal1baV0gIT09IDApIHtcbiAgICAgICAgICAgIGVscyA9IFtdXG4gICAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgbnA7IHArKykge1xuICAgICAgICAgICAgICBlbHMucHVzaChNLmVsZW1lbnRzW2ldW3BdICsgTS5lbGVtZW50c1tqXVtwXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE0uZWxlbWVudHNbaV0gPSBlbHNcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoTS5lbGVtZW50c1tpXVtpXSAhPT0gMCkge1xuICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgIHZhciBtdWx0aXBsaWVyID0gTS5lbGVtZW50c1tqXVtpXSAvIE0uZWxlbWVudHNbaV1baV1cbiAgICAgICAgICBlbHMgPSBbXVxuICAgICAgICAgIGZvciAocCA9IDA7IHAgPCBucDsgcCsrKSB7XG4gICAgICAgICAgICAvLyBFbGVtZW50cyB3aXRoIGNvbHVtbiBudW1iZXJzIHVwIHRvIGFuIGluY2x1ZGluZyB0aGUgbnVtYmVyIG9mIHRoZVxuICAgICAgICAgICAgLy8gcm93IHRoYXQgd2UncmUgc3VidHJhY3RpbmcgY2FuIHNhZmVseSBiZSBzZXQgc3RyYWlnaHQgdG8gemVybyxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoYXQncyB0aGUgcG9pbnQgb2YgdGhpcyByb3V0aW5lIGFuZCBpdCBhdm9pZHMgaGF2aW5nIHRvXG4gICAgICAgICAgICAvLyBsb29wIG92ZXIgYW5kIGNvcnJlY3Qgcm91bmRpbmcgZXJyb3JzIGxhdGVyXG4gICAgICAgICAgICBlbHMucHVzaChcbiAgICAgICAgICAgICAgcCA8PSBpID8gMCA6IE0uZWxlbWVudHNbal1bcF0gLSBNLmVsZW1lbnRzW2ldW3BdICogbXVsdGlwbGllclxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBNLmVsZW1lbnRzW2pdID0gZWxzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE1cbiAgfSxcblxuICBkZXRlcm1pbmFudDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNTcXVhcmUoKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgdmFyIE0gPSB0aGlzLnRvUmlnaHRUcmlhbmd1bGFyKClcbiAgICB2YXIgZGV0ID0gTS5lbGVtZW50c1swXVswXSxcbiAgICAgIG4gPSBNLmVsZW1lbnRzLmxlbmd0aFxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICBkZXQgPSBkZXQgKiBNLmVsZW1lbnRzW2ldW2ldXG4gICAgfVxuICAgIHJldHVybiBkZXRcbiAgfSxcblxuICBpc1Npbmd1bGFyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1NxdWFyZSgpICYmIHRoaXMuZGV0ZXJtaW5hbnQoKSA9PT0gMFxuICB9LFxuXG4gIGF1Z21lbnQ6IGZ1bmN0aW9uKG1hdHJpeCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHVwKClcbiAgICB9XG4gICAgdmFyIE0gPSBtYXRyaXguZWxlbWVudHMgfHwgbWF0cml4XG4gICAgaWYgKHR5cGVvZiBNWzBdWzBdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgTSA9IFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKE0pLmVsZW1lbnRzXG4gICAgfVxuICAgIHZhciBUID0gdGhpcy5kdXAoKSxcbiAgICAgIGNvbHMgPSBULmVsZW1lbnRzWzBdLmxlbmd0aFxuICAgIHZhciBpID0gVC5lbGVtZW50cy5sZW5ndGgsXG4gICAgICBuaiA9IE1bMF0ubGVuZ3RoLFxuICAgICAgalxuICAgIGlmIChpICE9PSBNLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaiA9IG5qXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIFQuZWxlbWVudHNbaV1bY29scyArIGpdID0gTVtpXVtqXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gVFxuICB9LFxuXG4gIGludmVyc2U6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzU3F1YXJlKCkgfHwgdGhpcy5pc1Npbmd1bGFyKCkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHZhciBuID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICBpID0gbixcbiAgICAgIGpcbiAgICB2YXIgTSA9IHRoaXMuYXVnbWVudChTeWx2ZXN0ZXIuTWF0cml4LkkobikpLnRvUmlnaHRUcmlhbmd1bGFyKClcbiAgICB2YXIgbnAgPSBNLmVsZW1lbnRzWzBdLmxlbmd0aCxcbiAgICAgIHAsXG4gICAgICBlbHMsXG4gICAgICBkaXZpc29yXG4gICAgdmFyIGludmVyc2VfZWxlbWVudHMgPSBbXSxcbiAgICAgIG5ld19lbGVtZW50XG4gICAgLy8gU3lsdmVzdGVyLk1hdHJpeCBpcyBub24tc2luZ3VsYXIgc28gdGhlcmUgd2lsbCBiZSBubyB6ZXJvcyBvbiB0aGVcbiAgICAvLyBkaWFnb25hbC4gQ3ljbGUgdGhyb3VnaCByb3dzIGZyb20gbGFzdCB0byBmaXJzdC5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAvLyBGaXJzdCwgbm9ybWFsaXNlIGRpYWdvbmFsIGVsZW1lbnRzIHRvIDFcbiAgICAgIGVscyA9IFtdXG4gICAgICBpbnZlcnNlX2VsZW1lbnRzW2ldID0gW11cbiAgICAgIGRpdmlzb3IgPSBNLmVsZW1lbnRzW2ldW2ldXG4gICAgICBmb3IgKHAgPSAwOyBwIDwgbnA7IHArKykge1xuICAgICAgICBuZXdfZWxlbWVudCA9IE0uZWxlbWVudHNbaV1bcF0gLyBkaXZpc29yXG4gICAgICAgIGVscy5wdXNoKG5ld19lbGVtZW50KVxuICAgICAgICAvLyBTaHVmZmxlIG9mZiB0aGUgY3VycmVudCByb3cgb2YgdGhlIHJpZ2h0IGhhbmQgc2lkZSBpbnRvIHRoZSByZXN1bHRzXG4gICAgICAgIC8vIGFycmF5IGFzIGl0IHdpbGwgbm90IGJlIG1vZGlmaWVkIGJ5IGxhdGVyIHJ1bnMgdGhyb3VnaCB0aGlzIGxvb3BcbiAgICAgICAgaWYgKHAgPj0gbikge1xuICAgICAgICAgIGludmVyc2VfZWxlbWVudHNbaV0ucHVzaChuZXdfZWxlbWVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgTS5lbGVtZW50c1tpXSA9IGVsc1xuICAgICAgLy8gVGhlbiwgc3VidHJhY3QgdGhpcyByb3cgZnJvbSB0aG9zZSBhYm92ZSBpdCB0byBnaXZlIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAgICAgIC8vIG9uIHRoZSBsZWZ0IGhhbmQgc2lkZVxuICAgICAgaiA9IGlcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgZWxzID0gW11cbiAgICAgICAgZm9yIChwID0gMDsgcCA8IG5wOyBwKyspIHtcbiAgICAgICAgICBlbHMucHVzaChNLmVsZW1lbnRzW2pdW3BdIC0gTS5lbGVtZW50c1tpXVtwXSAqIE0uZWxlbWVudHNbal1baV0pXG4gICAgICAgIH1cbiAgICAgICAgTS5lbGVtZW50c1tqXSA9IGVsc1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUoaW52ZXJzZV9lbGVtZW50cylcbiAgfSxcblxuICBzZXRFbGVtZW50czogZnVuY3Rpb24oZWxzKSB7XG4gICAgdmFyIGksXG4gICAgICBqLFxuICAgICAgZWxlbWVudHMgPSBlbHMuZWxlbWVudHMgfHwgZWxzXG4gICAgaWYgKGVsZW1lbnRzWzBdICYmIHR5cGVvZiBlbGVtZW50c1swXVswXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGkgPSBlbGVtZW50cy5sZW5ndGhcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBbXVxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBqID0gZWxlbWVudHNbaV0ubGVuZ3RoXG4gICAgICAgIHRoaXMuZWxlbWVudHNbaV0gPSBbXVxuICAgICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1tpXVtqXSA9IGVsZW1lbnRzW2ldW2pdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIHZhciBuID0gZWxlbWVudHMubGVuZ3RoXG4gICAgdGhpcy5lbGVtZW50cyA9IFtdXG4gICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKFtlbGVtZW50c1tpXV0pXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH0sXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWxlbWVudHMpIHtcbiAgcmV0dXJuIFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKGVsZW1lbnRzKS5pbnZlcnNlKCkuZWxlbWVudHNcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4oZnVuY3Rpb24oKXtcblxuICB2YXJcbiAgICBidWYsXG4gICAgYnVmSWR4ID0gMCxcbiAgICBoZXhCeXRlcyA9IFtdLFxuICAgIGlcbiAgO1xuXG4gIC8vIFByZS1jYWxjdWxhdGUgdG9TdHJpbmcoMTYpIGZvciBzcGVlZFxuICBmb3IgKGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgICBoZXhCeXRlc1tpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG4gIH1cblxuICAvLyBCdWZmZXIgcmFuZG9tIG51bWJlcnMgZm9yIHNwZWVkXG4gIC8vIFJlZHVjZSBtZW1vcnkgdXNhZ2UgYnkgZGVjcmVhc2luZyB0aGlzIG51bWJlciAobWluIDE2KVxuICAvLyBvciBpbXByb3ZlIHNwZWVkIGJ5IGluY3JlYXNpbmcgdGhpcyBudW1iZXIgKHRyeSAxNjM4NClcbiAgdXVpZC5CVUZGRVJfU0laRSA9IDQwOTY7XG5cbiAgLy8gQmluYXJ5IHV1aWRzXG4gIHV1aWQuYmluID0gdXVpZEJpbjtcblxuICAvLyBDbGVhciBidWZmZXJcbiAgdXVpZC5jbGVhckJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgIGJ1ZiA9IG51bGw7XG4gICAgYnVmSWR4ID0gMDtcbiAgfTtcblxuICAvLyBUZXN0IGZvciB1dWlkXG4gIHV1aWQudGVzdCA9IGZ1bmN0aW9uKHV1aWQpIHtcbiAgICBpZiAodHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gL15bMC05YS1mXXs4fS1bMC05YS1mXXs0fS00WzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9JC9pLnRlc3QodXVpZCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyBOb2RlICYgQnJvd3NlciBzdXBwb3J0XG4gIHZhciBjcnlwdDA7XG4gIGlmICh0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNyeXB0MCA9IGNyeXB0bztcbiAgfSBlbHNlIGlmKCAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpICYmICh0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJykpIHtcbiAgICBjcnlwdDAgPSB3aW5kb3cubXNDcnlwdG87IC8vIElFMTFcbiAgfVxuXG4gIGlmICgodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpICYmICh0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICBjcnlwdDAgPSBjcnlwdDAgfHwgcmVxdWlyZSgnY3J5cHRvJyk7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LnV1aWQgPSB1dWlkO1xuICB9XG5cbiAgLy8gVXNlIGJlc3QgYXZhaWxhYmxlIFBSTkdcbiAgLy8gQWxzbyBleHBvc2UgdGhpcyBzbyB5b3UgY2FuIG92ZXJyaWRlIGl0LlxuICB1dWlkLnJhbmRvbUJ5dGVzID0gKGZ1bmN0aW9uKCl7XG4gICAgaWYgKGNyeXB0MCkge1xuICAgICAgaWYgKGNyeXB0MC5yYW5kb21CeXRlcykge1xuICAgICAgICByZXR1cm4gY3J5cHQwLnJhbmRvbUJ5dGVzO1xuICAgICAgfVxuICAgICAgaWYgKGNyeXB0MC5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5zbGljZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShuKTtcbiAgICAgICAgICAgIGNyeXB0MC5nZXRSYW5kb21WYWx1ZXMoYnl0ZXMpO1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYnl0ZXMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShuKTtcbiAgICAgICAgICBjcnlwdDAuZ2V0UmFuZG9tVmFsdWVzKGJ5dGVzKTtcbiAgICAgICAgICByZXR1cm4gYnl0ZXM7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbihuKSB7XG4gICAgICB2YXIgaSwgciA9IFtdO1xuICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICByLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8vIEJ1ZmZlciBzb21lIHJhbmRvbSBieXRlcyBmb3Igc3BlZWRcbiAgZnVuY3Rpb24gcmFuZG9tQnl0ZXNCdWZmZXJlZChuKSB7XG4gICAgaWYgKCFidWYgfHwgKChidWZJZHggKyBuKSA+IHV1aWQuQlVGRkVSX1NJWkUpKSB7XG4gICAgICBidWZJZHggPSAwO1xuICAgICAgYnVmID0gdXVpZC5yYW5kb21CeXRlcyh1dWlkLkJVRkZFUl9TSVpFKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zi5zbGljZShidWZJZHgsIGJ1ZklkeCArPSBuKTtcbiAgfVxuXG4gIC8vIHV1aWQuYmluXG4gIGZ1bmN0aW9uIHV1aWRCaW4oKSB7XG4gICAgdmFyIGIgPSByYW5kb21CeXRlc0J1ZmZlcmVkKDE2KTtcbiAgICBiWzZdID0gKGJbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgYls4XSA9IChiWzhdICYgMHgzZikgfCAweDgwO1xuICAgIHJldHVybiBiO1xuICB9XG5cbiAgLy8gU3RyaW5nIFVVSUR2NCAoUmFuZG9tKVxuICBmdW5jdGlvbiB1dWlkKCkge1xuICAgIHZhciBiID0gdXVpZEJpbigpO1xuICAgIHJldHVybiBoZXhCeXRlc1tiWzBdXSArIGhleEJ5dGVzW2JbMV1dICtcbiAgICAgIGhleEJ5dGVzW2JbMl1dICsgaGV4Qnl0ZXNbYlszXV0gKyAnLScgK1xuICAgICAgaGV4Qnl0ZXNbYls0XV0gKyBoZXhCeXRlc1tiWzVdXSArICctJyArXG4gICAgICBoZXhCeXRlc1tiWzZdXSArIGhleEJ5dGVzW2JbN11dICsgJy0nICtcbiAgICAgIGhleEJ5dGVzW2JbOF1dICsgaGV4Qnl0ZXNbYls5XV0gKyAnLScgK1xuICAgICAgaGV4Qnl0ZXNbYlsxMF1dICsgaGV4Qnl0ZXNbYlsxMV1dICtcbiAgICAgIGhleEJ5dGVzW2JbMTJdXSArIGhleEJ5dGVzW2JbMTNdXSArXG4gICAgICBoZXhCeXRlc1tiWzE0XV0gKyBoZXhCeXRlc1tiWzE1XV1cbiAgICA7XG4gIH1cblxufSkoKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImNvbnN0IGlzRXF1YWwgPSAob2JqMSwgb2JqMikgPT4ge1xuICAgIGZ1bmN0aW9uIGdldFR5cGUob2JqKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXJlQXJyYXlzRXF1YWwoKSB7XG4gICAgICAgIGlmIChvYmoxLmxlbmd0aCAhPT0gb2JqMi5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFpc0VxdWFsKG9iajFbaV0sIG9iajJbaV0pKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXJlT2JqZWN0c0VxdWFsKCkge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMob2JqMSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhvYmoyKS5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvYmoxKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iajEsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzRXF1YWwob2JqMVtrZXldLCBvYmoyW2tleV0pKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFyZUZ1bmN0aW9uc0VxdWFsKCkge1xuICAgICAgICByZXR1cm4gb2JqMS50b1N0cmluZygpID09PSBvYmoyLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFyZVByaW1hdGl2ZXNFcXVhbCgpIHtcbiAgICAgICAgcmV0dXJuIG9iajEgPT09IG9iajI7XG4gICAgfVxuICAgIGxldCB0eXBlID0gZ2V0VHlwZShvYmoxKTtcbiAgICBpZiAodHlwZSAhPT0gZ2V0VHlwZShvYmoyKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0eXBlID09PSBcImFycmF5XCIpXG4gICAgICAgIHJldHVybiBhcmVBcnJheXNFcXVhbCgpO1xuICAgIGlmICh0eXBlID09PSBcIm9iamVjdFwiKVxuICAgICAgICByZXR1cm4gYXJlT2JqZWN0c0VxdWFsKCk7XG4gICAgaWYgKHR5cGUgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuIGFyZUZ1bmN0aW9uc0VxdWFsKCk7XG4gICAgcmV0dXJuIGFyZVByaW1hdGl2ZXNFcXVhbCgpO1xufTtcbmNvbnN0IHRydW5jYXRlTGF5ZXJOYW1lID0gKGxheWVyTmFtZSwgbWF4TGVuZ3RoID0gMjUpID0+IHtcbiAgICBpZiAobGF5ZXJOYW1lLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4gbGF5ZXJOYW1lLnN1YnN0cmluZygwLCBtYXhMZW5ndGgpICsgXCIuLi5cIjtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyTmFtZTtcbn07XG5jb25zdCB0b0NhcGl0YWxpemVkU3RyaW5nID0gKHZhbHVlVG9Db252ZXJ0KSA9PiB7XG4gICAgbGV0IG91dHB1dFZhbHVlID0gdmFsdWVUb0NvbnZlcnQudG9TdHJpbmcoKTtcbiAgICBvdXRwdXRWYWx1ZSA9IG91dHB1dFZhbHVlWzBdLnRvVXBwZXJDYXNlKCkgKyBvdXRwdXRWYWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgcmV0dXJuIG91dHB1dFZhbHVlO1xufTtcbmNvbnN0IHJnYlRvSGV4ID0gKHIsIGcsIGIpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnRUb0hleCA9IChjb2xvclZhbHVlKSA9PiB7XG4gICAgICAgIGNvbG9yVmFsdWUgPSBNYXRoLnJvdW5kKGNvbG9yVmFsdWUgKiAyNTUpO1xuICAgICAgICBsZXQgaGV4ID0gY29sb3JWYWx1ZS50b1N0cmluZygxNik7XG4gICAgICAgIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XG4gICAgfTtcbiAgICBjb25zdCBjb21iaW5lQ29tcG9uZW50cyA9IChyLCBnLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBcIiNcIiArIGNvbXBvbmVudFRvSGV4KHIpICsgY29tcG9uZW50VG9IZXgoZykgKyBjb21wb25lbnRUb0hleChiKTtcbiAgICB9O1xuICAgIHJldHVybiBjb21iaW5lQ29tcG9uZW50cyhyLCBnLCBiKTtcbn07XG5jb25zdCBzZWxlY3RBbmRab29tVG9MYXllciA9IChsYXllcklkKSA9PiB7XG4gICAgY29uc3QgbGF5ZXIgPSBmaWdtYS5nZXROb2RlQnlJZChsYXllcklkKTtcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbbGF5ZXJdO1xuICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbbGF5ZXJdKTtcbn07XG5leHBvcnQgeyBpc0VxdWFsLCB0cnVuY2F0ZUxheWVyTmFtZSwgdG9DYXBpdGFsaXplZFN0cmluZywgcmdiVG9IZXgsIHNlbGVjdEFuZFpvb21Ub0xheWVyLCB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgdXVpZCBmcm9tIFwidXVpZC1yYW5kb21cIjtcbmltcG9ydCB7IHJnYlRvSGV4IH0gZnJvbSBcIi4uLy4uL2FwcC9jb21wb25lbnRzL3V0aWxzXCI7XG5pbXBvcnQgcmF3TGlnaHRDb2xvclRva2VucyBmcm9tIFwiLi4vLi4vLi4vZGF0YS9saWdodC1tb2RlLmpzb25cIjtcbmltcG9ydCByYXdEYXJrQ29sb3JUb2tlbnMgZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGFyay1tb2RlLmpzb25cIjtcbmltcG9ydCB7IGlzVmlzaWJsZU5vZGUgfSBmcm9tIFwiQGZpZ21hLXBsdWdpbi9oZWxwZXJzXCI7XG5jb25zdCBwdXNoQ29sb3JUb0FycmF5ID0gKGxheWVyLCBjb2xvclR5cGUsIGFycmF5LCBsYXllckhhc1NlZ21lbnRTdHlsZXMgPSBmYWxzZSkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGNvbnN0IHN0eWxlSWRUeXBlID0gY29sb3JUeXBlID09PSBcImZpbGxzXCIgPyBcImZpbGxTdHlsZUlkXCIgOiBcInN0cm9rZVN0eWxlSWRcIjtcbiAgICBjb25zdCBpc1NvbGlkQ29sb3IgPSAoKF9hID0gbGF5ZXIgPT09IG51bGwgfHwgbGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheWVyLmZpbGxzWzBdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudHlwZSkgPT09IFwiU09MSURcIjtcbiAgICBjb25zdCBjb2xvcklzSW1hZ2UgPSBjb2xvclR5cGUgPT09IFwiZmlsbHNcIiAmJiAoKF9iID0gbGF5ZXIgPT09IG51bGwgfHwgbGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheWVyLmZpbGxzWzBdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudHlwZSkgPT09IFwiSU1BR0VcIjtcbiAgICBjb25zdCBjb2xvcklzR3JhZGllbnQgPSBjb2xvclR5cGUgPT09IFwiZmlsbHNcIiAmJiAoKF9jID0gbGF5ZXIgPT09IG51bGwgfHwgbGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheWVyLmZpbGxzWzBdKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudHlwZS5pbmNsdWRlcyhcIkdSQURJRU5UXCIpKTtcbiAgICBjb25zdCBjb2xvcklzVmlzaWJsZSA9IGxheWVySGFzU2VnbWVudFN0eWxlc1xuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBsYXllcltjb2xvclR5cGVdWzBdLnZpc2libGU7XG4gICAgY29uc3QgY29sb3JJbkhleCA9IChjb2xvckluUkdCKSA9PiB7XG4gICAgICAgIHJldHVybiByZ2JUb0hleChjb2xvckluUkdCLnIsIGNvbG9ySW5SR0IuZywgY29sb3JJblJHQi5iKTtcbiAgICB9O1xuICAgIGNvbnN0IHNlZ21lbnRDb2xvckluSGV4ID0gbGF5ZXJIYXNTZWdtZW50U3R5bGVzXG4gICAgICAgID8gY29sb3JJbkhleChsYXllci5zZWdtZW50LmZpbGxzWzBdLmNvbG9yKVxuICAgICAgICA6IGZhbHNlO1xuICAgIGNvbnN0IGhhc0NvbG9yU3R5bGUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChsYXllckhhc1NlZ21lbnRTdHlsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXllci5zZWdtZW50LmZpbGxTdHlsZUlkLmxlbmd0aCA+IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXNTb2xpZENvbG9yID8gbGF5ZXJbc3R5bGVJZFR5cGVdLmxlbmd0aCA+IDAgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKCFjb2xvcklzSW1hZ2UgJiZcbiAgICAgICAgIWNvbG9ySXNHcmFkaWVudCAmJlxuICAgICAgICBjb2xvcklzVmlzaWJsZSAmJlxuICAgICAgICAhbGF5ZXIuaXNDaGlsZE9mSWNvbldpdGhGaWxsKSB7XG4gICAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICAgICAgY29sb3JJZDogdXVpZCgpLFxuICAgICAgICAgICAgbGF5ZXJJZDogbGF5ZXIubGF5ZXJJZCxcbiAgICAgICAgICAgIGxheWVyTmFtZTogbGF5ZXIubmFtZSxcbiAgICAgICAgICAgIGxheWVyVHlwZTogbGF5ZXIudHlwZSxcbiAgICAgICAgICAgIGNvbG9yOiBsYXllckhhc1NlZ21lbnRTdHlsZXMgPyBsYXllci5zZWdtZW50LmZpbGxzWzBdIDogbGF5ZXJbY29sb3JUeXBlXSxcbiAgICAgICAgICAgIGNvbG9yU3R5bGVJZDogbGF5ZXJIYXNTZWdtZW50U3R5bGVzXG4gICAgICAgICAgICAgICAgPyBsYXllci5zZWdtZW50LmZpbGxTdHlsZUlkXG4gICAgICAgICAgICAgICAgOiBsYXllcltzdHlsZUlkVHlwZV0sXG4gICAgICAgICAgICBoYXNDb2xvclN0eWxlOiBoYXNDb2xvclN0eWxlKCksXG4gICAgICAgICAgICB2aXNpYmxlOiBsYXllci52aXNpYmxlLFxuICAgICAgICAgICAgY29sb3JUeXBlOiBjb2xvclR5cGUuc2xpY2UoMCwgLTEpLFxuICAgICAgICAgICAgY29sb3JJbkhleDogbGF5ZXJIYXNTZWdtZW50U3R5bGVzXG4gICAgICAgICAgICAgICAgPyBzZWdtZW50Q29sb3JJbkhleFxuICAgICAgICAgICAgICAgIDogY29sb3JJbkhleChsYXllcltjb2xvclR5cGVdWzBdLmNvbG9yKSxcbiAgICAgICAgICAgIGxheWVySGFzU2VnbWVudFN0eWxlczogbGF5ZXJIYXNTZWdtZW50U3R5bGVzLFxuICAgICAgICAgICAgc2VnbWVudDogbGF5ZXJIYXNTZWdtZW50U3R5bGVzICYmIGxheWVyLnNlZ21lbnQsXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5sZXQgY29sb3JUb2tlbnMgPSBbXTtcbmV4cG9ydCBjb25zdCBnZXRDb2xvclRva2VucyA9IChtYXBUaGVtZXNUb0VhY2hPdGhlcikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IGxpZ2h0VGhlbWVUb2tlbnMgPSB5aWVsZCBQcm9taXNlLmFsbChyYXdMaWdodENvbG9yVG9rZW5zLm1ldGEuc3R5bGVzLm1hcCgoc3R5bGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZSksIHsgdGhlbWU6IFwibGlnaHRcIiB9KTtcbiAgICB9KSkpO1xuICAgIGxldCBkYXJrVGhlbWVUb2tlbnMgPSB5aWVsZCBQcm9taXNlLmFsbChyYXdEYXJrQ29sb3JUb2tlbnMubWV0YS5zdHlsZXMubWFwKChzdHlsZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0eWxlKSwgeyB0aGVtZTogXCJkYXJrXCIgfSk7XG4gICAgfSkpKTtcbiAgICBpZiAobWFwVGhlbWVzVG9FYWNoT3RoZXIpIHtcbiAgICAgICAgbGlnaHRUaGVtZVRva2VucyA9IGxpZ2h0VGhlbWVUb2tlbnMubWFwKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgY29uc3QgZGFya1RoZW1lVG9rZW4gPSBkYXJrVGhlbWVUb2tlbnMuZmlsdGVyKChkYXJrVG9rZW4pID0+IHRva2VuLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gZGFya1Rva2VuLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlbiksIHsgZGFya1RoZW1lVG9rZW46ICgoX2EgPSBkYXJrVGhlbWVUb2tlblswXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmtleSkgPyBkYXJrVGhlbWVUb2tlblswXS5rZXkgOiBudWxsIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZGFya1RoZW1lVG9rZW5zID0gZGFya1RoZW1lVG9rZW5zLm1hcCgodG9rZW4pID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IGxpZ2h0VGhlbWVUb2tlbiA9IGxpZ2h0VGhlbWVUb2tlbnMuZmlsdGVyKChsaWdodFRva2VuKSA9PiB0b2tlbi5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGxpZ2h0VG9rZW4ubmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRva2VuKSwgeyBsaWdodFRoZW1lVG9rZW46ICgoX2EgPSBsaWdodFRoZW1lVG9rZW5bMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5rZXkpXG4gICAgICAgICAgICAgICAgICAgID8gbGlnaHRUaGVtZVRva2VuWzBdLmtleVxuICAgICAgICAgICAgICAgICAgICA6IG51bGwgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBhbGxDb2xvclRva2VucyA9IGxpZ2h0VGhlbWVUb2tlbnMuY29uY2F0KGRhcmtUaGVtZVRva2Vucyk7XG4gICAgY29uc3QgdGVtcFJlY3RhbmdsZSA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgIGNvbG9yVG9rZW5zID0geWllbGQgUHJvbWlzZS5hbGwoYWxsQ29sb3JUb2tlbnMubWFwKChzdHlsZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRlbXBSZWN0YW5nbGUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBsZXQgY29sb3JTdHlsZVdpdGhIZXggPSB7fTtcbiAgICAgICAgY29uc3QgaW1wb3J0ZWRTdHlsZSA9IHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhzdHlsZS5rZXkpO1xuICAgICAgICB0ZW1wUmVjdGFuZ2xlLmZpbGxTdHlsZUlkID0gaW1wb3J0ZWRTdHlsZS5pZDtcbiAgICAgICAgaWYgKHRlbXBSZWN0YW5nbGUuZmlsbHNbMF0uY29sb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29sb3JTdHlsZVdpdGhIZXggPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0eWxlKSwgeyBoZXg6IHJnYlRvSGV4KHRlbXBSZWN0YW5nbGUuZmlsbHNbMF0uY29sb3IuciwgdGVtcFJlY3RhbmdsZS5maWxsc1swXS5jb2xvci5nLCB0ZW1wUmVjdGFuZ2xlLmZpbGxzWzBdLmNvbG9yLmIpIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29sb3JTdHlsZVdpdGhIZXggPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0eWxlKSwgeyBoZXg6IFwiTm9uZVwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xvclN0eWxlV2l0aEhleDtcbiAgICB9KSkpO1xuICAgIHRlbXBSZWN0YW5nbGUucmVtb3ZlKCk7XG4gICAgcmV0dXJuIGNvbG9yVG9rZW5zO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0Q29sb3JTdGF0cyA9IChmb3JUaGVtZVN3aXRjaGVyID0gZmFsc2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGZpZ21hLnNraXBJbnZpc2libGVJbnN0YW5jZUNoaWxkcmVuID0gdHJ1ZTtcbiAgICB5aWVsZCBnZXRDb2xvclRva2Vucyh0cnVlKTtcbiAgICBjb25zdCBnZXRSYXdMYXllcnNXaXRoQ29sb3IgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IHJlbGV2YW50TGF5ZXJzID0gc2VsZWN0aW9uLm1hcCgoc2VsZWN0ZWRMYXllcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgbGV0IG91dHB1dEZvckxheWVyc1dpdGhDaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgY29uc3QgaXNSZWxldmFudExheWVyID0gKG4pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYWNjZXB0YWJsZU5vZGV0eXBlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgXCJFTExJUFNFXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRlJBTUVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJHUk9VUFwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNPTVBPTkVOVFwiLFxuICAgICAgICAgICAgICAgICAgICBcIklOU1RBTkNFXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiTElORVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlBPTFlHT05cIixcbiAgICAgICAgICAgICAgICAgICAgXCJSRUNUQU5HTEVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJTSEFQRV9XSVRIX1RFWFRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJTVEFSXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVEVYVFwiLFxuICAgICAgICAgICAgICAgICAgICBcIkJPT0xFQU5fT1BFUkFUSU9OXCIsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNGaWxsID0gXCJmaWxsc1wiIGluIG4gJiYgKG4gPT09IG51bGwgfHwgbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbi5maWxsc1swXSkgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNTdHJva2UgPSBcInN0cm9rZXNcIiBpbiBuICYmIChuID09PSBudWxsIHx8IG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG4uc3Ryb2tlc1swXSkgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0NoaWxkT2ZCb29sZWFuT3BlcmF0aW9uID0gbi5wYXJlbnQudHlwZSA9PT0gXCJCT09MRUFOX09QRVJBVElPTlwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHRMYXllckhhc1NlZ21lbnRTdHlsZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuLnR5cGUgIT09IFwiVEVYVFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5nZXRTdHlsZWRUZXh0U2VnbWVudHMoW1wiZmlsbHNcIl0pLmxlbmd0aCA+IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvclRoZW1lU3dpdGNoZXIgJiYgYWNjZXB0YWJsZU5vZGV0eXBlcy5wdXNoKFwiVkVDVE9SXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0ZpbGxPclN0cm9rZSA9IGhhc0ZpbGwgfHwgaGFzU3Ryb2tlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVJc1ZhbGlkTm9kZVR5cGUgPSBhY2NlcHRhYmxlTm9kZXR5cGVzLnNvbWUoKG5vZGVUeXBlKSA9PiBuLnR5cGUgPT09IG5vZGVUeXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKG5vZGVJc1ZhbGlkTm9kZVR5cGUgJiZcbiAgICAgICAgICAgICAgICAgICAgKGhhc0ZpbGxPclN0cm9rZSB8fCB0ZXh0TGF5ZXJIYXNTZWdtZW50U3R5bGVzKCkpICYmXG4gICAgICAgICAgICAgICAgICAgICFpc0NoaWxkT2ZCb29sZWFuT3BlcmF0aW9uKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZExheWVySGFzQ2hpbGRyZW4gPSBcImZpbmRBbGxcIiBpbiBzZWxlY3RlZExheWVyICYmICgoX2EgPSBzZWxlY3RlZExheWVyID09PSBudWxsIHx8IHNlbGVjdGVkTGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkTGF5ZXIuY2hpbGRyZW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpID4gMDtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZExheWVySGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBpc1JlbGV2YW50TGF5ZXIoc2VsZWN0ZWRMYXllcik7XG4gICAgICAgICAgICAgICAgb3V0cHV0Rm9yTGF5ZXJzV2l0aENoaWxkcmVuID0gc2VsZWN0ZWRMYXllci5maW5kQWxsKChuKSA9PiBpc1JlbGV2YW50TGF5ZXIobikpO1xuICAgICAgICAgICAgICAgIGlmICghaXNSZWxldmFudExheWVyKHNlbGVjdGVkTGF5ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ub3V0cHV0Rm9yTGF5ZXJzV2l0aENoaWxkcmVuXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbc2VsZWN0ZWRMYXllciwgLi4ub3V0cHV0Rm9yTGF5ZXJzV2l0aENoaWxkcmVuXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1JlbGV2YW50TGF5ZXIoc2VsZWN0ZWRMYXllcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3NlbGVjdGVkTGF5ZXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG91dHB1dCA9IHJlbGV2YW50TGF5ZXJzLmZsYXQoKTtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0LmZpbHRlcigobGF5ZXIpID0+IGlzVmlzaWJsZU5vZGUobGF5ZXIpKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuICAgIGNvbnN0IHJhd0xheWVyc1dpdGhDb2xvciA9IGdldFJhd0xheWVyc1dpdGhDb2xvcigpO1xuICAgIGNvbnN0IGxheWVyc1dpdGhDb2xvciA9IHJhd0xheWVyc1dpdGhDb2xvci5tYXAoKGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc0ZpbGwgPSBcImZpbGxzXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuZmlsbHNbMF0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaGFzU3Ryb2tlID0gXCJzdHJva2VzXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuc3Ryb2tlc1swXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB0ZXh0TGF5ZXJIYXNTZWdtZW50U3R5bGVzID0gbGF5ZXIudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgIGxheWVyLmdldFN0eWxlZFRleHRTZWdtZW50cyhbXCJmaWxsc1wiXSkubGVuZ3RoID4gMTtcbiAgICAgICAgY29uc3QgaGFzRmlsbEFuZFN0cm9rZSA9IGhhc0ZpbGwgJiYgaGFzU3Ryb2tlO1xuICAgICAgICBjb25zdCBpc0NoaWxkT2ZJY29uID0gbGF5ZXIucGFyZW50LnR5cGUgPT09IFwiQk9PTEVBTl9PUEVSQVRJT05cIjtcbiAgICAgICAgbGV0IHBhcmVudEljb25IYXNGaWxsID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGlzQ2hpbGRPZkljb25XaXRoRmlsbCA9IGlzQ2hpbGRPZkljb24gJiYgcGFyZW50SWNvbkhhc0ZpbGw7XG4gICAgICAgIGNvbnN0IGNoZWNrUGFyZW50Rm9yRmlsbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChcImZpbGxzXCIgaW4gbGF5ZXIucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyZW50SWNvbkhhc0ZpbGwgPSBsYXllci5wYXJlbnQuZmlsbHMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY2hlY2tQYXJlbnRGb3JGaWxsKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYXllcklkOiBsYXllci5pZCxcbiAgICAgICAgICAgIG5hbWU6IGxheWVyLm5hbWUsXG4gICAgICAgICAgICBmaWxsczogXCJmaWxsc1wiIGluIGxheWVyICYmIGxheWVyLmZpbGxzLFxuICAgICAgICAgICAgc3Ryb2tlczogXCJzdHJva2VzXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuc3Ryb2tlcyxcbiAgICAgICAgICAgIGZpbGxTdHlsZUlkOiBcImZpbGxTdHlsZUlkXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuZmlsbFN0eWxlSWQsXG4gICAgICAgICAgICBzdHJva2VTdHlsZUlkOiBcInN0cm9rZVN0eWxlSWRcIiBpbiBsYXllciAmJiBsYXllci5zdHJva2VTdHlsZUlkLFxuICAgICAgICAgICAgdmlzaWJsZTogbGF5ZXIudmlzaWJsZSxcbiAgICAgICAgICAgIHR5cGU6IGxheWVyLnR5cGUsXG4gICAgICAgICAgICBoYXNGaWxsOiBoYXNGaWxsLFxuICAgICAgICAgICAgaGFzU3Ryb2tlOiBoYXNTdHJva2UsXG4gICAgICAgICAgICBoYXNGaWxsQW5kU3Ryb2tlOiBoYXNGaWxsQW5kU3Ryb2tlLFxuICAgICAgICAgICAgaXNDaGlsZE9mSWNvbldpdGhGaWxsOiBpc0NoaWxkT2ZJY29uV2l0aEZpbGwsXG4gICAgICAgICAgICBoYXNTZWdtZW50U3R5bGVzOiB0ZXh0TGF5ZXJIYXNTZWdtZW50U3R5bGVzLFxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnN0IGFsbEluc3RhbmNlc09mQ29sb3IgPSBsYXllcnNXaXRoQ29sb3JcbiAgICAgICAgLm1hcCgobGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IHRlbXBDb2xvcnMgPSBbXTtcbiAgICAgICAgaWYgKGxheWVyLmhhc0ZpbGxBbmRTdHJva2UpIHtcbiAgICAgICAgICAgIHB1c2hDb2xvclRvQXJyYXkobGF5ZXIsIFwiZmlsbHNcIiwgdGVtcENvbG9ycyk7XG4gICAgICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyLCBcInN0cm9rZXNcIiwgdGVtcENvbG9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGF5ZXIuaGFzRmlsbCkge1xuICAgICAgICAgICAgcHVzaENvbG9yVG9BcnJheShsYXllciwgXCJmaWxsc1wiLCB0ZW1wQ29sb3JzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsYXllci5oYXNTdHJva2UpIHtcbiAgICAgICAgICAgIHB1c2hDb2xvclRvQXJyYXkobGF5ZXIsIFwic3Ryb2tlc1wiLCB0ZW1wQ29sb3JzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsYXllci5oYXNTZWdtZW50U3R5bGVzKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobGF5ZXIubGF5ZXJJZCk7XG4gICAgICAgICAgICBjb25zdCBzZWdtZW50ZWRGaWxscyA9IG5vZGUuZ2V0U3R5bGVkVGV4dFNlZ21lbnRzKFtcImZpbGxzXCJdKTtcbiAgICAgICAgICAgIHNlZ21lbnRlZEZpbGxzLmZvckVhY2goKHNlZ21lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxsU3R5bGVJZCA9IG5vZGUuZ2V0UmFuZ2VGaWxsU3R5bGVJZChzZWdtZW50LnN0YXJ0LCBzZWdtZW50LmVuZCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VnbWVudFRvQmVQdXNoZWQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHNlZ21lbnQpLCB7IGZpbGxTdHlsZUlkIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyVG9CZVB1c2hlZCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbGF5ZXIpLCB7IHNlZ21lbnQ6IHNlZ21lbnRUb0JlUHVzaGVkIH0pO1xuICAgICAgICAgICAgICAgIHB1c2hDb2xvclRvQXJyYXkobGF5ZXJUb0JlUHVzaGVkLCBcImZpbGxzXCIsIHRlbXBDb2xvcnMsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBDb2xvcnM7XG4gICAgfSlcbiAgICAgICAgLmZsYXQoKTtcbiAgICBjb25zdCBjb2xvcnNVc2luZ09uZUNvcmVTdHlsZSA9IGFsbEluc3RhbmNlc09mQ29sb3JcbiAgICAgICAgLmZpbHRlcigoY29sb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbG9yVG9rZW5zLnNvbWUoKG9uZUNvcmVDb2xvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmNvbG9yU3R5bGVJZC5pbmNsdWRlcyhvbmVDb3JlQ29sb3Iua2V5KTtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICAgICAgLm1hcCgoY29sb3IpID0+IHtcbiAgICAgICAgbGV0IG9uZUNvcmVUb2tlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29sb3JUb2tlbnMuZm9yRWFjaCgob25lQ29yZUNvbG9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29sb3IuY29sb3JTdHlsZUlkLmluY2x1ZGVzKG9uZUNvcmVDb2xvci5rZXkpKSB7XG4gICAgICAgICAgICAgICAgb25lQ29yZVRva2VuID0gb25lQ29yZUNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29sb3IpLCB7IHRva2VuOiBvbmVDb3JlVG9rZW4gfSk7XG4gICAgfSk7XG4gICAgY29uc3Qgb25lQ29yZUNvbG9yU3R5bGVDb3ZlcmFnZSA9IGAkeygoY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUubGVuZ3RoIC8gYWxsSW5zdGFuY2VzT2ZDb2xvci5sZW5ndGgpICpcbiAgICAgICAgMTAwKS50b0ZpeGVkKDApfSVgO1xuICAgIGlmIChmb3JUaGVtZVN3aXRjaGVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcnNVc2luZ09uZUNvcmVTdHlsZSxcbiAgICAgICAgICAgIGFsbEluc3RhbmNlc09mQ29sb3IsXG4gICAgICAgICAgICBvbmVDb3JlQ29sb3JTdHlsZUNvdmVyYWdlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBjb2xvcnNXaXRoQ29sb3JTdHlsZSA9IGFsbEluc3RhbmNlc09mQ29sb3IuZmlsdGVyKChjb2xvcikgPT4ge1xuICAgICAgICByZXR1cm4gY29sb3IuaGFzQ29sb3JTdHlsZTtcbiAgICB9KTtcbiAgICBjb25zdCBjb2xvcnNOb3RVc2luZ09uZUNvcmVDb2xvclN0eWxlID0gYWxsSW5zdGFuY2VzT2ZDb2xvci5maWx0ZXIoKGNvbG9yKSA9PiB7XG4gICAgICAgIHJldHVybiAhY29sb3JUb2tlbnMuc29tZSgob25lQ29yZUNvbG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3IuY29sb3JTdHlsZUlkLmluY2x1ZGVzKG9uZUNvcmVDb2xvci5rZXkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zdCBpZHNPZkFsbEluc3RhbmNlc09mQ29sb3IgPSBhbGxJbnN0YW5jZXNPZkNvbG9yLm1hcCgoY29sb3IpID0+IGNvbG9yLmNvbG9ySWQpO1xuICAgIGNvbnN0IGNvbG9yU3RhdHMgPSB7XG4gICAgICAgIHNlbGVjdGVkTGF5ZXJzV2l0aENvbG9yOiByYXdMYXllcnNXaXRoQ29sb3IsXG4gICAgICAgIGFsbEluc3RhbmNlc09mQ29sb3I6IGFsbEluc3RhbmNlc09mQ29sb3IsXG4gICAgICAgIGNvbG9yc1dpdGhDb2xvclN0eWxlOiBjb2xvcnNXaXRoQ29sb3JTdHlsZSxcbiAgICAgICAgY29sb3JzVXNpbmdPbmVDb3JlU3R5bGU6IGNvbG9yc1VzaW5nT25lQ29yZVN0eWxlLFxuICAgICAgICBjb2xvcnNOb3RVc2luZ09uZUNvcmVDb2xvclN0eWxlOiBjb2xvcnNOb3RVc2luZ09uZUNvcmVDb2xvclN0eWxlLFxuICAgICAgICBvbmVDb3JlQ29sb3JTdHlsZUNvdmVyYWdlOiBvbmVDb3JlQ29sb3JTdHlsZUNvdmVyYWdlLFxuICAgICAgICBpZHNPZkFsbEluc3RhbmNlc09mQ29sb3I6IGlkc09mQWxsSW5zdGFuY2VzT2ZDb2xvcixcbiAgICB9O1xuICAgIHJldHVybiBjb2xvclN0YXRzO1xufSk7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGNyZWF0ZVRhYmxlIH0gZnJvbSBcIi4vdGFibGUtY3JlYXRvci90YWJsZUNyZWF0b3JcIjtcbmltcG9ydCB7IHNlbmRDdXJyZW50VGV4dFNlbGVjdGlvbiB9IGZyb20gXCIuL2xhbmd1YWdlLWxpbnRlci9sYW5ndWFnZUxpbnRlclwiO1xuaW1wb3J0IHsgZ2V0Q29sb3JTdGF0cywgZ2V0Q29sb3JUb2tlbnMgfSBmcm9tIFwiLi9jb2xvci1saW50ZXIvY29sb3JMaW50ZXJcIjtcbmltcG9ydCB7IHN3aXRjaFRvVGhlbWUgfSBmcm9tIFwiLi90aGVtZS1zd2l0Y2hlci90aGVtZVN3aXRjaGVyXCI7XG5pbXBvcnQgeyBzZWxlY3RBbmRab29tVG9MYXllciB9IGZyb20gXCIuLi9hcHAvY29tcG9uZW50cy91dGlsc1wiO1xubGV0IHVpU2l6ZSA9IHtcbiAgICB3aWR0aDogMzAwLFxuICAgIGhlaWdodDogNDQ4LFxufTtcbmNvbnN0IGZpbGVOYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KGZpZ21hLmN1cnJlbnRQYWdlLnBhcmVudC5uYW1lKTtcbmNvbnN0IGN1cnJlbnRTZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG5jb25zdCBjdXJyZW50Tm9kZUlkID0gZW5jb2RlVVJJQ29tcG9uZW50KGN1cnJlbnRTZWxlY3Rpb24ubGVuZ3RoID4gMCA/IGN1cnJlbnRTZWxlY3Rpb25bMF0uaWQgOiBmaWdtYS5jdXJyZW50UGFnZS5pZCk7XG5jb25zdCBmaWxlVXJsID0gYGh0dHBzOi8vZmlnbWEuY29tL2ZpbGUvJHtmaWdtYS5maWxlS2V5fS8ke2ZpbGVOYW1lfT9ub2RlLWlkPSR7Y3VycmVudE5vZGVJZH1gO1xubGV0IGN1c3RvbUV2ZW50RGF0YSA9IHtcbiAgICBmaWxlTmFtZTogZmlnbWEuY3VycmVudFBhZ2UucGFyZW50Lm5hbWUsXG4gICAgZmlsZUtleTogZmlnbWEuZmlsZUtleSxcbiAgICBcIlVzZXIgTmFtZVwiOiBmaWdtYS5jdXJyZW50VXNlci5uYW1lLFxuICAgIFwiVXNlciBBdmF0YXJcIjogZmlnbWEuY3VycmVudFVzZXIucGhvdG9VcmwsXG4gICAgXCJVc2VyIElEXCI6IGZpZ21hLmN1cnJlbnRVc2VyLmlkLFxuICAgIFwiU2Vzc2lvbiBJRFwiOiBmaWdtYS5jdXJyZW50VXNlci5zZXNzaW9uSWQsXG4gICAgZmlsZVVybCxcbn07XG5jb25zdCBuYXZpZ2F0ZVRvID0gKHNjcmVlbikgPT4ge1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJmaWdtYS1jb21tYW5kXCIsXG4gICAgICAgIG1lc3NhZ2U6IE9iamVjdC5hc3NpZ24oeyBvcGVuZWRUbzogc2NyZWVuIH0sIGN1c3RvbUV2ZW50RGF0YSksXG4gICAgfSk7XG59O1xuY29uc3QgbmF2aWdhdGlvbkFjdGlvbnMgPSB7XG4gICAgXCJvcGVuLWhvbWVcIjogKCkgPT4ge1xuICAgICAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgdGhlbWVDb2xvcnM6IHRydWUsIHdpZHRoOiAzMDAsIGhlaWdodDogNDQ4IH0pO1xuICAgICAgICBuYXZpZ2F0ZVRvKFwib3Blbi1ob21lXCIpO1xuICAgIH0sXG4gICAgXCJvcGVuLXRhYmxlLWNyZWF0b3JcIjogKCkgPT4ge1xuICAgICAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgdGhlbWVDb2xvcnM6IHRydWUsIHdpZHRoOiAzMDAsIGhlaWdodDogNDQ4IH0pO1xuICAgICAgICBuYXZpZ2F0ZVRvKFwib3Blbi10YWJsZS1jcmVhdG9yXCIpO1xuICAgIH0sXG4gICAgXCJ0aGVtZS1zd2l0Y2hlci10by1saWdodFwiOiAoKSA9PiB7XG4gICAgICAgIHN3aXRjaFRvVGhlbWUoXCJsaWdodFwiLCB0cnVlLCBjdXN0b21FdmVudERhdGEpO1xuICAgIH0sXG4gICAgXCJ0aGVtZS1zd2l0Y2hlci10by1kYXJrXCI6ICgpID0+IHtcbiAgICAgICAgc3dpdGNoVG9UaGVtZShcImRhcmtcIiwgdHJ1ZSwgY3VzdG9tRXZlbnREYXRhKTtcbiAgICB9LFxuICAgIFwib3Blbi1sYW5ndWFnZS1saW50ZXJcIjogKCkgPT4ge1xuICAgICAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgdGhlbWVDb2xvcnM6IHRydWUsIHdpZHRoOiA0NzUsIGhlaWdodDogNTAwIH0pO1xuICAgICAgICBuYXZpZ2F0ZVRvKFwib3Blbi1sYW5ndWFnZS1saW50ZXJcIik7XG4gICAgfSxcbiAgICBcIm9wZW4tY29sb3ItbGludGVyXCI6ICgpID0+IHtcbiAgICAgICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHRoZW1lQ29sb3JzOiB0cnVlLCB3aWR0aDogNDc1LCBoZWlnaHQ6IDUwMCB9KTtcbiAgICAgICAgbmF2aWdhdGVUbyhcIm9wZW4tY29sb3ItbGludGVyXCIpO1xuICAgIH0sXG59O1xubmF2aWdhdGlvbkFjdGlvbnNbZmlnbWEuY29tbWFuZF0oKTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChtc2cudHlwZSA9PT0gXCJuYXZpZ2F0ZS10by10YWJcIikge1xuICAgICAgICBzd2l0Y2ggKG1zZy50YWJDbGlja2VkKSB7XG4gICAgICAgICAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgICAgICAgICAgIHVpU2l6ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NDgsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5yZXNpemUodWlTaXplLndpZHRoLCB1aVNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvKFwib3Blbi1ob21lXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRhYmxlLWNyZWF0b3JcIjpcbiAgICAgICAgICAgICAgICB1aVNpemUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDQ4LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKHVpU2l6ZS53aWR0aCwgdWlTaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbyhcIm9wZW4tdGFibGUtY3JlYXRvclwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsYW5ndWFnZS1saW50ZXJcIjpcbiAgICAgICAgICAgICAgICBzZW5kQ3VycmVudFRleHRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICB1aVNpemUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NzUsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAwLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKHVpU2l6ZS53aWR0aCwgdWlTaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbyhcIm9wZW4tbGFuZ3VhZ2UtbGludGVyXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNvbG9yLWxpbnRlclwiOlxuICAgICAgICAgICAgICAgIHVpU2l6ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ3NSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5yZXNpemUodWlTaXplLndpZHRoLCB1aVNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvKFwib3Blbi1jb2xvci1saW50ZXJcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09IFwiZGlzcGxheS1lcnJvclwiKSB7XG4gICAgICAgIGZpZ21hLm5vdGlmeShtc2cuY29udGVudCwgeyBlcnJvcjogdHJ1ZSB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcImluaXRpYWxpemUtc2VsZWN0aW9uXCIpIHtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJpbml0aWFsLXNlbGVjdGlvblwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcImNsb3NlLXBsdWdpblwiKSB7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJjcmVhdGUtdGFibGVcIikge1xuICAgICAgICBjcmVhdGVUYWJsZShtc2csIGN1c3RvbUV2ZW50RGF0YSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJydW4tbGFuZ3VhZ2UtbGludGVyXCIpIHtcbiAgICAgICAgc2VuZEN1cnJlbnRUZXh0U2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJyZXF1ZXN0LWxvY2FsLWN1c3RvbS1kaWN0aW9uYXJ5XCIpIHtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZVxuICAgICAgICAgICAgLmdldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJsb2NhbC1jdXN0b20tZGljdGlvbmFyeS1yZXRyaWV2ZWRcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXN1bHQgPyByZXN1bHQgOiBbXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcImFkZC10by1kaWN0aW9uYXJ5XCIpIHtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZVxuICAgICAgICAgICAgLmdldEFzeW5jKFwibGFuZ3VhZ2VMaW50ZXJDdXN0b21EaWN0aW9uYXJ5XCIpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Q3VzdG9tRGljdGlvbmFyeSA9IHJlc3VsdCA/IHJlc3VsdCA6IFtdO1xuICAgICAgICAgICAgbmV3Q3VzdG9tRGljdGlvbmFyeS5wdXNoKG1zZy53b3JkVG9BZGQpO1xuICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhcImxhbmd1YWdlTGludGVyQ3VzdG9tRGljdGlvbmFyeVwiLCBuZXdDdXN0b21EaWN0aW9uYXJ5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJnZXQtc2FtcGxlLXRleHRcIikge1xuICAgICAgICBjb25zdCBzYW1wbGVUZXh0ID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic2FtcGxlLXRleHRcIiwgbWVzc2FnZTogc2FtcGxlVGV4dCB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcInNhbXBsZS10ZXh0LWNoYW5nZWRcIikge1xuICAgICAgICBzZWxlY3RBbmRab29tVG9MYXllcihtc2cuYWN0aXZlTm9kZUlkKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcInVwZGF0ZS1zb3VyY2UtdGV4dFwiKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRleHRMYXllciA9IGZpZ21hLmdldE5vZGVCeUlkKG1zZy5sYXllcklkKTtcbiAgICAgICAgbGV0IGZvbnROYW1lID0gYWN0aXZlVGV4dExheWVyLmZvbnROYW1lO1xuICAgICAgICBpZiAoZm9udE5hbWUgPT09IGZpZ21hLm1peGVkKSB7XG4gICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChhY3RpdmVUZXh0TGF5ZXJcbiAgICAgICAgICAgICAgICAuZ2V0UmFuZ2VBbGxGb250TmFtZXMoMCwgYWN0aXZlVGV4dExheWVyLmNoYXJhY3RlcnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIC5tYXAoZmlnbWEubG9hZEZvbnRBc3luYykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhmb250TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZlVGV4dExheWVyLmRlbGV0ZUNoYXJhY3RlcnMoMCwgYWN0aXZlVGV4dExheWVyLmNoYXJhY3RlcnMubGVuZ3RoKTtcbiAgICAgICAgYWN0aXZlVGV4dExheWVyLmluc2VydENoYXJhY3RlcnMoMCwgbXNnLnVwZGF0ZWRUZXh0KTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJzb3VyY2UtdGV4dC11cGRhdGVkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBtc2cudXBkYXRlZFRleHQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwidGV4dC1saW50ZWRcIikge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcInRleHQtbGludGVkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgY3VzdG9tRXZlbnREYXRhLFxuICAgICAgICAgICAgICAgIG1pbmltYWxSZXBvcnQ6IG1zZy5taW5pbWFsUmVwb3J0LFxuICAgICAgICAgICAgICAgIGZ1bGxSZXBvcnQ6IG1zZy5mdWxsUmVwb3J0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHNlbmRDb2xvckRhdGEgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgY29sb3JTdGF0cyA9IHlpZWxkIGdldENvbG9yU3RhdHMoKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJjb2xvci1zdGF0c1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXN0b21FdmVudERhdGEpLCB7IGNvbG9yU3RhdHM6IGNvbG9yU3RhdHMsIGNvbG9yVG9rZW5zOiB5aWVsZCBnZXRDb2xvclRva2VucyhmYWxzZSksIHNlbGVjdGlvbk1hZGU6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPiAwIH0pLFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAobXNnLnR5cGUgPT09IFwicnVuLWNvbG9yLWxpbnRlclwiKSB7XG4gICAgICAgIHNlbmRDb2xvckRhdGEoKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcInNlbGVjdC1sYXllclwiKSB7XG4gICAgICAgIHNlbGVjdEFuZFpvb21Ub0xheWVyKG1zZy5sYXllcklkKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcImFwcGx5LWNvbG9yLXN0eWxlXCIpIHtcbiAgICAgICAgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKG1zZy5jb2xvclN0eWxlS2V5KS50aGVuKChpbXBvcnRlZCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmxheWVySWQpW2Ake21zZy5jb2xvclR5cGV9U3R5bGVJZGBdID0gaW1wb3J0ZWQuaWQ7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJjb2xvci1yZXBsYWNlZFwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3VzdG9tRXZlbnREYXRhKSwgeyBsYXllcklkOiBtc2cubGF5ZXJJZCwgbGF5ZXJOYW1lOiBmaWdtYS5nZXROb2RlQnlJZChtc2cubGF5ZXJJZCkubmFtZSwgb3JpZ2luYWxDb2xvcjogbXNnLm9yaWdpbmFsQ29sb3IsIGNvbG9yU3R5bGVLZXk6IG1zZy5jb2xvclN0eWxlS2V5LCBjb2xvclN0eWxlTmFtZTogbXNnLmNvbG9yU3R5bGVOYW1lLCBjb2xvclN0eWxlQ29sb3I6IG1zZy5jb2xvclN0eWxlQ29sb3IgfSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJyZXNpemVcIikge1xuICAgICAgICBmaWdtYS51aS5yZXNpemUobXNnLnNpemUueCA+PSB1aVNpemUud2lkdGggPyBtc2cuc2l6ZS54IDogdWlTaXplLndpZHRoLCBtc2cuc2l6ZS55ID49IHVpU2l6ZS5oZWlnaHQgPyBtc2cuc2l6ZS55IDogdWlTaXplLmhlaWdodCk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJ0aGVtZS1zd2l0Y2hlci10by1kYXJrXCIpIHtcbiAgICAgICAgc3dpdGNoVG9UaGVtZShcImRhcmtcIiwgZmFsc2UsIGN1c3RvbUV2ZW50RGF0YSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJ0aGVtZS1zd2l0Y2hlci10by1saWdodFwiKSB7XG4gICAgICAgIHN3aXRjaFRvVGhlbWUoXCJsaWdodFwiLCBmYWxzZSwgY3VzdG9tRXZlbnREYXRhKTtcbiAgICB9XG59KTtcbmZpZ21hLm9uKFwic2VsZWN0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGlvbmNoYW5nZSBldmVudCB3YXMgZmlyZWRcIik7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInNlbGVjdGlvbi1jaGFuZ2VkXCIsXG4gICAgICAgIG1lc3NhZ2U6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbixcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgaXNWaXNpYmxlTm9kZSB9IGZyb20gXCJAZmlnbWEtcGx1Z2luL2hlbHBlcnNcIjtcbmNvbnN0IHB1c2hUZXh0TGF5ZXJUb0FycmF5ID0gKGxheWVyLCBhcnJheSkgPT4ge1xuICAgIGFycmF5LnB1c2goe1xuICAgICAgICBpZDogbGF5ZXIuaWQsXG4gICAgICAgIG5hbWU6IGxheWVyLm5hbWUsXG4gICAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICAgIHg6IGxheWVyLngsXG4gICAgICAgIHk6IGxheWVyLnksXG4gICAgICAgIHR5cGU6IGxheWVyLnR5cGUsXG4gICAgICAgIGNoYXJhY3RlcnM6IGxheWVyID09PSBudWxsIHx8IGxheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXllci5jaGFyYWN0ZXJzLFxuICAgICAgICBjaGlsZHJlbjogbGF5ZXIgPT09IG51bGwgfHwgbGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheWVyLmNoaWxkcmVuLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjb25zdCBzZW5kQ3VycmVudFRleHRTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBsZXQgdGV4dExheWVycyA9IFtdO1xuICAgIHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZExheWVyKSA9PiB7XG4gICAgICAgIGlmICghIShzZWxlY3RlZExheWVyID09PSBudWxsIHx8IHNlbGVjdGVkTGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkTGF5ZXIuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRleHRMYXllcnMgPSBzZWxlY3RlZExheWVyLmZpbmRBbGwoKG4pID0+IG4udHlwZSA9PT0gXCJURVhUXCIpO1xuICAgICAgICAgICAgc2VsZWN0ZWRUZXh0TGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaXNWaXNpYmxlTm9kZShsYXllcikgJiYgcHVzaFRleHRMYXllclRvQXJyYXkobGF5ZXIsIHRleHRMYXllcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0ZWRMYXllci50eXBlID09PSBcIlRFWFRcIikge1xuICAgICAgICAgICAgaXNWaXNpYmxlTm9kZShzZWxlY3RlZExheWVyKSAmJlxuICAgICAgICAgICAgICAgIHB1c2hUZXh0TGF5ZXJUb0FycmF5KHNlbGVjdGVkTGF5ZXIsIHRleHRMYXllcnMpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJuZXctdGV4dC1zZWxlY3Rpb25cIixcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgdGV4dExheWVycyxcbiAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJzOiBzZWxlY3Rpb24sXG4gICAgICAgIH0sXG4gICAgfSk7XG59O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyB0b0NhcGl0YWxpemVkU3RyaW5nIH0gZnJvbSBcIi4uLy4uL2FwcC9jb21wb25lbnRzL3V0aWxzXCI7XG5leHBvcnQgY29uc3QgY3JlYXRlVGFibGUgPSAobXNnLCBjdXN0b21FdmVudERhdGEpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHRhYmxlRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGxldCBoZWFkZXJDZWxsID0geWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhcImNlOGZhOGU4Y2FiMDdhMTlmODNmNDE4MWFjOGNiZTc2MDkzYzZiYzNcIik7XG4gICAgbGV0IHRhYmxlUm93ID0gZmlnbWEuY3JlYXRlQ29tcG9uZW50KCk7XG4gICAgbGV0IGNlbGxGaWxsQ29udGFpbmVyWSA9IGZhbHNlO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICB0YWJsZUZyYW1lLm5hbWUgPSBcIlRhYmxlXCI7XG4gICAgdGFibGVGcmFtZS5maWxscyA9IFtdO1xuICAgIHRhYmxlRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgdGFibGVGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIHRhYmxlRnJhbWUueCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuICAgIHRhYmxlRnJhbWUueSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgIG1zZy5jb2x1bW5Db25maWd1cmF0aW9uLmZpbmQoKGNvbCkgPT4gKGNlbGxGaWxsQ29udGFpbmVyWSA9IGNvbC5tdWx0aVZhbHVlKSk7XG4gICAgY29uc3QgaGlkZVNvcnRDb250cm9scyA9IChoZWFkZXJDZWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IGFycm93c0xheWVyID0gaGVhZGVyQ2VsbC5maW5kT25lKChjaGlsZCkgPT4gY2hpbGQubmFtZSA9PT0gXCJBcnJvd3NcIik7XG4gICAgICAgIGFycm93c0xheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICB9O1xuICAgIFsuLi5BcnJheShtc2cucm93cyArIDEpLmtleXMoKV0ubWFwKChyb3dJbmRleCkgPT4ge1xuICAgICAgICB0YWJsZVJvdy5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgIHRhYmxlUm93LmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICB0YWJsZVJvdy5uYW1lID0gXCJSb3dcIjtcbiAgICAgICAgbXNnLmNvbHVtbkNvbmZpZ3VyYXRpb24uZm9yRWFjaCgoY29sKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCB7IG5hbWU6IGNvbE5hbWUsIGFsaWdubWVudDogY29sQWxpZ25tZW50LCBjZWxsVHlwZTogY29sQ2VsbFR5cGUsIG11bHRpVmFsdWU6IGNvbE11bHRpVmFsdWUsIHNvcnRDb250cm9sczogY29sU29ydENvbnRyb2xzLCB9ID0gY29sO1xuICAgICAgICAgICAgY29sQWxpZ25tZW50ID0gdG9DYXBpdGFsaXplZFN0cmluZyhjb2xBbGlnbm1lbnQpO1xuICAgICAgICAgICAgY29sQ2VsbFR5cGUgPSB0b0NhcGl0YWxpemVkU3RyaW5nKGNvbENlbGxUeXBlKTtcbiAgICAgICAgICAgIGNvbE11bHRpVmFsdWUgPSB0b0NhcGl0YWxpemVkU3RyaW5nKGNvbE11bHRpVmFsdWUpO1xuICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoaXNIZWFkZXJDZWxsID0gaGVhZGVyQ2VsbC5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbCA9IHRoaXNIZWFkZXJDZWxsLmNoaWxkcmVuWzBdXG4gICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRIYXZlSGVhZGVyVGV4dCA9IGNvbENlbGxUeXBlICE9PSBcIkZhdm9yaXRlXCIgJiYgY29sQ2VsbFR5cGUgIT09IFwiQWN0aW9uc1wiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxUeXBlSXNBY3Rpb25zID0gY29sQ2VsbFR5cGUgPT09IFwiQWN0aW9uc1wiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0N1c3RvbUNvbE5hbWUgPSBjb2xOYW1lLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXRIZWFkZXJUZXh0Q2hhcmFjdGVycyA9IChuZXdDaGFycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbC5kZWxldGVDaGFyYWN0ZXJzKDAsIHRleHROb2RlT2ZIZWFkZXJDZWxsLmNoYXJhY3RlcnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5vZGVPZkhlYWRlckNlbGwuaW5zZXJ0Q2hhcmFjdGVycygwLCBuZXdDaGFycyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzQ3VzdG9tQ29sTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5uYW1lID0gY29sTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGVhZGVyVGV4dENoYXJhY3RlcnMoY29sTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5uYW1lID0gXCJIZWFkZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGVhZGVyVGV4dENoYXJhY3RlcnMoXCJIZWFkZXJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghc2hvdWxkSGF2ZUhlYWRlclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZVNvcnRDb250cm9scyh0aGlzSGVhZGVyQ2VsbCk7XG4gICAgICAgICAgICAgICAgICAgIHNldEhlYWRlclRleHRDaGFyYWN0ZXJzKFwiIFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwuc2V0UHJvcGVydGllcyh7IEFsaWdubWVudDogY29sQWxpZ25tZW50IH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldGVybWluZUhlYWRlckNlbGxXaWR0aCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZy5pc011bHRpVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTIwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sQ2VsbFR5cGUgPT09IFwiRW50aXR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTAyO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sQ2VsbFR5cGUgPT09IFwiVXNlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDEyMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzaG91bGRIYXZlSGVhZGVyVGV4dClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA1MDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEhhdmVIZWFkZXJUZXh0ICYmIGNvbFNvcnRDb250cm9scylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA5MDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNIZWFkZXJDZWxsLndpZHRoO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwucmVzaXplKGRldGVybWluZUhlYWRlckNlbGxXaWR0aCgpLCB0aGlzSGVhZGVyQ2VsbC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLmNoaWxkcmVuWzBdLmxheW91dEdyb3cgPVxuICAgICAgICAgICAgICAgICAgICBjZWxsRmlsbENvbnRhaW5lclkgPyAxIDogMDtcbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBjZWxsRmlsbENvbnRhaW5lcllcbiAgICAgICAgICAgICAgICAgICAgPyBcIkZJWEVEXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkFVVE9cIjtcbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5jb3VudGVyQXhpc1NpemluZ01vZGUgPSAhc2hvdWxkSGF2ZUhlYWRlclRleHRcbiAgICAgICAgICAgICAgICAgICAgPyBcIkFVVE9cIlxuICAgICAgICAgICAgICAgICAgICA6IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBjZWxsVHlwZUlzQWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFwiRklYRURcIlxuICAgICAgICAgICAgICAgICAgICA6IHRoaXNIZWFkZXJDZWxsLmNvdW50ZXJBeGlzU2l6aW5nTW9kZTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkSGF2ZUhlYWRlclRleHQgJiYgIWNvbFNvcnRDb250cm9scykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGhpc0hlYWRlckNlbGwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZVNvcnRDb250cm9scyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbENlbGxUeXBlID09PSBcIkFjdGlvbnNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVTb3J0Q29udHJvbHModGhpc0hlYWRlckNlbGwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbFNvcnRDb250cm9scylcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVTb3J0Q29udHJvbHModGhpc0hlYWRlckNlbGwpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaGFuZGxlU29ydENvbnRyb2xzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0YWJsZUZyYW1lLmFwcGVuZENoaWxkKHRhYmxlUm93KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aGlzVGFibGVSb3cgPSB0YWJsZVJvdy5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgdGhpc1RhYmxlUm93LmNoaWxkcmVuLm1hcCgoY2VsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsID0gY2VsbDtcbiAgICAgICAgICAgICAgICBsZXQgeyBjZWxsVHlwZTogY29sQ2VsbFR5cGUsIG11bHRpVmFsdWU6IGNvbE11bHRpVmFsdWUgfSA9IG1zZy5jb2x1bW5Db25maWd1cmF0aW9uW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsVHlwZXNUaGF0Q2FuQmVNdWx0aVZhbHVlID0gW1xuICAgICAgICAgICAgICAgICAgICBcIlRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJNZXRyaWNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJFbnRpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJMaW5rXCIsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJsZU11bHRpVmFsdWUgPSB0b0NhcGl0YWxpemVkU3RyaW5nKG1zZy5pc011bHRpVmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbENlbGxUeXBlID0gdG9DYXBpdGFsaXplZFN0cmluZyhjb2xDZWxsVHlwZSk7XG4gICAgICAgICAgICAgICAgY29sTXVsdGlWYWx1ZSA9IHRvQ2FwaXRhbGl6ZWRTdHJpbmcoY29sTXVsdGlWYWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sQ2FuQmVNdWx0aVZhbHVlID0gY2VsbFR5cGVzVGhhdENhbkJlTXVsdGlWYWx1ZS5zb21lKChjZWxsVHlwZSkgPT4gY2VsbFR5cGUgPT09IGNvbENlbGxUeXBlKTtcbiAgICAgICAgICAgICAgICBjZWxsLm5hbWUgPT09IFwiSGVhZGVyXCIgPyAoY2VsbC5uYW1lID0gXCJDZWxsXCIpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBjZWxsLnNldFByb3BlcnRpZXMoeyBUeXBlOiBcIkJvZHlcIiB9KTtcbiAgICAgICAgICAgICAgICBjZWxsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgICAgICAgICAgICBUeXBlOiBjb2xDZWxsVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgXCJNdWx0aS12YWx1ZVwiOiBjb2xDYW5CZU11bHRpVmFsdWUgPyB0YWJsZU11bHRpVmFsdWUgOiBcIkZhbHNlXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2VsbC5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1zZy5pc011bHRpVmFsdWUgJiYgY29sTXVsdGlWYWx1ZSA9PT0gXCJGYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29sQ2FuQmVNdWx0aVZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsVmFsdWVMYXllciA9IGNlbGwuZmluZE9uZSgoY2hpbGQpID0+IGNoaWxkLm5hbWUgPT09IFwiU2Vjb25kYXJ5IHZhbHVlXCIgJiYgY2hpbGQudHlwZSA9PT0gXCJURVhUXCIpO1xuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVmFsdWVMYXllci5jaGFyYWN0ZXJzID0gXCIgXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNlbGwuY2hpbGRyZW5bMF0ubGF5b3V0R3JvdyA9IGNlbGxGaWxsQ29udGFpbmVyWSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIGNlbGwucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gY2VsbEZpbGxDb250YWluZXJZID8gXCJGSVhFRFwiIDogXCJBVVRPXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhYmxlRnJhbWUuYXBwZW5kQ2hpbGQodGhpc1RhYmxlUm93KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGxldCB0YWJsZURhdGEgPSBPYmplY3QuYXNzaWduKHsgZmlsZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLnBhcmVudC5uYW1lLCBmaWxlS2V5OiBmaWdtYS5maWxlS2V5LCBcIkNvbHVtbiBjb3VudFwiOiBtc2cuY29sdW1uQ29uZmlndXJhdGlvbi5sZW5ndGgsIFwiUm93IGNvdW50XCI6IG1zZy5yb3dzLCBcIkNvbHVtbiBDb25maWd1cmF0aW9uXCI6IG1zZy5jb2x1bW5Db25maWd1cmF0aW9uIH0sIGN1c3RvbUV2ZW50RGF0YSk7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInRhYmxlLWNyZWF0ZWRcIiwgbWVzc2FnZTogdGFibGVEYXRhIH0pO1xuICAgIGZpZ21hLm5vdGlmeShcIlRhYmxlIGNyZWF0ZWQg4pyFXCIpO1xufSk7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldENvbG9yU3RhdHMgfSBmcm9tIFwiLi4vY29sb3ItbGludGVyL2NvbG9yTGludGVyXCI7XG5sZXQgdGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBzd2l0Y2hUb1RoZW1lID0gKHRoZW1lLCBjbG9zZUFmdGVyUnVuID0gZmFsc2UsIGN1c3RvbUV2ZW50RGF0YSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChjbG9zZUFmdGVyUnVuKSB7XG4gICAgICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNzAsIGhlaWdodDogMCB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogYGxvYWRpbmctJHt0aGVtZX0tdGhlbWUtc3dpdGNoYCB9KTtcbiAgICB9XG4gICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiAmJiAodGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiA9PT0gbnVsbCB8fCB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uLmNhbmNlbCgpKTtcbiAgICAgICAgZmlnbWEubm90aWZ5KFwiU2VsZWN0IHNvbWUgbGF5ZXJzIGJlZm9yZSBjaG9vc2luZyBhIHRoZW1lXCIsIHsgZXJyb3I6IHRydWUgfSk7XG4gICAgICAgIHJldHVybiBjbG9zZUFmdGVyUnVuICYmIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfVxuICAgIHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24gJiYgKHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24gPT09IG51bGwgfHwgdGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGhlbWVTd2l0Y2hlZE5vdGlmaWNhdGlvbi5jYW5jZWwoKSk7XG4gICAgY29uc3QgbG9hZGluZ05vdGlmaWNhdGlvbiA9IGZpZ21hLm5vdGlmeShgQ29udmVydGluZyBzZWxlY3Rpb24gdG8gJHt0aGVtZX0gbW9kZS4uLmApO1xuICAgIGNvbnN0IGNvbG9yU3RhdHMgPSB5aWVsZCBnZXRDb2xvclN0YXRzKHRydWUpO1xuICAgIGxldCBpbXBvcnRlZFN0eWxlcyA9IFtdO1xuICAgIGxldCBrZXlzVG9Mb2FkID0gKCkgPT4ge1xuICAgICAgICBsZXQga2V5cyA9IFtdO1xuICAgICAgICBjb2xvclN0YXRzLmNvbG9yc1VzaW5nT25lQ29yZVN0eWxlLmZvckVhY2goKGNvbG9yKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoXCJ0aGVtZVwiIGluIGNvbG9yLnRva2VuICYmICgoX2EgPSBjb2xvci50b2tlbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRoZW1lKSAhPT0gdGhlbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlPZlRva2VuSW5PcHBvc2l0ZVRoZW1lID0gdGhlbWUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IGNvbG9yLnRva2VuLmxpZ2h0VGhlbWVUb2tlblxuICAgICAgICAgICAgICAgICAgICA6IGNvbG9yLnRva2VuLmRhcmtUaGVtZVRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleUlzTm90RHVwbGljYXRlID0gIWtleXMuc29tZSgoa2V5KSA9PiBrZXkgPT09IGtleU9mVG9rZW5Jbk9wcG9zaXRlVGhlbWUpO1xuICAgICAgICAgICAgICAgIGlmIChrZXlPZlRva2VuSW5PcHBvc2l0ZVRoZW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE1pc3NpbmcgdG9rZW46IE5vICR7dGhlbWV9IHRoZW1lIHRva2VuIGZvdW5kIGZvciBcIiR7Y29sb3IudG9rZW4ubmFtZX1cIi5gKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrZXlJc05vdER1cGxpY2F0ZSAmJiBrZXlzLnB1c2goa2V5T2ZUb2tlbkluT3Bwb3NpdGVUaGVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9O1xuICAgIGltcG9ydGVkU3R5bGVzID0geWllbGQgUHJvbWlzZS5hbGwoa2V5c1RvTG9hZCgpLm1hcCgoa2V5KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhrZXkpOyB9KSkpO1xuICAgIGZvciAoY29uc3QgY29sb3Igb2YgY29sb3JTdGF0cy5jb2xvcnNVc2luZ09uZUNvcmVTdHlsZSkge1xuICAgICAgICBpZiAoXCJ0aGVtZVwiIGluIGNvbG9yLnRva2VuICYmICgoX2EgPSBjb2xvci50b2tlbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRoZW1lKSAhPT0gdGhlbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChjb2xvci5sYXllcklkKTtcbiAgICAgICAgICAgIGNvbnN0IGtleU9mVG9rZW5Jbk9wcG9zaXRlVGhlbWUgPSB0aGVtZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyBjb2xvci50b2tlbi5saWdodFRoZW1lVG9rZW5cbiAgICAgICAgICAgICAgICA6IGNvbG9yLnRva2VuLmRhcmtUaGVtZVRva2VuO1xuICAgICAgICAgICAgY29uc3QgaW1wb3J0ZWRTdHlsZSA9IGltcG9ydGVkU3R5bGVzLmZpbHRlcigoc3R5bGUpID0+IHN0eWxlLmtleSA9PT0ga2V5T2ZUb2tlbkluT3Bwb3NpdGVUaGVtZSlbMF07XG4gICAgICAgICAgICBpZiAoa2V5T2ZUb2tlbkluT3Bwb3NpdGVUaGVtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE1pc3NpbmcgdG9rZW46IE5vICR7dGhlbWV9IHRoZW1lIHRva2VuIGZvdW5kIGZvciBcIiR7Y29sb3IudG9rZW4ubmFtZX1cIi5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sb3IubGF5ZXJIYXNTZWdtZW50U3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRSYW5nZUZpbGxTdHlsZUlkKGNvbG9yLnNlZ21lbnQuc3RhcnQsIGNvbG9yLnNlZ21lbnQuZW5kLCBpbXBvcnRlZFN0eWxlLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGVbYCR7Y29sb3IuY29sb3JUeXBlfVN0eWxlSWRgXSA9IGltcG9ydGVkU3R5bGUuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZGluZ05vdGlmaWNhdGlvbi5jYW5jZWwoKTtcbiAgICBjb25zdCBjb3ZlcmFnZUFzSW50ZWdlciA9IGNvbG9yU3RhdHMub25lQ29yZUNvbG9yU3R5bGVDb3ZlcmFnZS5zdWJzdHJpbmcoMCwgY29sb3JTdGF0cy5vbmVDb3JlQ29sb3JTdHlsZUNvdmVyYWdlLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IGlzRXJyb3JXb3J0aHkgPSBwYXJzZUludChjb3ZlcmFnZUFzSW50ZWdlcikgPCA1MDtcbiAgICBpZiAoY29sb3JTdGF0cy5vbmVDb3JlQ29sb3JTdHlsZUNvdmVyYWdlID09PSBcIjEwMCVcIikge1xuICAgICAgICB0aGVtZVN3aXRjaGVkTm90aWZpY2F0aW9uID0gZmlnbWEubm90aWZ5KGAke3RoZW1lID09PSBcImxpZ2h0XCIgPyBcIvCflIZcIiA6IFwi8J+MmVwifSBTZWxlY3Rpb24gc2V0IHRvICR7dGhlbWV9IG1vZGVgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoZW1lU3dpdGNoZWROb3RpZmljYXRpb24gPSBmaWdtYS5ub3RpZnkoYOKciyBXYXJuaW5nOiBPbmx5ICR7Y29sb3JTdGF0cy5vbmVDb3JlQ29sb3JTdHlsZUNvdmVyYWdlfSBjb252ZXJ0ZWQgdG8gXG4gICAgICAke3RoZW1lfSBtb2RlIGJlY2F1c2Ugc29tZSBjb2xvcnMgYXJlbid0IHVzaW5nIE9uZSBDb3JlIGNvbG9yIHN0eWxlcy5gLCB7IHRpbWVvdXQ6IGlzRXJyb3JXb3J0aHkgPyA5OTk5OTk5OTkgOiAxNTAwMCwgZXJyb3I6IGlzRXJyb3JXb3J0aHkgfSk7XG4gICAgfVxuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJ0aGVtZS1zd2l0Y2hlZFwiLFxuICAgICAgICBtZXNzYWdlOiBPYmplY3QuYXNzaWduKHsgc3dpdGNoZWRUbzogdGhlbWUsIGNsb3NlQWZ0ZXJSdW4sIGNvbG9yc1VzaW5nT25lQ29yZVN0eWxlOiBjb2xvclN0YXRzLmNvbG9yc1VzaW5nT25lQ29yZVN0eWxlLmxlbmd0aCwgY29sb3JzU2VsZWN0ZWQ6IGNvbG9yU3RhdHMuYWxsSW5zdGFuY2VzT2ZDb2xvci5sZW5ndGgsIGNvbG9yc1N3aXRjaGVkOiBjb2xvclN0YXRzLm9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2UgfSwgY3VzdG9tRXZlbnREYXRhKSxcbiAgICB9KTtcbn0pO1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==