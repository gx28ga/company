webpackJsonp([19],{27:function(t,e){t.exports=function(t,e,a,o){var i,s=t=t||{},n=typeof t.default;"object"!==n&&"function"!==n||(i=t,s=t.default);var r="function"==typeof s?s.options:s;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),a&&(r._scopeId=a),o){var c=Object.create(r.computed||null);Object.keys(o).forEach(function(t){var e=o[t];c[t]=function(){return e}}),r.computed=c}return{esModule:i,exports:s,options:r}}},49:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{transition:String,popState:Number,chance:{type:Number,default:0},cost:{type:Number,default:0}},data:function(){return{showModal:!0,waitTime:500}},computed:{msg:function(){switch(this.popState){case 0:return["您还未登录","请先登录再参加活动"];case 1:return["您的游戏次数为0","请投资获取游戏机会"];case 2:return["您的游戏机会不足10次，","请投资获取游戏机会"];case 3:return["很遗憾！本次没有成绩"];case 4:return["抱歉！您的劳模勋章不足，无法兑换"];case 5:return["兑换该奖品将消耗","是否确认兑换？"];case 6:return["兑换成功","请前往我的奖品页查看详情"]}}},mounted:function(){var e=this;t.setImgSize(),setTimeout(function(){e.waitTime=0},this.waitTime)},methods:{closePropagtion:function(t){t.stopPropagation()},showPop:function(t){this.showModal=!0,"function"==a.type(t)&&setTimeout(t,550)},closePop:function(e){this.waitTime>0||(this.showModal=!1,t.getPop(e))},onClose:function(){var t=this;this.closePop(function(){t.$emit("close-only-event")})},onLogin:function(){this.$emit("go-login-event")},onInvest:function(){t.callApp.investment()},onConfirmOk:function(){var t=this;this.closePop(function(){t.$emit("confirm-ok-event")})},onConfirmCancel:function(){var t=this;this.closePop(function(){t.$emit("confirm-cancel-event")})},onGoMy:function(){var t=this;this.closePop(function(){t.$emit("go-to-my")})}}}}).call(e,a(1),a(3))},60:function(t,e){},68:function(t,e,a){a(60);var o=a(27)(a(49),a(79),"data-v-9f57bda6",null);o.options.__file="E:\\git\\duorongcf\\develop\\pc\\nodejsSever\\static\\activity\\app\\farm\\src\\pop\\notify.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] notify.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},79:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask notify"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container pop-cnt img-size",attrs:{"data-width":"499","data-height":"318"},on:{click:function(e){t.closePropagtion(e)}}},[t._t("close",[a("div",{staticClass:"close img-size",attrs:{"data-width":"62","data-height":"62","data-top":"0","data-right":"1"},on:{click:t.onClose}})]),t._v(" "),a("div",{staticClass:"msg-wrapper img-size",attrs:{"data-marginTop":"90","data-height":"127"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.popState||1==t.popState||2==t.popState||3==t.popState||4==t.popState,expression:"popState == 0 || popState == 1 || popState == 2 || popState == 3 || popState == 4"}],staticClass:"msg-block"},t._l(t.msg,function(e){return a("div",{staticClass:"img-size",attrs:{"data-fontSize":"24","data-lineHeight":"38"}},[t._v(t._s(e))])})),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:6==t.popState,expression:"popState == 6"}],staticClass:"msg-block"},[a("div",{staticClass:"img-size",attrs:{"data-fontSize":"24","data-lineHeight":"38"}},[t._v("兑换成功"),a("br"),t._v("请前往"),a("span",{staticStyle:{color:"#00F","font-weight":"bold"},on:{click:t.onGoMy}},[t._v("我的奖品")]),t._v("页查看详情")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:5==t.popState,expression:"popState == 5"}],staticClass:"msg-block"},t._l(t.msg,function(e,o){return a("div",{staticClass:"img-size",attrs:{"data-fontSize":"24","data-lineHeight":"36"}},[t._v(t._s(e)),a("span",{directives:[{name:"show",rawName:"v-show",value:0==o,expression:"idx == 0"}],staticClass:"img-size",staticStyle:{color:"#ff5c00"},attrs:{"data-fontSize":"30"}},[t._v(t._s(t.cost))]),a("i",{directives:[{name:"show",rawName:"v-show",value:0==o,expression:"idx == 0"}]},[t._v("劳动勋章，")])])}))]),t._v(" "),a("div",{staticClass:"btn-wrapper"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.popState,expression:"popState == 0"}],staticClass:"login img-size",attrs:{"data-width":"200","data-height":"68"},on:{click:t.onLogin}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.popState||2==t.popState,expression:"popState == 1 || popState == 2"}],staticClass:"invest img-size",attrs:{"data-width":"200","data-height":"68"},on:{click:t.onInvest}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:3==t.popState||4==t.popState,expression:"popState == 3 || popState == 4"}],staticClass:"i-see img-size",attrs:{"data-width":"200","data-height":"68"},on:{click:t.onClose}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:5==t.popState,expression:"popState == 5"}]},[a("div",{staticClass:"cfm-yes img-size",attrs:{"data-width":"121","data-height":"52","data-marginRight":"30"},on:{click:t.onConfirmOk}}),a("div",{staticClass:"cfm-no img-size",attrs:{"data-width":"121","data-height":"52"},on:{click:t.onConfirmCancel}})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:6==t.popState,expression:"popState == 6"}],staticClass:"ok-close img-size",attrs:{"data-width":"200","data-height":"68"},on:{click:t.onClose}})])],2)])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});