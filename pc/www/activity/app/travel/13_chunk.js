webpackJsonp([13],{24:function(t,e){t.exports=function(t,e,s,a){var i,o=t=t||{},n=typeof t.default;"object"!==n&&"function"!==n||(i=t,o=t.default);var r="function"==typeof o?o.options:o;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),s&&(r._scopeId=s),a){var c=Object.create(r.computed||null);Object.keys(a).forEach(function(t){var e=a[t];c[t]=function(){return e}}),r.computed=c}return{esModule:i,exports:o,options:r}}},37:function(t,e,s){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{transition:String,xchgType:Number},data:function(){return{showModal:!0}},computed:{msg:function(){var t=["本次兑换将消耗"];switch(this.xchgType){case 1:t.push("三亚、西安、香港，卡片各10张，");break;case 2:t.push("北京、三亚、拉萨，卡片各1张，");break;case 3:t.push("北京、桂林、广州，卡片各1张，");break;case 4:t.push("所有12个城市卡片各1张，")}return t.push("请确认是否兑换？"),t.slice(0)}},mounted:function(){t.setImgSize(),bus.$emit("pop-display-ok")},methods:{closePropagtion:function(t){t.stopPropagation()},showPop:function(t){this.showModal=!0,"function"==s.type(t)&&setTimeout(t,550)},closePop:function(e){this.showModal=!1,t.getPop(e),bus.$emit("closePopEvent")},onConfirm:function(){var t=this;this.closePop(function(){bus.$emit("xchg-confirmed",t.xchgType)})}}}}).call(e,s(0),s(3))},53:function(t,e){},58:function(t,e,s){s(53);var a=s(24)(s(37),s(74),null,null);a.options.__file="E:\\git\\source_tree\\travel\\dr_pc_web\\nodejsSever\\static\\activity\\app\\travel\\src\\pop\\exchange.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] exchange.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},74:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:t.transition}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask exchange"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container img-size",attrs:{"data-width":"500","data-height":"597","data-borderRadius":"15"},on:{click:function(e){t.closePropagtion(e)}}},[t._t("close",[s("div",{staticClass:"close img-size",attrs:{"data-width":"50","data-height":"50","data-top":"5","data-right":"5","data-lineHeight":"50"},on:{click:t.closePop}})]),t._v(" "),s("div",{staticClass:"content-box img-size",attrs:{"data-top":"180"}},[s("div",{staticClass:"img-size",class:{1:"ctrip-50",2:"ctrip-100",3:"ctrip-300",4:"ctrip-3000"}[t.xchgType],attrs:{"data-height":"55"}}),t._v(" "),s("div",{staticClass:"msg-area img-size",attrs:{"data-height":"245"}},[s("div",t._l(t.msg,function(e){return s("div",{staticClass:"img-size",attrs:{"data-fontSize":"24","data-lineHeight":"40"}},[t._v(t._s(e))])}))]),t._v(" "),s("div",{staticClass:"btn-area img-size",attrs:{"data-paddingLeft":"40"}},[s("div",{staticClass:"img-size",attrs:{"data-width":"195","data-height":"75"},on:{click:t.onConfirm}}),s("div",{staticClass:"img-size",attrs:{"data-marginLeft":"30","data-width":"195","data-height":"75"},on:{click:t.closePop}})])])],2)])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});