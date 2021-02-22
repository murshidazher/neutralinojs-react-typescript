/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 5417:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/@theme-ui/theme-provider/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(8872);
// EXTERNAL MODULE: ./node_modules/@reach/router/es/index.js + 3 modules
var es = __webpack_require__(1252);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__(9753);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(6977);
// EXTERNAL MODULE: ./node_modules/@theme-ui/core/dist/index.esm.js + 1 modules
var dist_index_esm = __webpack_require__(5770);
;// CONCATENATED MODULE: ./src/components/RamUsageExample.tsx



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/** @jsx jsx */



var _ref =  true ? {
  name: "1kstxp2",
  styles: "color:black;background-color:white;border-color:green;border-radius:0.25rem;text-align:center;border:1px solid transparent;padding:0.375rem 0.75rem;fontsize:1rem;line-height:1.5;cursor:pointer"
} : 0;

var RamUsageExample = function RamUsageExample() {
  var _useState = (0,react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      aMemVal = _useState2[0],
      setAMemVal = _useState2[1];

  var _useState3 = (0,react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      tMemVal = _useState4[0],
      setTMemVal = _useState4[1];

  var _useState5 = (0,react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      isbtnRamUsage = _useState6[0],
      setRamUsage = _useState6[1];

  (0,react.useEffect)(function () {// Runs Once after initial rendering
  }, []);
  var getMemBtn = (0,react.useCallback)(function () {
    return (0,dist_index_esm/* jsx */.tZ)("input", {
      css: _ref,
      type: "button",
      value: "Get Ram Usage",
      onClick: function onClick() {
        ramUsage();
        isRamBtnClicked();
      }
    });
  }, []);

  var ramUsage = function ramUsage() {
    Neutralino.computer.getRamUsage(function (data) {
      var aMem = (data['ram']['available'] / (1024 * 1024)).toFixed(3) + ' GB';
      setAMemVal(aMem);
      var tMem = (data['ram']['total'] / (1024 * 1024)).toFixed(3) + ' GB';
      setTMemVal(tMem);
    }, function () {
      setAMemVal('Error While Executing');
    });
  };

  var isRamBtnClicked = function isRamBtnClicked() {
    setRamUsage(1);
  };

  return (0,dist_index_esm/* jsx */.tZ)("div", null, getMemBtn(), isbtnRamUsage === 1 ? (0,dist_index_esm/* jsx */.tZ)("p", null, "Available Memory :", (0,dist_index_esm/* jsx */.tZ)("span", {
    sx: {
      margin: 10
    }
  }, aMemVal), "Total Memory :", (0,dist_index_esm/* jsx */.tZ)("span", {
    sx: {
      margin: 10
    }
  }, tMemVal)) : '');
};

/* harmony default export */ const components_RamUsageExample = (RamUsageExample);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(2222);
// EXTERNAL MODULE: ./node_modules/@theme-ui/mdx/dist/index.esm.js + 5 modules
var mdx_dist_index_esm = __webpack_require__(6712);
;// CONCATENATED MODULE: ./src/components/NeuDefault.tsx




var NeuDefault = function NeuDefault() {
  return /*#__PURE__*/react.createElement(mdx_dist_index_esm/* Styled.h3 */.RQ.h3, null, "".concat(NL_NAME, " is running on port ").concat(NL_PORT, " inside a ").concat(NL_OS, " and ").concat(NL_AP), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", null, " ", "v ".concat(NL_VERSION), " "));
};

/* harmony default export */ const components_NeuDefault = (NeuDefault);
;// CONCATENATED MODULE: ./src/screens/Home.tsx
/** @jsx jsx */





var Home = function Home() {
  return (0,dist_index_esm/* jsx */.tZ)("div", {
    sx: {
      variant: 'layout.main'
    }
  }, (0,dist_index_esm/* jsx */.tZ)(mdx_dist_index_esm/* Styled.h1 */.RQ.h1, {
    "data-testid": "caption"
  }, "NeutralinoJs"), (0,dist_index_esm/* jsx */.tZ)(mdx_dist_index_esm/* Styled.div */.RQ.div, {
    id: "neuDefault"
  }, (0,dist_index_esm/* jsx */.tZ)(components_NeuDefault, null)), (0,dist_index_esm/* jsx */.tZ)(mdx_dist_index_esm/* Styled.div */.RQ.div, {
    id: "ramUsage"
  }, (0,dist_index_esm/* jsx */.tZ)(components_RamUsageExample, null)));
};

/* harmony default export */ const screens_Home = (Home);
;// CONCATENATED MODULE: ./src/theme/colors.js
var colors = {
  green: '#28a745',
  text: '#ffffff',
  background: '#060606',
  primary: '#87EAF2',
  secondary: '#F0F4F8',
  accent: '#F29B9B',
  highlight: '#F7D070',
  muted: '#BED0F7',
  white: '#FFF',
  black: '#050505'
};

;// CONCATENATED MODULE: ./src/theme/spacing.js
var heights = {
  window: 692,
  titlebar: 48
};
var width = {
  window: 1106,
  titlebar: '100%'
};

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(9070);
;// CONCATENATED MODULE: ./src/theme/theme.js


var _titlebar;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const theme = ({
  space: {
    none: 0,
    gutter: 24,
    xxsmall: 4,
    xsmall: 8,
    small: 12,
    medium: 20,
    large: 32,
    xlarge: 48,
    xxlarge: 96,
    xxxlarge: 128
  },
  sizes: [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1420],
  breakpoints: ['40em', '56em', '64em'],
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
    heading: 'Cambon, sans-serif',
    monospace: 'Circular Mono, monospace'
  },
  fontSizes: [10, 11, 12, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 300,
    medium: 500,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.4,
    heading: 1.2
  },
  shadows: {
    "default": '0 10px 10px 0 rgba(0, 0, 0, 0.15)'
  },
  radii: {
    "default": '0.25rem',
    sm: '0.2rem',
    lg: '0.3rem',
    pill: '50rem'
  },
  typeStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: 0,
      mb: 2
    },
    display: {
      fontWeight: 'display',
      lineHeight: 'heading'
    }
  },
  colors: _objectSpread({}, colors),
  layout: {
    titlebar: (_titlebar = {
      color: 'text',
      backgroundColor: 'control.background',
      width: '100%',
      height: '48px',
      fontWeight: 'bold',
      lineHeight: '1.6'
    }, _defineProperty(_titlebar, "height", 44), _defineProperty(_titlebar, "width", '100'), _defineProperty(_titlebar, "boxShadow", 'sm'), _defineProperty(_titlebar, "p", 2), _defineProperty(_titlebar, "pl", '80px'), _defineProperty(_titlebar, "overflow", 'hidden'), _defineProperty(_titlebar, "alignItems", 'center'), _defineProperty(_titlebar, "display", 'flex'), _titlebar),
    header: {
      color: 'white',
      backgroundColor: 'black'
    },
    main: {
      textAlign: 'center',
      color: 'text',
      backgroundColor: 'background',
      display: 'flex',
      alignItems: 'center',
      justifyItems: 'center',
      flexDirection: 'column'
    },
    breadcrumb: {
      p: 4,
      fontSize: '14px',
      fontWeight: '600',
      backgroundColor: 'control.background'
    },
    footer: {
      color: 'white',
      backgroundColor: 'black'
    }
  },
  text: {
    "default": {
      color: colors.twitter,
      fontSize: 2,
      fontFamily: 'body'
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      overflow: 'hidden'
    },
    h1: {
      variant: 'text.heading',
      fontSize: 6
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
      fontWeight: 'medium'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'pink'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    button: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    }
  }
});
;// CONCATENATED MODULE: ./src/theme/index.js



;// CONCATENATED MODULE: ./src/container/App.tsx





var source = (0,es/* createMemorySource */.Xv)('/');
var App_history = (0,es/* createHistory */.fi)(source);

var App = function App() {
  return /*#__PURE__*/react.createElement(index_esm/* ThemeProvider */.f, {
    theme: theme
  }, /*#__PURE__*/react.createElement(es/* LocationProvider */.vR, {
    history: App_history
  }, /*#__PURE__*/react.createElement(es/* Router */.F0, null, /*#__PURE__*/react.createElement(RouterPage, {
    path: "/",
    pageComponent: /*#__PURE__*/react.createElement(screens_Home, null)
  }))));
};

/* harmony default export */ const container_App = (App);

var RouterPage = function RouterPage(props) {
  return props.pageComponent;
};
;// CONCATENATED MODULE: ./src/core/lib.ts


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppLib = /*#__PURE__*/function () {
  function AppLib() {
    _classCallCheck(this, AppLib);
  }

  _createClass(AppLib, [{
    key: "showSettings",
    value: function showSettings() {
      Neutralino.settings.getSettings(function (data) {
        alert(JSON.stringify(data));
      }, function () {
        return null;
      });
    }
  }]);

  return AppLib;
}();
;// CONCATENATED MODULE: ./src/renderer.tsx





var appLib = new AppLib();
Neutralino.init({
  load: function load() {// appLib.showSettings();
  },
  pingSuccessCallback: function pingSuccessCallback() {},
  pingFailCallback: function pingFailCallback() {}
});
(0,react_dom.render)( /*#__PURE__*/react.createElement(container_App, null), document.getElementById('root'));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			[5417,196]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkneutralinojs_react_typescript"] = self["webpackChunkneutralinojs_react_typescript"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;