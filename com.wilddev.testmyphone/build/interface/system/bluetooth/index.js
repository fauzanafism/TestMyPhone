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
/******/ 	return __webpack_require__(__webpack_require__.s = "../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux":
/*!******************************************************************************************************!*\
  !*** e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\interface\\system\\bluetooth\\index.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\interface\\system\\bluetooth\\index.ux!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader?presets[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib/index.js?presets[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux")

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

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\interface\\system\\bluetooth\\index.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\interface\\system\\bluetooth\\index.ux!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flex": 1,
    "flexDirection": "column"
  },
  ".page-title-wrap": {
    "paddingTop": "50px",
    "paddingBottom": "80px",
    "justifyContent": "center"
  },
  ".page-title": {
    "paddingTop": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "paddingRight": "40px",
    "borderTopColor": "#bbbbbb",
    "borderRightColor": "#bbbbbb",
    "borderBottomColor": "#bbbbbb",
    "borderLeftColor": "#bbbbbb",
    "color": "#bbbbbb",
    "borderBottomWidth": "2px"
  },
  ".btn": {
    "height": "80px",
    "textAlign": "center",
    "borderRadius": "5px",
    "marginRight": "60px",
    "marginLeft": "60px",
    "marginBottom": "50px",
    "color": "#ffffff",
    "fontSize": "30px",
    "backgroundColor": "#0faeff"
  },
  ".item-container": {
    "marginBottom": "50px",
    "marginRight": "60px",
    "marginLeft": "60px",
    "flexDirection": "column"
  },
  ".item-content": {
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "paddingLeft": "30px",
    "paddingRight": "30px",
    "paddingTop": "20px",
    "paddingBottom": "20px",
    "marginBottom": "30px",
    "alignItems": "flex-start"
  },
  ".txt": {
    "paddingTop": "15px",
    "paddingBottom": "15px"
  },
  ".input-item": {
    "marginBottom": "80px",
    "flexDirection": "column"
  },
  ".input-hint": {
    "marginLeft": "30px",
    "marginBottom": "30px",
    "marginRight": "30px"
  },
  ".input-text": {
    "height": "80px",
    "lineHeight": "80px",
    "paddingLeft": "30px",
    "paddingRight": "30px",
    "marginLeft": "30px",
    "marginRight": "30px",
    "borderTopWidth": "1px",
    "borderBottomWidth": "1px",
    "borderTopColor": "#999999",
    "borderRightColor": "#999999",
    "borderBottomColor": "#999999",
    "borderLeftColor": "#999999",
    "fontSize": "30px",
    "backgroundColor": "#ffffff"
  }
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      "type": "div",
      "attr": {},
      "classList": [
        "page-title-wrap"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.componentName}
          },
          "classList": [
            "page-title"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.$t('message.interface.system.bluetooth.openBluetooth'))+'：'+(this.openBluetoothSuccess)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.openBluetooth')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "openAdapter"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.$t('message.interface.system.bluetooth.closeBluetooth'))+'：'+(this.closeBluetoothSuccess)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.closeBluetooth')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "closeAdapter"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.$t('message.interface.system.bluetooth.getAdapterState'))+'：'+(this.bluetoothstate)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.getAdapterState')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "getAdapterState"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.onAdapterState')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "onAdapterState"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "input-item"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$t('message.interface.system.bluetooth.inputUuid')}
          },
          "classList": [
            "input-hint"
          ]
        },
        {
          "type": "input",
          "attr": {
            "placeholder": function () {return this.$t('message.interface.system.bluetooth.uuid')}
          },
          "classList": [
            "input-text"
          ],
          "events": {
            "change": "oninput"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.$t('message.interface.system.bluetooth.bluetoothDiscoveryDevices'))+'：'+(this.bluetoothdevices)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.discoveryDevices')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "startBluetoothDevicesDiscovery"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.$t('message.interface.system.bluetooth.stopDiscovery'))+'：'+(this.stopDiscoverSuccess)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.stopDiscoveryDevices')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "stopBluetoothDevicesDiscovery"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.$t('message.interface.system.bluetooth.getBluetoothDevices'))+'：'+(this.bluetoothdevices)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.getBluetoothDevices')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "getBluetoothDevices"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "input-item"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$t('message.interface.system.bluetooth.inputDeviceId')}
          },
          "classList": [
            "input-hint"
          ]
        },
        {
          "type": "input",
          "attr": {
            "placeholder": "deviceId"
          },
          "classList": [
            "input-text"
          ],
          "events": {
            "change": "oninputdeviceId"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.$t('message.interface.system.bluetooth.connectBluetoothDevice'))+'：'+(this.connectionstate)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.connectBluetoothDevice')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "createBLEConnection"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.$t('message.interface.system.bluetooth.disconnectBluetooth'))+'：'+(this.closeconnectionstate)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.disconnectBluetooth')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "closeBLEConnection"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.$t('message.interface.system.bluetooth.getBluetoothDevicesService'))+'：'+(this.deviceservices)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.getBluetoothDevicesService')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "getBLEDeviceServices"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.$t('message.interface.system.bluetooth.getConnectedDevices'))+'：'+(this.connecteddevices)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.getConnectedDevices')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "getConnectedDevices"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "input-item"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$t('message.interface.system.bluetooth.inputServiceId')}
          },
          "classList": [
            "input-hint"
          ]
        },
        {
          "type": "input",
          "attr": {
            "placeholder": "serviceId"
          },
          "classList": [
            "input-text"
          ],
          "events": {
            "change": "oninputserviceId"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.$t('message.interface.system.bluetooth.getBLEDeviceCharacteristics'))+'：'+(this.servicecharacters)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.getBLEDeviceCharacteristics')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "getBLEDeviceCharacteristics"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "input-item"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$t('message.interface.system.bluetooth.inputCharacteristicId')}
          },
          "classList": [
            "input-hint"
          ]
        },
        {
          "type": "input",
          "attr": {
            "placeholder": "characteristicId"
          },
          "classList": [
            "input-text"
          ],
          "events": {
            "change": "oninputcharacteristicId"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "input-item"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$t('message.interface.system.bluetooth.toggleNotify')}
          },
          "classList": [
            "input-hint"
          ]
        },
        {
          "type": "input",
          "attr": {
            "type": "checkbox"
          },
          "classList": [
            "input-text"
          ],
          "events": {
            "change": "oninputnotifystate"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return 'notifyBLECharacteristicValueChange：'+(this.notifyBLECharacteristicValue)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.notifyBLECharacteristicValueChange')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "notifyBLECharacteristicValueChange"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.onblecharacteristicvaluechange')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "onblecharacteristicvaluechange"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.$t('message.interface.system.bluetooth.SpecifyBluetoothServiceFeatureValue'))+'：'+(this.characteristicsvalue)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.readBLECharacteristicValue')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "readBLECharacteristicValue"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "input-item"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$t('message.interface.system.bluetooth.inputByteStringValue')}
          },
          "classList": [
            "input-hint"
          ]
        },
        {
          "type": "input",
          "attr": {
            "placeholder": "byteStringValue"
          },
          "classList": [
            "input-text"
          ],
          "events": {
            "change": "oninputbyteStringValue"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.$t('message.interface.system.bluetooth.writeCharacteristicValue'))+'：'+(this.writecharacteristicsvalue)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.writeCharacteristicValue')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "writeBLECharacteristicValue"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.$t('message.interface.system.bluetooth.lowpowerBleconnectionstate'))+'：'+(this.bleconnectionstate)}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": function () {return this.$t('message.interface.system.bluetooth.watchLowpowerBleconnectionstate')}
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "onbleconnectionstatechange"
      }
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib/index.js?presets[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib?presets[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/system/bluetooth/index.ux ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.bluetooth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    componentName: 'bluetooth',
    componentData: {},
    openBluetoothSuccess: '',
    closeBluetoothSuccess: '',
    bluetoothstate: '',
    bluetoothdevices: '',
    stopDiscoverSuccess: '',
    connectionstate: '',
    closeconnectionstate: '',
    connecteddevices: '',
    notifyBLECharacteristicValue: '',
    scanedresult: '',
    deviceservices: '',
    servicecharacters: '',
    characteristicsvalue: '',
    writecharacteristicsvalue: '',
    bleconnectionstate: '',
    deviceIdInput: '',
    serviceId: '',
    serviceMac: '',
    service_psd: '',
    service_uuid: '',
    service_uuidarray: [],
    characteristics_uuid: '',
    byteStringValue: '',
    byteValue: '',
    deviceId: '',
    notifystate: false,
    ble_isonnectting: false,
    characteristics: []
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: 'bluetooth'
    });
    this.componentData = this.$t('message.interface.system.bluetooth');
  },
  openAdapter: function openAdapter() {
    var that = this;
    that.openBluetoothSuccess = "";

    _system["default"].openAdapter({
      operateAdapter: true,
      success: function success(res) {
        console.log("openBluetoothAdapter success");
        that.openBluetoothSuccess = "success";
      },
      fail: function fail(erromsg, errocode) {
        console.log("openBluetoothAdapter fail");
        that.openBluetoothSuccess = "code " + errocode + " errormsg " + erromsg;
      },
      complete: function complete() {
        console.log("openBluetoothAdapter complete");
      }
    });
  },
  closeAdapter: function closeAdapter() {
    var that = this;

    _system["default"].closeAdapter({
      operateAdapter: true,
      success: function success() {
        console.log("closeAdapter success");
        that.closeBluetoothSuccess = "success";
      },
      fail: function fail(erromsg, errocode) {
        console.log("closeAdapter fail");
        that.closeBluetoothSuccess = "code " + errocode + " errormsg " + erromsg;
      },
      complete: function complete() {
        console.log("closeAdapter complete");
      }
    });
  },
  getAdapterState: function getAdapterState() {
    var that = this;

    _system["default"].getAdapterState({
      success: function success(res) {
        console.log('getBluetoothAdapterState success', res);
        var available = res.available;
        var discovering = res.discovering;
        that.bluetoothstate = "available " + available + " discovering " + discovering;
      },
      fail: function fail(erromsg, errocode) {
        console.log("getAdapterState fail");
        that.bluetoothstate = "code " + errocode + " errormsg " + erromsg;
      },
      complete: function complete() {
        console.log("getAdapterState complete");
      }
    });
  },
  onAdapterState: function onAdapterState() {
    var that = this;

    _system["default"].onadapterstatechange = function (res) {
      console.log('adapterState changed, now is', res);
      var available = res.available;
      var discovering = res.discovering;
      that.bluetoothstate = "available " + available + " discovering " + discovering;
    };
  },
  startBluetoothDevicesDiscovery: function startBluetoothDevicesDiscovery() {
    var that = this;
    console.log('startBluetoothDevicesDiscovery begin ' + that.service_uuidarray);

    _system["default"].startDevicesDiscovery({
      services: that.service_uuidarray,
      allowDuplicatesKey: false,
      success: function success(res) {
        console.log('startBluetoothDevicesDiscovery success', res);
        that.onBluetoothDeviceFound();
      },
      fail: function fail(erromsg, errocode) {
        console.log('startBluetoothDevicesDiscovery fail ', erromsg);
        that.bluetoothdevices = "code " + errocode + " errormsg " + erromsg;
      }
    });
  },
  stopBluetoothDevicesDiscovery: function stopBluetoothDevicesDiscovery() {
    var that = this;
    console.log('stopBluetoothDevicesDiscovery begin');

    _system["default"].stopDevicesDiscovery({
      success: function success(res) {
        console.log('stopBluetoothDevicesDiscovery success ', res);
        that.stopDiscoverSuccess = "success";
      },
      fail: function fail(erromsg, errocode) {
        console.log('stopBluetoothDevicesDiscovery fail ', erromsg);
        that.stopDiscoverSuccess = "code " + errocode + " errormsg " + erromsg;
      }
    });
  },
  onBluetoothDeviceFound: function onBluetoothDeviceFound() {
    var that = this;
    var devicefound = false;
    console.log('onBluetoothDeviceFound begin');

    _system["default"].ondevicefound = function (res) {
      console.log(that.componentData.monitorSearchNewDevices, res);
      that.bluetoothdevices = JSON.stringify(res);

      if (Array.isArray(res.devices)) {
        for (var i = 0; i < res.devices.length; i++) {
          console.log(res.devices$page);

          if (res.devices[i].name === "HUAWEI Mate 20") {
            that.deviceId = res.devices[i].deviceId;
            devicefound = true;
            break;
          }
        }
      }

      if (devicefound) {
        that.stopBluetoothDevicesDiscovery();
      }
    };
  },
  getBluetoothDevices: function getBluetoothDevices() {
    var that = this;
    console.log("getBluetoothDevices begin");

    _system["default"].getDevices({
      success: function success(res) {
        console.log("getBluetoothDevices success", res);
        that.bluetoothdevices = JSON.stringify(res);

        if (res.devices[0]) {
          console.log(res.devices[0].deviceId);
          console.log(res.devices[0].name);
        }
      },
      fail: function fail(erromsg, errocode) {
        console.log("getBluetoothDevices fail ", erromsg);
        that.bluetoothdevices = "code " + errocode + " errormsg " + erromsg;
      },
      complete: function complete() {
        console.log("getBluetoothDevices complete");
      }
    });
  },
  createBLEConnection: function createBLEConnection() {
    var that = this;
    console.log("createBLEConnection begin deviceId " + that.deviceId);

    _system["default"].createBLEConnection({
      deviceId: that.deviceId,
      success: function success(res) {
        console.log("createBLEConnection success", res);
        that.connectionstate = "success";
      },
      fail: function fail(erromsg, errocode) {
        console.log("createBLEConnection fail ", erromsg);
        that.connectionstate = "code " + errocode + " errormsg " + erromsg;
      },
      complete: function complete() {
        console.log("createBLEConnection complete");
      }
    });
  },
  closeBLEConnection: function closeBLEConnection() {
    var that = this;
    console.log("closeBLEConnection  begin deviceId " + that.deviceId);

    _system["default"].closeBLEConnection({
      deviceId: that.deviceId,
      success: function success(res) {
        console.log("closeBLEConnection  success", res);
        that.closeconnectionstate = "success";
      },
      fail: function fail(erromsg, errocode) {
        console.log("closeBLEConnection  fail ", erromsg);
        that.closeconnectionstate = "code " + errocode + " errormsg " + erromsg;
      },
      complete: function complete() {
        console.log("closeBLEConnection  complete");
      }
    });
  },
  getBLEDeviceServices: function getBLEDeviceServices() {
    var that = this;
    console.log("getBLEDeviceServices  begin deviceId " + that.deviceId);

    _system["default"].getBLEDeviceServices({
      deviceId: that.deviceId,
      success: function success(res) {
        console.log("getBLEDeviceServices  success", res);
        that.deviceservices = JSON.stringify(res);

        if (Array.isArray(res.services)) {
          for (var i = 0; i < res.services.length; i++) {
            console.log(res.services[i].uuid);

            if (res.services[i].isPrimary) {
              that.service_uuid = res.services[i].uuid;
              console.log("getBLEDeviceServices  service_uuid ", that.service_uuid);
              break;
            }
          }
        }
      },
      fail: function fail(erromsg, errocode) {
        console.log("getBLEDeviceServices  fail ", erromsg);
        that.deviceservices = "code " + errocode + " errormsg " + erromsg;
      },
      complete: function complete() {
        console.log("getBLEDeviceServices  complete");
      }
    });
  },
  getConnectedDevices: function getConnectedDevices() {
    var that = this;
    var services = [];
    console.log("getConnectedDevices begin");

    _system["default"].getConnectedDevices({
      services: that.service_uuidarray,
      success: function success(res) {
        console.log("getConnectedDevices success", res);
        that.connecteddevices = JSON.stringify(res);

        if (res.devices[0]) {
          console.log(res.devices[0].deviceId);
          console.log(res.devices[0].name);
        }
      },
      fail: function fail(erromsg, errocode) {
        console.log("getConnectedDevices fail ", erromsg);
        that.connecteddevices = "code " + errocode + " errormsg " + erromsg;
      },
      complete: function complete() {
        console.log("getBluetoothDevices complete");
      }
    });
  },
  getBLEDeviceCharacteristics: function getBLEDeviceCharacteristics() {
    var that = this;
    console.log("getBLEDeviceCharacteristics  begin deviceId " + that.deviceId);

    _system["default"].getBLEDeviceCharacteristics({
      deviceId: that.deviceId,
      serviceId: that.service_uuid,
      success: function success(res) {
        console.log("getBLEDeviceCharacteristics  success", res);
        that.servicecharacters = JSON.stringify(res);

        if (Array.isArray(res.characteristics)) {
          for (var i = 0; i < res.characteristics.length; i++) {
            console.log(res.characteristics[i].uuid);

            if (res.characteristics[i].properties.write) {
              that.characteristics_uuid = res.characteristics[i].uuid;
              console.log("getBLEDeviceCharacteristics  characteristics_uuid ", that.characteristics_uuid);
              break;
            }
          }
        }
      },
      fail: function fail(erromsg, errocode) {
        console.log("getBLEDeviceCharacteristics  fail ", erromsg);
        that.servicecharacters = "code " + errocode + " errormsg " + erromsg;
      },
      complete: function complete() {
        console.log("getBLEDeviceCharacteristics  complete");
      }
    });
  },
  readBLECharacteristicValue: function readBLECharacteristicValue() {
    var that = this;
    console.log("readBLECharacteristicValue  begin deviceId " + that.deviceId);
    console.log("readBLECharacteristicValue  begin serviceId " + that.service_uuid);
    console.log("readBLECharacteristicValue  begin characteristicId " + that.characteristics_uuid);

    _system["default"].readBLECharacteristicValue({
      deviceId: that.deviceId,
      serviceId: that.service_uuid,
      characteristicId: that.characteristics_uuid,
      success: function success(res) {
        console.log("readBLECharacteristicValue  success", res);
      },
      fail: function fail(erromsg, errocode) {
        console.log("readBLECharacteristicValue  fail ", "code " + errocode + " errormsg " + erromsg);
        that.characteristicsvalue = "code " + errocode + " errormsg " + erromsg;
      },
      complete: function complete() {
        console.log("readBLECharacteristicValue  complete");
      }
    });
  },
  writeBLECharacteristicValue: function writeBLECharacteristicValue() {
    var that = this;
    console.log("writeBLECharacteristicValue  begin deviceId " + that.deviceId);
    console.log("writeBLECharacteristicValue  begin serviceId " + that.service_uuid);
    console.log("writeBLECharacteristicValue  begin characteristicId " + that.characteristics_uuid);
    var buffer = new ArrayBuffer(1);
    var dataView = new DataView(buffer);
    dataView.setUint8(0, 0);
    that.byteValue = that.stringToByte(that.byteStringValue);

    _system["default"].writeBLECharacteristicValue({
      deviceId: that.deviceId,
      serviceId: that.service_uuid,
      characteristicId: that.characteristics_uuid,
      value: that.byteStringValue,
      success: function success(res) {
        console.log("writeBLECharacteristicValue  success", res);
        that.writecharacteristicsvalue = "success";
      },
      fail: function fail(erromsg, errocode) {
        console.log("writeBLECharacteristicValue  fail ", erromsg);
        that.writecharacteristicsvalue = "code " + errocode + " errormsg " + erromsg;
      },
      complete: function complete() {
        console.log("writeBLECharacteristicValue  complete");
      }
    });
  },
  notifyBLECharacteristicValueChange: function notifyBLECharacteristicValueChange() {
    var that = this;
    console.log("notifyBLECharacteristicValueChange  begin deviceId " + that.deviceId);
    console.log("notifyBLECharacteristicValueChange  begin serviceId " + that.service_uuid);
    console.log("notifyBLECharacteristicValueChange  begin characteristicId " + that.characteristics_uuid);

    _system["default"].notifyBLECharacteristicValueChange({
      state: that.notifystate,
      deviceId: that.deviceId,
      serviceId: that.service_uuid,
      characteristicId: that.characteristics_uuid,
      success: function success(res) {
        console.log("notifyBLECharacteristicValueChange  success", res);
        that.notifyBLECharacteristicValue = "success";
      },
      fail: function fail(erromsg, errocode) {
        console.log("notifyBLECharacteristicValueChange  fail ", erromsg);
        that.notifyBLECharacteristicValue = "code " + errocode + " errormsg " + erromsg;
      },
      complete: function complete() {
        console.log("notifyBLECharacteristicValueChange  complete");
      }
    });
  },
  onblecharacteristicvaluechange: function onblecharacteristicvaluechange() {
    var that = this;
    console.log('onblecharacteristicvaluechange  begin');

    _system["default"].onblecharacteristicvaluechange = function (res) {
      console.log(this.componentData.monitorCharacteristicChange, res);
      that.characteristicsvalue = JSON.stringify(res);
    };
  },
  onbleconnectionstatechange: function onbleconnectionstatechange() {
    var that = this;
    console.log('onbleconnectionstatechange  begin');

    _system["default"].onbleconnectionstatechange = function (res) {
      console.log(this.componentData.monitorConnectChange, res);
      that.bleconnectionstate = JSON.stringify(res);
    };
  },
  stringToByte: function stringToByte(str) {
    var bytes = [];
    var len, c;
    len = str.length;

    for (var i = 0; i < len; i++) {
      c = str.charCodeAt(i);

      if (c >= 0x010000 && c <= 0x10FFFF) {
        bytes.push(c >> 18 & 0x07 | 0xF0);
        bytes.push(c >> 12 & 0x3F | 0x80);
        bytes.push(c >> 6 & 0x3F | 0x80);
        bytes.push(c & 0x3F | 0x80);
      } else if (c >= 0x000800 && c <= 0x00FFFF) {
        bytes.push(c >> 12 & 0x0F | 0xE0);
        bytes.push(c >> 6 & 0x3F | 0x80);
        bytes.push(c & 0x3F | 0x80);
      } else if (c >= 0x000080 && c <= 0x0007FF) {
        bytes.push(c >> 6 & 0x1F | 0xC0);
        bytes.push(c & 0x3F | 0x80);
      } else {
        bytes.push(c & 0xFF);
      }
    }

    return bytes;
  },
  oninput: function oninput(event) {
    var self = this;
    var arra = [];
    arra.push(event.value);
    self.service_uuidarray = arra;
  },
  oninputdeviceId: function oninputdeviceId(event) {
    var self = this;
    self.deviceId = event.value;
  },
  oninputserviceId: function oninputserviceId(event) {
    var self = this;
    self.service_uuid = event.value;
  },
  oninputcharacteristicId: function oninputcharacteristicId(event) {
    var self = this;
    self.characteristics_uuid = event.value;
  },
  oninputbyteStringValue: function oninputbyteStringValue(event) {
    var self = this;
    self.byteStringValue = event.value;
  },
  oninputnotifystate: function oninputnotifystate(event) {
    var self = this;
    self.notifystate = event.checked;
    console.log('notifystate ' + self.notifystate);
  }
};
exports["default"] = _default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXGludGVyZmFjZVxcc3lzdGVtXFxibHVldG9vdGhcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9lOi9Xb3Jrc3BhY2VIdWF3ZWkvVGVzdE15UGhvbmUvY29tLndpbGRkZXYudGVzdG15cGhvbmUvc3JjL2ludGVyZmFjZS9zeXN0ZW0vYmx1ZXRvb3RoL2luZGV4LnV4Iiwid2VicGFjazovLy9lOi9Xb3Jrc3BhY2VIdWF3ZWkvVGVzdE15UGhvbmUvY29tLndpbGRkZXYudGVzdG15cGhvbmUvc3JjL2ludGVyZmFjZS9zeXN0ZW0vYmx1ZXRvb3RoL2luZGV4LnV4PzU1NjUiLCJ3ZWJwYWNrOi8vL2U6L1dvcmtzcGFjZUh1YXdlaS9UZXN0TXlQaG9uZS9jb20ud2lsZGRldi50ZXN0bXlwaG9uZS9zcmMvaW50ZXJmYWNlL3N5c3RlbS9ibHVldG9vdGgvaW5kZXgudXg/MWNmYyIsIndlYnBhY2s6Ly8vZTovV29ya3NwYWNlSHVhd2VpL1Rlc3RNeVBob25lL2NvbS53aWxkZGV2LnRlc3RteXBob25lL3NyYy9pbnRlcmZhY2Uvc3lzdGVtL2JsdWV0b290aC9pbmRleC51eD84ZjY3Il0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uL1dvcmtzcGFjZUh1YXdlaS9UZXN0TXlQaG9uZS9jb20ud2lsZGRldi50ZXN0bXlwaG9uZS9zcmMvaW50ZXJmYWNlL3N5c3RlbS9ibHVldG9vdGgvaW5kZXgudXhcIik7XG4iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9pbmRleC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxXb3Jrc3BhY2VIdWF3ZWlcXFxcVGVzdE15UGhvbmVcXFxcY29tLndpbGRkZXYudGVzdG15cGhvbmVcXFxcc3JjXFxcXGludGVyZmFjZVxcXFxzeXN0ZW1cXFxcYmx1ZXRvb3RoXFxcXGluZGV4LnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXFdvcmtzcGFjZUh1YXdlaVxcXFxUZXN0TXlQaG9uZVxcXFxjb20ud2lsZGRldi50ZXN0bXlwaG9uZVxcXFxzcmNcXFxcaW50ZXJmYWNlXFxcXHN5c3RlbVxcXFxibHVldG9vdGhcXFxcaW5kZXgudXghLi9pbmRleC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1jb21waWxlclxcXFxqc3gtbG9hZGVyLmpzJnBsdWdpbnNbXT1lOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcyZwbHVnaW5zW109ZTpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2luZGV4LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzIuNS4yLVN0YWJsZS4zMDAnfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5wYWdlLXRpdGxlLXdyYXBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI4MHB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnBhZ2UtdGl0bGVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcHhcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNiYmJiYmJcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiY29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjJweFwiXG4gIH0sXG4gIFwiLmJ0blwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI2MHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNjBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwZmFlZmZcIlxuICB9LFxuICBcIi5pdGVtLWNvbnRhaW5lclwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjYwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI2MHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuaXRlbS1jb250ZW50XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiLnR4dFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE1cHhcIlxuICB9LFxuICBcIi5pbnB1dC1pdGVtXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjgwcHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5pbnB1dC1oaW50XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcHhcIlxuICB9LFxuICBcIi5pbnB1dC10ZXh0XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjgwcHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInBhZ2UtdGl0bGUtd3JhcFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNvbXBvbmVudE5hbWV9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInBhZ2UtdGl0bGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaXRlbS1jb250ZW50XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5zeXN0ZW0uYmx1ZXRvb3RoLm9wZW5CbHVldG9vdGgnKSkrJ++8micrKHRoaXMub3BlbkJsdWV0b290aFN1Y2Nlc3MpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0eHRcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2Uuc3lzdGVtLmJsdWV0b290aC5vcGVuQmx1ZXRvb3RoJyl9XG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ0blwiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib3BlbkFkYXB0ZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaXRlbS1jb250ZW50XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5zeXN0ZW0uYmx1ZXRvb3RoLmNsb3NlQmx1ZXRvb3RoJykpKyfvvJonKyh0aGlzLmNsb3NlQmx1ZXRvb3RoU3VjY2Vzcyl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInR4dFwiXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5zeXN0ZW0uYmx1ZXRvb3RoLmNsb3NlQmx1ZXRvb3RoJyl9XG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ0blwiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xvc2VBZGFwdGVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIml0ZW0tY29udGVudFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2Uuc3lzdGVtLmJsdWV0b290aC5nZXRBZGFwdGVyU3RhdGUnKSkrJ++8micrKHRoaXMuYmx1ZXRvb3Roc3RhdGUpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0eHRcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2Uuc3lzdGVtLmJsdWV0b290aC5nZXRBZGFwdGVyU3RhdGUnKX1cbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnRuXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJnZXRBZGFwdGVyU3RhdGVcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2Uuc3lzdGVtLmJsdWV0b290aC5vbkFkYXB0ZXJTdGF0ZScpfVxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidG5cIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uQWRhcHRlclN0YXRlXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImlucHV0LWl0ZW1cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2Uuc3lzdGVtLmJsdWV0b290aC5pbnB1dFV1aWQnKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW5wdXQtaGludFwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGgudXVpZCcpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpbnB1dC10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2hhbmdlXCI6IFwib25pbnB1dFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpdGVtLWNvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGguYmx1ZXRvb3RoRGlzY292ZXJ5RGV2aWNlcycpKSsn77yaJysodGhpcy5ibHVldG9vdGhkZXZpY2VzKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGguZGlzY292ZXJ5RGV2aWNlcycpfVxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidG5cIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcInN0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpdGVtLWNvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGguc3RvcERpc2NvdmVyeScpKSsn77yaJysodGhpcy5zdG9wRGlzY292ZXJTdWNjZXNzKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGguc3RvcERpc2NvdmVyeURldmljZXMnKX1cbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnRuXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJzdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpdGVtLWNvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGguZ2V0Qmx1ZXRvb3RoRGV2aWNlcycpKSsn77yaJysodGhpcy5ibHVldG9vdGhkZXZpY2VzKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGguZ2V0Qmx1ZXRvb3RoRGV2aWNlcycpfVxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidG5cIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImdldEJsdWV0b290aERldmljZXNcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaW5wdXQtaXRlbVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5zeXN0ZW0uYmx1ZXRvb3RoLmlucHV0RGV2aWNlSWQnKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW5wdXQtaGludFwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcImRldmljZUlkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW5wdXQtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNoYW5nZVwiOiBcIm9uaW5wdXRkZXZpY2VJZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpdGVtLWNvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGguY29ubmVjdEJsdWV0b290aERldmljZScpKSsn77yaJysodGhpcy5jb25uZWN0aW9uc3RhdGUpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0eHRcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2Uuc3lzdGVtLmJsdWV0b290aC5jb25uZWN0Qmx1ZXRvb3RoRGV2aWNlJyl9XG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ0blwiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY3JlYXRlQkxFQ29ubmVjdGlvblwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpdGVtLWNvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGguZGlzY29ubmVjdEJsdWV0b290aCcpKSsn77yaJysodGhpcy5jbG9zZWNvbm5lY3Rpb25zdGF0ZSl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInR4dFwiXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5zeXN0ZW0uYmx1ZXRvb3RoLmRpc2Nvbm5lY3RCbHVldG9vdGgnKX1cbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnRuXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbG9zZUJMRUNvbm5lY3Rpb25cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaXRlbS1jb250ZW50XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5zeXN0ZW0uYmx1ZXRvb3RoLmdldEJsdWV0b290aERldmljZXNTZXJ2aWNlJykpKyfvvJonKyh0aGlzLmRldmljZXNlcnZpY2VzKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGguZ2V0Qmx1ZXRvb3RoRGV2aWNlc1NlcnZpY2UnKX1cbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnRuXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJnZXRCTEVEZXZpY2VTZXJ2aWNlc1wiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpdGVtLWNvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGguZ2V0Q29ubmVjdGVkRGV2aWNlcycpKSsn77yaJysodGhpcy5jb25uZWN0ZWRkZXZpY2VzKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGguZ2V0Q29ubmVjdGVkRGV2aWNlcycpfVxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidG5cIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImdldENvbm5lY3RlZERldmljZXNcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaW5wdXQtaXRlbVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5zeXN0ZW0uYmx1ZXRvb3RoLmlucHV0U2VydmljZUlkJyl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImlucHV0LWhpbnRcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJzZXJ2aWNlSWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpbnB1dC10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2hhbmdlXCI6IFwib25pbnB1dHNlcnZpY2VJZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpdGVtLWNvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGguZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzJykpKyfvvJonKyh0aGlzLnNlcnZpY2VjaGFyYWN0ZXJzKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGguZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzJyl9XG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ0blwiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImlucHV0LWl0ZW1cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2Uuc3lzdGVtLmJsdWV0b290aC5pbnB1dENoYXJhY3RlcmlzdGljSWQnKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW5wdXQtaGludFwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcImNoYXJhY3RlcmlzdGljSWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpbnB1dC10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2hhbmdlXCI6IFwib25pbnB1dGNoYXJhY3RlcmlzdGljSWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaW5wdXQtaXRlbVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5zeXN0ZW0uYmx1ZXRvb3RoLnRvZ2dsZU5vdGlmeScpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpbnB1dC1oaW50XCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImlucHV0LXRleHRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjaGFuZ2VcIjogXCJvbmlucHV0bm90aWZ5c3RhdGVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaXRlbS1jb250ZW50XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICdub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdl77yaJysodGhpcy5ub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGgubm90aWZ5QkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZScpfVxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidG5cIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm5vdGlmeUJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2VcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2Uuc3lzdGVtLmJsdWV0b290aC5vbmJsZWNoYXJhY3RlcmlzdGljdmFsdWVjaGFuZ2UnKX1cbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnRuXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmJsZWNoYXJhY3RlcmlzdGljdmFsdWVjaGFuZ2VcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaXRlbS1jb250ZW50XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5zeXN0ZW0uYmx1ZXRvb3RoLlNwZWNpZnlCbHVldG9vdGhTZXJ2aWNlRmVhdHVyZVZhbHVlJykpKyfvvJonKyh0aGlzLmNoYXJhY3RlcmlzdGljc3ZhbHVlKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGgucmVhZEJMRUNoYXJhY3RlcmlzdGljVmFsdWUnKX1cbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnRuXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJyZWFkQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpbnB1dC1pdGVtXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGguaW5wdXRCeXRlU3RyaW5nVmFsdWUnKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW5wdXQtaGludFwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcImJ5dGVTdHJpbmdWYWx1ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImlucHV0LXRleHRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjaGFuZ2VcIjogXCJvbmlucHV0Ynl0ZVN0cmluZ1ZhbHVlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIml0ZW0tY29udGVudFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2Uuc3lzdGVtLmJsdWV0b290aC53cml0ZUNoYXJhY3RlcmlzdGljVmFsdWUnKSkrJ++8micrKHRoaXMud3JpdGVjaGFyYWN0ZXJpc3RpY3N2YWx1ZSl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInR4dFwiXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5zeXN0ZW0uYmx1ZXRvb3RoLndyaXRlQ2hhcmFjdGVyaXN0aWNWYWx1ZScpfVxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidG5cIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIndyaXRlQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpdGVtLWNvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGgubG93cG93ZXJCbGVjb25uZWN0aW9uc3RhdGUnKSkrJ++8micrKHRoaXMuYmxlY29ubmVjdGlvbnN0YXRlKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGgud2F0Y2hMb3dwb3dlckJsZWNvbm5lY3Rpb25zdGF0ZScpfVxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidG5cIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uYmxlY29ubmVjdGlvbnN0YXRlY2hhbmdlXCJcbiAgICAgIH1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uYmx1ZXRvb3RoXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZGF0YToge1xuICAgIGNvbXBvbmVudE5hbWU6ICdibHVldG9vdGgnLFxuICAgIGNvbXBvbmVudERhdGE6IHt9LFxuICAgIG9wZW5CbHVldG9vdGhTdWNjZXNzOiAnJyxcbiAgICBjbG9zZUJsdWV0b290aFN1Y2Nlc3M6ICcnLFxuICAgIGJsdWV0b290aHN0YXRlOiAnJyxcbiAgICBibHVldG9vdGhkZXZpY2VzOiAnJyxcbiAgICBzdG9wRGlzY292ZXJTdWNjZXNzOiAnJyxcbiAgICBjb25uZWN0aW9uc3RhdGU6ICcnLFxuICAgIGNsb3NlY29ubmVjdGlvbnN0YXRlOiAnJyxcbiAgICBjb25uZWN0ZWRkZXZpY2VzOiAnJyxcbiAgICBub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlOiAnJyxcbiAgICBzY2FuZWRyZXN1bHQ6ICcnLFxuICAgIGRldmljZXNlcnZpY2VzOiAnJyxcbiAgICBzZXJ2aWNlY2hhcmFjdGVyczogJycsXG4gICAgY2hhcmFjdGVyaXN0aWNzdmFsdWU6ICcnLFxuICAgIHdyaXRlY2hhcmFjdGVyaXN0aWNzdmFsdWU6ICcnLFxuICAgIGJsZWNvbm5lY3Rpb25zdGF0ZTogJycsXG4gICAgZGV2aWNlSWRJbnB1dDogJycsXG4gICAgc2VydmljZUlkOiAnJyxcbiAgICBzZXJ2aWNlTWFjOiAnJyxcbiAgICBzZXJ2aWNlX3BzZDogJycsXG4gICAgc2VydmljZV91dWlkOiAnJyxcbiAgICBzZXJ2aWNlX3V1aWRhcnJheTogW10sXG4gICAgY2hhcmFjdGVyaXN0aWNzX3V1aWQ6ICcnLFxuICAgIGJ5dGVTdHJpbmdWYWx1ZTogJycsXG4gICAgYnl0ZVZhbHVlOiAnJyxcbiAgICBkZXZpY2VJZDogJycsXG4gICAgbm90aWZ5c3RhdGU6IGZhbHNlLFxuICAgIGJsZV9pc29ubmVjdHRpbmc6IGZhbHNlLFxuICAgIGNoYXJhY3RlcmlzdGljczogW11cbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICB0ZXh0OiAnYmx1ZXRvb3RoJ1xuICAgIH0pO1xuICAgIHRoaXMuY29tcG9uZW50RGF0YSA9IHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnN5c3RlbS5ibHVldG9vdGgnKTtcbiAgfSxcbiAgb3BlbkFkYXB0ZXI6IGZ1bmN0aW9uIG9wZW5BZGFwdGVyKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB0aGF0Lm9wZW5CbHVldG9vdGhTdWNjZXNzID0gXCJcIjtcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLm9wZW5BZGFwdGVyKHtcbiAgICAgIG9wZXJhdGVBZGFwdGVyOiB0cnVlLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvcGVuQmx1ZXRvb3RoQWRhcHRlciBzdWNjZXNzXCIpO1xuICAgICAgICB0aGF0Lm9wZW5CbHVldG9vdGhTdWNjZXNzID0gXCJzdWNjZXNzXCI7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW5CbHVldG9vdGhBZGFwdGVyIGZhaWxcIik7XG4gICAgICAgIHRoYXQub3BlbkJsdWV0b290aFN1Y2Nlc3MgPSBcImNvZGUgXCIgKyBlcnJvY29kZSArIFwiIGVycm9ybXNnIFwiICsgZXJyb21zZztcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib3BlbkJsdWV0b290aEFkYXB0ZXIgY29tcGxldGVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGNsb3NlQWRhcHRlcjogZnVuY3Rpb24gY2xvc2VBZGFwdGVyKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmNsb3NlQWRhcHRlcih7XG4gICAgICBvcGVyYXRlQWRhcHRlcjogdHJ1ZSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2VBZGFwdGVyIHN1Y2Nlc3NcIik7XG4gICAgICAgIHRoYXQuY2xvc2VCbHVldG9vdGhTdWNjZXNzID0gXCJzdWNjZXNzXCI7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsb3NlQWRhcHRlciBmYWlsXCIpO1xuICAgICAgICB0aGF0LmNsb3NlQmx1ZXRvb3RoU3VjY2VzcyA9IFwiY29kZSBcIiArIGVycm9jb2RlICsgXCIgZXJyb3Jtc2cgXCIgKyBlcnJvbXNnO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbG9zZUFkYXB0ZXIgY29tcGxldGVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGdldEFkYXB0ZXJTdGF0ZTogZnVuY3Rpb24gZ2V0QWRhcHRlclN0YXRlKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmdldEFkYXB0ZXJTdGF0ZSh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0Qmx1ZXRvb3RoQWRhcHRlclN0YXRlIHN1Y2Nlc3MnLCByZXMpO1xuICAgICAgICB2YXIgYXZhaWxhYmxlID0gcmVzLmF2YWlsYWJsZTtcbiAgICAgICAgdmFyIGRpc2NvdmVyaW5nID0gcmVzLmRpc2NvdmVyaW5nO1xuICAgICAgICB0aGF0LmJsdWV0b290aHN0YXRlID0gXCJhdmFpbGFibGUgXCIgKyBhdmFpbGFibGUgKyBcIiBkaXNjb3ZlcmluZyBcIiArIGRpc2NvdmVyaW5nO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJyb21zZywgZXJyb2NvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRBZGFwdGVyU3RhdGUgZmFpbFwiKTtcbiAgICAgICAgdGhhdC5ibHVldG9vdGhzdGF0ZSA9IFwiY29kZSBcIiArIGVycm9jb2RlICsgXCIgZXJyb3Jtc2cgXCIgKyBlcnJvbXNnO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRBZGFwdGVyU3RhdGUgY29tcGxldGVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIG9uQWRhcHRlclN0YXRlOiBmdW5jdGlvbiBvbkFkYXB0ZXJTdGF0ZSgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5vbmFkYXB0ZXJzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdhZGFwdGVyU3RhdGUgY2hhbmdlZCwgbm93IGlzJywgcmVzKTtcbiAgICAgIHZhciBhdmFpbGFibGUgPSByZXMuYXZhaWxhYmxlO1xuICAgICAgdmFyIGRpc2NvdmVyaW5nID0gcmVzLmRpc2NvdmVyaW5nO1xuICAgICAgdGhhdC5ibHVldG9vdGhzdGF0ZSA9IFwiYXZhaWxhYmxlIFwiICsgYXZhaWxhYmxlICsgXCIgZGlzY292ZXJpbmcgXCIgKyBkaXNjb3ZlcmluZztcbiAgICB9O1xuICB9LFxuICBzdGFydEJsdWV0b290aERldmljZXNEaXNjb3Zlcnk6IGZ1bmN0aW9uIHN0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSBiZWdpbiAnICsgdGhhdC5zZXJ2aWNlX3V1aWRhcnJheSk7XG5cbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5zdGFydERldmljZXNEaXNjb3Zlcnkoe1xuICAgICAgc2VydmljZXM6IHRoYXQuc2VydmljZV91dWlkYXJyYXksXG4gICAgICBhbGxvd0R1cGxpY2F0ZXNLZXk6IGZhbHNlLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSBzdWNjZXNzJywgcmVzKTtcbiAgICAgICAgdGhhdC5vbkJsdWV0b290aERldmljZUZvdW5kKCk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnRCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5IGZhaWwgJywgZXJyb21zZyk7XG4gICAgICAgIHRoYXQuYmx1ZXRvb3RoZGV2aWNlcyA9IFwiY29kZSBcIiArIGVycm9jb2RlICsgXCIgZXJyb3Jtc2cgXCIgKyBlcnJvbXNnO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBzdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeTogZnVuY3Rpb24gc3RvcEJsdWV0b290aERldmljZXNEaXNjb3ZlcnkoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKCdzdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSBiZWdpbicpO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uc3RvcERldmljZXNEaXNjb3Zlcnkoe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N0b3BCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5IHN1Y2Nlc3MgJywgcmVzKTtcbiAgICAgICAgdGhhdC5zdG9wRGlzY292ZXJTdWNjZXNzID0gXCJzdWNjZXNzXCI7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3RvcEJsdWV0b290aERldmljZXNEaXNjb3ZlcnkgZmFpbCAnLCBlcnJvbXNnKTtcbiAgICAgICAgdGhhdC5zdG9wRGlzY292ZXJTdWNjZXNzID0gXCJjb2RlIFwiICsgZXJyb2NvZGUgKyBcIiBlcnJvcm1zZyBcIiArIGVycm9tc2c7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIG9uQmx1ZXRvb3RoRGV2aWNlRm91bmQ6IGZ1bmN0aW9uIG9uQmx1ZXRvb3RoRGV2aWNlRm91bmQoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBkZXZpY2Vmb3VuZCA9IGZhbHNlO1xuICAgIGNvbnNvbGUubG9nKCdvbkJsdWV0b290aERldmljZUZvdW5kIGJlZ2luJyk7XG5cbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5vbmRldmljZWZvdW5kID0gZnVuY3Rpb24gKHJlcykge1xuICAgICAgY29uc29sZS5sb2codGhhdC5jb21wb25lbnREYXRhLm1vbml0b3JTZWFyY2hOZXdEZXZpY2VzLCByZXMpO1xuICAgICAgdGhhdC5ibHVldG9vdGhkZXZpY2VzID0gSlNPTi5zdHJpbmdpZnkocmVzKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzLmRldmljZXMpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLmRldmljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGV2aWNlcyRwYWdlKTtcblxuICAgICAgICAgIGlmIChyZXMuZGV2aWNlc1tpXS5uYW1lID09PSBcIkhVQVdFSSBNYXRlIDIwXCIpIHtcbiAgICAgICAgICAgIHRoYXQuZGV2aWNlSWQgPSByZXMuZGV2aWNlc1tpXS5kZXZpY2VJZDtcbiAgICAgICAgICAgIGRldmljZWZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGV2aWNlZm91bmQpIHtcbiAgICAgICAgdGhhdC5zdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSgpO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGdldEJsdWV0b290aERldmljZXM6IGZ1bmN0aW9uIGdldEJsdWV0b290aERldmljZXMoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0Qmx1ZXRvb3RoRGV2aWNlcyBiZWdpblwiKTtcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmdldERldmljZXMoe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRCbHVldG9vdGhEZXZpY2VzIHN1Y2Nlc3NcIiwgcmVzKTtcbiAgICAgICAgdGhhdC5ibHVldG9vdGhkZXZpY2VzID0gSlNPTi5zdHJpbmdpZnkocmVzKTtcblxuICAgICAgICBpZiAocmVzLmRldmljZXNbMF0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGV2aWNlc1swXS5kZXZpY2VJZCk7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRldmljZXNbMF0ubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm9tc2csIGVycm9jb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0Qmx1ZXRvb3RoRGV2aWNlcyBmYWlsIFwiLCBlcnJvbXNnKTtcbiAgICAgICAgdGhhdC5ibHVldG9vdGhkZXZpY2VzID0gXCJjb2RlIFwiICsgZXJyb2NvZGUgKyBcIiBlcnJvcm1zZyBcIiArIGVycm9tc2c7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldEJsdWV0b290aERldmljZXMgY29tcGxldGVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGNyZWF0ZUJMRUNvbm5lY3Rpb246IGZ1bmN0aW9uIGNyZWF0ZUJMRUNvbm5lY3Rpb24oKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlQkxFQ29ubmVjdGlvbiBiZWdpbiBkZXZpY2VJZCBcIiArIHRoYXQuZGV2aWNlSWQpO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uY3JlYXRlQkxFQ29ubmVjdGlvbih7XG4gICAgICBkZXZpY2VJZDogdGhhdC5kZXZpY2VJZCxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlQkxFQ29ubmVjdGlvbiBzdWNjZXNzXCIsIHJlcyk7XG4gICAgICAgIHRoYXQuY29ubmVjdGlvbnN0YXRlID0gXCJzdWNjZXNzXCI7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZUJMRUNvbm5lY3Rpb24gZmFpbCBcIiwgZXJyb21zZyk7XG4gICAgICAgIHRoYXQuY29ubmVjdGlvbnN0YXRlID0gXCJjb2RlIFwiICsgZXJyb2NvZGUgKyBcIiBlcnJvcm1zZyBcIiArIGVycm9tc2c7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZUJMRUNvbm5lY3Rpb24gY29tcGxldGVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGNsb3NlQkxFQ29ubmVjdGlvbjogZnVuY3Rpb24gY2xvc2VCTEVDb25uZWN0aW9uKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBjb25zb2xlLmxvZyhcImNsb3NlQkxFQ29ubmVjdGlvbiAgYmVnaW4gZGV2aWNlSWQgXCIgKyB0aGF0LmRldmljZUlkKTtcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmNsb3NlQkxFQ29ubmVjdGlvbih7XG4gICAgICBkZXZpY2VJZDogdGhhdC5kZXZpY2VJZCxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2VCTEVDb25uZWN0aW9uICBzdWNjZXNzXCIsIHJlcyk7XG4gICAgICAgIHRoYXQuY2xvc2Vjb25uZWN0aW9uc3RhdGUgPSBcInN1Y2Nlc3NcIjtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm9tc2csIGVycm9jb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2VCTEVDb25uZWN0aW9uICBmYWlsIFwiLCBlcnJvbXNnKTtcbiAgICAgICAgdGhhdC5jbG9zZWNvbm5lY3Rpb25zdGF0ZSA9IFwiY29kZSBcIiArIGVycm9jb2RlICsgXCIgZXJyb3Jtc2cgXCIgKyBlcnJvbXNnO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbG9zZUJMRUNvbm5lY3Rpb24gIGNvbXBsZXRlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBnZXRCTEVEZXZpY2VTZXJ2aWNlczogZnVuY3Rpb24gZ2V0QkxFRGV2aWNlU2VydmljZXMoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0QkxFRGV2aWNlU2VydmljZXMgIGJlZ2luIGRldmljZUlkIFwiICsgdGhhdC5kZXZpY2VJZCk7XG5cbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5nZXRCTEVEZXZpY2VTZXJ2aWNlcyh7XG4gICAgICBkZXZpY2VJZDogdGhhdC5kZXZpY2VJZCxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0QkxFRGV2aWNlU2VydmljZXMgIHN1Y2Nlc3NcIiwgcmVzKTtcbiAgICAgICAgdGhhdC5kZXZpY2VzZXJ2aWNlcyA9IEpTT04uc3RyaW5naWZ5KHJlcyk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzLnNlcnZpY2VzKSkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLnNlcnZpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuc2VydmljZXNbaV0udXVpZCk7XG5cbiAgICAgICAgICAgIGlmIChyZXMuc2VydmljZXNbaV0uaXNQcmltYXJ5KSB7XG4gICAgICAgICAgICAgIHRoYXQuc2VydmljZV91dWlkID0gcmVzLnNlcnZpY2VzW2ldLnV1aWQ7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0QkxFRGV2aWNlU2VydmljZXMgIHNlcnZpY2VfdXVpZCBcIiwgdGhhdC5zZXJ2aWNlX3V1aWQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm9tc2csIGVycm9jb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0QkxFRGV2aWNlU2VydmljZXMgIGZhaWwgXCIsIGVycm9tc2cpO1xuICAgICAgICB0aGF0LmRldmljZXNlcnZpY2VzID0gXCJjb2RlIFwiICsgZXJyb2NvZGUgKyBcIiBlcnJvcm1zZyBcIiArIGVycm9tc2c7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldEJMRURldmljZVNlcnZpY2VzICBjb21wbGV0ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZ2V0Q29ubmVjdGVkRGV2aWNlczogZnVuY3Rpb24gZ2V0Q29ubmVjdGVkRGV2aWNlcygpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIHNlcnZpY2VzID0gW107XG4gICAgY29uc29sZS5sb2coXCJnZXRDb25uZWN0ZWREZXZpY2VzIGJlZ2luXCIpO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uZ2V0Q29ubmVjdGVkRGV2aWNlcyh7XG4gICAgICBzZXJ2aWNlczogdGhhdC5zZXJ2aWNlX3V1aWRhcnJheSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0Q29ubmVjdGVkRGV2aWNlcyBzdWNjZXNzXCIsIHJlcyk7XG4gICAgICAgIHRoYXQuY29ubmVjdGVkZGV2aWNlcyA9IEpTT04uc3RyaW5naWZ5KHJlcyk7XG5cbiAgICAgICAgaWYgKHJlcy5kZXZpY2VzWzBdKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRldmljZXNbMF0uZGV2aWNlSWQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kZXZpY2VzWzBdLm5hbWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldENvbm5lY3RlZERldmljZXMgZmFpbCBcIiwgZXJyb21zZyk7XG4gICAgICAgIHRoYXQuY29ubmVjdGVkZGV2aWNlcyA9IFwiY29kZSBcIiArIGVycm9jb2RlICsgXCIgZXJyb3Jtc2cgXCIgKyBlcnJvbXNnO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRCbHVldG9vdGhEZXZpY2VzIGNvbXBsZXRlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBnZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3M6IGZ1bmN0aW9uIGdldEJMRURldmljZUNoYXJhY3RlcmlzdGljcygpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coXCJnZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3MgIGJlZ2luIGRldmljZUlkIFwiICsgdGhhdC5kZXZpY2VJZCk7XG5cbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5nZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3Moe1xuICAgICAgZGV2aWNlSWQ6IHRoYXQuZGV2aWNlSWQsXG4gICAgICBzZXJ2aWNlSWQ6IHRoYXQuc2VydmljZV91dWlkLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3MgIHN1Y2Nlc3NcIiwgcmVzKTtcbiAgICAgICAgdGhhdC5zZXJ2aWNlY2hhcmFjdGVycyA9IEpTT04uc3RyaW5naWZ5KHJlcyk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzLmNoYXJhY3RlcmlzdGljcykpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5jaGFyYWN0ZXJpc3RpY3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5jaGFyYWN0ZXJpc3RpY3NbaV0udXVpZCk7XG5cbiAgICAgICAgICAgIGlmIChyZXMuY2hhcmFjdGVyaXN0aWNzW2ldLnByb3BlcnRpZXMud3JpdGUpIHtcbiAgICAgICAgICAgICAgdGhhdC5jaGFyYWN0ZXJpc3RpY3NfdXVpZCA9IHJlcy5jaGFyYWN0ZXJpc3RpY3NbaV0udXVpZDtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3MgIGNoYXJhY3RlcmlzdGljc191dWlkIFwiLCB0aGF0LmNoYXJhY3RlcmlzdGljc191dWlkKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldEJMRURldmljZUNoYXJhY3RlcmlzdGljcyAgZmFpbCBcIiwgZXJyb21zZyk7XG4gICAgICAgIHRoYXQuc2VydmljZWNoYXJhY3RlcnMgPSBcImNvZGUgXCIgKyBlcnJvY29kZSArIFwiIGVycm9ybXNnIFwiICsgZXJyb21zZztcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzICBjb21wbGV0ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgcmVhZEJMRUNoYXJhY3RlcmlzdGljVmFsdWU6IGZ1bmN0aW9uIHJlYWRCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBjb25zb2xlLmxvZyhcInJlYWRCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlICBiZWdpbiBkZXZpY2VJZCBcIiArIHRoYXQuZGV2aWNlSWQpO1xuICAgIGNvbnNvbGUubG9nKFwicmVhZEJMRUNoYXJhY3RlcmlzdGljVmFsdWUgIGJlZ2luIHNlcnZpY2VJZCBcIiArIHRoYXQuc2VydmljZV91dWlkKTtcbiAgICBjb25zb2xlLmxvZyhcInJlYWRCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlICBiZWdpbiBjaGFyYWN0ZXJpc3RpY0lkIFwiICsgdGhhdC5jaGFyYWN0ZXJpc3RpY3NfdXVpZCk7XG5cbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5yZWFkQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZSh7XG4gICAgICBkZXZpY2VJZDogdGhhdC5kZXZpY2VJZCxcbiAgICAgIHNlcnZpY2VJZDogdGhhdC5zZXJ2aWNlX3V1aWQsXG4gICAgICBjaGFyYWN0ZXJpc3RpY0lkOiB0aGF0LmNoYXJhY3RlcmlzdGljc191dWlkLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWFkQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZSAgc3VjY2Vzc1wiLCByZXMpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJyb21zZywgZXJyb2NvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWFkQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZSAgZmFpbCBcIiwgXCJjb2RlIFwiICsgZXJyb2NvZGUgKyBcIiBlcnJvcm1zZyBcIiArIGVycm9tc2cpO1xuICAgICAgICB0aGF0LmNoYXJhY3RlcmlzdGljc3ZhbHVlID0gXCJjb2RlIFwiICsgZXJyb2NvZGUgKyBcIiBlcnJvcm1zZyBcIiArIGVycm9tc2c7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlYWRCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlICBjb21wbGV0ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgd3JpdGVCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlOiBmdW5jdGlvbiB3cml0ZUJMRUNoYXJhY3RlcmlzdGljVmFsdWUoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKFwid3JpdGVCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlICBiZWdpbiBkZXZpY2VJZCBcIiArIHRoYXQuZGV2aWNlSWQpO1xuICAgIGNvbnNvbGUubG9nKFwid3JpdGVCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlICBiZWdpbiBzZXJ2aWNlSWQgXCIgKyB0aGF0LnNlcnZpY2VfdXVpZCk7XG4gICAgY29uc29sZS5sb2coXCJ3cml0ZUJMRUNoYXJhY3RlcmlzdGljVmFsdWUgIGJlZ2luIGNoYXJhY3RlcmlzdGljSWQgXCIgKyB0aGF0LmNoYXJhY3RlcmlzdGljc191dWlkKTtcbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDEpO1xuICAgIHZhciBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuICAgIGRhdGFWaWV3LnNldFVpbnQ4KDAsIDApO1xuICAgIHRoYXQuYnl0ZVZhbHVlID0gdGhhdC5zdHJpbmdUb0J5dGUodGhhdC5ieXRlU3RyaW5nVmFsdWUpO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ud3JpdGVCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlKHtcbiAgICAgIGRldmljZUlkOiB0aGF0LmRldmljZUlkLFxuICAgICAgc2VydmljZUlkOiB0aGF0LnNlcnZpY2VfdXVpZCxcbiAgICAgIGNoYXJhY3RlcmlzdGljSWQ6IHRoYXQuY2hhcmFjdGVyaXN0aWNzX3V1aWQsXG4gICAgICB2YWx1ZTogdGhhdC5ieXRlU3RyaW5nVmFsdWUsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIndyaXRlQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZSAgc3VjY2Vzc1wiLCByZXMpO1xuICAgICAgICB0aGF0LndyaXRlY2hhcmFjdGVyaXN0aWNzdmFsdWUgPSBcInN1Y2Nlc3NcIjtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm9tc2csIGVycm9jb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid3JpdGVCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlICBmYWlsIFwiLCBlcnJvbXNnKTtcbiAgICAgICAgdGhhdC53cml0ZWNoYXJhY3RlcmlzdGljc3ZhbHVlID0gXCJjb2RlIFwiICsgZXJyb2NvZGUgKyBcIiBlcnJvcm1zZyBcIiArIGVycm9tc2c7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIndyaXRlQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZSAgY29tcGxldGVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIG5vdGlmeUJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2U6IGZ1bmN0aW9uIG5vdGlmeUJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKFwibm90aWZ5QkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZSAgYmVnaW4gZGV2aWNlSWQgXCIgKyB0aGF0LmRldmljZUlkKTtcbiAgICBjb25zb2xlLmxvZyhcIm5vdGlmeUJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UgIGJlZ2luIHNlcnZpY2VJZCBcIiArIHRoYXQuc2VydmljZV91dWlkKTtcbiAgICBjb25zb2xlLmxvZyhcIm5vdGlmeUJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UgIGJlZ2luIGNoYXJhY3RlcmlzdGljSWQgXCIgKyB0aGF0LmNoYXJhY3RlcmlzdGljc191dWlkKTtcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLm5vdGlmeUJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2Uoe1xuICAgICAgc3RhdGU6IHRoYXQubm90aWZ5c3RhdGUsXG4gICAgICBkZXZpY2VJZDogdGhhdC5kZXZpY2VJZCxcbiAgICAgIHNlcnZpY2VJZDogdGhhdC5zZXJ2aWNlX3V1aWQsXG4gICAgICBjaGFyYWN0ZXJpc3RpY0lkOiB0aGF0LmNoYXJhY3RlcmlzdGljc191dWlkLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlICBzdWNjZXNzXCIsIHJlcyk7XG4gICAgICAgIHRoYXQubm90aWZ5QkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZSA9IFwic3VjY2Vzc1wiO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJyb21zZywgZXJyb2NvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlICBmYWlsIFwiLCBlcnJvbXNnKTtcbiAgICAgICAgdGhhdC5ub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlID0gXCJjb2RlIFwiICsgZXJyb2NvZGUgKyBcIiBlcnJvcm1zZyBcIiArIGVycm9tc2c7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdGlmeUJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UgIGNvbXBsZXRlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBvbmJsZWNoYXJhY3RlcmlzdGljdmFsdWVjaGFuZ2U6IGZ1bmN0aW9uIG9uYmxlY2hhcmFjdGVyaXN0aWN2YWx1ZWNoYW5nZSgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coJ29uYmxlY2hhcmFjdGVyaXN0aWN2YWx1ZWNoYW5nZSAgYmVnaW4nKTtcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLm9uYmxlY2hhcmFjdGVyaXN0aWN2YWx1ZWNoYW5nZSA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29tcG9uZW50RGF0YS5tb25pdG9yQ2hhcmFjdGVyaXN0aWNDaGFuZ2UsIHJlcyk7XG4gICAgICB0aGF0LmNoYXJhY3RlcmlzdGljc3ZhbHVlID0gSlNPTi5zdHJpbmdpZnkocmVzKTtcbiAgICB9O1xuICB9LFxuICBvbmJsZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZTogZnVuY3Rpb24gb25ibGVjb25uZWN0aW9uc3RhdGVjaGFuZ2UoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKCdvbmJsZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSAgYmVnaW4nKTtcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLm9uYmxlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKHJlcykge1xuICAgICAgY29uc29sZS5sb2codGhpcy5jb21wb25lbnREYXRhLm1vbml0b3JDb25uZWN0Q2hhbmdlLCByZXMpO1xuICAgICAgdGhhdC5ibGVjb25uZWN0aW9uc3RhdGUgPSBKU09OLnN0cmluZ2lmeShyZXMpO1xuICAgIH07XG4gIH0sXG4gIHN0cmluZ1RvQnl0ZTogZnVuY3Rpb24gc3RyaW5nVG9CeXRlKHN0cikge1xuICAgIHZhciBieXRlcyA9IFtdO1xuICAgIHZhciBsZW4sIGM7XG4gICAgbGVuID0gc3RyLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcblxuICAgICAgaWYgKGMgPj0gMHgwMTAwMDAgJiYgYyA8PSAweDEwRkZGRikge1xuICAgICAgICBieXRlcy5wdXNoKGMgPj4gMTggJiAweDA3IHwgMHhGMCk7XG4gICAgICAgIGJ5dGVzLnB1c2goYyA+PiAxMiAmIDB4M0YgfCAweDgwKTtcbiAgICAgICAgYnl0ZXMucHVzaChjID4+IDYgJiAweDNGIHwgMHg4MCk7XG4gICAgICAgIGJ5dGVzLnB1c2goYyAmIDB4M0YgfCAweDgwKTtcbiAgICAgIH0gZWxzZSBpZiAoYyA+PSAweDAwMDgwMCAmJiBjIDw9IDB4MDBGRkZGKSB7XG4gICAgICAgIGJ5dGVzLnB1c2goYyA+PiAxMiAmIDB4MEYgfCAweEUwKTtcbiAgICAgICAgYnl0ZXMucHVzaChjID4+IDYgJiAweDNGIHwgMHg4MCk7XG4gICAgICAgIGJ5dGVzLnB1c2goYyAmIDB4M0YgfCAweDgwKTtcbiAgICAgIH0gZWxzZSBpZiAoYyA+PSAweDAwMDA4MCAmJiBjIDw9IDB4MDAwN0ZGKSB7XG4gICAgICAgIGJ5dGVzLnB1c2goYyA+PiA2ICYgMHgxRiB8IDB4QzApO1xuICAgICAgICBieXRlcy5wdXNoKGMgJiAweDNGIHwgMHg4MCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBieXRlcy5wdXNoKGMgJiAweEZGKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnl0ZXM7XG4gIH0sXG4gIG9uaW5wdXQ6IGZ1bmN0aW9uIG9uaW5wdXQoZXZlbnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGFycmEgPSBbXTtcbiAgICBhcnJhLnB1c2goZXZlbnQudmFsdWUpO1xuICAgIHNlbGYuc2VydmljZV91dWlkYXJyYXkgPSBhcnJhO1xuICB9LFxuICBvbmlucHV0ZGV2aWNlSWQ6IGZ1bmN0aW9uIG9uaW5wdXRkZXZpY2VJZChldmVudCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLmRldmljZUlkID0gZXZlbnQudmFsdWU7XG4gIH0sXG4gIG9uaW5wdXRzZXJ2aWNlSWQ6IGZ1bmN0aW9uIG9uaW5wdXRzZXJ2aWNlSWQoZXZlbnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5zZXJ2aWNlX3V1aWQgPSBldmVudC52YWx1ZTtcbiAgfSxcbiAgb25pbnB1dGNoYXJhY3RlcmlzdGljSWQ6IGZ1bmN0aW9uIG9uaW5wdXRjaGFyYWN0ZXJpc3RpY0lkKGV2ZW50KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuY2hhcmFjdGVyaXN0aWNzX3V1aWQgPSBldmVudC52YWx1ZTtcbiAgfSxcbiAgb25pbnB1dGJ5dGVTdHJpbmdWYWx1ZTogZnVuY3Rpb24gb25pbnB1dGJ5dGVTdHJpbmdWYWx1ZShldmVudCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLmJ5dGVTdHJpbmdWYWx1ZSA9IGV2ZW50LnZhbHVlO1xuICB9LFxuICBvbmlucHV0bm90aWZ5c3RhdGU6IGZ1bmN0aW9uIG9uaW5wdXRub3RpZnlzdGF0ZShldmVudCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLm5vdGlmeXN0YXRlID0gZXZlbnQuY2hlY2tlZDtcbiAgICBjb25zb2xlLmxvZygnbm90aWZ5c3RhdGUgJyArIHNlbGYubm90aWZ5c3RhdGUpO1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDenJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==