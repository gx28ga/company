webpackJsonp([3],{

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(72),
  /* scopeId */
  "data-v-5d29c917",
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\xuanfuNew\\src\\module\\main\\register.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] register.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d29c917", Component.options)
  } else {
    hotAPI.reload("data-v-5d29c917", Component.options)
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

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _about = __webpack_require__(36);

var _about2 = _interopRequireDefault(_about);

var _reg = __webpack_require__(63);

var _reg2 = _interopRequireDefault(_reg);

var _URL = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
		data: function data() {
				return {
						phone: '',
						peonum: 0,
						investCumulative: 0
				};
		},

		components: {
				about: _about2.default,
				reg: _reg2.default
		},
		filters: {
				money: function money(n) {
						return parseFloat(n).toLocaleString();
				}
		},
		mounted: function mounted() {
				T.setImgSize();
				var self = this;
				self.phone = self.$route.query.phone;
				T.ajax({
						url: _URL.regAndInvestCount,
						data: {},
						callback: true,
						success: function success(_data) {
								self.peonum = _data.map.regCount;
								self.investCumulative = _data.map.investCumulative;
						}
				});
		}
}; //
//
//
//
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T, $) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _URL = __webpack_require__(12);

exports.default = {
	data: function data() {
		return {
			items: {},
			agree: true,
			showref: false,
			picCode: '',
			countdown: 60,
			timeDJS: true,
			phone: '',
			imgCode: '',
			msg: '',
			pass: '',
			phoneOK: false,
			imgOK: false
		};
	},

	ready: function ready() {},
	computed: {},
	watch: {
		items: {
			handler: function handler(val, oldval) {},
			deep: true
		}
	},
	mounted: function mounted() {
		T.setImgSize();
		T.getAppInfo();
		this.imgCode = this.$refs.imgCode.value;
		this.msg = this.$refs.msg.value;
		this.pass = this.$refs.pass.value;
	},

	methods: {
		imgCodeBlurFun: function imgCodeBlurFun() {
			//图片验证码失去焦点(?![a-zA-Z]+$)(?![0-9]+$)
			var reg = /^[0-9A-Za-z]{4}$/;
			var imgCode = this.$refs.imgCode.value;
			if (imgCode != '') {
				if (reg.test(imgCode) == false) {
					$('.imgErr')[0].innerHTML = "图片验证码格式错误";
				} else {
					$('.imgErr')[0].innerHTML = "";this.imgOK = true;
				}
			}
		},
		msgInFun: function msgInFun() {
			//短信验证码获取焦点，
			var reg = /^[0-9]{4}$/;
			var msg = this.$refs.msg.value;
			if (reg.test(msg) == true) {
				$('.msgErr')[0].innerHTML = "";
			}
		},
		msgBlurFun: function msgBlurFun() {
			//短信验证码失去焦点，
			var reg = /^[0-9]{4}$/;
			var msg = this.$refs.msg.value;
			if (msg != '') {
				if (reg.test(msg) == false) {
					$('.msgErr')[0].innerHTML = "验证码格式错误";
				} else {
					$('.msgErr')[0].innerHTML = "";
				}
			}
		},
		passInFun: function passInFun() {
			var pass = this.$refs.pass.value;
			var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
			if (reg.test(pass) == true) {
				//
				$('.passErr')[0].innerHTML = "";
			}
		},
		passBlurFun: function passBlurFun() {
			var pass = this.$refs.pass.value;
			var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
			if (pass != '') {
				if (reg.test(pass) == false) {
					//
					$('.passErr')[0].innerHTML = "密码必须是6-18位数字和字母的组合";
				} else {
					$('.passErr')[0].innerHTML = "";
				}
			}
		},
		agreelocked: function agreelocked() {
			this.agree = !this.agree;
		},
		showreff: function showreff() {
			var self = this;
			self.showref = !self.showref;
		},
		submit: function submit() {
			var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
			var userphone = this.$route.query.phone;
			if (reg.test(this.items.pass) == false) {
				$('.regErr')[0].innerHTML = "密码必须是6-18位数字和字母的组合";
			} else if (!this.agree) {
				$('.regErr')[0].innerHTML = "请勾选注册协议";
			} else if (this.$route.query.phone == "" || this.items.pass == "" || this.items.imgCode == "" || this.items.msg == "") {
				$('.regErr')[0].innerHTML = "请输入完整的信息";
			} else {
				T.ajax({
					url: _URL.subReg,
					data: {
						mobilePhone: userphone,
						passWord: this.items.pass,
						picCode: this.items.imgCode,
						smsCode: this.items.msg,
						checkbox: this.agree,
						toFrom: T.toFrom
					},
					callback: true,
					success: function success(_data) {
						if (_data.success) {
							router.replace({
								path: 'regOK',
								query: { phone: userphone, toFrom: T.toFrom }
							});
						} else {
							if (_data.errorCode == '1001') {
								$('.regErr')[0].innerHTML = "短信验证码为空";
							}
							if (_data.errorCode == '1002') {
								$('.regErr')[0].innerHTML = "短信验证码错误";
							}
							if (_data.errorCode == '1003') {
								$('.regErr')[0].innerHTML = "手机号为空";
							}
							if (_data.errorCode == '1004') {
								$('.regErr')[0].innerHTML = "图片验证码为空";
							}
							if (_data.errorCode == '1005') {
								$('.regErr')[0].innerHTML = "密码格式错误";
							}
							if (_data.errorCode == '1006') {
								$('.regErr')[0].innerHTML = "未勾选注册协议";
							}
							if (_data.errorCode == '1007') {
								$('.regErr')[0].innerHTML = "手机号已注册";
							}
							if (_data.errorCode == '1008') {
								$('.regErr')[0].innerHTML = "推荐人不存在";
							}
						}
					}
				});
			}
		},
		changeIMG: function changeIMG(event) {
			if (event != undefined) {
				$('.form img')[0].src += '?' + new Date().getTime();
			} else {
				if ($('.form img')[0] != undefined) {
					$('.form img')[0].src += '?' + new Date().getTime();
				}
			}
		},
		sendCode: function sendCode() {
			var self = this;
			function settime() {
				if (self.countdown == 0) {
					$('.yzd')[0].style.color = '#d72f2f';
					$('.yzd')[0].innerHTML = "获取验证码";
					clearTimeout(times);
					self.countdown = 60;
					self.timeDJS = true;
					return;
				} else {
					self.timeDJS = false;
					$('.yzd')[0].style.color = '#6a6b6b';
					$('.yzd')[0].innerHTML = "重 发 (" + self.countdown + ")";
					self.countdown--;
				}
				var times = setTimeout(function () {
					settime();
				}, 1000);
			}
			if (self.timeDJS) {
				var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
				var reg2 = /^[0-9A-Za-z]{4}$/;
				if (reg.test(self.$route.query.phone) == true && reg2.test(self.items.imgCode) == true) {
					T.ajax({
						url: _URL.sendMsg,
						data: {
							mobilePhone: self.$route.query.phone,
							picCode: self.items.imgCode,
							type: 1
						},
						callback: true,
						success: function success(_data) {
							if (_data.success) {
								settime();
								$('.msgErr')[0].innerHTML = "";
							} else {
								if (_data.errorCode == '1001') {
									$('.msgErr')[0].innerHTML = "图片验证码不正确";
								}
								if (_data.errorCode == '1002') {
									$('.msgErr')[0].innerHTML = "当天短信发送超过限制";
								}
								if (_data.errorCode == '1003') {
									$('.msgErr')[0].innerHTML = "短信发送失败";
								}
								if (_data.errorCode == '8888') {
									$('.msgErr')[0].innerHTML = "频繁操作";
								}
								if (_data.errorCode == '9999') {
									$('.msgErr')[0].innerHTML = "表示系统错误";
								}
							}
						}
					});
				} else {
					$('.msgErr')[0].innerHTML = "请正确填写手机号和图片验证码";
				}
			}
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(3)))

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(60)

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(76),
  /* scopeId */
  "data-v-6b839ff7",
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\xuanfuNew\\src\\module\\reg\\reg.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] reg.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b839ff7", Component.options)
  } else {
    hotAPI.reload("data-v-6b839ff7", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "hl hl1 img-size",
    staticStyle: {
      "height": "auto"
    },
    attrs: {
      "data-paddingTop": "2"
    }
  }, [_c('div', {
    staticClass: "success regi img-size",
    attrs: {
      "data-marginTop": "39",
      "data-lineHeight": "58"
    }
  }, [_c('i', {
    staticClass: "img-size",
    attrs: {
      "data-height": "58",
      "data-width": "58",
      "data-marginLeft": "90",
      "data-marginRight": "17"
    }
  }), _c('span', [_vm._v("存入账户：")]), _c('span', [_vm._v(_vm._s(_vm.phone))])]), _vm._v(" "), _c('div', {
    staticClass: "box2"
  }, [_c('div', {
    staticClass: "register img-size",
    attrs: {
      "data-width": "570",
      "data-marginTop": "30",
      "data-paddingTop": "50",
      "data-paddingBottom": "25",
      "data-borderTopLeftRadius": "30",
      "data-borderTopRightRadius": "30",
      "data-fontSize": "30"
    }
  }, [_c('reg')], 1), _vm._v(" "), _c('div', {
    staticClass: "bottbgg img-size",
    attrs: {
      "data-width": "594",
      "data-height": "130"
    }
  }, [_c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_vm._v("已有"), _c('span', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v(_vm._s(_vm.peonum))]), _vm._v("用户选择多融财富")]), _vm._v(" "), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_vm._v("累计完成投资"), _c('span', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v(_vm._s(_vm._f("money")(_vm.investCumulative)))]), _vm._v("元")])])]), _vm._v(" "), _c('p', {
    staticClass: "notice img-size",
    attrs: {
      "data-lineHeight": "100",
      "data-fontSize": "24"
    }
  }, [_vm._v("操作中如有任何疑问请致联系客服：400-690-8896")])]), _vm._v(" "), _c('about')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bannbox img-size",
    attrs: {
      "data-height": "435"
    }
  }, [_c('div', {
    staticClass: "bga"
  }, [_c('div', {
    staticClass: "bannerc img-size",
    attrs: {
      "data-width": "595",
      "data-height": "395",
      "data-marginLeft": "78",
      "data-marginTop": "20"
    }
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d29c917", module.exports)
  }
}

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form img-size",
    attrs: {
      "data-width": "464"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.items.imgCode),
      expression: "items.imgCode"
    }],
    ref: "imgCode",
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "32",
      "data-paddingLeft": "22",
      "data-width": "258",
      "data-height": "70",
      "type": "text",
      "placeholder": "请输入图片验证码"
    },
    domProps: {
      "value": (_vm.items.imgCode)
    },
    on: {
      "blur": _vm.imgCodeBlurFun,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.items.imgCode = $event.target.value
      }
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "img-size",
    staticStyle: {
      "display": "block",
      "float": "right"
    },
    attrs: {
      "data-width": "163",
      "data-height": "70",
      "src": "/login/validateCode.do",
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.changeIMG(_vm.event)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "imgErr error img-size",
    attrs: {
      "data-marginTop": "8",
      "data-fontSize": "24"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.items.msg),
      expression: "items.msg"
    }],
    ref: "msg",
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "32",
      "data-paddingLeft": "22",
      "data-marginTop": "25",
      "data-width": "258",
      "data-height": "70",
      "type": "text",
      "placeholder": "请输入短信验证码"
    },
    domProps: {
      "value": (_vm.items.msg)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.items.msg = $event.target.value
      }, _vm.msgInFun],
      "blur": _vm.msgBlurFun
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "yzd again2 img-size",
    attrs: {
      "data-fontSize": "24",
      "data-width": "163",
      "data-lineHeight": "70",
      "data-marginTop": "26",
      "data-marginLeft": "10"
    },
    on: {
      "click": function($event) {
        _vm.sendCode(_vm.obj)
      }
    }
  }, [_vm._v("获取验证码")]), _vm._v(" "), _c('div', {
    staticClass: "msgErr error img-size",
    attrs: {
      "data-marginTop": "8",
      "data-fontSize": "24"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.items.pass),
      expression: "items.pass"
    }],
    ref: "pass",
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "32",
      "data-paddingLeft": "22",
      "data-marginTop": "25",
      "data-width": "438",
      "data-height": "70",
      "type": "password",
      "placeholder": "密码建议6-18位数字、字母组合"
    },
    domProps: {
      "value": (_vm.items.pass)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.items.pass = $event.target.value
      }, _vm.passInFun],
      "blur": _vm.passBlurFun
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "passErr error img-size",
    attrs: {
      "data-marginTop": "8",
      "data-fontSize": "24"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.agree),
      expression: "agree"
    }],
    staticClass: "check tjr img-size",
    attrs: {
      "data-fontSize": "32",
      "data-marginTop": "25",
      "type": "checkbox",
      "name": "agree",
      "true-exp": "a",
      "false-exp": "b"
    },
    domProps: {
      "checked": Array.isArray(_vm.agree) ? _vm._i(_vm.agree, null) > -1 : (_vm.agree)
    },
    on: {
      "change": _vm.agreelocked,
      "__c": function($event) {
        var $$a = _vm.agree,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.agree = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.agree = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.agree = $$c
        }
      }
    }
  }), _vm._v("我已阅读并同意"), _c('a', {
    attrs: {
      "href": "https://www.duorongcf.com/zc"
    }
  }, [_vm._v("《注册协议》")]), _vm._v(" "), _c('div', {
    staticClass: "regErr error img-size",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "data-marginTop": "8",
      "data-fontSize": "24"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "regbtn img-size",
    attrs: {
      "data-width": "460",
      "data-height": "70",
      "data-lineHeight": "70",
      "data-marginTop": "25",
      "data-fontSize": "32"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("下一步")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b839ff7", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=3_chunk.js.map?name=aab64f2477fe794447cf