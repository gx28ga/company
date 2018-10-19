webpackJsonp([13],{

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

/***/ 36:
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

/***/ 51:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(51)

var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(67),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\www\\activity\\app\\demovue\\src\\pop\\friend.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] friend.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a8d214fe", Component.options)
  } else {
    hotAPI.reload("data-v-a8d214fe", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 67:
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
      "data-height": "500",
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
    staticClass: "contentExplain img-size",
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
  }, [_vm._v("活动期间，被邀请人在注册成功当天起首月内（30天内，含第30天），成功投资任意产品（除新手宝外），邀请人就能获得一定比例的返现奖励：")])]), _vm._v(" "), _c('dl', {
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
  }, [_vm._v("计算公式： "), _c('br'), _vm._v("\r\n                首月返现奖励=被邀请人投资产品基本收益金额（不含任何加息/红包等福利收益）*15%")])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a8d214fe", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=13_chunk.js.map?name=75a448a25405b5a6009f