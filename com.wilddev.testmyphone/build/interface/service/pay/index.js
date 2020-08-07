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
/******/ 	return __webpack_require__(__webpack_require__.s = "../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux":
/*!*************************************************************************************************!*\
  !*** e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\interface\\service\\pay\\index.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\interface\\service\\pay\\index.ux!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader?presets[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib/index.js?presets[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux")

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

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\interface\\service\\pay\\index.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\interface\\service\\pay\\index.ux!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "marginTop": "50px",
    "marginRight": "60px",
    "marginLeft": "60px",
    "flexDirection": "column"
  }
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        "item-container"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.service.pay.huaweiPay')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "useAlipay"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.service.pay.getProductDetail')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "getProductDetails"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.service.pay.productPay')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "productPay"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.service.pay.queryUncosumeOrder')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "getPurchaseInfo"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.service.pay.checkOrder')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "getOrderDetail"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-container"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.service.pay.getSign')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "getsign"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.service.pay.getProductPaySign')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "getProductSign"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.service.pay.getUncosumeOrderSign')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "getPurchaseInfoSign"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.service.pay.getCheckOrderSign')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "getOrderDetailSign"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib/index.js?presets[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib?presets[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/service/pay/index.ux ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _service = _interopRequireDefault($app_require$("@app-module/service.pay"));

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    componentName: 'pay',
    componentData: {},
    fetchData: '',
    requestid: '',
    sign: '',
    ts: Date.now()
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: 'pay'
    });
    this.componentData = this.$t('message.interface.service.pay');
  },
  getsign: function getsign() {
    var provider = _service["default"].getProvider();

    var that = this;

    _system["default"].fetch({
      url: "http://117.78.37.42:19191/demo/getPaySign?merchantId=900086000010001817&applicationID=300017353&amount=" + 0.01 + "&productName=" + "沙县小吃" + "&productDesc=" + "沙县小吃" + "&sdkChannel=1&urlver=2&privateKey=fastappdev",
      success: function success(ret) {
        that.fetchData = that.componentData.result + ret.data;
        var myStr = "" + ret.data;
        var n = myStr.length;
        var subStr = myStr.substring(5, n - 1);
        var obj = JSON.parse(subStr);
        that.requestid = obj.requestId;
        that.sign = obj.sign;

        _system2["default"].showToast({
          message: provider + that.requestid + that.sign
        });
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: 'getsign --- ' + errocode + ':' + erromsg
        });
      }
    });
  },
  getProductSign: function getProductSign() {
    var provider = _service["default"].getProvider();

    var that = this;

    _system["default"].fetch({
      url: "http://117.78.37.42:19191/demo/getPaySign?merchantId=890086000000002287&applicationID=101247199&urlver=2&productNo=1234&serviceCatalog=1" + "&sdkChannel=" + 1 + "&privateKey=aa&ProductSign=yes&Chunyu=yes",
      success: function success(ret) {
        console.error(JSON.stringify(ret));
        that.fetchData = "获取数据：" + ret.data;
        var myStr = "" + ret.data;
        var n = myStr.length;
        var subStr = myStr.substring(5, n - 1);
        var obj = JSON.parse(subStr);
        that.requestid = obj.requestId;
        that.sign = obj.sign;

        _system2["default"].showToast({
          message: provider + that.requestid + that.sign
        });
      },
      fail: function fail(erromsg, errocode) {
        console.error(JSON.stringify(erromsg));

        _system2["default"].showToast({
          message: 'getsign --- ' + errocode + ':' + erromsg
        });
      }
    });
  },
  getPurchaseInfoSign: function getPurchaseInfoSign() {
    var provider = _service["default"].getProvider();

    var that = this;

    _system["default"].fetch({
      url: "http://117.78.37.42:19191/demo/getPaySign?merchantId=890086000000002287&appId=101247199&priceType=3&pageNo=1&productId=12" + "&ts=" + this.ts + "&privateKey=fastappNewPay&PurchaseInfoSign=yes&Chunyu=yes",
      success: function success(ret) {
        console.error(JSON.stringify(ret));
        that.fetchData = "获取数据：" + ret.data;
        console.error("ts =" + that.ts);
        var myStr = "" + ret.data;
        var n = myStr.length;
        var subStr = myStr.substring(5, n - 1);
        var obj = JSON.parse(subStr);
        that.requestid = obj.requestId;
        that.sign = obj.sign;

        _system2["default"].showToast({
          message: provider + that.requestid + that.sign
        });
      },
      fail: function fail(erromsg, errocode) {
        console.error(JSON.stringify(erromsg));

        _system2["default"].showToast({
          message: 'getsign --- ' + errocode + ':' + erromsg
        });
      }
    });
  },
  getOrderDetailSign: function getOrderDetailSign() {
    var provider = _service["default"].getProvider();

    var that = this;

    _system["default"].fetch({
      url: "http://117.78.37.42:19191/demo/getPaySign?merchantId=890086000000002287&keyType=1&requestId=20191021073603003" + "&time=" + "100" + "&privateKey=fastappNewPay&OrderDetailSign=yes&Chunyu=yes",
      success: function success(ret) {
        console.error(JSON.stringify(ret));
        that.fetchData = "获取数据：" + ret.data;
        console.error("ts =" + that.ts);
        var myStr = "" + ret.data;
        var n = myStr.length;
        var subStr = myStr.substring(5, n - 1);
        var obj = JSON.parse(subStr);
        that.requestid = obj.requestId;
        that.sign = obj.sign;

        _system2["default"].showToast({
          message: provider + that.requestid + that.sign
        });
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: 'getsign --- ' + errocode + ':' + erromsg
        });
      }
    });
  },
  useAlipay: function useAlipay() {
    _service["default"].pay({
      orderInfo: {
        "amount": 0.01,
        "applicationID": "300017353",
        "productDesc": "product description",
        "productName": "product name",
        "serviceCatalog": "1",
        "merchantId": "900086000010001817",
        "merchantName": "merchant name",
        "sign": this.sign,
        "requestId": this.requestid,
        "urlver": "2",
        "sdkChannel": 1,
        "publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiNcKr0G0RCzbFjSSR4hhaj+c2HLEpqQ/VYmxTGpIYCPSWWZvXGxMHk98z1lRcfnNmNRsdqRFjTC2YYxeu4F80V3qxBjPDm79+1sZrnjsPyny039/EeRVBUNGhk3ixxzWOHZV4Rpt94def7LKVlF6G9dkJ66rn8GH7VcaJFVxEjZg7cRfDVLOKBElsOcJesNyBH5qgkLURvVM8I3LjfFuVxmaVCxaTWAxbF409YMEX4XFs0kK6McrlBTDGvh1WgM+wlrqXykAl/9tHiFK5DbTJ24Y7fFIYZtv2OWS5NvP1E4g7GyNeXLIA7fSl6FW2kULZX6BDSopDwnZZJgtNpEi0wIDAQAB"
      },
      success: function success(ret) {
        _system2["default"].showToast({
          message: "pay result: " + JSON.stringify(ret)
        });
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: 'pay fail --- ' + errocode + ':' + erromsg
        });
      }
    });
  },
  getProductDetails: function getProductDetails() {
    _service["default"].getProductDetails({
      "merchantId": "890086000000002287",
      "applicationID": "101247199",
      "requestId": "123",
      "productNos": "pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01|pms01",
      success: function success(ret) {
        var list = ret.productList.length;
        console.log("list =" + list);

        _system2["default"].showToast({
          message: "getProductDetails" + JSON.stringify(ret)
        });
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: 'getProductDetails fail --- ' + errocode + ':' + erromsg
        });
      }
    });
  },
  productPay: function productPay() {
    _service["default"].productPay({
      "merchantId": "890086000000002287",
      "applicationID": "101247199",
      "requestId": this.requestid,
      "productNo": "1234",
      "serviceCatalog": "1",
      "merchantName": "123",
      "sdkChannel": 1,
      "urlver": 2,
      "publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkMcvapcWWD7HGNV/KVF7cGE4EhhZ0J0UaHDGWPYC0w+dZdMRJOXWzeGkgsC8CMsP8H8Dqnhdhy9bH37g70OCb1pKUhfgv6UlSXE5oU6+H2TJhXRt1ZrceAKEe8+mt8eINaF1HD9EHPESz6U4+aCWUtJ0WFeevG+4FbPQ4o2Mb+LmaS+LW5NlKaTpqwnhqFsCvJ6JWSSVGBuFo2+8t0IMC5pscropffd/ySEO9s4u5HjDb76ZUHpILN5h+LcR+CfFpXNoQAPoRTSo/CvdROPpVwvS5RP3tGVYkOa05fwuxxsSF3RvuK5TUcdtnn9oKJ/ENo9hwGht9UbIJy7D3wVbuQIDAQAB",
      "sign": this.sign,
      success: function success(ret) {
        _system2["default"].showToast({
          message: "productPay" + JSON.stringify(ret)
        });
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: 'productPay fail --- ' + errocode + ':' + erromsg
        });
      }
    });
  },
  getPurchaseInfo: function getPurchaseInfo() {
    var that = this;

    _service["default"].getPurchaseInfo({
      "merchantId": "890086000000002287",
      "appId": "101247199",
      "priceType": 3,
      "ts": that.ts,
      "productId": "12",
      "pageNo": 1,
      "publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkMcvapcWWD7HGNV/KVF7cGE4EhhZ0J0UaHDGWPYC0w+dZdMRJOXWzeGkgsC8CMsP8H8Dqnhdhy9bH37g70OCb1pKUhfgv6UlSXE5oU6+H2TJhXRt1ZrceAKEe8+mt8eINaF1HD9EHPESz6U4+aCWUtJ0WFeevG+4FbPQ4o2Mb+LmaS+LW5NlKaTpqwnhqFsCvJ6JWSSVGBuFo2+8t0IMC5pscropffd/ySEO9s4u5HjDb76ZUHpILN5h+LcR+CfFpXNoQAPoRTSo/CvdROPpVwvS5RP3tGVYkOa05fwuxxsSF3RvuK5TUcdtnn9oKJ/ENo9hwGht9UbIJy7D3wVbuQIDAQAB",
      "sign": this.sign,
      success: function success(ret) {
        _system2["default"].showToast({
          message: "getPurchaseInfo" + JSON.stringify(ret)
        });
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: 'getPurchaseInfo fail --- ' + errocode + ':' + erromsg
        });
      }
    });
  },
  getOrderDetail: function getOrderDetail() {
    var that = this;

    _service["default"].getOrderDetail({
      "merchantId": "890086000000002287",
      "keyType": 1,
      "time": "100",
      "requestId": "20191021073603003",
      "publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkMcvapcWWD7HGNV/KVF7cGE4EhhZ0J0UaHDGWPYC0w+dZdMRJOXWzeGkgsC8CMsP8H8Dqnhdhy9bH37g70OCb1pKUhfgv6UlSXE5oU6+H2TJhXRt1ZrceAKEe8+mt8eINaF1HD9EHPESz6U4+aCWUtJ0WFeevG+4FbPQ4o2Mb+LmaS+LW5NlKaTpqwnhqFsCvJ6JWSSVGBuFo2+8t0IMC5pscropffd/ySEO9s4u5HjDb76ZUHpILN5h+LcR+CfFpXNoQAPoRTSo/CvdROPpVwvS5RP3tGVYkOa05fwuxxsSF3RvuK5TUcdtnn9oKJ/ENo9hwGht9UbIJy7D3wVbuQIDAQAB",
      "sign": this.sign,
      success: function success(ret) {
        _system2["default"].showToast({
          message: "getOrderDetail" + JSON.stringify(ret)
        });
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: 'getOrderDetail fail --- ' + errocode + ':' + erromsg
        });
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXGludGVyZmFjZVxcc2VydmljZVxccGF5XFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZTovV29ya3NwYWNlSHVhd2VpL1Rlc3RNeVBob25lL2NvbS53aWxkZGV2LnRlc3RteXBob25lL3NyYy9pbnRlcmZhY2Uvc2VydmljZS9wYXkvaW5kZXgudXgiLCJ3ZWJwYWNrOi8vL2U6L1dvcmtzcGFjZUh1YXdlaS9UZXN0TXlQaG9uZS9jb20ud2lsZGRldi50ZXN0bXlwaG9uZS9zcmMvaW50ZXJmYWNlL3NlcnZpY2UvcGF5L2luZGV4LnV4Pzg4M2IiLCJ3ZWJwYWNrOi8vL2U6L1dvcmtzcGFjZUh1YXdlaS9UZXN0TXlQaG9uZS9jb20ud2lsZGRldi50ZXN0bXlwaG9uZS9zcmMvaW50ZXJmYWNlL3NlcnZpY2UvcGF5L2luZGV4LnV4PzFhZTciLCJ3ZWJwYWNrOi8vL2U6L1dvcmtzcGFjZUh1YXdlaS9UZXN0TXlQaG9uZS9jb20ud2lsZGRldi50ZXN0bXlwaG9uZS9zcmMvaW50ZXJmYWNlL3NlcnZpY2UvcGF5L2luZGV4LnV4Pzc3YTIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vV29ya3NwYWNlSHVhd2VpL1Rlc3RNeVBob25lL2NvbS53aWxkZGV2LnRlc3RteXBob25lL3NyYy9pbnRlcmZhY2Uvc2VydmljZS9wYXkvaW5kZXgudXhcIik7XG4iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9pbmRleC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxXb3Jrc3BhY2VIdWF3ZWlcXFxcVGVzdE15UGhvbmVcXFxcY29tLndpbGRkZXYudGVzdG15cGhvbmVcXFxcc3JjXFxcXGludGVyZmFjZVxcXFxzZXJ2aWNlXFxcXHBheVxcXFxpbmRleC51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxXb3Jrc3BhY2VIdWF3ZWlcXFxcVGVzdE15UGhvbmVcXFxcY29tLndpbGRkZXYudGVzdG15cGhvbmVcXFxcc3JjXFxcXGludGVyZmFjZVxcXFxzZXJ2aWNlXFxcXHBheVxcXFxpbmRleC51eCEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109ZTpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZTpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1lOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWNvbXBpbGVyXFxcXGpzeC1sb2FkZXIuanMmcGx1Z2luc1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi1wcm9wb3NhbC1jbGFzcy1wcm9wZXJ0aWVzJnBsdWdpbnNbXT1lOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tcHJvcG9zYWwtb2JqZWN0LXJlc3Qtc3ByZWFkJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi41LjItU3RhYmxlLjMwMCd9KSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLnBhZ2UtdGl0bGUtd3JhcFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjgwcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIucGFnZS10aXRsZVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJjb2xvclwiOiBcIiNiYmJiYmJcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMnB4XCJcbiAgfSxcbiAgXCIuYnRuXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjgwcHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjYwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI2MHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzBmYWVmZlwiXG4gIH0sXG4gIFwiLml0ZW0tY29udGFpbmVyXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNjBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjYwcHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInBhZ2UtdGl0bGUtd3JhcFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNvbXBvbmVudE5hbWV9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInBhZ2UtdGl0bGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaXRlbS1jb250YWluZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2Uuc2VydmljZS5wYXkuaHVhd2VpUGF5Jyl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwidXNlQWxpcGF5XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5zZXJ2aWNlLnBheS5nZXRQcm9kdWN0RGV0YWlsJyl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwiZ2V0UHJvZHVjdERldGFpbHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnNlcnZpY2UucGF5LnByb2R1Y3RQYXknKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJwcm9kdWN0UGF5XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5zZXJ2aWNlLnBheS5xdWVyeVVuY29zdW1lT3JkZXInKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJnZXRQdXJjaGFzZUluZm9cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLnNlcnZpY2UucGF5LmNoZWNrT3JkZXInKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJnZXRPcmRlckRldGFpbFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpdGVtLWNvbnRhaW5lclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5zZXJ2aWNlLnBheS5nZXRTaWduJyl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwiZ2V0c2lnblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2Uuc2VydmljZS5wYXkuZ2V0UHJvZHVjdFBheVNpZ24nKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJnZXRQcm9kdWN0U2lnblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2Uuc2VydmljZS5wYXkuZ2V0VW5jb3N1bWVPcmRlclNpZ24nKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJnZXRQdXJjaGFzZUluZm9TaWduXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5zZXJ2aWNlLnBheS5nZXRDaGVja09yZGVyU2lnbicpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJidG5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImdldE9yZGVyRGV0YWlsU2lnblwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc2VydmljZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3NlcnZpY2UucGF5XCIpKTtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uZmV0Y2hcIikpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucHJvbXB0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZGF0YToge1xuICAgIGNvbXBvbmVudE5hbWU6ICdwYXknLFxuICAgIGNvbXBvbmVudERhdGE6IHt9LFxuICAgIGZldGNoRGF0YTogJycsXG4gICAgcmVxdWVzdGlkOiAnJyxcbiAgICBzaWduOiAnJyxcbiAgICB0czogRGF0ZS5ub3coKVxuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgIHRleHQ6ICdwYXknXG4gICAgfSk7XG4gICAgdGhpcy5jb21wb25lbnREYXRhID0gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2Uuc2VydmljZS5wYXknKTtcbiAgfSxcbiAgZ2V0c2lnbjogZnVuY3Rpb24gZ2V0c2lnbigpIHtcbiAgICB2YXIgcHJvdmlkZXIgPSBfc2VydmljZVtcImRlZmF1bHRcIl0uZ2V0UHJvdmlkZXIoKTtcblxuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmZldGNoKHtcbiAgICAgIHVybDogXCJodHRwOi8vMTE3Ljc4LjM3LjQyOjE5MTkxL2RlbW8vZ2V0UGF5U2lnbj9tZXJjaGFudElkPTkwMDA4NjAwMDAxMDAwMTgxNyZhcHBsaWNhdGlvbklEPTMwMDAxNzM1MyZhbW91bnQ9XCIgKyAwLjAxICsgXCImcHJvZHVjdE5hbWU9XCIgKyBcIuaymeWOv+Wwj+WQg1wiICsgXCImcHJvZHVjdERlc2M9XCIgKyBcIuaymeWOv+Wwj+WQg1wiICsgXCImc2RrQ2hhbm5lbD0xJnVybHZlcj0yJnByaXZhdGVLZXk9ZmFzdGFwcGRldlwiLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXQpIHtcbiAgICAgICAgdGhhdC5mZXRjaERhdGEgPSB0aGF0LmNvbXBvbmVudERhdGEucmVzdWx0ICsgcmV0LmRhdGE7XG4gICAgICAgIHZhciBteVN0ciA9IFwiXCIgKyByZXQuZGF0YTtcbiAgICAgICAgdmFyIG4gPSBteVN0ci5sZW5ndGg7XG4gICAgICAgIHZhciBzdWJTdHIgPSBteVN0ci5zdWJzdHJpbmcoNSwgbiAtIDEpO1xuICAgICAgICB2YXIgb2JqID0gSlNPTi5wYXJzZShzdWJTdHIpO1xuICAgICAgICB0aGF0LnJlcXVlc3RpZCA9IG9iai5yZXF1ZXN0SWQ7XG4gICAgICAgIHRoYXQuc2lnbiA9IG9iai5zaWduO1xuXG4gICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IHByb3ZpZGVyICsgdGhhdC5yZXF1ZXN0aWQgKyB0aGF0LnNpZ25cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiAnZ2V0c2lnbiAtLS0gJyArIGVycm9jb2RlICsgJzonICsgZXJyb21zZ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZ2V0UHJvZHVjdFNpZ246IGZ1bmN0aW9uIGdldFByb2R1Y3RTaWduKCkge1xuICAgIHZhciBwcm92aWRlciA9IF9zZXJ2aWNlW1wiZGVmYXVsdFwiXS5nZXRQcm92aWRlcigpO1xuXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uZmV0Y2goe1xuICAgICAgdXJsOiBcImh0dHA6Ly8xMTcuNzguMzcuNDI6MTkxOTEvZGVtby9nZXRQYXlTaWduP21lcmNoYW50SWQ9ODkwMDg2MDAwMDAwMDAyMjg3JmFwcGxpY2F0aW9uSUQ9MTAxMjQ3MTk5JnVybHZlcj0yJnByb2R1Y3RObz0xMjM0JnNlcnZpY2VDYXRhbG9nPTFcIiArIFwiJnNka0NoYW5uZWw9XCIgKyAxICsgXCImcHJpdmF0ZUtleT1hYSZQcm9kdWN0U2lnbj15ZXMmQ2h1bnl1PXllc1wiLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihKU09OLnN0cmluZ2lmeShyZXQpKTtcbiAgICAgICAgdGhhdC5mZXRjaERhdGEgPSBcIuiOt+WPluaVsOaNru+8mlwiICsgcmV0LmRhdGE7XG4gICAgICAgIHZhciBteVN0ciA9IFwiXCIgKyByZXQuZGF0YTtcbiAgICAgICAgdmFyIG4gPSBteVN0ci5sZW5ndGg7XG4gICAgICAgIHZhciBzdWJTdHIgPSBteVN0ci5zdWJzdHJpbmcoNSwgbiAtIDEpO1xuICAgICAgICB2YXIgb2JqID0gSlNPTi5wYXJzZShzdWJTdHIpO1xuICAgICAgICB0aGF0LnJlcXVlc3RpZCA9IG9iai5yZXF1ZXN0SWQ7XG4gICAgICAgIHRoYXQuc2lnbiA9IG9iai5zaWduO1xuXG4gICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IHByb3ZpZGVyICsgdGhhdC5yZXF1ZXN0aWQgKyB0aGF0LnNpZ25cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKEpTT04uc3RyaW5naWZ5KGVycm9tc2cpKTtcblxuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiAnZ2V0c2lnbiAtLS0gJyArIGVycm9jb2RlICsgJzonICsgZXJyb21zZ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZ2V0UHVyY2hhc2VJbmZvU2lnbjogZnVuY3Rpb24gZ2V0UHVyY2hhc2VJbmZvU2lnbigpIHtcbiAgICB2YXIgcHJvdmlkZXIgPSBfc2VydmljZVtcImRlZmF1bHRcIl0uZ2V0UHJvdmlkZXIoKTtcblxuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmZldGNoKHtcbiAgICAgIHVybDogXCJodHRwOi8vMTE3Ljc4LjM3LjQyOjE5MTkxL2RlbW8vZ2V0UGF5U2lnbj9tZXJjaGFudElkPTg5MDA4NjAwMDAwMDAwMjI4NyZhcHBJZD0xMDEyNDcxOTkmcHJpY2VUeXBlPTMmcGFnZU5vPTEmcHJvZHVjdElkPTEyXCIgKyBcIiZ0cz1cIiArIHRoaXMudHMgKyBcIiZwcml2YXRlS2V5PWZhc3RhcHBOZXdQYXkmUHVyY2hhc2VJbmZvU2lnbj15ZXMmQ2h1bnl1PXllc1wiLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihKU09OLnN0cmluZ2lmeShyZXQpKTtcbiAgICAgICAgdGhhdC5mZXRjaERhdGEgPSBcIuiOt+WPluaVsOaNru+8mlwiICsgcmV0LmRhdGE7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ0cyA9XCIgKyB0aGF0LnRzKTtcbiAgICAgICAgdmFyIG15U3RyID0gXCJcIiArIHJldC5kYXRhO1xuICAgICAgICB2YXIgbiA9IG15U3RyLmxlbmd0aDtcbiAgICAgICAgdmFyIHN1YlN0ciA9IG15U3RyLnN1YnN0cmluZyg1LCBuIC0gMSk7XG4gICAgICAgIHZhciBvYmogPSBKU09OLnBhcnNlKHN1YlN0cik7XG4gICAgICAgIHRoYXQucmVxdWVzdGlkID0gb2JqLnJlcXVlc3RJZDtcbiAgICAgICAgdGhhdC5zaWduID0gb2JqLnNpZ247XG5cbiAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogcHJvdmlkZXIgKyB0aGF0LnJlcXVlc3RpZCArIHRoYXQuc2lnblxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm9tc2csIGVycm9jb2RlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyb21zZykpO1xuXG4gICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6ICdnZXRzaWduIC0tLSAnICsgZXJyb2NvZGUgKyAnOicgKyBlcnJvbXNnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBnZXRPcmRlckRldGFpbFNpZ246IGZ1bmN0aW9uIGdldE9yZGVyRGV0YWlsU2lnbigpIHtcbiAgICB2YXIgcHJvdmlkZXIgPSBfc2VydmljZVtcImRlZmF1bHRcIl0uZ2V0UHJvdmlkZXIoKTtcblxuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmZldGNoKHtcbiAgICAgIHVybDogXCJodHRwOi8vMTE3Ljc4LjM3LjQyOjE5MTkxL2RlbW8vZ2V0UGF5U2lnbj9tZXJjaGFudElkPTg5MDA4NjAwMDAwMDAwMjI4NyZrZXlUeXBlPTEmcmVxdWVzdElkPTIwMTkxMDIxMDczNjAzMDAzXCIgKyBcIiZ0aW1lPVwiICsgXCIxMDBcIiArIFwiJnByaXZhdGVLZXk9ZmFzdGFwcE5ld1BheSZPcmRlckRldGFpbFNpZ249eWVzJkNodW55dT15ZXNcIixcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmV0KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSlNPTi5zdHJpbmdpZnkocmV0KSk7XG4gICAgICAgIHRoYXQuZmV0Y2hEYXRhID0gXCLojrflj5bmlbDmja7vvJpcIiArIHJldC5kYXRhO1xuICAgICAgICBjb25zb2xlLmVycm9yKFwidHMgPVwiICsgdGhhdC50cyk7XG4gICAgICAgIHZhciBteVN0ciA9IFwiXCIgKyByZXQuZGF0YTtcbiAgICAgICAgdmFyIG4gPSBteVN0ci5sZW5ndGg7XG4gICAgICAgIHZhciBzdWJTdHIgPSBteVN0ci5zdWJzdHJpbmcoNSwgbiAtIDEpO1xuICAgICAgICB2YXIgb2JqID0gSlNPTi5wYXJzZShzdWJTdHIpO1xuICAgICAgICB0aGF0LnJlcXVlc3RpZCA9IG9iai5yZXF1ZXN0SWQ7XG4gICAgICAgIHRoYXQuc2lnbiA9IG9iai5zaWduO1xuXG4gICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IHByb3ZpZGVyICsgdGhhdC5yZXF1ZXN0aWQgKyB0aGF0LnNpZ25cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiAnZ2V0c2lnbiAtLS0gJyArIGVycm9jb2RlICsgJzonICsgZXJyb21zZ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgdXNlQWxpcGF5OiBmdW5jdGlvbiB1c2VBbGlwYXkoKSB7XG4gICAgX3NlcnZpY2VbXCJkZWZhdWx0XCJdLnBheSh7XG4gICAgICBvcmRlckluZm86IHtcbiAgICAgICAgXCJhbW91bnRcIjogMC4wMSxcbiAgICAgICAgXCJhcHBsaWNhdGlvbklEXCI6IFwiMzAwMDE3MzUzXCIsXG4gICAgICAgIFwicHJvZHVjdERlc2NcIjogXCJwcm9kdWN0IGRlc2NyaXB0aW9uXCIsXG4gICAgICAgIFwicHJvZHVjdE5hbWVcIjogXCJwcm9kdWN0IG5hbWVcIixcbiAgICAgICAgXCJzZXJ2aWNlQ2F0YWxvZ1wiOiBcIjFcIixcbiAgICAgICAgXCJtZXJjaGFudElkXCI6IFwiOTAwMDg2MDAwMDEwMDAxODE3XCIsXG4gICAgICAgIFwibWVyY2hhbnROYW1lXCI6IFwibWVyY2hhbnQgbmFtZVwiLFxuICAgICAgICBcInNpZ25cIjogdGhpcy5zaWduLFxuICAgICAgICBcInJlcXVlc3RJZFwiOiB0aGlzLnJlcXVlc3RpZCxcbiAgICAgICAgXCJ1cmx2ZXJcIjogXCIyXCIsXG4gICAgICAgIFwic2RrQ2hhbm5lbFwiOiAxLFxuICAgICAgICBcInB1YmxpY0tleVwiOiBcIk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBaU5jS3IwRzBSQ3piRmpTU1I0aGhhaitjMkhMRXBxUS9WWW14VEdwSVlDUFNXV1p2WEd4TUhrOTh6MWxSY2ZuTm1OUnNkcVJGalRDMllZeGV1NEY4MFYzcXhCalBEbTc5KzFzWnJuanNQeW55MDM5L0VlUlZCVU5HaGszaXh4eldPSFpWNFJwdDk0ZGVmN0xLVmxGNkc5ZGtKNjZybjhHSDdWY2FKRlZ4RWpaZzdjUmZEVkxPS0JFbHNPY0plc055Qkg1cWdrTFVSdlZNOEkzTGpmRnVWeG1hVkN4YVRXQXhiRjQwOVlNRVg0WEZzMGtLNk1jcmxCVERHdmgxV2dNK3dscnFYeWtBbC85dEhpRks1RGJUSjI0WTdmRklZWnR2Mk9XUzVOdlAxRTRnN0d5TmVYTElBN2ZTbDZGVzJrVUxaWDZCRFNvcER3blpaSmd0TnBFaTB3SURBUUFCXCJcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJldCkge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBcInBheSByZXN1bHQ6IFwiICsgSlNPTi5zdHJpbmdpZnkocmV0KVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm9tc2csIGVycm9jb2RlKSB7XG4gICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6ICdwYXkgZmFpbCAtLS0gJyArIGVycm9jb2RlICsgJzonICsgZXJyb21zZ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZ2V0UHJvZHVjdERldGFpbHM6IGZ1bmN0aW9uIGdldFByb2R1Y3REZXRhaWxzKCkge1xuICAgIF9zZXJ2aWNlW1wiZGVmYXVsdFwiXS5nZXRQcm9kdWN0RGV0YWlscyh7XG4gICAgICBcIm1lcmNoYW50SWRcIjogXCI4OTAwODYwMDAwMDAwMDIyODdcIixcbiAgICAgIFwiYXBwbGljYXRpb25JRFwiOiBcIjEwMTI0NzE5OVwiLFxuICAgICAgXCJyZXF1ZXN0SWRcIjogXCIxMjNcIixcbiAgICAgIFwicHJvZHVjdE5vc1wiOiBcInBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxfHBtczAxXCIsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJldCkge1xuICAgICAgICB2YXIgbGlzdCA9IHJldC5wcm9kdWN0TGlzdC5sZW5ndGg7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGlzdCA9XCIgKyBsaXN0KTtcblxuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBcImdldFByb2R1Y3REZXRhaWxzXCIgKyBKU09OLnN0cmluZ2lmeShyZXQpXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJyb21zZywgZXJyb2NvZGUpIHtcbiAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogJ2dldFByb2R1Y3REZXRhaWxzIGZhaWwgLS0tICcgKyBlcnJvY29kZSArICc6JyArIGVycm9tc2dcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHByb2R1Y3RQYXk6IGZ1bmN0aW9uIHByb2R1Y3RQYXkoKSB7XG4gICAgX3NlcnZpY2VbXCJkZWZhdWx0XCJdLnByb2R1Y3RQYXkoe1xuICAgICAgXCJtZXJjaGFudElkXCI6IFwiODkwMDg2MDAwMDAwMDAyMjg3XCIsXG4gICAgICBcImFwcGxpY2F0aW9uSURcIjogXCIxMDEyNDcxOTlcIixcbiAgICAgIFwicmVxdWVzdElkXCI6IHRoaXMucmVxdWVzdGlkLFxuICAgICAgXCJwcm9kdWN0Tm9cIjogXCIxMjM0XCIsXG4gICAgICBcInNlcnZpY2VDYXRhbG9nXCI6IFwiMVwiLFxuICAgICAgXCJtZXJjaGFudE5hbWVcIjogXCIxMjNcIixcbiAgICAgIFwic2RrQ2hhbm5lbFwiOiAxLFxuICAgICAgXCJ1cmx2ZXJcIjogMixcbiAgICAgIFwicHVibGljS2V5XCI6IFwiTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFrTWN2YXBjV1dEN0hHTlYvS1ZGN2NHRTRFaGhaMEowVWFIREdXUFlDMHcrZFpkTVJKT1hXemVHa2dzQzhDTXNQOEg4RHFuaGRoeTliSDM3ZzcwT0NiMXBLVWhmZ3Y2VWxTWEU1b1U2K0gyVEpoWFJ0MVpyY2VBS0VlOCttdDhlSU5hRjFIRDlFSFBFU3o2VTQrYUNXVXRKMFdGZWV2Rys0RmJQUTRvMk1iK0xtYVMrTFc1TmxLYVRwcXduaHFGc0N2SjZKV1NTVkdCdUZvMis4dDBJTUM1cHNjcm9wZmZkL3lTRU85czR1NUhqRGI3NlpVSHBJTE41aCtMY1IrQ2ZGcFhOb1FBUG9SVFNvL0N2ZFJPUHBWd3ZTNVJQM3RHVllrT2EwNWZ3dXh4c1NGM1J2dUs1VFVjZHRubjlvS0ovRU5vOWh3R2h0OVViSUp5N0Qzd1ZidVFJREFRQUJcIixcbiAgICAgIFwic2lnblwiOiB0aGlzLnNpZ24sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJldCkge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBcInByb2R1Y3RQYXlcIiArIEpTT04uc3RyaW5naWZ5KHJldClcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiAncHJvZHVjdFBheSBmYWlsIC0tLSAnICsgZXJyb2NvZGUgKyAnOicgKyBlcnJvbXNnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBnZXRQdXJjaGFzZUluZm86IGZ1bmN0aW9uIGdldFB1cmNoYXNlSW5mbygpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBfc2VydmljZVtcImRlZmF1bHRcIl0uZ2V0UHVyY2hhc2VJbmZvKHtcbiAgICAgIFwibWVyY2hhbnRJZFwiOiBcIjg5MDA4NjAwMDAwMDAwMjI4N1wiLFxuICAgICAgXCJhcHBJZFwiOiBcIjEwMTI0NzE5OVwiLFxuICAgICAgXCJwcmljZVR5cGVcIjogMyxcbiAgICAgIFwidHNcIjogdGhhdC50cyxcbiAgICAgIFwicHJvZHVjdElkXCI6IFwiMTJcIixcbiAgICAgIFwicGFnZU5vXCI6IDEsXG4gICAgICBcInB1YmxpY0tleVwiOiBcIk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBa01jdmFwY1dXRDdIR05WL0tWRjdjR0U0RWhoWjBKMFVhSERHV1BZQzB3K2RaZE1SSk9YV3plR2tnc0M4Q01zUDhIOERxbmhkaHk5YkgzN2c3ME9DYjFwS1VoZmd2NlVsU1hFNW9VNitIMlRKaFhSdDFacmNlQUtFZTgrbXQ4ZUlOYUYxSEQ5RUhQRVN6NlU0K2FDV1V0SjBXRmVldkcrNEZiUFE0bzJNYitMbWFTK0xXNU5sS2FUcHF3bmhxRnNDdko2SldTU1ZHQnVGbzIrOHQwSU1DNXBzY3JvcGZmZC95U0VPOXM0dTVIakRiNzZaVUhwSUxONWgrTGNSK0NmRnBYTm9RQVBvUlRTby9DdmRST1BwVnd2UzVSUDN0R1ZZa09hMDVmd3V4eHNTRjNSdnVLNVRVY2R0bm45b0tKL0VObzlod0dodDlVYklKeTdEM3dWYnVRSURBUUFCXCIsXG4gICAgICBcInNpZ25cIjogdGhpcy5zaWduLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXQpIHtcbiAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogXCJnZXRQdXJjaGFzZUluZm9cIiArIEpTT04uc3RyaW5naWZ5KHJldClcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiAnZ2V0UHVyY2hhc2VJbmZvIGZhaWwgLS0tICcgKyBlcnJvY29kZSArICc6JyArIGVycm9tc2dcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGdldE9yZGVyRGV0YWlsOiBmdW5jdGlvbiBnZXRPcmRlckRldGFpbCgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBfc2VydmljZVtcImRlZmF1bHRcIl0uZ2V0T3JkZXJEZXRhaWwoe1xuICAgICAgXCJtZXJjaGFudElkXCI6IFwiODkwMDg2MDAwMDAwMDAyMjg3XCIsXG4gICAgICBcImtleVR5cGVcIjogMSxcbiAgICAgIFwidGltZVwiOiBcIjEwMFwiLFxuICAgICAgXCJyZXF1ZXN0SWRcIjogXCIyMDE5MTAyMTA3MzYwMzAwM1wiLFxuICAgICAgXCJwdWJsaWNLZXlcIjogXCJNSUlCSWpBTkJna3Foa2lHOXcwQkFRRUZBQU9DQVE4QU1JSUJDZ0tDQVFFQWtNY3ZhcGNXV0Q3SEdOVi9LVkY3Y0dFNEVoaFowSjBVYUhER1dQWUMwdytkWmRNUkpPWFd6ZUdrZ3NDOENNc1A4SDhEcW5oZGh5OWJIMzdnNzBPQ2IxcEtVaGZndjZVbFNYRTVvVTYrSDJUSmhYUnQxWnJjZUFLRWU4K210OGVJTmFGMUhEOUVIUEVTejZVNCthQ1dVdEowV0ZlZXZHKzRGYlBRNG8yTWIrTG1hUytMVzVObEthVHBxd25ocUZzQ3ZKNkpXU1NWR0J1Rm8yKzh0MElNQzVwc2Nyb3BmZmQveVNFTzlzNHU1SGpEYjc2WlVIcElMTjVoK0xjUitDZkZwWE5vUUFQb1JUU28vQ3ZkUk9QcFZ3dlM1UlAzdEdWWWtPYTA1Znd1eHhzU0YzUnZ1SzVUVWNkdG5uOW9LSi9FTm85aHdHaHQ5VWJJSnk3RDN3VmJ1UUlEQVFBQlwiLFxuICAgICAgXCJzaWduXCI6IHRoaXMuc2lnbixcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmV0KSB7XG4gICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IFwiZ2V0T3JkZXJEZXRhaWxcIiArIEpTT04uc3RyaW5naWZ5KHJldClcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiAnZ2V0T3JkZXJEZXRhaWwgZmFpbCAtLS0gJyArIGVycm9jb2RlICsgJzonICsgZXJyb21zZ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=