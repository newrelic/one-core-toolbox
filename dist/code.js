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
/* harmony import */ var _oneCorePaintStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oneCorePaintStyles.js */ "./src/plugin/oneCorePaintStyles.js");
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
    const colorIsImage = colorType === 'fill' && ((_b = layer === null || layer === void 0 ? void 0 : layer.fills[0]) === null || _b === void 0 ? void 0 : _b.type) === 'IMAGE';
    const colorIsVisible = layer[colorType][0].visible;
    const colorInHex = (colorInRGB) => {
        return rgbToHex(colorInRGB.r, colorInRGB.g, colorInRGB.b);
    };
    if (!colorIsImage && colorIsVisible) {
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
const getColorStats = () => {
    const getRawLayersWithColor = () => {
        let selection = figma.currentPage.selection;
        function isFrameOrGroup(node) {
            return node.type === 'FRAME' || node.type === 'GROUP';
        }
        const relevantLayers = selection.map((selectedLayer) => {
            if (!isFrameOrGroup(selectedLayer)) {
                console.error(`Expected selectedLayer to be frame or group. Got ${selectedLayer.type} `);
            }
            let tempOutput = selectedLayer.findAll((n) => {
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
                let hasFill = "fills" in n && (n === null || n === void 0 ? void 0 : n.fills[0]) !== undefined;
                let hasStroke = "strokes" in n && (n === null || n === void 0 ? void 0 : n.strokes[0]) !== undefined;
                const hasFillOrStroke = hasFill || hasStroke;
                const nodeIsValidNodeType = acceptableNodetypes.some((nodeType) => n.type === nodeType);
                return nodeIsValidNodeType && hasFillOrStroke;
            });
            return [...tempOutput];
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
        return _oneCorePaintStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"].some((style) => {
            return colorInHex === style.color.color.hex;
        }, false);
    };
    const doesKeyMatchAnyOneCoreColorStyleKey = (key) => {
        return _oneCorePaintStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"].some((style) => {
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
            _oneCorePaintStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"].map((style) => {
                if (color.colorStyleId.includes(style.key)) {
                    colors[index] = Object.assign(Object.assign({}, color), { styleName: style.name });
                }
                return;
            });
        });
        return colors;
    })();
    const colorsNotUsingOneCoreColorStyle = allInstancesOfColor.filter((color) => {
        return !_oneCorePaintStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"].some((oneCoreColor) => {
            return color.colorStyleId.includes(oneCoreColor.key);
        });
    });
    const oneCoreColorStyleCoverage = `${((colorsUsingOneCoreStyle.length / allInstancesOfColor.length) * 100).toFixed(2)}%`;
    const almostAllColors = [...colorsUsingOneCoreStyle, ...colorsNotUsingOneCoreColorStyle];
    const idsOfAllInstancesOfColor = allInstancesOfColor.map((color) => color.colorId);
    const idsOfAlmostAllColors = almostAllColors.map((color) => color.colorId);
    const colorStats = {
        allInstancesOfColor: allInstancesOfColor,
        colorsWithColorStyle: colorsWithColorStyle,
        colorsUsingOneCoreStyle: colorsUsingOneCoreStyle,
        colorsNotUsingOneCoreColorStyle: colorsNotUsingOneCoreColorStyle,
        oneCoreColorStyleCoverage: oneCoreColorStyleCoverage,
        almostAllColors: almostAllColors,
        idsOfAllInstancesOfColor: idsOfAllInstancesOfColor,
        idsOfAlmostAllColors: idsOfAlmostAllColors,
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
            message: getColorStats(),
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
    name: "Roles/Interactive/Interactive Primary",
    key: "18ecca921484122521d9d31c21d32217b76a8214",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#017c86",
        rgb: {
          r: 0.003921568859368563,
          g: 0.48627451062202454,
          b: 0.5254902243614197,
        },
      },
    },
  },
  {
    name: "Roles/Interactive/Interactive Secondary",
    key: "db0a463191174195a36cc623f1d1c0749a50723d",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#e7e9e9",
        rgb: {
          r: 0.9058823585510254,
          g: 0.9137254953384399,
          b: 0.9137254953384399,
        },
      },
    },
  },
  {
    name: "Roles/Interactive/Interactive Danger",
    key: "b56c9141946aadb53bb58f7f375fb3ba2b477d02",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#df2d24",
        rgb: {
          r: 0.8745098114013672,
          g: 0.1764705926179886,
          b: 0.1411764770746231,
        },
      },
    },
  },
  {
    name: "Roles/Text/Text Primary",
    key: "7a0973353ae458a5a279bfe4c2db49ccc521a9bb",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#283636",
        rgb: {
          r: 0.1568627506494522,
          g: 0.21176470816135406,
          b: 0.21176470816135406,
        },
      },
    },
  },
  {
    name: "Roles/Text/Text Secondary",
    key: "611ac06128407ba765571cde396c337f42e5333e",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#556060",
        rgb: {
          r: 0.3333333432674408,
          g: 0.3764705955982208,
          b: 0.3764705955982208,
        },
      },
    },
  },
  {
    name: "Roles/Text/Text Emphasis",
    key: "02bca3df7a6d4fa8638173c47878d7264447b065",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#151d1d",
        rgb: {
          r: 0.08235294371843338,
          g: 0.11372549086809158,
          b: 0.11372549086809158,
        },
      },
    },
  },
  {
    name: "Roles/Text/Text Muted",
    key: "ad7ad213369a33fb764108dba530dbaca382f7e1",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#6e7575",
        rgb: {
          r: 0.4313725531101227,
          g: 0.4588235318660736,
          b: 0.4588235318660736,
        },
      },
    },
  },
  {
    name: "Roles/Text/Text Disabled",
    key: "7568de7c7daef24adddacbe7210581de017a488b",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#9fa5a5",
        rgb: {
          r: 0.6235294342041016,
          g: 0.6470588445663452,
          b: 0.6470588445663452,
        },
      },
    },
  },
  {
    name: "Roles/Background/Background App",
    key: "4a9b88c71d8dc24f0b660278c25653269c076156",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#f3f4f4",
        rgb: {
          r: 0.9529411792755127,
          g: 0.95686274766922,
          b: 0.95686274766922,
        },
      },
    },
  },
  {
    name: "Roles/Background/Background Surface",
    key: "b523aa6f31036ff72c60877cffdab99a043dd022",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#ffffff",
        rgb: {
          r: 1,
          g: 1,
          b: 1,
        },
      },
    },
  },
  {
    name: "Roles/Background/Background Surface Inverted",
    key: "6578690fbc8a65324fab91790d8cb587d0ceb197",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#283636",
        rgb: {
          r: 0.1568627506494522,
          g: 0.21176470816135406,
          b: 0.21176470816135406,
        },
      },
    },
  },
  {
    name: "Roles/States/States Success",
    key: "c325f3de317021942562315bcc3093db9aabe82d",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#02865b",
        rgb: {
          r: 0.007843137718737125,
          g: 0.5254902243614197,
          b: 0.35686275362968445,
        },
      },
    },
  },
  {
    name: "Roles/States/States Warning",
    key: "2151898447482186a20ba787934b531801b479c9",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#aa6701",
        rgb: {
          r: 0.6666666865348816,
          g: 0.40392157435417175,
          b: 0.003921568859368563,
        },
      },
    },
  },
  {
    name: "Roles/States/States Error",
    key: "93359dd10df621b92d5c24730042f7c79d8ac224",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#df2d24",
        rgb: {
          r: 0.8745098114013672,
          g: 0.1764705926179886,
          b: 0.1411764770746231,
        },
      },
    },
  },
  {
    name: "Roles/States/States Disabled",
    key: "a3a377a84591e52d7f935e5322f9432fba422e47",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#9fa5a5",
        rgb: {
          r: 0.6235294342041016,
          g: 0.6470588445663452,
          b: 0.6470588445663452,
        },
      },
    },
  },
  {
    name: "Roles/Border/Border Regular",
    key: "5d32ea4c8c38a389f2a70f4381aa689b6aa57e4d",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#e7e9e9",
        rgb: {
          r: 0.9058823585510254,
          g: 0.9137254953384399,
          b: 0.9137254953384399,
        },
      },
    },
  },
  {
    name: "Roles/Border/Border Subtle",
    key: "6e195286925da9647c3623a634a6e8d1973af065",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#f3f4f4",
        rgb: {
          r: 0.9529411792755127,
          g: 0.95686274766922,
          b: 0.95686274766922,
        },
      },
    },
  },
  {
    name: "Roles/Border/Border Strong",
    key: "0fbd7b53f591117775241cf3fd7101488df5397f",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#d1d4d4",
        rgb: {
          r: 0.8196078538894653,
          g: 0.8313725590705872,
          b: 0.8313725590705872,
        },
      },
    },
  },
  {
    name: "Roles/Entity Status/Entity Status Operational",
    key: "2a7aad3c9369718bf40fe039cad6db56e4ec9c15",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#01b076",
        rgb: {
          r: 0.003921568859368563,
          g: 0.6901960968971252,
          b: 0.4627451002597809,
        },
      },
    },
  },
  {
    name: "Roles/Entity Status/Entity Status Degraded",
    key: "57979f3be17fbd5fa8b477095e7aac27456b6170",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#f0b400",
        rgb: {
          r: 0.9411764740943909,
          g: 0.7058823704719543,
          b: 0,
        },
      },
    },
  },
  {
    name: "Roles/Entity Status/Entity Status Anomaly",
    key: "1ea1ea6e861ec14d3dc04de659adf746f8f9af5c",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#f07a0e",
        rgb: {
          r: 0.9411764740943909,
          g: 0.47843137383461,
          b: 0.054901961237192154,
        },
      },
    },
  },
  {
    name: "Roles/Entity Status/Entity Status Unavailable",
    key: "e89f9c93bdfbbb82db5f3de40a2d2f21ba9a9856",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#f5554b",
        rgb: {
          r: 0.9607843160629272,
          g: 0.3333333432674408,
          b: 0.29411765933036804,
        },
      },
    },
  },
  {
    name: "Roles/Entity Status/Entity Status Unknown",
    key: "1e51898cf26af891a8b9cf2439eda59285784733",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#9fa5a5",
        rgb: {
          r: 0.6235294342041016,
          g: 0.6470588445663452,
          b: 0.6470588445663452,
        },
      },
    },
  },
  {
    name: "Gray / Gray 1",
    key: "9735f199dc6008c4fae3a57e99164dd616e0c741",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#fafbfb",
        rgb: {
          r: 0.9803921580314636,
          g: 0.9843137264251709,
          b: 0.9843137264251709,
        },
      },
    },
  },
  {
    name: "Gray/Gray 2",
    key: "6129b49374bfb4725f849ab5eb26b0b9128dde22",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#f3f4f4",
        rgb: {
          r: 0.9529411792755127,
          g: 0.95686274766922,
          b: 0.95686274766922,
        },
      },
    },
  },
  {
    name: "Gray/Gray 3",
    key: "0e250f7120c059156c744eac694256bc5ebb43a6",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#e7e9e9",
        rgb: {
          r: 0.9058823585510254,
          g: 0.9137254953384399,
          b: 0.9137254953384399,
        },
      },
    },
  },
  {
    name: "Gray/Gray 4",
    key: "b598f7f68abbbce30d94fdeff5a29e650072ed27",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#d1d4d4",
        rgb: {
          r: 0.8196078538894653,
          g: 0.8313725590705872,
          b: 0.8313725590705872,
        },
      },
    },
  },
  {
    name: "Gray / Gray 5",
    key: "20f646bc210260f90417f05c1bdf443718b26fbc",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#9fa5a5",
        rgb: {
          r: 0.6235294342041016,
          g: 0.6470588445663452,
          b: 0.6470588445663452,
        },
      },
    },
  },
  {
    name: "Gray / Gray 6",
    key: "8281c95e91465ff01741d9b12ab29b9d95e56d28",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#6e7575",
        rgb: {
          r: 0.4313725531101227,
          g: 0.4588235318660736,
          b: 0.4588235318660736,
        },
      },
    },
  },
  {
    name: "Gray / Gray 7",
    key: "6b3a4239699f66a342fac0ac3ee5ca92360c408b",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#556060",
        rgb: {
          r: 0.3333333432674408,
          g: 0.3764705955982208,
          b: 0.3764705955982208,
        },
      },
    },
  },
  {
    name: "Gray / Gray 8",
    key: "39eb766b93e0715574c884380cb3b7f9b9b32778",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#3f4c4c",
        rgb: {
          r: 0.24705882370471954,
          g: 0.2980392277240753,
          b: 0.2980392277240753,
        },
      },
    },
  },
  {
    name: "Gray / Gray 9",
    key: "0f0f11a1d81ad608faa88693d0d884f021bf1eaa",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#283636",
        rgb: {
          r: 0.1568627506494522,
          g: 0.21176470816135406,
          b: 0.21176470816135406,
        },
      },
    },
  },
  {
    name: "Gray / Gray 10",
    key: "9000de94da7b0ca7ee9270c2dccb8f3772f0fa06",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#151d1d",
        rgb: {
          r: 0.08235294371843338,
          g: 0.11372549086809158,
          b: 0.11372549086809158,
        },
      },
    },
  },
  {
    name: "Teal / Teal 1",
    key: "aa7f67d5ae20c7cb53ff5135c4b78df8f41cf89f",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#f0fbfc",
        rgb: {
          r: 0.9411764740943909,
          g: 0.9843137264251709,
          b: 0.9882352948188782,
        },
      },
    },
  },
  {
    name: "Teal / Teal 2",
    key: "e133acbfa09e21afb61ae280d033fba7e8732148",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#c6f2f6",
        rgb: {
          r: 0.7764706015586853,
          g: 0.9490196108818054,
          b: 0.9647058844566345,
        },
      },
    },
  },
  {
    name: "Teal / Teal 3",
    key: "32a8fda65109fccead58f0d588c2a739b1c2eb13",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#6cdae3",
        rgb: {
          r: 0.42352941632270813,
          g: 0.8549019694328308,
          b: 0.8901960849761963,
        },
      },
    },
  },
  {
    name: "Teal/Teal 4",
    key: "36cd80a4601f79f541e0bfc83a914a4d1ab4f372",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#27bac8",
        rgb: {
          r: 0.15294118225574493,
          g: 0.729411780834198,
          b: 0.7843137383460999,
        },
      },
    },
  },
  {
    name: "Teal/Teal 5",
    key: "7eb3fe1c9e35ea795820f135fd30c1ba4d08a976",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#019caa",
        rgb: {
          r: 0.003921568859368563,
          g: 0.6117647290229797,
          b: 0.6666666865348816,
        },
      },
    },
  },
  {
    name: "Teal/Teal 6",
    key: "3e2c6cbf4bed8c537ad017fe9155f84ac533acdf",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#017c86",
        rgb: {
          r: 0.003921568859368563,
          g: 0.48627451062202454,
          b: 0.5254902243614197,
        },
      },
    },
  },
  {
    name: "Teal / Teal 7",
    key: "2cba9ceb8ce12343bd852f02c59922e3d6efe702",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#02636b",
        rgb: {
          r: 0.007843137718737125,
          g: 0.38823530077934265,
          b: 0.41960784792900085,
        },
      },
    },
  },
  {
    name: "Teal / Teal 8",
    key: "35433f44abbac69f6a4047a0eeb504fc87e69785",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#004b51",
        rgb: {
          r: 0,
          g: 0.29411765933036804,
          b: 0.3176470696926117,
        },
      },
    },
  },
  {
    name: "Teal / Teal 9",
    key: "cd73a6e378f9ed2a17cf3880b055873cec282c63",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#00373c",
        rgb: {
          r: 0,
          g: 0.21568627655506134,
          b: 0.23529411852359772,
        },
      },
    },
  },
  {
    name: "Teal / Teal 10",
    key: "bee740dee631198c641768cc532b6cafc383138a",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#021e1f",
        rgb: {
          r: 0.007843137718737125,
          g: 0.11764705926179886,
          b: 0.12156862765550613,
        },
      },
    },
  },
  {
    name: "Blue / Blue 1",
    key: "fbe436bbb36d7e7452de2c3021e3ab00ef8366f4",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#f6fafd",
        rgb: {
          r: 0.9647058844566345,
          g: 0.9803921580314636,
          b: 0.9921568632125854,
        },
      },
    },
  },
  {
    name: "Blue / Blue 2",
    key: "ea45071f90ac59db22b60419416e435505cdaa11",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#e1edff",
        rgb: {
          r: 0.8823529481887817,
          g: 0.929411768913269,
          b: 1,
        },
      },
    },
  },
  {
    name: "Blue / Blue 3",
    key: "df3337bf6731dce5afd266595961ea0255118317",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#a4d1fc",
        rgb: {
          r: 0.6431372761726379,
          g: 0.8196078538894653,
          b: 0.9882352948188782,
        },
      },
    },
  },
  {
    name: "Blue / Blue 4",
    key: "e5782cccb2c1f136196d142acf896dfe11ba01d9",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#63adfa",
        rgb: {
          r: 0.38823530077934265,
          g: 0.6784313917160034,
          b: 0.9803921580314636,
        },
      },
    },
  },
  {
    name: "Blue / Blue 5",
    key: "818fa9c049d0a0e01a96e71381182854f4a527c1",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#278ef8",
        rgb: {
          r: 0.15294118225574493,
          g: 0.5568627715110779,
          b: 0.9725490212440491,
        },
      },
    },
  },
  {
    name: "Blue / Blue 6",
    key: "08f69ba4346ee0e812902be29c580606329fceea",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#0c74df",
        rgb: {
          r: 0.0470588244497776,
          g: 0.45490196347236633,
          b: 0.8745098114013672,
        },
      },
    },
  },
  {
    name: "Blue / Blue 7",
    key: "9dd245bb6cbb4ef59cb46ba6cc19257420374527",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#0856aa",
        rgb: {
          r: 0.0313725508749485,
          g: 0.33725491166114807,
          b: 0.6666666865348816,
        },
      },
    },
  },
  {
    name: "Blue / Blue 8",
    key: "89d8cc1b79da057b72265d64cf5d696e245fafaa",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#074382",
        rgb: {
          r: 0.027450980618596077,
          g: 0.26274511218070984,
          b: 0.5098039507865906,
        },
      },
    },
  },
  {
    name: "Blue / Blue 9",
    key: "d9003c2d8d6a2ad943b6c077e059aa6d8f872ca2",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#042a51",
        rgb: {
          r: 0.01568627543747425,
          g: 0.16470588743686676,
          b: 0.3176470696926117,
        },
      },
    },
  },
  {
    name: "Blue / Blue 10",
    key: "000bfc9cf63573d317a55e9fb5779f5ecab5e1e1",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#03172b",
        rgb: {
          r: 0.0117647061124444,
          g: 0.09019608050584793,
          b: 0.16862745583057404,
        },
      },
    },
  },
  {
    name: "Green / Green 1",
    key: "ddd54e322e17fc2a58a47b32e02397936006e325",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#eafff2",
        rgb: {
          r: 0.9176470637321472,
          g: 1,
          b: 0.9490196108818054,
        },
      },
    },
  },
  {
    name: "Green / Green 2",
    key: "18481a1bb12c0faea3f25f7b0e33182d891a9bf3",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#bdf7d7",
        rgb: {
          r: 0.7411764860153198,
          g: 0.9686274528503418,
          b: 0.843137264251709,
        },
      },
    },
  },
  {
    name: "Green / Green 3",
    key: "63ec99d920c8f29ccdc21ddd0e974a0c567ed57e",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#6beaae",
        rgb: {
          r: 0.41960784792900085,
          g: 0.9176470637321472,
          b: 0.6823529601097107,
        },
      },
    },
  },
  {
    name: "Green / Green 4",
    key: "22aa4d5f779f9fd8d3d04f749176f2ec79411d0a",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#01c884",
        rgb: {
          r: 0.003921568859368563,
          g: 0.7843137383460999,
          b: 0.5176470875740051,
        },
      },
    },
  },
  {
    name: "Green / Green 5",
    key: "8b2d7efddf3ceefaa8a4a4e4cd88487e47d7ca06",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#01b076",
        rgb: {
          r: 0.003921568859368563,
          g: 0.6901960968971252,
          b: 0.4627451002597809,
        },
      },
    },
  },
  {
    name: "Green / Green 6",
    key: "d2212bf5ca7abce01f18c5109437efd5ee9669b3",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#02865b",
        rgb: {
          r: 0.007843137718737125,
          g: 0.5254902243614197,
          b: 0.35686275362968445,
        },
      },
    },
  },
  {
    name: "Green / Green 7",
    key: "cf25f655f3c7523b827b689641865af1c26c24ff",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#026747",
        rgb: {
          r: 0.007843137718737125,
          g: 0.40392157435417175,
          b: 0.27843138575553894,
        },
      },
    },
  },
  {
    name: "Green / Green 8",
    key: "edf661925f9de317149b42c36a5cf2a0b5ec4cf1",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#014d36",
        rgb: {
          r: 0.003921568859368563,
          g: 0.3019607961177826,
          b: 0.21176470816135406,
        },
      },
    },
  },
  {
    name: "Green / Green 9",
    key: "1bb28a49f327260d2b93572f6880b91fdb851ed2",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#013927",
        rgb: {
          r: 0.003921568859368563,
          g: 0.2235294133424759,
          b: 0.15294118225574493,
        },
      },
    },
  },
  {
    name: "Green / Green 10",
    key: "fb3ac1bdedc70eed68e2c1a4198c05ac165699ff",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#021200",
        rgb: {
          r: 0.007843137718737125,
          g: 0.07058823853731155,
          b: 0,
        },
      },
    },
  },
  {
    name: "Yellow/Yellow 1",
    key: "c7b25901352eb79a0e553e74fae58d4a2b6824e6",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#fefae9",
        rgb: {
          r: 0.9960784316062927,
          g: 0.9803921580314636,
          b: 0.9137254953384399,
        },
      },
    },
  },
  {
    name: "Yellow/Yellow 2",
    key: "a93676a5061492778253ffb63eeaaa373e29b6b6",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#fdf2c4",
        rgb: {
          r: 0.9921568632125854,
          g: 0.9490196108818054,
          b: 0.7686274647712708,
        },
      },
    },
  },
  {
    name: "Yellow/Yellow 3",
    key: "adf062c8fe17f2d56d430c4e6476ecff556f4752",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#fce591",
        rgb: {
          r: 0.9882352948188782,
          g: 0.8980392217636108,
          b: 0.5686274766921997,
        },
      },
    },
  },
  {
    name: "Yellow/Yellow 4",
    key: "2f9ea0b27f59778db5b3abaa8d4357faf1c8f48c",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#ffd23d",
        rgb: {
          r: 1,
          g: 0.8235294222831726,
          b: 0.239215686917305,
        },
      },
    },
  },
  {
    name: "Yellow/Yellow 5",
    key: "eb1e3a042ee5d8b82387404663966e5f9d08cf3c",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#f0b400",
        rgb: {
          r: 0.9411764740943909,
          g: 0.7058823704719543,
          b: 0,
        },
      },
    },
  },
  {
    name: "Yellow/Yellow 6",
    key: "2b3db4149d5459afee3316f7faed2fb03342a21a",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#aa6701",
        rgb: {
          r: 0.6666666865348816,
          g: 0.40392157435417175,
          b: 0.003921568859368563,
        },
      },
    },
  },
  {
    name: "Yellow/Yellow 7",
    key: "216752b52cd243d7cc718267aafcdf2a2081c830",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#864700",
        rgb: {
          r: 0.5254902243614197,
          g: 0.27843138575553894,
          b: 0,
        },
      },
    },
  },
  {
    name: "Yellow/Yellow 8",
    key: "0313f7889a97d8ea819af7835d38e426090acda9",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#6c3401",
        rgb: {
          r: 0.42352941632270813,
          g: 0.20392157137393951,
          b: 0.003921568859368563,
        },
      },
    },
  },
  {
    name: "Yellow/Yellow 9",
    key: "0ac715e4ca6ba525cc0d0e6ea97f9fb9b3b164f6",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#461e02",
        rgb: {
          r: 0.27450981736183167,
          g: 0.11764705926179886,
          b: 0.007843137718737125,
        },
      },
    },
  },
  {
    name: "Yellow/Yellow 10",
    key: "6be7e8070eb6545812f8c6b02f80529a47ca843b",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#261205",
        rgb: {
          r: 0.14901961386203766,
          g: 0.07058823853731155,
          b: 0.019607843831181526,
        },
      },
    },
  },
  {
    name: "Orange/Orange 1",
    key: "38c85c083760f912390291ec334a5f8e68bf0cdb",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#fef5e9",
        rgb: {
          r: 0.9960784316062927,
          g: 0.9607843160629272,
          b: 0.9137254953384399,
        },
      },
    },
  },
  {
    name: "Orange/Orange 2",
    key: "d102496b813ea778d53411f547c8d9fa3f471241",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#fde7c9",
        rgb: {
          r: 0.9921568632125854,
          g: 0.9058823585510254,
          b: 0.7882353067398071,
        },
      },
    },
  },
  {
    name: "Orange/Orange 3",
    key: "74333bc192b3180d10e07369e1e7c4e6d13bcc3e",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#fcca8d",
        rgb: {
          r: 0.9882352948188782,
          g: 0.7921568751335144,
          b: 0.5529412031173706,
        },
      },
    },
  },
  {
    name: "Orange/Orange 4",
    key: "7ba53ba1a41df84bc877694229db427a2bf65c36",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#faa44a",
        rgb: {
          r: 0.9803921580314636,
          g: 0.6431372761726379,
          b: 0.29019609093666077,
        },
      },
    },
  },
  {
    name: "Orange/Orange 5",
    key: "84b6b043f519774501729556e0cb04ebe435814f",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#f07a0e",
        rgb: {
          r: 0.9411764740943909,
          g: 0.47843137383461,
          b: 0.054901961237192154,
        },
      },
    },
  },
  {
    name: "Orange/Orange 6",
    key: "03c8594e31439e63ec6861b83e08b8ba9777db71",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#c25705",
        rgb: {
          r: 0.7607843279838562,
          g: 0.34117648005485535,
          b: 0.019607843831181526,
        },
      },
    },
  },
  {
    name: "Orange/Orange 7",
    key: "1acaa03892a52b5ea7d01ee4ae1a6e05bee0856f",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#973a08",
        rgb: {
          r: 0.5921568870544434,
          g: 0.22745098173618317,
          b: 0.0313725508749485,
        },
      },
    },
  },
  {
    name: "Orange/Orange 8",
    key: "31ea2c58a96a82284d3b1576d71b2459faab4750",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#7c2707",
        rgb: {
          r: 0.48627451062202454,
          g: 0.15294118225574493,
          b: 0.027450980618596077,
        },
      },
    },
  },
  {
    name: "Orange/Orange 9",
    key: "f69608f1a16a93e068b3a7a7e4e357c4ec2f095e",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#4d1804",
        rgb: {
          r: 0.3019607961177826,
          g: 0.0941176488995552,
          b: 0.01568627543747425,
        },
      },
    },
  },
  {
    name: "Orange/Orange 10",
    key: "2b198d78c0c30c594261081d716a4eccf0f200a5",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#2d0d03",
        rgb: {
          r: 0.1764705926179886,
          g: 0.05098039284348488,
          b: 0.0117647061124444,
        },
      },
    },
  },
  {
    name: "Red/Red 1",
    key: "3afe02ea7a11b9bf22b5bf59964ecf507dfd13f6",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#fdf4f4",
        rgb: {
          r: 0.9921568632125854,
          g: 0.95686274766922,
          b: 0.95686274766922,
        },
      },
    },
  },
  {
    name: "Red/Red 2",
    key: "cccda026b8aacd020f4d9b22235c18c61a1b0fd4",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#fee5e5",
        rgb: {
          r: 0.9960784316062927,
          g: 0.8980392217636108,
          b: 0.8980392217636108,
        },
      },
    },
  },
  {
    name: "Red/Red 3",
    key: "6d800a7819d7819ff0aa18834c53c22ef0fbe118",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#fcbdba",
        rgb: {
          r: 0.9882352948188782,
          g: 0.7411764860153198,
          b: 0.729411780834198,
        },
      },
    },
  },
  {
    name: "Red/Red 4",
    key: "9c962c5ab22dc6f43ee01fa596208fc6f772223c",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#f98982",
        rgb: {
          r: 0.9764705896377563,
          g: 0.5372549295425415,
          b: 0.5098039507865906,
        },
      },
    },
  },
  {
    name: "Red/Red 5",
    key: "90c4c6a1ded06965d0dba3534f82edb1b9570b1a",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#f5554b",
        rgb: {
          r: 0.9607843160629272,
          g: 0.3333333432674408,
          b: 0.29411765933036804,
        },
      },
    },
  },
  {
    name: "Red/Red 6",
    key: "03b2309cdd75da073fdb77477db9ce4e957eda5f",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#df2d24",
        rgb: {
          r: 0.8745098114013672,
          g: 0.1764705926179886,
          b: 0.1411764770746231,
        },
      },
    },
  },
  {
    name: "Red/Red 7",
    key: "14b388b3ec907b4aaff7cfe2a23d1fa81dffc07f",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#b00f0a",
        rgb: {
          r: 0.6901960968971252,
          g: 0.05882352963089943,
          b: 0.03921568766236305,
        },
      },
    },
  },
  {
    name: "Red/Red 8",
    key: "b5b25376d566bc177414c76588634bbc349fd44b",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#8e0000",
        rgb: {
          r: 0.5568627715110779,
          g: 0,
          b: 0,
        },
      },
    },
  },
  {
    name: "Red/Red 9",
    key: "cab6ae8c5b6634d662f8b1b13151b4ee7245a159",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#5a0100",
        rgb: {
          r: 0.3529411852359772,
          g: 0.003921568859368563,
          b: 0,
        },
      },
    },
  },
  {
    name: "Red/Red 10",
    key: "6551fcb76d0eede4075adc6ed4dc2881541177a2",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#380000",
        rgb: {
          r: 0.21960784494876862,
          g: 0,
          b: 0,
        },
      },
    },
  },
  {
    name: "Basics/White",
    key: "72c2ccbff140288907986dc6f0aacd111ed1a43a",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#ffffff",
        rgb: {
          r: 1,
          g: 1,
          b: 1,
        },
      },
    },
  },
  {
    name: "Basics/Black",
    key: "774f267303d7d908ef0cf8dee5b41cb940c6241e",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        hex: "#000000",
        rgb: {
          r: 0,
          g: 0,
          b: 0,
        },
      },
    },
  },
  {
    name: "_Roles/Background/Background Light Transparent",
    key: "ce9c09a8a9445a076e56c39ab02fa4063d231053",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 0.20000000298023224,
      blendMode: "NORMAL",
      color: {
        hex: "#ffffff",
        rgb: {
          r: 1,
          g: 1,
          b: 1,
        },
      },
    },
  },
  {
    name: "_Roles/Background/Background Dark Transparent",
    key: "a47edce2a78d67ac531a36e865d140c419a747d5",
    description: "",
    color: {
      type: "SOLID",
      visible: true,
      opacity: 0.07999999821186066,
      blendMode: "NORMAL",
      color: {
        hex: "#000000",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvYXBwbHlNYXRyaXhUb1BvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2Nsb25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2NvbnZlcnRDb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9leHRyYWN0SW1hZ2VDcm9wUGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2V4dHJhY3RSYWRpYWxPckRpYW1vbmRHcmFkaWVudFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9maW5kTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRBbGxGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRCb3VuZGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvZ2V0Q1NTU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldE5vZGVJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9nZXRQYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2dldFJlbGF0aXZlUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaGFzQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNQYXJ0T2ZJbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1BhcnRPZk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvaXNUeXBlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9pc1Zpc2libGVOb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL2xvYWRGb250cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpZ21hLXBsdWdpbi9oZWxwZXJzL2Rpc3QvaGVscGVycy9sb2FkVW5pcXVlRm9udHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvbm9kZVRvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3BhcnNlVGV4dFN0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlnbWEtcGx1Z2luL2hlbHBlcnMvZGlzdC9oZWxwZXJzL3NldENoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2hlbHBlcnMvdG9wTGV2ZWxGcmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaWdtYS1wbHVnaW4vaGVscGVycy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jbG9uZURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcUJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcVdpdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdHJpeC1pbnZlcnNlL21hdHJpeC1pbnZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkLXJhbmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vb25lQ29yZVBhaW50U3R5bGVzLmpzIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDOzs7Ozs7Ozs7Ozs7QUN4QmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3BCYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcEJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBDOzs7Ozs7Ozs7Ozs7QUMxRWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNwQmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2RhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsMENBQTBDLG1CQUFPLENBQUMsdUZBQWU7O0FBRWpFLHdDQUF3QyxtQkFBTyxDQUFDLG1GQUFhOztBQUU3RCxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbkJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxtQkFBTyxDQUFDLDBEQUFpQjs7QUFFakUseUNBQXlDLG1CQUFPLENBQUMsNERBQWtCOztBQUVuRSx1Q0FBdUMsbUJBQU8sQ0FBQyx3REFBZ0I7O0FBRS9ELDBDQUEwQyxtQkFBTyxDQUFDLHVGQUFlOztBQUVqRSx3Q0FBd0MsbUJBQU8sQ0FBQyxtRkFBYTs7QUFFN0Qsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0gsc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7O0FBRUwsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVgsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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TCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVlLGlGQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7QUN0ekRsQyxlIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wbHVnaW4vY29udHJvbGxlci50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5hcHBseU1hdHJpeFRvUG9pbnQgPSBhcHBseU1hdHJpeFRvUG9pbnQ7XG5cbmZ1bmN0aW9uIGFwcGx5TWF0cml4VG9Qb2ludChtYXRyaXgsIHBvaW50KSB7XG4gIHJldHVybiBbcG9pbnRbMF0gKiBtYXRyaXhbMF1bMF0gKyBwb2ludFsxXSAqIG1hdHJpeFswXVsxXSArIG1hdHJpeFswXVsyXSwgcG9pbnRbMF0gKiBtYXRyaXhbMV1bMF0gKyBwb2ludFsxXSAqIG1hdHJpeFsxXVsxXSArIG1hdHJpeFsxXVsyXV07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjbG9uZTtcblxuLyoqXG4gKiAgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGNsb25lIHRoZSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnbnVtYmVyJyB8fCB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnYm9vbGVhbicgfHwgdHlwZSA9PT0gJ3N5bWJvbCcgfHwgdmFsID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgcmV0dXJuIHZhbC5tYXAoY2xvbmUpO1xuICAgIH0gZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG8gPSB7fTtcblxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsKSB7XG4gICAgICAgIG9ba2V5XSA9IGNsb25lKHZhbFtrZXldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG87XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgJ3Vua25vd24nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5maWdtYVJHQlRvV2ViUkdCID0gZmlnbWFSR0JUb1dlYlJHQjtcbmV4cG9ydHMud2ViUkdCVG9GaWdtYVJHQiA9IHdlYlJHQlRvRmlnbWFSR0I7XG5leHBvcnRzLmZpZ21hUkdCVG9IZXggPSBmaWdtYVJHQlRvSGV4O1xuZXhwb3J0cy5oZXhUb0ZpZ21hUkdCID0gaGV4VG9GaWdtYVJHQjtcbmNvbnN0IG5hbWVzUkdCID0gWydyJywgJ2cnLCAnYiddO1xuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGNvbnZlcnRzIGZpZ21hIGNvbG9yIHRvIFJHQihBKSAoYXJyYXkpXG4gKi9cbi8vIGZpZ21hUkdCVG9XZWJSR0Ioe3I6IDAuODg3NDk5OTg4MDc5MDcxLCBnOiAwLjA3MDU4ODIzODUzNzMxMTU1LCBiOiAwLjA2NjU2MjQ3Mzc3Mzk1NjN9KVxuLy89PiBbMjI2LCAxOCwgMTddXG5cbmZ1bmN0aW9uIGZpZ21hUkdCVG9XZWJSR0IoY29sb3IpIHtcbiAgY29uc3QgcmdiID0gW107XG4gIG5hbWVzUkdCLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICByZ2JbaV0gPSBNYXRoLnJvdW5kKGNvbG9yW2VdICogMjU1KTtcbiAgfSk7XG4gIGlmIChjb2xvclsnYSddICE9PSB1bmRlZmluZWQpIHJnYlszXSA9IE1hdGgucm91bmQoY29sb3JbJ2EnXSAqIDEwMCkgLyAxMDA7XG4gIHJldHVybiByZ2I7XG59XG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gY29udmVydHMgUkdCKEEpIGNvbG9yIChhcnJheSkgdG8gZmlnbWEgY29sb3JcbiAqL1xuLy8gd2ViUkdCVG9GaWdtYVJHQihbMjI2LCAxOCwgMTddKVxuLy89PiB7cjogMC44ODYyNzQ1MDk4MDM5MjE1LCBnOiAwLjA3MDU4ODIzNTI5NDExNzY1LCBiOiAwLjA2NjY2NjY2NjY2NjY2NjY3fVxuXG5cbmZ1bmN0aW9uIHdlYlJHQlRvRmlnbWFSR0IoY29sb3IpIHtcbiAgY29uc3QgcmdiID0ge307XG4gIG5hbWVzUkdCLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICByZ2JbZV0gPSBjb2xvcltpXSAvIDI1NTtcbiAgfSk7XG4gIGlmIChjb2xvclszXSAhPT0gdW5kZWZpbmVkKSByZ2JbJ2EnXSA9IGNvbG9yWzNdO1xuICByZXR1cm4gcmdiO1xufVxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGNvbnZlcnRzIGZpZ21hIGNvbG9yIHRvIEhFWCAoc3RyaW5nKVxuICovXG4vLyBmaWdtYVJHQlRvSGV4KHsgcjogMCwgZzogMC4xLCBiOiAxIH0pXG4vLz0+ICMwMDFhZmZcblxuXG5mdW5jdGlvbiBmaWdtYVJHQlRvSGV4KGNvbG9yKSB7XG4gIGxldCBoZXggPSAnIyc7XG4gIGNvbnN0IHJnYiA9IGZpZ21hUkdCVG9XZWJSR0IoY29sb3IpO1xuICBoZXggKz0gKCgxIDw8IDI0KSArIChyZ2JbMF0gPDwgMTYpICsgKHJnYlsxXSA8PCA4KSArIHJnYlsyXSkudG9TdHJpbmcoMTYpLnNsaWNlKDEpO1xuXG4gIGlmIChyZ2JbM10gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGEgPSBNYXRoLnJvdW5kKHJnYlszXSAqIDI1NSkudG9TdHJpbmcoMTYpO1xuXG4gICAgaWYgKGEubGVuZ3RoID09IDEpIHtcbiAgICAgIGhleCArPSAnMCcgKyBhO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYSAhPT0gJ2ZmJykgaGV4ICs9IGE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGhleDtcbn1cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBjb252ZXJ0cyBIRVggY29sb3IgKHN0cmluZykgdG8gZmlnbWEgY29sb3JcbiAqL1xuLy8gaGV4VG9GaWdtYVJHQigjMDAxYWZmKVxuLy89PiB7IHI6IDAsIGc6IDAuMTAxOTYwNzg0MzEzNzI1NDksIGI6IDEgfVxuXG5cbmZ1bmN0aW9uIGhleFRvRmlnbWFSR0IoY29sb3IpIHtcbiAgbGV0IG9wYWNpdHkgPSAnJztcbiAgY29sb3IgPSBjb2xvci50b0xvd2VyQ2FzZSgpO1xuICBpZiAoY29sb3JbMF0gPT09ICcjJykgY29sb3IgPSBjb2xvci5zbGljZSgxKTtcblxuICBpZiAoY29sb3IubGVuZ3RoID09PSAzKSB7XG4gICAgY29sb3IgPSBjb2xvci5yZXBsYWNlKC8oLikoLikoLik/L2csICckMSQxJDIkMiQzJDMnKTtcbiAgfSBlbHNlIGlmIChjb2xvci5sZW5ndGggPT09IDgpIHtcbiAgICBjb25zdCBhcnIgPSBjb2xvci5tYXRjaCgvKC57Nn0pKC57Mn0pLyk7XG4gICAgY29sb3IgPSBhcnJbMV07XG4gICAgb3BhY2l0eSA9IGFyclsyXTtcbiAgfVxuXG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KGNvbG9yLCAxNik7XG4gIGNvbnN0IHJnYiA9IFtudW0gPj4gMTYsIG51bSA+PiA4ICYgMjU1LCBudW0gJiAyNTVdO1xuXG4gIGlmIChvcGFjaXR5KSB7XG4gICAgcmdiLnB1c2gocGFyc2VJbnQob3BhY2l0eSwgMTYpIC8gMjU1KTtcbiAgICByZXR1cm4gd2ViUkdCVG9GaWdtYVJHQihyZ2IpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB3ZWJSR0JUb0ZpZ21hUkdCKHJnYik7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZXh0cmFjdEltYWdlQ3JvcFBhcmFtcyA9IGV4dHJhY3RJbWFnZUNyb3BQYXJhbXM7XG5cbnZhciBfbWF0cml4SW52ZXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm1hdHJpeC1pbnZlcnNlXCIpKTtcblxudmFyIF9hcHBseU1hdHJpeFRvUG9pbnQgPSByZXF1aXJlKFwiLi9hcHBseU1hdHJpeFRvUG9pbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY2FuIGV4dHJhY3QgdGhlIGltYWdlIGNyb3Agcm90YXRpb24sIHNjYWxlICgvc2l6ZSkgYW5kIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSBzaGFwZVdpZHRoXG4gKiBAcGFyYW0gc2hhcGVIZWlnaHRcbiAqIEBwYXJhbSB0XG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RJbWFnZUNyb3BQYXJhbXMoc2hhcGVXaWR0aCwgc2hhcGVIZWlnaHQsIHQpIHtcbiAgY29uc3QgdHJhbnNmb3JtID0gdC5sZW5ndGggPT09IDIgPyBbLi4udCwgWzAsIDAsIDFdXSA6IFsuLi50XTtcbiAgY29uc3QgbXhJbnYgPSAoMCwgX21hdHJpeEludmVyc2UuZGVmYXVsdCkodHJhbnNmb3JtKTtcbiAgY29uc3QgcG9pbnRzID0gW1swLCAwXSwgWzEsIDBdLCBbMSwgMV0sIFswLCAxXV0ubWFwKHAgPT4gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShteEludiwgcCkpO1xuICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIocG9pbnRzWzFdWzFdIC0gcG9pbnRzWzBdWzFdLCBwb2ludHNbMV1bMF0gLSBwb2ludHNbMF1bMF0pO1xuICBjb25zdCBzeCA9IE1hdGguc3FydChNYXRoLnBvdyhwb2ludHNbMV1bMF0gLSBwb2ludHNbMF1bMF0sIDIpICsgTWF0aC5wb3cocG9pbnRzWzFdWzFdIC0gcG9pbnRzWzBdWzFdLCAyKSk7XG4gIGNvbnN0IHN5ID0gTWF0aC5zcXJ0KE1hdGgucG93KHBvaW50c1syXVswXSAtIHBvaW50c1sxXVswXSwgMikgKyBNYXRoLnBvdyhwb2ludHNbMl1bMV0gLSBwb2ludHNbMV1bMV0sIDIpKTtcbiAgcmV0dXJuIHtcbiAgICByb3RhdGlvbjogYW5nbGUgKiAoMTgwIC8gTWF0aC5QSSksXG4gICAgc2NhbGU6IFtzeCwgc3ldLFxuICAgIHNpemU6IFtzeCAqIHNoYXBlV2lkdGgsIHN5ICogc2hhcGVIZWlnaHRdLFxuICAgIHBvc2l0aW9uOiBbLXBvaW50c1swXVswXSAqIHNoYXBlV2lkdGgsIC1wb2ludHNbMF1bMV0gKiBzaGFwZUhlaWdodF1cbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybSA9IGV4dHJhY3RMaW5lYXJHcmFkaWVudFBhcmFtc0Zyb21UcmFuc2Zvcm07XG5cbnZhciBfbWF0cml4SW52ZXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm1hdHJpeC1pbnZlcnNlXCIpKTtcblxudmFyIF9hcHBseU1hdHJpeFRvUG9pbnQgPSByZXF1aXJlKFwiLi9hcHBseU1hdHJpeFRvUG9pbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY2FuIGV4dHJhY3QgdGhlIHggYW5kIHkgcG9zaXRpb25zIG9mIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBsaW5lYXIgZ3JhZGllbnRcbiAqIChzY2FsZSBpcyBub3QgaW1wb3J0YW50IGhlcmUpXG4gKlxuICogQHBhcmFtIHNoYXBlV2lkdGggbnVtYmVyXG4gKiBAcGFyYW0gc2hhcGVIZWlnaHQgbnVtYmVyXG4gKiBAcGFyYW0gdCBUcmFuc2Zvcm1cbiAqL1xuZnVuY3Rpb24gZXh0cmFjdExpbmVhckdyYWRpZW50UGFyYW1zRnJvbVRyYW5zZm9ybShzaGFwZVdpZHRoLCBzaGFwZUhlaWdodCwgdCkge1xuICBjb25zdCB0cmFuc2Zvcm0gPSB0Lmxlbmd0aCA9PT0gMiA/IFsuLi50LCBbMCwgMCwgMV1dIDogWy4uLnRdO1xuICBjb25zdCBteEludiA9ICgwLCBfbWF0cml4SW52ZXJzZS5kZWZhdWx0KSh0cmFuc2Zvcm0pO1xuICBjb25zdCBzdGFydEVuZCA9IFtbMCwgMC41XSwgWzEsIDAuNV1dLm1hcChwID0+ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobXhJbnYsIHApKTtcbiAgcmV0dXJuIHtcbiAgICBzdGFydDogW3N0YXJ0RW5kWzBdWzBdICogc2hhcGVXaWR0aCwgc3RhcnRFbmRbMF1bMV0gKiBzaGFwZUhlaWdodF0sXG4gICAgZW5kOiBbc3RhcnRFbmRbMV1bMF0gKiBzaGFwZVdpZHRoLCBzdGFydEVuZFsxXVsxXSAqIHNoYXBlSGVpZ2h0XVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXMgPSBleHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXM7XG5cbnZhciBfbWF0cml4SW52ZXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm1hdHJpeC1pbnZlcnNlXCIpKTtcblxudmFyIF9hcHBseU1hdHJpeFRvUG9pbnQgPSByZXF1aXJlKFwiLi9hcHBseU1hdHJpeFRvUG9pbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY2FuIGV4dHJhY3QgdGhlIHJvdGF0aW9uIChpbiBkZWdyZWVzKSwgY2VudGVyIHBvaW50IGFuZCByYWRpdXMgZm9yIGEgcmFkaWFsIG9yIGRpYW1vbmQgZ3JhZGllbnRcbiAqXG4gKiBAcGFyYW0gc2hhcGVXaWR0aFxuICogQHBhcmFtIHNoYXBlSGVpZ2h0XG4gKiBAcGFyYW0gdFxuICovXG5mdW5jdGlvbiBleHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXMoc2hhcGVXaWR0aCwgc2hhcGVIZWlnaHQsIHQpIHtcbiAgY29uc3QgdHJhbnNmb3JtID0gdC5sZW5ndGggPT09IDIgPyBbLi4udCwgWzAsIDAsIDFdXSA6IFsuLi50XTtcbiAgY29uc3QgbXhJbnYgPSAoMCwgX21hdHJpeEludmVyc2UuZGVmYXVsdCkodHJhbnNmb3JtKTtcbiAgY29uc3QgY2VudGVyUG9pbnQgPSAoMCwgX2FwcGx5TWF0cml4VG9Qb2ludC5hcHBseU1hdHJpeFRvUG9pbnQpKG14SW52LCBbMC41LCAwLjVdKTtcbiAgY29uc3QgcnhQb2ludCA9ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobXhJbnYsIFsxLCAwLjVdKTtcbiAgY29uc3QgcnlQb2ludCA9ICgwLCBfYXBwbHlNYXRyaXhUb1BvaW50LmFwcGx5TWF0cml4VG9Qb2ludCkobXhJbnYsIFswLjUsIDFdKTtcbiAgY29uc3QgcnggPSBNYXRoLnNxcnQoTWF0aC5wb3cocnhQb2ludFswXSAtIGNlbnRlclBvaW50WzBdLCAyKSArIE1hdGgucG93KHJ4UG9pbnRbMV0gLSBjZW50ZXJQb2ludFsxXSwgMikpO1xuICBjb25zdCByeSA9IE1hdGguc3FydChNYXRoLnBvdyhyeVBvaW50WzBdIC0gY2VudGVyUG9pbnRbMF0sIDIpICsgTWF0aC5wb3cocnlQb2ludFsxXSAtIGNlbnRlclBvaW50WzFdLCAyKSk7XG4gIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuKChyeFBvaW50WzFdIC0gY2VudGVyUG9pbnRbMV0pIC8gKHJ4UG9pbnRbMF0gLSBjZW50ZXJQb2ludFswXSkpICogKDE4MCAvIE1hdGguUEkpO1xuICByZXR1cm4ge1xuICAgIHJvdGF0aW9uOiBhbmdsZSxcbiAgICBjZW50ZXI6IFtjZW50ZXJQb2ludFswXSAqIHNoYXBlV2lkdGgsIGNlbnRlclBvaW50WzFdICogc2hhcGVIZWlnaHRdLFxuICAgIHJhZGl1czogW3J4ICogc2hhcGVXaWR0aCwgcnkgKiBzaGFwZUhlaWdodF1cbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZmluZEFsbCA9IHZvaWQgMDtcblxudmFyIF8gPSByZXF1aXJlKFwiLi5cIik7XG5cbi8qKlxuICogQ3VzdG9tIGltcGxlbWVudGF0aW9uIG9mIHRoZSBmaWdtYS5maW5kQWxsIG1ldGhvZCwgd2hpY2ggcnVucyB4MTAwMCB0aW1lcyBmYXN0ZXIuXG4gKlxuICogIyMjIFVzYWdlIGV4YW1wbGVcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmaW5kQWxsLCBpc1RleHROb2RlIH0gZnJvbSBcIkBmaWdtYS1wbHVnaW4vaGVscGVyc1wiXG4gKlxuICogY29uc3QgdGV4dE5vZGVzID0gZmluZEFsbChmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbiwgaXNUZXh0Tm9kZSlcbiAqIGBgYFxuICpcbiAqICMjIyBIb3cgdG8gcmVwbGFjZSBuYXRpdmUgYGZpZ21hLmZpbmRBbGxgXG4gKiBgYGBkaWZmXG4gKiArIGltcG9ydCB7IGZpbmRBbGwgfSBmcm9tIFwiQGZpZ21hLXBsdWdpbi9oZWxwZXJzXCJcbiAqXG4gKiAtIGNvbnN0IHRleHROb2RlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIpO1xuICogKyBjb25zdCB0ZXh0Tm9kZXMgPSBmaW5kQWxsKGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuLCAobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIilcbiAqIGBgYFxuICovXG5jb25zdCBmaW5kQWxsID0gKG5vZGVzLCBpdGVyYXRlZSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGl0ZXJhdGVlKG5vZGVzW2ldLCBpLCBub2RlcykpIHtcbiAgICAgIHJlc3VsdC5wdXNoKG5vZGVzW2ldKTtcbiAgICB9IGVsc2UgaWYgKCgwLCBfLmhhc0NoaWxkcmVuKShub2Rlc1tpXSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKC4uLmZpbmRBbGwobm9kZXNbaV1bJ2NoaWxkcmVuJ10sIGl0ZXJhdGVlKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydHMuZmluZEFsbCA9IGZpbmRBbGw7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRBbGxGb250cztcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYWxsIHVzZWQgZm9udHMgdG8gdGV4dE5vZGVzXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEZvbnRzKHRleHROb2Rlcykge1xuICBjb25zdCBmb250cyA9IFtdO1xuXG4gIGNvbnN0IHB1c2hVbmlxdWUgPSBmb250ID0+IHtcbiAgICBpZiAoIWZvbnRzLnNvbWUoaXRlbSA9PiBpdGVtLmZhbWlseSA9PT0gZm9udC5mYW1pbHkgJiYgaXRlbS5zdHlsZSA9PT0gZm9udC5zdHlsZSkpIHtcbiAgICAgIGZvbnRzLnB1c2goZm9udCk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAoY29uc3Qgbm9kZSBvZiB0ZXh0Tm9kZXMpIHtcbiAgICBpZiAobm9kZS5mb250TmFtZSA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgIGNvbnN0IGxlbiA9IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgZm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShpLCBpICsgMSk7XG4gICAgICAgIHB1c2hVbmlxdWUoZm9udCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHB1c2hVbmlxdWUobm9kZS5mb250TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvbnRzO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Qm91bmRpbmdSZWN0O1xuXG52YXIgX2lzVW5kZWZpbmVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC9pc1VuZGVmaW5lZFwiKSk7XG5cbnZhciBfYXBwbHlNYXRyaXhUb1BvaW50ID0gcmVxdWlyZShcIi4vYXBwbHlNYXRyaXhUb1BvaW50XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqICB0aGlzIGZ1bmN0aW9uIHJldHVybiBhIGJvdW5kaW5nIHJlY3QgZm9yIGFuIG5vZGVzXG4gKi9cbi8vIHgveSBhYnNvbHV0ZSBjb29yZGluYXRlc1xuLy8gaGVpZ2h0L3dpZHRoXG4vLyB4Mi95MiBib3R0b20gcmlnaHQgY29vcmRpbmF0ZXNcbmZ1bmN0aW9uIGdldEJvdW5kaW5nUmVjdChub2Rlcykge1xuICBjb25zdCBib3VuZGluZ1JlY3QgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHgyOiAwLFxuICAgIHkyOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9O1xuXG4gIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICBjb25zdCB4eSA9IG5vZGVzLnJlZHVjZSgocmV6LCBub2RlKSA9PiB7XG4gICAgICBpZiAoIW5vZGUuYWJzb2x1dGVUcmFuc2Zvcm0pIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdQcm92aWRlZCBub2RlIGhhdmVuXFwndCBcImFic29sdXRlVHJhbnNmb3JtXCIgcHJvcGVydHksIGJ1dCBpdFxcJ3MgcmVxdWlyZWQgZm9yIGNhbGN1bGF0aW9ucy4nKTtcbiAgICAgICAgcmV0dXJuIHJlejtcbiAgICAgIH1cblxuICAgICAgaWYgKCgwLCBfaXNVbmRlZmluZWQyLmRlZmF1bHQpKG5vZGUuaGVpZ2h0KSB8fCAoMCwgX2lzVW5kZWZpbmVkMi5kZWZhdWx0KShub2RlLndpZHRoKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1Byb3ZpZGVkIG5vZGUgaGF2ZW5cXCd0IFwid2lkdGgvaGVpZ2h0XCIgcHJvcGVydHksIGJ1dCBpdFxcJ3MgcmVxdWlyZWQgZm9yIGNhbGN1bGF0aW9ucy4nKTtcbiAgICAgICAgcmV0dXJuIHJlejtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGFsZkhlaWdodCA9IG5vZGUuaGVpZ2h0IC8gMjtcbiAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IG5vZGUud2lkdGggLyAyO1xuICAgICAgY29uc3QgW1tjMCwgczAsIHhdLCBbczEsIGMxLCB5XV0gPSBub2RlLmFic29sdXRlVHJhbnNmb3JtO1xuICAgICAgY29uc3QgbWF0cml4ID0gW1tjMCwgczAsIHggKyBoYWxmV2lkdGggKiBjMCArIGhhbGZIZWlnaHQgKiBzMF0sIFtzMSwgYzEsIHkgKyBoYWxmV2lkdGggKiBzMSArIGhhbGZIZWlnaHQgKiBjMV1dOyAvLyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGNvcm5lcnMgb2YgdGhlIHJlY3RhbmdsZVxuXG4gICAgICBjb25zdCBYWSA9IHtcbiAgICAgICAgeDogWzEsIC0xLCAxLCAtMV0sXG4gICAgICAgIHk6IFsxLCAtMSwgLTEsIDFdXG4gICAgICB9OyAvLyBmaWxsIGluXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gKDAsIF9hcHBseU1hdHJpeFRvUG9pbnQuYXBwbHlNYXRyaXhUb1BvaW50KShtYXRyaXgsIFtYWS54W2ldICogaGFsZldpZHRoLCBYWS55W2ldICogaGFsZkhlaWdodF0pO1xuICAgICAgICBYWS54W2ldID0gYVswXTtcbiAgICAgICAgWFkueVtpXSA9IGFbMV07XG4gICAgICB9XG5cbiAgICAgIFhZLnguc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgWFkueS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICByZXoueC5wdXNoKFhZLnhbMF0pO1xuICAgICAgcmV6LnkucHVzaChYWS55WzBdKTtcbiAgICAgIHJlei54Mi5wdXNoKFhZLnhbM10pO1xuICAgICAgcmV6LnkyLnB1c2goWFkueVszXSk7XG4gICAgICByZXR1cm4gcmV6O1xuICAgIH0sIHtcbiAgICAgIHg6IFtdLFxuICAgICAgeTogW10sXG4gICAgICB4MjogW10sXG4gICAgICB5MjogW11cbiAgICB9KTtcbiAgICBjb25zdCByZWN0ID0ge1xuICAgICAgeDogTWF0aC5taW4oLi4ueHkueCksXG4gICAgICB5OiBNYXRoLm1pbiguLi54eS55KSxcbiAgICAgIHgyOiBNYXRoLm1heCguLi54eS54MiksXG4gICAgICB5MjogTWF0aC5tYXgoLi4ueHkueTIpXG4gICAgfTtcbiAgICBib3VuZGluZ1JlY3QueCA9IHJlY3QueDtcbiAgICBib3VuZGluZ1JlY3QueSA9IHJlY3QueTtcbiAgICBib3VuZGluZ1JlY3QueDIgPSByZWN0LngyO1xuICAgIGJvdW5kaW5nUmVjdC55MiA9IHJlY3QueTI7XG4gICAgYm91bmRpbmdSZWN0LndpZHRoID0gcmVjdC54MiAtIHJlY3QueDtcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0ID0gcmVjdC55MiAtIHJlY3QueTtcbiAgfVxuXG4gIHJldHVybiBib3VuZGluZ1JlY3Q7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFRleHROb2RlQ1NTID0gdm9pZCAwO1xuXG52YXIgX2dldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvZ2V0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgc3RyaW5nVmFsdWVUb0NzcyA9IHZhbHVlID0+IHtcbiAgaWYgKC9yaWdodHxib3R0b20vaS50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnZmxleC1lbmQnO1xuICB9IGVsc2UgaWYgKC9sZWZ0fHRvcC9pLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdmbGV4LXN0YXJ0JztcbiAgfSBlbHNlIGlmICgvY2VudGVyL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2NlbnRlcic7XG4gIH0gZWxzZSBpZiAoL2xvd2VyL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2xvd2VyY2FzZSc7XG4gIH0gZWxzZSBpZiAoL3VwcGVyL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ3VwcGVyY2FzZSc7XG4gIH0gZWxzZSBpZiAoL3RpdGxlL2kudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2NhcGl0YWxpemUnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnbm9uZSc7XG4gIH1cbn07XG5cbmNvbnN0IHVuaXRWYWx1ZVRvQ3NzID0gKHtcbiAgdW5pdCxcbiAgdmFsdWVcbn0pID0+IHtcbiAgaWYgKHVuaXQgPT09ICdQRVJDRU5UJykge1xuICAgIHJldHVybiBgJHt2YWx1ZX0lYDtcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnUElYRUxTJykge1xuICAgIHJldHVybiBgJHt2YWx1ZX1weGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdhdXRvJztcbiAgfVxufTtcblxuY29uc3QgaXNVbml0VmFsdWUgPSBvYmogPT4ge1xuICByZXR1cm4gb2JqLmhhc093blByb3BlcnR5KCd1bml0Jyk7XG59O1xuXG5jb25zdCBnZXRTdHlsZVZhbHVlID0gKG5vZGUsIGtleSwgZXhhY3RTdHJpbmcpID0+IHtcbiAgY29uc3QgdmFsdWUgPSAoMCwgX2dldDIuZGVmYXVsdCkobm9kZSwga2V5KTtcblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZXhhY3RTdHJpbmcgPyB2YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSA6IHN0cmluZ1ZhbHVlVG9Dc3ModmFsdWUudG9Mb3dlckNhc2UoKS50cmltKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYCR7dmFsdWV9cHhgO1xuICB9IGVsc2UgaWYgKGlzVW5pdFZhbHVlKHZhbHVlKSkge1xuICAgIHJldHVybiB1bml0VmFsdWVUb0Nzcyh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKCdVbmV4cGVjdGVkIHZhbHVlOiAnLCB2YWx1ZSk7XG4gIH1cbn07XG4vKipcbiAqICBnZXQgQ1NTIHN0eWxlcyBvZiBUZXh0Tm9kZVxuICovXG5cblxuY29uc3QgZ2V0VGV4dE5vZGVDU1MgPSBub2RlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3knKSxcbiAgICBsZWZ0OiBnZXRTdHlsZVZhbHVlKG5vZGUsICd4JyksXG4gICAgd2lkdGg6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3dpZHRoJyksXG4gICAgaGVpZ2h0OiBnZXRTdHlsZVZhbHVlKG5vZGUsICdoZWlnaHQnKSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgJ2p1c3RpZnktY29udGVudCc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3RleHRBbGlnbkhvcml6b250YWwnKSxcbiAgICAnYWxpZ24taXRlbXMnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICd0ZXh0QWxpZ25WZXJ0aWNhbCcpLFxuICAgICd0ZXh0LWluZGVudCc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3BhcmFncmFwaEluZGVudCcpLFxuICAgICdsZXR0ZXItc3BhY2luZyc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2xldHRlclNwYWNpbmcnKSxcbiAgICAnbGluZS1oZWlnaHQnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICdsaW5lSGVpZ2h0JyksXG4gICAgJ2ZvbnQtc2l6ZSc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnRTaXplJyksXG4gICAgJ2ZvbnQtc3R5bGUnOiBnZXRTdHlsZVZhbHVlKG5vZGUsICdmb250TmFtZS5zdHlsZScsIHRydWUpLFxuICAgICdmb250LXdlaWdodCc6IGdldFN0eWxlVmFsdWUobm9kZSwgJ2ZvbnROYW1lLnN0eWxlJywgdHJ1ZSksXG4gICAgJ3RleHQtZGVjb3JhdGlvbic6IGdldFN0eWxlVmFsdWUobm9kZSwgJ3RleHREZWNvcmF0aW9uJywgdHJ1ZSksXG4gICAgJ3RleHQtdHJhbnNmb3JtJzogZ2V0U3R5bGVWYWx1ZShub2RlLCAndGV4dENhc2UnKSxcbiAgICAnZm9udC1mYW1pbHknOiBgJHtnZXRTdHlsZVZhbHVlKG5vZGUsICdmb250TmFtZS5mYW1pbHknLCB0cnVlKX0gJHtnZXRTdHlsZVZhbHVlKG5vZGUsICdmb250TmFtZS5zdHlsZScsIHRydWUpfWBcbiAgfTtcbn07IC8vIHRoaXMgZmlsZSBjYW4gYmUgZXh0ZW5kZWQgdG8gc3VwcG9ydCBhbGwgbm9kZSB0eXBlc1xuXG5cbmV4cG9ydHMuZ2V0VGV4dE5vZGVDU1MgPSBnZXRUZXh0Tm9kZUNTUzsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldE5vZGVJbmRleDtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gZ2V0IHRoZSByZXR1cm4gdGhlIGluZGV4IG9mIG5vZGUgaW4gaXRzIHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXROb2RlSW5kZXgobm9kZSkge1xuICByZXR1cm4gbm9kZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldFBhZ2U7XG5cbnZhciBfaXNUeXBlTm9kZSA9IHJlcXVpcmUoXCIuL2lzVHlwZU5vZGVcIik7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHBhc3MgaW4gYSBub2RlIGFuZCByZXR1cm4gaXRzIHBhZ2VOb2RlXG4gKi9cbmZ1bmN0aW9uIGdldFBhZ2Uobm9kZSkge1xuICBpZiAoISgwLCBfaXNUeXBlTm9kZS5pc1BhZ2VOb2RlKShub2RlKSkge1xuICAgIHJldHVybiBnZXRQYWdlKG5vZGUucGFyZW50KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRSZWxhdGl2ZVBvc2l0aW9uID0gZXhwb3J0cy5nZXRUb3BMZXZlbFBhcmVudCA9IHZvaWQgMDtcblxudmFyIF8gPSByZXF1aXJlKFwiLi4vXCIpO1xuXG4vKipcbiAqIFJldHVybiB0b3AgbGV2ZWwgcGFyZW50IGZvciBub2RlIGJlZm9yZSBQYWdlTm9kZS5cbiAqIEZvciBleGFtcGxlOlxuICogYGBganNcbiAqIC8vIGZvciBzdHJ1Y3R1cmUgYmVsb3dcbiAqIC8vIFBhZ2UgLyBGcmFtZSAvIEdyb3VwMSAvIEdyb3VwMiAvIFRleHRcbiAqXG4gKiBnZXRUb3BMZXZlbFBhcmVudChUZXh0KSAvLyBGcmFtZVxuICogYGBgXG4gKi9cbmNvbnN0IGdldFRvcExldmVsUGFyZW50ID0gbm9kZSA9PiB7XG4gIGlmIChub2RlICYmIG5vZGUucGFyZW50ICYmICEoMCwgXy5pc1BhZ2VOb2RlKShub2RlLnBhcmVudCkpIHtcbiAgICByZXR1cm4gZ2V0VG9wTGV2ZWxQYXJlbnQobm9kZS5wYXJlbnQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2RlO1xuICB9XG59O1xuLyoqXG4gKiBDYWxjdWxhdGUgcmVsYXRpdmUgcG9zaXRpb24gb2Ygbm9kZSBiYXNlZCBvbiBwcm92aWRlZCBwYXJlbnQgb3IgdG9wIGxldmVsIHBhcmVudC5cbiAqIEZvciBleGFtcGxlOlxuICogYGBganNcbiAqIC8vIGZvciBzdHJ1Y3R1cmUgYmVsb3dcbiAqIC8vIFBhZ2UgLyBGcmFtZSAvIEdyb3VwMSAvIEdyb3VwMiAvIFRleHRcbiAqXG4gKiBnZXRSZWxhdGl2ZVBvc2l0aW9uKFRleHQsIEdyb3VwMSkgLy8gd2lsbCBjYWxjdWxhdGUgeyB4LCB5IH0gYmFzZWQgb24gR3JvdXAxXG4gKlxuICogZ2V0UmVsYXRpdmVQb3NpdGlvbihUZXh0KSAvLyB3aWxsIGNhbGN1bGF0ZSB7IHgsIHkgfSBiYXNlZCBvbiBGcmFtZVxuICogYGBgXG4gKiovXG5cblxuZXhwb3J0cy5nZXRUb3BMZXZlbFBhcmVudCA9IGdldFRvcExldmVsUGFyZW50O1xuXG5jb25zdCBnZXRSZWxhdGl2ZVBvc2l0aW9uID0gKG5vZGUsIHJlbGF0aXZlTm9kZSkgPT4ge1xuICByZWxhdGl2ZU5vZGUgPSByZWxhdGl2ZU5vZGUgfHwgZ2V0VG9wTGV2ZWxQYXJlbnQobm9kZSk7XG4gIHJldHVybiB7XG4gICAgeDogTWF0aC5hYnMoTWF0aC5yb3VuZChyZWxhdGl2ZU5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMF1bMl0gLSBub2RlLmFic29sdXRlVHJhbnNmb3JtWzBdWzJdKSksXG4gICAgeTogTWF0aC5hYnMoTWF0aC5yb3VuZChyZWxhdGl2ZU5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMV1bMl0gLSBub2RlLmFic29sdXRlVHJhbnNmb3JtWzFdWzJdKSlcbiAgfTtcbn07XG5cbmV4cG9ydHMuZ2V0UmVsYXRpdmVQb3NpdGlvbiA9IGdldFJlbGF0aXZlUG9zaXRpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmhhc0NoaWxkcmVuID0gdm9pZCAwO1xuXG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGhhdmUgY2hpbGRyZW4gbm9kZXNcbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYHRzXG4gKiAvLyBCRUZPUkVcbiAqIGNvbnNvbGUubG9nKG5vZGUuY2hpbGRyZW4pIC8vIHRocm93IFRTIGVycm9yIFwiUHJvcGVydHkgJ2NoaWxkcmVuJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIC4uLlwiXG4gKlxuICogLy8gQUZURVJcbiAqIGlmIChoYXNDaGlsZHJlbihub2RlKSkge1xuICogIGNvbnNvbGUubG9nKG5vZGUuY2hpbGRyZW4pIC8vIHZhbGlkIGNvZGVcbiAqIH1cbiAqIGBgYFxuICpcbiAqL1xuY29uc3QgaGFzQ2hpbGRyZW4gPSBub2RlID0+IEJvb2xlYW4obm9kZVsnY2hpbGRyZW4nXSk7XG5cbmV4cG9ydHMuaGFzQ2hpbGRyZW4gPSBoYXNDaGlsZHJlbjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzUGFydE9mSW5zdGFuY2U7XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIGNoZWNrIHdoZXRoZXIgYSBub2RlIGlzIHBhcnQgb2YgYW4gaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gaXNQYXJ0T2ZJbnN0YW5jZShub2RlKSB7XG4gIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50O1xuXG4gIGlmIChwYXJlbnQudHlwZSA9PT0gJ0lOU1RBTkNFJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHBhcmVudC50eXBlID09PSAnUEFHRScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlzUGFydE9mSW5zdGFuY2UocGFyZW50KTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNQYXJ0T2ZOb2RlO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBjaGVjayB3aGV0aGVyIGEgbm9kZSBpcyBwYXJ0IG9mIGFuIHJvb3ROb2RlXG4gKi9cbmZ1bmN0aW9uIGlzUGFydE9mTm9kZShwYXJ0LCByb290Tm9kZSkge1xuICBjb25zdCBwYXJlbnQgPSBwYXJ0LnBhcmVudDtcblxuICBpZiAocGFyZW50ID09PSByb290Tm9kZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHBhcmVudC50eXBlID09PSAnUEFHRScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlzUGFydE9mTm9kZShwYXJlbnQsIHJvb3ROb2RlKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc09uZU9mTm9kZVR5cGUgPSBleHBvcnRzLmlzQ29tcG9uZW50Tm9kZSA9IGV4cG9ydHMuaXNJbnN0YW5jZU5vZGUgPSBleHBvcnRzLmlzVGV4dE5vZGUgPSBleHBvcnRzLmlzRnJhbWVOb2RlID0gZXhwb3J0cy5pc0dyb3VwTm9kZSA9IGV4cG9ydHMuaXNQYWdlTm9kZSA9IHZvaWQgMDtcblxuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBQYWdlTm9kZVxuICovXG5jb25zdCBpc1BhZ2VOb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdQQUdFJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIEdyb3VwTm9kZVxuICovXG5cblxuZXhwb3J0cy5pc1BhZ2VOb2RlID0gaXNQYWdlTm9kZTtcblxuY29uc3QgaXNHcm91cE5vZGUgPSBub2RlID0+IHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0dST1VQJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIEZyYW1lTm9kZVxuICovXG5cblxuZXhwb3J0cy5pc0dyb3VwTm9kZSA9IGlzR3JvdXBOb2RlO1xuXG5jb25zdCBpc0ZyYW1lTm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnRlJBTUUnO1xufTtcbi8qKlxuICogQ2hlY2tzIG5vZGUgdG8gYmUgVGV4dE5vZGVcbiAqL1xuXG5cbmV4cG9ydHMuaXNGcmFtZU5vZGUgPSBpc0ZyYW1lTm9kZTtcblxuY29uc3QgaXNUZXh0Tm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnVEVYVCc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBJbnN0YW5jZU5vZGVcbiAqL1xuXG5cbmV4cG9ydHMuaXNUZXh0Tm9kZSA9IGlzVGV4dE5vZGU7XG5cbmNvbnN0IGlzSW5zdGFuY2VOb2RlID0gbm9kZSA9PiB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdJTlNUQU5DRSc7XG59O1xuLyoqXG4gKiBDaGVja3Mgbm9kZSB0byBiZSBDb21wb25lbnROb2RlXG4gKi9cblxuXG5leHBvcnRzLmlzSW5zdGFuY2VOb2RlID0gaXNJbnN0YW5jZU5vZGU7XG5cbmNvbnN0IGlzQ29tcG9uZW50Tm9kZSA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnQ09NUE9ORU5UJztcbn07XG4vKipcbiAqIENoZWNrcyBub2RlIHRvIGJlIG9uZSBvZiBwcm92aWRlZCB0eXBlc1xuICovXG5cblxuZXhwb3J0cy5pc0NvbXBvbmVudE5vZGUgPSBpc0NvbXBvbmVudE5vZGU7XG5cbmNvbnN0IGlzT25lT2ZOb2RlVHlwZSA9IChub2RlLCB0eXBlTGlzdCkgPT4ge1xuICByZXR1cm4gdHlwZUxpc3QuaW5jbHVkZXMobm9kZS50eXBlKTtcbn07XG5cbmV4cG9ydHMuaXNPbmVPZk5vZGVUeXBlID0gaXNPbmVPZk5vZGVUeXBlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNWaXNpYmxlTm9kZTtcblxuLyoqXG4gKiBUaGlzIGhlbHBlciByZWN1cnNpdmVseSBjaGVja3MgYWxsIHBhcmVudHMgZm9yIHZpc2liaWxpdHksIHRvIGd1YXJhbnRlZSB0aGF0J3Mgbm9kZSBpcyB2aXNpYmxlXG4gKi9cbmZ1bmN0aW9uIGlzVmlzaWJsZU5vZGUobm9kZSkge1xuICBpZiAobm9kZSAmJiBub2RlLnBhcmVudCkge1xuICAgIGlmIChub2RlLnZpc2libGUgJiYgbm9kZS5wYXJlbnQudHlwZSAhPT0gJ1BBR0UnKSB7XG4gICAgICByZXR1cm4gaXNWaXNpYmxlTm9kZShub2RlLnBhcmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBub2RlLnZpc2libGU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbG9hZEZvbnRzO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gYXN5bmNocm9ub3VzbHkgbG9hZHMgdGhlIHBhc3NlZCBmb250c1xuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkRm9udHMoZm9udHMpIHtcbiAgY29uc3QgcHJvbWlzZXMgPSBmb250cy5tYXAoZm9udCA9PiBmaWdtYS5sb2FkRm9udEFzeW5jKGZvbnQpKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICByZXR1cm4gZm9udHM7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsb2FkVW5pcXVlRm9udHM7XG5cbnZhciBfZ2V0QWxsRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2dldEFsbEZvbnRzXCIpKTtcblxudmFyIF9sb2FkRm9udHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRGb250c1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIGxvYWQgb25seSB1bmlxdWUgZm9udHMgYXN5bmNocm9ub3VzbHlcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZFVuaXF1ZUZvbnRzKHRleHROb2Rlcykge1xuICBjb25zdCBmb250cyA9ICgwLCBfZ2V0QWxsRm9udHMuZGVmYXVsdCkodGV4dE5vZGVzKTtcbiAgcmV0dXJuICgwLCBfbG9hZEZvbnRzLmRlZmF1bHQpKGZvbnRzKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubm9kZVRvT2JqZWN0ID0gdm9pZCAwO1xuXG4vKipcbiAqIFRyYW5zZm9ybSBub2RlIHRvIG9iamVjdCB3aXRoIGtleXMsIHRoYXQgYXJlIGhpZGRlbiBieSBkZWZhdWx0LlxuICogRm9yIGV4YW1wbGU6XG4gKiBgYGB0c1xuICogY29uc3Qgbm9kZSA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRPbmUoKGVsKSA9PiBlbC50eXBlID09PSBcIlRFWFRcIik7XG4gKiBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhub2RlKS5sZW5ndGgpIC8vIDFcbiAqIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKG5vZGVUb09iamVjdChub2RlKSkubGVuZ3RoKSAvLyA0MlxuICogY29uc29sZS5sb2coT2JqZWN0LmtleXMobm9kZVRvT2JqZWN0KG5vZGUsIHRydWUpKS5sZW5ndGgpIC8vIDM5XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gbm9kZVxuICogQHBhcmFtIHdpdGhvdXRSZWxhdGlvbnNcbiAqL1xuY29uc3Qgbm9kZVRvT2JqZWN0ID0gKG5vZGUsIHdpdGhvdXRSZWxhdGlvbnMpID0+IHtcbiAgY29uc3QgcHJvcHMgPSBPYmplY3QuZW50cmllcyhPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXykpO1xuICBjb25zdCBibGFja2xpc3QgPSBbJ3BhcmVudCcsICdjaGlsZHJlbicsICdyZW1vdmVkJywgJ21hc3RlckNvbXBvbmVudCddO1xuICBjb25zdCBvYmogPSB7XG4gICAgaWQ6IG5vZGUuaWQsXG4gICAgdHlwZTogbm9kZS50eXBlXG4gIH07XG5cbiAgZm9yIChjb25zdCBbbmFtZSwgcHJvcF0gb2YgcHJvcHMpIHtcbiAgICBpZiAocHJvcC5nZXQgJiYgIWJsYWNrbGlzdC5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmpbbmFtZV0gPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgb2JqW25hbWVdID0gJ01peGVkJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmpbbmFtZV0gPSBwcm9wLmdldC5jYWxsKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgb2JqW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChub2RlLnBhcmVudCAmJiAhd2l0aG91dFJlbGF0aW9ucykge1xuICAgIG9iai5wYXJlbnQgPSB7XG4gICAgICBpZDogbm9kZS5wYXJlbnQuaWQsXG4gICAgICB0eXBlOiBub2RlLnBhcmVudC50eXBlXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub2RlLmNoaWxkcmVuICYmICF3aXRob3V0UmVsYXRpb25zKSB7XG4gICAgb2JqLmNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gbm9kZVRvT2JqZWN0KGNoaWxkLCB3aXRob3V0UmVsYXRpb25zKSk7XG4gIH1cblxuICBpZiAobm9kZS5tYXN0ZXJDb21wb25lbnQgJiYgIXdpdGhvdXRSZWxhdGlvbnMpIHtcbiAgICBvYmoubWFzdGVyQ29tcG9uZW50ID0gbm9kZVRvT2JqZWN0KG5vZGUubWFzdGVyQ29tcG9uZW50LCB3aXRob3V0UmVsYXRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5leHBvcnRzLm5vZGVUb09iamVjdCA9IG5vZGVUb09iamVjdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VUZXh0U3R5bGUgPSBwYXJzZVRleHRTdHlsZTtcbmV4cG9ydHMuc3BsaXRUZXh0U3R5bGVJbnRvTGluZXMgPSBzcGxpdFRleHRTdHlsZUludG9MaW5lcztcbmV4cG9ydHMuam9pblRleHRMaW5lc1N0eWxlcyA9IGpvaW5UZXh0TGluZXNTdHlsZXM7XG5leHBvcnRzLmFwcGx5VGV4dFN0eWxlVG9UZXh0Tm9kZSA9IGFwcGx5VGV4dFN0eWxlVG9UZXh0Tm9kZTtcbmV4cG9ydHMuY2hhbmdlQ2hhcmFjdGVyc1RleHRTdHlsZSA9IGNoYW5nZUNoYXJhY3RlcnNUZXh0U3R5bGU7XG5leHBvcnRzLmNoYW5nZVRleHRTdHlsZSA9IGNoYW5nZVRleHRTdHlsZTtcblxudmFyIF91bmlxV2l0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvdW5pcVdpdGhcIikpO1xuXG52YXIgX2Nsb25lRGVlcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvY2xvbmVEZWVwXCIpKTtcblxudmFyIF9pc0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC9pc0VxdWFsXCIpKTtcblxudmFyIF9nZXRBbGxGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ2V0QWxsRm9udHNcIikpO1xuXG52YXIgX2xvYWRGb250cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZEZvbnRzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgc3R5bGVGb250cyA9IFsnZm9udFNpemUnLCAnZm9udE5hbWUnLCAndGV4dENhc2UnLCAndGV4dERlY29yYXRpb24nLCAnbGV0dGVyU3BhY2luZycsICdsaW5lSGVpZ2h0JywgJ2ZpbGxzJywgJ3RleHRTdHlsZUlkJywgJ2ZpbGxTdHlsZUlkJ107XG4vKlxuXHRUaGUgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGV4dCBub2RlIHN0eWxlcywgc3BsaXR0aW5nIHRoZW0gaW50byBkaWZmZXJlbnQgYXJyYXlzLCBzdWNoIGFzOlxuXHRbe1xuXHRcdGNoYXJhY3RlcnM6IFwiLi4uXCIsXG5cdFx0Li4uIChzdHlsZXMpXG5cdH0sIC4uLl1cblxuXHQtLS1cblxuXHRSZXR1cm5zIHN0eWxlcyBmb3IgdGhlIGVudGlyZSB0ZXh0OlxuXHRwYXJzZVRleHRTdHlsZSh0ZXh0Tm9kZSlcblx0XG5cdFJldHVybnMgdGV4dCBzdHlsZXMgZnJvbSB0aGUgMTAwdGggdG8gdGhlIGxhc3QgY2hhcmFjdGVyOlxuXHRwYXJzZVRleHRTdHlsZSh0ZXh0Tm9kZSwgMTAwKVxuXG5cdFJldHVybnMgc3R5bGVzIGZvciB0aGUgZW50aXJlIHRleHQsIGJ1dCBvbmx5IHdpdGggZm9udE5hbWUgYW5kIHRleHREZWNvcmF0aW9uOlxuXHRwYXJzZVRleHRTdHlsZSh0ZXh0Tm9kZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFtcImZvbnROYW1lXCIsIFwidGV4dERlY29yYXRpb25cIl0pXG4qL1xuXG5mdW5jdGlvbiBwYXJzZVRleHRTdHlsZShub2RlLCBzdGFydCA9IDAsIGVuZCwgc3R5bGVOYW1lKSB7XG4gIGlmICghZW5kKSBlbmQgPSBub2RlLmNoYXJhY3RlcnMubGVuZ3RoO1xuICBpZiAoIXN0eWxlTmFtZSkgc3R5bGVOYW1lID0gc3R5bGVGb250cztcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgY29uc29sZS5lcnJvcignU3RhcnQgbXVzdCBiZSBncmVhdGVyIHRoYW4gZW5kJyk7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vIHN0cmluZyBzdWJzdHJpbmcsIGRlZmluZWQgc3R5bGVzXG5cblxuICBjb25zdCBzdHlsZU1hcCA9IFtdOyAvLyBhIGNvbXBvc2luZyBzdHJpbmcgb2YgYSBzcGVjaWZpYyBzdHlsZVxuXG4gIGxldCB0ZXh0U3R5bGU7XG4gIGNvbnN0IG5hbWVzID0gc3R5bGVOYW1lLm1hcChuYW1lID0+IHtcbiAgICByZXR1cm4gbmFtZS5yZXBsYWNlKC9eKC4pL2csICQxID0+ICQxLnRvVXBwZXJDYXNlKCkpO1xuICB9KTsgLy8gc3BsaXR0aW5nIHRleHQgaW50byBzdWJzdHJpbmdzIGJ5IHN0eWxlXG5cbiAgZm9yIChsZXQgc3RhcnRJbmRleCA9IHN0YXJ0OyBzdGFydEluZGV4IDwgZW5kOyBzdGFydEluZGV4KyspIHtcbiAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyAxO1xuICAgIGNvbnN0IGxldHRlciA9IHtcbiAgICAgIGNoYXJhY3RlcnM6IG5vZGUuY2hhcmFjdGVyc1tzdGFydEluZGV4XVxuICAgIH07IC8vIGNvbGxlY3Rpb24gb2Ygc3R5bGVzXG5cbiAgICBuYW1lcy5mb3JFYWNoKChuLCBpKSA9PiB7XG4gICAgICBsZXR0ZXJbc3R5bGVOYW1lW2ldXSA9IG5vZGVbJ2dldFJhbmdlJyArIG5dKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgICB9KTtcblxuICAgIGlmICh0ZXh0U3R5bGUpIHtcbiAgICAgIGlmIChpc0VxdWFsTGV0dGVyU3R5bGUobGV0dGVyLCB0ZXh0U3R5bGUpKSB7XG4gICAgICAgIC8vIHRoZSBjaGFyYWN0ZXIgaGFzIHRoZSBzYW1lIHByb3BlcnRpZXMgYXMgdGhlIGdlbmVyYXRlZCBzdWJzdHJpbmdcbiAgICAgICAgLy8gYWRkIGl0IHRvIGl0XG4gICAgICAgIHRleHRTdHlsZS5jaGFyYWN0ZXJzICs9IGxldHRlci5jaGFyYWN0ZXJzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc3R5bGUgcHJvcGVydGllcyBhcmUgZGlmZmVyZW50XG4gICAgICAgIHN0eWxlTWFwLnB1c2godGV4dFN0eWxlKTsgLy8gd2Ugc3RhcnQgdG8gZm9ybSBhIG5ldyBzdWJzdHJpbmdcblxuICAgICAgICB0ZXh0U3R5bGUgPSBsZXR0ZXI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdlIHN0YXJ0IGZvcm1pbmcgdGhlIGZpcnN0IHN1YnN0cmluZ1xuICAgICAgdGV4dFN0eWxlID0gbGV0dGVyO1xuICAgIH1cbiAgfVxuXG4gIHN0eWxlTWFwLnB1c2godGV4dFN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlTWFwO1xufVxuLypcblx0QWxsb3dzIHRvIHNwbGl0IHRoZSBzdHlsZXMgb2J0YWluZWQgd2l0aCBwYXJzZVRleHRTdHlsZSBpbnRvIGxpbmVzIGJhc2VkIG9uIG5ld2xpbmVzLlxuXG5cdElmIHRoZSByZW1vdmVOZXdsaW5lQ2hhcmFjdGVycyBwYXJhbWV0ZXIgPT0gdHJ1ZSwgdGhlIG5ld2xpbmUgY2hhcmFjdGVycyB3aWxsIGJlIHJlbW92ZWQuXG5cdFJlbW92ZUVtcHR5bGluZXMgPT0gdHJ1ZSB3aWxsIHJlbW92ZSBlbXB0eSBsaW5lcy5cbiovXG5cblxuZnVuY3Rpb24gc3BsaXRUZXh0U3R5bGVJbnRvTGluZXModGV4dFN0eWxlLCByZW1vdmVOZXdsaW5lQ2hhcmFjdGVycyA9IGZhbHNlLCByZW1vdmVFbXB0eWxpbmVzID0gZmFsc2UpIHtcbiAgbGV0IGxpbmUgPSBbXTtcbiAgbGV0IGxpbmVzID0gW107XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKC4rfCg/PD1cXG4pKC4/KSg/PSQpKShcXG58XFx1MjAyOCk/fChcXG58XFx1MjAyOCknLCAnZycpO1xuICBjb25zdCByZTIgPSBuZXcgUmVnRXhwKCdcXG58XFx1MjAyOCcpO1xuICB0ZXh0U3R5bGUuZm9yRWFjaCgoc3R5bGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKHJlMi50ZXN0KHN0eWxlLmNoYXJhY3RlcnMpKSB7XG4gICAgICBjb25zdCBscyA9IHN0eWxlLmNoYXJhY3RlcnMubWF0Y2gocmUpO1xuXG4gICAgICBpZiAobHMgPT09IG51bGwpIHtcbiAgICAgICAgLy8gdGV4dCBpcyBtaXNzaW5nXG4gICAgICAgIGxpbmUucHVzaChzdHlsZSk7XG4gICAgICB9IGVsc2UgaWYgKGxzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyB0aGUgc3R5bGUgdGV4dCBjb25zaXN0cyBvZiAxIGxpbmVcbiAgICAgICAgbGluZS5wdXNoKHN0eWxlKTtcbiAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgbGluZSA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbXVsdGlwbGUtbGluZSB0ZXh0XG4gICAgICAgIHN0eWxlID0gKDAsIF9jbG9uZURlZXAyLmRlZmF1bHQpKHN0eWxlKTtcbiAgICAgICAgc3R5bGUuY2hhcmFjdGVycyA9IGxzLnNoaWZ0KCk7XG4gICAgICAgIGxpbmUucHVzaChzdHlsZSk7XG4gICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIGxpbmUgPSBbXTtcbiAgICAgICAgY29uc3QgbGFzdCA9IGxzLnBvcCgpOyAvLyBkZWFsaW5nIHdpdGggaW50ZXJuYWwgdGV4dCBzdHJpbmdzXG5cbiAgICAgICAgbGluZXMucHVzaCguLi5scy5tYXAoZSA9PiB7XG4gICAgICAgICAgc3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkoc3R5bGUpO1xuICAgICAgICAgIHN0eWxlLmNoYXJhY3RlcnMgPSBlO1xuICAgICAgICAgIHJldHVybiBbc3R5bGVdO1xuICAgICAgICB9KSk7XG4gICAgICAgIHN0eWxlID0gKDAsIF9jbG9uZURlZXAyLmRlZmF1bHQpKHN0eWxlKTtcbiAgICAgICAgc3R5bGUuY2hhcmFjdGVycyA9IGxhc3Q7XG5cbiAgICAgICAgaWYgKGxhc3QgPT09ICcnKSB7XG4gICAgICAgICAgaWYgKCF0ZXh0U3R5bGVbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgLy8gbGFzdCBsaW5lIGZpbmFsXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFtzdHlsZV0pO1xuICAgICAgICAgIH0gLy8gZWxzZSBmYWxzZSBlbmQgb2YgdGV4dFxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZG9lcyBub3QgZW5kXG4gICAgICAgICAgbGluZS5wdXNoKHN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lLnB1c2goc3R5bGUpO1xuICAgIH1cbiAgfSk7XG4gIGlmIChsaW5lLmxlbmd0aCkgbGluZXMucHVzaChsaW5lKTsgLy8gZGVsZXRpbmcgbmV3bGluZSBjaGFyYWN0ZXJzXG5cbiAgaWYgKHJlbW92ZU5ld2xpbmVDaGFyYWN0ZXJzKSB7XG4gICAgbGluZXMuZm9yRWFjaChsID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlID0gbFtsLmxlbmd0aCAtIDFdO1xuICAgICAgc3R5bGUuY2hhcmFjdGVycyA9IHN0eWxlLmNoYXJhY3RlcnMucmVwbGFjZShyZTIsICcnKTtcbiAgICB9KTtcbiAgfSAvLyBkZWxldGluZyBlbXB0eSBsaW5lc1xuXG5cbiAgaWYgKHJlbW92ZUVtcHR5bGluZXMpIHtcbiAgICBsaW5lcyA9IGxpbmVzLmZpbHRlcihsID0+IGwuZmlsdGVyKGwgPT4gbC5jaGFyYWN0ZXJzLnJlcGxhY2UocmUyLCAnJykgIT09ICcnKS5sZW5ndGggIT09IDApO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVzO1xufVxuLypcblx0SW52ZXJzZSBmdW5jdGlvbiBvZiBzcGxpdFRleHRTdHlsZUludG9MaW5lcy5cblx0VGhlIGFkZE5ld2xpbmVDaGFyYWN0ZXJzIHBhcmFtZXRlciBpcyByZXNwb25zaWJsZSBmb3Igd2hldGhlciB5b3UgbmVlZCB0byBhZGQgYSBuZXdsaW5lIGNoYXJhY3RlciBhdCB0aGUgZW5kIG9mIGVhY2ggbGluZVxuKi9cblxuXG5mdW5jdGlvbiBqb2luVGV4dExpbmVzU3R5bGVzKHRleHRTdHlsZSwgYWRkTmV3bGluZUNoYXJhY3RlcnMgPSBmYWxzZSkge1xuICBjb25zdCB0U3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkodGV4dFN0eWxlKTtcbiAgbGV0IG5ld2xpbmUgPSAnJztcblxuICBzd2l0Y2ggKHR5cGVvZiBhZGROZXdsaW5lQ2hhcmFjdGVycykge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgaWYgKGFkZE5ld2xpbmVDaGFyYWN0ZXJzKSBuZXdsaW5lID0gJ1xcbic7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBuZXdsaW5lID0gYWRkTmV3bGluZUNoYXJhY3RlcnM7XG4gICAgICBicmVhaztcbiAgfSAvLyBhZGRpbmcgbmV3IGxpbmUgY2hhcmFjdGVyc1xuXG5cbiAgaWYgKGFkZE5ld2xpbmVDaGFyYWN0ZXJzICYmIG5ld2xpbmUpIHtcbiAgICB0U3R5bGUuZm9yRWFjaCgoc3R5bGUsIGkpID0+IHtcbiAgICAgIGlmIChpICE9PSB0U3R5bGUubGVuZ3RoIC0gMSkgc3R5bGVbc3R5bGUubGVuZ3RoIC0gMV0uY2hhcmFjdGVycyArPSBuZXdsaW5lO1xuICAgIH0pO1xuICB9IC8vIGpvaW5cblxuXG4gIGNvbnN0IGxpbmUgPSB0U3R5bGUuc2hpZnQoKTtcbiAgdFN0eWxlLmZvckVhY2goc3R5bGUgPT4ge1xuICAgIGNvbnN0IGZpdHN0ID0gc3R5bGUuc2hpZnQoKTtcblxuICAgIGlmIChpc0VxdWFsTGV0dGVyU3R5bGUoZml0c3QsIGxpbmVbbGluZS5sZW5ndGggLSAxXSkpIHtcbiAgICAgIC8vIHRoZSBzdHlsZSBvZiB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5lIGRpZmZlcnMgZnJvbSB0aGUgZW5kIG9mIHRoZSBzdHlsZSBvZiB0aGUgdGV4dCBiZWluZyBjb21waWxlZFxuICAgICAgbGluZVtsaW5lLmxlbmd0aCAtIDFdLmNoYXJhY3RlcnMgKz0gZml0c3QuY2hhcmFjdGVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZS5wdXNoKGZpdHN0KTtcbiAgICB9XG5cbiAgICBpZiAoc3R5bGUubGVuZ3RoKSBsaW5lLnB1c2goLi4uc3R5bGUpO1xuICB9KTtcbiAgcmV0dXJuIGxpbmU7XG59XG4vKlxuXHRBcHBseSB0aGUgdGV4dCBzdHlsZXMgb2J0YWluZWQgZnJvbSBwYXJzZVRleHRTdHlsZSB0byB0aGUgdGV4dCBub2RlLlxuXHRUaGUgc2Vjb25kIHBhcmFtZXRlciBjYW4gYmUgcGFzc2VkIGEgdGV4dCBub2RlLCB0aGUgdGV4dCBvZiB3aGljaCB3aWxsIGJlIGNoYW5nZWQuXG4qL1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGFwcGx5VGV4dFN0eWxlVG9UZXh0Tm9kZSh0ZXh0U3R5bGUsIHRleHROb2RlLCBpc0xvYWRGb250cyA9IHRydWUpIHtcbiAgaWYgKGlzTG9hZEZvbnRzKSB7XG4gICAgbGV0IGZvbnRzID0gW3tcbiAgICAgIGZhbWlseTogJ1JvYm90bycsXG4gICAgICBzdHlsZTogJ1JlZ3VsYXInXG4gICAgfV07XG5cbiAgICBpZiAodGV4dFN0eWxlWzBdLmZvbnROYW1lKSB7XG4gICAgICBmb250cy5wdXNoKC4uLnRleHRTdHlsZS5tYXAoZSA9PiBlLmZvbnROYW1lKSk7XG4gICAgfVxuXG4gICAgaWYgKHRleHROb2RlKSB7XG4gICAgICBmb250cy5wdXNoKC4uLigwLCBfZ2V0QWxsRm9udHMuZGVmYXVsdCkoW3RleHROb2RlXSkpO1xuICAgIH1cblxuICAgIGZvbnRzID0gKDAsIF91bmlxV2l0aDIuZGVmYXVsdCkoZm9udHMsIF9pc0VxdWFsMi5kZWZhdWx0KTtcbiAgICBhd2FpdCAoMCwgX2xvYWRGb250cy5kZWZhdWx0KShmb250cyk7XG4gIH1cblxuICBpZiAoIXRleHROb2RlKSB0ZXh0Tm9kZSA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IHRleHRTdHlsZS5yZWR1Y2UoKHN0ciwgc3R5bGUpID0+IHtcbiAgICByZXR1cm4gc3RyICsgc3R5bGUuY2hhcmFjdGVycztcbiAgfSwgJycpO1xuICBsZXQgbiA9IDA7XG4gIHRleHRTdHlsZS5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICBjb25zdCBMID0gc3R5bGUuY2hhcmFjdGVycy5sZW5ndGg7XG5cbiAgICBpZiAoTCkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICAgICAgaWYgKGtleSAhPT0gJ2NoYXJhY3RlcnMnKSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGtleS5yZXBsYWNlKC9eKC4pL2csICQxID0+ICQxLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgIHRleHROb2RlWydzZXRSYW5nZScgKyBuYW1lXShuLCBuICsgTCwgc3R5bGVba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbiArPSBMO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0ZXh0Tm9kZTtcbn1cbi8qXG5cdFJlcGxhY2luZyB0ZXh0IGluIHRleHRTdHlsZVxuXHRJZiB0aGUgcGFzc2VkIHRleHQgaXMgc2hvcnRlciB0aGFuIGluIHN0eWxlcywgdGhlIGV4dHJhIHN0eWxlcyB3aWxsIGJlIHJlbW92ZWQuXG5cdElmIHRoZSBwYXNzZWQgdGV4dCBpcyBsb25nZXIgdGhhbiB0aGUgc3R5bGVzLCB0aGUgb3ZlcmZsb3cgdGV4dCB3aWxsIGdldCB0aGUgc3R5bGUgb2YgdGhlIGxhc3QgY2hhcmFjdGVyLlxuKi9cblxuXG5mdW5jdGlvbiBjaGFuZ2VDaGFyYWN0ZXJzVGV4dFN0eWxlKHRleHRTdHlsZSwgY2hhcmFjdGVycykge1xuICB0ZXh0U3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkodGV4dFN0eWxlKTtcbiAgbGV0IG4gPSAwO1xuICBjb25zdCBsZW5ndGggPSB0ZXh0U3R5bGUubGVuZ3RoIC0gMTtcbiAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcyA9IHRleHRTdHlsZVtpXTtcbiAgICBsZXQgbCA9IHMuY2hhcmFjdGVycy5sZW5ndGg7IC8vIGlmIHBhc3NlZCB0ZXh0IGlzIGxvbmdlciB0aGFuIHRleHQgaW4gc3R5bGVzXG5cbiAgICBpZiAoaSA9PSBsZW5ndGgpIGwgPSBjaGFyYWN0ZXJzTGVuZ3RoO1xuICAgIHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnMuc2xpY2UobiwgbiArIGwpO1xuICAgIG4gKz0gbDtcblxuICAgIGlmIChuID4gY2hhcmFjdGVyc0xlbmd0aCkge1xuICAgICAgLy8gbmV3IHRleHQgaXMgc2hvcnRlciB0aGFuIHRleHQgaW4gc3R5bGVzXG4gICAgICB0ZXh0U3R5bGUgPSB0ZXh0U3R5bGUuc3BsaWNlKDAsIGkgKyAxKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXh0U3R5bGU7XG59XG4vKlxuXHRGdW5jdGlvbiBmb3IgY2hhbmdpbmcgcHJvcGVydGllcyBvZiBUZXh0U3R5bGUuIFxuXHRUaGUgYmVmb3JlVmFsdWUgcGFyYW1ldGVyIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgdmFsdWUgaW4gd2hpY2ggdGhlIHByb3BlcnR5IHRvIGJlIGNoYW5nZWQgc2hvdWxkIGJlLlxuKi9cblxuXG5mdW5jdGlvbiBjaGFuZ2VUZXh0U3R5bGUodGV4dFN0eWxlLCBzdHlsZU5hbWUsIG5ld1ZhbHVlLCBiZWZvcmVWYWx1ZSkge1xuICB0ZXh0U3R5bGUgPSAoMCwgX2Nsb25lRGVlcDIuZGVmYXVsdCkodGV4dFN0eWxlKTtcbiAgdGV4dFN0eWxlLmZvckVhY2goc3R5bGUgPT4ge1xuICAgIGlmIChiZWZvcmVWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGJlZm9yZVZhbHVlICE9PSB1bmRlZmluZWQgJiYgKDAsIF9pc0VxdWFsMi5kZWZhdWx0KShzdHlsZVtzdHlsZU5hbWVdLCBiZWZvcmVWYWx1ZSkpIHtcbiAgICAgIDtcbiAgICAgIHN0eWxlW3N0eWxlTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGV4dFN0eWxlO1xufVxuLypjb21wYXJpbmcgY2hhcmFjdGVyIHN0eWxlcyB0byB0aGUgc3R5bGVzIG9mIHRoZSBjb21wb3Npbmcgc3Vic3RyaW5nKi9cblxuXG5mdW5jdGlvbiBpc0VxdWFsTGV0dGVyU3R5bGUobGV0dGVyLCB0ZXh0U3R5bGUpIHtcbiAgbGV0IGlzID0gdHJ1ZTsgLy8gaXRlcmF0aW5nIG92ZXIgZm9udCBwcm9wZXJ0aWVzXG5cbiAgZm9yIChjb25zdCBrZXkgaW4gbGV0dGVyKSB7XG4gICAgaWYgKGtleSAhPT0gJ2NoYXJhY3RlcnMnKSB7XG4gICAgICBpZiAoISgwLCBfaXNFcXVhbDIuZGVmYXVsdCkobGV0dGVyW2tleV0sIHRleHRTdHlsZVtrZXldKSkge1xuICAgICAgICAvLyBwcm9wZXJ0eSB2YXJpZXNcbiAgICAgICAgLy8gc3RvcCBzZWFyY2hpbmdcbiAgICAgICAgaXMgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZXRDaGFyYWN0ZXJzID0gdm9pZCAwO1xuXG52YXIgX3VuaXFCeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvdW5pcUJ5XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgc2V0Q2hhcmFjdGVycyA9IGFzeW5jIChub2RlLCBjaGFyYWN0ZXJzLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGZhbGxiYWNrRm9udCA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmFsbGJhY2tGb250KSB8fCB7XG4gICAgZmFtaWx5OiAnUm9ib3RvJyxcbiAgICBzdHlsZTogJ1JlZ3VsYXInXG4gIH07XG5cbiAgdHJ5IHtcbiAgICBpZiAobm9kZS5mb250TmFtZSA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNtYXJ0U3RyYXRlZ3kpID09PSAncHJldmFpbCcpIHtcbiAgICAgICAgY29uc3QgZm9udEhhc2hUcmVlID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjaGFyRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShpIC0gMSwgaSk7XG4gICAgICAgICAgY29uc3Qga2V5ID0gYCR7Y2hhckZvbnQuZmFtaWx5fTo6JHtjaGFyRm9udC5zdHlsZX1gO1xuICAgICAgICAgIGZvbnRIYXNoVHJlZVtrZXldID0gZm9udEhhc2hUcmVlW2tleV0gPyBmb250SGFzaFRyZWVba2V5XSArIDEgOiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldmFpbGVkVHJlZUl0ZW0gPSBPYmplY3QuZW50cmllcyhmb250SGFzaFRyZWUpLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVswXTtcbiAgICAgICAgY29uc3QgW2ZhbWlseSwgc3R5bGVdID0gcHJldmFpbGVkVHJlZUl0ZW1bMF0uc3BsaXQoJzo6Jyk7XG4gICAgICAgIGNvbnN0IHByZXZhaWxlZEZvbnQgPSB7XG4gICAgICAgICAgZmFtaWx5LFxuICAgICAgICAgIHN0eWxlXG4gICAgICAgIH07XG4gICAgICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMocHJldmFpbGVkRm9udCk7XG4gICAgICAgIG5vZGUuZm9udE5hbWUgPSBwcmV2YWlsZWRGb250O1xuICAgICAgfSBlbHNlIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNtYXJ0U3RyYXRlZ3kpID09PSAnc3RyaWN0Jykge1xuICAgICAgICByZXR1cm4gc2V0Q2hhcmFjdGVyc1dpdGhTdHJpY3RNYXRjaEZvbnQobm9kZSwgY2hhcmFjdGVycywgZmFsbGJhY2tGb250KTtcbiAgICAgIH0gZWxzZSBpZiAoKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zbWFydFN0cmF0ZWd5KSA9PT0gJ2V4cGVyaW1lbnRhbCcpIHtcbiAgICAgICAgcmV0dXJuIHNldENoYXJhY3RlcnNXaXRoU21hcnRNYXRjaEZvbnQobm9kZSwgY2hhcmFjdGVycywgZmFsbGJhY2tGb250KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hhckZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoMCwgMSk7XG4gICAgICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoZmlyc3RDaGFyRm9udCk7XG4gICAgICAgIG5vZGUuZm9udE5hbWUgPSBmaXJzdENoYXJGb250O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHtcbiAgICAgICAgZmFtaWx5OiBub2RlLmZvbnROYW1lLmZhbWlseSxcbiAgICAgICAgc3R5bGU6IG5vZGUuZm9udE5hbWUuc3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKGBGYWlsZWQgdG8gbG9hZCBcIiR7bm9kZS5mb250TmFtZVsnZmFtaWx5J119ICR7bm9kZS5mb250TmFtZVsnc3R5bGUnXX1cIiBmb250IGFuZCByZXBsYWNlZCB3aXRoIGZhbGxiYWNrIFwiJHtmYWxsYmFja0ZvbnQuZmFtaWx5fSAke2ZhbGxiYWNrRm9udC5zdHlsZX1cImAsIGVycik7XG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhmYWxsYmFja0ZvbnQpO1xuICAgIG5vZGUuZm9udE5hbWUgPSBmYWxsYmFja0ZvbnQ7XG4gIH1cblxuICB0cnkge1xuICAgIG5vZGUuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUud2FybihgRmFpbGVkIHRvIHNldCBjaGFyYWN0ZXJzLiBTa2lwcGVkLmAsIGVycik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnRzLnNldENoYXJhY3RlcnMgPSBzZXRDaGFyYWN0ZXJzO1xuXG5jb25zdCBzZXRDaGFyYWN0ZXJzV2l0aFN0cmljdE1hdGNoRm9udCA9IGFzeW5jIChub2RlLCBjaGFyYWN0ZXJzLCBmYWxsYmFja0ZvbnQpID0+IHtcbiAgY29uc3QgZm9udEhhc2hUcmVlID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdGFydElkeCA9IGkgLSAxO1xuICAgIGNvbnN0IHN0YXJ0Q2hhckZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoc3RhcnRJZHgsIGkpO1xuICAgIGNvbnN0IHN0YXJ0Q2hhckZvbnRWYWwgPSBgJHtzdGFydENoYXJGb250LmZhbWlseX06OiR7c3RhcnRDaGFyRm9udC5zdHlsZX1gO1xuXG4gICAgd2hpbGUgKGkgPCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoKSB7XG4gICAgICBpKys7XG4gICAgICBjb25zdCBjaGFyRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShpIC0gMSwgaSk7XG5cbiAgICAgIGlmIChzdGFydENoYXJGb250VmFsICE9PSBgJHtjaGFyRm9udC5mYW1pbHl9Ojoke2NoYXJGb250LnN0eWxlfWApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9udEhhc2hUcmVlW2Ake3N0YXJ0SWR4fV8ke2l9YF0gPSBzdGFydENoYXJGb250VmFsO1xuICB9XG5cbiAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhmYWxsYmFja0ZvbnQpO1xuICBub2RlLmZvbnROYW1lID0gZmFsbGJhY2tGb250O1xuICBub2RlLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xuICBjb25zb2xlLmxvZyhmb250SGFzaFRyZWUpO1xuICBhd2FpdCBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhmb250SGFzaFRyZWUpLm1hcChhc3luYyByYW5nZSA9PiB7XG4gICAgY29uc29sZS5sb2cocmFuZ2UsIGZvbnRIYXNoVHJlZVtyYW5nZV0pO1xuICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHJhbmdlLnNwbGl0KCdfJyk7XG4gICAgY29uc3QgW2ZhbWlseSwgc3R5bGVdID0gZm9udEhhc2hUcmVlW3JhbmdlXS5zcGxpdCgnOjonKTtcbiAgICBjb25zdCBtYXRjaGVkRm9udCA9IHtcbiAgICAgIGZhbWlseSxcbiAgICAgIHN0eWxlXG4gICAgfTtcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKG1hdGNoZWRGb250KTtcbiAgICByZXR1cm4gbm9kZS5zZXRSYW5nZUZvbnROYW1lKE51bWJlcihzdGFydCksIE51bWJlcihlbmQpLCBtYXRjaGVkRm9udCk7XG4gIH0pKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBnZXREZWxpbWl0ZXJQb3MgPSAoc3RyLCBkZWxpbWl0ZXIsIHN0YXJ0SWR4ID0gMCwgZW5kSWR4ID0gc3RyLmxlbmd0aCkgPT4ge1xuICBjb25zdCBpbmRpY2VzID0gW107XG4gIGxldCB0ZW1wID0gc3RhcnRJZHg7XG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0SWR4OyBpIDwgZW5kSWR4OyBpKyspIHtcbiAgICBpZiAoc3RyW2ldID09PSBkZWxpbWl0ZXIgJiYgaSArIHN0YXJ0SWR4ICE9PSBlbmRJZHggJiYgdGVtcCAhPT0gaSArIHN0YXJ0SWR4KSB7XG4gICAgICBpbmRpY2VzLnB1c2goW3RlbXAsIGkgKyBzdGFydElkeF0pO1xuICAgICAgdGVtcCA9IGkgKyBzdGFydElkeCArIDE7XG4gICAgfVxuICB9XG5cbiAgdGVtcCAhPT0gZW5kSWR4ICYmIGluZGljZXMucHVzaChbdGVtcCwgZW5kSWR4XSk7XG4gIHJldHVybiBpbmRpY2VzLmZpbHRlcihCb29sZWFuKTtcbn07XG5cbmNvbnN0IGJ1aWxkTGluZWFyT3JkZXIgPSBub2RlID0+IHtcbiAgY29uc3QgZm9udFRyZWUgPSBbXTtcbiAgY29uc3QgbmV3TGluZXNQb3MgPSBnZXREZWxpbWl0ZXJQb3Mobm9kZS5jaGFyYWN0ZXJzLCAnXFxuJyk7XG4gIG5ld0xpbmVzUG9zLmZvckVhY2goKFtuZXdMaW5lc1JhbmdlU3RhcnQsIG5ld0xpbmVzUmFuZ2VFbmRdLCBuKSA9PiB7XG4gICAgY29uc3QgbmV3TGluZXNSYW5nZUZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUobmV3TGluZXNSYW5nZVN0YXJ0LCBuZXdMaW5lc1JhbmdlRW5kKTtcblxuICAgIGlmIChuZXdMaW5lc1JhbmdlRm9udCA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgIGNvbnN0IHNwYWNlc1BvcyA9IGdldERlbGltaXRlclBvcyhub2RlLmNoYXJhY3RlcnMsICcgJywgbmV3TGluZXNSYW5nZVN0YXJ0LCBuZXdMaW5lc1JhbmdlRW5kKTtcbiAgICAgIHNwYWNlc1Bvcy5mb3JFYWNoKChbc3BhY2VzUmFuZ2VTdGFydCwgc3BhY2VzUmFuZ2VFbmRdLCBzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwYWNlc1JhbmdlRm9udCA9IG5vZGUuZ2V0UmFuZ2VGb250TmFtZShzcGFjZXNSYW5nZVN0YXJ0LCBzcGFjZXNSYW5nZUVuZCk7XG5cbiAgICAgICAgaWYgKHNwYWNlc1JhbmdlRm9udCA9PT0gZmlnbWEubWl4ZWQpIHtcbiAgICAgICAgICBjb25zdCBzcGFjZXNSYW5nZUZvbnQgPSBub2RlLmdldFJhbmdlRm9udE5hbWUoc3BhY2VzUmFuZ2VTdGFydCwgc3BhY2VzUmFuZ2VTdGFydFswXSk7XG4gICAgICAgICAgZm9udFRyZWUucHVzaCh7XG4gICAgICAgICAgICBzdGFydDogc3BhY2VzUmFuZ2VTdGFydCxcbiAgICAgICAgICAgIGRlbGltaXRlcjogJyAnLFxuICAgICAgICAgICAgZmFtaWx5OiBzcGFjZXNSYW5nZUZvbnQuZmFtaWx5LFxuICAgICAgICAgICAgc3R5bGU6IHNwYWNlc1JhbmdlRm9udC5zdHlsZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvbnRUcmVlLnB1c2goe1xuICAgICAgICAgICAgc3RhcnQ6IHNwYWNlc1JhbmdlU3RhcnQsXG4gICAgICAgICAgICBkZWxpbWl0ZXI6ICcgJyxcbiAgICAgICAgICAgIGZhbWlseTogc3BhY2VzUmFuZ2VGb250LmZhbWlseSxcbiAgICAgICAgICAgIHN0eWxlOiBzcGFjZXNSYW5nZUZvbnQuc3R5bGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvbnRUcmVlLnB1c2goe1xuICAgICAgICBzdGFydDogbmV3TGluZXNSYW5nZVN0YXJ0LFxuICAgICAgICBkZWxpbWl0ZXI6ICdcXG4nLFxuICAgICAgICBmYW1pbHk6IG5ld0xpbmVzUmFuZ2VGb250LmZhbWlseSxcbiAgICAgICAgc3R5bGU6IG5ld0xpbmVzUmFuZ2VGb250LnN0eWxlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZm9udFRyZWUuc29ydCgoYSwgYikgPT4gK2Euc3RhcnQgLSArYi5zdGFydCkubWFwKCh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlLFxuICAgIGRlbGltaXRlclxuICB9KSA9PiAoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZSxcbiAgICBkZWxpbWl0ZXJcbiAgfSkpO1xufTtcblxuY29uc3Qgc2V0Q2hhcmFjdGVyc1dpdGhTbWFydE1hdGNoRm9udCA9IGFzeW5jIChub2RlLCBjaGFyYWN0ZXJzLCBmYWxsYmFja0ZvbnQpID0+IHtcbiAgY29uc3QgcmFuZ2VUcmVlID0gYnVpbGRMaW5lYXJPcmRlcihub2RlKTtcbiAgY29uc3QgZm9udHNUb0xvYWQgPSAoMCwgX3VuaXFCeTIuZGVmYXVsdCkocmFuZ2VUcmVlLCAoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZVxuICB9KSA9PiBgJHtmYW1pbHl9Ojoke3N0eWxlfWApLm1hcCgoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZVxuICB9KSA9PiAoe1xuICAgIGZhbWlseSxcbiAgICBzdHlsZVxuICB9KSk7XG4gIGF3YWl0IFByb21pc2UuYWxsKFsuLi5mb250c1RvTG9hZCwgZmFsbGJhY2tGb250XS5tYXAoZmlnbWEubG9hZEZvbnRBc3luYykpO1xuICBub2RlLmZvbnROYW1lID0gZmFsbGJhY2tGb250O1xuICBub2RlLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xuICBsZXQgcHJldlBvcyA9IDA7XG4gIHJhbmdlVHJlZS5mb3JFYWNoKCh7XG4gICAgZmFtaWx5LFxuICAgIHN0eWxlLFxuICAgIGRlbGltaXRlclxuICB9KSA9PiB7XG4gICAgaWYgKHByZXZQb3MgPCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBkZWxpbWV0ZXJQb3MgPSBub2RlLmNoYXJhY3RlcnMuaW5kZXhPZihkZWxpbWl0ZXIsIHByZXZQb3MpO1xuICAgICAgY29uc3QgZW5kUG9zID0gZGVsaW1ldGVyUG9zID4gcHJldlBvcyA/IGRlbGltZXRlclBvcyA6IG5vZGUuY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgICBjb25zdCBtYXRjaGVkRm9udCA9IHtcbiAgICAgICAgZmFtaWx5LFxuICAgICAgICBzdHlsZVxuICAgICAgfTtcbiAgICAgIG5vZGUuc2V0UmFuZ2VGb250TmFtZShwcmV2UG9zLCBlbmRQb3MsIG1hdGNoZWRGb250KTtcbiAgICAgIHByZXZQb3MgPSBlbmRQb3MgKyAxO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0cnVlO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvcExldmVsRnJhbWVzO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBhbGwgdG9wIGxldmVsIGZyYW1lcyBvbiBjdXJyZW50UGFnZVxuICovXG5mdW5jdGlvbiB0b3BMZXZlbEZyYW1lcyhwYWdlID0gZmlnbWEuY3VycmVudFBhZ2UpIHtcbiAgcmV0dXJuIHBhZ2UuY2hpbGRyZW4uZmlsdGVyKG5vZGUgPT4gbm9kZS50eXBlID09PSAnRlJBTUUnKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNsb25lXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jbG9uZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldEFsbEZvbnRzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRBbGxGb250cy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldEJvdW5kaW5nUmVjdFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0Qm91bmRpbmdSZWN0LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0Tm9kZUluZGV4XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXROb2RlSW5kZXguZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRQYWdlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRQYWdlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaGFzQ2hpbGRyZW5cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2hhc0NoaWxkcmVuLmhhc0NoaWxkcmVuO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzUGFydE9mSW5zdGFuY2VcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzUGFydE9mSW5zdGFuY2UuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1BhcnRPZk5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzUGFydE9mTm9kZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzVmlzaWJsZU5vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzVmlzaWJsZU5vZGUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJsb2FkVW5pcXVlRm9udHNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2xvYWRVbmlxdWVGb250cy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImxvYWRGb250c1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfbG9hZEZvbnRzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibm9kZVRvT2JqZWN0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9ub2RlVG9PYmplY3Qubm9kZVRvT2JqZWN0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInRvcExldmVsRnJhbWVzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90b3BMZXZlbEZyYW1lcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldFRleHROb2RlQ1NTXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRDU1NTdHlsZXMuZ2V0VGV4dE5vZGVDU1M7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZmluZEFsbFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZmluZE1ldGhvZHMuZmluZEFsbDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRSZWxhdGl2ZVBvc2l0aW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRSZWxhdGl2ZVBvc2l0aW9uLmdldFJlbGF0aXZlUG9zaXRpb247XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0VG9wTGV2ZWxQYXJlbnRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldFJlbGF0aXZlUG9zaXRpb24uZ2V0VG9wTGV2ZWxQYXJlbnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZmlnbWFSR0JUb1dlYlJHQlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfY29udmVydENvbG9yLmZpZ21hUkdCVG9XZWJSR0I7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2ViUkdCVG9GaWdtYVJHQlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfY29udmVydENvbG9yLndlYlJHQlRvRmlnbWFSR0I7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZmlnbWFSR0JUb0hleFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfY29udmVydENvbG9yLmZpZ21hUkdCVG9IZXg7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaGV4VG9GaWdtYVJHQlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfY29udmVydENvbG9yLmhleFRvRmlnbWFSR0I7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNDb21wb25lbnROb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzQ29tcG9uZW50Tm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0ZyYW1lTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc0ZyYW1lTm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0dyb3VwTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc0dyb3VwTm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0luc3RhbmNlTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc0luc3RhbmNlTm9kZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1BhZ2VOb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc1R5cGVOb2RlLmlzUGFnZU5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNUZXh0Tm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc1RleHROb2RlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzT25lT2ZOb2RlVHlwZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNUeXBlTm9kZS5pc09uZU9mTm9kZVR5cGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXh0cmFjdEltYWdlQ3JvcFBhcmFtc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZXh0cmFjdEltYWdlQ3JvcFBhcmFtcy5leHRyYWN0SW1hZ2VDcm9wUGFyYW1zO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImV4dHJhY3RMaW5lYXJHcmFkaWVudFBhcmFtc0Zyb21UcmFuc2Zvcm1cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2V4dHJhY3RMaW5lYXJHcmFkaWVudFN0YXJ0RW5kLmV4dHJhY3RMaW5lYXJHcmFkaWVudFBhcmFtc0Zyb21UcmFuc2Zvcm07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXMuZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNldENoYXJhY3RlcnNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3NldENoYXJhY3RlcnMuc2V0Q2hhcmFjdGVycztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVRleHRTdHlsZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUucGFyc2VUZXh0U3R5bGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3BsaXRUZXh0U3R5bGVJbnRvTGluZXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLnNwbGl0VGV4dFN0eWxlSW50b0xpbmVzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImpvaW5UZXh0TGluZXNTdHlsZXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLmpvaW5UZXh0TGluZXNTdHlsZXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYXBwbHlUZXh0U3R5bGVUb1RleHROb2RlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZVRleHRTdHlsZS5hcHBseVRleHRTdHlsZVRvVGV4dE5vZGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY2hhbmdlQ2hhcmFjdGVyc1RleHRTdHlsZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2VUZXh0U3R5bGUuY2hhbmdlQ2hhcmFjdGVyc1RleHRTdHlsZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjaGFuZ2VUZXh0U3R5bGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3BhcnNlVGV4dFN0eWxlLmNoYW5nZVRleHRTdHlsZTtcbiAgfVxufSk7XG5cbnZhciBfY2xvbmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvY2xvbmVcIikpO1xuXG52YXIgX2dldEFsbEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2dldEFsbEZvbnRzXCIpKTtcblxudmFyIF9nZXRCb3VuZGluZ1JlY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0Qm91bmRpbmdSZWN0XCIpKTtcblxudmFyIF9nZXROb2RlSW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0Tm9kZUluZGV4XCIpKTtcblxudmFyIF9nZXRQYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2dldFBhZ2VcIikpO1xuXG52YXIgX2hhc0NoaWxkcmVuID0gcmVxdWlyZShcIi4vaGVscGVycy9oYXNDaGlsZHJlblwiKTtcblxudmFyIF9pc1BhcnRPZkluc3RhbmNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2lzUGFydE9mSW5zdGFuY2VcIikpO1xuXG52YXIgX2lzUGFydE9mTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9pc1BhcnRPZk5vZGVcIikpO1xuXG52YXIgX2lzVmlzaWJsZU5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvaXNWaXNpYmxlTm9kZVwiKSk7XG5cbnZhciBfbG9hZFVuaXF1ZUZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2xvYWRVbmlxdWVGb250c1wiKSk7XG5cbnZhciBfbG9hZEZvbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2xvYWRGb250c1wiKSk7XG5cbnZhciBfbm9kZVRvT2JqZWN0ID0gcmVxdWlyZShcIi4vaGVscGVycy9ub2RlVG9PYmplY3RcIik7XG5cbnZhciBfdG9wTGV2ZWxGcmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvdG9wTGV2ZWxGcmFtZXNcIikpO1xuXG52YXIgX2dldENTU1N0eWxlcyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZ2V0Q1NTU3R5bGVzXCIpO1xuXG52YXIgX2ZpbmRNZXRob2RzID0gcmVxdWlyZShcIi4vaGVscGVycy9maW5kTWV0aG9kc1wiKTtcblxudmFyIF9nZXRSZWxhdGl2ZVBvc2l0aW9uID0gcmVxdWlyZShcIi4vaGVscGVycy9nZXRSZWxhdGl2ZVBvc2l0aW9uXCIpO1xuXG52YXIgX2NvbnZlcnRDb2xvciA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvY29udmVydENvbG9yXCIpO1xuXG52YXIgX2lzVHlwZU5vZGUgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2lzVHlwZU5vZGVcIik7XG5cbnZhciBfZXh0cmFjdEltYWdlQ3JvcFBhcmFtcyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZXh0cmFjdEltYWdlQ3JvcFBhcmFtc1wiKTtcblxudmFyIF9leHRyYWN0TGluZWFyR3JhZGllbnRTdGFydEVuZCA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvZXh0cmFjdExpbmVhckdyYWRpZW50U3RhcnRFbmRcIik7XG5cbnZhciBfZXh0cmFjdFJhZGlhbE9yRGlhbW9uZEdyYWRpZW50UGFyYW1zID0gcmVxdWlyZShcIi4vaGVscGVycy9leHRyYWN0UmFkaWFsT3JEaWFtb25kR3JhZGllbnRQYXJhbXNcIik7XG5cbnZhciBfc2V0Q2hhcmFjdGVycyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvc2V0Q2hhcmFjdGVyc1wiKTtcblxudmFyIF9wYXJzZVRleHRTdHlsZSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvcGFyc2VUZXh0U3R5bGVcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9IiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcbiIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG4iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RWFjaDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcbiIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhcnJheUluY2x1ZGVzYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNXaXRoKGFycmF5LCB2YWx1ZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4iLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuIiwidmFyIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbkluYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduSW4ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbkluO1xuIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduVmFsdWU7XG4iLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaCcpLFxuICAgIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbicpLFxuICAgIGJhc2VBc3NpZ25JbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25JbicpLFxuICAgIGNsb25lQnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVCdWZmZXInKSxcbiAgICBjb3B5QXJyYXkgPSByZXF1aXJlKCcuL19jb3B5QXJyYXknKSxcbiAgICBjb3B5U3ltYm9scyA9IHJlcXVpcmUoJy4vX2NvcHlTeW1ib2xzJyksXG4gICAgY29weVN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2NvcHlTeW1ib2xzSW4nKSxcbiAgICBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpLFxuICAgIGdldEFsbEtleXNJbiA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXNJbicpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGluaXRDbG9uZUFycmF5ID0gcmVxdWlyZSgnLi9faW5pdENsb25lQXJyYXknKSxcbiAgICBpbml0Q2xvbmVCeVRhZyA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUJ5VGFnJyksXG4gICAgaW5pdENsb25lT2JqZWN0ID0gcmVxdWlyZSgnLi9faW5pdENsb25lT2JqZWN0JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzTWFwID0gcmVxdWlyZSgnLi9pc01hcCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU2V0ID0gcmVxdWlyZSgnLi9pc1NldCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfRkxBVF9GTEFHID0gMixcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIHN1cHBvcnRlZCBieSBgXy5jbG9uZWAuICovXG52YXIgY2xvbmVhYmxlVGFncyA9IHt9O1xuY2xvbmVhYmxlVGFnc1thcmdzVGFnXSA9IGNsb25lYWJsZVRhZ3NbYXJyYXlUYWddID1cbmNsb25lYWJsZVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRhVmlld1RhZ10gPVxuY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPVxuY2xvbmVhYmxlVGFnc1tmbG9hdDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50MTZUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MzJUYWddID0gY2xvbmVhYmxlVGFnc1ttYXBUYWddID1cbmNsb25lYWJsZVRhZ3NbbnVtYmVyVGFnXSA9IGNsb25lYWJsZVRhZ3Nbb2JqZWN0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3JlZ2V4cFRhZ10gPSBjbG9uZWFibGVUYWdzW3NldFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID0gY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDhUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OENsYW1wZWRUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5jbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCBhbmQgYF8uY2xvbmVEZWVwYCB3aGljaCB0cmFja3NcbiAqIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gRGVlcCBjbG9uZVxuICogIDIgLSBGbGF0dGVuIGluaGVyaXRlZCBwcm9wZXJ0aWVzXG4gKiAgNCAtIENsb25lIHN5bWJvbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQsXG4gICAgICBpc0RlZXAgPSBiaXRtYXNrICYgQ0xPTkVfREVFUF9GTEFHLFxuICAgICAgaXNGbGF0ID0gYml0bWFzayAmIENMT05FX0ZMQVRfRkxBRyxcbiAgICAgIGlzRnVsbCA9IGJpdG1hc2sgJiBDTE9ORV9TWU1CT0xTX0ZMQUc7XG5cbiAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gY29weUFycmF5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgICAgaXNGdW5jID0gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcblxuICAgIGlmIChpc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjbG9uZUJ1ZmZlcih2YWx1ZSwgaXNEZWVwKTtcbiAgICB9XG4gICAgaWYgKHRhZyA9PSBvYmplY3RUYWcgfHwgdGFnID09IGFyZ3NUYWcgfHwgKGlzRnVuYyAmJiAhb2JqZWN0KSkge1xuICAgICAgcmVzdWx0ID0gKGlzRmxhdCB8fCBpc0Z1bmMpID8ge30gOiBpbml0Q2xvbmVPYmplY3QodmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGlzRmxhdFxuICAgICAgICAgID8gY29weVN5bWJvbHNJbih2YWx1ZSwgYmFzZUFzc2lnbkluKHJlc3VsdCwgdmFsdWUpKVxuICAgICAgICAgIDogY29weVN5bWJvbHModmFsdWUsIGJhc2VBc3NpZ24ocmVzdWx0LCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsb25lYWJsZVRhZ3NbdGFnXSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZUJ5VGFnKHZhbHVlLCB0YWcsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24oc3ViVmFsdWUpIHtcbiAgICAgIHJlc3VsdC5hZGQoYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdWJWYWx1ZSwgdmFsdWUsIHN0YWNrKSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNNYXAodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGtleXNGdW5jID0gaXNGdWxsXG4gICAgPyAoaXNGbGF0ID8gZ2V0QWxsS2V5c0luIDogZ2V0QWxsS2V5cylcbiAgICA6IChpc0ZsYXQgPyBrZXlzSW4gOiBrZXlzKTtcblxuICB2YXIgcHJvcHMgPSBpc0FyciA/IHVuZGVmaW5lZCA6IGtleXNGdW5jKHZhbHVlKTtcbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ2xvbmU7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNyZWF0ZTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG4iLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaGFzSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VIYXNJbihvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYga2V5IGluIE9iamVjdChvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VIYXNJbjtcbiIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJc05hTiA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hTicpLFxuICAgIHN0cmljdEluZGV4T2YgPSByZXF1aXJlKCcuL19zdHJpY3RJbmRleE9mJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWVcbiAgICA/IHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpXG4gICAgOiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXNOYU4sIGZyb21JbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcbiIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL19lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9fZXF1YWxPYmplY3RzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcbiIsInZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXBgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hcCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IG1hcFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXA7XG4iLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWF0Y2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBvYmplY3RgIGlzIGEgbWF0Y2gsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gIWxlbmd0aDtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgaWYgKChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSlcbiAgICAgICAgICA/IGRhdGFbMV0gIT09IG9iamVjdFtkYXRhWzBdXVxuICAgICAgICAgIDogIShkYXRhWzBdIGluIG9iamVjdClcbiAgICAgICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgdmFyIGtleSA9IGRhdGFbMF0sXG4gICAgICAgIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHNyY1ZhbHVlID0gZGF0YVsxXTtcblxuICAgIGlmIChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSkge1xuICAgICAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFjayA9IG5ldyBTdGFjaztcbiAgICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spO1xuICAgICAgfVxuICAgICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcsIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICAgICAgOiByZXN1bHRcbiAgICAgICAgICApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWF0Y2g7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmFOYCB3aXRob3V0IHN1cHBvcnQgZm9yIG51bWJlciBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGBOYU5gLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hTjtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG4iLCJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzU2V0YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHNldCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNTZXQodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBzZXRUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzU2V0O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlc1Byb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLml0ZXJhdGVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbdmFsdWU9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYW4gaXRlcmF0ZWUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGl0ZXJhdGVlLlxuICovXG5mdW5jdGlvbiBiYXNlSXRlcmF0ZWUodmFsdWUpIHtcbiAgLy8gRG9uJ3Qgc3RvcmUgdGhlIGB0eXBlb2ZgIHJlc3VsdCBpbiBhIHZhcmlhYmxlIHRvIGF2b2lkIGEgSklUIGJ1ZyBpbiBTYWZhcmkgOS5cbiAgLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYwMzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gYmFzZU1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pXG4gICAgICA6IGJhc2VNYXRjaGVzKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHkodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJdGVyYXRlZTtcbiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzSW4gPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5c0luO1xuIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9fYmFzZUlzTWF0Y2gnKSxcbiAgICBnZXRNYXRjaERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXRjaERhdGEnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzO1xuIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKSxcbiAgICBnZXQgPSByZXF1aXJlKCcuL2dldCcpLFxuICAgIGhhc0luID0gcmVxdWlyZSgnLi9oYXNJbicpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcbiAgICAgID8gaGFzSW4ob2JqZWN0LCBwYXRoKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG4iLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKSxcbiAgICBjcmVhdGVTZXQgPSByZXF1aXJlKCcuL19jcmVhdGVTZXQnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuaXFCeWAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHNlZW4gPSByZXN1bHQ7XG5cbiAgaWYgKGNvbXBhcmF0b3IpIHtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4gIH1cbiAgZWxzZSBpZiAobGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcbiAgICB2YXIgc2V0ID0gaXRlcmF0ZWUgPyBudWxsIDogY3JlYXRlU2V0KGFycmF5KTtcbiAgICBpZiAoc2V0KSB7XG4gICAgICByZXR1cm4gc2V0VG9BcnJheShzZXQpO1xuICAgIH1cbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgc2VlbiA9IG5ldyBTZXRDYWNoZTtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWVuID0gaXRlcmF0ZWUgPyBbXSA6IHJlc3VsdDtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciBzZWVuSW5kZXggPSBzZWVuLmxlbmd0aDtcbiAgICAgIHdoaWxlIChzZWVuSW5kZXgtLSkge1xuICAgICAgICBpZiAoc2VlbltzZWVuSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHNlZW4sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgaWYgKHNlZW4gIT09IHJlc3VsdCkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmlxO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcbiIsInZhciBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVBcnJheUJ1ZmZlcjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQnVmZmVyO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEYXRhVmlldztcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVSZWdFeHA7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVN5bWJvbDtcbiIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lVHlwZWRBcnJheTtcbiIsIi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlBcnJheTtcbiIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpO1xuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHM7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIGFuZCBpbmhlcml0ZWQgc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHNJbihzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzSW47XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwidmFyIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCcuL25vb3AnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2JqZWN0IG9mIGB2YWx1ZXNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhZGQgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBzZXQuXG4gKi9cbnZhciBjcmVhdGVTZXQgPSAhKFNldCAmJiAoMSAvIHNldFRvQXJyYXkobmV3IFNldChbLC0wXSkpWzFdKSA9PSBJTkZJTklUWSkgPyBub29wIDogZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgU2V0KHZhbHVlcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNldDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG4iLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vX2FycmF5U29tZScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYGFycmF5YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBDaGVjayB0aGF0IGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgYXJyU3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIHZhciBvdGhTdGFja2VkID0gc3RhY2suZ2V0KG90aGVyKTtcbiAgaWYgKGFyclN0YWNrZWQgJiYgb3RoU3RhY2tlZCkge1xuICAgIHJldHVybiBhcnJTdGFja2VkID09IG90aGVyICYmIG90aFN0YWNrZWQgPT0gYXJyYXk7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuIiwidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIHRoYXQgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBvYmpTdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIHZhciBvdGhTdGFja2VkID0gc3RhY2suZ2V0KG90aGVyKTtcbiAgaWYgKG9ialN0YWNrZWQgJiYgb3RoU3RhY2tlZCkge1xuICAgIHJldHVybiBvYmpTdGFja2VkID09IG90aGVyICYmIG90aFN0YWNrZWQgPT0gb2JqZWN0O1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNJbiwgZ2V0U3ltYm9sc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzSW47XG4iLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBrZXkgPSByZXN1bHRbbGVuZ3RoXSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHNJbiA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKG9iamVjdCkge1xuICAgIGFycmF5UHVzaChyZXN1bHQsIGdldFN5bWJvbHMob2JqZWN0KSk7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9sc0luO1xuIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGV4aXN0cyBvbiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYXNGdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjayBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKTtcbiAgICBpZiAoIShyZXN1bHQgPSBvYmplY3QgIT0gbnVsbCAmJiBoYXNGdW5jKG9iamVjdCwga2V5KSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgfVxuICBpZiAocmVzdWx0IHx8ICsraW5kZXggIT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBsZW5ndGggPSBvYmplY3QgPT0gbnVsbCA/IDAgOiBvYmplY3QubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUGF0aDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gbmV3IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUFycmF5O1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyksXG4gICAgY2xvbmVEYXRhVmlldyA9IHJlcXVpcmUoJy4vX2Nsb25lRGF0YVZpZXcnKSxcbiAgICBjbG9uZVJlZ0V4cCA9IHJlcXVpcmUoJy4vX2Nsb25lUmVnRXhwJyksXG4gICAgY2xvbmVTeW1ib2wgPSByZXF1aXJlKCcuL19jbG9uZVN5bWJvbCcpLFxuICAgIGNsb25lVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Nsb25lVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTWFwYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBgU2V0YCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcjtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVCeVRhZztcbiIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcbiIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBtYXRjaGVzUHJvcGVydHlgIGZvciBzb3VyY2UgdmFsdWVzIHN1aXRhYmxlXG4gKiBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUoa2V5LCBzcmNWYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWUgJiZcbiAgICAgIChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gT2JqZWN0KG9iamVjdCkpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZTtcbiIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXNJbjtcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG4iLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IDQ2IC8qIC4gKi8pIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3ViU3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG4iLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuIiwidmFyIGJhc2VDbG9uZSA9IHJlcXVpcmUoJy4vX2Jhc2VDbG9uZScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmNsb25lYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBjbG9uZXMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVjdXJzaXZlbHkgY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnYSc6IDEgfSwgeyAnYic6IDIgfV07XG4gKlxuICogdmFyIGRlZXAgPSBfLmNsb25lRGVlcChvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKGRlZXBbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gIHJldHVybiBiYXNlQ2xvbmUodmFsdWUsIENMT05FX0RFRVBfRkxBRyB8IENMT05FX1NZTUJPTFNfRkxBRyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG4iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAsIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldDtcbiIsInZhciBiYXNlSGFzSW4gPSByZXF1aXJlKCcuL19iYXNlSGFzSW4nKSxcbiAgICBoYXNQYXRoID0gcmVxdWlyZSgnLi9faGFzUGF0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgaXMgYSBkaXJlY3Qgb3IgaW5oZXJpdGVkIHByb3BlcnR5IG9mIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IF8uY3JlYXRlKHsgJ2EnOiBfLmNyZWF0ZSh7ICdiJzogMiB9KSB9KTtcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EuYicpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2InKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGhhc0luKG9iamVjdCwgcGF0aCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgaGFzUGF0aChvYmplY3QsIHBhdGgsIGJhc2VIYXNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzSW47XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlXG4gKiBlcXVpdmFsZW50LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBjb21wYXJpbmcgYXJyYXlzLCBhcnJheSBidWZmZXJzLCBib29sZWFucyxcbiAqIGRhdGUgb2JqZWN0cywgZXJyb3Igb2JqZWN0cywgbWFwcywgbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcyxcbiAqIHNldHMsIHN0cmluZ3MsIHN5bWJvbHMsIGFuZCB0eXBlZCBhcnJheXMuIGBPYmplY3RgIG9iamVjdHMgYXJlIGNvbXBhcmVkXG4gKiBieSB0aGVpciBvd24sIG5vdCBpbmhlcml0ZWQsIGVudW1lcmFibGUgcHJvcGVydGllcy4gRnVuY3Rpb25zIGFuZCBET01cbiAqIG5vZGVzIGFyZSBjb21wYXJlZCBieSBzdHJpY3QgZXF1YWxpdHksIGkuZS4gYD09PWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uaXNFcXVhbChvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBvYmplY3QgPT09IG90aGVyO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcXVhbDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCJ2YXIgYmFzZUlzTWFwID0gcmVxdWlyZSgnLi9fYmFzZUlzTWFwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc01hcCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzTWFwO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgTWFwYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBtYXAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc01hcChuZXcgTWFwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTWFwKG5ldyBXZWFrTWFwKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc01hcCA9IG5vZGVJc01hcCA/IGJhc2VVbmFyeShub2RlSXNNYXApIDogYmFzZUlzTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFwO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUlzU2V0ID0gcmVxdWlyZSgnLi9fYmFzZUlzU2V0JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1NldCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzU2V0O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU2V0YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1NldChuZXcgU2V0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU2V0KG5ldyBXZWFrU2V0KTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1NldCA9IG5vZGVJc1NldCA/IGJhc2VVbmFyeShub2RlSXNTZXQpIDogYmFzZUlzU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2V0O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNVbmRlZmluZWQodm9pZCAwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVW5kZWZpbmVkKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNVbmRlZmluZWQ7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG4iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcbiIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHknKSxcbiAgICBiYXNlUHJvcGVydHlEZWVwID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5RGVlcCcpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGEgZ2l2ZW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW1xuICogICB7ICdhJzogeyAnYic6IDIgfSB9LFxuICogICB7ICdhJzogeyAnYic6IDEgfSB9XG4gKiBdO1xuICpcbiAqIF8ubWFwKG9iamVjdHMsIF8ucHJvcGVydHkoJ2EuYicpKTtcbiAqIC8vID0+IFsyLCAxXVxuICpcbiAqIF8ubWFwKF8uc29ydEJ5KG9iamVjdHMsIF8ucHJvcGVydHkoWydhJywgJ2InXSkpLCAnYS5iJyk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICByZXR1cm4gaXNLZXkocGF0aCkgPyBiYXNlUHJvcGVydHkodG9LZXkocGF0aCkpIDogYmFzZVByb3BlcnR5RGVlcChwYXRoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9wZXJ0eTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuIiwidmFyIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLnVuaXFgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGl0ZXJhdGVlYCB3aGljaCBpc1xuICogaW52b2tlZCBmb3IgZWFjaCBlbGVtZW50IGluIGBhcnJheWAgdG8gZ2VuZXJhdGUgdGhlIGNyaXRlcmlvbiBieSB3aGljaFxuICogdW5pcXVlbmVzcyBpcyBjb21wdXRlZC4gVGhlIG9yZGVyIG9mIHJlc3VsdCB2YWx1ZXMgaXMgZGV0ZXJtaW5lZCBieSB0aGVcbiAqIG9yZGVyIHRoZXkgb2NjdXIgaW4gdGhlIGFycmF5LiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDpcbiAqICh2YWx1ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVuaXFCeShbMi4xLCAxLjIsIDIuM10sIE1hdGguZmxvb3IpO1xuICogLy8gPT4gWzIuMSwgMS4yXVxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy51bmlxQnkoW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH0sIHsgJ3gnOiAxIH1dLCAneCcpO1xuICogLy8gPT4gW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH1dXG4gKi9cbmZ1bmN0aW9uIHVuaXFCeShhcnJheSwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVVuaXEoYXJyYXksIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMikpIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pcUJ5O1xuIiwidmFyIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLnVuaXFgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGNvbXBhcmF0b3JgIHdoaWNoXG4gKiBpcyBpbnZva2VkIHRvIGNvbXBhcmUgZWxlbWVudHMgb2YgYGFycmF5YC4gVGhlIG9yZGVyIG9mIHJlc3VsdCB2YWx1ZXMgaXNcbiAqIGRldGVybWluZWQgYnkgdGhlIG9yZGVyIHRoZXkgb2NjdXIgaW4gdGhlIGFycmF5LlRoZSBjb21wYXJhdG9yIGlzIGludm9rZWRcbiAqIHdpdGggdHdvIGFyZ3VtZW50czogKGFyclZhbCwgb3RoVmFsKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAneCc6IDEsICd5JzogMiB9LCB7ICd4JzogMiwgJ3knOiAxIH0sIHsgJ3gnOiAxLCAneSc6IDIgfV07XG4gKlxuICogXy51bmlxV2l0aChvYmplY3RzLCBfLmlzRXF1YWwpO1xuICogLy8gPT4gW3sgJ3gnOiAxLCAneSc6IDIgfSwgeyAneCc6IDIsICd5JzogMSB9XVxuICovXG5mdW5jdGlvbiB1bmlxV2l0aChhcnJheSwgY29tcGFyYXRvcikge1xuICBjb21wYXJhdG9yID0gdHlwZW9mIGNvbXBhcmF0b3IgPT0gJ2Z1bmN0aW9uJyA/IGNvbXBhcmF0b3IgOiB1bmRlZmluZWQ7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSA/IGJhc2VVbmlxKGFycmF5LCB1bmRlZmluZWQsIGNvbXBhcmF0b3IpIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pcVdpdGg7XG4iLCJ2YXIgU3lsdmVzdGVyID0ge31cblxuU3lsdmVzdGVyLk1hdHJpeCA9IGZ1bmN0aW9uKCkge31cblxuU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUgPSBmdW5jdGlvbihlbGVtZW50cykge1xuICB2YXIgTSA9IG5ldyBTeWx2ZXN0ZXIuTWF0cml4KClcbiAgcmV0dXJuIE0uc2V0RWxlbWVudHMoZWxlbWVudHMpXG59XG5cblN5bHZlc3Rlci5NYXRyaXguSSA9IGZ1bmN0aW9uKG4pIHtcbiAgdmFyIGVscyA9IFtdLFxuICAgIGkgPSBuLFxuICAgIGpcbiAgd2hpbGUgKGktLSkge1xuICAgIGogPSBuXG4gICAgZWxzW2ldID0gW11cbiAgICB3aGlsZSAoai0tKSB7XG4gICAgICBlbHNbaV1bal0gPSBpID09PSBqID8gMSA6IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKGVscylcbn1cblxuU3lsdmVzdGVyLk1hdHJpeC5wcm90b3R5cGUgPSB7XG4gIGR1cDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKHRoaXMuZWxlbWVudHMpXG4gIH0sXG5cbiAgaXNTcXVhcmU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb2xzID0gdGhpcy5lbGVtZW50cy5sZW5ndGggPT09IDAgPyAwIDogdGhpcy5lbGVtZW50c1swXS5sZW5ndGhcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cy5sZW5ndGggPT09IGNvbHNcbiAgfSxcblxuICB0b1JpZ2h0VHJpYW5ndWxhcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gU3lsdmVzdGVyLk1hdHJpeC5jcmVhdGUoW10pXG4gICAgdmFyIE0gPSB0aGlzLmR1cCgpLFxuICAgICAgZWxzXG4gICAgdmFyIG4gPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGksXG4gICAgICBqLFxuICAgICAgbnAgPSB0aGlzLmVsZW1lbnRzWzBdLmxlbmd0aCxcbiAgICAgIHBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBpZiAoTS5lbGVtZW50c1tpXVtpXSA9PT0gMCkge1xuICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgIGlmIChNLmVsZW1lbnRzW2pdW2ldICE9PSAwKSB7XG4gICAgICAgICAgICBlbHMgPSBbXVxuICAgICAgICAgICAgZm9yIChwID0gMDsgcCA8IG5wOyBwKyspIHtcbiAgICAgICAgICAgICAgZWxzLnB1c2goTS5lbGVtZW50c1tpXVtwXSArIE0uZWxlbWVudHNbal1bcF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBNLmVsZW1lbnRzW2ldID0gZWxzXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE0uZWxlbWVudHNbaV1baV0gIT09IDApIHtcbiAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICB2YXIgbXVsdGlwbGllciA9IE0uZWxlbWVudHNbal1baV0gLyBNLmVsZW1lbnRzW2ldW2ldXG4gICAgICAgICAgZWxzID0gW11cbiAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgbnA7IHArKykge1xuICAgICAgICAgICAgLy8gRWxlbWVudHMgd2l0aCBjb2x1bW4gbnVtYmVycyB1cCB0byBhbiBpbmNsdWRpbmcgdGhlIG51bWJlciBvZiB0aGVcbiAgICAgICAgICAgIC8vIHJvdyB0aGF0IHdlJ3JlIHN1YnRyYWN0aW5nIGNhbiBzYWZlbHkgYmUgc2V0IHN0cmFpZ2h0IHRvIHplcm8sXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGF0J3MgdGhlIHBvaW50IG9mIHRoaXMgcm91dGluZSBhbmQgaXQgYXZvaWRzIGhhdmluZyB0b1xuICAgICAgICAgICAgLy8gbG9vcCBvdmVyIGFuZCBjb3JyZWN0IHJvdW5kaW5nIGVycm9ycyBsYXRlclxuICAgICAgICAgICAgZWxzLnB1c2goXG4gICAgICAgICAgICAgIHAgPD0gaSA/IDAgOiBNLmVsZW1lbnRzW2pdW3BdIC0gTS5lbGVtZW50c1tpXVtwXSAqIG11bHRpcGxpZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgTS5lbGVtZW50c1tqXSA9IGVsc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBNXG4gIH0sXG5cbiAgZGV0ZXJtaW5hbnQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzU3F1YXJlKCkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHZhciBNID0gdGhpcy50b1JpZ2h0VHJpYW5ndWxhcigpXG4gICAgdmFyIGRldCA9IE0uZWxlbWVudHNbMF1bMF0sXG4gICAgICBuID0gTS5lbGVtZW50cy5sZW5ndGhcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgZGV0ID0gZGV0ICogTS5lbGVtZW50c1tpXVtpXVxuICAgIH1cbiAgICByZXR1cm4gZGV0XG4gIH0sXG5cbiAgaXNTaW5ndWxhcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTcXVhcmUoKSAmJiB0aGlzLmRldGVybWluYW50KCkgPT09IDBcbiAgfSxcblxuICBhdWdtZW50OiBmdW5jdGlvbihtYXRyaXgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmR1cCgpXG4gICAgfVxuICAgIHZhciBNID0gbWF0cml4LmVsZW1lbnRzIHx8IG1hdHJpeFxuICAgIGlmICh0eXBlb2YgTVswXVswXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIE0gPSBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZShNKS5lbGVtZW50c1xuICAgIH1cbiAgICB2YXIgVCA9IHRoaXMuZHVwKCksXG4gICAgICBjb2xzID0gVC5lbGVtZW50c1swXS5sZW5ndGhcbiAgICB2YXIgaSA9IFQuZWxlbWVudHMubGVuZ3RoLFxuICAgICAgbmogPSBNWzBdLmxlbmd0aCxcbiAgICAgIGpcbiAgICBpZiAoaSAhPT0gTS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGogPSBualxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBULmVsZW1lbnRzW2ldW2NvbHMgKyBqXSA9IE1baV1bal1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFRcbiAgfSxcblxuICBpbnZlcnNlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICghdGhpcy5pc1NxdWFyZSgpIHx8IHRoaXMuaXNTaW5ndWxhcigpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICB2YXIgbiA9IHRoaXMuZWxlbWVudHMubGVuZ3RoLFxuICAgICAgaSA9IG4sXG4gICAgICBqXG4gICAgdmFyIE0gPSB0aGlzLmF1Z21lbnQoU3lsdmVzdGVyLk1hdHJpeC5JKG4pKS50b1JpZ2h0VHJpYW5ndWxhcigpXG4gICAgdmFyIG5wID0gTS5lbGVtZW50c1swXS5sZW5ndGgsXG4gICAgICBwLFxuICAgICAgZWxzLFxuICAgICAgZGl2aXNvclxuICAgIHZhciBpbnZlcnNlX2VsZW1lbnRzID0gW10sXG4gICAgICBuZXdfZWxlbWVudFxuICAgIC8vIFN5bHZlc3Rlci5NYXRyaXggaXMgbm9uLXNpbmd1bGFyIHNvIHRoZXJlIHdpbGwgYmUgbm8gemVyb3Mgb24gdGhlXG4gICAgLy8gZGlhZ29uYWwuIEN5Y2xlIHRocm91Z2ggcm93cyBmcm9tIGxhc3QgdG8gZmlyc3QuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgLy8gRmlyc3QsIG5vcm1hbGlzZSBkaWFnb25hbCBlbGVtZW50cyB0byAxXG4gICAgICBlbHMgPSBbXVxuICAgICAgaW52ZXJzZV9lbGVtZW50c1tpXSA9IFtdXG4gICAgICBkaXZpc29yID0gTS5lbGVtZW50c1tpXVtpXVxuICAgICAgZm9yIChwID0gMDsgcCA8IG5wOyBwKyspIHtcbiAgICAgICAgbmV3X2VsZW1lbnQgPSBNLmVsZW1lbnRzW2ldW3BdIC8gZGl2aXNvclxuICAgICAgICBlbHMucHVzaChuZXdfZWxlbWVudClcbiAgICAgICAgLy8gU2h1ZmZsZSBvZmYgdGhlIGN1cnJlbnQgcm93IG9mIHRoZSByaWdodCBoYW5kIHNpZGUgaW50byB0aGUgcmVzdWx0c1xuICAgICAgICAvLyBhcnJheSBhcyBpdCB3aWxsIG5vdCBiZSBtb2RpZmllZCBieSBsYXRlciBydW5zIHRocm91Z2ggdGhpcyBsb29wXG4gICAgICAgIGlmIChwID49IG4pIHtcbiAgICAgICAgICBpbnZlcnNlX2VsZW1lbnRzW2ldLnB1c2gobmV3X2VsZW1lbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIE0uZWxlbWVudHNbaV0gPSBlbHNcbiAgICAgIC8vIFRoZW4sIHN1YnRyYWN0IHRoaXMgcm93IGZyb20gdGhvc2UgYWJvdmUgaXQgdG8gZ2l2ZSB0aGUgaWRlbnRpdHkgbWF0cml4XG4gICAgICAvLyBvbiB0aGUgbGVmdCBoYW5kIHNpZGVcbiAgICAgIGogPSBpXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGVscyA9IFtdXG4gICAgICAgIGZvciAocCA9IDA7IHAgPCBucDsgcCsrKSB7XG4gICAgICAgICAgZWxzLnB1c2goTS5lbGVtZW50c1tqXVtwXSAtIE0uZWxlbWVudHNbaV1bcF0gKiBNLmVsZW1lbnRzW2pdW2ldKVxuICAgICAgICB9XG4gICAgICAgIE0uZWxlbWVudHNbal0gPSBlbHNcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKGludmVyc2VfZWxlbWVudHMpXG4gIH0sXG5cbiAgc2V0RWxlbWVudHM6IGZ1bmN0aW9uKGVscykge1xuICAgIHZhciBpLFxuICAgICAgaixcbiAgICAgIGVsZW1lbnRzID0gZWxzLmVsZW1lbnRzIHx8IGVsc1xuICAgIGlmIChlbGVtZW50c1swXSAmJiB0eXBlb2YgZWxlbWVudHNbMF1bMF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpID0gZWxlbWVudHMubGVuZ3RoXG4gICAgICB0aGlzLmVsZW1lbnRzID0gW11cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaiA9IGVsZW1lbnRzW2ldLmxlbmd0aFxuICAgICAgICB0aGlzLmVsZW1lbnRzW2ldID0gW11cbiAgICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNbaV1bal0gPSBlbGVtZW50c1tpXVtqXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICB2YXIgbiA9IGVsZW1lbnRzLmxlbmd0aFxuICAgIHRoaXMuZWxlbWVudHMgPSBbXVxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMuZWxlbWVudHMucHVzaChbZWxlbWVudHNbaV1dKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9LFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gIHJldHVybiBTeWx2ZXN0ZXIuTWF0cml4LmNyZWF0ZShlbGVtZW50cykuaW52ZXJzZSgpLmVsZW1lbnRzXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuKGZ1bmN0aW9uKCl7XG5cbiAgdmFyXG4gICAgYnVmLFxuICAgIGJ1ZklkeCA9IDAsXG4gICAgaGV4Qnl0ZXMgPSBbXSxcbiAgICBpXG4gIDtcblxuICAvLyBQcmUtY2FsY3VsYXRlIHRvU3RyaW5nKDE2KSBmb3Igc3BlZWRcbiAgZm9yIChpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgaGV4Qnl0ZXNbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xuICB9XG5cbiAgLy8gQnVmZmVyIHJhbmRvbSBudW1iZXJzIGZvciBzcGVlZFxuICAvLyBSZWR1Y2UgbWVtb3J5IHVzYWdlIGJ5IGRlY3JlYXNpbmcgdGhpcyBudW1iZXIgKG1pbiAxNilcbiAgLy8gb3IgaW1wcm92ZSBzcGVlZCBieSBpbmNyZWFzaW5nIHRoaXMgbnVtYmVyICh0cnkgMTYzODQpXG4gIHV1aWQuQlVGRkVSX1NJWkUgPSA0MDk2O1xuXG4gIC8vIEJpbmFyeSB1dWlkc1xuICB1dWlkLmJpbiA9IHV1aWRCaW47XG5cbiAgLy8gQ2xlYXIgYnVmZmVyXG4gIHV1aWQuY2xlYXJCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICBidWYgPSBudWxsO1xuICAgIGJ1ZklkeCA9IDA7XG4gIH07XG5cbiAgLy8gVGVzdCBmb3IgdXVpZFxuICB1dWlkLnRlc3QgPSBmdW5jdGlvbih1dWlkKSB7XG4gICAgaWYgKHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIC9eWzAtOWEtZl17OH0tWzAtOWEtZl17NH0tNFswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfSQvaS50ZXN0KHV1aWQpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gTm9kZSAmIEJyb3dzZXIgc3VwcG9ydFxuICB2YXIgY3J5cHQwO1xuICBpZiAodHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjcnlwdDAgPSBjcnlwdG87XG4gIH0gZWxzZSBpZiggKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSAmJiAodHlwZW9mIHdpbmRvdy5tc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgY3J5cHQwID0gd2luZG93Lm1zQ3J5cHRvOyAvLyBJRTExXG4gIH1cblxuICBpZiAoKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSAmJiAodHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgY3J5cHQwID0gY3J5cHQwIHx8IHJlcXVpcmUoJ2NyeXB0bycpO1xuICAgIG1vZHVsZS5leHBvcnRzID0gdXVpZDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy51dWlkID0gdXVpZDtcbiAgfVxuXG4gIC8vIFVzZSBiZXN0IGF2YWlsYWJsZSBQUk5HXG4gIC8vIEFsc28gZXhwb3NlIHRoaXMgc28geW91IGNhbiBvdmVycmlkZSBpdC5cbiAgdXVpZC5yYW5kb21CeXRlcyA9IChmdW5jdGlvbigpe1xuICAgIGlmIChjcnlwdDApIHtcbiAgICAgIGlmIChjcnlwdDAucmFuZG9tQnl0ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyeXB0MC5yYW5kb21CeXRlcztcbiAgICAgIH1cbiAgICAgIGlmIChjcnlwdDAuZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24obikge1xuICAgICAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobik7XG4gICAgICAgICAgICBjcnlwdDAuZ2V0UmFuZG9tVmFsdWVzKGJ5dGVzKTtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGJ5dGVzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobik7XG4gICAgICAgICAgY3J5cHQwLmdldFJhbmRvbVZhbHVlcyhieXRlcyk7XG4gICAgICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24obikge1xuICAgICAgdmFyIGksIHIgPSBbXTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgci5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvLyBCdWZmZXIgc29tZSByYW5kb20gYnl0ZXMgZm9yIHNwZWVkXG4gIGZ1bmN0aW9uIHJhbmRvbUJ5dGVzQnVmZmVyZWQobikge1xuICAgIGlmICghYnVmIHx8ICgoYnVmSWR4ICsgbikgPiB1dWlkLkJVRkZFUl9TSVpFKSkge1xuICAgICAgYnVmSWR4ID0gMDtcbiAgICAgIGJ1ZiA9IHV1aWQucmFuZG9tQnl0ZXModXVpZC5CVUZGRVJfU0laRSk7XG4gICAgfVxuICAgIHJldHVybiBidWYuc2xpY2UoYnVmSWR4LCBidWZJZHggKz0gbik7XG4gIH1cblxuICAvLyB1dWlkLmJpblxuICBmdW5jdGlvbiB1dWlkQmluKCkge1xuICAgIHZhciBiID0gcmFuZG9tQnl0ZXNCdWZmZXJlZCgxNik7XG4gICAgYls2XSA9IChiWzZdICYgMHgwZikgfCAweDQwO1xuICAgIGJbOF0gPSAoYls4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIC8vIFN0cmluZyBVVUlEdjQgKFJhbmRvbSlcbiAgZnVuY3Rpb24gdXVpZCgpIHtcbiAgICB2YXIgYiA9IHV1aWRCaW4oKTtcbiAgICByZXR1cm4gaGV4Qnl0ZXNbYlswXV0gKyBoZXhCeXRlc1tiWzFdXSArXG4gICAgICBoZXhCeXRlc1tiWzJdXSArIGhleEJ5dGVzW2JbM11dICsgJy0nICtcbiAgICAgIGhleEJ5dGVzW2JbNF1dICsgaGV4Qnl0ZXNbYls1XV0gKyAnLScgK1xuICAgICAgaGV4Qnl0ZXNbYls2XV0gKyBoZXhCeXRlc1tiWzddXSArICctJyArXG4gICAgICBoZXhCeXRlc1tiWzhdXSArIGhleEJ5dGVzW2JbOV1dICsgJy0nICtcbiAgICAgIGhleEJ5dGVzW2JbMTBdXSArIGhleEJ5dGVzW2JbMTFdXSArXG4gICAgICBoZXhCeXRlc1tiWzEyXV0gKyBoZXhCeXRlc1tiWzEzXV0gK1xuICAgICAgaGV4Qnl0ZXNbYlsxNF1dICsgaGV4Qnl0ZXNbYlsxNV1dXG4gICAgO1xuICB9XG5cbn0pKCk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQtcmFuZG9tJztcbmltcG9ydCB7IGlzVmlzaWJsZU5vZGUgfSBmcm9tIFwiQGZpZ21hLXBsdWdpbi9oZWxwZXJzXCI7XG5pbXBvcnQgb25lQ29yZVBhaW50U3R5bGVzIGZyb20gJy4vb25lQ29yZVBhaW50U3R5bGVzLmpzJztcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogMzAwLCBoZWlnaHQ6IDQ0OCB9KTtcbnN3aXRjaCAoZmlnbWEuY29tbWFuZCkge1xuICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJmaWdtYS1jb21tYW5kXCIsIG1lc3NhZ2U6IFwib3Blbi1ob21lXCIgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0YWJsZVwiOlxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiZmlnbWEtY29tbWFuZFwiLCBtZXNzYWdlOiBcIm9wZW4tdGFibGUtY3JlYXRvclwiIH0pO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwibGFuZ3VhZ2VcIjpcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcImZpZ21hLWNvbW1hbmRcIiwgbWVzc2FnZTogXCJvcGVuLWxhbmd1YWdlLWxpbnRlclwiIH0pO1xuICAgICAgICBmaWdtYS51aS5yZXNpemUoNDc1LCA1MDApO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwiY29sb3JcIjpcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcImZpZ21hLWNvbW1hbmRcIiwgbWVzc2FnZTogXCJvcGVuLWNvbG9yLWxpbnRlclwiIH0pO1xuICAgICAgICBmaWdtYS51aS5yZXNpemUoNDc1LCA1MDApO1xuICAgICAgICBicmVhaztcbn1cbmNvbnN0IGNyZWF0ZVRhYmxlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgdGFibGVGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgbGV0IGhlYWRlckNlbGwgPSB5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKFwiY2U4ZmE4ZThjYWIwN2ExOWY4M2Y0MTgxYWM4Y2JlNzYwOTNjNmJjM1wiKTtcbiAgICBsZXQgdGFibGVSb3cgPSBmaWdtYS5jcmVhdGVDb21wb25lbnQoKTtcbiAgICBsZXQgY2VsbEZpbGxDb250YWluZXJZID0gZmFsc2U7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJPcGVuIFNhbnNcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgIHRhYmxlRnJhbWUubmFtZSA9IFwiVGFibGVcIjtcbiAgICB0YWJsZUZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIHRhYmxlRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICB0YWJsZUZyYW1lLnggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICB0YWJsZUZyYW1lLnkgPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueTtcbiAgICBtc2cuY29sdW1uQ29uZmlndXJhdGlvbi5maW5kKChjb2wpID0+IChjZWxsRmlsbENvbnRhaW5lclkgPSBjb2wubXVsdGlWYWx1ZSkpO1xuICAgIFsuLi5BcnJheShtc2cucm93cyArIDEpLmtleXMoKV0ubWFwKChyb3dJbmRleCkgPT4ge1xuICAgICAgICB0YWJsZVJvdy5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgIHRhYmxlUm93LmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICB0YWJsZVJvdy5uYW1lID0gXCJSb3dcIjtcbiAgICAgICAgbXNnLmNvbHVtbkNvbmZpZ3VyYXRpb24ubWFwKChjb2wpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IHsgbmFtZTogY29sTmFtZSwgYWxpZ25tZW50OiBjb2xBbGlnbm1lbnQsIGNlbGxUeXBlOiBjb2xDZWxsVHlwZSwgbXVsdGlWYWx1ZTogY29sTXVsdGlWYWx1ZSwgfSA9IGNvbDtcbiAgICAgICAgICAgIGNvbEFsaWdubWVudCA9XG4gICAgICAgICAgICAgICAgY29sQWxpZ25tZW50WzBdLnRvVXBwZXJDYXNlKCkgKyBjb2xBbGlnbm1lbnQuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgY29sQ2VsbFR5cGUgPSBjb2xDZWxsVHlwZVswXS50b1VwcGVyQ2FzZSgpICsgY29sQ2VsbFR5cGUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgY29sTXVsdGlWYWx1ZSA9IGNvbE11bHRpVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbE11bHRpVmFsdWUgPVxuICAgICAgICAgICAgICAgIGNvbE11bHRpVmFsdWVbMF0udG9VcHBlckNhc2UoKSArIGNvbE11bHRpVmFsdWUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoaXNIZWFkZXJDZWxsID0gaGVhZGVyQ2VsbC5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbCA9IHRoaXNIZWFkZXJDZWxsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLm5hbWUgPSBjb2xOYW1lLmxlbmd0aCA+IDAgPyBjb2xOYW1lIDogXCJIZWFkZXJcIjtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbC5kZWxldGVDaGFyYWN0ZXJzKDAsIHRleHROb2RlT2ZIZWFkZXJDZWxsLmNoYXJhY3RlcnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbC5pbnNlcnRDaGFyYWN0ZXJzKDAsIGNvbE5hbWUubGVuZ3RoID4gMCA/IGNvbE5hbWUgOiBcIkhlYWRlclwiKTtcbiAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5zZXRQcm9wZXJ0aWVzKHsgQWxpZ25tZW50OiBjb2xBbGlnbm1lbnQgfSk7XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwucmVzaXplKGNvbE11bHRpVmFsdWUgPT09IFwiVHJ1ZVwiID8gMTIwIDogdGhpc0hlYWRlckNlbGwud2lkdGgsIHRoaXNIZWFkZXJDZWxsLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwuY2hpbGRyZW5bMF0ubGF5b3V0R3JvdyA9IGNlbGxGaWxsQ29udGFpbmVyWSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIHRoaXNIZWFkZXJDZWxsLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IGNlbGxGaWxsQ29udGFpbmVyWVxuICAgICAgICAgICAgICAgICAgICA/IFwiRklYRURcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiQVVUT1wiO1xuICAgICAgICAgICAgICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHRoaXNIZWFkZXJDZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRhYmxlRnJhbWUuYXBwZW5kQ2hpbGQodGFibGVSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRoaXNUYWJsZVJvdyA9IHRhYmxlUm93LmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICB0aGlzVGFibGVSb3cuY2hpbGRyZW4ubWFwKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7IGNlbGxUeXBlOiBjb2xDZWxsVHlwZSwgbXVsdGlWYWx1ZTogY29sTXVsdGlWYWx1ZSB9ID0gbXNnLmNvbHVtbkNvbmZpZ3VyYXRpb25baW5kZXhdO1xuICAgICAgICAgICAgICAgIGNvbENlbGxUeXBlID0gY29sQ2VsbFR5cGVbMF0udG9VcHBlckNhc2UoKSArIGNvbENlbGxUeXBlLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICAgICBjb2xNdWx0aVZhbHVlID0gY29sTXVsdGlWYWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbE11bHRpVmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICBjb2xNdWx0aVZhbHVlWzBdLnRvVXBwZXJDYXNlKCkgKyBjb2xNdWx0aVZhbHVlLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICAgICBjZWxsLm5hbWUgPT09IFwiSGVhZGVyXCIgPyAoY2VsbC5uYW1lID0gXCJDZWxsXCIpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBjZWxsLnNldFByb3BlcnRpZXMoeyBUeXBlOiBcIkJvZHlcIiB9KTtcbiAgICAgICAgICAgICAgICBjZWxsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgICAgICAgICAgICBUeXBlOiBjb2xDZWxsVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgXCJNdWx0aS12YWx1ZVwiOiBjb2xNdWx0aVZhbHVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNlbGwuY2hpbGRyZW5bMF0ubGF5b3V0R3JvdyA9IGNlbGxGaWxsQ29udGFpbmVyWSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIGNlbGwucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gY2VsbEZpbGxDb250YWluZXJZID8gXCJGSVhFRFwiIDogXCJBVVRPXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhYmxlRnJhbWUuYXBwZW5kQ2hpbGQodGhpc1RhYmxlUm93KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGxldCB0YWJsZURhdGEgPSB7XG4gICAgICAgIHVzZXJEYXRhOiBmaWdtYS5jdXJyZW50VXNlcixcbiAgICAgICAgY29sdW1uQ29uZmlndXJhdGlvbjogbXNnLmNvbHVtbkNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGNvbHVtbkNvdW50OiBtc2cuY29sdW1uQ29uZmlndXJhdGlvbi5sZW5ndGgsXG4gICAgICAgIHJvd0NvdW50OiBtc2cucm93c1xuICAgIH07XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInRhYmxlLWNyZWF0ZWRcIiwgbWVzc2FnZTogdGFibGVEYXRhIH0pO1xuICAgIGZpZ21hLm5vdGlmeShcIlRhYmxlIGNyZWF0ZWQg4pyFXCIpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59KTtcbmNvbnN0IHB1c2hUZXh0TGF5ZXJUb0FycmF5ID0gKGxheWVyLCBhcnJheSkgPT4ge1xuICAgIGFycmF5LnB1c2goe1xuICAgICAgICBpZDogbGF5ZXIuaWQsXG4gICAgICAgIG5hbWU6IGxheWVyLm5hbWUsXG4gICAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICAgIHg6IGxheWVyLngsXG4gICAgICAgIHk6IGxheWVyLnksXG4gICAgICAgIHR5cGU6IGxheWVyLnR5cGUsXG4gICAgICAgIGNoYXJhY3RlcnM6IGxheWVyID09PSBudWxsIHx8IGxheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXllci5jaGFyYWN0ZXJzLFxuICAgICAgICBjaGlsZHJlbjogbGF5ZXIgPT09IG51bGwgfHwgbGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheWVyLmNoaWxkcmVuLFxuICAgIH0pO1xufTtcbmNvbnN0IHNlbmRDdXJyZW50VGV4dFNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGxldCB0ZXh0TGF5ZXJzID0gW107XG4gICAgc2VsZWN0aW9uLmZvckVhY2goKHNlbGVjdGVkTGF5ZXIpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoISEoKF9hID0gc2VsZWN0ZWRMYXllcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0TGF5ZXJzID0gc2VsZWN0ZWRMYXllci5maW5kQWxsKG4gPT4gbi50eXBlID09PSAnVEVYVCcpO1xuICAgICAgICAgICAgc2VsZWN0ZWRUZXh0TGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcHVzaFRleHRMYXllclRvQXJyYXkobGF5ZXIsIHRleHRMYXllcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0ZWRMYXllci50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgIHB1c2hUZXh0TGF5ZXJUb0FycmF5KHNlbGVjdGVkTGF5ZXIsIHRleHRMYXllcnMpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJzZWxlY3Rpb24tY2hhbmdlXCIsXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHRleHRMYXllcnMsXG4gICAgICAgICAgICBzZWxlY3RlZExheWVyOiBzZWxlY3Rpb25cbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmNvbnN0IHJnYlRvSGV4ID0gKHIsIGcsIGIpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnRUb0hleCA9IChjKSA9PiB7XG4gICAgICAgIGMgPSBNYXRoLnJvdW5kKGMgKiAyNTUpO1xuICAgICAgICBsZXQgaGV4ID0gYy50b1N0cmluZygxNik7XG4gICAgICAgIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gJzAnICsgaGV4IDogaGV4O1xuICAgIH07XG4gICAgY29uc3QgY29tYmluZUNvbXBvbmVudHMgPSAociwgZywgYikgPT4ge1xuICAgICAgICByZXR1cm4gJyMnICsgY29tcG9uZW50VG9IZXgocikgKyBjb21wb25lbnRUb0hleChnKSArIGNvbXBvbmVudFRvSGV4KGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGNvbWJpbmVDb21wb25lbnRzKHIsIGcsIGIpO1xufTtcbmNvbnN0IHB1c2hDb2xvclRvQXJyYXkgPSAobGF5ZXIsIGNvbG9yVHlwZSwgYXJyYXkpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHN0eWxlSWRUeXBlID0gY29sb3JUeXBlID09PSAnZmlsbHMnID8gJ2ZpbGxTdHlsZUlkJyA6ICdzdHJva2VTdHlsZUlkJztcbiAgICBjb25zdCBpc1NvbGlkQ29sb3IgPSAoKF9hID0gbGF5ZXIgPT09IG51bGwgfHwgbGF5ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxheWVyLmZpbGxzWzBdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudHlwZSkgPT09ICdTT0xJRCc7XG4gICAgY29uc3QgY29sb3JJc0ltYWdlID0gY29sb3JUeXBlID09PSAnZmlsbCcgJiYgKChfYiA9IGxheWVyID09PSBudWxsIHx8IGxheWVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXllci5maWxsc1swXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnR5cGUpID09PSAnSU1BR0UnO1xuICAgIGNvbnN0IGNvbG9ySXNWaXNpYmxlID0gbGF5ZXJbY29sb3JUeXBlXVswXS52aXNpYmxlO1xuICAgIGNvbnN0IGNvbG9ySW5IZXggPSAoY29sb3JJblJHQikgPT4ge1xuICAgICAgICByZXR1cm4gcmdiVG9IZXgoY29sb3JJblJHQi5yLCBjb2xvckluUkdCLmcsIGNvbG9ySW5SR0IuYik7XG4gICAgfTtcbiAgICBpZiAoIWNvbG9ySXNJbWFnZSAmJiBjb2xvcklzVmlzaWJsZSkge1xuICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICAgIGNvbG9ySWQ6IHV1aWQoKSxcbiAgICAgICAgICAgIGxheWVySWQ6IGxheWVyLmxheWVySWQsXG4gICAgICAgICAgICBsYXllck5hbWU6IGxheWVyLm5hbWUsXG4gICAgICAgICAgICBsYXllclR5cGU6IGxheWVyLnR5cGUsXG4gICAgICAgICAgICBjb2xvcjogbGF5ZXJbY29sb3JUeXBlXSxcbiAgICAgICAgICAgIGNvbG9yU3R5bGVJZDogbGF5ZXJbc3R5bGVJZFR5cGVdLFxuICAgICAgICAgICAgaGFzQ29sb3JTdHlsZTogaXNTb2xpZENvbG9yID8gbGF5ZXJbc3R5bGVJZFR5cGVdLmxlbmd0aCA+IDAgOiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICAgICAgICBjb2xvclR5cGU6IGNvbG9yVHlwZS5zbGljZSgwLCAtMSksXG4gICAgICAgICAgICBjb2xvckluSGV4OiBjb2xvckluSGV4KGxheWVyW2NvbG9yVHlwZV1bMF0uY29sb3IpLFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgZ2V0Q29sb3JTdGF0cyA9ICgpID0+IHtcbiAgICBjb25zdCBnZXRSYXdMYXllcnNXaXRoQ29sb3IgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIGZ1bmN0aW9uIGlzRnJhbWVPckdyb3VwKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdGUkFNRScgfHwgbm9kZS50eXBlID09PSAnR1JPVVAnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbGV2YW50TGF5ZXJzID0gc2VsZWN0aW9uLm1hcCgoc2VsZWN0ZWRMYXllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0ZyYW1lT3JHcm91cChzZWxlY3RlZExheWVyKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEV4cGVjdGVkIHNlbGVjdGVkTGF5ZXIgdG8gYmUgZnJhbWUgb3IgZ3JvdXAuIEdvdCAke3NlbGVjdGVkTGF5ZXIudHlwZX0gYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdGVtcE91dHB1dCA9IHNlbGVjdGVkTGF5ZXIuZmluZEFsbCgobikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjY2VwdGFibGVOb2RldHlwZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICdFTExJUFNFJyxcbiAgICAgICAgICAgICAgICAgICAgJ0ZSQU1FJyxcbiAgICAgICAgICAgICAgICAgICAgJ0dST1VQJyxcbiAgICAgICAgICAgICAgICAgICAgJ0NPTVBPTkVOVCcsXG4gICAgICAgICAgICAgICAgICAgICdJTlNUQU5DRScsXG4gICAgICAgICAgICAgICAgICAgICdMSU5FJyxcbiAgICAgICAgICAgICAgICAgICAgJ1BPTFlHT04nLFxuICAgICAgICAgICAgICAgICAgICAnUkVDVEFOR0xFJyxcbiAgICAgICAgICAgICAgICAgICAgJ1NIQVBFX1dJVEhfVEVYVCcsXG4gICAgICAgICAgICAgICAgICAgICdTVEFSJyxcbiAgICAgICAgICAgICAgICAgICAgJ1RFWFQnLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgbGV0IGhhc0ZpbGwgPSBcImZpbGxzXCIgaW4gbiAmJiAobiA9PT0gbnVsbCB8fCBuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuLmZpbGxzWzBdKSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGxldCBoYXNTdHJva2UgPSBcInN0cm9rZXNcIiBpbiBuICYmIChuID09PSBudWxsIHx8IG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG4uc3Ryb2tlc1swXSkgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNGaWxsT3JTdHJva2UgPSBoYXNGaWxsIHx8IGhhc1N0cm9rZTtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlSXNWYWxpZE5vZGVUeXBlID0gYWNjZXB0YWJsZU5vZGV0eXBlcy5zb21lKChub2RlVHlwZSkgPT4gbi50eXBlID09PSBub2RlVHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVJc1ZhbGlkTm9kZVR5cGUgJiYgaGFzRmlsbE9yU3Ryb2tlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnRlbXBPdXRwdXRdO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG91dHB1dCA9IHJlbGV2YW50TGF5ZXJzLmZsYXQoKTtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0LmZpbHRlcihsYXllciA9PiBpc1Zpc2libGVOb2RlKGxheWVyKSk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbiAgICBjb25zdCByYXdMYXllcnNXaXRoQ29sb3IgPSBnZXRSYXdMYXllcnNXaXRoQ29sb3IoKTtcbiAgICBjb25zdCBsYXllcnNXaXRoQ29sb3IgPSByYXdMYXllcnNXaXRoQ29sb3IubWFwKChsYXllcikgPT4ge1xuICAgICAgICBjb25zdCBoYXNGaWxsID0gXCJmaWxsc1wiIGluIGxheWVyICYmIGxheWVyLmZpbGxzWzBdICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGhhc1N0cm9rZSA9IFwic3Ryb2tlc1wiIGluIGxheWVyICYmIGxheWVyLnN0cm9rZXNbMF0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaGFzRmlsbEFuZFN0cm9rZSA9IGhhc0ZpbGwgJiYgaGFzU3Ryb2tlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGF5ZXJJZDogbGF5ZXIuaWQsXG4gICAgICAgICAgICBuYW1lOiBsYXllci5uYW1lLFxuICAgICAgICAgICAgZmlsbHM6IFwiZmlsbHNcIiBpbiBsYXllciAmJiBsYXllci5maWxscyxcbiAgICAgICAgICAgIHN0cm9rZXM6IFwic3Ryb2tlc1wiIGluIGxheWVyICYmIGxheWVyLnN0cm9rZXMsXG4gICAgICAgICAgICBmaWxsU3R5bGVJZDogXCJmaWxsU3R5bGVJZFwiIGluIGxheWVyICYmIGxheWVyLmZpbGxTdHlsZUlkLFxuICAgICAgICAgICAgc3Ryb2tlU3R5bGVJZDogXCJzdHJva2VTdHlsZUlkXCIgaW4gbGF5ZXIgJiYgbGF5ZXIuc3Ryb2tlU3R5bGVJZCxcbiAgICAgICAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICAgICAgICB0eXBlOiBsYXllci50eXBlLFxuICAgICAgICAgICAgaGFzRmlsbDogaGFzRmlsbCxcbiAgICAgICAgICAgIGhhc1N0cm9rZTogaGFzU3Ryb2tlLFxuICAgICAgICAgICAgaGFzRmlsbEFuZFN0cm9rZTogaGFzRmlsbEFuZFN0cm9rZSxcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zdCBhbGxJbnN0YW5jZXNPZkNvbG9yID0gbGF5ZXJzV2l0aENvbG9yXG4gICAgICAgIC5tYXAoKGxheWVyKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wQ29sb3JzID0gW107XG4gICAgICAgIGlmIChsYXllci5oYXNGaWxsQW5kU3Ryb2tlKSB7XG4gICAgICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyLCAnZmlsbHMnLCB0ZW1wQ29sb3JzKTtcbiAgICAgICAgICAgIHB1c2hDb2xvclRvQXJyYXkobGF5ZXIsICdzdHJva2VzJywgdGVtcENvbG9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGF5ZXIuaGFzRmlsbCkge1xuICAgICAgICAgICAgcHVzaENvbG9yVG9BcnJheShsYXllciwgJ2ZpbGxzJywgdGVtcENvbG9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGF5ZXIuaGFzU3Ryb2tlKSB7XG4gICAgICAgICAgICBwdXNoQ29sb3JUb0FycmF5KGxheWVyLCAnc3Ryb2tlcycsIHRlbXBDb2xvcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wQ29sb3JzO1xuICAgIH0pXG4gICAgICAgIC5mbGF0KCk7XG4gICAgY29uc3QgZG9lc0NvbG9yTWF0Y2hBbnlPbmVDb3JlU3R5bGUgPSAoY29sb3JJbkhleCkgPT4ge1xuICAgICAgICByZXR1cm4gb25lQ29yZVBhaW50U3R5bGVzLnNvbWUoKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3JJbkhleCA9PT0gc3R5bGUuY29sb3IuY29sb3IuaGV4O1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfTtcbiAgICBjb25zdCBkb2VzS2V5TWF0Y2hBbnlPbmVDb3JlQ29sb3JTdHlsZUtleSA9IChrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIG9uZUNvcmVQYWludFN0eWxlcy5zb21lKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGtleS5pbmNsdWRlcyhzdHlsZS5rZXkpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfTtcbiAgICBjb25zdCBjb2xvcnNXaXRoQ29sb3JTdHlsZSA9IGFsbEluc3RhbmNlc09mQ29sb3IuZmlsdGVyKChjb2xvcikgPT4ge1xuICAgICAgICByZXR1cm4gY29sb3IuaGFzQ29sb3JTdHlsZTtcbiAgICB9KTtcbiAgICBjb25zdCBjb2xvcnNVc2luZ09uZUNvcmVTdHlsZSA9ICgoKSA9PiB7XG4gICAgICAgIGxldCBjb2xvcnMgPSBjb2xvcnNXaXRoQ29sb3JTdHlsZS5maWx0ZXIoKGNvbG9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHIsIGcsIGIgfSA9IGNvbG9yLmNvbG9yWzBdLmNvbG9yO1xuICAgICAgICAgICAgY29uc3QgY29sb3JJbkhleCA9IHJnYlRvSGV4KHIsIGcsIGIpO1xuICAgICAgICAgICAgcmV0dXJuIGRvZXNDb2xvck1hdGNoQW55T25lQ29yZVN0eWxlKGNvbG9ySW5IZXgpICYmIGRvZXNLZXlNYXRjaEFueU9uZUNvcmVDb2xvclN0eWxlS2V5KGNvbG9yLmNvbG9yU3R5bGVJZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb2xvcnMubWFwKChjb2xvciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIG9uZUNvcmVQYWludFN0eWxlcy5tYXAoKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yLmNvbG9yU3R5bGVJZC5pbmNsdWRlcyhzdHlsZS5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yc1tpbmRleF0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbG9yKSwgeyBzdHlsZU5hbWU6IHN0eWxlLm5hbWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbG9ycztcbiAgICB9KSgpO1xuICAgIGNvbnN0IGNvbG9yc05vdFVzaW5nT25lQ29yZUNvbG9yU3R5bGUgPSBhbGxJbnN0YW5jZXNPZkNvbG9yLmZpbHRlcigoY29sb3IpID0+IHtcbiAgICAgICAgcmV0dXJuICFvbmVDb3JlUGFpbnRTdHlsZXMuc29tZSgob25lQ29yZUNvbG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3IuY29sb3JTdHlsZUlkLmluY2x1ZGVzKG9uZUNvcmVDb2xvci5rZXkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zdCBvbmVDb3JlQ29sb3JTdHlsZUNvdmVyYWdlID0gYCR7KChjb2xvcnNVc2luZ09uZUNvcmVTdHlsZS5sZW5ndGggLyBhbGxJbnN0YW5jZXNPZkNvbG9yLmxlbmd0aCkgKiAxMDApLnRvRml4ZWQoMil9JWA7XG4gICAgY29uc3QgYWxtb3N0QWxsQ29sb3JzID0gWy4uLmNvbG9yc1VzaW5nT25lQ29yZVN0eWxlLCAuLi5jb2xvcnNOb3RVc2luZ09uZUNvcmVDb2xvclN0eWxlXTtcbiAgICBjb25zdCBpZHNPZkFsbEluc3RhbmNlc09mQ29sb3IgPSBhbGxJbnN0YW5jZXNPZkNvbG9yLm1hcCgoY29sb3IpID0+IGNvbG9yLmNvbG9ySWQpO1xuICAgIGNvbnN0IGlkc09mQWxtb3N0QWxsQ29sb3JzID0gYWxtb3N0QWxsQ29sb3JzLm1hcCgoY29sb3IpID0+IGNvbG9yLmNvbG9ySWQpO1xuICAgIGNvbnN0IGNvbG9yU3RhdHMgPSB7XG4gICAgICAgIGFsbEluc3RhbmNlc09mQ29sb3I6IGFsbEluc3RhbmNlc09mQ29sb3IsXG4gICAgICAgIGNvbG9yc1dpdGhDb2xvclN0eWxlOiBjb2xvcnNXaXRoQ29sb3JTdHlsZSxcbiAgICAgICAgY29sb3JzVXNpbmdPbmVDb3JlU3R5bGU6IGNvbG9yc1VzaW5nT25lQ29yZVN0eWxlLFxuICAgICAgICBjb2xvcnNOb3RVc2luZ09uZUNvcmVDb2xvclN0eWxlOiBjb2xvcnNOb3RVc2luZ09uZUNvcmVDb2xvclN0eWxlLFxuICAgICAgICBvbmVDb3JlQ29sb3JTdHlsZUNvdmVyYWdlOiBvbmVDb3JlQ29sb3JTdHlsZUNvdmVyYWdlLFxuICAgICAgICBhbG1vc3RBbGxDb2xvcnM6IGFsbW9zdEFsbENvbG9ycyxcbiAgICAgICAgaWRzT2ZBbGxJbnN0YW5jZXNPZkNvbG9yOiBpZHNPZkFsbEluc3RhbmNlc09mQ29sb3IsXG4gICAgICAgIGlkc09mQWxtb3N0QWxsQ29sb3JzOiBpZHNPZkFsbW9zdEFsbENvbG9ycyxcbiAgICB9O1xuICAgIHJldHVybiBjb2xvclN0YXRzO1xufTtcbmNvbnN0IHNlbGVjdEFuZFpvb21Ub0xheWVyID0gKGxheWVySWQpID0+IHtcbiAgICBjb25zdCBsYXllciA9IGZpZ21hLmdldE5vZGVCeUlkKGxheWVySWQpO1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtsYXllcl07XG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtsYXllcl0pO1xufTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChtc2cudHlwZSA9PT0gXCJuYXZpZ2F0ZS10by10YWJcIikge1xuICAgICAgICBzd2l0Y2ggKG1zZy50YWJDbGlja2VkKSB7XG4gICAgICAgICAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgICAgICAgY2FzZSBcInRhYmxlLWNyZWF0b3JcIjpcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5yZXNpemUoMzAwLCA0NDgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxhbmd1YWdlLWxpbnRlclwiOlxuICAgICAgICAgICAgICAgIHNlbmRDdXJyZW50VGV4dFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSg0NzUsIDUwMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcImNyZWF0ZS10YWJsZVwiKSB7XG4gICAgICAgIGNyZWF0ZVRhYmxlKG1zZyk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3JlcXVlc3Qtc2VsZWN0aW9uJykge1xuICAgICAgICBzZW5kQ3VycmVudFRleHRTZWxlY3Rpb24oKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ2NvbG9yLXN0YXRzJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGdldENvbG9yU3RhdHMoKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3JlcXVlc3QtbG9jYWwtY3VzdG9tLWRpY3Rpb25hcnknKSB7XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJsYW5ndWFnZUxpbnRlckN1c3RvbURpY3Rpb25hcnlcIikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibG9jYWwtY3VzdG9tLWRpY3Rpb25hcnktcmV0cmlldmVkXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzdWx0ID8gcmVzdWx0IDogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnYWRkLXRvLWRpY3Rpb25hcnknKSB7XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJsYW5ndWFnZUxpbnRlckN1c3RvbURpY3Rpb25hcnlcIikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0N1c3RvbURpY3Rpb25hcnkgPSByZXN1bHQgPyByZXN1bHQgOiBbXTtcbiAgICAgICAgICAgIG5ld0N1c3RvbURpY3Rpb25hcnkucHVzaChtc2cud29yZFRvQWRkKTtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoXCJsYW5ndWFnZUxpbnRlckN1c3RvbURpY3Rpb25hcnlcIiwgbmV3Q3VzdG9tRGljdGlvbmFyeSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdnZXQtc2FtcGxlLXRleHQnKSB7XG4gICAgICAgIGNvbnN0IHNhbXBsZVRleHQgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzYW1wbGUtdGV4dFwiLCBtZXNzYWdlOiBzYW1wbGVUZXh0IH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdzYW1wbGUtdGV4dC1jaGFuZ2VkJykge1xuICAgICAgICBjb25zdCBhY3RpdmVUZXh0TGF5ZXIgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cuYWN0aXZlTm9kZUlkKTtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFthY3RpdmVUZXh0TGF5ZXJdKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAndXBkYXRlLXNvdXJjZS10ZXh0Jykge1xuICAgICAgICBjb25zdCBhY3RpdmVUZXh0TGF5ZXIgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cubGF5ZXJJZCk7XG4gICAgICAgIGxldCBmb250TmFtZSA9IGFjdGl2ZVRleHRMYXllci5mb250TmFtZTtcbiAgICAgICAgaWYgKGZvbnROYW1lID09PSBmaWdtYS5taXhlZCkge1xuICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwoYWN0aXZlVGV4dExheWVyLmdldFJhbmdlQWxsRm9udE5hbWVzKDAsIGFjdGl2ZVRleHRMYXllci5jaGFyYWN0ZXJzLmxlbmd0aCkubWFwKGZpZ21hLmxvYWRGb250QXN5bmMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoZm9udE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2ZVRleHRMYXllci5kZWxldGVDaGFyYWN0ZXJzKDAsIGFjdGl2ZVRleHRMYXllci5jaGFyYWN0ZXJzLmxlbmd0aCk7XG4gICAgICAgIGFjdGl2ZVRleHRMYXllci5pbnNlcnRDaGFyYWN0ZXJzKDAsIG1zZy51cGRhdGVkVGV4dCk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzb3VyY2UtdGV4dC11cGRhdGVkXCIsIG1lc3NhZ2U6IG1zZy51cGRhdGVkVGV4dCB9KTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnc2VsZWN0LWxheWVyJykge1xuICAgICAgICBzZWxlY3RBbmRab29tVG9MYXllcihtc2cubGF5ZXJJZCk7XG4gICAgfVxufSk7XG5maWdtYS5vbihcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NlbGVjdGlvbmNoYW5nZSB3YXMgZmlyZWQnKTtcbiAgICBzZW5kQ3VycmVudFRleHRTZWxlY3Rpb24oKTtcbn0pO1xuIiwiY29uc3Qgb25lQ29yZVBhaW50U3R5bGVzID0gW1xuICB7XG4gICAgbmFtZTogXCJSb2xlcy9JbnRlcmFjdGl2ZS9JbnRlcmFjdGl2ZSBQcmltYXJ5XCIsXG4gICAga2V5OiBcIjE4ZWNjYTkyMTQ4NDEyMjUyMWQ5ZDMxYzIxZDMyMjE3Yjc2YTgyMTRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzAxN2M4NlwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjAwMzkyMTU2ODg1OTM2ODU2MyxcbiAgICAgICAgICBnOiAwLjQ4NjI3NDUxMDYyMjAyNDU0LFxuICAgICAgICAgIGI6IDAuNTI1NDkwMjI0MzYxNDE5NyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUm9sZXMvSW50ZXJhY3RpdmUvSW50ZXJhY3RpdmUgU2Vjb25kYXJ5XCIsXG4gICAga2V5OiBcImRiMGE0NjMxOTExNzQxOTVhMzZjYzYyM2YxZDFjMDc0OWE1MDcyM2RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2U3ZTllOVwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjkwNTg4MjM1ODU1MTAyNTQsXG4gICAgICAgICAgZzogMC45MTM3MjU0OTUzMzg0Mzk5LFxuICAgICAgICAgIGI6IDAuOTEzNzI1NDk1MzM4NDM5OSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUm9sZXMvSW50ZXJhY3RpdmUvSW50ZXJhY3RpdmUgRGFuZ2VyXCIsXG4gICAga2V5OiBcImI1NmM5MTQxOTQ2YWFkYjUzYmI1OGY3ZjM3NWZiM2JhMmI0NzdkMDJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2RmMmQyNFwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjg3NDUwOTgxMTQwMTM2NzIsXG4gICAgICAgICAgZzogMC4xNzY0NzA1OTI2MTc5ODg2LFxuICAgICAgICAgIGI6IDAuMTQxMTc2NDc3MDc0NjIzMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUm9sZXMvVGV4dC9UZXh0IFByaW1hcnlcIixcbiAgICBrZXk6IFwiN2EwOTczMzUzYWU0NThhNWEyNzliZmU0YzJkYjQ5Y2NjNTIxYTliYlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjMjgzNjM2XCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuMTU2ODYyNzUwNjQ5NDUyMixcbiAgICAgICAgICBnOiAwLjIxMTc2NDcwODE2MTM1NDA2LFxuICAgICAgICAgIGI6IDAuMjExNzY0NzA4MTYxMzU0MDYsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJvbGVzL1RleHQvVGV4dCBTZWNvbmRhcnlcIixcbiAgICBrZXk6IFwiNjExYWMwNjEyODQwN2JhNzY1NTcxY2RlMzk2YzMzN2Y0MmU1MzMzZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjNTU2MDYwXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuMzMzMzMzMzQzMjY3NDQwOCxcbiAgICAgICAgICBnOiAwLjM3NjQ3MDU5NTU5ODIyMDgsXG4gICAgICAgICAgYjogMC4zNzY0NzA1OTU1OTgyMjA4LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSb2xlcy9UZXh0L1RleHQgRW1waGFzaXNcIixcbiAgICBrZXk6IFwiMDJiY2EzZGY3YTZkNGZhODYzODE3M2M0Nzg3OGQ3MjY0NDQ3YjA2NVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjMTUxZDFkXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuMDgyMzUyOTQzNzE4NDMzMzgsXG4gICAgICAgICAgZzogMC4xMTM3MjU0OTA4NjgwOTE1OCxcbiAgICAgICAgICBiOiAwLjExMzcyNTQ5MDg2ODA5MTU4LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSb2xlcy9UZXh0L1RleHQgTXV0ZWRcIixcbiAgICBrZXk6IFwiYWQ3YWQyMTMzNjlhMzNmYjc2NDEwOGRiYTUzMGRiYWNhMzgyZjdlMVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjNmU3NTc1XCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuNDMxMzcyNTUzMTEwMTIyNyxcbiAgICAgICAgICBnOiAwLjQ1ODgyMzUzMTg2NjA3MzYsXG4gICAgICAgICAgYjogMC40NTg4MjM1MzE4NjYwNzM2LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSb2xlcy9UZXh0L1RleHQgRGlzYWJsZWRcIixcbiAgICBrZXk6IFwiNzU2OGRlN2M3ZGFlZjI0YWRkZGFjYmU3MjEwNTgxZGUwMTdhNDg4YlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjOWZhNWE1XCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuNjIzNTI5NDM0MjA0MTAxNixcbiAgICAgICAgICBnOiAwLjY0NzA1ODg0NDU2NjM0NTIsXG4gICAgICAgICAgYjogMC42NDcwNTg4NDQ1NjYzNDUyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSb2xlcy9CYWNrZ3JvdW5kL0JhY2tncm91bmQgQXBwXCIsXG4gICAga2V5OiBcIjRhOWI4OGM3MWQ4ZGMyNGYwYjY2MDI3OGMyNTY1MzI2OWMwNzYxNTZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2YzZjRmNFwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjk1Mjk0MTE3OTI3NTUxMjcsXG4gICAgICAgICAgZzogMC45NTY4NjI3NDc2NjkyMixcbiAgICAgICAgICBiOiAwLjk1Njg2Mjc0NzY2OTIyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSb2xlcy9CYWNrZ3JvdW5kL0JhY2tncm91bmQgU3VyZmFjZVwiLFxuICAgIGtleTogXCJiNTIzYWE2ZjMxMDM2ZmY3MmM2MDg3N2NmZmRhYjk5YTA0M2RkMDIyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNmZmZmZmZcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMSxcbiAgICAgICAgICBnOiAxLFxuICAgICAgICAgIGI6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJvbGVzL0JhY2tncm91bmQvQmFja2dyb3VuZCBTdXJmYWNlIEludmVydGVkXCIsXG4gICAga2V5OiBcIjY1Nzg2OTBmYmM4YTY1MzI0ZmFiOTE3OTBkOGNiNTg3ZDBjZWIxOTdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzI4MzYzNlwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjE1Njg2Mjc1MDY0OTQ1MjIsXG4gICAgICAgICAgZzogMC4yMTE3NjQ3MDgxNjEzNTQwNixcbiAgICAgICAgICBiOiAwLjIxMTc2NDcwODE2MTM1NDA2LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSb2xlcy9TdGF0ZXMvU3RhdGVzIFN1Y2Nlc3NcIixcbiAgICBrZXk6IFwiYzMyNWYzZGUzMTcwMjE5NDI1NjIzMTViY2MzMDkzZGI5YWFiZTgyZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjMDI4NjViXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuMDA3ODQzMTM3NzE4NzM3MTI1LFxuICAgICAgICAgIGc6IDAuNTI1NDkwMjI0MzYxNDE5NyxcbiAgICAgICAgICBiOiAwLjM1Njg2Mjc1MzYyOTY4NDQ1LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSb2xlcy9TdGF0ZXMvU3RhdGVzIFdhcm5pbmdcIixcbiAgICBrZXk6IFwiMjE1MTg5ODQ0NzQ4MjE4NmEyMGJhNzg3OTM0YjUzMTgwMWI0NzljOVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjYWE2NzAxXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuNjY2NjY2Njg2NTM0ODgxNixcbiAgICAgICAgICBnOiAwLjQwMzkyMTU3NDM1NDE3MTc1LFxuICAgICAgICAgIGI6IDAuMDAzOTIxNTY4ODU5MzY4NTYzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSb2xlcy9TdGF0ZXMvU3RhdGVzIEVycm9yXCIsXG4gICAga2V5OiBcIjkzMzU5ZGQxMGRmNjIxYjkyZDVjMjQ3MzAwNDJmN2M3OWQ4YWMyMjRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2RmMmQyNFwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjg3NDUwOTgxMTQwMTM2NzIsXG4gICAgICAgICAgZzogMC4xNzY0NzA1OTI2MTc5ODg2LFxuICAgICAgICAgIGI6IDAuMTQxMTc2NDc3MDc0NjIzMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUm9sZXMvU3RhdGVzL1N0YXRlcyBEaXNhYmxlZFwiLFxuICAgIGtleTogXCJhM2EzNzdhODQ1OTFlNTJkN2Y5MzVlNTMyMmY5NDMyZmJhNDIyZTQ3XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiM5ZmE1YTVcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC42MjM1Mjk0MzQyMDQxMDE2LFxuICAgICAgICAgIGc6IDAuNjQ3MDU4ODQ0NTY2MzQ1MixcbiAgICAgICAgICBiOiAwLjY0NzA1ODg0NDU2NjM0NTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJvbGVzL0JvcmRlci9Cb3JkZXIgUmVndWxhclwiLFxuICAgIGtleTogXCI1ZDMyZWE0YzhjMzhhMzg5ZjJhNzBmNDM4MWFhNjg5YjZhYTU3ZTRkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNlN2U5ZTlcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC45MDU4ODIzNTg1NTEwMjU0LFxuICAgICAgICAgIGc6IDAuOTEzNzI1NDk1MzM4NDM5OSxcbiAgICAgICAgICBiOiAwLjkxMzcyNTQ5NTMzODQzOTksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJvbGVzL0JvcmRlci9Cb3JkZXIgU3VidGxlXCIsXG4gICAga2V5OiBcIjZlMTk1Mjg2OTI1ZGE5NjQ3YzM2MjNhNjM0YTZlOGQxOTczYWYwNjVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2YzZjRmNFwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjk1Mjk0MTE3OTI3NTUxMjcsXG4gICAgICAgICAgZzogMC45NTY4NjI3NDc2NjkyMixcbiAgICAgICAgICBiOiAwLjk1Njg2Mjc0NzY2OTIyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSb2xlcy9Cb3JkZXIvQm9yZGVyIFN0cm9uZ1wiLFxuICAgIGtleTogXCIwZmJkN2I1M2Y1OTExMTc3NzUyNDFjZjNmZDcxMDE0ODhkZjUzOTdmXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNkMWQ0ZDRcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC44MTk2MDc4NTM4ODk0NjUzLFxuICAgICAgICAgIGc6IDAuODMxMzcyNTU5MDcwNTg3MixcbiAgICAgICAgICBiOiAwLjgzMTM3MjU1OTA3MDU4NzIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJvbGVzL0VudGl0eSBTdGF0dXMvRW50aXR5IFN0YXR1cyBPcGVyYXRpb25hbFwiLFxuICAgIGtleTogXCIyYTdhYWQzYzkzNjk3MThiZjQwZmUwMzljYWQ2ZGI1NmU0ZWM5YzE1XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiMwMWIwNzZcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC4wMDM5MjE1Njg4NTkzNjg1NjMsXG4gICAgICAgICAgZzogMC42OTAxOTYwOTY4OTcxMjUyLFxuICAgICAgICAgIGI6IDAuNDYyNzQ1MTAwMjU5NzgwOSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUm9sZXMvRW50aXR5IFN0YXR1cy9FbnRpdHkgU3RhdHVzIERlZ3JhZGVkXCIsXG4gICAga2V5OiBcIjU3OTc5ZjNiZTE3ZmJkNWZhOGI0NzcwOTVlN2FhYzI3NDU2YjYxNzBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2YwYjQwMFwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjk0MTE3NjQ3NDA5NDM5MDksXG4gICAgICAgICAgZzogMC43MDU4ODIzNzA0NzE5NTQzLFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJvbGVzL0VudGl0eSBTdGF0dXMvRW50aXR5IFN0YXR1cyBBbm9tYWx5XCIsXG4gICAga2V5OiBcIjFlYTFlYTZlODYxZWMxNGQzZGMwNGRlNjU5YWRmNzQ2ZjhmOWFmNWNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2YwN2EwZVwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjk0MTE3NjQ3NDA5NDM5MDksXG4gICAgICAgICAgZzogMC40Nzg0MzEzNzM4MzQ2MSxcbiAgICAgICAgICBiOiAwLjA1NDkwMTk2MTIzNzE5MjE1NCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUm9sZXMvRW50aXR5IFN0YXR1cy9FbnRpdHkgU3RhdHVzIFVuYXZhaWxhYmxlXCIsXG4gICAga2V5OiBcImU4OWY5YzkzYmRmYmJiODJkYjVmM2RlNDBhMmQyZjIxYmE5YTk4NTZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2Y1NTU0YlwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjk2MDc4NDMxNjA2MjkyNzIsXG4gICAgICAgICAgZzogMC4zMzMzMzMzNDMyNjc0NDA4LFxuICAgICAgICAgIGI6IDAuMjk0MTE3NjU5MzMwMzY4MDQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJvbGVzL0VudGl0eSBTdGF0dXMvRW50aXR5IFN0YXR1cyBVbmtub3duXCIsXG4gICAga2V5OiBcIjFlNTE4OThjZjI2YWY4OTFhOGI5Y2YyNDM5ZWRhNTkyODU3ODQ3MzNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzlmYTVhNVwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjYyMzUyOTQzNDIwNDEwMTYsXG4gICAgICAgICAgZzogMC42NDcwNTg4NDQ1NjYzNDUyLFxuICAgICAgICAgIGI6IDAuNjQ3MDU4ODQ0NTY2MzQ1MixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR3JheSAvIEdyYXkgMVwiLFxuICAgIGtleTogXCI5NzM1ZjE5OWRjNjAwOGM0ZmFlM2E1N2U5OTE2NGRkNjE2ZTBjNzQxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNmYWZiZmJcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC45ODAzOTIxNTgwMzE0NjM2LFxuICAgICAgICAgIGc6IDAuOTg0MzEzNzI2NDI1MTcwOSxcbiAgICAgICAgICBiOiAwLjk4NDMxMzcyNjQyNTE3MDksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdyYXkvR3JheSAyXCIsXG4gICAga2V5OiBcIjYxMjliNDkzNzRiZmI0NzI1Zjg0OWFiNWViMjZiMGI5MTI4ZGRlMjJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2YzZjRmNFwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjk1Mjk0MTE3OTI3NTUxMjcsXG4gICAgICAgICAgZzogMC45NTY4NjI3NDc2NjkyMixcbiAgICAgICAgICBiOiAwLjk1Njg2Mjc0NzY2OTIyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHcmF5L0dyYXkgM1wiLFxuICAgIGtleTogXCIwZTI1MGY3MTIwYzA1OTE1NmM3NDRlYWM2OTQyNTZiYzVlYmI0M2E2XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNlN2U5ZTlcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC45MDU4ODIzNTg1NTEwMjU0LFxuICAgICAgICAgIGc6IDAuOTEzNzI1NDk1MzM4NDM5OSxcbiAgICAgICAgICBiOiAwLjkxMzcyNTQ5NTMzODQzOTksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdyYXkvR3JheSA0XCIsXG4gICAga2V5OiBcImI1OThmN2Y2OGFiYmJjZTMwZDk0ZmRlZmY1YTI5ZTY1MDA3MmVkMjdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2QxZDRkNFwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjgxOTYwNzg1Mzg4OTQ2NTMsXG4gICAgICAgICAgZzogMC44MzEzNzI1NTkwNzA1ODcyLFxuICAgICAgICAgIGI6IDAuODMxMzcyNTU5MDcwNTg3MixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR3JheSAvIEdyYXkgNVwiLFxuICAgIGtleTogXCIyMGY2NDZiYzIxMDI2MGY5MDQxN2YwNWMxYmRmNDQzNzE4YjI2ZmJjXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiM5ZmE1YTVcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC42MjM1Mjk0MzQyMDQxMDE2LFxuICAgICAgICAgIGc6IDAuNjQ3MDU4ODQ0NTY2MzQ1MixcbiAgICAgICAgICBiOiAwLjY0NzA1ODg0NDU2NjM0NTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdyYXkgLyBHcmF5IDZcIixcbiAgICBrZXk6IFwiODI4MWM5NWU5MTQ2NWZmMDE3NDFkOWIxMmFiMjliOWQ5NWU1NmQyOFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjNmU3NTc1XCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuNDMxMzcyNTUzMTEwMTIyNyxcbiAgICAgICAgICBnOiAwLjQ1ODgyMzUzMTg2NjA3MzYsXG4gICAgICAgICAgYjogMC40NTg4MjM1MzE4NjYwNzM2LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHcmF5IC8gR3JheSA3XCIsXG4gICAga2V5OiBcIjZiM2E0MjM5Njk5ZjY2YTM0MmZhYzBhYzNlZTVjYTkyMzYwYzQwOGJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzU1NjA2MFwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjMzMzMzMzM0MzI2NzQ0MDgsXG4gICAgICAgICAgZzogMC4zNzY0NzA1OTU1OTgyMjA4LFxuICAgICAgICAgIGI6IDAuMzc2NDcwNTk1NTk4MjIwOCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR3JheSAvIEdyYXkgOFwiLFxuICAgIGtleTogXCIzOWViNzY2YjkzZTA3MTU1NzRjODg0MzgwY2IzYjdmOWI5YjMyNzc4XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiMzZjRjNGNcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC4yNDcwNTg4MjM3MDQ3MTk1NCxcbiAgICAgICAgICBnOiAwLjI5ODAzOTIyNzcyNDA3NTMsXG4gICAgICAgICAgYjogMC4yOTgwMzkyMjc3MjQwNzUzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHcmF5IC8gR3JheSA5XCIsXG4gICAga2V5OiBcIjBmMGYxMWExZDgxYWQ2MDhmYWE4ODY5M2QwZDg4NGYwMjFiZjFlYWFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzI4MzYzNlwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjE1Njg2Mjc1MDY0OTQ1MjIsXG4gICAgICAgICAgZzogMC4yMTE3NjQ3MDgxNjEzNTQwNixcbiAgICAgICAgICBiOiAwLjIxMTc2NDcwODE2MTM1NDA2LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHcmF5IC8gR3JheSAxMFwiLFxuICAgIGtleTogXCI5MDAwZGU5NGRhN2IwY2E3ZWU5MjcwYzJkY2NiOGYzNzcyZjBmYTA2XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiMxNTFkMWRcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC4wODIzNTI5NDM3MTg0MzMzOCxcbiAgICAgICAgICBnOiAwLjExMzcyNTQ5MDg2ODA5MTU4LFxuICAgICAgICAgIGI6IDAuMTEzNzI1NDkwODY4MDkxNTgsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRlYWwgLyBUZWFsIDFcIixcbiAgICBrZXk6IFwiYWE3ZjY3ZDVhZTIwYzdjYjUzZmY1MTM1YzRiNzhkZjhmNDFjZjg5ZlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjZjBmYmZjXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuOTQxMTc2NDc0MDk0MzkwOSxcbiAgICAgICAgICBnOiAwLjk4NDMxMzcyNjQyNTE3MDksXG4gICAgICAgICAgYjogMC45ODgyMzUyOTQ4MTg4NzgyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUZWFsIC8gVGVhbCAyXCIsXG4gICAga2V5OiBcImUxMzNhY2JmYTA5ZTIxYWZiNjFhZTI4MGQwMzNmYmE3ZTg3MzIxNDhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2M2ZjJmNlwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjc3NjQ3MDYwMTU1ODY4NTMsXG4gICAgICAgICAgZzogMC45NDkwMTk2MTA4ODE4MDU0LFxuICAgICAgICAgIGI6IDAuOTY0NzA1ODg0NDU2NjM0NSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGVhbCAvIFRlYWwgM1wiLFxuICAgIGtleTogXCIzMmE4ZmRhNjUxMDlmY2NlYWQ1OGYwZDU4OGMyYTczOWIxYzJlYjEzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiM2Y2RhZTNcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC40MjM1Mjk0MTYzMjI3MDgxMyxcbiAgICAgICAgICBnOiAwLjg1NDkwMTk2OTQzMjgzMDgsXG4gICAgICAgICAgYjogMC44OTAxOTYwODQ5NzYxOTYzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUZWFsL1RlYWwgNFwiLFxuICAgIGtleTogXCIzNmNkODBhNDYwMWY3OWY1NDFlMGJmYzgzYTkxNGE0ZDFhYjRmMzcyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiMyN2JhYzhcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC4xNTI5NDExODIyNTU3NDQ5MyxcbiAgICAgICAgICBnOiAwLjcyOTQxMTc4MDgzNDE5OCxcbiAgICAgICAgICBiOiAwLjc4NDMxMzczODM0NjA5OTksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRlYWwvVGVhbCA1XCIsXG4gICAga2V5OiBcIjdlYjNmZTFjOWUzNWVhNzk1ODIwZjEzNWZkMzBjMWJhNGQwOGE5NzZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzAxOWNhYVwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjAwMzkyMTU2ODg1OTM2ODU2MyxcbiAgICAgICAgICBnOiAwLjYxMTc2NDcyOTAyMjk3OTcsXG4gICAgICAgICAgYjogMC42NjY2NjY2ODY1MzQ4ODE2LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUZWFsL1RlYWwgNlwiLFxuICAgIGtleTogXCIzZTJjNmNiZjRiZWQ4YzUzN2FkMDE3ZmU5MTU1Zjg0YWM1MzNhY2RmXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiMwMTdjODZcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC4wMDM5MjE1Njg4NTkzNjg1NjMsXG4gICAgICAgICAgZzogMC40ODYyNzQ1MTA2MjIwMjQ1NCxcbiAgICAgICAgICBiOiAwLjUyNTQ5MDIyNDM2MTQxOTcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRlYWwgLyBUZWFsIDdcIixcbiAgICBrZXk6IFwiMmNiYTljZWI4Y2UxMjM0M2JkODUyZjAyYzU5OTIyZTNkNmVmZTcwMlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjMDI2MzZiXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuMDA3ODQzMTM3NzE4NzM3MTI1LFxuICAgICAgICAgIGc6IDAuMzg4MjM1MzAwNzc5MzQyNjUsXG4gICAgICAgICAgYjogMC40MTk2MDc4NDc5MjkwMDA4NSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGVhbCAvIFRlYWwgOFwiLFxuICAgIGtleTogXCIzNTQzM2Y0NGFiYmFjNjlmNmE0MDQ3YTBlZWI1MDRmYzg3ZTY5Nzg1XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiMwMDRiNTFcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAwLjI5NDExNzY1OTMzMDM2ODA0LFxuICAgICAgICAgIGI6IDAuMzE3NjQ3MDY5NjkyNjExNyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGVhbCAvIFRlYWwgOVwiLFxuICAgIGtleTogXCJjZDczYTZlMzc4ZjllZDJhMTdjZjM4ODBiMDU1ODczY2VjMjgyYzYzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiMwMDM3M2NcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAwLjIxNTY4NjI3NjU1NTA2MTM0LFxuICAgICAgICAgIGI6IDAuMjM1Mjk0MTE4NTIzNTk3NzIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRlYWwgLyBUZWFsIDEwXCIsXG4gICAga2V5OiBcImJlZTc0MGRlZTYzMTE5OGM2NDE3NjhjYzUzMmI2Y2FmYzM4MzEzOGFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzAyMWUxZlwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjAwNzg0MzEzNzcxODczNzEyNSxcbiAgICAgICAgICBnOiAwLjExNzY0NzA1OTI2MTc5ODg2LFxuICAgICAgICAgIGI6IDAuMTIxNTY4NjI3NjU1NTA2MTMsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJsdWUgLyBCbHVlIDFcIixcbiAgICBrZXk6IFwiZmJlNDM2YmJiMzZkN2U3NDUyZGUyYzMwMjFlM2FiMDBlZjgzNjZmNFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjZjZmYWZkXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuOTY0NzA1ODg0NDU2NjM0NSxcbiAgICAgICAgICBnOiAwLjk4MDM5MjE1ODAzMTQ2MzYsXG4gICAgICAgICAgYjogMC45OTIxNTY4NjMyMTI1ODU0LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCbHVlIC8gQmx1ZSAyXCIsXG4gICAga2V5OiBcImVhNDUwNzFmOTBhYzU5ZGIyMmI2MDQxOTQxNmU0MzU1MDVjZGFhMTFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2UxZWRmZlwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjg4MjM1Mjk0ODE4ODc4MTcsXG4gICAgICAgICAgZzogMC45Mjk0MTE3Njg5MTMyNjksXG4gICAgICAgICAgYjogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmx1ZSAvIEJsdWUgM1wiLFxuICAgIGtleTogXCJkZjMzMzdiZjY3MzFkY2U1YWZkMjY2NTk1OTYxZWEwMjU1MTE4MzE3XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNhNGQxZmNcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC42NDMxMzcyNzYxNzI2Mzc5LFxuICAgICAgICAgIGc6IDAuODE5NjA3ODUzODg5NDY1MyxcbiAgICAgICAgICBiOiAwLjk4ODIzNTI5NDgxODg3ODIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJsdWUgLyBCbHVlIDRcIixcbiAgICBrZXk6IFwiZTU3ODJjY2NiMmMxZjEzNjE5NmQxNDJhY2Y4OTZkZmUxMWJhMDFkOVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjNjNhZGZhXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuMzg4MjM1MzAwNzc5MzQyNjUsXG4gICAgICAgICAgZzogMC42Nzg0MzEzOTE3MTYwMDM0LFxuICAgICAgICAgIGI6IDAuOTgwMzkyMTU4MDMxNDYzNixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmx1ZSAvIEJsdWUgNVwiLFxuICAgIGtleTogXCI4MThmYTljMDQ5ZDBhMGUwMWE5NmU3MTM4MTE4Mjg1NGY0YTUyN2MxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiMyNzhlZjhcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC4xNTI5NDExODIyNTU3NDQ5MyxcbiAgICAgICAgICBnOiAwLjU1Njg2Mjc3MTUxMTA3NzksXG4gICAgICAgICAgYjogMC45NzI1NDkwMjEyNDQwNDkxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCbHVlIC8gQmx1ZSA2XCIsXG4gICAga2V5OiBcIjA4ZjY5YmE0MzQ2ZWUwZTgxMjkwMmJlMjljNTgwNjA2MzI5ZmNlZWFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzBjNzRkZlwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjA0NzA1ODgyNDQ0OTc3NzYsXG4gICAgICAgICAgZzogMC40NTQ5MDE5NjM0NzIzNjYzMyxcbiAgICAgICAgICBiOiAwLjg3NDUwOTgxMTQwMTM2NzIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJsdWUgLyBCbHVlIDdcIixcbiAgICBrZXk6IFwiOWRkMjQ1YmI2Y2JiNGVmNTljYjQ2YmE2Y2MxOTI1NzQyMDM3NDUyN1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjMDg1NmFhXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuMDMxMzcyNTUwODc0OTQ4NSxcbiAgICAgICAgICBnOiAwLjMzNzI1NDkxMTY2MTE0ODA3LFxuICAgICAgICAgIGI6IDAuNjY2NjY2Njg2NTM0ODgxNixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmx1ZSAvIEJsdWUgOFwiLFxuICAgIGtleTogXCI4OWQ4Y2MxYjc5ZGEwNTdiNzIyNjVkNjRjZjVkNjk2ZTI0NWZhZmFhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiMwNzQzODJcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC4wMjc0NTA5ODA2MTg1OTYwNzcsXG4gICAgICAgICAgZzogMC4yNjI3NDUxMTIxODA3MDk4NCxcbiAgICAgICAgICBiOiAwLjUwOTgwMzk1MDc4NjU5MDYsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJsdWUgLyBCbHVlIDlcIixcbiAgICBrZXk6IFwiZDkwMDNjMmQ4ZDZhMmFkOTQzYjZjMDc3ZTA1OWFhNmQ4Zjg3MmNhMlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjMDQyYTUxXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuMDE1Njg2Mjc1NDM3NDc0MjUsXG4gICAgICAgICAgZzogMC4xNjQ3MDU4ODc0MzY4NjY3NixcbiAgICAgICAgICBiOiAwLjMxNzY0NzA2OTY5MjYxMTcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJsdWUgLyBCbHVlIDEwXCIsXG4gICAga2V5OiBcIjAwMGJmYzljZjYzNTczZDMxN2E1NWU5ZmI1Nzc5ZjVlY2FiNWUxZTFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzAzMTcyYlwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjAxMTc2NDcwNjExMjQ0NDQsXG4gICAgICAgICAgZzogMC4wOTAxOTYwODA1MDU4NDc5MyxcbiAgICAgICAgICBiOiAwLjE2ODYyNzQ1NTgzMDU3NDA0LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHcmVlbiAvIEdyZWVuIDFcIixcbiAgICBrZXk6IFwiZGRkNTRlMzIyZTE3ZmMyYTU4YTQ3YjMyZTAyMzk3OTM2MDA2ZTMyNVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjZWFmZmYyXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuOTE3NjQ3MDYzNzMyMTQ3MixcbiAgICAgICAgICBnOiAxLFxuICAgICAgICAgIGI6IDAuOTQ5MDE5NjEwODgxODA1NCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR3JlZW4gLyBHcmVlbiAyXCIsXG4gICAga2V5OiBcIjE4NDgxYTFiYjEyYzBmYWVhM2YyNWY3YjBlMzMxODJkODkxYTliZjNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2JkZjdkN1wiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjc0MTE3NjQ4NjAxNTMxOTgsXG4gICAgICAgICAgZzogMC45Njg2Mjc0NTI4NTAzNDE4LFxuICAgICAgICAgIGI6IDAuODQzMTM3MjY0MjUxNzA5LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHcmVlbiAvIEdyZWVuIDNcIixcbiAgICBrZXk6IFwiNjNlYzk5ZDkyMGM4ZjI5Y2NkYzIxZGRkMGU5NzRhMGM1NjdlZDU3ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjNmJlYWFlXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuNDE5NjA3ODQ3OTI5MDAwODUsXG4gICAgICAgICAgZzogMC45MTc2NDcwNjM3MzIxNDcyLFxuICAgICAgICAgIGI6IDAuNjgyMzUyOTYwMTA5NzEwNyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR3JlZW4gLyBHcmVlbiA0XCIsXG4gICAga2V5OiBcIjIyYWE0ZDVmNzc5ZjlmZDhkM2QwNGY3NDkxNzZmMmVjNzk0MTFkMGFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzAxYzg4NFwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjAwMzkyMTU2ODg1OTM2ODU2MyxcbiAgICAgICAgICBnOiAwLjc4NDMxMzczODM0NjA5OTksXG4gICAgICAgICAgYjogMC41MTc2NDcwODc1NzQwMDUxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHcmVlbiAvIEdyZWVuIDVcIixcbiAgICBrZXk6IFwiOGIyZDdlZmRkZjNjZWVmYWE4YTRhNGU0Y2Q4ODQ4N2U0N2Q3Y2EwNlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjMDFiMDc2XCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuMDAzOTIxNTY4ODU5MzY4NTYzLFxuICAgICAgICAgIGc6IDAuNjkwMTk2MDk2ODk3MTI1MixcbiAgICAgICAgICBiOiAwLjQ2Mjc0NTEwMDI1OTc4MDksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdyZWVuIC8gR3JlZW4gNlwiLFxuICAgIGtleTogXCJkMjIxMmJmNWNhN2FiY2UwMWYxOGM1MTA5NDM3ZWZkNWVlOTY2OWIzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiMwMjg2NWJcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC4wMDc4NDMxMzc3MTg3MzcxMjUsXG4gICAgICAgICAgZzogMC41MjU0OTAyMjQzNjE0MTk3LFxuICAgICAgICAgIGI6IDAuMzU2ODYyNzUzNjI5Njg0NDUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdyZWVuIC8gR3JlZW4gN1wiLFxuICAgIGtleTogXCJjZjI1ZjY1NWYzYzc1MjNiODI3YjY4OTY0MTg2NWFmMWMyNmMyNGZmXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiMwMjY3NDdcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC4wMDc4NDMxMzc3MTg3MzcxMjUsXG4gICAgICAgICAgZzogMC40MDM5MjE1NzQzNTQxNzE3NSxcbiAgICAgICAgICBiOiAwLjI3ODQzMTM4NTc1NTUzODk0LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHcmVlbiAvIEdyZWVuIDhcIixcbiAgICBrZXk6IFwiZWRmNjYxOTI1ZjlkZTMxNzE0OWI0MmMzNmE1Y2YyYTBiNWVjNGNmMVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjMDE0ZDM2XCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuMDAzOTIxNTY4ODU5MzY4NTYzLFxuICAgICAgICAgIGc6IDAuMzAxOTYwNzk2MTE3NzgyNixcbiAgICAgICAgICBiOiAwLjIxMTc2NDcwODE2MTM1NDA2LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHcmVlbiAvIEdyZWVuIDlcIixcbiAgICBrZXk6IFwiMWJiMjhhNDlmMzI3MjYwZDJiOTM1NzJmNjg4MGI5MWZkYjg1MWVkMlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjMDEzOTI3XCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuMDAzOTIxNTY4ODU5MzY4NTYzLFxuICAgICAgICAgIGc6IDAuMjIzNTI5NDEzMzQyNDc1OSxcbiAgICAgICAgICBiOiAwLjE1Mjk0MTE4MjI1NTc0NDkzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHcmVlbiAvIEdyZWVuIDEwXCIsXG4gICAga2V5OiBcImZiM2FjMWJkZWRjNzBlZWQ2OGUyYzFhNDE5OGMwNWFjMTY1Njk5ZmZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzAyMTIwMFwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjAwNzg0MzEzNzcxODczNzEyNSxcbiAgICAgICAgICBnOiAwLjA3MDU4ODIzODUzNzMxMTU1LFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlllbGxvdy9ZZWxsb3cgMVwiLFxuICAgIGtleTogXCJjN2IyNTkwMTM1MmViNzlhMGU1NTNlNzRmYWU1OGQ0YTJiNjgyNGU2XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNmZWZhZTlcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC45OTYwNzg0MzE2MDYyOTI3LFxuICAgICAgICAgIGc6IDAuOTgwMzkyMTU4MDMxNDYzNixcbiAgICAgICAgICBiOiAwLjkxMzcyNTQ5NTMzODQzOTksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlllbGxvdy9ZZWxsb3cgMlwiLFxuICAgIGtleTogXCJhOTM2NzZhNTA2MTQ5Mjc3ODI1M2ZmYjYzZWVhYWEzNzNlMjliNmI2XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNmZGYyYzRcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC45OTIxNTY4NjMyMTI1ODU0LFxuICAgICAgICAgIGc6IDAuOTQ5MDE5NjEwODgxODA1NCxcbiAgICAgICAgICBiOiAwLjc2ODYyNzQ2NDc3MTI3MDgsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlllbGxvdy9ZZWxsb3cgM1wiLFxuICAgIGtleTogXCJhZGYwNjJjOGZlMTdmMmQ1NmQ0MzBjNGU2NDc2ZWNmZjU1NmY0NzUyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNmY2U1OTFcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC45ODgyMzUyOTQ4MTg4NzgyLFxuICAgICAgICAgIGc6IDAuODk4MDM5MjIxNzYzNjEwOCxcbiAgICAgICAgICBiOiAwLjU2ODYyNzQ3NjY5MjE5OTcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlllbGxvdy9ZZWxsb3cgNFwiLFxuICAgIGtleTogXCIyZjllYTBiMjdmNTk3NzhkYjViM2FiYWE4ZDQzNTdmYWYxYzhmNDhjXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNmZmQyM2RcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMSxcbiAgICAgICAgICBnOiAwLjgyMzUyOTQyMjI4MzE3MjYsXG4gICAgICAgICAgYjogMC4yMzkyMTU2ODY5MTczMDUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlllbGxvdy9ZZWxsb3cgNVwiLFxuICAgIGtleTogXCJlYjFlM2EwNDJlZTVkOGI4MjM4NzQwNDY2Mzk2NmU1ZjlkMDhjZjNjXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNmMGI0MDBcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC45NDExNzY0NzQwOTQzOTA5LFxuICAgICAgICAgIGc6IDAuNzA1ODgyMzcwNDcxOTU0MyxcbiAgICAgICAgICBiOiAwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJZZWxsb3cvWWVsbG93IDZcIixcbiAgICBrZXk6IFwiMmIzZGI0MTQ5ZDU0NTlhZmVlMzMxNmY3ZmFlZDJmYjAzMzQyYTIxYVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjYWE2NzAxXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuNjY2NjY2Njg2NTM0ODgxNixcbiAgICAgICAgICBnOiAwLjQwMzkyMTU3NDM1NDE3MTc1LFxuICAgICAgICAgIGI6IDAuMDAzOTIxNTY4ODU5MzY4NTYzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJZZWxsb3cvWWVsbG93IDdcIixcbiAgICBrZXk6IFwiMjE2NzUyYjUyY2QyNDNkN2NjNzE4MjY3YWFmY2RmMmEyMDgxYzgzMFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjODY0NzAwXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuNTI1NDkwMjI0MzYxNDE5NyxcbiAgICAgICAgICBnOiAwLjI3ODQzMTM4NTc1NTUzODk0LFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlllbGxvdy9ZZWxsb3cgOFwiLFxuICAgIGtleTogXCIwMzEzZjc4ODlhOTdkOGVhODE5YWY3ODM1ZDM4ZTQyNjA5MGFjZGE5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiM2YzM0MDFcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC40MjM1Mjk0MTYzMjI3MDgxMyxcbiAgICAgICAgICBnOiAwLjIwMzkyMTU3MTM3MzkzOTUxLFxuICAgICAgICAgIGI6IDAuMDAzOTIxNTY4ODU5MzY4NTYzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJZZWxsb3cvWWVsbG93IDlcIixcbiAgICBrZXk6IFwiMGFjNzE1ZTRjYTZiYTUyNWNjMGQwZTZlYTk3ZjlmYjliM2IxNjRmNlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjNDYxZTAyXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuMjc0NTA5ODE3MzYxODMxNjcsXG4gICAgICAgICAgZzogMC4xMTc2NDcwNTkyNjE3OTg4NixcbiAgICAgICAgICBiOiAwLjAwNzg0MzEzNzcxODczNzEyNSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiWWVsbG93L1llbGxvdyAxMFwiLFxuICAgIGtleTogXCI2YmU3ZTgwNzBlYjY1NDU4MTJmOGM2YjAyZjgwNTI5YTQ3Y2E4NDNiXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiMyNjEyMDVcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC4xNDkwMTk2MTM4NjIwMzc2NixcbiAgICAgICAgICBnOiAwLjA3MDU4ODIzODUzNzMxMTU1LFxuICAgICAgICAgIGI6IDAuMDE5NjA3ODQzODMxMTgxNTI2LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJPcmFuZ2UvT3JhbmdlIDFcIixcbiAgICBrZXk6IFwiMzhjODVjMDgzNzYwZjkxMjM5MDI5MWVjMzM0YTVmOGU2OGJmMGNkYlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjZmVmNWU5XCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuOTk2MDc4NDMxNjA2MjkyNyxcbiAgICAgICAgICBnOiAwLjk2MDc4NDMxNjA2MjkyNzIsXG4gICAgICAgICAgYjogMC45MTM3MjU0OTUzMzg0Mzk5LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJPcmFuZ2UvT3JhbmdlIDJcIixcbiAgICBrZXk6IFwiZDEwMjQ5NmI4MTNlYTc3OGQ1MzQxMWY1NDdjOGQ5ZmEzZjQ3MTI0MVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjZmRlN2M5XCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuOTkyMTU2ODYzMjEyNTg1NCxcbiAgICAgICAgICBnOiAwLjkwNTg4MjM1ODU1MTAyNTQsXG4gICAgICAgICAgYjogMC43ODgyMzUzMDY3Mzk4MDcxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJPcmFuZ2UvT3JhbmdlIDNcIixcbiAgICBrZXk6IFwiNzQzMzNiYzE5MmIzMTgwZDEwZTA3MzY5ZTFlN2M0ZTZkMTNiY2MzZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjZmNjYThkXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuOTg4MjM1Mjk0ODE4ODc4MixcbiAgICAgICAgICBnOiAwLjc5MjE1Njg3NTEzMzUxNDQsXG4gICAgICAgICAgYjogMC41NTI5NDEyMDMxMTczNzA2LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJPcmFuZ2UvT3JhbmdlIDRcIixcbiAgICBrZXk6IFwiN2JhNTNiYTFhNDFkZjg0YmM4Nzc2OTQyMjlkYjQyN2EyYmY2NWMzNlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjZmFhNDRhXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuOTgwMzkyMTU4MDMxNDYzNixcbiAgICAgICAgICBnOiAwLjY0MzEzNzI3NjE3MjYzNzksXG4gICAgICAgICAgYjogMC4yOTAxOTYwOTA5MzY2NjA3NyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiT3JhbmdlL09yYW5nZSA1XCIsXG4gICAga2V5OiBcIjg0YjZiMDQzZjUxOTc3NDUwMTcyOTU1NmUwY2IwNGViZTQzNTgxNGZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2YwN2EwZVwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjk0MTE3NjQ3NDA5NDM5MDksXG4gICAgICAgICAgZzogMC40Nzg0MzEzNzM4MzQ2MSxcbiAgICAgICAgICBiOiAwLjA1NDkwMTk2MTIzNzE5MjE1NCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiT3JhbmdlL09yYW5nZSA2XCIsXG4gICAga2V5OiBcIjAzYzg1OTRlMzE0MzllNjNlYzY4NjFiODNlMDhiOGJhOTc3N2RiNzFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2MyNTcwNVwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjc2MDc4NDMyNzk4Mzg1NjIsXG4gICAgICAgICAgZzogMC4zNDExNzY0ODAwNTQ4NTUzNSxcbiAgICAgICAgICBiOiAwLjAxOTYwNzg0MzgzMTE4MTUyNixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiT3JhbmdlL09yYW5nZSA3XCIsXG4gICAga2V5OiBcIjFhY2FhMDM4OTJhNTJiNWVhN2QwMWVlNGFlMWE2ZTA1YmVlMDg1NmZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzk3M2EwOFwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjU5MjE1Njg4NzA1NDQ0MzQsXG4gICAgICAgICAgZzogMC4yMjc0NTA5ODE3MzYxODMxNyxcbiAgICAgICAgICBiOiAwLjAzMTM3MjU1MDg3NDk0ODUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk9yYW5nZS9PcmFuZ2UgOFwiLFxuICAgIGtleTogXCIzMWVhMmM1OGE5NmE4MjI4NGQzYjE1NzZkNzFiMjQ1OWZhYWI0NzUwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiM3YzI3MDdcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC40ODYyNzQ1MTA2MjIwMjQ1NCxcbiAgICAgICAgICBnOiAwLjE1Mjk0MTE4MjI1NTc0NDkzLFxuICAgICAgICAgIGI6IDAuMDI3NDUwOTgwNjE4NTk2MDc3LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJPcmFuZ2UvT3JhbmdlIDlcIixcbiAgICBrZXk6IFwiZjY5NjA4ZjFhMTZhOTNlMDY4YjNhN2E3ZTRlMzU3YzRlYzJmMDk1ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjNGQxODA0XCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuMzAxOTYwNzk2MTE3NzgyNixcbiAgICAgICAgICBnOiAwLjA5NDExNzY0ODg5OTU1NTIsXG4gICAgICAgICAgYjogMC4wMTU2ODYyNzU0Mzc0NzQyNSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiT3JhbmdlL09yYW5nZSAxMFwiLFxuICAgIGtleTogXCIyYjE5OGQ3OGMwYzMwYzU5NDI2MTA4MWQ3MTZhNGVjY2YwZjIwMGE1XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiMyZDBkMDNcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC4xNzY0NzA1OTI2MTc5ODg2LFxuICAgICAgICAgIGc6IDAuMDUwOTgwMzkyODQzNDg0ODgsXG4gICAgICAgICAgYjogMC4wMTE3NjQ3MDYxMTI0NDQ0LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSZWQvUmVkIDFcIixcbiAgICBrZXk6IFwiM2FmZTAyZWE3YTExYjliZjIyYjViZjU5OTY0ZWNmNTA3ZGZkMTNmNlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjZmRmNGY0XCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuOTkyMTU2ODYzMjEyNTg1NCxcbiAgICAgICAgICBnOiAwLjk1Njg2Mjc0NzY2OTIyLFxuICAgICAgICAgIGI6IDAuOTU2ODYyNzQ3NjY5MjIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJlZC9SZWQgMlwiLFxuICAgIGtleTogXCJjY2NkYTAyNmI4YWFjZDAyMGY0ZDliMjIyMzVjMThjNjFhMWIwZmQ0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNmZWU1ZTVcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC45OTYwNzg0MzE2MDYyOTI3LFxuICAgICAgICAgIGc6IDAuODk4MDM5MjIxNzYzNjEwOCxcbiAgICAgICAgICBiOiAwLjg5ODAzOTIyMTc2MzYxMDgsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJlZC9SZWQgM1wiLFxuICAgIGtleTogXCI2ZDgwMGE3ODE5ZDc4MTlmZjBhYTE4ODM0YzUzYzIyZWYwZmJlMTE4XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNmY2JkYmFcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC45ODgyMzUyOTQ4MTg4NzgyLFxuICAgICAgICAgIGc6IDAuNzQxMTc2NDg2MDE1MzE5OCxcbiAgICAgICAgICBiOiAwLjcyOTQxMTc4MDgzNDE5OCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUmVkL1JlZCA0XCIsXG4gICAga2V5OiBcIjljOTYyYzVhYjIyZGM2ZjQzZWUwMWZhNTk2MjA4ZmM2Zjc3MjIyM2NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2Y5ODk4MlwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjk3NjQ3MDU4OTYzNzc1NjMsXG4gICAgICAgICAgZzogMC41MzcyNTQ5Mjk1NDI1NDE1LFxuICAgICAgICAgIGI6IDAuNTA5ODAzOTUwNzg2NTkwNixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUmVkL1JlZCA1XCIsXG4gICAga2V5OiBcIjkwYzRjNmExZGVkMDY5NjVkMGRiYTM1MzRmODJlZGIxYjk1NzBiMWFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2Y1NTU0YlwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjk2MDc4NDMxNjA2MjkyNzIsXG4gICAgICAgICAgZzogMC4zMzMzMzMzNDMyNjc0NDA4LFxuICAgICAgICAgIGI6IDAuMjk0MTE3NjU5MzMwMzY4MDQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJlZC9SZWQgNlwiLFxuICAgIGtleTogXCIwM2IyMzA5Y2RkNzVkYTA3M2ZkYjc3NDc3ZGI5Y2U0ZTk1N2VkYTVmXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNkZjJkMjRcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC44NzQ1MDk4MTE0MDEzNjcyLFxuICAgICAgICAgIGc6IDAuMTc2NDcwNTkyNjE3OTg4NixcbiAgICAgICAgICBiOiAwLjE0MTE3NjQ3NzA3NDYyMzEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJlZC9SZWQgN1wiLFxuICAgIGtleTogXCIxNGIzODhiM2VjOTA3YjRhYWZmN2NmZTJhMjNkMWZhODFkZmZjMDdmXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNiMDBmMGFcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMC42OTAxOTYwOTY4OTcxMjUyLFxuICAgICAgICAgIGc6IDAuMDU4ODIzNTI5NjMwODk5NDMsXG4gICAgICAgICAgYjogMC4wMzkyMTU2ODc2NjIzNjMwNSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUmVkL1JlZCA4XCIsXG4gICAga2V5OiBcImI1YjI1Mzc2ZDU2NmJjMTc3NDE0Yzc2NTg4NjM0YmJjMzQ5ZmQ0NGJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzhlMDAwMFwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjU1Njg2Mjc3MTUxMTA3NzksXG4gICAgICAgICAgZzogMCxcbiAgICAgICAgICBiOiAwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSZWQvUmVkIDlcIixcbiAgICBrZXk6IFwiY2FiNmFlOGM1YjY2MzRkNjYyZjhiMWIxMzE1MWI0ZWU3MjQ1YTE1OVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGhleDogXCIjNWEwMTAwXCIsXG4gICAgICAgIHJnYjoge1xuICAgICAgICAgIHI6IDAuMzUyOTQxMTg1MjM1OTc3MixcbiAgICAgICAgICBnOiAwLjAwMzkyMTU2ODg1OTM2ODU2MyxcbiAgICAgICAgICBiOiAwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSZWQvUmVkIDEwXCIsXG4gICAga2V5OiBcIjY1NTFmY2I3NmQwZWVkZTQwNzVhZGM2ZWQ0ZGMyODgxNTQxMTc3YTJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzM4MDAwMFwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLjIxOTYwNzg0NDk0ODc2ODYyLFxuICAgICAgICAgIGc6IDAsXG4gICAgICAgICAgYjogMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmFzaWNzL1doaXRlXCIsXG4gICAga2V5OiBcIjcyYzJjY2JmZjE0MDI4ODkwNzk4NmRjNmYwYWFjZDExMWVkMWE0M2FcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiI2ZmZmZmZlwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAxLFxuICAgICAgICAgIGc6IDEsXG4gICAgICAgICAgYjogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmFzaWNzL0JsYWNrXCIsXG4gICAga2V5OiBcIjc3NGYyNjczMDNkN2Q5MDhlZjBjZjhkZWU1YjQxY2I5NDBjNjI0MWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBoZXg6IFwiIzAwMDAwMFwiLFxuICAgICAgICByZ2I6IHtcbiAgICAgICAgICByOiAwLFxuICAgICAgICAgIGc6IDAsXG4gICAgICAgICAgYjogMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiX1JvbGVzL0JhY2tncm91bmQvQmFja2dyb3VuZCBMaWdodCBUcmFuc3BhcmVudFwiLFxuICAgIGtleTogXCJjZTljMDlhOGE5NDQ1YTA3NmU1NmMzOWFiMDJmYTQwNjNkMjMxMDUzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAwLjIwMDAwMDAwMjk4MDIzMjI0LFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiNmZmZmZmZcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMSxcbiAgICAgICAgICBnOiAxLFxuICAgICAgICAgIGI6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIl9Sb2xlcy9CYWNrZ3JvdW5kL0JhY2tncm91bmQgRGFyayBUcmFuc3BhcmVudFwiLFxuICAgIGtleTogXCJhNDdlZGNlMmE3OGQ2N2FjNTMxYTM2ZTg2NWQxNDBjNDE5YTc0N2Q1XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBvcGFjaXR5OiAwLjA3OTk5OTk5ODIxMTg2MDY2LFxuICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgaGV4OiBcIiMwMDAwMDBcIixcbiAgICAgICAgcmdiOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAwLFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVDb3JlUGFpbnRTdHlsZXM7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9