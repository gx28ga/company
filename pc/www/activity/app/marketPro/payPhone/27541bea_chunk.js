webpackJsonp([2],{100:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"regbox img-size",attrs:{"data-width":"630","data-paddingLeft":"62","data-fontSize":"30"}},[s("p",{staticClass:"img-size",attrs:{"data-lineHeight":"148"}},[t._v("当前账户："+t._s(t.phone))]),t._v(" "),s("div",{staticClass:"tian img-size",attrs:{"data-height":"56","data-marginTop":"30"}},[s("span",{staticClass:"text ",attrs:{"data-width":"220"}},[t._v("图形验证码：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.imgCode,expression:"imgCode"}],ref:"imgCode",staticClass:"img-size",attrs:{type:"text","data-width":"270","data-lineHeight":"55",placeholder:"请输入图片验证码"},domProps:{value:t.imgCode},on:{blur:t.imgCodeBlurFun,input:function(e){e.target.composing||(t.imgCode=e.target.value)}}}),t._v(" "),s("img",{staticClass:"img-size",staticStyle:{display:"block",float:"right"},attrs:{"data-width":"136","data-height":"60","data-borderRadius":"14","data-marginTop":"-16",src:"/login/validateCode.do",alt:""},on:{click:function(e){t.changeIMG()}}})]),t._v(" "),s("p",{staticClass:"error img-size",attrs:{"data-fontSize":"26"}},[t._v(t._s(t.imgCodeErr))]),t._v(" "),s("div",{staticClass:"tian img-size",attrs:{"data-height":"56","data-marginTop":"30"}},[s("span",{staticClass:"text "},[t._v("验证码：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"msg",staticClass:"img-size",attrs:{type:"text","data-width":"360","data-lineHeight":"55",placeholder:"请输入短信验证码"},domProps:{value:t.msg},on:{input:[function(e){e.target.composing||(t.msg=e.target.value)},t.msgInFun],blur:t.msgBlurFun}}),t._v(" "),s("span",{staticClass:"yzd img-size",attrs:{"data-fontSize":"24"},on:{click:t.sendCode}},[t._v("获取验证码")])]),t._v(" "),s("p",{staticClass:"error img-size",attrs:{"data-fontSize":"26"}},[t._v(t._s(t.msgErr))]),t._v(" "),s("div",{staticClass:"tian img-size",attrs:{"data-height":"56","data-marginTop":"30"}},[s("span",{staticClass:"text"},[t._v("登录密码：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],ref:"pass",staticClass:"img-size",attrs:{type:"password","data-width":"450","data-lineHeight":"55",placeholder:"密码为6-18位数字与字母组合"},domProps:{value:t.pass},on:{input:[function(e){e.target.composing||(t.pass=e.target.value)},t.passInFun],blur:t.passBlurFun}})]),t._v(" "),s("p",{staticClass:"error img-size",attrs:{"data-fontSize":"26"}},[t._v(t._s(t.passErr))]),t._v(" "),s("div",{staticClass:"img-size",attrs:{"data-marginTop":"30","data-fontSize":"30"}},[s("div",{staticClass:"tjr"},[s("i",{staticClass:"img-size",class:{hide:t.isshowtjr,open:!t.isshowtjr},attrs:{"data-width":"28","data-height":"28","data-marginRight":"10"},on:{click:t.pullTJR}}),s("span",{staticClass:"spantjr"},[t._v("推荐人（选填）")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isshowtjr,expression:"isshowtjr"}],staticClass:"tian img-size",attrs:{"data-height":"56","data-marginTop":"20"}},[s("span",{staticClass:"text img-size",attrs:{"data-width":"220"}},[t._v("推荐人手机号：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.referee,expression:"referee"}],ref:"referee",staticClass:" img-size",attrs:{type:"text","data-lineHeight":"55","data-width":"350","data-paddingLeft":"30",placeholder:"推荐人手机号(可不填)"},domProps:{value:t.referee},on:{input:function(e){e.target.composing||(t.referee=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"refereeErr error img-size",attrs:{"data-marginTop":"8","data-fontSize":"24"}},[t._v(t._s(t.refereeErr))])]),t._v(" "),s("div",{staticClass:"img-size",attrs:{"data-marginTop":"30"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.agree,expression:"agree"}],staticClass:"check img-size",attrs:{"data-fontSize":"32","data-marginTop":"25",type:"checkbox",name:"agree","true-exp":"a","false-exp":"b"},domProps:{checked:Array.isArray(t.agree)?t._i(t.agree,null)>-1:t.agree},on:{change:[function(e){var s=t.agree,a=e.target,r=!!a.checked;if(Array.isArray(s)){var i=t._i(s,null);a.checked?i<0&&(t.agree=s.concat([null])):i>-1&&(t.agree=s.slice(0,i).concat(s.slice(i+1)))}else t.agree=r},t.agreelocked]}}),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"regErr error img-size",staticStyle:{"text-align":"center"},attrs:{"data-marginTop":"8","data-fontSize":"24"}},[t._v(t._s(t.regErr))])]),t._v(" "),s("div",{staticClass:"lqbtn img-size",attrs:{"data-width":"550","data-lineHeight":"90","data-fontSize":"36","data-marginTop":"70"},on:{click:t.submit}},[t._v("立即注册")])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"img-size",attrs:{"data-fontSize":"24"}},[t._v("我已阅读并同意"),s("a",{attrs:{href:"https://www.duorongcf.com/zc"}},[t._v("《注册协议》")]),t._v("和"),s("a",{attrs:{href:"https://www.duorongcf.com/fw"}},[t._v("《投资服务协议》")])])}];a._withStripped=!0;var i={render:a,staticRenderFns:r};e.a=i},21:function(t,e,s){"use strict";function a(t){d||s(63)}Object.defineProperty(e,"__esModule",{value:!0});var r=s(44),i=s.n(r);for(var n in r)["default","default"].indexOf(n)<0&&function(t){s.d(e,t,function(){return r[t]})}(n);var o=s(93),d=!1,c=s(25),g=a,l=c(i.a,o.a,!1,g,"data-v-5ca225ba",null);l.options.__file="src\\page\\register.vue",e.default=l.exports},25:function(t,e){t.exports=function(t,e,s,a,r,i){var n,o=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(n=t,o=t.default);var c="function"==typeof o?o.options:o;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),s&&(c.functional=!0),r&&(c._scopeId=r);var g;if(i?(g=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=g):a&&(g=a),g){var l=c.functional,u=l?c.render:c.beforeCreate;l?(c._injectStyles=g,c.render=function(t,e){return g.call(e),u(t,e)}):c.beforeCreate=u?[].concat(u,g):[g]}return{esModule:n,exports:o,options:c}}},37:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=s(0),r=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{isshowtjr:!1,agree:!0,showref:!1,countdown:60,timeDJS:!0,phone:"",imgCode:"",msg:"",pass:"",referee:"",phoneOK:!1,imgOK:!1,passOK:!1,msgOK:!1,imgCodeErr:"",refereeErr:"",msgErr:"",passErr:"",regErr:""}},mounted:function(){t.setImgSize(),t.getAppInfo(),this.phone=t.localStorage.getItem("phone"),this.imgCodeReg=/^[0-9A-Za-z]{4}$/,this.passReg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/,this.msgReg=/^[0-9]{4}$/},methods:{imgCodeBlurFun:function(){""!=this.imgCode&&(0==this.imgCodeReg.test(this.imgCode)?this.imgCodeErr="图片验证码格式错误":(this.imgCodeErr="",this.imgOK=!0))},msgInFun:function(){1==this.msgReg.test(this.msg)&&(this.msgErr="",this.msgOK=!0)},msgBlurFun:function(){""!=this.msg&&(0==this.msgReg.test(this.msg)?(this.msgErr="验证码格式错误",this.msgOK=!1):(this.msgErr="",this.msgOK=!0))},passInFun:function(){1==this.passReg.test(this.pass)&&(this.passErr="",this.passOK=!0)},passBlurFun:function(){""!=this.pass&&(0==this.passReg.test(this.pass)?(this.passErr="密码必须是6-18位数字和字母的组合",this.passOK=!1):(this.passErr="",this.passOK=!0))},agreelocked:function(){this.agree=this.agree},submit:function(){var e=this,s=this;this.passReg.test(this.pass)?this.agree?this.passOK&&this.imgOK&&this.msgOK?(TDAPP.onEvent("ZCBtn"),t.ajax({url:"/reg",data:{mobilePhone:this.phone,passWord:this.pass,picCode:this.imgCode,smsCode:this.msg,checkbox:this.agree,recommPhone:this.referee,toFrom:t.toFrom},callback:!0}).then(function(a){a.success?(alert(123),TDAPP.onEvent("ZCcg"),s.tongji(s.phone),(0,r.default)("forgetDLpass",{props:{title:"提示",btn:"确认",transition:"rotate3d",showclose:!0,zccg:!0,okCallback:function(){router.replace({path:"billDetail",query:{toFrom:t.toFrom}})}}},"notice")):("1001"==a.errorCode&&(e.regErr="短信验证码为空"),"1002"==a.errorCode&&(e.regErr="短信验证码错误"),"1003"==a.errorCode&&(e.regErr="手机号为空"),"1004"==a.errorCode&&(e.regErr="图片验证码为空"),"1005"==a.errorCode&&(e.regErr="密码格式错误"),"1006"==a.errorCode&&(e.regErr="未勾选注册协议"),"1007"==a.errorCode&&(e.regErr="手机号已注册"),"1008"==a.errorCode&&(e.regErr="推荐人不存在"))})):this.regErr="请输入完整的信息":this.regErr="请勾选注册协议":this.regErr="密码必须是6-18位数字和字母的组合"},changeIMG:function(){void 0!=$("img")[0]&&($("img")[0].src+="?"+(new Date).getTime())},tongji:function(t){!function(e,s){e[s]="function"==typeof e[s]?e[s]:function(){(e[s].c=e[s].c||[]).push(arguments)},_qha("send",{et:31,order:[{id:t,orderType:"1"}]})}(window,"_qha")},sendCode:function(){function e(){if(0==a.countdown)return $(".yzd")[0].style.color="#d72f2f",$(".yzd")[0].innerHTML="获取验证码",clearTimeout(t),a.countdown=60,void(a.timeDJS=!0);a.timeDJS=!1,$(".yzd")[0].style.color="#6a6b6b",$(".yzd")[0].innerHTML="重 发 ("+a.countdown+")",a.countdown--;var t=setTimeout(function(){e()},1e3)}var s=this,a=this;a.timeDJS&&(1==a.imgCodeReg.test(a.imgCode)?(TDAPP.onEvent("ZCYZM"),t.ajax({url:"/sendRegMsg",data:{mobilePhone:a.phone,picCode:a.imgCode,type:1},callback:!0}).then(function(t){t.success?(e(),TDAPP.onEvent("ZCYZMcg"),s.msgErr=""):("1001"==t.errorCode&&(s.msgErr="图片验证码不正确"),"1002"==t.errorCode&&(s.msgErr="当天短信发送超过限制"),"1003"==t.errorCode&&(s.msgErr="短信发送失败"),"8888"==t.errorCode&&(s.msgErr="频繁操作"),"9999"==t.errorCode&&(s.msgErr="表示系统错误"))})):this.msgErr="请填写正确的图片验证码")},pullTJR:function(){this.isshowtjr=!this.isshowtjr}}}}).call(e,s(2))},44:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=s(76),r=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={components:{reg:r.default},mounted:function(){t.setImgSize()}}}).call(e,s(2))},63:function(t,e){},70:function(t,e){},76:function(t,e,s){"use strict";function a(t){d||s(70)}Object.defineProperty(e,"__esModule",{value:!0});var r=s(37),i=s.n(r);for(var n in r)["default","default"].indexOf(n)<0&&function(t){s.d(e,t,function(){return r[t]})}(n);var o=s(100),d=!1,c=s(25),g=a,l=c(i.a,o.a,!1,g,"data-v-d7fd0e2e",null);l.options.__file="src\\html\\reg.vue",e.default=l.exports},93:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"module-scroll"},[t._m(0),t._v(" "),s("reg")],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lang img-size",attrs:{"data-height":"317"}},[s("p",{staticClass:"img-size",attrs:{"data-fontSize":"36","data-paddingTop":"100"}},[t._v("立即注册即可体验"),s("br"),s("span",{staticClass:"img-size",attrs:{"data-fontSize":"42","data-lineHeight":"80"}},[t._v("12%新手高息月标")])])])}];a._withStripped=!0;var i={render:a,staticRenderFns:r};e.a=i}});