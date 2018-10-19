webpackJsonp([3],{

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(42)

var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(58),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\www\\activity\\app\\demovue\\src\\module\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1339fc14", Component.options)
  } else {
    hotAPI.reload("data-v-1339fc14", Component.options)
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

/***/ 34:
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
      task: "",
      enableAmount: 0,
      DrRecommendTask: '',
      count: 0,
      friendNumber: 0,
      monthTask: [],
      recommCodes: '',
      monthRewards: ''
    };
  },
  mounted: function mounted() {
    T.setImgSize();
    var self = this;
    T.ajax({
      url: _URL.MonthlyTask,
      data: { uid: T.uid, pageOn: 1, pageSize: 100 }
    }).then(function (data) {
      self.task = data.map;
      self.count = data.map.effectiveCount;
      self.DrRecommendTask = data.map.drRecommendTask; //被邀请人任务
      self.enableAmount = data.map.drRecommendTask.enableAmount; ////被邀请人首投金额
      self.monthTask = data.map.drRecommendTask.drRecommendTaskDetails; //被邀请人状态
      self.$nextTick(function () {
        T.setImgSize();
      });
    });
    T.ajax({
      url: _URL.MyFriend,
      data: { uid: T.uid, pageOn: 1, pageSize: 5 }
    }).then(function (data) {
      self.friendNumber = data.map.total;
      self.recommCodes = data.map.recommCodes;
      //self.monthRewards=data.map.monthRewards;//本月获得的邀请收益
    });
  },

  methods: {
    lalal: function lalal() {

      router.push("/task");
    },
    invite: function invite() {
      var urlCode = {
        page: 38,
        title: '送你1588元红包和12%安全好收益，多融财富亲测靠谱！',
        content: '您的好友邀您领取1588元现金红包奖励，和Ta一起赚更多的钱！',
        pic: 'http://www.duorongcf.com/activity/app/huaruiBank/images/logo.png',
        src: 'http://app.duorongcf.com/enroll?recommCode=' + this.recommCodes
      };
      var Title = encodeURIComponent(urlCode.title);
      var Content = encodeURIComponent(urlCode.content);
      var appUrl = "jump://page=38?title=" + encodeURIComponent(urlCode.title) + "&content=" + encodeURIComponent(urlCode.content) + "&pic=" + encodeURIComponent(urlCode.pic) + "&src=" + encodeURIComponent(urlCode.src);
      window.location.href = appUrl;
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-box"
  }, [_c('div', {
    staticClass: "taskTitle img-size",
    attrs: {
      "data-height": "80",
      "data-lineHeight": "80"
    }
  }, [_c('span', {
    staticClass: "every"
  }, [_vm._v("每月任务")]), _vm._v(" "), _c('span', {
    staticClass: "inviteRecord"
  }, [_c('a', {
    on: {
      "click": _vm.lalal
    }
  }, [_vm._v("邀请奖励记录>")])])]), _vm._v(" "), _c('div', {
    staticClass: "inviteNumber img-size",
    attrs: {
      "data-paddingTop": "50",
      "data-paddingBottom": "50"
    }
  }, [_c('div', {
    staticClass: "ben"
  }, [_c('p', {
    staticClass: "month"
  }, [_vm._v("本月完成邀请")]), _vm._v(" "), _c('p', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.count) + "人")])]), _vm._v(" "), _c('div', {
    staticClass: "ben"
  }, [_c('p', {
    staticClass: "month"
  }, [_vm._v("已获得奖励")]), _vm._v(" "), _c('p', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.task.taskReward) + "元")])])]), _vm._v(" "), _c('div', {
    staticClass: "Taskexplain"
  }, [_c('div', {
    staticClass: "explainTitle"
  }, [_vm._v("任务说明")]), _vm._v(" "), _c('div', {
    staticClass: "explainContent"
  }, [_c('dl', [_c('dd', [_vm._v("*")]), _vm._v(" "), _c('dt', [_vm._v("任务时间："), _c('span', {
    staticStyle: {
      "color": "#FF8246"
    }
  }, [_vm._v(_vm._s(new Date(_vm.DrRecommendTask.startTime).Format('yyyy-MM-dd')) + "～" + _vm._s(new Date(_vm.DrRecommendTask.endTime).Format('yyyy-MM-dd')))])])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("* ")]), _vm._v(" "), _c('dt', [_vm._v("  邀请任务期间,邀请新用户注册且首投≥"), _c('span', {
    staticStyle: {
      "color": "#FF8246"
    }
  }, [_vm._v(_vm._s(_vm.enableAmount))]), _vm._v("元（新手宝除外）人数达到一定数量，即可领取一定奖励。如下:")])])]), _vm._v(" "), _c('div', {
    staticClass: "explainTable img-size",
    attrs: {
      "data-width": "662"
    }
  }, [_c('table', [_c('tr', {
    staticClass: "img-size",
    attrs: {
      "data-height": "80"
    }
  }, [_c('th', [_vm._v("本月邀请首投≥" + _vm._s(_vm.enableAmount) + "元人数")]), _vm._v(" "), _c('th', [_vm._v("邀请奖励")]), _vm._v(" "), _c('th', [_vm._v("状态")])]), _vm._v(" "), _vm._l((_vm.monthTask), function(item, index) {
    return _c('tr', [(index !== _vm.monthTask.length - 1) ? _c('td', [_c('span', [_vm._v(_vm._s(item.personNum))]), _vm._v("人")]) : _vm._e(), _vm._v(" "), (index == _vm.monthTask.length - 1) ? _c('td', [_c('span', [_vm._v(_vm._s(item.personNum))]), _vm._v("人以上")]) : _vm._e(), _vm._v(" "), (index == 0) ? _c('td', [_vm._v("可得现金"), _c('span', [_vm._v(_vm._s(item.reward))]), _vm._v("元")]) : _c('td', [_vm._v("再得现金"), _c('span', [_vm._v(_vm._s(item.reward))]), _vm._v("元")]), _vm._v(" "), (item.status == 0) ? _c('td', [_vm._v("未完成")]) : _vm._e(), _vm._v(" "), (item.status == 1) ? _c('td', [_vm._v("已完成")]) : _vm._e()])
  })], 2)]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "inviteFriendBtn img-size",
    attrs: {
      "data-width": "470",
      "data-height": "60",
      "data-lineHeight": "60",
      "data-marginTop": "60",
      "data-marginBottom": "60"
    }
  }, [_c('a', {
    on: {
      "click": _vm.invite
    }
  }, [_vm._v("邀请好友")])]), _vm._v(" "), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "inviteFriend img-size",
    attrs: {
      "data-width": "662",
      "data-height": "64",
      "data-lineHeight": "64"
    }
  }, [_vm._v("\n            邀请的"), _c('span', {
    staticClass: "big"
  }, [_vm._v("好友越多，奖励")]), _vm._v("越多   每月上限"), _c('span', {
    staticClass: "big"
  }, [_vm._v("240元")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "taskTishi img-size",
    attrs: {
      "data-paddingLeft": "20",
      "data-paddingRight": "20"
    }
  }, [_c('div', {
    staticClass: "tishiTitle img-size"
  }, [_vm._v("温馨提示：")]), _vm._v(" "), _c('div', {
    staticClass: "tishiContent img-size"
  }, [_vm._v("邀请任务要求的完成条件与邀请佣金、首月返现并不相关。例如：被邀请人首投＜5000元，同样可以建立邀请关系，不影响邀请佣金及首月返现的计算，但无法获得邀请任务的奖励（因为不满足完成邀请任务的条件）")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1339fc14", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=3_chunk.js.map?name=75a448a25405b5a6009f