module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/assets.js":
/*!******************************!*\
  !*** ./src/server/assets.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getAssets = getAssets;\nvar jsReg = /\\.js(\\?v=\\w*)*$/;\nvar cssReg = /\\.css(\\?=\\w*)*$/;\n\nfunction getAssets(stats) {\n  return {\n    scripts: getAssetOfType(\"js\", stats),\n    stylesheets: getAssetOfType(\"css\", stats)\n  };\n}\n\nfunction getAssetOfType(type, stats) {\n  var reg = type === \"js\" ? jsReg : cssReg;\n  var vendorAssets = getAssetsForKey(\"vendor\", stats, reg);\n  var mainAssets = getAssetsForKey(\"main\", stats, reg);\n\n  if (type === \"js\") {\n    return vendorAssets.concat(mainAssets);\n  } else {\n    return vendorAssets.concat(mainAssets);\n  }\n}\n\nfunction getAssetsForKey(key, stats, reg) {\n  var assets = [];\n  if (stats.assetsByChunkName && stats.assetsByChunkName[key]) {\n    var files = stats.assetsByChunkName[key];\n\n    if (typeof files === \"string\") {\n      assets = reg.test(files) ? [files] : [];\n    } else if (files.filter) {\n      assets = files.filter(function (asset) {\n        return reg.test(asset);\n      });\n    }\n  }\n\n  return assets;\n}\n\n//# sourceURL=webpack:///./src/server/assets.js?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _assets = __webpack_require__(/*! ./assets */ \"./src/server/assets.js\");\n\nvar render = function render(_ref) {\n  var clientStats = _ref.clientStats;\n  return function (req, res) {\n    var _getAssets = (0, _assets.getAssets)(clientStats),\n        scripts = _getAssets.scripts,\n        stylesheets = _getAssets.stylesheets;\n\n    res.render(\"index\", {\n      scriptSources: scripts,\n      styleSources: stylesheets,\n      publicPath: clientStats.publicPath\n    });\n  };\n};\n\nexports.default = render;\n\n//# sourceURL=webpack:///./src/server/render.js?");

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/server/render.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/peterholmberg/Dev/Git/react-ts/src/server/render.js */\"./src/server/render.js\");\n\n\n//# sourceURL=webpack:///multi_./src/server/render.js?");

/***/ })

/******/ });