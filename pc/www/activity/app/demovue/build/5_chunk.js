webpackJsonp([5],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(43)

var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(59),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\www\\activity\\app\\demovue\\src\\level\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-251bfb1c", Component.options)
  } else {
    hotAPI.reload("data-v-251bfb1c", Component.options)
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

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var http = '';
module.exports = {
    status: http + '/activity/tycoon-settled/status.do', //活动状态
    commissionRecord: http + "/recommend/getDrRecommendOrder.do", //我的佣金
    MonthlyTask: http + "/recommend/getDrRecommendTask.do", //每月任务
    waitingLevel: http + "/recommend/getDrRecommendConfig.do", //待收等级
    hesitory: http + "/activity/myRecommend.do", //首月返现的好友
    MyFriend: http + "/activity/v1/myRecommend.do" //我的好友
};

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _URL = __webpack_require__(26);

exports.default = {
  data: function data() {
    return {
      level: "",
      wprincipal: 0,
      rate: 1,
      myGrade: 9,
      src: 'balck.jpg'
    };
  },
  mounted: function mounted() {
    var self = this;
    T.ajax({
      url: _URL.waitingLevel,
      data: { uid: T.uid }
    }).then(function (data) {
      self.level = data.map.drRecommendConfig.drRecommendConfigDetails;
      for (var i = 0; i < self.level.length; i++) {
        self.level[i].img = "src/images/icon" + (i + 1) + ".png";
      }

      self.wprincipal = data.map.wprincipal;
      self.rate = data.map.rate;
      var myGrade = data.map.MyGrade;
      self.src = "src/images/icon" + myGrade + ".png";
      self.$nextTick(function () {
        T.setImgSize();
      });
    });
    T.setImgSize();
  },

  methods: {
    invest: function invest() {
      T.callApp.investment();
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "level-box"
  }, [_c('div', {
    staticClass: "levelTop img-size",
    attrs: {
      "data-paddingTop": "60",
      "data-paddingBottom": "60"
    }
  }, [_c('p', {
    staticClass: "nowLevel img-size"
  }, [_vm._v("当前待收等级")]), _vm._v(" "), _c('div', {
    staticClass: "levelCup img-size",
    attrs: {
      "data-width": "90",
      "data-height": "80"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.src,
      "height": "52",
      "width": "60",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "levelContent"
  }, [_c('div', {
    staticClass: "levelLeft img-size"
  }, [_c('p', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.wprincipal) + "元")]), _vm._v(" "), _c('p', {
    staticClass: "name"
  }, [_vm._v("我的待收")])]), _vm._v(" "), _c('div', {
    staticClass: "levelLeft line img-size"
  }, [_c('p', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.rate) + "%")]), _vm._v(" "), _c('p', {
    staticClass: "name"
  }, [_vm._v("今日待收佣金率")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._l((_vm.level), function(item, index) {
    return _c('div', {
      staticClass: "levelList img-size",
      attrs: {
        "data-height": "90",
        "data-lineHeight": "90"
      }
    }, [_c('ul', [_c('li', {
      staticClass: "levelNumber img-size"
    }, [_c('img', {
      staticClass: "img-size leveCC",
      attrs: {
        "data-width": "60",
        "data-height": "52",
        "data-marginTop": "20",
        "src": item.img
      }
    })]), _vm._v(" "), (index == 0) ? _c('li', {
      staticClass: "levelCount img-size"
    }, [_vm._v("待收<" + _vm._s(item.maxAmount) + " ")]) : _vm._e(), _vm._v(" "), (index != 0 && index != _vm.level.length - 1) ? _c('li', {
      staticClass: "levelCount img-size"
    }, [_vm._v(_vm._s(item.minAmount) + " ≤待收＜" + _vm._s(item.maxAmount))]) : _vm._e(), _vm._v(" "), (index == _vm.level.length - 1) ? _c('li', {
      staticClass: "levelCount img-size"
    }, [_vm._v(" 待收≥" + _vm._s(item.minAmount))]) : _vm._e(), _vm._v(" "), _c('li', {
      staticClass: "levelRate img-size"
    }, [_vm._v(_vm._s(item.rate) + "%")]), _vm._v(" "), _c('div', {
      staticStyle: {
        "clear": "both"
      }
    })])])
  }), _vm._v(" "), _c('div', {
    staticClass: "import img-size",
    attrs: {
      "data-height": "80",
      "data-lineHeight": "80"
    }
  }, [_vm._v("升级到更高等级，获取更多收益")]), _vm._v(" "), _c('div', {
    staticClass: "impoveBtn img-size"
  }, [_c('a', {
    staticClass: "goimpro img-size",
    attrs: {
      "data-width": "470",
      "data-height": "60",
      "data-lineHeight": "60"
    },
    on: {
      "click": _vm.invest
    }
  }, [_vm._v("前往提升")])]), _vm._v(" "), _c('p', {
    staticClass: "tishi"
  }, [_vm._v("温馨提示：体验标不计入有效待收哦")])], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "levelList img-size",
    attrs: {
      "data-height": "68",
      "data-lineHeight": "68"
    }
  }, [_c('ul', [_c('li', {
    staticClass: "levelNumber img-size"
  }, [_vm._v("待收等级")]), _vm._v(" "), _c('li', {
    staticClass: "levelCount img-size"
  }, [_vm._v("我的待收(元)")]), _vm._v(" "), _c('li', {
    staticClass: "levelRate img-size"
  }, [_vm._v("佣金利率")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-251bfb1c", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=5_chunk.js.map?name=75a448a25405b5a6009f