webpackJsonp([11],{25:function(t,e){t.exports=function(t,e,a,i){var s,o=t=t||{},n=typeof t.default;"object"!==n&&"function"!==n||(s=t,o=t.default);var r="function"==typeof o?o.options:o;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),a&&(r._scopeId=a),i){var d=Object.create(r.computed||null);Object.keys(i).forEach(function(t){var e=i[t];d[t]=function(){return e}}),r.computed=d}return{esModule:s,exports:o,options:r}}},36:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{transition:String,popState:Number,chanceNum:Number,investEnough:Boolean,score:Number,roundScore:Number,overType:Number},data:function(){return{showModal:!0,waitTime:500}},computed:{msg:function(){if(1==this.popState)return"您的机会用完了，请投资获取"},overComment:function(){var t=this.overType,e="";return 0===t?e="您已经通关了，真是神一般的手速！":1===t?e="点错了哟，游戏结束！":2===t&&(e="漏掉了一个哟，游戏结束！"),e}},mounted:function(){var e=this;t.setImgSize(),setTimeout(function(){e.waitTime=0},this.waitTime)},methods:{closePropagtion:function(t){t.stopPropagation()},showPop:function(t){this.showModal=!0,"function"==a.type(t)&&setTimeout(t,550)},closePop:function(e){this.waitTime>0||(this.showModal=!1,this.parent&&(this.parent.isOnBusy=!1),t.getPop(e),bus.$emit("closePopEvent"))},onPlayAgain:function(){this.waitTime>0||(this.chanceNum<=0?(this.popState=1,setTimeout(function(){t.setImgSize()},10)):window.location.reload())},onInvest:function(){t.callApp.investment()}}}}).call(e,a(1),a(3))},46:function(t,e){},51:function(t,e,a){a(46);var i=a(25)(a(36),a(61),null,null);i.options.__file="E:\\git\\source_tree\\smileFace\\dr_pc_web\\nodejsSever\\static\\activity\\app\\smileFace\\src\\pop\\playResult.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] playResult.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},61:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask play-result"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container pop-cnt img-size",attrs:{"data-width":"490","data-height":"390","data-borderRadius":"15"},on:{click:function(e){t.closePropagtion(e)}}},[t._t("close",[a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.popState,expression:"popState == 1"}],staticClass:"close img-size",attrs:{"data-width":"50","data-height":"50","data-top":"5","data-right":"5","data-lineHeight":"50"},on:{click:t.closePop}},[t._v("⊗")])]),t._v(" "),0==t.popState?[a("div",{staticClass:"section img-size",attrs:{"data-top":"10","data-height":"64","data-fontSize":"30","data-lineHeight":"60"}},[t._v("本轮成绩")]),t._v(" "),a("div",{staticClass:"section img-size",attrs:{"data-height":"64","data-fontSize":"24","data-lineHeight":"60"}},[t._v(t._s(t.overComment))]),t._v(" "),a("div",{staticClass:"section img-size",attrs:{"data-height":"87"}},[a("div",{staticClass:"col img-size",class:{true:"goldFace",false:"bigFace"}[t.investEnough],attrs:{"data-width":"87","data-height":"87"}}),a("span",{staticClass:"img-size",attrs:{"data-marginLeft":"36","data-fontSize":"60","data-lineHeight":"87"}},[t._v("× "+t._s(t.roundScore))])]),t._v(" "),a("div",{staticClass:"section img-size",attrs:{"data-height":"80"}},[a("span",{staticClass:"img-size",attrs:{"data-fontSize":"24","data-lineHeight":"80"}},[t._v("已累计获得")]),t._v(" "),a("div",{staticClass:"col smallFace img-size",attrs:{"data-width":"40","data-height":"80"}}),t._v(" "),a("span",{staticClass:"img-size",attrs:{"data-fontSize":"24","data-lineHeight":"80"}},[t._v("× "+t._s(t.score))])]),t._v(" "),a("div",{staticClass:"section"},[a("div",{staticClass:"btn play-again img-size",attrs:{"data-borderRadius":"10","data-width":"170","data-height":"50","data-fontSize":"24","data-lineHeight":"50"},on:{click:t.onPlayAgain}},[t._v("再来一次")]),a("div",{staticClass:"btn end-game img-size",attrs:{"data-borderRadius":"10","data-marginLeft":"40","data-width":"170","data-height":"46","data-fontSize":"24","data-lineHeight":"50"},on:{click:t.closePop}},[t._v("不玩了")])])]:t._e(),t._v(" "),1==t.popState?[a("div",{staticClass:"section msg img-size",attrs:{"data-top":"50","data-height":"270","data-fontSize":"30","data-lineHeight":"200"}},[t._v(t._s(t.msg))]),t._v(" "),a("div",{staticClass:"section img-size"},[a("div",{staticClass:"btn invest img-size",attrs:{"data-borderRadius":"10","data-width":"250","data-height":"50","data-fontSize":"24","data-lineHeight":"50"},on:{click:t.onInvest}},[t._v("立即投资")])])]:t._e()],2)])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});