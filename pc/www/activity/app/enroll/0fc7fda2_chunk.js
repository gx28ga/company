webpackJsonp([5],{18:function(t,a){t.exports=function(t,a,e,s,i,n){var d,o=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(d=t,o=t.default);var l="function"==typeof o?o.options:o;a&&(l.render=a.render,l.staticRenderFns=a.staticRenderFns,l._compiled=!0),e&&(l.functional=!0),i&&(l._scopeId=i);var c;if(n?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=c):s&&(c=s),c){var u=l.functional,p=u?l.render:l.beforeCreate;u?(l._injectStyles=c,l.render=function(t,a){return c.call(a),p(t,a)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:d,exports:o,options:l}}},24:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default={mounted:function(){t.setImgSize()},props:{transition:String},methods:{close:function(){this.$refs.pop.closePop(),this.okCallback&&this.okCallback.call(this)}}}}).call(a,e(1))},27:function(t,a){throw new Error('Module build failed: ModuleBuildError: Module build failed: \r\n    .explain{\r\n        ^\r\n      Invalid CSS after ".explain{": expected "}", was "{"\r\n      in E:\\work\\drweb\\pc\\nodejsSever\\static\\activity\\app\\enroll\\src\\pop\\explain.vue (line 3, column 10)\n    at runLoaders (C:\\Users\\kaifa\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\NormalModule.js:192:19)\n    at C:\\Users\\kaifa\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at C:\\Users\\kaifa\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:230:18\n    at context.callback (C:\\Users\\kaifa\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (E:\\node_modules\\sass-loader\\lib\\loader.js:55:13)\n    at Object.<anonymous> (E:\\node_modules\\async\\dist\\async.js:2244:31)\n    at Object.callback (E:\\node_modules\\async\\dist\\async.js:906:16)\n    at options.error (E:\\node_modules\\node-sass\\lib\\index.js:294:32)')},33:function(t,a,e){"use strict";function s(t){r||e(27)}Object.defineProperty(a,"__esModule",{value:!0});var i=e(24),n=e.n(i);for(var d in i)["default","default"].indexOf(d)<0&&function(t){e.d(a,t,function(){return i[t]})}(d);var o=e(35),r=!1,l=e(18),c=s,u=l(n.a,o.a,!1,c,null,null);u.options.__file="src\\pop\\explain.vue",a.default=u.exports},35:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("pop",{ref:"pop",attrs:{transition:t.transition}},[e("div",{staticClass:"explain img-size",attrs:{slot:"main","data-width":"610","data-height":"700","data-paddingLeft":"20"},slot:"main"},[e("div",{staticClass:"close img-size",attrs:{"data-width":"84","data-height":"84","data-lineHeight":"84"},on:{click:t.close}},[t._v("x")]),t._v(" "),e("div",{staticClass:"content img-size",attrs:{"data-marginTop":"84","data-marginBottom":"50"}},[e("dl",{staticClass:"img-size",attrs:{"data-width":"600"}},[e("dt",{staticClass:"img-size",attrs:{"data-width":"30"}},[t._v("①")]),t._v(" "),e("dd",{staticClass:"img-size",attrs:{"data-width":"540","data-paddingLeft":"10","data-paddingBottom":"20"}},[t._v("佣金奖励为现金奖励，可提现到账户余额。"),e("br"),t._v("佣金奖励每日发放，无上限。")])]),t._v(" "),e("dl",{staticClass:"img-size",attrs:{"data-width":"600"}},[e("dt",{staticClass:"img-size",attrs:{"data-width":"30"}},[t._v("②")]),t._v(" "),e("dd",{staticClass:"img-size",attrs:{"data-width":"540","data-paddingLeft":"10","data-paddingBottom":"20"}},[t._v("佣金奖励获取条件: "),e("br"),t._v("·邀请人自身账户【待收本金总额】不低于5000元（成立日期开始算，收益中的产品）"),e("br"),t._v("\r\n                ·所有被邀请人账户【待收本金总额】之和不为零")])]),t._v(" "),e("dl",{staticClass:"img-size",attrs:{"data-width":"600"}},[e("dt",{staticClass:"img-size",attrs:{"data-width":"30"}},[t._v("③")]),t._v(" "),e("dd",{staticClass:"img-size",attrs:{"data-width":"540","data-paddingLeft":"10","data-paddingBottom":"20"}},[t._v("佣金奖励计算公式:每日佣金=佣金利率*好友总待收/365")])]),t._v(" "),e("dl",{staticClass:"img-size",attrs:{"data-width":"600"}},[e("dt",{staticClass:"img-size",attrs:{"data-width":"30"}},[t._v("④")]),t._v(" "),e("dd",{staticClass:"img-size",attrs:{"data-width":"540","data-paddingLeft":"10","data-paddingBottom":"20"}},[t._v("佣金奖励每日23:59按当天待收情况计算，并于次日1:00统一发放到邀请好友人的多融账户.如当日不满足获取佣金奖励的条件，则次日佣金奖励为0。")]),t._v(" "),e("dd",{staticStyle:{clear:"both"}})])])])])},i=[];s._withStripped=!0;var n={render:s,staticRenderFns:i};a.a=n}});