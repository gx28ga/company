webpackJsonp([10],{21:function(t,e){t.exports=function(t,e,o,a){var s,i=t=t||{},n=typeof t.default;"object"!==n&&"function"!==n||(s=t,i=t.default);var r="function"==typeof i?i.options:i;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),o&&(r._scopeId=o),a){var c=Object.create(r.computed||null);Object.keys(a).forEach(function(t){var e=a[t];c[t]=function(){return e}}),r.computed=c}return{esModule:s,exports:i,options:r}}},32:function(t,e,o){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{transition:String,detail:String,closeForward:{type:Number,default:0}},data:function(){return{showModal:!0}},mounted:function(){t.setImgSize()},methods:{closePropagtion:function(t){t.stopPropagation()},showPop:function(t){this.showModal=!0,"function"==o.type(t)&&setTimeout(t,550)},closePop:function(e){this.showModal=!1,t.getPop(e),bus.$emit("closePopEvent")},onClickMain:function(){0==this.closeForward||2==this.closeForward?this.closePop():1==this.closeForward&&t.callApp.investment()}}}}).call(e,o(0),o(3))},43:function(t,e){},50:function(t,e,o){o(43);var a=o(21)(o(32),o(61),null,null);a.options.__file="E:\\git\\source_tree\\jigsaw\\dr_pc_web\\www\\activity\\app\\jigsaw\\src\\pop\\result.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] result.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},61:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:t.transition}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask result"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container pop-cnt img-size",attrs:{"data-width":"551","data-height":"584"},on:{click:function(e){t.closePropagtion(e)}}},[t._t("close",[o("div",{staticClass:"close img-size",attrs:{"data-width":"80","data-height":"80","data-top":"5","data-right":"5"},on:{click:t.closePop}})]),t._v(" "),o("div",{staticClass:"img-size detail",attrs:{"data-top":"254","data-left":"126","data-width":"300","data-fontSize":"30","data-lineHeight":"50"}},[t._v(t._s(t.detail))]),t._v(" "),o("div",{staticClass:"img-size forward-btn",attrs:{"data-top":"465","data-left":"85","data-width":"368","data-height":"78","data-fontSize":"36","data-lineHeight":"80"},on:{click:t.onClickMain}},[t._v(t._s({0:"我知道了",1:"立即投资",2:"关 闭"}[t.closeForward]))])],2)])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});