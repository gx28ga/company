webpackJsonp([5],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(58)

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  "data-v-625ec997",
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\xuanfuNew\\src\\module\\main\\billOK.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] billOK.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-625ec997", Component.options)
  } else {
    hotAPI.reload("data-v-625ec997", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 29:
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

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    mounted: function mounted() {
        T.setImgSize();
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _newbill = __webpack_require__(62);

var _newbill2 = _interopRequireDefault(_newbill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
		data: function data() {
				return {
						phone: ''
				};
		},

		components: {
				newbill: _newbill2.default
		},
		mounted: function mounted() {
				T.setImgSize();
				this.phone = this.$route.query.phone;
		}
}; //
//
//
//
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(55)

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(71),
  /* scopeId */
  "data-v-27e4c256",
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\xuanfuNew\\src\\module\\html\\newbill.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] newbill.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27e4c256", Component.options)
  } else {
    hotAPI.reload("data-v-27e4c256", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "abouta img-size",
    attrs: {
      "data-paddingTop": "50",
      "data-paddingBottom": "60"
    }
  }, [_c('div', {
    staticClass: "bhtitle img-size",
    attrs: {
      "data-height": "47",
      "data-width": "522"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bai img-size",
    attrs: {
      "data-width": "636",
      "data-height": "415",
      "data-borderRadius": "16",
      "data-marginTop": "62",
      "data-paddingBottom": "26"
    }
  }, [_c('div', {
    staticClass: "hq img-size",
    attrs: {
      "data-width": "87",
      "data-height": "70",
      "data-lineHeight": "50",
      "data-fontSize": "24",
      "data-left": "29"
    }
  }, [_vm._v("活期")]), _vm._v(" "), _c('div', {
    staticClass: "newtitle img-size",
    attrs: {
      "data-width": "240",
      "data-height": "34"
    }
  }, [_c('span', {
    staticClass: "img-size",
    attrs: {
      "data-width": "118",
      "data-fontSize": "30",
      "data-top": "12"
    }
  }, [_vm._v("新手宝")])]), _vm._v(" "), _c('p', {
    staticClass: "hong img-size",
    attrs: {
      "data-fontSize": "36",
      "data-marginTop": "44"
    }
  }, [_c('span', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "99"
    }
  }, [_vm._v("5")]), _vm._v("%+"), _c('span', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "99"
    }
  }, [_vm._v("5")]), _vm._v("%")]), _vm._v(" "), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_vm._v("投资期限：可随时退出")]), _vm._v(" "), _c('div', {
    staticClass: "xztz img-size",
    attrs: {
      "data-marginTop": "36",
      "data-borderRadius": "10",
      "data-fontSize": "24",
      "data-width": "255",
      "data-height": "60",
      "data-lineHeight": "60"
    }
  }, [_c('a', {
    attrs: {
      "href": "http://app.duorongcf.com/html/2weima.html"
    }
  }, [_vm._v("下载立即投资")])]), _vm._v(" "), _c('div', {
    staticClass: "lv img-size",
    attrs: {
      "data-paddingLeft": "80",
      "data-fontSize": "18",
      "data-marginTop": "30"
    }
  }, [_c('span', {
    staticClass: "bz img-size",
    attrs: {
      "data-width": "26",
      "data-height": "34",
      "data-marginRight": "12"
    }
  }), _c('span', {
    staticStyle: {
      "float": "left"
    }
  }, [_vm._v("平台所有投资由上海华瑞银行全程资金监管")])])]), _vm._v(" "), _c('div', {
    staticClass: "bai img-size",
    attrs: {
      "data-width": "636",
      "data-height": "446",
      "data-borderRadius": "16",
      "data-marginTop": "62",
      "data-paddingBottom": "26"
    }
  }, [_c('div', {
    staticClass: "newtitle img-size",
    attrs: {
      "data-width": "260",
      "data-height": "34"
    }
  }, [_c('span', {
    staticClass: "img-size",
    attrs: {
      "data-width": "152",
      "data-fontSize": "30",
      "data-top": "12"
    }
  }, [_vm._v("新手福利")])]), _vm._v(" "), _c('p', {
    staticClass: "hong img-size",
    attrs: {
      "data-fontSize": "36",
      "data-marginTop": "44"
    }
  }, [_c('span', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "99"
    }
  }, [_vm._v("12")]), _vm._v("%")]), _vm._v(" "), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_vm._v("投资期限：28天起")]), _vm._v(" "), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_vm._v("投资期限：100元起")]), _vm._v(" "), _c('div', {
    staticClass: "xztz img-size",
    attrs: {
      "data-marginTop": "36",
      "data-borderRadius": "10",
      "data-fontSize": "24",
      "data-width": "255",
      "data-height": "60",
      "data-lineHeight": "60"
    }
  }, [_c('a', {
    attrs: {
      "href": "http://app.duorongcf.com/html/2weima.html"
    }
  }, [_vm._v("下载立即投资")])]), _vm._v(" "), _c('div', {
    staticClass: "lv img-size",
    attrs: {
      "data-paddingLeft": "80",
      "data-fontSize": "18",
      "data-marginTop": "30"
    }
  }, [_c('span', {
    staticClass: "bz img-size",
    attrs: {
      "data-width": "26",
      "data-height": "34",
      "data-marginRight": "12"
    }
  }), _c('span', {
    staticStyle: {
      "float": "left"
    }
  }, [_vm._v("平台所有投资由上海华瑞银行全程资金监管")])])]), _vm._v(" "), _c('div', {
    staticClass: "bai img-size",
    attrs: {
      "data-width": "636",
      "data-height": "446",
      "data-borderRadius": "16",
      "data-marginTop": "62",
      "data-paddingBottom": "26"
    }
  }, [_c('div', {
    staticClass: "newtitle img-size",
    attrs: {
      "data-width": "260",
      "data-height": "34"
    }
  }, [_c('span', {
    staticClass: "img-size",
    attrs: {
      "data-width": "152",
      "data-fontSize": "30",
      "data-top": "12"
    }
  }, [_vm._v("新手红包")])]), _vm._v(" "), _c('div', {
    staticClass: "bag img-size",
    attrs: {
      "data-width": "210",
      "data-height": "252",
      "data-marginTop": "40"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "xztz img-size",
    attrs: {
      "data-marginTop": "36",
      "data-borderRadius": "10",
      "data-fontSize": "24",
      "data-width": "255",
      "data-height": "60",
      "data-lineHeight": "60"
    }
  }, [_c('a', {
    attrs: {
      "href": "http://app.duorongcf.com/html/2weima.html"
    }
  }, [_vm._v("下载立即使用")])])]), _vm._v(" "), _c('div', {
    staticClass: "bottom img-size",
    attrs: {
      "data-paddingTop": "20",
      "data-paddingLeft": "45",
      "data-paddingRight": "45",
      "data-fontSize": "18"
    }
  }, [_c('p', {
    staticClass: "img-size",
    attrs: {
      "data-paddingBottom": "20",
      "data-marginBottom": "20"
    }
  }, [_vm._v("市场有风险 投资需谨慎"), _c('br'), _vm._v("平台建议的历史年化收益率仅供参考，不代表未来实际收益")]), _vm._v(" "), _c('p', [_vm._v("icp备案：沪ICP备15011207号"), _c('br'), _vm._v("公司名称：上海银砖金融信息服务有限公司")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-27e4c256", module.exports)
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "module-scroll"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "hl hl1 img-size",
    staticStyle: {
      "height": "auto"
    },
    attrs: {
      "data-paddingTop": "2",
      "data-paddingBottom": "55"
    }
  }, [_c('div', {
    staticClass: "success regi img-size",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "data-marginTop": "39",
      "data-fontSize": "36",
      "data-lineHeight": "58"
    }
  }, [_c('span', [_vm._v("当前账户：")]), _c('span', [_vm._v(_vm._s(_vm.phone))])]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('newbill'), _vm._v(" "), _vm._m(2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "banntitle img-size",
    attrs: {
      "data-paddingTop": "30",
      "data-paddingBottom": "30"
    }
  }, [_c('div', {
    staticClass: "title img-size",
    attrs: {
      "data-width": "475",
      "data-height": "61"
    }
  }, [_c('p', {
    staticClass: "prti"
  }, [_c('span', {
    staticClass: "titlebga img-size",
    attrs: {
      "data-width": "246",
      "data-height": "30",
      "data-marginTop": "10"
    }
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "register img-size",
    attrs: {
      "data-width": "570",
      "data-marginTop": "30",
      "data-borderTopLeftRadius": "30",
      "data-borderTopRightRadius": "30",
      "data-fontSize": "30",
      "data-paddingTop": "40"
    }
  }, [_c('div', {
    staticClass: "success regi img-size",
    staticStyle: {
      "border-bottom": "1px solid #dddddd",
      "margin": "0 auto"
    },
    attrs: {
      "data-width": "530",
      "data-paddingBottom": "39",
      "data-lineHeight": "58"
    }
  }, [_c('i', {
    staticClass: "img-size",
    attrs: {
      "data-height": "58",
      "data-width": "58",
      "data-marginLeft": "180",
      "data-marginRight": "17",
      "data-fontSize": "32"
    }
  }), _c('span', [_vm._v("体验成功")])]), _vm._v(" "), _c('p', {
    staticClass: "name2 img-size",
    attrs: {
      "data-fontSize": "32",
      "data-lineHeight": "90",
      "data-paddingLeft": "37"
    }
  }, [_vm._v("账户可提现金额：　　　"), _c('span', [_vm._v("3.28元")])]), _vm._v(" "), _c('p', {
    staticClass: "red2 img-size",
    staticStyle: {
      "text-align": "left"
    },
    attrs: {
      "data-fontSize": "22",
      "data-lineHeight": "50",
      "data-paddingLeft": "37"
    }
  }, [_vm._v("下载多融理财app即可提现！")]), _vm._v(" "), _c('div', {
    staticClass: "dlbtn downloadbtn img-size",
    attrs: {
      "data-width": "500",
      "data-lineHeight": "70",
      "data-marginTop": "30",
      "data-fontSize": "38",
      "data-borderRadius": "50"
    }
  }, [_c('i', {
    staticClass: "img-size",
    attrs: {
      "data-width": "55",
      "data-height": "55",
      "data-marginTop": "9",
      "data-marginLeft": "60",
      "data-marginRight": "4"
    }
  }), _vm._v(" "), _c('a', {
    attrs: {
      "href": "http://app.duorongcf.com/html/2weima.html"
    }
  }, [_vm._v("下载多融理财APP")])])]), _vm._v(" "), _c('div', {
    staticClass: "bottbgg img-size",
    attrs: {
      "data-width": "594",
      "data-height": "130"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bannbox img-size",
    staticStyle: {
      "width": "100%",
      "position": "fixed",
      "bottom": "0"
    },
    attrs: {
      "data-height": "120"
    }
  }, [_c('div', {
    staticClass: "bga",
    staticStyle: {
      "background": "rgba(0,0,0,0.5)",
      "color": "#fff"
    }
  }, [_c('div', {
    staticClass: "img-size",
    attrs: {
      "data-paddingLeft": "30",
      "data-fontSize": "28",
      "data-lineHeight": "120"
    }
  }, [_vm._v("下载多融理财APP 更多惊喜等你来")]), _vm._v(" "), _c('div', {
    staticClass: "btn lqbtn img-size",
    attrs: {
      "data-width": "180",
      "data-lineHeight": "60",
      "data-right": "30",
      "data-top": "30",
      "data-borderRadius": "40",
      "data-fontSize": "30"
    }
  }, [_c('a', {
    staticStyle: {
      "color": "#ac1c1c"
    },
    attrs: {
      "href": "http://app.duorongcf.com/html/2weima.html"
    }
  }, [_vm._v("立即下载")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-625ec997", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=5_chunk.js.map?name=aab64f2477fe794447cf