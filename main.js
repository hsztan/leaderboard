/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-size: 1rem;\\n  margin: 0;\\n  background-color: #eaeaea;\\n  display: grid;\\n  height: 100vh;\\n  place-items: center;\\n  font-family: 'Source Sans Pro', sans-serif;\\n}\\n\\nh1 {\\n  font-size: 1.6rem;\\n}\\n\\nh2 {\\n  font-size: 1.2rem;\\n}\\n\\n#main-title {\\n  padding: 1rem 0 0 1rem;\\n}\\n\\n.title-wrapper {\\n  display: flex;\\n  gap: 0.5rem;\\n}\\n\\n.section-title {\\n  padding-bottom: 1rem;\\n}\\n\\n#scores-container li {\\n  padding: 3px;\\n}\\n\\n#scores-container li:nth-child(odd) {\\n  background-color: #e1e1e1;\\n}\\n\\n/* Main styles */\\n\\n:root {\\n  --start: 15%;\\n}\\n\\n.leaderboard {\\n  box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.4);\\n  min-width: 350px;\\n  max-width: 490px;\\n  width: 100%;\\n  border-radius: 12px;\\n}\\n\\n.leaderboard .header {\\n  height: 130px;\\n  background:\\n    repeating-radial-gradient(circle at var(--start), transparent 0%, transparent 10%, rgba(54, 89, 219, 0.33) 10%, rgba(54, 89, 219, 0.33) 17%),\\n    linear-gradient(to right, #5b7cfa, #3659db);\\n  color: #fff;\\n  position: relative;\\n  border-radius: 12px 12px 0 0;\\n}\\n\\n.leaderboard .icon {\\n  fill: #fff;\\n  opacity: 0.35;\\n  font-size: 2rem;\\n  position: absolute;\\n  top: 50%;\\n  left: var(--start);\\n  transform: translate(-50%, -50%);\\n}\\n\\n.leaderboard .reload-icon {\\n  position: absolute;\\n  top: 0.8rem;\\n  right: 0.8rem;\\n  font-size: 2rem;\\n}\\n\\n.leaderboard .reload-icon.data-ready {\\n  color: rgb(254, 127, 0);\\n}\\n\\n.leaderboard .reload-icon:hover {\\n  color: #a1a1a1;\\n  transform: scale(1.1);\\n  border-radius: 50%;\\n  background: transparent;\\n}\\n\\n.leaderboard .reload-icon.reloading {\\n  animation: reload 3s;\\n  animation-fill-mode: forwards;\\n}\\n\\n@keyframes reload {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n\\n  to {\\n    transform: rotate(1440deg);\\n  }\\n}\\n\\n.leaderboard .title {\\n  position: absolute;\\n  z-index: 2;\\n  top: 50%;\\n  right: calc(var(--start) * 1.7);\\n  transform: translateY(-50%);\\n  text-transform: uppercase;\\n  margin: 0;\\n}\\n\\n.leaderboard .title span {\\n  display: block;\\n}\\n\\n.leaderboard .title--reload {\\n  font-size: 24px;\\n  font-weight: 700;\\n  letter-spacing: 6.5px;\\n}\\n\\n.leaderboard .title--top {\\n  font-size: 24px;\\n  font-weight: 700;\\n  letter-spacing: 6.5px;\\n}\\n\\n.leaderboard .title--bottom {\\n  font-size: 13px;\\n  font-weight: 500;\\n  letter-spacing: 3.55px;\\n  opacity: 0.65;\\n  transform: translateY(-2px);\\n}\\n\\n.leaderboard .profiles {\\n  background-color: #fff;\\n  border-radius: 0 0 12px 12px;\\n  padding: 15px 15px 20px;\\n  display: grid;\\n  row-gap: 8px;\\n}\\n\\n.leaderboard .profile {\\n  display: grid;\\n  grid-template-columns: 1fr 3fr 1fr;\\n  align-items: center;\\n  padding: 10px 30px 10px 10px;\\n  overflow: hidden;\\n  border-radius: 10px;\\n  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);\\n  cursor: pointer;\\n  transition:\\n    transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),\\n    box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);\\n  background-color: #fff;\\n}\\n\\n.leaderboard .profile:hover {\\n  transform: scale(1.2);\\n  box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);\\n}\\n\\n.leaderboard .profile.override-zoom:hover {\\n  transform: none;\\n  box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);\\n}\\n\\n.leaderboard .picture {\\n  max-width: 100%;\\n  width: 60px;\\n  border-radius: 50%;\\n  box-shadow:\\n    0 0 0 10px #ebeef3,\\n    0 0 0 22px #f3f4f6;\\n}\\n\\n.leaderboard .name {\\n  color: #979cb0;\\n  font-weight: 600;\\n  font-size: 20px;\\n  letter-spacing: 0.64px;\\n  margin-left: 12px;\\n}\\n\\n.leaderboard .score {\\n  color: #35d8ac;\\n  font-weight: 700;\\n  font-size: 34px;\\n  text-align: right;\\n}\\n\\n/* Form styles */\\n\\n#add-score-form {\\n  border-radius: 0;\\n}\\n\\n.input-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.section-score-title {\\n  text-align: center;\\n  padding-bottom: 0.5rem;\\n}\\n\\n#add-message {\\n  text-align: center;\\n}\\n\\n.btn {\\n  background-color: #fff;\\n  border: 2px solid black;\\n  box-shadow: 2px 2px 2px;\\n  padding: 2px 10px;\\n  border-radius: 15px;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\ninput {\\n  margin-bottom: 0.3rem;\\n  border: none;\\n  border-bottom: 1px solid black;\\n}\\n\\ninput::placeholder {\\n  text-align: center;\\n}\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 1rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_api_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api-dom */ \"./src/modules/api-dom.js\");\n\n\n\n(0,_modules_api_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/api-dom.js":
/*!********************************!*\
  !*** ./src/modules/api-dom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-helpers */ \"./src/modules/api-helpers.js\");\n\n\n// state\nconst state = { submitted: false };\n\n// DOM elements\nconst getAllScoresBtn = document.getElementById('refresh-btn');\nconst scoresContainerUl = document.getElementById('scores');\nconst addNewScoreForm = document.getElementById('add-score-form');\nconst submitBtn = document.getElementById('submit');\nconst nameInput = document.getElementById('name');\nconst scoreInput = document.getElementById('score');\n\nconst showSuccessBtn = () => {\n  nameInput.value = '';\n  scoreInput.value = '';\n  submitBtn.style.backgroundColor = '#000';\n  submitBtn.style.color = '#fff';\n  submitBtn.value = 'Success!!';\n  setTimeout(() => {\n    submitBtn.style.backgroundColor = '#fff';\n    submitBtn.style.color = '#000';\n    submitBtn.value = 'Add Score';\n  }, 1000);\n};\n\nconst toggleStyleReloadBtn = () => {\n  getAllScoresBtn.classList.toggle('data-ready');\n};\n\nconst createNewGame = (gameName) => async () => {\n  const gameID = await (0,_api_helpers__WEBPACK_IMPORTED_MODULE_0__.createGame)(gameName);\n  // save game data in globals\n  _api_helpers__WEBPACK_IMPORTED_MODULE_0__.game.name = gameName;\n  _api_helpers__WEBPACK_IMPORTED_MODULE_0__.game.id = gameID;\n  // set endpoints with given id in globals\n  _api_helpers__WEBPACK_IMPORTED_MODULE_0__.endpoints.scores = `${_api_helpers__WEBPACK_IMPORTED_MODULE_0__.endpoints.games}${_api_helpers__WEBPACK_IMPORTED_MODULE_0__.game.id}/scores/`;\n};\n\nconst showAllScores = async () => {\n  if (state.submitted) {\n    const scores = await (0,_api_helpers__WEBPACK_IMPORTED_MODULE_0__.getScores)();\n    scoresContainerUl.innerHTML = '';\n    // display elements on dom\n    scores.forEach((score) => {\n      // create li\n      const scoreEle = document.createElement('li');\n      scoreEle.classList.add('profile');\n      scoreEle.innerHTML = `\n        <img\n          class=\"picture\"\n          src=\"https://robohash.org/${score.user}.png\"\n          alt=\"robot\"\n        />\n        <span class=\"name\">${score.user}</span>\n        <span class=\"score\">${score.score}</span>\n      `;\n      scoresContainerUl.appendChild(scoreEle);\n    });\n    state.submitted = false;\n    setTimeout(toggleStyleReloadBtn, 3000);\n  }\n};\n\nconst submitNewScore = async (eve) => {\n  eve.preventDefault();\n  const name = nameInput.value;\n  const score = scoreInput.value;\n  await (0,_api_helpers__WEBPACK_IMPORTED_MODULE_0__.createScore)(name, score);\n  state.submitted = true;\n  // set styles and clear field after successfull submit\n  showSuccessBtn();\n  toggleStyleReloadBtn();\n};\n\nconst animateReloadBtn = () => {\n  getAllScoresBtn.classList.add('reloading');\n  setTimeout(() => getAllScoresBtn.classList.remove('reloading'), 3000);\n};\n\nconst startApp = async () => {\n  window.onload = createNewGame('Find That Foe!');\n  addNewScoreForm.onsubmit = submitNewScore;\n  getAllScoresBtn.addEventListener('click', showAllScores);\n  getAllScoresBtn.addEventListener('click', animateReloadBtn);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startApp);\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/api-dom.js?");

/***/ }),

/***/ "./src/modules/api-helpers.js":
/*!************************************!*\
  !*** ./src/modules/api-helpers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGame\": () => (/* binding */ createGame),\n/* harmony export */   \"createScore\": () => (/* binding */ createScore),\n/* harmony export */   \"endpoints\": () => (/* reexport safe */ _globals__WEBPACK_IMPORTED_MODULE_0__.endpoints),\n/* harmony export */   \"game\": () => (/* reexport safe */ _globals__WEBPACK_IMPORTED_MODULE_0__.game),\n/* harmony export */   \"getScores\": () => (/* binding */ getScores)\n/* harmony export */ });\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ \"./src/modules/globals.js\");\n\n\n// returns game ID if creation successfull\nconst createGame = async () => {\n  let gameID = null;\n  try {\n    const response = await fetch(\n      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',\n      {\n        method: 'POST',\n        body: JSON.stringify({\n          name: 'hello world',\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      },\n    );\n    if (response.ok) {\n      // get game ID\n      const data = await response.json();\n      data.result.split(' ').forEach((word) => {\n        if (word.length === 20) {\n          gameID = word;\n        }\n      });\n    }\n  } catch (error) {\n    return error.message;\n  }\n  return  false || gameID;\n};\n\n// returns score if score creation is successfull\nconst createScore = async (user, score) => {\n  try {\n    const response = await fetch(_globals__WEBPACK_IMPORTED_MODULE_0__.endpoints.scores, {\n      method: 'POST',\n      body: JSON.stringify({\n        user,\n        score,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    if (response.ok) {\n      // get game ID\n      _globals__WEBPACK_IMPORTED_MODULE_0__.game.scores.push({ user, score });\n    }\n  } catch (error) {\n    return error.message;\n  }\n  return  false || { user, score };\n};\n\n// returns score if score creation is successfull\nconst getScores = async () => {\n  let allScores = null;\n  try {\n    const response = await fetch(_globals__WEBPACK_IMPORTED_MODULE_0__.endpoints.scores);\n    if (response.ok) {\n      // get game ID\n      const data = await response.json();\n      allScores = data.result;\n    }\n  } catch (error) {\n    return error.message;\n  }\n  return  false || allScores;\n};\n\n\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/api-helpers.js?");

/***/ }),

/***/ "./src/modules/globals.js":
/*!********************************!*\
  !*** ./src/modules/globals.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"endpoints\": () => (/* binding */ endpoints),\n/* harmony export */   \"game\": () => (/* binding */ game)\n/* harmony export */ });\nconst baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';\n\nconst endpoints = {\n  games: `${baseUrl}games/`,\n  scores: null,\n};\nconst game = {\n  id: null,\n  name: null,\n  scores: [],\n};\n\n\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/globals.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;