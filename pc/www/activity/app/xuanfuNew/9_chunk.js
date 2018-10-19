webpackJsonp([9],{

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

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T, $) {

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
//
//
//
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
    props: {
        transition: String
    },
    data: function data() {
        return {
            showModal: true
        };
    },
    mounted: function mounted() {
        T.setImgSize();
    },

    methods: {
        closePropagtion: function closePropagtion(e) {
            e.stopPropagation();
        },
        showPop: function showPop(callback) {
            this.showModal = true;
            if ($.type(callback) == 'function') {
                setTimeout(callback, 550);
            }
        },
        closePop: function closePop(callback) {
            this.showModal = false;
            T.getPop(callback);
            bus.$emit('closePopEvent');
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(3)))

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(61)

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(77),
  /* scopeId */
  "data-v-f46cb68a",
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\xuanfuNew\\src\\pop\\rule.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] rule.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f46cb68a", Component.options)
  } else {
    hotAPI.reload("data-v-f46cb68a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showModal),
      expression: "showModal"
    }],
    staticClass: "modal-mask explain",
    on: {
      "click": _vm.closePop
    }
  }, [_c('div', {
    staticClass: "modal-wrapper"
  }, [_c('div', {
    staticClass: "modal-container img-size",
    attrs: {
      "data-paddingTop": "35",
      "data-paddingLeft": "33",
      "data-paddingRight": "33",
      "data-width": "692",
      "data-height": "929"
    },
    on: {
      "click": function($event) {
        _vm.closePropagtion($event)
      }
    }
  }, [_c('div', {
    staticClass: "rule-tan img-size",
    attrs: {
      "data-width": "692",
      "data-marginLeft": "-346",
      "data-height": "950",
      "data-marginTop": "-475"
    }
  }, [_c('div', {
    staticClass: "title img-size",
    attrs: {
      "data-lineHeight": "50",
      "data-top": "12",
      "data-fontSize": "24"
    }
  }, [_vm._v("活动规则")]), _vm._v(" "), _c('div', {
    staticClass: "yetitleb img-size",
    attrs: {
      "data-width": "692",
      "data-height": "11",
      "data-top": "62"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "list img-size",
    attrs: {
      "data-paddingTop": "73",
      "data-paddingBottom": "30",
      "data-paddingLeft": "32",
      "data-paddingRight": "32",
      "data-width": "574",
      "data-borderRadius": "20"
    }
  }, [_c('ul', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "22"
    }
  }, [_c('li', [_c('p', [_c('span', [_vm._v("1. ")]), _vm._v("活动时间：即日起")])]), _vm._v(" "), _c('li', [_c('p', [_c('span', [_vm._v("2. ")]), _vm._v("活动对象：仅限多融未注册用户")])]), _vm._v(" "), _c('li', [_c('p', [_c('span', [_vm._v("3. ")]), _vm._v("活动期间，凡符合条件用户可领取：")])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("新用户通过此页面注册可获得：10000元收益+2%加息券+1588元红包+新手专享活期标；")])]), _vm._v(" "), _c('li', [_c('p', [_c('span', [_vm._v("4. ")]), _vm._v("注册成功用户，在此页面可不充值，直接使用10000元体验金进行投资，投资成功后即可领取收益，体验标年化12%；")])]), _vm._v(" "), _c('li', [_c('p', [_c('span', [_vm._v("5. ")]), _vm._v("新手专享标，可在新用户投资体验标后进行投资，仅限一次；")])]), _vm._v(" "), _c('li', [_c('p', [_c('span', [_vm._v("6. ")]), _vm._v("1588现金红包为：20元红包、268元红包、300元红包、1000元红包的组合红包，可用于投资使用，投资生效后以现金的形式返到您的账户；")])]), _vm._v(" "), _c('li', [_c('p', [_c('span', [_vm._v("7. ")]), _vm._v("红包、加息券等将即时发放到您的多融账户，可登录多融理财APP或官网查看；")])]), _vm._v(" "), _c('li', [_c('p', [_c('span', [_vm._v("8. ")]), _vm._v("本次活动最终解释权归多融财富所有")])])]), _vm._v(" "), _c('div', {
    staticClass: "zdlbtn img-size",
    attrs: {
      "data-width": "180",
      "data-height": "55",
      "data-lineHeight": "55",
      "data-marginTop": "30",
      "data-borderRadius": "50",
      "data-fontSize": "28"
    },
    on: {
      "click": _vm.closePop
    }
  }, [_vm._v("知道了")])])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f46cb68a", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=9_chunk.js.map?name=aab64f2477fe794447cf