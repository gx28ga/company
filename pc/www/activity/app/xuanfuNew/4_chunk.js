webpackJsonp([4],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(59)

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(75),
  /* scopeId */
  "data-v-656c542c",
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\xuanfuNew\\src\\module\\main\\regOK.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] regOK.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-656c542c", Component.options)
  } else {
    hotAPI.reload("data-v-656c542c", Component.options)
  }
})()}

module.exports = Component.exports


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

/***/ 30:
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

exports.default = {
    mounted: function mounted() {
        T.setImgSize();
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _URL = __webpack_require__(12);

var _requirePop = __webpack_require__(1);

var _requirePop2 = _interopRequireDefault(_requirePop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//

exports.default = {
	data: function data() {
		return {
			items: {
				phone: ''
			},
			phone: '',
			lqtan: false,
			lqerror: '',
			phoneOK: false
		};
	},

	watch: {
		items: {
			handler: function handler(val, oldval) {
				//var wer = this.$refs.phone.value;
				//var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
				// if(reg.test(wer)==false){ //手机号校验提示
				// 	$('.phonErr')[0].innerHTML = "请输入正确格式的手机号";
				// }else{$('.phonErr')[0].innerHTML = "";}
			},
			deep: true
		}
	},
	mounted: function mounted() {
		T.setImgSize();
		T.getAppInfo();
	},

	methods: {
		phoneInFun: function phoneInFun() {
			var phone = this.$refs.phone.value;
			var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
			if (reg.test(phone) == false) {
				//手机号校验提示
				this.lqerror = '请填写正确的手机号';
			} else {
				this.lqerror = '';this.phoneOK = true;
			}
		},
		tzphone: function tzphone() {
			var self = this;
			var phone = self.$refs.phone.value;
			var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
			if (reg.test(phone) == false) {
				//手机号校验提示
				self.lqerror = '请填写正确的手机号';
			} else {
				T.ajax({
					url: _URL.userIsNew,
					data: {
						mobilePhone: phone
					},
					callback: true,
					success: function success(_data) {
						if (_data.success) {
							if (_data.map.exists) {
								self.lqerror = '此号码已经注册';
							} else {
								self.lqerror = '';
								router.replace({
									path: 'register',
									query: { phone: phone, toFrom: T.toFrom }
								});
							}
						}
					}
				});
			}
		}
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  "data-v-7eeaef3b",
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\xuanfuNew\\src\\module\\html\\about.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] about.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7eeaef3b", Component.options)
  } else {
    hotAPI.reload("data-v-7eeaef3b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(34)

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  "data-v-50ebee8a",
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\xuanfuNew\\src\\module\\html\\float.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] float.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50ebee8a", Component.options)
  } else {
    hotAPI.reload("data-v-50ebee8a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "bannbox img-size",
    staticStyle: {
      "width": "100%",
      "position": "fixed",
      "bottom": "0"
    },
    attrs: {
      "data-height": "170"
    }
  }, [_c('div', {
    staticClass: "bga"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.items.phone),
      expression: "items.phone"
    }],
    ref: "phone",
    staticClass: "phon img-size",
    attrs: {
      "data-fontSize": "32",
      "data-width": "370",
      "data-height": "80",
      "data-marginTop": "40",
      "data-marginLeft": "48",
      "data-paddingLeft": "30",
      "data-borderRadius": "50",
      "type": "text",
      "placeholder": "请输入手机号"
    },
    domProps: {
      "value": (_vm.items.phone)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.items.phone = $event.target.value
      }, _vm.phoneInFun]
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btn lqbtn img-size",
    attrs: {
      "data-width": "220",
      "data-lineHeight": "80",
      "data-right": "48",
      "data-top": "40",
      "data-borderRadius": "40",
      "data-fontSize": "32"
    },
    on: {
      "click": _vm.tzphone
    }
  }, [_vm._v("立即领取")]), _vm._v(" "), _c('p', {
    staticClass: "tzgerror img-size",
    staticStyle: {
      "text-align": "left"
    },
    attrs: {
      "id": "tzerror",
      "data-lineHeight": "48",
      "data-fontSize": "24",
      "data-paddingLeft": "50"
    }
  }, [_vm._v(_vm._s(_vm.lqerror))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-50ebee8a", module.exports)
  }
}

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "about-us hl2 img-size",
    attrs: {
      "data-paddingLeft": "24",
      "data-paddingRight": "24",
      "data-paddingTop": "25"
    }
  }, [_c('div', {
    staticClass: "aboutbtn img-size",
    attrs: {
      "data-width": "180",
      "data-lineHeight": "60",
      "data-marginBottom": "25",
      "data-borderRadius": "50",
      "data-fontSize": "30"
    }
  }, [_vm._v("关于多融")]), _vm._v(" "), _c('div', {
    staticClass: "about about1 img-size",
    attrs: {
      "data-paddingTop": "32",
      "data-paddingBottom": "32"
    }
  }, [_c('div', {
    staticClass: "icons icona img-size",
    attrs: {
      "data-width": "74",
      "data-height": "72",
      "data-marginTop": "28",
      "data-marginBottom": "28",
      "data-marginRight": "16",
      "data-marginLeft": "12"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('p', {
    staticClass: "big img-size",
    attrs: {
      "data-fontSize": "36"
    }
  }, [_vm._v("公司背景")]), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("国资委旗下-沪深控股战略控股，占股比例为99%（商业网点建设开发中心旗下）")])])]), _vm._v(" "), _c('div', {
    staticClass: "about about1 img-size",
    attrs: {
      "data-paddingTop": "32",
      "data-paddingBottom": "32"
    }
  }, [_c('div', {
    staticClass: "iconsb img-size",
    attrs: {
      "data-height": "365"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "about about1 img-size",
    attrs: {
      "data-paddingTop": "32",
      "data-paddingBottom": "32"
    }
  }, [_c('div', {
    staticClass: "icons iconb img-size",
    attrs: {
      "data-width": "74",
      "data-height": "72",
      "data-marginTop": "16",
      "data-marginRight": "16",
      "data-marginLeft": "12"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('p', {
    staticClass: "big img-size",
    attrs: {
      "data-fontSize": "36"
    }
  }, [_vm._v("票据资产")]), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("所有票据源于银行/大型国企  100%承兑")])])]), _vm._v(" "), _c('div', {
    staticClass: "about about1 img-size",
    attrs: {
      "data-paddingTop": "32",
      "data-paddingBottom": "32"
    }
  }, [_c('div', {
    staticClass: "icons iconc img-size",
    attrs: {
      "data-width": "74",
      "data-height": "72",
      "data-marginTop": "28",
      "data-marginRight": "16",
      "data-marginLeft": "12"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('p', {
    staticClass: "big img-size",
    attrs: {
      "data-fontSize": "36"
    }
  }, [_vm._v("多重保障")]), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("上海华瑞银行资金存管  专业严格风控")]), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("技术安全保障  专业律所护航")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7eeaef3b", module.exports)
  }
}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _about = __webpack_require__(36);

var _about2 = _interopRequireDefault(_about);

var _float = __webpack_require__(37);

var _float2 = _interopRequireDefault(_float);

var _URL = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			phone: '',
			getThis: true
		};
	},

	components: {
		about: _about2.default
	},
	mounted: function mounted() {
		T.setImgSize();
		this.phone = this.$route.query.phone;
	},

	methods: {
		toBill: function toBill() {
			var userphone = this.$route.query.phone;
			if (this.getThis) {
				this.getThis = false;
				T.ajax({
					url: _URL.sendAward,
					data: {
						uid: T.uid
					},
					callback: true,
					success: function success(_data) {
						if (_data.success) {
							router.replace({
								path: 'billOK',
								query: { phone: userphone, toFrom: T.toFrom }
							});
						}
					}
				});
			}
		}
	}
}; //
//
//
//
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "module-scroll"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "hl hl1 img-size",
    staticStyle: {
      "height": "auto"
    },
    attrs: {
      "data-paddingTop": "2"
    }
  }, [_c('div', {
    staticClass: "success regi img-size",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "data-marginTop": "39",
      "data-fontSize": "36",
      "data-lineHeight": "58"
    }
  }, [_c('span', [_vm._v("当前账户：")]), _c('span', [_vm._v(_vm._s(_vm.phone))])]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "register img-size",
    attrs: {
      "data-width": "570",
      "data-marginTop": "30",
      "data-paddingBottom": "25",
      "data-borderTopLeftRadius": "30",
      "data-borderTopRightRadius": "30",
      "data-fontSize": "30"
    }
  }, [_c('p', {
    staticClass: "name img-size",
    attrs: {
      "data-fontSize": "32",
      "data-lineHeight": "90"
    }
  }, [_vm._v("新手体验标")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("历史年化收益率")]), _vm._v(" "), _c('div', {
    staticClass: "info2 img-size",
    attrs: {
      "data-width": "533",
      "data-fontSize": "30",
      "data-paddingTop": "30",
      "data-paddingBottom": "30"
    }
  }, [_vm._v("收益立即到账，随时可提现!")]), _vm._v(" "), _c('div', {
    staticClass: "regbtn img-size",
    attrs: {
      "data-width": "460",
      "data-height": "70",
      "data-lineHeight": "70",
      "data-marginTop": "70",
      "data-fontSize": "32"
    },
    on: {
      "click": _vm.toBill
    }
  }, [_vm._v("使用10000元体验金")])]), _vm._v(" "), _c('div', {
    staticClass: "bottbgg img-size",
    attrs: {
      "data-width": "594",
      "data-height": "130"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "notice img-size",
    attrs: {
      "data-lineHeight": "100",
      "data-fontSize": "24"
    }
  }, [_vm._v("操作中如有任何疑问请致联系客服：400-690-8896")])]), _vm._v(" "), _c('about'), _vm._v(" "), _vm._m(2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "banntitle img-size",
    attrs: {
      "data-paddingTop": "30",
      "data-paddingBottom": "30"
    }
  }, [_c('div', {
    staticClass: "title img-size",
    attrs: {
      "data-width": "475",
      "data-height": "61"
    }
  }, [_c('p', {
    staticClass: "prti"
  }, [_c('span', {
    staticClass: "titlebga img-size",
    attrs: {
      "data-width": "246",
      "data-height": "30",
      "data-marginTop": "10"
    }
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "red img-size",
    attrs: {
      "data-fontSize": "80",
      "data-lineHeight": "82"
    }
  }, [_vm._v("12"), _c('span', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "60"
    }
  }, [_vm._v(".0%")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bannbox img-size",
    staticStyle: {
      "width": "100%",
      "position": "fixed",
      "bottom": "0"
    },
    attrs: {
      "data-height": "120"
    }
  }, [_c('div', {
    staticClass: "bga",
    staticStyle: {
      "background": "rgba(0,0,0,0.5)",
      "color": "#fff"
    }
  }, [_c('div', {
    staticClass: "img-size",
    attrs: {
      "data-paddingLeft": "30",
      "data-fontSize": "28",
      "data-lineHeight": "120"
    }
  }, [_vm._v("下载多融理财APP 更多惊喜等你来")]), _vm._v(" "), _c('div', {
    staticClass: "btn lqbtn img-size",
    attrs: {
      "data-width": "180",
      "data-lineHeight": "60",
      "data-right": "30",
      "data-top": "30",
      "data-borderRadius": "40",
      "data-fontSize": "30"
    }
  }, [_c('a', {
    staticStyle: {
      "color": "#ac1c1c"
    },
    attrs: {
      "href": "http://app.duorongcf.com/html/2weima.html"
    }
  }, [_vm._v("立即下载")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-656c542c", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=4_chunk.js.map?name=aab64f2477fe794447cf