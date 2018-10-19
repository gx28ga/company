webpackJsonp([6],{

/***/ 20:
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

/***/ 27:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    },

    props: {
        transition: String
    },
    methods: {
        close: function close() {
            this.$refs.pop.closePop();
            this.okCallback && this.okCallback.call(this);
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(32)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\enroll\\src\\pop\\explain.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] explain.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9892169a", Component.options)
  } else {
    hotAPI.reload("data-v-9892169a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop', {
    ref: "pop",
    attrs: {
      "transition": _vm.transition
    }
  }, [_c('div', {
    staticClass: "explain img-size",
    attrs: {
      "data-width": "610",
      "data-height": "700",
      "data-paddingLeft": "20"
    },
    slot: "main"
  }, [_c('div', {
    staticClass: "close img-size",
    attrs: {
      "data-width": "84",
      "data-height": "84",
      "data-lineHeight": "84"
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._v("x")]), _vm._v(" "), _c('div', {
    staticClass: "content img-size",
    attrs: {
      "data-marginTop": "84",
      "data-marginBottom": "50"
    }
  }, [_c('dl', {
    staticClass: "img-size",
    attrs: {
      "data-width": "600"
    }
  }, [_c('dt', {
    staticClass: "img-size",
    attrs: {
      "data-width": "30"
    }
  }, [_vm._v("①")]), _vm._v(" "), _c('dd', {
    staticClass: "img-size",
    attrs: {
      "data-width": "540",
      "data-paddingLeft": "10",
      "data-paddingBottom": "20"
    }
  }, [_vm._v("佣金奖励为现金奖励，可提现到账户余额。"), _c('br'), _vm._v("佣金奖励每日发放，无上限。")])]), _vm._v(" "), _c('dl', {
    staticClass: "img-size",
    attrs: {
      "data-width": "600"
    }
  }, [_c('dt', {
    staticClass: "img-size",
    attrs: {
      "data-width": "30"
    }
  }, [_vm._v("②")]), _vm._v(" "), _c('dd', {
    staticClass: "img-size",
    attrs: {
      "data-width": "540",
      "data-paddingLeft": "10",
      "data-paddingBottom": "20"
    }
  }, [_vm._v("佣金奖励获取条件: "), _c('br'), _vm._v("·邀请人自身账户【待收本金总额】不低于5000元（成立日期开始算，收益中的产品）"), _c('br'), _vm._v("\r\n                ·所有被邀请人账户【待收本金总额】之和不为零")])]), _vm._v(" "), _c('dl', {
    staticClass: "img-size",
    attrs: {
      "data-width": "600"
    }
  }, [_c('dt', {
    staticClass: "img-size",
    attrs: {
      "data-width": "30"
    }
  }, [_vm._v("③")]), _vm._v(" "), _c('dd', {
    staticClass: "img-size",
    attrs: {
      "data-width": "540",
      "data-paddingLeft": "10",
      "data-paddingBottom": "20"
    }
  }, [_vm._v("佣金奖励计算公式:每日佣金=佣金利率*好友总待收/365")])]), _vm._v(" "), _c('dl', {
    staticClass: "img-size",
    attrs: {
      "data-width": "600"
    }
  }, [_c('dt', {
    staticClass: "img-size",
    attrs: {
      "data-width": "30"
    }
  }, [_vm._v("④")]), _vm._v(" "), _c('dd', {
    staticClass: "img-size",
    attrs: {
      "data-width": "540",
      "data-paddingLeft": "10",
      "data-paddingBottom": "20"
    }
  }, [_vm._v("佣金奖励每日23:59按当天待收情况计算，并于次日1:00统一发放到邀请好友人的多融账户.如当日不满足获取佣金奖励的条件，则次日佣金奖励为0。")]), _vm._v(" "), _c('dd', {
    staticStyle: {
      "clear": "both"
    }
  })])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9892169a", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=6_chunk.js.map?name=5a5032fa06dabf22c744