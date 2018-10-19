webpackJsonp([6],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(46)

var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(62),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\www\\activity\\app\\demovue\\src\\heistory\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f2fbb91", Component.options)
  } else {
    hotAPI.reload("data-v-3f2fbb91", Component.options)
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requirePop = __webpack_require__(4);

var _requirePop2 = _interopRequireDefault(_requirePop);

var _URL = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import date from "../common/date.js";
// import explain from "../pop/explain.vue";
exports.default = {
  data: function data() {
    return {
      income: '',
      incomeList: [],
      incomeTotal: '',
      dadelinTime: '',
      load: '查看更多'
    };
  },
  mounted: function mounted() {
    var self = this;
    if (!T.uid) {
      (0, _requirePop2.default)('login', {
        props: {
          transition: 'rotate3d'
        }
      });
    };
    T.setImgSize();
    T.ajax({
      url: _URL.hesitory,
      data: { uid: T.uid, pageOn: 1, pageSize: 100 }
    }).then(function (data) {
      if (data.success) {
        self.incomeList = data.map.page.rows;
        self.incomeTotal = data.map.total;
        self.income = data.map.firstMonthAmount;
        self.$nextTick(function () {
          T.setImgSize();
        });
      }
    });
    //   T.ajax({
    //   url:MonthlyTask,
    //   data:{uid:T.uid,pageOn:1,pageSize:10}
    // }).then(data=>{
    //   if(data.success){
    //     self.dadelinTime=data.map.drRecommendTask.startTime;
    //   }
    // }); 
  },

  methods: {
    question: function question() {
      (0, _requirePop2.default)('friend', {
        props: {
          transition: 'rotate3d'
        }
      });
    },
    loadingMOre: function loadingMOre() {
      var _this = this;

      if (this.pageOn < this.totalPage) {
        if (this.pageOn < this.totalPage - 1) {
          this.load = '查看更多';
        } else {
          this.load = '没有更多数据了';
        }
        this.pageOn++;
      } else {
        this.con = '没有更多数据了';
        return;
      }
      T.ajax({
        url: _URL.hesitory,
        data: { uid: T.uid, pageOn: 1, pageSize: this.pageOn * 10 }
      }).then(function (data) {
        _this.list = data.map.page.rows; //佣金记录
        //this.$set("list",this.list.concat(data.map.page.rows));
        _this.commission = data.map.estimateAmount; //查询整个接口数据
        _this.charge = data.map; //查询整个数据
        _this.$nextTick(function () {
          T.setImgSize();
        });
      });
    },
    returnla: function returnla() {
      router.push('/main');
    }

    //===============佣金滚动====================

  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "earn-box"
  }, [_c('div', {
    staticClass: "hebanner img-size",
    attrs: {
      "data-height": "320",
      "data-paddingTop": "40"
    }
  }, [_c('div', {
    staticClass: "diImg img-size",
    attrs: {
      "data-height": "167",
      "data-bottom": "-9",
      "data-left": "0",
      "data-width": "750"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "hedeadline img-size"
  }, [_vm._v("好友邀请首月返现")]), _vm._v(" "), _c('div', {
    staticClass: "icome img-size",
    attrs: {
      "data-marginTop": "60"
    }
  }, [_vm._v("累计获得 "), _c('span', {
    staticClass: "question1 img-size",
    attrs: {
      "data-width": "40",
      "data-height": "40",
      "data-lineHeight": "40"
    },
    on: {
      "click": _vm.question
    }
  }, [_vm._v("?")])]), _vm._v(" "), _c('div', {
    staticClass: "icomeNumber img-size",
    attrs: {
      "data-marginTop": "40"
    }
  }, [_vm._v(_vm._s(_vm.income)), _c('span', {
    staticClass: "yuan"
  }, [_vm._v("元")])])]), _vm._v(" "), _c('div', {
    staticClass: "hisrecord img-size",
    attrs: {
      "data-paddingBottom": "120"
    }
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.incomeList), function(fr) {
    return _c('ul', {
      staticClass: "hislist img-size",
      attrs: {
        "data-lineHeight": "75",
        "data-height": "75"
      }
    }, [_c('li', [_vm._v(_vm._s(fr.mobilePhone) + " ")]), _vm._v(" "), _c('li', [_vm._v(_vm._s(new Date(fr.investTime).Format('yyyy-MM-dd')))]), _vm._v(" "), _c('li', [_vm._v(_vm._s(fr.referrerReward) + "元")]), _vm._v(" "), _c('div', {
      staticStyle: {
        "clear": "both"
      }
    })])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "inviteBtn img-size",
    attrs: {
      "data-width": "750"
    }
  }, [_c('a', {
    staticClass: "img-size",
    attrs: {
      "data-lineHeight": "100",
      "data-height": "100"
    },
    on: {
      "click": _vm.returnla
    }
  }, [_vm._v("返回佣金记录")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "hisrecordTittle img-size",
    attrs: {
      "data-height": "65",
      "data-lineHeight": "65"
    }
  }, [_c('li', [_vm._v("好友ID")]), _vm._v(" "), _c('li', [_vm._v("投资时间")]), _vm._v(" "), _c('li', [_vm._v("可获奖励")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3f2fbb91", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=6_chunk.js.map?name=75a448a25405b5a6009f