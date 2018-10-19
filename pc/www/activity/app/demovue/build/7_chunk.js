webpackJsonp([7],{

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(50)

var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(66),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\www\\activity\\app\\demovue\\src\\earn\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9cc23c80", Component.options)
  } else {
    hotAPI.reload("data-v-9cc23c80", Component.options)
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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T, $) {

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// import friend from "../pop/friend.vue";
exports.default = {
  data: function data() {
    return {
      show: true,
      showIvite: false,
      commission: 0,
      charge: "",
      friend: "",
      list: [],
      List: [],
      scrolled: false,
      month: '',
      nowPage: 0,
      pageOn: 1,
      recommCodes: '',
      totalPage: 0,
      con: '点击加载更多',
      time: '',
      xian: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    T.setImgSize();
    if (!T.uid) {
      (0, _requirePop2.default)('login', {
        props: {
          transition: 'rotate3d'
        }
      });
    } else {
      router.push("/main");
    }
    var self = this;
    var pageSize = 10;
    //发送ajax请求佣金记录
    //===========制作滑动的效果================
    //var list=document.querySelector('#list');
    var childBox = document.querySelector("#list");
    var lis = childBox.querySelectorAll("li");
    var parentHeight = childBox.offsetHeight;
    var childHeight = lis.offsetHeight;
    var distance = 30;
    var maxPosition = 0;
    var minPosition = parentHeight - childHeight;
    // 滑动区间
    var maxSwiper = maxPosition + distance;
    var minSwiper = minPosition - distance;
    var startY = 0;
    var moveY = 0;
    var distanceY = 0;
    childBox.addEventListener("touchstart", function (e) {
      startY = e.touches[0].clientY;
    });
    childBox.addEventListener("touchmove", function (e) {
      moveY = e.touches[0].clientY;
      distanceY = moveY - startY;
      // if((currentY + distanceY) < maxSwipe && (currentY + distanceY) > minSwipe){
      //     setTranslateY(currentY + distanceY);
      //    }
    });
    childBox.addEventListener('touchend', function (e) {
      // if((currentY+distanceY)>maxPosition){
      //   currentY=maxPosition;
      //   addTransition();
      //   setTranslateY(currentY);
      // }
      self.loadingMOre();
    });
    T.ajax({
      url: _URL.commissionRecord,
      data: { uid: T.uid, pageOn: 1, pageSize: 10 }
    }).then(function (data) {
      self.list = data.map.page.rows; //佣金记录
      _this.commission = data.map.estimateAmount; //查询整个接口数据
      _this.xian = data.map.firstMonthAmount; //首月返现奖励
      _this.charge = data.map; //查询整个数据
      _this.totalPage = data.map.page.totalPage; //总页数
      _this.$nextTick(function () {
        T.setImgSize();
      });
    });
    T.ajax({
      url: _URL.MyFriend,
      data: { uid: T.uid, pageOn: 1, pageSize: 100 }
    }).then(function (data) {
      _this.friend = data.map; //好友
      _this.rows = data.map.page.rows;
      _this.$nextTick(function () {
        T.setImgSize();
      });
      _this.recommCodes = data.map.recommCodes; //邀请码
      /* var list= data.map.page.rows;//佣金记录
       this.commission=data.map.estimateAmount;//查询整个接口数据
       this.charge=data.map;//查询整个数据*/
    });
    //查询首月返现奖励
    /*  T.ajax({
      url:hesitory,
      data:{uid: T.uid,pageOn:1,pageSize:10}
    }).then(data=>{
     this.xian=data.map.rewards;//首月返现奖励
    });*/
    T.ajax({
      url: _URL.MonthlyTask,
      data: { uid: T.uid, pageOn: 1, pageSize: 100 }
    }).then(function (data) {
      _this.time = data.map.drRecommendTask.startTime;
    });
  },

  methods: {
    tab: function tab(i, $event) {
      var li = $('.earnTab .tabList');
      var self = this,
          tag = $event.currentTarget;
      li.removeClass('active');
      $(tag).addClass('active');
      this.show = i == 0;
      this.showIvite = i == 1;
      this.transition = i == 0 ? 'left' : 'right';
    },
    explain: function explain() {
      (0, _requirePop2.default)('explain', {
        props: {
          transition: 'rotate3d'
        }
      });
    },
    myFriendNumber: function myFriendNumber() {
      (0, _requirePop2.default)('yongjin', {
        props: {
          transition: 'rotate3d'
        }
      });
    },
    impove: function impove() {
      router.push("/level");
    },
    state: function state() {
      router.push("/strategy");
    },
    lookHestory: function lookHestory() {
      router.push("/hesitory");
    },
    loadingMOre: function loadingMOre() {
      var _this2 = this;

      if (this.pageOn < this.totalPage) {
        if (this.pageOn < this.totalPage - 1) {
          this.con = '点击加载更多';
        } else {
          this.con = '没有更多数据了';
        }
        this.pageOn++;
      } else {
        this.con = '没有更多数据了';
        return;
      }
      T.ajax({
        url: _URL.commissionRecord,
        data: { uid: T.uid, pageOn: 1, pageSize: this.pageOn * 10 }
      }).then(function (data) {
        _this2.list = data.map.page.rows; //佣金记录
        //this.$set("list",this.list.concat(data.map.page.rows));
        _this2.commission = data.map.estimateAmount; //查询整个接口数据
        _this2.charge = data.map; //查询整个数据
        _this2.$nextTick(function () {
          T.setImgSize();
        });
      });
    },
    strategy: function strategy() {
      router.push('/strategy');
    },
    finish: function finish() {
      router.push("/earn");
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
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "earn-box"
  }, [_c('div', {
    staticClass: "todayCount img-size",
    attrs: {
      "data-paddingTop": "62",
      "data-paddingBottom": "60"
    }
  }, [_c('p', {
    staticClass: "today"
  }, [_vm._v("今日预计佣金"), _c('span', {
    staticClass: "question img-size",
    attrs: {
      "data-width": "40",
      "data-height": "40",
      "data-lineHeight": "40",
      "data-marginLeft": "10"
    },
    on: {
      "click": _vm.explain
    }
  }, [_vm._v("?")])]), _vm._v(" "), _c('p', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.commission))]), _vm._v(" "), _c('a', {
    staticClass: "gonglue img-size",
    attrs: {
      "data-width": "144",
      "data-height": "50",
      "data-top": "50",
      "data-right": "30"
    },
    on: {
      "click": _vm.strategy
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "countList img-size",
    attrs: {
      "data-marginTop": "60"
    }
  }, [_c('ul', [_c('li', [_c('p', {
    staticClass: "yong"
  }, [_vm._v(_vm._s(_vm.charge.yesterdayAmount) + "元")]), _vm._v(" "), _c('p', {
    staticClass: "yongName"
  }, [_vm._v("昨日佣金")])]), _vm._v(" "), _c('li', {
    staticClass: "line"
  }, [_c('p', {
    staticClass: "yong"
  }, [_vm._v(_vm._s(_vm.charge.sumAmount) + "元")]), _vm._v(" "), _c('p', {
    staticClass: "yongName"
  }, [_vm._v("累计佣金")])]), _vm._v(" "), _c('li', [_c('p', {
    staticClass: "yong"
  }, [_vm._v(_vm._s(_vm.xian) + "元")]), _vm._v(" "), _c('p', {
    staticClass: "yongName",
    on: {
      "click": _vm.lookHestory
    }
  }, [_vm._v("首月返现奖励>")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "earnTab img-size",
    attrs: {
      "data-paddingBottom": "120"
    }
  }, [_c('ul', [_c('li', {
    staticClass: "tabList img-size active",
    attrs: {
      "data-height": "80",
      "data-lineHeight": "80"
    },
    on: {
      "click": function($event) {
        _vm.tab(0, $event)
      }
    }
  }, [_vm._v("佣金记录")]), _vm._v(" "), _c('li', {
    staticClass: "tabList img-size",
    attrs: {
      "data-height": "80",
      "data-lineHeight": "80"
    },
    on: {
      "click": function($event) {
        _vm.tab(1, $event)
      }
    }
  }, [_c('span', {
    staticClass: "line img-size",
    attrs: {
      "data-height": "50",
      "data-marginTop": "15",
      "data-marginBottom": "15"
    }
  }), _vm._v("我的好友"), _c('p', {
    staticClass: "invite img-size",
    staticStyle: {
      "line-height": "normal"
    },
    attrs: {
      "data-width": "100"
    }
  }, [_vm._v("邀请有奖")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "recordList"
  }, [_c('ul', {
    staticClass: "yong img-size",
    attrs: {
      "data-height": "192",
      "data-lineHeight": "192"
    }
  }, [_c('li', {
    staticClass: "yongrecord img-size",
    attrs: {
      "data-paddingTop": "60",
      "data-paddingBottom": "60"
    }
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("我的待收本金")]), _vm._v(" "), _c('div', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.charge.wprincipal) + "元")])]), _vm._v(" "), _c('li', {
    staticClass: "yongrecord img-size",
    attrs: {
      "data-paddingTop": "60",
      "data-paddingBottom": "42"
    }
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("我的佣金利率")]), _vm._v(" "), _c('div', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.charge.rate) + "%")])]), _vm._v(" "), _c('li', {
    staticClass: "yongrecord img-size",
    on: {
      "click": _vm.impove
    }
  }, [_c('span', {
    staticClass: "question img-size",
    attrs: {
      "data-width": "40",
      "data-height": "40",
      "data-lineHeight": "40"
    }
  }, [_vm._v("?")]), _vm._v("  如何提升？\n        ")])]), _vm._v(" "), _c('ul', {
    staticClass: "month img-size",
    attrs: {
      "id": "list"
    }
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.list), function(obj) {
    return (_vm.list) ? _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.list.length > 0),
        expression: "list.length>0"
      }],
      staticClass: "img-size",
      attrs: {
        "data-height": "60",
        "data-lineHeight": "60"
      }
    }, [_c('div', {
      staticClass: "date"
    }, [_vm._v(_vm._s(new Date(obj.addTime).Format('yyyy-MM-dd')))]), _vm._v(" "), _c('div', {
      staticClass: "money"
    }, [_vm._v(_vm._s(obj.amount) + "元")])]) : _vm._e()
  }), _vm._v(" "), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.list.length > 0),
      expression: "list.length>0"
    }],
    staticStyle: {
      "text-align": "center"
    },
    on: {
      "click": _vm.loadingMOre
    }
  }, [_vm._v(_vm._s(_vm.con))]), _vm._v(" "), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.list.length == 0),
      expression: "list.length==0"
    }],
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("暂无数据马上看"), _c('a', {
    staticStyle: {
      "color": "#FF8246"
    },
    on: {
      "click": _vm.strategy
    }
  }, [_vm._v("攻略")]), _vm._v("赚取佣金吧")])], 2)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.show),
      expression: "!show"
    }],
    staticClass: "myFriend"
  }, [_c('div', {
    staticClass: "myFriendTab img-size",
    attrs: {
      "data-paddingTop": "60",
      "data-paddingBottom": "60"
    }
  }, [_c('div', {
    staticClass: "friendLeft"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("我的好友数量 "), _c('span', {
    staticClass: "question img-size",
    attrs: {
      "data-width": "40",
      "data-height": "40",
      "data-lineHeight": "40"
    },
    on: {
      "click": _vm.myFriendNumber
    }
  }, [_vm._v("?")])]), _vm._v(" "), _c('div', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.friend.sumCount) + "人")])]), _vm._v(" "), _c('div', {
    staticClass: "friendLeft"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("我的好友待收本金")]), _vm._v(" "), _c('div', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.friend.friendAmount) + "元"), _c('span', [_vm._v("(可计提佣金)")])])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "shuoming img-size",
    attrs: {
      "data-width": "670",
      "data-height": "96",
      "data-lineHeight": "96",
      "data-marginBottom": "46"
    }
  }, [_c('p', {
    staticClass: "invite img-size",
    staticStyle: {
      "line-height": "normal"
    },
    attrs: {
      "data-width": "100",
      "data-marginLeft": "14",
      "data-marginRight": "16",
      "data-marginTop": "36"
    }
  }, [_vm._v("邀请有奖")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "goimpove img-size",
    attrs: {
      "data-width": "130",
      "data-height": "50",
      "data-marginTop": "22",
      "data-lineHeight": "50"
    },
    on: {
      "click": _vm.finish
    }
  }, [_vm._v("去完成")])]), _vm._v(" "), _c('div', {
    staticClass: "record"
  }, [_vm._m(2), _vm._v(" "), _vm._l((_vm.rows), function(fr) {
    return _c('ul', {
      staticClass: "list img-size",
      attrs: {
        "data-lineHeight": "50",
        "data-height": "50"
      }
    }, [_c('li', [_vm._v(_vm._s(fr.realName) + " ")]), _vm._v(" "), _c('li', [_vm._v(_vm._s(fr.mobilephone) + " ")]), _vm._v(" "), _c('li', [_vm._v(_vm._s(new Date(fr.investTime).Format('yyyy-MM-dd')))]), _vm._v(" "), _c('div', {
      staticStyle: {
        "clear": "both"
      }
    })])
  })], 2)])]), _vm._v(" "), _c('div', {
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
      "click": _vm.invite
    }
  }, [_vm._v("邀请好友")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "monthTitle img-size",
    attrs: {
      "data-height": "60",
      "data-lineHeight": "60"
    }
  }, [_c('div', {
    staticClass: "date"
  }, [_vm._v("日期")]), _vm._v(" "), _c('div', {
    staticClass: "money"
  }, [_vm._v("获得佣金")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "explain2 img-size",
    attrs: {
      "data-width": "346",
      "data-height": "76"
    }
  }, [_c('p', {
    staticClass: "img-size",
    attrs: {
      "data-height": "30",
      "data-lineHeight": "30",
      "data-marginTop": "20"
    }
  }, [_vm._v("完成每月邀请任务，每月最高赢取240元现金奖励。")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "recordTittle img-size",
    attrs: {
      "data-height": "50",
      "data-lineHeight": "50"
    }
  }, [_c('li', [_vm._v("好友ID")]), _vm._v(" "), _c('li', [_vm._v("手机号")]), _vm._v(" "), _c('li', [_vm._v("时间")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9cc23c80", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=7_chunk.js.map?name=75a448a25405b5a6009f