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
/******/ 	return __webpack_require__(__webpack_require__.s = "../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux":
/*!**************************************************************************************************!*\
  !*** e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\component\\other\\canvas\\index.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\component\\other\\canvas\\index.ux!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader?presets[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib/index.js?presets[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerName:'fa-toolkit', packagerVersion: '2.5.2-Stable.300'})

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\component\\other\\canvas\\index.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\component\\other\\canvas\\index.ux!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "100px"
  },
  "#1Canvas": {
    "width": "500px",
    "height": "200px"
  },
  ".text": {
    "fontSize": "50px",
    "color": "#0000ff",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px"
  }
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return this.$t('message.component.canvas.text1')}
      },
      "classList": [
        "text"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.message}
      },
      "classList": [
        "text2"
      ]
    },
    {
      "type": "image",
      "attr": {
        "src": "/common/logo.png",
        "id": "image"
      },
      "id": "image",
      "style": {
        "marginTop": "20px"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "1Canvas"
      },
      "id": "1Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px"
      },
      "events": {
        "longtap": "longtapfun",
        "touchmove": "touchmove",
        "touchstart": "touchstart"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawfillStyleforColor"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click1"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "2Canvas",
        "disableScroll": "true"
      },
      "id": "2Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      },
      "events": {
        "longtap": "longtapfun",
        "error": "errorfun"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawfillStyleforLinearGradient"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click2"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "3Canvas"
      },
      "id": "3Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      },
      "events": {
        "longtap": "longtapfun"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawfillStyleforcreatePattern"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click3"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "4Canvas",
        "disableScroll": "true"
      },
      "id": "4Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawstrokeStyleforColor"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click4"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "5Canvas"
      },
      "id": "5Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawstrokeStyleforLinearGradient"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click5"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "6Canvas"
      },
      "id": "6Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawShadow"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click6"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "7Canvas"
      },
      "id": "7Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawlineCap"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click7"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "8Canvas"
      },
      "id": "8Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawlineJoin"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click8"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "9Canvas"
      },
      "id": "9Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawlineWidth"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click9"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "10Canvas"
      },
      "id": "10Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawmiterLimit"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click10"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "11Canvas"
      },
      "id": "11Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawrect"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click11"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "12Canvas"
      },
      "id": "12Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawfillRect"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click12"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "13Canvas"
      },
      "id": "13Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawstrokeRect"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click13"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "14Canvas"
      },
      "id": "14Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawclearRect"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click14"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "15Canvas"
      },
      "id": "15Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawfill"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click15"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "16Canvas"
      },
      "id": "16Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawstroke"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click16"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "17Canvas"
      },
      "id": "17Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawbeginPath"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click17"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "18Canvas"
      },
      "id": "18Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawmoveTo"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click18"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "19Canvas"
      },
      "id": "19Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawclosePath"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click19"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "20Canvas"
      },
      "id": "20Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawlineTo"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click20"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "21Canvas"
      },
      "id": "21Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawclip"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click21"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "22Canvas"
      },
      "id": "22Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawquadraticCurveTo"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click22"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "23Canvas"
      },
      "id": "23Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawbezierCurveTo"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click23"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "24Canvas"
      },
      "id": "24Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawarc"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click24"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "25Canvas"
      },
      "id": "25Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawarcTo"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click25"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "26Canvas"
      },
      "id": "26Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawscale"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click26"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "28Canvas"
      },
      "id": "28Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawtranslate"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click28"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "29Canvas"
      },
      "id": "29Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawtransform"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click29"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "30Canvas"
      },
      "id": "30Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawsetTransform"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click30"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "31Canvas"
      },
      "id": "31Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawfont"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click31"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "32Canvas"
      },
      "id": "32Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawtextAlign "
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click32"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "33Canvas"
      },
      "id": "33Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawtextBaseline"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click33"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "34Canvas"
      },
      "id": "34Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawfillText"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click34"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "35Canvas"
      },
      "id": "35Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawstrokeText"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click35"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "36Canvas"
      },
      "id": "36Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawmeasureText"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click36"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "37Canvas"
      },
      "id": "37Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawdrawImage"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click37"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "38Canvas"
      },
      "id": "38Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawcreateImageData"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click38"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "39Canvas"
      },
      "id": "39Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawgetImageData"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click39"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "40Canvas"
      },
      "id": "40Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawglobalAlpha"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click40"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "41Canvas"
      },
      "id": "41Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawglobalCompositeOperation"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click41"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "27Canvas"
      },
      "id": "27Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawrotate"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click27"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "42Canvas"
      },
      "id": "42Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "500px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawRadil"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click42"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "43Canvas"
      },
      "id": "43Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawLineDash"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click43"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "44Canvas"
      },
      "id": "44Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "drawImageForNewImage"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click44"
      }
    },
    {
      "type": "canvas",
      "attr": {
        "id": "45Canvas"
      },
      "id": "45Canvas",
      "style": {
        "backgroundColor": "#FFFF00",
        "marginTop": "20px",
        "width": "500px",
        "height": "200px"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "CreatePatternForNewImage"
      },
      "classList": [
        "buttons"
      ],
      "events": {
        "click": "click45"
      }
    },
    {
      "type": "image",
      "attr": {
        "src": function () {return this.imageSrc},
        "id": "image2"
      },
      "id": "image2",
      "style": {
        "marginTop": "20px"
      }
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib/index.js?presets[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib?presets[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/other/canvas/index.ux ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  data: {
    title: 'World',
    message: "aa",
    testparams: "2",
    imageSrc: ""
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: 'Canvas',
      textColor: '#ffffff',
      backgroundColor: '#007DFF',
      backgroundOpacity: 0.5
    });
  },
  touchstart: function touchstart(e) {
    console.log("yyyy" + "bindtouchstart" + "e.changedTouches.length =" + e.changedTouches.length);
  },
  touchmove: function touchmove(e) {
    console.log("yyyy" + "bindtouchmove" + " e.changedTouches.length =" + e.changedTouches.length + e.changedTouches[0].identifier);
  },
  click1: function click1() {
    this.message = "drawfillStyleforColor";
    var test = this.$element("1Canvas");
    var ctx = test.getContext("2d");
    console.log("ctx.fillStyle 111  >> " + ctx.fillStyle);
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(20, 20, 150, 100);
    console.log("ctx.fillStyle 222  >> " + ctx.fillStyle);
  },
  click2: function click2() {
    this.message = "drawfillStyleforLinearGradient";
    var test = this.$element("2Canvas");
    var ctx = test.getContext("2d");
    console.log("ctx.fillStyle 333  >> " + ctx.fillStyle);
    var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
    console.log("yyyy", "my_gradient =" + my_gradient);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(1, "white");
    ctx.fillStyle = my_gradient;
    console.log("ctx.fillStyle 444  >> " + ctx.fillStyle);
    ctx.fillRect(20, 20, 150, 100);
  },
  click3: function click3() {
    this.message = "drawfillStyleforcreatePattern";
    var test = this.$element("3Canvas");
    var ctx = test.getContext("2d");
    var img = this.$element("image");
    console.log("ctx.fillStyle 555  >> " + ctx.fillStyle);
    var pat = ctx.createPattern(img, "repeat");
    ctx.rect(0, 0, 500, 200);
    ctx.fillStyle = pat;
    console.log("ctx.fillStyle 666  >> " + ctx.fillStyle);
    ctx.fill();
  },
  click4: function click4() {
    this.message = "drawstrokeStyleforColor";
    var test = this.$element("4Canvas");
    var ctx = test.getContext("2d");
    console.log("ctx.strokeStyle 111  >> " + ctx.strokeStyle);
    ctx.strokeStyle = "#0000ff";
    ctx.strokeRect(20, 20, 150, 100);
    console.log("ctx.strokeStyle 222  >> " + ctx.strokeStyle);
  },
  click5: function click5() {
    this.message = "drawstrokeStyleforLinearGradient";
    var test = this.$element("5Canvas");
    var ctx = test.getContext("2d");
    console.log("ctx.strokeStyle 333  >> " + ctx.strokeStyle);
    var gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 5;
    ctx.strokeRect(20, 20, 150, 100);
    console.log("ctx.strokeStyle 444  >> " + ctx.strokeStyle);
  },
  click6: function click6() {
    this.message = "drawShadow";
    var test = this.$element("6Canvas");
    var ctx = test.getContext("2d");
    ctx.shadowBlur = 20;
    ctx.shadowColor = "black";
    ctx.shadowOffsetX = 20;
    ctx.shadowOffsetY = 20;
    ctx.fillStyle = "blue";
    ctx.fillRect(20, 20, 100, 80);
    console.log("ctx.shadowBlur 222  >> " + ctx.shadowBlur);
    console.log("ctx.shadowColor 222  >> " + ctx.shadowColor);
    console.log("ctx.shadowOffsetX 222  >> " + ctx.shadowOffsetX);
    console.log("ctx.shadowOffsetY 222  >> " + ctx.shadowOffsetY);
  },
  click7: function click7() {
    this.message = "drawlineCap";
    var test = this.$element("7Canvas");
    var ctx = test.getContext("2d");
    console.log("ctx.lineCap 111  >> " + ctx.lineCap);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.moveTo(20, 20);
    ctx.lineTo(20, 200);
    console.log("ctx.lineCap 222  >> " + ctx.lineCap);
    ctx.stroke();
  },
  click8: function click8() {
    this.message = "drawlineJoin";
    var test = this.$element("8Canvas");
    var ctx = test.getContext("2d");
    console.log("ctx.lineJoin 111  >> " + ctx.lineJoin);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.lineJoin = "round";
    ctx.moveTo(20, 20);
    ctx.lineTo(100, 50);
    ctx.lineTo(20, 100);
    ctx.stroke();
    console.log("ctx.lineJoin 222  >> " + ctx.lineJoin);
  },
  click9: function click9() {
    this.message = "drawlineWidth";
    var test = this.$element("9Canvas");
    var ctx = test.getContext("2d");
    console.log("ctx.lineWidth 111  >> " + ctx.lineWidth);
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, 80, 100);
    console.log("ctx.lineWidth 222  >> " + ctx.lineWidth);
  },
  click10: function click10() {
    this.message = "drawmiterLimit";
    var test = this.$element("10Canvas");
    var ctx = test.getContext("2d");
    ctx.lineWidth = 10;
    console.log("ctx.miterLimit 111  >> " + ctx.miterLimit);
    ctx.lineJoin = "miter";
    ctx.miterLimit = 5;
    ctx.moveTo(20, 20);
    ctx.lineTo(50, 27);
    ctx.lineTo(20, 34);
    ctx.stroke();
    console.log("ctx.miterLimit 222  >> " + ctx.miterLimit);
  },
  click11: function click11() {
    this.message = "drawrect";
    var test = this.$element("11Canvas");
    var ctx = test.getContext("2d");
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();
  },
  click12: function click12() {
    this.message = "drawfillRect";
    var test = this.$element("12Canvas");
    var ctx = test.getContext("2d");
    ctx.fillRect(20, 20, 150, 100);
  },
  click13: function click13() {
    this.message = "drawstrokeRect";
    var test = this.$element("13Canvas");
    var ctx = test.getContext("2d");
    ctx.strokeRect(20, 20, 150, 100);
  },
  click14: function click14() {
    this.message = "drawclearRect";
    var test = this.$element("14Canvas");
    var ctx = test.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 300, 150);
    ctx.clearRect(20, 20, 100, 50);
  },
  click15: function click15() {
    this.message = "drawfill";
    var test = this.$element("15Canvas");
    var ctx = test.getContext("2d");
    ctx.rect(20, 20, 150, 100);
    ctx.fillStyle = "green";
    ctx.fill();
  },
  click16: function click16() {
    this.message = "drawstroke";
    var test = this.$element("16Canvas");
    var ctx = test.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, 100);
    ctx.lineTo(70, 100);
    ctx.strokeStyle = "green";
    ctx.stroke();
  },
  click17: function click17() {
    this.message = "drawbeginPath";
    var test = this.$element("17Canvas");
    var ctx = test.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "red";
    ctx.moveTo(0, 75);
    ctx.lineTo(250, 75);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.moveTo(50, 0);
    ctx.lineTo(150, 130);
    ctx.stroke();
  },
  click18: function click18() {
    this.message = "drawmoveTo";
    var test = this.$element("18Canvas");
    var ctx = test.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.stroke();
  },
  click19: function click19() {
    this.message = "drawclosePath";
    var test = this.$element("19Canvas");
    var ctx = test.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, 100);
    ctx.lineTo(70, 100);
    ctx.closePath();
    ctx.stroke();
  },
  click20: function click20() {
    this.message = "drawlineTo";
    var test = this.$element("20Canvas");
    var ctx = test.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.stroke();
  },
  click21: function click21() {
    this.message = "drawclip";
    var test = this.$element("21Canvas");
    var ctx = test.getContext("2d");
    ctx.rect(50, 20, 200, 120);
    ctx.stroke();
    ctx.clip();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 150, 100);
  },
  click22: function click22() {
    this.message = "drawquadraticCurveTo";
    var test = this.$element("22Canvas");
    var ctx = test.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.quadraticCurveTo(20, 100, 200, 20);
    ctx.stroke();
  },
  click23: function click23() {
    this.message = "drawbezierCurveTo";
    var test = this.$element("23Canvas");
    var ctx = test.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    ctx.stroke();
  },
  click24: function click24() {
    this.message = "drawarc";
    var test = this.$element("24Canvas");
    var ctx = test.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
  },
  click25: function click25() {
    this.message = "drawarcTo";
    var test = this.$element("25Canvas");
    var ctx = test.getContext("2d");
    ctx.beginPath();
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(100, 20);
    ctx.arcTo(150, 20, 150, 70, 50);
    ctx.lineTo(150, 120);
    ctx.stroke();
  },
  click26: function click26() {
    this.message = "drawscale";
    var test = this.$element("26Canvas");
    var ctx = test.getContext("2d");
    ctx.strokeRect(5, 5, 25, 15);
    ctx.scale(2, 2);
    ctx.strokeRect(5, 5, 25, 15);
  },
  click27: function click27() {
    this.message = "drawrotate";
    var test = this.$element("27Canvas");
    var ctx = test.getContext("2d");
    ctx.rotate(20 * Math.PI / 180);
    ctx.fillRect(50, 20, 100, 50);
  },
  click28: function click28() {
    this.message = "drawtranslate";
    var test = this.$element("28Canvas");
    var ctx = test.getContext("2d");
    ctx.fillRect(10, 10, 100, 50);
    ctx.translate(70, 70);
    ctx.fillRect(10, 10, 100, 50);
  },
  click29: function click29() {
    this.message = "drawtransform";
    var test = this.$element("29Canvas");
    var ctx = test.getContext("2d");
    ctx.fillStyle = "#FFFF00";
    ctx.fillRect(0, 0, 250, 100);
    ctx.transform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 250, 100);
    ctx.transform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 250, 100);
  },
  click30: function click30() {
    this.message = "drawsetTransform";
    var test = this.$element("30Canvas");
    var ctx = test.getContext("2d");
    ctx.fillStyle = "#FFFF00";
    ctx.fillRect(0, 0, 250, 100);
    ctx.setTransform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 250, 100);
    ctx.setTransform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 250, 100);
  },
  click31: function click31() {
    this.message = "drawfont";
    var test = this.$element("31Canvas");
    var ctx = test.getContext("2d");
    console.log("ctx.font 111  >> " + ctx.font);
    ctx.font = "40px monospace";
    ctx.fillText("Hello World", 10, 50);
    console.log("ctx.font 222  >> " + ctx.font);
  },
  click32: function click32() {
    this.message = "drawtextAlign";
    var test = this.$element("32Canvas");
    var ctx = test.getContext("2d");
    ctx.strokeStyle = "blue";
    ctx.moveTo(150, 20);
    ctx.lineTo(150, 170);
    ctx.stroke();
    ctx.font = "15px monospace";
    console.log("ctx.textAlign 111  >> " + ctx.textAlign);
    ctx.textAlign = "start";
    console.log("ctx.textAlign 222  >> " + ctx.textAlign);
    ctx.fillText("textAlign=start", 150, 60);
    ctx.textAlign = "end";
    console.log("ctx.textAlign 333  >> " + ctx.textAlign);
    ctx.fillText("textAlign=end", 150, 80);
    ctx.textAlign = "left";
    console.log("ctx.textAlign 444  >> " + ctx.textAlign);
    ctx.fillText("textAlign=left", 150, 100);
    ctx.textAlign = "center";
    console.log("ctx.textAlign 555  >> " + ctx.textAlign);
    ctx.fillText("textAlign=center", 150, 120);
    ctx.textAlign = "right";
    console.log("ctx.textAlign 666  >> " + ctx.textAlign);
    ctx.fillText("textAlign=right", 150, 140);
  },
  click33: function click33() {
    this.message = "drawtextBaseline";
    var test = this.$element("33Canvas");
    var ctx = test.getContext("2d");
    ctx.strokeStyle = "blue";
    ctx.moveTo(5, 100);
    ctx.lineTo(395, 100);
    ctx.stroke();
    ctx.font = "20px monospace";
    console.log("ctx.textBaseline 111  >> " + ctx.textBaseline);
    ctx.textBaseline = "top";
    ctx.fillText("Top", 5, 100);
    console.log("ctx.textBaseline 222  >> " + ctx.textBaseline);
    ctx.textBaseline = "bottom";
    ctx.fillText("Bottom", 50, 100);
    console.log("ctx.textBaseline 333  >> " + ctx.textBaseline);
    ctx.textBaseline = "middle";
    ctx.fillText("Middle", 120, 100);
    console.log("ctx.textBaseline 444  >> " + ctx.textBaseline);
    ctx.textBaseline = "alphabetic";
    ctx.fillText("Alphabetic", 190, 100);
    console.log("ctx.textBaseline 555  >> " + ctx.textBaseline);
    ctx.textBaseline = "hanging";
    ctx.fillText("Hanging", 290, 100);
    console.log("ctx.textBaseline 666  >> " + ctx.textBaseline);
    ctx.textBaseline = "ideographic";
    ctx.fillText("ideographic", 350, 100);
    console.log("ctx.textBaseline 777  >> " + ctx.textBaseline);
  },
  click34: function click34() {
    this.message = "drawfillText";
    var test = this.$element("34Canvas");
    var ctx = test.getContext("2d");
    ctx.font = "20px monospace";
    ctx.fillText("Hello World!", 10, 50);
    ctx.font = "30px monospace";
    var gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    ctx.fillStyle = gradient;
    ctx.fillText("w3school.com.cn", 10, 90);
  },
  click35: function click35() {
    var test = this.$element("35Canvas");
    var ctx = test.getContext("2d");
    ctx.font = "20px monospace";
    ctx.strokeText("Hello World!", 10, 50);
    ctx.font = "30px monospace";
    var gradient = ctx.createLinearGradient(0, 0, 200, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    ctx.strokeStyle = gradient;
    ctx.strokeText("w3school.com.cn", 10, 90);
  },
  click36: function click36() {
    this.message = "drawmeasureText";
    var test = this.$element("36Canvas");
    var ctx = test.getContext("2d");
    ctx.font = "10px monospace";
    var txt = "Hello World";
    ctx.fillText("width:" + ctx.measureText(txt).width, 10, 50);
    ctx.fillText(txt, 10 + ctx.measureText(txt).width, 50);
    ctx.font = "20px monospace";
    ctx.fillText("width:" + ctx.measureText(txt).width, 10, 100);
    ctx.fillText(txt, 12 + ctx.measureText(txt).width, 100);
    ctx.font = "30px monospace";
    ctx.fillText("width:" + ctx.measureText(txt).width, 10, 150);
    ctx.fillText(txt, 38 + ctx.measureText(txt).width, 150);
  },
  click37: function click37() {
    this.message = "drawdrawImage";
    var test = this.$element("37Canvas");
    var ctx = test.getContext("2d");
    var img = this.$element("image");
    ctx.drawImage(img, 10, 10, 20, 20, 10, 10, 60, 60);
  },
  click38: function click38() {
    this.message = "drawcreateImageData";
    var test = this.$element("38Canvas");
    var ctx = test.getContext("2d");
    var imgData = ctx.createImageData(100, 100);

    for (var i = 0; i < imgData.data.length; i += 4) {
      imgData.data[i + 0] = 255;
      imgData.data[i + 1] = 0;
      imgData.data[i + 2] = 0;
      imgData.data[i + 3] = 255;
    }

    ctx.putImageData(imgData, 10, 10);
  },
  click39: function click39() {
    this.message = "drawgetImageData";
    var test = this.$element("39Canvas");
    var ctx = test.getContext("2d");
    var imageData = ctx.getImageData(0, 0, 100, 50);

    for (var i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = 255;
      imageData.data[i + 1] = 0;
      imageData.data[i + 2] = 0;
      imageData.data[i + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
  },
  click40: function click40() {
    this.message = "drawglobalAlpha";
    var test = this.$element("40Canvas");
    var ctx = test.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 75, 50);
    console.log("ctx.globalAlpha 111  >> " + ctx.globalAlpha);
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 75, 50);
    ctx.fillStyle = "green";
    ctx.fillRect(80, 80, 75, 50);
    console.log("ctx.globalAlpha 222  >> " + ctx.globalAlpha);
  },
  click41: function click41() {
    this.message = "drawglobalCompositeOperation";
    var test = this.$element("41Canvas");
    var ctx = test.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 75, 50);
    console.log("ctx.globalCompositeOperation 111  >> " + ctx.globalCompositeOperation);
    ctx.globalCompositeOperation = "xor";
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 75, 50);
    console.log("ctx.globalCompositeOperation 222  >> " + ctx.globalCompositeOperation);
  },
  click42: function click42() {
    this.message = "drawRadil";
    var test = this.$element("42Canvas");
    var ctx = test.getContext("2d");
    var grd = ctx.createRadialGradient(75, 50, 50);
    grd.addColorStop(0, "red");
    grd.addColorStop(0.5, "green");
    grd.addColorStop(1, "blue");
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
  },
  click43: function click43() {
    var canvas = this.$element('43Canvas');
    var ctx = canvas.getContext('2d');
    console.log("lineDash=" + ctx.getLineDash());
    ctx.setLineDash([4, 16, 100]);
    ctx.lineDashOffset = 2;
    console.log("lineDash=" + ctx.getLineDash());
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(400, 100);
    ctx.stroke();
  },
  click44: function click44() {
    this.message = "drawdrawImage";
    var test = this.$element("44Canvas");
    var ctx = test.getContext("2d");
    var img = new Image();
    img.src = "http://www.huawei.com/Assets/CBG/img/logo.png";

    img.onload = function () {
      console.log("Image load success.");
      ctx.drawImage(img, 10, 10, 20, 20, 10, 10, 60, 60);
    };

    img.onerror = function () {
      console.log("Image load fail.");
    };
  },
  click45: function click45() {
    var _this = this;

    this.message = "drawfillStyleforcreatePattern";
    var test = this.$element("45Canvas");
    var ctx = test.getContext("2d");
    console.log("ctx.fillStyle 555  >> " + ctx.fillStyle);
    var img = new Image();
    img.src = "http://www.huawei.com/Assets/CBG/img/logo.png";

    img.onload = function () {
      console.log("Image load success.");
      var pat = ctx.createPattern(img, "repeat");
      ctx.rect(0, 0, 500, 200);
      ctx.fillStyle = pat;
      console.log("ctx.fillStyle 666  >> " + ctx.fillStyle);
      ctx.fill();
      test.toTempFilePath({
        x: 0,
        y: 0,
        width: 200,
        height: 200,
        destWidth: 100,
        destHeight: 100,
        fileType: "png",
        quality: 1.0,
        success: function success(data) {
          _this.imageSrc = data.uri;
          console.log("Canvas toTempFilePath success ".concat(data.uri));
          console.log("Canvas toTempFilePath success ".concat(data.tempFilePath));
        },
        fail: function fail(data) {
          console.log('Canvas toTempFilePath data =' + data);
        },
        complete: function complete() {
          console.log('Canvas toTempFilePath complete.');
        }
      });
    };

    img.onerror = function () {
      console.log("Image load fail.");
    };
  },
  errorfun: function errorfun() {
    console.log("canvas onerror");
  },
  longtapfun: function longtapfun() {
    console.log("canvas longtap");
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXGNvbXBvbmVudFxcb3RoZXJcXGNhbnZhc1xcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2U6L1dvcmtzcGFjZUh1YXdlaS9UZXN0TXlQaG9uZS9jb20ud2lsZGRldi50ZXN0bXlwaG9uZS9zcmMvY29tcG9uZW50L290aGVyL2NhbnZhcy9pbmRleC51eCIsIndlYnBhY2s6Ly8vZTovV29ya3NwYWNlSHVhd2VpL1Rlc3RNeVBob25lL2NvbS53aWxkZGV2LnRlc3RteXBob25lL3NyYy9jb21wb25lbnQvb3RoZXIvY2FudmFzL2luZGV4LnV4P2QwOGEiLCJ3ZWJwYWNrOi8vL2U6L1dvcmtzcGFjZUh1YXdlaS9UZXN0TXlQaG9uZS9jb20ud2lsZGRldi50ZXN0bXlwaG9uZS9zcmMvY29tcG9uZW50L290aGVyL2NhbnZhcy9pbmRleC51eD82M2U5Iiwid2VicGFjazovLy9lOi9Xb3Jrc3BhY2VIdWF3ZWkvVGVzdE15UGhvbmUvY29tLndpbGRkZXYudGVzdG15cGhvbmUvc3JjL2NvbXBvbmVudC9vdGhlci9jYW52YXMvaW5kZXgudXg/MjZhYSJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9Xb3Jrc3BhY2VIdWF3ZWkvVGVzdE15UGhvbmUvY29tLndpbGRkZXYudGVzdG15cGhvbmUvc3JjL2NvbXBvbmVudC9vdGhlci9jYW52YXMvaW5kZXgudXhcIik7XG4iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9pbmRleC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxXb3Jrc3BhY2VIdWF3ZWlcXFxcVGVzdE15UGhvbmVcXFxcY29tLndpbGRkZXYudGVzdG15cGhvbmVcXFxcc3JjXFxcXGNvbXBvbmVudFxcXFxvdGhlclxcXFxjYW52YXNcXFxcaW5kZXgudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxcV29ya3NwYWNlSHVhd2VpXFxcXFRlc3RNeVBob25lXFxcXGNvbS53aWxkZGV2LnRlc3RteXBob25lXFxcXHNyY1xcXFxjb21wb25lbnRcXFxcb3RoZXJcXFxcY2FudmFzXFxcXGluZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1lOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtY29tcGlsZXJcXFxcanN4LWxvYWRlci5qcyZwbHVnaW5zW109ZTpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXMmcGx1Z2luc1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi1wcm9wb3NhbC1vYmplY3QtcmVzdC1zcHJlYWQmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9pbmRleC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcseyBwYWNrYWdlck5hbWU6J2ZhLXRvb2xraXQnLCBwYWNrYWdlclZlcnNpb246ICcyLjUuMi1TdGFibGUuMzAwJ30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMDBweFwiXG4gIH0sXG4gIFwiIzFDYW52YXNcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIlxuICB9LFxuICBcIi50ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNTBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjFweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuY29tcG9uZW50LmNhbnZhcy50ZXh0MScpfVxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0ZXh0XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1lc3NhZ2V9XG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRleHQyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBcIi9jb21tb24vbG9nby5wbmdcIixcbiAgICAgICAgXCJpZFwiOiBcImltYWdlXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FudmFzXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImlkXCI6IFwiMUNhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjFDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCJcbiAgICAgIH0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwibG9uZ3RhcFwiOiBcImxvbmd0YXBmdW5cIixcbiAgICAgICAgXCJ0b3VjaG1vdmVcIjogXCJ0b3VjaG1vdmVcIixcbiAgICAgICAgXCJ0b3VjaHN0YXJ0XCI6IFwidG91Y2hzdGFydFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3ZmlsbFN0eWxlZm9yQ29sb3JcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazFcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FudmFzXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImlkXCI6IFwiMkNhbnZhc1wiLFxuICAgICAgICBcImRpc2FibGVTY3JvbGxcIjogXCJ0cnVlXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiMkNhbnZhc1wiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIlxuICAgICAgfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJsb25ndGFwXCI6IFwibG9uZ3RhcGZ1blwiLFxuICAgICAgICBcImVycm9yXCI6IFwiZXJyb3JmdW5cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZHJhd2ZpbGxTdHlsZWZvckxpbmVhckdyYWRpZW50XCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2syXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjNDYW52YXNcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIjogXCIzQ2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImxvbmd0YXBcIjogXCJsb25ndGFwZnVuXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXdmaWxsU3R5bGVmb3JjcmVhdGVQYXR0ZXJuXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2szXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjRDYW52YXNcIixcbiAgICAgICAgXCJkaXNhYmxlU2Nyb2xsXCI6IFwidHJ1ZVwiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjRDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXdzdHJva2VTdHlsZWZvckNvbG9yXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2s0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjVDYW52YXNcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIjogXCI1Q2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3c3Ryb2tlU3R5bGVmb3JMaW5lYXJHcmFkaWVudFwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrNVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCI2Q2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiNkNhbnZhc1wiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZHJhd1NoYWRvd1wiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrNlwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCI3Q2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiN0NhbnZhc1wiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZHJhd2xpbmVDYXBcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazdcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FudmFzXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImlkXCI6IFwiOENhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjhDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXdsaW5lSm9pblwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrOFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCI5Q2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiOUNhbnZhc1wiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZHJhd2xpbmVXaWR0aFwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrOVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCIxMENhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjEwQ2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3bWl0ZXJMaW1pdFwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrMTBcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FudmFzXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImlkXCI6IFwiMTFDYW52YXNcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIjogXCIxMUNhbnZhc1wiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZHJhd3JlY3RcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazExXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjEyQ2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiMTJDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXdmaWxsUmVjdFwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrMTJcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FudmFzXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImlkXCI6IFwiMTNDYW52YXNcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIjogXCIxM0NhbnZhc1wiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZHJhd3N0cm9rZVJlY3RcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazEzXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjE0Q2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiMTRDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXdjbGVhclJlY3RcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazE0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjE1Q2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiMTVDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXdmaWxsXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2sxNVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCIxNkNhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjE2Q2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3c3Ryb2tlXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2sxNlwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCIxN0NhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjE3Q2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3YmVnaW5QYXRoXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2sxN1wiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCIxOENhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjE4Q2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3bW92ZVRvXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2sxOFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCIxOUNhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjE5Q2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3Y2xvc2VQYXRoXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2sxOVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCIyMENhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjIwQ2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3bGluZVRvXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2syMFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCIyMUNhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjIxQ2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3Y2xpcFwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrMjFcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FudmFzXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImlkXCI6IFwiMjJDYW52YXNcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIjogXCIyMkNhbnZhc1wiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZHJhd3F1YWRyYXRpY0N1cnZlVG9cIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazIyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjIzQ2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiMjNDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXdiZXppZXJDdXJ2ZVRvXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2syM1wiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCIyNENhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjI0Q2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3YXJjXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2syNFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCIyNUNhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjI1Q2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3YXJjVG9cIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazI1XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjI2Q2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiMjZDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXdzY2FsZVwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrMjZcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FudmFzXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImlkXCI6IFwiMjhDYW52YXNcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIjogXCIyOENhbnZhc1wiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZHJhd3RyYW5zbGF0ZVwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrMjhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FudmFzXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImlkXCI6IFwiMjlDYW52YXNcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIjogXCIyOUNhbnZhc1wiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZHJhd3RyYW5zZm9ybVwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrMjlcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FudmFzXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImlkXCI6IFwiMzBDYW52YXNcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIjogXCIzMENhbnZhc1wiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZHJhd3NldFRyYW5zZm9ybVwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrMzBcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FudmFzXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImlkXCI6IFwiMzFDYW52YXNcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIjogXCIzMUNhbnZhc1wiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZHJhd2ZvbnRcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazMxXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjMyQ2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiMzJDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXd0ZXh0QWxpZ24gXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2szMlwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCIzM0NhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjMzQ2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3dGV4dEJhc2VsaW5lXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2szM1wiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCIzNENhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjM0Q2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3ZmlsbFRleHRcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazM0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjM1Q2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiMzVDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXdzdHJva2VUZXh0XCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2szNVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCIzNkNhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjM2Q2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3bWVhc3VyZVRleHRcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazM2XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjM3Q2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiMzdDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXdkcmF3SW1hZ2VcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazM3XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjM4Q2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiMzhDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXdjcmVhdGVJbWFnZURhdGFcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazM4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjM5Q2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiMzlDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXdnZXRJbWFnZURhdGFcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazM5XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjQwQ2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiNDBDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXdnbG9iYWxBbHBoYVwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrNDBcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FudmFzXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImlkXCI6IFwiNDFDYW52YXNcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIjogXCI0MUNhbnZhc1wiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZHJhd2dsb2JhbENvbXBvc2l0ZU9wZXJhdGlvblwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrNDFcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FudmFzXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImlkXCI6IFwiMjdDYW52YXNcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIjogXCIyN0NhbnZhc1wiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZHJhd3JvdGF0ZVwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrMjdcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FudmFzXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImlkXCI6IFwiNDJDYW52YXNcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIjogXCI0MkNhbnZhc1wiLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiNTAwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiZHJhd1JhZGlsXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2s0MlwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCI0M0NhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjQzQ2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJkcmF3TGluZURhc2hcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazQzXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNhbnZhc1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpZFwiOiBcIjQ0Q2FudmFzXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiNDRDYW52YXNcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGMDBcIixcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcImRyYXdJbWFnZUZvck5ld0ltYWdlXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2s0NFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCI0NUNhbnZhc1wiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIjQ1Q2FudmFzXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRjAwXCIsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMDBweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJDcmVhdGVQYXR0ZXJuRm9yTmV3SW1hZ2VcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25zXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGljazQ1XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1hZ2VTcmN9LFxuICAgICAgICBcImlkXCI6IFwiaW1hZ2UyXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwiaW1hZ2UyXCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCJcbiAgICAgIH1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiB7XG4gICAgdGl0bGU6ICdXb3JsZCcsXG4gICAgbWVzc2FnZTogXCJhYVwiLFxuICAgIHRlc3RwYXJhbXM6IFwiMlwiLFxuICAgIGltYWdlU3JjOiBcIlwiXG4gIH0sXG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge1xuICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgdGV4dDogJ0NhbnZhcycsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDdERkYnLFxuICAgICAgYmFja2dyb3VuZE9wYWNpdHk6IDAuNVxuICAgIH0pO1xuICB9LFxuICB0b3VjaHN0YXJ0OiBmdW5jdGlvbiB0b3VjaHN0YXJ0KGUpIHtcbiAgICBjb25zb2xlLmxvZyhcInl5eXlcIiArIFwiYmluZHRvdWNoc3RhcnRcIiArIFwiZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPVwiICsgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGgpO1xuICB9LFxuICB0b3VjaG1vdmU6IGZ1bmN0aW9uIHRvdWNobW92ZShlKSB7XG4gICAgY29uc29sZS5sb2coXCJ5eXl5XCIgKyBcImJpbmR0b3VjaG1vdmVcIiArIFwiIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID1cIiArIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoICsgZS5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyKTtcbiAgfSxcbiAgY2xpY2sxOiBmdW5jdGlvbiBjbGljazEoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3ZmlsbFN0eWxlZm9yQ29sb3JcIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCIxQ2FudmFzXCIpO1xuICAgIHZhciBjdHggPSB0ZXN0LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zb2xlLmxvZyhcImN0eC5maWxsU3R5bGUgMTExICA+PiBcIiArIGN0eC5maWxsU3R5bGUpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwZmZcIjtcbiAgICBjdHguZmlsbFJlY3QoMjAsIDIwLCAxNTAsIDEwMCk7XG4gICAgY29uc29sZS5sb2coXCJjdHguZmlsbFN0eWxlIDIyMiAgPj4gXCIgKyBjdHguZmlsbFN0eWxlKTtcbiAgfSxcbiAgY2xpY2syOiBmdW5jdGlvbiBjbGljazIoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3ZmlsbFN0eWxlZm9yTGluZWFyR3JhZGllbnRcIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCIyQ2FudmFzXCIpO1xuICAgIHZhciBjdHggPSB0ZXN0LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zb2xlLmxvZyhcImN0eC5maWxsU3R5bGUgMzMzICA+PiBcIiArIGN0eC5maWxsU3R5bGUpO1xuICAgIHZhciBteV9ncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCAxNzApO1xuICAgIGNvbnNvbGUubG9nKFwieXl5eVwiLCBcIm15X2dyYWRpZW50ID1cIiArIG15X2dyYWRpZW50KTtcbiAgICBteV9ncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgXCJibGFja1wiKTtcbiAgICBteV9ncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgXCJ3aGl0ZVwiKTtcbiAgICBjdHguZmlsbFN0eWxlID0gbXlfZ3JhZGllbnQ7XG4gICAgY29uc29sZS5sb2coXCJjdHguZmlsbFN0eWxlIDQ0NCAgPj4gXCIgKyBjdHguZmlsbFN0eWxlKTtcbiAgICBjdHguZmlsbFJlY3QoMjAsIDIwLCAxNTAsIDEwMCk7XG4gIH0sXG4gIGNsaWNrMzogZnVuY3Rpb24gY2xpY2szKCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd2ZpbGxTdHlsZWZvcmNyZWF0ZVBhdHRlcm5cIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCIzQ2FudmFzXCIpO1xuICAgIHZhciBjdHggPSB0ZXN0LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB2YXIgaW1nID0gdGhpcy4kZWxlbWVudChcImltYWdlXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiY3R4LmZpbGxTdHlsZSA1NTUgID4+IFwiICsgY3R4LmZpbGxTdHlsZSk7XG4gICAgdmFyIHBhdCA9IGN0eC5jcmVhdGVQYXR0ZXJuKGltZywgXCJyZXBlYXRcIik7XG4gICAgY3R4LnJlY3QoMCwgMCwgNTAwLCAyMDApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBwYXQ7XG4gICAgY29uc29sZS5sb2coXCJjdHguZmlsbFN0eWxlIDY2NiAgPj4gXCIgKyBjdHguZmlsbFN0eWxlKTtcbiAgICBjdHguZmlsbCgpO1xuICB9LFxuICBjbGljazQ6IGZ1bmN0aW9uIGNsaWNrNCgpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBcImRyYXdzdHJva2VTdHlsZWZvckNvbG9yXCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiNENhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc29sZS5sb2coXCJjdHguc3Ryb2tlU3R5bGUgMTExICA+PiBcIiArIGN0eC5zdHJva2VTdHlsZSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMDAwMGZmXCI7XG4gICAgY3R4LnN0cm9rZVJlY3QoMjAsIDIwLCAxNTAsIDEwMCk7XG4gICAgY29uc29sZS5sb2coXCJjdHguc3Ryb2tlU3R5bGUgMjIyICA+PiBcIiArIGN0eC5zdHJva2VTdHlsZSk7XG4gIH0sXG4gIGNsaWNrNTogZnVuY3Rpb24gY2xpY2s1KCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd3N0cm9rZVN0eWxlZm9yTGluZWFyR3JhZGllbnRcIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCI1Q2FudmFzXCIpO1xuICAgIHZhciBjdHggPSB0ZXN0LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zb2xlLmxvZyhcImN0eC5zdHJva2VTdHlsZSAzMzMgID4+IFwiICsgY3R4LnN0cm9rZVN0eWxlKTtcbiAgICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMTcwLCAwKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwXCIsIFwibWFnZW50YVwiKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwLjVcIiwgXCJibHVlXCIpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjEuMFwiLCBcInJlZFwiKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBncmFkaWVudDtcbiAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICBjdHguc3Ryb2tlUmVjdCgyMCwgMjAsIDE1MCwgMTAwKTtcbiAgICBjb25zb2xlLmxvZyhcImN0eC5zdHJva2VTdHlsZSA0NDQgID4+IFwiICsgY3R4LnN0cm9rZVN0eWxlKTtcbiAgfSxcbiAgY2xpY2s2OiBmdW5jdGlvbiBjbGljazYoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3U2hhZG93XCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiNkNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnNoYWRvd0JsdXIgPSAyMDtcbiAgICBjdHguc2hhZG93Q29sb3IgPSBcImJsYWNrXCI7XG4gICAgY3R4LnNoYWRvd09mZnNldFggPSAyMDtcbiAgICBjdHguc2hhZG93T2Zmc2V0WSA9IDIwO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICBjdHguZmlsbFJlY3QoMjAsIDIwLCAxMDAsIDgwKTtcbiAgICBjb25zb2xlLmxvZyhcImN0eC5zaGFkb3dCbHVyIDIyMiAgPj4gXCIgKyBjdHguc2hhZG93Qmx1cik7XG4gICAgY29uc29sZS5sb2coXCJjdHguc2hhZG93Q29sb3IgMjIyICA+PiBcIiArIGN0eC5zaGFkb3dDb2xvcik7XG4gICAgY29uc29sZS5sb2coXCJjdHguc2hhZG93T2Zmc2V0WCAyMjIgID4+IFwiICsgY3R4LnNoYWRvd09mZnNldFgpO1xuICAgIGNvbnNvbGUubG9nKFwiY3R4LnNoYWRvd09mZnNldFkgMjIyICA+PiBcIiArIGN0eC5zaGFkb3dPZmZzZXRZKTtcbiAgfSxcbiAgY2xpY2s3OiBmdW5jdGlvbiBjbGljazcoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3bGluZUNhcFwiO1xuICAgIHZhciB0ZXN0ID0gdGhpcy4kZWxlbWVudChcIjdDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiY3R4LmxpbmVDYXAgMTExICA+PiBcIiArIGN0eC5saW5lQ2FwKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDEwO1xuICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgIGN0eC5tb3ZlVG8oMjAsIDIwKTtcbiAgICBjdHgubGluZVRvKDIwLCAyMDApO1xuICAgIGNvbnNvbGUubG9nKFwiY3R4LmxpbmVDYXAgMjIyICA+PiBcIiArIGN0eC5saW5lQ2FwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0sXG4gIGNsaWNrODogZnVuY3Rpb24gY2xpY2s4KCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd2xpbmVKb2luXCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiOENhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc29sZS5sb2coXCJjdHgubGluZUpvaW4gMTExICA+PiBcIiArIGN0eC5saW5lSm9pbik7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5saW5lV2lkdGggPSAxMDtcbiAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG4gICAgY3R4Lm1vdmVUbygyMCwgMjApO1xuICAgIGN0eC5saW5lVG8oMTAwLCA1MCk7XG4gICAgY3R4LmxpbmVUbygyMCwgMTAwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY29uc29sZS5sb2coXCJjdHgubGluZUpvaW4gMjIyICA+PiBcIiArIGN0eC5saW5lSm9pbik7XG4gIH0sXG4gIGNsaWNrOTogZnVuY3Rpb24gY2xpY2s5KCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd2xpbmVXaWR0aFwiO1xuICAgIHZhciB0ZXN0ID0gdGhpcy4kZWxlbWVudChcIjlDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiY3R4LmxpbmVXaWR0aCAxMTEgID4+IFwiICsgY3R4LmxpbmVXaWR0aCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDEwO1xuICAgIGN0eC5zdHJva2VSZWN0KDIwLCAyMCwgODAsIDEwMCk7XG4gICAgY29uc29sZS5sb2coXCJjdHgubGluZVdpZHRoIDIyMiAgPj4gXCIgKyBjdHgubGluZVdpZHRoKTtcbiAgfSxcbiAgY2xpY2sxMDogZnVuY3Rpb24gY2xpY2sxMCgpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBcImRyYXdtaXRlckxpbWl0XCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiMTBDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5saW5lV2lkdGggPSAxMDtcbiAgICBjb25zb2xlLmxvZyhcImN0eC5taXRlckxpbWl0IDExMSAgPj4gXCIgKyBjdHgubWl0ZXJMaW1pdCk7XG4gICAgY3R4LmxpbmVKb2luID0gXCJtaXRlclwiO1xuICAgIGN0eC5taXRlckxpbWl0ID0gNTtcbiAgICBjdHgubW92ZVRvKDIwLCAyMCk7XG4gICAgY3R4LmxpbmVUbyg1MCwgMjcpO1xuICAgIGN0eC5saW5lVG8oMjAsIDM0KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY29uc29sZS5sb2coXCJjdHgubWl0ZXJMaW1pdCAyMjIgID4+IFwiICsgY3R4Lm1pdGVyTGltaXQpO1xuICB9LFxuICBjbGljazExOiBmdW5jdGlvbiBjbGljazExKCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd3JlY3RcIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCIxMUNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnJlY3QoMjAsIDIwLCAxNTAsIDEwMCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9LFxuICBjbGljazEyOiBmdW5jdGlvbiBjbGljazEyKCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd2ZpbGxSZWN0XCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiMTJDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5maWxsUmVjdCgyMCwgMjAsIDE1MCwgMTAwKTtcbiAgfSxcbiAgY2xpY2sxMzogZnVuY3Rpb24gY2xpY2sxMygpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBcImRyYXdzdHJva2VSZWN0XCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiMTNDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zdHJva2VSZWN0KDIwLCAyMCwgMTUwLCAxMDApO1xuICB9LFxuICBjbGljazE0OiBmdW5jdGlvbiBjbGljazE0KCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd2NsZWFyUmVjdFwiO1xuICAgIHZhciB0ZXN0ID0gdGhpcy4kZWxlbWVudChcIjE0Q2FudmFzXCIpO1xuICAgIHZhciBjdHggPSB0ZXN0LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgMzAwLCAxNTApO1xuICAgIGN0eC5jbGVhclJlY3QoMjAsIDIwLCAxMDAsIDUwKTtcbiAgfSxcbiAgY2xpY2sxNTogZnVuY3Rpb24gY2xpY2sxNSgpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBcImRyYXdmaWxsXCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiMTVDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5yZWN0KDIwLCAyMCwgMTUwLCAxMDApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgfSxcbiAgY2xpY2sxNjogZnVuY3Rpb24gY2xpY2sxNigpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBcImRyYXdzdHJva2VcIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCIxNkNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMjAsIDIwKTtcbiAgICBjdHgubGluZVRvKDIwLCAxMDApO1xuICAgIGN0eC5saW5lVG8oNzAsIDEwMCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmVlblwiO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfSxcbiAgY2xpY2sxNzogZnVuY3Rpb24gY2xpY2sxNygpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBcImRyYXdiZWdpblBhdGhcIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCIxN0NhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5saW5lV2lkdGggPSBcIjVcIjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5tb3ZlVG8oMCwgNzUpO1xuICAgIGN0eC5saW5lVG8oMjUwLCA3NSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsdWVcIjtcbiAgICBjdHgubW92ZVRvKDUwLCAwKTtcbiAgICBjdHgubGluZVRvKDE1MCwgMTMwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0sXG4gIGNsaWNrMTg6IGZ1bmN0aW9uIGNsaWNrMTgoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3bW92ZVRvXCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiMThDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8oMzAwLCAxNTApO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfSxcbiAgY2xpY2sxOTogZnVuY3Rpb24gY2xpY2sxOSgpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBcImRyYXdjbG9zZVBhdGhcIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCIxOUNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMjAsIDIwKTtcbiAgICBjdHgubGluZVRvKDIwLCAxMDApO1xuICAgIGN0eC5saW5lVG8oNzAsIDEwMCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfSxcbiAgY2xpY2syMDogZnVuY3Rpb24gY2xpY2syMCgpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBcImRyYXdsaW5lVG9cIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCIyMENhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgMCk7XG4gICAgY3R4LmxpbmVUbygzMDAsIDE1MCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9LFxuICBjbGljazIxOiBmdW5jdGlvbiBjbGljazIxKCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd2NsaXBcIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCIyMUNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnJlY3QoNTAsIDIwLCAyMDAsIDEyMCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5jbGlwKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgMTUwLCAxMDApO1xuICB9LFxuICBjbGljazIyOiBmdW5jdGlvbiBjbGljazIyKCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd3F1YWRyYXRpY0N1cnZlVG9cIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCIyMkNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMjAsIDIwKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbygyMCwgMTAwLCAyMDAsIDIwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0sXG4gIGNsaWNrMjM6IGZ1bmN0aW9uIGNsaWNrMjMoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3YmV6aWVyQ3VydmVUb1wiO1xuICAgIHZhciB0ZXN0ID0gdGhpcy4kZWxlbWVudChcIjIzQ2FudmFzXCIpO1xuICAgIHZhciBjdHggPSB0ZXN0LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygyMCwgMjApO1xuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKDIwLCAxMDAsIDIwMCwgMTAwLCAyMDAsIDIwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0sXG4gIGNsaWNrMjQ6IGZ1bmN0aW9uIGNsaWNrMjQoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3YXJjXCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiMjRDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKDEwMCwgNzUsIDUwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9LFxuICBjbGljazI1OiBmdW5jdGlvbiBjbGljazI1KCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd2FyY1RvXCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiMjVDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygyMCwgMjApO1xuICAgIGN0eC5saW5lVG8oMTAwLCAyMCk7XG4gICAgY3R4LmFyY1RvKDE1MCwgMjAsIDE1MCwgNzAsIDUwKTtcbiAgICBjdHgubGluZVRvKDE1MCwgMTIwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0sXG4gIGNsaWNrMjY6IGZ1bmN0aW9uIGNsaWNrMjYoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3c2NhbGVcIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCIyNkNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnN0cm9rZVJlY3QoNSwgNSwgMjUsIDE1KTtcbiAgICBjdHguc2NhbGUoMiwgMik7XG4gICAgY3R4LnN0cm9rZVJlY3QoNSwgNSwgMjUsIDE1KTtcbiAgfSxcbiAgY2xpY2syNzogZnVuY3Rpb24gY2xpY2syNygpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBcImRyYXdyb3RhdGVcIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCIyN0NhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnJvdGF0ZSgyMCAqIE1hdGguUEkgLyAxODApO1xuICAgIGN0eC5maWxsUmVjdCg1MCwgMjAsIDEwMCwgNTApO1xuICB9LFxuICBjbGljazI4OiBmdW5jdGlvbiBjbGljazI4KCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd3RyYW5zbGF0ZVwiO1xuICAgIHZhciB0ZXN0ID0gdGhpcy4kZWxlbWVudChcIjI4Q2FudmFzXCIpO1xuICAgIHZhciBjdHggPSB0ZXN0LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguZmlsbFJlY3QoMTAsIDEwLCAxMDAsIDUwKTtcbiAgICBjdHgudHJhbnNsYXRlKDcwLCA3MCk7XG4gICAgY3R4LmZpbGxSZWN0KDEwLCAxMCwgMTAwLCA1MCk7XG4gIH0sXG4gIGNsaWNrMjk6IGZ1bmN0aW9uIGNsaWNrMjkoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3dHJhbnNmb3JtXCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiMjlDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRkZGMDBcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgMjUwLCAxMDApO1xuICAgIGN0eC50cmFuc2Zvcm0oMSwgMC41LCAtMC41LCAxLCAzMCwgMTApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCAyNTAsIDEwMCk7XG4gICAgY3R4LnRyYW5zZm9ybSgxLCAwLjUsIC0wLjUsIDEsIDMwLCAxMCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCAyNTAsIDEwMCk7XG4gIH0sXG4gIGNsaWNrMzA6IGZ1bmN0aW9uIGNsaWNrMzAoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3c2V0VHJhbnNmb3JtXCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiMzBDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRkZGMDBcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgMjUwLCAxMDApO1xuICAgIGN0eC5zZXRUcmFuc2Zvcm0oMSwgMC41LCAtMC41LCAxLCAzMCwgMTApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCAyNTAsIDEwMCk7XG4gICAgY3R4LnNldFRyYW5zZm9ybSgxLCAwLjUsIC0wLjUsIDEsIDMwLCAxMCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCAyNTAsIDEwMCk7XG4gIH0sXG4gIGNsaWNrMzE6IGZ1bmN0aW9uIGNsaWNrMzEoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3Zm9udFwiO1xuICAgIHZhciB0ZXN0ID0gdGhpcy4kZWxlbWVudChcIjMxQ2FudmFzXCIpO1xuICAgIHZhciBjdHggPSB0ZXN0LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zb2xlLmxvZyhcImN0eC5mb250IDExMSAgPj4gXCIgKyBjdHguZm9udCk7XG4gICAgY3R4LmZvbnQgPSBcIjQwcHggbW9ub3NwYWNlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiSGVsbG8gV29ybGRcIiwgMTAsIDUwKTtcbiAgICBjb25zb2xlLmxvZyhcImN0eC5mb250IDIyMiAgPj4gXCIgKyBjdHguZm9udCk7XG4gIH0sXG4gIGNsaWNrMzI6IGZ1bmN0aW9uIGNsaWNrMzIoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3dGV4dEFsaWduXCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiMzJDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmx1ZVwiO1xuICAgIGN0eC5tb3ZlVG8oMTUwLCAyMCk7XG4gICAgY3R4LmxpbmVUbygxNTAsIDE3MCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5mb250ID0gXCIxNXB4IG1vbm9zcGFjZVwiO1xuICAgIGNvbnNvbGUubG9nKFwiY3R4LnRleHRBbGlnbiAxMTEgID4+IFwiICsgY3R4LnRleHRBbGlnbik7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwic3RhcnRcIjtcbiAgICBjb25zb2xlLmxvZyhcImN0eC50ZXh0QWxpZ24gMjIyICA+PiBcIiArIGN0eC50ZXh0QWxpZ24pO1xuICAgIGN0eC5maWxsVGV4dChcInRleHRBbGlnbj1zdGFydFwiLCAxNTAsIDYwKTtcbiAgICBjdHgudGV4dEFsaWduID0gXCJlbmRcIjtcbiAgICBjb25zb2xlLmxvZyhcImN0eC50ZXh0QWxpZ24gMzMzICA+PiBcIiArIGN0eC50ZXh0QWxpZ24pO1xuICAgIGN0eC5maWxsVGV4dChcInRleHRBbGlnbj1lbmRcIiwgMTUwLCA4MCk7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgIGNvbnNvbGUubG9nKFwiY3R4LnRleHRBbGlnbiA0NDQgID4+IFwiICsgY3R4LnRleHRBbGlnbik7XG4gICAgY3R4LmZpbGxUZXh0KFwidGV4dEFsaWduPWxlZnRcIiwgMTUwLCAxMDApO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGNvbnNvbGUubG9nKFwiY3R4LnRleHRBbGlnbiA1NTUgID4+IFwiICsgY3R4LnRleHRBbGlnbik7XG4gICAgY3R4LmZpbGxUZXh0KFwidGV4dEFsaWduPWNlbnRlclwiLCAxNTAsIDEyMCk7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwicmlnaHRcIjtcbiAgICBjb25zb2xlLmxvZyhcImN0eC50ZXh0QWxpZ24gNjY2ICA+PiBcIiArIGN0eC50ZXh0QWxpZ24pO1xuICAgIGN0eC5maWxsVGV4dChcInRleHRBbGlnbj1yaWdodFwiLCAxNTAsIDE0MCk7XG4gIH0sXG4gIGNsaWNrMzM6IGZ1bmN0aW9uIGNsaWNrMzMoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3dGV4dEJhc2VsaW5lXCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiMzNDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmx1ZVwiO1xuICAgIGN0eC5tb3ZlVG8oNSwgMTAwKTtcbiAgICBjdHgubGluZVRvKDM5NSwgMTAwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmZvbnQgPSBcIjIwcHggbW9ub3NwYWNlXCI7XG4gICAgY29uc29sZS5sb2coXCJjdHgudGV4dEJhc2VsaW5lIDExMSAgPj4gXCIgKyBjdHgudGV4dEJhc2VsaW5lKTtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgICBjdHguZmlsbFRleHQoXCJUb3BcIiwgNSwgMTAwKTtcbiAgICBjb25zb2xlLmxvZyhcImN0eC50ZXh0QmFzZWxpbmUgMjIyICA+PiBcIiArIGN0eC50ZXh0QmFzZWxpbmUpO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcImJvdHRvbVwiO1xuICAgIGN0eC5maWxsVGV4dChcIkJvdHRvbVwiLCA1MCwgMTAwKTtcbiAgICBjb25zb2xlLmxvZyhcImN0eC50ZXh0QmFzZWxpbmUgMzMzICA+PiBcIiArIGN0eC50ZXh0QmFzZWxpbmUpO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIk1pZGRsZVwiLCAxMjAsIDEwMCk7XG4gICAgY29uc29sZS5sb2coXCJjdHgudGV4dEJhc2VsaW5lIDQ0NCAgPj4gXCIgKyBjdHgudGV4dEJhc2VsaW5lKTtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJhbHBoYWJldGljXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiQWxwaGFiZXRpY1wiLCAxOTAsIDEwMCk7XG4gICAgY29uc29sZS5sb2coXCJjdHgudGV4dEJhc2VsaW5lIDU1NSAgPj4gXCIgKyBjdHgudGV4dEJhc2VsaW5lKTtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJoYW5naW5nXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiSGFuZ2luZ1wiLCAyOTAsIDEwMCk7XG4gICAgY29uc29sZS5sb2coXCJjdHgudGV4dEJhc2VsaW5lIDY2NiAgPj4gXCIgKyBjdHgudGV4dEJhc2VsaW5lKTtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJpZGVvZ3JhcGhpY1wiO1xuICAgIGN0eC5maWxsVGV4dChcImlkZW9ncmFwaGljXCIsIDM1MCwgMTAwKTtcbiAgICBjb25zb2xlLmxvZyhcImN0eC50ZXh0QmFzZWxpbmUgNzc3ICA+PiBcIiArIGN0eC50ZXh0QmFzZWxpbmUpO1xuICB9LFxuICBjbGljazM0OiBmdW5jdGlvbiBjbGljazM0KCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd2ZpbGxUZXh0XCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiMzRDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5mb250ID0gXCIyMHB4IG1vbm9zcGFjZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIkhlbGxvIFdvcmxkIVwiLCAxMCwgNTApO1xuICAgIGN0eC5mb250ID0gXCIzMHB4IG1vbm9zcGFjZVwiO1xuICAgIHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAxNzAsIDApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjBcIiwgXCJtYWdlbnRhXCIpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjAuNVwiLCBcImJsdWVcIik7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMS4wXCIsIFwicmVkXCIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICBjdHguZmlsbFRleHQoXCJ3M3NjaG9vbC5jb20uY25cIiwgMTAsIDkwKTtcbiAgfSxcbiAgY2xpY2szNTogZnVuY3Rpb24gY2xpY2szNSgpIHtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCIzNUNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmZvbnQgPSBcIjIwcHggbW9ub3NwYWNlXCI7XG4gICAgY3R4LnN0cm9rZVRleHQoXCJIZWxsbyBXb3JsZCFcIiwgMTAsIDUwKTtcbiAgICBjdHguZm9udCA9IFwiMzBweCBtb25vc3BhY2VcIjtcbiAgICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMjAwLCAwKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwXCIsIFwibWFnZW50YVwiKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwLjVcIiwgXCJibHVlXCIpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjEuMFwiLCBcInJlZFwiKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBncmFkaWVudDtcbiAgICBjdHguc3Ryb2tlVGV4dChcInczc2Nob29sLmNvbS5jblwiLCAxMCwgOTApO1xuICB9LFxuICBjbGljazM2OiBmdW5jdGlvbiBjbGljazM2KCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd21lYXN1cmVUZXh0XCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiMzZDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5mb250ID0gXCIxMHB4IG1vbm9zcGFjZVwiO1xuICAgIHZhciB0eHQgPSBcIkhlbGxvIFdvcmxkXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwid2lkdGg6XCIgKyBjdHgubWVhc3VyZVRleHQodHh0KS53aWR0aCwgMTAsIDUwKTtcbiAgICBjdHguZmlsbFRleHQodHh0LCAxMCArIGN0eC5tZWFzdXJlVGV4dCh0eHQpLndpZHRoLCA1MCk7XG4gICAgY3R4LmZvbnQgPSBcIjIwcHggbW9ub3NwYWNlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwid2lkdGg6XCIgKyBjdHgubWVhc3VyZVRleHQodHh0KS53aWR0aCwgMTAsIDEwMCk7XG4gICAgY3R4LmZpbGxUZXh0KHR4dCwgMTIgKyBjdHgubWVhc3VyZVRleHQodHh0KS53aWR0aCwgMTAwKTtcbiAgICBjdHguZm9udCA9IFwiMzBweCBtb25vc3BhY2VcIjtcbiAgICBjdHguZmlsbFRleHQoXCJ3aWR0aDpcIiArIGN0eC5tZWFzdXJlVGV4dCh0eHQpLndpZHRoLCAxMCwgMTUwKTtcbiAgICBjdHguZmlsbFRleHQodHh0LCAzOCArIGN0eC5tZWFzdXJlVGV4dCh0eHQpLndpZHRoLCAxNTApO1xuICB9LFxuICBjbGljazM3OiBmdW5jdGlvbiBjbGljazM3KCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd2RyYXdJbWFnZVwiO1xuICAgIHZhciB0ZXN0ID0gdGhpcy4kZWxlbWVudChcIjM3Q2FudmFzXCIpO1xuICAgIHZhciBjdHggPSB0ZXN0LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB2YXIgaW1nID0gdGhpcy4kZWxlbWVudChcImltYWdlXCIpO1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAxMCwgMTAsIDIwLCAyMCwgMTAsIDEwLCA2MCwgNjApO1xuICB9LFxuICBjbGljazM4OiBmdW5jdGlvbiBjbGljazM4KCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd2NyZWF0ZUltYWdlRGF0YVwiO1xuICAgIHZhciB0ZXN0ID0gdGhpcy4kZWxlbWVudChcIjM4Q2FudmFzXCIpO1xuICAgIHZhciBjdHggPSB0ZXN0LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB2YXIgaW1nRGF0YSA9IGN0eC5jcmVhdGVJbWFnZURhdGEoMTAwLCAxMDApO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWdEYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgIGltZ0RhdGEuZGF0YVtpICsgMF0gPSAyNTU7XG4gICAgICBpbWdEYXRhLmRhdGFbaSArIDFdID0gMDtcbiAgICAgIGltZ0RhdGEuZGF0YVtpICsgMl0gPSAwO1xuICAgICAgaW1nRGF0YS5kYXRhW2kgKyAzXSA9IDI1NTtcbiAgICB9XG5cbiAgICBjdHgucHV0SW1hZ2VEYXRhKGltZ0RhdGEsIDEwLCAxMCk7XG4gIH0sXG4gIGNsaWNrMzk6IGZ1bmN0aW9uIGNsaWNrMzkoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3Z2V0SW1hZ2VEYXRhXCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiMzlDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHZhciBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIDEwMCwgNTApO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZURhdGEuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgaW1hZ2VEYXRhLmRhdGFbaSArIDBdID0gMjU1O1xuICAgICAgaW1hZ2VEYXRhLmRhdGFbaSArIDFdID0gMDtcbiAgICAgIGltYWdlRGF0YS5kYXRhW2kgKyAyXSA9IDA7XG4gICAgICBpbWFnZURhdGEuZGF0YVtpICsgM10gPSAyNTU7XG4gICAgfVxuXG4gICAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xuICB9LFxuICBjbGljazQwOiBmdW5jdGlvbiBjbGljazQwKCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd2dsb2JhbEFscGhhXCI7XG4gICAgdmFyIHRlc3QgPSB0aGlzLiRlbGVtZW50KFwiNDBDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IHRlc3QuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5maWxsUmVjdCgyMCwgMjAsIDc1LCA1MCk7XG4gICAgY29uc29sZS5sb2coXCJjdHguZ2xvYmFsQWxwaGEgMTExICA+PiBcIiArIGN0eC5nbG9iYWxBbHBoYSk7XG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMC4yO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICBjdHguZmlsbFJlY3QoNTAsIDUwLCA3NSwgNTApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgY3R4LmZpbGxSZWN0KDgwLCA4MCwgNzUsIDUwKTtcbiAgICBjb25zb2xlLmxvZyhcImN0eC5nbG9iYWxBbHBoYSAyMjIgID4+IFwiICsgY3R4Lmdsb2JhbEFscGhhKTtcbiAgfSxcbiAgY2xpY2s0MTogZnVuY3Rpb24gY2xpY2s0MSgpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBcImRyYXdnbG9iYWxDb21wb3NpdGVPcGVyYXRpb25cIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCI0MUNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgY3R4LmZpbGxSZWN0KDIwLCAyMCwgNzUsIDUwKTtcbiAgICBjb25zb2xlLmxvZyhcImN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gMTExICA+PiBcIiArIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24pO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInhvclwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICBjdHguZmlsbFJlY3QoNTAsIDUwLCA3NSwgNTApO1xuICAgIGNvbnNvbGUubG9nKFwiY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiAyMjIgID4+IFwiICsgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbik7XG4gIH0sXG4gIGNsaWNrNDI6IGZ1bmN0aW9uIGNsaWNrNDIoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gXCJkcmF3UmFkaWxcIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCI0MkNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdmFyIGdyZCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCg3NSwgNTAsIDUwKTtcbiAgICBncmQuYWRkQ29sb3JTdG9wKDAsIFwicmVkXCIpO1xuICAgIGdyZC5hZGRDb2xvclN0b3AoMC41LCBcImdyZWVuXCIpO1xuICAgIGdyZC5hZGRDb2xvclN0b3AoMSwgXCJibHVlXCIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmQ7XG4gICAgY3R4LmZpbGxSZWN0KDEwLCAxMCwgMTUwLCA4MCk7XG4gIH0sXG4gIGNsaWNrNDM6IGZ1bmN0aW9uIGNsaWNrNDMoKSB7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuJGVsZW1lbnQoJzQzQ2FudmFzJyk7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnNvbGUubG9nKFwibGluZURhc2g9XCIgKyBjdHguZ2V0TGluZURhc2goKSk7XG4gICAgY3R4LnNldExpbmVEYXNoKFs0LCAxNiwgMTAwXSk7XG4gICAgY3R4LmxpbmVEYXNoT2Zmc2V0ID0gMjtcbiAgICBjb25zb2xlLmxvZyhcImxpbmVEYXNoPVwiICsgY3R4LmdldExpbmVEYXNoKCkpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIDEwMCk7XG4gICAgY3R4LmxpbmVUbyg0MDAsIDEwMCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9LFxuICBjbGljazQ0OiBmdW5jdGlvbiBjbGljazQ0KCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd2RyYXdJbWFnZVwiO1xuICAgIHZhciB0ZXN0ID0gdGhpcy4kZWxlbWVudChcIjQ0Q2FudmFzXCIpO1xuICAgIHZhciBjdHggPSB0ZXN0LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IFwiaHR0cDovL3d3dy5odWF3ZWkuY29tL0Fzc2V0cy9DQkcvaW1nL2xvZ28ucG5nXCI7XG5cbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJJbWFnZSBsb2FkIHN1Y2Nlc3MuXCIpO1xuICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDEwLCAxMCwgMjAsIDIwLCAxMCwgMTAsIDYwLCA2MCk7XG4gICAgfTtcblxuICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJJbWFnZSBsb2FkIGZhaWwuXCIpO1xuICAgIH07XG4gIH0sXG4gIGNsaWNrNDU6IGZ1bmN0aW9uIGNsaWNrNDUoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMubWVzc2FnZSA9IFwiZHJhd2ZpbGxTdHlsZWZvcmNyZWF0ZVBhdHRlcm5cIjtcbiAgICB2YXIgdGVzdCA9IHRoaXMuJGVsZW1lbnQoXCI0NUNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gdGVzdC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc29sZS5sb2coXCJjdHguZmlsbFN0eWxlIDU1NSAgPj4gXCIgKyBjdHguZmlsbFN0eWxlKTtcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IFwiaHR0cDovL3d3dy5odWF3ZWkuY29tL0Fzc2V0cy9DQkcvaW1nL2xvZ28ucG5nXCI7XG5cbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJJbWFnZSBsb2FkIHN1Y2Nlc3MuXCIpO1xuICAgICAgdmFyIHBhdCA9IGN0eC5jcmVhdGVQYXR0ZXJuKGltZywgXCJyZXBlYXRcIik7XG4gICAgICBjdHgucmVjdCgwLCAwLCA1MDAsIDIwMCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gcGF0O1xuICAgICAgY29uc29sZS5sb2coXCJjdHguZmlsbFN0eWxlIDY2NiAgPj4gXCIgKyBjdHguZmlsbFN0eWxlKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICB0ZXN0LnRvVGVtcEZpbGVQYXRoKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgIGRlc3RXaWR0aDogMTAwLFxuICAgICAgICBkZXN0SGVpZ2h0OiAxMDAsXG4gICAgICAgIGZpbGVUeXBlOiBcInBuZ1wiLFxuICAgICAgICBxdWFsaXR5OiAxLjAsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgIF90aGlzLmltYWdlU3JjID0gZGF0YS51cmk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDYW52YXMgdG9UZW1wRmlsZVBhdGggc3VjY2VzcyBcIi5jb25jYXQoZGF0YS51cmkpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbnZhcyB0b1RlbXBGaWxlUGF0aCBzdWNjZXNzIFwiLmNvbmNhdChkYXRhLnRlbXBGaWxlUGF0aCkpO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGRhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnQ2FudmFzIHRvVGVtcEZpbGVQYXRoIGRhdGEgPScgKyBkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW52YXMgdG9UZW1wRmlsZVBhdGggY29tcGxldGUuJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSW1hZ2UgbG9hZCBmYWlsLlwiKTtcbiAgICB9O1xuICB9LFxuICBlcnJvcmZ1bjogZnVuY3Rpb24gZXJyb3JmdW4oKSB7XG4gICAgY29uc29sZS5sb2coXCJjYW52YXMgb25lcnJvclwiKTtcbiAgfSxcbiAgbG9uZ3RhcGZ1bjogZnVuY3Rpb24gbG9uZ3RhcGZ1bigpIHtcbiAgICBjb25zb2xlLmxvZyhcImNhbnZhcyBsb25ndGFwXCIpO1xuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM5c0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=