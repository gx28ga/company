webpackJsonp([6],{20:function(t,a,e){"use strict";function n(t){d||e(60)}Object.defineProperty(a,"__esModule",{value:!0});var i=e(43),s=e.n(i);for(var o in i)["default","default"].indexOf(o)<0&&function(t){e.d(a,t,function(){return i[t]})}(o);var r=e(88),d=!1,l=e(25),u=n,c=l(s.a,r.a,!1,u,"data-v-4248d3be",null);c.options.__file="src\\page\\recharge.vue",a.default=c.exports},25:function(t,a){t.exports=function(t,a,e,n,i,s){var o,r=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(o=t,r=t.default);var l="function"==typeof r?r.options:r;a&&(l.render=a.render,l.staticRenderFns=a.staticRenderFns,l._compiled=!0),e&&(l.functional=!0),i&&(l._scopeId=i);var u;if(s?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=u):n&&(u=n),u){var c=l.functional,h=c?l.render:l.beforeCreate;c?(l._injectStyles=u,l.render=function(t,a){return u.call(a),h(t,a)}):l.beforeCreate=h?[].concat(h,u):[u]}return{esModule:o,exports:r,options:l}}},43:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0});var n=e(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n);a.default={data:function(){return{number:"",XEInfo:{dayQuota:"",funds:0,quota:""},bankInfo:{bankNum:"",thumbnail:"",bankMobile:"",bankName:""},bankPhone:"",amount:"",serialNum:"",msgCode:"",countdown:60,timeDJS:!0,getText:"获取验证码",djs:!0,phoneOK:!1,bankPhonePlace:"",chufaChangePhone:!1,GHTPHONE:""}},mounted:function(){t.setImgSize(),this.getInfo(),null!=t.localStorage.getItem("amount")?(this.amount=t.localStorage.getItem("amount"),this.amountDian()):this.amount=this.amount,setTimeout(function(){$(".TS").addClass("yin")},3e3)},filters:{currency:function(t){var a="",e=0;t=(t||0).toString();for(var n=t.length-1;n>=0;n--)e++,a=t.charAt(n)+a,e%3||0==n||(a=","+a);return a}},methods:{getInfo:function(){var a=this;t.ajax({url:"/withdrawals",data:{time:new Date},callback:!0}).then(function(t){var e=/^(\d{3})\d{4}(\d{4})$/;a.bankInfo=t.map,a.bankPhonePlace=a.bankInfo.bankMobile.replace(e,"$1****$2"),a.GHTPHONE=a.bankInfo.bankMobile,a.bankPhonePlaceBlur()}),t.ajax({url:"/recharge",data:{time:new Date},callback:!0}).then(function(t){a.XEInfo=t.map})},chanphone:function(){this.chufaChangePhone=!0,this.GHTPHONE=this.bankPhone},phoneInput:function(){/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.bankPhone)?(this.phoneOK=!0,this.GHTPHONE=this.bankPhone):this.phoneOK=!1},phoneBlur:function(){/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.bankPhone)?(this.phoneOK=!0,this.GHTPHONE=this.bankPhone):this.phoneOK=!1},bankPhonePlaceBlur:function(){/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.bankInfo.bankMobile)?this.phoneOK=!0:this.phoneOK=!1},amountDian:function(){1==/^[1-9]\d*00$/.test(this.amount)?this.amountOK=!0:this.amountOK=!1},getYZM:function(){function a(){if(0==n.countdown)return n.getText="获取验证码",n.djs=!0,clearTimeout(t),n.countdown=60,void(n.timeDJS=!0);n.timeDJS=!1,n.djs=!1,n.getText="重 发 ("+n.countdown+")",n.countdown--;var t=setTimeout(function(){a()},1e3)}var e=this,n=this;if(n.timeDJS){1==this.phoneOK?1==this.amountOK&&""!=this.amount?t.ajax({url:"/v3/pc/crush/send-sms.do",data:{amount:this.amount,mobilePhone:this.GHTPHONE},callback:!0}).then(function(t){t.success?(a(),e.serialNum=t.map.serialNum):(0,i.default)("yzmerr",{props:{title:"提示",msg:t.errorMsg,btn:"我知道了",transition:"rotate3d",showclose:!1}},"notice")}):(0,i.default)("amountErr",{props:{title:"提示",msg:"充值金额必须为100的整数倍",btn:"我知道了",transition:"rotate3d",showclose:!1}},"notice"):(0,i.default)("getmm",{props:{title:"提示",msg:"请填写正确的手机号",btn:"我知道了",transition:"rotate3d",showclose:!1}},"notice")}},sublime:function(){var a=this;1==this.amountOK&&1==this.phoneOK&&""!=this.serialNum?(TDAPP.onEvent("LJCZBtn"),t.ajax({url:"/v3/pc/crush/pay.do",data:{mobilePhone:this.GHTPHONE,captcha:this.msgCode,serialNum:this.serialNum},callback:!0}).then(function(e){if(e.success){var n=a.XEInfo.funds+parseInt(a.amount);TDAPP.onEvent("CZcg"),(0,i.default)("yzm",{props:{title:"充值结果",msg:"您成功充值"+a.amount+"元，现账户余额"+n+"元",btn:"立即投资",transition:"rotate3d",showclose:!0,okCallback:function(){router.replace({path:"billDetail",query:{toFrom:t.toFrom}})}}},"notice")}else(0,i.default)("yzm",{props:{title:"提示",msg:e.errorMsg,btn:"我知道了",transition:"rotate3d",showclose:!1}},"notice")})):(0,i.default)("yzm",{props:{title:"提示",msg:"请检查信息是否正确",btn:"我知道了",transition:"rotate3d",showclose:!1}},"notice")},showTS:function(){$(".TS").removeClass("yin"),setTimeout(function(){$(".TS").addClass("yin")},3e3)},hideTS:function(){this.isshowTS=!1}}}}).call(a,e(2))},60:function(t,a){},88:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"module-scroll"},[t._m(0),t._v(" "),e("div",{staticClass:"bankbox img-size",attrs:{"data-height":"88","data-paddingTop":"46","data-paddingBottom":"46","data-marginBottom":"20","data-paddingLeft":"40","data-fontSize":"26"}},[e("img",{staticClass:"img-size",attrs:{"data-width":"88","data-height":"88","data-marginRight":"33",src:t.bankInfo.thumbnail,alt:""}}),t._v(" "),e("span",{staticClass:"img-size",attrs:{"data-width":"200"}},[e("i",{staticClass:"img-size",attrs:{"data-fontSize":"30"}},[t._v(t._s(t.bankInfo.bankName))]),e("br"),t._v("尾号"+t._s(t.bankInfo.bankNum))]),t._v(" "),e("i",{staticClass:"jin img-size",attrs:{"data-width":"40","data-height":"31","data-marginTop":"26","data-marginLeft":"30","data-marginRight":"30"}}),t._v(" "),e("i",{staticClass:"huarui img-size",attrs:{"data-width":"88","data-marginRight":"33","data-height":"88"}}),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"bill-info img-size",attrs:{"data-paddingLeft":"32","data-paddingRight":"32","data-paddingTop":"10","data-fontSize":"30"}},[e("div",{staticClass:"pull img-size",staticStyle:{position:"relative"},attrs:{"data-lineHeight":"66","data-marginTop":"16"}},[e("span",{staticClass:"img-size",attrs:{"data-width":"250"}},[t._v("手机号码：")]),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:0==t.chufaChangePhone,expression:"chufaChangePhone == false"},{name:"model",rawName:"v-model",value:t.bankPhonePlace,expression:"bankPhonePlace"}],attrs:{type:"tel"},domProps:{value:t.bankPhonePlace},on:{blur:t.bankPhonePlaceBlur,input:[function(a){a.target.composing||(t.bankPhonePlace=a.target.value)},t.chanphone]}}),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:1==t.chufaChangePhone,expression:"chufaChangePhone == true"},{name:"model",rawName:"v-model",value:t.bankPhone,expression:"bankPhone"}],staticClass:"img-size",attrs:{"data-lineHeight":"55",type:"tel",maxlength:"11",minlength:"11"},domProps:{value:t.bankPhone},on:{blur:t.phoneBlur,input:[function(a){a.target.composing||(t.bankPhone=a.target.value)},t.phoneInput]}}),t._v(" "),e("i",{staticClass:"ts img-size",attrs:{"data-width":"25","data-height":"25","data-right":"48","data-top":"20"},on:{click:t.showTS}}),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"pull img-size",attrs:{"data-lineHeight":"66","data-marginTop":"16"}},[e("span",{staticClass:"img-size",attrs:{"data-width":"250"}},[t._v("充值金额（元）：")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"img-size",attrs:{type:"number","data-lineHeight":"55",placeholder:"请输入充值金额"},domProps:{value:t.amount},on:{blur:t.amountDian,input:function(a){a.target.composing||(t.amount=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"pull2 img-size",attrs:{"data-lineHeight":"66","data-marginTop":"16"}},[e("span",{staticClass:"img-size",attrs:{"data-width":"250"}},[t._v("验证码：")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.msgCode,expression:"msgCode"}],staticClass:"img-size",attrs:{type:"text",placeholder:"输入短信验证码","data-width":"290","data-lineHeight":"55"},domProps:{value:t.msgCode},on:{input:function(a){a.target.composing||(t.msgCode=a.target.value)}}}),t._v(" "),e("span",{staticClass:"yzm img-size",attrs:{"data-fontSize":"24"},on:{click:t.getYZM}},[e("i",{directives:[{name:"show",rawName:"v-show",value:t.djs,expression:"djs"}]},[t._v(t._s(t.getText))]),e("i",{directives:[{name:"show",rawName:"v-show",value:!t.djs,expression:"!djs"}],staticStyle:{color:"#333"}},[t._v(t._s(t.getText))])])])]),t._v(" "),e("p",{staticClass:"yue img-size",attrs:{"data-paddingLeft":"30","data-paddingTop":"30"}},[t._v("可用余额："+t._s(t.XEInfo.funds)+"元")]),t._v(" "),e("div",{staticClass:"deng img-size",attrs:{"data-height":"50","data-marginTop":"10"}}),t._v(" "),e("div",{staticClass:"img-size",attrs:{"data-fontSize":"24","data-paddingLeft":"32","data-paddingTop":"10","data-lineHeight":"40"}},[e("ul",[t._m(3),t._v(" "),e("li",[t._v("· 银行充值单笔限额"),e("span",[t._v(t._s(t._f("currency")(t.XEInfo.quota)))]),t._v("元")]),t._v(" "),e("li",[t._v("· 银行充值单日限额"),e("span",[t._v(t._s(t._f("currency")(t.XEInfo.dayQuota)))]),t._v("元")]),t._v(" "),t._m(4)])]),t._v(" "),e("div",{staticClass:"sub-info img-size",attrs:{"data-width":"550","data-lineHeight":"90","data-fontSize":"36","data-marginTop":"50"},on:{click:t.sublime}},[t._v("\n\t\t    立即充值\n\t    ")]),t._v(" "),t._m(5)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bill-top img-size",attrs:{"data-paddingLeft":"36","data-paddingRight":"36","data-height":"180","data-paddingTop":"20","data-fontSize":"24"}},[e("p",[t._v("恭喜您认证成功！")]),t._v(" "),e("p",[t._v("离体验新手宝只有一步之遥")]),t._v(" "),e("div",{staticClass:"jindu img-size",attrs:{"data-width":"600","data-height":"49","data-marginTop":"20"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("i",{staticClass:"img-size",attrs:{"data-fontSize":"30"}},[t._v("华瑞银行")]),e("br"),t._v("资金存管户")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"TS img-size",attrs:{"data-top":"-50","data-right":"0","data-fontSize":"20","data-lineHeight":"36","data-paddingLeft":"8","data-paddingRight":"8"}},[e("span",[t._v("银行预留手机号不一致可修改")]),e("i",{staticClass:"jian img-size",attrs:{"data-width":"40","data-height":"28","data-right":"50"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[t._v("· 充值金额最少为"),e("span",[t._v("3")]),t._v("元")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[t._v("· 如有疑问请致电"),e("span",[t._v("400-690-8896")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dun img-size",attrs:{"data-fontSize":"24","data-marginTop":"60"}},[e("i",{staticClass:"img-size",attrs:{"data-width":"32","data-height":"38"}}),t._v(" "),e("span",[t._v("您的资金将由华瑞银行提供存管服务，敬请放心！")])])}];n._withStripped=!0;var s={render:n,staticRenderFns:i};a.a=s}});