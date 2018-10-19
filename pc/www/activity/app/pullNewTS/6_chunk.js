webpackJsonp([6],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(53)

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(69),
  /* scopeId */
  "data-v-1045e501",
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\pullNewTS\\src\\module\\main\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1045e501", Component.options)
  } else {
    hotAPI.reload("data-v-1045e501", Component.options)
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

/***/ 42:
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

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _requirePop = __webpack_require__(1);

var _requirePop2 = _interopRequireDefault(_requirePop);

var _float = __webpack_require__(62);

var _float2 = _interopRequireDefault(_float);

var _URL = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			peonum: 0,
			strs: '',
			regUser: null
		};
	},

	components: {
		floatdd: _float2.default
	},
	mounted: function mounted() {
		T.setImgSize();
		var self = this;
		function init() {
			T.ajax({
				url: _URL.investRank,
				data: {},
				callback: true,
				success: function success(_data) {
					self.regUser = _data.map.listDrMessage;
				}
			});
			T.ajax({
				url: _URL.regAndInvestCount,
				data: {},
				callback: true,
				success: function success(_data) {
					if (_data.success) {
						self.peonum = _data.map.regCount;
						self.strs = self.peonum.split('');
					}
				}
			});
		}
		init();
	},

	filters: {
		data: function data(input) {
			var d = new Date(input);
			var year = d.getFullYear();
			var month = d.getMonth() + 1;
			var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
			return year + '-' + month + '-' + day;
		}
	},
	methods: {
		ruletan: function ruletan() {
			(0, _requirePop2.default)('rule');
		}
	}
}; //
//
//
//
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(52)

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(68),
  /* scopeId */
  "data-v-01f0c4fd",
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\pullNewTS\\src\\module\\html\\float.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] float.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01f0c4fd", Component.options)
  } else {
    hotAPI.reload("data-v-01f0c4fd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 68:
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
     require("vue-hot-reload-api").rerender("data-v-01f0c4fd", module.exports)
  }
}

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pullnewbody module-scroll"
  }, [_c('div', {
    attrs: {
      "id": "home"
    }
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "hl list img-size",
    attrs: {
      "data-height": "500"
    }
  }, [_c('div', {
    staticClass: "btn rulebtn img-size",
    attrs: {
      "data-width": "200",
      "data-lineHeight": "60",
      "data-right": "75",
      "data-top": "30",
      "data-borderRadius": "30",
      "data-fontSize": "28"
    },
    on: {
      "click": _vm.ruletan
    }
  }, [_vm._v("活动规则>>")]), _vm._v(" "), _c('div', {
    staticClass: "write img-size",
    attrs: {
      "data-width": "576",
      "data-top": "120",
      "data-paddingTop": "70",
      "data-paddingLeft": "20",
      "data-paddingBottom": "20"
    }
  }, [_c('div', {
    staticClass: "wrap img-size",
    staticStyle: {
      "overflow": "hidden"
    },
    attrs: {
      "id": "registerlist",
      "data-width": "560",
      "data-height": "207"
    }
  }, [_c('ul', {
    staticClass: "img-size",
    attrs: {
      "id": "list",
      "data-width": "560",
      "data-fontSize": "20",
      "data-lineHeight": "40"
    }
  }, _vm._l((_vm.regUser), function(item) {
    return _c('li', [_c('span', {
      staticStyle: {
        "width": "34%",
        "display": "inline-block"
      }
    }, [_vm._v(_vm._s(item.mobilePhone))]), _vm._v(" "), _c('span', {
      staticStyle: {
        "width": "40%",
        "display": "inline-block"
      }
    }, [_vm._v(_vm._s(_vm._f("data")(item.registTime)))]), _vm._v(" "), _c('span', {
      staticStyle: {
        "width": "19%",
        "display": "inline-block"
      }
    }, [_vm._v("已领取")])])
  }))])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "all img-size",
    attrs: {
      "data-bottom": "32",
      "data-paddingLeft": "80",
      "data-fontSize": "28",
      "data-lineHeight": "38"
    }
  }, [_vm._v("\r\n\t\t\t\t已有\r\n\t\t\t\t"), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.strs.length >= 1),
      expression: "strs.length>=1"
    }],
    staticClass: "textbg img-size",
    attrs: {
      "data-width": "27",
      "data-height": "35"
    }
  }, [_vm._v(_vm._s(_vm.strs[0]))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.strs.length >= 2),
      expression: "strs.length>=2"
    }],
    staticClass: "textbg img-size",
    attrs: {
      "data-width": "27",
      "data-height": "35"
    }
  }, [_vm._v(_vm._s(_vm.strs[1]))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.strs.length >= 3),
      expression: "strs.length>=3"
    }],
    staticClass: "textbg img-size",
    attrs: {
      "data-width": "27",
      "data-height": "35"
    }
  }, [_vm._v(_vm._s(_vm.strs[2]))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.strs.length >= 4),
      expression: "strs.length>=4"
    }],
    staticClass: "textbg img-size",
    attrs: {
      "data-width": "27",
      "data-height": "35"
    }
  }, [_vm._v(_vm._s(_vm.strs[3]))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.strs.length >= 5),
      expression: "strs.length>=5"
    }],
    staticClass: "textbg img-size",
    attrs: {
      "data-width": "27",
      "data-height": "35"
    }
  }, [_vm._v(_vm._s(_vm.strs[4]))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.strs.length >= 6),
      expression: "strs.length>=6"
    }],
    staticClass: "textbg img-size",
    attrs: {
      "data-width": "27",
      "data-height": "35"
    }
  }, [_vm._v(_vm._s(_vm.strs[5]))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.strs.length >= 7),
      expression: "strs.length>=7"
    }],
    staticClass: "textbg img-size",
    attrs: {
      "data-width": "27",
      "data-height": "35"
    }
  }, [_vm._v(_vm._s(_vm.strs[6]))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.strs.length >= 8),
      expression: "strs.length>=8"
    }],
    staticClass: "textbg img-size",
    attrs: {
      "data-width": "27",
      "data-height": "35"
    }
  }, [_vm._v(_vm._s(_vm.strs[7]))]), _vm._v("\r\n\t\t\t\t位用户领取了新手礼包\r\n\t\t\t")])]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('floatdd')], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bannbox img-size",
    attrs: {
      "id": "bannbox",
      "data-height": "660"
    }
  }, [_c('div', {
    staticClass: "bga"
  }), _vm._v(" "), _c('div', {
    staticClass: "bgb"
  }), _vm._v(" "), _c('div', {
    staticClass: "bgc"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hl hl1 img-size",
    attrs: {
      "data-paddingTop": "32",
      "data-paddingBottom": "32"
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
  })])]), _vm._v(" "), _c('div', {
    staticClass: "title2 img-size",
    attrs: {
      "data-width": "412",
      "data-height": "40",
      "data-marginTop": "20"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bag img-size",
    attrs: {
      "data-height": "154",
      "data-marginTop": "30",
      "data-marginBottom": "18"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hl hl2 img-size",
    attrs: {
      "data-paddingTop": "32",
      "data-paddingBottom": "32"
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
    staticClass: "titlebgb img-size",
    attrs: {
      "data-width": "246",
      "data-height": "30",
      "data-marginTop": "10"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "title1 img-size",
    attrs: {
      "data-width": "330",
      "data-height": "89",
      "data-marginTop": "20"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "register img-size",
    attrs: {
      "data-width": "570",
      "data-marginTop": "30",
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
  }, [_vm._v("新手体验标")]), _vm._v(" "), _c('div', {
    staticClass: "bodd img-size",
    attrs: {
      "data-width": "526"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bodc img-size",
    attrs: {
      "data-width": "526",
      "data-marginTop": "40",
      "data-marginLeft": "22"
    }
  }, [_c('div', {
    staticClass: "kuai img-size",
    attrs: {
      "data-paddingRight": "16",
      "data-fontSize": "24"
    }
  }, [_c('span', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "60"
    }
  }, [_vm._v("12.0%")]), _c('br'), _vm._v("历史年化收益率")]), _vm._v(" "), _c('div', {
    staticClass: "kuai img-size",
    attrs: {
      "data-paddingLeft": "16",
      "data-paddingRight": "16",
      "data-fontSize": "24"
    }
  }, [_c('span', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "60"
    }
  }, [_vm._v("0")]), _c('span', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "36"
    }
  }, [_vm._v("元")]), _c('br'), _vm._v("起投金额")]), _vm._v(" "), _c('div', {
    staticClass: "kuain img-size",
    attrs: {
      "data-paddingLeft": "16",
      "data-paddingTop": "34",
      "data-fontSize": "24"
    }
  }, [_c('span', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "36"
    }
  }, [_vm._v("立即到账")]), _c('br'), _vm._v("投资期限")])])]), _vm._v(" "), _c('div', {
    staticClass: "bottbg img-size",
    attrs: {
      "data-width": "594",
      "data-height": "100"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hl hl3 img-size",
    attrs: {
      "data-paddingTop": "32",
      "data-paddingBottom": "32"
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
    staticClass: "titlebgc img-size",
    attrs: {
      "data-width": "246",
      "data-height": "30",
      "data-marginTop": "10"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "box img-size",
    attrs: {
      "data-marginTop": "50"
    }
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
  }, [_vm._v("新手宝")]), _vm._v(" "), _c('div', {
    staticClass: "newicon img-size",
    attrs: {
      "data-top": "28",
      "data-right": "100",
      "data-fontSize": "18",
      "data-paddingLeft": "10",
      "data-paddingRight": "10",
      "data-borderRadius": "20"
    }
  }, [_vm._v("仅限新手")]), _vm._v(" "), _c('p', {
    staticClass: "red img-size",
    attrs: {
      "data-fontSize": "80",
      "data-lineHeight": "82"
    }
  }, [_vm._v("5"), _c('span', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "60"
    }
  }, [_vm._v(".0%")])]), _vm._v(" "), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("历史年化收益率")]), _vm._v(" "), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("新用户前7天收益翻倍")]), _vm._v(" "), _c('div', {
    staticClass: "info img-size",
    attrs: {
      "data-width": "533",
      "data-fontSize": "30",
      "data-paddingTop": "30",
      "data-marginTop": "32"
    }
  }, [_c('p', [_vm._v("投资期限："), _c('span', {
    staticStyle: {
      "color": "#ac1c1c",
      "letter-spacing": "0px"
    }
  }, [_vm._v("随时可取")])])])]), _vm._v(" "), _c('div', {
    staticClass: "bottbgg img-size",
    attrs: {
      "data-width": "594",
      "data-height": "130",
      "data-fontSize": "30",
      "data-marginTop": "-20"
    }
  }, [_c('p', {
    staticClass: "img-size",
    attrs: {
      "data-paddingTop": "18"
    }
  }, [_vm._v("投资金额："), _c('span', {
    staticStyle: {
      "color": "#ac1c1c",
      "letter-spacing": "0px"
    }
  }, [_vm._v("100")]), _vm._v("元起")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "yetitle img-size",
    attrs: {
      "data-width": "640",
      "data-height": "56",
      "data-lineHeight": "64",
      "data-top": "120",
      "data-fontSize": "20"
    }
  }, [_c('ul', [_c('li', [_vm._v("手机号")]), _c('li', [_vm._v("领取时间")]), _c('li', [_vm._v("新手三重礼包")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "notice img-size",
    attrs: {
      "data-fontSize": "20",
      "data-lineHeight": "42",
      "data-paddingTop": "10",
      "data-paddingBottom": "170"
    }
  }, [_c('p', [_vm._v("市场有风险 投资需谨慎")]), _c('p', [_vm._v("平台建议的历史年化收益率仅供参考，不代表未来实际收益")]), _c('p', {
    staticStyle: {
      "display": "block",
      "background": "#eee"
    }
  }, [_vm._v("icp备案：沪ICP备15011207号")]), _c('p', {
    staticStyle: {
      "display": "block",
      "background": "#eee"
    }
  }, [_vm._v("公司名称：上海银砖金融信息服务有限公司")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1045e501", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=6_chunk.js.map?name=534490421620986d3532