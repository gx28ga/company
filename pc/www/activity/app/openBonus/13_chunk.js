webpackJsonp([13],{27:function(t,e){t.exports=function(t,e,o,i){var a,s=t=t||{},n=typeof t.default;"object"!==n&&"function"!==n||(a=t,s=t.default);var c="function"==typeof s?s.options:s;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),o&&(c._scopeId=o),i){var r=Object.create(c.computed||null);Object.keys(i).forEach(function(t){var e=i[t];r[t]=function(){return e}}),c.computed=r}return{esModule:a,exports:s,options:c}}},44:function(t,e,o){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{transition:String,popState:Number,amount:{type:Number,default:1}},data:function(){return{showModal:!0,waitTime:500}},computed:{giftName:function(){var t=this.popState,e=this.amount,o={11:e+"积分",12:"1.5加息券",13:"5元京东卡",14:"小米体脂称",15:"Kindle Paperwhite",16:e+"钞票",17:"数钞票机会"}[t+""];return o||""},giftAmount:function(){switch(this.popState){case 12:case 13:case 14:case 15:case 17:return this.amount;default:return""}},comment:function(){switch(this.popState){case 11:return"积分已发放到您的账户，请注意查收并在有 效期内使用";case 12:return"加息券已发放到您的账户，请注意查收并在有效期内使用";case 13:case 14:case 15:return"实物奖品将于活动结束后15个工作日内发放";case 16:return"* 可去【我的奖品-去兑换】兑换豪礼";default:return""}}},mounted:function(){var e=this;t.setImgSize(),setTimeout(function(){e.waitTime=0},this.waitTime)},methods:{closePropagtion:function(t){t.stopPropagation()},showPop:function(t){this.showModal=!0,"function"==o.type(t)&&setTimeout(t,550)},closePop:function(e){this.waitTime>0||(this.showModal=!1,t.getPop(e))},onClose:function(){var t=this;this.closePop(function(){t.$emit("close-only-event")})},onGoPage:function(t){var e=this,o={xchg:"go-xchg-event",count:"go-count-event"}[t];this.closePop(function(){e.$emit(o)})}}}}).call(e,o(1),o(3))},52:function(t,e){},65:function(t,e,o){o(52);var i=o(27)(o(44),o(72),"data-v-4526e8fe",null);i.options.__file="E:\\git\\source_tree\\develop\\dr_pc_web\\nodejsSever\\static\\activity\\app\\openBonus\\src\\pop\\showGift.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] showGift.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},72:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:t.transition}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask show-gift"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container pop-cnt img-size",attrs:{"data-width":"688","data-height":"594"},on:{click:function(e){t.closePropagtion(e)}}},[t._t("close",[o("div",{staticClass:"close img-size",attrs:{"data-width":"75","data-height":"75","data-top":"56","data-right":"0"},on:{click:t.onClose}})]),t._v(" "),o("div",{staticClass:"gift-name img-size",attrs:{"data-marginTop":"175","data-fontSize":15==t.popState?40:48,"data-lineHeight":"165"}},[t._v(t._s(t.giftName)+" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.giftAmount,expression:"giftAmount"}],staticClass:"img-size",attrs:{"data-fontSize":"56"}},[t._v("× "+t._s(t.giftAmount))])]),t._v(" "),o("div",{staticClass:"section"},[o("div",{staticClass:"comment-wrapper img-size",attrs:{"data-width":"504","data-height":"98"}},[o("div",{staticClass:"comment img-size",attrs:{"data-fontSize":"24","data-lineHeight":"36"}},[t._v(t._s(t.comment))])])]),t._v(" "),o("div",{staticClass:"section"},[o("div",{directives:[{name:"show",rawName:"v-show",value:16==t.popState,expression:"popState == 16"}],staticClass:"go-xchging img-size",attrs:{"data-width":"266","data-height":"86","data-marginRight":"20"},on:{click:function(e){t.onGoPage("xchg")}}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:17==t.popState,expression:"popState == 17"}],staticClass:"go-counting img-size",attrs:{"data-width":"266","data-height":"86","data-marginRight":"20"},on:{click:function(e){t.onGoPage("count")}}}),t._v(" "),o("div",{staticClass:"ok-close img-size",attrs:{"data-width":"246","data-height":"86"},on:{click:t.onClose}})])],2)])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});