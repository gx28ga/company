webpackJsonp([1],{17:function(t,a,e){"use strict";function i(t){d||e(58)}Object.defineProperty(a,"__esModule",{value:!0});var s=e(40),n=e.n(s);for(var r in s)["default","default"].indexOf(r)<0&&function(t){e.d(a,t,function(){return s[t]})}(r);var o=e(86),d=!1,l=e(25),v=i,c=l(n.a,o.a,!1,v,"data-v-3810a66a",null);c.options.__file="src\\page\\index.vue",a.default=c.exports},25:function(t,a){t.exports=function(t,a,e,i,s,n){var r,o=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(r=t,o=t.default);var l="function"==typeof o?o.options:o;a&&(l.render=a.render,l.staticRenderFns=a.staticRenderFns,l._compiled=!0),e&&(l.functional=!0),s&&(l._scopeId=s);var v;if(n?(v=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=v):i&&(v=i),v){var c=l.functional,u=c?l.render:l.beforeCreate;c?(l._injectStyles=v,l.render=function(t,a){return v.call(a),u(t,a)}):l.beforeCreate=u?[].concat(u,v):[v]}return{esModule:r,exports:o,options:l}}},34:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default={mounted:function(){t.setImgSize()}}}).call(a,e(2))},35:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default={mounted:function(){t.setImgSize()},props:{investCount:Number,investCumulative:Number},filters:{money:function(t){return parseFloat(t).toLocaleString()}}}}).call(a,e(2))},40:function(t,a,e){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var s=e(0),n=(i(s),e(71)),r=i(n),o=e(72),d=i(o);a.default={data:function(){return{registerList:null,strs:"",peonum:0,items:{phone:""},phone:"",lqtan:!1,lqerror:"",phoneOK:!1,investCumulative:"",investCount:""}},components:{about:r.default,cp:d.default},mounted:function(){t.setImgSize();var a=this;localStorage.clear("TZJE"),$(".index").on("scroll",function(){var t=$(".index").scrollTop();t>$(".danger").offset().top-200?($(".float").show(),t=0):$(".float").hide()}),function(){t.ajax({url:"/welcome-the-new/invest-rank.do",data:{time:new Date},callback:!0}).then(function(t){a.registerList=t.map.listDrMessage}),t.ajax({url:"/index/regAndInvestCount.do",data:{time:new Date},callback:!0}).then(function(t){a.investCumulative=t.map.investCumulative,a.investCount=t.map.investCount,a.peonum=t.map.regCount,a.strs=a.peonum.split("")}),$(".float").hide()}()},filters:{data:function(t){var a=new Date(t),e=a.getFullYear(),i=a.getMonth()+1,s=a.getDate()<10?"0"+a.getDate():""+a.getDate();return e+"-"+(i<10?"0"+i:""+i)+"-"+s}},methods:{gotoTop:function(){$(".index").scrollTop(300)},phoneInFun:function(){0==/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.$refs.phone.value)?this.lqerror="请填写正确的手机号":(this.lqerror="",this.phoneOK=!0)},investment:function(){var a=this,e=a.$refs.phone.value;0==/^1[3|4|5|7|8][0-9]\d{8}$/.test(e)?a.lqerror="请填写正确的手机号":(TDAPP.onEvent("LJLQBTN"),t.ajax({url:"/existMobilePhone",data:{mobilePhone:e},callback:!0}).then(function(i){i.success&&(i.map.exists?(a.lqerror="",router.replace({path:"login",query:{toFrom:t.toFrom}}),t.localStorage.setItem("phone",e),TDAPP.onEvent("LJLQToLogin")):(a.lqerror="",TDAPP.onEvent("LJLQToReg"),router.replace({path:"register",query:{toFrom:t.toFrom}}),t.localStorage.setItem("phone",e)))}))}}}}).call(a,e(2))},58:function(t,a){},66:function(t,a){},70:function(t,a){},71:function(t,a,e){"use strict";function i(t){d||e(66)}Object.defineProperty(a,"__esModule",{value:!0});var s=e(34),n=e.n(s);for(var r in s)["default","default"].indexOf(r)<0&&function(t){e.d(a,t,function(){return s[t]})}(r);var o=e(94),d=!1,l=e(25),v=i,c=l(n.a,o.a,!1,v,"data-v-ad1477bc",null);c.options.__file="src\\html\\about.vue",a.default=c.exports},72:function(t,a,e){"use strict";function i(t){d||e(70)}Object.defineProperty(a,"__esModule",{value:!0});var s=e(35),n=e.n(s);for(var r in s)["default","default"].indexOf(r)<0&&function(t){e.d(a,t,function(){return s[t]})}(r);var o=e(98),d=!1,l=e(25),v=i,c=l(n.a,o.a,!1,v,"data-v-ff5645b0",null);c.options.__file="src\\html\\cp.vue",a.default=c.exports},86:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"module-scroll index"},[e("div",{staticClass:"banner img-size",attrs:{"data-height":"555"}}),t._v(" "),e("div",{staticClass:"alReg img-size",attrs:{"data-width":"686","data-height":"326","data-marginTop":"-100"}},[t._m(0),t._v(" "),e("div",{staticClass:"wrap img-size",staticStyle:{overflow:"hidden"},attrs:{id:"registerlist","data-width":"560","data-height":"207","data-marginTop":"28"}},[e("ul",{staticClass:"img-size",attrs:{id:"list","data-width":"560","data-fontSize":"20","data-lineHeight":"40"}},t._l(t.registerList,function(a){return e("li",[e("span",{staticStyle:{width:"35%",display:"inline-block"}},[t._v(t._s(a.mobilePhone))]),t._v(" "),e("span",{staticStyle:{width:"42%",display:"inline-block"}},[t._v(t._s(t._f("data")(a.registTime)))]),t._v(" "),e("span",{staticStyle:{width:"19%",display:"inline-block"}},[t._v("已领取")])])}))])]),t._v(" "),e("div",{staticClass:"all img-size",attrs:{"data-fontSize":"28","data-width":"624","data-marginBottom":"20","data-paddingTop":"20","data-paddingBottom":"20"}},[t._v("已有\r\n            "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.strs.length>=1,expression:"strs.length>=1"}],staticClass:"textbg img-size",attrs:{"data-width":"28","data-height":"45"}},[t._v(t._s(t.strs[0]))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.strs.length>=2,expression:"strs.length>=2"}],staticClass:"textbg img-size",attrs:{"data-width":"28","data-height":"45"}},[t._v(t._s(t.strs[1]))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.strs.length>=3,expression:"strs.length>=3"}],staticClass:"textbg img-size",attrs:{"data-width":"28","data-height":"45"}},[t._v(t._s(t.strs[2]))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.strs.length>=4,expression:"strs.length>=4"}],staticClass:"textbg img-size",attrs:{"data-width":"28","data-height":"45"}},[t._v(t._s(t.strs[3]))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.strs.length>=5,expression:"strs.length>=5"}],staticClass:"textbg img-size",attrs:{"data-width":"28","data-height":"45"}},[t._v(t._s(t.strs[4]))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.strs.length>=6,expression:"strs.length>=6"}],staticClass:"textbg img-size",attrs:{"data-width":"28","data-height":"45"}},[t._v(t._s(t.strs[5]))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.strs.length>=7,expression:"strs.length>=7"}],staticClass:"textbg img-size",attrs:{"data-width":"28","data-height":"45"}},[t._v(t._s(t.strs[6]))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.strs.length>=8,expression:"strs.length>=8"}],staticClass:"textbg img-size",attrs:{"data-width":"28","data-height":"45"}},[t._v(t._s(t.strs[7]))]),t._v("\r\n            位用户领取了新手礼包\r\n        ")]),t._v(" "),e("div",{staticClass:"phone"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.items.phone,expression:"items.phone"}],ref:"phone",staticClass:"img-size",attrs:{type:"tel","data-width":"510","data-paddingLeft":"40","data-marginBottom":"10","data-height":"90","data-lineHeight":"85",placeholder:"请输入您的手机号码","data-fontSize":"30",maxlength:"11"},domProps:{value:t.items.phone},on:{input:[function(a){a.target.composing||t.$set(t.items,"phone",a.target.value)},t.phoneInFun]}}),t._v(" "),e("p",{staticClass:"tzgerror img-size",staticStyle:{"text-align":"left"},attrs:{id:"tzerror","data-lineHeight":"38","data-fontSize":"24","data-paddingLeft":"136"}},[t._v(t._s(t.lqerror))]),t._v(" "),e("div",{staticClass:"lqbtn img-size",attrs:{"data-marginTop":"30","data-width":"550","data-lineHeight":"90","data-fontSize":"36"},on:{click:t.investment}},[t._v("立即领取1588元红包")])]),t._v(" "),e("cp",{attrs:{investCumulative:t.investCumulative,investCount:t.investCount}}),t._v(" "),e("about"),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"float img-size",attrs:{"data-height":"105","data-paddingTop":"15"},on:{click:t.gotoTop}},[e("div",{staticClass:"lqbtn img-size",attrs:{"data-width":"550","data-lineHeight":"90","data-fontSize":"36"}},[t._v("立即领取1588元红包")])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title img-size",attrs:{"data-width":"636","data-paddingTop":"42","data-fontSize":"24"}},[e("ul",[e("li",[t._v("手机号")]),t._v(" "),e("li",[t._v("领取时间")]),t._v(" "),e("li",[t._v("新手三重壕礼")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"danger img-size",attrs:{"data-fontSize":"18","data-lineHeight":"30","data-paddingTop":"35","data-paddingBottom":"35","data-marginBottom":"120"}},[e("p",[t._v("市场有风险 投资需谨慎"),e("br"),t._v("平台建议的历史年化收益率仅供参考，不代表未来实际收益")]),t._v(" "),e("p",[t._v("icp备案：沪ICP备15011207号"),e("br"),t._v("公司名称：上海银砖金融信息服务有限公司")])])}];i._withStripped=!0;var n={render:i,staticRenderFns:s};a.a=n},94:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box img-size",attrs:{"data-width":"680","data-borderRadius":"18","data-paddingTop":"40","data-marginTop":"42"}},[e("div",{staticClass:"titlebg img-size",attrs:{"data-width":"247","data-height":"50","data-fontSize":"36","data-lineHeight":"50","data-marginBottom":"58"}},[t._v("关于多融")]),t._v(" "),e("div",{staticClass:"about img-size",attrs:{"data-marginBottom":"58"}},[e("div",{staticClass:"about-icon icon1 img-size",attrs:{"data-height":"92","data-width":"92","data-marginRight":"35","data-marginLeft":"45"}}),t._v(" "),e("div",{staticClass:"ab-right img-size",attrs:{"data-paddingTop":"6","data-fontSize":"24"}},[e("p",{staticClass:"img-size",attrs:{"data-fontSize":"30"}},[t._v("大型国企中商沪深99%控股")]),t._v(" "),e("p",[t._v("国资委旗下-沪深控股战略控股、商业网点建设开发中心旗下")])])]),t._v(" "),e("div",{staticClass:"about img-size",attrs:{"data-marginBottom":"58"}},[e("div",{staticClass:"about-icon icon2 img-size",attrs:{"data-height":"92","data-width":"92","data-marginRight":"35","data-marginLeft":"45"}}),t._v(" "),e("div",{staticClass:"ab-right img-size",attrs:{"data-paddingTop":"6","data-fontSize":"24"}},[e("p",{staticClass:"img-size",attrs:{"data-fontSize":"30"}},[t._v("合规运营")]),t._v(" "),e("p",[t._v("银行资金存管、专业律所提供合规支持")])])]),t._v(" "),e("div",{staticClass:"about img-size",attrs:{"data-marginBottom":"58"}},[e("div",{staticClass:"about-icon icon3 img-size",attrs:{"data-height":"92","data-width":"92","data-marginRight":"35","data-marginLeft":"45"}}),t._v(" "),e("div",{staticClass:"ab-right img-size",attrs:{"data-paddingTop":"6","data-fontSize":"24"}},[e("p",{staticClass:"img-size",attrs:{"data-fontSize":"30"}},[t._v("严格风控")]),t._v(" "),e("p",[t._v("银行级别风控、上线503天、0逾期0坏账")])])])])}];i._withStripped=!0;var n={render:i,staticRenderFns:s};a.a=n},98:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"tixing img-size",attrs:{"data-width":"657","data-height":"24","data-marginTop":"23"}}),t._v(" "),e("div",{staticClass:"box img-size",attrs:{"data-width":"680","data-borderRadius":"18","data-paddingTop":"40"}},[e("div",{staticClass:"titlebg img-size",attrs:{"data-width":"247","data-height":"50","data-fontSize":"36","data-lineHeight":"50"}},[t._v("热销产品")]),t._v(" "),e("div",{staticClass:"cpbox img-size",attrs:{"data-width":"651","data-height":"663"}}),t._v(" "),e("div",{staticClass:"investement img-size",attrs:{"data-fontSize":"24","data-lineHeight":"85"}},[t._v("用户累计投资"),e("span",[t._v(t._s(t._f("money")(t.investCumulative)))]),t._v("元，"),e("span",[t._v(t._s(t._f("money")(t.investCount)))]),t._v("投资用户")])])])},s=[];i._withStripped=!0;var n={render:i,staticRenderFns:s};a.a=n}});