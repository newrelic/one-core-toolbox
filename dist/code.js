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

/***/ "./src/plugin/controller.ts":
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 300, height: 412 });
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg.type === "create-table") {
        const tableFrame = figma.createFrame();
        let headerCell = yield figma.importComponentByKeyAsync("ce8fa8e8cab07a19f83f4181ac8cbe76093c6bc3");
        let tableRow = figma.createComponent();
        let cellFillContainerY = false;
        yield figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
        tableFrame.name = "Table";
        tableFrame.counterAxisSizingMode = "AUTO";
        tableFrame.layoutMode = "VERTICAL";
        tableFrame.x = figma.viewport.center.x;
        tableFrame.y = figma.viewport.center.y;
        headerCell.variantProperties.Type = "Body";
        msg.columnConfiguration.find((col) => (cellFillContainerY = col.multiValue));
        [...Array(msg.rows + 1).keys()].map((rowIndex) => {
            tableRow.layoutMode = "HORIZONTAL";
            tableRow.counterAxisSizingMode = "AUTO";
            tableRow.name = "Row";
            msg.columnConfiguration.map((col, i, arr) => __awaiter(this, void 0, void 0, function* () {
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
        let userData = figma.currentUser;
        figma.ui.postMessage({ type: "current-user", message: userData });
        figma.notify("Table created ✅");
        figma.closePlugin();
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx3Q0FBd0M7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRGQUE0RjtBQUNqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsMEJBQTBCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtREFBbUQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw4QkFBOEIsMENBQTBDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzXCIpO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDMwMCwgaGVpZ2h0OiA0MTIgfSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKG1zZy50eXBlID09PSBcImNyZWF0ZS10YWJsZVwiKSB7XG4gICAgICAgIGNvbnN0IHRhYmxlRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBsZXQgaGVhZGVyQ2VsbCA9IHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoXCJjZThmYThlOGNhYjA3YTE5ZjgzZjQxODFhYzhjYmU3NjA5M2M2YmMzXCIpO1xuICAgICAgICBsZXQgdGFibGVSb3cgPSBmaWdtYS5jcmVhdGVDb21wb25lbnQoKTtcbiAgICAgICAgbGV0IGNlbGxGaWxsQ29udGFpbmVyWSA9IGZhbHNlO1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIHRhYmxlRnJhbWUubmFtZSA9IFwiVGFibGVcIjtcbiAgICAgICAgdGFibGVGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgdGFibGVGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICB0YWJsZUZyYW1lLnggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICAgICAgdGFibGVGcmFtZS55ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgICAgIGhlYWRlckNlbGwudmFyaWFudFByb3BlcnRpZXMuVHlwZSA9IFwiQm9keVwiO1xuICAgICAgICBtc2cuY29sdW1uQ29uZmlndXJhdGlvbi5maW5kKChjb2wpID0+IChjZWxsRmlsbENvbnRhaW5lclkgPSBjb2wubXVsdGlWYWx1ZSkpO1xuICAgICAgICBbLi4uQXJyYXkobXNnLnJvd3MgKyAxKS5rZXlzKCldLm1hcCgocm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRhYmxlUm93LmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgICAgIHRhYmxlUm93LmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgdGFibGVSb3cubmFtZSA9IFwiUm93XCI7XG4gICAgICAgICAgICBtc2cuY29sdW1uQ29uZmlndXJhdGlvbi5tYXAoKGNvbCwgaSwgYXJyKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHsgbmFtZTogY29sTmFtZSwgYWxpZ25tZW50OiBjb2xBbGlnbm1lbnQsIGNlbGxUeXBlOiBjb2xDZWxsVHlwZSwgbXVsdGlWYWx1ZTogY29sTXVsdGlWYWx1ZSwgfSA9IGNvbDtcbiAgICAgICAgICAgICAgICBjb2xBbGlnbm1lbnQgPVxuICAgICAgICAgICAgICAgICAgICBjb2xBbGlnbm1lbnRbMF0udG9VcHBlckNhc2UoKSArIGNvbEFsaWdubWVudC5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICAgICAgY29sQ2VsbFR5cGUgPSBjb2xDZWxsVHlwZVswXS50b1VwcGVyQ2FzZSgpICsgY29sQ2VsbFR5cGUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgICAgIGNvbE11bHRpVmFsdWUgPSBjb2xNdWx0aVZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29sTXVsdGlWYWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgIGNvbE11bHRpVmFsdWVbMF0udG9VcHBlckNhc2UoKSArIGNvbE11bHRpVmFsdWUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGhpc0hlYWRlckNlbGwgPSBoZWFkZXJDZWxsLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbCA9IHRoaXNIZWFkZXJDZWxsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5uYW1lID0gY29sTmFtZS5sZW5ndGggPiAwID8gY29sTmFtZSA6IFwiSGVhZGVyXCI7XG4gICAgICAgICAgICAgICAgICAgIHRleHROb2RlT2ZIZWFkZXJDZWxsLmRlbGV0ZUNoYXJhY3RlcnMoMCwgdGV4dE5vZGVPZkhlYWRlckNlbGwuY2hhcmFjdGVycy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZU9mSGVhZGVyQ2VsbC5pbnNlcnRDaGFyYWN0ZXJzKDAsIGNvbE5hbWUubGVuZ3RoID4gMCA/IGNvbE5hbWUgOiBcIkhlYWRlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwuc2V0UHJvcGVydGllcyh7IEFsaWdubWVudDogY29sQWxpZ25tZW50IH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5yZXNpemUoY29sTXVsdGlWYWx1ZSA9PT0gXCJUcnVlXCIgPyAxMjAgOiB0aGlzSGVhZGVyQ2VsbC53aWR0aCwgdGhpc0hlYWRlckNlbGwuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0hlYWRlckNlbGwuY2hpbGRyZW5bMF0ubGF5b3V0R3JvdyA9IGNlbGxGaWxsQ29udGFpbmVyWSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzSGVhZGVyQ2VsbC5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBjZWxsRmlsbENvbnRhaW5lcllcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJGSVhFRFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiQVVUT1wiO1xuICAgICAgICAgICAgICAgICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0aGlzSGVhZGVyQ2VsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGFibGVGcmFtZS5hcHBlbmRDaGlsZCh0YWJsZVJvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhpc1RhYmxlUm93ID0gdGFibGVSb3cuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzVGFibGVSb3cuY2hpbGRyZW4ubWFwKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgeyBjZWxsVHlwZTogY29sQ2VsbFR5cGUsIG11bHRpVmFsdWU6IGNvbE11bHRpVmFsdWUgfSA9IG1zZy5jb2x1bW5Db25maWd1cmF0aW9uW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgY29sQ2VsbFR5cGUgPSBjb2xDZWxsVHlwZVswXS50b1VwcGVyQ2FzZSgpICsgY29sQ2VsbFR5cGUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgICAgICAgICBjb2xNdWx0aVZhbHVlID0gY29sTXVsdGlWYWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBjb2xNdWx0aVZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbE11bHRpVmFsdWVbMF0udG9VcHBlckNhc2UoKSArIGNvbE11bHRpVmFsdWUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLm5hbWUgPT09IFwiSGVhZGVyXCIgPyAoY2VsbC5uYW1lID0gXCJDZWxsXCIpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRQcm9wZXJ0aWVzKHsgVHlwZTogXCJCb2R5XCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBUeXBlOiBjb2xDZWxsVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTXVsdGktdmFsdWVcIjogY29sTXVsdGlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2hpbGRyZW5bMF0ubGF5b3V0R3JvdyA9IGNlbGxGaWxsQ29udGFpbmVyWSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IGNlbGxGaWxsQ29udGFpbmVyWSA/IFwiRklYRURcIiA6IFwiQVVUT1wiO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRhYmxlRnJhbWUuYXBwZW5kQ2hpbGQodGhpc1RhYmxlUm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCB1c2VyRGF0YSA9IGZpZ21hLmN1cnJlbnRVc2VyO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiY3VycmVudC11c2VyXCIsIG1lc3NhZ2U6IHVzZXJEYXRhIH0pO1xuICAgICAgICBmaWdtYS5ub3RpZnkoXCJUYWJsZSBjcmVhdGVkIOKchVwiKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=