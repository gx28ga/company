webpackJsonp([10,16],{30:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{superClass:String,transition:String,closeCallback:Function},data:function(){return{}},mounted:function(){t.setImgSize()},methods:{closePop:function(t){this.$refs.pop.closePop(t)}}}}).call(e,o(0))},31:function(t,e,o){var n=o(8)(o(30),o(32),null,null);n.options.__file="E:\\products\\pc\\activity\\app\\guhuaDafuweng\\src\\pop\\pop.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] pop.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},32:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("pop",{ref:"pop",attrs:{transition:t.transition,superClass:t.superClass,closeCallback:t.closeCallback}},[o("div",{staticClass:"modal-container img-size",attrs:{"data-width":"555","data-height":"454"},slot:"main"},[t._t("close",[o("div",{staticClass:"close img-size",attrs:{"data-width":"82","data-height":"81"},on:{click:t.closePop}})]),t._v(" "),o("div",{staticClass:"modal-header"},[t._t("header",[o("div",{staticClass:"title-bg img-size",attrs:{"data-width":"391","data-height":"79","data-marginTop":"20"}})])],2),t._v(" "),o("div",{staticClass:"modal-body img-size",attrs:{"data-paddingLeft":"40","data-paddingRight":"40"}},[t._t("body",[t._v("\r\n                default body\r\n            ")])],2),t._v(" "),o("div",{staticClass:"modal-footer img-size",attrs:{"data-paddingBottom":"40"}},[t._t("footer",[o("div",{staticClass:"btn img-size",attrs:{"data-width":"327","data-height":"60","data-lineHeight":"60"}})])],2)],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0},33:function(t,e,o){"use strict";(function(t){function n(t){$&&(t._devtoolHook=$,$.emit("vuex:init",t),$.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){$.emit("vuex:mutation",t,e)}))}function i(t,e){Object.keys(t).forEach(function(o){return e(t[o],o)})}function r(t){return null!==t&&"object"==typeof t}function s(t){return t&&"function"==typeof t.then}function a(t,e){if(!t)throw new Error("[vuex] "+e)}function u(t,e){if(t.update(e),e.modules)for(var o in e.modules){if(!t.getChild(o))return void console.warn("[vuex] trying to add a new module '"+o+"' on hot reloading, manual reload is needed");u(t.getChild(o),e.modules[o])}}function c(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var o=t.state;p(t,o,[],t._modules.root,!0),l(t,o,e)}function l(t,e,o){var n=t._vm;t.getters={};var r=t._wrappedGetters,s={};i(r,function(e,o){s[o]=function(){return e(t)},Object.defineProperty(t.getters,o,{get:function(){return t._vm[o]},enumerable:!0})});var a=j.config.silent;j.config.silent=!0,t._vm=new j({data:{$$state:e},computed:s}),j.config.silent=a,t.strict&&_(t),n&&(o&&t._withCommit(function(){n._data.$$state=null}),j.nextTick(function(){return n.$destroy()}))}function p(t,e,o,n,i){var r=!o.length,s=t._modules.getNamespace(o);if(s&&(t._modulesNamespaceMap[s]=n),!r&&!i){var a=g(e,o.slice(0,-1)),u=o[o.length-1];t._withCommit(function(){j.set(a,u,n.state)})}var c=n.context=d(t,s,o);n.forEachMutation(function(e,o){h(t,s+o,e,c)}),n.forEachAction(function(e,o){m(t,s+o,e,c)}),n.forEachGetter(function(e,o){v(t,s+o,e,c)}),n.forEachChild(function(n,r){p(t,e,o.concat(r),n,i)})}function d(t,e,o){var n=""===e,i={dispatch:n?t.dispatch:function(o,n,i){var r=y(o,n,i),s=r.payload,a=r.options,u=r.type;return a&&a.root||(u=e+u,t._actions[u])?t.dispatch(u,s):void console.error("[vuex] unknown local action type: "+r.type+", global type: "+u)},commit:n?t.commit:function(o,n,i){var r=y(o,n,i),s=r.payload,a=r.options,u=r.type;if(!(a&&a.root||(u=e+u,t._mutations[u])))return void console.error("[vuex] unknown local mutation type: "+r.type+", global type: "+u);t.commit(u,s,a)}};return Object.defineProperties(i,{getters:{get:n?function(){return t.getters}:function(){return f(t,e)}},state:{get:function(){return g(t.state,o)}}}),i}function f(t,e){var o={},n=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,n)===e){var r=i.slice(n);Object.defineProperty(o,r,{get:function(){return t.getters[i]},enumerable:!0})}}),o}function h(t,e,o,n){(t._mutations[e]||(t._mutations[e]=[])).push(function(t){o(n.state,t)})}function m(e,o,n,i){(e._actions[o]||(e._actions[o]=[])).push(function(o,r){var a=n({dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},o,r);return s(a)||(a=t.resolve(a)),e._devtoolHook?a.catch(function(t){throw e._devtoolHook.emit("vuex:error",t),t}):a})}function v(t,e,o,n){if(t._wrappedGetters[e])return void console.error("[vuex] duplicate getter key: "+e);t._wrappedGetters[e]=function(t){return o(n.state,n.getters,t.state,t.getters)}}function _(t){t._vm.$watch(function(){return this._data.$$state},function(){a(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function g(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function y(t,e,o){return r(t)&&t.type&&(o=e,e=t,t=t.type),a("string"==typeof t,"Expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:o}}function w(t){if(j)return void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.");j=t,M(j)}function b(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function x(t){return function(e,o){return"string"!=typeof e?(o=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,o)}}function C(t,e,o){var n=t._modulesNamespaceMap[o];return n||console.error("[vuex] module namespace not found in "+e+"(): "+o),n}Object.defineProperty(e,"__esModule",{value:!0}),o.d(e,"Store",function(){return S}),o.d(e,"mapState",function(){return G}),o.d(e,"mapMutations",function(){return P}),o.d(e,"mapGetters",function(){return z}),o.d(e,"mapActions",function(){return V});/**
 * vuex v2.2.1
 * (c) 2017 Evan You
 * @license MIT
 */
var M=function(t){function e(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}if(Number(t.version.split(".")[0])>=2){var o=t.config._lifecycleHooks.indexOf("init")>-1;t.mixin(o?{init:e}:{beforeCreate:e})}else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,n.call(this,t)}}},$="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,k=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t},O={state:{},namespaced:{}};O.state.get=function(){return this._rawModule.state||{}},O.namespaced.get=function(){return!!this._rawModule.namespaced},k.prototype.addChild=function(t,e){this._children[t]=e},k.prototype.removeChild=function(t){delete this._children[t]},k.prototype.getChild=function(t){return this._children[t]},k.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},k.prototype.forEachChild=function(t){i(this._children,t)},k.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},k.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},k.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(k.prototype,O);var E=function(t){var e=this;this.root=new k(t,!1),t.modules&&i(t.modules,function(t,o){e.register([o],t,!1)})};E.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},E.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,o){return e=e.getChild(o),t+(e.namespaced?o+"/":"")},"")},E.prototype.update=function(t){u(this.root,t)},E.prototype.register=function(t,e,o){var n=this;void 0===o&&(o=!0);var r=this.get(t.slice(0,-1)),s=new k(e,o);r.addChild(t[t.length-1],s),e.modules&&i(e.modules,function(e,i){n.register(t.concat(i),e,o)})},E.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),o=t[t.length-1];e.getChild(o).runtime&&e.removeChild(o)};var j,S=function(e){var o=this;void 0===e&&(e={}),a(j,"must call Vue.use(Vuex) before creating a store instance."),a(void 0!==t,"vuex requires a Promise polyfill in this browser.");var i=e.state;void 0===i&&(i={});var r=e.plugins;void 0===r&&(r=[]);var s=e.strict;void 0===s&&(s=!1),this._committing=!1,this._actions=Object.create(null),this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new E(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new j;var u=this,c=this,d=c.dispatch,f=c.commit;this.dispatch=function(t,e){return d.call(u,t,e)},this.commit=function(t,e,o){return f.call(u,t,e,o)},this.strict=s,p(this,i,[],this._modules.root),l(this,i),r.concat(n).forEach(function(t){return t(o)})},A={state:{}};A.state.get=function(){return this._vm._data.$$state},A.state.set=function(t){a(!1,"Use store.replaceState() to explicit replace store state.")},S.prototype.commit=function(t,e,o){var n=this,i=y(t,e,o),r=i.type,s=i.payload,a=i.options,u={type:r,payload:s},c=this._mutations[r];if(!c)return void console.error("[vuex] unknown mutation type: "+r);this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(u,n.state)}),a&&a.silent&&console.warn("[vuex] mutation type: "+r+". Silent option has been removed. Use the filter functionality in the vue-devtools")},S.prototype.dispatch=function(e,o){var n=y(e,o),i=n.type,r=n.payload,s=this._actions[i];return s?s.length>1?t.all(s.map(function(t){return t(r)})):s[0](r):void console.error("[vuex] unknown action type: "+i)},S.prototype.subscribe=function(t){var e=this._subscribers;return e.indexOf(t)<0&&e.push(t),function(){var o=e.indexOf(t);o>-1&&e.splice(o,1)}},S.prototype.watch=function(t,e,o){var n=this;return a("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(n.state,n.getters)},e,o)},S.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},S.prototype.registerModule=function(t,e){"string"==typeof t&&(t=[t]),a(Array.isArray(t),"module path must be a string or an Array."),this._modules.register(t,e),p(this,this.state,t,this._modules.get(t)),l(this,this.state)},S.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),a(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var o=g(e.state,t.slice(0,-1));j.delete(o,t[t.length-1])}),c(this)},S.prototype.hotUpdate=function(t){this._modules.update(t),c(this,!0)},S.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(S.prototype,A),"undefined"!=typeof window&&window.Vue&&w(window.Vue);var G=x(function(t,e){var o={};return b(e).forEach(function(e){var n=e.key,i=e.val;o[n]=function(){var e=this.$store.state,o=this.$store.getters;if(t){var n=C(this.$store,"mapState",t);if(!n)return;e=n.context.state,o=n.context.getters}return"function"==typeof i?i.call(this,e,o):e[i]},o[n].vuex=!0}),o}),P=x(function(t,e){var o={};return b(e).forEach(function(e){var n=e.key,i=e.val;i=t+i,o[n]=function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];if(!t||C(this.$store,"mapMutations",t))return this.$store.commit.apply(this.$store,[i].concat(e))}}),o}),z=x(function(t,e){var o={};return b(e).forEach(function(e){var n=e.key,i=e.val;i=t+i,o[n]=function(){if(!t||C(this.$store,"mapGetters",t))return i in this.$store.getters?this.$store.getters[i]:void console.error("[vuex] unknown getter: "+i)},o[n].vuex=!0}),o}),V=x(function(t,e){var o={};return b(e).forEach(function(e){var n=e.key,i=e.val;i=t+i,o[n]=function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];if(!t||C(this.$store,"mapActions",t))return this.$store.dispatch.apply(this.$store,[i].concat(e))}}),o}),H={Store:S,install:w,version:"2.2.1",mapState:G,mapMutations:P,mapGetters:z,mapActions:V};e.default=H}).call(e,o(2))},44:function(t,e,o){"use strict";(function(t){function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(31),r=n(i),s=o(3),a=n(s),u=o(33);e.default={store:a.default,components:{pop:r.default},computed:(0,u.mapState)(["status"]),props:{transition:String},methods:{closeCallback:function(){t.callApp.home()}}}}).call(e,o(0))},65:function(t,e){},76:function(t,e,o){o(65);var n=o(8)(o(44),o(95),"data-v-6c1bb27c",null);n.options.__file="E:\\products\\pc\\activity\\app\\guhuaDafuweng\\src\\pop\\notStart.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] notStart.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},95:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("pop",{ref:"pop",attrs:{transition:t.transition,closeCallback:t.closeCallback}},[o("div",{slot:"header"}),t._v(" "),o("div",{staticClass:"notStart",slot:"body"},[o("h2",[t._v("感谢关注")]),t._v(" "),-1==t.status?o("div",[o("p",[t._v("本次活动尚未开始")]),o("p",[t._v("敬请期待")])]):o("div",[t._v("本次活动已结束")])]),t._v(" "),o("div",{staticClass:"submit img-size",slot:"footer"},[o("div",{staticClass:"btn img-size",attrs:{"data-fontSize":"30","data-width":"327","data-height":"60","data-lineHeight":"60"},on:{click:t.closeCallback}},[t._v("回首页")])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});