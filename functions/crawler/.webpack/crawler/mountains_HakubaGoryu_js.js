/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "mountains_HakubaGoryu_js";
exports.ids = ["mountains_HakubaGoryu_js"];
exports.modules = {

/***/ "./Mountain.js":
/*!*********************!*\
  !*** ./Mountain.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mountain\": () => /* binding */ Mountain\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./utils.js\");\n\nclass Mountain {\n  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {\n    this.snowfallStr = snowfallStr;\n    this.depthStr = depthStr;\n    this.temperatureStr = temperatureStr;\n    this.updatedStr = updatedStr;\n  }\n\n  static formatDate(date) {\n    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date);\n  }\n\n  formatDate(date) {\n    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date);\n  }\n\n}\n\n//# sourceURL=webpack:///./Mountain.js?");

/***/ }),

/***/ "./mountains/HakubaGoryu.js":
/*!**********************************!*\
  !*** ./mountains/HakubaGoryu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HakubaGoryu\": () => /* binding */ HakubaGoryu\n/* harmony export */ });\n/* harmony import */ var _Mountain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mountain.js */ \"./Mountain.js\");\n\nclass HakubaGoryu extends _Mountain_js__WEBPACK_IMPORTED_MODULE_0__.Mountain {\n  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {\n    super(snowfallStr, depthStr, temperatureStr, updatedStr);\n  }\n\n  static get ID() {\n    return 'hakuba_goryu';\n  }\n\n  static get URL() {\n    return 'https://www.hakubaescal.com/winter/';\n  }\n\n  static get SELECTORS() {\n    return {\n      snowfall: '//*[@id=\"snow_snow_accumulation_difference_text_alps\"]',\n      depth: '//*[@id=\"snow_accumulation_text_alps\"]',\n      temperature: '//*[@id=\"temperature_text_alps\"]',\n      // 存在しないのでとりあえず「アルプス平ゲレンデ」のDOMを指定\n      updated: '//*[@id=\"y-course-weather\"]/table/tbody/tr[1]/th'\n    };\n  }\n\n  static parseSnowfall(snowfallStr) {\n    const value = snowfallStr.match(/\\d+/, '');\n\n    if (value === '' || value === null) {\n      return null;\n    }\n\n    return Number(value);\n  }\n\n  static parseDepth(parseDepth) {\n    const value = parseDepth.match(/\\d+/, '');\n\n    if (value === '' || value === null) {\n      return null;\n    }\n\n    return Number(value);\n  }\n\n  static parseTemperature(temperatureStr) {\n    if (temperatureStr === '' || temperatureStr === null) {\n      return null;\n    }\n\n    const removedText = '℃';\n    return Number(temperatureStr.replace(removedText, ''));\n  }\n\n  static parseUpdated(updatedStr) {\n    return super.formatDate(new Date());\n  }\n\n  get snowfall() {\n    return HakubaGoryu.parseSnowfall(this.snowfallStr);\n  }\n\n  get depth() {\n    return HakubaGoryu.parseDepth(this.depthStr);\n  }\n\n  get temperature() {\n    return HakubaGoryu.parseTemperature(this.temperatureStr);\n  }\n\n  get updated() {\n    return HakubaGoryu.parseUpdated(this.updatedStr);\n  }\n\n  get params() {\n    return {\n      id: HakubaGoryu.ID,\n      snowfall: this.snowfall,\n      depth: this.depth,\n      temperature: this.temperature,\n      updated: this.updated\n    };\n  }\n\n}\n\n//# sourceURL=webpack:///./mountains/HakubaGoryu.js?");

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