/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "mountains_Madarao_js";
exports.ids = ["mountains_Madarao_js"];
exports.modules = {

/***/ "./Mountain.js":
/*!*********************!*\
  !*** ./Mountain.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mountain\": () => /* binding */ Mountain\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./utils.js\");\n\nclass Mountain {\n  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {\n    this.snowfallStr = snowfallStr;\n    this.depthStr = depthStr;\n    this.temperatureStr = temperatureStr;\n    this.updatedStr = updatedStr;\n  }\n\n  static formatDate(date) {\n    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date);\n  }\n\n  formatDate(date) {\n    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date);\n  }\n\n}\n\n//# sourceURL=webpack:///./Mountain.js?");

/***/ }),

/***/ "./mountains/Madarao.js":
/*!******************************!*\
  !*** ./mountains/Madarao.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Madarao\": () => /* binding */ Madarao\n/* harmony export */ });\n/* harmony import */ var _Mountain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mountain.js */ \"./Mountain.js\");\n\nclass Madarao extends _Mountain_js__WEBPACK_IMPORTED_MODULE_0__.Mountain {\n  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {\n    super(snowfallStr, depthStr, temperatureStr, updatedStr);\n  }\n\n  static get ID() {\n    return 'madarao';\n  }\n\n  static get URL() {\n    return 'http://www.madarao.jp/ski';\n  }\n\n  static get SELECTORS() {\n    return {\n      snowfall: '/html/body/section/div[1]/div[2]/div/dl[3]/dd/strong',\n      depth: '/html/body/section/div[1]/div[2]/div/dl[2]/dd/strong',\n      temperature: '/html/body/section/div[1]/div[2]/div/dl[5]/dd/strong',\n      updated: '/html/body/section/div[1]/div[2]/div/dl[1]/dd'\n    };\n  }\n\n  static parseSnowfall(snowfallStr) {\n    const value = snowfallStr.match(/\\d+/, '');\n    return value ? Number(value) : null;\n  }\n\n  static parseDepth(depthStr) {\n    const value = depthStr.match(/\\d+/, '');\n    return value ? Number(value) : null;\n  }\n\n  static parseTemperature(temperatureStr) {\n    if (temperatureStr === '' || isNaN(Number(temperatureStr))) {\n      return null;\n    }\n\n    return Number(temperatureStr);\n  }\n\n  static parseUpdated(updatedStr) {\n    const str = updatedStr.match(/\\d+\\-\\d+\\-\\d+/)[0];\n    return super.formatDate(new Date(str));\n  }\n\n  get snowfall() {\n    return Madarao.parseSnowfall(this.snowfallStr);\n  }\n\n  get depth() {\n    return Madarao.parseDepth(this.depthStr);\n  }\n\n  get temperature() {\n    return Madarao.parseTemperature(this.temperatureStr);\n  }\n\n  get updated() {\n    return Madarao.parseUpdated(this.updatedStr);\n  }\n\n  get params() {\n    return {\n      id: Madarao.ID,\n      snowfall: this.snowfall,\n      depth: this.depth,\n      temperature: this.temperature,\n      updated: this.updated\n    };\n  }\n\n}\n\n//# sourceURL=webpack:///./mountains/Madarao.js?");

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