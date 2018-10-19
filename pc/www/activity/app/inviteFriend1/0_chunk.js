webpackJsonp([0],{

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d7767a5_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(38);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(35)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7d7767a5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d7767a5_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\gift\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d7767a5", Component.options)
  } else {
    hotAPI.reload("data-v-7d7767a5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _URL = __webpack_require__(5);

var _store = __webpack_require__(2);

var _store2 = _interopRequireDefault(_store);

var _requirePop = __webpack_require__(1);

var _requirePop2 = _interopRequireDefault(_requirePop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    store: _store2.default,
    props: {
        superClass: String,
        className: String,
        transition: String,
        closeCallback: Function,
        index: Number,
        isHaveFree: Number,
        prizeType: Number,
        Freeofcharge: Number
    },
    data: function data() {
        return {
            showModal: true,
            liping: true,
            showList: false,
            width: 117,
            height: 157
        };
    },
    mounted: function mounted() {
        var self = this;
        T.setImgSize();

        /*setTimeout(function(){
            self.showList = true;
            $('.liping').css({marginTop:-$('.liping').height()+'px'});
            setTimeout(function(){
                self.liping = false;
            },310);
        },1000);*/

        var collection = $('.collection'),
            collectionCnt = $('.collection .cnt');

        setTimeout(function () {
            collection.css({ opacity: 1 });
            setTimeout(function () {
                collectionCnt.addClass('cur');
                self.liping = false;
                self.showList = true;
                setTimeout(function () {
                    collectionCnt.addClass('cur1');
                    setTimeout(function () {
                        collection.css({ opacity: 0 });
                        setTimeout(function () {
                            collection.remove();
                        }, 350);
                    }, 350);
                }, 2000);
            }, 350);
        }, 1000);
    },

    methods: {
        closePropagtion: function closePropagtion(e) {
            e.stopPropagation(); //
            //e.cancelBubble = true;  // 
        },
        showPop: function showPop(callback) {
            this.showModal = true;
            if ($.type(callback) == 'function') {
                setTimeout(callback, 500);
            }
        },
        closePop: function closePop(callback, name) {
            var _this = this;

            name = name || 'closePopEvent';
            this.showModal = false;
            this.closeCallback && this.closeCallback.call(this);
            setTimeout(function () {
                $(_this.$el).remove();
            }, 510);
        },
        prize: function prize() {
            var self = this;
            T.ajax({
                url: _URL.prize,
                data: {
                    uid: T.uid,
                    prizeType: self.prizeType
                }
            }).then(function (data) {
                //console.log(data);
                var prize = data.map.prize;
                if (self.isHaveFree > 0) {
                    self.$store.commit('haveFree', self.isHaveFree - 1);
                }
                (0, _requirePop2.default)('winng', {
                    props: {
                        transition: 'rotate3d',
                        className: 'img' + (self.index + 1),
                        back: self.closePop,
                        obj: prize
                    }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
    staticClass: "modal-mask",
    class: _vm.superClass
  }, [_c('div', {
    staticClass: "mask img-size",
    attrs: {
      "data-height": "1334"
    }
  }, [_c('header', {
    staticClass: "img-size",
    attrs: {
      "data-height": "245"
    }
  }, [_c('div', {
    staticClass: "back img-size",
    attrs: {
      "data-fontSize": "24",
      "data-right": "45",
      "data-top": "45"
    },
    on: {
      "click": _vm.closePop
    }
  }, [_vm._v("返回")]), _vm._v(" "), _c('div', {
    staticClass: "img img-size",
    class: _vm.className,
    attrs: {
      "data-width": "117",
      "data-height": "157"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("看下我给大家伙准备了哪些礼物：")])]), _vm._v(" "), _c('div', {
    staticClass: "content img-size",
    attrs: {
      "data-width": "670",
      "data-height": "960"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.liping),
      expression: "liping"
    }],
    staticClass: "liping img-size",
    attrs: {
      "data-width": "670",
      "data-height": "960"
    }
  }, [_c('div', {
    staticClass: "img img-size",
    class: _vm.className,
    attrs: {
      "data-width": "619",
      "data-height": "717"
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showList),
      expression: "showList"
    }],
    staticClass: "list img-size",
    attrs: {
      "data-width": "670",
      "data-height": "960"
    }
  }, [(_vm.isHaveFree != 1) ? _c('div', {
    staticClass: "list-ul"
  }, [_c('ul', _vm._l((9), function(obj) {
    return _c('li', [_c('div', {
      staticClass: "img img-size",
      class: _vm.className,
      attrs: {
        "data-width": "189",
        "data-height": "143"
      },
      on: {
        "click": _vm.prize
      }
    })])
  })), _vm._v(" "), _c('ul', {
    staticClass: "two"
  }, _vm._l((2), function(obj) {
    return _c('li', [_c('div', {
      staticClass: "img img-size",
      class: _vm.className,
      attrs: {
        "data-width": "189",
        "data-height": "143"
      },
      on: {
        "click": _vm.prize
      }
    })])
  }))]) : _vm._e(), _vm._v(" "), (_vm.isHaveFree == 1) ? _c('div', {
    staticClass: "list-ul"
  }, [_c('ul', _vm._l((9), function(obj) {
    return _c('li', [_c('div', {
      staticClass: "img img-size",
      class: _vm.className,
      attrs: {
        "data-width": "189",
        "data-height": "143"
      },
      on: {
        "click": _vm.prize
      }
    })])
  })), _vm._v(" "), _c('ul', {
    staticClass: "two"
  }, _vm._l((2), function(obj) {
    return _c('li', [_c('div', {
      staticClass: "img img-size",
      class: _vm.className,
      attrs: {
        "data-width": "189",
        "data-height": "143"
      },
      on: {
        "click": _vm.prize
      }
    })])
  }))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "submit"
  }, [_c('div', {
    staticClass: "btn img-size",
    attrs: {
      "data-width": "304",
      "data-height": "81"
    },
    on: {
      "click": _vm.prize
    }
  }), _vm._v(" "), (_vm.Freeofcharge == 1) ? _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("\n                            本次拆礼物免费（每日1次）\n                        ")]) : _vm._e()])])])]), _vm._v(" "), _c('div', {
    staticClass: "collection"
  }, [_c('p', [_vm._v("我去藏礼物啦"), _c('br'), _vm._v("能不能找到大奖，就看你的啦~~")]), _vm._v(" "), _c('div', {
    staticClass: "cnt"
  }, [_c('div', {
    staticClass: "img img-size",
    class: _vm.className,
    attrs: {
      "data-width": "117",
      "data-height": "157"
    }
  })])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7d7767a5", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=0_chunk.js.map?name=8b69e8bde2f2b5573fae