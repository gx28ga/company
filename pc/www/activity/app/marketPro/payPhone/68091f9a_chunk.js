webpackJsonp([7],{19:function(t,e,a){"use strict";function n(t){d||a(67)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(42),r=a.n(s);for(var i in s)["default","default"].indexOf(i)<0&&function(t){a.d(e,t,function(){return s[t]})}(i);var o=a(97),d=!1,l=a(25),c=n,u=l(r.a,o.a,!1,c,"data-v-a4c1603c",null);u.options.__file="src\\page\\login.vue",e.default=u.exports},25:function(t,e){t.exports=function(t,e,a,n,s,r){var i,o=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(i=t,o=t.default);var l="function"==typeof o?o.options:o;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),a&&(l.functional=!0),s&&(l._scopeId=s);var c;if(r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,f=u?l.render:l.beforeCreate;u?(l._injectStyles=c,l.render=function(t,e){return c.call(e),f(t,e)}):l.beforeCreate=f?[].concat(f,c):[c]}return{esModule:i,exports:o,options:l}}},42:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={data:function(){return{phone:"",dlPass:"",dlpasserror:"",canDL:!1,reg:null}},mounted:function(){t.setImgSize(),this.phone=t.localStorage.getItem("phone"),this.reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/},methods:{dlPassInFun:function(){var t=this;0==t.reg.test(t.dlPass)?t.dlpasserror="密码为6-18位数字和字母组合":t.dlpasserror=""},tologin:function(){var e=this;1==e.reg.test(e.dlPass)?(TDAPP.onEvent("LJDL"),t.ajax({url:"/doLogin",data:{mobilePhone:e.phone,passWord:e.dlPass},callback:!0}).then(function(e){t.ajax({url:"/v1/current/product/info.do",data:{time:new Date},callback:!0}).then(function(e){TDAPP.onEvent("DLcg"),1==e.map.currentInfo.isInvested||1==e.map.currentInfo.isPurchased?(router.replace({path:"sorry",query:{toFrom:t.toFrom}}),TDAPP.onEvent("DLcgSorry")):(router.replace({path:"billDetail",query:{toFrom:t.toFrom}}),TDAPP.onEvent("DLcgTZ"))})})):e.dlpasserror="密码为6-18位数字和字母组合"},forgetDLPass:function(){TDAPP.onEvent("forgetPassWord"),(0,s.default)("forgetDLpass",{props:{title:"提示",msg:"请登录多融app找回密码",btn:"去下载",transition:"rotate3d",showclose:!0,showDown:!0}},"notice")}}}}).call(e,a(2))},67:function(t,e){},97:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module-scroll"},[t._m(0),t._v(" "),a("div",{staticClass:"regbox img-size",attrs:{"data-width":"630","data-paddingLeft":"62","data-fontSize":"30"}},[a("p",{staticClass:"img-size",attrs:{"data-lineHeight":"148"}},[t._v("当前账户："+t._s(t.phone))]),t._v(" "),a("div",{staticClass:"tian img-size",attrs:{"data-lineHeight":"56","data-marginTop":"30"}},[a("span",[t._v("登录密码：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dlPass,expression:"dlPass"}],ref:"dlPass",staticClass:"img-size",attrs:{type:"password","data-lineHeight":"55","data-paddingLeft":"30",placeholder:"请输入登录密码"},domProps:{value:t.dlPass},on:{input:[function(e){e.target.composing||(t.dlPass=e.target.value)},t.dlPassInFun]}})]),t._v(" "),a("p",{staticClass:"error img-size",attrs:{"data-fontSize":"24","data-lineHeight":"46"}},[t._v(t._s(t.dlpasserror))]),t._v(" "),a("div",{staticClass:"forgetmm img-size",attrs:{"data-fontSize":"24","data-lineHeight":"120"},on:{click:t.forgetDLPass}},[t._v("忘记密码")]),t._v(" "),a("div",{staticClass:"lqbtn img-size",attrs:{"data-width":"550","data-lineHeight":"90","data-fontSize":"36","data-marginTop":"50"},on:{click:t.tologin}},[t._v("立即登录")])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lang img-size",attrs:{"data-height":"317"}},[a("p",{staticClass:"img-size",attrs:{"data-fontSize":"36","data-paddingTop":"68"}},[a("span",[t._v("1588元新手红包")]),a("br"),t._v("已安全抵达您的多融理财账户"),a("br"),a("span",{staticClass:"lan img-size",attrs:{"data-fontSize":"30"}},[t._v("可于投资产品（除新手标外）时使用")])])])}];n._withStripped=!0;var r={render:n,staticRenderFns:s};e.a=r}});