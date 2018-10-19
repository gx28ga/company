webpackJsonp([8],{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(49)

var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(65),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\www\\activity\\app\\demovue\\src\\strategy\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-625b6d1b", Component.options)
  } else {
    hotAPI.reload("data-v-625b6d1b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requirePop = __webpack_require__(4);

var _requirePop2 = _interopRequireDefault(_requirePop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mounted: function mounted() {
        T.setImgSize();
    },

    methods: {
        go: function go() {
            if (!T.uid) {
                (0, _requirePop2.default)('login', {
                    props: {
                        transition: 'rotate3d'
                    }
                });
            } else {
                router.push("/main");
            }
        },
        goFirstMonth: function goFirstMonth() {
            if (!T.uid) {
                (0, _requirePop2.default)('login', {
                    props: {
                        transition: 'rotate3d'
                    }
                });
            } else {
                router.push("/hesitory");
            }
        },
        goTask: function goTask() {
            if (!T.uid) {
                (0, _requirePop2.default)('login', {
                    props: {
                        transition: 'rotate3d'
                    }
                });
            } else {
                router.push("/earn");
            }
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "strategy-box img-size"
  }, [_c('div', {
    staticClass: "banner img-size",
    attrs: {
      "data-height": "629",
      "data-width": "750"
    }
  }, [_c('div', {
    staticClass: "inviteBth img-size",
    attrs: {
      "data-width": "369",
      "data-height": "103",
      "data-left": "200",
      "data-bottom": "140"
    }
  }, [_c('a', {
    staticClass: "btn",
    on: {
      "click": _vm.go
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "everyDay img-size",
    attrs: {
      "data-width": "214",
      "data-height": "64",
      "data-left": "25",
      "data-bottom": "0",
      "data-paddingTop": "12"
    },
    on: {
      "click": _vm.go
    }
  }, [_vm._v("每日佣金奖励")]), _vm._v(" "), _c('div', {
    staticClass: "first img-size",
    attrs: {
      "data-width": "212",
      "data-height": "57",
      "data-lineHeight": "57",
      "data-left": "270",
      "data-bottom": "22"
    },
    on: {
      "click": _vm.goFirstMonth
    }
  }, [_vm._v("首月返现奖励")]), _vm._v(" "), _c('div', {
    staticClass: "first img-size",
    attrs: {
      "data-width": "212",
      "data-height": "57",
      "data-lineHeight": "57",
      "data-right": "25",
      "data-bottom": "22"
    },
    on: {
      "click": _vm.goTask
    }
  }, [_vm._v("邀请任务奖励")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "everyDayTitle img-size",
    attrs: {
      "data-width": "381",
      "data-height": "51",
      "data-marginTop": "30",
      "data-marginBottom": "40"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "contentStrategy img-size",
    attrs: {
      "data-paddingLeft": "15",
      "data-paddingRight": "15",
      "data-paddingBottom": "50"
    }
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "gongshi img-size",
    attrs: {
      "data-width": "554",
      "data-height": "134"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "zhang img-size",
    staticStyle: {
      "border": "none"
    },
    attrs: {
      "data-width": "640",
      "data-paddingLeft": "20",
      "data-marginTop": "20",
      "data-lineHeight": "36"
    }
  }, [_vm._v("* 每日佣金的实际发放，按每位好友待收所产生的佣金之和进行发放，与上述使用好友总待收公式计算所得，可能存在极小的误差，属于正常现象。\n")]), _vm._v(" "), _c('p', {
    staticClass: "example img-size",
    attrs: {
      "data-marginTop": "50",
      "data-height": "60",
      "data-lineHeight": "60"
    }
  }, [_vm._v("举个栗子")]), _vm._v(" "), _c('div', {
    staticClass: "exampleImg img-size",
    attrs: {
      "data-width": "666",
      "data-height": "201"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "gongshiContent img-size",
    attrs: {
      "data-width": "485",
      "data-height": "50",
      "data-lineHeight": "50",
      "data-marginTop": "30"
    }
  }, [_vm._v("每日佣金=0.7%x100,000/365=1.92元")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "inviteBtn img-size",
    attrs: {
      "data-width": "369",
      "data-height": "103"
    }
  }, [_c('a', {
    staticClass: "btn img-size",
    staticStyle: {
      "display": "block"
    },
    attrs: {
      "data-width": "369",
      "data-height": "103"
    },
    on: {
      "click": _vm.go
    }
  })])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "whatPrize img-size",
    attrs: {
      "data-paddingTop": "30",
      "data-paddingLeft": "65",
      "data-paddingRight": "65",
      "data-paddingBottom": "30"
    }
  }, [_c('div', {
    staticClass: "prizeTitle img-size",
    attrs: {
      "data-width": "383",
      "data-height": "51",
      "data-marginBottom": "30"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "everyContent img-size",
    attrs: {
      "data-lineHeight": "38"
    }
  }, [_vm._v("即日起，每成功邀请一位新用户注册并投资平台任意产品（除新手宝），即可获得佣金奖励。佣金奖励的多少，与邀请人投资待收、被邀请人投资待收、被邀请人数量有关。邀请的用户越多，投资待收金额越大，可获得的佣金就越多。佣金每日发放，无上限。")]), _vm._v(" "), _c('div', {
    staticClass: "everyTishi img-size",
    attrs: {
      "data-": ""
    }
  }, [_c('span', {
    staticClass: "everyIcon img-size",
    attrs: {
      "data-width": "16",
      "data-height": "16",
      "data-marginRight": "10"
    }
  }), _vm._v("2017-08-31之前的邀请的好友，不享受任何邀请佣金奖励。")]), _vm._v(" "), _c('div', {
    staticClass: "everyTishi img-size"
  }, [_c('span', {
    staticClass: "everyIcon img-size",
    attrs: {
      "data-width": "16",
      "data-height": "16",
      "data-marginRight": "10"
    }
  }), _vm._v("待收指待回款的产品的本金，可至【账户】→【我的资产】查看")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title img-size",
    attrs: {
      "data-marginTop": "25",
      "data-marginBottom": "25"
    }
  }, [_c('span', {
    staticClass: "titleIcon img-size",
    attrs: {
      "data-width": "36",
      "data-height": "31",
      "data-marginRight": "15"
    }
  }), _vm._v("佣金奖励计算公式\n            ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zhang img-size",
    attrs: {
      "data-width": "640",
      "data-height": "155",
      "data-paddingLeft": "20",
      "data-paddingTop": "20",
      "data-marginTop": "50"
    }
  }, [_c('p', {
    staticClass: "fontColor img-size",
    attrs: {
      "data-lineHeight": "36"
    }
  }, [_vm._v("算一笔帐：")]), _vm._v(" "), _c('p', {
    staticClass: " img-size",
    attrs: {
      "data-lineHeight": "36"
    }
  }, [_vm._v("用户B持有期间（即30天），用户A可获得"), _c('span', {
    staticClass: "fontColor img-size"
  }, [_vm._v("1.92*30=57.6元")])]), _vm._v(" "), _c('p', {
    staticClass: " img-size",
    attrs: {
      "data-lineHeight": "36"
    }
  }, [_vm._v("假如用户A邀请了N个类似用户B的好友，那么每日佣金……")]), _vm._v(" "), _c('p', {
    staticClass: " img-size",
    attrs: {
      "data-lineHeight": "36"
    }
  }, [_vm._v("假如用户A的待收≥500000，佣金利率1.0%，那么每日佣金……")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title img-size",
    attrs: {
      "data-marginTop": "25",
      "data-marginBottom": "25"
    }
  }, [_c('span', {
    staticClass: "titleIcon img-size",
    attrs: {
      "data-width": "36",
      "data-height": "31",
      "data-marginRight": "15"
    }
  }), _vm._v("佣金奖励利率\n            ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rateList img-size",
    attrs: {
      "data-paddingLeft": "85",
      "data-paddingRight": "85"
    }
  }, [_c('div', {
    staticClass: "rateTitle img-size",
    attrs: {
      "data-width": "310",
      "data-height": "40",
      "data-lineHeight": "40",
      "data-marginRight": "20"
    }
  }, [_vm._v("我的待收")]), _vm._v(" "), _c('div', {
    staticClass: "rateTitle img-size",
    attrs: {
      "data-width": "190",
      "data-height": "40",
      "data-lineHeight": "40"
    }
  }, [_vm._v("佣金利率")]), _vm._v(" "), _c('div', {
    staticClass: "rateContent img-size",
    attrs: {
      "data-marginBottom": "5"
    }
  }, [_c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "310",
      "data-height": "40",
      "data-lineHeight": "40",
      "data-marginRight": "20"
    }
  }, [_vm._v("待收＜5000")]), _vm._v(" "), _c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "190",
      "data-height": "40",
      "data-lineHeight": "40"
    }
  }, [_vm._v("0.0%")])]), _vm._v(" "), _c('div', {
    staticClass: "rateContent img-size",
    attrs: {
      "data-marginBottom": "5"
    }
  }, [_c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "310",
      "data-height": "40",
      "data-lineHeight": "40",
      "data-marginRight": "20"
    }
  }, [_vm._v("5000≤待收＜10000")]), _vm._v(" "), _c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "190",
      "data-height": "40",
      "data-lineHeight": "40"
    }
  }, [_vm._v("0.4%")])]), _vm._v(" "), _c('div', {
    staticClass: "rateContent img-size",
    attrs: {
      "data-marginBottom": "5"
    }
  }, [_c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "310",
      "data-height": "40",
      "data-lineHeight": "40",
      "data-marginRight": "20"
    }
  }, [_vm._v("10000≤待收＜20000")]), _vm._v(" "), _c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "190",
      "data-height": "40",
      "data-lineHeight": "40"
    }
  }, [_vm._v("0.5%")])]), _vm._v(" "), _c('div', {
    staticClass: "rateContent img-size",
    attrs: {
      "data-marginBottom": "5"
    }
  }, [_c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "310",
      "data-height": "40",
      "data-lineHeight": "40",
      "data-marginRight": "20"
    }
  }, [_vm._v("20000≤待收＜50000")]), _vm._v(" "), _c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "190",
      "data-height": "40",
      "data-lineHeight": "40"
    }
  }, [_vm._v("0.6%")])]), _vm._v(" "), _c('div', {
    staticClass: "rateContent img-size",
    attrs: {
      "data-marginBottom": "5"
    }
  }, [_c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "310",
      "data-height": "40",
      "data-lineHeight": "40",
      "data-marginRight": "20"
    }
  }, [_vm._v("50000≤待收＜100000")]), _vm._v(" "), _c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "190",
      "data-height": "40",
      "data-lineHeight": "40"
    }
  }, [_vm._v("0.7%")])]), _vm._v(" "), _c('div', {
    staticClass: "rateContent img-size",
    attrs: {
      "data-marginBottom": "5"
    }
  }, [_c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "310",
      "data-height": "40",
      "data-lineHeight": "40",
      "data-marginRight": "20"
    }
  }, [_vm._v("100000≤待收＜200000")]), _vm._v(" "), _c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "190",
      "data-height": "40",
      "data-lineHeight": "40"
    }
  }, [_vm._v("0.8%")])]), _vm._v(" "), _c('div', {
    staticClass: "rateContent img-size",
    attrs: {
      "data-marginBottom": "5"
    }
  }, [_c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "310",
      "data-height": "40",
      "data-lineHeight": "40",
      "data-marginRight": "20"
    }
  }, [_vm._v("200000≤待收＜500000")]), _vm._v(" "), _c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "190",
      "data-height": "40",
      "data-lineHeight": "40"
    }
  }, [_vm._v("0.9%")])]), _vm._v(" "), _c('div', {
    staticClass: "rateContent img-size",
    attrs: {
      "data-marginBottom": "5"
    }
  }, [_c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "310",
      "data-height": "40",
      "data-lineHeight": "40",
      "data-marginRight": "20"
    }
  }, [_vm._v("待收≥500000")]), _vm._v(" "), _c('div', {
    staticClass: "rate img-size",
    attrs: {
      "data-width": "190",
      "data-height": "40",
      "data-lineHeight": "40"
    }
  }, [_vm._v("1.0%")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "howInvite img-size",
    attrs: {
      "data-paddingTop": "40"
    }
  }, [_c('div', {
    staticClass: "howInviteTitle img-size",
    attrs: {
      "data-width": "423",
      "data-height": "51",
      "data-marginBottom": "50"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "title img-size",
    attrs: {
      "data-marginTop": "25",
      "data-marginBottom": "25"
    }
  }, [_c('span', {
    staticClass: "titleIcon img-size",
    attrs: {
      "data-width": "36",
      "data-height": "31",
      "data-marginRight": "15"
    }
  }), _vm._v("邀请流程\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "progress img-size"
  }, [_c('div', {
    staticClass: "progressList img-size",
    attrs: {
      "data-paddingLeft": "125",
      "data-width": "400",
      "data-height": "90"
    }
  }, [_c('div', {
    staticClass: "square img-size",
    attrs: {
      "data-width": "54",
      "data-height": "54",
      "data-lineHeight": "54",
      "data-top": "-29",
      "data-left": "-29"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('div', {
    staticClass: "squareC img-size",
    attrs: {
      "data-width": "73",
      "data-height": "45",
      "data-lineHeight": "45",
      "data-top": "25",
      "data-left": "25"
    }
  }, [_vm._v("邀请")]), _vm._v(" "), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-lineHeight": "35",
      "data-marginTop": "10",
      "data-marginLeft": "-15"
    }
  }, [_vm._v("通过邀请人分享出来的邀请链接/微信等完成"), _c('br'), _vm._v("注册或注册时填写邀请人手机号完成注册")])]), _vm._v(" "), _c('div', {
    staticClass: "jian img-size",
    attrs: {
      "data-width": "41",
      "data-height": "26",
      "data-marginTop": "15",
      "data-marginBottom": "10"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "progressList img-size",
    attrs: {
      "data-paddingLeft": "125",
      "data-width": "400",
      "data-height": "90"
    }
  }, [_c('div', {
    staticClass: "square img-size",
    attrs: {
      "data-width": "58",
      "data-height": "54",
      "data-lineHeight": "54",
      "data-top": "-29",
      "data-left": "-29"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('div', {
    staticClass: "squareC img-size",
    attrs: {
      "data-width": "73",
      "data-height": "45",
      "data-lineHeight": "45",
      "data-top": "25",
      "data-left": "25"
    }
  }, [_vm._v("投资")]), _vm._v(" "), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-height": "35",
      "data-lineHeight": "35",
      "data-marginTop": "10",
      "data-marginLeft": "-15"
    }
  }, [_vm._v("被邀请人在注册后完成任意一笔投资"), _c('br'), _vm._v("（除新手宝）")])]), _vm._v(" "), _c('div', {
    staticClass: "jian img-size",
    attrs: {
      "data-width": "41",
      "data-height": "26",
      "data-marginTop": "15",
      "data-marginBottom": "10"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "progressList img-size",
    attrs: {
      "data-paddingLeft": "125",
      "data-width": "400",
      "data-height": "90"
    }
  }, [_c('div', {
    staticClass: "square img-size",
    attrs: {
      "data-width": "54",
      "data-height": "54",
      "data-lineHeight": "54",
      "data-top": "-29",
      "data-left": "-29"
    }
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "squareC img-size",
    attrs: {
      "data-width": "73",
      "data-height": "45",
      "data-lineHeight": "45",
      "data-top": "25",
      "data-left": "25"
    }
  }, [_vm._v("发放")]), _vm._v(" "), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-height": "35",
      "data-lineHeight": "35",
      "data-marginTop": "10",
      "data-marginLeft": "-15"
    }
  }, [_vm._v("投资生效后，按佣金计算公式，每日发放"), _c('br'), _vm._v("上一日佣金，直接发放至账户余额")])]), _vm._v(" "), _c('div', {
    staticClass: "img-size tish",
    attrs: {
      "data-marginTop": "30",
      "data-marginBottom": "40"
    }
  }, [_vm._v("*如上一日不满足获取佣金奖励的条件，（见上述规则），则当日佣金为0")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-625b6d1b", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=8_chunk.js.map?name=75a448a25405b5a6009f