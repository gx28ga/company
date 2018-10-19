webpackJsonp([3],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(31)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\enroll\\src\\earn\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ba1b551", Component.options)
  } else {
    hotAPI.reload("data-v-6ba1b551", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
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
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var http = '';
module.exports = {
    userIsNew: http + '/existMobilePhone', //判断用户是否已注册
    sendMsg: http + '/sendRegMsg', //获取短息验证码
    subReg: http + '/reg' //注册
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T, $) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _URL = __webpack_require__(24);

var _reg = __webpack_require__(34);

var _reg2 = _interopRequireDefault(_reg);

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

exports.default = {
  data: function data() {
    return {
      hongBao: false
    };
  },

  components: {
    reg: _reg2.default
  },
  mounted: function mounted() {
    T.setImgSize();
    T.getAppInfo();
    $('#app').on('scroll', function () {
      var scrollTop = $('#app').scrollTop();
      if (scrollTop > $('.bottom').offset().top) {
        $('.download-box').show();
        scrollTop = 0;
      } else {
        $('.download-box').hide();
      }
    });
    function show() {
      $('.download-box').hide();
    }
    show();
  },

  methods: {
    openHongBao: function openHongBao() {
      var self = this;
      self.hongBao = true;
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, T) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _URL = __webpack_require__(24);

exports.default = {
	data: function data() {
		return {
			items: {
				phone: ''
			},
			agree: true,
			showref: false,
			userIsNew: false,
			picCode: '',
			countdown: 60,
			timeDJS: true,
			phone: '',
			imgCode: '',
			msg: '',
			pass: '',
			referee: '',
			phoneOK: false,
			imgOK: false
		};
	},

	ready: function ready() {},
	computed: {},
	watch: {
		items: {
			handler: function handler(val, oldval) {
				var wer = this.$refs.phone.value;
				var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
				if (reg.test(wer) == false) {
					//手机号校验提示
					$('.phonErr')[0].innerHTML = "请输入正确格式的手机号";
				} else {
					$('.phonErr')[0].innerHTML = "";
				}
			},
			deep: true
		}
	},
	mounted: function mounted() {
		T.setImgSize();
		T.getAppInfo();
		this.phone = this.$refs.phone.value;
		this.imgCode = this.$refs.imgCode.value;
		this.msg = this.$refs.msg.value;
		this.pass = this.$refs.pass.value;
		this.referee = this.$refs.referee.value;
	},

	methods: {
		phoneInFun: function phoneInFun() {
			var phone = this.$refs.phone.value;
			var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
			if (reg.test(phone) == false) {
				//手机号校验提示
				$('.phonErr')[0].innerHTML = "请输入正确格式的手机号";
			} else {
				$('.phonErr')[0].innerHTML = "";this.phoneOK = true;
			}
		},
		phoneBlurFun: function phoneBlurFun() {
			//失去焦点，调取"检验手机号是否已经注册"接口 
			var phone = this.$refs.phone.value;
			T.ajax({
				url: _URL.userIsNew,
				data: {
					mobilePhone: phone
				},
				callback: true
			}).then(function (data) {
				if (data.success) {
					if (data.map.exists) {
						$('.phonErr')[0].innerHTML = "此号码已经注册";
					}
				} else {
					if (data.errorCode = '9999') {}
				}
			});
		},
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
		refereeInFun: function refereeInFun() {
			var referee = this.$refs.referee.value;
			if (referee.length > 11) {
				$('.refereeErr')[0].innerHTML = "请输入正确格式的推荐人手机号";
			} else {
				$('.refereeErr')[0].innerHTML = "";
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
			var _this = this;

			var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
			if (reg.test(this.items.pass) == false) {
				$('.regErr')[0].innerHTML = "密码必须是6-18位数字和字母的组合";
			} else if (!this.agree) {
				$('.regErr')[0].innerHTML = "请勾选注册协议";
			} else if (this.items.phone == "" || this.items.pass == "" || this.items.imgCode == "" || this.items.msg == "") {
				$('.regErr')[0].innerHTML = "请输入完整的信息";
			} else {
				T.ajax({
					url: _URL.subReg,
					data: {
						mobilePhone: this.items.phone,
						passWord: this.items.pass,
						picCode: this.items.imgCode,
						smsCode: this.items.msg,
						checkbox: this.agree,
						recommPhone: this.items.referee,
						toFrom: T.toFrom
					},
					callback: true
				}).then(function (data) {
					if (data.success) {
						window.location.href = 'http://www.duorongcf.com/activity/app/pullNew/#/regok?phone=' + _this.items.phone;
					} else {
						if (data.errorCode == '1001') {
							$('.regErr')[0].innerHTML = "短信验证码为空";
						}
						if (data.errorCode == '1002') {
							$('.regErr')[0].innerHTML = "短信验证码错误";
						}
						if (data.errorCode == '1003') {
							$('.regErr')[0].innerHTML = "手机号为空";
						}
						if (data.errorCode == '1004') {
							$('.regErr')[0].innerHTML = "图片验证码为空";
						}
						if (data.errorCode == '1005') {
							$('.regErr')[0].innerHTML = "密码格式错误";
						}
						if (data.errorCode == '1006') {
							$('.regErr')[0].innerHTML = "未勾选注册协议";
						}
						if (data.errorCode == '1007') {
							$('.regErr')[0].innerHTML = "手机号已注册";
						}
						if (data.errorCode == '1008') {
							$('.regErr')[0].innerHTML = "推荐人不存在";
						}
					}
				});
			}
		},
		changeIMG: function changeIMG(event) {
			if (event != undefined) {
				$('.img-box img')[0].src += '?' + new Date().getTime();
			} else {
				if ($('.img-box img')[0] != undefined) {
					$('.img-box img')[0].src += '?' + new Date().getTime();
				}
			}
		},
		sendCode: function sendCode() {
			var self = this;
			function settime() {
				if (self.countdown == 0) {
					$('#yzd')[0].style.color = '#004a6c';
					$('#yzd')[0].innerHTML = "获取验证码";
					clearTimeout(times);
					self.countdown = 60;
					self.timeDJS = true;
					return;
				} else {
					self.timeDJS = false;
					$('#yzd')[0].style.color = '#6a6b6b';
					$('#yzd')[0].innerHTML = "重 发 (" + self.countdown + ")";
					self.countdown--;
				}
				var times = setTimeout(function () {
					settime();
				}, 1000);
			}
			if (self.timeDJS) {
				var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
				var reg2 = /^[0-9A-Za-z]{4}$/;
				if (reg.test(self.items.phone) == true && reg2.test(self.items.imgCode) == true) {
					T.ajax({
						url: _URL.sendMsg,
						data: {
							mobilePhone: self.items.phone,
							picCode: self.items.imgCode,
							type: 1
						},
						callback: true
					}).then(function (data) {
						if (data.success) {
							settime();
						} else {
							if (data.errorCode == '1001') {
								$('.msgErr')[0].innerHTML = "图片验证码不正确";
							}
							if (data.errorCode == '1002') {
								$('.msgErr')[0].innerHTML = "当天短信发送超过限制";
							}
							if (data.errorCode == '1003') {
								$('.msgErr')[0].innerHTML = "短信发送失败";
							}
							if (data.errorCode == '8888') {
								$('.msgErr')[0].innerHTML = "频繁操作";
							}
							if (data.errorCode == '9999') {
								$('.msgErr')[0].innerHTML = "表示系统错误";
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(1)))

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */,
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1kAAABjCAMAAABe1jpXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUVEMjBCNjg3MTg5MTFFNkFEQjJFQjQ2OTBCOENBNjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUVEMjBCNjc3MTg5MTFFNkFEQjJFQjQ2OTBCOENBNjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmRpZDo3RjgxQzYwRjg5NzFFNjExOTg1MkQ2MUYyQURCODJERCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RjgxQzYwRjg5NzFFNjExOTg1MkQ2MUYyQURCODJERCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plzn/dkAAAHmUExURfTJcfnYi+61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"

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\products\\pc\\nodejsSever\\static\\activity\\app\\enroll\\src\\earn\\reg.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] reg.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b07bc5a", Component.options)
  } else {
    hotAPI.reload("data-v-2b07bc5a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login img-size",
    attrs: {
      "data-width": "720",
      "data-marginTop": "90",
      "data-marginBottom": "70",
      "data-paddingTop": "50",
      "data-paddingBottom": "40"
    }
  }, [_c('div', {
    staticClass: "img-size mobile"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.items.phone),
      expression: "items.phone"
    }],
    ref: "phone",
    staticClass: "img-size phone",
    attrs: {
      "name": "mobilePhone",
      "type": "text",
      "minlength": "11",
      "maxlength": "11",
      "required": "",
      "data-width": "625",
      "data-height": "105",
      "data-lineHeight": "105",
      "data-marginBottom": "35",
      "placeholder": "请输入手机号"
    },
    domProps: {
      "value": (_vm.items.phone)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.items.phone = $event.target.value
      }, _vm.phoneInFun],
      "blur": _vm.phoneBlurFun
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "phonErr error img-size",
    attrs: {
      "data-marginTop": "8",
      "data-fontSize": "24",
      "data-paddingLeft": "66"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "identify clearfix marT2 img-size",
    attrs: {
      "data-paddingLeft": "40",
      "data-marginBottom": "35"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.items.imgCode),
      expression: "items.imgCode"
    }],
    ref: "imgCode",
    staticClass: "fl img-size",
    attrs: {
      "name": "picCode",
      "ng-model": "login.picCode",
      "data-width": "405",
      "data-height": "105",
      "data-lineHeight": "105",
      "type": "text",
      "required": "",
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
  }), _vm._v(" "), _c('div', {
    staticClass: "img-box img-size",
    attrs: {
      "data-height": "100",
      "data-paddingLeft": "10",
      "data-paddingRight": "10"
    }
  }, [_c('img', {
    staticClass: "img-size",
    attrs: {
      "data-marginLeft": "15",
      "data-height": "100",
      "src": "/login/validateCode.do",
      "alt": ""
    },
    on: {
      "click": function($event) {
        _vm.changeIMG(_vm.event)
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "imgErr error img-size",
    attrs: {
      "data-marginTop": "8",
      "data-fontSize": "24",
      "data-paddingLeft": "66"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "login-msm-box img-size",
    attrs: {
      "data-paddingLeft": "40",
      "data-marginBottom": "35"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.items.msg),
      expression: "items.msg"
    }],
    ref: "msg",
    staticClass: "fl img-size smsCode",
    attrs: {
      "type": "text",
      "data-width": "405",
      "data-height": "105",
      "data-lineHeight": "105",
      "data-marginBottom": "35",
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
    staticClass: "fl msmBtn img-size",
    attrs: {
      "data-width": "200",
      "data-height": "105",
      "data-lineHeight": "105",
      "data-marginBottom": "35",
      "id": "yzd"
    },
    on: {
      "click": function($event) {
        _vm.sendCode(_vm.obj)
      }
    }
  }, [_vm._v("获取验证码")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "msgErr error img-size",
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "data-marginTop": "8",
      "data-fontSize": "24",
      "data-paddingLeft": "66"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "img-size"
  }, [_vm._m(0), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.items.pass),
      expression: "items.pass"
    }],
    ref: "pass",
    staticClass: "img-size",
    attrs: {
      "autocomplete": "off",
      "type": "passWord",
      "placeholder": "密码建议6-18位数字、字母组合",
      "name": "passWord",
      "data-width": "625",
      "data-height": "105",
      "data-lineHeight": "105",
      "data-marginBottom": "35"
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
  })]), _vm._v(" "), _c('div', {
    staticClass: "passErr error img-size",
    attrs: {
      "data-marginTop": "8",
      "data-fontSize": "24",
      "data-paddingLeft": "66"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "login-recomm-box img-size",
    attrs: {
      "data-paddingLeft": "40"
    },
    on: {
      "click": _vm.showreff
    }
  }, [_c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showref == false),
      expression: "showref==false"
    }]
  }, [_vm._v("► 推荐人（选填）")]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showref == true),
      expression: "showref==true"
    }]
  }, [_vm._v("▼ 推荐人（选填）")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showref == true),
      expression: "showref==true"
    }],
    staticClass: "img-size",
    attrs: {
      "data-paddingLeft": "30",
      "data-marginBottom": "35"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.items.referee),
      expression: "items.referee"
    }],
    ref: "referee",
    staticClass: "img-size",
    attrs: {
      "type": "text",
      "ng-model": "login.recommPhone",
      "placeholder": "推荐人手机号（可不填）",
      "ng-disabled": "webFormPath.recommCodes != undefined",
      "data-width": "625",
      "data-height": "105",
      "data-lineHeight": "105"
    },
    domProps: {
      "value": (_vm.items.referee)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.items.referee = $event.target.value
      }, _vm.refereeInFun]
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "xieyi",
    staticStyle: {
      "color": "#fff"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.agree),
      expression: "agree"
    }],
    staticClass: "check tjr img-size",
    staticStyle: {
      "display": "inline-block"
    },
    attrs: {
      "data-marginLeft": "66",
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
    staticStyle: {
      "color": "#9933ff"
    },
    attrs: {
      "href": "https://www.duorongcf.com/zc"
    }
  }, [_vm._v("《注册协议》")])]), _vm._v(" "), _c('div', {
    staticClass: "regErr error img-size",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "data-marginTop": "8",
      "data-fontSize": "24"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "refereeErr error img-size",
    attrs: {
      "data-marginTop": "8",
      "data-fontSize": "24",
      "data-paddingLeft": "66"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "regErr error img-size",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "data-marginTop": "8",
      "data-fontSize": "24"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "fastClick img-size",
    attrs: {
      "data-width": "625",
      "data-height": "105",
      "data-lineHeight": "105"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("立即领取10,000元")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    attrs: {
      "ng-click": "showPassword(passwordText)"
    }
  }, [_c('i', {
    attrs: {
      "ng-class": "{true:'icon icon-eye huang',false:'icon icon-eye'}[passwordText]"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b07bc5a", module.exports)
  }
}

/***/ }),
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "enrollBox img-size",
    attrs: {
      "data-paddingTop": "35"
    }
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.hongBao == false),
      expression: "hongBao==false"
    }],
    staticClass: "hongbaoclose img-size",
    attrs: {
      "data-width": "640",
      "data-height": "530"
    }
  }, [_c('div', {
    staticClass: "openBtn img-size",
    attrs: {
      "data-width": "140",
      "data-height": "140",
      "data-bottom": "35",
      "data-left": "250"
    },
    on: {
      "click": _vm.openHongBao
    }
  })]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.hongBao == false),
      expression: "hongBao ==false"
    }],
    staticClass: "tixian img-size",
    attrs: {
      "data-marginBottom": "40"
    }
  }, [_vm._v("收益可提现")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.hongBao == true),
      expression: "hongBao==true"
    }],
    staticClass: "hongbaoOpen img-size",
    attrs: {
      "data-width": "730",
      "data-height": "414"
    }
  }), _vm._v(" "), _c('reg', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.hongBao == true),
      expression: "hongBao==true"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "bottom img-size",
    attrs: {
      "data-height": "1519"
    }
  }), _vm._v(" "), _vm._m(2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "banner img-size"
  }, [_c('img', {
    staticClass: "img-size bgTitle",
    attrs: {
      "src": __webpack_require__(33),
      "alt": "",
      "data-width": "600",
      "data-height": "75"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "drtext img-size",
    attrs: {
      "data-paddingTop": "50",
      "data-marginBottom": "90"
    }
  }, [_c('p', {
    staticClass: "con img-size",
    attrs: {
      "data-height": "50",
      "data-lineHeight": "50"
    }
  }, [_vm._v("国资委旗下事业单位控股互联网金融平台\n         "), _c('br'), _vm._v("华瑞银行资金存管正式上线!")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bot img-size",
    attrs: {
      "data-height": "100"
    }
  }, [_c('div', {
    staticClass: "line img-size",
    attrs: {
      "data-width": "650",
      "data-top": "20",
      "data-left": "50"
    }
  }, [_c('div', {
    staticClass: "linBox img-size",
    attrs: {
      "data-width": "400",
      "data-height": "2"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "img-size fengxian",
    attrs: {
      "ng-if": "isText",
      "data-marginTop": "-20"
    }
  }, [_c('p', {
    staticClass: "img-size",
    attrs: {
      "data-width": "300",
      "data-paddingLeft": "50",
      "data-paddingRight": "50",
      "data-top": "15"
    }
  }, [_vm._v("预期收益不等于实际收益")])]), _vm._v(" "), _c('p', [_vm._v("投资有风险 理财需谨慎")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6ba1b551", module.exports)
  }
}

/***/ })
]);
//# sourceMappingURL=3_chunk.js.map?name=5a5032fa06dabf22c744