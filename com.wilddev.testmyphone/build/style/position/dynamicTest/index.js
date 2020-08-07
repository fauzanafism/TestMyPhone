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
/******/ 	return __webpack_require__(__webpack_require__.s = "../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux":
/*!******************************************************************************************************!*\
  !*** e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\style\\position\\dynamicTest\\index.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\style\\position\\dynamicTest\\index.ux!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader?presets[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./index.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib/index.js?presets[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux")

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

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\style\\position\\dynamicTest\\index.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:\\WorkspaceHuawei\\TestMyPhone\\com.wilddev.testmyphone\\src\\style\\position\\dynamicTest\\index.ux!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux ***!
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
  ".demo-page": {
    "flexDirection": "column",
    "marginTop": "24px",
    "marginRight": "24px",
    "marginBottom": "24px",
    "marginLeft": "24px"
  },
  ".title-container": {
    "height": "72px",
    "flexDirection": "row",
    "alignItems": "center",
    "borderRadius": "4px",
    "paddingTop": "0px",
    "paddingRight": "24px",
    "paddingBottom": "0px",
    "paddingLeft": "24px",
    "marginBottom": "12px",
    "backgroundColor": "#eeeeee"
  },
  ".title": {
    "fontSize": "36px",
    "color": "#242424"
  },
  ".small-title": {
    "fontSize": "36px",
    "marginRight": "40px"
  },
  ".position-select": {
    "fontSize": "36px",
    "paddingTop": "8px",
    "paddingRight": "8px",
    "paddingBottom": "8px",
    "paddingLeft": "8px",
    "width": "300px"
  },
  ".select-container": {
    "marginBottom": "12px",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  ".box-container": {
    "width": "600px",
    "height": "600px",
    "marginTop": "12px",
    "marginRight": "51px",
    "marginBottom": "12px",
    "marginLeft": "51px",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderTopColor": "#242424",
    "borderRightColor": "#242424",
    "borderBottomColor": "#242424",
    "borderLeftColor": "#242424"
  },
  ".square-container": {
    "backgroundColor": "#4c9afa"
  },
  ".square-container-black": {
    "width": "100px",
    "height": "100px",
    "backgroundColor": "#242424",
    "borderTopColor": "#242424",
    "borderRightColor": "#242424",
    "borderBottomColor": "#242424",
    "borderLeftColor": "#242424"
  },
  ".slider": {
    "width": "400px",
    "marginLeft": "16px"
  },
  ".slider-container": {
    "flexDirection": "row",
    "alignItems": "center",
    "height": "60px",
    "marginBottom": "12px"
  },
  ".offset-label": {
    "width": "200px"
  },
  ".position-checkbox": {
    "width": "100px"
  },
  ".description": {
    "fontSize": "36px",
    "color": "#cccccc",
    "width": "700px",
    "marginBottom": "24px"
  },
  ".description-without-margin": {
    "fontSize": "36px",
    "color": "#cccccc",
    "width": "700px"
  },
  ".reset-button": {
    "position": "fixed",
    "zIndex": 9999,
    "width": "120px",
    "height": "120px",
    "borderRadius": "60px",
    "right": "40px",
    "bottom": "80px",
    "backgroundColor": "#f44336",
    "alignItems": "center",
    "justifyContent": "center",
    "opacity:active": 0.5
  },
  ".reset-text": {
    "fontSize": "36px",
    "color": "#ffffff",
    "textAlign": "center"
  },
  ".outside-container": {
    "width": "200px",
    "height": "200px",
    "marginTop": "20px",
    "marginLeft": "20px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#000000",
    "borderRightColor": "#000000",
    "borderBottomColor": "#000000",
    "borderLeftColor": "#000000"
  }
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux ***!
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
        "demo-page"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "title-container"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$t('message.style.position.positioning')}
              },
              "classList": [
                "title"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "select-container"
          ],
          "children": [
            {
              "type": "label",
              "attr": {
                "value": function () {return this.$t('message.style.position.specifyValue')}
              },
              "classList": [
                "small-title"
              ]
            },
            {
              "type": "select",
              "attr": {},
              "classList": [
                "position-select"
              ],
              "events": {
                "change": "onSelectChanged"
              },
              "children": [
                {
                  "type": "option",
                  "attr": {
                    "value": "relative",
                    "content": "relative"
                  },
                  "classList": [
                    "position-select"
                  ]
                },
                {
                  "type": "option",
                  "attr": {
                    "value": "absolute",
                    "content": "absolute"
                  },
                  "classList": [
                    "position-select"
                  ]
                },
                {
                  "type": "option",
                  "attr": {
                    "value": "fixed",
                    "content": "fixed"
                  },
                  "classList": [
                    "position-select"
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "title-container"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$t('message.style.position.offsetParmeter')}
              },
              "classList": [
                "title"
              ]
            }
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$t('message.style.position.distanceIntro')}
          },
          "classList": [
            "description-without-margin"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "slider-container"
          ],
          "children": [
            {
              "type": "label",
              "attr": {
                "value": function () {return 'top: '+(this.top)}
              },
              "classList": [
                "small-title",
                "offset-label"
              ]
            },
            {
              "type": "input",
              "attr": {
                "type": "checkbox",
                "checked": function () {return this.topCheckFlag}
              },
              "classList": [
                "position-checkbox"
              ],
              "events": {
                "change": function(evt){this.getCheckValue('topCheckFlag',evt)}
              }
            },
            {
              "type": "slider",
              "attr": {
                "min": "0",
                "max": "100",
                "value": function () {return this.top},
                "step": function () {return this.step}
              },
              "classList": [
                "slider"
              ],
              "events": {
                "change": function(evt){this.getSliderValue('top',evt)}
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "slider-container"
          ],
          "children": [
            {
              "type": "label",
              "attr": {
                "value": function () {return 'left: '+(this.left)}
              },
              "classList": [
                "small-title",
                "offset-label"
              ]
            },
            {
              "type": "input",
              "attr": {
                "type": "checkbox",
                "checked": function () {return this.leftCheckFlag}
              },
              "classList": [
                "position-checkbox"
              ],
              "events": {
                "change": function(evt){this.getCheckValue('leftCheckFlag',evt)}
              }
            },
            {
              "type": "slider",
              "attr": {
                "min": "0",
                "max": "100",
                "value": function () {return this.left},
                "step": function () {return this.step}
              },
              "classList": [
                "slider"
              ],
              "events": {
                "change": function(evt){this.getSliderValue('left',evt)}
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "slider-container"
          ],
          "children": [
            {
              "type": "label",
              "attr": {
                "value": function () {return 'right: '+(this.right)}
              },
              "classList": [
                "small-title",
                "offset-label"
              ]
            },
            {
              "type": "input",
              "attr": {
                "type": "checkbox",
                "checked": function () {return this.rightCheckFlag}
              },
              "classList": [
                "position-checkbox"
              ],
              "events": {
                "change": function(evt){this.getCheckValue('rightCheckFlag',evt)}
              }
            },
            {
              "type": "slider",
              "attr": {
                "min": "0",
                "max": "100",
                "value": function () {return this.right},
                "step": function () {return this.step}
              },
              "classList": [
                "slider"
              ],
              "events": {
                "change": function(evt){this.getSliderValue('right',evt)}
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "slider-container"
          ],
          "children": [
            {
              "type": "label",
              "attr": {
                "value": function () {return 'bottom: '+(this.bottom)}
              },
              "classList": [
                "small-title",
                "offset-label"
              ]
            },
            {
              "type": "input",
              "attr": {
                "type": "checkbox",
                "checked": function () {return this.bottomCheckFlag}
              },
              "classList": [
                "position-checkbox"
              ],
              "events": {
                "change": function(evt){this.getCheckValue('bottomCheckFlag',evt)}
              }
            },
            {
              "type": "slider",
              "attr": {
                "min": "0",
                "max": "100",
                "value": function () {return this.bottom},
                "step": function () {return this.step}
              },
              "classList": [
                "slider"
              ],
              "events": {
                "change": function(evt){this.getSliderValue('bottom',evt)}
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "slider-container"
          ],
          "children": [
            {
              "type": "label",
              "attr": {
                "value": function () {return 'width: '+(this.width)}
              },
              "classList": [
                "small-title",
                "offset-label"
              ]
            },
            {
              "type": "slider",
              "attr": {
                "min": "100",
                "max": "280",
                "value": function () {return this.width},
                "step": function () {return this.step}
              },
              "classList": [
                "slider"
              ],
              "events": {
                "change": function(evt){this.getSliderValue('width',evt)}
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "slider-container"
          ],
          "children": [
            {
              "type": "label",
              "attr": {
                "value": function () {return 'height: '+(this.height)}
              },
              "classList": [
                "small-title",
                "offset-label"
              ]
            },
            {
              "type": "slider",
              "attr": {
                "min": "100",
                "max": "280",
                "value": function () {return this.height},
                "step": function () {return this.step}
              },
              "classList": [
                "slider"
              ],
              "events": {
                "change": function(evt){this.getSliderValue('height',evt)}
              }
            }
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.getStyleText}
          },
          "classList": [
            "description"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "reset-button"
          ],
          "events": {
            "click": "resetState"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "Reset"
              },
              "classList": [
                "reset-text"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "box-container"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "outside-container"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "style": {
                    "backgroundColor": "#008000",
                    "width": "100px",
                    "height": "100px"
                  }
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "square-container"
                  ],
                  "style": function () {return this.getStyleText}
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib/index.js?presets[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=e:\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/node_modules/babel-loader/lib?presets[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!e:/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!e:/WorkspaceHuawei/TestMyPhone/com.wilddev.testmyphone/src/style/position/dynamicTest/index.ux ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  "private": {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 100,
    height: 100,
    position: 'relative',
    topCheckFlag: false,
    leftCheckFlag: false,
    rightCheckFlag: false,
    bottomCheckFlag: false,
    componentName: 'all Positions'
  },
  computed: {
    getStyleText: function getStyleText() {
      var top = this.top,
          left = this.left,
          right = this.right,
          bottom = this.bottom,
          _this$position = this.position,
          position = _this$position === void 0 ? 'relative' : _this$position,
          topCheckFlag = this.topCheckFlag,
          leftCheckFlag = this.leftCheckFlag,
          rightCheckFlag = this.rightCheckFlag,
          bottomCheckFlag = this.bottomCheckFlag,
          _this$width = this.width,
          width = _this$width === void 0 ? 100 : _this$width,
          _this$height = this.height,
          height = _this$height === void 0 ? 100 : _this$height;
      var styleText = "position:".concat(position, ";");

      var addStyleOffset = function addStyleOffset(offsetDirection, offsetNumber, positionAttribute) {
        var enableFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (offsetDirection) {
          var newStringTextPrefix = positionAttribute === 'relative' ? 'margin-' : '';

          if (!enableFlag) {
            offsetNumber = null;
          } else {
            offsetNumber += 'px';
          }

          styleText += "".concat(newStringTextPrefix).concat(offsetDirection, ":").concat(offsetNumber, ";");
        }
      };

      var addStyleLength = function addStyleLength(lengthName, lengthNumber) {
        styleText += "".concat(lengthName, ":").concat(lengthNumber, "px;");
      };

      addStyleOffset('top', top, position, topCheckFlag);
      addStyleOffset('left', left, position, leftCheckFlag);
      addStyleOffset('right', right, position, rightCheckFlag);
      addStyleOffset('bottom', bottom, position, bottomCheckFlag);
      addStyleLength('width', width);
      addStyleLength('height', height);
      return styleText;
    }
  },
  onSelectChanged: function onSelectChanged(e) {
    this.position = e.newValue;
  },
  getSliderValue: function getSliderValue(name, e) {
    this[name] = e.progress;
  },
  getCheckValue: function getCheckValue(name, e) {
    this[name] = e.checked;
  },
  resetState: function resetState() {
    this.top = 0;
    this.left = 0;
    this.right = 0;
    this.bottom = 0;
    this.width = 100;
    this.height = 100;
    this.topCheckFlag = false;
    this.leftCheckFlag = false;
    this.rightCheckFlag = false;
    this.bottomCheckFlag = false;
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: this.$t("message.style.position.testPage")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXHN0eWxlXFxwb3NpdGlvblxcZHluYW1pY1Rlc3RcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9lOi9Xb3Jrc3BhY2VIdWF3ZWkvVGVzdE15UGhvbmUvY29tLndpbGRkZXYudGVzdG15cGhvbmUvc3JjL3N0eWxlL3Bvc2l0aW9uL2R5bmFtaWNUZXN0L2luZGV4LnV4Iiwid2VicGFjazovLy9lOi9Xb3Jrc3BhY2VIdWF3ZWkvVGVzdE15UGhvbmUvY29tLndpbGRkZXYudGVzdG15cGhvbmUvc3JjL3N0eWxlL3Bvc2l0aW9uL2R5bmFtaWNUZXN0L2luZGV4LnV4PzNmMGUiLCJ3ZWJwYWNrOi8vL2U6L1dvcmtzcGFjZUh1YXdlaS9UZXN0TXlQaG9uZS9jb20ud2lsZGRldi50ZXN0bXlwaG9uZS9zcmMvc3R5bGUvcG9zaXRpb24vZHluYW1pY1Rlc3QvaW5kZXgudXg/N2QxMyIsIndlYnBhY2s6Ly8vZTovV29ya3NwYWNlSHVhd2VpL1Rlc3RNeVBob25lL2NvbS53aWxkZGV2LnRlc3RteXBob25lL3NyYy9zdHlsZS9wb3NpdGlvbi9keW5hbWljVGVzdC9pbmRleC51eD9jYWUwIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uL1dvcmtzcGFjZUh1YXdlaS9UZXN0TXlQaG9uZS9jb20ud2lsZGRldi50ZXN0bXlwaG9uZS9zcmMvc3R5bGUvcG9zaXRpb24vZHluYW1pY1Rlc3QvaW5kZXgudXhcIik7XG4iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9pbmRleC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxXb3Jrc3BhY2VIdWF3ZWlcXFxcVGVzdE15UGhvbmVcXFxcY29tLndpbGRkZXYudGVzdG15cGhvbmVcXFxcc3JjXFxcXHN0eWxlXFxcXHBvc2l0aW9uXFxcXGR5bmFtaWNUZXN0XFxcXGluZGV4LnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXFdvcmtzcGFjZUh1YXdlaVxcXFxUZXN0TXlQaG9uZVxcXFxjb20ud2lsZGRldi50ZXN0bXlwaG9uZVxcXFxzcmNcXFxcc3R5bGVcXFxccG9zaXRpb25cXFxcZHluYW1pY1Rlc3RcXFxcaW5kZXgudXghLi9pbmRleC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1jb21waWxlclxcXFxqc3gtbG9hZGVyLmpzJnBsdWdpbnNbXT1lOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcyZwbHVnaW5zW109ZTpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2luZGV4LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzIuNS4yLVN0YWJsZS4zMDAnfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5wYWdlLXRpdGxlLXdyYXBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI4MHB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnBhZ2UtdGl0bGVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcHhcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNiYmJiYmJcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiY29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjJweFwiXG4gIH0sXG4gIFwiLmJ0blwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI2MHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNjBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwZmFlZmZcIlxuICB9LFxuICBcIi5kZW1vLXBhZ2VcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjRweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjRweFwiXG4gIH0sXG4gIFwiLnRpdGxlLWNvbnRhaW5lclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI3MnB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI0cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VlZWVlZVwiXG4gIH0sXG4gIFwiLnRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzZweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMjQyNDI0XCJcbiAgfSxcbiAgXCIuc21hbGwtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwcHhcIlxuICB9LFxuICBcIi5wb3NpdGlvbi1zZWxlY3RcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiOHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI4cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI4cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiOHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjMwMHB4XCJcbiAgfSxcbiAgXCIuc2VsZWN0LWNvbnRhaW5lclwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcIi5ib3gtY29udGFpbmVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjAwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjYwMHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUxcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MXB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjMjQyNDI0XCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiIzI0MjQyNFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjMjQyNDI0XCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjMjQyNDI0XCJcbiAgfSxcbiAgXCIuc3F1YXJlLWNvbnRhaW5lclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNGM5YWZhXCJcbiAgfSxcbiAgXCIuc3F1YXJlLWNvbnRhaW5lci1ibGFja1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzI0MjQyNFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjMjQyNDI0XCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiIzI0MjQyNFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjMjQyNDI0XCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjMjQyNDI0XCJcbiAgfSxcbiAgXCIuc2xpZGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDAwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxNnB4XCJcbiAgfSxcbiAgXCIuc2xpZGVyLWNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnB4XCJcbiAgfSxcbiAgXCIub2Zmc2V0LWxhYmVsXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjAwcHhcIlxuICB9LFxuICBcIi5wb3NpdGlvbi1jaGVja2JveFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMHB4XCJcbiAgfSxcbiAgXCIuZGVzY3JpcHRpb25cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNjY2NjY2NcIixcbiAgICBcIndpZHRoXCI6IFwiNzAwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cHhcIlxuICB9LFxuICBcIi5kZXNjcmlwdGlvbi13aXRob3V0LW1hcmdpblwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM2cHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2NjY2NjY1wiLFxuICAgIFwid2lkdGhcIjogXCI3MDBweFwiXG4gIH0sXG4gIFwiLnJlc2V0LWJ1dHRvblwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ6SW5kZXhcIjogOTk5OSxcbiAgICBcIndpZHRoXCI6IFwiMTIwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEyMHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI2MHB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjQwcHhcIixcbiAgICBcImJvdHRvbVwiOiBcIjgwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmNDQzMzZcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJvcGFjaXR5OmFjdGl2ZVwiOiAwLjVcbiAgfSxcbiAgXCIucmVzZXQtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM2cHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIub3V0c2lkZS1jb250YWluZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCIyMDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjMDAwMDAwXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJwYWdlLXRpdGxlLXdyYXBcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jb21wb25lbnROYW1lfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJwYWdlLXRpdGxlXCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImRlbW8tcGFnZVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aXRsZS1jb250YWluZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5zdHlsZS5wb3NpdGlvbi5wb3NpdGlvbmluZycpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZWxlY3QtY29udGFpbmVyXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJsYWJlbFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLnN0eWxlLnBvc2l0aW9uLnNwZWNpZnlWYWx1ZScpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzbWFsbC10aXRsZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uLXNlbGVjdFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNoYW5nZVwiOiBcIm9uU2VsZWN0Q2hhbmdlZFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiBcInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicG9zaXRpb24tc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiBcImFic29sdXRlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicG9zaXRpb24tc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiBcImZpeGVkXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicG9zaXRpb24tc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aXRsZS1jb250YWluZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5zdHlsZS5wb3NpdGlvbi5vZmZzZXRQYXJtZXRlcicpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLnN0eWxlLnBvc2l0aW9uLmRpc3RhbmNlSW50cm8nKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb24td2l0aG91dC1tYXJnaW5cIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNsaWRlci1jb250YWluZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICd0b3A6ICcrKHRoaXMudG9wKX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic21hbGwtdGl0bGVcIixcbiAgICAgICAgICAgICAgICBcIm9mZnNldC1sYWJlbFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICBcImNoZWNrZWRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRvcENoZWNrRmxhZ31cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicG9zaXRpb24tY2hlY2tib3hcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmdldENoZWNrVmFsdWUoJ3RvcENoZWNrRmxhZycsZXZ0KX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xpZGVyXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5cIjogXCIwXCIsXG4gICAgICAgICAgICAgICAgXCJtYXhcIjogXCIxMDBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50b3B9LFxuICAgICAgICAgICAgICAgIFwic3RlcFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3RlcH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2xpZGVyXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy5nZXRTbGlkZXJWYWx1ZSgndG9wJyxldnQpfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2xpZGVyLWNvbnRhaW5lclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGFiZWxcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ2xlZnQ6ICcrKHRoaXMubGVmdCl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNtYWxsLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgXCJvZmZzZXQtbGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgXCJjaGVja2VkXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0Q2hlY2tGbGFnfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJwb3NpdGlvbi1jaGVja2JveFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbihldnQpe3RoaXMuZ2V0Q2hlY2tWYWx1ZSgnbGVmdENoZWNrRmxhZycsZXZ0KX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xpZGVyXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5cIjogXCIwXCIsXG4gICAgICAgICAgICAgICAgXCJtYXhcIjogXCIxMDBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0fSxcbiAgICAgICAgICAgICAgICBcInN0ZXBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnN0ZXB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNsaWRlclwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbihldnQpe3RoaXMuZ2V0U2xpZGVyVmFsdWUoJ2xlZnQnLGV2dCl9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzbGlkZXItY29udGFpbmVyXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJsYWJlbFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAncmlnaHQ6ICcrKHRoaXMucmlnaHQpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzbWFsbC10aXRsZVwiLFxuICAgICAgICAgICAgICAgIFwib2Zmc2V0LWxhYmVsXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICAgIFwiY2hlY2tlZFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRDaGVja0ZsYWd9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy5nZXRDaGVja1ZhbHVlKCdyaWdodENoZWNrRmxhZycsZXZ0KX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xpZGVyXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5cIjogXCIwXCIsXG4gICAgICAgICAgICAgICAgXCJtYXhcIjogXCIxMDBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodH0sXG4gICAgICAgICAgICAgICAgXCJzdGVwXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdGVwfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzbGlkZXJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmdldFNsaWRlclZhbHVlKCdyaWdodCcsZXZ0KX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNsaWRlci1jb250YWluZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICdib3R0b206ICcrKHRoaXMuYm90dG9tKX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic21hbGwtdGl0bGVcIixcbiAgICAgICAgICAgICAgICBcIm9mZnNldC1sYWJlbFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICBcImNoZWNrZWRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJvdHRvbUNoZWNrRmxhZ31cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicG9zaXRpb24tY2hlY2tib3hcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmdldENoZWNrVmFsdWUoJ2JvdHRvbUNoZWNrRmxhZycsZXZ0KX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xpZGVyXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5cIjogXCIwXCIsXG4gICAgICAgICAgICAgICAgXCJtYXhcIjogXCIxMDBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ib3R0b219LFxuICAgICAgICAgICAgICAgIFwic3RlcFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3RlcH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2xpZGVyXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy5nZXRTbGlkZXJWYWx1ZSgnYm90dG9tJyxldnQpfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2xpZGVyLWNvbnRhaW5lclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGFiZWxcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ3dpZHRoOiAnKyh0aGlzLndpZHRoKX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic21hbGwtdGl0bGVcIixcbiAgICAgICAgICAgICAgICBcIm9mZnNldC1sYWJlbFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsaWRlclwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwibWluXCI6IFwiMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJtYXhcIjogXCIyODBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy53aWR0aH0sXG4gICAgICAgICAgICAgICAgXCJzdGVwXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdGVwfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzbGlkZXJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmdldFNsaWRlclZhbHVlKCd3aWR0aCcsZXZ0KX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNsaWRlci1jb250YWluZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICdoZWlnaHQ6ICcrKHRoaXMuaGVpZ2h0KX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic21hbGwtdGl0bGVcIixcbiAgICAgICAgICAgICAgICBcIm9mZnNldC1sYWJlbFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsaWRlclwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwibWluXCI6IFwiMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJtYXhcIjogXCIyODBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5oZWlnaHR9LFxuICAgICAgICAgICAgICAgIFwic3RlcFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3RlcH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2xpZGVyXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy5nZXRTbGlkZXJWYWx1ZSgnaGVpZ2h0JyxldnQpfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5nZXRTdHlsZVRleHR9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJyZXNldC1idXR0b25cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInJlc2V0U3RhdGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiUmVzZXRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyZXNldC10ZXh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJveC1jb250YWluZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm91dHNpZGUtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA4MDAwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjEwMHB4XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInNxdWFyZS1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmdldFN0eWxlVGV4dH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IHtcbiAgXCJwcml2YXRlXCI6IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgd2lkdGg6IDEwMCxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3BDaGVja0ZsYWc6IGZhbHNlLFxuICAgIGxlZnRDaGVja0ZsYWc6IGZhbHNlLFxuICAgIHJpZ2h0Q2hlY2tGbGFnOiBmYWxzZSxcbiAgICBib3R0b21DaGVja0ZsYWc6IGZhbHNlLFxuICAgIGNvbXBvbmVudE5hbWU6ICdhbGwgUG9zaXRpb25zJ1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGdldFN0eWxlVGV4dDogZnVuY3Rpb24gZ2V0U3R5bGVUZXh0KCkge1xuICAgICAgdmFyIHRvcCA9IHRoaXMudG9wLFxuICAgICAgICAgIGxlZnQgPSB0aGlzLmxlZnQsXG4gICAgICAgICAgcmlnaHQgPSB0aGlzLnJpZ2h0LFxuICAgICAgICAgIGJvdHRvbSA9IHRoaXMuYm90dG9tLFxuICAgICAgICAgIF90aGlzJHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbixcbiAgICAgICAgICBwb3NpdGlvbiA9IF90aGlzJHBvc2l0aW9uID09PSB2b2lkIDAgPyAncmVsYXRpdmUnIDogX3RoaXMkcG9zaXRpb24sXG4gICAgICAgICAgdG9wQ2hlY2tGbGFnID0gdGhpcy50b3BDaGVja0ZsYWcsXG4gICAgICAgICAgbGVmdENoZWNrRmxhZyA9IHRoaXMubGVmdENoZWNrRmxhZyxcbiAgICAgICAgICByaWdodENoZWNrRmxhZyA9IHRoaXMucmlnaHRDaGVja0ZsYWcsXG4gICAgICAgICAgYm90dG9tQ2hlY2tGbGFnID0gdGhpcy5ib3R0b21DaGVja0ZsYWcsXG4gICAgICAgICAgX3RoaXMkd2lkdGggPSB0aGlzLndpZHRoLFxuICAgICAgICAgIHdpZHRoID0gX3RoaXMkd2lkdGggPT09IHZvaWQgMCA/IDEwMCA6IF90aGlzJHdpZHRoLFxuICAgICAgICAgIF90aGlzJGhlaWdodCA9IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgIGhlaWdodCA9IF90aGlzJGhlaWdodCA9PT0gdm9pZCAwID8gMTAwIDogX3RoaXMkaGVpZ2h0O1xuICAgICAgdmFyIHN0eWxlVGV4dCA9IFwicG9zaXRpb246XCIuY29uY2F0KHBvc2l0aW9uLCBcIjtcIik7XG5cbiAgICAgIHZhciBhZGRTdHlsZU9mZnNldCA9IGZ1bmN0aW9uIGFkZFN0eWxlT2Zmc2V0KG9mZnNldERpcmVjdGlvbiwgb2Zmc2V0TnVtYmVyLCBwb3NpdGlvbkF0dHJpYnV0ZSkge1xuICAgICAgICB2YXIgZW5hYmxlRmxhZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG5cbiAgICAgICAgaWYgKG9mZnNldERpcmVjdGlvbikge1xuICAgICAgICAgIHZhciBuZXdTdHJpbmdUZXh0UHJlZml4ID0gcG9zaXRpb25BdHRyaWJ1dGUgPT09ICdyZWxhdGl2ZScgPyAnbWFyZ2luLScgOiAnJztcblxuICAgICAgICAgIGlmICghZW5hYmxlRmxhZykge1xuICAgICAgICAgICAgb2Zmc2V0TnVtYmVyID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2Zmc2V0TnVtYmVyICs9ICdweCc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3R5bGVUZXh0ICs9IFwiXCIuY29uY2F0KG5ld1N0cmluZ1RleHRQcmVmaXgpLmNvbmNhdChvZmZzZXREaXJlY3Rpb24sIFwiOlwiKS5jb25jYXQob2Zmc2V0TnVtYmVyLCBcIjtcIik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBhZGRTdHlsZUxlbmd0aCA9IGZ1bmN0aW9uIGFkZFN0eWxlTGVuZ3RoKGxlbmd0aE5hbWUsIGxlbmd0aE51bWJlcikge1xuICAgICAgICBzdHlsZVRleHQgKz0gXCJcIi5jb25jYXQobGVuZ3RoTmFtZSwgXCI6XCIpLmNvbmNhdChsZW5ndGhOdW1iZXIsIFwicHg7XCIpO1xuICAgICAgfTtcblxuICAgICAgYWRkU3R5bGVPZmZzZXQoJ3RvcCcsIHRvcCwgcG9zaXRpb24sIHRvcENoZWNrRmxhZyk7XG4gICAgICBhZGRTdHlsZU9mZnNldCgnbGVmdCcsIGxlZnQsIHBvc2l0aW9uLCBsZWZ0Q2hlY2tGbGFnKTtcbiAgICAgIGFkZFN0eWxlT2Zmc2V0KCdyaWdodCcsIHJpZ2h0LCBwb3NpdGlvbiwgcmlnaHRDaGVja0ZsYWcpO1xuICAgICAgYWRkU3R5bGVPZmZzZXQoJ2JvdHRvbScsIGJvdHRvbSwgcG9zaXRpb24sIGJvdHRvbUNoZWNrRmxhZyk7XG4gICAgICBhZGRTdHlsZUxlbmd0aCgnd2lkdGgnLCB3aWR0aCk7XG4gICAgICBhZGRTdHlsZUxlbmd0aCgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICAgIHJldHVybiBzdHlsZVRleHQ7XG4gICAgfVxuICB9LFxuICBvblNlbGVjdENoYW5nZWQ6IGZ1bmN0aW9uIG9uU2VsZWN0Q2hhbmdlZChlKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IGUubmV3VmFsdWU7XG4gIH0sXG4gIGdldFNsaWRlclZhbHVlOiBmdW5jdGlvbiBnZXRTbGlkZXJWYWx1ZShuYW1lLCBlKSB7XG4gICAgdGhpc1tuYW1lXSA9IGUucHJvZ3Jlc3M7XG4gIH0sXG4gIGdldENoZWNrVmFsdWU6IGZ1bmN0aW9uIGdldENoZWNrVmFsdWUobmFtZSwgZSkge1xuICAgIHRoaXNbbmFtZV0gPSBlLmNoZWNrZWQ7XG4gIH0sXG4gIHJlc2V0U3RhdGU6IGZ1bmN0aW9uIHJlc2V0U3RhdGUoKSB7XG4gICAgdGhpcy50b3AgPSAwO1xuICAgIHRoaXMubGVmdCA9IDA7XG4gICAgdGhpcy5yaWdodCA9IDA7XG4gICAgdGhpcy5ib3R0b20gPSAwO1xuICAgIHRoaXMud2lkdGggPSAxMDA7XG4gICAgdGhpcy5oZWlnaHQgPSAxMDA7XG4gICAgdGhpcy50b3BDaGVja0ZsYWcgPSBmYWxzZTtcbiAgICB0aGlzLmxlZnRDaGVja0ZsYWcgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0Q2hlY2tGbGFnID0gZmFsc2U7XG4gICAgdGhpcy5ib3R0b21DaGVja0ZsYWcgPSBmYWxzZTtcbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICB0ZXh0OiB0aGlzLiR0KFwibWVzc2FnZS5zdHlsZS5wb3NpdGlvbi50ZXN0UGFnZVwiKVxuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM3Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=