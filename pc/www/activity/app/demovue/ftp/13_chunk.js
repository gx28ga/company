webpackJsonp([13],{25:function(t,e){t.exports=function(t,e,a,i){var s,n=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,n=t.default);var d="function"==typeof n?n.options:n;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns),a&&(d._scopeId=a),i){var r=Object.create(d.computed||null);Object.keys(i).forEach(function(t){var e=i[t];r[t]=function(){return e}}),d.computed=r}return{esModule:s,exports:n,options:d}}},36:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){t.setImgSize()},props:{transition:String},methods:{close:function(){this.$refs.pop.closePop(),this.okCallback&&this.okCallback.call(this)}}}}).call(e,a(1))},51:function(t,e){},53:function(t,e,a){a(51);var i=a(25)(a(36),a(67),null,null);i.options.__file="E:\\git\\duorongcf\\develop\\pc\\www\\activity\\app\\demovue\\src\\pop\\friend.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] friend.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},67:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pop",{ref:"pop",attrs:{transition:t.transition}},[a("div",{staticClass:"explain img-size",attrs:{"data-width":"610","data-height":"500","data-paddingLeft":"20"},slot:"main"},[a("div",{staticClass:"close img-size",attrs:{"data-width":"84","data-height":"84","data-lineHeight":"84"},on:{click:t.close}},[t._v("x")]),t._v(" "),a("div",{staticClass:"contentExplain img-size",attrs:{"data-marginTop":"84","data-marginBottom":"50"}},[a("dl",{staticClass:"img-size",attrs:{"data-width":"600"}},[a("dt",{staticClass:"img-size",attrs:{"data-width":"30"}},[t._v("①")]),t._v(" "),a("dd",{staticClass:"img-size",attrs:{"data-width":"540","data-paddingLeft":"10","data-paddingBottom":"20"}},[t._v("活动期间，被邀请人在注册成功当天起首月内（30天内，含第30天），成功投资任意产品（除新手宝外），邀请人就能获得一定比例的返现奖励：")])]),t._v(" "),a("dl",{staticClass:"img-size",attrs:{"data-width":"600"}},[a("dt",{staticClass:"img-size",attrs:{"data-width":"30"}},[t._v("②")]),t._v(" "),a("dd",{staticClass:"img-size",attrs:{"data-width":"540","data-paddingLeft":"10","data-paddingBottom":"20"}},[t._v("计算公式： "),a("br"),t._v("\r\n                首月返现奖励=被邀请人投资产品基本收益金额（不含任何加息/红包等福利收益）*15%")])])])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});