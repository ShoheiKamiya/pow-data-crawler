/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "mountains_Rusutsu_js";
exports.ids = ["mountains_Rusutsu_js"];
exports.modules = {

/***/ "./Mountain.js":
/*!*********************!*\
  !*** ./Mountain.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mountain\": () => /* binding */ Mountain\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./utils.js\");\n\nclass Mountain {\n  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {\n    this.snowfallStr = snowfallStr;\n    this.depthStr = depthStr;\n    this.temperatureStr = temperatureStr;\n    this.updatedStr = updatedStr;\n  }\n\n  static formatDate(date) {\n    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date);\n  }\n\n  formatDate(date) {\n    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date);\n  }\n\n}\n\n//# sourceURL=webpack:///./Mountain.js?");

/***/ }),

/***/ "./mountains/Rusutsu.js":
/*!******************************!*\
  !*** ./mountains/Rusutsu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Rusutsu\": () => /* binding */ Rusutsu\n/* harmony export */ });\n/* harmony import */ var _Mountain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mountain.js */ \"./Mountain.js\");\n\nclass Rusutsu extends _Mountain_js__WEBPACK_IMPORTED_MODULE_0__.Mountain {\n  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {\n    super(snowfallStr, depthStr, temperatureStr, updatedStr);\n  }\n\n  static get ID() {\n    return 'rusutsu';\n  }\n\n  static get URL() {\n    return 'https://rusutsu.com/snow-and-weather-report/';\n  }\n\n  static get SELECTORS() {\n    return {\n      snowfall: '/html/body/main/article[4]/section/div[1]/div[2]/dl[2]/dd',\n      depth: '/html/body/main/article[4]/section/div[1]/div[2]/dl[1]/dd',\n      temperature: '/html/body/main/article[4]/section/div[1]/div[1]/p[2]',\n      updated: '/html/body/main/article[4]/section/h4'\n    };\n  }\n\n  static parseSnowfall(snowfallStr) {\n    return Number(snowfallStr.match(/\\d+/, ''));\n  }\n\n  static parseDepth(depthStr) {\n    return Number(depthStr.match(/\\d+/, ''));\n  }\n\n  static parseTemperature(temperatureStr) {\n    return Number(temperatureStr.replace('℃', ''));\n  }\n\n  static parseUpdated(updatedStr) {\n    const str = updatedStr.match(/\\d+\\/\\d+\\/\\d+/)[0];\n    return super.formatDate(new Date(str));\n  }\n\n  get snowfall() {\n    return Rusutsu.parseSnowfall(this.snowfallStr);\n  }\n\n  get depth() {\n    return Rusutsu.parseDepth(this.depthStr);\n  }\n\n  get temperature() {\n    return Rusutsu.parseTemperature(this.temperatureStr);\n  }\n\n  get updated() {\n    return Rusutsu.parseUpdated(this.updatedStr);\n  }\n\n  get params() {\n    return {\n      id: Rusutsu.ID,\n      snowfall: this.snowfall,\n      depth: this.depth,\n      temperature: this.temperature,\n      updated: this.updated\n    };\n  }\n\n}\n\n//# sourceURL=webpack:///./mountains/Rusutsu.js?");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatDate\": () => /* binding */ formatDate\n/* harmony export */ });\n// Dateオブジェクト => yyyy-mm-dd に変換\nconst formatDate = date => {\n  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;\n};\n\n//# sourceURL=webpack:///./utils.js?");

/***/ })

};
;