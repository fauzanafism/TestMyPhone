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
/******/ 	return __webpack_require__(__webpack_require__.s = "../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux":
/*!***********************************************************************************************!*\
  !*** e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\component\\basic\\map\\index.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\component\\basic\\map\\index.ux!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader?presets[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib/index.js?presets[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux")

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

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\component\\basic\\map\\index.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\component\\basic\\map\\index.ux!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".d1": {
    "flexDirection": "column"
  },
  ".map": {
    "backgroundColor": "#a9a9a9",
    "width": "750px",
    "height": "750px"
  },
  ".lc1": {
    "mylocationIconPath": "/common/logo.png",
    "mylocationFillColor": "rgba(255,0,255,0.5)",
    "mylocationStrokeColor": "rgba(255,255,0,1)"
  },
  ".lc2": {
    "mylocationFillColor": "rgba(255,0,255,0.5)",
    "mylocationStrokeColor": "rgba(255,255,0,1)",
    "mylocationIconPath": "/common/logo.png"
  }
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "map",
      "attr": {
        "id": "mapid",
        "latitude": "39.906901",
        "longitude": "116.397972",
        "showmylocation": "true",
        "includepoints": function () {return this.tincludepoints},
        "groundoverlays": function () {return this.tgroundlay},
        "circles": function () {return this.tcircles},
        "polylines": function () {return this.tpolylines},
        "controls": function () {return this.tcontrols},
        "polygons": function () {return this.tpolygones}
      },
      "classList": [
        "map",
        "lc2"
      ],
      "id": "mapid",
      "events": {
        "loaded": "loaded",
        "regionchange": "regionchange",
        "tap": "tap",
        "controltap": "controltap",
        "poitap": "poitap"
      }
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib/index.js?presets[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib?presets[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/component/basic/map/index.ux ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    tcircles: [{
      latitude: 39.906901,
      longitude: 116.397972,
      borderColor: '#ff0000',
      borderWidth: '15px',
      zIndex: 20,
      fillColor: '#EE7AE9',
      radius: 3500,
      strokeWidth: 15
    }],
    tincludepoints: [{
      latitude: 39.074112,
      longitude: 116.686649
    }],
    tpolylines: [{
      points: [{
        latitude: 39.906901,
        longitude: 116.397972,
        coordType: 'gcj02'
      }, {
        latitude: 39.074112,
        longitude: 116.686649,
        coordType: 'gcj02'
      }],
      color: '#EE7AE9',
      dotted: true,
      width: '15px',
      arrowLine: true,
      arrowIconPath: '/common/logo.png'
    }, {
      points: [{
        latitude: 38.406665,
        longitude: 116.995047,
        coordType: 'gcj02'
      }, {
        latitude: 38.206665,
        longitude: 116.595047,
        coordType: 'gcj02'
      }],
      color: '#EE7AE9',
      dotted: true,
      width: '15px',
      arrowLine: true,
      arrowIconPath: '/common/logo.png'
    }],
    tpolygones: [{
      points: [{
        latitude: 39.906901,
        longitude: 116.397972,
        coordType: 'gcj02'
      }, {
        latitude: 39.506901,
        longitude: 116.097972,
        coordType: 'gcj02'
      }, {
        latitude: 39.006901,
        longitude: 115.597972,
        coordType: 'gcj02'
      }],
      strokeWidth: '5px',
      strokeColor: 'red',
      fillColor: 'yellow',
      zIndex: 3
    }],
    tcontrols: [{
      id: 1,
      position: {
        left: '20px',
        top: '20px',
        width: '150px',
        height: '150px'
      },
      iconPath: '/common/logo.png',
      clickable: true
    }, {
      id: 2,
      position: {
        left: '20px',
        bottom: '20px',
        width: '150px',
        height: '150px'
      },
      iconPath: '/common/logo.png',
      clickable: true
    }, {
      id: 3,
      position: {
        right: '20px',
        top: '20px',
        width: '150px',
        height: '150px'
      },
      iconPath: '/common/logo.png',
      clickable: true
    }, {
      id: 4,
      position: {
        right: '20px',
        bottom: '20px',
        width: '150px',
        height: '150px'
      },
      iconPath: '/common/logo.png',
      clickable: true
    }],
    tgroundlay: [{
      'id': 1,
      southWest: {
        latitude: 39.906901,
        longitude: 116.397972,
        coordType: 'gcj02'
      },
      northEast: {
        latitude: 39.776909,
        longitude: 116.596205,
        coordType: 'gcj02'
      },
      iconPath: '/common/logo.png',
      visible: true,
      zIndex: 3,
      opacity: 1
    }]
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: 'mapbase',
      textColor: '#ffffff',
      backgroundColor: '#007DFF',
      backgroundOpacity: 0.5,
      menu: true
    });
  },
  onMenuPress: function onMenuPress() {
    var mapcom = this.$element('mapid');

    _system["default"].showContextMenu({
      itemList: ['getCenterLocation', 'translateMarker', 'moveToMyLocation', 'includePoints', 'getRegion', 'getScale', 'getCoordType', 'convertCoord'],
      success: function success(data) {
        var index = data.index;
        console.log("index = " + index);

        switch (index) {
          case 0:
            console.log('getCenterLocation');
            mapcom.getCenterLocation({
              success: function success(data) {
                console.log("getCenterLocation   latitude = " + data.latitude + "   longitude = " + data.longitude);
              },
              fail: function fail() {
                console.log("getCenterLocation fail");
              },
              complete: function complete() {
                console.log("getCenterLocation complete");
              }
            });
            break;

          case 1:
            console.log('translateMarker');
            break;

          case 2:
            console.log('moveToMyLocation');
            mapcom.moveToMyLocation();
            break;

          case 3:
            console.log('includePoints');
            mapcom.includePoints({
              points: [{
                latitude: 38.406665,
                longitude: 116.995047,
                coordType: 'gcj02'
              }],
              padding: "10 0 0 10",
              success: function success() {
                console.log("includePoints success");
              },
              fail: function fail() {
                console.log("includePoints fail");
              },
              complete: function complete() {
                console.log("includePoints complete");
              }
            });
            break;

          case 4:
            console.log('getRegion');
            mapcom.getRegion({
              success: function success(data) {
                console.log("getRegion   southwest = " + data.southwest + "   northeast = " + data.northeast);
              },
              fail: function fail() {
                console.log("getRegion fail");
              },
              complete: function complete() {
                console.log("getRegion complete");
              }
            });
            break;

          case 5:
            console.log('getScale');
            mapcom.getScale({
              success: function success(data) {
                console.log("getScale   scale = " + data.scale);
              },
              fail: function fail() {
                console.log("getScale fail");
              },
              complete: function complete() {
                console.log("getScale complete");
              }
            });
            break;

          case 6:
            console.log('getCoordType');
            mapcom.getCoordType({
              success: function success(data) {
                console.log("getCoordType   coordtype = " + data.coordtype);
              },
              fail: function fail() {
                console.log("getCoordType fail");
              },
              complete: function complete() {
                console.log("getCoordType complete");
              }
            });
            break;

          case 7:
            console.log('convertCoord');
            mapcom.convertCoord({
              from: 'wgs84',
              to: 'gcj02',
              latitude: 39.747872,
              longitude: 116.438955,
              success: function success(data) {
                console.log("convertCoord   latitude = " + data.latitude + "   longitude = " + data.longitude);
              },
              fail: function fail() {
                console.log("convertCoord fail");
              },
              complete: function complete() {
                console.log("convertCoord complete");
              }
            });
            break;
        }
      },
      cancel: function cancel(data) {
        console.log("handling cancel");
      },
      complete: function complete() {
        console.log("handling complete");
      }
    });
  },
  loaded: function loaded() {
    console.log('map has been loaded');
  },
  regionchange: function regionchange(event) {
    console.log('map_xxx regionchange' + " northeast latitude " + event.northeast.latitude + " northeast longitude  " + event.northeast.longitude + " southwest.latitude " + event.southwest.latitude + " southwest.longitude " + event.southwest.longitude);
  },
  tap: function tap(event) {
    console.log('map_xxx tap' + " latitude " + event.latitude + " longitude " + event.longitude);
  },
  controltap: function controltap(event) {
    console.log('controltap id:' + event.id);
  },
  poitap: function poitap(event) {
    console.log("poiId = " + event.poiId);
    console.log("poiName = " + event.poiName);
    console.log("latitude = " + event.latitude);
    console.log("longitude = " + event.longitude);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXGNvbXBvbmVudFxcYmFzaWNcXG1hcFxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2U6L1dvcmtzcGFjZUh1YXdlaS9UZXN0TXlQaG9uZS9jb20ud2lsZGRldi50ZXN0bXlwaG9uZS9zcmMvY29tcG9uZW50L2Jhc2ljL21hcC9pbmRleC51eCIsIndlYnBhY2s6Ly8vZTovV29ya3NwYWNlSHVhd2VpL1Rlc3RNeVBob25lL2NvbS53aWxkZGV2LnRlc3RteXBob25lL3NyYy9jb21wb25lbnQvYmFzaWMvbWFwL2luZGV4LnV4P2U2ZjQiLCJ3ZWJwYWNrOi8vL2U6L1dvcmtzcGFjZUh1YXdlaS9UZXN0TXlQaG9uZS9jb20ud2lsZGRldi50ZXN0bXlwaG9uZS9zcmMvY29tcG9uZW50L2Jhc2ljL21hcC9pbmRleC51eD8yNzc1Iiwid2VicGFjazovLy9lOi9Xb3Jrc3BhY2VIdWF3ZWkvVGVzdE15UGhvbmUvY29tLndpbGRkZXYudGVzdG15cGhvbmUvc3JjL2NvbXBvbmVudC9iYXNpYy9tYXAvaW5kZXgudXg/MDEzNyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9Xb3Jrc3BhY2VIdWF3ZWkvVGVzdE15UGhvbmUvY29tLndpbGRkZXYudGVzdG15cGhvbmUvc3JjL2NvbXBvbmVudC9iYXNpYy9tYXAvaW5kZXgudXhcIik7XG4iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9pbmRleC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxXb3Jrc3BhY2VIdWF3ZWlcXFxcVGVzdE15UGhvbmVcXFxcY29tLndpbGRkZXYudGVzdG15cGhvbmVcXFxcc3JjXFxcXGNvbXBvbmVudFxcXFxiYXNpY1xcXFxtYXBcXFxcaW5kZXgudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZTpcXFxcV29ya3NwYWNlSHVhd2VpXFxcXFRlc3RNeVBob25lXFxcXGNvbS53aWxkZGV2LnRlc3RteXBob25lXFxcXHNyY1xcXFxjb21wb25lbnRcXFxcYmFzaWNcXFxcbWFwXFxcXGluZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1lOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtY29tcGlsZXJcXFxcanN4LWxvYWRlci5qcyZwbHVnaW5zW109ZTpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXMmcGx1Z2luc1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi1wcm9wb3NhbC1vYmplY3QtcmVzdC1zcHJlYWQmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9pbmRleC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcseyBwYWNrYWdlck5hbWU6J2ZhLXRvb2xraXQnLCBwYWNrYWdlclZlcnNpb246ICcyLjUuMi1TdGFibGUuMzAwJ30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmQxXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5tYXBcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2E5YTlhOVwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzUwcHhcIlxuICB9LFxuICBcIi5sYzFcIjoge1xuICAgIFwibXlsb2NhdGlvbkljb25QYXRoXCI6IFwiL2NvbW1vbi9sb2dvLnBuZ1wiLFxuICAgIFwibXlsb2NhdGlvbkZpbGxDb2xvclwiOiBcInJnYmEoMjU1LDAsMjU1LDAuNSlcIixcbiAgICBcIm15bG9jYXRpb25TdHJva2VDb2xvclwiOiBcInJnYmEoMjU1LDI1NSwwLDEpXCJcbiAgfSxcbiAgXCIubGMyXCI6IHtcbiAgICBcIm15bG9jYXRpb25GaWxsQ29sb3JcIjogXCJyZ2JhKDI1NSwwLDI1NSwwLjUpXCIsXG4gICAgXCJteWxvY2F0aW9uU3Ryb2tlQ29sb3JcIjogXCJyZ2JhKDI1NSwyNTUsMCwxKVwiLFxuICAgIFwibXlsb2NhdGlvbkljb25QYXRoXCI6IFwiL2NvbW1vbi9sb2dvLnBuZ1wiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwibWFwXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImlkXCI6IFwibWFwaWRcIixcbiAgICAgICAgXCJsYXRpdHVkZVwiOiBcIjM5LjkwNjkwMVwiLFxuICAgICAgICBcImxvbmdpdHVkZVwiOiBcIjExNi4zOTc5NzJcIixcbiAgICAgICAgXCJzaG93bXlsb2NhdGlvblwiOiBcInRydWVcIixcbiAgICAgICAgXCJpbmNsdWRlcG9pbnRzXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aW5jbHVkZXBvaW50c30sXG4gICAgICAgIFwiZ3JvdW5kb3ZlcmxheXNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRncm91bmRsYXl9LFxuICAgICAgICBcImNpcmNsZXNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRjaXJjbGVzfSxcbiAgICAgICAgXCJwb2x5bGluZXNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRwb2x5bGluZXN9LFxuICAgICAgICBcImNvbnRyb2xzXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50Y29udHJvbHN9LFxuICAgICAgICBcInBvbHlnb25zXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50cG9seWdvbmVzfVxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJtYXBcIixcbiAgICAgICAgXCJsYzJcIlxuICAgICAgXSxcbiAgICAgIFwiaWRcIjogXCJtYXBpZFwiLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImxvYWRlZFwiOiBcImxvYWRlZFwiLFxuICAgICAgICBcInJlZ2lvbmNoYW5nZVwiOiBcInJlZ2lvbmNoYW5nZVwiLFxuICAgICAgICBcInRhcFwiOiBcInRhcFwiLFxuICAgICAgICBcImNvbnRyb2x0YXBcIjogXCJjb250cm9sdGFwXCIsXG4gICAgICAgIFwicG9pdGFwXCI6IFwicG9pdGFwXCJcbiAgICAgIH1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnByb21wdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YToge1xuICAgIHRjaXJjbGVzOiBbe1xuICAgICAgbGF0aXR1ZGU6IDM5LjkwNjkwMSxcbiAgICAgIGxvbmdpdHVkZTogMTE2LjM5Nzk3MixcbiAgICAgIGJvcmRlckNvbG9yOiAnI2ZmMDAwMCcsXG4gICAgICBib3JkZXJXaWR0aDogJzE1cHgnLFxuICAgICAgekluZGV4OiAyMCxcbiAgICAgIGZpbGxDb2xvcjogJyNFRTdBRTknLFxuICAgICAgcmFkaXVzOiAzNTAwLFxuICAgICAgc3Ryb2tlV2lkdGg6IDE1XG4gICAgfV0sXG4gICAgdGluY2x1ZGVwb2ludHM6IFt7XG4gICAgICBsYXRpdHVkZTogMzkuMDc0MTEyLFxuICAgICAgbG9uZ2l0dWRlOiAxMTYuNjg2NjQ5XG4gICAgfV0sXG4gICAgdHBvbHlsaW5lczogW3tcbiAgICAgIHBvaW50czogW3tcbiAgICAgICAgbGF0aXR1ZGU6IDM5LjkwNjkwMSxcbiAgICAgICAgbG9uZ2l0dWRlOiAxMTYuMzk3OTcyLFxuICAgICAgICBjb29yZFR5cGU6ICdnY2owMidcbiAgICAgIH0sIHtcbiAgICAgICAgbGF0aXR1ZGU6IDM5LjA3NDExMixcbiAgICAgICAgbG9uZ2l0dWRlOiAxMTYuNjg2NjQ5LFxuICAgICAgICBjb29yZFR5cGU6ICdnY2owMidcbiAgICAgIH1dLFxuICAgICAgY29sb3I6ICcjRUU3QUU5JyxcbiAgICAgIGRvdHRlZDogdHJ1ZSxcbiAgICAgIHdpZHRoOiAnMTVweCcsXG4gICAgICBhcnJvd0xpbmU6IHRydWUsXG4gICAgICBhcnJvd0ljb25QYXRoOiAnL2NvbW1vbi9sb2dvLnBuZydcbiAgICB9LCB7XG4gICAgICBwb2ludHM6IFt7XG4gICAgICAgIGxhdGl0dWRlOiAzOC40MDY2NjUsXG4gICAgICAgIGxvbmdpdHVkZTogMTE2Ljk5NTA0NyxcbiAgICAgICAgY29vcmRUeXBlOiAnZ2NqMDInXG4gICAgICB9LCB7XG4gICAgICAgIGxhdGl0dWRlOiAzOC4yMDY2NjUsXG4gICAgICAgIGxvbmdpdHVkZTogMTE2LjU5NTA0NyxcbiAgICAgICAgY29vcmRUeXBlOiAnZ2NqMDInXG4gICAgICB9XSxcbiAgICAgIGNvbG9yOiAnI0VFN0FFOScsXG4gICAgICBkb3R0ZWQ6IHRydWUsXG4gICAgICB3aWR0aDogJzE1cHgnLFxuICAgICAgYXJyb3dMaW5lOiB0cnVlLFxuICAgICAgYXJyb3dJY29uUGF0aDogJy9jb21tb24vbG9nby5wbmcnXG4gICAgfV0sXG4gICAgdHBvbHlnb25lczogW3tcbiAgICAgIHBvaW50czogW3tcbiAgICAgICAgbGF0aXR1ZGU6IDM5LjkwNjkwMSxcbiAgICAgICAgbG9uZ2l0dWRlOiAxMTYuMzk3OTcyLFxuICAgICAgICBjb29yZFR5cGU6ICdnY2owMidcbiAgICAgIH0sIHtcbiAgICAgICAgbGF0aXR1ZGU6IDM5LjUwNjkwMSxcbiAgICAgICAgbG9uZ2l0dWRlOiAxMTYuMDk3OTcyLFxuICAgICAgICBjb29yZFR5cGU6ICdnY2owMidcbiAgICAgIH0sIHtcbiAgICAgICAgbGF0aXR1ZGU6IDM5LjAwNjkwMSxcbiAgICAgICAgbG9uZ2l0dWRlOiAxMTUuNTk3OTcyLFxuICAgICAgICBjb29yZFR5cGU6ICdnY2owMidcbiAgICAgIH1dLFxuICAgICAgc3Ryb2tlV2lkdGg6ICc1cHgnLFxuICAgICAgc3Ryb2tlQ29sb3I6ICdyZWQnLFxuICAgICAgZmlsbENvbG9yOiAneWVsbG93JyxcbiAgICAgIHpJbmRleDogM1xuICAgIH1dLFxuICAgIHRjb250cm9sczogW3tcbiAgICAgIGlkOiAxLFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgbGVmdDogJzIwcHgnLFxuICAgICAgICB0b3A6ICcyMHB4JyxcbiAgICAgICAgd2lkdGg6ICcxNTBweCcsXG4gICAgICAgIGhlaWdodDogJzE1MHB4J1xuICAgICAgfSxcbiAgICAgIGljb25QYXRoOiAnL2NvbW1vbi9sb2dvLnBuZycsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LCB7XG4gICAgICBpZDogMixcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIGxlZnQ6ICcyMHB4JyxcbiAgICAgICAgYm90dG9tOiAnMjBweCcsXG4gICAgICAgIHdpZHRoOiAnMTUwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcxNTBweCdcbiAgICAgIH0sXG4gICAgICBpY29uUGF0aDogJy9jb21tb24vbG9nby5wbmcnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSwge1xuICAgICAgaWQ6IDMsXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICByaWdodDogJzIwcHgnLFxuICAgICAgICB0b3A6ICcyMHB4JyxcbiAgICAgICAgd2lkdGg6ICcxNTBweCcsXG4gICAgICAgIGhlaWdodDogJzE1MHB4J1xuICAgICAgfSxcbiAgICAgIGljb25QYXRoOiAnL2NvbW1vbi9sb2dvLnBuZycsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LCB7XG4gICAgICBpZDogNCxcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHJpZ2h0OiAnMjBweCcsXG4gICAgICAgIGJvdHRvbTogJzIwcHgnLFxuICAgICAgICB3aWR0aDogJzE1MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTUwcHgnXG4gICAgICB9LFxuICAgICAgaWNvblBhdGg6ICcvY29tbW9uL2xvZ28ucG5nJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH1dLFxuICAgIHRncm91bmRsYXk6IFt7XG4gICAgICAnaWQnOiAxLFxuICAgICAgc291dGhXZXN0OiB7XG4gICAgICAgIGxhdGl0dWRlOiAzOS45MDY5MDEsXG4gICAgICAgIGxvbmdpdHVkZTogMTE2LjM5Nzk3MixcbiAgICAgICAgY29vcmRUeXBlOiAnZ2NqMDInXG4gICAgICB9LFxuICAgICAgbm9ydGhFYXN0OiB7XG4gICAgICAgIGxhdGl0dWRlOiAzOS43NzY5MDksXG4gICAgICAgIGxvbmdpdHVkZTogMTE2LjU5NjIwNSxcbiAgICAgICAgY29vcmRUeXBlOiAnZ2NqMDInXG4gICAgICB9LFxuICAgICAgaWNvblBhdGg6ICcvY29tbW9uL2xvZ28ucG5nJyxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICB6SW5kZXg6IDMsXG4gICAgICBvcGFjaXR5OiAxXG4gICAgfV1cbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICB0ZXh0OiAnbWFwYmFzZScsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDdERkYnLFxuICAgICAgYmFja2dyb3VuZE9wYWNpdHk6IDAuNSxcbiAgICAgIG1lbnU6IHRydWVcbiAgICB9KTtcbiAgfSxcbiAgb25NZW51UHJlc3M6IGZ1bmN0aW9uIG9uTWVudVByZXNzKCkge1xuICAgIHZhciBtYXBjb20gPSB0aGlzLiRlbGVtZW50KCdtYXBpZCcpO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uc2hvd0NvbnRleHRNZW51KHtcbiAgICAgIGl0ZW1MaXN0OiBbJ2dldENlbnRlckxvY2F0aW9uJywgJ3RyYW5zbGF0ZU1hcmtlcicsICdtb3ZlVG9NeUxvY2F0aW9uJywgJ2luY2x1ZGVQb2ludHMnLCAnZ2V0UmVnaW9uJywgJ2dldFNjYWxlJywgJ2dldENvb3JkVHlwZScsICdjb252ZXJ0Q29vcmQnXSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICB2YXIgaW5kZXggPSBkYXRhLmluZGV4O1xuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4ID0gXCIgKyBpbmRleCk7XG5cbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRDZW50ZXJMb2NhdGlvbicpO1xuICAgICAgICAgICAgbWFwY29tLmdldENlbnRlckxvY2F0aW9uKHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRDZW50ZXJMb2NhdGlvbiAgIGxhdGl0dWRlID0gXCIgKyBkYXRhLmxhdGl0dWRlICsgXCIgICBsb25naXR1ZGUgPSBcIiArIGRhdGEubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbCgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldENlbnRlckxvY2F0aW9uIGZhaWxcIik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldENlbnRlckxvY2F0aW9uIGNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RyYW5zbGF0ZU1hcmtlcicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbW92ZVRvTXlMb2NhdGlvbicpO1xuICAgICAgICAgICAgbWFwY29tLm1vdmVUb015TG9jYXRpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luY2x1ZGVQb2ludHMnKTtcbiAgICAgICAgICAgIG1hcGNvbS5pbmNsdWRlUG9pbnRzKHtcbiAgICAgICAgICAgICAgcG9pbnRzOiBbe1xuICAgICAgICAgICAgICAgIGxhdGl0dWRlOiAzOC40MDY2NjUsXG4gICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMTYuOTk1MDQ3LFxuICAgICAgICAgICAgICAgIGNvb3JkVHlwZTogJ2djajAyJ1xuICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxMCAwIDAgMTBcIixcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluY2x1ZGVQb2ludHMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbCgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluY2x1ZGVQb2ludHMgZmFpbFwiKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5jbHVkZVBvaW50cyBjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRSZWdpb24nKTtcbiAgICAgICAgICAgIG1hcGNvbS5nZXRSZWdpb24oe1xuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldFJlZ2lvbiAgIHNvdXRod2VzdCA9IFwiICsgZGF0YS5zb3V0aHdlc3QgKyBcIiAgIG5vcnRoZWFzdCA9IFwiICsgZGF0YS5ub3J0aGVhc3QpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0UmVnaW9uIGZhaWxcIik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldFJlZ2lvbiBjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRTY2FsZScpO1xuICAgICAgICAgICAgbWFwY29tLmdldFNjYWxlKHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRTY2FsZSAgIHNjYWxlID0gXCIgKyBkYXRhLnNjYWxlKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbCgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldFNjYWxlIGZhaWxcIik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldFNjYWxlIGNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldENvb3JkVHlwZScpO1xuICAgICAgICAgICAgbWFwY29tLmdldENvb3JkVHlwZSh7XG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0Q29vcmRUeXBlICAgY29vcmR0eXBlID0gXCIgKyBkYXRhLmNvb3JkdHlwZSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRDb29yZFR5cGUgZmFpbFwiKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0Q29vcmRUeXBlIGNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbnZlcnRDb29yZCcpO1xuICAgICAgICAgICAgbWFwY29tLmNvbnZlcnRDb29yZCh7XG4gICAgICAgICAgICAgIGZyb206ICd3Z3M4NCcsXG4gICAgICAgICAgICAgIHRvOiAnZ2NqMDInLFxuICAgICAgICAgICAgICBsYXRpdHVkZTogMzkuNzQ3ODcyLFxuICAgICAgICAgICAgICBsb25naXR1ZGU6IDExNi40Mzg5NTUsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29udmVydENvb3JkICAgbGF0aXR1ZGUgPSBcIiArIGRhdGEubGF0aXR1ZGUgKyBcIiAgIGxvbmdpdHVkZSA9IFwiICsgZGF0YS5sb25naXR1ZGUpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29udmVydENvb3JkIGZhaWxcIik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbnZlcnRDb29yZCBjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNhbmNlbDogZnVuY3Rpb24gY2FuY2VsKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGluZyBjYW5jZWxcIik7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIGNvbXBsZXRlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBsb2FkZWQ6IGZ1bmN0aW9uIGxvYWRlZCgpIHtcbiAgICBjb25zb2xlLmxvZygnbWFwIGhhcyBiZWVuIGxvYWRlZCcpO1xuICB9LFxuICByZWdpb25jaGFuZ2U6IGZ1bmN0aW9uIHJlZ2lvbmNoYW5nZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdtYXBfeHh4IHJlZ2lvbmNoYW5nZScgKyBcIiBub3J0aGVhc3QgbGF0aXR1ZGUgXCIgKyBldmVudC5ub3J0aGVhc3QubGF0aXR1ZGUgKyBcIiBub3J0aGVhc3QgbG9uZ2l0dWRlICBcIiArIGV2ZW50Lm5vcnRoZWFzdC5sb25naXR1ZGUgKyBcIiBzb3V0aHdlc3QubGF0aXR1ZGUgXCIgKyBldmVudC5zb3V0aHdlc3QubGF0aXR1ZGUgKyBcIiBzb3V0aHdlc3QubG9uZ2l0dWRlIFwiICsgZXZlbnQuc291dGh3ZXN0LmxvbmdpdHVkZSk7XG4gIH0sXG4gIHRhcDogZnVuY3Rpb24gdGFwKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ21hcF94eHggdGFwJyArIFwiIGxhdGl0dWRlIFwiICsgZXZlbnQubGF0aXR1ZGUgKyBcIiBsb25naXR1ZGUgXCIgKyBldmVudC5sb25naXR1ZGUpO1xuICB9LFxuICBjb250cm9sdGFwOiBmdW5jdGlvbiBjb250cm9sdGFwKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2NvbnRyb2x0YXAgaWQ6JyArIGV2ZW50LmlkKTtcbiAgfSxcbiAgcG9pdGFwOiBmdW5jdGlvbiBwb2l0YXAoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcInBvaUlkID0gXCIgKyBldmVudC5wb2lJZCk7XG4gICAgY29uc29sZS5sb2coXCJwb2lOYW1lID0gXCIgKyBldmVudC5wb2lOYW1lKTtcbiAgICBjb25zb2xlLmxvZyhcImxhdGl0dWRlID0gXCIgKyBldmVudC5sYXRpdHVkZSk7XG4gICAgY29uc29sZS5sb2coXCJsb25naXR1ZGUgPSBcIiArIGV2ZW50LmxvbmdpdHVkZSk7XG4gIH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9