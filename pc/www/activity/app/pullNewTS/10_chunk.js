webpackJsonp([10],{

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

/***/ 50:
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
            e.stopPropagation(); //
        },
        showPop: function showPop(callback) {
            this.showModal = true;
            if ($.type(callback) == 'function') {
                setTimeout(callback, 550);
            }
        },
        closePop: function closePop(callback) {
            this.showModal = false;
            if ($.type(callback) == 'function') {
                setTimeout(callback, 550);
            }
        },
        goHome: function goHome() {
            this.closePop(function () {
                T.callApp.home();
            });
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(3)))

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(58)

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  "data-v-4eb6bdad",
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\pullNewTS\\src\\pop\\publicTips.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] publicTips.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4eb6bdad", Component.options)
  } else {
    hotAPI.reload("data-v-4eb6bdad", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 74:
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
    staticClass: "modal-container pop-cnt img-size",
    attrs: {
      "data-paddingTop": "25",
      "data-paddingBottom": "25",
      "data-paddingLeft": "33",
      "data-paddingRight": "33",
      "data-width": "530",
      "data-height": "250"
    },
    on: {
      "click": function($event) {
        _vm.closePropagtion($event)
      }
    }
  }, [_c('div', {
    staticClass: "ruletitle"
  }, [_vm._v("提示消息")]), _vm._v(" "), _c('div', {
    staticClass: "close img-size",
    attrs: {
      "data-width": "31",
      "data-height": "31",
      "data-lineHeight": "31",
      "data-fontSize": "40",
      "data-top": "15",
      "data-right": "15"
    },
    on: {
      "click": _vm.goHome
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('div', {
    staticClass: "content img-size",
    attrs: {
      "data-fontSize": "42"
    }
  }, [_vm._v("\r\n                    渠道用户不参加此次活动\r\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "surebtn img-size",
    attrs: {
      "data-width": "290",
      "data-height": "114"
    },
    on: {
      "click": _vm.goHome
    }
  }, [_vm._v("确定")])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4eb6bdad", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=10_chunk.js.map?name=534490421620986d3532