webpackJsonp([1],{15:function(t,e,n){"use strict";function i(t){c||n(25)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),r=n.n(o);for(var a in o)["default","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return o[t]})}(a);var s=n(31),c=!1,u=n(18),l=i,d=u(r.a,s.a,!1,l,"data-v-0f195ce8",null);d.options.__file="src\\module\\index.vue",e.default=d.exports},18:function(t,e){t.exports=function(t,e,n,i,o,r){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var u="function"==typeof s?s.options:s;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o);var l;if(r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=l):i&&(l=i),l){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(t,e){return l.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:s,options:u}}},20:function(t,e,n){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r=n(7),a=i(r),s=n(35),c=n(24),u=n(4),l=i(u);e.default={store:l.default,computed:o({},(0,s.mapState)(["userCoin"])),components:{},data:function(){return{income:0,incomeList:[],incomeTotal:0,dadelinTime:"",load:"查看更多"}},mounted:function(){var e=this;t.init(),t.uid||(0,a.default)("gologin",{props:{content:"对不起，请登录后再操作。",transition:"rotate3d",okTxt:"去登录",okCallback:function(){t.login()}}},"publicTips"),t.ajax({url:c.hesitory,data:{uid:t.uid,pageOn:1,pageSize:100},callback:!0}).then(function(n){n.success&&(e.incomeList=n.map.page.rows,e.incomeTotal=n.map.total,e.income=n.map.firstMonthAmount,e.$nextTick(function(){t.setImgSize()}))})},methods:{goback:function(){router.push("/number2")},question:function(){t.click(function(){(0,a.default)("friend",{props:{content:"①活动期间，被邀请人在注册成功当天起首月内（30天内，含第30天），成功投资任意产品（除新手宝外），邀请人就能获得一定比例的返现奖励：<br />②首月返现奖励=被邀请人投资产品基本收益金额（不含任何加息/红包等福利收益）*30%",transition:"rotate3d",okCallback:function(){t.login()}}},"publicTips")})},returnla:function(){t.callApp.invite()}}}}).call(e,n(0))},24:function(t,e,n){"use strict";t.exports={hesitory:"/activity/myRecommend.do"}},25:function(t,e){},31:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"earn-box"},[n("div",{staticClass:"hebanner img-size",attrs:{"data-height":"320","data-paddingTop":"40"}},[n("div",{staticClass:"diImg img-size",attrs:{"data-height":"167","data-bottom":"-9","data-left":"0","data-width":"750"}}),t._v(" "),n("div",{staticClass:"hedeadline img-size",attrs:{"data-fontSize":"28"}},[t._v("好友邀请首月返现")]),t._v(" "),n("div",{staticClass:"icome img-size",attrs:{"data-marginTop":"60","data-fontSize":"34"}},[t._v("累计获得 "),n("span",{staticClass:"question1 img-size",attrs:{"data-width":"40","data-height":"40","data-fontSize":"40","data-lineHeight":"40"},on:{click:t.question}},[t._v("?")])]),t._v(" "),n("div",{staticClass:"icomeNumber img-size",attrs:{"data-marginTop":"40","data-fontSize":"90"}},[t._v(t._s(t.income)),n("span",{staticClass:"yuan img-size",attrs:{"data-fontSize":"34"}},[t._v("元")])])]),t._v(" "),n("div",{staticClass:"hisrecord img-size",attrs:{"data-paddingBottom":"120"}},[t._m(0),t._v(" "),t._l(t.incomeList,function(e){return n("ul",{staticClass:"hislist img-size",attrs:{"data-lineHeight":"75","data-height":"75"}},[n("li",[t._v(t._s(e.mobilePhone)+" ")]),t._v(" "),n("li",[t._v(t._s(new Date(e.investTime).Format("yyyy-MM-dd")))]),t._v(" "),n("li",[t._v(t._s(e.referrerReward)+"元")]),t._v(" "),n("div",{staticStyle:{clear:"both"}})])}),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:0==t.incomeList.length,expression:"incomeList.length==0"}],staticClass:"hislist img-size",attrs:{"data-lineHeight":"75","data-height":"75"}},[n("li",{staticClass:"img-size",staticStyle:{"text-align":"center"},attrs:{"data-width":"750"}},[t._v("暂无记录")]),t._v(" "),n("div",{staticStyle:{clear:"both"}})])],2),t._v(" "),n("div",{staticClass:"inviteBtn img-size",attrs:{"data-width":"750"}},[n("a",{staticClass:"img-size",attrs:{"data-lineHeight":"100","data-height":"100"},on:{click:t.returnla}},[t._v("返回佣金记录")])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"hisrecordTittle img-size",attrs:{"data-height":"65","data-lineHeight":"65","data-fontSize":"28"}},[n("li",[t._v("好友ID")]),t._v(" "),n("li",[t._v("投资时间")]),t._v(" "),n("li",[t._v("可获奖励")]),t._v(" "),n("div",{staticStyle:{clear:"both"}})])}];i._withStripped=!0;var r={render:i,staticRenderFns:o};e.a=r},35:function(t,e,n){"use strict";(function(t){function i(t){O&&(t._devtoolHook=O,O.emit("vuex:init",t),O.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){O.emit("vuex:mutation",t,e)}))}function o(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function r(t){return null!==t&&"object"==typeof t}function a(t){return t&&"function"==typeof t.then}function s(t,e){if(!t)throw new Error("[vuex] "+e)}function c(t,e){if(t.update(e),e.modules)for(var n in e.modules){if(!t.getChild(n))return void console.warn("[vuex] trying to add a new module '"+n+"' on hot reloading, manual reload is needed");c(t.getChild(n),e.modules[n])}}function u(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;d(t,n,[],t._modules.root,!0),l(t,n,e)}function l(t,e,n){var i=t._vm;t.getters={};var r=t._wrappedGetters,a={};o(r,function(e,n){a[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=E.config.silent;E.config.silent=!0,t._vm=new E({data:{$$state:e},computed:a}),E.config.silent=s,t.strict&&_(t),i&&(n&&t._withCommit(function(){i._data.$$state=null}),E.nextTick(function(){return i.$destroy()}))}function d(t,e,n,i,o){var r=!n.length,a=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[a]=i),!r&&!o){var s=g(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){E.set(s,c,i.state)})}var u=i.context=f(t,a,n);i.forEachMutation(function(e,n){h(t,a+n,e,u)}),i.forEachAction(function(e,n){m(t,a+n,e,u)}),i.forEachGetter(function(e,n){v(t,a+n,e,u)}),i.forEachChild(function(i,r){d(t,e,n.concat(r),i,o)})}function f(t,e,n){var i=""===e,o={dispatch:i?t.dispatch:function(n,i,o){var r=y(n,i,o),a=r.payload,s=r.options,c=r.type;return s&&s.root||(c=e+c,t._actions[c])?t.dispatch(c,a):void console.error("[vuex] unknown local action type: "+r.type+", global type: "+c)},commit:i?t.commit:function(n,i,o){var r=y(n,i,o),a=r.payload,s=r.options,c=r.type;if(!(s&&s.root||(c=e+c,t._mutations[c])))return void console.error("[vuex] unknown local mutation type: "+r.type+", global type: "+c);t.commit(c,a,s)}};return Object.defineProperties(o,{getters:{get:i?function(){return t.getters}:function(){return p(t,e)}},state:{get:function(){return g(t.state,n)}}}),o}function p(t,e){var n={},i=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,i)===e){var r=o.slice(i);Object.defineProperty(n,r,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function h(t,e,n,i){(t._mutations[e]||(t._mutations[e]=[])).push(function(t){n(i.state,t)})}function m(e,n,i,o){(e._actions[n]||(e._actions[n]=[])).push(function(n,r){var s=i({dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:e.getters,rootState:e.state},n,r);return a(s)||(s=t.resolve(s)),e._devtoolHook?s.catch(function(t){throw e._devtoolHook.emit("vuex:error",t),t}):s})}function v(t,e,n,i){if(t._wrappedGetters[e])return void console.error("[vuex] duplicate getter key: "+e);t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)}}function _(t){t._vm.$watch(function(){return this._data.$$state},function(){s(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function g(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function y(t,e,n){return r(t)&&t.type&&(n=e,e=t,t=t.type),s("string"==typeof t,"Expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}function w(t){if(E)return void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.");E=t,$(E)}function b(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function x(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function C(t,e,n){var i=t._modulesNamespaceMap[n];return i||console.error("[vuex] module namespace not found in "+e+"(): "+n),i}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"Store",function(){return j}),n.d(e,"mapState",function(){return T}),n.d(e,"mapMutations",function(){return A}),n.d(e,"mapGetters",function(){return G}),n.d(e,"mapActions",function(){return V});/**
 * vuex v2.3.0
 * (c) 2017 Evan You
 * @license MIT
 */
var $=function(t){function e(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}if(Number(t.version.split(".")[0])>=2){var n=t.config._lifecycleHooks.indexOf("init")>-1;t.mixin(n?{init:e}:{beforeCreate:e})}else{var i=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,i.call(this,t)}}},O="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,M=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},k={namespaced:{}};k.namespaced.get=function(){return!!this._rawModule.namespaced},M.prototype.addChild=function(t,e){this._children[t]=e},M.prototype.removeChild=function(t){delete this._children[t]},M.prototype.getChild=function(t){return this._children[t]},M.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},M.prototype.forEachChild=function(t){o(this._children,t)},M.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},M.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},M.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(M.prototype,k);var S=function(t){var e=this;this.root=new M(t,!1),t.modules&&o(t.modules,function(t,n){e.register([n],t,!1)})};S.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},S.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},S.prototype.update=function(t){c(this.root,t)},S.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=this.get(t.slice(0,-1)),a=new M(e,n);r.addChild(t[t.length-1],a),e.modules&&o(e.modules,function(e,o){i.register(t.concat(o),e,n)})},S.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var E,j=function(e){var n=this;void 0===e&&(e={}),s(E,"must call Vue.use(Vuex) before creating a store instance."),s(void 0!==t,"vuex requires a Promise polyfill in this browser.");var o=e.state;void 0===o&&(o={});var r=e.plugins;void 0===r&&(r=[]);var a=e.strict;void 0===a&&(a=!1),this._committing=!1,this._actions=Object.create(null),this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new S(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new E;var c=this,u=this,f=u.dispatch,p=u.commit;this.dispatch=function(t,e){return f.call(c,t,e)},this.commit=function(t,e,n){return p.call(c,t,e,n)},this.strict=a,d(this,o,[],this._modules.root),l(this,o),r.concat(i).forEach(function(t){return t(n)})},z={state:{}};z.state.get=function(){return this._vm._data.$$state},z.state.set=function(t){s(!1,"Use store.replaceState() to explicit replace store state.")},j.prototype.commit=function(t,e,n){var i=this,o=y(t,e,n),r=o.type,a=o.payload,s=o.options,c={type:r,payload:a},u=this._mutations[r];if(!u)return void console.error("[vuex] unknown mutation type: "+r);this._withCommit(function(){u.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(c,i.state)}),s&&s.silent&&console.warn("[vuex] mutation type: "+r+". Silent option has been removed. Use the filter functionality in the vue-devtools")},j.prototype.dispatch=function(e,n){var i=y(e,n),o=i.type,r=i.payload,a=this._actions[o];return a?a.length>1?t.all(a.map(function(t){return t(r)})):a[0](r):void console.error("[vuex] unknown action type: "+o)},j.prototype.subscribe=function(t){var e=this._subscribers;return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}},j.prototype.watch=function(t,e,n){var i=this;return s("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(i.state,i.getters)},e,n)},j.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},j.prototype.registerModule=function(t,e){"string"==typeof t&&(t=[t]),s(Array.isArray(t),"module path must be a string or an Array."),this._modules.register(t,e),d(this,this.state,t,this._modules.get(t)),l(this,this.state)},j.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),s(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var n=g(e.state,t.slice(0,-1));E.delete(n,t[t.length-1])}),u(this)},j.prototype.hotUpdate=function(t){this._modules.update(t),u(this,!0)},j.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(j.prototype,z),"undefined"!=typeof window&&window.Vue&&w(window.Vue);var T=x(function(t,e){var n={};return b(e).forEach(function(e){var i=e.key,o=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=C(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[i].vuex=!0}),n}),A=x(function(t,e){var n={};return b(e).forEach(function(e){var i=e.key,o=e.val;o=t+o,n[i]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(!t||C(this.$store,"mapMutations",t))return this.$store.commit.apply(this.$store,[o].concat(e))}}),n}),G=x(function(t,e){var n={};return b(e).forEach(function(e){var i=e.key,o=e.val;o=t+o,n[i]=function(){if(!t||C(this.$store,"mapGetters",t))return o in this.$store.getters?this.$store.getters[o]:void console.error("[vuex] unknown getter: "+o)},n[i].vuex=!0}),n}),V=x(function(t,e){var n={};return b(e).forEach(function(e){var i=e.key,o=e.val;o=t+o,n[i]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(!t||C(this.$store,"mapActions",t))return this.$store.dispatch.apply(this.$store,[o].concat(e))}}),n}),N={Store:j,install:w,version:"2.3.0",mapState:T,mapMutations:A,mapGetters:G,mapActions:V};e.default=N}).call(e,n(1))}});