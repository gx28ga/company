webpackJsonp([1],{17:function(t,e,n){"use strict";function o(t){a||n(46)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(32),r=n.n(i),s=n(62),a=!1,u=n(8),c=o,d=u(r.a,s.a,c,"data-v-7795a320",null);d.options.__file="src\\module\\register\\index.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},22:function(t,e,n){"use strict";(function(t){function o(t){E&&(t._devtoolHook=E,E.emit("vuex:init",t),E.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){E.emit("vuex:mutation",t,e)}))}function i(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function r(t){return null!==t&&"object"==typeof t}function s(t){return t&&"function"==typeof t.then}function a(t,e,n){if(e.update(n),n.modules)for(var o in n.modules){if(!e.getChild(o))return;a(t.concat(o),e.getChild(o),n.modules[o])}}function u(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function c(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;l(t,n,[],t._modules.root,!0),d(t,n,e)}function d(t,e,n){var o=t._vm;t.getters={};var r=t._wrappedGetters,s={};i(r,function(e,n){s[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=A.config.silent;A.config.silent=!0,t._vm=new A({data:{$$state:e},computed:s}),A.config.silent=a,t.strict&&v(t),o&&(n&&t._withCommit(function(){o._data.$$state=null}),A.nextTick(function(){return o.$destroy()}))}function l(t,e,n,o,i){var r=!n.length,s=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[s]=o),!r&&!i){var a=_(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){A.set(a,u,o.state)})}var c=o.context=f(t,s,n);o.forEachMutation(function(e,n){h(t,s+n,e,c)}),o.forEachAction(function(e,n){var o=e.root?n:s+n,i=e.handler||e;m(t,o,i,c)}),o.forEachGetter(function(e,n){g(t,s+n,e,c)}),o.forEachChild(function(o,r){l(t,e,n.concat(r),o,i)})}function f(t,e,n){var o=""===e,i={dispatch:o?t.dispatch:function(n,o,i){var r=y(n,o,i),s=r.payload,a=r.options,u=r.type;return a&&a.root||(u=e+u),t.dispatch(u,s)},commit:o?t.commit:function(n,o,i){var r=y(n,o,i),s=r.payload,a=r.options,u=r.type;a&&a.root||(u=e+u),t.commit(u,s,a)}};return Object.defineProperties(i,{getters:{get:o?function(){return t.getters}:function(){return p(t,e)}},state:{get:function(){return _(t.state,n)}}}),i}function p(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,o)===e){var r=i.slice(o);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),n}function h(t,e,n,o){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,o.state,e)})}function m(e,n,o,i){(e._actions[n]||(e._actions[n]=[])).push(function(n,r){var a=o.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},n,r);return s(a)||(a=t.resolve(a)),e._devtoolHook?a.catch(function(t){throw e._devtoolHook.emit("vuex:error",t),t}):a})}function g(t,e,n,o){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)})}function v(t){t._vm.$watch(function(){return this._data.$$state},function(){},{deep:!0,sync:!0})}function _(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function y(t,e,n){return r(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function w(t){A&&t===A||(A=t,x(A))}function C(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function b(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function M(t,e,n){return t._modulesNamespaceMap[n]}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"Store",function(){return S}),n.d(e,"install",function(){return w}),n.d(e,"mapState",function(){return P}),n.d(e,"mapMutations",function(){return k}),n.d(e,"mapGetters",function(){return N}),n.d(e,"mapActions",function(){return T}),n.d(e,"createNamespacedHelpers",function(){return H});/**
 * vuex v3.0.0
 * (c) 2017 Evan You
 * @license MIT
 */
var x=function(t){function e(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:e});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,n.call(this,t)}}},E="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,O=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},$={namespaced:{configurable:!0}};$.namespaced.get=function(){return!!this._rawModule.namespaced},O.prototype.addChild=function(t,e){this._children[t]=e},O.prototype.removeChild=function(t){delete this._children[t]},O.prototype.getChild=function(t){return this._children[t]},O.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},O.prototype.forEachChild=function(t){i(this._children,t)},O.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},O.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},O.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(O.prototype,$);var z=function(t){this.register([],t,!1)};z.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},z.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},z.prototype.update=function(t){a([],this.root,t)},z.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var r=new O(e,n);if(0===t.length)this.root=r;else{this.get(t.slice(0,-1)).addChild(t[t.length-1],r)}e.modules&&i(e.modules,function(e,i){o.register(t.concat(i),e,n)})},z.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var A,S=function(t){var e=this;void 0===t&&(t={}),!A&&"undefined"!=typeof window&&window.Vue&&w(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var r=t.state;void 0===r&&(r={}),"function"==typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new z(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new A;var s=this,a=this,u=a.dispatch,c=a.commit;this.dispatch=function(t,e){return u.call(s,t,e)},this.commit=function(t,e,n){return c.call(s,t,e,n)},this.strict=i,l(this,r,[],this._modules.root),d(this,r),n.forEach(function(t){return t(e)}),A.config.devtools&&o(this)},j={state:{configurable:!0}};j.state.get=function(){return this._vm._data.$$state},j.state.set=function(t){},S.prototype.commit=function(t,e,n){var o=this,i=y(t,e,n),r=i.type,s=i.payload,a=(i.options,{type:r,payload:s}),u=this._mutations[r];u&&(this._withCommit(function(){u.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(a,o.state)}))},S.prototype.dispatch=function(e,n){var o=this,i=y(e,n),r=i.type,s=i.payload,a={type:r,payload:s},u=this._actions[r];if(u)return this._actionSubscribers.forEach(function(t){return t(a,o.state)}),u.length>1?t.all(u.map(function(t){return t(s)})):u[0](s)},S.prototype.subscribe=function(t){return u(t,this._subscribers)},S.prototype.subscribeAction=function(t){return u(t,this._actionSubscribers)},S.prototype.watch=function(t,e,n){var o=this;return this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},S.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},S.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),l(this,this.state,t,this._modules.get(t),n.preserveState),d(this,this.state)},S.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=_(e.state,t.slice(0,-1));A.delete(n,t[t.length-1])}),c(this)},S.prototype.hotUpdate=function(t){this._modules.update(t),c(this,!0)},S.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(S.prototype,j);var P=b(function(t,e){var n={};return C(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=M(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof i?i.call(this,e,n):e[i]},n[o].vuex=!0}),n}),k=b(function(t,e){var n={};return C(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.commit;if(t){var r=M(this.$store,"mapMutations",t);if(!r)return;o=r.context.commit}return"function"==typeof i?i.apply(this,[o].concat(e)):o.apply(this.$store,[i].concat(e))}}),n}),N=b(function(t,e){var n={};return C(e).forEach(function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){if(!t||M(this.$store,"mapGetters",t))return this.$store.getters[i]},n[o].vuex=!0}),n}),T=b(function(t,e){var n={};return C(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.dispatch;if(t){var r=M(this.$store,"mapActions",t);if(!r)return;o=r.context.dispatch}return"function"==typeof i?i.apply(this,[o].concat(e)):o.apply(this.$store,[i].concat(e))}}),n}),H=function(t){return{mapState:P.bind(null,t),mapGetters:N.bind(null,t),mapMutations:k.bind(null,t),mapActions:T.bind(null,t)}},G={Store:S,install:w,version:"3.0.0",mapState:P,mapMutations:k,mapGetters:N,mapActions:T,createNamespacedHelpers:H};e.default=G}).call(e,n(1))},23:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i=n(22);e.default={props:["titleName"],data:function(){return{titleName:"",showModal:!0}},computed:o({},(0,i.mapState)(["user"]),(0,i.mapGetters)(["userInfo"])),mounted:function(){},methods:{close:function(){var t=this;this.showModal=!1,setTimeout(function(){$(t.$el).remove()},510)},download:function(){t.btnEvent()}}}}).call(e,n(0))},24:function(t,e){},25:function(t,e,n){"use strict";function o(t){a||n(24)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(23),r=n.n(i),s=n(26),a=!1,u=n(8),c=o,d=u(r.a,s.a,c,"data-v-78d69450",null);d.options.__file="src\\components\\download.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] download.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},26:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"download img-size",attrs:{"data-height":"90"}},[n("div",{staticClass:"close img-size",attrs:{"data-width":"25","data-height":"25","data-marginTop":"33","data-marginLeft":"14"},on:{click:t.close}}),t._v(" "),n("div",{staticClass:"logo img-size",attrs:{"data-width":"75","data-height":"75","data-marginLeft":"17","data-marginTop":"8","data-marginRight":"24"}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"downloadBtn img-size",attrs:{"data-width":"260","data-height":"90","data-lineHeight":"90","data-fontSize":"36"},on:{click:t.download}},[t._v("立即下载")])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"name img-size",attrs:{"data-paddingTop":"10"}},[n("div",{staticClass:"appName img-size",attrs:{"data-fontSize":"30","data-height":"40","data-lineHeight":"40"}},[t._v("粒粒钱包")]),t._v(" "),n("div",{staticClass:"downapp img-size",attrs:{"data-fontSize":"20","data-height":"30","data-lineHeight":"30"}},[t._v("下载APP，轻松体验")])])}];o._withStripped=!0;var r={render:o,staticRenderFns:i};e.a=r},27:function(t,e,n){"use strict";(function(e,n){var o={mobile:function(t){var e=/^1[3|4|5|7|8][0-9]\d{8}$/;return""==t?"手机号不能为空":0!=e.test(t)||"请输入正确格式的手机号"},pwd:function(t){var e=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;return""==t?"请输入密码":t.length<6?"注册密码不能少于6位":0!=e.test(t)||"注册密码为 6-20位数字、字母或两者组合"},imgCode:function(t,e){e=e||4;var n=new RegExp("^[0-9A-Za-z]{"+e+"}$");return""==t?"图形验证码不能为空":t.length<e?"请输入正确的验证码":0!=n.test(t)||"图片验证码格式错误"},imgCodeUrl:function(){return"/api/h5/imgCode/generate.htm?"+(new Date).getTime()},varMobile:function(t){return new e(function(e,o){n.ajax({url:"/api/user/isPhoneExists.htm",data:{phone:t},callback:!0}).then(function(t){e(t.success?20==t.data.exists?{status:!1,msg:"此号码已经注册"}:{status:!0}:{status:!1,msg:"系统错误"+t.errorCode})})})},sendMsg:function(t,e,o){var i=this;n.ajax({url:"/api/user/h5SendSms.htm",data:{phone:t,code:e,type:"register"},callback:!0}).then(function(t){if(200!=t.code)return t.code,o(!1,""+t.msg);i.reSendYzm(o)})},shortMessageTime:60,reSendYzm:function(t){o.shortMessageTime-=1,o.shortMessageTime>0?(t(!0,{status:-1,time:o.shortMessageTime}),setTimeout(function(){o.reSendYzm(t)},1e3)):(o.shortMessageTime=60,t(!0,{status:0,time:o.shortMessageTime}))},register:function(t){return new e(function(e,o){n.ajax({url:"/api/user/register.htm",data:{loginName:t.mobile,loginPwd:t.pwd,registerAddr:t.registerAddr,registerCoordinate:t.registerCoordinate,client:"H5",invitationCode:t.invitationCode,vcode:t.vcode},callback:!0}).then(function(t){console.log(t),t.success?e({status:!0}):("1001"==t.errorCode&&e({status:!1,msg:"短信验证码为空"}),"1002"==t.errorCode&&e({status:!1,msg:"短信验证码错误"}),"1003"==t.errorCode&&e({status:!1,msg:"手机号为空"}),"1004"==t.errorCode&&e({status:!1,msg:"图片验证码为空"}),"1005"==t.errorCode&&e({status:!1,msg:"密码格式错误"}),"1006"==t.errorCode&&e({status:!1,msg:"未勾选注册协议"}),"1007"==t.errorCode&&e({status:!1,msg:"手机号已注册"}),"1008"==t.errorCode&&e({status:!1,msg:"推荐人不存在"}))})})}};t.exports=o}).call(e,n(1),n(0))},32:function(t,e,n){"use strict";(function(t){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(25),r=o(i),s=n(51),a=o(s);e.default={components:{download:r.default,login:a.default},data:function(){return{titleName:"设置登录密码"}},mounted:function(){document.title="设置登录密码",t.setImgSize()},methods:{}}}).call(e,n(0))},33:function(t,e,n){"use strict";(function(t){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(27),r=o(i),s=n(9);o(s);e.default={components:{},data:function(){return{mobile:"",yzm:"",sortMsg:"",pwd:"",sortName:"获取验证码",sortClass:!1,imgCodeUrl:r.default.imgCodeUrl(),checked:!0,appkey:"oQIhAP24Kb3Bsf7IE14wpl751bQc9VAPsFZ+lql4riBgg2TDAiEAsSomOO1v8mK2VWhEQh6mttgN",btnClass:!1,error:!1,errorMsg:"",signMsg:" ",type:"register",string:""}},mounted:function(){this.geturl(),this.location()},methods:{geturl:function(){this.mobile=this.$route.query.phone},clear:function(){this.error=!1},showError:function(t){this.error=!0,this.errorMsg=t},getImgCodeUrl:function(){this.imgCodeUrl=r.default.imgCodeUrl()},verCode:function(t){var e=r.default.imgCode(this.yzm);if(!0!==e)return this.showError(e);t()},verPwd:function(t){var e=r.default.pwd(this.pwd);if(!0!==e)return this.showError(e);t()},verSort:function(t){return""==this.sortMsg?this.showError("请输入短信验证码"):this.sortMsg.length<4?this.showError("请输入正确的短信验证码"):void t()},getSortMsg:function(t){var e=this;e.mobile=this.$route.query.phone,t.stopPropagation(),e.sortClass||e.verCode(function(){e.sortClass=!0,r.default.sendMsg(e.mobile,e.yzm,function(t,n){t?-1===n.status?(e.sortName=n.time+"s后重发",e.sortClass=!0):(e.sortName="重新发送",e.sortClass=!1):(e.showError(n),e.sortClass=!1)})})},verification:function(t){var e=this;e.verCode(function(){e.verSort(function(){e.verPwd(t)})})},location:function(){function t(t){r.push(t.position.getLng()),r.push(t.position.getLat()),document.getElementById("tip").innerHTML=r.join(","),window.onload=n(r),t.accuracy&&r.push("精度："+t.accuracy+" 米"),r.push("是否经过偏移："+(t.isConverted?"是":"否"))}function e(t){document.getElementById("tip").innerHTML="定位失败"}function n(t){function e(t){var e=t.regeocode.formattedAddress;document.getElementById("result").innerHTML=e}var n=new AMap.Map("container",{resizeEnable:!0,zoom:18}),o=t;!function(){new AMap.Geocoder({radius:1e3,extensions:"all"}).getAddress(o,function(t,n){"complete"===t&&"OK"===n.info&&e(n)}),new AMap.Marker({map:n,position:o}),n.setFitView()}()}var o,i;o=new AMap.Map("container",{resizeEnable:!0}),o.plugin("AMap.Geolocation",function(){i=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonOffset:new AMap.Pixel(10,20),zoomToAccuracy:!0,buttonPosition:"RB"}),o.addControl(i),i.getCurrentPosition(),AMap.event.addListener(i,"complete",t),AMap.event.addListener(i,"error",e)});var r=[]},locationCity:function(t){new AMap.Map("container",{resizeEnable:!0,zoom:18})},zhuce:function(){var e=this;this.verification(function(){var n=e,o=document.getElementById("tip").innerText,i=document.getElementById("result").innerText,r=md5(n.pwd),s=e.$route.query.phone;null==t.toFrom&&(t.toFrom="");var a="oQIhAP24Kb3Bsf7IE14wpl751bQc9VAPsFZ+lql4riBgg2TDAiEAsSomOO1v8mK2VWhEQh6mttgNchannelCode="+t.toFrom+"|client=H5|invitationCode=|loginName="+s+"|loginPwd="+r+"|registerAddr="+i+"|registerCoordinate="+o+"|vcode="+n.sortMsg,u=md5(a);setTimeout(function(){$.ajax({url:"/api/user/register.htm",beforeSend:function(t){t.setRequestHeader("signMsg",u)},type:"POST",dataType:"json",accept:"application/json; text/plain",contentType:"application/x-www-form-urlencoded",data:{client:"H5",invitationCode:null,loginName:s,loginPwd:r,registerAddr:i,registerCoordinate:o,vcode:n.sortMsg,channelCode:t.toFrom},success:function(t){200==t.code?router.push("/download"):400==t.code&&n.showError(t.msg)}})},500)})}}}}).call(e,n(0))},42:function(t,e){},46:function(t,e){},51:function(t,e,n){"use strict";function o(t){a||n(42)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(33),r=n.n(i),s=n(58),a=!1,u=n(8),c=o,d=u(r.a,s.a,c,"data-v-413d4637",null);d.options.__file="src\\module\\register\\login.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},58:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"loginpa left-sider img-size"},[n("div",{staticClass:"top img-size",attrs:{"data-height":"60"}}),t._v(" "),n("div",{on:{click:t.clear}},[n("div",{staticClass:"item"},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.yzm,expression:"yzm"}],staticClass:"text",attrs:{type:"text",maxlength:"4",placeholder:"请输入图片验证码"},domProps:{value:t.yzm},on:{input:function(e){e.target.composing||(t.yzm=e.target.value)}}})]),t._v(" "),n("div",{attrs:{clss:"yzm"}},[n("img",{staticClass:"img-size",attrs:{src:t.imgCodeUrl,"data-height":"63","data-width":"136",alt:""},on:{click:t.getImgCodeUrl}})])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.sortMsg,expression:"sortMsg"}],staticClass:"text",attrs:{type:"text",maxlength:"4",placeholder:"请输入短信验证码"},domProps:{value:t.sortMsg},on:{input:function(e){e.target.composing||(t.sortMsg=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"yzm-submit"},[n("div",{staticClass:"btn img-size",class:{gray:t.sortClass},attrs:{"data-fontSize":"24"},on:{click:function(e){t.getSortMsg(e)}}},[t._v(t._s(t.sortName))])])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"text",attrs:{type:"password",placeholder:"请设置登录密码"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"error img-size",class:{cur:t.error},attrs:{"data-fontSize":"24","data-height":"30","data-lineHeight":"30"}},[t._v(t._s(t.errorMsg))]),t._v(" "),n("div",{staticStyle:{display:"none"},attrs:{id:"result"}}),t._v(" "),n("div",{staticStyle:{display:"none"},attrs:{id:"tip"}})]),t._v(" "),n("div",{staticClass:"enrollBtn img-size",attrs:{"data-height":"90","data-width":"550","data-lineHeight":"90","data-fontSize":"36"},on:{click:t.zhuce}},[t._v("立即注册")])])},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};e.a=r},62:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"main child-transition"},[n("login")],1)},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};e.a=r}});