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
/* harmony import */ var _oneCorePaintStyles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oneCorePaintStyles.js */ "./src/plugin/oneCorePaintStyles.js");
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
switch (figma.command) {
    case "home":
        figma.ui.postMessage({ type: "figma-command", message: "open-home" });
        break;
    case "table":
        figma.ui.postMessage({ type: "figma-command", message: "open-table-creator" });
        break;
    case "language":
        figma.ui.postMessage({ type: "figma-command", message: "open-language-linter" });
        figma.ui.resize(475, 500);
        break;
    case "color":
        figma.ui.postMessage({ type: "figma-command", message: "open-color-linter" });
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
    let tableData = {
        userData: figma.currentUser,
        columnConfiguration: msg.columnConfiguration,
        columnCount: msg.columnConfiguration.length,
        rowCount: msg.rows
    };
    figma.ui.postMessage({ type: "table-created", message: tableData });
    figma.notify("Table created ✅");
    figma.closePlugin();
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
        var _a;
        if (!!((_a = selectedLayer) === null || _a === void 0 ? void 0 : _a.children)) {
            const selectedTextLayers = selectedLayer.findAll(n => n.type === 'TEXT');
            selectedTextLayers.forEach((layer) => {
                pushTextLayerToArray(layer, textLayers);
            });
        }
        else if (selectedLayer.type === 'TEXT') {
            pushTextLayerToArray(selectedLayer, textLayers);
        }
    });
    return figma.ui.postMessage({
        type: "selection-change",
        message: {
            textLayers,
            selectedLayer: selection
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
    var _a, _b;
    const styleIdType = colorType === 'fills' ? 'fillStyleId' : 'strokeStyleId';
    const isSolidColor = ((_a = layer === null || layer === void 0 ? void 0 : layer.fills[0]) === null || _a === void 0 ? void 0 : _a.type) === 'SOLID';
    const fillIsImage = ((_b = layer === null || layer === void 0 ? void 0 : layer.fills[0]) === null || _b === void 0 ? void 0 : _b.type) === 'IMAGE';
    const colorInHex = (colorInRGB) => {
        return rgbToHex(colorInRGB.r, colorInRGB.g, colorInRGB.b);
    };
    if (!fillIsImage && layer.visible) {
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
const getRawLayersWithColor = () => {
    let selection = figma.currentPage.selection;
    const output = selection.map((selectedLayer) => {
        let tempOutput = selectedLayer.findAll((n) => {
            var _a, _b;
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
            ];
            const nodeIsValidNodeType = acceptableNodetypes.some((nodeType) => n.type === nodeType);
            return nodeIsValidNodeType && (((_a = n === null || n === void 0 ? void 0 : n.fills) === null || _a === void 0 ? void 0 : _a.length) > 0 || ((_b = n === null || n === void 0 ? void 0 : n.strokes) === null || _b === void 0 ? void 0 : _b.length) > 0);
        });
        return [...tempOutput];
    });
    return output.flat();
};
const sendCurrentSelection = () => {
    return figma.ui.postMessage({
        type: 'selection-change',
        message: getRawLayersWithColor(),
    });
};
const rawLayersWithColor = getRawLayersWithColor();
const layersWithColor = rawLayersWithColor.map((layer, index) => {
    const hasFill = rawLayersWithColor[index].fills.length > 0;
    const hasStroke = rawLayersWithColor[index].strokes.length > 0;
    const hasFillAndStroke = hasFill && hasStroke;
    return {
        layerId: rawLayersWithColor[index].id,
        name: rawLayersWithColor[index].name,
        fills: rawLayersWithColor[index].fills,
        strokes: rawLayersWithColor[index].strokes,
        fillStyleId: rawLayersWithColor[index].fillStyleId,
        strokeStyleId: rawLayersWithColor[index].strokeStyleId,
        visible: rawLayersWithColor[index].visible,
        type: rawLayersWithColor[index].type,
        hasFill: hasFill,
        hasStroke: hasStroke,
        hasFillAndStroke: hasFillAndStroke,
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
    return _oneCorePaintStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"].some((style) => {
        return colorInHex === style.color.color.hex;
    }, false);
};
const doesKeyMatchAnyOneCoreColorStyleKey = (key) => {
    return _oneCorePaintStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"].some((style) => {
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
        _oneCorePaintStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"].map((style) => {
            if (color.colorStyleId.includes(style.key)) {
                colors[index] = Object.assign(Object.assign({}, color), { styleName: style.name });
            }
            return;
        });
    });
    return colors;
})();
const colorsWithStyleNotUsingOneCoreStyle = colorsWithColorStyle.filter((color) => {
    const { r, g, b } = color.color[0].color;
    const colorInHex = rgbToHex(r, g, b);
});
const colorsNotUsingOneCoreColorStyle = allInstancesOfColor.filter((color) => {
    return !colorsUsingOneCoreStyle.some((oneCoreColor) => {
        return color.colorId === oneCoreColor.colorId;
    });
});
const addOneCoreStyleNameToColor = () => {
    colorsUsingOneCoreStyle.map((color, index) => {
        _oneCorePaintStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"].map((style) => {
            if (color.colorStyleId.includes(style.key)) {
                debugger;
                colorsUsingOneCoreStyle[index] = Object.assign(Object.assign({}, color), { styleName: style.name });
            }
            return;
        });
    });
};
const oneCoreColorStyleCoverage = `${((colorsUsingOneCoreStyle.length / allInstancesOfColor.length) * 100).toFixed(2)}%`;
const almostAllColors = [...colorsUsingOneCoreStyle, ...colorsNotUsingOneCoreColorStyle];
const idsOfAllInstancesOfColor = allInstancesOfColor.map((color) => color.colorId);
const idsOfAlmostAllColors = almostAllColors.map((color) => color.colorId);
const colorStats = {
    allInstancesOfColor: allInstancesOfColor,
    colorsWithColorStyle: colorsWithColorStyle,
    colorsUsingOneCoreStyle: colorsUsingOneCoreStyle,
    colorsWithStyleNotUsingOneCoreStyle: colorsWithStyleNotUsingOneCoreStyle,
    colorsNotUsingOneCoreColorStyle: colorsNotUsingOneCoreColorStyle,
    oneCoreColorStyleCoverage: oneCoreColorStyleCoverage,
    almostAllColors: almostAllColors,
    idsOfAllInstancesOfColor: idsOfAllInstancesOfColor,
    idsOfAlmostAllColors: idsOfAlmostAllColors,
};
const selectAndZoomToLayer = (layerId) => {
    const layer = figma.getNodeById(layerId);
    figma.currentPage.selection = [layer];
    figma.viewport.scrollAndZoomIntoView([layer]);
};
console.log(colorStats);
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.type === "navigate-to-tab") {
        switch (msg.tabClicked) {
            case "home":
            case "table-creator":
                figma.ui.resize(300, 448);
                break;
            case "language-linter":
                sendCurrentTextSelection();
                figma.ui.resize(475, 500);
                break;
        }
    }
    if (msg.type === "create-table") {
        createTable(msg);
    }
    if (msg.type === 'request-selection') {
        sendCurrentTextSelection();
        figma.ui.postMessage({
            type: 'color-stats',
            message: colorStats,
        });
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
        const activeTextLayer = figma.getNodeById(msg.activeNodeId);
        figma.viewport.scrollAndZoomIntoView([activeTextLayer]);
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
    if (msg.type === 'select-layer') {
        console.log(msg.type);
        console.log(msg.layerId);
        selectAndZoomToLayer(msg.layerId);
    }
});
figma.on("selectionchange", () => {
    console.log('selectionchange was fired');
    sendCurrentTextSelection();
});


/***/ }),

/***/ "./src/plugin/oneCorePaintStyles.js":
/*!******************************************!*\
  !*** ./src/plugin/oneCorePaintStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const oneCorePaintStyles = [
    {
        name: 'Roles/Interactive/Interactive Primary',
        key: '18ecca921484122521d9d31c21d32217b76a8214',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#017c86',
                rgb: {
                    r: 0.003921568859368563,
                    g: 0.48627451062202454,
                    b: 0.5254902243614197,
                },
            },
        },
    },
    {
        name: 'Roles/Interactive/Interactive Secondary',
        key: 'db0a463191174195a36cc623f1d1c0749a50723d',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#e7e9e9',
                rgb: {
                    r: 0.9058823585510254,
                    g: 0.9137254953384399,
                    b: 0.9137254953384399,
                },
            },
        },
    },
    {
        name: 'Roles/Interactive/Interactive Danger',
        key: 'b56c9141946aadb53bb58f7f375fb3ba2b477d02',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#df2d24',
                rgb: {
                    r: 0.8745098114013672,
                    g: 0.1764705926179886,
                    b: 0.1411764770746231,
                },
            },
        },
    },
    {
        name: 'Roles/Text/Text Primary',
        key: '7a0973353ae458a5a279bfe4c2db49ccc521a9bb',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#283636',
                rgb: {
                    r: 0.1568627506494522,
                    g: 0.21176470816135406,
                    b: 0.21176470816135406,
                },
            },
        },
    },
    {
        name: 'Roles/Text/Text Secondary',
        key: '611ac06128407ba765571cde396c337f42e5333e',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#556060',
                rgb: {
                    r: 0.3333333432674408,
                    g: 0.3764705955982208,
                    b: 0.3764705955982208,
                },
            },
        },
    },
    {
        name: 'Roles/Text/Text Emphasis',
        key: '02bca3df7a6d4fa8638173c47878d7264447b065',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#151d1d',
                rgb: {
                    r: 0.08235294371843338,
                    g: 0.11372549086809158,
                    b: 0.11372549086809158,
                },
            },
        },
    },
    {
        name: 'Roles/Text/Text Muted',
        key: 'ad7ad213369a33fb764108dba530dbaca382f7e1',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#6e7575',
                rgb: {
                    r: 0.4313725531101227,
                    g: 0.4588235318660736,
                    b: 0.4588235318660736,
                },
            },
        },
    },
    {
        name: 'Roles/Text/Text Disabled',
        key: '7568de7c7daef24adddacbe7210581de017a488b',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#9fa5a5',
                rgb: {
                    r: 0.6235294342041016,
                    g: 0.6470588445663452,
                    b: 0.6470588445663452,
                },
            },
        },
    },
    {
        name: 'Roles/Background/Background App',
        key: '4a9b88c71d8dc24f0b660278c25653269c076156',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#f3f4f4',
                rgb: {
                    r: 0.9529411792755127,
                    g: 0.95686274766922,
                    b: 0.95686274766922,
                },
            },
        },
    },
    {
        name: 'Roles/Background/Background Surface',
        key: 'b523aa6f31036ff72c60877cffdab99a043dd022',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#ffffff',
                rgb: {
                    r: 1,
                    g: 1,
                    b: 1,
                },
            },
        },
    },
    {
        name: 'Roles/Background/Background Surface Inverted',
        key: '6578690fbc8a65324fab91790d8cb587d0ceb197',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#283636',
                rgb: {
                    r: 0.1568627506494522,
                    g: 0.21176470816135406,
                    b: 0.21176470816135406,
                },
            },
        },
    },
    {
        name: 'Roles/States/States Success',
        key: 'c325f3de317021942562315bcc3093db9aabe82d',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#02865b',
                rgb: {
                    r: 0.007843137718737125,
                    g: 0.5254902243614197,
                    b: 0.35686275362968445,
                },
            },
        },
    },
    {
        name: 'Roles/States/States Warning',
        key: '2151898447482186a20ba787934b531801b479c9',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#aa6701',
                rgb: {
                    r: 0.6666666865348816,
                    g: 0.40392157435417175,
                    b: 0.003921568859368563,
                },
            },
        },
    },
    {
        name: 'Roles/States/States Error',
        key: '93359dd10df621b92d5c24730042f7c79d8ac224',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#df2d24',
                rgb: {
                    r: 0.8745098114013672,
                    g: 0.1764705926179886,
                    b: 0.1411764770746231,
                },
            },
        },
    },
    {
        name: 'Roles/States/States Disabled',
        key: 'a3a377a84591e52d7f935e5322f9432fba422e47',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#9fa5a5',
                rgb: {
                    r: 0.6235294342041016,
                    g: 0.6470588445663452,
                    b: 0.6470588445663452,
                },
            },
        },
    },
    {
        name: 'Roles/Border/Border Regular',
        key: '5d32ea4c8c38a389f2a70f4381aa689b6aa57e4d',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#e7e9e9',
                rgb: {
                    r: 0.9058823585510254,
                    g: 0.9137254953384399,
                    b: 0.9137254953384399,
                },
            },
        },
    },
    {
        name: 'Roles/Border/Border Subtle',
        key: '6e195286925da9647c3623a634a6e8d1973af065',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#f3f4f4',
                rgb: {
                    r: 0.9529411792755127,
                    g: 0.95686274766922,
                    b: 0.95686274766922,
                },
            },
        },
    },
    {
        name: 'Roles/Border/Border Strong',
        key: '0fbd7b53f591117775241cf3fd7101488df5397f',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#d1d4d4',
                rgb: {
                    r: 0.8196078538894653,
                    g: 0.8313725590705872,
                    b: 0.8313725590705872,
                },
            },
        },
    },
    {
        name: 'Roles/Entity Status/Entity Status Operational',
        key: '2a7aad3c9369718bf40fe039cad6db56e4ec9c15',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#01b076',
                rgb: {
                    r: 0.003921568859368563,
                    g: 0.6901960968971252,
                    b: 0.4627451002597809,
                },
            },
        },
    },
    {
        name: 'Roles/Entity Status/Entity Status Degraded',
        key: '57979f3be17fbd5fa8b477095e7aac27456b6170',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#f0b400',
                rgb: {
                    r: 0.9411764740943909,
                    g: 0.7058823704719543,
                    b: 0,
                },
            },
        },
    },
    {
        name: 'Roles/Entity Status/Entity Status Anomaly',
        key: '1ea1ea6e861ec14d3dc04de659adf746f8f9af5c',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#f07a0e',
                rgb: {
                    r: 0.9411764740943909,
                    g: 0.47843137383461,
                    b: 0.054901961237192154,
                },
            },
        },
    },
    {
        name: 'Roles/Entity Status/Entity Status Unavailable',
        key: 'e89f9c93bdfbbb82db5f3de40a2d2f21ba9a9856',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#f5554b',
                rgb: {
                    r: 0.9607843160629272,
                    g: 0.3333333432674408,
                    b: 0.29411765933036804,
                },
            },
        },
    },
    {
        name: 'Roles/Entity Status/Entity Status Unknown',
        key: '1e51898cf26af891a8b9cf2439eda59285784733',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#9fa5a5',
                rgb: {
                    r: 0.6235294342041016,
                    g: 0.6470588445663452,
                    b: 0.6470588445663452,
                },
            },
        },
    },
    {
        name: 'Gray / Gray 1',
        key: '9735f199dc6008c4fae3a57e99164dd616e0c741',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#fafbfb',
                rgb: {
                    r: 0.9803921580314636,
                    g: 0.9843137264251709,
                    b: 0.9843137264251709,
                },
            },
        },
    },
    {
        name: 'Gray / Gray 2',
        key: '6129b49374bfb4725f849ab5eb26b0b9128dde22',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#f3f4f4',
                rgb: {
                    r: 0.9529411792755127,
                    g: 0.95686274766922,
                    b: 0.95686274766922,
                },
            },
        },
    },
    {
        name: 'Gray / Gray 3',
        key: '0e250f7120c059156c744eac694256bc5ebb43a6',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#e7e9e9',
                rgb: {
                    r: 0.9058823585510254,
                    g: 0.9137254953384399,
                    b: 0.9137254953384399,
                },
            },
        },
    },
    {
        name: 'Gray / Gray 4',
        key: 'b598f7f68abbbce30d94fdeff5a29e650072ed27',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#d1d4d4',
                rgb: {
                    r: 0.8196078538894653,
                    g: 0.8313725590705872,
                    b: 0.8313725590705872,
                },
            },
        },
    },
    {
        name: 'Gray / Gray 5',
        key: '20f646bc210260f90417f05c1bdf443718b26fbc',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#9fa5a5',
                rgb: {
                    r: 0.6235294342041016,
                    g: 0.6470588445663452,
                    b: 0.6470588445663452,
                },
            },
        },
    },
    {
        name: 'Gray / Gray 6',
        key: '8281c95e91465ff01741d9b12ab29b9d95e56d28',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#6e7575',
                rgb: {
                    r: 0.4313725531101227,
                    g: 0.4588235318660736,
                    b: 0.4588235318660736,
                },
            },
        },
    },
    {
        name: 'Gray / Gray 7',
        key: '6b3a4239699f66a342fac0ac3ee5ca92360c408b',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#556060',
                rgb: {
                    r: 0.3333333432674408,
                    g: 0.3764705955982208,
                    b: 0.3764705955982208,
                },
            },
        },
    },
    {
        name: 'Gray / Gray 8',
        key: '39eb766b93e0715574c884380cb3b7f9b9b32778',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#3f4c4c',
                rgb: {
                    r: 0.24705882370471954,
                    g: 0.2980392277240753,
                    b: 0.2980392277240753,
                },
            },
        },
    },
    {
        name: 'Gray / Gray 9',
        key: '0f0f11a1d81ad608faa88693d0d884f021bf1eaa',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#283636',
                rgb: {
                    r: 0.1568627506494522,
                    g: 0.21176470816135406,
                    b: 0.21176470816135406,
                },
            },
        },
    },
    {
        name: 'Gray / Gray 10',
        key: '9000de94da7b0ca7ee9270c2dccb8f3772f0fa06',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#151d1d',
                rgb: {
                    r: 0.08235294371843338,
                    g: 0.11372549086809158,
                    b: 0.11372549086809158,
                },
            },
        },
    },
    {
        name: 'Teal / Teal 1',
        key: 'aa7f67d5ae20c7cb53ff5135c4b78df8f41cf89f',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#f0fbfc',
                rgb: {
                    r: 0.9411764740943909,
                    g: 0.9843137264251709,
                    b: 0.9882352948188782,
                },
            },
        },
    },
    {
        name: 'Teal / Teal 2',
        key: 'e133acbfa09e21afb61ae280d033fba7e8732148',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#c6f2f6',
                rgb: {
                    r: 0.7764706015586853,
                    g: 0.9490196108818054,
                    b: 0.9647058844566345,
                },
            },
        },
    },
    {
        name: 'Teal / Teal 3',
        key: '32a8fda65109fccead58f0d588c2a739b1c2eb13',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#6cdae3',
                rgb: {
                    r: 0.42352941632270813,
                    g: 0.8549019694328308,
                    b: 0.8901960849761963,
                },
            },
        },
    },
    {
        name: 'Teal/Teal 4',
        key: '36cd80a4601f79f541e0bfc83a914a4d1ab4f372',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#27bac8',
                rgb: {
                    r: 0.15294118225574493,
                    g: 0.729411780834198,
                    b: 0.7843137383460999,
                },
            },
        },
    },
    {
        name: 'Teal/Teal 5',
        key: '7eb3fe1c9e35ea795820f135fd30c1ba4d08a976',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#019caa',
                rgb: {
                    r: 0.003921568859368563,
                    g: 0.6117647290229797,
                    b: 0.6666666865348816,
                },
            },
        },
    },
    {
        name: 'Teal / Teal 6',
        key: '3e2c6cbf4bed8c537ad017fe9155f84ac533acdf',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#017c86',
                rgb: {
                    r: 0.003921568859368563,
                    g: 0.48627451062202454,
                    b: 0.5254902243614197,
                },
            },
        },
    },
    {
        name: 'Teal / Teal 7',
        key: '2cba9ceb8ce12343bd852f02c59922e3d6efe702',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#02636b',
                rgb: {
                    r: 0.007843137718737125,
                    g: 0.38823530077934265,
                    b: 0.41960784792900085,
                },
            },
        },
    },
    {
        name: 'Teal / Teal 8',
        key: '35433f44abbac69f6a4047a0eeb504fc87e69785',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#004b51',
                rgb: {
                    r: 0,
                    g: 0.29411765933036804,
                    b: 0.3176470696926117,
                },
            },
        },
    },
    {
        name: 'Teal / Teal 9',
        key: 'cd73a6e378f9ed2a17cf3880b055873cec282c63',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#00373c',
                rgb: {
                    r: 0,
                    g: 0.21568627655506134,
                    b: 0.23529411852359772,
                },
            },
        },
    },
    {
        name: 'Teal / Teal 10',
        key: 'bee740dee631198c641768cc532b6cafc383138a',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#021e1f',
                rgb: {
                    r: 0.007843137718737125,
                    g: 0.11764705926179886,
                    b: 0.12156862765550613,
                },
            },
        },
    },
    {
        name: 'Blue / Blue 1',
        key: 'fbe436bbb36d7e7452de2c3021e3ab00ef8366f4',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#f6fafd',
                rgb: {
                    r: 0.9647058844566345,
                    g: 0.9803921580314636,
                    b: 0.9921568632125854,
                },
            },
        },
    },
    {
        name: 'Blue / Blue 2',
        key: 'ea45071f90ac59db22b60419416e435505cdaa11',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#e1ee00',
                rgb: {
                    r: 0.8823529481887817,
                    g: 0.929411768913269,
                    b: 1,
                },
            },
        },
    },
    {
        name: 'Blue / Blue 3',
        key: 'df3337bf6731dce5afd266595961ea0255118317',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#a4d1fc',
                rgb: {
                    r: 0.6431372761726379,
                    g: 0.8196078538894653,
                    b: 0.9882352948188782,
                },
            },
        },
    },
    {
        name: 'Blue / Blue 4',
        key: 'e5782cccb2c1f136196d142acf896dfe11ba01d9',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#63adfa',
                rgb: {
                    r: 0.38823530077934265,
                    g: 0.6784313917160034,
                    b: 0.9803921580314636,
                },
            },
        },
    },
    {
        name: 'Blue / Blue 5',
        key: '818fa9c049d0a0e01a96e71381182854f4a527c1',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#278ef8',
                rgb: {
                    r: 0.15294118225574493,
                    g: 0.5568627715110779,
                    b: 0.9725490212440491,
                },
            },
        },
    },
    {
        name: 'Blue / Blue 6',
        key: '08f69ba4346ee0e812902be29c580606329fceea',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#0c74df',
                rgb: {
                    r: 0.0470588244497776,
                    g: 0.45490196347236633,
                    b: 0.8745098114013672,
                },
            },
        },
    },
    {
        name: 'Blue / Blue 7',
        key: '9dd245bb6cbb4ef59cb46ba6cc19257420374527',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#0856aa',
                rgb: {
                    r: 0.0313725508749485,
                    g: 0.33725491166114807,
                    b: 0.6666666865348816,
                },
            },
        },
    },
    {
        name: 'Blue / Blue 8',
        key: '89d8cc1b79da057b72265d64cf5d696e245fafaa',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#074382',
                rgb: {
                    r: 0.027450980618596077,
                    g: 0.26274511218070984,
                    b: 0.5098039507865906,
                },
            },
        },
    },
    {
        name: 'Blue / Blue 9',
        key: 'd9003c2d8d6a2ad943b6c077e059aa6d8f872ca2',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#042a51',
                rgb: {
                    r: 0.01568627543747425,
                    g: 0.16470588743686676,
                    b: 0.3176470696926117,
                },
            },
        },
    },
    {
        name: 'Blue / Blue 10',
        key: '000bfc9cf63573d317a55e9fb5779f5ecab5e1e1',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#03172b',
                rgb: {
                    r: 0.0117647061124444,
                    g: 0.09019608050584793,
                    b: 0.16862745583057404,
                },
            },
        },
    },
    {
        name: 'Green / Green 1',
        key: 'ddd54e322e17fc2a58a47b32e02397936006e325',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#eb00f2',
                rgb: {
                    r: 0.9176470637321472,
                    g: 1,
                    b: 0.9490196108818054,
                },
            },
        },
    },
    {
        name: 'Green / Green 2',
        key: '18481a1bb12c0faea3f25f7b0e33182d891a9bf3',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#bdf7d7',
                rgb: {
                    r: 0.7411764860153198,
                    g: 0.9686274528503418,
                    b: 0.843137264251709,
                },
            },
        },
    },
    {
        name: 'Green / Green 3',
        key: '63ec99d920c8f29ccdc21ddd0e974a0c567ed57e',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#6beaae',
                rgb: {
                    r: 0.41960784792900085,
                    g: 0.9176470637321472,
                    b: 0.6823529601097107,
                },
            },
        },
    },
    {
        name: 'Green / Green 4',
        key: '22aa4d5f779f9fd8d3d04f749176f2ec79411d0a',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#01c884',
                rgb: {
                    r: 0.003921568859368563,
                    g: 0.7843137383460999,
                    b: 0.5176470875740051,
                },
            },
        },
    },
    {
        name: 'Green / Green 5',
        key: '8b2d7efddf3ceefaa8a4a4e4cd88487e47d7ca06',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#01b076',
                rgb: {
                    r: 0.003921568859368563,
                    g: 0.6901960968971252,
                    b: 0.4627451002597809,
                },
            },
        },
    },
    {
        name: 'Green / Green 6',
        key: 'd2212bf5ca7abce01f18c5109437efd5ee9669b3',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#02865b',
                rgb: {
                    r: 0.007843137718737125,
                    g: 0.5254902243614197,
                    b: 0.35686275362968445,
                },
            },
        },
    },
    {
        name: 'Green / Green 7',
        key: 'cf25f655f3c7523b827b689641865af1c26c24ff',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#026747',
                rgb: {
                    r: 0.007843137718737125,
                    g: 0.40392157435417175,
                    b: 0.27843138575553894,
                },
            },
        },
    },
    {
        name: 'Green / Green 8',
        key: 'edf661925f9de317149b42c36a5cf2a0b5ec4cf1',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#014d36',
                rgb: {
                    r: 0.003921568859368563,
                    g: 0.3019607961177826,
                    b: 0.21176470816135406,
                },
            },
        },
    },
    {
        name: 'Green / Green 9',
        key: '1bb28a49f327260d2b93572f6880b91fdb851ed2',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#013927',
                rgb: {
                    r: 0.003921568859368563,
                    g: 0.2235294133424759,
                    b: 0.15294118225574493,
                },
            },
        },
    },
    {
        name: 'Green / Green 10',
        key: 'fb3ac1bdedc70eed68e2c1a4198c05ac165699ff',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#021200',
                rgb: {
                    r: 0.007843137718737125,
                    g: 0.07058823853731155,
                    b: 0,
                },
            },
        },
    },
    {
        name: 'Yellow/Yellow 1',
        key: 'c7b25901352eb79a0e553e74fae58d4a2b6824e6',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#fefae9',
                rgb: {
                    r: 0.9960784316062927,
                    g: 0.9803921580314636,
                    b: 0.9137254953384399,
                },
            },
        },
    },
    {
        name: 'Yellow/Yellow 2',
        key: 'a93676a5061492778253ffb63eeaaa373e29b6b6',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#fdf2c4',
                rgb: {
                    r: 0.9921568632125854,
                    g: 0.9490196108818054,
                    b: 0.7686274647712708,
                },
            },
        },
    },
    {
        name: 'Yellow/Yellow 3',
        key: 'adf062c8fe17f2d56d430c4e6476ecff556f4752',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#fce591',
                rgb: {
                    r: 0.9882352948188782,
                    g: 0.8980392217636108,
                    b: 0.5686274766921997,
                },
            },
        },
    },
    {
        name: 'Yellow/Yellow 4',
        key: '2f9ea0b27f59778db5b3abaa8d4357faf1c8f48c',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#00d23d',
                rgb: {
                    r: 1,
                    g: 0.8235294222831726,
                    b: 0.239215686917305,
                },
            },
        },
    },
    {
        name: 'Yellow/Yellow 5',
        key: 'eb1e3a042ee5d8b82387404663966e5f9d08cf3c',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#f0b400',
                rgb: {
                    r: 0.9411764740943909,
                    g: 0.7058823704719543,
                    b: 0,
                },
            },
        },
    },
    {
        name: 'Yellow/Yellow 6',
        key: '2b3db4149d5459afee3316f7faed2fb03342a21a',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#aa6701',
                rgb: {
                    r: 0.6666666865348816,
                    g: 0.40392157435417175,
                    b: 0.003921568859368563,
                },
            },
        },
    },
    {
        name: 'Yellow/Yellow 7',
        key: '216752b52cd243d7cc718267aafcdf2a2081c830',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#864700',
                rgb: {
                    r: 0.5254902243614197,
                    g: 0.27843138575553894,
                    b: 0,
                },
            },
        },
    },
    {
        name: 'Yellow/Yellow 8',
        key: '0313f7889a97d8ea819af7835d38e426090acda9',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#6c3401',
                rgb: {
                    r: 0.42352941632270813,
                    g: 0.20392157137393951,
                    b: 0.003921568859368563,
                },
            },
        },
    },
    {
        name: 'Yellow/Yellow 9',
        key: '0ac715e4ca6ba525cc0d0e6ea97f9fb9b3b164f6',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#461e02',
                rgb: {
                    r: 0.27450981736183167,
                    g: 0.11764705926179886,
                    b: 0.007843137718737125,
                },
            },
        },
    },
    {
        name: 'Yellow/Yellow 10',
        key: '6be7e8070eb6545812f8c6b02f80529a47ca843b',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#261205',
                rgb: {
                    r: 0.14901961386203766,
                    g: 0.07058823853731155,
                    b: 0.019607843831181526,
                },
            },
        },
    },
    {
        name: 'Orange/Orange 1',
        key: '38c85c083760f912390291ec334a5f8e68bf0cdb',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#fef5e9',
                rgb: {
                    r: 0.9960784316062927,
                    g: 0.9607843160629272,
                    b: 0.9137254953384399,
                },
            },
        },
    },
    {
        name: 'Orange/Orange 2',
        key: 'd102496b813ea778d53411f547c8d9fa3f471241',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#fde7c9',
                rgb: {
                    r: 0.9921568632125854,
                    g: 0.9058823585510254,
                    b: 0.7882353067398071,
                },
            },
        },
    },
    {
        name: 'Orange/Orange 3',
        key: '74333bc192b3180d10e07369e1e7c4e6d13bcc3e',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#fcca8d',
                rgb: {
                    r: 0.9882352948188782,
                    g: 0.7921568751335144,
                    b: 0.5529412031173706,
                },
            },
        },
    },
    {
        name: 'Orange/Orange 4',
        key: '7ba53ba1a41df84bc877694229db427a2bf65c36',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#faa44a',
                rgb: {
                    r: 0.9803921580314636,
                    g: 0.6431372761726379,
                    b: 0.29019609093666077,
                },
            },
        },
    },
    {
        name: 'Orange/Orange 5',
        key: '84b6b043f519774501729556e0cb04ebe435814f',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#f07a0e',
                rgb: {
                    r: 0.9411764740943909,
                    g: 0.47843137383461,
                    b: 0.054901961237192154,
                },
            },
        },
    },
    {
        name: 'Orange/Orange 6',
        key: '03c8594e31439e63ec6861b83e08b8ba9777db71',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#c25705',
                rgb: {
                    r: 0.7607843279838562,
                    g: 0.34117648005485535,
                    b: 0.019607843831181526,
                },
            },
        },
    },
    {
        name: 'Orange/Orange 7',
        key: '1acaa03892a52b5ea7d01ee4ae1a6e05bee0856f',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#973a08',
                rgb: {
                    r: 0.5921568870544434,
                    g: 0.22745098173618317,
                    b: 0.0313725508749485,
                },
            },
        },
    },
    {
        name: 'Orange/Orange 8',
        key: '31ea2c58a96a82284d3b1576d71b2459faab4750',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#7c2707',
                rgb: {
                    r: 0.48627451062202454,
                    g: 0.15294118225574493,
                    b: 0.027450980618596077,
                },
            },
        },
    },
    {
        name: 'Orange/Orange 9',
        key: 'f69608f1a16a93e068b3a7a7e4e357c4ec2f095e',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#4d1804',
                rgb: {
                    r: 0.3019607961177826,
                    g: 0.0941176488995552,
                    b: 0.01568627543747425,
                },
            },
        },
    },
    {
        name: 'Orange/Orange 10',
        key: '2b198d78c0c30c594261081d716a4eccf0f200a5',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#2d0d03',
                rgb: {
                    r: 0.1764705926179886,
                    g: 0.05098039284348488,
                    b: 0.0117647061124444,
                },
            },
        },
    },
    {
        name: 'Red/Red 1',
        key: '3afe02ea7a11b9bf22b5bf59964ecf507dfd13f6',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#fdf4f4',
                rgb: {
                    r: 0.9921568632125854,
                    g: 0.95686274766922,
                    b: 0.95686274766922,
                },
            },
        },
    },
    {
        name: 'Red/Red 2',
        key: 'cccda026b8aacd020f4d9b22235c18c61a1b0fd4',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#fee5e5',
                rgb: {
                    r: 0.9960784316062927,
                    g: 0.8980392217636108,
                    b: 0.8980392217636108,
                },
            },
        },
    },
    {
        name: 'Red/Red 3',
        key: '6d800a7819d7819ff0aa18834c53c22ef0fbe118',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#fcbdba',
                rgb: {
                    r: 0.9882352948188782,
                    g: 0.7411764860153198,
                    b: 0.729411780834198,
                },
            },
        },
    },
    {
        name: 'Red/Red 4',
        key: '9c962c5ab22dc6f43ee01fa596208fc6f772223c',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#f98982',
                rgb: {
                    r: 0.9764705896377563,
                    g: 0.5372549295425415,
                    b: 0.5098039507865906,
                },
            },
        },
    },
    {
        name: 'Red/Red 5',
        key: '90c4c6a1ded06965d0dba3534f82edb1b9570b1a',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#f5554b',
                rgb: {
                    r: 0.9607843160629272,
                    g: 0.3333333432674408,
                    b: 0.29411765933036804,
                },
            },
        },
    },
    {
        name: 'Red/Red 6',
        key: '03b2309cdd75da073fdb77477db9ce4e957eda5f',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#df2d24',
                rgb: {
                    r: 0.8745098114013672,
                    g: 0.1764705926179886,
                    b: 0.1411764770746231,
                },
            },
        },
    },
    {
        name: 'Red/Red 7',
        key: '14b388b3ec907b4aaff7cfe2a23d1fa81dffc07f',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#b00f0a',
                rgb: {
                    r: 0.6901960968971252,
                    g: 0.05882352963089943,
                    b: 0.03921568766236305,
                },
            },
        },
    },
    {
        name: 'Red/Red 8',
        key: 'b5b25376d566bc177414c76588634bbc349fd44b',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#8e0000',
                rgb: {
                    r: 0.5568627715110779,
                    g: 0,
                    b: 0,
                },
            },
        },
    },
    {
        name: 'Red/Red 9',
        key: 'cab6ae8c5b6634d662f8b1b13151b4ee7245a159',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#5a0100',
                rgb: {
                    r: 0.3529411852359772,
                    g: 0.003921568859368563,
                    b: 0,
                },
            },
        },
    },
    {
        name: 'Red/Red 10',
        key: '6551fcb76d0eede4075adc6ed4dc2881541177a2',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#380000',
                rgb: {
                    r: 0.21960784494876862,
                    g: 0,
                    b: 0,
                },
            },
        },
    },
    {
        name: 'Basics/White',
        key: '72c2ccbff140288907986dc6f0aacd111ed1a43a',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#ffffff',
                rgb: {
                    r: 1,
                    g: 1,
                    b: 1,
                },
            },
        },
    },
    {
        name: 'Basics/Black',
        key: '774f267303d7d908ef0cf8dee5b41cb940c6241e',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                hex: '#000000',
                rgb: {
                    r: 0,
                    g: 0,
                    b: 0,
                },
            },
        },
    },
    {
        name: '_Roles/Background/Background Light Transparent',
        key: 'ce9c09a8a9445a076e56c39ab02fa4063d231053',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 0.20000000298023224,
            blendMode: 'NORMAL',
            color: {
                hex: '#ffffff',
                rgb: {
                    r: 1,
                    g: 1,
                    b: 1,
                },
            },
        },
    },
    {
        name: '_Roles/Background/Background Dark Transparent',
        key: 'a47edce2a78d67ac531a36e865d140c419a747d5',
        description: '',
        color: {
            type: 'SOLID',
            visible: true,
            opacity: 0.07999999821186066,
            blendMode: 'NORMAL',
            color: {
                hex: '#000000',
                rgb: {
                    r: 0,
                    g: 0,
                    b: 0,
                },
            },
        },
    },
];

/* harmony default export */ __webpack_exports__["default"] = (oneCorePaintStyles);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQtcmFuZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL29uZUNvcmVQYWludFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRztBQUNsRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsNkJBQTZCO0FBQzdCOztBQUVBLE1BQU0sSUFBa0U7QUFDeEUsdUJBQXVCLG1CQUFPLENBQUMsZUFBUTtBQUN2QztBQUNBLEdBQUcsTUFBTSxFQUVOOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNuSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUMrQjtBQUMwQjtBQUN6RCx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQSw4QkFBOEIsOENBQThDO0FBQzVFO0FBQ0E7QUFDQSw4QkFBOEIsdURBQXVEO0FBQ3JGO0FBQ0E7QUFDQSw4QkFBOEIseURBQXlEO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzREFBc0Q7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3Q0FBd0M7QUFDdkUsK0JBQStCLG9DQUFvQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDRGQUE0RjtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsMEJBQTBCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBbUQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxlQUFlO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRDQUE0QztBQUN0RTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrREFBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFdBQVcsOERBQWtCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXLDhEQUFrQjtBQUM3QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsUUFBUSw4REFBa0I7QUFDMUI7QUFDQSw4REFBOEQsV0FBVyx3QkFBd0I7QUFDakc7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0EsUUFBUSw4REFBa0I7QUFDMUI7QUFDQTtBQUNBLCtFQUErRSxXQUFXLHdCQUF3QjtBQUNsSDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLHFDQUFxQyxpRkFBaUY7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMkNBQTJDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdEQUF3RDtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3RYRDtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVlLGlGOzs7Ozs7Ozs7OztBQ3R6RGYsZSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGx1Z2luL2NvbnRyb2xsZXIudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuKGZ1bmN0aW9uKCl7XG5cbiAgdmFyXG4gICAgYnVmLFxuICAgIGJ1ZklkeCA9IDAsXG4gICAgaGV4Qnl0ZXMgPSBbXSxcbiAgICBpXG4gIDtcblxuICAvLyBQcmUtY2FsY3VsYXRlIHRvU3RyaW5nKDE2KSBmb3Igc3BlZWRcbiAgZm9yIChpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgaGV4Qnl0ZXNbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xuICB9XG5cbiAgLy8gQnVmZmVyIHJhbmRvbSBudW1iZXJzIGZvciBzcGVlZFxuICAvLyBSZWR1Y2UgbWVtb3J5IHVzYWdlIGJ5IGRlY3JlYXNpbmcgdGhpcyBudW1iZXIgKG1pbiAxNilcbiAgLy8gb3IgaW1wcm92ZSBzcGVlZCBieSBpbmNyZWFzaW5nIHRoaXMgbnVtYmVyICh0cnkgMTYzODQpXG4gIHV1aWQuQlVGRkVSX1NJWkUgPSA0MDk2O1xuXG4gIC8vIEJpbmFyeSB1dWlkc1xuICB1dWlkLmJpbiA9IHV1aWRCaW47XG5cbiAgLy8gQ2xlYXIgYnVmZmVyXG4gIHV1aWQuY2xlYXJCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICBidWYgPSBudWxsO1xuICAgIGJ1ZklkeCA9IDA7XG4gIH07XG5cbiAgLy8gVGVzdCBmb3IgdXVpZFxuICB1dWlkLnRlc3QgPSBmdW5jdGlvbih1dWlkKSB7XG4gICAgaWYgKHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIC9eWzAtOWEtZl17OH0tWzAtOWEtZl17NH0tNFswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfSQvaS50ZXN0KHV1aWQpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gTm9kZSAmIEJyb3dzZXIgc3VwcG9ydFxuICB2YXIgY3J5cHQwO1xuICBpZiAodHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjcnlwdDAgPSBjcnlwdG87XG4gIH0gZWxzZSBpZiggKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSAmJiAodHlwZW9mIHdpbmRvdy5tc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgY3J5cHQwID0gd2luZG93Lm1zQ3J5cHRvOyAvLyBJRTExXG4gIH1cblxuICBpZiAoKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSAmJiAodHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgY3J5cHQwID0gY3J5cHQwIHx8IHJlcXVpcmUoJ2NyeXB0bycpO1xuICAgIG1vZHVsZS5leHBvcnRzID0gdXVpZDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy51dWlkID0gdXVpZDtcbiAgfVxuXG4gIC8vIFVzZSBiZXN0IGF2YWlsYWJsZSBQUk5HXG4gIC8vIEFsc28gZXhwb3NlIHRoaXMgc28geW91IGNhbiBvdmVycmlkZSBpdC5cbiAgdXVpZC5yYW5kb21CeXRlcyA9IChmdW5jdGlvbigpe1xuICAgIGlmIChjcnlwdDApIHtcbiAgICAgIGlmIChjcnlwdDAucmFuZG9tQnl0ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyeXB0MC5yYW5kb21CeXRlcztcbiAgICAgIH1cbiAgICAgIGlmIChjcnlwdDAuZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24obikge1xuICAgICAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobik7XG4gICAgICAgICAgICBjcnlwdDAuZ2V0UmFuZG9tVmFsdWVzKGJ5dGVzKTtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGJ5dGVzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobik7XG4gICAgICAgICAgY3J5cHQwLmdldFJhbmRvbVZhbHVlcyhieXRlcyk7XG4gICAgICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24obikge1xuICAgICAgdmFyIGksIHIgPSBbXTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgci5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvLyBCdWZmZXIgc29tZSByYW5kb20gYnl0ZXMgZm9yIHNwZWVkXG4gIGZ1bmN0aW9uIHJhbmRvbUJ5dGVzQnVmZmVyZWQobikge1xuICAgIGlmICghYnVmIHx8ICgoYnVmSWR4ICsgbikgPiB1dWlkLkJVRkZFUl9TSVpFKSkge1xuICAgICAgYnVmSWR4ID0gMDtcbiAgICAgIGJ1ZiA9IHV1aWQucmFuZG9tQnl0ZXModXVpZC5CVUZGRVJfU0laRSk7XG4gICAgfVxuICAgIHJldHVybiBidWYuc2xpY2UoYnVmSWR4LCBidWZJZHggKz0gbik7XG4gIH1cblxuICAvLyB1dWlkLmJpblxuICBmdW5jdGlvbiB1dWlkQmluKCkge1xuICAgIHZhciBiID0gcmFuZG9tQnl0ZXNCdWZmZXJlZCgxNik7XG4gICAgYls2XSA9IChiWzZdICYgMHgwZikgfCAweDQwO1xuICAgIGJbOF0gPSAoYls4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIC8vIFN0cmluZyBVVUlEdjQgKFJhbmRvbSlcbiAgZnVuY3Rpb24gdXVpZCgpIHtcbiAgICB2YXIgYiA9IHV1aWRCaW4oKTtcbiAgICByZXR1cm4gaGV4Qnl0ZXNbYlswXV0gKyBoZXhCeXRlc1tiWzFdXSArXG4gICAgICBoZXhCeXRlc1tiWzJdXSArIGhleEJ5dGVzW2JbM11dICsgJy0nICtcbiAgICAgIGhleEJ5dGVzW2JbNF1dICsgaGV4Qnl0ZXNbYls1XV0gKyAnLScgK1xuICAgICAgaGV4Qnl0ZXNbYls2XV0gKyBoZXhCeXRlc1tiWzddXSArICctJyArXG4gICAgICBoZXhCeXRlc1tiWzhdXSArIGhleEJ5dGVzW2JbOV1dICsgJy0nICtcbiAgICAgIGhleEJ5dGVzW2JbMTBdXSArIGhleEJ5dGVzW2JbMTFdXSArXG4gICAgICBoZXhCeXRlc1tiWzEyXV0gKyBoZXhCeXRlc1tiWzEzXV0gK1xuICAgICAgaGV4Qnl0ZXNbYlsxNF1dICsgaGV4Qnl0ZXNbYlsxNV1dXG4gICAgO1xuICB9XG5cbn0pKCk7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQtcmFuZG9tJztcbmltcG9ydCBvbmVDb3JlUGFpbnRTdHlsZXMgZnJvbSAnLi9vbmVDb3JlUGFpbnRTdHlsZXMuanMnO1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAzMDAsIGhlaWdodDogNDQ4IH0pO1xuc3dpdGNoIChmaWdtYS5jb21tYW5kKSB7XG4gICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcImZpZ21hLWNvbW1hbmRcIiwgbWVzc2FnZTogXCJvcGVuLWhvbWVcIiB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInRhYmxlXCI6XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJmaWdtYS1jb21tYW5kXCIsIG1lc3NhZ2U6IFwib3Blbi10YWJsZS1jcmVhdG9yXCIgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsYW5ndWFnZVwiOlxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiZmlnbWEtY29tbWFuZFwiLCBtZXNzYWdlOiBcIm9wZW4tbGFuZ3VhZ2UtbGludGVyXCIgfSk7XG4gICAgICAgIGZpZ21hLnVpLnJlc2l6ZSg0NzUsIDUwMCk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjb2xvclwiOlxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiZmlnbWEtY29tbWFuZFwiLCBtZXNzYWdlOiBcIm9wZW4tY29sb3ItbGludGVyXCIgfSk7XG4gICAgICAgIGZpZ21hLnVpLnJlc2l6ZSg0NzUsIDUwMCk7XG4gICAgICAgIGJyZWFrO1xufVxuY29uc3QgY3JlYXRlVGFibGUgPSAobXNnKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB0YWJsZUZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBsZXQgaGVhZGVyQ2VsbCA9IHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoXCJjZThmYThlOGNhYjA3YTE5ZjgzZjQxODFhYzhjYmU3NjA5M2M2YmMzXCIpO1xuICAgIGxldCB0YWJsZVJvdyA9IGZpZ21hLmNyZWF0ZUNvbXBvbmVudCgpO1xuICAgIGxldCBjZWxsRmlsbENvbnRhaW5lclkgPSBmYWxzZTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgdGFibGVGcmFtZS5uYW1lID0gXCJUYWJsZVwiO1xuICAgIHRhYmxlRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgdGFibGVGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIHRhYmxlRnJhbWUueCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuICAgIHRhYmxlRnJhbWUueSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgIG1zZy5jb2x1bW5Db25maWd1cmF0aW9uLmZpbmQoKGNvbCkgPT4gKGNlbGxGaWxsQ29udGFpbmVyWSA9IGNvbC5tdWx0aVZhbHVlKSk7XG4gICAgWy4uLkFycmF5KG1zZy5yb3dzICsgMSkua2V5cygpXS5tYXAoKHJvd0luZGV4KSA9PiB7XG4gICAgICAgIHRhYmxlUm93LmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgdGFibGVSb3cuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIHRhYmxlUm93Lm5hbWUgPSBcIlJvd1wiO1xuICAgICAgICBtc2cuY29sdW1uQ29uZmlndXJhdGlvbi5tYXAoKGNvbCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgeyBuYW1lOiBjb2xOYW1lLCBhbGlnbm1lbnQ6IGNvbEFsaWdubWVudCwgY2VsbFR5cGU6IGNvbENlbGxUeXBlLCBtdWx0aVZhbHVlOiBjb2xNdWx0aVZhbHVlLCB9ID0gY29sO1xuICAgICAgICAgICAgY29sQWxpZ25tZW50ID1cbiAgICAgICAgICAgICAgICBjb2xBbGlnbm1lbnRbMF0udG9VcHBlckNhc2UoKSArIGNvbEFsaWdubWVudC5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBjb2xDZWxsVHlwZSA9IGNvbENlbGxUeXBlWzBdLnRvVXBwZXJDYXNlKCkgKyBjb2xDZWxsVHlwZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBjb2xNdWx0aVZhbHVlID0gY29sTXVsdGlWYWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgY29sTXVsdGlWYWx1ZSA9XG4gICAgICAgICAgICAgICAgY29sTXVsdGlWYWx1ZVswXS50b1VwcGVyQ2FzZSgpICsgY29sTXVsdGlWYWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhpc0hlYWRlckNlbGwgPSBoZWFkZXJDZWxsLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHROb2RlT2ZIZWFkZXJDZWxsID0gdGhpc0hlYWRlckNlbGwuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwubmFtZSA9IGNvbE5hbWUubGVuZ3RoID4gMCA/IGNvbE5hbWUgOiBcIkhlYWRlclwiO1xuICAgICAgICAgICAgICAgIHRleHROb2RlT2ZIZWFkZXJDZWxsLmRlbGV0ZUNoYXJhY3RlcnMoMCwgdGV4dE5vZGVPZkhlYWRlckNlbGwuY2hhcmFjdGVycy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRleHROb2RlT2ZIZWFkZXJDZWxsLmluc2VydENoYXJhY3RlcnMoMCwgY29sTmFtZS5sZW5ndGggPiAwID8gY29sTmFtZSA6IFwiSGVhZGVyXCIpO1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLnNldFByb3BlcnRpZXMoeyBBbGlnbm1lbnQ6IGNvbEFsaWdubWVudCB9KTtcbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5yZXNpemUoY29sTXVsdGlWYWx1ZSA9PT0gXCJUcnVlXCIgPyAxMjAgOiB0aGlzSGVhZGVyQ2VsbC53aWR0aCwgdGhpc0hlYWRlckNlbGwuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5jaGlsZHJlblswXS5sYXlvdXRHcm93ID0gY2VsbEZpbGxDb250YWluZXJZID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gY2VsbEZpbGxDb250YWluZXJZXG4gICAgICAgICAgICAgICAgICAgID8gXCJGSVhFRFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJBVVRPXCI7XG4gICAgICAgICAgICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGhpc0hlYWRlckNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGFibGVGcmFtZS5hcHBlbmRDaGlsZCh0YWJsZVJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGhpc1RhYmxlUm93ID0gdGFibGVSb3cuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgIHRoaXNUYWJsZVJvdy5jaGlsZHJlbi5tYXAoKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHsgY2VsbFR5cGU6IGNvbENlbGxUeXBlLCBtdWx0aVZhbHVlOiBjb2xNdWx0aVZhbHVlIH0gPSBtc2cuY29sdW1uQ29uZmlndXJhdGlvbltpbmRleF07XG4gICAgICAgICAgICAgICAgY29sQ2VsbFR5cGUgPSBjb2xDZWxsVHlwZVswXS50b1VwcGVyQ2FzZSgpICsgY29sQ2VsbFR5cGUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgICAgIGNvbE11bHRpVmFsdWUgPSBjb2xNdWx0aVZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29sTXVsdGlWYWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgIGNvbE11bHRpVmFsdWVbMF0udG9VcHBlckNhc2UoKSArIGNvbE11bHRpVmFsdWUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgICAgIGNlbGwubmFtZSA9PT0gXCJIZWFkZXJcIiA/IChjZWxsLm5hbWUgPSBcIkNlbGxcIikgOiBudWxsO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0UHJvcGVydGllcyh7IFR5cGU6IFwiQm9keVwiIH0pO1xuICAgICAgICAgICAgICAgIGNlbGwuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgICAgICAgICAgIFR5cGU6IGNvbENlbGxUeXBlLFxuICAgICAgICAgICAgICAgICAgICBcIk11bHRpLXZhbHVlXCI6IGNvbE11bHRpVmFsdWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2VsbC5jaGlsZHJlblswXS5sYXlvdXRHcm93ID0gY2VsbEZpbGxDb250YWluZXJZID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgY2VsbC5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBjZWxsRmlsbENvbnRhaW5lclkgPyBcIkZJWEVEXCIgOiBcIkFVVE9cIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFibGVGcmFtZS5hcHBlbmRDaGlsZCh0aGlzVGFibGVSb3cpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbGV0IHRhYmxlRGF0YSA9IHtcbiAgICAgICAgdXNlckRhdGE6IGZpZ21hLmN1cnJlbnRVc2VyLFxuICAgICAgICBjb2x1bW5Db25maWd1cmF0aW9uOiBtc2cuY29sdW1uQ29uZmlndXJhdGlvbixcbiAgICAgICAgY29sdW1uQ291bnQ6IG1zZy5jb2x1bW5Db25maWd1cmF0aW9uLmxlbmd0aCxcbiAgICAgICAgcm93Q291bnQ6IG1zZy5yb3dzXG4gICAgfTtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwidGFibGUtY3JlYXRlZFwiLCBtZXNzYWdlOiB0YWJsZURhdGEgfSk7XG4gICAgZmlnbWEubm90aWZ5KFwiVGFibGUgY3JlYXRlZCDinIVcIik7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn0pO1xuY29uc3QgcHVzaFRleHRMYXllclRvQXJyYXkgPSAobGF5ZXIsIGFycmF5KSA9PiB7XG4gICAgYXJyYXkucHVzaCh7XG4gICAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgICAgbmFtZTogbGF5ZXIubmFtZSxcbiAgICAgICAgdmlzaWJsZTogbGF5ZXIudmlzaWJsZSxcbiAgICAgICAgeDogbGF5ZXIueCxcbiAgICAgICAgeTogbGF5ZXIueSxcbiAgICAgICAgdHlwZTogbGF5ZXIudHlwZSxcbiAgICAgICAgY2hhcmFjdGVyczogbGF5ZXIgPT09IG51bGwgfHwgbGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheWVyLmNoYXJhY3RlcnMsXG4gICAgICAgIGNoaWxkcmVuOiBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuY2hpbGRyZW4sXG4gICAgfSk7XG59O1xuY29uc3Qgc2VuZEN1cnJlbnRUZXh0U2VsZWN0aW9uID0gKCkgPT4ge1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgbGV0IHRleHRMYXllcnMgPSBbXTtcbiAgICBzZWxlY3Rpb24uZm9yRWFjaCgoc2VsZWN0ZWRMYXllcikgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghISgoX2EgPSBzZWxlY3RlZExheWVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRleHRMYXllcnMgPSBzZWxlY3RlZExheWVyLmZpbmRBbGwobiA9PiBuLnR5cGUgPT09ICdURVhUJyk7XG4gICAgICAgICAgICBzZWxlY3RlZFRleHRMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcbiAgICAgICAgICAgICAgICBwdXNoVGV4dExheWVyVG9BcnJheShsYXllciwgdGV4dExheWVycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxlY3RlZExheWVyLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgICAgICAgcHVzaFRleHRMYXllclRvQXJyYXkoc2VsZWN0ZWRMYXllciwgdGV4dExheWVycyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInNlbGVjdGlvbi1jaGFuZ2VcIixcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgdGV4dExheWVycyxcbiAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXI6IHNlbGVjdGlvblxuICAgICAgICB9XG4gICAgfSk7XG59O1xuY29uc3QgcmdiVG9IZXggPSAociwgZywgYikgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFRvSGV4ID0gKGMpID0+IHtcbiAgICAgICAgYyA9IE1hdGgucm91bmQoYyAqIDI1NSk7XG4gICAgICAgIGxldCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyAnMCcgKyBoZXggOiBoZXg7XG4gICAgfTtcbiAgICBjb25zdCBjb21iaW5lQ29tcG9uZW50cyA9IChyLCBnLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiAnIycgKyBjb21wb25lbnRUb0hleChyKSArIGNvbXBvbmVudFRvSGV4KGcpICsgY29tcG9uZW50VG9IZXgoYik7XG4gICAgfTtcbiAgICByZXR1cm4gY29tYmluZUNvbXBvbmVudHMociwgZywgYik7XG59O1xuY29uc3QgcHVzaENvbG9yVG9BcnJheSA9IChsYXllciwgY29sb3JUeXBlLCBhcnJheSkgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3Qgc3R5bGVJZFR5cGUgPSBjb2xvclR5cGUgPT09ICdmaWxscycgPyAnZmlsbFN0eWxlSWQnIDogJ3N0cm9rZVN0eWxlSWQnO1xuICAgIGNvbnN0IGlzU29saWRDb2xvciA9ICgoX2EgPSBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuZmlsbHNbMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50eXBlKSA9PT0gJ1NPTElEJztcbiAgICBjb25zdCBmaWxsSXNJbWFnZSA9ICgoX2IgPSBsYXllciA9PT0gbnVsbCB8fCBsYXllciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGF5ZXIuZmlsbHNbMF0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50eXBlKSA9PT0gJ0lNQUdFJztcbiAgICBjb25zdCBjb2xvckluSGV4ID0gKGNvbG9ySW5SR0IpID0+IHtcbiAgICAgICAgcmV0dXJuIHJnYlRvSGV4KGNvbG9ySW5SR0IuciwgY29sb3JJblJHQi5nLCBjb2xvckluUkdCLmIpO1xuICAgIH07XG4gICAgaWYgKCFmaWxsSXNJbWFnZSAmJiBsYXllci52aXNpYmxlKSB7XG4gICAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICAgICAgY29sb3JJZDogdXVpZCgpLFxuICAgICAgICAgICAgbGF5ZXJJZDogbGF5ZXIubGF5ZXJJZCxcbiAgICAgICAgICAgIGxheWVyTmFtZTogbGF5ZXIubmFtZSxcbiAgICAgICAgICAgIGxheWVyVHlwZTogbGF5ZXIudHlwZSxcbiAgICAgICAgICAgIGNvbG9yOiBsYXllcltjb2xvclR5cGVdLFxuICAgICAgICAgICAgY29sb3JTdHlsZUlkOiBsYXllcltzdHlsZUlkVHlwZV0sXG4gICAgICAgICAgICBoYXNDb2xvclN0eWxlOiBpc1NvbGlkQ29sb3IgPyBsYXllcltzdHlsZUlkVHlwZV0ubGVuZ3RoID4gMCA6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJsZTogbGF5ZXIudmlzaWJsZSxcbiAgICAgICAgICAgIGNvbG9yVHlwZTogY29sb3JUeXBlLnNsaWNlKDAsIC0xKSxcbiAgICAgICAgICAgIGNvbG9ySW5IZXg6IGNvbG9ySW5IZXgobGF5ZXJbY29sb3JUeXBlXVswXS5jb2xvciksXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBnZXRSYXdMYXllcnNXaXRoQ29sb3IgPSAoKSA9PiB7XG4gICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBjb25zdCBvdXRwdXQgPSBzZWxlY3Rpb24ubWFwKChzZWxlY3RlZExheWVyKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wT3V0cHV0ID0gc2VsZWN0ZWRMYXllci5maW5kQWxsKChuKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY29uc3QgYWNjZXB0YWJsZU5vZGV0eXBlcyA9IFtcbiAgICAgICAgICAgICAgICAnRUxMSVBTRScsXG4gICAgICAgICAgICAgICAgJ0ZSQU1FJyxcbiAgICAgICAgICAgICAgICAnR1JPVVAnLFxuICAgICAgICAgICAgICAgICdDT01QT05FTlQnLFxuICAgICAgICAgICAgICAgICdJTlNUQU5DRScsXG4gICAgICAgICAgICAgICAgJ0xJTkUnLFxuICAgICAgICAgICAgICAgICdQT0xZR09OJyxcbiAgICAgICAgICAgICAgICAnUkVDVEFOR0xFJyxcbiAgICAgICAgICAgICAgICAnU0hBUEVfV0lUSF9URVhUJyxcbiAgICAgICAgICAgICAgICAnU1RBUicsXG4gICAgICAgICAgICAgICAgJ1RFWFQnLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVJc1ZhbGlkTm9kZVR5cGUgPSBhY2NlcHRhYmxlTm9kZXR5cGVzLnNvbWUoKG5vZGVUeXBlKSA9PiBuLnR5cGUgPT09IG5vZGVUeXBlKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlSXNWYWxpZE5vZGVUeXBlICYmICgoKF9hID0gbiA9PT0gbnVsbCB8fCBuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuLmZpbGxzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSA+IDAgfHwgKChfYiA9IG4gPT09IG51bGwgfHwgbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbi5zdHJva2VzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubGVuZ3RoKSA+IDApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFsuLi50ZW1wT3V0cHV0XTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0LmZsYXQoKTtcbn07XG5jb25zdCBzZW5kQ3VycmVudFNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiAnc2VsZWN0aW9uLWNoYW5nZScsXG4gICAgICAgIG1lc3NhZ2U6IGdldFJhd0xheWVyc1dpdGhDb2xvcigpLFxuICAgIH0pO1xufTtcbmNvbnN0IHJhd0xheWVyc1dpdGhDb2xvciA9IGdldFJhd0xheWVyc1dpdGhDb2xvcigpO1xuY29uc3QgbGF5ZXJzV2l0aENvbG9yID0gcmF3TGF5ZXJzV2l0aENvbG9yLm1hcCgobGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaGFzRmlsbCA9IHJhd0xheWVyc1dpdGhDb2xvcltpbmRleF0uZmlsbHMubGVuZ3RoID4gMDtcbiAgICBjb25zdCBoYXNTdHJva2UgPSByYXdMYXllcnNXaXRoQ29sb3JbaW5kZXhdLnN0cm9rZXMubGVuZ3RoID4gMDtcbiAgICBjb25zdCBoYXNGaWxsQW5kU3Ryb2tlID0gaGFzRmlsbCAmJiBoYXNTdHJva2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGF5ZXJJZDogcmF3TGF5ZXJzV2l0aENvbG9yW2luZGV4XS5pZCxcbiAgICAgICAgbmFtZTogcmF3TGF5ZXJzV2l0aENvbG9yW2luZGV4XS5uYW1lLFxuICAgICAgICBmaWxsczogcmF3TGF5ZXJzV2l0aENvbG9yW2luZGV4XS5maWxscyxcbiAgICAgICAgc3Ryb2tlczogcmF3TGF5ZXJzV2l0aENvbG9yW2luZGV4XS5zdHJva2VzLFxuICAgICAgICBmaWxsU3R5bGVJZDogcmF3TGF5ZXJzV2l0aENvbG9yW2luZGV4XS5maWxsU3R5bGVJZCxcbiAgICAgICAgc3Ryb2tlU3R5bGVJZDogcmF3TGF5ZXJzV2l0aENvbG9yW2luZGV4XS5zdHJva2VTdHlsZUlkLFxuICAgICAgICB2aXNpYmxlOiByYXdMYXllcnNXaXRoQ29sb3JbaW5kZXhdLnZpc2libGUsXG4gICAgICAgIHR5cGU6IHJhd0xheWVyc1dpdGhDb2xvcltpbmRleF0udHlwZSxcbiAgICAgICAgaGFzRmlsbDogaGFzRmlsbCxcbiAgICAgICAgaGFzU3Ryb2tlOiBoYXNTdHJva2UsXG4gICAgICAgIGhhc0ZpbGxBbmRTdHJva2U6IGhhc0ZpbGxBbmRTdHJva2UsXG4gICAgfTtcbn0pO1xuY29uc3QgYWxsSW5zdGFuY2VzT2ZDb2xvciA9IGxheWVyc1dpdGhDb2xvclxuICAgIC5tYXAoKGxheWVyKSA9PiB7XG4gICAgbGV0IHRlbXBDb2xvcnMgPSBbXTtcbiAgICBpZiAobGF5ZXIuaGFzRmlsbEFuZFN0cm9rZSkge1xuICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyLCAnZmlsbHMnLCB0ZW1wQ29sb3JzKTtcbiAgICAgICAgcHVzaENvbG9yVG9BcnJheShsYXllciwgJ3N0cm9rZXMnLCB0ZW1wQ29sb3JzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobGF5ZXIuaGFzRmlsbCkge1xuICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyLCAnZmlsbHMnLCB0ZW1wQ29sb3JzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobGF5ZXIuaGFzU3Ryb2tlKSB7XG4gICAgICAgIHB1c2hDb2xvclRvQXJyYXkobGF5ZXIsICdzdHJva2VzJywgdGVtcENvbG9ycyk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wQ29sb3JzO1xufSlcbiAgICAuZmxhdCgpO1xuY29uc3QgZG9lc0NvbG9yTWF0Y2hBbnlPbmVDb3JlU3R5bGUgPSAoY29sb3JJbkhleCkgPT4ge1xuICAgIHJldHVybiBvbmVDb3JlUGFpbnRTdHlsZXMuc29tZSgoc3R5bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbG9ySW5IZXggPT09IHN0eWxlLmNvbG9yLmNvbG9yLmhleDtcbiAgICB9LCBmYWxzZSk7XG59O1xuY29uc3QgZG9lc0tleU1hdGNoQW55T25lQ29yZUNvbG9yU3R5bGVLZXkgPSAoa2V5KSA9PiB7XG4gICAgcmV0dXJuIG9uZUNvcmVQYWludFN0eWxlcy5zb21lKChzdHlsZSkgPT4ge1xuICAgICAgICByZXR1cm4ga2V5LmluY2x1ZGVzKHN0eWxlLmtleSk7XG4gICAgfSwgZmFsc2UpO1xufTtcbmNvbnN0IGNvbG9yc1dpdGhDb2xvclN0eWxlID0gYWxsSW5zdGFuY2VzT2ZDb2xvci5maWx0ZXIoKGNvbG9yKSA9PiB7XG4gICAgcmV0dXJuIGNvbG9yLmhhc0NvbG9yU3R5bGU7XG59KTtcbmNvbnN0IGNvbG9yc1VzaW5nT25lQ29yZVN0eWxlID0gKCgpID0+IHtcbiAgICBsZXQgY29sb3JzID0gY29sb3JzV2l0aENvbG9yU3R5bGUuZmlsdGVyKChjb2xvcikgPT4ge1xuICAgICAgICBjb25zdCB7IHIsIGcsIGIgfSA9IGNvbG9yLmNvbG9yWzBdLmNvbG9yO1xuICAgICAgICBjb25zdCBjb2xvckluSGV4ID0gcmdiVG9IZXgociwgZywgYik7XG4gICAgICAgIHJldHVybiBkb2VzQ29sb3JNYXRjaEFueU9uZUNvcmVTdHlsZShjb2xvckluSGV4KSAmJiBkb2VzS2V5TWF0Y2hBbnlPbmVDb3JlQ29sb3JTdHlsZUtleShjb2xvci5jb2xvclN0eWxlSWQpO1xuICAgIH0pO1xuICAgIGNvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCkgPT4ge1xuICAgICAgICBvbmVDb3JlUGFpbnRTdHlsZXMubWFwKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbG9yLmNvbG9yU3R5bGVJZC5pbmNsdWRlcyhzdHlsZS5rZXkpKSB7XG4gICAgICAgICAgICAgICAgY29sb3JzW2luZGV4XSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29sb3IpLCB7IHN0eWxlTmFtZTogc3R5bGUubmFtZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbG9ycztcbn0pKCk7XG5jb25zdCBjb2xvcnNXaXRoU3R5bGVOb3RVc2luZ09uZUNvcmVTdHlsZSA9IGNvbG9yc1dpdGhDb2xvclN0eWxlLmZpbHRlcigoY29sb3IpID0+IHtcbiAgICBjb25zdCB7IHIsIGcsIGIgfSA9IGNvbG9yLmNvbG9yWzBdLmNvbG9yO1xuICAgIGNvbnN0IGNvbG9ySW5IZXggPSByZ2JUb0hleChyLCBnLCBiKTtcbn0pO1xuY29uc3QgY29sb3JzTm90VXNpbmdPbmVDb3JlQ29sb3JTdHlsZSA9IGFsbEluc3RhbmNlc09mQ29sb3IuZmlsdGVyKChjb2xvcikgPT4ge1xuICAgIHJldHVybiAhY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUuc29tZSgob25lQ29yZUNvbG9yKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2xvci5jb2xvcklkID09PSBvbmVDb3JlQ29sb3IuY29sb3JJZDtcbiAgICB9KTtcbn0pO1xuY29uc3QgYWRkT25lQ29yZVN0eWxlTmFtZVRvQ29sb3IgPSAoKSA9PiB7XG4gICAgY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUubWFwKChjb2xvciwgaW5kZXgpID0+IHtcbiAgICAgICAgb25lQ29yZVBhaW50U3R5bGVzLm1hcCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIGlmIChjb2xvci5jb2xvclN0eWxlSWQuaW5jbHVkZXMoc3R5bGUua2V5KSkge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGNvbG9yc1VzaW5nT25lQ29yZVN0eWxlW2luZGV4XSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29sb3IpLCB7IHN0eWxlTmFtZTogc3R5bGUubmFtZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuY29uc3Qgb25lQ29yZUNvbG9yU3R5bGVDb3ZlcmFnZSA9IGAkeygoY29sb3JzVXNpbmdPbmVDb3JlU3R5bGUubGVuZ3RoIC8gYWxsSW5zdGFuY2VzT2ZDb2xvci5sZW5ndGgpICogMTAwKS50b0ZpeGVkKDIpfSVgO1xuY29uc3QgYWxtb3N0QWxsQ29sb3JzID0gWy4uLmNvbG9yc1VzaW5nT25lQ29yZVN0eWxlLCAuLi5jb2xvcnNOb3RVc2luZ09uZUNvcmVDb2xvclN0eWxlXTtcbmNvbnN0IGlkc09mQWxsSW5zdGFuY2VzT2ZDb2xvciA9IGFsbEluc3RhbmNlc09mQ29sb3IubWFwKChjb2xvcikgPT4gY29sb3IuY29sb3JJZCk7XG5jb25zdCBpZHNPZkFsbW9zdEFsbENvbG9ycyA9IGFsbW9zdEFsbENvbG9ycy5tYXAoKGNvbG9yKSA9PiBjb2xvci5jb2xvcklkKTtcbmNvbnN0IGNvbG9yU3RhdHMgPSB7XG4gICAgYWxsSW5zdGFuY2VzT2ZDb2xvcjogYWxsSW5zdGFuY2VzT2ZDb2xvcixcbiAgICBjb2xvcnNXaXRoQ29sb3JTdHlsZTogY29sb3JzV2l0aENvbG9yU3R5bGUsXG4gICAgY29sb3JzVXNpbmdPbmVDb3JlU3R5bGU6IGNvbG9yc1VzaW5nT25lQ29yZVN0eWxlLFxuICAgIGNvbG9yc1dpdGhTdHlsZU5vdFVzaW5nT25lQ29yZVN0eWxlOiBjb2xvcnNXaXRoU3R5bGVOb3RVc2luZ09uZUNvcmVTdHlsZSxcbiAgICBjb2xvcnNOb3RVc2luZ09uZUNvcmVDb2xvclN0eWxlOiBjb2xvcnNOb3RVc2luZ09uZUNvcmVDb2xvclN0eWxlLFxuICAgIG9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2U6IG9uZUNvcmVDb2xvclN0eWxlQ292ZXJhZ2UsXG4gICAgYWxtb3N0QWxsQ29sb3JzOiBhbG1vc3RBbGxDb2xvcnMsXG4gICAgaWRzT2ZBbGxJbnN0YW5jZXNPZkNvbG9yOiBpZHNPZkFsbEluc3RhbmNlc09mQ29sb3IsXG4gICAgaWRzT2ZBbG1vc3RBbGxDb2xvcnM6IGlkc09mQWxtb3N0QWxsQ29sb3JzLFxufTtcbmNvbnN0IHNlbGVjdEFuZFpvb21Ub0xheWVyID0gKGxheWVySWQpID0+IHtcbiAgICBjb25zdCBsYXllciA9IGZpZ21hLmdldE5vZGVCeUlkKGxheWVySWQpO1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtsYXllcl07XG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtsYXllcl0pO1xufTtcbmNvbnNvbGUubG9nKGNvbG9yU3RhdHMpO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKG1zZy50eXBlID09PSBcIm5hdmlnYXRlLXRvLXRhYlwiKSB7XG4gICAgICAgIHN3aXRjaCAobXNnLnRhYkNsaWNrZWQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgICAgICBjYXNlIFwidGFibGUtY3JlYXRvclwiOlxuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSgzMDAsIDQ0OCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGFuZ3VhZ2UtbGludGVyXCI6XG4gICAgICAgICAgICAgICAgc2VuZEN1cnJlbnRUZXh0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKDQ3NSwgNTAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiY3JlYXRlLXRhYmxlXCIpIHtcbiAgICAgICAgY3JlYXRlVGFibGUobXNnKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAncmVxdWVzdC1zZWxlY3Rpb24nKSB7XG4gICAgICAgIHNlbmRDdXJyZW50VGV4dFNlbGVjdGlvbigpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAnY29sb3Itc3RhdHMnLFxuICAgICAgICAgICAgbWVzc2FnZTogY29sb3JTdGF0cyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3JlcXVlc3QtbG9jYWwtY3VzdG9tLWRpY3Rpb25hcnknKSB7XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJsYW5ndWFnZUxpbnRlckN1c3RvbURpY3Rpb25hcnlcIikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibG9jYWwtY3VzdG9tLWRpY3Rpb25hcnktcmV0cmlldmVkXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzdWx0ID8gcmVzdWx0IDogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnYWRkLXRvLWRpY3Rpb25hcnknKSB7XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJsYW5ndWFnZUxpbnRlckN1c3RvbURpY3Rpb25hcnlcIikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0N1c3RvbURpY3Rpb25hcnkgPSByZXN1bHQgPyByZXN1bHQgOiBbXTtcbiAgICAgICAgICAgIG5ld0N1c3RvbURpY3Rpb25hcnkucHVzaChtc2cud29yZFRvQWRkKTtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoXCJsYW5ndWFnZUxpbnRlckN1c3RvbURpY3Rpb25hcnlcIiwgbmV3Q3VzdG9tRGljdGlvbmFyeSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdnZXQtc2FtcGxlLXRleHQnKSB7XG4gICAgICAgIGNvbnN0IHNhbXBsZVRleHQgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzYW1wbGUtdGV4dFwiLCBtZXNzYWdlOiBzYW1wbGVUZXh0IH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdzYW1wbGUtdGV4dC1jaGFuZ2VkJykge1xuICAgICAgICBjb25zdCBhY3RpdmVUZXh0TGF5ZXIgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cuYWN0aXZlTm9kZUlkKTtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFthY3RpdmVUZXh0TGF5ZXJdKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAndXBkYXRlLXNvdXJjZS10ZXh0Jykge1xuICAgICAgICBjb25zdCBhY3RpdmVUZXh0TGF5ZXIgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cubGF5ZXJJZCk7XG4gICAgICAgIGxldCBmb250TmFtZSA9IGFjdGl2ZVRleHRMYXllci5mb250TmFtZTtcbiAgICAgICAgaWYgKGZvbnROYW1lID09PSBmaWdtYS5taXhlZCkge1xuICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwoYWN0aXZlVGV4dExheWVyLmdldFJhbmdlQWxsRm9udE5hbWVzKDAsIGFjdGl2ZVRleHRMYXllci5jaGFyYWN0ZXJzLmxlbmd0aCkubWFwKGZpZ21hLmxvYWRGb250QXN5bmMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoZm9udE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2ZVRleHRMYXllci5kZWxldGVDaGFyYWN0ZXJzKDAsIGFjdGl2ZVRleHRMYXllci5jaGFyYWN0ZXJzLmxlbmd0aCk7XG4gICAgICAgIGFjdGl2ZVRleHRMYXllci5pbnNlcnRDaGFyYWN0ZXJzKDAsIG1zZy51cGRhdGVkVGV4dCk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzb3VyY2UtdGV4dC11cGRhdGVkXCIsIG1lc3NhZ2U6IG1zZy51cGRhdGVkVGV4dCB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnc2VsZWN0LWxheWVyJykge1xuICAgICAgICBjb25zb2xlLmxvZyhtc2cudHlwZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1zZy5sYXllcklkKTtcbiAgICAgICAgc2VsZWN0QW5kWm9vbVRvTGF5ZXIobXNnLmxheWVySWQpO1xuICAgIH1cbn0pO1xuZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3Rpb25jaGFuZ2Ugd2FzIGZpcmVkJyk7XG4gICAgc2VuZEN1cnJlbnRUZXh0U2VsZWN0aW9uKCk7XG59KTtcbiIsImNvbnN0IG9uZUNvcmVQYWludFN0eWxlcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSb2xlcy9JbnRlcmFjdGl2ZS9JbnRlcmFjdGl2ZSBQcmltYXJ5JyxcbiAgICAgICAga2V5OiAnMThlY2NhOTIxNDg0MTIyNTIxZDlkMzFjMjFkMzIyMTdiNzZhODIxNCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMwMTdjODYnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjAwMzkyMTU2ODg1OTM2ODU2MyxcbiAgICAgICAgICAgICAgICAgICAgZzogMC40ODYyNzQ1MTA2MjIwMjQ1NCxcbiAgICAgICAgICAgICAgICAgICAgYjogMC41MjU0OTAyMjQzNjE0MTk3LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUm9sZXMvSW50ZXJhY3RpdmUvSW50ZXJhY3RpdmUgU2Vjb25kYXJ5JyxcbiAgICAgICAga2V5OiAnZGIwYTQ2MzE5MTE3NDE5NWEzNmNjNjIzZjFkMWMwNzQ5YTUwNzIzZCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNlN2U5ZTknLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjkwNTg4MjM1ODU1MTAyNTQsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuOTEzNzI1NDk1MzM4NDM5OSxcbiAgICAgICAgICAgICAgICAgICAgYjogMC45MTM3MjU0OTUzMzg0Mzk5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUm9sZXMvSW50ZXJhY3RpdmUvSW50ZXJhY3RpdmUgRGFuZ2VyJyxcbiAgICAgICAga2V5OiAnYjU2YzkxNDE5NDZhYWRiNTNiYjU4ZjdmMzc1ZmIzYmEyYjQ3N2QwMicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNkZjJkMjQnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjg3NDUwOTgxMTQwMTM2NzIsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuMTc2NDcwNTkyNjE3OTg4NixcbiAgICAgICAgICAgICAgICAgICAgYjogMC4xNDExNzY0NzcwNzQ2MjMxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUm9sZXMvVGV4dC9UZXh0IFByaW1hcnknLFxuICAgICAgICBrZXk6ICc3YTA5NzMzNTNhZTQ1OGE1YTI3OWJmZTRjMmRiNDljY2M1MjFhOWJiJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzI4MzYzNicsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuMTU2ODYyNzUwNjQ5NDUyMixcbiAgICAgICAgICAgICAgICAgICAgZzogMC4yMTE3NjQ3MDgxNjEzNTQwNixcbiAgICAgICAgICAgICAgICAgICAgYjogMC4yMTE3NjQ3MDgxNjEzNTQwNixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1JvbGVzL1RleHQvVGV4dCBTZWNvbmRhcnknLFxuICAgICAgICBrZXk6ICc2MTFhYzA2MTI4NDA3YmE3NjU1NzFjZGUzOTZjMzM3ZjQyZTUzMzNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzU1NjA2MCcsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuMzMzMzMzMzQzMjY3NDQwOCxcbiAgICAgICAgICAgICAgICAgICAgZzogMC4zNzY0NzA1OTU1OTgyMjA4LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjM3NjQ3MDU5NTU5ODIyMDgsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSb2xlcy9UZXh0L1RleHQgRW1waGFzaXMnLFxuICAgICAgICBrZXk6ICcwMmJjYTNkZjdhNmQ0ZmE4NjM4MTczYzQ3ODc4ZDcyNjQ0NDdiMDY1JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzE1MWQxZCcsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuMDgyMzUyOTQzNzE4NDMzMzgsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuMTEzNzI1NDkwODY4MDkxNTgsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuMTEzNzI1NDkwODY4MDkxNTgsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSb2xlcy9UZXh0L1RleHQgTXV0ZWQnLFxuICAgICAgICBrZXk6ICdhZDdhZDIxMzM2OWEzM2ZiNzY0MTA4ZGJhNTMwZGJhY2EzODJmN2UxJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzZlNzU3NScsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuNDMxMzcyNTUzMTEwMTIyNyxcbiAgICAgICAgICAgICAgICAgICAgZzogMC40NTg4MjM1MzE4NjYwNzM2LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjQ1ODgyMzUzMTg2NjA3MzYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSb2xlcy9UZXh0L1RleHQgRGlzYWJsZWQnLFxuICAgICAgICBrZXk6ICc3NTY4ZGU3YzdkYWVmMjRhZGRkYWNiZTcyMTA1ODFkZTAxN2E0ODhiJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzlmYTVhNScsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuNjIzNTI5NDM0MjA0MTAxNixcbiAgICAgICAgICAgICAgICAgICAgZzogMC42NDcwNTg4NDQ1NjYzNDUyLFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjY0NzA1ODg0NDU2NjM0NTIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSb2xlcy9CYWNrZ3JvdW5kL0JhY2tncm91bmQgQXBwJyxcbiAgICAgICAga2V5OiAnNGE5Yjg4YzcxZDhkYzI0ZjBiNjYwMjc4YzI1NjUzMjY5YzA3NjE1NicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNmM2Y0ZjQnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjk1Mjk0MTE3OTI3NTUxMjcsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuOTU2ODYyNzQ3NjY5MjIsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuOTU2ODYyNzQ3NjY5MjIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSb2xlcy9CYWNrZ3JvdW5kL0JhY2tncm91bmQgU3VyZmFjZScsXG4gICAgICAgIGtleTogJ2I1MjNhYTZmMzEwMzZmZjcyYzYwODc3Y2ZmZGFiOTlhMDQzZGQwMjInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMSxcbiAgICAgICAgICAgICAgICAgICAgZzogMSxcbiAgICAgICAgICAgICAgICAgICAgYjogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1JvbGVzL0JhY2tncm91bmQvQmFja2dyb3VuZCBTdXJmYWNlIEludmVydGVkJyxcbiAgICAgICAga2V5OiAnNjU3ODY5MGZiYzhhNjUzMjRmYWI5MTc5MGQ4Y2I1ODdkMGNlYjE5NycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMyODM2MzYnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjE1Njg2Mjc1MDY0OTQ1MjIsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuMjExNzY0NzA4MTYxMzU0MDYsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuMjExNzY0NzA4MTYxMzU0MDYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSb2xlcy9TdGF0ZXMvU3RhdGVzIFN1Y2Nlc3MnLFxuICAgICAgICBrZXk6ICdjMzI1ZjNkZTMxNzAyMTk0MjU2MjMxNWJjYzMwOTNkYjlhYWJlODJkJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzAyODY1YicsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuMDA3ODQzMTM3NzE4NzM3MTI1LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjUyNTQ5MDIyNDM2MTQxOTcsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuMzU2ODYyNzUzNjI5Njg0NDUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSb2xlcy9TdGF0ZXMvU3RhdGVzIFdhcm5pbmcnLFxuICAgICAgICBrZXk6ICcyMTUxODk4NDQ3NDgyMTg2YTIwYmE3ODc5MzRiNTMxODAxYjQ3OWM5JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnI2FhNjcwMScsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuNjY2NjY2Njg2NTM0ODgxNixcbiAgICAgICAgICAgICAgICAgICAgZzogMC40MDM5MjE1NzQzNTQxNzE3NSxcbiAgICAgICAgICAgICAgICAgICAgYjogMC4wMDM5MjE1Njg4NTkzNjg1NjMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSb2xlcy9TdGF0ZXMvU3RhdGVzIEVycm9yJyxcbiAgICAgICAga2V5OiAnOTMzNTlkZDEwZGY2MjFiOTJkNWMyNDczMDA0MmY3Yzc5ZDhhYzIyNCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNkZjJkMjQnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjg3NDUwOTgxMTQwMTM2NzIsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuMTc2NDcwNTkyNjE3OTg4NixcbiAgICAgICAgICAgICAgICAgICAgYjogMC4xNDExNzY0NzcwNzQ2MjMxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUm9sZXMvU3RhdGVzL1N0YXRlcyBEaXNhYmxlZCcsXG4gICAgICAgIGtleTogJ2EzYTM3N2E4NDU5MWU1MmQ3ZjkzNWU1MzIyZjk0MzJmYmE0MjJlNDcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjOWZhNWE1JyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC42MjM1Mjk0MzQyMDQxMDE2LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjY0NzA1ODg0NDU2NjM0NTIsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuNjQ3MDU4ODQ0NTY2MzQ1MixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1JvbGVzL0JvcmRlci9Cb3JkZXIgUmVndWxhcicsXG4gICAgICAgIGtleTogJzVkMzJlYTRjOGMzOGEzODlmMmE3MGY0MzgxYWE2ODliNmFhNTdlNGQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjZTdlOWU5JyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC45MDU4ODIzNTg1NTEwMjU0LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjkxMzcyNTQ5NTMzODQzOTksXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuOTEzNzI1NDk1MzM4NDM5OSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1JvbGVzL0JvcmRlci9Cb3JkZXIgU3VidGxlJyxcbiAgICAgICAga2V5OiAnNmUxOTUyODY5MjVkYTk2NDdjMzYyM2E2MzRhNmU4ZDE5NzNhZjA2NScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNmM2Y0ZjQnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjk1Mjk0MTE3OTI3NTUxMjcsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuOTU2ODYyNzQ3NjY5MjIsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuOTU2ODYyNzQ3NjY5MjIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSb2xlcy9Cb3JkZXIvQm9yZGVyIFN0cm9uZycsXG4gICAgICAgIGtleTogJzBmYmQ3YjUzZjU5MTExNzc3NTI0MWNmM2ZkNzEwMTQ4OGRmNTM5N2YnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjZDFkNGQ0JyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC44MTk2MDc4NTM4ODk0NjUzLFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjgzMTM3MjU1OTA3MDU4NzIsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuODMxMzcyNTU5MDcwNTg3MixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1JvbGVzL0VudGl0eSBTdGF0dXMvRW50aXR5IFN0YXR1cyBPcGVyYXRpb25hbCcsXG4gICAgICAgIGtleTogJzJhN2FhZDNjOTM2OTcxOGJmNDBmZTAzOWNhZDZkYjU2ZTRlYzljMTUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjMDFiMDc2JyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC4wMDM5MjE1Njg4NTkzNjg1NjMsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuNjkwMTk2MDk2ODk3MTI1MixcbiAgICAgICAgICAgICAgICAgICAgYjogMC40NjI3NDUxMDAyNTk3ODA5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUm9sZXMvRW50aXR5IFN0YXR1cy9FbnRpdHkgU3RhdHVzIERlZ3JhZGVkJyxcbiAgICAgICAga2V5OiAnNTc5NzlmM2JlMTdmYmQ1ZmE4YjQ3NzA5NWU3YWFjMjc0NTZiNjE3MCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNmMGI0MDAnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjk0MTE3NjQ3NDA5NDM5MDksXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuNzA1ODgyMzcwNDcxOTU0MyxcbiAgICAgICAgICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1JvbGVzL0VudGl0eSBTdGF0dXMvRW50aXR5IFN0YXR1cyBBbm9tYWx5JyxcbiAgICAgICAga2V5OiAnMWVhMWVhNmU4NjFlYzE0ZDNkYzA0ZGU2NTlhZGY3NDZmOGY5YWY1YycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNmMDdhMGUnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjk0MTE3NjQ3NDA5NDM5MDksXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuNDc4NDMxMzczODM0NjEsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuMDU0OTAxOTYxMjM3MTkyMTU0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUm9sZXMvRW50aXR5IFN0YXR1cy9FbnRpdHkgU3RhdHVzIFVuYXZhaWxhYmxlJyxcbiAgICAgICAga2V5OiAnZTg5ZjljOTNiZGZiYmI4MmRiNWYzZGU0MGEyZDJmMjFiYTlhOTg1NicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNmNTU1NGInLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjk2MDc4NDMxNjA2MjkyNzIsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuMzMzMzMzMzQzMjY3NDQwOCxcbiAgICAgICAgICAgICAgICAgICAgYjogMC4yOTQxMTc2NTkzMzAzNjgwNCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1JvbGVzL0VudGl0eSBTdGF0dXMvRW50aXR5IFN0YXR1cyBVbmtub3duJyxcbiAgICAgICAga2V5OiAnMWU1MTg5OGNmMjZhZjg5MWE4YjljZjI0MzllZGE1OTI4NTc4NDczMycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyM5ZmE1YTUnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjYyMzUyOTQzNDIwNDEwMTYsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuNjQ3MDU4ODQ0NTY2MzQ1MixcbiAgICAgICAgICAgICAgICAgICAgYjogMC42NDcwNTg4NDQ1NjYzNDUyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnR3JheSAvIEdyYXkgMScsXG4gICAgICAgIGtleTogJzk3MzVmMTk5ZGM2MDA4YzRmYWUzYTU3ZTk5MTY0ZGQ2MTZlMGM3NDEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjZmFmYmZiJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC45ODAzOTIxNTgwMzE0NjM2LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjk4NDMxMzcyNjQyNTE3MDksXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuOTg0MzEzNzI2NDI1MTcwOSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0dyYXkgLyBHcmF5IDInLFxuICAgICAgICBrZXk6ICc2MTI5YjQ5Mzc0YmZiNDcyNWY4NDlhYjVlYjI2YjBiOTEyOGRkZTIyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnI2YzZjRmNCcsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuOTUyOTQxMTc5Mjc1NTEyNyxcbiAgICAgICAgICAgICAgICAgICAgZzogMC45NTY4NjI3NDc2NjkyMixcbiAgICAgICAgICAgICAgICAgICAgYjogMC45NTY4NjI3NDc2NjkyMixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0dyYXkgLyBHcmF5IDMnLFxuICAgICAgICBrZXk6ICcwZTI1MGY3MTIwYzA1OTE1NmM3NDRlYWM2OTQyNTZiYzVlYmI0M2E2JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnI2U3ZTllOScsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuOTA1ODgyMzU4NTUxMDI1NCxcbiAgICAgICAgICAgICAgICAgICAgZzogMC45MTM3MjU0OTUzMzg0Mzk5LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjkxMzcyNTQ5NTMzODQzOTksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHcmF5IC8gR3JheSA0JyxcbiAgICAgICAga2V5OiAnYjU5OGY3ZjY4YWJiYmNlMzBkOTRmZGVmZjVhMjllNjUwMDcyZWQyNycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNkMWQ0ZDQnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjgxOTYwNzg1Mzg4OTQ2NTMsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuODMxMzcyNTU5MDcwNTg3MixcbiAgICAgICAgICAgICAgICAgICAgYjogMC44MzEzNzI1NTkwNzA1ODcyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnR3JheSAvIEdyYXkgNScsXG4gICAgICAgIGtleTogJzIwZjY0NmJjMjEwMjYwZjkwNDE3ZjA1YzFiZGY0NDM3MThiMjZmYmMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjOWZhNWE1JyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC42MjM1Mjk0MzQyMDQxMDE2LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjY0NzA1ODg0NDU2NjM0NTIsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuNjQ3MDU4ODQ0NTY2MzQ1MixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0dyYXkgLyBHcmF5IDYnLFxuICAgICAgICBrZXk6ICc4MjgxYzk1ZTkxNDY1ZmYwMTc0MWQ5YjEyYWIyOWI5ZDk1ZTU2ZDI4JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzZlNzU3NScsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuNDMxMzcyNTUzMTEwMTIyNyxcbiAgICAgICAgICAgICAgICAgICAgZzogMC40NTg4MjM1MzE4NjYwNzM2LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjQ1ODgyMzUzMTg2NjA3MzYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHcmF5IC8gR3JheSA3JyxcbiAgICAgICAga2V5OiAnNmIzYTQyMzk2OTlmNjZhMzQyZmFjMGFjM2VlNWNhOTIzNjBjNDA4YicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyM1NTYwNjAnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjMzMzMzMzM0MzI2NzQ0MDgsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuMzc2NDcwNTk1NTk4MjIwOCxcbiAgICAgICAgICAgICAgICAgICAgYjogMC4zNzY0NzA1OTU1OTgyMjA4LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnR3JheSAvIEdyYXkgOCcsXG4gICAgICAgIGtleTogJzM5ZWI3NjZiOTNlMDcxNTU3NGM4ODQzODBjYjNiN2Y5YjliMzI3NzgnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjM2Y0YzRjJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC4yNDcwNTg4MjM3MDQ3MTk1NCxcbiAgICAgICAgICAgICAgICAgICAgZzogMC4yOTgwMzkyMjc3MjQwNzUzLFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjI5ODAzOTIyNzcyNDA3NTMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHcmF5IC8gR3JheSA5JyxcbiAgICAgICAga2V5OiAnMGYwZjExYTFkODFhZDYwOGZhYTg4NjkzZDBkODg0ZjAyMWJmMWVhYScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMyODM2MzYnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjE1Njg2Mjc1MDY0OTQ1MjIsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuMjExNzY0NzA4MTYxMzU0MDYsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuMjExNzY0NzA4MTYxMzU0MDYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHcmF5IC8gR3JheSAxMCcsXG4gICAgICAgIGtleTogJzkwMDBkZTk0ZGE3YjBjYTdlZTkyNzBjMmRjY2I4ZjM3NzJmMGZhMDYnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjMTUxZDFkJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC4wODIzNTI5NDM3MTg0MzMzOCxcbiAgICAgICAgICAgICAgICAgICAgZzogMC4xMTM3MjU0OTA4NjgwOTE1OCxcbiAgICAgICAgICAgICAgICAgICAgYjogMC4xMTM3MjU0OTA4NjgwOTE1OCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RlYWwgLyBUZWFsIDEnLFxuICAgICAgICBrZXk6ICdhYTdmNjdkNWFlMjBjN2NiNTNmZjUxMzVjNGI3OGRmOGY0MWNmODlmJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnI2YwZmJmYycsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuOTQxMTc2NDc0MDk0MzkwOSxcbiAgICAgICAgICAgICAgICAgICAgZzogMC45ODQzMTM3MjY0MjUxNzA5LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjk4ODIzNTI5NDgxODg3ODIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUZWFsIC8gVGVhbCAyJyxcbiAgICAgICAga2V5OiAnZTEzM2FjYmZhMDllMjFhZmI2MWFlMjgwZDAzM2ZiYTdlODczMjE0OCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNjNmYyZjYnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjc3NjQ3MDYwMTU1ODY4NTMsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuOTQ5MDE5NjEwODgxODA1NCxcbiAgICAgICAgICAgICAgICAgICAgYjogMC45NjQ3MDU4ODQ0NTY2MzQ1LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGVhbCAvIFRlYWwgMycsXG4gICAgICAgIGtleTogJzMyYThmZGE2NTEwOWZjY2VhZDU4ZjBkNTg4YzJhNzM5YjFjMmViMTMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjNmNkYWUzJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC40MjM1Mjk0MTYzMjI3MDgxMyxcbiAgICAgICAgICAgICAgICAgICAgZzogMC44NTQ5MDE5Njk0MzI4MzA4LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjg5MDE5NjA4NDk3NjE5NjMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUZWFsL1RlYWwgNCcsXG4gICAgICAgIGtleTogJzM2Y2Q4MGE0NjAxZjc5ZjU0MWUwYmZjODNhOTE0YTRkMWFiNGYzNzInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjMjdiYWM4JyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC4xNTI5NDExODIyNTU3NDQ5MyxcbiAgICAgICAgICAgICAgICAgICAgZzogMC43Mjk0MTE3ODA4MzQxOTgsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuNzg0MzEzNzM4MzQ2MDk5OSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RlYWwvVGVhbCA1JyxcbiAgICAgICAga2V5OiAnN2ViM2ZlMWM5ZTM1ZWE3OTU4MjBmMTM1ZmQzMGMxYmE0ZDA4YTk3NicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMwMTljYWEnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjAwMzkyMTU2ODg1OTM2ODU2MyxcbiAgICAgICAgICAgICAgICAgICAgZzogMC42MTE3NjQ3MjkwMjI5Nzk3LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjY2NjY2NjY4NjUzNDg4MTYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUZWFsIC8gVGVhbCA2JyxcbiAgICAgICAga2V5OiAnM2UyYzZjYmY0YmVkOGM1MzdhZDAxN2ZlOTE1NWY4NGFjNTMzYWNkZicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMwMTdjODYnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjAwMzkyMTU2ODg1OTM2ODU2MyxcbiAgICAgICAgICAgICAgICAgICAgZzogMC40ODYyNzQ1MTA2MjIwMjQ1NCxcbiAgICAgICAgICAgICAgICAgICAgYjogMC41MjU0OTAyMjQzNjE0MTk3LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGVhbCAvIFRlYWwgNycsXG4gICAgICAgIGtleTogJzJjYmE5Y2ViOGNlMTIzNDNiZDg1MmYwMmM1OTkyMmUzZDZlZmU3MDInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjMDI2MzZiJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC4wMDc4NDMxMzc3MTg3MzcxMjUsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuMzg4MjM1MzAwNzc5MzQyNjUsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuNDE5NjA3ODQ3OTI5MDAwODUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUZWFsIC8gVGVhbCA4JyxcbiAgICAgICAga2V5OiAnMzU0MzNmNDRhYmJhYzY5ZjZhNDA0N2EwZWViNTA0ZmM4N2U2OTc4NScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMwMDRiNTEnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjI5NDExNzY1OTMzMDM2ODA0LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjMxNzY0NzA2OTY5MjYxMTcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUZWFsIC8gVGVhbCA5JyxcbiAgICAgICAga2V5OiAnY2Q3M2E2ZTM3OGY5ZWQyYTE3Y2YzODgwYjA1NTg3M2NlYzI4MmM2MycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMwMDM3M2MnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjIxNTY4NjI3NjU1NTA2MTM0LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjIzNTI5NDExODUyMzU5NzcyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGVhbCAvIFRlYWwgMTAnLFxuICAgICAgICBrZXk6ICdiZWU3NDBkZWU2MzExOThjNjQxNzY4Y2M1MzJiNmNhZmMzODMxMzhhJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzAyMWUxZicsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuMDA3ODQzMTM3NzE4NzM3MTI1LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjExNzY0NzA1OTI2MTc5ODg2LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjEyMTU2ODYyNzY1NTUwNjEzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQmx1ZSAvIEJsdWUgMScsXG4gICAgICAgIGtleTogJ2ZiZTQzNmJiYjM2ZDdlNzQ1MmRlMmMzMDIxZTNhYjAwZWY4MzY2ZjQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjZjZmYWZkJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC45NjQ3MDU4ODQ0NTY2MzQ1LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjk4MDM5MjE1ODAzMTQ2MzYsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuOTkyMTU2ODYzMjEyNTg1NCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JsdWUgLyBCbHVlIDInLFxuICAgICAgICBrZXk6ICdlYTQ1MDcxZjkwYWM1OWRiMjJiNjA0MTk0MTZlNDM1NTA1Y2RhYTExJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnI2UxZWUwMCcsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuODgyMzUyOTQ4MTg4NzgxNyxcbiAgICAgICAgICAgICAgICAgICAgZzogMC45Mjk0MTE3Njg5MTMyNjksXG4gICAgICAgICAgICAgICAgICAgIGI6IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCbHVlIC8gQmx1ZSAzJyxcbiAgICAgICAga2V5OiAnZGYzMzM3YmY2NzMxZGNlNWFmZDI2NjU5NTk2MWVhMDI1NTExODMxNycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNhNGQxZmMnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjY0MzEzNzI3NjE3MjYzNzksXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuODE5NjA3ODUzODg5NDY1MyxcbiAgICAgICAgICAgICAgICAgICAgYjogMC45ODgyMzUyOTQ4MTg4NzgyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQmx1ZSAvIEJsdWUgNCcsXG4gICAgICAgIGtleTogJ2U1NzgyY2NjYjJjMWYxMzYxOTZkMTQyYWNmODk2ZGZlMTFiYTAxZDknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjNjNhZGZhJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC4zODgyMzUzMDA3NzkzNDI2NSxcbiAgICAgICAgICAgICAgICAgICAgZzogMC42Nzg0MzEzOTE3MTYwMDM0LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjk4MDM5MjE1ODAzMTQ2MzYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCbHVlIC8gQmx1ZSA1JyxcbiAgICAgICAga2V5OiAnODE4ZmE5YzA0OWQwYTBlMDFhOTZlNzEzODExODI4NTRmNGE1MjdjMScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMyNzhlZjgnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjE1Mjk0MTE4MjI1NTc0NDkzLFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjU1Njg2Mjc3MTUxMTA3NzksXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuOTcyNTQ5MDIxMjQ0MDQ5MSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JsdWUgLyBCbHVlIDYnLFxuICAgICAgICBrZXk6ICcwOGY2OWJhNDM0NmVlMGU4MTI5MDJiZTI5YzU4MDYwNjMyOWZjZWVhJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzBjNzRkZicsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuMDQ3MDU4ODI0NDQ5Nzc3NixcbiAgICAgICAgICAgICAgICAgICAgZzogMC40NTQ5MDE5NjM0NzIzNjYzMyxcbiAgICAgICAgICAgICAgICAgICAgYjogMC44NzQ1MDk4MTE0MDEzNjcyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQmx1ZSAvIEJsdWUgNycsXG4gICAgICAgIGtleTogJzlkZDI0NWJiNmNiYjRlZjU5Y2I0NmJhNmNjMTkyNTc0MjAzNzQ1MjcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjMDg1NmFhJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC4wMzEzNzI1NTA4NzQ5NDg1LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjMzNzI1NDkxMTY2MTE0ODA3LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjY2NjY2NjY4NjUzNDg4MTYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCbHVlIC8gQmx1ZSA4JyxcbiAgICAgICAga2V5OiAnODlkOGNjMWI3OWRhMDU3YjcyMjY1ZDY0Y2Y1ZDY5NmUyNDVmYWZhYScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMwNzQzODInLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjAyNzQ1MDk4MDYxODU5NjA3NyxcbiAgICAgICAgICAgICAgICAgICAgZzogMC4yNjI3NDUxMTIxODA3MDk4NCxcbiAgICAgICAgICAgICAgICAgICAgYjogMC41MDk4MDM5NTA3ODY1OTA2LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQmx1ZSAvIEJsdWUgOScsXG4gICAgICAgIGtleTogJ2Q5MDAzYzJkOGQ2YTJhZDk0M2I2YzA3N2UwNTlhYTZkOGY4NzJjYTInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjMDQyYTUxJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC4wMTU2ODYyNzU0Mzc0NzQyNSxcbiAgICAgICAgICAgICAgICAgICAgZzogMC4xNjQ3MDU4ODc0MzY4NjY3NixcbiAgICAgICAgICAgICAgICAgICAgYjogMC4zMTc2NDcwNjk2OTI2MTE3LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQmx1ZSAvIEJsdWUgMTAnLFxuICAgICAgICBrZXk6ICcwMDBiZmM5Y2Y2MzU3M2QzMTdhNTVlOWZiNTc3OWY1ZWNhYjVlMWUxJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzAzMTcyYicsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuMDExNzY0NzA2MTEyNDQ0NCxcbiAgICAgICAgICAgICAgICAgICAgZzogMC4wOTAxOTYwODA1MDU4NDc5MyxcbiAgICAgICAgICAgICAgICAgICAgYjogMC4xNjg2Mjc0NTU4MzA1NzQwNCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0dyZWVuIC8gR3JlZW4gMScsXG4gICAgICAgIGtleTogJ2RkZDU0ZTMyMmUxN2ZjMmE1OGE0N2IzMmUwMjM5NzkzNjAwNmUzMjUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjZWIwMGYyJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC45MTc2NDcwNjM3MzIxNDcyLFxuICAgICAgICAgICAgICAgICAgICBnOiAxLFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjk0OTAxOTYxMDg4MTgwNTQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHcmVlbiAvIEdyZWVuIDInLFxuICAgICAgICBrZXk6ICcxODQ4MWExYmIxMmMwZmFlYTNmMjVmN2IwZTMzMTgyZDg5MWE5YmYzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnI2JkZjdkNycsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuNzQxMTc2NDg2MDE1MzE5OCxcbiAgICAgICAgICAgICAgICAgICAgZzogMC45Njg2Mjc0NTI4NTAzNDE4LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjg0MzEzNzI2NDI1MTcwOSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0dyZWVuIC8gR3JlZW4gMycsXG4gICAgICAgIGtleTogJzYzZWM5OWQ5MjBjOGYyOWNjZGMyMWRkZDBlOTc0YTBjNTY3ZWQ1N2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjNmJlYWFlJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC40MTk2MDc4NDc5MjkwMDA4NSxcbiAgICAgICAgICAgICAgICAgICAgZzogMC45MTc2NDcwNjM3MzIxNDcyLFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjY4MjM1Mjk2MDEwOTcxMDcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHcmVlbiAvIEdyZWVuIDQnLFxuICAgICAgICBrZXk6ICcyMmFhNGQ1Zjc3OWY5ZmQ4ZDNkMDRmNzQ5MTc2ZjJlYzc5NDExZDBhJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzAxYzg4NCcsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuMDAzOTIxNTY4ODU5MzY4NTYzLFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjc4NDMxMzczODM0NjA5OTksXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuNTE3NjQ3MDg3NTc0MDA1MSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0dyZWVuIC8gR3JlZW4gNScsXG4gICAgICAgIGtleTogJzhiMmQ3ZWZkZGYzY2VlZmFhOGE0YTRlNGNkODg0ODdlNDdkN2NhMDYnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjMDFiMDc2JyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC4wMDM5MjE1Njg4NTkzNjg1NjMsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuNjkwMTk2MDk2ODk3MTI1MixcbiAgICAgICAgICAgICAgICAgICAgYjogMC40NjI3NDUxMDAyNTk3ODA5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnR3JlZW4gLyBHcmVlbiA2JyxcbiAgICAgICAga2V5OiAnZDIyMTJiZjVjYTdhYmNlMDFmMThjNTEwOTQzN2VmZDVlZTk2NjliMycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMwMjg2NWInLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjAwNzg0MzEzNzcxODczNzEyNSxcbiAgICAgICAgICAgICAgICAgICAgZzogMC41MjU0OTAyMjQzNjE0MTk3LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjM1Njg2Mjc1MzYyOTY4NDQ1LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnR3JlZW4gLyBHcmVlbiA3JyxcbiAgICAgICAga2V5OiAnY2YyNWY2NTVmM2M3NTIzYjgyN2I2ODk2NDE4NjVhZjFjMjZjMjRmZicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMwMjY3NDcnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjAwNzg0MzEzNzcxODczNzEyNSxcbiAgICAgICAgICAgICAgICAgICAgZzogMC40MDM5MjE1NzQzNTQxNzE3NSxcbiAgICAgICAgICAgICAgICAgICAgYjogMC4yNzg0MzEzODU3NTU1Mzg5NCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0dyZWVuIC8gR3JlZW4gOCcsXG4gICAgICAgIGtleTogJ2VkZjY2MTkyNWY5ZGUzMTcxNDliNDJjMzZhNWNmMmEwYjVlYzRjZjEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjMDE0ZDM2JyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC4wMDM5MjE1Njg4NTkzNjg1NjMsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuMzAxOTYwNzk2MTE3NzgyNixcbiAgICAgICAgICAgICAgICAgICAgYjogMC4yMTE3NjQ3MDgxNjEzNTQwNixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0dyZWVuIC8gR3JlZW4gOScsXG4gICAgICAgIGtleTogJzFiYjI4YTQ5ZjMyNzI2MGQyYjkzNTcyZjY4ODBiOTFmZGI4NTFlZDInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjMDEzOTI3JyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC4wMDM5MjE1Njg4NTkzNjg1NjMsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuMjIzNTI5NDEzMzQyNDc1OSxcbiAgICAgICAgICAgICAgICAgICAgYjogMC4xNTI5NDExODIyNTU3NDQ5MyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0dyZWVuIC8gR3JlZW4gMTAnLFxuICAgICAgICBrZXk6ICdmYjNhYzFiZGVkYzcwZWVkNjhlMmMxYTQxOThjMDVhYzE2NTY5OWZmJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzAyMTIwMCcsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuMDA3ODQzMTM3NzE4NzM3MTI1LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjA3MDU4ODIzODUzNzMxMTU1LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnWWVsbG93L1llbGxvdyAxJyxcbiAgICAgICAga2V5OiAnYzdiMjU5MDEzNTJlYjc5YTBlNTUzZTc0ZmFlNThkNGEyYjY4MjRlNicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNmZWZhZTknLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjk5NjA3ODQzMTYwNjI5MjcsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuOTgwMzkyMTU4MDMxNDYzNixcbiAgICAgICAgICAgICAgICAgICAgYjogMC45MTM3MjU0OTUzMzg0Mzk5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnWWVsbG93L1llbGxvdyAyJyxcbiAgICAgICAga2V5OiAnYTkzNjc2YTUwNjE0OTI3NzgyNTNmZmI2M2VlYWFhMzczZTI5YjZiNicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNmZGYyYzQnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjk5MjE1Njg2MzIxMjU4NTQsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuOTQ5MDE5NjEwODgxODA1NCxcbiAgICAgICAgICAgICAgICAgICAgYjogMC43Njg2Mjc0NjQ3NzEyNzA4LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnWWVsbG93L1llbGxvdyAzJyxcbiAgICAgICAga2V5OiAnYWRmMDYyYzhmZTE3ZjJkNTZkNDMwYzRlNjQ3NmVjZmY1NTZmNDc1MicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNmY2U1OTEnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjk4ODIzNTI5NDgxODg3ODIsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuODk4MDM5MjIxNzYzNjEwOCxcbiAgICAgICAgICAgICAgICAgICAgYjogMC41Njg2Mjc0NzY2OTIxOTk3LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnWWVsbG93L1llbGxvdyA0JyxcbiAgICAgICAga2V5OiAnMmY5ZWEwYjI3ZjU5Nzc4ZGI1YjNhYmFhOGQ0MzU3ZmFmMWM4ZjQ4YycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMwMGQyM2QnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAxLFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjgyMzUyOTQyMjI4MzE3MjYsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuMjM5MjE1Njg2OTE3MzA1LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnWWVsbG93L1llbGxvdyA1JyxcbiAgICAgICAga2V5OiAnZWIxZTNhMDQyZWU1ZDhiODIzODc0MDQ2NjM5NjZlNWY5ZDA4Y2YzYycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNmMGI0MDAnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjk0MTE3NjQ3NDA5NDM5MDksXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuNzA1ODgyMzcwNDcxOTU0MyxcbiAgICAgICAgICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1llbGxvdy9ZZWxsb3cgNicsXG4gICAgICAgIGtleTogJzJiM2RiNDE0OWQ1NDU5YWZlZTMzMTZmN2ZhZWQyZmIwMzM0MmEyMWEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjYWE2NzAxJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC42NjY2NjY2ODY1MzQ4ODE2LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjQwMzkyMTU3NDM1NDE3MTc1LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjAwMzkyMTU2ODg1OTM2ODU2MyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1llbGxvdy9ZZWxsb3cgNycsXG4gICAgICAgIGtleTogJzIxNjc1MmI1MmNkMjQzZDdjYzcxODI2N2FhZmNkZjJhMjA4MWM4MzAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjODY0NzAwJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC41MjU0OTAyMjQzNjE0MTk3LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjI3ODQzMTM4NTc1NTUzODk0LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnWWVsbG93L1llbGxvdyA4JyxcbiAgICAgICAga2V5OiAnMDMxM2Y3ODg5YTk3ZDhlYTgxOWFmNzgzNWQzOGU0MjYwOTBhY2RhOScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyM2YzM0MDEnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjQyMzUyOTQxNjMyMjcwODEzLFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjIwMzkyMTU3MTM3MzkzOTUxLFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjAwMzkyMTU2ODg1OTM2ODU2MyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1llbGxvdy9ZZWxsb3cgOScsXG4gICAgICAgIGtleTogJzBhYzcxNWU0Y2E2YmE1MjVjYzBkMGU2ZWE5N2Y5ZmI5YjNiMTY0ZjYnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjNDYxZTAyJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC4yNzQ1MDk4MTczNjE4MzE2NyxcbiAgICAgICAgICAgICAgICAgICAgZzogMC4xMTc2NDcwNTkyNjE3OTg4NixcbiAgICAgICAgICAgICAgICAgICAgYjogMC4wMDc4NDMxMzc3MTg3MzcxMjUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdZZWxsb3cvWWVsbG93IDEwJyxcbiAgICAgICAga2V5OiAnNmJlN2U4MDcwZWI2NTQ1ODEyZjhjNmIwMmY4MDUyOWE0N2NhODQzYicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMyNjEyMDUnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjE0OTAxOTYxMzg2MjAzNzY2LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjA3MDU4ODIzODUzNzMxMTU1LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjAxOTYwNzg0MzgzMTE4MTUyNixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ09yYW5nZS9PcmFuZ2UgMScsXG4gICAgICAgIGtleTogJzM4Yzg1YzA4Mzc2MGY5MTIzOTAyOTFlYzMzNGE1ZjhlNjhiZjBjZGInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjZmVmNWU5JyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC45OTYwNzg0MzE2MDYyOTI3LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjk2MDc4NDMxNjA2MjkyNzIsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuOTEzNzI1NDk1MzM4NDM5OSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ09yYW5nZS9PcmFuZ2UgMicsXG4gICAgICAgIGtleTogJ2QxMDI0OTZiODEzZWE3NzhkNTM0MTFmNTQ3YzhkOWZhM2Y0NzEyNDEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjZmRlN2M5JyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC45OTIxNTY4NjMyMTI1ODU0LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjkwNTg4MjM1ODU1MTAyNTQsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuNzg4MjM1MzA2NzM5ODA3MSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ09yYW5nZS9PcmFuZ2UgMycsXG4gICAgICAgIGtleTogJzc0MzMzYmMxOTJiMzE4MGQxMGUwNzM2OWUxZTdjNGU2ZDEzYmNjM2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjZmNjYThkJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC45ODgyMzUyOTQ4MTg4NzgyLFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjc5MjE1Njg3NTEzMzUxNDQsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuNTUyOTQxMjAzMTE3MzcwNixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ09yYW5nZS9PcmFuZ2UgNCcsXG4gICAgICAgIGtleTogJzdiYTUzYmExYTQxZGY4NGJjODc3Njk0MjI5ZGI0MjdhMmJmNjVjMzYnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjZmFhNDRhJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC45ODAzOTIxNTgwMzE0NjM2LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjY0MzEzNzI3NjE3MjYzNzksXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuMjkwMTk2MDkwOTM2NjYwNzcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdPcmFuZ2UvT3JhbmdlIDUnLFxuICAgICAgICBrZXk6ICc4NGI2YjA0M2Y1MTk3NzQ1MDE3Mjk1NTZlMGNiMDRlYmU0MzU4MTRmJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnI2YwN2EwZScsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuOTQxMTc2NDc0MDk0MzkwOSxcbiAgICAgICAgICAgICAgICAgICAgZzogMC40Nzg0MzEzNzM4MzQ2MSxcbiAgICAgICAgICAgICAgICAgICAgYjogMC4wNTQ5MDE5NjEyMzcxOTIxNTQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdPcmFuZ2UvT3JhbmdlIDYnLFxuICAgICAgICBrZXk6ICcwM2M4NTk0ZTMxNDM5ZTYzZWM2ODYxYjgzZTA4YjhiYTk3NzdkYjcxJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnI2MyNTcwNScsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuNzYwNzg0MzI3OTgzODU2MixcbiAgICAgICAgICAgICAgICAgICAgZzogMC4zNDExNzY0ODAwNTQ4NTUzNSxcbiAgICAgICAgICAgICAgICAgICAgYjogMC4wMTk2MDc4NDM4MzExODE1MjYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdPcmFuZ2UvT3JhbmdlIDcnLFxuICAgICAgICBrZXk6ICcxYWNhYTAzODkyYTUyYjVlYTdkMDFlZTRhZTFhNmUwNWJlZTA4NTZmJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzk3M2EwOCcsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuNTkyMTU2ODg3MDU0NDQzNCxcbiAgICAgICAgICAgICAgICAgICAgZzogMC4yMjc0NTA5ODE3MzYxODMxNyxcbiAgICAgICAgICAgICAgICAgICAgYjogMC4wMzEzNzI1NTA4NzQ5NDg1LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnT3JhbmdlL09yYW5nZSA4JyxcbiAgICAgICAga2V5OiAnMzFlYTJjNThhOTZhODIyODRkM2IxNTc2ZDcxYjI0NTlmYWFiNDc1MCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyM3YzI3MDcnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjQ4NjI3NDUxMDYyMjAyNDU0LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjE1Mjk0MTE4MjI1NTc0NDkzLFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjAyNzQ1MDk4MDYxODU5NjA3NyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ09yYW5nZS9PcmFuZ2UgOScsXG4gICAgICAgIGtleTogJ2Y2OTYwOGYxYTE2YTkzZTA2OGIzYTdhN2U0ZTM1N2M0ZWMyZjA5NWUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjNGQxODA0JyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC4zMDE5NjA3OTYxMTc3ODI2LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjA5NDExNzY0ODg5OTU1NTIsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuMDE1Njg2Mjc1NDM3NDc0MjUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdPcmFuZ2UvT3JhbmdlIDEwJyxcbiAgICAgICAga2V5OiAnMmIxOThkNzhjMGMzMGM1OTQyNjEwODFkNzE2YTRlY2NmMGYyMDBhNScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMyZDBkMDMnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjE3NjQ3MDU5MjYxNzk4ODYsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuMDUwOTgwMzkyODQzNDg0ODgsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuMDExNzY0NzA2MTEyNDQ0NCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1JlZC9SZWQgMScsXG4gICAgICAgIGtleTogJzNhZmUwMmVhN2ExMWI5YmYyMmI1YmY1OTk2NGVjZjUwN2RmZDEzZjYnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjZmRmNGY0JyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC45OTIxNTY4NjMyMTI1ODU0LFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjk1Njg2Mjc0NzY2OTIyLFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjk1Njg2Mjc0NzY2OTIyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUmVkL1JlZCAyJyxcbiAgICAgICAga2V5OiAnY2NjZGEwMjZiOGFhY2QwMjBmNGQ5YjIyMjM1YzE4YzYxYTFiMGZkNCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNmZWU1ZTUnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjk5NjA3ODQzMTYwNjI5MjcsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuODk4MDM5MjIxNzYzNjEwOCxcbiAgICAgICAgICAgICAgICAgICAgYjogMC44OTgwMzkyMjE3NjM2MTA4LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUmVkL1JlZCAzJyxcbiAgICAgICAga2V5OiAnNmQ4MDBhNzgxOWQ3ODE5ZmYwYWExODgzNGM1M2MyMmVmMGZiZTExOCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNmY2JkYmEnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjk4ODIzNTI5NDgxODg3ODIsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuNzQxMTc2NDg2MDE1MzE5OCxcbiAgICAgICAgICAgICAgICAgICAgYjogMC43Mjk0MTE3ODA4MzQxOTgsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSZWQvUmVkIDQnLFxuICAgICAgICBrZXk6ICc5Yzk2MmM1YWIyMmRjNmY0M2VlMDFmYTU5NjIwOGZjNmY3NzIyMjNjJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnI2Y5ODk4MicsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuOTc2NDcwNTg5NjM3NzU2MyxcbiAgICAgICAgICAgICAgICAgICAgZzogMC41MzcyNTQ5Mjk1NDI1NDE1LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjUwOTgwMzk1MDc4NjU5MDYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSZWQvUmVkIDUnLFxuICAgICAgICBrZXk6ICc5MGM0YzZhMWRlZDA2OTY1ZDBkYmEzNTM0ZjgyZWRiMWI5NTcwYjFhJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnI2Y1NTU0YicsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuOTYwNzg0MzE2MDYyOTI3MixcbiAgICAgICAgICAgICAgICAgICAgZzogMC4zMzMzMzMzNDMyNjc0NDA4LFxuICAgICAgICAgICAgICAgICAgICBiOiAwLjI5NDExNzY1OTMzMDM2ODA0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUmVkL1JlZCA2JyxcbiAgICAgICAga2V5OiAnMDNiMjMwOWNkZDc1ZGEwNzNmZGI3NzQ3N2RiOWNlNGU5NTdlZGE1ZicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNkZjJkMjQnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjg3NDUwOTgxMTQwMTM2NzIsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuMTc2NDcwNTkyNjE3OTg4NixcbiAgICAgICAgICAgICAgICAgICAgYjogMC4xNDExNzY0NzcwNzQ2MjMxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUmVkL1JlZCA3JyxcbiAgICAgICAga2V5OiAnMTRiMzg4YjNlYzkwN2I0YWFmZjdjZmUyYTIzZDFmYTgxZGZmYzA3ZicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNiMDBmMGEnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLjY5MDE5NjA5Njg5NzEyNTIsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAuMDU4ODIzNTI5NjMwODk5NDMsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAuMDM5MjE1Njg3NjYyMzYzMDUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSZWQvUmVkIDgnLFxuICAgICAgICBrZXk6ICdiNWIyNTM3NmQ1NjZiYzE3NzQxNGM3NjU4ODYzNGJiYzM0OWZkNDRiJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzhlMDAwMCcsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuNTU2ODYyNzcxNTExMDc3OSxcbiAgICAgICAgICAgICAgICAgICAgZzogMCxcbiAgICAgICAgICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1JlZC9SZWQgOScsXG4gICAgICAgIGtleTogJ2NhYjZhZThjNWI2NjM0ZDY2MmY4YjFiMTMxNTFiNGVlNzI0NWExNTknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnU09MSUQnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBoZXg6ICcjNWEwMTAwJyxcbiAgICAgICAgICAgICAgICByZ2I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMC4zNTI5NDExODUyMzU5NzcyLFxuICAgICAgICAgICAgICAgICAgICBnOiAwLjAwMzkyMTU2ODg1OTM2ODU2MyxcbiAgICAgICAgICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1JlZC9SZWQgMTAnLFxuICAgICAgICBrZXk6ICc2NTUxZmNiNzZkMGVlZGU0MDc1YWRjNmVkNGRjMjg4MTU0MTE3N2EyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzM4MDAwMCcsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAuMjE5NjA3ODQ0OTQ4NzY4NjIsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCYXNpY3MvV2hpdGUnLFxuICAgICAgICBrZXk6ICc3MmMyY2NiZmYxNDAyODg5MDc5ODZkYzZmMGFhY2QxMTFlZDFhNDNhJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDEsXG4gICAgICAgICAgICAgICAgICAgIGc6IDEsXG4gICAgICAgICAgICAgICAgICAgIGI6IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCYXNpY3MvQmxhY2snLFxuICAgICAgICBrZXk6ICc3NzRmMjY3MzAzZDdkOTA4ZWYwY2Y4ZGVlNWI0MWNiOTQwYzYyNDFlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgaGV4OiAnIzAwMDAwMCcsXG4gICAgICAgICAgICAgICAgcmdiOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgICAgICAgICAgIGc6IDAsXG4gICAgICAgICAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdfUm9sZXMvQmFja2dyb3VuZC9CYWNrZ3JvdW5kIExpZ2h0IFRyYW5zcGFyZW50JyxcbiAgICAgICAga2V5OiAnY2U5YzA5YThhOTQ0NWEwNzZlNTZjMzlhYjAyZmE0MDYzZDIzMTA1MycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMC4yMDAwMDAwMDI5ODAyMzIyNCxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAxLFxuICAgICAgICAgICAgICAgICAgICBnOiAxLFxuICAgICAgICAgICAgICAgICAgICBiOiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnX1JvbGVzL0JhY2tncm91bmQvQmFja2dyb3VuZCBEYXJrIFRyYW5zcGFyZW50JyxcbiAgICAgICAga2V5OiAnYTQ3ZWRjZTJhNzhkNjdhYzUzMWEzNmU4NjVkMTQwYzQxOWE3NDdkNScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMC4wNzk5OTk5OTgyMTE4NjA2NixcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGhleDogJyMwMDAwMDAnLFxuICAgICAgICAgICAgICAgIHJnYjoge1xuICAgICAgICAgICAgICAgICAgICByOiAwLFxuICAgICAgICAgICAgICAgICAgICBnOiAwLFxuICAgICAgICAgICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVDb3JlUGFpbnRTdHlsZXMiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9