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
/******/ 	return __webpack_require__(__webpack_require__.s = "../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux":
/*!***************************************************************************************************!*\
  !*** e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\interface\\graphic\\media\\index.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\interface\\graphic\\media\\index.ux!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader?presets[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib/index.js?presets[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux")

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

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\interface\\graphic\\media\\index.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\interface\\graphic\\media\\index.ux!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  },
  ".item-content": {
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px"
  },
  ".image": {
    "marginTop": "50px",
    "marginRight": "0px",
    "marginBottom": "50px",
    "marginLeft": "0px",
    "width": "630px",
    "height": "300px"
  },
  ".video": {
    "marginTop": "50px",
    "marginRight": "0px",
    "marginBottom": "50px",
    "marginLeft": "0px",
    "width": "630px",
    "height": "300px"
  }
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          "type": "div",
          "attr": {},
          "classList": [
            "item-content"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.pathOfTakePhoto'))+': '+(this.pathPhotoSave)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.nameOfTakePhoto'))+'：'+(this.namePhotoSave)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.sizeOfTakePhoto'))+'：'+(this.sizePhotoSave)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.pathOfPickPhoto'))+'：'+(this.pathPhotoPick)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.nameOfPickPhoto'))+'：'+(this.namePhotoPick)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.sizeOfPickPhoto'))+'：'+(this.sizePhotoPick)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.pathOfRingtone'))+'：'+(this.ringtonePath)}
              },
              "classList": [
                "txt"
              ]
            }
          ]
        },
        {
          "type": "image",
          "attr": {
            "src": function () {return this.photoUri}
          },
          "classList": [
            "image"
          ]
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.graphic.media.takePhoto')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "takePhoto"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.graphic.media.savePhoto')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "SavePhoto"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.graphic.media.pickPhoto')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "pickPhoto"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.graphic.media.setRingtone')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "setRingtone"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.graphic.media.setAlarmRingtone')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "setAlarmRingtone"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.graphic.media.setNotificationRingtone')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "setNotificationRingtone"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.graphic.media.getRingtone')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "getRingtone"
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
                "value": function () {return (this.$t('message.interface.graphic.media.pathOfTakeVideo'))+'：'+(this.pathVideoSave)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.nameOfTakeVideo'))+'：'+(this.nameVideoSave)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.sizeOfTakeVideo'))+'：'+(this.sizeVideoSave)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.pathOfPickVideo'))+'：'+(this.pathVideoPick)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.nameOfPickVideo'))+'：'+(this.nameVideoPick)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.sizeOfPickVideo'))+'：'+(this.sizeVideoPick)}
              },
              "classList": [
                "txt"
              ]
            }
          ]
        },
        {
          "type": "video",
          "attr": {
            "src": function () {return this.videoUri},
            "autoplay": "true"
          },
          "classList": [
            "video"
          ]
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.graphic.media.takeVideo')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "takeVideo"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.graphic.media.saveVideo')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "SaveVideo"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.graphic.media.pickVideo')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "pickVideo"
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
                "value": function () {return (this.$t('message.interface.graphic.media.pathOfPickFile'))+'：'+(this.pathFilePick)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.nameOfPickFile'))+'：'+(this.nameFilePick)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.sizeOfPickFile'))+'：'+(this.sizeFilePick)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.fileGetData'))+'：'+(this.fileGetData)}
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
            "value": function () {return this.$t('message.interface.graphic.media.pickFile')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "pickFile"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.graphic.media.getFileInfo')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "getFile"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.graphic.media.viewPics')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "viewPics"
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
                "value": function () {return (this.$t('message.interface.graphic.media.pathOfMultiPickFile'))+'：'+(this.pathFilePicks)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.listOfMultiPickFile'))+'：'+(this.filesFilePicks)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.pathOfMultiPickPic'))+'：'+(this.pathImagePicks)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.listOfMultiPickPic'))+'：'+(this.filesImagePicks)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.pathOfMultiPickVideo'))+'：'+(this.pathVideoPicks)}
              },
              "classList": [
                "txt"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$t('message.interface.graphic.media.listOfMultiPickVideo'))+'：'+(this.filesVideoPicks)}
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
            "value": function () {return this.$t('message.interface.graphic.media.pickMultiFile')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "pickFiles"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.graphic.media.pickMultiPic')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "pickImages"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.$t('message.interface.graphic.media.pickMultiVideo')}
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "pickVideos"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib/index.js?presets[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib?presets[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/interface/graphic/media/index.ux ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.media"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.file"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    componentName: 'media',
    pathPhotoSave: '',
    namePhotoSave: '',
    sizePhotoSave: '',
    pathPhotoPick: '',
    namePhotoPick: '',
    sizePhotoPick: '',
    pathVideoSave: '',
    nameVideoSave: '',
    sizeVideoSave: '',
    pathVideoPick: '',
    nameVideoPick: '',
    sizeVideoPick: '',
    pathRecordStart: '',
    pathRecordStop: '',
    photoUri: '',
    videoUri: '',
    pathFilePick: '',
    nameFilePick: '',
    sizeFilePick: '',
    FileUri: '',
    fileGetData: '',
    ringtonePath: '',
    pathFilePicks: '',
    filesFilePicks: '',
    pathImagePicks: '',
    filesImagePicks: '',
    pathVideoPicks: '',
    filesVideoPicks: ''
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: 'media'
    });
  },
  takePhoto: function takePhoto() {
    var that = this;

    _system["default"].takePhoto({
      success: function success(ret) {
        that.pathPhotoSave = ret.uri;
        that.namePhotoSave = ret.name;
        that.sizePhotoSave = ret.size;
        that.photoUri = ret.uri;
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "takePhoto fail------" + errocode + ': ' + erromsg
        });

        console.log('media.takePhoto----------' + errocode + ': ' + erromsg);
      },
      cancel: function cancel() {
        console.log('media.takePhoto----------cancel');
      },
      complete: function complete() {
        console.log('media.takePhoto----------complete');
      }
    });
  },
  pickPhoto: function pickPhoto() {
    var that = this;

    _system["default"].pickImage({
      success: function success(ret) {
        that.pathPhotoPick = ret.uri;
        that.namePhotoPick = ret.name;
        that.sizePhotoPick = ret.size;
        that.photoUri = ret.uri;
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "pickImage fail------" + errocode + ': ' + erromsg
        });

        console.log('media.pickImage----------' + errocode + ': ' + erromsg);
      },
      cancel: function cancel() {
        console.log('media.pickImage----------cancel');
      },
      complete: function complete() {
        console.log('media.pickImage----------complete');
      }
    });
  },
  setRingtone: function setRingtone() {
    _system["default"].setRingtone({
      uri: "/common/audio/20181211_155437.m4a",
      type: "ringtone",
      success: function success(ret) {
        _system2["default"].showToast({
          message: 'media.setRingtone----------success'
        });

        console.log('media.setRingtone----------success');
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "setRingtone fail------" + errocode + ': ' + erromsg
        });

        console.log('media.setRingtone----------' + errocode + ': ' + erromsg);
      },
      complete: function complete() {
        console.log('media.setRingtone----------complete');
      }
    });
  },
  setAlarmRingtone: function setAlarmRingtone() {
    _system["default"].setRingtone({
      uri: '/common/audio/20181211_155437.m4a',
      type: "alarm",
      success: function success(ret) {
        _system2["default"].showToast({
          message: 'media.setRingtone----------success'
        });

        console.log('media.setRingtone----------success');
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "setRingtone fail------" + errocode + ': ' + erromsg
        });

        console.log('media.setRingtone----------' + errocode + ': ' + erromsg);
      },
      complete: function complete() {
        console.log('media.setRingtone----------complete');
      }
    });
  },
  setNotificationRingtone: function setNotificationRingtone() {
    _system["default"].setRingtone({
      uri: '/common/audio/20181211_155437.m4a',
      type: "notification",
      success: function success(ret) {
        _system2["default"].showToast({
          message: 'media.setRingtone----------success'
        });

        console.log('media.setRingtone----------success');
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "setRingtone fail------" + errocode + ': ' + erromsg
        });

        console.log('media.setRingtone----------' + errocode + ': ' + erromsg);
      },
      complete: function complete() {
        console.log('media.setRingtone----------complete');
      }
    });
  },
  getRingtone: function getRingtone() {
    var that = this;

    _system["default"].getRingtone({
      type: "alarm",
      success: function success(ret) {
        that.ringtonePath = that.ringtonePath + "alarm  title:" + ret.title + "\n";
        console.log('media.getRingtone----------success' + ret.title);
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "getRingtone fail------" + errocode + ': ' + erromsg
        });

        console.log('media.getRingtone----------' + errocode + ': ' + erromsg);
      },
      complete: function complete() {
        console.log('media.getRingtone----------complete');
      }
    });

    _system["default"].getRingtone({
      type: "ringtone",
      success: function success(ret) {
        that.ringtonePath = that.ringtonePath + "ringtone  title:" + ret.title + "\n";
        console.log('media.getRingtone----------success' + ret.title);
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "getRingtone fail------" + errocode + ': ' + erromsg
        });

        console.log('media.getRingtone----------' + errocode + ': ' + erromsg);
      },
      complete: function complete() {
        console.log('media.getRingtone----------complete');
      }
    });

    _system["default"].getRingtone({
      type: "notification",
      success: function success(ret) {
        that.ringtonePath = that.ringtonePath + "notification  title:" + ret.title + "\n";
        console.log('media.getRingtone----------success' + ret.title);
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "getRingtone fail------" + errocode + ': ' + erromsg
        });

        console.log('media.getRingtone----------' + errocode + ': ' + erromsg);
      },
      complete: function complete() {
        console.log('media.getRingtone----------complete');
      }
    });
  },
  takeVideo: function takeVideo() {
    var that = this;

    _system["default"].takeVideo({
      success: function success(ret) {
        that.pathVideoSave = ret.uri;
        that.nameVideoSave = ret.name;
        that.sizeVideoSave = ret.size;
        that.videoUri = ret.uri;
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "takeVideo fail------" + errocode + ': ' + erromsg
        });

        console.log('media.takeVideo----------' + errocode + ': ' + erromsg);
      },
      cancel: function cancel() {
        console.log('media.takeVideo----------cancel');
      },
      complete: function complete() {
        console.log('media.takeVideo----------complete');
      }
    });
  },
  pickVideo: function pickVideo() {
    var that = this;

    _system["default"].pickVideo({
      success: function success(ret) {
        that.pathVideoPick = ret.uri;
        that.nameVideoPick = ret.name;
        that.sizeVideoPick = ret.size;
        that.videoUri = ret.uri;
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "pickVideo fail------" + errocode + ': ' + erromsg
        });

        console.log('media.pickVideo----------' + errocode + ': ' + erromsg);
      },
      cancel: function cancel() {
        console.log('media.pickVideo----------cancel');
      },
      complete: function complete() {
        console.log('media.pickVideo----------complete');
      }
    });
  },
  getFile: function getFile() {
    var that = this;

    _system3["default"].get({
      uri: that.pathFilePick,
      success: function success(ret) {
        that.fileGetData = JSON.stringify(ret);
        console.log('file_get_data---------success ' + JSON.stringify(ret));
      },
      fail: function fail(errmsg, errcode) {
        that.fileGetData = errcode + '---' + errmsg;
        console.log('file_get_data---------fail ' + errcode + ': ' + errmsg);
      }
    });
  },
  pickFile: function pickFile() {
    var that = this;

    _system["default"].pickFile({
      success: function success(ret) {
        that.pathFilePick = ret.uri;
        that.nameFilePick = ret.name;
        that.sizeFilePick = ret.size;
        console.log('media.pickFile----------success');
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "pickFile fail------" + errocode + ': ' + erromsg
        });

        console.log('media.pickFile----------' + errocode + ': ' + erromsg);
      },
      cancel: function cancel() {
        console.log('media.pickFile----------cancel');
      },
      complete: function complete() {
        console.log('media.pickFile----------complete');
      }
    });
  },
  SavePhoto: function SavePhoto() {
    var that = this;

    _system["default"].saveToPhotosAlbum({
      uri: that.pathPhotoSave,
      success: function success() {
        console.log('media.saveToPhotosAlbum----------success');
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "media.saveToPhotosAlbum fail------" + errocode + ': ' + erromsg
        });

        console.log('media.saveToPhotosAlbum----------' + errocode + ': ' + erromsg);
      },
      complete: function complete() {
        console.log('media.saveToPhotosAlbum----------complete');
      }
    });
  },
  SaveVideo: function SaveVideo() {
    var that = this;

    _system["default"].saveToPhotosAlbum({
      uri: that.pathVideoSave,
      success: function success() {
        console.log('media.saveToPhotosAlbum----------success');
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "saveToPhotosAlbum fail------" + errocode + ': ' + erromsg
        });

        console.log('media.saveToPhotosAlbum----------' + errocode + ': ' + erromsg);
      },
      complete: function complete() {
        console.log('media.saveToPhotosAlbum----------complete');
      }
    });
  },
  viewPics: function viewPics() {
    _system["default"].previewImage({
      current: "http://static.wgpet.com/editor/attached/image/20141124/20141124225933_71813.jpg",
      uris: ["http://img3.imgtn.bdimg.com/it/u=3993672553,267575750&fm=21&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=2652905594,2769975769&fm=21&gp=0.jpg", "/common/logo.png", "http://imgsrc.baidu.com/forum/w%3D580/sign=fe8a7e7f78ec54e741ec1a1689399bfd/4b3f9682d158ccbfb334467b1ad8bc3eb33541cd.jpg", "http://static.wgpet.com/editor/attached/image/20141124/20141124225933_71813.jpg", "http://zyline-photo.qiniudn.com/1392705051156.jpg", "http://v1.qzone.cc/pic/201405/25/13/57/5381864e3b8af886.jpg%21600x600.jpg", "http://wanzao2.b0.upaiyun.com/system/pictures/23660313/original/8d4f08e50be02ae3.png"],
      success: function success() {
        console.log('previewImage success');
      },
      fail: function fail(erromsg, errocode) {
        console.log('previewImage errocode:' + errocode);
      },
      complete: function complete() {
        console.log('previewImage complete');
      }
    });
  },
  pickFiles: function pickFiles() {
    var that = this;

    _system["default"].pickFiles({
      success: function success(ret) {
        that.pathFilePicks = ret.uris;
        that.filesFilePicks = JSON.stringify(ret.files);
        console.log('media.pickFiles----------success');
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "pickFiles fail------" + errocode + ': ' + erromsg
        });

        console.log('media.pickFiles----------' + errocode + ': ' + erromsg);
      },
      cancel: function cancel() {
        console.log('media.pickFiles----------cancel');
      },
      complete: function complete() {
        console.log('media.pickFiles----------complete');
      }
    });
  },
  pickImages: function pickImages() {
    var that = this;

    _system["default"].pickImages({
      success: function success(ret) {
        that.pathImagePicks = ret.uris;
        that.filesImagePicks = JSON.stringify(ret.files);
        console.log('media.pickImages----------success');
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "pickImages fail------" + errocode + ': ' + erromsg
        });

        console.log('media.pickImages----------' + errocode + ': ' + erromsg);
      },
      cancel: function cancel() {
        console.log('media.pickImages----------cancel');
      },
      complete: function complete() {
        console.log('media.pickImages----------complete');
      }
    });
  },
  pickVideos: function pickVideos() {
    var that = this;

    _system["default"].pickVideos({
      success: function success(ret) {
        that.pathVideoPicks = ret.uris;
        that.filesVideoPicks = JSON.stringify(ret.files);
        console.log('media.pickVideos----------success');
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: "pickVideos fail------" + errocode + ': ' + erromsg
        });

        console.log('media.pickVideos----------' + errocode + ': ' + erromsg);
      },
      cancel: function cancel() {
        console.log('media.pickVideos----------cancel');
      },
      complete: function complete() {
        console.log('media.pickVideos----------complete');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXGludGVyZmFjZVxcZ3JhcGhpY1xcbWVkaWFcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9lOi9Xb3Jrc3BhY2VIdWF3ZWkvVGVzdE15UGhvbmUvY29tLndpbGRkZXYudGVzdG15cGhvbmUvc3JjL2ludGVyZmFjZS9ncmFwaGljL21lZGlhL2luZGV4LnV4Iiwid2VicGFjazovLy9lOi9Xb3Jrc3BhY2VIdWF3ZWkvVGVzdE15UGhvbmUvY29tLndpbGRkZXYudGVzdG15cGhvbmUvc3JjL2ludGVyZmFjZS9ncmFwaGljL21lZGlhL2luZGV4LnV4P2QxODkiLCJ3ZWJwYWNrOi8vL2U6L1dvcmtzcGFjZUh1YXdlaS9UZXN0TXlQaG9uZS9jb20ud2lsZGRldi50ZXN0bXlwaG9uZS9zcmMvaW50ZXJmYWNlL2dyYXBoaWMvbWVkaWEvaW5kZXgudXg/MjE0YiIsIndlYnBhY2s6Ly8vZTovV29ya3NwYWNlSHVhd2VpL1Rlc3RNeVBob25lL2NvbS53aWxkZGV2LnRlc3RteXBob25lL3NyYy9pbnRlcmZhY2UvZ3JhcGhpYy9tZWRpYS9pbmRleC51eD81NTU1Il0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uL1dvcmtzcGFjZUh1YXdlaS9UZXN0TXlQaG9uZS9jb20ud2lsZGRldi50ZXN0bXlwaG9uZS9zcmMvaW50ZXJmYWNlL2dyYXBoaWMvbWVkaWEvaW5kZXgudXhcIik7XG4iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9pbmRleC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxXb3Jrc3BhY2VIdWF3ZWlcXFxcVGVzdE15UGhvbmVcXFxcY29tLndpbGRkZXYudGVzdG15cGhvbmVcXFxcc3JjXFxcXGludGVyZmFjZVxcXFxncmFwaGljXFxcXG1lZGlhXFxcXGluZGV4LnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXFdvcmtzcGFjZUh1YXdlaVxcXFxUZXN0TXlQaG9uZVxcXFxjb20ud2lsZGRldi50ZXN0bXlwaG9uZVxcXFxzcmNcXFxcaW50ZXJmYWNlXFxcXGdyYXBoaWNcXFxcbWVkaWFcXFxcaW5kZXgudXghLi9pbmRleC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1jb21waWxlclxcXFxqc3gtbG9hZGVyLmpzJnBsdWdpbnNbXT1lOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcyZwbHVnaW5zW109ZTpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2luZGV4LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzIuNS4yLVN0YWJsZS4zMDAnfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5wYWdlLXRpdGxlLXdyYXBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI4MHB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnBhZ2UtdGl0bGVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcHhcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNiYmJiYmJcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiY29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjJweFwiXG4gIH0sXG4gIFwiLmJ0blwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI2MHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNjBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwZmFlZmZcIlxuICB9LFxuICBcIi5pdGVtLWNvbnRhaW5lclwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjYwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI2MHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuaXRlbS1jb250ZW50XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIuaW1hZ2VcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjMwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjMwMHB4XCJcbiAgfSxcbiAgXCIudmlkZW9cIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjMwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjMwMHB4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJwYWdlLXRpdGxlLXdyYXBcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jb21wb25lbnROYW1lfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJwYWdlLXRpdGxlXCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIml0ZW0tY29udGFpbmVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIml0ZW0tY29udGVudFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2UuZ3JhcGhpYy5tZWRpYS5wYXRoT2ZUYWtlUGhvdG8nKSkrJzogJysodGhpcy5wYXRoUGhvdG9TYXZlKX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2UuZ3JhcGhpYy5tZWRpYS5uYW1lT2ZUYWtlUGhvdG8nKSkrJ++8micrKHRoaXMubmFtZVBob3RvU2F2ZSl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInR4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEuc2l6ZU9mVGFrZVBob3RvJykpKyfvvJonKyh0aGlzLnNpemVQaG90b1NhdmUpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0eHRcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5ncmFwaGljLm1lZGlhLnBhdGhPZlBpY2tQaG90bycpKSsn77yaJysodGhpcy5wYXRoUGhvdG9QaWNrKX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2UuZ3JhcGhpYy5tZWRpYS5uYW1lT2ZQaWNrUGhvdG8nKSkrJ++8micrKHRoaXMubmFtZVBob3RvUGljayl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInR4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEuc2l6ZU9mUGlja1Bob3RvJykpKyfvvJonKyh0aGlzLnNpemVQaG90b1BpY2spfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0eHRcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5ncmFwaGljLm1lZGlhLnBhdGhPZlJpbmd0b25lJykpKyfvvJonKyh0aGlzLnJpbmd0b25lUGF0aCl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInR4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGhvdG9Vcml9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImltYWdlXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5ncmFwaGljLm1lZGlhLnRha2VQaG90bycpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJidG5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInRha2VQaG90b1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2UuZ3JhcGhpYy5tZWRpYS5zYXZlUGhvdG8nKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJTYXZlUGhvdG9cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEucGlja1Bob3RvJyl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwicGlja1Bob3RvXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5ncmFwaGljLm1lZGlhLnNldFJpbmd0b25lJyl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwic2V0UmluZ3RvbmVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEuc2V0QWxhcm1SaW5ndG9uZScpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJidG5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInNldEFsYXJtUmluZ3RvbmVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEuc2V0Tm90aWZpY2F0aW9uUmluZ3RvbmUnKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzZXROb3RpZmljYXRpb25SaW5ndG9uZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2UuZ3JhcGhpYy5tZWRpYS5nZXRSaW5ndG9uZScpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJidG5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImdldFJpbmd0b25lXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpdGVtLWNvbnRlbnRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEucGF0aE9mVGFrZVZpZGVvJykpKyfvvJonKyh0aGlzLnBhdGhWaWRlb1NhdmUpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0eHRcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5ncmFwaGljLm1lZGlhLm5hbWVPZlRha2VWaWRlbycpKSsn77yaJysodGhpcy5uYW1lVmlkZW9TYXZlKX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2UuZ3JhcGhpYy5tZWRpYS5zaXplT2ZUYWtlVmlkZW8nKSkrJ++8micrKHRoaXMuc2l6ZVZpZGVvU2F2ZSl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInR4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEucGF0aE9mUGlja1ZpZGVvJykpKyfvvJonKyh0aGlzLnBhdGhWaWRlb1BpY2spfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0eHRcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5ncmFwaGljLm1lZGlhLm5hbWVPZlBpY2tWaWRlbycpKSsn77yaJysodGhpcy5uYW1lVmlkZW9QaWNrKX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2UuZ3JhcGhpYy5tZWRpYS5zaXplT2ZQaWNrVmlkZW8nKSkrJ++8micrKHRoaXMuc2l6ZVZpZGVvUGljayl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInR4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ2aWRlb1wiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmlkZW9Vcml9LFxuICAgICAgICAgICAgXCJhdXRvcGxheVwiOiBcInRydWVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ2aWRlb1wiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2UuZ3JhcGhpYy5tZWRpYS50YWtlVmlkZW8nKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJ0YWtlVmlkZW9cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEuc2F2ZVZpZGVvJyl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwiU2F2ZVZpZGVvXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5ncmFwaGljLm1lZGlhLnBpY2tWaWRlbycpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJidG5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInBpY2tWaWRlb1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaXRlbS1jb250ZW50XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5ncmFwaGljLm1lZGlhLnBhdGhPZlBpY2tGaWxlJykpKyfvvJonKyh0aGlzLnBhdGhGaWxlUGljayl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInR4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEubmFtZU9mUGlja0ZpbGUnKSkrJ++8micrKHRoaXMubmFtZUZpbGVQaWNrKX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2UuZ3JhcGhpYy5tZWRpYS5zaXplT2ZQaWNrRmlsZScpKSsn77yaJysodGhpcy5zaXplRmlsZVBpY2spfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0eHRcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5ncmFwaGljLm1lZGlhLmZpbGVHZXREYXRhJykpKyfvvJonKyh0aGlzLmZpbGVHZXREYXRhKX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEucGlja0ZpbGUnKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJwaWNrRmlsZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2UuZ3JhcGhpYy5tZWRpYS5nZXRGaWxlSW5mbycpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJidG5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImdldEZpbGVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEudmlld1BpY3MnKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJ2aWV3UGljc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaXRlbS1jb250ZW50XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5ncmFwaGljLm1lZGlhLnBhdGhPZk11bHRpUGlja0ZpbGUnKSkrJ++8micrKHRoaXMucGF0aEZpbGVQaWNrcyl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInR4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEubGlzdE9mTXVsdGlQaWNrRmlsZScpKSsn77yaJysodGhpcy5maWxlc0ZpbGVQaWNrcyl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInR4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEucGF0aE9mTXVsdGlQaWNrUGljJykpKyfvvJonKyh0aGlzLnBhdGhJbWFnZVBpY2tzKX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2UuZ3JhcGhpYy5tZWRpYS5saXN0T2ZNdWx0aVBpY2tQaWMnKSkrJ++8micrKHRoaXMuZmlsZXNJbWFnZVBpY2tzKX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2UuZ3JhcGhpYy5tZWRpYS5wYXRoT2ZNdWx0aVBpY2tWaWRlbycpKSsn77yaJysodGhpcy5wYXRoVmlkZW9QaWNrcyl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInR4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEubGlzdE9mTXVsdGlQaWNrVmlkZW8nKSkrJ++8micrKHRoaXMuZmlsZXNWaWRlb1BpY2tzKX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidHh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW50ZXJmYWNlLmdyYXBoaWMubWVkaWEucGlja011bHRpRmlsZScpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJidG5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInBpY2tGaWxlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbnRlcmZhY2UuZ3JhcGhpYy5tZWRpYS5waWNrTXVsdGlQaWMnKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJwaWNrSW1hZ2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmludGVyZmFjZS5ncmFwaGljLm1lZGlhLnBpY2tNdWx0aVZpZGVvJyl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwicGlja1ZpZGVvc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLm1lZGlhXCIpKTtcblxudmFyIF9zeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnByb21wdFwiKSk7XG5cbnZhciBfc3lzdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5maWxlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZGF0YToge1xuICAgIGNvbXBvbmVudE5hbWU6ICdtZWRpYScsXG4gICAgcGF0aFBob3RvU2F2ZTogJycsXG4gICAgbmFtZVBob3RvU2F2ZTogJycsXG4gICAgc2l6ZVBob3RvU2F2ZTogJycsXG4gICAgcGF0aFBob3RvUGljazogJycsXG4gICAgbmFtZVBob3RvUGljazogJycsXG4gICAgc2l6ZVBob3RvUGljazogJycsXG4gICAgcGF0aFZpZGVvU2F2ZTogJycsXG4gICAgbmFtZVZpZGVvU2F2ZTogJycsXG4gICAgc2l6ZVZpZGVvU2F2ZTogJycsXG4gICAgcGF0aFZpZGVvUGljazogJycsXG4gICAgbmFtZVZpZGVvUGljazogJycsXG4gICAgc2l6ZVZpZGVvUGljazogJycsXG4gICAgcGF0aFJlY29yZFN0YXJ0OiAnJyxcbiAgICBwYXRoUmVjb3JkU3RvcDogJycsXG4gICAgcGhvdG9Vcmk6ICcnLFxuICAgIHZpZGVvVXJpOiAnJyxcbiAgICBwYXRoRmlsZVBpY2s6ICcnLFxuICAgIG5hbWVGaWxlUGljazogJycsXG4gICAgc2l6ZUZpbGVQaWNrOiAnJyxcbiAgICBGaWxlVXJpOiAnJyxcbiAgICBmaWxlR2V0RGF0YTogJycsXG4gICAgcmluZ3RvbmVQYXRoOiAnJyxcbiAgICBwYXRoRmlsZVBpY2tzOiAnJyxcbiAgICBmaWxlc0ZpbGVQaWNrczogJycsXG4gICAgcGF0aEltYWdlUGlja3M6ICcnLFxuICAgIGZpbGVzSW1hZ2VQaWNrczogJycsXG4gICAgcGF0aFZpZGVvUGlja3M6ICcnLFxuICAgIGZpbGVzVmlkZW9QaWNrczogJydcbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICB0ZXh0OiAnbWVkaWEnXG4gICAgfSk7XG4gIH0sXG4gIHRha2VQaG90bzogZnVuY3Rpb24gdGFrZVBob3RvKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnRha2VQaG90byh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJldCkge1xuICAgICAgICB0aGF0LnBhdGhQaG90b1NhdmUgPSByZXQudXJpO1xuICAgICAgICB0aGF0Lm5hbWVQaG90b1NhdmUgPSByZXQubmFtZTtcbiAgICAgICAgdGhhdC5zaXplUGhvdG9TYXZlID0gcmV0LnNpemU7XG4gICAgICAgIHRoYXQucGhvdG9VcmkgPSByZXQudXJpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJyb21zZywgZXJyb2NvZGUpIHtcbiAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogXCJ0YWtlUGhvdG8gZmFpbC0tLS0tLVwiICsgZXJyb2NvZGUgKyAnOiAnICsgZXJyb21zZ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEudGFrZVBob3RvLS0tLS0tLS0tLScgKyBlcnJvY29kZSArICc6ICcgKyBlcnJvbXNnKTtcbiAgICAgIH0sXG4gICAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLnRha2VQaG90by0tLS0tLS0tLS1jYW5jZWwnKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS50YWtlUGhvdG8tLS0tLS0tLS0tY29tcGxldGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgcGlja1Bob3RvOiBmdW5jdGlvbiBwaWNrUGhvdG8oKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucGlja0ltYWdlKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmV0KSB7XG4gICAgICAgIHRoYXQucGF0aFBob3RvUGljayA9IHJldC51cmk7XG4gICAgICAgIHRoYXQubmFtZVBob3RvUGljayA9IHJldC5uYW1lO1xuICAgICAgICB0aGF0LnNpemVQaG90b1BpY2sgPSByZXQuc2l6ZTtcbiAgICAgICAgdGhhdC5waG90b1VyaSA9IHJldC51cmk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBcInBpY2tJbWFnZSBmYWlsLS0tLS0tXCIgKyBlcnJvY29kZSArICc6ICcgKyBlcnJvbXNnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5waWNrSW1hZ2UtLS0tLS0tLS0tJyArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2cpO1xuICAgICAgfSxcbiAgICAgIGNhbmNlbDogZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEucGlja0ltYWdlLS0tLS0tLS0tLWNhbmNlbCcpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLnBpY2tJbWFnZS0tLS0tLS0tLS1jb21wbGV0ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBzZXRSaW5ndG9uZTogZnVuY3Rpb24gc2V0UmluZ3RvbmUoKSB7XG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uc2V0UmluZ3RvbmUoe1xuICAgICAgdXJpOiBcIi9jb21tb24vYXVkaW8vMjAxODEyMTFfMTU1NDM3Lm00YVwiLFxuICAgICAgdHlwZTogXCJyaW5ndG9uZVwiLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXQpIHtcbiAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogJ21lZGlhLnNldFJpbmd0b25lLS0tLS0tLS0tLXN1Y2Nlc3MnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5zZXRSaW5ndG9uZS0tLS0tLS0tLS1zdWNjZXNzJyk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBcInNldFJpbmd0b25lIGZhaWwtLS0tLS1cIiArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLnNldFJpbmd0b25lLS0tLS0tLS0tLScgKyBlcnJvY29kZSArICc6ICcgKyBlcnJvbXNnKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5zZXRSaW5ndG9uZS0tLS0tLS0tLS1jb21wbGV0ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBzZXRBbGFybVJpbmd0b25lOiBmdW5jdGlvbiBzZXRBbGFybVJpbmd0b25lKCkge1xuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnNldFJpbmd0b25lKHtcbiAgICAgIHVyaTogJy9jb21tb24vYXVkaW8vMjAxODEyMTFfMTU1NDM3Lm00YScsXG4gICAgICB0eXBlOiBcImFsYXJtXCIsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJldCkge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiAnbWVkaWEuc2V0UmluZ3RvbmUtLS0tLS0tLS0tc3VjY2VzcydcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLnNldFJpbmd0b25lLS0tLS0tLS0tLXN1Y2Nlc3MnKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm9tc2csIGVycm9jb2RlKSB7XG4gICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IFwic2V0UmluZ3RvbmUgZmFpbC0tLS0tLVwiICsgZXJyb2NvZGUgKyAnOiAnICsgZXJyb21zZ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEuc2V0UmluZ3RvbmUtLS0tLS0tLS0tJyArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2cpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLnNldFJpbmd0b25lLS0tLS0tLS0tLWNvbXBsZXRlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHNldE5vdGlmaWNhdGlvblJpbmd0b25lOiBmdW5jdGlvbiBzZXROb3RpZmljYXRpb25SaW5ndG9uZSgpIHtcbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5zZXRSaW5ndG9uZSh7XG4gICAgICB1cmk6ICcvY29tbW9uL2F1ZGlvLzIwMTgxMjExXzE1NTQzNy5tNGEnLFxuICAgICAgdHlwZTogXCJub3RpZmljYXRpb25cIixcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmV0KSB7XG4gICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6ICdtZWRpYS5zZXRSaW5ndG9uZS0tLS0tLS0tLS1zdWNjZXNzJ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEuc2V0UmluZ3RvbmUtLS0tLS0tLS0tc3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJyb21zZywgZXJyb2NvZGUpIHtcbiAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogXCJzZXRSaW5ndG9uZSBmYWlsLS0tLS0tXCIgKyBlcnJvY29kZSArICc6ICcgKyBlcnJvbXNnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5zZXRSaW5ndG9uZS0tLS0tLS0tLS0nICsgZXJyb2NvZGUgKyAnOiAnICsgZXJyb21zZyk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEuc2V0UmluZ3RvbmUtLS0tLS0tLS0tY29tcGxldGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZ2V0UmluZ3RvbmU6IGZ1bmN0aW9uIGdldFJpbmd0b25lKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmdldFJpbmd0b25lKHtcbiAgICAgIHR5cGU6IFwiYWxhcm1cIixcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmV0KSB7XG4gICAgICAgIHRoYXQucmluZ3RvbmVQYXRoID0gdGhhdC5yaW5ndG9uZVBhdGggKyBcImFsYXJtICB0aXRsZTpcIiArIHJldC50aXRsZSArIFwiXFxuXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5nZXRSaW5ndG9uZS0tLS0tLS0tLS1zdWNjZXNzJyArIHJldC50aXRsZSk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBcImdldFJpbmd0b25lIGZhaWwtLS0tLS1cIiArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLmdldFJpbmd0b25lLS0tLS0tLS0tLScgKyBlcnJvY29kZSArICc6ICcgKyBlcnJvbXNnKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5nZXRSaW5ndG9uZS0tLS0tLS0tLS1jb21wbGV0ZScpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uZ2V0UmluZ3RvbmUoe1xuICAgICAgdHlwZTogXCJyaW5ndG9uZVwiLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXQpIHtcbiAgICAgICAgdGhhdC5yaW5ndG9uZVBhdGggPSB0aGF0LnJpbmd0b25lUGF0aCArIFwicmluZ3RvbmUgIHRpdGxlOlwiICsgcmV0LnRpdGxlICsgXCJcXG5cIjtcbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLmdldFJpbmd0b25lLS0tLS0tLS0tLXN1Y2Nlc3MnICsgcmV0LnRpdGxlKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm9tc2csIGVycm9jb2RlKSB7XG4gICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IFwiZ2V0UmluZ3RvbmUgZmFpbC0tLS0tLVwiICsgZXJyb2NvZGUgKyAnOiAnICsgZXJyb21zZ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEuZ2V0UmluZ3RvbmUtLS0tLS0tLS0tJyArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2cpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLmdldFJpbmd0b25lLS0tLS0tLS0tLWNvbXBsZXRlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5nZXRSaW5ndG9uZSh7XG4gICAgICB0eXBlOiBcIm5vdGlmaWNhdGlvblwiLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXQpIHtcbiAgICAgICAgdGhhdC5yaW5ndG9uZVBhdGggPSB0aGF0LnJpbmd0b25lUGF0aCArIFwibm90aWZpY2F0aW9uICB0aXRsZTpcIiArIHJldC50aXRsZSArIFwiXFxuXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5nZXRSaW5ndG9uZS0tLS0tLS0tLS1zdWNjZXNzJyArIHJldC50aXRsZSk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBcImdldFJpbmd0b25lIGZhaWwtLS0tLS1cIiArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLmdldFJpbmd0b25lLS0tLS0tLS0tLScgKyBlcnJvY29kZSArICc6ICcgKyBlcnJvbXNnKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5nZXRSaW5ndG9uZS0tLS0tLS0tLS1jb21wbGV0ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICB0YWtlVmlkZW86IGZ1bmN0aW9uIHRha2VWaWRlbygpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS50YWtlVmlkZW8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXQpIHtcbiAgICAgICAgdGhhdC5wYXRoVmlkZW9TYXZlID0gcmV0LnVyaTtcbiAgICAgICAgdGhhdC5uYW1lVmlkZW9TYXZlID0gcmV0Lm5hbWU7XG4gICAgICAgIHRoYXQuc2l6ZVZpZGVvU2F2ZSA9IHJldC5zaXplO1xuICAgICAgICB0aGF0LnZpZGVvVXJpID0gcmV0LnVyaTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm9tc2csIGVycm9jb2RlKSB7XG4gICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IFwidGFrZVZpZGVvIGZhaWwtLS0tLS1cIiArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLnRha2VWaWRlby0tLS0tLS0tLS0nICsgZXJyb2NvZGUgKyAnOiAnICsgZXJyb21zZyk7XG4gICAgICB9LFxuICAgICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS50YWtlVmlkZW8tLS0tLS0tLS0tY2FuY2VsJyk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEudGFrZVZpZGVvLS0tLS0tLS0tLWNvbXBsZXRlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHBpY2tWaWRlbzogZnVuY3Rpb24gcGlja1ZpZGVvKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnBpY2tWaWRlbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJldCkge1xuICAgICAgICB0aGF0LnBhdGhWaWRlb1BpY2sgPSByZXQudXJpO1xuICAgICAgICB0aGF0Lm5hbWVWaWRlb1BpY2sgPSByZXQubmFtZTtcbiAgICAgICAgdGhhdC5zaXplVmlkZW9QaWNrID0gcmV0LnNpemU7XG4gICAgICAgIHRoYXQudmlkZW9VcmkgPSByZXQudXJpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJyb21zZywgZXJyb2NvZGUpIHtcbiAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogXCJwaWNrVmlkZW8gZmFpbC0tLS0tLVwiICsgZXJyb2NvZGUgKyAnOiAnICsgZXJyb21zZ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEucGlja1ZpZGVvLS0tLS0tLS0tLScgKyBlcnJvY29kZSArICc6ICcgKyBlcnJvbXNnKTtcbiAgICAgIH0sXG4gICAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLnBpY2tWaWRlby0tLS0tLS0tLS1jYW5jZWwnKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5waWNrVmlkZW8tLS0tLS0tLS0tY29tcGxldGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZ2V0RmlsZTogZnVuY3Rpb24gZ2V0RmlsZSgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBfc3lzdGVtM1tcImRlZmF1bHRcIl0uZ2V0KHtcbiAgICAgIHVyaTogdGhhdC5wYXRoRmlsZVBpY2ssXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJldCkge1xuICAgICAgICB0aGF0LmZpbGVHZXREYXRhID0gSlNPTi5zdHJpbmdpZnkocmV0KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpbGVfZ2V0X2RhdGEtLS0tLS0tLS1zdWNjZXNzICcgKyBKU09OLnN0cmluZ2lmeShyZXQpKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm1zZywgZXJyY29kZSkge1xuICAgICAgICB0aGF0LmZpbGVHZXREYXRhID0gZXJyY29kZSArICctLS0nICsgZXJybXNnO1xuICAgICAgICBjb25zb2xlLmxvZygnZmlsZV9nZXRfZGF0YS0tLS0tLS0tLWZhaWwgJyArIGVycmNvZGUgKyAnOiAnICsgZXJybXNnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgcGlja0ZpbGU6IGZ1bmN0aW9uIHBpY2tGaWxlKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnBpY2tGaWxlKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmV0KSB7XG4gICAgICAgIHRoYXQucGF0aEZpbGVQaWNrID0gcmV0LnVyaTtcbiAgICAgICAgdGhhdC5uYW1lRmlsZVBpY2sgPSByZXQubmFtZTtcbiAgICAgICAgdGhhdC5zaXplRmlsZVBpY2sgPSByZXQuc2l6ZTtcbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLnBpY2tGaWxlLS0tLS0tLS0tLXN1Y2Nlc3MnKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm9tc2csIGVycm9jb2RlKSB7XG4gICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IFwicGlja0ZpbGUgZmFpbC0tLS0tLVwiICsgZXJyb2NvZGUgKyAnOiAnICsgZXJyb21zZ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEucGlja0ZpbGUtLS0tLS0tLS0tJyArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2cpO1xuICAgICAgfSxcbiAgICAgIGNhbmNlbDogZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEucGlja0ZpbGUtLS0tLS0tLS0tY2FuY2VsJyk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEucGlja0ZpbGUtLS0tLS0tLS0tY29tcGxldGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgU2F2ZVBob3RvOiBmdW5jdGlvbiBTYXZlUGhvdG8oKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uc2F2ZVRvUGhvdG9zQWxidW0oe1xuICAgICAgdXJpOiB0aGF0LnBhdGhQaG90b1NhdmUsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEuc2F2ZVRvUGhvdG9zQWxidW0tLS0tLS0tLS0tc3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJyb21zZywgZXJyb2NvZGUpIHtcbiAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogXCJtZWRpYS5zYXZlVG9QaG90b3NBbGJ1bSBmYWlsLS0tLS0tXCIgKyBlcnJvY29kZSArICc6ICcgKyBlcnJvbXNnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5zYXZlVG9QaG90b3NBbGJ1bS0tLS0tLS0tLS0nICsgZXJyb2NvZGUgKyAnOiAnICsgZXJyb21zZyk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEuc2F2ZVRvUGhvdG9zQWxidW0tLS0tLS0tLS0tY29tcGxldGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgU2F2ZVZpZGVvOiBmdW5jdGlvbiBTYXZlVmlkZW8oKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uc2F2ZVRvUGhvdG9zQWxidW0oe1xuICAgICAgdXJpOiB0aGF0LnBhdGhWaWRlb1NhdmUsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEuc2F2ZVRvUGhvdG9zQWxidW0tLS0tLS0tLS0tc3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJyb21zZywgZXJyb2NvZGUpIHtcbiAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogXCJzYXZlVG9QaG90b3NBbGJ1bSBmYWlsLS0tLS0tXCIgKyBlcnJvY29kZSArICc6ICcgKyBlcnJvbXNnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5zYXZlVG9QaG90b3NBbGJ1bS0tLS0tLS0tLS0nICsgZXJyb2NvZGUgKyAnOiAnICsgZXJyb21zZyk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEuc2F2ZVRvUGhvdG9zQWxidW0tLS0tLS0tLS0tY29tcGxldGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgdmlld1BpY3M6IGZ1bmN0aW9uIHZpZXdQaWNzKCkge1xuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnByZXZpZXdJbWFnZSh7XG4gICAgICBjdXJyZW50OiBcImh0dHA6Ly9zdGF0aWMud2dwZXQuY29tL2VkaXRvci9hdHRhY2hlZC9pbWFnZS8yMDE0MTEyNC8yMDE0MTEyNDIyNTkzM183MTgxMy5qcGdcIixcbiAgICAgIHVyaXM6IFtcImh0dHA6Ly9pbWczLmltZ3RuLmJkaW1nLmNvbS9pdC91PTM5OTM2NzI1NTMsMjY3NTc1NzUwJmZtPTIxJmdwPTAuanBnXCIsIFwiaHR0cDovL2ltZzUuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjY1MjkwNTU5NCwyNzY5OTc1NzY5JmZtPTIxJmdwPTAuanBnXCIsIFwiL2NvbW1vbi9sb2dvLnBuZ1wiLCBcImh0dHA6Ly9pbWdzcmMuYmFpZHUuY29tL2ZvcnVtL3clM0Q1ODAvc2lnbj1mZThhN2U3Zjc4ZWM1NGU3NDFlYzFhMTY4OTM5OWJmZC80YjNmOTY4MmQxNThjY2JmYjMzNDQ2N2IxYWQ4YmMzZWIzMzU0MWNkLmpwZ1wiLCBcImh0dHA6Ly9zdGF0aWMud2dwZXQuY29tL2VkaXRvci9hdHRhY2hlZC9pbWFnZS8yMDE0MTEyNC8yMDE0MTEyNDIyNTkzM183MTgxMy5qcGdcIiwgXCJodHRwOi8venlsaW5lLXBob3RvLnFpbml1ZG4uY29tLzEzOTI3MDUwNTExNTYuanBnXCIsIFwiaHR0cDovL3YxLnF6b25lLmNjL3BpYy8yMDE0MDUvMjUvMTMvNTcvNTM4MTg2NGUzYjhhZjg4Ni5qcGclMjE2MDB4NjAwLmpwZ1wiLCBcImh0dHA6Ly93YW56YW8yLmIwLnVwYWl5dW4uY29tL3N5c3RlbS9waWN0dXJlcy8yMzY2MDMxMy9vcmlnaW5hbC84ZDRmMDhlNTBiZTAyYWUzLnBuZ1wiXSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwcmV2aWV3SW1hZ2Ugc3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJyb21zZywgZXJyb2NvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZXZpZXdJbWFnZSBlcnJvY29kZTonICsgZXJyb2NvZGUpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZXZpZXdJbWFnZSBjb21wbGV0ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBwaWNrRmlsZXM6IGZ1bmN0aW9uIHBpY2tGaWxlcygpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5waWNrRmlsZXMoe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXQpIHtcbiAgICAgICAgdGhhdC5wYXRoRmlsZVBpY2tzID0gcmV0LnVyaXM7XG4gICAgICAgIHRoYXQuZmlsZXNGaWxlUGlja3MgPSBKU09OLnN0cmluZ2lmeShyZXQuZmlsZXMpO1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEucGlja0ZpbGVzLS0tLS0tLS0tLXN1Y2Nlc3MnKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm9tc2csIGVycm9jb2RlKSB7XG4gICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IFwicGlja0ZpbGVzIGZhaWwtLS0tLS1cIiArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLnBpY2tGaWxlcy0tLS0tLS0tLS0nICsgZXJyb2NvZGUgKyAnOiAnICsgZXJyb21zZyk7XG4gICAgICB9LFxuICAgICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5waWNrRmlsZXMtLS0tLS0tLS0tY2FuY2VsJyk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEucGlja0ZpbGVzLS0tLS0tLS0tLWNvbXBsZXRlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHBpY2tJbWFnZXM6IGZ1bmN0aW9uIHBpY2tJbWFnZXMoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucGlja0ltYWdlcyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJldCkge1xuICAgICAgICB0aGF0LnBhdGhJbWFnZVBpY2tzID0gcmV0LnVyaXM7XG4gICAgICAgIHRoYXQuZmlsZXNJbWFnZVBpY2tzID0gSlNPTi5zdHJpbmdpZnkocmV0LmZpbGVzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLnBpY2tJbWFnZXMtLS0tLS0tLS0tc3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJyb21zZywgZXJyb2NvZGUpIHtcbiAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogXCJwaWNrSW1hZ2VzIGZhaWwtLS0tLS1cIiArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLnBpY2tJbWFnZXMtLS0tLS0tLS0tJyArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2cpO1xuICAgICAgfSxcbiAgICAgIGNhbmNlbDogZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEucGlja0ltYWdlcy0tLS0tLS0tLS1jYW5jZWwnKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5waWNrSW1hZ2VzLS0tLS0tLS0tLWNvbXBsZXRlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHBpY2tWaWRlb3M6IGZ1bmN0aW9uIHBpY2tWaWRlb3MoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucGlja1ZpZGVvcyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJldCkge1xuICAgICAgICB0aGF0LnBhdGhWaWRlb1BpY2tzID0gcmV0LnVyaXM7XG4gICAgICAgIHRoYXQuZmlsZXNWaWRlb1BpY2tzID0gSlNPTi5zdHJpbmdpZnkocmV0LmZpbGVzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLnBpY2tWaWRlb3MtLS0tLS0tLS0tc3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJyb21zZywgZXJyb2NvZGUpIHtcbiAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogXCJwaWNrVmlkZW9zIGZhaWwtLS0tLS1cIiArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLnBpY2tWaWRlb3MtLS0tLS0tLS0tJyArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2cpO1xuICAgICAgfSxcbiAgICAgIGNhbmNlbDogZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEucGlja1ZpZGVvcy0tLS0tLS0tLS1jYW5jZWwnKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5waWNrVmlkZW9zLS0tLS0tLS0tLWNvbXBsZXRlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=