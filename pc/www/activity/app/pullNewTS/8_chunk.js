webpackJsonp([8],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var http = '';
module.exports = {
    userIsNew: http + '/existMobilePhone', //判断用户是否已注册
    sendMsg: http + '/sendRegMsg', //获取短息验证码
    subReg: http + '/reg', //注册
    sendAward: http + '/activity/operation/send-award.do',
    isHaveChance: http + '/activity/operation/is-have-chance.do',
    investRank: http + '/welcome-the-new/invest-rank.do',
    regAndInvestCount: http + '/index/regAndInvestCount.do'
};

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

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T, $) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _URL = __webpack_require__(12);

exports.default = {
    props: {
        transition: String
    },
    data: function data() {
        return {
            showModal: true,
            isactive: 0,
            userChance: {}
        };
    },
    mounted: function mounted() {
        var self = this;
        T.setImgSize();
        T.getAppInfo();
        this.islogin = T.isLogin;
        if (!this.islogin || !T.uid) return;
        /*T.ajax({  //抢排名
            url : getlucky , 
            data : {
                uid : T.uid
            },
            success : function( _data ){
                self.userChance = _data.map.userChance;
            }
        });*/
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
        },
        hui: function hui() {
            var isactive = this.isactive;
            if (isactive == 0) {
                $('.pice').eq(0).addClass('colors');
                $('.pice').eq(1).removeClass('colors');
                $('.pice').eq(2).removeClass('colors');
                $('.selected').eq(0).addClass('img');
                $('.selected').eq(1).removeClass('img');
                $('.selected').eq(2).removeClass('img');
                $('.surebtn').removeClass('gray');
                if (this.userChance.chanceCommon < 1) {
                    this.isactive = -1;
                    $('.surebtn').addClass('gray');
                }
            } else if (isactive == 1) {
                $('.pice').eq(1).addClass('colors');
                $('.pice').eq(0).removeClass('colors');
                $('.pice').eq(2).removeClass('colors');
                $('.selected').eq(1).addClass('img');
                $('.selected').eq(0).removeClass('img');
                $('.selected').eq(2).removeClass('img');
                $('.surebtn').removeClass('gray');
                if (this.userChance.chanceSpecial < 1) {
                    this.isactive = -1;
                    $('.surebtn').addClass('gray');
                }
            } else if (isactive == 2) {
                $('.pice').eq(2).addClass('colors');
                $('.pice').eq(0).removeClass('colors');
                $('.pice').eq(1).removeClass('colors');
                $('.selected').eq(2).addClass('img');
                $('.selected').eq(0).removeClass('img');
                $('.selected').eq(1).removeClass('img');
                $('.surebtn').removeClass('gray');
                if (this.userChance.chanceMultiple < 1) {
                    this.isactive = -1;
                    $('.surebtn').addClass('gray');
                }
            }
        },
        active: function active(type) {
            if (type == 0) {
                this.isactive = type;
                this.hui();
            } else if (type == 1) {
                this.isactive = type;
                this.hui();
            } else if (type == 2) {
                this.isactive = type;
                this.hui();
            }
        },
        change: function change() {
            var self = this;
            if (this.isactive < 0) {
                return;
            }
            this.closePop(function () {
                router.replace({
                    path: 'game',
                    query: { uid: T.uid, wap: T.wap, type: self.isactive }
                });
            });
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(3)))

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(61)

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(77),
  /* scopeId */
  "data-v-e709a2c8",
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\pullNewTS\\src\\pop\\change.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] change.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e709a2c8", Component.options)
  } else {
    hotAPI.reload("data-v-e709a2c8", Component.options)
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
    staticClass: "modal-container pop-cnt img-size",
    attrs: {
      "data-paddingTop": "25",
      "data-paddingBottom": "25",
      "data-paddingLeft": "33",
      "data-paddingRight": "33",
      "data-width": "630",
      "data-height": "979"
    },
    on: {
      "click": function($event) {
        _vm.closePropagtion($event)
      }
    }
  }, [_c('div', {
    staticClass: "ruletitle"
  }, [_vm._v("请选择钞票，然后开始数钱")]), _vm._v(" "), _c('div', {
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
      "click": _vm.closePop
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('div', {
    staticClass: "content img-size",
    attrs: {
      "data-width": "626",
      "data-fontSize": "22"
    }
  }, [_c('div', {
    staticClass: "pice comm colors img-size",
    attrs: {
      "data-width": "570",
      "data-paddingLeft": "32",
      "data-paddingRight": "23",
      "data-paddingTop": "17",
      "data-paddingBottom": "17"
    },
    on: {
      "click": function($event) {
        _vm.active(0)
      }
    }
  }, [_c('div', {
    staticClass: "left img-size",
    attrs: {
      "data-width": "190",
      "data-paddingTop": "35"
    }
  }, [_c('p', {
    staticClass: "name img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("普通钞票")]), _vm._v(" "), _c('p', [_vm._v("面额：100元/张")]), _vm._v(" "), _c('p', [_vm._v("剩余机会：" + _vm._s(_vm.userChance.chanceCommon) + "次")])]), _vm._v(" "), _c('div', {
    staticClass: "right img-size",
    attrs: {
      "data-width": "400",
      "data-height": "182"
    }
  }, [_c('div', {
    staticClass: "selected img img-size",
    attrs: {
      "data-top": "5",
      "data-right": "5",
      "data-width": "44",
      "data-height": "44"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "pice silver img-size",
    attrs: {
      "data-width": "570",
      "data-paddingLeft": "32",
      "data-paddingRight": "23",
      "data-paddingTop": "17",
      "data-paddingBottom": "17",
      "data-marginTop": "14"
    },
    on: {
      "click": function($event) {
        _vm.active(1)
      }
    }
  }, [_c('div', {
    staticClass: "left img-size",
    attrs: {
      "data-width": "190",
      "data-paddingTop": "35"
    }
  }, [_c('p', {
    staticClass: "name img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("银钞")]), _vm._v(" "), _c('p', [_vm._v("面额：188元/张")]), _vm._v(" "), _c('p', [_vm._v("剩余机会：" + _vm._s(_vm.userChance.chanceSpecial) + "次")])]), _vm._v(" "), _c('div', {
    staticClass: "right img-size",
    attrs: {
      "data-width": "400",
      "data-height": "182"
    }
  }, [_c('div', {
    staticClass: "selected img-size",
    attrs: {
      "data-top": "5",
      "data-right": "5",
      "data-width": "44",
      "data-height": "44"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "pice gold img-size",
    attrs: {
      "data-width": "570",
      "data-paddingLeft": "32",
      "data-paddingRight": "23",
      "data-paddingTop": "17",
      "data-paddingBottom": "17",
      "data-marginTop": "14"
    },
    on: {
      "click": function($event) {
        _vm.active(2)
      }
    }
  }, [_c('div', {
    staticClass: "left img-size",
    attrs: {
      "data-width": "190",
      "data-paddingTop": "35"
    }
  }, [_c('p', {
    staticClass: "name img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("金钞")]), _vm._v(" "), _c('p', [_vm._v("面额：288元/张")]), _vm._v(" "), _c('p', [_vm._v("剩余机会：" + _vm._s(_vm.userChance.chanceMultiple) + "次")])]), _vm._v(" "), _c('div', {
    staticClass: "right img-size",
    attrs: {
      "data-width": "400",
      "data-height": "182"
    }
  }, [_c('div', {
    staticClass: "selected img-size",
    attrs: {
      "data-top": "5",
      "data-right": "5",
      "data-width": "44",
      "data-height": "44"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "surebtn img-size",
    attrs: {
      "data-width": "290",
      "data-height": "114"
    },
    on: {
      "click": _vm.change
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('p', {
    staticClass: "ques img-size",
    attrs: {
      "data-fontSize": "28"
    }
  }, [_vm._v("Tips:如何获取数银钞/金钞机会？")]), _vm._v(" "), _c('p', {
    staticClass: "answ img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_vm._v("单笔投资≥80天产品，每满3万元额外获得一次数银钞机会")]), _vm._v(" "), _c('p', {
    staticClass: "answ img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_vm._v("单笔投资≥300天产品，每满3万元额外获得一次数金钞机会")])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e709a2c8", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=8_chunk.js.map?name=534490421620986d3532